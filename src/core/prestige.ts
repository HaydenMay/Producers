// Prestige: permanent, cumulative, milestone-driven only. Award ids prevent double payment.
// Never per week, never for finishing, never from advances.
// Scope (Open in v9.61) is set per milestone (`scope`), or globally via `repeatScope`:
//   release = once per qualifying release · ip = once per IP · career = once per studio career.
import type { Config } from "./config";
import { emit } from "./events";
import type { Release, StudioState } from "./types";

export type MilestoneScope = "release" | "ip" | "career";
export interface Milestone {
  id: string;
  kind: string;
  threshold: number;
  amount: number;
  scope?: MilestoneScope;
  /** TV achievements (PROD-140): minimum season number reached */
  minSeason?: number;
}

const GLOBAL_SCOPE: Record<string, MilestoneScope> = { perRelease: "release", perIP: "ip", career: "career" };

export function scopeOf(m: Milestone, cfg: Config): MilestoneScope {
  if (m.scope) return m.scope;
  const g = GLOBAL_SCOPE[cfg.prestige.repeatScope];
  if (!g) throw new Error(`Milestone ${m.id} has no scope and repeatScope '${cfg.prestige.repeatScope}' is not perRelease|perIP|career`);
  return g;
}

function awardId(m: Milestone, rel: Release, scope: MilestoneScope): string {
  if (scope === "career") return `career:${m.id}`;
  if (scope === "ip") return `ip:${rel.ipId}:${m.id}`;
  return `rel:${rel.id}:${m.id}`;
}

const REVIEW_KINDS = new Set(["allMeters", "audience", "critic", "hallOfFame", "tvSeasonAvg", "tvShowAvg", "tvShowAllAtLeast"]);
const tvSeasons = (state: StudioState, rel: Release) => state.releases.filter((r) => r.ipId === rel.ipId && r.seasonNumber !== undefined && r.releaseWeek <= rel.releaseWeek);

function qualifies(m: Milestone, rel: Release, state: StudioState): boolean {
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
      return rel.grossTotal >= m.threshold; // gross only: advances/surplus are never revenue
    case "lifetimeViewers":
      return (rel.uniqueViewers ?? rel.totalViewers) >= m.threshold; // distinct people: extra episodes never multiply this

    case "ipLifetimeGross":
      return state.releases.filter((r) => r.ipId === rel.ipId).reduce((a, r) => a + r.grossTotal, 0) >= m.threshold;
    case "ipLifetimeViewers":
      return state.releases.filter((r) => r.ipId === rel.ipId).reduce((a, r) => a + (r.uniqueViewers ?? r.totalViewers), 0) >= m.threshold;
    // TV achievements (designer 2026-11-11, PROD-140): earned by quality across seasons, never by airtime
    case "tvSeasonAvg":
      return rel.seasonNumber !== undefined && rel.avgScore >= m.threshold;
    case "tvShowAvg": {
      if ((rel.seasonNumber ?? 0) < (m.minSeason ?? 1)) return false;
      const ss = tvSeasons(state, rel);
      return ss.reduce((a, r) => a + r.avgScore, 0) / ss.length >= m.threshold;
    }
    case "tvShowAllAtLeast":
      return (rel.seasonNumber ?? 0) >= (m.minSeason ?? 1) && tvSeasons(state, rel).every((r) => r.avgScore >= m.threshold);
    default:
      throw new Error(`Unknown milestone kind ${m.kind}`);
  }
}

/** `phase` = "scored" (quality/review kinds, checked once at release) or "run" (commercial kinds, checked weekly, pay once when crossed). */
export function evaluatePrestige(state: StudioState, cfg: Config, rel: Release, phase: "scored" | "run"): { id: string; amount: number }[] {
  const out: { id: string; amount: number }[] = [];
  const tvm = ((cfg.prestige as { tvMilestones?: Milestone[] }).tvMilestones ?? []) as Milestone[];
  for (const m of [...(cfg.prestige.milestones as Milestone[]), ...tvm]) {
    const isReview = REVIEW_KINDS.has(m.kind);
    if ((phase === "scored") !== isReview) continue;
    if (!qualifies(m, rel, state)) continue;
    const id = awardId(m, rel, scopeOf(m, cfg));
    if (state.prestigeAwards.includes(id)) continue;
    state.prestigeAwards.push(id);
    state.prestige += m.amount;
    out.push({ id, amount: m.amount });
    emit(state, "prestige", `Prestige +${m.amount}: ${m.id} (${rel.title}).`, { awardId: id, releaseId: rel.id, milestone: m.id, amount: m.amount });
  }
  return out;
}
