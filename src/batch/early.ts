// Gate 2.5 E: first-production economics under starting-economy scenarios.
import type { Config } from "../core/config";
import { withOverrides } from "../core/config";
import { runCareer } from "./runner";
import { quantile } from "./metrics";

export interface EarlyRow {
  seed: number;
  strategy: string;
  startCash: number;
  baseCost: number;
  advance: number;
  royalty: number;
  starFee: number;
  fallbackStar: boolean;
  campaign: number;
  surplus: number;
  gross: number;
  studioTake: number;
  distributorTake: number;
  payrollToRunEnd: number;
  cashAtRelease: number;
  cashAtRunEnd: number;
  minCash: number;
  netFirstFilm: number;
  avgScore: number;
  weeksToRunEnd: number;
  canSelfFundNext: boolean;
}

export function firstFilm(seed: number, strategy: string, cfg: Config): EarlyRow {
  const r = runCareer(seed, strategy, cfg, { productions: 1, drain: true });
  const s = r.state;
  const rel = s.releases[0];
  let cash = 0;
  let min = Infinity;
  let cashAtRelease = NaN;
  const cashKinds = new Set(["start_cash", "payroll", "upkeep", "base_cost", "star_fee", "campaign", "surplus_transfer", "studio_take", "cancel_repay", "hire", "train", "studio_ads", "research", "upgrade"]);
  for (const l of s.ledger) {
    if (!cashKinds.has(l.kind)) continue;
    cash += l.amount;
    min = Math.min(min, cash);
    if (l.week <= rel.releaseWeek) cashAtRelease = cash;
  }
  const payroll = -s.ledger.filter((l) => l.kind === "payroll" || l.kind === "upkeep").reduce((a, l) => a + l.amount, 0);
  const card = (rel.trace.auditionCards as { starId: string; fallbackInserted?: boolean }[]).find((c) => c.starId === rel.starId);
  return {
    seed,
    strategy,
    startCash: cfg.start.cash,
    baseCost: rel.baseCost,
    advance: rel.advance,
    royalty: rel.royalty,
    starFee: rel.starFee,
    fallbackStar: !!card?.fallbackInserted,
    campaign: rel.campaignCost,
    surplus: rel.surplusKept,
    gross: Math.round(rel.grossTotal),
    studioTake: Math.round(rel.studioTake),
    distributorTake: Math.round(rel.distributorTake),
    payrollToRunEnd: Math.round(payroll),
    cashAtRelease: Math.round(cashAtRelease),
    cashAtRunEnd: Math.round(s.cash),
    minCash: Math.round(min),
    netFirstFilm: Math.round(s.cash - cfg.start.cash),
    avgScore: rel.avgScore,
    weeksToRunEnd: s.week,
    canSelfFundNext: s.cash >= cfg.production.movie.baseCost,
  };
}

export interface EarlyScenario {
  name: string;
  note?: string;
  overrides: Record<string, unknown>;
}

export function earlyReport(base: Config, scenarios: EarlyScenario[], seeds: number, strategies: string[]): string {
  const out = ["# First-production economics (Gate 2.5 E)", "", "> Provisional values. Each scenario runs the same seeds; a career stops after the first film's run ends. **Simulation assumptions, not design locks.**", ""];
  const cols: (keyof EarlyRow)[] = ["advance", "starFee", "campaign", "surplus", "gross", "studioTake", "distributorTake", "payrollToRunEnd", "cashAtRelease", "cashAtRunEnd", "minCash", "netFirstFilm", "avgScore", "weeksToRunEnd"];
  for (const sc of scenarios) {
    const cfg = withOverrides(base, sc.overrides);
    out.push(`## ${sc.name}`, "", sc.note ?? "", "", `Overrides: \`${JSON.stringify(sc.overrides)}\` · start cash $${cfg.start.cash.toLocaleString()} · base cost $${cfg.production.movie.baseCost.toLocaleString()} · gross/viewer $${cfg.world.grossPerViewer}`, "");
    out.push(`| Strategy | ${cols.join(" | ")} | fallback Star used | can self-fund next | ended negative |`, `|---|${cols.map(() => "---:").join("|")}|---:|---:|---:|`);
    for (const st of strategies) {
      const rows = Array.from({ length: seeds }, (_, i) => firstFilm(i + 1, st, cfg));
      const m = (k: keyof EarlyRow) => quantile(rows.map((r) => Number(r[k])), 0.5);
      const pct = (f: (r: EarlyRow) => boolean) => `${((rows.filter(f).length / rows.length) * 100).toFixed(0)}%`;
      out.push(`| ${st} | ${cols.map((k) => (k === "avgScore" ? m(k).toFixed(2) : k === "weeksToRunEnd" ? String(m(k)) : `$${Math.round(m(k)).toLocaleString()}`)).join(" | ")} | ${pct((r) => r.fallbackStar)} | ${pct((r) => r.canSelfFundNext)} | ${pct((r) => r.cashAtRunEnd < 0)} |`);
    }
    out.push("");
  }
  return out.join("\n");
}
