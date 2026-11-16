import { baselineConfig, progressionConfig, configHash, type Config } from '../core/config';
import { hashString } from '../core/rng';
import { replay } from '../core/simulation';
import { RULESET_VERSION, type Approach, type Decision, type StudioState } from '../core/types';

export const SAVE_KEY = 'producers.game-preview.save.v1';
export type SavedUI = { genre: string; theme: string; approach: Approach; weekProgress?: number; speed?: number; guide?: boolean; guideHintDismissed?: boolean; studioName?: string; tips?: string[]; newsReadUpTo?: number; ip?: string | null; relation?: 'sequel' | 'reboot' | 'spinoff' };
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

/** Why a save can't be continued: "outdated" = the current rules would give it a different history (saves replay their
 *  actions through the current rules); "damaged" = not a readable save. A save from an older ruleset or config that
 *  replays to exactly the saved state carries over (2026-11-15): changes that don't touch its history don't cost the
 *  player their studio. */
export type SaveProblem = "outdated" | "damaged";
export function readSave(raw: string): { ok: true; state: StudioState; actions: Decision[]; ui: SavedUI; config: Config } | { ok: false; problem: SaveProblem } {
  try {
    const damaged = { ok: false as const, problem: 'damaged' as const }; const outdated = { ok: false as const, problem: 'outdated' as const };
    if (raw.length > 2_000_000) return damaged;
    const data: unknown = JSON.parse(raw);
    if (!data || typeof data !== 'object') return damaged;
    const s = data as ReturnType<typeof makeSave>;
    if (s.version !== 1 || typeof s.ruleset !== 'string' || typeof s.configHash !== 'string') return damaged;
    if (!Number.isSafeInteger(s.seed) || s.seed < 1 || !Array.isArray(s.actions) || s.actions.length > 5000 ||
        !s.ui || typeof s.ui.genre !== 'string' || typeof s.ui.theme !== 'string' ||
        !['balanced','crowd','awards'].includes(s.ui.approach) ||
        (s.ui.weekProgress !== undefined && (typeof s.ui.weekProgress !== 'number' || !Number.isFinite(s.ui.weekProgress) || s.ui.weekProgress < 0 || s.ui.weekProgress >= 1)) ||
        (s.ui.speed !== undefined && ![1,2,4].includes(s.ui.speed)) ||
        (s.ui.guide !== undefined && typeof s.ui.guide !== 'boolean') ||
        (s.ui.guideHintDismissed !== undefined && typeof s.ui.guideHintDismissed !== 'boolean') ||
        (s.ui.ip !== undefined && s.ui.ip !== null && (typeof s.ui.ip !== 'string' || s.ui.ip.length > 64)) ||
        (s.ui.relation !== undefined && !['sequel', 'reboot', 'spinoff'].includes(s.ui.relation)) ||
        (s.ui.newsReadUpTo !== undefined && (!Number.isSafeInteger(s.ui.newsReadUpTo) || s.ui.newsReadUpTo < 0)) ||
        (s.ui.studioName !== undefined && (typeof s.ui.studioName !== 'string' || s.ui.studioName.length > 64)) ||
        (s.ui.tips !== undefined && (!Array.isArray(s.ui.tips) || s.ui.tips.length > 2000 || s.ui.tips.some(t => typeof t !== 'string' || t.length > 200)))) return damaged;
    const configs = [progressionConfig(), baselineConfig()];
    const same = configs.filter(c => configHash(c) === s.configHash);
    // exact match first; otherwise (older ruleset or config) try every current config and keep the save only if its
    // replay is identical to what was saved (only the stored config hash and ruleset stamps may differ)
    const tries = s.ruleset === RULESET_VERSION && same.length ? same : [...same, ...configs.filter(c => !same.includes(c))];
    for (const cfg of tries) {
      let state: StudioState;
      try { state = replay(s.seed, cfg, s.actions); } catch { continue; } // an action the current rules no longer allow
      const stamped = { ...state, configHash: s.configHash, ...('rulesetVersion' in state ? { rulesetVersion: s.ruleset } : {}) };
      if (digest(stamped as StudioState) === s.stateHash) return { ok: true, state, actions: s.actions, ui: s.ui, config: cfg };
    }
    return outdated; // the rules moved on since it was saved
  } catch {
    return { ok: false, problem: 'damaged' };
  }
}
