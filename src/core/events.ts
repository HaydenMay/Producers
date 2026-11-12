import type { LedgerEntry, StudioState } from "./types";

export function emit(state: StudioState, type: string, message: string, data?: Record<string, unknown>): void {
  state.events.push({ week: state.week, type, message, ...(data ? { data } : {}) });
}

/** Kinds of ledger entries that change studio cash. advance_received/advance_spent track the project reserve only. */
export const CASH_KINDS: ReadonlySet<LedgerEntry["kind"]> = new Set([
  "start_cash",
  "payroll",
  "upkeep",
  "base_cost",
  "star_fee",
  "campaign",
  "surplus_transfer",
  "studio_take",
  "cancel_repay",
  "hire",
  "train",
  "studio_ads",
  "research",
  "upgrade",
  "format_unlock",
  "announce",
  "platform_build",
  "subscriptions",
  "platform_opex",
  "fire",
  "contract_labor",
  "contract_fee",
  "overdraft_interest",
]);

export function ledger(state: StudioState, entry: Omit<LedgerEntry, "week">): void {
  state.ledger.push({ week: state.week, ...entry });
  if (CASH_KINDS.has(entry.kind)) state.cash = round2(state.cash + entry.amount);
}

export function round2(x: number): number {
  return Math.round(x * 100) / 100;
}

export function newId(state: StudioState, prefix: string): string {
  state.counters.nextId += 1;
  return `${prefix}${state.counters.nextId}`;
}

/** PROD-078 (Claude's call 2026-11-12): the score a threshold judges = the score the player SEES. With
 *  scoring.thresholdDecimals = 1 an 8.95 average shows "9.0" and counts as 9.0; null/absent = the raw 2-decimal
 *  average (legacy). Rounded from whole hundredths so floating point can't turn 8.95 into 8.9. */
export function thresholdScore(avg: number, cfg: { scoring: unknown }): number {
  const d = (cfg.scoring as { thresholdDecimals?: number | null }).thresholdDecimals;
  if (d !== 1) return avg;
  return Math.round(Math.round(avg * 100) / 10) / 10;
}
