// Stars rework (PROD-213…218). Shipped default config; legacy overlay keeps it off.
import { describe, expect, it } from "vitest";
import { readFileSync } from "node:fs";
import { baselineConfig, legacyConfig, withOverrides } from "../../src/core/config";
import { createStudio } from "../../src/core/simulation";
import { runCareer } from "../../src/batch/runner";
import { buildAuditions, budgetFor, skillTotal, starFit } from "../../src/core/stars";
import { computeScores } from "../../src/core/scoring";
import { addByWeights, levelUpGrowth, talentYear, tierOf, updateCatalogUnlock } from "../../src/core/talent";
import type { Project, StarCard, Star } from "../../src/core/types";

const D = baselineConfig();
const project = (genre = "Horror", extra: Partial<Project> = {}) => ({ id: "p", genre, theme: "Zombies", ipRelation: "new", ipId: "ip1", ...extra }) as unknown as Project;

describe("PROD-213 persistent pool", () => {
  it("is generated once at creation, deterministic, and off in the legacy overlay", () => {
    const a = createStudio(5, D), b = createStudio(5, D);
    expect(Object.keys(a.stars).length).toBe(D.stars.pool.initialSize);
    expect(JSON.stringify(a.stars)).toBe(JSON.stringify(b.stars));
    const l = createStudio(5, legacyConfig());
    expect(Object.keys(l.stars).length).toBe(0);
    expect("catalogUnlocked" in l).toBe(false);
  });
  it("leaves every legacy stream untouched (own 'pool' stream): world and staff are identical to the pool-off run", () => {
    const off = withOverrides(D, { stars: { pool: { enabled: false } } });
    const a = createStudio(9, D), b = createStudio(9, off);
    expect(a.world).toEqual(b.world);
    expect(a.staff).toEqual(b.staff);
    for (const k of Object.keys(b.rng)) expect(a.rng[k], k).toBe(b.rng[k]);
  });
  it("auditions pull existing pool Stars, and a passed-on Star can audition again", () => {
    const s = createStudio(2, D);
    const before = new Set(Object.keys(s.stars));
    const cards = buildAuditions(s, D, project(), 1e6);
    expect(cards.filter((c) => c.source === "audition").every((c) => before.has(c.starId))).toBe(true);
    const r = runCareer(2, "balanced", D, { productions: 0, years: 6 }).state;
    const seen: Record<string, number> = {};
    for (const rel of r.releases) for (const c of rel.trace.auditionCards as StarCard[]) seen[c.starId] = (seen[c.starId] ?? 0) + 1;
    expect(Object.values(seen).some((v) => v > 1)).toBe(true);
  });
});

describe("PROD-214/215 years active, offscreen careers, retirement", () => {
  it("more years active → generally more Fame", () => {
    const st = Object.values(createStudio(1, D).stars);
    const fame = (lo: number, hi: number) => {
      const g = st.filter((s) => s.yearsActive! >= lo && s.yearsActive! <= hi);
      return g.reduce((a, s) => a + s.fame, 0) / g.length;
    };
    expect(fame(0, 2)).toBeLessThan(fame(3, 10));
    expect(fame(3, 10)).toBeLessThan(fame(11, 20));
  });
  it("a year adds a debut class, ages everyone, and veterans can retire", () => {
    const s = createStudio(4, D);
    const n0 = Object.keys(s.stars).length;
    const y0 = Object.values(s.stars).map((x) => x.yearsActive!);
    for (let y = 0; y < 8; y++) talentYear(s, D);
    expect(Object.keys(s.stars).length).toBe(n0 + 8 * D.stars.pool.debutPerYear);
    const orig = Object.values(s.stars).slice(0, n0);
    expect(orig.every((x, i) => x.retired || x.yearsActive! === y0[i] + 8)).toBe(true); // nobody is busy: everyone aged 8 years
    const ret = orig.filter((x) => x.retired);
    expect(ret.length).toBeGreaterThan(0);
    expect(ret.every((x) => x.yearsActive! > D.stars.pool.retirement.startYears)).toBe(true);
  });
  it("skills never fade: a decade of offscreen careers only ever raises skills", () => {
    const s = createStudio(8, D);
    const before = Object.fromEntries(Object.values(s.stars).map((x) => [x.id, { ...x.skills }]));
    for (let y = 0; y < 10; y++) talentYear(s, D);
    for (const [id, sk] of Object.entries(before)) for (const [f, v] of Object.entries(sk)) expect(s.stars[id].skills[f]).toBeGreaterThanOrEqual(v);
  });
  it("retired Stars never appear on a casting list", () => {
    const s = runCareer(7, "balanced", D, { productions: 0, years: 10 }).state;
    for (const rel of s.releases)
      for (const c of rel.trace.auditionCards as StarCard[]) {
        const st = s.stars[c.starId];
        if (st.retired) expect(st.retiredWeek!, st.name).toBeGreaterThanOrEqual(rel.releaseWeek - 30);
      }
  });
  it("the big-name tier doesn't empty out over a career", () => {
    const s = runCareer(1, "balanced", D, { productions: 0, years: 10 }).state;
    expect(Object.values(s.stars).filter((x) => !x.retired && tierOf(x, D) === "big").length).toBeGreaterThanOrEqual(15);
  });
});

describe("PROD-216 catalog + original lead", () => {
  it("is locked at the start: no catalog cards until unlocked", () => {
    const s = createStudio(3, D);
    s.hiredStarIds.push(Object.keys(s.stars)[0]);
    expect(buildAuditions(s, D, project(), 1e6).some((c) => c.source === "callback")).toBe(false);
    s.prestige = D.stars.pool.catalog.unlockPrestigeWithoutLadder;
    expect(buildAuditions(s, D, project(), 1e6).some((c) => c.source === "callback")).toBe(true);
  });
  it("with a capacity ladder it opens on the first studio upgrade, not on Prestige", () => {
    const L = withOverrides(D, { staffCapacity: JSON.parse(readFileSync("config/gate3.json", "utf8")).staffCapacity });
    const s = createStudio(3, L);
    s.prestige = 5000;
    expect(updateCatalogUnlock(s, L)).toBe(false);
    s.upgrades.push({ week: 1, from: 4, to: 6, cost: 1, prestigeAtUpgrade: 200 });
    expect(updateCatalogUnlock(s, L)).toBe(true);
  });
  it("flags the best catalog fits as 'perfect for this role'", () => {
    const s = createStudio(3, D);
    s.prestige = 1000;
    const ids = Object.keys(s.stars).slice(0, 6);
    s.hiredStarIds.push(...ids);
    s.stars[ids[2]].skills.Scary = 95;
    const cards = buildAuditions(s, D, project("Horror"), 1e6);
    expect(cards.find((c) => c.starId === ids[2])!.perfectFit).toBe(true);
    expect(cards.filter((c) => c.perfectFit).length).toBeLessThanOrEqual(D.stars.pool.catalog.perfectFitTop);
  });
  it("sequels always show the established lead as an extra card, even before unlock; not if retired", () => {
    const s = createStudio(3, D);
    const lead = Object.keys(s.stars)[10];
    s.ips.ip1 = { establishedStarId: lead } as never;
    const cards = buildAuditions(s, D, project("Horror", { ipRelation: "sequel" }), 1e6);
    expect(cards.filter((c) => c.source === "original_lead").map((c) => c.starId)).toEqual([lead]);
    expect(cards.length).toBe(D.stars.auditionCount + 1);
    s.stars[lead].retired = true;
    expect(buildAuditions(s, D, project("Horror", { ipRelation: "sequel" }), 1e6).some((c) => c.source === "original_lead")).toBe(false);
  });
  it("franchise careers really get (and use) the original-lead card", () => {
    const s = runCareer(1, "franchise-builder", D, { productions: 0, years: 8 }).state;
    expect(s.releases.some((r) => (r.trace.auditionCards as StarCard[]).some((c) => c.source === "original_lead"))).toBe(true);
  });
});

describe("PROD-217 hidden per-Star growth weights", () => {
  it("two Stars from the same template have different weights", () => {
    const st = Object.values(createStudio(3, D).stars).filter((s) => s.growthTemplate === "scary_funny");
    expect(st.length).toBeGreaterThan(1);
    expect(JSON.stringify(st[0].growthWeights)).not.toBe(JSON.stringify(st[1].growthWeights));
  });
  it("level-up points follow the weights and every Star gets the same points (budget permitting)", () => {
    const mk = (w: Record<string, number>): Star => ({ id: "x", name: "x", level: 3, levelXp: 0, skills: { Scary: 0, Funny: 0, Romantic: 0, Action: 0, Dramatic: 0 }, fame: 0, relationship: 1, credits: [], hiddenShape: "twoFocus", fallback: false, growthWeights: w });
    const a = mk({ Scary: 0.5, Funny: 0.3, Romantic: 0.1, Action: 0.05, Dramatic: 0.05 });
    const b = mk({ Scary: 0.05, Funny: 0.05, Romantic: 0.1, Action: 0.5, Dramatic: 0.3 });
    expect(levelUpGrowth(a, D, 18)).toBe(18);
    expect(levelUpGrowth(b, D, 18)).toBe(18);
    expect(a.skills.Scary).toBeGreaterThan(a.skills.Action);
    expect(b.skills.Action).toBeGreaterThan(b.skills.Scary);
    const c = mk({ Scary: 1, Funny: 0, Romantic: 0, Action: 0, Dramatic: 0 });
    c.skills.Scary = 95;
    expect(addByWeights(c, { ...c.growthWeights!, Funny: 0.01 }, 10)).toBe(10); // cap 100 overflows to the next family
    expect(c.skills.Scary).toBe(100);
  });
  it("whole careers keep every Star within its budget and 0..100", () => {
    const s = runCareer(2, "balanced", D, { productions: 0, years: 10 }).state;
    for (const st of Object.values(s.stars)) {
      expect(skillTotal(st)).toBeLessThanOrEqual(budgetFor(st.level, D)); // fallbacks included (audit M1)
      for (const v of Object.values(st.skills)) expect(v).toBeLessThanOrEqual(100);
    }
  });
});

describe("PROD-218 fallback", () => {
  it("a broke studio gets a free Star focused on the production's family", () => {
    const s = createStudio(6, D);
    const cards = buildAuditions(s, D, project("Comedy"), 0);
    const fb = cards.find((c) => c.fallbackInserted)!;
    expect(fb.price).toBe(0);
    expect(s.stars[fb.starId].skills.Funny).toBe(D.stars.pool.fallback.focusSkill);
    expect(s.stars[fb.starId].skills.Romantic).toBe(D.stars.pool.fallback.focusSkill); // both of Comedy's families (audit M1)
    expect(skillTotal(s.stars[fb.starId])).toBeLessThanOrEqual(budgetFor(0, D));
    expect(starFit(s.stars[fb.starId], "Comedy", D)).toBeCloseTo(D.stars.pool.fallback.focusSkill, 6);
    expect(Math.max(...Object.entries(s.stars[fb.starId].skills).filter(([f]) => f !== "Funny" && f !== "Romantic").map(([, v]) => v))).toBe(D.stars.pool.fallback.otherSkill);
  });
});

describe("PROD-051 option B: flat Star score bonus", () => {
  const m = { plot: 76, writing: 76, filming: 76, editing: 76 };
  it("fit 80 adds +0.40 Audience / +0.16 Critic after the meter curve (strong story); fit 0 adds nothing", () => {
    const off = computeScores(m, { audience: "C", critic: "C" }, 0, false, D, undefined, 0);
    const on = computeScores(m, { audience: "C", critic: "C" }, 0, false, D, undefined, 80);
    expect(on.audience - off.audience).toBeCloseTo(0.4, 5);
    expect(on.critic - off.critic).toBeCloseTo(0.16, 5);
    expect(off.starBonus).toBeUndefined();
  });
  const d = (x: typeof m) => computeScores(x, { audience: "C", critic: "C" }, 0, false, D, undefined, 80).audience - computeScores(x, { audience: "C", critic: "C" }, 0, false, D, undefined, 0).audience;
  it("is the same size at any skill level below the taper (no meter saturation)", () => {
    expect(d({ plot: 50, writing: 50, filming: 50, editing: 50 })).toBeCloseTo(d({ plot: 78, writing: 78, filming: 78, editing: 78 }), 5);
  });
  it("tapers above 8: half at 9, nothing at 10 (a good actor can't carry a film to perfection)", () => {
    expect(d({ plot: 90, writing: 90, filming: 90, editing: 90 })).toBeCloseTo(0.2, 5);
    expect(d({ plot: 100, writing: 100, filming: 100, editing: 100 })).toBeCloseTo(0, 5);
  });
  it("critics discount a great Star on a weak script; audiences don't", () => {
    const bonus = (x: typeof m) => computeScores(x, { audience: "C", critic: "C" }, 0, false, D, undefined, 80).starBonus!;
    const weak = bonus({ plot: 45, writing: 45, filming: 75, editing: 75 });
    const mid = bonus({ plot: 62.5, writing: 62.5, filming: 75, editing: 75 });
    const strong = bonus({ plot: 76, writing: 76, filming: 70, editing: 70 });
    expect(weak.critic).toBe(0);
    expect(mid.critic).toBeCloseTo(0.08, 5);
    expect(strong.critic).toBeCloseTo(0.16, 5);
    expect(weak.audience).toBeCloseTo(0.4, 5);
  });
  it("is off in the legacy overlay", () => {
    const L = legacyConfig();
    expect(computeScores(m, { audience: "C", critic: "C" }, 0, false, L, undefined, 80).audience).toBe(computeScores(m, { audience: "C", critic: "C" }, 0, false, L, undefined, 0).audience);
  });
  it("scores stay reproducible from the trace in full careers (invariant)", async () => {
    const { checkInvariants } = await import("../../src/batch/diagnostics");
    const r = runCareer(4, "quality-first", D, { productions: 0, years: 6 });
    expect(checkInvariants(r, D)).toEqual([]);
    expect(r.state.releases.some((x) => (x.trace.quality as { score: { starBonus?: unknown } }).score.starBonus)).toBe(true);
  });
});

describe("two-family Star fit (designer 2026-11-11)", () => {
  const mk = (skills: Record<string, number>): Star => ({ id: "x", name: "x", level: 5, levelXp: 0, skills: { Scary: 0, Funny: 0, Romantic: 0, Action: 0, Dramatic: 0, ...skills }, fame: 0, relationship: 1, credits: [], hiddenShape: "twoFocus", fallback: false });
  it("RomCom: Funny+Romantic beats Funny+Scary at the same Funny", async () => {
    const { starFit } = await import("../../src/core/stars");
    const romcomType = mk({ Funny: 80, Romantic: 70 }), scaryType = mk({ Funny: 80, Scary: 70 });
    expect(starFit(romcomType, "RomCom", D)).toBe(75);
    expect(starFit(scaryType, "RomCom", D)).toBe(40);
    expect(starFit(romcomType, "RomCom", legacyConfig())).toBe(80); // legacy: Funny only
  });
  it("each genre's main family dominates; weights sum to 1", () => {
    for (const [g, w] of Object.entries(D.world.genreFamilyWeights as unknown as Record<string, Record<string, number>>)) {
      if (g.startsWith("_")) continue;
      expect(Object.values(w).reduce((a, b) => a + b, 0), g).toBeCloseTo(1, 9);
      expect(Math.max(...Object.values(w)), g).toBe(w[D.world.genres[g as keyof typeof D.world.genres]]);
    }
  });
  it("a RomCom fallback Star is good at both halves", () => {
    const s = createStudio(6, D);
    const fb = buildAuditions(s, D, project("RomCom"), 0).find((c) => c.fallbackInserted)!;
    expect(s.stars[fb.starId].skills.Funny).toBe(D.stars.pool.fallback.focusSkill);
    expect(s.stars[fb.starId].skills.Romantic).toBe(D.stars.pool.fallback.focusSkill);
    expect(skillTotal(s.stars[fb.starId])).toBeLessThanOrEqual(budgetFor(0, D)); // was 108 > 100 before audit M1
  });
});
