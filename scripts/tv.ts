// TV economics check (PROD-139/140/209): TV-enabled setup = shipped default + config/gate3.json (formats on).
//   npx tsx scripts/tv.ts [--seeds 8] [--years 10] [--gpev 0.32,0.42]  → reports/tv/summary.md
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { baselineConfig, withOverrides, type Config } from "../src/core/config";
import { runCareer } from "../src/batch/runner";
import { releaseAccounts } from "../src/batch/econ";
import { checkInvariants } from "../src/batch/diagnostics";

const arg = (k: string, d: string) => {
  const i = process.argv.indexOf(`--${k}`);
  return i > 0 ? process.argv[i + 1] : d;
};
const seeds = Number(arg("seeds", "8")), years = Number(arg("years", "10"));
const BASE = withOverrides(baselineConfig(), JSON.parse(readFileSync("config/gate3.json", "utf8")));
const gpevs = arg("gpev", String(BASE.tv.grossPerEpisodeViewer)).split(",").map(Number);
const POL = ["balanced", "tv-first", "renewal-franchise", "mixed", "limited-focus"];
const med = (x: number[]) => (x.length ? [...x].sort((a, b) => a - b)[Math.floor((x.length - 1) / 2)] : NaN);
const K = (x: number) => (Number.isNaN(x) ? "—" : `$${(x / 1000).toFixed(1)}K`);
const M = (x: number) => `$${(x / 1e6).toFixed(2)}M`;
const t0 = Date.now();
const L = ["# TV economics (PROD-139/140/209)", "", `Shipped default + \`config/gate3.json\` (TV, limited series, streaming on), seeds 1–${seeds}, ${years}-year careers. Net = all-in (studio take + surplus − overruns − payroll/upkeep during production). Per production-week = net ÷ weeks from start to release. TEST VALUES.`, ""];
function run(cfg: Config) {
  const rows: string[] = [];
  const seasons: Record<string, { net: number[]; score: number[]; health: number[] }> = {};
  let viol = 0;
  for (const st of POL) {
    const perWeek: Record<string, number[]> = {}, cash: number[] = [], prest: number[] = [], tvPrest: number[] = [], runs: number[] = [];
    for (let seed = 1; seed <= seeds; seed++) {
      const r = runCareer(seed, st, cfg, { productions: 0, years });
      viol += checkInvariants(r, cfg).length;
      const s = r.state;
      cash.push(s.cash);
      prest.push(s.prestige);
      tvPrest.push(s.events.filter((e) => e.type === "prestige" && String(e.data?.milestone ?? "").startsWith("tv_")).reduce((a, e) => a + (e.data!.amount as number), 0));
      const shows: Record<string, number> = {};
      for (const a of releaseAccounts(s, cfg).filter((x) => x.done)) {
        (perWeek[a.format] ??= []).push(a.allInNet / Math.max(1, a.releaseWeek - a.startWeek));
        const rel = s.releases.find((x) => x.id === a.id)!;
        if (a.format === "tv") {
          shows[rel.ipId] = (shows[rel.ipId] ?? 0) + 1;
          const k = (rel.seasonNumber ?? 1) >= 6 ? "S6+" : `S${rel.seasonNumber}`;
          const b = (seasons[k] ??= { net: [], score: [], health: [] });
          b.net.push(a.allInNet);
          b.score.push(a.avg);
          b.health.push((rel.trace.showHealth as { mult: number } | undefined)?.mult ?? 1);
        }
      }
      runs.push(...Object.values(shows));
    }
    rows.push(`| ${st} | ${["movie", "limited_series", "tv"].map((f) => K(med(perWeek[f] ?? []))).join(" | ")} | ${runs.length ? `${med(runs)} (max ${Math.max(...runs)})` : "—"} | ${med(prest)} (TV ${med(tvPrest)}) | ${M(med(cash))} |`);
  }
  return { rows, seasons, viol };
}
for (const g of gpevs) {
  const { rows, seasons, viol } = run(withOverrides(BASE, { tv: { grossPerEpisodeViewer: g } }));
  L.push(`## TV pay ${g} per episode viewer`, "", "| Policy | Movie net / prod-week | Limited series | TV season | Show length (seasons) | Prestige p50 (from TV milestones) | End cash p50 |", "|---|---|---|---|---|---|---|", ...rows, "", "TV seasons by number: " + Object.keys(seasons).sort().map((k) => `**${k}** score ${med(seasons[k].score).toFixed(1)}, health ${med(seasons[k].health).toFixed(2)}, net ${K(med(seasons[k].net))}, ${Math.round((100 * seasons[k].net.filter((x) => x < 0).length) / seasons[k].net.length)}% lose (n ${seasons[k].net.length})`).join(" · "), "", `Invariant violations: ${viol}.`, "");
}
L.push(`Elapsed ${((Date.now() - t0) / 1000).toFixed(1)} s.`);
mkdirSync("reports/tv", { recursive: true });
writeFileSync("reports/tv/summary.md", L.join("\n") + "\n");
console.log(L.join("\n"));
