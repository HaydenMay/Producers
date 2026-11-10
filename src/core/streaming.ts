// Gate 3B: the studio's streaming service. LOCKED (v9.61 §12): unlock with Prestige + cash + catalog + a
// Software Engineer who builds it in the background (off productions until done); income from TOTAL
// subscribers, never per-title payments; new releases drive growth, catalog drives retention and cannot
// grow subscribers on its own; Hall of Fame titles are evergreens; going quiet causes a slow visible drift;
// operating costs; finished titles join the catalog automatically, once each, when their run ends.
// Every number is cfg.streaming.* (TEST ASSUMPTION). One aggregate calculation per week, no RNG.
import type { Config } from "./config";
import { emit, ledger, newId, round2 } from "./events";
import { formatOf } from "./formats";
import { canHire, randomName } from "./staff";
import { int } from "./rng";
import { METERS, type Meter, type PlatformState, type Release, type Staff, type StudioState } from "./types";

export function engineerOf(state: StudioState): Staff | undefined {
  return state.staff.find((s) => s.role === "software_engineer");
}

export function canHireEngineer(state: StudioState, cfg: Config): boolean {
  if (!cfg.formats.streaming || state.platform || engineerOf(state)) return false;
  return state.cash >= 0 && state.prestige >= cfg.streaming.unlock.prestige && canHire(state) && state.cash >= cfg.streaming.engineer.hireCost;
}

/** Titles eligible for the catalog: studio-owned, commercial run (or Original debut window) finished. */
export function finishedTitles(state: StudioState): Release[] {
  return state.releases.filter((r) => !r.active);
}

export function streamingRequirements(state: StudioState, cfg: Config) {
  const u = cfg.streaming.unlock;
  const eng = engineerOf(state);
  return {
    prestige: { need: u.prestige, have: state.prestige, ok: state.prestige >= u.prestige },
    cash: { need: cfg.streaming.buildCost, have: Math.round(state.cash), ok: state.cash >= cfg.streaming.buildCost },
    catalog: { need: u.minCatalog, have: finishedTitles(state).length, ok: finishedTitles(state).length >= u.minCatalog },
    engineer: { ok: !!eng && !eng.assignment },
  };
}

export function canBuildStreaming(state: StudioState, cfg: Config): boolean {
  if (!cfg.formats.streaming || state.platform) return false;
  const r = streamingRequirements(state, cfg);
  return r.prestige.ok && r.cash.ok && r.catalog.ok && r.engineer.ok;
}

export function hireEngineer(state: StudioState, cfg: Config): Staff {
  if (!canHireEngineer(state, cfg)) throw new Error("Cannot hire a Software Engineer now");
  const [lo, hi] = cfg.streaming.engineer.statRange;
  const stats = {} as Record<Meter, number>;
  for (const m of METERS) stats[m] = int(state.rng, "staff", lo, hi);
  const s: Staff = { id: newId(state, "eng"), name: randomName(state), stats, totalXp: 0, wage: cfg.streaming.engineer.wage, role: "software_engineer", assignment: null };
  ledger(state, { kind: "hire", amount: -cfg.streaming.engineer.hireCost, note: `${s.name} (Software Engineer)` });
  state.staff.push(s);
  emit(state, "hire", `Hired Software Engineer ${s.name}. They can build a streaming service; until then they work on productions like anyone else.`);
  return s;
}

export function buildStreaming(state: StudioState, cfg: Config): void {
  if (!canBuildStreaming(state, cfg)) throw new Error("Streaming requirements not met");
  const eng = engineerOf(state)!;
  ledger(state, { kind: "platform_build", amount: -cfg.streaming.buildCost, note: "streaming service build" });
  eng.assignment = { kind: "streaming_build", sinceWeek: state.week, untilWeek: state.week + cfg.streaming.buildWeeks };
  state.platform = {
    status: "building",
    buildStartWeek: state.week,
    launchWeek: null,
    engineerId: eng.id,
    buildCost: cfg.streaming.buildCost,
    subscribers: 0,
    catalog: [],
    lastFreshWeek: state.week,
    restlessWarned: false,
    totals: { gross: 0, opex: 0, acquired: 0, churned: 0 },
    weekly: [],
  };
  emit(state, "streaming", `${eng.name} starts building the streaming service (${cfg.streaming.buildWeeks} weeks, in the background). They are off productions until it launches.`);
}

/** How much a catalog title helps retention: quality x freshness; Hall of Fame titles are evergreens. */
export function titleAppeal(cfg: Config, rel: Release, ageWeeks: number): number {
  const c = cfg.streaming.churn;
  const q = Math.max(0, (rel.avgScore - 5) / 5);
  const fresh = Math.pow(0.5, ageWeeks / c.freshnessHalfLifeWeeks);
  return rel.hallOfFame ? q * c.hofEvergreen * Math.max(fresh, c.evergreenFloor) : q * fresh;
}

export function catalogRetention(state: StudioState, cfg: Config, p: PlatformState): { retention: number; value: number; genres: number } {
  const c = cfg.streaming.churn;
  const byId = new Map(state.releases.map((r) => [r.id, r]));
  let value = 0;
  const genres = new Set<string>();
  for (const e of p.catalog) {
    const r = byId.get(e.releaseId)!;
    value += titleAppeal(cfg, r, state.week - e.joinWeek);
    genres.add(r.genre);
  }
  const diversity = Math.min(c.diversityMax, c.diversityPerGenre * genres.size);
  const retention = Math.min(0.95, c.retentionMax * (1 - Math.exp(-value / c.catalogScale)) + (value > 0 ? diversity : 0));
  return { retention: round2(retention), value: round2(value), genres: genres.size };
}

function joinCatalog(state: StudioState, p: PlatformState, rel: Release): boolean {
  if (p.catalog.some((e) => e.releaseId === rel.id)) return false; // never twice
  p.catalog.push({ releaseId: rel.id, joinWeek: state.week });
  rel.inCatalog = true;
  p.lastFreshWeek = state.week;
  return true;
}

/** Called when a release's run ends. Traditional titles and Originals join once; no payout restarts. */
export function onRunEnded(state: StudioState, cfg: Config, rel: Release): void {
  const p = state.platform;
  if (!cfg.formats.streaming || !p || p.status !== "live") return;
  if (joinCatalog(state, p, rel)) {
    emit(state, "catalog", `${rel.title} finished its ${rel.route === "original" ? "debut window" : "commercial run"} and joined your streaming catalog (retention value only; no new payouts).`, { releaseId: rel.id });
  }
}

/** One aggregate weekly step: build progress, launch, acquisition, churn, subscription income, operating cost. */
export function streamingWeek(state: StudioState, cfg: Config): void {
  const p = state.platform;
  if (!p) return;
  const S = cfg.streaming;
  if (p.status === "building") {
    const eng = state.staff.find((s) => s.id === p.engineerId)!;
    if (eng.assignment && state.week >= eng.assignment.untilWeek) {
      p.status = "live";
      p.launchWeek = state.week;
      eng.assignment = null;
      p.lastFreshWeek = state.week;
      for (const r of finishedTitles(state)) joinCatalog(state, p, r);
      const appeal = p.catalog.reduce((a, e) => a + titleAppeal(cfg, state.releases.find((r) => r.id === e.releaseId)!, 0), 0);
      const launch = Math.round(Math.min(S.launchMax, S.launchPerAppeal * appeal, S.reachableMarket));
      p.subscribers = launch;
      p.totals.acquired += launch;
      emit(state, "streaming", `Streaming service launched with ${p.catalog.length} catalog titles and ${launch.toLocaleString()} launch subscribers (one-time, from catalog appeal ${round2(appeal)}). ${eng.name} is back on productions.`, { launch, catalog: p.catalog.length });
    }
    return;
  }
  const M = S.reachableMarket;
  const room = () => Math.max(0, 1 - p.subscribers / M);
  const sources: Record<string, number> = {};
  let acquired = 0;
  // Originals: people newly drawn in by an Original subscribe (bounded by the reachable market)
  for (const r of state.releases) {
    if (r.route !== "original" || !r.active || !r.weekly.length) continue;
    const last = r.weekly.at(-1)!;
    if (last.week !== state.week) continue;
    const newPeople = (r.trace.newSamplersThisWeek as number | undefined) ?? 0;
    const add = newPeople * S.originalConversion * room();
    if (add > 0) {
      sources[`original:${r.title}`] = Math.round(add);
      acquired += add;
    }
  }
  // Fresh catalog additions this week: a small, one-time pull from people who already liked the title
  for (const e of p.catalog) {
    if (e.joinWeek !== state.week) continue; // joined this week (launch-week bulk joins never reach here)
    const r = state.releases.find((x) => x.id === e.releaseId)!;
    const add = S.catalogJoinConversion * (r.uniqueViewers ?? r.totalViewers) * Math.max(0, (r.avgScore - 5) / 5) * room();
    if (add > 0 && r.route !== "original") {
      sources[`catalog_join:${r.title}`] = Math.round(add);
      acquired += add;
    }
  }
  acquired = Math.min(acquired, M - p.subscribers);
  const ret = catalogRetention(state, cfg, p);
  const c = S.churn;
  const quiet = state.week - p.lastFreshWeek;
  const quietMult = 1 + Math.min(c.quietMax - 1, (c.quietPenaltyPer26Weeks * Math.max(0, quiet - c.quietGraceWeeks)) / 26);
  if (quiet > c.quietGraceWeeks && !p.restlessWarned) {
    p.restlessWarned = true;
    emit(state, "streaming", `Subscribers are getting restless: nothing new for ${quiet} weeks. Cancellations are rising (catalog retention ${Math.round(ret.retention * 100)}% softens it).`);
  }
  if (quiet <= c.quietGraceWeeks) p.restlessWarned = false;
  const churnRate = c.basePerWeek * (1 - ret.retention) * quietMult;
  const churned = p.subscribers * churnRate;
  const subs = Math.max(0, Math.min(M, Math.round(p.subscribers + acquired - churned)));
  const gross = round2(subs * S.feePerSubWeek);
  const opex = round2(S.opex.fixedPerWeek + S.opex.perSubPerWeek * subs);
  if (gross > 0) ledger(state, { kind: "subscriptions", amount: gross, note: `${subs} subscribers` });
  ledger(state, { kind: "platform_opex", amount: -opex, note: "platform operating cost" });
  p.subscribers = subs;
  p.totals.gross = round2(p.totals.gross + gross);
  p.totals.opex = round2(p.totals.opex + opex);
  p.totals.acquired += Math.round(acquired);
  p.totals.churned += Math.round(churned);
  p.weekly.push({ week: state.week, subs, acquired: Math.round(acquired), churned: Math.round(churned), gross, opex, retention: ret.retention, sources });
}

export function decayAnticipation(state: StudioState, cfg: Config): void {
  const k = 1 - cfg.tv.announce.decayPerWeek;
  for (const id of Object.keys(state.ips).sort()) {
    const ip = state.ips[id];
    if (ip.anticipation) ip.anticipation = Math.round(ip.anticipation * k * 10000) / 10000;
  }
}

export function isTvIp(state: StudioState, ipId: string): boolean {
  return formatOf(state.ips[ipId]) === "tv";
}
