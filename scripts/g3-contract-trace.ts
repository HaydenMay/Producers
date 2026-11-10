// Who pays what each season: the same TV-first career (seed 2, 15 years) under contract A and B.
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { baselineConfig, configHash, withOverrides } from "../src/core/config";
import { runCareer } from "../src/batch/runner";
const G3 = withOverrides(baselineConfig(), JSON.parse(readFileSync("config/gate3.json", "utf8")));
const out: string[] = ["# TV financing disclosure: contract A vs B (same seed, same policy)", "", "> TEST ASSUMPTIONS. tv-first, seed 2, 15 in-game years. Advance = distributor money up front (not revenue). Royalty = distributor share of each week's gross. Kept surplus = unused advance at completion. Branches diverge after the first returning-season pitch (different offers → different later choices).", ""];
for (const v of ["A", "B"]) {
  const cfg = withOverrides(G3, { tv: { contract: { variant: v } } });
  const st = runCareer(2, "tv-first", cfg, { productions: 0, years: 15 }).state;
  out.push(`## Contract ${v} (${configHash(cfg)})`, "", "| Show / season | Episodes | Base cost | Distributor | Advance | Royalty | Gross | Distributor take | Distributor ROI | Studio take | Kept surplus | Studio cash used | Avg score |", "|---|---:|---:|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|");
  for (const r of st.releases.filter((x) => x.format === "tv")) out.push(`| ${r.title} | ${r.episodes} | $${r.baseCost.toLocaleString()} | ${r.distributorId ?? "self"} | $${r.advance.toLocaleString()} | ${(r.royalty * 100).toFixed(0)}% | $${Math.round(r.grossTotal).toLocaleString()} | $${Math.round(r.distributorTake).toLocaleString()} | ${r.advance ? (r.distributorTake / r.advance).toFixed(2) : "—"} | $${Math.round(r.studioTake).toLocaleString()} | $${Math.round(r.surplusKept).toLocaleString()} | $${Math.round(r.cashOverrun).toLocaleString()} | ${r.avgScore} |`);
  const tv = st.releases.filter((x) => x.format === "tv");
  const tot = (f: (r: (typeof tv)[number]) => number) => Math.round(tv.reduce((a, r) => a + f(r), 0)).toLocaleString();
  out.push(`| **total** | | | | $${tot((r) => r.advance)} | | $${tot((r) => r.grossTotal)} | $${tot((r) => r.distributorTake)} | | $${tot((r) => r.studioTake)} | $${tot((r) => r.surplusKept)} | $${tot((r) => r.cashOverrun)} | |`, "", `End cash $${Math.round(st.cash).toLocaleString()}, Prestige ${st.prestige}.`, "");
}
mkdirSync("reports/gate3", { recursive: true });
writeFileSync("reports/gate3/contract-ab-disclosure.md", out.join("\n"));
console.log("reports/gate3/contract-ab-disclosure.md");
