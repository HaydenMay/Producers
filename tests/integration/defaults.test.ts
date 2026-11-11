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
    const l = legacyConfig();
    expect(l.economy.mode).toBe("legacy_advance");
    expect(l.economy.contracts.enabled).toBe(false);
    expect(l.start.cash).toBe(40_000);
  });
  it("legacyConfig keeps the baseline name (legacy outputs stay comparable)", () => {
    expect(legacyConfig().name).toBe("baseline");
  });
  it("legacy overlay touches ONLY the economy mode, contracts switch and start cash", () => {
    const d = baselineConfig() as unknown as Record<string, unknown>;
    const l = legacyConfig() as unknown as Record<string, unknown>;
    const strip = (c: Record<string, unknown>) => {
      const x = JSON.parse(JSON.stringify(c));
      delete x.economy.mode;
      delete x.economy.contracts.enabled;
      delete x.start.cash;
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
  it("a new default studio can afford its first studio-funded movie", () => {
    const s = createStudio(1, baselineConfig());
    expect(s.cash).toBeGreaterThanOrEqual(60_000); // movie base cost; payroll comes on top during production
  });
});
