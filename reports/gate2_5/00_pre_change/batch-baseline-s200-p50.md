# Batch report — 1400 careers

> **Simulation assumptions, not design locks.** All numbers come from provisional config values. Nothing here is official balance.

- Ruleset: `v9.61-movie-kernel-0.1` · Config: `baseline` (hash `5355fe52`)
- Seeds: 1–200 (200 seeds)
- Strategies: balanced, quality-first, cheap-duds, famous-star, self-funder, experimenter, franchise-builder
- Productions per career: 50
- Runtime: 31407 ms (measured)
- Modelled: movies; distributor advances/royalties/trust; Stars (families, budgets, fallback, callbacks, relationships); marketing + studio buzz; scores + legs; IP fans; Prestige milestones; studio genre levels; trends; staff XP/hire/train; theme research + staff pitches
- **Not modelled:** limited series; TV series/seasons/renewals/hiatus/announcements; streaming service/subscribers; eras beyond a gentle quality bar; studio upgrades/format unlock gates; genre unlocks; late-game concurrency

## Invariant checks

All invariants held across every career (ledger audit, gross = sales only, causal scores, Star budgets, unique Prestige ids, runs terminate).

## Diagnostic flags

| Flag | Fired | Why | Seeds | Implicated |
|---|---|---|---|---|
| SURPLUS_FARMING_DOMINANT | no | cheap-duds median end cash 5540258 vs best decent policy 14763800 (fires at >= 0.95x) |  | distribution.roster[].generosity, production.movie.baseCost, marketing/Star value |
| EARLY_SOFTLOCK | **YES** | 2/1400 careers stuck (hit maxWeeks or >= 52 negative-cash weeks); by strategy: self-funder 2/200 | 38, 164 | start.cash, wages, lifeline terms |
| PRESTIGE_TOO_FAST | no | 237/1400 careers earn > 400 Prestige/year | 1, 2, 3, 4, 5, 6, 7, 8, 8, 9 | prestige.milestones, prestige.repeatScope |
| PRESTIGE_TOO_SLOW | no | 28/1400 careers with >= 10 releases have zero Prestige |  | prestige thresholds vs typical scores |
| QUALITY_INFLATION | **YES** | 387/1400 careers: late releases mostly 8+ or > 25% of releases 9+ | 1, 1, 2, 2, 3, 3, 4, 4, 5, 5 | staffGrowth.statGainPerWeek, stars.growthPerProject, studioGenre.qualityBonusPerLevel, production.eraBarPerYear |
| DEAD_STRATEGY | **YES** | self-funder: median end cash < 25% of the best (14763800) or negative |  | varies by strategy |
| DOMINANT_STRATEGY | no | no policy wins cash AND Prestige in >= 80% of paired seeds |  |  |
| STAR_PRICE_NO_VALUE | no | famous-star median cash/release 205005 vs cheap-duds 110005 (Fame + marketing spend does pay back) |  | stars.feePerFame, audience.fameAwareness, marketing campaigns |
| FRANCHISE_AUTO_WIN | no | franchise-builder median cash 11092107; fires if > 1.25x every other policy and Prestige >= all |  | audience.fanAwareness, repetitionFatigue.sequelPerRepeat |
| DISTRIBUTOR_TRUST_SPIRAL | no | 0/1400 careers end with mean distributor trust < 0.75 |  | distribution.trust* |
| STREAMING_PASSIVE_MONEY_PRINTER | no | NOT APPLICABLE: streaming is not modelled yet (Gate 3) |  |  |
| HIGH_REVIEWS_UNEXPLAINED_LOW_SALES | no | 2484 releases with avg >= 7.5 and gross in bottom 20%: 2452 explained by small reach, 32 by low awareness (little marketing/Fame/fans), 0 unexplained |  | audience opening/legs model |
| UNSUPPORTED_RULE_ASSUMPTION | **YES** | INFO: results depend on WORKING ASSUMPTIONS (see docs/assumptions-register.md): prestige repeatScope=perIP, trust formula, offer/heat formula, saturating awareness + geometric legs, genre XP on completion, staff-pitch rule, all numeric values. |  |  |

## Strategy summary (median, p10–p90)

| Strategy | endCash | cashPerYear | prestige | meanAudience | meanCritic | shareLate8plus | surplusKept | surplusShareOfIncome | royaltyCosts | negativeCashWeeks | maxIpFans | meanTrustEnd | ended negative | any Prestige |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| balanced | $14,763,800 (p10 $14,049,764 · p90 $15,551,498) | $941,888 (p10 $894,934 · p90 $990,473) | 5680 (p10 4773 · p90 6535.5) | 8.05 (p10 7.88 · p90 8.27) | 7.99 (p10 7.77 · p90 8.25) | 0.7 (p10 0.55 · p90 0.85) | $942,351 (p10 $679,220 · p90 $1,335,069) | 0.05 (p10 0.03 · p90 0.06) | $12,806,578 (p10 $12,016,399 · p90 $13,515,260) | 2 (p10 0 · p90 6) | 79443 (p10 57249.3 · p90 119566.9) | 4.27 (p10 4.02 · p90 4.43) | 0 | 1 |
| quality-first | $13,606,167 (p10 $12,868,049 · p90 $14,215,009) | $865,571 (p10 $819,372 · p90 $905,631) | 8512.5 (p10 7698.5 · p90 9490) | 8.27 (p10 8.1 · p90 8.44) | 8.18 (p10 7.96 · p90 8.32) | 0.85 (p10 0.7 · p90 0.95) | $1,441,720 (p10 $1,087,861 · p90 $1,801,233) | 0.07 (p10 0.06 · p90 0.09) | $12,292,391 (p10 $11,664,991 · p90 $12,846,882) | 1 (p10 0 · p90 7) | 23622.5 (p10 20524.8 · p90 28042.6) | 4.22 (p10 4 · p90 4.41) | 0 | 1 |
| cheap-duds | $5,540,258 (p10 $4,709,556 · p90 $6,338,492) | $351,368 (p10 $298,601 · p90 $402,856) | 150 (p10 0 · p90 375) | 6.29 (p10 6.05 · p90 6.52) | 6.42 (p10 6.18 · p90 6.62) | 0 (p10 0 · p90 0) | $1,088,826 (p10 $811,670 · p90 $1,486,309) | 0.15 (p10 0.12 · p90 0.18) | $3,254,750 (p10 $2,821,121 · p90 $3,946,715) | 0 (p10 0 · p90 0) | 4718 (p10 3369 · p90 6904.1) | 2.75 (p10 2.5 · p90 3.02) | 0 | 0.885 |
| famous-star | $10,290,243 (p10 $8,968,902 · p90 $11,230,936) | $654,004 (p10 $569,712 · p90 $714,408) | 385 (p10 225 · p90 675) | 6.68 (p10 6.54 · p90 6.83) | 6.73 (p10 6.57 · p90 6.85) | 0 (p10 0 · p90 0.05) | $0 (p10 $0 · p90 $6,379) | 0 (p10 0 · p90 0) | $8,908,218 (p10 $7,421,567 · p90 $10,105,796) | 8 (p10 5 · p90 11) | 12873 (p10 10428.4 · p90 15743.6) | 3.98 (p10 3.84 · p90 4.4) | 0 | 0.99 |
| self-funder | $257,144 (p10 $218,732 · p90 $414,371) | $13,889 (p10 $11,433 · p90 $23,912) | 2255 (p10 1398.5 · p90 2982) | 7.06 (p10 6.88 · p90 7.26) | 7.04 (p10 6.86 · p90 7.2) | 0.1 (p10 0 · p90 0.2) | $0 (p10 $0 · p90 $14,531) | 0 (p10 0 · p90 0) | $379,897 (p10 $206,333 · p90 $557,379) | 13 (p10 8 · p90 23) | 6066 (p10 3630.7 · p90 9788.5) | 2.57 (p10 2.5 · p90 2.66) | 0 | 1 |
| experimenter | $11,092,120 (p10 $10,165,827 · p90 $12,089,111) | $705,599 (p10 $646,859 · p90 $768,778) | 450 (p10 150 · p90 750) | 6.77 (p10 6.63 · p90 6.92) | 6.82 (p10 6.65 · p90 6.98) | 0 (p10 0 · p90 0) | $982,833 (p10 $647,045 · p90 $1,371,392) | 0.07 (p10 0.05 · p90 0.1) | $6,709,574 (p10 $5,674,612 · p90 $7,888,352) | 1 (p10 0 · p90 7) | 8843.5 (p10 7353.9 · p90 10783.5) | 3.91 (p10 3.59 · p90 4.17) | 0 | 0.985 |
| franchise-builder | $11,092,107 (p10 $9,987,265 · p90 $12,391,626) | $705,165 (p10 $634,672 · p90 $788,951) | 525 (p10 385 · p90 686) | 6.72 (p10 6.45 · p90 7.01) | 6.7 (p10 6.43 · p90 6.92) | 0 (p10 0 · p90 0.1) | $145,595 (p10 $17,799 · p90 $356,279) | 0.01 (p10 0 · p90 0.02) | $8,669,433 (p10 $7,497,728 · p90 $9,836,119) | 2 (p10 0 · p90 7) | 67594.5 (p10 45904 · p90 89896.7) | 4.09 (p10 3.79 · p90 4.37) | 0 | 1 |

## Ranking by median end cash

1. **balanced** — $14,763,800 cash, 5680 Prestige
2. **quality-first** — $13,606,167 cash, 8512.5 Prestige
3. **experimenter** — $11,092,120 cash, 450 Prestige
4. **franchise-builder** — $11,092,107 cash, 525 Prestige
5. **famous-star** — $10,290,243 cash, 385 Prestige
6. **cheap-duds** — $5,540,258 cash, 150 Prestige
7. **self-funder** — $257,144 cash, 2255 Prestige

## Average review score by production index (mean across seeds)

- balanced: 5.7 → 5.9 → 6.2 → 7.2 → 7.4 → 7.5 → 7.6 → 7.8 → 7.9 → 8.0 → 8.0 → 8.1 → 8.2 → 8.1 → 8.2 → 8.1 → 8.2 → 8.2 → 8.2 → 8.3 → 8.3 → 8.3 → 8.3 → 8.3 → 8.3 → 8.3 → 8.4 → 8.3 → 8.3 → 8.2 → 8.4 → 8.2 → 8.4 → 8.3 → 8.3 → 8.3 → 8.3 → 8.3 → 8.3 → 8.3 → 8.2 → 8.3 → 8.3 → 8.4 → 8.3 → 8.3 → 8.2 → 8.2 → 8.2 → 8.3
- quality-first: 5.6 → 5.9 → 6.4 → 7.3 → 7.5 → 7.7 → 7.8 → 7.9 → 8.1 → 8.1 → 8.2 → 8.2 → 8.3 → 8.3 → 8.3 → 8.3 → 8.3 → 8.4 → 8.4 → 8.5 → 8.5 → 8.4 → 8.4 → 8.6 → 8.5 → 8.5 → 8.6 → 8.5 → 8.5 → 8.6 → 8.5 → 8.5 → 8.6 → 8.6 → 8.6 → 8.6 → 8.6 → 8.5 → 8.5 → 8.5 → 8.5 → 8.6 → 8.5 → 8.5 → 8.5 → 8.5 → 8.4 → 8.5 → 8.5 → 8.3
- cheap-duds: 5.5 → 5.6 → 5.7 → 5.8 → 5.8 → 5.8 → 5.9 → 6.0 → 6.1 → 6.1 → 6.2 → 6.3 → 6.3 → 6.3 → 6.3 → 6.4 → 6.4 → 6.4 → 6.4 → 6.4 → 6.5 → 6.5 → 6.5 → 6.5 → 6.6 → 6.5 → 6.5 → 6.6 → 6.5 → 6.6 → 6.6 → 6.5 → 6.5 → 6.6 → 6.6 → 6.5 → 6.5 → 6.5 → 6.5 → 6.5 → 6.5 → 6.6 → 6.6 → 6.5 → 6.4 → 6.5 → 6.4 → 6.5 → 6.5 → 6.5
- famous-star: 5.5 → 5.8 → 5.9 → 6.0 → 6.0 → 6.1 → 6.1 → 6.3 → 6.4 → 6.4 → 6.5 → 6.5 → 6.6 → 6.6 → 6.6 → 6.7 → 6.7 → 6.7 → 6.7 → 6.8 → 6.9 → 6.8 → 6.9 → 6.8 → 6.9 → 6.9 → 6.9 → 7.0 → 7.0 → 7.0 → 6.9 → 7.0 → 7.0 → 7.0 → 7.0 → 7.0 → 7.0 → 7.0 → 7.0 → 7.0 → 7.0 → 6.9 → 7.0 → 7.0 → 7.0 → 6.9 → 6.9 → 6.9 → 6.9 → 6.9
- self-funder: 5.5 → 5.7 → 5.9 → 6.1 → 6.1 → 6.3 → 6.4 → 6.5 → 6.6 → 6.7 → 6.8 → 6.9 → 6.9 → 6.9 → 7.0 → 7.0 → 7.1 → 7.1 → 7.1 → 7.2 → 7.2 → 7.2 → 7.3 → 7.3 → 7.3 → 7.3 → 7.3 → 7.4 → 7.3 → 7.4 → 7.4 → 7.4 → 7.4 → 7.5 → 7.4 → 7.4 → 7.4 → 7.5 → 7.4 → 7.5 → 7.4 → 7.4 → 7.5 → 7.4 → 7.4 → 7.3 → 7.3 → 7.3 → 7.3 → 7.2
- experimenter: 5.6 → 5.8 → 5.9 → 6.1 → 6.2 → 6.1 → 6.2 → 6.3 → 6.5 → 6.5 → 6.6 → 6.6 → 6.7 → 6.7 → 6.8 → 6.8 → 6.8 → 6.8 → 6.8 → 6.9 → 6.9 → 7.0 → 6.9 → 7.0 → 7.0 → 7.0 → 7.0 → 7.1 → 7.1 → 7.0 → 7.5 → 7.4 → 7.3 → 7.3 → 7.2 → 7.2 → 7.1 → 7.1 → 7.1 → 7.0 → 7.0 → 7.0 → 7.0 → 7.0 → 6.9 → 6.9 → 6.8 → 6.8 → 6.8 → 6.8
- franchise-builder: 5.6 → 5.9 → 6.1 → 6.4 → 6.5 → 6.6 → 6.7 → 6.8 → 6.8 → 6.8 → 6.8 → 6.7 → 6.7 → 6.6 → 6.7 → 6.7 → 6.9 → 6.8 → 6.9 → 6.8 → 6.8 → 6.7 → 6.6 → 6.6 → 6.6 → 6.7 → 6.7 → 7.0 → 6.9 → 7.1 → 7.0 → 7.1 → 7.0 → 6.9 → 6.9 → 6.9 → 6.8 → 6.8 → 6.7 → 6.7 → 6.7 → 6.7 → 6.8 → 6.7 → 6.7 → 6.8 → 6.7 → 6.8 → 6.8 → 6.9
