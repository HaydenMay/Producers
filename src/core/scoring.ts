// Scores are FUNCTIONS of production state — never rolled. LOCKED: Audience leans Filming+Editing, Critics
// lean Plot+Writing; combo grades multiply (separate audience/critic); weak meter penalizes the matching
// side; critic saturation; rising era bar (applied in meter normalization). Marketing/Fame never enter.
import type { Config } from "./config";
import { round2 } from "./events";
import { METERS, type Grade, type Meter, type Project, type StudioState } from "./types";

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
  audience: number;
  critic: number;
}

export function computeScores(
  meters: Record<Meter, number>,
  grades: { audience: Grade; critic: Grade },
  fatigue: number,
  saturated: boolean,
  cfg: Config,
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
