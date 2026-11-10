# Batch report — 1400 careers

> **Simulation assumptions, not design locks.** All numbers come from provisional config values. Nothing here is official balance.

- Ruleset: `v9.61-movie-kernel-0.1` · Config: `baseline` (hash `5355fe52`)
- Seeds: 1–200 (200 seeds)
- Strategies: balanced, quality-first, cheap-duds, famous-star, self-funder, experimenter, franchise-builder
- Productions per career: 5
- Runtime: 1955 ms (measured)
- Modelled: movies; distributor advances/royalties/trust; Stars (families, budgets, fallback, callbacks, relationships); marketing + studio buzz; scores + legs; IP fans; Prestige milestones; studio genre levels; trends; staff XP/hire/train; theme research + staff pitches
- **Not modelled:** limited series; TV series/seasons/renewals/hiatus/announcements; streaming service/subscribers; eras beyond a gentle quality bar; studio upgrades/format unlock gates; genre unlocks; late-game concurrency

## Invariant checks

All invariants held across every career (ledger audit, gross = sales only, causal scores, Star budgets, unique Prestige ids, runs terminate).

## Diagnostic flags

| Flag | Fired | Why | Seeds | Implicated |
|---|---|---|---|---|
| SURPLUS_FARMING_DOMINANT | no | cheap-duds median end cash 450735 vs best decent policy 701049 (fires at >= 0.95x) |  | distribution.roster[].generosity, production.movie.baseCost, marketing/Star value |
| EARLY_SOFTLOCK | **YES** | 2/1400 careers stuck (hit maxWeeks or >= 52 negative-cash weeks); by strategy: self-funder 2/200 | 38, 164 | start.cash, wages, lifeline terms |
| PRESTIGE_TOO_FAST | no | 0/1400 careers earn > 400 Prestige/year |  | prestige.milestones, prestige.repeatScope |
| PRESTIGE_TOO_SLOW | no | 0/0 careers with >= 10 releases have zero Prestige |  | prestige thresholds vs typical scores |
| QUALITY_INFLATION | no | 8/1400 careers: late releases mostly 8+ or > 25% of releases 9+ | 7, 65, 78, 87, 131, 155, 158, 181 | staffGrowth.statGainPerWeek, stars.growthPerProject, studioGenre.qualityBonusPerLevel, production.eraBarPerYear |
| DEAD_STRATEGY | no | no strategy collapses |  | varies by strategy |
| DOMINANT_STRATEGY | no | no policy wins cash AND Prestige in >= 80% of paired seeds |  |  |
| STAR_PRICE_NO_VALUE | no | famous-star median cash/release 101095 vs cheap-duds 82147 (Fame + marketing spend does pay back) |  | stars.feePerFame, audience.fameAwareness, marketing campaigns |
| FRANCHISE_AUTO_WIN | no | franchise-builder median cash 756056; fires if > 1.25x every other policy and Prestige >= all |  | audience.fanAwareness, repetitionFatigue.sequelPerRepeat |
| DISTRIBUTOR_TRUST_SPIRAL | no | 0/1400 careers end with mean distributor trust < 0.75 |  | distribution.trust* |
| STREAMING_PASSIVE_MONEY_PRINTER | no | NOT APPLICABLE: streaming is not modelled yet (Gate 3) |  |  |
| HIGH_REVIEWS_UNEXPLAINED_LOW_SALES | no | 0 releases with avg >= 7.5 and gross in bottom 20%: 0 explained by small reach, 0 by low awareness (little marketing/Fame/fans), 0 unexplained |  | audience opening/legs model |
| UNSUPPORTED_RULE_ASSUMPTION | **YES** | INFO: results depend on WORKING ASSUMPTIONS (see docs/assumptions-register.md): prestige repeatScope=perIP, trust formula, offer/heat formula, saturating awareness + geometric legs, genre XP on completion, staff-pitch rule, all numeric values. |  |  |

## Strategy summary (median, p10–p90)

| Strategy | endCash | cashPerYear | prestige | meanAudience | meanCritic | shareLate8plus | surplusKept | surplusShareOfIncome | royaltyCosts | negativeCashWeeks | maxIpFans | meanTrustEnd | ended negative | any Prestige |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| balanced | $701,049 (p10 $546,370 · p90 $835,516) | $362,003 (p10 $279,041 · p90 $435,440) | 75 (p10 0 · p90 151) | 6.43 (p10 5.98 · p90 6.85) | 6.53 (p10 5.95 · p90 6.99) | 0 (p10 0 · p90 0.5) | $5,695 (p10 $0 · p90 $32,143) | 0.01 (p10 0 · p90 0.03) | $533,744 (p10 $487,364 · p90 $597,225) | 2 (p10 0 · p90 6) | 8668 (p10 6170.9 · p90 12221.4) | 2.74 (p10 2.69 · p90 2.81) | 0 | 0.7 |
| quality-first | $593,177 (p10 $451,406 · p90 $731,342) | $302,792 (p10 $225,842 · p90 $378,972) | 125 (p10 45 · p90 250) | 6.5 (p10 6.02 · p90 6.99) | 6.57 (p10 6.02 · p90 7.06) | 0 (p10 0 · p90 0.5) | $18,982 (p10 $0 · p90 $65,856) | 0.02 (p10 0 · p90 0.06) | $498,413 (p10 $449,105 · p90 $587,168) | 1 (p10 0 · p90 7) | 8543.5 (p10 5824.3 · p90 13158.8) | 2.7 (p10 2.63 · p90 2.79) | 0 | 0.9 |
| cheap-duds | $450,735 (p10 $366,711 · p90 $593,421) | $231,689 (p10 $184,247 · p90 $314,390) | 0 (p10 0 · p90 0) | 5.65 (p10 5.22 · p90 5.98) | 5.79 (p10 5.36 · p90 6.21) | 0 (p10 0 · p90 0) | $93,989 (p10 $62,724 · p90 $126,042) | 0.15 (p10 0.11 · p90 0.18) | $253,885 (p10 $218,201 · p90 $302,893) | 0 (p10 0 · p90 0) | 1657 (p10 1028.6 · p90 2804.1) | 2.39 (p10 2.34 · p90 2.44) | 0 | 0 |
| famous-star | $545,474 (p10 $448,872 · p90 $656,332) | $278,897 (p10 $225,907 · p90 $340,458) | 0 (p10 0 · p90 0) | 5.78 (p10 5.4 · p90 6.16) | 5.98 (p10 5.48 · p90 6.27) | 0 (p10 0 · p90 0) | $0 (p10 $0 · p90 $5,554) | 0 (p10 0 · p90 0.01) | $541,227 (p10 $509,538 · p90 $571,630) | 8 (p10 5 · p90 11) | 4252.5 (p10 2921.4 · p90 5710.8) | 2.66 (p10 2.63 · p90 2.71) | 0 | 0 |
| self-funder | $256,732 (p10 $178,456 · p90 $314,226) | $122,608 (p10 $79,029 · p90 $153,830) | 0 (p10 0 · p90 0) | 5.85 (p10 5.45 · p90 6.19) | 5.9 (p10 5.5 · p90 6.31) | 0 (p10 0 · p90 0) | $0 (p10 $0 · p90 $0) | 0 (p10 0 · p90 0) | $54,074 (p10 $44,600 · p90 $62,433) | 13 (p10 8 · p90 23) | 1917.5 (p10 1319.8 · p90 2652.3) | 2.18 (p10 2.13 · p90 2.26) | 0 | 0 |
| experimenter | $519,521 (p10 $419,811 · p90 $616,370) | $266,856 (p10 $211,961 · p90 $319,999) | 0 (p10 0 · p90 0) | 5.9 (p10 5.54 · p90 6.22) | 5.95 (p10 5.54 · p90 6.29) | 0 (p10 0 · p90 0) | $15,879 (p10 $0 · p90 $46,268) | 0.02 (p10 0 · p90 0.05) | $416,048 (p10 $375,132 · p90 $450,198) | 1 (p10 0 · p90 7) | 3339.5 (p10 2354.9 · p90 4689) | 2.56 (p10 2.52 · p90 2.6) | 0 | 0 |
| franchise-builder | $756,056 (p10 $640,157 · p90 $891,279) | $392,485 (p10 $335,472 · p90 $465,963) | 0 (p10 0 · p90 0) | 6.1 (p10 5.65 · p90 6.67) | 6.11 (p10 5.69 · p90 6.53) | 0 (p10 0 · p90 0) | $2,902 (p10 $0 · p90 $32,811) | 0 (p10 0 · p90 0.03) | $498,424 (p10 $460,635 · p90 $537,249) | 2 (p10 0 · p90 7) | 7715.5 (p10 4172.5 · p90 10671) | 2.64 (p10 2.6 · p90 2.68) | 0 | 0.025 |

## Ranking by median end cash

1. **franchise-builder** — $756,056 cash, 0 Prestige
2. **balanced** — $701,049 cash, 75 Prestige
3. **quality-first** — $593,177 cash, 125 Prestige
4. **famous-star** — $545,474 cash, 0 Prestige
5. **experimenter** — $519,521 cash, 0 Prestige
6. **cheap-duds** — $450,735 cash, 0 Prestige
7. **self-funder** — $256,732 cash, 0 Prestige

## Average review score by production index (mean across seeds)

- balanced: 5.7 → 5.9 → 6.2 → 7.2 → 7.4
- quality-first: 5.6 → 5.9 → 6.4 → 7.3 → 7.5
- cheap-duds: 5.5 → 5.6 → 5.7 → 5.8 → 5.8
- famous-star: 5.5 → 5.8 → 5.9 → 6.0 → 6.0
- self-funder: 5.5 → 5.7 → 5.9 → 6.1 → 6.1
- experimenter: 5.6 → 5.8 → 5.9 → 6.1 → 6.2
- franchise-builder: 5.6 → 5.9 → 6.1 → 6.4 → 6.5
