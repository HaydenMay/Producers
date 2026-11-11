// Gate 4Q quality diagnostic: ONE focused script (fast). Usage:
//   npx tsx scripts/quality.ts                     # inner loop: 5 seeds, policies 5 years
//   npx tsx scripts/quality.ts --seeds 16 --years 10 --out reports/gate4q/compare
//   --variants old,Q1_editorial,...  --quiet
// Everything runs on the Gate 4 candidate economy (config/gate4.json); only scoring inputs vary.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { baselineConfig, withOverrides, type Config } from "../src/core/config";
import { advanceWeek, applyDecision, createStudio, getChoices } from "../src/core/simulation";
import { runCareer } from "../src/batch/runner";
import { checkInvariants } from "../src/batch/diagnostics";
import { releaseAccounts } from "../src/batch/econ";
import { pickDistribution } from "../src/agents/economy";
import { PAIRS, rookie } from "../src/batch/qualitydiag";
import { starFit } from "../src/core/stars";
import { comboKey } from "../src/core/distribution";
import type { Choices, Decision, PlanDecision, Release, StudioState } from "../src/core/types";

const arg = (k: string) => {
  const i = process.argv.indexOf(`--${k}`);
  return i > 0 ? process.argv[i + 1] : undefined;
};
const seeds = Number(arg("seeds") ?? 5);
const years = Number(arg("years") ?? 5);
const out = arg("out") ?? "reports/gate4q/smoke";
const quiet = process.argv.includes("--quiet");
const G4 = withOverrides(baselineConfig(), JSON.parse(readFileSync("config/gate4.json", "utf8")));
const ED = { world: { compatibility: { mode: "editorial", variation: { enabled: false } } } };
const BOUNDED = { world: { compatibility: { mode: "editorial", variation: { enabled: true } } } };
const SEV = (d: number, f: number) => ({ world: { gradeMultiplier: { A: 1.15, B: 1.06, C: 1.0, D: d, F: f } } });
const CULT = { world: { cult: { enabled: true } } };
const Q4Q = withOverrides(baselineConfig(), JSON.parse(readFileSync("config/gate4q.json", "utf8")));
/** One change at a time, each built on the previous step. */
const VARIANTS: Record<string, { cfg: Config; note: string }> = {
  old: { cfg: G4, note: "Gate 4 candidate as delivered: two independent random grades per pair; D 0.90 / F 0.78" },
  Q1_editorial: { cfg: withOverrides(G4, ED), note: "+ editorial matrix, no world variation (same multipliers)" },
  Q2_bounded: { cfg: withOverrides(G4, BOUNDED), note: "+ bounded variation (20% of sides move one step)" },
  Q3_mild: { cfg: withOverrides(withOverrides(G4, BOUNDED), SEV(0.85, 0.65)), note: "Q2 + D 0.85 / F 0.65" },
  Q3_sev: { cfg: withOverrides(withOverrides(G4, BOUNDED), SEV(0.8, 0.55)), note: "Q2 + D 0.80 / F 0.55" },
  Q3_strong: { cfg: withOverrides(withOverrides(G4, BOUNDED), SEV(0.75, 0.45)), note: "Q2 + D 0.75 / F 0.45" },
  Q4_cult: { cfg: withOverrides(withOverrides(withOverrides(G4, BOUNDED), SEV(0.8, 0.55)), CULT), note: "Q3_sev + rare cult appeal (= config/gate4q.json)" },
  Q4_info_G4levers: { cfg: withOverrides(Q4Q, { audience: { qualityPivot: 6.5, diffusion: { badInterestDecay: 1.0 } } }), note: "INFORMATION ONLY (not proposed here): Q4_cult + the Gate 4 audience levers (word-of-mouth pivot 6.5, bad-reception decay 1.0) to show what real duds would earn" },
};
if (JSON.stringify(VARIANTS.Q4_cult.cfg.world) !== JSON.stringify(Q4Q.world)) throw new Error("Q4_cult must equal config/gate4q.json");
const variants = arg("variants")?.split(",") ?? Object.keys(VARIANTS);
const POLICIES = arg("strategies")?.split(",") ?? ["low-budget-random-combo", "poor-fit-chooser", "balanced", "quality-first"];

// ------------------------------------------------------------------ helpers
const pct = (a: number, b: number) => (b ? `${Math.round((100 * a) / b)}%` : "—");
const qs = (xs: number[], p: number) => {
  if (!xs.length) return NaN;
  const s = [...xs].sort((a, b) => a - b);
  const i = (s.length - 1) * p;
  const lo = Math.floor(i);
  return s[lo] + (s[Math.min(s.length - 1, lo + 1)] - s[lo]) * (i - lo);
};
const f2 = (x: number) => (Number.isNaN(x) ? "—" : x.toFixed(2));
const $ = (x: number) => (Number.isNaN(x) ? "—" : `${x < 0 ? "−" : ""}$${Math.abs(x) >= 1e6 ? `${(Math.abs(x) / 1e6).toFixed(2)}M` : `${Math.round(Math.abs(x) / 1000)}K`}`);
const bin = (x: number) => (x < 4 ? "0–<4" : x < 6 ? "4–<6" : x < 8 ? "6–<8" : "8–10");
const BINS = ["0–<4", "4–<6", "6–<8", "8–10"];
interface Row {
  variant: string;
  group: string;
  seed: number;
  idx: number;
  rel: Release;
  allIn: number;
  direct: number;
  distNet: number | null;
  distRoi: number | null;
}
const dist = (rows: Row[]) => {
  const a = rows.map((r) => r.rel.avgScore);
  return `${rows.length} | ${f2(Math.min(...a))} | ${f2(qs(a, 0.1))} / ${f2(qs(a, 0.5))} / ${f2(qs(a, 0.9))} | ${f2(a.reduce((x, y) => x + y, 0) / Math.max(1, a.length))} | ${BINS.map((b) => pct(a.filter((x) => bin(x) === b).length, a.length)).join(" | ")}`;
};
const DIST_HEAD = "| N | min | p10 / p50 / p90 | mean | 0–<4 | 4–<6 | 6–<8 | 8–10 |";
const DIST_SEP = "|---|---|---|---|---|---|---|---|";

function accountsFor(s: StudioState, cfg: Config): Map<string, ReturnType<typeof releaseAccounts>[number]> {
  return new Map(releaseAccounts(s, cfg).map((a) => [a.id, a]));
}

/** Experienced: a balanced studio after ~10 years makes ONE extra movie on a pairing, with a chosen Star rule; optional XP wipe. */
function veteranBranch(base: StudioState, cfg: Config, genre: string, theme: string, starRule: "bestFit" | "cheapest", wipeXp: boolean): Release | null {
  const s = structuredClone(base);
  if (wipeXp) s.genreXp[genre] = 0;
  s.ledger.push({ week: s.week, kind: "start_cash", amount: 0, note: "branch" });
  for (let guard = 0; guard < 5000; guard++) {
    const ch = getChoices(s, cfg);
    if (ch.phase === "planning") {
      if (s.releases.some((r) => r.genre === genre && r.theme === theme && r.id.startsWith("branch"))) break;
      const plan = ch.options.find((o): o is PlanDecision => o.type === "plan" && !o.format && o.ipRelation === "new" && o.genre === genre && o.theme === theme && !o.route);
      if (!plan || s.project) return null;
      applyDecision(s, cfg, plan);
      continue;
    }
    if (ch.phase === "casting") {
      const cards = ch.auditionCards!.filter((c) => c.affordable);
      const pick = starRule === "cheapest" ? [...cards].sort((a, b) => a.price - b.price)[0] : [...cards].sort((a, b) => starFit(s.stars[b.starId], genre, cfg) - starFit(s.stars[a.starId], genre, cfg) || a.price - b.price)[0];
      applyDecision(s, cfg, { type: "cast", starId: pick.starId });
    } else if (ch.phase === "distribution") applyDecision(s, cfg, pickDistribution(s, cfg, ch, "value"));
    else if (ch.phase === "marketing") applyDecision(s, cfg, { type: "market", campaign: "none" });
    else if (ch.phase === "contract") advanceWeek(s, cfg);
    else advanceWeek(s, cfg);
    const last = s.releases.at(-1);
    if (last && last.genre === genre && last.theme === theme && !base.releases.some((r) => r.id === last.id)) return last;
  }
  return null;
}

// ------------------------------------------------------------------ run
const t0 = Date.now();
mkdirSync(out, { recursive: true });
const L: string[] = [];
const P = (...x: string[]) => L.push(...x);
const rows: Row[] = [];
let violations = 0;
const timing: Record<string, number> = {};
for (const v of variants) {
  const cfg = VARIANTS[v].cfg;
  const tv = Date.now();
  // A. rookies
  for (const [cls, pairs] of Object.entries(PAIRS))
    for (let seed = 1; seed <= seeds; seed++) {
      const s = rookie(seed, cfg, pairs, 5);
      const acc = accountsFor(s, cfg);
      s.releases.forEach((rel, i) => rows.push({ variant: v, group: `rookie:${cls}`, seed, idx: i, rel, allIn: acc.get(rel.id)!.allInNet, direct: acc.get(rel.id)!.direct, distNet: rel.distributorId ? acc.get(rel.id)!.distNet : null, distRoi: rel.distributorId && rel.adSpend ? rel.distributorTake / rel.adSpend : null }));
    }
  // C. policies
  for (const st of POLICIES)
    for (let seed = 1; seed <= seeds; seed++) {
      const r = runCareer(seed, st, cfg, { productions: 0, years });
      violations += checkInvariants(r, cfg).length;
      const acc = accountsFor(r.state, cfg);
      r.state.releases.filter((x) => !x.format && !x.active).forEach((rel, i) => rows.push({ variant: v, group: `policy:${st}`, seed, idx: i, rel, allIn: acc.get(rel.id)!.allInNet, direct: acc.get(rel.id)!.direct, distNet: rel.distributorId ? acc.get(rel.id)!.distNet : null, distRoi: rel.distributorId && rel.adSpend ? rel.distributorTake / rel.adSpend : null }));
    }
  // B. veterans (one balanced studio per seed after ~8 years, branched)
  for (let seed = 1; seed <= Math.min(seeds, 8); seed++) {
    const base = runCareer(seed, "balanced", cfg, { productions: 0, years: 8 }).state;
    if (base.project || base.contract) {
      // finish what it was doing first, waiting only
      for (let i = 0; i < 400 && (base.project || base.contract); i++) {
        const ch = getChoices(base, cfg);
        if (ch.phase === "casting") applyDecision(base, cfg, { type: "cast", starId: ch.auditionCards!.find((c) => c.affordable)!.starId });
        else if (ch.phase === "distribution") applyDecision(base, cfg, pickDistribution(base, cfg, ch, "value"));
        else if (ch.phase === "marketing") applyDecision(base, cfg, { type: "market", campaign: "none" });
        else advanceWeek(base, cfg);
      }
    }
    for (const [cls, pairs] of Object.entries(PAIRS))
      for (const [g, t] of pairs)
        for (const [rule, wipe] of [["bestFit", false], ["cheapest", false], ["bestFit", true]] as const) {
          const rel = veteranBranch(base, cfg, g, t, rule, wipe);
          if (rel) rows.push({ variant: v, group: `veteran:${cls}:${rule}${wipe ? ":noXP" : ""}`, seed, idx: 0, rel, allIn: NaN, direct: NaN, distNet: null, distRoi: null });
        }
  }
  timing[v] = (Date.now() - tv) / 1000;
  if (!quiet) console.error(`${v}: ${timing[v].toFixed(1)}s`);
}
const total = (Date.now() - t0) / 1000;

// ------------------------------------------------------------------ report
P(`# Gate 4Q quality diagnostic`, "", `Seeds 1–${seeds}; rookie scenarios = first 5 releases of the starting 2-staff studio on fixed pairings; policies = ${years}-year careers (finished movies); veterans = a balanced studio after 8 years making one extra movie (seeds 1–${Math.min(seeds, 8)}). Economy = Gate 4 candidate (studio-funded, 80% bids). **Elapsed ${total.toFixed(1)} s** (${Object.entries(timing).map(([k, x]) => `${k} ${x.toFixed(1)}s`).join(", ")}). Invariant violations in policy careers: **${violations}**.`, "", "| Variant | Change |", "|---|---|", ...variants.map((v) => `| ${v} | ${VARIANTS[v].note} |`), "");
P("## 1. Rookie studio, first five releases (scripted pairings, cheapest Star)", "", `| Variant | Pairings | ${DIST_HEAD.slice(2)}`, `|---|---|${DIST_SEP.slice(1)}`);
for (const cls of Object.keys(PAIRS)) for (const v of variants) P(`| ${v} | ${cls} (${PAIRS[cls].map((p) => p.join("+")).join(", ")}) | ${dist(rows.filter((r) => r.variant === v && r.group === `rookie:${cls}`))} |`);
P("", "## 2. Policies (all finished movies)", "", `| Variant | Policy | ${DIST_HEAD.slice(2)} first-5 mean | Audience mean | Critic mean | |A−C| ≥ 2 |`, `|---|---|${DIST_SEP.slice(1)}---|---|---|---|`);
for (const st of POLICIES)
  for (const v of variants) {
    const rs = rows.filter((r) => r.variant === v && r.group === `policy:${st}`);
    const f5 = rs.filter((r) => r.idx < 5).map((r) => r.rel.avgScore);
    P(`| ${v} | ${st} | ${dist(rs)} | ${f2(f5.reduce((a, b) => a + b, 0) / Math.max(1, f5.length))} | ${f2(rs.reduce((a, r) => a + r.rel.audience, 0) / Math.max(1, rs.length))} | ${f2(rs.reduce((a, r) => a + r.rel.critic, 0) / Math.max(1, rs.length))} | ${pct(rs.filter((r) => Math.abs(r.rel.audience - r.rel.critic) >= 2).length, rs.length)} |`);
  }
P("", "## 3. Experienced studio: isolating crew, Star family fit, studio exact-genre XP and pairing", "", "Mean over seeds; each cell is the SAME veteran studio state making one movie.", "", "| Variant | Pairings | Best-fit Star | Cheapest Star | Best-fit Star, genre XP wiped | Rookie (section 1) |", "|---|---|---|---|---|---|");
const mean = (xs: number[]) => (xs.length ? xs.reduce((a, b) => a + b, 0) / xs.length : NaN);
for (const cls of Object.keys(PAIRS))
  for (const v of variants) {
    const g = (k: string) => rows.filter((r) => r.variant === v && r.group === k).map((r) => r.rel.avgScore);
    const cell = (xs: number[]) => (xs.length ? `${f2(mean(xs))} (min ${f2(Math.min(...xs))}, n ${xs.length})` : "—");
    P(`| ${v} | ${cls} | ${cell(g(`veteran:${cls}:bestFit`))} | ${cell(g(`veteran:${cls}:cheapest`))} | ${cell(g(`veteran:${cls}:bestFit:noXP`))} | ${cell(g(`rookie:${cls}`))} |`);
  }
P("", "## 4. Money by ACTUAL rating bin (movies; rookies + policies; finished runs)", "", "| Variant | Bin | N | Studio loses all-in | Median all-in | Median studio direct cost | Distributed: partner loses | Median partner ROI (share ÷ its ad spend) |", "|---|---|---|---|---|---|---|---|");
for (const v of variants)
  for (const b of BINS) {
    const rs = rows.filter((r) => r.variant === v && !r.group.startsWith("veteran") && bin(r.rel.avgScore) === b && !r.rel.format);
    if (!rs.length) continue;
    const d = rs.filter((r) => r.distNet !== null);
    P(`| ${v} | ${b} | ${rs.length}${rs.length < 10 ? " *small*" : ""} | ${pct(rs.filter((r) => r.allIn < 0).length, rs.length)} | ${$(qs(rs.map((r) => r.allIn), 0.5))} | ${$(qs(rs.map((r) => r.direct), 0.5))} | ${d.length ? pct(d.filter((r) => r.distNet! < 0).length, d.length) : "—"} | ${d.length ? f2(qs(d.filter((r) => r.distRoi !== null).map((r) => r.distRoi!), 0.5)) : "—"} |`);
  }
P("", "## 5. Cult appeal (audience-only exception)", "", "| Variant | Eligible releases (poor audience grade, untried pairing, craft ≥ bar) | Events | lift / breakout | Mean audience change | Critic change | Events by policy |", "|---|---|---|---|---|---|---|");
for (const v of variants) {
  const rs = rows.filter((r) => r.variant === v && r.rel.trace.cult);
  const ev = rs.filter((r) => (r.rel.trace.cult as { happened: boolean }).happened);
  const c = (r: Row) => r.rel.trace.cult as { tier: string; audienceWithout: number };
  P(`| ${v} | ${rs.length} | ${ev.length} | ${ev.filter((r) => c(r).tier === "lift").length} / ${ev.filter((r) => c(r).tier === "breakout").length} | ${ev.length ? `+${f2(mean(ev.map((r) => r.rel.audience - c(r).audienceWithout)))}` : "—"} | 0 by construction | ${[...new Set(ev.map((r) => r.group))].map((gname) => `${gname.replace("policy:", "").replace("rookie:", "rookie ")} ${ev.filter((r) => r.group === gname).length}`).join(", ") || "—"} |`);
}
P("", "## 6. Lowest-scoring releases (reproduce from the seed)", "");
for (const v of variants) {
  const lows = rows.filter((r) => r.variant === v && !r.group.startsWith("veteran")).sort((a, b) => a.rel.avgScore - b.rel.avgScore).slice(0, 4);
  P(`- **${v}**: ${lows.map((r) => `${r.rel.title} ${r.rel.genre}+${r.rel.theme} A ${r.rel.audience}/C ${r.rel.critic} (${r.group}, seed ${r.seed}, release ${r.idx + 1})`).join("; ")}`);
}
writeFileSync(`${out}/summary.md`, L.join("\n") + "\n");
// compact machine-readable rows for traces
writeFileSync(`${out}/releases.json`, JSON.stringify(rows.filter((r) => !r.group.startsWith("veteran")).map((r) => ({ variant: r.variant, group: r.group, seed: r.seed, idx: r.idx, title: r.rel.title, genre: r.rel.genre, theme: r.rel.theme, audience: r.rel.audience, critic: r.rel.critic, avg: r.rel.avgScore, allIn: r.allIn, direct: r.direct, cult: (r.rel.trace.cult as { happened: boolean } | undefined)?.happened ?? false }))));
console.log(`quality: ${rows.length} releases, ${violations} invariant violations, ${total.toFixed(1)} s → ${out}/summary.md`);
void comboKey;
