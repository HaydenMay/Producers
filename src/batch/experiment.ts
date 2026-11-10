// Paired-seed multi-variant experiments: same seeds + strategies, one config override set per variant.
import type { Config } from "../core/config";
import { configHash, withOverrides } from "../core/config";
import { runBatch, type BatchResult } from "./batch";
import { quantile, type CareerMetrics } from "./metrics";

export interface ExperimentSpec {
  _label?: string;
  reference: string;
  seeds: number;
  seedStart?: number;
  productions: number[];
  strategies: string[];
  variants: { name: string; note?: string; overrides: Record<string, unknown> }[];
  metrics?: (keyof CareerMetrics)[];
  scoreIndexes?: number[];
}

export const DEFAULT_EXPERIMENT_METRICS: (keyof CareerMetrics)[] = [
  "endCash",
  "prestige",
  "prestigePerRelease",
  "meanAudience",
  "meanCritic",
  "share8plus",
  "share9plus",
  "shareLate8plus",
  "hofShare",
  "maxStaffEnd",
  "staffCount",
  "meanStaffStat",
  "upgrades",
  "firstUpgradeWeek",
  "years",
  "maxIpFans",
  "negativeCashWeeks",
];

export interface ExperimentResult {
  spec: ExperimentSpec;
  runs: { variant: string; productions: number; configHash: string; batch: BatchResult }[];
}

export function runExperiment(spec: ExperimentSpec, base: Config): ExperimentResult {
  const runs: ExperimentResult["runs"] = [];
  for (const P of spec.productions) {
    for (const v of spec.variants) {
      const cfg = withOverrides(base, v.overrides);
      cfg.name = v.name;
      const b = runBatch(spec.seedStart ?? 1, spec.seeds, spec.strategies, cfg, { productions: P, drain: true }, true);
      b.releases = []; // flags already computed; free memory for large experiments
      for (const m of b.metrics) m.scoresByIndex = []; // trends already computed
      runs.push({ variant: v.name, productions: P, configHash: configHash(cfg), batch: b });
    }
  }
  return { spec, runs };
}

const med = (xs: number[]) => (xs.length ? quantile(xs, 0.5) : NaN);
const num = (x: unknown) => (x === null || x === undefined ? NaN : Number(x));

function fmt(x: number, k: string): string {
  if (Number.isNaN(x)) return "—";
  if (k === "endCash") return `$${(x / 1000).toFixed(0)}K`;
  if (k.startsWith("share") || k === "hofShare") return `${(x * 100).toFixed(0)}%`;
  return Number.isInteger(x) ? String(x) : x.toFixed(2);
}

export function experimentReport(res: ExperimentResult, title: string): string {
  const { spec } = res;
  const metrics = spec.metrics ?? DEFAULT_EXPERIMENT_METRICS;
  const idx = spec.scoreIndexes ?? [1, 3, 5, 10, 20, 30, 50];
  const out: string[] = [];
  out.push(`# ${title}`, "");
  out.push("> **Simulation assumptions, not design locks.** Paired seeds: every variant runs the same seeds and strategies; only the config overrides differ.", "");
  if (spec._label) out.push(spec._label, "");
  out.push(`- Seeds ${spec.seedStart ?? 1}–${(spec.seedStart ?? 1) + spec.seeds - 1} (${spec.seeds}) · strategies: ${spec.strategies.join(", ")} · reference variant: **${spec.reference}**`);
  out.push(`- Ruleset ${res.runs[0]?.batch.meta.ruleset} · measured runtime ${res.runs.reduce((a, r) => a + r.batch.meta.runtimeMs, 0)} ms for ${res.runs.reduce((a, r) => a + r.batch.meta.careers, 0)} careers`);
  out.push("", "| Variant | Config hash | Note |\n|---|---|---|");
  for (const v of spec.variants) out.push(`| ${v.name} | ${res.runs.find((r) => r.variant === v.name)?.configHash} | ${v.note ?? ""} \`${JSON.stringify(v.overrides)}\` |`);
  out.push("");
  for (const P of spec.productions) {
    out.push(`## ${P}-production careers`, "");
    const runsP = res.runs.filter((r) => r.productions === P);
    const ref = runsP.find((r) => r.variant === spec.reference)!;
    const viol = runsP.reduce((a, r) => a + r.batch.violations.length, 0);
    out.push(`Invariant violations across all variants: **${viol}**.`, "");
    out.push(`### Medians by strategy`, "");
    out.push(`| Strategy | Variant | ${metrics.join(" | ")} |`);
    out.push(`|---|---|${metrics.map(() => "---:").join("|")}|`);
    for (const s of spec.strategies) {
      for (const r of runsP) {
        const ms = r.batch.metrics.filter((m) => m.strategy === s);
        out.push(`| ${s} | ${r.variant} | ${metrics.map((k) => fmt(med(ms.map((m) => num(m[k])).filter((x) => !Number.isNaN(x))), String(k))).join(" | ")} |`);
      }
    }
    out.push("");
    out.push(`### Paired deltas vs **${spec.reference}** (median of per-seed differences; share of seeds where the variant is higher)`, "");
    const dk: (keyof CareerMetrics)[] = ["endCash", "prestige", "share8plus", "meanAudience"];
    out.push(`| Strategy | Variant | ${dk.map((k) => `Δ ${k}`).join(" | ")} |`);
    out.push(`|---|---|${dk.map(() => "---:").join("|")}|`);
    for (const s of spec.strategies) {
      for (const r of runsP) {
        if (r === ref) continue;
        const cells = dk.map((k) => {
          const d: number[] = [];
          for (const m of r.batch.metrics.filter((x) => x.strategy === s)) {
            const b = ref.batch.metrics.find((x) => x.strategy === s && x.seed === m.seed);
            if (b) d.push(num(m[k]) - num(b[k]));
          }
          const share = d.filter((x) => x > 0).length / Math.max(1, d.length);
          return `${fmt(med(d), String(k))} (${(share * 100).toFixed(0)}%)`;
        });
        out.push(`| ${s} | ${r.variant} | ${cells.join(" | ")} |`);
      }
    }
    out.push("");
    out.push(`### Mean review score (avg of Audience+Critic) by production index`, "");
    const ix = idx.filter((i) => i <= P);
    out.push(`| Strategy | Variant | ${ix.map((i) => `#${i}`).join(" | ")} |`);
    out.push(`|---|---|${ix.map(() => "---:").join("|")}|`);
    for (const s of spec.strategies) for (const r of runsP) out.push(`| ${s} | ${r.variant} | ${ix.map((i) => r.batch.trends[s]?.[i - 1]?.toFixed(2) ?? "—").join(" | ")} |`);
    out.push("");
    out.push(`### Diagnostic flags fired`, "");
    out.push(`| Variant | Fired |\n|---|---|`);
    for (const r of runsP) out.push(`| ${r.variant} | ${r.batch.flags.filter((f) => f.fired && f.flag !== "UNSUPPORTED_RULE_ASSUMPTION").map((f) => f.flag).join(", ") || "none"} |`);
    out.push("");
  }
  return out.join("\n");
}

/** Compact JSON (no per-release arrays) for downstream comparison. */
export function experimentJson(res: ExperimentResult) {
  return {
    spec: res.spec,
    runs: res.runs.map((r) => ({ variant: r.variant, productions: r.productions, configHash: r.configHash, meta: r.batch.meta, summary: r.batch.summary, trends: r.batch.trends, flags: r.batch.flags, violations: r.batch.violations })),
  };
}
