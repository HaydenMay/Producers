# Batch report — 7000 careers

> **Simulation assumptions, not design locks.** All numbers come from provisional config values. Nothing here is official balance.

- Ruleset: `v9.61-movie-kernel-0.1` · Config: `baseline` (hash `5355fe52`)
- Seeds: 1–1000 (1000 seeds)
- Strategies: balanced, quality-first, cheap-duds, famous-star, self-funder, experimenter, franchise-builder
- Productions per career: 20
- Runtime: 39105 ms (measured)
- Modelled: movies; distributor advances/royalties/trust; Stars (families, budgets, fallback, callbacks, relationships); marketing + studio buzz; scores + legs; IP fans; Prestige milestones; studio genre levels; trends; staff XP/hire/train; theme research + staff pitches
- **Not modelled:** limited series; TV series/seasons/renewals/hiatus/announcements; streaming service/subscribers; eras beyond a gentle quality bar; studio upgrades/format unlock gates; genre unlocks; late-game concurrency

## Invariant checks

All invariants held across every career (ledger audit, gross = sales only, causal scores, Star budgets, unique Prestige ids, runs terminate).

## Diagnostic flags

| Flag | Fired | Why | Seeds | Implicated |
|---|---|---|---|---|
| SURPLUS_FARMING_DOMINANT | no | cheap-duds median end cash 1855752 vs best decent policy 4709643 (fires at >= 0.95x) |  | distribution.roster[].generosity, production.movie.baseCost, marketing/Star value |
| EARLY_SOFTLOCK | **YES** | 8/7000 careers stuck (hit maxWeeks or >= 52 negative-cash weeks); by strategy: self-funder 8/1000 | 38, 164, 282, 417, 482, 712, 854, 985 | start.cash, wages, lifeline terms |
| PRESTIGE_TOO_FAST | no | 440/7000 careers earn > 400 Prestige/year | 8, 11, 14, 16, 17, 18, 21, 23, 27, 28 | prestige.milestones, prestige.repeatScope |
| PRESTIGE_TOO_SLOW | no | 1660/7000 careers with >= 10 releases have zero Prestige |  | prestige thresholds vs typical scores |
| QUALITY_INFLATION | no | 1584/7000 careers: late releases mostly 8+ or > 25% of releases 9+ | 1, 1, 2, 2, 3, 3, 4, 4, 5, 5 | staffGrowth.statGainPerWeek, stars.growthPerProject, studioGenre.qualityBonusPerLevel, production.eraBarPerYear |
| DEAD_STRATEGY | **YES** | self-funder: median end cash < 25% of the best (4709643) or negative |  | varies by strategy |
| DOMINANT_STRATEGY | no | no policy wins cash AND Prestige in >= 80% of paired seeds |  |  |
| STAR_PRICE_NO_VALUE | no | famous-star median cash/release 140187 vs cheap-duds 90788 (Fame + marketing spend does pay back) |  | stars.feePerFame, audience.fameAwareness, marketing campaigns |
| FRANCHISE_AUTO_WIN | no | franchise-builder median cash 3570270; fires if > 1.25x every other policy and Prestige >= all |  | audience.fanAwareness, repetitionFatigue.sequelPerRepeat |
| DISTRIBUTOR_TRUST_SPIRAL | no | 0/7000 careers end with mean distributor trust < 0.75 |  | distribution.trust* |
| STREAMING_PASSIVE_MONEY_PRINTER | no | NOT APPLICABLE: streaming is not modelled yet (Gate 3) |  |  |
| HIGH_REVIEWS_UNEXPLAINED_LOW_SALES | no | 1288 releases with avg >= 7.5 and gross in bottom 20%: 1286 explained by small reach, 2 by low awareness (little marketing/Fame/fans), 0 unexplained |  | audience opening/legs model |
| UNSUPPORTED_RULE_ASSUMPTION | **YES** | INFO: results depend on WORKING ASSUMPTIONS (see docs/assumptions-register.md): prestige repeatScope=perIP, trust formula, offer/heat formula, saturating awareness + geometric legs, genre XP on completion, staff-pitch rule, all numeric values. |  |  |

## Strategy summary (median, p10–p90)

| Strategy | endCash | cashPerYear | prestige | meanAudience | meanCritic | shareLate8plus | surplusKept | surplusShareOfIncome | royaltyCosts | negativeCashWeeks | maxIpFans | meanTrustEnd | ended negative | any Prestige |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| balanced | $4,709,643 (p10 $4,244,932 · p90 $5,170,798) | $725,669 (p10 $652,810 · p90 $800,352) | 1640 (p10 1209.5 · p90 2120) | 7.65 (p10 7.34 · p90 7.92) | 7.59 (p10 7.31 · p90 7.88) | 0.63 (p10 0.38 · p90 0.88) | $201,470 (p10 $90,231 · p90 $342,853) | 0.03 (p10 0.01 · p90 0.05) | $4,246,734 (p10 $3,759,160 · p90 $4,709,698) | 2 (p10 0 · p90 7) | 50940.5 (p10 32011 · p90 70200.6) | 4 (p10 3.74 · p90 4.22) | 0 | 1 |
| quality-first | $4,253,624 (p10 $3,838,947 · p90 $4,633,766) | $654,641 (p10 $591,179 · p90 $714,761) | 2520 (p10 2105 · p90 2941) | 7.81 (p10 7.54 · p90 8.06) | 7.73 (p10 7.48 · p90 7.98) | 0.75 (p10 0.5 · p90 0.88) | $339,485 (p10 $178,269 · p90 $511,680) | 0.05 (p10 0.03 · p90 0.07) | $4,153,224 (p10 $3,745,812 · p90 $4,522,823) | 2 (p10 0 · p90 7) | 22907 (p10 19102.9 · p90 27353.9) | 3.95 (p10 3.72 · p90 4.16) | 0 | 1 |
| cheap-duds | $1,855,752 (p10 $1,553,348 · p90 $2,146,330) | $283,837 (p10 $236,748 · p90 $328,683) | 0 (p10 0 · p90 75) | 6.01 (p10 5.72 · p90 6.26) | 6.16 (p10 5.85 · p90 6.41) | 0 (p10 0 · p90 0) | $328,947 (p10 $231,220 · p90 $422,664) | 0.13 (p10 0.1 · p90 0.15) | $1,102,717 (p10 $1,020,314 · p90 $1,185,917) | 0 (p10 0 · p90 0) | 3266.5 (p10 2410.6 · p90 4651.6) | 2.46 (p10 2.37 · p90 2.52) | 0 | 0.261 |
| famous-star | $2,843,743 (p10 $2,579,919 · p90 $3,136,074) | $435,244 (p10 $394,703 · p90 $480,585) | 0 (p10 0 · p90 150) | 6.32 (p10 6.1 · p90 6.52) | 6.36 (p10 6.16 · p90 6.56) | 0 (p10 0 · p90 0) | $0 (p10 $0 · p90 $6,468) | 0 (p10 0 · p90 0) | $2,420,736 (p10 $2,352,032 · p90 $2,797,891) | 7 (p10 5 · p90 11) | 8557.5 (p10 6599.7 · p90 11361.2) | 3 (p10 3 · p90 3.49) | 0 | 0.453 |
| self-funder | $249,816 (p10 $206,119 · p90 $348,208) | $32,759 (p10 $25,965 · p90 $48,056) | 150 (p10 0 · p90 375) | 6.59 (p10 6.33 · p90 6.81) | 6.57 (p10 6.35 · p90 6.79) | 0 (p10 0 · p90 0.13) | $0 (p10 $0 · p90 $4,210) | 0 (p10 0 · p90 0) | $130,290 (p10 $91,927 · p90 $276,539) | 14 (p10 7 · p90 25) | 3855.5 (p10 2823.4 · p90 6291.3) | 2.34 (p10 2.26 · p90 2.46) | 0 | 0.869 |
| experimenter | $2,976,658 (p10 $2,734,964 · p90 $3,282,856) | $456,360 (p10 $419,151 · p90 $503,477) | 75 (p10 0 · p90 225) | 6.42 (p10 6.22 · p90 6.61) | 6.44 (p10 6.24 · p90 6.64) | 0 (p10 0 · p90 0) | $110,092 (p10 $39,798 · p90 $197,869) | 0.03 (p10 0.01 · p90 0.05) | $1,861,353 (p10 $1,705,378 · p90 $2,224,966) | 1 (p10 0 · p90 7) | 7055 (p10 5222.9 · p90 9480.3) | 3.08 (p10 2.86 · p90 3.39) | 0 | 0.757 |
| franchise-builder | $3,570,270 (p10 $3,109,369 · p90 $4,095,506) | $548,177 (p10 $477,575 · p90 $629,846) | 175 (p10 100 · p90 350) | 6.6 (p10 6.19 · p90 6.96) | 6.56 (p10 6.17 · p90 6.92) | 0 (p10 0 · p90 0.13) | $24,227 (p10 $0 · p90 $153,220) | 0 (p10 0 · p90 0.03) | $2,355,838 (p10 $2,165,131 · p90 $2,893,157) | 2 (p10 0 · p90 7) | 37538.5 (p10 25430.9 · p90 52394.8) | 3.28 (p10 3 · p90 3.58) | 0 | 1 |

## Ranking by median end cash

1. **balanced** — $4,709,643 cash, 1640 Prestige
2. **quality-first** — $4,253,624 cash, 2520 Prestige
3. **franchise-builder** — $3,570,270 cash, 175 Prestige
4. **experimenter** — $2,976,658 cash, 75 Prestige
5. **famous-star** — $2,843,743 cash, 0 Prestige
6. **cheap-duds** — $1,855,752 cash, 0 Prestige
7. **self-funder** — $249,816 cash, 150 Prestige

## Average review score by production index (mean across seeds)

- balanced: 5.6 → 5.8 → 6.2 → 7.2 → 7.4 → 7.5 → 7.6 → 7.8 → 7.8 → 7.9 → 8.0 → 8.1 → 8.1 → 8.1 → 8.2 → 8.2 → 8.2 → 8.2 → 8.2 → 8.3
- quality-first: 5.6 → 5.9 → 6.3 → 7.3 → 7.6 → 7.7 → 7.8 → 7.9 → 8.0 → 8.1 → 8.1 → 8.2 → 8.3 → 8.3 → 8.3 → 8.3 → 8.4 → 8.4 → 8.4 → 8.4
- cheap-duds: 5.5 → 5.6 → 5.7 → 5.8 → 5.8 → 5.8 → 5.9 → 6.0 → 6.0 → 6.1 → 6.2 → 6.2 → 6.3 → 6.3 → 6.3 → 6.3 → 6.3 → 6.4 → 6.4 → 6.4
- famous-star: 5.5 → 5.8 → 5.9 → 6.0 → 6.0 → 6.1 → 6.2 → 6.3 → 6.3 → 6.4 → 6.5 → 6.5 → 6.6 → 6.6 → 6.6 → 6.6 → 6.7 → 6.7 → 6.7 → 6.8
- self-funder: 5.5 → 5.7 → 5.9 → 6.1 → 6.1 → 6.3 → 6.4 → 6.5 → 6.6 → 6.7 → 6.8 → 6.8 → 6.9 → 6.9 → 7.0 → 7.0 → 7.0 → 7.1 → 7.1 → 7.2
- experimenter: 5.6 → 5.8 → 6.0 → 6.1 → 6.1 → 6.2 → 6.2 → 6.3 → 6.4 → 6.5 → 6.6 → 6.6 → 6.7 → 6.7 → 6.7 → 6.8 → 6.8 → 6.8 → 6.8 → 6.9
- franchise-builder: 5.6 → 5.8 → 6.1 → 6.4 → 6.5 → 6.6 → 6.7 → 6.8 → 6.8 → 6.8 → 6.7 → 6.7 → 6.6 → 6.6 → 6.7 → 6.7 → 6.8 → 6.8 → 6.9 → 6.8
