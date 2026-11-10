// Gate 3 follow-up stress matrix. Usage:
//   npx tsx scripts/fu-matrix.ts --variants A_control,B_mildViewer --seeds 200 --out reports/gate3_followup/matrix
// Each career runs 25 years once; 10/15-year horizons are exact prefixes (agents never read the horizon;
// verified in the findings). Writes one JSON summary per variant plus trace candidates.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { baselineConfig, withOverrides, type Config } from "../src/core/config";
import { runCareer } from "../src/batch/runner";
import { checkInvariants } from "../src/batch/diagnostics";
import { CASH_KINDS } from "../src/core/events";
import { comebacks, seasonRows, showRows, BANDS, type SeasonRow, type ShowRow } from "../src/batch/seasonfeel";
import type { StudioState } from "../src/core/types";

const arg = (k: string, d: string) => {
  const i = process.argv.indexOf(`--${k}`);
  return i > 0 ? process.argv[i + 1] : d;
};
const spec = JSON.parse(readFileSync("config/experiments/FU_matrix.json", "utf8"));
const G3 = withOverrides(baselineConfig(), JSON.parse(readFileSync("config/gate3.json", "utf8")));
const seeds = Number(arg("seeds", "200"));
const out = arg("out", "reports/gate3_followup/matrix");
mkdirSync(out, { recursive: true });
const all = [...spec.variants, ...spec.orderVariants];
const want: string[] = arg("variants", all.map((v: { name: string }) => v.name).join(",")).split(",");

function cfgFor(name: string): Config {
  const v = all.find((x: { name: string }) => x.name === name);
  if (!v) throw new Error(`unknown variant ${name}`);
  const base = v.base ? cfgFor(v.base) : G3;
  return withOverrides(base, { ...v.overrides, name: `fu_${name}` });
}

const q = (xs: number[], p: number) => {
  if (!xs.length) return null;
  const s = [...xs].sort((a, b) => a - b);
  const i = (s.length - 1) * p;
  const lo = Math.floor(i);
  return s[lo] + (s[Math.min(s.length - 1, lo + 1)] - s[lo]) * (i - lo);
};
const mean = (xs: number[]) => (xs.length ? xs.reduce((a, b) => a + b, 0) / xs.length : null);
const r3 = (x: number | null) => (x === null ? null : Math.round(x * 1000) / 1000);

interface CareerX {
  seed: number;
  endCash: number;
  minCash: number;
  debtWeeks: number;
  prestige: number;
  fires: number;
  fireWhileDebt: number;
  engineerWeek: number | null;
  launchWeek: number | null;
  productions: number;
  breakthroughs: number;
  btHof: number;
  btSizes: number[];
  hof: number;
  allAvg: number[];
}

function careerX(seed: number, s: StudioState, H: number): CareerX {
  let cash = 0, minCash = Infinity, debtWeeks = 0;
  const byWeek = new Map<number, number>();
  for (const l of s.ledger) if (CASH_KINDS.has(l.kind) && l.week < H) byWeek.set(l.week, (byWeek.get(l.week) ?? 0) + l.amount);
  for (let w = 0; w < Math.min(H, s.week + 1); w++) {
    cash += byWeek.get(w) ?? 0;
    minCash = Math.min(minCash, cash);
    if (cash < 0) debtWeeks++;
  }
  const ev = s.events.filter((e) => e.week < H);
  const fires = ev.filter((e) => e.type === "fire");
  const rels = s.releases.filter((r) => r.releaseWeek < H);
  const bts = rels.map((r) => r.trace.breakthrough as { avgWithout: number } | undefined);
  // cash at each fire, from the same ledger walk
  let c2 = 0;
  const cashAt = new Map<number, number>();
  for (let w = 0; w < H; w++) {
    c2 += byWeek.get(w) ?? 0;
    cashAt.set(w, c2);
  }
  const hireEng = ev.find((e) => e.type === "hire" && String(e.message).includes("Software Engineer"));
  const launch = ev.find((e) => e.type === "streaming" && String(e.message).startsWith("Streaming service launched"));
  return {
    seed,
    endCash: cash,
    minCash,
    debtWeeks,
    prestige: ev.filter((e) => e.type === "prestige").reduce((a, e) => a + ((e.data as { amount?: number })?.amount ?? 0), 0),
    fires: fires.length,
    fireWhileDebt: fires.filter((e) => (cashAt.get(e.week) ?? 0) < 0).length,
    engineerWeek: hireEng ? hireEng.week : null,
    launchWeek: launch ? launch.week : null,
    productions: rels.length,
    breakthroughs: bts.filter(Boolean).length,
    btHof: rels.filter((r, i) => bts[i] && r.hallOfFame && bts[i]!.avgWithout < 9).length,
    btSizes: rels.map((r, i) => (bts[i] ? r.avgScore - bts[i]!.avgWithout : null)).filter((x): x is number => x !== null),
    hof: rels.filter((r) => r.hallOfFame).length,
    allAvg: rels.map((r) => r.avgScore),
  };
}

function bandStats(rows: SeasonRow[]) {
  return {
    seasons: rows.length,
    premiereMedian: r3(q(rows.map((r) => r.premiere), 0.5)),
    uniqueMedian: r3(q(rows.map((r) => r.unique), 0.5)),
    closenessMean: r3(mean(rows.map((r) => r.closeness))),
    trajectoryMedian: r3(q(rows.map((r) => r.trajectory), 0.5)),
    returnRateMedian: r3(q(rows.filter((r) => r.returnRate !== null).map((r) => r.returnRate!), 0.5)),
    audienceMean: r3(mean(rows.map((r) => r.audience))),
    criticMean: r3(mean(rows.map((r) => r.critic))),
    avgMean: r3(mean(rows.map((r) => r.avg))),
    hof: rows.filter((r) => r.hof).length,
    hofRate: r3(rows.length ? rows.filter((r) => r.hof).length / rows.length : null),
    avg9plus: rows.filter((r) => r.avg >= 9).length,
    fansStartMedian: r3(q(rows.filter((r) => r.fansStart !== null).map((r) => r.fansStart!), 0.5)),
    fansEndMedian: r3(q(rows.filter((r) => r.fansEnd !== null).map((r) => r.fansEnd!), 0.5)),
    anticipationMean: r3(mean(rows.map((r) => r.anticipation))),
    viewerFatigueMultMean: r3(mean(rows.map((r) => r.viewerFatigueMult))),
    reviewFatigueMean: r3(mean(rows.map((r) => r.reviewFatigue))),
    netPerWeekMedian: r3(q(rows.filter((r) => !r.original).map((r) => r.netPerWeek), 0.5)),
    seasonNetMedian: r3(q(rows.filter((r) => !r.original).map((r) => r.net), 0.5)),
    lossShare: r3(rows.filter((r) => !r.original).length ? rows.filter((r) => !r.original && r.net < 0).length / rows.filter((r) => !r.original).length : null),
    payrollMedian: r3(q(rows.map((r) => r.payrollWeek), 0.5)),
    trustMean: r3(mean(rows.filter((r) => r.trustAfter !== null).map((r) => r.trustAfter!))),
    renewableShare: r3(rows.length ? rows.filter((r) => r.renewable).length / rows.length : null),
    breakthroughs: rows.filter((r) => r.breakthrough > 0).length,
  };
}

function viability(rows: SeasonRow[], shows: ShowRow[]) {
  const byShow = new Map<string, SeasonRow[]>();
  for (const r of rows) byShow.set(`${r.seed}|${r.ipId}`, [...(byShow.get(`${r.seed}|${r.ipId}`) ?? []), r]);
  const res: Record<string, { reached: number; viable: number }> = {};
  for (const k of [5, 10, 15, 20]) {
    let reached = 0, viable = 0;
    for (const ss of byShow.values()) {
      const s = ss[k - 1];
      if (!s) continue;
      reached++;
      if (s.renewable && (s.original || s.net >= 0)) viable++;
    }
    res[`S${k}`] = { reached: r3(reached / Math.max(1, byShow.size))!, viable: r3(viable / Math.max(1, byShow.size))! };
  }
  const ended = shows.filter((s) => s.end !== "running");
  return {
    shows: byShow.size,
    atSeason: res,
    endings: { running: shows.filter((s) => s.end === "running").length, score: shows.filter((s) => s.end === "score").length, voluntary: shows.filter((s) => s.end === "voluntary").length },
    voluntaryShareOfEnded: r3(ended.length ? ended.filter((s) => s.end === "voluntary").length / ended.length : null),
    seasonsPerShowMedian: q(shows.map((s) => s.seasons), 0.5),
    seasonsPerShowMax: shows.length ? Math.max(...shows.map((s) => s.seasons)) : 0,
  };
}

function showClass(rows: SeasonRow[]) {
  // successful = seasons 1-3 average >= 7.5; mediocre = < 6.5 (by the show's own opening seasons)
  const byShow = new Map<string, SeasonRow[]>();
  for (const r of rows) byShow.set(`${r.seed}|${r.ipId}`, [...(byShow.get(`${r.seed}|${r.ipId}`) ?? []), r]);
  const cls = new Map<string, string>();
  for (const [k, ss] of byShow) {
    const m = mean(ss.slice(0, 3).map((r) => r.avg))!;
    cls.set(k, m >= 7.5 ? "successful" : m < 6.5 ? "mediocre" : "middling");
  }
  return (r: SeasonRow) => cls.get(`${r.seed}|${r.ipId}`)!;
}

const t0 = Date.now();
for (const vname of want) {
  const cfg = cfgFor(vname);
  const strategies: string[] = vname.includes("@") ? spec.orderStrategies : spec.strategies;
  const tv = Date.now();
  const result: Record<string, unknown> = { variant: vname, note: all.find((x: { name: string }) => x.name === vname).note ?? null, seeds: `1-${seeds}`, strategies: {} };
  const traces: Record<string, unknown[]> = { fadingVoluntary: [], longStrong: [], comeback: [], failedComeback: [], firingRecovery: [] };
  let violations = 0;
  for (const st of strategies) {
    const perH: Record<string, { rows: SeasonRow[]; shows: ShowRow[]; cx: CareerX[] }> = {};
    for (const H of spec.horizons) perH[H] = { rows: [], shows: [], cx: [] };
    for (let seed = 1; seed <= seeds; seed++) {
      const r = runCareer(seed, st, cfg, { productions: 0, years: 25 });
      if (seed <= 20) violations += checkInvariants(r, cfg).length;
      for (const Y of spec.horizons) {
        const H = Y * cfg.time.weeksPerYear;
        const rows = seasonRows(seed, st, r.state, cfg, H);
        perH[Y].rows.push(...rows);
        perH[Y].shows.push(...showRows(seed, st, rows, r.state, H));
        perH[Y].cx.push(careerX(seed, r.state, H));
      }
      // trace candidates (25-year horizon only)
      const H = 25 * cfg.time.weeksPerYear;
      const rows = seasonRows(seed, st, r.state, cfg, H);
      for (const sh of showRows(seed, st, rows, r.state, H)) {
        const ss = rows.filter((x) => x.ipId === sh.ipId);
        if (sh.end === "voluntary" && sh.bestAvg >= 7.5 && ss.at(-1)!.avg <= sh.bestAvg - 1 && sh.seasons >= 5) traces.fadingVoluntary.push({ seed, strategy: st, ipId: sh.ipId, seasons: sh.seasons, best: r3(sh.bestAvg), last: r3(ss.at(-1)!.avg) });
        if (sh.seasons > 15 && mean(ss.slice(-3).map((x) => x.avg))! >= 7) traces.longStrong.push({ seed, strategy: st, ipId: sh.ipId, seasons: sh.seasons, last3: r3(mean(ss.slice(-3).map((x) => x.avg))) });
      }
      const cb = comebacks(rows);
      for (const c of cb.comebacks) traces.comeback.push({ seed, strategy: st, ipId: c.ipId, season: c.season, avg: r3(c.avg), breakthrough: r3(c.breakthrough), twist: c.twist, starChanged: c.starChanged });
      for (const c of cb.failed) traces.failedComeback.push({ seed, strategy: st, ipId: c.ipId, season: c.season, avg: r3(c.avg), breakthrough: r3(c.breakthrough), twist: c.twist, starChanged: c.starChanged });
      const cx = careerX(seed, r.state, H);
      if (cx.fireWhileDebt > 0 && r.state.events.some((e) => e.type === "fire" && String(e.message).includes("(7/8)"))) traces.firingRecovery.push({ seed, strategy: st, fires: cx.fires, minCash: Math.round(cx.minCash), endCash: Math.round(cx.endCash), engineerWeek: cx.engineerWeek, launchWeek: cx.launchWeek });
    }
    const S: Record<string, unknown> = {};
    for (const Y of spec.horizons) {
      const { rows, shows, cx } = perH[Y];
      const cls = showClass(rows);
      const cb = comebacks(rows);
      const bands: Record<string, unknown> = {};
      for (const b of BANDS) bands[b] = bandStats(rows.filter((r) => r.band === b));
      const byClass: Record<string, unknown> = {};
      for (const c of ["successful", "middling", "mediocre"]) {
        byClass[c] = {};
        for (const b of BANDS) (byClass[c] as Record<string, unknown>)[b] = bandStats(rows.filter((r) => r.band === b && cls(r) === c));
      }
      const years: Record<string, unknown> = {};
      for (let y = 1; y <= Y; y++) {
        const yr = rows.filter((r) => r.year === y);
        years[y] = { seasons: yr.length, avgMean: r3(mean(yr.map((r) => r.avg))), hof: yr.filter((r) => r.hof).length, netPerWeekMedian: r3(q(yr.filter((r) => !r.original).map((r) => r.netPerWeek), 0.5)), viewerFatigueMultMean: r3(mean(yr.map((r) => r.viewerFatigueMult))) };
      }
      const sorted = [...rows].sort((a, b) => b.avg - a.avg);
      const longRunners = new Set<string>();
      const irr: SeasonRow[] = [];
      const byShow = new Map<string, SeasonRow[]>();
      for (const r of rows) byShow.set(`${r.seed}|${r.ipId}`, [...(byShow.get(`${r.seed}|${r.ipId}`) ?? []), r]);
      for (const [k, ss] of byShow) {
        if (ss.length >= 12 && mean(ss.slice(-3).map((x) => x.avg))! >= 7) longRunners.add(k);
        for (let j = 2; j < ss.length; j++) if (!ss[j - 2].original && !ss[j - 1].original && ss[j - 2].net < 0 && ss[j - 1].net < 0) irr.push(ss[j]);
      }
      S[`y${Y}`] = {
        careers: cx.length,
        bands,
        byClass,
        years: Y === 25 ? years : undefined,
        viability: viability(rows, shows),
        best: sorted.slice(0, 3).map((r) => ({ seed: r.seed, show: r.show, season: r.season, avg: r3(r.avg) })),
        worst: sorted.slice(-3).map((r) => ({ seed: r.seed, show: r.show, season: r.season, avg: r3(r.avg) })),
        comebacks: { count: cb.comebacks.length, failed: cb.failed.length, slumps: cb.slumps, withBreakthrough: cb.comebacks.filter((c) => c.breakthrough > 0).length },
        longRunnerShows: longRunners.size,
        irrationalRenewals: irr.length,
        careersWithIrrational: new Set(irr.map((r) => r.seed)).size,
        money: {
          endCashMedian: r3(q(cx.map((c) => c.endCash), 0.5)),
          endCashP10: r3(q(cx.map((c) => c.endCash), 0.1)),
          minCashP10: r3(q(cx.map((c) => c.minCash), 0.1)),
          debt3yCareers: cx.filter((c) => c.debtWeeks >= 156).length,
          everNegative: cx.filter((c) => c.minCash < 0).length,
          endNegative: cx.filter((c) => c.endCash < 0).length,
          prestigeMedian: q(cx.map((c) => c.prestige), 0.5),
        },
        firing: { firesPerCareer: r3(mean(cx.map((c) => c.fires))), careersWithFire: cx.filter((c) => c.fires > 0).length, firesWhileInDebt: cx.reduce((a, c) => a + c.fireWhileDebt, 0), engineerHired: cx.filter((c) => c.engineerWeek !== null).length, launchYearMedian: r3(q(cx.filter((c) => c.launchWeek !== null).map((c) => c.launchWeek! / 52), 0.5)), launched: cx.filter((c) => c.launchWeek !== null).length },
        breakthroughs: { events: cx.reduce((a, c) => a + c.breakthroughs, 0), productions: cx.reduce((a, c) => a + c.productions, 0), perCareerMean: r3(mean(cx.map((c) => c.breakthroughs))), sizeMean: r3(mean(cx.flatMap((c) => c.btSizes))), sizeMax: r3(Math.max(0, ...cx.flatMap((c) => c.btSizes))), hofFromBreakthrough: cx.reduce((a, c) => a + c.btHof, 0), hofTotal: cx.reduce((a, c) => a + c.hof, 0) },
        allProductions: { avgMean: r3(mean(cx.flatMap((c) => c.allAvg))), hof: cx.reduce((a, c) => a + c.hof, 0) },
      };
    }
    (result.strategies as Record<string, unknown>)[st] = S;
    process.stderr.write(`${vname} ${st} done ${((Date.now() - tv) / 1000).toFixed(0)}s\n`);
  }
  result.invariantViolationsFirst20Seeds = violations;
  result.runtimeSec = Math.round((Date.now() - tv) / 1000);
  writeFileSync(`${out}/${vname.replace("@", "_at_")}.json`, JSON.stringify(result, null, 1));
  writeFileSync(`${out}/${vname.replace("@", "_at_")}.traces.json`, JSON.stringify(Object.fromEntries(Object.entries(traces).map(([k, v]) => [k, { count: v.length, first: v.slice(0, 40) }])), null, 1));
}
process.stderr.write(`all done ${((Date.now() - t0) / 1000).toFixed(0)}s\n`);
