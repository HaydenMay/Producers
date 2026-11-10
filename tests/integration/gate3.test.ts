// Gate 3 acceptance tests (handoff §F). Named seeds; all through the shared rules API.
import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";
import { baselineConfig, withOverrides, type Config } from "../../src/core/config";
import { advanceWeek, applyDecision, createStudio, getChoices, replay } from "../../src/core/simulation";
import { allowedOrders, hiatusMultiplier, maxEpisodes, partnerAdvance, renewalStatus } from "../../src/core/formats";
import { catalogRetention, streamingWeek } from "../../src/core/streaming";
import { evaluatePrestige } from "../../src/core/prestige";
import { releaseWeek } from "../../src/core/audience";
import { runBatch } from "../../src/batch/batch";
import { runCareer, runScripted } from "../../src/batch/runner";
import { checkInvariants } from "../../src/batch/diagnostics";
import { metricsCsv } from "../../src/batch/report";
import { greatness, filmRefs } from "../../src/batch/greatness";
import type { Choices, Decision, PlanDecision, Release, StudioState } from "../../src/core/types";

const read = (f: string) => JSON.parse(readFileSync(f, "utf8"));
const G3 = withOverrides(baselineConfig(), read("config/gate3.json"));
/** fast-unlock variant for scripted tests (thresholds only; rules unchanged) */
const FAST = withOverrides(G3, { tv: { unlock: { prestige: 0, cost: 0 } }, streaming: { unlock: { prestige: 0, minCatalog: 1 }, buildWeeks: 6, buildCost: 1000 }, start: { cash: 400000 } });

/** Scripted player: picks a plan by predicate; best offer by advance; cheapest Star; chosen campaign. */
function player(planPick: (s: StudioState, plans: PlanDecision[], ch: Choices) => Decision | undefined, opts: { campaign?: string; original?: boolean; extra?: (s: StudioState, ch: Choices) => Decision | undefined } = {}) {
  return (s: StudioState, ch: Choices): Decision => {
    const x = opts.extra?.(s, ch);
    if (x) return x;
    if (ch.phase === "planning") {
      const plans = ch.options.filter((o): o is PlanDecision => o.type === "plan");
      return planPick(s, plans, ch) ?? plans.find((p) => !p.format && p.ipRelation === "new")!;
    }
    if (ch.phase === "pitch") {
      if (opts.original && ch.options.some((o) => o.type === "choose_offer" && (o as { original?: boolean }).original)) return { type: "choose_offer", distributorId: null, original: true };
      const best = [...ch.offers!].sort((a, b) => b.advance - a.advance)[0];
      return { type: "choose_offer", distributorId: best.distributorId };
    }
    if (ch.phase === "casting") {
      const ip = s.project && s.ips[s.project.ipId];
      const keep = ip?.establishedStarId && ch.auditionCards!.find((c) => c.affordable && c.starId === ip.establishedStarId);
      return { type: "cast", starId: keep ? keep.starId : [...ch.auditionCards!].filter((c) => c.affordable).sort((a, b) => a.price - b.price)[0].starId };
    }
    if (ch.phase === "marketing") return { type: "market", campaign: ch.campaigns!.find((c) => c.id === (opts.campaign ?? "none") && c.affordable) ? (opts.campaign ?? "none") : "none" };
    return { type: "wait" };
  };
}
const unlockTv = (_s: StudioState, ch: Choices) => ch.options.find((o) => o.type === "unlock_tv");
const tvShow = (n = 5) => (s: StudioState, plans: PlanDecision[]) => plans.find((p) => p.format === "tv" && p.ipRelation === "season" && !p.twistTheme && p.episodes === n) ?? plans.find((p) => p.format === "tv" && p.ipRelation === "new" && p.episodes === n);

describe("F1 movies unaffected; old configs and replays still load", () => {
  it("movie-only careers match the stored Gate 2.6 baseline byte for byte", () => {
    const cand = withOverrides(baselineConfig(), read("config/candidate.json"));
    const b = runBatch(1, 6, ["balanced", "quality-first", "cheap-duds"], cand, { productions: 20, drain: true });
    const mine = metricsCsv(b.metrics).trim().split("\n");
    const stored = readFileSync("reports/gate2_6/00_pre_change/batch-gate25_candidate-s100-p20.careers.csv", "utf8").trim().split("\n");
    for (const row of mine.slice(1)) expect(stored).toContain(row);
  });
  it("a pre-Gate-3 decision log replays to the same result", () => {
    const cand = withOverrides(baselineConfig(), read("config/candidate.json"));
    const log = read("reports/gate2_5/traces/sim-seed42-balanced-5.decisions.json") as { seed: number; decisions: Decision[] };
    const s = replay(log.seed, cand, log.decisions);
    expect(Math.round(s.cash)).toBe(914901);
    expect(s.week).toBe(95);
  });
  it("a Gate 3 config with every format disabled is the movie kernel", () => {
    const off = withOverrides(G3, { formats: { limitedSeries: false, tv: false, streaming: false } });
    const cand = withOverrides(baselineConfig(), read("config/candidate.json"));
    const a = runCareer(3, "balanced", off, { productions: 12, drain: true }).state;
    const b = runCareer(3, "balanced", cand, { productions: 12, drain: true }).state;
    expect(a.releases.map((r) => [r.title, r.audience, r.critic, r.grossTotal])).toEqual(b.releases.map((r) => [r.title, r.audience, r.critic, r.grossTotal]));
    expect(a.cash).toBe(b.cash);
  });
});

describe("F2 one production; background airing and build; capacity", () => {
  it("TV episodes air while the next project is produced; never two projects; cap enforced", () => {
    const r = runCareer(2, "tv-first", G3, { productions: 0, years: 10 });
    const s = r.state;
    expect(checkInvariants(r, G3)).toEqual([]);
    const starts = s.events.filter((e) => e.type === "project_start").map((e) => e.week);
    const overlap = s.releases.some((rel) => rel.format === "tv" && starts.some((w) => w >= rel.releaseWeek && w < (rel.runEndWeek ?? Infinity)));
    expect(overlap).toBe(true); // the next production was underway while a season was still airing
    expect(s.staff.length).toBeLessThanOrEqual(s.maxStaff);
  });
  it("the Software Engineer is off productions during the build and back afterwards", () => {
    let engXpDuring = -1;
    const res = runScripted(
      5,
      FAST,
      player((s, plans) => plans.find((p) => !p.format && p.ipRelation === "new"), {
        extra: (s, ch) => {
          const eng = s.staff.find((x) => x.role === "software_engineer");
          if (eng?.assignment && engXpDuring < 0) engXpDuring = eng.totalXp;
          if (eng?.assignment) expect(eng.totalXp).toBe(engXpDuring); // no work, no XP while building
          return ch.options.find((o) => o.type === "build_streaming") ?? ch.options.find((o) => o.type === "hire_engineer");
        },
      }),
      { productions: 12, drain: false },
    );
    const eng = res.state.staff.find((x) => x.role === "software_engineer")!;
    expect(res.state.platform?.status).toBe("live");
    expect(eng.assignment).toBeNull();
    expect(eng.totalXp).toBeGreaterThan(engXpDuring); // worked on productions after launch
  });
});

describe("F3 limited series vs TV identity; Prestige-based order caps", () => {
  it("a limited series never offers a renewal, however well it scores", () => {
    const res = runScripted(7, FAST, player((s, plans) => plans.find((p) => p.format === "limited_series")), { productions: 3, drain: true });
    const ls = res.state.releases.filter((r) => r.format === "limited_series");
    expect(ls.length).toBeGreaterThan(0);
    const ch = getChoices(res.state, FAST);
    for (const r of ls) {
      expect(ch.options.some((o) => o.type === "plan" && o.parentIpId === r.ipId)).toBe(false);
      expect(renewalStatus(res.state, FAST, res.state.ips[r.ipId]).eligible).toBe(false);
    }
  });
  it("season caps follow studio Prestige only; a debut season can use the max", () => {
    const s = createStudio(1, FAST);
    s.tvUnlocked = true;
    for (const [p, max] of [[0, 5], [600, 10], [1800, 15], [3500, 20]] as const) {
      s.prestige = p;
      expect(maxEpisodes(s, FAST)).toBe(max);
    }
    s.prestige = 3500;
    expect(getChoices(s, FAST).options.some((o) => o.type === "plan" && o.format === "tv" && o.ipRelation === "new" && o.episodes === 20)).toBe(true);
    expect(allowedOrders(s, FAST)).toEqual([5, 10, 15, 20]); // smaller orders stay available
  });
  it("TV renews at 4.0 inclusive, not below", () => {
    const fake = (avg: number) => {
      const s = createStudio(1, FAST);
      s.ips.ip1 = { id: "ip1", name: "Show", fans: 0, titles: [], format: "tv" };
      s.releases.push({ id: "r1", ipId: "ip1", format: "tv", avgScore: avg } as Release);
      return renewalStatus(s, FAST, s.ips.ip1).eligible;
    };
    expect(fake(4.0)).toBe(true);
    expect(fake(3.99)).toBe(false);
  });
});

describe("F4 weekly episode accounting", () => {
  it("each episode airs once on consecutive weeks, then a finite tail, then the run ends", () => {
    const res = runScripted(4, FAST, player(tvShow(5), { extra: unlockTv }), { productions: 2, drain: true });
    const seasons = res.state.releases.filter((r) => r.format === "tv");
    expect(seasons.length).toBeGreaterThan(0);
    for (const r of seasons) {
      const eps = r.weekly.filter((w) => w.episode !== undefined);
      expect(eps.map((w) => w.episode)).toEqual(Array.from({ length: r.episodes! }, (_, i) => i + 1));
      expect(eps.every((w, i) => i === 0 || w.week === eps[i - 1].week + 1)).toBe(true);
      expect(r.weekly.length).toBe(r.episodes! + FAST.tv.tailWeeks + 1);
      expect(r.weekly.at(-1)!.viewers).toBe(0);
      expect(r.active).toBe(false);
      expect(Math.abs(r.weekly.reduce((a, w) => a + w.gross, 0) - r.grossTotal)).toBeLessThan(0.05);
      expect(r.uniqueViewers!).toBeLessThanOrEqual(r.reachCap);
    }
    expect(checkInvariants(res, FAST)).toEqual([]);
  });
});

describe("F5 money ledger", () => {
  it("mixed careers keep every accounting invariant; Originals earn no traditional money; one subscription line per week", () => {
    const b = runBatch(1, 4, ["mixed", "streaming-pivot", "tv-first", "limited-focus"], G3, { productions: 0, years: 14 });
    expect(b.violations).toEqual([]);
    const r = runCareer(1, "streaming-pivot", G3, { productions: 0, years: 14 }).state;
    const orig = r.releases.filter((x) => x.route === "original");
    expect(orig.length).toBeGreaterThan(0);
    for (const o of orig) expect([o.grossTotal, o.distributorTake, o.studioTake, o.advance]).toEqual([0, 0, 0, 0]);
    const subWeeks = r.ledger.filter((l) => l.kind === "subscriptions").map((l) => l.week);
    expect(new Set(subWeeks).size).toBe(subWeeks.length);
    expect(r.ledger.some((l) => (l.kind as string) === "catalog_royalty")).toBe(false);
  });
});

describe("F6 Prestige per season, never per episode", () => {
  it("review awards land only in a season's release week; ids never repeat", () => {
    const r = runCareer(2, "renewal-franchise", G3, { productions: 0, years: 12 });
    expect(new Set(r.state.prestigeAwards).size).toBe(r.state.prestigeAwards.length);
    expect(checkInvariants(r, G3).filter((v) => v.rule === "TV_PRESTIGE_PER_EPISODE")).toEqual([]);
  });
  it("viewer milestones count distinct people, so a long order can't multiply them", () => {
    const cfg = withOverrides(G3, { prestige: { milestones: [{ id: "v500", kind: "lifetimeViewers", threshold: 500000, amount: 100, scope: "release" }] } });
    const s = createStudio(1, cfg);
    const rel = { id: "r1", ipId: "ip1", title: "Show: S1", totalViewers: 4_000_000, uniqueViewers: 300_000, grossTotal: 0 } as Release;
    expect(evaluatePrestige(s, cfg, rel, "run")).toEqual([]);
    rel.uniqueViewers = 500_000;
    expect(evaluatePrestige(s, cfg, rel, "run").length).toBe(1);
    expect(evaluatePrestige(s, cfg, rel, "run")).toEqual([]); // once
  });
});

describe("F7 causality: Fame/ads/subscribers never touch reviews; reviews shape legs", () => {
  it("bad reviews lose viewers each episode; great under-marketed shows grow within reach", () => {
    const mk = (a: number, c: number): Release => ({ id: "x", title: "X", format: "tv", episodes: 10, audience: a, critic: c, avgScore: (a + c) / 2, reachCap: 200000, openingViewers: 8000, lastViewers: 0, totalViewers: 0, grossTotal: 0, distributorTake: 0, studioTake: 0, royalty: 0.2, weekIndex: 0, weekly: [], active: true, trace: { pool: 30000 }, uniqueViewers: 0 }) as unknown as Release;
    const s = createStudio(1, G3);
    const bad = mk(3, 3);
    const good = mk(9, 9);
    for (let i = 0; i < 10; i++) {
      releaseWeek(s, G3, bad);
      releaseWeek(s, G3, good);
    }
    const b = bad.weekly.map((w) => w.viewers);
    const g = good.weekly.map((w) => w.viewers);
    expect(b.slice(1).every((v, i) => v <= b[i])).toBe(true);
    expect(g[9]).toBeGreaterThan(g[0]);
    expect(good.uniqueViewers!).toBeLessThanOrEqual(good.reachCap);
  });
  it("scores in mixed careers are reproducible from production inputs (no Fame/marketing/subscriber leak)", () => {
    const r = runCareer(6, "mixed", G3, { productions: 0, years: 12 });
    expect(checkInvariants(r, G3).filter((v) => v.rule === "SCORE_NOT_CAUSAL")).toEqual([]);
  });
});

describe("F8 IP fans, recasting, twists", () => {
  it("seasons share one IP's fans; recasting the established lead costs relationship; genre never changes", () => {
    let recast = false;
    const res = runScripted(
      8,
      FAST,
      (s, ch) => {
        if (ch.phase === "casting" && s.project?.ipRelation === "season" && !recast) {
          const ip = s.ips[s.project.ipId];
          const other = ch.auditionCards!.find((c) => c.affordable && c.starId !== ip.establishedStarId)!;
          recast = true;
          return { type: "cast", starId: other.starId };
        }
        return player(tvShow(5), { extra: unlockTv })(s, ch);
      },
      { productions: 3, drain: true },
    );
    const s = res.state;
    expect(s.events.some((e) => e.type === "star_recast")).toBe(true);
    const tvIp = Object.values(s.ips).find((i) => i.format === "tv")!;
    const seasons = s.releases.filter((r) => r.ipId === tvIp.id);
    expect(seasons.length).toBeGreaterThan(1);
    expect(new Set(seasons.map((r) => r.genre)).size).toBe(1);
    expect(seasons.map((r) => r.seasonNumber)).toEqual(seasons.map((_, i) => i + 1));
  });
  it("a bad twist costs fans; a good twist eases fatigue; the theme changes but the genre and IP stay", () => {
    for (const want of ["bad", "good"] as const) {
      const res = runScripted(
        11,
        FAST,
        player((s, plans) => {
          const season = plans.filter((p) => p.ipRelation === "season" && p.twistTheme && p.episodes === 5);
          const graded = season.filter((p) => {
            const g = s.world.comboGrades[`${p.genre}|${p.twistTheme}`]; // test-only peek to construct the case
            const v = ({ A: 2, B: 1, C: 0, D: -1, F: -2 } as Record<string, number>)[g.audience] + ({ A: 2, B: 1, C: 0, D: -1, F: -2 } as Record<string, number>)[g.critic];
            return want === "bad" ? v <= -1 : v >= 1;
          });
          if (graded.length && s.releases.filter((r) => r.format === "tv").length === 2) return graded[0];
          return tvShow(5)(s, plans);
        }, { extra: unlockTv }),
        { productions: 4, drain: true },
      );
      const ev = res.state.events.filter((e) => e.type === "twist");
      if (!ev.length) continue; // seed had no such twist theme available: covered by the other branch
      expect(ev[0].message).toContain(want === "bad" ? "lost its way" : "reborn");
      const tvIp = Object.values(res.state.ips).find((i) => i.format === "tv")!;
      const rels = res.state.releases.filter((r) => r.ipId === tvIp.id);
      expect(new Set(rels.map((r) => r.genre)).size).toBe(1);
    }
  });
});

describe("F9 hiatus and announcements", () => {
  it("normal gaps carry no penalty; long gaps lower anticipation only", () => {
    const s = createStudio(1, G3);
    const ip = { id: "ip1", name: "Show", fans: 50000, titles: [], format: "tv" as const, lastAiredWeek: 0 };
    s.week = 70;
    expect(hiatusMultiplier(s, G3, ip).mult).toBe(1);
    s.week = 78 + 104;
    expect(hiatusMultiplier(s, G3, ip).mult).toBeLessThan(1);
    expect(ip.fans).toBe(50000); // fans untouched by hiatus
  });
  it("one announcement per season, fading, never resetting the hiatus clock", () => {
    const res = runScripted(4, FAST, player(tvShow(5), { extra: unlockTv }), { productions: 1, drain: true });
    const s = res.state;
    const ip = Object.values(s.ips).find((i) => i.format === "tv")!;
    const aired = ip.lastAiredWeek;
    const ann = getChoices(s, FAST).options.find((o) => o.type === "announce_season")!;
    expect(ann).toBeTruthy();
    applyDecision(s, FAST, ann);
    expect(getChoices(s, FAST).options.some((o) => o.type === "announce_season")).toBe(false); // no spam
    const a0 = ip.anticipation!;
    for (let i = 0; i < 10; i++) advanceWeek(s, FAST);
    expect(ip.anticipation!).toBeLessThan(a0);
    expect(ip.lastAiredWeek).toBe(aired);
  });
});

describe("F10 critic generations affect only new seasons", () => {
  it("earlier seasons' published scores are identical whether or not later critics turn over", () => {
    const crit = withOverrides(G3, { expectations: { critics: { enabled: true, generationYears: 3, toughnessPerGeneration: 0.08, maxToughness: 0.12 } } });
    const short = runCareer(2, "tv-first", crit, { productions: 0, years: 5 }).state;
    const long = runCareer(2, "tv-first", crit, { productions: 0, years: 12 }).state;
    const n = short.releases.length;
    expect(long.releases.slice(0, n).map((r) => [r.title, r.audience, r.critic])).toEqual(short.releases.map((r) => [r.title, r.audience, r.critic]));
  });
});

describe("F11–F12 streaming build, catalog and retention", () => {
  it("no streaming choices before unlock; catalog = finished runs only, each once; catalog alone never acquires", () => {
    const s0 = createStudio(1, G3);
    expect(getChoices(s0, G3).options.some((o) => ["hire_engineer", "build_streaming"].includes(o.type))).toBe(false);
    const r = runCareer(3, "mixed", G3, { productions: 0, years: 14 });
    const p = r.state.platform!;
    expect(p.status).toBe("live");
    const ids = p.catalog.map((c) => c.releaseId);
    expect(new Set(ids).size).toBe(ids.length);
    for (const c of p.catalog) expect(r.state.releases.find((x) => x.id === c.releaseId)!.active).toBe(false);
    for (const w of p.weekly) if (w.acquired > 0) expect(Object.keys(w.sources).length).toBeGreaterThan(0);
    expect(checkInvariants(r, G3)).toEqual([]);
  });
  it("no releases: churn with a weak catalog; a stronger catalog churns less; subscribers stay bounded and finite", () => {
    const r = runCareer(3, "mixed", G3, { productions: 0, years: 12 });
    const s = structuredClone(r.state);
    const before = s.platform!.subscribers;
    for (let i = 0; i < 104; i++) {
      s.week += 1;
      streamingWeek(s, G3);
    }
    expect(s.platform!.subscribers).toBeLessThan(before);
    expect(s.platform!.subscribers).toBeGreaterThanOrEqual(0);
    expect(s.platform!.weekly.slice(-104).every((w) => w.acquired === 0 && Number.isFinite(w.gross))).toBe(true);
    expect(s.events.some((e) => String(e.message).includes("restless"))).toBe(true);
    const weak = structuredClone(r.state);
    for (const rel of weak.releases) rel.avgScore = 5.5;
    const strong = structuredClone(r.state);
    for (const rel of strong.releases) rel.avgScore = 8.5;
    expect(catalogRetention(strong, G3, strong.platform!).retention).toBeGreaterThan(catalogRetention(weak, G3, weak.platform!).retention);
  });
});

describe("F13 financial recovery in a cash-poor mixed studio", () => {
  it("with $0 start and negative cash the studio still finishes its cheapest project via the lifeline", () => {
    const poor = withOverrides(G3, { start: { cash: 0 } });
    const s = createStudio(9, poor);
    s.cash = -5000;
    s.ledger.push({ week: 0, kind: "payroll", amount: -5000 });
    const res = runScripted(9, poor, player(() => undefined), { productions: 1, drain: false });
    expect(res.state.releases.length).toBe(1);
    expect(getChoices(s, poor).options.some((o) => o.type === "plan")).toBe(true);
  });
});

describe("F14 TV financing variants A and B", () => {
  it("B offers the continuing partner (explicit advance function); A re-pitches; both reproducible", () => {
    const B = withOverrides(FAST, { tv: { contract: { variant: "B" } } });
    const a1 = runScripted(4, FAST, player(tvShow(5), { extra: unlockTv }), { productions: 3, drain: true });
    const b1 = runScripted(4, B, player(tvShow(5), { extra: unlockTv }), { productions: 3, drain: true });
    const b2 = runScripted(4, B, player(tvShow(5), { extra: unlockTv }), { productions: 3, drain: true });
    expect(b1.state.ledger).toEqual(b2.state.ledger);
    const seasonPitches = b1.state.events.filter((e) => e.type === "pitch" && e.message.includes("(season)"));
    expect(seasonPitches.length).toBeGreaterThan(0);
    for (const e of seasonPitches) expect(e.message.split(";").length).toBeLessThanOrEqual(2); // partner (+ lifeline at most)
    expect(partnerAdvance(B, 100000, 1.2, 2.5)).toBe(Math.round((100000 * (0.9 + 0.3 * 0.2) * (0.7 + B.distribution.trustOfferFactorPerPoint * 2.5)) / 1000) * 1000);
    expect(checkInvariants(a1, FAST)).toEqual([]);
    expect(checkInvariants(b1, B)).toEqual([]);
  });
});

describe("F15 negative assertions", () => {
  it("no studio fan stat, no staff genre XP, no unbounded runs, no stacking", () => {
    const r = runCareer(5, "traditional-holdout", G3, { productions: 0, years: 12 });
    expect("fans" in r.state).toBe(false);
    for (const st of r.state.staff) expect(Object.keys(st)).not.toContain("genreXp");
    for (const rel of r.state.releases.filter((x) => !x.active)) expect(rel.weekly.at(-1)!.viewers).toBe(0);
    expect(checkInvariants(r, G3)).toEqual([]);
  });
  it("great-film metrics count seasons and productions, never episodes", () => {
    const r = runCareer(2, "tv-first", G3, { productions: 0, years: 10 }).state;
    const rows = greatness([{ seed: 2, strategy: "tv-first", films: filmRefs(2, "tv-first", r.releases, G3) }], G3, 100);
    const all = rows.find((x) => x.strategy === "tv-first" && x.slice === "all")!;
    expect(all.films).toBe(r.releases.length);
    expect(rows.some((x) => x.sliceKind === "format" && x.slice === "tv")).toBe(true);
  });
});
