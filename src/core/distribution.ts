// Distributors. LOCKED: 2–3 fixed offers (absolute advance + royalty %), pick one or self-fund; no stacking
// or haggling; lifeline always covers the cheapest format's base cost; reach from distributors, small
// self-fund reach before streaming; per-distributor trust reacting to explainable outcomes.
// WORKING ASSUMPTIONS: offer formula (heat from hidden combo grades + trend + IP fans; trust factor;
// Prestige gate for who shows up), trust update formula (ROI + quality, bounded step, slow drift).
import type { Config } from "./config";
import { emit, round2 } from "./events";
import { next, range } from "./rng";
import type { Grade, Offer, PlanDecision, Release, StudioState } from "./types";

export const GRADE_VALUE: Record<Grade, number> = { A: 2, B: 1, C: 0, D: -1, F: -2 };

export function comboKey(genre: string, theme: string): string {
  return `${genre}|${theme}`;
}

export function ideaHeat(state: StudioState, cfg: Config, plan: PlanDecision, ipId: string | null): { heat: number; parts: Record<string, number> } {
  const g = state.world.comboGrades[comboKey(plan.genre, plan.theme)];
  const gradePart = cfg.distribution.heatGradeWeight * ((GRADE_VALUE[g.audience] + GRADE_VALUE[g.critic]) / 2);
  const stage = state.trends[plan.theme]?.stage ?? "none";
  const trendPart = (cfg.distribution.heatTrendWeight as Record<string, number>)[stage] ?? 0;
  const fans = ipId && state.ips[ipId] ? state.ips[ipId].fans : 0;
  const fansPart = cfg.distribution.heatFansWeight * (fans / cfg.world.marketSize);
  return { heat: round2(1 + gradePart + trendPart + fansPart), parts: { grade: round2(gradePart), trend: round2(trendPart), fans: round2(fansPart) } };
}

export function generateOffers(state: StudioState, cfg: Config, plan: PlanDecision, ipId: string | null, baseCost: number): Offer[] {
  const family = cfg.world.genres[plan.genre as keyof typeof cfg.world.genres];
  const { heat, parts } = ideaHeat(state, cfg, plan, ipId);
  const eligible = state.distributors.filter((d) => !d.lifeline && state.prestige >= d.minPrestige && d.trust >= cfg.distribution.trustShowUpMin);
  // choose 2–3 deterministically by a seeded shuffle
  const shuffled = eligible.map((d) => ({ d, k: next(state.rng, "distributors") })).sort((a, b) => a.k - b.k).map((x) => x.d);
  const count = Math.min(shuffled.length, cfg.distribution.offersMin + Math.floor(next(state.rng, "distributors") * (cfg.distribution.offersMax - cfg.distribution.offersMin + 1)));
  const offers: Offer[] = shuffled.slice(0, count).map((d) => {
    const fav = d.favoredFamilies.includes(family) ? 1.1 : 1.0;
    const trustFactor = cfg.distribution.trustOfferFactorBase + cfg.distribution.trustOfferFactorPerPoint * d.trust;
    const jitter = 1 + range(state.rng, "distributors", -cfg.distribution.offerJitter, cfg.distribution.offerJitter);
    const advance = Math.round((baseCost * d.generosity * heat * fav * trustFactor * jitter) / 1000) * 1000;
    const royalty = round2(Math.max(0.01, d.royaltyBase * (1.15 - 0.15 * heat) * (1.1 - 0.04 * d.trust)));
    return {
      distributorId: d.id,
      advance,
      royalty,
      reach: round2(d.reach * fav),
      lifeline: false,
      reasons: [`heat ${heat} (grade ${parts.grade}, trend ${parts.trend}, fans ${parts.fans})`, `trust ${d.trust.toFixed(2)} → x${trustFactor.toFixed(2)}`, fav > 1 ? "favored genre family" : "neutral genre family"],
    };
  });
  // LOCKED: lifeline — at least one offer covers the cheapest format's base cost (movie is the only format modeled).
  const cheapestBase = cfg.production.movie.baseCost;
  if (!offers.some((o) => o.advance >= cheapestBase)) {
    const l = cfg.distribution.lifeline;
    offers.push({ distributorId: l.id, advance: Math.ceil((cheapestBase * l.advanceOverBase) / 1000) * 1000, royalty: l.royalty, reach: l.reach, lifeline: true, reasons: ["lifeline offer: covers the base cost on poor terms"] });
    emit(state, "lifeline_offer", `${l.name} offers a lifeline deal (poor terms) so the studio can always make its cheapest format.`);
  }
  return offers;
}

/**
 * Trust update when a backed release's run ends. Cause = distributor's actual royalty return vs. its advance,
 * plus reception. Bounded step so one flop doesn't erase a long relationship.
 */
export function updateTrust(state: StudioState, cfg: Config, rel: Release): Record<string, number | string> | null {
  if (!rel.distributorId) return null;
  const d = state.distributors.find((x) => x.id === rel.distributorId);
  if (!d || d.lifeline) return null;
  // Gate 4 candidate: the distributor's stake is its own advertising spend (no advance exists)
  const stake = rel.financing === "late_distribution" ? rel.adSpend ?? 0 : rel.advance;
  if (rel.financing === "late_distribution" && stake <= 0) return null;
  const roi = stake > 0 ? rel.distributorTake / stake : 1;
  const roiSignal = Math.max(-1, Math.min(1, roi - 1));
  const qualitySignal = Math.max(-1, Math.min(1, (rel.avgScore - 5.5) / 3));
  const raw = cfg.distribution.trustRoiWeight * roiSignal + cfg.distribution.trustQualityWeight * qualitySignal;
  const step = round2(Math.max(-cfg.distribution.trustMaxStep, Math.min(cfg.distribution.trustMaxStep, raw)));
  const before = d.trust;
  d.trust = Math.max(cfg.distribution.trustMin, Math.min(cfg.distribution.trustMax, round2(d.trust + step)));
  const reason =
    roi < 1
      ? `${d.name} earned back ${(roi * 100).toFixed(0)}% of its $${Math.round(stake).toLocaleString()} ${rel.financing ? "ad spend" : "advance"} on ${rel.title}${rel.avgScore < 5 ? " and reviews were poor" : ""}`
      : `${d.name} earned ${(roi * 100).toFixed(0)}% of its ${rel.financing ? "ad spend" : "advance"} back on ${rel.title}${rel.avgScore >= 7 ? " with strong reviews" : ""}`;
  emit(state, "trust", `${reason}. Trust ${before.toFixed(2)} → ${d.trust.toFixed(2)}.`, { distributorId: d.id, roi: round2(roi), step });
  return { distributorId: d.id, roi: round2(roi), qualitySignal: round2(qualitySignal), step, before, after: d.trust, reason };
}

export function driftTrust(state: StudioState, cfg: Config): void {
  const perWeek = cfg.distribution.trustDriftPerYear / cfg.time.weeksPerYear;
  for (const d of state.distributors) {
    const target = cfg.distribution.trustStart;
    if (d.trust < target) d.trust = Math.min(target, d.trust + perWeek);
    else if (d.trust > target) d.trust = Math.max(target, d.trust - perWeek * 0.25);
  }
}
