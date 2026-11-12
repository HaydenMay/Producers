// Producers defaults (PROD-062, PROD-100, PROD-115, PROD-118): the shipped baseline is the studio-funded
// economy with contracts; the old advance model survives only as the regression overlay.
import { describe, expect, it } from "vitest";
import { readFileSync } from "node:fs";
import { baselineConfig, legacyConfig, withOverrides } from "../../src/core/config";
import { runBatch } from "../../src/batch/batch";
import { createStudio } from "../../src/core/simulation";
import { runCareer } from "../../src/batch/runner";

describe("Producers default economy", () => {
  it("baseline = late distribution + contracts + $160K; legacyConfig() restores the advance model", () => {
    const d = baselineConfig();
    expect(d.economy.mode).toBe("late_distribution");
    expect(d.economy.contracts.enabled).toBe(true);
    expect(d.start.cash).toBe(160_000);
    expect(d.production.movie.durationWeeks).toBe(30);
    expect(d.audience.legsModel).toBe("diffusion");
    expect(d.audience.movieQualityPivot).toBe(6.5);
    expect(d.audience.diffusion.movieBadInterestDecay).toBe(3.0);
    expect(d.formats.tv && d.formats.limitedSeries).toBe(true);
    expect(d.formats.streaming).toBe(true);
    expect(d.world.compatibility.mode).toBe("editorial");
    expect(d.expectations.critics.enabled).toBe(true);
    const l = legacyConfig();
    expect(l.economy.mode).toBe("legacy_advance");
    expect(l.economy.contracts.enabled).toBe(false);
    expect(l.start.cash).toBe(40_000);
    expect(l.audience.legsModel).toBe("geometric");
    expect(l.audience.movieQualityPivot).toBeNull();
    expect(l.audience.diffusion.movieBadInterestDecay).toBeNull();
  });
  it("legacyConfig keeps the baseline name (legacy outputs stay comparable)", () => {
    expect(legacyConfig().name).toBe("baseline");
  });
  it("legacy overlay touches ONLY the listed Producers switches (economy, Stars, unlocks, formats, TV, prices, combo mode)", () => {
    const d = baselineConfig() as unknown as Record<string, unknown>;
    const l = legacyConfig() as unknown as Record<string, unknown>;
    const strip = (c: Record<string, unknown>) => {
      const x = JSON.parse(JSON.stringify(c));
      delete x.economy.mode;
      delete x.economy.contracts.enabled;
      delete x.start.cash;
      delete x.audience.legsModel;
      delete x.audience.movieQualityPivot;
      delete x.audience.fanDecayExact; // audit 2026-11-12: exact fan decay (legacy keeps weekly rounding)
      delete x.staffCapacity; // audit H3: the default ships the 4/6/8 ladder; legacy stays uncapped
      delete x.expectations.studioSize; // PROD-226: studio-size expectations off in legacy
      delete x.agents.legacyHeuristicStaffCaps; // audit M3: default agents play the default game
      delete x.agents.useFiring;
      delete x.agents.economicRenewal;
      delete x.audience.diffusion.movieBadInterestDecay;
      delete x.stars.pool.enabled;
      delete x.scoring.starScoreBonus;
      delete x.genreUnlocks.enabled;
      delete x.world.genreFamilyWeights;
      delete x.research.themePurchase;
      delete x.themeUnlocks.trendInspiration;
      delete x.tv.showHealth.enabled;
      delete x.tv.grossPerEpisodeViewer;
      delete x.prestige.tvMilestones;
      delete x.formats.limitedSeries;
      delete x.formats.tv;
      delete x.production.movie.durationWeeks;
      delete x.production.formatExperience;
      delete x.limitedSeries.durationWeeks;
      delete x.limitedSeries.grossPerEpisodeViewer;
      delete x.tv.durationBaseWeeks;
      delete x.tv.weeksPerEpisode;
      delete x.world.grossPerViewer;
      delete x.world.compatibility.mode;
      delete x.expectations.critics;
      delete x.formats.streaming;
      delete x.streaming.unlock.prestige;
      delete x.streaming.unlock.minCatalog;
      delete x.streaming.feePerSubWeek;
      delete x.staffGrowth.payrollPeriodWeeks;
      delete x.staffGrowth.raisePerLevel;
      delete x.staffGrowth.hireWageBySkill;
      delete x.agents.runwayStarReserve;
      delete x.production.approaches;
      delete x.economy.overdraft;
      delete x.studioGenre.qualityBonusPerLevel;
      delete x.career.enabled;
      delete x._overlay;
      return x;
    };
    expect(strip(l)).toEqual(strip(d));
  });
  it("the gate overlays still mean what they meant: gate4.json on legacy == the Gate 4 candidate economy", () => {
    const g4 = withOverrides(legacyConfig(), JSON.parse(readFileSync("config/gate4.json", "utf8")));
    expect(g4.economy.mode).toBe("late_distribution");
    expect(g4.start.cash).toBe(120_000);
  });
  it("default careers hold every invariant and actually release films", () => {
    const b = runBatch(1, 6, ["balanced", "cheap-duds", "famous-star", "franchise-builder"], baselineConfig(), { productions: 6, drain: true });
    expect(b.violations).toEqual([]);
    expect(b.metrics.every((c) => c.releases > 0)).toBe(true);
  });
  it("movie dud levers are movie-only: TV and limited series keep the global knobs", async () => {
    const { moviePivotOf, movieBadDecayOf } = await import("../../src/core/audience");
    const { runCareer } = await import("../../src/batch/runner");
    const { formatOf } = await import("../../src/core/formats");
    const g3 = withOverrides(baselineConfig(), JSON.parse(readFileSync("config/gate3.json", "utf8")));
    const rels = runCareer(3, "mixed", g3, { productions: 0, years: 6 }).state.releases;
    const movie = rels.find((r) => formatOf(r) === "movie")!;
    const tv = rels.find((r) => formatOf(r) !== "movie")!;
    expect(movie && tv).toBeTruthy();
    expect(moviePivotOf(g3, movie)).toBe(6.5);
    expect(movieBadDecayOf(g3, movie)).toBe(3.0);
    expect(moviePivotOf(g3, tv)).toBe(5);
    expect(movieBadDecayOf(g3, tv)).toBe(0.35);
  });
  it("a new default studio can afford its first studio-funded movie", () => {
    const s = createStudio(1, baselineConfig());
    expect(s.cash).toBeGreaterThanOrEqual(60_000); // movie base cost; payroll comes on top during production
  });
});

describe("critic generations: harder on arrival, then the studio adapts (designer 2026-11-11)", () => {
  it("toughness jumps when a generation arrives, fades over 3 years to a small permanent step", async () => {
    const { expectationsAt } = await import("../../src/core/scoring");
    const D = baselineConfig();
    const t = (y: number) => expectationsAt(Math.round(y * 52), D).criticToughness;
    expect(t(4.9)).toBe(0);
    expect(t(5.0)).toBeCloseTo(0.06, 3); // gen 1 arrives
    expect(t(6.5)).toBeCloseTo(0.06 * (0.25 + 0.75 * 0.5), 2); // halfway through adapting
    expect(t(8.5)).toBeCloseTo(0.015, 3); // adapted: 25% stays
    expect(t(10.0)).toBeCloseTo(0.015 + 0.06, 3); // gen 2 arrives on top
    expect(expectationsAt(10 * 52, legacyConfig()).criticToughness).toBe(0); // legacy: off
  });
});


describe("planning-screen cost estimate (PROD-224)", () => {
  it("first movie: base + 30 weeks of crew pay + a Star range, vs $160K cash", async () => {
    const { planCostEstimate } = await import("../../src/core/latedist");
    const D = baselineConfig();
    const s = createStudio(1, D);
    const e = planCostEstimate(s, D, { type: "plan", genre: "Comedy", theme: "Sports", ipRelation: "new" });
    expect(e.weeks).toBe(30);
    expect(e.baseCost).toBe(60_000);
    expect(e.crewPay).toBe(30 * (900 + 900 + 600));
    expect(e.star.low).toBeLessThan(5_000);
    expect(e.star.high).toBeGreaterThan(85_000);
    expect(e.risk).toBe("tight");
    expect(e.note).toContain("big name");
    const ls = planCostEstimate(s, D, { type: "plan", format: "limited_series", genre: "Comedy", theme: "Sports", ipRelation: "new" });
    expect(ls.crewPay).toBe(12 * 2400);
    s.cash = 50_000;
    expect(planCostEstimate(s, D, { type: "plan", genre: "Comedy", theme: "Sports", ipRelation: "new" }).risk).toBe("short");
  });
});

describe("planning approach, overdraft, staff titles (2026-11-11)", () => {
  it("an approach is validated separately, stored on the project and the release, and tilts the reviews", async () => {
    const { applyDecision, getChoices } = await import("../../src/core/simulation");
    const D = baselineConfig();
    const s = createStudio(1, D);
    const ch = getChoices(s, D);
    expect(ch.approaches).toEqual(["crowd", "balanced", "awards"]);
    const plan = ch.options.find((o) => o.type === "plan")!;
    expect(() => applyDecision(s, D, { ...(plan as object), approach: "bogus" } as never)).toThrow();
    applyDecision(s, D, { ...(plan as object), approach: "awards" } as never);
    expect(s.project!.approach).toBe("awards");
    expect(getChoices(createStudio(1, legacyConfig()), legacyConfig()).approaches).toBeUndefined();
  });
  it("crowd-pleasers earn more money, awards bait more Prestige (same dice, same policy)", async () => {
    const { runCareer } = await import("../../src/batch/runner");
    const D = baselineConfig();
    const sum = (st: string, k: "cash" | "prestige") => [1, 2, 3, 4].reduce((a, seed) => a + runCareer(seed, st, D, { productions: 0, years: 8 }).state[k], 0);
    expect(sum("crowd-pleaser", "cash")).toBeGreaterThan(sum("awards-bait", "cash"));
    expect(sum("awards-bait", "prestige")).toBeGreaterThan(sum("crowd-pleaser", "prestige"));
  });
  it("in the red, the bank charges 2% a month and nothing else happens (never game over)", async () => {
    const { advanceWeek } = await import("../../src/core/simulation");
    const D = baselineConfig();
    const s = createStudio(1, D);
    s.cash = -100_000;
    s.week = 3;
    advanceWeek(s, D);
    const i = s.ledger.find((l) => l.kind === "overdraft_interest")!;
    expect(-i.amount).toBeGreaterThanOrEqual(2000); // 2% of $100K plus that month's payroll
    expect(-i.amount).toBeLessThan(2300);
  });
  it("job titles emerge from skills", async () => {
    const { staffTitle } = await import("../../src/core/staff");
    const mk = (p: number, w: number, f: number, e: number, xp = 0) => ({ id: "x", name: "x", stats: { plot: p, writing: w, filming: f, editing: e }, totalXp: xp, wage: 900 }) as never;
    expect(staffTitle(mk(30, 20, 50, 20))).toBe("Junior Director");
    expect(staffTitle(mk(65, 62, 40, 30, 2000))).toBe("Showrunner");
    expect(staffTitle(mk(80, 80, 80, 80, 4000))).toBe("Senior Auteur");
    expect(staffTitle(mk(20, 20, 20, 60, 1200))).toBe("Editor");
  });
});


// PROD-226 (designer 2026-11-12): "we're a bigger company now, the expectations are higher"
import { expectationsAt, studioToughnessAt } from "../../src/core/scoring";
describe("studio-size expectations (PROD-226)", () => {
  it("adds toughness to both reviews only after studio upgrades; legacy overlay has none", () => {
    const D = baselineConfig();
    const t = (D.expectations as unknown as { studioSize: { toughnessByUpgrades: number[] } }).studioSize.toughnessByUpgrades;
    expect(studioToughnessAt(0, D)).toBe(0);
    expect(studioToughnessAt(1, D)).toBe(t[0]);
    expect(studioToughnessAt(2, D)).toBe(t[1]);
    expect(studioToughnessAt(5, D)).toBe(t[1]);
    const e0 = expectationsAt(10, D, 0), e2 = expectationsAt(10, D, 2);
    expect(e2.criticToughness).toBeCloseTo(e0.criticToughness + t[1], 6);
    expect(e2.audienceToughness).toBeCloseTo(e0.audienceToughness + t[1], 6);
    expect(e0.studioToughness).toBeUndefined();
    expect(studioToughnessAt(2, legacyConfig())).toBe(0);
  });
  it("a real career announces it on upgrade and judges later releases tougher", () => {
    const D = baselineConfig();
    const s = runCareer(1, "balanced", D, { productions: 0, years: 6 }).state;
    expect(s.upgrades.length).toBeGreaterThan(0);
    expect(s.events.some((e) => e.type === "upgrade" && e.message.startsWith("We're a bigger company now"))).toBe(true);
    const after = s.releases.filter((r) => s.upgrades.some((u) => u.week < r.releaseWeek));
    expect(after.length).toBeGreaterThan(0);
    for (const r of after) expect((r.trace.quality as { score: { expectations: { studioToughness?: number } } }).score.expectations.studioToughness).toBeGreaterThan(0);
  });
});
