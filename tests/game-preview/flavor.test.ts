import { describe, expect, it } from 'vitest';
import { progressionConfig } from '../../src/core/config';
import { createStudio } from '../../src/core/simulation';
import type { Star } from '../../src/core/types';
import {
  ASSISTANT, assistantPremiereLine, cleanStudioName, criticPanelFor, knownTipKeys, newTips, panelReviews,
  randomStudioName, reviewSitePercent, starBio, STUDIO_NAME_MAX,
} from '../../src/game-preview/flavor';

const cfg = progressionConfig();
const W = cfg.time.weeksPerYear * cfg.expectations.critics.generationYears;

describe('studio name (PROD-165)', () => {
  it('random names are deterministic, non-empty and vary by seed', () => {
    expect(randomStudioName(7)).toBe(randomStudioName(7));
    expect(new Set([1, 2, 3, 4, 5, 6, 7, 8].map(randomStudioName)).size).toBeGreaterThan(3);
  });
  it('cleans what the player types', () => {
    expect(cleanStudioName('  Moon   Dog \n Films ')).toBe('Moon Dog Films');
    expect(cleanStudioName('   ')).toBe('');
    expect(cleanStudioName('x'.repeat(80))).toHaveLength(STUDIO_NAME_MAX);
  });
});

it('review site % is the shown Critics score x 10 (PROD-090)', () => {
  expect(reviewSitePercent(7.4)).toBe(74);
  expect(reviewSitePercent(7.43)).toBe(74);
  expect(reviewSitePercent(10)).toBe(100);
  expect(reviewSitePercent(0)).toBe(0);
});

it('Star bios restate the card exactly (PROD-055)', () => {
  const star = { id: 's', name: 'A', level: 2, levelXp: 0, skills: { Funny: 70, Scary: 20 }, fame: 55, relationship: 3, credits: ['r1', 'r2', 'r3'],
    hiddenShape: 'balanced', fallback: false, yearsActive: 6 } as Star;
  const bio = starBio(star, 2);
  expect(bio).toContain('well-known');
  expect(bio).toContain('funny roles');
  expect(bio).toContain('3 screen credits');
  expect(bio).toContain('6 years');
  expect(bio).toContain('2 films with your studio and enjoys working with you');
  expect(starBio({ ...star, credits: [], fame: 5, yearsActive: 0 }, 0)).toBe('A newcomer at home in funny roles, with no screen credits yet.');
});

describe('named critic panel (PROD-160/161)', () => {
  it('four critics; each generation retires the two longest-serving', () => {
    const g0 = criticPanelFor(42, 0, cfg), g1 = criticPanelFor(42, 1, cfg), g2 = criticPanelFor(42, 2, cfg);
    expect(g0).toHaveLength(4);
    expect(g1.slice(0, 2).map(c => c.name)).toEqual(g0.slice(2).map(c => c.name));
    expect(g1.slice(2).every(c => c.sinceGeneration === 1)).toBe(true);
    expect(new Set([...g0, ...g1, ...g2].map(c => c.name)).size).toBe(8);
    for (const c of g2) expect(c.loves).not.toBe(c.toughOn);
  });
  it('the panel averages the Critics score and tastes are visible', () => {
    for (const genre of Object.keys(cfg.world.genres)) for (const critic of [3.2, 5.5, 7.4, 8.1]) {
      const reviews = panelReviews({ genre, critic, releaseWeek: 0, criticGeneration: 0 }, 9, cfg);
      const avg = reviews.reduce((a, r) => a + r.score, 0) / reviews.length;
      expect(Math.abs(avg - critic)).toBeLessThanOrEqual(0.051);
      for (const r of reviews) expect(r.line.length).toBeGreaterThan(0);
    }
  });
});

it('the assistant only restates what the scores show (PROD-166)', () => {
  expect(ASSISTANT.name).toBeTruthy();
  expect(assistantPremiereLine({ audience: 8, critic: 8, avgScore: 8, hallOfFame: true })).toContain('Hall of Fame');
  expect(assistantPremiereLine({ audience: 5, critic: 7, avgScore: 6, hallOfFame: false })).toContain('Critics liked it');
  expect(assistantPremiereLine({ audience: 7, critic: 5, avgScore: 6, hallOfFame: false })).toContain('Audiences liked it');
  expect(assistantPremiereLine({ audience: 3, critic: 3.4, avgScore: 3.2, hallOfFame: false })).toContain("didn't land");
});

describe('later-unlock tips (PROD-170)', () => {
  it('a fresh studio has no tips; a new genre, theme, expansion and critic turnover each tip once', () => {
    const s = createStudio(11, cfg);
    const seen = new Set(knownTipKeys(s, cfg));
    expect(newTips(s, seen, 11, cfg)).toEqual([]);
    s.unlockedGenres = [...s.unlockedGenres, 'Drama'];
    s.unlockedThemes = [...s.unlockedThemes, 'Heists'];
    s.events.push({ week: 0, type: 'unlock', message: "Everyone's talking about Heists, and your team got inspired: new theme Heists." });
    s.week = W + 1;
    const tips = newTips(s, seen, 11, cfg, { to: 6, enabled: true });
    expect(tips.map(t => t.key)).toEqual(['genre:Drama', 'theme:Heists', 'expand:6', 'critics:1']);
    expect(tips[1].text).toContain('your team got inspired');
    expect(tips[3].text).toContain('retired');
    for (const t of tips) seen.add(t.key);
    expect(newTips(s, seen, 11, cfg, { to: 6, enabled: true })).toEqual([]);
  });
});
