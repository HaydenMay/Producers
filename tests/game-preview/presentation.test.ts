import { describe, expect, it } from 'vitest';
import { baselineConfig } from '../../src/core/config';
import { applyDecision, createStudio, getChoices } from '../../src/core/simulation';
import { cashActivity, movieMoney, starDetails } from '../../src/game-preview/presentation';

describe('truthful decision and money details', () => {
  it('uses the core weighted actor fit and distinguishes fame', () => {
    const cfg = baselineConfig(), s = createStudio(42, cfg);
    const star = Object.values(s.stars)[0];
    const details = starDetails(star, 'Action', cfg);
    expect(details.fame).toBe(star.fame);
    expect(details.families.length).toBeGreaterThan(0);
    expect(details.fit).toBeGreaterThanOrEqual(0);
  });
  it('separates real cash entries from project reserves and uses accumulated release costs', () => {
    const cfg = baselineConfig(), s = createStudio(42, cfg);
    applyDecision(s, cfg, getChoices(s, cfg).options.find(d => d.type === 'plan')!);
    while (s.releases.length === 0) {
      const choices = getChoices(s, cfg);
      applyDecision(s, cfg, choices.phase === 'production' ? { type: 'wait' } : choices.options[0]);
    }
    const r = s.releases[0], m = movieMoney(r);
    expect(m.cost).toBe(r.baseCost + r.starFee + r.campaignCost + r.laborDuring!);
    expect(m.net).toBe(r.studioTake - m.cost!);
    expect(cashActivity(s).every(entry => !['advance_received','advance_spent'].includes(entry.kind))).toBe(true);
  });
});
