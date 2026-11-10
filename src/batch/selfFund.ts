// Gate 2.5 D: is self-funding EVER the rational choice? Branch analysis at real pitch meetings.
// At each pitch where self-funding is legal, clone the exact state, try every option (each offer + self-fund),
// play only that project to the end of its commercial run (no new projects, no reinvestment), and compare cash.
// Uses the strategy's own casting/marketing choices in every branch. No hidden information is used to decide;
// hidden outcomes are only used AFTERWARDS to grade the options (that is the point of a regret analysis).
import type { Config } from "../core/config";
import { makeAgentRng } from "../core/rng";
import { applyDecision, createStudio, getChoices } from "../core/simulation";
import type { Decision, StudioState } from "../core/types";
import { STRATEGIES } from "../agents/strategies";
import { runCareer } from "./runner";

export interface PitchPoint {
  seed: number;
  productionIndex: number;
  cash: number;
  prestige: number;
  offers: { id: string; advance: number; royalty: number; reach: number; value: number }[];
  selfValue: number;
  bestOfferValue: number;
  selfWins: boolean;
  margin: number; // self - best offer
  avgScore: number;
}

function playProjectOnly(state: StudioState, cfg: Config, d: Decision, strategy: string, seed: number): { cash: number; avg: number } {
  const s: StudioState = structuredClone(state);
  applyDecision(s, cfg, d);
  const strat = STRATEGIES[strategy];
  const rng = makeAgentRng(seed, `branch:${strategy}`);
  const target = s.releases.length + 1;
  for (let i = 0; i < 400 && (s.project || s.releases.length < target); i++) {
    const ch = getChoices(s, cfg);
    if (ch.phase === "casting" || ch.phase === "marketing") applyDecision(s, cfg, strat.decide(s, cfg, ch, rng, { reinvestsThisStop: 99 }));
    else applyDecision(s, cfg, { type: "wait" });
  }
  const rel = s.releases[s.releases.length - 1];
  for (let i = 0; i < 60 && rel.active; i++) applyDecision(s, cfg, { type: "wait" });
  return { cash: s.cash, avg: rel.avgScore };
}

/** Replays each career's decision log and branches at every pitch where self-funding is legal. */
export function selfFundRegret(seeds: number[], strategy: string, cfg: Config, productions: number): PitchPoint[] {
  const out: PitchPoint[] = [];
  for (const seed of seeds) {
    const career = runCareer(seed, strategy, cfg, { productions, drain: false });
    // walk the same decisions again, pausing at pitch meetings
    runCareerStateAt(seed, cfg, career.decisions, (st, ch) => {
      if (ch.phase !== "pitch") return;
      const canSelf = ch.options.some((o) => o.type === "choose_offer" && o.distributorId === null);
      if (!canSelf) return;
      const offerVals = ch.offers!.map((o) => ({ id: o.distributorId, advance: o.advance, royalty: o.royalty, reach: o.reach, value: playProjectOnly(st, cfg, { type: "choose_offer", distributorId: o.distributorId }, strategy, seed).cash }));
      const self = playProjectOnly(st, cfg, { type: "choose_offer", distributorId: null }, strategy, seed);
      const best = Math.max(...offerVals.map((o) => o.value));
      out.push({ seed, productionIndex: st.counters.productionsStarted + 1, cash: Math.round(st.cash), prestige: st.prestige, offers: offerVals.map((o) => ({ ...o, value: Math.round(o.value - st.cash) })), selfValue: Math.round(self.cash - st.cash), bestOfferValue: Math.round(best - st.cash), selfWins: self.cash > best, margin: Math.round(self.cash - best), avgScore: self.avg });
    });
  }
  return out;
}

function runCareerStateAt(seed: number, cfg: Config, decisions: Decision[], visit: (s: StudioState, ch: ReturnType<typeof getChoices>) => void): StudioState {
  const s = createStudio(seed, cfg);
  for (const d of decisions) {
    visit(s, getChoices(s, cfg));
    applyDecision(s, cfg, d);
  }
  return s;
}

export function selfFundReport(points: PitchPoint[], strategy: string, label: string): string {
  const wins = points.filter((p) => p.selfWins);
  const byIdx = new Map<number, PitchPoint[]>();
  for (const p of points) byIdx.set(p.productionIndex, [...(byIdx.get(p.productionIndex) ?? []), p]);
  const med = (xs: number[]) => {
    const s = [...xs].sort((a, b) => a - b);
    return s.length ? s[Math.floor(s.length / 2)] : NaN;
  };
  const lines = [
    `## Self-funding regret analysis — ${label} (${strategy} policy)`,
    "",
    `${points.length} pitch meetings where self-funding was legal. At each, the exact state was cloned and every option played out for that project only (until its run ended; no other projects).`,
    "",
    `- Self-funding was the **best** option in **${wins.length} / ${points.length}** pitches (${points.length ? ((wins.length / points.length) * 100).toFixed(1) : 0}%).`,
    `- Median margin (self-fund minus best offer): $${med(points.map((p) => p.margin)).toLocaleString()}; best case $${Math.max(...points.map((p) => p.margin)).toLocaleString()}.`,
    "",
    "| Production # | Pitches | Self best | Median self-fund net | Median best-offer net |",
    "|---:|---:|---:|---:|---:|",
    ...[...byIdx.entries()].sort((a, b) => a[0] - b[0]).map(([i, ps]) => `| ${i} | ${ps.length} | ${ps.filter((p) => p.selfWins).length} | $${med(ps.map((p) => p.selfValue)).toLocaleString()} | $${med(ps.map((p) => p.bestOfferValue)).toLocaleString()} |`),
    "",
  ];
  if (wins.length) {
    lines.push("Example winning pitches (seed, production #, cash, best offer vs self):", "");
    for (const w of wins.slice(0, 8)) lines.push(`- seed ${w.seed} #${w.productionIndex}: cash $${w.cash.toLocaleString()}, offers ${w.offers.map((o) => `${o.id} $${o.advance.toLocaleString()}@${(o.royalty * 100).toFixed(0)}% reach ${o.reach}`).join(", ")}; self +$${w.selfValue.toLocaleString()} vs best offer +$${w.bestOfferValue.toLocaleString()} (avg score ${w.avgScore})`);
    lines.push("");
  }
  return lines.join("\n");
}
