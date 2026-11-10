# Batch report — 7000 careers

> **Simulation assumptions, not design locks.** All numbers come from provisional config values. Nothing here is official balance.

- Ruleset: `v9.61-movie-kernel-0.1` · Config: `baseline` (hash `5355fe52`)
- Seeds: 1–1000 (1000 seeds)
- Strategies: balanced, quality-first, cheap-duds, famous-star, self-funder, experimenter, franchise-builder
- Productions per career: 5
- Runtime: 7740 ms (measured)
- Modelled: movies; distributor advances/royalties/trust; Stars (families, budgets, fallback, callbacks, relationships); marketing + studio buzz; scores + legs; IP fans; Prestige milestones; studio genre levels; trends; staff XP/hire/train; theme research + staff pitches
- **Not modelled:** limited series; TV series/seasons/renewals/hiatus/announcements; streaming service/subscribers; eras beyond a gentle quality bar; studio upgrades/format unlock gates; genre unlocks; late-game concurrency

## Invariant checks

All invariants held across every career (ledger audit, gross = sales only, causal scores, Star budgets, unique Prestige ids, runs terminate).

## Diagnostic flags

| Flag | Fired | Why | Seeds | Implicated |
|---|---|---|---|---|
| SURPLUS_FARMING_DOMINANT | no | cheap-duds median end cash 452913 vs best decent policy 685002 (fires at >= 0.95x) |  | distribution.roster[].generosity, production.movie.baseCost, marketing/Star value |
| EARLY_SOFTLOCK | **YES** | 7/7000 careers stuck (hit maxWeeks or >= 52 negative-cash weeks); by strategy: self-funder 7/1000 | 38, 164, 282, 417, 482, 712, 985 | start.cash, wages, lifeline terms |
| PRESTIGE_TOO_FAST | no | 0/7000 careers earn > 400 Prestige/year |  | prestige.milestones, prestige.repeatScope |
| PRESTIGE_TOO_SLOW | no | 0/0 careers with >= 10 releases have zero Prestige |  | prestige thresholds vs typical scores |
| QUALITY_INFLATION | no | 34/7000 careers: late releases mostly 8+ or > 25% of releases 9+ | 7, 65, 78, 87, 131, 155, 158, 181, 233, 286 | staffGrowth.statGainPerWeek, stars.growthPerProject, studioGenre.qualityBonusPerLevel, production.eraBarPerYear |
| DEAD_STRATEGY | no | no strategy collapses |  | varies by strategy |
| DOMINANT_STRATEGY | no | no policy wins cash AND Prestige in >= 80% of paired seeds |  |  |
| STAR_PRICE_NO_VALUE | no | famous-star median cash/release 101428 vs cheap-duds 82583 (Fame + marketing spend does pay back) |  | stars.feePerFame, audience.fameAwareness, marketing campaigns |
| FRANCHISE_AUTO_WIN | no | franchise-builder median cash 753148; fires if > 1.25x every other policy and Prestige >= all |  | audience.fanAwareness, repetitionFatigue.sequelPerRepeat |
| DISTRIBUTOR_TRUST_SPIRAL | no | 0/7000 careers end with mean distributor trust < 0.75 |  | distribution.trust* |
| STREAMING_PASSIVE_MONEY_PRINTER | no | NOT APPLICABLE: streaming is not modelled yet (Gate 3) |  |  |
| HIGH_REVIEWS_UNEXPLAINED_LOW_SALES | no | 0 releases with avg >= 7.5 and gross in bottom 20%: 0 explained by small reach, 0 by low awareness (little marketing/Fame/fans), 0 unexplained |  | audience opening/legs model |
| UNSUPPORTED_RULE_ASSUMPTION | **YES** | INFO: results depend on WORKING ASSUMPTIONS (see docs/assumptions-register.md): prestige repeatScope=perIP, trust formula, offer/heat formula, saturating awareness + geometric legs, genre XP on completion, staff-pitch rule, all numeric values. |  |  |

## Strategy summary (median, p10–p90)

| Strategy | endCash | cashPerYear | prestige | meanAudience | meanCritic | shareLate8plus | surplusKept | surplusShareOfIncome | royaltyCosts | negativeCashWeeks | maxIpFans | meanTrustEnd | ended negative | any Prestige |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| balanced | $685,002 (p10 $552,125 · p90 $834,251) | $353,188 (p10 $280,582 · p90 $434,748) | 75 (p10 0 · p90 160) | 6.42 (p10 5.98 · p90 6.85) | 6.44 (p10 5.98 · p90 6.91) | 0 (p10 0 · p90 0.5) | $3,037 (p10 $0 · p90 $30,159) | 0 (p10 0 · p90 0.02) | $527,806 (p10 $485,413 · p90 $598,998) | 2 (p10 0 · p90 7) | 8697.5 (p10 6183.7 · p90 12342.3) | 2.74 (p10 2.68 · p90 2.82) | 0 | 0.699 |
| quality-first | $579,950 (p10 $453,399 · p90 $724,104) | $295,966 (p10 $226,281 · p90 $374,701) | 125 (p10 50 · p90 250) | 6.52 (p10 6.03 · p90 7.02) | 6.54 (p10 6.06 · p90 7.02) | 0 (p10 0 · p90 0.5) | $16,286 (p10 $0 · p90 $64,037) | 0.01 (p10 0 · p90 0.06) | $497,124 (p10 $444,515 · p90 $571,598) | 2 (p10 0 · p90 7) | 8695.5 (p10 6054.5 · p90 12817.7) | 2.7 (p10 2.64 · p90 2.78) | 0 | 0.924 |
| cheap-duds | $452,913 (p10 $349,407 · p90 $595,894) | $233,280 (p10 $177,217 · p90 $314,201) | 0 (p10 0 · p90 0) | 5.63 (p10 5.2 · p90 5.98) | 5.79 (p10 5.35 · p90 6.17) | 0 (p10 0 · p90 0) | $93,455 (p10 $61,543 · p90 $128,147) | 0.14 (p10 0.11 · p90 0.18) | $255,893 (p10 $217,340 · p90 $307,477) | 0 (p10 0 · p90 0) | 1655 (p10 1011.6 · p90 2688) | 2.38 (p10 2.33 · p90 2.44) | 0 | 0 |
| famous-star | $547,136 (p10 $440,588 · p90 $653,900) | $279,612 (p10 $221,401 · p90 $337,872) | 0 (p10 0 · p90 0) | 5.81 (p10 5.44 · p90 6.18) | 5.9 (p10 5.48 · p90 6.26) | 0 (p10 0 · p90 0) | $0 (p10 $0 · p90 $6,468) | 0 (p10 0 · p90 0.01) | $539,151 (p10 $507,082 · p90 $568,780) | 7 (p10 5 · p90 11) | 4127.5 (p10 2944.6 · p90 5801.1) | 2.67 (p10 2.63 · p90 2.71) | 0 | 0 |
| self-funder | $251,876 (p10 $176,607 · p90 $309,414) | $119,500 (p10 $76,417 · p90 $151,945) | 0 (p10 0 · p90 0) | 5.86 (p10 5.43 · p90 6.23) | 5.89 (p10 5.48 · p90 6.28) | 0 (p10 0 · p90 0) | $0 (p10 $0 · p90 $0) | 0 (p10 0 · p90 0) | $53,630 (p10 $44,411 · p90 $61,552) | 14 (p10 7 · p90 25) | 1902.5 (p10 1332.7 · p90 2690.9) | 2.18 (p10 2.13 · p90 2.27) | 0 | 0 |
| experimenter | $504,850 (p10 $421,774 · p90 $607,965) | $258,334 (p10 $212,558 · p90 $317,270) | 0 (p10 0 · p90 0) | 5.9 (p10 5.53 · p90 6.23) | 5.95 (p10 5.57 · p90 6.29) | 0 (p10 0 · p90 0) | $16,736 (p10 $0 · p90 $46,608) | 0.02 (p10 0 · p90 0.05) | $409,139 (p10 $371,519 · p90 $446,205) | 1 (p10 0 · p90 7) | 3306 (p10 2276.6 · p90 4698.8) | 2.55 (p10 2.52 · p90 2.59) | 0 | 0 |
| franchise-builder | $753,148 (p10 $628,821 · p90 $895,966) | $391,523 (p10 $322,664 · p90 $469,436) | 0 (p10 0 · p90 0) | 6.09 (p10 5.69 · p90 6.61) | 6.1 (p10 5.7 · p90 6.57) | 0 (p10 0 · p90 0) | $2,853 (p10 $0 · p90 $36,934) | 0 (p10 0 · p90 0.03) | $498,746 (p10 $460,123 · p90 $537,204) | 2 (p10 0 · p90 7) | 7510.5 (p10 4463 · p90 10644.2) | 2.64 (p10 2.6 · p90 2.68) | 0 | 0.021 |

## Ranking by median end cash

1. **franchise-builder** — $753,148 cash, 0 Prestige
2. **balanced** — $685,002 cash, 75 Prestige
3. **quality-first** — $579,950 cash, 125 Prestige
4. **famous-star** — $547,136 cash, 0 Prestige
5. **experimenter** — $504,850 cash, 0 Prestige
6. **cheap-duds** — $452,913 cash, 0 Prestige
7. **self-funder** — $251,876 cash, 0 Prestige

## Average review score by production index (mean across seeds)

- balanced: 5.6 → 5.8 → 6.2 → 7.2 → 7.4
- quality-first: 5.6 → 5.9 → 6.3 → 7.3 → 7.6
- cheap-duds: 5.5 → 5.6 → 5.7 → 5.8 → 5.8
- famous-star: 5.5 → 5.8 → 5.9 → 6.0 → 6.0
- self-funder: 5.5 → 5.7 → 5.9 → 6.1 → 6.1
- experimenter: 5.6 → 5.8 → 6.0 → 6.1 → 6.1
- franchise-builder: 5.6 → 5.8 → 6.1 → 6.4 → 6.5
