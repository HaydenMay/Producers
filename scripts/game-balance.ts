// Game balance (2026-11-15): measures the config the GAME PREVIEW plays, progressionConfig() = default +
// config/staff-progression.json (weak start crew, skills to 255, levels earned by work, specialties). Agents use the
// progression system like a player (accept specialties, train with a cash cushion).
//   npx tsx scripts/game-balance.ts [--seeds 16] [--years 20] [--set path=json ...]  → reports/game-balance/summary.md
// Goals (designer 2026-11-15): first films usually below 6 (PROD-235); nobody stuck in the early game; first Hall of
// Fame around year 4–6; a mix of formats is a strong route.
import { mkdirSync, writeFileSync } from "node:fs";
import { progressionConfig, setPath, type Config } from "../src/core/config";
import { runCareer } from "../src/batch/runner";
import { checkInvariants } from "../src/batch/diagnostics";
import { careerRecap } from "../src/core/career";

const argv = process.argv;
const num = (k: string, d: number) => (argv.indexOf(`--${k}`) > 0 ? Number(argv[argv.indexOf(`--${k}`) + 1]) : d);
const seeds = num("seeds", 16), years = num("years", 20);
let cfg: Config = progressionConfig();
const sets: string[] = [];
for (let i = 0; i < argv.length; i++)
  if (argv[i] === "--set") {
    const [k, v] = argv[i + 1].split("=");
    cfg = setPath(cfg, k, JSON.parse(v));
    sets.push(argv[i + 1]);
  }
const POL = ["balanced", "quality-first", "mixed", "tv-first", "limited-focus", "cheap-duds"];
const W = cfg.time.weeksPerYear;
const sorted = (x: number[]) => [...x].sort((a, b) => a - b);
const q = (x: number[], f: number) => (x.length ? sorted(x)[Math.floor((x.length - 1) * f)] : NaN);
const med = (x: number[]) => q(x, 0.5);
const f1 = (x: number) => (Number.isNaN(x) ? "—" : x.toFixed(1));
const M = (x: number) => `$${(x / 1e6).toFixed(1)}M`;
const t0 = Date.now();
let viol = 0;

const rows: string[] = [], money: string[] = [];
for (const st of POL) {
  const bands = [[0, 2], [2, 5], [5, 10], [10, years]] as const;
  const band: number[][] = bands.map(() => []);
  const first: number[] = [], firstHof: number[] = [], cash: number[] = [], leg: number[] = [], red2: number[] = [], spec: number[] = [], top: number[] = [];
  let rel = 0, hof = 0;
  for (let seed = 1; seed <= seeds; seed++) {
    const r = runCareer(seed, st, cfg, { productions: 0, years });
    viol += checkInvariants(r, cfg).length;
    const s = r.state;
    if (s.releases[0]) first.push(s.releases[0].avgScore);
    for (const x of s.releases) {
      rel++;
      if (x.hallOfFame) hof++;
      const y = x.releaseWeek / W;
      bands.forEach(([a, b], i) => { if (y >= a && y < b) band[i].push(x.avgScore); });
    }
    const h = s.releases.find((x) => x.hallOfFame);
    if (h) firstHof.push(h.releaseWeek / W);
    cash.push(s.cash);
    leg.push(careerRecap(s, cfg).legacyScore);
    red2.push(s.ledger.length ? redWeeksIn(s, 2 * W) : 0);
    spec.push(s.staff.filter((p) => p.progression?.stage === "specialist").length);
    top.push(Math.max(...s.staff.flatMap((p) => Object.values(p.stats))));
  }
  const mean = (x: number[]) => (x.length ? x.reduce((a, b) => a + b, 0) / x.length : NaN);
  rows.push(`| ${st} | ${f1(med(first))} (${((first.filter((x) => x < 6).length / Math.max(1, first.length)) * 100).toFixed(0)}% below 6) | ${band.map((b) => f1(mean(b))).join(" → ")} | ${((hof / Math.max(1, rel)) * 100).toFixed(1)}% | ${firstHof.length ? `yr ${f1(med(firstHof))} (${firstHof.length}/${seeds})` : `never (0/${seeds})`} |`);
  money.push(`| ${st} | ${M(med(cash))} (${M(q(cash, 0.25))}–${M(q(cash, 0.75))}) | ${(med(leg) / 1000).toFixed(1)}K (${(q(leg, 0.25) / 1000).toFixed(1)}–${(q(leg, 0.75) / 1000).toFixed(1)}K) | ${med(red2)} | ${f1(med(spec))} | ${med(top).toFixed(0)} |`);
}

/** weeks in the red within the first `upTo` weeks, from the cash ledger */
function redWeeksIn(s: { ledger: { week: number; amount: number }[] }, upTo: number): number {
  const byWeek = new Map<number, number>();
  for (const l of s.ledger) if (l.week < upTo) byWeek.set(l.week, (byWeek.get(l.week) ?? 0) + l.amount);
  let c = 0, red = 0, last = -1;
  for (const w of [...byWeek.keys()].sort((a, b) => a - b)) {
    if (c < 0 && last >= 0) red += w - last;
    c += byWeek.get(w)!;
    last = w;
  }
  return red;
}

const L = [
  "# Game balance (the game preview's config)",
  "",
  `\`progressionConfig()\`${sets.length ? ` with ${sets.join(", ")}` : ""}; seeds 1–${seeds}, ${years}-year careers; agents accept specialties and train with a cash cushion. Goals: first films usually below 6; nobody stuck early; first Hall of Fame ~year 4–6; a mix of formats is a strong route. TEST VALUES.`,
  "",
  `| Strategy | First film (median) | Mean score, years 0–1 → 2–4 → 5–9 → 10–${years - 1} | Hall of Fame share | First Hall of Fame (median year, careers) |`,
  "|---|---|---|---|---|",
  ...rows,
  "",
  `| Strategy | ${years}-yr cash (p25–p75) | ${years}-yr legacy (p25–p75) | Red weeks, first 2 yrs | Specialists | Top skill |`,
  "|---|---|---|---|---|---|",
  ...money,
  "",
  `Invariant violations: ${viol}. Elapsed ${((Date.now() - t0) / 1000).toFixed(1)} s.`,
];
if (!sets.length) {
  mkdirSync("reports/game-balance", { recursive: true });
  writeFileSync("reports/game-balance/summary.md", L.join("\n") + "\n");
}
console.log(L.join("\n"));
