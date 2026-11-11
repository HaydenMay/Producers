// Before/after comparison of the whole default game.
//   BEFORE = legacyConfig(): the pre-Producers default (proven byte-identical to the old `main` 2fe1135 default).
//   AFTER  = baselineConfig(): today's Producers default.
//   npx tsx scripts/compare-defaults.ts [--seeds 16] [--years 10]  → reports/compare/summary.md
import { mkdirSync, writeFileSync } from "node:fs";
import { baselineConfig, legacyConfig, type Config } from "../src/core/config";
import { runCareer } from "../src/batch/runner";
import { checkInvariants } from "../src/batch/diagnostics";
import { releaseAccounts } from "../src/batch/econ";

const argv = process.argv;
const num = (k: string, d: number) => (argv.indexOf(`--${k}`) > 0 ? Number(argv[argv.indexOf(`--${k}`) + 1]) : d);
const seeds = num("seeds", 16), years = num("years", 10);
const POL = ["balanced", "quality-first", "famous-star", "franchise-builder", "experimenter", "cheap-duds", "poor-fit-chooser", "mixed", "tv-first", "limited-focus", "renewal-franchise", "streaming-pivot"];
const med = (x: number[]) => (x.length ? [...x].sort((a, b) => a - b)[Math.floor((x.length - 1) / 2)] : NaN);
const pct = (n: number, d: number) => (d ? `${Math.round((100 * n) / d)}%` : "—");
const M = (x: number) => (Number.isNaN(x) ? "—" : `$${(x / 1e6).toFixed(2)}M`);

type Row = { cash: number; prestige: number; releases: number; formats: Record<string, number>; avg: number; hof: number; sub4: number; neg: number; viol: number; genres: number; loseMovies: number; movies: number };
function careers(cfg: Config, st: string): Row[] {
  const out: Row[] = [];
  for (let seed = 1; seed <= seeds; seed++) {
    const r = runCareer(seed, st, cfg, { productions: 0, years });
    const s = r.state;
    const formats: Record<string, number> = {};
    const acc = releaseAccounts(s, cfg).filter((a) => a.done);
    for (const a of acc) formats[a.format] = (formats[a.format] ?? 0) + 1;
    const mv = acc.filter((a) => a.format === "movie");
    out.push({
      cash: s.cash,
      prestige: s.prestige,
      releases: s.releases.length,
      formats,
      avg: med(s.releases.map((x) => x.avgScore)),
      hof: s.releases.filter((x) => x.avgScore >= 9).length,
      sub4: s.releases.filter((x) => x.avgScore < 4).length,
      neg: s.counters.negativeCashWeeks,
      viol: checkInvariants(r, cfg).length,
      genres: s.unlockedGenres.length,
      loseMovies: mv.filter((a) => a.allInNet < 0).length,
      movies: mv.length,
    });
  }
  return out;
}
const t0 = Date.now();
const B = legacyConfig(), A = baselineConfig();
const L = [
  "# Before vs after: the whole default game",
  "",
  `BEFORE = the pre-Producers default (\`legacyConfig()\`, byte-identical to old \`main\` 2fe1135). AFTER = today's Producers default (\`config/baseline.json\`). Seeds 1–${seeds}, ${years}-year careers, every strategy. Cells are **before → after**; cash/Prestige/score are medians per career, counts are totals across careers. TEST VALUES throughout.`,
  "",
  "| Strategy | End cash | Prestige | Releases / career (after: by format) | Median score | Hall of Fame | Sub-4 releases | Movies losing money | Genres open at end | Negative-cash weeks | Invariant violations |",
  "|---|---|---|---|---|---|---|---|---|---|---|",
];
let vb = 0, va = 0;
const rank: { st: string; b: number; a: number }[] = [];
for (const st of POL) {
  const b = careers(B, st), a = careers(A, st);
  const sum = (x: Row[], k: keyof Row) => x.reduce((s, r) => s + (r[k] as number), 0);
  vb += sum(b, "viol");
  va += sum(a, "viol");
  const fmt: Record<string, number> = {};
  for (const r of a) for (const [k, v] of Object.entries(r.formats)) fmt[k] = (fmt[k] ?? 0) + v / seeds;
  rank.push({ st, b: med(b.map((r) => r.cash)), a: med(a.map((r) => r.cash)) });
  L.push(
    `| ${st} | ${M(med(b.map((r) => r.cash)))} → ${M(med(a.map((r) => r.cash)))} | ${med(b.map((r) => r.prestige))} → ${med(a.map((r) => r.prestige))} | ${(sum(b, "releases") / seeds).toFixed(1)} → ${(sum(a, "releases") / seeds).toFixed(1)} (${Object.entries(fmt).map(([k, v]) => `${k} ${v.toFixed(1)}`).join(", ")}) | ${med(b.map((r) => r.avg)).toFixed(2)} → ${med(a.map((r) => r.avg)).toFixed(2)} | ${pct(sum(b, "hof"), sum(b, "releases"))} → ${pct(sum(a, "hof"), sum(a, "releases"))} | ${pct(sum(b, "sub4"), sum(b, "releases"))} → ${pct(sum(a, "sub4"), sum(a, "releases"))} | ${pct(sum(b, "loseMovies"), sum(b, "movies"))} → ${pct(sum(a, "loseMovies"), sum(a, "movies"))} | ${med(b.map((r) => r.genres))} → ${med(a.map((r) => r.genres))} | ${med(b.map((r) => r.neg))} → ${med(a.map((r) => r.neg))} | ${sum(b, "viol")} → ${sum(a, "viol")} |`,
  );
}
const order = (k: "a" | "b") => [...rank].sort((x, y) => y[k] - x[k]).map((r) => `${r.st} ${M(r[k])}`);
L.push("", "## Strategy ranking by end cash", "", `**Before:** ${order("b").join(" > ")}`, "", `**After:** ${order("a").join(" > ")}`, "", `Invariant violations: before ${vb}, after ${va}. Elapsed ${((Date.now() - t0) / 1000).toFixed(1)} s.`);
mkdirSync("reports/compare", { recursive: true });
writeFileSync("reports/compare/summary.md", L.join("\n") + "\n");
console.log(L.join("\n"));
