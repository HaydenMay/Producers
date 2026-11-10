// Named policies. They only use information a player can see: combo book (revealed grades), visible
// trends, offers on the table, audition cards (exact skills, Fame, price), IP fans, own cash.
// They never read state.world.comboGrades (hidden) or future RNG.
import type { Config } from "../core/config";
import { GRADE_VALUE, comboKey } from "../core/distribution";
import { starFit } from "../core/stars";
import type { Choices, Decision, Offer, PlanDecision, StarCard, StudioState } from "../core/types";

export interface Strategy {
  id: string;
  description: string;
  decide(state: StudioState, cfg: Config, choices: Choices, rng: () => number, ctx: AgentCtx): Decision;
}
export interface AgentCtx {
  reinvestsThisStop: number;
}

const TREND_VALUE: Record<string, number> = { none: 0, rising: 0.4, hot: 0.8, saturated: -0.3, cooled: 0 };

function knownValue(state: StudioState, genre: string, theme: string): number | null {
  const k = state.comboBook[comboKey(genre, theme)];
  if (!k) return null;
  return (GRADE_VALUE[k.audience] + GRADE_VALUE[k.critic]) / 2;
}

function planScore(state: StudioState, p: PlanDecision, explore: number): number {
  const kv = knownValue(state, p.genre, p.theme);
  const trend = TREND_VALUE[state.trends[p.theme]?.stage ?? "none"];
  const repeats = state.comboHistory[comboKey(p.genre, p.theme)] ?? 0;
  return (kv ?? explore) + trend - 0.35 * repeats;
}

function newPlans(choices: Choices): PlanDecision[] {
  return choices.options.filter((o): o is PlanDecision => o.type === "plan" && o.ipRelation === "new");
}

function bestBy<T>(arr: T[], f: (x: T) => number, rng: () => number): T {
  let best = arr[0];
  let bv = -Infinity;
  for (const x of arr) {
    const v = f(x) + rng() * 1e-6; // deterministic tie-break
    if (v > bv) {
      bv = v;
      best = x;
    }
  }
  return best;
}

function offerDecision(choices: Choices, pick: (o: Offer) => number, rng: () => number, allowSelf: boolean, selfValue?: number): Decision {
  const offers = choices.offers ?? [];
  const selfAllowed = allowSelf && choices.options.some((o) => o.type === "choose_offer" && o.distributorId === null);
  const best = bestBy(offers, pick, rng);
  if (selfAllowed && selfValue !== undefined && selfValue > pick(best)) return { type: "choose_offer", distributorId: null };
  return { type: "choose_offer", distributorId: best.distributorId };
}

function affordableCards(choices: Choices): StarCard[] {
  return (choices.auditionCards ?? []).filter((c) => c.affordable);
}

function campaign(choices: Choices, prefs: string[]): Decision {
  for (const id of prefs) {
    const c = choices.campaigns?.find((x) => x.id === id);
    if (c?.affordable) return { type: "market", campaign: id };
  }
  return { type: "market", campaign: "none" };
}

interface ReinvestRules {
  hireAbove?: number;
  /** Pre-Gate-2.5 strategy heuristic cutoff, used only when cfg.agents.legacyHeuristicStaffCaps is true. */
  legacyMaxStaff?: number;
  /** Hiring added in Gate 2.5; ignored in legacy mode (these strategies never hired before). */
  newHiring?: boolean;
  /** Buy a studio capacity upgrade when cash exceeds its cost by this buffer (never in legacy mode). */
  upgradeBuffer?: number;
  trainAbove?: number;
  adsAbove?: number;
  researchAbove?: number;
}

function reinvest(state: StudioState, cfg: Config, choices: Choices, ctx: AgentCtx, rules: ReinvestRules): Decision | null {
  if (ctx.reinvestsThisStop >= 2) return null;
  const has = (t: string) => choices.options.some((o) => o.type === t);
  const legacy = cfg.agents.legacyHeuristicStaffCaps;
  // The ENGINE enforces the studio cap (hire only appears in choices when below it). Strategy cutoffs are heuristics.
  const wantsHire = rules.hireAbove !== undefined && (!legacy || !rules.newHiring) && state.cash > rules.hireAbove && (!legacy || state.staff.length < (rules.legacyMaxStaff ?? 4));
  if (wantsHire && has("hire")) return { type: "hire" };
  if (!legacy && rules.upgradeBuffer !== undefined && has("upgrade_studio") && state.staff.length >= state.maxStaff) {
    const up = choices.options.find((o) => o.type === "upgrade_studio");
    if (up && state.cash > upgradeCost(state, cfg) + rules.upgradeBuffer) return up;
  }
  if (rules.trainAbove !== undefined && has("train") && state.cash > rules.trainAbove) {
    const weakest = [...state.staff].sort((a, b) => Object.values(a.stats).reduce((x, y) => x + y, 0) - Object.values(b.stats).reduce((x, y) => x + y, 0))[0];
    return { type: "train", staffId: weakest.id };
  }
  if (rules.adsAbove !== undefined && has("studio_ads") && state.cash > rules.adsAbove && state.studioBuzz < 0.1) return { type: "studio_ads" };
  if (rules.researchAbove !== undefined && state.cash > rules.researchAbove) {
    const r = choices.options.find((o) => o.type === "research_theme");
    if (r) return r;
  }
  return null;
}

function upgradeCost(state: StudioState, cfg: Config): number {
  return cfg.staffCapacity.upgradeCosts[state.capacityLevel] ?? Infinity;
}

const G = 220000; // agents' rough expectation of a full-reach run's gross (visible heuristic, not hidden info)

function balancedStar(state: StudioState, cfg: Config, choices: Choices, rng: () => number): Decision {
  const genre = state.project!.genre;
  const c = bestBy(affordableCards(choices), (c) => starFit(state.stars[c.starId], genre, cfg) + 0.3 * state.stars[c.starId].fame - c.price / 1500, rng);
  return { type: "cast", starId: c.starId };
}

export const STRATEGIES: Record<string, Strategy> = {
  balanced: {
    id: "balanced",
    description: "Mixes financing, sensible casting/marketing and reinvestment",
    decide(state, cfg, ch, rng, ctx) {
      switch (ch.phase) {
        case "planning": {
          const r = reinvest(state, cfg, ch, ctx, { hireAbove: 140000, legacyMaxStaff: 4, upgradeBuffer: 150000, trainAbove: 80000 });
          if (r) return r;
          const seq = franchiseSequel(state, ch, 7.0);
          if (seq && rng() < 0.3) return seq;
          return bestBy(newPlans(ch), (p) => planScore(state, p, 0.3) + (rng() < 0.25 ? 1 : 0), rng);
        }
        case "pitch":
          return offerDecision(ch, (o) => o.advance + (1 - o.royalty) * o.reach * G, rng, false);
        case "casting":
          return balancedStar(state, cfg, ch, rng);
        case "marketing":
          return campaign(ch, ["medium", "small"]);
        default:
          return { type: "wait" };
      }
    },
  },
  "quality-first": {
    id: "quality-first",
    description: "Prioritizes production quality and durable studio development",
    decide(state, cfg, ch, rng, ctx) {
      switch (ch.phase) {
        case "planning": {
          const r = reinvest(state, cfg, ch, ctx, { trainAbove: 45000, hireAbove: 110000, legacyMaxStaff: 5, upgradeBuffer: 100000 });
          if (r) return r;
          return bestBy(newPlans(ch), (p) => planScore(state, p, 0.1), rng);
        }
        case "pitch":
          return offerDecision(ch, (o) => o.advance + (1 - o.royalty) * o.reach * G * 1.2, rng, false);
        case "casting": {
          const genre = state.project!.genre;
          const c = bestBy(affordableCards(ch), (c) => starFit(state.stars[c.starId], genre, cfg) * 2 - c.price / 4000, rng);
          return { type: "cast", starId: c.starId };
        }
        case "marketing":
          return campaign(ch, ["small"]);
        default:
          return { type: "wait" };
      }
    },
  },
  "cheap-duds": {
    id: "cheap-duds",
    description: "Takes the biggest advance, casts the cheapest Star, no marketing, pockets surplus",
    decide(state, _cfg, ch, rng) {
      switch (ch.phase) {
        case "planning": {
          const plans = newPlans(ch);
          return plans[Math.floor(rng() * plans.length)];
        }
        case "pitch":
          return offerDecision(ch, (o) => o.advance, rng, false);
        case "casting": {
          const c = bestBy(affordableCards(ch), (c) => -c.price, rng);
          return { type: "cast", starId: c.starId };
        }
        case "marketing":
          return { type: "market", campaign: "none" };
        default:
          return { type: "wait" };
      }
    },
  },
  "famous-star": {
    id: "famous-star",
    description: "Spends heavily on Fame, marketing and wide reach",
    decide(state, cfg, ch, rng, ctx) {
      switch (ch.phase) {
        case "planning": {
          const r = reinvest(state, cfg, ch, ctx, { adsAbove: 30000 });
          if (r) return r;
          return bestBy(newPlans(ch), (p) => planScore(state, p, 0.3), rng);
        }
        case "pitch":
          return offerDecision(ch, (o) => o.reach * 1e6 + o.advance, rng, false);
        case "casting": {
          const c = bestBy(affordableCards(ch), (c) => state.stars[c.starId].fame, rng);
          return { type: "cast", starId: c.starId };
        }
        case "marketing":
          return campaign(ch, ["large", "medium", "small"]);
        default:
          return { type: "wait" };
      }
    },
  },
  "self-funder": {
    id: "self-funder",
    description: "Avoids royalties; self-funds when it can, accepts lower reach",
    decide(state, cfg, ch, rng, ctx) {
      switch (ch.phase) {
        case "planning": {
          const r = reinvest(state, cfg, ch, ctx, { trainAbove: 150000 });
          if (r) return r;
          return bestBy(newPlans(ch), (p) => planScore(state, p, 0.3), rng);
        }
        case "pitch": {
          const canSelf = ch.options.some((o) => o.type === "choose_offer" && o.distributorId === null);
          if (canSelf && state.cash >= cfg.production.movie.baseCost + 50000) return { type: "choose_offer", distributorId: null };
          return offerDecision(ch, (o) => -o.royalty, rng, false);
        }
        case "casting":
          return balancedStar(state, cfg, ch, rng);
        case "marketing":
          return campaign(ch, ["medium", "small"]);
        default:
          return { type: "wait" };
      }
    },
  },
  experimenter: {
    id: "experimenter",
    description: "Tries untested genre/theme combinations; researches themes",
    decide(state, cfg, ch, rng, ctx) {
      switch (ch.phase) {
        case "planning": {
          const r = reinvest(state, cfg, ch, ctx, { researchAbove: 60000, hireAbove: 160000, newHiring: true, upgradeBuffer: 200000 });
          if (r) return r;
          const untried = newPlans(ch).filter((p) => knownValue(state, p.genre, p.theme) === null);
          if (untried.length) return untried[Math.floor(rng() * untried.length)];
          return bestBy(newPlans(ch), (p) => planScore(state, p, 0), rng);
        }
        case "pitch":
          return offerDecision(ch, (o) => o.advance + (1 - o.royalty) * o.reach * G, rng, false);
        case "casting":
          return balancedStar(state, cfg, ch, rng);
        case "marketing":
          return campaign(ch, ["small"]);
        default:
          return { type: "wait" };
      }
    },
  },
  "franchise-builder": {
    id: "franchise-builder",
    description: "Reuses successful IPs, returning Stars and fans",
    decide(state, cfg, ch, rng, ctx) {
      switch (ch.phase) {
        case "planning": {
          const r = reinvest(state, cfg, ch, ctx, { trainAbove: 90000, hireAbove: 160000, newHiring: true, upgradeBuffer: 200000 });
          if (r) return r;
          const seq = franchiseSequel(state, ch, 6.0);
          if (seq) return seq;
          return bestBy(newPlans(ch), (p) => planScore(state, p, 0.3), rng);
        }
        case "pitch":
          return offerDecision(ch, (o) => o.advance + (1 - o.royalty) * o.reach * G, rng, false);
        case "casting": {
          const ip = state.ips[state.project!.ipId];
          const returning = ip?.establishedStarId && affordableCards(ch).find((c) => c.starId === ip.establishedStarId);
          if (returning) return { type: "cast", starId: returning.starId };
          return balancedStar(state, cfg, ch, rng);
        }
        case "marketing":
          return campaign(ch, ["medium", "small"]);
        default:
          return { type: "wait" };
      }
    },
  },
};

function franchiseSequel(state: StudioState, ch: Choices, minAvg: number): Decision | null {
  const seqs = ch.options.filter((o): o is PlanDecision => o.type === "plan" && o.ipRelation === "sequel");
  let best: PlanDecision | null = null;
  let bestFans = 0;
  for (const s of seqs) {
    const last = state.releases.filter((r) => r.ipId === s.parentIpId).at(-1);
    if (!last || last.avgScore < minAvg || last.active) continue;
    const fans = state.ips[s.parentIpId!].fans;
    if (fans > bestFans) {
      bestFans = fans;
      best = s;
    }
  }
  return best;
}

export const STRATEGY_IDS = Object.keys(STRATEGIES);
