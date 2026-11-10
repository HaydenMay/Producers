# Experiment: G3_season_size

> **Simulation assumptions, not design locks.** Paired seeds: every variant runs the same seeds and strategies; only the config overrides differ.

Season-order size: agents order the largest allowed season up to the preference (cost/return/cadence trade-off). One dimension changes.

- Seeds 1–200 (200) · strategies: tv-first, renewal-franchise, traditional-holdout · reference variant: **order_max**
- Ruleset v9.61-gate3-0.1 · measured runtime 177123 ms for 4800 careers

| Variant | Config hash | Note |
|---|---|---|
| order_5 | 7ee8f89d |  `{"agents":{"tvOrderPreference":5}}` |
| order_10 | 1ac4db4b |  `{"agents":{"tvOrderPreference":10}}` |
| order_20 | 83fca49d |  `{"agents":{"tvOrderPreference":20}}` |
| order_max | bd4dd631 |  `{"agents":{"tvOrderPreference":"max"}}` |

## 10-year careers (in-game calendar horizon; productions vary by strategy)

Invariant violations across all variants: **0**.

### Medians by strategy

| Strategy | Variant | endCash | prestige | prestigePerRelease | meanAudience | meanCritic | share8plus | share9plus | shareLate8plus | hofShare | maxStaffEnd | staffCount | meanStaffStat | upgrades | firstUpgradeWeek | years | maxIpFans | negativeCashWeeks |
|---|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|
| tv-first | order_5 | $2207K | 4552.50 | 146.90 | 7.75 | 7.67 | 42% | 6% | 54% | 6% | 8 | 8 | 77.60 | 2 | 124 | 10 | 96650.50 | 2 |
| tv-first | order_10 | $5324K | 3330 | 145.30 | 7.66 | 7.63 | 41% | 4% | 53% | 4% | 8 | 8 | 72.50 | 2 | 124 | 10 | 103572.50 | 2 |
| tv-first | order_20 | $5840K | 3115 | 148.10 | 7.69 | 7.63 | 42% | 0% | 56% | 0% | 8 | 8 | 71.35 | 2 | 124 | 10 | 86425.50 | 2 |
| tv-first | order_max | $5840K | 3115 | 148.10 | 7.69 | 7.63 | 42% | 0% | 56% | 0% | 8 | 8 | 71.35 | 2 | 124 | 10 | 86425.50 | 2 |
| renewal-franchise | order_5 | $1102K | 2437.50 | 76.20 | 6.57 | 6.50 | 9% | 0% | 0% | 0% | 8 | 8 | 78.40 | 2 | 112 | 10 | 86668 | 1 |
| renewal-franchise | order_10 | $3716K | 2025 | 86.50 | 6.89 | 6.78 | 17% | 0% | 0% | 0% | 8 | 8 | 73.20 | 2 | 112 | 10 | 79665 | 1 |
| renewal-franchise | order_20 | $3829K | 1950 | 88.60 | 6.96 | 6.81 | 17% | 0% | 0% | 0% | 8 | 8 | 72.40 | 2 | 112 | 10 | 77851.50 | 1 |
| renewal-franchise | order_max | $3829K | 1950 | 88.60 | 6.96 | 6.81 | 17% | 0% | 0% | 0% | 8 | 8 | 72.40 | 2 | 112 | 10 | 77851.50 | 1 |
| traditional-holdout | order_5 | $3429K | 5777.50 | 181.50 | 8.11 | 7.97 | 58% | 16% | 77% | 16% | 8 | 8 | 78.10 | 2 | 114 | 10 | 79222 | 2 |
| traditional-holdout | order_10 | $5807K | 4295 | 177.70 | 7.99 | 7.90 | 56% | 12% | 80% | 12% | 8 | 8 | 73.80 | 2 | 114 | 10 | 87319 | 2 |
| traditional-holdout | order_20 | $6305K | 3705 | 166.25 | 7.89 | 7.83 | 52% | 9% | 78% | 9% | 8 | 8 | 72.20 | 2 | 114 | 10 | 78623 | 2 |
| traditional-holdout | order_max | $6305K | 3705 | 166.25 | 7.89 | 7.83 | 52% | 9% | 78% | 9% | 8 | 8 | 72.20 | 2 | 114 | 10 | 78623 | 2 |

### Paired deltas vs **order_max** (median of per-seed differences; share of seeds where the variant is higher)

| Strategy | Variant | Δ endCash | Δ prestige | Δ share8plus | Δ meanAudience |
|---|---|---:|---:|---:|---:|
| tv-first | order_5 | $-3664K (0%) | 1322.50 (93%) | 2% (59%) | 0.08 (59%) |
| tv-first | order_10 | $-479K (7%) | 175 (94%) | -1% (43%) | -0.01 (40%) |
| tv-first | order_20 | $0K (0%) | 0 (0%) | 0% (0%) | 0 (0%) |
| renewal-franchise | order_5 | $-2765K (0%) | 465 (98%) | -5% (0%) | -0.34 (1%) |
| renewal-franchise | order_10 | $-106K (17%) | 50 (74%) | -1% (0%) | -0.06 (1%) |
| renewal-franchise | order_20 | $0K (0%) | 0 (0%) | 0% (0%) | 0 (0%) |
| traditional-holdout | order_5 | $-3002K (1%) | 1955 (100%) | 6% (75%) | 0.21 (79%) |
| traditional-holdout | order_10 | $-556K (10%) | 515 (91%) | 4% (76%) | 0.07 (78%) |
| traditional-holdout | order_20 | $0K (0%) | 0 (0%) | 0% (0%) | 0 (0%) |

### Mean review score (avg of Audience+Critic) by production index

| Strategy | Variant | #1 | #3 | #5 | #10 | #20 | #30 | #50 |
|---|---|---:|---:|---:|---:|---:|---:|---:|
| tv-first | order_5 | 5.60 | 6.31 | 7.44 | 8.15 | 8.19 | 7.71 | — |
| tv-first | order_10 | 5.60 | 6.31 | 7.44 | 8.18 | 8.35 | — | — |
| tv-first | order_20 | 5.60 | 6.31 | 7.44 | 8.18 | 8.32 | — | — |
| tv-first | order_max | 5.60 | 6.31 | 7.44 | 8.18 | 8.32 | — | — |
| renewal-franchise | order_5 | 5.65 | 6.33 | 7.40 | 8.00 | 5.80 | 5.82 | — |
| renewal-franchise | order_10 | 5.65 | 6.33 | 7.40 | 8.04 | 5.85 | — | — |
| renewal-franchise | order_20 | 5.65 | 6.33 | 7.40 | 8.04 | 5.84 | — | — |
| renewal-franchise | order_max | 5.65 | 6.33 | 7.40 | 8.04 | 5.84 | — | — |
| traditional-holdout | order_5 | 5.62 | 6.29 | 7.39 | 8.19 | 8.37 | 8.56 | — |
| traditional-holdout | order_10 | 5.62 | 6.29 | 7.39 | 8.19 | 8.48 | — | — |
| traditional-holdout | order_20 | 5.62 | 6.29 | 7.39 | 8.19 | 8.47 | — | — |
| traditional-holdout | order_max | 5.62 | 6.29 | 7.39 | 8.19 | 8.47 | — | — |

### Great films — all strategies pooled, by release window

Denominators are films in that window. HoF = average of Audience and Critic ≥ hofThreshold (9.0). `≥9` is inclusive, `>9` strict.

| Strategy | Config | Window | Films (n) | Avg Aud | Avg Crit | HoF n (%) | Avg ≥9 n (%) | Avg >9 n (%) | Aud ≥9 n (%) | Crit ≥9 n (%) | 8+ n (%) | Careers with 0 HoF | HoF/career p10/p50/p90 | Best/career p10/p50/p90/p99 | Best combined movie | Prestige median |
|---|---|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---|---|---|---:|
| ALL | order_5 | 1-5 | 3000 | 6.46 | 6.50 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 1 (0.0%) | 101 (3.4%) | 100% of 600 | 0/0/0 | 7.05/7.61/8.16/8.65 | 8.91 "Midnight Rising" (A8.47/C9.36; renewal-franchise seed 15 #5, yr 1.5, critic gen 0) |  |
| ALL | order_5 | 6-20 | 9000 | 7.82 | 7.67 | 573 (6.4%) | 573 (6.4%) | 553 (6.1%) | 1021 (11.3%) | 764 (8.5%) | 4029 (44.8%) | 62% of 600 | 0/0/3 | 8.23/8.8/9.49/9.96 | 10.00 "Red Storm: Season 3" (tv, A10/C10; traditional-holdout seed 110 #20, yr 6.3, critic gen 0) |  |
| ALL | order_5 | 21-50 | 6922 | 7.46 | 7.31 | 916 (13.2%) | 916 (13.2%) | 888 (12.8%) | 1364 (19.7%) | 1059 (15.3%) | 2834 (40.9%) | 55% of 600 | 0/0/5 | 5.68/8.87/9.65/10 | 10.00 "Wild Legacy: Season 4" (tv, A10/C10; traditional-holdout seed 30 #31, yr 9.7, critic gen 0) |  |
| ALL | order_5 | 51-100 | 0 | NaN | NaN | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0% of 0 | — | — | — |  |
| ALL | order_5 | all | 18922 | 7.47 | 7.35 | 1489 (7.9%) | 1489 (7.9%) | 1441 (7.6%) | 2385 (12.6%) | 1824 (9.6%) | 6964 (36.8%) | 42% of 600 | 0/1/7 | 8.31/9.15/9.72/10 | 10.00 "Wild Legacy: Season 4" (tv, A10/C10; traditional-holdout seed 30 #31, yr 9.7, critic gen 0) |  |
| ALL | order_10 | 1-5 | 3000 | 6.46 | 6.50 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 1 (0.0%) | 101 (3.4%) | 100% of 600 | 0/0/0 | 7.05/7.61/8.16/8.65 | 8.91 "Midnight Rising" (A8.47/C9.36; renewal-franchise seed 15 #5, yr 1.5, critic gen 0) |  |
| ALL | order_10 | 6-20 | 9000 | 7.84 | 7.71 | 710 (7.9%) | 710 (7.9%) | 675 (7.5%) | 1104 (12.3%) | 933 (10.4%) | 4177 (46.4%) | 58% of 600 | 0/0/4 | 8.25/8.86/9.5/9.99 | 10.00 "Midnight Rising: Season 2" (tv, A10/C10; tv-first seed 21 #19, yr 7.3, critic gen 0) |  |
| ALL | order_10 | 21-50 | 2150 | 7.52 | 7.39 | 289 (13.4%) | 289 (13.4%) | 274 (12.7%) | 410 (19.1%) | 357 (16.6%) | 952 (44.3%) | 76% of 600 | 0/0/2 | 5.65/8.06/9.43/10 | 10.00 "Silver Night" (A10/C10; traditional-holdout seed 43 #26, yr 9.3, critic gen 0) |  |
| ALL | order_10 | 51-100 | 0 | NaN | NaN | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0% of 0 | — | — | — |  |
| ALL | order_10 | all | 14150 | 7.50 | 7.41 | 999 (7.1%) | 999 (7.1%) | 949 (6.7%) | 1514 (10.7%) | 1291 (9.1%) | 5230 (37.0%) | 52% of 600 | 0/0/5 | 8.28/8.95/9.61/10 | 10.00 "Midnight Rising: Season 2" (tv, A10/C10; tv-first seed 21 #19, yr 7.3, critic gen 0) |  |
| ALL | order_20 | 1-5 | 3000 | 6.46 | 6.50 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 1 (0.0%) | 101 (3.4%) | 100% of 600 | 0/0/0 | 7.05/7.61/8.16/8.65 | 8.91 "Midnight Rising" (A8.47/C9.36; renewal-franchise seed 15 #5, yr 1.5, critic gen 0) |  |
| ALL | order_20 | 6-20 | 8957 | 7.84 | 7.71 | 719 (8.0%) | 719 (8.0%) | 687 (7.7%) | 1115 (12.4%) | 930 (10.4%) | 4152 (46.4%) | 58% of 600 | 0/0/4 | 8.23/8.86/9.5/9.99 | 10.00 "Midnight Rising: Season 2" (tv, A10/C10; tv-first seed 21 #19, yr 7.5, critic gen 0) |  |
| ALL | order_20 | 21-50 | 1026 | 7.30 | 7.18 | 131 (12.8%) | 131 (12.8%) | 127 (12.4%) | 176 (17.1%) | 154 (15.0%) | 415 (40.5%) | 81% of 490 | 0/0/1 | 5.62/7.85/9.31/9.88 | 10.00 "Silver Night" (A10/C10; traditional-holdout seed 43 #26, yr 9.3, critic gen 0) |  |
| ALL | order_20 | 51-100 | 0 | NaN | NaN | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0% of 0 | — | — | — |  |
| ALL | order_20 | all | 12983 | 7.48 | 7.39 | 850 (6.5%) | 850 (6.5%) | 814 (6.3%) | 1291 (9.9%) | 1085 (8.4%) | 4668 (36.0%) | 53% of 600 | 0/0/4 | 8.27/8.92/9.55/10 | 10.00 "Midnight Rising: Season 2" (tv, A10/C10; tv-first seed 21 #19, yr 7.5, critic gen 0) |  |
| ALL | order_max | 1-5 | 3000 | 6.46 | 6.50 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 1 (0.0%) | 101 (3.4%) | 100% of 600 | 0/0/0 | 7.05/7.61/8.16/8.65 | 8.91 "Midnight Rising" (A8.47/C9.36; renewal-franchise seed 15 #5, yr 1.5, critic gen 0) |  |
| ALL | order_max | 6-20 | 8957 | 7.84 | 7.71 | 719 (8.0%) | 719 (8.0%) | 687 (7.7%) | 1115 (12.4%) | 930 (10.4%) | 4152 (46.4%) | 58% of 600 | 0/0/4 | 8.23/8.86/9.5/9.99 | 10.00 "Midnight Rising: Season 2" (tv, A10/C10; tv-first seed 21 #19, yr 7.5, critic gen 0) |  |
| ALL | order_max | 21-50 | 1026 | 7.30 | 7.18 | 131 (12.8%) | 131 (12.8%) | 127 (12.4%) | 176 (17.1%) | 154 (15.0%) | 415 (40.5%) | 81% of 490 | 0/0/1 | 5.62/7.85/9.31/9.88 | 10.00 "Silver Night" (A10/C10; traditional-holdout seed 43 #26, yr 9.3, critic gen 0) |  |
| ALL | order_max | 51-100 | 0 | NaN | NaN | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0% of 0 | — | — | — |  |
| ALL | order_max | all | 12983 | 7.48 | 7.39 | 850 (6.5%) | 850 (6.5%) | 814 (6.3%) | 1291 (9.9%) | 1085 (8.4%) | 4668 (36.0%) | 53% of 600 | 0/0/4 | 8.27/8.92/9.55/10 | 10.00 "Midnight Rising: Season 2" (tv, A10/C10; tv-first seed 21 #19, yr 7.5, critic gen 0) |  |

### Great films by strategy (whole career)

| Strategy | Config | Window | Films (n) | Avg Aud | Avg Crit | HoF n (%) | Avg ≥9 n (%) | Avg >9 n (%) | Aud ≥9 n (%) | Crit ≥9 n (%) | 8+ n (%) | Careers with 0 HoF | HoF/career p10/p50/p90 | Best/career p10/p50/p90/p99 | Best combined movie | Prestige median |
|---|---|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---|---|---|---:|
| tv-first | order_5 | all | 6201 | 7.75 | 7.64 | 474 (7.6%) | 474 (7.6%) | 456 (7.3%) | 847 (13.7%) | 599 (9.7%) | 2576 (41.5%) | 31% of 200 | 0/2/6 | 8.65/9.23/9.68/9.85 | 10.00 "Midnight Rising" (tv, A10/C10; tv-first seed 131 #24, yr 7.6, critic gen 0) | 4552.5 |
| renewal-franchise | order_5 | all | 6400 | 6.58 | 6.49 | 31 (0.5%) | 31 (0.5%) | 27 (0.4%) | 123 (1.9%) | 64 (1.0%) | 757 (11.8%) | 91% of 200 | 0/0/0 | 8.06/8.5/8.93/9.29 | 9.62 "Red Run: Season 2" (tv, A9.51/C9.72; renewal-franchise seed 27 #11, yr 3.4, critic gen 0) | 2437.5 |
| traditional-holdout | order_5 | all | 6321 | 8.09 | 7.94 | 984 (15.6%) | 984 (15.6%) | 958 (15.2%) | 1415 (22.4%) | 1161 (18.4%) | 3631 (57.4%) | 5% of 200 | 1/5/9 | 9.2/9.56/9.81/10 | 10.00 "Wild Legacy: Season 4" (tv, A10/C10; traditional-holdout seed 30 #31, yr 9.7, critic gen 0) | 5777.5 |
| tv-first | order_10 | all | 4584 | 7.66 | 7.57 | 333 (7.3%) | 333 (7.3%) | 311 (6.8%) | 492 (10.7%) | 420 (9.2%) | 1823 (39.8%) | 49% of 200 | 0/1/5 | 8.41/9.02/9.51/10 | 10.00 "Midnight Rising: Season 2" (tv, A10/C10; tv-first seed 21 #19, yr 7.3, critic gen 0) | 3330 |
| renewal-franchise | order_10 | all | 4669 | 6.87 | 6.77 | 45 (1.0%) | 45 (1.0%) | 40 (0.9%) | 139 (3.0%) | 83 (1.8%) | 808 (17.3%) | 91% of 200 | 0/0/0 | 8.07/8.5/8.93/9.46 | 9.58 "Red Run: Season 4" (tv, A9.51/C9.65; renewal-franchise seed 27 #13, yr 4.6, critic gen 0) | 2025 |
| traditional-holdout | order_10 | all | 4897 | 7.94 | 7.87 | 621 (12.7%) | 621 (12.7%) | 598 (12.2%) | 883 (18.0%) | 788 (16.1%) | 2599 (53.1%) | 16% of 200 | 0/3/6 | 8.8/9.41/9.77/10 | 10.00 "Silver Night" (A10/C10; traditional-holdout seed 43 #26, yr 9.3, critic gen 0) | 4295 |
| tv-first | order_20 | all | 4177 | 7.66 | 7.57 | 311 (7.5%) | 311 (7.5%) | 294 (7.0%) | 453 (10.8%) | 369 (8.8%) | 1654 (39.6%) | 51% of 200 | 0/0/4 | 8.4/8.98/9.5/10 | 10.00 "Midnight Rising: Season 2" (tv, A10/C10; tv-first seed 21 #19, yr 7.5, critic gen 0) | 3115 |
| renewal-franchise | order_20 | all | 4411 | 6.92 | 6.82 | 44 (1.0%) | 44 (1.0%) | 39 (0.9%) | 139 (3.1%) | 82 (1.9%) | 807 (18.3%) | 91% of 200 | 0/0/0 | 8.07/8.5/8.93/9.46 | 9.59 "Red Run: Season 4" (tv, A9.52/C9.65; renewal-franchise seed 27 #13, yr 4.8, critic gen 0) | 1950 |
| traditional-holdout | order_20 | all | 4395 | 7.87 | 7.80 | 495 (11.3%) | 495 (11.3%) | 481 (10.9%) | 699 (15.9%) | 634 (14.4%) | 2207 (50.2%) | 18% of 200 | 0/2/5.1 | 8.77/9.32/9.76/10 | 10.00 "Silver Night" (A10/C10; traditional-holdout seed 43 #26, yr 9.3, critic gen 0) | 3705 |
| tv-first | order_max | all | 4177 | 7.66 | 7.57 | 311 (7.5%) | 311 (7.5%) | 294 (7.0%) | 453 (10.8%) | 369 (8.8%) | 1654 (39.6%) | 51% of 200 | 0/0/4 | 8.4/8.98/9.5/10 | 10.00 "Midnight Rising: Season 2" (tv, A10/C10; tv-first seed 21 #19, yr 7.5, critic gen 0) | 3115 |
| renewal-franchise | order_max | all | 4411 | 6.92 | 6.82 | 44 (1.0%) | 44 (1.0%) | 39 (0.9%) | 139 (3.1%) | 82 (1.9%) | 807 (18.3%) | 91% of 200 | 0/0/0 | 8.07/8.5/8.93/9.46 | 9.59 "Red Run: Season 4" (tv, A9.52/C9.65; renewal-franchise seed 27 #13, yr 4.8, critic gen 0) | 1950 |
| traditional-holdout | order_max | all | 4395 | 7.87 | 7.80 | 495 (11.3%) | 495 (11.3%) | 481 (10.9%) | 699 (15.9%) | 634 (14.4%) | 2207 (50.2%) | 18% of 200 | 0/2/5.1 | 8.77/9.32/9.76/10 | 10.00 "Silver Night" (A10/C10; traditional-holdout seed 43 #26, yr 9.3, critic gen 0) | 3705 |

### Greatest single films (all strategies, whole sample; reproducible from seed + config hash)

| Variant | Best combined | Best Audience | Best Critic | Year band with most HoF |
|---|---|---|---|---|
| order_5 | 10.00 "Wild Legacy: Season 4" (tv, A10/C10; traditional-holdout seed 30 #31, yr 9.7, critic gen 0) | 10.00 "Wild Legacy: Season 4" (tv, A10/C10; traditional-holdout seed 30 #31, yr 9.7, critic gen 0) | 10.00 "Wild Legacy: Season 4" (tv, A10/C10; traditional-holdout seed 30 #31, yr 9.7, critic gen 0) | y10-15: 30.9% of 42 |
| order_10 | 10.00 "Midnight Rising: Season 2" (tv, A10/C10; tv-first seed 21 #19, yr 7.3, critic gen 0) | 10.00 "Midnight Rising: Season 2" (tv, A10/C10; tv-first seed 21 #19, yr 7.3, critic gen 0) | 10.00 "Midnight Rising: Season 2" (tv, A10/C10; tv-first seed 21 #19, yr 7.3, critic gen 0) | y5-10: 12.6% of 6198 |
| order_20 | 10.00 "Midnight Rising: Season 2" (tv, A10/C10; tv-first seed 21 #19, yr 7.5, critic gen 0) | 10.00 "Midnight Rising: Season 2" (tv, A10/C10; tv-first seed 21 #19, yr 7.5, critic gen 0) | 10.00 "Midnight Rising: Season 2" (tv, A10/C10; tv-first seed 21 #19, yr 7.5, critic gen 0) | y5-10: 12.7% of 5092 |
| order_max | 10.00 "Midnight Rising: Season 2" (tv, A10/C10; tv-first seed 21 #19, yr 7.5, critic gen 0) | 10.00 "Midnight Rising: Season 2" (tv, A10/C10; tv-first seed 21 #19, yr 7.5, critic gen 0) | 10.00 "Midnight Rising: Season 2" (tv, A10/C10; tv-first seed 21 #19, yr 7.5, critic gen 0) | y5-10: 12.7% of 5092 |

### Great films by in-game year (all strategies pooled)

| Strategy | Config | Window | Films (n) | Avg Aud | Avg Crit | HoF n (%) | Avg ≥9 n (%) | Avg >9 n (%) | Aud ≥9 n (%) | Crit ≥9 n (%) | 8+ n (%) | Careers with 0 HoF | HoF/career p10/p50/p90 | Best/career p10/p50/p90/p99 | Best combined movie | Prestige median |
|---|---|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---|---|---|---:|
| ALL | order_5 | y0-5 | 9257 | 7.42 | 7.35 | 251 (2.7%) | 251 (2.7%) | 237 (2.6%) | 534 (5.8%) | 392 (4.2%) | 2812 (30.4%) | 79% of 600 | 0/0/2 | 8.18/8.62/9.25/9.67 | 10.00 "Last Signal" (tv, A10/C10; traditional-holdout seed 126 #14, yr 4.5, critic gen 0) |  |
| ALL | order_5 | y5-10 | 9623 | 7.51 | 7.34 | 1225 (12.7%) | 1225 (12.7%) | 1191 (12.4%) | 1831 (19.0%) | 1416 (14.7%) | 4115 (42.8%) | 48% of 600 | 0/1/6 | 6.04/9.04/9.71/10 | 10.00 "Wild Legacy: Season 4" (tv, A10/C10; traditional-holdout seed 30 #31, yr 9.7, critic gen 0) |  |
| ALL | order_5 | y10-15 | 42 | 8.75 | 8.60 | 13 (30.9%) | 13 (30.9%) | 13 (30.9%) | 20 (47.6%) | 16 (38.1%) | 37 (88.1%) | 69% of 42 | 0/0/1 | 7.98/8.61/9.3/9.91 | 9.99 "Hollow Shadow: Season 3" (tv, A9.97/C10; traditional-holdout seed 48 #32, yr 10.0, critic gen 0) |  |
| ALL | order_10 | y0-5 | 7897 | 7.43 | 7.37 | 212 (2.7%) | 212 (2.7%) | 202 (2.6%) | 460 (5.8%) | 347 (4.4%) | 2551 (32.3%) | 84% of 600 | 0/0/2 | 8.16/8.57/9.16/9.59 | 9.78 "Broken Signal" (tv, A9.72/C9.84; traditional-holdout seed 18 #12, yr 4.0, critic gen 0) |  |
| ALL | order_10 | y5-10 | 6198 | 7.58 | 7.46 | 783 (12.6%) | 783 (12.6%) | 744 (12.0%) | 1047 (16.9%) | 938 (15.1%) | 2661 (42.9%) | 58% of 600 | 0/0/4 | 6.87/8.75/9.58/10 | 10.00 "Midnight Rising: Season 2" (tv, A10/C10; tv-first seed 21 #19, yr 7.3, critic gen 0) |  |
| ALL | order_10 | y10-15 | 55 | 7.44 | 7.15 | 4 (7.3%) | 4 (7.3%) | 3 (5.5%) | 7 (12.7%) | 6 (10.9%) | 18 (32.7%) | 93% of 55 | 0/0/0 | 5.78/7.14/8.91/9.64 | 9.74 "Iron Signal: Season 2" (tv, A9.47/C10; traditional-holdout seed 173 #24, yr 10.0, critic gen 0) |  |
| ALL | order_20 | y0-5 | 7875 | 7.43 | 7.37 | 202 (2.6%) | 202 (2.6%) | 192 (2.4%) | 449 (5.7%) | 338 (4.3%) | 2530 (32.1%) | 84% of 600 | 0/0/2 | 8.16/8.57/9.16/9.59 | 9.78 "Broken Signal" (tv, A9.72/C9.84; traditional-holdout seed 18 #12, yr 4.0, critic gen 0) |  |
| ALL | order_20 | y5-10 | 5092 | 7.55 | 7.43 | 646 (12.7%) | 646 (12.7%) | 620 (12.2%) | 840 (16.5%) | 745 (14.6%) | 2133 (41.9%) | 59% of 600 | 0/0/4 | 6.87/8.73/9.54/10 | 10.00 "Midnight Rising: Season 2" (tv, A10/C10; tv-first seed 21 #19, yr 7.5, critic gen 0) |  |
| ALL | order_20 | y10-15 | 16 | 7.20 | 6.97 | 2 (12.5%) | 2 (12.5%) | 2 (12.5%) | 2 (12.5%) | 2 (12.5%) | 5 (31.3%) | 88% of 16 | 0/0/0.5 | 5.63/7.12/8.86/9.35 | 9.41 "Broken Pulse: Season 5" (tv, A9.37/C9.45; traditional-holdout seed 171 #22, yr 10.0, critic gen 0) |  |
| ALL | order_max | y0-5 | 7875 | 7.43 | 7.37 | 202 (2.6%) | 202 (2.6%) | 192 (2.4%) | 449 (5.7%) | 338 (4.3%) | 2530 (32.1%) | 84% of 600 | 0/0/2 | 8.16/8.57/9.16/9.59 | 9.78 "Broken Signal" (tv, A9.72/C9.84; traditional-holdout seed 18 #12, yr 4.0, critic gen 0) |  |
| ALL | order_max | y5-10 | 5092 | 7.55 | 7.43 | 646 (12.7%) | 646 (12.7%) | 620 (12.2%) | 840 (16.5%) | 745 (14.6%) | 2133 (41.9%) | 59% of 600 | 0/0/4 | 6.87/8.73/9.54/10 | 10.00 "Midnight Rising: Season 2" (tv, A10/C10; tv-first seed 21 #19, yr 7.5, critic gen 0) |  |
| ALL | order_max | y10-15 | 16 | 7.20 | 6.97 | 2 (12.5%) | 2 (12.5%) | 2 (12.5%) | 2 (12.5%) | 2 (12.5%) | 5 (31.3%) | 88% of 16 | 0/0/0.5 | 5.63/7.12/8.86/9.35 | 9.41 "Broken Pulse: Season 5" (tv, A9.37/C9.45; traditional-holdout seed 171 #22, yr 10.0, critic gen 0) |  |

### Prestige progression (Prestige gates growth; cash sustains operations)

`cash-rich but Prestige-locked` = careers that at some week had the cash for the next upgrade but not the Prestige. `bought below gate` must be 0 (engine rule).

| Strategy | Config | Cash median | Prestige median | Prestige/yr | Careers with negative-cash weeks | →6 gate met (Prestige ≥ 200) · median film # | →6 bought · median film # | →6 cash-rich but Prestige-locked | →6 bought below gate | →8 gate met (Prestige ≥ 1000) · median film # | →8 bought · median film # | →8 cash-rich but Prestige-locked | →8 bought below gate |
|---|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|
| tv-first | order_5 | $2.21M | 4552.5 | 455.3 | 74% | 100% · #7 | 100% · #7 | 100% | 0 | 100% · #11 | 100% · #12 | 100% | 0 |
| renewal-franchise | order_5 | $1.10M | 2437.5 | 243.8 | 55% | 100% · #7 | 100% · #7 | 100% | 0 | 100% · #12 | 100% · #12 | 100% | 0 |
| traditional-holdout | order_5 | $3.43M | 5777.5 | 577.8 | 73% | 100% · #7 | 100% · #7 | 100% | 0 | 100% · #12 | 100% · #12 | 100% | 0 |
| tv-first | order_10 | $5.32M | 3330 | 333 | 74% | 100% · #7 | 100% · #7 | 100% | 0 | 100% · #11 | 100% · #12 | 100% | 0 |
| renewal-franchise | order_10 | $3.72M | 2025 | 202.5 | 54% | 100% · #7 | 100% · #7 | 100% | 0 | 100% · #11 | 100% · #12 | 100% | 0 |
| traditional-holdout | order_10 | $5.81M | 4295 | 429.5 | 73% | 100% · #7 | 100% · #7 | 100% | 0 | 100% · #11 | 100% · #12 | 100% | 0 |
| tv-first | order_20 | $5.84M | 3115 | 311.5 | 74% | 100% · #7 | 100% · #7 | 100% | 0 | 100% · #11 | 100% · #12 | 100% | 0 |
| renewal-franchise | order_20 | $3.83M | 1950 | 195 | 54% | 100% · #7 | 100% · #7 | 100% | 0 | 100% · #11 | 100% · #12 | 100% | 0 |
| traditional-holdout | order_20 | $6.30M | 3705 | 370.5 | 73% | 100% · #7 | 100% · #7 | 100% | 0 | 100% · #11 | 100% · #12 | 100% | 0 |
| tv-first | order_max | $5.84M | 3115 | 311.5 | 74% | 100% · #7 | 100% · #7 | 100% | 0 | 100% · #11 | 100% · #12 | 100% | 0 |
| renewal-franchise | order_max | $3.83M | 1950 | 195 | 54% | 100% · #7 | 100% · #7 | 100% | 0 | 100% · #11 | 100% · #12 | 100% | 0 |
| traditional-holdout | order_max | $6.30M | 3705 | 370.5 | 73% | 100% · #7 | 100% · #7 | 100% | 0 | 100% · #11 | 100% · #12 | 100% | 0 |

### Prestige milestones awarded per career (mean)

| Strategy | Variant | audience_7_5 | critic_8_5 | first_hall_of_fame | hall_of_fame | ip_gross_1m | ip_gross_5m | ip_viewers_500k | meters_all_70 | careers > 400 Prestige/yr (OUTDATED threshold) |
|---|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|
| tv-first | order_5 | 19.13 | 6.62 | 0.69 | 2.37 | 3 | 0 | 3 | 25.13 | 69% |
| tv-first | order_10 | 13.71 | 4.86 | 0.52 | 1.67 | 2 | 1.79 | 2 | 17.05 | 25% |
| tv-first | order_20 | 12.51 | 4.42 | 0.49 | 1.55 | 2 | 1.75 | 2 | 15.01 | 11% |
| tv-first | order_max | 12.51 | 4.42 | 0.49 | 1.55 | 2 | 1.75 | 2 | 15.01 | 11% |
| renewal-franchise | order_5 | 7.72 | 1.57 | 0.09 | 0.15 | 1 | 1 | 1 | 26.59 | 1% |
| renewal-franchise | order_10 | 7.84 | 1.74 | 0.09 | 0.23 | 1 | 1 | 1 | 17.93 | 0% |
| renewal-franchise | order_20 | 7.82 | 1.72 | 0.09 | 0.22 | 1 | 1 | 1 | 16.64 | 0% |
| renewal-franchise | order_max | 7.82 | 1.72 | 0.09 | 0.22 | 1 | 1 | 1 | 16.64 | 0% |
| traditional-holdout | order_5 | 23.32 | 10.27 | 0.95 | 4.92 | 3.21 | 0 | 3.06 | 26.02 | 97% |
| traditional-holdout | order_10 | 16.95 | 7.75 | 0.84 | 3.1 | 2.32 | 1.14 | 2.17 | 18.89 | 61% |
| traditional-holdout | order_20 | 14.78 | 6.46 | 0.82 | 2.48 | 2.13 | 1.19 | 1.92 | 16.39 | 32% |
| traditional-holdout | order_max | 14.78 | 6.46 | 0.82 | 2.48 | 2.13 | 1.19 | 1.92 | 16.39 | 32% |

### Gate 3 design trade-offs by strategy

(a) money · (b) Prestige · (c) time to TV / streaming · (d) successful IPs · (e) Hall of Fame · (f) last-12-month revenue mix · (g) solvency. Medians unless noted; shares are of careers.

| Strategy | Config | (a) cash median | min cash | ever negative | (b) Prestige | (c) TV unlock yr (share) | streaming live yr (share) | subs end | payback yrs (share) | (d) IPs ≥10K fans | shows · seasons · max | (e) HoF / career | (f) last-12-mo mix: traditional / subs / opex | streaming share | releases |
|---|---|---:|---:|---:|---:|---|---|---:|---|---:|---|---:|---|---:|---:|
| tv-first | order_5 | $2.21M | $-4K | 74% | 4,553 | 2.7 (100%) | — (0%) | — | — (0%) | 3.0 | 3.0 · 23.0 · 8.0 | 2.0 | $0.73M / $0.00M / $0.00M | — | 31 |
| renewal-franchise | order_5 | $1.10M | $-1K | 55% | 2,438 | 2.5 (100%) | — (0%) | — | — (0%) | 1.0 | 1.0 · 24.0 · 24.0 | 0.0 | $0.60M / $0.00M / $0.00M | — | 32 |
| traditional-holdout | order_5 | $3.43M | $-4K | 73% | 5,778 | 2.5 (100%) | — (0%) | — | — (0%) | 7.0 | 3.0 · 18.0 · 6.0 | 5.0 | $0.88M / $0.00M / $0.00M | — | 32 |
| tv-first | order_10 | $5.32M | $-4K | 74% | 3,330 | 2.7 (100%) | — (0%) | — | — (0%) | 2.0 | 2.0 · 15.0 · 8.0 | 1.0 | $1.09M / $0.00M / $0.00M | — | 23 |
| renewal-franchise | order_10 | $3.72M | $-1K | 54% | 2,025 | 2.5 (100%) | — (0%) | — | — (0%) | 1.0 | 1.0 · 16.0 · 16.0 | 0.0 | $0.71M / $0.00M / $0.00M | — | 23 |
| traditional-holdout | order_10 | $5.81M | $-4K | 73% | 4,295 | 2.5 (100%) | — (0%) | — | — (0%) | 5.0 | 2.5 · 12.0 · 6.0 | 3.0 | $1.13M / $0.00M / $0.00M | — | 24 |
| tv-first | order_20 | $5.84M | $-4K | 74% | 3,115 | 2.7 (100%) | — (0%) | — | — (0%) | 2.0 | 2.0 · 13.0 · 8.0 | 0.0 | $1.20M / $0.00M / $0.00M | — | 21 |
| renewal-franchise | order_20 | $3.83M | $-1K | 54% | 1,950 | 2.5 (100%) | — (0%) | — | — (0%) | 1.0 | 1.0 · 14.0 · 14.0 | 0.0 | $0.71M / $0.00M / $0.00M | — | 22 |
| traditional-holdout | order_20 | $6.30M | $-4K | 73% | 3,705 | 2.5 (100%) | — (0%) | — | — (0%) | 4.0 | 2.0 · 10.0 · 6.0 | 2.0 | $1.30M / $0.00M / $0.00M | — | 22 |
| tv-first | order_max | $5.84M | $-4K | 74% | 3,115 | 2.7 (100%) | — (0%) | — | — (0%) | 2.0 | 2.0 · 13.0 · 8.0 | 0.0 | $1.20M / $0.00M / $0.00M | — | 21 |
| renewal-franchise | order_max | $3.83M | $-1K | 54% | 1,950 | 2.5 (100%) | — (0%) | — | — (0%) | 1.0 | 1.0 · 14.0 · 14.0 | 0.0 | $0.71M / $0.00M / $0.00M | — | 22 |
| traditional-holdout | order_max | $6.30M | $-4K | 73% | 3,705 | 2.5 (100%) | — (0%) | — | — (0%) | 4.0 | 2.0 · 10.0 · 6.0 | 2.0 | $1.30M / $0.00M / $0.00M | — | 22 |

### Formats: share of releases · mean score · HoF % · net per production week; Prestige sources

| Strategy | Config | limited_series: share · avg · HoF% · net/prod-wk | movie: share · avg · HoF% · net/prod-wk | tv: share · avg · HoF% · net/prod-wk | Prestige by format | top Prestige sources |
|---|---|---|---|---|---|---|
| tv-first | order_5 | 22% · 7.17 · 0.6% · $20.9K | 3% · 5.6 · 0% · $9.9K | 75% · 7.94 · 10.1% · $15.3K | limited_series 8.5%, tv 91.5% | audience_7_5 31.6%, meters_all_70 27.6%, critic_8_5 12.4%, hall_of_fame 10.4% |
| renewal-franchise | order_5 | — | 24% · 6.94 · 0.6% · $18.0K | 76% · 6.41 · 0.4% · $13.1K | movie 15.5%, tv 84.5% | meters_all_70 53.6%, audience_7_5 23.3%, ip_viewers_500k 6%, ip_gross_5m 6% |
| traditional-holdout | order_5 | 13% · 8.04 · 19.9% · $26.1K | 31% · 7.55 · 11.9% · $21.4K | 56% · 8.28 · 16.6% · $15.6K | limited_series 12%, movie 20.3%, tv 67.6% | audience_7_5 30.3%, meters_all_70 22.5%, hall_of_fame 17%, critic_8_5 15.1% |
| tv-first | order_10 | 30% · 7.17 · 0.6% · $20.9K | 4% · 5.6 · 0% · $9.9K | 66% · 7.95 · 10.8% · $22.8K | limited_series 11.2%, tv 88.8% | audience_7_5 29.8%, meters_all_70 24.7%, critic_8_5 12%, hall_of_fame 9.7% |
| renewal-franchise | order_10 | — | 33% · 6.94 · 0.6% · $18.0K | 67% · 6.76 · 1.1% · $19.2K | movie 18.4%, tv 81.6% | meters_all_70 43%, audience_7_5 28.2%, ip_viewers_500k 7.2%, ip_gross_5m 7.2% |
| traditional-holdout | order_10 | 14% · 7.9 · 15.4% · $25.3K | 37% · 7.41 · 8.4% · $20.8K | 49% · 8.28 · 15.1% · $23.6K | limited_series 11.9%, movie 21.4%, tv 66.7% | audience_7_5 29.5%, meters_all_70 21.9%, critic_8_5 15.3%, hall_of_fame 14.4% |
| tv-first | order_20 | 33% · 7.17 · 0.6% · $20.9K | 5% · 5.6 · 0% · $9.9K | 62% · 8 · 11.6% · $24.4K | limited_series 12.2%, tv 87.8% | audience_7_5 29.5%, meters_all_70 23.6%, critic_8_5 11.8%, hall_of_fame 9.8% |
| renewal-franchise | order_20 | — | 35% · 6.94 · 0.6% · $18.0K | 65% · 6.83 · 1.2% · $19.8K | movie 19%, tv 81% | meters_all_70 41.2%, audience_7_5 29.1%, ip_viewers_500k 7.4%, ip_gross_5m 7.4% |
| traditional-holdout | order_20 | 15% · 7.84 · 12.8% · $24.9K | 39% · 7.34 · 6.7% · $20.5K | 46% · 8.26 · 14.6% · $26.0K | limited_series 12.1%, movie 21.9%, tv 66% | audience_7_5 29.7%, meters_all_70 22%, critic_8_5 14.7%, hall_of_fame 13.3% |
| tv-first | order_max | 33% · 7.17 · 0.6% · $20.9K | 5% · 5.6 · 0% · $9.9K | 62% · 8 · 11.6% · $24.4K | limited_series 12.2%, tv 87.8% | audience_7_5 29.5%, meters_all_70 23.6%, critic_8_5 11.8%, hall_of_fame 9.8% |
| renewal-franchise | order_max | — | 35% · 6.94 · 0.6% · $18.0K | 65% · 6.83 · 1.2% · $19.8K | movie 19%, tv 81% | meters_all_70 41.2%, audience_7_5 29.1%, ip_viewers_500k 7.4%, ip_gross_5m 7.4% |
| traditional-holdout | order_max | 15% · 7.84 · 12.8% · $24.9K | 39% · 7.34 · 6.7% · $20.5K | 46% · 8.26 · 14.6% · $26.0K | limited_series 12.1%, movie 21.9%, tv 66% | audience_7_5 29.7%, meters_all_70 22%, critic_8_5 14.7%, hall_of_fame 13.3% |

### Gate 3 provisional flags

| Variant | Flag | Fired | Evidence |
|---|---|---|---|
| order_5 | STREAMING_INFINITE_GROWTH | no | not fired: 0/0 launched careers reached ≥90% of the reachable subscriber market (growth is capped by design; this flags saturation) [PROVISIONAL threshold] |
| order_5 | SUBSCRIBER_CHURN_SPIRAL | no | not fired: 0/0 launched careers lost >60% of subscribers within 3 years [PROVISIONAL threshold] |
| order_5 | TV_SEASON_TOO_PROFITABLE | no | not fired: 0/12922 finished traditional TV seasons netted >2× the batch's pooled movie net per production week ($19,408) [PROVISIONAL threshold] |
| order_5 | TV_SEASON_TOO_LONG | **yes** | 200 careers kept one show running ≥12 seasons (fatigue cap 0.35 may allow endless renewals) [PROVISIONAL threshold] |
| order_5 | TV_NO_RENEWAL_PATH | no | not fired: 0/600 TV careers never made a second season [PROVISIONAL threshold] |
| order_5 | MIXED_ECONOMY_SOFTLOCK | no | not fired: 0/600 careers spent ≥3 years with negative cash [PROVISIONAL threshold] |
| order_5 | FORMAT_DOMINANT | no | not fired: best cash: traditional-holdout; best Prestige: traditional-holdout; fires only if one strategy leads both by >50% [PROVISIONAL threshold] |
| order_5 | DELAYED_STUDIO_PROGRESSION | no | not fired: TV not unlocked by year 8: 0/600; streaming not live by year 15: 0/0 [PROVISIONAL threshold] |
| order_10 | STREAMING_INFINITE_GROWTH | no | not fired: 0/0 launched careers reached ≥90% of the reachable subscriber market (growth is capped by design; this flags saturation) [PROVISIONAL threshold] |
| order_10 | SUBSCRIBER_CHURN_SPIRAL | no | not fired: 0/0 launched careers lost >60% of subscribers within 3 years [PROVISIONAL threshold] |
| order_10 | TV_SEASON_TOO_PROFITABLE | no | not fired: 1/8239 finished traditional TV seasons netted >2× the batch's pooled movie net per production week ($18,965) [PROVISIONAL threshold] |
| order_10 | TV_SEASON_TOO_LONG | **yes** | 200 careers kept one show running ≥12 seasons (fatigue cap 0.35 may allow endless renewals) [PROVISIONAL threshold] |
| order_10 | TV_NO_RENEWAL_PATH | no | not fired: 0/600 TV careers never made a second season [PROVISIONAL threshold] |
| order_10 | MIXED_ECONOMY_SOFTLOCK | no | not fired: 0/600 careers spent ≥3 years with negative cash [PROVISIONAL threshold] |
| order_10 | FORMAT_DOMINANT | no | not fired: best cash: traditional-holdout; best Prestige: traditional-holdout; fires only if one strategy leads both by >50% [PROVISIONAL threshold] |
| order_10 | DELAYED_STUDIO_PROGRESSION | no | not fired: TV not unlocked by year 8: 0/600; streaming not live by year 15: 0/0 [PROVISIONAL threshold] |
| order_20 | STREAMING_INFINITE_GROWTH | no | not fired: 0/0 launched careers reached ≥90% of the reachable subscriber market (growth is capped by design; this flags saturation) [PROVISIONAL threshold] |
| order_20 | SUBSCRIBER_CHURN_SPIRAL | no | not fired: 0/0 launched careers lost >60% of subscribers within 3 years [PROVISIONAL threshold] |
| order_20 | TV_SEASON_TOO_PROFITABLE | no | not fired: 71/7257 finished traditional TV seasons netted >2× the batch's pooled movie net per production week ($18,778) [PROVISIONAL threshold] |
| order_20 | TV_SEASON_TOO_LONG | **yes** | 195 careers kept one show running ≥12 seasons (fatigue cap 0.35 may allow endless renewals) [PROVISIONAL threshold] |
| order_20 | TV_NO_RENEWAL_PATH | no | not fired: 0/600 TV careers never made a second season [PROVISIONAL threshold] |
| order_20 | MIXED_ECONOMY_SOFTLOCK | no | not fired: 0/600 careers spent ≥3 years with negative cash [PROVISIONAL threshold] |
| order_20 | FORMAT_DOMINANT | no | not fired: best cash: traditional-holdout; best Prestige: traditional-holdout; fires only if one strategy leads both by >50% [PROVISIONAL threshold] |
| order_20 | DELAYED_STUDIO_PROGRESSION | no | not fired: TV not unlocked by year 8: 0/600; streaming not live by year 15: 0/0 [PROVISIONAL threshold] |
| order_max | STREAMING_INFINITE_GROWTH | no | not fired: 0/0 launched careers reached ≥90% of the reachable subscriber market (growth is capped by design; this flags saturation) [PROVISIONAL threshold] |
| order_max | SUBSCRIBER_CHURN_SPIRAL | no | not fired: 0/0 launched careers lost >60% of subscribers within 3 years [PROVISIONAL threshold] |
| order_max | TV_SEASON_TOO_PROFITABLE | no | not fired: 71/7257 finished traditional TV seasons netted >2× the batch's pooled movie net per production week ($18,778) [PROVISIONAL threshold] |
| order_max | TV_SEASON_TOO_LONG | **yes** | 195 careers kept one show running ≥12 seasons (fatigue cap 0.35 may allow endless renewals) [PROVISIONAL threshold] |
| order_max | TV_NO_RENEWAL_PATH | no | not fired: 0/600 TV careers never made a second season [PROVISIONAL threshold] |
| order_max | MIXED_ECONOMY_SOFTLOCK | no | not fired: 0/600 careers spent ≥3 years with negative cash [PROVISIONAL threshold] |
| order_max | FORMAT_DOMINANT | no | not fired: best cash: traditional-holdout; best Prestige: traditional-holdout; fires only if one strategy leads both by >50% [PROVISIONAL threshold] |
| order_max | DELAYED_STUDIO_PROGRESSION | no | not fired: TV not unlocked by year 8: 0/600; streaming not live by year 15: 0/0 [PROVISIONAL threshold] |

### Diagnostic flags fired

| Variant | Fired |
|---|---|
| order_5 | EARLY_SOFTLOCK, PRESTIGE_TOO_FAST, QUALITY_INFLATION, DOMINANT_STRATEGY |
| order_10 | PRESTIGE_TOO_FAST, QUALITY_INFLATION, HIGH_REVIEWS_UNEXPLAINED_LOW_SALES |
| order_20 | QUALITY_INFLATION, HIGH_REVIEWS_UNEXPLAINED_LOW_SALES |
| order_max | QUALITY_INFLATION, HIGH_REVIEWS_UNEXPLAINED_LOW_SALES |

## 20-year careers (in-game calendar horizon; productions vary by strategy)

Invariant violations across all variants: **0**.

### Medians by strategy

| Strategy | Variant | endCash | prestige | prestigePerRelease | meanAudience | meanCritic | share8plus | share9plus | shareLate8plus | hofShare | maxStaffEnd | staffCount | meanStaffStat | upgrades | firstUpgradeWeek | years | maxIpFans | negativeCashWeeks |
|---|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|
| tv-first | order_5 | $4547K | 10955 | 171.80 | 7.99 | 7.83 | 52% | 13% | 58% | 13% | 8 | 8 | 100 | 2 | 124 | 20 | 100722.50 | 2 |
| tv-first | order_10 | $12990K | 8040 | 187.25 | 7.97 | 7.81 | 51% | 12% | 65% | 12% | 8 | 8 | 97.95 | 2 | 124 | 20 | 99276 | 2 |
| tv-first | order_20 | $16668K | 5645 | 172.55 | 7.85 | 7.72 | 45% | 9% | 57% | 9% | 8 | 8 | 93.60 | 2 | 124 | 20 | 92836 | 2 |
| tv-first | order_max | $16668K | 5645 | 172.55 | 7.85 | 7.72 | 45% | 9% | 57% | 9% | 8 | 8 | 93.60 | 2 | 124 | 20 | 92836 | 2 |
| renewal-franchise | order_5 | $1699K | 4090 | 62.90 | 6.22 | 6.16 | 5% | 0% | 0% | 0% | 8 | 8 | 100 | 2 | 112 | 20 | 105967.50 | 1 |
| renewal-franchise | order_10 | $7295K | 3025 | 69.80 | 6.40 | 6.33 | 9% | 0% | 0% | 0% | 8 | 8 | 98.10 | 2 | 112 | 20 | 83075.50 | 1 |
| renewal-franchise | order_20 | $8130K | 2680 | 73.60 | 6.50 | 6.44 | 11% | 0% | 0% | 0% | 8 | 8 | 95.50 | 2 | 112 | 20 | 69033 | 1 |
| renewal-franchise | order_max | $8130K | 2680 | 73.60 | 6.50 | 6.44 | 11% | 0% | 0% | 0% | 8 | 8 | 95.50 | 2 | 112 | 20 | 69033 | 1 |
| traditional-holdout | order_5 | $7880K | 13755 | 215.55 | 8.43 | 8.18 | 69% | 22% | 81% | 22% | 8 | 8 | 100 | 2 | 114 | 20 | 81385 | 2 |
| traditional-holdout | order_10 | $14248K | 10250 | 220.35 | 8.31 | 8.20 | 67% | 21% | 84% | 21% | 8 | 8 | 98.70 | 2 | 114 | 20 | 91804 | 2 |
| traditional-holdout | order_20 | $17793K | 7345 | 208.60 | 8.21 | 8.07 | 63% | 18% | 86% | 18% | 8 | 8 | 94.70 | 2 | 114 | 20 | 81474.50 | 2 |
| traditional-holdout | order_max | $17793K | 7345 | 208.60 | 8.21 | 8.07 | 63% | 18% | 86% | 18% | 8 | 8 | 94.70 | 2 | 114 | 20 | 81474.50 | 2 |

### Paired deltas vs **order_max** (median of per-seed differences; share of seeds where the variant is higher)

| Strategy | Variant | Δ endCash | Δ prestige | Δ share8plus | Δ meanAudience |
|---|---|---:|---:|---:|---:|
| tv-first | order_5 | $-12233K (0%) | 5285 (100%) | 4% (64%) | 0.16 (68%) |
| tv-first | order_10 | $-3574K (3%) | 2315 (100%) | 5% (70%) | 0.10 (64%) |
| tv-first | order_20 | $0K (0%) | 0 (0%) | 0% (0%) | 0 (0%) |
| renewal-franchise | order_5 | $-6388K (1%) | 1400 (100%) | -5% (0%) | -0.26 (0%) |
| renewal-franchise | order_10 | $-857K (8%) | 350 (100%) | -2% (0%) | -0.09 (0%) |
| renewal-franchise | order_20 | $0K (0%) | 0 (0%) | 0% (0%) | 0 (0%) |
| traditional-holdout | order_5 | $-9757K (0%) | 6147.50 (100%) | 7% (71%) | 0.20 (81%) |
| traditional-holdout | order_10 | $-3531K (0%) | 2827.50 (100%) | 5% (72%) | 0.14 (71%) |
| traditional-holdout | order_20 | $0K (0%) | 0 (0%) | 0% (0%) | 0 (0%) |

### Mean review score (avg of Audience+Critic) by production index

| Strategy | Variant | #1 | #3 | #5 | #10 | #20 | #30 | #50 |
|---|---|---:|---:|---:|---:|---:|---:|---:|
| tv-first | order_5 | 5.60 | 6.31 | 7.44 | 8.15 | 8.19 | 7.71 | 8.58 |
| tv-first | order_10 | 5.60 | 6.31 | 7.44 | 8.18 | 8.35 | 7.84 | — |
| tv-first | order_20 | 5.60 | 6.31 | 7.44 | 8.18 | 8.33 | 7.73 | — |
| tv-first | order_max | 5.60 | 6.31 | 7.44 | 8.18 | 8.33 | 7.73 | — |
| renewal-franchise | order_5 | 5.65 | 6.33 | 7.40 | 8.00 | 5.80 | 5.82 | 5.85 |
| renewal-franchise | order_10 | 5.65 | 6.33 | 7.40 | 8.04 | 5.85 | 5.81 | — |
| renewal-franchise | order_20 | 5.65 | 6.33 | 7.40 | 8.04 | 5.86 | 5.80 | — |
| renewal-franchise | order_max | 5.65 | 6.33 | 7.40 | 8.04 | 5.86 | 5.80 | — |
| traditional-holdout | order_5 | 5.62 | 6.29 | 7.39 | 8.19 | 8.37 | 8.56 | 8.60 |
| traditional-holdout | order_10 | 5.62 | 6.29 | 7.39 | 8.19 | 8.48 | 8.62 | 8.70 |
| traditional-holdout | order_20 | 5.62 | 6.29 | 7.39 | 8.19 | 8.47 | 8.57 | — |
| traditional-holdout | order_max | 5.62 | 6.29 | 7.39 | 8.19 | 8.47 | 8.57 | — |

### Great films — all strategies pooled, by release window

Denominators are films in that window. HoF = average of Audience and Critic ≥ hofThreshold (9.0). `≥9` is inclusive, `>9` strict.

| Strategy | Config | Window | Films (n) | Avg Aud | Avg Crit | HoF n (%) | Avg ≥9 n (%) | Avg >9 n (%) | Aud ≥9 n (%) | Crit ≥9 n (%) | 8+ n (%) | Careers with 0 HoF | HoF/career p10/p50/p90 | Best/career p10/p50/p90/p99 | Best combined movie | Prestige median |
|---|---|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---|---|---|---:|
| ALL | order_5 | 1-5 | 3000 | 6.46 | 6.50 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 1 (0.0%) | 101 (3.4%) | 100% of 600 | 0/0/0 | 7.05/7.61/8.16/8.65 | 8.91 "Midnight Rising" (A8.47/C9.36; renewal-franchise seed 15 #5, yr 1.5, critic gen 0) |  |
| ALL | order_5 | 6-20 | 9000 | 7.82 | 7.67 | 573 (6.4%) | 573 (6.4%) | 553 (6.1%) | 1021 (11.3%) | 764 (8.5%) | 4029 (44.8%) | 62% of 600 | 0/0/3 | 8.23/8.8/9.49/9.96 | 10.00 "Red Storm: Season 3" (tv, A10/C10; traditional-holdout seed 110 #20, yr 6.3, critic gen 0) |  |
| ALL | order_5 | 21-50 | 18000 | 7.55 | 7.39 | 2655 (14.8%) | 2655 (14.8%) | 2572 (14.3%) | 4137 (23.0%) | 3055 (17.0%) | 7969 (44.3%) | 37% of 600 | 0/3/11 | 5.71/9.43/9.88/10 | 10.00 "Red Echo" (tv, A10/C10; tv-first seed 6 #41, yr 12.9, critic gen 0) |  |
| ALL | order_5 | 51-100 | 8532 | 7.56 | 7.35 | 1334 (15.6%) | 1334 (15.6%) | 1276 (15.0%) | 2037 (23.9%) | 1407 (16.5%) | 3768 (44.2%) | 42% of 600 | 0/1/6.1 | 5.71/9.17/9.82/10 | 10.00 "Last Storm: Season 4" (tv, A10/C10; traditional-holdout seed 9 #51, yr 16.0, critic gen 0) |  |
| ALL | order_5 | all | 38532 | 7.53 | 7.38 | 4562 (11.8%) | 4562 (11.8%) | 4401 (11.4%) | 7195 (18.7%) | 5227 (13.6%) | 15867 (41.2%) | 31% of 600 | 0/7/17 | 8.32/9.56/9.91/10 | 10.00 "Red Echo" (tv, A10/C10; tv-first seed 6 #41, yr 12.9, critic gen 0) |  |
| ALL | order_10 | 1-5 | 3000 | 6.46 | 6.50 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 1 (0.0%) | 101 (3.4%) | 100% of 600 | 0/0/0 | 7.05/7.61/8.16/8.65 | 8.91 "Midnight Rising" (A8.47/C9.36; renewal-franchise seed 15 #5, yr 1.5, critic gen 0) |  |
| ALL | order_10 | 6-20 | 9000 | 7.84 | 7.71 | 710 (7.9%) | 710 (7.9%) | 675 (7.5%) | 1104 (12.3%) | 933 (10.4%) | 4177 (46.4%) | 58% of 600 | 0/0/4 | 8.25/8.86/9.5/9.99 | 10.00 "Midnight Rising: Season 2" (tv, A10/C10; tv-first seed 21 #19, yr 7.3, critic gen 0) |  |
| ALL | order_10 | 21-50 | 14547 | 7.63 | 7.48 | 2406 (16.5%) | 2406 (16.5%) | 2347 (16.1%) | 3653 (25.1%) | 2711 (18.6%) | 7008 (48.2%) | 36% of 600 | 0/3/10 | 5.68/9.37/9.87/10 | 10.00 "Broken Rising: Season 2" (tv, A10/C10; tv-first seed 7 #42, yr 19.5, critic gen 0) |  |
| ALL | order_10 | 51-100 | 2 | 7.67 | 8.48 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 1 (50.0%) | 1 (50.0%) | 100% of 1 | 0/0/0 | 8.44/8.44/8.44/8.44 | 8.44 "Iron Echo" (A7.11/C9.76; traditional-holdout seed 55 #52, yr 20.0, critic gen 0) |  |
| ALL | order_10 | all | 26549 | 7.57 | 7.45 | 3116 (11.7%) | 3116 (11.7%) | 3022 (11.4%) | 4757 (17.9%) | 3646 (13.7%) | 11287 (42.5%) | 32% of 600 | 0/4/13 | 8.32/9.43/9.88/10 | 10.00 "Broken Rising: Season 2" (tv, A10/C10; tv-first seed 7 #42, yr 19.5, critic gen 0) |  |
| ALL | order_20 | 1-5 | 3000 | 6.46 | 6.50 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 1 (0.0%) | 101 (3.4%) | 100% of 600 | 0/0/0 | 7.05/7.61/8.16/8.65 | 8.91 "Midnight Rising" (A8.47/C9.36; renewal-franchise seed 15 #5, yr 1.5, critic gen 0) |  |
| ALL | order_20 | 6-20 | 9000 | 7.84 | 7.72 | 727 (8.1%) | 727 (8.1%) | 694 (7.7%) | 1125 (12.5%) | 939 (10.4%) | 4180 (46.4%) | 58% of 600 | 0/0/4 | 8.23/8.86/9.5/9.99 | 10.00 "Midnight Rising: Season 2" (tv, A10/C10; tv-first seed 21 #19, yr 7.5, critic gen 0) |  |
| ALL | order_20 | 21-50 | 8871 | 7.45 | 7.30 | 1334 (15.0%) | 1334 (15.0%) | 1310 (14.8%) | 1930 (21.8%) | 1520 (17.1%) | 3776 (42.6%) | 45% of 600 | 0/1/6 | 5.67/9.07/9.78/10 | 10.00 "Midnight Echo" (limited_series, A10/C10; traditional-holdout seed 21 #31, yr 15.3, critic gen 0) |  |
| ALL | order_20 | 51-100 | 0 | NaN | NaN | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0% of 0 | — | — | — |  |
| ALL | order_20 | all | 20871 | 7.47 | 7.36 | 2061 (9.9%) | 2061 (9.9%) | 2004 (9.6%) | 3055 (14.6%) | 2460 (11.8%) | 8057 (38.6%) | 35% of 600 | 0/3/9 | 8.32/9.3/9.79/10 | 10.00 "Midnight Rising: Season 2" (tv, A10/C10; tv-first seed 21 #19, yr 7.5, critic gen 0) |  |
| ALL | order_max | 1-5 | 3000 | 6.46 | 6.50 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 1 (0.0%) | 101 (3.4%) | 100% of 600 | 0/0/0 | 7.05/7.61/8.16/8.65 | 8.91 "Midnight Rising" (A8.47/C9.36; renewal-franchise seed 15 #5, yr 1.5, critic gen 0) |  |
| ALL | order_max | 6-20 | 9000 | 7.84 | 7.72 | 727 (8.1%) | 727 (8.1%) | 694 (7.7%) | 1125 (12.5%) | 939 (10.4%) | 4180 (46.4%) | 58% of 600 | 0/0/4 | 8.23/8.86/9.5/9.99 | 10.00 "Midnight Rising: Season 2" (tv, A10/C10; tv-first seed 21 #19, yr 7.5, critic gen 0) |  |
| ALL | order_max | 21-50 | 8871 | 7.45 | 7.30 | 1334 (15.0%) | 1334 (15.0%) | 1310 (14.8%) | 1930 (21.8%) | 1520 (17.1%) | 3776 (42.6%) | 45% of 600 | 0/1/6 | 5.67/9.07/9.78/10 | 10.00 "Midnight Echo" (limited_series, A10/C10; traditional-holdout seed 21 #31, yr 15.3, critic gen 0) |  |
| ALL | order_max | 51-100 | 0 | NaN | NaN | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0% of 0 | — | — | — |  |
| ALL | order_max | all | 20871 | 7.47 | 7.36 | 2061 (9.9%) | 2061 (9.9%) | 2004 (9.6%) | 3055 (14.6%) | 2460 (11.8%) | 8057 (38.6%) | 35% of 600 | 0/3/9 | 8.32/9.3/9.79/10 | 10.00 "Midnight Rising: Season 2" (tv, A10/C10; tv-first seed 21 #19, yr 7.5, critic gen 0) |  |

### Great films by strategy (whole career)

| Strategy | Config | Window | Films (n) | Avg Aud | Avg Crit | HoF n (%) | Avg ≥9 n (%) | Avg >9 n (%) | Aud ≥9 n (%) | Crit ≥9 n (%) | 8+ n (%) | Careers with 0 HoF | HoF/career p10/p50/p90 | Best/career p10/p50/p90/p99 | Best combined movie | Prestige median |
|---|---|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---|---|---|---:|
| tv-first | order_5 | all | 12790 | 7.98 | 7.84 | 1678 (13.1%) | 1678 (13.1%) | 1614 (12.6%) | 2765 (21.6%) | 2038 (15.9%) | 6422 (50.2%) | 2% of 200 | 3/8/15 | 9.22/9.63/10/10 | 10.00 "Red Echo" (tv, A10/C10; tv-first seed 6 #41, yr 12.9, critic gen 0) | 10955 |
| renewal-franchise | order_5 | all | 13000 | 6.24 | 6.14 | 31 (0.2%) | 31 (0.2%) | 27 (0.2%) | 123 (0.9%) | 64 (0.5%) | 757 (5.8%) | 91% of 200 | 0/0/0 | 8.06/8.5/8.93/9.29 | 9.62 "Red Run: Season 2" (tv, A9.51/C9.72; renewal-franchise seed 27 #11, yr 3.4, critic gen 0) | 4090 |
| traditional-holdout | order_5 | all | 12742 | 8.40 | 8.17 | 2853 (22.4%) | 2853 (22.4%) | 2760 (21.7%) | 4307 (33.8%) | 3125 (24.5%) | 8688 (68.2%) | 0% of 200 | 8/14/21 | 9.57/9.8/10/10 | 10.00 "Last Storm: Season 4" (tv, A10/C10; traditional-holdout seed 9 #51, yr 16.0, critic gen 0) | 13755 |
| tv-first | order_10 | all | 8584 | 7.94 | 7.81 | 1109 (12.9%) | 1109 (12.9%) | 1070 (12.5%) | 1708 (19.9%) | 1262 (14.7%) | 4317 (50.3%) | 4% of 200 | 1/5/10.1 | 9.11/9.45/9.86/10 | 10.00 "Broken Rising: Season 2" (tv, A10/C10; tv-first seed 7 #42, yr 19.5, critic gen 0) | 8040 |
| renewal-franchise | order_10 | all | 8669 | 6.41 | 6.31 | 45 (0.5%) | 45 (0.5%) | 40 (0.5%) | 139 (1.6%) | 83 (1.0%) | 808 (9.3%) | 91% of 200 | 0/0/0 | 8.07/8.5/8.93/9.46 | 9.58 "Red Run: Season 4" (tv, A9.51/C9.65; renewal-franchise seed 27 #13, yr 4.6, critic gen 0) | 3025 |
| traditional-holdout | order_10 | all | 9296 | 8.31 | 8.18 | 1962 (21.1%) | 1962 (21.1%) | 1912 (20.6%) | 2910 (31.3%) | 2301 (24.8%) | 6162 (66.3%) | 0% of 200 | 4/9/16 | 9.44/9.71/10/10 | 10.00 "Dead Rising" (A10/C10; traditional-holdout seed 30 #40, yr 16.6, critic gen 0) | 10250 |
| tv-first | order_20 | all | 6513 | 7.81 | 7.70 | 697 (10.7%) | 697 (10.7%) | 668 (10.3%) | 1022 (15.7%) | 843 (12.9%) | 2917 (44.8%) | 13% of 200 | 0/3/7 | 8.96/9.38/9.77/10 | 10.00 "Midnight Rising: Season 2" (tv, A10/C10; tv-first seed 21 #19, yr 7.5, critic gen 0) | 5645 |
| renewal-franchise | order_20 | all | 7312 | 6.50 | 6.39 | 44 (0.6%) | 44 (0.6%) | 39 (0.5%) | 139 (1.9%) | 82 (1.1%) | 807 (11.0%) | 91% of 200 | 0/0/0 | 8.07/8.5/8.93/9.46 | 9.59 "Red Run: Season 4" (tv, A9.52/C9.65; renewal-franchise seed 27 #13, yr 4.8, critic gen 0) | 2680 |
| traditional-holdout | order_20 | all | 7046 | 8.18 | 8.06 | 1320 (18.7%) | 1320 (18.7%) | 1297 (18.4%) | 1894 (26.9%) | 1535 (21.8%) | 4333 (61.5%) | 2% of 200 | 2/6/12 | 9.29/9.59/9.86/10 | 10.00 "Midnight Echo" (limited_series, A10/C10; traditional-holdout seed 21 #31, yr 15.3, critic gen 0) | 7345 |
| tv-first | order_max | all | 6513 | 7.81 | 7.70 | 697 (10.7%) | 697 (10.7%) | 668 (10.3%) | 1022 (15.7%) | 843 (12.9%) | 2917 (44.8%) | 13% of 200 | 0/3/7 | 8.96/9.38/9.77/10 | 10.00 "Midnight Rising: Season 2" (tv, A10/C10; tv-first seed 21 #19, yr 7.5, critic gen 0) | 5645 |
| renewal-franchise | order_max | all | 7312 | 6.50 | 6.39 | 44 (0.6%) | 44 (0.6%) | 39 (0.5%) | 139 (1.9%) | 82 (1.1%) | 807 (11.0%) | 91% of 200 | 0/0/0 | 8.07/8.5/8.93/9.46 | 9.59 "Red Run: Season 4" (tv, A9.52/C9.65; renewal-franchise seed 27 #13, yr 4.8, critic gen 0) | 2680 |
| traditional-holdout | order_max | all | 7046 | 8.18 | 8.06 | 1320 (18.7%) | 1320 (18.7%) | 1297 (18.4%) | 1894 (26.9%) | 1535 (21.8%) | 4333 (61.5%) | 2% of 200 | 2/6/12 | 9.29/9.59/9.86/10 | 10.00 "Midnight Echo" (limited_series, A10/C10; traditional-holdout seed 21 #31, yr 15.3, critic gen 0) | 7345 |

### Greatest single films (all strategies, whole sample; reproducible from seed + config hash)

| Variant | Best combined | Best Audience | Best Critic | Year band with most HoF |
|---|---|---|---|---|
| order_5 | 10.00 "Red Echo" (tv, A10/C10; tv-first seed 6 #41, yr 12.9, critic gen 0) | 10.00 "Red Echo" (tv, A10/C10; tv-first seed 6 #41, yr 12.9, critic gen 0) | 10.00 "Red Echo" (tv, A10/C10; tv-first seed 6 #41, yr 12.9, critic gen 0) | y15-20: 16.8% of 9762 |
| order_10 | 10.00 "Broken Rising: Season 2" (tv, A10/C10; tv-first seed 7 #42, yr 19.5, critic gen 0) | 10.00 "Broken Rising: Season 2" (tv, A10/C10; tv-first seed 7 #42, yr 19.5, critic gen 0) | 10.00 "Broken Rising: Season 2" (tv, A10/C10; tv-first seed 7 #42, yr 19.5, critic gen 0) | y20-30: 22.4% of 58 |
| order_20 | 10.00 "Midnight Rising: Season 2" (tv, A10/C10; tv-first seed 21 #19, yr 7.5, critic gen 0) | 10.00 "Midnight Rising: Season 2" (tv, A10/C10; tv-first seed 21 #19, yr 7.5, critic gen 0) | 10.00 "Midnight Rising: Season 2" (tv, A10/C10; tv-first seed 21 #19, yr 7.5, critic gen 0) | y10-15: 16.5% of 4045 |
| order_max | 10.00 "Midnight Rising: Season 2" (tv, A10/C10; tv-first seed 21 #19, yr 7.5, critic gen 0) | 10.00 "Midnight Rising: Season 2" (tv, A10/C10; tv-first seed 21 #19, yr 7.5, critic gen 0) | 10.00 "Midnight Rising: Season 2" (tv, A10/C10; tv-first seed 21 #19, yr 7.5, critic gen 0) | y10-15: 16.5% of 4045 |

### Great films by in-game year (all strategies pooled)

| Strategy | Config | Window | Films (n) | Avg Aud | Avg Crit | HoF n (%) | Avg ≥9 n (%) | Avg >9 n (%) | Aud ≥9 n (%) | Crit ≥9 n (%) | 8+ n (%) | Careers with 0 HoF | HoF/career p10/p50/p90 | Best/career p10/p50/p90/p99 | Best combined movie | Prestige median |
|---|---|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---|---|---|---:|
| ALL | order_5 | y0-5 | 9257 | 7.42 | 7.35 | 251 (2.7%) | 251 (2.7%) | 237 (2.6%) | 534 (5.8%) | 392 (4.2%) | 2812 (30.4%) | 79% of 600 | 0/0/2 | 8.18/8.62/9.25/9.67 | 10.00 "Last Signal" (tv, A10/C10; traditional-holdout seed 126 #14, yr 4.5, critic gen 0) |  |
| ALL | order_5 | y5-10 | 9623 | 7.51 | 7.34 | 1225 (12.7%) | 1225 (12.7%) | 1191 (12.4%) | 1831 (19.0%) | 1416 (14.7%) | 4115 (42.8%) | 48% of 600 | 0/1/6 | 6.04/9.04/9.71/10 | 10.00 "Wild Legacy: Season 4" (tv, A10/C10; traditional-holdout seed 30 #31, yr 9.7, critic gen 0) |  |
| ALL | order_5 | y10-15 | 9635 | 7.58 | 7.42 | 1441 (15.0%) | 1441 (15.0%) | 1394 (14.5%) | 2291 (23.8%) | 1695 (17.6%) | 4391 (45.6%) | 46% of 600 | 0/1/7 | 5.71/9.15/9.85/10 | 10.00 "Red Echo" (tv, A10/C10; tv-first seed 6 #41, yr 12.9, critic gen 0) |  |
| ALL | order_5 | y15-20 | 9762 | 7.64 | 7.42 | 1637 (16.8%) | 1637 (16.8%) | 1571 (16.1%) | 2525 (25.9%) | 1719 (17.6%) | 4524 (46.3%) | 40% of 600 | 0/2/7 | 5.71/9.22/9.84/10 | 10.00 "Last Storm: Season 4" (tv, A10/C10; traditional-holdout seed 9 #51, yr 16.0, critic gen 0) |  |
| ALL | order_5 | y20-30 | 255 | 6.33 | 6.21 | 8 (3.1%) | 8 (3.1%) | 8 (3.1%) | 14 (5.5%) | 5 (2.0%) | 25 (9.8%) | 97% of 255 | 0/0/0 | 5.36/6.01/7.85/9.18 | 9.53 "Red Horizon" (tv, A9.98/C9.07; traditional-holdout seed 93 #64, yr 20.0, critic gen 0) |  |
| ALL | order_10 | y0-5 | 7897 | 7.43 | 7.37 | 212 (2.7%) | 212 (2.7%) | 202 (2.6%) | 460 (5.8%) | 347 (4.4%) | 2551 (32.3%) | 84% of 600 | 0/0/2 | 8.16/8.57/9.16/9.59 | 9.78 "Broken Signal" (tv, A9.72/C9.84; traditional-holdout seed 18 #12, yr 4.0, critic gen 0) |  |
| ALL | order_10 | y5-10 | 6198 | 7.58 | 7.46 | 783 (12.6%) | 783 (12.6%) | 744 (12.0%) | 1047 (16.9%) | 938 (15.1%) | 2661 (42.9%) | 58% of 600 | 0/0/4 | 6.87/8.75/9.58/10 | 10.00 "Midnight Rising: Season 2" (tv, A10/C10; tv-first seed 21 #19, yr 7.3, critic gen 0) |  |
| ALL | order_10 | y10-15 | 6195 | 7.63 | 7.46 | 1028 (16.6%) | 1028 (16.6%) | 1005 (16.2%) | 1554 (25.1%) | 1158 (18.7%) | 2986 (48.2%) | 49% of 600 | 0/1/5 | 5.67/9.05/9.74/10 | 10.00 "Hollow Signal: Season 2" (tv, A10/C10; traditional-holdout seed 43 #28, yr 10.3, critic gen 0) |  |
| ALL | order_10 | y15-20 | 6201 | 7.67 | 7.52 | 1080 (17.4%) | 1080 (17.4%) | 1058 (17.1%) | 1670 (26.9%) | 1189 (19.2%) | 3045 (49.1%) | 47% of 600 | 0/1/5 | 5.68/9.13/9.75/10 | 10.00 "Broken Rising: Season 2" (tv, A10/C10; tv-first seed 7 #42, yr 19.5, critic gen 0) |  |
| ALL | order_10 | y20-30 | 58 | 8.53 | 8.25 | 13 (22.4%) | 13 (22.4%) | 13 (22.4%) | 26 (44.8%) | 14 (24.1%) | 44 (75.9%) | 78% of 58 | 0/0/1 | 7.49/8.59/9.27/10 | 10.00 "Iron Edge: Season 4" (tv, A10/C10; tv-first seed 160 #43, yr 20.0, critic gen 0) |  |
| ALL | order_20 | y0-5 | 7875 | 7.43 | 7.37 | 202 (2.6%) | 202 (2.6%) | 192 (2.4%) | 449 (5.7%) | 338 (4.3%) | 2530 (32.1%) | 84% of 600 | 0/0/2 | 8.16/8.57/9.16/9.59 | 9.78 "Broken Signal" (tv, A9.72/C9.84; traditional-holdout seed 18 #12, yr 4.0, critic gen 0) |  |
| ALL | order_20 | y5-10 | 5092 | 7.55 | 7.43 | 646 (12.7%) | 646 (12.7%) | 620 (12.2%) | 840 (16.5%) | 745 (14.6%) | 2133 (41.9%) | 59% of 600 | 0/0/4 | 6.87/8.73/9.54/10 | 10.00 "Midnight Rising: Season 2" (tv, A10/C10; tv-first seed 21 #19, yr 7.5, critic gen 0) |  |
| ALL | order_20 | y10-15 | 4045 | 7.49 | 7.36 | 669 (16.5%) | 669 (16.5%) | 657 (16.2%) | 921 (22.8%) | 768 (19.0%) | 1794 (44.4%) | 56% of 600 | 0/0/4 | 5.66/8.81/9.6/10 | 10.00 "Hollow Signal: Season 2" (tv, A10/C10; traditional-holdout seed 43 #28, yr 11.1, critic gen 0) |  |
| ALL | order_20 | y15-20 | 3838 | 7.44 | 7.28 | 541 (14.1%) | 541 (14.1%) | 532 (13.9%) | 839 (21.9%) | 607 (15.8%) | 1593 (41.5%) | 61% of 600 | 0/0/3 | 5.66/8.67/9.57/9.88 | 10.00 "Midnight Echo" (limited_series, A10/C10; traditional-holdout seed 21 #31, yr 15.3, critic gen 0) |  |
| ALL | order_20 | y20-30 | 21 | 7.19 | 6.95 | 3 (14.3%) | 3 (14.3%) | 3 (14.3%) | 6 (28.6%) | 2 (9.5%) | 7 (33.3%) | 86% of 21 | 0/0/1 | 5.65/6.4/9.09/9.5 | 9.60 "Wild Signal: Season 3" (tv, A9.95/C9.25; traditional-holdout seed 39 #37, yr 20.0, critic gen 0) |  |
| ALL | order_max | y0-5 | 7875 | 7.43 | 7.37 | 202 (2.6%) | 202 (2.6%) | 192 (2.4%) | 449 (5.7%) | 338 (4.3%) | 2530 (32.1%) | 84% of 600 | 0/0/2 | 8.16/8.57/9.16/9.59 | 9.78 "Broken Signal" (tv, A9.72/C9.84; traditional-holdout seed 18 #12, yr 4.0, critic gen 0) |  |
| ALL | order_max | y5-10 | 5092 | 7.55 | 7.43 | 646 (12.7%) | 646 (12.7%) | 620 (12.2%) | 840 (16.5%) | 745 (14.6%) | 2133 (41.9%) | 59% of 600 | 0/0/4 | 6.87/8.73/9.54/10 | 10.00 "Midnight Rising: Season 2" (tv, A10/C10; tv-first seed 21 #19, yr 7.5, critic gen 0) |  |
| ALL | order_max | y10-15 | 4045 | 7.49 | 7.36 | 669 (16.5%) | 669 (16.5%) | 657 (16.2%) | 921 (22.8%) | 768 (19.0%) | 1794 (44.4%) | 56% of 600 | 0/0/4 | 5.66/8.81/9.6/10 | 10.00 "Hollow Signal: Season 2" (tv, A10/C10; traditional-holdout seed 43 #28, yr 11.1, critic gen 0) |  |
| ALL | order_max | y15-20 | 3838 | 7.44 | 7.28 | 541 (14.1%) | 541 (14.1%) | 532 (13.9%) | 839 (21.9%) | 607 (15.8%) | 1593 (41.5%) | 61% of 600 | 0/0/3 | 5.66/8.67/9.57/9.88 | 10.00 "Midnight Echo" (limited_series, A10/C10; traditional-holdout seed 21 #31, yr 15.3, critic gen 0) |  |
| ALL | order_max | y20-30 | 21 | 7.19 | 6.95 | 3 (14.3%) | 3 (14.3%) | 3 (14.3%) | 6 (28.6%) | 2 (9.5%) | 7 (33.3%) | 86% of 21 | 0/0/1 | 5.65/6.4/9.09/9.5 | 9.60 "Wild Signal: Season 3" (tv, A9.95/C9.25; traditional-holdout seed 39 #37, yr 20.0, critic gen 0) |  |

### Prestige progression (Prestige gates growth; cash sustains operations)

`cash-rich but Prestige-locked` = careers that at some week had the cash for the next upgrade but not the Prestige. `bought below gate` must be 0 (engine rule).

| Strategy | Config | Cash median | Prestige median | Prestige/yr | Careers with negative-cash weeks | →6 gate met (Prestige ≥ 200) · median film # | →6 bought · median film # | →6 cash-rich but Prestige-locked | →6 bought below gate | →8 gate met (Prestige ≥ 1000) · median film # | →8 bought · median film # | →8 cash-rich but Prestige-locked | →8 bought below gate |
|---|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|
| tv-first | order_5 | $4.55M | 10955 | 547.8 | 74% | 100% · #7 | 100% · #7 | 100% | 0 | 100% · #11 | 100% · #12 | 100% | 0 |
| renewal-franchise | order_5 | $1.70M | 4090 | 204.5 | 58% | 100% · #7 | 100% · #7 | 100% | 0 | 100% · #12 | 100% · #12 | 100% | 0 |
| traditional-holdout | order_5 | $7.88M | 13755 | 687.8 | 73% | 100% · #7 | 100% · #7 | 100% | 0 | 100% · #12 | 100% · #12 | 100% | 0 |
| tv-first | order_10 | $12.99M | 8040 | 402 | 74% | 100% · #7 | 100% · #7 | 100% | 0 | 100% · #11 | 100% · #12 | 100% | 0 |
| renewal-franchise | order_10 | $7.30M | 3025 | 151.3 | 54% | 100% · #7 | 100% · #7 | 100% | 0 | 100% · #11 | 100% · #12 | 100% | 0 |
| traditional-holdout | order_10 | $14.25M | 10250 | 512.5 | 73% | 100% · #7 | 100% · #7 | 100% | 0 | 100% · #11 | 100% · #12 | 100% | 0 |
| tv-first | order_20 | $16.67M | 5645 | 282.3 | 74% | 100% · #7 | 100% · #7 | 100% | 0 | 100% · #11 | 100% · #12 | 100% | 0 |
| renewal-franchise | order_20 | $8.13M | 2680 | 134 | 54% | 100% · #7 | 100% · #7 | 100% | 0 | 100% · #11 | 100% · #12 | 100% | 0 |
| traditional-holdout | order_20 | $17.79M | 7345 | 367.3 | 73% | 100% · #7 | 100% · #7 | 100% | 0 | 100% · #11 | 100% · #12 | 100% | 0 |
| tv-first | order_max | $16.67M | 5645 | 282.3 | 74% | 100% · #7 | 100% · #7 | 100% | 0 | 100% · #11 | 100% · #12 | 100% | 0 |
| renewal-franchise | order_max | $8.13M | 2680 | 134 | 54% | 100% · #7 | 100% · #7 | 100% | 0 | 100% · #11 | 100% · #12 | 100% | 0 |
| traditional-holdout | order_max | $17.79M | 7345 | 367.3 | 73% | 100% · #7 | 100% · #7 | 100% | 0 | 100% · #11 | 100% · #12 | 100% | 0 |

### Prestige milestones awarded per career (mean)

| Strategy | Variant | audience_7_5 | critic_8_5 | first_hall_of_fame | hall_of_fame | ip_gross_1m | ip_gross_5m | ip_viewers_500k | meters_all_70 | careers > 400 Prestige/yr (OUTDATED threshold) |
|---|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|
| tv-first | order_5 | 42.96 | 18.14 | 0.98 | 8.39 | 7 | 0 | 7.08 | 58.08 | 98% |
| tv-first | order_10 | 28.38 | 12.66 | 0.96 | 5.54 | 4.97 | 3.87 | 4.96 | 37.05 | 53% |
| tv-first | order_20 | 20.55 | 8.51 | 0.87 | 3.48 | 3.54 | 2.94 | 3.33 | 26.69 | 0% |
| tv-first | order_max | 20.55 | 8.51 | 0.87 | 3.48 | 3.54 | 2.94 | 3.33 | 26.69 | 0% |
| renewal-franchise | order_5 | 7.74 | 1.57 | 0.09 | 0.15 | 1 | 1 | 1 | 59.59 | 0% |
| renewal-franchise | order_10 | 7.85 | 1.74 | 0.09 | 0.23 | 1 | 1 | 1 | 37.93 | 0% |
| renewal-franchise | order_20 | 7.85 | 1.72 | 0.09 | 0.22 | 1 | 1 | 1 | 31.14 | 0% |
| renewal-franchise | order_max | 7.85 | 1.72 | 0.09 | 0.22 | 1 | 1 | 1 | 31.14 | 0% |
| traditional-holdout | order_5 | 51.7 | 25.33 | 1 | 14.27 | 7.84 | 0 | 7.21 | 58.12 | 100% |
| traditional-holdout | order_10 | 36.48 | 19.25 | 1 | 9.81 | 5.46 | 3.63 | 4.95 | 40.89 | 95% |
| traditional-holdout | order_20 | 26.47 | 13.34 | 0.98 | 6.6 | 4.08 | 2.91 | 3.63 | 29.64 | 27% |
| traditional-holdout | order_max | 26.47 | 13.34 | 0.98 | 6.6 | 4.08 | 2.91 | 3.63 | 29.64 | 27% |

### Gate 3 design trade-offs by strategy

(a) money · (b) Prestige · (c) time to TV / streaming · (d) successful IPs · (e) Hall of Fame · (f) last-12-month revenue mix · (g) solvency. Medians unless noted; shares are of careers.

| Strategy | Config | (a) cash median | min cash | ever negative | (b) Prestige | (c) TV unlock yr (share) | streaming live yr (share) | subs end | payback yrs (share) | (d) IPs ≥10K fans | shows · seasons · max | (e) HoF / career | (f) last-12-mo mix: traditional / subs / opex | streaming share | releases |
|---|---|---:|---:|---:|---:|---|---|---:|---|---:|---|---:|---|---:|---:|
| tv-first | order_5 | $4.55M | $-4K | 74% | 10,955 | 2.7 (100%) | — (0%) | — | — (0%) | 7.0 | 8.0 · 56.0 · 8.0 | 8.0 | $0.80M / $0.00M / $0.00M | — | 64 |
| renewal-franchise | order_5 | $1.70M | $-2K | 58% | 4,090 | 2.5 (100%) | — (0%) | — | — (0%) | 1.0 | 1.0 · 57.0 · 57.0 | 0.0 | $0.57M / $0.00M / $0.00M | — | 65 |
| traditional-holdout | order_5 | $7.88M | $-4K | 73% | 13,755 | 2.5 (100%) | — (0%) | — | — (0%) | 13.0 | 8.0 · 42.0 · 6.0 | 14.0 | $0.89M / $0.00M / $0.00M | — | 64 |
| tv-first | order_10 | $12.99M | $-4K | 74% | 8,040 | 2.7 (100%) | — (0%) | — | — (0%) | 5.0 | 5.0 · 35.0 · 8.0 | 5.0 | $1.10M / $0.00M / $0.00M | — | 43 |
| renewal-franchise | order_10 | $7.30M | $-1K | 54% | 3,025 | 2.5 (100%) | — (0%) | — | — (0%) | 1.0 | 1.0 · 36.0 · 36.0 | 0.0 | $0.70M / $0.00M / $0.00M | — | 43 |
| traditional-holdout | order_10 | $14.25M | $-4K | 73% | 10,250 | 2.5 (100%) | — (0%) | — | — (0%) | 9.0 | 5.0 · 29.0 · 6.0 | 9.0 | $1.14M / $0.00M / $0.00M | — | 46 |
| tv-first | order_20 | $16.67M | $-4K | 74% | 5,645 | 2.7 (100%) | — (0%) | — | — (0%) | 3.0 | 4.0 · 25.0 · 8.0 | 3.0 | $1.30M / $0.00M / $0.00M | — | 33 |
| renewal-franchise | order_20 | $8.13M | $-1K | 54% | 2,680 | 2.5 (100%) | — (0%) | — | — (0%) | 1.0 | 1.0 · 29.0 · 29.0 | 0.0 | $0.66M / $0.00M / $0.00M | — | 36 |
| traditional-holdout | order_20 | $17.79M | $-4K | 73% | 7,345 | 2.5 (100%) | — (0%) | — | — (0%) | 6.0 | 4.0 · 20.0 · 6.0 | 6.0 | $1.38M / $0.00M / $0.00M | — | 35 |
| tv-first | order_max | $16.67M | $-4K | 74% | 5,645 | 2.7 (100%) | — (0%) | — | — (0%) | 3.0 | 4.0 · 25.0 · 8.0 | 3.0 | $1.30M / $0.00M / $0.00M | — | 33 |
| renewal-franchise | order_max | $8.13M | $-1K | 54% | 2,680 | 2.5 (100%) | — (0%) | — | — (0%) | 1.0 | 1.0 · 29.0 · 29.0 | 0.0 | $0.66M / $0.00M / $0.00M | — | 36 |
| traditional-holdout | order_max | $17.79M | $-4K | 73% | 7,345 | 2.5 (100%) | — (0%) | — | — (0%) | 6.0 | 4.0 · 20.0 · 6.0 | 6.0 | $1.38M / $0.00M / $0.00M | — | 35 |

### Formats: share of releases · mean score · HoF % · net per production week; Prestige sources

| Strategy | Config | limited_series: share · avg · HoF% · net/prod-wk | movie: share · avg · HoF% · net/prod-wk | tv: share · avg · HoF% · net/prod-wk | Prestige by format | top Prestige sources |
|---|---|---|---|---|---|---|
| tv-first | order_5 | 11% · 7.17 · 0.6% · $20.9K | 2% · 5.6 · 0% · $9.9K | 88% · 8.04 · 14.9% · $15.8K | limited_series 3.5%, tv 96.5% | audience_7_5 28.8%, meters_all_70 25.9%, hall_of_fame 15%, critic_8_5 13.8% |
| renewal-franchise | order_5 | — | 12% · 6.94 · 0.6% · $18.0K | 88% · 6.09 · 0.2% · $12.6K | movie 9.3%, tv 90.7% | meters_all_70 72.1%, audience_7_5 14%, ip_viewers_500k 3.6%, ip_gross_5m 3.6% |
| traditional-holdout | order_5 | 11% · 8.4 · 31.7% · $28.7K | 23% · 7.97 · 24% · $23.7K | 66% · 8.38 · 20.3% · $16.5K | limited_series 11.2%, movie 17.5%, tv 71.3% | audience_7_5 28.2%, meters_all_70 21.1%, hall_of_fame 20.7%, critic_8_5 15.7% |
| tv-first | order_10 | 16% · 7.17 · 0.6% · $20.9K | 2% · 5.6 · 0% · $9.9K | 82% · 8.08 · 15.7% · $24.4K | limited_series 4.8%, tv 95.2% | audience_7_5 26.3%, meters_all_70 22.9%, hall_of_fame 13.7%, critic_8_5 13.3% |
| renewal-franchise | order_10 | — | 18% · 6.94 · 0.6% · $18.0K | 82% · 6.24 · 0.5% · $18.2K | movie 12.4%, tv 87.6% | meters_all_70 61.4%, audience_7_5 19.1%, ip_viewers_500k 4.9%, ip_gross_5m 4.9% |
| traditional-holdout | order_10 | 12% · 8.29 · 27% · $27.9K | 27% · 7.81 · 17.1% · $22.9K | 61% · 8.42 · 21.7% · $25.2K | limited_series 11.1%, movie 17.3%, tv 71.6% | audience_7_5 26.5%, meters_all_70 19.8%, hall_of_fame 19%, critic_8_5 15.9% |
| tv-first | order_20 | 21% · 7.17 · 0.6% · $20.9K | 3% · 5.6 · 0% · $9.9K | 76% · 8.01 · 13.9% · $28.7K | limited_series 6.8%, tv 93.2% | audience_7_5 27.1%, meters_all_70 23.5%, critic_8_5 12.7%, hall_of_fame 12.3% |
| renewal-franchise | order_20 | — | 21% · 6.94 · 0.6% · $18.0K | 79% · 6.31 · 0.6% · $19.1K | movie 14%, tv 86% | meters_all_70 56.7%, audience_7_5 21.4%, ip_viewers_500k 5.5%, ip_gross_5m 5.5% |
| traditional-holdout | order_20 | 13% · 8.13 · 22.2% · $26.9K | 30% · 7.61 · 13.4% · $21.9K | 57% · 8.38 · 20.7% · $30.1K | limited_series 11.1%, movie 17.7%, tv 71.2% | audience_7_5 26.8%, meters_all_70 20%, hall_of_fame 17.8%, critic_8_5 15.3% |
| tv-first | order_max | 21% · 7.17 · 0.6% · $20.9K | 3% · 5.6 · 0% · $9.9K | 76% · 8.01 · 13.9% · $28.7K | limited_series 6.8%, tv 93.2% | audience_7_5 27.1%, meters_all_70 23.5%, critic_8_5 12.7%, hall_of_fame 12.3% |
| renewal-franchise | order_max | — | 21% · 6.94 · 0.6% · $18.0K | 79% · 6.31 · 0.6% · $19.1K | movie 14%, tv 86% | meters_all_70 56.7%, audience_7_5 21.4%, ip_viewers_500k 5.5%, ip_gross_5m 5.5% |
| traditional-holdout | order_max | 13% · 8.13 · 22.2% · $26.9K | 30% · 7.61 · 13.4% · $21.9K | 57% · 8.38 · 20.7% · $30.1K | limited_series 11.1%, movie 17.7%, tv 71.2% | audience_7_5 26.8%, meters_all_70 20%, hall_of_fame 17.8%, critic_8_5 15.3% |

### Gate 3 provisional flags

| Variant | Flag | Fired | Evidence |
|---|---|---|---|
| order_5 | STREAMING_INFINITE_GROWTH | no | not fired: 0/0 launched careers reached ≥90% of the reachable subscriber market (growth is capped by design; this flags saturation) [PROVISIONAL threshold] |
| order_5 | SUBSCRIBER_CHURN_SPIRAL | no | not fired: 0/0 launched careers lost >60% of subscribers within 3 years [PROVISIONAL threshold] |
| order_5 | TV_SEASON_TOO_PROFITABLE | no | not fired: 0/30664 finished traditional TV seasons netted >2× the batch's pooled movie net per production week ($21,200) [PROVISIONAL threshold] |
| order_5 | TV_SEASON_TOO_LONG | **yes** | 200 careers kept one show running ≥12 seasons (fatigue cap 0.35 may allow endless renewals) [PROVISIONAL threshold] |
| order_5 | TV_NO_RENEWAL_PATH | no | not fired: 0/600 TV careers never made a second season [PROVISIONAL threshold] |
| order_5 | MIXED_ECONOMY_SOFTLOCK | **yes** | 7/600 careers spent ≥3 years with negative cash [PROVISIONAL threshold] |
| order_5 | FORMAT_DOMINANT | no | not fired: best cash: traditional-holdout; best Prestige: traditional-holdout; fires only if one strategy leads both by >50% [PROVISIONAL threshold] |
| order_5 | DELAYED_STUDIO_PROGRESSION | no | not fired: TV not unlocked by year 8: 0/600; streaming not live by year 15: 0/0 [PROVISIONAL threshold] |
| order_10 | STREAMING_INFINITE_GROWTH | no | not fired: 0/0 launched careers reached ≥90% of the reachable subscriber market (growth is capped by design; this flags saturation) [PROVISIONAL threshold] |
| order_10 | SUBSCRIBER_CHURN_SPIRAL | no | not fired: 0/0 launched careers lost >60% of subscribers within 3 years [PROVISIONAL threshold] |
| order_10 | TV_SEASON_TOO_PROFITABLE | no | not fired: 0/19504 finished traditional TV seasons netted >2× the batch's pooled movie net per production week ($20,526) [PROVISIONAL threshold] |
| order_10 | TV_SEASON_TOO_LONG | **yes** | 200 careers kept one show running ≥12 seasons (fatigue cap 0.35 may allow endless renewals) [PROVISIONAL threshold] |
| order_10 | TV_NO_RENEWAL_PATH | no | not fired: 0/600 TV careers never made a second season [PROVISIONAL threshold] |
| order_10 | MIXED_ECONOMY_SOFTLOCK | **yes** | 1/600 careers spent ≥3 years with negative cash [PROVISIONAL threshold] |
| order_10 | FORMAT_DOMINANT | no | not fired: best cash: traditional-holdout; best Prestige: traditional-holdout; fires only if one strategy leads both by >50% [PROVISIONAL threshold] |
| order_10 | DELAYED_STUDIO_PROGRESSION | no | not fired: TV not unlocked by year 8: 0/600; streaming not live by year 15: 0/0 [PROVISIONAL threshold] |
| order_20 | STREAMING_INFINITE_GROWTH | no | not fired: 0/0 launched careers reached ≥90% of the reachable subscriber market (growth is capped by design; this flags saturation) [PROVISIONAL threshold] |
| order_20 | SUBSCRIBER_CHURN_SPIRAL | no | not fired: 0/0 launched careers lost >60% of subscribers within 3 years [PROVISIONAL threshold] |
| order_20 | TV_SEASON_TOO_PROFITABLE | no | not fired: 402/14485 finished traditional TV seasons netted >2× the batch's pooled movie net per production week ($19,729) [PROVISIONAL threshold] |
| order_20 | TV_SEASON_TOO_LONG | **yes** | 200 careers kept one show running ≥12 seasons (fatigue cap 0.35 may allow endless renewals) [PROVISIONAL threshold] |
| order_20 | TV_NO_RENEWAL_PATH | no | not fired: 0/600 TV careers never made a second season [PROVISIONAL threshold] |
| order_20 | MIXED_ECONOMY_SOFTLOCK | **yes** | 1/600 careers spent ≥3 years with negative cash [PROVISIONAL threshold] |
| order_20 | FORMAT_DOMINANT | no | not fired: best cash: traditional-holdout; best Prestige: traditional-holdout; fires only if one strategy leads both by >50% [PROVISIONAL threshold] |
| order_20 | DELAYED_STUDIO_PROGRESSION | no | not fired: TV not unlocked by year 8: 0/600; streaming not live by year 15: 0/0 [PROVISIONAL threshold] |
| order_max | STREAMING_INFINITE_GROWTH | no | not fired: 0/0 launched careers reached ≥90% of the reachable subscriber market (growth is capped by design; this flags saturation) [PROVISIONAL threshold] |
| order_max | SUBSCRIBER_CHURN_SPIRAL | no | not fired: 0/0 launched careers lost >60% of subscribers within 3 years [PROVISIONAL threshold] |
| order_max | TV_SEASON_TOO_PROFITABLE | no | not fired: 402/14485 finished traditional TV seasons netted >2× the batch's pooled movie net per production week ($19,729) [PROVISIONAL threshold] |
| order_max | TV_SEASON_TOO_LONG | **yes** | 200 careers kept one show running ≥12 seasons (fatigue cap 0.35 may allow endless renewals) [PROVISIONAL threshold] |
| order_max | TV_NO_RENEWAL_PATH | no | not fired: 0/600 TV careers never made a second season [PROVISIONAL threshold] |
| order_max | MIXED_ECONOMY_SOFTLOCK | **yes** | 1/600 careers spent ≥3 years with negative cash [PROVISIONAL threshold] |
| order_max | FORMAT_DOMINANT | no | not fired: best cash: traditional-holdout; best Prestige: traditional-holdout; fires only if one strategy leads both by >50% [PROVISIONAL threshold] |
| order_max | DELAYED_STUDIO_PROGRESSION | no | not fired: TV not unlocked by year 8: 0/600; streaming not live by year 15: 0/0 [PROVISIONAL threshold] |

### Diagnostic flags fired

| Variant | Fired |
|---|---|
| order_5 | EARLY_SOFTLOCK, PRESTIGE_TOO_FAST, QUALITY_INFLATION, DEAD_STRATEGY, DOMINANT_STRATEGY |
| order_10 | EARLY_SOFTLOCK, PRESTIGE_TOO_FAST, QUALITY_INFLATION, HIGH_REVIEWS_UNEXPLAINED_LOW_SALES |
| order_20 | EARLY_SOFTLOCK, QUALITY_INFLATION, HIGH_REVIEWS_UNEXPLAINED_LOW_SALES |
| order_max | EARLY_SOFTLOCK, QUALITY_INFLATION, HIGH_REVIEWS_UNEXPLAINED_LOW_SALES |
