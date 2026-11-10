# Experiment: A_staff_capacity

> **Simulation assumptions, not design locks.** Paired seeds: every variant runs the same seeds and strategies; only the config overrides differ.

Gate 2.5 item A: studio-wide staff capacity. Agents use real engine caps (legacy strategy cutoffs OFF) in every variant except 'historical'.

- Seeds 1–300 (300) · strategies: balanced, quality-first, cheap-duds, famous-star, self-funder, experimenter, franchise-builder · reference variant: **ladder_4_6_8**
- Ruleset v9.61-movie-kernel-0.1 · measured runtime 418005 ms for 44100 careers

| Variant | Config hash | Note |
|---|---|---|
| historical | 60285097 | pre-Gate-2.5 behavior: no studio cap; strategy heuristic cutoffs (balanced 4, quality-first 5, others never hire) `{}` |
| uncapped | 80ddd734 | no studio cap; strategies hire whenever their cash rule says so `{"agents":{"legacyHeuristicStaffCaps":false},"staffCapacity":{"ladder":[999]}}` |
| fixed_4 | 8df0e342 |  `{"agents":{"legacyHeuristicStaffCaps":false},"staffCapacity":{"ladder":[4]}}` |
| fixed_6 | bc6686f2 |  `{"agents":{"legacyHeuristicStaffCaps":false},"staffCapacity":{"ladder":[6]}}` |
| fixed_8 | 0e288b02 |  `{"agents":{"legacyHeuristicStaffCaps":false},"staffCapacity":{"ladder":[8]}}` |
| ladder_4_6_8 | 537fd0cc | PRIMARY PROPOSAL: start 2/4; upgrade to 6 ($250K + 200 Prestige), then 8 ($750K + 1,000 Prestige). Costs/thresholds are TEST ASSUMPTIONS. `{"agents":{"legacyHeuristicStaffCaps":false},"staffCapacity":{"ladder":[4,6,8],"upgradeCosts":[250000,750000],"upgradePrestige":[200,1000]}}` |
| ladder_4_5_6_7_8 | 22252297 | sensitivity: gradual ladder `{"agents":{"legacyHeuristicStaffCaps":false},"staffCapacity":{"ladder":[4,5,6,7,8],"upgradeCosts":[150000,300000,500000,750000],"upgradePrestige":[100,300,600,1000]}}` |

## 5-production careers

Invariant violations across all variants: **0**.

### Medians by strategy

| Strategy | Variant | endCash | prestige | prestigePerRelease | meanAudience | meanCritic | share8plus | share9plus | shareLate8plus | hofShare | maxStaffEnd | staffCount | meanStaffStat | upgrades | firstUpgradeWeek | years | maxIpFans | negativeCashWeeks |
|---|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|
| balanced | historical | $699K | 75 | 15 | 6.44 | 6.47 | 0% | 0% | 0% | 0% | 999 | 4 | 34.25 | 0 | — | 1.83 | 8821.50 | 2 |
| balanced | uncapped | $644K | 135 | 27 | 6.54 | 6.58 | 0% | 0% | 0% | 0% | 999 | 6 | 31 | 0 | — | 1.83 | 10710.50 | 2 |
| balanced | fixed_4 | $699K | 75 | 15 | 6.44 | 6.47 | 0% | 0% | 0% | 0% | 4 | 4 | 34.25 | 0 | — | 1.83 | 8821.50 | 2 |
| balanced | fixed_6 | $644K | 135 | 27 | 6.54 | 6.58 | 0% | 0% | 0% | 0% | 6 | 6 | 31.20 | 0 | — | 1.83 | 10642.50 | 2 |
| balanced | fixed_8 | $644K | 135 | 27 | 6.54 | 6.58 | 0% | 0% | 0% | 0% | 8 | 6 | 31 | 0 | — | 1.83 | 10710.50 | 2 |
| balanced | ladder_4_6_8 | $699K | 75 | 15 | 6.44 | 6.47 | 0% | 0% | 0% | 0% | 4 | 4 | 34.25 | 0 | — | 1.83 | 8821.50 | 2 |
| balanced | ladder_4_5_6_7_8 | $696K | 75 | 15 | 6.44 | 6.47 | 0% | 0% | 0% | 0% | 4 | 4 | 34.20 | 0 | 64 | 1.83 | 8821.50 | 2 |
| quality-first | historical | $588K | 125 | 25 | 6.50 | 6.56 | 0% | 0% | 0% | 0% | 999 | 5 | 32.70 | 0 | — | 1.83 | 8570.50 | 1 |
| quality-first | uncapped | $547K | 135 | 27 | 6.54 | 6.60 | 0% | 0% | 0% | 0% | 999 | 6 | 31.10 | 0 | — | 1.83 | 9497.50 | 1 |
| quality-first | fixed_4 | $610K | 75 | 15 | 6.43 | 6.51 | 0% | 0% | 0% | 0% | 4 | 4 | 34.60 | 0 | — | 1.83 | 7904.50 | 1 |
| quality-first | fixed_6 | $559K | 135 | 27 | 6.54 | 6.59 | 0% | 0% | 0% | 0% | 6 | 6 | 31.60 | 0 | — | 1.83 | 9317 | 1 |
| quality-first | fixed_8 | $547K | 135 | 27 | 6.54 | 6.60 | 0% | 0% | 0% | 0% | 8 | 6 | 31.10 | 0 | — | 1.83 | 9497.50 | 1 |
| quality-first | ladder_4_6_8 | $608K | 75 | 15 | 6.43 | 6.51 | 0% | 0% | 0% | 0% | 4 | 4 | 34.60 | 0 | 64 | 1.83 | 7904.50 | 1 |
| quality-first | ladder_4_5_6_7_8 | $600K | 75 | 15 | 6.43 | 6.51 | 0% | 0% | 0% | 0% | 4 | 4 | 34.50 | 0 | 64 | 1.83 | 7904.50 | 1 |
| cheap-duds | historical | $449K | 0 | 0 | 5.63 | 5.79 | 0% | 0% | 0% | 0% | 999 | 2 | 35.10 | 0 | — | 1.77 | 1634.50 | 0 |
| cheap-duds | uncapped | $449K | 0 | 0 | 5.63 | 5.79 | 0% | 0% | 0% | 0% | 999 | 2 | 35.10 | 0 | — | 1.77 | 1634.50 | 0 |
| cheap-duds | fixed_4 | $449K | 0 | 0 | 5.63 | 5.79 | 0% | 0% | 0% | 0% | 4 | 2 | 35.10 | 0 | — | 1.77 | 1634.50 | 0 |
| cheap-duds | fixed_6 | $449K | 0 | 0 | 5.63 | 5.79 | 0% | 0% | 0% | 0% | 6 | 2 | 35.10 | 0 | — | 1.77 | 1634.50 | 0 |
| cheap-duds | fixed_8 | $449K | 0 | 0 | 5.63 | 5.79 | 0% | 0% | 0% | 0% | 8 | 2 | 35.10 | 0 | — | 1.77 | 1634.50 | 0 |
| cheap-duds | ladder_4_6_8 | $449K | 0 | 0 | 5.63 | 5.79 | 0% | 0% | 0% | 0% | 4 | 2 | 35.10 | 0 | — | 1.77 | 1634.50 | 0 |
| cheap-duds | ladder_4_5_6_7_8 | $449K | 0 | 0 | 5.63 | 5.79 | 0% | 0% | 0% | 0% | 4 | 2 | 35.10 | 0 | — | 1.77 | 1634.50 | 0 |
| famous-star | historical | $541K | 0 | 0 | 5.78 | 5.95 | 0% | 0% | 0% | 0% | 999 | 2 | 35.10 | 0 | — | 1.81 | 4124 | 7 |
| famous-star | uncapped | $541K | 0 | 0 | 5.78 | 5.95 | 0% | 0% | 0% | 0% | 999 | 2 | 35.10 | 0 | — | 1.81 | 4124 | 7 |
| famous-star | fixed_4 | $541K | 0 | 0 | 5.78 | 5.95 | 0% | 0% | 0% | 0% | 4 | 2 | 35.10 | 0 | — | 1.81 | 4124 | 7 |
| famous-star | fixed_6 | $541K | 0 | 0 | 5.78 | 5.95 | 0% | 0% | 0% | 0% | 6 | 2 | 35.10 | 0 | — | 1.81 | 4124 | 7 |
| famous-star | fixed_8 | $541K | 0 | 0 | 5.78 | 5.95 | 0% | 0% | 0% | 0% | 8 | 2 | 35.10 | 0 | — | 1.81 | 4124 | 7 |
| famous-star | ladder_4_6_8 | $541K | 0 | 0 | 5.78 | 5.95 | 0% | 0% | 0% | 0% | 4 | 2 | 35.10 | 0 | — | 1.81 | 4124 | 7 |
| famous-star | ladder_4_5_6_7_8 | $541K | 0 | 0 | 5.78 | 5.95 | 0% | 0% | 0% | 0% | 4 | 2 | 35.10 | 0 | — | 1.81 | 4124 | 7 |
| self-funder | historical | $252K | 0 | 0 | 5.86 | 5.89 | 0% | 0% | 0% | 0% | 999 | 2 | 35.10 | 0 | — | 1.77 | 1933 | 13 |
| self-funder | uncapped | $252K | 0 | 0 | 5.86 | 5.89 | 0% | 0% | 0% | 0% | 999 | 2 | 35.10 | 0 | — | 1.77 | 1933 | 13 |
| self-funder | fixed_4 | $252K | 0 | 0 | 5.86 | 5.89 | 0% | 0% | 0% | 0% | 4 | 2 | 35.10 | 0 | — | 1.77 | 1933 | 13 |
| self-funder | fixed_6 | $252K | 0 | 0 | 5.86 | 5.89 | 0% | 0% | 0% | 0% | 6 | 2 | 35.10 | 0 | — | 1.77 | 1933 | 13 |
| self-funder | fixed_8 | $252K | 0 | 0 | 5.86 | 5.89 | 0% | 0% | 0% | 0% | 8 | 2 | 35.10 | 0 | — | 1.77 | 1933 | 13 |
| self-funder | ladder_4_6_8 | $252K | 0 | 0 | 5.86 | 5.89 | 0% | 0% | 0% | 0% | 4 | 2 | 35.10 | 0 | — | 1.77 | 1933 | 13 |
| self-funder | ladder_4_5_6_7_8 | $252K | 0 | 0 | 5.86 | 5.89 | 0% | 0% | 0% | 0% | 4 | 2 | 35.10 | 0 | — | 1.77 | 1933 | 13 |
| experimenter | historical | $508K | 0 | 0 | 5.90 | 5.94 | 0% | 0% | 0% | 0% | 999 | 2 | 35.10 | 0 | — | 1.81 | 3334.50 | 1 |
| experimenter | uncapped | $464K | 75 | 15 | 6.30 | 6.34 | 0% | 0% | 0% | 0% | 999 | 5 | 30.80 | 0 | — | 1.83 | 7372.50 | 1 |
| experimenter | fixed_4 | $482K | 75 | 15 | 6.23 | 6.29 | 0% | 0% | 0% | 0% | 4 | 4 | 31.70 | 0 | — | 1.83 | 6362 | 1 |
| experimenter | fixed_6 | $464K | 75 | 15 | 6.30 | 6.34 | 0% | 0% | 0% | 0% | 6 | 5 | 30.85 | 0 | — | 1.83 | 7351 | 1 |
| experimenter | fixed_8 | $464K | 75 | 15 | 6.30 | 6.34 | 0% | 0% | 0% | 0% | 8 | 5 | 30.80 | 0 | — | 1.83 | 7372.50 | 1 |
| experimenter | ladder_4_6_8 | $482K | 75 | 15 | 6.23 | 6.29 | 0% | 0% | 0% | 0% | 4 | 4 | 31.70 | 0 | — | 1.83 | 6362 | 1 |
| experimenter | ladder_4_5_6_7_8 | $482K | 75 | 15 | 6.23 | 6.29 | 0% | 0% | 0% | 0% | 4 | 4 | 31.70 | 0 | — | 1.83 | 6362 | 1 |
| franchise-builder | historical | $749K | 0 | 0 | 6.08 | 6.11 | 0% | 0% | 0% | 0% | 999 | 2 | 40.90 | 0 | — | 1.83 | 7680.50 | 2 |
| franchise-builder | uncapped | $661K | 125 | 25 | 6.51 | 6.55 | 0% | 0% | 0% | 0% | 999 | 6 | 31.10 | 0 | — | 1.83 | 13390 | 2 |
| franchise-builder | fixed_4 | $712K | 75 | 15 | 6.42 | 6.46 | 0% | 0% | 0% | 0% | 4 | 4 | 33.95 | 0 | — | 1.83 | 11556 | 2 |
| franchise-builder | fixed_6 | $664K | 125 | 25 | 6.51 | 6.55 | 0% | 0% | 0% | 0% | 6 | 6 | 31.20 | 0 | — | 1.83 | 13265.50 | 2 |
| franchise-builder | fixed_8 | $661K | 125 | 25 | 6.51 | 6.55 | 0% | 0% | 0% | 0% | 8 | 6 | 31.10 | 0 | — | 1.83 | 13390 | 2 |
| franchise-builder | ladder_4_6_8 | $712K | 75 | 15 | 6.42 | 6.46 | 0% | 0% | 0% | 0% | 4 | 4 | 33.95 | 0 | — | 1.83 | 11556 | 2 |
| franchise-builder | ladder_4_5_6_7_8 | $711K | 75 | 15 | 6.42 | 6.46 | 0% | 0% | 0% | 0% | 4 | 4 | 33.90 | 0 | 64 | 1.83 | 11556 | 2 |

### Paired deltas vs **ladder_4_6_8** (median of per-seed differences; share of seeds where the variant is higher)

| Strategy | Variant | Δ endCash | Δ prestige | Δ share8plus | Δ meanAudience |
|---|---|---:|---:|---:|---:|
| balanced | historical | $0K (0%) | 0 (0%) | 0% (0%) | 0 (0%) |
| balanced | uncapped | $-56K (0%) | 50 (82%) | 0% (36%) | 0.10 (92%) |
| balanced | fixed_4 | $0K (0%) | 0 (0%) | 0% (0%) | 0 (0%) |
| balanced | fixed_6 | $-55K (1%) | 50 (82%) | 0% (36%) | 0.10 (92%) |
| balanced | fixed_8 | $-56K (0%) | 50 (82%) | 0% (36%) | 0.10 (92%) |
| balanced | ladder_4_5_6_7_8 | $0K (0%) | 0 (2%) | 0% (0%) | 0 (3%) |
| quality-first | historical | $-29K (5%) | 50 (76%) | 0% (14%) | 0.05 (90%) |
| quality-first | uncapped | $-60K (1%) | 50 (83%) | 0% (32%) | 0.10 (90%) |
| quality-first | fixed_4 | $0K (1%) | 0 (0%) | 0% (0%) | 0 (0%) |
| quality-first | fixed_6 | $-59K (4%) | 50 (83%) | 0% (28%) | 0.10 (90%) |
| quality-first | fixed_8 | $-60K (1%) | 50 (83%) | 0% (32%) | 0.10 (90%) |
| quality-first | ladder_4_5_6_7_8 | $0K (1%) | 0 (4%) | 0% (1%) | 0 (5%) |
| cheap-duds | historical | $0K (0%) | 0 (0%) | 0% (0%) | 0 (0%) |
| cheap-duds | uncapped | $0K (0%) | 0 (0%) | 0% (0%) | 0 (0%) |
| cheap-duds | fixed_4 | $0K (0%) | 0 (0%) | 0% (0%) | 0 (0%) |
| cheap-duds | fixed_6 | $0K (0%) | 0 (0%) | 0% (0%) | 0 (0%) |
| cheap-duds | fixed_8 | $0K (0%) | 0 (0%) | 0% (0%) | 0 (0%) |
| cheap-duds | ladder_4_5_6_7_8 | $0K (0%) | 0 (0%) | 0% (0%) | 0 (0%) |
| famous-star | historical | $0K (0%) | 0 (0%) | 0% (0%) | 0 (0%) |
| famous-star | uncapped | $0K (0%) | 0 (0%) | 0% (0%) | 0 (0%) |
| famous-star | fixed_4 | $0K (0%) | 0 (0%) | 0% (0%) | 0 (0%) |
| famous-star | fixed_6 | $0K (0%) | 0 (0%) | 0% (0%) | 0 (0%) |
| famous-star | fixed_8 | $0K (0%) | 0 (0%) | 0% (0%) | 0 (0%) |
| famous-star | ladder_4_5_6_7_8 | $0K (0%) | 0 (0%) | 0% (0%) | 0 (0%) |
| self-funder | historical | $0K (0%) | 0 (0%) | 0% (0%) | 0 (0%) |
| self-funder | uncapped | $0K (0%) | 0 (0%) | 0% (0%) | 0 (0%) |
| self-funder | fixed_4 | $0K (0%) | 0 (0%) | 0% (0%) | 0 (0%) |
| self-funder | fixed_6 | $0K (0%) | 0 (0%) | 0% (0%) | 0 (0%) |
| self-funder | fixed_8 | $0K (0%) | 0 (0%) | 0% (0%) | 0 (0%) |
| self-funder | ladder_4_5_6_7_8 | $0K (0%) | 0 (0%) | 0% (0%) | 0 (0%) |
| experimenter | historical | $26K (68%) | -75 (0%) | 0% (0%) | -0.34 (4%) |
| experimenter | uncapped | $0K (10%) | 0 (49%) | 0% (18%) | 0.03 (51%) |
| experimenter | fixed_4 | $0K (0%) | 0 (0%) | 0% (0%) | 0 (0%) |
| experimenter | fixed_6 | $0K (11%) | 0 (49%) | 0% (18%) | 0.03 (51%) |
| experimenter | fixed_8 | $0K (10%) | 0 (49%) | 0% (18%) | 0.03 (51%) |
| experimenter | ladder_4_5_6_7_8 | $0K (0%) | 0 (0%) | 0% (0%) | 0 (0%) |
| franchise-builder | historical | $44K (84%) | -75 (0%) | 0% (0%) | -0.35 (0%) |
| franchise-builder | uncapped | $-56K (0%) | 50 (81%) | 0% (30%) | 0.09 (89%) |
| franchise-builder | fixed_4 | $0K (0%) | 0 (0%) | 0% (0%) | 0 (0%) |
| franchise-builder | fixed_6 | $-55K (0%) | 50 (81%) | 0% (29%) | 0.09 (89%) |
| franchise-builder | fixed_8 | $-56K (0%) | 50 (81%) | 0% (30%) | 0.09 (89%) |
| franchise-builder | ladder_4_5_6_7_8 | $0K (0%) | 0 (3%) | 0% (1%) | 0 (3%) |

### Mean review score (avg of Audience+Critic) by production index

| Strategy | Variant | #1 | #3 | #5 |
|---|---|---:|---:|---:|
| balanced | historical | 5.62 | 6.22 | 7.39 |
| balanced | uncapped | 5.62 | 6.22 | 7.85 |
| balanced | fixed_4 | 5.62 | 6.22 | 7.39 |
| balanced | fixed_6 | 5.62 | 6.22 | 7.82 |
| balanced | fixed_8 | 5.62 | 6.22 | 7.85 |
| balanced | ladder_4_6_8 | 5.62 | 6.22 | 7.39 |
| balanced | ladder_4_5_6_7_8 | 5.62 | 6.22 | 7.40 |
| quality-first | historical | 5.59 | 6.37 | 7.55 |
| quality-first | uncapped | 5.59 | 6.37 | 7.79 |
| quality-first | fixed_4 | 5.59 | 6.37 | 7.32 |
| quality-first | fixed_6 | 5.59 | 6.37 | 7.73 |
| quality-first | fixed_8 | 5.59 | 6.37 | 7.79 |
| quality-first | ladder_4_6_8 | 5.59 | 6.37 | 7.33 |
| quality-first | ladder_4_5_6_7_8 | 5.59 | 6.37 | 7.34 |
| cheap-duds | historical | 5.47 | 5.74 | 5.81 |
| cheap-duds | uncapped | 5.47 | 5.74 | 5.81 |
| cheap-duds | fixed_4 | 5.47 | 5.74 | 5.81 |
| cheap-duds | fixed_6 | 5.47 | 5.74 | 5.81 |
| cheap-duds | fixed_8 | 5.47 | 5.74 | 5.81 |
| cheap-duds | ladder_4_6_8 | 5.47 | 5.74 | 5.81 |
| cheap-duds | ladder_4_5_6_7_8 | 5.47 | 5.74 | 5.81 |
| famous-star | historical | 5.57 | 5.94 | 5.98 |
| famous-star | uncapped | 5.57 | 5.94 | 5.98 |
| famous-star | fixed_4 | 5.57 | 5.94 | 5.98 |
| famous-star | fixed_6 | 5.57 | 5.94 | 5.98 |
| famous-star | fixed_8 | 5.57 | 5.94 | 5.98 |
| famous-star | ladder_4_6_8 | 5.57 | 5.94 | 5.98 |
| famous-star | ladder_4_5_6_7_8 | 5.57 | 5.94 | 5.98 |
| self-funder | historical | 5.48 | 5.92 | 6.08 |
| self-funder | uncapped | 5.48 | 5.92 | 6.08 |
| self-funder | fixed_4 | 5.48 | 5.92 | 6.08 |
| self-funder | fixed_6 | 5.48 | 5.92 | 6.08 |
| self-funder | fixed_8 | 5.48 | 5.92 | 6.08 |
| self-funder | ladder_4_6_8 | 5.48 | 5.92 | 6.08 |
| self-funder | ladder_4_5_6_7_8 | 5.48 | 5.92 | 6.08 |
| experimenter | historical | 5.59 | 5.93 | 6.11 |
| experimenter | uncapped | 5.59 | 5.94 | 7.47 |
| experimenter | fixed_4 | 5.59 | 5.94 | 7.18 |
| experimenter | fixed_6 | 5.59 | 5.94 | 7.47 |
| experimenter | fixed_8 | 5.59 | 5.94 | 7.47 |
| experimenter | ladder_4_6_8 | 5.59 | 5.94 | 7.18 |
| experimenter | ladder_4_5_6_7_8 | 5.59 | 5.94 | 7.18 |
| franchise-builder | historical | 5.60 | 6.12 | 6.51 |
| franchise-builder | uncapped | 5.60 | 6.17 | 7.79 |
| franchise-builder | fixed_4 | 5.60 | 6.17 | 7.37 |
| franchise-builder | fixed_6 | 5.60 | 6.17 | 7.77 |
| franchise-builder | fixed_8 | 5.60 | 6.17 | 7.79 |
| franchise-builder | ladder_4_6_8 | 5.60 | 6.17 | 7.37 |
| franchise-builder | ladder_4_5_6_7_8 | 5.60 | 6.17 | 7.38 |

### Diagnostic flags fired

| Variant | Fired |
|---|---|
| historical | EARLY_SOFTLOCK |
| uncapped | EARLY_SOFTLOCK |
| fixed_4 | EARLY_SOFTLOCK |
| fixed_6 | EARLY_SOFTLOCK |
| fixed_8 | EARLY_SOFTLOCK |
| ladder_4_6_8 | EARLY_SOFTLOCK |
| ladder_4_5_6_7_8 | EARLY_SOFTLOCK |

## 20-production careers

Invariant violations across all variants: **0**.

### Medians by strategy

| Strategy | Variant | endCash | prestige | prestigePerRelease | meanAudience | meanCritic | share8plus | share9plus | shareLate8plus | hofShare | maxStaffEnd | staffCount | meanStaffStat | upgrades | firstUpgradeWeek | years | maxIpFans | negativeCashWeeks |
|---|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|
| balanced | historical | $4738K | 1670 | 83.50 | 7.64 | 7.61 | 40% | 0% | 63% | 0% | 999 | 4 | 74.60 | 0 | — | 6.44 | 50392 | 2 |
| balanced | uncapped | $119K | 3407.50 | 170.40 | 8.51 | 8.36 | 75% | 45% | 100% | 45% | 999 | 36 | 42.10 | 0 | — | 6.37 | 77257.50 | 4 |
| balanced | fixed_4 | $4738K | 1670 | 83.50 | 7.64 | 7.61 | 40% | 0% | 63% | 0% | 4 | 4 | 74.60 | 0 | — | 6.44 | 50392 | 2 |
| balanced | fixed_6 | $4516K | 2212.50 | 110.65 | 7.94 | 7.88 | 60% | 10% | 88% | 10% | 6 | 6 | 66.40 | 0 | — | 6.44 | 58611 | 2 |
| balanced | fixed_8 | $4099K | 2620 | 131 | 8.12 | 8.03 | 65% | 20% | 88% | 20% | 8 | 8 | 61.90 | 0 | — | 6.42 | 66202.50 | 2 |
| balanced | ladder_4_6_8 | $3209K | 2157.50 | 107.90 | 7.90 | 7.83 | 55% | 10% | 88% | 10% | 8 | 8 | 57.35 | 2 | 112 | 6.44 | 59693.50 | 2 |
| balanced | ladder_4_5_6_7_8 | $2499K | 2177.50 | 108.90 | 7.93 | 7.87 | 55% | 10% | 88% | 10% | 8 | 8 | 57.90 | 4 | 96 | 6.40 | 59065 | 2 |
| quality-first | historical | $4303K | 2535 | 126.80 | 7.80 | 7.74 | 50% | 5% | 75% | 5% | 999 | 5 | 69.80 | 0 | — | 6.44 | 22661.50 | 1 |
| quality-first | uncapped | $-168K | 4450 | 222.50 | 8.43 | 8.33 | 75% | 40% | 100% | 40% | 999 | 34 | 42.60 | 0 | — | 6.44 | 28294 | 15 |
| quality-first | fixed_4 | $4352K | 2132.50 | 106.65 | 7.63 | 7.59 | 40% | 0% | 63% | 0% | 4 | 4 | 74.90 | 0 | — | 6.44 | 20864 | 1 |
| quality-first | fixed_6 | $4148K | 2815 | 140.80 | 7.94 | 7.86 | 60% | 10% | 88% | 10% | 6 | 6 | 66.50 | 0 | — | 6.44 | 24168.50 | 1 |
| quality-first | fixed_8 | $3757K | 3312.50 | 165.65 | 8.09 | 8.02 | 65% | 15% | 88% | 15% | 8 | 8 | 62.05 | 0 | — | 6.44 | 25226.50 | 1 |
| quality-first | ladder_4_6_8 | $2801K | 2745 | 137.30 | 7.90 | 7.83 | 55% | 10% | 88% | 10% | 8 | 8 | 58 | 2 | 112 | 6.44 | 24573 | 1 |
| quality-first | ladder_4_5_6_7_8 | $2111K | 2842.50 | 142.15 | 7.93 | 7.85 | 55% | 10% | 88% | 10% | 8 | 8 | 58.30 | 4 | 96 | 6.44 | 25050 | 1 |
| cheap-duds | historical | $1877K | 0 | 0 | 6.01 | 6.17 | 0% | 0% | 0% | 0% | 999 | 2 | 57 | 0 | — | 6.40 | 3380.50 | 0 |
| cheap-duds | uncapped | $1877K | 0 | 0 | 6.01 | 6.17 | 0% | 0% | 0% | 0% | 999 | 2 | 57 | 0 | — | 6.40 | 3380.50 | 0 |
| cheap-duds | fixed_4 | $1877K | 0 | 0 | 6.01 | 6.17 | 0% | 0% | 0% | 0% | 4 | 2 | 57 | 0 | — | 6.40 | 3380.50 | 0 |
| cheap-duds | fixed_6 | $1877K | 0 | 0 | 6.01 | 6.17 | 0% | 0% | 0% | 0% | 6 | 2 | 57 | 0 | — | 6.40 | 3380.50 | 0 |
| cheap-duds | fixed_8 | $1877K | 0 | 0 | 6.01 | 6.17 | 0% | 0% | 0% | 0% | 8 | 2 | 57 | 0 | — | 6.40 | 3380.50 | 0 |
| cheap-duds | ladder_4_6_8 | $1877K | 0 | 0 | 6.01 | 6.17 | 0% | 0% | 0% | 0% | 4 | 2 | 57 | 0 | — | 6.40 | 3380.50 | 0 |
| cheap-duds | ladder_4_5_6_7_8 | $1877K | 0 | 0 | 6.01 | 6.17 | 0% | 0% | 0% | 0% | 4 | 2 | 57 | 0 | — | 6.40 | 3380.50 | 0 |
| famous-star | historical | $2852K | 0 | 0 | 6.32 | 6.37 | 0% | 0% | 0% | 0% | 999 | 2 | 57 | 0 | — | 6.44 | 8460.50 | 7 |
| famous-star | uncapped | $2852K | 0 | 0 | 6.32 | 6.37 | 0% | 0% | 0% | 0% | 999 | 2 | 57 | 0 | — | 6.44 | 8460.50 | 7 |
| famous-star | fixed_4 | $2852K | 0 | 0 | 6.32 | 6.37 | 0% | 0% | 0% | 0% | 4 | 2 | 57 | 0 | — | 6.44 | 8460.50 | 7 |
| famous-star | fixed_6 | $2852K | 0 | 0 | 6.32 | 6.37 | 0% | 0% | 0% | 0% | 6 | 2 | 57 | 0 | — | 6.44 | 8460.50 | 7 |
| famous-star | fixed_8 | $2852K | 0 | 0 | 6.32 | 6.37 | 0% | 0% | 0% | 0% | 8 | 2 | 57 | 0 | — | 6.44 | 8460.50 | 7 |
| famous-star | ladder_4_6_8 | $2852K | 0 | 0 | 6.32 | 6.37 | 0% | 0% | 0% | 0% | 4 | 2 | 57 | 0 | — | 6.44 | 8460.50 | 7 |
| famous-star | ladder_4_5_6_7_8 | $2852K | 0 | 0 | 6.32 | 6.37 | 0% | 0% | 0% | 0% | 4 | 2 | 57 | 0 | — | 6.44 | 8460.50 | 7 |
| self-funder | historical | $246K | 150 | 7.50 | 6.59 | 6.57 | 0% | 0% | 0% | 0% | 999 | 2 | 68.30 | 0 | — | 6.42 | 3751.50 | 13 |
| self-funder | uncapped | $246K | 150 | 7.50 | 6.59 | 6.57 | 0% | 0% | 0% | 0% | 999 | 2 | 68.30 | 0 | — | 6.42 | 3751.50 | 13 |
| self-funder | fixed_4 | $246K | 150 | 7.50 | 6.59 | 6.57 | 0% | 0% | 0% | 0% | 4 | 2 | 68.30 | 0 | — | 6.42 | 3751.50 | 13 |
| self-funder | fixed_6 | $246K | 150 | 7.50 | 6.59 | 6.57 | 0% | 0% | 0% | 0% | 6 | 2 | 68.30 | 0 | — | 6.42 | 3751.50 | 13 |
| self-funder | fixed_8 | $246K | 150 | 7.50 | 6.59 | 6.57 | 0% | 0% | 0% | 0% | 8 | 2 | 68.30 | 0 | — | 6.42 | 3751.50 | 13 |
| self-funder | ladder_4_6_8 | $246K | 150 | 7.50 | 6.59 | 6.57 | 0% | 0% | 0% | 0% | 4 | 2 | 68.30 | 0 | — | 6.42 | 3751.50 | 13 |
| self-funder | ladder_4_5_6_7_8 | $246K | 150 | 7.50 | 6.59 | 6.57 | 0% | 0% | 0% | 0% | 4 | 2 | 68.30 | 0 | — | 6.42 | 3751.50 | 13 |
| experimenter | historical | $2985K | 75 | 3.80 | 6.41 | 6.43 | 0% | 0% | 0% | 0% | 999 | 2 | 57 | 0 | — | 6.44 | 7092 | 1 |
| experimenter | uncapped | $-272K | 4325 | 216.30 | 8.34 | 8.26 | 70% | 40% | 100% | 40% | 999 | 30 | 43.70 | 0 | — | 6.44 | 28730.50 | 28.50 |
| experimenter | fixed_4 | $3650K | 1577.50 | 78.90 | 7.34 | 7.34 | 25% | 0% | 38% | 0% | 4 | 4 | 54.70 | 0 | — | 6.44 | 16748.50 | 1 |
| experimenter | fixed_6 | $3580K | 2620 | 131 | 7.75 | 7.74 | 50% | 10% | 75% | 10% | 6 | 6 | 53.50 | 0 | — | 6.44 | 21964 | 1 |
| experimenter | fixed_8 | $3235K | 3220 | 161.05 | 7.97 | 7.93 | 60% | 15% | 88% | 15% | 8 | 8 | 52.50 | 0 | — | 6.44 | 24571.50 | 1 |
| experimenter | ladder_4_6_8 | $2260K | 2275 | 113.80 | 7.65 | 7.62 | 45% | 10% | 75% | 10% | 8 | 8 | 47.60 | 2 | 144 | 6.44 | 22903 | 1 |
| experimenter | ladder_4_5_6_7_8 | $1560K | 2452.50 | 122.65 | 7.69 | 7.65 | 45% | 10% | 75% | 10% | 8 | 8 | 48.10 | 4 | 112 | 6.44 | 23107.50 | 1 |
| franchise-builder | historical | $3597K | 175 | 8.80 | 6.60 | 6.57 | 0% | 0% | 0% | 0% | 999 | 2 | 96.80 | 0 | — | 6.44 | 38402 | 2 |
| franchise-builder | uncapped | $-380K | 335 | 16.80 | 7.75 | 7.67 | 35% | 0% | 25% | 0% | 999 | 32 | 43.50 | 0 | — | 6.44 | 107064 | 32 |
| franchise-builder | fixed_4 | $3783K | 225 | 11.30 | 7.03 | 7.01 | 0% | 0% | 0% | 0% | 4 | 4 | 74.40 | 0 | — | 6.44 | 63415 | 2 |
| franchise-builder | fixed_6 | $3629K | 250 | 12.50 | 7.28 | 7.25 | 10% | 0% | 0% | 0% | 6 | 6 | 66.30 | 0 | — | 6.44 | 78063 | 2 |
| franchise-builder | fixed_8 | $3267K | 260 | 13 | 7.44 | 7.38 | 20% | 0% | 0% | 0% | 8 | 8 | 61.80 | 0 | — | 6.44 | 87910.50 | 2 |
| franchise-builder | ladder_4_6_8 | $3525K | 225 | 11.30 | 7.06 | 7.04 | 0% | 0% | 0% | 0% | 5 | 5 | 69.80 | 0.50 | 112 | 6.44 | 67125 | 2 |
| franchise-builder | ladder_4_5_6_7_8 | $3474K | 250 | 12.50 | 7.14 | 7.11 | 0% | 0% | 0% | 0% | 5 | 5 | 68.80 | 1 | 96 | 6.44 | 69644.50 | 2 |

### Paired deltas vs **ladder_4_6_8** (median of per-seed differences; share of seeds where the variant is higher)

| Strategy | Variant | Δ endCash | Δ prestige | Δ share8plus | Δ meanAudience |
|---|---|---:|---:|---:|---:|
| balanced | historical | $1532K (100%) | -487.50 (15%) | -15% (4%) | -0.24 (7%) |
| balanced | uncapped | $-3080K (0%) | 1237.50 (96%) | 18% (94%) | 0.58 (99%) |
| balanced | fixed_4 | $1532K (100%) | -487.50 (15%) | -15% (4%) | -0.24 (7%) |
| balanced | fixed_6 | $1272K (100%) | 82.50 (54%) | 5% (58%) | 0.05 (61%) |
| balanced | fixed_8 | $885K (100%) | 440 (74%) | 10% (79%) | 0.23 (86%) |
| balanced | ladder_4_5_6_7_8 | $-728K (0%) | 0 (47%) | 0% (42%) | 0.02 (55%) |
| quality-first | historical | $1490K (100%) | -202.50 (24%) | -5% (16%) | -0.10 (21%) |
| quality-first | uncapped | $-2918K (0%) | 1695 (99%) | 20% (98%) | 0.53 (100%) |
| quality-first | fixed_4 | $1545K (100%) | -615 (3%) | -15% (2%) | -0.25 (3%) |
| quality-first | fixed_6 | $1329K (100%) | 55 (56%) | 5% (52%) | 0.04 (58%) |
| quality-first | fixed_8 | $950K (100%) | 577.50 (89%) | 10% (87%) | 0.21 (93%) |
| quality-first | ladder_4_5_6_7_8 | $-693K (0%) | 67.50 (54%) | 0% (35%) | 0.03 (57%) |
| cheap-duds | historical | $0K (0%) | 0 (0%) | 0% (0%) | 0 (0%) |
| cheap-duds | uncapped | $0K (0%) | 0 (0%) | 0% (0%) | 0 (0%) |
| cheap-duds | fixed_4 | $0K (0%) | 0 (0%) | 0% (0%) | 0 (0%) |
| cheap-duds | fixed_6 | $0K (0%) | 0 (0%) | 0% (0%) | 0 (0%) |
| cheap-duds | fixed_8 | $0K (0%) | 0 (0%) | 0% (0%) | 0 (0%) |
| cheap-duds | ladder_4_5_6_7_8 | $0K (0%) | 0 (0%) | 0% (0%) | 0 (0%) |
| famous-star | historical | $0K (0%) | 0 (0%) | 0% (0%) | 0 (0%) |
| famous-star | uncapped | $0K (0%) | 0 (0%) | 0% (0%) | 0 (0%) |
| famous-star | fixed_4 | $0K (0%) | 0 (0%) | 0% (0%) | 0 (0%) |
| famous-star | fixed_6 | $0K (0%) | 0 (0%) | 0% (0%) | 0 (0%) |
| famous-star | fixed_8 | $0K (0%) | 0 (0%) | 0% (0%) | 0 (0%) |
| famous-star | ladder_4_5_6_7_8 | $0K (0%) | 0 (0%) | 0% (0%) | 0 (0%) |
| self-funder | historical | $0K (0%) | 0 (0%) | 0% (0%) | 0 (0%) |
| self-funder | uncapped | $0K (0%) | 0 (0%) | 0% (0%) | 0 (0%) |
| self-funder | fixed_4 | $0K (0%) | 0 (0%) | 0% (0%) | 0 (0%) |
| self-funder | fixed_6 | $0K (0%) | 0 (0%) | 0% (0%) | 0 (0%) |
| self-funder | fixed_8 | $0K (0%) | 0 (0%) | 0% (0%) | 0 (0%) |
| self-funder | ladder_4_5_6_7_8 | $0K (0%) | 0 (0%) | 0% (0%) | 0 (0%) |
| experimenter | historical | $739K (99%) | -2192.50 (0%) | -45% (0%) | -1.24 (0%) |
| experimenter | uncapped | $-2524K (0%) | 2042.50 (100%) | 25% (99%) | 0.68 (100%) |
| experimenter | fixed_4 | $1404K (100%) | -685 (1%) | -15% (1%) | -0.32 (0%) |
| experimenter | fixed_6 | $1305K (100%) | 360 (76%) | 5% (69%) | 0.09 (72%) |
| experimenter | fixed_8 | $970K (100%) | 960 (97%) | 15% (92%) | 0.31 (96%) |
| experimenter | ladder_4_5_6_7_8 | $-705K (0%) | 90 (69%) | 0% (44%) | 0.02 (62%) |
| franchise-builder | historical | $32K (53%) | -47.50 (30%) | 0% (15%) | -0.50 (11%) |
| franchise-builder | uncapped | $-3895K (0%) | 160 (75%) | 30% (95%) | 0.64 (98%) |
| franchise-builder | fixed_4 | $9K (50%) | 0 (1%) | 0% (1%) | 0 (1%) |
| franchise-builder | fixed_6 | $212K (66%) | 0 (48%) | 5% (58%) | 0.19 (95%) |
| franchise-builder | fixed_8 | $-179K (12%) | 85 (59%) | 15% (86%) | 0.34 (98%) |
| franchise-builder | ladder_4_5_6_7_8 | $-198K (38%) | 0 (25%) | 0% (13%) | 0.06 (56%) |

### Mean review score (avg of Audience+Critic) by production index

| Strategy | Variant | #1 | #3 | #5 | #10 | #20 |
|---|---|---:|---:|---:|---:|---:|
| balanced | historical | 5.62 | 6.22 | 7.39 | 7.98 | 8.29 |
| balanced | uncapped | 5.62 | 6.22 | 7.85 | 8.98 | 9.25 |
| balanced | fixed_4 | 5.62 | 6.22 | 7.39 | 7.98 | 8.29 |
| balanced | fixed_6 | 5.62 | 6.22 | 7.82 | 8.29 | 8.63 |
| balanced | fixed_8 | 5.62 | 6.22 | 7.85 | 8.53 | 8.73 |
| balanced | ladder_4_6_8 | 5.62 | 6.22 | 7.39 | 8.23 | 8.68 |
| balanced | ladder_4_5_6_7_8 | 5.62 | 6.22 | 7.40 | 8.29 | 8.70 |
| quality-first | historical | 5.59 | 6.37 | 7.55 | 8.11 | 8.48 |
| quality-first | uncapped | 5.59 | 6.37 | 7.79 | 8.91 | 9.21 |
| quality-first | fixed_4 | 5.59 | 6.37 | 7.32 | 7.92 | 8.28 |
| quality-first | fixed_6 | 5.59 | 6.37 | 7.73 | 8.25 | 8.61 |
| quality-first | fixed_8 | 5.59 | 6.37 | 7.79 | 8.48 | 8.72 |
| quality-first | ladder_4_6_8 | 5.59 | 6.37 | 7.33 | 8.21 | 8.72 |
| quality-first | ladder_4_5_6_7_8 | 5.59 | 6.37 | 7.34 | 8.24 | 8.71 |
| cheap-duds | historical | 5.47 | 5.74 | 5.81 | 6.11 | 6.43 |
| cheap-duds | uncapped | 5.47 | 5.74 | 5.81 | 6.11 | 6.43 |
| cheap-duds | fixed_4 | 5.47 | 5.74 | 5.81 | 6.11 | 6.43 |
| cheap-duds | fixed_6 | 5.47 | 5.74 | 5.81 | 6.11 | 6.43 |
| cheap-duds | fixed_8 | 5.47 | 5.74 | 5.81 | 6.11 | 6.43 |
| cheap-duds | ladder_4_6_8 | 5.47 | 5.74 | 5.81 | 6.11 | 6.43 |
| cheap-duds | ladder_4_5_6_7_8 | 5.47 | 5.74 | 5.81 | 6.11 | 6.43 |
| famous-star | historical | 5.57 | 5.94 | 5.98 | 6.38 | 6.79 |
| famous-star | uncapped | 5.57 | 5.94 | 5.98 | 6.38 | 6.79 |
| famous-star | fixed_4 | 5.57 | 5.94 | 5.98 | 6.38 | 6.79 |
| famous-star | fixed_6 | 5.57 | 5.94 | 5.98 | 6.38 | 6.79 |
| famous-star | fixed_8 | 5.57 | 5.94 | 5.98 | 6.38 | 6.79 |
| famous-star | ladder_4_6_8 | 5.57 | 5.94 | 5.98 | 6.38 | 6.79 |
| famous-star | ladder_4_5_6_7_8 | 5.57 | 5.94 | 5.98 | 6.38 | 6.79 |
| self-funder | historical | 5.48 | 5.92 | 6.08 | 6.68 | 7.14 |
| self-funder | uncapped | 5.48 | 5.92 | 6.08 | 6.68 | 7.14 |
| self-funder | fixed_4 | 5.48 | 5.92 | 6.08 | 6.68 | 7.14 |
| self-funder | fixed_6 | 5.48 | 5.92 | 6.08 | 6.68 | 7.14 |
| self-funder | fixed_8 | 5.48 | 5.92 | 6.08 | 6.68 | 7.14 |
| self-funder | ladder_4_6_8 | 5.48 | 5.92 | 6.08 | 6.68 | 7.14 |
| self-funder | ladder_4_5_6_7_8 | 5.48 | 5.92 | 6.08 | 6.68 | 7.14 |
| experimenter | historical | 5.59 | 5.93 | 6.11 | 6.52 | 6.94 |
| experimenter | uncapped | 5.59 | 5.94 | 7.47 | 8.92 | 9.23 |
| experimenter | fixed_4 | 5.59 | 5.94 | 7.18 | 7.65 | 8.00 |
| experimenter | fixed_6 | 5.59 | 5.94 | 7.47 | 8.20 | 8.44 |
| experimenter | fixed_8 | 5.59 | 5.94 | 7.47 | 8.50 | 8.67 |
| experimenter | ladder_4_6_8 | 5.59 | 5.94 | 7.18 | 8.00 | 8.60 |
| experimenter | ladder_4_5_6_7_8 | 5.59 | 5.94 | 7.18 | 8.00 | 8.58 |
| franchise-builder | historical | 5.60 | 6.12 | 6.51 | 6.78 | 6.77 |
| franchise-builder | uncapped | 5.60 | 6.17 | 7.79 | 8.30 | 7.52 |
| franchise-builder | fixed_4 | 5.60 | 6.17 | 7.37 | 7.33 | 6.74 |
| franchise-builder | fixed_6 | 5.60 | 6.17 | 7.77 | 7.67 | 6.96 |
| franchise-builder | fixed_8 | 5.60 | 6.17 | 7.79 | 7.89 | 7.08 |
| franchise-builder | ladder_4_6_8 | 5.60 | 6.17 | 7.37 | 7.47 | 6.84 |
| franchise-builder | ladder_4_5_6_7_8 | 5.60 | 6.17 | 7.38 | 7.51 | 6.86 |

### Diagnostic flags fired

| Variant | Fired |
|---|---|
| historical | EARLY_SOFTLOCK, DEAD_STRATEGY |
| uncapped | SURPLUS_FARMING_DOMINANT, EARLY_SOFTLOCK, PRESTIGE_TOO_FAST, QUALITY_INFLATION, DEAD_STRATEGY |
| fixed_4 | EARLY_SOFTLOCK, DEAD_STRATEGY |
| fixed_6 | EARLY_SOFTLOCK, QUALITY_INFLATION, DEAD_STRATEGY |
| fixed_8 | EARLY_SOFTLOCK, PRESTIGE_TOO_FAST, QUALITY_INFLATION, DEAD_STRATEGY |
| ladder_4_6_8 | EARLY_SOFTLOCK, QUALITY_INFLATION, DEAD_STRATEGY |
| ladder_4_5_6_7_8 | EARLY_SOFTLOCK, QUALITY_INFLATION, DEAD_STRATEGY |

## 50-production careers

Invariant violations across all variants: **0**.

### Medians by strategy

| Strategy | Variant | endCash | prestige | prestigePerRelease | meanAudience | meanCritic | share8plus | share9plus | shareLate8plus | hofShare | maxStaffEnd | staffCount | meanStaffStat | upgrades | firstUpgradeWeek | years | maxIpFans | negativeCashWeeks |
|---|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|
| balanced | historical | $14740K | 5660 | 113.20 | 8.05 | 7.99 | 58% | 8% | 70% | 8% | 999 | 4 | 100 | 0 | — | 15.67 | 78508.50 | 2 |
| balanced | uncapped | $-5424K | 10862.50 | 217.25 | 9.01 | 8.87 | 88% | 62% | 100% | 62% | 999 | 36 | 74.30 | 0 | — | 15.58 | 137707.50 | 475.50 |
| balanced | fixed_4 | $14740K | 5660 | 113.20 | 8.05 | 7.99 | 58% | 8% | 70% | 8% | 4 | 4 | 100 | 0 | — | 15.67 | 78508.50 | 2 |
| balanced | fixed_6 | $13811K | 7405 | 148.10 | 8.36 | 8.28 | 72% | 22% | 80% | 22% | 6 | 6 | 100 | 0 | — | 15.63 | 91412.50 | 2 |
| balanced | fixed_8 | $12497K | 8342.50 | 166.85 | 8.52 | 8.43 | 78% | 32% | 85% | 32% | 8 | 8 | 97.60 | 0 | — | 15.62 | 101140.50 | 2 |
| balanced | ladder_4_6_8 | $11562K | 7805 | 156.10 | 8.41 | 8.35 | 72% | 28% | 80% | 28% | 8 | 8 | 96.10 | 2 | 112 | 15.62 | 96120.50 | 2 |
| balanced | ladder_4_5_6_7_8 | $10858K | 7800 | 156 | 8.42 | 8.36 | 74% | 28% | 85% | 28% | 8 | 8 | 96.30 | 4 | 96 | 15.62 | 96819 | 2 |
| quality-first | historical | $13563K | 8520 | 170.40 | 8.27 | 8.17 | 70% | 14% | 85% | 14% | 999 | 5 | 100 | 0 | — | 15.67 | 23437 | 1 |
| quality-first | uncapped | $-4720K | 14375 | 287.50 | 8.96 | 8.80 | 88% | 58% | 100% | 58% | 999 | 34 | 74.60 | 0 | — | 15.65 | 28287.50 | 494 |
| quality-first | fixed_4 | $13861K | 7297.50 | 145.95 | 8.09 | 8 | 60% | 8% | 75% | 8% | 4 | 4 | 100 | 0 | — | 15.67 | 22135 | 1 |
| quality-first | fixed_6 | $13102K | 9447.50 | 188.95 | 8.39 | 8.29 | 74% | 20% | 85% | 20% | 6 | 6 | 100 | 0 | — | 15.67 | 24724 | 1 |
| quality-first | fixed_8 | $11873K | 10615 | 212.30 | 8.55 | 8.43 | 82% | 30% | 90% | 30% | 8 | 8 | 97.70 | 0 | — | 15.67 | 26049 | 1 |
| quality-first | ladder_4_6_8 | $10849K | 9960 | 199.20 | 8.48 | 8.34 | 76% | 26% | 90% | 26% | 8 | 8 | 96.30 | 2 | 112 | 15.67 | 25953 | 1 |
| quality-first | ladder_4_5_6_7_8 | $10183K | 10035 | 200.70 | 8.47 | 8.34 | 76% | 26% | 90% | 26% | 8 | 8 | 96.45 | 4 | 96 | 15.67 | 25318 | 1 |
| cheap-duds | historical | $5510K | 150 | 3 | 6.28 | 6.42 | 0% | 0% | 0% | 0% | 999 | 2 | 80.80 | 0 | — | 15.63 | 4712.50 | 0 |
| cheap-duds | uncapped | $5510K | 150 | 3 | 6.28 | 6.42 | 0% | 0% | 0% | 0% | 999 | 2 | 80.80 | 0 | — | 15.63 | 4712.50 | 0 |
| cheap-duds | fixed_4 | $5510K | 150 | 3 | 6.28 | 6.42 | 0% | 0% | 0% | 0% | 4 | 2 | 80.80 | 0 | — | 15.63 | 4712.50 | 0 |
| cheap-duds | fixed_6 | $5510K | 150 | 3 | 6.28 | 6.42 | 0% | 0% | 0% | 0% | 6 | 2 | 80.80 | 0 | — | 15.63 | 4712.50 | 0 |
| cheap-duds | fixed_8 | $5510K | 150 | 3 | 6.28 | 6.42 | 0% | 0% | 0% | 0% | 8 | 2 | 80.80 | 0 | — | 15.63 | 4712.50 | 0 |
| cheap-duds | ladder_4_6_8 | $5510K | 150 | 3 | 6.28 | 6.42 | 0% | 0% | 0% | 0% | 4 | 2 | 80.80 | 0 | — | 15.63 | 4712.50 | 0 |
| cheap-duds | ladder_4_5_6_7_8 | $5510K | 150 | 3 | 6.28 | 6.42 | 0% | 0% | 0% | 0% | 4 | 2 | 80.80 | 0 | — | 15.63 | 4712.50 | 0 |
| famous-star | historical | $10256K | 380 | 7.60 | 6.68 | 6.71 | 0% | 0% | 0% | 0% | 999 | 2 | 80.80 | 0 | — | 15.67 | 12874.50 | 7 |
| famous-star | uncapped | $10256K | 380 | 7.60 | 6.68 | 6.71 | 0% | 0% | 0% | 0% | 999 | 2 | 80.80 | 0 | — | 15.67 | 12874.50 | 7 |
| famous-star | fixed_4 | $10256K | 380 | 7.60 | 6.68 | 6.71 | 0% | 0% | 0% | 0% | 4 | 2 | 80.80 | 0 | — | 15.67 | 12874.50 | 7 |
| famous-star | fixed_6 | $10256K | 380 | 7.60 | 6.68 | 6.71 | 0% | 0% | 0% | 0% | 6 | 2 | 80.80 | 0 | — | 15.67 | 12874.50 | 7 |
| famous-star | fixed_8 | $10256K | 380 | 7.60 | 6.68 | 6.71 | 0% | 0% | 0% | 0% | 8 | 2 | 80.80 | 0 | — | 15.67 | 12874.50 | 7 |
| famous-star | ladder_4_6_8 | $10256K | 380 | 7.60 | 6.68 | 6.71 | 0% | 0% | 0% | 0% | 4 | 2 | 80.80 | 0 | — | 15.67 | 12874.50 | 7 |
| famous-star | ladder_4_5_6_7_8 | $10256K | 380 | 7.60 | 6.68 | 6.71 | 0% | 0% | 0% | 0% | 4 | 2 | 80.80 | 0 | — | 15.67 | 12874.50 | 7 |
| self-funder | historical | $260K | 2255 | 45.10 | 7.06 | 7.04 | 6% | 0% | 10% | 0% | 999 | 2 | 100 | 0 | — | 15.65 | 6114 | 13 |
| self-funder | uncapped | $260K | 2255 | 45.10 | 7.06 | 7.04 | 6% | 0% | 10% | 0% | 999 | 2 | 100 | 0 | — | 15.65 | 6114 | 13 |
| self-funder | fixed_4 | $260K | 2255 | 45.10 | 7.06 | 7.04 | 6% | 0% | 10% | 0% | 4 | 2 | 100 | 0 | — | 15.65 | 6114 | 13 |
| self-funder | fixed_6 | $260K | 2255 | 45.10 | 7.06 | 7.04 | 6% | 0% | 10% | 0% | 6 | 2 | 100 | 0 | — | 15.65 | 6114 | 13 |
| self-funder | fixed_8 | $260K | 2255 | 45.10 | 7.06 | 7.04 | 6% | 0% | 10% | 0% | 8 | 2 | 100 | 0 | — | 15.65 | 6114 | 13 |
| self-funder | ladder_4_6_8 | $260K | 2255 | 45.10 | 7.06 | 7.04 | 6% | 0% | 10% | 0% | 4 | 2 | 100 | 0 | — | 15.65 | 6114 | 13 |
| self-funder | ladder_4_5_6_7_8 | $260K | 2255 | 45.10 | 7.06 | 7.04 | 6% | 0% | 10% | 0% | 4 | 2 | 100 | 0 | — | 15.65 | 6114 | 13 |
| experimenter | historical | $11060K | 375 | 7.50 | 6.77 | 6.81 | 0% | 0% | 0% | 0% | 999 | 2 | 80.80 | 0 | — | 15.67 | 8857.50 | 1 |
| experimenter | uncapped | $-2477K | 14927.50 | 298.55 | 8.98 | 8.86 | 86% | 64% | 100% | 64% | 999 | 30 | 75 | 0 | — | 15.67 | 27359.50 | 507 |
| experimenter | fixed_4 | $13290K | 5672.50 | 113.45 | 7.77 | 7.80 | 46% | 2% | 65% | 2% | 4 | 4 | 79.80 | 0 | — | 15.67 | 17431.50 | 1 |
| experimenter | fixed_6 | $13082K | 8342.50 | 166.85 | 8.23 | 8.22 | 72% | 12% | 90% | 12% | 6 | 6 | 79.30 | 0 | — | 15.67 | 21064 | 1 |
| experimenter | fixed_8 | $12080K | 10687.50 | 213.75 | 8.47 | 8.43 | 80% | 28% | 95% | 28% | 8 | 8 | 78.90 | 0 | — | 15.67 | 23175 | 1 |
| experimenter | ladder_4_6_8 | $10978K | 9572.50 | 191.45 | 8.33 | 8.30 | 72% | 22% | 95% | 22% | 8 | 8 | 76.80 | 2 | 144 | 15.67 | 23032 | 1 |
| experimenter | ladder_4_5_6_7_8 | $10297K | 9760 | 195.20 | 8.34 | 8.32 | 74% | 22% | 95% | 22% | 8 | 8 | 77 | 4 | 112 | 15.67 | 23049.50 | 1 |
| franchise-builder | historical | $11117K | 525 | 10.50 | 6.74 | 6.70 | 2% | 0% | 0% | 0% | 999 | 2 | 100 | 0 | — | 15.67 | 65281 | 2 |
| franchise-builder | uncapped | $-4886K | 420 | 8.40 | 7.40 | 7.32 | 18% | 0% | 0% | 0% | 999 | 32 | 75 | 0 | — | 15.67 | 157069.50 | 512 |
| franchise-builder | fixed_4 | $10757K | 375 | 7.50 | 6.99 | 6.93 | 6% | 0% | 5% | 0% | 4 | 4 | 100 | 0 | — | 15.67 | 99844.50 | 2 |
| franchise-builder | fixed_6 | $9960K | 335 | 6.70 | 7.04 | 7.03 | 8% | 0% | 0% | 0% | 6 | 6 | 100 | 0 | — | 15.67 | 116243.50 | 2 |
| franchise-builder | fixed_8 | $8780K | 335 | 6.70 | 7.13 | 7.05 | 12% | 0% | 0% | 0% | 8 | 8 | 97.60 | 0 | — | 15.67 | 130347.50 | 2 |
| franchise-builder | ladder_4_6_8 | $9666K | 300 | 6 | 7.03 | 6.97 | 6% | 0% | 0% | 0% | 6 | 6 | 99.90 | 1 | 128 | 15.67 | 112203.50 | 2 |
| franchise-builder | ladder_4_5_6_7_8 | $9520K | 250 | 5 | 6.99 | 6.93 | 3% | 0% | 0% | 0% | 5 | 5 | 100 | 1 | 96 | 15.67 | 105438.50 | 2 |

### Paired deltas vs **ladder_4_6_8** (median of per-seed differences; share of seeds where the variant is higher)

| Strategy | Variant | Δ endCash | Δ prestige | Δ share8plus | Δ meanAudience |
|---|---|---:|---:|---:|---:|
| balanced | historical | $3233K (100%) | -2140 (2%) | -14% (2%) | -0.35 (1%) |
| balanced | uncapped | $-16952K (0%) | 2940 (98%) | 16% (96%) | 0.60 (100%) |
| balanced | fixed_4 | $3233K (100%) | -2140 (2%) | -14% (2%) | -0.35 (1%) |
| balanced | fixed_6 | $2235K (100%) | -382.50 (37%) | 0% (47%) | -0.07 (37%) |
| balanced | fixed_8 | $948K (95%) | 490 (66%) | 6% (72%) | 0.13 (73%) |
| balanced | ladder_4_5_6_7_8 | $-733K (7%) | 0 (48%) | 0% (47%) | 0.02 (55%) |
| quality-first | historical | $2721K (100%) | -1407.50 (3%) | -8% (5%) | -0.19 (1%) |
| quality-first | uncapped | $-15590K (0%) | 4337.50 (100%) | 12% (100%) | 0.50 (100%) |
| quality-first | fixed_4 | $3023K (100%) | -2622.50 (0%) | -16% (0%) | -0.37 (0%) |
| quality-first | fixed_6 | $2204K (100%) | -542.50 (24%) | -2% (27%) | -0.08 (17%) |
| quality-first | fixed_8 | $990K (99%) | 680 (81%) | 6% (82%) | 0.10 (88%) |
| quality-first | ladder_4_5_6_7_8 | $-680K (2%) | 55 (53%) | 0% (36%) | 0.01 (53%) |
| cheap-duds | historical | $0K (0%) | 0 (0%) | 0% (0%) | 0 (0%) |
| cheap-duds | uncapped | $0K (0%) | 0 (0%) | 0% (0%) | 0 (0%) |
| cheap-duds | fixed_4 | $0K (0%) | 0 (0%) | 0% (0%) | 0 (0%) |
| cheap-duds | fixed_6 | $0K (0%) | 0 (0%) | 0% (0%) | 0 (0%) |
| cheap-duds | fixed_8 | $0K (0%) | 0 (0%) | 0% (0%) | 0 (0%) |
| cheap-duds | ladder_4_5_6_7_8 | $0K (0%) | 0 (0%) | 0% (0%) | 0 (0%) |
| famous-star | historical | $0K (0%) | 0 (0%) | 0% (0%) | 0 (0%) |
| famous-star | uncapped | $0K (0%) | 0 (0%) | 0% (0%) | 0 (0%) |
| famous-star | fixed_4 | $0K (0%) | 0 (0%) | 0% (0%) | 0 (0%) |
| famous-star | fixed_6 | $0K (0%) | 0 (0%) | 0% (0%) | 0 (0%) |
| famous-star | fixed_8 | $0K (0%) | 0 (0%) | 0% (0%) | 0 (0%) |
| famous-star | ladder_4_5_6_7_8 | $0K (0%) | 0 (0%) | 0% (0%) | 0 (0%) |
| self-funder | historical | $0K (0%) | 0 (0%) | 0% (0%) | 0 (0%) |
| self-funder | uncapped | $0K (0%) | 0 (0%) | 0% (0%) | 0 (0%) |
| self-funder | fixed_4 | $0K (0%) | 0 (0%) | 0% (0%) | 0 (0%) |
| self-funder | fixed_6 | $0K (0%) | 0 (0%) | 0% (0%) | 0 (0%) |
| self-funder | fixed_8 | $0K (0%) | 0 (0%) | 0% (0%) | 0 (0%) |
| self-funder | ladder_4_5_6_7_8 | $0K (0%) | 0 (0%) | 0% (0%) | 0 (0%) |
| experimenter | historical | $148K (59%) | -9160 (0%) | -72% (0%) | -1.54 (0%) |
| experimenter | uncapped | $-13457K (0%) | 5240 (100%) | 14% (100%) | 0.65 (100%) |
| experimenter | fixed_4 | $2359K (100%) | -3882.50 (0%) | -24% (0%) | -0.55 (0%) |
| experimenter | fixed_6 | $2008K (100%) | -1102.50 (1%) | 0% (40%) | -0.10 (0%) |
| experimenter | fixed_8 | $1038K (100%) | 1055 (99%) | 8% (95%) | 0.15 (100%) |
| experimenter | ladder_4_5_6_7_8 | $-699K (1%) | 90 (64%) | 0% (43%) | 0.01 (62%) |
| franchise-builder | historical | $1412K (85%) | 195 (79%) | -4% (34%) | -0.28 (23%) |
| franchise-builder | uncapped | $-14464K (0%) | 52.50 (56%) | 10% (82%) | 0.55 (88%) |
| franchise-builder | fixed_4 | $983K (83%) | 0 (26%) | 0% (17%) | -0.08 (14%) |
| franchise-builder | fixed_6 | $297K (71%) | 0 (40%) | 2% (53%) | 0.04 (76%) |
| franchise-builder | fixed_8 | $-807K (18%) | 0 (47%) | 6% (75%) | 0.18 (78%) |
| franchise-builder | ladder_4_5_6_7_8 | $-199K (42%) | 0 (18%) | 0% (20%) | -0.07 (39%) |

### Mean review score (avg of Audience+Critic) by production index

| Strategy | Variant | #1 | #3 | #5 | #10 | #20 | #30 | #50 |
|---|---|---:|---:|---:|---:|---:|---:|---:|
| balanced | historical | 5.62 | 6.22 | 7.39 | 7.98 | 8.29 | 8.26 | 8.28 |
| balanced | uncapped | 5.62 | 6.22 | 7.85 | 8.98 | 9.25 | 9.30 | 9.20 |
| balanced | fixed_4 | 5.62 | 6.22 | 7.39 | 7.98 | 8.29 | 8.26 | 8.28 |
| balanced | fixed_6 | 5.62 | 6.22 | 7.82 | 8.29 | 8.63 | 8.54 | 8.55 |
| balanced | fixed_8 | 5.62 | 6.22 | 7.85 | 8.53 | 8.73 | 8.78 | 8.73 |
| balanced | ladder_4_6_8 | 5.62 | 6.22 | 7.39 | 8.23 | 8.68 | 8.75 | 8.71 |
| balanced | ladder_4_5_6_7_8 | 5.62 | 6.22 | 7.40 | 8.29 | 8.70 | 8.73 | 8.75 |
| quality-first | historical | 5.59 | 6.37 | 7.55 | 8.11 | 8.48 | 8.56 | 8.37 |
| quality-first | uncapped | 5.59 | 6.37 | 7.79 | 8.91 | 9.21 | 9.22 | 9.14 |
| quality-first | fixed_4 | 5.59 | 6.37 | 7.32 | 7.92 | 8.28 | 8.36 | 8.18 |
| quality-first | fixed_6 | 5.59 | 6.37 | 7.73 | 8.25 | 8.61 | 8.64 | 8.55 |
| quality-first | fixed_8 | 5.59 | 6.37 | 7.79 | 8.48 | 8.72 | 8.81 | 8.74 |
| quality-first | ladder_4_6_8 | 5.59 | 6.37 | 7.33 | 8.21 | 8.72 | 8.75 | 8.69 |
| quality-first | ladder_4_5_6_7_8 | 5.59 | 6.37 | 7.34 | 8.24 | 8.71 | 8.76 | 8.70 |
| cheap-duds | historical | 5.47 | 5.74 | 5.81 | 6.11 | 6.43 | 6.61 | 6.48 |
| cheap-duds | uncapped | 5.47 | 5.74 | 5.81 | 6.11 | 6.43 | 6.61 | 6.48 |
| cheap-duds | fixed_4 | 5.47 | 5.74 | 5.81 | 6.11 | 6.43 | 6.61 | 6.48 |
| cheap-duds | fixed_6 | 5.47 | 5.74 | 5.81 | 6.11 | 6.43 | 6.61 | 6.48 |
| cheap-duds | fixed_8 | 5.47 | 5.74 | 5.81 | 6.11 | 6.43 | 6.61 | 6.48 |
| cheap-duds | ladder_4_6_8 | 5.47 | 5.74 | 5.81 | 6.11 | 6.43 | 6.61 | 6.48 |
| cheap-duds | ladder_4_5_6_7_8 | 5.47 | 5.74 | 5.81 | 6.11 | 6.43 | 6.61 | 6.48 |
| famous-star | historical | 5.57 | 5.94 | 5.98 | 6.38 | 6.79 | 6.97 | 6.90 |
| famous-star | uncapped | 5.57 | 5.94 | 5.98 | 6.38 | 6.79 | 6.97 | 6.90 |
| famous-star | fixed_4 | 5.57 | 5.94 | 5.98 | 6.38 | 6.79 | 6.97 | 6.90 |
| famous-star | fixed_6 | 5.57 | 5.94 | 5.98 | 6.38 | 6.79 | 6.97 | 6.90 |
| famous-star | fixed_8 | 5.57 | 5.94 | 5.98 | 6.38 | 6.79 | 6.97 | 6.90 |
| famous-star | ladder_4_6_8 | 5.57 | 5.94 | 5.98 | 6.38 | 6.79 | 6.97 | 6.90 |
| famous-star | ladder_4_5_6_7_8 | 5.57 | 5.94 | 5.98 | 6.38 | 6.79 | 6.97 | 6.90 |
| self-funder | historical | 5.48 | 5.92 | 6.08 | 6.68 | 7.14 | 7.37 | 7.25 |
| self-funder | uncapped | 5.48 | 5.92 | 6.08 | 6.68 | 7.14 | 7.37 | 7.25 |
| self-funder | fixed_4 | 5.48 | 5.92 | 6.08 | 6.68 | 7.14 | 7.37 | 7.25 |
| self-funder | fixed_6 | 5.48 | 5.92 | 6.08 | 6.68 | 7.14 | 7.37 | 7.25 |
| self-funder | fixed_8 | 5.48 | 5.92 | 6.08 | 6.68 | 7.14 | 7.37 | 7.25 |
| self-funder | ladder_4_6_8 | 5.48 | 5.92 | 6.08 | 6.68 | 7.14 | 7.37 | 7.25 |
| self-funder | ladder_4_5_6_7_8 | 5.48 | 5.92 | 6.08 | 6.68 | 7.14 | 7.37 | 7.25 |
| experimenter | historical | 5.59 | 5.93 | 6.11 | 6.52 | 6.94 | 7.04 | 6.81 |
| experimenter | uncapped | 5.59 | 5.94 | 7.47 | 8.92 | 9.23 | 9.30 | 9.05 |
| experimenter | fixed_4 | 5.59 | 5.94 | 7.18 | 7.65 | 8.00 | 8.10 | 7.81 |
| experimenter | fixed_6 | 5.59 | 5.94 | 7.47 | 8.20 | 8.44 | 8.51 | 8.24 |
| experimenter | fixed_8 | 5.59 | 5.94 | 7.47 | 8.50 | 8.67 | 8.77 | 8.48 |
| experimenter | ladder_4_6_8 | 5.59 | 5.94 | 7.18 | 8.00 | 8.60 | 8.73 | 8.46 |
| experimenter | ladder_4_5_6_7_8 | 5.59 | 5.94 | 7.18 | 8.00 | 8.58 | 8.70 | 8.45 |
| franchise-builder | historical | 5.60 | 6.12 | 6.51 | 6.78 | 6.77 | 7.06 | 6.84 |
| franchise-builder | uncapped | 5.60 | 6.17 | 7.79 | 8.30 | 7.52 | 7.13 | 7.20 |
| franchise-builder | fixed_4 | 5.60 | 6.17 | 7.37 | 7.33 | 6.74 | 6.94 | 6.81 |
| franchise-builder | fixed_6 | 5.60 | 6.17 | 7.77 | 7.67 | 6.96 | 6.93 | 6.79 |
| franchise-builder | fixed_8 | 5.60 | 6.17 | 7.79 | 7.89 | 7.08 | 6.89 | 6.96 |
| franchise-builder | ladder_4_6_8 | 5.60 | 6.17 | 7.37 | 7.47 | 6.84 | 6.96 | 6.87 |
| franchise-builder | ladder_4_5_6_7_8 | 5.60 | 6.17 | 7.38 | 7.51 | 6.86 | 6.89 | 6.83 |

### Diagnostic flags fired

| Variant | Fired |
|---|---|
| historical | EARLY_SOFTLOCK, QUALITY_INFLATION, DEAD_STRATEGY |
| uncapped | SURPLUS_FARMING_DOMINANT, EARLY_SOFTLOCK, PRESTIGE_TOO_FAST, QUALITY_INFLATION, DEAD_STRATEGY |
| fixed_4 | EARLY_SOFTLOCK, QUALITY_INFLATION, DEAD_STRATEGY |
| fixed_6 | EARLY_SOFTLOCK, PRESTIGE_TOO_FAST, QUALITY_INFLATION, DEAD_STRATEGY |
| fixed_8 | EARLY_SOFTLOCK, PRESTIGE_TOO_FAST, QUALITY_INFLATION, DEAD_STRATEGY |
| ladder_4_6_8 | EARLY_SOFTLOCK, PRESTIGE_TOO_FAST, QUALITY_INFLATION, DEAD_STRATEGY |
| ladder_4_5_6_7_8 | EARLY_SOFTLOCK, PRESTIGE_TOO_FAST, QUALITY_INFLATION, DEAD_STRATEGY |
