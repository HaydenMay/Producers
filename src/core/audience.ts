// Viewership. LOCKED causal chain: marketing + studio buzz + Star Fame + distributor reach + trends + IP fans
// -> opening. Critic score drives early weeks, Audience score drives later word of mouth. Runs end at zero.
// None of these change scores. WORKING ASSUMPTION: saturating awareness, geometric weekly retention.
import type { Config } from "./config";
import { emit, round2 } from "./events";
import type { Release, StudioState, TrendStage } from "./types";

export interface OpeningInputs {
  reach: number;
  campaignAwareness: number;
  studioBuzz: number;
  starFame: number;
  trend: TrendStage;
  ipFans: number;
}

export function openingTrace(inp: OpeningInputs, cfg: Config) {
  const a = cfg.audience;
  const parts = {
    base: a.baseAwareness,
    marketing: inp.campaignAwareness,
    studioBuzz: inp.studioBuzz,
    starFame: a.fameAwareness * (inp.starFame / 100),
    trend: (a.trendAwareness as Record<string, number>)[inp.trend] ?? 0,
    ipFans: a.fanAwareness * (inp.ipFans / cfg.world.marketSize),
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
  let viewers: number;
  let retention = 1;
  let driver = "opening";
  if (rel.weekIndex === 0) {
    viewers = rel.openingViewers;
  } else {
    const early = rel.weekIndex <= a.criticWeeks;
    const score = early ? rel.critic : rel.audience;
    const weight = early ? a.criticRetentionWeight : a.audienceRetentionWeight;
    retention = Math.max(a.retentionMin, Math.min(a.retentionMax, a.baseRetention + weight * ((score - 5) / 5)));
    driver = early ? `critic ${rel.critic} (early buzz)` : `audience ${rel.audience} (word of mouth)`;
    viewers = Math.round(rel.lastViewers * retention);
  }
  // can't exceed the people who could ever see it. WORKING ASSUMPTION: word of mouth can carry a title past its
  // initial awareness pool, up to the distributor's reach cap (good legs reach new people; reach still limits).
  const remaining = Math.max(0, rel.reachCap - rel.totalViewers);
  viewers = Math.min(viewers, remaining);
  if (rel.weekIndex >= a.maxRunWeeks || (rel.weekIndex > 0 && viewers < a.minWeeklyViewers)) viewers = 0;
  const gross = round2(viewers * cfg.world.grossPerViewer);
  const distributor = round2(gross * rel.royalty);
  const studio = round2(gross - distributor);
  rel.weekly.push({ week: state.week, viewers, gross, studio, distributor, retention: round2(retention), driver });
  rel.lastViewers = viewers;
  rel.totalViewers += viewers;
  rel.grossTotal = round2(rel.grossTotal + gross);
  rel.distributorTake = round2(rel.distributorTake + distributor);
  rel.studioTake = round2(rel.studioTake + studio);
  rel.weekIndex += 1;
  feedbackEvent(state, rel, retention);
  if (viewers === 0) rel.active = false;
  return { gross, studio, distributor };
}

/** Feedback popups at turning points only (they reflect what already happened). */
function feedbackEvent(state: StudioState, rel: Release, retention: number): void {
  if (rel.weekIndex === 1) emit(state, "feedback", `${rel.title} opens to ${rel.openingViewers.toLocaleString()} viewers.`, { releaseId: rel.id });
  else if (rel.weekIndex === 2) {
    if (rel.critic >= 7) emit(state, "feedback", `Critics are raving about ${rel.title}. Curious viewers are tuning in!`, { releaseId: rel.id, retention });
    else if (rel.critic < 4.5) emit(state, "feedback", `Harsh reviews are scaring off audiences for ${rel.title}.`, { releaseId: rel.id, retention });
  } else if (rel.weekIndex === 4) {
    if (rel.audience >= 7) emit(state, "feedback", `Fans can't stop talking about ${rel.title}. Word of mouth is strong!`, { releaseId: rel.id, retention });
    else if (rel.audience < 4.5) emit(state, "feedback", `Word of mouth on ${rel.title} is brutal. Viewers are dropping fast.`, { releaseId: rel.id, retention });
  }
}

/** IP fans after a run ends: reception x exposure grows fans; hyped duds lose them. No studio-wide pool. */
export function updateIpFans(state: StudioState, cfg: Config, rel: Release): Record<string, number> {
  const ip = state.ips[rel.ipId];
  const before = ip.fans;
  const quality = (rel.avgScore - 5) / 5;
  let delta = 0;
  if (quality >= 0) delta = rel.totalViewers * cfg.audience.fanConversion * quality;
  else {
    delta = -before * cfg.audience.backlashRate * -quality; // existing fans leave
    delta -= 0; // no negative fans from nothing
  }
  ip.fans = Math.max(0, Math.round(before + delta));
  emit(state, "ip_fans", `${ip.name} fans: ${before.toLocaleString()} → ${ip.fans.toLocaleString()} (avg score ${rel.avgScore}, ${rel.totalViewers.toLocaleString()} viewers).`, { ipId: ip.id });
  return { before, after: ip.fans, delta: Math.round(delta) };
}

export function decayFans(state: StudioState, cfg: Config): void {
  const k = 1 - cfg.audience.fanDecayPerYear / cfg.time.weeksPerYear;
  for (const id of Object.keys(state.ips).sort()) state.ips[id].fans = Math.round(state.ips[id].fans * k);
}
