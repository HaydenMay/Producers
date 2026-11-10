# Experiment: G26_followup

> **Simulation assumptions, not design locks.** Paired seeds: every variant runs the same seeds and strategies; only the config overrides differ.

Gate 2.6 follow-up: the main matrix showed Hall of Fame peaking in years 5-15 (critic generation 1). combo_D front-loads the same 12% critic ceiling (first new generation +8%, then capped at 12%) to target that peak without being harsher late than combo_B. control and combo_B are rerun in a separate process as a reproducibility check (must match the main run exactly). TEST ASSUMPTIONS.

- Seeds 1–300 (300) · strategies: balanced, quality-first, franchise-builder, repeat-farmer, cheap-duds, experimenter, self-funder, selective-self-funder, famous-star · reference variant: **control**
- Ruleset v9.61-movie-kernel-0.1 · measured runtime 682064 ms for 8100 careers

| Variant | Config hash | Note |
|---|---|---|
| control | fc3c4828 | Gate 2.5 candidate, current expectation rules (era bar 0.04/yr, cap 1.8; no generations) `{}` |
| combo_B | 4148b948 | critic_moderate + audience_moderate `{"expectations":{"critics":{"enabled":true,"generationYears":6,"toughnessPerGeneration":0.04,"maxToughness":0.12},"audience":{"enabled":true,"eraYears":10,"toughnessPerEra":0.02,"maxToughness":0.06}}}` |
| combo_D | 7bc3e03a | critics every 6 yrs, +8% first generation, max 12% (front-loaded) + audience_moderate `{"expectations":{"critics":{"enabled":true,"generationYears":6,"toughnessPerGeneration":0.08,"maxToughness":0.12},"audience":{"enabled":true,"eraYears":10,"toughnessPerEra":0.02,"maxToughness":0.06}}}` |

## 100-production careers

Invariant violations across all variants: **0**.

### Medians by strategy

| Strategy | Variant | endCash | prestige | prestigePerRelease | meanAudience | meanCritic | share8plus | share9plus | shareLate8plus | hofShare | maxStaffEnd | staffCount | meanStaffStat | upgrades | firstUpgradeWeek | years | maxIpFans | negativeCashWeeks |
|---|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|
| balanced | control | $27089K | 21092.50 | 210.90 | 8.48 | 8.35 | 75% | 24% | 75% | 24% | 8 | 8 | 100 | 2 | 112 | 31.06 | 127429.50 | 2 |
| balanced | combo_B | $27010K | 16632.50 | 166.30 | 8.32 | 7.78 | 54% | 11% | 33% | 11% | 8 | 8 | 100 | 2 | 112 | 31.06 | 94909 | 2 |
| balanced | combo_D | $26967K | 15475 | 154.75 | 8.33 | 7.65 | 51% | 8% | 33% | 8% | 8 | 8 | 100 | 2 | 112 | 31.06 | 90609 | 2 |
| quality-first | control | $27734K | 17552.50 | 175.55 | 8.34 | 8.21 | 70% | 17% | 57% | 17% | 8 | 8 | 100 | 2 | 112 | 31.06 | 19011 | 1 |
| quality-first | combo_B | $27433K | 14075 | 140.75 | 8.16 | 7.61 | 45% | 9% | 10% | 9% | 8 | 8 | 100 | 2 | 112 | 31.06 | 14814 | 1 |
| quality-first | combo_D | $27449K | 12942.50 | 129.40 | 8.16 | 7.48 | 41% | 6% | 10% | 6% | 8 | 8 | 100 | 2 | 112 | 31.06 | 14759.50 | 1 |
| franchise-builder | control | $24913K | 6560 | 65.60 | 6.95 | 6.91 | 4% | 0% | 0% | 0% | 8 | 8 | 100 | 2 | 112 | 31.06 | 175419 | 2 |
| franchise-builder | combo_B | $24415K | 9072.50 | 90.70 | 7.20 | 6.72 | 10% | 0% | 8% | 0% | 8 | 8 | 100 | 2 | 112 | 31.06 | 133582 | 2 |
| franchise-builder | combo_D | $24322K | 9445 | 94.40 | 7.22 | 6.63 | 11% | 0% | 8% | 0% | 8 | 8 | 100 | 2 | 112 | 31.06 | 133305.50 | 2 |
| repeat-farmer | control | $32093K | 5750 | 57.50 | 6.82 | 6.77 | 1% | 0% | 0% | 0% | 8 | 8 | 100 | 2 | 112 | 31.06 | 296034.50 | 2 |
| repeat-farmer | combo_B | $28472K | 5750 | 57.50 | 6.67 | 6.27 | 1% | 0% | 0% | 0% | 8 | 8 | 100 | 2 | 112 | 31.06 | 193629 | 2 |
| repeat-farmer | combo_D | $27655K | 5750 | 57.50 | 6.67 | 6.17 | 1% | 0% | 0% | 0% | 8 | 8 | 100 | 2 | 112 | 31.06 | 187252 | 2 |
| cheap-duds | control | $16960K | 300 | 3 | 6.21 | 6.34 | 0% | 0% | 0% | 0% | 4 | 2 | 94.80 | 0 | — | 31.06 | 6943.50 | 0 |
| cheap-duds | combo_B | $14876K | 225 | 2.30 | 6.08 | 5.86 | 0% | 0% | 0% | 0% | 4 | 2 | 94.80 | 0 | — | 31.02 | 4308 | 0 |
| cheap-duds | combo_D | $14619K | 225 | 2.30 | 6.08 | 5.76 | 0% | 0% | 0% | 0% | 4 | 2 | 94.80 | 0 | — | 31.02 | 4193.50 | 0 |
| experimenter | control | $30032K | 16167.50 | 161.70 | 8.17 | 8.12 | 60% | 12% | 40% | 12% | 8 | 8 | 93.80 | 2 | 128 | 31.06 | 18597 | 1 |
| experimenter | combo_B | $29594K | 12820 | 128.20 | 8.01 | 7.53 | 37% | 6% | 0% | 6% | 8 | 8 | 93.80 | 2 | 128 | 31.06 | 14315 | 1 |
| experimenter | combo_D | $29613K | 11865 | 118.65 | 8.01 | 7.39 | 34% | 4% | 0% | 4% | 8 | 8 | 93.80 | 2 | 128 | 31.06 | 14339 | 1 |
| self-funder | control | $264K | 3980 | 39.80 | 6.94 | 6.89 | 6% | 0% | 0% | 0% | 4 | 2 | 100 | 0 | — | 31.06 | 3815.50 | 12 |
| self-funder | combo_B | $248K | 3622.50 | 36.25 | 6.79 | 6.38 | 3% | 0% | 0% | 0% | 4 | 2 | 100 | 0 | — | 31.02 | 2768.50 | 12 |
| self-funder | combo_D | $249K | 3517.50 | 35.20 | 6.79 | 6.27 | 1% | 0% | 0% | 0% | 4 | 2 | 100 | 0 | — | 31.02 | 2715.50 | 12 |
| selective-self-funder | control | $27324K | 21107.50 | 211.10 | 8.45 | 8.37 | 75% | 24% | 73% | 24% | 8 | 8 | 100 | 2 | 112 | 31.06 | 125947.50 | 2 |
| selective-self-funder | combo_B | $27214K | 16687.50 | 166.85 | 8.31 | 7.78 | 54% | 11% | 30% | 11% | 8 | 8 | 100 | 2 | 112 | 31.06 | 93589.50 | 2 |
| selective-self-funder | combo_D | $27220K | 15437.50 | 154.40 | 8.32 | 7.64 | 51% | 8% | 30% | 8% | 8 | 8 | 100 | 2 | 112 | 31.06 | 90005.50 | 2 |
| famous-star | control | $26584K | 525 | 5.30 | 6.55 | 6.58 | 0% | 0% | 0% | 0% | 4 | 2 | 94.80 | 0 | — | 31.06 | 8707 | 7 |
| famous-star | combo_B | $24697K | 375 | 3.80 | 6.41 | 6.10 | 0% | 0% | 0% | 0% | 4 | 2 | 94.80 | 0 | — | 31.06 | 5231 | 7 |
| famous-star | combo_D | $24669K | 375 | 3.80 | 6.41 | 5.99 | 0% | 0% | 0% | 0% | 4 | 2 | 94.80 | 0 | — | 31.06 | 5231 | 7 |

### Paired deltas vs **control** (median of per-seed differences; share of seeds where the variant is higher)

| Strategy | Variant | Δ endCash | Δ prestige | Δ share8plus | Δ meanAudience |
|---|---|---:|---:|---:|---:|
| balanced | combo_B | $-125K (34%) | -4465 (0%) | -21% (0%) | -0.16 (2%) |
| balanced | combo_D | $-109K (36%) | -5617.50 (0%) | -24% (0%) | -0.15 (3%) |
| quality-first | combo_B | $-367K (2%) | -3395 (0%) | -24% (0%) | -0.17 (0%) |
| quality-first | combo_D | $-360K (3%) | -4565 (0%) | -28% (0%) | -0.17 (0%) |
| franchise-builder | combo_B | $-521K (25%) | 885 (56%) | 0% (49%) | 0.04 (54%) |
| franchise-builder | combo_D | $-575K (27%) | 930 (56%) | 1% (50%) | 0.10 (56%) |
| repeat-farmer | combo_B | $-3665K (0%) | 0 (0%) | 0% (0%) | -0.14 (0%) |
| repeat-farmer | combo_D | $-4411K (0%) | 0 (0%) | 0% (0%) | -0.14 (0%) |
| cheap-duds | combo_B | $-2109K (1%) | -150 (3%) | 0% (0%) | -0.13 (4%) |
| cheap-duds | combo_D | $-2423K (2%) | -150 (3%) | 0% (0%) | -0.13 (5%) |
| experimenter | combo_B | $-416K (0%) | -3542.50 (0%) | -23% (0%) | -0.17 (0%) |
| experimenter | combo_D | $-412K (1%) | -4420 (0%) | -26% (0%) | -0.17 (0%) |
| self-funder | combo_B | $-32K (34%) | -385 (0%) | -3% (0%) | -0.14 (0%) |
| self-funder | combo_D | $-31K (35%) | -460 (0%) | -4% (0%) | -0.15 (0%) |
| selective-self-funder | combo_B | $-109K (31%) | -4287.50 (0%) | -21% (0%) | -0.15 (1%) |
| selective-self-funder | combo_D | $-109K (37%) | -5550 (0%) | -24% (0%) | -0.14 (3%) |
| famous-star | combo_B | $-1415K (0%) | -150 (0%) | 0% (0%) | -0.14 (0%) |
| famous-star | combo_D | $-1443K (0%) | -150 (0%) | 0% (0%) | -0.14 (0%) |

### Mean review score (avg of Audience+Critic) by production index

| Strategy | Variant | #1 | #5 | #10 | #20 | #30 | #50 | #75 | #100 |
|---|---|---:|---:|---:|---:|---:|---:|---:|---:|
| balanced | control | 5.62 | 7.39 | 8.27 | 8.67 | 8.73 | 8.75 | 8.51 | 8.06 |
| balanced | combo_B | 5.62 | 7.39 | 8.27 | 8.50 | 8.58 | 8.41 | 7.84 | 7.40 |
| balanced | combo_D | 5.62 | 7.39 | 8.27 | 8.33 | 8.41 | 8.26 | 7.87 | 7.46 |
| quality-first | control | 5.59 | 7.34 | 8.20 | 8.69 | 8.78 | 8.72 | 8.16 | 7.68 |
| quality-first | combo_B | 5.59 | 7.34 | 8.20 | 8.53 | 8.62 | 8.30 | 7.50 | 6.99 |
| quality-first | combo_D | 5.59 | 7.34 | 8.20 | 8.35 | 8.44 | 8.13 | 7.50 | 6.99 |
| franchise-builder | control | 5.60 | 7.37 | 7.72 | 7.04 | 6.85 | 6.94 | 6.84 | 6.77 |
| franchise-builder | combo_B | 5.60 | 7.37 | 7.72 | 6.90 | 6.88 | 6.80 | 6.84 | 6.80 |
| franchise-builder | combo_D | 5.60 | 7.37 | 7.72 | 6.76 | 6.88 | 6.83 | 6.81 | 6.76 |
| repeat-farmer | control | 5.61 | 7.39 | 7.77 | 6.60 | 6.68 | 6.74 | 6.70 | 6.71 |
| repeat-farmer | combo_B | 5.61 | 7.39 | 7.77 | 6.47 | 6.54 | 6.40 | 6.16 | 6.11 |
| repeat-farmer | combo_D | 5.61 | 7.39 | 7.77 | 6.34 | 6.41 | 6.27 | 6.16 | 6.11 |
| cheap-duds | control | 5.47 | 5.81 | 6.12 | 6.41 | 6.57 | 6.49 | 6.21 | 6.04 |
| cheap-duds | combo_B | 5.47 | 5.81 | 6.12 | 6.28 | 6.45 | 6.17 | 5.65 | 5.51 |
| cheap-duds | combo_D | 5.47 | 5.81 | 6.12 | 6.15 | 6.32 | 5.99 | 5.69 | 5.51 |
| experimenter | control | 5.59 | 7.23 | 8.02 | 8.61 | 8.76 | 8.47 | 7.99 | 7.62 |
| experimenter | combo_B | 5.59 | 7.23 | 8.02 | 8.45 | 8.61 | 8.05 | 7.35 | 6.96 |
| experimenter | combo_D | 5.59 | 7.23 | 8.02 | 8.28 | 8.43 | 7.88 | 7.34 | 6.95 |
| self-funder | control | 5.48 | 6.12 | 6.75 | 7.43 | 7.58 | 7.26 | 6.61 | 6.24 |
| self-funder | combo_B | 5.48 | 6.12 | 6.75 | 7.28 | 7.43 | 6.90 | 6.07 | 5.67 |
| self-funder | combo_D | 5.48 | 6.12 | 6.75 | 7.13 | 7.28 | 6.75 | 6.06 | 5.66 |
| selective-self-funder | control | 5.63 | 7.35 | 8.30 | 8.74 | 8.74 | 8.68 | 8.47 | 8.05 |
| selective-self-funder | combo_B | 5.63 | 7.35 | 8.30 | 8.58 | 8.57 | 8.40 | 7.82 | 7.43 |
| selective-self-funder | combo_D | 5.63 | 7.35 | 8.30 | 8.40 | 8.40 | 8.20 | 7.80 | 7.39 |
| famous-star | control | 5.57 | 5.98 | 6.39 | 6.79 | 6.97 | 6.89 | 6.40 | 6.15 |
| famous-star | combo_B | 5.57 | 5.98 | 6.39 | 6.66 | 6.83 | 6.53 | 5.88 | 5.59 |
| famous-star | combo_D | 5.57 | 5.98 | 6.39 | 6.52 | 6.70 | 6.39 | 5.88 | 5.59 |

### Great films — all strategies pooled, by release window

Denominators are films in that window. HoF = average of Audience and Critic ≥ hofThreshold (9.0). `≥9` is inclusive, `>9` strict.

| Strategy | Config | Window | Films (n) | Avg Aud | Avg Crit | HoF n (%) | Avg ≥9 n (%) | Avg >9 n (%) | Aud ≥9 n (%) | Crit ≥9 n (%) | 8+ n (%) | Careers with 0 HoF | HoF/career p10/p50/p90 | Best/career p10/p50/p90/p99 | Best combined movie | Prestige median |
|---|---|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---|---|---|---:|
| ALL | control | 1-5 | 13500 | 6.21 | 6.26 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 238 (1.8%) | 100% of 2700 | 0/0/0 | 6.14/7.29/7.94/8.4 | 8.70 "Midnight Protocol" (A8.64/C8.76; balanced seed 87 #5, yr 1.5, critic gen 0) |  |
| ALL | control | 6-20 | 40500 | 7.53 | 7.50 | 2952 (7.3%) | 2952 (7.3%) | 2836 (7.0%) | 3903 (9.6%) | 4138 (10.2%) | 13817 (34.1%) | 59% of 2700 | 0/0/4 | 7.19/8.36/9.61/10 | 10.00 "Dead Frequency" (A10/C10; experimenter seed 10 #18, yr 5.5, critic gen 0) |  |
| ALL | control | 21-50 | 81000 | 7.75 | 7.71 | 13789 (17.0%) | 13789 (17.0%) | 13330 (16.5%) | 16913 (20.9%) | 15777 (19.5%) | 33802 (41.7%) | 53% of 2700 | 0/0/14 | 6.95/8.68/9.9/10 | 10.00 "Dead Protocol" (A10/C10; balanced seed 6 #32, yr 9.8, critic gen 0) |  |
| ALL | control | 51-100 | 135000 | 7.34 | 7.29 | 6894 (5.1%) | 6894 (5.1%) | 6485 (4.8%) | 12396 (9.2%) | 11653 (8.6%) | 40250 (29.8%) | 65% of 2700 | 0/0/9 | 6.9/8.17/9.84/10 | 10.00 "Wild Night" (A10/C10; balanced seed 7 #59, yr 18.1, critic gen 0) |  |
| ALL | control | all | 270000 | 7.43 | 7.39 | 23635 (8.8%) | 23635 (8.8%) | 22651 (8.4%) | 33212 (12.3%) | 31568 (11.7%) | 88107 (32.6%) | 52% of 2700 | 0/0/25 | 7.75/8.81/9.97/10 | 10.00 "Dead Protocol" (A10/C10; balanced seed 6 #32, yr 9.8, critic gen 0) |  |
| ALL | combo_B | 1-5 | 13500 | 6.21 | 6.26 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 238 (1.8%) | 100% of 2700 | 0/0/0 | 6.14/7.29/7.94/8.4 | 8.70 "Midnight Protocol" (A8.64/C8.76; balanced seed 87 #5, yr 1.5, critic gen 0) |  |
| ALL | combo_B | 6-20 | 40500 | 7.53 | 7.48 | 2839 (7.0%) | 2839 (7.0%) | 2733 (6.8%) | 3903 (9.6%) | 3905 (9.6%) | 13741 (33.9%) | 60% of 2700 | 0/0/3 | 7.19/8.36/9.59/10 | 10.00 "Dead Frequency" (A10/C10; experimenter seed 10 #18, yr 5.5, critic gen 0) |  |
| ALL | combo_B | 21-50 | 81000 | 7.67 | 7.30 | 7411 (9.2%) | 7411 (9.2%) | 7118 (8.8%) | 14064 (17.4%) | 7445 (9.2%) | 29642 (36.6%) | 53% of 2700 | 0/0/8 | 6.77/8.54/9.75/10 | 10.00 "Dead Protocol" (A10/C10; balanced seed 6 #32, yr 9.8, critic gen 1) |  |
| ALL | combo_B | 51-100 | 135000 | 7.14 | 6.51 | 1635 (1.2%) | 1635 (1.2%) | 1559 (1.1%) | 7775 (5.8%) | 1432 (1.1%) | 17975 (13.3%) | 72% of 2700 | 0/0/2 | 6.61/8.17/9.38/9.68 | 9.91 "Red Run" (A10/C9.82; selective-self-funder seed 74 #51, yr 15.7, critic gen 2) |  |
| ALL | combo_B | all | 270000 | 7.31 | 6.88 | 11885 (4.4%) | 11885 (4.4%) | 11410 (4.2%) | 25742 (9.5%) | 12782 (4.7%) | 61596 (22.8%) | 51% of 2700 | 0/0/13 | 7.55/8.89/9.8/10 | 10.00 "Dead Protocol" (A10/C10; balanced seed 6 #32, yr 9.8, critic gen 1) |  |
| ALL | combo_D | 1-5 | 13500 | 6.21 | 6.26 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 238 (1.8%) | 100% of 2700 | 0/0/0 | 6.14/7.29/7.94/8.4 | 8.70 "Midnight Protocol" (A8.64/C8.76; balanced seed 87 #5, yr 1.5, critic gen 0) |  |
| ALL | combo_D | 6-20 | 40500 | 7.53 | 7.46 | 2725 (6.7%) | 2725 (6.7%) | 2621 (6.5%) | 3903 (9.6%) | 3758 (9.3%) | 13649 (33.7%) | 60% of 2700 | 0/0/3 | 7.17/8.34/9.57/10 | 10.00 "Dead Frequency" (A10/C10; experimenter seed 10 #18, yr 5.5, critic gen 0) |  |
| ALL | combo_D | 21-50 | 81000 | 7.69 | 7.00 | 4469 (5.5%) | 4469 (5.5%) | 4202 (5.2%) | 14253 (17.6%) | 3041 (3.8%) | 26674 (32.9%) | 55% of 2700 | 0/0/5 | 6.64/8.54/9.59/9.87 | 9.90 "Midnight Frequency" (A10/C9.8; balanced seed 280 #38, yr 11.7, critic gen 1) |  |
| ALL | combo_D | 51-100 | 135000 | 7.14 | 6.47 | 1191 (0.9%) | 1191 (0.9%) | 1141 (0.8%) | 7858 (5.8%) | 657 (0.5%) | 16759 (12.4%) | 77% of 2700 | 0/0/2 | 6.48/8.1/9.31/9.67 | 9.70 "Dead Night" (A10/C9.4; balanced seed 221 #51, yr 15.7, critic gen 2) |  |
| ALL | combo_D | all | 270000 | 7.32 | 6.77 | 8385 (3.1%) | 8385 (3.1%) | 7964 (3.0%) | 26014 (9.6%) | 7456 (2.8%) | 57320 (21.2%) | 52% of 2700 | 0/0/9 | 7.44/8.84/9.69/10 | 10.00 "Dead Frequency" (A10/C10; experimenter seed 10 #18, yr 5.5, critic gen 0) |  |

### Great films by strategy (whole career)

| Strategy | Config | Window | Films (n) | Avg Aud | Avg Crit | HoF n (%) | Avg ≥9 n (%) | Avg >9 n (%) | Aud ≥9 n (%) | Crit ≥9 n (%) | 8+ n (%) | Careers with 0 HoF | HoF/career p10/p50/p90 | Best/career p10/p50/p90/p99 | Best combined movie | Prestige median |
|---|---|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---|---|---|---:|
| balanced | control | all | 30000 | 8.46 | 8.36 | 7166 (23.9%) | 7166 (23.9%) | 6847 (22.8%) | 9555 (31.9%) | 8962 (29.9%) | 22381 (74.6%) | 0% of 300 | 16/24/32 | 9.7/9.87/10/10 | 10.00 "Dead Protocol" (A10/C10; balanced seed 6 #32, yr 9.8, critic gen 0) | 21092.5 |
| quality-first | control | all | 30000 | 8.34 | 8.21 | 5208 (17.4%) | 5208 (17.4%) | 4968 (16.6%) | 7712 (25.7%) | 7053 (23.5%) | 20755 (69.2%) | 0% of 300 | 12/17/24 | 9.64/9.86/10/10 | 10.00 "Hollow Pulse" (A10/C10; quality-first seed 9 #22, yr 6.8, critic gen 0) | 17552.5 |
| franchise-builder | control | all | 30000 | 6.99 | 6.93 | 482 (1.6%) | 482 (1.6%) | 465 (1.6%) | 609 (2.0%) | 678 (2.3%) | 2083 (6.9%) | 73% of 300 | 0/0/7 | 7.66/8.27/9.56/10 | 10.00 "Last Rising" (A10/C10; franchise-builder seed 38 #85, yr 26.1, critic gen 0) | 6560 |
| repeat-farmer | control | all | 30000 | 6.79 | 6.76 | 15 (0.1%) | 15 (0.1%) | 15 (0.1%) | 28 (0.1%) | 40 (0.1%) | 602 (2.0%) | 99% of 300 | 0/0/0 | 7.62/8.03/8.54/8.97 | 9.58 "Iron Pulse" (A9.49/C9.67; repeat-farmer seed 38 #9, yr 2.8, critic gen 0) | 5750 |
| cheap-duds | control | all | 30000 | 6.20 | 6.33 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 62 (0.2%) | 100% of 300 | 0/0/0 | 7.61/7.84/8.12/8.35 | 8.37 "Lost Night" (A8.22/C8.52; cheap-duds seed 172 #98, yr 30.1, critic gen 0) | 300 |
| experimenter | control | all | 30000 | 8.17 | 8.11 | 3576 (11.9%) | 3576 (11.9%) | 3487 (11.6%) | 5776 (19.3%) | 5521 (18.4%) | 17930 (59.8%) | 0% of 300 | 7/11.5/17 | 9.43/9.7/10/10 | 10.00 "Dead Frequency" (A10/C10; experimenter seed 10 #18, yr 5.5, critic gen 0) | 16167.5 |
| self-funder | control | all | 30000 | 6.93 | 6.88 | 25 (0.1%) | 25 (0.1%) | 24 (0.1%) | 70 (0.2%) | 254 (0.8%) | 1827 (6.1%) | 92% of 300 | 0/0/0 | 8.29/8.58/8.95/9.13 | 9.16 "Red Run" (A9.08/C9.23; self-funder seed 148 #26, yr 8.0, critic gen 0) | 3980 |
| selective-self-funder | control | all | 30000 | 8.45 | 8.37 | 7163 (23.9%) | 7163 (23.9%) | 6845 (22.8%) | 9462 (31.5%) | 9060 (30.2%) | 22329 (74.4%) | 0% of 300 | 16/24/32 | 9.66/9.87/10/10 | 10.00 "Midnight Signal" (A10/C10; selective-self-funder seed 7 #88, yr 27.1, critic gen 0) | 21107.5 |
| famous-star | control | all | 30000 | 6.55 | 6.58 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 138 (0.5%) | 100% of 300 | 0/0/0 | 7.65/7.94/8.28/8.38 | 8.41 "Midnight Legacy" (A8.29/C8.54; famous-star seed 186 #41, yr 12.6, critic gen 0) | 525 |
| balanced | combo_B | all | 30000 | 8.31 | 7.78 | 3368 (11.2%) | 3368 (11.2%) | 3238 (10.8%) | 7129 (23.8%) | 3397 (11.3%) | 16126 (53.8%) | 0% of 300 | 6/11/17 | 9.43/9.68/10/10 | 10.00 "Dead Protocol" (A10/C10; balanced seed 6 #32, yr 9.8, critic gen 1) | 16632.5 |
| quality-first | combo_B | all | 30000 | 8.16 | 7.61 | 2732 (9.1%) | 2732 (9.1%) | 2625 (8.8%) | 6109 (20.4%) | 2892 (9.6%) | 13644 (45.5%) | 0% of 300 | 6/9/13 | 9.43/9.67/10/10 | 10.00 "Hollow Pulse" (A10/C10; quality-first seed 9 #22, yr 6.8, critic gen 1) | 14075 |
| franchise-builder | combo_B | all | 30000 | 7.11 | 6.63 | 376 (1.3%) | 376 (1.3%) | 367 (1.2%) | 1204 (4.0%) | 355 (1.2%) | 3038 (10.1%) | 63% of 300 | 0/0/5 | 7.78/8.77/9.5/9.81 | 10.00 "Broken Legacy" (A10/C10; franchise-builder seed 184 #38, yr 11.7, critic gen 1) | 9072.5 |
| repeat-farmer | combo_B | all | 30000 | 6.65 | 6.27 | 15 (0.1%) | 15 (0.1%) | 15 (0.1%) | 28 (0.1%) | 40 (0.1%) | 600 (2.0%) | 99% of 300 | 0/0/0 | 7.62/8.03/8.54/8.97 | 9.58 "Iron Pulse" (A9.49/C9.67; repeat-farmer seed 38 #9, yr 2.8, critic gen 0) | 5750 |
| cheap-duds | combo_B | all | 30000 | 6.07 | 5.87 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 1 (0.0%) | 100% of 300 | 0/0/0 | 7.27/7.52/7.81/7.93 | 8.02 "Iron Horizon" (A8.03/C8; cheap-duds seed 66 #29, yr 8.9, critic gen 1) | 225 |
| experimenter | combo_B | all | 30000 | 8.00 | 7.52 | 1934 (6.5%) | 1934 (6.5%) | 1851 (6.2%) | 4008 (13.4%) | 2674 (8.9%) | 11191 (37.3%) | 0% of 300 | 3/6/11 | 9.27/9.58/9.94/10 | 10.00 "Dead Frequency" (A10/C10; experimenter seed 10 #18, yr 5.5, critic gen 0) | 12820 |
| self-funder | combo_B | all | 30000 | 6.78 | 6.38 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 66 (0.2%) | 1 (0.0%) | 862 (2.9%) | 100% of 300 | 0/0/0 | 8.05/8.34/8.7/8.95 | 8.97 "Red Run" (A9.08/C8.86; self-funder seed 148 #26, yr 8.0, critic gen 1) | 3622.5 |
| selective-self-funder | combo_B | all | 30000 | 8.31 | 7.78 | 3460 (11.5%) | 3460 (11.5%) | 3314 (11.1%) | 7198 (24.0%) | 3423 (11.4%) | 16109 (53.7%) | 0% of 300 | 6.9/11/17 | 9.44/9.7/10/10 | 10.00 "Dead Legacy" (A10/C10; selective-self-funder seed 9 #23, yr 7.1, critic gen 1) | 16687.5 |
| famous-star | combo_B | all | 30000 | 6.41 | 6.09 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 25 (0.1%) | 100% of 300 | 0/0/0 | 7.43/7.65/7.97/8.12 | 8.20 "Broken Pulse" (A8.25/C8.14; famous-star seed 227 #31, yr 9.5, critic gen 1) | 375 |
| balanced | combo_D | all | 30000 | 8.32 | 7.64 | 2392 (8.0%) | 2392 (8.0%) | 2278 (7.6%) | 7191 (24.0%) | 1959 (6.5%) | 15201 (50.7%) | 0% of 300 | 4/8/13 | 9.31/9.56/9.85/10 | 10.00 "Hollow Code" (A10/C10; balanced seed 58 #17, yr 5.2, critic gen 0) | 15475 |
| quality-first | combo_D | all | 30000 | 8.16 | 7.48 | 1898 (6.3%) | 1898 (6.3%) | 1812 (6.0%) | 6112 (20.4%) | 1616 (5.4%) | 12379 (41.3%) | 0% of 300 | 3.9/6/9 | 9.31/9.52/9.82/10 | 10.00 "Last Signal" (A10/C10; quality-first seed 53 #18, yr 5.5, critic gen 0) | 12942.5 |
| franchise-builder | combo_D | all | 30000 | 7.16 | 6.57 | 285 (0.9%) | 285 (0.9%) | 269 (0.9%) | 1380 (4.6%) | 262 (0.9%) | 3154 (10.5%) | 63% of 300 | 0/0/3 | 7.78/8.83/9.32/9.67 | 9.70 "Broken Echo" (A10/C9.39; franchise-builder seed 52 #46, yr 14.2, critic gen 2) | 9445 |
| repeat-farmer | combo_D | all | 30000 | 6.65 | 6.16 | 15 (0.1%) | 15 (0.1%) | 15 (0.1%) | 28 (0.1%) | 40 (0.1%) | 597 (2.0%) | 99% of 300 | 0/0/0 | 7.62/8.03/8.54/8.97 | 9.58 "Iron Pulse" (A9.49/C9.67; repeat-farmer seed 38 #9, yr 2.8, critic gen 0) | 5750 |
| cheap-duds | combo_D | all | 30000 | 6.07 | 5.76 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 100% of 300 | 0/0/0 | 7.15/7.39/7.68/7.79 | 7.93 "Red Echo" (A7.77/C8.09; cheap-duds seed 280 #18, yr 5.5, critic gen 0) | 225 |
| experimenter | combo_D | all | 30000 | 8.00 | 7.38 | 1350 (4.5%) | 1350 (4.5%) | 1274 (4.3%) | 4006 (13.3%) | 1549 (5.2%) | 10246 (34.1%) | 1% of 300 | 2/4/8 | 9.13/9.41/9.74/10 | 10.00 "Dead Frequency" (A10/C10; experimenter seed 10 #18, yr 5.5, critic gen 0) | 11865 |
| self-funder | combo_D | all | 30000 | 6.78 | 6.26 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 65 (0.2%) | 1 (0.0%) | 515 (1.7%) | 100% of 300 | 0/0/0 | 7.93/8.2/8.57/8.77 | 8.83 "Midnight Legacy" (A8.74/C8.92; self-funder seed 74 #19, yr 5.8, critic gen 0) | 3517.5 |
| selective-self-funder | combo_D | all | 30000 | 8.31 | 7.65 | 2445 (8.2%) | 2445 (8.2%) | 2316 (7.7%) | 7232 (24.1%) | 2029 (6.8%) | 15226 (50.8%) | 0% of 300 | 4/8/13 | 9.31/9.57/9.84/10 | 10.00 "Last Rising" (A10/C10; selective-self-funder seed 38 #17, yr 5.2, critic gen 0) | 15437.5 |
| famous-star | combo_D | all | 30000 | 6.41 | 5.98 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 2 (0.0%) | 100% of 300 | 0/0/0 | 7.3/7.53/7.84/7.98 | 8.11 "Last Code" (A8/C8.21; famous-star seed 126 #19, yr 5.8, critic gen 0) | 375 |

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
| ALL | control | y15-20 | 43200 | 7.59 | 7.54 | 5058 (11.7%) | 5058 (11.7%) | 4756 (11.0%) | 6913 (16.0%) | 6199 (14.3%) | 16549 (38.3%) | 64% of 2700 | 0/0/7 | 6.94/8.18/9.78/10 | 10.00 "Wild Night" (A10/C10; balanced seed 7 #59, yr 18.1, critic gen 0) |  |
| ALL | control | y20-30 | 89100 | 7.26 | 7.21 | 2547 (2.9%) | 2547 (2.9%) | 2418 (2.7%) | 6239 (7.0%) | 6077 (6.8%) | 24346 (27.3%) | 75% of 2700 | 0/0/4 | 6.82/7.74/9.61/10 | 10.00 "Midnight Signal" (A10/C10; selective-self-funder seed 7 #88, yr 27.1, critic gen 0) |  |
| ALL | control | y30+ | 8100 | 7.06 | 7.02 | 75 (0.9%) | 75 (0.9%) | 75 (0.9%) | 281 (3.5%) | 278 (3.4%) | 1531 (18.9%) | 97% of 2700 | 0/0/0 | 6.36/7.11/8.54/9.37 | 9.89 "Lost Signal" (A10/C9.78; selective-self-funder seed 59 #98, yr 30.1, critic gen 0) |  |
| ALL | combo_B | y0-5 | 43200 | 7.08 | 7.08 | 1565 (3.6%) | 1565 (3.6%) | 1509 (3.5%) | 2362 (5.5%) | 2379 (5.5%) | 9814 (22.7%) | 70% of 2700 | 0/0/2 | 7/8.3/9.43/9.84 | 10.00 "Silver Edge" (A10/C10; selective-self-funder seed 46 #12, yr 3.7, critic gen 0) |  |
| ALL | combo_B | y5-10 | 43200 | 7.72 | 7.44 | 5227 (12.1%) | 5227 (12.1%) | 5087 (11.8%) | 8395 (19.4%) | 5207 (12.1%) | 16501 (38.2%) | 55% of 2700 | 0/0/6 | 6.85/8.43/9.73/10 | 10.00 "Dead Protocol" (A10/C10; balanced seed 6 #32, yr 9.8, critic gen 1) |  |
| ALL | combo_B | y10-15 | 43200 | 7.63 | 7.25 | 3149 (7.3%) | 3149 (7.3%) | 2961 (6.8%) | 6395 (14.8%) | 3464 (8.0%) | 15528 (35.9%) | 60% of 2700 | 0/0/4 | 6.71/8.32/9.61/9.99 | 10.00 "Dead Protocol 2" (A10/C10; balanced seed 6 #37, yr 11.4, critic gen 1) |  |
| ALL | combo_B | y15-20 | 43200 | 7.48 | 6.86 | 1546 (3.6%) | 1546 (3.6%) | 1457 (3.4%) | 5390 (12.5%) | 1469 (3.4%) | 11364 (26.3%) | 72% of 2700 | 0/0/2 | 6.59/7.99/9.4/9.89 | 9.91 "Red Run" (A10/C9.82; selective-self-funder seed 74 #51, yr 15.7, critic gen 2) |  |
| ALL | combo_B | y20-30 | 89100 | 7.04 | 6.40 | 388 (0.4%) | 388 (0.4%) | 387 (0.4%) | 3128 (3.5%) | 257 (0.3%) | 8164 (9.2%) | 90% of 2700 | 0/0/0 | 6.34/7.79/8.96/9.66 | 9.67 "Dead Edge" (A10/C9.34; selective-self-funder seed 6 #88, yr 27.1, critic gen 4) |  |
| ALL | combo_B | y30+ | 8100 | 6.72 | 6.25 | 10 (0.1%) | 10 (0.1%) | 9 (0.1%) | 72 (0.9%) | 6 (0.1%) | 225 (2.8%) | 100% of 2700 | 0/0/0 | 5.8/6.83/7.94/8.64 | 9.60 "Iron Horizon" (A9.87/C9.33; franchise-builder seed 213 #100, yr 30.8, critic gen 5) |  |
| ALL | combo_D | y0-5 | 43200 | 7.08 | 7.08 | 1565 (3.6%) | 1565 (3.6%) | 1509 (3.5%) | 2362 (5.5%) | 2379 (5.5%) | 9814 (22.7%) | 70% of 2700 | 0/0/2 | 7/8.3/9.43/9.84 | 10.00 "Silver Edge" (A10/C10; selective-self-funder seed 46 #12, yr 3.7, critic gen 0) |  |
| ALL | combo_D | y5-10 | 43200 | 7.73 | 7.20 | 3802 (8.8%) | 3802 (8.8%) | 3607 (8.3%) | 8446 (19.6%) | 2931 (6.8%) | 15375 (35.6%) | 56% of 2700 | 0/0/4 | 6.81/8.34/9.62/9.87 | 10.00 "Dead Frequency" (A10/C10; experimenter seed 10 #18, yr 5.5, critic gen 0) |  |
| ALL | combo_D | y10-15 | 43200 | 7.65 | 6.95 | 1646 (3.8%) | 1646 (3.8%) | 1539 (3.6%) | 6519 (15.1%) | 1428 (3.3%) | 13844 (32.0%) | 70% of 2700 | 0/0/2 | 6.58/8.21/9.41/9.7 | 9.90 "Midnight Frequency" (A10/C9.8; balanced seed 280 #38, yr 11.7, critic gen 1) |  |
| ALL | combo_D | y15-20 | 43200 | 7.50 | 6.69 | 956 (2.2%) | 956 (2.2%) | 898 (2.1%) | 5492 (12.7%) | 417 (1.0%) | 9978 (23.1%) | 79% of 2700 | 0/0/1 | 6.44/7.89/9.2/9.68 | 9.70 "Dead Night" (A10/C9.4; balanced seed 221 #51, yr 15.7, critic gen 2) |  |
| ALL | combo_D | y20-30 | 89100 | 7.04 | 6.40 | 401 (0.5%) | 401 (0.5%) | 400 (0.5%) | 3112 (3.5%) | 290 (0.3%) | 8084 (9.1%) | 90% of 2700 | 0/0/1 | 6.34/7.78/9.03/9.66 | 9.67 "Lost Run" (A10/C9.34; selective-self-funder seed 7 #68, yr 20.9, critic gen 3) |  |
| ALL | combo_D | y30+ | 8100 | 6.72 | 6.25 | 15 (0.2%) | 15 (0.2%) | 11 (0.1%) | 83 (1.0%) | 11 (0.1%) | 225 (2.8%) | 99% of 2700 | 0/0/0 | 5.78/6.78/7.92/8.78 | 9.58 "Silver Run" (A9.85/C9.31; franchise-builder seed 48 #100, yr 30.8, critic gen 5) |  |

### Prestige progression (Prestige gates growth; cash sustains operations)

`cash-rich but Prestige-locked` = careers that at some week had the cash for the next upgrade but not the Prestige. `bought below gate` must be 0 (engine rule).

| Strategy | Config | Cash median | Prestige median | Prestige/yr | Careers with negative-cash weeks | →6 gate met (Prestige ≥ 200) · median film # | →6 bought · median film # | →6 cash-rich but Prestige-locked | →6 bought below gate | →8 gate met (Prestige ≥ 1000) · median film # | →8 bought · median film # | →8 cash-rich but Prestige-locked | →8 bought below gate |
|---|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|
| balanced | control | $27.09M | 21092.5 | 679.1 | 71% | 100% · #6 | 100% · #7 | 100% | 0 | 100% · #11 | 100% · #11 | 100% | 0 |
| quality-first | control | $27.73M | 17552.5 | 565.1 | 57% | 100% · #7 | 100% · #7 | 100% | 0 | 100% · #12 | 100% · #12 | 100% | 0 |
| franchise-builder | control | $24.91M | 6560 | 211.2 | 71% | 100% · #6 | 100% · #7 | 100% | 0 | 100% · #10 | 100% · #10 | 100% | 0 |
| repeat-farmer | control | $32.09M | 5750 | 185.1 | 63% | 100% · #6 | 100% · #7 | 100% | 0 | 100% · #11 | 100% · #11 | 100% | 0 |
| cheap-duds | control | $16.96M | 300 | 9.7 | 4% | 80% · #47 | 0% · #— | 100% | 0 | 0% · #100 | 0% · #— | 0% | 0 |
| experimenter | control | $30.03M | 16167.5 | 520.5 | 56% | 100% · #8 | 100% · #8 | 100% | 0 | 100% · #14 | 100% · #14 | 100% | 0 |
| self-funder | control | $0.26M | 3980 | 128.2 | 100% | 100% · #18 | 0% · #— | 68% | 0 | 100% · #27 | 0% · #— | 0% | 0 |
| selective-self-funder | control | $27.32M | 21107.5 | 679.6 | 67% | 100% · #6.5 | 100% · #7 | 100% | 0 | 100% · #10 | 100% · #11 | 100% | 0 |
| famous-star | control | $26.58M | 525 | 16.9 | 100% | 95% · #33 | 0% · #— | 100% | 0 | 5% · #64.5 | 0% · #— | 0% | 0 |
| balanced | combo_B | $27.01M | 16632.5 | 535.5 | 71% | 100% · #6 | 100% · #7 | 100% | 0 | 100% · #11 | 100% · #11 | 100% | 0 |
| quality-first | combo_B | $27.43M | 14075 | 453.2 | 57% | 100% · #7 | 100% · #7 | 100% | 0 | 100% · #12 | 100% · #12 | 100% | 0 |
| franchise-builder | combo_B | $24.42M | 9072.5 | 292.1 | 71% | 100% · #6 | 100% · #7 | 100% | 0 | 100% · #10 | 100% · #10 | 100% | 0 |
| repeat-farmer | combo_B | $28.47M | 5750 | 185.1 | 63% | 100% · #6 | 100% · #7 | 100% | 0 | 100% · #11 | 100% · #11 | 100% | 0 |
| cheap-duds | combo_B | $14.88M | 225 | 7.2 | 4% | 56% · #49 | 0% · #— | 100% | 0 | 0% · #— | 0% · #— | 0% | 0 |
| experimenter | combo_B | $29.59M | 12820 | 412.7 | 56% | 100% · #8 | 100% · #8 | 100% | 0 | 100% · #14 | 100% · #14 | 100% | 0 |
| self-funder | combo_B | $0.25M | 3622.5 | 116.9 | 100% | 100% · #18 | 0% · #— | 68% | 0 | 100% · #28 | 0% · #— | 0% | 0 |
| selective-self-funder | combo_B | $27.21M | 16687.5 | 537.3 | 67% | 100% · #6.5 | 100% · #7 | 100% | 0 | 100% · #10 | 100% · #11 | 100% | 0 |
| famous-star | combo_B | $24.70M | 375 | 12.1 | 100% | 82% · #32 | 0% · #— | 100% | 0 | 1% · #82 | 0% · #— | 0% | 0 |
| balanced | combo_D | $26.97M | 15475 | 498.2 | 71% | 100% · #6 | 100% · #7 | 100% | 0 | 100% · #11 | 100% · #11 | 100% | 0 |
| quality-first | combo_D | $27.45M | 12942.5 | 416.7 | 57% | 100% · #7 | 100% · #7 | 100% | 0 | 100% · #12 | 100% · #12 | 100% | 0 |
| franchise-builder | combo_D | $24.32M | 9445 | 304.1 | 71% | 100% · #6 | 100% · #7 | 100% | 0 | 100% · #10 | 100% · #10 | 100% | 0 |
| repeat-farmer | combo_D | $27.65M | 5750 | 185.1 | 63% | 100% · #6 | 100% · #7 | 100% | 0 | 100% · #11 | 100% · #11 | 100% | 0 |
| cheap-duds | combo_D | $14.62M | 225 | 7.2 | 4% | 56% · #49 | 0% · #— | 100% | 0 | 0% · #— | 0% · #— | 0% | 0 |
| experimenter | combo_D | $29.61M | 11865 | 382 | 56% | 100% · #8 | 100% · #8 | 100% | 0 | 100% · #14 | 100% · #14 | 100% | 0 |
| self-funder | combo_D | $0.25M | 3517.5 | 113.5 | 100% | 100% · #18 | 0% · #— | 68% | 0 | 100% · #28 | 0% · #— | 0% | 0 |
| selective-self-funder | combo_D | $27.22M | 15437.5 | 497 | 67% | 100% · #6.5 | 100% · #7 | 100% | 0 | 100% · #10 | 100% · #11 | 100% | 0 |
| famous-star | combo_D | $24.67M | 375 | 12.1 | 100% | 82% · #32 | 0% · #— | 100% | 0 | 1% · #82 | 0% · #— | 0% | 0 |

### Prestige milestones awarded per career (mean)

| Strategy | Variant | audience_7_5 | critic_8_5 | first_hall_of_fame | hall_of_fame | ip_gross_1m | ip_gross_5m | ip_viewers_500k | meters_all_70 | careers > 400 Prestige/yr (OUTDATED threshold) |
|---|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|
| balanced | control | 84.44 | 46.2 | 1 | 23.89 | 3.63 | 2.04 | 3.63 | 94.6 | 100% |
| balanced | combo_B | 81.82 | 25.01 | 1 | 11.23 | 4.04 | 2.31 | 4.04 | 94.6 | 100% |
| balanced | combo_D | 82.34 | 17.61 | 1 | 7.97 | 4.23 | 2.44 | 4.23 | 94.6 | 100% |
| quality-first | control | 80.93 | 38.38 | 1 | 17.36 | 0 | 0 | 0 | 94.61 | 100% |
| quality-first | combo_B | 75.32 | 21.88 | 1 | 9.11 | 0 | 0 | 0 | 94.61 | 96% |
| quality-first | combo_D | 75.32 | 14.53 | 1 | 6.33 | 0 | 0 | 0 | 94.61 | 72% |
| franchise-builder | control | 14.57 | 4.23 | 0.27 | 1.61 | 2.5 | 2.45 | 2.5 | 94.65 | 4% |
| franchise-builder | combo_B | 24.15 | 3.45 | 0.37 | 1.25 | 4.28 | 3.82 | 4.28 | 94.65 | 4% |
| franchise-builder | combo_D | 26.38 | 3.07 | 0.37 | 0.95 | 4.62 | 4.19 | 4.62 | 94.65 | 3% |
| repeat-farmer | control | 6.35 | 0.91 | 0.01 | 0.05 | 1 | 1 | 1 | 94.69 | 0% |
| repeat-farmer | combo_B | 6.35 | 0.9 | 0.01 | 0.05 | 1 | 1 | 1 | 94.69 | 0% |
| repeat-farmer | combo_D | 6.35 | 0.89 | 0.01 | 0.05 | 1 | 1 | 1 | 94.69 | 0% |
| cheap-duds | control | 4.76 | 0.06 | 0 | 0 | 0 | 0 | 0 | 0 | 0% |
| cheap-duds | combo_B | 2.9 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0% |
| cheap-duds | combo_D | 2.94 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0% |
| experimenter | control | 79.65 | 38.62 | 1 | 11.92 | 0 | 0 | 0 | 92.02 | 100% |
| experimenter | combo_B | 69.37 | 19.14 | 1 | 6.45 | 0 | 0 | 0 | 92.02 | 61% |
| experimenter | combo_D | 69.36 | 12.93 | 0.99 | 4.5 | 0 | 0 | 0 | 92.02 | 28% |
| self-funder | control | 25.03 | 2.77 | 0.08 | 0.08 | 0 | 0 | 0 | 37.4 | 0% |
| self-funder | combo_B | 21.67 | 1.15 | 0 | 0 | 0 | 0 | 0 | 37.39 | 0% |
| self-funder | combo_D | 21.61 | 0.32 | 0 | 0 | 0 | 0 | 0 | 37.4 | 0% |
| selective-self-funder | control | 84.26 | 46.47 | 1 | 23.88 | 3.63 | 2.04 | 3.63 | 94.56 | 100% |
| selective-self-funder | combo_B | 81.51 | 25.4 | 1 | 11.53 | 4.04 | 2.29 | 4.04 | 94.56 | 100% |
| selective-self-funder | combo_D | 81.76 | 17.95 | 1 | 8.15 | 4.23 | 2.38 | 4.23 | 94.56 | 100% |
| famous-star | control | 7.59 | 0.1 | 0 | 0 | 0 | 0 | 0 | 0 | 0% |
| famous-star | combo_B | 5.17 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0% |
| famous-star | combo_D | 5.17 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0% |

### Diagnostic flags fired

| Variant | Fired |
|---|---|
| control | EARLY_SOFTLOCK, PRESTIGE_TOO_FAST, QUALITY_INFLATION, DEAD_STRATEGY |
| combo_B | EARLY_SOFTLOCK, PRESTIGE_TOO_FAST, DEAD_STRATEGY |
| combo_D | EARLY_SOFTLOCK, PRESTIGE_TOO_FAST, DEAD_STRATEGY |
