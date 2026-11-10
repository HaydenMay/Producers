# Batch report — 700 careers

> **Simulation assumptions, not design locks.** All numbers come from provisional config values. Nothing here is official balance.

- Ruleset: `v9.61-movie-kernel-0.1` · Config: `baseline` (hash `494723cc`)
- Seeds: 1–100 (100 seeds)
- Strategies: balanced, quality-first, cheap-duds, famous-star, self-funder, experimenter, franchise-builder
- Productions per career: 50
- Runtime: 15508 ms (measured)
- Modelled: movies; distributor advances/royalties/trust; Stars (families, budgets, fallback, callbacks, relationships); marketing + studio buzz; scores + legs; IP fans; Prestige milestones; studio genre levels; trends; staff XP/hire/train; studio staff-capacity cap + upgrade ladder (when configured); theme research + staff pitches
- **Not modelled:** limited series; TV series/seasons/renewals/hiatus/announcements; streaming service/subscribers; eras beyond a gentle quality bar; studio upgrades other than staff capacity; format unlock gates; genre unlocks; late-game concurrency

## Invariant checks

All invariants held across every career (ledger audit, gross = sales only, causal scores, Star budgets, unique Prestige ids, runs terminate).

## Diagnostic flags

| Flag | Fired | Why | Seeds | Implicated |
|---|---|---|---|---|
| SURPLUS_FARMING_DOMINANT | no | cheap-duds median end cash 5508334 vs best decent policy 14836151 (fires at >= 0.95x) |  | distribution.roster[].generosity, production.movie.baseCost, marketing/Star value |
| EARLY_SOFTLOCK | **YES** | 1/700 careers stuck (hit maxWeeks or >= 52 negative-cash weeks); by strategy: self-funder 1/100 | 38 | start.cash, wages, lifeline terms |
| PRESTIGE_TOO_FAST | no | 111/700 careers earn > 400 Prestige/year | 1, 2, 3, 4, 5, 6, 7, 8, 8, 9 | prestige.milestones, prestige.repeatScope |
| PRESTIGE_TOO_SLOW | no | 20/700 careers with >= 10 releases have zero Prestige |  | prestige thresholds vs typical scores |
| QUALITY_INFLATION | **YES** | 193/700 careers: late releases mostly 8+ or > 25% of releases 9+ | 1, 1, 2, 2, 3, 3, 4, 4, 5, 5 | staffGrowth.statGainPerWeek, stars.growthPerProject, studioGenre.qualityBonusPerLevel, production.eraBarPerYear |
| DEAD_STRATEGY | **YES** | self-funder: median end cash < 25% of the best (14836151) or negative |  | varies by strategy |
| DOMINANT_STRATEGY | no | no policy wins cash AND Prestige in >= 80% of paired seeds |  |  |
| STAR_PRICE_NO_VALUE | no | famous-star median cash/release 207704 vs cheap-duds 109367 (Fame + marketing spend does pay back) |  | stars.feePerFame, audience.fameAwareness, marketing campaigns |
| FRANCHISE_AUTO_WIN | no | franchise-builder median cash 11174501; fires if > 1.25x every other policy and Prestige >= all |  | audience.fanAwareness, repetitionFatigue.sequelPerRepeat |
| DISTRIBUTOR_TRUST_SPIRAL | no | 0/700 careers end with mean distributor trust < 0.75 |  | distribution.trust* |
| STREAMING_PASSIVE_MONEY_PRINTER | no | NOT APPLICABLE: streaming is not modelled yet (Gate 3) |  |  |
| HIGH_REVIEWS_UNEXPLAINED_LOW_SALES | no | 1221 releases with avg >= 7.5 and gross in bottom 20%: 1212 explained by small reach, 9 by low awareness (little marketing/Fame/fans), 0 unexplained |  | audience opening/legs model |
| UNSUPPORTED_RULE_ASSUMPTION | **YES** | INFO: results depend on WORKING ASSUMPTIONS (see docs/assumptions-register.md): prestige repeatScope=perIP, staff capacity ladder=[999], trust formula, offer/heat formula, saturating awareness + geometric legs, genre XP on completion, staff-pitch rule, all numeric values. |  |  |

## Strategy summary (median, p10–p90)

| Strategy | endCash | cashPerYear | prestige | meanAudience | meanCritic | shareLate8plus | surplusKept | surplusShareOfIncome | royaltyCosts | negativeCashWeeks | maxIpFans | meanTrustEnd | ended negative | any Prestige |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| balanced | $14,836,151 (p10 $14,126,289 · p90 $15,579,658) | $946,530 (p10 $898,758 · p90 $992,224) | 5662.5 (p10 4699.5 · p90 6268.5) | 8.06 (p10 7.88 · p90 8.29) | 7.99 (p10 7.75 · p90 8.25) | 0.7 (p10 0.55 · p90 0.85) | $995,053 (p10 $695,296 · p90 $1,350,324) | 0.05 (p10 0.03 · p90 0.07) | $12,837,716 (p10 $12,018,919 · p90 $13,491,364) | 2 (p10 0 · p90 5.1) | 82654 (p10 60645 · p90 130170) | 4.25 (p10 3.99 · p90 4.42) | 0 | 1 |
| quality-first | $13,606,685 (p10 $12,854,237 · p90 $14,247,163) | $865,808 (p10 $817,689 · p90 $906,469) | 8550 (p10 7845.5 · p90 9364.5) | 8.27 (p10 8.1 · p90 8.49) | 8.18 (p10 7.98 · p90 8.3) | 0.85 (p10 0.7 · p90 0.91) | $1,468,547 (p10 $1,133,925 · p90 $1,806,081) | 0.07 (p10 0.06 · p90 0.09) | $12,296,080 (p10 $11,484,409 · p90 $12,840,615) | 2 (p10 0 · p90 6.1) | 23394 (p10 20486.5 · p90 28052.2) | 4.23 (p10 3.99 · p90 4.41) | 0 | 1 |
| cheap-duds | $5,508,334 (p10 $4,652,041 · p90 $6,415,424) | $349,329 (p10 $294,918 · p90 $406,876) | 150 (p10 0 · p90 375) | 6.28 (p10 6.04 · p90 6.55) | 6.42 (p10 6.12 · p90 6.63) | 0 (p10 0 · p90 0) | $1,060,377 (p10 $793,422 · p90 $1,504,095) | 0.14 (p10 0.12 · p90 0.18) | $3,233,553 (p10 $2,818,822 · p90 $3,950,690) | 0 (p10 0 · p90 0) | 4675.5 (p10 3271.4 · p90 7451.3) | 2.73 (p10 2.49 · p90 3.01) | 0 | 0.84 |
| famous-star | $10,425,192 (p10 $9,086,395 · p90 $11,254,046) | $662,613 (p10 $577,194 · p90 $715,497) | 450 (p10 225 · p90 675) | 6.69 (p10 6.53 · p90 6.85) | 6.73 (p10 6.57 · p90 6.86) | 0 (p10 0 · p90 0.05) | $0 (p10 $0 · p90 $5,497) | 0 (p10 0 · p90 0) | $8,940,047 (p10 $7,638,921 · p90 $10,110,591) | 8 (p10 5 · p90 11) | 12591 (p10 10420.8 · p90 15374.9) | 3.98 (p10 3.86 · p90 4.4) | 0 | 0.99 |
| self-funder | $255,424 (p10 $216,427 · p90 $419,607) | $13,753 (p10 $11,279 · p90 $24,220) | 2177.5 (p10 1390.5 · p90 3001) | 7.06 (p10 6.87 · p90 7.27) | 7.04 (p10 6.86 · p90 7.2) | 0.1 (p10 0 · p90 0.2) | $0 (p10 $0 · p90 $13,768) | 0 (p10 0 · p90 0) | $357,901 (p10 $206,259 · p90 $539,690) | 12.5 (p10 6 · p90 22.1) | 5922.5 (p10 3655.3 · p90 9815.7) | 2.57 (p10 2.5 · p90 2.65) | 0 | 1 |
| experimenter | $11,063,210 (p10 $10,095,153 · p90 $12,091,275) | $704,058 (p10 $641,555 · p90 $768,916) | 412.5 (p10 150 · p90 750) | 6.78 (p10 6.63 · p90 6.93) | 6.8 (p10 6.65 · p90 6.96) | 0 (p10 0 · p90 0) | $990,773 (p10 $579,505 · p90 $1,386,006) | 0.07 (p10 0.04 · p90 0.1) | $6,721,537 (p10 $5,620,441 · p90 $7,861,885) | 1 (p10 0 · p90 7) | 8870.5 (p10 7316 · p90 10764.6) | 3.88 (p10 3.49 · p90 4.17) | 0 | 0.97 |
| franchise-builder | $11,174,501 (p10 $10,135,984 · p90 $12,515,678) | $710,422 (p10 $644,161 · p90 $795,994) | 537.5 (p10 400 · p90 686) | 6.75 (p10 6.51 · p90 7.06) | 6.64 (p10 6.43 · p90 6.9) | 0 (p10 0 · p90 0.1) | $161,427 (p10 $13,427 · p90 $373,179) | 0.01 (p10 0 · p90 0.02) | $8,677,537 (p10 $7,625,177 · p90 $9,954,764) | 2 (p10 0 · p90 8) | 65110.5 (p10 44822.8 · p90 86663.1) | 4.06 (p10 3.74 · p90 4.32) | 0 | 1 |

## Ranking by median end cash

1. **balanced** — $14,836,151 cash, 5662.5 Prestige
2. **quality-first** — $13,606,685 cash, 8550 Prestige
3. **franchise-builder** — $11,174,501 cash, 537.5 Prestige
4. **experimenter** — $11,063,210 cash, 412.5 Prestige
5. **famous-star** — $10,425,192 cash, 450 Prestige
6. **cheap-duds** — $5,508,334 cash, 150 Prestige
7. **self-funder** — $255,424 cash, 2177.5 Prestige

## Average review score by production index (mean across seeds)

- balanced: 5.6 → 5.8 → 6.3 → 7.1 → 7.4 → 7.6 → 7.6 → 7.8 → 7.9 → 8.0 → 8.0 → 8.1 → 8.1 → 8.1 → 8.2 → 8.1 → 8.3 → 8.2 → 8.2 → 8.3 → 8.3 → 8.3 → 8.3 → 8.3 → 8.3 → 8.3 → 8.4 → 8.3 → 8.3 → 8.3 → 8.4 → 8.3 → 8.5 → 8.2 → 8.3 → 8.3 → 8.3 → 8.3 → 8.3 → 8.3 → 8.2 → 8.3 → 8.3 → 8.4 → 8.2 → 8.3 → 8.3 → 8.2 → 8.2 → 8.3
- quality-first: 5.5 → 5.9 → 6.4 → 7.3 → 7.6 → 7.7 → 7.8 → 8.0 → 8.0 → 8.1 → 8.1 → 8.2 → 8.4 → 8.3 → 8.3 → 8.4 → 8.3 → 8.4 → 8.4 → 8.5 → 8.5 → 8.4 → 8.4 → 8.7 → 8.5 → 8.5 → 8.6 → 8.4 → 8.4 → 8.5 → 8.5 → 8.5 → 8.6 → 8.5 → 8.5 → 8.5 → 8.6 → 8.6 → 8.5 → 8.4 → 8.4 → 8.6 → 8.5 → 8.5 → 8.5 → 8.5 → 8.5 → 8.6 → 8.5 → 8.3
- cheap-duds: 5.5 → 5.5 → 5.8 → 5.9 → 5.9 → 5.9 → 6.0 → 6.0 → 6.2 → 6.2 → 6.2 → 6.2 → 6.3 → 6.3 → 6.3 → 6.4 → 6.3 → 6.5 → 6.4 → 6.5 → 6.5 → 6.6 → 6.5 → 6.6 → 6.5 → 6.5 → 6.5 → 6.7 → 6.6 → 6.6 → 6.6 → 6.4 → 6.5 → 6.6 → 6.6 → 6.5 → 6.5 → 6.5 → 6.5 → 6.5 → 6.5 → 6.6 → 6.5 → 6.5 → 6.4 → 6.5 → 6.4 → 6.5 → 6.5 → 6.5
- famous-star: 5.5 → 5.9 → 5.9 → 6.0 → 6.0 → 6.1 → 6.1 → 6.3 → 6.3 → 6.4 → 6.5 → 6.6 → 6.6 → 6.6 → 6.7 → 6.7 → 6.7 → 6.7 → 6.7 → 6.9 → 6.8 → 6.9 → 6.9 → 6.9 → 6.8 → 6.8 → 6.9 → 7.0 → 7.0 → 7.0 → 7.0 → 7.0 → 7.0 → 7.0 → 7.0 → 7.0 → 6.9 → 7.0 → 6.9 → 7.0 → 7.0 → 7.0 → 6.9 → 7.0 → 6.9 → 6.9 → 6.9 → 6.9 → 6.9 → 6.9
- self-funder: 5.5 → 5.8 → 5.9 → 6.1 → 6.1 → 6.3 → 6.5 → 6.5 → 6.6 → 6.7 → 6.7 → 6.9 → 7.0 → 6.9 → 7.0 → 7.0 → 7.1 → 7.1 → 7.1 → 7.2 → 7.2 → 7.2 → 7.2 → 7.3 → 7.3 → 7.3 → 7.3 → 7.4 → 7.4 → 7.3 → 7.4 → 7.4 → 7.4 → 7.4 → 7.4 → 7.4 → 7.4 → 7.5 → 7.4 → 7.5 → 7.4 → 7.4 → 7.4 → 7.4 → 7.4 → 7.4 → 7.4 → 7.3 → 7.3 → 7.2
- experimenter: 5.6 → 5.8 → 5.9 → 6.1 → 6.2 → 6.1 → 6.3 → 6.3 → 6.5 → 6.5 → 6.6 → 6.6 → 6.7 → 6.7 → 6.8 → 6.8 → 6.8 → 6.8 → 6.8 → 6.9 → 7.0 → 6.9 → 7.0 → 7.0 → 6.9 → 6.9 → 7.0 → 7.1 → 7.1 → 7.1 → 7.5 → 7.4 → 7.3 → 7.3 → 7.2 → 7.2 → 7.1 → 7.1 → 7.1 → 7.0 → 7.0 → 7.0 → 6.9 → 6.9 → 7.0 → 6.9 → 6.9 → 6.8 → 6.8 → 6.8
- franchise-builder: 5.6 → 5.9 → 6.2 → 6.5 → 6.5 → 6.6 → 6.7 → 6.8 → 6.8 → 6.7 → 6.8 → 6.7 → 6.7 → 6.6 → 6.7 → 6.7 → 6.9 → 6.8 → 6.8 → 6.8 → 6.8 → 6.7 → 6.6 → 6.6 → 6.6 → 6.7 → 6.7 → 7.0 → 6.9 → 7.0 → 7.0 → 7.0 → 6.9 → 6.9 → 6.8 → 6.8 → 6.7 → 6.8 → 6.7 → 6.7 → 6.8 → 6.7 → 6.8 → 6.7 → 6.7 → 6.8 → 6.7 → 6.8 → 6.8 → 6.9
