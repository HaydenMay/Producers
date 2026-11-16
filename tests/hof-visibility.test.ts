// PROD-159: a Hall of Fame title raises the visibility of later titles in the same IP (wider release offers).
import { expect, it } from 'vitest';
import { baselineConfig, legacyConfig, setPath } from '../src/core/config';
import { generateBids, hallOfFameReach } from '../src/core/latedist';
import { runCareer } from '../src/batch/runner';
import type { Release } from '../src/core/types';

it('reach multiplier: +10% per Hall of Fame title in the IP, at most +20%; off in the legacy overlay', () => {
  const cfg = baselineConfig(), s = runCareer(1, 'balanced', cfg, { productions: 3 }).state;
  const fake = (ipId: string, hallOfFame: boolean) => ({ ...s.releases[0], id: `x${Math.random()}`, ipId, hallOfFame }) as Release;
  expect(hallOfFameReach(s, cfg, 'ipA')).toBe(1);
  s.releases.push(fake('ipA', true), fake('ipB', true));
  expect(hallOfFameReach(s, cfg, 'ipA')).toBeCloseTo(1.1);
  s.releases.push(fake('ipA', true), fake('ipA', true), fake('ipA', false));
  expect(hallOfFameReach(s, cfg, 'ipA')).toBeCloseTo(1.2);
  expect(hallOfFameReach(s, legacyConfig(), 'ipA')).toBe(1);
});

it('distributors offer a wider release, and say why, for the next title in a Hall of Fame IP', () => {
  const cfg = baselineConfig(), off = setPath(cfg, 'economy.lateDistribution.hallOfFameReach.enabled', false);
  // find a career where a later title in the same IP follows a Hall of Fame title
  for (let seed = 1; seed <= 16; seed++) {
    const a = runCareer(seed, 'franchise-builder', cfg, { productions: 0, years: 12 }).state;
    const i = a.releases.findIndex((r, k) => a.releases.slice(0, k).some(p => p.ipId === r.ipId && p.hallOfFame));
    if (i < 0) continue;
    const b = runCareer(seed, 'franchise-builder', off, { productions: 0, years: 12 }).state;
    const ra = a.releases[i], rb = b.releases.find(r => r.title === ra.title && r.ipId === ra.ipId);
    if (!rb || rb.reachCap === 0) continue;
    expect(ra.reachCap).toBeGreaterThan(rb.reachCap);
    expect([ra.audience, ra.critic]).toEqual([rb.audience, rb.critic]); // visibility only, never scores
    return;
  }
  throw new Error('no Hall of Fame sequel found in 16 seeds');
});

it('the bid explains the wider release', () => {
  const cfg = baselineConfig();
  for (let seed = 1; seed <= 20; seed++) for (const y of [0.4, 0.9, 1.3, 1.7]) {
    const s = runCareer(seed, 'balanced', cfg, { productions: 0, years: y }).state;
    if (!s.project) continue;
    s.releases.push({ ...s.releases[0], ipId: s.project.ipId, hallOfFame: true } as Release);
    const { bids } = generateBids(s, cfg, s.project);
    if (!bids.length) continue;
    for (const b of bids) expect(b.reasons.some(r => r.includes('Hall of Fame'))).toBe(true);
    return;
  }
  throw new Error('no in-progress project with bids found');
});
