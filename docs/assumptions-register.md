# Assumptions register

> **Every number in `config/baseline.json` is PROVISIONAL.** These are testing values chosen to get measurable results, not design locks. Formula shapes marked WORKING ASSUMPTION fill gaps that v9.61 leaves Open. Change them freely; rerun the same seed bank with `npm run compare`.

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
| A13 | Gross | $2.00 gross per viewer; distributor takes royalty % of each week's gross. | Scaled so a decent film roughly repays its distributor (ROI ≈ 1). | Royalty and gross scale together decide distributor ROI and trust. |
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

## Not modelled (deliberately absent, not guessed)

Limited series, TV seasons/renewals/hiatus/announcements/episode caps, streaming (subscribers, churn, Originals, platform build), eras beyond the quality bar, studio upgrades other than the Gate 2.5 staff-capacity ladder, format unlock gates, genre unlocks, late-game concurrency, Star bio lines, budget tiers (shelved in the design).

## Full parameter listing (`config/baseline.json`)

Regenerated for Gate 2.5. Candidate overrides are in `config/candidate.json`.

| Path | Value |
|---|---|
| `_label` | "baseline \u2014 PROVISIONAL TESTING VALUES. Simulation assumptions, NOT design locks." |
| `name` | "baseline" |
| `start.cash` | 40000 |
| `start.staff[0].name` | "Sam" |
| `start.staff[0].stats.plot` | 32 |
| `start.staff[0].stats.writing` | 28 |
| `start.staff[0].stats.filming` | 22 |
| `start.staff[0].stats.editing` | 20 |
| `start.staff[0].wage` | 900 |
| `start.staff[1].name` | "Alex" |
| `start.staff[1].stats.plot` | 20 |
| `start.staff[1].stats.writing` | 22 |
| `start.staff[1].stats.filming` | 30 |
| `start.staff[1].stats.editing` | 30 |
| `start.staff[1].wage` | 900 |
| `start.upkeepPerWeek` | 600 |
| `start.unlockedGenres` | ["Action", "Comedy", "Horror"] |
| `start.unlockedThemes` | ["Zombies", "Superheroes", "Spies", "Sports"] |
| `world.genres.Action` | "Action" |
| `world.genres.Comedy` | "Funny" |
| `world.genres.Horror` | "Scary" |
| `world.genres.Thriller` | "Scary" |
| `world.genres.Romance` | "Romantic" |
| `world.genres.Drama` | "Dramatic" |
| `world.genres.SciFi` | "Action" |
| `world.genres.RomCom` | "Funny" |
| `world.families` | ["Scary", "Funny", "Romantic", "Action", "Dramatic"] |
| `world.themes` | ["Zombies", "Superheroes", "Spies", "Sports", "Vampires", "Time Travel", "Pirates", "Robots", "Dinosaurs", "Mythology"] |
| `world.gradeWeights.A` | 0.12 |
| `world.gradeWeights.B` | 0.25 |
| `world.gradeWeights.C` | 0.33 |
| `world.gradeWeights.D` | 0.2 |
| `world.gradeWeights.F` | 0.1 |
| `world.gradeMultiplier.A` | 1.15 |
| `world.gradeMultiplier.B` | 1.06 |
| `world.gradeMultiplier.C` | 1.0 |
| `world.gradeMultiplier.D` | 0.9 |
| `world.gradeMultiplier.F` | 0.78 |
| `world.marketSize` | 400000 |
| `world.grossPerViewer` | 2.0 |
| `production.movie.baseCost` | 60000 |
| `production.movie.durationWeeks` | 16 |
| `production.phaseEmphasis.writing.plot` | 1.0 |
| `production.phaseEmphasis.writing.writing` | 1.0 |
| `production.phaseEmphasis.writing.filming` | 0.2 |
| `production.phaseEmphasis.writing.editing` | 0.15 |
| `production.phaseEmphasis.filming.plot` | 0.2 |
| `production.phaseEmphasis.filming.writing` | 0.3 |
| `production.phaseEmphasis.filming.filming` | 1.0 |
| `production.phaseEmphasis.filming.editing` | 0.3 |
| `production.phaseEmphasis.editing.plot` | 0.1 |
| `production.phaseEmphasis.editing.writing` | 0.15 |
| `production.phaseEmphasis.editing.filming` | 0.2 |
| `production.phaseEmphasis.editing.editing` | 1.0 |
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
| `staffGrowth.hireStatRange` | [15, 35] |
| `studioGenre.xpPerRelease` | 1 |
| `studioGenre.levelThresholds` | [1, 3, 6, 10, 15] |
| `studioGenre.qualityBonusPerLevel` | 0.03 |
| `studioGenre._awardTiming` | "WORKING ASSUMPTION: genre XP awarded on production completion" |
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
| `scoring.weakPenaltySide.heavy` | 1.0 |
| `scoring.weakPenaltySide.light` | 0.3 |
| `scoring.repetitionFatigue.newProjectPerRepeat` | 0.05 |
| `scoring.repetitionFatigue.sequelPerRepeat` | 0.025 |
| `scoring.repetitionFatigue.hallOfFameSoftening` | 0.5 |
| `scoring.repetitionFatigue.max` | 0.3 |
| `scoring.saturatedCriticPenalty` | 0.1 |
| `scoring.hofThreshold` | 9.0 |
| `scoring.renewThreshold` | 4.0 |
| `stars.budgetBase` | 100 |
| `stars.budgetPerLevel` | 30 |
| `stars.maxLevel` | 10 |
| `stars.fallbackBudget` | 40 |
| `stars.projectsPerLevel` | 2 |
| `stars.growthPerProject` | 6 |
| `stars.shapeWeights.balanced` | 0.4 |
| `stars.shapeWeights.twoFocus` | 0.35 |
| `stars.shapeWeights.specialist` | 0.25 |
| `stars.tiers.newcomer.level` | [0, 2] |
| `stars.tiers.newcomer.fame` | [0, 15] |
| `stars.tiers.mid.level` | [2, 5] |
| `stars.tiers.mid.fame` | [25, 55] |
| `stars.tiers.big.level` | [4, 8] |
| `stars.tiers.big.fame` | [65, 95] |
| `stars.hiddenGemChance` | 0.04 |
| `stars.hiddenGemLevel` | [5, 7] |
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
| `audience.legsModel` | "geometric" |
| `audience.diffusion._label` | "WORKING ASSUMPTION (Gate 2.5 candidate): finite awareness diffusion. Used only when legsModel = 'diffusion'." |
| `audience.diffusion.openWatchShare` | 0.3 |
| `audience.diffusion.watchRate` | 0.3 |
| `audience.diffusion.watchRateQualityWeight` | 0.25 |
| `audience.diffusion.criticBuzzRate` | 0.12 |
| `audience.diffusion.womPerViewer` | 2.0 |
| `audience.diffusion.interestDecay` | 0.12 |
| `audience.diffusion.badInterestDecay` | 0.35 |
| `distribution.roster[0].id` | "wolf" |
| `distribution.roster[0].name` | "Wolf Pictures" |
| `distribution.roster[0].reach` | 0.6 |
| `distribution.roster[0].generosity` | 1.25 |
| `distribution.roster[0].royaltyBase` | 0.32 |
| `distribution.roster[0].favoredFamilies` | ["Scary", "Action"] |
| `distribution.roster[0].minPrestige` | 0 |
| `distribution.roster[1].id` | "starlight" |
| `distribution.roster[1].name` | "Starlight Indie" |
| `distribution.roster[1].reach` | 0.35 |
| `distribution.roster[1].generosity` | 0.75 |
| `distribution.roster[1].royaltyBase` | 0.08 |
| `distribution.roster[1].favoredFamilies` | ["Dramatic", "Romantic"] |
| `distribution.roster[1].minPrestige` | 0 |
| `distribution.roster[2].id` | "xyz" |
| `distribution.roster[2].name` | "XYZ Network" |
| `distribution.roster[2].reach` | 0.85 |
| `distribution.roster[2].generosity` | 1.45 |
| `distribution.roster[2].royaltyBase` | 0.45 |
| `distribution.roster[2].favoredFamilies` | ["Funny", "Action"] |
| `distribution.roster[2].minPrestige` | 150 |
| `distribution.roster[3].id` | "orbit" |
| `distribution.roster[3].name` | "Orbit Releasing" |
| `distribution.roster[3].reach` | 0.75 |
| `distribution.roster[3].generosity` | 1.15 |
| `distribution.roster[3].royaltyBase` | 0.36 |
| `distribution.roster[3].favoredFamilies` | ["Scary", "Funny"] |
| `distribution.roster[3].minPrestige` | 60 |
| `distribution.roster[4].id` | "meridian" |
| `distribution.roster[4].name` | "Meridian Global" |
| `distribution.roster[4].reach` | 1.0 |
| `distribution.roster[4].generosity` | 1.6 |
| `distribution.roster[4].royaltyBase` | 0.5 |
| `distribution.roster[4].favoredFamilies` | ["Action", "Dramatic"] |
| `distribution.roster[4].minPrestige` | 400 |
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
| `prestige.repeatScope` | "perIP" |
| `prestige._repeatScopeNote` | "WORKING ASSUMPTION (Open in v9.61): each milestone pays once per IP. Options: perRelease \\| perIP \\| career" |
| `prestige.milestones[0].id` | "meters_all_70" |
| `prestige.milestones[0].kind` | "allMeters" |
| `prestige.milestones[0].threshold` | 70 |
| `prestige.milestones[0].amount` | 50 |
| `prestige.milestones[1].id` | "audience_7_5" |
| `prestige.milestones[1].kind` | "audience" |
| `prestige.milestones[1].threshold` | 7.5 |
| `prestige.milestones[1].amount` | 75 |
| `prestige.milestones[2].id` | "critic_8_5" |
| `prestige.milestones[2].kind` | "critic" |
| `prestige.milestones[2].threshold` | 8.5 |
| `prestige.milestones[2].amount` | 85 |
| `prestige.milestones[3].id` | "hall_of_fame" |
| `prestige.milestones[3].kind` | "hallOfFame" |
| `prestige.milestones[3].threshold` | 9.0 |
| `prestige.milestones[3].amount` | 200 |
| `prestige.milestones[4].id` | "gross_1m" |
| `prestige.milestones[4].kind` | "lifetimeGross" |
| `prestige.milestones[4].threshold` | 1000000 |
| `prestige.milestones[4].amount` | 100 |
| `prestige.milestones[5].id` | "viewers_500k" |
| `prestige.milestones[5].kind` | "lifetimeViewers" |
| `prestige.milestones[5].threshold` | 500000 |
| `prestige.milestones[5].amount` | 150 |
| `trends.riseChancePerWeek` | 0.012 |
| `trends.risingWeeks` | 20 |
| `trends.hotWeeks` | 40 |
| `trends.saturatedWeeks` | 40 |
| `trends.cooledWeeks` | 30 |
| `research.themeCost` | 25000 |
| `time.weeksPerYear` | 52 |
| `debug.injectBug` | "none" |
| `debug._note` | "TEST-ONLY regression injection: none \\| advanceAsRevenue \\| fameIntoScore. Must be 'none' for real runs." |
| `staffCapacity._label` | "EXPERIMENTAL (Gate 2.5). Studio-wide max employees; NOT a per-project crew cap. Baseline keeps the historical uncapped behavior for comparison." |
| `staffCapacity.ladder` | [999] |
| `staffCapacity.upgradeCosts` | [] |
| `staffCapacity.upgradePrestige` | [] |
| `agents._label` | "Agent-only heuristics (not game rules). legacyHeuristicStaffCaps reproduces pre-Gate-2.5 strategy hiring cutoffs (balanced 4, quality-first 5, others never hire)." |
| `agents.legacyHeuristicStaffCaps` | true |
