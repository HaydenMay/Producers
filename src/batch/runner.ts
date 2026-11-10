import type { Config } from "../core/config";
import { makeAgentRng } from "../core/rng";
import { advanceWeek, applyDecision, createStudio, getChoices } from "../core/simulation";
import type { Decision, StudioState } from "../core/types";
import { STRATEGIES, type AgentCtx } from "../agents/strategies";

export interface CareerOptions {
  productions: number;
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
  const rng = makeAgentRng(seed, strategyId);
  const decisions: Decision[] = [];
  const maxWeeks = opts.maxWeeks ?? opts.productions * 40 + 104;
  const ctx: AgentCtx = { reinvestsThisStop: 0 };
  let stoppedReason = "productions reached";
  while (true) {
    if (state.week >= maxWeeks) {
      stoppedReason = "maxWeeks";
      break;
    }
    const done = state.counters.productionsCompleted >= opts.productions && !state.project && !state.pendingOffers;
    if (done) {
      const anyActive = state.releases.some((r) => r.active);
      if (!opts.drain || !anyActive) break;
      advanceWeek(state, cfg);
      decisions.push({ type: "wait" });
      continue;
    }
    const ch = getChoices(state, cfg);
    let d: Decision;
    if (ch.phase === "production") d = { type: "wait" };
    else d = strat.decide(state, cfg, ch, rng, ctx);
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
    const done = state.counters.productionsCompleted >= opts.productions && !state.project && !state.pendingOffers;
    if (done) {
      if (!opts.drain || !state.releases.some((r) => r.active)) break;
      advanceWeek(state, cfg);
      decisions.push({ type: "wait" });
      continue;
    }
    const ch = getChoices(state, cfg);
    const d = ch.phase === "production" ? { type: "wait" as const } : decide(state, ch);
    applyDecision(state, cfg, d);
    decisions.push(d);
  }
  return { seed, strategy: "scripted", state, decisions, stoppedReason: "done" };
}
