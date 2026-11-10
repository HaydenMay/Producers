// Gate 2.5 A acceptance tests: studio-wide employee capacity (NOT a per-project crew cap).
import { describe, expect, it } from "vitest";
import { baselineConfig, withOverrides } from "../../src/core/config";
import { advanceWeek, applyDecision, createStudio, getChoices, replay } from "../../src/core/simulation";
import { hireStaff } from "../../src/core/staff";
import { runCareer } from "../../src/batch/runner";
import { STRATEGY_IDS } from "../../src/agents/strategies";
import type { StudioState } from "../../src/core/types";

const ladder = withOverrides(baselineConfig(), {
  start: { cash: 5_000_000 },
  agents: { legacyHeuristicStaffCaps: false },
  staffCapacity: { ladder: [4, 6, 8], upgradeCosts: [250000, 750000], upgradePrestige: [200, 1000] },
});

const hasHire = (s: StudioState) => getChoices(s, ladder).options.some((o) => o.type === "hire");
const hasUpgrade = (s: StudioState) => getChoices(s, ladder).options.some((o) => o.type === "upgrade_studio");

describe("studio capacity ladder 4 → 6 → 8", () => {
  it("starts at 2 employees / 4 capacity", () => {
    const s = createStudio(1, ladder);
    expect(s.staff.length).toBe(2);
    expect(s.maxStaff).toBe(4);
  });

  it("hiring is legal up to the cap and blocked above it, at every step", () => {
    const s = createStudio(2, ladder);
    applyDecision(s, ladder, { type: "hire" });
    applyDecision(s, ladder, { type: "hire" });
    expect(s.staff.length).toBe(4);
    expect(hasHire(s)).toBe(false);
    expect(() => applyDecision(s, ladder, { type: "hire" })).toThrow(/Illegal decision/);
    expect(() => hireStaff(s, ladder)).toThrow(/capacity/); // direct API bypass also blocked
    // upgrade needs Prestige too (test-only trigger rule)
    expect(hasUpgrade(s)).toBe(false);
    s.prestige = 200;
    expect(hasUpgrade(s)).toBe(true);
    applyDecision(s, ladder, { type: "upgrade_studio" });
    expect(s.maxStaff).toBe(6);
    applyDecision(s, ladder, { type: "hire" });
    applyDecision(s, ladder, { type: "hire" });
    expect(s.staff.length).toBe(6);
    expect(hasHire(s)).toBe(false);
    expect(() => hireStaff(s, ladder)).toThrow(/capacity/);
    s.prestige = 1000;
    applyDecision(s, ladder, { type: "upgrade_studio" });
    expect(s.maxStaff).toBe(8);
    applyDecision(s, ladder, { type: "hire" });
    applyDecision(s, ladder, { type: "hire" });
    expect(s.staff.length).toBe(8);
    expect(hasHire(s)).toBe(false);
    expect(hasUpgrade(s)).toBe(false); // top of the ladder
    expect(() => hireStaff(s, ladder)).toThrow(/capacity/);
    // upgrades are visible and paid for
    expect(s.upgrades.map((u) => u.to)).toEqual([6, 8]);
    expect(s.ledger.filter((l) => l.kind === "upgrade").reduce((a, l) => a + l.amount, 0)).toBe(-1_000_000);
    // a full studio can still train
    expect(getChoices(s, ladder).options.some((o) => o.type === "train")).toBe(true);
  });

  it("every employed staff member works on the one production every week (no crew cap)", () => {
    const s = createStudio(3, ladder);
    for (let i = 0; i < 2; i++) applyDecision(s, ladder, { type: "hire" });
    s.prestige = 1000;
    applyDecision(s, ladder, { type: "upgrade_studio" });
    for (let i = 0; i < 2; i++) applyDecision(s, ladder, { type: "hire" });
    applyDecision(s, ladder, { type: "upgrade_studio" });
    for (let i = 0; i < 2; i++) applyDecision(s, ladder, { type: "hire" });
    expect(s.staff.length).toBe(8);
    applyDecision(s, ladder, getChoices(s, ladder).options.find((o) => o.type === "plan")!);
    applyDecision(s, ladder, { type: "choose_offer", distributorId: getChoices(s, ladder).offers![0].distributorId });
    const xp = s.staff.map((x) => x.totalXp);
    advanceWeek(s, ladder);
    s.staff.forEach((x, i) => expect(x.totalXp).toBe(xp[i] + ladder.staffGrowth.xpPerWeek));
  });

  it("no unearned XP at release: total XP = weeks worked x xpPerWeek", () => {
    const r = runCareer(4, "balanced", withOverrides(ladder, { start: { cash: 40000 } }), { productions: 1, drain: true });
    const weeksWorked = r.state.releases.length ? ladder.production.movie.durationWeeks : 0;
    for (const st of r.state.staff.filter((x) => x.id === "staff1" || x.id === "staff2")) expect(st.totalXp).toBe(weeksWorked * ladder.staffGrowth.xpPerWeek);
  });

  it("strategies never exceed the studio cap and replay stays exact", () => {
    const cfg = withOverrides(ladder, { start: { cash: 40000 } });
    for (const strat of STRATEGY_IDS) {
      const r = runCareer(5, strat, cfg, { productions: 20, drain: true });
      expect(r.state.staff.length).toBeLessThanOrEqual(r.state.maxStaff);
      expect(r.state.maxStaff).toBeLessThanOrEqual(8);
      expect(JSON.stringify(replay(5, cfg, r.decisions))).toBe(JSON.stringify(r.state));
    }
  });
});
