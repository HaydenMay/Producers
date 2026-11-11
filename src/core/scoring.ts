// Scores are FUNCTIONS of production state — never rolled. LOCKED: Audience leans Filming+Editing, Critics
// lean Plot+Writing; combo grades multiply (separate audience/critic); weak meter penalizes the matching
// side; critic saturation; rising era bar (applied in meter normalization); optional Gate 2.6 critic
// generations / audience eras (applied after combo, before clamp). Marketing/Fame/sales never enter.
import type { Config } from "./config";
import { round2 } from "./events";
import { METERS, type Grade, type Meter, type Project, type StudioState } from "./types";

/**
 * Gate 2.6 HARNESS PROXY for critic generations + audience eras. Deterministic, calendar time only
 * (in-game week, not film number). Generation g = floor(year / generationYears); toughness = min(max, perStep x g).
 * Applied at release time; published scores are stored on the release and never recomputed.
 */
export interface Expectations {
  method: "scale" | "subtract";
  criticGeneration: number;
  criticToughness: number;
  audienceEra: number;
  audienceToughness: number;
}

export const NO_EXPECTATIONS: Expectations = { method: "scale", criticGeneration: 0, criticToughness: 0, audienceEra: 0, audienceToughness: 0 };

export function criticGenerationAt(week: number, cfg: Config): number {
  const c = cfg.expectations.critics;
  if (!c.enabled) return 0;
  return Math.max(0, Math.floor(week / cfg.time.weeksPerYear / c.generationYears));
}
export function audienceEraAt(week: number, cfg: Config): number {
  const a = cfg.expectations.audience;
  if (!a.enabled) return 0;
  return Math.max(0, Math.floor(week / cfg.time.weeksPerYear / a.eraYears));
}
/**
 * Critic toughness. Legacy: permanent steps (perGeneration x g, capped). With `adaptYears` (designer 2026-11-11):
 * each new generation is tough on arrival and the studio adapts: only `permanentShare` of its step stays, the
 * rest fades linearly over adaptYears. So each arrival is a visible dip, while the long-run bar rises gently.
 */
function criticToughnessAt(week: number, g: number, cfg: Config): number {
  const c = cfg.expectations.critics as typeof cfg.expectations.critics & { adaptYears?: number | null; permanentShare?: number };
  if (!c.adaptYears) return Math.min(c.maxToughness, c.toughnessPerGeneration * g);
  const years = week / cfg.time.weeksPerYear;
  let t = 0;
  for (let k = 1; k <= g; k++) {
    const since = years - k * c.generationYears;
    const fade = Math.max(0, 1 - since / c.adaptYears);
    t += c.toughnessPerGeneration * ((c.permanentShare ?? 0) + (1 - (c.permanentShare ?? 0)) * fade);
  }
  return Math.min(c.maxToughness, t);
}

export function expectationsAt(week: number, cfg: Config): Expectations {
  const e = cfg.expectations;
  const g = criticGenerationAt(week, cfg);
  const ae = audienceEraAt(week, cfg);
  return {
    method: e.method as Expectations["method"],
    criticGeneration: g,
    criticToughness: Math.round(criticToughnessAt(week, g, cfg) * 1000) / 1000,
    audienceEra: ae,
    audienceToughness: Math.round(Math.min(e.audience.maxToughness, e.audience.toughnessPerEra * ae) * 1000) / 1000,
  };
}
/** Apply an expectation to a pre-clamp score. scale: x(1-t) (tougher at the top in absolute points); subtract: -10t points. */
export function applyExpectation(raw: number, toughness: number, method: Expectations["method"]): number {
  if (toughness <= 0) return raw;
  return method === "subtract" ? raw - 10 * toughness : raw * (1 - toughness);
}

export function eraBar(state: StudioState, cfg: Config): number {
  const year = state.week / cfg.time.weeksPerYear;
  return Math.min(cfg.production.eraBarMax, 1 + cfg.production.eraBarPerYear * year);
}

/** Normalize accumulated points into 0..100 quality per meter (saturating; scaled by duration and era bar). */
export function meterQuality(project: Project, state: StudioState, cfg: Config): Record<Meter, number> {
  const bar = eraBar(state, cfg);
  const out = {} as Record<Meter, number>;
  for (const m of METERS) {
    const pts = project.meterPoints[m] + (m === "filming" ? project.starPoints : 0);
    const half = (cfg.production.meterHalfPointPerWeek as Record<Meter, number>)[m] * project.durationWeeks * bar;
    out[m] = round2((100 * pts) / (pts + half));
  }
  return out;
}

export interface ScoreTrace {
  meters: Record<Meter, number>;
  audienceBase: number;
  criticBase: number;
  weakMeters: { meter: Meter; shortfall: number; audiencePenalty: number; criticPenalty: number }[];
  comboAudience: Grade;
  comboCritic: Grade;
  comboAudienceMult: number;
  comboCriticMult: number;
  fatigueMult: number;
  saturationMult: number;
  /** pre-expectation, pre-clamp scores (after combo, weakness, fatigue, saturation) */
  audienceRaw: number;
  criticRaw: number;
  /** Star score bonus (PROD-051 option B): flat, after the meter curve, from skill fit only (never Fame). */
  starFit?: number;
  starBonus?: { audience: number; critic: number };
  expectations: Expectations;
  audience: number;
  critic: number;
}

export function computeScores(
  meters: Record<Meter, number>,
  grades: { audience: Grade; critic: Grade },
  fatigue: number,
  saturated: boolean,
  cfg: Config,
  expectations: Expectations = NO_EXPECTATIONS,
  starFit = 0,
): ScoreTrace {
  const aw = cfg.scoring.audienceWeights as Record<Meter, number>;
  const cw = cfg.scoring.criticWeights as Record<Meter, number>;
  let audience = 0;
  let critic = 0;
  for (const m of METERS) {
    audience += (aw[m] * meters[m]) / 10;
    critic += (cw[m] * meters[m]) / 10;
  }
  const audienceBase = round2(audience);
  const criticBase = round2(critic);
  // weak-meter rule: only a meter far below the others counts; penalty follows the score weights
  const mean = METERS.reduce((a, m) => a + meters[m], 0) / 4;
  const weakMeters: ScoreTrace["weakMeters"] = [];
  for (const m of METERS) {
    const shortfall = mean - cfg.scoring.weakGap - meters[m];
    if (shortfall > 0) {
      const base = shortfall * cfg.scoring.weakPenaltyRate;
      const audienceHeavy = m === "filming" || m === "editing";
      const ap = base * (audienceHeavy ? cfg.scoring.weakPenaltySide.heavy : cfg.scoring.weakPenaltySide.light);
      const cp = base * (audienceHeavy ? cfg.scoring.weakPenaltySide.light : cfg.scoring.weakPenaltySide.heavy);
      audience -= ap;
      critic -= cp;
      weakMeters.push({ meter: m, shortfall: round2(shortfall), audiencePenalty: round2(ap), criticPenalty: round2(cp) });
    }
  }
  const gm = cfg.world.gradeMultiplier as Record<Grade, number>;
  const comboAudienceMult = gm[grades.audience];
  const comboCriticMult = gm[grades.critic];
  const fatigueMult = round2(1 - fatigue);
  const saturationMult = saturated ? round2(1 - cfg.scoring.saturatedCriticPenalty) : 1;
  audience = audience * comboAudienceMult * fatigueMult;
  critic = critic * comboCriticMult * fatigueMult * saturationMult;
  const sb = (cfg.scoring as { starScoreBonus?: { audience: number; critic: number } }).starScoreBonus;
  // critics only credit the Star as far as the story holds up (designer 2026-11-11): Plot + Writing gate
  const gate = (sb as { criticStoryGate?: { zeroAt: number; fullAt: number } | null } | undefined)?.criticStoryGate;
  const story = (meters.plot + meters.writing) / 2;
  const storyFactor = gate ? Math.max(0, Math.min(1, (story - gate.zeroAt) / (gate.fullAt - gate.zeroAt))) : 1;
  const starBonus = sb && starFit > 0 && (sb.audience || sb.critic) ? { audience: round2((sb.audience * starFit) / 100), critic: round2((sb.critic * starFit * storyFactor) / 100) } : null;
  if (starBonus) {
    // optional taper near the top (protects the 9.0 Hall of Fame line): full below taperFrom, fading to 0 at 10
    const tf = (sb as { taperFrom?: number | null }).taperFrom;
    const k = (x: number) => (tf == null ? 1 : Math.max(0, Math.min(1, (10 - x) / (10 - tf))));
    starBonus.audience = round2(starBonus.audience * k(audience));
    starBonus.critic = round2(starBonus.critic * k(critic));
    audience += starBonus.audience;
    critic += starBonus.critic;
  }
  const audienceRaw = round2(audience);
  const criticRaw = round2(critic);
  audience = applyExpectation(audience, expectations.audienceToughness, expectations.method);
  critic = applyExpectation(critic, expectations.criticToughness, expectations.method);
  return {
    meters,
    audienceBase,
    criticBase,
    weakMeters,
    comboAudience: grades.audience,
    comboCritic: grades.critic,
    comboAudienceMult,
    comboCriticMult,
    fatigueMult,
    saturationMult,
    audienceRaw,
    criticRaw,
    ...(starBonus ? { starFit, starBonus } : {}),
    expectations,
    audience: round2(Math.max(0, Math.min(10, audience))),
    critic: round2(Math.max(0, Math.min(10, critic))),
  };
}

/** LOCKED boundaries: >= 4.0 renewable (TV), >= 9.0 Hall of Fame, on the mean of the two scores. */
export function avgScore(audience: number, critic: number): number {
  return round2((audience + critic) / 2);
}
export function isHallOfFame(avg: number, cfg: Config): boolean {
  return avg >= cfg.scoring.hofThreshold;
}
export function isRenewable(avg: number, cfg: Config): boolean {
  return avg >= cfg.scoring.renewThreshold;
}
