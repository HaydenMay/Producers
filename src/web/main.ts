// Thin UI over the same core. No game rules here: everything goes through getChoices/applyDecision/advanceWeek.
import { baselineConfig, configHash, setPath, withOverrides, type Config } from "../core/config";
import gate3Overrides from "../../config/gate3.json";
import gate4Overrides from "../../config/gate4.json";
import { allowedOrders, renewalStatus } from "../core/formats";
import { streamingRequirements } from "../core/streaming";
import { advanceWeek, applyDecision, createStudio, getChoices, replay, FEATURES_NOT_MODELLED } from "../core/simulation";
import type { Decision, PlanDecision, StudioState } from "../core/types";
import { STRATEGIES, ALL_STRATEGY_IDS as STRATEGY_IDS, type AgentCtx } from "../agents/strategies";
import { decideFor } from "../agents/economy";
import { makeAgentRng } from "../core/rng";
import { runBatch } from "../batch/batch";
import { filmLabel } from "../batch/greatness";
import { releaseTrace, metricsCsv } from "../batch/report";
import type { Dist } from "../batch/metrics";

let cfg: Config = baselineConfig();
/** the preset the config editor starts from (baseline, or the Gate 3 mixed-format config) */
let preset: () => Config = baselineConfig;
let s: StudioState = createStudio(42, cfg);
let log: Decision[] = [];
let agentRng = makeAgentRng(42, "ui");
let agentCtx: AgentCtx = { reinvestsThisStop: 0 };
const $ = (x: number) => `$${Math.round(x).toLocaleString("en-US")}`;
const el = (id: string) => document.getElementById(id)!;
const esc = (t: string) => t.replace(/[&<>]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;" })[c]!);

function act(d: Decision) {
  try {
    applyDecision(s, cfg, d);
    log.push(d);
  } catch (e) {
    alert((e as Error).message);
  }
  renderCareer();
}

function toNextDecision() {
  for (let i = 0; i < 500; i++) {
    const ch = getChoices(s, cfg);
    if (ch.phase !== "production" && ch.phase !== "contract") break;
    act({ type: "wait" });
  }
  renderCareer();
}

function newStudio(seed: number) {
  s = createStudio(seed, cfg);
  log = [];
  agentRng = makeAgentRng(seed, "ui");
  agentCtx = { reinvestsThisStop: 0 };
  renderCareer();
}

function planForm(ch: ReturnType<typeof getChoices>): string {
  const plans = ch.options.filter((o): o is PlanDecision => o.type === "plan");
  const genres = [...new Set(plans.map((p) => p.genre))];
  const themes = [...new Set(plans.filter((p) => p.ipRelation === "new").map((p) => p.theme))];
  const ips = Object.values(s.ips).filter((ip) => plans.some((p) => p.parentIpId === ip.id));
  const book = Object.entries(s.comboBook).map(([k, g]) => `${k.replace("|", " + ")}: A ${g.audience} / C ${g.critic}`).join(" · ") || "nothing revealed yet";
  const trends = Object.entries(s.trends).filter(([, t]) => t.stage !== "none").map(([k, t]) => `${k}: ${t.stage}`).join(", ") || "no active crazes";
  return `<div class="card"><h3>Plan the next production</h3>
    <div class="row">
      <label>Format <select id="fmt">${[...new Set(plans.map((p) => p.format ?? "movie"))].map((f) => `<option>${f}</option>`).join("")}</select></label>
      <label>Episodes <select id="eps"><option value="">—</option>${[...new Set(plans.filter((p) => p.episodes).map((p) => p.episodes))].map((n) => `<option>${n}</option>`).join("")}</select></label>
      <label>Relation <select id="rel"><option value="new">new IP</option><option value="sequel">sequel</option><option value="reboot">reboot</option><option value="spinoff">spinoff</option><option value="season">next TV season</option></select></label>
      <label>Twist <select id="twist"><option value="">no twist</option>${s.unlockedThemes.map((t) => `<option>${t}</option>`).join("")}</select></label>
      <label>Parent IP <select id="ip">${ips.map((ip) => `<option value="${ip.id}">${esc(ip.name)} (${ip.fans.toLocaleString()} fans)</option>`).join("") || "<option value=''>—</option>"}</select></label>
      <label>Genre <select id="genre">${genres.map((g) => `<option>${g}</option>`).join("")}</select></label>
      <label>Theme <select id="theme">${themes.map((t) => `<option>${t}</option>`).join("")}</select></label>
      ${plans.some((p) => p.route === "original") ? `<label><input type="checkbox" id="asOriginal"/> as Streaming Original</label>` : ""}
      <button class="primary" id="doPlan">${cfg.economy.mode === "late_distribution" ? "Start it (studio pays the base cost)" : "Pitch it"}</button>
    </div>
    ${(ch.notes ?? []).map((n) => `<p><b>${esc(n)}</b></p>`).join("")}
    ${ch.contracts ? `<h3>Work-for-hire (money + staff XP, never Prestige)</h3><div class="row">${ch.contracts.map((c) => `<button data-contract="${c.id}" ${c.available ? "" : "disabled"} title="${esc(c.why)}">${esc(c.name)}: ${c.weeks} wks, ${$(c.fee)} fee + payroll covered</button>`).join("")}</div><p class="muted">${ch.contracts.map((c) => `${esc(c.name)}: ${esc(c.why)}`).join(" · ")}</p>` : ""}
    <p class="muted">Combo book: ${esc(book)}<br/>Trends: ${esc(trends)}<br/>Sequels/reboots keep the IP's genre + theme; spinoffs keep the genre. TV seasons keep the show's genre; a twist changes its theme. Limited series never renew.<br/>${tvLine()}</p></div>`;
}

function tvLine(): string {
  if (!cfg.formats.tv) return "TV/streaming disabled in this config (load the Gate 3 config).";
  const shows = Object.values(s.ips).filter((i) => i.format === "tv").map((i) => `${esc(i.name)}: ${renewalStatus(s, cfg, i).reason}; fans ${i.fans.toLocaleString()}${i.anticipation ? `, anticipation ${i.anticipation.toFixed(2)}` : ""}`);
  const req = streamingRequirements(s, cfg);
  return `TV ${s.tvUnlocked ? `unlocked (max order ${allowedOrders(s, cfg).at(-1)} episodes at Prestige ${s.prestige})` : `locked (needs Prestige ${cfg.tv.unlock.prestige} + $${cfg.tv.unlock.cost.toLocaleString()})`} · ${shows.join(" · ") || "no shows"}<br/>Streaming: ${s.platform ? `${s.platform.status}${s.platform.status === "live" ? `, ${s.platform.subscribers.toLocaleString()} subscribers, ${s.platform.catalog.length} catalog titles` : ""}` : `needs Prestige ${req.prestige.have}/${req.prestige.need}, cash ${$(req.cash.have)}/${$(req.cash.need)}, catalog ${req.catalog.have}/${req.catalog.need}, Software Engineer ${req.engineer.ok ? "✓" : "✗"}`}`;
}

function reinvestButtons(ch: ReturnType<typeof getChoices>): string {
  const r = ch.options.filter((o) => REINVEST.includes(o.type));
  if (!r.length) return `<p class="muted">No reinvestment available${s.cash < 0 ? " (cash is negative: no hiring/training/ads/self-funding)" : ""}.</p>`;
  return `<div class="row">${r.map((o, i) => `<button data-reinvest="${i}">${o.type === "train" ? `train ${s.staff.find((x) => x.id === (o as { staffId: string }).staffId)?.name}` : o.type === "research_theme" ? `research ${(o as { theme: string }).theme}` : o.type === "upgrade_studio" ? `upgrade studio capacity (${s.maxStaff} → ${cfg.staffCapacity.ladder[s.capacityLevel + 1]}, $${((cfg.staffCapacity.upgradeCosts as number[])[s.capacityLevel] ?? 0).toLocaleString()})` : o.type === "announce_season" ? `announce next season of ${esc(s.ips[(o as { ipId: string }).ipId].name)} ($${cfg.tv.announce.cost.toLocaleString()})` : o.type === "unlock_tv" ? `unlock TV ($${cfg.tv.unlock.cost.toLocaleString()})` : o.type === "fire" ? (() => { const st = s.staff.find((x) => x.id === (o as { staffId: string }).staffId)!; return `dismiss ${esc(st.name)} (−${$(st.wage)}/wk payroll, frees a slot)`; })() : o.type === "build_streaming" ? `build streaming service ($${cfg.streaming.buildCost.toLocaleString()}, ${cfg.streaming.buildWeeks} wks)` : o.type.replace("_", " ")}</button>`).join("")}</div>`;
}

function renderCareer() {
  const ch = getChoices(s, cfg);
  const root = el("tab-career");
  let body = "";
  if (ch.phase === "planning") body = planForm(ch) + `<div class="card"><h3>Reinvest</h3>${reinvestButtons(ch)}<button id="wait1">Advance 1 week (idle)</button></div>`;
  if (ch.phase === "pitch")
    body = `<div class="card"><h3>Pitch meeting</h3><table><tr><th>Distributor</th><th>Advance</th><th>Royalty</th><th>Reach</th><th>Why</th><th></th></tr>${ch
      .offers!.map((o) => `<tr><td>${o.distributorId}${o.lifeline ? " (lifeline)" : ""}</td><td>${$(o.advance)}</td><td>${(o.royalty * 100).toFixed(0)}%</td><td>${o.reach}</td><td class="muted">${esc(o.reasons.join("; "))}</td><td><button data-offer="${o.distributorId}">Choose</button></td></tr>`)
      .join("")}</table>${ch.options.some((o) => o.type === "choose_offer" && o.distributorId === null) ? `<button data-offer="__self">Self-fund (pay the base cost, keep 100%, small reach)</button>` : `<p class="muted">Self-funding unavailable (needs non-negative cash ≥ base cost).</p>`}${ch.options.some((o) => o.type === "choose_offer" && (o as { original?: boolean }).original) ? `<button data-offer="__original">Streaming Original (self-funded, no box office; debuts to your subscribers)</button>` : ""}</div>`;
  if (ch.phase === "casting")
    body = `<div class="card"><h3>40%: audition results</h3><p class="muted">Funds: unspent advance ${$(s.project!.unspentAdvance)} + spendable cash ${$(ch.spendableCash)}. Affordability was checked before this list was shown.</p><table><tr><th>Star</th><th>Source</th><th>Level</th><th>Skills (by family)</th><th>Fame</th><th>Rel.</th><th>Price (fame fee + premium − loyalty)</th><th></th></tr>${ch
      .auditionCards!.map((c) => {
        const st = s.stars[c.starId];
        return `<tr><td>${esc(st.name)}${c.fallbackInserted ? " <b>(free fallback)</b>" : ""}</td><td>${c.source}</td><td>${st.level}</td><td>${Object.entries(st.skills).map(([k, v]) => `${k} ${v}`).join(", ")}</td><td>${st.fame.toFixed(0)}</td><td>${st.relationship.toFixed(2)}</td><td>${$(c.price)} <span class="muted">(${$(c.breakdown.fameFee)} + ${$(c.breakdown.prestigePremium)} − ${$(c.breakdown.relationshipDiscount)})</span></td><td><button data-cast="${c.starId}" ${c.affordable ? "" : "disabled"}>Cast</button></td></tr>`;
      })
      .join("")}</table></div>`;
  if (ch.phase === "marketing")
    body = `<div class="card"><h3>80%: release campaign</h3><p class="muted">Marketing changes opening viewership only, never scores.</p><div class="row">${ch.campaigns!.map((c) => `<button data-camp="${c.id}" ${c.affordable ? "" : "disabled"}>${c.id} (${$(c.cost)})</button>`).join("")}</div></div>`;
  if (ch.phase === "distribution") {
    const p = s.project!;
    const pv = p.distribution?.preview ?? {};
    body = `<div class="card"><h3>80%: distribution meeting — ${esc(p.title)}</h3><p>Invested so far: <b>${$(ch.investedSoFar ?? 0)}</b> (sunk). Distributors saw a preview of ${pv.preview ?? "?"}/100 (appeal ${pv.appeal ?? "?"}). Their ad money is <b>their own</b>: nothing is paid to you at signing.</p><table><tr><th>Distributor</th><th>Ad spend (theirs)</th><th>Opening awareness</th><th>Reach</th><th>Their share of gross</th><th>Why</th><th></th></tr>${ch
      .bids!.map((b) => `<tr><td>${esc(b.name)}</td><td>${$(b.adSpend)}</td><td>+${b.adAwareness}</td><td>${b.reach}</td><td>${Math.round(b.share * 100)}%</td><td class="muted">${esc(b.reasons.join("; "))}</td><td><button data-dist="${b.distributorId}">Choose</button></td></tr>`)
      .join("")}</table><button data-dist="__self">Self-distribute (reach ${ch.selfDistribution!.reach}, no ads, keep 100%)</button></div>`;
  }
  if (ch.phase === "contract") {
    const c = s.contract!;
    body = `<div class="card"><h3>Work-for-hire: ${esc(c.name)} — week ${c.weeksWorked}/${c.weeks}</h3><p>Fee on delivery ${$(c.fee)} · labor covered so far ${$(c.laborCovered)} · no Prestige, IP or release.</p><div class="row">${reinvestButtons(ch)}</div><div class="row"><button id="wait1">Advance 1 week</button><button class="primary" id="toNext">Advance to next decision</button></div></div>`;
  }
  if (ch.phase === "production") {
    const p = s.project!;
    body = `<div class="card"><h3>In production: ${esc(p.title)} — ${p.progress.toFixed(1)}%</h3><p>Meter points: ${Object.entries(p.meterPoints).map(([k, v]) => `${k} ${v.toFixed(1)}`).join(" · ")} · Star points ${p.starPoints.toFixed(1)} · Unspent advance ${$(p.unspentAdvance)}</p>
      <div class="row">${reinvestButtons(ch)}</div>
      <div class="row"><button id="wait1">Advance 1 week</button><button class="primary" id="toNext">Advance to next decision</button>${ch.canCancel ? `<button id="cancel">${cfg.economy.mode === "late_distribution" ? "Cancel (everything spent is sunk)" : "Cancel (repay advance)"}</button>` : `<span class="muted">Cancel unavailable: can't repay the advance</span>`}</div></div>`;
  }
  const rels = [...s.releases].reverse();
  root.innerHTML = `
    <div class="card row">
      <label>Seed <input id="seed" type="number" value="${s.seed}"/></label><button id="newStudio">New studio</button>
      <label>Strategy <select id="strat">${STRATEGY_IDS.map((x) => `<option>${x}</option>`).join("")}</select></label><button id="agent">Let strategy decide once</button><button id="agent20">…until 1 release</button>
      <button id="dlLog">Download decision log</button><button id="g3cfg">Load Gate 3 mixed config</button><button id="g4cfg">Load Gate 4 candidate economy</button>
    </div>
    <div class="card"><b>Week ${s.week}</b> (year ${(s.week / 52).toFixed(1)}) · Cash <b>${$(s.cash)}</b> · Prestige <b>${s.prestige}</b> · Staff <b>${s.staff.length} / ${s.maxStaff >= 999 ? "uncapped" : s.maxStaff}</b> · Phase <b>${ch.phase}</b> · Releases ${s.releases.length} (${s.releases.filter((r) => r.active).length} running) · Config ${cfg.name} (${configHash(cfg)})
      <div class="muted">Staff: ${s.staff.map((x) => `${esc(x.name)} [P ${x.stats.plot.toFixed(0)} W ${x.stats.writing.toFixed(0)} F ${x.stats.filming.toFixed(0)} E ${x.stats.editing.toFixed(0)}]`).join(" · ")}<br/>Trust: ${s.distributors.map((d) => `${d.id} ${d.trust.toFixed(2)}`).join(", ")} · Not modelled: ${FEATURES_NOT_MODELLED.join(", ")}</div></div>
    ${body}
    <div class="grid2"><div class="card"><h3>Releases (newest first)</h3>${rels.map((r) => `<details><summary>${esc(r.title)} — A ${r.audience} / C ${r.critic} · gross ${$(r.grossTotal)} ${r.active ? "(running)" : ""}</summary><pre>${esc(releaseTrace(r, s))}</pre></details>`).join("") || "<p class='muted'>none yet</p>"}</div>
    <div class="card"><h3>Event log (latest 40)</h3><pre>${esc(s.events.slice(-40).map((e) => `w${e.week} [${e.type}] ${e.message}`).join("\n"))}</pre></div></div>`;
  // wiring
  (el("strat") as HTMLSelectElement).value = (window as unknown as { __strat?: string }).__strat ?? "balanced";
  el("strat").onchange = (e) => ((window as unknown as { __strat?: string }).__strat = (e.target as HTMLSelectElement).value);
  el("newStudio").onclick = () => newStudio(Number((el("seed") as HTMLInputElement).value));
  const agentOnce = () => {
    const c = getChoices(s, cfg);
    const strat = STRATEGIES[(el("strat") as HTMLSelectElement).value];
    const d = decideFor(strat, s, cfg, c, agentRng, agentCtx);
    // same bookkeeping as the batch runner, so UI and CLI agents behave identically
    if (d.type === "hire" || d.type === "train" || d.type === "studio_ads" || d.type === "research_theme") agentCtx.reinvestsThisStop += 1;
    else agentCtx.reinvestsThisStop = 0;
    act(d);
  };
  el("agent").onclick = agentOnce;
  el("agent20").onclick = () => {
    const target = s.releases.length + 1;
    for (let i = 0; i < 800 && s.releases.length < target; i++) agentOnce();
  };
  el("dlLog").onclick = () => download(`decisions-seed${s.seed}.json`, JSON.stringify({ seed: s.seed, configHash: configHash(cfg), decisions: log }));
  el("g3cfg").onclick = () => {
    preset = () => withOverrides(baselineConfig(), gate3Overrides as Record<string, unknown>);
    cfg = preset();
    newStudio(s.seed);
    renderConfig();
  };
  root.querySelectorAll<HTMLButtonElement>("[data-offer]").forEach((b) => (b.onclick = () => act(b.dataset.offer === "__original" ? { type: "choose_offer", distributorId: null, original: true } : { type: "choose_offer", distributorId: b.dataset.offer === "__self" ? null : b.dataset.offer! })));
  document.getElementById("g4cfg")?.addEventListener("click", () => {
    preset = () => withOverrides(baselineConfig(), gate4Overrides as Record<string, unknown>);
    cfg = preset();
    newStudio(s.seed);
    renderConfig();
  });
  root.querySelectorAll<HTMLButtonElement>("[data-dist]").forEach((b) => (b.onclick = () => act({ type: "distribute", distributorId: b.dataset.dist === "__self" ? null : b.dataset.dist! })));
  root.querySelectorAll<HTMLButtonElement>("[data-contract]").forEach((b) => (b.onclick = () => act({ type: "contract", contractId: b.dataset.contract! })));
  root.querySelectorAll<HTMLButtonElement>("[data-cast]").forEach((b) => (b.onclick = () => act({ type: "cast", starId: b.dataset.cast! })));
  root.querySelectorAll<HTMLButtonElement>("[data-camp]").forEach((b) => (b.onclick = () => act({ type: "market", campaign: b.dataset.camp! })));
  const reinvest = ch.options.filter((o) => REINVEST.includes(o.type));
  root.querySelectorAll<HTMLButtonElement>("[data-reinvest]").forEach((b) => (b.onclick = () => act(reinvest[Number(b.dataset.reinvest)])));
  document.getElementById("wait1")?.addEventListener("click", () => act({ type: "wait" }));
  document.getElementById("toNext")?.addEventListener("click", toNextDecision);
  document.getElementById("cancel")?.addEventListener("click", () => act({ type: "cancel" }));
  document.getElementById("doPlan")?.addEventListener("click", () => {
    const rel = (el("rel") as HTMLSelectElement).value as PlanDecision["ipRelation"];
    const ipId = (el("ip") as HTMLSelectElement).value;
    const plans = ch.options.filter((o): o is PlanDecision => o.type === "plan");
    const genre = (el("genre") as HTMLSelectElement).value;
    const theme = (el("theme") as HTMLSelectElement).value;
    const fmt = (el("fmt") as HTMLSelectElement).value;
    const eps = Number((el("eps") as HTMLSelectElement).value) || undefined;
    const twist = (el("twist") as HTMLSelectElement).value || undefined;
    const orig = (document.getElementById("asOriginal") as HTMLInputElement | null)?.checked ?? false;
    const okFmt = (p: PlanDecision) => (p.format ?? "movie") === fmt && (fmt !== "tv" || p.episodes === eps) && (p.route === "original") === orig;
    const match =
      rel === "new"
        ? plans.find((p) => okFmt(p) && p.ipRelation === "new" && p.genre === genre && p.theme === theme)
        : rel === "spinoff"
          ? plans.find((p) => p.ipRelation === "spinoff" && p.parentIpId === ipId && p.theme === theme)
          : rel === "season"
            ? plans.find((p) => okFmt(p) && p.ipRelation === "season" && p.parentIpId === ipId && p.twistTheme === twist)
            : plans.find((p) => p.ipRelation === rel && p.parentIpId === ipId);
    if (!match) return alert("That combination isn't a legal plan right now.");
    act(match);
  });
}

const REINVEST = ["hire", "train", "studio_ads", "research_theme", "upgrade_studio", "unlock_tv", "announce_season", "hire_engineer", "build_streaming", "fire"];

function download(name: string, text: string) {
  const a = document.createElement("a");
  a.href = URL.createObjectURL(new Blob([text], { type: "text/plain" }));
  a.download = name;
  a.click();
}

function renderBatch() {
  const root = el("tab-batch");
  root.innerHTML = `<div class="card row"><label>Seeds <input id="bSeeds" type="number" value="50"/></label><label>Productions <input id="bProd" type="number" value="20"/></label>
    ${STRATEGY_IDS.map((x) => `<label><input type="checkbox" class="bStrat" value="${x}" checked/> ${x}</label>`).join(" ")}
    <button class="primary" id="bRun">Run batch</button></div><div id="bOut"></div>`;
  el("bRun").onclick = () => {
    const strategies = [...root.querySelectorAll<HTMLInputElement>(".bStrat:checked")].map((x) => x.value);
    const b = runBatch(1, Number((el("bSeeds") as HTMLInputElement).value), strategies, cfg, { productions: Number((el("bProd") as HTMLInputElement).value), drain: true }, true);
    const keys = ["endCash", "prestige", "meanAudience", "meanCritic", "shareLate8plus", "surplusKept", "negativeCashWeeks", "meanTrustEnd"];
    el("bOut").innerHTML = `<div class="card"><b>${b.meta.careers} careers · ${b.meta.runtimeMs} ms · config ${b.meta.config} (${b.meta.configHash}) · invariant violations: ${b.violations.length}</b>
      <table><tr><th>Strategy</th>${keys.map((k) => `<th>${k} (median)</th>`).join("")}</tr>${Object.entries(b.summary).map(([st, row]) => `<tr><td>${st}</td>${keys.map((k) => `<td>${(row[k] as Dist).median}</td>`).join("")}</tr>`).join("")}</table></div>
      <div class="card"><h3>Great films (whole career)</h3><p class="muted">Hall of Fame = average of Audience and Critic ≥ 9.0. Counts with % of films.</p><table><tr><th>Strategy</th><th>Films</th><th>HoF</th><th>Avg ≥9</th><th>Avg &gt;9</th><th>Aud ≥9</th><th>Crit ≥9</th><th>Careers with 0 HoF</th><th>Best/career p50</th><th>Best film</th></tr>${b.great
        .filter((g) => g.slice === "all")
        .map((g) => `<tr><td>${g.strategy}</td><td>${g.films}</td><td>${g.hof.n} (${g.hof.pct}%)</td><td>${g.avg9inc.n} (${g.avg9inc.pct}%)</td><td>${g.avg9strict.n} (${g.avg9strict.pct}%)</td><td>${g.aud9.n} (${g.aud9.pct}%)</td><td>${g.crit9.n} (${g.crit9.pct}%)</td><td>${g.zeroHofCareers.pct}%</td><td>${g.bestPerCareer?.p50 ?? "—"}</td><td>${esc(filmLabel(g.best))}</td></tr>`)
        .join("")}</table></div>
      <div class="card"><h3>Flags</h3><table>${b.flags.map((f) => `<tr><td class="${f.fired ? "fired" : ""}">${f.flag}</td><td>${f.fired ? "FIRED" : "ok"}</td><td>${esc(f.why)}</td></tr>`).join("")}</table></div>
      <div class="card"><h3>Avg score by production index</h3><pre>${Object.entries(b.trends).map(([k, t]) => `${k.padEnd(18)} ${t.map((x) => x.toFixed(1)).join(" ")}`).join("\n")}</pre>
      <button id="bDl">Download careers CSV</button> <button id="bDlJ">Download summary JSON</button></div>`;
    el("bDl").onclick = () => download("careers.csv", metricsCsv(b.metrics));
    el("bDlJ").onclick = () => download("summary.json", JSON.stringify({ meta: b.meta, summary: b.summary, flags: b.flags }, null, 1));
  };
}

const CURATED: [string, string][] = [
  ["start.cash", "Starting cash"],
  ["staffCapacity.ladder.0", "Starting staff capacity (EXPERIMENTAL)"],
  ["production.movie.baseCost", "Movie base cost"],
  ["production.movie.durationWeeks", "Movie duration (weeks)"],
  ["production.eraBarPerYear", "Era quality bar growth / year"],
  ["expectations.critics.generationYears", "Critic generation length, years (Gate 2.6 proxy, when enabled)"],
  ["expectations.critics.toughnessPerGeneration", "Critic toughness per generation (when enabled)"],
  ["expectations.audience.toughnessPerEra", "Audience expectation per era (when enabled)"],
  ["staffGrowth.statGainPerWeek", "Staff stat growth / week"],
  ["staffGrowth.hireCost", "Hire cost"],
  ["studioGenre.qualityBonusPerLevel", "Studio genre bonus / level"],
  ["stars.feePerFame", "Star fee per Fame^k"],
  ["stars.growthPerProject", "Star skill growth / project"],
  ["audience.baseRetention", "Base weekly retention (geometric model)"],
  ["audience.audienceRetentionWeight", "Word-of-mouth strength (geometric model)"],
  ["audience.diffusion.womPerViewer", "Word of mouth per viewer (diffusion model)"],
  ["audience.diffusion.criticBuzzRate", "Critic buzz rate (diffusion model)"],
  ["audience.fanAwareness", "IP fan → awareness"],
  ["world.grossPerViewer", "Gross per viewer"],
  ["distribution.selfFundReach", "Self-fund reach (pre-streaming)"],
  ["distribution.trustMaxStep", "Max trust change per release"],
  ["marketing.studioAdsBuzz", "Studio ads buzz"],
  ["tv.unlock.prestige", "TV unlock: Prestige (Gate 3 config)"],
  ["tv.unlock.cost", "TV unlock: cost"],
  ["tv.grossPerEpisodeViewer", "TV gross per viewer-episode"],
  ["tv.renewalThreshold", "TV renewal threshold (season average)"],
  ["limitedSeries.grossPerEpisodeViewer", "Limited series gross per viewer-episode"],
  ["streaming.unlock.prestige", "Streaming unlock: Prestige"],
  ["streaming.unlock.minCatalog", "Streaming unlock: finished catalog titles"],
  ["streaming.buildCost", "Streaming build cost"],
  ["streaming.buildWeeks", "Streaming build weeks"],
  ["streaming.feePerSubWeek", "Subscription fee per subscriber-week"],
];

function get(path: string): unknown {
  return path.split(".").reduce<unknown>((o, k) => (o as Record<string, unknown>)[k], cfg);
}

function renderConfig() {
  const root = el("tab-config");
  root.innerHTML = `<div class="card"><p class="warn">Simulation assumptions — not design locks. Changing these doesn't change the game design.</p>
    <table>${CURATED.map(([p, label]) => `<tr><td>${label}</td><td><code>${p}</code></td><td><input type="number" step="any" data-path="${p}" value="${get(p)}"/></td></tr>`).join("")}</table>
    <div class="row"><button class="primary" id="cApply">Apply</button><button id="cReset">Reset to baseline</button><span class="muted">Current hash ${configHash(cfg)}. Applying starts a new studio.</span></div></div>`;
  el("cApply").onclick = () => {
    let c = preset();
    const changed: string[] = [];
    root.querySelectorAll<HTMLInputElement>("[data-path]").forEach((i) => {
      const v = Number(i.value);
      const p = i.dataset.path!;
      const cur = p.split(".").reduce<unknown>((o, k) => (o as Record<string, unknown>)[k], c);
      if (v !== cur) {
        c = setPath(c, p, v);
        changed.push(`${p}=${v}`);
      }
    });
    c.name = changed.length ? `ui:${changed.join(",")}` : preset().name;
    cfg = c;
    newStudio(s.seed);
    renderConfig();
  };
  el("cReset").onclick = () => {
    preset = baselineConfig;
    cfg = baselineConfig();
    newStudio(s.seed);
    renderConfig();
  };
}

function renderReplay() {
  const root = el("tab-replay");
  root.innerHTML = `<div class="card"><p>Paste a decision log (from the CLI's <code>*.decisions.json</code> or the Download button).</p><textarea id="rText" rows="6" style="width:100%"></textarea><button class="primary" id="rRun">Replay into Single career</button></div>`;
  el("rRun").onclick = () => {
    const parsed = JSON.parse((el("rText") as HTMLTextAreaElement).value) as { seed: number; decisions: Decision[]; configHash?: string };
    if (parsed.configHash && parsed.configHash !== configHash(cfg)) alert(`Log recorded with config ${parsed.configHash}; current is ${configHash(cfg)}. Replay may diverge.`);
    s = replay(parsed.seed, cfg, parsed.decisions);
    log = [...parsed.decisions];
    showTab("career");
  };
}

function showTab(t: string) {
  document.querySelectorAll<HTMLButtonElement>("nav button").forEach((b) => b.classList.toggle("active", b.dataset.tab === t));
  ["career", "batch", "config", "replay"].forEach((x) => (el(`tab-${x}`).hidden = x !== t));
  if (t === "career") renderCareer();
}
document.querySelectorAll<HTMLButtonElement>("nav button").forEach((b) => (b.onclick = () => showTab(b.dataset.tab!)));
renderCareer();
renderBatch();
renderConfig();
renderReplay();
void advanceWeek;
