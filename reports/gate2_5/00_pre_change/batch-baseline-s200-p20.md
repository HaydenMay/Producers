# Batch report — 1400 careers

> **Simulation assumptions, not design locks.** All numbers come from provisional config values. Nothing here is official balance.

- Ruleset: `v9.61-movie-kernel-0.1` · Config: `baseline` (hash `5355fe52`)
- Seeds: 1–200 (200 seeds)
- Strategies: balanced, quality-first, cheap-duds, famous-star, self-funder, experimenter, franchise-builder
- Productions per career: 20
- Runtime: 8141 ms (measured)
- Modelled: movies; distributor advances/royalties/trust; Stars (families, budgets, fallback, callbacks, relationships); marketing + studio buzz; scores + legs; IP fans; Prestige milestones; studio genre levels; trends; staff XP/hire/train; theme research + staff pitches
- **Not modelled:** limited series; TV series/seasons/renewals/hiatus/announcements; streaming service/subscribers; eras beyond a gentle quality bar; studio upgrades/format unlock gates; genre unlocks; late-game concurrency

## Invariant checks

All invariants held across every career (ledger audit, gross = sales only, causal scores, Star budgets, unique Prestige ids, runs terminate).

## Diagnostic flags

| Flag | Fired | Why | Seeds | Implicated |
|---|---|---|---|---|
| SURPLUS_FARMING_DOMINANT | no | cheap-duds median end cash 1901143 vs best decent policy 4754124 (fires at >= 0.95x) |  | distribution.roster[].generosity, production.movie.baseCost, marketing/Star value |
| EARLY_SOFTLOCK | **YES** | 2/1400 careers stuck (hit maxWeeks or >= 52 negative-cash weeks); by strategy: self-funder 2/200 | 38, 164 | start.cash, wages, lifeline terms |
| PRESTIGE_TOO_FAST | no | 88/1400 careers earn > 400 Prestige/year | 8, 11, 14, 16, 17, 18, 21, 23, 27, 28 | prestige.milestones, prestige.repeatScope |
| PRESTIGE_TOO_SLOW | no | 333/1400 careers with >= 10 releases have zero Prestige |  | prestige thresholds vs typical scores |
| QUALITY_INFLATION | no | 329/1400 careers: late releases mostly 8+ or > 25% of releases 9+ | 1, 1, 2, 2, 3, 3, 4, 4, 5, 5 | staffGrowth.statGainPerWeek, stars.growthPerProject, studioGenre.qualityBonusPerLevel, production.eraBarPerYear |
| DEAD_STRATEGY | **YES** | self-funder: median end cash < 25% of the best (4754124) or negative |  | varies by strategy |
| DOMINANT_STRATEGY | no | no policy wins cash AND Prestige in >= 80% of paired seeds |  |  |
| STAR_PRICE_NO_VALUE | no | famous-star median cash/release 140286 vs cheap-duds 93058 (Fame + marketing spend does pay back) |  | stars.feePerFame, audience.fameAwareness, marketing campaigns |
| FRANCHISE_AUTO_WIN | no | franchise-builder median cash 3602986; fires if > 1.25x every other policy and Prestige >= all |  | audience.fanAwareness, repetitionFatigue.sequelPerRepeat |
| DISTRIBUTOR_TRUST_SPIRAL | no | 0/1400 careers end with mean distributor trust < 0.75 |  | distribution.trust* |
| STREAMING_PASSIVE_MONEY_PRINTER | no | NOT APPLICABLE: streaming is not modelled yet (Gate 3) |  |  |
| HIGH_REVIEWS_UNEXPLAINED_LOW_SALES | no | 264 releases with avg >= 7.5 and gross in bottom 20%: 264 explained by small reach, 0 by low awareness (little marketing/Fame/fans), 0 unexplained |  | audience opening/legs model |
| UNSUPPORTED_RULE_ASSUMPTION | **YES** | INFO: results depend on WORKING ASSUMPTIONS (see docs/assumptions-register.md): prestige repeatScope=perIP, trust formula, offer/heat formula, saturating awareness + geometric legs, genre XP on completion, staff-pitch rule, all numeric values. |  |  |

## Strategy summary (median, p10–p90)

| Strategy | endCash | cashPerYear | prestige | meanAudience | meanCritic | shareLate8plus | surplusKept | surplusShareOfIncome | royaltyCosts | negativeCashWeeks | maxIpFans | meanTrustEnd | ended negative | any Prestige |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| balanced | $4,754,124 (p10 $4,267,825 · p90 $5,262,960) | $731,882 (p10 $657,075 · p90 $811,396) | 1670 (p10 1219.5 · p90 2066.5) | 7.65 (p10 7.35 · p90 7.93) | 7.61 (p10 7.34 · p90 7.91) | 0.63 (p10 0.38 · p90 0.88) | $214,968 (p10 $88,469 · p90 $350,806) | 0.03 (p10 0.01 · p90 0.05) | $4,270,031 (p10 $3,807,621 · p90 $4,723,462) | 2 (p10 0 · p90 6) | 50496.5 (p10 31711.2 · p90 72310) | 4 (p10 3.75 · p90 4.21) | 0 | 1 |
| quality-first | $4,305,253 (p10 $3,836,732 · p90 $4,629,878) | $664,154 (p10 $592,446 · p90 $716,338) | 2525 (p10 2105 · p90 2996) | 7.8 (p10 7.54 · p90 8.08) | 7.74 (p10 7.49 · p90 8) | 0.75 (p10 0.63 · p90 1) | $350,648 (p10 $180,332 · p90 $538,478) | 0.05 (p10 0.03 · p90 0.08) | $4,159,261 (p10 $3,768,450 · p90 $4,516,505) | 1 (p10 0 · p90 7) | 22558.5 (p10 19303.8 · p90 27531.5) | 3.95 (p10 3.69 · p90 4.15) | 0 | 1 |
| cheap-duds | $1,901,143 (p10 $1,566,129 · p90 $2,183,877) | $290,959 (p10 $238,922 · p90 $334,963) | 0 (p10 0 · p90 75) | 6.04 (p10 5.76 · p90 6.3) | 6.18 (p10 5.86 · p90 6.43) | 0 (p10 0 · p90 0) | $342,602 (p10 $233,955 · p90 $443,925) | 0.13 (p10 0.1 · p90 0.15) | $1,111,408 (p10 $1,033,987 · p90 $1,193,825) | 0 (p10 0 · p90 0) | 3447.5 (p10 2580.5 · p90 4621.3) | 2.47 (p10 2.39 · p90 2.53) | 0 | 0.295 |
| famous-star | $2,845,706 (p10 $2,595,060 · p90 $3,122,878) | $435,513 (p10 $396,611 · p90 $478,537) | 0 (p10 0 · p90 150) | 6.32 (p10 6.13 · p90 6.52) | 6.39 (p10 6.16 · p90 6.58) | 0 (p10 0 · p90 0) | $0 (p10 $0 · p90 $5,554) | 0 (p10 0 · p90 0) | $2,418,754 (p10 $2,357,312 · p90 $2,771,399) | 8 (p10 5 · p90 11) | 8521 (p10 6886.9 · p90 10861.4) | 3 (p10 3 · p90 3.48) | 0 | 0.425 |
| self-funder | $248,151 (p10 $207,039 · p90 $330,838) | $32,487 (p10 $26,077 · p90 $45,389) | 150 (p10 0 · p90 375) | 6.59 (p10 6.37 · p90 6.83) | 6.58 (p10 6.37 · p90 6.78) | 0 (p10 0 · p90 0.13) | $0 (p10 $0 · p90 $5,883) | 0 (p10 0 · p90 0) | $126,251 (p10 $91,342 · p90 $244,318) | 13 (p10 8 · p90 23) | 3802 (p10 2904.9 · p90 5672.3) | 2.34 (p10 2.27 · p90 2.46) | 0 | 0.86 |
| experimenter | $2,986,074 (p10 $2,730,976 · p90 $3,330,066) | $457,301 (p10 $418,698 · p90 $511,323) | 75 (p10 0 · p90 225) | 6.41 (p10 6.22 · p90 6.61) | 6.44 (p10 6.27 · p90 6.63) | 0 (p10 0 · p90 0) | $110,255 (p10 $42,637 · p90 $196,445) | 0.03 (p10 0.01 · p90 0.05) | $1,872,150 (p10 $1,710,166 · p90 $2,300,956) | 1 (p10 0 · p90 7) | 7066 (p10 5124.7 · p90 9760.4) | 3.05 (p10 2.87 · p90 3.44) | 0 | 0.755 |
| franchise-builder | $3,602,986 (p10 $3,165,762 · p90 $4,157,227) | $553,889 (p10 $485,762 · p90 $639,092) | 175 (p10 100 · p90 350) | 6.62 (p10 6.19 · p90 6.96) | 6.57 (p10 6.18 · p90 6.92) | 0 (p10 0 · p90 0.13) | $20,607 (p10 $0 · p90 $156,217) | 0 (p10 0 · p90 0.03) | $2,385,684 (p10 $2,165,518 · p90 $2,881,539) | 2 (p10 0 · p90 7) | 38376 (p10 27512.4 · p90 53032.9) | 3.28 (p10 3 · p90 3.61) | 0 | 1 |

## Ranking by median end cash

1. **balanced** — $4,754,124 cash, 1670 Prestige
2. **quality-first** — $4,305,253 cash, 2525 Prestige
3. **franchise-builder** — $3,602,986 cash, 175 Prestige
4. **experimenter** — $2,986,074 cash, 75 Prestige
5. **famous-star** — $2,845,706 cash, 0 Prestige
6. **cheap-duds** — $1,901,143 cash, 0 Prestige
7. **self-funder** — $248,151 cash, 150 Prestige

## Average review score by production index (mean across seeds)

- balanced: 5.7 → 5.9 → 6.2 → 7.2 → 7.4 → 7.5 → 7.6 → 7.8 → 7.9 → 8.0 → 8.0 → 8.1 → 8.2 → 8.1 → 8.2 → 8.1 → 8.2 → 8.2 → 8.2 → 8.3
- quality-first: 5.6 → 5.9 → 6.4 → 7.3 → 7.5 → 7.7 → 7.8 → 7.9 → 8.1 → 8.1 → 8.2 → 8.2 → 8.3 → 8.3 → 8.3 → 8.3 → 8.3 → 8.4 → 8.4 → 8.5
- cheap-duds: 5.5 → 5.6 → 5.7 → 5.8 → 5.8 → 5.8 → 5.9 → 6.0 → 6.1 → 6.1 → 6.2 → 6.3 → 6.3 → 6.3 → 6.3 → 6.4 → 6.4 → 6.4 → 6.4 → 6.4
- famous-star: 5.5 → 5.8 → 5.9 → 6.0 → 6.0 → 6.1 → 6.1 → 6.3 → 6.4 → 6.4 → 6.5 → 6.5 → 6.6 → 6.6 → 6.6 → 6.7 → 6.7 → 6.7 → 6.7 → 6.8
- self-funder: 5.5 → 5.7 → 5.9 → 6.1 → 6.1 → 6.3 → 6.4 → 6.5 → 6.6 → 6.7 → 6.8 → 6.9 → 6.9 → 6.9 → 7.0 → 7.0 → 7.1 → 7.1 → 7.1 → 7.2
- experimenter: 5.6 → 5.8 → 5.9 → 6.1 → 6.2 → 6.1 → 6.2 → 6.3 → 6.5 → 6.5 → 6.6 → 6.6 → 6.7 → 6.7 → 6.8 → 6.8 → 6.8 → 6.8 → 6.8 → 6.9
- franchise-builder: 5.6 → 5.9 → 6.1 → 6.4 → 6.5 → 6.6 → 6.7 → 6.8 → 6.8 → 6.8 → 6.8 → 6.7 → 6.7 → 6.6 → 6.7 → 6.7 → 6.9 → 6.8 → 6.9 → 6.8
