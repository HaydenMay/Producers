// Gate 2.5 C acceptance tests: Prestige scope variants.
import { describe, expect, it } from "vitest";
import { readFileSync } from "node:fs";
import { baselineConfig, withOverrides, type Config } from "../../src/core/config";
import { createStudio, replay } from "../../src/core/simulation";
import { evaluatePrestige } from "../../src/core/prestige";
import { runCareer } from "../../src/batch/runner";
import type { Release, StudioState } from "../../src/core/types";

const spec = JSON.parse(readFileSync("config/experiments/C_prestige_scope.json", "utf8")) as { variants: { name: string; overrides: Record<string, unknown> }[] };
const variant = (n: string): Config => withOverrides(baselineConfig(), spec.variants.find((v) => v.name === n)!.overrides);

function fakeRelease(s: StudioState, id: string, ipId: string, audience: number, critic: number, gross = 0, meter = 80): Release {
  const avg = Math.round(((audience + critic) / 2) * 100) / 100;
  const r = {
    id, title: id, genre: "Horror", theme: "Zombies", ipId, ipRelation: "sequel", releaseWeek: s.week, distributorId: null, royalty: 0, reachCap: 1e6, starId: null,
    meters: { plot: meter, writing: meter, filming: meter, editing: meter }, audience, critic, avgScore: avg, hallOfFame: avg >= 9, openingViewers: 0, weekIndex: 0, lastViewers: 0,
    totalViewers: 0, grossTotal: gross, distributorTake: 0, studioTake: 0, active: false, advance: 0, surplusKept: 0, baseCost: 0, starFee: 0, campaignCost: 0, cashOverrun: 0, weekly: [], trace: {},
  } as Release;
  s.releases.push(r);
  return r;
}

describe("Prestige scopes", () => {
  it("perRelease and hybrid credit a qualifying sequel again; perIP does not", () => {
    for (const [name, expectSecond] of [["perIP", false], ["perRelease", true], ["hybrid", true]] as const) {
      const cfg = variant(name);
      const s = createStudio(1, cfg);
      s.ips.ip1 = { id: "ip1", name: "IP", fans: 0, titles: [] };
      const a1 = evaluatePrestige(s, cfg, fakeRelease(s, "r1", "ip1", 8, 8), "scored");
      const a2 = evaluatePrestige(s, cfg, fakeRelease(s, "r2", "ip1", 8, 8), "scored");
      expect(a1.some((x) => x.id.includes("audience_7_5"))).toBe(true);
      expect(a2.some((x) => x.id.includes("audience_7_5"))).toBe(expectSecond);
    }
  });
  it("non-qualifying repeats get nothing; nothing pays twice within one release", () => {
    const cfg = variant("perRelease");
    const s = createStudio(2, cfg);
    s.ips.ip1 = { id: "ip1", name: "IP", fans: 0, titles: [] };
    const weak = fakeRelease(s, "w", "ip1", 5, 5, 0, 50);
    expect(evaluatePrestige(s, cfg, weak, "scored")).toEqual([]);
    const good = fakeRelease(s, "g", "ip1", 9.2, 9.2);
    const first = evaluatePrestige(s, cfg, good, "scored");
    expect(first.length).toBeGreaterThan(0);
    expect(evaluatePrestige(s, cfg, good, "scored")).toEqual([]); // re-evaluation never double-pays
  });
  it("hybrid: career firsts once ever; IP-cumulative commercial milestones once when crossed", () => {
    const cfg = variant("hybrid");
    const s = createStudio(3, cfg);
    s.ips.ip1 = { id: "ip1", name: "IP", fans: 0, titles: [] };
    const h1 = evaluatePrestige(s, cfg, fakeRelease(s, "h1", "ip1", 9.5, 9.5), "scored");
    const h2 = evaluatePrestige(s, cfg, fakeRelease(s, "h2", "ip1", 9.5, 9.5), "scored");
    expect(h1.some((x) => x.id === "career:first_hall_of_fame")).toBe(true);
    expect(h2.some((x) => x.id === "career:first_hall_of_fame")).toBe(false);
    expect(h2.some((x) => x.id.includes("hall_of_fame"))).toBe(true); // per-release HoF still pays
    // two titles at $600K each cross the $1M IP total exactly once
    const c1 = fakeRelease(s, "c1", "ip1", 5, 5, 600000);
    expect(evaluatePrestige(s, cfg, c1, "run").some((x) => x.id.includes("ip_gross_1m"))).toBe(false); // IP total $600K
    const c2 = fakeRelease(s, "c2", "ip1", 5, 5, 600000);
    expect(evaluatePrestige(s, cfg, c2, "run").some((x) => x.id === "ip:ip1:ip_gross_1m")).toBe(true); // crosses $1.2M
    const c3 = fakeRelease(s, "c3", "ip1", 5, 5, 600000);
    expect(evaluatePrestige(s, cfg, c3, "run").some((x) => x.id.includes("ip_gross_1m"))).toBe(false); // already paid
  });
  it("replay is exact under every scope", () => {
    for (const name of ["perIP", "perRelease", "hybrid"]) {
      const cfg = variant(name);
      const r = runCareer(7, "franchise-builder", cfg, { productions: 6, drain: true });
      expect(JSON.stringify(replay(7, cfg, r.decisions))).toBe(JSON.stringify(r.state));
      expect(new Set(r.state.prestigeAwards).size).toBe(r.state.prestigeAwards.length);
    }
  });
});
