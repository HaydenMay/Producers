# Experiment: G3_critics

> **Simulation assumptions, not design locks.** Paired seeds: every variant runs the same seeds and strategies; only the config overrides differ.

Gate 2.6 critic curves on the mixed-format economy (still NOT approved): control (off) vs combo_B vs combo_D.

- Seeds 1–200 (200) · strategies: balanced, tv-first, mixed, streaming-pivot, limited-focus · reference variant: **curves_off**
- Ruleset v9.61-gate3-0.1 · measured runtime 410331 ms for 6000 careers

| Variant | Config hash | Note |
|---|---|---|
| curves_off | 4d2eaee6 |  `{}` |
| combo_B | 9bf06ef5 |  `{"expectations":{"critics":{"enabled":true,"generationYears":6,"toughnessPerGeneration":0.04,"maxToughness":0.12},"audience":{"enabled":true,"eraYears":10,"toughnessPerEra":0.02,"maxToughness":0.06}}}` |
| combo_D | 5f160167 |  `{"expectations":{"critics":{"enabled":true,"generationYears":6,"toughnessPerGeneration":0.08,"maxToughness":0.12},"audience":{"enabled":true,"eraYears":10,"toughnessPerEra":0.02,"maxToughness":0.06}}}` |

## 15-year careers (in-game calendar horizon; productions vary by strategy)

Invariant violations across all variants: **0**.

### Medians by strategy

| Strategy | Variant | endCash | prestige | prestigePerRelease | meanAudience | meanCritic | share8plus | share9plus | shareLate8plus | hofShare | maxStaffEnd | staffCount | meanStaffStat | upgrades | firstUpgradeWeek | years | maxIpFans | negativeCashWeeks |
|---|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|
| balanced | curves_off | $11840K | 10605 | 220.95 | 8.41 | 8.33 | 73% | 29% | 80% | 29% | 8 | 8 | 95.80 | 2 | 112 | 15 | 94302 | 2 |
| balanced | combo_B | $11818K | 9312.50 | 194 | 8.38 | 8.08 | 67% | 19% | 75% | 19% | 8 | 8 | 95.80 | 2 | 112 | 15 | 83410.50 | 2 |
| balanced | combo_D | $11839K | 8465 | 176.40 | 8.39 | 7.88 | 65% | 13% | 70% | 13% | 8 | 8 | 95.80 | 2 | 112 | 15 | 82402.50 | 2 |
| tv-first | curves_off | $10949K | 4625 | 173.75 | 7.80 | 7.70 | 44% | 11% | 67% | 11% | 8 | 8 | 85.10 | 2 | 124 | 15 | 86416 | 2 |
| tv-first | combo_B | $10692K | 4082.50 | 150.75 | 7.75 | 7.50 | 40% | 3% | 52% | 3% | 8 | 8 | 85.30 | 2 | 124 | 15 | 79557.50 | 2 |
| tv-first | combo_D | $10463K | 3942.50 | 143.85 | 7.74 | 7.36 | 37% | 0% | 42% | 0% | 8 | 8 | 85.40 | 2 | 124 | 15 | 74722 | 2 |
| mixed | curves_off | $11545K | 6847.50 | 199.65 | 8.24 | 8.11 | 67% | 21% | 86% | 21% | 8 | 8 | 87.90 | 2 | 124 | 15 | 46250 | 2 |
| mixed | combo_B | $11222K | 5885 | 171.10 | 8.19 | 7.88 | 62% | 11% | 72% | 11% | 8 | 8 | 87.90 | 2 | 124 | 15 | 43722.50 | 2 |
| mixed | combo_D | $11027K | 5402.50 | 155.50 | 8.21 | 7.69 | 57% | 7% | 64% | 7% | 8 | 8 | 87.90 | 2 | 124 | 15 | 41739.50 | 2 |
| streaming-pivot | curves_off | $4118K | 5640 | 178.90 | 8.20 | 8.09 | 65% | 18% | 85% | 18% | 8 | 8 | 86.20 | 2 | 112 | 15 | 43834.50 | 2 |
| streaming-pivot | combo_B | $4069K | 5160 | 162 | 8.16 | 7.90 | 60% | 12% | 75% | 12% | 8 | 8 | 86.30 | 2 | 112 | 15 | 40233 | 2 |
| streaming-pivot | combo_D | $3997K | 4802.50 | 150.70 | 8.16 | 7.76 | 57% | 10% | 64% | 10% | 8 | 8 | 86.30 | 2 | 112 | 15 | 37447.50 | 2 |
| limited-focus | curves_off | $12664K | 8680 | 201.90 | 8.45 | 8.32 | 77% | 26% | 94% | 26% | 8 | 8 | 93.30 | 2 | 124 | 15 | 20084 | 1 |
| limited-focus | combo_B | $12522K | 7535 | 175.25 | 8.39 | 8.05 | 70% | 16% | 83% | 16% | 8 | 8 | 93.30 | 2 | 124 | 15 | 17913 | 1 |
| limited-focus | combo_D | $12455K | 6565 | 152.70 | 8.38 | 7.85 | 65% | 10% | 72% | 10% | 8 | 8 | 93.30 | 2 | 124 | 15 | 16997 | 1 |

### Paired deltas vs **curves_off** (median of per-seed differences; share of seeds where the variant is higher)

| Strategy | Variant | Δ endCash | Δ prestige | Δ share8plus | Δ meanAudience |
|---|---|---:|---:|---:|---:|
| balanced | combo_B | $-5K (43%) | -1285 (2%) | -4% (3%) | -0.05 (11%) |
| balanced | combo_D | $-1K (48%) | -2165 (1%) | -8% (2%) | -0.05 (25%) |
| tv-first | combo_B | $-230K (23%) | -370 (6%) | -4% (8%) | -0.04 (12%) |
| tv-first | combo_D | $-355K (19%) | -630 (6%) | -8% (9%) | -0.05 (20%) |
| mixed | combo_B | $-249K (11%) | -855 (1%) | -6% (4%) | -0.05 (10%) |
| mixed | combo_D | $-411K (15%) | -1372.50 (0%) | -9% (1%) | -0.05 (18%) |
| streaming-pivot | combo_B | $-65K (18%) | -497.50 (3%) | -3% (5%) | -0.04 (10%) |
| streaming-pivot | combo_D | $-112K (24%) | -825 (2%) | -7% (6%) | -0.04 (16%) |
| limited-focus | combo_B | $-126K (2%) | -1232.50 (0%) | -7% (0%) | -0.06 (1%) |
| limited-focus | combo_D | $-213K (1%) | -2080 (0%) | -10% (0%) | -0.06 (1%) |

### Mean review score (avg of Audience+Critic) by production index

| Strategy | Variant | #1 | #3 | #5 | #10 | #20 | #30 | #50 |
|---|---|---:|---:|---:|---:|---:|---:|---:|
| balanced | curves_off | 5.65 | 6.33 | 7.38 | 8.31 | 8.68 | 8.74 | — |
| balanced | combo_B | 5.65 | 6.33 | 7.38 | 8.31 | 8.52 | 8.59 | — |
| balanced | combo_D | 5.65 | 6.33 | 7.38 | 8.31 | 8.35 | 8.41 | — |
| tv-first | curves_off | 5.60 | 6.31 | 7.44 | 8.18 | 8.33 | 7.71 | — |
| tv-first | combo_B | 5.60 | 6.31 | 7.44 | 8.18 | 8.14 | 7.37 | — |
| tv-first | combo_D | 5.60 | 6.31 | 7.44 | 8.18 | 7.95 | 7.32 | — |
| mixed | curves_off | 5.62 | 6.33 | 7.43 | 8.24 | 8.33 | 8.86 | — |
| mixed | combo_B | 5.62 | 6.33 | 7.43 | 8.24 | 8.15 | 8.49 | — |
| mixed | combo_D | 5.62 | 6.33 | 7.43 | 8.24 | 7.99 | 8.31 | — |
| streaming-pivot | curves_off | 5.67 | 6.33 | 7.35 | 8.29 | 8.69 | 8.65 | — |
| streaming-pivot | combo_B | 5.67 | 6.33 | 7.35 | 8.29 | 8.52 | 8.20 | — |
| streaming-pivot | combo_D | 5.67 | 6.33 | 7.35 | 8.29 | 8.34 | 7.98 | — |
| limited-focus | curves_off | 5.65 | 6.35 | 7.42 | 8.30 | 8.73 | 8.80 | — |
| limited-focus | combo_B | 5.65 | 6.35 | 7.42 | 8.30 | 8.57 | 8.55 | — |
| limited-focus | combo_D | 5.65 | 6.35 | 7.42 | 8.30 | 8.40 | 8.38 | — |

### Great films — all strategies pooled, by release window

Denominators are films in that window. HoF = average of Audience and Critic ≥ hofThreshold (9.0). `≥9` is inclusive, `>9` strict.

| Strategy | Config | Window | Films (n) | Avg Aud | Avg Crit | HoF n (%) | Avg ≥9 n (%) | Avg >9 n (%) | Aud ≥9 n (%) | Crit ≥9 n (%) | 8+ n (%) | Careers with 0 HoF | HoF/career p10/p50/p90 | Best/career p10/p50/p90/p99 | Best combined movie | Prestige median |
|---|---|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---|---|---|---:|
| ALL | curves_off | 1-5 | 5000 | 6.48 | 6.51 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 174 (3.5%) | 100% of 1000 | 0/0/0 | 7.08/7.6/8.11/8.59 | 8.77 "Midnight Protocol" (limited_series, A8.71/C8.82; mixed seed 87 #5, yr 1.7, critic gen 0) |  |
| ALL | curves_off | 6-20 | 15000 | 8.33 | 8.22 | 2300 (15.3%) | 2300 (15.3%) | 2211 (14.7%) | 2998 (20.0%) | 3008 (20.1%) | 10205 (68.0%) | 18% of 1000 | 0/2/5 | 8.81/9.36/9.73/10 | 10.00 "Red Run" (limited_series, A10/C10; limited-focus seed 10 #20, yr 6.9, critic gen 0) |  |
| ALL | curves_off | 21-50 | 16756 | 8.72 | 8.57 | 5860 (35.0%) | 5860 (35.0%) | 5693 (34.0%) | 7760 (46.3%) | 6713 (40.1%) | 13914 (83.0%) | 12% of 1000 | 0/5/12 | 8.91/9.59/9.91/10 | 10.00 "Iron Frequency" (limited_series, A10/C10; limited-focus seed 6 #29, yr 10.0, critic gen 0) |  |
| ALL | curves_off | 51-100 | 0 | NaN | NaN | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0% of 0 | — | — | — |  |
| ALL | curves_off | all | 36756 | 8.26 | 8.15 | 8160 (22.2%) | 8160 (22.2%) | 7904 (21.5%) | 10758 (29.3%) | 9721 (26.4%) | 24293 (66.1%) | 5% of 1000 | 2/7/15 | 9.24/9.66/10/10 | 10.00 "Iron Frequency" (limited_series, A10/C10; limited-focus seed 6 #29, yr 10.0, critic gen 0) |  |
| ALL | combo_B | 1-5 | 5000 | 6.48 | 6.51 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 174 (3.5%) | 100% of 1000 | 0/0/0 | 7.08/7.6/8.11/8.59 | 8.77 "Midnight Protocol" (limited_series, A8.71/C8.82; mixed seed 87 #5, yr 1.7, critic gen 0) |  |
| ALL | combo_B | 6-20 | 15000 | 8.33 | 8.16 | 2039 (13.6%) | 2039 (13.6%) | 1965 (13.1%) | 2987 (19.9%) | 2614 (17.4%) | 10008 (66.7%) | 23% of 1000 | 0/2/4 | 8.75/9.31/9.7/10 | 10.00 "Red Run" (limited_series, A10/C10; limited-focus seed 10 #20, yr 6.9, critic gen 1) |  |
| ALL | combo_B | 21-50 | 16873 | 8.61 | 8.12 | 3050 (18.1%) | 3050 (18.1%) | 2950 (17.5%) | 5738 (34.0%) | 2947 (17.5%) | 12276 (72.8%) | 24% of 1000 | 0/3/7 | 8.59/9.38/9.77/10 | 10.00 "Iron Frequency" (limited_series, A10/C10; limited-focus seed 6 #29, yr 10.0, critic gen 1) |  |
| ALL | combo_B | 51-100 | 0 | NaN | NaN | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0% of 0 | — | — | — |  |
| ALL | combo_B | all | 36873 | 8.21 | 7.92 | 5089 (13.8%) | 5089 (13.8%) | 4915 (13.3%) | 8725 (23.7%) | 5561 (15.1%) | 22458 (60.9%) | 10% of 1000 | 1/5/10 | 9/9.49/9.89/10 | 10.00 "Iron Frequency" (limited_series, A10/C10; limited-focus seed 6 #29, yr 10.0, critic gen 1) |  |
| ALL | combo_D | 1-5 | 5000 | 6.48 | 6.51 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 174 (3.5%) | 100% of 1000 | 0/0/0 | 7.08/7.6/8.11/8.59 | 8.77 "Midnight Protocol" (limited_series, A8.71/C8.82; mixed seed 87 #5, yr 1.7, critic gen 0) |  |
| ALL | combo_D | 6-20 | 15000 | 8.33 | 8.09 | 1813 (12.1%) | 1813 (12.1%) | 1753 (11.7%) | 2980 (19.9%) | 2342 (15.6%) | 9790 (65.3%) | 26% of 1000 | 0/2/4 | 8.71/9.25/9.69/10 | 10.00 "Midnight Storm" (A10/C10; streaming-pivot seed 56 #16, yr 4.9, critic gen 0) |  |
| ALL | combo_D | 21-50 | 16971 | 8.62 | 7.78 | 1844 (10.9%) | 1844 (10.9%) | 1738 (10.2%) | 5798 (34.2%) | 1133 (6.7%) | 11103 (65.4%) | 33% of 1000 | 0/1/5 | 8.39/9.18/9.6/9.88 | 9.89 "Hollow Code" (A10/C9.77; balanced seed 43 #37, yr 11.4, critic gen 1) |  |
| ALL | combo_D | 51-100 | 0 | NaN | NaN | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0% of 0 | — | — | — |  |
| ALL | combo_D | all | 36971 | 8.21 | 7.74 | 3657 (9.9%) | 3657 (9.9%) | 3491 (9.4%) | 8778 (23.7%) | 3475 (9.4%) | 21067 (57.0%) | 14% of 1000 | 0/3/7 | 8.84/9.39/9.77/10 | 10.00 "Midnight Storm" (A10/C10; streaming-pivot seed 56 #16, yr 4.9, critic gen 0) |  |

### Great films by strategy (whole career)

| Strategy | Config | Window | Films (n) | Avg Aud | Avg Crit | HoF n (%) | Avg ≥9 n (%) | Avg >9 n (%) | Aud ≥9 n (%) | Crit ≥9 n (%) | 8+ n (%) | Careers with 0 HoF | HoF/career p10/p50/p90 | Best/career p10/p50/p90/p99 | Best combined movie | Prestige median |
|---|---|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---|---|---|---:|
| balanced | curves_off | all | 9600 | 8.42 | 8.34 | 2776 (28.9%) | 2776 (28.9%) | 2681 (27.9%) | 3374 (35.1%) | 3176 (33.1%) | 6921 (72.1%) | 0% of 200 | 8/14/20 | 9.54/9.81/10/10 | 10.00 "Dead Protocol" (A10/C10; balanced seed 6 #32, yr 9.8, critic gen 0) | 10605 |
| tv-first | curves_off | all | 5403 | 7.77 | 7.66 | 548 (10.1%) | 548 (10.1%) | 524 (9.7%) | 786 (14.6%) | 651 (12.1%) | 2360 (43.7%) | 23% of 200 | 0/3/6 | 8.68/9.29/9.75/10 | 10.00 "Midnight Rising: Season 2" (tv, A10/C10; tv-first seed 21 #19, yr 7.5, critic gen 0) | 4625 |
| mixed | curves_off | all | 6865 | 8.24 | 8.12 | 1434 (20.9%) | 1434 (20.9%) | 1399 (20.4%) | 1962 (28.6%) | 1703 (24.8%) | 4512 (65.7%) | 1% of 200 | 4/7/10 | 9.4/9.65/9.88/10 | 10.00 "Last Rising" (A10/C10; mixed seed 9 #35, yr 14.7, critic gen 0) | 6847.5 |
| streaming-pivot | curves_off | all | 6288 | 8.18 | 8.08 | 1190 (18.9%) | 1190 (18.9%) | 1163 (18.5%) | 1534 (24.4%) | 1421 (22.6%) | 3988 (63.4%) | 0% of 200 | 3/6/10 | 9.34/9.59/9.97/10 | 10.00 "Silver Night" (movie/original, A10/C10; streaming-pivot seed 9 #28, yr 11.1, critic gen 0) | 5640 |
| limited-focus | curves_off | all | 8600 | 8.45 | 8.32 | 2212 (25.7%) | 2212 (25.7%) | 2137 (24.9%) | 3102 (36.1%) | 2770 (32.2%) | 6512 (75.7%) | 0% of 200 | 7/11/15 | 9.55/9.8/10/10 | 10.00 "Iron Frequency" (limited_series, A10/C10; limited-focus seed 6 #29, yr 10.0, critic gen 0) | 8680 |
| balanced | combo_B | all | 9600 | 8.38 | 8.08 | 1792 (18.7%) | 1792 (18.7%) | 1730 (18.0%) | 2909 (30.3%) | 1869 (19.5%) | 6529 (68.0%) | 0% of 200 | 4/9/14 | 9.42/9.67/10/10 | 10.00 "Dead Protocol" (A10/C10; balanced seed 6 #32, yr 9.8, critic gen 1) | 9312.5 |
| tv-first | combo_B | all | 5466 | 7.73 | 7.48 | 303 (5.5%) | 303 (5.5%) | 288 (5.3%) | 649 (11.9%) | 320 (5.8%) | 2092 (38.3%) | 48% of 200 | 0/1/4.1 | 8.56/9.02/9.5/9.93 | 9.95 "Midnight Rising: Season 2" (tv, A10/C9.89; tv-first seed 21 #19, yr 7.5, critic gen 1) | 4082.5 |
| mixed | combo_B | all | 6887 | 8.19 | 7.89 | 797 (11.6%) | 797 (11.6%) | 765 (11.1%) | 1446 (21.0%) | 929 (13.5%) | 4113 (59.7%) | 1% of 200 | 2/4/7 | 9.25/9.47/9.78/10 | 10.00 "Midnight Frequency" (limited_series, A10/C10; mixed seed 56 #22, yr 8.8, critic gen 1) | 5885 |
| streaming-pivot | combo_B | all | 6320 | 8.14 | 7.91 | 844 (13.3%) | 844 (13.3%) | 820 (13.0%) | 1321 (20.9%) | 934 (14.8%) | 3721 (58.9%) | 1% of 200 | 2/4/7 | 9.25/9.48/9.8/10 | 10.00 "Silver Night" (movie/original, A10/C10; streaming-pivot seed 9 #28, yr 11.1, critic gen 1) | 5160 |
| limited-focus | combo_B | all | 8600 | 8.39 | 8.05 | 1353 (15.7%) | 1353 (15.7%) | 1312 (15.3%) | 2400 (27.9%) | 1509 (17.6%) | 6003 (69.8%) | 0% of 200 | 3.9/7/10 | 9.39/9.63/10/10 | 10.00 "Iron Frequency" (limited_series, A10/C10; limited-focus seed 6 #29, yr 10.0, critic gen 1) | 7535 |
| balanced | combo_D | all | 9600 | 8.39 | 7.88 | 1303 (13.6%) | 1303 (13.6%) | 1240 (12.9%) | 2963 (30.9%) | 1137 (11.8%) | 6126 (63.8%) | 1% of 200 | 3/6/11 | 9.25/9.53/9.85/10 | 10.00 "Hollow Code" (A10/C10; balanced seed 58 #17, yr 5.2, critic gen 0) | 8465 |
| tv-first | combo_D | all | 5512 | 7.72 | 7.33 | 199 (3.6%) | 199 (3.6%) | 190 (3.5%) | 648 (11.8%) | 224 (4.1%) | 1945 (35.3%) | 62% of 200 | 0/0/3.1 | 8.4/8.86/9.37/9.74 | 9.77 "Dead Legacy" (tv, A9.67/C9.87; tv-first seed 145 #11, yr 3.7, critic gen 0) | 3942.5 |
| mixed | combo_D | all | 6911 | 8.19 | 7.70 | 543 (7.9%) | 543 (7.9%) | 516 (7.5%) | 1451 (21.0%) | 556 (8.1%) | 3852 (55.7%) | 5% of 200 | 1/2.5/5 | 9.11/9.34/9.66/9.91 | 10.00 "Broken Echo" (limited_series, A10/C10; mixed seed 131 #15, yr 5.5, critic gen 0) | 5402.5 |
| streaming-pivot | combo_D | all | 6348 | 8.14 | 7.76 | 690 (10.9%) | 690 (10.9%) | 658 (10.4%) | 1321 (20.8%) | 712 (11.2%) | 3549 (55.9%) | 1% of 200 | 1/3/6 | 9.14/9.4/9.76/10 | 10.00 "Midnight Storm" (A10/C10; streaming-pivot seed 56 #16, yr 4.9, critic gen 0) | 4802.5 |
| limited-focus | combo_D | all | 8600 | 8.39 | 7.84 | 922 (10.7%) | 922 (10.7%) | 887 (10.3%) | 2395 (27.9%) | 846 (9.8%) | 5595 (65.1%) | 1% of 200 | 2/4.5/7 | 9.23/9.48/9.85/10 | 10.00 "Lost Rising" (limited_series, A10/C10; limited-focus seed 58 #15, yr 5.2, critic gen 0) | 6565 |

### Greatest single films (all strategies, whole sample; reproducible from seed + config hash)

| Variant | Best combined | Best Audience | Best Critic | Year band with most HoF |
|---|---|---|---|---|
| curves_off | 10.00 "Iron Frequency" (limited_series, A10/C10; limited-focus seed 6 #29, yr 10.0, critic gen 0) | 10.00 "Iron Frequency" (limited_series, A10/C10; limited-focus seed 6 #29, yr 10.0, critic gen 0) | 10.00 "Iron Frequency" (limited_series, A10/C10; limited-focus seed 6 #29, yr 10.0, critic gen 0) | y15-20: 60.0% of 5 |
| combo_B | 10.00 "Iron Frequency" (limited_series, A10/C10; limited-focus seed 6 #29, yr 10.0, critic gen 1) | 10.00 "Iron Frequency" (limited_series, A10/C10; limited-focus seed 6 #29, yr 10.0, critic gen 1) | 10.00 "Iron Frequency" (limited_series, A10/C10; limited-focus seed 6 #29, yr 10.0, critic gen 1) | y15-20: 25.0% of 8 |
| combo_D | 10.00 "Midnight Storm" (A10/C10; streaming-pivot seed 56 #16, yr 4.9, critic gen 0) | 10.00 "Midnight Storm" (A10/C10; streaming-pivot seed 56 #16, yr 4.9, critic gen 0) | 10.00 "Midnight Storm" (A10/C10; streaming-pivot seed 56 #16, yr 4.9, critic gen 0) | y5-10: 14.6% of 11755 |

### Great films by in-game year (all strategies pooled)

| Strategy | Config | Window | Films (n) | Avg Aud | Avg Crit | HoF n (%) | Avg ≥9 n (%) | Avg >9 n (%) | Aud ≥9 n (%) | Crit ≥9 n (%) | 8+ n (%) | Careers with 0 HoF | HoF/career p10/p50/p90 | Best/career p10/p50/p90/p99 | Best combined movie | Prestige median |
|---|---|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---|---|---|---:|
| ALL | curves_off | y0-5 | 14485 | 7.62 | 7.58 | 943 (6.5%) | 943 (6.5%) | 905 (6.3%) | 1462 (10.1%) | 1442 (10.0%) | 6151 (42.5%) | 50% of 1000 | 0/0.5/3 | 8.41/9/9.57/9.98 | 10.00 "Midnight Storm" (A10/C10; streaming-pivot seed 56 #16, yr 4.9, critic gen 0) |  |
| ALL | curves_off | y5-10 | 11653 | 8.62 | 8.48 | 3416 (29.3%) | 3416 (29.3%) | 3315 (28.4%) | 4123 (35.4%) | 3959 (34.0%) | 9341 (80.2%) | 15% of 1000 | 0/3/7 | 8.81/9.48/9.81/10 | 10.00 "Dead Protocol" (A10/C10; balanced seed 6 #32, yr 9.8, critic gen 0) |  |
| ALL | curves_off | y10-15 | 10613 | 8.72 | 8.58 | 3798 (35.8%) | 3798 (35.8%) | 3682 (34.7%) | 5169 (48.7%) | 4318 (40.7%) | 8797 (82.9%) | 17% of 1000 | 0/4/8 | 8.71/9.54/9.89/10 | 10.00 "Iron Frequency" (limited_series, A10/C10; limited-focus seed 6 #29, yr 10.0, critic gen 0) |  |
| ALL | curves_off | y15-20 | 5 | 8.85 | 8.75 | 3 (60.0%) | 3 (60.0%) | 2 (40.0%) | 4 (80.0%) | 2 (40.0%) | 4 (80.0%) | 40% of 5 | 0/1/1 | 7.98/9/9.45/9.58 | 9.59 "Dead Protocol" (tv, A9.18/C10; tv-first seed 57 #25, yr 15.0, critic gen 0) |  |
| ALL | combo_B | y0-5 | 14485 | 7.62 | 7.58 | 943 (6.5%) | 943 (6.5%) | 905 (6.3%) | 1462 (10.1%) | 1442 (10.0%) | 6151 (42.5%) | 50% of 1000 | 0/0.5/3 | 8.41/9/9.57/9.98 | 10.00 "Midnight Storm" (A10/C10; streaming-pivot seed 56 #16, yr 4.9, critic gen 0) |  |
| ALL | combo_B | y5-10 | 11707 | 8.61 | 8.22 | 2513 (21.5%) | 2513 (21.5%) | 2452 (20.9%) | 4106 (35.1%) | 2459 (21.0%) | 8735 (74.6%) | 21% of 1000 | 0/2/6 | 8.65/9.36/9.75/10 | 10.00 "Dead Protocol" (A10/C10; balanced seed 6 #32, yr 9.8, critic gen 1) |  |
| ALL | combo_B | y10-15 | 10673 | 8.56 | 8.06 | 1631 (15.3%) | 1631 (15.3%) | 1556 (14.6%) | 3154 (29.6%) | 1659 (15.5%) | 7567 (70.9%) | 35% of 1000 | 0/1/4 | 8.37/9.21/9.69/10 | 10.00 "Iron Frequency" (limited_series, A10/C10; limited-focus seed 6 #29, yr 10.0, critic gen 1) |  |
| ALL | combo_B | y15-20 | 8 | 8.32 | 7.97 | 2 (25.0%) | 2 (25.0%) | 2 (25.0%) | 3 (37.5%) | 1 (12.5%) | 5 (62.5%) | 75% of 8 | 0/0/1 | 7/8.29/9.41/9.46 | 9.47 "Iron Protocol: Season 3" (tv/original, A9.72/C9.21; streaming-pivot seed 184 #32, yr 15.0, critic gen 2) |  |
| ALL | combo_D | y0-5 | 14485 | 7.62 | 7.58 | 943 (6.5%) | 943 (6.5%) | 905 (6.3%) | 1462 (10.1%) | 1442 (10.0%) | 6151 (42.5%) | 50% of 1000 | 0/0.5/3 | 8.41/9/9.57/9.98 | 10.00 "Midnight Storm" (A10/C10; streaming-pivot seed 56 #16, yr 4.9, critic gen 0) |  |
| ALL | combo_D | y5-10 | 11755 | 8.61 | 7.95 | 1717 (14.6%) | 1717 (14.6%) | 1643 (14.0%) | 4118 (35.0%) | 1379 (11.7%) | 8114 (69.0%) | 28% of 1000 | 0/1/4 | 8.55/9.21/9.67/10 | 10.00 "Lost Rising" (limited_series, A10/C10; limited-focus seed 58 #15, yr 5.2, critic gen 0) |  |
| ALL | combo_D | y10-15 | 10714 | 8.57 | 7.72 | 996 (9.3%) | 996 (9.3%) | 942 (8.8%) | 3196 (29.8%) | 654 (6.1%) | 6796 (63.4%) | 48% of 1000 | 0/1/3 | 8.18/9.02/9.5/9.87 | 9.89 "Hollow Code" (A10/C9.77; balanced seed 43 #37, yr 11.4, critic gen 1) |  |
| ALL | combo_D | y15-20 | 17 | 7.85 | 7.47 | 1 (5.9%) | 1 (5.9%) | 1 (5.9%) | 2 (11.8%) | 0 (0.0%) | 6 (35.3%) | 94% of 17 | 0/0/0 | 6.76/7.82/8.38/9.13 | 9.27 "Iron Protocol: Season 3" (tv/original, A9.72/C8.81; streaming-pivot seed 184 #32, yr 15.0, critic gen 2) |  |

### Prestige progression (Prestige gates growth; cash sustains operations)

`cash-rich but Prestige-locked` = careers that at some week had the cash for the next upgrade but not the Prestige. `bought below gate` must be 0 (engine rule).

| Strategy | Config | Cash median | Prestige median | Prestige/yr | Careers with negative-cash weeks | →6 gate met (Prestige ≥ 200) · median film # | →6 bought · median film # | →6 cash-rich but Prestige-locked | →6 bought below gate | →8 gate met (Prestige ≥ 1000) · median film # | →8 bought · median film # | →8 cash-rich but Prestige-locked | →8 bought below gate |
|---|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|
| balanced | curves_off | $11.84M | 10605 | 707 | 70% | 100% · #7 | 100% · #7 | 100% | 0 | 100% · #11 | 100% · #11 | 100% | 0 |
| tv-first | curves_off | $10.95M | 4625 | 308.3 | 74% | 100% · #7 | 100% · #7 | 100% | 0 | 100% · #11 | 100% · #12 | 100% | 0 |
| mixed | curves_off | $11.55M | 6847.5 | 456.5 | 73% | 100% · #7 | 100% · #7 | 100% | 0 | 100% · #12 | 100% · #12 | 100% | 0 |
| streaming-pivot | curves_off | $4.12M | 5640 | 376 | 65% | 100% · #7 | 100% · #7 | 100% | 0 | 100% · #12 | 100% · #12 | 100% | 0 |
| limited-focus | curves_off | $12.66M | 8680 | 578.7 | 52% | 100% · #7 | 100% · #7 | 100% | 0 | 100% · #12 | 100% · #12 | 100% | 0 |
| balanced | combo_B | $11.82M | 9312.5 | 620.8 | 70% | 100% · #7 | 100% · #7 | 100% | 0 | 100% · #11 | 100% · #11 | 100% | 0 |
| tv-first | combo_B | $10.69M | 4082.5 | 272.2 | 74% | 100% · #7 | 100% · #7 | 100% | 0 | 100% · #11 | 100% · #12 | 100% | 0 |
| mixed | combo_B | $11.22M | 5885 | 392.3 | 73% | 100% · #7 | 100% · #7 | 100% | 0 | 100% · #12 | 100% · #12 | 100% | 0 |
| streaming-pivot | combo_B | $4.07M | 5160 | 344 | 65% | 100% · #7 | 100% · #7 | 100% | 0 | 100% · #12 | 100% · #12 | 100% | 0 |
| limited-focus | combo_B | $12.52M | 7535 | 502.3 | 52% | 100% · #7 | 100% · #7 | 100% | 0 | 100% · #12 | 100% · #12 | 100% | 0 |
| balanced | combo_D | $11.84M | 8465 | 564.3 | 70% | 100% · #7 | 100% · #7 | 100% | 0 | 100% · #11 | 100% · #11 | 100% | 0 |
| tv-first | combo_D | $10.46M | 3942.5 | 262.8 | 74% | 100% · #7 | 100% · #7 | 100% | 0 | 100% · #11 | 100% · #12 | 100% | 0 |
| mixed | combo_D | $11.03M | 5402.5 | 360.2 | 73% | 100% · #7 | 100% · #7 | 100% | 0 | 100% · #12 | 100% · #12 | 100% | 0 |
| streaming-pivot | combo_D | $4.00M | 4802.5 | 320.2 | 65% | 100% · #7 | 100% · #7 | 100% | 0 | 100% · #12 | 100% · #12 | 100% | 0 |
| limited-focus | combo_D | $12.45M | 6565 | 437.7 | 52% | 100% · #7 | 100% · #7 | 100% | 0 | 100% · #12 | 100% · #12 | 100% | 0 |

### Prestige milestones awarded per career (mean)

| Strategy | Variant | audience_7_5 | critic_8_5 | first_hall_of_fame | hall_of_fame | ip_gross_1m | ip_gross_5m | ip_viewers_500k | meters_all_70 | careers > 400 Prestige/yr (OUTDATED threshold) |
|---|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|
| balanced | curves_off | 39.35 | 22.94 | 1 | 13.88 | 2.5 | 1.01 | 2.5 | 42.61 | 100% |
| balanced | combo_B | 39.41 | 18.93 | 1 | 8.96 | 2.63 | 1.04 | 2.63 | 42.61 | 100% |
| balanced | combo_D | 39.69 | 13.57 | 0.99 | 6.51 | 2.71 | 1.06 | 2.71 | 42.61 | 100% |
| tv-first | curves_off | 16.84 | 6.76 | 0.77 | 2.74 | 2.94 | 2.48 | 2.88 | 21.14 | 1% |
| tv-first | combo_B | 17.04 | 4.64 | 0.52 | 1.51 | 2.95 | 2.54 | 2.9 | 21.45 | 1% |
| tv-first | combo_D | 17.14 | 3.5 | 0.38 | 0.99 | 2.96 | 2.58 | 2.91 | 21.68 | 0% |
| mixed | curves_off | 26.86 | 13.97 | 0.99 | 7.17 | 2.58 | 0.9 | 2 | 28.38 | 87% |
| mixed | combo_B | 26.93 | 10.84 | 0.99 | 3.98 | 2.6 | 0.9 | 2 | 28.49 | 44% |
| mixed | combo_D | 27.09 | 7.78 | 0.95 | 2.71 | 2.54 | 0.89 | 2 | 28.61 | 13% |
| streaming-pivot | curves_off | 24.23 | 12.61 | 1 | 5.95 | 0 | 0 | 1.65 | 25.95 | 30% |
| streaming-pivot | combo_B | 24.25 | 10.32 | 0.99 | 4.22 | 0 | 0 | 1.68 | 26.11 | 11% |
| streaming-pivot | combo_D | 24.32 | 8.25 | 0.99 | 3.45 | 0 | 0 | 1.71 | 26.25 | 4% |
| limited-focus | curves_off | 35.92 | 20.46 | 1 | 11.06 | 1.28 | 0 | 0 | 37.15 | 100% |
| limited-focus | combo_B | 35.92 | 16.14 | 1 | 6.76 | 1.12 | 0 | 0 | 37.15 | 98% |
| limited-focus | combo_D | 35.93 | 10.98 | 0.99 | 4.61 | 0.98 | 0 | 0 | 37.15 | 81% |

### Gate 3 design trade-offs by strategy

(a) money · (b) Prestige · (c) time to TV / streaming · (d) successful IPs · (e) Hall of Fame · (f) last-12-month revenue mix · (g) solvency. Medians unless noted; shares are of careers.

| Strategy | Config | (a) cash median | min cash | ever negative | (b) Prestige | (c) TV unlock yr (share) | streaming live yr (share) | subs end | payback yrs (share) | (d) IPs ≥10K fans | shows · seasons · max | (e) HoF / career | (f) last-12-mo mix: traditional / subs / opex | streaming share | releases |
|---|---|---:|---:|---:|---:|---|---|---:|---|---:|---|---:|---|---:|---:|
| balanced | curves_off | $11.84M | $-4K | 70% | 10,605 | — (0%) | — (0%) | — | — (0%) | 19.0 | 0.0 · 0.0 · 0.0 | 14.0 | $1.36M / $0.00M / $0.00M | — | 48 |
| tv-first | curves_off | $10.95M | $-4K | 74% | 4,625 | 2.7 (100%) | — (0%) | — | — (0%) | 3.0 | 3.0 · 19.0 · 8.0 | 3.0 | $1.29M / $0.00M / $0.00M | — | 27 |
| mixed | curves_off | $11.55M | $-3K | 73% | 6,848 | 2.7 (100%) | 7.3 (100%) | 86,362 | 1.9 (100%) | 8.0 | 2.0 · 9.0 · 6.0 | 7.0 | $0.50M / $2.18M / $-1.07M | 81% | 34 |
| streaming-pivot | curves_off | $4.12M | $-3K | 65% | 5,640 | 2.5 (100%) | 6.4 (100%) | 86,226 | 1.3 (100%) | 4.0 | 2.0 · 9.0 · 6.0 | 6.0 | $0.00M / $2.20M / $-1.08M | 100% | 32 |
| limited-focus | curves_off | $12.66M | $-1K | 52% | 8,680 | 2.7 (100%) | — (0%) | — | — (0%) | 15.0 | 0.0 · 0.0 · 0.0 | 11.0 | $1.44M / $0.00M / $0.00M | — | 43 |
| balanced | combo_B | $11.82M | $-4K | 70% | 9,313 | — (0%) | — (0%) | — | — (0%) | 18.0 | 0.0 · 0.0 · 0.0 | 9.0 | $1.36M / $0.00M / $0.00M | — | 48 |
| tv-first | combo_B | $10.69M | $-4K | 74% | 4,083 | 2.7 (100%) | — (0%) | — | — (0%) | 3.0 | 3.0 · 20.0 · 8.0 | 1.0 | $1.26M / $0.00M / $0.00M | — | 27 |
| mixed | combo_B | $11.22M | $-3K | 73% | 5,885 | 2.7 (100%) | 7.6 (100%) | 82,927 | 1.9 (100%) | 8.0 | 2.0 · 9.0 · 6.0 | 4.0 | $0.48M / $2.10M / $-1.05M | 82% | 34 |
| streaming-pivot | combo_B | $4.07M | $-3K | 65% | 5,160 | 2.5 (100%) | 6.4 (100%) | 83,912 | 1.1 (100%) | 3.0 | 2.0 · 9.0 · 6.0 | 4.0 | $0.00M / $2.15M / $-1.06M | 100% | 32 |
| limited-focus | combo_B | $12.52M | $-1K | 52% | 7,535 | 2.7 (100%) | — (0%) | — | — (0%) | 12.0 | 0.0 · 0.0 · 0.0 | 7.0 | $1.41M / $0.00M / $0.00M | — | 43 |
| balanced | combo_D | $11.84M | $-4K | 70% | 8,465 | — (0%) | — (0%) | — | — (0%) | 17.5 | 0.0 · 0.0 · 0.0 | 6.0 | $1.37M / $0.00M / $0.00M | — | 48 |
| tv-first | combo_D | $10.46M | $-4K | 74% | 3,943 | 2.7 (100%) | — (0%) | — | — (0%) | 3.0 | 3.0 · 20.0 · 8.0 | 0.0 | $1.23M / $0.00M / $0.00M | — | 28 |
| mixed | combo_D | $11.03M | $-3K | 73% | 5,403 | 2.7 (100%) | 7.6 (100%) | 81,026 | 1.9 (100%) | 7.0 | 2.0 · 9.0 · 6.0 | 2.5 | $0.47M / $2.06M / $-1.03M | 81% | 35 |
| streaming-pivot | combo_D | $4.00M | $-3K | 65% | 4,803 | 2.5 (100%) | 6.4 (100%) | 82,726 | 1.1 (100%) | 3.0 | 2.0 · 9.0 · 6.0 | 3.0 | $0.00M / $2.11M / $-1.05M | 100% | 32 |
| limited-focus | combo_D | $12.45M | $-1K | 52% | 6,565 | 2.7 (100%) | — (0%) | — | — (0%) | 11.0 | 0.0 · 0.0 · 0.0 | 4.5 | $1.41M / $0.00M / $0.00M | — | 43 |

### Formats: share of releases · mean score · HoF % · net per production week; Prestige sources

| Strategy | Config | limited_series: share · avg · HoF% · net/prod-wk | limited_series/original: share · avg · HoF% · net/prod-wk | movie: share · avg · HoF% · net/prod-wk | movie/original: share · avg · HoF% · net/prod-wk | tv: share · avg · HoF% · net/prod-wk | tv/original: share · avg · HoF% · net/prod-wk | Prestige by format | top Prestige sources |
|---|---|---|---|---|---|---|---|---|---|
| balanced | curves_off | — | — | 100% · 8.38 · 28.9% · $26.7K | — | — | — | movie 100% | audience_7_5 27.6%, hall_of_fame 26%, meters_all_70 19.9%, critic_8_5 18.2% |
| tv-first | curves_off | 25% · 7.17 · 0.6% · $20.9K | — | 4% · 5.6 · 0% · $9.9K | — | 71% · 8.02 · 14.1% · $27.1K | — | limited_series 8.4%, tv 91.6% | audience_7_5 27.3%, meters_all_70 22.9%, critic_8_5 12.4%, hall_of_fame 11.9% |
| mixed | curves_off | 38% · 7.84 · 13.2% · $25.2K | 8% · 8.79 · 37.9% · $-8.2K | 22% · 8.23 · 27.1% · $25.2K | 7% · 8.81 · 42.2% · $-7.6K | 20% · 8.22 · 11.5% · $28.4K | 6% · 8.52 · 32.1% · $-8.4K | limited_series 26.1%, tv 25.2%, movie 22.4%, limited_series/original 9.6%, movie/original 9.1%, tv/original 7.6% | audience_7_5 29.4%, hall_of_fame 20.9%, meters_all_70 20.7%, critic_8_5 17.3% |
| streaming-pivot | curves_off | — | — | 66% · 7.91 · 13.5% · $23.9K | 6% · 8.82 · 39.7% · $-7.5K | — | 28% · 8.5 · 26.9% · $-8.4K | movie 54.4%, movie/original 8.6%, tv/original 37% | audience_7_5 31.7%, meters_all_70 22.7%, hall_of_fame 20.8%, critic_8_5 18.7% |
| limited-focus | curves_off | 98% · 8.45 · 26.3% · $27.9K | — | 2% · 5.65 · 0% · $9.4K | — | — | — | limited_series 100% | audience_7_5 30.9%, hall_of_fame 25.3%, meters_all_70 21.3%, critic_8_5 19.9% |
| balanced | combo_B | — | — | 100% · 8.23 · 18.7% · $26.7K | — | — | — | movie 100% | audience_7_5 31.4%, meters_all_70 22.7%, hall_of_fame 19.1%, critic_8_5 17.1% |
| tv-first | combo_B | 25% · 7.17 · 0.6% · $20.9K | — | 4% · 5.6 · 0% · $9.9K | — | 71% · 7.86 · 7.6% · $26.6K | — | limited_series 9.2%, tv 90.8% | audience_7_5 30.3%, meters_all_70 25.5%, ip_viewers_500k 10.3%, critic_8_5 9.4% |
| mixed | combo_B | 38% · 7.78 · 8.1% · $25.2K | 8% · 8.48 · 19.1% · $-8.2K | 22% · 8.11 · 17.9% · $25.2K | 7% · 8.53 · 20.8% · $-7.6K | 21% · 8.07 · 5.3% · $28.1K | 6% · 8.18 · 11.7% · $-8.4K | limited_series 27.4%, tv 26.8%, movie 22.8%, limited_series/original 8.5%, movie/original 7.9%, tv/original 6.6% | audience_7_5 33.9%, meters_all_70 23.9%, critic_8_5 15.5%, hall_of_fame 13.4% |
| streaming-pivot | combo_B | — | — | 66% · 7.9 · 12.6% · $23.9K | 6% · 8.56 · 25.1% · $-7.4K | — | 28% · 8.2 · 12.5% · $-8.3K | movie 58.9%, movie/original 8.1%, tv/original 33.1% | audience_7_5 35%, meters_all_70 25.1%, critic_8_5 16.9%, hall_of_fame 16.2% |
| limited-focus | combo_B | 98% · 8.28 · 16.1% · $27.7K | — | 2% · 5.65 · 0% · $9.4K | — | — | — | limited_series 100% | audience_7_5 36%, meters_all_70 24.8%, critic_8_5 18.3%, hall_of_fame 18.1% |
| balanced | combo_D | — | — | 100% · 8.14 · 13.6% · $26.7K | — | — | — | movie 100% | audience_7_5 35%, meters_all_70 25.1%, hall_of_fame 15.3%, critic_8_5 13.6% |
| tv-first | combo_D | 25% · 7.17 · 0.6% · $20.9K | — | 4% · 5.6 · 0% · $9.9K | — | 72% · 7.75 · 4.8% · $26.4K | — | limited_series 9.6%, tv 90.4% | audience_7_5 31.9%, meters_all_70 26.9%, ip_viewers_500k 10.8%, ip_gross_5m 9.6% |
| mixed | combo_D | 38% · 7.73 · 5.7% · $25.2K | 7% · 8.32 · 11.1% · $-8.3K | 22% · 8.03 · 13.6% · $25.2K | 7% · 8.33 · 12.9% · $-7.6K | 21% · 7.97 · 3.6% · $28.0K | 6% · 8.03 · 5.5% · $-8.4K | limited_series 27.7%, tv 28.4%, movie 22.8%, limited_series/original 7.6%, movie/original 7.2%, tv/original 6.2% | audience_7_5 37.3%, meters_all_70 26.3%, critic_8_5 12.1%, hall_of_fame 10% |
| streaming-pivot | combo_D | — | — | 65% · 7.88 · 11.9% · $23.9K | 6% · 8.4 · 14.4% · $-7.4K | — | 28% · 8.02 · 7.6% · $-8.3K | movie 61.6%, movie/original 7%, tv/original 31.4% | audience_7_5 37.4%, meters_all_70 26.9%, critic_8_5 14.4%, hall_of_fame 14.1% |
| limited-focus | combo_D | 98% · 8.18 · 11% · $27.6K | — | 2% · 5.65 · 0% · $9.4K | — | — | — | limited_series 100% | audience_7_5 40.8%, meters_all_70 28.1%, critic_8_5 14.1%, hall_of_fame 14% |

### Gate 3 provisional flags

| Variant | Flag | Fired | Evidence |
|---|---|---|---|
| curves_off | STREAMING_INFINITE_GROWTH | **yes** | 6/400 launched careers reached ≥90% of the reachable subscriber market (growth is capped by design; this flags saturation) [PROVISIONAL threshold] |
| curves_off | SUBSCRIBER_CHURN_SPIRAL | no | not fired: 0/400 launched careers lost >60% of subscribers within 3 years [PROVISIONAL threshold] |
| curves_off | TV_SEASON_TOO_PROFITABLE | no | not fired: 0/5113 finished traditional TV seasons netted >2× the batch's pooled movie net per production week ($25,365) [PROVISIONAL threshold] |
| curves_off | TV_SEASON_TOO_LONG | no | not fired: 0 careers kept one show running ≥12 seasons (fatigue cap 0.35 may allow endless renewals) [PROVISIONAL threshold] |
| curves_off | TV_NO_RENEWAL_PATH | no | not fired: 0/400 TV careers never made a second season [PROVISIONAL threshold] |
| curves_off | MIXED_ECONOMY_SOFTLOCK | no | not fired: 0/1000 careers spent ≥3 years with negative cash [PROVISIONAL threshold] |
| curves_off | FORMAT_DOMINANT | no | not fired: best cash: limited-focus; best Prestige: balanced; fires only if one strategy leads both by >50% [PROVISIONAL threshold] |
| curves_off | DELAYED_STUDIO_PROGRESSION | no | not fired: TV not unlocked by year 8: 0/400; streaming not live by year 15: 0/400 [PROVISIONAL threshold] |
| combo_B | STREAMING_INFINITE_GROWTH | **yes** | 3/400 launched careers reached ≥90% of the reachable subscriber market (growth is capped by design; this flags saturation) [PROVISIONAL threshold] |
| combo_B | SUBSCRIBER_CHURN_SPIRAL | no | not fired: 0/400 launched careers lost >60% of subscribers within 3 years [PROVISIONAL threshold] |
| combo_B | TV_SEASON_TOO_PROFITABLE | no | not fired: 0/5188 finished traditional TV seasons netted >2× the batch's pooled movie net per production week ($25,353) [PROVISIONAL threshold] |
| combo_B | TV_SEASON_TOO_LONG | no | not fired: 0 careers kept one show running ≥12 seasons (fatigue cap 0.35 may allow endless renewals) [PROVISIONAL threshold] |
| combo_B | TV_NO_RENEWAL_PATH | no | not fired: 0/400 TV careers never made a second season [PROVISIONAL threshold] |
| combo_B | MIXED_ECONOMY_SOFTLOCK | no | not fired: 0/1000 careers spent ≥3 years with negative cash [PROVISIONAL threshold] |
| combo_B | FORMAT_DOMINANT | no | not fired: best cash: limited-focus; best Prestige: balanced; fires only if one strategy leads both by >50% [PROVISIONAL threshold] |
| combo_B | DELAYED_STUDIO_PROGRESSION | no | not fired: TV not unlocked by year 8: 0/400; streaming not live by year 15: 0/400 [PROVISIONAL threshold] |
| combo_D | STREAMING_INFINITE_GROWTH | **yes** | 4/400 launched careers reached ≥90% of the reachable subscriber market (growth is capped by design; this flags saturation) [PROVISIONAL threshold] |
| combo_D | SUBSCRIBER_CHURN_SPIRAL | no | not fired: 0/400 launched careers lost >60% of subscribers within 3 years [PROVISIONAL threshold] |
| combo_D | TV_SEASON_TOO_PROFITABLE | no | not fired: 0/5249 finished traditional TV seasons netted >2× the batch's pooled movie net per production week ($25,368) [PROVISIONAL threshold] |
| combo_D | TV_SEASON_TOO_LONG | no | not fired: 0 careers kept one show running ≥12 seasons (fatigue cap 0.35 may allow endless renewals) [PROVISIONAL threshold] |
| combo_D | TV_NO_RENEWAL_PATH | no | not fired: 0/400 TV careers never made a second season [PROVISIONAL threshold] |
| combo_D | MIXED_ECONOMY_SOFTLOCK | no | not fired: 0/1000 careers spent ≥3 years with negative cash [PROVISIONAL threshold] |
| combo_D | FORMAT_DOMINANT | no | not fired: best cash: limited-focus; best Prestige: balanced; fires only if one strategy leads both by >50% [PROVISIONAL threshold] |
| combo_D | DELAYED_STUDIO_PROGRESSION | no | not fired: TV not unlocked by year 8: 0/400; streaming not live by year 15: 0/400 [PROVISIONAL threshold] |

### Diagnostic flags fired

| Variant | Fired |
|---|---|
| curves_off | PRESTIGE_TOO_FAST, QUALITY_INFLATION, HIGH_REVIEWS_UNEXPLAINED_LOW_SALES |
| combo_B | PRESTIGE_TOO_FAST, QUALITY_INFLATION, HIGH_REVIEWS_UNEXPLAINED_LOW_SALES |
| combo_D | PRESTIGE_TOO_FAST, QUALITY_INFLATION, HIGH_REVIEWS_UNEXPLAINED_LOW_SALES |

## 30-year careers (in-game calendar horizon; productions vary by strategy)

Invariant violations across all variants: **0**.

### Medians by strategy

| Strategy | Variant | endCash | prestige | prestigePerRelease | meanAudience | meanCritic | share8plus | share9plus | shareLate8plus | hofShare | maxStaffEnd | staffCount | meanStaffStat | upgrades | firstUpgradeWeek | years | maxIpFans | negativeCashWeeks |
|---|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|
| balanced | curves_off | $26275K | 20800 | 214.40 | 8.49 | 8.36 | 75% | 25% | 77% | 25% | 8 | 8 | 100 | 2 | 112 | 30 | 127520 | 2 |
| balanced | combo_B | $26120K | 16297.50 | 168 | 8.34 | 7.80 | 56% | 11% | 36% | 11% | 8 | 8 | 100 | 2 | 112 | 30 | 97690 | 2 |
| balanced | combo_D | $26092K | 15170 | 156.40 | 8.35 | 7.67 | 53% | 8% | 36% | 8% | 8 | 8 | 100 | 2 | 112 | 30 | 93877 | 2 |
| tv-first | curves_off | $28113K | 8360 | 193.70 | 7.96 | 7.84 | 50% | 13% | 61% | 13% | 8 | 8 | 100 | 2 | 124 | 30 | 85050.50 | 2 |
| tv-first | combo_B | $26729K | 6840 | 156.45 | 7.79 | 7.36 | 37% | 3% | 33% | 3% | 8 | 8 | 100 | 2 | 124 | 30 | 68022 | 2 |
| tv-first | combo_D | $26994K | 6605 | 149.90 | 7.80 | 7.24 | 35% | 2% | 29% | 2% | 8 | 8 | 100 | 2 | 124 | 30 | 68495 | 2 |
| mixed | curves_off | $30018K | 13737.50 | 217.50 | 8.46 | 8.34 | 75% | 24% | 88% | 24% | 8 | 8 | 100 | 2 | 124 | 30 | 58040.50 | 2 |
| mixed | combo_B | $27568K | 10447.50 | 166.10 | 8.30 | 7.77 | 57% | 8% | 54% | 8% | 8 | 8 | 100 | 2 | 124 | 30 | 44675.50 | 2 |
| mixed | combo_D | $26812K | 9922.50 | 157.15 | 8.30 | 7.63 | 54% | 6% | 50% | 6% | 8 | 8 | 100 | 2 | 124 | 30 | 43742 | 2 |
| streaming-pivot | curves_off | $7255K | 9850 | 198.70 | 8.34 | 8.20 | 69% | 21% | 77% | 21% | 8 | 8 | 100 | 2 | 112 | 30 | 51254 | 2 |
| streaming-pivot | combo_B | $5995K | 7865 | 157.85 | 8.20 | 7.72 | 55% | 10% | 45% | 10% | 8 | 8 | 100 | 2 | 112 | 30 | 39579 | 2 |
| streaming-pivot | combo_D | $5600K | 7410 | 147.85 | 8.16 | 7.62 | 51% | 8% | 41% | 8% | 8 | 8 | 100 | 2 | 112 | 30 | 38838 | 2 |
| limited-focus | curves_off | $28155K | 15932.50 | 185.25 | 8.41 | 8.28 | 74% | 17% | 69% | 17% | 8 | 8 | 100 | 2 | 124 | 30 | 15125 | 1 |
| limited-focus | combo_B | $27353K | 12757.50 | 148.35 | 8.25 | 7.69 | 50% | 9% | 20% | 9% | 8 | 8 | 100 | 2 | 124 | 30 | 11777.50 | 1 |
| limited-focus | combo_D | $27215K | 11560 | 134.45 | 8.24 | 7.55 | 47% | 6% | 20% | 6% | 8 | 8 | 100 | 2 | 124 | 30 | 11791 | 1 |

### Paired deltas vs **curves_off** (median of per-seed differences; share of seeds where the variant is higher)

| Strategy | Variant | Δ endCash | Δ prestige | Δ share8plus | Δ meanAudience |
|---|---|---:|---:|---:|---:|
| balanced | combo_B | $-103K (36%) | -4467.50 (0%) | -20% (0%) | -0.15 (3%) |
| balanced | combo_D | $-94K (37%) | -5645 (0%) | -23% (0%) | -0.15 (4%) |
| tv-first | combo_B | $-1041K (19%) | -1427.50 (4%) | -13% (4%) | -0.15 (20%) |
| tv-first | combo_D | $-1331K (22%) | -1692.50 (2%) | -16% (3%) | -0.14 (22%) |
| mixed | combo_B | $-2233K (1%) | -3370 (0%) | -17% (0%) | -0.17 (2%) |
| mixed | combo_D | $-2971K (1%) | -3870 (0%) | -21% (0%) | -0.17 (4%) |
| streaming-pivot | combo_B | $-1085K (5%) | -1937.50 (1%) | -15% (0%) | -0.14 (10%) |
| streaming-pivot | combo_D | $-1631K (3%) | -2267.50 (1%) | -18% (1%) | -0.15 (13%) |
| limited-focus | combo_B | $-800K (0%) | -3182.50 (0%) | -24% (0%) | -0.17 (0%) |
| limited-focus | combo_D | $-923K (0%) | -4277.50 (0%) | -28% (0%) | -0.17 (0%) |

### Mean review score (avg of Audience+Critic) by production index

| Strategy | Variant | #1 | #3 | #5 | #10 | #20 | #30 | #50 |
|---|---|---:|---:|---:|---:|---:|---:|---:|
| balanced | curves_off | 5.65 | 6.33 | 7.38 | 8.31 | 8.68 | 8.74 | 8.75 |
| balanced | combo_B | 5.65 | 6.33 | 7.38 | 8.31 | 8.52 | 8.59 | 8.44 |
| balanced | combo_D | 5.65 | 6.33 | 7.38 | 8.31 | 8.35 | 8.41 | 8.24 |
| tv-first | curves_off | 5.60 | 6.31 | 7.44 | 8.18 | 8.33 | 7.72 | — |
| tv-first | combo_B | 5.60 | 6.31 | 7.44 | 8.18 | 8.14 | 7.17 | — |
| tv-first | combo_D | 5.60 | 6.31 | 7.44 | 8.18 | 7.95 | 7.05 | — |
| mixed | curves_off | 5.62 | 6.33 | 7.43 | 8.24 | 8.33 | 8.86 | 8.79 |
| mixed | combo_B | 5.62 | 6.33 | 7.43 | 8.24 | 8.15 | 8.49 | 8.07 |
| mixed | combo_D | 5.62 | 6.33 | 7.43 | 8.24 | 7.99 | 8.31 | 8.07 |
| streaming-pivot | curves_off | 5.67 | 6.33 | 7.35 | 8.29 | 8.69 | 8.57 | 8.37 |
| streaming-pivot | combo_B | 5.67 | 6.33 | 7.35 | 8.29 | 8.52 | 8.15 | 7.81 |
| streaming-pivot | combo_D | 5.67 | 6.33 | 7.35 | 8.29 | 8.34 | 7.92 | 7.83 |
| limited-focus | curves_off | 5.65 | 6.35 | 7.42 | 8.30 | 8.73 | 8.80 | 8.68 |
| limited-focus | combo_B | 5.65 | 6.35 | 7.42 | 8.30 | 8.57 | 8.55 | 8.24 |
| limited-focus | combo_D | 5.65 | 6.35 | 7.42 | 8.30 | 8.40 | 8.38 | 8.07 |

### Great films — all strategies pooled, by release window

Denominators are films in that window. HoF = average of Audience and Critic ≥ hofThreshold (9.0). `≥9` is inclusive, `>9` strict.

| Strategy | Config | Window | Films (n) | Avg Aud | Avg Crit | HoF n (%) | Avg ≥9 n (%) | Avg >9 n (%) | Aud ≥9 n (%) | Crit ≥9 n (%) | 8+ n (%) | Careers with 0 HoF | HoF/career p10/p50/p90 | Best/career p10/p50/p90/p99 | Best combined movie | Prestige median |
|---|---|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---|---|---|---:|
| ALL | curves_off | 1-5 | 5000 | 6.48 | 6.51 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 174 (3.5%) | 100% of 1000 | 0/0/0 | 7.08/7.6/8.11/8.59 | 8.77 "Midnight Protocol" (limited_series, A8.71/C8.82; mixed seed 87 #5, yr 1.7, critic gen 0) |  |
| ALL | curves_off | 6-20 | 15000 | 8.33 | 8.22 | 2300 (15.3%) | 2300 (15.3%) | 2211 (14.7%) | 2998 (20.0%) | 3008 (20.1%) | 10205 (68.0%) | 18% of 1000 | 0/2/5 | 8.81/9.36/9.73/10 | 10.00 "Red Run" (limited_series, A10/C10; limited-focus seed 10 #20, yr 6.9, critic gen 0) |  |
| ALL | curves_off | 21-50 | 28571 | 8.65 | 8.51 | 9062 (31.7%) | 9062 (31.7%) | 8791 (30.8%) | 12474 (43.7%) | 10549 (36.9%) | 22873 (80.1%) | 3% of 1000 | 3/9/15 | 9.34/9.74/10/10 | 10.00 "Iron Frequency" (limited_series, A10/C10; limited-focus seed 6 #29, yr 10.0, critic gen 0) |  |
| ALL | curves_off | 51-100 | 19367 | 8.46 | 8.32 | 2924 (15.1%) | 2924 (15.1%) | 2700 (13.9%) | 5018 (25.9%) | 4644 (24.0%) | 14571 (75.2%) | 16% of 678 | 0/3/11 | 8.87/9.47/9.89/10 | 10.00 "Wild Night" (A10/C10; balanced seed 7 #59, yr 18.1, critic gen 0) |  |
| ALL | curves_off | all | 67938 | 8.37 | 8.25 | 14286 (21.0%) | 14286 (21.0%) | 13702 (20.2%) | 20490 (30.2%) | 18201 (26.8%) | 47823 (70.4%) | 1% of 1000 | 5/14/25 | 9.43/9.79/10/10 | 10.00 "Iron Frequency" (limited_series, A10/C10; limited-focus seed 6 #29, yr 10.0, critic gen 0) |  |
| ALL | combo_B | 1-5 | 5000 | 6.48 | 6.51 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 174 (3.5%) | 100% of 1000 | 0/0/0 | 7.08/7.6/8.11/8.59 | 8.77 "Midnight Protocol" (limited_series, A8.71/C8.82; mixed seed 87 #5, yr 1.7, critic gen 0) |  |
| ALL | combo_B | 6-20 | 15000 | 8.33 | 8.16 | 2039 (13.6%) | 2039 (13.6%) | 1965 (13.1%) | 2987 (19.9%) | 2614 (17.4%) | 10008 (66.7%) | 23% of 1000 | 0/2/4 | 8.75/9.31/9.7/10 | 10.00 "Red Run" (limited_series, A10/C10; limited-focus seed 10 #20, yr 6.9, critic gen 1) |  |
| ALL | combo_B | 21-50 | 28636 | 8.48 | 7.88 | 3800 (13.3%) | 3800 (13.3%) | 3648 (12.7%) | 8493 (29.7%) | 3599 (12.6%) | 18159 (63.4%) | 15% of 1000 | 0/4/8 | 8.84/9.41/9.8/10 | 10.00 "Iron Frequency" (limited_series, A10/C10; limited-focus seed 6 #29, yr 10.0, critic gen 1) |  |
| ALL | combo_B | 51-100 | 19408 | 8.18 | 7.38 | 546 (2.8%) | 546 (2.8%) | 521 (2.7%) | 2879 (14.8%) | 448 (2.3%) | 6786 (35.0%) | 57% of 677 | 0/0/3 | 8.19/8.93/9.43/9.88 | 9.90 "Wild Shadow" (A10/C9.8; balanced seed 109 #55, yr 16.9, critic gen 2) |  |
| ALL | combo_B | all | 68044 | 8.21 | 7.70 | 6385 (9.4%) | 6385 (9.4%) | 6134 (9.0%) | 14359 (21.1%) | 6661 (9.8%) | 35127 (51.6%) | 7% of 1000 | 1/6/12 | 9.07/9.54/9.9/10 | 10.00 "Iron Frequency" (limited_series, A10/C10; limited-focus seed 6 #29, yr 10.0, critic gen 1) |  |
| ALL | combo_D | 1-5 | 5000 | 6.48 | 6.51 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 174 (3.5%) | 100% of 1000 | 0/0/0 | 7.08/7.6/8.11/8.59 | 8.77 "Midnight Protocol" (limited_series, A8.71/C8.82; mixed seed 87 #5, yr 1.7, critic gen 0) |  |
| ALL | combo_D | 6-20 | 15000 | 8.33 | 8.09 | 1813 (12.1%) | 1813 (12.1%) | 1753 (11.7%) | 2980 (19.9%) | 2342 (15.6%) | 9790 (65.3%) | 26% of 1000 | 0/2/4 | 8.71/9.25/9.69/10 | 10.00 "Midnight Storm" (A10/C10; streaming-pivot seed 56 #16, yr 4.9, critic gen 0) |  |
| ALL | combo_D | 21-50 | 28688 | 8.48 | 7.62 | 2350 (8.2%) | 2350 (8.2%) | 2217 (7.7%) | 8492 (29.6%) | 1495 (5.2%) | 16420 (57.2%) | 22% of 1000 | 0/2/5 | 8.68/9.24/9.65/9.88 | 9.89 "Hollow Code" (A10/C9.77; balanced seed 43 #37, yr 11.4, critic gen 1) |  |
| ALL | combo_D | 51-100 | 19454 | 8.18 | 7.34 | 418 (2.1%) | 418 (2.1%) | 403 (2.1%) | 2881 (14.8%) | 260 (1.3%) | 6560 (33.7%) | 63% of 682 | 0/0/2 | 8.17/8.82/9.32/9.68 | 9.70 "Silver Night" (A10/C9.39; balanced seed 162 #52, yr 16.0, critic gen 2) |  |
| ALL | combo_D | all | 68142 | 8.21 | 7.56 | 4581 (6.7%) | 4581 (6.7%) | 4373 (6.4%) | 14353 (21.1%) | 4097 (6.0%) | 32944 (48.4%) | 10% of 1000 | 0/4/9 | 8.99/9.41/9.77/10 | 10.00 "Midnight Storm" (A10/C10; streaming-pivot seed 56 #16, yr 4.9, critic gen 0) |  |

### Great films by strategy (whole career)

| Strategy | Config | Window | Films (n) | Avg Aud | Avg Crit | HoF n (%) | Avg ≥9 n (%) | Avg >9 n (%) | Aud ≥9 n (%) | Crit ≥9 n (%) | 8+ n (%) | Careers with 0 HoF | HoF/career p10/p50/p90 | Best/career p10/p50/p90/p99 | Best combined movie | Prestige median |
|---|---|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---|---|---|---:|
| balanced | curves_off | all | 19400 | 8.48 | 8.38 | 4812 (24.8%) | 4812 (24.8%) | 4597 (23.7%) | 6329 (32.6%) | 5924 (30.5%) | 14611 (75.3%) | 0% of 200 | 16/24/32 | 9.68/9.87/10/10 | 10.00 "Dead Protocol" (A10/C10; balanced seed 6 #32, yr 9.8, critic gen 0) | 20800 |
| tv-first | curves_off | all | 8728 | 7.93 | 7.81 | 1170 (13.4%) | 1170 (13.4%) | 1133 (13.0%) | 1728 (19.8%) | 1396 (16.0%) | 4286 (49.1%) | 6% of 200 | 2/6/10 | 9.1/9.52/9.84/10 | 10.00 "Midnight Rising: Season 2" (tv, A10/C10; tv-first seed 21 #19, yr 7.5, critic gen 0) | 8360 |
| mixed | curves_off | all | 12620 | 8.46 | 8.34 | 3101 (24.6%) | 3101 (24.6%) | 3022 (23.9%) | 4553 (36.1%) | 3852 (30.5%) | 9428 (74.7%) | 0% of 200 | 10/15/21 | 9.61/9.84/10/10 | 10.00 "Wild Legacy" (limited_series, A10/C10; mixed seed 6 #50, yr 22.7, critic gen 0) | 13737.5 |
| streaming-pivot | curves_off | all | 9990 | 8.32 | 8.20 | 2104 (21.1%) | 2104 (21.1%) | 2050 (20.5%) | 2954 (29.6%) | 2577 (25.8%) | 6778 (67.8%) | 0% of 200 | 5/10/16 | 9.45/9.71/10/10 | 10.00 "Silver Night" (movie/original, A10/C10; streaming-pivot seed 9 #28, yr 11.1, critic gen 0) | 9850 |
| limited-focus | curves_off | all | 17200 | 8.42 | 8.28 | 3099 (18.0%) | 3099 (18.0%) | 2900 (16.9%) | 4926 (28.6%) | 4452 (25.9%) | 12720 (74.0%) | 0% of 200 | 10/15/22 | 9.63/9.84/10/10 | 10.00 "Iron Frequency" (limited_series, A10/C10; limited-focus seed 6 #29, yr 10.0, critic gen 0) | 15932.5 |
| balanced | combo_B | all | 19400 | 8.33 | 7.80 | 2247 (11.6%) | 2247 (11.6%) | 2166 (11.2%) | 4732 (24.4%) | 2242 (11.6%) | 10763 (55.5%) | 0% of 200 | 5.9/11/18 | 9.43/9.68/10/10 | 10.00 "Dead Protocol" (A10/C10; balanced seed 6 #32, yr 9.8, critic gen 1) | 16297.5 |
| tv-first | combo_B | all | 8787 | 7.79 | 7.34 | 422 (4.8%) | 422 (4.8%) | 394 (4.5%) | 1176 (13.4%) | 423 (4.8%) | 3155 (35.9%) | 33% of 200 | 0/1.5/5 | 8.74/9.13/9.57/9.93 | 9.95 "Midnight Rising: Season 2" (tv, A10/C9.89; tv-first seed 21 #19, yr 7.5, critic gen 1) | 6840 |
| mixed | combo_B | all | 12650 | 8.30 | 7.76 | 1122 (8.9%) | 1122 (8.9%) | 1083 (8.6%) | 2809 (22.2%) | 1147 (9.1%) | 7244 (57.3%) | 0% of 200 | 3/5/9 | 9.3/9.55/9.86/10 | 10.00 "Midnight Frequency" (limited_series, A10/C10; mixed seed 56 #22, yr 8.8, critic gen 1) | 10447.5 |
| streaming-pivot | combo_B | all | 10007 | 8.18 | 7.74 | 1004 (10.0%) | 1004 (10.0%) | 972 (9.7%) | 2093 (20.9%) | 1087 (10.9%) | 5326 (53.2%) | 0% of 200 | 2/5/9 | 9.27/9.49/9.8/10 | 10.00 "Silver Night" (movie/original, A10/C10; streaming-pivot seed 9 #28, yr 11.1, critic gen 1) | 7865 |
| limited-focus | combo_B | all | 17200 | 8.25 | 7.69 | 1590 (9.2%) | 1590 (9.2%) | 1519 (8.8%) | 3549 (20.6%) | 1762 (10.2%) | 8639 (50.2%) | 0% of 200 | 4/8/12 | 9.4/9.65/10/10 | 10.00 "Iron Frequency" (limited_series, A10/C10; limited-focus seed 6 #29, yr 10.0, critic gen 1) | 12757.5 |
| balanced | combo_D | all | 19400 | 8.35 | 7.66 | 1611 (8.3%) | 1611 (8.3%) | 1534 (7.9%) | 4773 (24.6%) | 1304 (6.7%) | 10167 (52.4%) | 1% of 200 | 4/8/13 | 9.32/9.58/9.85/10 | 10.00 "Hollow Code" (A10/C10; balanced seed 58 #17, yr 5.2, critic gen 0) | 15170 |
| tv-first | combo_D | all | 8827 | 7.79 | 7.22 | 273 (3.1%) | 273 (3.1%) | 253 (2.9%) | 1157 (13.1%) | 300 (3.4%) | 2914 (33.0%) | 48% of 200 | 0/1/4 | 8.61/9/9.45/9.74 | 9.77 "Dead Legacy" (tv, A9.67/C9.87; tv-first seed 145 #11, yr 3.7, critic gen 0) | 6605 |
| mixed | combo_D | all | 12683 | 8.30 | 7.63 | 796 (6.3%) | 796 (6.3%) | 766 (6.0%) | 2795 (22.0%) | 715 (5.6%) | 6846 (54.0%) | 2% of 200 | 2/4/6 | 9.15/9.37/9.67/9.91 | 10.00 "Broken Echo" (limited_series, A10/C10; mixed seed 131 #15, yr 5.5, critic gen 0) | 9922.5 |
| streaming-pivot | combo_D | all | 10032 | 8.17 | 7.62 | 824 (8.2%) | 824 (8.2%) | 780 (7.8%) | 2083 (20.8%) | 842 (8.4%) | 5044 (50.3%) | 1% of 200 | 2/4/7 | 9.15/9.41/9.76/10 | 10.00 "Midnight Storm" (A10/C10; streaming-pivot seed 56 #16, yr 4.9, critic gen 0) | 7410 |
| limited-focus | combo_D | all | 17200 | 8.25 | 7.54 | 1077 (6.3%) | 1077 (6.3%) | 1040 (6.0%) | 3545 (20.6%) | 936 (5.4%) | 7973 (46.4%) | 1% of 200 | 3/5/9 | 9.24/9.48/9.85/10 | 10.00 "Lost Rising" (limited_series, A10/C10; limited-focus seed 58 #15, yr 5.2, critic gen 0) | 11560 |

### Greatest single films (all strategies, whole sample; reproducible from seed + config hash)

| Variant | Best combined | Best Audience | Best Critic | Year band with most HoF |
|---|---|---|---|---|
| curves_off | 10.00 "Iron Frequency" (limited_series, A10/C10; limited-focus seed 6 #29, yr 10.0, critic gen 0) | 10.00 "Iron Frequency" (limited_series, A10/C10; limited-focus seed 6 #29, yr 10.0, critic gen 0) | 10.00 "Iron Frequency" (limited_series, A10/C10; limited-focus seed 6 #29, yr 10.0, critic gen 0) | y10-15: 35.8% of 10613 |
| combo_B | 10.00 "Iron Frequency" (limited_series, A10/C10; limited-focus seed 6 #29, yr 10.0, critic gen 1) | 10.00 "Iron Frequency" (limited_series, A10/C10; limited-focus seed 6 #29, yr 10.0, critic gen 1) | 10.00 "Iron Frequency" (limited_series, A10/C10; limited-focus seed 6 #29, yr 10.0, critic gen 1) | y5-10: 21.5% of 11707 |
| combo_D | 10.00 "Midnight Storm" (A10/C10; streaming-pivot seed 56 #16, yr 4.9, critic gen 0) | 10.00 "Midnight Storm" (A10/C10; streaming-pivot seed 56 #16, yr 4.9, critic gen 0) | 10.00 "Midnight Storm" (A10/C10; streaming-pivot seed 56 #16, yr 4.9, critic gen 0) | y5-10: 14.6% of 11755 |

### Great films by in-game year (all strategies pooled)

| Strategy | Config | Window | Films (n) | Avg Aud | Avg Crit | HoF n (%) | Avg ≥9 n (%) | Avg >9 n (%) | Aud ≥9 n (%) | Crit ≥9 n (%) | 8+ n (%) | Careers with 0 HoF | HoF/career p10/p50/p90 | Best/career p10/p50/p90/p99 | Best combined movie | Prestige median |
|---|---|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---|---|---|---:|
| ALL | curves_off | y0-5 | 14485 | 7.62 | 7.58 | 943 (6.5%) | 943 (6.5%) | 905 (6.3%) | 1462 (10.1%) | 1442 (10.0%) | 6151 (42.5%) | 50% of 1000 | 0/0.5/3 | 8.41/9/9.57/9.98 | 10.00 "Midnight Storm" (A10/C10; streaming-pivot seed 56 #16, yr 4.9, critic gen 0) |  |
| ALL | curves_off | y5-10 | 11653 | 8.62 | 8.48 | 3416 (29.3%) | 3416 (29.3%) | 3315 (28.4%) | 4123 (35.4%) | 3959 (34.0%) | 9341 (80.2%) | 15% of 1000 | 0/3/7 | 8.81/9.48/9.81/10 | 10.00 "Dead Protocol" (A10/C10; balanced seed 6 #32, yr 9.8, critic gen 0) |  |
| ALL | curves_off | y10-15 | 10613 | 8.72 | 8.58 | 3798 (35.8%) | 3798 (35.8%) | 3682 (34.7%) | 5169 (48.7%) | 4318 (40.7%) | 8797 (82.9%) | 17% of 1000 | 0/4/8 | 8.71/9.54/9.89/10 | 10.00 "Iron Frequency" (limited_series, A10/C10; limited-focus seed 6 #29, yr 10.0, critic gen 0) |  |
| ALL | curves_off | y15-20 | 10227 | 8.64 | 8.52 | 3059 (29.9%) | 3059 (29.9%) | 2855 (27.9%) | 4083 (39.9%) | 3564 (34.9%) | 8301 (81.2%) | 20% of 1000 | 0/3/7 | 8.66/9.47/9.88/10 | 10.00 "Wild Night" (A10/C10; balanced seed 7 #59, yr 18.1, critic gen 0) |  |
| ALL | curves_off | y20-30 | 20939 | 8.43 | 8.28 | 3068 (14.7%) | 3068 (14.7%) | 2943 (14.1%) | 5650 (27.0%) | 4911 (23.4%) | 15218 (72.7%) | 25% of 1000 | 0/2/7 | 8.73/9.45/9.84/10 | 10.00 "Wild Legacy" (limited_series, A10/C10; mixed seed 6 #50, yr 22.7, critic gen 0) |  |
| ALL | curves_off | y30+ | 21 | 8.17 | 8.55 | 2 (9.5%) | 2 (9.5%) | 2 (9.5%) | 3 (14.3%) | 7 (33.3%) | 15 (71.4%) | 90% of 21 | 0/0/0 | 7.28/8.45/8.98/9.39 | 9.45 "Red Protocol" (movie/original, A9.68/C9.22; streaming-pivot seed 30 #51, yr 30.0, critic gen 0) |  |
| ALL | combo_B | y0-5 | 14485 | 7.62 | 7.58 | 943 (6.5%) | 943 (6.5%) | 905 (6.3%) | 1462 (10.1%) | 1442 (10.0%) | 6151 (42.5%) | 50% of 1000 | 0/0.5/3 | 8.41/9/9.57/9.98 | 10.00 "Midnight Storm" (A10/C10; streaming-pivot seed 56 #16, yr 4.9, critic gen 0) |  |
| ALL | combo_B | y5-10 | 11707 | 8.61 | 8.22 | 2513 (21.5%) | 2513 (21.5%) | 2452 (20.9%) | 4106 (35.1%) | 2459 (21.0%) | 8735 (74.6%) | 21% of 1000 | 0/2/6 | 8.65/9.36/9.75/10 | 10.00 "Dead Protocol" (A10/C10; balanced seed 6 #32, yr 9.8, critic gen 1) |  |
| ALL | combo_B | y10-15 | 10673 | 8.56 | 8.06 | 1631 (15.3%) | 1631 (15.3%) | 1556 (14.6%) | 3154 (29.6%) | 1659 (15.5%) | 7567 (70.9%) | 35% of 1000 | 0/1/4 | 8.37/9.21/9.69/10 | 10.00 "Iron Frequency" (limited_series, A10/C10; limited-focus seed 6 #29, yr 10.0, critic gen 1) |  |
| ALL | combo_B | y15-20 | 10228 | 8.47 | 7.72 | 891 (8.7%) | 891 (8.7%) | 825 (8.1%) | 2866 (28.0%) | 800 (7.8%) | 6103 (59.7%) | 52% of 1000 | 0/0/3 | 8.15/8.98/9.52/9.89 | 9.90 "Red Night" (A10/C9.8; balanced seed 87 #49, yr 15.1, critic gen 2) |  |
| ALL | combo_B | y20-30 | 20931 | 8.10 | 7.29 | 407 (1.9%) | 407 (1.9%) | 396 (1.9%) | 2768 (13.2%) | 301 (1.4%) | 6563 (31.4%) | 73% of 1000 | 0/0/1 | 8.05/8.69/9.3/9.66 | 9.67 "Red Rising" (A10/C9.34; mixed seed 6 #58, yr 26.8, critic gen 4) |  |
| ALL | combo_B | y30+ | 20 | 7.73 | 7.61 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 3 (15.0%) | 0 (0.0%) | 8 (40.0%) | 100% of 20 | 0/0/0 | 6.75/7.74/8.2/8.55 | 8.61 "Red Protocol" (movie/original, A9.1/C8.11; streaming-pivot seed 30 #51, yr 30.0, critic gen 5) |  |
| ALL | combo_D | y0-5 | 14485 | 7.62 | 7.58 | 943 (6.5%) | 943 (6.5%) | 905 (6.3%) | 1462 (10.1%) | 1442 (10.0%) | 6151 (42.5%) | 50% of 1000 | 0/0.5/3 | 8.41/9/9.57/9.98 | 10.00 "Midnight Storm" (A10/C10; streaming-pivot seed 56 #16, yr 4.9, critic gen 0) |  |
| ALL | combo_D | y5-10 | 11755 | 8.61 | 7.95 | 1717 (14.6%) | 1717 (14.6%) | 1643 (14.0%) | 4118 (35.0%) | 1379 (11.7%) | 8114 (69.0%) | 28% of 1000 | 0/1/4 | 8.55/9.21/9.67/10 | 10.00 "Lost Rising" (limited_series, A10/C10; limited-focus seed 58 #15, yr 5.2, critic gen 0) |  |
| ALL | combo_D | y10-15 | 10714 | 8.57 | 7.72 | 996 (9.3%) | 996 (9.3%) | 942 (8.8%) | 3196 (29.8%) | 654 (6.1%) | 6796 (63.4%) | 48% of 1000 | 0/1/3 | 8.18/9.02/9.5/9.87 | 9.89 "Hollow Code" (A10/C9.77; balanced seed 43 #37, yr 11.4, critic gen 1) |  |
| ALL | combo_D | y15-20 | 10226 | 8.47 | 7.50 | 555 (5.4%) | 555 (5.4%) | 523 (5.1%) | 2843 (27.8%) | 309 (3.0%) | 5373 (52.5%) | 63% of 1000 | 0/0/2 | 8.02/8.8/9.32/9.68 | 9.70 "Silver Night" (A10/C9.39; balanced seed 162 #52, yr 16.0, critic gen 2) |  |
| ALL | combo_D | y20-30 | 20947 | 8.10 | 7.28 | 370 (1.8%) | 370 (1.8%) | 360 (1.7%) | 2732 (13.0%) | 313 (1.5%) | 6502 (31.0%) | 74% of 1000 | 0/0/1 | 8.03/8.68/9.29/9.66 | 9.67 "Red Rising" (movie/original, A10/C9.34; mixed seed 6 #58, yr 26.8, critic gen 4) |  |
| ALL | combo_D | y30+ | 15 | 7.85 | 7.43 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 2 (13.3%) | 0 (0.0%) | 8 (53.3%) | 100% of 15 | 0/0/0 | 6.4/8.06/8.19/8.28 | 8.30 "Last Code" (movie/original, A8.2/C8.4; mixed seed 1 #63, yr 30.0, critic gen 5) |  |

### Prestige progression (Prestige gates growth; cash sustains operations)

`cash-rich but Prestige-locked` = careers that at some week had the cash for the next upgrade but not the Prestige. `bought below gate` must be 0 (engine rule).

| Strategy | Config | Cash median | Prestige median | Prestige/yr | Careers with negative-cash weeks | →6 gate met (Prestige ≥ 200) · median film # | →6 bought · median film # | →6 cash-rich but Prestige-locked | →6 bought below gate | →8 gate met (Prestige ≥ 1000) · median film # | →8 bought · median film # | →8 cash-rich but Prestige-locked | →8 bought below gate |
|---|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|
| balanced | curves_off | $26.28M | 20800 | 693.3 | 70% | 100% · #7 | 100% · #7 | 100% | 0 | 100% · #11 | 100% · #11 | 100% | 0 |
| tv-first | curves_off | $28.11M | 8360 | 278.7 | 74% | 100% · #7 | 100% · #7 | 100% | 0 | 100% · #11 | 100% · #12 | 100% | 0 |
| mixed | curves_off | $30.02M | 13737.5 | 457.9 | 73% | 100% · #7 | 100% · #7 | 100% | 0 | 100% · #12 | 100% · #12 | 100% | 0 |
| streaming-pivot | curves_off | $7.25M | 9850 | 328.3 | 65% | 100% · #7 | 100% · #7 | 100% | 0 | 100% · #12 | 100% · #12 | 100% | 0 |
| limited-focus | curves_off | $28.16M | 15932.5 | 531.1 | 52% | 100% · #7 | 100% · #7 | 100% | 0 | 100% · #12 | 100% · #12 | 100% | 0 |
| balanced | combo_B | $26.12M | 16297.5 | 543.3 | 70% | 100% · #7 | 100% · #7 | 100% | 0 | 100% · #11 | 100% · #11 | 100% | 0 |
| tv-first | combo_B | $26.73M | 6840 | 228 | 74% | 100% · #7 | 100% · #7 | 100% | 0 | 100% · #11 | 100% · #12 | 100% | 0 |
| mixed | combo_B | $27.57M | 10447.5 | 348.3 | 73% | 100% · #7 | 100% · #7 | 100% | 0 | 100% · #12 | 100% · #12 | 100% | 0 |
| streaming-pivot | combo_B | $6.00M | 7865 | 262.2 | 65% | 100% · #7 | 100% · #7 | 100% | 0 | 100% · #12 | 100% · #12 | 100% | 0 |
| limited-focus | combo_B | $27.35M | 12757.5 | 425.3 | 52% | 100% · #7 | 100% · #7 | 100% | 0 | 100% · #12 | 100% · #12 | 100% | 0 |
| balanced | combo_D | $26.09M | 15170 | 505.7 | 70% | 100% · #7 | 100% · #7 | 100% | 0 | 100% · #11 | 100% · #11 | 100% | 0 |
| tv-first | combo_D | $26.99M | 6605 | 220.2 | 74% | 100% · #7 | 100% · #7 | 100% | 0 | 100% · #11 | 100% · #12 | 100% | 0 |
| mixed | combo_D | $26.81M | 9922.5 | 330.8 | 73% | 100% · #7 | 100% · #7 | 100% | 0 | 100% · #12 | 100% · #12 | 100% | 0 |
| streaming-pivot | combo_D | $5.60M | 7410 | 247 | 65% | 100% · #7 | 100% · #7 | 100% | 0 | 100% · #12 | 100% · #12 | 100% | 0 |
| limited-focus | combo_D | $27.22M | 11560 | 385.3 | 52% | 100% · #7 | 100% · #7 | 100% | 0 | 100% · #12 | 100% · #12 | 100% | 0 |

### Prestige milestones awarded per career (mean)

| Strategy | Variant | audience_7_5 | critic_8_5 | first_hall_of_fame | hall_of_fame | ip_gross_1m | ip_gross_5m | ip_viewers_500k | meters_all_70 | careers > 400 Prestige/yr (OUTDATED threshold) |
|---|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|
| balanced | curves_off | 82.44 | 45.69 | 1 | 24.06 | 3.52 | 1.99 | 3.52 | 91.61 | 100% |
| balanced | combo_B | 80.22 | 25.12 | 1 | 11.23 | 3.9 | 2.21 | 3.9 | 91.61 | 100% |
| balanced | combo_D | 80.75 | 17.66 | 0.99 | 8.05 | 4.08 | 2.34 | 4.08 | 91.61 | 100% |
| tv-first | curves_off | 28.61 | 12.95 | 0.94 | 5.85 | 4.96 | 4.67 | 4.92 | 37.77 | 0% |
| tv-first | combo_B | 27.54 | 5.86 | 0.67 | 2.11 | 5 | 4.71 | 4.96 | 38.06 | 0% |
| tv-first | combo_D | 27.84 | 4.38 | 0.53 | 1.36 | 4.99 | 4.76 | 4.96 | 38.26 | 0% |
| mixed | curves_off | 52.91 | 29.39 | 1 | 15.51 | 4.42 | 2.85 | 3.01 | 57.16 | 94% |
| mixed | combo_B | 51.65 | 15.03 | 1 | 5.61 | 4.39 | 2.74 | 3.06 | 57.3 | 5% |
| mixed | combo_D | 51.91 | 11.37 | 0.98 | 3.98 | 4.41 | 2.74 | 3.1 | 57.47 | 0% |
| streaming-pivot | curves_off | 39.97 | 21.5 | 1 | 10.52 | 0 | 0 | 4.01 | 44.45 | 6% |
| streaming-pivot | combo_B | 38.85 | 12.47 | 1 | 5.02 | 0 | 0 | 4.02 | 44.54 | 0% |
| streaming-pivot | combo_D | 38.69 | 10.03 | 0.99 | 4.12 | 0 | 0 | 4.02 | 44.66 | 0% |
| limited-focus | curves_off | 72.77 | 35.77 | 1 | 15.49 | 2.92 | 0 | 0 | 80.15 | 100% |
| limited-focus | combo_B | 68.39 | 20.02 | 1 | 7.95 | 2.11 | 0 | 0 | 80.15 | 75% |
| limited-focus | combo_D | 68.42 | 13.13 | 0.99 | 5.38 | 1.89 | 0 | 0 | 80.15 | 33% |

### Gate 3 design trade-offs by strategy

(a) money · (b) Prestige · (c) time to TV / streaming · (d) successful IPs · (e) Hall of Fame · (f) last-12-month revenue mix · (g) solvency. Medians unless noted; shares are of careers.

| Strategy | Config | (a) cash median | min cash | ever negative | (b) Prestige | (c) TV unlock yr (share) | streaming live yr (share) | subs end | payback yrs (share) | (d) IPs ≥10K fans | shows · seasons · max | (e) HoF / career | (f) last-12-mo mix: traditional / subs / opex | streaming share | releases |
|---|---|---:|---:|---:|---:|---|---|---:|---|---:|---|---:|---|---:|---:|
| balanced | curves_off | $26.28M | $-4K | 70% | 20,800 | — (0%) | — (0%) | — | — (0%) | 18.0 | 0.0 · 0.0 · 0.0 | 24.0 | $1.46M / $0.00M / $0.00M | — | 97 |
| tv-first | curves_off | $28.11M | $-4K | 74% | 8,360 | 2.7 (100%) | — (0%) | — | — (0%) | 4.0 | 5.0 · 36.0 · 8.0 | 6.0 | $1.31M / $0.00M / $0.00M | — | 44 |
| mixed | curves_off | $30.02M | $-3K | 73% | 13,738 | 2.7 (100%) | 7.3 (100%) | 89,785 | 1.9 (100%) | 8.0 | 4.0 · 19.0 · 6.0 | 15.0 | $0.44M / $2.32M / $-1.11M | 84% | 63 |
| streaming-pivot | curves_off | $7.25M | $-3K | 65% | 9,850 | 2.5 (100%) | 6.4 (100%) | 90,010 | 1.3 (100%) | 4.0 | 5.0 · 25.0 · 6.0 | 10.0 | $0.00M / $2.34M / $-1.12M | 100% | 50 |
| limited-focus | curves_off | $28.16M | $-1K | 52% | 15,933 | 2.7 (100%) | — (0%) | — | — (0%) | 8.0 | 0.0 · 0.0 · 0.0 | 15.0 | $1.40M / $0.00M / $0.00M | — | 86 |
| balanced | combo_B | $26.12M | $-4K | 70% | 16,298 | — (0%) | — (0%) | — | — (0%) | 13.0 | 0.0 · 0.0 · 0.0 | 11.0 | $1.46M / $0.00M / $0.00M | — | 97 |
| tv-first | combo_B | $26.73M | $-4K | 74% | 6,840 | 2.7 (100%) | — (0%) | — | — (0%) | 4.0 | 5.0 · 36.0 · 8.0 | 1.5 | $1.27M / $0.00M / $0.00M | — | 44 |
| mixed | combo_B | $27.57M | $-3K | 73% | 10,448 | 2.7 (100%) | 7.6 (100%) | 80,942 | 1.9 (100%) | 6.0 | 4.0 · 19.0 · 6.0 | 5.0 | $0.44M / $2.08M / $-1.04M | 83% | 63 |
| streaming-pivot | combo_B | $6.00M | $-3K | 65% | 7,865 | 2.5 (100%) | 6.4 (100%) | 82,505 | 1.1 (100%) | 4.0 | 5.0 · 25.0 · 6.0 | 5.0 | $0.00M / $2.16M / $-1.06M | 100% | 50 |
| limited-focus | combo_B | $27.35M | $-1K | 52% | 12,758 | 2.7 (100%) | — (0%) | — | — (0%) | 2.0 | 0.0 · 0.0 · 0.0 | 8.0 | $1.32M / $0.00M / $0.00M | — | 86 |
| balanced | combo_D | $26.09M | $-4K | 70% | 15,170 | — (0%) | — (0%) | — | — (0%) | 13.0 | 0.0 · 0.0 · 0.0 | 8.0 | $1.45M / $0.00M / $0.00M | — | 97 |
| tv-first | combo_D | $26.99M | $-4K | 74% | 6,605 | 2.7 (100%) | — (0%) | — | — (0%) | 4.0 | 5.0 · 36.0 · 8.0 | 1.0 | $1.28M / $0.00M / $0.00M | — | 44 |
| mixed | combo_D | $26.81M | $-3K | 73% | 9,923 | 2.7 (100%) | 7.6 (100%) | 78,814 | 1.9 (100%) | 6.0 | 4.0 · 19.0 · 6.0 | 4.0 | $0.45M / $2.01M / $-1.02M | 82% | 64 |
| streaming-pivot | combo_D | $5.60M | $-3K | 65% | 7,410 | 2.5 (100%) | 6.4 (100%) | 81,982 | 1.1 (100%) | 4.0 | 5.0 · 25.0 · 6.0 | 4.0 | $0.00M / $2.12M / $-1.05M | 100% | 50 |
| limited-focus | combo_D | $27.22M | $-1K | 52% | 11,560 | 2.7 (100%) | — (0%) | — | — (0%) | 2.0 | 0.0 · 0.0 · 0.0 | 5.0 | $1.32M / $0.00M / $0.00M | — | 86 |

### Formats: share of releases · mean score · HoF % · net per production week; Prestige sources

| Strategy | Config | limited_series: share · avg · HoF% · net/prod-wk | limited_series/original: share · avg · HoF% · net/prod-wk | movie: share · avg · HoF% · net/prod-wk | movie/original: share · avg · HoF% · net/prod-wk | tv: share · avg · HoF% · net/prod-wk | tv/original: share · avg · HoF% · net/prod-wk | Prestige by format | top Prestige sources |
|---|---|---|---|---|---|---|---|---|---|
| balanced | curves_off | — | — | 100% · 8.43 · 24.8% · $28.0K | — | — | — | movie 100% | audience_7_5 29.8%, hall_of_fame 23.2%, meters_all_70 22.1%, critic_8_5 18.7% |
| tv-first | curves_off | 16% · 7.17 · 0.6% · $20.9K | — | 2% · 5.6 · 0% · $9.9K | — | 82% · 8.07 · 16.2% · $30.0K | — | limited_series 4.6%, tv 95.4% | audience_7_5 25.7%, meters_all_70 22.7%, hall_of_fame 14%, critic_8_5 13.2% |
| mixed | curves_off | 28% · 8.09 · 18.4% · $27.1K | 12% · 8.81 · 34.9% · $-8.3K | 20% · 8.47 · 30% · $26.6K | 11% · 8.83 · 38.3% · $-7.6K | 19% · 8.28 · 14.3% · $30.8K | 11% · 8.4 · 22.9% · $-8.5K | limited_series 21.4%, tv 22.4%, movie 19.5%, limited_series/original 12.8%, movie/original 12.8%, tv/original 11% | audience_7_5 28.7%, hall_of_fame 22.4%, meters_all_70 20.6%, critic_8_5 18% |
| streaming-pivot | curves_off | — | — | 41% · 7.91 · 13.5% · $23.9K | 10% · 8.81 · 36.7% · $-7.6K | — | 49% · 8.45 · 24.3% · $-8.4K | movie 31.6%, movie/original 11.9%, tv/original 56.5% | audience_7_5 30.4%, meters_all_70 22.6%, hall_of_fame 21.4%, critic_8_5 18.5% |
| limited-focus | curves_off | 99% · 8.38 · 18.2% · $29.3K | — | 1% · 5.65 · 0% · $9.4K | — | — | — | limited_series 100% | audience_7_5 34.1%, meters_all_70 25.1%, hall_of_fame 19.4%, critic_8_5 19% |
| balanced | combo_B | — | — | 100% · 8.07 · 11.6% · $27.9K | — | — | — | movie 100% | audience_7_5 36.7%, meters_all_70 28%, hall_of_fame 13.7%, critic_8_5 13% |
| tv-first | combo_B | 16% · 7.17 · 0.6% · $20.9K | — | 2% · 5.6 · 0% · $9.9K | — | 82% · 7.7 · 5.7% · $29.2K | — | limited_series 5.6%, tv 94.4% | audience_7_5 29.9%, meters_all_70 27.6%, ip_viewers_500k 10.8%, ip_gross_5m 10.2% |
| mixed | combo_B | 28% · 7.89 · 8.3% · $26.9K | 12% · 8.29 · 11.5% · $-8.3K | 20% · 8.15 · 14.3% · $26.5K | 11% · 8.31 · 11.6% · $-7.5K | 19% · 7.92 · 3.5% · $30.3K | 11% · 7.82 · 4% · $-8.5K | limited_series 22.8%, tv 24.9%, movie 19.9%, limited_series/original 11.4%, movie/original 11.1%, tv/original 9.8% | audience_7_5 36.7%, meters_all_70 27.2%, critic_8_5 12.1%, hall_of_fame 10.6% |
| streaming-pivot | combo_B | — | — | 41% · 7.9 · 12.6% · $23.9K | 10% · 8.36 · 15.2% · $-7.6K | — | 49% · 7.93 · 6.8% · $-8.3K | movie 38.7%, movie/original 10.8%, tv/original 50.5% | audience_7_5 36.8%, meters_all_70 28.2%, critic_8_5 13.4%, hall_of_fame 12.7% |
| limited-focus | combo_B | 99% · 8 · 9.4% · $28.8K | — | 1% · 5.65 · 0% · $9.4K | — | — | — | limited_series 100% | audience_7_5 40.3%, meters_all_70 31.5%, critic_8_5 13.4%, hall_of_fame 12.5% |
| balanced | combo_D | — | — | 100% · 8.01 · 8.3% · $27.9K | — | — | — | movie 100% | audience_7_5 39.8%, meters_all_70 30.1%, hall_of_fame 10.6%, critic_8_5 9.9% |
| tv-first | combo_D | 16% · 7.17 · 0.6% · $20.9K | — | 2% · 5.6 · 0% · $9.9K | — | 82% · 7.62 · 3.7% · $29.1K | — | limited_series 5.8%, tv 94.2% | audience_7_5 31.4%, meters_all_70 28.7%, ip_viewers_500k 11.2%, ip_gross_5m 10.7% |
| mixed | combo_D | 28% · 7.85 · 5.9% · $26.8K | 12% · 8.2 · 7.8% · $-8.2K | 20% · 8.08 · 10.7% · $26.5K | 11% · 8.22 · 7.8% · $-7.4K | 19% · 7.84 · 2.5% · $30.2K | 11% · 7.75 · 2.7% · $-8.4K | limited_series 22.6%, tv 26%, movie 19.6%, limited_series/original 11%, movie/original 10.9%, tv/original 9.9% | audience_7_5 39.2%, meters_all_70 28.9%, critic_8_5 9.7%, hall_of_fame 8% |
| streaming-pivot | combo_D | — | — | 41% · 7.88 · 11.9% · $23.9K | 10% · 8.29 · 11.2% · $-7.5K | — | 49% · 7.83 · 4.5% · $-8.3K | movie 40%, movie/original 10.3%, tv/original 49.6% | audience_7_5 38.6%, meters_all_70 29.7%, critic_8_5 11.3%, hall_of_fame 11% |
| limited-focus | combo_D | 99% · 7.93 · 6.3% · $28.7K | — | 1% · 5.65 · 0% · $9.4K | — | — | — | limited_series 100% | audience_7_5 44.2%, meters_all_70 34.5%, critic_8_5 9.6%, hall_of_fame 9.3% |

### Gate 3 provisional flags

| Variant | Flag | Fired | Evidence |
|---|---|---|---|
| curves_off | STREAMING_INFINITE_GROWTH | **yes** | 31/400 launched careers reached ≥90% of the reachable subscriber market (growth is capped by design; this flags saturation) [PROVISIONAL threshold] |
| curves_off | SUBSCRIBER_CHURN_SPIRAL | no | not fired: 0/400 launched careers lost >60% of subscribers within 3 years [PROVISIONAL threshold] |
| curves_off | TV_SEASON_TOO_PROFITABLE | no | not fired: 0/9393 finished traditional TV seasons netted >2× the batch's pooled movie net per production week ($26,952) [PROVISIONAL threshold] |
| curves_off | TV_SEASON_TOO_LONG | no | not fired: 0 careers kept one show running ≥12 seasons (fatigue cap 0.35 may allow endless renewals) [PROVISIONAL threshold] |
| curves_off | TV_NO_RENEWAL_PATH | no | not fired: 0/400 TV careers never made a second season [PROVISIONAL threshold] |
| curves_off | MIXED_ECONOMY_SOFTLOCK | no | not fired: 0/1000 careers spent ≥3 years with negative cash [PROVISIONAL threshold] |
| curves_off | FORMAT_DOMINANT | no | not fired: best cash: mixed; best Prestige: balanced; fires only if one strategy leads both by >50% [PROVISIONAL threshold] |
| curves_off | DELAYED_STUDIO_PROGRESSION | no | not fired: TV not unlocked by year 8: 0/400; streaming not live by year 15: 0/400 [PROVISIONAL threshold] |
| combo_B | STREAMING_INFINITE_GROWTH | **yes** | 5/400 launched careers reached ≥90% of the reachable subscriber market (growth is capped by design; this flags saturation) [PROVISIONAL threshold] |
| combo_B | SUBSCRIBER_CHURN_SPIRAL | no | not fired: 0/400 launched careers lost >60% of subscribers within 3 years [PROVISIONAL threshold] |
| combo_B | TV_SEASON_TOO_PROFITABLE | no | not fired: 0/9466 finished traditional TV seasons netted >2× the batch's pooled movie net per production week ($26,891) [PROVISIONAL threshold] |
| combo_B | TV_SEASON_TOO_LONG | no | not fired: 0 careers kept one show running ≥12 seasons (fatigue cap 0.35 may allow endless renewals) [PROVISIONAL threshold] |
| combo_B | TV_NO_RENEWAL_PATH | no | not fired: 0/400 TV careers never made a second season [PROVISIONAL threshold] |
| combo_B | MIXED_ECONOMY_SOFTLOCK | no | not fired: 0/1000 careers spent ≥3 years with negative cash [PROVISIONAL threshold] |
| combo_B | FORMAT_DOMINANT | no | not fired: best cash: mixed; best Prestige: balanced; fires only if one strategy leads both by >50% [PROVISIONAL threshold] |
| combo_B | DELAYED_STUDIO_PROGRESSION | no | not fired: TV not unlocked by year 8: 0/400; streaming not live by year 15: 0/400 [PROVISIONAL threshold] |
| combo_D | STREAMING_INFINITE_GROWTH | **yes** | 5/400 launched careers reached ≥90% of the reachable subscriber market (growth is capped by design; this flags saturation) [PROVISIONAL threshold] |
| combo_D | SUBSCRIBER_CHURN_SPIRAL | no | not fired: 0/400 launched careers lost >60% of subscribers within 3 years [PROVISIONAL threshold] |
| combo_D | TV_SEASON_TOO_PROFITABLE | no | not fired: 0/9535 finished traditional TV seasons netted >2× the batch's pooled movie net per production week ($26,903) [PROVISIONAL threshold] |
| combo_D | TV_SEASON_TOO_LONG | no | not fired: 0 careers kept one show running ≥12 seasons (fatigue cap 0.35 may allow endless renewals) [PROVISIONAL threshold] |
| combo_D | TV_NO_RENEWAL_PATH | no | not fired: 0/400 TV careers never made a second season [PROVISIONAL threshold] |
| combo_D | MIXED_ECONOMY_SOFTLOCK | no | not fired: 0/1000 careers spent ≥3 years with negative cash [PROVISIONAL threshold] |
| combo_D | FORMAT_DOMINANT | no | not fired: best cash: limited-focus; best Prestige: balanced; fires only if one strategy leads both by >50% [PROVISIONAL threshold] |
| combo_D | DELAYED_STUDIO_PROGRESSION | no | not fired: TV not unlocked by year 8: 0/400; streaming not live by year 15: 0/400 [PROVISIONAL threshold] |

### Diagnostic flags fired

| Variant | Fired |
|---|---|
| curves_off | PRESTIGE_TOO_FAST, QUALITY_INFLATION, DEAD_STRATEGY, HIGH_REVIEWS_UNEXPLAINED_LOW_SALES |
| combo_B | PRESTIGE_TOO_FAST, DEAD_STRATEGY, HIGH_REVIEWS_UNEXPLAINED_LOW_SALES |
| combo_D | PRESTIGE_TOO_FAST, DEAD_STRATEGY, HIGH_REVIEWS_UNEXPLAINED_LOW_SALES |
