import type { Config } from "../core/config";
import { makeAgentRng } from "../core/rng";
import { advanceWeek, applyDecision, createStudio, getChoices } from "../core/simulation";
import type { Decision, StudioState } from "../core/types";
import { STRATEGIES, type AgentCtx } from "../agents/strategies";
import { decideFor } from "../agents/economy";

export interface CareerOptions {
  productions: number;
  /** Gate 3: stop at this in-game horizon (years) instead of a production count (productions is then ignored) */
  years?: number;
  maxWeeks?: number;
  drain?: boolean; // keep simulating until the last release's run ends
}

export interface CareerResult {
  seed: number;
  strategy: string;
  state: StudioState;
  decisions: Decision[];
  stoppedReason: string;
}

export function runCareer(seed: number, strategyId: string, cfg: Config, opts: CareerOptions): CareerResult {
  const strat = STRATEGIES[strategyId];
  if (!strat) throw new Error(`Unknown strategy ${strategyId}`);
  const state = createStudio(seed, cfg);
  const rng = makeAgentRng(seed, (strat as { rngId?: string }).rngId ?? strat.id); // approach agents reuse their base policy's dice // alias names (e.g. low-budget-random-combo) replay the original policy exactly
  const decisions: Decision[] = [];
  const maxWeeks = opts.years !== undefined ? Math.round(opts.years * cfg.time.weeksPerYear) : opts.maxWeeks ?? opts.productions * 40 + 104;
  const ctx: AgentCtx = { reinvestsThisStop: 0 };
  let stoppedReason = "productions reached";
  while (true) {
    if (state.week >= maxWeeks) {
      stoppedReason = opts.years !== undefined ? "horizon" : "maxWeeks";
      break;
    }
    const done = opts.years === undefined && state.counters.productionsCompleted >= opts.productions && !state.project && !state.pendingOffers;
    if (done) {
      const anyActive = state.releases.some((r) => r.active);
      if (!opts.drain || !anyActive) break;
      advanceWeek(state, cfg);
      decisions.push({ type: "wait" });
      continue;
    }
    const ch = getChoices(state, cfg);
    if (ch.phase === "finished") {
      stoppedReason = "career ended";
      break;
    }
    // Every phase goes to the strategy: pre-Gate-3 strategies always wait during production (unchanged behavior);
    // Gate 3 strategies may announce a season or start the streaming build in the background.
    const d: Decision = decideFor(strat, state, cfg, ch, rng, ctx);
    if (d.type === "hire" || d.type === "train" || d.type === "studio_ads" || d.type === "research_theme") ctx.reinvestsThisStop += 1;
    else ctx.reinvestsThisStop = 0;
    applyDecision(state, cfg, d);
    decisions.push(d);
  }
  return { seed, strategy: strategyId, state, decisions, stoppedReason };
}

/** Scripted career for tests/scenarios: a plain decide function instead of a named strategy. */
export function runScripted(
  seed: number,
  cfg: Config,
  decide: (state: StudioState, choices: ReturnType<typeof getChoices>) => Decision,
  opts: CareerOptions,
): CareerResult {
  const state = createStudio(seed, cfg);
  const decisions: Decision[] = [];
  const maxWeeks = opts.maxWeeks ?? opts.productions * 40 + 104;
  while (state.week < maxWeeks) {
    const done = state.counters.productionsCompleted >= opts.productions && !state.project && !state.pendingOffers && !state.contract;
    if (done) {
      if (!opts.drain || !state.releases.some((r) => r.active)) break;
      advanceWeek(state, cfg);
      decisions.push({ type: "wait" });
      continue;
    }
    const ch = getChoices(state, cfg);
    if (ch.phase === "finished") break;
    const d = ch.phase === "production" || ch.phase === "contract" ? { type: "wait" as const } : decide(state, ch);
    applyDecision(state, cfg, d);
    decisions.push(d);
  }
  return { seed, strategy: "scripted", state, decisions, stoppedReason: "done" };
}
