import { baselineConfig } from "../core/config";
import { applyDecision, createStudio, getChoices } from "../core/simulation";
import type { Decision, PlanDecision } from "../core/types";

/** The core owns every rule; this object only exposes prototype actions. */
export class PrototypeGame {
  private readonly config = baselineConfig();
  state = createStudio(42, this.config);
  get choices() { return getChoices(this.state, this.config); }
  reset() { this.state = createStudio(42, this.config); }
  decide(decision: Decision) { applyDecision(this.state, this.config, decision); }
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
