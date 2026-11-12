// Gate 4 agent adapter. Legacy configs: strategies decide exactly as before (this file is a pass-through).
// Candidate (economy.mode late_distribution) and/or contracts: the adapter answers the NEW decisions
// (distribution meeting, work-for-hire) with per-strategy profiles that use only visible information,
// and keeps each strategy's own planning / casting / reinvestment logic.
import type { Config } from "../core/config";
import { openingTrace } from "../core/audience";
import { contractsEnabled, isLateDistribution, planCostEstimate, weeklyLabor } from "../core/latedist";
import { planBaseCost, formatSpec } from "../core/formats";
import type { Choices, ContractOffer, Decision, PlanDecision, StudioState } from "../core/types";
import type { AgentCtx, Strategy } from "./strategies";

type DistPick = "value" | "maxAd" | "selfLean";
type ContractRule = "runway" | "onlyWhenBroke" | "always" | "estimateWarning" | "estimateShort";
interface EconProfile {
  dist: DistPick;
  contract: ContractRule;
}

/** How each named policy behaves at the two new decisions (TEST ASSUMPTIONS, visible info only). */
const PROFILES: Record<string, EconProfile> = {
  "cheap-duds": { dist: "maxAd", contract: "onlyWhenBroke" }, // the bad-movie factory
  "famous-star": { dist: "value", contract: "onlyWhenBroke" },
  "self-funder": { dist: "selfLean", contract: "runway" },
  "selective-self-funder": { dist: "selfLean", contract: "runway" },
  "tv-duds": { dist: "maxAd", contract: "onlyWhenBroke" },
  "contract-farmer": { dist: "value", contract: "always" },
  // designer 2026-11-11: test agents that obey the planning-screen cost warning (PROD-224) by taking a contract first
  "heeds-warning": { dist: "value", contract: "estimateWarning" }, // any warning (⚠️ or ⛔)
  "heeds-short": { dist: "value", contract: "estimateShort" }, // only the ⛔ "short even with a cheap Star" warning
};
const profileOf = (id: string): EconProfile => PROFILES[id] ?? { dist: "value", contract: "runway" };

const legal = (ch: Choices, d: Decision | undefined): d is Decision => !!d && ch.options.some((o) => JSON.stringify(o) === JSON.stringify(d));

/** Visible estimate of studio gross for a distribution option: (1 − share) × [pool + q × (reach cap − pool)]. */
export function distributionValue(state: StudioState, cfg: Config, reach: number, adAwareness: number, share: number, preview: number): number {
  const p = state.project!;
  const star = p.starId ? state.stars[p.starId] : null;
  const op = openingTrace({ reach, campaignAwareness: adAwareness, studioBuzz: state.studioBuzz, starFame: star ? star.fame : 0, trend: state.trends[p.theme]?.stage ?? "none", ipFans: state.ips[p.ipId]?.fans ?? 0 }, cfg);
  const q = Math.max(0, Math.min(1, (preview - 50) / 50));
  return (1 - share) * (op.pool + q * (op.reachCap - op.pool));
}

export function pickDistribution(state: StudioState, cfg: Config, ch: Choices, mode: DistPick): Decision {
  const bids = ch.bids ?? [];
  const preview = (state.project?.distribution?.preview?.preview as number | undefined) ?? 60;
  const selfReach = ch.selfDistribution?.reach ?? cfg.economy.lateDistribution.selfDistributionReach;
  if (!bids.length) return { type: "distribute", distributorId: null };
  if (mode === "maxAd") return { type: "distribute", distributorId: [...bids].sort((a, b) => b.adSpend - a.adSpend || (a.distributorId < b.distributorId ? -1 : 1))[0].distributorId };
  const scored = bids.map((b) => ({ id: b.distributorId as string | null, v: distributionValue(state, cfg, b.reach, b.adAwareness, b.share, preview) }));
  const self = { id: null, v: distributionValue(state, cfg, selfReach, 0, 0, preview) * (mode === "selfLean" ? 1.15 : 1) };
  const best = [...scored, self].sort((a, b) => b.v - a.v)[0];
  return { type: "distribute", distributorId: best.id };
}

function bestContract(ch: Choices): Decision | null {
  const avail = (ch.contracts ?? []).filter((c) => c.available && ch.options.some((o) => o.type === "contract" && o.contractId === c.id));
  if (!avail.length) return null;
  const c = [...avail].sort((a: ContractOffer, b: ContractOffer) => b.fee / b.weeks - a.fee / a.weeks || (a.id < b.id ? -1 : 1))[0];
  return { type: "contract", contractId: c.id };
}

/** "runway" rule: only start an original you can fully fund (base cost + payroll for its whole production). */
function m0(state: StudioState, cfg: Config): number {
  const m = formatSpec(cfg, "movie");
  // harness agents (2026-11-11): also keep a typical mid-tier Star fee (Fame 40) in reserve, so the 30-week first
  // movie doesn't run the studio into the red at casting. Legacy overlay turns this off (`agents.runwayStarReserve`).
  const reserve = (cfg.agents as { runwayStarReserve?: boolean }).runwayStarReserve ? cfg.stars.feeBase + cfg.stars.feePerFame * Math.pow(40, cfg.stars.fameExponent) : 0;
  return m.baseCost + weeklyLabor(state, cfg) * m.durationWeeks + reserve;
}
function runwayOk(state: StudioState, cfg: Config): boolean {
  return state.cash >= m0(state, cfg);
}

/** Cash an optional reinvestment would spend (visible prices). */
function costOf(state: StudioState, cfg: Config, d: Decision): number {
  switch (d.type) {
    case "hire": return cfg.staffGrowth.hireCost;
    case "train": return cfg.staffGrowth.trainCost;
    case "studio_ads": return cfg.marketing.studioAdsCost;
    case "research_theme": return cfg.research.themeCost;
    case "upgrade_studio": return cfg.staffCapacity.upgradeCosts[state.capacityLevel] ?? 0;
    case "unlock_tv": return cfg.tv.unlock.cost;
    case "announce_season": return cfg.tv.announce.cost;
    case "hire_engineer": return cfg.streaming.engineer.hireCost;
    case "build_streaming": return cfg.streaming.buildCost;
    default: return 0;
  }
}

/** Candidate only: ask the strategy's own pitch logic whether this plan should be a Streaming Original. */
function wantsOriginal(strat: Strategy, state: StudioState, cfg: Config, plan: PlanDecision, base: Choices, rng: () => number, ctx: AgentCtx): boolean {
  if (state.platform?.status !== "live") return false;
  const pitch: Choices = { ...base, phase: "pitch", offers: [], options: [{ type: "choose_offer", distributorId: null }, { type: "choose_offer", distributorId: null, original: true }] };
  // audit 2026-11-12: agents never write to the sim state; the strategy sees the plan through a shallow copy
  const view: StudioState = { ...state, pendingPlan: plan };
  try {
    const d = strat.decide(view, cfg, pitch, rng, ctx);
    return d.type === "choose_offer" && !!d.original;
  } catch {
    return false; // movie-only policies have no Original logic (their pitch code expects offers)
  }
}

/** PROD-220: strategies with a fixed approach attach it to every plan they make (approach is validated separately). */
export function decideFor(strat: Strategy, state: StudioState, cfg: Config, ch: Choices, rng: () => number, ctx: AgentCtx): Decision {
  if (ch.phase === "career_end") return { type: "continue_career" }; // harness agents keep playing so long horizons still run
  const d = decideInner(strat, state, cfg, ch, rng, ctx);
  const ap = (strat as Strategy & { approach?: "crowd" | "awards" }).approach;
  return ap && d.type === "plan" && ch.approaches?.includes(ap) ? { ...d, approach: ap } : d;
}

function decideInner(strat: Strategy, state: StudioState, cfg: Config, ch: Choices, rng: () => number, ctx: AgentCtx): Decision {
  const late = isLateDistribution(cfg);
  if (!late && !contractsEnabled(cfg)) return strat.decide(state, cfg, ch, rng, ctx);
  const prof = profileOf(strat.id);
  if (ch.phase === "distribution") return pickDistribution(state, cfg, ch, prof.dist);
  if (ch.phase === "contract") return { type: "wait" };
  if (ch.phase !== "planning") return strat.decide(state, cfg, ch, rng, ctx);

  const plans = ch.options.filter((o): o is PlanDecision => o.type === "plan" && !o.route);
  const contract = bestContract(ch);
  if (contract) {
    if (prof.contract === "always") return contract;
    if (!plans.some((p) => !p.format)) return contract; // can't afford even a movie
    if (prof.contract === "runway" && late && !runwayOk(state, cfg)) return contract;
  }
  // Runway-minded policies don't spend the money they need to fund their next production (the legacy
  // reinvest thresholds assumed a distributor advance would pay for it).
  // warning-heeders never spend below what clearing the warning needs for a movie (otherwise they train/hire the
  // moment they can and the warning never clears)
  const movieEst = () => planCostEstimate(state, cfg, { type: "plan", genre: state.unlockedGenres[0], theme: state.unlockedThemes[0], ipRelation: "new" });
  const keep = !late
    ? -Infinity
    : prof.contract === "runway"
      ? m0(state, cfg)
      : prof.contract === "estimateWarning"
        ? movieEst().totalHigh
        : prof.contract === "estimateShort"
          ? movieEst().totalLow
          : -Infinity;
  const view: Choices = { ...ch, options: ch.options.filter((o) => !(o.type === "plan" && o.route) && (costOf(state, cfg, o) === 0 || state.cash - costOf(state, cfg, o) >= keep)) };
  let d: Decision | undefined;
  try {
    d = strat.decide(state, cfg, view, rng, ctx);
  } catch {
    d = undefined; // a strategy that expected plans it can't afford
  }
  if (d && d.type === "plan" && late && wantsOriginal(strat, state, cfg, d, ch, rng, ctx)) {
    const o = { ...d, route: "original" as const };
    if (legal(ch, o)) return o;
  }
  if (legal(ch, d)) {
    if (contract && d.type === "plan" && (prof.contract === "estimateWarning" || prof.contract === "estimateShort")) {
      const risk = planCostEstimate(state, cfg, d).risk;
      if (risk === "short" || (risk === "tight" && prof.contract === "estimateWarning")) return contract;
    }
    return d;
  }
  if (contract) return contract;
  const movie = plans.filter((p) => !p.format).sort((a, b) => planBaseCost(cfg, a) - planBaseCost(cfg, b))[0];
  return movie ?? { type: "wait" };
}

/** Work-for-hire farmer: never makes originals; hires when it can afford to (tests headcount farming). */
export const CONTRACT_FARMER: Strategy = {
  id: "contract-farmer",
  description: "Gate 4 ADVERSARIAL: only takes work-for-hire contracts; hires and upgrades capacity when it can afford to",
  decide(state, cfg, ch) {
    if (ch.phase === "planning") {
      const hire = ch.options.find((o) => o.type === "hire");
      if (hire && state.cash > cfg.staffGrowth.hireCost + 20000) return hire;
      const up = ch.options.find((o) => o.type === "upgrade_studio");
      if (up) return up;
      const c = bestContract(ch);
      if (c) return c;
    }
    return { type: "wait" };
  },
};

/** Balanced planning/casting, but obeys the cost warning by doing a contract first (PROD-224). */
export const makeWarningHeeder = (base: Strategy, id: "heeds-warning" | "heeds-short"): Strategy => ({
  id,
  description: id === "heeds-warning" ? "Balanced, but takes a contract whenever the plan screen shows a cost warning (⚠️ or ⛔)." : "Balanced, but takes a contract only when the plan screen says it is short even with a cheap Star (⛔).",
  decide: (state, cfg, ch, rng, ctx) => base.decide(state, cfg, ch, rng, ctx),
});

/** PROD-220 test agents: balanced planning/casting with a fixed approach. */
export const makeApproachAgent = (base: Strategy, id: "crowd-pleaser" | "awards-bait"): Strategy & { approach: "crowd" | "awards"; rngId: string } => ({
  id,
  approach: id === "crowd-pleaser" ? "crowd" : "awards",
  rngId: base.id, // same dice as the base policy, so a comparison isolates the approach
  description: id === "crowd-pleaser" ? "Balanced, but every production is a Crowd-pleaser (effort to Filming + Editing)." : "Balanced, but every production is Awards bait (effort to Plot + Writing).",
  decide: (state, cfg, ch, rng, ctx) => base.decide(state, cfg, ch, rng, ctx),
});
