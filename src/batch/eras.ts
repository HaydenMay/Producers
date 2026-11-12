// Gate 2.6 fixed-quality cases: the SAME production (same raw meter points, combo grades, no fatigue, no
// saturation, same duration) scored at different in-game years under each expectation variant. This isolates
// rising standards from staff growth, Stars, headcount, fatigue and strategy. Illustration, not a target.
import type { Config } from "../core/config";
import { withOverrides } from "../core/config";
import { avgScore, computeScores, expectationsAt, isHallOfFame, meterQuality } from "../core/scoring";
import { METERS, type Grade, type Meter, type Project, type StudioState } from "../core/types";

export interface FixedCase {
  id: string;
  label: string;
  /** meters this production would reach at year 0 (raw points are back-solved from these and then held fixed) */
  metersAtYear0: Record<Meter, number>;
  grades: { audience: Grade; critic: Grade };
}

export const FIXED_CASES: FixedCase[] = [
  { id: "solid", label: "Solid early-career film (~7 at year 0)", metersAtYear0: { plot: 68, writing: 68, filming: 68, editing: 68 }, grades: { audience: "B", critic: "B" } },
  { id: "strong8", label: "Strong early-career film (~8 at year 0)", metersAtYear0: { plot: 77, writing: 77, filming: 77, editing: 77 }, grades: { audience: "B", critic: "B" } },
  { id: "excellent", label: "Excellent film (~9.3 at year 0, B combo)", metersAtYear0: { plot: 88, writing: 88, filming: 88, editing: 88 }, grades: { audience: "B", critic: "B" } },
  { id: "masterpiece", label: "Masterpiece (near-max meters, A combo)", metersAtYear0: { plot: 95, writing: 95, filming: 95, editing: 95 }, grades: { audience: "A", critic: "A" } },
];

export const FIXED_YEARS = [0, 3, 6, 9, 12, 15, 18, 24, 30, 36];

function pointsFor(c: FixedCase, cfg: Config): Record<Meter, number> {
  const out = {} as Record<Meter, number>;
  const dur = cfg.production.movie.durationWeeks;
  for (const m of METERS) {
    const half = (cfg.production.meterHalfPointPerWeek as Record<Meter, number>)[m] * dur; // era bar 1.0 at year 0
    const q = c.metersAtYear0[m];
    out[m] = (q * half) / (100 - q);
  }
  return out;
}

export interface FixedPoint {
  year: number;
  meters: Record<Meter, number>;
  audienceRaw: number;
  criticRaw: number;
  audience: number;
  critic: number;
  avg: number;
  hof: boolean;
  criticGeneration: number;
  audienceEra: number;
}

export function scoreFixed(c: FixedCase, cfg: Config, year: number): FixedPoint {
  const week = Math.round(year * cfg.time.weeksPerYear);
  const project = { meterPoints: pointsFor(c, cfg), starPoints: 0, durationWeeks: cfg.production.movie.durationWeeks } as unknown as Project;
  const meters = meterQuality(project, { week } as StudioState, cfg);
  const ex = expectationsAt(week, cfg);
  const sc = computeScores(meters, c.grades, 0, false, cfg, ex);
  const avg = avgScore(sc.audience, sc.critic);
  return { year, meters, audienceRaw: sc.audienceRaw, criticRaw: sc.criticRaw, audience: sc.audience, critic: sc.critic, avg, hof: isHallOfFame(avg, cfg), criticGeneration: ex.criticGeneration, audienceEra: ex.audienceEra };
}

export function fixedReport(base: Config, variants: { name: string; overrides: Record<string, unknown> }[]): { md: string; json: unknown } {
  const out: string[] = [];
  const json: Record<string, Record<string, FixedPoint[]>> = {};
  out.push("# Fixed-quality cases: same production, different eras (Gate 2.6)", "");
  out.push("> **Illustration, not a target.** Each case holds the raw meter points, combo grades, duration and Star contribution fixed (no fatigue, theme not saturated). Only the calendar year changes, so differences come from the expectation rules alone: the existing era bar (applied to meter normalization, both sides) plus the optional critic-generation and audience-era proxies (applied after combo, before the 0–10 clamp). Cells: Audience / Critic → average (★ = Hall of Fame).", "");
  for (const c of FIXED_CASES) {
    out.push(`## ${c.label}`, "", `Year-0 meters ${JSON.stringify(c.metersAtYear0)}, combo ${c.grades.audience}/${c.grades.critic}.`, "");
    out.push(`| Variant | ${FIXED_YEARS.map((y) => `yr ${y}`).join(" | ")} |`);
    out.push(`|---|${FIXED_YEARS.map(() => "---").join("|")}|`);
    json[c.id] = {};
    for (const v of variants) {
      const cfg = withOverrides(base, v.overrides);
      const pts = FIXED_YEARS.map((y) => scoreFixed(c, cfg, y));
      json[c.id][v.name] = pts;
      out.push(`| ${v.name} | ${pts.map((p) => `${p.audience.toFixed(2)} / ${p.critic.toFixed(2)} → **${p.avg.toFixed(2)}**${p.hof ? "★" : ""}`).join(" | ")} |`);
    }
    out.push("");
  }
  out.push("## Representative trace", "");
  const c = FIXED_CASES[1];
  const withEx = variants.filter((x) => "expectations" in x.overrides);
  const pick = [variants[0], ...withEx.filter((x) => JSON.stringify(x.overrides).includes('"audience"') && JSON.stringify(x.overrides).includes('"critics"')).slice(0, 1)];
  for (const v of pick) {
    const cfg = withOverrides(base, v.overrides);
    const p = scoreFixed(c, cfg, 18);
    const ex = expectationsAt(18 * cfg.time.weeksPerYear, cfg);
    out.push(`- **${v.name}**, "${c.label}" at year 18: raw points fixed → meters ${JSON.stringify(p.meters)} (era bar) → after combo/weakness: Audience ${p.audienceRaw} / Critic ${p.criticRaw} → critic generation ${ex.criticGeneration} (−${(ex.criticToughness * 100).toFixed(1)}%), audience era ${ex.audienceEra} (−${(ex.audienceToughness * 100).toFixed(1)}%) → final Audience ${p.audience} / Critic ${p.critic} → avg ${p.avg}${p.hof ? " (Hall of Fame)" : ""}`);
  }
  out.push("");
  return { md: out.join("\n"), json };
}
