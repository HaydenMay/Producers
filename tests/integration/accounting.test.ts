// Audit 2026-11-12, H1 + H2: a production takes exactly its designed length, and each release is charged the
// wages + upkeep accrued during its own production weeks (not the monthly payroll lumps that happen to fall
// inside a nominal window).
import { describe, expect, it } from "vitest";
import { baselineConfig, setPath } from "../../src/core/config";
import { runCareer } from "../../src/batch/runner";
import { releaseAccounts } from "../../src/batch/econ";
import { formatOf, formatSpec } from "../../src/core/formats";

describe("production length (H1)", () => {
  it("every format's real production length equals its configured durationWeeks in the default", () => {
    const cfg = baselineConfig();
    const seen = new Set<string>();
    for (const st of ["mixed", "limited-focus", "tv-first"]) {
      for (let seed = 1; seed <= 3; seed++) {
        const r = runCareer(seed, st, cfg, { productions: 0, years: 6 });
        for (const rel of r.state.releases) {
          if (rel.route === "original") continue;
          const f = formatOf(rel);
          const want = formatSpec(cfg, f, rel.episodes).durationWeeks;
          expect(rel.startWeek).toBeDefined();
          expect(rel.releaseWeek - rel.startWeek!, `${f} ${rel.episodes ?? ""} ${rel.title}`).toBe(want);
          seen.add(f === "tv" ? `tv${rel.episodes}` : f);
        }
      }
    }
    expect(seen.has("movie")).toBe(true);
    expect(seen.has("limited_series")).toBe(true);
    expect([...seen].some((k) => k.startsWith("tv"))).toBe(true);
  });
});

describe("per-release labor (H2)", () => {
  it("with weekly payroll, a release's accrued labor equals the payroll + upkeep paid in its production weeks, to the dollar", () => {
    const cfg = setPath(baselineConfig(), "staffGrowth.payrollPeriodWeeks", 1);
    const r = runCareer(2, "mixed", cfg, { productions: 0, years: 6 });
    const paid = new Map<number, number>();
    for (const l of r.state.ledger) if (l.kind === "payroll" || l.kind === "upkeep") paid.set(l.week, (paid.get(l.week) ?? 0) - l.amount);
    let checked = 0;
    for (const rel of r.state.releases) {
      if (rel.route === "original") continue;
      let sum = 0;
      for (let w = rel.startWeek! + 1; w <= rel.releaseWeek; w++) sum += paid.get(w) ?? 0;
      expect(rel.laborDuring).toBeCloseTo(sum, 2);
      checked++;
    }
    expect(checked).toBeGreaterThan(5);
  });

  it("with monthly payroll, releaseAccounts charges the accrued labor, never more than was actually paid or owed", () => {
    const cfg = baselineConfig();
    expect(cfg.staffGrowth.payrollPeriodWeeks).toBe(4);
    const r = runCareer(2, "mixed", cfg, { productions: 0, years: 6 });
    const acc = releaseAccounts(r.state, cfg);
    const totalPaid =
      r.state.ledger.filter((l) => l.kind === "payroll" || l.kind === "upkeep").reduce((a, l) => a - l.amount, 0) +
      (r.state.payrollDue ? r.state.payrollDue.wages + r.state.payrollDue.upkeep : 0);
    let charged = 0;
    for (const a of acc) {
      const rel = r.state.releases.find((x) => x.id === a.id)!;
      expect(a.payrollDuring).toBe(rel.laborDuring);
      expect(a.startWeek).toBe(rel.startWeek);
      charged += a.payrollDuring;
    }
    expect(charged).toBeGreaterThan(0);
    expect(charged).toBeLessThanOrEqual(totalPaid + 0.01);
  });
});

// Audit 2026-11-12b H2: the renewal screen never shows a just-released season as having lost its whole cost
import { showMoney } from "../../src/core/formats";
describe("renewal screen show money", () => {
  it("nothing aired yet = too early to tell (no projection) with the previous finished season's result", () => {
    const cfg = baselineConfig();
    let checked = 0;
    for (let seed = 1; seed <= 4 && checked < 3; seed++) {
      const s = runCareer(seed, "tv-first", cfg, { productions: 0, years: 12 }).state;
      const shows = new Set(s.releases.filter((r) => r.format === "tv" && r.route !== "original").map((r) => r.ipId));
      for (const ip of shows) {
        const seasons = s.releases.filter((r) => r.ipId === ip);
        if (seasons.length < 2) continue;
        const latest = seasons.at(-1)!;
        // rewind the latest season to its release week: nothing aired
        const view = structuredClone(s);
        const v = view.releases.find((r) => r.id === latest.id)!;
        Object.assign(v, { active: true, weekly: [], weekIndex: 0, studioTake: 0, surplusKept: 0 });
        const m = showMoney(view, cfg, ip)!;
        expect(m.tooEarly).toBe(true);
        expect(m.projectedNet).toBeNull();
        expect(m.previous).not.toBeNull();
        expect(m.previous!.season).toBe(seasons.length - 1);
        checked++;
      }
    }
    expect(checked).toBeGreaterThan(0);
  });
  it("a finished season shows its exact all-in result", () => {
    const cfg = baselineConfig();
    const s = runCareer(2, "tv-first", cfg, { productions: 0, years: 10 }).state;
    const rel = s.releases.filter((r) => r.format === "tv" && r.route !== "original" && !r.active).at(-1)!;
    if (s.releases.filter((r) => r.ipId === rel.ipId).at(-1)!.id !== rel.id) return; // a later season exists
    const m = showMoney(s, cfg, rel.ipId)!;
    expect(m.airing).toBe(false);
    expect(m.projectedNet).toBeCloseTo(rel.studioTake + rel.surplusKept - rel.cashOverrun - (rel.laborDuring ?? 0), 2);
  });
});
