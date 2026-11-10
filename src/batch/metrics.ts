import type { Config } from "../core/config";
import { genreLevel } from "../core/progression";
import type { StudioState } from "../core/types";
import type { CareerResult } from "./runner";

export interface CareerMetrics {
  seed: number;
  strategy: string;
  weeks: number;
  years: number;
  releases: number;
  stoppedReason: string;
  endCash: number;
  profit: number;
  studioTake: number;
  grossTotal: number;
  royaltyCosts: number;
  surplusKept: number;
  advancesReceived: number;
  starSpend: number;
  campaignSpend: number;
  overrunTotal: number;
  payroll: number;
  negativeCashWeeks: number;
  recoveries: number;
  endedNegative: boolean;
  prestige: number;
  firstPrestigeWeek: number | null;
  meanAudience: number;
  meanCritic: number;
  hofCount: number;
  share9plus: number;
  shareLate8plus: number; // releases in the last 40% of the career with avg >= 8
  combosExplored: number;
  meanGross: number;
  meanLegs: number;
  totalFans: number;
  maxIpFans: number;
  sequelOpeningLift: number | null;
  meanTrustEnd: number;
  meanDistributorRoi: number;
  minTrustEnd: number;
  staffCount: number;
  meanStaffStat: number;
  maxGenreLevel: number;
  bestStarFame: number;
  cashPerYear: number;
  prestigePerYear: number;
  cashPerRelease: number;
  surplusShareOfIncome: number;
  scoresByIndex: number[];
}

function mean(xs: number[]): number {
  return xs.length ? xs.reduce((a, b) => a + b, 0) / xs.length : 0;
}

export function careerMetrics(r: CareerResult, cfg: Config): CareerMetrics {
  const s: StudioState = r.state;
  const rels = s.releases;
  const sumKind = (k: string) => s.ledger.filter((l) => l.kind === k).reduce((a, l) => a + l.amount, 0);
  // recoveries: transitions from negative to non-negative cash, reconstructed from the cash ledger
  let cash = 0;
  let neg = false;
  let recoveries = 0;
  const byWeek = new Map<number, number>();
  for (const l of s.ledger) {
    if (["advance_received", "advance_spent"].includes(l.kind)) continue;
    cash += l.amount;
    byWeek.set(l.week, cash);
  }
  for (const w of [...byWeek.keys()].sort((a, b) => a - b)) {
    const c = byWeek.get(w)!;
    if (c < 0) neg = true;
    else if (neg) {
      recoveries += 1;
      neg = false;
    }
  }
  const firstPrestige = s.events.find((e) => e.type === "prestige");
  const avgs = rels.map((x) => x.avgScore);
  const lateStart = Math.floor(rels.length * 0.6);
  const late = rels.slice(lateStart);
  const sequelLifts: number[] = [];
  for (const rel of rels) {
    if (rel.ipRelation !== "sequel") continue;
    const parent = rels.filter((x) => x.ipId === rel.ipId && x.releaseWeek < rel.releaseWeek).at(-1);
    if (parent && parent.openingViewers > 0) sequelLifts.push(rel.openingViewers / parent.openingViewers);
  }
  const years = Math.max(s.week / cfg.time.weeksPerYear, 1e-9);
  const incomeIn = sumKind("studio_take") + sumKind("surplus_transfer");
  const realDists = s.distributors.filter((d) => !d.lifeline);
  return {
    seed: r.seed,
    strategy: r.strategy,
    weeks: s.week,
    years: +years.toFixed(2),
    releases: rels.length,
    stoppedReason: r.stoppedReason,
    endCash: Math.round(s.cash),
    profit: Math.round(s.cash - cfg.start.cash),
    studioTake: Math.round(sumKind("studio_take")),
    grossTotal: Math.round(rels.reduce((a, x) => a + x.grossTotal, 0)),
    royaltyCosts: Math.round(rels.reduce((a, x) => a + x.distributorTake, 0)),
    surplusKept: Math.round(sumKind("surplus_transfer")),
    advancesReceived: Math.round(sumKind("advance_received")),
    starSpend: Math.round(rels.reduce((a, x) => a + x.starFee, 0)),
    campaignSpend: Math.round(rels.reduce((a, x) => a + x.campaignCost, 0)),
    overrunTotal: Math.round(rels.reduce((a, x) => a + x.cashOverrun, 0)),
    payroll: Math.round(-sumKind("payroll") - sumKind("upkeep")),
    negativeCashWeeks: s.counters.negativeCashWeeks,
    recoveries,
    endedNegative: s.cash < 0,
    prestige: s.prestige,
    firstPrestigeWeek: firstPrestige ? firstPrestige.week : null,
    meanAudience: +mean(rels.map((x) => x.audience)).toFixed(2),
    meanCritic: +mean(rels.map((x) => x.critic)).toFixed(2),
    hofCount: rels.filter((x) => x.hallOfFame).length,
    share9plus: rels.length ? avgs.filter((a) => a >= 9).length / rels.length : 0,
    shareLate8plus: late.length ? late.filter((x) => x.avgScore >= 8).length / late.length : 0,
    combosExplored: Object.keys(s.comboBook).length,
    meanGross: Math.round(mean(rels.map((x) => x.grossTotal))),
    meanLegs: +mean(rels.filter((x) => x.openingViewers > 0).map((x) => x.totalViewers / x.openingViewers)).toFixed(2),
    totalFans: Object.values(s.ips).reduce((a, i) => a + i.fans, 0),
    maxIpFans: Math.max(0, ...Object.values(s.ips).map((i) => i.fans)),
    sequelOpeningLift: sequelLifts.length ? +mean(sequelLifts).toFixed(2) : null,
    meanTrustEnd: +mean(realDists.map((d) => d.trust)).toFixed(2),
    meanDistributorRoi: +mean(rels.filter((x) => x.advance > 0 && !x.active).map((x) => x.distributorTake / x.advance)).toFixed(2),
    minTrustEnd: +Math.min(...realDists.map((d) => d.trust)).toFixed(2),
    staffCount: s.staff.length,
    meanStaffStat: +mean(s.staff.flatMap((x) => Object.values(x.stats))).toFixed(1),
    maxGenreLevel: Math.max(0, ...Object.keys(s.genreXp).map((g) => genreLevel(s, cfg, g))),
    bestStarFame: Math.round(Math.max(0, ...s.hiredStarIds.map((id) => s.stars[id].fame))),
    cashPerYear: Math.round((s.cash - cfg.start.cash) / years),
    prestigePerYear: +(s.prestige / years).toFixed(1),
    cashPerRelease: rels.length ? Math.round((s.cash - cfg.start.cash) / rels.length) : 0,
    surplusShareOfIncome: incomeIn > 0 ? +(sumKind("surplus_transfer") / incomeIn).toFixed(3) : 0,
    scoresByIndex: avgs,
  };
}

export function quantile(xs: number[], q: number): number {
  if (!xs.length) return NaN;
  const s = [...xs].sort((a, b) => a - b);
  const pos = (s.length - 1) * q;
  const lo = Math.floor(pos);
  const hi = Math.ceil(pos);
  return s[lo] + (s[hi] - s[lo]) * (pos - lo);
}

export interface Dist {
  n: number;
  mean: number;
  median: number;
  p10: number;
  p90: number;
  min: number;
  max: number;
}

export function dist(xs: number[]): Dist {
  return {
    n: xs.length,
    mean: +mean(xs).toFixed(2),
    median: +quantile(xs, 0.5).toFixed(2),
    p10: +quantile(xs, 0.1).toFixed(2),
    p90: +quantile(xs, 0.9).toFixed(2),
    min: +Math.min(...xs).toFixed(2),
    max: +Math.max(...xs).toFixed(2),
  };
}

export const SUMMARY_KEYS: (keyof CareerMetrics)[] = [
  "endCash",
  "profit",
  "cashPerYear",
  "prestige",
  "prestigePerYear",
  "meanAudience",
  "meanCritic",
  "hofCount",
  "shareLate8plus",
  "surplusKept",
  "surplusShareOfIncome",
  "royaltyCosts",
  "starSpend",
  "campaignSpend",
  "negativeCashWeeks",
  "meanLegs",
  "maxIpFans",
  "meanTrustEnd",
  "meanDistributorRoi",
  "combosExplored",
  "meanStaffStat",
  "years",
];

export function summarize(metrics: CareerMetrics[]): Record<string, Record<string, Dist | number>> {
  const by = new Map<string, CareerMetrics[]>();
  for (const m of metrics) by.set(m.strategy, [...(by.get(m.strategy) ?? []), m]);
  const out: Record<string, Record<string, Dist | number>> = {};
  for (const [strat, ms] of by) {
    const row: Record<string, Dist | number> = {};
    for (const k of SUMMARY_KEYS) row[k] = dist(ms.map((m) => Number(m[k] ?? 0)));
    row.shareEndedNegative = +(ms.filter((m) => m.endedNegative).length / ms.length).toFixed(3);
    row.shareAnyPrestige = +(ms.filter((m) => m.prestige > 0).length / ms.length).toFixed(3);
    row.shareStuck = +(ms.filter((m) => m.stoppedReason === "maxWeeks").length / ms.length).toFixed(3);
    out[strat] = row;
  }
  return out;
}

/** Mean avg score by production index (trend over a career). */
export function scoreTrend(metrics: CareerMetrics[], strategy: string): number[] {
  const ms = metrics.filter((m) => m.strategy === strategy);
  const maxLen = Math.max(0, ...ms.map((m) => m.scoresByIndex.length));
  const out: number[] = [];
  for (let i = 0; i < maxLen; i++) {
    const vals = ms.map((m) => m.scoresByIndex[i]).filter((v) => v !== undefined);
    out.push(+mean(vals).toFixed(2));
  }
  return out;
}
