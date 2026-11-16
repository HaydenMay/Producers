import { baselineConfig, type Config } from "../core/config";
import { applyDecision, createStudio, getChoices } from "../core/simulation";
import type { Decision, PlanDecision } from "../core/types";

/** A fresh world seed: 1 .. 2^31-1. */
export function randomSeed(): number {
  const c = (globalThis as { crypto?: { getRandomValues?: (a: Uint32Array) => Uint32Array } }).crypto;
  const n = c?.getRandomValues ? c.getRandomValues(new Uint32Array(1))[0] : Math.floor(Math.random() * 2 ** 32);
  return (n % 2147483646) + 1;
}

/** The core owns every rule; this object only exposes prototype actions. */
export class PrototypeGame {
  config: Config;
  state;
  constructor(config: Config = baselineConfig(), seed = 42) { this.config=config; this.state=createStudio(seed,config); }
  actions: Decision[] = [];
  get choices() { return getChoices(this.state, this.config); }
  /** A new studio gets its own world (2026-11-15: every game used to be seed 42). Pass a seed to reproduce one. */
  reset(seed: number = randomSeed()) { this.state = createStudio(seed, this.config); this.actions = []; }
  decide(decision: Decision) { applyDecision(this.state, this.config, decision); this.actions.push(structuredClone(decision)); }
  startMovie() {
    const plan = this.choices.options.find((d): d is PlanDecision => d.type === "plan" && d.ipRelation === "new" && !d.format);
    if (!plan) throw new Error("No new movie is available.");
    this.decide(plan);
  }
  advance() { this.decide({ type: "wait" }); }
  nextDecision() {
    for (let i = 0; i < 100 && this.choices.phase === "production"; i++) this.advance();
  }
}
