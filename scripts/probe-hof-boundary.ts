import { readFileSync } from "node:fs";
import { baselineConfig, withOverrides } from "../src/core/config";
import { runCareer } from "../src/batch/runner";
const cfg = withOverrides(baselineConfig(), JSON.parse(readFileSync("config/candidate.json", "utf8")));
let n = 0, hof = 0, promoted = 0, exact9 = 0;
for (const s of ["balanced", "quality-first", "experimenter"]) for (let seed = 1; seed <= 40; seed++) {
  for (const r of runCareer(seed, s, cfg, { productions: 50, drain: true }).state.releases) {
    n++; if (r.hallOfFame) hof++;
    if (r.hallOfFame && (r.audience + r.critic) / 2 < 9) promoted++;
    if (r.avgScore === 9) exact9++;
  }
}
console.log({ n, hof, promotedByRounding: promoted, exactly9: exact9 });
