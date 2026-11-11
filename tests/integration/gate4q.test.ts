// Gate 4Q: editorial genre/theme compatibility, steeper D/F, rare audience-only cult appeal, and proof that
// Star skill (broad FAMILY), studio experience (EXACT genre) and pairing compatibility stay three separate systems.
import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";
import { legacyConfig, withOverrides, type Config } from "../../src/core/config";
import { advanceWeek, applyDecision, createStudio, getChoices, replay } from "../../src/core/simulation";
import { awardGenreXp, editorialGrades, genreBonus } from "../../src/core/progression";
import { starFit } from "../../src/core/stars";
import { computeScores } from "../../src/core/scoring";
import { comboKey } from "../../src/core/distribution";
import { runCareer } from "../../src/batch/runner";
import { checkInvariants } from "../../src/batch/diagnostics";
import type { Grade, PlanDecision, Release, StudioState } from "../../src/core/types";

const G4 = withOverrides(legacyConfig(), JSON.parse(readFileSync("config/gate4.json", "utf8")));
const Q = withOverrides(legacyConfig(), JSON.parse(readFileSync("config/gate4q.json", "utf8")));
const ORDER: Grade[] = ["A", "B", "C", "D", "F"];
const meters = (x: number) => ({ plot: x, writing: x, filming: x, editing: x });

/** Make one new movie on a pairing; optionally give the auditioned Star a given skill profile (test setup). */
function makeMovie(s: StudioState, cfg: Config, genre: string, theme: string, skills?: Record<string, number>): Release {
  if (!s.unlockedThemes.includes(theme)) s.unlockedThemes.push(theme);
  if (!s.unlockedGenres.includes(genre)) s.unlockedGenres.push(genre);
  const plan = getChoices(s, cfg).options.find((o): o is PlanDecision => o.type === "plan" && !o.format && o.ipRelation === "new" && o.genre === genre && o.theme === theme && !o.route)!;
  applyDecision(s, cfg, plan);
  const n = s.releases.length;
  while (s.releases.length === n) {
    const ch = getChoices(s, cfg);
    if (ch.phase === "casting") {
      const card = [...ch.auditionCards!].filter((c) => c.affordable).sort((a, b) => a.price - b.price)[0];
      if (skills) s.stars[card.starId].skills = { ...skills };
      applyDecision(s, cfg, { type: "cast", starId: card.starId });
    } else if (ch.phase === "distribution") applyDecision(s, cfg, { type: "distribute", distributorId: null });
    else if (ch.phase === "marketing") applyDecision(s, cfg, { type: "market", campaign: "none" });
    else advanceWeek(s, cfg);
  }
  return s.releases.at(-1)!;
}

describe("Gate 4Q: three distinct systems (family Star skill, exact-genre studio XP, pairing compatibility)", () => {
  it("a Scary-family Star fits Horror AND Thriller (existing mapping), not Comedy", () => {
    const star = { skills: { Scary: 80 } } as never;
    expect(starFit(star, "Horror", Q)).toBe(80);
    expect(starFit(star, "Thriller", Q)).toBe(80);
    expect(starFit(star, "Comedy", Q)).toBe(0);
    expect(Q.world.genres.Horror).toBe("Scary");
    expect(Q.world.genres.Thriller).toBe("Scary");
  });
  it("a spooky THEME does not give a Scary Star a boost on a non-Scary genre", () => {
    const cfg = withOverrides(Q, { start: { cash: 500_000 } });
    const a = makeMovie(createStudio(11, cfg), cfg, "Comedy", "Vampires", { Scary: 90 });
    const b = makeMovie(createStudio(11, cfg), cfg, "Comedy", "Sports", { Scary: 90 });
    const h = makeMovie(createStudio(11, cfg), cfg, "Horror", "Sports", { Scary: 90 });
    const q = (r: Release) => r.trace.quality as { starFit: number; starPoints: number };
    expect(q(a).starFit).toBe(0);
    expect(q(b).starFit).toBe(0);
    expect(q(a).starPoints).toBe(q(b).starPoints);
    expect(q(h).starFit).toBe(90);
    expect(q(h).starPoints).toBeGreaterThan(q(a).starPoints);
  });
  it("studio Horror XP never becomes Thriller XP (exact genre)", () => {
    const s = createStudio(1, Q);
    for (let i = 0; i < 6; i++) awardGenreXp(s, Q, "Horror");
    expect(genreBonus(s, Q, "Horror")).toBeGreaterThan(0);
    expect(genreBonus(s, Q, "Thriller")).toBe(0);
  });
  it("compatibility is ONE grade per EXACT genre: Horror+Zombies and Thriller+Zombies differ even though both are Scary", () => {
    const m = Q.world.compatibility.matrix as unknown as Record<string, Record<string, Grade>>;
    expect(m.Horror.Zombies).not.toBe(m.Thriller.Zombies);
    expect(m.Horror.Zombies).toBe("A");
    expect(m.SciFi.Robots).toBe("A");
    for (const g of Object.keys(Q.world.genres)) for (const t of Q.world.themes) expect(["A", "B", "C", "D", "F"], `${g}+${t}`).toContain(m[g]?.[t]);
    // every contested pair carries its pick + reason and the pick matches the matrix
    for (const [k, why] of Object.entries(Q.world.compatibility.contestable as Record<string, string>)) {
      const [g, t] = k.split("|");
      expect(why.startsWith(m[g][t]), k).toBe(true);
    }
  });
  it("one shared grade: both stored sides are equal in every editorial world", () => {
    for (let seed = 1; seed <= 20; seed++) for (const g of Object.values(createStudio(seed, Q).world.comboGrades)) expect(g.audience).toBe(g.critic);
  });
  it("a great crew mitigates a poor pairing without erasing it; a weak crew with a great pairing is still mediocre", () => {
    const sc = (x: number, a: Grade, c: Grade) => {
      const r = computeScores(meters(x), { audience: a, critic: c }, 0, false, Q);
      return (r.audience + r.critic) / 2;
    };
    expect(sc(88, "F", "F")).toBeGreaterThan(4);
    expect(sc(88, "A", "A") - sc(88, "F", "F")).toBeGreaterThan(3);
    expect(sc(55, "A", "A")).toBeLessThan(7);
    expect(sc(55, "F", "F")).toBeLessThan(4); // rookie meters + F/F = a genuine dud under the candidate severity
  });
});

describe("Gate 4Q editorial compatibility: deterministic, bounded, legacy-safe", () => {
  it("same seed + config → same grades; variation never moves a pair more than one step", () => {
    const m = Q.world.compatibility.matrix as unknown as Record<string, Record<string, Grade>>;
    let moved = 0;
    for (let seed = 1; seed <= 200; seed++) {
      const s = createStudio(seed, Q);
      expect(JSON.stringify(createStudio(seed, Q).world.comboGrades)).toBe(JSON.stringify(s.world.comboGrades));
      for (const g of Object.keys(Q.world.genres))
        for (const t of Q.world.themes) {
          const d = Math.abs(ORDER.indexOf(s.world.comboGrades[comboKey(g, t)].audience) - ORDER.indexOf(m[g][t]));
          expect(d).toBeLessThanOrEqual(1);
          moved += d;
        }
    }
    const share = moved / (200 * 80);
    expect(share).toBeGreaterThan(0.12);
    expect(share).toBeLessThan(0.22); // ~20% chance minus clamped A/F moves
    expect(editorialGrades(7, Q, "Horror", "Zombies").baseline).toBe(m.Horror.Zombies);
  });
  it("editorial mode consumes the same world draws: every other stream and draw is unchanged vs random mode", () => {
    const a = createStudio(5, G4);
    const b = createStudio(5, Q);
    expect(b.rng).toEqual(a.rng);
    expect(JSON.stringify(b.stars)).toBe(JSON.stringify(a.stars));
  });
  it("legacy (mode random) is the default and the Gate 4 config is untouched by the new keys", () => {
    expect(legacyConfig().world.compatibility.mode).toBe("random");
    expect(G4.world.compatibility.mode).toBe("random");
    expect(G4.world.cult.enabled).toBe(false);
    expect(G4.world.gradeMultiplier).toEqual({ A: 1.15, B: 1.06, C: 1.0, D: 0.9, F: 0.78 });
  });
});

describe("Gate 4Q cult appeal (rare, audience-only, explainable)", () => {
  const ALWAYS = withOverrides(Q, { start: { cash: 500_000 }, world: { cult: { baseChance: 1, minAudienceCraft: 0, breakoutShare: 0 } } });
  it("lifts only the audience for this title; critics, the combo book and the next title on that pairing are untouched", () => {
    const s = createStudio(3, ALWAYS);
    const r = makeMovie(s, ALWAYS, "Horror", "Sports"); // F/F baseline
    const c = r.trace.cult as { happened: boolean; tier: string; baselineAudience: Grade; effectiveAudience: Grade; draw: number; chance: number; audienceWithout: number; reasons: string[] };
    expect(c.happened).toBe(true);
    expect(c.tier).toBe("lift");
    expect(c.effectiveAudience).toBe(ORDER[ORDER.indexOf(c.baselineAudience) - 2]);
    expect(r.audience).toBeGreaterThan(c.audienceWithout);
    expect((r.trace.quality as { score: { comboCritic: Grade } }).score.comboCritic).toBe(s.world.comboGrades[comboKey("Horror", "Sports")].critic);
    expect(s.comboBook[comboKey("Horror", "Sports")].audience).toBe(c.baselineAudience); // stable knowledge = baseline
    expect(s.events.some((e) => e.type === "cult" && e.message.startsWith("Unexpected cult appeal"))).toBe(true);
    const again = makeMovie(s, ALWAYS, "Horror", "Sports");
    expect(again.trace.cult).toBeUndefined(); // novelty: never on a pairing the studio already made
    // no-cult twin: same seed, same decisions, cult off → identical critic, lower audience
    const off = withOverrides(ALWAYS, { world: { cult: { enabled: false } } });
    const t = makeMovie(createStudio(3, off), off, "Horror", "Sports");
    expect(t.critic).toBe(r.critic);
    expect(t.audience).toBe(c.audienceWithout);
  });
  it("is never drawn for decent pairings, and policy careers with it keep every invariant and replay exactly", () => {
    const s = createStudio(4, ALWAYS);
    expect(makeMovie(s, ALWAYS, "Horror", "Zombies").trace.cult).toBeUndefined();
    for (const st of ["low-budget-random-combo", "poor-fit-chooser", "tv-first", "mixed"]) {
      const r = runCareer(6, st, Q, { productions: 0, years: 8 });
      expect(checkInvariants(r, Q)).toEqual([]); // includes SCORE_NOT_CAUSAL (scores rebuilt from the traced grades)
      const b = replay(6, Q, r.decisions);
      expect(JSON.stringify(b.releases)).toBe(JSON.stringify(r.state.releases));
    }
  });
  it("80% distributor bids still can't see hidden grades (editorial or not)", () => {
    const s = createStudio(6, Q);
    applyDecision(s, Q, getChoices(s, Q).options.find((o) => o.type === "plan" && !o.format)!);
    const twin = structuredClone(s);
    for (const k of Object.keys(twin.world.comboGrades)) twin.world.comboGrades[k] = { audience: "A", critic: "A" };
    const meet = (x: StudioState) => {
      for (;;) {
        const ch = getChoices(x, Q);
        if (ch.phase === "distribution") return ch.bids;
        if (ch.phase === "casting") applyDecision(x, Q, { type: "cast", starId: ch.auditionCards!.find((c) => c.affordable)!.starId });
        else advanceWeek(x, Q);
      }
    };
    expect(JSON.stringify(meet(twin))).toBe(JSON.stringify(meet(s)));
  });
  it("critic eras (Gate 2.6) still apply after the combo step in the same pipeline", () => {
    const cfg = withOverrides(Q, { expectations: { critics: { enabled: true, generationYears: 2, toughnessPerGeneration: 0.08, maxToughness: 0.12 } } });
    const r = runCareer(2, "balanced", cfg, { productions: 0, years: 6 });
    expect(checkInvariants(r, cfg)).toEqual([]);
    expect(r.state.releases.some((x) => (x.criticGeneration ?? 0) > 0)).toBe(true);
  });
  it("low-budget-random-combo is an exact alias of cheap-duds", () => {
    const a = runCareer(9, "cheap-duds", Q, { productions: 0, years: 4 });
    const b = runCareer(9, "low-budget-random-combo", Q, { productions: 0, years: 4 });
    expect(JSON.stringify(b.state.releases)).toBe(JSON.stringify(a.state.releases));
  });
});
