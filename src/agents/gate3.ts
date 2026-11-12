// Gate 3 policies (visible information only: revealed combo grades, offers, known IP scores/fans, own cash,
// Prestige, catalog and subscriber numbers). They never read hidden combo grades or future RNG.
// They intentionally differ in format mix, renewal appetite and streaming stance so results show contrast.
import type { Config } from "../core/config";
import { formatSpec, renewalStatus } from "../core/formats";
import type { Choices, Decision, Offer, PlanDecision, StudioState } from "../core/types";
import { G, affordableCards, balancedStar, bestBy, campaign, knownValue, planScore, reinvest, type AgentCtx, type Strategy } from "./strategies";
import { starFit } from "../core/stars";

type Fmt = "movie" | "limited_series" | "tv";

function plansOf(ch: Choices, f: Fmt, rel: "new" | "season" = "new"): PlanDecision[] {
  return ch.options.filter((o): o is PlanDecision => o.type === "plan" && o.ipRelation === rel && (o.format ?? "movie") === f);
}

/** Preferred season order: cfg.agents.tvOrderPreference ("max" or a number), capped by what the studio may order. */
function orderPick(cfg: Config, plans: PlanDecision[]): number | null {
  const sizes = [...new Set(plans.map((p) => p.episodes!))].sort((a, b) => a - b);
  if (!sizes.length) return null;
  const pref = (cfg.agents as { tvOrderPreference?: string | number }).tvOrderPreference ?? "max";
  if (pref === "max") return sizes.at(-1)!;
  const want = Number(pref);
  return [...sizes].reverse().find((n) => n <= want) ?? sizes[0];
}

function bestNew(state: StudioState, cfg: Config, ch: Choices, f: Fmt, rng: () => number, explore = 0.3): PlanDecision | null {
  let ps = plansOf(ch, f);
  if (!ps.length) return null;
  if (f === "tv") {
    const n = orderPick(cfg, ps);
    ps = ps.filter((p) => p.episodes === n);
  }
  return bestBy(ps, (p) => planScore(state, p, explore), rng);
}

/** Visible: net per production week of the show's most recent FINISHED season (null if none finished yet). */
function lastFinishedNetPerWeek(state: StudioState, cfg: Config, ipId: string): number | null {
  const done = state.releases.filter((r) => r.ipId === ipId && !r.active).at(-1);
  if (!done || done.route === "original") return null; // Originals are judged by subscribers, not box office: no money test
  const weeks = Math.round(cfg.tv.durationBaseWeeks + cfg.tv.weeksPerEpisode * (done.episodes ?? 0));
  return (done.studioTake + done.surplusKept - done.cashOverrun) / weeks;
}

/**
 * Renew a show if its last season met `minAvg`; twist when it is tiring (visible: score trend + season count).
 * Follow-up: with cfg.agents.economicRenewal, sensible policies ignore their old fixed season limit and instead stop
 * when the last finished season stopped paying (`stubborn` policies renew anything renewable).
 */
function renewal(state: StudioState, cfg: Config, ch: Choices, minAvg: number, maxSeasons: number, twistBelow: number, rng: () => number, stubborn = false): PlanDecision | null {
  const econ = (cfg.agents as { economicRenewal?: boolean }).economicRenewal && !stubborn;
  if (econ) maxSeasons = Infinity;
  const seasons = plansOf(ch, "tv", "season");
  if (!seasons.length) return null;
  const ips = [...new Set(seasons.map((p) => p.parentIpId!))];
  let best: PlanDecision | null = null;
  let bestFans = -1;
  for (const ipId of ips) {
    const ip = state.ips[ipId];
    const rels = state.releases.filter((r) => r.ipId === ipId);
    const last = rels.at(-1)!;
    if (last.avgScore < minAvg || rels.length >= maxSeasons) continue;
    if (state.project) continue;
    if (econ) {
      const ag = cfg.agents as { renewMinNetPerWeek?: number; renewalUsesShowMoney?: boolean; renewMinAllInNetPerWeek?: number };
      const sm = ag.renewalUsesShowMoney ? ch.showMoney?.[ipId] : undefined;
      if (sm) {
        // 2026-11-12: judge the LATEST season (even while it airs) all-in, exactly as the renewal screen shows it
        if (sm.projectedNet / Math.max(1, sm.productionWeeks) < (ag.renewMinAllInNetPerWeek ?? 0)) continue;
      } else {
        const net = lastFinishedNetPerWeek(state, cfg, ipId);
        if (net !== null && net < ag.renewMinNetPerWeek!) continue; // voluntarily stop: it no longer pays
      }
    }
    const mine = seasons.filter((p) => p.parentIpId === ipId);
    const n = orderPick(cfg, mine);
    let pick = mine.find((p) => p.episodes === n && !p.twistTheme)!;
    const declining = rels.length >= 2 && last.avgScore < rels.at(-2)!.avgScore;
    if (last.avgScore < twistBelow && declining) {
      // twist only toward a theme whose combo with this genre the studio has SEEN to be good (no hidden peeking)
      const twists = mine.filter((p) => p.episodes === n && p.twistTheme && (knownValue(state, p.genre, p.twistTheme) ?? -9) >= 0.5);
      if (twists.length) pick = bestBy(twists, (p) => knownValue(state, p.genre, p.twistTheme!)!, rng);
    }
    if (ip.fans > bestFans) {
      bestFans = ip.fans;
      best = pick;
    }
  }
  return best;
}

/** Visible expected gross scales with format base cost (a rough player heuristic, not hidden info). */
function offerValue(state: StudioState, cfg: Config, o: Offer): number {
  const plan = state.pendingPlan!;
  const scale = formatSpec(cfg, plan.format ?? "movie", plan.episodes).baseCost / cfg.production.movie.baseCost;
  return o.advance + (1 - o.royalty) * o.reach * G * scale;
}

function pitch(state: StudioState, cfg: Config, ch: Choices, rng: () => number, originalIf: boolean): Decision {
  if (originalIf && ch.options.some((o) => o.type === "choose_offer" && (o as { original?: boolean }).original)) return { type: "choose_offer", distributorId: null, original: true };
  const best = bestBy(ch.offers ?? [], (o) => offerValue(state, cfg, o), rng);
  return { type: "choose_offer", distributorId: best.distributorId };
}

function casting(state: StudioState, cfg: Config, ch: Choices, rng: () => number): Decision {
  const ip = state.project ? state.ips[state.project.ipId] : null;
  if (state.project?.ipRelation === "season" && ip?.establishedStarId) {
    const ret = affordableCards(ch).find((c) => c.starId === ip.establishedStarId);
    if (ret) return { type: "cast", starId: ret.starId }; // keep the established lead (relationship + continuity)
  }
  return balancedStar(state, cfg, ch, rng);
}

/** Expansions available now: TV unlock, season announcements (one per season), engineer, platform build. */
function expansions(state: StudioState, cfg: Config, ch: Choices, wantStreaming: boolean, announceAbove: number): Decision | null {
  const has = (t: string) => ch.options.find((o) => o.type === t);
  const tv = has("unlock_tv");
  if (tv) return tv;
  if (wantStreaming) {
    const b = has("build_streaming");
    if (b) return b;
    const e = has("hire_engineer");
    if (e && state.cash > cfg.streaming.buildCost * 0.5) return e;
  }
  if (state.cash > announceAbove) {
    const a = ch.options.find((o): o is { type: "announce_season"; ipId: string } => o.type === "announce_season" && renewalStatus(state, cfg, state.ips[o.ipId]).lastAvg! >= 6);
    if (a) return a;
  }
  return null;
}

/**
 * Follow-up policy rule (visible info only): dismiss the weakest non-engineer employee (lowest stat total; ties by id)
 * (a) to make room for the Software Engineer when the studio is full and ready for streaming, or
 * (b) when cash is below cfg.agents.fireDebtThreshold (cost cutting).
 */
function firingDecision(state: StudioState, cfg: Config, ch: Choices, wantsEngineerSlot: boolean): Decision | null {
  const fires = ch.options.filter((o): o is { type: "fire"; staffId: string } => o.type === "fire");
  if (!fires.length) return null;
  const ready = wantsEngineerSlot && state.staff.length >= state.maxStaff && state.prestige >= cfg.streaming.unlock.prestige && state.cash > cfg.streaming.buildCost * 0.5;
  const debt = state.cash < ((cfg.agents as { fireDebtThreshold?: number }).fireDebtThreshold ?? -Infinity);
  if (!ready && !debt) return null;
  const sum = (id: string) => Object.values(state.staff.find((s) => s.id === id)!.stats).reduce((a, b) => a + b, 0);
  const cands = fires.filter((f) => state.staff.find((s) => s.id === f.staffId)!.role !== "software_engineer");
  if (!cands.length) return null;
  return [...cands].sort((a, b) => sum(a.staffId) - sum(b.staffId) || (a.staffId < b.staffId ? -1 : 1))[0];
}

interface G3Policy {
  id: string;
  description: string;
  wantStreaming: boolean;
  /** pick the plan for this stop; return null to fall back to a movie */
  plan(state: StudioState, cfg: Config, ch: Choices, rng: () => number, ctx: AgentCtx): PlanDecision | null;
  original(state: StudioState, cfg: Config): boolean;
  marketing: string[];
}

function makeStrategy(p: G3Policy): Strategy {
  return {
    id: p.id,
    description: p.description,
    decide(state, cfg, ch, rng, ctx) {
      switch (ch.phase) {
        case "planning": {
          const x = expansions(state, cfg, ch, p.wantStreaming, 120000);
          if (x && ctx.reinvestsThisStop < 3) return x;
          const lastLevel = state.capacityLevel >= (cfg.staffCapacity.ladder as number[]).length - 1;
          const noEngineer = !state.platform && !state.staff.some((s) => s.role === "software_engineer");
          const useFiring = !!(cfg.agents as { useFiring?: boolean }).useFiring;
          if (useFiring && ctx.lastFireWeek !== state.week) {
            const f = firingDecision(state, cfg, ch, p.wantStreaming && noEngineer && lastLevel);
            if (f) {
              ctx.lastFireWeek = state.week;
              return f;
            }
          }
          // without firing, a studio that wants streaming keeps one slot free at its top capacity for the engineer
          const reserve = !useFiring && p.wantStreaming && noEngineer && lastLevel && state.staff.length + 1 >= state.maxStaff;
          const r = reinvest(state, cfg, ch, ctx, { hireAbove: reserve ? undefined : 140000, newHiring: true, upgradeBuffer: 150000, trainAbove: 80000 });
          if (r) return r;
          const plan = p.plan(state, cfg, ch, rng, ctx) ?? bestNew(state, cfg, ch, "movie", rng)!;
          ctx.lastFormat = plan.format ?? "movie";
          return plan;
        }
        case "production": {
          // background actions while producing: announcements and the streaming build (never a second production)
          const x = expansions(state, cfg, ch, p.wantStreaming, 160000);
          if (x && x.type !== "unlock_tv" && ctx.reinvestsThisStop < 1) return x;
          return { type: "wait" };
        }
        case "pitch":
          return pitch(state, cfg, ch, rng, p.original(state, cfg));
        case "casting":
          return casting(state, cfg, ch, rng);
        case "marketing":
          return campaign(ch, p.marketing);
        default:
          return { type: "wait" };
      }
    },
  };
}

const live = (s: StudioState) => s.platform?.status === "live";
const originalBudget = (s: StudioState, cfg: Config) => s.cash > (s.pendingPlan ? formatSpec(cfg, s.pendingPlan.format ?? "movie", s.pendingPlan.episodes).baseCost : 0) + 150000;

const POLICIES: G3Policy[] = [
  {
    id: "tv-first",
    description: "Unlocks TV as early as it can and makes TV its main format; renews shows that review ≥ 6.0 (traditional distribution only)",
    wantStreaming: false,
    marketing: ["medium", "small"],
    original: () => false,
    plan(state, cfg, ch, rng) {
      return renewal(state, cfg, ch, 6.0, 8, 6.5, rng) ?? bestNew(state, cfg, ch, "tv", rng) ?? bestNew(state, cfg, ch, "limited_series", rng);
    },
  },
  {
    id: "renewal-franchise",
    description: "IP franchise studio: keeps renewing every show while it is renewable (avg ≥ 4.0), twisting when it tires; movies before TV",
    wantStreaming: false,
    marketing: ["small"],
    original: () => false,
    plan(state, cfg, ch, rng) {
      return renewal(state, cfg, ch, cfg.tv.renewalThreshold, 99, 6.0, rng, true) ?? bestNew(state, cfg, ch, "tv", rng);
    },
  },
  {
    id: "mixed",
    description: "Alternates movie → limited series → TV; renews good shows; builds streaming and releases every other title as an Original once live",
    wantStreaming: true,
    marketing: ["medium", "small"],
    original: (s, cfg) => live(s) && s.releases.filter((r) => r.releaseWeek >= s.platform!.launchWeek!).length % 2 === 0 && originalBudget(s, cfg),
    plan(state, cfg, ch, rng, ctx) {
      const order: Fmt[] = ["movie", "limited_series", "tv"];
      const next = order[(order.indexOf((ctx.lastFormat as Fmt) ?? "tv") + 1) % order.length];
      if (next === "tv") return renewal(state, cfg, ch, 6.5, 6, 6.5, rng) ?? bestNew(state, cfg, ch, "tv", rng) ?? bestNew(state, cfg, ch, "limited_series", rng);
      return bestNew(state, cfg, ch, next, rng);
    },
  },
  {
    id: "streaming-pivot",
    description: "Movies until it can build streaming as early as possible, then self-funds Streaming Originals (movies and TV) whenever cash allows",
    wantStreaming: true,
    marketing: ["medium", "small"],
    original: (s, cfg) => live(s) && originalBudget(s, cfg),
    plan(state, cfg, ch, rng) {
      if (live(state)) return renewal(state, cfg, ch, 6.0, 6, 6.5, rng) ?? (rng() < 0.5 ? bestNew(state, cfg, ch, "tv", rng) : null);
      return null;
    },
  },
  {
    id: "traditional-holdout",
    description: "Mixed movies/TV/limited through distributors only; never builds streaming",
    wantStreaming: false,
    marketing: ["medium", "small"],
    original: () => false,
    plan(state, cfg, ch, rng) {
      const r = renewal(state, cfg, ch, 6.5, 6, 6.5, rng);
      if (r) return r;
      const roll = rng();
      if (roll < 0.35) return bestNew(state, cfg, ch, "tv", rng);
      if (roll < 0.6) return bestNew(state, cfg, ch, "limited_series", rng);
      return null;
    },
  },
  {
    id: "limited-focus",
    description: "Makes limited series whenever available (never TV); traditional distribution",
    wantStreaming: false,
    marketing: ["small"],
    original: () => false,
    plan(state, cfg, ch, rng) {
      return bestNew(state, cfg, ch, "limited_series", rng);
    },
  },
];

/** ADVERSARIAL Gate 3: orders the biggest cheapest TV seasons, no Star budget, no marketing; renews anything renewable. */
const tvDuds: Strategy = {
  id: "tv-duds",
  description: "ADVERSARIAL: cheap long TV seasons with the cheapest Star and no marketing, renewing anything renewable",
  decide(state, cfg, ch, rng, ctx) {
    switch (ch.phase) {
      case "planning": {
        const tv = ch.options.find((o) => o.type === "unlock_tv");
        if (tv) return tv;
        const r = renewal(state, cfg, ch, cfg.tv.renewalThreshold, 99, -1, rng);
        if (r) return r;
        const ps = plansOf(ch, "tv");
        if (ps.length) {
          const max = Math.max(...ps.map((p) => p.episodes!));
          const c = ps.filter((p) => p.episodes === max);
          return c[Math.floor(rng() * c.length)];
        }
        const m = ch.options.filter((o): o is PlanDecision => o.type === "plan" && o.ipRelation === "new" && !o.format);
        return m[Math.floor(rng() * m.length)];
      }
      case "pitch":
        return { type: "choose_offer", distributorId: bestBy(ch.offers ?? [], (o) => o.advance, rng).distributorId };
      case "casting":
        return { type: "cast", starId: bestBy(affordableCards(ch), (c) => -c.price, rng).starId };
      case "marketing":
        return { type: "market", campaign: "none" };
      default:
        return { type: "wait" };
    }
  },
};

export const GATE3_STRATEGY_IDS = [...POLICIES.map((p) => p.id), tvDuds.id];

export function registerGate3Strategies(reg: Record<string, Strategy>): void {
  for (const p of POLICIES) reg[p.id] = makeStrategy(p);
  reg[tvDuds.id] = tvDuds;
}

export { starFit };
