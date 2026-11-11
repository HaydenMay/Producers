// TV economics (PROD-139/140/209): show health, TV achievements, TV pay. TV-enabled = default + gate3 overlay.
import { describe, expect, it } from "vitest";
import { readFileSync } from "node:fs";
import { baselineConfig, legacyConfig, withOverrides } from "../../src/core/config";
import { createStudio } from "../../src/core/simulation";
import { showHealth } from "../../src/core/formats";
import { evaluatePrestige } from "../../src/core/prestige";
import { runCareer } from "../../src/batch/runner";
import { checkInvariants } from "../../src/batch/diagnostics";

const TV = withOverrides(baselineConfig(), JSON.parse(readFileSync("config/gate3.json", "utf8")));
const season = (n: number, avg: number, week = n * 30) => ({ id: `r${n}`, ipId: "ip1", format: "tv", seasonNumber: n, avgScore: avg, audience: avg, critic: avg, releaseWeek: week, hallOfFame: avg >= 9, meters: { plot: 0, writing: 0, filming: 0, editing: 0 } }) as never;

describe("show health: bad seasons drive viewers away", () => {
  it("weak seasons compound down, great ones recover up to full but never above", () => {
    const s = createStudio(1, TV);
    s.ips.ip1 = { id: "ip1", format: "tv" } as never;
    s.releases.push(season(1, 6.5), season(2, 6.5));
    expect(showHealth(s, TV, s.ips.ip1)!.mult).toBeCloseTo(0.64, 3);
    s.releases.push(season(3, 9.0));
    expect(showHealth(s, TV, s.ips.ip1)!.mult).toBeCloseTo(0.832, 3);
    s.releases.push(season(4, 9.5));
    expect(showHealth(s, TV, s.ips.ip1)!.mult).toBe(1);
    expect(showHealth(s, legacyConfig(), s.ips.ip1)).toBeNull();
  });
});

describe("TV achievements (never from airtime)", () => {
  it("acclaimed season, hit show at S3, long-runner at S5", () => {
    const s = createStudio(1, TV);
    s.releases.push(season(1, 8.6), season(2, 8.0), season(3, 7.6));
    const got = (r: never) => evaluatePrestige(s, TV, r, "scored").map((x) => x.id);
    expect(got(s.releases[0] as never).some((id) => id.includes("tv_acclaimed_season"))).toBe(true);
    expect(got(s.releases[2] as never).some((id) => id.includes("tv_hit_show"))).toBe(true); // show avg 8.07
    s.releases.push(season(4, 7.2), season(5, 7.0));
    expect(got(s.releases[4] as never).some((id) => id.includes("tv_long_runner"))).toBe(true);
    s.releases.push(season(6, 6.9));
    const t = createStudio(2, TV);
    t.releases.push(season(1, 7.5), season(2, 7.5), season(3, 6.9), season(4, 7.5), season(5, 7.5));
    expect(evaluatePrestige(t, TV, t.releases[4] as never, "scored").some((x) => x.id.includes("tv_long_runner"))).toBe(false);
  });
});

describe("TV careers", () => {
  it("hold every invariant; renewing tired shows forever now costs money", () => {
    const cash = (st: string, c = TV) => {
      const xs: number[] = [];
      for (let seed = 1; seed <= 4; seed++) {
        const r = runCareer(seed, st, c, { productions: 0, years: 10 });
        expect(checkInvariants(r, c)).toEqual([]);
        xs.push(r.state.cash);
      }
      return xs.sort((a, b) => a - b)[1];
    };
    expect(cash("renewal-franchise")).toBeLessThan(cash("tv-first"));
  });
});
