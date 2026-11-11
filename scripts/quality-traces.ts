// Gate 4Q: full scoring attribution + money for a few representative releases (candidate config/gate4q.json).
//   npx tsx scripts/quality-traces.ts   → reports/gate4q/traces.md
// Each release is reproduced from its seed under normal rules; counterfactuals are pure recomputations of the
// published score formula with one input removed (no re-simulation, so nothing else moves).
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { baselineConfig, withOverrides, type Config } from "../src/core/config";
import { runCareer } from "../src/batch/runner";
import { releaseAccounts } from "../src/batch/econ";
import { PAIRS, rookie } from "../src/batch/qualitydiag";
import { avgScore, computeScores } from "../src/core/scoring";
import { formatSpec, formatOf } from "../src/core/formats";
import { editorialGrades } from "../src/core/progression";
import { METERS, type Grade, type Meter, type Release, type StudioState } from "../src/core/types";

const Q = withOverrides(baselineConfig(), JSON.parse(readFileSync("config/gate4q.json", "utf8")));
const $ = (x: number) => `${x < 0 ? "−" : ""}$${Math.abs(Math.round(x)).toLocaleString()}`;

function attribution(s: StudioState, cfg: Config, rel: Release, label: string, why: string): string[] {
  const q = rel.trace.quality as { meterPoints: Record<Meter, number>; starPoints: number; starFit: number; genreLevel: number; genreBonus: number; eraBar: number; score: ReturnType<typeof computeScores> };
  const sc = q.score;
  const dur = formatSpec(cfg, formatOf(rel), rel.episodes).durationWeeks;
  const meters = (pts: Record<Meter, number>, star: number) => Object.fromEntries(METERS.map((m) => {
    const p = pts[m] + (m === "filming" ? star : 0);
    const half = (cfg.production.meterHalfPointPerWeek as Record<Meter, number>)[m] * dur * q.eraBar;
    return [m, Math.round((10000 * p) / (p + half)) / 100];
  })) as Record<Meter, number>;
  const fat = Math.round((1 - sc.fatigueMult) * 100) / 100;
  const score = (m: Record<Meter, number>, g: { audience: Grade; critic: Grade }) => {
    const r = computeScores(m, g, fat, sc.saturationMult < 1, cfg, sc.expectations);
    return { a: r.audience, c: r.critic, avg: avgScore(r.audience, r.critic) };
  };
  const grades = { audience: sc.comboAudience, critic: sc.comboCritic };
  const real = score(sc.meters, grades);
  const noStar = score(meters(q.meterPoints, 0), grades);
  const noXp = score(meters(Object.fromEntries(METERS.map((m) => [m, q.meterPoints[m] / (1 + q.genreBonus)])) as Record<Meter, number>, q.starPoints / (1 + q.genreBonus)), grades);
  const neutral = score(sc.meters, { audience: "C", critic: "C" });
  const ed = editorialGrades(s.seed, cfg, rel.genre, rel.theme);
  const cult = rel.trace.cult as { happened: boolean; tier: string; baselineAudience: Grade; effectiveAudience: Grade; chance: number; draw: number; craft: number; reasons: string[]; audienceWithout: number } | undefined;
  const acc = releaseAccounts(s, cfg).find((a) => a.id === rel.id)!;
  const star = rel.starId ? s.stars[rel.starId] : null;
  const L = [
    `## ${label}: “${rel.title}” (${rel.genre} + ${rel.theme})`,
    "",
    `*${why}*`,
    "",
    `- **Published:** Audience **${rel.audience}** / Critics **${rel.critic}** → **${rel.avgScore}**${rel.hallOfFame ? " (Hall of Fame)" : ""}.`,
    `- **Meters (0–100):** plot ${sc.meters.plot} · writing ${sc.meters.writing} · filming ${sc.meters.filming} (incl. Star) · editing ${sc.meters.editing}. Base before pairing: audience ${sc.audienceBase}, critics ${sc.criticBase}${sc.weakMeters.length ? `; weak-meter penalty on ${sc.weakMeters.map((w) => w.meter).join(", ")}` : ""}.`,
    `- **Pairing:** matrix baseline ${ed.baseline.audience}/${ed.baseline.critic}${ed.shifted ? `, this world's variation → ${ed.audience}/${ed.critic}` : " (no world variation for this pair)"}; scored with ${sc.comboAudience} (×${sc.comboAudienceMult}) / ${sc.comboCritic} (×${sc.comboCriticMult}).${cult ? ` Cult check: chance ${cult.chance}, draw ${cult.draw}, craft ${cult.craft} → ${cult.happened ? `**UNEXPECTED CULT APPEAL (${cult.tier})**: audience grade ${cult.baselineAudience} → ${cult.effectiveAudience} for this title only (audience ${cult.audienceWithout} → ${rel.audience}); critics unchanged; reasons: ${cult.reasons.join("; ")}` : "no event"}.` : ""}`,
    `- **Star:** ${star ? `${star.name} (level ${star.level}, Fame ${Math.round(star.fame)}), ${Object.entries(star.skills).map(([k, v]) => `${k} ${v}`).join(", ")} → family fit for ${rel.genre} (${cfg.world.genres[rel.genre as keyof typeof cfg.world.genres]}) = **${q.starFit}**, +${Math.round(q.starPoints)} filming points` : "none"}.`,
    `- **Studio exact-genre XP:** ${rel.genre} level ${q.genreLevel} → +${Math.round(q.genreBonus * 100)}% work points. Fatigue ${Math.round(fat * 100)}%${sc.saturationMult < 1 ? ", saturated theme" : ""}${sc.expectations.criticToughness ? `, critic era ${sc.expectations.criticToughness}` : ""}.`,
    "",
    "| Counterfactual (one input removed, same formula) | Audience | Critics | Avg | Δ avg |",
    "|---|---|---|---|---|",
    `| As released | ${real.a} | ${real.c} | ${real.avg} | — |`,
    `| No Star filming points | ${noStar.a} | ${noStar.c} | ${noStar.avg} | ${(noStar.avg - real.avg).toFixed(2)} |`,
    `| No studio genre-XP bonus | ${noXp.a} | ${noXp.c} | ${noXp.avg} | ${(noXp.avg - real.avg).toFixed(2)} |`,
    `| Neutral pairing (C/C) | ${neutral.a} | ${neutral.c} | ${neutral.avg} | ${(neutral.avg - real.avg).toFixed(2)} |`,
    ...(cult?.happened ? [`| Without the cult event | ${cult.audienceWithout} | ${rel.critic} | ${avgScore(cult.audienceWithout, rel.critic)} | ${(avgScore(cult.audienceWithout, rel.critic) - rel.avgScore).toFixed(2)} |`] : []),
    "",
    `**Money (finished run):** studio direct cost ${$(acc.direct)} (base + Star ${$(rel.starFee ?? 0)}) + payroll/upkeep during production ${$(acc.payrollDuring)}; ${acc.distributorId ? `distributed by ${acc.distributorId} (its own ad spend ${$(acc.adSpend)}, ${Math.round(rel.royalty * 100)}% share)` : "self-distributed"}; opening ${acc.opening.toLocaleString()}, unique viewers ${acc.unique.toLocaleString()} of a ${acc.reachCap.toLocaleString()} reach cap; gross ${$(acc.grossTotal)} → studio ${$(acc.studioGross)} → **all-in ${$(acc.allInNet)}**${acc.distributorId ? `; partner net ${$(acc.distNet)}` : ""}.`,
    "",
  ];
  return L;
}

const pickTitle = (s: StudioState, title: string) => s.releases.find((r) => r.title === title)!;
const L: string[] = ["# Gate 4Q representative release traces (candidate `config/gate4q.json`)", "", "Reproduce: `npx tsx scripts/quality-traces.ts`. All five come from the COMPARE run (`reports/gate4q/compare`). Under these unchanged Gate 4 payout formulas a genuinely bad film is **still profitable**; see the findings.", ""];
{
  const s = rookie(12, Q, PAIRS.poor, 5);
  L.push(...attribution(s, Q, s.releases[0], "1. Genuinely bad film (rookie studio, poor pairing)", "Starting two-person studio, first release, cheapest Star, Horror + Sports; seed 12."));
}
{
  const s = rookie(7, Q, PAIRS.natural, 5);
  L.push(...attribution(s, Q, s.releases[1], "2. Ordinary rookie film on a natural pairing", "Same starting studio rules, release 2, Action + Superheroes; seed 7."));
}
{
  const s = runCareer(13, "low-budget-random-combo", Q, { productions: 0, years: 10 }).state;
  L.push(...attribution(s, Q, pickTitle(s, "Hollow Run"), "3. Cheap GOOD film (low budget ≠ low quality)", "low-budget-random-combo studio (2 staff, cheapest Star, no training), seed 13: the same minimum budget as #1, but a natural pairing and a crew that has worked 15 productions."));
}
{
  const s = runCareer(10, "balanced", Q, { productions: 0, years: 10 }).state;
  L.push(...attribution(s, Q, pickTitle(s, "Iron Protocol"), "4. High-scoring film", "balanced studio, seed 10, ~7 years in."));
}
{
  const s = runCareer(5, "quality-first", Q, { productions: 0, years: 10 }).state;
  L.push(...attribution(s, Q, pickTitle(s, "Dead Horizon"), "5. Poor pairing with an unexpected cult audience", "quality-first studio, seed 5, release 4: Horror + Spies (a D/F pairing nobody at the studio had tried) made by a crew good enough to qualify."));
}
mkdirSync("reports/gate4q", { recursive: true });
writeFileSync("reports/gate4q/traces.md", L.join("\n") + "\n");
console.log("reports/gate4q/traces.md");
