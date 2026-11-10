# Experiment: G26_expectations

> **Simulation assumptions, not design locks.** Paired seeds: every variant runs the same seeds and strategies; only the config overrides differ.

Gate 2.6 critic generations + audience eras. Base = config/candidate.json (ladder 4-6-8, diffusion legs, hybrid Prestige) held constant. All expectation numbers are TEST ASSUMPTIONS.

- Seeds 1–300 (300) · strategies: balanced, quality-first, franchise-builder, repeat-farmer, cheap-duds, experimenter, self-funder, selective-self-funder, famous-star · reference variant: **control**
- Ruleset v9.61-movie-kernel-0.1 · measured runtime 40822 ms for 35100 careers

| Variant | Config hash | Note |
|---|---|---|
| control | fc3c4828 | Gate 2.5 candidate, current expectation rules (era bar 0.04/yr, cap 1.8; no generations) `{}` |
| ref_no_era_bar | e62458a1 | ATTRIBUTION ONLY: existing era bar off `{"production":{"eraBarPerYear":0}}` |
| ref_era_bar_0.08 | 13a1a41e | ATTRIBUTION ONLY: existing shared era bar doubled (Gate 2 F1 blunt fix) `{"production":{"eraBarPerYear":0.08}}` |
| critic_mild | ed314808 | critics only: new generation every 8 yrs, +3%/gen, max 9% `{"expectations":{"critics":{"enabled":true,"generationYears":8,"toughnessPerGeneration":0.03,"maxToughness":0.09}}}` |
| critic_moderate | e06f594c | critics only: every 6 yrs, +4%/gen, max 12% `{"expectations":{"critics":{"enabled":true,"generationYears":6,"toughnessPerGeneration":0.04,"maxToughness":0.12}}}` |
| critic_strong | ba2fd669 | critics only: every 5 yrs, +5%/gen, max 20% `{"expectations":{"critics":{"enabled":true,"generationYears":5,"toughnessPerGeneration":0.05,"maxToughness":0.2}}}` |
| critic_moderate_subtract | 59b875d7 | critics only, moderate, SUBTRACT method (−0.4 pt/gen) instead of scale `{"expectations":{"method":"subtract","critics":{"enabled":true,"generationYears":6,"toughnessPerGeneration":0.04,"maxToughness":0.12}}}` |
| audience_mild | a3a9077a | audience only: new era every 12 yrs, +1.5%/era, max 4.5% `{"expectations":{"audience":{"enabled":true,"eraYears":12,"toughnessPerEra":0.015,"maxToughness":0.045}}}` |
| audience_moderate | 031e3b02 | audience only: every 10 yrs, +2%/era, max 6% `{"expectations":{"audience":{"enabled":true,"eraYears":10,"toughnessPerEra":0.02,"maxToughness":0.06}}}` |
| audience_strong | 483a98f9 | audience only: every 8 yrs, +3%/era, max 9% `{"expectations":{"audience":{"enabled":true,"eraYears":8,"toughnessPerEra":0.03,"maxToughness":0.09}}}` |
| combo_A | 513fb0df | critic_mild + audience_mild `{"expectations":{"critics":{"enabled":true,"generationYears":8,"toughnessPerGeneration":0.03,"maxToughness":0.09},"audience":{"enabled":true,"eraYears":12,"toughnessPerEra":0.015,"maxToughness":0.045}}}` |
| combo_B | 4148b948 | critic_moderate + audience_moderate `{"expectations":{"critics":{"enabled":true,"generationYears":6,"toughnessPerGeneration":0.04,"maxToughness":0.12},"audience":{"enabled":true,"eraYears":10,"toughnessPerEra":0.02,"maxToughness":0.06}}}` |
| combo_C | edaf25e3 | critic_strong + audience_mild `{"expectations":{"critics":{"enabled":true,"generationYears":5,"toughnessPerGeneration":0.05,"maxToughness":0.2},"audience":{"enabled":true,"eraYears":12,"toughnessPerEra":0.015,"maxToughness":0.045}}}` |

## 5-production careers

Invariant violations across all variants: **0**.

### Medians by strategy

| Strategy | Variant | endCash | prestige | prestigePerRelease | meanAudience | meanCritic | share8plus | share9plus | shareLate8plus | hofShare | maxStaffEnd | staffCount | meanStaffStat | upgrades | firstUpgradeWeek | years | maxIpFans | negativeCashWeeks |
|---|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|
| balanced | control | $868K | 75 | 15 | 6.46 | 6.50 | 0% | 0% | 0% | 0% | 4 | 4 | 34.40 | 0 | — | 1.83 | 10611 | 2 |
| balanced | ref_no_era_bar | $883K | 125 | 25 | 6.53 | 6.57 | 0% | 0% | 0% | 0% | 4 | 4 | 34.30 | 0 | 64 | 1.83 | 11316.50 | 2 |
| balanced | ref_era_bar_0.08 | $847K | 75 | 15 | 6.39 | 6.44 | 0% | 0% | 0% | 0% | 4 | 4 | 34.40 | 0 | — | 1.83 | 9989 | 2 |
| balanced | critic_mild | $868K | 75 | 15 | 6.46 | 6.50 | 0% | 0% | 0% | 0% | 4 | 4 | 34.40 | 0 | — | 1.83 | 10611 | 2 |
| balanced | critic_moderate | $868K | 75 | 15 | 6.46 | 6.50 | 0% | 0% | 0% | 0% | 4 | 4 | 34.40 | 0 | — | 1.83 | 10611 | 2 |
| balanced | critic_strong | $868K | 75 | 15 | 6.46 | 6.50 | 0% | 0% | 0% | 0% | 4 | 4 | 34.40 | 0 | — | 1.83 | 10611 | 2 |
| balanced | critic_moderate_subtract | $868K | 75 | 15 | 6.46 | 6.50 | 0% | 0% | 0% | 0% | 4 | 4 | 34.40 | 0 | — | 1.83 | 10611 | 2 |
| balanced | audience_mild | $868K | 75 | 15 | 6.46 | 6.50 | 0% | 0% | 0% | 0% | 4 | 4 | 34.40 | 0 | — | 1.83 | 10611 | 2 |
| balanced | audience_moderate | $868K | 75 | 15 | 6.46 | 6.50 | 0% | 0% | 0% | 0% | 4 | 4 | 34.40 | 0 | — | 1.83 | 10611 | 2 |
| balanced | audience_strong | $868K | 75 | 15 | 6.46 | 6.50 | 0% | 0% | 0% | 0% | 4 | 4 | 34.40 | 0 | — | 1.83 | 10611 | 2 |
| balanced | combo_A | $868K | 75 | 15 | 6.46 | 6.50 | 0% | 0% | 0% | 0% | 4 | 4 | 34.40 | 0 | — | 1.83 | 10611 | 2 |
| balanced | combo_B | $868K | 75 | 15 | 6.46 | 6.50 | 0% | 0% | 0% | 0% | 4 | 4 | 34.40 | 0 | — | 1.83 | 10611 | 2 |
| balanced | combo_C | $868K | 75 | 15 | 6.46 | 6.50 | 0% | 0% | 0% | 0% | 4 | 4 | 34.40 | 0 | — | 1.83 | 10611 | 2 |
| quality-first | control | $805K | 75 | 15 | 6.46 | 6.54 | 0% | 0% | 0% | 0% | 4 | 4 | 34.70 | 0 | 64 | 1.83 | 10127.50 | 1 |
| quality-first | ref_no_era_bar | $830K | 125 | 25 | 6.54 | 6.61 | 0% | 0% | 0% | 0% | 4 | 4 | 34.70 | 0 | 64 | 1.83 | 10695.50 | 1 |
| quality-first | ref_era_bar_0.08 | $781K | 75 | 15 | 6.38 | 6.47 | 0% | 0% | 0% | 0% | 4 | 4 | 34.75 | 0 | — | 1.83 | 9602.50 | 1 |
| quality-first | critic_mild | $805K | 75 | 15 | 6.46 | 6.54 | 0% | 0% | 0% | 0% | 4 | 4 | 34.70 | 0 | 64 | 1.83 | 10127.50 | 1 |
| quality-first | critic_moderate | $805K | 75 | 15 | 6.46 | 6.54 | 0% | 0% | 0% | 0% | 4 | 4 | 34.70 | 0 | 64 | 1.83 | 10127.50 | 1 |
| quality-first | critic_strong | $805K | 75 | 15 | 6.46 | 6.54 | 0% | 0% | 0% | 0% | 4 | 4 | 34.70 | 0 | 64 | 1.83 | 10127.50 | 1 |
| quality-first | critic_moderate_subtract | $805K | 75 | 15 | 6.46 | 6.54 | 0% | 0% | 0% | 0% | 4 | 4 | 34.70 | 0 | 64 | 1.83 | 10127.50 | 1 |
| quality-first | audience_mild | $805K | 75 | 15 | 6.46 | 6.54 | 0% | 0% | 0% | 0% | 4 | 4 | 34.70 | 0 | 64 | 1.83 | 10127.50 | 1 |
| quality-first | audience_moderate | $805K | 75 | 15 | 6.46 | 6.54 | 0% | 0% | 0% | 0% | 4 | 4 | 34.70 | 0 | 64 | 1.83 | 10127.50 | 1 |
| quality-first | audience_strong | $805K | 75 | 15 | 6.46 | 6.54 | 0% | 0% | 0% | 0% | 4 | 4 | 34.70 | 0 | 64 | 1.83 | 10127.50 | 1 |
| quality-first | combo_A | $805K | 75 | 15 | 6.46 | 6.54 | 0% | 0% | 0% | 0% | 4 | 4 | 34.70 | 0 | 64 | 1.83 | 10127.50 | 1 |
| quality-first | combo_B | $805K | 75 | 15 | 6.46 | 6.54 | 0% | 0% | 0% | 0% | 4 | 4 | 34.70 | 0 | 64 | 1.83 | 10127.50 | 1 |
| quality-first | combo_C | $805K | 75 | 15 | 6.46 | 6.54 | 0% | 0% | 0% | 0% | 4 | 4 | 34.70 | 0 | 64 | 1.83 | 10127.50 | 1 |
| franchise-builder | control | $876K | 75 | 15 | 6.45 | 6.49 | 0% | 0% | 0% | 0% | 4 | 4 | 34.10 | 0 | 64 | 1.83 | 13361 | 2 |
| franchise-builder | ref_no_era_bar | $894K | 125 | 25 | 6.52 | 6.56 | 0% | 0% | 0% | 0% | 4 | 4 | 34.10 | 0 | 64 | 1.83 | 14255.50 | 2 |
| franchise-builder | ref_era_bar_0.08 | $854K | 75 | 15 | 6.37 | 6.40 | 0% | 0% | 0% | 0% | 4 | 4 | 34.20 | 0 | — | 1.83 | 12651 | 2 |
| franchise-builder | critic_mild | $876K | 75 | 15 | 6.45 | 6.49 | 0% | 0% | 0% | 0% | 4 | 4 | 34.10 | 0 | 64 | 1.83 | 13361 | 2 |
| franchise-builder | critic_moderate | $876K | 75 | 15 | 6.45 | 6.49 | 0% | 0% | 0% | 0% | 4 | 4 | 34.10 | 0 | 64 | 1.83 | 13361 | 2 |
| franchise-builder | critic_strong | $876K | 75 | 15 | 6.45 | 6.49 | 0% | 0% | 0% | 0% | 4 | 4 | 34.10 | 0 | 64 | 1.83 | 13361 | 2 |
| franchise-builder | critic_moderate_subtract | $876K | 75 | 15 | 6.45 | 6.49 | 0% | 0% | 0% | 0% | 4 | 4 | 34.10 | 0 | 64 | 1.83 | 13361 | 2 |
| franchise-builder | audience_mild | $876K | 75 | 15 | 6.45 | 6.49 | 0% | 0% | 0% | 0% | 4 | 4 | 34.10 | 0 | 64 | 1.83 | 13361 | 2 |
| franchise-builder | audience_moderate | $876K | 75 | 15 | 6.45 | 6.49 | 0% | 0% | 0% | 0% | 4 | 4 | 34.10 | 0 | 64 | 1.83 | 13361 | 2 |
| franchise-builder | audience_strong | $876K | 75 | 15 | 6.45 | 6.49 | 0% | 0% | 0% | 0% | 4 | 4 | 34.10 | 0 | 64 | 1.83 | 13361 | 2 |
| franchise-builder | combo_A | $876K | 75 | 15 | 6.45 | 6.49 | 0% | 0% | 0% | 0% | 4 | 4 | 34.10 | 0 | 64 | 1.83 | 13361 | 2 |
| franchise-builder | combo_B | $876K | 75 | 15 | 6.45 | 6.49 | 0% | 0% | 0% | 0% | 4 | 4 | 34.10 | 0 | 64 | 1.83 | 13361 | 2 |
| franchise-builder | combo_C | $876K | 75 | 15 | 6.45 | 6.49 | 0% | 0% | 0% | 0% | 4 | 4 | 34.10 | 0 | 64 | 1.83 | 13361 | 2 |
| repeat-farmer | control | $788K | 75 | 15 | 6.50 | 6.54 | 0% | 0% | 0% | 0% | 4 | 4 | 34.80 | 0 | — | 1.83 | 11020.50 | 2 |
| repeat-farmer | ref_no_era_bar | $806K | 125 | 25 | 6.58 | 6.61 | 0% | 0% | 0% | 0% | 4 | 4 | 34.70 | 0 | 64 | 1.83 | 12624.50 | 2 |
| repeat-farmer | ref_era_bar_0.08 | $765K | 25 | 5 | 6.42 | 6.47 | 0% | 0% | 0% | 0% | 4 | 4 | 34.80 | 0 | — | 1.83 | 9655.50 | 2 |
| repeat-farmer | critic_mild | $788K | 75 | 15 | 6.50 | 6.54 | 0% | 0% | 0% | 0% | 4 | 4 | 34.80 | 0 | — | 1.83 | 11020.50 | 2 |
| repeat-farmer | critic_moderate | $788K | 75 | 15 | 6.50 | 6.54 | 0% | 0% | 0% | 0% | 4 | 4 | 34.80 | 0 | — | 1.83 | 11020.50 | 2 |
| repeat-farmer | critic_strong | $788K | 75 | 15 | 6.50 | 6.54 | 0% | 0% | 0% | 0% | 4 | 4 | 34.80 | 0 | — | 1.83 | 11020.50 | 2 |
| repeat-farmer | critic_moderate_subtract | $788K | 75 | 15 | 6.50 | 6.54 | 0% | 0% | 0% | 0% | 4 | 4 | 34.80 | 0 | — | 1.83 | 11020.50 | 2 |
| repeat-farmer | audience_mild | $788K | 75 | 15 | 6.50 | 6.54 | 0% | 0% | 0% | 0% | 4 | 4 | 34.80 | 0 | — | 1.83 | 11020.50 | 2 |
| repeat-farmer | audience_moderate | $788K | 75 | 15 | 6.50 | 6.54 | 0% | 0% | 0% | 0% | 4 | 4 | 34.80 | 0 | — | 1.83 | 11020.50 | 2 |
| repeat-farmer | audience_strong | $788K | 75 | 15 | 6.50 | 6.54 | 0% | 0% | 0% | 0% | 4 | 4 | 34.80 | 0 | — | 1.83 | 11020.50 | 2 |
| repeat-farmer | combo_A | $788K | 75 | 15 | 6.50 | 6.54 | 0% | 0% | 0% | 0% | 4 | 4 | 34.80 | 0 | — | 1.83 | 11020.50 | 2 |
| repeat-farmer | combo_B | $788K | 75 | 15 | 6.50 | 6.54 | 0% | 0% | 0% | 0% | 4 | 4 | 34.80 | 0 | — | 1.83 | 11020.50 | 2 |
| repeat-farmer | combo_C | $788K | 75 | 15 | 6.50 | 6.54 | 0% | 0% | 0% | 0% | 4 | 4 | 34.80 | 0 | — | 1.83 | 11020.50 | 2 |
| cheap-duds | control | $511K | 0 | 0 | 5.63 | 5.79 | 0% | 0% | 0% | 0% | 4 | 2 | 35.10 | 0 | — | 1.81 | 1935 | 0 |
| cheap-duds | ref_no_era_bar | $528K | 0 | 0 | 5.72 | 5.88 | 0% | 0% | 0% | 0% | 4 | 2 | 35.10 | 0 | — | 1.83 | 2216.50 | 0 |
| cheap-duds | ref_era_bar_0.08 | $495K | 0 | 0 | 5.54 | 5.71 | 0% | 0% | 0% | 0% | 4 | 2 | 35.10 | 0 | — | 1.79 | 1661 | 0 |
| cheap-duds | critic_mild | $511K | 0 | 0 | 5.63 | 5.79 | 0% | 0% | 0% | 0% | 4 | 2 | 35.10 | 0 | — | 1.81 | 1935 | 0 |
| cheap-duds | critic_moderate | $511K | 0 | 0 | 5.63 | 5.79 | 0% | 0% | 0% | 0% | 4 | 2 | 35.10 | 0 | — | 1.81 | 1935 | 0 |
| cheap-duds | critic_strong | $511K | 0 | 0 | 5.63 | 5.79 | 0% | 0% | 0% | 0% | 4 | 2 | 35.10 | 0 | — | 1.81 | 1935 | 0 |
| cheap-duds | critic_moderate_subtract | $511K | 0 | 0 | 5.63 | 5.79 | 0% | 0% | 0% | 0% | 4 | 2 | 35.10 | 0 | — | 1.81 | 1935 | 0 |
| cheap-duds | audience_mild | $511K | 0 | 0 | 5.63 | 5.79 | 0% | 0% | 0% | 0% | 4 | 2 | 35.10 | 0 | — | 1.81 | 1935 | 0 |
| cheap-duds | audience_moderate | $511K | 0 | 0 | 5.63 | 5.79 | 0% | 0% | 0% | 0% | 4 | 2 | 35.10 | 0 | — | 1.81 | 1935 | 0 |
| cheap-duds | audience_strong | $511K | 0 | 0 | 5.63 | 5.79 | 0% | 0% | 0% | 0% | 4 | 2 | 35.10 | 0 | — | 1.81 | 1935 | 0 |
| cheap-duds | combo_A | $511K | 0 | 0 | 5.63 | 5.79 | 0% | 0% | 0% | 0% | 4 | 2 | 35.10 | 0 | — | 1.81 | 1935 | 0 |
| cheap-duds | combo_B | $511K | 0 | 0 | 5.63 | 5.79 | 0% | 0% | 0% | 0% | 4 | 2 | 35.10 | 0 | — | 1.81 | 1935 | 0 |
| cheap-duds | combo_C | $511K | 0 | 0 | 5.63 | 5.79 | 0% | 0% | 0% | 0% | 4 | 2 | 35.10 | 0 | — | 1.81 | 1935 | 0 |
| experimenter | control | $656K | 75 | 15 | 6.30 | 6.33 | 0% | 0% | 0% | 0% | 4 | 4 | 31.80 | 0 | — | 1.83 | 9366 | 1 |
| experimenter | ref_no_era_bar | $681K | 75 | 15 | 6.38 | 6.42 | 0% | 0% | 0% | 0% | 4 | 4 | 31.80 | 0 | — | 1.83 | 10218 | 1 |
| experimenter | ref_era_bar_0.08 | $632K | 0 | 0 | 6.21 | 6.24 | 0% | 0% | 0% | 0% | 4 | 4 | 31.80 | 0 | — | 1.83 | 8565 | 1 |
| experimenter | critic_mild | $656K | 75 | 15 | 6.30 | 6.33 | 0% | 0% | 0% | 0% | 4 | 4 | 31.80 | 0 | — | 1.83 | 9366 | 1 |
| experimenter | critic_moderate | $656K | 75 | 15 | 6.30 | 6.33 | 0% | 0% | 0% | 0% | 4 | 4 | 31.80 | 0 | — | 1.83 | 9366 | 1 |
| experimenter | critic_strong | $656K | 75 | 15 | 6.30 | 6.33 | 0% | 0% | 0% | 0% | 4 | 4 | 31.80 | 0 | — | 1.83 | 9366 | 1 |
| experimenter | critic_moderate_subtract | $656K | 75 | 15 | 6.30 | 6.33 | 0% | 0% | 0% | 0% | 4 | 4 | 31.80 | 0 | — | 1.83 | 9366 | 1 |
| experimenter | audience_mild | $656K | 75 | 15 | 6.30 | 6.33 | 0% | 0% | 0% | 0% | 4 | 4 | 31.80 | 0 | — | 1.83 | 9366 | 1 |
| experimenter | audience_moderate | $656K | 75 | 15 | 6.30 | 6.33 | 0% | 0% | 0% | 0% | 4 | 4 | 31.80 | 0 | — | 1.83 | 9366 | 1 |
| experimenter | audience_strong | $656K | 75 | 15 | 6.30 | 6.33 | 0% | 0% | 0% | 0% | 4 | 4 | 31.80 | 0 | — | 1.83 | 9366 | 1 |
| experimenter | combo_A | $656K | 75 | 15 | 6.30 | 6.33 | 0% | 0% | 0% | 0% | 4 | 4 | 31.80 | 0 | — | 1.83 | 9366 | 1 |
| experimenter | combo_B | $656K | 75 | 15 | 6.30 | 6.33 | 0% | 0% | 0% | 0% | 4 | 4 | 31.80 | 0 | — | 1.83 | 9366 | 1 |
| experimenter | combo_C | $656K | 75 | 15 | 6.30 | 6.33 | 0% | 0% | 0% | 0% | 4 | 4 | 31.80 | 0 | — | 1.83 | 9366 | 1 |
| self-funder | control | $284K | 0 | 0 | 5.86 | 5.90 | 0% | 0% | 0% | 0% | 4 | 2 | 35.10 | 0 | — | 1.83 | 2137.50 | 12 |
| self-funder | ref_no_era_bar | $297K | 0 | 0 | 5.95 | 5.98 | 0% | 0% | 0% | 0% | 4 | 2 | 35.10 | 0 | — | 1.83 | 2420 | 12 |
| self-funder | ref_era_bar_0.08 | $275K | 0 | 0 | 5.78 | 5.82 | 0% | 0% | 0% | 0% | 4 | 2 | 35.10 | 0 | — | 1.81 | 1935 | 12 |
| self-funder | critic_mild | $284K | 0 | 0 | 5.86 | 5.90 | 0% | 0% | 0% | 0% | 4 | 2 | 35.10 | 0 | — | 1.83 | 2137.50 | 12 |
| self-funder | critic_moderate | $284K | 0 | 0 | 5.86 | 5.90 | 0% | 0% | 0% | 0% | 4 | 2 | 35.10 | 0 | — | 1.83 | 2137.50 | 12 |
| self-funder | critic_strong | $284K | 0 | 0 | 5.86 | 5.90 | 0% | 0% | 0% | 0% | 4 | 2 | 35.10 | 0 | — | 1.83 | 2137.50 | 12 |
| self-funder | critic_moderate_subtract | $284K | 0 | 0 | 5.86 | 5.90 | 0% | 0% | 0% | 0% | 4 | 2 | 35.10 | 0 | — | 1.83 | 2137.50 | 12 |
| self-funder | audience_mild | $284K | 0 | 0 | 5.86 | 5.90 | 0% | 0% | 0% | 0% | 4 | 2 | 35.10 | 0 | — | 1.83 | 2137.50 | 12 |
| self-funder | audience_moderate | $284K | 0 | 0 | 5.86 | 5.90 | 0% | 0% | 0% | 0% | 4 | 2 | 35.10 | 0 | — | 1.83 | 2137.50 | 12 |
| self-funder | audience_strong | $284K | 0 | 0 | 5.86 | 5.90 | 0% | 0% | 0% | 0% | 4 | 2 | 35.10 | 0 | — | 1.83 | 2137.50 | 12 |
| self-funder | combo_A | $284K | 0 | 0 | 5.86 | 5.90 | 0% | 0% | 0% | 0% | 4 | 2 | 35.10 | 0 | — | 1.83 | 2137.50 | 12 |
| self-funder | combo_B | $284K | 0 | 0 | 5.86 | 5.90 | 0% | 0% | 0% | 0% | 4 | 2 | 35.10 | 0 | — | 1.83 | 2137.50 | 12 |
| self-funder | combo_C | $284K | 0 | 0 | 5.86 | 5.90 | 0% | 0% | 0% | 0% | 4 | 2 | 35.10 | 0 | — | 1.83 | 2137.50 | 12 |
| selective-self-funder | control | $852K | 75 | 15 | 6.48 | 6.45 | 0% | 0% | 0% | 0% | 4 | 4 | 34.30 | 0 | 64 | 1.83 | 10386 | 2 |
| selective-self-funder | ref_no_era_bar | $860K | 125 | 25 | 6.55 | 6.53 | 0% | 0% | 0% | 0% | 4 | 4 | 34.25 | 0 | 64 | 1.83 | 11028 | 2 |
| selective-self-funder | ref_era_bar_0.08 | $828K | 75 | 15 | 6.41 | 6.38 | 0% | 0% | 0% | 0% | 4 | 4 | 34.30 | 0 | — | 1.83 | 9894 | 2 |
| selective-self-funder | critic_mild | $852K | 75 | 15 | 6.48 | 6.45 | 0% | 0% | 0% | 0% | 4 | 4 | 34.30 | 0 | 64 | 1.83 | 10386 | 2 |
| selective-self-funder | critic_moderate | $852K | 75 | 15 | 6.48 | 6.45 | 0% | 0% | 0% | 0% | 4 | 4 | 34.30 | 0 | 64 | 1.83 | 10386 | 2 |
| selective-self-funder | critic_strong | $852K | 75 | 15 | 6.48 | 6.45 | 0% | 0% | 0% | 0% | 4 | 4 | 34.30 | 0 | 64 | 1.83 | 10386 | 2 |
| selective-self-funder | critic_moderate_subtract | $852K | 75 | 15 | 6.48 | 6.45 | 0% | 0% | 0% | 0% | 4 | 4 | 34.30 | 0 | 64 | 1.83 | 10386 | 2 |
| selective-self-funder | audience_mild | $852K | 75 | 15 | 6.48 | 6.45 | 0% | 0% | 0% | 0% | 4 | 4 | 34.30 | 0 | 64 | 1.83 | 10386 | 2 |
| selective-self-funder | audience_moderate | $852K | 75 | 15 | 6.48 | 6.45 | 0% | 0% | 0% | 0% | 4 | 4 | 34.30 | 0 | 64 | 1.83 | 10386 | 2 |
| selective-self-funder | audience_strong | $852K | 75 | 15 | 6.48 | 6.45 | 0% | 0% | 0% | 0% | 4 | 4 | 34.30 | 0 | 64 | 1.83 | 10386 | 2 |
| selective-self-funder | combo_A | $852K | 75 | 15 | 6.48 | 6.45 | 0% | 0% | 0% | 0% | 4 | 4 | 34.30 | 0 | 64 | 1.83 | 10386 | 2 |
| selective-self-funder | combo_B | $852K | 75 | 15 | 6.48 | 6.45 | 0% | 0% | 0% | 0% | 4 | 4 | 34.30 | 0 | 64 | 1.83 | 10386 | 2 |
| selective-self-funder | combo_C | $852K | 75 | 15 | 6.48 | 6.45 | 0% | 0% | 0% | 0% | 4 | 4 | 34.30 | 0 | 64 | 1.83 | 10386 | 2 |
| famous-star | control | $595K | 0 | 0 | 5.78 | 5.95 | 0% | 0% | 0% | 0% | 4 | 2 | 35.10 | 0 | — | 1.83 | 4459 | 7 |
| famous-star | ref_no_era_bar | $623K | 0 | 0 | 5.87 | 6.03 | 0% | 0% | 0% | 0% | 4 | 2 | 35.10 | 0 | — | 1.83 | 4998 | 7 |
| famous-star | ref_era_bar_0.08 | $571K | 0 | 0 | 5.70 | 5.86 | 0% | 0% | 0% | 0% | 4 | 2 | 35.10 | 0 | — | 1.83 | 3971.50 | 7 |
| famous-star | critic_mild | $595K | 0 | 0 | 5.78 | 5.95 | 0% | 0% | 0% | 0% | 4 | 2 | 35.10 | 0 | — | 1.83 | 4459 | 7 |
| famous-star | critic_moderate | $595K | 0 | 0 | 5.78 | 5.95 | 0% | 0% | 0% | 0% | 4 | 2 | 35.10 | 0 | — | 1.83 | 4459 | 7 |
| famous-star | critic_strong | $595K | 0 | 0 | 5.78 | 5.95 | 0% | 0% | 0% | 0% | 4 | 2 | 35.10 | 0 | — | 1.83 | 4459 | 7 |
| famous-star | critic_moderate_subtract | $595K | 0 | 0 | 5.78 | 5.95 | 0% | 0% | 0% | 0% | 4 | 2 | 35.10 | 0 | — | 1.83 | 4459 | 7 |
| famous-star | audience_mild | $595K | 0 | 0 | 5.78 | 5.95 | 0% | 0% | 0% | 0% | 4 | 2 | 35.10 | 0 | — | 1.83 | 4459 | 7 |
| famous-star | audience_moderate | $595K | 0 | 0 | 5.78 | 5.95 | 0% | 0% | 0% | 0% | 4 | 2 | 35.10 | 0 | — | 1.83 | 4459 | 7 |
| famous-star | audience_strong | $595K | 0 | 0 | 5.78 | 5.95 | 0% | 0% | 0% | 0% | 4 | 2 | 35.10 | 0 | — | 1.83 | 4459 | 7 |
| famous-star | combo_A | $595K | 0 | 0 | 5.78 | 5.95 | 0% | 0% | 0% | 0% | 4 | 2 | 35.10 | 0 | — | 1.83 | 4459 | 7 |
| famous-star | combo_B | $595K | 0 | 0 | 5.78 | 5.95 | 0% | 0% | 0% | 0% | 4 | 2 | 35.10 | 0 | — | 1.83 | 4459 | 7 |
| famous-star | combo_C | $595K | 0 | 0 | 5.78 | 5.95 | 0% | 0% | 0% | 0% | 4 | 2 | 35.10 | 0 | — | 1.83 | 4459 | 7 |

### Paired deltas vs **control** (median of per-seed differences; share of seeds where the variant is higher)

| Strategy | Variant | Δ endCash | Δ prestige | Δ share8plus | Δ meanAudience |
|---|---|---:|---:|---:|---:|
| balanced | ref_no_era_bar | $16K (97%) | 0 (44%) | 0% (8%) | 0.07 (98%) |
| balanced | ref_era_bar_0.08 | $-17K (2%) | 0 (1%) | 0% (0%) | -0.07 (1%) |
| balanced | critic_mild | $0K (0%) | 0 (0%) | 0% (0%) | 0 (0%) |
| balanced | critic_moderate | $0K (0%) | 0 (0%) | 0% (0%) | 0 (0%) |
| balanced | critic_strong | $0K (0%) | 0 (0%) | 0% (0%) | 0 (0%) |
| balanced | critic_moderate_subtract | $0K (0%) | 0 (0%) | 0% (0%) | 0 (0%) |
| balanced | audience_mild | $0K (0%) | 0 (0%) | 0% (0%) | 0 (0%) |
| balanced | audience_moderate | $0K (0%) | 0 (0%) | 0% (0%) | 0 (0%) |
| balanced | audience_strong | $0K (0%) | 0 (0%) | 0% (0%) | 0 (0%) |
| balanced | combo_A | $0K (0%) | 0 (0%) | 0% (0%) | 0 (0%) |
| balanced | combo_B | $0K (0%) | 0 (0%) | 0% (0%) | 0 (0%) |
| balanced | combo_C | $0K (0%) | 0 (0%) | 0% (0%) | 0 (0%) |
| quality-first | ref_no_era_bar | $19K (99%) | 0 (48%) | 0% (9%) | 0.07 (100%) |
| quality-first | ref_era_bar_0.08 | $-19K (2%) | 0 (0%) | 0% (0%) | -0.07 (0%) |
| quality-first | critic_mild | $0K (0%) | 0 (0%) | 0% (0%) | 0 (0%) |
| quality-first | critic_moderate | $0K (0%) | 0 (0%) | 0% (0%) | 0 (0%) |
| quality-first | critic_strong | $0K (0%) | 0 (0%) | 0% (0%) | 0 (0%) |
| quality-first | critic_moderate_subtract | $0K (0%) | 0 (0%) | 0% (0%) | 0 (0%) |
| quality-first | audience_mild | $0K (0%) | 0 (0%) | 0% (0%) | 0 (0%) |
| quality-first | audience_moderate | $0K (0%) | 0 (0%) | 0% (0%) | 0 (0%) |
| quality-first | audience_strong | $0K (0%) | 0 (0%) | 0% (0%) | 0 (0%) |
| quality-first | combo_A | $0K (0%) | 0 (0%) | 0% (0%) | 0 (0%) |
| quality-first | combo_B | $0K (0%) | 0 (0%) | 0% (0%) | 0 (0%) |
| quality-first | combo_C | $0K (0%) | 0 (0%) | 0% (0%) | 0 (0%) |
| franchise-builder | ref_no_era_bar | $16K (94%) | 0 (46%) | 0% (6%) | 0.08 (97%) |
| franchise-builder | ref_era_bar_0.08 | $-16K (7%) | 0 (3%) | 0% (0%) | -0.07 (3%) |
| franchise-builder | critic_mild | $0K (0%) | 0 (0%) | 0% (0%) | 0 (0%) |
| franchise-builder | critic_moderate | $0K (0%) | 0 (0%) | 0% (0%) | 0 (0%) |
| franchise-builder | critic_strong | $0K (0%) | 0 (0%) | 0% (0%) | 0 (0%) |
| franchise-builder | critic_moderate_subtract | $0K (0%) | 0 (0%) | 0% (0%) | 0 (0%) |
| franchise-builder | audience_mild | $0K (0%) | 0 (0%) | 0% (0%) | 0 (0%) |
| franchise-builder | audience_moderate | $0K (0%) | 0 (0%) | 0% (0%) | 0 (0%) |
| franchise-builder | audience_strong | $0K (0%) | 0 (0%) | 0% (0%) | 0 (0%) |
| franchise-builder | combo_A | $0K (0%) | 0 (0%) | 0% (0%) | 0 (0%) |
| franchise-builder | combo_B | $0K (0%) | 0 (0%) | 0% (0%) | 0 (0%) |
| franchise-builder | combo_C | $0K (0%) | 0 (0%) | 0% (0%) | 0 (0%) |
| repeat-farmer | ref_no_era_bar | $22K (95%) | 0 (50%) | 0% (10%) | 0.07 (99%) |
| repeat-farmer | ref_era_bar_0.08 | $-22K (2%) | 0 (1%) | 0% (0%) | -0.07 (1%) |
| repeat-farmer | critic_mild | $0K (0%) | 0 (0%) | 0% (0%) | 0 (0%) |
| repeat-farmer | critic_moderate | $0K (0%) | 0 (0%) | 0% (0%) | 0 (0%) |
| repeat-farmer | critic_strong | $0K (0%) | 0 (0%) | 0% (0%) | 0 (0%) |
| repeat-farmer | critic_moderate_subtract | $0K (0%) | 0 (0%) | 0% (0%) | 0 (0%) |
| repeat-farmer | audience_mild | $0K (0%) | 0 (0%) | 0% (0%) | 0 (0%) |
| repeat-farmer | audience_moderate | $0K (0%) | 0 (0%) | 0% (0%) | 0 (0%) |
| repeat-farmer | audience_strong | $0K (0%) | 0 (0%) | 0% (0%) | 0 (0%) |
| repeat-farmer | combo_A | $0K (0%) | 0 (0%) | 0% (0%) | 0 (0%) |
| repeat-farmer | combo_B | $0K (0%) | 0 (0%) | 0% (0%) | 0 (0%) |
| repeat-farmer | combo_C | $0K (0%) | 0 (0%) | 0% (0%) | 0 (0%) |
| cheap-duds | ref_no_era_bar | $16K (100%) | 0 (0%) | 0% (0%) | 0.09 (100%) |
| cheap-duds | ref_era_bar_0.08 | $-14K (0%) | 0 (0%) | 0% (0%) | -0.08 (0%) |
| cheap-duds | critic_mild | $0K (0%) | 0 (0%) | 0% (0%) | 0 (0%) |
| cheap-duds | critic_moderate | $0K (0%) | 0 (0%) | 0% (0%) | 0 (0%) |
| cheap-duds | critic_strong | $0K (0%) | 0 (0%) | 0% (0%) | 0 (0%) |
| cheap-duds | critic_moderate_subtract | $0K (0%) | 0 (0%) | 0% (0%) | 0 (0%) |
| cheap-duds | audience_mild | $0K (0%) | 0 (0%) | 0% (0%) | 0 (0%) |
| cheap-duds | audience_moderate | $0K (0%) | 0 (0%) | 0% (0%) | 0 (0%) |
| cheap-duds | audience_strong | $0K (0%) | 0 (0%) | 0% (0%) | 0 (0%) |
| cheap-duds | combo_A | $0K (0%) | 0 (0%) | 0% (0%) | 0 (0%) |
| cheap-duds | combo_B | $0K (0%) | 0 (0%) | 0% (0%) | 0 (0%) |
| cheap-duds | combo_C | $0K (0%) | 0 (0%) | 0% (0%) | 0 (0%) |
| experimenter | ref_no_era_bar | $21K (99%) | 0 (22%) | 0% (8%) | 0.08 (99%) |
| experimenter | ref_era_bar_0.08 | $-21K (2%) | 0 (1%) | 0% (0%) | -0.07 (2%) |
| experimenter | critic_mild | $0K (0%) | 0 (0%) | 0% (0%) | 0 (0%) |
| experimenter | critic_moderate | $0K (0%) | 0 (0%) | 0% (0%) | 0 (0%) |
| experimenter | critic_strong | $0K (0%) | 0 (0%) | 0% (0%) | 0 (0%) |
| experimenter | critic_moderate_subtract | $0K (0%) | 0 (0%) | 0% (0%) | 0 (0%) |
| experimenter | audience_mild | $0K (0%) | 0 (0%) | 0% (0%) | 0 (0%) |
| experimenter | audience_moderate | $0K (0%) | 0 (0%) | 0% (0%) | 0 (0%) |
| experimenter | audience_strong | $0K (0%) | 0 (0%) | 0% (0%) | 0 (0%) |
| experimenter | combo_A | $0K (0%) | 0 (0%) | 0% (0%) | 0 (0%) |
| experimenter | combo_B | $0K (0%) | 0 (0%) | 0% (0%) | 0 (0%) |
| experimenter | combo_C | $0K (0%) | 0 (0%) | 0% (0%) | 0 (0%) |
| self-funder | ref_no_era_bar | $17K (95%) | 0 (0%) | 0% (0%) | 0.08 (99%) |
| self-funder | ref_era_bar_0.08 | $-14K (10%) | 0 (0%) | 0% (0%) | -0.08 (2%) |
| self-funder | critic_mild | $0K (0%) | 0 (0%) | 0% (0%) | 0 (0%) |
| self-funder | critic_moderate | $0K (0%) | 0 (0%) | 0% (0%) | 0 (0%) |
| self-funder | critic_strong | $0K (0%) | 0 (0%) | 0% (0%) | 0 (0%) |
| self-funder | critic_moderate_subtract | $0K (0%) | 0 (0%) | 0% (0%) | 0 (0%) |
| self-funder | audience_mild | $0K (0%) | 0 (0%) | 0% (0%) | 0 (0%) |
| self-funder | audience_moderate | $0K (0%) | 0 (0%) | 0% (0%) | 0 (0%) |
| self-funder | audience_strong | $0K (0%) | 0 (0%) | 0% (0%) | 0 (0%) |
| self-funder | combo_A | $0K (0%) | 0 (0%) | 0% (0%) | 0 (0%) |
| self-funder | combo_B | $0K (0%) | 0 (0%) | 0% (0%) | 0 (0%) |
| self-funder | combo_C | $0K (0%) | 0 (0%) | 0% (0%) | 0 (0%) |
| selective-self-funder | ref_no_era_bar | $16K (95%) | 0 (43%) | 0% (11%) | 0.08 (98%) |
| selective-self-funder | ref_era_bar_0.08 | $-16K (1%) | 0 (0%) | 0% (0%) | -0.07 (1%) |
| selective-self-funder | critic_mild | $0K (0%) | 0 (0%) | 0% (0%) | 0 (0%) |
| selective-self-funder | critic_moderate | $0K (0%) | 0 (0%) | 0% (0%) | 0 (0%) |
| selective-self-funder | critic_strong | $0K (0%) | 0 (0%) | 0% (0%) | 0 (0%) |
| selective-self-funder | critic_moderate_subtract | $0K (0%) | 0 (0%) | 0% (0%) | 0 (0%) |
| selective-self-funder | audience_mild | $0K (0%) | 0 (0%) | 0% (0%) | 0 (0%) |
| selective-self-funder | audience_moderate | $0K (0%) | 0 (0%) | 0% (0%) | 0 (0%) |
| selective-self-funder | audience_strong | $0K (0%) | 0 (0%) | 0% (0%) | 0 (0%) |
| selective-self-funder | combo_A | $0K (0%) | 0 (0%) | 0% (0%) | 0 (0%) |
| selective-self-funder | combo_B | $0K (0%) | 0 (0%) | 0% (0%) | 0 (0%) |
| selective-self-funder | combo_C | $0K (0%) | 0 (0%) | 0% (0%) | 0 (0%) |
| famous-star | ref_no_era_bar | $25K (100%) | 0 (0%) | 0% (0%) | 0.09 (100%) |
| famous-star | ref_era_bar_0.08 | $-23K (0%) | 0 (0%) | 0% (0%) | -0.08 (0%) |
| famous-star | critic_mild | $0K (0%) | 0 (0%) | 0% (0%) | 0 (0%) |
| famous-star | critic_moderate | $0K (0%) | 0 (0%) | 0% (0%) | 0 (0%) |
| famous-star | critic_strong | $0K (0%) | 0 (0%) | 0% (0%) | 0 (0%) |
| famous-star | critic_moderate_subtract | $0K (0%) | 0 (0%) | 0% (0%) | 0 (0%) |
| famous-star | audience_mild | $0K (0%) | 0 (0%) | 0% (0%) | 0 (0%) |
| famous-star | audience_moderate | $0K (0%) | 0 (0%) | 0% (0%) | 0 (0%) |
| famous-star | audience_strong | $0K (0%) | 0 (0%) | 0% (0%) | 0 (0%) |
| famous-star | combo_A | $0K (0%) | 0 (0%) | 0% (0%) | 0 (0%) |
| famous-star | combo_B | $0K (0%) | 0 (0%) | 0% (0%) | 0 (0%) |
| famous-star | combo_C | $0K (0%) | 0 (0%) | 0% (0%) | 0 (0%) |

### Mean review score (avg of Audience+Critic) by production index

| Strategy | Variant | #1 | #5 |
|---|---|---:|---:|
| balanced | control | 5.62 | 7.39 |
| balanced | ref_no_era_bar | 5.65 | 7.51 |
| balanced | ref_era_bar_0.08 | 5.59 | 7.29 |
| balanced | critic_mild | 5.62 | 7.39 |
| balanced | critic_moderate | 5.62 | 7.39 |
| balanced | critic_strong | 5.62 | 7.39 |
| balanced | critic_moderate_subtract | 5.62 | 7.39 |
| balanced | audience_mild | 5.62 | 7.39 |
| balanced | audience_moderate | 5.62 | 7.39 |
| balanced | audience_strong | 5.62 | 7.39 |
| balanced | combo_A | 5.62 | 7.39 |
| balanced | combo_B | 5.62 | 7.39 |
| balanced | combo_C | 5.62 | 7.39 |
| quality-first | control | 5.59 | 7.34 |
| quality-first | ref_no_era_bar | 5.62 | 7.45 |
| quality-first | ref_era_bar_0.08 | 5.56 | 7.23 |
| quality-first | critic_mild | 5.59 | 7.34 |
| quality-first | critic_moderate | 5.59 | 7.34 |
| quality-first | critic_strong | 5.59 | 7.34 |
| quality-first | critic_moderate_subtract | 5.59 | 7.34 |
| quality-first | audience_mild | 5.59 | 7.34 |
| quality-first | audience_moderate | 5.59 | 7.34 |
| quality-first | audience_strong | 5.59 | 7.34 |
| quality-first | combo_A | 5.59 | 7.34 |
| quality-first | combo_B | 5.59 | 7.34 |
| quality-first | combo_C | 5.59 | 7.34 |
| franchise-builder | control | 5.60 | 7.37 |
| franchise-builder | ref_no_era_bar | 5.63 | 7.47 |
| franchise-builder | ref_era_bar_0.08 | 5.57 | 7.27 |
| franchise-builder | critic_mild | 5.60 | 7.37 |
| franchise-builder | critic_moderate | 5.60 | 7.37 |
| franchise-builder | critic_strong | 5.60 | 7.37 |
| franchise-builder | critic_moderate_subtract | 5.60 | 7.37 |
| franchise-builder | audience_mild | 5.60 | 7.37 |
| franchise-builder | audience_moderate | 5.60 | 7.37 |
| franchise-builder | audience_strong | 5.60 | 7.37 |
| franchise-builder | combo_A | 5.60 | 7.37 |
| franchise-builder | combo_B | 5.60 | 7.37 |
| franchise-builder | combo_C | 5.60 | 7.37 |
| repeat-farmer | control | 5.61 | 7.39 |
| repeat-farmer | ref_no_era_bar | 5.64 | 7.51 |
| repeat-farmer | ref_era_bar_0.08 | 5.58 | 7.27 |
| repeat-farmer | critic_mild | 5.61 | 7.39 |
| repeat-farmer | critic_moderate | 5.61 | 7.39 |
| repeat-farmer | critic_strong | 5.61 | 7.39 |
| repeat-farmer | critic_moderate_subtract | 5.61 | 7.39 |
| repeat-farmer | audience_mild | 5.61 | 7.39 |
| repeat-farmer | audience_moderate | 5.61 | 7.39 |
| repeat-farmer | audience_strong | 5.61 | 7.39 |
| repeat-farmer | combo_A | 5.61 | 7.39 |
| repeat-farmer | combo_B | 5.61 | 7.39 |
| repeat-farmer | combo_C | 5.61 | 7.39 |
| cheap-duds | control | 5.47 | 5.81 |
| cheap-duds | ref_no_era_bar | 5.50 | 5.95 |
| cheap-duds | ref_era_bar_0.08 | 5.44 | 5.69 |
| cheap-duds | critic_mild | 5.47 | 5.81 |
| cheap-duds | critic_moderate | 5.47 | 5.81 |
| cheap-duds | critic_strong | 5.47 | 5.81 |
| cheap-duds | critic_moderate_subtract | 5.47 | 5.81 |
| cheap-duds | audience_mild | 5.47 | 5.81 |
| cheap-duds | audience_moderate | 5.47 | 5.81 |
| cheap-duds | audience_strong | 5.47 | 5.81 |
| cheap-duds | combo_A | 5.47 | 5.81 |
| cheap-duds | combo_B | 5.47 | 5.81 |
| cheap-duds | combo_C | 5.47 | 5.81 |
| experimenter | control | 5.59 | 7.23 |
| experimenter | ref_no_era_bar | 5.62 | 7.37 |
| experimenter | ref_era_bar_0.08 | 5.57 | 7.11 |
| experimenter | critic_mild | 5.59 | 7.23 |
| experimenter | critic_moderate | 5.59 | 7.23 |
| experimenter | critic_strong | 5.59 | 7.23 |
| experimenter | critic_moderate_subtract | 5.59 | 7.23 |
| experimenter | audience_mild | 5.59 | 7.23 |
| experimenter | audience_moderate | 5.59 | 7.23 |
| experimenter | audience_strong | 5.59 | 7.23 |
| experimenter | combo_A | 5.59 | 7.23 |
| experimenter | combo_B | 5.59 | 7.23 |
| experimenter | combo_C | 5.59 | 7.23 |
| self-funder | control | 5.48 | 6.12 |
| self-funder | ref_no_era_bar | 5.51 | 6.25 |
| self-funder | ref_era_bar_0.08 | 5.45 | 5.99 |
| self-funder | critic_mild | 5.48 | 6.12 |
| self-funder | critic_moderate | 5.48 | 6.12 |
| self-funder | critic_strong | 5.48 | 6.12 |
| self-funder | critic_moderate_subtract | 5.48 | 6.12 |
| self-funder | audience_mild | 5.48 | 6.12 |
| self-funder | audience_moderate | 5.48 | 6.12 |
| self-funder | audience_strong | 5.48 | 6.12 |
| self-funder | combo_A | 5.48 | 6.12 |
| self-funder | combo_B | 5.48 | 6.12 |
| self-funder | combo_C | 5.48 | 6.12 |
| selective-self-funder | control | 5.63 | 7.35 |
| selective-self-funder | ref_no_era_bar | 5.66 | 7.46 |
| selective-self-funder | ref_era_bar_0.08 | 5.60 | 7.24 |
| selective-self-funder | critic_mild | 5.63 | 7.35 |
| selective-self-funder | critic_moderate | 5.63 | 7.35 |
| selective-self-funder | critic_strong | 5.63 | 7.35 |
| selective-self-funder | critic_moderate_subtract | 5.63 | 7.35 |
| selective-self-funder | audience_mild | 5.63 | 7.35 |
| selective-self-funder | audience_moderate | 5.63 | 7.35 |
| selective-self-funder | audience_strong | 5.63 | 7.35 |
| selective-self-funder | combo_A | 5.63 | 7.35 |
| selective-self-funder | combo_B | 5.63 | 7.35 |
| selective-self-funder | combo_C | 5.63 | 7.35 |
| famous-star | control | 5.57 | 5.98 |
| famous-star | ref_no_era_bar | 5.60 | 6.11 |
| famous-star | ref_era_bar_0.08 | 5.54 | 5.85 |
| famous-star | critic_mild | 5.57 | 5.98 |
| famous-star | critic_moderate | 5.57 | 5.98 |
| famous-star | critic_strong | 5.57 | 5.98 |
| famous-star | critic_moderate_subtract | 5.57 | 5.98 |
| famous-star | audience_mild | 5.57 | 5.98 |
| famous-star | audience_moderate | 5.57 | 5.98 |
| famous-star | audience_strong | 5.57 | 5.98 |
| famous-star | combo_A | 5.57 | 5.98 |
| famous-star | combo_B | 5.57 | 5.98 |
| famous-star | combo_C | 5.57 | 5.98 |

### Great films — all strategies pooled, by release window

Denominators are films in that window. HoF = average of Audience and Critic ≥ hofThreshold (9.0). `≥9` is inclusive, `>9` strict.

| Strategy | Config | Window | Films (n) | Avg Aud | Avg Crit | HoF n (%) | Avg ≥9 n (%) | Avg >9 n (%) | Aud ≥9 n (%) | Crit ≥9 n (%) | 8+ n (%) | Careers with 0 HoF | HoF/career p10/p50/p90 | Best/career p10/p50/p90/p99 | Best combined movie | Prestige median |
|---|---|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---|---|---|---:|
| ALL | control | 1-5 | 13500 | 6.21 | 6.26 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 238 (1.8%) | 100% of 2700 | 0/0/0 | 6.14/7.29/7.94/8.4 | 8.70 "Midnight Protocol" (A8.64/C8.76; balanced seed 87 #5, yr 1.5, critic gen 0) |  |
| ALL | control | all | 13500 | 6.21 | 6.26 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 238 (1.8%) | 100% of 2700 | 0/0/0 | 6.14/7.29/7.94/8.4 | 8.70 "Midnight Protocol" (A8.64/C8.76; balanced seed 87 #5, yr 1.5, critic gen 0) |  |
| ALL | ref_no_era_bar | 1-5 | 13500 | 6.29 | 6.34 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 7 (0.1%) | 399 (3.0%) | 100% of 2700 | 0/0/0 | 6.24/7.4/8.06/8.52 | 8.82 "Midnight Protocol" (A8.76/C8.88; balanced seed 87 #5, yr 1.5, critic gen 0) |  |
| ALL | ref_no_era_bar | all | 13500 | 6.29 | 6.34 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 7 (0.1%) | 399 (3.0%) | 100% of 2700 | 0/0/0 | 6.24/7.4/8.06/8.52 | 8.82 "Midnight Protocol" (A8.76/C8.88; balanced seed 87 #5, yr 1.5, critic gen 0) |  |
| ALL | ref_era_bar_0.08 | 1-5 | 13500 | 6.13 | 6.18 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 161 (1.2%) | 100% of 2700 | 0/0/0 | 6.05/7.19/7.84/8.29 | 8.58 "Midnight Protocol" (A8.52/C8.64; balanced seed 87 #5, yr 1.5, critic gen 0) |  |
| ALL | ref_era_bar_0.08 | all | 13500 | 6.13 | 6.18 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 161 (1.2%) | 100% of 2700 | 0/0/0 | 6.05/7.19/7.84/8.29 | 8.58 "Midnight Protocol" (A8.52/C8.64; balanced seed 87 #5, yr 1.5, critic gen 0) |  |
| ALL | critic_mild | 1-5 | 13500 | 6.21 | 6.26 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 238 (1.8%) | 100% of 2700 | 0/0/0 | 6.14/7.29/7.94/8.4 | 8.70 "Midnight Protocol" (A8.64/C8.76; balanced seed 87 #5, yr 1.5, critic gen 0) |  |
| ALL | critic_mild | all | 13500 | 6.21 | 6.26 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 238 (1.8%) | 100% of 2700 | 0/0/0 | 6.14/7.29/7.94/8.4 | 8.70 "Midnight Protocol" (A8.64/C8.76; balanced seed 87 #5, yr 1.5, critic gen 0) |  |
| ALL | critic_moderate | 1-5 | 13500 | 6.21 | 6.26 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 238 (1.8%) | 100% of 2700 | 0/0/0 | 6.14/7.29/7.94/8.4 | 8.70 "Midnight Protocol" (A8.64/C8.76; balanced seed 87 #5, yr 1.5, critic gen 0) |  |
| ALL | critic_moderate | all | 13500 | 6.21 | 6.26 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 238 (1.8%) | 100% of 2700 | 0/0/0 | 6.14/7.29/7.94/8.4 | 8.70 "Midnight Protocol" (A8.64/C8.76; balanced seed 87 #5, yr 1.5, critic gen 0) |  |
| ALL | critic_strong | 1-5 | 13500 | 6.21 | 6.26 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 238 (1.8%) | 100% of 2700 | 0/0/0 | 6.14/7.29/7.94/8.4 | 8.70 "Midnight Protocol" (A8.64/C8.76; balanced seed 87 #5, yr 1.5, critic gen 0) |  |
| ALL | critic_strong | all | 13500 | 6.21 | 6.26 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 238 (1.8%) | 100% of 2700 | 0/0/0 | 6.14/7.29/7.94/8.4 | 8.70 "Midnight Protocol" (A8.64/C8.76; balanced seed 87 #5, yr 1.5, critic gen 0) |  |
| ALL | critic_moderate_subtract | 1-5 | 13500 | 6.21 | 6.26 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 238 (1.8%) | 100% of 2700 | 0/0/0 | 6.14/7.29/7.94/8.4 | 8.70 "Midnight Protocol" (A8.64/C8.76; balanced seed 87 #5, yr 1.5, critic gen 0) |  |
| ALL | critic_moderate_subtract | all | 13500 | 6.21 | 6.26 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 238 (1.8%) | 100% of 2700 | 0/0/0 | 6.14/7.29/7.94/8.4 | 8.70 "Midnight Protocol" (A8.64/C8.76; balanced seed 87 #5, yr 1.5, critic gen 0) |  |
| ALL | audience_mild | 1-5 | 13500 | 6.21 | 6.26 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 238 (1.8%) | 100% of 2700 | 0/0/0 | 6.14/7.29/7.94/8.4 | 8.70 "Midnight Protocol" (A8.64/C8.76; balanced seed 87 #5, yr 1.5, critic gen 0) |  |
| ALL | audience_mild | all | 13500 | 6.21 | 6.26 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 238 (1.8%) | 100% of 2700 | 0/0/0 | 6.14/7.29/7.94/8.4 | 8.70 "Midnight Protocol" (A8.64/C8.76; balanced seed 87 #5, yr 1.5, critic gen 0) |  |
| ALL | audience_moderate | 1-5 | 13500 | 6.21 | 6.26 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 238 (1.8%) | 100% of 2700 | 0/0/0 | 6.14/7.29/7.94/8.4 | 8.70 "Midnight Protocol" (A8.64/C8.76; balanced seed 87 #5, yr 1.5, critic gen 0) |  |
| ALL | audience_moderate | all | 13500 | 6.21 | 6.26 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 238 (1.8%) | 100% of 2700 | 0/0/0 | 6.14/7.29/7.94/8.4 | 8.70 "Midnight Protocol" (A8.64/C8.76; balanced seed 87 #5, yr 1.5, critic gen 0) |  |
| ALL | audience_strong | 1-5 | 13500 | 6.21 | 6.26 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 238 (1.8%) | 100% of 2700 | 0/0/0 | 6.14/7.29/7.94/8.4 | 8.70 "Midnight Protocol" (A8.64/C8.76; balanced seed 87 #5, yr 1.5, critic gen 0) |  |
| ALL | audience_strong | all | 13500 | 6.21 | 6.26 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 238 (1.8%) | 100% of 2700 | 0/0/0 | 6.14/7.29/7.94/8.4 | 8.70 "Midnight Protocol" (A8.64/C8.76; balanced seed 87 #5, yr 1.5, critic gen 0) |  |
| ALL | combo_A | 1-5 | 13500 | 6.21 | 6.26 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 238 (1.8%) | 100% of 2700 | 0/0/0 | 6.14/7.29/7.94/8.4 | 8.70 "Midnight Protocol" (A8.64/C8.76; balanced seed 87 #5, yr 1.5, critic gen 0) |  |
| ALL | combo_A | all | 13500 | 6.21 | 6.26 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 238 (1.8%) | 100% of 2700 | 0/0/0 | 6.14/7.29/7.94/8.4 | 8.70 "Midnight Protocol" (A8.64/C8.76; balanced seed 87 #5, yr 1.5, critic gen 0) |  |
| ALL | combo_B | 1-5 | 13500 | 6.21 | 6.26 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 238 (1.8%) | 100% of 2700 | 0/0/0 | 6.14/7.29/7.94/8.4 | 8.70 "Midnight Protocol" (A8.64/C8.76; balanced seed 87 #5, yr 1.5, critic gen 0) |  |
| ALL | combo_B | all | 13500 | 6.21 | 6.26 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 238 (1.8%) | 100% of 2700 | 0/0/0 | 6.14/7.29/7.94/8.4 | 8.70 "Midnight Protocol" (A8.64/C8.76; balanced seed 87 #5, yr 1.5, critic gen 0) |  |
| ALL | combo_C | 1-5 | 13500 | 6.21 | 6.26 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 238 (1.8%) | 100% of 2700 | 0/0/0 | 6.14/7.29/7.94/8.4 | 8.70 "Midnight Protocol" (A8.64/C8.76; balanced seed 87 #5, yr 1.5, critic gen 0) |  |
| ALL | combo_C | all | 13500 | 6.21 | 6.26 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 238 (1.8%) | 100% of 2700 | 0/0/0 | 6.14/7.29/7.94/8.4 | 8.70 "Midnight Protocol" (A8.64/C8.76; balanced seed 87 #5, yr 1.5, critic gen 0) |  |

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
| balanced | ref_no_era_bar | all | 1500 | 6.54 | 6.58 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 3 (0.2%) | 68 (4.5%) | 100% of 300 | 0/0/0 | 7.2/7.73/8.16/8.52 | 8.82 "Midnight Protocol" (A8.76/C8.88; balanced seed 87 #5, yr 1.5, critic gen 0) | 125 |
| quality-first | ref_no_era_bar | all | 1500 | 6.55 | 6.58 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 1 (0.1%) | 71 (4.7%) | 100% of 300 | 0/0/0 | 7.17/7.68/8.22/8.61 | 8.78 "Wild Protocol" (A8.74/C8.82; quality-first seed 181 #4, yr 1.2, critic gen 0) | 125 |
| franchise-builder | ref_no_era_bar | all | 1500 | 6.55 | 6.54 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 43 (2.9%) | 100% of 300 | 0/0/0 | 7.25/7.66/8.07/8.53 | 8.68 "Wild Signal" (A8.59/C8.76; franchise-builder seed 300 #5, yr 1.5, critic gen 0) | 125 |
| repeat-farmer | ref_no_era_bar | all | 1500 | 6.57 | 6.61 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 1 (0.1%) | 79 (5.3%) | 100% of 300 | 0/0/0 | 7.18/7.67/8.19/8.54 | 8.80 "Red Protocol 2" (A8.72/C8.87; repeat-farmer seed 233 #5, yr 1.5, critic gen 0) | 125 |
| cheap-duds | ref_no_era_bar | all | 1500 | 5.68 | 5.86 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 100% of 300 | 0/0/0 | 5.95/6.29/6.69/6.96 | 7.06 "Midnight Night" (A6.7/C7.41; cheap-duds seed 88 #5, yr 1.5, critic gen 0) | 0 |
| experimenter | ref_no_era_bar | all | 1500 | 6.36 | 6.39 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 55 (3.7%) | 100% of 300 | 0/0/0 | 6.98/7.6/8.12/8.57 | 8.60 "Wild Rising" (A8.53/C8.67; experimenter seed 99 #5, yr 1.5, critic gen 0) | 75 |
| self-funder | ref_no_era_bar | all | 1500 | 5.93 | 5.97 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 100% of 300 | 0/0/0 | 6.13/6.5/6.88/7.27 | 7.42 "Broken Night" (A7.38/C7.45; self-funder seed 126 #5, yr 1.5, critic gen 0) | 0 |
| selective-self-funder | ref_no_era_bar | all | 1500 | 6.54 | 6.54 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 2 (0.1%) | 83 (5.5%) | 100% of 300 | 0/0/0 | 7.15/7.72/8.24/8.55 | 8.68 "Wild Protocol" (A8.64/C8.71; selective-self-funder seed 181 #4, yr 1.2, critic gen 0) | 125 |
| famous-star | ref_no_era_bar | all | 1500 | 5.88 | 5.99 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 100% of 300 | 0/0/0 | 6.12/6.43/6.76/7.12 | 7.37 "Dead Legacy" (A7.31/C7.42; famous-star seed 78 #5, yr 1.5, critic gen 0) | 0 |
| balanced | ref_era_bar_0.08 | all | 1500 | 6.39 | 6.43 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 21 (1.4%) | 100% of 300 | 0/0/0 | 7.01/7.52/7.95/8.29 | 8.58 "Midnight Protocol" (A8.52/C8.64; balanced seed 87 #5, yr 1.5, critic gen 0) | 75 |
| quality-first | ref_era_bar_0.08 | all | 1500 | 6.40 | 6.43 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 34 (2.3%) | 100% of 300 | 0/0/0 | 6.98/7.48/8/8.38 | 8.58 "Wild Protocol" (A8.54/C8.62; quality-first seed 181 #4, yr 1.2, critic gen 0) | 75 |
| franchise-builder | ref_era_bar_0.08 | all | 1500 | 6.38 | 6.39 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 22 (1.5%) | 100% of 300 | 0/0/0 | 7.01/7.49/7.87/8.26 | 8.42 "Wild Signal" (A8.33/C8.51; franchise-builder seed 300 #5, yr 1.5, critic gen 0) | 75 |
| repeat-farmer | ref_era_bar_0.08 | all | 1500 | 6.41 | 6.45 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 28 (1.9%) | 100% of 300 | 0/0/0 | 7/7.46/7.96/8.33 | 8.57 "Red Protocol" (A8.49/C8.65; repeat-farmer seed 233 #4, yr 1.2, critic gen 0) | 25 |
| cheap-duds | ref_era_bar_0.08 | all | 1500 | 5.51 | 5.70 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 100% of 300 | 0/0/0 | 5.77/6.08/6.44/6.69 | 6.76 "Midnight Night" (A6.42/C7.1; cheap-duds seed 88 #5, yr 1.5, critic gen 0) | 0 |
| experimenter | ref_era_bar_0.08 | all | 1500 | 6.18 | 6.22 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 22 (1.5%) | 100% of 300 | 0/0/0 | 6.66/7.34/7.87/8.25 | 8.39 "Last Pulse" (A8.3/C8.48; experimenter seed 77 #4, yr 1.2, critic gen 0) | 0 |
| self-funder | ref_era_bar_0.08 | all | 1500 | 5.76 | 5.81 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 100% of 300 | 0/0/0 | 5.95/6.29/6.63/6.97 | 7.11 "Broken Night" (A7.07/C7.14; self-funder seed 126 #5, yr 1.5, critic gen 0) | 0 |
| selective-self-funder | ref_era_bar_0.08 | all | 1500 | 6.38 | 6.39 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 34 (2.3%) | 100% of 300 | 0/0/0 | 6.95/7.52/7.97/8.31 | 8.48 "Wild Protocol" (A8.44/C8.51; selective-self-funder seed 181 #4, yr 1.2, critic gen 0) | 75 |
| famous-star | ref_era_bar_0.08 | all | 1500 | 5.72 | 5.83 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 100% of 300 | 0/0/0 | 5.92/6.21/6.57/6.88 | 7.07 "Dead Legacy" (A7.01/C7.12; famous-star seed 78 #5, yr 1.5, critic gen 0) | 0 |
| balanced | critic_mild | all | 1500 | 6.47 | 6.50 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 41 (2.7%) | 100% of 300 | 0/0/0 | 7.11/7.62/8.05/8.41 | 8.70 "Midnight Protocol" (A8.64/C8.76; balanced seed 87 #5, yr 1.5, critic gen 0) | 75 |
| quality-first | critic_mild | all | 1500 | 6.47 | 6.51 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 45 (3.0%) | 100% of 300 | 0/0/0 | 7.07/7.58/8.12/8.49 | 8.68 "Wild Protocol" (A8.64/C8.72; quality-first seed 181 #4, yr 1.2, critic gen 0) | 75 |
| franchise-builder | critic_mild | all | 1500 | 6.46 | 6.47 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 27 (1.8%) | 100% of 300 | 0/0/0 | 7.14/7.57/7.96/8.4 | 8.55 "Wild Signal" (A8.46/C8.64; franchise-builder seed 300 #5, yr 1.5, critic gen 0) | 75 |
| repeat-farmer | critic_mild | all | 1500 | 6.49 | 6.53 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 45 (3.0%) | 100% of 300 | 0/0/0 | 7.09/7.55/8.06/8.43 | 8.68 "Red Protocol 2" (A8.6/C8.76; repeat-farmer seed 233 #5, yr 1.5, critic gen 0) | 75 |
| cheap-duds | critic_mild | all | 1500 | 5.60 | 5.78 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 100% of 300 | 0/0/0 | 5.86/6.17/6.56/6.81 | 6.90 "Midnight Night" (A6.56/C7.25; cheap-duds seed 88 #5, yr 1.5, critic gen 0) | 0 |
| experimenter | critic_mild | all | 1500 | 6.27 | 6.31 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 30 (2.0%) | 100% of 300 | 0/0/0 | 6.8/7.46/7.97/8.47 | 8.49 "Last Pulse" (A8.4/C8.58; experimenter seed 77 #4, yr 1.2, critic gen 0) | 75 |
| self-funder | critic_mild | all | 1500 | 5.84 | 5.90 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 100% of 300 | 0/0/0 | 6.06/6.39/6.76/7.12 | 7.26 "Broken Night" (A7.22/C7.29; self-funder seed 126 #5, yr 1.5, critic gen 0) | 0 |
| selective-self-funder | critic_mild | all | 1500 | 6.46 | 6.46 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 50 (3.3%) | 100% of 300 | 0/0/0 | 7.05/7.62/8.08/8.39 | 8.57 "Wild Protocol" (A8.54/C8.61; selective-self-funder seed 181 #4, yr 1.2, critic gen 0) | 75 |
| famous-star | critic_mild | all | 1500 | 5.80 | 5.90 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 100% of 300 | 0/0/0 | 6.02/6.31/6.66/6.96 | 7.22 "Dead Legacy" (A7.16/C7.27; famous-star seed 78 #5, yr 1.5, critic gen 0) | 0 |
| balanced | critic_moderate | all | 1500 | 6.47 | 6.50 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 41 (2.7%) | 100% of 300 | 0/0/0 | 7.11/7.62/8.05/8.41 | 8.70 "Midnight Protocol" (A8.64/C8.76; balanced seed 87 #5, yr 1.5, critic gen 0) | 75 |
| quality-first | critic_moderate | all | 1500 | 6.47 | 6.51 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 45 (3.0%) | 100% of 300 | 0/0/0 | 7.07/7.58/8.12/8.49 | 8.68 "Wild Protocol" (A8.64/C8.72; quality-first seed 181 #4, yr 1.2, critic gen 0) | 75 |
| franchise-builder | critic_moderate | all | 1500 | 6.46 | 6.47 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 27 (1.8%) | 100% of 300 | 0/0/0 | 7.14/7.57/7.96/8.4 | 8.55 "Wild Signal" (A8.46/C8.64; franchise-builder seed 300 #5, yr 1.5, critic gen 0) | 75 |
| repeat-farmer | critic_moderate | all | 1500 | 6.49 | 6.53 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 45 (3.0%) | 100% of 300 | 0/0/0 | 7.09/7.55/8.06/8.43 | 8.68 "Red Protocol 2" (A8.6/C8.76; repeat-farmer seed 233 #5, yr 1.5, critic gen 0) | 75 |
| cheap-duds | critic_moderate | all | 1500 | 5.60 | 5.78 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 100% of 300 | 0/0/0 | 5.86/6.17/6.56/6.81 | 6.90 "Midnight Night" (A6.56/C7.25; cheap-duds seed 88 #5, yr 1.5, critic gen 0) | 0 |
| experimenter | critic_moderate | all | 1500 | 6.27 | 6.31 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 30 (2.0%) | 100% of 300 | 0/0/0 | 6.8/7.46/7.97/8.47 | 8.49 "Last Pulse" (A8.4/C8.58; experimenter seed 77 #4, yr 1.2, critic gen 0) | 75 |
| self-funder | critic_moderate | all | 1500 | 5.84 | 5.90 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 100% of 300 | 0/0/0 | 6.06/6.39/6.76/7.12 | 7.26 "Broken Night" (A7.22/C7.29; self-funder seed 126 #5, yr 1.5, critic gen 0) | 0 |
| selective-self-funder | critic_moderate | all | 1500 | 6.46 | 6.46 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 50 (3.3%) | 100% of 300 | 0/0/0 | 7.05/7.62/8.08/8.39 | 8.57 "Wild Protocol" (A8.54/C8.61; selective-self-funder seed 181 #4, yr 1.2, critic gen 0) | 75 |
| famous-star | critic_moderate | all | 1500 | 5.80 | 5.90 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 100% of 300 | 0/0/0 | 6.02/6.31/6.66/6.96 | 7.22 "Dead Legacy" (A7.16/C7.27; famous-star seed 78 #5, yr 1.5, critic gen 0) | 0 |
| balanced | critic_strong | all | 1500 | 6.47 | 6.50 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 41 (2.7%) | 100% of 300 | 0/0/0 | 7.11/7.62/8.05/8.41 | 8.70 "Midnight Protocol" (A8.64/C8.76; balanced seed 87 #5, yr 1.5, critic gen 0) | 75 |
| quality-first | critic_strong | all | 1500 | 6.47 | 6.51 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 45 (3.0%) | 100% of 300 | 0/0/0 | 7.07/7.58/8.12/8.49 | 8.68 "Wild Protocol" (A8.64/C8.72; quality-first seed 181 #4, yr 1.2, critic gen 0) | 75 |
| franchise-builder | critic_strong | all | 1500 | 6.46 | 6.47 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 27 (1.8%) | 100% of 300 | 0/0/0 | 7.14/7.57/7.96/8.4 | 8.55 "Wild Signal" (A8.46/C8.64; franchise-builder seed 300 #5, yr 1.5, critic gen 0) | 75 |
| repeat-farmer | critic_strong | all | 1500 | 6.49 | 6.53 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 45 (3.0%) | 100% of 300 | 0/0/0 | 7.09/7.55/8.06/8.43 | 8.68 "Red Protocol 2" (A8.6/C8.76; repeat-farmer seed 233 #5, yr 1.5, critic gen 0) | 75 |
| cheap-duds | critic_strong | all | 1500 | 5.60 | 5.78 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 100% of 300 | 0/0/0 | 5.86/6.17/6.56/6.81 | 6.90 "Midnight Night" (A6.56/C7.25; cheap-duds seed 88 #5, yr 1.5, critic gen 0) | 0 |
| experimenter | critic_strong | all | 1500 | 6.27 | 6.31 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 30 (2.0%) | 100% of 300 | 0/0/0 | 6.8/7.46/7.97/8.47 | 8.49 "Last Pulse" (A8.4/C8.58; experimenter seed 77 #4, yr 1.2, critic gen 0) | 75 |
| self-funder | critic_strong | all | 1500 | 5.84 | 5.90 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 100% of 300 | 0/0/0 | 6.06/6.39/6.76/7.12 | 7.26 "Broken Night" (A7.22/C7.29; self-funder seed 126 #5, yr 1.5, critic gen 0) | 0 |
| selective-self-funder | critic_strong | all | 1500 | 6.46 | 6.46 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 50 (3.3%) | 100% of 300 | 0/0/0 | 7.05/7.62/8.08/8.39 | 8.57 "Wild Protocol" (A8.54/C8.61; selective-self-funder seed 181 #4, yr 1.2, critic gen 0) | 75 |
| famous-star | critic_strong | all | 1500 | 5.80 | 5.90 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 100% of 300 | 0/0/0 | 6.02/6.31/6.66/6.96 | 7.22 "Dead Legacy" (A7.16/C7.27; famous-star seed 78 #5, yr 1.5, critic gen 0) | 0 |
| balanced | critic_moderate_subtract | all | 1500 | 6.47 | 6.50 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 41 (2.7%) | 100% of 300 | 0/0/0 | 7.11/7.62/8.05/8.41 | 8.70 "Midnight Protocol" (A8.64/C8.76; balanced seed 87 #5, yr 1.5, critic gen 0) | 75 |
| quality-first | critic_moderate_subtract | all | 1500 | 6.47 | 6.51 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 45 (3.0%) | 100% of 300 | 0/0/0 | 7.07/7.58/8.12/8.49 | 8.68 "Wild Protocol" (A8.64/C8.72; quality-first seed 181 #4, yr 1.2, critic gen 0) | 75 |
| franchise-builder | critic_moderate_subtract | all | 1500 | 6.46 | 6.47 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 27 (1.8%) | 100% of 300 | 0/0/0 | 7.14/7.57/7.96/8.4 | 8.55 "Wild Signal" (A8.46/C8.64; franchise-builder seed 300 #5, yr 1.5, critic gen 0) | 75 |
| repeat-farmer | critic_moderate_subtract | all | 1500 | 6.49 | 6.53 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 45 (3.0%) | 100% of 300 | 0/0/0 | 7.09/7.55/8.06/8.43 | 8.68 "Red Protocol 2" (A8.6/C8.76; repeat-farmer seed 233 #5, yr 1.5, critic gen 0) | 75 |
| cheap-duds | critic_moderate_subtract | all | 1500 | 5.60 | 5.78 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 100% of 300 | 0/0/0 | 5.86/6.17/6.56/6.81 | 6.90 "Midnight Night" (A6.56/C7.25; cheap-duds seed 88 #5, yr 1.5, critic gen 0) | 0 |
| experimenter | critic_moderate_subtract | all | 1500 | 6.27 | 6.31 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 30 (2.0%) | 100% of 300 | 0/0/0 | 6.8/7.46/7.97/8.47 | 8.49 "Last Pulse" (A8.4/C8.58; experimenter seed 77 #4, yr 1.2, critic gen 0) | 75 |
| self-funder | critic_moderate_subtract | all | 1500 | 5.84 | 5.90 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 100% of 300 | 0/0/0 | 6.06/6.39/6.76/7.12 | 7.26 "Broken Night" (A7.22/C7.29; self-funder seed 126 #5, yr 1.5, critic gen 0) | 0 |
| selective-self-funder | critic_moderate_subtract | all | 1500 | 6.46 | 6.46 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 50 (3.3%) | 100% of 300 | 0/0/0 | 7.05/7.62/8.08/8.39 | 8.57 "Wild Protocol" (A8.54/C8.61; selective-self-funder seed 181 #4, yr 1.2, critic gen 0) | 75 |
| famous-star | critic_moderate_subtract | all | 1500 | 5.80 | 5.90 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 100% of 300 | 0/0/0 | 6.02/6.31/6.66/6.96 | 7.22 "Dead Legacy" (A7.16/C7.27; famous-star seed 78 #5, yr 1.5, critic gen 0) | 0 |
| balanced | audience_mild | all | 1500 | 6.47 | 6.50 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 41 (2.7%) | 100% of 300 | 0/0/0 | 7.11/7.62/8.05/8.41 | 8.70 "Midnight Protocol" (A8.64/C8.76; balanced seed 87 #5, yr 1.5, critic gen 0) | 75 |
| quality-first | audience_mild | all | 1500 | 6.47 | 6.51 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 45 (3.0%) | 100% of 300 | 0/0/0 | 7.07/7.58/8.12/8.49 | 8.68 "Wild Protocol" (A8.64/C8.72; quality-first seed 181 #4, yr 1.2, critic gen 0) | 75 |
| franchise-builder | audience_mild | all | 1500 | 6.46 | 6.47 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 27 (1.8%) | 100% of 300 | 0/0/0 | 7.14/7.57/7.96/8.4 | 8.55 "Wild Signal" (A8.46/C8.64; franchise-builder seed 300 #5, yr 1.5, critic gen 0) | 75 |
| repeat-farmer | audience_mild | all | 1500 | 6.49 | 6.53 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 45 (3.0%) | 100% of 300 | 0/0/0 | 7.09/7.55/8.06/8.43 | 8.68 "Red Protocol 2" (A8.6/C8.76; repeat-farmer seed 233 #5, yr 1.5, critic gen 0) | 75 |
| cheap-duds | audience_mild | all | 1500 | 5.60 | 5.78 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 100% of 300 | 0/0/0 | 5.86/6.17/6.56/6.81 | 6.90 "Midnight Night" (A6.56/C7.25; cheap-duds seed 88 #5, yr 1.5, critic gen 0) | 0 |
| experimenter | audience_mild | all | 1500 | 6.27 | 6.31 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 30 (2.0%) | 100% of 300 | 0/0/0 | 6.8/7.46/7.97/8.47 | 8.49 "Last Pulse" (A8.4/C8.58; experimenter seed 77 #4, yr 1.2, critic gen 0) | 75 |
| self-funder | audience_mild | all | 1500 | 5.84 | 5.90 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 100% of 300 | 0/0/0 | 6.06/6.39/6.76/7.12 | 7.26 "Broken Night" (A7.22/C7.29; self-funder seed 126 #5, yr 1.5, critic gen 0) | 0 |
| selective-self-funder | audience_mild | all | 1500 | 6.46 | 6.46 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 50 (3.3%) | 100% of 300 | 0/0/0 | 7.05/7.62/8.08/8.39 | 8.57 "Wild Protocol" (A8.54/C8.61; selective-self-funder seed 181 #4, yr 1.2, critic gen 0) | 75 |
| famous-star | audience_mild | all | 1500 | 5.80 | 5.90 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 100% of 300 | 0/0/0 | 6.02/6.31/6.66/6.96 | 7.22 "Dead Legacy" (A7.16/C7.27; famous-star seed 78 #5, yr 1.5, critic gen 0) | 0 |
| balanced | audience_moderate | all | 1500 | 6.47 | 6.50 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 41 (2.7%) | 100% of 300 | 0/0/0 | 7.11/7.62/8.05/8.41 | 8.70 "Midnight Protocol" (A8.64/C8.76; balanced seed 87 #5, yr 1.5, critic gen 0) | 75 |
| quality-first | audience_moderate | all | 1500 | 6.47 | 6.51 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 45 (3.0%) | 100% of 300 | 0/0/0 | 7.07/7.58/8.12/8.49 | 8.68 "Wild Protocol" (A8.64/C8.72; quality-first seed 181 #4, yr 1.2, critic gen 0) | 75 |
| franchise-builder | audience_moderate | all | 1500 | 6.46 | 6.47 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 27 (1.8%) | 100% of 300 | 0/0/0 | 7.14/7.57/7.96/8.4 | 8.55 "Wild Signal" (A8.46/C8.64; franchise-builder seed 300 #5, yr 1.5, critic gen 0) | 75 |
| repeat-farmer | audience_moderate | all | 1500 | 6.49 | 6.53 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 45 (3.0%) | 100% of 300 | 0/0/0 | 7.09/7.55/8.06/8.43 | 8.68 "Red Protocol 2" (A8.6/C8.76; repeat-farmer seed 233 #5, yr 1.5, critic gen 0) | 75 |
| cheap-duds | audience_moderate | all | 1500 | 5.60 | 5.78 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 100% of 300 | 0/0/0 | 5.86/6.17/6.56/6.81 | 6.90 "Midnight Night" (A6.56/C7.25; cheap-duds seed 88 #5, yr 1.5, critic gen 0) | 0 |
| experimenter | audience_moderate | all | 1500 | 6.27 | 6.31 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 30 (2.0%) | 100% of 300 | 0/0/0 | 6.8/7.46/7.97/8.47 | 8.49 "Last Pulse" (A8.4/C8.58; experimenter seed 77 #4, yr 1.2, critic gen 0) | 75 |
| self-funder | audience_moderate | all | 1500 | 5.84 | 5.90 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 100% of 300 | 0/0/0 | 6.06/6.39/6.76/7.12 | 7.26 "Broken Night" (A7.22/C7.29; self-funder seed 126 #5, yr 1.5, critic gen 0) | 0 |
| selective-self-funder | audience_moderate | all | 1500 | 6.46 | 6.46 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 50 (3.3%) | 100% of 300 | 0/0/0 | 7.05/7.62/8.08/8.39 | 8.57 "Wild Protocol" (A8.54/C8.61; selective-self-funder seed 181 #4, yr 1.2, critic gen 0) | 75 |
| famous-star | audience_moderate | all | 1500 | 5.80 | 5.90 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 100% of 300 | 0/0/0 | 6.02/6.31/6.66/6.96 | 7.22 "Dead Legacy" (A7.16/C7.27; famous-star seed 78 #5, yr 1.5, critic gen 0) | 0 |
| balanced | audience_strong | all | 1500 | 6.47 | 6.50 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 41 (2.7%) | 100% of 300 | 0/0/0 | 7.11/7.62/8.05/8.41 | 8.70 "Midnight Protocol" (A8.64/C8.76; balanced seed 87 #5, yr 1.5, critic gen 0) | 75 |
| quality-first | audience_strong | all | 1500 | 6.47 | 6.51 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 45 (3.0%) | 100% of 300 | 0/0/0 | 7.07/7.58/8.12/8.49 | 8.68 "Wild Protocol" (A8.64/C8.72; quality-first seed 181 #4, yr 1.2, critic gen 0) | 75 |
| franchise-builder | audience_strong | all | 1500 | 6.46 | 6.47 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 27 (1.8%) | 100% of 300 | 0/0/0 | 7.14/7.57/7.96/8.4 | 8.55 "Wild Signal" (A8.46/C8.64; franchise-builder seed 300 #5, yr 1.5, critic gen 0) | 75 |
| repeat-farmer | audience_strong | all | 1500 | 6.49 | 6.53 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 45 (3.0%) | 100% of 300 | 0/0/0 | 7.09/7.55/8.06/8.43 | 8.68 "Red Protocol 2" (A8.6/C8.76; repeat-farmer seed 233 #5, yr 1.5, critic gen 0) | 75 |
| cheap-duds | audience_strong | all | 1500 | 5.60 | 5.78 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 100% of 300 | 0/0/0 | 5.86/6.17/6.56/6.81 | 6.90 "Midnight Night" (A6.56/C7.25; cheap-duds seed 88 #5, yr 1.5, critic gen 0) | 0 |
| experimenter | audience_strong | all | 1500 | 6.27 | 6.31 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 30 (2.0%) | 100% of 300 | 0/0/0 | 6.8/7.46/7.97/8.47 | 8.49 "Last Pulse" (A8.4/C8.58; experimenter seed 77 #4, yr 1.2, critic gen 0) | 75 |
| self-funder | audience_strong | all | 1500 | 5.84 | 5.90 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 100% of 300 | 0/0/0 | 6.06/6.39/6.76/7.12 | 7.26 "Broken Night" (A7.22/C7.29; self-funder seed 126 #5, yr 1.5, critic gen 0) | 0 |
| selective-self-funder | audience_strong | all | 1500 | 6.46 | 6.46 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 50 (3.3%) | 100% of 300 | 0/0/0 | 7.05/7.62/8.08/8.39 | 8.57 "Wild Protocol" (A8.54/C8.61; selective-self-funder seed 181 #4, yr 1.2, critic gen 0) | 75 |
| famous-star | audience_strong | all | 1500 | 5.80 | 5.90 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 100% of 300 | 0/0/0 | 6.02/6.31/6.66/6.96 | 7.22 "Dead Legacy" (A7.16/C7.27; famous-star seed 78 #5, yr 1.5, critic gen 0) | 0 |
| balanced | combo_A | all | 1500 | 6.47 | 6.50 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 41 (2.7%) | 100% of 300 | 0/0/0 | 7.11/7.62/8.05/8.41 | 8.70 "Midnight Protocol" (A8.64/C8.76; balanced seed 87 #5, yr 1.5, critic gen 0) | 75 |
| quality-first | combo_A | all | 1500 | 6.47 | 6.51 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 45 (3.0%) | 100% of 300 | 0/0/0 | 7.07/7.58/8.12/8.49 | 8.68 "Wild Protocol" (A8.64/C8.72; quality-first seed 181 #4, yr 1.2, critic gen 0) | 75 |
| franchise-builder | combo_A | all | 1500 | 6.46 | 6.47 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 27 (1.8%) | 100% of 300 | 0/0/0 | 7.14/7.57/7.96/8.4 | 8.55 "Wild Signal" (A8.46/C8.64; franchise-builder seed 300 #5, yr 1.5, critic gen 0) | 75 |
| repeat-farmer | combo_A | all | 1500 | 6.49 | 6.53 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 45 (3.0%) | 100% of 300 | 0/0/0 | 7.09/7.55/8.06/8.43 | 8.68 "Red Protocol 2" (A8.6/C8.76; repeat-farmer seed 233 #5, yr 1.5, critic gen 0) | 75 |
| cheap-duds | combo_A | all | 1500 | 5.60 | 5.78 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 100% of 300 | 0/0/0 | 5.86/6.17/6.56/6.81 | 6.90 "Midnight Night" (A6.56/C7.25; cheap-duds seed 88 #5, yr 1.5, critic gen 0) | 0 |
| experimenter | combo_A | all | 1500 | 6.27 | 6.31 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 30 (2.0%) | 100% of 300 | 0/0/0 | 6.8/7.46/7.97/8.47 | 8.49 "Last Pulse" (A8.4/C8.58; experimenter seed 77 #4, yr 1.2, critic gen 0) | 75 |
| self-funder | combo_A | all | 1500 | 5.84 | 5.90 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 100% of 300 | 0/0/0 | 6.06/6.39/6.76/7.12 | 7.26 "Broken Night" (A7.22/C7.29; self-funder seed 126 #5, yr 1.5, critic gen 0) | 0 |
| selective-self-funder | combo_A | all | 1500 | 6.46 | 6.46 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 50 (3.3%) | 100% of 300 | 0/0/0 | 7.05/7.62/8.08/8.39 | 8.57 "Wild Protocol" (A8.54/C8.61; selective-self-funder seed 181 #4, yr 1.2, critic gen 0) | 75 |
| famous-star | combo_A | all | 1500 | 5.80 | 5.90 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 100% of 300 | 0/0/0 | 6.02/6.31/6.66/6.96 | 7.22 "Dead Legacy" (A7.16/C7.27; famous-star seed 78 #5, yr 1.5, critic gen 0) | 0 |
| balanced | combo_B | all | 1500 | 6.47 | 6.50 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 41 (2.7%) | 100% of 300 | 0/0/0 | 7.11/7.62/8.05/8.41 | 8.70 "Midnight Protocol" (A8.64/C8.76; balanced seed 87 #5, yr 1.5, critic gen 0) | 75 |
| quality-first | combo_B | all | 1500 | 6.47 | 6.51 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 45 (3.0%) | 100% of 300 | 0/0/0 | 7.07/7.58/8.12/8.49 | 8.68 "Wild Protocol" (A8.64/C8.72; quality-first seed 181 #4, yr 1.2, critic gen 0) | 75 |
| franchise-builder | combo_B | all | 1500 | 6.46 | 6.47 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 27 (1.8%) | 100% of 300 | 0/0/0 | 7.14/7.57/7.96/8.4 | 8.55 "Wild Signal" (A8.46/C8.64; franchise-builder seed 300 #5, yr 1.5, critic gen 0) | 75 |
| repeat-farmer | combo_B | all | 1500 | 6.49 | 6.53 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 45 (3.0%) | 100% of 300 | 0/0/0 | 7.09/7.55/8.06/8.43 | 8.68 "Red Protocol 2" (A8.6/C8.76; repeat-farmer seed 233 #5, yr 1.5, critic gen 0) | 75 |
| cheap-duds | combo_B | all | 1500 | 5.60 | 5.78 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 100% of 300 | 0/0/0 | 5.86/6.17/6.56/6.81 | 6.90 "Midnight Night" (A6.56/C7.25; cheap-duds seed 88 #5, yr 1.5, critic gen 0) | 0 |
| experimenter | combo_B | all | 1500 | 6.27 | 6.31 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 30 (2.0%) | 100% of 300 | 0/0/0 | 6.8/7.46/7.97/8.47 | 8.49 "Last Pulse" (A8.4/C8.58; experimenter seed 77 #4, yr 1.2, critic gen 0) | 75 |
| self-funder | combo_B | all | 1500 | 5.84 | 5.90 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 100% of 300 | 0/0/0 | 6.06/6.39/6.76/7.12 | 7.26 "Broken Night" (A7.22/C7.29; self-funder seed 126 #5, yr 1.5, critic gen 0) | 0 |
| selective-self-funder | combo_B | all | 1500 | 6.46 | 6.46 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 50 (3.3%) | 100% of 300 | 0/0/0 | 7.05/7.62/8.08/8.39 | 8.57 "Wild Protocol" (A8.54/C8.61; selective-self-funder seed 181 #4, yr 1.2, critic gen 0) | 75 |
| famous-star | combo_B | all | 1500 | 5.80 | 5.90 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 100% of 300 | 0/0/0 | 6.02/6.31/6.66/6.96 | 7.22 "Dead Legacy" (A7.16/C7.27; famous-star seed 78 #5, yr 1.5, critic gen 0) | 0 |
| balanced | combo_C | all | 1500 | 6.47 | 6.50 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 41 (2.7%) | 100% of 300 | 0/0/0 | 7.11/7.62/8.05/8.41 | 8.70 "Midnight Protocol" (A8.64/C8.76; balanced seed 87 #5, yr 1.5, critic gen 0) | 75 |
| quality-first | combo_C | all | 1500 | 6.47 | 6.51 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 45 (3.0%) | 100% of 300 | 0/0/0 | 7.07/7.58/8.12/8.49 | 8.68 "Wild Protocol" (A8.64/C8.72; quality-first seed 181 #4, yr 1.2, critic gen 0) | 75 |
| franchise-builder | combo_C | all | 1500 | 6.46 | 6.47 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 27 (1.8%) | 100% of 300 | 0/0/0 | 7.14/7.57/7.96/8.4 | 8.55 "Wild Signal" (A8.46/C8.64; franchise-builder seed 300 #5, yr 1.5, critic gen 0) | 75 |
| repeat-farmer | combo_C | all | 1500 | 6.49 | 6.53 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 45 (3.0%) | 100% of 300 | 0/0/0 | 7.09/7.55/8.06/8.43 | 8.68 "Red Protocol 2" (A8.6/C8.76; repeat-farmer seed 233 #5, yr 1.5, critic gen 0) | 75 |
| cheap-duds | combo_C | all | 1500 | 5.60 | 5.78 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 100% of 300 | 0/0/0 | 5.86/6.17/6.56/6.81 | 6.90 "Midnight Night" (A6.56/C7.25; cheap-duds seed 88 #5, yr 1.5, critic gen 0) | 0 |
| experimenter | combo_C | all | 1500 | 6.27 | 6.31 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 30 (2.0%) | 100% of 300 | 0/0/0 | 6.8/7.46/7.97/8.47 | 8.49 "Last Pulse" (A8.4/C8.58; experimenter seed 77 #4, yr 1.2, critic gen 0) | 75 |
| self-funder | combo_C | all | 1500 | 5.84 | 5.90 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 100% of 300 | 0/0/0 | 6.06/6.39/6.76/7.12 | 7.26 "Broken Night" (A7.22/C7.29; self-funder seed 126 #5, yr 1.5, critic gen 0) | 0 |
| selective-self-funder | combo_C | all | 1500 | 6.46 | 6.46 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 50 (3.3%) | 100% of 300 | 0/0/0 | 7.05/7.62/8.08/8.39 | 8.57 "Wild Protocol" (A8.54/C8.61; selective-self-funder seed 181 #4, yr 1.2, critic gen 0) | 75 |
| famous-star | combo_C | all | 1500 | 5.80 | 5.90 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 100% of 300 | 0/0/0 | 6.02/6.31/6.66/6.96 | 7.22 "Dead Legacy" (A7.16/C7.27; famous-star seed 78 #5, yr 1.5, critic gen 0) | 0 |

### Greatest single films (all strategies, whole sample; reproducible from seed + config hash)

| Variant | Best combined | Best Audience | Best Critic | Year band with most HoF |
|---|---|---|---|---|
| control | 8.70 "Midnight Protocol" (A8.64/C8.76; balanced seed 87 #5, yr 1.5, critic gen 0) | 7.89 "Iron Night" (A8.82/C6.96; quality-first seed 258 #5, yr 1.5, critic gen 0) | 8.30 "Hollow Pulse" (A7.65/C8.95; selective-self-funder seed 72 #5, yr 1.5, critic gen 0) | y0-5: 0.0% of 13500 |
| ref_no_era_bar | 8.82 "Midnight Protocol" (A8.76/C8.88; balanced seed 87 #5, yr 1.5, critic gen 0) | 7.99 "Iron Night" (A8.94/C7.05; quality-first seed 258 #5, yr 1.5, critic gen 0) | 8.21 "Hollow Legacy 2" (A7.14/C9.28; repeat-farmer seed 75 #5, yr 1.5, critic gen 0) | y0-5: 0.0% of 13500 |
| ref_era_bar_0.08 | 8.58 "Midnight Protocol" (A8.52/C8.64; balanced seed 87 #5, yr 1.5, critic gen 0) | 8.41 "Wild Protocol" (A8.67/C8.14; quality-first seed 231 #5, yr 1.5, critic gen 0) | 8.19 "Hollow Pulse" (A7.54/C8.84; selective-self-funder seed 72 #5, yr 1.5, critic gen 0) | y0-5: 0.0% of 13500 |
| critic_mild | 8.70 "Midnight Protocol" (A8.64/C8.76; balanced seed 87 #5, yr 1.5, critic gen 0) | 7.89 "Iron Night" (A8.82/C6.96; quality-first seed 258 #5, yr 1.5, critic gen 0) | 8.30 "Hollow Pulse" (A7.65/C8.95; selective-self-funder seed 72 #5, yr 1.5, critic gen 0) | y0-5: 0.0% of 13500 |
| critic_moderate | 8.70 "Midnight Protocol" (A8.64/C8.76; balanced seed 87 #5, yr 1.5, critic gen 0) | 7.89 "Iron Night" (A8.82/C6.96; quality-first seed 258 #5, yr 1.5, critic gen 0) | 8.30 "Hollow Pulse" (A7.65/C8.95; selective-self-funder seed 72 #5, yr 1.5, critic gen 0) | y0-5: 0.0% of 13500 |
| critic_strong | 8.70 "Midnight Protocol" (A8.64/C8.76; balanced seed 87 #5, yr 1.5, critic gen 0) | 7.89 "Iron Night" (A8.82/C6.96; quality-first seed 258 #5, yr 1.5, critic gen 0) | 8.30 "Hollow Pulse" (A7.65/C8.95; selective-self-funder seed 72 #5, yr 1.5, critic gen 0) | y0-5: 0.0% of 13500 |
| critic_moderate_subtract | 8.70 "Midnight Protocol" (A8.64/C8.76; balanced seed 87 #5, yr 1.5, critic gen 0) | 7.89 "Iron Night" (A8.82/C6.96; quality-first seed 258 #5, yr 1.5, critic gen 0) | 8.30 "Hollow Pulse" (A7.65/C8.95; selective-self-funder seed 72 #5, yr 1.5, critic gen 0) | y0-5: 0.0% of 13500 |
| audience_mild | 8.70 "Midnight Protocol" (A8.64/C8.76; balanced seed 87 #5, yr 1.5, critic gen 0) | 7.89 "Iron Night" (A8.82/C6.96; quality-first seed 258 #5, yr 1.5, critic gen 0) | 8.30 "Hollow Pulse" (A7.65/C8.95; selective-self-funder seed 72 #5, yr 1.5, critic gen 0) | y0-5: 0.0% of 13500 |
| audience_moderate | 8.70 "Midnight Protocol" (A8.64/C8.76; balanced seed 87 #5, yr 1.5, critic gen 0) | 7.89 "Iron Night" (A8.82/C6.96; quality-first seed 258 #5, yr 1.5, critic gen 0) | 8.30 "Hollow Pulse" (A7.65/C8.95; selective-self-funder seed 72 #5, yr 1.5, critic gen 0) | y0-5: 0.0% of 13500 |
| audience_strong | 8.70 "Midnight Protocol" (A8.64/C8.76; balanced seed 87 #5, yr 1.5, critic gen 0) | 7.89 "Iron Night" (A8.82/C6.96; quality-first seed 258 #5, yr 1.5, critic gen 0) | 8.30 "Hollow Pulse" (A7.65/C8.95; selective-self-funder seed 72 #5, yr 1.5, critic gen 0) | y0-5: 0.0% of 13500 |
| combo_A | 8.70 "Midnight Protocol" (A8.64/C8.76; balanced seed 87 #5, yr 1.5, critic gen 0) | 7.89 "Iron Night" (A8.82/C6.96; quality-first seed 258 #5, yr 1.5, critic gen 0) | 8.30 "Hollow Pulse" (A7.65/C8.95; selective-self-funder seed 72 #5, yr 1.5, critic gen 0) | y0-5: 0.0% of 13500 |
| combo_B | 8.70 "Midnight Protocol" (A8.64/C8.76; balanced seed 87 #5, yr 1.5, critic gen 0) | 7.89 "Iron Night" (A8.82/C6.96; quality-first seed 258 #5, yr 1.5, critic gen 0) | 8.30 "Hollow Pulse" (A7.65/C8.95; selective-self-funder seed 72 #5, yr 1.5, critic gen 0) | y0-5: 0.0% of 13500 |
| combo_C | 8.70 "Midnight Protocol" (A8.64/C8.76; balanced seed 87 #5, yr 1.5, critic gen 0) | 7.89 "Iron Night" (A8.82/C6.96; quality-first seed 258 #5, yr 1.5, critic gen 0) | 8.30 "Hollow Pulse" (A7.65/C8.95; selective-self-funder seed 72 #5, yr 1.5, critic gen 0) | y0-5: 0.0% of 13500 |

### Great films by in-game year (all strategies pooled)

| Strategy | Config | Window | Films (n) | Avg Aud | Avg Crit | HoF n (%) | Avg ≥9 n (%) | Avg >9 n (%) | Aud ≥9 n (%) | Crit ≥9 n (%) | 8+ n (%) | Careers with 0 HoF | HoF/career p10/p50/p90 | Best/career p10/p50/p90/p99 | Best combined movie | Prestige median |
|---|---|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---|---|---|---:|
| ALL | control | y0-5 | 13500 | 6.21 | 6.26 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 238 (1.8%) | 100% of 2700 | 0/0/0 | 6.14/7.29/7.94/8.4 | 8.70 "Midnight Protocol" (A8.64/C8.76; balanced seed 87 #5, yr 1.5, critic gen 0) |  |
| ALL | ref_no_era_bar | y0-5 | 13500 | 6.29 | 6.34 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 7 (0.1%) | 399 (3.0%) | 100% of 2700 | 0/0/0 | 6.24/7.4/8.06/8.52 | 8.82 "Midnight Protocol" (A8.76/C8.88; balanced seed 87 #5, yr 1.5, critic gen 0) |  |
| ALL | ref_era_bar_0.08 | y0-5 | 13500 | 6.13 | 6.18 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 161 (1.2%) | 100% of 2700 | 0/0/0 | 6.05/7.19/7.84/8.29 | 8.58 "Midnight Protocol" (A8.52/C8.64; balanced seed 87 #5, yr 1.5, critic gen 0) |  |
| ALL | critic_mild | y0-5 | 13500 | 6.21 | 6.26 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 238 (1.8%) | 100% of 2700 | 0/0/0 | 6.14/7.29/7.94/8.4 | 8.70 "Midnight Protocol" (A8.64/C8.76; balanced seed 87 #5, yr 1.5, critic gen 0) |  |
| ALL | critic_moderate | y0-5 | 13500 | 6.21 | 6.26 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 238 (1.8%) | 100% of 2700 | 0/0/0 | 6.14/7.29/7.94/8.4 | 8.70 "Midnight Protocol" (A8.64/C8.76; balanced seed 87 #5, yr 1.5, critic gen 0) |  |
| ALL | critic_strong | y0-5 | 13500 | 6.21 | 6.26 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 238 (1.8%) | 100% of 2700 | 0/0/0 | 6.14/7.29/7.94/8.4 | 8.70 "Midnight Protocol" (A8.64/C8.76; balanced seed 87 #5, yr 1.5, critic gen 0) |  |
| ALL | critic_moderate_subtract | y0-5 | 13500 | 6.21 | 6.26 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 238 (1.8%) | 100% of 2700 | 0/0/0 | 6.14/7.29/7.94/8.4 | 8.70 "Midnight Protocol" (A8.64/C8.76; balanced seed 87 #5, yr 1.5, critic gen 0) |  |
| ALL | audience_mild | y0-5 | 13500 | 6.21 | 6.26 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 238 (1.8%) | 100% of 2700 | 0/0/0 | 6.14/7.29/7.94/8.4 | 8.70 "Midnight Protocol" (A8.64/C8.76; balanced seed 87 #5, yr 1.5, critic gen 0) |  |
| ALL | audience_moderate | y0-5 | 13500 | 6.21 | 6.26 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 238 (1.8%) | 100% of 2700 | 0/0/0 | 6.14/7.29/7.94/8.4 | 8.70 "Midnight Protocol" (A8.64/C8.76; balanced seed 87 #5, yr 1.5, critic gen 0) |  |
| ALL | audience_strong | y0-5 | 13500 | 6.21 | 6.26 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 238 (1.8%) | 100% of 2700 | 0/0/0 | 6.14/7.29/7.94/8.4 | 8.70 "Midnight Protocol" (A8.64/C8.76; balanced seed 87 #5, yr 1.5, critic gen 0) |  |
| ALL | combo_A | y0-5 | 13500 | 6.21 | 6.26 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 238 (1.8%) | 100% of 2700 | 0/0/0 | 6.14/7.29/7.94/8.4 | 8.70 "Midnight Protocol" (A8.64/C8.76; balanced seed 87 #5, yr 1.5, critic gen 0) |  |
| ALL | combo_B | y0-5 | 13500 | 6.21 | 6.26 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 238 (1.8%) | 100% of 2700 | 0/0/0 | 6.14/7.29/7.94/8.4 | 8.70 "Midnight Protocol" (A8.64/C8.76; balanced seed 87 #5, yr 1.5, critic gen 0) |  |
| ALL | combo_C | y0-5 | 13500 | 6.21 | 6.26 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 238 (1.8%) | 100% of 2700 | 0/0/0 | 6.14/7.29/7.94/8.4 | 8.70 "Midnight Protocol" (A8.64/C8.76; balanced seed 87 #5, yr 1.5, critic gen 0) |  |

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
| balanced | ref_no_era_bar | $0.88M | 125 | 68.3 | 71% | 23% · #5 | 1% · #4 | 100% | 0 | 0% · #— | 0% · #— | 1% | 0 |
| quality-first | ref_no_era_bar | $0.83M | 125 | 68.3 | 57% | 23% · #5 | 2% · #4 | 100% | 0 | 0% · #— | 0% · #— | 2% | 0 |
| franchise-builder | ref_no_era_bar | $0.89M | 125 | 68.3 | 71% | 38% · #5 | 1% · #4 | 100% | 0 | 0% · #— | 0% · #— | 1% | 0 |
| repeat-farmer | ref_no_era_bar | $0.81M | 125 | 68.3 | 63% | 31% · #5 | 2% · #4 | 100% | 0 | 0% · #— | 0% · #— | 1% | 0 |
| cheap-duds | ref_no_era_bar | $0.53M | 0 | 0 | 4% | 0% · #— | 0% · #— | 100% | 0 | 0% · #— | 0% · #— | 0% | 0 |
| experimenter | ref_no_era_bar | $0.68M | 75 | 41 | 56% | 7% · #5 | 0% · #— | 100% | 0 | 0% · #— | 0% · #— | 0% | 0 |
| self-funder | ref_no_era_bar | $0.30M | 0 | 0 | 100% | 0% · #— | 0% · #— | 85% | 0 | 0% · #— | 0% · #— | 0% | 0 |
| selective-self-funder | ref_no_era_bar | $0.86M | 125 | 68.3 | 67% | 21% · #5 | 2% · #4 | 100% | 0 | 0% · #— | 0% · #— | 2% | 0 |
| famous-star | ref_no_era_bar | $0.62M | 0 | 0 | 100% | 0% · #— | 0% · #— | 100% | 0 | 0% · #— | 0% · #— | 0% | 0 |
| balanced | ref_era_bar_0.08 | $0.85M | 75 | 41 | 71% | 6% · #5 | 0% · #— | 100% | 0 | 0% · #— | 0% · #— | 0% | 0 |
| quality-first | ref_era_bar_0.08 | $0.78M | 75 | 41 | 57% | 6% · #5 | 0% · #— | 100% | 0 | 0% · #— | 0% · #— | 0% | 0 |
| franchise-builder | ref_era_bar_0.08 | $0.85M | 75 | 41 | 71% | 25% · #5 | 0% · #— | 100% | 0 | 0% · #— | 0% · #— | 0% | 0 |
| repeat-farmer | ref_era_bar_0.08 | $0.76M | 25 | 13.7 | 63% | 13% · #5 | 0% · #— | 100% | 0 | 0% · #— | 0% · #— | 0% | 0 |
| cheap-duds | ref_era_bar_0.08 | $0.50M | 0 | 0 | 4% | 0% · #— | 0% · #— | 100% | 0 | 0% · #— | 0% · #— | 0% | 0 |
| experimenter | ref_era_bar_0.08 | $0.63M | 0 | 0 | 56% | 1% · #5 | 0% · #— | 100% | 0 | 0% · #— | 0% · #— | 0% | 0 |
| self-funder | ref_era_bar_0.08 | $0.27M | 0 | 0 | 100% | 0% · #— | 0% · #— | 73% | 0 | 0% · #— | 0% · #— | 0% | 0 |
| selective-self-funder | ref_era_bar_0.08 | $0.83M | 75 | 41 | 67% | 5% · #5 | 0% · #— | 100% | 0 | 0% · #— | 0% · #— | 0% | 0 |
| famous-star | ref_era_bar_0.08 | $0.57M | 0 | 0 | 100% | 0% · #— | 0% · #— | 100% | 0 | 0% · #— | 0% · #— | 0% | 0 |
| balanced | critic_mild | $0.87M | 75 | 41 | 71% | 11% · #5 | 0% · #— | 100% | 0 | 0% · #— | 0% · #— | 0% | 0 |
| quality-first | critic_mild | $0.80M | 75 | 41 | 57% | 13% · #5 | 1% · #4 | 100% | 0 | 0% · #— | 0% · #— | 1% | 0 |
| franchise-builder | critic_mild | $0.88M | 75 | 41 | 71% | 30% · #5 | 1% · #4 | 100% | 0 | 0% · #— | 0% · #— | 1% | 0 |
| repeat-farmer | critic_mild | $0.79M | 75 | 41 | 63% | 20% · #5 | 0% · #— | 100% | 0 | 0% · #— | 0% · #— | 0% | 0 |
| cheap-duds | critic_mild | $0.51M | 0 | 0 | 4% | 0% · #— | 0% · #— | 100% | 0 | 0% · #— | 0% · #— | 0% | 0 |
| experimenter | critic_mild | $0.66M | 75 | 41 | 56% | 3% · #5 | 0% · #— | 100% | 0 | 0% · #— | 0% · #— | 0% | 0 |
| self-funder | critic_mild | $0.28M | 0 | 0 | 100% | 0% · #— | 0% · #— | 78% | 0 | 0% · #— | 0% · #— | 0% | 0 |
| selective-self-funder | critic_mild | $0.85M | 75 | 41 | 67% | 10% · #5 | 0% · #4 | 100% | 0 | 0% · #— | 0% · #— | 0% | 0 |
| famous-star | critic_mild | $0.59M | 0 | 0 | 100% | 0% · #— | 0% · #— | 100% | 0 | 0% · #— | 0% · #— | 0% | 0 |
| balanced | critic_moderate | $0.87M | 75 | 41 | 71% | 11% · #5 | 0% · #— | 100% | 0 | 0% · #— | 0% · #— | 0% | 0 |
| quality-first | critic_moderate | $0.80M | 75 | 41 | 57% | 13% · #5 | 1% · #4 | 100% | 0 | 0% · #— | 0% · #— | 1% | 0 |
| franchise-builder | critic_moderate | $0.88M | 75 | 41 | 71% | 30% · #5 | 1% · #4 | 100% | 0 | 0% · #— | 0% · #— | 1% | 0 |
| repeat-farmer | critic_moderate | $0.79M | 75 | 41 | 63% | 20% · #5 | 0% · #— | 100% | 0 | 0% · #— | 0% · #— | 0% | 0 |
| cheap-duds | critic_moderate | $0.51M | 0 | 0 | 4% | 0% · #— | 0% · #— | 100% | 0 | 0% · #— | 0% · #— | 0% | 0 |
| experimenter | critic_moderate | $0.66M | 75 | 41 | 56% | 3% · #5 | 0% · #— | 100% | 0 | 0% · #— | 0% · #— | 0% | 0 |
| self-funder | critic_moderate | $0.28M | 0 | 0 | 100% | 0% · #— | 0% · #— | 78% | 0 | 0% · #— | 0% · #— | 0% | 0 |
| selective-self-funder | critic_moderate | $0.85M | 75 | 41 | 67% | 10% · #5 | 0% · #4 | 100% | 0 | 0% · #— | 0% · #— | 0% | 0 |
| famous-star | critic_moderate | $0.59M | 0 | 0 | 100% | 0% · #— | 0% · #— | 100% | 0 | 0% · #— | 0% · #— | 0% | 0 |
| balanced | critic_strong | $0.87M | 75 | 41 | 71% | 11% · #5 | 0% · #— | 100% | 0 | 0% · #— | 0% · #— | 0% | 0 |
| quality-first | critic_strong | $0.80M | 75 | 41 | 57% | 13% · #5 | 1% · #4 | 100% | 0 | 0% · #— | 0% · #— | 1% | 0 |
| franchise-builder | critic_strong | $0.88M | 75 | 41 | 71% | 30% · #5 | 1% · #4 | 100% | 0 | 0% · #— | 0% · #— | 1% | 0 |
| repeat-farmer | critic_strong | $0.79M | 75 | 41 | 63% | 20% · #5 | 0% · #— | 100% | 0 | 0% · #— | 0% · #— | 0% | 0 |
| cheap-duds | critic_strong | $0.51M | 0 | 0 | 4% | 0% · #— | 0% · #— | 100% | 0 | 0% · #— | 0% · #— | 0% | 0 |
| experimenter | critic_strong | $0.66M | 75 | 41 | 56% | 3% · #5 | 0% · #— | 100% | 0 | 0% · #— | 0% · #— | 0% | 0 |
| self-funder | critic_strong | $0.28M | 0 | 0 | 100% | 0% · #— | 0% · #— | 78% | 0 | 0% · #— | 0% · #— | 0% | 0 |
| selective-self-funder | critic_strong | $0.85M | 75 | 41 | 67% | 10% · #5 | 0% · #4 | 100% | 0 | 0% · #— | 0% · #— | 0% | 0 |
| famous-star | critic_strong | $0.59M | 0 | 0 | 100% | 0% · #— | 0% · #— | 100% | 0 | 0% · #— | 0% · #— | 0% | 0 |
| balanced | critic_moderate_subtract | $0.87M | 75 | 41 | 71% | 11% · #5 | 0% · #— | 100% | 0 | 0% · #— | 0% · #— | 0% | 0 |
| quality-first | critic_moderate_subtract | $0.80M | 75 | 41 | 57% | 13% · #5 | 1% · #4 | 100% | 0 | 0% · #— | 0% · #— | 1% | 0 |
| franchise-builder | critic_moderate_subtract | $0.88M | 75 | 41 | 71% | 30% · #5 | 1% · #4 | 100% | 0 | 0% · #— | 0% · #— | 1% | 0 |
| repeat-farmer | critic_moderate_subtract | $0.79M | 75 | 41 | 63% | 20% · #5 | 0% · #— | 100% | 0 | 0% · #— | 0% · #— | 0% | 0 |
| cheap-duds | critic_moderate_subtract | $0.51M | 0 | 0 | 4% | 0% · #— | 0% · #— | 100% | 0 | 0% · #— | 0% · #— | 0% | 0 |
| experimenter | critic_moderate_subtract | $0.66M | 75 | 41 | 56% | 3% · #5 | 0% · #— | 100% | 0 | 0% · #— | 0% · #— | 0% | 0 |
| self-funder | critic_moderate_subtract | $0.28M | 0 | 0 | 100% | 0% · #— | 0% · #— | 78% | 0 | 0% · #— | 0% · #— | 0% | 0 |
| selective-self-funder | critic_moderate_subtract | $0.85M | 75 | 41 | 67% | 10% · #5 | 0% · #4 | 100% | 0 | 0% · #— | 0% · #— | 0% | 0 |
| famous-star | critic_moderate_subtract | $0.59M | 0 | 0 | 100% | 0% · #— | 0% · #— | 100% | 0 | 0% · #— | 0% · #— | 0% | 0 |
| balanced | audience_mild | $0.87M | 75 | 41 | 71% | 11% · #5 | 0% · #— | 100% | 0 | 0% · #— | 0% · #— | 0% | 0 |
| quality-first | audience_mild | $0.80M | 75 | 41 | 57% | 13% · #5 | 1% · #4 | 100% | 0 | 0% · #— | 0% · #— | 1% | 0 |
| franchise-builder | audience_mild | $0.88M | 75 | 41 | 71% | 30% · #5 | 1% · #4 | 100% | 0 | 0% · #— | 0% · #— | 1% | 0 |
| repeat-farmer | audience_mild | $0.79M | 75 | 41 | 63% | 20% · #5 | 0% · #— | 100% | 0 | 0% · #— | 0% · #— | 0% | 0 |
| cheap-duds | audience_mild | $0.51M | 0 | 0 | 4% | 0% · #— | 0% · #— | 100% | 0 | 0% · #— | 0% · #— | 0% | 0 |
| experimenter | audience_mild | $0.66M | 75 | 41 | 56% | 3% · #5 | 0% · #— | 100% | 0 | 0% · #— | 0% · #— | 0% | 0 |
| self-funder | audience_mild | $0.28M | 0 | 0 | 100% | 0% · #— | 0% · #— | 78% | 0 | 0% · #— | 0% · #— | 0% | 0 |
| selective-self-funder | audience_mild | $0.85M | 75 | 41 | 67% | 10% · #5 | 0% · #4 | 100% | 0 | 0% · #— | 0% · #— | 0% | 0 |
| famous-star | audience_mild | $0.59M | 0 | 0 | 100% | 0% · #— | 0% · #— | 100% | 0 | 0% · #— | 0% · #— | 0% | 0 |
| balanced | audience_moderate | $0.87M | 75 | 41 | 71% | 11% · #5 | 0% · #— | 100% | 0 | 0% · #— | 0% · #— | 0% | 0 |
| quality-first | audience_moderate | $0.80M | 75 | 41 | 57% | 13% · #5 | 1% · #4 | 100% | 0 | 0% · #— | 0% · #— | 1% | 0 |
| franchise-builder | audience_moderate | $0.88M | 75 | 41 | 71% | 30% · #5 | 1% · #4 | 100% | 0 | 0% · #— | 0% · #— | 1% | 0 |
| repeat-farmer | audience_moderate | $0.79M | 75 | 41 | 63% | 20% · #5 | 0% · #— | 100% | 0 | 0% · #— | 0% · #— | 0% | 0 |
| cheap-duds | audience_moderate | $0.51M | 0 | 0 | 4% | 0% · #— | 0% · #— | 100% | 0 | 0% · #— | 0% · #— | 0% | 0 |
| experimenter | audience_moderate | $0.66M | 75 | 41 | 56% | 3% · #5 | 0% · #— | 100% | 0 | 0% · #— | 0% · #— | 0% | 0 |
| self-funder | audience_moderate | $0.28M | 0 | 0 | 100% | 0% · #— | 0% · #— | 78% | 0 | 0% · #— | 0% · #— | 0% | 0 |
| selective-self-funder | audience_moderate | $0.85M | 75 | 41 | 67% | 10% · #5 | 0% · #4 | 100% | 0 | 0% · #— | 0% · #— | 0% | 0 |
| famous-star | audience_moderate | $0.59M | 0 | 0 | 100% | 0% · #— | 0% · #— | 100% | 0 | 0% · #— | 0% · #— | 0% | 0 |
| balanced | audience_strong | $0.87M | 75 | 41 | 71% | 11% · #5 | 0% · #— | 100% | 0 | 0% · #— | 0% · #— | 0% | 0 |
| quality-first | audience_strong | $0.80M | 75 | 41 | 57% | 13% · #5 | 1% · #4 | 100% | 0 | 0% · #— | 0% · #— | 1% | 0 |
| franchise-builder | audience_strong | $0.88M | 75 | 41 | 71% | 30% · #5 | 1% · #4 | 100% | 0 | 0% · #— | 0% · #— | 1% | 0 |
| repeat-farmer | audience_strong | $0.79M | 75 | 41 | 63% | 20% · #5 | 0% · #— | 100% | 0 | 0% · #— | 0% · #— | 0% | 0 |
| cheap-duds | audience_strong | $0.51M | 0 | 0 | 4% | 0% · #— | 0% · #— | 100% | 0 | 0% · #— | 0% · #— | 0% | 0 |
| experimenter | audience_strong | $0.66M | 75 | 41 | 56% | 3% · #5 | 0% · #— | 100% | 0 | 0% · #— | 0% · #— | 0% | 0 |
| self-funder | audience_strong | $0.28M | 0 | 0 | 100% | 0% · #— | 0% · #— | 78% | 0 | 0% · #— | 0% · #— | 0% | 0 |
| selective-self-funder | audience_strong | $0.85M | 75 | 41 | 67% | 10% · #5 | 0% · #4 | 100% | 0 | 0% · #— | 0% · #— | 0% | 0 |
| famous-star | audience_strong | $0.59M | 0 | 0 | 100% | 0% · #— | 0% · #— | 100% | 0 | 0% · #— | 0% · #— | 0% | 0 |
| balanced | combo_A | $0.87M | 75 | 41 | 71% | 11% · #5 | 0% · #— | 100% | 0 | 0% · #— | 0% · #— | 0% | 0 |
| quality-first | combo_A | $0.80M | 75 | 41 | 57% | 13% · #5 | 1% · #4 | 100% | 0 | 0% · #— | 0% · #— | 1% | 0 |
| franchise-builder | combo_A | $0.88M | 75 | 41 | 71% | 30% · #5 | 1% · #4 | 100% | 0 | 0% · #— | 0% · #— | 1% | 0 |
| repeat-farmer | combo_A | $0.79M | 75 | 41 | 63% | 20% · #5 | 0% · #— | 100% | 0 | 0% · #— | 0% · #— | 0% | 0 |
| cheap-duds | combo_A | $0.51M | 0 | 0 | 4% | 0% · #— | 0% · #— | 100% | 0 | 0% · #— | 0% · #— | 0% | 0 |
| experimenter | combo_A | $0.66M | 75 | 41 | 56% | 3% · #5 | 0% · #— | 100% | 0 | 0% · #— | 0% · #— | 0% | 0 |
| self-funder | combo_A | $0.28M | 0 | 0 | 100% | 0% · #— | 0% · #— | 78% | 0 | 0% · #— | 0% · #— | 0% | 0 |
| selective-self-funder | combo_A | $0.85M | 75 | 41 | 67% | 10% · #5 | 0% · #4 | 100% | 0 | 0% · #— | 0% · #— | 0% | 0 |
| famous-star | combo_A | $0.59M | 0 | 0 | 100% | 0% · #— | 0% · #— | 100% | 0 | 0% · #— | 0% · #— | 0% | 0 |
| balanced | combo_B | $0.87M | 75 | 41 | 71% | 11% · #5 | 0% · #— | 100% | 0 | 0% · #— | 0% · #— | 0% | 0 |
| quality-first | combo_B | $0.80M | 75 | 41 | 57% | 13% · #5 | 1% · #4 | 100% | 0 | 0% · #— | 0% · #— | 1% | 0 |
| franchise-builder | combo_B | $0.88M | 75 | 41 | 71% | 30% · #5 | 1% · #4 | 100% | 0 | 0% · #— | 0% · #— | 1% | 0 |
| repeat-farmer | combo_B | $0.79M | 75 | 41 | 63% | 20% · #5 | 0% · #— | 100% | 0 | 0% · #— | 0% · #— | 0% | 0 |
| cheap-duds | combo_B | $0.51M | 0 | 0 | 4% | 0% · #— | 0% · #— | 100% | 0 | 0% · #— | 0% · #— | 0% | 0 |
| experimenter | combo_B | $0.66M | 75 | 41 | 56% | 3% · #5 | 0% · #— | 100% | 0 | 0% · #— | 0% · #— | 0% | 0 |
| self-funder | combo_B | $0.28M | 0 | 0 | 100% | 0% · #— | 0% · #— | 78% | 0 | 0% · #— | 0% · #— | 0% | 0 |
| selective-self-funder | combo_B | $0.85M | 75 | 41 | 67% | 10% · #5 | 0% · #4 | 100% | 0 | 0% · #— | 0% · #— | 0% | 0 |
| famous-star | combo_B | $0.59M | 0 | 0 | 100% | 0% · #— | 0% · #— | 100% | 0 | 0% · #— | 0% · #— | 0% | 0 |
| balanced | combo_C | $0.87M | 75 | 41 | 71% | 11% · #5 | 0% · #— | 100% | 0 | 0% · #— | 0% · #— | 0% | 0 |
| quality-first | combo_C | $0.80M | 75 | 41 | 57% | 13% · #5 | 1% · #4 | 100% | 0 | 0% · #— | 0% · #— | 1% | 0 |
| franchise-builder | combo_C | $0.88M | 75 | 41 | 71% | 30% · #5 | 1% · #4 | 100% | 0 | 0% · #— | 0% · #— | 1% | 0 |
| repeat-farmer | combo_C | $0.79M | 75 | 41 | 63% | 20% · #5 | 0% · #— | 100% | 0 | 0% · #— | 0% · #— | 0% | 0 |
| cheap-duds | combo_C | $0.51M | 0 | 0 | 4% | 0% · #— | 0% · #— | 100% | 0 | 0% · #— | 0% · #— | 0% | 0 |
| experimenter | combo_C | $0.66M | 75 | 41 | 56% | 3% · #5 | 0% · #— | 100% | 0 | 0% · #— | 0% · #— | 0% | 0 |
| self-funder | combo_C | $0.28M | 0 | 0 | 100% | 0% · #— | 0% · #— | 78% | 0 | 0% · #— | 0% · #— | 0% | 0 |
| selective-self-funder | combo_C | $0.85M | 75 | 41 | 67% | 10% · #5 | 0% · #4 | 100% | 0 | 0% · #— | 0% · #— | 0% | 0 |
| famous-star | combo_C | $0.59M | 0 | 0 | 100% | 0% · #— | 0% · #— | 100% | 0 | 0% · #— | 0% · #— | 0% | 0 |

### Prestige milestones awarded per career (mean)

| Strategy | Variant | audience_7_5 | critic_8_5 | ip_gross_1m | ip_viewers_500k | meters_all_70 | careers > 400 Prestige/yr (OUTDATED threshold) |
|---|---|---:|---:|---:|---:|---:|---:|
| balanced | control | 0.89 | 0.12 | 0.04 | 0.04 | 0.18 | 0% |
| balanced | ref_no_era_bar | 1.06 | 0.17 | 0.04 | 0.04 | 0.48 | 0% |
| balanced | ref_era_bar_0.08 | 0.74 | 0.08 | 0.03 | 0.03 | 0.03 | 0% |
| balanced | critic_mild | 0.89 | 0.12 | 0.04 | 0.04 | 0.18 | 0% |
| balanced | critic_moderate | 0.89 | 0.12 | 0.04 | 0.04 | 0.18 | 0% |
| balanced | critic_strong | 0.89 | 0.12 | 0.04 | 0.04 | 0.18 | 0% |
| balanced | critic_moderate_subtract | 0.89 | 0.12 | 0.04 | 0.04 | 0.18 | 0% |
| balanced | audience_mild | 0.89 | 0.12 | 0.04 | 0.04 | 0.18 | 0% |
| balanced | audience_moderate | 0.89 | 0.12 | 0.04 | 0.04 | 0.18 | 0% |
| balanced | audience_strong | 0.89 | 0.12 | 0.04 | 0.04 | 0.18 | 0% |
| balanced | combo_A | 0.89 | 0.12 | 0.04 | 0.04 | 0.18 | 0% |
| balanced | combo_B | 0.89 | 0.12 | 0.04 | 0.04 | 0.18 | 0% |
| balanced | combo_C | 0.89 | 0.12 | 0.04 | 0.04 | 0.18 | 0% |
| quality-first | control | 0.84 | 0.1 | 0 | 0 | 0.22 | 0% |
| quality-first | ref_no_era_bar | 1.03 | 0.14 | 0 | 0 | 0.55 | 0% |
| quality-first | ref_era_bar_0.08 | 0.68 | 0.07 | 0 | 0 | 0.05 | 0% |
| quality-first | critic_mild | 0.84 | 0.1 | 0 | 0 | 0.22 | 0% |
| quality-first | critic_moderate | 0.84 | 0.1 | 0 | 0 | 0.22 | 0% |
| quality-first | critic_strong | 0.84 | 0.1 | 0 | 0 | 0.22 | 0% |
| quality-first | critic_moderate_subtract | 0.84 | 0.1 | 0 | 0 | 0.22 | 0% |
| quality-first | audience_mild | 0.84 | 0.1 | 0 | 0 | 0.22 | 0% |
| quality-first | audience_moderate | 0.84 | 0.1 | 0 | 0 | 0.22 | 0% |
| quality-first | audience_strong | 0.84 | 0.1 | 0 | 0 | 0.22 | 0% |
| quality-first | combo_A | 0.84 | 0.1 | 0 | 0 | 0.22 | 0% |
| quality-first | combo_B | 0.84 | 0.1 | 0 | 0 | 0.22 | 0% |
| quality-first | combo_C | 0.84 | 0.1 | 0 | 0 | 0.22 | 0% |
| franchise-builder | control | 0.88 | 0.07 | 0.31 | 0.31 | 0.19 | 1% |
| franchise-builder | ref_no_era_bar | 1.03 | 0.1 | 0.35 | 0.35 | 0.51 | 2% |
| franchise-builder | ref_era_bar_0.08 | 0.75 | 0.04 | 0.27 | 0.27 | 0.05 | 1% |
| franchise-builder | critic_mild | 0.88 | 0.07 | 0.31 | 0.31 | 0.19 | 1% |
| franchise-builder | critic_moderate | 0.88 | 0.07 | 0.31 | 0.31 | 0.19 | 1% |
| franchise-builder | critic_strong | 0.88 | 0.07 | 0.31 | 0.31 | 0.19 | 1% |
| franchise-builder | critic_moderate_subtract | 0.88 | 0.07 | 0.31 | 0.31 | 0.19 | 1% |
| franchise-builder | audience_mild | 0.88 | 0.07 | 0.31 | 0.31 | 0.19 | 1% |
| franchise-builder | audience_moderate | 0.88 | 0.07 | 0.31 | 0.31 | 0.19 | 1% |
| franchise-builder | audience_strong | 0.88 | 0.07 | 0.31 | 0.31 | 0.19 | 1% |
| franchise-builder | combo_A | 0.88 | 0.07 | 0.31 | 0.31 | 0.19 | 1% |
| franchise-builder | combo_B | 0.88 | 0.07 | 0.31 | 0.31 | 0.19 | 1% |
| franchise-builder | combo_C | 0.88 | 0.07 | 0.31 | 0.31 | 0.19 | 1% |
| repeat-farmer | control | 0.83 | 0.11 | 0.17 | 0.17 | 0.19 | 0% |
| repeat-farmer | ref_no_era_bar | 1.04 | 0.15 | 0.22 | 0.22 | 0.56 | 0% |
| repeat-farmer | ref_era_bar_0.08 | 0.66 | 0.06 | 0.1 | 0.1 | 0.06 | 0% |
| repeat-farmer | critic_mild | 0.83 | 0.11 | 0.17 | 0.17 | 0.19 | 0% |
| repeat-farmer | critic_moderate | 0.83 | 0.11 | 0.17 | 0.17 | 0.19 | 0% |
| repeat-farmer | critic_strong | 0.83 | 0.11 | 0.17 | 0.17 | 0.19 | 0% |
| repeat-farmer | critic_moderate_subtract | 0.83 | 0.11 | 0.17 | 0.17 | 0.19 | 0% |
| repeat-farmer | audience_mild | 0.83 | 0.11 | 0.17 | 0.17 | 0.19 | 0% |
| repeat-farmer | audience_moderate | 0.83 | 0.11 | 0.17 | 0.17 | 0.19 | 0% |
| repeat-farmer | audience_strong | 0.83 | 0.11 | 0.17 | 0.17 | 0.19 | 0% |
| repeat-farmer | combo_A | 0.83 | 0.11 | 0.17 | 0.17 | 0.19 | 0% |
| repeat-farmer | combo_B | 0.83 | 0.11 | 0.17 | 0.17 | 0.19 | 0% |
| repeat-farmer | combo_C | 0.83 | 0.11 | 0.17 | 0.17 | 0.19 | 0% |
| cheap-duds | control | 0 | 0 | 0 | 0 | 0 | 0% |
| cheap-duds | ref_no_era_bar | 0 | 0 | 0 | 0 | 0 | 0% |
| cheap-duds | ref_era_bar_0.08 | 0 | 0 | 0 | 0 | 0 | 0% |
| cheap-duds | critic_mild | 0 | 0 | 0 | 0 | 0 | 0% |
| cheap-duds | critic_moderate | 0 | 0 | 0 | 0 | 0 | 0% |
| cheap-duds | critic_strong | 0 | 0 | 0 | 0 | 0 | 0% |
| cheap-duds | critic_moderate_subtract | 0 | 0 | 0 | 0 | 0 | 0% |
| cheap-duds | audience_mild | 0 | 0 | 0 | 0 | 0 | 0% |
| cheap-duds | audience_moderate | 0 | 0 | 0 | 0 | 0 | 0% |
| cheap-duds | audience_strong | 0 | 0 | 0 | 0 | 0 | 0% |
| cheap-duds | combo_A | 0 | 0 | 0 | 0 | 0 | 0% |
| cheap-duds | combo_B | 0 | 0 | 0 | 0 | 0 | 0% |
| cheap-duds | combo_C | 0 | 0 | 0 | 0 | 0 | 0% |
| experimenter | control | 0.63 | 0.11 | 0 | 0 | 0.01 | 0% |
| experimenter | ref_no_era_bar | 0.75 | 0.16 | 0 | 0 | 0.11 | 0% |
| experimenter | ref_era_bar_0.08 | 0.53 | 0.03 | 0 | 0 | 0 | 0% |
| experimenter | critic_mild | 0.63 | 0.11 | 0 | 0 | 0.01 | 0% |
| experimenter | critic_moderate | 0.63 | 0.11 | 0 | 0 | 0.01 | 0% |
| experimenter | critic_strong | 0.63 | 0.11 | 0 | 0 | 0.01 | 0% |
| experimenter | critic_moderate_subtract | 0.63 | 0.11 | 0 | 0 | 0.01 | 0% |
| experimenter | audience_mild | 0.63 | 0.11 | 0 | 0 | 0.01 | 0% |
| experimenter | audience_moderate | 0.63 | 0.11 | 0 | 0 | 0.01 | 0% |
| experimenter | audience_strong | 0.63 | 0.11 | 0 | 0 | 0.01 | 0% |
| experimenter | combo_A | 0.63 | 0.11 | 0 | 0 | 0.01 | 0% |
| experimenter | combo_B | 0.63 | 0.11 | 0 | 0 | 0.01 | 0% |
| experimenter | combo_C | 0.63 | 0.11 | 0 | 0 | 0.01 | 0% |
| self-funder | control | 0 | 0 | 0 | 0 | 0 | 0% |
| self-funder | ref_no_era_bar | 0 | 0 | 0 | 0 | 0 | 0% |
| self-funder | ref_era_bar_0.08 | 0 | 0 | 0 | 0 | 0 | 0% |
| self-funder | critic_mild | 0 | 0 | 0 | 0 | 0 | 0% |
| self-funder | critic_moderate | 0 | 0 | 0 | 0 | 0 | 0% |
| self-funder | critic_strong | 0 | 0 | 0 | 0 | 0 | 0% |
| self-funder | critic_moderate_subtract | 0 | 0 | 0 | 0 | 0 | 0% |
| self-funder | audience_mild | 0 | 0 | 0 | 0 | 0 | 0% |
| self-funder | audience_moderate | 0 | 0 | 0 | 0 | 0 | 0% |
| self-funder | audience_strong | 0 | 0 | 0 | 0 | 0 | 0% |
| self-funder | combo_A | 0 | 0 | 0 | 0 | 0 | 0% |
| self-funder | combo_B | 0 | 0 | 0 | 0 | 0 | 0% |
| self-funder | combo_C | 0 | 0 | 0 | 0 | 0 | 0% |
| selective-self-funder | control | 0.88 | 0.1 | 0.03 | 0.03 | 0.16 | 0% |
| selective-self-funder | ref_no_era_bar | 1.09 | 0.16 | 0.04 | 0.04 | 0.46 | 0% |
| selective-self-funder | ref_era_bar_0.08 | 0.71 | 0.06 | 0.03 | 0.03 | 0.04 | 0% |
| selective-self-funder | critic_mild | 0.88 | 0.1 | 0.03 | 0.03 | 0.16 | 0% |
| selective-self-funder | critic_moderate | 0.88 | 0.1 | 0.03 | 0.03 | 0.16 | 0% |
| selective-self-funder | critic_strong | 0.88 | 0.1 | 0.03 | 0.03 | 0.16 | 0% |
| selective-self-funder | critic_moderate_subtract | 0.88 | 0.1 | 0.03 | 0.03 | 0.16 | 0% |
| selective-self-funder | audience_mild | 0.88 | 0.1 | 0.03 | 0.03 | 0.16 | 0% |
| selective-self-funder | audience_moderate | 0.88 | 0.1 | 0.03 | 0.03 | 0.16 | 0% |
| selective-self-funder | audience_strong | 0.88 | 0.1 | 0.03 | 0.03 | 0.16 | 0% |
| selective-self-funder | combo_A | 0.88 | 0.1 | 0.03 | 0.03 | 0.16 | 0% |
| selective-self-funder | combo_B | 0.88 | 0.1 | 0.03 | 0.03 | 0.16 | 0% |
| selective-self-funder | combo_C | 0.88 | 0.1 | 0.03 | 0.03 | 0.16 | 0% |
| famous-star | control | 0 | 0 | 0 | 0 | 0 | 0% |
| famous-star | ref_no_era_bar | 0 | 0 | 0 | 0 | 0 | 0% |
| famous-star | ref_era_bar_0.08 | 0 | 0 | 0 | 0 | 0 | 0% |
| famous-star | critic_mild | 0 | 0 | 0 | 0 | 0 | 0% |
| famous-star | critic_moderate | 0 | 0 | 0 | 0 | 0 | 0% |
| famous-star | critic_strong | 0 | 0 | 0 | 0 | 0 | 0% |
| famous-star | critic_moderate_subtract | 0 | 0 | 0 | 0 | 0 | 0% |
| famous-star | audience_mild | 0 | 0 | 0 | 0 | 0 | 0% |
| famous-star | audience_moderate | 0 | 0 | 0 | 0 | 0 | 0% |
| famous-star | audience_strong | 0 | 0 | 0 | 0 | 0 | 0% |
| famous-star | combo_A | 0 | 0 | 0 | 0 | 0 | 0% |
| famous-star | combo_B | 0 | 0 | 0 | 0 | 0 | 0% |
| famous-star | combo_C | 0 | 0 | 0 | 0 | 0 | 0% |

### Diagnostic flags fired

| Variant | Fired |
|---|---|
| control | EARLY_SOFTLOCK |
| ref_no_era_bar | EARLY_SOFTLOCK |
| ref_era_bar_0.08 | EARLY_SOFTLOCK |
| critic_mild | EARLY_SOFTLOCK |
| critic_moderate | EARLY_SOFTLOCK |
| critic_strong | EARLY_SOFTLOCK |
| critic_moderate_subtract | EARLY_SOFTLOCK |
| audience_mild | EARLY_SOFTLOCK |
| audience_moderate | EARLY_SOFTLOCK |
| audience_strong | EARLY_SOFTLOCK |
| combo_A | EARLY_SOFTLOCK |
| combo_B | EARLY_SOFTLOCK |
| combo_C | EARLY_SOFTLOCK |
