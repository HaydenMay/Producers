// Gate 3 follow-up: turn reports/gate3_followup/matrix/*.json into markdown tables.
// Usage: npx tsx scripts/fu-report.ts > reports/gate3_followup/matrix-tables.md
import { existsSync, readFileSync } from "node:fs";

const dir = "reports/gate3_followup/matrix";
type J = Record<string, any>; // eslint-disable-line @typescript-eslint/no-explicit-any
const load = (v: string): J | null => (existsSync(`${dir}/${v.replace("@", "_at_")}.json`) ? JSON.parse(readFileSync(`${dir}/${v.replace("@", "_at_")}.json`, "utf8")) : null);
const V = ["A0_noFiring", "A_control", "B_mildViewer", "B_ep_mildViewer", "C_mildViewer_lessReview", "D_strongViewer", "A_events", "C_events", "C_comboD"];
const OV = ["A_eventsBig", "D_strongViewer_premiere", "A_control@5ep", "A_control@10ep", "B_mildViewer@5ep", "B_ep_mildViewer@5ep", "B_ep_mildViewer@10ep", "C_mildViewer_lessReview@5ep"];
const data: Record<string, J> = {};
for (const v of [...V, ...OV]) {
  const d = load(v);
  if (d) data[v] = d;
}
const STRATS = ["tv-first", "renewal-franchise", "traditional-holdout", "mixed", "streaming-pivot", "balanced"];
const BANDS = ["1-3", "4-6", "7-10", "11-15", "16+"];
const n0 = (x: number | null | undefined) => (x === null || x === undefined ? "—" : Math.round(x).toLocaleString());
const n2 = (x: number | null | undefined) => (x === null || x === undefined ? "—" : x.toFixed(2));
const n3 = (x: number | null | undefined) => (x === null || x === undefined ? "—" : x.toFixed(3));
const pct = (x: number | null | undefined) => (x === null || x === undefined ? "—" : `${(x * 100).toFixed(0)}%`);
const $ = (x: number | null | undefined) => (x === null || x === undefined ? "—" : `${x < 0 ? "−" : ""}$${Math.abs(x) >= 1e6 ? `${(Math.abs(x) / 1e6).toFixed(2)}M` : `${Math.round(Math.abs(x) / 1000)}K`}`);
const get = (v: string, st: string, y = 25): J | null => data[v]?.strategies?.[st]?.[`y${y}`] ?? null;
const out: string[] = [];
const P = (...l: string[]) => out.push(...l);

P("# Gate 3 follow-up — stress matrix tables", "", "> Simulation output under TEST ASSUMPTIONS. Seeds 1–200 per strategy per variant; each career runs 25 in-game years once; the 10- and 15-year columns are exact prefixes of the same runs. Not design locks.", "");
P("## Sample sizes and runtime", "", "| Variant | Strategies | Careers | Runtime (s) | Invariant violations (seeds 1–20 per strategy) | Note |", "|---|---|---|---|---|---|");
for (const [v, d] of Object.entries(data)) P(`| ${v} | ${Object.keys(d.strategies).length} | ${Object.keys(d.strategies).length * 200} | ${d.runtimeSec} | ${d.invariantViolationsFirst20Seeds} | ${d.note ?? ""} |`);

P("", "## 1. Firing before/after (A0 = Gate 3 policies, no firing, score-only renewal; A = firing + money-aware renewal)", "");
for (const y of [10, 25]) {
  P(`### ${y} years`, "", "| Strategy | Variant | Fires/career | Careers with a dismissal | Dismissals while in debt | ≥3 yrs in debt | Ever negative | Negative at end | p10 lowest cash | Median end cash | Engineer hired | Streaming live (median yr) | Longest show | Voluntary share of ended shows |", "|---|---|---|---|---|---|---|---|---|---|---|---|---|---|");
  for (const st of STRATS)
    for (const v of ["A0_noFiring", "A_control"]) {
      const g = get(v, st, y);
      if (!g) continue;
      P(`| ${st} | ${v} | ${n2(g.firing.firesPerCareer)} | ${g.firing.careersWithFire} | ${g.firing.firesWhileInDebt} | ${g.money.debt3yCareers} | ${g.money.everNegative} | ${g.money.endNegative} | ${$(g.money.minCashP10)} | ${$(g.money.endCashMedian)} | ${g.firing.engineerHired} | ${g.firing.launched} (${n2(g.firing.launchYearMedian)}) | ${g.viability.seasonsPerShowMax} | ${pct(g.viability.voluntaryShareOfEnded)} |`);
    }
  P("");
}

P("## 2. Season bands (25 years): returning viewers vs review fatigue", "");
for (const st of ["tv-first", "renewal-franchise", "traditional-holdout"]) {
  P(`### ${st}`, "", "| Variant | Band | Seasons | Premiere (median) | Return rate | Last ep ÷ premiere | Unique ÷ reach | Avg (mean) | HoF % | Viewer-fatigue mult | Review fatigue | IP fans at start | Net/prod wk (median) | Losing seasons | Renewable |", "|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|");
  for (const v of ["A_control", "B_mildViewer", "B_ep_mildViewer", "C_mildViewer_lessReview", "D_strongViewer", "D_strongViewer_premiere"]) {
    const g = get(v, st);
    if (!g) continue;
    for (const b of BANDS) {
      const x = g.bands[b];
      if (!x.seasons) continue;
      P(`| ${v} | ${b} | ${x.seasons} | ${n0(x.premiereMedian)} | ${n2(x.returnRateMedian)} | ${n2(x.trajectoryMedian)} | ${pct(x.closenessMean)} | ${n3(x.avgMean)} | ${pct(x.hofRate)} | ${n3(x.viewerFatigueMultMean)} | ${pct(x.reviewFatigueMean)} | ${n0(x.fansStartMedian)} | ${$(x.netPerWeekMedian)} | ${pct(x.lossShare)} | ${pct(x.renewableShare)} |`);
    }
  }
  P("");
}

P("## 3. Marginal impact vs control, by band (25 years, same seeds)", "", "Premiere and net are medians; the change is (variant − control) ÷ control. Avg is a difference in points. Viewer fatigue never changes a score directly: any avg change comes from different decisions downstream (which show gets renewed, Star prices, money).", "");
for (const st of ["tv-first", "renewal-franchise"]) {
  P(`### ${st}`, "", "| Variant | Band | Δ premiere | Δ unique | Δ net/prod wk | Δ avg | Seasons (variant vs control) |", "|---|---|---|---|---|---|---|");
  const a = get("A_control", st)!;
  for (const v of ["B_mildViewer", "B_ep_mildViewer", "C_mildViewer_lessReview", "D_strongViewer", "D_strongViewer_premiere"]) {
    const g = get(v, st);
    if (!g || !a) continue;
    for (const b of BANDS) {
      const x = g.bands[b], c = a.bands[b];
      if (!x.seasons || !c.seasons) continue;
      const d = (p: number | null, q: number | null) => (p === null || q === null || q === 0 ? "—" : `${(((p - q) / Math.abs(q)) * 100).toFixed(0)}%`);
      P(`| ${v} | ${b} | ${d(x.premiereMedian, c.premiereMedian)} | ${d(x.uniqueMedian, c.uniqueMedian)} | ${d(x.netPerWeekMedian, c.netPerWeekMedian)} | ${x.avgMean !== null && c.avgMean !== null ? (x.avgMean - c.avgMean).toFixed(3) : "—"} | ${x.seasons} vs ${c.seasons} |`);
    }
  }
  P("");
}

P("## 4. How long shows last (25 years)", "", "Reached Sk = share of shows that reached season k; viable = that season was renewable (≥ 4.0) and, if traditional, did not lose money. Voluntary = still renewable but the policy did not renew it for at least a year (its own quality bar or the money test).", "");
P("| Strategy | Variant | Shows | S5 reached/viable | S10 | S15 | S20 | Ended: score / voluntary / still running | Median seasons | Max seasons | Long-runner shows (≥12 seasons, last 3 avg ≥ 7) | Irrational renewals (after 2 losing seasons) |", "|---|---|---|---|---|---|---|---|---|---|---|---|");
for (const st of STRATS)
  for (const v of ["A0_noFiring", "A_control", "B_mildViewer", "B_ep_mildViewer", "C_mildViewer_lessReview", "D_strongViewer"]) {
    const g = get(v, st);
    if (!g || !g.viability.shows) continue;
    const a = g.viability.atSeason;
    P(`| ${st} | ${v} | ${g.viability.shows} | ${pct(a.S5.reached)}/${pct(a.S5.viable)} | ${pct(a.S10.reached)}/${pct(a.S10.viable)} | ${pct(a.S15.reached)}/${pct(a.S15.viable)} | ${pct(a.S20.reached)}/${pct(a.S20.viable)} | ${g.viability.endings.score} / ${g.viability.endings.voluntary} / ${g.viability.endings.running} | ${g.viability.seasonsPerShowMedian} | ${g.viability.seasonsPerShowMax} | ${g.longRunnerShows} | ${g.irrationalRenewals} (${g.careersWithIrrational} careers) |`);
  }

P("", "## 5. Short vs long orders (25 years)", "", "Default policies order the biggest season allowed (5 → 10 → 15 → 20 episodes as Prestige grows). @5ep / @10ep cap the policy's order.", "");
P("| Strategy | Variant | Band 7-10 premiere | Band 7-10 viewer mult | Band 11-15 viewer mult | Band 7-10 net/wk | Max seasons | S10 reached | Median end cash | HoF (all productions) |", "|---|---|---|---|---|---|---|---|---|---|");
for (const st of ["tv-first", "renewal-franchise"])
  for (const v of ["A_control", "A_control@10ep", "A_control@5ep", "B_mildViewer", "B_mildViewer@5ep", "B_ep_mildViewer", "B_ep_mildViewer@10ep", "B_ep_mildViewer@5ep", "C_mildViewer_lessReview", "C_mildViewer_lessReview@5ep"]) {
    const g = get(v, st);
    if (!g) continue;
    P(`| ${st} | ${v} | ${n0(g.bands["7-10"].premiereMedian)} | ${n3(g.bands["7-10"].viewerFatigueMultMean)} | ${n3(g.bands["11-15"].viewerFatigueMultMean)} | ${$(g.bands["7-10"].netPerWeekMedian)} | ${g.viability.seasonsPerShowMax} | ${pct(g.viability.atSeason.S10.reached)} | ${$(g.money.endCashMedian)} | ${g.allProductions.hof} |`);
  }

P("", "## 6. Successful vs mediocre shows (25 years, tv-first + renewal-franchise)", "", "Class by the show's own seasons 1–3 average: successful ≥ 7.5, mediocre < 6.5.", "");
P("| Strategy | Class | Variant | 1-3 avg | 4-6 avg | 7-10 avg | 11-15 avg | 16+ avg | 7-10 premiere | 7-10 net/wk | Seasons 7+ |", "|---|---|---|---|---|---|---|---|---|---|---|");
for (const st of ["tv-first", "renewal-franchise"])
  for (const c of ["successful", "mediocre"])
    for (const v of ["A_control", "B_mildViewer", "C_mildViewer_lessReview", "D_strongViewer"]) {
      const g = get(v, st);
      if (!g) continue;
      const k = g.byClass[c];
      P(`| ${st} | ${c} | ${v} | ${BANDS.map((b) => n2(k[b].avgMean)).join(" | ")} | ${n0(k["7-10"].premiereMedian)} | ${$(k["7-10"].netPerWeekMedian)} | ${k["7-10"].seasons + k["11-15"].seasons + k["16+"].seasons} |`);
    }

P("", "## 7. Creative breakthroughs and comebacks (25 years)", "", "Comeback = season ≥ 7 after two seasons ≥ 1.0 below the show's earlier peak, gaining ≥ 1.0 and reaching ≥ 7.0. Failed attempt = same slump, the studio changed something (twist / new Star / a breakthrough happened) and gained < 0.5.", "");
P("| Strategy | Variant | Breakthroughs | Per production | Per career | Avg size (score pts) | Max size | HoF only because of one | HoF total | Slumps | Comebacks (with breakthrough) | Failed attempts |", "|---|---|---|---|---|---|---|---|---|---|---|---|");
for (const st of STRATS)
  for (const v of ["A_control", "A_events", "A_eventsBig", "C_mildViewer_lessReview", "C_events"]) {
    const g = get(v, st);
    if (!g) continue;
    const b = g.breakthroughs;
    P(`| ${st} | ${v} | ${b.events} | ${pct(b.productions ? b.events / b.productions : null)} | ${n2(b.perCareerMean)} | ${n3(b.sizeMean)} | ${n3(b.sizeMax)} | ${b.hofFromBreakthrough} | ${b.hofTotal} | ${g.comebacks.slumps} | ${g.comebacks.count} (${g.comebacks.withBreakthrough}) | ${g.comebacks.failed} |`);
  }

P("", "## 8. Horizons (A_control vs C)", "");
P("| Strategy | Variant | Years | Median end cash | ≥3 yrs debt | Prestige (median) | Seasons in band 7-10 | Band 7-10 avg | HoF (all) | Max seasons | Voluntary share |", "|---|---|---|---|---|---|---|---|---|---|---|");
for (const st of STRATS)
  for (const v of ["A_control", "C_mildViewer_lessReview"])
    for (const y of [10, 15, 25]) {
      const g = get(v, st, y);
      if (!g) continue;
      P(`| ${st} | ${v} | ${y} | ${$(g.money.endCashMedian)} | ${g.money.debt3yCareers} | ${n0(g.money.prestigeMedian)} | ${g.bands["7-10"].seasons} | ${n3(g.bands["7-10"].avgMean)} | ${g.allProductions.hof} | ${g.viability.seasonsPerShowMax} | ${pct(g.viability.voluntaryShareOfEnded)} |`);
    }

P("", "## 9. Interaction with the Gate 2.6 combo_D curve (25 years)", "");
P("| Strategy | Variant | Avg (all productions) | HoF (all) | TV band 1-3 avg | TV band 7-10 avg | TV band 11-15 avg | Max seasons | Median end cash |", "|---|---|---|---|---|---|---|---|---|");
for (const st of STRATS)
  for (const v of ["C_mildViewer_lessReview", "C_comboD"]) {
    const g = get(v, st);
    if (!g) continue;
    P(`| ${st} | ${v} | ${n3(g.allProductions.avgMean)} | ${g.allProductions.hof} | ${n3(g.bands["1-3"].avgMean)} | ${n3(g.bands["7-10"].avgMean)} | ${n3(g.bands["11-15"].avgMean)} | ${g.viability.seasonsPerShowMax} | ${$(g.money.endCashMedian)} |`);
  }

P("", "## 10. Best and worst seasons (25 years, seeds for reproduction)", "");
for (const v of ["A_control", "C_mildViewer_lessReview", "C_events"])
  for (const st of ["tv-first", "renewal-franchise"]) {
    const g = get(v, st);
    if (!g) continue;
    P(`- **${v} / ${st}** best: ${g.best.map((x: J) => `seed ${x.seed} ${x.show} S${x.season} (${x.avg})`).join("; ")} · worst: ${g.worst.map((x: J) => `seed ${x.seed} ${x.show} S${x.season} (${x.avg})`).join("; ")}`);
  }

P("", "## 11. Year-by-year TV seasons (25 years, tv-first)", "");
P("| Year | A seasons | A avg | A net/wk | C avg | C viewer mult | D avg | D viewer mult |", "|---|---|---|---|---|---|---|---|");
const ya = get("A_control", "tv-first")?.years, yc = get("C_mildViewer_lessReview", "tv-first")?.years, yd = get("D_strongViewer", "tv-first")?.years;
if (ya) for (let y = 1; y <= 25; y++) P(`| ${y} | ${ya[y].seasons} | ${n2(ya[y].avgMean)} | ${$(ya[y].netPerWeekMedian)} | ${n2(yc?.[y]?.avgMean)} | ${n3(yc?.[y]?.viewerFatigueMultMean)} | ${n2(yd?.[y]?.avgMean)} | ${n3(yd?.[y]?.viewerFatigueMultMean)} |`);
console.log(out.join("\n"));
