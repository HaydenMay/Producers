// Gate 4: tiny sensitivity grid on the candidate (movie economics only). Seconds, not minutes.
//   npx tsx scripts/economy-sens.ts [--seeds 16] [--years 10]
// Grid: word-of-mouth pivot {5, 6.5} x bad-reception interest decay {0.35, 1.0} x gross per viewer {x1.0, x0.8}.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { legacyConfig, withOverrides } from "../src/core/config";
import { runCareer } from "../src/batch/runner";
import { careerEcon, releaseAccounts } from "../src/batch/econ";

const arg = (k: string, d: number) => {
  const i = process.argv.indexOf(`--${k}`);
  return i > 0 ? Number(process.argv[i + 1]) : d;
};
const seeds = arg("seeds", 16), years = arg("years", 10);
const G4 = withOverrides(legacyConfig(), JSON.parse(readFileSync("config/gate4.json", "utf8")));
const q = (xs: number[], p: number) => {
  if (!xs.length) return NaN;
  const s = [...xs].sort((a, b) => a - b);
  return s[Math.round((s.length - 1) * p)];
};
const $ = (x: number) => (Number.isNaN(x) ? "—" : `${x < 0 ? "−" : ""}$${Math.abs(x) >= 1e6 ? `${(Math.abs(x) / 1e6).toFixed(2)}M` : `${Math.round(Math.abs(x) / 1000)}K`}`);
const t0 = Date.now();
const L = ["# Gate 4 sensitivity grid (candidate, movie policies)", "", `Seeds 1–${seeds}, ${years} years, policies balanced / quality-first / cheap-duds (the bad-movie factory). TEST ASSUMPTIONS.`, "", "| WoM pivot | Bad-reception decay | Gross ×| 4–6 movies losing all-in | Median all-in 4–6 / 6–8 / 8+ | Median unique ÷ reach | Saturating | End cash p50: balanced / quality-first / cheap-duds | Duds rank |", "|---|---|---|---|---|---|---|---|---|"];
for (const pivot of [5, 6.5])
  for (const bad of [0.35, 1.0])
    for (const g of [1.0, 0.8]) {
      const cfg = withOverrides(G4, { audience: { qualityPivot: pivot, diffusion: { badInterestDecay: bad } }, world: { grossPerViewer: 2.0 * g } });
      const rel: ReturnType<typeof releaseAccounts> = [];
      const end: Record<string, number[]> = {};
      for (const st of ["balanced", "quality-first", "cheap-duds"])
        for (let seed = 1; seed <= seeds; seed++) {
          const r = runCareer(seed, st, cfg, { productions: 0, years });
          rel.push(...releaseAccounts(r.state, cfg).filter((x) => x.done && x.format === "movie"));
          (end[st] ??= []).push(careerEcon(seed, st, r.state, cfg).endCash);
        }
      const band = (b: string) => rel.filter((x) => x.band === b);
      const mid = band("4-6");
      const ends = ["balanced", "quality-first", "cheap-duds"].map((st) => q(end[st], 0.5));
      const rank = 1 + ends.slice(0, 2).filter((x) => x > ends[2]).length;
      L.push(`| ${pivot} | ${bad} | ${g} | ${mid.length ? Math.round((100 * mid.filter((x) => x.allInNet < 0).length) / mid.length) : 0}% (n ${mid.length}) | ${["4-6", "6-8", "8+"].map((b) => $(q(band(b).map((x) => x.allInNet), 0.5))).join(" / ")} | ${Math.round(100 * q(rel.map((x) => x.unique / x.reachCap), 0.5))}% | ${Math.round((100 * rel.filter((x) => x.unique >= 0.95 * x.reachCap).length) / rel.length)}% | ${ends.map($).join(" / ")} | ${rank === 1 ? "richest" : rank === 2 ? "2nd" : "poorest"} |`);
    }
L.push("", `Elapsed ${((Date.now() - t0) / 1000).toFixed(1)} s.`);
mkdirSync("reports/gate4", { recursive: true });
writeFileSync("reports/gate4/sensitivity.md", L.join("\n") + "\n");
console.log(L.join("\n"));
