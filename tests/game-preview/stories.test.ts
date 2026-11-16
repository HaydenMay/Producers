import { describe, expect, it } from 'vitest';
import { progressionConfig } from '../../src/core/config';
import { getChoices } from '../../src/core/simulation';
import { runCareer } from '../../src/batch/runner';
import type { PlanDecision } from '../../src/core/types';
import { plansForStory, RELATION_COPY, storyLines, storySummary } from '../../src/game-preview/stories';

const cfg = progressionConfig();
const s = runCareer(5, 'balanced', cfg, { productions: 3 }).state;
s.cash = 500_000; // in the red the sim offers no new productions at all
const movie = (getChoices(s, cfg).options.filter(d => d.type === 'plan' && !d.format && !d.route)) as PlanDecision[];

describe('stories in the game preview (PROD-034)', () => {
  it('lists your movie IPs with the continuations the sim offers', () => {
    const lines = storyLines(s, movie);
    expect(lines.length).toBeGreaterThan(0);
    for (const l of lines) {
      expect(l.relations).toEqual(['sequel', 'reboot', 'spinoff']);
      expect(s.ips[l.ipId].name).toBe(l.name);
      expect(storySummary(l)).toContain(`${s.ips[l.ipId].fans.toLocaleString('en-US')} fans`);
    }
  });
  it('sequels and reboots keep genre and theme; spinoffs keep genre and pick any theme', () => {
    const l = storyLines(s, movie)[0], last = s.releases.filter(r => r.ipId === l.ipId).at(-1)!;
    for (const rel of ['sequel', 'reboot'] as const) {
      const ps = plansForStory(movie, l.ipId, rel);
      expect(ps).toHaveLength(1);
      expect([ps[0].genre, ps[0].theme]).toEqual([last.genre, last.theme]);
    }
    const spin = plansForStory(movie, l.ipId, 'spinoff');
    expect(new Set(spin.map(p => p.genre))).toEqual(new Set([last.genre]));
    expect(spin.length).toBe(s.unlockedThemes.length);
    expect(plansForStory(movie, null, 'sequel').every(p => p.ipRelation === 'new')).toBe(true);
  });
  it('the copy matches the rules it describes', () => {
    const f = cfg.scoring.repetitionFatigue;
    expect(f.sequelPerRepeat).toBeLessThan(f.newProjectPerRepeat); // "audiences mind the repeat less"
    expect(cfg.audience.spinoffFanShare).toBeCloseTo(0.5, 1); // "about half the fans"
    expect(RELATION_COPY.sequel.detail).toContain('Replacing the lead hurts');
    expect(RELATION_COPY.reboot.detail).toContain('recast the lead freely');
  });
});
