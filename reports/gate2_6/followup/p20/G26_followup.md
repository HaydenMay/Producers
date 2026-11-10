# Experiment: G26_followup

> **Simulation assumptions, not design locks.** Paired seeds: every variant runs the same seeds and strategies; only the config overrides differ.

Gate 2.6 follow-up: the main matrix showed Hall of Fame peaking in years 5-15 (critic generation 1). combo_D front-loads the same 12% critic ceiling (first new generation +8%, then capped at 12%) to target that peak without being harsher late than combo_B. control and combo_B are rerun in a separate process as a reproducibility check (must match the main run exactly). TEST ASSUMPTIONS.

- Seeds 1–300 (300) · strategies: balanced, quality-first, franchise-builder, repeat-farmer, cheap-duds, experimenter, self-funder, selective-self-funder, famous-star · reference variant: **control**
- Ruleset v9.61-movie-kernel-0.1 · measured runtime 54119 ms for 8100 careers

| Variant | Config hash | Note |
|---|---|---|
| control | fc3c4828 | Gate 2.5 candidate, current expectation rules (era bar 0.04/yr, cap 1.8; no generations) `{}` |
| combo_B | 4148b948 | critic_moderate + audience_moderate `{"expectations":{"critics":{"enabled":true,"generationYears":6,"toughnessPerGeneration":0.04,"maxToughness":0.12},"audience":{"enabled":true,"eraYears":10,"toughnessPerEra":0.02,"maxToughness":0.06}}}` |
| combo_D | 7bc3e03a | critics every 6 yrs, +8% first generation, max 12% (front-loaded) + audience_moderate `{"expectations":{"critics":{"enabled":true,"generationYears":6,"toughnessPerGeneration":0.08,"maxToughness":0.12},"audience":{"enabled":true,"eraYears":10,"toughnessPerEra":0.02,"maxToughness":0.06}}}` |

## 20-production careers

Invariant violations across all variants: **0**.

### Medians by strategy

| Strategy | Variant | endCash | prestige | prestigePerRelease | meanAudience | meanCritic | share8plus | share9plus | shareLate8plus | hofShare | maxStaffEnd | staffCount | meanStaffStat | upgrades | firstUpgradeWeek | years | maxIpFans | negativeCashWeeks |
|---|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|
| balanced | control | $3743K | 3425 | 171.25 | 7.95 | 7.88 | 55% | 10% | 88% | 10% | 8 | 8 | 58.70 | 2 | 112 | 6.44 | 65882 | 2 |
| balanced | combo_B | $3743K | 3377.50 | 168.90 | 7.95 | 7.86 | 55% | 10% | 88% | 10% | 8 | 8 | 58.70 | 2 | 112 | 6.44 | 65663 | 2 |
| balanced | combo_D | $3743K | 3345 | 167.25 | 7.95 | 7.84 | 55% | 10% | 88% | 10% | 8 | 8 | 58.70 | 2 | 112 | 6.44 | 65486 | 2 |
| quality-first | control | $3789K | 2855 | 142.80 | 7.91 | 7.83 | 55% | 10% | 88% | 10% | 8 | 8 | 58.20 | 2 | 112 | 6.44 | 25275 | 1 |
| quality-first | combo_B | $3789K | 2827.50 | 141.40 | 7.91 | 7.82 | 55% | 10% | 88% | 10% | 8 | 8 | 58.20 | 2 | 112 | 6.44 | 24935.50 | 1 |
| quality-first | combo_D | $3788K | 2785 | 139.30 | 7.91 | 7.80 | 55% | 10% | 88% | 10% | 8 | 8 | 58.20 | 2 | 112 | 6.44 | 24601 | 1 |
| franchise-builder | control | $3375K | 2225 | 111.30 | 7.31 | 7.22 | 5% | 0% | 0% | 0% | 8 | 8 | 59 | 2 | 112 | 6.44 | 94631 | 2 |
| franchise-builder | combo_B | $3375K | 2225 | 111.30 | 7.31 | 7.21 | 5% | 0% | 0% | 0% | 8 | 8 | 59 | 2 | 112 | 6.44 | 94251.50 | 2 |
| franchise-builder | combo_D | $3375K | 2225 | 111.30 | 7.31 | 7.20 | 5% | 0% | 0% | 0% | 8 | 8 | 59 | 2 | 112 | 6.44 | 93821 | 2 |
| repeat-farmer | control | $3819K | 1750 | 87.50 | 7.04 | 7.04 | 5% | 0% | 0% | 0% | 8 | 8 | 58.40 | 2 | 112 | 6.44 | 133885 | 2 |
| repeat-farmer | combo_B | $3817K | 1750 | 87.50 | 7.04 | 7.03 | 5% | 0% | 0% | 0% | 8 | 8 | 58.40 | 2 | 112 | 6.44 | 133176 | 2 |
| repeat-farmer | combo_D | $3814K | 1750 | 87.50 | 7.04 | 7.01 | 5% | 0% | 0% | 0% | 8 | 8 | 58.40 | 2 | 112 | 6.44 | 132567.50 | 2 |
| cheap-duds | control | $2420K | 0 | 0 | 6.00 | 6.18 | 0% | 0% | 0% | 0% | 4 | 2 | 57 | 0 | — | 6.44 | 4849 | 0 |
| cheap-duds | combo_B | $2416K | 0 | 0 | 6.00 | 6.16 | 0% | 0% | 0% | 0% | 4 | 2 | 57 | 0 | — | 6.44 | 4789.50 | 0 |
| cheap-duds | combo_D | $2413K | 0 | 0 | 6.00 | 6.15 | 0% | 0% | 0% | 0% | 4 | 2 | 57 | 0 | — | 6.44 | 4688.50 | 0 |
| experimenter | control | $3640K | 2435 | 121.80 | 7.67 | 7.65 | 45% | 10% | 75% | 10% | 8 | 8 | 47.90 | 2 | 128 | 6.44 | 24911 | 1 |
| experimenter | combo_B | $3640K | 2377.50 | 118.90 | 7.67 | 7.64 | 45% | 10% | 75% | 10% | 8 | 8 | 47.90 | 2 | 128 | 6.44 | 24558 | 1 |
| experimenter | combo_D | $3640K | 2355 | 117.75 | 7.67 | 7.62 | 45% | 5% | 75% | 5% | 8 | 8 | 47.90 | 2 | 128 | 6.44 | 24268 | 1 |
| self-funder | control | $319K | 310 | 15.50 | 6.71 | 6.70 | 0% | 0% | 0% | 0% | 4 | 2 | 80.75 | 0 | — | 6.44 | 3960.50 | 12 |
| self-funder | combo_B | $319K | 310 | 15.50 | 6.71 | 6.68 | 0% | 0% | 0% | 0% | 4 | 2 | 80.75 | 0 | — | 6.44 | 3885 | 12 |
| self-funder | combo_D | $319K | 310 | 15.50 | 6.71 | 6.67 | 0% | 0% | 0% | 0% | 4 | 2 | 80.75 | 0 | — | 6.44 | 3848.50 | 12 |
| selective-self-funder | control | $3785K | 3462.50 | 173.15 | 7.94 | 7.88 | 55% | 15% | 88% | 15% | 8 | 8 | 58.70 | 2 | 112 | 6.44 | 63496 | 2 |
| selective-self-funder | combo_B | $3785K | 3427.50 | 171.40 | 7.94 | 7.88 | 55% | 10% | 88% | 10% | 8 | 8 | 58.70 | 2 | 112 | 6.44 | 63442.50 | 2 |
| selective-self-funder | combo_D | $3785K | 3365 | 168.25 | 7.94 | 7.86 | 55% | 10% | 88% | 10% | 8 | 8 | 58.70 | 2 | 112 | 6.44 | 63235.50 | 2 |
| famous-star | control | $3362K | 0 | 0 | 6.32 | 6.37 | 0% | 0% | 0% | 0% | 4 | 2 | 57 | 0 | — | 6.44 | 8896.50 | 7 |
| famous-star | combo_B | $3361K | 0 | 0 | 6.32 | 6.36 | 0% | 0% | 0% | 0% | 4 | 2 | 57 | 0 | — | 6.44 | 8745 | 7 |
| famous-star | combo_D | $3361K | 0 | 0 | 6.32 | 6.34 | 0% | 0% | 0% | 0% | 4 | 2 | 57 | 0 | — | 6.44 | 8651.50 | 7 |

### Paired deltas vs **control** (median of per-seed differences; share of seeds where the variant is higher)

| Strategy | Variant | Δ endCash | Δ prestige | Δ share8plus | Δ meanAudience |
|---|---|---:|---:|---:|---:|
| balanced | combo_B | $-0K (0%) | 0 (0%) | 0% (0%) | 0 (0%) |
| balanced | combo_D | $-0K (0%) | 0 (0%) | 0% (0%) | 0 (0%) |
| quality-first | combo_B | $-0K (0%) | 0 (0%) | 0% (0%) | 0 (0%) |
| quality-first | combo_D | $-0K (0%) | 0 (0%) | 0% (0%) | 0 (0%) |
| franchise-builder | combo_B | $-0K (0%) | 0 (0%) | 0% (0%) | 0 (0%) |
| franchise-builder | combo_D | $-0K (0%) | 0 (0%) | 0% (0%) | 0 (0%) |
| repeat-farmer | combo_B | $-2K (0%) | 0 (0%) | 0% (0%) | 0 (0%) |
| repeat-farmer | combo_D | $-4K (0%) | 0 (0%) | 0% (0%) | 0 (0%) |
| cheap-duds | combo_B | $-3K (0%) | 0 (0%) | 0% (0%) | 0 (0%) |
| cheap-duds | combo_D | $-7K (0%) | 0 (0%) | 0% (0%) | 0 (0%) |
| experimenter | combo_B | $-0K (0%) | 0 (0%) | 0% (0%) | 0 (0%) |
| experimenter | combo_D | $-0K (0%) | 0 (0%) | 0% (0%) | 0 (0%) |
| self-funder | combo_B | $-0K (0%) | 0 (0%) | 0% (0%) | 0 (0%) |
| self-funder | combo_D | $-0K (0%) | 0 (0%) | 0% (0%) | 0 (0%) |
| selective-self-funder | combo_B | $-0K (0%) | 0 (0%) | 0% (0%) | 0 (0%) |
| selective-self-funder | combo_D | $-0K (0%) | 0 (0%) | 0% (0%) | 0 (0%) |
| famous-star | combo_B | $-0K (0%) | 0 (0%) | 0% (0%) | 0 (0%) |
| famous-star | combo_D | $-0K (0%) | 0 (0%) | 0% (0%) | 0 (0%) |

### Mean review score (avg of Audience+Critic) by production index

| Strategy | Variant | #1 | #5 | #10 | #20 |
|---|---|---:|---:|---:|---:|
| balanced | control | 5.62 | 7.39 | 8.27 | 8.67 |
| balanced | combo_B | 5.62 | 7.39 | 8.27 | 8.50 |
| balanced | combo_D | 5.62 | 7.39 | 8.27 | 8.33 |
| quality-first | control | 5.59 | 7.34 | 8.20 | 8.69 |
| quality-first | combo_B | 5.59 | 7.34 | 8.20 | 8.53 |
| quality-first | combo_D | 5.59 | 7.34 | 8.20 | 8.35 |
| franchise-builder | control | 5.60 | 7.37 | 7.72 | 7.04 |
| franchise-builder | combo_B | 5.60 | 7.37 | 7.72 | 6.90 |
| franchise-builder | combo_D | 5.60 | 7.37 | 7.72 | 6.76 |
| repeat-farmer | control | 5.61 | 7.39 | 7.77 | 6.60 |
| repeat-farmer | combo_B | 5.61 | 7.39 | 7.77 | 6.47 |
| repeat-farmer | combo_D | 5.61 | 7.39 | 7.77 | 6.34 |
| cheap-duds | control | 5.47 | 5.81 | 6.12 | 6.41 |
| cheap-duds | combo_B | 5.47 | 5.81 | 6.12 | 6.28 |
| cheap-duds | combo_D | 5.47 | 5.81 | 6.12 | 6.15 |
| experimenter | control | 5.59 | 7.23 | 8.02 | 8.61 |
| experimenter | combo_B | 5.59 | 7.23 | 8.02 | 8.45 |
| experimenter | combo_D | 5.59 | 7.23 | 8.02 | 8.28 |
| self-funder | control | 5.48 | 6.12 | 6.75 | 7.43 |
| self-funder | combo_B | 5.48 | 6.12 | 6.75 | 7.28 |
| self-funder | combo_D | 5.48 | 6.12 | 6.75 | 7.13 |
| selective-self-funder | control | 5.63 | 7.35 | 8.30 | 8.74 |
| selective-self-funder | combo_B | 5.63 | 7.35 | 8.30 | 8.58 |
| selective-self-funder | combo_D | 5.63 | 7.35 | 8.30 | 8.40 |
| famous-star | control | 5.57 | 5.98 | 6.39 | 6.79 |
| famous-star | combo_B | 5.57 | 5.98 | 6.39 | 6.66 |
| famous-star | combo_D | 5.57 | 5.98 | 6.39 | 6.52 |

### Great films — all strategies pooled, by release window

Denominators are films in that window. HoF = average of Audience and Critic ≥ hofThreshold (9.0). `≥9` is inclusive, `>9` strict.

| Strategy | Config | Window | Films (n) | Avg Aud | Avg Crit | HoF n (%) | Avg ≥9 n (%) | Avg >9 n (%) | Aud ≥9 n (%) | Crit ≥9 n (%) | 8+ n (%) | Careers with 0 HoF | HoF/career p10/p50/p90 | Best/career p10/p50/p90/p99 | Best combined movie | Prestige median |
|---|---|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---|---|---|---:|
| ALL | control | 1-5 | 13500 | 6.21 | 6.26 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 238 (1.8%) | 100% of 2700 | 0/0/0 | 6.14/7.29/7.94/8.4 | 8.70 "Midnight Protocol" (A8.64/C8.76; balanced seed 87 #5, yr 1.5, critic gen 0) |  |
| ALL | control | 6-20 | 40500 | 7.53 | 7.50 | 2952 (7.3%) | 2952 (7.3%) | 2836 (7.0%) | 3903 (9.6%) | 4138 (10.2%) | 13817 (34.1%) | 59% of 2700 | 0/0/4 | 7.19/8.36/9.61/10 | 10.00 "Dead Frequency" (A10/C10; experimenter seed 10 #18, yr 5.5, critic gen 0) |  |
| ALL | control | all | 54000 | 7.20 | 7.19 | 2952 (5.5%) | 2952 (5.5%) | 2836 (5.3%) | 3903 (7.2%) | 4138 (7.7%) | 14055 (26.0%) | 59% of 2700 | 0/0/4 | 7.19/8.36/9.61/10 | 10.00 "Dead Frequency" (A10/C10; experimenter seed 10 #18, yr 5.5, critic gen 0) |  |
| ALL | combo_B | 1-5 | 13500 | 6.21 | 6.26 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 238 (1.8%) | 100% of 2700 | 0/0/0 | 6.14/7.29/7.94/8.4 | 8.70 "Midnight Protocol" (A8.64/C8.76; balanced seed 87 #5, yr 1.5, critic gen 0) |  |
| ALL | combo_B | 6-20 | 40500 | 7.53 | 7.48 | 2839 (7.0%) | 2839 (7.0%) | 2733 (6.8%) | 3903 (9.6%) | 3905 (9.6%) | 13741 (33.9%) | 60% of 2700 | 0/0/3 | 7.19/8.36/9.59/10 | 10.00 "Dead Frequency" (A10/C10; experimenter seed 10 #18, yr 5.5, critic gen 0) |  |
| ALL | combo_B | all | 54000 | 7.20 | 7.17 | 2839 (5.3%) | 2839 (5.3%) | 2733 (5.1%) | 3903 (7.2%) | 3905 (7.2%) | 13979 (25.9%) | 60% of 2700 | 0/0/3 | 7.19/8.36/9.59/10 | 10.00 "Dead Frequency" (A10/C10; experimenter seed 10 #18, yr 5.5, critic gen 0) |  |
| ALL | combo_D | 1-5 | 13500 | 6.21 | 6.26 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 238 (1.8%) | 100% of 2700 | 0/0/0 | 6.14/7.29/7.94/8.4 | 8.70 "Midnight Protocol" (A8.64/C8.76; balanced seed 87 #5, yr 1.5, critic gen 0) |  |
| ALL | combo_D | 6-20 | 40500 | 7.53 | 7.46 | 2725 (6.7%) | 2725 (6.7%) | 2621 (6.5%) | 3903 (9.6%) | 3758 (9.3%) | 13649 (33.7%) | 60% of 2700 | 0/0/3 | 7.17/8.34/9.57/10 | 10.00 "Dead Frequency" (A10/C10; experimenter seed 10 #18, yr 5.5, critic gen 0) |  |
| ALL | combo_D | all | 54000 | 7.20 | 7.16 | 2725 (5.0%) | 2725 (5.0%) | 2621 (4.8%) | 3903 (7.2%) | 3758 (7.0%) | 13887 (25.7%) | 60% of 2700 | 0/0/3 | 7.17/8.35/9.57/10 | 10.00 "Dead Frequency" (A10/C10; experimenter seed 10 #18, yr 5.5, critic gen 0) |  |

### Great films by strategy (whole career)

| Strategy | Config | Window | Films (n) | Avg Aud | Avg Crit | HoF n (%) | Avg ≥9 n (%) | Avg >9 n (%) | Aud ≥9 n (%) | Crit ≥9 n (%) | 8+ n (%) | Careers with 0 HoF | HoF/career p10/p50/p90 | Best/career p10/p50/p90/p99 | Best combined movie | Prestige median |
|---|---|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---|---|---|---:|
| balanced | control | all | 6000 | 7.95 | 7.88 | 803 (13.4%) | 803 (13.4%) | 779 (13.0%) | 1009 (16.8%) | 1105 (18.4%) | 3364 (56.1%) | 11% of 300 | 0/2/5 | 8.98/9.39/9.74/10 | 10.00 "Hollow Code" (A10/C10; balanced seed 58 #17, yr 5.2, critic gen 0) | 3425 |
| quality-first | control | all | 6000 | 7.90 | 7.84 | 679 (11.3%) | 679 (11.3%) | 653 (10.9%) | 893 (14.9%) | 968 (16.1%) | 3244 (54.1%) | 5% of 300 | 1/2/4 | 9.06/9.41/9.73/10 | 10.00 "Last Signal" (A10/C10; quality-first seed 53 #18, yr 5.5, critic gen 0) | 2855 |
| franchise-builder | control | all | 6000 | 7.19 | 7.14 | 40 (0.7%) | 40 (0.7%) | 40 (0.7%) | 91 (1.5%) | 119 (2.0%) | 696 (11.6%) | 97% of 300 | 0/0/0 | 7.61/8/8.57/9.56 | 9.61 "Wild Signal 6" (A9.53/C9.68; franchise-builder seed 300 #15, yr 4.6, critic gen 0) | 2225 |
| repeat-farmer | control | all | 6000 | 7.07 | 7.06 | 15 (0.3%) | 15 (0.3%) | 15 (0.3%) | 28 (0.5%) | 40 (0.7%) | 592 (9.9%) | 99% of 300 | 0/0/0 | 7.62/8.03/8.54/8.97 | 9.58 "Iron Pulse" (A9.49/C9.67; repeat-farmer seed 38 #9, yr 2.8, critic gen 0) | 1750 |
| cheap-duds | control | all | 6000 | 6.00 | 6.15 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 100% of 300 | 0/0/0 | 6.8/7.14/7.54/7.82 | 7.93 "Red Echo" (A7.77/C8.09; cheap-duds seed 280 #18, yr 5.5, critic gen 0) | 0 |
| experimenter | control | all | 6000 | 7.68 | 7.67 | 568 (9.5%) | 568 (9.5%) | 538 (9.0%) | 888 (14.8%) | 785 (13.1%) | 2640 (44.0%) | 15% of 300 | 0/2/4 | 8.95/9.34/9.68/10 | 10.00 "Dead Frequency" (A10/C10; experimenter seed 10 #18, yr 5.5, critic gen 0) | 2435 |
| self-funder | control | all | 6000 | 6.71 | 6.69 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 7 (0.1%) | 158 (2.6%) | 100% of 300 | 0/0/0 | 7.49/7.92/8.41/8.7 | 8.90 "Iron Shadow" (A8.8/C9; self-funder seed 93 #20, yr 6.2, critic gen 0) | 310 |
| selective-self-funder | control | all | 6000 | 7.94 | 7.89 | 847 (14.1%) | 847 (14.1%) | 811 (13.5%) | 994 (16.6%) | 1114 (18.6%) | 3356 (55.9%) | 8% of 300 | 1/3/5.1 | 9.03/9.41/9.75/10 | 10.00 "Last Rising" (A10/C10; selective-self-funder seed 38 #17, yr 5.2, critic gen 0) | 3462.5 |
| famous-star | control | all | 6000 | 6.32 | 6.36 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 5 (0.1%) | 100% of 300 | 0/0/0 | 7/7.3/7.64/8.04 | 8.11 "Last Code" (A8/C8.21; famous-star seed 126 #19, yr 5.8, critic gen 0) | 0 |
| balanced | combo_B | all | 6000 | 7.95 | 7.87 | 779 (13.0%) | 779 (13.0%) | 758 (12.6%) | 1009 (16.8%) | 1045 (17.4%) | 3347 (55.8%) | 12% of 300 | 0/2/5 | 8.97/9.37/9.73/10 | 10.00 "Hollow Code" (A10/C10; balanced seed 58 #17, yr 5.2, critic gen 0) | 3377.5 |
| quality-first | combo_B | all | 6000 | 7.90 | 7.82 | 656 (10.9%) | 656 (10.9%) | 633 (10.6%) | 893 (14.9%) | 895 (14.9%) | 3232 (53.9%) | 6% of 300 | 1/2/4 | 9.04/9.4/9.72/10 | 10.00 "Last Signal" (A10/C10; quality-first seed 53 #18, yr 5.5, critic gen 0) | 2827.5 |
| franchise-builder | combo_B | all | 6000 | 7.19 | 7.13 | 39 (0.7%) | 39 (0.7%) | 39 (0.7%) | 91 (1.5%) | 117 (1.9%) | 696 (11.6%) | 98% of 300 | 0/0/0 | 7.61/8/8.57/9.56 | 9.61 "Wild Signal 6" (A9.53/C9.68; franchise-builder seed 300 #15, yr 4.6, critic gen 0) | 2225 |
| repeat-farmer | combo_B | all | 6000 | 7.07 | 7.04 | 15 (0.3%) | 15 (0.3%) | 15 (0.3%) | 28 (0.5%) | 40 (0.7%) | 592 (9.9%) | 99% of 300 | 0/0/0 | 7.62/8.03/8.54/8.97 | 9.58 "Iron Pulse" (A9.49/C9.67; repeat-farmer seed 38 #9, yr 2.8, critic gen 0) | 1750 |
| cheap-duds | combo_B | all | 6000 | 6.00 | 6.14 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 100% of 300 | 0/0/0 | 6.8/7.13/7.49/7.76 | 7.93 "Red Echo" (A7.77/C8.09; cheap-duds seed 280 #18, yr 5.5, critic gen 0) | 0 |
| experimenter | combo_B | all | 6000 | 7.68 | 7.66 | 529 (8.8%) | 529 (8.8%) | 502 (8.4%) | 888 (14.8%) | 755 (12.6%) | 2626 (43.8%) | 16% of 300 | 0/2/3 | 8.92/9.3/9.65/10 | 10.00 "Dead Frequency" (A10/C10; experimenter seed 10 #18, yr 5.5, critic gen 0) | 2377.5 |
| self-funder | combo_B | all | 6000 | 6.71 | 6.68 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 1 (0.0%) | 149 (2.5%) | 100% of 300 | 0/0/0 | 7.48/7.91/8.38/8.68 | 8.83 "Midnight Legacy" (A8.74/C8.92; self-funder seed 74 #19, yr 5.8, critic gen 0) | 310 |
| selective-self-funder | combo_B | all | 6000 | 7.94 | 7.87 | 821 (13.7%) | 821 (13.7%) | 786 (13.1%) | 994 (16.6%) | 1052 (17.5%) | 3336 (55.6%) | 8% of 300 | 1/2/5 | 9.03/9.4/9.73/10 | 10.00 "Last Rising" (A10/C10; selective-self-funder seed 38 #17, yr 5.2, critic gen 0) | 3427.5 |
| famous-star | combo_B | all | 6000 | 6.32 | 6.35 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 1 (0.0%) | 100% of 300 | 0/0/0 | 7/7.28/7.6/7.92 | 8.11 "Last Code" (A8/C8.21; famous-star seed 126 #19, yr 5.8, critic gen 0) | 0 |
| balanced | combo_D | all | 6000 | 7.95 | 7.85 | 749 (12.5%) | 749 (12.5%) | 728 (12.1%) | 1009 (16.8%) | 1010 (16.8%) | 3328 (55.5%) | 13% of 300 | 0/2/5 | 8.96/9.36/9.73/10 | 10.00 "Hollow Code" (A10/C10; balanced seed 58 #17, yr 5.2, critic gen 0) | 3345 |
| quality-first | combo_D | all | 6000 | 7.90 | 7.80 | 624 (10.4%) | 624 (10.4%) | 602 (10.0%) | 893 (14.9%) | 856 (14.3%) | 3206 (53.4%) | 7% of 300 | 1/2/4 | 9.04/9.39/9.71/10 | 10.00 "Last Signal" (A10/C10; quality-first seed 53 #18, yr 5.5, critic gen 0) | 2785 |
| franchise-builder | combo_D | all | 6000 | 7.19 | 7.11 | 37 (0.6%) | 37 (0.6%) | 36 (0.6%) | 91 (1.5%) | 115 (1.9%) | 695 (11.6%) | 98% of 300 | 0/0/0 | 7.61/8/8.57/9.56 | 9.61 "Wild Signal 6" (A9.53/C9.68; franchise-builder seed 300 #15, yr 4.6, critic gen 0) | 2225 |
| repeat-farmer | combo_D | all | 6000 | 7.07 | 7.03 | 15 (0.3%) | 15 (0.3%) | 15 (0.3%) | 28 (0.5%) | 40 (0.7%) | 592 (9.9%) | 99% of 300 | 0/0/0 | 7.62/8.03/8.54/8.97 | 9.58 "Iron Pulse" (A9.49/C9.67; repeat-farmer seed 38 #9, yr 2.8, critic gen 0) | 1750 |
| cheap-duds | combo_D | all | 6000 | 6.00 | 6.13 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 100% of 300 | 0/0/0 | 6.78/7.12/7.49/7.76 | 7.93 "Red Echo" (A7.77/C8.09; cheap-duds seed 280 #18, yr 5.5, critic gen 0) | 0 |
| experimenter | combo_D | all | 6000 | 7.68 | 7.64 | 509 (8.5%) | 509 (8.5%) | 483 (8.1%) | 888 (14.8%) | 720 (12.0%) | 2611 (43.5%) | 18% of 300 | 0/1/3 | 8.92/9.29/9.65/10 | 10.00 "Dead Frequency" (A10/C10; experimenter seed 10 #18, yr 5.5, critic gen 0) | 2355 |
| self-funder | combo_D | all | 6000 | 6.71 | 6.66 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 1 (0.0%) | 140 (2.3%) | 100% of 300 | 0/0/0 | 7.48/7.9/8.34/8.68 | 8.83 "Midnight Legacy" (A8.74/C8.92; self-funder seed 74 #19, yr 5.8, critic gen 0) | 310 |
| selective-self-funder | combo_D | all | 6000 | 7.94 | 7.86 | 791 (13.2%) | 791 (13.2%) | 757 (12.6%) | 994 (16.6%) | 1016 (16.9%) | 3314 (55.2%) | 9% of 300 | 1/2/5 | 9.02/9.38/9.73/10 | 10.00 "Last Rising" (A10/C10; selective-self-funder seed 38 #17, yr 5.2, critic gen 0) | 3365 |
| famous-star | combo_D | all | 6000 | 6.32 | 6.33 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 1 (0.0%) | 100% of 300 | 0/0/0 | 7/7.28/7.6/7.92 | 8.11 "Last Code" (A8/C8.21; famous-star seed 126 #19, yr 5.8, critic gen 0) | 0 |

### Greatest single films (all strategies, whole sample; reproducible from seed + config hash)

| Variant | Best combined | Best Audience | Best Critic | Year band with most HoF |
|---|---|---|---|---|
| control | 10.00 "Dead Frequency" (A10/C10; experimenter seed 10 #18, yr 5.5, critic gen 0) | 10.00 "Dead Frequency" (A10/C10; experimenter seed 10 #18, yr 5.5, critic gen 0) | 10.00 "Dead Frequency" (A10/C10; experimenter seed 10 #18, yr 5.5, critic gen 0) | y5-10: 12.8% of 10800 |
| combo_B | 10.00 "Dead Frequency" (A10/C10; experimenter seed 10 #18, yr 5.5, critic gen 0) | 10.00 "Dead Frequency" (A10/C10; experimenter seed 10 #18, yr 5.5, critic gen 0) | 10.00 "Dead Frequency" (A10/C10; experimenter seed 10 #18, yr 5.5, critic gen 0) | y5-10: 11.8% of 10800 |
| combo_D | 10.00 "Dead Frequency" (A10/C10; experimenter seed 10 #18, yr 5.5, critic gen 0) | 10.00 "Dead Frequency" (A10/C10; experimenter seed 10 #18, yr 5.5, critic gen 0) | 10.00 "Dead Frequency" (A10/C10; experimenter seed 10 #18, yr 5.5, critic gen 0) | y5-10: 10.7% of 10800 |

### Great films by in-game year (all strategies pooled)

| Strategy | Config | Window | Films (n) | Avg Aud | Avg Crit | HoF n (%) | Avg ≥9 n (%) | Avg >9 n (%) | Aud ≥9 n (%) | Crit ≥9 n (%) | 8+ n (%) | Careers with 0 HoF | HoF/career p10/p50/p90 | Best/career p10/p50/p90/p99 | Best combined movie | Prestige median |
|---|---|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---|---|---|---:|
| ALL | control | y0-5 | 43200 | 7.08 | 7.08 | 1565 (3.6%) | 1565 (3.6%) | 1509 (3.5%) | 2362 (5.5%) | 2379 (5.5%) | 9814 (22.7%) | 70% of 2700 | 0/0/2 | 7/8.3/9.43/9.84 | 10.00 "Silver Edge" (A10/C10; selective-self-funder seed 46 #12, yr 3.7, critic gen 0) |  |
| ALL | control | y5-10 | 10800 | 7.65 | 7.61 | 1387 (12.8%) | 1387 (12.8%) | 1327 (12.3%) | 1541 (14.3%) | 1759 (16.3%) | 4241 (39.3%) | 68% of 2700 | 0/0/2 | 6.74/7.92/9.49/9.96 | 10.00 "Dead Frequency" (A10/C10; experimenter seed 10 #18, yr 5.5, critic gen 0) |  |
| ALL | combo_B | y0-5 | 43200 | 7.08 | 7.08 | 1565 (3.6%) | 1565 (3.6%) | 1509 (3.5%) | 2362 (5.5%) | 2379 (5.5%) | 9814 (22.7%) | 70% of 2700 | 0/0/2 | 7/8.3/9.43/9.84 | 10.00 "Silver Edge" (A10/C10; selective-self-funder seed 46 #12, yr 3.7, critic gen 0) |  |
| ALL | combo_B | y5-10 | 10800 | 7.65 | 7.54 | 1274 (11.8%) | 1274 (11.8%) | 1224 (11.3%) | 1541 (14.3%) | 1526 (14.1%) | 4165 (38.6%) | 69% of 2700 | 0/0/2 | 6.72/7.89/9.46/9.95 | 10.00 "Dead Frequency" (A10/C10; experimenter seed 10 #18, yr 5.5, critic gen 0) |  |
| ALL | combo_D | y0-5 | 43200 | 7.08 | 7.08 | 1565 (3.6%) | 1565 (3.6%) | 1509 (3.5%) | 2362 (5.5%) | 2379 (5.5%) | 9814 (22.7%) | 70% of 2700 | 0/0/2 | 7/8.3/9.43/9.84 | 10.00 "Silver Edge" (A10/C10; selective-self-funder seed 46 #12, yr 3.7, critic gen 0) |  |
| ALL | combo_D | y5-10 | 10800 | 7.65 | 7.46 | 1160 (10.7%) | 1160 (10.7%) | 1112 (10.3%) | 1541 (14.3%) | 1379 (12.8%) | 4073 (37.7%) | 71% of 2700 | 0/0/2 | 6.71/7.88/9.43/9.82 | 10.00 "Dead Frequency" (A10/C10; experimenter seed 10 #18, yr 5.5, critic gen 0) |  |

### Prestige progression (Prestige gates growth; cash sustains operations)

`cash-rich but Prestige-locked` = careers that at some week had the cash for the next upgrade but not the Prestige. `bought below gate` must be 0 (engine rule).

| Strategy | Config | Cash median | Prestige median | Prestige/yr | Careers with negative-cash weeks | →6 gate met (Prestige ≥ 200) · median film # | →6 bought · median film # | →6 cash-rich but Prestige-locked | →6 bought below gate | →8 gate met (Prestige ≥ 1000) · median film # | →8 bought · median film # | →8 cash-rich but Prestige-locked | →8 bought below gate |
|---|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|
| balanced | control | $3.74M | 3425 | 531.8 | 71% | 100% · #6 | 100% · #7 | 100% | 0 | 100% · #11 | 100% · #11 | 100% | 0 |
| quality-first | control | $3.79M | 2855 | 443.3 | 57% | 100% · #7 | 100% · #7 | 100% | 0 | 100% · #12 | 100% · #12 | 100% | 0 |
| franchise-builder | control | $3.37M | 2225 | 345.5 | 71% | 100% · #6 | 100% · #7 | 100% | 0 | 100% · #10 | 100% · #10 | 100% | 0 |
| repeat-farmer | control | $3.82M | 1750 | 271.7 | 63% | 100% · #6 | 100% · #7 | 100% | 0 | 100% · #11 | 98% · #11 | 100% | 0 |
| cheap-duds | control | $2.42M | 0 | 0 | 4% | 0% · #— | 0% · #— | 100% | 0 | 0% · #— | 0% · #— | 0% | 0 |
| experimenter | control | $3.64M | 2435 | 378.1 | 56% | 100% · #8 | 100% · #8 | 100% | 0 | 100% · #14 | 100% · #14 | 100% | 0 |
| self-funder | control | $0.32M | 310 | 48.2 | 100% | 77% · #17 | 0% · #— | 75% | 0 | 0% · #20 | 0% · #— | 0% | 0 |
| selective-self-funder | control | $3.78M | 3462.5 | 537.7 | 67% | 100% · #6.5 | 100% · #7 | 100% | 0 | 100% · #10 | 100% · #11 | 100% | 0 |
| famous-star | control | $3.36M | 0 | 0 | 100% | 2% · #18 | 0% · #— | 100% | 0 | 0% · #— | 0% · #— | 0% | 0 |
| balanced | combo_B | $3.74M | 3377.5 | 524.5 | 71% | 100% · #6 | 100% · #7 | 100% | 0 | 100% · #11 | 100% · #11 | 100% | 0 |
| quality-first | combo_B | $3.79M | 2827.5 | 439.1 | 57% | 100% · #7 | 100% · #7 | 100% | 0 | 100% · #12 | 100% · #12 | 100% | 0 |
| franchise-builder | combo_B | $3.37M | 2225 | 345.5 | 71% | 100% · #6 | 100% · #7 | 100% | 0 | 100% · #10 | 100% · #10 | 100% | 0 |
| repeat-farmer | combo_B | $3.82M | 1750 | 271.7 | 63% | 100% · #6 | 100% · #7 | 100% | 0 | 100% · #11 | 98% · #11 | 100% | 0 |
| cheap-duds | combo_B | $2.42M | 0 | 0 | 4% | 0% · #— | 0% · #— | 100% | 0 | 0% · #— | 0% · #— | 0% | 0 |
| experimenter | combo_B | $3.64M | 2377.5 | 369.2 | 56% | 100% · #8 | 100% · #8 | 100% | 0 | 100% · #14 | 100% · #14 | 100% | 0 |
| self-funder | combo_B | $0.32M | 310 | 48.1 | 100% | 77% · #17 | 0% · #— | 75% | 0 | 0% · #20 | 0% · #— | 0% | 0 |
| selective-self-funder | combo_B | $3.78M | 3427.5 | 532.2 | 67% | 100% · #6.5 | 100% · #7 | 100% | 0 | 100% · #10 | 100% · #11 | 100% | 0 |
| famous-star | combo_B | $3.36M | 0 | 0 | 100% | 2% · #18 | 0% · #— | 100% | 0 | 0% · #— | 0% · #— | 0% | 0 |
| balanced | combo_D | $3.74M | 3345 | 519.4 | 71% | 100% · #6 | 100% · #7 | 100% | 0 | 100% · #11 | 100% · #11 | 100% | 0 |
| quality-first | combo_D | $3.79M | 2785 | 432.5 | 57% | 100% · #7 | 100% · #7 | 100% | 0 | 100% · #12 | 100% · #12 | 100% | 0 |
| franchise-builder | combo_D | $3.37M | 2225 | 345.5 | 71% | 100% · #6 | 100% · #7 | 100% | 0 | 100% · #10 | 100% · #10 | 100% | 0 |
| repeat-farmer | combo_D | $3.81M | 1750 | 271.7 | 63% | 100% · #6 | 100% · #7 | 100% | 0 | 100% · #11 | 98% · #11 | 100% | 0 |
| cheap-duds | combo_D | $2.41M | 0 | 0 | 4% | 0% · #— | 0% · #— | 100% | 0 | 0% · #— | 0% · #— | 0% | 0 |
| experimenter | combo_D | $3.64M | 2355 | 365.7 | 56% | 100% · #8 | 100% · #8 | 100% | 0 | 100% · #14 | 100% · #14 | 100% | 0 |
| self-funder | combo_D | $0.32M | 310 | 48.1 | 100% | 77% · #17 | 0% · #— | 75% | 0 | 0% · #20 | 0% · #— | 0% | 0 |
| selective-self-funder | combo_D | $3.78M | 3365 | 522.5 | 67% | 100% · #6.5 | 100% · #7 | 100% | 0 | 100% · #10 | 100% · #11 | 100% | 0 |
| famous-star | combo_D | $3.36M | 0 | 0 | 100% | 2% · #18 | 0% · #— | 100% | 0 | 0% · #— | 0% · #— | 0% | 0 |

### Prestige milestones awarded per career (mean)

| Strategy | Variant | audience_7_5 | critic_8_5 | first_hall_of_fame | hall_of_fame | ip_gross_1m | ip_gross_5m | ip_viewers_500k | meters_all_70 | careers > 400 Prestige/yr (OUTDATED threshold) |
|---|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|
| balanced | control | 14.2 | 6.93 | 0.89 | 2.68 | 1.82 | 0 | 1.82 | 14.6 | 95% |
| balanced | combo_B | 14.2 | 6.82 | 0.88 | 2.6 | 1.82 | 0 | 1.82 | 14.6 | 94% |
| balanced | combo_D | 14.2 | 6.59 | 0.87 | 2.5 | 1.82 | 0 | 1.82 | 14.6 | 93% |
| quality-first | control | 13.92 | 6.55 | 0.95 | 2.26 | 0 | 0 | 0 | 14.61 | 77% |
| quality-first | combo_B | 13.92 | 6.41 | 0.94 | 2.19 | 0 | 0 | 0 | 14.61 | 75% |
| quality-first | combo_D | 13.92 | 6.15 | 0.93 | 2.08 | 0 | 0 | 0 | 14.61 | 71% |
| franchise-builder | control | 8.02 | 1.06 | 0.03 | 0.13 | 2.01 | 1.78 | 2.01 | 14.65 | 22% |
| franchise-builder | combo_B | 8.02 | 1.05 | 0.02 | 0.13 | 2.01 | 1.78 | 2.01 | 14.65 | 22% |
| franchise-builder | combo_D | 8.02 | 1.05 | 0.02 | 0.12 | 2.01 | 1.78 | 2.01 | 14.65 | 22% |
| repeat-farmer | control | 6.3 | 0.89 | 0.01 | 0.05 | 1 | 1 | 1 | 14.69 | 1% |
| repeat-farmer | combo_B | 6.3 | 0.89 | 0.01 | 0.05 | 1 | 1 | 1 | 14.69 | 1% |
| repeat-farmer | combo_D | 6.3 | 0.89 | 0.01 | 0.05 | 1 | 1 | 1 | 14.69 | 1% |
| cheap-duds | control | 0.34 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0% |
| cheap-duds | combo_B | 0.34 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0% |
| cheap-duds | combo_D | 0.34 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0% |
| experimenter | control | 11.96 | 5.81 | 0.85 | 1.89 | 0 | 0 | 0 | 12.02 | 37% |
| experimenter | combo_B | 11.96 | 5.72 | 0.84 | 1.76 | 0 | 0 | 0 | 12.02 | 35% |
| experimenter | combo_D | 11.96 | 5.55 | 0.82 | 1.7 | 0 | 0 | 0 | 12.02 | 33% |
| self-funder | control | 3.73 | 0.36 | 0 | 0 | 0 | 0 | 0 | 0.87 | 0% |
| self-funder | combo_B | 3.73 | 0.34 | 0 | 0 | 0 | 0 | 0 | 0.87 | 0% |
| self-funder | combo_D | 3.73 | 0.3 | 0 | 0 | 0 | 0 | 0 | 0.87 | 0% |
| selective-self-funder | control | 14.21 | 7.12 | 0.92 | 2.82 | 1.88 | 0.02 | 1.88 | 14.56 | 95% |
| selective-self-funder | combo_B | 14.21 | 7 | 0.92 | 2.74 | 1.88 | 0.02 | 1.88 | 14.56 | 95% |
| selective-self-funder | combo_D | 14.21 | 6.76 | 0.91 | 2.64 | 1.88 | 0.02 | 1.88 | 14.56 | 94% |
| famous-star | control | 0.61 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0% |
| famous-star | combo_B | 0.61 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0% |
| famous-star | combo_D | 0.61 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0% |

### Diagnostic flags fired

| Variant | Fired |
|---|---|
| control | EARLY_SOFTLOCK, PRESTIGE_TOO_FAST, QUALITY_INFLATION, DEAD_STRATEGY |
| combo_B | EARLY_SOFTLOCK, PRESTIGE_TOO_FAST, QUALITY_INFLATION, DEAD_STRATEGY |
| combo_D | EARLY_SOFTLOCK, PRESTIGE_TOO_FAST, QUALITY_INFLATION, DEAD_STRATEGY |
