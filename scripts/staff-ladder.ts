// Audit H3 + M3 rebalance (2026-11-12): the LOCKED 4 -> 6 -> 8 staff ladder (PROD-020) and default agents that play
// the default game (no legacy hiring cutoffs, firing on, money-based renewal).
//   BEFORE = today's default with the old values put back (uncapped staff, legacy agent heuristics).
//   AFTER  = config/baseline.json as shipped.
//   npx tsx scripts/staff-ladder.ts [--seeds 16] [--years 10] [--legacy-years 20]  → reports/staff-ladder/summary.md
import { mkdirSync, writeFileSync } from "node:fs";
import { baselineConfig, setPath, type Config } from "../src/core/config";
import { runCareer } from "../src/batch/runner";
import { checkInvariants } from "../src/batch/diagnostics";
import { careerRecap } from "../src/core/career";

const argv = process.argv;
const num = (k: string, d: number) => (argv.indexOf(`--${k}`) > 0 ? Number(argv[argv.indexOf(`--${k}`) + 1]) : d);
const seeds = num("seeds", 16), years = num("years", 10), legacyYears = num("legacy-years", 20);
const POL = ["balanced", "quality-first", "famous-star", "franchise-builder", "experimenter", "cheap-duds", "poor-fit-chooser", "mixed", "tv-first", "limited-focus", "renewal-franchise", "streaming-pivot"];
const LEGACY_POL = ["mixed", "quality-first", "balanced", "tv-first", "limited-focus", "cheap-duds"];

const AFTER = baselineConfig();
let BEFORE: Config = AFTER;
for (const [k, v] of [["staffCapacity.ladder", [999]], ["staffCapacity.upgradeCosts", []], ["staffCapacity.upgradePrestige", []], ["agents.legacyHeuristicStaffCaps", true], ["agents.useFiring", false], ["agents.economicRenewal", false]] as const)
  BEFORE = setPath(BEFORE, k, v as unknown);

const W = AFTER.time.weeksPerYear;
const med = (x: number[]) => (x.length ? [...x].sort((a, b) => a - b)[Math.floor((x.length - 1) / 2)] : NaN);
const M = (x: number) => (Number.isNaN(x) ? "—" : `$${(x / 1e6).toFixed(2)}M`);
const Y = (x: number) => (Number.isNaN(x) ? "—" : x.toFixed(1));
const t0 = Date.now();
let viol = 0;

function measure(cfg: Config, st: string) {
  const cash: number[] = [], prest: number[] = [], staff: number[] = [], rel: number[] = [], neg: number[] = [], up1: number[] = [], up2: number[] = [], cat: number[] = [];
  let avgSum = 0, n = 0, hof = 0, upgraded = 0;
  for (let seed = 1; seed <= seeds; seed++) {
    const r = runCareer(seed, st, cfg, { productions: 0, years });
    viol += checkInvariants(r, cfg).length;
    const s = r.state;
    cash.push(s.cash);
    prest.push(s.prestige);
    staff.push(s.staff.length);
    rel.push(s.releases.length);
    neg.push(s.counters.negativeCashWeeks);
    for (const x of s.releases) (avgSum += x.avgScore), n++, (hof += x.hallOfFame ? 1 : 0);
    if (s.upgrades.length) upgraded++, up1.push(s.upgrades[0].week / W);
    if (s.upgrades.length > 1) up2.push(s.upgrades[1].week / W);
    const c = s.events.find((e) => e.message.startsWith("Star catalog unlocked"));
    if (c) cat.push(c.week / W);
  }
  return { cash: med(cash), prest: med(prest), staff: med(staff), rel: med(rel), avg: n ? avgSum / n : NaN, hof: n ? hof / n : 0, neg: med(neg), upgraded, up1: med(up1), up2: med(up2), cat: med(cat) };
}

const rows: string[] = [];
for (const st of POL) {
  const b = measure(BEFORE, st), a = measure(AFTER, st);
  rows.push(`| ${st} | ${M(b.cash)} → **${M(a.cash)}** | ${b.prest} → ${a.prest} | ${b.staff} → ${a.staff} | ${b.rel} → ${a.rel} | ${b.avg.toFixed(2)} → ${a.avg.toFixed(2)} | ${(b.hof * 100).toFixed(0)}% → ${(a.hof * 100).toFixed(0)}% | ${b.neg} → ${a.neg} | ${a.upgraded}/${seeds} · ${Y(a.up1)} / ${Y(a.up2)} | ${Y(b.cat)} → ${Y(a.cat)} |`);
}

const legacyRows: string[] = [];
for (const st of LEGACY_POL) {
  const score = (cfg: Config) => {
    const xs: number[] = [];
    for (let seed = 1; seed <= seeds; seed++) xs.push(careerRecap(runCareer(seed, st, cfg, { productions: 0, years: legacyYears }).state, cfg).legacyScore);
    return med(xs);
  };
  legacyRows.push(`| ${st} | ${(score(BEFORE) / 1000).toFixed(1)}K → **${(score(AFTER) / 1000).toFixed(1)}K** |`);
}

const L = [
  "# Staff ladder + default agents (audit H3 + M3)",
  "",
  `Seeds 1–${seeds}, ${years}-year careers (legacy score: ${legacyYears} years). **BEFORE** = default with uncapped staff and the legacy agent heuristics; **AFTER** = shipped default: staff ladder 4 → 6 → 8 ($250K + 200 Prestige, $750K + 1,000 Prestige *(test)*), agents without the legacy hiring cutoffs, firing on, money-based TV renewal. Medians unless noted. TEST VALUES.`,
  "",
  "| Policy | End cash | Prestige | Staff at end | Releases | Mean score | HoF share | Negative-cash weeks | Upgrades (AFTER): careers · median year 1st / 2nd | Catalog opens (year) |",
  "|---|---|---|---|---|---|---|---|---|---|",
  ...rows,
  "",
  `## ${legacyYears}-year legacy score (median)`,
  "",
  "| Policy | BEFORE → AFTER |",
  "|---|---|",
  ...legacyRows,
  "",
  `Invariant violations: ${viol}. Elapsed ${((Date.now() - t0) / 1000).toFixed(1)} s.`,
];
mkdirSync("reports/staff-ladder", { recursive: true });
writeFileSync("reports/staff-ladder/summary.md", L.join("\n") + "\n");
console.log(L.join("\n"));
