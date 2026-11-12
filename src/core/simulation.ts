// Single source of truth for the rules: createStudio / getChoices / applyDecision / advanceWeek.
// CLI, batch runner, agents and the web UI all go through these functions.
import { careerEndDue, careerRecap, markCareerEnd } from "./career";
import { initTalentPool, poolEnabled, talentYear } from "./talent";
import type { Config } from "./config";
import { configHash } from "./config";
import { emit, ledger } from "./events";
import { initRng } from "./rng";
import { canCancel, cancelRepay, spendableCash } from "./economy";
import { canHire, fireOptions, fireStaff, hireStaff, payroll, trainStaff } from "./staff";
import { generateOffers, driftTrust } from "./distribution";
import { checkGenreUnlocks, freshGenreAwareness, generateWorld, researchTheme, updateTrends } from "./progression";
import { campaignOptions, canSelfFund, castStar, chooseCampaign, finalizeRelease, productionWeek, startProject } from "./production";
import { allowedOrders, cheapestBaseCost, formatOf, limitedSeriesAvailable, partnerAdvance, planBaseCost, renewalStatus, showMoney, tvAvailable } from "./formats";
import { buildStreaming, canBuildStreaming, canHireEngineer, decayAnticipation, hireEngineer, streamingWeek } from "./streaming";
import { releaseWeek, decayFans } from "./audience";
import { evaluatePrestige } from "./prestige";
import { audienceEraAt, criticGenerationAt, expectationsAt, studioToughnessAt } from "./scoring";
import { chooseDistribution, contractOffers, contractWeek, contractsEnabled, investedSoFar, isLateDistribution, startContract, studioClout } from "./latedist";
import { RULESET_VERSION, type Approach, type Choices, type Decision, type PlanDecision, type StudioState } from "./types";

export const FEATURES_MODELLED = ["movies", "limited series (config-gated)", "renewable TV seasons: orders, renewal, fatigue, twist, hiatus, announcements, contract variants A/B (config-gated)", "studio streaming service: engineer build, aggregate subscribers, catalog, Originals (config-gated)", "distributor advances/royalties/trust", "Stars (families, budgets, fallback, callbacks, relationships; default: persistent pool, years active, offscreen careers/retirement, catalog, original-lead card, hidden growth weights)", "marketing + studio buzz", "scores + legs", "IP fans", "Prestige milestones", "studio genre levels", "trends", "staff XP/hire/train", "studio staff-capacity cap + upgrade ladder (when configured)", "staff pitches + trend inspiration (theme research: off by default)", "genre unlocks (crew thresholds, RomCom combo, easing)", "late distribution (80% distribution meeting) + work-for-hire contracts", "planning approach (crowd-pleaser / balanced / awards bait)", "critic generations (calendar proxy)", "fixed career end + recap + legacy score"];
export const FEATURES_NOT_MODELLED = ["soap operas (shelved)", "named critics (Gate 2.6 proxy only)", "eras beyond a gentle quality bar", "studio upgrades other than staff capacity + TV unlock", "late-game concurrency", "TV spinoffs/reboots, Final Season announcements, other show shake-ups", "binge drops", "platform upgrades", "challenge modes"];

export function createStudio(seed: number, cfg: Config): StudioState {
  const state: StudioState = {
    rulesetVersion: RULESET_VERSION,
    configHash: configHash(cfg),
    seed,
    week: 0,
    cash: 0,
    prestige: 0,
    prestigeAwards: [],
    staff: cfg.start.staff.map((s, i) => ({ id: `staff${i + 1}`, name: s.name, stats: { ...s.stats }, totalXp: 0, wage: s.wage })),
    stars: {},
    hiredStarIds: [],
    distributors: cfg.distribution.roster.map((d) => ({ ...d, favoredFamilies: [...d.favoredFamilies], trust: cfg.distribution.trustStart, lifeline: false })),
    ips: {},
    releases: [],
    project: null,
    pendingOffers: null,
    pendingPlan: null,
    unlockedGenres: [...cfg.start.unlockedGenres],
    unlockedThemes: [...cfg.start.unlockedThemes],
    comboBook: {},
    comboHistory: {},
    genreXp: {},
    trends: {},
    studioBuzz: 0,
    maxStaff: cfg.staffCapacity.ladder[0],
    capacityLevel: 0,
    upgrades: [],
    ...(cfg.formats.tv ? { tvUnlocked: false } : {}),
    ...(cfg.formats.streaming ? { platform: null } : {}),
    rng: initRng(seed),
    ledger: [],
    events: [],
    counters: { nextId: 0, negativeCashWeeks: 0, productionsStarted: 0, productionsCompleted: 0, cancellations: 0 },
    world: { comboGrades: {} },
  };
  ledger(state, { kind: "start_cash", amount: cfg.start.cash });
  generateWorld(state, cfg);
  if (poolEnabled(cfg)) initTalentPool(state, cfg); // PROD-213: after the world, on its own stream
  emit(state, "start", `New studio (seed ${seed}) with ${state.staff.length} staff and $${cfg.start.cash.toLocaleString()}.`);
  return state;
}

function planOptions(state: StudioState, cfg: Config): PlanDecision[] {
  const out: PlanDecision[] = [];
  for (const genre of state.unlockedGenres) {
    for (const theme of state.unlockedThemes) {
      out.push({ type: "plan", genre, theme, ipRelation: "new" });
    }
  }
  // continuations: sequel/reboot keep genre+theme of the IP's last entry; spinoff keeps genre, any theme (movie IPs)
  for (const ipId of Object.keys(state.ips).sort()) {
    const ip = state.ips[ipId];
    if (formatOf(ip) !== "movie") continue;
    const last = state.releases.filter((r) => r.ipId === ipId).at(-1);
    if (!last) continue;
    out.push({ type: "plan", genre: last.genre, theme: last.theme, ipRelation: "sequel", parentIpId: ipId });
    out.push({ type: "plan", genre: last.genre, theme: last.theme, ipRelation: "reboot", parentIpId: ipId });
    for (const theme of state.unlockedThemes) out.push({ type: "plan", genre: last.genre, theme, ipRelation: "spinoff", parentIpId: ip.id });
  }
  // Gate 3 formats (only when enabled; movie-only configs produce exactly the list above)
  if (limitedSeriesAvailable(state, cfg)) {
    for (const genre of state.unlockedGenres) for (const theme of state.unlockedThemes) out.push({ type: "plan", format: "limited_series", genre, theme, ipRelation: "new" });
  }
  if (tvAvailable(state, cfg)) {
    const orders = allowedOrders(state, cfg);
    for (const episodes of orders) for (const genre of state.unlockedGenres) for (const theme of state.unlockedThemes) out.push({ type: "plan", format: "tv", episodes, genre, theme, ipRelation: "new" });
    for (const ipId of Object.keys(state.ips).sort()) {
      const ip = state.ips[ipId];
      if (formatOf(ip) !== "tv" || !renewalStatus(state, cfg, ip).eligible) continue;
      const last = state.releases.filter((r) => r.ipId === ipId).at(-1)!;
      const theme = ip.showTheme ?? last.theme;
      for (const episodes of orders) {
        out.push({ type: "plan", format: "tv", episodes, genre: last.genre, theme, ipRelation: "season", parentIpId: ipId });
        for (const t of state.unlockedThemes) if (t !== theme) out.push({ type: "plan", format: "tv", episodes, genre: last.genre, theme: t, ipRelation: "season", parentIpId: ipId, twistTheme: t });
      }
    }
  }
  if (isLateDistribution(cfg)) {
    // Gate 4 candidate: the studio pays the base cost itself, so only affordable plans are legal (no hidden advance).
    const cash = state.cash < 0 ? 0 : spendableCash(state);
    const ok = out.filter((p) => planBaseCost(cfg, p) <= cash);
    if (state.platform?.status === "live") return [...ok, ...ok.map((p) => ({ ...p, route: "original" as const }))];
    return ok;
  }
  return out;
}

/** Season announcements: one per upcoming season of a renewable show; usable while another production runs. */
function announceOptions(state: StudioState, cfg: Config): Decision[] {
  if (!tvAvailable(state, cfg) || spendableCash(state) < cfg.tv.announce.cost || state.cash < 0) return [];
  const out: Decision[] = [];
  for (const ipId of Object.keys(state.ips).sort()) {
    const ip = state.ips[ipId];
    if (formatOf(ip) !== "tv" || !renewalStatus(state, cfg, ip).eligible) continue;
    const next = state.releases.filter((r) => r.ipId === ipId).length + 1;
    if (ip.announcedSeason === next) continue; // already announced: no spamming
    if (state.project?.ipId === ipId) continue; // that season is already in production
    out.push({ type: "announce_season", ipId });
  }
  return out;
}

function reinvestOptions(state: StudioState, cfg: Config): Decision[] {
  const out: Decision[] = [];
  const cash = spendableCash(state);
  if (state.cash < 0) return out; // LOCKED: in the red you can't hire, train, advertise or self-fund
  if (cash >= cfg.staffGrowth.hireCost && canHire(state)) out.push({ type: "hire" });
  const up = nextUpgrade(state, cfg);
  if (up && cash >= up.cost && state.prestige >= up.prestige) out.push({ type: "upgrade_studio" });
  if (cash >= cfg.staffGrowth.trainCost) for (const s of state.staff) out.push({ type: "train", staffId: s.id });
  if (cash >= cfg.marketing.studioAdsCost) out.push({ type: "studio_ads" });
  if ((cfg.research as { themePurchase?: boolean }).themePurchase !== false && cash >= cfg.research.themeCost) for (const t of cfg.world.themes) if (!state.unlockedThemes.includes(t)) out.push({ type: "research_theme", theme: t });
  // Gate 3 studio expansions (config-gated). TV = a studio upgrade at money + Prestige (LOCKED direction).
  if (cfg.formats.tv && !state.tvUnlocked && state.prestige >= cfg.tv.unlock.prestige && cash >= cfg.tv.unlock.cost) out.push({ type: "unlock_tv" });
  out.push(...announceOptions(state, cfg));
  if (canHireEngineer(state, cfg)) out.push({ type: "hire_engineer" });
  if (canBuildStreaming(state, cfg)) out.push({ type: "build_streaming" });
  return out;
}

/** EXPERIMENTAL studio upgrade: next capacity step, its cost and Prestige requirement (test-only trigger rules). */
export function nextUpgrade(state: StudioState, cfg: Config): { to: number; cost: number; prestige: number } | null {
  const lad = cfg.staffCapacity.ladder;
  const i = state.capacityLevel;
  if (i + 1 >= lad.length) return null;
  return { to: lad[i + 1], cost: cfg.staffCapacity.upgradeCosts[i] ?? Infinity, prestige: cfg.staffCapacity.upgradePrestige[i] ?? Infinity };
}

export function getChoices(state: StudioState, cfg: Config): Choices {
  const base = { week: state.week, cash: state.cash, spendableCash: spendableCash(state) };
  const p = state.project;
  if (p?.pendingDecision === "casting") {
    return { ...base, phase: "casting", auditionCards: p.auditionCards, options: p.auditionCards.filter((c) => c.affordable).map((c) => ({ type: "cast", starId: c.starId })) };
  }
  if (p?.pendingDecision === "distribution") {
    const bids = p.distributionBids ?? [];
    return {
      ...base,
      phase: "distribution",
      bids,
      selfDistribution: { reach: cfg.economy.lateDistribution.selfDistributionReach, share: 0, adSpend: 0 },
      investedSoFar: p.investedAtMeeting ?? investedSoFar(state, p),
      options: [...bids.map((b) => ({ type: "distribute" as const, distributorId: b.distributorId })), { type: "distribute", distributorId: null }],
    };
  }
  if (state.contract) {
    return { ...base, phase: "contract", options: [{ type: "wait" }, ...reinvestOptions(state, cfg).filter((d) => d.type !== "hire" && d.type !== "hire_engineer")] };
  }
  if (p?.pendingDecision === "marketing") {
    const camps = campaignOptions(state, cfg);
    return { ...base, phase: "marketing", campaigns: camps, options: camps.filter((c) => c.affordable).map((c) => ({ type: "market", campaign: c.id })) };
  }
  if (p) {
    const opts: Decision[] = [{ type: "wait" }, ...reinvestOptions(state, cfg).filter((d) => d.type !== "hire" && d.type !== "hire_engineer")];
    const cc = canCancel(state);
    if (cc) opts.push({ type: "cancel" });
    return { ...base, phase: "production", options: opts, canCancel: cc };
  }
  if (state.pendingOffers) {
    const opts: Decision[] = state.pendingOffers.map((o) => ({ type: "choose_offer", distributorId: o.distributorId }));
    const baseCost = planBaseCost(cfg, state.pendingPlan!);
    if (canSelfFund(state, cfg, baseCost)) {
      opts.push({ type: "choose_offer", distributorId: null });
      if (state.platform?.status === "live") opts.push({ type: "choose_offer", distributorId: null, original: true });
    }
    return { ...base, phase: "pitch", offers: state.pendingOffers, options: opts };
  }
  // PROD-013: fixed career. At the first planning stop past the limit: recap + "keep playing?"
  if (state.careerEnd?.decided === "end") return { ...base, phase: "finished", options: [] };
  if (state.careerEnd && state.careerEnd.decided === null) return { ...base, phase: "career_end", recap: careerRecap(state, cfg), options: [{ type: "continue_career" }, { type: "end_career" }] };
  const plans = planOptions(state, cfg);
  for (const pl of plans) { const fg = freshGenreAwareness(state, cfg, pl.genre); if (fg > 0) pl.freshGenre = fg; } // PROD-229: shown on the plan
  const contracts = contractsEnabled(cfg) ? contractOffers(state, cfg) : null;
  const planning: Choices = { ...base, phase: "planning", options: [...plans, ...reinvestOptions(state, cfg), ...fireOptions(state, cfg).map((staffId) => ({ type: "fire" as const, staffId })), ...(contracts ? contracts.filter((c) => c.available).map((c) => ({ type: "contract" as const, contractId: c.id })) : []), { type: "wait" }] };
  const ap = (cfg.production as { approaches?: { enabled?: boolean } }).approaches;
  if (ap?.enabled && plans.length) planning.approaches = ["crowd", "balanced", "awards"];
  if (contracts) planning.contracts = contracts;
  const renewable = [...new Set(plans.filter((x) => x.ipRelation === "season" && x.parentIpId).map((x) => x.parentIpId!))];
  if (renewable.length) {
    planning.showMoney = {};
    for (const id of renewable) {
      const m = showMoney(state, cfg, id);
      if (m) planning.showMoney[id] = m;
    }
  }
  if (isLateDistribution(cfg) && !plans.some((x) => !x.format)) planning.notes = [`Can't start a movie: base cost $${cfg.production.movie.baseCost.toLocaleString()} vs spendable $${Math.round(spendableCash(state)).toLocaleString()}${state.cash < 0 ? " (in the red)" : ""}. Take a work-for-hire contract to recover.`];
  return planning;
}

function sameDecision(a: Decision, b: Decision): boolean {
  return JSON.stringify(a) === JSON.stringify(b);
}

export function applyDecision(state: StudioState, cfg: Config, d: Decision): void {
  const choices = getChoices(state, cfg);
  // PROD-220: a plan may carry an approach; it is validated separately from the plan itself
  let approach: Approach | undefined;
  if (d.type === "plan" && d.approach !== undefined) {
    if (!choices.approaches?.includes(d.approach)) throw new Error(`Illegal approach ${d.approach}`);
    approach = d.approach;
    const { approach: _a, ...rest } = d;
    d = rest as Decision;
  }
  if (!choices.options.some((o) => sameDecision(o, d))) {
    throw new Error(`Illegal decision in phase ${choices.phase}: ${JSON.stringify(d)}`);
  }
  switch (d.type) {
    case "plan": {
      if (isLateDistribution(cfg)) {
        // Gate 4 candidate: no pitch, no advance. The studio starts (and pays for) its own production.
        const { route, ...plan } = d;
        const proj = startProject(state, cfg, plan, null, route === "original" ? "original" : "traditional");
        if (approach && approach !== "balanced") proj.approach = approach;
        return;
      }
      state.pendingPlan = d;
      const ipId = d.ipRelation === "new" ? null : d.parentIpId ?? null;
      state.pendingOffers = pitchOffers(state, cfg, d, ipId);
      emit(state, "pitch", `Pitch meeting for ${d.genre} + ${d.theme} (${d.ipRelation}): ${state.pendingOffers.map((o) => `${o.distributorId} $${o.advance.toLocaleString()} @ ${(o.royalty * 100).toFixed(0)}%`).join("; ")}.`);
      return;
    }
    case "choose_offer": {
      const offer = d.distributorId === null ? null : state.pendingOffers!.find((o) => o.distributorId === d.distributorId)!;
      startProject(state, cfg, state.pendingPlan!, offer, d.original ? "original" : "traditional");
      state.pendingOffers = null;
      state.pendingPlan = null;
      return;
    }
    case "cast":
      return castStar(state, cfg, d.starId);
    case "market":
      return chooseCampaign(state, cfg, d.campaign);
    case "distribute":
      return chooseDistribution(state, cfg, d.distributorId);
    case "continue_career":
      state.careerEnd!.decided = "continue";
      emit(state, "career_continue", "You keep running the studio. Your legacy score is locked in; everything from here is a bonus.", {});
      return;
    case "end_career":
      state.careerEnd!.decided = "end";
      emit(state, "career_retire", `You retired. Final legacy score ${state.careerEnd!.legacyScore.toLocaleString()}.`, {});
      return;
    case "contract":
      return startContract(state, cfg, d.contractId);
    case "cancel": {
      const p = state.project!;
      cancelRepay(state, p);
      state.counters.cancellations += 1;
      emit(state, "cancel", isLateDistribution(cfg) ? `Cancelled ${p.title}. Everything invested so far is sunk (no advance to repay, nothing refunded).` : `Cancelled ${p.title}; advance repaid. Sunk costs are not refunded.`, { projectId: p.id });
      if (p.ipRelation === "new" || p.ipRelation === "spinoff") delete state.ips[p.ipId];
      state.project = null;
      return;
    }
    case "hire":
      hireStaff(state, cfg);
      return;
    case "upgrade_studio": {
      const up = nextUpgrade(state, cfg)!;
      ledger(state, { kind: "upgrade", amount: -up.cost, note: `studio capacity ${state.maxStaff} -> ${up.to}` });
      state.upgrades.push({ week: state.week, from: state.maxStaff, to: up.to, cost: up.cost, prestigeAtUpgrade: state.prestige });
      emit(state, "upgrade", `Studio upgraded: employee capacity ${state.maxStaff} → ${up.to} (cost $${up.cost.toLocaleString()}).`);
      const tough = studioToughnessAt(state.upgrades.length, cfg);
      if (tough > 0) emit(state, "upgrade", "We're a bigger company now, so the expectations are higher. Audiences and critics will expect more from us, and we'll have to give it our all to reach the Hall of Fame.", { studioToughness: tough });
      if (studioClout(state, cfg).upgrades > 0) emit(state, "upgrade", "Distributors are taking notice: as a bigger studio we can expect better distribution deals.", { studioClout: true });
      state.maxStaff = up.to;
      state.capacityLevel += 1;
      return;
    }
    case "train":
      return trainStaff(state, cfg, d.staffId);
    case "studio_ads":
      ledger(state, { kind: "studio_ads", amount: -cfg.marketing.studioAdsCost });
      state.studioBuzz += cfg.marketing.studioAdsBuzz;
      emit(state, "studio_ads", `Studio ads: temporary buzz now ${state.studioBuzz.toFixed(2)} (fades weekly; applies to next release).`);
      return;
    case "research_theme":
      return researchTheme(state, cfg, d.theme);
    case "unlock_tv":
      ledger(state, { kind: "format_unlock", amount: -cfg.tv.unlock.cost, note: "TV series" });
      state.tvUnlocked = true;
      emit(state, "unlock", `Studio upgrade: TV series unlocked (Prestige ${state.prestige}, cost $${cfg.tv.unlock.cost.toLocaleString()}). Season orders up to ${allowedOrders(state, cfg).at(-1)} episodes at this Prestige.`);
      return;
    case "announce_season": {
      const ip = state.ips[d.ipId];
      const next = state.releases.filter((r) => r.ipId === d.ipId).length + 1;
      ledger(state, { kind: "announce", amount: -cfg.tv.announce.cost, note: `${ip.name} season ${next}` });
      ip.anticipation = (ip.anticipation ?? 0) + cfg.tv.announce.boost;
      ip.announcedSeason = next;
      emit(state, "announce", `Announced ${ip.name} season ${next}: show-specific anticipation ${ip.anticipation.toFixed(2)} (fades ${(cfg.tv.announce.decayPerWeek * 100).toFixed(0)}%/week; does not reset the hiatus clock).`, { ipId: ip.id, season: next });
      return;
    }
    case "hire_engineer":
      hireEngineer(state, cfg);
      return;
    case "fire":
      fireStaff(state, cfg, d.staffId);
      return;
    case "build_streaming":
      buildStreaming(state, cfg);
      return;
    case "wait":
      advanceWeek(state, cfg);
      return;
  }
}

/**
 * PROD-125 (Claude's call, designer delegated 2026-11-11): going broke is never game over. While cash is negative you
 * can't start a production or spend on extras (already true), and once a month the debt costs interest, a nudge to
 * take a contract. Legacy: no rate → nothing happens.
 */
function overdraftWeek(state: StudioState, cfg: Config): void {
  const od = (cfg.economy as { overdraft?: { monthlyRate?: number; periodWeeks?: number } }).overdraft;
  if (!od?.monthlyRate || state.cash >= 0 || state.week % (od.periodWeeks ?? 4) !== 0) return;
  const interest = Math.round(-state.cash * od.monthlyRate);
  if (interest <= 0) return;
  ledger(state, { kind: "overdraft_interest", amount: -interest, note: `${(od.monthlyRate * 100).toFixed(0)}% of $${Math.round(-state.cash).toLocaleString()} overdrawn` });
  emit(state, "overdraft", `In the red: the bank charged $${interest.toLocaleString()} interest this month. A contract job would get you back in the black.`, { interest });
}

export function advanceWeek(state: StudioState, cfg: Config): void {
  const p = state.project;
  if (p?.pendingDecision) throw new Error(`Cannot advance: ${p.pendingDecision} decision pending`);
  if (state.pendingOffers) throw new Error("Cannot advance: choose an offer first");
  state.week += 1;
  expectationEvents(state, cfg);
  payroll(state, cfg);
  if (contractsEnabled(cfg)) contractWeek(state, cfg);
  for (const rel of state.releases) {
    if (!rel.active) continue;
    const r = releaseWeek(state, cfg, rel);
    if (r.studio > 0) ledger(state, { kind: "studio_take", amount: r.studio, note: rel.title });
    evaluatePrestige(state, cfg, rel, "run");
    if (!rel.active) finalizeRelease(state, cfg, rel);
  }
  if (cfg.formats.streaming) streamingWeek(state, cfg);
  productionWeek(state, cfg);
  updateTrends(state, cfg);
  state.studioBuzz = Math.max(0, state.studioBuzz * (1 - cfg.marketing.buzzDecayPerWeek));
  if (cfg.formats.tv) decayAnticipation(state, cfg);
  driftTrust(state, cfg);
  decayFans(state, cfg);
  if (poolEnabled(cfg) && state.week % cfg.time.weeksPerYear === 0) talentYear(state, cfg); // PROD-214
  checkGenreUnlocks(state, cfg); // PROD-091
  overdraftWeek(state, cfg); // PROD-125
  // PROD-013: the career ends at the first idle week past the limit (an in-flight production or contract finishes first)
  if (careerEndDue(state, cfg) && !state.project && !state.pendingOffers && !state.contract) markCareerEnd(state, cfg);
  if (state.cash < 0) state.counters.negativeCashWeeks += 1;
}

/** Gate 2.6 proxy: announce critic retirements ahead of time, then the turnover; announce audience eras. Text only. */
function expectationEvents(state: StudioState, cfg: Config): void {
  const c = cfg.expectations.critics;
  if (c.enabled) {
    const w = state.week;
    const ahead = c.announceWeeksAhead;
    if (ahead > 0 && criticGenerationAt(w + ahead, cfg) > criticGenerationAt(w + ahead - 1, cfg)) {
      const e = expectationsAt(w + ahead, cfg);
      emit(state, "critics", `Veteran critics are retiring in about ${ahead} weeks. The next generation is known to be harder to impress (critic standard ${(e.criticToughness * 100).toFixed(1)}% tougher than the first generation).`, { generation: e.criticGeneration, week: w + ahead, announce: true });
    }
    if (criticGenerationAt(w, cfg) > criticGenerationAt(w - 1, cfg)) {
      const e = expectationsAt(w, cfg);
      emit(state, "critics", `A new generation of critics (generation ${e.criticGeneration}; the original critics were generation 0) now reviews releases: standards ${(e.criticToughness * 100).toFixed(1)}% tougher than the first generation. Published reviews do not change.`, { generation: e.criticGeneration });
    }
  }
  if (cfg.expectations.audience.enabled && audienceEraAt(state.week, cfg) > audienceEraAt(state.week - 1, cfg)) {
    const e = expectationsAt(state.week, cfg);
    emit(state, "audience_era", `A new entertainment era: audiences expect a little more (${(e.audienceToughness * 100).toFixed(1)}% above the first era).`, { era: e.audienceEra });
  }
}

/** Offers for a plan: contract variant B gives a returning TV season its continuing partner; otherwise a normal pitch. */
function pitchOffers(state: StudioState, cfg: Config, plan: PlanDecision, ipId: string | null) {
  const baseCost = planBaseCost(cfg, plan);
  const ip = ipId ? state.ips[ipId] : null;
  if (plan.ipRelation === "season" && cfg.tv.contract.variant === "B" && ip?.partner) {
    const d = state.distributors.find((x) => x.id === ip.partner!.distributorId)!;
    const fam = cfg.world.genres[plan.genre as keyof typeof cfg.world.genres];
    const fav = d.favoredFamilies.includes(fam) ? 1.1 : 1.0;
    const advance = partnerAdvance(cfg, baseCost, ip.partner.lastRoi, d.trust);
    const offers = [{ distributorId: d.id, advance, royalty: ip.partner.royalty, reach: Math.round(d.reach * fav * 100) / 100, lifeline: false, reasons: [`contract B: continuing partner for ${ip.name}`, `advance = base $${baseCost.toLocaleString()} x cover(last ROI ${ip.partner.lastRoi.toFixed(2)}) x trust ${d.trust.toFixed(2)}`, `royalty carried over ${(ip.partner.royalty * 100).toFixed(0)}%`] }];
    const cheapest = cheapestBaseCost(cfg);
    if (advance < cheapest) {
      const l = cfg.distribution.lifeline;
      offers.push({ distributorId: l.id, advance: Math.ceil((cheapest * l.advanceOverBase) / 1000) * 1000, royalty: l.royalty, reach: l.reach, lifeline: true, reasons: ["lifeline offer: covers the cheapest format's base cost on poor terms"] });
    }
    return offers;
  }
  return generateOffers(state, cfg, plan, ipId, baseCost);
}

/** Replay: seed + config + ordered decision log reproduces the exact same state. */
export function replay(seed: number, cfg: Config, decisions: Decision[]): StudioState {
  const s = createStudio(seed, cfg);
  for (const d of decisions) applyDecision(s, cfg, d);
  return s;
}

export function getSnapshot(state: StudioState) {
  return {
    ruleset: state.rulesetVersion,
    config: state.configHash,
    seed: state.seed,
    week: state.week,
    year: +(state.week / 52).toFixed(2),
    cash: Math.round(state.cash),
    prestige: state.prestige,
    staffOccupancy: `${state.staff.length} / ${state.maxStaff >= 999 ? "uncapped" : state.maxStaff}`,
    staff: state.staff.map((s) => ({ name: s.name, stats: Object.fromEntries(Object.entries(s.stats).map(([k, v]) => [k, +v.toFixed(1)])) })),
    releases: state.releases.length,
    activeReleases: state.releases.filter((r) => r.active).length,
    project: state.project ? { title: state.project.title, progress: state.project.progress, pending: state.project.pendingDecision } : null,
    ipFans: Object.values(state.ips).map((i) => ({ name: i.name, fans: i.fans })),
    trust: state.distributors.map((d) => ({ id: d.id, trust: +d.trust.toFixed(2) })),
  };
}
