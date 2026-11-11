// Does obeying the planning-screen cost warning (PROD-224) pay? Balanced-style agents, shipped default.
//   npx tsx scripts/heed-warning.ts [--seeds 16] [--years 10]  → reports/heed-warning/summary.md
import { mkdirSync, writeFileSync } from "node:fs";
import { baselineConfig } from "../src/core/config";
import { runCareer } from "../src/batch/runner";
import { checkInvariants } from "../src/batch/diagnostics";

const argv = process.argv;
const num = (k: string, d: number) => (argv.indexOf(`--${k}`) > 0 ? Number(argv[argv.indexOf(`--${k}`) + 1]) : d);
const seeds = num("seeds", 16), years = num("years", 10);
const cfg = baselineConfig();
const med = (x: number[]) => (x.length ? [...x].sort((a, b) => a - b)[Math.floor((x.length - 1) / 2)] : NaN);
const POL: [string, string][] = [
  ["balanced", "runway rule (base + crew + a mid-tier Star reserve)"],
  ["heeds-warning", "contract first on ANY warning (⚠️ or ⛔)"],
  ["heeds-short", "contract first only on ⛔ (short even with a cheap Star)"],
  ["famous-star", "ignores the warning, buys big names"],
];
const t0 = Date.now();
const L = ["# Obeying the cost warning (PROD-224)", "", `Shipped default, seeds 1–${seeds}, ${years}-year careers. Medians per career.`, "", "| Agent | Rule | End cash | Negative-cash weeks | Contracts taken | First release (week) | Releases | Prestige | Violations |", "|---|---|---|---|---|---|---|---|---|"];
for (const [st, rule] of POL) {
  const cash: number[] = [], neg: number[] = [], con: number[] = [], first: number[] = [], rel: number[] = [], pr: number[] = [];
  let v = 0;
  for (let seed = 1; seed <= seeds; seed++) {
    const r = runCareer(seed, st, cfg, { productions: 0, years });
    v += checkInvariants(r, cfg).length;
    const s = r.state;
    cash.push(s.cash);
    neg.push(s.counters.negativeCashWeeks);
    con.push((s.contractHistory ?? []).length + (s.contract ? 1 : 0));
    first.push(s.releases[0]?.releaseWeek ?? NaN);
    rel.push(s.releases.length);
    pr.push(s.prestige);
  }
  L.push(`| ${st} | ${rule} | $${(med(cash) / 1e6).toFixed(2)}M | ${med(neg)} | ${med(con)} | ${med(first)} | ${med(rel)} | ${med(pr)} | ${v} |`);
}
L.push("", `Elapsed ${((Date.now() - t0) / 1000).toFixed(1)} s.`);
mkdirSync("reports/heed-warning", { recursive: true });
writeFileSync("reports/heed-warning/summary.md", L.join("\n") + "\n");
console.log(L.join("\n"));
