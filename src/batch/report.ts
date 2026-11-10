// Human-readable Markdown + CSV/JSON output. Every report states ruleset, config hash, seeds, strategies,
// and modelled features, and labels numbers as provisional.
import { greatTable, progressTable, WINDOWS, filmLabel, bestOf, filmRefs } from "./greatness";
import { careerG3, g3FormatTable, g3TradeoffTable } from "./gate3metrics";
import { renewalStatus } from "../core/formats";
import type { Config } from "../core/config";
import { configHash } from "../core/config";
import { FEATURES_MODELLED, FEATURES_NOT_MODELLED } from "../core/simulation";
import type { Release, StudioState } from "../core/types";
import type { BatchResult, CompareRow } from "./batch";
import type { CareerMetrics, Dist } from "./metrics";
import { SUMMARY_KEYS } from "./metrics";

const $ = (x: number) => `$${Math.round(x).toLocaleString("en-US")}`;

export function header(title: string, cfg: Config, extra: Record<string, string>): string {
  return [
    `# ${title}`,
    "",
    "> **Simulation assumptions, not design locks.** All numbers come from provisional config values. Nothing here is official balance.",
    "",
    `- Ruleset: \`${"v9.61-movie-kernel-0.1"}\` · Config: \`${cfg.name}\` (hash \`${configHash(cfg)}\`)`,
    ...Object.entries(extra).map(([k, v]) => `- ${k}: ${v}`),
    `- Modelled: ${FEATURES_MODELLED.join("; ")}`,
    `- **Not modelled:** ${FEATURES_NOT_MODELLED.join("; ")}`,
    "",
  ].join("\n");
}

export function releaseTrace(rel: Release, state: StudioState): string {
  const q = rel.trace.quality as Record<string, unknown> & { score: Record<string, unknown> };
  const op = rel.trace.opening as { parts: Record<string, number>; awareness: number; reachCap: number; pool: number; opening: number };
  const sc = q.score as { audienceBase: number; criticBase: number; weakMeters: { meter: string; shortfall: number; audiencePenalty: number; criticPenalty: number }[]; comboAudience: string; comboCritic: string; comboAudienceMult: number; comboCriticMult: number; fatigueMult: number; saturationMult: number };
  const star = rel.starId ? state.stars[rel.starId] : null;
  const dist = rel.distributorId ? state.distributors.find((d) => d.id === rel.distributorId)?.name ?? rel.distributorId : "self-funded";
  const lines: string[] = [];
  lines.push(`### ${rel.title} — ${rel.genre} + ${rel.theme} (${rel.ipRelation})`);
  lines.push("");
  lines.push(`Released week ${rel.releaseWeek} (year ${(rel.releaseWeek / 52).toFixed(1)}) · Distributor: ${rel.route === "original" ? "Streaming Original (self-funded, no box office)" : dist} · Star: ${star ? `${star.name} (L${star.level}, Fame ${star.fame.toFixed(0)})` : "none"} · IP: ${state.ips[rel.ipId]?.name ?? rel.ipId}`);
  if (rel.format) {
    const tv = rel.trace.tv as { showFatigue?: { fatigue: number; base: number; slow: number } | null; twist?: string | null; twistTheme?: string | null; hiatus?: { gapWeeks: number; mult: number } | null; anticipationUsed?: number; fatigueSeasons?: number } | undefined;
    lines.push(`Format: **${rel.format}${rel.seasonNumber ? ` season ${rel.seasonNumber}` : ""}**, ${rel.episodes} episodes (one per week) · ${rel.uniqueViewers?.toLocaleString() ?? "—"} distinct viewers, ${rel.totalViewers.toLocaleString()} viewer-episodes${rel.format === "tv" ? ` · renewal: average ${rel.avgScore} ${rel.avgScore >= 4 ? "≥" : "<"} 4.0 → ${rel.avgScore >= 4 ? "renewable" : "cannot renew"}` : " · self-contained: never renews"}`);
    if (tv) lines.push(`TV: show-age fatigue ${tv.showFatigue ? `${(tv.showFatigue.fatigue * 100).toFixed(1)}% (base ${(tv.showFatigue.base * 100).toFixed(1)}%, quality slows by ${(tv.showFatigue.slow * 100).toFixed(0)}%)` : "none"} · twist ${tv.twistTheme ? `${tv.twistTheme} → ${tv.twist}` : "none"} · hiatus ${tv.hiatus ? `${tv.hiatus.gapWeeks} weeks since the last season aired → anticipation ×${tv.hiatus.mult}` : "n/a"} · announcement anticipation used ${(tv.anticipationUsed ?? 0).toFixed(2)}`);
  }
  if (rel.inCatalog) lines.push(`Joined the streaming catalog after its run (retention value only; no new payouts).`);
  lines.push("");
  lines.push("**Financial waterfall** [LOCKED rules; amounts provisional]");
  lines.push("");
  lines.push("| Item | Amount |\n|---|---:|");
  lines.push(`| Advance received (project reserve, not revenue) | ${$(rel.advance)} |`);
  lines.push(`| Base cost (unavoidable) | −${$(rel.baseCost)} |`);
  lines.push(`| Star fee | −${$(rel.starFee)} |`);
  lines.push(`| Marketing campaign | −${$(rel.campaignCost)} |`);
  lines.push(`| Paid from studio cash (overrun) | ${$(rel.cashOverrun)} |`);
  lines.push(`| **Unused advance kept at completion** | ${$(rel.surplusKept)} |`);
  lines.push(`| Gross from sales (${rel.weekIndex} weeks) | ${$(rel.grossTotal)} |`);
  lines.push(`| Distributor royalty (${(rel.royalty * 100).toFixed(0)}% of weekly gross) | −${$(rel.distributorTake)} |`);
  lines.push(`| **Studio take** | ${$(rel.studioTake)} |`);
  lines.push(`| Net for this title (surplus + take − cash overrun; wages are studio-wide, excluded) | ${$(rel.surplusKept + rel.studioTake - rel.cashOverrun)} |`);
  lines.push("");
  lines.push("**Quality trace** [scores are computed, never rolled]");
  lines.push("");
  lines.push(`Meters (0–100): Plot ${rel.meters.plot} · Writing ${rel.meters.writing} · Filming ${rel.meters.filming} · Editing ${rel.meters.editing}`);
  lines.push(`Inputs: staff points ${JSON.stringify(q.meterPoints)}, Star filming points ${q.starPoints} (Star family fit ${q.starFit}), studio ${rel.genre} level ${q.genreLevel} (+${((q.genreBonus as number) * 100).toFixed(0)}%), era bar x${q.eraBar}`);
  lines.push(`Base scores: Audience ${sc.audienceBase} / Critic ${sc.criticBase}${sc.weakMeters.length ? ` · weak meter: ${sc.weakMeters.map((w) => `${w.meter} (−${w.audiencePenalty} aud / −${w.criticPenalty} crit)`).join(", ")}` : " · no weak meter"}`);
  lines.push(`Combo grades: Audience ${sc.comboAudience} (x${sc.comboAudienceMult}) / Critic ${sc.comboCritic} (x${sc.comboCriticMult}) · repetition fatigue x${sc.fatigueMult} · critic saturation x${sc.saturationMult}`);
  const ex = (sc as { expectations?: { method: string; criticGeneration: number; criticToughness: number; audienceEra: number; audienceToughness: number }; audienceRaw?: number; criticRaw?: number });
  if (ex.expectations) lines.push(`Before expectations (after combo, weakness, fatigue, saturation; pre-clamp): Audience ${ex.audienceRaw} / Critic ${ex.criticRaw} · critic generation ${ex.expectations.criticGeneration} (−${(ex.expectations.criticToughness * 100).toFixed(1)}%, ${ex.expectations.method}) · audience era ${ex.expectations.audienceEra} (−${(ex.expectations.audienceToughness * 100).toFixed(1)}%) · then clamp 0–10 (generation/era 0 = the ones active at game start)`);
  lines.push(`**Final: Audience ${rel.audience} / Critic ${rel.critic} → avg ${rel.avgScore}${rel.hallOfFame ? " (HALL OF FAME)" : ""}**`);
  lines.push("");
  lines.push("**Opening & viewership trace** [marketing/Fame/reach affect viewers only]");
  lines.push("");
  lines.push(`Awareness inputs: ${Object.entries(op.parts).map(([k, v]) => `${k} ${v}`).join(", ")} → awareness ${op.awareness}. Reach cap ${op.reachCap.toLocaleString()} → pool ${op.pool.toLocaleString()} → opening ${op.opening.toLocaleString()}.`);
  lines.push("");
  lines.push("| Wk | Viewers | Retention | Driver | Gross | Studio | Distributor |\n|---:|---:|---:|---|---:|---:|---:|");
  rel.weekly.forEach((w, i) => lines.push(`| ${i + 1} | ${w.viewers.toLocaleString()} | ${w.retention} | ${w.driver} | ${$(w.gross)} | ${$(w.studio)} | ${$(w.distributor)} |`));
  lines.push("");
  lines.push("**Progression trace**");
  lines.push("");
  const pr = (rel.trace.prestigeScored as { id: string; amount: number }[]) ?? [];
  const runAwards = state.events.filter((e) => e.type === "prestige" && e.data?.releaseId === rel.id).map((e) => e.message);
  lines.push(`- Prestige awards: ${runAwards.length ? runAwards.join("; ") : pr.length ? pr.map((p) => `${p.id} +${p.amount}`).join("; ") : "none (no milestone reached)"}`);
  if (rel.trace.ipFans) lines.push(`- IP fans: ${JSON.stringify(rel.trace.ipFans)}`);
  if (rel.trace.starCareer) lines.push(`- Star career: ${JSON.stringify(rel.trace.starCareer)}`);
  if (rel.trace.trust) lines.push(`- Distributor trust: ${(rel.trace.trust as { reason: string }).reason} (step ${(rel.trace.trust as { step: number }).step})`);
  lines.push(`- Rule labels: LOCKED = causal chain, accounting, fallback/no-campaign, thresholds 4.0/9.0, IP fan inheritance. WORKING ASSUMPTION = all formulas' shapes and numbers.`);
  lines.push("");
  return lines.join("\n");
}

export function careerReport(state: StudioState, cfg: Config, strategy: string, decisionsCount: number): string {
  const out: string[] = [header(`Single career — seed ${state.seed}, strategy ${strategy}`, cfg, { Seed: String(state.seed), Strategy: strategy, Decisions: String(decisionsCount) })];
  out.push("## Career summary", "");
  out.push(`- Weeks: ${state.week} (${(state.week / 52).toFixed(1)} years) · Releases: ${state.releases.length} · Cancellations: ${state.counters.cancellations}`);
  out.push(`- End cash: ${$(state.cash)} (start ${$(cfg.start.cash)}) · Negative-cash weeks: ${state.counters.negativeCashWeeks}`);
  out.push(`- Prestige: ${state.prestige} (${state.prestigeAwards.length} awards)`);
  out.push(`- Staff: ${state.staff.map((s) => `${s.name} [P ${s.stats.plot.toFixed(0)} W ${s.stats.writing.toFixed(0)} F ${s.stats.filming.toFixed(0)} E ${s.stats.editing.toFixed(0)}, XP ${s.totalXp}]`).join("; ")}`);
  out.push(`- Studio genre levels (exact genre): ${Object.entries(state.genreXp).map(([g, x]) => `${g} xp ${x}`).join(", ") || "none"}`);
  out.push(`- IP fans: ${Object.values(state.ips).map((i) => `${i.name} ${i.fans.toLocaleString()}`).join("; ")}`);
  out.push(`- Distributor trust: ${state.distributors.map((d) => `${d.id} ${d.trust.toFixed(2)}`).join(", ")}`);
  out.push(`- Stars hired: ${state.hiredStarIds.map((id) => { const s = state.stars[id]; return `${s.name} (L${s.level}, Fame ${s.fame.toFixed(0)}, rel ${s.relationship.toFixed(2)})`; }).join("; ")}`);
  {
    const films = filmRefs(state.seed, strategy, state.releases, cfg);
    const n = films.length;
    const c = (f: (x: (typeof films)[number]) => boolean) => `${films.filter(f).length}/${n}`;
    out.push(`- Great films: Hall of Fame ${c((f) => f.hallOfFame)} · avg ≥9.0 ${c((f) => f.avg >= 9)} · avg >9.0 ${c((f) => f.avg > 9)} · Audience ≥9 ${c((f) => f.audience >= 9)} · Critic ≥9 ${c((f) => f.critic >= 9)} · 8+ ${c((f) => f.avg >= 8)}`);
    out.push(`- Best film: ${filmLabel(bestOf(films))} · best Audience: ${filmLabel(bestOf(films, "audience"))} · best Critic: ${filmLabel(bestOf(films, "critic"))}`);
  }
  if (cfg.formats.limitedSeries || cfg.formats.tv || cfg.formats.streaming) {
    const g = careerG3(state.seed, strategy, state, cfg);
    out.push("", "## Formats, TV and streaming (Gate 3)", "");
    out.push(`- Releases by format: ${Object.entries(g.byFormat).map(([k, x]) => `${k} ${x.n} (avg ${x.avg}, HoF ${x.hof}, net/production-week $${Math.round(x.net / Math.max(1, x.prodWeeks)).toLocaleString()})`).join("; ")}`);
    out.push(`- TV: ${g.tvUnlockWeek === null ? "never unlocked" : `unlocked week ${g.tvUnlockWeek} (year ${(g.tvUnlockWeek / 52).toFixed(1)})`} · shows ${g.shows}, seasons ${g.seasons}, longest ${g.maxSeasons} · ended by a score below ${cfg.tv.renewalThreshold}: ${g.showsEndedByScore}`);
    for (const ip of Object.values(state.ips).filter((i) => i.format === "tv")) {
      const ss = state.releases.filter((r) => r.ipId === ip.id);
      out.push(`  - ${ip.name}: seasons ${ss.map((r) => `S${r.seasonNumber} ${r.episodes}ep ${r.avgScore}${(r.trace.tv as { twistTheme?: string | null } | undefined)?.twistTheme ? ` (twist ${(r.trace.tv as { twistTheme: string }).twistTheme})` : ""}`).join(" → ")} · fans ${ip.fans.toLocaleString()} · ${renewalStatus(state, cfg, ip).reason}`);
    }
    out.push(`- Streaming: ${state.platform ? `${state.platform.status}; build started week ${g.buildStartWeek}, launched week ${g.launchWeek ?? "—"}; subscribers now ${g.subsEnd.toLocaleString()} (peak ${g.subsPeak.toLocaleString()}); by year-end ${g.subsByYear.map((x, i) => `y${i + 1} ${x.toLocaleString()}`).join(", ")}; subscription gross $${Math.round(g.platformGross).toLocaleString()} − operating $${Math.round(g.platformOpex).toLocaleString()}; build $${state.platform.buildCost.toLocaleString()} paid back ${g.paybackWeek ? `week ${g.paybackWeek}` : "not yet"}; catalog ${g.catalog} titles; Originals ${g.originals}` : "not built"}`);
    out.push(`- Last 12 months: traditional studio take $${g.last12.traditional.toLocaleString()} · subscriptions $${g.last12.subscriptions.toLocaleString()} · platform cost $${g.last12.opex.toLocaleString()} · kept surplus $${g.last12.surplus.toLocaleString()}`);
    out.push(`- Prestige by source: ${Object.entries(g.prestigeBySource).map(([k, v]) => `${k} ${v}`).join(", ")} · by format: ${Object.entries(g.prestigeByFormat).map(([k, v]) => `${k} ${v}`).join(", ")}`);
  }
  out.push("");
  out.push("## Releases (full causal trace)", "");
  for (const rel of state.releases) out.push(releaseTrace(rel, state));
  out.push("## Cash ledger (studio cash only)", "");
  out.push("| Week | Kind | Amount | Note |\n|---:|---|---:|---|");
  const agg = new Map<string, number>();
  for (const l of state.ledger) {
    if (l.kind === "payroll" || l.kind === "upkeep") {
      agg.set(l.kind, (agg.get(l.kind) ?? 0) + l.amount);
      continue;
    }
    if (l.kind === "studio_take") {
      agg.set("studio_take", (agg.get("studio_take") ?? 0) + l.amount);
      continue;
    }
    out.push(`| ${l.week} | ${l.kind} | ${$(l.amount)} | ${l.note ?? ""} |`);
  }
  for (const [k, v] of agg) out.push(`| all | ${k} (total) | ${$(v)} | aggregated |`);
  out.push("");
  return out.join("\n");
}

function fmtDist(d: Dist | number, money = false): string {
  if (typeof d === "number") return String(d);
  const f = (x: number) => (money ? $(x) : String(x));
  return `${f(d.median)} (p10 ${f(d.p10)} · p90 ${f(d.p90)})`;
}

export function batchReport(b: BatchResult, cfg: Config): string {
  const out: string[] = [header(`Batch report — ${b.meta.careers} careers`, cfg, { Seeds: `${b.meta.seeds[0]}–${b.meta.seeds[1]} (${b.meta.seeds[1] - b.meta.seeds[0] + 1} seeds)`, Strategies: b.meta.strategies.join(", "), "Productions per career": String(b.meta.productions), Runtime: `${b.meta.runtimeMs} ms (measured)` })];
  out.push("## Invariant checks", "");
  out.push(b.violations.length ? `**${b.violations.length} violations** (harness bug!):\n\n${b.violations.slice(0, 20).map((v) => `- seed ${v.seed} ${v.strategy}: ${v.rule} — ${v.detail}`).join("\n")}` : "All invariants held across every career (ledger audit, gross = sales only, causal scores, Star budgets, unique Prestige ids, runs terminate).");
  out.push("");
  out.push("## Diagnostic flags", "");
  out.push("| Flag | Fired | Why | Seeds | Implicated |\n|---|---|---|---|---|");
  for (const f of b.flags) out.push(`| ${f.flag} | ${f.fired ? "**YES**" : "no"} | ${f.why} | ${f.seeds?.join(", ") ?? ""} | ${f.implicated ?? ""} |`);
  out.push("");
  out.push("## Strategy summary (median, p10–p90)", "");
  const keys = ["endCash", "cashPerYear", "prestige", "meanAudience", "meanCritic", "shareLate8plus", "surplusKept", "surplusShareOfIncome", "royaltyCosts", "negativeCashWeeks", "maxIpFans", "meanTrustEnd"];
  const money = new Set(["endCash", "cashPerYear", "surplusKept", "royaltyCosts"]);
  out.push(`| Strategy | ${keys.join(" | ")} | ended negative | any Prestige |`);
  out.push(`|---|${keys.map(() => "---").join("|")}|---|---|`);
  for (const [s, row] of Object.entries(b.summary)) out.push(`| ${s} | ${keys.map((k) => fmtDist(row[k], money.has(k))).join(" | ")} | ${row.shareEndedNegative} | ${row.shareAnyPrestige} |`);
  out.push("");
  out.push("## Ranking by median end cash", "");
  const ranked = Object.entries(b.summary).sort((a, c) => (c[1].endCash as Dist).median - (a[1].endCash as Dist).median);
  ranked.forEach(([s, row], i) => out.push(`${i + 1}. **${s}** — ${$((row.endCash as Dist).median)} cash, ${(row.prestige as Dist).median} Prestige`));
  out.push("");
  out.push("## Average review score by production index (mean across seeds)", "");
  for (const [s, t] of Object.entries(b.trends)) out.push(`- ${s}: ${t.map((x) => x.toFixed(1)).join(" → ")}`);
  out.push("");
  const wins = WINDOWS.filter((w) => w.lo <= b.meta.productions).map((w) => w.name);
  const pres = Object.fromEntries(Object.entries(b.summary).map(([s, row]) => [s, (row.prestige as Dist).median]));
  out.push("## Great films (Hall of Fame, 9+, best films)", "");
  out.push("Hall of Fame = average of Audience and Critic ≥ 9.0 (`scoring.hofThreshold`). `≥9` inclusive, `>9` strict. Percentages show the film count they are out of. Full detail: `.great.csv`.", "");
  out.push(greatTable(b.great, wins, pres), "");
  if (b.g3.some((g) => Object.keys(g.formatShare).some((k) => k !== "movie") || g.tvUnlockedShare > 0)) {
    out.push("## Gate 3: formats, TV and streaming", "");
    out.push(g3TradeoffTable(b.g3), "", g3FormatTable(b.g3), "");
    out.push("Provisional flags:", "", ...b.g3Flags.map((f) => `- ${f.fired ? "**" + f.flag + "**" : f.flag}: ${f.why}`), "");
  }
  out.push("## Prestige progression", "");
  out.push(progressTable(b.progress), "");
  return out.join("\n");
}

export function compareReport(rows: CompareRow[], a: BatchResult, c: BatchResult, label: string, cfg: Config): string {
  const out: string[] = [header(`Paired-seed comparison — ${label}`, cfg, { Seeds: `${a.meta.seeds[0]}–${a.meta.seeds[1]}`, Baseline: `${a.meta.config} (${a.meta.configHash})`, Candidate: `${c.meta.config} (${c.meta.configHash})`, Productions: String(a.meta.productions) })];
  out.push("Same seeds, same strategies; only the config differs. `shareImproved` = share of paired careers where the candidate value is higher.", "");
  out.push("| Strategy | Metric | Baseline median | Candidate median | Median paired Δ | Share higher |\n|---|---|---:|---:|---:|---:|");
  for (const r of rows) out.push(`| ${r.strategy} | ${r.metric} | ${r.baselineMedian} | ${r.candidateMedian} | ${r.medianPairedDelta} | ${r.shareImproved} |`);
  out.push("", "## Flags: baseline → candidate", "");
  out.push("| Flag | Baseline | Candidate |\n|---|---|---|");
  for (const f of a.flags) {
    const g = c.flags.find((x) => x.flag === f.flag);
    out.push(`| ${f.flag} | ${f.fired ? "FIRED" : "ok"} | ${g?.fired ? "FIRED" : "ok"} |`);
  }
  out.push("");
  return out.join("\n");
}

export function metricsCsv(ms: CareerMetrics[]): string {
  const cols = Object.keys(ms[0]).filter((k) => k !== "scoresByIndex");
  const rows = ms.map((m) => cols.map((c) => String((m as unknown as Record<string, unknown>)[c] ?? "")).join(","));
  return [cols.join(","), ...rows].join("\n");
}

export function releasesCsv(b: BatchResult): string {
  const cols = ["seed", "strategy", "index", "title", "genre", "theme", "ipRelation", "releaseWeek", "distributorId", "royalty", "reachCap", "audience", "critic", "avgScore", "hallOfFame", "openingViewers", "totalViewers", "grossTotal", "studioTake", "distributorTake", "advance", "surplusKept", "starFee", "campaignCost", "cashOverrun"];
  const lines = [cols.join(",")];
  for (const c of b.releases) c.releases.forEach((r, i) => lines.push([c.seed, c.strategy, i + 1, `"${r.title}"`, r.genre, r.theme, r.ipRelation, r.releaseWeek, r.distributorId ?? "self", r.royalty, r.reachCap, r.audience, r.critic, r.avgScore, r.hallOfFame, r.openingViewers, r.totalViewers, r.grossTotal, r.studioTake, r.distributorTake, r.advance, r.surplusKept, r.starFee, r.campaignCost, r.cashOverrun].join(",")));
  return lines.join("\n");
}

export { SUMMARY_KEYS };
