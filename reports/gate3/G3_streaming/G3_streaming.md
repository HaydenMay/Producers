# Experiment: G3_streaming

> **Simulation assumptions, not design locks.** Paired seeds: every variant runs the same seeds and strategies; only the config overrides differ.

Streaming sensitivity: acquisition vs churn vs catalog retention vs price, one dimension at a time (all TEST ASSUMPTIONS).

- Seeds 1–200 (200) · strategies: streaming-pivot, mixed, traditional-holdout, balanced · reference variant: **stream_control**
- Ruleset v9.61-gate3-0.1 · measured runtime 483786 ms for 8000 careers

| Variant | Config hash | Note |
|---|---|---|
| stream_control | c5b8632a |  `{}` |
| acquisition_x1.5 | 6b403a9c |  `{"streaming":{"originalConversion":0.525}}` |
| churn_x1.5 | 7bcbe6e7 |  `{"streaming":{"churn":{"basePerWeek":0.018}}}` |
| catalog_retention_0.8 | 5b01bf6c |  `{"streaming":{"churn":{"retentionMax":0.8}}}` |
| fee_x1.5 | d2a7c582 |  `{"streaming":{"feePerSubWeek":0.75}}` |

## 15-year careers (in-game calendar horizon; productions vary by strategy)

Invariant violations across all variants: **0**.

### Medians by strategy

| Strategy | Variant | endCash | prestige | prestigePerRelease | meanAudience | meanCritic | share8plus | share9plus | shareLate8plus | hofShare | maxStaffEnd | staffCount | meanStaffStat | upgrades | firstUpgradeWeek | years | maxIpFans | negativeCashWeeks |
|---|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|
| streaming-pivot | stream_control | $4118K | 5640 | 178.90 | 8.20 | 8.09 | 65% | 18% | 85% | 18% | 8 | 8 | 86.20 | 2 | 112 | 15 | 43834.50 | 2 |
| streaming-pivot | acquisition_x1.5 | $5542K | 5640 | 178.90 | 8.20 | 8.09 | 65% | 18% | 85% | 18% | 8 | 8 | 86.20 | 2 | 112 | 15 | 43834.50 | 2 |
| streaming-pivot | churn_x1.5 | $2765K | 5640 | 178.90 | 8.20 | 8.09 | 65% | 18% | 85% | 18% | 8 | 8 | 86.20 | 2 | 112 | 15 | 43834.50 | 2 |
| streaming-pivot | catalog_retention_0.8 | $4861K | 5640 | 178.90 | 8.20 | 8.09 | 65% | 18% | 85% | 18% | 8 | 8 | 86.20 | 2 | 112 | 15 | 43834.50 | 2 |
| streaming-pivot | fee_x1.5 | $13201K | 5640 | 178.90 | 8.20 | 8.09 | 65% | 18% | 85% | 18% | 8 | 8 | 86.20 | 2 | 112 | 15 | 43834.50 | 2 |
| mixed | stream_control | $11545K | 6847.50 | 199.65 | 8.24 | 8.11 | 67% | 21% | 86% | 21% | 8 | 8 | 87.90 | 2 | 124 | 15 | 46250 | 2 |
| mixed | acquisition_x1.5 | $12662K | 6847.50 | 199.65 | 8.24 | 8.11 | 67% | 21% | 86% | 21% | 8 | 8 | 87.90 | 2 | 124 | 15 | 46250 | 2 |
| mixed | churn_x1.5 | $10457K | 6847.50 | 199.65 | 8.24 | 8.11 | 67% | 21% | 86% | 21% | 8 | 8 | 87.90 | 2 | 124 | 15 | 46250 | 2 |
| mixed | catalog_retention_0.8 | $12164K | 6847.50 | 199.65 | 8.24 | 8.11 | 67% | 21% | 86% | 21% | 8 | 8 | 87.90 | 2 | 124 | 15 | 46250 | 2 |
| mixed | fee_x1.5 | $18356K | 6847.50 | 199.65 | 8.24 | 8.11 | 67% | 21% | 86% | 21% | 8 | 8 | 87.90 | 2 | 124 | 15 | 46250 | 2 |
| traditional-holdout | stream_control | $12012K | 5655 | 195.30 | 8.08 | 7.99 | 59% | 15% | 83% | 15% | 8 | 8 | 85.90 | 2 | 114 | 15 | 79144.50 | 2 |
| traditional-holdout | acquisition_x1.5 | $12012K | 5655 | 195.30 | 8.08 | 7.99 | 59% | 15% | 83% | 15% | 8 | 8 | 85.90 | 2 | 114 | 15 | 79144.50 | 2 |
| traditional-holdout | churn_x1.5 | $12012K | 5655 | 195.30 | 8.08 | 7.99 | 59% | 15% | 83% | 15% | 8 | 8 | 85.90 | 2 | 114 | 15 | 79144.50 | 2 |
| traditional-holdout | catalog_retention_0.8 | $12012K | 5655 | 195.30 | 8.08 | 7.99 | 59% | 15% | 83% | 15% | 8 | 8 | 85.90 | 2 | 114 | 15 | 79144.50 | 2 |
| traditional-holdout | fee_x1.5 | $12012K | 5655 | 195.30 | 8.08 | 7.99 | 59% | 15% | 83% | 15% | 8 | 8 | 85.90 | 2 | 114 | 15 | 79144.50 | 2 |
| balanced | stream_control | $11840K | 10605 | 220.95 | 8.41 | 8.33 | 73% | 29% | 80% | 29% | 8 | 8 | 95.80 | 2 | 112 | 15 | 94302 | 2 |
| balanced | acquisition_x1.5 | $11840K | 10605 | 220.95 | 8.41 | 8.33 | 73% | 29% | 80% | 29% | 8 | 8 | 95.80 | 2 | 112 | 15 | 94302 | 2 |
| balanced | churn_x1.5 | $11840K | 10605 | 220.95 | 8.41 | 8.33 | 73% | 29% | 80% | 29% | 8 | 8 | 95.80 | 2 | 112 | 15 | 94302 | 2 |
| balanced | catalog_retention_0.8 | $11840K | 10605 | 220.95 | 8.41 | 8.33 | 73% | 29% | 80% | 29% | 8 | 8 | 95.80 | 2 | 112 | 15 | 94302 | 2 |
| balanced | fee_x1.5 | $11840K | 10605 | 220.95 | 8.41 | 8.33 | 73% | 29% | 80% | 29% | 8 | 8 | 95.80 | 2 | 112 | 15 | 94302 | 2 |

### Paired deltas vs **stream_control** (median of per-seed differences; share of seeds where the variant is higher)

| Strategy | Variant | Δ endCash | Δ prestige | Δ share8plus | Δ meanAudience |
|---|---|---:|---:|---:|---:|
| streaming-pivot | acquisition_x1.5 | $1404K (100%) | 0 (0%) | 0% (0%) | 0 (0%) |
| streaming-pivot | churn_x1.5 | $-1373K (0%) | 0 (0%) | 0% (0%) | 0 (0%) |
| streaming-pivot | catalog_retention_0.8 | $745K (100%) | 0 (0%) | 0% (0%) | 0 (0%) |
| streaming-pivot | fee_x1.5 | $9149K (100%) | 0 (0%) | 0% (0%) | 0 (0%) |
| mixed | acquisition_x1.5 | $1225K (100%) | 0 (0%) | 0% (0%) | 0 (0%) |
| mixed | churn_x1.5 | $-1108K (0%) | 0 (0%) | 0% (0%) | 0 (0%) |
| mixed | catalog_retention_0.8 | $694K (100%) | 0 (0%) | 0% (0%) | 0 (0%) |
| mixed | fee_x1.5 | $7045K (100%) | 0 (0%) | 0% (0%) | 0 (0%) |
| traditional-holdout | acquisition_x1.5 | $0K (0%) | 0 (0%) | 0% (0%) | 0 (0%) |
| traditional-holdout | churn_x1.5 | $0K (0%) | 0 (0%) | 0% (0%) | 0 (0%) |
| traditional-holdout | catalog_retention_0.8 | $0K (0%) | 0 (0%) | 0% (0%) | 0 (0%) |
| traditional-holdout | fee_x1.5 | $0K (0%) | 0 (0%) | 0% (0%) | 0 (0%) |
| balanced | acquisition_x1.5 | $0K (0%) | 0 (0%) | 0% (0%) | 0 (0%) |
| balanced | churn_x1.5 | $0K (0%) | 0 (0%) | 0% (0%) | 0 (0%) |
| balanced | catalog_retention_0.8 | $0K (0%) | 0 (0%) | 0% (0%) | 0 (0%) |
| balanced | fee_x1.5 | $0K (0%) | 0 (0%) | 0% (0%) | 0 (0%) |

### Mean review score (avg of Audience+Critic) by production index

| Strategy | Variant | #1 | #3 | #5 | #10 | #20 | #30 | #50 |
|---|---|---:|---:|---:|---:|---:|---:|---:|
| streaming-pivot | stream_control | 5.67 | 6.33 | 7.35 | 8.29 | 8.69 | 8.65 | — |
| streaming-pivot | acquisition_x1.5 | 5.67 | 6.33 | 7.35 | 8.29 | 8.69 | 8.65 | — |
| streaming-pivot | churn_x1.5 | 5.67 | 6.33 | 7.35 | 8.29 | 8.69 | 8.65 | — |
| streaming-pivot | catalog_retention_0.8 | 5.67 | 6.33 | 7.35 | 8.29 | 8.69 | 8.65 | — |
| streaming-pivot | fee_x1.5 | 5.67 | 6.33 | 7.35 | 8.29 | 8.69 | 8.65 | — |
| mixed | stream_control | 5.62 | 6.33 | 7.43 | 8.24 | 8.33 | 8.86 | — |
| mixed | acquisition_x1.5 | 5.62 | 6.33 | 7.43 | 8.24 | 8.33 | 8.86 | — |
| mixed | churn_x1.5 | 5.62 | 6.33 | 7.43 | 8.24 | 8.33 | 8.86 | — |
| mixed | catalog_retention_0.8 | 5.62 | 6.33 | 7.43 | 8.24 | 8.33 | 8.86 | — |
| mixed | fee_x1.5 | 5.62 | 6.33 | 7.43 | 8.24 | 8.33 | 8.86 | — |
| traditional-holdout | stream_control | 5.62 | 6.29 | 7.39 | 8.19 | 8.47 | 8.79 | — |
| traditional-holdout | acquisition_x1.5 | 5.62 | 6.29 | 7.39 | 8.19 | 8.47 | 8.79 | — |
| traditional-holdout | churn_x1.5 | 5.62 | 6.29 | 7.39 | 8.19 | 8.47 | 8.79 | — |
| traditional-holdout | catalog_retention_0.8 | 5.62 | 6.29 | 7.39 | 8.19 | 8.47 | 8.79 | — |
| traditional-holdout | fee_x1.5 | 5.62 | 6.29 | 7.39 | 8.19 | 8.47 | 8.79 | — |
| balanced | stream_control | 5.65 | 6.33 | 7.38 | 8.31 | 8.68 | 8.74 | — |
| balanced | acquisition_x1.5 | 5.65 | 6.33 | 7.38 | 8.31 | 8.68 | 8.74 | — |
| balanced | churn_x1.5 | 5.65 | 6.33 | 7.38 | 8.31 | 8.68 | 8.74 | — |
| balanced | catalog_retention_0.8 | 5.65 | 6.33 | 7.38 | 8.31 | 8.68 | 8.74 | — |
| balanced | fee_x1.5 | 5.65 | 6.33 | 7.38 | 8.31 | 8.68 | 8.74 | — |

### Great films — all strategies pooled, by release window

Denominators are films in that window. HoF = average of Audience and Critic ≥ hofThreshold (9.0). `≥9` is inclusive, `>9` strict.

| Strategy | Config | Window | Films (n) | Avg Aud | Avg Crit | HoF n (%) | Avg ≥9 n (%) | Avg >9 n (%) | Aud ≥9 n (%) | Crit ≥9 n (%) | 8+ n (%) | Careers with 0 HoF | HoF/career p10/p50/p90 | Best/career p10/p50/p90/p99 | Best combined movie | Prestige median |
|---|---|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---|---|---|---:|
| ALL | stream_control | 1-5 | 4000 | 6.46 | 6.51 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 131 (3.3%) | 100% of 800 | 0/0/0 | 7.07/7.6/8.09/8.54 | 8.77 "Midnight Protocol" (limited_series, A8.71/C8.82; mixed seed 87 #5, yr 1.7, critic gen 0) |  |
| ALL | stream_control | 6-20 | 12000 | 8.35 | 8.25 | 1846 (15.4%) | 1846 (15.4%) | 1779 (14.8%) | 2458 (20.5%) | 2428 (20.2%) | 8280 (69.0%) | 17% of 800 | 0/2/5 | 8.87/9.36/9.72/10 | 10.00 "Wild Legacy" (limited_series, A10/C10; mixed seed 21 #17, yr 6.0, critic gen 0) |  |
| ALL | stream_control | 21-50 | 12506 | 8.72 | 8.58 | 4484 (35.9%) | 4484 (35.9%) | 4373 (35.0%) | 5702 (45.6%) | 4993 (39.9%) | 10307 (82.4%) | 8% of 800 | 1/5/12 | 9.05/9.57/9.9/10 | 10.00 "Dead Protocol" (A10/C10; balanced seed 6 #32, yr 9.8, critic gen 0) |  |
| ALL | stream_control | 51-100 | 0 | NaN | NaN | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0% of 0 | — | — | — |  |
| ALL | stream_control | all | 28506 | 8.25 | 8.15 | 6330 (22.2%) | 6330 (22.2%) | 6152 (21.6%) | 8160 (28.6%) | 7421 (26.0%) | 18718 (65.7%) | 1% of 800 | 3/7/15 | 9.34/9.65/10/10 | 10.00 "Dead Protocol" (A10/C10; balanced seed 6 #32, yr 9.8, critic gen 0) |  |
| ALL | acquisition_x1.5 | 1-5 | 4000 | 6.46 | 6.51 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 131 (3.3%) | 100% of 800 | 0/0/0 | 7.07/7.6/8.09/8.54 | 8.77 "Midnight Protocol" (limited_series, A8.71/C8.82; mixed seed 87 #5, yr 1.7, critic gen 0) |  |
| ALL | acquisition_x1.5 | 6-20 | 12000 | 8.35 | 8.25 | 1846 (15.4%) | 1846 (15.4%) | 1779 (14.8%) | 2458 (20.5%) | 2428 (20.2%) | 8280 (69.0%) | 17% of 800 | 0/2/5 | 8.87/9.36/9.72/10 | 10.00 "Wild Legacy" (limited_series, A10/C10; mixed seed 21 #17, yr 6.0, critic gen 0) |  |
| ALL | acquisition_x1.5 | 21-50 | 12506 | 8.72 | 8.58 | 4484 (35.9%) | 4484 (35.9%) | 4373 (35.0%) | 5702 (45.6%) | 4993 (39.9%) | 10307 (82.4%) | 8% of 800 | 1/5/12 | 9.05/9.57/9.9/10 | 10.00 "Dead Protocol" (A10/C10; balanced seed 6 #32, yr 9.8, critic gen 0) |  |
| ALL | acquisition_x1.5 | 51-100 | 0 | NaN | NaN | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0% of 0 | — | — | — |  |
| ALL | acquisition_x1.5 | all | 28506 | 8.25 | 8.15 | 6330 (22.2%) | 6330 (22.2%) | 6152 (21.6%) | 8160 (28.6%) | 7421 (26.0%) | 18718 (65.7%) | 1% of 800 | 3/7/15 | 9.34/9.65/10/10 | 10.00 "Dead Protocol" (A10/C10; balanced seed 6 #32, yr 9.8, critic gen 0) |  |
| ALL | churn_x1.5 | 1-5 | 4000 | 6.46 | 6.51 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 131 (3.3%) | 100% of 800 | 0/0/0 | 7.07/7.6/8.09/8.54 | 8.77 "Midnight Protocol" (limited_series, A8.71/C8.82; mixed seed 87 #5, yr 1.7, critic gen 0) |  |
| ALL | churn_x1.5 | 6-20 | 12000 | 8.35 | 8.25 | 1846 (15.4%) | 1846 (15.4%) | 1779 (14.8%) | 2458 (20.5%) | 2428 (20.2%) | 8280 (69.0%) | 17% of 800 | 0/2/5 | 8.87/9.36/9.72/10 | 10.00 "Wild Legacy" (limited_series, A10/C10; mixed seed 21 #17, yr 6.0, critic gen 0) |  |
| ALL | churn_x1.5 | 21-50 | 12506 | 8.72 | 8.58 | 4484 (35.9%) | 4484 (35.9%) | 4373 (35.0%) | 5702 (45.6%) | 4993 (39.9%) | 10307 (82.4%) | 8% of 800 | 1/5/12 | 9.05/9.57/9.9/10 | 10.00 "Dead Protocol" (A10/C10; balanced seed 6 #32, yr 9.8, critic gen 0) |  |
| ALL | churn_x1.5 | 51-100 | 0 | NaN | NaN | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0% of 0 | — | — | — |  |
| ALL | churn_x1.5 | all | 28506 | 8.25 | 8.15 | 6330 (22.2%) | 6330 (22.2%) | 6152 (21.6%) | 8160 (28.6%) | 7421 (26.0%) | 18718 (65.7%) | 1% of 800 | 3/7/15 | 9.34/9.65/10/10 | 10.00 "Dead Protocol" (A10/C10; balanced seed 6 #32, yr 9.8, critic gen 0) |  |
| ALL | catalog_retention_0.8 | 1-5 | 4000 | 6.46 | 6.51 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 131 (3.3%) | 100% of 800 | 0/0/0 | 7.07/7.6/8.09/8.54 | 8.77 "Midnight Protocol" (limited_series, A8.71/C8.82; mixed seed 87 #5, yr 1.7, critic gen 0) |  |
| ALL | catalog_retention_0.8 | 6-20 | 12000 | 8.35 | 8.25 | 1846 (15.4%) | 1846 (15.4%) | 1779 (14.8%) | 2458 (20.5%) | 2428 (20.2%) | 8280 (69.0%) | 17% of 800 | 0/2/5 | 8.87/9.36/9.72/10 | 10.00 "Wild Legacy" (limited_series, A10/C10; mixed seed 21 #17, yr 6.0, critic gen 0) |  |
| ALL | catalog_retention_0.8 | 21-50 | 12506 | 8.72 | 8.58 | 4484 (35.9%) | 4484 (35.9%) | 4373 (35.0%) | 5702 (45.6%) | 4993 (39.9%) | 10307 (82.4%) | 8% of 800 | 1/5/12 | 9.05/9.57/9.9/10 | 10.00 "Dead Protocol" (A10/C10; balanced seed 6 #32, yr 9.8, critic gen 0) |  |
| ALL | catalog_retention_0.8 | 51-100 | 0 | NaN | NaN | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0% of 0 | — | — | — |  |
| ALL | catalog_retention_0.8 | all | 28506 | 8.25 | 8.15 | 6330 (22.2%) | 6330 (22.2%) | 6152 (21.6%) | 8160 (28.6%) | 7421 (26.0%) | 18718 (65.7%) | 1% of 800 | 3/7/15 | 9.34/9.65/10/10 | 10.00 "Dead Protocol" (A10/C10; balanced seed 6 #32, yr 9.8, critic gen 0) |  |
| ALL | fee_x1.5 | 1-5 | 4000 | 6.46 | 6.51 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 131 (3.3%) | 100% of 800 | 0/0/0 | 7.07/7.6/8.09/8.54 | 8.77 "Midnight Protocol" (limited_series, A8.71/C8.82; mixed seed 87 #5, yr 1.7, critic gen 0) |  |
| ALL | fee_x1.5 | 6-20 | 12000 | 8.35 | 8.25 | 1846 (15.4%) | 1846 (15.4%) | 1779 (14.8%) | 2458 (20.5%) | 2428 (20.2%) | 8280 (69.0%) | 17% of 800 | 0/2/5 | 8.87/9.36/9.72/10 | 10.00 "Wild Legacy" (limited_series, A10/C10; mixed seed 21 #17, yr 6.0, critic gen 0) |  |
| ALL | fee_x1.5 | 21-50 | 12506 | 8.72 | 8.58 | 4484 (35.9%) | 4484 (35.9%) | 4373 (35.0%) | 5702 (45.6%) | 4993 (39.9%) | 10307 (82.4%) | 8% of 800 | 1/5/12 | 9.05/9.57/9.9/10 | 10.00 "Dead Protocol" (A10/C10; balanced seed 6 #32, yr 9.8, critic gen 0) |  |
| ALL | fee_x1.5 | 51-100 | 0 | NaN | NaN | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0% of 0 | — | — | — |  |
| ALL | fee_x1.5 | all | 28506 | 8.25 | 8.15 | 6330 (22.2%) | 6330 (22.2%) | 6152 (21.6%) | 8160 (28.6%) | 7421 (26.0%) | 18718 (65.7%) | 1% of 800 | 3/7/15 | 9.34/9.65/10/10 | 10.00 "Dead Protocol" (A10/C10; balanced seed 6 #32, yr 9.8, critic gen 0) |  |

### Great films by strategy (whole career)

| Strategy | Config | Window | Films (n) | Avg Aud | Avg Crit | HoF n (%) | Avg ≥9 n (%) | Avg >9 n (%) | Aud ≥9 n (%) | Crit ≥9 n (%) | 8+ n (%) | Careers with 0 HoF | HoF/career p10/p50/p90 | Best/career p10/p50/p90/p99 | Best combined movie | Prestige median |
|---|---|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---|---|---|---:|
| streaming-pivot | stream_control | all | 6288 | 8.18 | 8.08 | 1190 (18.9%) | 1190 (18.9%) | 1163 (18.5%) | 1534 (24.4%) | 1421 (22.6%) | 3988 (63.4%) | 0% of 200 | 3/6/10 | 9.34/9.59/9.97/10 | 10.00 "Silver Night" (movie/original, A10/C10; streaming-pivot seed 9 #28, yr 11.1, critic gen 0) | 5640 |
| mixed | stream_control | all | 6865 | 8.24 | 8.12 | 1434 (20.9%) | 1434 (20.9%) | 1399 (20.4%) | 1962 (28.6%) | 1703 (24.8%) | 4512 (65.7%) | 1% of 200 | 4/7/10 | 9.4/9.65/9.88/10 | 10.00 "Last Rising" (A10/C10; mixed seed 9 #35, yr 14.7, critic gen 0) | 6847.5 |
| traditional-holdout | stream_control | all | 5753 | 8.06 | 7.97 | 930 (16.2%) | 930 (16.2%) | 909 (15.8%) | 1290 (22.4%) | 1121 (19.5%) | 3297 (57.3%) | 5% of 200 | 1/4/9 | 9.06/9.53/9.82/10 | 10.00 "Silver Night" (A10/C10; traditional-holdout seed 43 #26, yr 9.3, critic gen 0) | 5655 |
| balanced | stream_control | all | 9600 | 8.42 | 8.34 | 2776 (28.9%) | 2776 (28.9%) | 2681 (27.9%) | 3374 (35.1%) | 3176 (33.1%) | 6921 (72.1%) | 0% of 200 | 8/14/20 | 9.54/9.81/10/10 | 10.00 "Dead Protocol" (A10/C10; balanced seed 6 #32, yr 9.8, critic gen 0) | 10605 |
| streaming-pivot | acquisition_x1.5 | all | 6288 | 8.18 | 8.08 | 1190 (18.9%) | 1190 (18.9%) | 1163 (18.5%) | 1534 (24.4%) | 1421 (22.6%) | 3988 (63.4%) | 0% of 200 | 3/6/10 | 9.34/9.59/9.97/10 | 10.00 "Silver Night" (movie/original, A10/C10; streaming-pivot seed 9 #28, yr 11.1, critic gen 0) | 5640 |
| mixed | acquisition_x1.5 | all | 6865 | 8.24 | 8.12 | 1434 (20.9%) | 1434 (20.9%) | 1399 (20.4%) | 1962 (28.6%) | 1703 (24.8%) | 4512 (65.7%) | 1% of 200 | 4/7/10 | 9.4/9.65/9.88/10 | 10.00 "Last Rising" (A10/C10; mixed seed 9 #35, yr 14.7, critic gen 0) | 6847.5 |
| traditional-holdout | acquisition_x1.5 | all | 5753 | 8.06 | 7.97 | 930 (16.2%) | 930 (16.2%) | 909 (15.8%) | 1290 (22.4%) | 1121 (19.5%) | 3297 (57.3%) | 5% of 200 | 1/4/9 | 9.06/9.53/9.82/10 | 10.00 "Silver Night" (A10/C10; traditional-holdout seed 43 #26, yr 9.3, critic gen 0) | 5655 |
| balanced | acquisition_x1.5 | all | 9600 | 8.42 | 8.34 | 2776 (28.9%) | 2776 (28.9%) | 2681 (27.9%) | 3374 (35.1%) | 3176 (33.1%) | 6921 (72.1%) | 0% of 200 | 8/14/20 | 9.54/9.81/10/10 | 10.00 "Dead Protocol" (A10/C10; balanced seed 6 #32, yr 9.8, critic gen 0) | 10605 |
| streaming-pivot | churn_x1.5 | all | 6288 | 8.18 | 8.08 | 1190 (18.9%) | 1190 (18.9%) | 1163 (18.5%) | 1534 (24.4%) | 1421 (22.6%) | 3988 (63.4%) | 0% of 200 | 3/6/10 | 9.34/9.59/9.97/10 | 10.00 "Silver Night" (movie/original, A10/C10; streaming-pivot seed 9 #28, yr 11.1, critic gen 0) | 5640 |
| mixed | churn_x1.5 | all | 6865 | 8.24 | 8.12 | 1434 (20.9%) | 1434 (20.9%) | 1399 (20.4%) | 1962 (28.6%) | 1703 (24.8%) | 4512 (65.7%) | 1% of 200 | 4/7/10 | 9.4/9.65/9.88/10 | 10.00 "Last Rising" (A10/C10; mixed seed 9 #35, yr 14.7, critic gen 0) | 6847.5 |
| traditional-holdout | churn_x1.5 | all | 5753 | 8.06 | 7.97 | 930 (16.2%) | 930 (16.2%) | 909 (15.8%) | 1290 (22.4%) | 1121 (19.5%) | 3297 (57.3%) | 5% of 200 | 1/4/9 | 9.06/9.53/9.82/10 | 10.00 "Silver Night" (A10/C10; traditional-holdout seed 43 #26, yr 9.3, critic gen 0) | 5655 |
| balanced | churn_x1.5 | all | 9600 | 8.42 | 8.34 | 2776 (28.9%) | 2776 (28.9%) | 2681 (27.9%) | 3374 (35.1%) | 3176 (33.1%) | 6921 (72.1%) | 0% of 200 | 8/14/20 | 9.54/9.81/10/10 | 10.00 "Dead Protocol" (A10/C10; balanced seed 6 #32, yr 9.8, critic gen 0) | 10605 |
| streaming-pivot | catalog_retention_0.8 | all | 6288 | 8.18 | 8.08 | 1190 (18.9%) | 1190 (18.9%) | 1163 (18.5%) | 1534 (24.4%) | 1421 (22.6%) | 3988 (63.4%) | 0% of 200 | 3/6/10 | 9.34/9.59/9.97/10 | 10.00 "Silver Night" (movie/original, A10/C10; streaming-pivot seed 9 #28, yr 11.1, critic gen 0) | 5640 |
| mixed | catalog_retention_0.8 | all | 6865 | 8.24 | 8.12 | 1434 (20.9%) | 1434 (20.9%) | 1399 (20.4%) | 1962 (28.6%) | 1703 (24.8%) | 4512 (65.7%) | 1% of 200 | 4/7/10 | 9.4/9.65/9.88/10 | 10.00 "Last Rising" (A10/C10; mixed seed 9 #35, yr 14.7, critic gen 0) | 6847.5 |
| traditional-holdout | catalog_retention_0.8 | all | 5753 | 8.06 | 7.97 | 930 (16.2%) | 930 (16.2%) | 909 (15.8%) | 1290 (22.4%) | 1121 (19.5%) | 3297 (57.3%) | 5% of 200 | 1/4/9 | 9.06/9.53/9.82/10 | 10.00 "Silver Night" (A10/C10; traditional-holdout seed 43 #26, yr 9.3, critic gen 0) | 5655 |
| balanced | catalog_retention_0.8 | all | 9600 | 8.42 | 8.34 | 2776 (28.9%) | 2776 (28.9%) | 2681 (27.9%) | 3374 (35.1%) | 3176 (33.1%) | 6921 (72.1%) | 0% of 200 | 8/14/20 | 9.54/9.81/10/10 | 10.00 "Dead Protocol" (A10/C10; balanced seed 6 #32, yr 9.8, critic gen 0) | 10605 |
| streaming-pivot | fee_x1.5 | all | 6288 | 8.18 | 8.08 | 1190 (18.9%) | 1190 (18.9%) | 1163 (18.5%) | 1534 (24.4%) | 1421 (22.6%) | 3988 (63.4%) | 0% of 200 | 3/6/10 | 9.34/9.59/9.97/10 | 10.00 "Silver Night" (movie/original, A10/C10; streaming-pivot seed 9 #28, yr 11.1, critic gen 0) | 5640 |
| mixed | fee_x1.5 | all | 6865 | 8.24 | 8.12 | 1434 (20.9%) | 1434 (20.9%) | 1399 (20.4%) | 1962 (28.6%) | 1703 (24.8%) | 4512 (65.7%) | 1% of 200 | 4/7/10 | 9.4/9.65/9.88/10 | 10.00 "Last Rising" (A10/C10; mixed seed 9 #35, yr 14.7, critic gen 0) | 6847.5 |
| traditional-holdout | fee_x1.5 | all | 5753 | 8.06 | 7.97 | 930 (16.2%) | 930 (16.2%) | 909 (15.8%) | 1290 (22.4%) | 1121 (19.5%) | 3297 (57.3%) | 5% of 200 | 1/4/9 | 9.06/9.53/9.82/10 | 10.00 "Silver Night" (A10/C10; traditional-holdout seed 43 #26, yr 9.3, critic gen 0) | 5655 |
| balanced | fee_x1.5 | all | 9600 | 8.42 | 8.34 | 2776 (28.9%) | 2776 (28.9%) | 2681 (27.9%) | 3374 (35.1%) | 3176 (33.1%) | 6921 (72.1%) | 0% of 200 | 8/14/20 | 9.54/9.81/10/10 | 10.00 "Dead Protocol" (A10/C10; balanced seed 6 #32, yr 9.8, critic gen 0) | 10605 |

### Greatest single films (all strategies, whole sample; reproducible from seed + config hash)

| Variant | Best combined | Best Audience | Best Critic | Year band with most HoF |
|---|---|---|---|---|
| stream_control | 10.00 "Dead Protocol" (A10/C10; balanced seed 6 #32, yr 9.8, critic gen 0) | 10.00 "Dead Protocol" (A10/C10; balanced seed 6 #32, yr 9.8, critic gen 0) | 10.00 "Dead Protocol" (A10/C10; balanced seed 6 #32, yr 9.8, critic gen 0) | y15-20: 57.1% of 7 |
| acquisition_x1.5 | 10.00 "Dead Protocol" (A10/C10; balanced seed 6 #32, yr 9.8, critic gen 0) | 10.00 "Dead Protocol" (A10/C10; balanced seed 6 #32, yr 9.8, critic gen 0) | 10.00 "Dead Protocol" (A10/C10; balanced seed 6 #32, yr 9.8, critic gen 0) | y15-20: 57.1% of 7 |
| churn_x1.5 | 10.00 "Dead Protocol" (A10/C10; balanced seed 6 #32, yr 9.8, critic gen 0) | 10.00 "Dead Protocol" (A10/C10; balanced seed 6 #32, yr 9.8, critic gen 0) | 10.00 "Dead Protocol" (A10/C10; balanced seed 6 #32, yr 9.8, critic gen 0) | y15-20: 57.1% of 7 |
| catalog_retention_0.8 | 10.00 "Dead Protocol" (A10/C10; balanced seed 6 #32, yr 9.8, critic gen 0) | 10.00 "Dead Protocol" (A10/C10; balanced seed 6 #32, yr 9.8, critic gen 0) | 10.00 "Dead Protocol" (A10/C10; balanced seed 6 #32, yr 9.8, critic gen 0) | y15-20: 57.1% of 7 |
| fee_x1.5 | 10.00 "Dead Protocol" (A10/C10; balanced seed 6 #32, yr 9.8, critic gen 0) | 10.00 "Dead Protocol" (A10/C10; balanced seed 6 #32, yr 9.8, critic gen 0) | 10.00 "Dead Protocol" (A10/C10; balanced seed 6 #32, yr 9.8, critic gen 0) | y15-20: 57.1% of 7 |

### Great films by in-game year (all strategies pooled)

| Strategy | Config | Window | Films (n) | Avg Aud | Avg Crit | HoF n (%) | Avg ≥9 n (%) | Avg >9 n (%) | Aud ≥9 n (%) | Crit ≥9 n (%) | 8+ n (%) | Careers with 0 HoF | HoF/career p10/p50/p90 | Best/career p10/p50/p90/p99 | Best combined movie | Prestige median |
|---|---|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---|---|---|---:|
| ALL | stream_control | y0-5 | 11813 | 7.64 | 7.59 | 819 (6.9%) | 819 (6.9%) | 785 (6.7%) | 1268 (10.7%) | 1220 (10.3%) | 5091 (43.1%) | 46% of 800 | 0/1/3 | 8.5/9.04/9.59/9.97 | 10.00 "Midnight Storm" (A10/C10; streaming-pivot seed 56 #16, yr 4.9, critic gen 0) |  |
| ALL | stream_control | y5-10 | 8935 | 8.63 | 8.51 | 2608 (29.2%) | 2608 (29.2%) | 2537 (28.4%) | 3129 (35.0%) | 3035 (34.0%) | 7212 (80.7%) | 11% of 800 | 0/3/7 | 8.98/9.47/9.8/10 | 10.00 "Dead Protocol" (A10/C10; balanced seed 6 #32, yr 9.8, critic gen 0) |  |
| ALL | stream_control | y10-15 | 7751 | 8.74 | 8.60 | 2899 (37.4%) | 2899 (37.4%) | 2827 (36.5%) | 3758 (48.5%) | 3163 (40.8%) | 6408 (82.7%) | 16% of 800 | 0/3/7 | 8.82/9.53/9.88/10 | 10.00 "Silver Night" (movie/original, A10/C10; streaming-pivot seed 9 #28, yr 11.1, critic gen 0) |  |
| ALL | stream_control | y15-20 | 7 | 9.18 | 8.65 | 4 (57.1%) | 4 (57.1%) | 3 (42.9%) | 5 (71.4%) | 3 (42.9%) | 7 (100.0%) | 43% of 7 | 0/1/1 | 8.46/9/9.35/9.39 | 9.39 "Lost Run" (limited_series, A9.6/C9.18; traditional-holdout seed 21 #30, yr 15.0, critic gen 0) |  |
| ALL | acquisition_x1.5 | y0-5 | 11813 | 7.64 | 7.59 | 819 (6.9%) | 819 (6.9%) | 785 (6.7%) | 1268 (10.7%) | 1220 (10.3%) | 5091 (43.1%) | 46% of 800 | 0/1/3 | 8.5/9.04/9.59/9.97 | 10.00 "Midnight Storm" (A10/C10; streaming-pivot seed 56 #16, yr 4.9, critic gen 0) |  |
| ALL | acquisition_x1.5 | y5-10 | 8935 | 8.63 | 8.51 | 2608 (29.2%) | 2608 (29.2%) | 2537 (28.4%) | 3129 (35.0%) | 3035 (34.0%) | 7212 (80.7%) | 11% of 800 | 0/3/7 | 8.98/9.47/9.8/10 | 10.00 "Dead Protocol" (A10/C10; balanced seed 6 #32, yr 9.8, critic gen 0) |  |
| ALL | acquisition_x1.5 | y10-15 | 7751 | 8.74 | 8.60 | 2899 (37.4%) | 2899 (37.4%) | 2827 (36.5%) | 3758 (48.5%) | 3163 (40.8%) | 6408 (82.7%) | 16% of 800 | 0/3/7 | 8.82/9.53/9.88/10 | 10.00 "Silver Night" (movie/original, A10/C10; streaming-pivot seed 9 #28, yr 11.1, critic gen 0) |  |
| ALL | acquisition_x1.5 | y15-20 | 7 | 9.18 | 8.65 | 4 (57.1%) | 4 (57.1%) | 3 (42.9%) | 5 (71.4%) | 3 (42.9%) | 7 (100.0%) | 43% of 7 | 0/1/1 | 8.46/9/9.35/9.39 | 9.39 "Lost Run" (limited_series, A9.6/C9.18; traditional-holdout seed 21 #30, yr 15.0, critic gen 0) |  |
| ALL | churn_x1.5 | y0-5 | 11813 | 7.64 | 7.59 | 819 (6.9%) | 819 (6.9%) | 785 (6.7%) | 1268 (10.7%) | 1220 (10.3%) | 5091 (43.1%) | 46% of 800 | 0/1/3 | 8.5/9.04/9.59/9.97 | 10.00 "Midnight Storm" (A10/C10; streaming-pivot seed 56 #16, yr 4.9, critic gen 0) |  |
| ALL | churn_x1.5 | y5-10 | 8935 | 8.63 | 8.51 | 2608 (29.2%) | 2608 (29.2%) | 2537 (28.4%) | 3129 (35.0%) | 3035 (34.0%) | 7212 (80.7%) | 11% of 800 | 0/3/7 | 8.98/9.47/9.8/10 | 10.00 "Dead Protocol" (A10/C10; balanced seed 6 #32, yr 9.8, critic gen 0) |  |
| ALL | churn_x1.5 | y10-15 | 7751 | 8.74 | 8.60 | 2899 (37.4%) | 2899 (37.4%) | 2827 (36.5%) | 3758 (48.5%) | 3163 (40.8%) | 6408 (82.7%) | 16% of 800 | 0/3/7 | 8.82/9.53/9.88/10 | 10.00 "Silver Night" (movie/original, A10/C10; streaming-pivot seed 9 #28, yr 11.1, critic gen 0) |  |
| ALL | churn_x1.5 | y15-20 | 7 | 9.18 | 8.65 | 4 (57.1%) | 4 (57.1%) | 3 (42.9%) | 5 (71.4%) | 3 (42.9%) | 7 (100.0%) | 43% of 7 | 0/1/1 | 8.46/9/9.35/9.39 | 9.39 "Lost Run" (limited_series, A9.6/C9.18; traditional-holdout seed 21 #30, yr 15.0, critic gen 0) |  |
| ALL | catalog_retention_0.8 | y0-5 | 11813 | 7.64 | 7.59 | 819 (6.9%) | 819 (6.9%) | 785 (6.7%) | 1268 (10.7%) | 1220 (10.3%) | 5091 (43.1%) | 46% of 800 | 0/1/3 | 8.5/9.04/9.59/9.97 | 10.00 "Midnight Storm" (A10/C10; streaming-pivot seed 56 #16, yr 4.9, critic gen 0) |  |
| ALL | catalog_retention_0.8 | y5-10 | 8935 | 8.63 | 8.51 | 2608 (29.2%) | 2608 (29.2%) | 2537 (28.4%) | 3129 (35.0%) | 3035 (34.0%) | 7212 (80.7%) | 11% of 800 | 0/3/7 | 8.98/9.47/9.8/10 | 10.00 "Dead Protocol" (A10/C10; balanced seed 6 #32, yr 9.8, critic gen 0) |  |
| ALL | catalog_retention_0.8 | y10-15 | 7751 | 8.74 | 8.60 | 2899 (37.4%) | 2899 (37.4%) | 2827 (36.5%) | 3758 (48.5%) | 3163 (40.8%) | 6408 (82.7%) | 16% of 800 | 0/3/7 | 8.82/9.53/9.88/10 | 10.00 "Silver Night" (movie/original, A10/C10; streaming-pivot seed 9 #28, yr 11.1, critic gen 0) |  |
| ALL | catalog_retention_0.8 | y15-20 | 7 | 9.18 | 8.65 | 4 (57.1%) | 4 (57.1%) | 3 (42.9%) | 5 (71.4%) | 3 (42.9%) | 7 (100.0%) | 43% of 7 | 0/1/1 | 8.46/9/9.35/9.39 | 9.39 "Lost Run" (limited_series, A9.6/C9.18; traditional-holdout seed 21 #30, yr 15.0, critic gen 0) |  |
| ALL | fee_x1.5 | y0-5 | 11813 | 7.64 | 7.59 | 819 (6.9%) | 819 (6.9%) | 785 (6.7%) | 1268 (10.7%) | 1220 (10.3%) | 5091 (43.1%) | 46% of 800 | 0/1/3 | 8.5/9.04/9.59/9.97 | 10.00 "Midnight Storm" (A10/C10; streaming-pivot seed 56 #16, yr 4.9, critic gen 0) |  |
| ALL | fee_x1.5 | y5-10 | 8935 | 8.63 | 8.51 | 2608 (29.2%) | 2608 (29.2%) | 2537 (28.4%) | 3129 (35.0%) | 3035 (34.0%) | 7212 (80.7%) | 11% of 800 | 0/3/7 | 8.98/9.47/9.8/10 | 10.00 "Dead Protocol" (A10/C10; balanced seed 6 #32, yr 9.8, critic gen 0) |  |
| ALL | fee_x1.5 | y10-15 | 7751 | 8.74 | 8.60 | 2899 (37.4%) | 2899 (37.4%) | 2827 (36.5%) | 3758 (48.5%) | 3163 (40.8%) | 6408 (82.7%) | 16% of 800 | 0/3/7 | 8.82/9.53/9.88/10 | 10.00 "Silver Night" (movie/original, A10/C10; streaming-pivot seed 9 #28, yr 11.1, critic gen 0) |  |
| ALL | fee_x1.5 | y15-20 | 7 | 9.18 | 8.65 | 4 (57.1%) | 4 (57.1%) | 3 (42.9%) | 5 (71.4%) | 3 (42.9%) | 7 (100.0%) | 43% of 7 | 0/1/1 | 8.46/9/9.35/9.39 | 9.39 "Lost Run" (limited_series, A9.6/C9.18; traditional-holdout seed 21 #30, yr 15.0, critic gen 0) |  |

### Prestige progression (Prestige gates growth; cash sustains operations)

`cash-rich but Prestige-locked` = careers that at some week had the cash for the next upgrade but not the Prestige. `bought below gate` must be 0 (engine rule).

| Strategy | Config | Cash median | Prestige median | Prestige/yr | Careers with negative-cash weeks | →6 gate met (Prestige ≥ 200) · median film # | →6 bought · median film # | →6 cash-rich but Prestige-locked | →6 bought below gate | →8 gate met (Prestige ≥ 1000) · median film # | →8 bought · median film # | →8 cash-rich but Prestige-locked | →8 bought below gate |
|---|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|
| streaming-pivot | stream_control | $4.12M | 5640 | 376 | 65% | 100% · #7 | 100% · #7 | 100% | 0 | 100% · #12 | 100% · #12 | 100% | 0 |
| mixed | stream_control | $11.55M | 6847.5 | 456.5 | 73% | 100% · #7 | 100% · #7 | 100% | 0 | 100% · #12 | 100% · #12 | 100% | 0 |
| traditional-holdout | stream_control | $12.01M | 5655 | 377 | 73% | 100% · #7 | 100% · #7 | 100% | 0 | 100% · #11 | 100% · #12 | 100% | 0 |
| balanced | stream_control | $11.84M | 10605 | 707 | 70% | 100% · #7 | 100% · #7 | 100% | 0 | 100% · #11 | 100% · #11 | 100% | 0 |
| streaming-pivot | acquisition_x1.5 | $5.54M | 5640 | 376 | 65% | 100% · #7 | 100% · #7 | 100% | 0 | 100% · #12 | 100% · #12 | 100% | 0 |
| mixed | acquisition_x1.5 | $12.66M | 6847.5 | 456.5 | 73% | 100% · #7 | 100% · #7 | 100% | 0 | 100% · #12 | 100% · #12 | 100% | 0 |
| traditional-holdout | acquisition_x1.5 | $12.01M | 5655 | 377 | 73% | 100% · #7 | 100% · #7 | 100% | 0 | 100% · #11 | 100% · #12 | 100% | 0 |
| balanced | acquisition_x1.5 | $11.84M | 10605 | 707 | 70% | 100% · #7 | 100% · #7 | 100% | 0 | 100% · #11 | 100% · #11 | 100% | 0 |
| streaming-pivot | churn_x1.5 | $2.77M | 5640 | 376 | 65% | 100% · #7 | 100% · #7 | 100% | 0 | 100% · #12 | 100% · #12 | 100% | 0 |
| mixed | churn_x1.5 | $10.46M | 6847.5 | 456.5 | 73% | 100% · #7 | 100% · #7 | 100% | 0 | 100% · #12 | 100% · #12 | 100% | 0 |
| traditional-holdout | churn_x1.5 | $12.01M | 5655 | 377 | 73% | 100% · #7 | 100% · #7 | 100% | 0 | 100% · #11 | 100% · #12 | 100% | 0 |
| balanced | churn_x1.5 | $11.84M | 10605 | 707 | 70% | 100% · #7 | 100% · #7 | 100% | 0 | 100% · #11 | 100% · #11 | 100% | 0 |
| streaming-pivot | catalog_retention_0.8 | $4.86M | 5640 | 376 | 65% | 100% · #7 | 100% · #7 | 100% | 0 | 100% · #12 | 100% · #12 | 100% | 0 |
| mixed | catalog_retention_0.8 | $12.16M | 6847.5 | 456.5 | 73% | 100% · #7 | 100% · #7 | 100% | 0 | 100% · #12 | 100% · #12 | 100% | 0 |
| traditional-holdout | catalog_retention_0.8 | $12.01M | 5655 | 377 | 73% | 100% · #7 | 100% · #7 | 100% | 0 | 100% · #11 | 100% · #12 | 100% | 0 |
| balanced | catalog_retention_0.8 | $11.84M | 10605 | 707 | 70% | 100% · #7 | 100% · #7 | 100% | 0 | 100% · #11 | 100% · #11 | 100% | 0 |
| streaming-pivot | fee_x1.5 | $13.20M | 5640 | 376 | 65% | 100% · #7 | 100% · #7 | 100% | 0 | 100% · #12 | 100% · #12 | 100% | 0 |
| mixed | fee_x1.5 | $18.36M | 6847.5 | 456.5 | 73% | 100% · #7 | 100% · #7 | 100% | 0 | 100% · #12 | 100% · #12 | 100% | 0 |
| traditional-holdout | fee_x1.5 | $12.01M | 5655 | 377 | 73% | 100% · #7 | 100% · #7 | 100% | 0 | 100% · #11 | 100% · #12 | 100% | 0 |
| balanced | fee_x1.5 | $11.84M | 10605 | 707 | 70% | 100% · #7 | 100% · #7 | 100% | 0 | 100% · #11 | 100% · #11 | 100% | 0 |

### Prestige milestones awarded per career (mean)

| Strategy | Variant | audience_7_5 | critic_8_5 | first_hall_of_fame | hall_of_fame | ip_gross_1m | ip_gross_5m | ip_viewers_500k | meters_all_70 | careers > 400 Prestige/yr (OUTDATED threshold) |
|---|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|
| streaming-pivot | stream_control | 24.23 | 12.61 | 1 | 5.95 | 0 | 0 | 1.65 | 25.95 | 30% |
| streaming-pivot | acquisition_x1.5 | 24.23 | 12.61 | 1 | 5.95 | 0 | 0 | 1.65 | 25.95 | 30% |
| streaming-pivot | churn_x1.5 | 24.23 | 12.61 | 1 | 5.95 | 0 | 0 | 1.65 | 25.95 | 30% |
| streaming-pivot | catalog_retention_0.8 | 24.23 | 12.61 | 1 | 5.95 | 0 | 0 | 1.65 | 25.95 | 30% |
| streaming-pivot | fee_x1.5 | 24.23 | 12.61 | 1 | 5.95 | 0 | 0 | 1.65 | 25.95 | 30% |
| mixed | stream_control | 26.86 | 13.97 | 0.99 | 7.17 | 2.58 | 0.9 | 2 | 28.38 | 87% |
| mixed | acquisition_x1.5 | 26.86 | 13.97 | 0.99 | 7.17 | 2.58 | 0.9 | 2 | 28.38 | 87% |
| mixed | churn_x1.5 | 26.86 | 13.97 | 0.99 | 7.17 | 2.58 | 0.9 | 2 | 28.38 | 87% |
| mixed | catalog_retention_0.8 | 26.86 | 13.97 | 0.99 | 7.17 | 2.58 | 0.9 | 2 | 28.38 | 87% |
| mixed | fee_x1.5 | 26.86 | 13.97 | 0.99 | 7.17 | 2.58 | 0.9 | 2 | 28.38 | 87% |
| traditional-holdout | stream_control | 20.75 | 10.1 | 0.95 | 4.65 | 3.13 | 2.12 | 2.78 | 23.18 | 35% |
| traditional-holdout | acquisition_x1.5 | 20.75 | 10.1 | 0.95 | 4.65 | 3.13 | 2.12 | 2.78 | 23.18 | 35% |
| traditional-holdout | churn_x1.5 | 20.75 | 10.1 | 0.95 | 4.65 | 3.13 | 2.12 | 2.78 | 23.18 | 35% |
| traditional-holdout | catalog_retention_0.8 | 20.75 | 10.1 | 0.95 | 4.65 | 3.13 | 2.12 | 2.78 | 23.18 | 35% |
| traditional-holdout | fee_x1.5 | 20.75 | 10.1 | 0.95 | 4.65 | 3.13 | 2.12 | 2.78 | 23.18 | 35% |
| balanced | stream_control | 39.35 | 22.94 | 1 | 13.88 | 2.5 | 1.01 | 2.5 | 42.61 | 100% |
| balanced | acquisition_x1.5 | 39.35 | 22.94 | 1 | 13.88 | 2.5 | 1.01 | 2.5 | 42.61 | 100% |
| balanced | churn_x1.5 | 39.35 | 22.94 | 1 | 13.88 | 2.5 | 1.01 | 2.5 | 42.61 | 100% |
| balanced | catalog_retention_0.8 | 39.35 | 22.94 | 1 | 13.88 | 2.5 | 1.01 | 2.5 | 42.61 | 100% |
| balanced | fee_x1.5 | 39.35 | 22.94 | 1 | 13.88 | 2.5 | 1.01 | 2.5 | 42.61 | 100% |

### Gate 3 design trade-offs by strategy

(a) money · (b) Prestige · (c) time to TV / streaming · (d) successful IPs · (e) Hall of Fame · (f) last-12-month revenue mix · (g) solvency. Medians unless noted; shares are of careers.

| Strategy | Config | (a) cash median | min cash | ever negative | (b) Prestige | (c) TV unlock yr (share) | streaming live yr (share) | subs end | payback yrs (share) | (d) IPs ≥10K fans | shows · seasons · max | (e) HoF / career | (f) last-12-mo mix: traditional / subs / opex | streaming share | releases |
|---|---|---:|---:|---:|---:|---|---|---:|---|---:|---|---:|---|---:|---:|
| streaming-pivot | stream_control | $4.12M | $-3K | 65% | 5,640 | 2.5 (100%) | 6.4 (100%) | 86,226 | 1.3 (100%) | 4.0 | 2.0 · 9.0 · 6.0 | 6.0 | $0.00M / $2.20M / $-1.08M | 100% | 32 |
| mixed | stream_control | $11.55M | $-3K | 73% | 6,848 | 2.7 (100%) | 7.3 (100%) | 86,362 | 1.9 (100%) | 8.0 | 2.0 · 9.0 · 6.0 | 7.0 | $0.50M / $2.18M / $-1.07M | 81% | 34 |
| traditional-holdout | stream_control | $12.01M | $-4K | 73% | 5,655 | 2.5 (100%) | — (0%) | — | — (0%) | 5.0 | 3.0 · 15.0 · 6.0 | 4.0 | $1.32M / $0.00M / $0.00M | — | 29 |
| balanced | stream_control | $11.84M | $-4K | 70% | 10,605 | — (0%) | — (0%) | — | — (0%) | 19.0 | 0.0 · 0.0 · 0.0 | 14.0 | $1.36M / $0.00M / $0.00M | — | 48 |
| streaming-pivot | acquisition_x1.5 | $5.54M | $-3K | 65% | 5,640 | 2.5 (100%) | 6.4 (100%) | 95,196 | 1.2 (100%) | 4.0 | 2.0 · 9.0 · 6.0 | 6.0 | $0.00M / $2.44M / $-1.15M | 100% | 32 |
| mixed | acquisition_x1.5 | $12.66M | $-3K | 73% | 6,848 | 2.7 (100%) | 7.3 (100%) | 95,463 | 1.6 (100%) | 8.0 | 2.0 · 9.0 · 6.0 | 7.0 | $0.50M / $2.39M / $-1.13M | 82% | 34 |
| traditional-holdout | acquisition_x1.5 | $12.01M | $-4K | 73% | 5,655 | 2.5 (100%) | — (0%) | — | — (0%) | 5.0 | 3.0 · 15.0 · 6.0 | 4.0 | $1.32M / $0.00M / $0.00M | — | 29 |
| balanced | acquisition_x1.5 | $11.84M | $-4K | 70% | 10,605 | — (0%) | — (0%) | — | — (0%) | 19.0 | 0.0 · 0.0 · 0.0 | 14.0 | $1.36M / $0.00M / $0.00M | — | 48 |
| streaming-pivot | churn_x1.5 | $2.77M | $-3K | 65% | 5,640 | 2.5 (100%) | 6.4 (100%) | 75,092 | 1.4 (100%) | 4.0 | 2.0 · 9.0 · 6.0 | 6.0 | $0.00M / $1.92M / $-0.99M | 100% | 32 |
| mixed | churn_x1.5 | $10.46M | $-3K | 73% | 6,848 | 2.7 (100%) | 7.3 (100%) | 76,253 | 2.0 (100%) | 8.0 | 2.0 · 9.0 · 6.0 | 7.0 | $0.50M / $1.90M / $-0.99M | 79% | 34 |
| traditional-holdout | churn_x1.5 | $12.01M | $-4K | 73% | 5,655 | 2.5 (100%) | — (0%) | — | — (0%) | 5.0 | 3.0 · 15.0 · 6.0 | 4.0 | $1.32M / $0.00M / $0.00M | — | 29 |
| balanced | churn_x1.5 | $11.84M | $-4K | 70% | 10,605 | — (0%) | — (0%) | — | — (0%) | 19.0 | 0.0 · 0.0 · 0.0 | 14.0 | $1.36M / $0.00M / $0.00M | — | 48 |
| streaming-pivot | catalog_retention_0.8 | $4.86M | $-3K | 65% | 5,640 | 2.5 (100%) | 6.4 (100%) | 91,648 | 1.3 (100%) | 4.0 | 2.0 · 9.0 · 6.0 | 6.0 | $0.00M / $2.34M / $-1.12M | 100% | 32 |
| mixed | catalog_retention_0.8 | $12.16M | $-3K | 73% | 6,848 | 2.7 (100%) | 7.3 (100%) | 93,033 | 1.8 (100%) | 8.0 | 2.0 · 9.0 · 6.0 | 7.0 | $0.50M / $2.38M / $-1.13M | 82% | 34 |
| traditional-holdout | catalog_retention_0.8 | $12.01M | $-4K | 73% | 5,655 | 2.5 (100%) | — (0%) | — | — (0%) | 5.0 | 3.0 · 15.0 · 6.0 | 4.0 | $1.32M / $0.00M / $0.00M | — | 29 |
| balanced | catalog_retention_0.8 | $11.84M | $-4K | 70% | 10,605 | — (0%) | — (0%) | — | — (0%) | 19.0 | 0.0 · 0.0 · 0.0 | 14.0 | $1.36M / $0.00M / $0.00M | — | 48 |
| streaming-pivot | fee_x1.5 | $13.20M | $-3K | 65% | 5,640 | 2.5 (100%) | 6.4 (100%) | 86,226 | 0.9 (100%) | 4.0 | 2.0 · 9.0 · 6.0 | 6.0 | $0.00M / $3.31M / $-1.08M | 100% | 32 |
| mixed | fee_x1.5 | $18.36M | $-3K | 73% | 6,848 | 2.7 (100%) | 7.3 (100%) | 86,362 | 1.2 (100%) | 8.0 | 2.0 · 9.0 · 6.0 | 7.0 | $0.50M / $3.28M / $-1.07M | 87% | 34 |
| traditional-holdout | fee_x1.5 | $12.01M | $-4K | 73% | 5,655 | 2.5 (100%) | — (0%) | — | — (0%) | 5.0 | 3.0 · 15.0 · 6.0 | 4.0 | $1.32M / $0.00M / $0.00M | — | 29 |
| balanced | fee_x1.5 | $11.84M | $-4K | 70% | 10,605 | — (0%) | — (0%) | — | — (0%) | 19.0 | 0.0 · 0.0 · 0.0 | 14.0 | $1.36M / $0.00M / $0.00M | — | 48 |

### Formats: share of releases · mean score · HoF % · net per production week; Prestige sources

| Strategy | Config | limited_series: share · avg · HoF% · net/prod-wk | limited_series/original: share · avg · HoF% · net/prod-wk | movie: share · avg · HoF% · net/prod-wk | movie/original: share · avg · HoF% · net/prod-wk | tv: share · avg · HoF% · net/prod-wk | tv/original: share · avg · HoF% · net/prod-wk | Prestige by format | top Prestige sources |
|---|---|---|---|---|---|---|---|---|---|
| streaming-pivot | stream_control | — | — | 66% · 7.91 · 13.5% · $23.9K | 6% · 8.82 · 39.7% · $-7.5K | — | 28% · 8.5 · 26.9% · $-8.4K | movie 54.4%, movie/original 8.6%, tv/original 37% | audience_7_5 31.7%, meters_all_70 22.7%, hall_of_fame 20.8%, critic_8_5 18.7% |
| mixed | stream_control | 38% · 7.84 · 13.2% · $25.2K | 8% · 8.79 · 37.9% · $-8.2K | 22% · 8.23 · 27.1% · $25.2K | 7% · 8.81 · 42.2% · $-7.6K | 20% · 8.22 · 11.5% · $28.4K | 6% · 8.52 · 32.1% · $-8.4K | limited_series 26.1%, tv 25.2%, movie 22.4%, limited_series/original 9.6%, movie/original 9.1%, tv/original 7.6% | audience_7_5 29.4%, hall_of_fame 20.9%, meters_all_70 20.7%, critic_8_5 17.3% |
| traditional-holdout | stream_control | 14% · 8.01 · 18.3% · $26.0K | — | 34% · 7.51 · 10.7% · $21.4K | — | 53% · 8.34 · 19.1% · $28.8K | — | limited_series 11.4%, movie 19.4%, tv 69.2% | audience_7_5 27.6%, meters_all_70 20.5%, hall_of_fame 16.5%, critic_8_5 15.2% |
| balanced | stream_control | — | — | 100% · 8.38 · 28.9% · $26.7K | — | — | — | movie 100% | audience_7_5 27.6%, hall_of_fame 26%, meters_all_70 19.9%, critic_8_5 18.2% |
| streaming-pivot | acquisition_x1.5 | — | — | 66% · 7.91 · 13.5% · $23.9K | 6% · 8.82 · 39.7% · $-7.5K | — | 28% · 8.5 · 26.9% · $-8.4K | movie 54.4%, movie/original 8.6%, tv/original 37% | audience_7_5 31.7%, meters_all_70 22.7%, hall_of_fame 20.8%, critic_8_5 18.7% |
| mixed | acquisition_x1.5 | 38% · 7.84 · 13.2% · $25.2K | 8% · 8.79 · 37.9% · $-8.2K | 22% · 8.23 · 27.1% · $25.2K | 7% · 8.81 · 42.2% · $-7.6K | 20% · 8.22 · 11.5% · $28.4K | 6% · 8.52 · 32.1% · $-8.4K | limited_series 26.1%, tv 25.2%, movie 22.4%, limited_series/original 9.6%, movie/original 9.1%, tv/original 7.6% | audience_7_5 29.4%, hall_of_fame 20.9%, meters_all_70 20.7%, critic_8_5 17.3% |
| traditional-holdout | acquisition_x1.5 | 14% · 8.01 · 18.3% · $26.0K | — | 34% · 7.51 · 10.7% · $21.4K | — | 53% · 8.34 · 19.1% · $28.8K | — | limited_series 11.4%, movie 19.4%, tv 69.2% | audience_7_5 27.6%, meters_all_70 20.5%, hall_of_fame 16.5%, critic_8_5 15.2% |
| balanced | acquisition_x1.5 | — | — | 100% · 8.38 · 28.9% · $26.7K | — | — | — | movie 100% | audience_7_5 27.6%, hall_of_fame 26%, meters_all_70 19.9%, critic_8_5 18.2% |
| streaming-pivot | churn_x1.5 | — | — | 66% · 7.91 · 13.5% · $23.9K | 6% · 8.82 · 39.7% · $-7.5K | — | 28% · 8.5 · 26.9% · $-8.4K | movie 54.4%, movie/original 8.6%, tv/original 37% | audience_7_5 31.7%, meters_all_70 22.7%, hall_of_fame 20.8%, critic_8_5 18.7% |
| mixed | churn_x1.5 | 38% · 7.84 · 13.2% · $25.2K | 8% · 8.79 · 37.9% · $-8.2K | 22% · 8.23 · 27.1% · $25.2K | 7% · 8.81 · 42.2% · $-7.6K | 20% · 8.22 · 11.5% · $28.4K | 6% · 8.52 · 32.1% · $-8.4K | limited_series 26.1%, tv 25.2%, movie 22.4%, limited_series/original 9.6%, movie/original 9.1%, tv/original 7.6% | audience_7_5 29.4%, hall_of_fame 20.9%, meters_all_70 20.7%, critic_8_5 17.3% |
| traditional-holdout | churn_x1.5 | 14% · 8.01 · 18.3% · $26.0K | — | 34% · 7.51 · 10.7% · $21.4K | — | 53% · 8.34 · 19.1% · $28.8K | — | limited_series 11.4%, movie 19.4%, tv 69.2% | audience_7_5 27.6%, meters_all_70 20.5%, hall_of_fame 16.5%, critic_8_5 15.2% |
| balanced | churn_x1.5 | — | — | 100% · 8.38 · 28.9% · $26.7K | — | — | — | movie 100% | audience_7_5 27.6%, hall_of_fame 26%, meters_all_70 19.9%, critic_8_5 18.2% |
| streaming-pivot | catalog_retention_0.8 | — | — | 66% · 7.91 · 13.5% · $23.9K | 6% · 8.82 · 39.7% · $-7.5K | — | 28% · 8.5 · 26.9% · $-8.4K | movie 54.4%, movie/original 8.6%, tv/original 37% | audience_7_5 31.7%, meters_all_70 22.7%, hall_of_fame 20.8%, critic_8_5 18.7% |
| mixed | catalog_retention_0.8 | 38% · 7.84 · 13.2% · $25.2K | 8% · 8.79 · 37.9% · $-8.2K | 22% · 8.23 · 27.1% · $25.2K | 7% · 8.81 · 42.2% · $-7.6K | 20% · 8.22 · 11.5% · $28.4K | 6% · 8.52 · 32.1% · $-8.4K | limited_series 26.1%, tv 25.2%, movie 22.4%, limited_series/original 9.6%, movie/original 9.1%, tv/original 7.6% | audience_7_5 29.4%, hall_of_fame 20.9%, meters_all_70 20.7%, critic_8_5 17.3% |
| traditional-holdout | catalog_retention_0.8 | 14% · 8.01 · 18.3% · $26.0K | — | 34% · 7.51 · 10.7% · $21.4K | — | 53% · 8.34 · 19.1% · $28.8K | — | limited_series 11.4%, movie 19.4%, tv 69.2% | audience_7_5 27.6%, meters_all_70 20.5%, hall_of_fame 16.5%, critic_8_5 15.2% |
| balanced | catalog_retention_0.8 | — | — | 100% · 8.38 · 28.9% · $26.7K | — | — | — | movie 100% | audience_7_5 27.6%, hall_of_fame 26%, meters_all_70 19.9%, critic_8_5 18.2% |
| streaming-pivot | fee_x1.5 | — | — | 66% · 7.91 · 13.5% · $23.9K | 6% · 8.82 · 39.7% · $-7.5K | — | 28% · 8.5 · 26.9% · $-8.4K | movie 54.4%, movie/original 8.6%, tv/original 37% | audience_7_5 31.7%, meters_all_70 22.7%, hall_of_fame 20.8%, critic_8_5 18.7% |
| mixed | fee_x1.5 | 38% · 7.84 · 13.2% · $25.2K | 8% · 8.79 · 37.9% · $-8.2K | 22% · 8.23 · 27.1% · $25.2K | 7% · 8.81 · 42.2% · $-7.6K | 20% · 8.22 · 11.5% · $28.4K | 6% · 8.52 · 32.1% · $-8.4K | limited_series 26.1%, tv 25.2%, movie 22.4%, limited_series/original 9.6%, movie/original 9.1%, tv/original 7.6% | audience_7_5 29.4%, hall_of_fame 20.9%, meters_all_70 20.7%, critic_8_5 17.3% |
| traditional-holdout | fee_x1.5 | 14% · 8.01 · 18.3% · $26.0K | — | 34% · 7.51 · 10.7% · $21.4K | — | 53% · 8.34 · 19.1% · $28.8K | — | limited_series 11.4%, movie 19.4%, tv 69.2% | audience_7_5 27.6%, meters_all_70 20.5%, hall_of_fame 16.5%, critic_8_5 15.2% |
| balanced | fee_x1.5 | — | — | 100% · 8.38 · 28.9% · $26.7K | — | — | — | movie 100% | audience_7_5 27.6%, hall_of_fame 26%, meters_all_70 19.9%, critic_8_5 18.2% |

### Gate 3 provisional flags

| Variant | Flag | Fired | Evidence |
|---|---|---|---|
| stream_control | STREAMING_INFINITE_GROWTH | **yes** | 6/400 launched careers reached ≥90% of the reachable subscriber market (growth is capped by design; this flags saturation) [PROVISIONAL threshold] |
| stream_control | SUBSCRIBER_CHURN_SPIRAL | no | not fired: 0/400 launched careers lost >60% of subscribers within 3 years [PROVISIONAL threshold] |
| stream_control | TV_SEASON_TOO_PROFITABLE | no | not fired: 0/4328 finished traditional TV seasons netted >2× the batch's pooled movie net per production week ($25,285) [PROVISIONAL threshold] |
| stream_control | TV_SEASON_TOO_LONG | no | not fired: 0 careers kept one show running ≥12 seasons (fatigue cap 0.35 may allow endless renewals) [PROVISIONAL threshold] |
| stream_control | TV_NO_RENEWAL_PATH | no | not fired: 0/400 TV careers never made a second season [PROVISIONAL threshold] |
| stream_control | MIXED_ECONOMY_SOFTLOCK | no | not fired: 0/800 careers spent ≥3 years with negative cash [PROVISIONAL threshold] |
| stream_control | FORMAT_DOMINANT | no | not fired: best cash: traditional-holdout; best Prestige: balanced; fires only if one strategy leads both by >50% [PROVISIONAL threshold] |
| stream_control | DELAYED_STUDIO_PROGRESSION | no | not fired: TV not unlocked by year 8: 0/400; streaming not live by year 15: 0/400 [PROVISIONAL threshold] |
| acquisition_x1.5 | STREAMING_INFINITE_GROWTH | **yes** | 85/400 launched careers reached ≥90% of the reachable subscriber market (growth is capped by design; this flags saturation) [PROVISIONAL threshold] |
| acquisition_x1.5 | SUBSCRIBER_CHURN_SPIRAL | no | not fired: 0/400 launched careers lost >60% of subscribers within 3 years [PROVISIONAL threshold] |
| acquisition_x1.5 | TV_SEASON_TOO_PROFITABLE | no | not fired: 0/4328 finished traditional TV seasons netted >2× the batch's pooled movie net per production week ($25,285) [PROVISIONAL threshold] |
| acquisition_x1.5 | TV_SEASON_TOO_LONG | no | not fired: 0 careers kept one show running ≥12 seasons (fatigue cap 0.35 may allow endless renewals) [PROVISIONAL threshold] |
| acquisition_x1.5 | TV_NO_RENEWAL_PATH | no | not fired: 0/400 TV careers never made a second season [PROVISIONAL threshold] |
| acquisition_x1.5 | MIXED_ECONOMY_SOFTLOCK | no | not fired: 0/800 careers spent ≥3 years with negative cash [PROVISIONAL threshold] |
| acquisition_x1.5 | FORMAT_DOMINANT | no | not fired: best cash: mixed; best Prestige: balanced; fires only if one strategy leads both by >50% [PROVISIONAL threshold] |
| acquisition_x1.5 | DELAYED_STUDIO_PROGRESSION | no | not fired: TV not unlocked by year 8: 0/400; streaming not live by year 15: 0/400 [PROVISIONAL threshold] |
| churn_x1.5 | STREAMING_INFINITE_GROWTH | no | not fired: 0/400 launched careers reached ≥90% of the reachable subscriber market (growth is capped by design; this flags saturation) [PROVISIONAL threshold] |
| churn_x1.5 | SUBSCRIBER_CHURN_SPIRAL | no | not fired: 0/400 launched careers lost >60% of subscribers within 3 years [PROVISIONAL threshold] |
| churn_x1.5 | TV_SEASON_TOO_PROFITABLE | no | not fired: 0/4328 finished traditional TV seasons netted >2× the batch's pooled movie net per production week ($25,285) [PROVISIONAL threshold] |
| churn_x1.5 | TV_SEASON_TOO_LONG | no | not fired: 0 careers kept one show running ≥12 seasons (fatigue cap 0.35 may allow endless renewals) [PROVISIONAL threshold] |
| churn_x1.5 | TV_NO_RENEWAL_PATH | no | not fired: 0/400 TV careers never made a second season [PROVISIONAL threshold] |
| churn_x1.5 | MIXED_ECONOMY_SOFTLOCK | no | not fired: 0/800 careers spent ≥3 years with negative cash [PROVISIONAL threshold] |
| churn_x1.5 | FORMAT_DOMINANT | no | not fired: best cash: traditional-holdout; best Prestige: balanced; fires only if one strategy leads both by >50% [PROVISIONAL threshold] |
| churn_x1.5 | DELAYED_STUDIO_PROGRESSION | no | not fired: TV not unlocked by year 8: 0/400; streaming not live by year 15: 0/400 [PROVISIONAL threshold] |
| catalog_retention_0.8 | STREAMING_INFINITE_GROWTH | **yes** | 25/400 launched careers reached ≥90% of the reachable subscriber market (growth is capped by design; this flags saturation) [PROVISIONAL threshold] |
| catalog_retention_0.8 | SUBSCRIBER_CHURN_SPIRAL | no | not fired: 0/400 launched careers lost >60% of subscribers within 3 years [PROVISIONAL threshold] |
| catalog_retention_0.8 | TV_SEASON_TOO_PROFITABLE | no | not fired: 0/4328 finished traditional TV seasons netted >2× the batch's pooled movie net per production week ($25,285) [PROVISIONAL threshold] |
| catalog_retention_0.8 | TV_SEASON_TOO_LONG | no | not fired: 0 careers kept one show running ≥12 seasons (fatigue cap 0.35 may allow endless renewals) [PROVISIONAL threshold] |
| catalog_retention_0.8 | TV_NO_RENEWAL_PATH | no | not fired: 0/400 TV careers never made a second season [PROVISIONAL threshold] |
| catalog_retention_0.8 | MIXED_ECONOMY_SOFTLOCK | no | not fired: 0/800 careers spent ≥3 years with negative cash [PROVISIONAL threshold] |
| catalog_retention_0.8 | FORMAT_DOMINANT | no | not fired: best cash: mixed; best Prestige: balanced; fires only if one strategy leads both by >50% [PROVISIONAL threshold] |
| catalog_retention_0.8 | DELAYED_STUDIO_PROGRESSION | no | not fired: TV not unlocked by year 8: 0/400; streaming not live by year 15: 0/400 [PROVISIONAL threshold] |
| fee_x1.5 | STREAMING_INFINITE_GROWTH | **yes** | 6/400 launched careers reached ≥90% of the reachable subscriber market (growth is capped by design; this flags saturation) [PROVISIONAL threshold] |
| fee_x1.5 | SUBSCRIBER_CHURN_SPIRAL | no | not fired: 0/400 launched careers lost >60% of subscribers within 3 years [PROVISIONAL threshold] |
| fee_x1.5 | TV_SEASON_TOO_PROFITABLE | no | not fired: 0/4328 finished traditional TV seasons netted >2× the batch's pooled movie net per production week ($25,285) [PROVISIONAL threshold] |
| fee_x1.5 | TV_SEASON_TOO_LONG | no | not fired: 0 careers kept one show running ≥12 seasons (fatigue cap 0.35 may allow endless renewals) [PROVISIONAL threshold] |
| fee_x1.5 | TV_NO_RENEWAL_PATH | no | not fired: 0/400 TV careers never made a second season [PROVISIONAL threshold] |
| fee_x1.5 | MIXED_ECONOMY_SOFTLOCK | no | not fired: 0/800 careers spent ≥3 years with negative cash [PROVISIONAL threshold] |
| fee_x1.5 | FORMAT_DOMINANT | no | not fired: best cash: mixed; best Prestige: balanced; fires only if one strategy leads both by >50% [PROVISIONAL threshold] |
| fee_x1.5 | DELAYED_STUDIO_PROGRESSION | no | not fired: TV not unlocked by year 8: 0/400; streaming not live by year 15: 0/400 [PROVISIONAL threshold] |

### Diagnostic flags fired

| Variant | Fired |
|---|---|
| stream_control | PRESTIGE_TOO_FAST, QUALITY_INFLATION, HIGH_REVIEWS_UNEXPLAINED_LOW_SALES |
| acquisition_x1.5 | PRESTIGE_TOO_FAST, QUALITY_INFLATION, HIGH_REVIEWS_UNEXPLAINED_LOW_SALES |
| churn_x1.5 | PRESTIGE_TOO_FAST, QUALITY_INFLATION, DEAD_STRATEGY, HIGH_REVIEWS_UNEXPLAINED_LOW_SALES |
| catalog_retention_0.8 | PRESTIGE_TOO_FAST, QUALITY_INFLATION, HIGH_REVIEWS_UNEXPLAINED_LOW_SALES |
| fee_x1.5 | PRESTIGE_TOO_FAST, QUALITY_INFLATION, HIGH_REVIEWS_UNEXPLAINED_LOW_SALES |

## 25-year careers (in-game calendar horizon; productions vary by strategy)

Invariant violations across all variants: **0**.

### Medians by strategy

| Strategy | Variant | endCash | prestige | prestigePerRelease | meanAudience | meanCritic | share8plus | share9plus | shareLate8plus | hofShare | maxStaffEnd | staffCount | meanStaffStat | upgrades | firstUpgradeWeek | years | maxIpFans | negativeCashWeeks |
|---|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|
| streaming-pivot | stream_control | $6039K | 8545 | 193.10 | 8.30 | 8.17 | 68% | 20% | 78% | 20% | 8 | 8 | 99.20 | 2 | 112 | 25 | 48326 | 2 |
| streaming-pivot | acquisition_x1.5 | $9086K | 8545 | 193.10 | 8.30 | 8.17 | 68% | 20% | 78% | 20% | 8 | 8 | 99.20 | 2 | 112 | 25 | 48326 | 2 |
| streaming-pivot | churn_x1.5 | $2767K | 8545 | 193.10 | 8.30 | 8.17 | 68% | 20% | 78% | 20% | 8 | 8 | 99.20 | 2 | 112 | 25 | 48681.50 | 2 |
| streaming-pivot | catalog_retention_0.8 | $7897K | 8545 | 193.10 | 8.30 | 8.17 | 68% | 20% | 78% | 20% | 8 | 8 | 99.20 | 2 | 112 | 25 | 48326 | 2 |
| streaming-pivot | fee_x1.5 | $26370K | 8545 | 193.10 | 8.30 | 8.17 | 68% | 20% | 78% | 20% | 8 | 8 | 99.20 | 2 | 112 | 25 | 48326 | 2 |
| mixed | stream_control | $23851K | 11655 | 218.40 | 8.45 | 8.31 | 74% | 25% | 90% | 25% | 8 | 8 | 100 | 2 | 124 | 25 | 45939 | 2 |
| mixed | acquisition_x1.5 | $26550K | 11655 | 218.40 | 8.45 | 8.31 | 74% | 25% | 90% | 25% | 8 | 8 | 100 | 2 | 124 | 25 | 45939 | 2 |
| mixed | churn_x1.5 | $20807K | 11655 | 218.40 | 8.45 | 8.31 | 74% | 25% | 90% | 25% | 8 | 8 | 100 | 2 | 124 | 25 | 45939 | 2 |
| mixed | catalog_retention_0.8 | $26098K | 11655 | 218.40 | 8.45 | 8.31 | 74% | 25% | 90% | 25% | 8 | 8 | 100 | 2 | 124 | 25 | 45939 | 2 |
| mixed | fee_x1.5 | $42257K | 11655 | 218.40 | 8.45 | 8.31 | 74% | 25% | 90% | 25% | 8 | 8 | 100 | 2 | 124 | 25 | 45939 | 2 |
| traditional-holdout | stream_control | $23826K | 9092.50 | 220.75 | 8.26 | 8.14 | 66% | 21% | 82% | 21% | 8 | 8 | 99.30 | 2 | 114 | 25 | 82756 | 2 |
| traditional-holdout | acquisition_x1.5 | $23826K | 9092.50 | 220.75 | 8.26 | 8.14 | 66% | 21% | 82% | 21% | 8 | 8 | 99.30 | 2 | 114 | 25 | 82756 | 2 |
| traditional-holdout | churn_x1.5 | $23826K | 9092.50 | 220.75 | 8.26 | 8.14 | 66% | 21% | 82% | 21% | 8 | 8 | 99.30 | 2 | 114 | 25 | 82756 | 2 |
| traditional-holdout | catalog_retention_0.8 | $23826K | 9092.50 | 220.75 | 8.26 | 8.14 | 66% | 21% | 82% | 21% | 8 | 8 | 99.30 | 2 | 114 | 25 | 82756 | 2 |
| traditional-holdout | fee_x1.5 | $23826K | 9092.50 | 220.75 | 8.26 | 8.14 | 66% | 21% | 82% | 21% | 8 | 8 | 99.30 | 2 | 114 | 25 | 82756 | 2 |
| balanced | stream_control | $21438K | 18245 | 225.25 | 8.52 | 8.43 | 78% | 28% | 85% | 28% | 8 | 8 | 100 | 2 | 112 | 25 | 123459.50 | 2 |
| balanced | acquisition_x1.5 | $21438K | 18245 | 225.25 | 8.52 | 8.43 | 78% | 28% | 85% | 28% | 8 | 8 | 100 | 2 | 112 | 25 | 123459.50 | 2 |
| balanced | churn_x1.5 | $21438K | 18245 | 225.25 | 8.52 | 8.43 | 78% | 28% | 85% | 28% | 8 | 8 | 100 | 2 | 112 | 25 | 123459.50 | 2 |
| balanced | catalog_retention_0.8 | $21438K | 18245 | 225.25 | 8.52 | 8.43 | 78% | 28% | 85% | 28% | 8 | 8 | 100 | 2 | 112 | 25 | 123459.50 | 2 |
| balanced | fee_x1.5 | $21438K | 18245 | 225.25 | 8.52 | 8.43 | 78% | 28% | 85% | 28% | 8 | 8 | 100 | 2 | 112 | 25 | 123459.50 | 2 |

### Paired deltas vs **stream_control** (median of per-seed differences; share of seeds where the variant is higher)

| Strategy | Variant | Δ endCash | Δ prestige | Δ share8plus | Δ meanAudience |
|---|---|---:|---:|---:|---:|
| streaming-pivot | acquisition_x1.5 | $3015K (100%) | 0 (0%) | 0% (0%) | 0 (0%) |
| streaming-pivot | churn_x1.5 | $-3301K (0%) | 0 (1%) | 0% (1%) | 0 (0%) |
| streaming-pivot | catalog_retention_0.8 | $1766K (100%) | 0 (0%) | 0% (0%) | 0 (0%) |
| streaming-pivot | fee_x1.5 | $20367K (100%) | 0 (0%) | 0% (0%) | 0 (0%) |
| mixed | acquisition_x1.5 | $2665K (100%) | 0 (0%) | 0% (0%) | 0 (0%) |
| mixed | churn_x1.5 | $-3064K (0%) | 0 (0%) | 0% (0%) | 0 (0%) |
| mixed | catalog_retention_0.8 | $2218K (100%) | 0 (0%) | 0% (0%) | 0 (0%) |
| mixed | fee_x1.5 | $18312K (100%) | 0 (0%) | 0% (0%) | 0 (0%) |
| traditional-holdout | acquisition_x1.5 | $0K (0%) | 0 (0%) | 0% (0%) | 0 (0%) |
| traditional-holdout | churn_x1.5 | $0K (0%) | 0 (0%) | 0% (0%) | 0 (0%) |
| traditional-holdout | catalog_retention_0.8 | $0K (0%) | 0 (0%) | 0% (0%) | 0 (0%) |
| traditional-holdout | fee_x1.5 | $0K (0%) | 0 (0%) | 0% (0%) | 0 (0%) |
| balanced | acquisition_x1.5 | $0K (0%) | 0 (0%) | 0% (0%) | 0 (0%) |
| balanced | churn_x1.5 | $0K (0%) | 0 (0%) | 0% (0%) | 0 (0%) |
| balanced | catalog_retention_0.8 | $0K (0%) | 0 (0%) | 0% (0%) | 0 (0%) |
| balanced | fee_x1.5 | $0K (0%) | 0 (0%) | 0% (0%) | 0 (0%) |

### Mean review score (avg of Audience+Critic) by production index

| Strategy | Variant | #1 | #3 | #5 | #10 | #20 | #30 | #50 |
|---|---|---:|---:|---:|---:|---:|---:|---:|
| streaming-pivot | stream_control | 5.67 | 6.33 | 7.35 | 8.29 | 8.69 | 8.57 | — |
| streaming-pivot | acquisition_x1.5 | 5.67 | 6.33 | 7.35 | 8.29 | 8.69 | 8.57 | — |
| streaming-pivot | churn_x1.5 | 5.67 | 6.33 | 7.35 | 8.29 | 8.69 | 8.57 | — |
| streaming-pivot | catalog_retention_0.8 | 5.67 | 6.33 | 7.35 | 8.29 | 8.69 | 8.57 | — |
| streaming-pivot | fee_x1.5 | 5.67 | 6.33 | 7.35 | 8.29 | 8.69 | 8.57 | — |
| mixed | stream_control | 5.62 | 6.33 | 7.43 | 8.24 | 8.33 | 8.86 | 8.79 |
| mixed | acquisition_x1.5 | 5.62 | 6.33 | 7.43 | 8.24 | 8.33 | 8.86 | 8.79 |
| mixed | churn_x1.5 | 5.62 | 6.33 | 7.43 | 8.24 | 8.33 | 8.86 | 8.79 |
| mixed | catalog_retention_0.8 | 5.62 | 6.33 | 7.43 | 8.24 | 8.33 | 8.86 | 8.79 |
| mixed | fee_x1.5 | 5.62 | 6.33 | 7.43 | 8.24 | 8.33 | 8.86 | 8.79 |
| traditional-holdout | stream_control | 5.62 | 6.29 | 7.39 | 8.19 | 8.47 | 8.57 | 8.86 |
| traditional-holdout | acquisition_x1.5 | 5.62 | 6.29 | 7.39 | 8.19 | 8.47 | 8.57 | 8.86 |
| traditional-holdout | churn_x1.5 | 5.62 | 6.29 | 7.39 | 8.19 | 8.47 | 8.57 | 8.86 |
| traditional-holdout | catalog_retention_0.8 | 5.62 | 6.29 | 7.39 | 8.19 | 8.47 | 8.57 | 8.86 |
| traditional-holdout | fee_x1.5 | 5.62 | 6.29 | 7.39 | 8.19 | 8.47 | 8.57 | 8.86 |
| balanced | stream_control | 5.65 | 6.33 | 7.38 | 8.31 | 8.68 | 8.74 | 8.75 |
| balanced | acquisition_x1.5 | 5.65 | 6.33 | 7.38 | 8.31 | 8.68 | 8.74 | 8.75 |
| balanced | churn_x1.5 | 5.65 | 6.33 | 7.38 | 8.31 | 8.68 | 8.74 | 8.75 |
| balanced | catalog_retention_0.8 | 5.65 | 6.33 | 7.38 | 8.31 | 8.68 | 8.74 | 8.75 |
| balanced | fee_x1.5 | 5.65 | 6.33 | 7.38 | 8.31 | 8.68 | 8.74 | 8.75 |

### Great films — all strategies pooled, by release window

Denominators are films in that window. HoF = average of Audience and Critic ≥ hofThreshold (9.0). `≥9` is inclusive, `>9` strict.

| Strategy | Config | Window | Films (n) | Avg Aud | Avg Crit | HoF n (%) | Avg ≥9 n (%) | Avg >9 n (%) | Aud ≥9 n (%) | Crit ≥9 n (%) | 8+ n (%) | Careers with 0 HoF | HoF/career p10/p50/p90 | Best/career p10/p50/p90/p99 | Best combined movie | Prestige median |
|---|---|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---|---|---|---:|
| ALL | stream_control | 1-5 | 4000 | 6.46 | 6.51 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 131 (3.3%) | 100% of 800 | 0/0/0 | 7.07/7.6/8.09/8.54 | 8.77 "Midnight Protocol" (limited_series, A8.71/C8.82; mixed seed 87 #5, yr 1.7, critic gen 0) |  |
| ALL | stream_control | 6-20 | 12000 | 8.35 | 8.25 | 1846 (15.4%) | 1846 (15.4%) | 1779 (14.8%) | 2458 (20.5%) | 2428 (20.2%) | 8280 (69.0%) | 17% of 800 | 0/2/5 | 8.87/9.36/9.72/10 | 10.00 "Wild Legacy" (limited_series, A10/C10; mixed seed 21 #17, yr 6.0, critic gen 0) |  |
| ALL | stream_control | 21-50 | 21120 | 8.71 | 8.56 | 7114 (33.7%) | 7114 (33.7%) | 6968 (33.0%) | 9631 (45.6%) | 8098 (38.3%) | 17318 (82.0%) | 1% of 800 | 3/9/14 | 9.42/9.73/10/10 | 10.00 "Dead Protocol" (A10/C10; balanced seed 6 #32, yr 9.8, critic gen 0) |  |
| ALL | stream_control | 51-100 | 6877 | 8.66 | 8.55 | 1881 (27.4%) | 1881 (27.4%) | 1767 (25.7%) | 2557 (37.2%) | 2346 (34.1%) | 5797 (84.3%) | 17% of 400 | 0/3/11 | 8.95/9.47/9.9/10 | 10.00 "Wild Night" (A10/C10; balanced seed 7 #59, yr 18.1, critic gen 0) |  |
| ALL | stream_control | all | 43997 | 8.40 | 8.29 | 10841 (24.6%) | 10841 (24.6%) | 10514 (23.9%) | 14646 (33.3%) | 12872 (29.3%) | 31526 (71.7%) | 0% of 800 | 5/12/25 | 9.49/9.78/10/10 | 10.00 "Dead Protocol" (A10/C10; balanced seed 6 #32, yr 9.8, critic gen 0) |  |
| ALL | acquisition_x1.5 | 1-5 | 4000 | 6.46 | 6.51 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 131 (3.3%) | 100% of 800 | 0/0/0 | 7.07/7.6/8.09/8.54 | 8.77 "Midnight Protocol" (limited_series, A8.71/C8.82; mixed seed 87 #5, yr 1.7, critic gen 0) |  |
| ALL | acquisition_x1.5 | 6-20 | 12000 | 8.35 | 8.25 | 1846 (15.4%) | 1846 (15.4%) | 1779 (14.8%) | 2458 (20.5%) | 2428 (20.2%) | 8280 (69.0%) | 17% of 800 | 0/2/5 | 8.87/9.36/9.72/10 | 10.00 "Wild Legacy" (limited_series, A10/C10; mixed seed 21 #17, yr 6.0, critic gen 0) |  |
| ALL | acquisition_x1.5 | 21-50 | 21120 | 8.71 | 8.56 | 7114 (33.7%) | 7114 (33.7%) | 6968 (33.0%) | 9631 (45.6%) | 8098 (38.3%) | 17318 (82.0%) | 1% of 800 | 3/9/14 | 9.42/9.73/10/10 | 10.00 "Dead Protocol" (A10/C10; balanced seed 6 #32, yr 9.8, critic gen 0) |  |
| ALL | acquisition_x1.5 | 51-100 | 6877 | 8.66 | 8.55 | 1881 (27.4%) | 1881 (27.4%) | 1767 (25.7%) | 2557 (37.2%) | 2346 (34.1%) | 5797 (84.3%) | 17% of 400 | 0/3/11 | 8.95/9.47/9.9/10 | 10.00 "Wild Night" (A10/C10; balanced seed 7 #59, yr 18.1, critic gen 0) |  |
| ALL | acquisition_x1.5 | all | 43997 | 8.40 | 8.29 | 10841 (24.6%) | 10841 (24.6%) | 10514 (23.9%) | 14646 (33.3%) | 12872 (29.3%) | 31526 (71.7%) | 0% of 800 | 5/12/25 | 9.49/9.78/10/10 | 10.00 "Dead Protocol" (A10/C10; balanced seed 6 #32, yr 9.8, critic gen 0) |  |
| ALL | churn_x1.5 | 1-5 | 4000 | 6.46 | 6.51 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 131 (3.3%) | 100% of 800 | 0/0/0 | 7.07/7.6/8.09/8.54 | 8.77 "Midnight Protocol" (limited_series, A8.71/C8.82; mixed seed 87 #5, yr 1.7, critic gen 0) |  |
| ALL | churn_x1.5 | 6-20 | 12000 | 8.35 | 8.25 | 1846 (15.4%) | 1846 (15.4%) | 1779 (14.8%) | 2458 (20.5%) | 2428 (20.2%) | 8280 (69.0%) | 17% of 800 | 0/2/5 | 8.87/9.36/9.72/10 | 10.00 "Wild Legacy" (limited_series, A10/C10; mixed seed 21 #17, yr 6.0, critic gen 0) |  |
| ALL | churn_x1.5 | 21-50 | 21121 | 8.71 | 8.56 | 7114 (33.7%) | 7114 (33.7%) | 6968 (33.0%) | 9631 (45.6%) | 8098 (38.3%) | 17319 (82.0%) | 1% of 800 | 3/9/14 | 9.42/9.73/10/10 | 10.00 "Dead Protocol" (A10/C10; balanced seed 6 #32, yr 9.8, critic gen 0) |  |
| ALL | churn_x1.5 | 51-100 | 6877 | 8.66 | 8.55 | 1881 (27.4%) | 1881 (27.4%) | 1767 (25.7%) | 2557 (37.2%) | 2346 (34.1%) | 5797 (84.3%) | 17% of 400 | 0/3/11 | 8.95/9.47/9.9/10 | 10.00 "Wild Night" (A10/C10; balanced seed 7 #59, yr 18.1, critic gen 0) |  |
| ALL | churn_x1.5 | all | 43998 | 8.40 | 8.29 | 10841 (24.6%) | 10841 (24.6%) | 10514 (23.9%) | 14646 (33.3%) | 12872 (29.3%) | 31527 (71.7%) | 0% of 800 | 5/12/25 | 9.49/9.78/10/10 | 10.00 "Dead Protocol" (A10/C10; balanced seed 6 #32, yr 9.8, critic gen 0) |  |
| ALL | catalog_retention_0.8 | 1-5 | 4000 | 6.46 | 6.51 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 131 (3.3%) | 100% of 800 | 0/0/0 | 7.07/7.6/8.09/8.54 | 8.77 "Midnight Protocol" (limited_series, A8.71/C8.82; mixed seed 87 #5, yr 1.7, critic gen 0) |  |
| ALL | catalog_retention_0.8 | 6-20 | 12000 | 8.35 | 8.25 | 1846 (15.4%) | 1846 (15.4%) | 1779 (14.8%) | 2458 (20.5%) | 2428 (20.2%) | 8280 (69.0%) | 17% of 800 | 0/2/5 | 8.87/9.36/9.72/10 | 10.00 "Wild Legacy" (limited_series, A10/C10; mixed seed 21 #17, yr 6.0, critic gen 0) |  |
| ALL | catalog_retention_0.8 | 21-50 | 21120 | 8.71 | 8.56 | 7114 (33.7%) | 7114 (33.7%) | 6968 (33.0%) | 9631 (45.6%) | 8098 (38.3%) | 17318 (82.0%) | 1% of 800 | 3/9/14 | 9.42/9.73/10/10 | 10.00 "Dead Protocol" (A10/C10; balanced seed 6 #32, yr 9.8, critic gen 0) |  |
| ALL | catalog_retention_0.8 | 51-100 | 6877 | 8.66 | 8.55 | 1881 (27.4%) | 1881 (27.4%) | 1767 (25.7%) | 2557 (37.2%) | 2346 (34.1%) | 5797 (84.3%) | 17% of 400 | 0/3/11 | 8.95/9.47/9.9/10 | 10.00 "Wild Night" (A10/C10; balanced seed 7 #59, yr 18.1, critic gen 0) |  |
| ALL | catalog_retention_0.8 | all | 43997 | 8.40 | 8.29 | 10841 (24.6%) | 10841 (24.6%) | 10514 (23.9%) | 14646 (33.3%) | 12872 (29.3%) | 31526 (71.7%) | 0% of 800 | 5/12/25 | 9.49/9.78/10/10 | 10.00 "Dead Protocol" (A10/C10; balanced seed 6 #32, yr 9.8, critic gen 0) |  |
| ALL | fee_x1.5 | 1-5 | 4000 | 6.46 | 6.51 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 131 (3.3%) | 100% of 800 | 0/0/0 | 7.07/7.6/8.09/8.54 | 8.77 "Midnight Protocol" (limited_series, A8.71/C8.82; mixed seed 87 #5, yr 1.7, critic gen 0) |  |
| ALL | fee_x1.5 | 6-20 | 12000 | 8.35 | 8.25 | 1846 (15.4%) | 1846 (15.4%) | 1779 (14.8%) | 2458 (20.5%) | 2428 (20.2%) | 8280 (69.0%) | 17% of 800 | 0/2/5 | 8.87/9.36/9.72/10 | 10.00 "Wild Legacy" (limited_series, A10/C10; mixed seed 21 #17, yr 6.0, critic gen 0) |  |
| ALL | fee_x1.5 | 21-50 | 21120 | 8.71 | 8.56 | 7114 (33.7%) | 7114 (33.7%) | 6968 (33.0%) | 9631 (45.6%) | 8098 (38.3%) | 17318 (82.0%) | 1% of 800 | 3/9/14 | 9.42/9.73/10/10 | 10.00 "Dead Protocol" (A10/C10; balanced seed 6 #32, yr 9.8, critic gen 0) |  |
| ALL | fee_x1.5 | 51-100 | 6877 | 8.66 | 8.55 | 1881 (27.4%) | 1881 (27.4%) | 1767 (25.7%) | 2557 (37.2%) | 2346 (34.1%) | 5797 (84.3%) | 17% of 400 | 0/3/11 | 8.95/9.47/9.9/10 | 10.00 "Wild Night" (A10/C10; balanced seed 7 #59, yr 18.1, critic gen 0) |  |
| ALL | fee_x1.5 | all | 43997 | 8.40 | 8.29 | 10841 (24.6%) | 10841 (24.6%) | 10514 (23.9%) | 14646 (33.3%) | 12872 (29.3%) | 31526 (71.7%) | 0% of 800 | 5/12/25 | 9.49/9.78/10/10 | 10.00 "Dead Protocol" (A10/C10; balanced seed 6 #32, yr 9.8, critic gen 0) |  |

### Great films by strategy (whole career)

| Strategy | Config | Window | Films (n) | Avg Aud | Avg Crit | HoF n (%) | Avg ≥9 n (%) | Avg >9 n (%) | Aud ≥9 n (%) | Crit ≥9 n (%) | 8+ n (%) | Careers with 0 HoF | HoF/career p10/p50/p90 | Best/career p10/p50/p90/p99 | Best combined movie | Prestige median |
|---|---|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---|---|---|---:|
| streaming-pivot | stream_control | all | 8758 | 8.29 | 8.17 | 1804 (20.6%) | 1804 (20.6%) | 1762 (20.1%) | 2489 (28.4%) | 2183 (24.9%) | 5838 (66.7%) | 0% of 200 | 4/9/13.1 | 9.44/9.69/10/10 | 10.00 "Silver Night" (movie/original, A10/C10; streaming-pivot seed 9 #28, yr 11.1, critic gen 0) | 8545 |
| mixed | stream_control | all | 10677 | 8.43 | 8.31 | 2683 (25.1%) | 2683 (25.1%) | 2630 (24.6%) | 3829 (35.9%) | 3243 (30.4%) | 7845 (73.5%) | 0% of 200 | 8/13/18.1 | 9.57/9.81/10/10 | 10.00 "Wild Legacy" (limited_series, A10/C10; mixed seed 6 #50, yr 22.7, critic gen 0) | 11655 |
| traditional-holdout | stream_control | all | 8362 | 8.26 | 8.13 | 1721 (20.6%) | 1721 (20.6%) | 1691 (20.2%) | 2495 (29.8%) | 2009 (24.0%) | 5382 (64.4%) | 2% of 200 | 4/9/14 | 9.36/9.66/10/10 | 10.00 "Red Legacy" (A10/C10; traditional-holdout seed 6 #35, yr 21.2, critic gen 0) | 9092.5 |
| balanced | stream_control | all | 16200 | 8.52 | 8.42 | 4633 (28.6%) | 4633 (28.6%) | 4431 (27.4%) | 5833 (36.0%) | 5437 (33.6%) | 12461 (76.9%) | 0% of 200 | 16/23/31 | 9.68/9.87/10/10 | 10.00 "Dead Protocol" (A10/C10; balanced seed 6 #32, yr 9.8, critic gen 0) | 18245 |
| streaming-pivot | acquisition_x1.5 | all | 8758 | 8.29 | 8.17 | 1804 (20.6%) | 1804 (20.6%) | 1762 (20.1%) | 2489 (28.4%) | 2183 (24.9%) | 5838 (66.7%) | 0% of 200 | 4/9/13.1 | 9.44/9.69/10/10 | 10.00 "Silver Night" (movie/original, A10/C10; streaming-pivot seed 9 #28, yr 11.1, critic gen 0) | 8545 |
| mixed | acquisition_x1.5 | all | 10677 | 8.43 | 8.31 | 2683 (25.1%) | 2683 (25.1%) | 2630 (24.6%) | 3829 (35.9%) | 3243 (30.4%) | 7845 (73.5%) | 0% of 200 | 8/13/18.1 | 9.57/9.81/10/10 | 10.00 "Wild Legacy" (limited_series, A10/C10; mixed seed 6 #50, yr 22.7, critic gen 0) | 11655 |
| traditional-holdout | acquisition_x1.5 | all | 8362 | 8.26 | 8.13 | 1721 (20.6%) | 1721 (20.6%) | 1691 (20.2%) | 2495 (29.8%) | 2009 (24.0%) | 5382 (64.4%) | 2% of 200 | 4/9/14 | 9.36/9.66/10/10 | 10.00 "Red Legacy" (A10/C10; traditional-holdout seed 6 #35, yr 21.2, critic gen 0) | 9092.5 |
| balanced | acquisition_x1.5 | all | 16200 | 8.52 | 8.42 | 4633 (28.6%) | 4633 (28.6%) | 4431 (27.4%) | 5833 (36.0%) | 5437 (33.6%) | 12461 (76.9%) | 0% of 200 | 16/23/31 | 9.68/9.87/10/10 | 10.00 "Dead Protocol" (A10/C10; balanced seed 6 #32, yr 9.8, critic gen 0) | 18245 |
| streaming-pivot | churn_x1.5 | all | 8759 | 8.29 | 8.17 | 1804 (20.6%) | 1804 (20.6%) | 1762 (20.1%) | 2489 (28.4%) | 2183 (24.9%) | 5839 (66.7%) | 0% of 200 | 4/9/13.1 | 9.44/9.69/10/10 | 10.00 "Silver Night" (movie/original, A10/C10; streaming-pivot seed 9 #28, yr 11.1, critic gen 0) | 8545 |
| mixed | churn_x1.5 | all | 10677 | 8.43 | 8.31 | 2683 (25.1%) | 2683 (25.1%) | 2630 (24.6%) | 3829 (35.9%) | 3243 (30.4%) | 7845 (73.5%) | 0% of 200 | 8/13/18.1 | 9.57/9.81/10/10 | 10.00 "Wild Legacy" (limited_series, A10/C10; mixed seed 6 #50, yr 22.7, critic gen 0) | 11655 |
| traditional-holdout | churn_x1.5 | all | 8362 | 8.26 | 8.13 | 1721 (20.6%) | 1721 (20.6%) | 1691 (20.2%) | 2495 (29.8%) | 2009 (24.0%) | 5382 (64.4%) | 2% of 200 | 4/9/14 | 9.36/9.66/10/10 | 10.00 "Red Legacy" (A10/C10; traditional-holdout seed 6 #35, yr 21.2, critic gen 0) | 9092.5 |
| balanced | churn_x1.5 | all | 16200 | 8.52 | 8.42 | 4633 (28.6%) | 4633 (28.6%) | 4431 (27.4%) | 5833 (36.0%) | 5437 (33.6%) | 12461 (76.9%) | 0% of 200 | 16/23/31 | 9.68/9.87/10/10 | 10.00 "Dead Protocol" (A10/C10; balanced seed 6 #32, yr 9.8, critic gen 0) | 18245 |
| streaming-pivot | catalog_retention_0.8 | all | 8758 | 8.29 | 8.17 | 1804 (20.6%) | 1804 (20.6%) | 1762 (20.1%) | 2489 (28.4%) | 2183 (24.9%) | 5838 (66.7%) | 0% of 200 | 4/9/13.1 | 9.44/9.69/10/10 | 10.00 "Silver Night" (movie/original, A10/C10; streaming-pivot seed 9 #28, yr 11.1, critic gen 0) | 8545 |
| mixed | catalog_retention_0.8 | all | 10677 | 8.43 | 8.31 | 2683 (25.1%) | 2683 (25.1%) | 2630 (24.6%) | 3829 (35.9%) | 3243 (30.4%) | 7845 (73.5%) | 0% of 200 | 8/13/18.1 | 9.57/9.81/10/10 | 10.00 "Wild Legacy" (limited_series, A10/C10; mixed seed 6 #50, yr 22.7, critic gen 0) | 11655 |
| traditional-holdout | catalog_retention_0.8 | all | 8362 | 8.26 | 8.13 | 1721 (20.6%) | 1721 (20.6%) | 1691 (20.2%) | 2495 (29.8%) | 2009 (24.0%) | 5382 (64.4%) | 2% of 200 | 4/9/14 | 9.36/9.66/10/10 | 10.00 "Red Legacy" (A10/C10; traditional-holdout seed 6 #35, yr 21.2, critic gen 0) | 9092.5 |
| balanced | catalog_retention_0.8 | all | 16200 | 8.52 | 8.42 | 4633 (28.6%) | 4633 (28.6%) | 4431 (27.4%) | 5833 (36.0%) | 5437 (33.6%) | 12461 (76.9%) | 0% of 200 | 16/23/31 | 9.68/9.87/10/10 | 10.00 "Dead Protocol" (A10/C10; balanced seed 6 #32, yr 9.8, critic gen 0) | 18245 |
| streaming-pivot | fee_x1.5 | all | 8758 | 8.29 | 8.17 | 1804 (20.6%) | 1804 (20.6%) | 1762 (20.1%) | 2489 (28.4%) | 2183 (24.9%) | 5838 (66.7%) | 0% of 200 | 4/9/13.1 | 9.44/9.69/10/10 | 10.00 "Silver Night" (movie/original, A10/C10; streaming-pivot seed 9 #28, yr 11.1, critic gen 0) | 8545 |
| mixed | fee_x1.5 | all | 10677 | 8.43 | 8.31 | 2683 (25.1%) | 2683 (25.1%) | 2630 (24.6%) | 3829 (35.9%) | 3243 (30.4%) | 7845 (73.5%) | 0% of 200 | 8/13/18.1 | 9.57/9.81/10/10 | 10.00 "Wild Legacy" (limited_series, A10/C10; mixed seed 6 #50, yr 22.7, critic gen 0) | 11655 |
| traditional-holdout | fee_x1.5 | all | 8362 | 8.26 | 8.13 | 1721 (20.6%) | 1721 (20.6%) | 1691 (20.2%) | 2495 (29.8%) | 2009 (24.0%) | 5382 (64.4%) | 2% of 200 | 4/9/14 | 9.36/9.66/10/10 | 10.00 "Red Legacy" (A10/C10; traditional-holdout seed 6 #35, yr 21.2, critic gen 0) | 9092.5 |
| balanced | fee_x1.5 | all | 16200 | 8.52 | 8.42 | 4633 (28.6%) | 4633 (28.6%) | 4431 (27.4%) | 5833 (36.0%) | 5437 (33.6%) | 12461 (76.9%) | 0% of 200 | 16/23/31 | 9.68/9.87/10/10 | 10.00 "Dead Protocol" (A10/C10; balanced seed 6 #32, yr 9.8, critic gen 0) | 18245 |

### Greatest single films (all strategies, whole sample; reproducible from seed + config hash)

| Variant | Best combined | Best Audience | Best Critic | Year band with most HoF |
|---|---|---|---|---|
| stream_control | 10.00 "Dead Protocol" (A10/C10; balanced seed 6 #32, yr 9.8, critic gen 0) | 10.00 "Dead Protocol" (A10/C10; balanced seed 6 #32, yr 9.8, critic gen 0) | 10.00 "Dead Protocol" (A10/C10; balanced seed 6 #32, yr 9.8, critic gen 0) | y10-15: 37.4% of 7751 |
| acquisition_x1.5 | 10.00 "Dead Protocol" (A10/C10; balanced seed 6 #32, yr 9.8, critic gen 0) | 10.00 "Dead Protocol" (A10/C10; balanced seed 6 #32, yr 9.8, critic gen 0) | 10.00 "Dead Protocol" (A10/C10; balanced seed 6 #32, yr 9.8, critic gen 0) | y10-15: 37.4% of 7751 |
| churn_x1.5 | 10.00 "Dead Protocol" (A10/C10; balanced seed 6 #32, yr 9.8, critic gen 0) | 10.00 "Dead Protocol" (A10/C10; balanced seed 6 #32, yr 9.8, critic gen 0) | 10.00 "Dead Protocol" (A10/C10; balanced seed 6 #32, yr 9.8, critic gen 0) | y10-15: 37.4% of 7751 |
| catalog_retention_0.8 | 10.00 "Dead Protocol" (A10/C10; balanced seed 6 #32, yr 9.8, critic gen 0) | 10.00 "Dead Protocol" (A10/C10; balanced seed 6 #32, yr 9.8, critic gen 0) | 10.00 "Dead Protocol" (A10/C10; balanced seed 6 #32, yr 9.8, critic gen 0) | y10-15: 37.4% of 7751 |
| fee_x1.5 | 10.00 "Dead Protocol" (A10/C10; balanced seed 6 #32, yr 9.8, critic gen 0) | 10.00 "Dead Protocol" (A10/C10; balanced seed 6 #32, yr 9.8, critic gen 0) | 10.00 "Dead Protocol" (A10/C10; balanced seed 6 #32, yr 9.8, critic gen 0) | y10-15: 37.4% of 7751 |

### Great films by in-game year (all strategies pooled)

| Strategy | Config | Window | Films (n) | Avg Aud | Avg Crit | HoF n (%) | Avg ≥9 n (%) | Avg >9 n (%) | Aud ≥9 n (%) | Crit ≥9 n (%) | 8+ n (%) | Careers with 0 HoF | HoF/career p10/p50/p90 | Best/career p10/p50/p90/p99 | Best combined movie | Prestige median |
|---|---|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---|---|---|---:|
| ALL | stream_control | y0-5 | 11813 | 7.64 | 7.59 | 819 (6.9%) | 819 (6.9%) | 785 (6.7%) | 1268 (10.7%) | 1220 (10.3%) | 5091 (43.1%) | 46% of 800 | 0/1/3 | 8.5/9.04/9.59/9.97 | 10.00 "Midnight Storm" (A10/C10; streaming-pivot seed 56 #16, yr 4.9, critic gen 0) |  |
| ALL | stream_control | y5-10 | 8935 | 8.63 | 8.51 | 2608 (29.2%) | 2608 (29.2%) | 2537 (28.4%) | 3129 (35.0%) | 3035 (34.0%) | 7212 (80.7%) | 11% of 800 | 0/3/7 | 8.98/9.47/9.8/10 | 10.00 "Dead Protocol" (A10/C10; balanced seed 6 #32, yr 9.8, critic gen 0) |  |
| ALL | stream_control | y10-15 | 7751 | 8.74 | 8.60 | 2899 (37.4%) | 2899 (37.4%) | 2827 (36.5%) | 3758 (48.5%) | 3163 (40.8%) | 6408 (82.7%) | 16% of 800 | 0/3/7 | 8.82/9.53/9.88/10 | 10.00 "Silver Night" (movie/original, A10/C10; streaming-pivot seed 9 #28, yr 11.1, critic gen 0) |  |
| ALL | stream_control | y15-20 | 7607 | 8.71 | 8.57 | 2531 (33.3%) | 2531 (33.3%) | 2448 (32.2%) | 3374 (44.4%) | 2811 (37.0%) | 6289 (82.7%) | 17% of 800 | 0/3/7 | 8.8/9.49/9.87/10 | 10.00 "Wild Night" (A10/C10; balanced seed 7 #59, yr 18.1, critic gen 0) |  |
| ALL | stream_control | y20-30 | 7891 | 8.66 | 8.51 | 1984 (25.1%) | 1984 (25.1%) | 1917 (24.3%) | 3117 (39.5%) | 2643 (33.5%) | 6526 (82.7%) | 21% of 800 | 0/2/5 | 8.83/9.43/9.84/10 | 10.00 "Red Legacy" (A10/C10; traditional-holdout seed 6 #35, yr 21.2, critic gen 0) |  |
| ALL | acquisition_x1.5 | y0-5 | 11813 | 7.64 | 7.59 | 819 (6.9%) | 819 (6.9%) | 785 (6.7%) | 1268 (10.7%) | 1220 (10.3%) | 5091 (43.1%) | 46% of 800 | 0/1/3 | 8.5/9.04/9.59/9.97 | 10.00 "Midnight Storm" (A10/C10; streaming-pivot seed 56 #16, yr 4.9, critic gen 0) |  |
| ALL | acquisition_x1.5 | y5-10 | 8935 | 8.63 | 8.51 | 2608 (29.2%) | 2608 (29.2%) | 2537 (28.4%) | 3129 (35.0%) | 3035 (34.0%) | 7212 (80.7%) | 11% of 800 | 0/3/7 | 8.98/9.47/9.8/10 | 10.00 "Dead Protocol" (A10/C10; balanced seed 6 #32, yr 9.8, critic gen 0) |  |
| ALL | acquisition_x1.5 | y10-15 | 7751 | 8.74 | 8.60 | 2899 (37.4%) | 2899 (37.4%) | 2827 (36.5%) | 3758 (48.5%) | 3163 (40.8%) | 6408 (82.7%) | 16% of 800 | 0/3/7 | 8.82/9.53/9.88/10 | 10.00 "Silver Night" (movie/original, A10/C10; streaming-pivot seed 9 #28, yr 11.1, critic gen 0) |  |
| ALL | acquisition_x1.5 | y15-20 | 7607 | 8.71 | 8.57 | 2531 (33.3%) | 2531 (33.3%) | 2448 (32.2%) | 3374 (44.4%) | 2811 (37.0%) | 6289 (82.7%) | 17% of 800 | 0/3/7 | 8.8/9.49/9.87/10 | 10.00 "Wild Night" (A10/C10; balanced seed 7 #59, yr 18.1, critic gen 0) |  |
| ALL | acquisition_x1.5 | y20-30 | 7891 | 8.66 | 8.51 | 1984 (25.1%) | 1984 (25.1%) | 1917 (24.3%) | 3117 (39.5%) | 2643 (33.5%) | 6526 (82.7%) | 21% of 800 | 0/2/5 | 8.83/9.43/9.84/10 | 10.00 "Red Legacy" (A10/C10; traditional-holdout seed 6 #35, yr 21.2, critic gen 0) |  |
| ALL | churn_x1.5 | y0-5 | 11813 | 7.64 | 7.59 | 819 (6.9%) | 819 (6.9%) | 785 (6.7%) | 1268 (10.7%) | 1220 (10.3%) | 5091 (43.1%) | 46% of 800 | 0/1/3 | 8.5/9.04/9.59/9.97 | 10.00 "Midnight Storm" (A10/C10; streaming-pivot seed 56 #16, yr 4.9, critic gen 0) |  |
| ALL | churn_x1.5 | y5-10 | 8935 | 8.63 | 8.51 | 2608 (29.2%) | 2608 (29.2%) | 2537 (28.4%) | 3129 (35.0%) | 3035 (34.0%) | 7212 (80.7%) | 11% of 800 | 0/3/7 | 8.98/9.47/9.8/10 | 10.00 "Dead Protocol" (A10/C10; balanced seed 6 #32, yr 9.8, critic gen 0) |  |
| ALL | churn_x1.5 | y10-15 | 7751 | 8.74 | 8.60 | 2899 (37.4%) | 2899 (37.4%) | 2827 (36.5%) | 3758 (48.5%) | 3163 (40.8%) | 6408 (82.7%) | 16% of 800 | 0/3/7 | 8.82/9.53/9.88/10 | 10.00 "Silver Night" (movie/original, A10/C10; streaming-pivot seed 9 #28, yr 11.1, critic gen 0) |  |
| ALL | churn_x1.5 | y15-20 | 7607 | 8.71 | 8.57 | 2531 (33.3%) | 2531 (33.3%) | 2448 (32.2%) | 3374 (44.4%) | 2811 (37.0%) | 6289 (82.7%) | 17% of 800 | 0/3/7 | 8.8/9.49/9.87/10 | 10.00 "Wild Night" (A10/C10; balanced seed 7 #59, yr 18.1, critic gen 0) |  |
| ALL | churn_x1.5 | y20-30 | 7892 | 8.66 | 8.51 | 1984 (25.1%) | 1984 (25.1%) | 1917 (24.3%) | 3117 (39.5%) | 2643 (33.5%) | 6527 (82.7%) | 21% of 800 | 0/2/5 | 8.83/9.43/9.84/10 | 10.00 "Red Legacy" (A10/C10; traditional-holdout seed 6 #35, yr 21.2, critic gen 0) |  |
| ALL | catalog_retention_0.8 | y0-5 | 11813 | 7.64 | 7.59 | 819 (6.9%) | 819 (6.9%) | 785 (6.7%) | 1268 (10.7%) | 1220 (10.3%) | 5091 (43.1%) | 46% of 800 | 0/1/3 | 8.5/9.04/9.59/9.97 | 10.00 "Midnight Storm" (A10/C10; streaming-pivot seed 56 #16, yr 4.9, critic gen 0) |  |
| ALL | catalog_retention_0.8 | y5-10 | 8935 | 8.63 | 8.51 | 2608 (29.2%) | 2608 (29.2%) | 2537 (28.4%) | 3129 (35.0%) | 3035 (34.0%) | 7212 (80.7%) | 11% of 800 | 0/3/7 | 8.98/9.47/9.8/10 | 10.00 "Dead Protocol" (A10/C10; balanced seed 6 #32, yr 9.8, critic gen 0) |  |
| ALL | catalog_retention_0.8 | y10-15 | 7751 | 8.74 | 8.60 | 2899 (37.4%) | 2899 (37.4%) | 2827 (36.5%) | 3758 (48.5%) | 3163 (40.8%) | 6408 (82.7%) | 16% of 800 | 0/3/7 | 8.82/9.53/9.88/10 | 10.00 "Silver Night" (movie/original, A10/C10; streaming-pivot seed 9 #28, yr 11.1, critic gen 0) |  |
| ALL | catalog_retention_0.8 | y15-20 | 7607 | 8.71 | 8.57 | 2531 (33.3%) | 2531 (33.3%) | 2448 (32.2%) | 3374 (44.4%) | 2811 (37.0%) | 6289 (82.7%) | 17% of 800 | 0/3/7 | 8.8/9.49/9.87/10 | 10.00 "Wild Night" (A10/C10; balanced seed 7 #59, yr 18.1, critic gen 0) |  |
| ALL | catalog_retention_0.8 | y20-30 | 7891 | 8.66 | 8.51 | 1984 (25.1%) | 1984 (25.1%) | 1917 (24.3%) | 3117 (39.5%) | 2643 (33.5%) | 6526 (82.7%) | 21% of 800 | 0/2/5 | 8.83/9.43/9.84/10 | 10.00 "Red Legacy" (A10/C10; traditional-holdout seed 6 #35, yr 21.2, critic gen 0) |  |
| ALL | fee_x1.5 | y0-5 | 11813 | 7.64 | 7.59 | 819 (6.9%) | 819 (6.9%) | 785 (6.7%) | 1268 (10.7%) | 1220 (10.3%) | 5091 (43.1%) | 46% of 800 | 0/1/3 | 8.5/9.04/9.59/9.97 | 10.00 "Midnight Storm" (A10/C10; streaming-pivot seed 56 #16, yr 4.9, critic gen 0) |  |
| ALL | fee_x1.5 | y5-10 | 8935 | 8.63 | 8.51 | 2608 (29.2%) | 2608 (29.2%) | 2537 (28.4%) | 3129 (35.0%) | 3035 (34.0%) | 7212 (80.7%) | 11% of 800 | 0/3/7 | 8.98/9.47/9.8/10 | 10.00 "Dead Protocol" (A10/C10; balanced seed 6 #32, yr 9.8, critic gen 0) |  |
| ALL | fee_x1.5 | y10-15 | 7751 | 8.74 | 8.60 | 2899 (37.4%) | 2899 (37.4%) | 2827 (36.5%) | 3758 (48.5%) | 3163 (40.8%) | 6408 (82.7%) | 16% of 800 | 0/3/7 | 8.82/9.53/9.88/10 | 10.00 "Silver Night" (movie/original, A10/C10; streaming-pivot seed 9 #28, yr 11.1, critic gen 0) |  |
| ALL | fee_x1.5 | y15-20 | 7607 | 8.71 | 8.57 | 2531 (33.3%) | 2531 (33.3%) | 2448 (32.2%) | 3374 (44.4%) | 2811 (37.0%) | 6289 (82.7%) | 17% of 800 | 0/3/7 | 8.8/9.49/9.87/10 | 10.00 "Wild Night" (A10/C10; balanced seed 7 #59, yr 18.1, critic gen 0) |  |
| ALL | fee_x1.5 | y20-30 | 7891 | 8.66 | 8.51 | 1984 (25.1%) | 1984 (25.1%) | 1917 (24.3%) | 3117 (39.5%) | 2643 (33.5%) | 6526 (82.7%) | 21% of 800 | 0/2/5 | 8.83/9.43/9.84/10 | 10.00 "Red Legacy" (A10/C10; traditional-holdout seed 6 #35, yr 21.2, critic gen 0) |  |

### Prestige progression (Prestige gates growth; cash sustains operations)

`cash-rich but Prestige-locked` = careers that at some week had the cash for the next upgrade but not the Prestige. `bought below gate` must be 0 (engine rule).

| Strategy | Config | Cash median | Prestige median | Prestige/yr | Careers with negative-cash weeks | →6 gate met (Prestige ≥ 200) · median film # | →6 bought · median film # | →6 cash-rich but Prestige-locked | →6 bought below gate | →8 gate met (Prestige ≥ 1000) · median film # | →8 bought · median film # | →8 cash-rich but Prestige-locked | →8 bought below gate |
|---|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|
| streaming-pivot | stream_control | $6.04M | 8545 | 341.8 | 65% | 100% · #7 | 100% · #7 | 100% | 0 | 100% · #12 | 100% · #12 | 100% | 0 |
| mixed | stream_control | $23.85M | 11655 | 466.2 | 73% | 100% · #7 | 100% · #7 | 100% | 0 | 100% · #12 | 100% · #12 | 100% | 0 |
| traditional-holdout | stream_control | $23.83M | 9092.5 | 363.7 | 73% | 100% · #7 | 100% · #7 | 100% | 0 | 100% · #11 | 100% · #12 | 100% | 0 |
| balanced | stream_control | $21.44M | 18245 | 729.8 | 70% | 100% · #7 | 100% · #7 | 100% | 0 | 100% · #11 | 100% · #11 | 100% | 0 |
| streaming-pivot | acquisition_x1.5 | $9.09M | 8545 | 341.8 | 65% | 100% · #7 | 100% · #7 | 100% | 0 | 100% · #12 | 100% · #12 | 100% | 0 |
| mixed | acquisition_x1.5 | $26.55M | 11655 | 466.2 | 73% | 100% · #7 | 100% · #7 | 100% | 0 | 100% · #12 | 100% · #12 | 100% | 0 |
| traditional-holdout | acquisition_x1.5 | $23.83M | 9092.5 | 363.7 | 73% | 100% · #7 | 100% · #7 | 100% | 0 | 100% · #11 | 100% · #12 | 100% | 0 |
| balanced | acquisition_x1.5 | $21.44M | 18245 | 729.8 | 70% | 100% · #7 | 100% · #7 | 100% | 0 | 100% · #11 | 100% · #11 | 100% | 0 |
| streaming-pivot | churn_x1.5 | $2.77M | 8545 | 341.8 | 65% | 100% · #7 | 100% · #7 | 100% | 0 | 100% · #12 | 100% · #12 | 100% | 0 |
| mixed | churn_x1.5 | $20.81M | 11655 | 466.2 | 73% | 100% · #7 | 100% · #7 | 100% | 0 | 100% · #12 | 100% · #12 | 100% | 0 |
| traditional-holdout | churn_x1.5 | $23.83M | 9092.5 | 363.7 | 73% | 100% · #7 | 100% · #7 | 100% | 0 | 100% · #11 | 100% · #12 | 100% | 0 |
| balanced | churn_x1.5 | $21.44M | 18245 | 729.8 | 70% | 100% · #7 | 100% · #7 | 100% | 0 | 100% · #11 | 100% · #11 | 100% | 0 |
| streaming-pivot | catalog_retention_0.8 | $7.90M | 8545 | 341.8 | 65% | 100% · #7 | 100% · #7 | 100% | 0 | 100% · #12 | 100% · #12 | 100% | 0 |
| mixed | catalog_retention_0.8 | $26.10M | 11655 | 466.2 | 73% | 100% · #7 | 100% · #7 | 100% | 0 | 100% · #12 | 100% · #12 | 100% | 0 |
| traditional-holdout | catalog_retention_0.8 | $23.83M | 9092.5 | 363.7 | 73% | 100% · #7 | 100% · #7 | 100% | 0 | 100% · #11 | 100% · #12 | 100% | 0 |
| balanced | catalog_retention_0.8 | $21.44M | 18245 | 729.8 | 70% | 100% · #7 | 100% · #7 | 100% | 0 | 100% · #11 | 100% · #11 | 100% | 0 |
| streaming-pivot | fee_x1.5 | $26.37M | 8545 | 341.8 | 65% | 100% · #7 | 100% · #7 | 100% | 0 | 100% · #12 | 100% · #12 | 100% | 0 |
| mixed | fee_x1.5 | $42.26M | 11655 | 466.2 | 73% | 100% · #7 | 100% · #7 | 100% | 0 | 100% · #12 | 100% · #12 | 100% | 0 |
| traditional-holdout | fee_x1.5 | $23.83M | 9092.5 | 363.7 | 73% | 100% · #7 | 100% · #7 | 100% | 0 | 100% · #11 | 100% · #12 | 100% | 0 |
| balanced | fee_x1.5 | $21.44M | 18245 | 729.8 | 70% | 100% · #7 | 100% · #7 | 100% | 0 | 100% · #11 | 100% · #11 | 100% | 0 |

### Prestige milestones awarded per career (mean)

| Strategy | Variant | audience_7_5 | critic_8_5 | first_hall_of_fame | hall_of_fame | ip_gross_1m | ip_gross_5m | ip_viewers_500k | meters_all_70 | careers > 400 Prestige/yr (OUTDATED threshold) |
|---|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|
| streaming-pivot | stream_control | 34.66 | 18.45 | 1 | 9.02 | 0 | 0 | 3.1 | 38.3 | 7% |
| streaming-pivot | acquisition_x1.5 | 34.66 | 18.45 | 1 | 9.02 | 0 | 0 | 3.1 | 38.3 | 7% |
| streaming-pivot | churn_x1.5 | 34.67 | 18.45 | 1 | 9.02 | 0.01 | 0 | 3.1 | 38.3 | 7% |
| streaming-pivot | catalog_retention_0.8 | 34.66 | 18.45 | 1 | 9.02 | 0 | 0 | 3.1 | 38.3 | 7% |
| streaming-pivot | fee_x1.5 | 34.66 | 18.45 | 1 | 9.02 | 0 | 0 | 3.1 | 38.3 | 7% |
| mixed | stream_control | 44.29 | 24.8 | 1 | 13.41 | 4.04 | 1.89 | 3 | 47.44 | 96% |
| mixed | acquisition_x1.5 | 44.29 | 24.8 | 1 | 13.41 | 4.04 | 1.89 | 3 | 47.44 | 96% |
| mixed | churn_x1.5 | 44.29 | 24.8 | 1 | 13.41 | 4.04 | 1.89 | 3 | 47.44 | 96% |
| mixed | catalog_retention_0.8 | 44.29 | 24.8 | 1 | 13.41 | 4.04 | 1.89 | 3 | 47.44 | 96% |
| mixed | fee_x1.5 | 44.29 | 24.8 | 1 | 13.41 | 4.04 | 1.89 | 3 | 47.44 | 96% |
| traditional-holdout | stream_control | 32.37 | 16.78 | 0.98 | 8.61 | 4.99 | 3.75 | 4.42 | 36.22 | 27% |
| traditional-holdout | acquisition_x1.5 | 32.37 | 16.78 | 0.98 | 8.61 | 4.99 | 3.75 | 4.42 | 36.22 | 27% |
| traditional-holdout | churn_x1.5 | 32.37 | 16.78 | 0.98 | 8.61 | 4.99 | 3.75 | 4.42 | 36.22 | 27% |
| traditional-holdout | catalog_retention_0.8 | 32.37 | 16.78 | 0.98 | 8.61 | 4.99 | 3.75 | 4.42 | 36.22 | 27% |
| traditional-holdout | fee_x1.5 | 32.37 | 16.78 | 0.98 | 8.61 | 4.99 | 3.75 | 4.42 | 36.22 | 27% |
| balanced | stream_control | 69.11 | 40.45 | 1 | 23.16 | 3.35 | 1.77 | 3.35 | 75.61 | 100% |
| balanced | acquisition_x1.5 | 69.11 | 40.45 | 1 | 23.16 | 3.35 | 1.77 | 3.35 | 75.61 | 100% |
| balanced | churn_x1.5 | 69.11 | 40.45 | 1 | 23.16 | 3.35 | 1.77 | 3.35 | 75.61 | 100% |
| balanced | catalog_retention_0.8 | 69.11 | 40.45 | 1 | 23.16 | 3.35 | 1.77 | 3.35 | 75.61 | 100% |
| balanced | fee_x1.5 | 69.11 | 40.45 | 1 | 23.16 | 3.35 | 1.77 | 3.35 | 75.61 | 100% |

### Gate 3 design trade-offs by strategy

(a) money · (b) Prestige · (c) time to TV / streaming · (d) successful IPs · (e) Hall of Fame · (f) last-12-month revenue mix · (g) solvency. Medians unless noted; shares are of careers.

| Strategy | Config | (a) cash median | min cash | ever negative | (b) Prestige | (c) TV unlock yr (share) | streaming live yr (share) | subs end | payback yrs (share) | (d) IPs ≥10K fans | shows · seasons · max | (e) HoF / career | (f) last-12-mo mix: traditional / subs / opex | streaming share | releases |
|---|---|---:|---:|---:|---:|---|---|---:|---|---:|---|---:|---|---:|---:|
| streaming-pivot | stream_control | $6.04M | $-3K | 65% | 8,545 | 2.5 (100%) | 6.4 (100%) | 89,725 | 1.3 (100%) | 4.0 | 4.0 · 19.0 · 6.0 | 9.0 | $0.00M / $2.30M / $-1.11M | 100% | 44 |
| mixed | stream_control | $23.85M | $-3K | 73% | 11,655 | 2.7 (100%) | 7.3 (100%) | 87,188 | 1.9 (100%) | 9.0 | 3.0 · 15.0 · 6.0 | 13.0 | $0.53M / $2.30M / $-1.11M | 81% | 53 |
| traditional-holdout | stream_control | $23.83M | $-4K | 73% | 9,093 | 2.5 (100%) | — (0%) | — | — (0%) | 6.0 | 5.0 · 25.0 · 6.0 | 9.0 | $1.38M / $0.00M / $0.00M | — | 41 |
| balanced | stream_control | $21.44M | $-4K | 70% | 18,245 | — (0%) | — (0%) | — | — (0%) | 20.0 | 0.0 · 0.0 · 0.0 | 23.0 | $1.62M / $0.00M / $0.00M | — | 81 |
| streaming-pivot | acquisition_x1.5 | $9.09M | $-3K | 65% | 8,545 | 2.5 (100%) | 6.4 (100%) | 98,037 | 1.2 (100%) | 4.0 | 4.0 · 19.0 · 6.0 | 9.0 | $0.00M / $2.52M / $-1.17M | 100% | 44 |
| mixed | acquisition_x1.5 | $26.55M | $-3K | 73% | 11,655 | 2.7 (100%) | 7.3 (100%) | 94,715 | 1.6 (100%) | 9.0 | 3.0 · 15.0 · 6.0 | 13.0 | $0.53M / $2.49M / $-1.16M | 82% | 53 |
| traditional-holdout | acquisition_x1.5 | $23.83M | $-4K | 73% | 9,093 | 2.5 (100%) | — (0%) | — | — (0%) | 6.0 | 5.0 · 25.0 · 6.0 | 9.0 | $1.38M / $0.00M / $0.00M | — | 41 |
| balanced | acquisition_x1.5 | $21.44M | $-4K | 70% | 18,245 | — (0%) | — (0%) | — | — (0%) | 20.0 | 0.0 · 0.0 · 0.0 | 23.0 | $1.62M / $0.00M / $0.00M | — | 81 |
| streaming-pivot | churn_x1.5 | $2.77M | $-3K | 65% | 8,545 | 2.5 (100%) | 6.4 (100%) | 79,568 | 1.4 (100%) | 4.0 | 4.0 · 19.0 · 6.0 | 9.0 | $0.00M / $2.03M / $-1.03M | 100% | 44 |
| mixed | churn_x1.5 | $20.81M | $-3K | 73% | 11,655 | 2.7 (100%) | 7.3 (100%) | 76,491 | 2.0 (100%) | 9.0 | 3.0 · 15.0 · 6.0 | 13.0 | $0.53M / $2.03M / $-1.03M | 79% | 53 |
| traditional-holdout | churn_x1.5 | $23.83M | $-4K | 73% | 9,093 | 2.5 (100%) | — (0%) | — | — (0%) | 6.0 | 5.0 · 25.0 · 6.0 | 9.0 | $1.38M / $0.00M / $0.00M | — | 41 |
| balanced | churn_x1.5 | $21.44M | $-4K | 70% | 18,245 | — (0%) | — (0%) | — | — (0%) | 20.0 | 0.0 · 0.0 · 0.0 | 23.0 | $1.62M / $0.00M / $0.00M | — | 81 |
| streaming-pivot | catalog_retention_0.8 | $7.90M | $-3K | 65% | 8,545 | 2.5 (100%) | 6.4 (100%) | 96,677 | 1.3 (100%) | 4.0 | 4.0 · 19.0 · 6.0 | 9.0 | $0.00M / $2.47M / $-1.16M | 100% | 44 |
| mixed | catalog_retention_0.8 | $26.10M | $-3K | 73% | 11,655 | 2.7 (100%) | 7.3 (100%) | 97,002 | 1.8 (100%) | 9.0 | 3.0 · 15.0 · 6.0 | 13.0 | $0.53M / $2.55M / $-1.18M | 83% | 53 |
| traditional-holdout | catalog_retention_0.8 | $23.83M | $-4K | 73% | 9,093 | 2.5 (100%) | — (0%) | — | — (0%) | 6.0 | 5.0 · 25.0 · 6.0 | 9.0 | $1.38M / $0.00M / $0.00M | — | 41 |
| balanced | catalog_retention_0.8 | $21.44M | $-4K | 70% | 18,245 | — (0%) | — (0%) | — | — (0%) | 20.0 | 0.0 · 0.0 · 0.0 | 23.0 | $1.62M / $0.00M / $0.00M | — | 81 |
| streaming-pivot | fee_x1.5 | $26.37M | $-3K | 65% | 8,545 | 2.5 (100%) | 6.4 (100%) | 89,725 | 0.9 (100%) | 4.0 | 4.0 · 19.0 · 6.0 | 9.0 | $0.00M / $3.45M / $-1.11M | 100% | 44 |
| mixed | fee_x1.5 | $42.26M | $-3K | 73% | 11,655 | 2.7 (100%) | 7.3 (100%) | 87,188 | 1.2 (100%) | 9.0 | 3.0 · 15.0 · 6.0 | 13.0 | $0.53M / $3.45M / $-1.11M | 87% | 53 |
| traditional-holdout | fee_x1.5 | $23.83M | $-4K | 73% | 9,093 | 2.5 (100%) | — (0%) | — | — (0%) | 6.0 | 5.0 · 25.0 · 6.0 | 9.0 | $1.38M / $0.00M / $0.00M | — | 41 |
| balanced | fee_x1.5 | $21.44M | $-4K | 70% | 18,245 | — (0%) | — (0%) | — | — (0%) | 20.0 | 0.0 · 0.0 · 0.0 | 23.0 | $1.62M / $0.00M / $0.00M | — | 81 |

### Formats: share of releases · mean score · HoF % · net per production week; Prestige sources

| Strategy | Config | limited_series: share · avg · HoF% · net/prod-wk | limited_series/original: share · avg · HoF% · net/prod-wk | movie: share · avg · HoF% · net/prod-wk | movie/original: share · avg · HoF% · net/prod-wk | tv: share · avg · HoF% · net/prod-wk | tv/original: share · avg · HoF% · net/prod-wk | Prestige by format | top Prestige sources |
|---|---|---|---|---|---|---|---|---|---|
| streaming-pivot | stream_control | — | — | 47% · 7.91 · 13.5% · $23.9K | 9% · 8.81 · 36.8% · $-7.6K | — | 44% · 8.46 · 24.9% · $-8.4K | movie 36.8%, movie/original 11.2%, tv/original 52% | audience_7_5 30.8%, meters_all_70 22.7%, hall_of_fame 21.3%, critic_8_5 18.5% |
| mixed | stream_control | 30% · 8.04 · 17.8% · $26.6K | 11% · 8.83 · 37.4% · $-8.3K | 20% · 8.42 · 30.4% · $26.2K | 11% · 8.85 · 41.2% · $-7.6K | 19% · 8.3 · 14.9% · $30.2K | 10% · 8.47 · 26.5% · $-8.5K | limited_series 22.3%, tv 23.1%, movie 19.7%, limited_series/original 12.1%, movie/original 12.2%, tv/original 10.6% | audience_7_5 28.3%, hall_of_fame 22.9%, meters_all_70 20.2%, critic_8_5 18% |
| traditional-holdout | stream_control | 12% · 8.23 · 25.1% · $27.6K | — | 27% · 7.72 · 16.1% · $22.4K | — | 60% · 8.4 · 21.7% · $31.0K | — | limited_series 10.8%, movie 17.1%, tv 72.1% | audience_7_5 26.4%, meters_all_70 19.7%, hall_of_fame 18.7%, critic_8_5 15.5% |
| balanced | stream_control | — | — | 100% · 8.47 · 28.6% · $27.6K | — | — | — | movie 100% | audience_7_5 28.4%, hall_of_fame 25.4%, meters_all_70 20.7%, critic_8_5 18.9% |
| streaming-pivot | acquisition_x1.5 | — | — | 47% · 7.91 · 13.5% · $23.9K | 9% · 8.81 · 36.8% · $-7.6K | — | 44% · 8.46 · 24.9% · $-8.4K | movie 36.8%, movie/original 11.2%, tv/original 52% | audience_7_5 30.8%, meters_all_70 22.7%, hall_of_fame 21.3%, critic_8_5 18.5% |
| mixed | acquisition_x1.5 | 30% · 8.04 · 17.8% · $26.6K | 11% · 8.83 · 37.4% · $-8.3K | 20% · 8.42 · 30.4% · $26.2K | 11% · 8.85 · 41.2% · $-7.6K | 19% · 8.3 · 14.9% · $30.2K | 10% · 8.47 · 26.5% · $-8.5K | limited_series 22.3%, tv 23.1%, movie 19.7%, limited_series/original 12.1%, movie/original 12.2%, tv/original 10.6% | audience_7_5 28.3%, hall_of_fame 22.9%, meters_all_70 20.2%, critic_8_5 18% |
| traditional-holdout | acquisition_x1.5 | 12% · 8.23 · 25.1% · $27.6K | — | 27% · 7.72 · 16.1% · $22.4K | — | 60% · 8.4 · 21.7% · $31.0K | — | limited_series 10.8%, movie 17.1%, tv 72.1% | audience_7_5 26.4%, meters_all_70 19.7%, hall_of_fame 18.7%, critic_8_5 15.5% |
| balanced | acquisition_x1.5 | — | — | 100% · 8.47 · 28.6% · $27.6K | — | — | — | movie 100% | audience_7_5 28.4%, hall_of_fame 25.4%, meters_all_70 20.7%, critic_8_5 18.9% |
| streaming-pivot | churn_x1.5 | — | — | 47% · 7.91 · 13.5% · $23.9K | 9% · 8.81 · 36.7% · $-7.6K | 0% · 8.69 · 50% · $31.8K | 44% · 8.46 · 24.9% · $-8.4K | movie 36.8%, movie/original 11.2%, tv/original 51.9%, tv 0.1% | audience_7_5 30.8%, meters_all_70 22.7%, hall_of_fame 21.3%, critic_8_5 18.5% |
| mixed | churn_x1.5 | 30% · 8.04 · 17.8% · $26.6K | 11% · 8.83 · 37.4% · $-8.3K | 20% · 8.42 · 30.4% · $26.2K | 11% · 8.85 · 41.2% · $-7.6K | 19% · 8.3 · 14.9% · $30.2K | 10% · 8.47 · 26.5% · $-8.5K | limited_series 22.3%, tv 23.1%, movie 19.7%, limited_series/original 12.1%, movie/original 12.2%, tv/original 10.6% | audience_7_5 28.3%, hall_of_fame 22.9%, meters_all_70 20.2%, critic_8_5 18% |
| traditional-holdout | churn_x1.5 | 12% · 8.23 · 25.1% · $27.6K | — | 27% · 7.72 · 16.1% · $22.4K | — | 60% · 8.4 · 21.7% · $31.0K | — | limited_series 10.8%, movie 17.1%, tv 72.1% | audience_7_5 26.4%, meters_all_70 19.7%, hall_of_fame 18.7%, critic_8_5 15.5% |
| balanced | churn_x1.5 | — | — | 100% · 8.47 · 28.6% · $27.6K | — | — | — | movie 100% | audience_7_5 28.4%, hall_of_fame 25.4%, meters_all_70 20.7%, critic_8_5 18.9% |
| streaming-pivot | catalog_retention_0.8 | — | — | 47% · 7.91 · 13.5% · $23.9K | 9% · 8.81 · 36.8% · $-7.6K | — | 44% · 8.46 · 24.9% · $-8.4K | movie 36.8%, movie/original 11.2%, tv/original 52% | audience_7_5 30.8%, meters_all_70 22.7%, hall_of_fame 21.3%, critic_8_5 18.5% |
| mixed | catalog_retention_0.8 | 30% · 8.04 · 17.8% · $26.6K | 11% · 8.83 · 37.4% · $-8.3K | 20% · 8.42 · 30.4% · $26.2K | 11% · 8.85 · 41.2% · $-7.6K | 19% · 8.3 · 14.9% · $30.2K | 10% · 8.47 · 26.5% · $-8.5K | limited_series 22.3%, tv 23.1%, movie 19.7%, limited_series/original 12.1%, movie/original 12.2%, tv/original 10.6% | audience_7_5 28.3%, hall_of_fame 22.9%, meters_all_70 20.2%, critic_8_5 18% |
| traditional-holdout | catalog_retention_0.8 | 12% · 8.23 · 25.1% · $27.6K | — | 27% · 7.72 · 16.1% · $22.4K | — | 60% · 8.4 · 21.7% · $31.0K | — | limited_series 10.8%, movie 17.1%, tv 72.1% | audience_7_5 26.4%, meters_all_70 19.7%, hall_of_fame 18.7%, critic_8_5 15.5% |
| balanced | catalog_retention_0.8 | — | — | 100% · 8.47 · 28.6% · $27.6K | — | — | — | movie 100% | audience_7_5 28.4%, hall_of_fame 25.4%, meters_all_70 20.7%, critic_8_5 18.9% |
| streaming-pivot | fee_x1.5 | — | — | 47% · 7.91 · 13.5% · $23.9K | 9% · 8.81 · 36.8% · $-7.6K | — | 44% · 8.46 · 24.9% · $-8.4K | movie 36.8%, movie/original 11.2%, tv/original 52% | audience_7_5 30.8%, meters_all_70 22.7%, hall_of_fame 21.3%, critic_8_5 18.5% |
| mixed | fee_x1.5 | 30% · 8.04 · 17.8% · $26.6K | 11% · 8.83 · 37.4% · $-8.3K | 20% · 8.42 · 30.4% · $26.2K | 11% · 8.85 · 41.2% · $-7.6K | 19% · 8.3 · 14.9% · $30.2K | 10% · 8.47 · 26.5% · $-8.5K | limited_series 22.3%, tv 23.1%, movie 19.7%, limited_series/original 12.1%, movie/original 12.2%, tv/original 10.6% | audience_7_5 28.3%, hall_of_fame 22.9%, meters_all_70 20.2%, critic_8_5 18% |
| traditional-holdout | fee_x1.5 | 12% · 8.23 · 25.1% · $27.6K | — | 27% · 7.72 · 16.1% · $22.4K | — | 60% · 8.4 · 21.7% · $31.0K | — | limited_series 10.8%, movie 17.1%, tv 72.1% | audience_7_5 26.4%, meters_all_70 19.7%, hall_of_fame 18.7%, critic_8_5 15.5% |
| balanced | fee_x1.5 | — | — | 100% · 8.47 · 28.6% · $27.6K | — | — | — | movie 100% | audience_7_5 28.4%, hall_of_fame 25.4%, meters_all_70 20.7%, critic_8_5 18.9% |

### Gate 3 provisional flags

| Variant | Flag | Fired | Evidence |
|---|---|---|---|
| stream_control | STREAMING_INFINITE_GROWTH | **yes** | 23/400 launched careers reached ≥90% of the reachable subscriber market (growth is capped by design; this flags saturation) [PROVISIONAL threshold] |
| stream_control | SUBSCRIBER_CHURN_SPIRAL | no | not fired: 0/400 launched careers lost >60% of subscribers within 3 years [PROVISIONAL threshold] |
| stream_control | TV_SEASON_TOO_PROFITABLE | no | not fired: 0/6974 finished traditional TV seasons netted >2× the batch's pooled movie net per production week ($26,480) [PROVISIONAL threshold] |
| stream_control | TV_SEASON_TOO_LONG | no | not fired: 0 careers kept one show running ≥12 seasons (fatigue cap 0.35 may allow endless renewals) [PROVISIONAL threshold] |
| stream_control | TV_NO_RENEWAL_PATH | no | not fired: 0/400 TV careers never made a second season [PROVISIONAL threshold] |
| stream_control | MIXED_ECONOMY_SOFTLOCK | no | not fired: 0/800 careers spent ≥3 years with negative cash [PROVISIONAL threshold] |
| stream_control | FORMAT_DOMINANT | no | not fired: best cash: mixed; best Prestige: balanced; fires only if one strategy leads both by >50% [PROVISIONAL threshold] |
| stream_control | DELAYED_STUDIO_PROGRESSION | no | not fired: TV not unlocked by year 8: 0/400; streaming not live by year 15: 0/400 [PROVISIONAL threshold] |
| acquisition_x1.5 | STREAMING_INFINITE_GROWTH | **yes** | 233/400 launched careers reached ≥90% of the reachable subscriber market (growth is capped by design; this flags saturation) [PROVISIONAL threshold] |
| acquisition_x1.5 | SUBSCRIBER_CHURN_SPIRAL | no | not fired: 0/400 launched careers lost >60% of subscribers within 3 years [PROVISIONAL threshold] |
| acquisition_x1.5 | TV_SEASON_TOO_PROFITABLE | no | not fired: 0/6974 finished traditional TV seasons netted >2× the batch's pooled movie net per production week ($26,480) [PROVISIONAL threshold] |
| acquisition_x1.5 | TV_SEASON_TOO_LONG | no | not fired: 0 careers kept one show running ≥12 seasons (fatigue cap 0.35 may allow endless renewals) [PROVISIONAL threshold] |
| acquisition_x1.5 | TV_NO_RENEWAL_PATH | no | not fired: 0/400 TV careers never made a second season [PROVISIONAL threshold] |
| acquisition_x1.5 | MIXED_ECONOMY_SOFTLOCK | no | not fired: 0/800 careers spent ≥3 years with negative cash [PROVISIONAL threshold] |
| acquisition_x1.5 | FORMAT_DOMINANT | no | not fired: best cash: mixed; best Prestige: balanced; fires only if one strategy leads both by >50% [PROVISIONAL threshold] |
| acquisition_x1.5 | DELAYED_STUDIO_PROGRESSION | no | not fired: TV not unlocked by year 8: 0/400; streaming not live by year 15: 0/400 [PROVISIONAL threshold] |
| churn_x1.5 | STREAMING_INFINITE_GROWTH | no | not fired: 0/400 launched careers reached ≥90% of the reachable subscriber market (growth is capped by design; this flags saturation) [PROVISIONAL threshold] |
| churn_x1.5 | SUBSCRIBER_CHURN_SPIRAL | no | not fired: 0/400 launched careers lost >60% of subscribers within 3 years [PROVISIONAL threshold] |
| churn_x1.5 | TV_SEASON_TOO_PROFITABLE | no | not fired: 0/6976 finished traditional TV seasons netted >2× the batch's pooled movie net per production week ($26,480) [PROVISIONAL threshold] |
| churn_x1.5 | TV_SEASON_TOO_LONG | no | not fired: 0 careers kept one show running ≥12 seasons (fatigue cap 0.35 may allow endless renewals) [PROVISIONAL threshold] |
| churn_x1.5 | TV_NO_RENEWAL_PATH | no | not fired: 0/402 TV careers never made a second season [PROVISIONAL threshold] |
| churn_x1.5 | MIXED_ECONOMY_SOFTLOCK | no | not fired: 0/800 careers spent ≥3 years with negative cash [PROVISIONAL threshold] |
| churn_x1.5 | FORMAT_DOMINANT | no | not fired: best cash: traditional-holdout; best Prestige: balanced; fires only if one strategy leads both by >50% [PROVISIONAL threshold] |
| churn_x1.5 | DELAYED_STUDIO_PROGRESSION | no | not fired: TV not unlocked by year 8: 0/400; streaming not live by year 15: 0/400 [PROVISIONAL threshold] |
| catalog_retention_0.8 | STREAMING_INFINITE_GROWTH | **yes** | 89/400 launched careers reached ≥90% of the reachable subscriber market (growth is capped by design; this flags saturation) [PROVISIONAL threshold] |
| catalog_retention_0.8 | SUBSCRIBER_CHURN_SPIRAL | no | not fired: 0/400 launched careers lost >60% of subscribers within 3 years [PROVISIONAL threshold] |
| catalog_retention_0.8 | TV_SEASON_TOO_PROFITABLE | no | not fired: 0/6974 finished traditional TV seasons netted >2× the batch's pooled movie net per production week ($26,480) [PROVISIONAL threshold] |
| catalog_retention_0.8 | TV_SEASON_TOO_LONG | no | not fired: 0 careers kept one show running ≥12 seasons (fatigue cap 0.35 may allow endless renewals) [PROVISIONAL threshold] |
| catalog_retention_0.8 | TV_NO_RENEWAL_PATH | no | not fired: 0/400 TV careers never made a second season [PROVISIONAL threshold] |
| catalog_retention_0.8 | MIXED_ECONOMY_SOFTLOCK | no | not fired: 0/800 careers spent ≥3 years with negative cash [PROVISIONAL threshold] |
| catalog_retention_0.8 | FORMAT_DOMINANT | no | not fired: best cash: mixed; best Prestige: balanced; fires only if one strategy leads both by >50% [PROVISIONAL threshold] |
| catalog_retention_0.8 | DELAYED_STUDIO_PROGRESSION | no | not fired: TV not unlocked by year 8: 0/400; streaming not live by year 15: 0/400 [PROVISIONAL threshold] |
| fee_x1.5 | STREAMING_INFINITE_GROWTH | **yes** | 23/400 launched careers reached ≥90% of the reachable subscriber market (growth is capped by design; this flags saturation) [PROVISIONAL threshold] |
| fee_x1.5 | SUBSCRIBER_CHURN_SPIRAL | no | not fired: 0/400 launched careers lost >60% of subscribers within 3 years [PROVISIONAL threshold] |
| fee_x1.5 | TV_SEASON_TOO_PROFITABLE | no | not fired: 0/6974 finished traditional TV seasons netted >2× the batch's pooled movie net per production week ($26,480) [PROVISIONAL threshold] |
| fee_x1.5 | TV_SEASON_TOO_LONG | no | not fired: 0 careers kept one show running ≥12 seasons (fatigue cap 0.35 may allow endless renewals) [PROVISIONAL threshold] |
| fee_x1.5 | TV_NO_RENEWAL_PATH | no | not fired: 0/400 TV careers never made a second season [PROVISIONAL threshold] |
| fee_x1.5 | MIXED_ECONOMY_SOFTLOCK | no | not fired: 0/800 careers spent ≥3 years with negative cash [PROVISIONAL threshold] |
| fee_x1.5 | FORMAT_DOMINANT | no | not fired: best cash: mixed; best Prestige: balanced; fires only if one strategy leads both by >50% [PROVISIONAL threshold] |
| fee_x1.5 | DELAYED_STUDIO_PROGRESSION | no | not fired: TV not unlocked by year 8: 0/400; streaming not live by year 15: 0/400 [PROVISIONAL threshold] |

### Diagnostic flags fired

| Variant | Fired |
|---|---|
| stream_control | PRESTIGE_TOO_FAST, QUALITY_INFLATION |
| acquisition_x1.5 | PRESTIGE_TOO_FAST, QUALITY_INFLATION |
| churn_x1.5 | PRESTIGE_TOO_FAST, QUALITY_INFLATION, DEAD_STRATEGY |
| catalog_retention_0.8 | PRESTIGE_TOO_FAST, QUALITY_INFLATION |
| fee_x1.5 | PRESTIGE_TOO_FAST, QUALITY_INFLATION |
