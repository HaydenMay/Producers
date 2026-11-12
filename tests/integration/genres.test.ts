// Genre unlocks (PROD-091): crew thresholds, combo unlock, era safety net; no money path; legacy off.
import { describe, expect, it } from "vitest";
import { baselineConfig, legacyConfig, withOverrides } from "../../src/core/config";
import { createStudio, getChoices } from "../../src/core/simulation";
import { checkGenreUnlocks } from "../../src/core/progression";
import { runCareer } from "../../src/batch/runner";

const D = baselineConfig();
describe("genre unlocks", () => {
  it("a staffer reaching the threshold opens the matching genre (and only that one)", () => {
    const s = createStudio(1, D);
    checkGenreUnlocks(s, D);
    expect(s.unlockedGenres).toEqual(D.start.unlockedGenres);
    s.staff[0].stats.editing = 60;
    checkGenreUnlocks(s, D);
    expect(s.unlockedGenres).toEqual([...D.start.unlockedGenres, "SciFi"]);
    expect(s.events.at(-1)!.message).toContain("SciFi");
  });
  it("RomCom opens after releasing both a Comedy and a Romance", () => {
    const s = createStudio(1, D);
    s.unlockedGenres.push("Romance");
    s.releases.push({ genre: "Comedy" } as never);
    checkGenreUnlocks(s, D);
    expect(s.unlockedGenres).not.toContain("RomCom");
    s.releases.push({ genre: "Romance" } as never);
    checkGenreUnlocks(s, D);
    expect(s.unlockedGenres).toContain("RomCom");
  });
  it("thresholds ease from year 4 (5/yr, floor 40) so a weak crew still opens genres itself; nothing is handed out", () => {
    const s = createStudio(1, D);
    for (const st of s.staff) st.stats.editing = 52;
    s.week = 3 * 52 + 51; // still year 3: no easing, SciFi needs 60
    checkGenreUnlocks(s, D);
    expect(s.unlockedGenres).not.toContain("SciFi");
    s.week = 4 * 52; // year 4: first easing step, SciFi needs 55 (audit 2026-11-12: was a year late)
    checkGenreUnlocks(s, D);
    expect(s.unlockedGenres).not.toContain("SciFi");
    s.week = 5 * 52; // year 5: 50
    checkGenreUnlocks(s, D);
    expect(s.unlockedGenres).toContain("SciFi");
    expect(s.events.at(-1)!.message).toContain("eased to 50");
    const t = createStudio(1, D);
    t.week = 30 * 52; // even decades later, a crew below the floor (40) opens nothing
    for (const st of t.staff) for (const k of Object.keys(st.stats)) (st.stats as Record<string, number>)[k] = 39;
    checkGenreUnlocks(t, D);
    expect(t.unlockedGenres).toEqual(D.start.unlockedGenres);
  });
  it("there is no paid genre research option", () => {
    const s = createStudio(1, D);
    s.cash = 1e7;
    expect(getChoices(s, D).options.some((o) => (o.type as string).includes("genre"))).toBe(false);
  });
  it("real careers open new genres and make films in them; legacy never unlocks", () => {
    // experimenter = the policy whose job is trying new combos (with a full 8-person crew, balanced keeps to its proven hits)
    const r = runCareer(1, "experimenter", D, { productions: 0, years: 6 }).state;
    expect(r.unlockedGenres.length).toBeGreaterThanOrEqual(7);
    expect(r.releases.some((x) => !D.start.unlockedGenres.includes(x.genre))).toBe(true);
    const l = runCareer(1, "balanced", legacyConfig(), { productions: 0, years: 6 }).state;
    expect(l.unlockedGenres).toEqual(legacyConfig().start.unlockedGenres);
  });

  it("themes can't be bought by default; a locked theme turning Hot unlocks it", async () => {
    const { updateTrends } = await import("../../src/core/progression");
    const s = createStudio(1, D);
    s.cash = 1e7;
    expect(getChoices(s, D).options.some((o) => o.type === "research_theme")).toBe(false);
    const t = D.world.themes.find((x) => !s.unlockedThemes.includes(x))!;
    const always = withOverrides(D, { themeUnlocks: { chance: 1 } });
    s.trends[t] = { stage: "rising", weeksInStage: D.trends.risingWeeks } as never;
    updateTrends(s, always);
    expect(s.unlockedThemes).toContain(t);
    const l = createStudio(1, legacyConfig());
    l.cash = 1e7;
    expect(getChoices(l, legacyConfig()).options.some((o) => o.type === "research_theme")).toBe(true);
  });
});

describe("production times and format experience (designer 2026-11-11)", () => {
  it("fastest → slowest: limited series < 10-episode TV season < movie", async () => {
    const { formatSpec } = await import("../../src/core/formats");
    const ls = formatSpec(D, "limited_series").durationWeeks, tv = formatSpec(D, "tv", 10).durationWeeks, mv = formatSpec(D, "movie").durationWeeks;
    expect([ls, tv, mv]).toEqual([12, 20, 30]);
  });
  it("a movie counts double: Star level progress, practice growth, genre XP, review Prestige", async () => {
    const { applyStarCareer } = await import("../../src/core/stars");
    const { evaluatePrestige } = await import("../../src/core/prestige");
    const s = createStudio(1, D);
    const star = Object.values(s.stars)[0];
    const mk = (format?: string) => ({ id: "r", ipId: "x", genre: "Comedy", avgScore: 7, audience: 8, critic: 6, totalViewers: 1000, ...(format ? { format } : {}), meters: { plot: 80, writing: 80, filming: 80, editing: 80 }, hallOfFame: false }) as never;
    const lx = star.levelXp, lv = star.level;
    applyStarCareer(s, D, star, mk());
    expect(star.level * 2 + star.levelXp).toBe(lv * 2 + lx + 2);
    const a = evaluatePrestige(s, D, mk(), "scored").find((x) => x.id.includes("audience_7_5"))!;
    const t = createStudio(1, D);
    const b = evaluatePrestige(t, D, { ...(mk("limited_series") as object), id: "r2" } as never, "scored").find((x) => x.id.includes("audience_7_5"))!;
    const fe = (D.production as unknown as { formatExperience: Record<string, number> }).formatExperience;
    expect(fe.movie).toBeGreaterThan(fe.limited_series); // a movie counts more (2 vs 0.8 since the 2026-11-12 format balance)
    expect(Math.abs(a.amount * fe.limited_series - b.amount * fe.movie)).toBeLessThanOrEqual(fe.movie); // ratio = experience ratio, up to rounding
  });
});

// Audit 2026-11-12b M5: limited-series Star experience (0.8) carries over a level-up instead of being thrown away
import { applyStarCareer } from "../../src/core/stars";
describe("Star level progress carries over (M5)", () => {
  it("three limited series at 0.8 level a Star up with 0.4 carried; five reach 4.0 = two levels", () => {
    const D = baselineConfig();
    const fe = (D.production as unknown as { formatExperience: Record<string, number> }).formatExperience.limited_series;
    expect(fe).toBe(0.8);
    expect(D.stars.projectsPerLevel).toBe(2);
    const career = runCareer(1, "limited-focus", D, { productions: 0, years: 3 }).state;
    const rel = structuredClone(career.releases.find((r) => r.format === "limited_series")!);
    const s = createStudio(5, D);
    const star = s.stars[Object.keys(s.stars)[0]];
    star.level = 0, star.levelXp = 0;
    const call = () => applyStarCareer(s, D, star, rel);
    call(); call(); call();
    expect(star.level).toBe(1);
    expect(star.levelXp).toBeCloseTo(0.4, 6);
    call(); call();
    expect(star.level).toBe(2);
    expect(star.levelXp).toBeCloseTo(0, 6);
  });
});

// PROD-229 (designer 2026-11-12): audiences are curious about a freshly unlocked genre
import { freshGenreAwareness } from "../../src/core/progression";
describe("fresh-genre buzz (PROD-229)", () => {
  it("first and second releases in an unlocked genre get curiosity awareness; starting genres and legacy get none", () => {
    const D = baselineConfig();
    const aw = (D.genreUnlocks as unknown as { freshBuzz: { awareness: number[] } }).freshBuzz.awareness;
    const s = createStudio(2, D);
    const startGenre = (D.start.unlockedGenres as string[])[0];
    const fresh = Object.keys(D.world.genres).find((g) => !(D.start.unlockedGenres as string[]).includes(g))!;
    expect(freshGenreAwareness(s, D, startGenre)).toBe(0);
    expect(freshGenreAwareness(s, D, fresh)).toBe(aw[0]);
    s.releases.push({ genre: fresh } as never);
    expect(freshGenreAwareness(s, D, fresh)).toBe(aw[1]);
    s.releases.push({ genre: fresh } as never);
    expect(freshGenreAwareness(s, D, fresh)).toBe(0);
    expect(freshGenreAwareness(createStudio(2, legacyConfig()), legacyConfig(), fresh)).toBe(0);
  });
  it("real careers tag fresh-genre plans and use them (mixed, 6 years)", () => {
    const D = baselineConfig();
    let films = 0;
    for (let seed = 1; seed <= 4; seed++) films += runCareer(seed, "mixed", D, { productions: 0, years: 6 }).state.releases.filter((x) => !(D.start.unlockedGenres as string[]).includes(x.genre)).length;
    expect(films).toBeGreaterThan(4);
  });
});
