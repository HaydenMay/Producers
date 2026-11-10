# Experiment: G26_followup

> **Simulation assumptions, not design locks.** Paired seeds: every variant runs the same seeds and strategies; only the config overrides differ.

Gate 2.6 follow-up: the main matrix showed Hall of Fame peaking in years 5-15 (critic generation 1). combo_D front-loads the same 12% critic ceiling (first new generation +8%, then capped at 12%) to target that peak without being harsher late than combo_B. control and combo_B are rerun in a separate process as a reproducibility check (must match the main run exactly). TEST ASSUMPTIONS.

- Seeds 1–300 (300) · strategies: balanced, quality-first, franchise-builder, repeat-farmer, cheap-duds, experimenter, self-funder, selective-self-funder, famous-star · reference variant: **control**
- Ruleset v9.61-movie-kernel-0.1 · measured runtime 10050 ms for 8100 careers

| Variant | Config hash | Note |
|---|---|---|
| control | fc3c4828 | Gate 2.5 candidate, current expectation rules (era bar 0.04/yr, cap 1.8; no generations) `{}` |
| combo_B | 4148b948 | critic_moderate + audience_moderate `{"expectations":{"critics":{"enabled":true,"generationYears":6,"toughnessPerGeneration":0.04,"maxToughness":0.12},"audience":{"enabled":true,"eraYears":10,"toughnessPerEra":0.02,"maxToughness":0.06}}}` |
| combo_D | 7bc3e03a | critics every 6 yrs, +8% first generation, max 12% (front-loaded) + audience_moderate `{"expectations":{"critics":{"enabled":true,"generationYears":6,"toughnessPerGeneration":0.08,"maxToughness":0.12},"audience":{"enabled":true,"eraYears":10,"toughnessPerEra":0.02,"maxToughness":0.06}}}` |

## 5-production careers

Invariant violations across all variants: **0**.

### Medians by strategy

| Strategy | Variant | endCash | prestige | prestigePerRelease | meanAudience | meanCritic | share8plus | share9plus | shareLate8plus | hofShare | maxStaffEnd | staffCount | meanStaffStat | upgrades | firstUpgradeWeek | years | maxIpFans | negativeCashWeeks |
|---|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|
| balanced | control | $868K | 75 | 15 | 6.46 | 6.50 | 0% | 0% | 0% | 0% | 4 | 4 | 34.40 | 0 | — | 1.83 | 10611 | 2 |
| balanced | combo_B | $868K | 75 | 15 | 6.46 | 6.50 | 0% | 0% | 0% | 0% | 4 | 4 | 34.40 | 0 | — | 1.83 | 10611 | 2 |
| balanced | combo_D | $868K | 75 | 15 | 6.46 | 6.50 | 0% | 0% | 0% | 0% | 4 | 4 | 34.40 | 0 | — | 1.83 | 10611 | 2 |
| quality-first | control | $805K | 75 | 15 | 6.46 | 6.54 | 0% | 0% | 0% | 0% | 4 | 4 | 34.70 | 0 | 64 | 1.83 | 10127.50 | 1 |
| quality-first | combo_B | $805K | 75 | 15 | 6.46 | 6.54 | 0% | 0% | 0% | 0% | 4 | 4 | 34.70 | 0 | 64 | 1.83 | 10127.50 | 1 |
| quality-first | combo_D | $805K | 75 | 15 | 6.46 | 6.54 | 0% | 0% | 0% | 0% | 4 | 4 | 34.70 | 0 | 64 | 1.83 | 10127.50 | 1 |
| franchise-builder | control | $876K | 75 | 15 | 6.45 | 6.49 | 0% | 0% | 0% | 0% | 4 | 4 | 34.10 | 0 | 64 | 1.83 | 13361 | 2 |
| franchise-builder | combo_B | $876K | 75 | 15 | 6.45 | 6.49 | 0% | 0% | 0% | 0% | 4 | 4 | 34.10 | 0 | 64 | 1.83 | 13361 | 2 |
| franchise-builder | combo_D | $876K | 75 | 15 | 6.45 | 6.49 | 0% | 0% | 0% | 0% | 4 | 4 | 34.10 | 0 | 64 | 1.83 | 13361 | 2 |
| repeat-farmer | control | $788K | 75 | 15 | 6.50 | 6.54 | 0% | 0% | 0% | 0% | 4 | 4 | 34.80 | 0 | — | 1.83 | 11020.50 | 2 |
| repeat-farmer | combo_B | $788K | 75 | 15 | 6.50 | 6.54 | 0% | 0% | 0% | 0% | 4 | 4 | 34.80 | 0 | — | 1.83 | 11020.50 | 2 |
| repeat-farmer | combo_D | $788K | 75 | 15 | 6.50 | 6.54 | 0% | 0% | 0% | 0% | 4 | 4 | 34.80 | 0 | — | 1.83 | 11020.50 | 2 |
| cheap-duds | control | $511K | 0 | 0 | 5.63 | 5.79 | 0% | 0% | 0% | 0% | 4 | 2 | 35.10 | 0 | — | 1.81 | 1935 | 0 |
| cheap-duds | combo_B | $511K | 0 | 0 | 5.63 | 5.79 | 0% | 0% | 0% | 0% | 4 | 2 | 35.10 | 0 | — | 1.81 | 1935 | 0 |
| cheap-duds | combo_D | $511K | 0 | 0 | 5.63 | 5.79 | 0% | 0% | 0% | 0% | 4 | 2 | 35.10 | 0 | — | 1.81 | 1935 | 0 |
| experimenter | control | $656K | 75 | 15 | 6.30 | 6.33 | 0% | 0% | 0% | 0% | 4 | 4 | 31.80 | 0 | — | 1.83 | 9366 | 1 |
| experimenter | combo_B | $656K | 75 | 15 | 6.30 | 6.33 | 0% | 0% | 0% | 0% | 4 | 4 | 31.80 | 0 | — | 1.83 | 9366 | 1 |
| experimenter | combo_D | $656K | 75 | 15 | 6.30 | 6.33 | 0% | 0% | 0% | 0% | 4 | 4 | 31.80 | 0 | — | 1.83 | 9366 | 1 |
| self-funder | control | $284K | 0 | 0 | 5.86 | 5.90 | 0% | 0% | 0% | 0% | 4 | 2 | 35.10 | 0 | — | 1.83 | 2137.50 | 12 |
| self-funder | combo_B | $284K | 0 | 0 | 5.86 | 5.90 | 0% | 0% | 0% | 0% | 4 | 2 | 35.10 | 0 | — | 1.83 | 2137.50 | 12 |
| self-funder | combo_D | $284K | 0 | 0 | 5.86 | 5.90 | 0% | 0% | 0% | 0% | 4 | 2 | 35.10 | 0 | — | 1.83 | 2137.50 | 12 |
| selective-self-funder | control | $852K | 75 | 15 | 6.48 | 6.45 | 0% | 0% | 0% | 0% | 4 | 4 | 34.30 | 0 | 64 | 1.83 | 10386 | 2 |
| selective-self-funder | combo_B | $852K | 75 | 15 | 6.48 | 6.45 | 0% | 0% | 0% | 0% | 4 | 4 | 34.30 | 0 | 64 | 1.83 | 10386 | 2 |
| selective-self-funder | combo_D | $852K | 75 | 15 | 6.48 | 6.45 | 0% | 0% | 0% | 0% | 4 | 4 | 34.30 | 0 | 64 | 1.83 | 10386 | 2 |
| famous-star | control | $595K | 0 | 0 | 5.78 | 5.95 | 0% | 0% | 0% | 0% | 4 | 2 | 35.10 | 0 | — | 1.83 | 4459 | 7 |
| famous-star | combo_B | $595K | 0 | 0 | 5.78 | 5.95 | 0% | 0% | 0% | 0% | 4 | 2 | 35.10 | 0 | — | 1.83 | 4459 | 7 |
| famous-star | combo_D | $595K | 0 | 0 | 5.78 | 5.95 | 0% | 0% | 0% | 0% | 4 | 2 | 35.10 | 0 | — | 1.83 | 4459 | 7 |

### Paired deltas vs **control** (median of per-seed differences; share of seeds where the variant is higher)

| Strategy | Variant | Δ endCash | Δ prestige | Δ share8plus | Δ meanAudience |
|---|---|---:|---:|---:|---:|
| balanced | combo_B | $0K (0%) | 0 (0%) | 0% (0%) | 0 (0%) |
| balanced | combo_D | $0K (0%) | 0 (0%) | 0% (0%) | 0 (0%) |
| quality-first | combo_B | $0K (0%) | 0 (0%) | 0% (0%) | 0 (0%) |
| quality-first | combo_D | $0K (0%) | 0 (0%) | 0% (0%) | 0 (0%) |
| franchise-builder | combo_B | $0K (0%) | 0 (0%) | 0% (0%) | 0 (0%) |
| franchise-builder | combo_D | $0K (0%) | 0 (0%) | 0% (0%) | 0 (0%) |
| repeat-farmer | combo_B | $0K (0%) | 0 (0%) | 0% (0%) | 0 (0%) |
| repeat-farmer | combo_D | $0K (0%) | 0 (0%) | 0% (0%) | 0 (0%) |
| cheap-duds | combo_B | $0K (0%) | 0 (0%) | 0% (0%) | 0 (0%) |
| cheap-duds | combo_D | $0K (0%) | 0 (0%) | 0% (0%) | 0 (0%) |
| experimenter | combo_B | $0K (0%) | 0 (0%) | 0% (0%) | 0 (0%) |
| experimenter | combo_D | $0K (0%) | 0 (0%) | 0% (0%) | 0 (0%) |
| self-funder | combo_B | $0K (0%) | 0 (0%) | 0% (0%) | 0 (0%) |
| self-funder | combo_D | $0K (0%) | 0 (0%) | 0% (0%) | 0 (0%) |
| selective-self-funder | combo_B | $0K (0%) | 0 (0%) | 0% (0%) | 0 (0%) |
| selective-self-funder | combo_D | $0K (0%) | 0 (0%) | 0% (0%) | 0 (0%) |
| famous-star | combo_B | $0K (0%) | 0 (0%) | 0% (0%) | 0 (0%) |
| famous-star | combo_D | $0K (0%) | 0 (0%) | 0% (0%) | 0 (0%) |

### Mean review score (avg of Audience+Critic) by production index

| Strategy | Variant | #1 | #5 |
|---|---|---:|---:|
| balanced | control | 5.62 | 7.39 |
| balanced | combo_B | 5.62 | 7.39 |
| balanced | combo_D | 5.62 | 7.39 |
| quality-first | control | 5.59 | 7.34 |
| quality-first | combo_B | 5.59 | 7.34 |
| quality-first | combo_D | 5.59 | 7.34 |
| franchise-builder | control | 5.60 | 7.37 |
| franchise-builder | combo_B | 5.60 | 7.37 |
| franchise-builder | combo_D | 5.60 | 7.37 |
| repeat-farmer | control | 5.61 | 7.39 |
| repeat-farmer | combo_B | 5.61 | 7.39 |
| repeat-farmer | combo_D | 5.61 | 7.39 |
| cheap-duds | control | 5.47 | 5.81 |
| cheap-duds | combo_B | 5.47 | 5.81 |
| cheap-duds | combo_D | 5.47 | 5.81 |
| experimenter | control | 5.59 | 7.23 |
| experimenter | combo_B | 5.59 | 7.23 |
| experimenter | combo_D | 5.59 | 7.23 |
| self-funder | control | 5.48 | 6.12 |
| self-funder | combo_B | 5.48 | 6.12 |
| self-funder | combo_D | 5.48 | 6.12 |
| selective-self-funder | control | 5.63 | 7.35 |
| selective-self-funder | combo_B | 5.63 | 7.35 |
| selective-self-funder | combo_D | 5.63 | 7.35 |
| famous-star | control | 5.57 | 5.98 |
| famous-star | combo_B | 5.57 | 5.98 |
| famous-star | combo_D | 5.57 | 5.98 |

### Great films — all strategies pooled, by release window

Denominators are films in that window. HoF = average of Audience and Critic ≥ hofThreshold (9.0). `≥9` is inclusive, `>9` strict.

| Strategy | Config | Window | Films (n) | Avg Aud | Avg Crit | HoF n (%) | Avg ≥9 n (%) | Avg >9 n (%) | Aud ≥9 n (%) | Crit ≥9 n (%) | 8+ n (%) | Careers with 0 HoF | HoF/career p10/p50/p90 | Best/career p10/p50/p90/p99 | Best combined movie | Prestige median |
|---|---|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---|---|---|---:|
| ALL | control | 1-5 | 13500 | 6.21 | 6.26 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 238 (1.8%) | 100% of 2700 | 0/0/0 | 6.14/7.29/7.94/8.4 | 8.70 "Midnight Protocol" (A8.64/C8.76; balanced seed 87 #5, yr 1.5, critic gen 0) |  |
| ALL | control | all | 13500 | 6.21 | 6.26 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 238 (1.8%) | 100% of 2700 | 0/0/0 | 6.14/7.29/7.94/8.4 | 8.70 "Midnight Protocol" (A8.64/C8.76; balanced seed 87 #5, yr 1.5, critic gen 0) |  |
| ALL | combo_B | 1-5 | 13500 | 6.21 | 6.26 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 238 (1.8%) | 100% of 2700 | 0/0/0 | 6.14/7.29/7.94/8.4 | 8.70 "Midnight Protocol" (A8.64/C8.76; balanced seed 87 #5, yr 1.5, critic gen 0) |  |
| ALL | combo_B | all | 13500 | 6.21 | 6.26 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 238 (1.8%) | 100% of 2700 | 0/0/0 | 6.14/7.29/7.94/8.4 | 8.70 "Midnight Protocol" (A8.64/C8.76; balanced seed 87 #5, yr 1.5, critic gen 0) |  |
| ALL | combo_D | 1-5 | 13500 | 6.21 | 6.26 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 238 (1.8%) | 100% of 2700 | 0/0/0 | 6.14/7.29/7.94/8.4 | 8.70 "Midnight Protocol" (A8.64/C8.76; balanced seed 87 #5, yr 1.5, critic gen 0) |  |
| ALL | combo_D | all | 13500 | 6.21 | 6.26 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 238 (1.8%) | 100% of 2700 | 0/0/0 | 6.14/7.29/7.94/8.4 | 8.70 "Midnight Protocol" (A8.64/C8.76; balanced seed 87 #5, yr 1.5, critic gen 0) |  |

### Great films by strategy (whole career)

| Strategy | Config | Window | Films (n) | Avg Aud | Avg Crit | HoF n (%) | Avg ≥9 n (%) | Avg >9 n (%) | Aud ≥9 n (%) | Crit ≥9 n (%) | 8+ n (%) | Careers with 0 HoF | HoF/career p10/p50/p90 | Best/career p10/p50/p90/p99 | Best combined movie | Prestige median |
|---|---|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---|---|---|---:|
| balanced | control | all | 1500 | 6.47 | 6.50 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 41 (2.7%) | 100% of 300 | 0/0/0 | 7.11/7.62/8.05/8.41 | 8.70 "Midnight Protocol" (A8.64/C8.76; balanced seed 87 #5, yr 1.5, critic gen 0) | 75 |
| quality-first | control | all | 1500 | 6.47 | 6.51 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 45 (3.0%) | 100% of 300 | 0/0/0 | 7.07/7.58/8.12/8.49 | 8.68 "Wild Protocol" (A8.64/C8.72; quality-first seed 181 #4, yr 1.2, critic gen 0) | 75 |
| franchise-builder | control | all | 1500 | 6.46 | 6.47 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 27 (1.8%) | 100% of 300 | 0/0/0 | 7.14/7.57/7.96/8.4 | 8.55 "Wild Signal" (A8.46/C8.64; franchise-builder seed 300 #5, yr 1.5, critic gen 0) | 75 |
| repeat-farmer | control | all | 1500 | 6.49 | 6.53 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 45 (3.0%) | 100% of 300 | 0/0/0 | 7.09/7.55/8.06/8.43 | 8.68 "Red Protocol 2" (A8.6/C8.76; repeat-farmer seed 233 #5, yr 1.5, critic gen 0) | 75 |
| cheap-duds | control | all | 1500 | 5.60 | 5.78 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 100% of 300 | 0/0/0 | 5.86/6.17/6.56/6.81 | 6.90 "Midnight Night" (A6.56/C7.25; cheap-duds seed 88 #5, yr 1.5, critic gen 0) | 0 |
| experimenter | control | all | 1500 | 6.27 | 6.31 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 30 (2.0%) | 100% of 300 | 0/0/0 | 6.8/7.46/7.97/8.47 | 8.49 "Last Pulse" (A8.4/C8.58; experimenter seed 77 #4, yr 1.2, critic gen 0) | 75 |
| self-funder | control | all | 1500 | 5.84 | 5.90 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 100% of 300 | 0/0/0 | 6.06/6.39/6.76/7.12 | 7.26 "Broken Night" (A7.22/C7.29; self-funder seed 126 #5, yr 1.5, critic gen 0) | 0 |
| selective-self-funder | control | all | 1500 | 6.46 | 6.46 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 50 (3.3%) | 100% of 300 | 0/0/0 | 7.05/7.62/8.08/8.39 | 8.57 "Wild Protocol" (A8.54/C8.61; selective-self-funder seed 181 #4, yr 1.2, critic gen 0) | 75 |
| famous-star | control | all | 1500 | 5.80 | 5.90 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 100% of 300 | 0/0/0 | 6.02/6.31/6.66/6.96 | 7.22 "Dead Legacy" (A7.16/C7.27; famous-star seed 78 #5, yr 1.5, critic gen 0) | 0 |
| balanced | combo_B | all | 1500 | 6.47 | 6.50 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 41 (2.7%) | 100% of 300 | 0/0/0 | 7.11/7.62/8.05/8.41 | 8.70 "Midnight Protocol" (A8.64/C8.76; balanced seed 87 #5, yr 1.5, critic gen 0) | 75 |
| quality-first | combo_B | all | 1500 | 6.47 | 6.51 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 45 (3.0%) | 100% of 300 | 0/0/0 | 7.07/7.58/8.12/8.49 | 8.68 "Wild Protocol" (A8.64/C8.72; quality-first seed 181 #4, yr 1.2, critic gen 0) | 75 |
| franchise-builder | combo_B | all | 1500 | 6.46 | 6.47 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 27 (1.8%) | 100% of 300 | 0/0/0 | 7.14/7.57/7.96/8.4 | 8.55 "Wild Signal" (A8.46/C8.64; franchise-builder seed 300 #5, yr 1.5, critic gen 0) | 75 |
| repeat-farmer | combo_B | all | 1500 | 6.49 | 6.53 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 45 (3.0%) | 100% of 300 | 0/0/0 | 7.09/7.55/8.06/8.43 | 8.68 "Red Protocol 2" (A8.6/C8.76; repeat-farmer seed 233 #5, yr 1.5, critic gen 0) | 75 |
| cheap-duds | combo_B | all | 1500 | 5.60 | 5.78 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 100% of 300 | 0/0/0 | 5.86/6.17/6.56/6.81 | 6.90 "Midnight Night" (A6.56/C7.25; cheap-duds seed 88 #5, yr 1.5, critic gen 0) | 0 |
| experimenter | combo_B | all | 1500 | 6.27 | 6.31 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 30 (2.0%) | 100% of 300 | 0/0/0 | 6.8/7.46/7.97/8.47 | 8.49 "Last Pulse" (A8.4/C8.58; experimenter seed 77 #4, yr 1.2, critic gen 0) | 75 |
| self-funder | combo_B | all | 1500 | 5.84 | 5.90 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 100% of 300 | 0/0/0 | 6.06/6.39/6.76/7.12 | 7.26 "Broken Night" (A7.22/C7.29; self-funder seed 126 #5, yr 1.5, critic gen 0) | 0 |
| selective-self-funder | combo_B | all | 1500 | 6.46 | 6.46 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 50 (3.3%) | 100% of 300 | 0/0/0 | 7.05/7.62/8.08/8.39 | 8.57 "Wild Protocol" (A8.54/C8.61; selective-self-funder seed 181 #4, yr 1.2, critic gen 0) | 75 |
| famous-star | combo_B | all | 1500 | 5.80 | 5.90 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 100% of 300 | 0/0/0 | 6.02/6.31/6.66/6.96 | 7.22 "Dead Legacy" (A7.16/C7.27; famous-star seed 78 #5, yr 1.5, critic gen 0) | 0 |
| balanced | combo_D | all | 1500 | 6.47 | 6.50 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 41 (2.7%) | 100% of 300 | 0/0/0 | 7.11/7.62/8.05/8.41 | 8.70 "Midnight Protocol" (A8.64/C8.76; balanced seed 87 #5, yr 1.5, critic gen 0) | 75 |
| quality-first | combo_D | all | 1500 | 6.47 | 6.51 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 45 (3.0%) | 100% of 300 | 0/0/0 | 7.07/7.58/8.12/8.49 | 8.68 "Wild Protocol" (A8.64/C8.72; quality-first seed 181 #4, yr 1.2, critic gen 0) | 75 |
| franchise-builder | combo_D | all | 1500 | 6.46 | 6.47 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 27 (1.8%) | 100% of 300 | 0/0/0 | 7.14/7.57/7.96/8.4 | 8.55 "Wild Signal" (A8.46/C8.64; franchise-builder seed 300 #5, yr 1.5, critic gen 0) | 75 |
| repeat-farmer | combo_D | all | 1500 | 6.49 | 6.53 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 45 (3.0%) | 100% of 300 | 0/0/0 | 7.09/7.55/8.06/8.43 | 8.68 "Red Protocol 2" (A8.6/C8.76; repeat-farmer seed 233 #5, yr 1.5, critic gen 0) | 75 |
| cheap-duds | combo_D | all | 1500 | 5.60 | 5.78 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 100% of 300 | 0/0/0 | 5.86/6.17/6.56/6.81 | 6.90 "Midnight Night" (A6.56/C7.25; cheap-duds seed 88 #5, yr 1.5, critic gen 0) | 0 |
| experimenter | combo_D | all | 1500 | 6.27 | 6.31 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 30 (2.0%) | 100% of 300 | 0/0/0 | 6.8/7.46/7.97/8.47 | 8.49 "Last Pulse" (A8.4/C8.58; experimenter seed 77 #4, yr 1.2, critic gen 0) | 75 |
| self-funder | combo_D | all | 1500 | 5.84 | 5.90 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 100% of 300 | 0/0/0 | 6.06/6.39/6.76/7.12 | 7.26 "Broken Night" (A7.22/C7.29; self-funder seed 126 #5, yr 1.5, critic gen 0) | 0 |
| selective-self-funder | combo_D | all | 1500 | 6.46 | 6.46 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 50 (3.3%) | 100% of 300 | 0/0/0 | 7.05/7.62/8.08/8.39 | 8.57 "Wild Protocol" (A8.54/C8.61; selective-self-funder seed 181 #4, yr 1.2, critic gen 0) | 75 |
| famous-star | combo_D | all | 1500 | 5.80 | 5.90 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 100% of 300 | 0/0/0 | 6.02/6.31/6.66/6.96 | 7.22 "Dead Legacy" (A7.16/C7.27; famous-star seed 78 #5, yr 1.5, critic gen 0) | 0 |

### Greatest single films (all strategies, whole sample; reproducible from seed + config hash)

| Variant | Best combined | Best Audience | Best Critic | Year band with most HoF |
|---|---|---|---|---|
| control | 8.70 "Midnight Protocol" (A8.64/C8.76; balanced seed 87 #5, yr 1.5, critic gen 0) | 7.89 "Iron Night" (A8.82/C6.96; quality-first seed 258 #5, yr 1.5, critic gen 0) | 8.30 "Hollow Pulse" (A7.65/C8.95; selective-self-funder seed 72 #5, yr 1.5, critic gen 0) | y0-5: 0.0% of 13500 |
| combo_B | 8.70 "Midnight Protocol" (A8.64/C8.76; balanced seed 87 #5, yr 1.5, critic gen 0) | 7.89 "Iron Night" (A8.82/C6.96; quality-first seed 258 #5, yr 1.5, critic gen 0) | 8.30 "Hollow Pulse" (A7.65/C8.95; selective-self-funder seed 72 #5, yr 1.5, critic gen 0) | y0-5: 0.0% of 13500 |
| combo_D | 8.70 "Midnight Protocol" (A8.64/C8.76; balanced seed 87 #5, yr 1.5, critic gen 0) | 7.89 "Iron Night" (A8.82/C6.96; quality-first seed 258 #5, yr 1.5, critic gen 0) | 8.30 "Hollow Pulse" (A7.65/C8.95; selective-self-funder seed 72 #5, yr 1.5, critic gen 0) | y0-5: 0.0% of 13500 |

### Great films by in-game year (all strategies pooled)

| Strategy | Config | Window | Films (n) | Avg Aud | Avg Crit | HoF n (%) | Avg ≥9 n (%) | Avg >9 n (%) | Aud ≥9 n (%) | Crit ≥9 n (%) | 8+ n (%) | Careers with 0 HoF | HoF/career p10/p50/p90 | Best/career p10/p50/p90/p99 | Best combined movie | Prestige median |
|---|---|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---|---|---|---:|
| ALL | control | y0-5 | 13500 | 6.21 | 6.26 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 238 (1.8%) | 100% of 2700 | 0/0/0 | 6.14/7.29/7.94/8.4 | 8.70 "Midnight Protocol" (A8.64/C8.76; balanced seed 87 #5, yr 1.5, critic gen 0) |  |
| ALL | combo_B | y0-5 | 13500 | 6.21 | 6.26 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 238 (1.8%) | 100% of 2700 | 0/0/0 | 6.14/7.29/7.94/8.4 | 8.70 "Midnight Protocol" (A8.64/C8.76; balanced seed 87 #5, yr 1.5, critic gen 0) |  |
| ALL | combo_D | y0-5 | 13500 | 6.21 | 6.26 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 238 (1.8%) | 100% of 2700 | 0/0/0 | 6.14/7.29/7.94/8.4 | 8.70 "Midnight Protocol" (A8.64/C8.76; balanced seed 87 #5, yr 1.5, critic gen 0) |  |

### Prestige progression (Prestige gates growth; cash sustains operations)

`cash-rich but Prestige-locked` = careers that at some week had the cash for the next upgrade but not the Prestige. `bought below gate` must be 0 (engine rule).

| Strategy | Config | Cash median | Prestige median | Prestige/yr | Careers with negative-cash weeks | →6 gate met (Prestige ≥ 200) · median film # | →6 bought · median film # | →6 cash-rich but Prestige-locked | →6 bought below gate | →8 gate met (Prestige ≥ 1000) · median film # | →8 bought · median film # | →8 cash-rich but Prestige-locked | →8 bought below gate |
|---|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|
| balanced | control | $0.87M | 75 | 41 | 71% | 11% · #5 | 0% · #— | 100% | 0 | 0% · #— | 0% · #— | 0% | 0 |
| quality-first | control | $0.80M | 75 | 41 | 57% | 13% · #5 | 1% · #4 | 100% | 0 | 0% · #— | 0% · #— | 1% | 0 |
| franchise-builder | control | $0.88M | 75 | 41 | 71% | 30% · #5 | 1% · #4 | 100% | 0 | 0% · #— | 0% · #— | 1% | 0 |
| repeat-farmer | control | $0.79M | 75 | 41 | 63% | 20% · #5 | 0% · #— | 100% | 0 | 0% · #— | 0% · #— | 0% | 0 |
| cheap-duds | control | $0.51M | 0 | 0 | 4% | 0% · #— | 0% · #— | 100% | 0 | 0% · #— | 0% · #— | 0% | 0 |
| experimenter | control | $0.66M | 75 | 41 | 56% | 3% · #5 | 0% · #— | 100% | 0 | 0% · #— | 0% · #— | 0% | 0 |
| self-funder | control | $0.28M | 0 | 0 | 100% | 0% · #— | 0% · #— | 78% | 0 | 0% · #— | 0% · #— | 0% | 0 |
| selective-self-funder | control | $0.85M | 75 | 41 | 67% | 10% · #5 | 0% · #4 | 100% | 0 | 0% · #— | 0% · #— | 0% | 0 |
| famous-star | control | $0.59M | 0 | 0 | 100% | 0% · #— | 0% · #— | 100% | 0 | 0% · #— | 0% · #— | 0% | 0 |
| balanced | combo_B | $0.87M | 75 | 41 | 71% | 11% · #5 | 0% · #— | 100% | 0 | 0% · #— | 0% · #— | 0% | 0 |
| quality-first | combo_B | $0.80M | 75 | 41 | 57% | 13% · #5 | 1% · #4 | 100% | 0 | 0% · #— | 0% · #— | 1% | 0 |
| franchise-builder | combo_B | $0.88M | 75 | 41 | 71% | 30% · #5 | 1% · #4 | 100% | 0 | 0% · #— | 0% · #— | 1% | 0 |
| repeat-farmer | combo_B | $0.79M | 75 | 41 | 63% | 20% · #5 | 0% · #— | 100% | 0 | 0% · #— | 0% · #— | 0% | 0 |
| cheap-duds | combo_B | $0.51M | 0 | 0 | 4% | 0% · #— | 0% · #— | 100% | 0 | 0% · #— | 0% · #— | 0% | 0 |
| experimenter | combo_B | $0.66M | 75 | 41 | 56% | 3% · #5 | 0% · #— | 100% | 0 | 0% · #— | 0% · #— | 0% | 0 |
| self-funder | combo_B | $0.28M | 0 | 0 | 100% | 0% · #— | 0% · #— | 78% | 0 | 0% · #— | 0% · #— | 0% | 0 |
| selective-self-funder | combo_B | $0.85M | 75 | 41 | 67% | 10% · #5 | 0% · #4 | 100% | 0 | 0% · #— | 0% · #— | 0% | 0 |
| famous-star | combo_B | $0.59M | 0 | 0 | 100% | 0% · #— | 0% · #— | 100% | 0 | 0% · #— | 0% · #— | 0% | 0 |
| balanced | combo_D | $0.87M | 75 | 41 | 71% | 11% · #5 | 0% · #— | 100% | 0 | 0% · #— | 0% · #— | 0% | 0 |
| quality-first | combo_D | $0.80M | 75 | 41 | 57% | 13% · #5 | 1% · #4 | 100% | 0 | 0% · #— | 0% · #— | 1% | 0 |
| franchise-builder | combo_D | $0.88M | 75 | 41 | 71% | 30% · #5 | 1% · #4 | 100% | 0 | 0% · #— | 0% · #— | 1% | 0 |
| repeat-farmer | combo_D | $0.79M | 75 | 41 | 63% | 20% · #5 | 0% · #— | 100% | 0 | 0% · #— | 0% · #— | 0% | 0 |
| cheap-duds | combo_D | $0.51M | 0 | 0 | 4% | 0% · #— | 0% · #— | 100% | 0 | 0% · #— | 0% · #— | 0% | 0 |
| experimenter | combo_D | $0.66M | 75 | 41 | 56% | 3% · #5 | 0% · #— | 100% | 0 | 0% · #— | 0% · #— | 0% | 0 |
| self-funder | combo_D | $0.28M | 0 | 0 | 100% | 0% · #— | 0% · #— | 78% | 0 | 0% · #— | 0% · #— | 0% | 0 |
| selective-self-funder | combo_D | $0.85M | 75 | 41 | 67% | 10% · #5 | 0% · #4 | 100% | 0 | 0% · #— | 0% · #— | 0% | 0 |
| famous-star | combo_D | $0.59M | 0 | 0 | 100% | 0% · #— | 0% · #— | 100% | 0 | 0% · #— | 0% · #— | 0% | 0 |

### Prestige milestones awarded per career (mean)

| Strategy | Variant | audience_7_5 | critic_8_5 | ip_gross_1m | ip_viewers_500k | meters_all_70 | careers > 400 Prestige/yr (OUTDATED threshold) |
|---|---|---:|---:|---:|---:|---:|---:|
| balanced | control | 0.89 | 0.12 | 0.04 | 0.04 | 0.18 | 0% |
| balanced | combo_B | 0.89 | 0.12 | 0.04 | 0.04 | 0.18 | 0% |
| balanced | combo_D | 0.89 | 0.12 | 0.04 | 0.04 | 0.18 | 0% |
| quality-first | control | 0.84 | 0.1 | 0 | 0 | 0.22 | 0% |
| quality-first | combo_B | 0.84 | 0.1 | 0 | 0 | 0.22 | 0% |
| quality-first | combo_D | 0.84 | 0.1 | 0 | 0 | 0.22 | 0% |
| franchise-builder | control | 0.88 | 0.07 | 0.31 | 0.31 | 0.19 | 1% |
| franchise-builder | combo_B | 0.88 | 0.07 | 0.31 | 0.31 | 0.19 | 1% |
| franchise-builder | combo_D | 0.88 | 0.07 | 0.31 | 0.31 | 0.19 | 1% |
| repeat-farmer | control | 0.83 | 0.11 | 0.17 | 0.17 | 0.19 | 0% |
| repeat-farmer | combo_B | 0.83 | 0.11 | 0.17 | 0.17 | 0.19 | 0% |
| repeat-farmer | combo_D | 0.83 | 0.11 | 0.17 | 0.17 | 0.19 | 0% |
| cheap-duds | control | 0 | 0 | 0 | 0 | 0 | 0% |
| cheap-duds | combo_B | 0 | 0 | 0 | 0 | 0 | 0% |
| cheap-duds | combo_D | 0 | 0 | 0 | 0 | 0 | 0% |
| experimenter | control | 0.63 | 0.11 | 0 | 0 | 0.01 | 0% |
| experimenter | combo_B | 0.63 | 0.11 | 0 | 0 | 0.01 | 0% |
| experimenter | combo_D | 0.63 | 0.11 | 0 | 0 | 0.01 | 0% |
| self-funder | control | 0 | 0 | 0 | 0 | 0 | 0% |
| self-funder | combo_B | 0 | 0 | 0 | 0 | 0 | 0% |
| self-funder | combo_D | 0 | 0 | 0 | 0 | 0 | 0% |
| selective-self-funder | control | 0.88 | 0.1 | 0.03 | 0.03 | 0.16 | 0% |
| selective-self-funder | combo_B | 0.88 | 0.1 | 0.03 | 0.03 | 0.16 | 0% |
| selective-self-funder | combo_D | 0.88 | 0.1 | 0.03 | 0.03 | 0.16 | 0% |
| famous-star | control | 0 | 0 | 0 | 0 | 0 | 0% |
| famous-star | combo_B | 0 | 0 | 0 | 0 | 0 | 0% |
| famous-star | combo_D | 0 | 0 | 0 | 0 | 0 | 0% |

### Diagnostic flags fired

| Variant | Fired |
|---|---|
| control | EARLY_SOFTLOCK |
| combo_B | EARLY_SOFTLOCK |
| combo_D | EARLY_SOFTLOCK |
