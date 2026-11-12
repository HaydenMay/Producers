// Stars. LOCKED (v9.61): skills by genre family; Level sets a TOTAL point budget (no master of all
// trades; top budget < families*100); hidden shapes never shown; price = Fame fee + Prestige premium -
// relationship discount (level/skill never raise price); pre-display affordability with a free Level 0
// fallback; callback catalog; relationship down on flop-hurts-Fame or recast (new season/direct sequel).
import type { Config } from "./config";
import { emit, newId, round2 } from "./events";
import { int, next, range, weighted, pick } from "./rng";
import { randomName } from "./staff";
import type { Project, Release, Star, StarCard, StudioState } from "./types";
import { formatExperience } from "./progression";
import { formatOf } from "./formats";
import { addByWeights, drawFromPool, generateFocusedFallback, levelUpGrowth, originalLead, poolEnabled, updateCatalogUnlock, type Tier } from "./talent";

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

/** The one Star fee formula (PROD-053): Fame fee + Prestige premium − relationship discount. Unrounded parts.
 *  Shared by priceStar() and the planning cost estimate so the two can't drift apart (audit 2026-11-12). */
export function starFee(fame: number, prestige: number, relationship: number, cfg: Config): { fameFee: number; prestigePremium: number; relationshipDiscount: number; price: number } {
  const fameFee = cfg.stars.feeBase + cfg.stars.feePerFame * Math.pow(fame, cfg.stars.fameExponent);
  const prestigeShrink = 1 - prestige / (prestige + cfg.stars.prestigeHalf);
  const prestigePremium = fameFee * cfg.stars.prestigePremiumMax * (fame / 100) * prestigeShrink;
  const relationshipDiscount = fameFee * cfg.stars.relationshipDiscountPerStar * Math.max(0, relationship - 1);
  return { fameFee, prestigePremium, relationshipDiscount, price: Math.max(0, fameFee + prestigePremium - relationshipDiscount) };
}

export function priceStar(star: Star, state: StudioState, cfg: Config): StarCard["breakdown"] & { price: number } {
  const f = starFee(star.fame, state.prestige, star.relationship, cfg);
  const price = Math.max(0, round2(f.fameFee + f.prestigePremium - f.relationshipDiscount));
  return { fameFee: round2(f.fameFee), prestigePremium: round2(f.prestigePremium), relationshipDiscount: round2(f.relationshipDiscount), price };
}

/**
 * Build the 40% audition list. Affordability is validated BEFORE anything is shown: if no normal card is
 * affordable, one card is replaced by a free Level 0 Newcomer (price exactly $0).
 */
export function buildAuditions(state: StudioState, cfg: Config, project: Project, funds: number): StarCard[] {
  if (poolEnabled(cfg)) return buildPoolAuditions(state, cfg, project, funds);
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

const cardFor = (state: StudioState, cfg: Config, s: Star, source: StarCard["source"], funds: number): StarCard => {
  const p = priceStar(s, state, cfg);
  return { starId: s.id, price: p.price, breakdown: { fameFee: p.fameFee, prestigePremium: p.prestigePremium, relationshipDiscount: p.relationshipDiscount }, source, affordable: p.price <= funds };
};

/**
 * Stars rework (PROD-213/216/218): 4–5 auditions PULLED from the persistent pool by tier, the catalog (once
 * unlocked) with "perfect for this role" flags, and the established lead as an extra card on sequels/new seasons.
 */
function buildPoolAuditions(state: StudioState, cfg: Config, project: Project, funds: number): StarCard[] {
  const family = cfg.world.genres[project.genre as keyof typeof cfg.world.genres];
  const n = cfg.stars.auditionCount;
  const tiers = (["newcomer", "mid", "mid", "big", n >= 5 ? "newcomer" : "mid"] as Tier[]).slice(0, n);
  const fw = familyWeights(cfg, project.genre);
  const mainFamilies = Object.keys(fw).filter((f) => fw[f] >= 0.5); // audition bias: Stars whose best family is a main one
  const unlocked = updateCatalogUnlock(state, cfg);
  const lead = originalLead(state, project);
  const used = new Set<string>(lead ? [lead.id] : []);
  if (unlocked) for (const id of state.hiredStarIds) used.add(id); // catalog Stars appear as catalog cards
  const cards: StarCard[] = [];
  for (const tier of tiers) {
    const s = drawFromPool(state, cfg, tier, mainFamilies, used);
    used.add(s.id);
    cards.push(cardFor(state, cfg, s, "audition", funds));
  }
  if (unlocked) {
    const cat = state.hiredStarIds.map((id) => state.stars[id]).filter((s) => !s.retired && s.id !== lead?.id);
    const pc = cfg.stars.pool.catalog;
    const top = new Set(
      [...cat]
        .filter((s) => starFit(s, project.genre, cfg) >= pc.perfectFitMin)
        .sort((a, b) => starFit(b, project.genre, cfg) - starFit(a, project.genre, cfg))
        .slice(0, pc.perfectFitTop)
        .map((s) => s.id),
    );
    for (const s of cat) cards.push({ ...cardFor(state, cfg, s, "callback", funds), ...(top.has(s.id) ? { perfectFit: true } : {}) });
  }
  if (lead) cards.push(cardFor(state, cfg, lead, "original_lead", funds));
  if (!cards.some((c) => c.affordable)) {
    const fb = generateFocusedFallback(state, cfg, family, familyWeights(cfg, project.genre));
    const card: StarCard = { starId: fb.id, price: 0, breakdown: { fameFee: 0, prestigePremium: 0, relationshipDiscount: 0 }, source: "audition", affordable: true, fallbackInserted: true };
    cards[cards.findIndex((c) => c.source === "audition")] = card;
    emit(state, "fallback_star", `No affordable Star in the lineup; a free newcomer suited to ${family} roles (${fb.name}) was included before auditions were shown.`, { starId: fb.id, funds });
  }
  return cards;
}

/**
 * Family weights for a genre. Legacy: one family (weight 1). With `world.genreFamilyWeights` (designer
 * 2026-11-11): each genre leans on TWO families, e.g. RomCom = 50% Funny + 50% Romantic.
 */
export function familyWeights(cfg: Config, genre: string): Record<string, number> {
  const blend = (cfg.world as unknown as { genreFamilyWeights?: Record<string, Record<string, number>> | null }).genreFamilyWeights?.[genre];
  return blend ?? { [cfg.world.genres[genre as keyof typeof cfg.world.genres]]: 1 };
}

/** Star fit = weighted genre-FAMILY skill. Themes never matter. Fame never matters. */
export function starFit(star: Star, genre: string, cfg: Config): number {
  const w = familyWeights(cfg, genre);
  const keys = Object.keys(w);
  if (keys.length === 1) return star.skills[keys[0]] ?? 0; // legacy path, byte-identical
  return Math.round(keys.reduce((a, f) => a + w[f] * (star.skills[f] ?? 0), 0) * 100) / 100;
}

/** After a release finishes: Fame change (causal), skill growth within budget, level, relationship. */
export function applyStarCareer(state: StudioState, cfg: Config, star: Star, rel: Release): Record<string, number | string> {
  const seen = rel.uniqueViewers ?? rel.totalViewers; // TV/limited: distinct people, not viewer-episodes
  const exposure = seen / (seen + cfg.stars.fameExposureHalf);
  const fameDelta = round2(cfg.stars.fameGainScale * ((rel.avgScore - 5) / 5) * exposure);
  const oldFame = star.fame;
  star.fame = Math.max(0, Math.min(100, round2(star.fame + fameDelta)));
  // level (a movie counts for more experience than a short series: production.formatExperience)
  const xpW = formatExperience(cfg, formatOf(rel));
  star.levelXp += xpW;
  let leveled = false;
  if (star.levelXp >= cfg.stars.projectsPerLevel && star.level < cfg.stars.maxLevel) {
    star.level += 1;
    star.levelXp = 0;
    leveled = true;
    if (poolEnabled(cfg)) levelUpGrowth(star, cfg, cfg.stars.pool.growth.levelUpPoints); // PROD-217
  }
  // growth in the worked family (or families, by the genre's weights), within the budget
  const fw = familyWeights(cfg, rel.genre);
  let grow = 0;
  if (Object.keys(fw).length === 1) {
    const family = Object.keys(fw)[0];
    const room = budgetFor(star.level, cfg) - skillTotal(star);
    grow = Math.max(0, Math.min(cfg.stars.growthPerProject * xpW, room, 100 - (star.skills[family] ?? 0)));
    star.skills[family] = (star.skills[family] ?? 0) + grow;
  } else grow = addByWeights(star, fw, cfg.stars.growthPerProject * xpW, budgetFor(star.level, cfg) - skillTotal(star));
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
  if (project.ipRelation !== "sequel" && project.ipRelation !== "season") return;
  const ip = state.ips[project.ipId];
  const prev = ip?.establishedStarId;
  if (prev && prev !== chosenStarId && state.stars[prev] && !state.stars[prev].retired) {
    const s = state.stars[prev];
    s.relationship = Math.max(0, round2(s.relationship - cfg.stars.relRecast));
    emit(state, "star_recast", `${s.name} was replaced in their established role in ${ip.name}; relationship -${cfg.stars.relRecast}.`, { starId: prev });
  }
}
