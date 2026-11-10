# Entertainment Studio Tycoon — Balance Harness

A headless, deterministic simulation and balance tool for the **Entertainment Studio Tycoon** design (`entertainment_studio_handoff_v9_61.md`). **This is not the game.** It's a testing instrument for comparing strategies, finding exploits and checking that the locked rules hold, before an engine is chosen.

> **Simulation assumptions, not design locks.** Every number in `config/` is provisional. Results are evidence for design discussion, never "official balance."

## Status

| Gate | Status | Notes |
|---|---|---|
| **1 — Deterministic movie kernel** | ✅ Done | Staff, phases, ledger, advances/royalties/surplus/overruns/cancel, Stars (families, budgets, pre-display free fallback, callbacks, relationships), $0 campaign, scores, legs, finite runs, Prestige, IP fans, studio genre levels, trends. Exact replay. |
| **2 — Strategies, batch, diagnostics** | ✅ Done | 7 policies, batch runner, paired-seed compare, 13 diagnostic flags, invariant checker, CSV/JSON/Markdown, regression seed bank. Catches injected bugs. |
| **3 — TV + streaming** | ❌ **Not built** | Limited series, TV seasons, renewals, hiatus, streaming subscribers and Originals are **not modelled**. Every result covers movies only. |
| **4 — Thin browser UI** | ✅ Done (minimal) | Manual step-through career, strategy auto-step, batch runner, config editor, replay. Same core; no rules in the UI. |

**Tests:** 36 passing (unit invariants, counterfactual scenarios, regression + injected-bug detection, UI smoke test via jsdom).
**Performance (measured on this machine):** 7,000 careers × 20 films in 39 s (~5.6 ms per career); 1,400 × 50 films in 31 s; 7,000 × 5 films in 7.7 s.

## Gate 3: limited series, renewable TV and streaming (pending designer review)

Everything is **config-gated**: `config/baseline.json` keeps every Gate 3 feature off (the movie kernel, byte-identical); `config/gate3.json` = the Gate 2.5 candidate + limited series + TV + streaming (Gate 2.6 critic curves stay off). Docs:
- `docs/gate-3-architecture.md`: modules, weekly order, schema changes, invariants.
- `docs/gate-3-assumptions.md`: every Gate 3 number, labelled.
- `docs/gate-3-findings.md`: results.
- `docs/gate-3-open-decisions.md`: ranked designer calls.

```bash
# one mixed career (movies + limited series + TV + streaming), 15 in-game years, with full traces + decision log
npm run sim -- --config config/gate3.json --strategy mixed --seed 1 --years 15 --out reports/gate3/traces
# a TV-only career
npm run sim -- --config config/gate3.json --strategy tv-first --seed 2 --years 15 --out reports/gate3/traces
# a streaming launch (builds as early as it can, then self-funds Streaming Originals)
npm run sim -- --config config/gate3.json --strategy streaming-pivot --seed 1 --years 12 --out reports/gate3/traces
# replay any of them exactly
npm run replay -- --config config/gate3.json --decisions reports/gate3/traces/sim-seed1-mixed-y15.decisions.json
# a 100-seed batch across the Gate 3 policies (10-year horizon)
npm run batch -- --config config/gate3.json --seeds 100 --years 10 --strategies balanced,tv-first,renewal-franchise,mixed,streaming-pivot,traditional-holdout,limited-focus,tv-duds --out reports/gate3/batch
# TV financing A vs B (paired seeds), season sizes, streaming sensitivity, critic curves, main matrix
npm run experiment -- --config config/gate3.json --spec config/experiments/G3_contract.json --out reports/gate3/G3_contract
npm run experiment -- --config config/gate3.json --spec config/experiments/G3_season_size.json --out reports/gate3/G3_season_size
npm run experiment -- --config config/gate3.json --spec config/experiments/G3_streaming.json --out reports/gate3/G3_streaming
npm run experiment -- --config config/gate3.json --spec config/experiments/G3_critics.json --out reports/gate3/G3_critics
npm run experiment -- --config config/gate3.json --spec config/experiments/G3_main.json --out reports/gate3/G3_main
# counterfactual cases (clone-and-branch): low-reach limited series, long show, bad twist, hiatus, HoF evergreen, Originals in debt, idle platform, catalog quality
npm run counterfactuals -- --config config/gate3.json --out reports/gate3
npx tsx scripts/g3-econ.ts    # per-format net per production week (calibration probe)
```

- **New CLI options:** `--years N` (an in-game horizon instead of a production count) for `sim`, `batch` and `experiment` (`"years": [...]` in specs).
- **New policies:** `tv-first`, `renewal-franchise`, `mixed`, `streaming-pivot`, `traditional-holdout`, `limited-focus`, `tv-duds` (adversarial). The pre-Gate-3 policies stay movie-only and serve as all-movie controls.
- **Web UI:** "Load Gate 3 mixed config" button; format / episodes / next-season / twist selectors; Streaming Original button at the pitch; TV unlock, season announcement, engineer and streaming-build buttons (also during production); a TV and streaming status line. The config editor lists the Gate 3 thresholds.

## Gate 2.6 additions (critic generations + great-film metrics, pending designer review)

- **Expectation curves** (`expectations`, off by default, so Gate 2.5 results are byte-identical): a calendar-based **harness proxy** for critic generations (named critics retiring and being replaced by a tougher generation, announced ahead of time) and gentler audience eras. Applied once at release, after combo/weakness/fatigue/saturation and before the 0–10 clamp; published scores never change. Each release trace shows `raw → combo/weakness → generation/era adjustment → final`.
- **Great-film metrics** in every batch, experiment, career report and the web Batch tab:
  - Hall of Fame counts and % (with denominators)
  - average ≥ 9.0 and > 9.0; Audience ≥ 9 and Critic ≥ 9; 8+
  - HoF per career (p10/p50/p90, % of careers with zero) and distinct HoF IPs
  - best film per career (p10/p50/p90/p99)
  - best combined, Audience and Critic films with seed, release #, year and critic generation (deterministic tie-break)
  - breakdowns by release window (1–5, 6–20, 21–50, 51–100), in-game year band and critic generation
- **Prestige progression:** for each Prestige-gated upgrade, the share of careers meeting the gate and buying it, the film # when that happened, "cash-rich but Prestige-locked" careers, and purchases below the gate (must be 0; also an invariant). Milestones awarded per career.
- **Fixed-quality cases:** the same production scored at years 0–36 under each variant (`npm run eras`).
- Docs: `docs/gate-2-6-findings.md` (results + designer decision table), new assumptions G14–G21 in `docs/assumptions-register.md`.

```bash
# full Gate 2.6 matrix (13 variants x 9 strategies x 300 seeds; ~70 min total on one core) + follow-up (combo_D; ~17 min)
npm run eras -- --config config/candidate.json --out reports/gate2_6
for P in 5 20 50 100; do npm run experiment -- --config config/candidate.json --spec config/experiments/G26_expectations.json --productions $P --out reports/gate2_6/p$P; done
for P in 5 20 50 100; do npm run experiment -- --config config/candidate.json --spec config/experiments/G26_followup.json --productions $P --out reports/gate2_6/followup/p$P; done
# each run writes G26_expectations.md (summary), .json (all metrics), .great.csv (every greatness row), .careerbest.csv (each career's best film)
npm run batch -- --config config/candidate.json --seeds 50 --productions 50     # batch report now includes great films + progression; .great.csv
npm run sim -- --config config/candidate.json --set 'expectations.critics.enabled=true' --seed 6 --strategy balanced --productions 40
npx tsx scripts/probe-hof-boundary.ts   # Hall of Fame rounding boundary check
python3 -I scripts/g26_decision_table.py                                   # designer decision table from the reports
python3 -I scripts/g26_decision_table.py reports/gate2_6/followup G26_followup
```

## Gate 2.5 additions (movie system iteration, pending designer approval)

- **Studio-wide employee capacity** (`staffCapacity`): the engine refuses hires above `maxStaff` (choices, `applyDecision` and `hireStaff` all enforce it). Every employed staff member still works on the one production. Upgrades are an explicit legal action, `upgrade_studio`, with cost + Prestige test triggers. The baseline keeps the historical uncapped behavior; `config/candidate.json` uses **2 / 4 → 6 → 8**.
- **Weekly legs model** (`audience.legsModel`): `geometric` (Gate 2, baseline) or `diffusion` (candidate: finite awareness diffusion where critic buzz and audience word of mouth can grow weekly viewers, capped by reach). Feedback popups now state the actual direction, and an invariant checks it.
- **Prestige scopes:** each milestone may carry `scope: release | ip | career`; global `repeatScope` = `perRelease | perIP | career | explicit`. New kinds: `ipLifetimeGross`, `ipLifetimeViewers`.
- **New policies:** `selective-self-funder` (self-funds only when its visible estimate favors it), `repeat-farmer` (adversarial Prestige farming). Opt in with `--strategies`.
- **Docs:** results in `docs/gate-2-5-findings.md`; approvals and open items in `docs/gate-2-5-open-decisions.md`; new assumptions G1–G13 in `docs/assumptions-register.md`.
- **Reports:** `reports/gate2_5/` (`00_pre_change/` = the untouched Gate 2 baseline, A/B/C/COMBINED experiments, legs worked cases, self-fund regret incl. `selffund_fine/`, early economy, five-film candidate traces in `traces/`).
- **Memory:** experiments keep slim release records, so a 1,000-seed × 9-strategy × 3-length run (54,000 careers) fits in normal Node memory (~9 min).
- **New commands:**

```bash
npm run experiment -- --spec config/experiments/A_staff_capacity.json --out reports/gate2_5   # paired multi-variant experiment
npm run experiment -- --spec config/experiments/COMBINED.json --out reports/gate2_5
npm run legs -- --out reports/gate2_5                       # 5 controlled weekly-legs cases, both models
npm run selffund -- --config config/candidate.json --seeds 200 --productions 10 --reaches 0.22,0.35,0.5,0.7 --out reports/gate2_5
npm run selffund -- --config config/candidate.json --seeds 100 --reaches 0.55,0.6,0.65 --out reports/gate2_5/selffund_fine
npm run early -- --config config/candidate.json --out reports/gate2_5   # first-film economics scenarios
npm run sim -- --config config/candidate.json --seed 42 --strategy balanced --productions 5
```

## Prerequisites

- Node.js 20+ (tested on 22.23) and npm 10+
- No internet needed after `npm install`; no paid services, no LLM calls.

## Commands (all tested)

```bash
npm install
npm test                      # 90 tests
npm run typecheck

# one seeded career → reports/sim-seed42-balanced-5.md (+ .decisions.json, .events.json)
npm run sim -- --seed 42 --strategy balanced --productions 5

# batch → reports/batch-<config>-s1000-p20.{md,careers.csv,summary.json}
npm run batch -- --seeds 1000 --productions 20
npm run batch -- --seeds 1000 --productions 50 --strategies balanced,cheap-duds,quality-first
npm run batch -- --seeds 100 --productions 1 --releases-csv     # also writes per-release CSV

# paired-seed before/after (same seeds, one change)
npm run compare -- --set staffGrowth.statGainPerWeek=0.18 --seeds 200 --productions 50
npm run compare -- --baseline config/baseline.json --candidate config/candidate.json --seeds 1000

# override any value on any command
npm run batch -- --seeds 200 --productions 20 --set distribution.selfFundReach=0.35

# replay a recorded career exactly
npm run replay -- --decisions reports/sim-seed42-balanced-5.decisions.json

# regression seed bank (config/scenarios.json): invariants on known-interesting careers
npm run scenarios

# browser UI
npm run dev                   # http://localhost:5173
npm run build:web             # static build in dist-web/
```

Strategies: `balanced`, `quality-first`, `cheap-duds`, `famous-star`, `self-funder`, `experimenter`, `franchise-builder`. (A `streaming-pivot` policy waits for Gate 3.)

`--candidate` and `--config` take a **partial** JSON override merged onto the baseline (see `config/candidate.json`).

## Layout

```text
config/      baseline.json (provisional values) · candidate.json (example) · diagnostics.json (flag thresholds) · scenarios.json (regression seeds)
src/core/    pure TypeScript rules: types, rng (named seeded streams), economy, staff, stars, distribution,
             scoring, audience, prestige, progression, production, simulation (single source of truth)
src/agents/  strategies (visible information only; never read hidden combo grades or future RNG)
src/batch/   runner, metrics, diagnostics, batch + compare, report writers
src/cli/     main.ts (sim | batch | compare | replay | scenarios)
src/web/     thin UI (index.html, main.ts, styles.css)
tests/       unit · integration (counterfactual scenarios, UI smoke) · regression
docs/        assumptions-register.md · open-decisions.md · balance-findings.md
reports/     generated by commands (no hand-written results)
```

Core API: `createStudio(seed, config)`, `getChoices(state, config)`, `applyDecision(state, config, decision)`, `advanceWeek(state, config)`, `getSnapshot(state)`, `replay(seed, config, decisions)`, `runCareer(...)`, `runBatch(...)`. State is plain serializable JSON; RNG lives in the state as named streams (`world`, `trends`, `talent`, `work`, `staff`, `distributors`, `names`), so trends don't reshuffle when a strategy changes.

## How the rules are labeled

- **LOCKED (v9.61):** implemented as the design states: e.g. two starting staff, XP only while working, no individual genre XP, base cost always charged, unused advance kept once at completion, overruns from cash, wages never from advances, cancel only if affordable, lifeline offer, pre-display $0 Level 0 fallback Star, $0 "No campaign", Fame → viewers only, family skill → Filming, Fame-based Star price, relationship drops on career-hurting flops and direct-sequel recasts only, 4.0 / 9.0 thresholds, IP-level fans, milestone-only Prestige, causal outcomes.
- **WORKING ASSUMPTION:** every formula shape and number filling an Open rule. All are listed in `docs/assumptions-register.md`.
- **NOT MODELLED:** see Gate 3 and `docs/open-decisions.md` §B.

## Diagnostic flags

`SURPLUS_FARMING_DOMINANT`, `EARLY_SOFTLOCK`, `PRESTIGE_TOO_FAST`, `PRESTIGE_TOO_SLOW`, `QUALITY_INFLATION`, `DEAD_STRATEGY`, `DOMINANT_STRATEGY`, `STAR_PRICE_NO_VALUE`, `FRANCHISE_AUTO_WIN`, `DISTRIBUTOR_TRUST_SPIRAL`, `STREAMING_PASSIVE_MONEY_PRINTER` (N/A until Gate 3), `HIGH_REVIEWS_UNEXPLAINED_LOW_SALES`, `UNSUPPORTED_RULE_ASSUMPTION` (informational). Thresholds live in `config/diagnostics.json`. A fired flag is evidence, not a bug and not permission to rebalance.

**Invariant checks** (any violation = a harness bug): ledger audit, gross = weekly sales only, scores recomputable from recorded production state, Star budgets, unique Prestige award ids, wages never tied to a project, runs terminate. `config.debug.injectBug` (`advanceAsRevenue` / `fameIntoScore`) exists only to prove these checks work; keep it `"none"`.

## Known limitations

Movies only; strategies are heuristics; no genre unlocks, studio upgrades or eras beyond a quality bar; titles can repeat. See `docs/open-decisions.md`.
