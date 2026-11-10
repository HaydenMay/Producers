# Paired-seed comparison — staffGrowth.hireCost=1000000000

> **Simulation assumptions, not design locks.** All numbers come from provisional config values. Nothing here is official balance.

- Ruleset: `v9.61-movie-kernel-0.1` · Config: `baseline+staffGrowth.hireCost=1000000000` (hash `b7b8edb6`)
- Seeds: 1–200
- Baseline: baseline (5355fe52)
- Candidate: baseline+staffGrowth.hireCost=1000000000 (b7b8edb6)
- Productions: 20
- Modelled: movies; distributor advances/royalties/trust; Stars (families, budgets, fallback, callbacks, relationships); marketing + studio buzz; scores + legs; IP fans; Prestige milestones; studio genre levels; trends; staff XP/hire/train; theme research + staff pitches
- **Not modelled:** limited series; TV series/seasons/renewals/hiatus/announcements; streaming service/subscribers; eras beyond a gentle quality bar; studio upgrades/format unlock gates; genre unlocks; late-game concurrency

Same seeds, same strategies; only the config differs. `shareImproved` = share of paired careers where the candidate value is higher.

| Strategy | Metric | Baseline median | Candidate median | Median paired Δ | Share higher |
|---|---|---:|---:|---:|---:|
| balanced | endCash | 4754124 | 4415836 | -351263 | 0.175 |
| balanced | prestige | 1670 | 760 | -887.5 | 0 |
| balanced | meanAudience | 7.65 | 7.1 | -0.56 | 0 |
| balanced | meanCritic | 7.61 | 7.06 | -0.56 | 0.005 |
| balanced | shareLate8plus | 0.63 | 0.25 | -0.38 | 0.025 |
| balanced | share9plus | 0 | 0 | 0 | 0.01 |
| balanced | surplusKept | 214967.5 | 140455 | -68615 | 0.23 |
| balanced | negativeCashWeeks | 2 | 2 | 0 | 0 |
| balanced | maxIpFans | 50496.5 | 33512 | -16742.5 | 0.18 |
| balanced | meanTrustEnd | 4 | 3.74 | -0.27 | 0.16 |
| quality-first | endCash | 4305253 | 3942256 | -318538.5 | 0.16 |
| quality-first | prestige | 2525 | 950 | -1590 | 0 |
| quality-first | meanAudience | 7.8 | 7.04 | -0.76 | 0 |
| quality-first | meanCritic | 7.74 | 7.03 | -0.75 | 0 |
| quality-first | shareLate8plus | 0.75 | 0.25 | -0.56 | 0.005 |
| quality-first | share9plus | 0.05 | 0 | -0.05 | 0 |
| quality-first | surplusKept | 350647.5 | 229349.5 | -115624 | 0.145 |
| quality-first | negativeCashWeeks | 1 | 1 | 0 | 0 |
| quality-first | maxIpFans | 22558.5 | 15548 | -7599 | 0.03 |
| quality-first | meanTrustEnd | 3.95 | 3.69 | -0.27 | 0.155 |

## Flags: baseline → candidate

| Flag | Baseline | Candidate |
|---|---|---|
| EARLY_SOFTLOCK | ok | ok |
| PRESTIGE_TOO_FAST | ok | ok |
| PRESTIGE_TOO_SLOW | ok | ok |
| QUALITY_INFLATION | FIRED | ok |
| DEAD_STRATEGY | ok | ok |
| DOMINANT_STRATEGY | ok | ok |
| DISTRIBUTOR_TRUST_SPIRAL | ok | ok |
| STREAMING_PASSIVE_MONEY_PRINTER | ok | ok |
| HIGH_REVIEWS_UNEXPLAINED_LOW_SALES | ok | ok |
| UNSUPPORTED_RULE_ASSUMPTION | FIRED | FIRED |
