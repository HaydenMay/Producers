// Gate 4 EXPERIMENT. Two pieces, both config-gated:
//  1. economy.mode "late_distribution" (CANDIDATE): the studio funds production itself; at 80% 2–3 distributors
//     bid ADVERTISING spend + reach for a revenue share. The distributor spends its ad money itself: nothing is
//     ever deposited in studio cash. Self-distribution (low reach, no ads, keep 100%) is always available.
//  2. economy.contracts (work-for-hire): zero-cost jobs, client reimburses payroll + upkeep weekly and pays a
//     fixed visible fee at completion. Zero Prestige, no IP / fans / release / Hall of Fame / catalog.
// "legacy_advance" (default) never calls anything here, so every earlier result stays byte-identical.
import type { Config } from "./config";
import { emit, ledger, round2 } from "./events";
import { next, range } from "./rng";
import { comboKey, GRADE_VALUE } from "./distribution";
import { meterQuality } from "./scoring";
import { formatOf, formatSpec } from "./formats";
import { starFee } from "./stars";
import { METERS, type ActiveContract, type ContractOffer, type DistributionBid, type Meter, type PlanDecision, type Project, type StudioState } from "./types";

export const isLateDistribution = (cfg: Config) => cfg.economy.mode === "late_distribution";
export const contractsEnabled = (cfg: Config) => cfg.economy.contracts.enabled;

type LD = Config["economy"]["lateDistribution"];
type RosterTerms = { adBase: number; shareBase: number; minAppeal: number };

/** Ad spend → opening awareness (concave; replaces the studio's paid campaign for distributed releases). */
export function adAwareness(cfg: Config, adSpend: number): number {
  const l = cfg.economy.lateDistribution;
  return round2(l.adAwarenessMax * (1 - Math.exp(-adSpend / l.adScale)));
}

/**
 * What a distributor can plausibly see at 80%: the work so far (meter quality projected to completion),
 * the cast Star's Fame, the theme's visible trend, the IP's fans, a combo the studio has ALREADY released
 * (comboBook = public), and a returning show's last published season. Never final scores or hidden grades.
 */
export function previewSignals(state: StudioState, cfg: Config, p: Project): Record<string, number> {
  const l = cfg.economy.lateDistribution;
  const scale = p.progress > 0 ? 100 / p.progress : 1;
  const proj = { ...p, meterPoints: Object.fromEntries(METERS.map((m) => [m, p.meterPoints[m] * scale])) as Record<Meter, number>, starPoints: p.starPoints * scale };
  const q = meterQuality(proj, state, cfg);
  const preview = round2(METERS.reduce((a, m) => a + q[m], 0) / METERS.length);
  const quality = l.previewWeight * ((preview - l.previewCenter) / l.previewSpan);
  const trend = (l.trendWeight as Record<string, number>)[state.trends[p.theme]?.stage ?? "none"] ?? 0;
  const ip = state.ips[p.ipId];
  const fans = l.fansWeight * ((ip?.fans ?? 0) / cfg.world.marketSize);
  const fame = p.starId ? l.fameWeight * (state.stars[p.starId].fame / 100) : 0;
  const known = state.comboBook[comboKey(p.genre, p.theme)];
  const combo = known ? l.knownComboWeight * ((GRADE_VALUE[known.audience] + GRADE_VALUE[known.critic]) / 2) : 0;
  const last = p.ipRelation === "season" ? state.releases.filter((r) => r.ipId === p.ipId).at(-1) : undefined;
  const lastSeason = last ? l.lastSeasonWeight * (last.avgScore - 7) : 0;
  const appeal = round2(Math.max(l.appealMin, Math.min(l.appealMax, 1 + quality + trend + fans + fame + combo + lastSeason)));
  return { preview, quality: round2(quality), trend, fans: round2(fans), fame: round2(fame), combo: round2(combo), lastSeason: round2(lastSeason), appeal };
}

/** Studio clout (PROD-227, designer 2026-11-12): distributors compete harder for bigger studios. After each studio
 *  upgrade, bids carry a wider release (reach); ad budget and cut multipliers exist but default to 1 so distributors
 *  never lose money on a bigger studio (audit 2026-11-12b). All 1 when off / not upgraded. */
export function studioClout(state: StudioState, cfg: Config): { ad: number; share: number; reach: number; upgrades: number } {
  const c = (cfg.economy.lateDistribution as { studioClout?: { enabled?: boolean; adMultByUpgrades?: number[]; shareMultByUpgrades?: number[]; reachMultByUpgrades?: number[] } }).studioClout;
  const n = state.upgrades.length;
  if (!c?.enabled || n <= 0) return { ad: 1, share: 1, reach: 1, upgrades: 0 };
  const pick = (xs: number[] | undefined) => (xs?.length ? (xs.at(Math.min(n, xs.length) - 1) ?? 1) : 1);
  return { ad: pick(c.adMultByUpgrades), share: pick(c.shareMultByUpgrades), reach: pick(c.reachMultByUpgrades), upgrades: n };
}

/** 2–3 fixed bids (seeded on the distributors stream). Possibly none: then only self-distribution. */
export function generateBids(state: StudioState, cfg: Config, p: Project): { bids: DistributionBid[]; signals: Record<string, number> } {
  const l: LD = cfg.economy.lateDistribution;
  const sig = previewSignals(state, cfg, p);
  const family = cfg.world.genres[p.genre as keyof typeof cfg.world.genres];
  const terms = l.roster as Record<string, RosterTerms>;
  const eligible = state.distributors.filter((d) => terms[d.id] && state.prestige >= d.minPrestige && d.trust >= cfg.distribution.trustShowUpMin && sig.appeal >= terms[d.id].minAppeal);
  const shuffled = eligible.map((d) => ({ d, k: next(state.rng, "distributors") })).sort((a, b) => a.k - b.k).map((x) => x.d);
  const count = Math.min(shuffled.length, cfg.distribution.offersMin + Math.floor(next(state.rng, "distributors") * (cfg.distribution.offersMax - cfg.distribution.offersMin + 1)));
  const fmtFactor = (l.formatAdFactor as Record<string, number>)[formatOf(p)] ?? 1;
  const clout = studioClout(state, cfg);
  const bids = shuffled.slice(0, count).map((d) => {
    const t = terms[d.id];
    const fav = d.favoredFamilies.includes(family);
    const trustFactor = cfg.distribution.trustOfferFactorBase + cfg.distribution.trustOfferFactorPerPoint * d.trust;
    const jitter = 1 + range(state.rng, "distributors", -cfg.distribution.offerJitter, cfg.distribution.offerJitter);
    const adSpend = Math.round((t.adBase * fmtFactor * sig.appeal * (fav ? l.favoredAdFactor : 1) * trustFactor * jitter * clout.ad) / 1000) * 1000;
    const share = round2(Math.max(l.shareMin, Math.min(l.shareMax, t.shareBase * (1.15 - 0.15 * sig.appeal) * (1.1 - 0.04 * d.trust) * clout.share)));
    const reach = round2(d.reach * (fav ? 1.1 : 1.0) * clout.reach);
    return {
      distributorId: d.id,
      name: d.name,
      adSpend,
      adAwareness: adAwareness(cfg, adSpend),
      reach,
      share,
      reasons: [`preview of the work so far ${sig.preview}/100 → appeal ${sig.appeal}`, fav ? "favoured genre family" : "neutral genre family", `trust ${d.trust.toFixed(2)} → x${trustFactor.toFixed(2)}`, ...(clout.upgrades > 0 ? ["a bigger studio: distributors give you a wider release"] : [])],
    } satisfies DistributionBid;
  });
  return { bids, signals: sig };
}

/** Studio money already sunk into the project (direct costs + payroll/upkeep weeks so far). Display/accounting. */
export function investedSoFar(state: StudioState, p: Project): number {
  let sum = 0;
  for (const l of state.ledger) {
    if (l.projectId === p.id && (l.kind === "base_cost" || l.kind === "star_fee" || l.kind === "campaign")) sum -= l.amount;
    if (l.week > p.startWeek && (l.kind === "payroll" || l.kind === "upkeep")) sum -= l.amount;
  }
  return round2(sum);
}

export function chooseDistribution(state: StudioState, cfg: Config, distributorId: string | null): void {
  const p = state.project!;
  const sig = (p.distribution?.preview ?? {}) as Record<string, number>;
  if (distributorId === null) {
    const reach = cfg.economy.lateDistribution.selfDistributionReach;
    p.distributorId = null;
    p.reach = reach;
    p.royalty = 0;
    p.distribution = { distributorId: null, adSpend: 0, adAwareness: 0, share: 0, reach, preview: sig };
    emit(state, "distribution", `${p.title}: self-distributed (reach ${reach}, no advertising, studio keeps 100% of gross). Invested so far $${Math.round(p.investedAtMeeting ?? 0).toLocaleString()}.`, { projectId: p.id });
  } else {
    const b = p.distributionBids!.find((x) => x.distributorId === distributorId);
    if (!b) throw new Error(`No bid from ${distributorId}`);
    p.distributorId = b.distributorId;
    p.reach = b.reach;
    p.royalty = b.share;
    p.distribution = { distributorId: b.distributorId, adSpend: b.adSpend, adAwareness: b.adAwareness, share: b.share, reach: b.reach, preview: sig };
    emit(state, "distribution", `${p.title}: ${b.name} will release it (reach ${b.reach}, takes ${(b.share * 100).toFixed(0)}% of gross) and spends $${b.adSpend.toLocaleString()} of ITS OWN money on advertising. No cash changes hands at signing.`, { projectId: p.id, ...b });
  }
  p.marketed = true;
  p.pendingDecision = null;
  p.distributionBids = p.distributionBids ?? [];
}

// ---------------------------------------------------------------- contracts

export function weeklyLabor(state: StudioState, cfg: Config): number {
  return state.staff.filter((s) => !s.assignment).reduce((a, s) => a + s.wage, 0) + cfg.start.upkeepPerWeek;
}

export function contractOffers(state: StudioState, cfg: Config): ContractOffer[] {
  if (!contractsEnabled(cfg)) return [];
  const crew = state.staff.filter((s) => !s.assignment);
  const labor = weeklyLabor(state, cfg);
  return (cfg.economy.contracts.list as { id: string; name: string; weeks: number; meters: string[]; minStaff: number; minBestStat: number; fee: number }[]).map((c) => {
    const meters = c.meters as Meter[];
    const best = Math.max(0, ...crew.flatMap((s) => meters.map((m) => s.stats[m])));
    const okStaff = crew.length >= c.minStaff;
    const okSkill = best >= c.minBestStat;
    return {
      id: c.id,
      name: c.name,
      weeks: c.weeks,
      meters,
      fee: c.fee,
      laborPerWeek: labor,
      available: okStaff && okSkill,
      why: !okStaff ? `needs ${c.minStaff} working staff (you have ${crew.length})` : !okSkill ? `needs someone with ${meters.join("/")} ≥ ${c.minBestStat} (best ${Math.round(best)})` : `client covers payroll + upkeep ($${labor.toLocaleString()}/wk) and pays $${c.fee.toLocaleString()} on delivery`,
    };
  });
}

export function startContract(state: StudioState, cfg: Config, contractId: string): void {
  const o = contractOffers(state, cfg).find((c) => c.id === contractId && c.available);
  if (!o) throw new Error(`Contract ${contractId} not available`);
  state.contract = { id: o.id, name: o.name, meters: o.meters, startWeek: state.week, weeks: o.weeks, weeksWorked: 0, fee: o.fee, laborCovered: 0 };
  emit(state, "contract", `Took a work-for-hire contract: ${o.name} (${o.weeks} weeks, $${o.fee.toLocaleString()} on delivery; the client covers payroll + upkeep). Earns money and staff experience, never Prestige.`, { contractId: o.id });
}

/** After payroll each week: reimburse this week's labor, train the crew on the job, pay the fee on delivery. */
export function contractWeek(state: StudioState, cfg: Config): void {
  const c: ActiveContract | null | undefined = state.contract;
  if (!c) return;
  const labor = weeklyLabor(state, cfg);
  ledger(state, { kind: "contract_labor", amount: labor, note: `${c.name}: client covers payroll + upkeep` });
  c.laborCovered = round2(c.laborCovered + labor);
  for (const s of state.staff) {
    if (s.assignment) continue;
    for (const m of c.meters) {
      const gain = cfg.staffGrowth.statGainPerWeek * (1 - s.stats[m] / cfg.staffGrowth.statCap);
      s.stats[m] = Math.min(cfg.staffGrowth.statCap, Math.round((s.stats[m] + gain) * 1000) / 1000);
    }
    s.totalXp += cfg.staffGrowth.xpPerWeek;
  }
  c.weeksWorked += 1;
  if (c.weeksWorked >= c.weeks) {
    ledger(state, { kind: "contract_fee", amount: c.fee, note: `${c.name} delivered` });
    (state.contractHistory ??= []).push({ ...c, endWeek: state.week });
    state.contract = null;
    emit(state, "contract", `Delivered ${c.name}: +$${c.fee.toLocaleString()} fee (labor covered $${Math.round(c.laborCovered).toLocaleString()}). No Prestige, IP or release.`, { contractId: c.id, fee: c.fee });
  }
}

/**
 * Planning-screen cost estimate (designer 2026-11-11, PROD-224): what a production costs over its WHOLE run at
 * today's wages, vs cash on hand. Pure read; never part of a decision. Star range = a cheap newcomer to a big name
 * (Fame 80) at today's Prestige premium. Distributor ad spend is not the studio's money and is not included.
 */
export function planCostEstimate(state: StudioState, cfg: Config, plan: PlanDecision) {
  const spec = formatSpec(cfg, formatOf(plan), plan.episodes);
  const weeks = spec.durationWeeks;
  // Audit 2026-11-12: the studio pays ALL staff (an engineer building streaming included) + upkeep every week of
  // production, so the estimate uses the full payroll. weeklyLabor() (free crew only) stays for contract reimbursement.
  const perWeek = state.staff.reduce((a, s) => a + s.wage, 0) + cfg.start.upkeepPerWeek;
  const crewPay = Math.round(perWeek * weeks);
  const fee = (fame: number) => Math.round(starFee(fame, state.prestige, 1, cfg).price);
  const star = { low: fee(5), high: fee(80) };
  const totalLow = spec.baseCost + crewPay + star.low;
  const totalHigh = spec.baseCost + crewPay + star.high;
  const cash = Math.round(state.cash);
  const risk: "ok" | "tight" | "short" = cash >= totalHigh ? "ok" : cash >= totalLow ? "tight" : "short";
  const note =
    risk === "ok"
      ? "Covered, even with a big-name Star."
      : risk === "tight"
        ? `Covered with a cheaper Star; a big name would put you about $${Math.round((totalHigh - cash) / 1000)}K in the red before release.`
        : `About $${Math.round((totalLow - cash) / 1000)}K short even with a cheap Star: consider a shorter format or a contract first.`;
  return { weeks, baseCost: spec.baseCost, crewPerWeek: Math.round(perWeek), crewPay, star, totalLow, totalHigh, cash, risk, note };
}
