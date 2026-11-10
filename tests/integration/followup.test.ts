// Gate 3 follow-up: no hard season cap (LOCKED), returning-viewer fatigue (EXPERIMENT, off by default),
// creative breakthroughs (EXPERIMENT, off by default). All through the shared rules API, named seeds.
import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";
import { baselineConfig, withOverrides } from "../../src/core/config";
import { createStudio, getChoices, replay } from "../../src/core/simulation";
import { renewalStatus, viewerFatigue } from "../../src/core/formats";
import { runCareer } from "../../src/batch/runner";
import { checkInvariants } from "../../src/batch/diagnostics";
import { careerG3 } from "../../src/batch/gate3metrics";
import type { Release } from "../../src/core/types";

const G3 = withOverrides(baselineConfig(), JSON.parse(readFileSync("config/gate3.json", "utf8")));
const VF = (o: Record<string, unknown> = {}) => withOverrides(G3, { tv: { viewerFatigue: { enabled: true, ...o } } });
const BT = (o: Record<string, unknown> = {}) => withOverrides(G3, { events: { breakthrough: { enabled: true, ...o } } });
const tvSeasons = (rs: Release[], ipId: string) => rs.filter((r) => r.ipId === ipId && r.format === "tv");

describe("no hard cap on TV seasons (LOCKED)", () => {
  it("a show can legally reach Season 20+; renewal depends only on the last season's 4.0 average", () => {
    const r = runCareer(11, "renewal-franchise", G3, { productions: 0, years: 25 });
    const longest = Object.values(r.state.ips)
      .filter((i) => i.format === "tv")
      .map((i) => tvSeasons(r.state.releases, i.id))
      .sort((a, b) => b.length - a.length)[0];
    expect(longest.length).toBeGreaterThanOrEqual(20);
    expect(checkInvariants(r, G3)).toEqual([]);
    const ip = r.state.ips[longest[0].ipId];
    const st = renewalStatus(r.state, G3, ip);
    expect(st.eligible).toBe(longest.at(-1)!.avgScore >= G3.tv.renewalThreshold);
  });
  it("the old 'too long' flag is replaced by long-runner / irrational-renewal diagnostics", () => {
    const r = runCareer(11, "renewal-franchise", G3, { productions: 0, years: 25 });
    const c = careerG3(11, "renewal-franchise", r.state, G3);
    expect(typeof c.longRunners).toBe("number");
    expect(typeof c.irrationalRenewals).toBe("number");
  });
});

describe("returning-viewer fatigue (EXPERIMENT, default off)", () => {
  it("default config: off, no trace, identical careers", () => {
    expect(G3.tv.viewerFatigue.enabled).toBe(false);
    const r = runCareer(5, "tv-first", G3, { productions: 0, years: 10 });
    expect(r.state.releases.some((x) => x.trace.viewerFatigue)).toBe(false);
  });
  it("grows with exposure past the onset, is capped, slowed by a great last season, and reset by good twists", () => {
    const s = createStudio(1, G3);
    s.ips.ip1 = { id: "ip1", name: "Show", fans: 1000, titles: [], format: "tv" };
    const cfg = VF({ onset: 2, perStep: 0.05, exponent: 1, max: 0.3, qualitySlow: 0.5 });
    const mults: number[] = [];
    for (let k = 1; k <= 12; k++) {
      s.releases.push({ id: `r${k}`, ipId: "ip1", format: "tv", avgScore: 6, episodes: 10 } as Release);
      mults.push(viewerFatigue(s, cfg, s.ips.ip1)!.mult);
    }
    expect(mults.slice(0, 2)).toEqual([1, 1]); // before onset
    for (let i = 1; i < mults.length; i++) expect(mults[i]).toBeLessThanOrEqual(mults[i - 1]);
    expect(Math.min(...mults)).toBeCloseTo(0.7, 5); // capped at max
    s.releases.at(-1)!.avgScore = 10;
    expect(viewerFatigue(s, cfg, s.ips.ip1)!.mult).toBeCloseTo(0.85, 5); // brilliant season halves it
    s.releases.at(-1)!.avgScore = 6;
    s.ips.ip1.viewerTwistResets = 1;
    expect(viewerFatigue(s, cfg, s.ips.ip1)!.units).toBe(12 - cfg.tv.viewerFatigue.goodTwistReset);
    const ep = withOverrides(cfg, { tv: { viewerFatigue: { basis: "episodes", episodesPerStep: 10 } } });
    s.ips.ip1.viewerTwistResets = 0;
    expect(viewerFatigue(s, ep, s.ips.ip1)!.units).toBe(12); // 12 seasons x 10 episodes / 10
  });
  it("only lowers the returning-audience opening input; scores and the 35% review fatigue are unchanged", () => {
    const cfg = VF({ onset: 0, perStep: 0.1, exponent: 1, max: 0.45 });
    const off = runCareer(5, "tv-first", G3, { productions: 0, years: 12 });
    const on = replay(5, cfg, off.decisions);
    const s2 = on.releases.find((x) => x.trace.viewerFatigue && (x.trace.viewerFatigue as { mult: number }).mult < 1)!;
    expect(s2).toBeTruthy();
    const base = off.state.releases.find((x) => x.id === s2.id)!;
    expect(s2.audience).toBe(base.audience); // same decisions + same meters → same scores
    expect(s2.critic).toBe(base.critic);
    expect(JSON.stringify(s2.trace.tv)).toBe(JSON.stringify(base.trace.tv)); // review fatigue identical
    const vf = s2.trace.viewerFatigue as { mult: number; openingWithout: { pool: number; parts: Record<string, number> } };
    const op = s2.trace.opening as { pool: number; parts: Record<string, number> };
    expect(op.pool).toBeLessThanOrEqual(vf.openingWithout.pool);
    expect(op.parts.marketing).toBe(vf.openingWithout.parts.marketing); // marketing/Star/trend untouched
    expect(op.parts.starFame).toBe(vf.openingWithout.parts.starFame);
    expect(op.parts.trend).toBe(vf.openingWithout.parts.trend);
  });
  it("careers with viewer fatigue keep every invariant", () => {
    const cfg = VF({ onset: 2, perStep: 0.05 });
    for (const st of ["tv-first", "mixed"]) {
      const r = runCareer(8, st, cfg, { productions: 0, years: 15 });
      expect(checkInvariants(r, cfg)).toEqual([]);
    }
  });
});

describe("creative breakthroughs (EXPERIMENT, default off)", () => {
  it("default off; an enabled zero-chance event reproduces the previous careers exactly", () => {
    expect(G3.events.breakthrough.enabled).toBe(false);
    const a = runCareer(3, "mixed", G3, { productions: 0, years: 10 });
    const b = runCareer(3, "mixed", BT({ chancePerCheck: 0 }), { productions: 0, years: 10 });
    expect(JSON.stringify(b.state.releases)).toBe(JSON.stringify(a.state.releases));
    expect(b.state.cash).toBe(a.state.cash);
  });
  it("certain events: at most one per production, logged with draw + delta, scores follow meters", () => {
    const cfg = BT({ chancePerCheck: 1 });
    const r = runCareer(3, "mixed", cfg, { productions: 0, years: 8 });
    expect(checkInvariants(r, cfg)).toEqual([]); // includes SCORE_NOT_CAUSAL (scores recomputed from meters)
    for (const rel of r.state.releases) {
      const bt = rel.trace.breakthrough as { events: { stage: string; draw: number; points: number }[]; avgWithout: number } | undefined;
      expect(bt?.events.length).toBe(1);
      expect(bt!.events[0].stage).toBe("writing"); // the first stage checked
      expect(bt!.events[0].points).toBeGreaterThan(0);
      expect(rel.avgScore).toBeGreaterThanOrEqual(bt!.avgWithout);
    }
    expect(r.state.events.filter((e) => e.type === "breakthrough").length).toBe(r.state.releases.length + (r.state.project?.breakthroughs?.length ?? 0));
  });
  it("same seed → same events; events are part of replay", () => {
    const cfg = BT({ chancePerCheck: 0.2 });
    const a = runCareer(21, "tv-first", cfg, { productions: 0, years: 10 });
    const b = replay(21, cfg, a.decisions);
    expect(JSON.stringify(b.releases)).toBe(JSON.stringify(a.state.releases));
    expect(a.state.events.filter((e) => e.type === "breakthrough").length).toBeGreaterThan(0);
  });
  it("events never touch earlier published scores; fans only move through the normal reception rule", () => {
    const cfg = BT({ chancePerCheck: 0.3 });
    const on = runCareer(4, "renewal-franchise", cfg, { productions: 0, years: 12 });
    const off = runCareer(4, "renewal-franchise", G3, { productions: 0, years: 12 });
    const first = on.state.events.find((e) => e.type === "breakthrough")!;
    expect(first).toBeTruthy();
    const before = (rs: Release[]) => JSON.stringify(rs.filter((r) => r.releaseWeek < first.week).map(({ weekly, ...r }) => ({ ...r, weekly: weekly.filter((w) => w.week < first.week) })).map((r) => [r.id, r.audience, r.critic, r.weekly]));
    expect(before(on.state.releases)).toBe(before(off.state.releases));
    expect(checkInvariants(on, cfg)).toEqual([]);
    expect(getChoices(on.state, cfg)).toBeTruthy();
  });
});
