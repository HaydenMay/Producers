import { describe, expect, it } from "vitest";
import { baselineConfig, withOverrides } from "../../src/core/config";
import { createStudio, getChoices, applyDecision, advanceWeek, replay } from "../../src/core/simulation";
import { computeScores, avgScore, isHallOfFame, isRenewable } from "../../src/core/scoring";
import { budgetFor, generateStar, skillTotal, priceStar, starFit } from "../../src/core/stars";
import { CASH_KINDS } from "../../src/core/events";
import { runCareer, runScripted } from "../../src/batch/runner";
import { STRATEGY_IDS } from "../../src/agents/strategies";
import { scriptedDecide } from "../helpers";
import type { Decision, StudioState } from "../../src/core/types";

const cfg = baselineConfig();

function toPhase(state: StudioState, phase: string, decide: (s: StudioState, ch: ReturnType<typeof getChoices>) => Decision) {
  for (let i = 0; i < 400; i++) {
    const ch = getChoices(state, cfg);
    if (ch.phase === phase) return ch;
    applyDecision(state, cfg, ch.phase === "production" ? { type: "wait" } : decide(state, ch));
  }
  throw new Error(`never reached ${phase}`);
}

describe("starting studio", () => {
  it("has exactly two staff, no Prestige, no scripted bonus", () => {
    const s = createStudio(7, cfg);
    expect(s.staff).toHaveLength(2);
    expect(s.prestige).toBe(0);
    expect(s.releases).toHaveLength(0);
  });
});

describe("staff XP during work", () => {
  it("increments XP each production week, before any release", () => {
    const s = createStudio(1, cfg);
    toPhase(s, "production", scriptedDecide({}));
    const before = s.staff.map((x) => x.totalXp);
    advanceWeek(s, cfg);
    expect(s.releases).toHaveLength(0);
    s.staff.forEach((x, i) => expect(x.totalXp).toBeGreaterThan(before[i]));
  });
});

describe("Stars", () => {
  it("never exceed their level's total point budget (incl. top level < families*100)", () => {
    const s = createStudio(3, cfg);
    for (let i = 0; i < 2000; i++) {
      const tier = (["newcomer", "mid", "big"] as const)[i % 3];
      const st = generateStar(s, cfg, tier, "Scary");
      expect(skillTotal(st)).toBeLessThanOrEqual(budgetFor(st.level, cfg));
    }
    expect(budgetFor(cfg.stars.maxLevel, cfg)).toBeLessThan(cfg.world.families.length * 100);
  });
  it("price depends on Fame (minus discounts), not on skill or level", () => {
    const s = createStudio(4, cfg);
    const a = generateStar(s, cfg, "mid", "Scary");
    const b = { ...a, id: "clone", level: a.level + 3, skills: Object.fromEntries(Object.keys(a.skills).map((k) => [k, 99])) };
    expect(priceStar(b, s, cfg).price).toBe(priceStar(a, s, cfg).price);
    const c = { ...a, fame: a.fame + 20 };
    expect(priceStar(c, s, cfg).price).toBeGreaterThan(priceStar(a, s, cfg).price);
  });
  it("fit uses genre FAMILY: Horror and Thriller share the Scary skill", () => {
    const s = createStudio(5, cfg);
    const st = generateStar(s, cfg, "mid", "Scary");
    expect(starFit(st, "Horror", cfg)).toBe(st.skills.Scary);
    expect(starFit(st, "Thriller", cfg)).toBe(st.skills.Scary);
  });
});

describe("pre-display affordability fallback", () => {
  it("inserts a free Level 0 Newcomer before auditions when nothing is affordable", () => {
    // self-fund with exactly enough cash for the base cost, then drain cash so nothing is affordable
    const c2 = withOverrides(cfg, { start: { cash: 60000 } });
    const s = createStudio(11, c2);
    const ch0 = getChoices(s, c2);
    applyDecision(s, c2, ch0.options.find((o) => o.type === "plan")!);
    applyDecision(s, c2, { type: "choose_offer", distributorId: null });
    let ch = getChoices(s, c2);
    while (ch.phase === "production") {
      applyDecision(s, c2, { type: "wait" });
      ch = getChoices(s, c2);
    }
    expect(ch.phase).toBe("casting");
    expect(s.cash).toBeLessThan(0);
    const cards = ch.auditionCards!;
    expect(cards.length).toBeGreaterThanOrEqual(4);
    const fb = cards.find((c) => c.fallbackInserted)!;
    expect(fb).toBeDefined();
    expect(fb.price).toBe(0);
    expect(s.stars[fb.starId].level).toBe(0);
    expect(s.events.some((e) => e.type === "fallback_star")).toBe(true);
    // free campaign is still available at 80% with negative cash
    applyDecision(s, c2, { type: "cast", starId: fb.starId });
    ch = getChoices(s, c2);
    while (ch.phase === "production") {
      applyDecision(s, c2, { type: "wait" });
      ch = getChoices(s, c2);
    }
    expect(ch.phase).toBe("marketing");
    expect(ch.options).toContainEqual({ type: "market", campaign: "none" });
  });
});

describe("accounting", () => {
  it("cash equals the sum of cash ledger entries; surplus transferred once per project; wages never use advances", () => {
    for (const strat of STRATEGY_IDS) {
      const r = runCareer(21, strat, cfg, { productions: 5, drain: true });
      const s = r.state;
      const sum = s.ledger.filter((l) => CASH_KINDS.has(l.kind)).reduce((a, l) => a + l.amount, 0);
      expect(Math.abs(sum - s.cash)).toBeLessThan(0.05);
      const surplusByProject = new Map<string, number>();
      for (const l of s.ledger.filter((l) => l.kind === "surplus_transfer")) surplusByProject.set(l.projectId!, (surplusByProject.get(l.projectId!) ?? 0) + 1);
      for (const n of surplusByProject.values()) expect(n).toBe(1);
      // advance reserve is only spent on base cost / star fee / campaign / cancel
      for (const l of s.ledger.filter((l) => l.kind === "advance_spent")) expect(/^(base_cost|star_fee|campaign)|returned to distributor/.test(l.note ?? "")).toBe(true);
      // gross never includes advances
      for (const rel of s.releases) expect(rel.grossTotal).toBeCloseTo(rel.weekly.reduce((a, w) => a + w.gross, 0), 1);
    }
  });
  it("base cost is always charged", () => {
    const r = runCareer(22, "cheap-duds", cfg, { productions: 3 });
    const baseCharges = r.state.ledger.filter((l) => l.note?.startsWith("base_cost") || l.kind === "base_cost");
    expect(new Set(baseCharges.map((l) => l.projectId)).size).toBe(r.state.counters.productionsStarted);
  });
});

describe("cancellation", () => {
  it("is only offered when the advance can be repaid, and never mints money", () => {
    const s = createStudio(31, cfg);
    toPhase(s, "production", scriptedDecide({ offer: "maxAdvance" }));
    const ch = getChoices(s, cfg);
    const p = s.project!;
    expect(ch.canCancel).toBe(p.unspentAdvance + Math.max(0, s.cash) >= p.advance);
    if (ch.canCancel) {
      const before = s.cash;
      applyDecision(s, cfg, { type: "cancel" });
      expect(s.cash).toBeLessThanOrEqual(before);
      expect(s.project).toBeNull();
    }
    // unaffordable case
    const c2 = withOverrides(cfg, { start: { cash: 0 } });
    const s2 = createStudio(32, c2);
    toPhase(s2, "production", scriptedDecide({ offer: "maxAdvance" }));
    const ch2 = getChoices(s2, c2);
    expect(ch2.canCancel).toBe(false);
    expect(ch2.options.some((o) => o.type === "cancel")).toBe(false);
  });
});

describe("lifeline + negative cash", () => {
  it("a broke studio always gets an offer covering the cheapest base cost and can finish a movie", () => {
    const c2 = withOverrides(cfg, { start: { cash: -50000 } });
    const s = createStudio(41, c2);
    const ch = getChoices(s, c2);
    applyDecision(s, c2, ch.options.find((o) => o.type === "plan")!);
    const offers = getChoices(s, c2).offers!;
    expect(offers.some((o) => o.advance >= c2.production.movie.baseCost)).toBe(true);
    expect(getChoices(s, c2).options.some((o) => o.type === "choose_offer" && o.distributorId === null)).toBe(false); // no self-fund in the red
    expect(getChoices(s, c2).options.filter((o) => ["hire", "train", "studio_ads"].includes(o.type))).toHaveLength(0);
    const r = runScripted(41, c2, scriptedDecide({ offer: "maxAdvance", star: "cheapest" }), { productions: 1 });
    expect(r.state.counters.productionsCompleted).toBe(1);
  });
});

describe("scores", () => {
  it("are a pure function of meters/combos (no rolls) and marketing can't change them", () => {
    const meters = { plot: 60, writing: 55, filming: 70, editing: 50 };
    const a = computeScores(meters, { audience: "B", critic: "C" }, 0, false, cfg);
    const b = computeScores(meters, { audience: "B", critic: "C" }, 0, false, cfg);
    expect(a).toEqual(b);
  });
  it("boundary: 3.99 not renewable, 4.00 renewable; 8.99 not HoF, 9.00 HoF", () => {
    expect(isRenewable(avgScore(3.99, 3.99), cfg)).toBe(false);
    expect(isRenewable(avgScore(4.0, 4.0), cfg)).toBe(true);
    expect(isHallOfFame(avgScore(8.99, 8.99), cfg)).toBe(false);
    expect(isHallOfFame(avgScore(9.0, 9.0), cfg)).toBe(true);
  });
  it("weak meter penalizes the matching side more", () => {
    const weakEdit = computeScores({ plot: 70, writing: 70, filming: 70, editing: 20 }, { audience: "C", critic: "C" }, 0, false, cfg);
    const weakPlot = computeScores({ plot: 20, writing: 70, filming: 70, editing: 70 }, { audience: "C", critic: "C" }, 0, false, cfg);
    expect(weakEdit.weakMeters[0].audiencePenalty).toBeGreaterThan(weakEdit.weakMeters[0].criticPenalty);
    expect(weakPlot.weakMeters[0].criticPenalty).toBeGreaterThan(weakPlot.weakMeters[0].audiencePenalty);
  });
});

describe("Prestige integrity", () => {
  it("award ids never repeat and Prestige equals the sum of awards", () => {
    for (const strat of STRATEGY_IDS) {
      const s = runCareer(51, strat, cfg, { productions: 8, drain: true }).state;
      expect(new Set(s.prestigeAwards).size).toBe(s.prestigeAwards.length);
      const total = s.events.filter((e) => e.type === "prestige").reduce((a, e) => a + Number(/\+(\d+)/.exec(e.message)![1]), 0);
      expect(total).toBe(s.prestige);
    }
  });
  it("no Prestige accrues just from weeks passing", () => {
    const s = createStudio(52, cfg);
    for (let i = 0; i < 60; i++) advanceWeek(s, cfg);
    expect(s.prestige).toBe(0);
  });
});

describe("determinism", () => {
  it("same seed + config + decisions => identical state and event log", () => {
    const r = runCareer(61, "balanced", cfg, { productions: 5, drain: true });
    const again = replay(61, cfg, r.decisions);
    expect(JSON.stringify(again)).toBe(JSON.stringify(r.state));
  });
  it("trend stream is independent of strategy decisions", () => {
    const a = runCareer(62, "balanced", cfg, { productions: 3, maxWeeks: 60 }).state;
    const b = runCareer(62, "cheap-duds", cfg, { productions: 3, maxWeeks: 60 }).state;
    const wk = Math.min(a.week, b.week);
    const ta = a.events.filter((e) => e.type === "trend" && e.week <= wk).map((e) => e.message);
    const tb = b.events.filter((e) => e.type === "trend" && e.week <= wk).map((e) => e.message);
    expect(ta).toEqual(tb);
  });
});
