// Star fit + studio genre-XP worth: worked examples for a DESIGN DECISION (PROD-026 / PROD-051). Nothing here
// changes a default. Pure recomputation of the published score formula on real releases (no re-simulation).
//   npx tsx scripts/star-xp-plan.ts → reports/star-xp/plan-data.md
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { legacyConfig, withOverrides } from "../src/core/config";
import { runCareer } from "../src/batch/runner";
import { avgScore, computeScores } from "../src/core/scoring";
import { formatSpec, formatOf } from "../src/core/formats";
import { METERS, type Grade, type Meter, type Release } from "../src/core/types";

const Q = withOverrides(legacyConfig(), JSON.parse(readFileSync("config/gate4q.json", "utf8")));
const W0 = Q.production.starFilmingWeight; // 0.11
const B0 = Q.studioGenre.qualityBonusPerLevel; // 0.03

type QT = { meterPoints: Record<Meter, number>; starPoints: number; starFit: number; genreLevel: number; genreBonus: number; eraBar: number; score: ReturnType<typeof computeScores> };

/** avg score for a release with Star fit `fit`, Star weight `w`, studio genre level `lvl` at `perLvl` bonus/level */
function rescore(rel: Release, opt: { fit?: number; w?: number; lvl?: number; perLvl?: number }) {
  const q = rel.trace.quality as QT;
  const sc = q.score;
  const dur = formatSpec(Q, formatOf(rel), rel.episodes).durationWeeks;
  const filmWeeks = Math.round(dur * 0.4); // filming phase = 40%..80% of production
  const b = opt.lvl === undefined ? q.genreBonus : opt.lvl * (opt.perLvl ?? B0);
  const staff = Object.fromEntries(METERS.map((m) => [m, (q.meterPoints[m] / (1 + q.genreBonus)) * (1 + b)])) as Record<Meter, number>;
  const fit = opt.fit ?? q.starFit;
  const star = (opt.w ?? W0) * fit * filmWeeks * (1 + b);
  const meters = Object.fromEntries(METERS.map((m) => {
    const p = staff[m] + (m === "filming" ? star : 0);
    const half = (Q.production.meterHalfPointPerWeek as Record<Meter, number>)[m] * dur * q.eraBar;
    return [m, Math.round((10000 * p) / (p + half)) / 100];
  })) as Record<Meter, number>;
  const g = { audience: sc.comboAudience as Grade, critic: sc.comboCritic as Grade };
  const r = computeScores(meters, g, Math.round((1 - sc.fatigueMult) * 100) / 100, sc.saturationMult < 1, Q, sc.expectations);
  return { avg: avgScore(r.audience, r.critic), filming: meters.filming };
}

// sample: finished movies from balanced / quality-first careers
const rookies: Release[] = [], vets: Release[] = [];
for (const st of ["balanced", "quality-first"])
  for (let seed = 1; seed <= 8; seed++) {
    const s = runCareer(seed, st, Q, { productions: 0, years: 10 }).state;
    const movies = s.releases.filter((r) => formatOf(r) === "movie" && r.trace?.quality);
    movies.slice(0, 3).forEach((r) => rookies.push(r));
    movies.filter((r) => r.releaseWeek >= 6 * 52).forEach((r) => vets.push(r));
  }
const med = (xs: number[]) => {
  const s = [...xs].sort((a, b) => a - b);
  return s[Math.floor((s.length - 1) / 2)];
};
const d = (rs: Release[], a: Parameters<typeof rescore>[1], b: Parameters<typeof rescore>[1]) => med(rs.map((r) => rescore(r, a).avg - rescore(r, b).avg)).toFixed(2);

const L = ["# Star fit + genre XP: what they are worth today, and what each option would do", "", `Quality candidate \`config/gate4q.json\`; ${rookies.length} rookie movies (each studio's first 3) and ${vets.length} veteran movies (year 6+) from balanced/quality-first careers, seeds 1–8. Every number is the **median change in average score** (0–10) from a pure recompute of the score formula. Current knobs: \`production.starFilmingWeight\` ${W0}, \`studioGenre.qualityBonusPerLevel\` ${B0} (levels at 1/3/6/10/15 releases of that exact genre).`, ""];

L.push("## 1. Star: fit 80 vs fit 0 (same film, same crew)", "", "| Star weight | Rookie Δavg | Veteran Δavg | Rookie Filming meter 0 → 80-fit |", "|---|---|---|---|");
for (const w of [W0, W0 * 2, W0 * 3, W0 * 4]) {
  const ex = rookies[0];
  L.push(`| ${w.toFixed(2)}${w === W0 ? " (today)" : ` (×${Math.round(w / W0)})`} | +${d(rookies, { fit: 80, w }, { fit: 0, w })} | +${d(vets, { fit: 80, w }, { fit: 0, w })} | ${rescore(ex, { fit: 0, w }).filming} → ${rescore(ex, { fit: 80, w }).filming} |`);
}
L.push("", "## 2. Studio genre XP: level 5 vs level 0 (same film, same crew, same Star)", "", "| Bonus per level | Level-5 bonus | Rookie Δavg | Veteran Δavg |", "|---|---|---|---|");
for (const p of [B0, 0.05, 0.08, 0.12]) L.push(`| ${p}${p === B0 ? " (today)" : ""} | +${Math.round(p * 500)}% work points | +${d(rookies, { lvl: 5, perLvl: p }, { lvl: 0, perLvl: p })} | +${d(vets, { lvl: 5, perLvl: p }, { lvl: 0, perLvl: p })} |`);

L.push("", "## 3. Worked examples (real releases)", "");
for (const [label, r] of [["Rookie", rookies[0]], ["Veteran", vets[Math.floor(vets.length / 2)]]] as const) {
  const q = r.trace.quality as QT;
  L.push(`### ${label}: “${r.title}” (${r.genre} + ${r.theme}), published avg ${r.avgScore}, actual Star fit ${q.starFit}, studio ${r.genre} level ${q.genreLevel}`, "", "| Setup | fit 0 | fit 50 | fit 80 | fit 100 |", "|---|---|---|---|---|");
  for (const w of [W0, W0 * 2, W0 * 3]) L.push(`| Star weight ${w.toFixed(2)}, level 0 | ${[0, 50, 80, 100].map((f) => rescore(r, { fit: f, w, lvl: 0 }).avg).join(" | ")} |`);
  for (const p of [B0, 0.08]) L.push(`| Star weight ${W0}, level 5 @ ${p}/level | ${[0, 50, 80, 100].map((f) => rescore(r, { fit: f, lvl: 5, perLvl: p }).avg).join(" | ")} |`);
  L.push("");
}
mkdirSync("reports/star-xp", { recursive: true });
writeFileSync("reports/star-xp/plan-data.md", L.join("\n") + "\n");
console.log(L.join("\n"));
