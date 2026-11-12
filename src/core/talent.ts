// Stars rework (ledger PROD-213…218). Everything here runs only when cfg.stars.pool.enabled; it draws from its
// own lazy "pool" RNG stream, so the legacy streams (talent, names, world, …) never move. ALL NUMBERS ARE TEST VALUES.
//   PROD-213 persistent pool generated once + yearly debut class; auditions pull from it by tier
//   PROD-214 offscreen careers (rise / fade / retire), once a year
//   PROD-215 years active: more years → generally more Fame; retirement grows with years
//   PROD-216 catalog (unlocks with the first studio upgrade) + "original lead" card on sequels / new seasons
//   PROD-217 hidden per-Star growth weights (template + jitter); level-up points follow them
//   PROD-218 free fallback Star focused on the production's family
import type { Config } from "./config";
import { emit, newId, round2 } from "./events";
import { ensureStream, int, next, pick, range } from "./rng";
import { FIRST, LAST } from "./staff";
import { starFit } from "./stars";
import type { Project, Star, StudioState } from "./types";

export type Tier = "newcomer" | "mid" | "big";
type PoolCfg = Config["stars"]["pool"];

export function poolEnabled(cfg: Config): boolean {
  return !!(cfg.stars as { pool?: { enabled?: boolean } }).pool?.enabled;
}
const P = (cfg: Config): PoolCfg => cfg.stars.pool;
function rs(state: StudioState) {
  ensureStream(state.rng, state.seed, "pool");
  return state.rng;
}
const u = (state: StudioState) => next(rs(state), "pool");
const between = (state: StudioState, [lo, hi]: number[]) => range(rs(state), "pool", lo, hi);
const intIn = (state: StudioState, [lo, hi]: number[]) => int(rs(state), "pool", lo, hi);

const budgetFor = (level: number, cfg: Config) => cfg.stars.budgetBase + cfg.stars.budgetPerLevel * level;
const total = (s: Star) => Object.values(s.skills).reduce((a, b) => a + b, 0);

/** Unique-ish names from the pool stream (the shared names stream is untouched). */
function poolName(state: StudioState): string {
  const taken = new Set(Object.values(state.stars).map((s) => s.name));
  for (let i = 0; i < 6; i++) {
    const n = `${pick(rs(state), "pool", FIRST)} ${pick(rs(state), "pool", LAST)}`;
    if (!taken.has(n)) return n;
  }
  const base = `${pick(rs(state), "pool", FIRST)} ${pick(rs(state), "pool", LAST)}`;
  return `${base} ${String.fromCharCode(65 + intIn(state, [0, 25]))}.`;
}

/** PROD-217: hidden per-Star growth weights = template + per-family jitter, normalised to sum 1. */
export function rollGrowthWeights(state: StudioState, cfg: Config, focusFamily?: string): { weights: Record<string, number>; template: string } {
  const fams = cfg.world.families;
  const tpls = P(cfg).growth.templates as Record<string, { chance: number; weights: Record<string, number> }>;
  let template: string;
  if (focusFamily) template = "specialist";
  else {
    const sum = Object.values(tpls).reduce((a, t) => a + t.chance, 0);
    let x = u(state) * sum;
    template = Object.keys(tpls).at(-1)!;
    for (const [k, t] of Object.entries(tpls)) {
      if ((x -= t.chance) < 0) {
        template = k;
        break;
      }
    }
  }
  const tw = { ...tpls[template].weights };
  if ("*" in tw) {
    const fam = focusFamily ?? pick(rs(state), "pool", fams);
    tw[fam] = tw["*"];
    delete tw["*"];
  }
  const listed = Object.values(tw).reduce((a, b) => a + b, 0);
  const rest = fams.filter((f) => !(f in tw));
  const w: Record<string, number> = {};
  for (const f of fams) w[f] = ((f in tw ? tw[f] : (1 - listed) / Math.max(1, rest.length)) || 0.01) * between(state, P(cfg).growth.jitter);
  const s = Object.values(w).reduce((a, b) => a + b, 0);
  for (const f of fams) w[f] = Math.round((w[f] / s) * 1e4) / 1e4;
  return { weights: w, template };
}

/** Spread `points` over families by weights (largest remainder), capped at 100 per family and by `room`. */
export function addByWeights(star: Star, weights: Record<string, number>, points: number, room = Infinity): number {
  let left = Math.max(0, Math.min(points, room));
  let given = 0;
  for (let guard = 0; left > 0 && guard < 10; guard++) {
    const open = Object.keys(weights).filter((f) => (star.skills[f] ?? 0) < 100 && weights[f] > 0);
    if (!open.length) break;
    const ws = open.reduce((a, f) => a + weights[f], 0);
    const raw = open.map((f) => ({ f, x: (left * weights[f]) / ws }));
    const alloc = raw.map((r) => ({ f: r.f, n: Math.floor(r.x), frac: r.x - Math.floor(r.x) }));
    let rem = left - alloc.reduce((a, b) => a + b.n, 0);
    for (const a of [...alloc].sort((p, q) => q.frac - p.frac || weights[q.f] - weights[p.f])) if (rem-- > 0) a.n += 1;
    let used = 0;
    for (const a of alloc) {
      const cur = star.skills[a.f] ?? 0;
      const add = Math.min(a.n, 100 - cur);
      star.skills[a.f] = cur + add;
      used += add;
    }
    left -= used;
    given += used;
    if (used === 0) break;
  }
  return given;
}

const shapeOf = (template: string): Star["hiddenShape"] => (template === "even" ? "balanced" : template === "specialist" ? "specialist" : "twoFocus");

/** One pool Star of a tier. `years` overrides the tier's years-active range (debut class = 0). */
export function generatePoolStar(state: StudioState, cfg: Config, tier: Tier, years?: number): Star {
  const pc = P(cfg);
  const t = cfg.stars.tiers[tier];
  const yr = pc.yearsActive[tier];
  const yearsActive = years ?? intIn(state, yr);
  const pos = yr[1] > yr[0] ? (yearsActive - yr[0]) / (yr[1] - yr[0]) : 0;
  const fame = Math.round(t.fame[0] + (t.fame[1] - t.fame[0]) * (pc.fameByYears * pos + (1 - pc.fameByYears) * u(state)));
  let level = intIn(state, t.level);
  if (tier === "newcomer" && u(state) < cfg.stars.hiddenGemChance) level = intIn(state, cfg.stars.hiddenGemLevel); // rare hidden gem
  const { weights, template } = rollGrowthWeights(state, cfg);
  const star: Star = {
    id: newId(state, "star"),
    name: poolName(state),
    level,
    levelXp: 0,
    skills: Object.fromEntries(cfg.world.families.map((f) => [f, 0])),
    fame,
    relationship: cfg.stars.relationshipStart,
    credits: [],
    hiddenShape: shapeOf(template),
    fallback: false,
    yearsActive,
    age: intIn(state, pc.debutAge) + yearsActive,
    growthWeights: weights,
    growthTemplate: template,
  };
  // starting skills follow the same hidden weights (lightly re-jittered) so growth "reveals" the archetype
  const startW = Object.fromEntries(Object.entries(weights).map(([f, w]) => [f, w * between(state, [0.85, 1.15])]));
  addByWeights(star, startW, Math.floor(budgetFor(level, cfg) * between(state, [0.85, 1.0])));
  state.stars[star.id] = star;
  return star;
}

/** PROD-213: the whole pool, once, at game creation. */
export function initTalentPool(state: StudioState, cfg: Config): void {
  const pc = P(cfg);
  const n = pc.initialSize;
  const shares = pc.tierShares as Record<Tier, number>;
  const counts: [Tier, number][] = [
    ["big", Math.round(n * shares.big)],
    ["mid", Math.round(n * shares.mid)],
  ];
  counts.push(["newcomer", n - counts[0][1] - counts[1][1]]);
  for (const [tier, k] of counts) for (let i = 0; i < k; i++) generatePoolStar(state, cfg, tier);
  state.catalogUnlocked = false;
}

export function tierOf(star: Star, cfg: Config): Tier {
  const t = P(cfg).tierByFame;
  return star.fame >= t.bigFrom ? "big" : star.fame >= t.midFrom ? "mid" : "newcomer";
}
const bestFamily = (s: Star) => Object.entries(s.skills).sort((a, b) => b[1] - a[1])[0]?.[0];

/** PROD-213: pull one audition Star of `tier` from the active pool, biased to the production's family. */
export function drawFromPool(state: StudioState, cfg: Config, tier: Tier, family: string | string[], exclude: Set<string>): Star {
  const fams = Array.isArray(family) ? family : [family];
  const active = Object.values(state.stars).filter((s) => !s.retired && !exclude.has(s.id));
  let cands = active.filter((s) => tierOf(s, cfg) === tier);
  if (cands.length && u(state) < cfg.stars.genreFitBias) {
    const fit = cands.filter((s) => fams.includes(bestFamily(s)));
    if (fit.length) cands = fit;
  }
  if (!cands.length) cands = active; // thin tier: anyone available
  if (!cands.length) return generatePoolStar(state, cfg, tier); // empty world: a new face
  return pick(rs(state), "pool", cands);
}

/** PROD-216: unlocks with the first studio upgrade; configs without a capacity ladder use a Prestige gate. */
export function updateCatalogUnlock(state: StudioState, cfg: Config): boolean {
  if (state.catalogUnlocked) return true;
  const hasLadder = cfg.staffCapacity.ladder.length > 1;
  const open = hasLadder ? state.upgrades.length > 0 : state.prestige >= P(cfg).catalog.unlockPrestigeWithoutLadder;
  if (open) {
    state.catalogUnlocked = true;
    emit(state, "catalog", "Star catalog unlocked: you can now cast someone you have in mind from everyone you've worked with, instead of holding auditions.", {});
  }
  return open;
}

/** PROD-216: the Rolodex: everyone the studio has worked with, with status. */
export function catalogEntries(state: StudioState, cfg: Config, genre?: string) {
  return state.hiredStarIds.map((id) => {
    const s = state.stars[id];
    // audit 2026-11-12: the same two-family fit the production uses (PROD-045), not one family's skill
    return { starId: id, name: s.name, status: s.retired ? "retired" : "active", films: s.credits.length, fame: s.fame, level: s.level, yearsActive: s.yearsActive ?? 0, fit: genre ? starFit(s, genre, cfg) : undefined, tier: tierOf(s, cfg) };
  });
}

/** Fallback skill per family: the genre's families scale with their weight (RomCom 50/50 → 45 / 45), others low. */
function focusedSkill(f: string, family: string, fb: { focusSkill: number; otherSkill: number }, blend?: Record<string, number>): number {
  if (!blend || Object.keys(blend).length < 2) return f === family ? fb.focusSkill : fb.otherSkill;
  // Audit M1 (Claude's call 2026-11-12): focusSkill in EVERY family the genre leans on, otherSkill elsewhere, so the
  // blended fit is focusSkill in every genre and the total stays inside the level-0 budget (45 + 45 + 3 x 3 = 99).
  return blend[f] ? fb.focusSkill : fb.otherSkill;
}

/** PROD-218: a useful free Star, focused on this production's family. Joins the pool for good. */
export function generateFocusedFallback(state: StudioState, cfg: Config, family: string, blend?: Record<string, number>): Star {
  const fb = P(cfg).fallback;
  const { weights, template } = rollGrowthWeights(state, cfg, family);
  const star: Star = {
    id: newId(state, "star"),
    name: poolName(state),
    level: 0,
    levelXp: 0,
    skills: Object.fromEntries(cfg.world.families.map((f) => [f, focusedSkill(f, family, fb, blend)])),
    fame: 0,
    relationship: cfg.stars.relationshipStart,
    credits: [],
    hiddenShape: "fallback",
    fallback: true,
    yearsActive: 0,
    age: intIn(state, P(cfg).debutAge),
    growthWeights: weights,
    growthTemplate: template,
  };
  state.stars[star.id] = star;
  return star;
}

/** Level-up growth by the Star's hidden weights (PROD-217). Returns points given. */
export function levelUpGrowth(star: Star, cfg: Config, points: number): number {
  if (!star.growthWeights) return 0;
  return addByWeights(star, star.growthWeights, points, budgetFor(star.level, cfg) - total(star));
}

/** PROD-213/214/215: once a year. Debut class, aging, retirement, offscreen rise/fade. */
export function talentYear(state: StudioState, cfg: Config): void {
  const pc = P(cfg);
  const o = pc.offscreen;
  const busy = state.project?.starId;
  const retiredHired: string[] = [];
  for (const s of Object.values(state.stars)) {
    if (s.retired || s.id === busy) continue;
    s.yearsActive = (s.yearsActive ?? 0) + 1;
    s.age = (s.age ?? 25) + 1;
    const pRetire = Math.min(pc.retirement.max, Math.max(0, (s.yearsActive - pc.retirement.startYears) * pc.retirement.chancePerYear));
    if (u(state) < pRetire) {
      s.retired = true;
      s.retiredWeek = state.week;
      if (state.hiredStarIds.includes(s.id)) retiredHired.push(s.name);
      continue;
    }
    const young = s.yearsActive < o.youngYears ? "young" : "veteran";
    const x = u(state);
    if (x < o.riseChance[young]) {
      s.fame = Math.min(100, round2(s.fame + between(state, o.riseFame)));
      if (u(state) < o.levelUpChance[young] && s.level < cfg.stars.maxLevel) {
        s.level += 1;
        levelUpGrowth(s, cfg, pc.growth.offscreenLevelUpPoints);
      }
    } else if (x < o.riseChance[young] + o.fadeChance[young]) {
      s.fame = Math.max(0, round2(s.fame - between(state, o.fadeFame)));
    }
  }
  for (let i = 0; i < pc.debutPerYear; i++) generatePoolStar(state, cfg, "newcomer", 0);
  for (const n of retiredHired) emit(state, "star_retired", `${n} has retired from acting. They stay in your catalog's history.`, {});
}

/** Sequels / new seasons: the established lead, if still working (PROD-216). */
export function originalLead(state: StudioState, project: Project): Star | null {
  if (project.ipRelation !== "sequel" && project.ipRelation !== "season") return null;
  const id = state.ips[project.ipId]?.establishedStarId;
  const s = id ? state.stars[id] : undefined;
  return s && !s.retired ? s : null;
}
