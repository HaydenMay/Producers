# Assumptions register

> **Harness parameter register, NOT design authority.** It lists the numbers and formula shapes the simulation currently uses. The canonical game design is [`DESIGN_LEDGER.md`](DESIGN_LEDGER.md). "LOCKED (v9.61)" labels below refer to the old v9.6 handoff and may be superseded there (e.g. the two combo grades, the upfront advance model).


> **Every number in `config/baseline.json` is PROVISIONAL.** These are testing values chosen to get measurable results, not design locks. Formula shapes marked WORKING ASSUMPTION fill gaps that v9.61 leaves Open. Change them freely; rerun the same seed bank with `npm run compare`.

> **How current is this?** The **Full parameter listing** at the end is generated from the live `config/baseline.json` (the Producers default) and checked by `npm run ledger:check`, so it is always current. The hand-written formula tables (A1–A24 and the gate sections) describe each formula **as it was introduced at that gate**; several have since changed in the default (e.g. late distribution instead of advances, $4 tickets, editorial single-grade combos, genre unlocks, critic generations ON). Where they disagree, the generated listing and the ledger win.

Labels: **LOCKED (v9.61)** = matches the design doc. **WORKING ASSUMPTION** = harness choice for an Open rule. **NOT MODELLED** = absent, not guessed.

## Formula-level assumptions (the ones most likely to change results)

| # | Area | Assumption | Why this choice | Sensitivity / alternatives |
|---|---|---|---|---|
| A1 | Accounting | Advance held as an earmarked project reserve (`unspentAdvance`); base cost paid at project start; Star fee / campaign paid from the reserve first, then spendable cash; whole unused reserve moved to cash **once** at completion. | Simplest auditable reading of v9.61 §7 ("earmark vs wallet" is Open). | Folding the advance into general cash would let wages draw on it, violating the LOCKED rule; avoid. Timing of base cost (start vs. spread weekly) barely matters to totals. |
| A2 | Cancellation | Allowed only if reserve + spendable cash ≥ the **whole original** advance; sunk costs (base, Star) not refunded; XP earned stays. | Spec's provisional rule; makes cancel-and-restart unprofitable. | Alternative: repay only the unspent reserve (cheaper cancels). Strategies never cancel today. |
| A3 | Negative cash | Negative cash is never spending power; while negative: no hire/train/ads/research/self-fund. | LOCKED behavior + spec. | No floor is enforced (the v9.61 "how deep" floor is Open). |
| A4 | Lifeline | If no normal offer's advance ≥ cheapest base cost, add "Bargain Pictures": advance = 1.05× base, 55% royalty, 0.30 reach. | LOCKED that a lifeline exists; terms Open. | Terms drive how painful recovery is. |
| A5 | Offers | Advance = base cost × generosity × idea heat × favored-family bonus (1.1) × trust factor × ±8% jitter. Heat = 1 + 0.12×avg hidden combo grade + trend bonus + 0.5×(IP fans / market). Royalty = base × (1.15 − 0.15×heat) × (1.1 − 0.04×trust). Prestige gates who shows up; trust < 0.75 stops a distributor showing up. | Makes "bids hint at how hot your idea is" true without exposing grades. | The hint strength (0.12/grade) directly controls how much offers leak hidden grades. |
| A6 | Trust | Updated once when the run ends: 0.6 × clamp(ROI−1, ±1) + 0.4 × clamp((avg−5.5)/3, ±1), step capped at ±0.75; drifts toward 2.5 by 0.3/yr. ROI = royalty take ÷ advance. | Causal, explainable, bounded ("one flop doesn't erase"). | v9.61 Open: quality vs. commercial vs. expectation-adjusted. Pure ROI would punish acclaimed narrow releases. |
| A7 | Staff work | Each week each staff adds `stat × phaseEmphasis × 0.12 × (1±10%) × (1 + studio genre bonus)` to every meter. | GDS-style "everyone contributes to everything, phase emphasis". | **Points scale linearly with headcount** — see findings F1. |
| A8 | Staff XP | +10 XP/week while working; each stat grows `0.35 × emphasis × (1 − stat/100)` per week. Hire: $20K, wage $1,100/wk, stats 15–35. Train: $15K, +3 all stats. | Diminishing-returns practice growth. | Halving growth had a small effect on inflation (F1). |
| A9 | Meter normalization | `quality = 100 × pts / (pts + half)`, half = per-week constant × duration × era bar. Era bar = 1 + 0.04/yr (cap 1.8). | Saturating so meters can't exceed 100; era bar is the LOCKED "gentle rising audience bar". | Era bar 0.08/yr clears the inflation flag (F1). |
| A10 | Scores | Audience = Σ weights (F/E 0.35, P/W 0.15) / 10; Critic mirrored. Weak meter: if a meter is > 18 below the mean, penalty 0.05/pt (heavy side 1.0, light side 0.3). Combo multipliers A 1.15 … F 0.78. Repetition fatigue 5%/repeat (sequel 2.5%, halved with a Hall of Fame entry, max 30%). Critic saturation −10% when the theme is Saturated. | LOCKED structure; numbers provisional. | — |
| A11 | Opening | awareness = 1 − exp(−Σ inputs) with inputs base 0.35, campaign (0 / 0.25 / 0.55 / 0.95), studio buzz, 0.6×Fame/100, trend (rising 0.15, hot 0.4, saturated 0.1), 2.5×IP fans/market. Reach cap = 400,000 × distributor reach. Opening = 30% of reach cap × awareness. | Saturating so marketing has diminishing returns. | Fame weight 0.6 decides whether famous Stars pay back. |
| A12 | Legs | Weekly retention = 0.62 + w × (score−5)/5, critic score (w 0.18) for weeks 2–3, audience score (w 0.24) after; clamp 0.15–1.05. Viewers capped by remaining **reach cap** (word of mouth can pass the initial awareness pool). Run ends at 14 weeks or < 400 viewers. | LOCKED: critics early, audience later, finite runs. | — |
| A13 | Gross | $2.00 gross per viewer at the time (default now $4.00, PROD-221; $2 only in the legacy overlay); distributor takes royalty % of each week's gross. | Scaled so a decent film roughly repays its distributor (ROI ≈ 1). | Royalty and gross scale together decide distributor ROI and trust. |
| A14 | IP fans | Run end: fans += viewers × 0.08 × (avg−5)/5 if avg ≥ 5; else fans × (1 − 0.35 × (5−avg)/5). Spinoffs start at 50% of the parent's fans. Fans decay 10%/yr. | LOCKED inheritance; numbers provisional. | — |
| A15 | Stars | Budget = 100 + 30 × level (max level 10 → 400 < 5 × 100). Fallback Newcomer: Level 0, 40-point budget, $0. Shapes balanced 40% / two-focus 35% / specialist 25% (internal only). Tiers: newcomer L0–2 Fame 0–15; mid L2–5 Fame 25–55; big L4–8 Fame 65–95; hidden gem 4% (newcomer at L5–7). Level +1 every 2 projects; +6 points in the worked family per project (within budget). | LOCKED budget rule; numbers provisional. | Hidden-gem rate kept low on purpose (v9.5 tuning note). |
| A16 | Star price | Fame fee = 2,000 + 250 × Fame^1.25; Prestige premium = fee × 0.6 × Fame/100 × (1 − P/(P+400)); relationship discount = fee × 6% × (rel − 1). | LOCKED: Fame-based minus discounts; level/skill never raise price. | — |
| A17 | Star relationship | +0.25 per project; +0.5 if their Fame rose; −0.75 if their Fame fell; −1.5 if replaced in an established role in a **direct sequel**. Starts at 1. | LOCKED triggers (v9.61). Reboot recasting is **not** penalized (Open). | — |
| A18 | Fame change | ΔFame = 25 × (avg−5)/5 × viewers/(viewers + 150,000). | Causal: reception × exposure. | — |
| A19 | Prestige | Milestones: all meters ≥ 70 (+50), Audience ≥ 7.5 (+75), Critic ≥ 8.5 (+85), Hall of Fame (+200), title gross ≥ $1M (+100), title viewers ≥ 500K (+150). **repeatScope = perIP**: each milestone pays once per IP. | Open in v9.61; perIP was the review suggestion. | Strongly affects franchise vs. new-IP Prestige (F4). |
| A20 | Studio genre level | +1 XP per completed production of that exact genre; levels at 1/3/6/10/15 XP; +3% to all staff and Star points per level. Awarded on completion. | LOCKED per-genre; timing Open. | — |
| A21 | Trends | Each theme: 1.2%/week chance to start Rising; Rising 20 wk → Hot 40 → Saturated 40 → Cooled 30 → none. Separate RNG stream. | Visible, semi-random craze cycle. | — |
| A22 | Unlocks | Start: Action/Comedy/Horror × Zombies/Superheroes/Spies/Sports. Themes unlock by research ($25K) or a staff pitch (best Plot ≥ 45 → 25% chance per completed production). **Genre unlocks NOT MODELLED.** | v9.61 lists the sources; rates Open. | — |
| A23 | Studio ads | $12K → +0.30 awareness, decays 12%/week, consumed by the next release. | LOCKED: temporary, fading, next release only. | — |
| A24 | Self-funding | Requires non-negative cash ≥ base cost; reach 0.22 (vs. distributors 0.30–1.00). | LOCKED "small reach before streaming"; size Open. | Drives the DEAD_STRATEGY flag (F3). |

## Gate 2.5 assumptions (optional fields; baseline defaults reproduce Gate 2 exactly)

| # | Area | Assumption | Baseline default | Candidate (`config/candidate.json`) | Notes |
|---|---|---|---|---|---|
| G1 | Staff capacity | `staffCapacity.ladder` = max employees per capacity level; the engine refuses hires above it (choices, `applyDecision`, `hireStaff`). Everyone employed works on the one production. | `[999]` (effectively uncapped) | `[4, 6, 8]` with 2 starting staff | RECOMMENDATION pending approval (A). |
| G2 | Studio upgrades | `upgrade_studio` is an explicit legal action when cash ≥ `upgradeCosts[i]` and Prestige ≥ `upgradePrestige[i]`; paid from spendable cash, ledger kind `upgrade`. | none | $250K / $750K; Prestige 200 / 1,000 | TEST ASSUMPTION; refit after the Prestige scale is chosen. |
| G3 | Agent hiring | `agents.legacyHeuristicStaffCaps: true` keeps Gate 2's agent limits (balanced 4, quality-first 5). `false` = hire up to the engine cap when cash is above the strategy's hire threshold (balanced $140K, quality-first/repeat-farmer $110K, experimenter/franchise-builder $160K); at cap, buy an upgrade when cash > cost + buffer (quality-first $100K, balanced $150K, experimenter/franchise-builder $200K). | `true` | `false` | Strategy behavior, not a game rule. |
| G4 | Legs model | `audience.legsModel`: `geometric` (A12) or `diffusion`. | `geometric` | `diffusion` | RECOMMENDATION (B). |
| G5 | Diffusion | Pool = reach cap. Opening as A11; aware = pool − opening. Weeks 2–3: newly aware = unaware × 0.12 × max(0, (critic−5)/5). Later: newly aware = min(unaware, 2.0 × max(0, (audience−5)/5) × last week's viewers). Interest decay 0.12 + 0.35 × max(0, −q) (cap 0.95). Watch rate 0.30 × (1 + 0.25 × q) (clamp 0.02–0.95), where q = (critic − 5)/5 in weeks 2–3 and (audience − 5)/5 after. Cumulative viewers ≤ reach cap; same 14-week / 400-viewer end rule. | n/a | as listed | TEST ASSUMPTION. The word-of-mouth neutral point (score 5) decides whether mediocre films gain legs. |
| G6 | Feedback truth | Weekly popups use actual viewers ÷ last week and say up/down/flat accordingly; "still climbing" fires at most once; invariant `FEEDBACK_UNTRUE`. | on (both models) | on | Implemented. |
| G7 | Prestige scope | Milestones may carry `scope: release / ip / career`; `repeatScope` = `perRelease / perIP / career / explicit` (explicit requires a scope on every milestone). | `perIP` | `explicit` hybrid | RECOMMENDATION: hybrid (C). |
| G8 | Prestige kinds | New kinds `ipLifetimeGross`, `ipLifetimeViewers` (summed over an IP's releases). Unknown kinds throw. | unused | IP gross $1M +100, $5M +150; IP viewers 500K +150; first Hall of Fame (career) +100 | TEST ASSUMPTION amounts. |
| G9 | Self-fund agent | `selective-self-funder`: self-funds when `Ĝ × selfFundReach > advance + (1 − royalty) × Ĝ × offer reach`, Ĝ = its own average gross per unit reach; needs cash ≥ base + $80K. Visible info only. | — | — | Policy. |
| G10 | Adversary | `repeat-farmer`: after any release averages ≥ 7.5, makes the cheapest sequels of its best IP. | — | — | Policy, used to probe Prestige scopes. |
| G11 | Diagnostics fit | `PRESTIGE_TOO_FAST` threshold 400/yr was fit to the per-IP scale; it fires under per-release and hybrid. | 400/yr | 400/yr | OPEN: refit once the Prestige scale is chosen. |
| G12 | Memory | Experiments keep slim release records (`slimRelease`) and drop per-release data after each batch; summaries are unaffected. | — | — | Harness only. |
| G13 | Debug | `debug.injectBug` deliberately breaks one rule so tests can prove the invariants catch it. | `"none"` | `"none"` | Test-only. |

## Gate 3 assumptions

Gate 3 (formats, TV, streaming) has its own expanded register: **[`docs/archive/gates/gate-3-assumptions.md`](archive/gates/gate-3-assumptions.md)** (T1–T19, S1–S8, P1–P4, provisional flag thresholds; history). Limited series, TV and streaming are **ON** in `config/baseline.json` since 2026-11-11; the legacy overlay turns them off.

## Gate 4Q assumptions (logical combinations, quality range, dud tests; EXPERIMENT)

Evidence: `docs/gate-4-quality-findings.md`; decisions: `docs/gate-4-quality-open-decisions.md`. Defaults keep every earlier gate byte-identical. The candidate is `config/gate4q.json`. All numbers are **TEST ASSUMPTIONS**.

| # | Area | Assumption | Value | Notes |
|---|---|---|---|---|
| Q-1 | Compatibility source | `world.compatibility.mode` editorial (the default since 2026-11-11): ONE shared grade per exact genre × theme for both scores (PROD-062/074); random = two independent legacy grades | editorial (baseline), random (legacy overlay only) | matrix in config, 13 pairs flagged contestable (D1) |
| Q-2 | World variation | each side moves 1 grade step with 20% chance (direction 50/50, clamped), from a stable hash of (seed, pair); old random draws still consumed | `variation.chance` 0.2, `maxSteps` 1 | D5 |
| Q-3 | Severity | gradeMultiplier D 0.80, F 0.55 (A/B/C unchanged) | gate4q only | D2 |
| Q-4 | Cult appeal | eligible: audience grade D/F + never-released pair + (Filming + Editing)/2 ≥ 60; chance 0.10 + rising 0.05 / hot 0.10; lazy `reception` stream; 25% breakout (audience grade A) else lift (+2 steps); audience only, this title only; combo book keeps the baseline | `world.cult.*` (off in baseline, on in gate4q) | D4 |
| Q-5 | Policies | `low-budget-random-combo` = exact alias of `cheap-duds`; `poor-fit-chooser` uses only its revealed combo book | agents only | D7 |
| Q-6 | Diagnostic bins | 0–<4 poor, 4–<6 mediocre, 6–<8 good, 8–10 excellent (published average) | — | `scripts/quality.ts` |

## Gate 4 assumptions (studio-risk economy, late distribution, contracts; EXPERIMENT)

Evidence: `docs/gate-4-economy-findings.md`; decisions: `docs/gate-4-economy-open-decisions.md`. Baseline keeps `economy.mode: "legacy_advance"` (byte-identical to every earlier gate). The candidate is `config/gate4.json`. All numbers are **TEST ASSUMPTIONS**.

| # | Area | Assumption | Value | Notes |
|---|---|---|---|---|
| G4-1 | Financing | Studio pays base cost at 0%, Star at 40%, payroll throughout; only affordable plans are legal; no advance, no lifeline | `economy.mode` | the default since 2026-11-10 (legacy overlay: advances) |
| G4-2 | Start cash | Raised so the first studio-funded movie is possible | $160K default (`start.cash`; $120K in `config/gate4.json`) *(test)* | OPEN (PROD-114) |
| G4-3 | Bid preview | appeal = 1 + 0.6 × (preview − 60)/40 + trend + 0.6 × fans/market + 0.3 × Fame/100 + 0.12 × known combo + 0.1 × (last season − 7), clamped 0.4–1.8. Preview = mean meter quality projected to completion | `economy.lateDistribution.*` | never hidden grades or final scores |
| G4-4 | Bid terms | ad = adBase × format factor × appeal × 1.15 if favoured × trust factor × ±8%; share = shareBase × (1.15 − 0.15 × appeal) × (1.1 − 0.04 × trust) in [0.05, 0.7]; reach = roster reach × 1.1 if favoured; bids only if appeal ≥ minAppeal | starlight $10K/15%/0.4 · wolf $30K/35%/0.7 · orbit $40K/38%/0.8 · xyz $55K/45%/0.9 · meridian $80K/50%/1.0 | 2–3 bidders, seeded on the distributors stream |
| G4-5 | Ads → awareness | 1.2 × (1 − e^(−ad/$40K)) replaces the campaign term | `adAwarenessMax`, `adScale` | |
| G4-6 | Self-distribution | reach 0.22, no ads, keep 100% | `selfDistributionReach` | OPEN (D5) |
| G4-7 | Originals | No meeting; keep the studio-paid campaign | `originalsUseStudioCampaign: true` | OPEN (D6) |
| G4-8 | Trust | Distributor ROI = its share ÷ its ad spend (self-distributed: no trust change) | — | |
| G4-9 | Contracts | Commercial edit 6 wks $9K (no requirement) · Script polish 8 wks $12K (plot/writing ≥ 28) · Network pilot services 12 wks $30K (4 staff, filming/editing ≥ 45) · Full production services 16 wks $56K (6 staff, any meter ≥ 60). Client reimburses payroll + upkeep weekly; fee on delivery; XP in the job's meters; zero Prestige | `economy.contracts.*` | D7 |
| G4-10 | Sensitivity knob | `audience.qualityPivot` = score where in-run buzz / word of mouth / episode retention turn positive | 5 (unchanged) | tested 6.5 (D1) |
| G4-11 | Agents | Adapter profiles: sensible policies keep a runway (base + payroll for a whole movie) and pick the bid with the best visible estimate; the bad-movie factory takes the biggest ad bid and contracts only when broke; `contract-farmer` only contracts | `src/agents/economy.ts` | agent-only |
| G4-12 | Accounting | all-in net = studio gross + kept advance − studio-paid base/Star/campaign − payroll & upkeep during the production weeks | `src/batch/econ.ts` | same formula for both modes |

## Gate 3 follow-up assumptions (firing, organic TV longevity)

Evidence: `docs/gate-3-followup-findings.md`; decisions: `docs/gate-3-followup-open-decisions.md`. All numbers are **TEST ASSUMPTIONS**.

| # | Area | Assumption | Default | Tested | Notes |
|---|---|---|---|---|---|
| FU1 | Firing (LOCKED that it exists) | Decision `fire`: frees one slot; payroll, contribution and XP stop; kept in `formerStaff` with `firedWeek`; history untouched. | `staffing.firingEnabled: true` | — | Tests: `tests/integration/firing.test.ts`. |
| FU2 | Firing timing | Only in the planning phase (between productions); never the engineer while building. | `staffing.betweenProductionsOnly: true` | — | **OPEN** (harness UX choice). |
| FU3 | Firing floor / cost | Can't go below `minStaff`; severance `fireCost` (ledger kind `fire`). | 2 / $0 | — | **OPEN.** |
| FU4 | Agent firing (agents only) | Fire the weakest non-engineer (stat sum, ties by id) when (a) 8/8, Prestige ≥ streaming unlock, cash > ½ build cost and the policy wants streaming, or (b) cash < `agents.fireDebtThreshold`. | off in baseline; on in `config/gate3.json` (−$100K) | before/after (A0 vs A) | Replaces the Gate 3 "keep one slot free" hack when on. |
| FU5 | Money-aware renewal (agents only) | Sensible policies drop their old season caps and stop renewing when the last finished season netted < `agents.renewMinNetPerWeek` per production week (Originals exempt); `renewal-franchise` stays stubborn. | off in baseline; on in gate3 ($15K/wk) | A0 vs A | In practice never fires: no TV season lost money (F2). |
| FU6 | No season cap (LOCKED) | Renewal needs only last season avg ≥ 4.0. `TV_SEASON_TOO_LONG` replaced by `TV_LONG_RUNNER` (≥ 12 seasons, last 3 avg ≥ 7; informational) and `TV_IRRATIONAL_RENEWAL` (season ordered after 2 consecutive money-losing traditional seasons, judged at release). | — | — | |
| FU7 | Returning-viewer fatigue | mult = 1 − min(max, perStep × max(0, units − onset)^exponent) × (1 − qualitySlow × clamp((prevAvg − 7)/3, 0, 1)); units = seasons aired (or episodes / episodesPerStep) − goodTwistReset × good twists. Multiplies IP-fan and announcement opening inputs (and the premiere share if `appliesTo: returningAndPremiere`). Never scores, ratings, review fatigue or sales. | **off**; onset 3, 3%, ^1.3, cap 45%, qualitySlow 0.5, twist reset 2, seasons basis | B mild (onset 4, 2%, ^1.2, cap 35%), B_ep (episode basis), D strong (onset 2, 4%, ^1.3, cap 60%), D + premiere | Trace: `trace.viewerFatigue` with the opening without it. Barely bites (F3). |
| FU8 | Review fatigue (Gate 3 T-value) | Unchanged default: min(35%, 1.2% × n^1.6) × quality slow. | 35% / 1.2% | C: 20% / 0.8% | The real longevity lever (F4). Not replaced. |
| FU9 | Creative breakthroughs | One draw from the lazy `events` RNG stream the first week a production works in each listed stage; success (< chance) adds `bonusShare` × that meter's half-point (meterHalfPointPerWeek × duration × era bar) to one meter of the stage (writing → plot/writing by a second draw; filming; editing). Max 1 per production. Logged (event `breakthrough`, `trace.breakthrough` with draws, points and the scores without it). | **off**; 2% per check, 3 stages, bonusShare 0.6, all formats | A_events, C_events, A_eventsBig (bonusShare 3.0) | Scores follow meters (`SCORE_NOT_CAUSAL` holds). Too small to feel (F5). |
| FU10 | Feel metrics | Season bands 1–3/4–6/7–10/11–15/16+; return rate = premiere ÷ previous season's last-episode viewers; voluntary end = still renewable, not renewed for ≥ 52 weeks; comeback = S7+ after two seasons ≥ 1.0 below the earlier peak, +1.0 and ≥ 7.0; failed attempt = same slump + a twist / new Star / breakthrough, gain < 0.5; successful / mediocre show = S1–3 avg ≥ 7.5 / < 6.5. Horizons are prefixes of one 25-year run. | — | — | `src/batch/seasonfeel.ts`. |

## Gate 2.6 assumptions (critic generations, audience eras, great-film metrics)

All Gate 2.6 numbers are **TEST ASSUMPTIONS**. With `expectations.critics.enabled` and `expectations.audience.enabled` false (the baseline and the Gate 2.5 candidate), results are byte-identical to Gate 2.5.

| # | Area | Assumption | Baseline default | Tested values (`config/experiments/G26_expectations.json`) | Notes |
|---|---|---|---|---|---|
| G14 | Critic generations | **HARNESS PROXY** for named critics retiring. Generation g = floor(in-game year / `generationYears`); toughness = min(`maxToughness`, `toughnessPerGeneration` × g). Calendar time, not film count. Retirements are announced `announceWeeksAhead` weeks early (event `critics`). | disabled (6 y, 4%, max 12%, announce 26 wk) | mild 8 y / 3% / 9%; moderate 6 y / 4% / 12%; strong 5 y / 5% / 20% | Not the named-critic character system. When that exists, its aggregate effect should match the chosen curve. |
| G15 | Audience eras | Era e = floor(year / `eraYears`); toughness = min(max, `toughnessPerEra` × e). Applied to the Audience score only. | disabled (10 y, 2%, max 6%) | mild 12 y / 1.5% / 4.5%; moderate 10 y / 2% / 6%; strong 8 y / 3% / 9% | Kept gentler than critics in every combined variant. |
| G16 | Where expectations apply | After combo grade, weak-meter penalty, repetition fatigue and critic saturation; before the 0–10 clamp. `method: scale` = score × (1 − t); `subtract` = score − 10t. Applied once at release; the result is stored on the release and never recomputed. | `scale` | `scale` everywhere, plus one `subtract` comparison | Saturation (critic ×0.9) stays a separate, theme-specific effect. |
| G17 | Existing era bar (A9) | Unchanged: meter normalization × (1 + 0.04/yr), cap 1.8 (reached at year 20). It raises the bar for **both** sides equally. | 0.04/yr | held constant; attribution-only references at 0 and 0.08/yr | Audit finding: there was no separate, gentler audience curve before Gate 2.6. |
| G18 | Hall of Fame rule | `avgScore = round2((Audience + Critic)/2) ≥ 9.0`, each side already rounded to 2 decimals. | — | — | DISCREPANCY FLAGGED, not changed: rounding promotes a true mean of 8.995 to 9.00 (about 1.3% of HoF titles in a 6,000-film probe; `scripts/probe-hof-boundary.ts`). |
| G19 | Great-film metrics | Windows by release index 1–5 / 6–20 / 21–50 / 51–100 / all; in-game year bands; critic generations. `≥9` inclusive and `>9` strict, for the average and separately for Audience and Critic. HoF counts releases; distinct HoF IPs are reported separately. Best film tie-break: higher average → higher Critic → higher Audience → lower seed → lower release index → strategy name. | — | — | Permanent report fields (batch, experiment, career, web). |
| G20 | Progression metrics | Cash and Prestige rebuilt week by week from the ledger and Prestige events. For each upgrade: when the Prestige gate was first met, when it was bought, and weeks with enough cash but not enough Prestige ("cash-rich, Prestige-locked"). | — | — | New invariants: `UPGRADE_BELOW_PRESTIGE_GATE`, `UPGRADE_UNPAID`, `STAFF_OVER_CAPACITY`, `PRESTIGE_INVALID_MILESTONE`, `PRESTIGE_SUM_MISMATCH`, `EXPECTATION_MISMATCH`. |
| G21 | `PRESTIGE_TOO_FAST` | Still 400 Prestige/yr. **OUTDATED**: fit to Gate 2 per-IP totals; under hybrid Prestige it fires for most quality careers. Reported, not used as a verdict. | 400/yr | — | Refit once the designer chooses a Prestige pace. |

## Not modelled (deliberately absent, not guessed)

Gate 3 now models limited series, TV and streaming (see [`docs/archive/gates/gate-3-assumptions.md`](archive/gates/gate-3-assumptions.md)). Still absent: severance/morale/transfer for dismissed staff, named critics, binge release, spinoffs of TV shows, eras beyond the quality bar (Gate 2.6 adds only a calendar proxy for critic generations / audience eras; no era news, theme waves or named critics), studio upgrades other than the Gate 2.5 staff-capacity ladder and the TV unlock, late-game concurrency, Star bio lines, budget tiers (shelved in the design).

## Full parameter listing (`config/baseline.json`)

**Generated** by `npx tsx scripts/register.ts` from the live Producers default; `npm run ledger:check` fails if it drifts. Values are *(test)* harness assumptions, never design decisions (see the ledger). Labels (`_label` keys) are in the config. Regression-only values: `config/legacy-advance.json`; candidates: `config/gate3.json`, `gate4.json`, `gate4q.json`, `candidate.json`; experiment variants: `config/experiments/`.

| Path | Value |
|---|---|
| `name` | "baseline" |
| `career.enabled` | true |
| `career.mode` | "years" |
| `career.years` | 20 |
| `career.productions` | 40 |
| `career.legacyScore.prestige` | 1 |
| `career.legacyScore.hallOfFame` | 500 |
| `career.legacyScore.cashPer` | 2500 |
| `start.cash` | 160000 |
| `start.staff` | [{"name":"Sam","stats":{"plot":32,"writing":28,"filming":22,"editing":20},"wage":900},{"name":"Alex","stats":{"plot":20,"writing":22,"filming":30,"editing":30},"wage":900}] |
| `start.upkeepPerWeek` | 600 |
| `start.unlockedGenres` | ["Action","Comedy","Horror"] |
| `start.unlockedThemes` | ["Zombies","Superheroes","Spies","Sports"] |
| `world.genres.Action` | "Action" |
| `world.genres.Comedy` | "Funny" |
| `world.genres.Horror` | "Scary" |
| `world.genres.Thriller` | "Scary" |
| `world.genres.Romance` | "Romantic" |
| `world.genres.Drama` | "Dramatic" |
| `world.genres.SciFi` | "Action" |
| `world.genres.RomCom` | "Funny" |
| `world.families` | ["Scary","Funny","Romantic","Action","Dramatic"] |
| `world.themes` | ["Zombies","Superheroes","Spies","Sports","Vampires","Time Travel","Pirates","Robots","Dinosaurs","Mythology"] |
| `world.gradeWeights.A` | 0.12 |
| `world.gradeWeights.B` | 0.25 |
| `world.gradeWeights.C` | 0.33 |
| `world.gradeWeights.D` | 0.2 |
| `world.gradeWeights.F` | 0.1 |
| `world.gradeMultiplier.A` | 1.15 |
| `world.gradeMultiplier.B` | 1.06 |
| `world.gradeMultiplier.C` | 1 |
| `world.gradeMultiplier.D` | 0.9 |
| `world.gradeMultiplier.F` | 0.78 |
| `world.genreFamilyWeights.Action.Action` | 0.8 |
| `world.genreFamilyWeights.Action.Funny` | 0.2 |
| `world.genreFamilyWeights.Comedy.Funny` | 0.8 |
| `world.genreFamilyWeights.Comedy.Romantic` | 0.2 |
| `world.genreFamilyWeights.Horror.Scary` | 0.8 |
| `world.genreFamilyWeights.Horror.Dramatic` | 0.2 |
| `world.genreFamilyWeights.Thriller.Scary` | 0.6 |
| `world.genreFamilyWeights.Thriller.Dramatic` | 0.4 |
| `world.genreFamilyWeights.Romance.Romantic` | 0.8 |
| `world.genreFamilyWeights.Romance.Dramatic` | 0.2 |
| `world.genreFamilyWeights.Drama.Dramatic` | 0.8 |
| `world.genreFamilyWeights.Drama.Romantic` | 0.2 |
| `world.genreFamilyWeights.SciFi.Action` | 0.6 |
| `world.genreFamilyWeights.SciFi.Dramatic` | 0.4 |
| `world.genreFamilyWeights.RomCom.Funny` | 0.5 |
| `world.genreFamilyWeights.RomCom.Romantic` | 0.5 |
| `world.compatibility.mode` | "editorial" |
| `world.compatibility.variation.enabled` | true |
| `world.compatibility.variation.chance` | 0.2 |
| `world.compatibility.variation.maxSteps` | 1 |
| `world.compatibility.contestable.Action|Dinosaurs` | "B (draft A/C). Huge crowd concept, but usually dumb fun; B keeps it a strong pick without being a no-brainer A." |
| `world.compatibility.contestable.Comedy|Sports` | "A (draft A/B). Sports comedy is a proven sweet spot (underdog team + slapstick); deserves top fit." |
| `world.compatibility.contestable.Comedy|Zombies` | "B (draft B/B). Zombie comedy works (spoof energy) but is a niche; B, not A." |
| `world.compatibility.contestable.Horror|Spies` | "D (draft D/F). Strange mix, not nonsense; keep F for pairings that fight each other outright." |
| `world.compatibility.contestable.Horror|Pirates` | "C (draft C/D). Cursed-ship / ghost-crew horror is a real subgenre; middling, not bad." |
| `world.compatibility.contestable.Thriller|Time Travel` | "A (draft B/A). Loops, paradoxes and countdowns are thriller fuel; one of the best thriller fits." |
| `world.compatibility.contestable.Romance|Zombies` | "D (draft D/F). Can work as a rare oddball love story; poor, not impossible." |
| `world.compatibility.contestable.Romance|Robots` | "C (draft D/C). Lonely-human/AI love stories land often enough; average fit." |
| `world.compatibility.contestable.Drama|Zombies` | "C (draft D/C). Survival drama with zombies as backdrop is a proven prestige-TV shape; average fit." |
| `world.compatibility.contestable.SciFi|Dinosaurs` | "B (draft B/C). De-extinction / lost-world sci-fi is the genre's natural home for dinosaurs." |
| `world.compatibility.contestable.RomCom|Zombies` | "D (draft D/F). Comedy softens the gore a little; still poor." |
| `world.compatibility.contestable.RomCom|Spies` | "C (draft B/D). Married-spies action romcom is popular but rarely good; split the difference." |
| `world.compatibility.contestable.Thriller|Dinosaurs` | "B (draft D). Designer 2026-11-11: dinosaurs on the loose is a natural thriller." |
| `world.compatibility.contestable.Action|Mythology` | "A (draft B). Designer 2026-11-11 asked why Mythology was never good: gods-and-heroes epics are a top action fit." |
| `world.compatibility.contestable.Romance|Vampires` | "A (draft B/D, first pick B). Designer 2026-11-11: Romance had no A; brooding immortal romance is its biggest crowd fit." |
| `world.compatibility.contestable.RomCom|Time Travel` | "A (draft B/C). Designer 2026-11-11: RomCom had no A; the time-loop / do-over romcom is a proven sweet spot." |
| `world.compatibility.matrix.Action.Zombies` | "B" |
| `world.compatibility.matrix.Action.Superheroes` | "A" |
| `world.compatibility.matrix.Action.Spies` | "A" |
| `world.compatibility.matrix.Action.Sports` | "C" |
| `world.compatibility.matrix.Action.Vampires` | "B" |
| `world.compatibility.matrix.Action.Time Travel` | "B" |
| `world.compatibility.matrix.Action.Pirates` | "A" |
| `world.compatibility.matrix.Action.Robots` | "B" |
| `world.compatibility.matrix.Action.Dinosaurs` | "B" |
| `world.compatibility.matrix.Action.Mythology` | "A" |
| `world.compatibility.matrix.Comedy.Zombies` | "B" |
| `world.compatibility.matrix.Comedy.Superheroes` | "B" |
| `world.compatibility.matrix.Comedy.Spies` | "B" |
| `world.compatibility.matrix.Comedy.Sports` | "A" |
| `world.compatibility.matrix.Comedy.Vampires` | "B" |
| `world.compatibility.matrix.Comedy.Time Travel` | "B" |
| `world.compatibility.matrix.Comedy.Pirates` | "C" |
| `world.compatibility.matrix.Comedy.Robots` | "C" |
| `world.compatibility.matrix.Comedy.Dinosaurs` | "C" |
| `world.compatibility.matrix.Comedy.Mythology` | "C" |
| `world.compatibility.matrix.Horror.Zombies` | "A" |
| `world.compatibility.matrix.Horror.Superheroes` | "D" |
| `world.compatibility.matrix.Horror.Spies` | "D" |
| `world.compatibility.matrix.Horror.Sports` | "F" |
| `world.compatibility.matrix.Horror.Vampires` | "A" |
| `world.compatibility.matrix.Horror.Time Travel` | "C" |
| `world.compatibility.matrix.Horror.Pirates` | "C" |
| `world.compatibility.matrix.Horror.Robots` | "C" |
| `world.compatibility.matrix.Horror.Dinosaurs` | "B" |
| `world.compatibility.matrix.Horror.Mythology` | "B" |
| `world.compatibility.matrix.Thriller.Zombies` | "C" |
| `world.compatibility.matrix.Thriller.Superheroes` | "C" |
| `world.compatibility.matrix.Thriller.Spies` | "A" |
| `world.compatibility.matrix.Thriller.Sports` | "D" |
| `world.compatibility.matrix.Thriller.Vampires` | "C" |
| `world.compatibility.matrix.Thriller.Time Travel` | "A" |
| `world.compatibility.matrix.Thriller.Pirates` | "C" |
| `world.compatibility.matrix.Thriller.Robots` | "B" |
| `world.compatibility.matrix.Thriller.Dinosaurs` | "B" |
| `world.compatibility.matrix.Thriller.Mythology` | "C" |
| `world.compatibility.matrix.Romance.Zombies` | "D" |
| `world.compatibility.matrix.Romance.Superheroes` | "C" |
| `world.compatibility.matrix.Romance.Spies` | "C" |
| `world.compatibility.matrix.Romance.Sports` | "C" |
| `world.compatibility.matrix.Romance.Vampires` | "A" |
| `world.compatibility.matrix.Romance.Time Travel` | "B" |
| `world.compatibility.matrix.Romance.Pirates` | "C" |
| `world.compatibility.matrix.Romance.Robots` | "C" |
| `world.compatibility.matrix.Romance.Dinosaurs` | "F" |
| `world.compatibility.matrix.Romance.Mythology` | "C" |
| `world.compatibility.matrix.Drama.Zombies` | "C" |
| `world.compatibility.matrix.Drama.Superheroes` | "C" |
| `world.compatibility.matrix.Drama.Spies` | "A" |
| `world.compatibility.matrix.Drama.Sports` | "A" |
| `world.compatibility.matrix.Drama.Vampires` | "D" |
| `world.compatibility.matrix.Drama.Time Travel` | "B" |
| `world.compatibility.matrix.Drama.Pirates` | "C" |
| `world.compatibility.matrix.Drama.Robots` | "B" |
| `world.compatibility.matrix.Drama.Dinosaurs` | "F" |
| `world.compatibility.matrix.Drama.Mythology` | "B" |
| `world.compatibility.matrix.SciFi.Zombies` | "C" |
| `world.compatibility.matrix.SciFi.Superheroes` | "B" |
| `world.compatibility.matrix.SciFi.Spies` | "C" |
| `world.compatibility.matrix.SciFi.Sports` | "D" |
| `world.compatibility.matrix.SciFi.Vampires` | "D" |
| `world.compatibility.matrix.SciFi.Time Travel` | "A" |
| `world.compatibility.matrix.SciFi.Pirates` | "C" |
| `world.compatibility.matrix.SciFi.Robots` | "A" |
| `world.compatibility.matrix.SciFi.Dinosaurs` | "B" |
| `world.compatibility.matrix.SciFi.Mythology` | "C" |
| `world.compatibility.matrix.RomCom.Zombies` | "D" |
| `world.compatibility.matrix.RomCom.Superheroes` | "C" |
| `world.compatibility.matrix.RomCom.Spies` | "C" |
| `world.compatibility.matrix.RomCom.Sports` | "B" |
| `world.compatibility.matrix.RomCom.Vampires` | "C" |
| `world.compatibility.matrix.RomCom.Time Travel` | "A" |
| `world.compatibility.matrix.RomCom.Pirates` | "D" |
| `world.compatibility.matrix.RomCom.Robots` | "D" |
| `world.compatibility.matrix.RomCom.Dinosaurs` | "F" |
| `world.compatibility.matrix.RomCom.Mythology` | "D" |
| `world.cult.enabled` | false |
| `world.cult.eligibleAudienceGrades` | ["D","F"] |
| `world.cult.minAudienceCraft` | 60 |
| `world.cult.baseChance` | 0.1 |
| `world.cult.trendBonus.rising` | 0.05 |
| `world.cult.trendBonus.hot` | 0.1 |
| `world.cult.breakoutShare` | 0.25 |
| `world.cult.liftSteps` | 2 |
| `world.cult.breakoutGrade` | "A" |
| `world.marketSize` | 400000 |
| `world.grossPerViewer` | 4 |
| `production.approaches.enabled` | true |
| `production.approaches.effort.crowd.plot` | 0.75 |
| `production.approaches.effort.crowd.writing` | 0.75 |
| `production.approaches.effort.crowd.filming` | 1.25 |
| `production.approaches.effort.crowd.editing` | 1.25 |
| `production.approaches.effort.awards.plot` | 1.25 |
| `production.approaches.effort.awards.writing` | 1.25 |
| `production.approaches.effort.awards.filming` | 0.75 |
| `production.approaches.effort.awards.editing` | 0.75 |
| `production.approaches.scoreShift.crowd.audience` | 0.3 |
| `production.approaches.scoreShift.crowd.critic` | -0.3 |
| `production.approaches.scoreShift.awards.audience` | -0.3 |
| `production.approaches.scoreShift.awards.critic` | 0.3 |
| `production.approaches.grossMult.crowd` | 1.12 |
| `production.approaches.grossMult.awards` | 0.95 |
| `production.approaches.reviewPrestigeMult.crowd` | 0.8 |
| `production.approaches.reviewPrestigeMult.awards` | 1.5 |
| `production.movie.baseCost` | 60000 |
| `production.movie.durationWeeks` | 30 |
| `production.formatExperience.movie` | 2 |
| `production.formatExperience.tv` | 1 |
| `production.formatExperience.limited_series` | 1 |
| `production.phaseEmphasis.writing.plot` | 1 |
| `production.phaseEmphasis.writing.writing` | 1 |
| `production.phaseEmphasis.writing.filming` | 0.2 |
| `production.phaseEmphasis.writing.editing` | 0.15 |
| `production.phaseEmphasis.filming.plot` | 0.2 |
| `production.phaseEmphasis.filming.writing` | 0.3 |
| `production.phaseEmphasis.filming.filming` | 1 |
| `production.phaseEmphasis.filming.editing` | 0.3 |
| `production.phaseEmphasis.editing.plot` | 0.1 |
| `production.phaseEmphasis.editing.writing` | 0.15 |
| `production.phaseEmphasis.editing.filming` | 0.2 |
| `production.phaseEmphasis.editing.editing` | 1 |
| `production.workRate` | 0.12 |
| `production.workVariance` | 0.1 |
| `production.starFilmingWeight` | 0.11 |
| `production.meterHalfPointPerWeek.plot` | 2.6 |
| `production.meterHalfPointPerWeek.writing` | 2.6 |
| `production.meterHalfPointPerWeek.filming` | 3.1 |
| `production.meterHalfPointPerWeek.editing` | 2.5 |
| `production.eraBarPerYear` | 0.04 |
| `production.eraBarMax` | 1.8 |
| `staffGrowth.xpPerWeek` | 10 |
| `staffGrowth.statGainPerWeek` | 0.35 |
| `staffGrowth.statCap` | 100 |
| `staffGrowth.trainCost` | 15000 |
| `staffGrowth.trainGain` | 3 |
| `staffGrowth.hireCost` | 20000 |
| `staffGrowth.hireWage` | 1100 |
| `staffGrowth.hireStatRange` | [15,35] |
| `staffGrowth.payrollPeriodWeeks` | 4 |
| `staffGrowth.raisePerLevel` | 0.03 |
| `staffGrowth.maxRaise` | 1 |
| `staffGrowth.raiseEventEveryLevels` | 5 |
| `staffGrowth.hireWageBySkill` | true |
| `studioGenre.xpPerRelease` | 1 |
| `studioGenre.levelThresholds` | [1,3,6,10,15] |
| `studioGenre.qualityBonusPerLevel` | 0.05 |
| `scoring.starScoreBonus.audience` | 0.5 |
| `scoring.starScoreBonus.critic` | 0.2 |
| `scoring.starScoreBonus.taperFrom` | 8 |
| `scoring.starScoreBonus.criticStoryGate.zeroAt` | 50 |
| `scoring.starScoreBonus.criticStoryGate.fullAt` | 75 |
| `scoring.audienceWeights.plot` | 0.15 |
| `scoring.audienceWeights.writing` | 0.15 |
| `scoring.audienceWeights.filming` | 0.35 |
| `scoring.audienceWeights.editing` | 0.35 |
| `scoring.criticWeights.plot` | 0.35 |
| `scoring.criticWeights.writing` | 0.35 |
| `scoring.criticWeights.filming` | 0.15 |
| `scoring.criticWeights.editing` | 0.15 |
| `scoring.weakGap` | 18 |
| `scoring.weakPenaltyRate` | 0.05 |
| `scoring.weakPenaltySide.heavy` | 1 |
| `scoring.weakPenaltySide.light` | 0.3 |
| `scoring.repetitionFatigue.newProjectPerRepeat` | 0.05 |
| `scoring.repetitionFatigue.sequelPerRepeat` | 0.025 |
| `scoring.repetitionFatigue.hallOfFameSoftening` | 0.5 |
| `scoring.repetitionFatigue.max` | 0.3 |
| `scoring.saturatedCriticPenalty` | 0.1 |
| `scoring.hofThreshold` | 9 |
| `scoring.renewThreshold` | 4 |
| `stars.pool.enabled` | true |
| `stars.pool.initialSize` | 150 |
| `stars.pool.tierShares.newcomer` | 0.45 |
| `stars.pool.tierShares.mid` | 0.35 |
| `stars.pool.tierShares.big` | 0.2 |
| `stars.pool.yearsActive.newcomer` | [0,2] |
| `stars.pool.yearsActive.mid` | [3,10] |
| `stars.pool.yearsActive.big` | [8,20] |
| `stars.pool.fameByYears` | 0.7 |
| `stars.pool.debutAge` | [18,28] |
| `stars.pool.tierByFame.midFrom` | 20 |
| `stars.pool.tierByFame.bigFrom` | 60 |
| `stars.pool.debutPerYear` | 15 |
| `stars.pool.offscreen.youngYears` | 8 |
| `stars.pool.offscreen.riseChance.young` | 0.4 |
| `stars.pool.offscreen.riseChance.veteran` | 0.25 |
| `stars.pool.offscreen.fadeChance.young` | 0.08 |
| `stars.pool.offscreen.fadeChance.veteran` | 0.2 |
| `stars.pool.offscreen.riseFame` | [4,12] |
| `stars.pool.offscreen.fadeFame` | [3,10] |
| `stars.pool.offscreen.levelUpChance.young` | 0.35 |
| `stars.pool.offscreen.levelUpChance.veteran` | 0.1 |
| `stars.pool.retirement.startYears` | 15 |
| `stars.pool.retirement.chancePerYear` | 0.03 |
| `stars.pool.retirement.max` | 0.6 |
| `stars.pool.growth.levelUpPoints` | 18 |
| `stars.pool.growth.offscreenLevelUpPoints` | 30 |
| `stars.pool.growth.jitter` | [0.6,1.4] |
| `stars.pool.growth.templates.scary_funny.chance` | 1 |
| `stars.pool.growth.templates.scary_funny.weights.Scary` | 0.45 |
| `stars.pool.growth.templates.scary_funny.weights.Funny` | 0.3 |
| `stars.pool.growth.templates.action_funny.chance` | 1 |
| `stars.pool.growth.templates.action_funny.weights.Action` | 0.5 |
| `stars.pool.growth.templates.action_funny.weights.Funny` | 0.2 |
| `stars.pool.growth.templates.funny_romantic.chance` | 1 |
| `stars.pool.growth.templates.funny_romantic.weights.Funny` | 0.4 |
| `stars.pool.growth.templates.funny_romantic.weights.Romantic` | 0.35 |
| `stars.pool.growth.templates.dramatic_romantic.chance` | 1 |
| `stars.pool.growth.templates.dramatic_romantic.weights.Dramatic` | 0.4 |
| `stars.pool.growth.templates.dramatic_romantic.weights.Romantic` | 0.35 |
| `stars.pool.growth.templates.dramatic_scary.chance` | 1 |
| `stars.pool.growth.templates.dramatic_scary.weights.Dramatic` | 0.4 |
| `stars.pool.growth.templates.dramatic_scary.weights.Scary` | 0.35 |
| `stars.pool.growth.templates.action_dramatic.chance` | 1 |
| `stars.pool.growth.templates.action_dramatic.weights.Action` | 0.4 |
| `stars.pool.growth.templates.action_dramatic.weights.Dramatic` | 0.3 |
| `stars.pool.growth.templates.specialist.chance` | 1.5 |
| `stars.pool.growth.templates.specialist.weights.*` | 0.6 |
| `stars.pool.growth.templates.even.chance` | 1 |
| `stars.pool.catalog.unlockPrestigeWithoutLadder` | 200 |
| `stars.pool.catalog.perfectFitMin` | 60 |
| `stars.pool.catalog.perfectFitTop` | 2 |
| `stars.pool.fallback.focusSkill` | 45 |
| `stars.pool.fallback.otherSkill` | 3 |
| `stars.budgetBase` | 100 |
| `stars.budgetPerLevel` | 30 |
| `stars.maxLevel` | 10 |
| `stars.fallbackBudget` | 40 |
| `stars.projectsPerLevel` | 2 |
| `stars.growthPerProject` | 6 |
| `stars.shapeWeights.balanced` | 0.4 |
| `stars.shapeWeights.twoFocus` | 0.35 |
| `stars.shapeWeights.specialist` | 0.25 |
| `stars.tiers.newcomer.level` | [0,2] |
| `stars.tiers.newcomer.fame` | [0,15] |
| `stars.tiers.mid.level` | [2,5] |
| `stars.tiers.mid.fame` | [25,55] |
| `stars.tiers.big.level` | [4,8] |
| `stars.tiers.big.fame` | [65,95] |
| `stars.hiddenGemChance` | 0.04 |
| `stars.hiddenGemLevel` | [5,7] |
| `stars.auditionCount` | 5 |
| `stars.genreFitBias` | 0.5 |
| `stars.feeBase` | 2000 |
| `stars.feePerFame` | 250 |
| `stars.fameExponent` | 1.25 |
| `stars.prestigePremiumMax` | 0.6 |
| `stars.prestigeHalf` | 400 |
| `stars.relationshipStart` | 1 |
| `stars.relationshipDiscountPerStar` | 0.06 |
| `stars.relPerProject` | 0.25 |
| `stars.relCareerBoost` | 0.5 |
| `stars.relCareerHurt` | 0.75 |
| `stars.relRecast` | 1.5 |
| `stars.fameGainScale` | 25 |
| `stars.fameExposureHalf` | 150000 |
| `marketing.campaigns.none.cost` | 0 |
| `marketing.campaigns.none.awareness` | 0 |
| `marketing.campaigns.small.cost` | 8000 |
| `marketing.campaigns.small.awareness` | 0.25 |
| `marketing.campaigns.medium.cost` | 20000 |
| `marketing.campaigns.medium.awareness` | 0.55 |
| `marketing.campaigns.large.cost` | 45000 |
| `marketing.campaigns.large.awareness` | 0.95 |
| `marketing.studioAdsCost` | 12000 |
| `marketing.studioAdsBuzz` | 0.3 |
| `marketing.buzzDecayPerWeek` | 0.12 |
| `audience.qualityPivot` | 5 |
| `audience.movieQualityPivot` | 6.5 |
| `audience.baseAwareness` | 0.35 |
| `audience.fameAwareness` | 0.6 |
| `audience.trendAwareness.none` | 0 |
| `audience.trendAwareness.rising` | 0.15 |
| `audience.trendAwareness.hot` | 0.4 |
| `audience.trendAwareness.saturated` | 0.1 |
| `audience.trendAwareness.cooled` | 0 |
| `audience.fanAwareness` | 2.5 |
| `audience.openingShare` | 0.3 |
| `audience.criticWeeks` | 2 |
| `audience.baseRetention` | 0.62 |
| `audience.criticRetentionWeight` | 0.18 |
| `audience.audienceRetentionWeight` | 0.24 |
| `audience.retentionMin` | 0.15 |
| `audience.retentionMax` | 1.05 |
| `audience.maxRunWeeks` | 14 |
| `audience.minWeeklyViewers` | 400 |
| `audience.fanConversion` | 0.08 |
| `audience.backlashRate` | 0.35 |
| `audience.spinoffFanShare` | 0.5 |
| `audience.fanDecayPerYear` | 0.1 |
| `audience.fanDecayExact` | true |
| `audience.legsModel` | "diffusion" |
| `audience.diffusion.openWatchShare` | 0.3 |
| `audience.diffusion.watchRate` | 0.3 |
| `audience.diffusion.watchRateQualityWeight` | 0.25 |
| `audience.diffusion.criticBuzzRate` | 0.12 |
| `audience.diffusion.womPerViewer` | 2 |
| `audience.diffusion.interestDecay` | 0.12 |
| `audience.diffusion.badInterestDecay` | 0.35 |
| `audience.diffusion.movieBadInterestDecay` | 3 |
| `distribution.roster` | [{"id":"wolf","name":"Wolf Pictures","reach":0.6,"generosity":1.25,"royaltyBase":0.32,"favoredFamilies":["Scary","Action"],"minPrestige":0},{"id":"starlight","name":"Starlight Indie","reach":0.35,"generosity":0.75,"royaltyBase":0.08,"favoredFamilies":["Dramatic","Romantic"],"minPrestige":0},{"id":"xyz","name":"XYZ Network","reach":0.85,"generosity":1.45,"royaltyBase":0.45,"favoredFamilies":["Funny","Action"],"minPrestige":150},{"id":"orbit","name":"Orbit Releasing","reach":0.75,"generosity":1.15,"royaltyBase":0.36,"favoredFamilies":["Scary","Funny"],"minPrestige":60},{"id":"meridian","name":"Meridian Global","reach":1,"generosity":1.6,"royaltyBase":0.5,"favoredFamilies":["Action","Dramatic"],"minPrestige":400}] |
| `distribution.lifeline.id` | "bargain" |
| `distribution.lifeline.name` | "Bargain Pictures" |
| `distribution.lifeline.reach` | 0.3 |
| `distribution.lifeline.advanceOverBase` | 1.05 |
| `distribution.lifeline.royalty` | 0.55 |
| `distribution.offersMin` | 2 |
| `distribution.offersMax` | 3 |
| `distribution.trustStart` | 2.5 |
| `distribution.trustMin` | 0 |
| `distribution.trustMax` | 5 |
| `distribution.trustShowUpMin` | 0.75 |
| `distribution.trustOfferFactorBase` | 0.7 |
| `distribution.trustOfferFactorPerPoint` | 0.12 |
| `distribution.trustRoiWeight` | 0.6 |
| `distribution.trustQualityWeight` | 0.4 |
| `distribution.trustMaxStep` | 0.75 |
| `distribution.trustDriftPerYear` | 0.3 |
| `distribution.heatGradeWeight` | 0.12 |
| `distribution.heatTrendWeight.none` | 0 |
| `distribution.heatTrendWeight.rising` | 0.08 |
| `distribution.heatTrendWeight.hot` | 0.15 |
| `distribution.heatTrendWeight.saturated` | -0.05 |
| `distribution.heatTrendWeight.cooled` | 0 |
| `distribution.heatFansWeight` | 0.5 |
| `distribution.offerJitter` | 0.08 |
| `distribution.selfFundReach` | 0.22 |
| `prestige.tvMilestones` | [{"id":"tv_acclaimed_season","kind":"tvSeasonAvg","threshold":8.5,"amount":200,"scope":"release"},{"id":"tv_hit_show","kind":"tvShowAvg","threshold":8,"minSeason":3,"amount":300,"scope":"ip"},{"id":"tv_long_runner","kind":"tvShowAllAtLeast","threshold":7,"minSeason":5,"amount":400,"scope":"ip"}] |
| `prestige.repeatScope` | "perIP" |
| `prestige.milestones` | [{"id":"meters_all_70","kind":"allMeters","threshold":70,"amount":50},{"id":"audience_7_5","kind":"audience","threshold":7.5,"amount":75},{"id":"critic_8_5","kind":"critic","threshold":8.5,"amount":85},{"id":"hall_of_fame","kind":"hallOfFame","threshold":9,"amount":200},{"id":"gross_1m","kind":"lifetimeGross","threshold":1000000,"amount":100},{"id":"viewers_500k","kind":"lifetimeViewers","threshold":500000,"amount":150}] |
| `trends.riseChancePerWeek` | 0.012 |
| `trends.risingWeeks` | 20 |
| `trends.hotWeeks` | 40 |
| `trends.saturatedWeeks` | 40 |
| `trends.cooledWeeks` | 30 |
| `research.themeCost` | 25000 |
| `research.themePurchase` | false |
| `themeUnlocks.trendInspiration` | true |
| `themeUnlocks.chance` | 0.25 |
| `genreUnlocks.enabled` | true |
| `genreUnlocks.skill.Thriller.stat` | "plot" |
| `genreUnlocks.skill.Thriller.min` | 50 |
| `genreUnlocks.skill.Thriller.why` | "twisty stories" |
| `genreUnlocks.skill.Romance.stat` | "filming" |
| `genreUnlocks.skill.Romance.min` | 50 |
| `genreUnlocks.skill.Romance.why` | "performances" |
| `genreUnlocks.skill.Drama.stat` | "writing" |
| `genreUnlocks.skill.Drama.min` | 60 |
| `genreUnlocks.skill.Drama.why` | "serious scripts" |
| `genreUnlocks.skill.SciFi.stat` | "editing" |
| `genreUnlocks.skill.SciFi.min` | 60 |
| `genreUnlocks.skill.SciFi.why` | "effects work" |
| `genreUnlocks.combos.RomCom` | ["Comedy","Romance"] |
| `genreUnlocks.easing.fromYear` | 4 |
| `genreUnlocks.easing.perYear` | 5 |
| `genreUnlocks.easing.floor` | 40 |
| `time.weeksPerYear` | 52 |
| `debug.injectBug` | "none" |
| `staffCapacity.ladder` | [4,6,8] |
| `staffCapacity.upgradeCosts` | [250000,750000] |
| `staffCapacity.upgradePrestige` | [200,1000] |
| `agents.runwayStarReserve` | true |
| `agents.legacyHeuristicStaffCaps` | false |
| `agents.tvOrderPreference` | "max" |
| `agents.useFiring` | true |
| `agents.economicRenewal` | true |
| `agents.fireDebtThreshold` | -100000 |
| `agents.renewMinNetPerWeek` | 15000 |
| `expectations.studioSize.enabled` | true |
| `expectations.studioSize.toughnessByUpgrades` | [0.025,0.04] |
| `expectations.studioSize.applyTo` | "both" |
| `expectations.method` | "scale" |
| `expectations.critics.enabled` | true |
| `expectations.critics.generationYears` | 5 |
| `expectations.critics.toughnessPerGeneration` | 0.06 |
| `expectations.critics.maxToughness` | 0.18 |
| `expectations.critics.announceWeeksAhead` | 26 |
| `expectations.critics.adaptYears` | 3 |
| `expectations.critics.permanentShare` | 0.25 |
| `expectations.audience.enabled` | false |
| `expectations.audience.eraYears` | 10 |
| `expectations.audience.toughnessPerEra` | 0.02 |
| `expectations.audience.maxToughness` | 0.06 |
| `formats.limitedSeries` | true |
| `formats.tv` | true |
| `formats.streaming` | true |
| `limitedSeries.availableAfterProductions` | 1 |
| `limitedSeries.episodes` | 6 |
| `limitedSeries.baseCost` | 90000 |
| `limitedSeries.durationWeeks` | 12 |
| `limitedSeries.pacing` | "weekly" |
| `limitedSeries.grossPerEpisodeViewer` | 0.4 |
| `limitedSeries.tailWeeks` | 3 |
| `limitedSeries.tailShare` | 0.4 |
| `limitedSeries.decliningGrossPerViewer` | 2.4 |
| `tv.unlock.prestige` | 300 |
| `tv.unlock.cost` | 150000 |
| `tv.setupCost` | 15000 |
| `tv.perEpisodeCost` | 15000 |
| `tv.durationBaseWeeks` | 8 |
| `tv.weeksPerEpisode` | 1.2 |
| `tv.orderSizes` | [5,10,15,20] |
| `tv.episodeCaps` | [{"maxEpisodes":5,"prestige":0},{"maxEpisodes":10,"prestige":600},{"maxEpisodes":15,"prestige":1800},{"maxEpisodes":20,"prestige":3500}] |
| `tv.renewalThreshold` | 4 |
| `tv.renewalInclusive` | true |
| `tv.grossPerEpisodeViewer` | 0.46 |
| `tv.episodeModel.premiereShare` | 0.5 |
| `tv.episodeModel.baseRetention` | 0.88 |
| `tv.episodeModel.retentionWeight` | 0.3 |
| `tv.episodeModel.retentionMin` | 0.5 |
| `tv.episodeModel.retentionMax` | 1 |
| `tv.episodeModel.criticWeeks` | 2 |
| `tv.episodeModel.buzzRate` | 0.06 |
| `tv.episodeModel.womPerViewer` | 0.35 |
| `tv.episodeModel.interestDecay` | 0.15 |
| `tv.episodeModel.watchRate` | 0.25 |
| `tv.episodeModel.watchRateQualityWeight` | 0.25 |
| `tv.tailWeeks` | 2 |
| `tv.tailShare` | 0.35 |
| `tv.fatigue.perSeason` | 0.012 |
| `tv.fatigue.exponent` | 1.6 |
| `tv.fatigue.max` | 0.35 |
| `tv.fatigue.qualitySlow` | 0.4 |
| `tv.showHealth.enabled` | true |
| `tv.showHealth.pivot` | 7.5 |
| `tv.showHealth.slope` | 1 |
| `tv.showHealth.floor` | 0.3 |
| `tv.viewerFatigue.enabled` | false |
| `tv.viewerFatigue.basis` | "seasons" |
| `tv.viewerFatigue.episodesPerStep` | 10 |
| `tv.viewerFatigue.onset` | 3 |
| `tv.viewerFatigue.perStep` | 0.03 |
| `tv.viewerFatigue.exponent` | 1.3 |
| `tv.viewerFatigue.max` | 0.45 |
| `tv.viewerFatigue.qualitySlow` | 0.5 |
| `tv.viewerFatigue.goodTwistReset` | 2 |
| `tv.viewerFatigue.appliesTo` | "returning" |
| `tv.twist.goodGradeMin` | 0.5 |
| `tv.twist.badGradeMax` | -0.5 |
| `tv.twist.goodFatigueReset` | 2 |
| `tv.twist.badFanLoss` | 0.25 |
| `tv.hiatus.graceWeeks` | 78 |
| `tv.hiatus.penaltyPerYear` | 0.35 |
| `tv.hiatus.minMult` | 0.4 |
| `tv.announce.cost` | 15000 |
| `tv.announce.boost` | 0.35 |
| `tv.announce.decayPerWeek` | 0.04 |
| `tv.contract.variant` | "A" |
| `tv.contract.B.baseCover` | 0.9 |
| `tv.contract.B.roiWeight` | 0.3 |
| `tv.contract.B.minCover` | 0.5 |
| `tv.contract.B.maxCover` | 1.4 |
| `streaming.unlock.prestige` | 3000 |
| `streaming.unlock.minCatalog` | 20 |
| `streaming.engineer.hireCost` | 25000 |
| `streaming.engineer.wage` | 1500 |
| `streaming.engineer.statRange` | [18,35] |
| `streaming.buildCost` | 600000 |
| `streaming.buildWeeks` | 30 |
| `streaming.reachableMarket` | 120000 |
| `streaming.feePerSubWeek` | 0.75 |
| `streaming.opex.fixedPerWeek` | 8000 |
| `streaming.opex.perSubPerWeek` | 0.15 |
| `streaming.originalReach` | 0.55 |
| `streaming.originalConversion` | 0.35 |
| `streaming.catalogJoinConversion` | 0.04 |
| `streaming.launchPerAppeal` | 1500 |
| `streaming.launchMax` | 15000 |
| `streaming.churn.basePerWeek` | 0.012 |
| `streaming.churn.retentionMax` | 0.65 |
| `streaming.churn.catalogScale` | 6 |
| `streaming.churn.hofEvergreen` | 2.5 |
| `streaming.churn.freshnessHalfLifeWeeks` | 104 |
| `streaming.churn.evergreenFloor` | 0.35 |
| `streaming.churn.diversityPerGenre` | 0.02 |
| `streaming.churn.diversityMax` | 0.1 |
| `streaming.churn.quietGraceWeeks` | 26 |
| `streaming.churn.quietPenaltyPer26Weeks` | 0.5 |
| `streaming.churn.quietMax` | 2 |
| `streaming.originalTvPacing` | "weekly" |
| `staffing.firingEnabled` | true |
| `staffing.betweenProductionsOnly` | true |
| `staffing.minStaff` | 2 |
| `staffing.fireCost` | 0 |
| `events.breakthrough.enabled` | false |
| `events.breakthrough.chancePerCheck` | 0.02 |
| `events.breakthrough.stages` | ["writing","filming","editing"] |
| `events.breakthrough.stageMeters.writing` | ["plot","writing"] |
| `events.breakthrough.stageMeters.filming` | ["filming"] |
| `events.breakthrough.stageMeters.editing` | ["editing"] |
| `events.breakthrough.bonusShare` | 0.6 |
| `events.breakthrough.maxPerProduction` | 1 |
| `events.breakthrough.formats` | ["movie","limited_series","tv"] |
| `events.breakthrough.minSeason` | 0 |
| `economy.mode` | "late_distribution" |
| `economy.overdraft.monthlyRate` | 0.02 |
| `economy.overdraft.periodWeeks` | 4 |
| `economy.lateDistribution.previewCenter` | 60 |
| `economy.lateDistribution.previewSpan` | 40 |
| `economy.lateDistribution.previewWeight` | 0.6 |
| `economy.lateDistribution.trendWeight.none` | 0 |
| `economy.lateDistribution.trendWeight.rising` | 0.08 |
| `economy.lateDistribution.trendWeight.hot` | 0.15 |
| `economy.lateDistribution.trendWeight.saturated` | -0.05 |
| `economy.lateDistribution.trendWeight.cooled` | 0 |
| `economy.lateDistribution.fansWeight` | 0.6 |
| `economy.lateDistribution.fameWeight` | 0.3 |
| `economy.lateDistribution.knownComboWeight` | 0.12 |
| `economy.lateDistribution.lastSeasonWeight` | 0.1 |
| `economy.lateDistribution.appealMin` | 0.4 |
| `economy.lateDistribution.appealMax` | 1.8 |
| `economy.lateDistribution.studioClout.enabled` | true |
| `economy.lateDistribution.studioClout.adMultByUpgrades` | [1.2,1.4] |
| `economy.lateDistribution.studioClout.shareMultByUpgrades` | [0.75,0.5] |
| `economy.lateDistribution.favoredAdFactor` | 1.15 |
| `economy.lateDistribution.formatAdFactor.movie` | 1 |
| `economy.lateDistribution.formatAdFactor.limited_series` | 1.2 |
| `economy.lateDistribution.formatAdFactor.tv` | 1 |
| `economy.lateDistribution.adScale` | 40000 |
| `economy.lateDistribution.adAwarenessMax` | 1.2 |
| `economy.lateDistribution.shareMin` | 0.05 |
| `economy.lateDistribution.shareMax` | 0.7 |
| `economy.lateDistribution.roster.starlight.adBase` | 10000 |
| `economy.lateDistribution.roster.starlight.shareBase` | 0.15 |
| `economy.lateDistribution.roster.starlight.minAppeal` | 0.4 |
| `economy.lateDistribution.roster.wolf.adBase` | 30000 |
| `economy.lateDistribution.roster.wolf.shareBase` | 0.35 |
| `economy.lateDistribution.roster.wolf.minAppeal` | 0.7 |
| `economy.lateDistribution.roster.orbit.adBase` | 40000 |
| `economy.lateDistribution.roster.orbit.shareBase` | 0.38 |
| `economy.lateDistribution.roster.orbit.minAppeal` | 0.8 |
| `economy.lateDistribution.roster.xyz.adBase` | 55000 |
| `economy.lateDistribution.roster.xyz.shareBase` | 0.45 |
| `economy.lateDistribution.roster.xyz.minAppeal` | 0.9 |
| `economy.lateDistribution.roster.meridian.adBase` | 80000 |
| `economy.lateDistribution.roster.meridian.shareBase` | 0.5 |
| `economy.lateDistribution.roster.meridian.minAppeal` | 1 |
| `economy.lateDistribution.selfDistributionReach` | 0.22 |
| `economy.lateDistribution.originalsUseStudioCampaign` | true |
| `economy.contracts.enabled` | true |
| `economy.contracts.list` | [{"id":"commercial_edit","name":"Commercial edit","weeks":6,"meters":["editing"],"minStaff":2,"minBestStat":0,"fee":9000},{"id":"script_polish","name":"Script polish","weeks":8,"meters":["plot","writing"],"minStaff":2,"minBestStat":28,"fee":12000},{"id":"pilot_services","name":"Network pilot production services","weeks":12,"meters":["filming","editing"],"minStaff":4,"minBestStat":45,"fee":30000},{"id":"studio_services","name":"Full production services","weeks":16,"meters":["plot","writing","filming","editing"],"minStaff":6,"minBestStat":60,"fee":56000}] |
