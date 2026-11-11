// Format balance check (designer 2026-11-11): production times (LS 12 < TV 14–32 < movie 30 weeks) and money per
// production-week by format, plus where each strategy lands. Shipped default (TV + limited series on).
//   npx tsx scripts/formats.ts [--seeds 8] [--years 10] [--set path=json ...]  → reports/formats/summary.md
import { mkdirSync, writeFileSync } from "node:fs";
import { baselineConfig, setPath } from "../src/core/config";
import { runCareer } from "../src/batch/runner";
import { releaseAccounts } from "../src/batch/econ";
import { checkInvariants } from "../src/batch/diagnostics";

const argv = process.argv;
const num = (k: string, d: number) => (argv.indexOf(`--${k}`) > 0 ? Number(argv[argv.indexOf(`--${k}`) + 1]) : d);
const seeds = num("seeds", 8), years = num("years", 10);
let cfg = baselineConfig();
const sets: string[] = [];
argv.forEach((a, i) => a === "--set" && sets.push(argv[i + 1]));
for (const s of sets) {
  const [k, v] = s.split("=");
  cfg = setPath(cfg, k, JSON.parse(v));
}
const POL = ["balanced", "quality-first", "mixed", "tv-first", "limited-focus", "renewal-franchise", "cheap-duds"];
const med = (x: number[]) => (x.length ? [...x].sort((a, b) => a - b)[Math.floor((x.length - 1) / 2)] : NaN);
const K = (x: number) => (Number.isNaN(x) ? "—" : `$${(x / 1000).toFixed(1)}K`);
const t0 = Date.now();
const per: Record<string, number[]> = {};
const rows: string[] = [];
let viol = 0;
for (const st of POL) {
  const cash: number[] = [], prest: number[] = [], neg: number[] = [], made: Record<string, number> = {};
  for (let seed = 1; seed <= seeds; seed++) {
    const r = runCareer(seed, st, cfg, { productions: 0, years });
    viol += checkInvariants(r, cfg).length;
    cash.push(r.state.cash);
    prest.push(r.state.prestige);
    neg.push(r.state.counters.negativeCashWeeks);
    for (const a of releaseAccounts(r.state, cfg).filter((x) => x.done)) {
      (per[a.format] ??= []).push((a.allInNet + (a.subsValueEst ?? 0)) / Math.max(1, a.releaseWeek - a.startWeek));
      made[a.format] = (made[a.format] ?? 0) + 1 / seeds;
    }
  }
  rows.push(`| ${st} | ${Object.entries(made).map(([k, v]) => `${k} ${v.toFixed(1)}`).join(", ")} | $${(med(cash) / 1e6).toFixed(2)}M | ${med(prest)} | ${med(neg)} |`);
}
const L = [
  "# Format balance",
  "",
  `Shipped default${sets.length ? ` with ${sets.join(", ")}` : ""}, seeds 1–${seeds}, ${years}-year careers. Times: movie ${cfg.production.movie.durationWeeks} wks, limited series ${cfg.limitedSeries.durationWeeks} wks, TV ${cfg.tv.durationBaseWeeks} + ${cfg.tv.weeksPerEpisode}/episode. Prices: ticket $${cfg.world.grossPerViewer}, limited series $${cfg.limitedSeries.grossPerEpisodeViewer}/episode viewer, TV $${cfg.tv.grossPerEpisodeViewer}/episode viewer. TEST VALUES.`,
  "",
  `Net per production-week (median, all strategies): ${Object.entries(per).map(([k, v]) => `**${k}** ${K(med(v))}`).join(" · ")}`,
  "",
  "| Strategy | Releases per career | End cash p50 | Prestige p50 | Negative-cash weeks p50 |",
  "|---|---|---|---|---|",
  ...rows,
  "",
  `Invariant violations: ${viol}. Elapsed ${((Date.now() - t0) / 1000).toFixed(1)} s.`,
];
mkdirSync("reports/formats", { recursive: true });
writeFileSync("reports/formats/summary.md", L.join("\n") + "\n");
console.log(L.join("\n"));
