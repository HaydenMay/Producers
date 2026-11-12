// Gate 2.6: top-end achievement statistics ("how often do truly great movies happen") and Prestige
// progression. Pure functions over finished careers; permanent report fields for every batch/experiment.
import { thresholdScore } from "../core/events";
import type { Config } from "../core/config";
import type { Release, StudioState } from "../core/types";
import { quantile } from "./metrics";
import { fmtKey } from "./gate3metrics";

/** One released film, compact. `index` is the 1-based release order within its career. */
export interface FilmRef {
  seed: number;
  strategy: string;
  index: number;
  title: string;
  ipId: string;
  ipRelation: string;
  week: number;
  year: number;
  audience: number;
  critic: number;
  avg: number;
  hallOfFame: boolean;
  meters: Release["meters"];
  criticGeneration: number;
  audienceEra: number;
  /** Gate 3: movie | limited_series | tv (one season) | x/original */
  format: string;
  seasonNumber?: number;
}

export const WINDOWS: { name: string; lo: number; hi: number }[] = [
  { name: "1-5", lo: 1, hi: 5 },
  { name: "6-20", lo: 6, hi: 20 },
  { name: "21-50", lo: 21, hi: 50 },
  { name: "51-100", lo: 51, hi: 100 },
  { name: "all", lo: 1, hi: Infinity },
];
export const YEAR_BANDS: { name: string; lo: number; hi: number }[] = [
  { name: "y0-5", lo: 0, hi: 5 },
  { name: "y5-10", lo: 5, hi: 10 },
  { name: "y10-15", lo: 10, hi: 15 },
  { name: "y15-20", lo: 15, hi: 20 },
  { name: "y20-30", lo: 20, hi: 30 },
  { name: "y30+", lo: 30, hi: Infinity },
];

export function filmRefs(seed: number, strategy: string, releases: Release[], cfg: Config): FilmRef[] {
  return releases.map((r, i) => ({
    seed,
    strategy,
    index: i + 1,
    title: r.title,
    ipId: r.ipId,
    ipRelation: r.ipRelation,
    week: r.releaseWeek,
    year: +(r.releaseWeek / cfg.time.weeksPerYear).toFixed(2),
    audience: r.audience,
    critic: r.critic,
    avg: r.avgScore,
    hallOfFame: r.hallOfFame,
    meters: r.meters,
    criticGeneration: r.criticGeneration ?? 0,
    audienceEra: r.audienceEra ?? 0,
    format: fmtKey(r),
    ...(r.seasonNumber ? { seasonNumber: r.seasonNumber } : {}),
  }));
}

/** Deterministic ranking: higher key, then higher critic, higher audience, lower seed, lower index, strategy name. */
export function better(a: FilmRef, b: FilmRef, key: "avg" | "audience" | "critic"): boolean {
  const cmp: [number, number][] = [
    [a[key], b[key]],
    [a.critic, b.critic],
    [a.audience, b.audience],
    [-a.seed, -b.seed],
    [-a.index, -b.index],
  ];
  for (const [x, y] of cmp) if (x !== y) return x > y;
  return a.strategy < b.strategy;
}
export function bestOf(films: FilmRef[], key: "avg" | "audience" | "critic" = "avg"): FilmRef | null {
  let best: FilmRef | null = null;
  for (const f of films) if (!best || better(f, best, key)) best = f;
  return best;
}

export interface Pct {
  n: number;
  of: number;
  pct: number;
}
const pct = (n: number, of: number): Pct => ({ n, of, pct: of ? +((100 * n) / of).toFixed(2) : 0 });
const q4 = (xs: number[]) => (xs.length ? { p10: +quantile(xs, 0.1).toFixed(2), p50: +quantile(xs, 0.5).toFixed(2), p90: +quantile(xs, 0.9).toFixed(2), p99: +quantile(xs, 0.99).toFixed(2) } : null);

export interface GreatRow {
  strategy: string;
  slice: string; // window name, year band, or critic generation
  sliceKind: "window" | "year" | "generation" | "format";
  films: number;
  careers: number; // careers with at least one film in this slice
  avgAudience: number;
  avgCritic: number;
  meanYear: number;
  hof: Pct;
  avg9inc: Pct; // average >= 9.0
  avg9strict: Pct; // average > 9.0
  aud9: Pct; // Audience >= 9.0
  crit9: Pct; // Critic >= 9.0
  avg8: Pct; // average >= 8.0 (continuity with Gate 2.5)
  perfect10: Pct; // average exactly 10.00
  hiBands: { "8.5": number; "9.0": number; "9.5": number; "10": number };
  /** HoF titles whose true (unrounded) mean is below 9.0: promoted by 2-decimal rounding (current boundary rule, reported separately) */
  hofRounding: number;
  hofPerCareer: { p10: number; p50: number; p90: number; p99: number } | null;
  zeroHofCareers: Pct;
  hofIpsPerCareer: { p10: number; p50: number; p90: number; p99: number } | null; // distinct IPs with >=1 HoF title
  hofIpsTotal: number; // sum over careers of distinct HoF IPs (IPs are per-career)
  bestPerCareer: { p10: number; p50: number; p90: number; p99: number } | null;
  best: FilmRef | null;
  bestAudience: FilmRef | null;
  bestCritic: FilmRef | null;
}

function rowFor(strategy: string, slice: string, sliceKind: GreatRow["sliceKind"], byCareer: FilmRef[][], disp: (avg: number) => number): GreatRow {
  const films = byCareer.flat();
  const nonEmpty = byCareer.filter((c) => c.length);
  const n = films.length;
  const mean = (xs: number[]) => (xs.length ? +(xs.reduce((a, b) => a + b, 0) / xs.length).toFixed(3) : NaN);
  const hofCounts = nonEmpty.map((c) => c.filter((f) => f.hallOfFame).length);
  const hofIps = nonEmpty.map((c) => new Set(c.filter((f) => f.hallOfFame).map((f) => f.ipId)).size);
  return {
    strategy,
    slice,
    sliceKind,
    films: n,
    careers: nonEmpty.length,
    avgAudience: mean(films.map((f) => f.audience)),
    avgCritic: mean(films.map((f) => f.critic)),
    meanYear: mean(films.map((f) => f.year)),
    hof: pct(films.filter((f) => f.hallOfFame).length, n),
    avg9inc: pct(films.filter((f) => disp(f.avg) >= 9).length, n), // displayed score (PROD-078), like the Hall of Fame
    avg9strict: pct(films.filter((f) => f.avg > 9).length, n),
    aud9: pct(films.filter((f) => f.audience >= 9).length, n),
    crit9: pct(films.filter((f) => f.critic >= 9).length, n),
    avg8: pct(films.filter((f) => f.avg >= 8).length, n),
    perfect10: pct(films.filter((f) => f.avg >= 10).length, n),
    hiBands: { "8.5": films.filter((f) => f.avg >= 8.5).length, "9.0": films.filter((f) => f.avg >= 9).length, "9.5": films.filter((f) => f.avg >= 9.5).length, "10": films.filter((f) => f.avg >= 10).length },
    hofRounding: films.filter((f) => f.hallOfFame && (f.audience + f.critic) / 2 < 9).length,
    hofPerCareer: q4(hofCounts),
    zeroHofCareers: pct(hofCounts.filter((x) => x === 0).length, nonEmpty.length),
    hofIpsPerCareer: q4(hofIps),
    hofIpsTotal: hofIps.reduce((a, b) => a + b, 0),
    bestPerCareer: q4(nonEmpty.map((c) => bestOf(c)!.avg)),
    best: bestOf(films, "avg"),
    bestAudience: bestOf(films, "audience"),
    bestCritic: bestOf(films, "critic"),
  };
}

/** Greatness table for one batch: per strategy × (release windows, year bands, critic generations). Also "ALL" strategies. */
export function greatness(careers: { seed: number; strategy: string; films: FilmRef[] }[], cfg: Config, maxProductions: number): GreatRow[] {
  const rows: GreatRow[] = [];
  const strategies = [...new Set(careers.map((c) => c.strategy)), "ALL"];
  for (const s of strategies) {
    const cs = careers.filter((c) => s === "ALL" || c.strategy === s);
    for (const w of WINDOWS) {
      if (w.lo > maxProductions) continue;
      rows.push(rowFor(s, w.name, "window", cs.map((c) => c.films.filter((f) => f.index >= w.lo && f.index <= w.hi)), (x: number) => thresholdScore(x, cfg)));
    }
    for (const y of YEAR_BANDS) {
      const by = cs.map((c) => c.films.filter((f) => f.year >= y.lo && f.year < y.hi));
      if (by.some((x) => x.length)) rows.push(rowFor(s, y.name, "year", by, (x: number) => thresholdScore(x, cfg)));
    }
    const formats = [...new Set(cs.flatMap((c) => c.films.map((f) => f.format)))].sort();
    if (formats.length > 1 || (formats[0] && formats[0] !== "movie")) for (const fk of formats) rows.push(rowFor(s, fk, "format", cs.map((c) => c.films.filter((f) => f.format === fk)), (x: number) => thresholdScore(x, cfg)));
    const gens = [...new Set(cs.flatMap((c) => c.films.map((f) => f.criticGeneration)))].sort((a, b) => a - b);
    if (gens.length > 1) for (const g of gens) rows.push(rowFor(s, `gen${g}`, "generation", cs.map((c) => c.films.filter((f) => f.criticGeneration === g)), (x: number) => thresholdScore(x, cfg)));
  }
  return rows;
}

// ---------------- Prestige progression ----------------

export interface CareerProgress {
  seed: number;
  strategy: string;
  prestige: number;
  years: number;
  releases: number;
  endCash: number;
  negativeCashWeeks: number;
  /** per upgrade step i (capacity ladder[i] -> ladder[i+1]) */
  steps: { gateMetWeek: number | null; gateMetRelease: number | null; boughtWeek: number | null; boughtRelease: number | null; prestigeAtPurchase: number | null; cashRichLockedWeeks: number }[];
  milestones: Record<string, number>; // milestone id -> times awarded
  prestigeFirstYear: number;
}

/**
 * Reconstruct cash and Prestige week by week from the ledger and Prestige events, then measure when each
 * Prestige-gated upgrade became reachable, when it was bought, and how long the studio had the cash but
 * not the Prestige ("cash-rich, Prestige-locked").
 */
export function careerProgress(seed: number, strategy: string, s: StudioState, cfg: Config): CareerProgress {
  const ladder = cfg.staffCapacity.ladder as number[];
  const costs = cfg.staffCapacity.upgradeCosts as number[];
  const gates = cfg.staffCapacity.upgradePrestige as number[];
  const prestigeByWeek = new Map<number, number>();
  const milestones: Record<string, number> = {};
  for (const e of s.events) {
    if (e.type !== "prestige") continue;
    const d = e.data as { amount?: number; milestone?: string } | undefined;
    const amt = d?.amount ?? Number(/Prestige \+(\d+)/.exec(String(e.message))?.[1] ?? 0);
    prestigeByWeek.set(e.week, (prestigeByWeek.get(e.week) ?? 0) + amt);
    const id = d?.milestone ?? "unknown";
    milestones[id] = (milestones[id] ?? 0) + 1;
  }
  const cashByWeek = new Map<number, number>();
  for (const l of s.ledger) {
    if (l.kind === "advance_received" || l.kind === "advance_spent") continue;
    cashByWeek.set(l.week, (cashByWeek.get(l.week) ?? 0) + l.amount);
  }
  const releaseAt = (w: number) => s.releases.filter((r) => r.releaseWeek <= w).length;
  const steps: CareerProgress["steps"] = [];
  for (let i = 0; i < ladder.length - 1; i++) steps.push({ gateMetWeek: null, gateMetRelease: null, boughtWeek: null, boughtRelease: null, prestigeAtPurchase: null, cashRichLockedWeeks: 0 });
  let cash = 0;
  let prestige = 0;
  let level = 0;
  const upgradeWeeks = new Map(s.upgrades.map((u, i) => [i, u] as const));
  for (let w = 0; w <= s.week; w++) {
    cash += cashByWeek.get(w) ?? 0;
    prestige += prestigeByWeek.get(w) ?? 0;
    for (let i = 0; i < steps.length; i++) {
      if (steps[i].gateMetWeek === null && prestige >= (gates[i] ?? Infinity)) {
        steps[i].gateMetWeek = w;
        steps[i].gateMetRelease = releaseAt(w);
      }
    }
    while (level < steps.length && upgradeWeeks.get(level)?.week === w) {
      const u = upgradeWeeks.get(level)!;
      steps[level].boughtWeek = w;
      steps[level].boughtRelease = releaseAt(w);
      steps[level].prestigeAtPurchase = u.prestigeAtUpgrade;
      level += 1;
    }
    if (level < steps.length && cash >= (costs[level] ?? Infinity) && prestige < (gates[level] ?? 0)) steps[level].cashRichLockedWeeks += 1;
  }
  const firstYear = [...prestigeByWeek.entries()].filter(([w]) => w < cfg.time.weeksPerYear).reduce((a, [, v]) => a + v, 0);
  return { seed, strategy, prestige: s.prestige, years: +(s.week / cfg.time.weeksPerYear).toFixed(2), releases: s.releases.length, endCash: Math.round(s.cash), negativeCashWeeks: s.counters.negativeCashWeeks, steps, milestones, prestigeFirstYear: firstYear };
}

export interface ProgressRow {
  strategy: string;
  careers: number;
  medianCash: number;
  medianPrestige: number;
  medianPrestigePerYear: number;
  shareNegativeCashWeeks: number; // share of careers with >= 1 negative-cash week
  medianNegativeCashWeeks: number;
  steps: { to: number; gate: number; cost: number; gateMet: number; bought: number; medianGateWeek: number | null; medianGateRelease: number | null; medianBuyRelease: number | null; cashRichLockedCareers: number; boughtBelowGate: number }[];
  milestonesPerCareer: Record<string, number>; // mean awards per career
  prestigeTooFastShare: number; // share of careers > threshold/yr (threshold is OUTDATED, fit to per-IP Gate 2 totals)
}

export function progressRows(ps: CareerProgress[], cfg: Config, prestigeTooFastPerYear = 400): ProgressRow[] {
  const ladder = cfg.staffCapacity.ladder as number[];
  const costs = cfg.staffCapacity.upgradeCosts as number[];
  const gates = cfg.staffCapacity.upgradePrestige as number[];
  const med = (xs: number[]) => (xs.length ? +quantile(xs, 0.5).toFixed(1) : null);
  const strategies = [...new Set(ps.map((p) => p.strategy))];
  return strategies.map((s) => {
    const cs = ps.filter((p) => p.strategy === s);
    const ids = [...new Set(cs.flatMap((c) => Object.keys(c.milestones)))].sort();
    return {
      strategy: s,
      careers: cs.length,
      medianCash: med(cs.map((c) => c.endCash)) ?? 0,
      medianPrestige: med(cs.map((c) => c.prestige)) ?? 0,
      medianPrestigePerYear: med(cs.map((c) => c.prestige / Math.max(0.25, c.years))) ?? 0,
      shareNegativeCashWeeks: +(cs.filter((c) => c.negativeCashWeeks > 0).length / cs.length).toFixed(3),
      medianNegativeCashWeeks: med(cs.map((c) => c.negativeCashWeeks)) ?? 0,
      steps: ladder.slice(1).map((to, i) => {
        const st = cs.map((c) => c.steps[i]).filter(Boolean);
        return {
          to,
          gate: gates[i],
          cost: costs[i],
          gateMet: st.filter((x) => x.gateMetWeek !== null).length,
          bought: st.filter((x) => x.boughtWeek !== null).length,
          medianGateWeek: med(st.filter((x) => x.gateMetWeek !== null).map((x) => x.gateMetWeek!)),
          medianGateRelease: med(st.filter((x) => x.gateMetRelease !== null).map((x) => x.gateMetRelease!)),
          medianBuyRelease: med(st.filter((x) => x.boughtRelease !== null).map((x) => x.boughtRelease!)),
          cashRichLockedCareers: st.filter((x) => x.cashRichLockedWeeks > 0).length,
          boughtBelowGate: st.filter((x) => x.prestigeAtPurchase !== null && x.prestigeAtPurchase < gates[i]).length,
        };
      }),
      milestonesPerCareer: Object.fromEntries(ids.map((id) => [id, +(cs.reduce((a, c) => a + (c.milestones[id] ?? 0), 0) / cs.length).toFixed(2)])),
      prestigeTooFastShare: +(cs.filter((c) => c.prestige / Math.max(0.25, c.years) > prestigeTooFastPerYear).length / cs.length).toFixed(3),
    };
  });
}

// ---------------- formatting ----------------

const p = (x: Pct) => `${x.n} (${x.pct.toFixed(1)}%)`;
export function filmLabel(f: FilmRef | null): string {
  if (!f) return "—";
  return `${f.avg.toFixed(2)} "${f.title}" (${f.format && f.format !== "movie" ? `${f.format}, ` : ""}A${f.audience}/C${f.critic}; ${f.strategy} seed ${f.seed} #${f.index}, yr ${f.year.toFixed(1)}, critic gen ${f.criticGeneration})`;
}

/** Compact Markdown table: one row per strategy for the chosen slices. */
export function greatTable(rows: GreatRow[], slices: string[], prestigeByStrategy?: Record<string, number>, variant?: string): string {
  const out: string[] = [];
  out.push(`| Strategy |${variant ? " Config |" : ""} Window | Films (n) | Avg Aud | Avg Crit | HoF n (%) | Avg ≥9 n (%) | Avg >9 n (%) | Aud ≥9 n (%) | Crit ≥9 n (%) | 8+ n (%) | Careers with 0 HoF | HoF/career p10/p50/p90 | Best/career p10/p50/p90/p99 | Best combined movie | Prestige median |`);
  out.push(`|---|${variant ? "---|" : ""}---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---|---|---|---:|`);
  for (const r of rows.filter((x) => slices.includes(x.slice))) {
    const h = r.hofPerCareer;
    const b = r.bestPerCareer;
    out.push(
      `| ${r.strategy} |${variant ? ` ${variant} |` : ""} ${r.slice} | ${r.films} | ${r.avgAudience.toFixed(2)} | ${r.avgCritic.toFixed(2)} | ${p(r.hof)} | ${p(r.avg9inc)} | ${p(r.avg9strict)} | ${p(r.aud9)} | ${p(r.crit9)} | ${p(r.avg8)} | ${r.zeroHofCareers.pct.toFixed(0)}% of ${r.careers} | ${h ? `${h.p10}/${h.p50}/${h.p90}` : "—"} | ${b ? `${b.p10}/${b.p50}/${b.p90}/${b.p99}` : "—"} | ${filmLabel(r.best)} | ${prestigeByStrategy && r.slice === "all" ? prestigeByStrategy[r.strategy] ?? "—" : ""} |`,
    );
  }
  return out.join("\n");
}

export function greatCsv(rows: (GreatRow & { variant?: string; productions?: number })[]): string {
  const cols = ["variant", "productions", "strategy", "sliceKind", "slice", "films", "careers", "meanYear", "avgAudience", "avgCritic", "hof_n", "hof_pct", "avg9inc_n", "avg9inc_pct", "avg9strict_n", "avg9strict_pct", "aud9_n", "aud9_pct", "crit9_n", "crit9_pct", "avg8_n", "avg8_pct", "zeroHofCareers_pct", "hofPerCareer_p10", "hofPerCareer_p50", "hofPerCareer_p90", "hofIpsPerCareer_p50", "hofIpsTotal", "bestPerCareer_p10", "bestPerCareer_p50", "bestPerCareer_p90", "bestPerCareer_p99", "best_avg", "best_title", "best_seed", "best_index", "best_strategy", "best_year", "best_criticGen", "bestAudience_value", "bestAudience_title", "bestCritic_value", "bestCritic_title"];
  const esc = (v: unknown) => (typeof v === "string" && /[",]/.test(v) ? `"${v.replace(/"/g, '""')}"` : v === null || v === undefined ? "" : String(v));
  const lines = [cols.join(",")];
  for (const r of rows) {
    lines.push(
      [r.variant, r.productions, r.strategy, r.sliceKind, r.slice, r.films, r.careers, r.meanYear, r.avgAudience, r.avgCritic, r.hof.n, r.hof.pct, r.avg9inc.n, r.avg9inc.pct, r.avg9strict.n, r.avg9strict.pct, r.aud9.n, r.aud9.pct, r.crit9.n, r.crit9.pct, r.avg8.n, r.avg8.pct, r.zeroHofCareers.pct, r.hofPerCareer?.p10, r.hofPerCareer?.p50, r.hofPerCareer?.p90, r.hofIpsPerCareer?.p50, r.hofIpsTotal, r.bestPerCareer?.p10, r.bestPerCareer?.p50, r.bestPerCareer?.p90, r.bestPerCareer?.p99, r.best?.avg, r.best?.title, r.best?.seed, r.best?.index, r.best?.strategy, r.best?.year, r.best?.criticGeneration, r.bestAudience?.audience, r.bestAudience?.title, r.bestCritic?.critic, r.bestCritic?.title]
        .map(esc)
        .join(","),
    );
  }
  return lines.join("\n") + "\n";
}

export function progressTable(rows: ProgressRow[], variant?: string): string {
  const out: string[] = [];
  const steps = rows[0]?.steps ?? [];
  out.push(`| Strategy |${variant ? " Config |" : ""} Cash median | Prestige median | Prestige/yr | Careers with negative-cash weeks | ${steps.map((s) => `→${s.to} gate met (Prestige ≥ ${s.gate}) · median film # | →${s.to} bought · median film # | →${s.to} cash-rich but Prestige-locked | →${s.to} bought below gate`).join(" | ")} |`);
  out.push(`|---|${variant ? "---|" : ""}---:|---:|---:|---:|${steps.map(() => "---:|---:|---:|---:").join("|")}|`);
  for (const r of rows) {
    out.push(
      `| ${r.strategy} |${variant ? ` ${variant} |` : ""} $${(r.medianCash / 1e6).toFixed(2)}M | ${r.medianPrestige} | ${r.medianPrestigePerYear} | ${(r.shareNegativeCashWeeks * 100).toFixed(0)}% | ${r.steps
        .map((s) => `${((100 * s.gateMet) / r.careers).toFixed(0)}% · #${s.medianGateRelease ?? "—"} | ${((100 * s.bought) / r.careers).toFixed(0)}% · #${s.medianBuyRelease ?? "—"} | ${((100 * s.cashRichLockedCareers) / r.careers).toFixed(0)}% | ${s.boughtBelowGate}`)
        .join(" | ")} |`,
    );
  }
  return out.join("\n");
}
