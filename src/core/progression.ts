// Studio exact-genre experience, trends (craze cycle), unlock research, combo world generation.
import type { Config } from "./config";
import { emit, ledger } from "./events";
import { next, stableUnit, weighted } from "./rng";
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

const GRADES: Grade[] = ["A", "B", "C", "D", "F"];

/**
 * Editorial compatibility (PROD-062/074/075): ONE shared grade for an EXACT genre + theme, shifted at
 * most `maxSteps` by a stable per-pair hash (never a shared stream). The same grade feeds BOTH scores;
 * Audience vs Critic differ only through craft weights. Exported for tests and reports.
 */
export function editorialGrades(seed: number, cfg: Config, genre: string, theme: string): { grade: Grade; baseline: Grade; shifted: boolean } {
  const c = cfg.world.compatibility;
  const baseline = (c.matrix as unknown as Record<string, Record<string, Grade>>)[genre]?.[theme];
  if (!baseline) throw new Error(`compatibility matrix has no entry for ${genre} + ${theme}`);
  let grade = baseline;
  if (c.variation.enabled) {
    const u = stableUnit(seed, `combo:${genre}|${theme}`);
    if (u < c.variation.chance) {
      const dir = u < c.variation.chance / 2 ? -1 : 1; // -1 = better grade
      const steps = Math.max(1, c.variation.maxSteps);
      grade = GRADES[Math.max(0, Math.min(GRADES.length - 1, GRADES.indexOf(baseline) + dir * steps))];
    }
  }
  return { grade, baseline, shifted: grade !== baseline };
}

export function generateWorld(state: StudioState, cfg: Config): void {
  const genres = Object.keys(cfg.world.genres).sort();
  const editorial = cfg.world.compatibility.mode === "editorial";
  for (const g of genres) {
    for (const t of cfg.world.themes) {
      // the random draws are ALWAYS consumed, so the world stream (and everything after it) is identical in both modes
      const random = {
        audience: weighted(state.rng, "world", cfg.world.gradeWeights as Record<Grade, number>),
        critic: weighted(state.rng, "world", cfg.world.gradeWeights as Record<Grade, number>),
      };
      if (editorial) {
        const e = editorialGrades(state.seed, cfg, g, t);
        state.world.comboGrades[comboKey(g, t)] = { audience: e.grade, critic: e.grade }; // one shared grade
      } else state.world.comboGrades[comboKey(g, t)] = random;
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

/**
 * Genre unlocks (PROD-091, designer 2026-11-11): the crew opens genres (stat thresholds), RomCom-style combo
 * unlocks after releasing each listed genre, and an era safety net. No money path, no RNG. Checked weekly.
 */
export function checkGenreUnlocks(state: StudioState, cfg: Config): void {
  const gu = (cfg as { genreUnlocks?: { enabled?: boolean } }).genreUnlocks as Config["genreUnlocks"] | undefined;
  if (!gu?.enabled) return;
  const open = (g: string, msg: string, data: Record<string, unknown>) => {
    state.unlockedGenres.push(g);
    emit(state, "unlock", msg, { genre: g, ...data });
  };
  for (const [g, r] of Object.entries(gu.skill as Record<string, { stat: string; min: number; why: string }>)) {
    if (state.unlockedGenres.includes(g)) continue;
    const who = state.staff.find((s) => (s.stats as Record<string, number>)[r.stat] >= r.min);
    if (who) open(g, `${who.name}'s ${r.why} (${r.stat} ${Math.floor((who.stats as Record<string, number>)[r.stat])}) opened a new genre: ${g}.`, { via: "staff", staff: who.name, stat: r.stat });
  }
  for (const [g, need] of Object.entries(gu.combos as Record<string, string[]>)) {
    if (state.unlockedGenres.includes(g)) continue;
    if (need.every((n) => state.releases.some((rel) => rel.genre === n))) open(g, `Having made both ${need.join(" and ")}, your studio found a new genre: ${g}.`, { via: "combo", need });
  }
  if (state.week >= gu.eraSafetyNetYear * cfg.time.weeksPerYear)
    for (const g of Object.keys(cfg.world.genres)) if (!state.unlockedGenres.includes(g)) open(g, `Times change: ${g} is now a genre every studio makes.`, { via: "era" });
}
