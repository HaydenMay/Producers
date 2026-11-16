// Presentation-only flavor for the game preview: studio names (PROD-165), the review site (PROD-090), Star bio lines
// (PROD-055), the named critic panel (PROD-160/161), the studio assistant (PROD-166) and later-unlock tips (PROD-170).
// Nothing here feeds back into the simulation: every line is derived from the state the player already sees, so it
// can never contradict the numbers. All names are original.
import type { Config } from '../core/config';
import { stableUnit } from '../core/rng';
import { criticGenerationAt } from '../core/scoring';
import { familyWeights } from '../core/stars';
import type { Release, Star, StudioState } from '../core/types';

const pick = <T>(list: readonly T[], u: number) => list[Math.min(list.length - 1, Math.floor(u * list.length))];

// ── Studio name ─────────────────────────────────────────────────────────────
const NAME_FIRST = ['Lantern', 'Copper', 'Bright Alley', 'Juniper', 'Red Kite', 'Northlight', 'Paper Moon', 'Harbor', 'Velvet', 'Sixth Street', 'Blue Orchard', 'Tin Roof', 'Silverline', 'Cobalt', 'Wild Fig', 'Starling'] as const;
const NAME_LAST = ['Pictures', 'Studios', 'Films', 'Productions', 'Picture Co.', 'Media'] as const;
export const STUDIO_NAME_MAX = 32;
export function randomStudioName(seed: number): string {
  return `${pick(NAME_FIRST, stableUnit(seed, 'studio-name:first'))} ${pick(NAME_LAST, stableUnit(seed, 'studio-name:last'))}`;
}
/** Trimmed, single-spaced, at most 32 characters; '' when nothing usable is left. */
export function cleanStudioName(raw: string): string {
  return raw.replace(/[\u0000-\u001f\u007f]/g, '').replace(/\s+/g, ' ').trim().slice(0, STUDIO_NAME_MAX).trim();
}

// ── Review site (PROD-090: % = Critic score x 10, never a third rating) ─────
export const REVIEW_SITE = 'ReelScore';
/** Uses the one-decimal Critics score the player sees (PROD-078), so 7.4 is always 74%. */
export function reviewSitePercent(critic: number): number {
  return Math.round(Number(critic.toFixed(1)) * 10);
}

// ── Star bio (PROD-055: generated from current stats/history, never contradicts them) ─
export function starBio(star: Star, creditsWithStudio: number): string {
  const n = star.credits.length;
  const top = Object.entries(star.skills).sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))[0];
  const fame = star.fame >= 75 ? 'A household name' : star.fame >= 50 ? 'A well-known face' : star.fame >= 25 ? 'A rising name' : 'A newcomer';
  const parts = [`${fame}${top && top[1] > 0 ? ` at home in ${top[0].toLowerCase()} roles` : ''}`];
  parts.push(n === 0 ? 'with no screen credits yet' : `with ${n} screen credit${n === 1 ? '' : 's'}`);
  if (star.yearsActive !== undefined && star.yearsActive >= 1) parts.push(`over ${Math.floor(star.yearsActive)} year${Math.floor(star.yearsActive) === 1 ? '' : 's'} in the business`);
  let line = parts.join(', ') + '.';
  if (creditsWithStudio > 0) line += ` Has made ${creditsWithStudio === 1 ? 'one film' : `${creditsWithStudio} films`} with your studio${star.relationship >= 3 ? ' and enjoys working with you' : ''}.`;
  return line;
}

// ── Named critic panel (PROD-160/161) ──────────────────────────────────────
// Four reviewers at a time. Each new critic generation (the sim's calendar proxy, PROD-164) retires the two longest-
// serving critics and brings in two new ones. Tastes are visible; the panel average equals the Critics score.
const CRITICS = [
  ['Dana Okafor', 'The Morning Reel'], ['Lou Brennan', 'Screen Ledger'], ['Priya Halvorsen', 'Frame Weekly'], ['Marcus Vey', 'The Aisle Seat'],
  ['Ingrid Sato', 'Projector'], ['Tomás Reyes', 'Cinema Post'], ['Hattie Clarke', 'Second Reel'], ['Omar Lindqvist', 'Marquee Daily'],
  ['June Abara', 'The Cutting Room'], ['Felix Moreau', 'Northlight Review'], ['Rosa Kim', 'Wide Release'], ['Cal Whitaker', 'Box Seat'],
  ['Noor Haddad', 'Final Draft'], ['Ellis Park', 'The Matinee'], ['Greta Novak', 'Credits Roll'], ['Sol Adeyemi', 'Opening Night'],
] as const;
export type Critic = { name: string; outlet: string; loves: string; toughOn: string; sinceGeneration: number };
const PANEL = 4, TURNOVER = 2, TASTE = 0.8;

function makeCritic(seed: number, index: number, generation: number, families: readonly string[]): Critic {
  const [name, outlet] = CRITICS[index];
  const loves = pick(families, stableUnit(seed, `critic:${index}:loves`));
  const rest = families.filter(f => f !== loves);
  return { name, outlet, loves, toughOn: pick(rest, stableUnit(seed, `critic:${index}:tough`)), sinceGeneration: generation };
}
/** The panel reviewing in `generation`, oldest first. */
export function criticPanelFor(seed: number, generation: number, cfg: Config): Critic[] {
  const families = cfg.world.families, used = new Set<number>();
  const draw = (g: number, slot: number) => {
    const free = CRITICS.map((_, i) => i).filter(i => !used.has(i));
    const pool = free.length ? free : CRITICS.map((_, i) => i);
    const i = pool[Math.floor(stableUnit(seed, `critic:draw:${g}:${slot}`) * pool.length) % pool.length];
    used.add(i);
    return makeCritic(seed, i, g, families);
  };
  let panel = Array.from({ length: PANEL }, (_, slot) => draw(0, slot));
  for (let g = 1; g <= generation; g++) panel = [...panel.slice(TURNOVER), ...Array.from({ length: TURNOVER }, (_, slot) => draw(g, slot))];
  return panel;
}
export function criticPanel(seed: number, week: number, cfg: Config): Critic[] {
  return criticPanelFor(seed, criticGenerationAt(week, cfg), cfg);
}
export type CriticReview = Critic & { score: number; line: string };
/** Each critic's score = the Critics score plus a visible taste nudge, re-centred so the panel averages the Critics score. */
export function panelReviews(release: Pick<Release, 'genre' | 'critic' | 'releaseWeek' | 'criticGeneration'>, seed: number, cfg: Config): CriticReview[] {
  const panel = release.criticGeneration !== undefined ? criticPanelFor(seed, release.criticGeneration, cfg) : criticPanel(seed, release.releaseWeek, cfg);
  const w = familyWeights(cfg, release.genre);
  const raw = panel.map(c => TASTE * ((w[c.loves] ?? 0) - (w[c.toughOn] ?? 0)));
  const mean = raw.reduce((a, b) => a + b, 0) / raw.length;
  return panel.map((c, i) => {
    const nudge = raw[i] - mean, score = Math.round(Math.max(0, Math.min(10, release.critic + nudge)) * 10) / 10;
    const line = (w[c.loves] ?? 0) > 0 ? `Right up my street: I'm a sucker for ${c.loves.toLowerCase()} stories.`
      : (w[c.toughOn] ?? 0) > 0 ? `${c.toughOn} stories rarely win me over.`
      : score >= 8 ? 'A standout.' : score >= 6 ? 'Solid, confident work.' : score >= 4 ? 'Uneven, with flashes of something better.' : 'A misfire.';
    return { ...c, score, line };
  });
}

// ── Studio assistant (PROD-166) ─────────────────────────────────────────────
export const ASSISTANT = { id: 'assistant', name: 'Marnie', role: 'Studio assistant' } as const;
/** A one-line premiere comment that only states what the scores already show. */
export function assistantPremiereLine(r: Pick<Release, 'audience' | 'critic' | 'hallOfFame' | 'avgScore'>): string {
  if (r.hallOfFame) return 'Boss, this one made the Hall of Fame! People will be talking about it for years.';
  const gap = Number(r.critic.toFixed(1)) - Number(r.audience.toFixed(1));
  if (gap >= 1) return 'Critics liked it a lot more than audiences did. Great for Prestige; the box office may be quieter.';
  if (gap <= -1) return 'Audiences liked it more than the critics did. Good news for ticket sales, less so for reviews.';
  const s = r.avgScore;
  return s >= 8 ? 'Strong reviews all round. Nice work, boss.' : s >= 6 ? 'A solid release. Keep this crew working and the next one can be better.'
    : s >= 4 ? 'A mixed reception. Every film teaches the crew something.' : "Ouch. That one didn't land, but the crew learned from it.";
}

// ── Later-unlock tips (PROD-170) ───────────────────────────────────────────
export type Tip = { key: string; text: string };
export const IDLE_WEEKS = 4;
/** Keys for everything already unlocked, so a fresh studio (or an older save) doesn't get tips for its starting set. */
export function knownTipKeys(state: StudioState, cfg: Config): string[] {
  return [...state.unlockedGenres.map(g => `genre:${g}`), ...state.unlockedThemes.map(t => `theme:${t}`), `critics:${criticGenerationAt(state.week, cfg)}`];
}
const why = (state: StudioState, name: string) => state.events.slice().reverse().find(e => e.type === 'unlock' && e.message.includes(name))?.message;
/** New tips since `seen`: genre/theme unlocks, a studio expansion becoming possible, a critic turnover. */
export function newTips(state: StudioState, seen: ReadonlySet<string>, seed: number, cfg: Config, expansion?: { to: number; enabled: boolean } | null): Tip[] {
  const tips: Tip[] = [];
  for (const g of state.unlockedGenres) if (!seen.has(`genre:${g}`))
    tips.push({ key: `genre:${g}`, text: `${why(state, g) ?? `New genre unlocked: ${g}.`} You'll find ${g} in the genre picker when you plan your next movie.` });
  for (const t of state.unlockedThemes) if (!seen.has(`theme:${t}`))
    tips.push({ key: `theme:${t}`, text: `${why(state, t) ?? `New theme: ${t}.`} It's in the theme picker now.` });
  if (expansion?.enabled && !seen.has(`expand:${expansion.to}`))
    tips.push({ key: `expand:${expansion.to}`, text: `We can afford to expand the studio to ${expansion.to} seats. Have a look in Studio when you're ready.` });
  // reminders (PROD-166): in the red, or the crew sitting idle
  if (state.cash < 0) {
    const key = `red:${Math.floor(state.week / 13)}`;
    if (!seen.has(key)) tips.push({ key, text: "We're in the red, boss. We can't start a new movie until we're back in the black; a work-for-hire job in Projects is the quickest fix." });
  }
  if (!state.project && !state.contract && state.cash >= 0) {
    const since = Math.max(-1, ...state.events.filter(e => e.type === 'project_start' || e.type === 'release' || e.type === 'contract').map(e => e.week));
    if (since >= 0 && state.week - since >= IDLE_WEEKS && !seen.has(`idle:${since}`))
      tips.push({ key: `idle:${since}`, text: `The crew has been waiting ${state.week - since} weeks for their next job. Payroll keeps running, so let's plan a movie or take a work-for-hire job.` });
  }
  const g = criticGenerationAt(state.week, cfg);
  if (g > 0 && !seen.has(`critics:${g}`)) {
    const before = criticPanelFor(seed, g - 1, cfg), now = criticPanelFor(seed, g, cfg);
    const gone = before.filter(c => !now.some(n => n.name === c.name)).map(c => c.name), fresh = now.filter(c => c.sinceGeneration === g).map(c => `${c.name} (${c.outlet})`);
    tips.push({ key: `critics:${g}`, text: `${gone.join(' and ')} have retired. ${fresh.join(' and ')} now review our films, and the new generation is harder to impress.` });
  }
  return tips;
}
