# Experiment: G26_followup

> **Simulation assumptions, not design locks.** Paired seeds: every variant runs the same seeds and strategies; only the config overrides differ.

Gate 2.6 follow-up: the main matrix showed Hall of Fame peaking in years 5-15 (critic generation 1). combo_D front-loads the same 12% critic ceiling (first new generation +8%, then capped at 12%) to target that peak without being harsher late than combo_B. control and combo_B are rerun in a separate process as a reproducibility check (must match the main run exactly). TEST ASSUMPTIONS.

- Seeds 1–300 (300) · strategies: balanced, quality-first, franchise-builder, repeat-farmer, cheap-duds, experimenter, self-funder, selective-self-funder, famous-star · reference variant: **control**
- Ruleset v9.61-movie-kernel-0.1 · measured runtime 212076 ms for 8100 careers

| Variant | Config hash | Note |
|---|---|---|
| control | fc3c4828 | Gate 2.5 candidate, current expectation rules (era bar 0.04/yr, cap 1.8; no generations) `{}` |
| combo_B | 4148b948 | critic_moderate + audience_moderate `{"expectations":{"critics":{"enabled":true,"generationYears":6,"toughnessPerGeneration":0.04,"maxToughness":0.12},"audience":{"enabled":true,"eraYears":10,"toughnessPerEra":0.02,"maxToughness":0.06}}}` |
| combo_D | 7bc3e03a | critics every 6 yrs, +8% first generation, max 12% (front-loaded) + audience_moderate `{"expectations":{"critics":{"enabled":true,"generationYears":6,"toughnessPerGeneration":0.08,"maxToughness":0.12},"audience":{"enabled":true,"eraYears":10,"toughnessPerEra":0.02,"maxToughness":0.06}}}` |

## 50-production careers

Invariant violations across all variants: **0**.

### Medians by strategy

| Strategy | Variant | endCash | prestige | prestigePerRelease | meanAudience | meanCritic | share8plus | share9plus | shareLate8plus | hofShare | maxStaffEnd | staffCount | meanStaffStat | upgrades | firstUpgradeWeek | years | maxIpFans | negativeCashWeeks |
|---|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|
| balanced | control | $12396K | 11100 | 222 | 8.43 | 8.34 | 72% | 30% | 80% | 30% | 8 | 8 | 96.60 | 2 | 112 | 15.67 | 96370 | 2 |
| balanced | combo_B | $12374K | 9665 | 193.30 | 8.39 | 8.07 | 68% | 18% | 75% | 18% | 8 | 8 | 96.60 | 2 | 112 | 15.67 | 86458.50 | 2 |
| balanced | combo_D | $12400K | 8702.50 | 174.05 | 8.39 | 7.86 | 64% | 12% | 70% | 12% | 8 | 8 | 96.60 | 2 | 112 | 15.67 | 81972 | 2 |
| quality-first | control | $12750K | 10147.50 | 202.95 | 8.46 | 8.35 | 76% | 26% | 90% | 26% | 8 | 8 | 96.40 | 2 | 112 | 15.67 | 26420 | 1 |
| quality-first | combo_B | $12743K | 8622.50 | 172.45 | 8.41 | 8.06 | 70% | 16% | 80% | 16% | 8 | 8 | 96.40 | 2 | 112 | 15.67 | 23826.50 | 1 |
| quality-first | combo_D | $12744K | 7602.50 | 152.05 | 8.41 | 7.85 | 64% | 10% | 70% | 10% | 8 | 8 | 96.40 | 2 | 112 | 15.67 | 22686 | 1 |
| franchise-builder | control | $11062K | 4052.50 | 81.05 | 7.08 | 7.00 | 6% | 0% | 0% | 0% | 8 | 8 | 96.70 | 2 | 112 | 15.67 | 147978 | 2 |
| franchise-builder | combo_B | $11128K | 4300 | 86 | 7.16 | 6.88 | 8% | 0% | 0% | 0% | 8 | 8 | 96.70 | 2 | 112 | 15.67 | 133679.50 | 2 |
| franchise-builder | combo_D | $11118K | 4675 | 93.50 | 7.26 | 6.77 | 10% | 0% | 5% | 0% | 8 | 8 | 96.70 | 2 | 112 | 15.67 | 124535 | 2 |
| repeat-farmer | control | $13453K | 3250 | 65 | 6.86 | 6.83 | 2% | 0% | 0% | 0% | 8 | 8 | 96.40 | 2 | 112 | 15.67 | 231674 | 2 |
| repeat-farmer | combo_B | $12856K | 3250 | 65 | 6.81 | 6.60 | 2% | 0% | 0% | 0% | 8 | 8 | 96.40 | 2 | 112 | 15.67 | 196336 | 2 |
| repeat-farmer | combo_D | $12589K | 3250 | 65 | 6.81 | 6.43 | 2% | 0% | 0% | 0% | 8 | 8 | 96.40 | 2 | 112 | 15.67 | 180076 | 2 |
| cheap-duds | control | $7620K | 150 | 3 | 6.28 | 6.43 | 0% | 0% | 0% | 0% | 4 | 2 | 80.80 | 0 | — | 15.67 | 8150.50 | 0 |
| cheap-duds | combo_B | $7150K | 150 | 3 | 6.25 | 6.19 | 0% | 0% | 0% | 0% | 4 | 2 | 80.80 | 0 | — | 15.67 | 6221 | 0 |
| cheap-duds | combo_D | $6962K | 150 | 3 | 6.23 | 6.03 | 0% | 0% | 0% | 0% | 4 | 2 | 80.80 | 0 | — | 15.67 | 5552.50 | 0 |
| experimenter | control | $13512K | 9732.50 | 194.65 | 8.34 | 8.31 | 72% | 22% | 95% | 22% | 8 | 8 | 76.85 | 2 | 128 | 15.67 | 23714 | 1 |
| experimenter | combo_B | $13504K | 7997.50 | 159.95 | 8.27 | 8.02 | 66% | 12% | 80% | 12% | 8 | 8 | 76.85 | 2 | 128 | 15.67 | 20936 | 1 |
| experimenter | combo_D | $13504K | 7130 | 142.60 | 8.27 | 7.80 | 62% | 8% | 70% | 8% | 8 | 8 | 76.85 | 2 | 128 | 15.67 | 19809 | 1 |
| self-funder | control | $305K | 3212.50 | 64.25 | 7.21 | 7.16 | 10% | 0% | 15% | 0% | 4 | 2 | 100 | 0 | — | 15.67 | 3823 | 12 |
| self-funder | combo_B | $302K | 3005 | 60.10 | 7.16 | 6.90 | 6% | 0% | 5% | 0% | 4 | 2 | 100 | 0 | — | 15.67 | 3408.50 | 12 |
| self-funder | combo_D | $302K | 2950 | 59 | 7.16 | 6.72 | 2% | 0% | 0% | 0% | 4 | 2 | 100 | 0 | — | 15.67 | 3232 | 12 |
| selective-self-funder | control | $12528K | 11265 | 225.30 | 8.43 | 8.37 | 72% | 30% | 85% | 30% | 8 | 8 | 96.60 | 2 | 112 | 15.67 | 98273.50 | 2 |
| selective-self-funder | combo_B | $12548K | 9912.50 | 198.25 | 8.40 | 8.10 | 68% | 18% | 75% | 18% | 8 | 8 | 96.60 | 2 | 112 | 15.67 | 88264 | 2 |
| selective-self-funder | combo_D | $12522K | 8785 | 175.70 | 8.41 | 7.89 | 64% | 12% | 70% | 12% | 8 | 8 | 96.60 | 2 | 112 | 15.67 | 83361 | 2 |
| famous-star | control | $11594K | 380 | 7.60 | 6.68 | 6.72 | 0% | 0% | 0% | 0% | 4 | 2 | 80.80 | 0 | — | 15.67 | 13267 | 7 |
| famous-star | combo_B | $11424K | 300 | 6 | 6.63 | 6.47 | 0% | 0% | 0% | 0% | 4 | 2 | 80.80 | 0 | — | 15.67 | 10836.50 | 7 |
| famous-star | combo_D | $11409K | 300 | 6 | 6.63 | 6.30 | 0% | 0% | 0% | 0% | 4 | 2 | 80.80 | 0 | — | 15.67 | 10068.50 | 7 |

### Paired deltas vs **control** (median of per-seed differences; share of seeds where the variant is higher)

| Strategy | Variant | Δ endCash | Δ prestige | Δ share8plus | Δ meanAudience |
|---|---|---:|---:|---:|---:|
| balanced | combo_B | $-4K (44%) | -1425 (2%) | -4% (3%) | -0.06 (12%) |
| balanced | combo_D | $-0K (50%) | -2425 (0%) | -8% (2%) | -0.05 (22%) |
| quality-first | combo_B | $-7K (31%) | -1495 (0%) | -6% (0%) | -0.06 (0%) |
| quality-first | combo_D | $-8K (37%) | -2467.50 (0%) | -12% (0%) | -0.06 (0%) |
| franchise-builder | combo_B | $-94K (20%) | 0 (23%) | 0% (22%) | -0.05 (27%) |
| franchise-builder | combo_D | $-99K (29%) | 0 (36%) | 0% (32%) | -0.04 (42%) |
| repeat-farmer | combo_B | $-560K (0%) | 0 (0%) | 0% (0%) | -0.05 (0%) |
| repeat-farmer | combo_D | $-830K (0%) | 0 (0%) | 0% (0%) | -0.05 (0%) |
| cheap-duds | combo_B | $-412K (7%) | 0 (8%) | 0% (0%) | -0.05 (12%) |
| cheap-duds | combo_D | $-607K (4%) | 0 (9%) | 0% (0%) | -0.05 (15%) |
| experimenter | combo_B | $-1K (46%) | -1720 (0%) | -6% (0%) | -0.06 (0%) |
| experimenter | combo_D | $0K (51%) | -2620 (0%) | -12% (0%) | -0.06 (0%) |
| self-funder | combo_B | $-9K (26%) | -170 (0%) | -6% (0%) | -0.05 (0%) |
| self-funder | combo_D | $-8K (30%) | -245 (0%) | -8% (0%) | -0.05 (1%) |
| selective-self-funder | combo_B | $-1K (49%) | -1420 (1%) | -4% (4%) | -0.06 (13%) |
| selective-self-funder | combo_D | $-3K (47%) | -2365 (0%) | -8% (1%) | -0.05 (23%) |
| famous-star | combo_B | $-145K (3%) | -117.50 (1%) | 0% (0%) | -0.05 (0%) |
| famous-star | combo_D | $-164K (2%) | -117.50 (1%) | 0% (0%) | -0.05 (0%) |

### Mean review score (avg of Audience+Critic) by production index

| Strategy | Variant | #1 | #5 | #10 | #20 | #30 | #50 |
|---|---|---:|---:|---:|---:|---:|---:|
| balanced | control | 5.62 | 7.39 | 8.27 | 8.67 | 8.73 | 8.75 |
| balanced | combo_B | 5.62 | 7.39 | 8.27 | 8.50 | 8.58 | 8.41 |
| balanced | combo_D | 5.62 | 7.39 | 8.27 | 8.33 | 8.41 | 8.26 |
| quality-first | control | 5.59 | 7.34 | 8.20 | 8.69 | 8.78 | 8.72 |
| quality-first | combo_B | 5.59 | 7.34 | 8.20 | 8.53 | 8.62 | 8.30 |
| quality-first | combo_D | 5.59 | 7.34 | 8.20 | 8.35 | 8.44 | 8.13 |
| franchise-builder | control | 5.60 | 7.37 | 7.72 | 7.04 | 6.85 | 6.94 |
| franchise-builder | combo_B | 5.60 | 7.37 | 7.72 | 6.90 | 6.88 | 6.80 |
| franchise-builder | combo_D | 5.60 | 7.37 | 7.72 | 6.76 | 6.88 | 6.83 |
| repeat-farmer | control | 5.61 | 7.39 | 7.77 | 6.60 | 6.68 | 6.74 |
| repeat-farmer | combo_B | 5.61 | 7.39 | 7.77 | 6.47 | 6.54 | 6.40 |
| repeat-farmer | combo_D | 5.61 | 7.39 | 7.77 | 6.34 | 6.41 | 6.27 |
| cheap-duds | control | 5.47 | 5.81 | 6.12 | 6.41 | 6.57 | 6.49 |
| cheap-duds | combo_B | 5.47 | 5.81 | 6.12 | 6.28 | 6.45 | 6.17 |
| cheap-duds | combo_D | 5.47 | 5.81 | 6.12 | 6.15 | 6.32 | 5.99 |
| experimenter | control | 5.59 | 7.23 | 8.02 | 8.61 | 8.76 | 8.47 |
| experimenter | combo_B | 5.59 | 7.23 | 8.02 | 8.45 | 8.61 | 8.05 |
| experimenter | combo_D | 5.59 | 7.23 | 8.02 | 8.28 | 8.43 | 7.88 |
| self-funder | control | 5.48 | 6.12 | 6.75 | 7.43 | 7.58 | 7.26 |
| self-funder | combo_B | 5.48 | 6.12 | 6.75 | 7.28 | 7.43 | 6.90 |
| self-funder | combo_D | 5.48 | 6.12 | 6.75 | 7.13 | 7.28 | 6.75 |
| selective-self-funder | control | 5.63 | 7.35 | 8.30 | 8.74 | 8.74 | 8.68 |
| selective-self-funder | combo_B | 5.63 | 7.35 | 8.30 | 8.58 | 8.57 | 8.40 |
| selective-self-funder | combo_D | 5.63 | 7.35 | 8.30 | 8.40 | 8.40 | 8.20 |
| famous-star | control | 5.57 | 5.98 | 6.39 | 6.79 | 6.97 | 6.89 |
| famous-star | combo_B | 5.57 | 5.98 | 6.39 | 6.66 | 6.83 | 6.53 |
| famous-star | combo_D | 5.57 | 5.98 | 6.39 | 6.52 | 6.70 | 6.39 |

### Great films — all strategies pooled, by release window

Denominators are films in that window. HoF = average of Audience and Critic ≥ hofThreshold (9.0). `≥9` is inclusive, `>9` strict.

| Strategy | Config | Window | Films (n) | Avg Aud | Avg Crit | HoF n (%) | Avg ≥9 n (%) | Avg >9 n (%) | Aud ≥9 n (%) | Crit ≥9 n (%) | 8+ n (%) | Careers with 0 HoF | HoF/career p10/p50/p90 | Best/career p10/p50/p90/p99 | Best combined movie | Prestige median |
|---|---|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---|---|---|---:|
| ALL | control | 1-5 | 13500 | 6.21 | 6.26 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 238 (1.8%) | 100% of 2700 | 0/0/0 | 6.14/7.29/7.94/8.4 | 8.70 "Midnight Protocol" (A8.64/C8.76; balanced seed 87 #5, yr 1.5, critic gen 0) |  |
| ALL | control | 6-20 | 40500 | 7.53 | 7.50 | 2952 (7.3%) | 2952 (7.3%) | 2836 (7.0%) | 3903 (9.6%) | 4138 (10.2%) | 13817 (34.1%) | 59% of 2700 | 0/0/4 | 7.19/8.36/9.61/10 | 10.00 "Dead Frequency" (A10/C10; experimenter seed 10 #18, yr 5.5, critic gen 0) |  |
| ALL | control | 21-50 | 81000 | 7.75 | 7.71 | 13789 (17.0%) | 13789 (17.0%) | 13330 (16.5%) | 16913 (20.9%) | 15777 (19.5%) | 33802 (41.7%) | 53% of 2700 | 0/0/14 | 6.95/8.68/9.9/10 | 10.00 "Dead Protocol" (A10/C10; balanced seed 6 #32, yr 9.8, critic gen 0) |  |
| ALL | control | all | 135000 | 7.53 | 7.50 | 16741 (12.4%) | 16741 (12.4%) | 16166 (12.0%) | 20816 (15.4%) | 19915 (14.8%) | 47857 (35.5%) | 52% of 2700 | 0/0/17 | 7.68/8.74/9.91/10 | 10.00 "Dead Protocol" (A10/C10; balanced seed 6 #32, yr 9.8, critic gen 0) |  |
| ALL | combo_B | 1-5 | 13500 | 6.21 | 6.26 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 238 (1.8%) | 100% of 2700 | 0/0/0 | 6.14/7.29/7.94/8.4 | 8.70 "Midnight Protocol" (A8.64/C8.76; balanced seed 87 #5, yr 1.5, critic gen 0) |  |
| ALL | combo_B | 6-20 | 40500 | 7.53 | 7.48 | 2839 (7.0%) | 2839 (7.0%) | 2733 (6.8%) | 3903 (9.6%) | 3905 (9.6%) | 13741 (33.9%) | 60% of 2700 | 0/0/3 | 7.19/8.36/9.59/10 | 10.00 "Dead Frequency" (A10/C10; experimenter seed 10 #18, yr 5.5, critic gen 0) |  |
| ALL | combo_B | 21-50 | 81000 | 7.67 | 7.30 | 7411 (9.2%) | 7411 (9.2%) | 7118 (8.8%) | 14064 (17.4%) | 7445 (9.2%) | 29642 (36.6%) | 53% of 2700 | 0/0/8 | 6.77/8.54/9.75/10 | 10.00 "Dead Protocol" (A10/C10; balanced seed 6 #32, yr 9.8, critic gen 1) |  |
| ALL | combo_B | all | 135000 | 7.48 | 7.25 | 10250 (7.6%) | 10250 (7.6%) | 9851 (7.3%) | 17967 (13.3%) | 11350 (8.4%) | 43621 (32.3%) | 53% of 2700 | 0/0/11 | 7.53/8.68/9.79/10 | 10.00 "Dead Protocol" (A10/C10; balanced seed 6 #32, yr 9.8, critic gen 1) |  |
| ALL | combo_D | 1-5 | 13500 | 6.21 | 6.26 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 238 (1.8%) | 100% of 2700 | 0/0/0 | 6.14/7.29/7.94/8.4 | 8.70 "Midnight Protocol" (A8.64/C8.76; balanced seed 87 #5, yr 1.5, critic gen 0) |  |
| ALL | combo_D | 6-20 | 40500 | 7.53 | 7.46 | 2725 (6.7%) | 2725 (6.7%) | 2621 (6.5%) | 3903 (9.6%) | 3758 (9.3%) | 13649 (33.7%) | 60% of 2700 | 0/0/3 | 7.17/8.34/9.57/10 | 10.00 "Dead Frequency" (A10/C10; experimenter seed 10 #18, yr 5.5, critic gen 0) |  |
| ALL | combo_D | 21-50 | 81000 | 7.69 | 7.00 | 4469 (5.5%) | 4469 (5.5%) | 4202 (5.2%) | 14253 (17.6%) | 3041 (3.8%) | 26674 (32.9%) | 55% of 2700 | 0/0/5 | 6.64/8.54/9.59/9.87 | 9.90 "Midnight Frequency" (A10/C9.8; balanced seed 280 #38, yr 11.7, critic gen 1) |  |
| ALL | combo_D | all | 135000 | 7.49 | 7.06 | 7194 (5.3%) | 7194 (5.3%) | 6823 (5.0%) | 18156 (13.4%) | 6799 (5.0%) | 40561 (30.1%) | 54% of 2700 | 0/0/8 | 7.41/8.68/9.69/10 | 10.00 "Dead Frequency" (A10/C10; experimenter seed 10 #18, yr 5.5, critic gen 0) |  |

### Great films by strategy (whole career)

| Strategy | Config | Window | Films (n) | Avg Aud | Avg Crit | HoF n (%) | Avg ≥9 n (%) | Avg >9 n (%) | Aud ≥9 n (%) | Crit ≥9 n (%) | 8+ n (%) | Careers with 0 HoF | HoF/career p10/p50/p90 | Best/career p10/p50/p90/p99 | Best combined movie | Prestige median |
|---|---|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---|---|---|---:|
| balanced | control | all | 15000 | 8.43 | 8.35 | 4409 (29.4%) | 4409 (29.4%) | 4249 (28.3%) | 5319 (35.5%) | 5061 (33.7%) | 10865 (72.4%) | 0% of 300 | 9/15/21 | 9.58/9.82/10/10 | 10.00 "Dead Protocol" (A10/C10; balanced seed 6 #32, yr 9.8, critic gen 0) | 11100 |
| quality-first | control | all | 15000 | 8.46 | 8.35 | 3922 (26.1%) | 3922 (26.1%) | 3760 (25.1%) | 5338 (35.6%) | 4728 (31.5%) | 11433 (76.2%) | 0% of 300 | 9/13/17 | 9.61/9.82/10/10 | 10.00 "Hollow Pulse" (A10/C10; quality-first seed 9 #22, yr 6.8, critic gen 0) | 10147.5 |
| franchise-builder | control | all | 15000 | 7.07 | 7.01 | 304 (2.0%) | 304 (2.0%) | 294 (2.0%) | 384 (2.6%) | 433 (2.9%) | 1425 (9.5%) | 81% of 300 | 0/0/4 | 7.66/8.23/9.47/9.88 | 10.00 "Silver Pulse 3" (A10/C10; franchise-builder seed 119 #37, yr 11.4, critic gen 0) | 4052.5 |
| repeat-farmer | control | all | 15000 | 6.85 | 6.83 | 15 (0.1%) | 15 (0.1%) | 15 (0.1%) | 28 (0.2%) | 40 (0.3%) | 602 (4.0%) | 99% of 300 | 0/0/0 | 7.62/8.03/8.54/8.97 | 9.58 "Iron Pulse" (A9.49/C9.67; repeat-farmer seed 38 #9, yr 2.8, critic gen 0) | 3250 |
| cheap-duds | control | all | 15000 | 6.27 | 6.41 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 34 (0.2%) | 100% of 300 | 0/0/0 | 7.43/7.7/8.01/8.22 | 8.26 "Wild Horizon" (A8.11/C8.41; cheap-duds seed 164 #37, yr 11.4, critic gen 0) | 150 |
| experimenter | control | all | 15000 | 8.33 | 8.30 | 3521 (23.5%) | 3521 (23.5%) | 3435 (22.9%) | 4269 (28.5%) | 4270 (28.5%) | 10784 (71.9%) | 0% of 300 | 7/11/17 | 9.43/9.7/10/10 | 10.00 "Dead Frequency" (A10/C10; experimenter seed 10 #18, yr 5.5, critic gen 0) | 9732.5 |
| self-funder | control | all | 15000 | 7.21 | 7.16 | 25 (0.2%) | 25 (0.2%) | 24 (0.2%) | 70 (0.5%) | 254 (1.7%) | 1692 (11.3%) | 92% of 300 | 0/0/0 | 8.29/8.57/8.95/9.13 | 9.16 "Red Run" (A9.08/C9.23; self-funder seed 148 #26, yr 8.0, critic gen 0) | 3212.5 |
| selective-self-funder | control | all | 15000 | 8.44 | 8.37 | 4545 (30.3%) | 4545 (30.3%) | 4389 (29.3%) | 5408 (36.0%) | 5129 (34.2%) | 10919 (72.8%) | 0% of 300 | 10/15/21 | 9.59/9.84/10/10 | 10.00 "Dead Legacy" (A10/C10; selective-self-funder seed 9 #23, yr 7.1, critic gen 0) | 11265 |
| famous-star | control | all | 15000 | 6.67 | 6.71 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 103 (0.7%) | 100% of 300 | 0/0/0 | 7.61/7.9/8.21/8.37 | 8.41 "Midnight Legacy" (A8.29/C8.54; famous-star seed 186 #41, yr 12.6, critic gen 0) | 380 |
| balanced | combo_B | all | 15000 | 8.39 | 8.08 | 2804 (18.7%) | 2804 (18.7%) | 2702 (18.0%) | 4584 (30.6%) | 2923 (19.5%) | 10178 (67.8%) | 0% of 300 | 5/9/15 | 9.41/9.67/10/10 | 10.00 "Dead Protocol" (A10/C10; balanced seed 6 #32, yr 9.8, critic gen 1) | 9665 |
| quality-first | combo_B | all | 15000 | 8.40 | 8.06 | 2352 (15.7%) | 2352 (15.7%) | 2267 (15.1%) | 4547 (30.3%) | 2559 (17.1%) | 10452 (69.7%) | 0% of 300 | 5/8/11 | 9.42/9.66/10/10 | 10.00 "Hollow Pulse" (A10/C10; quality-first seed 9 #22, yr 6.8, critic gen 1) | 8622.5 |
| franchise-builder | combo_B | all | 15000 | 7.09 | 6.83 | 234 (1.6%) | 234 (1.6%) | 227 (1.5%) | 503 (3.4%) | 264 (1.8%) | 1531 (10.2%) | 79% of 300 | 0/0/3 | 7.66/8.32/9.34/9.81 | 10.00 "Broken Legacy" (A10/C10; franchise-builder seed 184 #38, yr 11.7, critic gen 1) | 4300 |
| repeat-farmer | combo_B | all | 15000 | 6.80 | 6.61 | 15 (0.1%) | 15 (0.1%) | 15 (0.1%) | 28 (0.2%) | 40 (0.3%) | 600 (4.0%) | 99% of 300 | 0/0/0 | 7.62/8.03/8.54/8.97 | 9.58 "Iron Pulse" (A9.49/C9.67; repeat-farmer seed 38 #9, yr 2.8, critic gen 0) | 3250 |
| cheap-duds | combo_B | all | 15000 | 6.22 | 6.19 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 1 (0.0%) | 100% of 300 | 0/0/0 | 7.24/7.49/7.8/7.93 | 8.02 "Iron Horizon" (A8.03/C8; cheap-duds seed 66 #29, yr 8.9, critic gen 1) | 150 |
| experimenter | combo_B | all | 15000 | 8.27 | 8.01 | 1934 (12.9%) | 1934 (12.9%) | 1851 (12.3%) | 3563 (23.8%) | 2595 (17.3%) | 9769 (65.1%) | 0% of 300 | 3/6/11 | 9.27/9.58/9.94/10 | 10.00 "Dead Frequency" (A10/C10; experimenter seed 10 #18, yr 5.5, critic gen 0) | 7997.5 |
| self-funder | combo_B | all | 15000 | 7.15 | 6.90 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 66 (0.4%) | 1 (0.0%) | 845 (5.6%) | 100% of 300 | 0/0/0 | 8.05/8.34/8.7/8.95 | 8.97 "Red Run" (A9.08/C8.86; self-funder seed 148 #26, yr 8.0, critic gen 1) | 3005 |
| selective-self-funder | combo_B | all | 15000 | 8.39 | 8.10 | 2911 (19.4%) | 2911 (19.4%) | 2789 (18.6%) | 4676 (31.2%) | 2968 (19.8%) | 10220 (68.1%) | 0% of 300 | 5/9/14 | 9.41/9.68/10/10 | 10.00 "Dead Legacy" (A10/C10; selective-self-funder seed 9 #23, yr 7.1, critic gen 1) | 9912.5 |
| famous-star | combo_B | all | 15000 | 6.63 | 6.47 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 25 (0.2%) | 100% of 300 | 0/0/0 | 7.4/7.64/7.97/8.12 | 8.20 "Broken Pulse" (A8.25/C8.14; famous-star seed 227 #31, yr 9.5, critic gen 1) | 300 |
| balanced | combo_D | all | 15000 | 8.40 | 7.88 | 1994 (13.3%) | 1994 (13.3%) | 1903 (12.7%) | 4642 (30.9%) | 1734 (11.6%) | 9553 (63.7%) | 0% of 300 | 3/6/11 | 9.25/9.53/9.85/10 | 10.00 "Hollow Code" (A10/C10; balanced seed 58 #17, yr 5.2, critic gen 0) | 8702.5 |
| quality-first | combo_D | all | 15000 | 8.40 | 7.85 | 1639 (10.9%) | 1639 (10.9%) | 1559 (10.4%) | 4544 (30.3%) | 1480 (9.9%) | 9613 (64.1%) | 0% of 300 | 3/5/8 | 9.27/9.5/9.82/10 | 10.00 "Last Signal" (A10/C10; quality-first seed 53 #18, yr 5.5, critic gen 0) | 7602.5 |
| franchise-builder | combo_D | all | 15000 | 7.16 | 6.69 | 141 (0.9%) | 141 (0.9%) | 128 (0.8%) | 583 (3.9%) | 169 (1.1%) | 1559 (10.4%) | 81% of 300 | 0/0/2 | 7.68/8.45/9.22/9.62 | 9.70 "Broken Echo" (A10/C9.39; franchise-builder seed 52 #46, yr 14.2, critic gen 2) | 4675 |
| repeat-farmer | combo_D | all | 15000 | 6.80 | 6.44 | 15 (0.1%) | 15 (0.1%) | 15 (0.1%) | 28 (0.2%) | 40 (0.3%) | 597 (4.0%) | 99% of 300 | 0/0/0 | 7.62/8.03/8.54/8.97 | 9.58 "Iron Pulse" (A9.49/C9.67; repeat-farmer seed 38 #9, yr 2.8, critic gen 0) | 3250 |
| cheap-duds | combo_D | all | 15000 | 6.22 | 6.02 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 100% of 300 | 0/0/0 | 7.1/7.36/7.65/7.79 | 7.93 "Red Echo" (A7.77/C8.09; cheap-duds seed 280 #18, yr 5.5, critic gen 0) | 150 |
| experimenter | combo_D | all | 15000 | 8.27 | 7.79 | 1350 (9.0%) | 1350 (9.0%) | 1274 (8.5%) | 3564 (23.8%) | 1549 (10.3%) | 9069 (60.5%) | 1% of 300 | 2/4/8 | 9.13/9.41/9.74/10 | 10.00 "Dead Frequency" (A10/C10; experimenter seed 10 #18, yr 5.5, critic gen 0) | 7130 |
| self-funder | combo_D | all | 15000 | 7.15 | 6.72 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 65 (0.4%) | 1 (0.0%) | 508 (3.4%) | 100% of 300 | 0/0/0 | 7.93/8.2/8.57/8.77 | 8.83 "Midnight Legacy" (A8.74/C8.92; self-funder seed 74 #19, yr 5.8, critic gen 0) | 2950 |
| selective-self-funder | combo_D | all | 15000 | 8.40 | 7.89 | 2055 (13.7%) | 2055 (13.7%) | 1944 (13.0%) | 4730 (31.5%) | 1826 (12.2%) | 9660 (64.4%) | 1% of 300 | 3/6/11 | 9.29/9.54/9.84/10 | 10.00 "Last Rising" (A10/C10; selective-self-funder seed 38 #17, yr 5.2, critic gen 0) | 8785 |
| famous-star | combo_D | all | 15000 | 6.63 | 6.30 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 2 (0.0%) | 100% of 300 | 0/0/0 | 7.29/7.52/7.84/7.98 | 8.11 "Last Code" (A8/C8.21; famous-star seed 126 #19, yr 5.8, critic gen 0) | 300 |

### Greatest single films (all strategies, whole sample; reproducible from seed + config hash)

| Variant | Best combined | Best Audience | Best Critic | Year band with most HoF |
|---|---|---|---|---|
| control | 10.00 "Dead Protocol" (A10/C10; balanced seed 6 #32, yr 9.8, critic gen 0) | 10.00 "Dead Protocol" (A10/C10; balanced seed 6 #32, yr 9.8, critic gen 0) | 10.00 "Dead Protocol" (A10/C10; balanced seed 6 #32, yr 9.8, critic gen 0) | y10-15: 17.3% of 43200 |
| combo_B | 10.00 "Dead Protocol" (A10/C10; balanced seed 6 #32, yr 9.8, critic gen 1) | 10.00 "Dead Protocol" (A10/C10; balanced seed 6 #32, yr 9.8, critic gen 1) | 10.00 "Dead Protocol" (A10/C10; balanced seed 6 #32, yr 9.8, critic gen 1) | y5-10: 12.1% of 43200 |
| combo_D | 10.00 "Dead Frequency" (A10/C10; experimenter seed 10 #18, yr 5.5, critic gen 0) | 10.00 "Dead Frequency" (A10/C10; experimenter seed 10 #18, yr 5.5, critic gen 0) | 10.00 "Dead Frequency" (A10/C10; experimenter seed 10 #18, yr 5.5, critic gen 0) | y5-10: 8.8% of 43200 |

### Great films by in-game year (all strategies pooled)

| Strategy | Config | Window | Films (n) | Avg Aud | Avg Crit | HoF n (%) | Avg ≥9 n (%) | Avg >9 n (%) | Aud ≥9 n (%) | Crit ≥9 n (%) | 8+ n (%) | Careers with 0 HoF | HoF/career p10/p50/p90 | Best/career p10/p50/p90/p99 | Best combined movie | Prestige median |
|---|---|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---|---|---|---:|
| ALL | control | y0-5 | 43200 | 7.08 | 7.08 | 1565 (3.6%) | 1565 (3.6%) | 1509 (3.5%) | 2362 (5.5%) | 2379 (5.5%) | 9814 (22.7%) | 70% of 2700 | 0/0/2 | 7/8.3/9.43/9.84 | 10.00 "Silver Edge" (A10/C10; selective-self-funder seed 46 #12, yr 3.7, critic gen 0) |  |
| ALL | control | y5-10 | 43200 | 7.72 | 7.68 | 6939 (16.1%) | 6939 (16.1%) | 6791 (15.7%) | 8359 (19.4%) | 8236 (19.1%) | 17745 (41.1%) | 53% of 2700 | 0/0/7 | 6.92/8.54/9.81/10 | 10.00 "Dead Protocol" (A10/C10; balanced seed 6 #32, yr 9.8, critic gen 0) |  |
| ALL | control | y10-15 | 43200 | 7.76 | 7.72 | 7451 (17.3%) | 7451 (17.3%) | 7102 (16.4%) | 9058 (21.0%) | 8399 (19.4%) | 18122 (42.0%) | 54% of 2700 | 0/0/8 | 6.94/8.54/9.84/10 | 10.00 "Iron Rising" (A10/C10; selective-self-funder seed 10 #39, yr 12.0, critic gen 0) |  |
| ALL | control | y15-20 | 5400 | 7.69 | 7.64 | 786 (14.6%) | 786 (14.6%) | 764 (14.2%) | 1037 (19.2%) | 901 (16.7%) | 2176 (40.3%) | 78% of 2700 | 0/0/1 | 6.65/7.74/9.41/9.91 | 10.00 "Broken Night" (A10/C10; balanced seed 23 #50, yr 15.4, critic gen 0) |  |
| ALL | combo_B | y0-5 | 43200 | 7.08 | 7.08 | 1565 (3.6%) | 1565 (3.6%) | 1509 (3.5%) | 2362 (5.5%) | 2379 (5.5%) | 9814 (22.7%) | 70% of 2700 | 0/0/2 | 7/8.3/9.43/9.84 | 10.00 "Silver Edge" (A10/C10; selective-self-funder seed 46 #12, yr 3.7, critic gen 0) |  |
| ALL | combo_B | y5-10 | 43200 | 7.72 | 7.44 | 5227 (12.1%) | 5227 (12.1%) | 5087 (11.8%) | 8395 (19.4%) | 5207 (12.1%) | 16501 (38.2%) | 55% of 2700 | 0/0/6 | 6.85/8.43/9.73/10 | 10.00 "Dead Protocol" (A10/C10; balanced seed 6 #32, yr 9.8, critic gen 1) |  |
| ALL | combo_B | y10-15 | 43200 | 7.63 | 7.25 | 3149 (7.3%) | 3149 (7.3%) | 2961 (6.8%) | 6395 (14.8%) | 3464 (8.0%) | 15528 (35.9%) | 60% of 2700 | 0/0/4 | 6.71/8.32/9.61/9.99 | 10.00 "Dead Protocol 2" (A10/C10; balanced seed 6 #37, yr 11.4, critic gen 1) |  |
| ALL | combo_B | y15-20 | 5400 | 7.59 | 7.07 | 309 (5.7%) | 309 (5.7%) | 294 (5.4%) | 815 (15.1%) | 300 (5.6%) | 1778 (32.9%) | 90% of 2700 | 0/0/1 | 6.32/7.47/9/9.53 | 9.90 "Red Night" (A10/C9.8; balanced seed 87 #49, yr 15.1, critic gen 2) |  |
| ALL | combo_D | y0-5 | 43200 | 7.08 | 7.08 | 1565 (3.6%) | 1565 (3.6%) | 1509 (3.5%) | 2362 (5.5%) | 2379 (5.5%) | 9814 (22.7%) | 70% of 2700 | 0/0/2 | 7/8.3/9.43/9.84 | 10.00 "Silver Edge" (A10/C10; selective-self-funder seed 46 #12, yr 3.7, critic gen 0) |  |
| ALL | combo_D | y5-10 | 43200 | 7.73 | 7.20 | 3802 (8.8%) | 3802 (8.8%) | 3607 (8.3%) | 8446 (19.6%) | 2931 (6.8%) | 15375 (35.6%) | 56% of 2700 | 0/0/4 | 6.81/8.34/9.62/9.87 | 10.00 "Dead Frequency" (A10/C10; experimenter seed 10 #18, yr 5.5, critic gen 0) |  |
| ALL | combo_D | y10-15 | 43200 | 7.65 | 6.95 | 1646 (3.8%) | 1646 (3.8%) | 1539 (3.6%) | 6519 (15.1%) | 1428 (3.3%) | 13844 (32.0%) | 70% of 2700 | 0/0/2 | 6.58/8.21/9.41/9.7 | 9.90 "Midnight Frequency" (A10/C9.8; balanced seed 280 #38, yr 11.7, critic gen 1) |  |
| ALL | combo_D | y15-20 | 5400 | 7.60 | 6.78 | 181 (3.4%) | 181 (3.4%) | 168 (3.1%) | 829 (15.3%) | 61 (1.1%) | 1528 (28.3%) | 94% of 2700 | 0/0/0 | 6.19/7.37/8.82/9.35 | 9.69 "Red Shadow" (A10/C9.38; quality-first seed 238 #49, yr 15.1, critic gen 2) |  |

### Prestige progression (Prestige gates growth; cash sustains operations)

`cash-rich but Prestige-locked` = careers that at some week had the cash for the next upgrade but not the Prestige. `bought below gate` must be 0 (engine rule).

| Strategy | Config | Cash median | Prestige median | Prestige/yr | Careers with negative-cash weeks | →6 gate met (Prestige ≥ 200) · median film # | →6 bought · median film # | →6 cash-rich but Prestige-locked | →6 bought below gate | →8 gate met (Prestige ≥ 1000) · median film # | →8 bought · median film # | →8 cash-rich but Prestige-locked | →8 bought below gate |
|---|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|
| balanced | control | $12.40M | 11100 | 708.4 | 71% | 100% · #6 | 100% · #7 | 100% | 0 | 100% · #11 | 100% · #11 | 100% | 0 |
| quality-first | control | $12.75M | 10147.5 | 647.6 | 57% | 100% · #7 | 100% · #7 | 100% | 0 | 100% · #12 | 100% · #12 | 100% | 0 |
| franchise-builder | control | $11.06M | 4052.5 | 258.6 | 71% | 100% · #6 | 100% · #7 | 100% | 0 | 100% · #10 | 100% · #10 | 100% | 0 |
| repeat-farmer | control | $13.45M | 3250 | 207.4 | 63% | 100% · #6 | 100% · #7 | 100% | 0 | 100% · #11 | 100% · #11 | 100% | 0 |
| cheap-duds | control | $7.62M | 150 | 9.6 | 4% | 45% · #40 | 0% · #— | 100% | 0 | 0% · #— | 0% · #— | 0% | 0 |
| experimenter | control | $13.51M | 9732.5 | 621.1 | 56% | 100% · #8 | 100% · #8 | 100% | 0 | 100% · #14 | 100% · #14 | 100% | 0 |
| self-funder | control | $0.31M | 3212.5 | 205 | 100% | 100% · #18 | 0% · #— | 68% | 0 | 100% · #27 | 0% · #— | 0% | 0 |
| selective-self-funder | control | $12.53M | 11265 | 718.9 | 67% | 100% · #6.5 | 100% · #7 | 100% | 0 | 100% · #10 | 100% · #11 | 100% | 0 |
| famous-star | control | $11.59M | 380 | 24.3 | 100% | 92% · #33 | 0% · #— | 100% | 0 | 1% · #47.5 | 0% · #— | 0% | 0 |
| balanced | combo_B | $12.37M | 9665 | 616.8 | 71% | 100% · #6 | 100% · #7 | 100% | 0 | 100% · #11 | 100% · #11 | 100% | 0 |
| quality-first | combo_B | $12.74M | 8622.5 | 550.3 | 57% | 100% · #7 | 100% · #7 | 100% | 0 | 100% · #12 | 100% · #12 | 100% | 0 |
| franchise-builder | combo_B | $11.13M | 4300 | 274.4 | 71% | 100% · #6 | 100% · #7 | 100% | 0 | 100% · #10 | 100% · #10 | 100% | 0 |
| repeat-farmer | combo_B | $12.86M | 3250 | 207.4 | 63% | 100% · #6 | 100% · #7 | 100% | 0 | 100% · #11 | 100% · #11 | 100% | 0 |
| cheap-duds | combo_B | $7.15M | 150 | 9.6 | 4% | 30% · #38 | 0% · #— | 100% | 0 | 0% · #— | 0% · #— | 0% | 0 |
| experimenter | combo_B | $13.50M | 7997.5 | 510.4 | 56% | 100% · #8 | 100% · #8 | 100% | 0 | 100% · #14 | 100% · #14 | 100% | 0 |
| self-funder | combo_B | $0.30M | 3005 | 191.9 | 100% | 100% · #18 | 0% · #— | 68% | 0 | 100% · #28 | 0% · #— | 0% | 0 |
| selective-self-funder | combo_B | $12.55M | 9912.5 | 632.6 | 67% | 100% · #6.5 | 100% · #7 | 100% | 0 | 100% · #10 | 100% · #11 | 100% | 0 |
| famous-star | combo_B | $11.42M | 300 | 19.1 | 100% | 76% · #31 | 0% · #— | 100% | 0 | 0% · #— | 0% · #— | 0% | 0 |
| balanced | combo_D | $12.40M | 8702.5 | 555.4 | 71% | 100% · #6 | 100% · #7 | 100% | 0 | 100% · #11 | 100% · #11 | 100% | 0 |
| quality-first | combo_D | $12.74M | 7602.5 | 485.2 | 57% | 100% · #7 | 100% · #7 | 100% | 0 | 100% · #12 | 100% · #12 | 100% | 0 |
| franchise-builder | combo_D | $11.12M | 4675 | 298.3 | 71% | 100% · #6 | 100% · #7 | 100% | 0 | 100% · #10 | 100% · #10 | 100% | 0 |
| repeat-farmer | combo_D | $12.59M | 3250 | 207.4 | 63% | 100% · #6 | 100% · #7 | 100% | 0 | 100% · #11 | 100% · #11 | 100% | 0 |
| cheap-duds | combo_D | $6.96M | 150 | 9.6 | 4% | 29% · #38 | 0% · #— | 100% | 0 | 0% · #— | 0% · #— | 0% | 0 |
| experimenter | combo_D | $13.50M | 7130 | 455 | 56% | 100% · #8 | 100% · #8 | 100% | 0 | 100% · #14 | 100% · #14 | 100% | 0 |
| self-funder | combo_D | $0.30M | 2950 | 188.3 | 100% | 100% · #18 | 0% · #— | 68% | 0 | 100% · #28 | 0% · #— | 0% | 0 |
| selective-self-funder | combo_D | $12.52M | 8785 | 560.6 | 67% | 100% · #6.5 | 100% · #7 | 100% | 0 | 100% · #10 | 100% · #11 | 100% | 0 |
| famous-star | combo_D | $11.41M | 300 | 19.1 | 100% | 76% · #31 | 0% · #— | 100% | 0 | 0% · #— | 0% · #— | 0% | 0 |

### Prestige milestones awarded per career (mean)

| Strategy | Variant | audience_7_5 | critic_8_5 | first_hall_of_fame | hall_of_fame | ip_gross_1m | ip_gross_5m | ip_viewers_500k | meters_all_70 | careers > 400 Prestige/yr (OUTDATED threshold) |
|---|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|
| balanced | control | 40.95 | 24.16 | 1 | 14.7 | 2.63 | 1.06 | 2.63 | 44.6 | 100% |
| balanced | combo_B | 41.05 | 19.61 | 1 | 9.35 | 2.75 | 1.08 | 2.75 | 44.6 | 100% |
| balanced | combo_D | 41.33 | 13.85 | 1 | 6.65 | 2.82 | 1.11 | 2.82 | 44.6 | 100% |
| quality-first | control | 41.96 | 23.81 | 1 | 13.07 | 0 | 0 | 0 | 44.61 | 100% |
| quality-first | combo_B | 41.98 | 18.56 | 1 | 7.84 | 0 | 0 | 0 | 44.61 | 100% |
| quality-first | combo_D | 41.97 | 12.59 | 1 | 5.46 | 0 | 0 | 0 | 44.61 | 98% |
| franchise-builder | control | 11.35 | 2.8 | 0.19 | 1.01 | 2.33 | 2.26 | 2.33 | 44.65 | 14% |
| franchise-builder | combo_B | 12.59 | 2.27 | 0.21 | 0.78 | 2.6 | 2.37 | 2.6 | 44.65 | 12% |
| franchise-builder | combo_D | 13.92 | 1.79 | 0.19 | 0.47 | 2.87 | 2.52 | 2.87 | 44.65 | 7% |
| repeat-farmer | control | 6.35 | 0.91 | 0.01 | 0.05 | 1 | 1 | 1 | 44.69 | 1% |
| repeat-farmer | combo_B | 6.35 | 0.9 | 0.01 | 0.05 | 1 | 1 | 1 | 44.69 | 0% |
| repeat-farmer | combo_D | 6.35 | 0.89 | 0.01 | 0.05 | 1 | 1 | 1 | 44.69 | 0% |
| cheap-duds | control | 2.47 | 0.01 | 0 | 0 | 0 | 0 | 0 | 0 | 0% |
| cheap-duds | combo_B | 1.96 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0% |
| cheap-duds | combo_D | 1.92 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0% |
| experimenter | control | 40.77 | 25.66 | 1 | 11.74 | 0 | 0 | 0 | 42.02 | 100% |
| experimenter | combo_B | 40.23 | 18.2 | 1 | 6.45 | 0 | 0 | 0 | 42.02 | 97% |
| experimenter | combo_D | 40.22 | 12.33 | 0.99 | 4.5 | 0 | 0 | 0 | 42.02 | 88% |
| self-funder | control | 20.4 | 2.5 | 0.08 | 0.08 | 0 | 0 | 0 | 28.88 | 0% |
| self-funder | combo_B | 19.25 | 1.15 | 0 | 0 | 0 | 0 | 0 | 28.86 | 0% |
| self-funder | combo_D | 19.23 | 0.32 | 0 | 0 | 0 | 0 | 0 | 28.85 | 0% |
| selective-self-funder | control | 41.11 | 24.69 | 1 | 15.15 | 2.65 | 1.11 | 2.65 | 44.56 | 100% |
| selective-self-funder | combo_B | 41.19 | 20.1 | 1 | 9.7 | 2.73 | 1.12 | 2.73 | 44.56 | 100% |
| selective-self-funder | combo_D | 41.43 | 14.17 | 0.99 | 6.85 | 2.82 | 1.12 | 2.82 | 44.56 | 100% |
| famous-star | control | 5.67 | 0.08 | 0 | 0 | 0 | 0 | 0 | 0 | 0% |
| famous-star | combo_B | 4.12 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0% |
| famous-star | combo_D | 4.12 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0% |

### Diagnostic flags fired

| Variant | Fired |
|---|---|
| control | EARLY_SOFTLOCK, PRESTIGE_TOO_FAST, QUALITY_INFLATION, DEAD_STRATEGY |
| combo_B | EARLY_SOFTLOCK, PRESTIGE_TOO_FAST, QUALITY_INFLATION, DEAD_STRATEGY |
| combo_D | EARLY_SOFTLOCK, PRESTIGE_TOO_FAST, QUALITY_INFLATION, DEAD_STRATEGY |
