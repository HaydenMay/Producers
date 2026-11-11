// Controlled counterfactual scenarios: same seed, one variable changed.
import { describe, expect, it } from "vitest";
import { legacyConfig, withOverrides, type Config } from "../../src/core/config";
import { applyDecision, createStudio, getChoices } from "../../src/core/simulation";
import type { Decision, Release, StudioState } from "../../src/core/types";
import { runScripted } from "../../src/batch/runner";
import { scriptedDecide, type ScriptPrefs } from "../helpers";

const rich = withOverrides(legacyConfig(), { start: { cash: 600000 } });

function oneMovie(cfg: Config, seed: number, prefs: ScriptPrefs, mutateAtCasting?: (s: StudioState, starId: string) => void): Release {
  const s = createStudio(seed, cfg);
  const decide = scriptedDecide(prefs);
  for (let i = 0; i < 300 && s.counters.productionsCompleted < 1; i++) {
    const ch = getChoices(s, cfg);
    let d: Decision = ch.phase === "production" ? { type: "wait" } : decide(s, ch);
    if (ch.phase === "casting" && mutateAtCasting && d.type === "cast") mutateAtCasting(s, d.starId);
    applyDecision(s, cfg, d);
  }
  while (s.releases[0].active) applyDecision(s, cfg, { type: "wait" });
  return s.releases[0];
}

describe("marketing changes viewership, never scores", () => {
  it("same movie, no campaign vs large campaign", () => {
    const quiet = oneMovie(rich, 101, { genre: "Horror", theme: "Zombies", campaign: "none", star: "first" });
    const loud = oneMovie(rich, 101, { genre: "Horror", theme: "Zombies", campaign: "large", star: "first" });
    expect(loud.audience).toBe(quiet.audience);
    expect(loud.critic).toBe(quiet.critic);
    expect(loud.openingViewers).toBeGreaterThan(quiet.openingViewers);
  });
});

describe("bad high-hype film vs great low-marketing film", () => {
  it("hyped dud opens big but has poor legs; great film has strong legs", () => {
    const badCfg = withOverrides(rich, { start: { staff: [{ name: "A", stats: { plot: 4, writing: 4, filming: 6, editing: 5 }, wage: 900 }, { name: "B", stats: { plot: 5, writing: 4, filming: 5, editing: 6 }, wage: 900 }] } });
    const goodCfg = withOverrides(rich, { start: { staff: [{ name: "A", stats: { plot: 85, writing: 85, filming: 80, editing: 80 }, wage: 900 }, { name: "B", stats: { plot: 80, writing: 80, filming: 85, editing: 85 }, wage: 900 }] } });
    const dud = oneMovie(badCfg, 102, { campaign: "large", star: "famous", offer: "maxReach" });
    const gem = oneMovie(goodCfg, 102, { campaign: "none", star: "cheapest", offer: "maxReach" });
    expect(dud.avgScore).toBeLessThan(4.5);
    expect(gem.avgScore).toBeGreaterThan(7);
    expect(dud.openingViewers).toBeGreaterThan(gem.openingViewers);
    const legs = (r: Release) => r.totalViewers / r.openingViewers;
    expect(legs(gem)).toBeGreaterThan(legs(dud));
    // early weeks driven by critics, later by audience (drivers recorded)
    expect(dud.weekly[1].driver).toContain("critic");
    expect(dud.weekly.at(-2)!.driver).toContain("audience");
    expect(dud.weekly.at(-1)!.viewers).toBe(0); // run terminates
  });
});

describe("wide vs narrow reach", () => {
  it("same quality, narrower reach => smaller gross, explained by reach cap", () => {
    const wide = oneMovie(rich, 103, { offer: "maxReach", star: "first", campaign: "small" });
    const narrow = oneMovie(rich, 103, { offer: "minReach", star: "first", campaign: "small" });
    expect(narrow.audience).toBe(wide.audience);
    expect(narrow.critic).toBe(wide.critic);
    expect(narrow.reachCap).toBeLessThan(wide.reachCap);
    expect(narrow.grossTotal).toBeLessThan(wide.grossTotal);
  });
});

describe("famous bad-fit vs unknown good-fit Star", () => {
  it("Fame lifts the opening; family skill lifts Filming and scores; no Fame-to-score leak", () => {
    const famous = oneMovie(rich, 104, { genre: "Horror", star: "first", campaign: "small" }, (s, id) => {
      s.stars[id].fame = 95;
      s.stars[id].skills.Scary = 5;
    });
    const unknown = oneMovie(rich, 104, { genre: "Horror", star: "first", campaign: "small" }, (s, id) => {
      s.stars[id].fame = 0;
      s.stars[id].skills.Scary = 95;
    });
    expect(famous.openingViewers).toBeGreaterThan(unknown.openingViewers);
    expect(unknown.meters.filming).toBeGreaterThan(famous.meters.filming);
    expect(unknown.audience).toBeGreaterThan(famous.audience);
    // same Star skills, different Fame => identical scores
    const famousSameSkill = oneMovie(rich, 104, { genre: "Horror", star: "first", campaign: "small" }, (s, id) => {
      s.stars[id].fame = 95;
      s.stars[id].skills.Scary = 95;
    });
    expect(famousSameSkill.audience).toBe(unknown.audience);
    expect(famousSameSkill.critic).toBe(unknown.critic);
  });
});

describe("Star relationships", () => {
  it("rejecting auditions never hurts; recasting the established lead in a direct sequel does", () => {
    let firstCards: string[] = [];
    let chosen = "";
    const s = createStudio(105, rich);
    const decide = scriptedDecide({ genre: "Horror", star: "first", campaign: "small" });
    const step = (d: Decision) => applyDecision(s, rich, d);
    // movie 1
    while (s.counters.productionsCompleted < 1) {
      const ch = getChoices(s, rich);
      if (ch.phase === "casting") {
        firstCards = ch.auditionCards!.map((c) => c.starId);
        chosen = ch.auditionCards!.find((c) => c.affordable)!.starId;
        step({ type: "cast", starId: chosen });
        continue;
      }
      step(ch.phase === "production" ? { type: "wait" } : decide(s, ch));
    }
    for (const id of firstCards.filter((x) => x !== chosen)) expect(s.stars[id].relationship).toBe(rich.stars.relationshipStart);
    while (s.releases.some((r) => r.active)) step({ type: "wait" });
    const ipId = s.releases[0].ipId;
    const relBefore = s.stars[chosen].relationship;
    // movie 2: direct sequel, recast with someone else
    const plan = getChoices(s, rich).options.find((o) => o.type === "plan" && o.ipRelation === "sequel" && o.parentIpId === ipId)!;
    step(plan);
    step(decide(s, getChoices(s, rich)));
    let ch = getChoices(s, rich);
    while (ch.phase === "production") {
      step({ type: "wait" });
      ch = getChoices(s, rich);
    }
    const other = ch.auditionCards!.find((c) => c.affordable && c.starId !== chosen)!;
    step({ type: "cast", starId: other.starId });
    expect(s.stars[chosen].relationship).toBeCloseTo(Math.max(0, relBefore - rich.stars.relRecast), 5);
    expect(s.events.some((e) => e.type === "star_recast")).toBe(true);
  });

  it("a flop that lowers a Star's Fame lowers the relationship (with a reason)", () => {
    const badCfg = withOverrides(rich, { start: { staff: [{ name: "A", stats: { plot: 3, writing: 3, filming: 3, editing: 3 }, wage: 900 }, { name: "B", stats: { plot: 3, writing: 3, filming: 3, editing: 3 }, wage: 900 }] } });
    const s = runScripted(106, badCfg, scriptedDecide({ star: "famous", campaign: "large", offer: "maxReach" }), { productions: 1, drain: true }).state;
    const rel = s.releases[0];
    expect(rel.avgScore).toBeLessThan(5);
    const career = rel.trace.starCareer as Record<string, number | string>;
    expect(Number(career.fameDelta)).toBeLessThan(0);
    expect(String(career.reasons)).toContain("hurt their career");
  });
});

describe("IP fans", () => {
  it("new IP starts at 0; sequel shares the IP (all fans); spinoff inherits a fraction", () => {
    const s = createStudio(107, rich);
    const decide = scriptedDecide({ star: "first", campaign: "medium", offer: "maxReach" });
    const finish = () => {
      while (s.project || s.pendingOffers) {
        const ch = getChoices(s, rich);
        applyDecision(s, rich, ch.phase === "production" ? { type: "wait" } : decide(s, ch));
      }
      while (s.releases.some((r) => r.active)) applyDecision(s, rich, { type: "wait" });
    };
    applyDecision(s, rich, getChoices(s, rich).options.find((o) => o.type === "plan")!);
    applyDecision(s, rich, decide(s, getChoices(s, rich)));
    const ipId = s.project!.ipId;
    expect(s.ips[ipId].fans).toBe(0);
    finish();
    expect(s.ips[ipId].fans).toBeGreaterThan(0);
    // sequel: same IP id, so every fan carries over
    applyDecision(s, rich, getChoices(s, rich).options.find((o) => o.type === "plan" && o.ipRelation === "sequel" && o.parentIpId === ipId)!);
    applyDecision(s, rich, decide(s, getChoices(s, rich)));
    expect(s.project!.ipId).toBe(ipId);
    finish();
    // spinoff: new IP seeded with a fraction of the parent's fans
    const parentFans = s.ips[ipId].fans;
    applyDecision(s, rich, getChoices(s, rich).options.find((o) => o.type === "plan" && o.ipRelation === "spinoff" && o.parentIpId === ipId)!);
    applyDecision(s, rich, decide(s, getChoices(s, rich)));
    const spinIp = s.ips[s.project!.ipId];
    expect(spinIp.id).not.toBe(ipId);
    expect(spinIp.fans).toBe(Math.round(parentFans * rich.audience.spinoffFanShare));
  });
});
