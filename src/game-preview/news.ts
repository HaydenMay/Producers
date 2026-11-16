// PROD-089 / PROD-083: the in-game newspaper that later evolves into a social feed. Every item is a concise rewrite of
// something that actually happened in the simulation (events + releases): no invented news, no random "sales went bad".
// Presentation only.
import type { Config } from '../core/config';
import type { StudioState } from '../core/types';
import { criticPanelFor, REVIEW_SITE, reviewSitePercent } from './flavor';

export type NewsSection = 'reviews' | 'trends' | 'studio' | 'people' | 'critics';
export type NewsItem = { id: string; order: number; week: number; section: NewsSection; headline: string; detail?: string; handle: string };
/** The paper goes online in this in-game year (Claude's call 2026-11-15, PROD-089). */
export const FEED_YEAR = 8;
export const PAPER = 'The Daily Reel', FEED = 'Buzzline';
export function newsFormat(week: number, cfg: Config): 'paper' | 'feed' { return week >= FEED_YEAR * cfg.time.weeksPerYear ? 'feed' : 'paper'; }

const short = (n: number) => n >= 1e6 ? `$${(n / 1e6).toFixed(n >= 1e7 ? 0 : 1)}M` : n >= 1e3 ? `$${Math.round(n / 1e3)}K` : `$${Math.round(n)}`;
const handleOf = (name: string) => '@' + (name.replace(/[^A-Za-z0-9]/g, '') || 'Studio');

export function newsItems(state: StudioState, seed: number, cfg: Config, studioName: string): NewsItem[] {
  const studio = studioName || 'Your studio', studioHandle = handleOf(studioName || 'YourStudio');
  const rel = new Map(state.releases.map(r => [r.id, r]));
  const out: NewsItem[] = [];
  const add = (i: number, week: number, section: NewsSection, handle: string, headline: string, detail?: string) => out.push({ id: `e${i}`, order: i, week, section, handle, headline, ...(detail ? { detail } : {}) });
  state.events.forEach((e, i) => {
    const d = (e.data ?? {}) as Record<string, unknown>;
    switch (e.type) {
      case 'release': {
        const r = rel.get(String(d.releaseId)); if (!r) return;
        add(i, e.week, 'reviews', handleOf(REVIEW_SITE), `${r.title} premieres: Critics ${r.critic.toFixed(1)}, Audience ${r.audience.toFixed(1)}`,
          `${REVIEW_SITE} ${reviewSitePercent(r.critic)}%. A ${r.genre} ${r.theme} ${r.format && r.format !== 'movie' ? 'series' : 'picture'} from ${studio}.`);
        if (r.hallOfFame) add(i + 0.5, e.week, 'reviews', handleOf(PAPER), `${r.title} enters the Hall of Fame`, `${studio} has made one for the ages.`);
        return;
      }
      case 'run_end': {
        const r = rel.get(String(d.releaseId)); if (!r) return;
        const w = /after (\d+) weeks?/.exec(e.message)?.[1];
        add(i, e.week, 'reviews', handleOf(PAPER), `${r.title} leaves theaters${w ? ` after ${w} week${w === '1' ? '' : 's'}` : ''}`, `Box office total: ${short(r.grossTotal)}.`);
        return;
      }
      case 'trend': return add(i, e.week, 'trends', '@TrendWatch', e.message);
      case 'unlock': return add(i, e.week, 'studio', studioHandle, e.message);
      case 'critics': {
        const g = Number(d.generation);
        if (d.announce) return add(i, e.week, 'critics', handleOf(PAPER), 'Veteran critics to retire within six months', 'Word is the next generation will be harder to impress.');
        if (!Number.isFinite(g) || g < 1) return;
        const before = criticPanelFor(seed, g - 1, cfg), now = criticPanelFor(seed, g, cfg);
        const gone = before.filter(c => !now.some(n => n.name === c.name)).map(c => c.name), fresh = now.filter(c => c.sinceGeneration === g).map(c => `${c.name} (${c.outlet})`);
        return add(i, e.week, 'critics', handleOf(PAPER), `${gone.join(' and ')} hang up their pens`, `${fresh.join(' and ')} take their seats. Expect tougher reviews.`);
      }
      case 'cast': {
        const star = state.stars[String(d.starId)]; if (!star) return;
        const film = state.releases.find(r => r.starId === star.id && r.releaseWeek >= e.week)?.title ?? (state.project?.starId === star.id ? state.project.title : undefined);
        return add(i, e.week, 'people', handleOf(star.name), `${star.name} signs on${film ? ` to star in ${film}` : ' for a new production'}`);
      }
      case 'distribution': {
        const title = e.message.split(': ')[0], name = typeof d.name === 'string' ? d.name : undefined;
        return name ? add(i, e.week, 'studio', handleOf(name), `${name} picks up ${title}`) : undefined;
      }
      case 'hire': { const who = /^Hired (.+?) \(/.exec(e.message)?.[1]; return who ? add(i, e.week, 'people', studioHandle, `${studio} hires ${who}`) : undefined; }
      case 'specialty': return add(i, e.week, 'people', studioHandle, e.message);
      case 'upgrade': { const to = /→ (\d+)/.exec(e.message)?.[1]; return add(i, e.week, 'studio', studioHandle, `${studio} expands${to ? `: room for ${to} employees` : ''}`); }
      case 'star_retired': return add(i, e.week, 'people', handleOf(PAPER), e.message.split('.')[0] + '.');
      case 'catalog': return add(i, e.week, 'studio', studioHandle, 'Stars you have worked with can now be cast directly');
    }
  });
  // the paper going online is news too
  const online = FEED_YEAR * cfg.time.weeksPerYear;
  if (state.week >= online) { const at = state.events.findIndex(e => e.week >= online); out.push({ id: 'online', order: (at < 0 ? state.events.length : at) - 0.25, week: online, section: 'studio', handle: handleOf(FEED), headline: `${PAPER} goes online as ${FEED}`, detail: 'Same news, faster: follow it in your feed.' }); }
  return out.sort((a, b) => b.week - a.week || b.order - a.order);
}
/** `readUpTo` = how many sim events existed when the player last opened the news. */
export function unreadCount(items: NewsItem[], readUpTo: number): number { return items.filter(i => i.order >= readUpTo).length; }
