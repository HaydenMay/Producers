# Batch report — 900 careers

> **Simulation assumptions, not design locks.** All numbers come from provisional config values. Nothing here is official balance.

- Ruleset: `v9.61-movie-kernel-0.1` · Config: `gate25-candidate` (hash `a2e9d917`)
- Seeds: 1–100 (100 seeds)
- Strategies: balanced, quality-first, cheap-duds, famous-star, self-funder, selective-self-funder, experimenter, franchise-builder, repeat-farmer
- Productions per career: 50
- Runtime: 23448 ms (measured)
- Modelled: movies; distributor advances/royalties/trust; Stars (families, budgets, fallback, callbacks, relationships); marketing + studio buzz; scores + legs; IP fans; Prestige milestones; studio genre levels; trends; staff XP/hire/train; studio staff-capacity cap + upgrade ladder (when configured); theme research + staff pitches
- **Not modelled:** limited series; TV series/seasons/renewals/hiatus/announcements; streaming service/subscribers; eras beyond a gentle quality bar; studio upgrades other than staff capacity; format unlock gates; genre unlocks; late-game concurrency

## Invariant checks

All invariants held across every career (ledger audit, gross = sales only, causal scores, Star budgets, unique Prestige ids, runs terminate).

## Diagnostic flags

| Flag | Fired | Why | Seeds | Implicated |
|---|---|---|---|---|
| SURPLUS_FARMING_DOMINANT | no | cheap-duds median end cash 7497765 vs best decent policy 12780959 (fires at >= 0.95x) |  | distribution.roster[].generosity, production.movie.baseCost, marketing/Star value |
| EARLY_SOFTLOCK | **YES** | 1/900 careers stuck (hit maxWeeks or >= 52 negative-cash weeks); by strategy: self-funder 1/100 | 38 | start.cash, wages, lifeline terms |
| PRESTIGE_TOO_FAST | **YES** | 416/900 careers earn > 400 Prestige/year | 1, 1, 1, 1, 1, 2, 2, 2, 2, 3 | prestige.milestones, prestige.repeatScope |
| PRESTIGE_TOO_SLOW | no | 12/900 careers with >= 10 releases have zero Prestige |  | prestige thresholds vs typical scores |
| QUALITY_INFLATION | **YES** | 402/900 careers: late releases mostly 8+ or > 25% of releases 9+ | 1, 1, 1, 1, 2, 2, 2, 2, 3, 3 | staffGrowth.statGainPerWeek, stars.growthPerProject, studioGenre.qualityBonusPerLevel, production.eraBarPerYear |
| DEAD_STRATEGY | **YES** | self-funder: median end cash < 25% of the best (13542522) or negative |  | varies by strategy |
| DOMINANT_STRATEGY | no | no policy wins cash AND Prestige in >= 80% of paired seeds |  |  |
| STAR_PRICE_NO_VALUE | no | famous-star median cash/release 232751 vs cheap-duds 149156 (Fame + marketing spend does pay back) |  | stars.feePerFame, audience.fameAwareness, marketing campaigns |
| FRANCHISE_AUTO_WIN | no | franchise-builder median cash 11177429; fires if > 1.25x every other policy and Prestige >= all |  | audience.fanAwareness, repetitionFatigue.sequelPerRepeat |
| DISTRIBUTOR_TRUST_SPIRAL | no | 0/900 careers end with mean distributor trust < 0.75 |  | distribution.trust* |
| STREAMING_PASSIVE_MONEY_PRINTER | no | NOT APPLICABLE: streaming is not modelled yet (Gate 3) |  |  |
| HIGH_REVIEWS_UNEXPLAINED_LOW_SALES | no | 1806 releases with avg >= 7.5 and gross in bottom 20%: 1806 explained by small reach, 0 by low awareness (little marketing/Fame/fans), 0 unexplained |  | audience opening/legs model |
| UNSUPPORTED_RULE_ASSUMPTION | **YES** | INFO: results depend on WORKING ASSUMPTIONS (see docs/assumptions-register.md): prestige repeatScope=explicit, staff capacity ladder=[4,6,8], trust formula, offer/heat formula, saturating awareness + diffusion legs, genre XP on completion, staff-pitch rule, all numeric values. |  |  |

## Strategy summary (median, p10–p90)

| Strategy | endCash | cashPerYear | prestige | meanAudience | meanCritic | shareLate8plus | surplusKept | surplusShareOfIncome | royaltyCosts | negativeCashWeeks | maxIpFans | meanTrustEnd | ended negative | any Prestige |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| balanced | $12,452,462 (p10 $11,747,536 · p90 $13,116,818) | $791,961 (p10 $746,984 · p90 $834,349) | 11060 (p10 9674 · p90 12747) | 8.41 (p10 8.22 · p90 8.62) | 8.34 (p10 8.09 · p90 8.67) | 0.8 (p10 0.65 · p90 1) | $963,383 (p10 $708,178 · p90 $1,310,921) | 0.04 (p10 0.03 · p90 0.06) | $13,809,162 (p10 $13,191,055 · p90 $14,594,553) | 2 (p10 0 · p90 5.1) | 98477 (p10 71412.2 · p90 147259.2) | 4.31 (p10 4.02 · p90 4.43) | 0 | 1 |
| quality-first | $12,780,959 (p10 $12,238,822 · p90 $13,643,929) | $812,920 (p10 $778,330 · p90 $867,980) | 10147.5 (p10 8974 · p90 10972.5) | 8.47 (p10 8.27 · p90 8.68) | 8.34 (p10 8.17 · p90 8.54) | 0.9 (p10 0.84 · p90 1) | $1,334,138 (p10 $1,124,339 · p90 $1,780,232) | 0.06 (p10 0.05 · p90 0.08) | $13,815,167 (p10 $12,798,965 · p90 $14,449,898) | 2 (p10 0 · p90 6.1) | 26015 (p10 23398.2 · p90 29541.4) | 4.36 (p10 4.05 · p90 4.45) | 0 | 1 |
| cheap-duds | $7,497,765 (p10 $6,392,668 · p90 $8,952,802) | $475,898 (p10 $406,781 · p90 $569,998) | 150 (p10 0 · p90 375) | 6.29 (p10 6.06 · p90 6.53) | 6.39 (p10 6.15 · p90 6.63) | 0 (p10 0 · p90 0.05) | $1,257,267 (p10 $950,984 · p90 $1,686,608) | 0.13 (p10 0.12 · p90 0.16) | $4,072,981 (p10 $3,420,344 · p90 $5,092,432) | 0 (p10 0 · p90 0) | 8375.5 (p10 5284.4 · p90 11937.8) | 3.08 (p10 2.62 · p90 3.49) | 0 | 0.89 |
| famous-star | $11,677,525 (p10 $10,408,653 · p90 $12,784,654) | $742,517 (p10 $661,559 · p90 $813,156) | 450 (p10 225 · p90 675) | 6.69 (p10 6.53 · p90 6.85) | 6.73 (p10 6.57 · p90 6.86) | 0 (p10 0 · p90 0.05) | $0 (p10 $0 · p90 $5,497) | 0 (p10 0 · p90 0) | $9,579,785 (p10 $8,133,868 · p90 $10,932,695) | 8 (p10 5 · p90 10) | 13282 (p10 11025.9 · p90 15658.2) | 3.99 (p10 3.87 · p90 4.41) | 0 | 0.99 |
| self-funder | $305,755 (p10 $273,301 · p90 $427,880) | $16,956 (p10 $14,885 · p90 $24,748) | 3242.5 (p10 2585 · p90 3863.5) | 7.21 (p10 7.03 · p90 7.42) | 7.16 (p10 6.98 · p90 7.33) | 0.15 (p10 0.05 · p90 0.25) | $0 (p10 $0 · p90 $0) | 0 (p10 0 · p90 0) | $79,080 (p10 $56,453 · p90 $212,614) | 11 (p10 6 · p90 21) | 3836 (p10 3303.6 · p90 4729.2) | 2.5 (p10 2.5 · p90 2.5) | 0 | 1 |
| selective-self-funder | $12,561,623 (p10 $11,930,832 · p90 $13,244,574) | $798,926 (p10 $758,679 · p90 $842,500) | 11272.5 (p10 9854 · p90 12907.5) | 8.45 (p10 8.19 · p90 8.69) | 8.41 (p10 8.13 · p90 8.63) | 0.8 (p10 0.7 · p90 1) | $929,179 (p10 $616,113 · p90 $1,208,654) | 0.04 (p10 0.03 · p90 0.05) | $13,861,717 (p10 $12,922,813 · p90 $14,432,114) | 1.5 (p10 0 · p90 7) | 98273.5 (p10 74631.7 · p90 148733.5) | 4.34 (p10 4.14 · p90 4.44) | 0 | 1 |
| experimenter | $13,542,522 (p10 $12,882,905 · p90 $14,199,692) | $861,511 (p10 $819,425 · p90 $903,440) | 9632.5 (p10 8633.5 · p90 11300) | 8.36 (p10 8.13 · p90 8.55) | 8.3 (p10 8.1 · p90 8.49) | 0.95 (p10 0.85 · p90 1) | $1,314,020 (p10 $957,216 · p90 $1,623,509) | 0.06 (p10 0.05 · p90 0.07) | $13,533,369 (p10 $12,615,488 · p90 $14,208,495) | 1 (p10 0 · p90 7) | 23715.5 (p10 21594.2 · p90 26659.5) | 4.36 (p10 4.09 · p90 4.44) | 0 | 1 |
| franchise-builder | $11,177,429 (p10 $9,594,745 · p90 $13,131,214) | $710,609 (p10 $609,628 · p90 $835,268) | 3980 (p10 3050 · p90 6995.5) | 7.11 (p10 6.58 · p90 7.53) | 6.98 (p10 6.46 · p90 7.43) | 0 (p10 0 · p90 0.4) | $396,182 (p10 $166,064 · p90 $941,941) | 0.02 (p10 0.01 · p90 0.04) | $13,502,717 (p10 $11,992,546 · p90 $14,347,036) | 2 (p10 0 · p90 8) | 146349.5 (p10 126527.8 · p90 191441.6) | 4.22 (p10 3.98 · p90 4.39) | 0 | 1 |
| repeat-farmer | $13,491,238 (p10 $9,589,805 · p90 $16,784,458) | $858,239 (p10 $609,313 · p90 $1,068,358) | 3250 (p10 2650 · p90 3550.5) | 6.85 (p10 6.44 · p90 7.45) | 6.84 (p10 6.44 · p90 7.41) | 0 (p10 0 · p90 0) | $3,887,374 (p10 $3,173,785 · p90 $4,898,935) | 0.18 (p10 0.16 · p90 0.19) | $11,899,321 (p10 $9,797,331 · p90 $13,713,043) | 2 (p10 0 · p90 8) | 233862 (p10 158778.1 · p90 313363) | 3.99 (p10 3.82 · p90 4.26) | 0 | 1 |

## Ranking by median end cash

1. **experimenter** — $13,542,522 cash, 9632.5 Prestige
2. **repeat-farmer** — $13,491,238 cash, 3250 Prestige
3. **quality-first** — $12,780,959 cash, 10147.5 Prestige
4. **selective-self-funder** — $12,561,623 cash, 11272.5 Prestige
5. **balanced** — $12,452,462 cash, 11060 Prestige
6. **famous-star** — $11,677,525 cash, 450 Prestige
7. **franchise-builder** — $11,177,429 cash, 3980 Prestige
8. **cheap-duds** — $7,497,765 cash, 150 Prestige
9. **self-funder** — $305,755 cash, 3242.5 Prestige

## Average review score by production index (mean across seeds)

- balanced: 5.6 → 5.8 → 6.4 → 7.2 → 7.4 → 7.6 → 7.8 → 8.1 → 8.2 → 8.3 → 8.4 → 8.6 → 8.7 → 8.6 → 8.6 → 8.7 → 8.7 → 8.7 → 8.7 → 8.6 → 8.7 → 8.8 → 8.8 → 8.7 → 8.6 → 8.8 → 8.7 → 8.8 → 8.6 → 8.7 → 8.7 → 8.6 → 8.8 → 8.6 → 8.7 → 8.6 → 8.7 → 8.7 → 8.7 → 8.7 → 8.7 → 8.6 → 8.5 → 8.8 → 8.7 → 8.7 → 8.6 → 8.6 → 8.8 → 8.7
- quality-first: 5.5 → 5.9 → 6.5 → 7.3 → 7.4 → 7.5 → 7.8 → 8.0 → 8.1 → 8.2 → 8.3 → 8.4 → 8.5 → 8.5 → 8.5 → 8.6 → 8.6 → 8.7 → 8.6 → 8.8 → 8.8 → 8.8 → 8.8 → 8.7 → 8.8 → 8.8 → 8.8 → 8.8 → 8.7 → 8.8 → 8.8 → 8.7 → 8.7 → 8.7 → 8.8 → 8.8 → 8.8 → 8.7 → 8.8 → 8.8 → 8.8 → 8.8 → 8.8 → 8.8 → 8.8 → 8.8 → 8.6 → 8.7 → 8.8 → 8.7
- cheap-duds: 5.5 → 5.5 → 5.8 → 5.9 → 5.9 → 5.9 → 6.0 → 6.0 → 6.2 → 6.2 → 6.2 → 6.2 → 6.3 → 6.3 → 6.2 → 6.4 → 6.4 → 6.4 → 6.3 → 6.5 → 6.5 → 6.5 → 6.5 → 6.5 → 6.5 → 6.5 → 6.4 → 6.6 → 6.5 → 6.5 → 6.5 → 6.5 → 6.5 → 6.6 → 6.6 → 6.5 → 6.4 → 6.5 → 6.5 → 6.5 → 6.6 → 6.6 → 6.5 → 6.4 → 6.5 → 6.6 → 6.4 → 6.5 → 6.4 → 6.6
- famous-star: 5.5 → 5.9 → 5.9 → 6.0 → 6.0 → 6.1 → 6.0 → 6.3 → 6.3 → 6.4 → 6.5 → 6.6 → 6.6 → 6.6 → 6.7 → 6.7 → 6.7 → 6.7 → 6.7 → 6.9 → 6.8 → 6.9 → 6.9 → 6.9 → 6.8 → 6.8 → 6.9 → 7.0 → 7.0 → 7.0 → 7.0 → 7.0 → 7.0 → 7.0 → 7.0 → 7.0 → 6.9 → 7.0 → 6.9 → 7.0 → 7.0 → 7.0 → 6.9 → 7.0 → 6.9 → 6.9 → 6.9 → 6.9 → 6.9 → 6.9
- self-funder: 5.5 → 5.8 → 5.9 → 6.1 → 6.2 → 6.4 → 6.5 → 6.6 → 6.8 → 6.7 → 6.8 → 7.1 → 7.1 → 7.0 → 7.1 → 7.3 → 7.3 → 7.3 → 7.3 → 7.4 → 7.6 → 7.4 → 7.5 → 7.6 → 7.6 → 7.6 → 7.6 → 7.7 → 7.6 → 7.6 → 7.7 → 7.7 → 7.6 → 7.5 → 7.6 → 7.5 → 7.5 → 7.5 → 7.5 → 7.5 → 7.5 → 7.4 → 7.5 → 7.4 → 7.4 → 7.3 → 7.4 → 7.4 → 7.3 → 7.3
- selective-self-funder: 5.7 → 5.9 → 6.4 → 7.3 → 7.3 → 7.6 → 7.8 → 8.0 → 8.1 → 8.3 → 8.5 → 8.5 → 8.6 → 8.6 → 8.6 → 8.7 → 8.7 → 8.7 → 8.7 → 8.8 → 8.7 → 8.7 → 8.7 → 8.8 → 8.7 → 8.7 → 8.8 → 8.8 → 8.9 → 8.8 → 8.7 → 8.7 → 8.8 → 8.8 → 8.7 → 8.9 → 8.6 → 8.8 → 8.8 → 8.6 → 8.9 → 8.7 → 8.7 → 8.7 → 8.8 → 8.7 → 8.7 → 8.7 → 8.8 → 8.7
- experimenter: 5.6 → 5.8 → 5.9 → 6.9 → 7.3 → 7.2 → 7.5 → 7.6 → 7.8 → 8.1 → 8.2 → 8.2 → 8.4 → 8.4 → 8.4 → 8.4 → 8.4 → 8.6 → 8.5 → 8.4 → 8.6 → 8.7 → 8.5 → 8.7 → 8.7 → 8.8 → 8.8 → 8.8 → 8.8 → 8.8 → 9.4 → 9.2 → 9.1 → 9.0 → 9.0 → 8.9 → 8.8 → 8.8 → 8.8 → 8.8 → 8.6 → 8.6 → 8.6 → 8.6 → 8.6 → 8.5 → 8.5 → 8.5 → 8.5 → 8.5
- franchise-builder: 5.6 → 5.9 → 6.3 → 7.4 → 7.4 → 7.4 → 7.5 → 7.7 → 7.7 → 7.7 → 7.7 → 7.6 → 7.4 → 7.3 → 7.3 → 7.2 → 7.2 → 7.1 → 7.1 → 7.1 → 7.0 → 7.0 → 6.9 → 6.9 → 6.9 → 6.8 → 6.8 → 6.8 → 6.9 → 6.8 → 7.0 → 6.9 → 7.0 → 6.9 → 7.1 → 7.0 → 7.1 → 7.0 → 7.0 → 7.0 → 7.1 → 7.0 → 7.1 → 6.9 → 7.0 → 6.9 → 7.0 → 6.9 → 7.0 → 6.9
- repeat-farmer: 5.6 → 5.8 → 6.5 → 7.2 → 7.4 → 7.5 → 7.7 → 7.8 → 7.8 → 7.8 → 7.7 → 7.6 → 7.4 → 7.2 → 7.0 → 6.8 → 6.7 → 6.6 → 6.6 → 6.6 → 6.6 → 6.7 → 6.7 → 6.7 → 6.7 → 6.7 → 6.7 → 6.7 → 6.7 → 6.7 → 6.7 → 6.7 → 6.7 → 6.7 → 6.7 → 6.7 → 6.7 → 6.7 → 6.7 → 6.7 → 6.7 → 6.7 → 6.7 → 6.8 → 6.8 → 6.7 → 6.7 → 6.7 → 6.7 → 6.8
