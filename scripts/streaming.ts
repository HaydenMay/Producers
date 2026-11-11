// Streaming check (PROD-146…149, PROD-212): does building a platform pay back, and when?
//   npx tsx scripts/streaming.ts [--seeds 8] [--set path=json ...]  → reports/streaming/summary.md
// Compares each strategy with streaming ON vs OFF (same seed, same config otherwise) at years 10 / 12 / 15 / 20.
import { mkdirSync, writeFileSync } from "node:fs";
import { baselineConfig, setPath, type Config } from "../src/core/config";
import { runCareer } from "../src/batch/runner";
import { cashSeries, releaseAccounts } from "../src/batch/econ";
import { checkInvariants } from "../src/batch/diagnostics";

const argv = process.argv;
const seeds = argv.indexOf("--seeds") > 0 ? Number(argv[argv.indexOf("--seeds") + 1]) : 8;
let ON: Config = baselineConfig();
const sets: string[] = [];
argv.forEach((a, i) => a === "--set" && sets.push(argv[i + 1]));
for (const s of sets) {
  const [k, v] = s.split("=");
  ON = setPath(ON, k, JSON.parse(v));
}
const OFF = setPath(ON, "formats.streaming", false);
const YEARS = [10, 12, 15, 20];
const POL = ["mixed", "streaming-pivot", "balanced", "tv-first"];
const med = (x: number[]) => (x.length ? [...x].sort((a, b) => a - b)[Math.floor((x.length - 1) / 2)] : NaN);
const M = (x: number) => (Number.isNaN(x) ? "—" : `${x < 0 ? "−" : ""}$${(Math.abs(x) / 1e6).toFixed(2)}M`);
const t0 = Date.now();
const L = ["# Streaming payback", "", `Shipped default + streaming on${sets.length ? ` + ${sets.join(", ")}` : ""}; seeds 1–${seeds}, 20-year careers, cash read at years ${YEARS.join(" / ")}. **Gain** = median of (cash with streaming − cash without) for the same seed. Unlock: ${ON.streaming.unlock.prestige} Prestige + ${ON.streaming.unlock.minCatalog} catalog titles + $${ON.streaming.buildCost / 1000}K build (${ON.streaming.buildWeeks} wks). Subscription $${ON.streaming.feePerSubWeek}/sub/week, opex $${ON.streaming.opex.fixedPerWeek}/wk + $${ON.streaming.opex.perSubPerWeek}/sub. TEST VALUES.`, "", `| Strategy | Builds | Launch year | Subs at yr 20 | Originals | ${YEARS.map((y) => `Gain yr ${y}`).join(" | ")} |`, `|---|---|---|---|---|${YEARS.map(() => "---").join("|")}|`];
let viol = 0;
for (const st of POL) {
  const gain: Record<number, number[]> = {}, launch: number[] = [], subs: number[] = [];
  let built = 0, origs = 0;
  for (let seed = 1; seed <= seeds; seed++) {
    const a = runCareer(seed, st, ON, { productions: 0, years: 20 });
    const b = runCareer(seed, st, OFF, { productions: 0, years: 20 });
    viol += checkInvariants(a, ON).length;
    const ca = cashSeries(a.state), cb = cashSeries(b.state);
    for (const y of YEARS) (gain[y] ??= []).push((ca[y * 52] ?? ca.at(-1)!) - (cb[y * 52] ?? cb.at(-1)!));
    const p = a.state.platform;
    if (p?.launchWeek) {
      built++;
      launch.push(p.launchWeek / 52);
      subs.push(p.subscribers);
    }
    origs += releaseAccounts(a.state, ON).filter((x) => x.format === "original").length;
  }
  L.push(`| ${st} | ${built}/${seeds} | ${launch.length ? med(launch).toFixed(1) : "—"} | ${subs.length ? Math.round(med(subs)).toLocaleString() : "—"} | ${(origs / seeds).toFixed(1)} | ${YEARS.map((y) => M(med(gain[y]))).join(" | ")} |`);
}
L.push("", `Invariant violations (streaming on): ${viol}. Elapsed ${((Date.now() - t0) / 1000).toFixed(1)} s.`);
mkdirSync("reports/streaming", { recursive: true });
writeFileSync("reports/streaming/summary.md", L.join("\n") + "\n");
console.log(L.join("\n"));
