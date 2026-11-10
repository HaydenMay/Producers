# Batch report — 700 careers

> **Simulation assumptions, not design locks.** All numbers come from provisional config values. Nothing here is official balance.

- Ruleset: `v9.61-movie-kernel-0.1` · Config: `baseline` (hash `494723cc`)
- Seeds: 1–100 (100 seeds)
- Strategies: balanced, quality-first, cheap-duds, famous-star, self-funder, experimenter, franchise-builder
- Productions per career: 20
- Runtime: 4001 ms (measured)
- Modelled: movies; distributor advances/royalties/trust; Stars (families, budgets, fallback, callbacks, relationships); marketing + studio buzz; scores + legs; IP fans; Prestige milestones; studio genre levels; trends; staff XP/hire/train; studio staff-capacity cap + upgrade ladder (when configured); theme research + staff pitches
- **Not modelled:** limited series; TV series/seasons/renewals/hiatus/announcements; streaming service/subscribers; eras beyond a gentle quality bar; studio upgrades other than staff capacity; format unlock gates; genre unlocks; late-game concurrency

## Invariant checks

All invariants held across every career (ledger audit, gross = sales only, causal scores, Star budgets, unique Prestige ids, runs terminate).

## Diagnostic flags

| Flag | Fired | Why | Seeds | Implicated |
|---|---|---|---|---|
| SURPLUS_FARMING_DOMINANT | no | cheap-duds median end cash 1852153 vs best decent policy 4793655 (fires at >= 0.95x) |  | distribution.roster[].generosity, production.movie.baseCost, marketing/Star value |
| EARLY_SOFTLOCK | **YES** | 1/700 careers stuck (hit maxWeeks or >= 52 negative-cash weeks); by strategy: self-funder 1/100 | 38 | start.cash, wages, lifeline terms |
| PRESTIGE_TOO_FAST | no | 47/700 careers earn > 400 Prestige/year | 8, 11, 14, 16, 17, 18, 21, 23, 27, 28 | prestige.milestones, prestige.repeatScope |
| PRESTIGE_TOO_SLOW | no | 161/700 careers with >= 10 releases have zero Prestige |  | prestige thresholds vs typical scores |
| QUALITY_INFLATION | no | 166/700 careers: late releases mostly 8+ or > 25% of releases 9+ | 1, 1, 2, 2, 3, 3, 4, 4, 5, 5 | staffGrowth.statGainPerWeek, stars.growthPerProject, studioGenre.qualityBonusPerLevel, production.eraBarPerYear |
| DEAD_STRATEGY | **YES** | self-funder: median end cash < 25% of the best (4793655) or negative |  | varies by strategy |
| DOMINANT_STRATEGY | no | no policy wins cash AND Prestige in >= 80% of paired seeds |  |  |
| STAR_PRICE_NO_VALUE | no | famous-star median cash/release 141945 vs cheap-duds 90608 (Fame + marketing spend does pay back) |  | stars.feePerFame, audience.fameAwareness, marketing campaigns |
| FRANCHISE_AUTO_WIN | no | franchise-builder median cash 3694496; fires if > 1.25x every other policy and Prestige >= all |  | audience.fanAwareness, repetitionFatigue.sequelPerRepeat |
| DISTRIBUTOR_TRUST_SPIRAL | no | 0/700 careers end with mean distributor trust < 0.75 |  | distribution.trust* |
| STREAMING_PASSIVE_MONEY_PRINTER | no | NOT APPLICABLE: streaming is not modelled yet (Gate 3) |  |  |
| HIGH_REVIEWS_UNEXPLAINED_LOW_SALES | no | 132 releases with avg >= 7.5 and gross in bottom 20%: 132 explained by small reach, 0 by low awareness (little marketing/Fame/fans), 0 unexplained |  | audience opening/legs model |
| UNSUPPORTED_RULE_ASSUMPTION | **YES** | INFO: results depend on WORKING ASSUMPTIONS (see docs/assumptions-register.md): prestige repeatScope=perIP, staff capacity ladder=[999], trust formula, offer/heat formula, saturating awareness + geometric legs, genre XP on completion, staff-pitch rule, all numeric values. |  |  |

## Strategy summary (median, p10–p90)

| Strategy | endCash | cashPerYear | prestige | meanAudience | meanCritic | shareLate8plus | surplusKept | surplusShareOfIncome | royaltyCosts | negativeCashWeeks | maxIpFans | meanTrustEnd | ended negative | any Prestige |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| balanced | $4,793,655 (p10 $4,338,453 · p90 $5,262,960) | $741,211 (p10 $667,223 · p90 $811,772) | 1670 (p10 1219.5 · p90 2009.5) | 7.63 (p10 7.35 · p90 7.95) | 7.62 (p10 7.23 · p90 7.96) | 0.75 (p10 0.38 · p90 0.89) | $218,017 (p10 $90,381 · p90 $359,750) | 0.03 (p10 0.01 · p90 0.05) | $4,328,300 (p10 $3,804,430 · p90 $4,725,245) | 2 (p10 0 · p90 5.1) | 52495 (p10 32541.4 · p90 73087.4) | 4.01 (p10 3.72 · p90 4.21) | 0 | 1 |
| quality-first | $4,328,847 (p10 $3,783,566 · p90 $4,627,773) | $668,987 (p10 $584,233 · p90 $712,132) | 2555 (p10 2123 · p90 3006) | 7.8 (p10 7.53 · p90 8.08) | 7.78 (p10 7.53 · p90 7.99) | 0.75 (p10 0.63 · p90 1) | $362,748 (p10 $171,525 · p90 $562,476) | 0.05 (p10 0.03 · p90 0.08) | $4,115,921 (p10 $3,769,569 · p90 $4,505,572) | 2 (p10 0 · p90 6.1) | 23175.5 (p10 19824.1 · p90 28393.1) | 3.91 (p10 3.69 · p90 4.12) | 0 | 1 |
| cheap-duds | $1,852,153 (p10 $1,519,622 · p90 $2,187,804) | $282,836 (p10 $231,955 · p90 $336,005) | 0 (p10 0 · p90 75) | 6.01 (p10 5.76 · p90 6.3) | 6.21 (p10 5.74 · p90 6.46) | 0 (p10 0 · p90 0) | $335,401 (p10 $228,333 · p90 $431,829) | 0.13 (p10 0.1 · p90 0.15) | $1,100,365 (p10 $1,010,793 · p90 $1,215,949) | 0 (p10 0 · p90 0) | 3522.5 (p10 2410.2 · p90 4808.7) | 2.47 (p10 2.39 · p90 2.54) | 0 | 0.26 |
| famous-star | $2,878,900 (p10 $2,582,541 · p90 $3,163,986) | $440,665 (p10 $394,663 · p90 $484,917) | 0 (p10 0 · p90 150) | 6.34 (p10 6.16 · p90 6.55) | 6.39 (p10 6.15 · p90 6.55) | 0 (p10 0 · p90 0) | $0 (p10 $0 · p90 $4,404) | 0 (p10 0 · p90 0) | $2,436,889 (p10 $2,356,465 · p90 $2,789,686) | 8 (p10 5 · p90 11) | 8981 (p10 6938.2 · p90 11100.7) | 3 (p10 3 · p90 3.48) | 0 | 0.49 |
| self-funder | $255,861 (p10 $208,771 · p90 $331,455) | $33,557 (p10 $26,276 · p90 $45,240) | 150 (p10 0 · p90 385) | 6.6 (p10 6.38 · p90 6.83) | 6.6 (p10 6.36 · p90 6.82) | 0 (p10 0 · p90 0.13) | $0 (p10 $0 · p90 $8,542) | 0 (p10 0 · p90 0) | $126,251 (p10 $89,575 · p90 $233,074) | 12.5 (p10 6 · p90 22.1) | 3802 (p10 2904.9 · p90 6206.2) | 2.35 (p10 2.28 · p90 2.47) | 0 | 0.88 |
| experimenter | $2,966,276 (p10 $2,730,976 · p90 $3,326,748) | $454,228 (p10 $418,698 · p90 $510,182) | 75 (p10 0 · p90 225) | 6.43 (p10 6.28 · p90 6.61) | 6.44 (p10 6.26 · p90 6.62) | 0 (p10 0 · p90 0) | $113,874 (p10 $43,751 · p90 $197,056) | 0.03 (p10 0.01 · p90 0.05) | $1,833,955 (p10 $1,710,163 · p90 $2,268,163) | 1 (p10 0 · p90 7) | 7066 (p10 5254.6 · p90 9671.5) | 3.06 (p10 2.86 · p90 3.44) | 0 | 0.76 |
| franchise-builder | $3,694,496 (p10 $3,230,593 · p90 $4,322,218) | $567,265 (p10 $495,256 · p90 $664,703) | 175 (p10 100 · p90 350) | 6.63 (p10 6.12 · p90 7.03) | 6.55 (p10 6.18 · p90 6.9) | 0 (p10 0 · p90 0.13) | $25,423 (p10 $0 · p90 $174,939) | 0 (p10 0 · p90 0.03) | $2,398,361 (p10 $2,186,766 · p90 $3,009,366) | 2 (p10 0 · p90 8) | 38292.5 (p10 26011.4 · p90 55148.3) | 3.28 (p10 3 · p90 3.63) | 0 | 1 |

## Ranking by median end cash

1. **balanced** — $4,793,655 cash, 1670 Prestige
2. **quality-first** — $4,328,847 cash, 2555 Prestige
3. **franchise-builder** — $3,694,496 cash, 175 Prestige
4. **experimenter** — $2,966,276 cash, 75 Prestige
5. **famous-star** — $2,878,900 cash, 0 Prestige
6. **cheap-duds** — $1,852,153 cash, 0 Prestige
7. **self-funder** — $255,861 cash, 150 Prestige

## Average review score by production index (mean across seeds)

- balanced: 5.6 → 5.8 → 6.3 → 7.1 → 7.4 → 7.6 → 7.6 → 7.8 → 7.9 → 8.0 → 8.0 → 8.1 → 8.1 → 8.1 → 8.2 → 8.1 → 8.3 → 8.2 → 8.2 → 8.3
- quality-first: 5.5 → 5.9 → 6.4 → 7.3 → 7.6 → 7.7 → 7.8 → 8.0 → 8.0 → 8.1 → 8.1 → 8.2 → 8.4 → 8.3 → 8.3 → 8.4 → 8.3 → 8.4 → 8.4 → 8.5
- cheap-duds: 5.5 → 5.5 → 5.8 → 5.9 → 5.9 → 5.9 → 6.0 → 6.0 → 6.2 → 6.2 → 6.2 → 6.2 → 6.3 → 6.3 → 6.3 → 6.4 → 6.3 → 6.5 → 6.4 → 6.5
- famous-star: 5.5 → 5.9 → 5.9 → 6.0 → 6.0 → 6.1 → 6.1 → 6.3 → 6.3 → 6.4 → 6.5 → 6.6 → 6.6 → 6.6 → 6.7 → 6.7 → 6.7 → 6.7 → 6.7 → 6.9
- self-funder: 5.5 → 5.8 → 5.9 → 6.1 → 6.1 → 6.3 → 6.5 → 6.5 → 6.6 → 6.7 → 6.7 → 6.9 → 7.0 → 6.9 → 7.0 → 7.0 → 7.1 → 7.1 → 7.1 → 7.2
- experimenter: 5.6 → 5.8 → 5.9 → 6.1 → 6.2 → 6.1 → 6.3 → 6.3 → 6.5 → 6.5 → 6.6 → 6.6 → 6.7 → 6.7 → 6.8 → 6.8 → 6.8 → 6.8 → 6.8 → 6.9
- franchise-builder: 5.6 → 5.9 → 6.2 → 6.5 → 6.5 → 6.6 → 6.7 → 6.8 → 6.8 → 6.7 → 6.8 → 6.7 → 6.7 → 6.6 → 6.7 → 6.7 → 6.9 → 6.8 → 6.8 → 6.8
