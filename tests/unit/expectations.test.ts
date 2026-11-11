// Gate 2.6 acceptance tests: critic generations + audience eras (harness proxy) and great-film metrics.
import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";
import { legacyConfig, setPath, withOverrides, type Config } from "../../src/core/config";
import { applyDecision, createStudio, getChoices } from "../../src/core/simulation";
import { computeScores, expectationsAt, NO_EXPECTATIONS, avgScore } from "../../src/core/scoring";
import { runCareer } from "../../src/batch/runner";
import { runBatch } from "../../src/batch/batch";
import { bestOf, careerProgress, filmRefs, greatness, type FilmRef } from "../../src/batch/greatness";
import { FIXED_CASES, scoreFixed } from "../../src/batch/eras";
import type { Meter } from "../../src/core/types";

const candidate = withOverrides(legacyConfig(), JSON.parse(readFileSync("config/candidate.json", "utf8")));
const spec = JSON.parse(readFileSync("config/experiments/G26_expectations.json", "utf8")) as { variants: { name: string; overrides: Record<string, unknown> }[] };
const variant = (name: string): Config => withOverrides(candidate, spec.variants.find((v) => v.name === name)!.overrides);
const W = 52;
const meters: Record<Meter, number> = { plot: 80, writing: 82, filming: 78, editing: 81 };

describe("critic generations (calendar-based proxy)", () => {
  const cfg = variant("critic_moderate"); // every 6 years, +4%/gen, max 12%
  it("turns over exactly at the configured calendar thresholds and caps toughness", () => {
    expect(expectationsAt(6 * W - 1, cfg).criticGeneration).toBe(0);
    expect(expectationsAt(6 * W, cfg).criticGeneration).toBe(1);
    expect(expectationsAt(6 * W, cfg).criticToughness).toBeCloseTo(0.04);
    expect(expectationsAt(12 * W, cfg).criticToughness).toBeCloseTo(0.08);
    expect(expectationsAt(18 * W, cfg).criticToughness).toBeCloseTo(0.12);
    expect(expectationsAt(60 * W, cfg).criticToughness).toBeCloseTo(0.12); // ceiling
    expect(expectationsAt(60 * W, cfg).audienceToughness).toBe(0); // audience era off in this variant
  });
  it("is driven by in-game weeks, not film count, and is off by default", () => {
    const base = legacyConfig();
    expect(expectationsAt(40 * W, base)).toEqual(NO_EXPECTATIONS);
    const a = runCareer(5, "balanced", cfg, { productions: 25, drain: true });
    for (const r of a.state.releases) expect(r.criticGeneration).toBe(expectationsAt(r.releaseWeek, cfg).criticGeneration);
  });
  it("is reproducible from seed + config (same events, same generations)", () => {
    const a = runCareer(9, "quality-first", cfg, { productions: 25, drain: true });
    const b = runCareer(9, "quality-first", cfg, { productions: 25, drain: true });
    expect(a.state.events.filter((e) => e.type === "critics")).toEqual(b.state.events.filter((e) => e.type === "critics"));
    expect(a.state.releases.map((r) => [r.critic, r.criticGeneration])).toEqual(b.state.releases.map((r) => [r.critic, r.criticGeneration]));
    const ev = a.state.events.filter((e) => e.type === "critics");
    expect(ev.some((e) => (e.data as { announce?: boolean }).announce)).toBe(true); // announced ahead of time
  });
  it("tougher generations change only NEW ratings: published reviews never change", () => {
    const short = runCareer(3, "balanced", cfg, { productions: 15, drain: false });
    const long = runCareer(3, "balanced", cfg, { productions: 40, drain: true });
    expect(long.state.week).toBeGreaterThan(12 * W); // crossed at least two turnovers
    const n = short.state.releases.length;
    expect(long.state.releases.slice(0, n).map((r) => [r.title, r.audience, r.critic, r.avgScore, r.criticGeneration])).toEqual(short.state.releases.map((r) => [r.title, r.audience, r.critic, r.avgScore, r.criticGeneration]));
  });
});

describe("scores depend on production quality and era only", () => {
  const cfg = variant("combo_B");
  it("same meters + same era → same ratings; no Fame/ads/gross inputs exist", () => {
    const ex = expectationsAt(20 * W, cfg);
    const a = computeScores(meters, { audience: "B", critic: "C" }, 0, false, cfg, ex);
    const b = computeScores({ ...meters }, { audience: "B", critic: "C" }, 0, false, cfg, { ...ex });
    expect([a.audience, a.critic]).toEqual([b.audience, b.critic]);
  });
  it("a Fame leak into scores is still caught with expectations on", () => {
    const bad = setPath(cfg, "debug.injectBug", "fameIntoScore");
    const r = runBatch(1, 4, ["famous-star"], bad, { productions: 3, drain: true });
    expect(r.violations.some((v) => v.rule === "SCORE_NOT_CAUSAL" || v.rule === "AVG_MISMATCH")).toBe(true);
  });
  it("audience eras move independently of critics; saturation stays a separate critic effect", () => {
    const aud = variant("audience_moderate");
    const ex = expectationsAt(25 * W, aud);
    expect(ex.criticToughness).toBe(0);
    expect(ex.audienceToughness).toBeGreaterThan(0);
    const off = computeScores(meters, { audience: "C", critic: "C" }, 0, false, aud, NO_EXPECTATIONS);
    const on = computeScores(meters, { audience: "C", critic: "C" }, 0, false, aud, ex);
    expect(on.critic).toBe(off.critic);
    expect(on.audience).toBeLessThan(off.audience);
    // saturation: critic x0.9, applied on top of (not instead of) generation toughness; audience untouched
    const crit = variant("critic_moderate");
    const ec = expectationsAt(13 * W, crit);
    const plain = computeScores(meters, { audience: "C", critic: "C" }, 0, false, crit, ec);
    const sat = computeScores(meters, { audience: "C", critic: "C" }, 0, true, crit, ec);
    expect(sat.audience).toBe(plain.audience);
    expect(sat.criticRaw).toBeCloseTo(plain.criticRaw * (1 - crit.scoring.saturatedCriticPenalty), 1);
    expect(sat.critic).toBeLessThan(plain.critic);
  });
  it("Hall of Fame stays possible in late eras under every tested variant", () => {
    const master = FIXED_CASES.find((c) => c.id === "masterpiece")!;
    for (const v of spec.variants) {
      const p = scoreFixed(master, withOverrides(candidate, v.overrides), 36);
      expect(p.avg, v.name).toBeGreaterThanOrEqual(9);
      expect(p.hof).toBe(true);
    }
  });
});

const film = (o: Partial<FilmRef>): FilmRef => ({ seed: 1, strategy: "s", index: 1, title: "t", ipId: "ip1", ipRelation: "new", week: 0, year: 0, audience: 8, critic: 8, avg: 8, hallOfFame: false, meters, criticGeneration: 0, audienceEra: 0, format: "movie", ...o }) as FilmRef;

describe("great-film metrics", () => {
  const cfg = legacyConfig();
  it("Hall of Fame counts releases (not IPs) and matches the score rule", () => {
    const fs = [film({ index: 1, avg: 9.2, audience: 9.1, critic: 9.3, hallOfFame: true }), film({ index: 2, avg: 9.0, audience: 9, critic: 9, hallOfFame: true }), film({ index: 3, ipId: "ip2", avg: 8.5 })];
    const rows = greatness([{ seed: 1, strategy: "s", films: fs }], cfg, 5);
    const all = rows.find((r) => r.strategy === "s" && r.slice === "all")!;
    expect(all.hof).toEqual({ n: 2, of: 3, pct: 66.67 });
    expect(all.hofIpsTotal).toBe(1); // both HoF titles are the same IP
    expect(avgScore(9, 9) >= cfg.scoring.hofThreshold).toBe(true);
  });
  it("≥ 9.0 and > 9.0 differ exactly at 9.0; empty windows are safe", () => {
    const fs = [film({ index: 1, avg: 9.0, audience: 9.0, critic: 9.0 }), film({ index: 2, avg: 9.01, audience: 9.02, critic: 9.0 }), film({ index: 3, avg: 8.99, audience: 8.98, critic: 9.0 })];
    const rows = greatness([{ seed: 1, strategy: "s", films: fs }], cfg, 100);
    const all = rows.find((r) => r.strategy === "s" && r.slice === "all")!;
    expect(all.avg9inc.n).toBe(2);
    expect(all.avg9strict.n).toBe(1);
    expect(all.crit9.n).toBe(3);
    expect(all.aud9.n).toBe(2);
    const empty = rows.find((r) => r.strategy === "s" && r.slice === "51-100")!;
    expect(empty.films).toBe(0);
    expect(empty.hof).toEqual({ n: 0, of: 0, pct: 0 });
    expect(empty.bestPerCareer).toBeNull();
    expect(empty.best).toBeNull();
  });
  it("best-film tie-breaks are deterministic and point at a real release", () => {
    const a = film({ seed: 7, index: 4, avg: 10, audience: 10, critic: 10, title: "A" });
    const b = film({ seed: 3, index: 9, avg: 10, audience: 10, critic: 10, title: "B" });
    expect(bestOf([a, b])!.title).toBe("B");
    expect(bestOf([b, a])!.title).toBe("B");
    const c = runCareer(11, "balanced", candidate, { productions: 20, drain: true });
    const best = bestOf(filmRefs(11, "balanced", c.state.releases, candidate))!;
    const rel = c.state.releases[best.index - 1];
    expect([rel.title, rel.audience, rel.critic, rel.avgScore]).toEqual([best.title, best.audience, best.critic, best.avg]);
    expect(c.state.releases.every((r) => r.avgScore <= best.avg)).toBe(true);
  });
  it("same seeds + config → identical great-film tables and best-film references", () => {
    const cfg2 = variant("combo_B");
    const x = runBatch(1, 4, ["balanced", "repeat-farmer"], cfg2, { productions: 25, drain: true });
    const y = runBatch(1, 4, ["balanced", "repeat-farmer"], cfg2, { productions: 25, drain: true });
    expect(JSON.stringify(x.great)).toBe(JSON.stringify(y.great));
    expect(JSON.stringify(x.careerBest)).toBe(JSON.stringify(y.careerBest));
    expect(x.violations).toEqual([]);
  });
});

describe("Prestige gates growth; cash alone cannot buy it", () => {
  it("a cash-rich, low-Prestige studio cannot buy an upgrade", () => {
    const s = createStudio(1, candidate);
    s.cash = 50_000_000;
    applyDecision(s, candidate, { type: "hire" });
    applyDecision(s, candidate, { type: "hire" });
    expect(s.staff.length).toBe(4);
    expect(getChoices(s, candidate).options.some((o) => o.type === "upgrade_studio")).toBe(false);
    expect(() => applyDecision(s, candidate, { type: "upgrade_studio" })).toThrow();
  });
  it("progress reconstruction matches the real career (cash, Prestige, upgrades)", () => {
    const r = runCareer(4, "balanced", candidate, { productions: 20, drain: true });
    const p = careerProgress(4, "balanced", r.state, candidate);
    expect(p.prestige).toBe(r.state.prestige);
    expect(p.steps.filter((x) => x.boughtWeek !== null).length).toBe(r.state.upgrades.length);
    for (const [i, st] of p.steps.entries()) if (st.boughtWeek !== null) expect(st.gateMetWeek!).toBeLessThanOrEqual(st.boughtWeek);
    expect(Object.values(p.milestones).reduce((a, b) => a + b, 0)).toBe(r.state.prestigeAwards.length);
  });
});
