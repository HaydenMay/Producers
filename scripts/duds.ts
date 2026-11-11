// Dud economics (ledger PROD-092 / PROD-105, next decision 3). Revenue-side experiment ONLY: the quality
// rules are held fixed per base; only the two Gate 4 audience levers vary. Movies first, TV separately.
//   npx tsx scripts/duds.ts [--seeds 16] [--years 10]
// Bases: "default" = shipped config/baseline.json (Producers economy, legacy random grades);
//        "quality" = config/gate4q.json (single editorial grade + D/F severity + cult) on the legacy overlay.
// Levers: WoM pivot 5 → 6.5 (audience.qualityPivot), bad-reception interest decay 0.35 → 1.0 (audience.diffusion.badInterestDecay).
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { baselineConfig, legacyConfig, withOverrides, type Config } from "../src/core/config";
import { runCareer } from "../src/batch/runner";
import { careerEcon, releaseAccounts, type ReleaseAccount } from "../src/batch/econ";

const arg = (k: string, d: number) => {
  const i = process.argv.indexOf(`--${k}`);
  return i > 0 ? Number(process.argv[i + 1]) : d;
};
const seeds = arg("seeds", 16), years = arg("years", 10);
const BASES: Record<string, Config> = {
  default: baselineConfig(),
  quality: withOverrides(legacyConfig(), JSON.parse(readFileSync("config/gate4q.json", "utf8"))),
};
const OFF = { audience: { movieQualityPivot: null, diffusion: { movieBadInterestDecay: null } } };
const LEVERS: Record<string, Record<string, unknown>> = {
  none: {},
  "movie-only both": { audience: { movieQualityPivot: 6.5, diffusion: { movieBadInterestDecay: 1.0 } } },
  pivot: { audience: { qualityPivot: 6.5 } },
  decay: { audience: { diffusion: { badInterestDecay: 1.0 } } },
  both: { audience: { qualityPivot: 6.5, diffusion: { badInterestDecay: 1.0 } } },
};
const MOVIE_POLICIES = ["balanced", "quality-first", "cheap-duds", "poor-fit-chooser"];
const TV_POLICIES = ["tv-first", "renewal-franchise", "tv-duds"];
const BANDS = ["<4", "4-6", "6-8", "8+"];

const q = (xs: number[], p: number) => {
  if (!xs.length) return NaN;
  const s = [...xs].sort((a, b) => a - b);
  return s[Math.round((s.length - 1) * p)];
};
const $ = (x: number) => (Number.isNaN(x) ? "—" : `${x < 0 ? "−" : ""}$${Math.abs(x) >= 1e6 ? `${(Math.abs(x) / 1e6).toFixed(2)}M` : `${Math.round(Math.abs(x) / 1000)}K`}`);
const cell = (rs: ReleaseAccount[]) => (rs.length ? `${Math.round((100 * rs.filter((x) => x.allInNet < 0).length) / rs.length)}% · ${$(q(rs.map((x) => x.allInNet), 0.5))} (n ${rs.length})` : "—");

function run(cfg: Config, policies: string[], formats: string[]) {
  const rel: ReleaseAccount[] = [];
  const end: Record<string, number[]> = {};
  for (const st of policies)
    for (let seed = 1; seed <= seeds; seed++) {
      const r = runCareer(seed, st, cfg, { productions: 0, years });
      rel.push(...releaseAccounts(r.state, cfg).filter((x) => x.done && formats.includes(x.format)));
      (end[st] ??= []).push(careerEcon(seed, st, r.state, cfg).endCash);
    }
  return { rel, end: Object.fromEntries(policies.map((p) => [p, q(end[p], 0.5)])) as Record<string, number> };
}

const t0 = Date.now();
const L = [
  "# Dud economics: Gate 4 audience levers by score band",
  "",
  `Seeds 1–${seeds}, ${years}-year careers. Each cell = **share of finished releases losing money all-in · median all-in net (n)**. All-in = studio take + surplus − overruns − payroll/upkeep during production. Quality rules are fixed per base; only revenue levers move. TEST ASSUMPTIONS.`,
  "",
  "Levers: **pivot** = word-of-mouth pivot 5 → 6.5; **decay** = bad-reception interest decay 0.35 → 1.0; **both** = the pair, all formats; **movie-only both** = the pair for movies only (\`audience.movieQualityPivot\`, \`audience.diffusion.movieBadInterestDecay\`), TV keeps the global knobs.",
  "",
  "## 1. Movies",
  "",
];
{
  L.push("### Shipped default (`config/baseline.json`): the three steps", "", `| Setup | ${BANDS.join(" | ")} | End cash p50: ${MOVIE_POLICIES.join(" / ")} |`, `|---|${BANDS.map(() => "---").join("|")}|---|`);
  const steps: [string, Config][] = [
    ["old default: geometric legs, no levers", withOverrides(BASES.default, { ...OFF, audience: { ...OFF.audience, legsModel: "geometric" } })],
    ["diffusion legs, no levers", withOverrides(BASES.default, OFF)],
    ["**NEW DEFAULT**: diffusion + movie-only levers", BASES.default],
  ];
  for (const [label, cfg] of steps) {
    const { rel, end } = run(cfg, MOVIE_POLICIES, ["movie"]);
    L.push(`| ${label} | ${BANDS.map((b) => cell(rel.filter((x) => x.band === b))).join(" | ")} | ${MOVIE_POLICIES.map((p) => $(end[p])).join(" / ")} |`);
  }
  L.push("");
}
for (const [bname, base] of Object.entries(BASES).filter(([k]) => k !== "default")) {
  L.push(`### Base: quality candidate (\`config/gate4q.json\`, single grade)`, "", `| Levers | ${BANDS.map((b) => `${b}`).join(" | ")} | End cash p50: ${MOVIE_POLICIES.join(" / ")} |`, `|---|${BANDS.map(() => "---").join("|")}|---|`);
  void bname;
  for (const [lname, lev] of Object.entries(LEVERS)) {
    const { rel, end } = run(withOverrides(base, lev), MOVIE_POLICIES, ["movie"]);
    L.push(`| ${lname} | ${BANDS.map((b) => cell(rel.filter((x) => x.band === b))).join(" | ")} | ${MOVIE_POLICIES.map((p) => $(end[p])).join(" / ")} |`);
  }
  L.push("");
}
L.push("## 2. TV (separate; quality candidate only, the shipped default has TV off). The movie-only knobs never touch a TV/limited release (unit test in `tests/integration/defaults.test.ts`); `movie-only both` still differs from `none` because these policies also make movies (before TV unlocks, or when no show is renewable), and those movies now earn less, which changes cash and later choices.", "", "Seasons (`tv`) and limited series (`limited_series`) are reported apart because their cost and reach differ.", "");
const base = BASES.quality;
for (const fmt of ["tv", "limited_series"]) {
  L.push(`### ${fmt}`, "", `| Levers | ${BANDS.join(" | ")} | End cash p50: ${TV_POLICIES.join(" / ")} |`, `|---|${BANDS.map(() => "---").join("|")}|---|`);
  for (const [lname, lev] of Object.entries(LEVERS)) {
    const { rel, end } = run(withOverrides(base, lev), TV_POLICIES, [fmt]);
    L.push(`| ${lname} | ${BANDS.map((b) => cell(rel.filter((x) => x.band === b))).join(" | ")} | ${TV_POLICIES.map((p) => $(end[p])).join(" / ")} |`);
  }
  L.push("");
}
L.push(`Elapsed ${((Date.now() - t0) / 1000).toFixed(1)} s.`);
mkdirSync("reports/duds", { recursive: true });
writeFileSync("reports/duds/summary.md", L.join("\n") + "\n");
console.log(L.join("\n"));
