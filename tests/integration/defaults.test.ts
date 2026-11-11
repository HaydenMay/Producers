// Producers defaults (PROD-062, PROD-100, PROD-115, PROD-118): the shipped baseline is the studio-funded
// economy with contracts; the old advance model survives only as the regression overlay.
import { describe, expect, it } from "vitest";
import { readFileSync } from "node:fs";
import { baselineConfig, legacyConfig, withOverrides } from "../../src/core/config";
import { runBatch } from "../../src/batch/batch";
import { createStudio } from "../../src/core/simulation";

describe("Producers default economy", () => {
  it("baseline = late distribution + contracts + $120K; legacyConfig() restores the advance model", () => {
    const d = baselineConfig();
    expect(d.economy.mode).toBe("late_distribution");
    expect(d.economy.contracts.enabled).toBe(true);
    expect(d.start.cash).toBe(120_000);
    expect(d.audience.legsModel).toBe("diffusion");
    expect(d.audience.movieQualityPivot).toBe(6.5);
    expect(d.audience.diffusion.movieBadInterestDecay).toBe(1.0);
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
  it("legacy overlay touches ONLY economy mode, contracts, start cash, legs model and the movie dud levers", () => {
    const d = baselineConfig() as unknown as Record<string, unknown>;
    const l = legacyConfig() as unknown as Record<string, unknown>;
    const strip = (c: Record<string, unknown>) => {
      const x = JSON.parse(JSON.stringify(c));
      delete x.economy.mode;
      delete x.economy.contracts.enabled;
      delete x.start.cash;
      delete x.audience.legsModel;
      delete x.audience.movieQualityPivot;
      delete x.audience.diffusion.movieBadInterestDecay;
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
    expect(movieBadDecayOf(g3, movie)).toBe(1.0);
    expect(moviePivotOf(g3, tv)).toBe(5);
    expect(movieBadDecayOf(g3, tv)).toBe(0.35);
  });
  it("a new default studio can afford its first studio-funded movie", () => {
    const s = createStudio(1, baselineConfig());
    expect(s.cash).toBeGreaterThanOrEqual(60_000); // movie base cost; payroll comes on top during production
  });
});
