// Gate 2.5 B acceptance tests: diffusion weekly legs.
import { describe, expect, it } from "vitest";
import { legacyConfig, withOverrides } from "../../src/core/config";
import { LEGS_CASES, simulateLegs } from "../../src/batch/legs";
import { runBatch } from "../../src/batch/batch";
import { STRATEGY_IDS } from "../../src/agents/strategies";
import { runCareer } from "../../src/batch/runner";
import { replay } from "../../src/core/simulation";

const diff = withOverrides(legacyConfig(), { audience: { legsModel: "diffusion" } });
const byId = (id: string) => simulateLegs(diff, LEGS_CASES.find((c) => c.id === id)!);

describe("diffusion legs", () => {
  it("a high-rated, low-awareness film has later weeks above earlier weeks", () => {
    const r = byId("i");
    expect(r.grows).toBe(true);
    expect(r.peakWeek).toBeGreaterThan(2);
  });
  it("bad word of mouth decays every week after the opening", () => {
    const r = byId("ii");
    for (let i = 1; i < r.rel.weekly.length; i++) expect(r.rel.weekly[i].viewers).toBeLessThanOrEqual(r.rel.weekly[i - 1].viewers);
  });
  it("cumulative viewers never exceed reach; runs end; tiny reach can't become a blockbuster", () => {
    for (const c of LEGS_CASES) {
      const r = simulateLegs(diff, c);
      expect(r.rel.totalViewers).toBeLessThanOrEqual(r.rel.reachCap);
      expect(r.rel.weekly.length).toBeLessThanOrEqual(diff.audience.maxRunWeeks + 1);
      expect(r.rel.weekly.at(-1)!.viewers).toBe(0);
    }
    const tiny = byId("v");
    const wide = simulateLegs(diff, { ...LEGS_CASES.find((c) => c.id === "v")!, reach: 0.6 });
    expect(tiny.rel.grossTotal).toBeLessThan(wide.rel.grossTotal / 4);
  });
  it("feedback text matches the actual direction; invariants hold across careers", () => {
    const b = runBatch(1, 20, STRATEGY_IDS, diff, { productions: 6, drain: true });
    expect(b.violations).toEqual([]);
  });
  it("same seed + settings => identical results", () => {
    const a = runCareer(9, "balanced", diff, { productions: 4, drain: true });
    expect(JSON.stringify(replay(9, diff, a.decisions))).toBe(JSON.stringify(a.state));
  });
});
