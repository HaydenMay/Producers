// Career length (PROD-013, designer 2026-11-11): a FIXED career that ends by years or by number of productions
// (chosen at game start), then a recap and "keep playing?". Only when cfg.career.enabled; legacy has no end.
import type { Config } from "./config";
import { emit } from "./events";
import { formatOf } from "./formats";
import type { StudioState } from "./types";

type CareerCfg = { enabled?: boolean; mode: "years" | "productions"; years: number; productions: number; legacyScore: { prestige: number; hallOfFame: number; cashPer: number; hallOfFameFormatWeight?: Record<string, number> } };
export const careerCfg = (cfg: Config) => (cfg as unknown as { career?: CareerCfg }).career;

/** The career's end is due at the next planning stop once the limit is reached (an in-flight production finishes first). */
export function careerEndDue(state: StudioState, cfg: Config): boolean {
  const c = careerCfg(cfg);
  if (!c?.enabled || state.careerEnd) return false;
  return c.mode === "productions" ? state.counters.productionsCompleted >= c.productions : state.week >= c.years * cfg.time.weeksPerYear;
}

/** Recap shown at the end (pure read). */
export function careerRecap(state: StudioState, cfg: Config) {
  const c = careerCfg(cfg)!;
  const rel = state.releases;
  const byFormat: Record<string, number> = {};
  for (const r of rel) byFormat[formatOf(r)] = (byFormat[formatOf(r)] ?? 0) + 1;
  const best = [...rel].sort((a, b) => b.avgScore - a.avgScore)[0];
  const biggest = [...rel].sort((a, b) => (b.totalViewers ?? 0) - (a.totalViewers ?? 0))[0];
  // Audit 2026-11-12: each release's own Hall of Fame flag (never a hard-coded 9.0). Legacy scores +hallOfFame once
  // per TITLE: a TV show counts once however many seasons make it (Claude's call); sequels count separately.
  const hof = rel.filter((r) => r.hallOfFame);
  // Format balance 2026-11-12 (Claude's call): a title's Hall of Fame weight by format (a 12-week limited series counts
  // half a 30-week movie, like Star XP in PROD-221); missing weight = 1.
  const titles = new Map<string, number>();
  for (const r of hof) titles.set(formatOf(r) === "tv" ? `show:${r.ipId}` : r.id, c.legacyScore.hallOfFameFormatWeight?.[formatOf(r)] ?? 1);
  const hofTitles = [...titles.values()].reduce((a, w) => a + w, 0);
  const shows = Object.values(state.ips).filter((ip) => formatOf(ip) === "tv");
  const longest = shows.map((ip) => ({ name: ip.name, seasons: rel.filter((r) => r.ipId === ip.id).length })).sort((a, b) => b.seasons - a.seasons)[0];
  const stars = state.hiredStarIds.map((id) => state.stars[id]).sort((a, b) => b.credits.length - a.credits.length);
  const legacy = Math.round(state.prestige * c.legacyScore.prestige + hofTitles * c.legacyScore.hallOfFame + Math.max(0, state.cash) / c.legacyScore.cashPer);
  return {
    years: Math.round((state.week / cfg.time.weeksPerYear) * 10) / 10,
    releases: rel.length,
    byFormat,
    hallOfFame: hof.map((r) => r.title),
    best: best ? { title: best.title, avg: best.avgScore, combo: `${best.genre} + ${best.theme}` } : null,
    biggest: biggest ? { title: biggest.title, viewers: biggest.totalViewers } : null,
    longestShow: longest && longest.seasons > 1 ? longest : null,
    favoriteStar: stars[0] ? { name: stars[0].name, films: stars[0].credits.length } : null,
    genresOpened: state.unlockedGenres.length,
    themesOpened: state.unlockedThemes.length,
    prestige: state.prestige,
    cash: Math.round(state.cash),
    streaming: state.platform?.status === "live" ? { subscribers: state.platform.subscribers } : null,
    legacyScore: legacy,
  };
}

export function markCareerEnd(state: StudioState, cfg: Config): void {
  const r = careerRecap(state, cfg);
  state.careerEnd = { week: state.week, decided: null, legacyScore: r.legacyScore };
  emit(state, "career_end", `Your career is complete after ${r.years} years and ${r.releases} releases. Legacy score ${r.legacyScore.toLocaleString()}. Keep running the studio, or retire?`, { recap: r });
}
