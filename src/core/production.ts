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
import { ensureStream, next, pick } from "./rng";
import type { Grade } from "./types";
import { formatOf, formatSpec, hiatusMultiplier, seasonsOf, showFatigue, showHealth, twistOutcome, viewerFatigue } from "./formats";
import { onRunEnded } from "./streaming";
import { generateBids, investedSoFar, isLateDistribution } from "./latedist";
import type { Breakthrough, Meter, Offer, PlanDecision, Project, Release, ReleaseRoute, StudioState } from "./types";

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
    reach: offer ? offer.reach : route === "original" ? cfg.streaming.originalReach : isLateDistribution(cfg) ? cfg.economy.lateDistribution.selfDistributionReach : cfg.distribution.selfFundReach,
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
  emit(state, "project_start", `Started ${p.title} (${format !== "movie" ? `${format}${p.episodes ? `, ${p.episodes} episodes` : ""}, ` : ""}${p.genre} + ${p.theme}, ${p.ipRelation}${p.twistTheme ? `, TWIST theme ${p.twistTheme}` : ""}) with ${offer ? `${offer.distributorId} advance $${offer.advance.toLocaleString()} @ ${(offer.royalty * 100).toFixed(0)}%` : route === "original" ? "self-funding as a Streaming Original" : isLateDistribution(cfg) ? `studio funding (base cost $${p.baseCost.toLocaleString()} paid now; distributors bid at 80%)` : "self-funding"}.`, { projectId: p.id });
  return p;
}

/** One production week. Pauses at 40%/80% until the decision is made. */
export function productionWeek(state: StudioState, cfg: Config): void {
  const p = state.project;
  if (!p || p.pendingDecision) return;
  const bonus = genreBonus(state, cfg, p.genre);
  staffWorkWeek(state, p, cfg, bonus);
  if (cfg.events.breakthrough.enabled) breakthroughCheck(state, cfg, p);
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
    if (isLateDistribution(cfg) && p.route !== "original") {
      // Gate 4 candidate: distribution meeting. Bids are for advertising + reach, never cash to the studio.
      const { bids, signals } = generateBids(state, cfg, p);
      p.distributionBids = bids;
      p.investedAtMeeting = investedSoFar(state, p);
      p.distribution = { distributorId: null, adSpend: 0, adAwareness: 0, share: 0, reach: p.reach, preview: signals };
      p.pendingDecision = "distribution";
      emit(state, "milestone", `${p.title} hit 80%: distribution meeting. ${bids.length ? bids.map((b) => `${b.name}: $${b.adSpend.toLocaleString()} ads, reach ${b.reach}, ${(b.share * 100).toFixed(0)}% of gross`).join("; ") : "No distributor bid"}; or self-distribute. Invested so far $${Math.round(p.investedAtMeeting).toLocaleString()}.`, { projectId: p.id, signals });
    } else {
      p.pendingDecision = "marketing";
      emit(state, "milestone", `${p.title} hit 80%: time to choose a release campaign.`, { projectId: p.id });
    }
  } else if (p.progress >= 100) {
    completeProject(state, cfg);
  }
}

/**
 * EXPERIMENT (follow-up, default off): one seeded draw when the production first works in each listed stage.
 * Success adds bonus meter POINTS (never a score). Logged with the draw, the meter and the size.
 */
function breakthroughCheck(state: StudioState, cfg: Config, p: Project): void {
  const b = cfg.events.breakthrough;
  const stage = phaseOf(p.progress);
  if (!b.stages.includes(stage) || (p.breakthroughChecks ?? []).includes(stage)) return;
  if (!b.formats.includes(formatOf(p)) || (p.seasonNumber ?? 0) < b.minSeason) return;
  (p.breakthroughChecks ??= []).push(stage);
  if ((p.breakthroughs?.length ?? 0) >= b.maxPerProduction) return;
  ensureStream(state.rng, state.seed, "events");
  const draw = next(state.rng, "events");
  if (draw >= b.chancePerCheck) return;
  const meters = (b.stageMeters as Record<string, Meter[]>)[stage];
  const meterDraw = next(state.rng, "events");
  const meter = meters[Math.min(meters.length - 1, Math.floor(meterDraw * meters.length))];
  const half = (cfg.production.meterHalfPointPerWeek as Record<Meter, number>)[meter] * p.durationWeeks * eraBar(state, cfg);
  const points = round2(b.bonusShare * half);
  const before = meterQuality(p, state, cfg)[meter];
  p.meterPoints[meter] = round2(p.meterPoints[meter] + points);
  const ev: Breakthrough = { type: "creative_breakthrough", source: stage === "filming" && p.starId ? "star" : "staff", stage, week: state.week, progress: p.progress, draw: Math.round(draw * 1e6) / 1e6, meterDraw: Math.round(meterDraw * 1e6) / 1e6, meter, points };
  (p.breakthroughs ??= []).push(ev);
  emit(state, "breakthrough", `Creative breakthrough on ${p.title} (${stage}, week ${state.week}): ${meter} +${points.toLocaleString()} points (draw ${ev.draw} < ${b.chancePerCheck}; meter so far ${before} → ${meterQuality(p, state, cfg)[meter]}).`, { ...ev, projectId: p.id });
}

const GRADE_ORDER: Grade[] = ["A", "B", "C", "D", "F"];

/**
 * Gate 4Q EXPERIMENT (default off): rare audience-only exception for a poorly matched pairing. Only drawn when
 * eligible (poor audience grade + never released before + good audience-side craft). Seeded on the lazy
 * "reception" stream; the trace records the chance, the draw and the score without it.
 */
function cultCheck(state: StudioState, cfg: Config, p: Project, key: string, grades: { audience: Grade; critic: Grade }, meters: Record<string, number>) {
  const c = cfg.world.cult;
  if (!(c.eligibleAudienceGrades as string[]).includes(grades.audience)) return null;
  if (state.comboHistory[key]) return null; // novelty: the studio has never released this exact pairing
  const craft = round2((meters.filming + meters.editing) / 2);
  if (craft < c.minAudienceCraft) return null;
  const stage = state.trends[p.theme]?.stage ?? "none";
  const trend = (c.trendBonus as Record<string, number>)[stage] ?? 0;
  const chance = round2(c.baseChance + trend);
  ensureStream(state.rng, state.seed, "reception");
  const draw = Math.round(next(state.rng, "reception") * 1e6) / 1e6;
  const happened = draw < chance;
  const tierDraw = happened ? Math.round(next(state.rng, "reception") * 1e6) / 1e6 : null;
  const tier: "lift" | "breakout" | null = happened ? (tierDraw! < c.breakoutShare ? "breakout" : "lift") : null;
  const lifted = GRADE_ORDER[Math.max(0, GRADE_ORDER.indexOf(grades.audience) - c.liftSteps)];
  const effectiveAudience: Grade = tier === "breakout" ? (c.breakoutGrade as Grade) : tier === "lift" ? lifted : grades.audience;
  const reasons = [`audience-side craft ${craft} (Filming/Editing) ≥ ${c.minAudienceCraft}`, "a pairing nobody at the studio had tried", ...(trend ? [`${p.theme} is ${stage} (+${trend})`] : [])];
  return { happened, tier, baselineAudience: grades.audience, effectiveAudience, chance, draw, tierDraw, craft, reasons, audienceWithout: 0, avgWithout: 0 };
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
      if (twist === "good" && cfg.tv.viewerFatigue.enabled) ip.viewerTwistResets = (ip.viewerTwistResets ?? 0) + 1;
      ip.showTheme = p.twistTheme;
    }
    show = showFatigue(cfg, ip.fatigueSeasons ?? 0, seasonsOf(state, ip.id).at(-1)?.avgScore ?? null);
  }
  const fatigue = Math.min(0.6, fatigueFor(state, cfg, p) + (show?.fatigue ?? 0));
  const saturated = state.trends[p.theme]?.stage === "saturated";
  const cult = cfg.world.cult.enabled ? cultCheck(state, cfg, p, key, grades, meters) : null;
  const scoredGrades = cult?.happened ? { audience: cult.effectiveAudience, critic: grades.critic } : grades;
  const fitNow = p.starId ? starFit(state.stars[p.starId], p.genre, cfg) : 0; // PROD-051: skill fit, never Fame
  const sc = computeScores(meters, scoredGrades, fatigue, saturated, cfg, expectationsAt(state.week, cfg), fitNow);
  if (cult) {
    const w = computeScores(meters, grades, fatigue, saturated, cfg, expectationsAt(state.week, cfg), fitNow);
    cult.audienceWithout = w.audience;
    cult.avgWithout = avgScore(w.audience, w.critic);
  }
  let breakthrough: { events: Breakthrough[]; audienceWithout: number; criticWithout: number; avgWithout: number } | null = null;
  if (p.breakthroughs?.length) {
    const q = { ...p, meterPoints: { ...p.meterPoints } };
    for (const e of p.breakthroughs) q.meterPoints[e.meter] = round2(q.meterPoints[e.meter] - e.points);
    const w = computeScores(meterQuality(q, state, cfg), scoredGrades, fatigue, saturated, cfg, expectationsAt(state.week, cfg), fitNow);
    breakthrough = { events: p.breakthroughs, audienceWithout: w.audience, criticWithout: w.critic, avgWithout: avgScore(w.audience, w.critic) };
  }
  const avg = avgScore(sc.audience, sc.critic);
  const star = p.starId ? state.stars[p.starId] : null;
  const hiatus = formatOf(p) === "tv" && p.ipRelation === "season" ? hiatusMultiplier(state, cfg, ip) : null;
  const vf = formatOf(p) === "tv" && p.ipRelation === "season" ? viewerFatigue(state, cfg, ip) : null;
  const health = formatOf(p) === "tv" && p.ipRelation === "season" ? showHealth(state, cfg, ip) : null; // PROD-139
  const opIn = (returningMult?: number) => ({
      reach: health ? round2(p.reach * health.mult) : p.reach,
      campaignAwareness: p.distribution ? p.distribution.adAwareness : (cfg.marketing.campaigns as Record<string, { awareness: number }>)[p.campaign ?? "none"].awareness,
      studioBuzz: state.studioBuzz,
      starFame: star ? star.fame : 0,
      trend: state.trends[p.theme]?.stage ?? "none",
      ipFans: ip.fans,
      ...(formatOf(p) === "tv" ? { anticipation: round2((ip.anticipation ?? 0) * (hiatus?.mult ?? 1)), fanAnticipationMult: hiatus?.mult ?? 1 } : {}),
      ...(returningMult !== undefined ? { returningMult } : {}),
    });
  const op = openingTrace(opIn(vf ? vf.mult : undefined), cfg);
  const vfTrace = vf
    ? { ...vf, appliesTo: cfg.tv.viewerFatigue.appliesTo, openingWithout: openingTrace(opIn(), cfg), premiereMult: cfg.tv.viewerFatigue.appliesTo === "returningAndPremiere" ? vf.mult : 1 }
    : null;
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
    ...(p.distribution ? { financing: "late_distribution" as const, adSpend: p.distribution.adSpend } : {}),
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
      ...(breakthrough ? { breakthrough } : {}),
      ...(cult ? { cult } : {}),
      ...(p.distribution ? { distribution: { ...p.distribution, bids: p.distributionBids ?? [], investedAtMeeting: p.investedAtMeeting ?? 0 } } : {}),
      ...(health ? { showHealth: health } : {}),
      ...(vfTrace ? { viewerFatigue: vfTrace, ...(vfTrace.premiereMult !== 1 ? { premiereMult: vfTrace.premiereMult } : {}) } : {}),
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
  state.comboBook[key] = { audience: grades.audience, critic: grades.critic }; // the stable BASELINE, never a cult title's reception
  if (cult?.happened) emit(state, "cult", `Unexpected cult appeal: audiences embraced ${rel.title} despite the odd ${p.genre} + ${p.theme} pairing (${cult.tier === "breakout" ? "a true breakout" : "a small lift"}: audience ${cult.audienceWithout} → ${rel.audience}; critics unmoved at ${rel.critic}). Why: ${cult.reasons.join("; ")}. The pairing itself is still graded ${grades.audience}/${grades.critic}.`, { releaseId: rel.id, ...cult });
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
