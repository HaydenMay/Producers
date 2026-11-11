// Gate 4: auditable per-release and per-career accounting, identical formulas for legacy and candidate.
// Pure functions over a finished state (nothing here changes the simulation).
//   studio all-in net = studio share of gross + kept advance surplus − studio cash paid for base/Star/campaign
//                       − payroll and upkeep during the production weeks
//   direct-only net    = the old metric (no payroll): studioTake + surplus − cashOverrun
//   distributor net    = distributor share of gross − its stake (candidate: its own ad spend; legacy: the advance)
import type { Config } from "../core/config";
import { CASH_KINDS } from "../core/events";
import { formatSpec, formatOf } from "../core/formats";
import type { Release, StudioState } from "../core/types";

export interface ReleaseAccount {
  id: string;
  title: string;
  format: string; // movie | limited_series | tv | original
  band: string;
  avg: number;
  startWeek: number;
  releaseWeek: number;
  direct: number;
  payrollDuring: number;
  studioGross: number;
  surplus: number;
  allInNet: number;
  directNet: number;
  peakDrawdown: number;
  distributorId: string | null;
  distStake: number;
  distIncome: number;
  distNet: number;
  grossTotal: number;
  viewers: number;
  unique: number;
  reachCap: number;
  opening: number;
  adSpend: number;
  done: boolean;
}

export const scoreBand = (avg: number) => (avg < 4 ? "<4" : avg < 6 ? "4-6" : avg < 8 ? "6-8" : "8+");

/** Weekly studio cash at the END of each week (index = week). */
export function cashSeries(s: StudioState): number[] {
  const byWeek = new Map<number, number>();
  for (const l of s.ledger) if (CASH_KINDS.has(l.kind)) byWeek.set(l.week, (byWeek.get(l.week) ?? 0) + l.amount);
  const out: number[] = [];
  let c = 0;
  for (let w = 0; w <= s.week; w++) out.push((c += byWeek.get(w) ?? 0));
  return out;
}

export function releaseAccounts(s: StudioState, cfg: Config): ReleaseAccount[] {
  const cash = cashSeries(s);
  const labor = new Map<number, number>();
  for (const l of s.ledger) if (l.kind === "payroll" || l.kind === "upkeep" || l.kind === "contract_labor") labor.set(l.week, (labor.get(l.week) ?? 0) - l.amount);
  return s.releases.map((r: Release) => {
    const dur = formatSpec(cfg, formatOf(r), r.episodes).durationWeeks;
    const start = r.releaseWeek - dur;
    let payrollDuring = 0;
    for (let w = start + 1; w <= r.releaseWeek; w++) payrollDuring += labor.get(w) ?? 0;
    let min = cash[Math.max(0, start)] ?? 0;
    for (let w = start; w <= r.releaseWeek && w < cash.length; w++) min = Math.min(min, cash[Math.max(0, w)]);
    const direct = r.cashOverrun;
    const allIn = r.studioTake + r.surplusKept - direct - payrollDuring;
    const stake = r.financing === "late_distribution" ? r.adSpend ?? 0 : r.advance;
    return {
      id: r.id,
      title: r.title,
      format: r.route === "original" ? "original" : formatOf(r),
      band: scoreBand(r.avgScore),
      avg: r.avgScore,
      startWeek: start,
      releaseWeek: r.releaseWeek,
      direct,
      payrollDuring,
      studioGross: r.studioTake,
      surplus: r.surplusKept,
      allInNet: allIn,
      directNet: r.studioTake + r.surplusKept - direct,
      peakDrawdown: Math.max(0, (cash[Math.max(0, start)] ?? 0) - min),
      distributorId: r.distributorId,
      distStake: stake,
      distIncome: r.distributorTake,
      distNet: r.distributorTake - stake,
      grossTotal: r.grossTotal,
      viewers: r.totalViewers,
      unique: r.uniqueViewers ?? r.totalViewers,
      reachCap: r.reachCap,
      opening: r.openingViewers,
      adSpend: r.adSpend ?? 0,
      done: !r.active,
    };
  });
}

export interface CareerEcon {
  seed: number;
  strategy: string;
  startCash: number;
  endCash: number;
  minCash: number;
  maxDrawdown: number;
  negWeeks: number;
  prestige: number;
  releases: number;
  contracts: number;
  contractWeeks: number;
  contractFees: number;
  stuck: boolean;
  tvUnlockWeek: number | null;
  streamingLiveWeek: number | null;
  perWeek: number;
}

/**
 * "Stuck" = in the last 2 years the studio neither completed a production nor a contract while it could not afford
 * a movie. With contracts on this should be impossible; legacy has the lifeline instead.
 */
export function careerEcon(seed: number, strategy: string, s: StudioState, cfg: Config): CareerEcon {
  const cash = cashSeries(s);
  let peak = -Infinity, dd = 0;
  for (const c of cash) {
    peak = Math.max(peak, c);
    dd = Math.max(dd, peak - c);
  }
  const W = cfg.time.weeksPerYear;
  const recent = s.week - 2 * W;
  const activeRecently = s.releases.some((r) => r.releaseWeek > recent) || (s.contractHistory ?? []).some((c) => c.endWeek > recent) || !!s.project || !!s.contract;
  const ch = s.contractHistory ?? [];
  const tv = s.events.find((e) => e.type === "unlock" && e.message.includes("TV series unlocked"));
  const live = s.events.find((e) => e.type === "streaming" && e.message.startsWith("Streaming service launched"));
  return {
    seed,
    strategy,
    startCash: cfg.start.cash,
    endCash: s.cash,
    minCash: Math.min(...cash),
    maxDrawdown: dd,
    negWeeks: cash.filter((c) => c < 0).length,
    prestige: s.prestige,
    releases: s.releases.length,
    contracts: ch.length,
    contractWeeks: ch.reduce((a, c) => a + c.weeks, 0),
    contractFees: ch.reduce((a, c) => a + c.fee, 0),
    stuck: s.week > 2 * W && !activeRecently,
    tvUnlockWeek: tv ? tv.week : null,
    streamingLiveWeek: live ? live.week : null,
    perWeek: (s.cash - cfg.start.cash) / Math.max(1, s.week),
  };
}
