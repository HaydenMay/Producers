// PROD-220 approach check: balanced vs the same policy (same dice) as Crowd-pleaser / Awards bait. Shipped default.
//   npx tsx scripts/approach.ts [--seeds 16] [--years 10] → reports/approach/summary.md
import { mkdirSync, writeFileSync } from "node:fs";
import { baselineConfig } from "../src/core/config";
import { runCareer } from "../src/batch/runner";
import { checkInvariants } from "../src/batch/diagnostics";

const argv = process.argv;
const num = (k: string, d: number) => (argv.indexOf(`--${k}`) > 0 ? Number(argv[argv.indexOf(`--${k}`) + 1]) : d);
const seeds = num("seeds", 16), years = num("years", 10);
const cfg = baselineConfig();
const med = (x: number[]) => (x.length ? [...x].sort((a, b) => a - b)[Math.floor((x.length - 1) / 2)] : NaN);
const pct = (n: number, d: number) => `${d ? Math.round((100 * n) / d) : 0}%`;
const t0 = Date.now();
const L = ["# Planning approach (PROD-220)", "", `Shipped default, seeds 1–${seeds}, ${years}-year careers. Same policy and same dice; only the approach differs. Split review = |Audience − Critic| ≥ 1.`, "", "| Approach | Median Audience | Median Critic | Split reviews | Hall of Fame | End cash p50 | Prestige p50 | Violations |", "|---|---|---|---|---|---|---|---|"];
for (const [st, name] of [["balanced", "Balanced"], ["crowd-pleaser", "Crowd-pleaser"], ["awards-bait", "Awards bait"]]) {
  const aud: number[] = [], cri: number[] = [], cash: number[] = [], pr: number[] = [];
  let n = 0, split = 0, hof = 0, v = 0;
  for (let seed = 1; seed <= seeds; seed++) {
    const r = runCareer(seed, st, cfg, { productions: 0, years });
    v += checkInvariants(r, cfg).length;
    cash.push(r.state.cash);
    pr.push(r.state.prestige);
    for (const x of r.state.releases) {
      n++;
      aud.push(x.audience);
      cri.push(x.critic);
      if (Math.abs(x.audience - x.critic) >= 1) split++;
      if (x.avgScore >= 9) hof++;
    }
  }
  L.push(`| ${name} | ${med(aud).toFixed(2)} | ${med(cri).toFixed(2)} | ${pct(split, n)} | ${pct(hof, n)} | $${(med(cash) / 1e6).toFixed(2)}M | ${med(pr)} | ${v} |`);
}
L.push("", `Elapsed ${((Date.now() - t0) / 1000).toFixed(1)} s.`);
mkdirSync("reports/approach", { recursive: true });
writeFileSync("reports/approach/summary.md", L.join("\n") + "\n");
console.log(L.join("\n"));
