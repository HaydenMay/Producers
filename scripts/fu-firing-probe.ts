// Gate 3 follow-up probe: firing on/off (policies) — engineer access, debt spiral, dismissals.
import { readFileSync } from "node:fs";
import { baselineConfig, withOverrides } from "../src/core/config";
import { runCareer } from "../src/batch/runner";
const G3 = withOverrides(baselineConfig(), JSON.parse(readFileSync("config/gate3.json", "utf8")));
const seeds = Number(process.argv[2] ?? 100);
for (const [label, over] of [["no firing (Gate 3 policies)", { agents: { useFiring: false, economicRenewal: false } }], ["firing only", { agents: { useFiring: true, economicRenewal: false } }], ["firing + economic renewal", {}]] as const) {
  const cfg = withOverrides(G3, over as Record<string, unknown>);
  for (const s of ["renewal-franchise", "mixed", "streaming-pivot", "tv-first"]) {
    let fires = 0, deep = 0, launched = 0, launchYr = 0, minCash = 0, cash: number[] = [], fullAtUnlock = 0, maxS: number[] = [];
    for (let seed = 1; seed <= seeds; seed++) {
      const st = runCareer(seed, s, cfg, { productions: 0, years: 25 }).state;
      fires += st.events.filter((e) => e.type === "fire").length;
      if (st.counters.negativeCashWeeks >= 156) deep++;
      if (st.platform?.launchWeek) { launched++; launchYr += st.platform.launchWeek / 52; }
      cash.push(st.cash);
      minCash = Math.min(minCash, st.cash);
      const tv = Object.values(st.ips).filter((i) => i.format === "tv").map((i) => st.releases.filter((r) => r.ipId === i.id).length);
      maxS.push(Math.max(0, ...tv));
    }
    cash.sort((a, b) => a - b); maxS.sort((a, b) => a - b);
    console.log(`${label.padEnd(28)} ${s.padEnd(18)} fires/career ${(fires / seeds).toFixed(2)} | ≥3y in debt ${deep}/${seeds} | worst end cash $${Math.round(minCash).toLocaleString()} | median cash $${(cash[seeds >> 1] / 1e6).toFixed(2)}M | streaming live ${launched}/${seeds}${launched ? ` @yr ${(launchYr / launched).toFixed(1)}` : ""} | longest show median ${maxS[seeds >> 1]} max ${maxS.at(-1)}`);
  }
}
