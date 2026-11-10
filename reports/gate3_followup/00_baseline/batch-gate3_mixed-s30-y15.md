# Batch report — 240 careers

> **Simulation assumptions, not design locks.** All numbers come from provisional config values. Nothing here is official balance.

- Ruleset: `v9.61-movie-kernel-0.1` · Config: `gate3_mixed` (hash `b83a7f2c`)
- Seeds: 1–30 (30 seeds)
- Strategies: balanced, tv-first, renewal-franchise, mixed, streaming-pivot, traditional-holdout, limited-focus, tv-duds
- Productions per career: 20
- Runtime: 8140 ms (measured)
- Modelled: movies; limited series (config-gated); renewable TV seasons: orders, renewal, fatigue, twist, hiatus, announcements, contract variants A/B (config-gated); studio streaming service: engineer build, aggregate subscribers, catalog, Originals (config-gated); distributor advances/royalties/trust; Stars (families, budgets, fallback, callbacks, relationships); marketing + studio buzz; scores + legs; IP fans; Prestige milestones; studio genre levels; trends; staff XP/hire/train; studio staff-capacity cap + upgrade ladder (when configured); theme research + staff pitches
- **Not modelled:** soap operas (shelved); named critics (Gate 2.6 proxy only); eras beyond a gentle quality bar; studio upgrades other than staff capacity + TV unlock; genre unlocks; late-game concurrency; TV spinoffs/reboots, Final Season announcements, other show shake-ups; binge drops; platform upgrades; challenge modes

## Invariant checks

All invariants held across every career (ledger audit, gross = sales only, causal scores, Star budgets, unique Prestige ids, runs terminate).

## Diagnostic flags

| Flag | Fired | Why | Seeds | Implicated |
|---|---|---|---|---|
| EARLY_SOFTLOCK | no | 0/240 careers stuck (hit maxWeeks or >= 52 negative-cash weeks) |  | start.cash, wages, lifeline terms |
| PRESTIGE_TOO_FAST | **YES** | 105/240 careers earn > 400 Prestige/year | 1, 1, 1, 2, 2, 2, 2, 2, 3, 3 | prestige.milestones, prestige.repeatScope |
| PRESTIGE_TOO_SLOW | no | 3/240 careers with >= 10 releases have zero Prestige |  | prestige thresholds vs typical scores |
| QUALITY_INFLATION | **YES** | 166/240 careers: late releases mostly 8+ or > 25% of releases 9+ | 1, 1, 1, 1, 1, 1, 2, 2, 2, 2 | staffGrowth.statGainPerWeek, stars.growthPerProject, studioGenre.qualityBonusPerLevel, production.eraBarPerYear |
| DEAD_STRATEGY | no | no strategy collapses |  | varies by strategy |
| DOMINANT_STRATEGY | no | no policy wins cash AND Prestige in >= 80% of paired seeds |  |  |
| DISTRIBUTOR_TRUST_SPIRAL | no | 0/240 careers end with mean distributor trust < 0.75 |  | distribution.trust* |
| STREAMING_PASSIVE_MONEY_PRINTER | no | NOT APPLICABLE: streaming is not modelled yet (Gate 3) |  |  |
| HIGH_REVIEWS_UNEXPLAINED_LOW_SALES | no | 516 releases with avg >= 7.5 and gross in bottom 20%: 508 explained by small reach, 8 by low awareness (little marketing/Fame/fans), 0 unexplained |  | audience opening/legs model |
| UNSUPPORTED_RULE_ASSUMPTION | **YES** | INFO: results depend on WORKING ASSUMPTIONS (see docs/assumptions-register.md): prestige repeatScope=explicit, staff capacity ladder=[4,6,8], trust formula, offer/heat formula, saturating awareness + diffusion legs, genre XP on completion, staff-pitch rule, all numeric values. |  |  |

## Strategy summary (median, p10–p90)

| Strategy | endCash | cashPerYear | prestige | meanAudience | meanCritic | shareLate8plus | surplusKept | surplusShareOfIncome | royaltyCosts | negativeCashWeeks | maxIpFans | meanTrustEnd | ended negative | any Prestige |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| balanced | $11,864,737 (p10 $11,223,042 · p90 $12,482,652) | $788,316 (p10 $745,536 · p90 $829,511) | 10555 (p10 9398.5 · p90 11604) | 8.46 (p10 8.21 · p90 8.59) | 8.32 (p10 8.06 · p90 8.49) | 0.8 (p10 0.65 · p90 1) | $900,203 (p10 $682,023 · p90 $1,197,915) | 0.04 (p10 0.03 · p90 0.06) | $13,413,448 (p10 $12,584,408 · p90 $14,012,262) | 2 (p10 0 · p90 3) | 95436.5 (p10 72444.5 · p90 136640.4) | 4.34 (p10 3.98 · p90 4.43) | 0 | 1 |
| tv-first | $11,160,676 (p10 $9,818,490 · p90 $12,869,918) | $741,379 (p10 $651,900 · p90 $855,328) | 4565 (p10 3933.5 · p90 5231) | 7.79 (p10 7.53 · p90 8.14) | 7.67 (p10 7.24 · p90 8.12) | 0.67 (p10 0.45 · p90 0.83) | $3,094,966 (p10 $2,585,737 · p90 $4,030,457) | 0.16 (p10 0.14 · p90 0.19) | $11,248,508 (p10 $10,343,592 · p90 $12,276,839) | 3 (p10 0 · p90 8.1) | 87807.5 (p10 69118.5 · p90 108201.1) | 3.6 (p10 3.37 · p90 3.77) | 0 | 1 |
| renewal-franchise | $6,425,948 (p10 $4,162,620 · p90 $10,349,469) | $425,730 (p10 $274,842 · p90 $687,298) | 2347.5 (p10 2032.5 · p90 2723.5) | 6.81 (p10 6.23 · p90 7.24) | 6.71 (p10 6.12 · p90 7.14) | 0 (p10 0 · p90 0) | $3,025,859 (p10 $1,821,305 · p90 $4,277,618) | 0.2 (p10 0.14 · p90 0.23) | $8,228,035 (p10 $7,064,997 · p90 $9,721,561) | 2 (p10 0 · p90 6.2) | 79468.5 (p10 48460.3 · p90 101685.1) | 2.82 (p10 2.54 · p90 3.12) | 0 | 1 |
| mixed | $11,631,752 (p10 $10,700,708 · p90 $12,623,470) | $772,784 (p10 $710,714 · p90 $838,898) | 6755 (p10 6132.5 · p90 7407.5) | 8.25 (p10 8 · p90 8.43) | 8.09 (p10 7.94 · p90 8.27) | 0.86 (p10 0.79 · p90 0.93) | $1,804,630 (p10 $1,355,752 · p90 $2,274,043) | 0.12 (p10 0.09 · p90 0.14) | $9,399,361 (p10 $8,795,418 · p90 $10,079,675) | 2.5 (p10 0 · p90 9) | 46204.5 (p10 37916.5 · p90 53867.1) | 3.75 (p10 3.6 · p90 4.02) | 0 | 1 |
| streaming-pivot | $4,402,716 (p10 $3,482,703 · p90 $5,369,395) | $290,848 (p10 $229,513 · p90 $355,293) | 5720 (p10 5075 · p90 6690) | 8.18 (p10 8.02 · p90 8.49) | 8.11 (p10 7.82 · p90 8.29) | 0.92 (p10 0.61 · p90 1) | $286,271 (p10 $173,494 · p90 $440,290) | 0.04 (p10 0.02 · p90 0.05) | $5,034,053 (p10 $4,209,764 · p90 $5,634,568) | 0.5 (p10 0 · p90 5.2) | 46243 (p10 36130.3 · p90 54180.2) | 3.58 (p10 3.48 · p90 3.87) | 0 | 1 |
| traditional-holdout | $11,841,151 (p10 $10,368,899 · p90 $13,281,698) | $786,744 (p10 $688,593 · p90 $882,780) | 5305 (p10 4367 · p90 6643.5) | 8.04 (p10 7.49 · p90 8.36) | 7.91 (p10 7.6 · p90 8.24) | 0.79 (p10 0.42 · p90 1) | $2,959,144 (p10 $2,389,104 · p90 $3,685,782) | 0.14 (p10 0.13 · p90 0.17) | $12,171,143 (p10 $11,127,639 · p90 $12,790,196) | 2 (p10 0 · p90 6.1) | 81702 (p10 63714.6 · p90 105300.3) | 3.85 (p10 3.59 · p90 4.02) | 0 | 1 |
| limited-focus | $12,504,947 (p10 $12,023,691 · p90 $13,228,323) | $830,997 (p10 $798,912 · p90 $879,221) | 8610 (p10 7545 · p90 9277) | 8.48 (p10 8.33 · p90 8.6) | 8.32 (p10 8.17 · p90 8.46) | 0.94 (p10 0.83 · p90 1) | $2,518,029 (p10 $2,082,542 · p90 $3,027,153) | 0.12 (p10 0.1 · p90 0.14) | $12,403,179 (p10 $11,782,891 · p90 $13,023,366) | 0.5 (p10 0 · p90 4.1) | 20080 (p10 17910.8 · p90 23737.5) | 4.1 (p10 3.92 · p90 4.23) | 0 | 1 |
| tv-duds | $6,965,605 (p10 $6,127,845 · p90 $7,882,943) | $461,707 (p10 $405,856 · p90 $522,863) | 150 (p10 67.5 · p90 325) | 6.27 (p10 6.02 · p90 6.43) | 6.33 (p10 6.18 · p90 6.61) | 0 (p10 0 · p90 0.01) | $1,171,183 (p10 $985,006 · p90 $1,601,740) | 0.13 (p10 0.12 · p90 0.17) | $3,923,101 (p10 $3,318,064 · p90 $4,331,118) | 0 (p10 0 · p90 0) | 7984.5 (p10 4713.3 · p90 13206.6) | 3 (p10 2.58 · p90 3.21) | 0 | 0.9 |

## Ranking by median end cash

1. **limited-focus** — $12,504,947 cash, 8610 Prestige
2. **balanced** — $11,864,737 cash, 10555 Prestige
3. **traditional-holdout** — $11,841,151 cash, 5305 Prestige
4. **mixed** — $11,631,752 cash, 6755 Prestige
5. **tv-first** — $11,160,676 cash, 4565 Prestige
6. **tv-duds** — $6,965,605 cash, 150 Prestige
7. **renewal-franchise** — $6,425,948 cash, 2347.5 Prestige
8. **streaming-pivot** — $4,402,716 cash, 5720 Prestige

## Average review score by production index (mean across seeds)

- balanced: 5.7 → 5.8 → 6.5 → 7.1 → 7.3 → 7.5 → 7.8 → 7.9 → 8.2 → 8.2 → 8.5 → 8.5 → 8.6 → 8.6 → 8.5 → 8.7 → 8.4 → 8.8 → 8.7 → 8.6 → 8.8 → 8.7 → 8.7 → 8.7 → 8.5 → 8.7 → 8.6 → 8.8 → 8.6 → 8.8 → 8.9 → 8.6 → 8.9 → 8.6 → 8.7 → 8.7 → 8.7 → 8.6 → 8.6 → 8.7 → 8.7 → 8.5 → 8.5 → 8.7 → 8.7 → 8.7 → 8.8 → 8.5
- tv-first: 5.5 → 5.8 → 6.1 → 7.3 → 7.5 → 7.6 → 7.8 → 8.2 → 8.1 → 8.2 → 8.2 → 8.1 → 8.0 → 7.6 → 7.2 → 7.4 → 8.4 → 8.7 → 8.7 → 8.5 → 8.2 → 7.8 → 7.3 → 7.6 → 8.3 → 8.7 → 8.7 → 8.3 → 8.9
- renewal-franchise: 5.5 → 5.8 → 6.4 → 7.2 → 7.5 → 7.7 → 7.8 → 8.1 → 8.1 → 8.1 → 8.1 → 8.0 → 7.8 → 7.4 → 6.9 → 6.4 → 6.2 → 6.0 → 6.0 → 6.0 → 5.9 → 6.0 → 6.0 → 5.9 → 5.9 → 5.9 → 5.9 → 5.8 → 5.8 → 5.8 → 5.6 → 5.8 → 5.3
- mixed: 5.5 → 5.9 → 6.3 → 7.3 → 7.5 → 7.7 → 7.7 → 8.0 → 8.1 → 8.2 → 8.4 → 8.3 → 8.4 → 8.4 → 8.4 → 8.4 → 8.5 → 8.5 → 8.6 → 8.3 → 8.2 → 8.4 → 8.3 → 8.2 → 8.6 → 8.9 → 8.7 → 8.7 → 9.0 → 8.9 → 8.8 → 8.7 → 8.8 → 8.8 → 8.8
- streaming-pivot: 5.6 → 5.9 → 6.3 → 7.2 → 7.5 → 7.6 → 7.7 → 8.0 → 8.2 → 8.2 → 8.3 → 8.4 → 8.3 → 8.6 → 8.6 → 8.5 → 8.6 → 8.7 → 8.7 → 8.8 → 8.9 → 8.9 → 8.7 → 8.7 → 8.6 → 8.4 → 8.5 → 8.6 → 8.5 → 8.6 → 8.7 → 8.5 → 8.4 → 8.4 → 8.4
- traditional-holdout: 5.5 → 5.8 → 6.2 → 7.3 → 7.5 → 7.6 → 7.9 → 8.1 → 8.1 → 8.2 → 8.2 → 8.2 → 8.1 → 8.2 → 8.3 → 8.4 → 8.4 → 8.3 → 8.3 → 8.2 → 8.5 → 8.6 → 8.3 → 8.5 → 8.6 → 8.6 → 8.3 → 8.4 → 8.6 → 9.0 → 9.4 → 8.9
- limited-focus: 5.7 → 5.9 → 6.4 → 7.3 → 7.4 → 7.7 → 7.8 → 8.1 → 8.1 → 8.3 → 8.4 → 8.4 → 8.5 → 8.6 → 8.6 → 8.8 → 8.8 → 8.5 → 8.8 → 8.8 → 8.8 → 8.7 → 8.8 → 8.8 → 8.6 → 8.6 → 8.9 → 8.7 → 8.8 → 8.6 → 8.7 → 9.0 → 9.1 → 9.0 → 8.8 → 8.8 → 8.7 → 8.7 → 8.7 → 8.7 → 8.8 → 8.8 → 8.9
- tv-duds: 5.4 → 5.6 → 5.6 → 5.8 → 5.8 → 5.9 → 6.0 → 6.1 → 6.1 → 6.0 → 6.3 → 6.2 → 6.3 → 6.2 → 6.2 → 6.4 → 6.3 → 6.3 → 6.5 → 6.5 → 6.4 → 6.5 → 6.3 → 6.6 → 6.4 → 6.4 → 6.5 → 6.6 → 6.5 → 6.6 → 6.4 → 6.7 → 6.5 → 6.5 → 6.3 → 6.5 → 6.6 → 6.6 → 6.4 → 6.4 → 6.5 → 6.5 → 6.7 → 6.7 → 6.4 → 6.3 → 6.4 → 6.4

## Great films (Hall of Fame, 9+, best films)

Hall of Fame = average of Audience and Critic ≥ 9.0 (`scoring.hofThreshold`). `≥9` inclusive, `>9` strict. Percentages show the film count they are out of. Full detail: `.great.csv`.

| Strategy | Window | Films (n) | Avg Aud | Avg Crit | HoF n (%) | Avg ≥9 n (%) | Avg >9 n (%) | Aud ≥9 n (%) | Crit ≥9 n (%) | 8+ n (%) | Careers with 0 HoF | HoF/career p10/p50/p90 | Best/career p10/p50/p90/p99 | Best combined movie | Prestige median |
|---|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---|---|---|---:|
| balanced | 1-5 | 150 | 6.42 | 6.52 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 3 (2.0%) | 100% of 30 | 0/0/0 | 6.91/7.48/7.99/8.2 | 8.21 "Iron Horizon" (A7.81/C8.6; balanced seed 16 #5, yr 1.5, critic gen 0) |  |
| balanced | 6-20 | 450 | 8.45 | 8.31 | 80 (17.8%) | 80 (17.8%) | 79 (17.6%) | 107 (23.8%) | 115 (25.6%) | 333 (74.0%) | 10% of 30 | 0.9/2.5/5 | 9.06/9.43/9.73/9.77 | 9.77 "Last Night" (A10/C9.54; balanced seed 16 #18, yr 5.5, critic gen 0) |  |
| balanced | all | 1440 | 8.43 | 8.29 | 400 (27.8%) | 400 (27.8%) | 385 (26.7%) | 519 (36.0%) | 459 (31.9%) | 1027 (71.3%) | 0% of 30 | 8/14/17 | 9.54/9.79/10/10 | 10.00 "Dead Protocol" (A10/C10; balanced seed 6 #32, yr 9.8, critic gen 0) | 10555 |
| tv-first | 1-5 | 150 | 6.38 | 6.49 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 4 (2.7%) | 100% of 30 | 0/0/0 | 7.09/7.6/8.01/8.32 | 8.41 "Silver Pulse" (limited_series, A8.65/C8.16; tv-first seed 8 #5, yr 1.7, critic gen 0) |  |
| tv-first | 6-20 | 450 | 8.17 | 7.92 | 53 (11.8%) | 53 (11.8%) | 48 (10.7%) | 90 (20.0%) | 52 (11.6%) | 244 (54.2%) | 40% of 30 | 0/1.5/4 | 8.4/9.12/9.59/9.91 | 10.00 "Midnight Rising: Season 2" (tv, A10/C10; tv-first seed 21 #19, yr 7.5, critic gen 0) |  |
| tv-first | all | 805 | 7.83 | 7.67 | 83 (10.3%) | 83 (10.3%) | 76 (9.4%) | 131 (16.3%) | 96 (11.9%) | 364 (45.2%) | 20% of 30 | 0/3/5.1 | 8.83/9.25/9.6/9.94 | 10.00 "Midnight Rising: Season 2" (tv, A10/C10; tv-first seed 21 #19, yr 7.5, critic gen 0) | 4565 |
| renewal-franchise | 1-5 | 150 | 6.44 | 6.54 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 1 (0.7%) | 10 (6.7%) | 100% of 30 | 0/0/0 | 7.15/7.74/8.23/8.77 | 8.91 "Midnight Rising" (A8.47/C9.36; renewal-franchise seed 15 #5, yr 1.5, critic gen 0) |  |
| renewal-franchise | 6-20 | 450 | 7.31 | 7.15 | 9 (2.0%) | 9 (2.0%) | 9 (2.0%) | 30 (6.7%) | 15 (3.3%) | 121 (26.9%) | 87% of 30 | 0/0/1 | 8.19/8.52/9.12/9.47 | 9.59 "Red Run: Season 4" (tv, A9.52/C9.65; renewal-franchise seed 27 #13, yr 4.8, critic gen 0) |  |
| renewal-franchise | all | 879 | 6.73 | 6.62 | 9 (1.0%) | 9 (1.0%) | 9 (1.0%) | 30 (3.4%) | 16 (1.8%) | 131 (14.9%) | 87% of 30 | 0/0/1 | 8.19/8.52/9.12/9.47 | 9.59 "Red Run: Season 4" (tv, A9.52/C9.65; renewal-franchise seed 27 #13, yr 4.8, critic gen 0) | 2347.5 |
| mixed | 1-5 | 150 | 6.46 | 6.59 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 6 (4.0%) | 100% of 30 | 0/0/0 | 7.19/7.67/8.12/8.28 | 8.28 "Dead Storm" (limited_series, A8.53/C8.03; mixed seed 14 #5, yr 1.7, critic gen 0) |  |
| mixed | 6-20 | 450 | 8.34 | 8.15 | 54 (12.0%) | 54 (12.0%) | 52 (11.6%) | 94 (20.9%) | 73 (16.2%) | 303 (67.3%) | 20% of 30 | 0/2/4 | 8.77/9.27/9.73/9.93 | 10.00 "Wild Legacy" (limited_series, A10/C10; mixed seed 21 #17, yr 6.0, critic gen 0) |  |
| mixed | all | 1036 | 8.23 | 8.09 | 203 (19.6%) | 203 (19.6%) | 201 (19.4%) | 286 (27.6%) | 243 (23.5%) | 678 (65.4%) | 0% of 30 | 4/7/9 | 9.46/9.67/9.86/10 | 10.00 "Last Rising" (A10/C10; mixed seed 9 #35, yr 14.7, critic gen 0) | 6755 |
| streaming-pivot | 1-5 | 150 | 6.40 | 6.57 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 6 (4.0%) | 100% of 30 | 0/0/0 | 7.23/7.72/8.3/8.37 | 8.37 "Iron Pulse" (A7.98/C8.75; streaming-pivot seed 15 #5, yr 1.5, critic gen 0) |  |
| streaming-pivot | 6-20 | 450 | 8.44 | 8.23 | 74 (16.4%) | 74 (16.4%) | 72 (16.0%) | 108 (24.0%) | 93 (20.7%) | 316 (70.2%) | 7% of 30 | 1/2.5/4.1 | 9.1/9.39/9.63/9.7 | 9.70 "Last Code" (A10/C9.4; streaming-pivot seed 22 #17, yr 5.2, critic gen 0) |  |
| streaming-pivot | all | 946 | 8.22 | 8.08 | 181 (19.1%) | 181 (19.1%) | 178 (18.8%) | 245 (25.9%) | 219 (23.1%) | 607 (64.2%) | 0% of 30 | 3/6/9 | 9.38/9.53/9.83/10 | 10.00 "Silver Night" (movie/original, A10/C10; streaming-pivot seed 9 #28, yr 11.1, critic gen 0) | 5720 |
| traditional-holdout | 1-5 | 150 | 6.42 | 6.52 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 8 (5.3%) | 100% of 30 | 0/0/0 | 7.33/7.67/8.18/8.47 | 8.50 "Silver Pulse" (A8.76/C8.24; traditional-holdout seed 8 #5, yr 1.6, critic gen 0) |  |
| traditional-holdout | 6-20 | 450 | 8.18 | 8.15 | 45 (10.0%) | 45 (10.0%) | 42 (9.3%) | 66 (14.7%) | 67 (14.9%) | 275 (61.1%) | 40% of 30 | 0/1/4 | 8.49/9.12/9.45/9.71 | 9.78 "Broken Signal" (tv, A9.72/C9.84; traditional-holdout seed 18 #12, yr 4.0, critic gen 0) |  |
| traditional-holdout | all | 855 | 8.01 | 7.92 | 116 (13.6%) | 116 (13.6%) | 112 (13.1%) | 170 (19.9%) | 144 (16.8%) | 477 (55.8%) | 10% of 30 | 0.9/4/7 | 9.03/9.38/9.71/9.79 | 9.79 "Last Edge" (tv, A9.58/C10; traditional-holdout seed 11 #24, yr 10.4, critic gen 0) | 5305 |
| limited-focus | 1-5 | 150 | 6.53 | 6.58 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 4 (2.7%) | 100% of 30 | 0/0/0 | 7.21/7.58/7.98/8.22 | 8.25 "Iron Frequency" (limited_series, A8.5/C7.99; limited-focus seed 29 #4, yr 1.4, critic gen 0) |  |
| limited-focus | 6-20 | 450 | 8.48 | 8.34 | 79 (17.6%) | 79 (17.6%) | 74 (16.4%) | 104 (23.1%) | 114 (25.3%) | 341 (75.8%) | 3% of 30 | 1/3/4 | 9.13/9.47/9.99/10 | 10.00 "Red Run" (limited_series, A10/C10; limited-focus seed 10 #20, yr 6.9, critic gen 0) |  |
| limited-focus | all | 1290 | 8.47 | 8.32 | 320 (24.8%) | 320 (24.8%) | 308 (23.9%) | 485 (37.6%) | 408 (31.6%) | 979 (75.9%) | 0% of 30 | 7/11/14 | 9.59/9.79/10/10 | 10.00 "Iron Frequency" (limited_series, A10/C10; limited-focus seed 6 #29, yr 10.0, critic gen 0) | 8610 |
| tv-duds | 1-5 | 150 | 5.62 | 5.69 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 100% of 30 | 0/0/0 | 5.74/6.11/6.51/6.56 | 6.57 "Lost Horizon" (A6.18/C6.96; tv-duds seed 27 #4, yr 1.2, critic gen 0) |  |
| tv-duds | 6-20 | 450 | 6.12 | 6.27 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 100% of 30 | 0/0/0 | 6.82/7.23/7.48/7.84 | 7.90 "Silver Storm" (A7.79/C8; tv-duds seed 7 #16, yr 4.9, critic gen 0) |  |
| tv-duds | all | 1438 | 6.25 | 6.37 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 3 (0.2%) | 100% of 30 | 0/0/0 | 7.33/7.62/8.01/8.25 | 8.26 "Dead Frequency" (A8.06/C8.46; tv-duds seed 6 #43, yr 13.2, critic gen 0) | 150 |
| ALL | 1-5 | 1200 | 6.33 | 6.44 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 1 (0.1%) | 41 (3.4%) | 100% of 240 | 0/0/0 | 6.35/7.58/8.11/8.41 | 8.91 "Midnight Rising" (A8.47/C9.36; renewal-franchise seed 15 #5, yr 1.5, critic gen 0) |  |
| ALL | 6-20 | 3600 | 7.94 | 7.82 | 394 (10.9%) | 394 (10.9%) | 376 (10.4%) | 599 (16.6%) | 529 (14.7%) | 1933 (53.7%) | 38% of 240 | 0/1/4 | 7.36/9.17/9.69/10 | 10.00 "Red Run" (limited_series, A10/C10; limited-focus seed 10 #20, yr 6.9, critic gen 0) |  |
| ALL | all | 8689 | 7.76 | 7.67 | 1312 (15.1%) | 1312 (15.1%) | 1269 (14.6%) | 1866 (21.5%) | 1585 (18.2%) | 4266 (49.1%) | 27% of 240 | 0/5/13 | 7.88/9.49/9.87/10 | 10.00 "Iron Frequency" (limited_series, A10/C10; limited-focus seed 6 #29, yr 10.0, critic gen 0) | — |

## Gate 3: formats, TV and streaming

| Strategy | (a) cash median | min cash | ever negative | (b) Prestige | (c) TV unlock yr (share) | streaming live yr (share) | subs end | payback yrs (share) | (d) IPs ≥10K fans | shows · seasons · max | (e) HoF / career | (f) last-12-mo mix: traditional / subs / opex | streaming share | releases |
|---|---:|---:|---:|---:|---|---|---:|---|---:|---|---:|---|---:|---:|
| balanced | $11.86M | $-3K | 70% | 10,555 | — (0%) | — (0%) | — | — (0%) | 19.0 | 0.0 · 0.0 · 0.0 | 14.0 | $1.37M / $0.00M / $0.00M | — | 48 |
| tv-first | $11.16M | $-5K | 70% | 4,565 | 2.7 (100%) | — (0%) | — | — (0%) | 3.0 | 3.0 · 19.0 · 8.0 | 3.0 | $1.26M / $0.00M / $0.00M | — | 27 |
| renewal-franchise | $6.43M | $-4K | 67% | 2,348 | 2.5 (100%) | — (0%) | — | — (0%) | 1.0 | 1.0 · 22.0 · 22.0 | 0.0 | $0.70M / $0.00M / $0.00M | — | 29 |
| mixed | $11.63M | $-4K | 73% | 6,755 | 2.7 (100%) | 7.6 (100%) | 84,456 | 1.8 (100%) | 8.0 | 2.0 · 9.0 · 6.0 | 7.0 | $0.69M / $2.17M / $-1.07M | 76% | 35 |
| streaming-pivot | $4.40M | $0K | 50% | 5,720 | 2.5 (100%) | 6.4 (100%) | 85,882 | 1.1 (100%) | 4.0 | 2.0 · 9.0 · 6.0 | 6.0 | $0.00M / $2.21M / $-1.08M | 100% | 32 |
| traditional-holdout | $11.84M | $-3K | 67% | 5,305 | 2.5 (100%) | — (0%) | — | — (0%) | 4.0 | 3.0 · 15.0 · 6.0 | 4.0 | $1.32M / $0.00M / $0.00M | — | 29 |
| limited-focus | $12.50M | $0K | 50% | 8,610 | 2.7 (100%) | — (0%) | — | — (0%) | 14.5 | 0.0 · 0.0 · 0.0 | 11.0 | $1.43M / $0.00M / $0.00M | — | 43 |
| tv-duds | $6.97M | $4K | 3% | 150 | 12.0 (13%) | — (0%) | — | — (0%) | 0.0 | 0.0 · 0.0 · 0.0 | 0.0 | $0.55M / $0.00M / $0.00M | — | 48 |

| Strategy | limited_series: share · avg · HoF% · net/prod-wk | limited_series/original: share · avg · HoF% · net/prod-wk | movie: share · avg · HoF% · net/prod-wk | movie/original: share · avg · HoF% · net/prod-wk | tv: share · avg · HoF% · net/prod-wk | tv/original: share · avg · HoF% · net/prod-wk | Prestige by format | top Prestige sources |
|---|---|---|---|---|---|---|---|---|
| balanced | — | — | 100% · 8.36 · 27.8% · $26.7K | — | — | — | movie 100% | audience_7_5 28%, hall_of_fame 25.3%, meters_all_70 20.3%, critic_8_5 17.8% |
| tv-first | 26% · 7.18 · 1% · $20.9K | — | 4% · 5.49 · 0% · $9.3K | — | 70% · 8.08 · 14.3% · $27.6K | — | limited_series 8.9%, tv 91.1% | audience_7_5 28.6%, meters_all_70 22.7%, hall_of_fame 12%, critic_8_5 11.7% |
| renewal-franchise | — | — | 26% · 6.94 · 0.9% · $18.1K | — | 74% · 6.59 · 1.1% · $20.2K | — | movie 16%, tv 84% | meters_all_70 49.3%, audience_7_5 24%, critic_8_5 7.2%, ip_viewers_500k 6.2% |
| mixed | 38% · 7.85 · 11.1% · $25.3K | 8% · 8.79 · 38% · $-8.2K | 22% · 8.19 · 26.2% · $25.3K | 7% · 8.7 · 32.9% · $-7.6K | 21% · 8.19 · 11.7% · $28.2K | 6% · 8.57 · 37.9% · $-8.4K | limited_series 25.6%, tv 26%, movie 22.6%, limited_series/original 9.6%, movie/original 8.3%, tv/original 7.8% | audience_7_5 30.3%, meters_all_70 21.1%, hall_of_fame 20.1%, critic_8_5 16.8% |
| streaming-pivot | — | — | 66% · 7.91 · 13.7% · $24.0K | 7% · 8.83 · 36.4% · $-7.5K | — | 27% · 8.54 · 27.8% · $-8.3K | movie 54.4%, movie/original 9.3%, tv/original 36.2% | audience_7_5 31.9%, meters_all_70 22.5%, hall_of_fame 20.9%, critic_8_5 18.9% |
| traditional-holdout | 14% · 7.91 · 15.7% · $24.9K | — | 33% · 7.48 · 8.2% · $21.3K | — | 54% · 8.28 · 16.3% · $28.6K | — | limited_series 10.7%, movie 18.6%, tv 70.7% | audience_7_5 28.6%, meters_all_70 21.3%, critic_8_5 14.9%, hall_of_fame 14.4% |
| limited-focus | 98% · 8.46 · 25.4% · $27.8K | — | 2% · 5.7 · 0% · $9.9K | — | — | — | limited_series 100% | audience_7_5 31.2%, hall_of_fame 24.8%, meters_all_70 21.7%, critic_8_5 19.6% |
| tv-duds | — | — | 97% · 6.32 · 0% · $11.7K | — | 3% · 5.99 · 0% · $9.3K | — | movie 79.4%, tv 20.6% | audience_7_5 84.2%, ip_viewers_500k 9.5%, ip_gross_1m 6.3% |

Provisional flags:

- **STREAMING_INFINITE_GROWTH**: 2/60 launched careers reached ≥90% of the reachable subscriber market (growth is capped by design; this flags saturation) [PROVISIONAL threshold]
- SUBSCRIBER_CHURN_SPIRAL: not fired: 0/60 launched careers lost >60% of subscribers within 3 years [PROVISIONAL threshold]
- TV_SEASON_TOO_PROFITABLE: not fired: 18/1873 finished traditional TV seasons netted >2× the batch's pooled movie net per production week ($20,201) [PROVISIONAL threshold]
- **TV_SEASON_TOO_LONG**: 31 careers kept one show running ≥12 seasons (fatigue cap 0.35 may allow endless renewals) [PROVISIONAL threshold]
- TV_NO_RENEWAL_PATH: not fired: 0/124 TV careers never made a second season [PROVISIONAL threshold]
- MIXED_ECONOMY_SOFTLOCK: not fired: 0/240 careers spent ≥3 years with negative cash [PROVISIONAL threshold]
- FORMAT_DOMINANT: not fired: best cash: limited-focus; best Prestige: balanced; fires only if one strategy leads both by >50% [PROVISIONAL threshold]
- DELAYED_STUDIO_PROGRESSION: not fired: TV not unlocked by year 8: 0/120; streaming not live by year 15: 0/60 [PROVISIONAL threshold]

## Prestige progression

| Strategy | Cash median | Prestige median | Prestige/yr | Careers with negative-cash weeks | →6 gate met (Prestige ≥ 200) · median film # | →6 bought · median film # | →6 cash-rich but Prestige-locked | →6 bought below gate | →8 gate met (Prestige ≥ 1000) · median film # | →8 bought · median film # | →8 cash-rich but Prestige-locked | →8 bought below gate |
|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|
| balanced | $11.86M | 10555 | 703.7 | 70% | 100% · #6.5 | 100% · #7 | 100% | 0 | 100% · #10.5 | 100% · #11 | 100% | 0 |
| tv-first | $11.16M | 4565 | 304.3 | 70% | 100% · #7 | 100% · #7 | 100% | 0 | 100% · #11 | 100% · #12 | 100% | 0 |
| renewal-franchise | $6.43M | 2347.5 | 156.5 | 67% | 100% · #7 | 100% · #7 | 100% | 0 | 100% · #11 | 100% · #11.5 | 100% | 0 |
| mixed | $11.63M | 6755 | 450.3 | 73% | 100% · #7 | 100% · #7 | 100% | 0 | 100% · #12 | 100% · #12 | 100% | 0 |
| streaming-pivot | $4.40M | 5720 | 381.3 | 50% | 100% · #7 | 100% · #7 | 100% | 0 | 100% · #12 | 100% · #12 | 100% | 0 |
| traditional-holdout | $11.84M | 5305 | 353.7 | 67% | 100% · #7 | 100% · #7 | 100% | 0 | 100% · #12 | 100% · #12 | 100% | 0 |
| limited-focus | $12.50M | 8610 | 574 | 50% | 100% · #7 | 100% · #7 | 100% | 0 | 100% · #12 | 100% · #12 | 100% | 0 |
| tv-duds | $6.97M | 150 | 10 | 3% | 47% · #40.5 | 0% · #— | 100% | 0 | 0% · #— | 0% · #— | 0% | 0 |
