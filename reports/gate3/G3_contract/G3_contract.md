# Experiment: G3_contract

> **Simulation assumptions, not design locks.** Paired seeds: every variant runs the same seeds and strategies; only the config overrides differ.

OPEN contract question: A = per-season pitch; B = continuing partner with explicit per-season advance function. Same seeds/strategies; only tv.contract.variant changes.

- Seeds 1–200 (200) · strategies: tv-first, renewal-franchise, traditional-holdout, mixed, tv-duds · reference variant: **A_per_season**
- Ruleset v9.61-gate3-0.1 · measured runtime 125732 ms for 4000 careers

| Variant | Config hash | Note |
|---|---|---|
| A_per_season | e7520159 |  `{"tv":{"contract":{"variant":"A"}}}` |
| B_partner | 59b14b7c |  `{"tv":{"contract":{"variant":"B"}}}` |

## 10-year careers (in-game calendar horizon; productions vary by strategy)

Invariant violations across all variants: **0**.

### Medians by strategy

| Strategy | Variant | endCash | prestige | prestigePerRelease | meanAudience | meanCritic | share8plus | share9plus | shareLate8plus | hofShare | maxStaffEnd | staffCount | meanStaffStat | upgrades | firstUpgradeWeek | years | maxIpFans | negativeCashWeeks |
|---|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|
| tv-first | A_per_season | $5840K | 3115 | 148.10 | 7.69 | 7.63 | 42% | 0% | 56% | 0% | 8 | 8 | 71.35 | 2 | 124 | 10 | 86425.50 | 2 |
| tv-first | B_partner | $4191K | 3035 | 143.65 | 7.70 | 7.61 | 42% | 0% | 56% | 0% | 8 | 8 | 71.30 | 2 | 124 | 10 | 81582.50 | 2 |
| renewal-franchise | A_per_season | $3829K | 1950 | 88.60 | 6.96 | 6.81 | 17% | 0% | 0% | 0% | 8 | 8 | 72.40 | 2 | 112 | 10 | 77851.50 | 1 |
| renewal-franchise | B_partner | $1653K | 1960 | 88.35 | 6.96 | 6.81 | 17% | 0% | 0% | 0% | 8 | 8 | 72.30 | 2 | 112 | 10 | 70144.50 | 1 |
| traditional-holdout | A_per_season | $6305K | 3705 | 166.25 | 7.89 | 7.83 | 52% | 9% | 78% | 9% | 8 | 8 | 72.20 | 2 | 114 | 10 | 78623 | 2 |
| traditional-holdout | B_partner | $5168K | 3655 | 165.80 | 7.90 | 7.81 | 52% | 9% | 78% | 9% | 8 | 8 | 72.20 | 2 | 114 | 10 | 78552.50 | 2 |
| mixed | A_per_season | $5993K | 4070 | 165.60 | 8 | 7.88 | 56% | 12% | 73% | 12% | 8 | 8 | 72.10 | 2 | 124 | 10 | 61419.50 | 2 |
| mixed | B_partner | $5055K | 4082.50 | 166.75 | 7.98 | 7.91 | 56% | 12% | 80% | 12% | 8 | 8 | 72.20 | 2 | 124 | 10 | 56702.50 | 2 |
| tv-duds | A_per_season | $4294K | 75 | 2.30 | 6.18 | 6.33 | 0% | 0% | 0% | 0% | 4 | 2 | 69.40 | 0 | — | 10 | 6614.50 | 0 |
| tv-duds | B_partner | $4261K | 75 | 2.30 | 6.18 | 6.33 | 0% | 0% | 0% | 0% | 4 | 2 | 69.40 | 0 | — | 10 | 6614.50 | 0 |

### Paired deltas vs **A_per_season** (median of per-seed differences; share of seeds where the variant is higher)

| Strategy | Variant | Δ endCash | Δ prestige | Δ share8plus | Δ meanAudience |
|---|---|---:|---:|---:|---:|
| tv-first | B_partner | $-1577K (1%) | 0 (23%) | 0% (19%) | 0 (30%) |
| renewal-franchise | B_partner | $-1980K (0%) | 0 (6%) | 0% (1%) | 0 (5%) |
| traditional-holdout | B_partner | $-1242K (4%) | 7.50 (50%) | 0% (40%) | 0 (47%) |
| mixed | B_partner | $-894K (3%) | -15 (45%) | 0% (26%) | -0.00 (41%) |
| tv-duds | B_partner | $0K (0%) | 0 (0%) | 0% (0%) | 0 (0%) |

### Mean review score (avg of Audience+Critic) by production index

| Strategy | Variant | #1 | #3 | #5 | #10 | #20 | #30 | #50 |
|---|---|---:|---:|---:|---:|---:|---:|---:|
| tv-first | A_per_season | 5.60 | 6.31 | 7.44 | 8.18 | 8.32 | — | — |
| tv-first | B_partner | 5.60 | 6.31 | 7.44 | 8.18 | 8.30 | — | — |
| renewal-franchise | A_per_season | 5.65 | 6.33 | 7.40 | 8.04 | 5.84 | — | — |
| renewal-franchise | B_partner | 5.65 | 6.33 | 7.40 | 8.03 | 5.82 | — | — |
| traditional-holdout | A_per_season | 5.62 | 6.29 | 7.39 | 8.19 | 8.47 | — | — |
| traditional-holdout | B_partner | 5.62 | 6.29 | 7.39 | 8.19 | 8.42 | — | — |
| mixed | A_per_season | 5.62 | 6.33 | 7.43 | 8.24 | 8.33 | — | — |
| mixed | B_partner | 5.62 | 6.33 | 7.43 | 8.24 | 8.43 | — | — |
| tv-duds | A_per_season | 5.47 | 5.72 | 5.85 | 6.08 | 6.44 | 6.61 | — |
| tv-duds | B_partner | 5.47 | 5.72 | 5.85 | 6.08 | 6.44 | 6.61 | — |

### Great films — all strategies pooled, by release window

Denominators are films in that window. HoF = average of Audience and Critic ≥ hofThreshold (9.0). `≥9` is inclusive, `>9` strict.

| Strategy | Config | Window | Films (n) | Avg Aud | Avg Crit | HoF n (%) | Avg ≥9 n (%) | Avg >9 n (%) | Aud ≥9 n (%) | Crit ≥9 n (%) | 8+ n (%) | Careers with 0 HoF | HoF/career p10/p50/p90 | Best/career p10/p50/p90/p99 | Best combined movie | Prestige median |
|---|---|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---|---|---|---:|
| ALL | A_per_season | 1-5 | 5000 | 6.29 | 6.36 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 1 (0.0%) | 140 (2.8%) | 100% of 1000 | 0/0/0 | 6.22/7.48/8.09/8.59 | 8.91 "Midnight Rising" (A8.47/C9.36; renewal-franchise seed 15 #5, yr 1.5, critic gen 0) |  |
| ALL | A_per_season | 6-20 | 14957 | 7.59 | 7.52 | 1112 (7.4%) | 1112 (7.4%) | 1059 (7.1%) | 1693 (11.3%) | 1460 (9.8%) | 6195 (41.4%) | 58% of 1000 | 0/0/4 | 7.15/8.81/9.5/10 | 10.00 "Wild Legacy" (limited_series, A10/C10; mixed seed 21 #17, yr 6.0, critic gen 0) |  |
| ALL | A_per_season | 21-50 | 4354 | 7.07 | 7.10 | 376 (8.6%) | 376 (8.6%) | 362 (8.3%) | 450 (10.3%) | 426 (9.8%) | 1083 (24.9%) | 72% of 890 | 0/0/2 | 5.8/7.93/9.48/9.83 | 10.00 "Silver Night" (A10/C10; traditional-holdout seed 43 #26, yr 9.3, critic gen 0) |  |
| ALL | A_per_season | 51-100 | 0 | NaN | NaN | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0% of 0 | — | — | — |  |
| ALL | A_per_season | all | 24311 | 7.23 | 7.21 | 1488 (6.1%) | 1488 (6.1%) | 1421 (5.8%) | 2143 (8.8%) | 1887 (7.8%) | 7418 (30.5%) | 53% of 1000 | 0/0/4 | 7.48/8.91/9.61/10 | 10.00 "Wild Legacy" (limited_series, A10/C10; mixed seed 21 #17, yr 6.0, critic gen 0) |  |
| ALL | B_partner | 1-5 | 5000 | 6.29 | 6.36 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 1 (0.0%) | 140 (2.8%) | 100% of 1000 | 0/0/0 | 6.22/7.48/8.09/8.59 | 8.91 "Midnight Rising" (A8.47/C9.36; renewal-franchise seed 15 #5, yr 1.5, critic gen 0) |  |
| ALL | B_partner | 6-20 | 14957 | 7.59 | 7.53 | 1109 (7.4%) | 1109 (7.4%) | 1060 (7.1%) | 1698 (11.3%) | 1453 (9.7%) | 6198 (41.4%) | 58% of 1000 | 0/0/4 | 7.15/8.82/9.53/9.83 | 10.00 "Iron Protocol" (limited_series, A10/C10; mixed seed 38 #18, yr 6.3, critic gen 0) |  |
| ALL | B_partner | 21-50 | 4391 | 7.08 | 7.09 | 351 (8.0%) | 351 (8.0%) | 339 (7.7%) | 467 (10.6%) | 404 (9.2%) | 1078 (24.6%) | 75% of 890 | 0/0/2 | 5.8/7.85/9.48/10 | 10.00 "Dead Legacy" (movie/original, A10/C10; mixed seed 21 #25, yr 9.7, critic gen 0) |  |
| ALL | B_partner | 51-100 | 0 | NaN | NaN | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0% of 0 | — | — | — |  |
| ALL | B_partner | all | 24348 | 7.23 | 7.21 | 1460 (6.0%) | 1460 (6.0%) | 1399 (5.8%) | 2165 (8.9%) | 1858 (7.6%) | 7416 (30.5%) | 54% of 1000 | 0/0/4 | 7.48/8.9/9.64/10 | 10.00 "Dead Legacy" (movie/original, A10/C10; mixed seed 21 #25, yr 9.7, critic gen 0) |  |

### Great films by strategy (whole career)

| Strategy | Config | Window | Films (n) | Avg Aud | Avg Crit | HoF n (%) | Avg ≥9 n (%) | Avg >9 n (%) | Aud ≥9 n (%) | Crit ≥9 n (%) | 8+ n (%) | Careers with 0 HoF | HoF/career p10/p50/p90 | Best/career p10/p50/p90/p99 | Best combined movie | Prestige median |
|---|---|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---|---|---|---:|
| tv-first | A_per_season | all | 4177 | 7.66 | 7.57 | 311 (7.5%) | 311 (7.5%) | 294 (7.0%) | 453 (10.8%) | 369 (8.8%) | 1654 (39.6%) | 51% of 200 | 0/0/4 | 8.4/8.98/9.5/10 | 10.00 "Midnight Rising: Season 2" (tv, A10/C10; tv-first seed 21 #19, yr 7.5, critic gen 0) | 3115 |
| renewal-franchise | A_per_season | all | 4411 | 6.92 | 6.82 | 44 (1.0%) | 44 (1.0%) | 39 (0.9%) | 139 (3.1%) | 82 (1.9%) | 807 (18.3%) | 91% of 200 | 0/0/0 | 8.07/8.5/8.93/9.46 | 9.59 "Red Run: Season 4" (tv, A9.52/C9.65; renewal-franchise seed 27 #13, yr 4.8, critic gen 0) | 1950 |
| traditional-holdout | A_per_season | all | 4395 | 7.87 | 7.80 | 495 (11.3%) | 495 (11.3%) | 481 (10.9%) | 699 (15.9%) | 634 (14.4%) | 2207 (50.2%) | 18% of 200 | 0/2/5.1 | 8.77/9.32/9.76/10 | 10.00 "Silver Night" (A10/C10; traditional-holdout seed 43 #26, yr 9.3, critic gen 0) | 3705 |
| mixed | A_per_season | all | 4928 | 7.99 | 7.88 | 638 (12.9%) | 638 (12.9%) | 607 (12.3%) | 852 (17.3%) | 802 (16.3%) | 2741 (55.6%) | 4% of 200 | 1/3/5 | 9.13/9.46/9.75/10 | 10.00 "Wild Legacy" (limited_series, A10/C10; mixed seed 21 #17, yr 6.0, critic gen 0) | 4070 |
| tv-duds | A_per_season | all | 6400 | 6.16 | 6.31 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 9 (0.1%) | 100% of 200 | 0/0/0 | 7.17/7.47/7.82/8.12 | 8.21 "Silver Pulse" (A8.07/C8.34; tv-duds seed 171 #31, yr 9.5, critic gen 0) | 75 |
| tv-first | B_partner | all | 4184 | 7.67 | 7.56 | 309 (7.4%) | 309 (7.4%) | 295 (7.0%) | 507 (12.1%) | 350 (8.4%) | 1632 (39.0%) | 53% of 200 | 0/0/5 | 8.36/8.96/9.57/10 | 10.00 "Hollow Frequency: Season 2" (tv, A10/C10; tv-first seed 41 #18, yr 7.7, critic gen 0) | 3035 |
| renewal-franchise | B_partner | all | 4423 | 6.91 | 6.81 | 45 (1.0%) | 45 (1.0%) | 40 (0.9%) | 140 (3.2%) | 81 (1.8%) | 805 (18.2%) | 91% of 200 | 0/0/0 | 8.07/8.5/8.93/9.46 | 9.58 "Red Run: Season 4" (tv, A9.51/C9.65; renewal-franchise seed 27 #13, yr 4.6, critic gen 0) | 1960 |
| traditional-holdout | B_partner | all | 4416 | 7.88 | 7.80 | 478 (10.8%) | 478 (10.8%) | 464 (10.5%) | 682 (15.4%) | 594 (13.4%) | 2232 (50.5%) | 23% of 200 | 0/2/5 | 8.82/9.32/9.72/9.84 | 10.00 "Wild Frequency" (A10/C10; traditional-holdout seed 199 #27, yr 9.5, critic gen 0) | 3655 |
| mixed | B_partner | all | 4925 | 7.98 | 7.90 | 628 (12.8%) | 628 (12.8%) | 600 (12.2%) | 836 (17.0%) | 833 (16.9%) | 2738 (55.6%) | 4% of 200 | 1/3/5 | 9.11/9.46/9.8/10 | 10.00 "Dead Legacy" (movie/original, A10/C10; mixed seed 21 #25, yr 9.7, critic gen 0) | 4082.5 |
| tv-duds | B_partner | all | 6400 | 6.16 | 6.31 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 9 (0.1%) | 100% of 200 | 0/0/0 | 7.17/7.47/7.82/8.12 | 8.21 "Silver Pulse" (A8.07/C8.34; tv-duds seed 171 #31, yr 9.5, critic gen 0) | 75 |

### Greatest single films (all strategies, whole sample; reproducible from seed + config hash)

| Variant | Best combined | Best Audience | Best Critic | Year band with most HoF |
|---|---|---|---|---|
| A_per_season | 10.00 "Wild Legacy" (limited_series, A10/C10; mixed seed 21 #17, yr 6.0, critic gen 0) | 10.00 "Wild Legacy" (limited_series, A10/C10; mixed seed 21 #17, yr 6.0, critic gen 0) | 10.00 "Wild Legacy" (limited_series, A10/C10; mixed seed 21 #17, yr 6.0, critic gen 0) | y5-10: 11.0% of 10472 |
| B_partner | 10.00 "Dead Legacy" (movie/original, A10/C10; mixed seed 21 #25, yr 9.7, critic gen 0) | 10.00 "Dead Legacy" (movie/original, A10/C10; mixed seed 21 #25, yr 9.7, critic gen 0) | 10.00 "Dead Legacy" (movie/original, A10/C10; mixed seed 21 #25, yr 9.7, critic gen 0) | y5-10: 10.7% of 10501 |

### Great films by in-game year (all strategies pooled)

| Strategy | Config | Window | Films (n) | Avg Aud | Avg Crit | HoF n (%) | Avg ≥9 n (%) | Avg >9 n (%) | Aud ≥9 n (%) | Crit ≥9 n (%) | 8+ n (%) | Careers with 0 HoF | HoF/career p10/p50/p90 | Best/career p10/p50/p90/p99 | Best combined movie | Prestige median |
|---|---|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---|---|---|---:|
| ALL | A_per_season | y0-5 | 13816 | 7.11 | 7.09 | 334 (2.4%) | 334 (2.4%) | 316 (2.3%) | 705 (5.1%) | 553 (4.0%) | 3622 (26.2%) | 82% of 1000 | 0/0/1 | 6.95/8.54/9.22/9.64 | 9.91 "Hollow Frequency" (A9.82/C10; mixed seed 38 #14, yr 4.8, critic gen 0) |  |
| ALL | A_per_season | y5-10 | 10472 | 7.40 | 7.36 | 1152 (11.0%) | 1152 (11.0%) | 1103 (10.5%) | 1436 (13.7%) | 1331 (12.7%) | 3787 (36.2%) | 57% of 1000 | 0/0/4 | 7.14/8.72/9.59/10 | 10.00 "Wild Legacy" (limited_series, A10/C10; mixed seed 21 #17, yr 6.0, critic gen 0) |  |
| ALL | A_per_season | y10-15 | 23 | 7.47 | 7.30 | 2 (8.7%) | 2 (8.7%) | 2 (8.7%) | 2 (8.7%) | 3 (13.0%) | 9 (39.1%) | 91% of 23 | 0/0/0 | 5.71/7.74/8.68/9.33 | 9.41 "Broken Pulse: Season 5" (tv, A9.37/C9.45; traditional-holdout seed 171 #22, yr 10.0, critic gen 0) |  |
| ALL | B_partner | y0-5 | 13820 | 7.10 | 7.09 | 334 (2.4%) | 334 (2.4%) | 313 (2.3%) | 697 (5.0%) | 559 (4.0%) | 3615 (26.2%) | 82% of 1000 | 0/0/1 | 6.95/8.54/9.22/9.72 | 10.00 "Lost Pulse" (limited_series, A9.99/C10; mixed seed 110 #13, yr 4.5, critic gen 0) |  |
| ALL | B_partner | y5-10 | 10501 | 7.40 | 7.36 | 1125 (10.7%) | 1125 (10.7%) | 1085 (10.3%) | 1467 (14.0%) | 1298 (12.4%) | 3794 (36.1%) | 58% of 1000 | 0/0/4 | 7.14/8.72/9.61/10 | 10.00 "Dead Legacy" (movie/original, A10/C10; mixed seed 21 #25, yr 9.7, critic gen 0) |  |
| ALL | B_partner | y10-15 | 27 | 7.35 | 7.10 | 1 (3.7%) | 1 (3.7%) | 1 (3.7%) | 1 (3.7%) | 1 (3.7%) | 7 (25.9%) | 96% of 27 | 0/0/0 | 5.63/7.53/8.33/8.91 | 9.05 "Lost Frequency" (tv, A8.99/C9.1; traditional-holdout seed 96 #24, yr 10.0, critic gen 0) |  |

### Prestige progression (Prestige gates growth; cash sustains operations)

`cash-rich but Prestige-locked` = careers that at some week had the cash for the next upgrade but not the Prestige. `bought below gate` must be 0 (engine rule).

| Strategy | Config | Cash median | Prestige median | Prestige/yr | Careers with negative-cash weeks | →6 gate met (Prestige ≥ 200) · median film # | →6 bought · median film # | →6 cash-rich but Prestige-locked | →6 bought below gate | →8 gate met (Prestige ≥ 1000) · median film # | →8 bought · median film # | →8 cash-rich but Prestige-locked | →8 bought below gate |
|---|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|
| tv-first | A_per_season | $5.84M | 3115 | 311.5 | 74% | 100% · #7 | 100% · #7 | 100% | 0 | 100% · #11 | 100% · #12 | 100% | 0 |
| renewal-franchise | A_per_season | $3.83M | 1950 | 195 | 54% | 100% · #7 | 100% · #7 | 100% | 0 | 100% · #11 | 100% · #12 | 100% | 0 |
| traditional-holdout | A_per_season | $6.30M | 3705 | 370.5 | 73% | 100% · #7 | 100% · #7 | 100% | 0 | 100% · #11 | 100% · #12 | 100% | 0 |
| mixed | A_per_season | $5.99M | 4070 | 407 | 73% | 100% · #7 | 100% · #7 | 100% | 0 | 100% · #12 | 100% · #12 | 100% | 0 |
| tv-duds | A_per_season | $4.29M | 75 | 7.5 | 4% | 16% · #29 | 0% · #— | 100% | 0 | 0% · #— | 0% · #— | 0% | 0 |
| tv-first | B_partner | $4.19M | 3035 | 303.5 | 74% | 100% · #7 | 100% · #7 | 100% | 0 | 100% · #11 | 100% · #12 | 100% | 0 |
| renewal-franchise | B_partner | $1.65M | 1960 | 196 | 56% | 100% · #7 | 100% · #7 | 100% | 0 | 100% · #11 | 99% · #12 | 98% | 0 |
| traditional-holdout | B_partner | $5.17M | 3655 | 365.5 | 73% | 100% · #7 | 100% · #7 | 100% | 0 | 100% · #11.5 | 100% · #12 | 100% | 0 |
| mixed | B_partner | $5.05M | 4082.5 | 408.3 | 73% | 100% · #7 | 100% · #7 | 100% | 0 | 100% · #12 | 100% · #12 | 100% | 0 |
| tv-duds | B_partner | $4.26M | 75 | 7.5 | 4% | 16% · #29 | 0% · #— | 100% | 0 | 0% · #— | 0% · #— | 0% | 0 |

### Prestige milestones awarded per career (mean)

| Strategy | Variant | audience_7_5 | critic_8_5 | first_hall_of_fame | hall_of_fame | ip_gross_1m | ip_gross_5m | ip_viewers_500k | meters_all_70 | careers > 400 Prestige/yr (OUTDATED threshold) |
|---|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|
| tv-first | A_per_season | 12.51 | 4.42 | 0.49 | 1.55 | 2 | 1.75 | 2 | 15.01 | 11% |
| tv-first | B_partner | 12.53 | 4.29 | 0.47 | 1.54 | 2 | 1.43 | 2 | 15.04 | 11% |
| renewal-franchise | A_per_season | 7.82 | 1.72 | 0.09 | 0.22 | 1 | 1 | 1 | 16.64 | 0% |
| renewal-franchise | B_partner | 7.8 | 1.71 | 0.09 | 0.23 | 1 | 0.99 | 1 | 16.7 | 0% |
| traditional-holdout | A_per_season | 14.78 | 6.46 | 0.82 | 2.48 | 2.13 | 1.19 | 1.92 | 16.39 | 32% |
| traditional-holdout | B_partner | 14.87 | 6.46 | 0.78 | 2.39 | 2.02 | 1.15 | 1.88 | 16.49 | 30% |
| mixed | A_per_season | 17.86 | 8.08 | 0.96 | 3.19 | 1.42 | 0.85 | 1 | 18.7 | 58% |
| mixed | B_partner | 17.82 | 8.32 | 0.96 | 3.14 | 1.39 | 0.72 | 1 | 18.68 | 55% |
| tv-duds | A_per_season | 1.2 | 0 | 0 | 0 | 0 | 0 | 0.01 | 0 | 0% |
| tv-duds | B_partner | 1.2 | 0 | 0 | 0 | 0 | 0 | 0.01 | 0 | 0% |

### Gate 3 design trade-offs by strategy

(a) money · (b) Prestige · (c) time to TV / streaming · (d) successful IPs · (e) Hall of Fame · (f) last-12-month revenue mix · (g) solvency. Medians unless noted; shares are of careers.

| Strategy | Config | (a) cash median | min cash | ever negative | (b) Prestige | (c) TV unlock yr (share) | streaming live yr (share) | subs end | payback yrs (share) | (d) IPs ≥10K fans | shows · seasons · max | (e) HoF / career | (f) last-12-mo mix: traditional / subs / opex | streaming share | releases |
|---|---|---:|---:|---:|---:|---|---|---:|---|---:|---|---:|---|---:|---:|
| tv-first | A_per_season | $5.84M | $-4K | 74% | 3,115 | 2.7 (100%) | — (0%) | — | — (0%) | 2.0 | 2.0 · 13.0 · 8.0 | 0.0 | $1.20M / $0.00M / $0.00M | — | 21 |
| renewal-franchise | A_per_season | $3.83M | $-1K | 54% | 1,950 | 2.5 (100%) | — (0%) | — | — (0%) | 1.0 | 1.0 · 14.0 · 14.0 | 0.0 | $0.71M / $0.00M / $0.00M | — | 22 |
| traditional-holdout | A_per_season | $6.30M | $-4K | 73% | 3,705 | 2.5 (100%) | — (0%) | — | — (0%) | 4.0 | 2.0 · 10.0 · 6.0 | 2.0 | $1.30M / $0.00M / $0.00M | — | 22 |
| mixed | A_per_season | $5.99M | $-3K | 73% | 4,070 | 2.7 (100%) | 7.3 (100%) | 76,574 | 1.8 (79%) | 8.0 | 1.0 · 6.0 · 6.0 | 3.0 | $0.58M / $1.80M / $-0.96M | 74% | 25 |
| tv-duds | A_per_season | $4.29M | $4K | 4% | 75 | 9.2 (7%) | — (0%) | — | — (0%) | 0.0 | 0.0 · 0.0 · 0.0 | 0.0 | $0.57M / $0.00M / $0.00M | — | 32 |
| tv-first | B_partner | $4.19M | $-4K | 74% | 3,035 | 2.7 (100%) | — (0%) | — | — (0%) | 2.0 | 2.0 · 13.0 · 8.0 | 0.0 | $1.19M / $0.00M / $0.00M | — | 21 |
| renewal-franchise | B_partner | $1.65M | $-1K | 56% | 1,960 | 2.5 (100%) | — (0%) | — | — (0%) | 1.0 | 1.0 · 14.5 · 14.5 | 0.0 | $0.66M / $0.00M / $0.00M | — | 22 |
| traditional-holdout | B_partner | $5.17M | $-4K | 73% | 3,655 | 2.5 (100%) | — (0%) | — | — (0%) | 4.0 | 2.0 · 10.0 · 6.0 | 2.0 | $1.29M / $0.00M / $0.00M | — | 22 |
| mixed | B_partner | $5.05M | $-3K | 73% | 4,083 | 2.7 (100%) | 7.3 (100%) | 76,811 | 1.9 (80%) | 8.0 | 1.0 · 6.0 · 6.0 | 3.0 | $0.54M / $1.81M / $-0.96M | 77% | 25 |
| tv-duds | B_partner | $4.26M | $4K | 4% | 75 | 9.2 (7%) | — (0%) | — | — (0%) | 0.0 | 0.0 · 0.0 · 0.0 | 0.0 | $0.57M / $0.00M / $0.00M | — | 32 |

### Formats: share of releases · mean score · HoF % · net per production week; Prestige sources

| Strategy | Config | limited_series: share · avg · HoF% · net/prod-wk | limited_series/original: share · avg · HoF% · net/prod-wk | movie: share · avg · HoF% · net/prod-wk | movie/original: share · avg · HoF% · net/prod-wk | tv: share · avg · HoF% · net/prod-wk | tv/original: share · avg · HoF% · net/prod-wk | Prestige by format | top Prestige sources |
|---|---|---|---|---|---|---|---|---|---|
| tv-first | A_per_season | 33% · 7.17 · 0.6% · $20.9K | — | 5% · 5.6 · 0% · $9.9K | — | 62% · 8 · 11.6% · $24.4K | — | limited_series 12.2%, tv 87.8% | audience_7_5 29.5%, meters_all_70 23.6%, critic_8_5 11.8%, hall_of_fame 9.8% |
| renewal-franchise | A_per_season | — | — | 35% · 6.94 · 0.6% · $18.0K | — | 65% · 6.83 · 1.2% · $19.8K | — | movie 19%, tv 81% | meters_all_70 41.2%, audience_7_5 29.1%, ip_viewers_500k 7.4%, ip_gross_5m 7.4% |
| traditional-holdout | A_per_season | 15% · 7.84 · 12.8% · $24.9K | — | 39% · 7.34 · 6.7% · $20.5K | — | 46% · 8.26 · 14.6% · $26.0K | — | limited_series 12.1%, movie 21.9%, tv 66% | audience_7_5 29.7%, meters_all_70 22%, critic_8_5 14.7%, hall_of_fame 13.3% |
| mixed | A_per_season | 46% · 7.7 · 9.5% · $24.3K | 4% · 8.73 · 34.3% · $-8.2K | 23% · 8.05 · 21.8% · $24.2K | 3% · 8.81 · 43% · $-7.6K | 22% · 8.06 · 3.6% · $26.2K | 2% · 7.71 · 3.6% · $-8.7K | limited_series 33.5%, tv 28.3%, movie 26.5%, limited_series/original 5.1%, movie/original 5.3%, tv/original 1.2% | audience_7_5 32.6%, meters_all_70 22.7%, critic_8_5 16.7%, hall_of_fame 15.5% |
| tv-duds | A_per_season | — | — | 100% · 6.24 · 0% · $10.8K | — | 1% · 6.34 · 0% · $9.6K | — | movie 97.9%, tv 2.1% | audience_7_5 99.2%, ip_viewers_500k 0.8% |
| tv-first | B_partner | 33% · 7.17 · 0.6% · $20.9K | — | 5% · 5.6 · 0% · $9.9K | — | 63% · 8 · 11.5% · $19.8K | — | limited_series 12.4%, tv 87.6% | audience_7_5 30%, meters_all_70 24.1%, critic_8_5 11.7%, hall_of_fame 9.9% |
| renewal-franchise | B_partner | — | — | 35% · 6.94 · 0.6% · $18.0K | — | 65% · 6.82 · 1.2% · $14.1K | — | movie 19%, tv 81% | meters_all_70 41.4%, audience_7_5 29%, ip_viewers_500k 7.4%, ip_gross_5m 7.4% |
| traditional-holdout | B_partner | 15% · 7.86 · 12.4% · $25.0K | — | 39% · 7.35 · 7% · $20.4K | — | 46% · 8.25 · 13.5% · $21.9K | — | limited_series 12.8%, movie 22.5%, tv 64.8% | audience_7_5 30.1%, meters_all_70 22.3%, critic_8_5 14.8%, hall_of_fame 12.9% |
| mixed | B_partner | 46% · 7.7 · 9% · $24.3K | 4% · 8.81 · 39.4% · $-8.2K | 23% · 8.05 · 21.3% · $24.0K | 3% · 8.83 · 41.3% · $-7.5K | 22% · 8.07 · 3.6% · $20.6K | 2% · 7.74 · 3.5% · $-8.7K | limited_series 33.6%, tv 28.1%, movie 26.3%, limited_series/original 5.4%, movie/original 5.4%, tv/original 1.3% | audience_7_5 32.6%, meters_all_70 22.8%, critic_8_5 17.3%, hall_of_fame 15.3% |
| tv-duds | B_partner | — | — | 100% · 6.24 · 0% · $10.8K | — | 1% · 6.34 · 0% · $6.9K | — | movie 97.9%, tv 2.1% | audience_7_5 99.2%, ip_viewers_500k 0.8% |

### Gate 3 provisional flags

| Variant | Flag | Fired | Evidence |
|---|---|---|---|
| A_per_season | STREAMING_INFINITE_GROWTH | no | not fired: 0/200 launched careers reached ≥90% of the reachable subscriber market (growth is capped by design; this flags saturation) [PROVISIONAL threshold] |
| A_per_season | SUBSCRIBER_CHURN_SPIRAL | no | not fired: 0/200 launched careers lost >60% of subscribers within 3 years [PROVISIONAL threshold] |
| A_per_season | TV_SEASON_TOO_PROFITABLE | **yes** | 1357/8340 finished traditional TV seasons netted >2× the batch's pooled movie net per production week ($14,739) [PROVISIONAL threshold] |
| A_per_season | TV_SEASON_TOO_LONG | **yes** | 195 careers kept one show running ≥12 seasons (fatigue cap 0.35 may allow endless renewals) [PROVISIONAL threshold] |
| A_per_season | TV_NO_RENEWAL_PATH | no | not fired: 4/811 TV careers never made a second season [PROVISIONAL threshold] |
| A_per_season | MIXED_ECONOMY_SOFTLOCK | no | not fired: 0/1000 careers spent ≥3 years with negative cash [PROVISIONAL threshold] |
| A_per_season | FORMAT_DOMINANT | no | not fired: best cash: traditional-holdout; best Prestige: mixed; fires only if one strategy leads both by >50% [PROVISIONAL threshold] |
| A_per_season | DELAYED_STUDIO_PROGRESSION | no | not fired: TV not unlocked by year 8: 0/800; streaming not live by year 15: 0/0 [PROVISIONAL threshold] |
| B_partner | STREAMING_INFINITE_GROWTH | no | not fired: 0/200 launched careers reached ≥90% of the reachable subscriber market (growth is capped by design; this flags saturation) [PROVISIONAL threshold] |
| B_partner | SUBSCRIBER_CHURN_SPIRAL | no | not fired: 0/200 launched careers lost >60% of subscribers within 3 years [PROVISIONAL threshold] |
| B_partner | TV_SEASON_TOO_PROFITABLE | no | not fired: 178/8317 finished traditional TV seasons netted >2× the batch's pooled movie net per production week ($14,715) [PROVISIONAL threshold] |
| B_partner | TV_SEASON_TOO_LONG | **yes** | 195 careers kept one show running ≥12 seasons (fatigue cap 0.35 may allow endless renewals) [PROVISIONAL threshold] |
| B_partner | TV_NO_RENEWAL_PATH | no | not fired: 4/811 TV careers never made a second season [PROVISIONAL threshold] |
| B_partner | MIXED_ECONOMY_SOFTLOCK | **yes** | 1/1000 careers spent ≥3 years with negative cash [PROVISIONAL threshold] |
| B_partner | FORMAT_DOMINANT | no | not fired: best cash: traditional-holdout; best Prestige: mixed; fires only if one strategy leads both by >50% [PROVISIONAL threshold] |
| B_partner | DELAYED_STUDIO_PROGRESSION | no | not fired: TV not unlocked by year 8: 0/800; streaming not live by year 15: 0/0 [PROVISIONAL threshold] |

### Diagnostic flags fired

| Variant | Fired |
|---|---|
| A_per_season | QUALITY_INFLATION |
| B_partner | EARLY_SOFTLOCK, QUALITY_INFLATION |

## 20-year careers (in-game calendar horizon; productions vary by strategy)

Invariant violations across all variants: **0**.

### Medians by strategy

| Strategy | Variant | endCash | prestige | prestigePerRelease | meanAudience | meanCritic | share8plus | share9plus | shareLate8plus | hofShare | maxStaffEnd | staffCount | meanStaffStat | upgrades | firstUpgradeWeek | years | maxIpFans | negativeCashWeeks |
|---|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|
| tv-first | A_per_season | $16668K | 5645 | 172.55 | 7.85 | 7.72 | 45% | 9% | 57% | 9% | 8 | 8 | 93.60 | 2 | 124 | 20 | 92836 | 2 |
| tv-first | B_partner | $12527K | 5480 | 170.55 | 7.84 | 7.69 | 44% | 9% | 57% | 9% | 8 | 8 | 93.70 | 2 | 124 | 20 | 89595.50 | 2 |
| renewal-franchise | A_per_season | $8130K | 2680 | 73.60 | 6.50 | 6.44 | 11% | 0% | 0% | 0% | 8 | 8 | 95.50 | 2 | 112 | 20 | 69033 | 1 |
| renewal-franchise | B_partner | $2796K | 2680 | 73.60 | 6.50 | 6.42 | 11% | 0% | 0% | 0% | 8 | 8 | 95.40 | 2 | 112 | 20 | 62284 | 2 |
| traditional-holdout | A_per_season | $17793K | 7345 | 208.60 | 8.21 | 8.07 | 63% | 18% | 86% | 18% | 8 | 8 | 94.70 | 2 | 114 | 20 | 81474.50 | 2 |
| traditional-holdout | B_partner | $14386K | 7200 | 206.60 | 8.15 | 8.04 | 61% | 17% | 80% | 17% | 8 | 8 | 94.70 | 2 | 114 | 20 | 76264 | 2 |
| mixed | A_per_season | $17451K | 9217.50 | 210.15 | 8.34 | 8.23 | 70% | 23% | 89% | 23% | 8 | 8 | 97.60 | 2 | 124 | 20 | 63716 | 2 |
| mixed | B_partner | $16460K | 9127.50 | 206.80 | 8.36 | 8.23 | 70% | 22% | 89% | 22% | 8 | 8 | 97.65 | 2 | 124 | 20 | 63851.50 | 2 |
| tv-duds | A_per_season | $9434K | 225 | 3.50 | 6.15 | 6.31 | 0% | 0% | 0% | 0% | 4 | 2 | 87.10 | 0 | — | 20 | 7869 | 0 |
| tv-duds | B_partner | $9098K | 225 | 3.50 | 6.15 | 6.31 | 0% | 0% | 0% | 0% | 4 | 2 | 87.10 | 0 | — | 20 | 7864.50 | 0 |

### Paired deltas vs **A_per_season** (median of per-seed differences; share of seeds where the variant is higher)

| Strategy | Variant | Δ endCash | Δ prestige | Δ share8plus | Δ meanAudience |
|---|---|---:|---:|---:|---:|
| tv-first | B_partner | $-4339K (2%) | -10 (39%) | 0% (36%) | 0 (45%) |
| renewal-franchise | B_partner | $-5078K (0%) | 0 (5%) | 0% (1%) | 0 (4%) |
| traditional-holdout | B_partner | $-3206K (5%) | -110 (48%) | -2% (45%) | 0.02 (53%) |
| mixed | B_partner | $-917K (14%) | -82.50 (46%) | 0% (42%) | 0 (47%) |
| tv-duds | B_partner | $0K (0%) | 0 (4%) | 0% (0%) | 0 (9%) |

### Mean review score (avg of Audience+Critic) by production index

| Strategy | Variant | #1 | #3 | #5 | #10 | #20 | #30 | #50 |
|---|---|---:|---:|---:|---:|---:|---:|---:|
| tv-first | A_per_season | 5.60 | 6.31 | 7.44 | 8.18 | 8.33 | 7.73 | — |
| tv-first | B_partner | 5.60 | 6.31 | 7.44 | 8.18 | 8.33 | 7.64 | — |
| renewal-franchise | A_per_season | 5.65 | 6.33 | 7.40 | 8.04 | 5.86 | 5.80 | — |
| renewal-franchise | B_partner | 5.65 | 6.33 | 7.40 | 8.03 | 5.84 | 5.80 | — |
| traditional-holdout | A_per_season | 5.62 | 6.29 | 7.39 | 8.19 | 8.47 | 8.57 | — |
| traditional-holdout | B_partner | 5.62 | 6.29 | 7.39 | 8.19 | 8.43 | 8.61 | — |
| mixed | A_per_season | 5.62 | 6.33 | 7.43 | 8.24 | 8.33 | 8.86 | — |
| mixed | B_partner | 5.62 | 6.33 | 7.43 | 8.24 | 8.43 | 8.89 | — |
| tv-duds | A_per_season | 5.47 | 5.72 | 5.85 | 6.08 | 6.44 | 6.61 | 6.18 |
| tv-duds | B_partner | 5.47 | 5.72 | 5.85 | 6.08 | 6.44 | 6.61 | 6.19 |

### Great films — all strategies pooled, by release window

Denominators are films in that window. HoF = average of Audience and Critic ≥ hofThreshold (9.0). `≥9` is inclusive, `>9` strict.

| Strategy | Config | Window | Films (n) | Avg Aud | Avg Crit | HoF n (%) | Avg ≥9 n (%) | Avg >9 n (%) | Aud ≥9 n (%) | Crit ≥9 n (%) | 8+ n (%) | Careers with 0 HoF | HoF/career p10/p50/p90 | Best/career p10/p50/p90/p99 | Best combined movie | Prestige median |
|---|---|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---|---|---|---:|
| ALL | A_per_season | 1-5 | 5000 | 6.29 | 6.36 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 1 (0.0%) | 140 (2.8%) | 100% of 1000 | 0/0/0 | 6.22/7.48/8.09/8.59 | 8.91 "Midnight Rising" (A8.47/C9.36; renewal-franchise seed 15 #5, yr 1.5, critic gen 0) |  |
| ALL | A_per_season | 6-20 | 15000 | 7.59 | 7.52 | 1120 (7.5%) | 1120 (7.5%) | 1066 (7.1%) | 1703 (11.3%) | 1469 (9.8%) | 6223 (41.5%) | 58% of 1000 | 0/0/4 | 7.15/8.81/9.5/10 | 10.00 "Wild Legacy" (limited_series, A10/C10; mixed seed 21 #17, yr 6.0, critic gen 0) |  |
| ALL | A_per_season | 21-50 | 19654 | 7.43 | 7.37 | 2985 (15.2%) | 2985 (15.2%) | 2946 (15.0%) | 4241 (21.6%) | 3427 (17.4%) | 7843 (39.9%) | 47% of 1000 | 0/1/9 | 6.07/9.07/9.82/10 | 10.00 "Last Rising" (A10/C10; mixed seed 9 #35, yr 14.7, critic gen 0) |  |
| ALL | A_per_season | 51-100 | 2822 | 5.83 | 6.01 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 6 (0.2%) | 100% of 200 | 0/0/0 | 5.04/7.32/7.82/8.22 | 8.31 "Iron Protocol" (A8.18/C8.43; tv-duds seed 56 #60, yr 18.5, critic gen 0) |  |
| ALL | A_per_season | all | 42476 | 7.25 | 7.22 | 4105 (9.7%) | 4105 (9.7%) | 4012 (9.4%) | 5944 (14.0%) | 4897 (11.5%) | 14212 (33.5%) | 41% of 1000 | 0/3/11 | 7.74/9.3/9.84/10 | 10.00 "Last Rising" (A10/C10; mixed seed 9 #35, yr 14.7, critic gen 0) |  |
| ALL | B_partner | 1-5 | 5000 | 6.29 | 6.36 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 1 (0.0%) | 140 (2.8%) | 100% of 1000 | 0/0/0 | 6.22/7.48/8.09/8.59 | 8.91 "Midnight Rising" (A8.47/C9.36; renewal-franchise seed 15 #5, yr 1.5, critic gen 0) |  |
| ALL | B_partner | 6-20 | 15000 | 7.60 | 7.53 | 1117 (7.5%) | 1117 (7.5%) | 1068 (7.1%) | 1710 (11.4%) | 1461 (9.7%) | 6227 (41.5%) | 58% of 1000 | 0/0/4 | 7.15/8.82/9.53/9.83 | 10.00 "Iron Protocol" (limited_series, A10/C10; mixed seed 38 #18, yr 6.3, critic gen 0) |  |
| ALL | B_partner | 21-50 | 19695 | 7.43 | 7.35 | 2846 (14.4%) | 2846 (14.4%) | 2805 (14.2%) | 4197 (21.3%) | 3290 (16.7%) | 7768 (39.4%) | 48% of 1000 | 0/1/8 | 6.07/9.05/9.82/10 | 10.00 "Hollow Signal" (limited_series, A10/C10; mixed seed 9 #36, yr 15.1, critic gen 0) |  |
| ALL | B_partner | 51-100 | 2836 | 5.82 | 5.99 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 6 (0.2%) | 100% of 200 | 0/0/0 | 5/7.33/7.82/8.22 | 8.31 "Iron Protocol" (A8.18/C8.43; tv-duds seed 56 #60, yr 18.5, critic gen 0) |  |
| ALL | B_partner | all | 42531 | 7.25 | 7.21 | 3963 (9.3%) | 3963 (9.3%) | 3873 (9.1%) | 5907 (13.9%) | 4752 (11.2%) | 14141 (33.3%) | 42% of 1000 | 0/2/11 | 7.74/9.28/9.83/10 | 10.00 "Hollow Signal" (limited_series, A10/C10; mixed seed 9 #36, yr 15.1, critic gen 0) |  |

### Great films by strategy (whole career)

| Strategy | Config | Window | Films (n) | Avg Aud | Avg Crit | HoF n (%) | Avg ≥9 n (%) | Avg >9 n (%) | Aud ≥9 n (%) | Crit ≥9 n (%) | 8+ n (%) | Careers with 0 HoF | HoF/career p10/p50/p90 | Best/career p10/p50/p90/p99 | Best combined movie | Prestige median |
|---|---|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---|---|---|---:|
| tv-first | A_per_season | all | 6513 | 7.81 | 7.70 | 697 (10.7%) | 697 (10.7%) | 668 (10.3%) | 1022 (15.7%) | 843 (12.9%) | 2917 (44.8%) | 13% of 200 | 0/3/7 | 8.96/9.38/9.77/10 | 10.00 "Midnight Rising: Season 2" (tv, A10/C10; tv-first seed 21 #19, yr 7.5, critic gen 0) | 5645 |
| renewal-franchise | A_per_season | all | 7312 | 6.50 | 6.39 | 44 (0.6%) | 44 (0.6%) | 39 (0.5%) | 139 (1.9%) | 82 (1.1%) | 807 (11.0%) | 91% of 200 | 0/0/0 | 8.07/8.5/8.93/9.46 | 9.59 "Red Run: Season 4" (tv, A9.52/C9.65; renewal-franchise seed 27 #13, yr 4.8, critic gen 0) | 2680 |
| traditional-holdout | A_per_season | all | 7046 | 8.18 | 8.06 | 1320 (18.7%) | 1320 (18.7%) | 1297 (18.4%) | 1894 (26.9%) | 1535 (21.8%) | 4333 (61.5%) | 2% of 200 | 2/6/12 | 9.29/9.59/9.86/10 | 10.00 "Midnight Echo" (limited_series, A10/C10; traditional-holdout seed 21 #31, yr 15.3, critic gen 0) | 7345 |
| mixed | A_per_season | all | 8783 | 8.35 | 8.23 | 2044 (23.3%) | 2044 (23.3%) | 2008 (22.9%) | 2889 (32.9%) | 2437 (27.8%) | 6128 (69.8%) | 0% of 200 | 6/10/14.1 | 9.54/9.77/10/10 | 10.00 "Last Rising" (A10/C10; mixed seed 9 #35, yr 14.7, critic gen 0) | 9217.5 |
| tv-duds | A_per_season | all | 12822 | 6.13 | 6.28 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 27 (0.2%) | 100% of 200 | 0/0/0 | 7.5/7.74/8.03/8.26 | 8.31 "Iron Protocol" (A8.18/C8.43; tv-duds seed 56 #60, yr 18.5, critic gen 0) | 225 |
| tv-first | B_partner | all | 6535 | 7.82 | 7.67 | 673 (10.3%) | 673 (10.3%) | 649 (9.9%) | 1041 (15.9%) | 803 (12.3%) | 2855 (43.7%) | 16% of 200 | 0/3/7 | 8.86/9.35/9.77/10 | 10.00 "Hollow Frequency: Season 2" (tv, A10/C10; tv-first seed 41 #18, yr 7.7, critic gen 0) | 5480 |
| renewal-franchise | B_partner | all | 7322 | 6.49 | 6.39 | 45 (0.6%) | 45 (0.6%) | 40 (0.6%) | 140 (1.9%) | 81 (1.1%) | 805 (11.0%) | 91% of 200 | 0/0/0 | 8.07/8.5/8.93/9.46 | 9.58 "Red Run: Season 4" (tv, A9.51/C9.65; renewal-franchise seed 27 #13, yr 4.6, critic gen 0) | 2680 |
| traditional-holdout | B_partner | all | 7046 | 8.17 | 8.05 | 1253 (17.8%) | 1253 (17.8%) | 1224 (17.4%) | 1842 (26.1%) | 1476 (20.9%) | 4317 (61.3%) | 3% of 200 | 2/6/11 | 9.21/9.57/9.84/10 | 10.00 "Last Frequency" (limited_series, A10/C10; traditional-holdout seed 27 #37, yr 19.3, critic gen 0) | 7200 |
| mixed | B_partner | all | 8792 | 8.35 | 8.22 | 1992 (22.7%) | 1992 (22.7%) | 1960 (22.3%) | 2884 (32.8%) | 2392 (27.2%) | 6137 (69.8%) | 0% of 200 | 6/9.5/14 | 9.53/9.75/10/10 | 10.00 "Hollow Signal" (limited_series, A10/C10; mixed seed 9 #36, yr 15.1, critic gen 0) | 9127.5 |
| tv-duds | B_partner | all | 12836 | 6.13 | 6.28 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 27 (0.2%) | 100% of 200 | 0/0/0 | 7.5/7.74/8.03/8.26 | 8.31 "Iron Protocol" (A8.18/C8.43; tv-duds seed 56 #60, yr 18.5, critic gen 0) | 225 |

### Greatest single films (all strategies, whole sample; reproducible from seed + config hash)

| Variant | Best combined | Best Audience | Best Critic | Year band with most HoF |
|---|---|---|---|---|
| A_per_season | 10.00 "Last Rising" (A10/C10; mixed seed 9 #35, yr 14.7, critic gen 0) | 10.00 "Last Rising" (A10/C10; mixed seed 9 #35, yr 14.7, critic gen 0) | 10.00 "Last Rising" (A10/C10; mixed seed 9 #35, yr 14.7, critic gen 0) | y10-15: 16.0% of 9167 |
| B_partner | 10.00 "Hollow Signal" (limited_series, A10/C10; mixed seed 9 #36, yr 15.1, critic gen 0) | 10.00 "Hollow Signal" (limited_series, A10/C10; mixed seed 9 #36, yr 15.1, critic gen 0) | 10.00 "Hollow Signal" (limited_series, A10/C10; mixed seed 9 #36, yr 15.1, critic gen 0) | y10-15: 15.1% of 9162 |

### Great films by in-game year (all strategies pooled)

| Strategy | Config | Window | Films (n) | Avg Aud | Avg Crit | HoF n (%) | Avg ≥9 n (%) | Avg >9 n (%) | Aud ≥9 n (%) | Crit ≥9 n (%) | 8+ n (%) | Careers with 0 HoF | HoF/career p10/p50/p90 | Best/career p10/p50/p90/p99 | Best combined movie | Prestige median |
|---|---|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---|---|---|---:|
| ALL | A_per_season | y0-5 | 13816 | 7.11 | 7.09 | 334 (2.4%) | 334 (2.4%) | 316 (2.3%) | 705 (5.1%) | 553 (4.0%) | 3622 (26.2%) | 82% of 1000 | 0/0/1 | 6.95/8.54/9.22/9.64 | 9.91 "Hollow Frequency" (A9.82/C10; mixed seed 38 #14, yr 4.8, critic gen 0) |  |
| ALL | A_per_season | y5-10 | 10472 | 7.40 | 7.36 | 1152 (11.0%) | 1152 (11.0%) | 1103 (10.5%) | 1436 (13.7%) | 1331 (12.7%) | 3787 (36.2%) | 57% of 1000 | 0/0/4 | 7.14/8.72/9.59/10 | 10.00 "Wild Legacy" (limited_series, A10/C10; mixed seed 21 #17, yr 6.0, critic gen 0) |  |
| ALL | A_per_season | y10-15 | 9167 | 7.39 | 7.34 | 1465 (16.0%) | 1465 (16.0%) | 1449 (15.8%) | 2031 (22.2%) | 1670 (18.2%) | 3579 (39.0%) | 54% of 1000 | 0/0/4 | 6.06/8.81/9.68/10 | 10.00 "Last Rising" (A10/C10; mixed seed 9 #35, yr 14.7, critic gen 0) |  |
| ALL | A_per_season | y15-20 | 8814 | 7.17 | 7.13 | 1145 (13.0%) | 1145 (13.0%) | 1135 (12.9%) | 1753 (19.9%) | 1335 (15.2%) | 3202 (36.3%) | 58% of 1000 | 0/0/4 | 5.82/8.67/9.69/10 | 10.00 "Midnight Echo" (limited_series, A10/C10; traditional-holdout seed 21 #31, yr 15.3, critic gen 0) |  |
| ALL | A_per_season | y20-30 | 207 | 6.21 | 6.28 | 9 (4.3%) | 9 (4.3%) | 9 (4.3%) | 19 (9.2%) | 8 (3.9%) | 22 (10.6%) | 96% of 207 | 0/0/0 | 4.47/6.25/8.17/9.6 | 9.81 "Dead Legacy" (A9.61/C10; mixed seed 63 #44, yr 20.0, critic gen 0) |  |
| ALL | B_partner | y0-5 | 13820 | 7.10 | 7.09 | 334 (2.4%) | 334 (2.4%) | 313 (2.3%) | 697 (5.0%) | 559 (4.0%) | 3615 (26.2%) | 82% of 1000 | 0/0/1 | 6.95/8.54/9.22/9.72 | 10.00 "Lost Pulse" (limited_series, A9.99/C10; mixed seed 110 #13, yr 4.5, critic gen 0) |  |
| ALL | B_partner | y5-10 | 10501 | 7.40 | 7.36 | 1125 (10.7%) | 1125 (10.7%) | 1085 (10.3%) | 1467 (14.0%) | 1298 (12.4%) | 3794 (36.1%) | 58% of 1000 | 0/0/4 | 7.14/8.72/9.61/10 | 10.00 "Dead Legacy" (movie/original, A10/C10; mixed seed 21 #25, yr 9.7, critic gen 0) |  |
| ALL | B_partner | y10-15 | 9162 | 7.40 | 7.31 | 1387 (15.1%) | 1387 (15.1%) | 1374 (15.0%) | 2044 (22.3%) | 1557 (17.0%) | 3564 (38.9%) | 57% of 1000 | 0/0/4 | 6.06/8.73/9.68/10 | 10.00 "Broken Shadow" (A10/C10; traditional-holdout seed 30 #24, yr 10.1, critic gen 0) |  |
| ALL | B_partner | y15-20 | 8832 | 7.16 | 7.11 | 1106 (12.5%) | 1106 (12.5%) | 1091 (12.3%) | 1683 (19.1%) | 1325 (15.0%) | 3144 (35.6%) | 58% of 1000 | 0/0/4 | 5.82/8.65/9.68/10 | 10.00 "Hollow Signal" (limited_series, A10/C10; mixed seed 9 #36, yr 15.1, critic gen 0) |  |
| ALL | B_partner | y20-30 | 216 | 6.20 | 6.30 | 11 (5.1%) | 11 (5.1%) | 10 (4.6%) | 16 (7.4%) | 13 (6.0%) | 24 (11.1%) | 95% of 216 | 0/0/0 | 4.46/6.28/8.32/9.69 | 9.86 "Wild Protocol" (limited_series, A10/C9.72; traditional-holdout seed 193 #35, yr 20.0, critic gen 0) |  |

### Prestige progression (Prestige gates growth; cash sustains operations)

`cash-rich but Prestige-locked` = careers that at some week had the cash for the next upgrade but not the Prestige. `bought below gate` must be 0 (engine rule).

| Strategy | Config | Cash median | Prestige median | Prestige/yr | Careers with negative-cash weeks | →6 gate met (Prestige ≥ 200) · median film # | →6 bought · median film # | →6 cash-rich but Prestige-locked | →6 bought below gate | →8 gate met (Prestige ≥ 1000) · median film # | →8 bought · median film # | →8 cash-rich but Prestige-locked | →8 bought below gate |
|---|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|
| tv-first | A_per_season | $16.67M | 5645 | 282.3 | 74% | 100% · #7 | 100% · #7 | 100% | 0 | 100% · #11 | 100% · #12 | 100% | 0 |
| renewal-franchise | A_per_season | $8.13M | 2680 | 134 | 54% | 100% · #7 | 100% · #7 | 100% | 0 | 100% · #11 | 100% · #12 | 100% | 0 |
| traditional-holdout | A_per_season | $17.79M | 7345 | 367.3 | 73% | 100% · #7 | 100% · #7 | 100% | 0 | 100% · #11 | 100% · #12 | 100% | 0 |
| mixed | A_per_season | $17.45M | 9217.5 | 460.9 | 73% | 100% · #7 | 100% · #7 | 100% | 0 | 100% · #12 | 100% · #12 | 100% | 0 |
| tv-duds | A_per_season | $9.43M | 225 | 11.3 | 4% | 64% · #41 | 0% · #— | 100% | 0 | 0% · #— | 0% · #— | 0% | 0 |
| tv-first | B_partner | $12.53M | 5480 | 274 | 74% | 100% · #7 | 100% · #7 | 100% | 0 | 100% · #11 | 100% · #12 | 100% | 0 |
| renewal-franchise | B_partner | $2.80M | 2680 | 134 | 64% | 100% · #7 | 100% · #7 | 100% | 0 | 100% · #11 | 99% · #12 | 98% | 0 |
| traditional-holdout | B_partner | $14.39M | 7200 | 360 | 73% | 100% · #7 | 100% · #7 | 100% | 0 | 100% · #11.5 | 100% · #12 | 100% | 0 |
| mixed | B_partner | $16.46M | 9127.5 | 456.4 | 73% | 100% · #7 | 100% · #7 | 100% | 0 | 100% · #12 | 100% · #12 | 100% | 0 |
| tv-duds | B_partner | $9.10M | 225 | 11.3 | 4% | 64% · #41 | 0% · #— | 100% | 0 | 1% · #49 | 0% · #— | 0% | 0 |

### Prestige milestones awarded per career (mean)

| Strategy | Variant | audience_7_5 | critic_8_5 | first_hall_of_fame | hall_of_fame | ip_gross_1m | ip_gross_5m | ip_viewers_500k | meters_all_70 | careers > 400 Prestige/yr (OUTDATED threshold) |
|---|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|
| tv-first | A_per_season | 20.55 | 8.51 | 0.87 | 3.48 | 3.54 | 2.94 | 3.33 | 26.69 | 0% |
| tv-first | B_partner | 20.61 | 8.16 | 0.84 | 3.37 | 3.57 | 2.75 | 3.36 | 26.8 | 0% |
| renewal-franchise | A_per_season | 7.85 | 1.72 | 0.09 | 0.22 | 1 | 1 | 1 | 31.14 | 0% |
| renewal-franchise | B_partner | 7.84 | 1.71 | 0.09 | 0.23 | 1 | 1 | 1 | 31.2 | 0% |
| traditional-holdout | A_per_season | 26.47 | 13.34 | 0.98 | 6.6 | 4.08 | 2.91 | 3.63 | 29.64 | 27% |
| traditional-holdout | B_partner | 26.55 | 12.99 | 0.97 | 6.26 | 3.99 | 2.96 | 3.6 | 29.64 | 26% |
| mixed | A_per_season | 35.53 | 19.23 | 1 | 10.22 | 2.89 | 1.86 | 2 | 37.97 | 88% |
| mixed | B_partner | 35.66 | 19.21 | 1 | 9.96 | 2.81 | 1.74 | 2 | 38.02 | 87% |
| tv-duds | A_per_season | 3.04 | 0 | 0 | 0 | 0.44 | 0.01 | 0.55 | 0 | 0% |
| tv-duds | B_partner | 3 | 0 | 0 | 0 | 0.43 | 0.01 | 0.53 | 0 | 0% |

### Gate 3 design trade-offs by strategy

(a) money · (b) Prestige · (c) time to TV / streaming · (d) successful IPs · (e) Hall of Fame · (f) last-12-month revenue mix · (g) solvency. Medians unless noted; shares are of careers.

| Strategy | Config | (a) cash median | min cash | ever negative | (b) Prestige | (c) TV unlock yr (share) | streaming live yr (share) | subs end | payback yrs (share) | (d) IPs ≥10K fans | shows · seasons · max | (e) HoF / career | (f) last-12-mo mix: traditional / subs / opex | streaming share | releases |
|---|---|---:|---:|---:|---:|---|---|---:|---|---:|---|---:|---|---:|---:|
| tv-first | A_per_season | $16.67M | $-4K | 74% | 5,645 | 2.7 (100%) | — (0%) | — | — (0%) | 3.0 | 4.0 · 25.0 · 8.0 | 3.0 | $1.30M / $0.00M / $0.00M | — | 33 |
| renewal-franchise | A_per_season | $8.13M | $-1K | 54% | 2,680 | 2.5 (100%) | — (0%) | — | — (0%) | 1.0 | 1.0 · 29.0 · 29.0 | 0.0 | $0.66M / $0.00M / $0.00M | — | 36 |
| traditional-holdout | A_per_season | $17.79M | $-4K | 73% | 7,345 | 2.5 (100%) | — (0%) | — | — (0%) | 6.0 | 4.0 · 20.0 · 6.0 | 6.0 | $1.38M / $0.00M / $0.00M | — | 35 |
| mixed | A_per_season | $17.45M | $-3K | 73% | 9,218 | 2.7 (100%) | 7.3 (100%) | 87,649 | 1.9 (100%) | 8.0 | 3.0 · 12.0 · 6.0 | 10.0 | $0.46M / $2.25M / $-1.09M | 83% | 44 |
| tv-duds | A_per_season | $9.43M | $4K | 4% | 225 | 14.0 (45%) | — (0%) | — | — (0%) | 0.0 | 0.0 · 0.0 · 0.0 | 0.0 | $0.42M / $0.00M / $0.00M | — | 65 |
| tv-first | B_partner | $12.53M | $-4K | 74% | 5,480 | 2.7 (100%) | — (0%) | — | — (0%) | 3.5 | 4.0 · 25.0 · 8.0 | 3.0 | $1.26M / $0.00M / $0.00M | — | 33 |
| renewal-franchise | B_partner | $2.80M | $-4K | 64% | 2,680 | 2.5 (100%) | — (0%) | — | — (0%) | 1.0 | 1.0 · 29.0 · 29.0 | 0.0 | $0.61M / $0.00M / $0.00M | — | 37 |
| traditional-holdout | B_partner | $14.39M | $-4K | 73% | 7,200 | 2.5 (100%) | — (0%) | — | — (0%) | 5.0 | 4.0 · 21.0 · 6.0 | 6.0 | $1.32M / $0.00M / $0.00M | — | 35 |
| mixed | B_partner | $16.46M | $-3K | 73% | 9,128 | 2.7 (100%) | 7.3 (100%) | 87,523 | 1.9 (100%) | 8.0 | 3.0 · 12.0 · 6.0 | 9.5 | $0.46M / $2.24M / $-1.09M | 83% | 44 |
| tv-duds | B_partner | $9.10M | $4K | 4% | 225 | 14.0 (45%) | — (0%) | — | — (0%) | 0.0 | 0.0 · 0.0 · 0.0 | 0.0 | $0.43M / $0.00M / $0.00M | — | 65 |

### Formats: share of releases · mean score · HoF % · net per production week; Prestige sources

| Strategy | Config | limited_series: share · avg · HoF% · net/prod-wk | limited_series/original: share · avg · HoF% · net/prod-wk | movie: share · avg · HoF% · net/prod-wk | movie/original: share · avg · HoF% · net/prod-wk | tv: share · avg · HoF% · net/prod-wk | tv/original: share · avg · HoF% · net/prod-wk | Prestige by format | top Prestige sources |
|---|---|---|---|---|---|---|---|---|---|
| tv-first | A_per_season | 21% · 7.17 · 0.6% · $20.9K | — | 3% · 5.6 · 0% · $9.9K | — | 76% · 8.01 · 13.9% · $28.7K | — | limited_series 6.8%, tv 93.2% | audience_7_5 27.1%, meters_all_70 23.5%, critic_8_5 12.7%, hall_of_fame 12.3% |
| renewal-franchise | A_per_season | — | — | 21% · 6.94 · 0.6% · $18.0K | — | 79% · 6.31 · 0.6% · $19.1K | — | movie 14%, tv 86% | meters_all_70 56.7%, audience_7_5 21.4%, ip_viewers_500k 5.5%, ip_gross_5m 5.5% |
| traditional-holdout | A_per_season | 13% · 8.13 · 22.2% · $26.9K | — | 30% · 7.61 · 13.4% · $21.9K | — | 57% · 8.38 · 20.7% · $30.1K | — | limited_series 11.1%, movie 17.7%, tv 71.2% | audience_7_5 26.8%, meters_all_70 20%, hall_of_fame 17.8%, critic_8_5 15.3% |
| mixed | A_per_season | 33% · 7.95 · 16.3% · $26.0K | 10% · 8.85 · 40.2% · $-8.3K | 21% · 8.35 · 29.3% · $25.7K | 9% · 8.85 · 42.5% · $-7.6K | 20% · 8.23 · 11.6% · $29.5K | 8% · 8.39 · 22.8% · $-8.5K | limited_series 24.3%, tv 23.2%, movie 21%, limited_series/original 11.7%, movie/original 11.2%, tv/original 8.6% | audience_7_5 28.9%, hall_of_fame 22.2%, meters_all_70 20.6%, critic_8_5 17.7% |
| tv-duds | A_per_season | — | — | 88% · 6.33 · 0% · $11.9K | — | 12% · 5.33 · 0% · $8.8K | — | movie 60.1%, tv 39.9% | audience_7_5 64.1%, ip_viewers_500k 22.9%, ip_gross_1m 12.3%, ip_gross_5m 0.6% |
| tv-first | B_partner | 21% · 7.17 · 0.6% · $20.9K | — | 3% · 5.6 · 0% · $9.9K | — | 76% · 7.99 · 13.4% · $23.7K | — | limited_series 6.9%, tv 93.1% | audience_7_5 27.6%, meters_all_70 23.9%, critic_8_5 12.4%, hall_of_fame 12% |
| renewal-franchise | B_partner | — | — | 21% · 6.94 · 0.6% · $18.0K | — | 79% · 6.31 · 0.6% · $12.9K | — | movie 14%, tv 86% | meters_all_70 56.8%, audience_7_5 21.4%, ip_viewers_500k 5.5%, ip_gross_5m 5.5% |
| traditional-holdout | B_partner | 13% · 8.11 · 20% · $26.5K | — | 30% · 7.62 · 13.1% · $21.8K | — | 57% · 8.37 · 19.7% · $25.8K | — | limited_series 10.8%, movie 18.2%, tv 71% | audience_7_5 27.2%, meters_all_70 20.3%, hall_of_fame 17.1%, critic_8_5 15.1% |
| mixed | B_partner | 33% · 7.95 · 15.3% · $25.9K | 10% · 8.84 · 40.9% · $-8.2K | 21% · 8.34 · 28.4% · $25.5K | 9% · 8.83 · 41.2% · $-7.5K | 19% · 8.23 · 11.4% · $26.7K | 8% · 8.41 · 22.7% · $-8.5K | limited_series 24.3%, tv 23.3%, movie 20.9%, limited_series/original 11.7%, movie/original 11.2%, tv/original 8.6% | audience_7_5 29.2%, hall_of_fame 21.8%, meters_all_70 20.8%, critic_8_5 17.9% |
| tv-duds | B_partner | — | — | 88% · 6.33 · 0% · $11.9K | — | 13% · 5.31 · 0% · $4.4K | — | movie 61.3%, tv 38.7% | audience_7_5 64.6%, ip_viewers_500k 22.8%, ip_gross_1m 12.5%, ip_gross_5m 0.2% |

### Gate 3 provisional flags

| Variant | Flag | Fired | Evidence |
|---|---|---|---|
| A_per_season | STREAMING_INFINITE_GROWTH | no | not fired: 0/200 launched careers reached ≥90% of the reachable subscriber market (growth is capped by design; this flags saturation) [PROVISIONAL threshold] |
| A_per_season | SUBSCRIBER_CHURN_SPIRAL | no | not fired: 0/200 launched careers lost >60% of subscribers within 3 years [PROVISIONAL threshold] |
| A_per_season | TV_SEASON_TOO_PROFITABLE | **yes** | 4393/17694 finished traditional TV seasons netted >2× the batch's pooled movie net per production week ($15,243) [PROVISIONAL threshold] |
| A_per_season | TV_SEASON_TOO_LONG | **yes** | 250 careers kept one show running ≥12 seasons (fatigue cap 0.35 may allow endless renewals) [PROVISIONAL threshold] |
| A_per_season | TV_NO_RENEWAL_PATH | no | not fired: 2/890 TV careers never made a second season [PROVISIONAL threshold] |
| A_per_season | MIXED_ECONOMY_SOFTLOCK | **yes** | 1/1000 careers spent ≥3 years with negative cash [PROVISIONAL threshold] |
| A_per_season | FORMAT_DOMINANT | no | not fired: best cash: traditional-holdout; best Prestige: mixed; fires only if one strategy leads both by >50% [PROVISIONAL threshold] |
| A_per_season | DELAYED_STUDIO_PROGRESSION | no | not fired: TV not unlocked by year 8: 0/800; streaming not live by year 15: 0/200 [PROVISIONAL threshold] |
| B_partner | STREAMING_INFINITE_GROWTH | no | not fired: 0/200 launched careers reached ≥90% of the reachable subscriber market (growth is capped by design; this flags saturation) [PROVISIONAL threshold] |
| B_partner | SUBSCRIBER_CHURN_SPIRAL | no | not fired: 0/200 launched careers lost >60% of subscribers within 3 years [PROVISIONAL threshold] |
| B_partner | TV_SEASON_TOO_PROFITABLE | no | not fired: 1576/17728 finished traditional TV seasons netted >2× the batch's pooled movie net per production week ($15,204) [PROVISIONAL threshold] |
| B_partner | TV_SEASON_TOO_LONG | **yes** | 252 careers kept one show running ≥12 seasons (fatigue cap 0.35 may allow endless renewals) [PROVISIONAL threshold] |
| B_partner | TV_NO_RENEWAL_PATH | no | not fired: 2/890 TV careers never made a second season [PROVISIONAL threshold] |
| B_partner | MIXED_ECONOMY_SOFTLOCK | **yes** | 31/1000 careers spent ≥3 years with negative cash [PROVISIONAL threshold] |
| B_partner | FORMAT_DOMINANT | no | not fired: best cash: mixed; best Prestige: mixed; fires only if one strategy leads both by >50% [PROVISIONAL threshold] |
| B_partner | DELAYED_STUDIO_PROGRESSION | no | not fired: TV not unlocked by year 8: 0/800; streaming not live by year 15: 0/200 [PROVISIONAL threshold] |

### Diagnostic flags fired

| Variant | Fired |
|---|---|
| A_per_season | EARLY_SOFTLOCK, QUALITY_INFLATION |
| B_partner | EARLY_SOFTLOCK, QUALITY_INFLATION, DEAD_STRATEGY, DOMINANT_STRATEGY |
