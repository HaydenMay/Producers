// Genre unlocks (PROD-091): crew thresholds, combo unlock, era safety net; no money path; legacy off.
import { describe, expect, it } from "vitest";
import { baselineConfig, legacyConfig } from "../../src/core/config";
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
  it("the era safety net opens everything still locked at year 6", () => {
    const s = createStudio(1, D);
    s.week = D.genreUnlocks.eraSafetyNetYear * 52;
    checkGenreUnlocks(s, D);
    expect([...s.unlockedGenres].sort()).toEqual(Object.keys(D.world.genres).sort());
  });
  it("there is no paid genre research option", () => {
    const s = createStudio(1, D);
    s.cash = 1e7;
    expect(getChoices(s, D).options.some((o) => (o.type as string).includes("genre"))).toBe(false);
  });
  it("real careers open new genres and make films in them; legacy never unlocks", () => {
    const r = runCareer(1, "balanced", D, { productions: 0, years: 6 }).state;
    expect(r.unlockedGenres.length).toBe(8);
    expect(r.releases.some((x) => !D.start.unlockedGenres.includes(x.genre))).toBe(true);
    const l = runCareer(1, "balanced", legacyConfig(), { productions: 0, years: 6 }).state;
    expect(l.unlockedGenres).toEqual(legacyConfig().start.unlockedGenres);
  });
});
