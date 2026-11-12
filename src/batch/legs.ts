// Controlled single-release simulations for the weekly-legs model (Gate 2.5 B).
// Same pipeline as the game: openingTrace -> releaseWeek -> updateIpFans / updateTrust.
import type { Config } from "../core/config";
import { openingTrace, releaseWeek, updateIpFans } from "../core/audience";
import { updateTrust } from "../core/distribution";
import { createStudio } from "../core/simulation";
import { avgScore, isHallOfFame } from "../core/scoring";
import type { Release } from "../core/types";

export interface LegsCase {
  id: string;
  label: string;
  audience: number;
  critic: number;
  reach: number;
  campaign: "none" | "small" | "medium" | "large";
  starFame: number;
  studioBuzz: number;
  royalty: number;
  advance: number;
}

export const LEGS_CASES: LegsCase[] = [
  { id: "i", label: "High critics + high audience, low initial awareness (no marketing, unknown Star)", audience: 8.8, critic: 8.8, reach: 0.6, campaign: "none", starFame: 0, studioBuzz: 0, royalty: 0.3, advance: 75000 },
  { id: "ii", label: "High hype + bad reviews (large campaign, famous Star, studio buzz)", audience: 3.0, critic: 3.0, reach: 0.85, campaign: "large", starFame: 90, studioBuzz: 0.3, royalty: 0.3, advance: 75000 },
  { id: "iii", label: "Critics high / audience low", audience: 4.5, critic: 8.5, reach: 0.6, campaign: "medium", starFame: 30, studioBuzz: 0, royalty: 0.3, advance: 75000 },
  { id: "iv", label: "Critics low / audience high", audience: 8.5, critic: 4.5, reach: 0.6, campaign: "medium", starFame: 30, studioBuzz: 0, royalty: 0.3, advance: 75000 },
  { id: "v", label: "Excellent movie, tiny distribution reach", audience: 9.0, critic: 9.0, reach: 0.1, campaign: "medium", starFame: 30, studioBuzz: 0, royalty: 0.3, advance: 75000 },
];

export function simulateLegs(cfg: Config, c: LegsCase) {
  const state = createStudio(1, cfg);
  const op = openingTrace({ reach: c.reach, campaignAwareness: (cfg.marketing.campaigns as Record<string, { awareness: number }>)[c.campaign].awareness, studioBuzz: c.studioBuzz, starFame: c.starFame, trend: "none", ipFans: 0 }, cfg);
  state.ips.ipX = { id: "ipX", name: `Case ${c.id}`, fans: 0, titles: [] };
  const avg = avgScore(c.audience, c.critic);
  const rel: Release = {
    id: "relX", title: `Case ${c.id}`, genre: "Horror", theme: "Zombies", ipId: "ipX", ipRelation: "new", releaseWeek: 0, distributorId: "wolf", royalty: c.royalty, reachCap: op.reachCap, starId: null,
    meters: { plot: 0, writing: 0, filming: 0, editing: 0 }, audience: c.audience, critic: c.critic, avgScore: avg, hallOfFame: isHallOfFame(avg, cfg),
    openingViewers: op.opening, weekIndex: 0, lastViewers: 0, totalViewers: 0, grossTotal: 0, distributorTake: 0, studioTake: 0, active: true, advance: c.advance, surplusKept: 0, baseCost: 0, starFee: 0, campaignCost: 0, cashOverrun: 0, weekly: [], trace: { pool: op.pool, opening: op },
  };
  state.releases.push(rel);
  while (rel.active) {
    state.week += 1;
    releaseWeek(state, cfg, rel);
  }
  const fans = updateIpFans(state, cfg, rel);
  const trust = updateTrust(state, cfg, rel);
  const peakWeek = rel.weekly.reduce((best, w, i, arr) => (w.viewers > arr[best].viewers ? i : best), 0) + 1;
  const grows = rel.weekly.some((w, i) => i > 0 && w.viewers > rel.weekly[i - 1].viewers);
  return { rel, op, fans, trust, peakWeek, grows, feedback: state.events.filter((e) => e.type === "feedback").map((e) => e.message) };
}

export function legsReport(cfgs: { name: string; cfg: Config }[]): string {
  const out: string[] = ["# Weekly legs: worked cases (Gate 2.5 B)", "", "> Controlled inputs: each case fixes the scores, reach and awareness inputs, then runs the real release pipeline (opening → weekly viewers → gross → royalty → IP fans → distributor trust). **Simulation assumptions, not design locks.**", ""];
  out.push("## Summary", "", "| Case | Model | Opening | Peak week | Grows after opening? | Weeks | Total viewers (reach cap) | Gross | Studio take | Distributor ROI | Fans Δ | Trust step |", "|---|---|---:|---:|---|---:|---:|---:|---:|---:|---:|---:|");
  const detail: string[] = [];
  for (const c of LEGS_CASES) {
    for (const { name, cfg } of cfgs) {
      const r = simulateLegs(cfg, c);
      out.push(`| ${c.id} | ${name} | ${r.rel.openingViewers.toLocaleString()} | ${r.peakWeek} | ${r.grows ? "**yes**" : "no"} | ${r.rel.weekly.length} | ${r.rel.totalViewers.toLocaleString()} (${r.rel.reachCap.toLocaleString()}) | $${Math.round(r.rel.grossTotal).toLocaleString()} | $${Math.round(r.rel.studioTake).toLocaleString()} | ${(r.rel.distributorTake / c.advance).toFixed(2)} | ${r.fans.delta.toLocaleString()} | ${r.trust ? ((r.trust as { step: number }).step + 0) : "—"} |`);
      detail.push(`### Case ${c.id} — ${c.label} — model: ${name}`, "", `Inputs: Audience ${c.audience} / Critic ${c.critic}, reach ${c.reach}, campaign ${c.campaign}, Star Fame ${c.starFame}, studio buzz ${c.studioBuzz}. Awareness ${r.op.awareness} (${Object.entries(r.op.parts).map(([k, v]) => `${k} ${v}`).join(", ")}) · reach cap ${r.op.reachCap.toLocaleString()} · initially aware ${r.op.pool.toLocaleString()}.`, "");
      detail.push("| Wk | Viewers | vs prev | Driver | Gross | Studio | Distributor |", "|---:|---:|---:|---|---:|---:|---:|");
      r.rel.weekly.forEach((w, i) => detail.push(`| ${i + 1} | ${w.viewers.toLocaleString()} | ${i === 0 ? "—" : `${w.retention}x`} | ${w.driver} | $${Math.round(w.gross).toLocaleString()} | $${Math.round(w.studio).toLocaleString()} | $${Math.round(w.distributor).toLocaleString()} |`));
      detail.push("", `Feedback shown: ${r.feedback.map((f) => `"${f}"`).join(" · ") || "none"}`, `Consequences: IP fans ${JSON.stringify(r.fans)}; trust: ${r.trust ? (r.trust as { reason: string }).reason : "n/a"}.`, "");
    }
  }
  out.push("", ...detail);
  return out.join("\n");
}
