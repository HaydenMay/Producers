// PROD-034 in the game preview: at planning, pick a new story or continue one of your movie IPs as a sequel, reboot or
// spinoff. The copy only states rules the simulation actually applies (PROD-058, 086, 096, 159). Presentation only.
import type { PlanDecision, StudioState } from '../core/types';

export type Continuation = 'sequel' | 'reboot' | 'spinoff';
export const CONTINUATIONS: readonly Continuation[] = ['sequel', 'reboot', 'spinoff'];
export const RELATION_COPY: Record<Continuation, { name: string; detail: string; start: string }> = {
  sequel: { name: 'Sequel', start: 'Start sequel', detail: 'Keeps every fan. Same genre and theme; audiences mind the repeat less than with a new story. Replacing the lead hurts your relationship with them.' },
  reboot: { name: 'Reboot', start: 'Start reboot', detail: 'Keeps every fan. Same genre and theme, judged like a fresh take on it, and you can recast the lead freely.' },
  spinoff: { name: 'Spinoff', start: 'Start spinoff', detail: 'Starts a new line that brings along about half the fans. Same genre, any theme.' },
};

export type StoryLine = {
  ipId: string; name: string; titles: number; fans: number; lastTitle: string; lastScore: number;
  hallOfFame: number; lead?: string; relations: Continuation[];
};

/** Your movie IPs that the simulation currently offers continuations for, most recent first. */
export function storyLines(state: StudioState, plans: readonly PlanDecision[]): StoryLine[] {
  const ids = [...new Set(plans.filter(p => p.ipRelation !== 'new' && p.parentIpId).map(p => p.parentIpId!))];
  const lines = ids.flatMap(ipId => {
    const ip = state.ips[ipId], entries = state.releases.filter(r => r.ipId === ipId), last = entries.at(-1);
    if (!ip || !last) return [];
    const lead = ip.establishedStarId ? state.stars[ip.establishedStarId] : undefined;
    return [{
      ipId, name: ip.name, titles: entries.length, fans: ip.fans, lastTitle: last.title, lastScore: last.avgScore,
      hallOfFame: entries.filter(r => r.hallOfFame).length, ...(lead && !lead.retired ? { lead: lead.name } : {}),
      relations: CONTINUATIONS.filter(c => plans.some(p => p.parentIpId === ipId && p.ipRelation === c)),
    } satisfies StoryLine];
  });
  const latest = (l: StoryLine) => Math.max(...state.releases.filter(r => r.ipId === l.ipId).map(r => r.releaseWeek));
  return lines.sort((a, b) => latest(b) - latest(a) || a.name.localeCompare(b.name));
}

/** The plans for the chosen story: new stories, or one IP's sequel / reboot / spinoff. */
export function plansForStory(plans: readonly PlanDecision[], ipId: string | null, relation: Continuation): PlanDecision[] {
  return ipId === null ? plans.filter(p => p.ipRelation === 'new') : plans.filter(p => p.parentIpId === ipId && p.ipRelation === relation);
}

export function storySummary(l: StoryLine): string {
  const parts = [`${l.titles} ${l.titles === 1 ? 'film' : 'films'}`, `${l.fans.toLocaleString('en-US')} fans`, `last: ${l.lastTitle} (${l.lastScore.toFixed(1)})`];
  if (l.hallOfFame) parts.push(`${l.hallOfFame} in the Hall of Fame`);
  if (l.lead) parts.push(`lead: ${l.lead}`);
  return parts.join(' · ');
}
