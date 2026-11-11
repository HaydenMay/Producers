// Gate 4 candidate (economy.mode late_distribution + work-for-hire contracts): focused edge cases.
// FAST loop: `npm run economy:smoke` runs typecheck + this file + a 4-seed smoke batch.
import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";
import { legacyConfig, withOverrides, type Config } from "../../src/core/config";
import { advanceWeek, applyDecision, createStudio, getChoices, replay } from "../../src/core/simulation";
import { runCareer, runScripted } from "../../src/batch/runner";
import { checkInvariants } from "../../src/batch/diagnostics";
import { releaseAccounts } from "../../src/batch/econ";
import type { Choices, Decision, StudioState } from "../../src/core/types";

const G4 = withOverrides(legacyConfig(), JSON.parse(readFileSync("config/gate4.json", "utf8")));
const at = (cash: number, extra: Record<string, unknown> = {}) => withOverrides(G4, { start: { cash }, ...extra });
const cashKinds = (s: StudioState) => s.ledger.map((l) => l.kind);

/** Finish whatever contract is active, week by week; assert payroll never pushes cash down meanwhile. */
function workContract(s: StudioState, cfg: Config) {
  let c = s.cash;
  while (s.contract) {
    advanceWeek(s, cfg);
    if (s.contract) expect(s.cash).toBeGreaterThanOrEqual(c - 0.01); // client covers payroll + upkeep each week
    c = s.cash;
  }
}
const starter = (ch: Choices) => ch.options.find((o) => o.type === "contract" && o.contractId === "commercial_edit")!;

/** Simple scripted player: newest movie, cheapest Star, chosen distribution rule. */
const player = (dist: (ch: Choices) => Decision) => (st: StudioState, ch: Choices): Decision => {
  if (ch.phase === "planning") return ch.options.find((o) => o.type === "plan" && !o.format && o.ipRelation === "new" && !o.route) ?? starter(ch);
  if (ch.phase === "casting") return { type: "cast", starId: [...ch.auditionCards!].filter((c) => c.affordable).sort((a, b) => a.price - b.price)[0].starId };
  if (ch.phase === "distribution") return dist(ch);
  if (ch.phase === "marketing") return { type: "market", campaign: "none" };
  return { type: "wait" };
};
const selfDist = player(() => ({ type: "distribute", distributorId: null }));
const widest = player((ch) => (ch.bids!.length ? { type: "distribute", distributorId: [...ch.bids!].sort((a, b) => b.reach - a.reach)[0].distributorId } : { type: "distribute", distributorId: null }));

describe("Gate 4 work-for-hire: zero-cash recovery, zero Prestige", () => {
  it("a $0 two-staff studio can't start a movie but can take and finish the starter contract", () => {
    const cfg = at(0);
    const s = createStudio(1, cfg);
    const ch = getChoices(s, cfg);
    expect(ch.options.some((o) => o.type === "plan")).toBe(false);
    expect(ch.notes?.[0]).toContain("Take a work-for-hire contract");
    expect(s.staff.length).toBe(2);
    applyDecision(s, cfg, starter(ch));
    workContract(s, cfg);
    expect(s.cash).toBe(cfg.economy.contracts.list[0].fee);
    expect(s.prestige).toBe(0);
    expect(s.releases.length + Object.keys(s.ips).length + s.prestigeAwards.length).toBe(0);
    expect(s.staff.every((x) => x.totalXp > 0)).toBe(true); // staff learn on the job
  });
  it("a studio deep in the red climbs back to solvency with repeat work and can start an original again", () => {
    const cfg = at(0);
    const s = createStudio(2, cfg);
    s.ledger.push({ week: 0, kind: "payroll", amount: -50_000, note: "TEST: force debt" });
    s.cash = -50_000;
    let n = 0;
    while (!getChoices(s, cfg).options.some((o) => o.type === "plan")) {
      const ch = getChoices(s, cfg);
      applyDecision(s, cfg, starter(ch));
      workContract(s, cfg);
      n++;
      expect(n).toBeLessThan(40);
    }
    expect(s.cash).toBeGreaterThanOrEqual(cfg.production.movie.baseCost);
    expect(s.prestige).toBe(0);
    expect(n).toBe(Math.ceil((50_000 + 60_000) / 9000));
  });
  it("a full 8/8 studio in debt can dismiss, contract, recover and hire its Software Engineer (no deadlock)", () => {
    const cfg = at(5_000_000, { streaming: { unlock: { prestige: 0, minCatalog: 0 } } });
    const s = createStudio(3, cfg);
    s.prestige = 5000;
    s.ledger.push({ week: 0, kind: "start_cash", amount: 0, note: "test" });
    while (s.staff.length < 8) applyDecision(s, cfg, getChoices(s, cfg).options.find((o) => o.type === "hire") ?? { type: "upgrade_studio" });
    s.ledger.push({ week: 0, kind: "payroll", amount: -s.cash - 100_000, note: "TEST: force debt" });
    s.cash = -100_000;
    expect(getChoices(s, cfg).options.some((o) => o.type === "plan" || o.type === "hire_engineer")).toBe(false);
    applyDecision(s, cfg, { type: "fire", staffId: s.staff[7].id });
    for (let i = 0; i < 40 && !getChoices(s, cfg).options.some((o) => o.type === "hire_engineer"); i++) {
      const ch = getChoices(s, cfg);
      const best = [...ch.contracts!].filter((c) => c.available).sort((a, b) => b.fee / b.weeks - a.fee / a.weeks)[0];
      applyDecision(s, cfg, { type: "contract", contractId: best.id });
      workContract(s, cfg);
    }
    applyDecision(s, cfg, { type: "hire_engineer" });
    expect(s.staff.some((x) => x.role === "software_engineer")).toBe(true);
    expect(s.staff.length).toBe(8);
  });
  it("contracts never award Prestige, IP, fans, releases or catalog entries across a whole farming career", () => {
    const r = runCareer(4, "contract-farmer", G4, { productions: 0, years: 6 });
    expect(r.state.prestige).toBe(0);
    expect(r.state.releases.length).toBe(0);
    expect(Object.keys(r.state.ips).length).toBe(0);
    expect(r.state.contractHistory!.length).toBeGreaterThan(10);
    expect(checkInvariants(r, G4)).toEqual([]);
  });
});

describe("Gate 4 candidate production + 80% distribution meeting", () => {
  it("base cost affordable but no Star budget: the $0 Newcomer fallback still casts", () => {
    const cfg = at(60_000);
    const s = createStudio(5, cfg);
    applyDecision(s, cfg, getChoices(s, cfg).options.find((o) => o.type === "plan" && !o.format)!);
    expect(s.cash).toBe(0);
    while (getChoices(s, cfg).phase !== "casting") advanceWeek(s, cfg);
    const ch = getChoices(s, cfg);
    const free = ch.auditionCards!.filter((c) => c.affordable);
    expect(free.length).toBeGreaterThan(0);
    expect(free.every((c) => c.price === 0)).toBe(true);
    applyDecision(s, cfg, { type: "cast", starId: free[0].starId });
  });
  it("bids differ in ads / reach / share, give zero cash at signing, and ignore hidden combo grades", () => {
    const s = createStudio(6, G4);
    applyDecision(s, G4, getChoices(s, G4).options.find((o) => o.type === "plan" && !o.format)!);
    const toMeeting = (x: StudioState) => {
      for (;;) {
        const ch = getChoices(x, G4);
        if (ch.phase === "distribution") return ch;
        if (ch.phase === "casting") applyDecision(x, G4, { type: "cast", starId: ch.auditionCards!.find((c) => c.affordable)!.starId });
        else advanceWeek(x, G4);
      }
    };
    const twin = structuredClone(s);
    for (const k of Object.keys(twin.world.comboGrades)) twin.world.comboGrades[k] = { audience: "F", critic: "F" }; // hidden truth changed
    const ch = toMeeting(s);
    const ch2 = toMeeting(twin);
    expect(JSON.stringify(ch2.bids)).toBe(JSON.stringify(ch.bids)); // bids can't see hidden grades
    expect(ch.bids!.length).toBeGreaterThanOrEqual(2);
    expect(new Set(ch.bids!.map((b) => b.adSpend)).size).toBeGreaterThan(1);
    expect(new Set(ch.bids!.map((b) => b.share)).size).toBeGreaterThan(1);
    expect(ch.options.filter((o) => o.type === "distribute").length).toBe(ch.bids!.length + 1); // one bid OR self
    const cash = s.cash, n = s.ledger.length;
    applyDecision(s, G4, { type: "distribute", distributorId: ch.bids![0].distributorId });
    expect(s.cash).toBe(cash);
    expect(s.ledger.length).toBe(n); // nothing booked at signing (ad spend is the distributor's own money)
    expect(cashKinds(s)).not.toContain("advance_received");
  });
  it("no qualifying distributor → only self-distribution; replay is identical", () => {
    const cfg = withOverrides(G4, { economy: { lateDistribution: { appealMin: 0.3, appealMax: 0.3 } } });
    const r = runScripted(7, cfg, selfDist, { productions: 2, drain: true });
    for (const rel of r.state.releases) {
      const d = rel.trace.distribution as { bids: unknown[]; distributorId: string | null };
      expect(d.bids.length).toBe(0);
      expect(d.distributorId).toBeNull();
      expect(rel.royalty).toBe(0);
    }
    const b = replay(7, cfg, r.decisions);
    expect(JSON.stringify(b.releases)).toBe(JSON.stringify(r.state.releases));
    expect(b.cash).toBe(r.state.cash);
  });
  it("an underperforming movie can lose money all-in; a strong wide release earns far more", () => {
    const flops = [1, 2, 3, 4, 5, 6].flatMap((seed) => releaseAccounts(runScripted(seed, G4, selfDist, { productions: 3, drain: true }).state, G4));
    const wide = [1, 2, 3, 4, 5, 6].flatMap((seed) => releaseAccounts(runScripted(seed, G4, widest, { productions: 3, drain: true }).state, G4));
    const losers = flops.filter((x) => x.allInNet < 0);
    expect(losers.length).toBeGreaterThan(0);
    for (const l of losers) expect(l.allInNet).toBeCloseTo(l.studioGross - l.direct - l.payrollDuring, 2);
    const best = Math.max(...wide.map((x) => x.allInNet));
    const worst = Math.min(...losers.map((x) => x.allInNet));
    expect(best - worst).toBeGreaterThan(150_000);
  });
  it("cancelling sinks what was spent: no refund, nothing to repay", () => {
    const s = createStudio(8, G4);
    applyDecision(s, G4, getChoices(s, G4).options.find((o) => o.type === "plan" && !o.format)!);
    for (let i = 0; i < 3; i++) advanceWeek(s, G4);
    const cash = s.cash;
    applyDecision(s, G4, { type: "cancel" });
    expect(s.cash).toBe(cash);
    expect(cashKinds(s)).not.toContain("cancel_repay");
    expect(s.project).toBeNull();
  });
});

describe("Gate 4 candidate across formats (TV seasons, limited series, Originals, catalog, firing)", () => {
  const cfg = at(5_000_000, { tv: { unlock: { prestige: 0, cost: 0 } }, streaming: { unlock: { prestige: 0, minCatalog: 0 }, buildWeeks: 4 } });
  it("a returning TV season gets a fresh distribution meeting; limited series too; Originals skip it", () => {
    const s = createStudio(9, cfg);
    s.prestige = 5000;
    const meetFormats: string[] = [];
    const go = (pick: (ch: Choices) => Decision | undefined) => {
      const d = pick(getChoices(s, cfg));
      applyDecision(s, cfg, d!);
      for (;;) {
        const ch = getChoices(s, cfg);
        if (ch.phase === "planning") return;
        if (ch.phase === "casting") applyDecision(s, cfg, { type: "cast", starId: ch.auditionCards!.find((c) => c.affordable)!.starId });
        else if (ch.phase === "distribution") {
          meetFormats.push(s.project!.format);
          applyDecision(s, cfg, ch.bids!.length ? { type: "distribute", distributorId: ch.bids![0].distributorId } : { type: "distribute", distributorId: null });
        } else if (ch.phase === "marketing") applyDecision(s, cfg, { type: "market", campaign: "small" });
        else advanceWeek(s, cfg);
      }
    };
    applyDecision(s, cfg, { type: "unlock_tv" });
    go((ch) => ch.options.find((o) => o.type === "plan" && o.format === "tv" && o.ipRelation === "new"));
    for (let i = 0; i < 30; i++) advanceWeek(s, cfg);
    go((ch) => ch.options.find((o) => o.type === "plan" && o.format === "tv" && o.ipRelation === "season" && !o.twistTheme));
    go((ch) => ch.options.find((o) => o.type === "plan" && o.format === "limited_series"));
    expect(meetFormats).toEqual(["tv", "tv", "limited_series"]);
    const season2 = s.releases.find((r) => r.seasonNumber === 2)!;
    expect(season2.financing).toBe("late_distribution");
    expect((season2.trace.distribution as { preview: { lastSeason: number } }).preview.lastSeason).not.toBe(0); // knew S1's published score
    // streaming: engineer → build → live; an Original has no distribution meeting and earns no box office
    applyDecision(s, cfg, { type: "hire_engineer" });
    applyDecision(s, cfg, { type: "build_streaming" });
    for (let i = 0; i < 6; i++) advanceWeek(s, cfg);
    expect(s.platform!.status).toBe("live");
    for (let i = 0; i < 40; i++) advanceWeek(s, cfg);
    expect(s.platform!.catalog.length).toBeGreaterThan(0); // finished traditional releases joined the catalog
    go((ch) => ch.options.find((o) => o.type === "plan" && !o.format && o.route === "original"));
    expect(meetFormats.length).toBe(3);
    const orig = s.releases.at(-1)!;
    expect(orig.route).toBe("original");
    expect(orig.financing).toBeUndefined();
    expect(orig.campaignCost).toBe(G4.marketing.campaigns.small.cost); // Originals keep the studio-paid campaign (OPEN)
    for (let i = 0; i < 30; i++) advanceWeek(s, cfg);
    expect(orig.studioTake + orig.distributorTake).toBe(0);
    const ids = s.platform!.catalog.map((c) => c.releaseId);
    expect(new Set(ids).size).toBe(ids.length);
  });
  it("policy careers on the candidate keep every invariant (incl. firing + engineer) and replay exactly", () => {
    for (const st of ["mixed", "streaming-pivot", "cheap-duds", "tv-first"]) {
      const r = runCareer(10, st, G4, { productions: 0, years: 10 });
      expect(checkInvariants(r, G4)).toEqual([]);
      const b = replay(10, G4, r.decisions);
      expect(b.cash).toBe(r.state.cash);
      expect(JSON.stringify(b.releases)).toBe(JSON.stringify(r.state.releases));
    }
  });
});
