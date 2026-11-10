import type { Config } from "../core/config";
import { configHash } from "../core/config";
import { FEATURES_MODELLED, FEATURES_NOT_MODELLED } from "../core/simulation";
import { RULESET_VERSION, type Release } from "../core/types";
import { careerMetrics, summarize, scoreTrend, type CareerMetrics } from "./metrics";
import { checkInvariants, diagnose, type Flag, type Violation } from "./diagnostics";
import { runCareer, type CareerOptions } from "./runner";
import { bestOf, careerProgress, filmRefs, greatness, progressRows, type CareerProgress, type FilmRef, type GreatRow, type ProgressRow } from "./greatness";

export interface BatchResult {
  meta: { ruleset: string; config: string; configHash: string; seeds: [number, number]; strategies: string[]; productions: number; featuresModelled: string[]; featuresNotModelled: string[]; runtimeMs: number; careers: number };
  metrics: CareerMetrics[];
  summary: ReturnType<typeof summarize>;
  trends: Record<string, number[]>;
  flags: Flag[];
  violations: Violation[];
  releases: { seed: number; strategy: string; releases: Release[] }[];
  /** Gate 2.6 top-end statistics (release windows, year bands, critic generations) */
  great: GreatRow[];
  /** Gate 2.6 Prestige progression per strategy, and per career */
  progress: ProgressRow[];
  progressCareers: CareerProgress[];
  /** each career's best combined-rated film (deterministic tie-break) */
  careerBest: FilmRef[];
}

/** Slim release record: enough for diagnostics, far less memory than full releases (weekly arrays, traces, cards). */
function slimRelease(r: Release): Release {
  return { ...r, weekly: r.weekly.length ? [r.weekly[r.weekly.length - 1]] : [], trace: { opening: { awareness: (r.trace.opening as { awareness: number }).awareness } } } as Release;
}

export function runBatch(seedStart: number, seedCount: number, strategies: string[], cfg: Config, opts: CareerOptions, keepReleases: boolean | "full" = true): BatchResult {
  const t0 = performance.now();
  const metrics: CareerMetrics[] = [];
  const violations: Violation[] = [];
  const releases: BatchResult["releases"] = [];
  const films: { seed: number; strategy: string; films: FilmRef[] }[] = [];
  const progressCareers: CareerProgress[] = [];
  for (let seed = seedStart; seed < seedStart + seedCount; seed++) {
    for (const strat of strategies) {
      const r = runCareer(seed, strat, cfg, opts);
      metrics.push(careerMetrics(r, cfg));
      violations.push(...checkInvariants(r, cfg));
      films.push({ seed, strategy: strat, films: filmRefs(seed, strat, r.state.releases, cfg) });
      progressCareers.push(careerProgress(seed, strat, r.state, cfg));
      if (keepReleases) releases.push({ seed, strategy: strat, releases: keepReleases === "full" ? r.state.releases : r.state.releases.map(slimRelease) });
    }
  }
  const runtimeMs = Math.round(performance.now() - t0);
  return {
    meta: { ruleset: RULESET_VERSION, config: cfg.name, configHash: configHash(cfg), seeds: [seedStart, seedStart + seedCount - 1], strategies, productions: opts.productions, featuresModelled: FEATURES_MODELLED, featuresNotModelled: FEATURES_NOT_MODELLED, runtimeMs, careers: metrics.length },
    metrics,
    summary: summarize(metrics),
    trends: Object.fromEntries(strategies.map((s) => [s, scoreTrend(metrics, s)])),
    flags: diagnose(metrics, releases, undefined, cfg),
    violations,
    releases,
    great: greatness(films, cfg, opts.productions),
    progress: progressRows(progressCareers, cfg),
    progressCareers,
    careerBest: films.map((c) => bestOf(c.films)).filter((f): f is FilmRef => f !== null),
  };
}

export interface CompareRow {
  strategy: string;
  metric: string;
  baselineMedian: number;
  candidateMedian: number;
  medianPairedDelta: number;
  shareImproved: number;
}

/** Paired-seed comparison: same seeds, same strategies, two configs. */
export function compareBatches(a: BatchResult, b: BatchResult, keys: (keyof CareerMetrics)[]): CompareRow[] {
  const rows: CompareRow[] = [];
  const med = (xs: number[]) => {
    const s = [...xs].sort((x, y) => x - y);
    const m = Math.floor(s.length / 2);
    return s.length % 2 ? s[m] : (s[m - 1] + s[m]) / 2;
  };
  for (const strat of a.meta.strategies) {
    for (const k of keys) {
      const deltas: number[] = [];
      const av: number[] = [];
      const bv: number[] = [];
      for (const ma of a.metrics.filter((m) => m.strategy === strat)) {
        const mb = b.metrics.find((m) => m.strategy === strat && m.seed === ma.seed);
        if (!mb) continue;
        av.push(Number(ma[k]));
        bv.push(Number(mb[k]));
        deltas.push(Number(mb[k]) - Number(ma[k]));
      }
      rows.push({ strategy: strat, metric: String(k), baselineMedian: +med(av).toFixed(2), candidateMedian: +med(bv).toFixed(2), medianPairedDelta: +med(deltas).toFixed(2), shareImproved: +(deltas.filter((d) => d > 0).length / Math.max(1, deltas.length)).toFixed(3) });
    }
  }
  return rows;
}
