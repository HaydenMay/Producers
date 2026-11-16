import { expect, it } from 'vitest';
import { progressionConfig } from '../../src/core/config';
import { runCareer } from '../../src/batch/runner';
import { FEED_YEAR, newsFormat, newsItems, unreadCount } from '../../src/game-preview/news';
import { reviewSitePercent } from '../../src/game-preview/flavor';

const cfg = progressionConfig();
const s = runCareer(3, 'balanced', cfg, { productions: 0, years: 10 }).state;
const items = newsItems(s, s.seed, cfg, 'Moon Dog Films');

it('reports every premiere with the real scores and ReelScore (PROD-089/090)', () => {
  for (const r of s.releases) {
    const n = items.find(i => i.headline.startsWith(`${r.title} premieres`))!;
    expect(n.headline).toContain(`Critics ${r.critic.toFixed(1)}`);
    expect(n.detail).toContain(`ReelScore ${reviewSitePercent(r.critic)}%`);
    expect(items.some(i => i.headline === `${r.title} enters the Hall of Fame`)).toBe(r.hallOfFame);
  }
});

it('only rewrites real events, concisely, newest first (PROD-083)', () => {
  expect(items.some(i => i.section === 'trends')).toBe(true);
  expect(items.some(i => i.section === 'critics' && /hang up their pens/.test(i.headline))).toBe(true);
  expect(items.some(i => /Moon Dog Films hires /.test(i.headline))).toBe(true);
  for (const i of items) expect(i.headline.length).toBeLessThanOrEqual(140);
  expect(items.some(i => /interest|Trust|crew level/.test(i.headline))).toBe(false); // studio-internal noise stays out
  for (let k = 1; k < items.length; k++) expect(items[k - 1].week).toBeGreaterThanOrEqual(items[k].week);
});

it('the paper goes online in year 8, and unread counts new items only', () => {
  const W = cfg.time.weeksPerYear;
  expect(newsFormat(FEED_YEAR * W - 1, cfg)).toBe('paper');
  expect(newsFormat(FEED_YEAR * W, cfg)).toBe('feed');
  expect(items.some(i => i.id === 'online')).toBe(true);
  expect(unreadCount(items, s.events.length)).toBe(0);
  expect(unreadCount(items, 0)).toBe(items.length);
  const early = runCareer(3, 'balanced', cfg, { productions: 0, years: 2 }).state;
  expect(newsItems(early, early.seed, cfg, '').some(i => i.id === 'online')).toBe(false);
});
