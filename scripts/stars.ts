// Stars rework fast loop (PROD-213…218). Shipped default config; a few policies × seeds × 10 years.
//   npx tsx scripts/stars.ts [--seeds 6] [--years 10]   → reports/stars/summary.md
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { baselineConfig, withOverrides } from "../src/core/config";
import { runCareer } from "../src/batch/runner";
import { checkInvariants } from "../src/batch/diagnostics";
import { createStudio } from "../src/core/simulation";
import { tierOf } from "../src/core/talent";
import type { Star, StarCard, StudioState } from "../src/core/types";

const arg = (k: string, d: number) => {
  const i = process.argv.indexOf(`--${k}`);
  return i > 0 ? Number(process.argv[i + 1]) : d;
};
const seeds = arg("seeds", 6), years = arg("years", 10);
const cfg = baselineConfig();
const ladder = withOverrides(cfg, JSON.parse(readFileSync("config/gate3.json", "utf8"))); // 4/6/8 ladder + Gate 3 agent rules (they buy upgrades)
const POLICIES = ["balanced", "quality-first", "franchise-builder", "famous-star", "cheap-duds"];
const avg = (xs: number[]) => (xs.length ? xs.reduce((a, b) => a + b, 0) / xs.length : NaN);
const f1 = (x: number) => (Number.isNaN(x) ? "—" : x.toFixed(1));
const t0 = Date.now();
const L: string[] = ["# Stars rework smoke (PROD-213…218)", "", `Shipped default (\`config/baseline.json\`), seeds 1–${seeds}, ${years}-year careers. TEST VALUES throughout.`, ""];

// 1. the pool at creation
const s0 = createStudio(1, cfg);
const pool0 = Object.values(s0.stars);
const byYears = (lo: number, hi: number) => pool0.filter((s) => (s.yearsActive ?? 0) >= lo && (s.yearsActive ?? 0) <= hi);
L.push("## 1. Pool at game creation (seed 1)", "", `${pool0.length} Stars. Tiers by Fame: ${(["newcomer", "mid", "big"] as const).map((t) => `${t} ${pool0.filter((s) => tierOf(s, cfg) === t).length}`).join(" · ")}.`, "", "| Years active | Stars | Avg Fame | Avg Level |", "|---|---|---|---|");
for (const [lo, hi] of [[0, 2], [3, 6], [7, 10], [11, 15], [16, 20]]) {
  const g = byYears(lo, hi);
  L.push(`| ${lo}–${hi} | ${g.length} | ${f1(avg(g.map((s) => s.fame)))} | ${f1(avg(g.map((s) => s.level)))} |`);
}

// 2. careers
type Row = { films: number; hired: number; seenAgain: number; leadOffered: number; leadCast: number; catalogYear: number | null; retiredTotal: number; retiredHired: number; perfect: number; perfectCast: number; violations: number };
const rows: Record<string, Row[]> = {};
const newcomerFit: number[] = [];
let fallbackSeen = 0;
let endState: StudioState | null = null;
for (const st of POLICIES)
  for (let seed = 1; seed <= seeds; seed++) {
    const r = runCareer(seed, st, cfg, { productions: 0, years });
    const s = r.state;
    if (st === "balanced" && seed === 1) endState = s;
    const seen: Record<string, number> = {};
    let leadOffered = 0, leadCast = 0, perfect = 0, perfectCast = 0;
    for (const rel of s.releases) {
      const cards = (rel.trace.auditionCards as StarCard[]) ?? [];
      const fam = cfg.world.genres[rel.genre as keyof typeof cfg.world.genres];
      for (const c of cards) {
        seen[c.starId] = (seen[c.starId] ?? 0) + 1;
        if (c.source === "original_lead") {
          leadOffered++;
          if (rel.starId === c.starId) leadCast++;
        }
        if (c.perfectFit) {
          perfect++;
          if (rel.starId === c.starId) perfectCast++;
        }
        if (c.fallbackInserted) fallbackSeen++;
        if (c.source === "audition" && !c.fallbackInserted && tierOf(s.stars[c.starId], cfg) === "newcomer") newcomerFit.push(s.stars[c.starId].skills[fam] ?? 0);
      }
    }
    const unlock = s.events.find((e) => e.type === "catalog");
    const stars = Object.values(s.stars);
    (rows[st] ??= []).push({
      films: s.releases.length,
      hired: s.hiredStarIds.length,
      seenAgain: Object.values(seen).filter((v) => v > 1).length,
      leadOffered,
      leadCast,
      catalogYear: unlock ? unlock.week / cfg.time.weeksPerYear : null,
      retiredTotal: stars.filter((x) => x.retired).length,
      retiredHired: s.hiredStarIds.filter((id) => s.stars[id].retired).length,
      perfect,
      perfectCast,
      violations: checkInvariants(r, cfg).length,
    });
  }
{
  const s10 = runCareer(1, "balanced", cfg, { productions: 0, years }).state;
  const act = Object.values(s10.stars).filter((x) => !x.retired);
  L.push("", `Seed 1 after ${years} years (balanced): ${Object.keys(s10.stars).length} Stars ever, ${act.length} still working. Tiers: ${(["newcomer", "mid", "big"] as const).map((t) => `${t} ${act.filter((x) => tierOf(x, cfg) === t).length}`).join(" · ")}.`);
}
L.push("", "## 2. Careers (medians would hide little here; these are means per career)", "", "| Policy | Films | Hired | Stars seen at 2+ auditions | Original-lead cards (cast) | Catalog unlock year | Retired (of yours) | Perfect-fit flags (cast) | Invariant violations |", "|---|---|---|---|---|---|---|---|---|");
for (const st of POLICIES) {
  const R = rows[st];
  const m = (k: keyof Row) => f1(avg(R.map((x) => (x[k] as number) ?? NaN)));
  const unl = R.filter((x) => x.catalogYear !== null);
  L.push(`| ${st} | ${m("films")} | ${m("hired")} | ${m("seenAgain")} | ${m("leadOffered")} (${m("leadCast")}) | ${unl.length ? `${f1(avg(unl.map((x) => x.catalogYear!)))} (${unl.length}/${R.length} careers)` : "never"} | ${m("retiredTotal")} (${m("retiredHired")}) | ${m("perfect")} (${m("perfectCast")}) | ${R.reduce((a, x) => a + x.violations, 0)} |`);
}
L.push("", "Catalog unlock: the default config has no staff-capacity ladder, so it opens at 200 Prestige (the gate3 ladder's first-step Prestige).");

// 3. catalog unlock with a real ladder
const lad = ["balanced", "quality-first", "mixed", "tv-first"].map((st) => {
  const ys: number[] = [];
  for (let seed = 1; seed <= seeds; seed++) {
    const s = runCareer(seed, st, ladder, { productions: 0, years }).state;
    const e = s.events.find((x) => x.type === "catalog");
    if (e) ys.push(e.week / 52);
  }
  return `${st} ${ys.length ? `year ${f1(avg(ys))} (${ys.length}/${seeds})` : "never"}`;
});
L.push("", "## 3. Catalog unlock with a real 4/6/8 staff ladder (`config/gate3.json` on the default)", "", lad.join(" · "));

// 4. growth: two Stars from the same template differ; level-ups follow the hidden weights
const s1 = createStudio(3, cfg);
const byT: Record<string, Star[]> = {};
for (const s of Object.values(s1.stars)) (byT[s.growthTemplate!] ??= []).push(s);
L.push("", "## 4. Hidden growth weights (seed 3 pool): same template, different Stars", "", "| Template | Star | Growth weights (hidden) | Skills |", "|---|---|---|---|");
for (const t of ["scary_funny", "funny_romantic", "specialist"]) for (const s of (byT[t] ?? []).slice(0, 2)) L.push(`| ${t} | ${s.name} (L${s.level}) | ${Object.entries(s.growthWeights!).map(([f, w]) => `${f} ${Math.round(w * 100)}%`).join(", ")} | ${Object.entries(s.skills).map(([f, v]) => `${f} ${v}`).join(", ")} |`);

// 5. fallback vs a paid newcomer
L.push("", "## 5. Free fallback vs paid newcomers", "", `Average paid newcomer audition card, skill in the production's family: **${f1(avg(newcomerFit))}** (n ${newcomerFit.length}). Free fallback: **${cfg.stars.pool.fallback.focusSkill}** in the family, ${cfg.stars.pool.fallback.otherSkill} elsewhere. Fallback cards shown in these careers: ${fallbackSeen}.`);

// 6. a catalog snapshot
if (endState) {
  const s = endState;
  L.push("", `## 6. Catalog snapshot: balanced seed 1 at year ${years}`, "", "| Star | Status | Films with you | Years active | Fame | Level | Best family |", "|---|---|---|---|---|---|---|");
  for (const id of s.hiredStarIds) {
    const st = s.stars[id];
    const best = Object.entries(st.skills).sort((a, b) => b[1] - a[1])[0];
    L.push(`| ${st.name} | ${st.retired ? "retired" : "active"} | ${st.credits.length} | ${st.yearsActive} | ${Math.round(st.fame)} | ${st.level} | ${best[0]} ${best[1]} |`);
  }
}
L.push("", `Elapsed ${((Date.now() - t0) / 1000).toFixed(1)} s.`);
mkdirSync("reports/stars", { recursive: true });
writeFileSync("reports/stars/summary.md", L.join("\n") + "\n");
console.log(L.join("\n"));
