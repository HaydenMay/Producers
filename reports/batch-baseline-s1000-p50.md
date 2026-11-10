# Batch report — 3000 careers

> **Simulation assumptions, not design locks.** All numbers come from provisional config values. Nothing here is official balance.

- Ruleset: `v9.61-movie-kernel-0.1` · Config: `baseline` (hash `5355fe52`)
- Seeds: 1–1000 (1000 seeds)
- Strategies: balanced, cheap-duds, quality-first
- Productions per career: 50
- Runtime: 84659 ms (measured)
- Modelled: movies; distributor advances/royalties/trust; Stars (families, budgets, fallback, callbacks, relationships); marketing + studio buzz; scores + legs; IP fans; Prestige milestones; studio genre levels; trends; staff XP/hire/train; theme research + staff pitches
- **Not modelled:** limited series; TV series/seasons/renewals/hiatus/announcements; streaming service/subscribers; eras beyond a gentle quality bar; studio upgrades/format unlock gates; genre unlocks; late-game concurrency

## Invariant checks

All invariants held across every career (ledger audit, gross = sales only, causal scores, Star budgets, unique Prestige ids, runs terminate).

## Diagnostic flags

| Flag | Fired | Why | Seeds | Implicated |
|---|---|---|---|---|
| SURPLUS_FARMING_DOMINANT | no | cheap-duds median end cash 5437036 vs best decent policy 14725251 (fires at >= 0.95x) |  | distribution.roster[].generosity, production.movie.baseCost, marketing/Star value |
| EARLY_SOFTLOCK | no | 0/3000 careers stuck (hit maxWeeks or >= 52 negative-cash weeks) |  | start.cash, wages, lifeline terms |
| PRESTIGE_TOO_FAST | **YES** | 1241/3000 careers earn > 400 Prestige/year | 1, 2, 3, 4, 5, 6, 7, 8, 8, 9 | prestige.milestones, prestige.repeatScope |
| PRESTIGE_TOO_SLOW | no | 145/3000 careers with >= 10 releases have zero Prestige |  | prestige thresholds vs typical scores |
| QUALITY_INFLATION | **YES** | 1926/3000 careers: late releases mostly 8+ or > 25% of releases 9+ | 1, 1, 2, 2, 3, 3, 4, 4, 5, 5 | staffGrowth.statGainPerWeek, stars.growthPerProject, studioGenre.qualityBonusPerLevel, production.eraBarPerYear |
| DEAD_STRATEGY | no | no strategy collapses |  | varies by strategy |
| DOMINANT_STRATEGY | no | no policy wins cash AND Prestige in >= 80% of paired seeds |  |  |
| DISTRIBUTOR_TRUST_SPIRAL | no | 0/3000 careers end with mean distributor trust < 0.75 |  | distribution.trust* |
| STREAMING_PASSIVE_MONEY_PRINTER | no | NOT APPLICABLE: streaming is not modelled yet (Gate 3) |  |  |
| HIGH_REVIEWS_UNEXPLAINED_LOW_SALES | no | 642 releases with avg >= 7.5 and gross in bottom 20%: 642 explained by small reach, 0 by low awareness (little marketing/Fame/fans), 0 unexplained |  | audience opening/legs model |
| UNSUPPORTED_RULE_ASSUMPTION | **YES** | INFO: results depend on WORKING ASSUMPTIONS (see docs/assumptions-register.md): prestige repeatScope=perIP, trust formula, offer/heat formula, saturating awareness + geometric legs, genre XP on completion, staff-pitch rule, all numeric values. |  |  |

## Strategy summary (median, p10–p90)

| Strategy | endCash | cashPerYear | prestige | meanAudience | meanCritic | shareLate8plus | surplusKept | surplusShareOfIncome | royaltyCosts | negativeCashWeeks | maxIpFans | meanTrustEnd | ended negative | any Prestige |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| balanced | $14,725,251 (p10 $13,936,207 · p90 $15,531,923) | $937,763 (p10 $887,383 · p90 $989,890) | 5695 (p10 4829.5 · p90 6730.5) | 8.05 (p10 7.85 · p90 8.27) | 8 (p10 7.77 · p90 8.22) | 0.7 (p10 0.55 · p90 0.85) | $946,715 (p10 $681,664 · p90 $1,265,130) | 0.05 (p10 0.04 · p90 0.06) | $12,740,667 (p10 $11,944,074 · p90 $13,483,318) | 2 (p10 0 · p90 7) | 76454 (p10 56439.1 · p90 111166) | 4.29 (p10 4.03 · p90 4.44) | 0 | 1 |
| cheap-duds | $5,437,036 (p10 $4,660,583 · p90 $6,230,475) | $344,811 (p10 $296,051 · p90 $395,807) | 150 (p10 0 · p90 375) | 6.27 (p10 6.05 · p90 6.47) | 6.42 (p10 6.18 · p90 6.63) | 0 (p10 0 · p90 0) | $1,062,675 (p10 $798,269 · p90 $1,421,001) | 0.14 (p10 0.12 · p90 0.18) | $3,255,277 (p10 $2,784,776 · p90 $3,910,499) | 0 (p10 0 · p90 0) | 4792 (p10 3423.8 · p90 6976.1) | 2.76 (p10 2.48 · p90 3.02) | 0 | 0.855 |
| quality-first | $13,535,413 (p10 $12,823,805 · p90 $14,201,963) | $861,446 (p10 $816,320 · p90 $904,205) | 8600 (p10 7748.5 · p90 9446) | 8.27 (p10 8.08 · p90 8.46) | 8.17 (p10 7.98 · p90 8.33) | 0.85 (p10 0.7 · p90 0.95) | $1,400,597 (p10 $1,061,231 · p90 $1,743,269) | 0.07 (p10 0.06 · p90 0.09) | $12,221,541 (p10 $11,548,138 · p90 $12,846,882) | 2 (p10 0 · p90 7) | 23694.5 (p10 20317.6 · p90 28106) | 4.22 (p10 3.99 · p90 4.42) | 0 | 1 |

## Ranking by median end cash

1. **balanced** — $14,725,251 cash, 5695 Prestige
2. **quality-first** — $13,535,413 cash, 8600 Prestige
3. **cheap-duds** — $5,437,036 cash, 150 Prestige

## Average review score by production index (mean across seeds)

- balanced: 5.6 → 5.8 → 6.2 → 7.2 → 7.4 → 7.5 → 7.6 → 7.8 → 7.8 → 7.9 → 8.0 → 8.1 → 8.1 → 8.1 → 8.2 → 8.2 → 8.2 → 8.2 → 8.2 → 8.3 → 8.3 → 8.3 → 8.3 → 8.3 → 8.3 → 8.3 → 8.4 → 8.3 → 8.3 → 8.3 → 8.4 → 8.3 → 8.4 → 8.3 → 8.3 → 8.3 → 8.3 → 8.3 → 8.3 → 8.3 → 8.3 → 8.3 → 8.3 → 8.3 → 8.2 → 8.3 → 8.3 → 8.3 → 8.2 → 8.3
- cheap-duds: 5.5 → 5.6 → 5.7 → 5.8 → 5.8 → 5.8 → 5.9 → 6.0 → 6.0 → 6.1 → 6.2 → 6.2 → 6.3 → 6.3 → 6.3 → 6.3 → 6.3 → 6.4 → 6.4 → 6.4 → 6.5 → 6.5 → 6.5 → 6.5 → 6.5 → 6.5 → 6.6 → 6.5 → 6.5 → 6.6 → 6.5 → 6.5 → 6.5 → 6.6 → 6.6 → 6.6 → 6.6 → 6.5 → 6.6 → 6.5 → 6.5 → 6.6 → 6.5 → 6.5 → 6.5 → 6.5 → 6.5 → 6.4 → 6.4 → 6.5
- quality-first: 5.6 → 5.9 → 6.3 → 7.3 → 7.6 → 7.7 → 7.8 → 7.9 → 8.0 → 8.1 → 8.1 → 8.2 → 8.3 → 8.3 → 8.3 → 8.3 → 8.4 → 8.4 → 8.4 → 8.4 → 8.5 → 8.4 → 8.4 → 8.5 → 8.5 → 8.5 → 8.5 → 8.5 → 8.5 → 8.6 → 8.6 → 8.5 → 8.6 → 8.6 → 8.6 → 8.6 → 8.6 → 8.6 → 8.6 → 8.5 → 8.5 → 8.5 → 8.5 → 8.5 → 8.5 → 8.5 → 8.5 → 8.5 → 8.4 → 8.4
