# Producers

**Producers** (working game name; formerly "Entertainment Studio Tycoon") is a *Game Dev Story*–inspired entertainment-studio tycoon: start tiny making movies and limited series, grow into TV, and eventually launch your own streaming service.

> **What this repository is today:** a headless, deterministic **balance / simulation harness** written in TypeScript, plus a thin browser debug UI. **It is not a playable game** and nothing has shipped. The harness compares strategies, finds exploits and checks that the designed rules hold, before any engine is chosen.

## Where to look

| You want… | Read |
|---|---|
| **The game design** (the only authority) | [`docs/DESIGN_LEDGER.md`](docs/DESIGN_LEDGER.md): every decision with a stable `PROD-###` id, design status and what the code currently does |
| Rules for coding agents (Claude, Codex, …) | [`AGENTS.md`](AGENTS.md) (Claude also reads [`CLAUDE.md`](CLAUDE.md)) |
| Harness parameters (test assumptions, not design) | [`docs/assumptions-register.md`](docs/assumptions-register.md) |
| Decision aids awaiting the designer (options + worked examples, not decisions) | [`docs/plans/`](docs/plans/) |
| History: old handoffs, gate prompts and gate findings | [`docs/archive/`](docs/archive/README.md) (context only, **not** authority) |
| Generated evidence | `reports/` (regenerable; some folders are regression baselines, so don't delete) |

> **Simulation assumptions, not design locks.** Every number in `config/` is provisional. Results are evidence for design discussion, never "official balance." Candidate configs (`config/gate3.json`, `gate4.json`, `gate4q.json`) are experiments. `config/baseline.json` is the **Producers default** (studio-funded production, 80% distributor bids, work-for-hire contracts, $120K start *(test)*). The pre-Producers advance economy is the regression-only overlay `config/legacy-advance.json` (`legacyConfig()` in code, `--legacy` on the CLI); every older gate overlay layers on it.

## Setup

```bash
npm ci            # Node 20+
npm run typecheck
npm test          # ≈ 15 s, all tests
npm run ledger:check   # design-ledger hygiene + audit crosswalk (docs/ledger-crosswalk.md)
```

## Validation loops (use these; big matrices are optional)

| Mode | Command | What it runs | Measured time |
|---|---|---|---|
| **FAST** — after every substantial change | `npm run economy:smoke` | typecheck + Gate 4 edge-case tests + 4 seeds × 3 policies × 4 years (legacy vs candidate), invariants on every career | ≈ 5 s |
| **COMPARE** — once a feature works | `npm run economy:compare` | 16 paired seeds × 6 policies × 10 years, legacy vs candidate + 5 sensitivity variants; compact tables + outlier seeds in `reports/gate4/compare/summary.md` | ≈ 20 s |
| **GATE** — only when asked, to validate a preferred candidate | `npm run economy:gate` | 40 paired seeds × 6 policies × 15 years | not run yet |

Overrides for every mode: `-- --seeds N --years N --strategies a,b --variants legacy,candidate --out dir --quiet`. Results stream to `careers.jsonl` / `releases.jsonl` as they're produced. Also fast:
- `npx tsx scripts/economy-sens.ts`: sensitivity grid, about 8 s.
- `npx tsx scripts/economy-traces.ts`: seeded traces, about 1 s.
- `npm test`: everything, about 15 s.

**Gate 4Q scoring loops:** `npm run quality:smoke` (≈ 8 s: typecheck + 13 tests + 5-seed diagnostic) and `npm run quality:compare` (≈ 14 s: 16 paired seeds × 8 scoring variants). Representative attribution traces: `npx tsx scripts/quality-traces.ts`.

The 200-seed / 25-year matrices from earlier gates (`scripts/fu-matrix.ts`, experiment specs) are **opt-in stress tests**, not a prerequisite for progress.

## Gate 4Q: logical combinations and real duds (EXPERIMENT, pending designer review)

- **`world.compatibility.mode`:** `random` (default, byte-identical to every earlier gate) or `editorial`. The editorial matrix grades audience and critics separately for each **exact** genre × theme pair, and each world shifts a few pairs by at most one grade step.
- **Severity:** the candidate (`config/gate4q.json`) steepens D/F to 0.80 / 0.55.
- **Cult appeal:** rare, audience-only "Unexpected cult appeal" events (`world.cult`).
- **Policy names:** `cheap-duds` is reported as **`low-budget-random-combo`** (exact alias). A `poor-fit-chooser` diagnostic policy was added.
- **Docs:** `docs/archive/gates/gate-4-quality-findings.md`, `docs/archive/gates/gate-4-quality-open-decisions.md`; register entries Q-1…Q-6.

## Gate 4: studio-risk economy (EXPERIMENT, pending designer review)

`economy.mode` selects the financing model.
- **`late_distribution`** (**default** in `config/baseline.json` since 2026-11-10; also `config/gate4.json`):
  - the studio funds its own productions;
  - at 80%, 2–3 distributors bid their **own** ad spend + reach for a share of gross (no cash to the studio), or the studio self-distributes;
  - work-for-hire contracts (`economy.contracts`) give a zero-cost, zero-Prestige recovery route; the client covers payroll + upkeep and pays a fixed fee.
- **`legacy_advance`** (regression only, `config/legacy-advance.json` / `--legacy`): every earlier gate, byte-identical (batch careers/great CSVs proved against the previous commit).

Docs: `docs/archive/gates/gate-4-economy-findings.md`, `docs/archive/gates/gate-4-economy-open-decisions.md`; register entries G4-1…G4-12. The web UI has a "Load Gate 4 candidate economy" button (contracts, distribution meeting).

## Status

| Gate | Status | Notes |
|---|---|---|
| **1 — Deterministic movie kernel** | ✅ Done | Staff, phases, ledger, advances/royalties/surplus/overruns/cancel, Stars (families, budgets, pre-display free fallback, callbacks, relationships), $0 campaign, scores, legs, finite runs, Prestige, IP fans, studio genre levels, trends. Exact replay. |
| **2 — Strategies, batch, diagnostics** | ✅ Done | 7 policies, batch runner, paired-seed compare, 13 diagnostic flags, invariant checker, CSV/JSON/Markdown, regression seed bank. Catches injected bugs. |
| **3 — TV + streaming** | ✅ Built (pending designer review) | Limited series, renewable TV, streaming; config-gated (`config/gate3.json`). Follow-up: staff firing, no season cap, viewer-fatigue and breakthrough experiments (default off). |
| **Gate 4Q scoring experiment** | 🧪 Candidate built (pending designer review) | **single-grade** editorial combo matrix (one grade per pair, both scores), D/F severity, cult appeal; `quality:smoke` / `quality:compare`. |
| **Gate 4 economy experiment** | ✅ Default (values still *(test)*) | `economy.mode` late_distribution + contracts are the baseline; legacy_advance kept as a regression overlay; FAST/COMPARE/GATE loops. Dud economics: `npx tsx scripts/duds.ts`. |
| **4 — Thin browser UI** | ✅ Done (minimal) | Manual step-through career, strategy auto-step, batch runner, config editor, replay. Same core; no rules in the UI. |

**Tests:** 138 passing (single grade + default economy); originally 36 passing (unit invariants, counterfactual scenarios, regression + injected-bug detection, UI smoke test via jsdom).
**Performance (measured on this machine):** 7,000 careers × 20 films in 39 s (~5.6 ms per career); 1,400 × 50 films in 31 s; 7,000 × 5 films in 7.7 s.

## Gate 3 follow-up: staff firing and organic TV longevity (pending designer review)

- **Firing (LOCKED, on):** `{ type: "fire", staffId }` between productions. It frees a slot and stops payroll. Timing, minimum team (2) and severance ($0) are OPEN config (`staffing.*`).
- **No season cap (LOCKED):** renewal needs only last season ≥ 4.0. `TV_SEASON_TOO_LONG` is replaced by `TV_LONG_RUNNER` and `TV_IRRATIONAL_RENEWAL`.
- **Experiments (default off):**
  - returning-viewer fatigue: `tv.viewerFatigue`;
  - creative breakthroughs: `events.breakthrough`, using a lazy `events` RNG stream.
- **Docs:** `docs/archive/gates/gate-3-followup-findings.md`, `docs/archive/gates/gate-3-followup-open-decisions.md`; register entries FU1–FU10.

```bash
npm test                                   # 106 tests (firing: tests/integration/firing.test.ts; seasons/fatigue/events: followup.test.ts)
npx tsx scripts/fu-firing-probe.ts         # firing before/after probe (200 seeds, 25 years)
npx tsx scripts/fu-matrix.ts --seeds 200 --out reports/gate3_followup/matrix            # full stress matrix (~10 min on 2 cores)
npx tsx scripts/fu-matrix.ts --seeds 200 --variants A_control,C_mildViewer_lessReview   # a subset
npx tsx scripts/fu-report.ts > reports/gate3_followup/matrix-tables.md                  # tables
npx tsx scripts/fu-traces.ts A_control tv-first 31 show ip242 "Trace 3"                  # render a seeded trace
```

## Gate 3: limited series, renewable TV and streaming (pending designer review)

Everything is **config-gated**: `config/baseline.json` keeps every Gate 3 feature off (TV, limited series, streaming, diffusion legs) (the movie kernel, byte-identical); `config/gate3.json` = the Gate 2.5 candidate + limited series + TV + streaming (Gate 2.6 critic curves stay off). Docs:
- `docs/archive/gates/gate-3-architecture.md`: modules, weekly order, schema changes, invariants.
- `docs/archive/gates/gate-3-assumptions.md`: every Gate 3 number, labelled.
- `docs/archive/gates/gate-3-findings.md`: results.
- `docs/archive/gates/gate-3-open-decisions.md`: ranked designer calls.

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
- Docs: `docs/archive/gates/gate-2-6-findings.md` (results + designer decision table), new assumptions G14–G21 in `docs/assumptions-register.md`.

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
- **Docs:** results in `docs/archive/gates/gate-2-5-findings.md`; approvals and open items in `docs/archive/gates/gate-2-5-open-decisions.md`; new assumptions G1–G13 in `docs/assumptions-register.md`.
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
npm run compare -- --legacy --baseline config/baseline.json --candidate config/candidate.json --seeds 1000   # older overlays sit on the legacy economy

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
docs/        DESIGN_LEDGER.md (canonical) · assumptions-register.md (harness params) · archive/ (history)
reports/     generated by commands (no hand-written results)
```

Core API: `createStudio(seed, config)`, `getChoices(state, config)`, `applyDecision(state, config, decision)`, `advanceWeek(state, config)`, `getSnapshot(state)`, `replay(seed, config, decisions)`, `runCareer(...)`, `runBatch(...)`. State is plain serializable JSON; RNG lives in the state as named streams (`world`, `trends`, `talent`, `work`, `staff`, `distributors`, `names`), so trends don't reshuffle when a strategy changes.

## How the rules are labeled

- **LOCKED (v9.61):** implemented as the design states: e.g. two starting staff, XP only while working, no individual genre XP, base cost always charged, unused advance kept once at completion, overruns from cash, wages never from advances, cancel only if affordable, lifeline offer, pre-display $0 Level 0 fallback Star, $0 "No campaign", Fame → viewers only, family skill → Filming, Fame-based Star price, relationship drops on career-hurting flops and direct-sequel recasts only, 4.0 / 9.0 thresholds, IP-level fans, milestone-only Prestige, causal outcomes.
- **WORKING ASSUMPTION:** every formula shape and number filling an Open rule. All are listed in `docs/assumptions-register.md`.
- **NOT MODELLED:** see Gate 3 and `docs/archive/gates/open-decisions.md` §B.

## Diagnostic flags

`SURPLUS_FARMING_DOMINANT`, `EARLY_SOFTLOCK`, `PRESTIGE_TOO_FAST`, `PRESTIGE_TOO_SLOW`, `QUALITY_INFLATION`, `DEAD_STRATEGY`, `DOMINANT_STRATEGY`, `STAR_PRICE_NO_VALUE`, `FRANCHISE_AUTO_WIN`, `DISTRIBUTOR_TRUST_SPIRAL`, `STREAMING_PASSIVE_MONEY_PRINTER` (N/A until Gate 3), `HIGH_REVIEWS_UNEXPLAINED_LOW_SALES`, `UNSUPPORTED_RULE_ASSUMPTION` (informational). Thresholds live in `config/diagnostics.json`. A fired flag is evidence, not a bug and not permission to rebalance.

**Invariant checks** (any violation = a harness bug): ledger audit, gross = weekly sales only, scores recomputable from recorded production state, Star budgets, unique Prestige award ids, wages never tied to a project, runs terminate. `config.debug.injectBug` (`advanceAsRevenue` / `fameIntoScore`) exists only to prove these checks work; keep it `"none"`.

## Known limitations

Movies only; strategies are heuristics; no genre unlocks, studio upgrades or eras beyond a quality bar; titles can repeat. See `docs/archive/gates/open-decisions.md`.
