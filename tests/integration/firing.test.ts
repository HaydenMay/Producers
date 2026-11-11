// Gate 3 follow-up: employees can be fired (LOCKED), with harness UX rules (between productions; never the
// active streaming builder; keep >= staffing.minStaff). The engineer uses a normal slot: firing makes room.
import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";
import { legacyConfig, withOverrides } from "../../src/core/config";
import { advanceWeek, applyDecision, createStudio, getChoices, replay } from "../../src/core/simulation";
import { runScripted } from "../../src/batch/runner";
import { checkInvariants } from "../../src/batch/diagnostics";
import type { Decision, StudioState } from "../../src/core/types";

const G3 = withOverrides(legacyConfig(), JSON.parse(readFileSync("config/gate3.json", "utf8")));
const BIG = withOverrides(G3, { start: { cash: 5_000_000 }, streaming: { unlock: { prestige: 0, minCatalog: 0 }, buildWeeks: 4 } });
const has = (s: StudioState, cfg = BIG, t: string) => getChoices(s, cfg).options.some((o) => o.type === t);

function fullStudio(): { s: StudioState; log: Decision[] } {
  const s = createStudio(3, BIG);
  const log: Decision[] = [];
  const act = (d: Decision) => {
    applyDecision(s, BIG, d);
    log.push(d);
  };
  s.prestige = 5000; // test setup: Prestige gates met (upgrades still cost cash through the normal rule)
  s.ledger.push({ week: 0, kind: "start_cash", amount: 0, note: "test" });
  while (s.staff.length < 8) {
    if (has(s, BIG, "hire")) act({ type: "hire" });
    else act({ type: "upgrade_studio" });
  }
  return { s, log };
}

describe("firing (LOCKED: employees can be dismissed)", () => {
  it("full eight-slot studio → fire one → hire the Software Engineer → build streaming", () => {
    const { s } = fullStudio();
    expect(s.staff.length).toBe(8);
    expect(s.maxStaff).toBe(8);
    expect(has(s, BIG, "hire_engineer")).toBe(false); // no free slot: the engineer is not an exception to the cap
    const victim = s.staff[2].id;
    applyDecision(s, BIG, { type: "fire", staffId: victim });
    expect(s.staff.length).toBe(7);
    expect(has(s, BIG, "hire_engineer")).toBe(true);
    applyDecision(s, BIG, { type: "hire_engineer" });
    expect(s.staff.length).toBe(8);
    expect(has(s, BIG, "hire")).toBe(false);
    applyDecision(s, BIG, { type: "build_streaming" });
    const eng = s.staff.find((x) => x.role === "software_engineer")!;
    expect(getChoices(s, BIG).options.some((o) => o.type === "fire" && o.staffId === eng.id)).toBe(false); // builder can't be dismissed mid-build
    for (let i = 0; i < 5; i++) advanceWeek(s, BIG);
    expect(s.platform!.status).toBe("live");
    expect(s.formerStaff!.map((x) => x.id)).toEqual([victim]);
  });

  it("payroll stops, the slot frees exactly once, and a dismissed employee can't be dismissed again", () => {
    const { s } = fullStudio();
    const victim = s.staff[1];
    advanceWeek(s, BIG);
    const before = s.ledger.filter((l) => l.kind === "payroll").at(-1)!.amount;
    applyDecision(s, BIG, { type: "fire", staffId: victim.id });
    advanceWeek(s, BIG);
    const after = s.ledger.filter((l) => l.kind === "payroll").at(-1)!.amount;
    expect(after - before).toBe(victim.wage);
    expect(() => applyDecision(s, BIG, { type: "fire", staffId: victim.id })).toThrow();
    expect(getChoices(s, BIG).options.filter((o) => o.type === "hire").length).toBe(1);
    applyDecision(s, BIG, { type: "hire" });
    expect(s.staff.length).toBe(s.maxStaff);
  });

  it("dismissal only between productions and never below the minimum team (OPEN rule); history is preserved", () => {
    const res = runScripted(
      4,
      G3,
      (st, ch) => {
        if (ch.phase === "planning") return ch.options.find((o) => o.type === "plan" && !o.format && o.ipRelation === "new")!;
        if (ch.phase === "pitch") return { type: "choose_offer", distributorId: ch.offers![0].distributorId };
        if (ch.phase === "casting") return { type: "cast", starId: ch.auditionCards!.find((c) => c.affordable)!.starId };
        if (ch.phase === "marketing") return { type: "market", campaign: "none" };
        expect(ch.options.some((o) => o.type === "fire")).toBe(false); // never offered mid-production
        return { type: "wait" };
      },
      { productions: 2, drain: true },
    );
    const s = res.state;
    expect(s.staff.length).toBe(2);
    expect(getChoices(s, G3).options.some((o) => o.type === "fire")).toBe(false); // already at minStaff = 2
    const rels = JSON.stringify(s.releases);
    s.staff.push({ ...structuredClone(s.staff[0]), id: "extra", name: "Extra" });
    s.maxStaff = 4;
    applyDecision(s, G3, { type: "fire", staffId: "extra" });
    expect(JSON.stringify(s.releases)).toBe(rels); // past production results untouched
    expect(s.formerStaff![0].firedWeek).toBe(s.week);
  });

  it("a dismissed employee stops contributing and gaining XP", () => {
    const { s } = fullStudio();
    const gone = s.staff[0];
    const xp = gone.totalXp;
    applyDecision(s, BIG, { type: "fire", staffId: gone.id });
    const ch = getChoices(s, BIG);
    applyDecision(s, BIG, ch.options.find((o) => o.type === "plan" && !o.format && o.ipRelation === "new")!);
    applyDecision(s, BIG, { type: "choose_offer", distributorId: getChoices(s, BIG).offers![0].distributorId });
    for (let i = 0; i < 4; i++) advanceWeek(s, BIG);
    expect(s.formerStaff!.find((x) => x.id === gone.id)!.totalXp).toBe(xp);
    expect(s.staff.every((x) => x.id !== gone.id)).toBe(true);
    expect(s.staff.every((x) => x.totalXp > 0)).toBe(true); // everyone still employed worked
  });

  it("decision logs with dismissals replay exactly (policy career that cuts staff)", () => {
    const cfg = withOverrides(G3, { start: { cash: 3_000_000 } });
    const a = runScripted(7, cfg, firingPolicy, { productions: 4, drain: true });
    expect(a.state.formerStaff?.length ?? 0).toBeGreaterThan(0);
    const b = replay(7, cfg, a.decisions);
    expect(JSON.stringify(b.staff)).toBe(JSON.stringify(a.state.staff));
    expect(JSON.stringify(b.formerStaff)).toBe(JSON.stringify(a.state.formerStaff));
    expect(JSON.stringify(b.releases)).toBe(JSON.stringify(a.state.releases));
    expect(b.cash).toBe(a.state.cash);
    expect(checkInvariants(a, cfg)).toEqual([]);
  });

  it("after hiring and dismissing, a broke studio still finishes via the lifeline, the free Star and the $0 campaign", () => {
    const { s } = fullStudio();
    applyDecision(s, BIG, { type: "fire", staffId: s.staff[7].id });
    applyDecision(s, BIG, { type: "fire", staffId: s.staff[6].id });
    s.ledger.push({ week: s.week, kind: "payroll", amount: -s.cash - 400_000, note: "TEST: force deep debt" });
    s.cash = -400_000;
    const done = s.releases.length;
    let guard = 0;
    while (s.releases.length === done && guard++ < 200) {
      const ch = getChoices(s, BIG);
      if (ch.phase === "planning") {
        const cheapest = ch.options.find((o) => o.type === "plan" && !o.format && o.ipRelation === "new")!; // the movie is the cheapest format
        applyDecision(s, BIG, cheapest);
      } else if (ch.phase === "pitch") {
        const cover = ch.offers!.find((o) => o.advance >= BIG.production.movie.baseCost); // a real offer or the lifeline
        expect(cover).toBeTruthy();
        applyDecision(s, BIG, { type: "choose_offer", distributorId: cover!.distributorId });
      } else if (ch.phase === "casting") {
        const card = ch.auditionCards!.find((c) => c.affordable)!;
        expect(card).toBeTruthy();
        applyDecision(s, BIG, { type: "cast", starId: card.starId });
      } else if (ch.phase === "marketing") {
        expect(ch.campaigns!.find((c) => c.id === "none")!.affordable).toBe(true);
        applyDecision(s, BIG, { type: "market", campaign: "none" });
      } else advanceWeek(s, BIG);
    }
    expect(s.releases.length).toBe(done + 1);
  });
});

function firingPolicy(s: StudioState, ch: ReturnType<typeof getChoices>): Decision {
  if (ch.phase === "planning") {
    const fired = s.formerStaff?.length ?? 0;
    const h = ch.options.find((o) => o.type === "hire");
    if (h && !fired && s.staff.length < 4) return h;
    const f = ch.options.find((o) => o.type === "fire");
    if (f && !fired && s.releases.length >= 2) return f;
    return ch.options.find((o) => o.type === "plan" && !o.format && o.ipRelation === "new")!;
  }
  if (ch.phase === "pitch") return { type: "choose_offer", distributorId: [...ch.offers!].sort((a, b) => b.advance - a.advance)[0].distributorId };
  if (ch.phase === "casting") return { type: "cast", starId: [...ch.auditionCards!].filter((c) => c.affordable).sort((a, b) => a.price - b.price)[0].starId };
  if (ch.phase === "marketing") return { type: "market", campaign: "none" };
  return { type: "wait" };
}
