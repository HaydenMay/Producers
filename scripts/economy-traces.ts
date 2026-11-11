// Gate 4 seeded traces (nothing scripted except the branch point):
//   npx tsx scripts/economy-traces.ts        → reports/gate4/traces/*.md
// 1. Same studio-funded production at the 80% meeting, branched on every bid + self-distribution:
//    a weak film, an ordinary one and a hit (found in the COMPARE run, reproduced here from the seed).
// 2. A struggling studio that leans on work-for-hire contracts.
// 3. A TV show's seasons: good seasons and a financial mistake.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { baselineConfig, withOverrides, type Config } from "../src/core/config";
import { advanceWeek, applyDecision, createStudio, getChoices } from "../src/core/simulation";
import { makeAgentRng } from "../src/core/rng";
import { STRATEGIES, type AgentCtx } from "../src/agents/strategies";
import { decideFor } from "../src/agents/economy";
import { cashSeries, releaseAccounts } from "../src/batch/econ";
import { runCareer } from "../src/batch/runner";
import type { Decision, StudioState } from "../src/core/types";

const G4 = withOverrides(baselineConfig(), JSON.parse(readFileSync("config/gate4.json", "utf8")));
const LEVERS = withOverrides(G4, { audience: { qualityPivot: 6.5 }, world: { grossPerViewer: 1.6 }, tv: { grossPerEpisodeViewer: 0.256 }, limitedSeries: { grossPerEpisodeViewer: 0.456 } });
const $ = (x: number) => `${x < 0 ? "−" : ""}$${Math.abs(Math.round(x)).toLocaleString()}`;
mkdirSync("reports/gate4/traces", { recursive: true });

/** Play a policy career until the distribution meeting for `title`; return the state there. */
function toMeeting(seed: number, strategy: string, cfg: Config, title: string): StudioState {
  const s = createStudio(seed, cfg);
  const rng = makeAgentRng(seed, strategy);
  const ctx: AgentCtx = { reinvestsThisStop: 0 };
  for (let i = 0; i < 200000; i++) {
    const ch = getChoices(s, cfg);
    if (ch.phase === "distribution" && s.project!.title === title) return s;
    const d: Decision = decideFor(STRATEGIES[strategy], s, cfg, ch, rng, ctx);
    if (d.type === "hire" || d.type === "train" || d.type === "studio_ads" || d.type === "research_theme") ctx.reinvestsThisStop += 1;
    else ctx.reinvestsThisStop = 0;
    applyDecision(s, cfg, d);
  }
  throw new Error(`no meeting for ${title}`);
}

/** Apply one distribution option, then only wait (no new productions) until that release's run ends. */
function branch(s0: StudioState, cfg: Config, d: Decision, title: string) {
  const s = structuredClone(s0);
  applyDecision(s, cfg, d);
  for (let i = 0; i < 400; i++) {
    const rel = s.releases.find((r) => r.title === title);
    if (rel && !rel.active) break;
    const ch = getChoices(s, cfg);
    if (ch.phase === "production" || ch.phase === "planning") advanceWeek(s, cfg);
    else applyDecision(s, cfg, ch.options[0]);
  }
  return { s, acc: releaseAccounts(s, cfg).find((a) => a.title === title)!, rel: s.releases.find((r) => r.title === title)! };
}

function meetingTrace(seed: number, strategy: string, title: string, label: string): string[] {
  const s0 = toMeeting(seed, strategy, G4, title);
  const ch = getChoices(s0, G4);
  const p = s0.project!;
  const sig = p.distribution!.preview;
  const L = [`## ${label}: “${title}” (seed ${seed}, ${strategy})`, "", `At the 80% meeting the studio has already sunk **${$(ch.investedSoFar!)}** (base ${$(p.baseCost)}, Star ${$(p.starFee)}, payroll + upkeep so far). Distributors see a preview of ${sig.preview}/100 → appeal ${sig.appeal} (quality ${sig.quality}, trend ${sig.trend}, Star Fame ${sig.fame}, known combo ${sig.combo}). They cannot see the hidden combo grades or the final reviews.`, ""];
  L.push("| Option | Distributor ad spend (its money) | Reach | Distributor share | Opening | Unique viewers (÷ reach cap) | Total gross | Studio gross | Studio all-in net | Distributor income | Distributor net |", "|---|---|---|---|---|---|---|---|---|---|---|");
  const opts = [...ch.bids!.map((b) => ({ d: { type: "distribute", distributorId: b.distributorId } as Decision, name: b.name, ad: b.adSpend, reach: b.reach, share: b.share })), { d: { type: "distribute", distributorId: null } as Decision, name: "Self-distribute", ad: 0, reach: G4.economy.lateDistribution.selfDistributionReach, share: 0 }];
  let finalScore = "";
  for (const o of opts) {
    const { acc, rel } = branch(s0, G4, o.d, title);
    finalScore = `Final reviews (identical in every branch: distribution never changes quality): Audience ${rel.audience} / Critics ${rel.critic} (avg ${rel.avgScore}).`;
    L.push(`| ${o.name} | ${$(o.ad)} | ${o.reach} | ${Math.round(o.share * 100)}% | ${acc.opening.toLocaleString()} | ${acc.unique.toLocaleString()} (${Math.round((100 * acc.unique) / acc.reachCap)}%) | ${$(acc.grossTotal)} | ${$(acc.studioGross)} | **${$(acc.allInNet)}** | ${o.share ? $(acc.distIncome) : "—"} | ${o.share ? $(acc.distNet) : "—"} |`);
  }
  L.push("", finalScore, `Studio cost behind every row: ${$(opts.length ? branch(s0, G4, opts[0].d, title).acc.direct + branch(s0, G4, opts[0].d, title).acc.payrollDuring : 0)} (direct + payroll during production).`, "");
  return L;
}

function contractTrace(seed: number, strategy: string, cfg: Config, label: string, variant: string): string[] {
  const s = runCareer(seed, strategy, cfg, { productions: 0, years: 10 }).state; // same run as the COMPARE batch
  const cash = cashSeries(s);
  const L = [`## ${label} (variant ${variant}, seed ${seed}, ${strategy})`, "", "| Week | Yr | Cash | Event |", "|---|---|---|---|"];
  for (const e of s.events.filter((x) => ["contract", "project_start", "release", "fire", "unlock"].includes(x.type))) L.push(`| ${e.week} | ${(e.week / 52).toFixed(1)} | ${$(cash[e.week] ?? 0)} | ${e.message.slice(0, 170)} |`);
  const ch = s.contractHistory ?? [];
  L.push("", `Contracts: ${ch.length}, ${ch.reduce((a, c) => a + c.weeks, 0)} weeks, fees ${$(ch.reduce((a, c) => a + c.fee, 0))}, labor covered by clients ${$(ch.reduce((a, c) => a + c.laborCovered, 0))}. Prestige at year 10: ${s.prestige} (all from its own productions). Lowest cash ${$(Math.min(...cash))}; end cash ${$(s.cash)}.`, "");
  return L;
}

function tvTrace(seed: number, strategy: string, cfg: Config, ipName: string, label: string): string[] {
  const s = runCareer(seed, strategy, cfg, { productions: 0, years: 10 }).state; // same run as the COMPARE batch
  const acc = releaseAccounts(s, cfg).filter((a) => a.title.startsWith(ipName) && a.format === "tv");
  const L = [`## ${label} (seed ${seed}, ${strategy})`, "", `Each season is studio-funded (setup + per-episode cost) and gets its own distribution meeting. Payroll during production is the studio's whole team for the season's production weeks.`, "", "| Season | Avg | Direct cost | Payroll during | Distributor (ad spend, share) | Unique viewers | Total gross | Studio gross | **Studio all-in** | Distributor net |", "|---|---|---|---|---|---|---|---|---|---|"];
  for (const a of acc) {
    const r = s.releases.find((x) => x.id === a.id)!;
    L.push(`| ${a.title.replace(ipName, "").replace(": ", "") || "Season 1"} | ${a.avg} | ${$(a.direct)} | ${$(a.payrollDuring)} | ${a.distributorId ?? "self"} (${$(a.adSpend)}, ${Math.round(r.royalty * 100)}%) | ${a.unique.toLocaleString()} | ${$(a.grossTotal)} | ${$(a.studioGross)} | **${$(a.allInNet)}** | ${a.distributorId ? $(a.distNet) : "—"} |`);
  }
  return [...L, ""];
}

const out: Record<string, string[]> = {
  "three-movies-branched": ["# Trace: the same kind of studio-funded movie, three outcomes, every distribution option", "", "Default candidate config (`config/gate4.json`). Each table branches ONE production at its 80% meeting into every bid plus self-distribution, then only waits until the run ends.", "", ...meetingTrace(5, "balanced", "Wild Night", "Weak film"), ...meetingTrace(2, "balanced", "Iron Pulse", "Ordinary film"), ...meetingTrace(1, "balanced", "Midnight Storm", "Hit")],
  "contracts-struggling-studio": ["# Trace: struggling studios using work-for-hire", "", ...contractTrace(12, "tv-first", LEVERS, "TV studio that falls into a hole and works its way out", "cand_pivot65_gross80"), ...contractTrace(16, "mixed", G4, "Default candidate: an early cash dip covered by contracts", "candidate")],
  "tv-season-mistake": ["# Trace: TV seasons as financial bets", "", ...tvTrace(11, "tv-first", G4, "Silver Edge", "A long show whose Season 10 loses money"), ...tvTrace(2, "mixed", G4, "Iron Run", "A short show whose season loses money despite an 8.0")],
};
for (const [k, v] of Object.entries(out)) writeFileSync(`reports/gate4/traces/${k}.md`, v.join("\n") + "\n");
console.log(Object.keys(out).map((k) => `reports/gate4/traces/${k}.md`).join("\n"));
