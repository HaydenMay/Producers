// Format balance diagnosis (2026-11-12): what each format earns PER 30 PRODUCTION-WEEKS (one movie's length) in money,
// Prestige and Hall of Fame titles, pooled over the default policies; plus how each single-format strategy's 20-year
// legacy splits into Prestige, Hall of Fame and cash. Goal (designer): a mix of formats is the best route.
//   npx tsx scripts/format-balance.ts [--seeds 16] [--set path=value ...]  → reports/format-balance/summary.md
import { mkdirSync, writeFileSync } from "node:fs";
import { baselineConfig, setPath, type Config } from "../src/core/config";
import { runCareer } from "../src/batch/runner";
import { releaseAccounts } from "../src/batch/econ";
import { careerRecap } from "../src/core/career";
import { formatOf } from "../src/core/formats";
import { checkInvariants } from "../src/batch/diagnostics";

const argv = process.argv;
const seeds = argv.indexOf("--seeds") > 0 ? Number(argv[argv.indexOf("--seeds") + 1]) : 16;
let cfg: Config = baselineConfig();
for (let i = 0; i < argv.length; i++)
  if (argv[i] === "--set") {
    const [k, v] = argv[i + 1].split("=");
    cfg = setPath(cfg, k, JSON.parse(v));
  }
const POL = ["mixed", "balanced", "limited-focus", "tv-first", "quality-first", "streaming-pivot"];
const SINGLE = ["balanced", "limited-focus", "tv-first", "mixed"];
const med = (x: number[]) => [...x].sort((a, b) => a - b)[Math.floor((x.length - 1) / 2)];
const t0 = Date.now();
let viol = 0;

type Agg = { weeks: number; net: number; prestige: number; hofTitles: number; releases: number; hof: number };
const agg: Record<string, Agg> = {};
for (const st of POL)
  for (let seed = 1; seed <= seeds; seed++) {
    const r = runCareer(seed, st, cfg, { productions: 0, years: 10 });
    viol += checkInvariants(r, cfg).length;
    const s = r.state;
    const pByRel = new Map<string, number>();
    for (const e of s.events) if (e.type === "prestige" && e.data?.releaseId) pByRel.set(e.data.releaseId as string, (pByRel.get(e.data.releaseId as string) ?? 0) + (e.data.amount as number));
    const accById = new Map(releaseAccounts(s, cfg).map((a) => [a.id, a]));
    const seenShows = new Set<string>();
    for (const rel of s.releases) {
      if (rel.route === "original" || rel.startWeek === undefined) continue;
      const f = formatOf(rel);
      const a = (agg[f] ??= { weeks: 0, net: 0, prestige: 0, hofTitles: 0, releases: 0, hof: 0 });
      a.weeks += rel.releaseWeek - rel.startWeek;
      a.net += accById.get(rel.id)?.allInNet ?? 0;
      a.prestige += pByRel.get(rel.id) ?? 0;
      a.releases++;
      if (rel.hallOfFame) {
        a.hof++;
        const key = f === "tv" ? `show:${rel.ipId}` : rel.id;
        if (!seenShows.has(key)) seenShows.add(key), (a.hofTitles += (cfg.career.legacyScore as { hallOfFameFormatWeight?: Record<string, number> }).hallOfFameFormatWeight?.[f] ?? 1);
      }
    }
  }

const rows: string[] = [];
for (const f of ["movie", "limited_series", "tv"]) {
  const a = agg[f];
  if (!a) continue;
  const k = 30 / a.weeks;
  rows.push(`| ${f} | ${a.releases} | $${((a.net * k) / 1000).toFixed(0)}K | ${(a.prestige * k).toFixed(0)} | ${(a.hofTitles * k).toFixed(2)} | ${((a.hof / a.releases) * 100).toFixed(1)}% | ${((a.hofTitles * k * cfg.career.legacyScore.hallOfFame + a.prestige * k * cfg.career.legacyScore.prestige + (a.net * k) / cfg.career.legacyScore.cashPer) / 1000).toFixed(2)}K |`);
}

const legacyRows: string[] = [];
for (const st of SINGLE) {
  const parts = { prestige: [] as number[], hof: [] as number[], cash: [] as number[], total: [] as number[] };
  for (let seed = 1; seed <= seeds; seed++) {
    const s = runCareer(seed, st, cfg, { productions: 0, years: 20 }).state;
    const rc = careerRecap(s, cfg);
    const p = s.prestige * cfg.career.legacyScore.prestige, c = Math.max(0, s.cash) / cfg.career.legacyScore.cashPer;
    parts.prestige.push(p), parts.cash.push(c), parts.hof.push(rc.legacyScore - p - c), parts.total.push(rc.legacyScore);
  }
  legacyRows.push(`| ${st} | ${(med(parts.total) / 1000).toFixed(1)}K | ${(med(parts.prestige) / 1000).toFixed(1)}K | ${(med(parts.hof) / 1000).toFixed(1)}K | ${(med(parts.cash) / 1000).toFixed(1)}K |`);
}

const L = [
  "# Format balance",
  "",
  `Default config${argv.includes("--set") ? " with overrides " + argv.filter((_, i) => argv[i - 1] === "--set").join(", ") : ""}. Per 30 production-weeks (one movie's length), pooled over ${POL.join(", ")}; seeds 1–${seeds}, 10 years. Legacy points = Prestige + ${cfg.career.legacyScore.hallOfFame} per Hall of Fame title (a TV show counts once) + cash / ${cfg.career.legacyScore.cashPer}. TEST VALUES.`,
  "",
  "| Format | Releases | Money | Prestige | Hall of Fame titles | HoF share | Legacy points |",
  "|---|---|---|---|---|---|---|",
  ...rows,
  "",
  "## 20-year legacy, split (median of each part)",
  "",
  "| Strategy | Legacy | Prestige | Hall of Fame | Cash |",
  "|---|---|---|---|---|",
  ...legacyRows,
  "",
  `Invariant violations: ${viol}. Elapsed ${((Date.now() - t0) / 1000).toFixed(1)} s.`,
];
mkdirSync("reports/format-balance", { recursive: true });
if (!argv.includes("--set")) writeFileSync("reports/format-balance/summary.md", L.join("\n") + "\n");
console.log(L.join("\n"));
