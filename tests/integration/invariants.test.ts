// Audit 2026-11-12b H1: invariants must actually fire. Each check here tampers with one finished career and requires the
// matching violation, so a check silently disabled (e.g. a comment swallowing the call) fails a test.
import { describe, expect, it } from "vitest";
import { baselineConfig } from "../../src/core/config";
import { runCareer } from "../../src/batch/runner";
import { checkInvariants } from "../../src/batch/diagnostics";

const cfg = baselineConfig();
const fresh = () => runCareer(3, "mixed", cfg, { productions: 0, years: 6 });
const codes = (r: ReturnType<typeof fresh>) => new Set(checkInvariants(r, cfg).map((v) => v.rule));

describe("invariants fire on tampered careers", () => {
  it("a clean default career has no violations", () => {
    expect(checkInvariants(fresh(), cfg)).toEqual([]);
  });

  it("EXPECTATION_MISMATCH: stored critic generation changed (score untouched)", () => {
    const r = fresh();
    const rel = r.state.releases.find((x) => (x.trace.quality as { score: { expectations?: unknown } }).score.expectations)!;
    (rel.trace.quality as { score: { expectations: { criticGeneration: number } } }).score.expectations.criticGeneration = 7;
    expect(codes(r).has("EXPECTATION_MISMATCH")).toBe(true);
  });

  it("EXPECTATION_MISMATCH: stored studio toughness changed", () => {
    const r = fresh();
    const rel = r.state.releases.at(-1)!;
    (rel.trace.quality as { score: { expectations: { studioToughness?: number } } }).score.expectations.studioToughness = 0.5;
    expect(codes(r).has("EXPECTATION_MISMATCH")).toBe(true);
  });

  it("EXPECTATION_MISMATCH: release field disagrees with its trace", () => {
    const r = fresh();
    r.state.releases[0].criticGeneration = 9;
    expect(codes(r).has("EXPECTATION_MISMATCH")).toBe(true);
  });

  it("SCORE_NOT_CAUSAL and AVG_MISMATCH: a stored score changed", () => {
    const r = fresh();
    r.state.releases[0].audience += 1;
    const c = codes(r);
    expect(c.has("SCORE_NOT_CAUSAL")).toBe(true);
    expect(c.has("AVG_MISMATCH")).toBe(true);
  });

  it("RUN_NOT_TERMINATED: a finished run that doesn't end on a 0-viewer week", () => {
    const r = fresh();
    const rel = r.state.releases.find((x) => !x.active && x.weekly.length)!;
    rel.weekly.at(-1)!.viewers = 5;
    expect(codes(r).has("RUN_NOT_TERMINATED")).toBe(true);
  });
});
