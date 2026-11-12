// Assumptions register: the "Full parameter listing" section of docs/assumptions-register.md is GENERATED from
// config/baseline.json (audit 2026-11-12: the hand-kept listing had drifted to 31 legacy values).
//   npx tsx scripts/register.ts           → rewrite the section from the live baseline
//   npx tsx scripts/register.ts --check   → exit 1 if the section disagrees with the baseline (run by `npm run ledger:check`)
// Keys starting with "_" (labels / notes) are skipped: they live in the config itself.
import { readFileSync, writeFileSync } from "node:fs";

const REG = "docs/assumptions-register.md";
const HEADING = "## Full parameter listing (`config/baseline.json`)";
const baseline = JSON.parse(readFileSync("config/baseline.json", "utf8")) as Record<string, unknown>;

const rows: string[] = [];
const walk = (v: unknown, path: string[]) => {
  if (v !== null && typeof v === "object" && !Array.isArray(v)) {
    for (const [k, x] of Object.entries(v as Record<string, unknown>)) if (!k.startsWith("_")) walk(x, [...path, k]);
    return;
  }
  rows.push(`| \`${path.join(".")}\` | ${JSON.stringify(v).replace(/\|/g, "\\|")} |`);
};
walk(baseline, []);

const section = [
  HEADING,
  "",
  "**Generated** by `npx tsx scripts/register.ts` from the live Producers default; `npm run ledger:check` fails if it drifts. Values are *(test)* harness assumptions, never design decisions (see the ledger). Labels (`_label` keys) are in the config. Regression-only values: `config/legacy-advance.json`; candidates: `config/gate3.json`, `gate4.json`, `gate4q.json`, `candidate.json`; experiment variants: `config/experiments/`.",
  "",
  "| Path | Value |",
  "|---|---|",
  ...rows,
  "",
].join("\n");

const doc = readFileSync(REG, "utf8");
const at = doc.indexOf(HEADING);
if (at < 0) throw new Error(`${REG}: heading not found: ${HEADING}`);
const next = doc.slice(at + HEADING.length).search(/\n## /);
const tail = next < 0 ? "" : doc.slice(at + HEADING.length + next + 1);
const updated = doc.slice(0, at) + section + (tail ? "\n" + tail : "");

if (process.argv.includes("--check")) {
  if (updated !== doc) {
    console.error(`${REG}: the parameter listing disagrees with config/baseline.json. Run: npx tsx scripts/register.ts`);
    process.exit(1);
  }
  console.log(`register: ${rows.length} parameters match config/baseline.json`);
} else {
  writeFileSync(REG, updated);
  console.log(`register: wrote ${rows.length} parameters from config/baseline.json`);
}
