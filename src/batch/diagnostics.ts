// Invariant checks (correctness) and diagnostic flags (balance smells). Flags are evidence, not auto-fixes.
import thresholdsJson from "../../config/diagnostics.json";
import type { Config } from "../core/config";
import { CASH_KINDS } from "../core/events";
import { computeScores, avgScore } from "../core/scoring";
import { budgetFor, skillTotal } from "../core/stars";
import type { Release, StudioState } from "../core/types";
import type { CareerMetrics } from "./metrics";
import { quantile } from "./metrics";
import type { CareerResult } from "./runner";

export type Thresholds = typeof thresholdsJson;
export const DEFAULT_THRESHOLDS: Thresholds = thresholdsJson;

export interface Violation {
  seed: number;
  strategy: string;
  rule: string;
  detail: string;
}

/** Hard invariants. Any violation = a rules/accounting bug in the harness, not a balance finding. */
export function checkInvariants(r: CareerResult, cfg: Config): Violation[] {
  const s: StudioState = r.state;
  const out: Violation[] = [];
  const v = (rule: string, detail: string) => out.push({ seed: r.seed, strategy: r.strategy, rule, detail });
  const cashSum = s.ledger.filter((l) => CASH_KINDS.has(l.kind)).reduce((a, l) => a + l.amount, 0);
  if (Math.abs(cashSum - s.cash) > 0.05) v("LEDGER_CASH_MISMATCH", `ledger ${cashSum.toFixed(2)} vs cash ${s.cash.toFixed(2)}`);
  if (s.staff.length < 2) v("STAFF_COUNT", `${s.staff.length} staff`);
  const surplusIds = s.ledger.filter((l) => l.kind === "surplus_transfer").map((l) => l.projectId);
  if (new Set(surplusIds).size !== surplusIds.length) v("SURPLUS_DOUBLE_TRANSFER", "a project transferred surplus twice");
  for (const l of s.ledger) {
    if ((l.kind === "payroll" || l.kind === "upkeep") && l.projectId) v("WAGES_FROM_PROJECT", JSON.stringify(l));
  }
  if (new Set(s.prestigeAwards).size !== s.prestigeAwards.length) v("PRESTIGE_DOUBLE_AWARD", "duplicate award id");
  for (const rel of s.releases) checkRelease(rel, s, cfg, v);
  for (const id of Object.keys(s.stars)) {
    const st = s.stars[id];
    if (skillTotal(st) > budgetFor(st.level, cfg) + 1e-9 && !st.fallback) v("STAR_BUDGET", `${st.name} ${skillTotal(st)} > ${budgetFor(st.level, cfg)}`);
  }
  return out;
}

function checkRelease(rel: Release, s: StudioState, cfg: Config, v: (rule: string, d: string) => void) {
  const weeklyGross = rel.weekly.reduce((a, w) => a + w.gross, 0);
  if (Math.abs(weeklyGross - rel.grossTotal) > 0.05) v("GROSS_NOT_FROM_SALES", `${rel.title}: gross ${rel.grossTotal} vs weekly sales ${weeklyGross.toFixed(2)} (advance counted as revenue?)`);
  // scores must be reproducible from the recorded production state (no independent rolls, no Fame/marketing leak)
  const q = rel.trace.quality as { score: { meters: Release["meters"]; comboAudience: string; comboCritic: string; fatigueMult: number; saturationMult: number } };
  const re = computeScores(q.score.meters, { audience: q.score.comboAudience as never, critic: q.score.comboCritic as never }, round(1 - q.score.fatigueMult), q.score.saturationMult < 1, cfg);
  if (Math.abs(re.audience - rel.audience) > 0.011 || Math.abs(re.critic - rel.critic) > 0.011) v("SCORE_NOT_CAUSAL", `${rel.title}: stored A${rel.audience}/C${rel.critic} vs recomputed A${re.audience}/C${re.critic}`);
  if (Math.abs(avgScore(rel.audience, rel.critic) - rel.avgScore) > 0.011) v("AVG_MISMATCH", rel.title);
  if (!rel.active && rel.weekly.length && rel.weekly.at(-1)!.viewers !== 0) v("RUN_NOT_TERMINATED", rel.title);
  if (rel.weekly.length > cfg.audience.maxRunWeeks + 2) v("RUN_TOO_LONG", `${rel.title}: ${rel.weekly.length} weeks`);
}

function round(x: number) {
  return Math.round(x * 100) / 100;
}

export interface Flag {
  flag: string;
  fired: boolean;
  why: string;
  seeds?: number[];
  implicated?: string;
}

const med = (xs: number[]) => quantile(xs, 0.5);

export function diagnose(metrics: CareerMetrics[], releasesByCareer: { seed: number; strategy: string; releases: Release[] }[], th: Thresholds = DEFAULT_THRESHOLDS): Flag[] {
  const flags: Flag[] = [];
  const strategies = [...new Set(metrics.map((m) => m.strategy))];
  const by = (s: string) => metrics.filter((m) => m.strategy === s);
  const medCash = Object.fromEntries(strategies.map((s) => [s, med(by(s).map((m) => m.endCash))]));
  const medPrestige = Object.fromEntries(strategies.map((s) => [s, med(by(s).map((m) => m.prestige))]));

  // SURPLUS_FARMING_DOMINANT
  if (strategies.includes("cheap-duds")) {
    const decent = strategies.filter((s) => ["balanced", "quality-first"].includes(s));
    const bestDecent = Math.max(...decent.map((s) => medCash[s]));
    const fired = decent.length > 0 && medCash["cheap-duds"] >= bestDecent * th.surplusDominanceRatio;
    flags.push({ flag: "SURPLUS_FARMING_DOMINANT", fired, why: `cheap-duds median end cash ${Math.round(medCash["cheap-duds"])} vs best decent policy ${Math.round(bestDecent)} (fires at >= ${th.surplusDominanceRatio}x)`, implicated: "distribution.roster[].generosity, production.movie.baseCost, marketing/Star value" });
  }
  // EARLY_SOFTLOCK
  const stuck = metrics.filter((m) => m.stoppedReason === "maxWeeks" || m.negativeCashWeeks >= th.earlySoftlockNegativeWeeks);
  const stuckBy = strategies.map((s) => `${s} ${stuck.filter((m) => m.strategy === s).length}/${by(s).length}`).filter((x) => !x.startsWith("0") && !/ 0\//.test(x));
  flags.push({ flag: "EARLY_SOFTLOCK", fired: stuck.length > 0, why: `${stuck.length}/${metrics.length} careers stuck (hit maxWeeks or >= ${th.earlySoftlockNegativeWeeks} negative-cash weeks)${stuckBy.length ? `; by strategy: ${stuckBy.join(", ")}` : ""}`, seeds: stuck.slice(0, 10).map((m) => m.seed), implicated: "start.cash, wages, lifeline terms" });
  // PRESTIGE pace
  const fast = metrics.filter((m) => m.prestigePerYear > th.prestigeTooFastPerYear);
  flags.push({ flag: "PRESTIGE_TOO_FAST", fired: fast.length / metrics.length > 0.25, why: `${fast.length}/${metrics.length} careers earn > ${th.prestigeTooFastPerYear} Prestige/year`, seeds: fast.slice(0, 10).map((m) => m.seed), implicated: "prestige.milestones, prestige.repeatScope" });
  const longCareers = metrics.filter((m) => m.releases >= th.prestigeTooSlowMinReleases);
  const zero = longCareers.filter((m) => m.prestige === 0);
  flags.push({ flag: "PRESTIGE_TOO_SLOW", fired: longCareers.length > 0 && zero.length / longCareers.length > th.prestigeTooSlowShareZero, why: `${zero.length}/${longCareers.length} careers with >= ${th.prestigeTooSlowMinReleases} releases have zero Prestige`, implicated: "prestige thresholds vs typical scores" });
  // QUALITY_INFLATION
  const infl = metrics.filter((m) => m.shareLate8plus > th.qualityInflationLateShare8plus || m.share9plus > th.qualityInflationShare9plus);
  flags.push({ flag: "QUALITY_INFLATION", fired: infl.length / metrics.length > 0.25, why: `${infl.length}/${metrics.length} careers: late releases mostly 8+ or > ${th.qualityInflationShare9plus * 100}% of releases 9+`, seeds: infl.slice(0, 10).map((m) => m.seed), implicated: "staffGrowth.statGainPerWeek, stars.growthPerProject, studioGenre.qualityBonusPerLevel, production.eraBarPerYear" });
  // DEAD / DOMINANT strategies
  const bestCash = Math.max(...strategies.map((s) => medCash[s]));
  const dead = strategies.filter((s) => medCash[s] < 0 || medCash[s] < bestCash * th.deadStrategyRatio);
  flags.push({ flag: "DEAD_STRATEGY", fired: dead.length > 0, why: dead.length ? `${dead.join(", ")}: median end cash < ${th.deadStrategyRatio * 100}% of the best (${Math.round(bestCash)}) or negative` : "no strategy collapses", implicated: "varies by strategy" });
  const seeds = [...new Set(metrics.map((m) => m.seed))];
  for (const s of strategies) {
    let wins = 0;
    let n = 0;
    for (const seed of seeds) {
      const mine = metrics.find((m) => m.seed === seed && m.strategy === s);
      const others = metrics.filter((m) => m.seed === seed && m.strategy !== s);
      if (!mine || !others.length) continue;
      n++;
      if (others.every((o) => mine.endCash > o.endCash && mine.prestige >= o.prestige)) wins++;
    }
    if (n && wins / n >= th.dominantPairedWinShare) flags.push({ flag: "DOMINANT_STRATEGY", fired: true, why: `${s} beats every other policy on cash AND Prestige in ${((wins / n) * 100).toFixed(0)}% of paired seeds`, implicated: s });
  }
  if (!flags.some((f) => f.flag === "DOMINANT_STRATEGY")) flags.push({ flag: "DOMINANT_STRATEGY", fired: false, why: `no policy wins cash AND Prestige in >= ${th.dominantPairedWinShare * 100}% of paired seeds` });
  // STAR_PRICE_NO_VALUE: expensive Fame doesn't pay back vs cheap casting
  if (strategies.includes("famous-star") && strategies.includes("cheap-duds")) {
    const fs = by("famous-star");
    const cd = by("cheap-duds");
    const fsPer = med(fs.map((m) => m.cashPerRelease));
    const cdPer = med(cd.map((m) => m.cashPerRelease));
    flags.push({ flag: "STAR_PRICE_NO_VALUE", fired: fsPer < cdPer, why: `famous-star median cash/release ${Math.round(fsPer)} vs cheap-duds ${Math.round(cdPer)} (Fame + marketing spend ${fsPer < cdPer ? "does NOT" : "does"} pay back)`, implicated: "stars.feePerFame, audience.fameAwareness, marketing campaigns" });
  }
  // FRANCHISE_AUTO_WIN
  if (strategies.includes("franchise-builder")) {
    const others = strategies.filter((s) => s !== "franchise-builder");
    const fired = others.every((s) => medCash["franchise-builder"] > medCash[s] * 1.25 && medPrestige["franchise-builder"] >= medPrestige[s]);
    flags.push({ flag: "FRANCHISE_AUTO_WIN", fired, why: `franchise-builder median cash ${Math.round(medCash["franchise-builder"])}; fires if > 1.25x every other policy and Prestige >= all`, implicated: "audience.fanAwareness, repetitionFatigue.sequelPerRepeat" });
  }
  // DISTRIBUTOR_TRUST_SPIRAL
  const spiral = metrics.filter((m) => m.meanTrustEnd < th.trustSpiralMinTrust);
  flags.push({ flag: "DISTRIBUTOR_TRUST_SPIRAL", fired: spiral.length / metrics.length > th.trustSpiralShare, why: `${spiral.length}/${metrics.length} careers end with mean distributor trust < ${th.trustSpiralMinTrust}`, seeds: spiral.slice(0, 10).map((m) => m.seed), implicated: "distribution.trust*" });
  // STREAMING_PASSIVE_MONEY_PRINTER — streaming not modelled
  flags.push({ flag: "STREAMING_PASSIVE_MONEY_PRINTER", fired: false, why: "NOT APPLICABLE: streaming is not modelled yet (Gate 3)" });
  // HIGH_REVIEWS_UNEXPLAINED_LOW_SALES
  const all = releasesByCareer.flatMap((c) => c.releases.map((r) => ({ ...c, r })));
  const grossQ = quantile(all.map((x) => x.r.grossTotal), th.lowSalesQuantile);
  const reachMed = quantile(all.map((x) => x.r.reachCap), 0.5);
  const awOf = (r: Release) => (r.trace.opening as { awareness: number }).awareness;
  const awMed = quantile(all.map((x) => awOf(x.r)), 0.5);
  const highLow = all.filter((x) => x.r.avgScore >= th.highReviewsAvg && x.r.grossTotal < grossQ && !x.r.active);
  const explainedReach = highLow.filter((x) => x.r.reachCap < reachMed);
  const explainedAwareness = highLow.filter((x) => x.r.reachCap >= reachMed && awOf(x.r) < awMed);
  const unexplained = highLow.filter((x) => x.r.reachCap >= reachMed && awOf(x.r) >= awMed);
  flags.push({ flag: "HIGH_REVIEWS_UNEXPLAINED_LOW_SALES", fired: unexplained.length > 0, why: `${highLow.length} releases with avg >= ${th.highReviewsAvg} and gross in bottom ${th.lowSalesQuantile * 100}%: ${explainedReach.length} explained by small reach, ${explainedAwareness.length} by low awareness (little marketing/Fame/fans), ${unexplained.length} unexplained`, seeds: [...new Set(unexplained.slice(0, 10).map((x) => x.seed))], implicated: "audience opening/legs model" });
  // UNSUPPORTED_RULE_ASSUMPTION — informational: working assumptions in use
  flags.push({
    flag: "UNSUPPORTED_RULE_ASSUMPTION",
    fired: true,
    why: "INFO: results depend on WORKING ASSUMPTIONS (see docs/assumptions-register.md): prestige repeatScope=perIP, trust formula, offer/heat formula, saturating awareness + geometric legs, genre XP on completion, staff-pitch rule, all numeric values.",
  });
  return flags;
}
