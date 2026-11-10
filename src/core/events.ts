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
