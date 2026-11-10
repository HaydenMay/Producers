// Stars. LOCKED (v9.61): skills by genre family; Level sets a TOTAL point budget (no master of all
// trades; top budget < families*100); hidden shapes never shown; price = Fame fee + Prestige premium -
// relationship discount (level/skill never raise price); pre-display affordability with a free Level 0
// fallback; callback catalog; relationship down on flop-hurts-Fame or recast (new season/direct sequel).
import type { Config } from "./config";
import { emit, newId, round2 } from "./events";
import { int, next, range, weighted, pick } from "./rng";
import { randomName } from "./staff";
import type { Project, Release, Star, StarCard, StudioState } from "./types";

export function budgetFor(level: number, cfg: Config): number {
  return cfg.stars.budgetBase + cfg.stars.budgetPerLevel * level;
}

export function skillTotal(star: Star): number {
  return Object.values(star.skills).reduce((a, b) => a + b, 0);
}

function spread(state: StudioState, cfg: Config, total: number, shape: Star["hiddenShape"], focus: string): Record<string, number> {
  const fams = cfg.world.families;
  const w: Record<string, number> = {};
  const others = fams.filter((f) => f !== focus);
  const second = pick(state.rng, "talent", others);
  for (const f of fams) w[f] = 0.6 + next(state.rng, "talent") * 0.8; // jitter
  if (shape === "specialist") w[focus] *= 5;
  if (shape === "twoFocus") {
    w[focus] *= 3;
    w[second] *= 3;
  }
  const sum = Object.values(w).reduce((a, b) => a + b, 0);
  const out: Record<string, number> = {};
  for (const f of fams) out[f] = Math.min(100, Math.floor((w[f] / sum) * total));
  return out;
}

export function generateStar(state: StudioState, cfg: Config, tier: "newcomer" | "mid" | "big", focusFamily: string | null): Star {
  const t = cfg.stars.tiers[tier];
  let level = int(state.rng, "talent", t.level[0], t.level[1]);
  const fame = int(state.rng, "talent", t.fame[0], t.fame[1]);
  if (tier === "newcomer" && next(state.rng, "talent") < cfg.stars.hiddenGemChance) {
    level = int(state.rng, "talent", cfg.stars.hiddenGemLevel[0], cfg.stars.hiddenGemLevel[1]); // rare hidden gem
  }
  const shape = weighted(state.rng, "talent", cfg.stars.shapeWeights as Record<"balanced" | "twoFocus" | "specialist", number>);
  const focus = focusFamily && next(state.rng, "talent") < cfg.stars.genreFitBias ? focusFamily : pick(state.rng, "talent", cfg.world.families);
  const total = Math.floor(budgetFor(level, cfg) * range(state.rng, "talent", 0.85, 1.0));
  const star: Star = {
    id: newId(state, "star"),
    name: randomName(state),
    level,
    levelXp: 0,
    skills: spread(state, cfg, total, shape, focus),
    fame,
    relationship: cfg.stars.relationshipStart,
    credits: [],
    hiddenShape: shape,
    fallback: false,
  };
  state.stars[star.id] = star;
  return star;
}

export function generateFallbackStar(state: StudioState, cfg: Config, focusFamily: string): Star {
  const star: Star = {
    id: newId(state, "star"),
    name: randomName(state),
    level: 0,
    levelXp: 0,
    skills: spread(state, cfg, cfg.stars.fallbackBudget, "balanced", focusFamily),
    fame: 0,
    relationship: cfg.stars.relationshipStart,
    credits: [],
    hiddenShape: "fallback",
    fallback: true,
  };
  state.stars[star.id] = star;
  return star;
}

export function priceStar(star: Star, state: StudioState, cfg: Config): StarCard["breakdown"] & { price: number } {
  const fameFee = cfg.stars.feeBase + cfg.stars.feePerFame * Math.pow(star.fame, cfg.stars.fameExponent);
  const prestigeShrink = 1 - state.prestige / (state.prestige + cfg.stars.prestigeHalf);
  const prestigePremium = fameFee * cfg.stars.prestigePremiumMax * (star.fame / 100) * prestigeShrink;
  const relationshipDiscount = fameFee * cfg.stars.relationshipDiscountPerStar * Math.max(0, star.relationship - 1);
  const price = Math.max(0, round2(fameFee + prestigePremium - relationshipDiscount));
  return { fameFee: round2(fameFee), prestigePremium: round2(prestigePremium), relationshipDiscount: round2(relationshipDiscount), price };
}

/**
 * Build the 40% audition list. Affordability is validated BEFORE anything is shown: if no normal card is
 * affordable, one card is replaced by a free Level 0 Newcomer (price exactly $0).
 */
export function buildAuditions(state: StudioState, cfg: Config, project: Project, funds: number): StarCard[] {
  const family = cfg.world.genres[project.genre as keyof typeof cfg.world.genres];
  const n = cfg.stars.auditionCount;
  const tiers: ("newcomer" | "mid" | "big")[] = ["newcomer", "mid", "mid", "big", n >= 5 ? "newcomer" : "mid"].slice(0, n) as ("newcomer" | "mid" | "big")[];
  const cards: StarCard[] = tiers.map((tier) => {
    const s = generateStar(state, cfg, tier, family);
    const p = priceStar(s, state, cfg);
    return { starId: s.id, price: p.price, breakdown: { fameFee: p.fameFee, prestigePremium: p.prestigePremium, relationshipDiscount: p.relationshipDiscount }, source: "audition", affordable: p.price <= funds };
  });
  for (const id of state.hiredStarIds) {
    const s = state.stars[id];
    const p = priceStar(s, state, cfg);
    cards.push({ starId: id, price: p.price, breakdown: { fameFee: p.fameFee, prestigePremium: p.prestigePremium, relationshipDiscount: p.relationshipDiscount }, source: "callback", affordable: p.price <= funds });
  }
  const auditionAffordable = cards.some((c) => c.affordable);
  if (!auditionAffordable) {
    const fb = generateFallbackStar(state, cfg, family);
    const card: StarCard = { starId: fb.id, price: 0, breakdown: { fameFee: 0, prestigePremium: 0, relationshipDiscount: 0 }, source: "audition", affordable: true, fallbackInserted: true };
    // replace the first audition card (keep 4–5 shown)
    const idx = cards.findIndex((c) => c.source === "audition");
    cards[idx] = card;
    emit(state, "fallback_star", `No affordable Star in the lineup; a free Level 0 Newcomer (${fb.name}) was included before auditions were shown.`, { starId: fb.id, funds });
  }
  return cards;
}

/** Star Filming contribution comes from genre-FAMILY skill only. Themes never matter. Fame never matters. */
export function starFit(star: Star, genre: string, cfg: Config): number {
  const family = cfg.world.genres[genre as keyof typeof cfg.world.genres];
  return star.skills[family] ?? 0;
}

/** After a release finishes: Fame change (causal), skill growth within budget, level, relationship. */
export function applyStarCareer(state: StudioState, cfg: Config, star: Star, rel: Release): Record<string, number | string> {
  const exposure = rel.totalViewers / (rel.totalViewers + cfg.stars.fameExposureHalf);
  const fameDelta = round2(cfg.stars.fameGainScale * ((rel.avgScore - 5) / 5) * exposure);
  const oldFame = star.fame;
  star.fame = Math.max(0, Math.min(100, round2(star.fame + fameDelta)));
  // level
  star.levelXp += 1;
  let leveled = false;
  if (star.levelXp >= cfg.stars.projectsPerLevel && star.level < cfg.stars.maxLevel) {
    star.level += 1;
    star.levelXp = 0;
    leveled = true;
  }
  // growth in the worked family, within the budget
  const family = cfg.world.genres[rel.genre as keyof typeof cfg.world.genres];
  const room = budgetFor(star.level, cfg) - skillTotal(star);
  const grow = Math.max(0, Math.min(cfg.stars.growthPerProject, room, 100 - (star.skills[family] ?? 0)));
  star.skills[family] = (star.skills[family] ?? 0) + grow;
  // relationship (causal reasons)
  let relDelta = cfg.stars.relPerProject;
  const reasons = ["worked together (+)"];
  if (star.fame > oldFame) {
    relDelta += cfg.stars.relCareerBoost;
    reasons.push("project boosted their career (+)");
  } else if (star.fame < oldFame) {
    relDelta -= cfg.stars.relCareerHurt;
    reasons.push("project hurt their career: Fame fell (-)");
  }
  star.relationship = Math.max(0, Math.min(5, round2(star.relationship + relDelta)));
  emit(state, "star_career", `${star.name}: Fame ${oldFame.toFixed(1)} → ${star.fame.toFixed(1)}, relationship ${relDelta >= 0 ? "+" : ""}${relDelta.toFixed(2)} (${reasons.join("; ")})${leveled ? `, reached Level ${star.level}` : ""}.`, { starId: star.id, fameDelta, relDelta, grow });
  return { fameDelta, relDelta: round2(relDelta), grow, level: star.level, reasons: reasons.join("; ") };
}

/** LOCKED v9.61: replacing the established lead for a new season / DIRECT SEQUEL lowers relationship. Reboots: Open (not penalized). */
export function applyRecastPenalty(state: StudioState, cfg: Config, project: Project, chosenStarId: string): void {
  if (project.ipRelation !== "sequel") return;
  const ip = state.ips[project.ipId];
  const prev = ip?.establishedStarId;
  if (prev && prev !== chosenStarId && state.stars[prev]) {
    const s = state.stars[prev];
    s.relationship = Math.max(0, round2(s.relationship - cfg.stars.relRecast));
    emit(state, "star_recast", `${s.name} was replaced in their established role in ${ip.name}; relationship -${cfg.stars.relRecast}.`, { starId: prev });
  }
}
