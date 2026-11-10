import { readFileSync } from "node:fs";
import { baselineConfig, withOverrides } from "../src/core/config";
import { runCareer } from "../src/batch/runner";
const cfg = withOverrides(withOverrides(baselineConfig(), JSON.parse(readFileSync("config/gate3.json", "utf8"))), process.argv[2] ? JSON.parse(process.argv[2]) : {});
const rows: Record<string, { n: number; weeks: number; base: number; gross: number; take: number; total: number; avg: number; adv: number; uniq: number }> = {};
for (const s of ["balanced", "tv-first", "traditional-holdout", "limited-focus", "mixed"]) for (let seed = 1; seed <= 20; seed++) {
  const st = runCareer(seed, s, cfg, { productions: 0, years: 15 }).state;
  for (const r of st.releases) {
    if (r.active) continue;
    const k = `${r.format ?? "movie"}${r.episodes ? "-" + r.episodes : ""}${r.route === "original" ? "-orig" : ""}`;
    const dur = r.format === "tv" ? Math.round(cfg.tv.durationBaseWeeks + cfg.tv.weeksPerEpisode * r.episodes!) : r.format === "limited_series" ? cfg.limitedSeries.durationWeeks : 16;
    const x = (rows[k] ??= { n: 0, weeks: 0, base: 0, gross: 0, take: 0, total: 0, avg: 0, adv: 0, uniq: 0 });
    x.n++; x.weeks += dur; x.base += r.baseCost; x.gross += r.grossTotal; x.take += r.studioTake; x.total += r.studioTake + r.surplusKept - r.cashOverrun; x.avg += r.avgScore; x.adv += r.advance; x.uniq += r.uniqueViewers ?? r.totalViewers;
  }
}
for (const [k, x] of Object.entries(rows).sort()) console.log(`${k.padEnd(18)} n ${String(x.n).padStart(4)} prodWeeks ${(x.weeks / x.n).toFixed(0)} base $${(x.base / x.n / 1e3).toFixed(0)}K adv $${(x.adv / x.n / 1e3).toFixed(0)}K gross $${(x.gross / x.n / 1e3).toFixed(0)}K studioTake $${(x.take / x.n / 1e3).toFixed(0)}K net(take+surplus-overrun) $${(x.total / x.n / 1e3).toFixed(0)}K per prod-week $${(x.total / x.weeks / 1e3).toFixed(1)}K avg ${(x.avg / x.n).toFixed(2)} distinct ${(x.uniq / x.n / 1e3).toFixed(0)}K`);
