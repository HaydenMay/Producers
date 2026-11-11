import { describe, expect, it } from "vitest";
import { readFileSync } from "node:fs";
import { legacyConfig, setPath } from "../../src/core/config";
import { runBatch, compareBatches } from "../../src/batch/batch";
import { runCareer } from "../../src/batch/runner";
import { checkInvariants } from "../../src/batch/diagnostics";

const cfg = legacyConfig();

describe("diagnostics catch injected regressions", () => {
  it("advance counted as revenue -> GROSS_NOT_FROM_SALES", () => {
    const bad = setPath(cfg, "debug.injectBug", "advanceAsRevenue");
    const b = runBatch(1, 5, ["balanced", "cheap-duds"], bad, { productions: 3, drain: true });
    expect(b.violations.some((v) => v.rule === "GROSS_NOT_FROM_SALES")).toBe(true);
  });
  it("Fame leaking into Audience score -> SCORE_NOT_CAUSAL", () => {
    const bad = setPath(cfg, "debug.injectBug", "fameIntoScore");
    const b = runBatch(1, 5, ["famous-star"], bad, { productions: 3, drain: true });
    expect(b.violations.some((v) => v.rule === "SCORE_NOT_CAUSAL" || v.rule === "AVG_MISMATCH")).toBe(true);
  });
  it("clean baseline has zero violations", () => {
    const b = runBatch(1, 10, ["balanced", "cheap-duds", "famous-star", "self-funder", "franchise-builder"], cfg, { productions: 8, drain: true });
    expect(b.violations).toEqual([]);
  });
});

describe("paired-seed compare", () => {
  it("identical configs give zero deltas", () => {
    const a = runBatch(1, 5, ["balanced"], cfg, { productions: 4, drain: true });
    const b = runBatch(1, 5, ["balanced"], cfg, { productions: 4, drain: true });
    for (const r of compareBatches(a, b, ["endCash", "prestige"])) expect(r.medianPairedDelta).toBe(0);
  });
});

describe("regression seed bank", () => {
  const bank = JSON.parse(readFileSync("config/scenarios.json", "utf8")) as { regressionSeeds: { seed: number; strategy: string; productions: number }[] };
  for (const r of bank.regressionSeeds) {
    it(`seed ${r.seed} ${r.strategy} x${r.productions} holds all invariants`, () => {
      const res = runCareer(r.seed, r.strategy, cfg, { productions: r.productions, drain: true });
      expect(checkInvariants(res, cfg)).toEqual([]);
      expect(res.stoppedReason).not.toBe("maxWeeks");
    });
  }
});
