# Paired-seed comparison — staffGrowth.statGainPerWeek=0.18

> **Simulation assumptions, not design locks.** All numbers come from provisional config values. Nothing here is official balance.

- Ruleset: `v9.61-movie-kernel-0.1` · Config: `baseline+staffGrowth.statGainPerWeek=0.18` (hash `67bf1afd`)
- Seeds: 1–200
- Baseline: baseline (5355fe52)
- Candidate: baseline+staffGrowth.statGainPerWeek=0.18 (67bf1afd)
- Productions: 50
- Modelled: movies; distributor advances/royalties/trust; Stars (families, budgets, fallback, callbacks, relationships); marketing + studio buzz; scores + legs; IP fans; Prestige milestones; studio genre levels; trends; staff XP/hire/train; theme research + staff pitches
- **Not modelled:** limited series; TV series/seasons/renewals/hiatus/announcements; streaming service/subscribers; eras beyond a gentle quality bar; studio upgrades/format unlock gates; genre unlocks; late-game concurrency

Same seeds, same strategies; only the config differs. `shareImproved` = share of paired careers where the candidate value is higher.

| Strategy | Metric | Baseline median | Candidate median | Median paired Δ | Share higher |
|---|---|---:|---:|---:|---:|
| balanced | endCash | 14763799.5 | 14343777 | -451546 | 0.215 |
| balanced | prestige | 5680 | 5190 | -475 | 0.31 |
| balanced | meanAudience | 8.05 | 7.94 | -0.11 | 0.2 |
| balanced | meanCritic | 7.99 | 7.89 | -0.12 | 0.175 |
| balanced | shareLate8plus | 0.7 | 0.65 | -0.02 | 0.335 |
| balanced | share9plus | 0.08 | 0.06 | -0.02 | 0.215 |
| balanced | surplusKept | 942350.5 | 922618 | 11709.5 | 0.54 |
| balanced | negativeCashWeeks | 2 | 2 | 0 | 0.01 |
| balanced | maxIpFans | 79443 | 76302 | -4396 | 0.43 |
| balanced | meanTrustEnd | 4.27 | 4.28 | 0 | 0.495 |
| quality-first | endCash | 13606166.5 | 13145521 | -390440 | 0.085 |
| quality-first | prestige | 8512.5 | 7752.5 | -842.5 | 0.05 |
| quality-first | meanAudience | 8.27 | 8.12 | -0.14 | 0.02 |
| quality-first | meanCritic | 8.18 | 8.04 | -0.13 | 0.025 |
| quality-first | shareLate8plus | 0.85 | 0.8 | -0.05 | 0.22 |
| quality-first | share9plus | 0.14 | 0.1 | -0.04 | 0.095 |
| quality-first | surplusKept | 1441720 | 1415860 | 9015 | 0.515 |
| quality-first | negativeCashWeeks | 1 | 1 | 0 | 0.02 |
| quality-first | maxIpFans | 23622.5 | 23672 | -124 | 0.445 |
| quality-first | meanTrustEnd | 4.22 | 4.22 | -0.01 | 0.35 |
| cheap-duds | endCash | 5540258 | 4039238.5 | -1469942 | 0.005 |
| cheap-duds | prestige | 150 | 0 | -150 | 0.005 |
| cheap-duds | meanAudience | 6.29 | 5.76 | -0.51 | 0 |
| cheap-duds | meanCritic | 6.42 | 5.94 | -0.49 | 0 |
| cheap-duds | shareLate8plus | 0 | 0 | 0 | 0 |
| cheap-duds | share9plus | 0 | 0 | 0 | 0 |
| cheap-duds | surplusKept | 1088826 | 632495 | -448674 | 0 |
| cheap-duds | negativeCashWeeks | 0 | 0 | 0 | 0 |
| cheap-duds | maxIpFans | 4718 | 2854.5 | -1932.5 | 0.1 |
| cheap-duds | meanTrustEnd | 2.75 | 2.37 | -0.4 | 0.015 |
| famous-star | endCash | 10290243 | 7676036.5 | -2476764 | 0 |
| famous-star | prestige | 385 | 75 | -300 | 0 |
| famous-star | meanAudience | 6.68 | 6.23 | -0.45 | 0 |
| famous-star | meanCritic | 6.73 | 6.27 | -0.46 | 0 |
| famous-star | shareLate8plus | 0 | 0 | 0 | 0 |
| famous-star | share9plus | 0 | 0 | 0 | 0 |
| famous-star | surplusKept | 0 | 0 | 0 | 0 |
| famous-star | negativeCashWeeks | 8 | 8 | 0 | 0.095 |
| famous-star | maxIpFans | 12873 | 8370 | -4168.5 | 0.01 |
| famous-star | meanTrustEnd | 3.98 | 3.47 | -0.52 | 0.025 |
| self-funder | endCash | 257143.5 | 261664 | 3464.5 | 0.51 |
| self-funder | prestige | 2255 | 867.5 | -1260 | 0.06 |
| self-funder | meanAudience | 7.06 | 6.79 | -0.27 | 0.005 |
| self-funder | meanCritic | 7.04 | 6.76 | -0.28 | 0.005 |
| self-funder | shareLate8plus | 0.1 | 0.05 | -0.05 | 0.11 |
| self-funder | share9plus | 0 | 0 | 0 | 0 |
| self-funder | surplusKept | 0 | 0 | 0 | 0.275 |
| self-funder | negativeCashWeeks | 13 | 14 | 0 | 0.315 |
| self-funder | maxIpFans | 6066 | 5134 | -801.5 | 0.38 |
| self-funder | meanTrustEnd | 2.57 | 2.54 | -0.02 | 0.385 |
| experimenter | endCash | 11092120 | 8805458.5 | -2207623 | 0 |
| experimenter | prestige | 450 | 0 | -375 | 0 |
| experimenter | meanAudience | 6.77 | 6.34 | -0.43 | 0 |
| experimenter | meanCritic | 6.82 | 6.36 | -0.45 | 0 |
| experimenter | shareLate8plus | 0 | 0 | 0 | 0 |
| experimenter | share9plus | 0 | 0 | 0 | 0 |
| experimenter | surplusKept | 982833 | 635765 | -330524.5 | 0.03 |
| experimenter | negativeCashWeeks | 1 | 1 | 0 | 0.01 |
| experimenter | maxIpFans | 8843.5 | 4918 | -3914.5 | 0 |
| experimenter | meanTrustEnd | 3.91 | 2.87 | -0.9 | 0.005 |
| franchise-builder | endCash | 11092107 | 10853620 | -337771 | 0.38 |
| franchise-builder | prestige | 525 | 485 | -47.5 | 0.34 |
| franchise-builder | meanAudience | 6.72 | 6.73 | -0.02 | 0.455 |
| franchise-builder | meanCritic | 6.7 | 6.63 | -0.06 | 0.37 |
| franchise-builder | shareLate8plus | 0 | 0 | 0 | 0.33 |
| franchise-builder | share9plus | 0 | 0 | 0 | 0.005 |
| franchise-builder | surplusKept | 145594.5 | 151965 | 6434 | 0.535 |
| franchise-builder | negativeCashWeeks | 2 | 2 | 0 | 0.005 |
| franchise-builder | maxIpFans | 67594.5 | 65798 | -128 | 0.485 |
| franchise-builder | meanTrustEnd | 4.09 | 4.01 | -0.03 | 0.405 |

## Flags: baseline → candidate

| Flag | Baseline | Candidate |
|---|---|---|
| SURPLUS_FARMING_DOMINANT | ok | ok |
| EARLY_SOFTLOCK | FIRED | FIRED |
| PRESTIGE_TOO_FAST | ok | ok |
| PRESTIGE_TOO_SLOW | ok | ok |
| QUALITY_INFLATION | FIRED | FIRED |
| DEAD_STRATEGY | FIRED | FIRED |
| DOMINANT_STRATEGY | ok | ok |
| STAR_PRICE_NO_VALUE | ok | ok |
| FRANCHISE_AUTO_WIN | ok | ok |
| DISTRIBUTOR_TRUST_SPIRAL | ok | ok |
| STREAMING_PASSIVE_MONEY_PRINTER | ok | ok |
| HIGH_REVIEWS_UNEXPLAINED_LOW_SALES | ok | ok |
| UNSUPPORTED_RULE_ASSUMPTION | FIRED | FIRED |
