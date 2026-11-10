// Prestige: permanent, cumulative, milestone-driven only. Award ids prevent double payment.
// Never per week, never for finishing, never from advances. Repeat scope configurable (Open in v9.61).
import type { Config } from "./config";
import { emit } from "./events";
import type { Release, StudioState } from "./types";

type Milestone = Config["prestige"]["milestones"][number];

function awardId(m: Milestone, rel: Release, scope: string): string {
  if (scope === "career") return `career:${m.id}`;
  if (scope === "perIP") return `ip:${rel.ipId}:${m.id}`;
  return `rel:${rel.id}:${m.id}`;
}

function qualifies(m: Milestone, rel: Release): boolean {
  switch (m.kind) {
    case "allMeters":
      return Object.values(rel.meters).every((v) => v >= m.threshold);
    case "audience":
      return rel.audience >= m.threshold;
    case "critic":
      return rel.critic >= m.threshold;
    case "hallOfFame":
      return rel.hallOfFame;
    case "lifetimeGross":
      return rel.grossTotal >= m.threshold; // gross only: the advance/surplus is never revenue
    case "lifetimeViewers":
      return rel.totalViewers >= m.threshold;
    default:
      return false;
  }
}

/** Check milestones. `phase` = "scored" (quality/review kinds) or "run" (commercial kinds). Returns awards made. */
export function evaluatePrestige(state: StudioState, cfg: Config, rel: Release, phase: "scored" | "run"): { id: string; amount: number }[] {
  const reviewKinds = new Set(["allMeters", "audience", "critic", "hallOfFame"]);
  const out: { id: string; amount: number }[] = [];
  for (const m of cfg.prestige.milestones) {
    const isReview = reviewKinds.has(m.kind);
    if ((phase === "scored") !== isReview) continue;
    if (!qualifies(m, rel)) continue;
    const id = awardId(m, rel, cfg.prestige.repeatScope);
    if (state.prestigeAwards.includes(id)) continue;
    state.prestigeAwards.push(id);
    state.prestige += m.amount;
    out.push({ id, amount: m.amount });
    emit(state, "prestige", `Prestige +${m.amount}: ${m.id} (${rel.title}).`, { awardId: id, releaseId: rel.id });
  }
  return out;
}
