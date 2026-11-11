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
    s.week = 5 * 52; // year 5: SciFi needs 55
    checkGenreUnlocks(s, D);
    expect(s.unlockedGenres).not.toContain("SciFi");
    s.week = 6 * 52; // year 6: 50
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
    const r = runCareer(1, "balanced", D, { productions: 0, years: 6 }).state;
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
