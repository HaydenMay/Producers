// 2026-11-15 review fixes: every new studio gets its own world, and a save that can't be continued says WHY.
import { describe, expect, it } from 'vitest';
import { progressionConfig } from '../../src/core/config';
import { createStudio } from '../../src/core/simulation';
import { PrototypeGame } from '../../src/game/game';
import { encodeSave, readSave } from '../../src/game-preview/save';

const ui = { genre: 'Action', theme: 'Spies', approach: 'balanced' as const };

describe('game saves', () => {
  it('new studios get different worlds, and any world seed round-trips through a save', () => {
    const g = new PrototypeGame(progressionConfig());
    const seeds = new Set<number>();
    for (let i = 0; i < 5; i++) { g.reset(); seeds.add(g.state.seed); }
    expect(seeds.size).toBeGreaterThan(1);
    const state = createStudio(123456, progressionConfig());
    const saved = readSave(encodeSave(state, [], ui));
    expect(saved.ok).toBe(true);
    if (saved.ok) expect(saved.state).toEqual(state);
  });

  it('a save from older rules is reported as outdated, not damaged', () => {
    const state = createStudio(7, progressionConfig());
    const raw = JSON.parse(encodeSave(state, [], ui));
    expect(readSave(JSON.stringify({ ...raw, ruleset: 'v9.61-gate3-0.1' }))).toEqual({ ok: false, problem: 'outdated' });
    expect(readSave(JSON.stringify({ ...raw, configHash: 'an-older-config' }))).toEqual({ ok: false, problem: 'outdated' });
    expect(readSave(JSON.stringify({ ...raw, stateHash: '12345' }))).toEqual({ ok: false, problem: 'outdated' });
  });

  it('unreadable saves are reported as damaged', () => {
    expect(readSave('not json')).toEqual({ ok: false, problem: 'damaged' });
    expect(readSave(JSON.stringify({ hello: 1 }))).toEqual({ ok: false, problem: 'damaged' });
    const raw = JSON.parse(encodeSave(createStudio(7, progressionConfig()), [], ui));
    expect(readSave(JSON.stringify({ ...raw, seed: -4 }))).toEqual({ ok: false, problem: 'damaged' });
  });
});
