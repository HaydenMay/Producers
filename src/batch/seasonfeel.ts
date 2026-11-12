// Gate 3 follow-up: season-level "feel" metrics. Pure functions over a finished career state.
// Horizons are taken as PREFIXES of one long run (verified: agents never look at the horizon, so a 10-year
// career is exactly the first 10 years of the 25-year one). A season counts toward horizon H if it was
// RELEASED before week H; its money is its full run (runs end a few weeks after release).
import { isHallOfFame } from "../core/scoring";
import type { Config } from "../core/config";
import type { Release, StudioState } from "../core/types";

export const BANDS = ["1-3", "4-6", "7-10", "11-15", "16+"] as const;
export const bandOf = (n: number) => (n <= 3 ? "1-3" : n <= 6 ? "4-6" : n <= 10 ? "7-10" : n <= 15 ? "11-15" : "16+");

export interface SeasonRow {
  seed: number;
  strategy: string;
  ipId: string;
  show: string;
  season: number;
  band: string;
  week: number;
  year: number;
  episodes: number;
  original: boolean;
  premiere: number;
  unique: number;
  reachCap: number;
  closeness: number; // unique / reach cap
  trajectory: number; // last episode viewers / premiere
  returnRate: number | null; // this premiere / previous season's last-episode viewers
  audience: number;
  critic: number;
  avg: number; // (A + C) / 2 from the published scores (unrounded mean)
  hof: boolean;
  fansStart: number | null;
  fansEnd: number | null;
  anticipation: number;
  viewerFatigueMult: number; // 1 when the experiment is off
  reviewFatigue: number; // show-age review fatigue (tv.fatigue)
  net: number;
  prodWeeks: number;
  netPerWeek: number;
  payrollWeek: number; // payroll paid in the release week (commitment at that time)
  trustAfter: number | null;
  renewable: boolean;
  breakthrough: number; // avg points added by a breakthrough this season (0 if none)
  breakthroughHof: boolean; // HoF only because of the breakthrough
  twist: string | null;
  starChanged: boolean;
}

export interface ShowRow {
  seed: number;
  strategy: string;
  ipId: string;
  seasons: number;
  end: "running" | "score" | "voluntary";
  bestSeason: number;
  bestAvg: number;
  worstSeason: number;
  worstAvg: number;
}

const prodWeeks = (cfg: Config, r: Release) => Math.round(cfg.tv.durationBaseWeeks + cfg.tv.weeksPerEpisode * (r.episodes ?? 0));

export function seasonRows(seed: number, strategy: string, s: StudioState, cfg: Config, horizonWeek: number): SeasonRow[] {
  const W = cfg.time.weeksPerYear;
  const out: SeasonRow[] = [];
  const payroll = new Map<number, number>();
  for (const l of s.ledger) if (l.kind === "payroll") payroll.set(l.week, (payroll.get(l.week) ?? 0) - l.amount);
  for (const ip of Object.values(s.ips).filter((i) => i.format === "tv")) {
    const ss = s.releases.filter((r) => r.ipId === ip.id && r.format === "tv" && r.releaseWeek < horizonWeek);
    ss.forEach((r, i) => {
      const prev = ss[i - 1];
      const eps = r.weekly.filter((w) => w.episode !== undefined);
      const lastEp = eps.at(-1)?.viewers ?? 0;
      const prevLast = prev ? (prev.weekly.filter((w) => w.episode !== undefined).at(-1)?.viewers ?? 0) : 0;
      const tr = r.trace as Record<string, unknown>;
      const tv = tr.tv as { showFatigue?: { fatigue: number } | null; twist?: string | null; anticipationUsed?: number } | undefined;
      const vf = tr.viewerFatigue as { mult: number } | undefined;
      const bt = tr.breakthrough as { avgWithout: number } | undefined;
      const fans = tr.ipFans as { before: number; after: number } | undefined;
      const trust = tr.trust as { after: number } | null | undefined;
      const net = r.studioTake + r.surplusKept - r.cashOverrun;
      const pw = prodWeeks(cfg, r);
      const avg = (r.audience + r.critic) / 2;
      out.push({
        seed,
        strategy,
        ipId: ip.id,
        show: ip.name,
        season: i + 1,
        band: bandOf(i + 1),
        week: r.releaseWeek,
        year: Math.floor(r.releaseWeek / W) + 1,
        episodes: r.episodes ?? 0,
        original: r.route === "original",
        premiere: r.openingViewers,
        unique: r.uniqueViewers ?? 0,
        reachCap: r.reachCap,
        closeness: r.reachCap > 0 ? (r.uniqueViewers ?? 0) / r.reachCap : 0,
        trajectory: r.openingViewers > 0 ? lastEp / r.openingViewers : 0,
        returnRate: prev && prevLast > 0 ? r.openingViewers / prevLast : null,
        audience: r.audience,
        critic: r.critic,
        avg,
        hof: r.hallOfFame,
        fansStart: fans?.before ?? null,
        fansEnd: fans?.after ?? null,
        anticipation: tv?.anticipationUsed ?? 0,
        viewerFatigueMult: vf?.mult ?? 1,
        reviewFatigue: tv?.showFatigue?.fatigue ?? 0,
        net,
        prodWeeks: pw,
        netPerWeek: net / pw,
        payrollWeek: payroll.get(r.releaseWeek) ?? 0,
        trustAfter: trust ? trust.after : null,
        renewable: r.avgScore >= cfg.tv.renewalThreshold,
        breakthrough: bt ? r.avgScore - bt.avgWithout : 0,
        breakthroughHof: !!bt && r.hallOfFame && !isHallOfFame(bt.avgWithout, cfg),
        twist: tv?.twist ?? null,
        starChanged: !!prev && !!r.starId && prev.starId !== r.starId,
      });
    });
  }
  return out;
}

/** How each show ended by the horizon. "voluntary" = still renewable, not renewed, and at least a year passed since it aired. */
export function showRows(seed: number, strategy: string, rows: SeasonRow[], s: StudioState, horizonWeek: number): ShowRow[] {
  const byIp = new Map<string, SeasonRow[]>();
  for (const r of rows) byIp.set(r.ipId, [...(byIp.get(r.ipId) ?? []), r]);
  const out: ShowRow[] = [];
  for (const [ipId, ss] of byIp) {
    const last = ss.at(-1)!;
    const endWeek = s.releases.find((r) => r.ipId === ipId && r.releaseWeek === last.week)?.runEndWeek ?? last.week;
    const idle = horizonWeek - endWeek;
    const end = !last.renewable ? "score" : idle >= 52 ? "voluntary" : "running";
    const best = [...ss].sort((a, b) => b.avg - a.avg)[0];
    const worst = [...ss].sort((a, b) => a.avg - b.avg)[0];
    out.push({ seed, strategy, ipId, seasons: ss.length, end, bestSeason: best.season, bestAvg: best.avg, worstSeason: worst.season, worstAvg: worst.avg });
  }
  return out;
}

/**
 * A genuine late comeback (season >= 7): the two previous seasons sat >= 1.0 below the show's earlier peak,
 * and this season gains >= 1.0 over the better of them and reaches >= 7.0. A FAILED attempt: same slump,
 * the studio changed something (twist, new Star, or a breakthrough happened) and the season gained < 0.5.
 */
export function comebacks(rows: SeasonRow[]): { comebacks: SeasonRow[]; failed: SeasonRow[]; slumps: number } {
  const byIp = new Map<string, SeasonRow[]>();
  for (const r of rows) byIp.set(`${r.seed}|${r.strategy}|${r.ipId}`, [...(byIp.get(`${r.seed}|${r.strategy}|${r.ipId}`) ?? []), r]);
  const cb: SeasonRow[] = [];
  const failed: SeasonRow[] = [];
  let slumps = 0;
  for (const ss of byIp.values())
    for (let j = 6; j < ss.length; j++) {
      const peak = Math.max(...ss.slice(0, j - 2).map((r) => r.avg));
      const a = ss[j - 2].avg, b = ss[j - 1].avg;
      if (!(a <= peak - 1 && b <= peak - 1)) continue;
      slumps++;
      const gain = ss[j].avg - Math.max(a, b);
      if (gain >= 1 && ss[j].avg >= 7) cb.push(ss[j]);
      else if (gain < 0.5 && (ss[j].twist || ss[j].starChanged || ss[j].breakthrough > 0)) failed.push(ss[j]);
    }
  return { comebacks: cb, failed, slumps };
}
