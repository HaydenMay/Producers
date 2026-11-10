import { readFileSync } from "node:fs";
import { baselineConfig, withOverrides } from "../src/core/config";
import { runCareer } from "../src/batch/runner";
import { checkInvariants } from "../src/batch/diagnostics";
const over = process.argv[3] ? JSON.parse(process.argv[3]) : {};
const cfg = withOverrides(withOverrides(baselineConfig(), JSON.parse(readFileSync("config/gate3.json", "utf8"))), over);
const years = Number(process.argv[2] ?? 15);
for (const s of ["balanced", "tv-first", "renewal-franchise", "mixed", "streaming-pivot", "traditional-holdout", "limited-focus", "tv-duds"]) {
  for (const seed of [1, 2]) {
    const t0 = Date.now();
    const r = runCareer(seed, s, cfg, { productions: 0, years });
    const st = r.state;
    const by: Record<string, number> = {};
    for (const x of st.releases) by[(x.format ?? "movie") + (x.route === "original" ? "*" : "")] = (by[(x.format ?? "movie") + (x.route === "original" ? "*" : "")] ?? 0) + 1;
    const tvU = st.events.find((e) => e.type === "unlock" && String(e.message).includes("TV series"))?.week;
    const avg = st.releases.reduce((a, x) => a + x.avgScore, 0) / Math.max(1, st.releases.length);
    const v = checkInvariants(r, cfg);
    const seasons = Object.values(st.ips).filter((i) => i.format === "tv").map((i) => st.releases.filter((x) => x.ipId === i.id).map((x) => x.avgScore).join("/"));
    const income: Record<string, number> = {};
    for (const l of st.ledger) if (["studio_take", "subscriptions", "platform_opex", "surplus_transfer"].includes(l.kind)) income[l.kind] = Math.round((income[l.kind] ?? 0) + l.amount);
    console.log(`${s.padEnd(20)} s${seed} yrs ${(st.week / 52).toFixed(1)} rel ${st.releases.length} ${JSON.stringify(by)} avg ${avg.toFixed(2)} HoF ${st.releases.filter((x) => x.hallOfFame).length} P ${st.prestige} cash $${(st.cash / 1e6).toFixed(2)}M staff ${st.staff.length}/${st.maxStaff} tvU ${tvU ?? "-"} platform ${st.platform ? `${st.platform.status}@${st.platform.launchWeek} subs ${st.platform.subscribers} cat ${st.platform.catalog.length}` : "-"} viol ${v.length}${v.length ? " " + JSON.stringify(v.slice(0, 2)) : ""} ${Date.now() - t0}ms`);
    console.log(`      shows: ${seasons.join(" | ")}  income ${JSON.stringify(income)}`);
  }
}
