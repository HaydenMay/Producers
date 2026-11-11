// Star score bonus check (PROD-051 option B): shipped default with vs without the flat Star bonus.
//   npx tsx scripts/star-bonus.ts [--seeds 8] [--years 10] → reports/star-xp/bonus-check.md
import { mkdirSync, writeFileSync } from "node:fs";
import { baselineConfig, withOverrides, type Config } from "../src/core/config";
import { runCareer } from "../src/batch/runner";
import { releaseAccounts } from "../src/batch/econ";
import { checkInvariants } from "../src/batch/diagnostics";

const arg = (k: string, d: number) => {
  const i = process.argv.indexOf(`--${k}`);
  return i > 0 ? Number(process.argv[i + 1]) : d;
};
const seeds = arg("seeds", 8), years = arg("years", 10);
const ON = baselineConfig();
const OFF = withOverrides(ON, { scoring: { starScoreBonus: { audience: 0, critic: 0 } } });
const POL = ["balanced", "quality-first", "famous-star", "franchise-builder", "cheap-duds"];
const med = (xs: number[]) => [...xs].sort((a, b) => a - b)[Math.floor((xs.length - 1) / 2)];
const pct = (n: number, d: number) => `${d ? Math.round((100 * n) / d) : 0}%`;
const $ = (x: number) => `$${(x / 1e6).toFixed(2)}M`;

function run(cfg: Config) {
  const out: Record<string, { avg: number[]; hof: number; sub4: number; n: number; early: number[]; late: number[]; cash: number[]; bonus: number[]; lose4: number; n4: number; lose46: number; n46: number; viol: number }> = {};
  for (const st of POL) {
    const o = (out[st] = { avg: [], hof: 0, sub4: 0, n: 0, early: [], late: [], cash: [], bonus: [], lose4: 0, n4: 0, lose46: 0, n46: 0, viol: 0 });
    for (let seed = 1; seed <= seeds; seed++) {
      const r = runCareer(seed, st, cfg, { productions: 0, years });
      o.viol += checkInvariants(r, cfg).length;
      o.cash.push(r.state.cash);
      for (const rel of r.state.releases) {
        o.n++;
        o.avg.push(rel.avgScore);
        if (rel.avgScore >= 9) o.hof++;
        if (rel.avgScore < 4) o.sub4++;
        (rel.releaseWeek < 3 * 52 ? o.early : rel.releaseWeek >= 7 * 52 ? o.late : []).push(rel.avgScore);
        const sb = (rel.trace.quality as { score: { starBonus?: { audience: number; critic: number } } }).score.starBonus;
        o.bonus.push(sb ? (sb.audience + sb.critic) / 2 : 0);
      }
      for (const a of releaseAccounts(r.state, cfg).filter((x) => x.done && x.format === "movie")) {
        if (a.band === "<4") (o.n4++, a.allInNet < 0 && o.lose4++);
        if (a.band === "4-6") (o.n46++, a.allInNet < 0 && o.lose46++);
      }
    }
  }
  return out;
}
const t0 = Date.now();
const VARIANT = process.argv.includes("--variants");
const A = run(OFF), B = run(ON);
if (VARIANT) {
  for (const [name, v] of [["taper from 8", { taperFrom: 8 }], ["smaller 0.3/0.12", { audience: 0.3, critic: 0.12 }], ["taper from 8.5", { taperFrom: 8.5 }]] as const) {
    const C = run(withOverrides(ON, { scoring: { starScoreBonus: v } }));
    console.log(name, POL.map((st) => `${st}: avg ${med(C[st].avg).toFixed(2)} early ${med(C[st].early).toFixed(2)} HoF ${pct(C[st].hof, C[st].n)} bonus +${med(C[st].bonus).toFixed(2)}`).join(" | "));
  }
}
const L = ["# Star score bonus check (PROD-051 option B)", "", `Shipped default, seeds 1–${seeds}, ${years}-year careers. **off** = bonus 0 / 0; **on** = Audience +0.5 × fit/100, Critic +0.2 × fit/100 *(test)*. HoF = average ≥ 9.0.`, "", "| Policy | Median avg (off → on) | Early films yrs 0–3 | Late films yrs 7+ | HoF share | Sub-4 share | Median Star bonus (avg pts) | Sub-4 movies losing | 4–6 movies losing | End cash p50 |", "|---|---|---|---|---|---|---|---|---|---|"];
for (const st of POL) {
  const a = A[st], b = B[st];
  L.push(`| ${st} | ${med(a.avg).toFixed(2)} → ${med(b.avg).toFixed(2)} | ${med(a.early).toFixed(2)} → ${med(b.early).toFixed(2)} | ${med(a.late).toFixed(2)} → ${med(b.late).toFixed(2)} | ${pct(a.hof, a.n)} → ${pct(b.hof, b.n)} | ${pct(a.sub4, a.n)} → ${pct(b.sub4, b.n)} | +${med(b.bonus).toFixed(2)} | ${pct(a.lose4, a.n4)} → ${pct(b.lose4, b.n4)} | ${pct(a.lose46, a.n46)} → ${pct(b.lose46, b.n46)} | ${$(med(a.cash))} → ${$(med(b.cash))} |`);
}
const v = POL.reduce((x, st) => x + A[st].viol + B[st].viol, 0);
L.push("", `Invariant violations (both runs): ${v}. Elapsed ${((Date.now() - t0) / 1000).toFixed(1)} s.`);
mkdirSync("reports/star-xp", { recursive: true });
writeFileSync("reports/star-xp/bonus-check.md", L.join("\n") + "\n");
console.log(L.join("\n"));
