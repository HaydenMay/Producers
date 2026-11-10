// CLI: sim | batch | compare | scenarios | replay. All commands use the same core rules.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { baselineConfig, configHash, setPath, withOverrides, type Config } from "../core/config";
import { replay } from "../core/simulation";
import { STRATEGY_IDS } from "../agents/strategies";
import { runCareer } from "../batch/runner";
import { compareBatches, runBatch } from "../batch/batch";
import { checkInvariants } from "../batch/diagnostics";
import { batchReport, careerReport, compareReport, metricsCsv, releasesCsv } from "../batch/report";
import type { CareerMetrics } from "../batch/metrics";
import { experimentJson, experimentReport, runExperiment, type ExperimentSpec } from "../batch/experiment";
import type { Decision } from "../core/types";

function args(argv: string[]) {
  const out: Record<string, string[]> = {};
  for (let i = 0; i < argv.length; i++) {
    if (argv[i].startsWith("--")) {
      const k = argv[i].slice(2);
      const v = argv[i + 1] && !argv[i + 1].startsWith("--") ? argv[++i] : "true";
      (out[k] ??= []).push(v);
    }
  }
  return out;
}
const one = (a: Record<string, string[]>, k: string, d: string) => a[k]?.[0] ?? d;

function loadConfig(path: string | undefined, sets: string[] | undefined): Config {
  let cfg = baselineConfig();
  if (path && path !== "config/baseline.json") cfg = withOverrides(cfg, JSON.parse(readFileSync(path, "utf8")));
  for (const s of sets ?? []) {
    const [p, raw] = s.split("=");
    cfg = setPath(cfg, p, JSON.parse(raw));
    cfg.name = `${cfg.name}+${p}=${raw}`;
  }
  return cfg;
}

function out(dir: string, name: string, content: string) {
  mkdirSync(dir, { recursive: true });
  writeFileSync(join(dir, name), content);
  return join(dir, name);
}

const COMPARE_KEYS: (keyof CareerMetrics)[] = ["endCash", "prestige", "meanAudience", "meanCritic", "shareLate8plus", "share9plus", "surplusKept", "negativeCashWeeks", "maxIpFans", "meanTrustEnd"];

function main() {
  const [cmd, ...rest] = process.argv.slice(2);
  const a = args(rest);
  const dir = one(a, "out", "reports");
  const cfg = loadConfig(a.config?.[0], a.set);
  switch (cmd) {
    case "sim": {
      const seed = Number(one(a, "seed", "42"));
      const strat = one(a, "strategy", "balanced");
      const productions = Number(one(a, "productions", "5"));
      const r = runCareer(seed, strat, cfg, { productions, drain: one(a, "drain", "true") !== "false" });
      const v = checkInvariants(r, cfg);
      const md = careerReport(r.state, cfg, strat, r.decisions.length);
      const base = `sim-seed${seed}-${strat}-${productions}`;
      const p1 = out(dir, `${base}.md`, md);
      out(dir, `${base}.decisions.json`, JSON.stringify({ seed, strategy: strat, configHash: configHash(cfg), decisions: r.decisions }, null, 0));
      out(dir, `${base}.events.json`, JSON.stringify(r.state.events, null, 1));
      console.log(`ruleset ${r.state.rulesetVersion} · config ${cfg.name} (${configHash(cfg)}) · seed ${seed} · strategy ${strat}`);
      console.log(`weeks ${r.state.week} · releases ${r.state.releases.length} · cash $${Math.round(r.state.cash).toLocaleString()} · Prestige ${r.state.prestige} · invariant violations ${v.length}`);
      for (const rel of r.state.releases) console.log(`  ${rel.title.padEnd(24)} ${rel.genre}+${rel.theme} A${rel.audience} C${rel.critic} open ${rel.openingViewers} total ${rel.totalViewers} gross $${Math.round(rel.grossTotal)} take $${Math.round(rel.studioTake)} surplus $${Math.round(rel.surplusKept)}`);
      console.log(`report: ${p1}`);
      break;
    }
    case "batch": {
      const seeds = Number(one(a, "seeds", "100"));
      const start = Number(one(a, "seed-start", "1"));
      const productions = Number(one(a, "productions", "20"));
      const strategies = one(a, "strategies", STRATEGY_IDS.join(",")).split(",");
      const b = runBatch(start, seeds, strategies, cfg, { productions, drain: true });
      const base = `batch-${cfg.name.replace(/[^a-z0-9]+/gi, "_")}-s${seeds}-p${productions}`;
      out(dir, `${base}.md`, batchReport(b, cfg));
      out(dir, `${base}.careers.csv`, metricsCsv(b.metrics));
      if (one(a, "releases-csv", "false") === "true") out(dir, `${base}.releases.csv`, releasesCsv(b));
      out(dir, `${base}.summary.json`, JSON.stringify({ meta: b.meta, summary: b.summary, trends: b.trends, flags: b.flags, violations: b.violations }, null, 1));
      console.log(`ruleset ${b.meta.ruleset} · config ${b.meta.config} (${b.meta.configHash}) · seeds ${b.meta.seeds.join("–")} · ${b.meta.careers} careers · ${b.meta.runtimeMs} ms`);
      console.log(`invariant violations: ${b.violations.length}`);
      for (const f of b.flags) console.log(`${f.fired ? "FIRED" : "  ok "} ${f.flag}: ${f.why}`);
      console.log(`reports: ${dir}/${base}.*`);
      break;
    }
    case "compare": {
      const seeds = Number(one(a, "seeds", "100"));
      const productions = Number(one(a, "productions", "20"));
      const strategies = one(a, "strategies", STRATEGY_IDS.join(",")).split(",");
      const baseCfg = loadConfig(a.baseline?.[0], undefined);
      const candCfg = a.candidate ? loadConfig(a.candidate[0], a.set) : loadConfig(undefined, a.set);
      const A = runBatch(1, seeds, strategies, baseCfg, { productions, drain: true }, true);
      const B = runBatch(1, seeds, strategies, candCfg, { productions, drain: true }, true);
      const rows = compareBatches(A, B, COMPARE_KEYS);
      const label = a.set?.join(", ") ?? a.candidate?.[0] ?? "candidate";
      const p = out(dir, `compare-${label.replace(/[^a-z0-9]+/gi, "_")}-s${seeds}-p${productions}.md`, compareReport(rows, A, B, label, candCfg));
      console.log(`baseline ${A.meta.configHash} vs candidate ${B.meta.configHash} · ${seeds} paired seeds · ${A.meta.runtimeMs + B.meta.runtimeMs} ms`);
      for (const r of rows.filter((r) => ["endCash", "prestige", "shareLate8plus"].includes(r.metric))) console.log(`  ${r.strategy.padEnd(18)} ${r.metric.padEnd(16)} ${r.baselineMedian} → ${r.candidateMedian} (paired Δ ${r.medianPairedDelta}, higher in ${(r.shareImproved * 100).toFixed(0)}%)`);
      console.log(`report: ${p}`);
      break;
    }
    case "experiment": {
      const specPath = one(a, "spec", "");
      const spec = JSON.parse(readFileSync(specPath, "utf8")) as ExperimentSpec;
      if (a.seeds) spec.seeds = Number(one(a, "seeds", "100"));
      if (a.productions) spec.productions = one(a, "productions", "20").split(",").map(Number);
      const name = specPath.replace(/^.*\//, "").replace(/\.json$/, "");
      const res = runExperiment(spec, cfg);
      const p = out(dir, `${name}.md`, experimentReport(res, `Experiment: ${name}`));
      out(dir, `${name}.json`, JSON.stringify(experimentJson(res), null, 1));
      const viol = res.runs.reduce((x, r) => x + r.batch.violations.length, 0);
      console.log(`experiment ${name}: ${res.runs.length} runs · ${res.runs.reduce((x, r) => x + r.batch.meta.careers, 0)} careers · ${res.runs.reduce((x, r) => x + r.batch.meta.runtimeMs, 0)} ms · invariant violations ${viol}`);
      console.log(`report: ${p}`);
      break;
    }
    case "replay": {
      const file = one(a, "decisions", "");
      const log = JSON.parse(readFileSync(file, "utf8")) as { seed: number; decisions: Decision[]; configHash: string };
      if (log.configHash !== configHash(cfg)) console.warn(`WARNING: decision log was recorded with config ${log.configHash}, current is ${configHash(cfg)}`);
      const s = replay(log.seed, cfg, log.decisions);
      console.log(`replayed ${log.decisions.length} decisions: week ${s.week}, cash $${Math.round(s.cash)}, releases ${s.releases.length}, Prestige ${s.prestige}`);
      break;
    }
    case "scenarios": {
      const bank = JSON.parse(readFileSync("config/scenarios.json", "utf8")) as { regressionSeeds: { seed: number; strategy: string; productions: number; why: string }[] };
      let bad = 0;
      for (const r of bank.regressionSeeds) {
        const res = runCareer(r.seed, r.strategy, cfg, { productions: r.productions, drain: true });
        const v = checkInvariants(res, cfg);
        bad += v.length;
        console.log(`${v.length ? "FAIL" : "ok  "} seed ${r.seed} ${r.strategy} x${r.productions}: cash $${Math.round(res.state.cash).toLocaleString()}, Prestige ${res.state.prestige}, neg weeks ${res.state.counters.negativeCashWeeks} — ${r.why}`);
        for (const x of v) console.log(`     ${x.rule}: ${x.detail}`);
      }
      process.exitCode = bad ? 1 : 0;
      break;
    }
    default:
      console.log("usage: tsx src/cli/main.ts <sim|batch|compare|replay|scenarios> [--seed N] [--strategy id] [--productions N] [--seeds N] [--strategies a,b] [--config file] [--set path=jsonValue] [--baseline file --candidate file] [--out dir]");
      console.log(`strategies: ${STRATEGY_IDS.join(", ")}`);
  }
}

main();
