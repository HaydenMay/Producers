// Gate 3 career metrics, diagnostic flags and report tables: formats, TV, streaming, revenue mix, Prestige
// sources and solvency. Pure functions over finished careers. Thresholds are PROVISIONAL (config/diagnostics.json
// "gate3"); flags are evidence for the designer, never automatic balance verdicts.
import type { Config } from "../core/config";
import { formatOf } from "../core/formats";
import type { Release, StudioState } from "../core/types";
import { quantile } from "./metrics";

export interface CareerG3 {
  seed: number;
  strategy: string;
  years: number;
  releases: number;
  byFormat: Record<string, { n: number; avg: number; hof: number; net: number; prodWeeks: number }>;
  originals: number;
  shows: number;
  seasons: number;
  maxSeasons: number;
  showsEndedByScore: number; // last season < renewal threshold
  tvUnlockWeek: number | null;
  launchWeek: number | null;
  buildStartWeek: number | null;
  subsEnd: number;
  subsPeak: number;
  subsByYear: number[]; // subscribers at the end of each in-game year
  platformGross: number;
  platformOpex: number;
  paybackWeek: number | null; // first week cumulative (subs gross - opex) >= build cost
  catalog: number;
  last12: { traditional: number; subscriptions: number; opex: number; surplus: number };
  endCash: number;
  minCash: number;
  negativeCashWeeks: number;
  prestige: number;
  prestigeBySource: Record<string, number>;
  prestigeByFormat: Record<string, number>;
  successfulIps: number; // IPs with >= 10K fans at the end
  maxIpFans: number;
  hof: number;
  weeksSinceLastRelease: number;
  /** net per production week of each finished traditional TV season, and of the career's movies (pooled later) */
  tvSeasonPerWeek: number[];
  movieNet: number;
  movieWeeks: number;
  /** follow-up: shows that reached tvTooLongSeasons seasons with a recent 3-season average >= 7 (interesting long-runners) */
  longRunners: number;
  /** follow-up: seasons ordered after >= 2 consecutive traditional seasons that lost money (financially irrational renewals) */
  irrationalRenewals: number;
}

const prodWeeks = (cfg: Config, r: Release) =>
  r.format === "tv" ? Math.round(cfg.tv.durationBaseWeeks + cfg.tv.weeksPerEpisode * (r.episodes ?? 0)) : r.format === "limited_series" ? cfg.limitedSeries.durationWeeks : cfg.production.movie.durationWeeks;

export const fmtKey = (r: Pick<Release, "format" | "route" | "episodes">) => `${formatOf(r)}${r.route === "original" ? "/original" : ""}`;

export function careerG3(seed: number, strategy: string, s: StudioState, cfg: Config): CareerG3 {
  const W = cfg.time.weeksPerYear;
  const byFormat: CareerG3["byFormat"] = {};
  for (const r of s.releases) {
    const k = fmtKey(r);
    const x = (byFormat[k] ??= { n: 0, avg: 0, hof: 0, net: 0, prodWeeks: 0 });
    x.n++;
    x.avg += r.avgScore;
    x.hof += r.hallOfFame ? 1 : 0;
    x.net += r.studioTake + r.surplusKept - r.cashOverrun; // money the title returned minus studio cash it consumed
    x.prodWeeks += prodWeeks(cfg, r);
  }
  for (const x of Object.values(byFormat)) x.avg = +(x.avg / x.n).toFixed(3);
  const tvIps = Object.values(s.ips).filter((i) => formatOf(i) === "tv");
  const seasonCounts = tvIps.map((i) => s.releases.filter((r) => r.ipId === i.id).length);
  const p = s.platform;
  const subsByYear: number[] = [];
  if (p) {
    for (let y = 1; y <= Math.ceil(s.week / W); y++) {
      const w = [...p.weekly].reverse().find((x) => x.week <= y * W);
      subsByYear.push(w ? w.subs : 0);
    }
  }
  let payback: number | null = null;
  if (p) {
    let acc = 0;
    for (const w of p.weekly) {
      acc += w.gross - w.opex;
      if (acc >= p.buildCost) {
        payback = w.week;
        break;
      }
    }
  }
  const since = s.week - W;
  const last12 = { traditional: 0, subscriptions: 0, opex: 0, surplus: 0 };
  let cash = 0;
  let minCash = Infinity;
  const byWeek = new Map<number, number>();
  for (const l of s.ledger) {
    if (l.kind === "advance_received" || l.kind === "advance_spent") continue;
    byWeek.set(l.week, (byWeek.get(l.week) ?? 0) + l.amount);
    if (l.week > since) {
      if (l.kind === "studio_take") last12.traditional += l.amount;
      if (l.kind === "subscriptions") last12.subscriptions += l.amount;
      if (l.kind === "platform_opex") last12.opex += l.amount;
      if (l.kind === "surplus_transfer") last12.surplus += l.amount;
    }
  }
  for (let w = 0; w <= s.week; w++) {
    cash += byWeek.get(w) ?? 0;
    if (w > 0) minCash = Math.min(minCash, cash);
  }
  const prestigeBySource: Record<string, number> = {};
  const prestigeByFormat: Record<string, number> = {};
  const relById = new Map(s.releases.map((r) => [r.id, r]));
  for (const e of s.events) {
    if (e.type !== "prestige") continue;
    const d = e.data as { milestone?: string; amount?: number; releaseId?: string };
    prestigeBySource[d.milestone ?? "?"] = (prestigeBySource[d.milestone ?? "?"] ?? 0) + (d.amount ?? 0);
    const r = d.releaseId ? relById.get(d.releaseId) : undefined;
    const k = r ? fmtKey(r) : "?";
    prestigeByFormat[k] = (prestigeByFormat[k] ?? 0) + (d.amount ?? 0);
  }
  const tvSeasonPerWeek = s.releases.filter((r) => r.format === "tv" && !r.active && r.route !== "original").map((r) => Math.round((r.studioTake + r.surplusKept - r.cashOverrun) / prodWeeks(cfg, r)));
  const doneMovies = s.releases.filter((r) => !r.format && !r.route && !r.active);
  const net = (r: Release) => r.studioTake + r.surplusKept - r.cashOverrun;
  let longRunners = 0;
  let irrationalRenewals = 0;
  for (const i of tvIps) {
    const ss = s.releases.filter((r) => r.ipId === i.id && r.format === "tv");
    const last3 = ss.slice(-3);
    if (ss.length >= DEFAULT_G3_THRESHOLDS.tvTooLongSeasons && last3.reduce((a, r) => a + r.avgScore, 0) / last3.length >= 7) longRunners++;
    for (let k = 2; k < ss.length; k++) {
      const a = ss[k - 2], b = ss[k - 1];
      if (a.route !== "original" && b.route !== "original" && !a.active && b.releaseWeek < ss[k].releaseWeek && net(a) < 0 && net(b) < 0 && (b.runEndWeek ?? Infinity) <= ss[k].releaseWeek) irrationalRenewals++;
    }
  }
  const lastRel = s.releases.at(-1);
  return {
    seed,
    strategy,
    years: +(s.week / W).toFixed(2),
    releases: s.releases.length,
    byFormat,
    originals: s.releases.filter((r) => r.route === "original").length,
    shows: tvIps.length,
    seasons: seasonCounts.reduce((a, b) => a + b, 0),
    maxSeasons: Math.max(0, ...seasonCounts),
    showsEndedByScore: tvIps.filter((i) => {
      const last = s.releases.filter((r) => r.ipId === i.id).at(-1);
      return last && last.avgScore < cfg.tv.renewalThreshold;
    }).length,
    tvUnlockWeek: s.events.find((e) => e.type === "unlock" && String(e.message).startsWith("Studio upgrade: TV"))?.week ?? null,
    launchWeek: p?.launchWeek ?? null,
    buildStartWeek: p?.buildStartWeek ?? null,
    subsEnd: p?.subscribers ?? 0,
    subsPeak: p ? Math.max(0, ...p.weekly.map((w) => w.subs)) : 0,
    subsByYear,
    platformGross: p?.totals.gross ?? 0,
    platformOpex: p?.totals.opex ?? 0,
    paybackWeek: payback,
    catalog: p?.catalog.length ?? 0,
    last12: Object.fromEntries(Object.entries(last12).map(([k, v]) => [k, Math.round(v)])) as CareerG3["last12"],
    endCash: Math.round(s.cash),
    minCash: Math.round(minCash === Infinity ? s.cash : minCash),
    negativeCashWeeks: s.counters.negativeCashWeeks,
    prestige: s.prestige,
    prestigeBySource,
    prestigeByFormat,
    successfulIps: Object.values(s.ips).filter((i) => i.fans >= 10000).length,
    maxIpFans: Math.max(0, ...Object.values(s.ips).map((i) => i.fans)),
    hof: s.releases.filter((r) => r.hallOfFame).length,
    weeksSinceLastRelease: lastRel ? s.week - lastRel.releaseWeek : s.week,
    tvSeasonPerWeek,
    longRunners,
    irrationalRenewals,
    movieNet: doneMovies.reduce((a, r) => a + r.studioTake + r.surplusKept - r.cashOverrun, 0),
    movieWeeks: doneMovies.length * cfg.production.movie.durationWeeks,
  };
}

// ---------------- summary per strategy ----------------

const med = (xs: number[]) => (xs.length ? +quantile(xs, 0.5).toFixed(2) : null);
const share = (xs: boolean[]) => (xs.length ? +(xs.filter(Boolean).length / xs.length).toFixed(3) : 0);

export interface G3Row {
  strategy: string;
  careers: number;
  years: number | null;
  releases: number | null;
  cash: number | null;
  minCash: number | null;
  everNegative: number;
  prestige: number | null;
  tvUnlockYear: number | null;
  tvUnlockedShare: number;
  launchYear: number | null;
  launchedShare: number;
  subsEnd: number | null;
  subsPeak: number | null;
  paybackYears: number | null; // from launch
  paidBackShare: number; // of launched careers
  streamingShareLast12: number | null; // subscriptions / (traditional + subscriptions)
  mixLast12: { traditional: number | null; subscriptions: number | null; opex: number | null; surplus: number | null };
  formatShare: Record<string, number>; // releases by format (pooled)
  formatAvg: Record<string, number>;
  formatHofPct: Record<string, number>;
  formatNetPerProdWeek: Record<string, number>;
  shows: number | null;
  seasons: number | null;
  maxSeasons: number | null;
  successfulIps: number | null;
  hof: number | null;
  prestigeSourcePct: Record<string, number>;
  prestigeFormatPct: Record<string, number>;
}

export function g3Rows(cs: CareerG3[]): G3Row[] {
  const strategies = [...new Set(cs.map((c) => c.strategy))];
  return strategies.map((s) => {
    const x = cs.filter((c) => c.strategy === s);
    const launched = x.filter((c) => c.launchWeek !== null);
    const pool: Record<string, { n: number; avg: number; hof: number; net: number; w: number }> = {};
    for (const c of x)
      for (const [k, f] of Object.entries(c.byFormat)) {
        const p = (pool[k] ??= { n: 0, avg: 0, hof: 0, net: 0, w: 0 });
        p.n += f.n;
        p.avg += f.avg * f.n;
        p.hof += f.hof;
        p.net += f.net;
        p.w += f.prodWeeks;
      }
    const totalN = Object.values(pool).reduce((a, p) => a + p.n, 0) || 1;
    const src: Record<string, number> = {};
    const fmt: Record<string, number> = {};
    for (const c of x) {
      for (const [k, v] of Object.entries(c.prestigeBySource)) src[k] = (src[k] ?? 0) + v;
      for (const [k, v] of Object.entries(c.prestigeByFormat)) fmt[k] = (fmt[k] ?? 0) + v;
    }
    const pt = Object.values(src).reduce((a, b) => a + b, 0) || 1;
    const ft = Object.values(fmt).reduce((a, b) => a + b, 0) || 1;
    return {
      strategy: s,
      careers: x.length,
      years: med(x.map((c) => c.years)),
      releases: med(x.map((c) => c.releases)),
      cash: med(x.map((c) => c.endCash)),
      minCash: med(x.map((c) => c.minCash)),
      everNegative: share(x.map((c) => c.negativeCashWeeks > 0)),
      prestige: med(x.map((c) => c.prestige)),
      tvUnlockYear: med(x.filter((c) => c.tvUnlockWeek !== null).map((c) => c.tvUnlockWeek! / 52)),
      tvUnlockedShare: share(x.map((c) => c.tvUnlockWeek !== null)),
      launchYear: med(launched.map((c) => c.launchWeek! / 52)),
      launchedShare: share(x.map((c) => c.launchWeek !== null)),
      subsEnd: launched.length ? med(launched.map((c) => c.subsEnd)) : null,
      subsPeak: launched.length ? med(launched.map((c) => c.subsPeak)) : null,
      paybackYears: med(launched.filter((c) => c.paybackWeek !== null).map((c) => (c.paybackWeek! - c.launchWeek!) / 52)),
      paidBackShare: launched.length ? share(launched.map((c) => c.paybackWeek !== null)) : 0,
      streamingShareLast12: launched.length ? med(launched.map((c) => c.last12.subscriptions / Math.max(1, c.last12.subscriptions + c.last12.traditional))) : null,
      mixLast12: { traditional: med(x.map((c) => c.last12.traditional)), subscriptions: med(x.map((c) => c.last12.subscriptions)), opex: med(x.map((c) => c.last12.opex)), surplus: med(x.map((c) => c.last12.surplus)) },
      formatShare: Object.fromEntries(Object.entries(pool).map(([k, p]) => [k, +(p.n / totalN).toFixed(3)])),
      formatAvg: Object.fromEntries(Object.entries(pool).map(([k, p]) => [k, +(p.avg / p.n).toFixed(2)])),
      formatHofPct: Object.fromEntries(Object.entries(pool).map(([k, p]) => [k, +((100 * p.hof) / p.n).toFixed(1)])),
      formatNetPerProdWeek: Object.fromEntries(Object.entries(pool).map(([k, p]) => [k, Math.round(p.net / Math.max(1, p.w))])),
      shows: med(x.map((c) => c.shows)),
      seasons: med(x.map((c) => c.seasons)),
      maxSeasons: med(x.map((c) => c.maxSeasons)),
      successfulIps: med(x.map((c) => c.successfulIps)),
      hof: med(x.map((c) => c.hof)),
      prestigeSourcePct: Object.fromEntries(Object.entries(src).sort((a, b) => b[1] - a[1]).map(([k, v]) => [k, +((100 * v) / pt).toFixed(1)])),
      prestigeFormatPct: Object.fromEntries(Object.entries(fmt).map(([k, v]) => [k, +((100 * v) / ft).toFixed(1)])),
    };
  });
}

// ---------------- provisional flags ----------------

export interface G3Thresholds {
  streamingMaxShareOfMarket: number;
  churnSpiralYears: number;
  churnSpiralDrop: number;
  tvTooProfitableShare: number;
  tvTooLongSeasons: number;
  softlockYears: number;
  formatDominantShare: number;
  delayedTvYears: number;
  delayedLaunchYears: number;
}
export const DEFAULT_G3_THRESHOLDS: G3Thresholds = {
  streamingMaxShareOfMarket: 0.9,
  churnSpiralYears: 3,
  churnSpiralDrop: 0.6,
  tvTooProfitableShare: 0.1,
  tvTooLongSeasons: 12,
  softlockYears: 3,
  formatDominantShare: 0.5,
  delayedTvYears: 8,
  delayedLaunchYears: 15,
};

export interface G3Flag {
  flag: string;
  fired: boolean;
  why: string;
}

export function g3Flags(cs: CareerG3[], cfg: Config, th: G3Thresholds = DEFAULT_G3_THRESHOLDS): G3Flag[] {
  const out: G3Flag[] = [];
  const f = (flag: string, fired: boolean, why: string) => out.push({ flag, fired, why: `${fired ? "" : "not fired: "}${why} [PROVISIONAL threshold]` });
  const launched = cs.filter((c) => c.launchWeek !== null);
  const saturated = launched.filter((c) => c.subsPeak >= th.streamingMaxShareOfMarket * cfg.streaming.reachableMarket);
  f("STREAMING_INFINITE_GROWTH", saturated.length > 0, `${saturated.length}/${launched.length} launched careers reached ≥${th.streamingMaxShareOfMarket * 100}% of the reachable subscriber market (growth is capped by design; this flags saturation)`);
  const spiral = launched.filter((c) => {
    const ys = c.subsByYear;
    for (let i = 0; i + th.churnSpiralYears < ys.length; i++) if (ys[i] > 1000 && ys[i + th.churnSpiralYears] < ys[i] * (1 - th.churnSpiralDrop)) return true;
    return false;
  });
  f("SUBSCRIBER_CHURN_SPIRAL", spiral.length > launched.length * 0.1 && spiral.length > 0, `${spiral.length}/${launched.length} launched careers lost >${th.churnSpiralDrop * 100}% of subscribers within ${th.churnSpiralYears} years`);
  const tvCareers = cs.filter((c) => (c.byFormat.tv?.n ?? 0) > 0);
  const movieRef = cs.reduce((a, c) => a + c.movieNet, 0) / Math.max(1, cs.reduce((a, c) => a + c.movieWeeks, 0));
  const seasons = cs.flatMap((c) => c.tvSeasonPerWeek);
  const tooProf = seasons.filter((x) => movieRef > 0 && x > 2 * movieRef);
  f("TV_SEASON_TOO_PROFITABLE", seasons.length > 0 && tooProf.length / seasons.length > th.tvTooProfitableShare, `${tooProf.length}/${seasons.length} finished traditional TV seasons netted >2× the batch's pooled movie net per production week ($${Math.round(movieRef).toLocaleString()})`);
  // follow-up: long shows are legal (LOCKED: no season cap). Flag the INTERESTING ones and the IRRATIONAL renewals instead.
  const longR = cs.filter((c) => c.longRunners > 0);
  f("TV_LONG_RUNNER", longR.length > 0, `${longR.length}/${cs.length} careers have a show at ≥${th.tvTooLongSeasons} seasons whose last 3 seasons still average ≥ 7 (informational: an interesting long-running show)`);
  const irr = cs.filter((c) => c.irrationalRenewals > 0);
  f("TV_IRRATIONAL_RENEWAL", irr.length > 0, `${irr.length}/${cs.length} careers ordered a season after 2+ consecutive money-losing traditional seasons (${cs.reduce((a, c) => a + c.irrationalRenewals, 0)} such seasons)`);
  const noRenew = tvCareers.filter((c) => c.shows > 0 && c.seasons === c.shows && c.years >= 8);
  f("TV_NO_RENEWAL_PATH", tvCareers.length > 0 && noRenew.length / tvCareers.length > 0.5, `${noRenew.length}/${tvCareers.length} TV careers never made a second season`);
  const soft = cs.filter((c) => c.negativeCashWeeks >= th.softlockYears * 52);
  f("MIXED_ECONOMY_SOFTLOCK", soft.length > 0, `${soft.length}/${cs.length} careers spent ≥${th.softlockYears} years with negative cash`);
  const pooled: Record<string, number> = {};
  for (const c of cs) for (const [k, x] of Object.entries(c.byFormat)) pooled[k] = (pooled[k] ?? 0) + x.net;
  const strategies = [...new Set(cs.map((c) => c.strategy))];
  const medCash = strategies.map((s) => ({ s, cash: quantile(cs.filter((c) => c.strategy === s).map((c) => c.endCash), 0.5), prest: quantile(cs.filter((c) => c.strategy === s).map((c) => c.prestige), 0.5) }));
  const best = [...medCash].sort((a, b) => b.cash - a.cash)[0];
  const bestP = [...medCash].sort((a, b) => b.prest - a.prest)[0];
  const dominant = best && bestP && best.s === bestP.s && medCash.filter((m) => m.s !== best.s).every((m) => m.cash < best.cash * (1 - th.formatDominantShare) && m.prest < best.prest * (1 - th.formatDominantShare));
  f("FORMAT_DOMINANT", !!dominant, `best cash: ${best?.s}; best Prestige: ${bestP?.s}; fires only if one strategy leads both by >${th.formatDominantShare * 100}%`);
  const tvWanting = cs.filter((c) => ["tv-first", "renewal-franchise", "mixed", "traditional-holdout"].includes(c.strategy) && c.years >= th.delayedTvYears);
  const lateTv = tvWanting.filter((c) => c.tvUnlockWeek === null || c.tvUnlockWeek / 52 > th.delayedTvYears);
  const streamWanting = cs.filter((c) => ["streaming-pivot", "mixed"].includes(c.strategy) && c.years >= th.delayedLaunchYears);
  const lateLaunch = streamWanting.filter((c) => c.launchWeek === null || c.launchWeek / 52 > th.delayedLaunchYears);
  f("DELAYED_STUDIO_PROGRESSION", lateTv.length > tvWanting.length * 0.25 || lateLaunch.length > streamWanting.length * 0.25, `TV not unlocked by year ${th.delayedTvYears}: ${lateTv.length}/${tvWanting.length}; streaming not live by year ${th.delayedLaunchYears}: ${lateLaunch.length}/${streamWanting.length}`);
  return out;
}

// ---------------- report ----------------

const $ = (x: number | null) => (x === null ? "—" : `$${(x / 1e6).toFixed(2)}M`);
const n0 = (x: number | null) => (x === null ? "—" : Math.round(x).toLocaleString("en-US"));
const n1 = (x: number | null) => (x === null ? "—" : x.toFixed(1));

export function g3TradeoffTable(rows: G3Row[], variant?: string): string {
  const out = [
    `| Strategy |${variant ? " Config |" : ""} (a) cash median | min cash | ever negative | (b) Prestige | (c) TV unlock yr (share) | streaming live yr (share) | subs end | payback yrs (share) | (d) IPs ≥10K fans | shows · seasons · max | (e) HoF / career | (f) last-12-mo mix: traditional / subs / opex | streaming share | releases |`,
    `|---|${variant ? "---|" : ""}---:|---:|---:|---:|---|---|---:|---|---:|---|---:|---|---:|---:|`,
  ];
  for (const r of rows)
    out.push(
      `| ${r.strategy} |${variant ? ` ${variant} |` : ""} ${$(r.cash)} | ${r.minCash === null ? "—" : `$${Math.round(r.minCash / 1000)}K`} | ${(r.everNegative * 100).toFixed(0)}% | ${n0(r.prestige)} | ${n1(r.tvUnlockYear)} (${(r.tvUnlockedShare * 100).toFixed(0)}%) | ${n1(r.launchYear)} (${(r.launchedShare * 100).toFixed(0)}%) | ${n0(r.subsEnd)} | ${n1(r.paybackYears)} (${(r.paidBackShare * 100).toFixed(0)}%) | ${n1(r.successfulIps)} | ${n1(r.shows)} · ${n1(r.seasons)} · ${n1(r.maxSeasons)} | ${n1(r.hof)} | ${$(r.mixLast12.traditional)} / ${$(r.mixLast12.subscriptions)} / ${$(r.mixLast12.opex)} | ${r.streamingShareLast12 === null ? "—" : `${(r.streamingShareLast12 * 100).toFixed(0)}%`} | ${n0(r.releases)} |`,
    );
  return out.join("\n");
}

export function g3FormatTable(rows: G3Row[], variant?: string): string {
  const keys = [...new Set(rows.flatMap((r) => Object.keys(r.formatShare)))].sort();
  const out = [`| Strategy |${variant ? " Config |" : ""} ${keys.map((k) => `${k}: share · avg · HoF% · net/prod-wk`).join(" | ")} | Prestige by format | top Prestige sources |`, `|---|${variant ? "---|" : ""}${keys.map(() => "---").join("|")}|---|---|`];
  for (const r of rows)
    out.push(
      `| ${r.strategy} |${variant ? ` ${variant} |` : ""} ${keys.map((k) => (r.formatShare[k] === undefined ? "—" : `${(r.formatShare[k] * 100).toFixed(0)}% · ${r.formatAvg[k]} · ${r.formatHofPct[k]}% · $${(r.formatNetPerProdWeek[k] / 1000).toFixed(1)}K`)).join(" | ")} | ${Object.entries(r.prestigeFormatPct).map(([k, v]) => `${k} ${v}%`).join(", ")} | ${Object.entries(r.prestigeSourcePct).slice(0, 4).map(([k, v]) => `${k} ${v}%`).join(", ")} |`,
    );
  return out.join("\n");
}
