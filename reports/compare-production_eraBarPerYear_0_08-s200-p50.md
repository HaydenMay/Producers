# Paired-seed comparison — production.eraBarPerYear=0.08

> **Simulation assumptions, not design locks.** All numbers come from provisional config values. Nothing here is official balance.

- Ruleset: `v9.61-movie-kernel-0.1` · Config: `baseline+production.eraBarPerYear=0.08` (hash `e81faf3a`)
- Seeds: 1–200
- Baseline: baseline (5355fe52)
- Candidate: baseline+production.eraBarPerYear=0.08 (e81faf3a)
- Productions: 50
- Modelled: movies; distributor advances/royalties/trust; Stars (families, budgets, fallback, callbacks, relationships); marketing + studio buzz; scores + legs; IP fans; Prestige milestones; studio genre levels; trends; staff XP/hire/train; theme research + staff pitches
- **Not modelled:** limited series; TV series/seasons/renewals/hiatus/announcements; streaming service/subscribers; eras beyond a gentle quality bar; studio upgrades/format unlock gates; genre unlocks; late-game concurrency

Same seeds, same strategies; only the config differs. `shareImproved` = share of paired careers where the candidate value is higher.

| Strategy | Metric | Baseline median | Candidate median | Median paired Δ | Share higher |
|---|---|---:|---:|---:|---:|
| balanced | endCash | 14763799.5 | 14289105.5 | -495504 | 0.125 |
| balanced | prestige | 5680 | 4825 | -845 | 0.12 |
| balanced | meanAudience | 8.05 | 7.86 | -0.2 | 0.055 |
| balanced | meanCritic | 7.99 | 7.82 | -0.18 | 0.05 |
| balanced | shareLate8plus | 0.7 | 0.6 | -0.1 | 0.165 |
| balanced | share9plus | 0.08 | 0.04 | -0.04 | 0.035 |
| balanced | surplusKept | 942350.5 | 948567 | 14492.5 | 0.535 |
| balanced | negativeCashWeeks | 2 | 2 | 0 | 0.005 |
| balanced | maxIpFans | 79443 | 71480 | -9131.5 | 0.295 |
| balanced | meanTrustEnd | 4.27 | 4.28 | -0.01 | 0.415 |
| quality-first | endCash | 13606166.5 | 13094388.5 | -473184.5 | 0.04 |
| quality-first | prestige | 8512.5 | 7342.5 | -1130 | 0.015 |
| quality-first | meanAudience | 8.27 | 8.08 | -0.18 | 0.005 |
| quality-first | meanCritic | 8.18 | 8.01 | -0.16 | 0.005 |
| quality-first | shareLate8plus | 0.85 | 0.75 | -0.1 | 0.085 |
| quality-first | share9plus | 0.14 | 0.08 | -0.06 | 0.015 |
| quality-first | surplusKept | 1441720 | 1447988.5 | 22098 | 0.735 |
| quality-first | negativeCashWeeks | 1 | 1 | 0 | 0.02 |
| quality-first | maxIpFans | 23622.5 | 23258.5 | -699 | 0.2 |
| quality-first | meanTrustEnd | 4.22 | 4.19 | -0.02 | 0.205 |
| cheap-duds | endCash | 5540258 | 4454561 | -997205 | 0.01 |
| cheap-duds | prestige | 150 | 0 | -150 | 0.03 |
| cheap-duds | meanAudience | 6.29 | 5.97 | -0.32 | 0 |
| cheap-duds | meanCritic | 6.42 | 6.12 | -0.31 | 0.005 |
| cheap-duds | shareLate8plus | 0 | 0 | 0 | 0 |
| cheap-duds | share9plus | 0 | 0 | 0 | 0 |
| cheap-duds | surplusKept | 1088826 | 761511.5 | -303619 | 0.005 |
| cheap-duds | negativeCashWeeks | 0 | 0 | 0 | 0 |
| cheap-duds | maxIpFans | 4718 | 3494 | -1147.5 | 0.18 |
| cheap-duds | meanTrustEnd | 2.75 | 2.45 | -0.29 | 0.045 |
| famous-star | endCash | 10290243 | 8189069 | -1787381 | 0 |
| famous-star | prestige | 385 | 75 | -300 | 0 |
| famous-star | meanAudience | 6.68 | 6.35 | -0.33 | 0 |
| famous-star | meanCritic | 6.73 | 6.4 | -0.32 | 0 |
| famous-star | shareLate8plus | 0 | 0 | 0 | 0 |
| famous-star | share9plus | 0 | 0 | 0 | 0 |
| famous-star | surplusKept | 0 | 0 | 0 | 0 |
| famous-star | negativeCashWeeks | 8 | 8 | 0 | 0.075 |
| famous-star | maxIpFans | 12873 | 9406.5 | -3329 | 0.035 |
| famous-star | meanTrustEnd | 3.98 | 3.48 | -0.48 | 0.04 |
| self-funder | endCash | 257143.5 | 266450 | -5606.5 | 0.465 |
| self-funder | prestige | 2255 | 530 | -1730 | 0 |
| self-funder | meanAudience | 7.06 | 6.74 | -0.32 | 0 |
| self-funder | meanCritic | 7.04 | 6.73 | -0.3 | 0 |
| self-funder | shareLate8plus | 0.1 | 0 | -0.1 | 0.03 |
| self-funder | share9plus | 0 | 0 | 0 | 0 |
| self-funder | surplusKept | 0 | 0 | 0 | 0.315 |
| self-funder | negativeCashWeeks | 13 | 14 | 0 | 0.24 |
| self-funder | maxIpFans | 6066 | 5333.5 | -974 | 0.38 |
| self-funder | meanTrustEnd | 2.57 | 2.54 | 0 | 0.395 |
| experimenter | endCash | 11092120 | 9671049.5 | -1422876 | 0 |
| experimenter | prestige | 450 | 150 | -300 | 0 |
| experimenter | meanAudience | 6.77 | 6.43 | -0.33 | 0 |
| experimenter | meanCritic | 6.82 | 6.5 | -0.31 | 0 |
| experimenter | shareLate8plus | 0 | 0 | 0 | 0 |
| experimenter | share9plus | 0 | 0 | 0 | 0 |
| experimenter | surplusKept | 982833 | 747100 | -212630 | 0.1 |
| experimenter | negativeCashWeeks | 1 | 1 | 0 | 0.005 |
| experimenter | maxIpFans | 8843.5 | 6642 | -2330.5 | 0.005 |
| experimenter | meanTrustEnd | 3.91 | 3.35 | -0.51 | 0.015 |
| franchise-builder | endCash | 11092107 | 10427520 | -777260.5 | 0.24 |
| franchise-builder | prestige | 525 | 325 | -225 | 0.085 |
| franchise-builder | meanAudience | 6.72 | 6.62 | -0.13 | 0.295 |
| franchise-builder | meanCritic | 6.7 | 6.58 | -0.08 | 0.315 |
| franchise-builder | shareLate8plus | 0 | 0 | 0 | 0.09 |
| franchise-builder | share9plus | 0 | 0 | 0 | 0 |
| franchise-builder | surplusKept | 145594.5 | 169362 | 12563.5 | 0.56 |
| franchise-builder | negativeCashWeeks | 2 | 2 | 0 | 0.005 |
| franchise-builder | maxIpFans | 67594.5 | 50629 | -15554.5 | 0.21 |
| franchise-builder | meanTrustEnd | 4.09 | 3.91 | -0.18 | 0.21 |

## Flags: baseline → candidate

| Flag | Baseline | Candidate |
|---|---|---|
| SURPLUS_FARMING_DOMINANT | ok | ok |
| EARLY_SOFTLOCK | FIRED | FIRED |
| PRESTIGE_TOO_FAST | ok | ok |
| PRESTIGE_TOO_SLOW | ok | ok |
| QUALITY_INFLATION | FIRED | ok |
| DEAD_STRATEGY | FIRED | FIRED |
| DOMINANT_STRATEGY | ok | ok |
| STAR_PRICE_NO_VALUE | ok | ok |
| FRANCHISE_AUTO_WIN | ok | ok |
| DISTRIBUTOR_TRUST_SPIRAL | ok | ok |
| STREAMING_PASSIVE_MONEY_PRINTER | ok | ok |
| HIGH_REVIEWS_UNEXPLAINED_LOW_SALES | ok | ok |
| UNSUPPORTED_RULE_ASSUMPTION | FIRED | FIRED |
