import { baselineConfig, progressionConfig, configHash, type Config } from '../core/config';
import { hashString } from '../core/rng';
import { replay } from '../core/simulation';
import { RULESET_VERSION, type Approach, type Decision, type StudioState } from '../core/types';

export const SAVE_KEY = 'producers.game-preview.save.v1';
export type SavedUI = { genre: string; theme: string; approach: Approach; weekProgress?: number; speed?: number; guide?: boolean; guideHintDismissed?: boolean };
const digest = (state: StudioState) => String(hashString(JSON.stringify(state)));

export function makeSave(state: StudioState, actions: Decision[], ui: SavedUI) {
  return { version: 1, ruleset: RULESET_VERSION, configHash: state.configHash, seed: state.seed,
    actions, stateHash: digest(state), ui };
}
export function encodeSave(state: StudioState, actions: Decision[], ui: SavedUI): string {
  const raw = JSON.stringify(makeSave(state, actions, ui));
  if (actions.length > 5000 || raw.length > 2_000_000) throw new Error('Save size limit reached');
  return raw;
}

/** Why a save can't be continued: "outdated" = made by an older version of the rules or numbers (saves replay their
 *  actions through the current rules, so they can't carry over); "damaged" = not a readable save. */
export type SaveProblem = "outdated" | "damaged";
export function readSave(raw: string): { ok: true; state: StudioState; actions: Decision[]; ui: SavedUI; config: Config } | { ok: false; problem: SaveProblem } {
  try {
    const damaged = { ok: false as const, problem: 'damaged' as const }, outdated = { ok: false as const, problem: 'outdated' as const };
    if (raw.length > 2_000_000) return damaged;
    const data: unknown = JSON.parse(raw);
    if (!data || typeof data !== 'object') return damaged;
    const s = data as ReturnType<typeof makeSave>;
    if (s.version !== 1 || typeof s.ruleset !== 'string' || typeof s.configHash !== 'string') return damaged;
    const cfg = [baselineConfig(), progressionConfig()].find(c => configHash(c) === s.configHash);
    if (s.ruleset !== RULESET_VERSION || !cfg) return outdated;
    if (s.configHash !== configHash(cfg) ||
        !Number.isSafeInteger(s.seed) || s.seed < 1 || !Array.isArray(s.actions) || s.actions.length > 5000 ||
        !s.ui || typeof s.ui.genre !== 'string' || typeof s.ui.theme !== 'string' ||
        !['balanced','crowd','awards'].includes(s.ui.approach) ||
        (s.ui.weekProgress !== undefined && (typeof s.ui.weekProgress !== 'number' || !Number.isFinite(s.ui.weekProgress) || s.ui.weekProgress < 0 || s.ui.weekProgress >= 1)) ||
        (s.ui.speed !== undefined && ![1,2,4].includes(s.ui.speed)) ||
        (s.ui.guide !== undefined && typeof s.ui.guide !== 'boolean') ||
        (s.ui.guideHintDismissed !== undefined && typeof s.ui.guideHintDismissed !== 'boolean')) return damaged;
    let state: StudioState;
    try { state = replay(s.seed, cfg, s.actions); } catch { return outdated; } // an action the current rules no longer allow
    if (digest(state) !== s.stateHash) return outdated; // the rules moved on since it was saved
    return { ok: true, state, actions: s.actions, ui: s.ui, config: cfg };
  } catch {
    return { ok: false, problem: 'damaged' };
  }
}
