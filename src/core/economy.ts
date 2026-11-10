// Production accounting. LOCKED (v9.61): base cost unavoidable; Star fee + campaign use unspent advance
// first, then studio cash; overruns allowed; 100% of unused advance kept on successful completion;
// cancellation repays the advance and is only allowed when affordable; wages/upkeep never use advances.
// WORKING ASSUMPTION (Open): advance held as an earmarked project reserve (`unspentAdvance`), base cost
// paid at project start, surplus transferred once at completion.
import { ledger, round2, emit } from "./events";
import type { Project, StudioState } from "./types";

/** Negative cash is never spending power. */
export function spendableCash(state: StudioState): number {
  return Math.max(0, state.cash);
}

export function projectFunds(state: StudioState, project: Project | null): number {
  return round2((project ? project.unspentAdvance : 0) + spendableCash(state));
}

/**
 * Pay a project expense: advance reserve first, then studio cash.
 * Caller must have checked affordability (amount <= projectFunds) unless `mandatory` (base cost).
 */
export function payProjectExpense(
  state: StudioState,
  project: Project,
  amount: number,
  kind: "base_cost" | "star_fee" | "campaign",
  note: string,
): { fromAdvance: number; fromCash: number } {
  const fromAdvance = Math.min(project.unspentAdvance, amount);
  const fromCash = round2(amount - fromAdvance);
  if (fromAdvance > 0) {
    project.unspentAdvance = round2(project.unspentAdvance - fromAdvance);
    ledger(state, { kind: "advance_spent", amount: -fromAdvance, projectId: project.id, note: `${kind}: ${note}` });
  }
  if (fromCash > 0) {
    ledger(state, { kind, amount: -fromCash, projectId: project.id, note });
    project.cashOverrun = round2(project.cashOverrun + fromCash);
  }
  return { fromAdvance, fromCash };
}

export function receiveAdvance(state: StudioState, project: Project, amount: number, distributorName: string): void {
  project.advance = amount;
  project.unspentAdvance = amount;
  ledger(state, { kind: "advance_received", amount, projectId: project.id, note: `advance from ${distributorName} (project reserve, not revenue)` });
}

/** On successful completion: move the whole unused advance into studio cash, exactly once. */
export function transferSurplus(state: StudioState, project: Project): number {
  const surplus = project.unspentAdvance;
  if (surplus > 0) {
    ledger(state, { kind: "surplus_transfer", amount: surplus, projectId: project.id, note: "unused advance kept at completion (not sales revenue)" });
    emit(state, "surplus", `${project.title}: kept $${Math.round(surplus).toLocaleString()} of unused advance.`, { projectId: project.id, surplus });
  }
  project.unspentAdvance = 0;
  return surplus;
}

/**
 * WORKING ASSUMPTION: cancellation is affordable when remaining reserve + spendable cash covers the WHOLE
 * original advance. Sunk costs (base cost, Star fee) are not refunded.
 */
export function canCancel(state: StudioState): boolean {
  const p = state.project;
  if (!p) return false;
  if (p.advance <= 0) return true; // self-funded: nothing to repay
  return p.unspentAdvance + spendableCash(state) >= p.advance;
}

export function cancelRepay(state: StudioState, project: Project): void {
  // Return the reserve first, then studio cash covers the rest of the original advance.
  const fromReserve = project.unspentAdvance;
  if (fromReserve > 0) ledger(state, { kind: "advance_spent", amount: -fromReserve, projectId: project.id, note: "returned to distributor on cancel" });
  const fromCash = round2(project.advance - fromReserve);
  if (fromCash > 0) ledger(state, { kind: "cancel_repay", amount: -fromCash, projectId: project.id, note: "advance repaid on cancel" });
  project.unspentAdvance = 0;
}
