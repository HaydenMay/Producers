// Gate 4 validation loops. Usage:
//   npx tsx scripts/economy.ts smoke                     # FAST: 4 seeds x 3 policies x 4 years, legacy vs candidate
//   npx tsx scripts/economy.ts compare                   # COMPARE: 16 paired seeds x 6 policies x 10 years + sensitivity
//   npx tsx scripts/economy.ts gate                      # GATE (only when asked): 40 seeds x 6 policies x 15 years
// Overrides: --seeds N --years N --strategies a,b --variants v1,v2 --out dir --quiet
// Writes <out>/careers.jsonl and <out>/releases.jsonl incrementally (one line per career), then <out>/summary.md.
import { appendFileSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { baselineConfig, withOverrides, type Config } from "../src/core/config";
import { runCareer } from "../src/batch/runner";
import { checkInvariants } from "../src/batch/diagnostics";
import { careerEcon, releaseAccounts, type CareerEcon, type ReleaseAccount } from "../src/batch/econ";

const mode = (process.argv[2] ?? "smoke") as "smoke" | "compare" | "gate";
const arg = (k: string) => {
  const i = process.argv.indexOf(`--${k}`);
  return i > 0 ? process.argv[i + 1] : undefined;
};
const DEFAULTS = {
  smoke: { seeds: 4, years: 4, strategies: ["balanced", "cheap-duds", "mixed"], variants: ["legacy", "candidate"] },
  compare: { seeds: 16, years: 10, strategies: ["balanced", "cheap-duds", "quality-first", "tv-first", "mixed", "contract-farmer"], variants: ["legacy", "candidate", "cand_gross60", "cand_pivot65", "cand_pivot65_gross80", "cand_ads_half", "cand_contracts_rich"] },
  gate: { seeds: 40, years: 15, strategies: ["balanced", "cheap-duds", "quality-first", "tv-first", "mixed", "contract-farmer"], variants: ["legacy", "candidate"] },
}[mode];
const seeds = Number(arg("seeds") ?? DEFAULTS.seeds);
const years = Number(arg("years") ?? DEFAULTS.years);
const strategies = arg("strategies")?.split(",") ?? DEFAULTS.strategies;
const variants = arg("variants")?.split(",") ?? DEFAULTS.variants;
const out = arg("out") ?? `reports/gate4/${mode}`;
const quiet = process.argv.includes("--quiet");

const G3 = withOverrides(baselineConfig(), JSON.parse(readFileSync("config/gate3.json", "utf8")));
const G4 = withOverrides(baselineConfig(), JSON.parse(readFileSync("config/gate4.json", "utf8")));
/** Sensitivity variants: each a single change on the candidate (TEST ASSUMPTIONS). */
const VARIANTS: Record<string, { cfg: Config; note: string }> = {
  legacy: { cfg: G3, note: "Gate 3 follow-up rules (legacy_advance; start $40K; no contracts)" },
  candidate: { cfg: G4, note: "late_distribution + contracts (start $120K)" },
  cand_gross60: { cfg: withOverrides(G4, { world: { grossPerViewer: 1.2 }, tv: { grossPerEpisodeViewer: 0.192 }, limitedSeries: { grossPerEpisodeViewer: 0.342 } }), note: "candidate with every gross-per-viewer coefficient x0.6" },
  cand_pivot65_gross80: { cfg: withOverrides(G4, { audience: { qualityPivot: 6.5 }, world: { grossPerViewer: 1.6 }, tv: { grossPerEpisodeViewer: 0.256 }, limitedSeries: { grossPerEpisodeViewer: 0.456 } }), note: "pivot 6.5 AND every gross-per-viewer x0.8 (the two smallest levers combined)" },
  cand_ads_half: { cfg: withOverrides(G4, { economy: { lateDistribution: { adAwarenessMax: 0.6 } } }), note: "candidate with distributor ads half as effective" },
  cand_pivot65: { cfg: withOverrides(G4, { audience: { qualityPivot: 6.5 } }), note: "candidate where word of mouth only turns positive above 6.5 (sensitivity: mediocre films stop selling themselves)" },
  cand_contracts_rich: { cfg: withOverrides(G4, { economy: { contracts: { list: (G4.economy.contracts.list as { fee: number }[]).map((c) => ({ ...c, fee: c.fee * 2 })) } } }), note: "candidate with every contract fee x2 (farming check)" },
};

mkdirSync(out, { recursive: true });
writeFileSync(`${out}/careers.jsonl`, "");
writeFileSync(`${out}/releases.jsonl`, "");
const t0 = Date.now();
const timing: Record<string, number> = {};
const careers: (CareerEcon & { variant: string; violations: number })[] = [];
const rels: (ReleaseAccount & { variant: string; strategy: string; seed: number })[] = [];
for (const v of variants) {
  const cfg = VARIANTS[v]?.cfg;
  if (!cfg) throw new Error(`unknown variant ${v}`);
  const tv = Date.now();
  for (const st of strategies) {
    if (v === "legacy" && st === "contract-farmer") continue; // no contracts in legacy
    for (let seed = 1; seed <= seeds; seed++) {
      const r = runCareer(seed, st, cfg, { productions: 0, years });
      const viol = checkInvariants(r, cfg);
      const ce = { ...careerEcon(seed, st, r.state, cfg), variant: v, violations: viol.length };
      careers.push(ce);
      appendFileSync(`${out}/careers.jsonl`, JSON.stringify(ce) + "\n");
      const ra = releaseAccounts(r.state, cfg).filter((x) => x.done).map((x) => ({ ...x, variant: v, strategy: st, seed }));
      rels.push(...ra);
      appendFileSync(`${out}/releases.jsonl`, ra.map((x) => JSON.stringify(x)).join("\n") + (ra.length ? "\n" : ""));
      if (viol.length && !quiet) console.error(`VIOLATION ${v} ${st} seed ${seed}: ${viol.map((x) => `${x.rule} ${x.detail}`).join(" | ")}`);
    }
  }
  timing[v] = (Date.now() - tv) / 1000;
  if (!quiet) console.error(`${v}: ${timing[v].toFixed(1)}s`);
}
const total = (Date.now() - t0) / 1000;

// ---------------------------------------------------------------- summary
const q = (xs: number[], p: number) => {
  if (!xs.length) return NaN;
  const s = [...xs].sort((a, b) => a - b);
  const i = (s.length - 1) * p;
  const lo = Math.floor(i);
  return s[lo] + (s[Math.min(s.length - 1, lo + 1)] - s[lo]) * (i - lo);
};
const $ = (x: number) => (Number.isNaN(x) ? "—" : `${x < 0 ? "−" : ""}$${Math.abs(x) >= 1e6 ? `${(Math.abs(x) / 1e6).toFixed(2)}M` : `${Math.round(Math.abs(x) / 1000)}K`}`);
const pct = (a: number, b: number) => (b ? `${Math.round((100 * a) / b)}%` : "—");
const L: string[] = [];
L.push(`# Gate 4 economy — ${mode.toUpperCase()}`, "", `Seeds 1–${seeds} (paired across variants) · ${years} in-game years · policies: ${strategies.join(", ")} · ${careers.length} careers, ${rels.length} finished releases · **elapsed ${total.toFixed(1)} s** (${Object.entries(timing).map(([k, x]) => `${k} ${x.toFixed(1)}s`).join(", ")}).`, "", "> Simulation output under TEST ASSUMPTIONS. Not a design lock.", "");
L.push("| Variant | Meaning |", "|---|---|");
for (const v of variants) L.push(`| ${v} | ${VARIANTS[v].note} |`);
const viol = careers.reduce((a, c) => a + c.violations, 0);
L.push("", `**Invariant violations: ${viol}** (checked on every career).`, "");

L.push("## Releases: who loses money (finished runs only)", "", "All-in net = studio share of gross + kept advance − studio-paid base/Star/campaign − payroll & upkeep during production. Partner net = distributor share − its stake (legacy: the advance; candidate: its own ad spend). n < 10 marked *small*.", "");
L.push("| Variant | Format | Score band | n | Studio loses all-in | Median studio all-in | Median direct-only net | Median partner net | Partner loses |", "|---|---|---|---|---|---|---|---|---|");
for (const v of variants)
  for (const f of ["movie", "limited_series", "tv", "original"])
    for (const b of ["<4", "4-6", "6-8", "8+"]) {
      const xs = rels.filter((r) => r.variant === v && r.format === f && r.band === b);
      if (!xs.length) continue;
      const withPartner = xs.filter((r) => r.distStake > 0);
      L.push(`| ${v} | ${f} | ${b} | ${xs.length}${xs.length < 10 ? " *small*" : ""} | ${pct(xs.filter((r) => r.allInNet < 0).length, xs.length)} | ${$(q(xs.map((r) => r.allInNet), 0.5))} | ${$(q(xs.map((r) => r.directNet), 0.5))} | ${withPartner.length ? $(q(withPartner.map((r) => r.distNet), 0.5)) : "—"} | ${withPartner.length ? pct(withPartner.filter((r) => r.distNet < 0).length, withPartner.length) : "—"} |`);
    }

L.push("", "## Careers", "", "| Variant | Policy | n | End cash p10 / p50 / p90 | Median max drawdown | Median weeks in the red | Stuck saves | Took contracts (median count) | Contract fee / contract week | Earnings / week (p50) | Prestige p50 | TV unlocked | Streaming live |", "|---|---|---|---|---|---|---|---|---|---|---|---|---|");
for (const v of variants)
  for (const st of strategies) {
    const cs = careers.filter((c) => c.variant === v && c.strategy === st);
    if (!cs.length) continue;
    const cw = cs.reduce((a, c) => a + c.contractWeeks, 0);
    L.push(`| ${v} | ${st} | ${cs.length} | ${$(q(cs.map((c) => c.endCash), 0.1))} / ${$(q(cs.map((c) => c.endCash), 0.5))} / ${$(q(cs.map((c) => c.endCash), 0.9))} | ${$(q(cs.map((c) => c.maxDrawdown), 0.5))} | ${q(cs.map((c) => c.negWeeks), 0.5)} | ${cs.filter((c) => c.stuck).length} | ${pct(cs.filter((c) => c.contracts > 0).length, cs.length)} (${q(cs.map((c) => c.contracts), 0.5)}) | ${cw ? $(cs.reduce((a, c) => a + c.contractFees, 0) / cw) : "—"} | ${$(q(cs.map((c) => c.perWeek), 0.5))} | ${q(cs.map((c) => c.prestige), 0.5)} | ${pct(cs.filter((c) => c.tvUnlockWeek !== null).length, cs.length)} | ${pct(cs.filter((c) => c.streamingLiveWeek !== null).length, cs.length)} |`);
  }

L.push("", "## Distributor advertising vs openings (candidate variants, distributed movies)", "", "| Variant | Route | n | Median ad spend | Median opening | Median unique ÷ reach | Saturate reach (≥ 95%) | Median avg score |", "|---|---|---|---|---|---|---|---|");
for (const v of variants.filter((x) => x !== "legacy")) {
  const ms = rels.filter((r) => r.variant === v && r.format === "movie");
  for (const [label, xs] of [["distributor", ms.filter((r) => r.distributorId)], ["self-distributed", ms.filter((r) => !r.distributorId)]] as const) {
    if (!xs.length) continue;
    L.push(`| ${v} | ${label} | ${xs.length} | ${$(q(xs.map((r) => r.adSpend), 0.5))} | ${Math.round(q(xs.map((r) => r.opening), 0.5)).toLocaleString()} | ${Math.round(100 * q(xs.map((r) => r.unique / Math.max(1, r.reachCap)), 0.5))}% | ${pct(xs.filter((r) => r.unique >= 0.95 * r.reachCap).length, xs.length)} | ${q(xs.map((r) => r.avg), 0.5).toFixed(2)} |`);
  }
  const d = ms.filter((r) => r.distributorId);
  if (d.length > 5) {
    const lo = d.filter((r) => r.adSpend <= q(d.map((x) => x.adSpend), 0.33)), hi = d.filter((r) => r.adSpend >= q(d.map((x) => x.adSpend), 0.67));
    L.push(`| ${v} | low-ad third vs high-ad third | ${lo.length} / ${hi.length} | ${$(q(lo.map((r) => r.adSpend), 0.5))} / ${$(q(hi.map((r) => r.adSpend), 0.5))} | ${Math.round(q(lo.map((r) => r.opening), 0.5)).toLocaleString()} / ${Math.round(q(hi.map((r) => r.opening), 0.5)).toLocaleString()} | | | |`);
  }
}

L.push("", "## Outlier seeds", "");
for (const v of variants) {
  const cs = careers.filter((c) => c.variant === v);
  const worst = [...cs].sort((a, b) => a.endCash - b.endCash).slice(0, 3);
  const deep = [...cs].sort((a, b) => a.minCash - b.minCash).slice(0, 3);
  L.push(`- **${v}** lowest end cash: ${worst.map((c) => `${c.strategy} s${c.seed} ${$(c.endCash)}`).join("; ")} · deepest hole: ${deep.map((c) => `${c.strategy} s${c.seed} ${$(c.minCash)}`).join("; ")}${cs.some((c) => c.stuck) ? ` · STUCK: ${cs.filter((c) => c.stuck).map((c) => `${c.strategy} s${c.seed}`).join(", ")}` : ""}`);
}
writeFileSync(`${out}/summary.md`, L.join("\n") + "\n");
console.log(`${mode}: ${careers.length} careers, ${rels.length} releases, ${viol} invariant violations, ${total.toFixed(1)} s → ${out}/summary.md`);
