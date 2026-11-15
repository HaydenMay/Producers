import { baselineConfig, configHash } from '../core/config';
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

export function readSave(raw: string): { ok: true; state: StudioState; actions: Decision[]; ui: SavedUI } | { ok: false } {
  try {
    if (raw.length > 2_000_000) return { ok: false };
    const data: unknown = JSON.parse(raw);
    if (!data || typeof data !== 'object') return { ok: false };
    const s = data as ReturnType<typeof makeSave>;
    const cfg = baselineConfig();
    if (s.version !== 1 || s.ruleset !== RULESET_VERSION || s.configHash !== configHash(cfg) ||
        s.seed !== 42 || !Array.isArray(s.actions) || s.actions.length > 5000 ||
        !s.ui || typeof s.ui.genre !== 'string' || typeof s.ui.theme !== 'string' ||
        !['balanced','crowd','awards'].includes(s.ui.approach) ||
        (s.ui.weekProgress !== undefined && (typeof s.ui.weekProgress !== 'number' || !Number.isFinite(s.ui.weekProgress) || s.ui.weekProgress < 0 || s.ui.weekProgress >= 1)) ||
        (s.ui.speed !== undefined && ![1,2,4].includes(s.ui.speed)) ||
        (s.ui.guide !== undefined && typeof s.ui.guide !== 'boolean') ||
        (s.ui.guideHintDismissed !== undefined && typeof s.ui.guideHintDismissed !== 'boolean')) return { ok: false };
    const state = replay(s.seed, cfg, s.actions);
    if (digest(state) !== s.stateHash) return { ok: false };
    return { ok: true, state, actions: s.actions, ui: s.ui };
  } catch {
    return { ok: false };
  }
}
