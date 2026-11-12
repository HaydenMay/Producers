// PROD-226 + PROD-227 tuning: studio-size expectations + distribution clout ("we're a bigger company now, the expectations are higher").
// For each studio size cap (4 / 6 / 8 staff) run whole careers of the hiring policies and report Hall of Fame share,
// mean score, end cash, Prestige and the 20-year legacy score. Goals (designer 2026-11-12): bigger is still better
// (8 > 6 > 4), but greatness stays rare: HoF ~8% / ~11% / ~14% *(test targets)*.
//   npx tsx scripts/studio-expectations.ts                     → shipped values, 16 seeds → reports/studio-expectations/summary.md
//   npx tsx scripts/studio-expectations.ts --grid [--seeds 8]  → sweep toughnessByUpgrades (console only)
import { mkdirSync, writeFileSync } from "node:fs";
import { baselineConfig, setPath, type Config } from "../src/core/config";
import { runCareer } from "../src/batch/runner";
import { checkInvariants } from "../src/batch/diagnostics";
import { careerRecap } from "../src/core/career";

const argv = process.argv;
const num = (k: string, d: number) => (argv.indexOf(`--${k}`) > 0 ? Number(argv[argv.indexOf(`--${k}`) + 1]) : d);
const grid = argv.includes("--grid");
const seeds = num("seeds", grid ? 8 : 16), years = 10, legacyYears = 20;
const POL = ["balanced", "quality-first", "mixed", "tv-first", "limited-focus", "experimenter", "franchise-builder", "streaming-pivot"];
const LEGACY_POL = ["mixed", "quality-first", "balanced", "tv-first", "limited-focus"];
const med = (x: number[]) => [...x].sort((a, b) => a - b)[Math.floor((x.length - 1) / 2)];

function capped(cfg: Config, cap: 4 | 6 | 8): Config {
  if (cap === 8) return cfg;
  const n = cap === 6 ? 1 : 0;
  let c = setPath(cfg, "staffCapacity.ladder", cfg.staffCapacity.ladder.slice(0, n + 1));
  c = setPath(c, "staffCapacity.upgradeCosts", cfg.staffCapacity.upgradeCosts.slice(0, n));
  return setPath(c, "staffCapacity.upgradePrestige", cfg.staffCapacity.upgradePrestige.slice(0, n));
}

let viol = 0;
function measure(cfg: Config, withLegacy: boolean) {
  let rel = 0, hof = 0, sum = 0;
  const cash: number[] = [], prest: number[] = [], perPol: Record<string, { rel: number; hof: number }> = {};
  for (const st of POL) {
    perPol[st] = { rel: 0, hof: 0 };
    for (let seed = 1; seed <= seeds; seed++) {
      const r = runCareer(seed, st, cfg, { productions: 0, years });
      viol += checkInvariants(r, cfg).length;
      for (const x of r.state.releases) {
        rel++, (sum += x.avgScore), perPol[st].rel++;
        if (x.hallOfFame) hof++, perPol[st].hof++;
      }
      cash.push(r.state.cash);
      prest.push(r.state.prestige);
    }
  }
  const legacy: Record<string, number> = {};
  if (withLegacy)
    for (const st of LEGACY_POL) {
      const xs: number[] = [];
      for (let seed = 1; seed <= seeds; seed++) xs.push(careerRecap(runCareer(seed, st, cfg, { productions: 0, years: legacyYears }).state, cfg).legacyScore);
      legacy[st] = med(xs);
    }
  return { hof: hof / rel, mean: sum / rel, cash: med(cash), prest: med(prest), perPol, legacy };
}

const pct = (x: number) => `${(x * 100).toFixed(1)}%`;
const base = baselineConfig();

if (grid) {
  // --pairs "0.025,0.04;0.03,0.045" sweeps just those pairs; otherwise the coarse grid
  const pi = argv.indexOf("--pairs");
  const pairs: number[][] = pi > 0 ? argv[pi + 1].split(";").map((p) => p.split(",").map(Number)) : [0.02, 0.03, 0.04, 0.05].flatMap((a) => [0.04, 0.05, 0.06, 0.07, 0.08].filter((b) => b > a).map((b) => [a, b]));
  for (const [t1, t2] of pairs) {
      const cfg = setPath(base, "expectations.studioSize.toughnessByUpgrades", [t1, t2]);
      const r = ([4, 6, 8] as const).map((cap) => measure(capped(cfg, cap), false));
      console.log(`t=[${t1}, ${t2}]  HoF 4/6/8: ${r.map((x) => pct(x.hof)).join(" / ")}   mean: ${r.map((x) => x.mean.toFixed(2)).join(" / ")}   prestige: ${r.map((x) => x.prest).join(" / ")}`);
    }
  process.exit(0);
}

const t0 = Date.now();
const off = setPath(setPath(base, "expectations.studioSize.enabled", false), "economy.lateDistribution.studioClout.enabled", false);
const rows: string[] = [], legacyRows: string[] = [], polRows: string[] = [];
const results: Record<string, ReturnType<typeof measure>> = {};
for (const cap of [4, 6, 8] as const) {
  const before = measure(capped(off, cap), cap === 8);
  const after = measure(capped(base, cap), true);
  results[cap] = after;
  rows.push(`| ${cap} staff | ${pct(before.hof)} → **${pct(after.hof)}** | ${before.mean.toFixed(2)} → ${after.mean.toFixed(2)} | ${before.prest} → ${after.prest} | $${(before.cash / 1e6).toFixed(2)}M → $${(after.cash / 1e6).toFixed(2)}M |`);
  if (cap === 8) for (const st of LEGACY_POL) legacyRows.push(`| ${st} | ${(before.legacy[st] / 1000).toFixed(1)}K → **${(after.legacy[st] / 1000).toFixed(1)}K** |`);
}
for (const st of POL) polRows.push(`| ${st} | ${([4, 6, 8] as const).map((c) => pct(results[c].perPol[st].hof / Math.max(1, results[c].perPol[st].rel))).join(" | ")} |`);
for (const st of LEGACY_POL) {
  const i = legacyRows.findIndex((l) => l.startsWith(`| ${st} |`));
  legacyRows[i] = legacyRows[i].replace(/ \|$/, ` | ${(results[4].legacy[st] / 1000).toFixed(1)}K / ${(results[6].legacy[st] / 1000).toFixed(1)}K / ${(results[8].legacy[st] / 1000).toFixed(1)}K |`);
}
const t = base.expectations as unknown as { studioSize: { toughnessByUpgrades: number[] } };
const L = [
  "# Studio size: expectations (PROD-226) + distribution clout (PROD-227)",
  "",
  `"We're a bigger company now, the expectations are higher." Reviews get ${t.studioSize.toughnessByUpgrades.map((x) => `${(x * 100).toFixed(1)}%`).join(" / ")} tougher after the 1st / 2nd studio upgrade *(test)*. Careers capped at 4, 6 or 8 staff; policies: ${POL.join(", ")}. Seeds 1–${seeds}, ${years} years (legacy ${legacyYears} years). Bigger studios also get better distribution deals: ad budget x${(base.economy.lateDistribution as unknown as { studioClout: { adMultByUpgrades: number[] } }).studioClout.adMultByUpgrades.join(" / ")}, distributor cut x${(base.economy.lateDistribution as unknown as { studioClout: { shareMultByUpgrades: number[] } }).studioClout.shareMultByUpgrades.join(" / ")} *(test)*. **before** = both off (crew size alone); **after** = shipped. Goals: bigger is still better (8 >= 6 >= 4) but the Hall of Fame stays rare (~15%), and an 8-person studio earns back its bigger payroll. TEST VALUES.`,
  "",
  "| Studio size cap | HoF share | Mean score | Prestige (median) | End cash (median) |",
  "|---|---|---|---|---|",
  ...rows,
  "",
  "## Hall of Fame share by policy (after; 4 / 6 / 8 staff)",
  "",
  "| Policy | 4 | 6 | 8 |",
  "|---|---|---|---|",
  ...polRows,
  "",
  `## ${legacyYears}-year legacy score (median)`,
  "",
  "| Policy | 8 staff: before → after | after, capped 4 / 6 / 8 |",
  "|---|---|---|",
  ...legacyRows,
  "",
  `Invariant violations: ${viol}. Elapsed ${((Date.now() - t0) / 1000).toFixed(1)} s.`,
];
mkdirSync("reports/studio-expectations", { recursive: true });
writeFileSync("reports/studio-expectations/summary.md", L.join("\n") + "\n");
console.log(L.join("\n"));
