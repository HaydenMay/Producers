// Production flow: plan -> pitch -> 0–40 writing -> 40% casting -> 40–80 filming -> 80% marketing ->
// 80–100 editing -> release. One production at a time. Releases earn in the background.
import type { Config } from "./config";
import { emit, newId, round2 } from "./events";
import { payProjectExpense, projectFunds, receiveAdvance, transferSurplus, spendableCash } from "./economy";
import { staffWorkWeek, phaseOf } from "./staff";
import { applyRecastPenalty, applyStarCareer, buildAuditions, starFit } from "./stars";
import { comboKey, updateTrust } from "./distribution";
import { avgScore, computeScores, isHallOfFame, meterQuality, eraBar, expectationsAt } from "./scoring";
import { openingTrace, updateIpFans } from "./audience";
import { evaluatePrestige } from "./prestige";
import { awardGenreXp, genreBonus, genreLevel, maybeStaffPitch } from "./progression";
import { pick } from "./rng";
import { formatOf, formatSpec, hiatusMultiplier, seasonsOf, showFatigue, twistOutcome } from "./formats";
import { onRunEnded } from "./streaming";
import type { Offer, PlanDecision, Project, Release, ReleaseRoute, StudioState } from "./types";

const TITLE_WORDS = ["Frequency", "Night", "Signal", "Protocol", "Run", "Echo", "Legacy", "Rising", "Code", "Storm", "Shadow", "Horizon", "Pulse", "Edge"];

function makeTitle(state: StudioState, plan: PlanDecision): string {
  if (plan.parentIpId && state.ips[plan.parentIpId]) {
    const ip = state.ips[plan.parentIpId];
    if (plan.ipRelation === "sequel") return `${ip.name} ${ip.titles.length + 1}`;
    if (plan.ipRelation === "reboot") return `${ip.name} (Reboot)`;
    if (plan.ipRelation === "spinoff") return `${ip.name}: ${pick(state.rng, "names", TITLE_WORDS)}`;
    if (plan.ipRelation === "season") return `${ip.name}: Season ${seasonsOf(state, ip.id).length + 1}`;
  }
  return `${pick(state.rng, "names", ["Dead", "Last", "Iron", "Silver", "Broken", "Red", "Midnight", "Lost", "Wild", "Hollow"])} ${pick(state.rng, "names", TITLE_WORDS)}`;
}

export function startProject(state: StudioState, cfg: Config, plan: PlanDecision, offer: Offer | null, route: ReleaseRoute = "traditional"): Project {
  const format = formatOf(plan);
  const fmt = formatSpec(cfg, format, plan.episodes);
  const title = makeTitle(state, plan);
  // IP relationship is an explicit player decision
  let ipId: string;
  if (plan.ipRelation === "sequel" || plan.ipRelation === "reboot" || plan.ipRelation === "season") {
    if (!plan.parentIpId || !state.ips[plan.parentIpId]) throw new Error("Sequel/reboot/season needs an existing IP");
    ipId = plan.parentIpId;
  } else {
    ipId = newId(state, "ip");
    const inherited = plan.ipRelation === "spinoff" && plan.parentIpId ? Math.round(state.ips[plan.parentIpId].fans * cfg.audience.spinoffFanShare) : 0;
    state.ips[ipId] = { id: ipId, name: title, fans: inherited, titles: [], ...(format !== "movie" ? { format } : {}), ...(format === "tv" ? { showTheme: plan.theme, fatigueSeasons: 0, partner: null } : {}) };
  }
  if (format === "tv") {
    // contract variant B bookkeeping: a non-lifeline distributor becomes (or stays) the show's partner; walking away ends it
    const ip = state.ips[ipId];
    ip.partner = offer && !offer.lifeline ? { distributorId: offer.distributorId, royalty: offer.royalty, lastAdvance: offer.advance, lastRoi: ip.partner?.distributorId === offer.distributorId ? ip.partner.lastRoi : 1 } : null;
  }
  const p: Project = {
    id: newId(state, "proj"),
    title,
    format,
    genre: plan.genre,
    theme: plan.theme,
    ipRelation: plan.ipRelation,
    ipId,
    parentIpId: plan.parentIpId,
    startWeek: state.week,
    durationWeeks: fmt.durationWeeks,
    weeksWorked: 0,
    progress: 0,
    baseCost: fmt.baseCost,
    distributorId: offer ? offer.distributorId : null,
    advance: 0,
    royalty: offer ? offer.royalty : 0,
    reach: offer ? offer.reach : route === "original" ? cfg.streaming.originalReach : cfg.distribution.selfFundReach,
    unspentAdvance: 0,
    cashOverrun: 0,
    starId: null,
    starFee: 0,
    campaign: null,
    campaignCost: 0,
    meterPoints: { plot: 0, writing: 0, filming: 0, editing: 0 },
    starPoints: 0,
    pendingDecision: null,
    auditionCards: [],
    casted: false,
    marketed: false,
    ...(format !== "movie" ? { episodes: fmt.episodes } : {}),
    ...(format === "tv" ? { seasonNumber: seasonsOf(state, ipId).length + 1 } : {}),
    ...(plan.twistTheme ? { twistTheme: plan.twistTheme } : {}),
    ...(route === "original" ? { route } : {}),
  };
  state.project = p;
  state.counters.productionsStarted += 1;
  if (offer) {
    const dName = offer.lifeline ? cfg.distribution.lifeline.name : state.distributors.find((d) => d.id === offer.distributorId)!.name;
    receiveAdvance(state, p, offer.advance, dName);
  }
  payProjectExpense(state, p, p.baseCost, "base_cost", "unavoidable base cost");
  emit(state, "project_start", `Started ${p.title} (${format !== "movie" ? `${format}${p.episodes ? `, ${p.episodes} episodes` : ""}, ` : ""}${p.genre} + ${p.theme}, ${p.ipRelation}${p.twistTheme ? `, TWIST theme ${p.twistTheme}` : ""}) with ${offer ? `${offer.distributorId} advance $${offer.advance.toLocaleString()} @ ${(offer.royalty * 100).toFixed(0)}%` : route === "original" ? "self-funding as a Streaming Original" : "self-funding"}.`, { projectId: p.id });
  return p;
}

/** One production week. Pauses at 40%/80% until the decision is made. */
export function productionWeek(state: StudioState, cfg: Config): void {
  const p = state.project;
  if (!p || p.pendingDecision) return;
  const bonus = genreBonus(state, cfg, p.genre);
  staffWorkWeek(state, p, cfg, bonus);
  if (phaseOf(p.progress) === "filming" && p.starId) {
    p.starPoints = round2(p.starPoints + cfg.production.starFilmingWeight * starFit(state.stars[p.starId], p.genre, cfg) * (1 + bonus));
  }
  p.weeksWorked += 1;
  p.progress = Math.min(100, round2(p.progress + 100 / p.durationWeeks));
  if (p.progress >= 40 && !p.casted) {
    p.pendingDecision = "casting";
    p.auditionCards = buildAuditions(state, cfg, p, projectFunds(state, p));
    emit(state, "milestone", `${p.title} hit 40%: the audition results are back!`, { projectId: p.id });
  } else if (p.progress >= 80 && !p.marketed) {
    p.pendingDecision = "marketing";
    emit(state, "milestone", `${p.title} hit 80%: time to choose a release campaign.`, { projectId: p.id });
  } else if (p.progress >= 100) {
    completeProject(state, cfg);
  }
}

export function castStar(state: StudioState, cfg: Config, starId: string): void {
  const p = state.project!;
  const card = p.auditionCards.find((c) => c.starId === starId);
  if (!card) throw new Error(`Star ${starId} not in audition list`);
  if (card.price > projectFunds(state, p)) throw new Error(`Cannot afford ${starId}`);
  applyRecastPenalty(state, cfg, p, starId);
  payProjectExpense(state, p, card.price, "star_fee", state.stars[starId].name);
  p.starId = starId;
  p.starFee = card.price;
  p.casted = true;
  p.pendingDecision = null;
  if (!state.hiredStarIds.includes(starId)) state.hiredStarIds.push(starId);
  emit(state, "cast", `Cast ${state.stars[starId].name} for $${card.price.toLocaleString()}${card.fallbackInserted ? " (free fallback Newcomer)" : ""}.`, { starId, price: card.price });
}

export function campaignOptions(state: StudioState, cfg: Config) {
  const funds = projectFunds(state, state.project);
  return Object.entries(cfg.marketing.campaigns).map(([id, c]) => ({ id, cost: c.cost, affordable: c.cost <= funds || c.cost === 0 }));
}

export function chooseCampaign(state: StudioState, cfg: Config, campaign: string): void {
  const p = state.project!;
  const c = (cfg.marketing.campaigns as Record<string, { cost: number; awareness: number }>)[campaign];
  if (!c) throw new Error(`Unknown campaign ${campaign}`);
  if (c.cost > projectFunds(state, p)) throw new Error(`Cannot afford campaign ${campaign}`);
  if (c.cost > 0) payProjectExpense(state, p, c.cost, "campaign", campaign);
  p.campaign = campaign;
  p.campaignCost = c.cost;
  p.marketed = true;
  p.pendingDecision = null;
  emit(state, "campaign", `Campaign: ${campaign} ($${c.cost.toLocaleString()}).`);
}

function fatigueFor(state: StudioState, cfg: Config, p: Project): number {
  const key = comboKey(p.genre, p.theme);
  let prior = state.comboHistory[key] ?? 0;
  // TV seasons: the show's own earlier seasons count as SHOW-AGE fatigue (below), not combo repetition
  if (p.ipRelation === "season") prior -= state.releases.filter((r) => r.ipId === p.ipId && r.genre === p.genre && r.theme === p.theme).length;
  const f = cfg.scoring.repetitionFatigue;
  let fat = (p.ipRelation === "sequel" ? f.sequelPerRepeat : f.newProjectPerRepeat) * Math.max(0, prior);
  const ipHof = state.releases.some((r) => r.ipId === p.ipId && r.hallOfFame);
  if (ipHof) fat *= f.hallOfFameSoftening;
  return Math.min(f.max, fat);
}

function completeProject(state: StudioState, cfg: Config): Release {
  const p = state.project!;
  const meters = meterQuality(p, state, cfg);
  const key = comboKey(p.genre, p.theme);
  const grades = state.world.comboGrades[key];
  const ip = state.ips[p.ipId];
  // Gate 3 TV: theme twist (genre locked) and show-age fatigue
  let twist: ReturnType<typeof twistOutcome> | null = null;
  let show: ReturnType<typeof showFatigue> | null = null;
  if (formatOf(p) === "tv" && p.ipRelation === "season") {
    if (p.twistTheme) {
      twist = twistOutcome(state, cfg, p.genre, p.twistTheme);
      if (twist === "good") ip.fatigueSeasons = Math.max(0, (ip.fatigueSeasons ?? 0) - cfg.tv.twist.goodFatigueReset);
      ip.showTheme = p.twistTheme;
    }
    show = showFatigue(cfg, ip.fatigueSeasons ?? 0, seasonsOf(state, ip.id).at(-1)?.avgScore ?? null);
  }
  const fatigue = Math.min(0.6, fatigueFor(state, cfg, p) + (show?.fatigue ?? 0));
  const saturated = state.trends[p.theme]?.stage === "saturated";
  const sc = computeScores(meters, grades, fatigue, saturated, cfg, expectationsAt(state.week, cfg));
  const avg = avgScore(sc.audience, sc.critic);
  const star = p.starId ? state.stars[p.starId] : null;
  const hiatus = formatOf(p) === "tv" && p.ipRelation === "season" ? hiatusMultiplier(state, cfg, ip) : null;
  const op = openingTrace(
    {
      reach: p.reach,
      campaignAwareness: (cfg.marketing.campaigns as Record<string, { awareness: number }>)[p.campaign ?? "none"].awareness,
      studioBuzz: state.studioBuzz,
      starFame: star ? star.fame : 0,
      trend: state.trends[p.theme]?.stage ?? "none",
      ipFans: ip.fans,
      ...(formatOf(p) === "tv" ? { anticipation: round2((ip.anticipation ?? 0) * (hiatus?.mult ?? 1)), fanAnticipationMult: hiatus?.mult ?? 1 } : {}),
    },
    cfg,
  );
  const surplus = transferSurplus(state, p);
  // TEST-ONLY regression injection (cfg.debug.injectBug). Default "none". Used to prove diagnostics catch bugs.
  const bug = cfg.debug.injectBug;
  if (bug === "fameIntoScore" && star) {
    sc.audience = Math.min(10, round2(sc.audience + star.fame / 40));
  }
  const rel: Release = {
    id: newId(state, "rel"),
    title: p.title,
    genre: p.genre,
    theme: p.theme,
    ipId: p.ipId,
    ipRelation: p.ipRelation,
    releaseWeek: state.week,
    distributorId: p.distributorId,
    royalty: p.royalty,
    reachCap: op.reachCap,
    starId: p.starId,
    meters,
    audience: sc.audience,
    critic: sc.critic,
    avgScore: avg,
    hallOfFame: isHallOfFame(avg, cfg),
    criticGeneration: sc.expectations.criticGeneration,
    audienceEra: sc.expectations.audienceEra,
    openingViewers: op.opening,
    weekIndex: 0,
    lastViewers: 0,
    totalViewers: 0,
    grossTotal: 0,
    distributorTake: 0,
    studioTake: 0,
    active: true,
    advance: p.advance,
    surplusKept: surplus,
    baseCost: p.baseCost,
    starFee: p.starFee,
    campaignCost: p.campaignCost,
    cashOverrun: p.cashOverrun,
    ...(formatOf(p) !== "movie" ? { format: formatOf(p), episodes: p.episodes, episodesAired: 0, uniqueViewers: 0 } : {}),
    ...(p.seasonNumber ? { seasonNumber: p.seasonNumber } : {}),
    ...(p.route === "original" ? { route: "original" as const, uniqueViewers: 0 } : {}),
    weekly: [],
    trace: {
      pool: op.pool,
      quality: { meterPoints: p.meterPoints, starPoints: p.starPoints, starFit: star ? starFit(star, p.genre, cfg) : 0, genreLevel: genreLevel(state, cfg, p.genre), genreBonus: genreBonus(state, cfg, p.genre), eraBar: round2(eraBar(state, cfg)), score: sc },
      opening: op,
      fatigue,
      saturated,
      fundsAtCasting: p.auditionCards.length ? "see audition cards" : null,
      auditionCards: p.auditionCards,
      ...(show || twist || hiatus ? { tv: { showFatigue: show, twist, twistTheme: p.twistTheme ?? null, hiatus, anticipationUsed: ip.anticipation ?? 0, fatigueSeasons: ip.fatigueSeasons } } : {}),
    },
  };
  if (bug === "advanceAsRevenue") rel.grossTotal = round2(rel.grossTotal + p.advance);
  state.releases.push(rel);
  state.studioBuzz = 0; // studio buzz applies to this (the next) release only
  if (formatOf(p) === "tv") {
    ip.anticipation = 0; // used by this season's opening
    ip.fatigueSeasons = (ip.fatigueSeasons ?? 0) + 1;
    if (twist === "bad") {
      const before = ip.fans;
      ip.fans = Math.round(ip.fans * (1 - cfg.tv.twist.badFanLoss));
      emit(state, "twist", `${ip.name} lost its way with the ${p.twistTheme} twist: fans ${before.toLocaleString()} → ${ip.fans.toLocaleString()}.`, { ipId: ip.id });
    } else if (twist === "good") emit(state, "twist", `${ip.name} is reborn! The ${p.twistTheme} twist eased show fatigue (genre stays ${p.genre}).`, { ipId: ip.id });
    else if (twist === "neutral") emit(state, "twist", `${ip.name}'s ${p.twistTheme} twist landed quietly: no fatigue relief, no fan loss.`, { ipId: ip.id });
  }
  if (p.route === "original" && state.platform?.status === "live") state.platform.lastFreshWeek = state.week;
  // reveal combo, history, genre xp, IP bookkeeping
  state.comboBook[key] = { audience: grades.audience, critic: grades.critic };
  state.comboHistory[key] = (state.comboHistory[key] ?? 0) + 1;
  awardGenreXp(state, cfg, p.genre);
  ip.titles.push(rel.id);
  if (p.starId) {
    ip.establishedStarId = p.starId;
    state.stars[p.starId].credits.push(rel.id);
  }
  const awards = evaluatePrestige(state, cfg, rel, "scored");
  rel.trace.prestigeScored = awards;
  emit(
    state,
    "release",
    `${rel.title} released: Audience ${rel.audience} / Critics ${rel.critic} (avg ${avg}${rel.hallOfFame ? ", HALL OF FAME" : ""}). Opening pool ${op.pool.toLocaleString()}, opening ${op.opening.toLocaleString()}.${formatOf(p) === "tv" ? ` ${rel.avgScore >= cfg.tv.renewalThreshold ? "Renewable" : "Cannot be renewed"} (season average ${avg}).` : formatOf(p) === "limited_series" ? " Limited series: self-contained, no renewal." : ""}`,
    { releaseId: rel.id },
  );
  state.project = null;
  state.counters.productionsCompleted += 1;
  maybeStaffPitch(state, cfg);
  return rel;
}

/** Called when a release's run ends: Star career, distributor trust, IP fans (all causal from realized outcome). */
export function finalizeRelease(state: StudioState, cfg: Config, rel: Release): void {
  if (formatOf(rel) !== "movie" || rel.route) rel.runEndWeek = state.week;
  if (formatOf(rel) === "tv") {
    const ip = state.ips[rel.ipId];
    ip.lastAiredWeek = state.week; // hiatus clock (announcements never reset it)
    if (ip.partner && ip.partner.distributorId === rel.distributorId && rel.advance > 0) ip.partner.lastRoi = round2(rel.distributorTake / rel.advance);
  }
  rel.trace.ipFans = updateIpFans(state, cfg, rel);
  if (rel.starId) rel.trace.starCareer = applyStarCareer(state, cfg, state.stars[rel.starId], rel);
  rel.trace.trust = updateTrust(state, cfg, rel);
  emit(state, "run_end", `${rel.title} run ended after ${rel.weekIndex} weeks: ${rel.totalViewers.toLocaleString()} ${rel.episodes ? "viewer-episodes" : "viewers"}${rel.uniqueViewers !== undefined ? ` (${rel.uniqueViewers.toLocaleString()} distinct people)` : ""}, gross $${Math.round(rel.grossTotal).toLocaleString()}, studio take $${Math.round(rel.studioTake).toLocaleString()}.`, { releaseId: rel.id });
  onRunEnded(state, cfg, rel);
}

export function canSelfFund(state: StudioState, cfg: Config, baseCost: number = cfg.production.movie.baseCost): boolean {
  return state.cash >= 0 && spendableCash(state) >= baseCost;
}
