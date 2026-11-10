// Studio exact-genre experience, trends (craze cycle), unlock research, combo world generation.
import type { Config } from "./config";
import { emit, ledger } from "./events";
import { next, weighted } from "./rng";
import type { Grade, StudioState, TrendStage } from "./types";
import { comboKey } from "./distribution";

export function genreLevel(state: StudioState, cfg: Config, genre: string): number {
  const xp = state.genreXp[genre] ?? 0;
  return cfg.studioGenre.levelThresholds.filter((t) => xp >= t).length;
}

export function genreBonus(state: StudioState, cfg: Config, genre: string): number {
  return genreLevel(state, cfg, genre) * cfg.studioGenre.qualityBonusPerLevel;
}

/** WORKING ASSUMPTION: genre XP awarded once on production completion. Per exact genre, never per family. */
export function awardGenreXp(state: StudioState, cfg: Config, genre: string): void {
  const before = genreLevel(state, cfg, genre);
  state.genreXp[genre] = (state.genreXp[genre] ?? 0) + cfg.studioGenre.xpPerRelease;
  const after = genreLevel(state, cfg, genre);
  if (after > before) emit(state, "genre_level", `Studio ${genre} level ${before} → ${after}.`);
}

export function generateWorld(state: StudioState, cfg: Config): void {
  const genres = Object.keys(cfg.world.genres).sort();
  for (const g of genres) {
    for (const t of cfg.world.themes) {
      state.world.comboGrades[comboKey(g, t)] = {
        audience: weighted(state.rng, "world", cfg.world.gradeWeights as Record<Grade, number>),
        critic: weighted(state.rng, "world", cfg.world.gradeWeights as Record<Grade, number>),
      };
    }
  }
  for (const t of cfg.world.themes) state.trends[t] = { stage: "none", weeksInStage: 0 };
}

const NEXT_STAGE: Record<TrendStage, TrendStage> = { none: "rising", rising: "hot", hot: "saturated", saturated: "cooled", cooled: "none" };

/** Semi-random craze cycle with visible stages. Uses its own stream so decisions don't reshuffle trends. */
export function updateTrends(state: StudioState, cfg: Config): void {
  const len: Record<TrendStage, number> = { none: Infinity, rising: cfg.trends.risingWeeks, hot: cfg.trends.hotWeeks, saturated: cfg.trends.saturatedWeeks, cooled: cfg.trends.cooledWeeks };
  for (const t of cfg.world.themes) {
    const tr = state.trends[t];
    tr.weeksInStage += 1;
    const roll = next(state.rng, "trends"); // always consume one draw per theme per week
    if (tr.stage === "none") {
      if (roll < cfg.trends.riseChancePerWeek) {
        tr.stage = "rising";
        tr.weeksInStage = 0;
        emit(state, "trend", `Buzz is building around ${t} stories (Rising).`);
      }
    } else if (tr.weeksInStage >= len[tr.stage]) {
      tr.stage = NEXT_STAGE[tr.stage];
      tr.weeksInStage = 0;
      if (tr.stage === "hot") emit(state, "trend", `${t} craze is HOT!`);
      if (tr.stage === "saturated") emit(state, "trend", `${t} stories are everywhere; critics are getting tired (Saturated).`);
    }
  }
}

export function researchTheme(state: StudioState, cfg: Config, theme: string): void {
  if (state.unlockedThemes.includes(theme)) throw new Error(`${theme} already unlocked`);
  ledger(state, { kind: "research", amount: -cfg.research.themeCost, note: theme });
  state.unlockedThemes.push(theme);
  emit(state, "unlock", `Researched new theme: ${theme}.`);
}

/** Staff pitch (LOCKED source: high Plot stat). WORKING ASSUMPTION: Plot >= 45 pitches one new theme per completed production with 25% chance via world stream. */
export function maybeStaffPitch(state: StudioState, cfg: Config): void {
  const best = Math.max(...state.staff.map((s) => s.stats.plot));
  if (best < 45) return;
  const locked = cfg.world.themes.filter((t) => !state.unlockedThemes.includes(t));
  if (!locked.length) return;
  if (next(state.rng, "staff") < 0.25) {
    const t = locked[Math.floor(next(state.rng, "staff") * locked.length)];
    state.unlockedThemes.push(t);
    emit(state, "unlock", `Your best idea person pitched a new theme: ${t}.`);
  }
}
