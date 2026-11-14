import type { Config } from '../core/config';
import { CASH_KINDS } from '../core/events';
import { familyWeights, starFit } from '../core/stars';
import type { Release, Star, StudioState } from '../core/types';

export function starDetails(star: Star, genre: string, cfg: Config) {
  return { fame: star.fame, fit: starFit(star, genre, cfg),
    families: Object.entries(familyWeights(cfg, genre)).map(([name, weight]) =>
      ({ name, weight, skill: star.skills[name] ?? 0 })) };
}
export function movieMoney(release: Release) {
  const cost = release.laborDuring === undefined ? undefined :
    release.baseCost + release.starFee + release.campaignCost + release.laborDuring;
  return { cost, net: cost === undefined ? undefined : release.studioTake - cost };
}
export function cashActivity(state: StudioState) {
  return state.ledger.filter(entry => CASH_KINDS.has(entry.kind) && entry.kind !== 'start_cash').slice().reverse();
}
