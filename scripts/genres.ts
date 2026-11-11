// Genre unlocks (PROD-091) fast check: when each genre opens, by which route, and what careers then make.
//   npx tsx scripts/genres.ts [--seeds 8] [--years 10] → reports/genres/summary.md
import { mkdirSync, writeFileSync } from "node:fs";
import { baselineConfig, withOverrides } from "../src/core/config";
import { runCareer } from "../src/batch/runner";
import { checkInvariants } from "../src/batch/diagnostics";

const arg = (k: string, d: number) => {
  const i = process.argv.indexOf(`--${k}`);
  return i > 0 ? Number(process.argv[i + 1]) : d;
};
const seeds = arg("seeds", 8), years = arg("years", 10);
const ON = baselineConfig();
const OFF = withOverrides(ON, { genreUnlocks: { enabled: false } });
const POL = ["balanced", "quality-first", "experimenter", "franchise-builder", "cheap-duds"];
const NEW = ["Thriller", "Romance", "Drama", "SciFi", "RomCom"];
const med = (x: number[]) => (x.length ? [...x].sort((a, b) => a - b)[Math.floor((x.length - 1) / 2)] : NaN);
const f1 = (x: number) => (Number.isNaN(x) ? "—" : x.toFixed(1));
const t0 = Date.now();
const L = ["# Genre unlocks (PROD-091)", "", `Shipped default, seeds 1–${seeds}, ${years}-year careers. Cells: **median unlock year** (route: staff / staff_eased / combo). Thresholds *(test)*: Thriller Plot 50, Romance Filming 50, Drama Writing 60, SciFi Editing 60, RomCom = released Comedy + Romance; thresholds ease 5/yr from year 4 (floor 40). Route \"staff_eased\" = opened on an eased bar.`, "", `| Policy | ${NEW.join(" | ")} | Films in new genres | Median avg (off → on) | End cash p50 (off → on) | Violations |`, `|---|${NEW.map(() => "---").join("|")}|---|---|---|---|`];
for (const st of POL) {
  const when: Record<string, number[]> = {}, via: Record<string, Record<string, number>> = {};
  let newFilms = 0, films = 0, viol = 0;
  const avgOn: number[] = [], avgOff: number[] = [], cashOn: number[] = [], cashOff: number[] = [];
  for (let seed = 1; seed <= seeds; seed++) {
    const r = runCareer(seed, st, ON, { productions: 0, years });
    const o = runCareer(seed, st, OFF, { productions: 0, years });
    viol += checkInvariants(r, ON).length;
    for (const e of r.state.events.filter((e) => e.type === "unlock" && e.data?.genre)) {
      const g = e.data!.genre as string;
      (when[g] ??= []).push(e.week / 52);
      (via[g] ??= {})[e.data!.via as string] = (via[g]?.[e.data!.via as string] ?? 0) + 1;
    }
    films += r.state.releases.length;
    newFilms += r.state.releases.filter((x) => NEW.includes(x.genre)).length;
    avgOn.push(...r.state.releases.map((x) => x.avgScore));
    avgOff.push(...o.state.releases.map((x) => x.avgScore));
    cashOn.push(r.state.cash);
    cashOff.push(o.state.cash);
  }
  const cell = (g: string) => (when[g] ? `${f1(med(when[g]))} (${Object.entries(via[g]).map(([k, v]) => `${k} ${v}`).join(", ")})` : "never");
  L.push(`| ${st} | ${NEW.map(cell).join(" | ")} | ${Math.round((100 * newFilms) / films)}% | ${med(avgOff).toFixed(2)} → ${med(avgOn).toFixed(2)} | $${(med(cashOff) / 1e6).toFixed(2)}M → $${(med(cashOn) / 1e6).toFixed(2)}M | ${viol} |`);
}
// themes: old routes (pitch + $25K purchase) vs new (pitch + trend inspiration, no purchase)
const OLDT = withOverrides(ON, { research: { themePurchase: true }, themeUnlocks: { trendInspiration: false } });
L.push("", "## Themes: unlocked count (of 10; 4 at start) by year, old routes → new routes", "", "Old = staff pitches + $25K research. New (default) = staff pitches + trend inspiration (a locked theme turning Hot unlocks), no purchase.", "", "| Policy | Year 3 | Year 6 | Year 10 | New-route unlocks by type (per career) | End cash p50 (old → new) |", "|---|---|---|---|---|---|");
for (const st of POL) {
  const at = (cfg: typeof ON, y: number) => med(Array.from({ length: seeds }, (_, i) => runCareer(i + 1, st, cfg, { productions: 0, years: y }).state.unlockedThemes.length));
  const routes: Record<string, number> = {};
  const cash = (cfg: typeof ON) => med(Array.from({ length: seeds }, (_, i) => runCareer(i + 1, st, cfg, { productions: 0, years }).state.cash));
  for (let seed = 1; seed <= seeds; seed++)
    for (const e of runCareer(seed, st, ON, { productions: 0, years }).state.events.filter((e) => e.type === "unlock" && !e.data?.genre)) {
      const k = e.data?.via === "trend" ? "trend" : e.message.startsWith("Researched") ? "research" : "pitch";
      routes[k] = (routes[k] ?? 0) + 1 / seeds;
    }
  L.push(`| ${st} | ${at(OLDT, 3)} → ${at(ON, 3)} | ${at(OLDT, 6)} → ${at(ON, 6)} | ${at(OLDT, 10)} → ${at(ON, 10)} | ${Object.entries(routes).map(([k, v]) => `${k} ${v.toFixed(1)}`).join(", ")} | $${(cash(OLDT) / 1e6).toFixed(2)}M → $${(cash(ON) / 1e6).toFixed(2)}M |`);
}
L.push("", `Elapsed ${((Date.now() - t0) / 1000).toFixed(1)} s.`);
mkdirSync("reports/genres", { recursive: true });
writeFileSync("reports/genres/summary.md", L.join("\n") + "\n");
console.log(L.join("\n"));
