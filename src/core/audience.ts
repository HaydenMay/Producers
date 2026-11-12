// Viewership. LOCKED causal chain: marketing + studio buzz + Star Fame + distributor reach + trends + IP fans
// -> opening. Critic score drives early weeks, Audience score drives later word of mouth. Runs end at zero.
// None of these change scores. WORKING ASSUMPTION: saturating awareness, geometric weekly retention.
import type { Config } from "./config";
import { emit, round2 } from "./events";
import { formatOf, isEpisodic } from "./formats";
import type { Release, StudioState, TrendStage } from "./types";

export interface OpeningInputs {
  reach: number;
  campaignAwareness: number;
  studioBuzz: number;
  starFame: number;
  trend: TrendStage;
  ipFans: number;
  /** Gate 3 TV: fading show-specific anticipation from a season announcement (already hiatus-adjusted) */
  anticipation?: number;
  /** Gate 3 TV: hiatus multiplier on the anticipation carried by the show's fans (1 = no effect) */
  fanAnticipationMult?: number;
  /** Gate 3 follow-up experiment: returning-viewer fatigue multiplier on the fans + announcement inputs (1 = none) */
  returningMult?: number;
  /** PROD-229: audience curiosity about a freshly unlocked genre (omitted / 0 = none) */
  freshGenre?: number;
}

export function openingTrace(inp: OpeningInputs, cfg: Config) {
  const a = cfg.audience;
  const parts = {
    base: a.baseAwareness,
    marketing: inp.campaignAwareness,
    studioBuzz: inp.studioBuzz,
    starFame: a.fameAwareness * (inp.starFame / 100),
    trend: (a.trendAwareness as Record<string, number>)[inp.trend] ?? 0,
    ipFans: a.fanAwareness * (inp.ipFans / cfg.world.marketSize) * (inp.fanAnticipationMult ?? 1) * (inp.returningMult ?? 1),
    ...(inp.anticipation !== undefined ? { announcement: inp.anticipation * (inp.returningMult ?? 1) } : {}),
    ...(inp.freshGenre ? { freshGenre: inp.freshGenre } : {}),
  };
  const exponent = Object.values(parts).reduce((x, y) => x + y, 0);
  const awareness = 1 - Math.exp(-exponent);
  const reachCap = Math.round(cfg.world.marketSize * inp.reach);
  const pool = Math.round(reachCap * awareness);
  const opening = Math.round(pool * a.openingShare);
  return { parts: Object.fromEntries(Object.entries(parts).map(([k, v]) => [k, round2(v)])), awareness: round2(awareness), reachCap, pool, opening };
}

/** Advance one release by a week. Returns studio take for the week. */
export function releaseWeek(state: StudioState, cfg: Config, rel: Release): { gross: number; studio: number; distributor: number } {
  const a = cfg.audience;
  const prev = rel.lastViewers;
  const episodic = isEpisodic(rel) && !(formatOf(rel) === "limited_series" && cfg.limitedSeries.pacing === "declining");
  let viewers: number;
  let step: { viewers: number; driver: string; episode?: number };
  if (episodic) {
    step = episodicStep(cfg, rel);
    viewers = Math.max(0, step.viewers);
  } else {
    step = a.legsModel === "diffusion" ? diffusionStep(cfg, rel) : geometricStep(cfg, rel);
    viewers = step.viewers;
    // finite unique audience: cumulative viewers can never exceed the distributor's reach cap
    viewers = Math.max(0, Math.min(viewers, rel.reachCap - rel.totalViewers));
    if (rel.weekIndex >= a.maxRunWeeks || (rel.weekIndex > 0 && viewers < a.minWeeklyViewers)) viewers = 0;
    if (rel.uniqueViewers !== undefined) {
      rel.uniqueViewers += viewers;
      rel.trace.newSamplersThisWeek = viewers;
    }
  }
  // PROD-220: crowd-pleasers sell better per viewer (merch, repeat viewing); awards bait slightly worse
  const am = rel.approach ? ((cfg.production as { approaches?: { grossMult?: Record<string, number> } }).approaches?.grossMult?.[rel.approach] ?? 1) : 1;
  const gross = round2(viewers * grossPerViewer(cfg, rel) * am);
  const distributor = round2(gross * rel.royalty);
  const studio = round2(gross - distributor);
  const retention = rel.weekIndex === 0 || prev === 0 ? 1 : round2(viewers / prev);
  rel.weekly.push({ week: state.week, viewers, gross, studio, distributor, retention, driver: step.driver, ...(step.episode !== undefined ? { episode: step.episode } : {}) });
  rel.lastViewers = viewers;
  rel.totalViewers += viewers;
  rel.grossTotal = round2(rel.grossTotal + gross);
  rel.distributorTake = round2(rel.distributorTake + distributor);
  rel.studioTake = round2(rel.studioTake + studio);
  rel.weekIndex += 1;
  feedbackEvent(state, rel, prev, viewers);
  if (episodic) {
    if (step.episode !== undefined) rel.episodesAired = step.episode;
    if (rel.weekIndex >= (rel.episodes ?? 0) + episodicTail(cfg, rel).weeks + 1) rel.active = false; // finite: episodes + short tail
  } else if (viewers === 0) rel.active = false;
  return { gross, studio, distributor };
}

/** Money per viewer by format and route. Streaming Originals earn NO traditional revenue (subscribers only). */
/** Gate 4 SENSITIVITY knob (default 5 = every earlier gate): the score at which in-run word of mouth turns from bad to good. */
const pivotOf = (cfg: Config) => (cfg.audience as { qualityPivot?: number }).qualityPivot ?? 5;
/** Producers dud fix (PROD-092/208): MOVIE-only overrides of the pivot and bad-reception decay. null = use the global knob. */
export const moviePivotOf = (cfg: Config, rel: Release) => (formatOf(rel) === "movie" ? ((cfg.audience as { movieQualityPivot?: number | null }).movieQualityPivot ?? null) : null) ?? pivotOf(cfg);
export const movieBadDecayOf = (cfg: Config, rel: Release) => (formatOf(rel) === "movie" ? ((cfg.audience.diffusion as { movieBadInterestDecay?: number | null }).movieBadInterestDecay ?? null) : null) ?? cfg.audience.diffusion.badInterestDecay;

export function grossPerViewer(cfg: Config, rel: Release): number {
  if (rel.route === "original") return 0;
  const f = formatOf(rel);
  if (f === "tv") return cfg.tv.grossPerEpisodeViewer;
  if (f === "limited_series") return cfg.limitedSeries.pacing === "declining" ? cfg.limitedSeries.decliningGrossPerViewer : cfg.limitedSeries.grossPerEpisodeViewer;
  return cfg.world.grossPerViewer;
}

function episodicTail(cfg: Config, rel: Release): { weeks: number; share: number } {
  return formatOf(rel) === "tv" ? { weeks: cfg.tv.tailWeeks, share: cfg.tv.tailShare } : { weeks: cfg.limitedSeries.tailWeeks, share: cfg.limitedSeries.tailShare };
}

/**
 * TEST ASSUMPTION (Gate 3): weekly episode audiences. One episode airs per week; weekly audience =
 * returning viewers (retention from critic early / Audience later) + newly drawn-in people (critic buzz
 * early, word of mouth later) who have never sampled the show. Distinct samplers never exceed the reach
 * cap. After the last episode a short catch-up tail decays to zero; the run always ends.
 */
function episodicStep(cfg: Config, rel: Release): { viewers: number; driver: string; episode?: number } {
  const e = cfg.tv.episodeModel;
  const n = rel.episodes ?? 1;
  const k = rel.weekIndex;
  const tail = episodicTail(cfg, rel);
  rel.uniqueViewers ??= 0;
  if (k === 0) {
    const pool = rel.trace.pool as number;
    // premiere: a larger share of the aware pool tunes in to episode 1 than to a movie's opening week
    const pm = (rel.trace.premiereMult as number | undefined) ?? 1; // follow-up experiment (viewer fatigue on the premiere share)
    const v = Math.min(Math.round(pool * e.premiereShare * pm), rel.reachCap);
    rel.openingViewers = v;
    rel.aware = Math.max(0, pool - v);
    rel.uniqueViewers = v;
    rel.trace.newSamplersThisWeek = v;
    return { viewers: v, driver: `episode 1 premiere`, episode: 1 };
  }
  if (k < n) {
    const early = k <= e.criticWeeks;
    const qC = (rel.critic - pivotOf(cfg)) / 5;
    const qA = (rel.audience - pivotOf(cfg)) / 5;
    const q = early ? qC : qA;
    const retention = Math.max(e.retentionMin, Math.min(e.retentionMax, e.baseRetention + e.retentionWeight * q));
    const retained = rel.lastViewers * retention;
    const aware = rel.aware ?? 0;
    const unaware = Math.max(0, rel.reachCap - rel.uniqueViewers - aware);
    const newlyAware = early ? unaware * e.buzzRate * Math.max(0, qC) : Math.min(unaware, e.womPerViewer * Math.max(0, qA) * rel.lastViewers);
    const decay = Math.min(0.95, e.interestDecay + cfg.audience.diffusion.badInterestDecay * Math.max(0, -q));
    const pool = aware * (1 - decay) + newlyAware;
    const watch = Math.max(0.02, Math.min(0.95, e.watchRate * (1 + e.watchRateQualityWeight * q)));
    const fresh = Math.min(Math.round(pool * watch), Math.max(0, rel.reachCap - rel.uniqueViewers));
    rel.aware = Math.max(0, pool - fresh);
    rel.uniqueViewers += fresh;
    rel.trace.newSamplersThisWeek = fresh;
    const v = Math.round(retained + fresh);
    return { viewers: v, driver: `episode ${k + 1}: ${Math.round(retention * 100)}% kept (${early ? `critic ${rel.critic}` : `audience ${rel.audience}`}), +${fresh.toLocaleString()} new`, episode: k + 1 };
  }
  rel.trace.newSamplersThisWeek = 0;
  const t = k - n + 1;
  if (t <= tail.weeks) {
    const lastEp = rel.weekly[n - 1]?.viewers ?? 0;
    return { viewers: Math.round(lastEp * Math.pow(tail.share, t)), driver: `catch-up viewing (tail week ${t}/${tail.weeks})` };
  }
  return { viewers: 0, driver: "run ended" };
}

/** Legacy (Gate 2) model: geometric weekly retention, critic early / audience later. Strong films always decline. */
function geometricStep(cfg: Config, rel: Release): { viewers: number; driver: string } {
  const a = cfg.audience;
  if (rel.weekIndex === 0) return { viewers: rel.openingViewers, driver: "opening" };
  const early = rel.weekIndex <= a.criticWeeks;
  const score = early ? rel.critic : rel.audience;
  const weight = early ? a.criticRetentionWeight : a.audienceRetentionWeight;
  const retention = Math.max(a.retentionMin, Math.min(a.retentionMax, a.baseRetention + weight * ((score - 5) / 5)));
  return { viewers: Math.round(rel.lastViewers * retention), driver: early ? `critic ${rel.critic} (early buzz)` : `audience ${rel.audience} (word of mouth)` };
}

/**
 * WORKING ASSUMPTION (Gate 2.5 candidate): finite awareness diffusion.
 * - Opening: a share of the initially aware people watch.
 * - Early weeks: critic reviews make NEW people aware (buzz), only if reviews are good.
 * - Later weeks: each recent viewer recruits new people in proportion to how much audiences liked it (word of mouth).
 * - Aware-but-unwatched people lose interest over time, faster when the driving score is bad.
 * Cumulative viewers can never exceed the reach cap, so runs stay finite and no title grows forever.
 */
function diffusionStep(cfg: Config, rel: Release): { viewers: number; driver: string } {
  const a = cfg.audience;
  const d = a.diffusion;
  if (rel.weekIndex === 0) {
    const aware0 = rel.trace.pool as number;
    const viewers = rel.openingViewers;
    rel.aware = Math.max(0, aware0 - viewers);
    return { viewers, driver: "opening (aware people watching)" };
  }
  const early = rel.weekIndex <= a.criticWeeks;
  const pivot = moviePivotOf(cfg, rel);
  const qC = (rel.critic - pivot) / 5;
  const qA = (rel.audience - pivot) / 5;
  const q = early ? qC : qA;
  const aware = rel.aware ?? 0;
  const unaware = Math.max(0, rel.reachCap - rel.totalViewers - aware);
  const newlyAware = early ? unaware * d.criticBuzzRate * Math.max(0, qC) : Math.min(unaware, d.womPerViewer * Math.max(0, qA) * rel.lastViewers);
  const decay = Math.min(0.95, d.interestDecay + movieBadDecayOf(cfg, rel) * Math.max(0, -q));
  const pool = aware * (1 - decay) + newlyAware;
  const watchRate = Math.max(0.02, Math.min(0.95, d.watchRate * (1 + d.watchRateQualityWeight * q)));
  const viewers = Math.round(pool * watchRate);
  rel.aware = Math.max(0, pool - viewers);
  const driver = early
    ? `critic ${rel.critic}: ${newlyAware > 0 ? `+${Math.round(newlyAware).toLocaleString()} newly aware (buzz)` : "no buzz"}`
    : `audience ${rel.audience}: ${newlyAware > 0 ? `+${Math.round(newlyAware).toLocaleString()} newly aware (word of mouth)` : "no word of mouth"}`;
  return { viewers, driver };
}

/** Feedback popups at turning points. They describe what ACTUALLY happened this week (direction is checked). */
function feedbackEvent(state: StudioState, rel: Release, prev: number, now: number): void {
  const data = { releaseId: rel.id, prev, now, direction: now > prev ? "up" : now < prev ? "down" : "flat" };
  const up = now > prev;
  const t = rel.title;
  if (rel.weekIndex === 1) {
    emit(state, "feedback", `${t} opens to ${now.toLocaleString()} viewers.`, data);
  } else if (rel.weekIndex === 2) {
    if (rel.critic >= 7) emit(state, "feedback", up ? `Critics are raving about ${t}. Curious viewers are tuning in!` : `Critics love ${t}, but turnout is easing off after the opening.`, data);
    else if (rel.critic < 4.5) emit(state, "feedback", up ? `Despite harsh reviews, ${t} is holding on.` : `Harsh reviews are scaring off audiences for ${t}.`, data);
  } else if (rel.weekIndex === 4) {
    if (rel.audience >= 7) emit(state, "feedback", up ? `Fans can't stop talking about ${t}. Viewership is climbing!` : `Word of mouth on ${t} is good, but its audience is winding down.`, data);
    else if (rel.audience < 4.5) emit(state, "feedback", up ? `${t} is finding a few viewers despite bad word of mouth.` : `Word of mouth on ${t} is brutal. Viewers are dropping fast.`, data);
  } else if (rel.weekIndex > 4 && up && now > 0 && !state.events.some((e) => e.type === "feedback" && e.data?.releaseId === rel.id && String(e.message).includes("still climbing"))) {
    emit(state, "feedback", `Word of mouth keeps spreading: ${t} is still climbing (${prev.toLocaleString()} → ${now.toLocaleString()}).`, data);
  }
}

/** IP fans after a run ends: reception x exposure grows fans; hyped duds lose them. No studio-wide pool. */
export function updateIpFans(state: StudioState, cfg: Config, rel: Release): Record<string, number> {
  const ip = state.ips[rel.ipId];
  const before = ip.fans;
  const quality = (rel.avgScore - 5) / 5;
  let delta = 0;
  const exposure = rel.uniqueViewers ?? rel.totalViewers; // TV/limited: distinct people, not viewer-episodes
  if (quality >= 0) delta = exposure * cfg.audience.fanConversion * quality;
  else {
    delta = -before * cfg.audience.backlashRate * -quality; // existing fans leave
    delta -= 0; // no negative fans from nothing
  }
  ip.fans = Math.max(0, Math.round(before + delta));
  emit(state, "ip_fans", `${ip.name} fans: ${before.toLocaleString()} → ${ip.fans.toLocaleString()} (avg score ${rel.avgScore}, ${rel.totalViewers.toLocaleString()} viewers).`, { ipId: ip.id });
  return { before, after: ip.fans, delta: Math.round(delta) + 0 };
}

export function decayFans(state: StudioState, cfg: Config): void {
  const k = 1 - cfg.audience.fanDecayPerYear / cfg.time.weeksPerYear;
  for (const id of Object.keys(state.ips).sort()) {
    const ip = state.ips[id];
    if (!cfg.audience.fanDecayExact) {
      ip.fans = Math.round(ip.fans * k);
      continue;
    }
    // Carry the unrounded count; if anything else changed ip.fans since, restart from the displayed value.
    const base = ip.fansExact !== undefined && Math.round(ip.fansExact) === ip.fans ? ip.fansExact : ip.fans;
    ip.fansExact = base * k;
    ip.fans = Math.round(ip.fansExact);
  }
}
