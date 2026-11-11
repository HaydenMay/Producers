// Invariant checks (correctness) and diagnostic flags (balance smells). Flags are evidence, not auto-fixes.
import thresholdsJson from "../../config/diagnostics.json";
import type { Config } from "../core/config";
import { CASH_KINDS } from "../core/events";
import { computeScores, avgScore, expectationsAt, type Expectations } from "../core/scoring";
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
  // studio-wide capacity and Prestige-gated upgrades (cash alone can never buy growth)
  if (s.staff.length > s.maxStaff) v("STAFF_OVER_CAPACITY", `${s.staff.length} staff > capacity ${s.maxStaff}`);
  const gates = cfg.staffCapacity.upgradePrestige as number[];
  s.upgrades.forEach((u, i) => {
    if (u.prestigeAtUpgrade < (gates[i] ?? Infinity)) v("UPGRADE_BELOW_PRESTIGE_GATE", `upgrade ${i + 1} at Prestige ${u.prestigeAtUpgrade} < gate ${gates[i]}`);
  });
  if (s.ledger.filter((l) => l.kind === "upgrade").length !== s.upgrades.length) v("UPGRADE_UNPAID", "upgrade count differs from upgrade ledger entries");
  // Prestige only from configured milestones; never passive accrual
  const ids = new Set((cfg.prestige.milestones as { id: string }[]).map((m) => m.id));
  let psum = 0;
  for (const e of s.events.filter((x) => x.type === "prestige")) {
    const d = e.data as { milestone?: string; amount?: number } | undefined;
    if (!d?.milestone || !ids.has(d.milestone)) v("PRESTIGE_INVALID_MILESTONE", e.message);
    psum += d?.amount ?? 0;
  }
  if (psum !== s.prestige) v("PRESTIGE_SUM_MISMATCH", `awards sum ${psum} vs Prestige ${s.prestige}`);
  checkGate3(s, cfg, v);
  // feedback popups must describe what actually happened
  const UP = ["tuning in", "climbing", "holding on", "finding a few"];
  const DOWN = ["easing off", "winding down", "dropping fast", "scaring off"];
  for (const e of s.events.filter((x) => x.type === "feedback" && x.data?.direction)) {
    const dir = e.data!.direction;
    if (UP.some((w) => e.message.includes(w)) && dir !== "up") v("FEEDBACK_UNTRUE", `${e.message} (viewers ${e.data!.prev} → ${e.data!.now})`);
    if (DOWN.some((w) => e.message.includes(w)) && dir === "up") v("FEEDBACK_UNTRUE", `${e.message} (viewers ${e.data!.prev} → ${e.data!.now})`);
  }
  for (const id of Object.keys(s.stars)) {
    const st = s.stars[id];
    if (skillTotal(st) > budgetFor(st.level, cfg) + 1e-9 && !st.fallback) v("STAR_BUDGET", `${st.name} ${skillTotal(st)} > ${budgetFor(st.level, cfg)}`);
    if (Object.values(st.skills).some((x) => x > 100 || x < 0)) v("STAR_SKILL_RANGE", `${st.name} ${JSON.stringify(st.skills)}`);
  }
  return out;
}

function checkRelease(rel: Release, s: StudioState, cfg: Config, v: (rule: string, d: string) => void) {
  const weeklyGross = rel.weekly.reduce((a, w) => a + w.gross, 0);
  if (Math.abs(weeklyGross - rel.grossTotal) > 0.05) v("GROSS_NOT_FROM_SALES", `${rel.title}: gross ${rel.grossTotal} vs weekly sales ${weeklyGross.toFixed(2)} (advance counted as revenue?)`);
  // scores must be reproducible from the recorded production state (no independent rolls, no Fame/marketing leak)
  const q = rel.trace.quality as { score: { meters: Release["meters"]; comboAudience: string; comboCritic: string; fatigueMult: number; saturationMult: number } };
  const re = computeScores(q.score.meters, { audience: q.score.comboAudience as never, critic: q.score.comboCritic as never }, round(1 - q.score.fatigueMult), q.score.saturationMult < 1, cfg, (q.score as { expectations?: Expectations }).expectations, (q.score as { starFit?: number }).starFit ?? 0);
  const stored = (q.score as { expectations?: Expectations }).expectations;
  if (stored && JSON.stringify(stored) !== JSON.stringify(expectationsAt(rel.releaseWeek, cfg))) v("EXPECTATION_MISMATCH", `${rel.title}: stored critic gen ${stored.criticGeneration} / audience era ${stored.audienceEra} differ from the calendar schedule at week ${rel.releaseWeek}`);
  if ((rel.criticGeneration ?? 0) !== (stored?.criticGeneration ?? 0)) v("EXPECTATION_MISMATCH", `${rel.title}: release critic generation field disagrees with its score trace`);
  if (Math.abs(re.audience - rel.audience) > 0.011 || Math.abs(re.critic - rel.critic) > 0.011) v("SCORE_NOT_CAUSAL", `${rel.title}: stored A${rel.audience}/C${rel.critic} vs recomputed A${re.audience}/C${re.critic}`);
  if (Math.abs(avgScore(rel.audience, rel.critic) - rel.avgScore) > 0.011) v("AVG_MISMATCH", rel.title);
  if (!rel.active && rel.weekly.length && rel.weekly.at(-1)!.viewers !== 0) v("RUN_NOT_TERMINATED", rel.title);
  const episodic = rel.episodes !== undefined && !(rel.format === "limited_series" && cfg.limitedSeries.pacing === "declining");
  const tail = rel.format === "tv" ? cfg.tv.tailWeeks : cfg.limitedSeries.tailWeeks;
  const maxWeeks = episodic ? rel.episodes! + tail + 1 : cfg.audience.maxRunWeeks + 2;
  if (rel.weekly.length > maxWeeks) v("RUN_TOO_LONG", `${rel.title}: ${rel.weekly.length} weeks`);
  const distinct = episodic ? rel.uniqueViewers ?? 0 : rel.totalViewers;
  if (distinct > rel.reachCap) v("REACH_EXCEEDED", `${rel.title}: ${distinct} distinct viewers > reach cap ${rel.reachCap}`);
}

/** Gate 3 invariants: formats, episodes, catalog, Originals, streaming money, engineer, negative assertions. */
function checkGate3(s: StudioState, cfg: Config, v: (rule: string, d: string) => void) {
  const REVIEW = new Set(["allMeters", "audience", "critic", "hallOfFame"]);
  const reviewIds = new Set((cfg.prestige.milestones as { id: string; kind: string }[]).filter((m) => REVIEW.has(m.kind)).map((m) => m.id));
  const relById = new Map(s.releases.map((r) => [r.id, r]));
  for (const rel of s.releases) {
    // weekly episodes: each episode exactly once, consecutive weeks, in order
    if (rel.episodes !== undefined && rel.weekly.some((w) => w.episode !== undefined)) {
      const eps = rel.weekly.filter((w) => w.episode !== undefined);
      const nums = eps.map((w) => w.episode!);
      if (new Set(nums).size !== nums.length) v("TV_EPISODE_DUPLICATE", `${rel.title}: episode aired twice`);
      if (nums.some((n, i) => n !== i + 1)) v("TV_EPISODE_ORDER", `${rel.title}: episodes ${nums.join(",")}`);
      if (eps.some((w, i) => i > 0 && w.week !== eps[i - 1].week + 1)) v("TV_EPISODE_SKIPPED_WEEK", rel.title);
      if (!rel.active && nums.length !== rel.episodes) v("TV_EPISODES_MISSING", `${rel.title}: ${nums.length}/${rel.episodes} aired`);
    }
    if (rel.route === "original" && (rel.grossTotal !== 0 || rel.distributorTake !== 0 || rel.studioTake !== 0 || rel.distributorId)) v("ORIGINAL_EARNS_TRADITIONAL", rel.title);
    if (rel.format === "limited_series" && s.releases.filter((r) => r.ipId === rel.ipId).length > 1) v("LIMITED_SERIES_RENEWED", rel.title);
    if (rel.format === "tv") {
      const first = s.releases.find((r) => r.ipId === rel.ipId)!;
      if (first.genre !== rel.genre) v("TV_GENRE_CHANGED", `${rel.title}: ${first.genre} → ${rel.genre}`);
    }
  }
  // review/craft Prestige only in a season's own release week, never per episode
  for (const e of s.events.filter((x) => x.type === "prestige")) {
    const d = e.data as { milestone?: string; releaseId?: string };
    const rel = d.releaseId ? relById.get(d.releaseId) : undefined;
    if (rel && reviewIds.has(d.milestone ?? "") && e.week !== rel.releaseWeek) v("TV_PRESTIGE_PER_EPISODE", `${e.message} at week ${e.week}, release week ${rel.releaseWeek}`);
  }
  // one advance per project (no multi-distributor stacking)
  const adv = s.ledger.filter((l) => l.kind === "advance_received").map((l) => l.projectId);
  if (new Set(adv).size !== adv.length) v("MULTI_DISTRIBUTOR_STACKING", "a project received two advances");
  // streaming: catalog entries unique, only finished titles, one subscription income line per week, no NaN/negative
  const p = s.platform;
  if (p) {
    const ids = p.catalog.map((c) => c.releaseId);
    if (new Set(ids).size !== ids.length) v("CATALOG_DOUBLE_COUNT", "a title joined the catalog twice");
    for (const c of p.catalog) {
      const r = relById.get(c.releaseId);
      if (!r || (r.runEndWeek !== undefined && c.joinWeek < r.runEndWeek) || (r.active && true)) v("CATALOG_BEFORE_RUN_END", `${r?.title ?? c.releaseId} joined at week ${c.joinWeek}`);
    }
    const subWeeks = s.ledger.filter((l) => l.kind === "subscriptions").map((l) => l.week);
    if (new Set(subWeeks).size !== subWeeks.length) v("SUBSCRIPTIONS_DOUBLE_PAID", "two subscription incomes in one week");
    for (const w of p.weekly) if (!Number.isFinite(w.subs) || w.subs < 0 || w.subs > cfg.streaming.reachableMarket || !Number.isFinite(w.gross)) v("SUBSCRIBERS_INVALID", JSON.stringify(w));
    if (p.status === "live" && (p.launchWeek ?? 0) - p.buildStartWeek > cfg.streaming.buildWeeks + 1) v("ENGINEER_STUCK", `build took ${(p.launchWeek ?? 0) - p.buildStartWeek} weeks`);
    if (p.status === "building" && s.week - p.buildStartWeek > cfg.streaming.buildWeeks + 1) v("ENGINEER_STUCK", `still building after ${s.week - p.buildStartWeek} weeks`);
    // catalog alone never acquires: weeks with no Original viewers and no catalog join have zero acquisition
    for (const w of p.weekly) if (w.acquired > 0 && Object.keys(w.sources).length === 0) v("PASSIVE_ACQUISITION", `week ${w.week}: +${w.acquired} with no source`);
  }
  // negative assertions on state shape
  if ("fans" in (s as unknown as Record<string, unknown>)) v("GLOBAL_FAN_STAT", "studio-level fans field exists");
  for (const st of s.staff) if ("genreXp" in (st as unknown as Record<string, unknown>)) v("STAFF_GENRE_XP", st.name);
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

export function diagnose(metrics: CareerMetrics[], releasesByCareer: { seed: number; strategy: string; releases: Release[] }[], th: Thresholds = DEFAULT_THRESHOLDS, cfg?: Config): Flag[] {
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
    why: `INFO: results depend on WORKING ASSUMPTIONS (see docs/assumptions-register.md): prestige repeatScope=${cfg?.prestige.repeatScope ?? "?"}, staff capacity ladder=${cfg ? JSON.stringify(cfg.staffCapacity.ladder) : "?"}, trust formula, offer/heat formula, saturating awareness + ${cfg?.audience.legsModel ?? "?"} legs, genre XP on completion, staff-pitch rule, all numeric values.`,
  });
  return flags;
}
