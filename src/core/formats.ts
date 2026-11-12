// Gate 3 format rules: limited series and renewable TV. Pure helpers used by simulation/production/audience.
// LOCKED (v9.61): limited series never renews; TV renews by season average (4.0 renewable, 9.0 HoF);
// episode caps come from studio Prestige (not show history); genre locked for a show; a theme twist
// changes the theme pairing; normal hiatus carries no penalty; announcements are fading show-specific hype.
// Every number used here lives in config (cfg.limitedSeries / cfg.tv) and is a TEST ASSUMPTION.
import type { Config } from "./config";
import { round2, thresholdScore } from "./events";
import { GRADE_VALUE, comboKey } from "./distribution";
import type { Format, IpLine, PlanDecision, Project, Release, StudioState } from "./types";

export function formatOf(x: { format?: Format } | null | undefined): Format {
  return x?.format ?? "movie";
}

export function limitedSeriesAvailable(state: StudioState, cfg: Config): boolean {
  return !!cfg.formats.limitedSeries && state.counters.productionsCompleted >= cfg.limitedSeries.availableAfterProductions;
}

export function tvAvailable(state: StudioState, cfg: Config): boolean {
  return !!cfg.formats.tv && !!state.tvUnlocked;
}

/** Studio-wide maximum season order from Prestige (never from the show's own history; no cash bypass). */
export function maxEpisodes(state: StudioState, cfg: Config): number {
  let max = 0;
  for (const c of cfg.tv.episodeCaps) if (state.prestige >= c.prestige) max = Math.max(max, c.maxEpisodes);
  return max;
}

export function allowedOrders(state: StudioState, cfg: Config): number[] {
  const cap = maxEpisodes(state, cfg);
  return (cfg.tv.orderSizes as number[]).filter((n) => n <= cap);
}

/** Unavoidable base cost and production length by format (and episode count for TV). */
export function formatSpec(cfg: Config, format: Format, episodes?: number): { baseCost: number; durationWeeks: number; episodes: number } {
  if (format === "limited_series") return { baseCost: cfg.limitedSeries.baseCost, durationWeeks: cfg.limitedSeries.durationWeeks, episodes: cfg.limitedSeries.episodes };
  if (format === "tv") {
    const n = episodes ?? (cfg.tv.orderSizes as number[])[0];
    return { baseCost: cfg.tv.setupCost + cfg.tv.perEpisodeCost * n, durationWeeks: Math.round(cfg.tv.durationBaseWeeks + cfg.tv.weeksPerEpisode * n), episodes: n };
  }
  return { baseCost: cfg.production.movie.baseCost, durationWeeks: cfg.production.movie.durationWeeks, episodes: 0 };
}

export function planBaseCost(cfg: Config, plan: PlanDecision): number {
  return formatSpec(cfg, formatOf(plan), plan.episodes).baseCost;
}

/** Cheapest format currently makeable: what the lifeline offer must always cover. */
export function cheapestBaseCost(cfg: Config): number {
  return cfg.production.movie.baseCost; // movies are always available and cheapest in every Gate 3 config
}

export function seasonsOf(state: StudioState, ipId: string): Release[] {
  return state.releases.filter((r) => r.ipId === ipId && formatOf(r) === "tv");
}

/** LOCKED: average of Audience and Critic. 4.0 renewable when renewalInclusive (named assumption). */
export function renewable(avg: number, cfg: Config): boolean {
  const a = thresholdScore(avg, cfg);
  return cfg.tv.renewalInclusive ? a >= cfg.tv.renewalThreshold : a > cfg.tv.renewalThreshold;
}

/** What a show's latest season has made, as the renewal screen shows it (2026-11-12; audit 2026-11-12b):
 *  - finished season: its exact all-in result (takings minus direct costs and the crew wages accrued making it);
 *  - just released, nothing aired yet: "too early to tell" (no projection) plus the previous finished season's result;
 *  - airing: last week's takings for each episode still to air (rough; rarely gets profit vs loss wrong). */
export interface ShowMoney {
  season: number;
  airing: boolean;
  tooEarly: boolean;
  earnedSoFar: number;
  cost: number;
  netSoFar: number;
  episodesLeft: number;
  /** null while it's too early to tell */
  projectedNet: number | null;
  productionWeeks: number;
  previous: { season: number; net: number; perWeek: number } | null;
}
export function showMoney(state: StudioState, cfg: Config, ipId: string): ShowMoney | null {
  const rels = state.releases.filter((r) => r.ipId === ipId);
  const r = rels.at(-1);
  if (!r || r.route === "original") return null; // Originals are judged by subscribers, not box office
  const weeksOf = (x: Release) => (x.startWeek !== undefined ? x.releaseWeek - x.startWeek : formatSpec(cfg, formatOf(x), x.episodes).durationWeeks);
  const netOf = (x: Release) => x.studioTake + x.surplusKept - x.cashOverrun - (x.laborDuring ?? 0);
  const prevIdx = rels.slice(0, -1).map((x) => !x.active).lastIndexOf(true);
  const prevRel = prevIdx >= 0 ? rels[prevIdx] : null;
  const previous = prevRel ? { season: prevIdx + 1, net: round2(netOf(prevRel)), perWeek: round2(netOf(prevRel) / Math.max(1, weeksOf(prevRel))) } : null;
  const earned = r.studioTake + r.surplusKept;
  const cost = r.cashOverrun + (r.laborDuring ?? 0);
  const net = earned - cost;
  const tooEarly = r.active && r.weekly.length === 0;
  const left = r.active ? Math.max(0, (r.episodes ?? 0) - r.weekIndex) : 0;
  let projected: number | null = round2(net);
  if (tooEarly) projected = null;
  // While airing: last week's takings for each episode still to air. Tested 2026-11-12b against a projection from the
  // previous season's curve: the curve is closer on average ($31K vs $76K) but calls profit vs loss wrong 2.5x as often
  // (6.2% vs 2.4% of readings), and the sign is what a renewal decision needs.
  else if (r.active) projected = round2(net + (r.weekly.at(-1)?.studio ?? 0) * left);
  return {
    season: rels.length,
    airing: r.active,
    tooEarly,
    earnedSoFar: round2(earned),
    cost: round2(cost),
    netSoFar: round2(net),
    episodesLeft: left,
    projectedNet: projected,
    productionWeeks: weeksOf(r),
    previous,
  };
}

export function renewalStatus(state: StudioState, cfg: Config, ip: IpLine): { eligible: boolean; reason: string; lastAvg: number | null } {
  if (formatOf(ip) !== "tv") return { eligible: false, reason: formatOf(ip) === "limited_series" ? "limited series are self-contained and never renew" : "not a TV show", lastAvg: null };
  const last = seasonsOf(state, ip.id).at(-1);
  if (!last) return { eligible: false, reason: "no season released yet", lastAvg: null };
  if (!renewable(last.avgScore, cfg)) return { eligible: false, reason: `last season averaged ${last.avgScore} (< ${cfg.tv.renewalThreshold}): cannot renew`, lastAvg: last.avgScore };
  return { eligible: true, reason: `last season averaged ${last.avgScore} (≥ ${cfg.tv.renewalThreshold}): renewable`, lastAvg: last.avgScore };
}

/** Show-age fatigue for the next season: barely noticeable early, then faster; great quality slows it, never stops it. */
export function showFatigue(cfg: Config, fatigueSeasons: number, prevAvg: number | null): { fatigue: number; base: number; slow: number } {
  const f = cfg.tv.fatigue;
  const base = Math.min(f.max, f.perSeason * Math.pow(Math.max(0, fatigueSeasons), f.exponent));
  const slow = prevAvg === null ? 0 : f.qualitySlow * Math.max(0, Math.min(1, (prevAvg - 7) / 3));
  return { fatigue: Math.round(base * (1 - slow) * 1000) / 1000, base: Math.round(base * 1000) / 1000, slow: Math.round(slow * 1000) / 1000 };
}

/**
 * EXPERIMENT (Gate 3 follow-up, default off): returning-viewer interest fatigue for the next season's opening.
 * Exposure = seasons aired (basis "seasons") or episodes aired / episodesPerStep ("episodes"), minus good-twist resets.
 * Fatigue grows past the onset, is capped, and a great previous season slows it. Returns null when disabled or not a renewal.
 */
export function viewerFatigue(state: StudioState, cfg: Config, ip: IpLine): { mult: number; units: number; base: number; slow: number; basis: string } | null {
  const v = cfg.tv.viewerFatigue;
  if (!v.enabled || formatOf(ip) !== "tv") return null;
  const prior = seasonsOf(state, ip.id);
  if (!prior.length) return null;
  const raw = v.basis === "episodes" ? prior.reduce((a, r) => a + (r.episodes ?? 0), 0) / v.episodesPerStep : prior.length;
  const units = Math.max(0, raw - v.goodTwistReset * (ip.viewerTwistResets ?? 0));
  const base = Math.min(v.max, v.perStep * Math.pow(Math.max(0, units - v.onset), v.exponent));
  const prevAvg = prior.at(-1)!.avgScore;
  const slow = v.qualitySlow * Math.max(0, Math.min(1, (prevAvg - 7) / 3));
  const r3 = (x: number) => Math.round(x * 1000) / 1000;
  return { mult: r3(1 - base * (1 - slow)), units: r3(units), base: r3(base), slow: r3(slow), basis: v.basis };
}

/**
 * Show health (designer 2026-11-11, PROD-139): how many of last season's viewers come back depends on how good
 * each earlier season was. health = product over prior seasons of clamp(1 + slope x (avg - pivot)/5), kept in
 * [floor, 1]; a great season can recover up to full health, never above. Multiplies the season's reach cap.
 */
export function showHealth(state: StudioState, cfg: Config, ip: IpLine): { mult: number; seasons: { n: number; avg: number; step: number }[] } | null {
  const h = (cfg.tv as { showHealth?: { enabled?: boolean; pivot: number; slope: number; floor: number } }).showHealth;
  if (!h?.enabled || formatOf(ip) !== "tv") return null;
  const prior = seasonsOf(state, ip.id);
  if (!prior.length) return null;
  let mult = 1;
  const seasons = prior.map((r, i) => {
    const step = 1 + (h.slope * (r.avgScore - h.pivot)) / 5;
    mult = Math.max(h.floor, Math.min(1, mult * step));
    return { n: i + 1, avg: r.avgScore, step: Math.round(step * 1000) / 1000 };
  });
  return { mult: Math.round(mult * 1000) / 1000, seasons };
}

/** Twist outcome from the twist combo's grades (revealed at release, like any first use). */
export function twistOutcome(state: StudioState, cfg: Config, genre: string, theme: string): "good" | "bad" | "neutral" {
  const g = state.world.comboGrades[comboKey(genre, theme)];
  const v = (GRADE_VALUE[g.audience] + GRADE_VALUE[g.critic]) / 2;
  if (v >= cfg.tv.twist.goodGradeMin) return "good";
  if (v <= cfg.tv.twist.badGradeMax) return "bad";
  return "neutral";
}

/** Hiatus: weeks since the show's last season finished airing. Only anticipation is affected. */
export function hiatusMultiplier(state: StudioState, cfg: Config, ip: IpLine): { gapWeeks: number; mult: number } {
  if (ip.lastAiredWeek === undefined) return { gapWeeks: 0, mult: 1 };
  const gap = Math.max(0, state.week - ip.lastAiredWeek);
  const h = cfg.tv.hiatus;
  const over = Math.max(0, gap - h.graceWeeks);
  return { gapWeeks: gap, mult: round2(Math.max(h.minMult, 1 - (h.penaltyPerYear * over) / cfg.time.weeksPerYear)) };
}

/** Contract variant B: the continuing partner's advance for the next season (explicit, auditable function). */
export function partnerAdvance(cfg: Config, baseCost: number, lastRoi: number, trust: number): number {
  const b = cfg.tv.contract.B;
  const cover = Math.max(b.minCover, Math.min(b.maxCover, b.baseCover + b.roiWeight * (lastRoi - 1)));
  const trustFactor = cfg.distribution.trustOfferFactorBase + cfg.distribution.trustOfferFactorPerPoint * trust;
  return Math.round((baseCost * cover * trustFactor) / 1000) * 1000;
}

export function isEpisodic(rel: Pick<Release, "format">): boolean {
  const f = formatOf(rel);
  return f === "tv" || f === "limited_series";
}

export function projectEpisodes(p: Project): number {
  return p.episodes ?? 0;
}
