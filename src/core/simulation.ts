// Single source of truth for the rules: createStudio / getChoices / applyDecision / advanceWeek.
// CLI, batch runner, agents and the web UI all go through these functions.
import type { Config } from "./config";
import { configHash } from "./config";
import { emit, ledger } from "./events";
import { initRng } from "./rng";
import { canCancel, cancelRepay, spendableCash } from "./economy";
import { canHire, hireStaff, payroll, trainStaff } from "./staff";
import { generateOffers, driftTrust } from "./distribution";
import { generateWorld, researchTheme, updateTrends } from "./progression";
import { campaignOptions, canSelfFund, castStar, chooseCampaign, finalizeRelease, productionWeek, startProject } from "./production";
import { releaseWeek, decayFans } from "./audience";
import { evaluatePrestige } from "./prestige";
import { RULESET_VERSION, type Choices, type Decision, type PlanDecision, type StudioState } from "./types";

export const FEATURES_MODELLED = ["movies", "distributor advances/royalties/trust", "Stars (families, budgets, fallback, callbacks, relationships)", "marketing + studio buzz", "scores + legs", "IP fans", "Prestige milestones", "studio genre levels", "trends", "staff XP/hire/train", "theme research + staff pitches"];
export const FEATURES_NOT_MODELLED = ["limited series", "TV series/seasons/renewals/hiatus/announcements", "streaming service/subscribers", "eras beyond a gentle quality bar", "studio upgrades/format unlock gates", "genre unlocks", "late-game concurrency"];

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
    rng: initRng(seed),
    ledger: [],
    events: [],
    counters: { nextId: 0, negativeCashWeeks: 0, productionsStarted: 0, productionsCompleted: 0, cancellations: 0 },
    world: { comboGrades: {} },
  };
  ledger(state, { kind: "start_cash", amount: cfg.start.cash });
  generateWorld(state, cfg);
  emit(state, "start", `New studio (seed ${seed}) with ${state.staff.length} staff and $${cfg.start.cash.toLocaleString()}.`);
  return state;
}

function planOptions(state: StudioState): PlanDecision[] {
  const out: PlanDecision[] = [];
  for (const genre of state.unlockedGenres) {
    for (const theme of state.unlockedThemes) {
      out.push({ type: "plan", genre, theme, ipRelation: "new" });
    }
  }
  // continuations: sequel/reboot keep genre+theme of the IP's last entry; spinoff keeps genre, any theme
  for (const ipId of Object.keys(state.ips).sort()) {
    const ip = state.ips[ipId];
    const last = state.releases.filter((r) => r.ipId === ipId).at(-1);
    if (!last) continue;
    out.push({ type: "plan", genre: last.genre, theme: last.theme, ipRelation: "sequel", parentIpId: ipId });
    out.push({ type: "plan", genre: last.genre, theme: last.theme, ipRelation: "reboot", parentIpId: ipId });
    for (const theme of state.unlockedThemes) out.push({ type: "plan", genre: last.genre, theme, ipRelation: "spinoff", parentIpId: ip.id });
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
  if (cash >= cfg.research.themeCost) for (const t of cfg.world.themes) if (!state.unlockedThemes.includes(t)) out.push({ type: "research_theme", theme: t });
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
  if (p?.pendingDecision === "marketing") {
    const camps = campaignOptions(state, cfg);
    return { ...base, phase: "marketing", campaigns: camps, options: camps.filter((c) => c.affordable).map((c) => ({ type: "market", campaign: c.id })) };
  }
  if (p) {
    const opts: Decision[] = [{ type: "wait" }, ...reinvestOptions(state, cfg).filter((d) => d.type !== "hire")];
    const cc = canCancel(state);
    if (cc) opts.push({ type: "cancel" });
    return { ...base, phase: "production", options: opts, canCancel: cc };
  }
  if (state.pendingOffers) {
    const opts: Decision[] = state.pendingOffers.map((o) => ({ type: "choose_offer", distributorId: o.distributorId }));
    if (canSelfFund(state, cfg)) opts.push({ type: "choose_offer", distributorId: null });
    return { ...base, phase: "pitch", offers: state.pendingOffers, options: opts };
  }
  return { ...base, phase: "planning", options: [...planOptions(state), ...reinvestOptions(state, cfg), { type: "wait" }] };
}

function sameDecision(a: Decision, b: Decision): boolean {
  return JSON.stringify(a) === JSON.stringify(b);
}

export function applyDecision(state: StudioState, cfg: Config, d: Decision): void {
  const choices = getChoices(state, cfg);
  if (!choices.options.some((o) => sameDecision(o, d))) {
    throw new Error(`Illegal decision in phase ${choices.phase}: ${JSON.stringify(d)}`);
  }
  switch (d.type) {
    case "plan": {
      state.pendingPlan = d;
      const ipId = d.ipRelation === "new" ? null : d.parentIpId ?? null;
      state.pendingOffers = generateOffers(state, cfg, d, ipId, cfg.production.movie.baseCost);
      emit(state, "pitch", `Pitch meeting for ${d.genre} + ${d.theme} (${d.ipRelation}): ${state.pendingOffers.map((o) => `${o.distributorId} $${o.advance.toLocaleString()} @ ${(o.royalty * 100).toFixed(0)}%`).join("; ")}.`);
      return;
    }
    case "choose_offer": {
      const offer = d.distributorId === null ? null : state.pendingOffers!.find((o) => o.distributorId === d.distributorId)!;
      startProject(state, cfg, state.pendingPlan!, offer);
      state.pendingOffers = null;
      state.pendingPlan = null;
      return;
    }
    case "cast":
      return castStar(state, cfg, d.starId);
    case "market":
      return chooseCampaign(state, cfg, d.campaign);
    case "cancel": {
      const p = state.project!;
      cancelRepay(state, p);
      state.counters.cancellations += 1;
      emit(state, "cancel", `Cancelled ${p.title}; advance repaid. Sunk costs are not refunded.`, { projectId: p.id });
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
    case "wait":
      advanceWeek(state, cfg);
      return;
  }
}

export function advanceWeek(state: StudioState, cfg: Config): void {
  const p = state.project;
  if (p?.pendingDecision) throw new Error(`Cannot advance: ${p.pendingDecision} decision pending`);
  if (state.pendingOffers) throw new Error("Cannot advance: choose an offer first");
  state.week += 1;
  payroll(state, cfg);
  for (const rel of state.releases) {
    if (!rel.active) continue;
    const r = releaseWeek(state, cfg, rel);
    if (r.studio > 0) ledger(state, { kind: "studio_take", amount: r.studio, note: rel.title });
    evaluatePrestige(state, cfg, rel, "run");
    if (!rel.active) finalizeRelease(state, cfg, rel);
  }
  productionWeek(state, cfg);
  updateTrends(state, cfg);
  state.studioBuzz = Math.max(0, state.studioBuzz * (1 - cfg.marketing.buzzDecayPerWeek));
  driftTrust(state, cfg);
  decayFans(state, cfg);
  if (state.cash < 0) state.counters.negativeCashWeeks += 1;
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
