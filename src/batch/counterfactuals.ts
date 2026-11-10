// Gate 3 counterfactual cases (handoff §G5). Each case plays a named strategy on a named seed up to a decision
// point, clones the exact state, and plays two or more branches with the SAME rules. Branches diverge only by
// the stated choice (later RNG paths may differ; the seed and inputs are identical). Deterministic.
import type { Config } from "../core/config";
import { withOverrides } from "../core/config";
import { makeAgentRng } from "../core/rng";
import { advanceWeek, applyDecision, createStudio, getChoices } from "../core/simulation";
import { catalogRetention, streamingWeek } from "../core/streaming";
import { hiatusMultiplier } from "../core/formats";
import type { Choices, Decision, PlanDecision, Release, StudioState } from "../core/types";
import { STRATEGIES, type AgentCtx } from "../agents/strategies";

interface Driver {
  state: StudioState;
  ctx: AgentCtx;
  rng: () => number;
}

function drive(seed: number, strategy: string, cfg: Config, until: (s: StudioState, ch: Choices) => boolean, maxWeeks = 52 * 40): Driver {
  const state = createStudio(seed, cfg);
  const rng = makeAgentRng(seed, strategy);
  const ctx: AgentCtx = { reinvestsThisStop: 0 };
  while (state.week < maxWeeks) {
    const ch = getChoices(state, cfg);
    if (until(state, ch)) break;
    const d = STRATEGIES[strategy].decide(state, cfg, ch, rng, ctx);
    if (d.type === "hire" || d.type === "train" || d.type === "studio_ads" || d.type === "research_theme") ctx.reinvestsThisStop += 1;
    else ctx.reinvestsThisStop = 0;
    applyDecision(state, cfg, d);
  }
  return { state, ctx, rng };
}

/** Finish the current project with simple choices (best advance, keep established lead or cheapest Star, chosen campaign), then drain its run. */
function finish(state: StudioState, cfg: Config, opts: { selfFund?: boolean; original?: boolean; campaign?: string } = {}): Release {
  const before = state.releases.length;
  for (let i = 0; i < 400 && state.releases.length === before; i++) {
    const ch = getChoices(state, cfg);
    let d: Decision = { type: "wait" };
    if (ch.phase === "pitch") {
      if (opts.original) d = { type: "choose_offer", distributorId: null, original: true };
      else if (opts.selfFund) d = { type: "choose_offer", distributorId: null };
      else d = { type: "choose_offer", distributorId: [...ch.offers!].sort((a, b) => b.advance - a.advance)[0].distributorId };
    } else if (ch.phase === "casting") {
      const ip = state.ips[state.project!.ipId];
      const keep = ch.auditionCards!.find((c) => c.affordable && c.starId === ip?.establishedStarId);
      d = { type: "cast", starId: keep ? keep.starId : [...ch.auditionCards!].filter((c) => c.affordable).sort((a, b) => b.price - a.price)[0].starId };
    } else if (ch.phase === "marketing") {
      const want = opts.campaign ?? "small";
      d = { type: "market", campaign: ch.campaigns!.find((c) => c.id === want && c.affordable) ? want : "none" };
    }
    applyDecision(state, cfg, d);
  }
  const rel = state.releases[before];
  while (rel.active) advanceWeek(state, cfg);
  return rel;
}

const sum = (r: Release) => ({
  title: r.title,
  format: r.format ?? "movie",
  route: r.route ?? "traditional",
  week: r.releaseWeek,
  audience: r.audience,
  critic: r.critic,
  avg: r.avgScore,
  hof: r.hallOfFame,
  reachCap: r.reachCap,
  opening: r.openingViewers,
  distinct: r.uniqueViewers ?? r.totalViewers,
  weekly: r.weekly.map((w) => w.viewers),
  gross: Math.round(r.grossTotal),
  studioTake: Math.round(r.studioTake),
  fans: (r.trace.ipFans as { before: number; after: number } | undefined) ?? null,
  tv: r.trace.tv ?? null,
});

export interface CaseResult {
  id: string;
  question: string;
  setup: string;
  branches: { name: string; facts: Record<string, unknown> }[];
  reading: string;
}

function planWhere(ch: Choices, f: (p: PlanDecision) => boolean): PlanDecision | undefined {
  return ch.options.find((o): o is PlanDecision => o.type === "plan" && f(o));
}

export function runCounterfactuals(cfg: Config): CaseResult[] {
  const out: CaseResult[] = [];

  // C1 high-quality, low-reach limited series: same plan, distributor reach vs self-funded small reach
  {
    const d = drive(3, "limited-focus", cfg, (s, ch) => s.week > 52 * 8 && ch.phase === "planning" && !!planWhere(ch, (p) => p.format === "limited_series"));
    const known = d.state.comboBook;
    const best = getChoices(d.state, cfg).options.filter((o): o is PlanDecision => o.type === "plan" && o.format === "limited_series").sort((a, b) => score(known, b) - score(known, a))[0];
    const A = structuredClone(d.state);
    applyDecision(A, cfg, best);
    const ra = finish(A, cfg, {});
    const B = structuredClone(d.state);
    applyDecision(B, cfg, best);
    const rb = finish(B, cfg, { selfFund: true });
    out.push({
      id: "C1",
      question: "High-quality but low-reach limited series",
      setup: `limited-focus, seed 3, year ${(d.state.week / 52).toFixed(1)}: the same ${best.genre} + ${best.theme} limited series, distributor-backed vs self-funded (small reach).`,
      branches: [
        { name: "distributor (largest advance)", facts: sum(ra) },
        { name: "self-funded (small reach)", facts: sum(rb) },
      ],
      reading: `Scores are identical (same production): reach changes viewers and money, never reviews. The capped run sells out ${Math.round((100 * (rb.uniqueViewers ?? 0)) / rb.reachCap)}% of its small reach: excellent content grows within reach but cannot exceed it.`,
    });
  }

  // C2 popular long-running show with fatigue
  {
    const d = drive(1, "renewal-franchise", cfg, (s) => s.week >= 52 * 20);
    const ip = Object.values(d.state.ips).filter((i) => i.format === "tv").sort((a, b) => b.titles.length - a.titles.length)[0];
    const seasons = d.state.releases.filter((r) => r.ipId === ip.id);
    out.push({
      id: "C2",
      question: "Popular long-running show with fatigue",
      setup: `renewal-franchise, seed 1, 20 in-game years: its longest show "${ip.name}" (${seasons.length} seasons).`,
      branches: [
        {
          name: "season by season",
          facts: {
            seasons: seasons.map((r) => ({ s: r.seasonNumber, eps: r.episodes, avg: r.avgScore, showFatigue: (r.trace.tv as { showFatigue?: { fatigue: number } })?.showFatigue?.fatigue ?? 0, twist: (r.trace.tv as { twistTheme?: string | null })?.twistTheme ?? null, distinct: r.uniqueViewers, gross: Math.round(r.grossTotal), fansAfter: (r.trace.ipFans as { after: number } | undefined)?.after ?? null })),
          },
        },
      ],
      reading: `Fatigue grows each season (capped at ${cfg.tv.fatigue.max * 100}%), so scores slide toward a floor near the renewal-safe range: with the cap, a show can stay renewable indefinitely. Whether fatigue should eventually force an ending is a designer call.`,
    });
  }

  // C3 bad twist vs no twist (same show, same season)
  {
    const d = drive(4, "tv-first", cfg, (s, ch) => ch.phase === "planning" && s.releases.filter((r) => r.format === "tv" && r.ipRelation === "season").length >= 1 && !!planWhere(ch, (p) => p.ipRelation === "season" && !!p.twistTheme && grade(s, p) <= -1));
    const ch = getChoices(d.state, cfg);
    const bad = planWhere(ch, (p) => p.ipRelation === "season" && !!p.twistTheme && grade(d.state, p) <= -1);
    const good = planWhere(ch, (p) => p.ipRelation === "season" && !!p.twistTheme && p.episodes === bad?.episodes && p.parentIpId === bad?.parentIpId && grade(d.state, p) >= 1);
    const plain = planWhere(ch, (p) => p.ipRelation === "season" && !p.twistTheme && p.episodes === bad?.episodes && p.parentIpId === bad?.parentIpId);
    const branches: CaseResult["branches"] = [];
    for (const [name, p] of [["no twist", plain], ["bad twist (D/F combo)", bad], ["good twist (A/B combo)", good]] as const) {
      if (!p) continue;
      const S = structuredClone(d.state);
      applyDecision(S, cfg, p);
      const r = finish(S, cfg);
      branches.push({ name, facts: { ...sum(r), fansNow: S.ips[r.ipId].fans, fatigueSeasonsNow: S.ips[r.ipId].fatigueSeasons, showTheme: S.ips[r.ipId].showTheme, genre: r.genre } });
    }
    out.push({ id: "C3", question: "Show with a bad twist (vs no twist, vs a good twist)", setup: `tv-first, seed 4, year ${(d.state.week / 52).toFixed(1)}: same show, same order size, three branches for the next season (combo grades shown only for the test construction).`, branches, reading: "The twist season is scored with the twist combo's grades. A bad twist costs fans immediately; a good twist lowers accumulated fatigue for this and later seasons. Genre and IP never change." });
  }

  // C4 major TV hit paused for several years (hiatus), with and without an announcement
  {
    const d = drive(2, "tv-first", cfg, (s, ch) => ch.phase === "planning" && s.releases.some((r) => r.format === "tv" && r.avgScore >= 8 && !r.active) && !!planWhere(ch, (p) => p.ipRelation === "season" && !p.twistTheme));
    const ch = getChoices(d.state, cfg);
    const p = planWhere(ch, (x) => x.ipRelation === "season" && !x.twistTheme && d.state.releases.filter((r) => r.ipId === x.parentIpId).at(-1)!.avgScore >= 8)!;
    const branches: CaseResult["branches"] = [];
    for (const [name, wait, announce] of [["order now", 0, false], ["pause 3 years", 156, false], ["pause 3 years, announce 6 months before ordering", 156, true]] as const) {
      const S = structuredClone(d.state);
      for (let i = 0; i < wait; i++) {
        if (announce && i === wait - 26) {
          const a = getChoices(S, cfg).options.find((o) => o.type === "announce_season" && (o as { ipId: string }).ipId === p.parentIpId);
          if (a) applyDecision(S, cfg, a);
        }
        advanceWeek(S, cfg);
      }
      const h = hiatusMultiplier(S, cfg, S.ips[p.parentIpId!]);
      const fansBefore = S.ips[p.parentIpId!].fans;
      const prevScores = S.releases.filter((r) => r.ipId === p.parentIpId).map((r) => r.avgScore);
      const replan = getChoices(S, cfg).options.find((o) => JSON.stringify(o) === JSON.stringify(p)) as PlanDecision | undefined;
      if (!replan) continue;
      applyDecision(S, cfg, replan);
      const r = finish(S, cfg);
      branches.push({ name, facts: { gapWeeks: h.gapWeeks, hiatusMult: h.mult, fansBeforeOrdering: fansBefore, earlierSeasonScoresUnchanged: JSON.stringify(prevScores) === JSON.stringify(S.releases.filter((x) => x.ipId === p.parentIpId).slice(0, prevScores.length).map((x) => x.avgScore)), ...sum(r) } });
    }
    out.push({ id: "C4", question: "Major TV hit paused for several years", setup: `tv-first, seed 2, year ${(d.state.week / 52).toFixed(1)}: a show whose last season averaged ≥ 8; next season ordered now vs after a 3-year pause (with/without an announcement).`, branches, reading: "Hiatus lowers only the opening's anticipation terms (fans' awareness and announcement hype); past scores never change. Fans still drift down through the existing yearly IP fan decay, which is not a hiatus penalty." });
  }

  // C5 rare Hall of Fame IP: evergreen retention vs a non-HoF title of the same age
  {
    const d = drive(2, "mixed", cfg, (s) => s.platform?.status === "live" && s.week >= (s.platform.launchWeek ?? 0) + 52);
    const p = d.state.platform!;
    const byId = new Map(d.state.releases.map((r) => [r.id, r]));
    const hof = p.catalog.map((c) => byId.get(c.releaseId)!).filter((r) => r.hallOfFame);
    const strongNon = p.catalog.map((c) => byId.get(c.releaseId)!).filter((r) => !r.hallOfFame).sort((a, b) => b.avgScore - a.avgScore)[0];
    const base = catalogRetention(d.state, cfg, p);
    const withoutHof = structuredClone(d.state);
    withoutHof.platform!.catalog = withoutHof.platform!.catalog.filter((c) => !byId.get(c.releaseId)!.hallOfFame);
    out.push({ id: "C5", question: "Rare Hall of Fame IP (evergreen catalog value)", setup: `mixed, seed 2, one year after its platform launched (${p.catalog.length} catalog titles, ${hof.length} Hall of Fame).`, branches: [{ name: "catalog as is", facts: { retention: base.retention, catalogValue: base.value, hofTitles: hof.map((r) => `${r.title} (${r.avgScore})`), bestNonHof: strongNon ? `${strongNon.title} (${strongNon.avgScore})` : null } }, { name: "same catalog without its Hall of Fame titles", facts: catalogRetention(withoutHof, cfg, withoutHof.platform!) }], reading: "Hall of Fame titles keep a retention floor as they age (evergreens), so removing them lowers retention more than their count suggests. They never add subscribers on their own." });
  }

  // C6 Streaming Originals during cash trouble
  {
    const d = drive(1, "streaming-pivot", cfg, (s, ch) => s.platform?.status === "live" && ch.phase === "pitch");
    const S = structuredClone(d.state);
    S.ledger.push({ week: S.week, kind: "payroll", amount: -(S.cash + 15000), note: "TEST: force cash trouble (counterfactual)" });
    S.cash = -15000;
    const ch = getChoices(S, cfg);
    const hasOriginal = ch.options.some((o) => o.type === "choose_offer" && (o as { original?: boolean }).original);
    const r = finish(S, cfg);
    out.push({ id: "C6", question: "Streaming Originals during cash trouble", setup: `streaming-pivot, seed 1, at a pitch after launch; cash forced to −$15K.`, branches: [{ name: "pitch while in the red", facts: { originalOffered: hasOriginal, selfFundOffered: ch.options.some((o) => o.type === "choose_offer" && o.distributorId === null), offers: ch.offers!.map((o) => `${o.distributorId}${o.lifeline ? " (lifeline)" : ""} $${o.advance}`), finished: sum(r), cashAfterRun: Math.round(S.cash), subscribersNow: S.platform!.subscribers } }], reading: "Originals are self-funded, so they are unavailable while cash is negative (LOCKED: no self-funding in the red). The studio finishes a traditional release on distributor money (lifeline if needed); the platform keeps running and its income pays the debt down. No hard lock, no bankruptcy." });
  }

  // C7 no release for 2 years after launch
  {
    const d = drive(3, "mixed", cfg, (s) => s.platform?.status === "live" && s.week >= (s.platform.launchWeek ?? 0) + 26 && !s.project && !s.pendingOffers);
    const S = structuredClone(d.state);
    const start = S.platform!.subscribers;
    const yr: number[] = [];
    let net = 0;
    for (let i = 1; i <= 104; i++) {
      advanceWeek(S, cfg);
      const w = S.platform!.weekly.at(-1)!;
      net += w.gross - w.opex;
      if (i % 26 === 0) yr.push(w.subs);
    }
    out.push({ id: "C7", question: "No release for 2 years after platform launch", setup: `mixed, seed 3, half a year after launch; the studio then releases nothing for 104 weeks (titles still airing finish and join the catalog).`, branches: [{ name: "idle 2 years", facts: { subscribersStart: start, every26Weeks: yr, platformNet2Years: Math.round(net), restlessWarning: S.events.some((e) => String(e.message).includes("restless")), acquisitionsAfterLastJoin: S.platform!.weekly.slice(-52).reduce((a, w) => a + w.acquired, 0), cashStart: Math.round(d.state.cash), cashEnd: Math.round(S.cash) } }], reading: "A quiet platform drifts down slowly and visibly (warning after the grace period); the catalog slows the drift but never grows subscribers. Coasting is possible for a while but shrinks the business." });
  }

  // C8 many poor titles vs few great titles
  {
    const d = drive(3, "mixed", cfg, (s) => s.platform?.status === "live" && s.week >= (s.platform.launchWeek ?? 0) + 26);
    const mk = (n: number, avg: number, hof: boolean) => {
      const S = structuredClone(d.state);
      const tmpl = S.releases.find((r) => S.platform!.catalog.some((c) => c.releaseId === r.id))!;
      S.platform!.catalog = [];
      for (let i = 0; i < n; i++) {
        const r = { ...structuredClone(tmpl), id: `syn${i}`, avgScore: avg, hallOfFame: hof, genre: tmpl.genre, active: false } as Release;
        S.releases.push(r);
        S.platform!.catalog.push({ releaseId: r.id, joinWeek: S.week });
      }
      S.platform!.subscribers = 40000;
      S.platform!.lastFreshWeek = S.week;
      const ret0 = catalogRetention(S, cfg, S.platform!);
      for (let i = 0; i < 104; i++) {
        S.week += 1;
        streamingWeek(S, cfg);
      }
      return { titles: n, avg, hof, retentionAtStart: ret0.retention, subscribersAfter2QuietYears: S.platform!.subscribers };
    };
    out.push({ id: "C8", question: "Catalog of many poor titles vs a few great ones", setup: "Synthetic catalogs on the same live platform (40,000 subscribers, then two years with no releases; same genre for all titles so diversity is equal).", branches: [{ name: "30 poor titles (avg 5.8)", facts: mk(30, 5.8, false) }, { name: "5 great titles (avg 9.2, Hall of Fame)", facts: mk(5, 9.2, true) }, { name: "5 good titles (avg 8.0)", facts: mk(5, 8.0, false) }], reading: "Retention follows catalog quality, freshness and evergreens with diminishing returns, not raw title count." });
  }
  return out;
}

function grade(s: StudioState, p: PlanDecision): number {
  const g = s.world.comboGrades[`${p.genre}|${p.twistTheme ?? p.theme}`];
  const v: Record<string, number> = { A: 2, B: 1, C: 0, D: -1, F: -2 };
  return v[g.audience] + v[g.critic];
}

function score(book: StudioState["comboBook"], p: PlanDecision): number {
  const k = book[`${p.genre}|${p.theme}`];
  const v: Record<string, number> = { A: 2, B: 1, C: 0, D: -1, F: -2 };
  return k ? v[k.audience] + v[k.critic] : 0.5;
}

export function counterfactualReport(cases: CaseResult[], cfg: Config, hash: string): string {
  const out = [`# Gate 3 counterfactual cases`, "", `> Simulation results from TEST ASSUMPTIONS (config ${cfg.name}, ${hash}). Each case clones one exact state and plays branches under identical rules. Branch RNG paths may diverge after the branch point.`, ""];
  for (const c of cases) {
    out.push(`## ${c.id}. ${c.question}`, "", c.setup, "");
    for (const b of c.branches) out.push(`**${b.name}**`, "", "```json", JSON.stringify(b.facts, null, 1).slice(0, 4000), "```", "");
    out.push(`*Reading:* ${c.reading}`, "");
  }
  return out.join("\n");
}

export { withOverrides };
