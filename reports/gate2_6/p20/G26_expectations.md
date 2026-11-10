# Experiment: G26_expectations

> **Simulation assumptions, not design locks.** Paired seeds: every variant runs the same seeds and strategies; only the config overrides differ.

Gate 2.6 critic generations + audience eras. Base = config/candidate.json (ladder 4-6-8, diffusion legs, hybrid Prestige) held constant. All expectation numbers are TEST ASSUMPTIONS.

- Seeds 1–300 (300) · strategies: balanced, quality-first, franchise-builder, repeat-farmer, cheap-duds, experimenter, self-funder, selective-self-funder, famous-star · reference variant: **control**
- Ruleset v9.61-movie-kernel-0.1 · measured runtime 230878 ms for 35100 careers

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

## 20-production careers

Invariant violations across all variants: **0**.

### Medians by strategy

| Strategy | Variant | endCash | prestige | prestigePerRelease | meanAudience | meanCritic | share8plus | share9plus | shareLate8plus | hofShare | maxStaffEnd | staffCount | meanStaffStat | upgrades | firstUpgradeWeek | years | maxIpFans | negativeCashWeeks |
|---|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|
| balanced | control | $3743K | 3425 | 171.25 | 7.95 | 7.88 | 55% | 10% | 88% | 10% | 8 | 8 | 58.70 | 2 | 112 | 6.44 | 65882 | 2 |
| balanced | ref_no_era_bar | $3784K | 3955 | 197.80 | 8.11 | 8.06 | 60% | 20% | 100% | 20% | 8 | 8 | 59.25 | 2 | 96 | 6.44 | 69186 | 2 |
| balanced | ref_era_bar_0.08 | $3734K | 3055 | 152.75 | 7.81 | 7.75 | 50% | 5% | 88% | 5% | 8 | 8 | 58.10 | 2 | 112 | 6.44 | 62306.50 | 2 |
| balanced | critic_mild | $3743K | 3425 | 171.25 | 7.95 | 7.88 | 55% | 10% | 88% | 10% | 8 | 8 | 58.70 | 2 | 112 | 6.44 | 65882 | 2 |
| balanced | critic_moderate | $3743K | 3377.50 | 168.90 | 7.95 | 7.86 | 55% | 10% | 88% | 10% | 8 | 8 | 58.70 | 2 | 112 | 6.44 | 65663 | 2 |
| balanced | critic_strong | $3740K | 3255 | 162.75 | 7.95 | 7.80 | 55% | 10% | 88% | 10% | 8 | 8 | 58.70 | 2 | 112 | 6.44 | 64692 | 2 |
| balanced | critic_moderate_subtract | $3743K | 3375 | 168.80 | 7.95 | 7.86 | 55% | 10% | 88% | 10% | 8 | 8 | 58.70 | 2 | 112 | 6.44 | 65663 | 2 |
| balanced | audience_mild | $3743K | 3425 | 171.25 | 7.95 | 7.88 | 55% | 10% | 88% | 10% | 8 | 8 | 58.70 | 2 | 112 | 6.44 | 65882 | 2 |
| balanced | audience_moderate | $3743K | 3425 | 171.25 | 7.95 | 7.88 | 55% | 10% | 88% | 10% | 8 | 8 | 58.70 | 2 | 112 | 6.44 | 65882 | 2 |
| balanced | audience_strong | $3743K | 3425 | 171.25 | 7.95 | 7.88 | 55% | 10% | 88% | 10% | 8 | 8 | 58.70 | 2 | 112 | 6.44 | 65882 | 2 |
| balanced | combo_A | $3743K | 3425 | 171.25 | 7.95 | 7.88 | 55% | 10% | 88% | 10% | 8 | 8 | 58.70 | 2 | 112 | 6.44 | 65882 | 2 |
| balanced | combo_B | $3743K | 3377.50 | 168.90 | 7.95 | 7.86 | 55% | 10% | 88% | 10% | 8 | 8 | 58.70 | 2 | 112 | 6.44 | 65663 | 2 |
| balanced | combo_C | $3740K | 3255 | 162.75 | 7.95 | 7.80 | 55% | 10% | 88% | 10% | 8 | 8 | 58.70 | 2 | 112 | 6.44 | 64692 | 2 |
| quality-first | control | $3789K | 2855 | 142.80 | 7.91 | 7.83 | 55% | 10% | 88% | 10% | 8 | 8 | 58.20 | 2 | 112 | 6.44 | 25275 | 1 |
| quality-first | ref_no_era_bar | $3852K | 3242.50 | 162.15 | 8.05 | 7.97 | 60% | 15% | 88% | 15% | 8 | 8 | 58.80 | 2 | 96 | 6.44 | 26120 | 1 |
| quality-first | ref_era_bar_0.08 | $3775K | 2460 | 123.05 | 7.74 | 7.67 | 45% | 5% | 75% | 5% | 8 | 8 | 57.30 | 2 | 128 | 6.44 | 24046.50 | 1 |
| quality-first | critic_mild | $3789K | 2855 | 142.80 | 7.91 | 7.83 | 55% | 10% | 88% | 10% | 8 | 8 | 58.20 | 2 | 112 | 6.44 | 25275 | 1 |
| quality-first | critic_moderate | $3789K | 2827.50 | 141.40 | 7.91 | 7.82 | 55% | 10% | 88% | 10% | 8 | 8 | 58.20 | 2 | 112 | 6.44 | 24935.50 | 1 |
| quality-first | critic_strong | $3789K | 2715 | 135.80 | 7.91 | 7.75 | 55% | 10% | 88% | 10% | 8 | 8 | 58.20 | 2 | 112 | 6.44 | 24166 | 1 |
| quality-first | critic_moderate_subtract | $3789K | 2827.50 | 141.40 | 7.91 | 7.81 | 55% | 10% | 88% | 10% | 8 | 8 | 58.20 | 2 | 112 | 6.44 | 24934 | 1 |
| quality-first | audience_mild | $3789K | 2855 | 142.80 | 7.91 | 7.83 | 55% | 10% | 88% | 10% | 8 | 8 | 58.20 | 2 | 112 | 6.44 | 25275 | 1 |
| quality-first | audience_moderate | $3789K | 2855 | 142.80 | 7.91 | 7.83 | 55% | 10% | 88% | 10% | 8 | 8 | 58.20 | 2 | 112 | 6.44 | 25275 | 1 |
| quality-first | audience_strong | $3789K | 2855 | 142.80 | 7.91 | 7.83 | 55% | 10% | 88% | 10% | 8 | 8 | 58.20 | 2 | 112 | 6.44 | 25275 | 1 |
| quality-first | combo_A | $3789K | 2855 | 142.80 | 7.91 | 7.83 | 55% | 10% | 88% | 10% | 8 | 8 | 58.20 | 2 | 112 | 6.44 | 25275 | 1 |
| quality-first | combo_B | $3789K | 2827.50 | 141.40 | 7.91 | 7.82 | 55% | 10% | 88% | 10% | 8 | 8 | 58.20 | 2 | 112 | 6.44 | 24935.50 | 1 |
| quality-first | combo_C | $3789K | 2715 | 135.80 | 7.91 | 7.75 | 55% | 10% | 88% | 10% | 8 | 8 | 58.20 | 2 | 112 | 6.44 | 24166 | 1 |
| franchise-builder | control | $3375K | 2225 | 111.30 | 7.31 | 7.22 | 5% | 0% | 0% | 0% | 8 | 8 | 59 | 2 | 112 | 6.44 | 94631 | 2 |
| franchise-builder | ref_no_era_bar | $3491K | 2372.50 | 118.65 | 7.44 | 7.34 | 15% | 0% | 0% | 0% | 8 | 8 | 59.50 | 2 | 96 | 6.44 | 101073 | 2 |
| franchise-builder | ref_era_bar_0.08 | $3387K | 2100 | 105 | 7.19 | 7.09 | 0% | 0% | 0% | 0% | 8 | 8 | 58.60 | 2 | 112 | 6.44 | 89159 | 2 |
| franchise-builder | critic_mild | $3375K | 2225 | 111.30 | 7.31 | 7.22 | 5% | 0% | 0% | 0% | 8 | 8 | 59 | 2 | 112 | 6.44 | 94631 | 2 |
| franchise-builder | critic_moderate | $3375K | 2225 | 111.30 | 7.31 | 7.21 | 5% | 0% | 0% | 0% | 8 | 8 | 59 | 2 | 112 | 6.44 | 94251.50 | 2 |
| franchise-builder | critic_strong | $3374K | 2225 | 111.30 | 7.31 | 7.15 | 5% | 0% | 0% | 0% | 8 | 8 | 59 | 2 | 112 | 6.44 | 92850 | 2 |
| franchise-builder | critic_moderate_subtract | $3375K | 2225 | 111.30 | 7.31 | 7.21 | 5% | 0% | 0% | 0% | 8 | 8 | 59 | 2 | 112 | 6.44 | 94124.50 | 2 |
| franchise-builder | audience_mild | $3375K | 2225 | 111.30 | 7.31 | 7.22 | 5% | 0% | 0% | 0% | 8 | 8 | 59 | 2 | 112 | 6.44 | 94631 | 2 |
| franchise-builder | audience_moderate | $3375K | 2225 | 111.30 | 7.31 | 7.22 | 5% | 0% | 0% | 0% | 8 | 8 | 59 | 2 | 112 | 6.44 | 94631 | 2 |
| franchise-builder | audience_strong | $3375K | 2225 | 111.30 | 7.31 | 7.22 | 5% | 0% | 0% | 0% | 8 | 8 | 59 | 2 | 112 | 6.44 | 94631 | 2 |
| franchise-builder | combo_A | $3375K | 2225 | 111.30 | 7.31 | 7.22 | 5% | 0% | 0% | 0% | 8 | 8 | 59 | 2 | 112 | 6.44 | 94631 | 2 |
| franchise-builder | combo_B | $3375K | 2225 | 111.30 | 7.31 | 7.21 | 5% | 0% | 0% | 0% | 8 | 8 | 59 | 2 | 112 | 6.44 | 94251.50 | 2 |
| franchise-builder | combo_C | $3374K | 2225 | 111.30 | 7.31 | 7.15 | 5% | 0% | 0% | 0% | 8 | 8 | 59 | 2 | 112 | 6.44 | 92850 | 2 |
| repeat-farmer | control | $3819K | 1750 | 87.50 | 7.04 | 7.04 | 5% | 0% | 0% | 0% | 8 | 8 | 58.40 | 2 | 112 | 6.44 | 133885 | 2 |
| repeat-farmer | ref_no_era_bar | $3973K | 1847.50 | 92.40 | 7.14 | 7.13 | 5% | 0% | 0% | 0% | 8 | 8 | 59 | 2 | 96 | 6.44 | 145409.50 | 2 |
| repeat-farmer | ref_era_bar_0.08 | $3602K | 1600 | 80 | 6.99 | 6.98 | 0% | 0% | 0% | 0% | 8 | 8 | 58 | 2 | 112 | 6.44 | 121419 | 2 |
| repeat-farmer | critic_mild | $3819K | 1750 | 87.50 | 7.04 | 7.04 | 5% | 0% | 0% | 0% | 8 | 8 | 58.40 | 2 | 112 | 6.44 | 133885 | 2 |
| repeat-farmer | critic_moderate | $3817K | 1750 | 87.50 | 7.04 | 7.03 | 5% | 0% | 0% | 0% | 8 | 8 | 58.40 | 2 | 112 | 6.44 | 133176 | 2 |
| repeat-farmer | critic_strong | $3803K | 1750 | 87.50 | 7.04 | 6.97 | 5% | 0% | 0% | 0% | 8 | 8 | 58.40 | 2 | 112 | 6.44 | 130627.50 | 2 |
| repeat-farmer | critic_moderate_subtract | $3816K | 1750 | 87.50 | 7.04 | 7.02 | 5% | 0% | 0% | 0% | 8 | 8 | 58.40 | 2 | 112 | 6.44 | 132849 | 2 |
| repeat-farmer | audience_mild | $3819K | 1750 | 87.50 | 7.04 | 7.04 | 5% | 0% | 0% | 0% | 8 | 8 | 58.40 | 2 | 112 | 6.44 | 133885 | 2 |
| repeat-farmer | audience_moderate | $3819K | 1750 | 87.50 | 7.04 | 7.04 | 5% | 0% | 0% | 0% | 8 | 8 | 58.40 | 2 | 112 | 6.44 | 133885 | 2 |
| repeat-farmer | audience_strong | $3819K | 1750 | 87.50 | 7.04 | 7.04 | 5% | 0% | 0% | 0% | 8 | 8 | 58.40 | 2 | 112 | 6.44 | 133885 | 2 |
| repeat-farmer | combo_A | $3819K | 1750 | 87.50 | 7.04 | 7.04 | 5% | 0% | 0% | 0% | 8 | 8 | 58.40 | 2 | 112 | 6.44 | 133885 | 2 |
| repeat-farmer | combo_B | $3817K | 1750 | 87.50 | 7.04 | 7.03 | 5% | 0% | 0% | 0% | 8 | 8 | 58.40 | 2 | 112 | 6.44 | 133176 | 2 |
| repeat-farmer | combo_C | $3803K | 1750 | 87.50 | 7.04 | 6.97 | 5% | 0% | 0% | 0% | 8 | 8 | 58.40 | 2 | 112 | 6.44 | 130627.50 | 2 |
| cheap-duds | control | $2420K | 0 | 0 | 6.00 | 6.18 | 0% | 0% | 0% | 0% | 4 | 2 | 57 | 0 | — | 6.44 | 4849 | 0 |
| cheap-duds | ref_no_era_bar | $2808K | 75 | 3.80 | 6.27 | 6.41 | 0% | 0% | 0% | 0% | 4 | 2 | 57 | 0 | — | 6.44 | 7387.50 | 0 |
| cheap-duds | ref_era_bar_0.08 | $2122K | 0 | 0 | 5.80 | 5.95 | 0% | 0% | 0% | 0% | 4 | 2 | 57 | 0 | — | 6.42 | 3283.50 | 0 |
| cheap-duds | critic_mild | $2420K | 0 | 0 | 6.00 | 6.18 | 0% | 0% | 0% | 0% | 4 | 2 | 57 | 0 | — | 6.44 | 4849 | 0 |
| cheap-duds | critic_moderate | $2416K | 0 | 0 | 6.00 | 6.16 | 0% | 0% | 0% | 0% | 4 | 2 | 57 | 0 | — | 6.44 | 4789.50 | 0 |
| cheap-duds | critic_strong | $2401K | 0 | 0 | 6.00 | 6.12 | 0% | 0% | 0% | 0% | 4 | 2 | 57 | 0 | — | 6.44 | 4550.50 | 0 |
| cheap-duds | critic_moderate_subtract | $2415K | 0 | 0 | 6.00 | 6.16 | 0% | 0% | 0% | 0% | 4 | 2 | 57 | 0 | — | 6.44 | 4725 | 0 |
| cheap-duds | audience_mild | $2420K | 0 | 0 | 6.00 | 6.18 | 0% | 0% | 0% | 0% | 4 | 2 | 57 | 0 | — | 6.44 | 4849 | 0 |
| cheap-duds | audience_moderate | $2420K | 0 | 0 | 6.00 | 6.18 | 0% | 0% | 0% | 0% | 4 | 2 | 57 | 0 | — | 6.44 | 4849 | 0 |
| cheap-duds | audience_strong | $2420K | 0 | 0 | 6.00 | 6.18 | 0% | 0% | 0% | 0% | 4 | 2 | 57 | 0 | — | 6.44 | 4849 | 0 |
| cheap-duds | combo_A | $2420K | 0 | 0 | 6.00 | 6.18 | 0% | 0% | 0% | 0% | 4 | 2 | 57 | 0 | — | 6.44 | 4849 | 0 |
| cheap-duds | combo_B | $2416K | 0 | 0 | 6.00 | 6.16 | 0% | 0% | 0% | 0% | 4 | 2 | 57 | 0 | — | 6.44 | 4789.50 | 0 |
| cheap-duds | combo_C | $2401K | 0 | 0 | 6.00 | 6.12 | 0% | 0% | 0% | 0% | 4 | 2 | 57 | 0 | — | 6.44 | 4550.50 | 0 |
| experimenter | control | $3640K | 2435 | 121.80 | 7.67 | 7.65 | 45% | 10% | 75% | 10% | 8 | 8 | 47.90 | 2 | 128 | 6.44 | 24911 | 1 |
| experimenter | ref_no_era_bar | $3731K | 3110 | 155.50 | 7.90 | 7.86 | 55% | 20% | 88% | 20% | 8 | 8 | 49 | 2 | 112 | 6.44 | 26304.50 | 1 |
| experimenter | ref_era_bar_0.08 | $3605K | 1995 | 99.75 | 7.44 | 7.44 | 35% | 5% | 63% | 5% | 8 | 8 | 46.95 | 2 | 160 | 6.44 | 23187.50 | 1 |
| experimenter | critic_mild | $3640K | 2435 | 121.80 | 7.67 | 7.65 | 45% | 10% | 75% | 10% | 8 | 8 | 47.90 | 2 | 128 | 6.44 | 24911 | 1 |
| experimenter | critic_moderate | $3640K | 2377.50 | 118.90 | 7.67 | 7.64 | 45% | 10% | 75% | 10% | 8 | 8 | 47.90 | 2 | 128 | 6.44 | 24558 | 1 |
| experimenter | critic_strong | $3639K | 2215 | 110.80 | 7.67 | 7.57 | 45% | 5% | 75% | 5% | 8 | 8 | 47.90 | 2 | 128 | 6.44 | 23847.50 | 1 |
| experimenter | critic_moderate_subtract | $3640K | 2367.50 | 118.40 | 7.67 | 7.63 | 45% | 10% | 75% | 10% | 8 | 8 | 47.90 | 2 | 128 | 6.44 | 24564.50 | 1 |
| experimenter | audience_mild | $3640K | 2435 | 121.80 | 7.67 | 7.65 | 45% | 10% | 75% | 10% | 8 | 8 | 47.90 | 2 | 128 | 6.44 | 24911 | 1 |
| experimenter | audience_moderate | $3640K | 2435 | 121.80 | 7.67 | 7.65 | 45% | 10% | 75% | 10% | 8 | 8 | 47.90 | 2 | 128 | 6.44 | 24911 | 1 |
| experimenter | audience_strong | $3640K | 2435 | 121.80 | 7.67 | 7.65 | 45% | 10% | 75% | 10% | 8 | 8 | 47.90 | 2 | 128 | 6.44 | 24911 | 1 |
| experimenter | combo_A | $3640K | 2435 | 121.80 | 7.67 | 7.65 | 45% | 10% | 75% | 10% | 8 | 8 | 47.90 | 2 | 128 | 6.44 | 24911 | 1 |
| experimenter | combo_B | $3640K | 2377.50 | 118.90 | 7.67 | 7.64 | 45% | 10% | 75% | 10% | 8 | 8 | 47.90 | 2 | 128 | 6.44 | 24558 | 1 |
| experimenter | combo_C | $3639K | 2215 | 110.80 | 7.67 | 7.57 | 45% | 5% | 75% | 5% | 8 | 8 | 47.90 | 2 | 128 | 6.44 | 23847.50 | 1 |
| self-funder | control | $319K | 310 | 15.50 | 6.71 | 6.70 | 0% | 0% | 0% | 0% | 4 | 2 | 80.75 | 0 | — | 6.44 | 3960.50 | 12 |
| self-funder | ref_no_era_bar | $333K | 850 | 42.50 | 6.97 | 6.95 | 10% | 0% | 25% | 0% | 4 | 2 | 83.80 | 0 | — | 6.44 | 4540.50 | 12 |
| self-funder | ref_era_bar_0.08 | $304K | 75 | 3.80 | 6.43 | 6.47 | 0% | 0% | 0% | 0% | 4 | 2 | 76.10 | 0 | — | 6.44 | 3461 | 12 |
| self-funder | critic_mild | $319K | 310 | 15.50 | 6.71 | 6.70 | 0% | 0% | 0% | 0% | 4 | 2 | 80.75 | 0 | — | 6.44 | 3960.50 | 12 |
| self-funder | critic_moderate | $319K | 310 | 15.50 | 6.71 | 6.68 | 0% | 0% | 0% | 0% | 4 | 2 | 80.75 | 0 | — | 6.44 | 3885 | 12 |
| self-funder | critic_strong | $318K | 300 | 15 | 6.71 | 6.62 | 0% | 0% | 0% | 0% | 4 | 2 | 80.75 | 0 | — | 6.44 | 3736 | 12 |
| self-funder | critic_moderate_subtract | $319K | 310 | 15.50 | 6.71 | 6.68 | 0% | 0% | 0% | 0% | 4 | 2 | 80.75 | 0 | — | 6.44 | 3871 | 12 |
| self-funder | audience_mild | $319K | 310 | 15.50 | 6.71 | 6.70 | 0% | 0% | 0% | 0% | 4 | 2 | 80.75 | 0 | — | 6.44 | 3960.50 | 12 |
| self-funder | audience_moderate | $319K | 310 | 15.50 | 6.71 | 6.70 | 0% | 0% | 0% | 0% | 4 | 2 | 80.75 | 0 | — | 6.44 | 3960.50 | 12 |
| self-funder | audience_strong | $319K | 310 | 15.50 | 6.71 | 6.70 | 0% | 0% | 0% | 0% | 4 | 2 | 80.75 | 0 | — | 6.44 | 3960.50 | 12 |
| self-funder | combo_A | $319K | 310 | 15.50 | 6.71 | 6.70 | 0% | 0% | 0% | 0% | 4 | 2 | 80.75 | 0 | — | 6.44 | 3960.50 | 12 |
| self-funder | combo_B | $319K | 310 | 15.50 | 6.71 | 6.68 | 0% | 0% | 0% | 0% | 4 | 2 | 80.75 | 0 | — | 6.44 | 3885 | 12 |
| self-funder | combo_C | $318K | 300 | 15 | 6.71 | 6.62 | 0% | 0% | 0% | 0% | 4 | 2 | 80.75 | 0 | — | 6.44 | 3736 | 12 |
| selective-self-funder | control | $3785K | 3462.50 | 173.15 | 7.94 | 7.88 | 55% | 15% | 88% | 15% | 8 | 8 | 58.70 | 2 | 112 | 6.44 | 63496 | 2 |
| selective-self-funder | ref_no_era_bar | $3794K | 3942.50 | 197.15 | 8.09 | 8.04 | 65% | 20% | 100% | 20% | 8 | 8 | 59.20 | 2 | 96 | 6.44 | 67992.50 | 2 |
| selective-self-funder | ref_era_bar_0.08 | $3720K | 3010 | 150.50 | 7.78 | 7.71 | 50% | 5% | 88% | 5% | 8 | 8 | 58 | 2 | 112 | 6.44 | 60789.50 | 2 |
| selective-self-funder | critic_mild | $3785K | 3462.50 | 173.15 | 7.94 | 7.88 | 55% | 15% | 88% | 15% | 8 | 8 | 58.70 | 2 | 112 | 6.44 | 63496 | 2 |
| selective-self-funder | critic_moderate | $3785K | 3427.50 | 171.40 | 7.94 | 7.88 | 55% | 10% | 88% | 10% | 8 | 8 | 58.70 | 2 | 112 | 6.44 | 63442.50 | 2 |
| selective-self-funder | critic_strong | $3785K | 3312.50 | 165.65 | 7.94 | 7.81 | 55% | 10% | 88% | 10% | 8 | 8 | 58.70 | 2 | 112 | 6.44 | 62612 | 2 |
| selective-self-funder | critic_moderate_subtract | $3785K | 3427.50 | 171.40 | 7.94 | 7.88 | 55% | 10% | 88% | 10% | 8 | 8 | 58.70 | 2 | 112 | 6.44 | 63442.50 | 2 |
| selective-self-funder | audience_mild | $3785K | 3462.50 | 173.15 | 7.94 | 7.88 | 55% | 15% | 88% | 15% | 8 | 8 | 58.70 | 2 | 112 | 6.44 | 63496 | 2 |
| selective-self-funder | audience_moderate | $3785K | 3462.50 | 173.15 | 7.94 | 7.88 | 55% | 15% | 88% | 15% | 8 | 8 | 58.70 | 2 | 112 | 6.44 | 63496 | 2 |
| selective-self-funder | audience_strong | $3785K | 3462.50 | 173.15 | 7.94 | 7.88 | 55% | 15% | 88% | 15% | 8 | 8 | 58.70 | 2 | 112 | 6.44 | 63496 | 2 |
| selective-self-funder | combo_A | $3785K | 3462.50 | 173.15 | 7.94 | 7.88 | 55% | 15% | 88% | 15% | 8 | 8 | 58.70 | 2 | 112 | 6.44 | 63496 | 2 |
| selective-self-funder | combo_B | $3785K | 3427.50 | 171.40 | 7.94 | 7.88 | 55% | 10% | 88% | 10% | 8 | 8 | 58.70 | 2 | 112 | 6.44 | 63442.50 | 2 |
| selective-self-funder | combo_C | $3785K | 3312.50 | 165.65 | 7.94 | 7.81 | 55% | 10% | 88% | 10% | 8 | 8 | 58.70 | 2 | 112 | 6.44 | 62612 | 2 |
| famous-star | control | $3362K | 0 | 0 | 6.32 | 6.37 | 0% | 0% | 0% | 0% | 4 | 2 | 57 | 0 | — | 6.44 | 8896.50 | 7 |
| famous-star | ref_no_era_bar | $3701K | 150 | 7.50 | 6.58 | 6.62 | 0% | 0% | 0% | 0% | 4 | 2 | 57 | 0 | — | 6.44 | 12518.50 | 7 |
| famous-star | ref_era_bar_0.08 | $3010K | 0 | 0 | 6.09 | 6.15 | 0% | 0% | 0% | 0% | 4 | 2 | 57 | 0 | — | 6.44 | 6917 | 7 |
| famous-star | critic_mild | $3362K | 0 | 0 | 6.32 | 6.37 | 0% | 0% | 0% | 0% | 4 | 2 | 57 | 0 | — | 6.44 | 8896.50 | 7 |
| famous-star | critic_moderate | $3361K | 0 | 0 | 6.32 | 6.36 | 0% | 0% | 0% | 0% | 4 | 2 | 57 | 0 | — | 6.44 | 8745 | 7 |
| famous-star | critic_strong | $3360K | 0 | 0 | 6.32 | 6.30 | 0% | 0% | 0% | 0% | 4 | 2 | 57 | 0 | — | 6.44 | 8345 | 7 |
| famous-star | critic_moderate_subtract | $3361K | 0 | 0 | 6.32 | 6.35 | 0% | 0% | 0% | 0% | 4 | 2 | 57 | 0 | — | 6.44 | 8699 | 7 |
| famous-star | audience_mild | $3362K | 0 | 0 | 6.32 | 6.37 | 0% | 0% | 0% | 0% | 4 | 2 | 57 | 0 | — | 6.44 | 8896.50 | 7 |
| famous-star | audience_moderate | $3362K | 0 | 0 | 6.32 | 6.37 | 0% | 0% | 0% | 0% | 4 | 2 | 57 | 0 | — | 6.44 | 8896.50 | 7 |
| famous-star | audience_strong | $3362K | 0 | 0 | 6.32 | 6.37 | 0% | 0% | 0% | 0% | 4 | 2 | 57 | 0 | — | 6.44 | 8896.50 | 7 |
| famous-star | combo_A | $3362K | 0 | 0 | 6.32 | 6.37 | 0% | 0% | 0% | 0% | 4 | 2 | 57 | 0 | — | 6.44 | 8896.50 | 7 |
| famous-star | combo_B | $3361K | 0 | 0 | 6.32 | 6.36 | 0% | 0% | 0% | 0% | 4 | 2 | 57 | 0 | — | 6.44 | 8745 | 7 |
| famous-star | combo_C | $3360K | 0 | 0 | 6.32 | 6.30 | 0% | 0% | 0% | 0% | 4 | 2 | 57 | 0 | — | 6.44 | 8345 | 7 |

### Paired deltas vs **control** (median of per-seed differences; share of seeds where the variant is higher)

| Strategy | Variant | Δ endCash | Δ prestige | Δ share8plus | Δ meanAudience |
|---|---|---:|---:|---:|---:|
| balanced | ref_no_era_bar | $20K (61%) | 460 (84%) | 5% (67%) | 0.14 (87%) |
| balanced | ref_era_bar_0.08 | $-18K (41%) | -362.50 (17%) | -5% (10%) | -0.14 (12%) |
| balanced | critic_mild | $0K (0%) | 0 (0%) | 0% (0%) | 0 (0%) |
| balanced | critic_moderate | $-0K (0%) | 0 (0%) | 0% (0%) | 0 (0%) |
| balanced | critic_strong | $-0K (31%) | -170 (0%) | 0% (0%) | 0 (1%) |
| balanced | critic_moderate_subtract | $-0K (0%) | 0 (0%) | 0% (0%) | 0 (0%) |
| balanced | audience_mild | $0K (0%) | 0 (0%) | 0% (0%) | 0 (0%) |
| balanced | audience_moderate | $0K (0%) | 0 (0%) | 0% (0%) | 0 (0%) |
| balanced | audience_strong | $0K (0%) | 0 (0%) | 0% (0%) | 0 (0%) |
| balanced | combo_A | $0K (0%) | 0 (0%) | 0% (0%) | 0 (0%) |
| balanced | combo_B | $-0K (0%) | 0 (0%) | 0% (0%) | 0 (0%) |
| balanced | combo_C | $-0K (31%) | -170 (0%) | 0% (0%) | 0 (1%) |
| quality-first | ref_no_era_bar | $37K (65%) | 335 (91%) | 5% (70%) | 0.15 (93%) |
| quality-first | ref_era_bar_0.08 | $-30K (40%) | -430 (6%) | -5% (7%) | -0.14 (7%) |
| quality-first | critic_mild | $0K (0%) | 0 (0%) | 0% (0%) | 0 (0%) |
| quality-first | critic_moderate | $-0K (0%) | 0 (0%) | 0% (0%) | 0 (0%) |
| quality-first | critic_strong | $-1K (13%) | -170 (0%) | 0% (0%) | 0 (0%) |
| quality-first | critic_moderate_subtract | $-0K (0%) | 0 (0%) | 0% (0%) | 0 (0%) |
| quality-first | audience_mild | $0K (0%) | 0 (0%) | 0% (0%) | 0 (0%) |
| quality-first | audience_moderate | $0K (0%) | 0 (0%) | 0% (0%) | 0 (0%) |
| quality-first | audience_strong | $0K (0%) | 0 (0%) | 0% (0%) | 0 (0%) |
| quality-first | combo_A | $0K (0%) | 0 (0%) | 0% (0%) | 0 (0%) |
| quality-first | combo_B | $-0K (0%) | 0 (0%) | 0% (0%) | 0 (0%) |
| quality-first | combo_C | $-1K (13%) | -170 (0%) | 0% (0%) | 0 (0%) |
| franchise-builder | ref_no_era_bar | $47K (69%) | 125 (88%) | 5% (57%) | 0.13 (95%) |
| franchise-builder | ref_era_bar_0.08 | $-23K (38%) | -135 (9%) | 0% (5%) | -0.13 (8%) |
| franchise-builder | critic_mild | $0K (0%) | 0 (0%) | 0% (0%) | 0 (0%) |
| franchise-builder | critic_moderate | $-0K (0%) | 0 (0%) | 0% (0%) | 0 (0%) |
| franchise-builder | critic_strong | $-1K (13%) | 0 (1%) | 0% (1%) | 0 (1%) |
| franchise-builder | critic_moderate_subtract | $-0K (0%) | 0 (0%) | 0% (0%) | 0 (0%) |
| franchise-builder | audience_mild | $0K (0%) | 0 (0%) | 0% (0%) | 0 (0%) |
| franchise-builder | audience_moderate | $0K (0%) | 0 (0%) | 0% (0%) | 0 (0%) |
| franchise-builder | audience_strong | $0K (0%) | 0 (0%) | 0% (0%) | 0 (0%) |
| franchise-builder | combo_A | $0K (0%) | 0 (0%) | 0% (0%) | 0 (0%) |
| franchise-builder | combo_B | $-0K (0%) | 0 (0%) | 0% (0%) | 0 (0%) |
| franchise-builder | combo_C | $-1K (13%) | 0 (1%) | 0% (1%) | 0 (1%) |
| repeat-farmer | ref_no_era_bar | $214K (84%) | 125 (84%) | 5% (52%) | 0.14 (89%) |
| repeat-farmer | ref_era_bar_0.08 | $-194K (20%) | -125 (14%) | 0% (11%) | -0.13 (15%) |
| repeat-farmer | critic_mild | $0K (0%) | 0 (0%) | 0% (0%) | 0 (0%) |
| repeat-farmer | critic_moderate | $-2K (0%) | 0 (0%) | 0% (0%) | 0 (0%) |
| repeat-farmer | critic_strong | $-15K (0%) | 0 (0%) | 0% (0%) | 0 (0%) |
| repeat-farmer | critic_moderate_subtract | $-3K (0%) | 0 (0%) | 0% (0%) | 0 (0%) |
| repeat-farmer | audience_mild | $0K (0%) | 0 (0%) | 0% (0%) | 0 (0%) |
| repeat-farmer | audience_moderate | $0K (0%) | 0 (0%) | 0% (0%) | 0 (0%) |
| repeat-farmer | audience_strong | $0K (0%) | 0 (0%) | 0% (0%) | 0 (0%) |
| repeat-farmer | combo_A | $0K (0%) | 0 (0%) | 0% (0%) | 0 (0%) |
| repeat-farmer | combo_B | $-2K (0%) | 0 (0%) | 0% (0%) | 0 (0%) |
| repeat-farmer | combo_C | $-15K (0%) | 0 (0%) | 0% (0%) | 0 (0%) |
| cheap-duds | ref_no_era_bar | $385K (98%) | 75 (58%) | 0% (9%) | 0.25 (98%) |
| cheap-duds | ref_era_bar_0.08 | $-282K (4%) | 0 (0%) | 0% (0%) | -0.23 (3%) |
| cheap-duds | critic_mild | $0K (0%) | 0 (0%) | 0% (0%) | 0 (0%) |
| cheap-duds | critic_moderate | $-3K (0%) | 0 (0%) | 0% (0%) | 0 (0%) |
| cheap-duds | critic_strong | $-20K (0%) | 0 (0%) | 0% (0%) | 0 (0%) |
| cheap-duds | critic_moderate_subtract | $-5K (0%) | 0 (0%) | 0% (0%) | 0 (0%) |
| cheap-duds | audience_mild | $0K (0%) | 0 (0%) | 0% (0%) | 0 (0%) |
| cheap-duds | audience_moderate | $0K (0%) | 0 (0%) | 0% (0%) | 0 (0%) |
| cheap-duds | audience_strong | $0K (0%) | 0 (0%) | 0% (0%) | 0 (0%) |
| cheap-duds | combo_A | $0K (0%) | 0 (0%) | 0% (0%) | 0 (0%) |
| cheap-duds | combo_B | $-3K (0%) | 0 (0%) | 0% (0%) | 0 (0%) |
| cheap-duds | combo_C | $-20K (0%) | 0 (0%) | 0% (0%) | 0 (0%) |
| experimenter | ref_no_era_bar | $58K (69%) | 650 (92%) | 10% (79%) | 0.19 (94%) |
| experimenter | ref_era_bar_0.08 | $-63K (34%) | -400 (8%) | -10% (3%) | -0.19 (4%) |
| experimenter | critic_mild | $0K (0%) | 0 (0%) | 0% (0%) | 0 (0%) |
| experimenter | critic_moderate | $-0K (0%) | 0 (0%) | 0% (0%) | 0 (0%) |
| experimenter | critic_strong | $-1K (7%) | -170 (0%) | 0% (0%) | 0 (0%) |
| experimenter | critic_moderate_subtract | $-0K (0%) | 0 (0%) | 0% (0%) | 0 (0%) |
| experimenter | audience_mild | $0K (0%) | 0 (0%) | 0% (0%) | 0 (0%) |
| experimenter | audience_moderate | $0K (0%) | 0 (0%) | 0% (0%) | 0 (0%) |
| experimenter | audience_strong | $0K (0%) | 0 (0%) | 0% (0%) | 0 (0%) |
| experimenter | combo_A | $0K (0%) | 0 (0%) | 0% (0%) | 0 (0%) |
| experimenter | combo_B | $-0K (0%) | 0 (0%) | 0% (0%) | 0 (0%) |
| experimenter | combo_C | $-1K (7%) | -170 (0%) | 0% (0%) | 0 (0%) |
| self-funder | ref_no_era_bar | $23K (70%) | 485 (98%) | 5% (80%) | 0.28 (99%) |
| self-funder | ref_era_bar_0.08 | $-23K (35%) | -225 (2%) | 0% (2%) | -0.28 (0%) |
| self-funder | critic_mild | $0K (0%) | 0 (0%) | 0% (0%) | 0 (0%) |
| self-funder | critic_moderate | $-0K (0%) | 0 (0%) | 0% (0%) | 0 (0%) |
| self-funder | critic_strong | $-2K (10%) | 0 (0%) | 0% (0%) | 0 (0%) |
| self-funder | critic_moderate_subtract | $-0K (0%) | 0 (0%) | 0% (0%) | 0 (0%) |
| self-funder | audience_mild | $0K (0%) | 0 (0%) | 0% (0%) | 0 (0%) |
| self-funder | audience_moderate | $0K (0%) | 0 (0%) | 0% (0%) | 0 (0%) |
| self-funder | audience_strong | $0K (0%) | 0 (0%) | 0% (0%) | 0 (0%) |
| self-funder | combo_A | $0K (0%) | 0 (0%) | 0% (0%) | 0 (0%) |
| self-funder | combo_B | $-0K (0%) | 0 (0%) | 0% (0%) | 0 (0%) |
| self-funder | combo_C | $-2K (10%) | 0 (0%) | 0% (0%) | 0 (0%) |
| selective-self-funder | ref_no_era_bar | $13K (56%) | 335 (80%) | 5% (67%) | 0.14 (87%) |
| selective-self-funder | ref_era_bar_0.08 | $-21K (38%) | -470 (13%) | -5% (12%) | -0.14 (11%) |
| selective-self-funder | critic_mild | $0K (0%) | 0 (0%) | 0% (0%) | 0 (0%) |
| selective-self-funder | critic_moderate | $-0K (0%) | 0 (0%) | 0% (0%) | 0 (0%) |
| selective-self-funder | critic_strong | $-0K (28%) | -85 (0%) | 0% (0%) | 0 (1%) |
| selective-self-funder | critic_moderate_subtract | $-0K (0%) | 0 (0%) | 0% (0%) | 0 (0%) |
| selective-self-funder | audience_mild | $0K (0%) | 0 (0%) | 0% (0%) | 0 (0%) |
| selective-self-funder | audience_moderate | $0K (0%) | 0 (0%) | 0% (0%) | 0 (0%) |
| selective-self-funder | audience_strong | $0K (0%) | 0 (0%) | 0% (0%) | 0 (0%) |
| selective-self-funder | combo_A | $0K (0%) | 0 (0%) | 0% (0%) | 0 (0%) |
| selective-self-funder | combo_B | $-0K (0%) | 0 (0%) | 0% (0%) | 0 (0%) |
| selective-self-funder | combo_C | $-0K (28%) | -85 (0%) | 0% (0%) | 0 (1%) |
| famous-star | ref_no_era_bar | $303K (100%) | 150 (83%) | 0% (15%) | 0.25 (100%) |
| famous-star | ref_era_bar_0.08 | $-314K (0%) | 0 (0%) | 0% (0%) | -0.23 (0%) |
| famous-star | critic_mild | $0K (0%) | 0 (0%) | 0% (0%) | 0 (0%) |
| famous-star | critic_moderate | $-0K (0%) | 0 (0%) | 0% (0%) | 0 (0%) |
| famous-star | critic_strong | $-3K (0%) | 0 (0%) | 0% (0%) | 0 (0%) |
| famous-star | critic_moderate_subtract | $-0K (0%) | 0 (0%) | 0% (0%) | 0 (0%) |
| famous-star | audience_mild | $0K (0%) | 0 (0%) | 0% (0%) | 0 (0%) |
| famous-star | audience_moderate | $0K (0%) | 0 (0%) | 0% (0%) | 0 (0%) |
| famous-star | audience_strong | $0K (0%) | 0 (0%) | 0% (0%) | 0 (0%) |
| famous-star | combo_A | $0K (0%) | 0 (0%) | 0% (0%) | 0 (0%) |
| famous-star | combo_B | $-0K (0%) | 0 (0%) | 0% (0%) | 0 (0%) |
| famous-star | combo_C | $-3K (0%) | 0 (0%) | 0% (0%) | 0 (0%) |

### Mean review score (avg of Audience+Critic) by production index

| Strategy | Variant | #1 | #5 | #10 | #20 |
|---|---|---:|---:|---:|---:|
| balanced | control | 5.62 | 7.39 | 8.27 | 8.67 |
| balanced | ref_no_era_bar | 5.65 | 7.51 | 8.47 | 8.89 |
| balanced | ref_era_bar_0.08 | 5.59 | 7.29 | 8.10 | 8.53 |
| balanced | critic_mild | 5.62 | 7.39 | 8.27 | 8.67 |
| balanced | critic_moderate | 5.62 | 7.39 | 8.27 | 8.50 |
| balanced | critic_strong | 5.62 | 7.39 | 8.27 | 8.46 |
| balanced | critic_moderate_subtract | 5.62 | 7.39 | 8.27 | 8.48 |
| balanced | audience_mild | 5.62 | 7.39 | 8.27 | 8.67 |
| balanced | audience_moderate | 5.62 | 7.39 | 8.27 | 8.67 |
| balanced | audience_strong | 5.62 | 7.39 | 8.27 | 8.67 |
| balanced | combo_A | 5.62 | 7.39 | 8.27 | 8.67 |
| balanced | combo_B | 5.62 | 7.39 | 8.27 | 8.50 |
| balanced | combo_C | 5.62 | 7.39 | 8.27 | 8.46 |
| quality-first | control | 5.59 | 7.34 | 8.20 | 8.69 |
| quality-first | ref_no_era_bar | 5.62 | 7.45 | 8.38 | 8.90 |
| quality-first | ref_era_bar_0.08 | 5.56 | 7.23 | 8.04 | 8.51 |
| quality-first | critic_mild | 5.59 | 7.34 | 8.20 | 8.69 |
| quality-first | critic_moderate | 5.59 | 7.34 | 8.20 | 8.53 |
| quality-first | critic_strong | 5.59 | 7.34 | 8.20 | 8.48 |
| quality-first | critic_moderate_subtract | 5.59 | 7.34 | 8.20 | 8.50 |
| quality-first | audience_mild | 5.59 | 7.34 | 8.20 | 8.69 |
| quality-first | audience_moderate | 5.59 | 7.34 | 8.20 | 8.69 |
| quality-first | audience_strong | 5.59 | 7.34 | 8.20 | 8.69 |
| quality-first | combo_A | 5.59 | 7.34 | 8.20 | 8.69 |
| quality-first | combo_B | 5.59 | 7.34 | 8.20 | 8.53 |
| quality-first | combo_C | 5.59 | 7.34 | 8.20 | 8.48 |
| franchise-builder | control | 5.60 | 7.37 | 7.72 | 7.04 |
| franchise-builder | ref_no_era_bar | 5.63 | 7.47 | 7.87 | 7.18 |
| franchise-builder | ref_era_bar_0.08 | 5.57 | 7.27 | 7.58 | 6.92 |
| franchise-builder | critic_mild | 5.60 | 7.37 | 7.72 | 7.04 |
| franchise-builder | critic_moderate | 5.60 | 7.37 | 7.72 | 6.90 |
| franchise-builder | critic_strong | 5.60 | 7.37 | 7.72 | 6.88 |
| franchise-builder | critic_moderate_subtract | 5.60 | 7.37 | 7.72 | 6.84 |
| franchise-builder | audience_mild | 5.60 | 7.37 | 7.72 | 7.04 |
| franchise-builder | audience_moderate | 5.60 | 7.37 | 7.72 | 7.04 |
| franchise-builder | audience_strong | 5.60 | 7.37 | 7.72 | 7.04 |
| franchise-builder | combo_A | 5.60 | 7.37 | 7.72 | 7.04 |
| franchise-builder | combo_B | 5.60 | 7.37 | 7.72 | 6.90 |
| franchise-builder | combo_C | 5.60 | 7.37 | 7.72 | 6.88 |
| repeat-farmer | control | 5.61 | 7.39 | 7.77 | 6.60 |
| repeat-farmer | ref_no_era_bar | 5.64 | 7.51 | 7.86 | 6.75 |
| repeat-farmer | ref_era_bar_0.08 | 5.58 | 7.27 | 7.71 | 6.50 |
| repeat-farmer | critic_mild | 5.61 | 7.39 | 7.77 | 6.60 |
| repeat-farmer | critic_moderate | 5.61 | 7.39 | 7.77 | 6.47 |
| repeat-farmer | critic_strong | 5.61 | 7.39 | 7.77 | 6.44 |
| repeat-farmer | critic_moderate_subtract | 5.61 | 7.39 | 7.77 | 6.40 |
| repeat-farmer | audience_mild | 5.61 | 7.39 | 7.77 | 6.60 |
| repeat-farmer | audience_moderate | 5.61 | 7.39 | 7.77 | 6.60 |
| repeat-farmer | audience_strong | 5.61 | 7.39 | 7.77 | 6.60 |
| repeat-farmer | combo_A | 5.61 | 7.39 | 7.77 | 6.60 |
| repeat-farmer | combo_B | 5.61 | 7.39 | 7.77 | 6.47 |
| repeat-farmer | combo_C | 5.61 | 7.39 | 7.77 | 6.44 |
| cheap-duds | control | 5.47 | 5.81 | 6.12 | 6.41 |
| cheap-duds | ref_no_era_bar | 5.50 | 5.95 | 6.38 | 6.79 |
| cheap-duds | ref_era_bar_0.08 | 5.44 | 5.69 | 5.89 | 6.05 |
| cheap-duds | critic_mild | 5.47 | 5.81 | 6.12 | 6.41 |
| cheap-duds | critic_moderate | 5.47 | 5.81 | 6.12 | 6.28 |
| cheap-duds | critic_strong | 5.47 | 5.81 | 6.12 | 6.25 |
| cheap-duds | critic_moderate_subtract | 5.47 | 5.81 | 6.12 | 6.21 |
| cheap-duds | audience_mild | 5.47 | 5.81 | 6.12 | 6.41 |
| cheap-duds | audience_moderate | 5.47 | 5.81 | 6.12 | 6.41 |
| cheap-duds | audience_strong | 5.47 | 5.81 | 6.12 | 6.41 |
| cheap-duds | combo_A | 5.47 | 5.81 | 6.12 | 6.41 |
| cheap-duds | combo_B | 5.47 | 5.81 | 6.12 | 6.28 |
| cheap-duds | combo_C | 5.47 | 5.81 | 6.12 | 6.25 |
| experimenter | control | 5.59 | 7.23 | 8.02 | 8.61 |
| experimenter | ref_no_era_bar | 5.62 | 7.37 | 8.28 | 8.76 |
| experimenter | ref_era_bar_0.08 | 5.57 | 7.11 | 7.67 | 8.41 |
| experimenter | critic_mild | 5.59 | 7.23 | 8.02 | 8.61 |
| experimenter | critic_moderate | 5.59 | 7.23 | 8.02 | 8.45 |
| experimenter | critic_strong | 5.59 | 7.23 | 8.02 | 8.40 |
| experimenter | critic_moderate_subtract | 5.59 | 7.23 | 8.02 | 8.42 |
| experimenter | audience_mild | 5.59 | 7.23 | 8.02 | 8.61 |
| experimenter | audience_moderate | 5.59 | 7.23 | 8.02 | 8.61 |
| experimenter | audience_strong | 5.59 | 7.23 | 8.02 | 8.61 |
| experimenter | combo_A | 5.59 | 7.23 | 8.02 | 8.61 |
| experimenter | combo_B | 5.59 | 7.23 | 8.02 | 8.45 |
| experimenter | combo_C | 5.59 | 7.23 | 8.02 | 8.40 |
| self-funder | control | 5.48 | 6.12 | 6.75 | 7.43 |
| self-funder | ref_no_era_bar | 5.51 | 6.25 | 7.06 | 7.87 |
| self-funder | ref_era_bar_0.08 | 5.45 | 5.99 | 6.49 | 7.03 |
| self-funder | critic_mild | 5.48 | 6.12 | 6.75 | 7.43 |
| self-funder | critic_moderate | 5.48 | 6.12 | 6.75 | 7.28 |
| self-funder | critic_strong | 5.48 | 6.12 | 6.75 | 7.24 |
| self-funder | critic_moderate_subtract | 5.48 | 6.12 | 6.75 | 7.23 |
| self-funder | audience_mild | 5.48 | 6.12 | 6.75 | 7.43 |
| self-funder | audience_moderate | 5.48 | 6.12 | 6.75 | 7.43 |
| self-funder | audience_strong | 5.48 | 6.12 | 6.75 | 7.43 |
| self-funder | combo_A | 5.48 | 6.12 | 6.75 | 7.43 |
| self-funder | combo_B | 5.48 | 6.12 | 6.75 | 7.28 |
| self-funder | combo_C | 5.48 | 6.12 | 6.75 | 7.24 |
| selective-self-funder | control | 5.63 | 7.35 | 8.30 | 8.74 |
| selective-self-funder | ref_no_era_bar | 5.66 | 7.46 | 8.49 | 8.87 |
| selective-self-funder | ref_era_bar_0.08 | 5.60 | 7.24 | 8.12 | 8.50 |
| selective-self-funder | critic_mild | 5.63 | 7.35 | 8.30 | 8.74 |
| selective-self-funder | critic_moderate | 5.63 | 7.35 | 8.30 | 8.58 |
| selective-self-funder | critic_strong | 5.63 | 7.35 | 8.30 | 8.54 |
| selective-self-funder | critic_moderate_subtract | 5.63 | 7.35 | 8.30 | 8.55 |
| selective-self-funder | audience_mild | 5.63 | 7.35 | 8.30 | 8.74 |
| selective-self-funder | audience_moderate | 5.63 | 7.35 | 8.30 | 8.74 |
| selective-self-funder | audience_strong | 5.63 | 7.35 | 8.30 | 8.74 |
| selective-self-funder | combo_A | 5.63 | 7.35 | 8.30 | 8.74 |
| selective-self-funder | combo_B | 5.63 | 7.35 | 8.30 | 8.58 |
| selective-self-funder | combo_C | 5.63 | 7.35 | 8.30 | 8.54 |
| famous-star | control | 5.57 | 5.98 | 6.39 | 6.79 |
| famous-star | ref_no_era_bar | 5.60 | 6.11 | 6.64 | 7.25 |
| famous-star | ref_era_bar_0.08 | 5.54 | 5.85 | 6.16 | 6.43 |
| famous-star | critic_mild | 5.57 | 5.98 | 6.39 | 6.79 |
| famous-star | critic_moderate | 5.57 | 5.98 | 6.39 | 6.66 |
| famous-star | critic_strong | 5.57 | 5.98 | 6.39 | 6.62 |
| famous-star | critic_moderate_subtract | 5.57 | 5.98 | 6.39 | 6.59 |
| famous-star | audience_mild | 5.57 | 5.98 | 6.39 | 6.79 |
| famous-star | audience_moderate | 5.57 | 5.98 | 6.39 | 6.79 |
| famous-star | audience_strong | 5.57 | 5.98 | 6.39 | 6.79 |
| famous-star | combo_A | 5.57 | 5.98 | 6.39 | 6.79 |
| famous-star | combo_B | 5.57 | 5.98 | 6.39 | 6.66 |
| famous-star | combo_C | 5.57 | 5.98 | 6.39 | 6.62 |

### Great films — all strategies pooled, by release window

Denominators are films in that window. HoF = average of Audience and Critic ≥ hofThreshold (9.0). `≥9` is inclusive, `>9` strict.

| Strategy | Config | Window | Films (n) | Avg Aud | Avg Crit | HoF n (%) | Avg ≥9 n (%) | Avg >9 n (%) | Aud ≥9 n (%) | Crit ≥9 n (%) | 8+ n (%) | Careers with 0 HoF | HoF/career p10/p50/p90 | Best/career p10/p50/p90/p99 | Best combined movie | Prestige median |
|---|---|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---|---|---|---:|
| ALL | control | 1-5 | 13500 | 6.21 | 6.26 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 238 (1.8%) | 100% of 2700 | 0/0/0 | 6.14/7.29/7.94/8.4 | 8.70 "Midnight Protocol" (A8.64/C8.76; balanced seed 87 #5, yr 1.5, critic gen 0) |  |
| ALL | control | 6-20 | 40500 | 7.53 | 7.50 | 2952 (7.3%) | 2952 (7.3%) | 2836 (7.0%) | 3903 (9.6%) | 4138 (10.2%) | 13817 (34.1%) | 59% of 2700 | 0/0/4 | 7.19/8.36/9.61/10 | 10.00 "Dead Frequency" (A10/C10; experimenter seed 10 #18, yr 5.5, critic gen 0) |  |
| ALL | control | all | 54000 | 7.20 | 7.19 | 2952 (5.5%) | 2952 (5.5%) | 2836 (5.3%) | 3903 (7.2%) | 4138 (7.7%) | 14055 (26.0%) | 59% of 2700 | 0/0/4 | 7.19/8.36/9.61/10 | 10.00 "Dead Frequency" (A10/C10; experimenter seed 10 #18, yr 5.5, critic gen 0) |  |
| ALL | ref_no_era_bar | 1-5 | 13500 | 6.29 | 6.34 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 7 (0.1%) | 399 (3.0%) | 100% of 2700 | 0/0/0 | 6.24/7.4/8.06/8.52 | 8.82 "Midnight Protocol" (A8.76/C8.88; balanced seed 87 #5, yr 1.5, critic gen 0) |  |
| ALL | ref_no_era_bar | 6-20 | 40500 | 7.75 | 7.71 | 4651 (11.5%) | 4651 (11.5%) | 4515 (11.2%) | 5940 (14.7%) | 6239 (15.4%) | 16497 (40.7%) | 55% of 2700 | 0/0/5 | 7.56/8.61/9.74/10 | 10.00 "Wild Frequency" (A10/C10; experimenter seed 7 #16, yr 4.9, critic gen 0) |  |
| ALL | ref_no_era_bar | all | 54000 | 7.38 | 7.37 | 4651 (8.6%) | 4651 (8.6%) | 4515 (8.4%) | 5940 (11.0%) | 6246 (11.6%) | 16896 (31.3%) | 55% of 2700 | 0/0/5 | 7.56/8.61/9.74/10 | 10.00 "Wild Frequency" (A10/C10; experimenter seed 7 #16, yr 4.9, critic gen 0) |  |
| ALL | ref_era_bar_0.08 | 1-5 | 13500 | 6.13 | 6.18 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 161 (1.2%) | 100% of 2700 | 0/0/0 | 6.05/7.19/7.84/8.29 | 8.58 "Midnight Protocol" (A8.52/C8.64; balanced seed 87 #5, yr 1.5, critic gen 0) |  |
| ALL | ref_era_bar_0.08 | 6-20 | 40500 | 7.31 | 7.30 | 1726 (4.3%) | 1726 (4.3%) | 1655 (4.1%) | 2747 (6.8%) | 2826 (7.0%) | 11388 (28.1%) | 67% of 2700 | 0/0/2 | 6.85/8.19/9.44/9.95 | 10.00 "Hollow Frequency" (A10/C10; quality-first seed 21 #20, yr 6.2, critic gen 0) |  |
| ALL | ref_era_bar_0.08 | all | 54000 | 7.02 | 7.02 | 1726 (3.2%) | 1726 (3.2%) | 1655 (3.1%) | 2747 (5.1%) | 2826 (5.2%) | 11549 (21.4%) | 67% of 2700 | 0/0/2 | 6.85/8.19/9.44/9.95 | 10.00 "Hollow Frequency" (A10/C10; quality-first seed 21 #20, yr 6.2, critic gen 0) |  |
| ALL | critic_mild | 1-5 | 13500 | 6.21 | 6.26 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 238 (1.8%) | 100% of 2700 | 0/0/0 | 6.14/7.29/7.94/8.4 | 8.70 "Midnight Protocol" (A8.64/C8.76; balanced seed 87 #5, yr 1.5, critic gen 0) |  |
| ALL | critic_mild | 6-20 | 40500 | 7.53 | 7.50 | 2952 (7.3%) | 2952 (7.3%) | 2836 (7.0%) | 3903 (9.6%) | 4138 (10.2%) | 13817 (34.1%) | 59% of 2700 | 0/0/4 | 7.19/8.36/9.61/10 | 10.00 "Dead Frequency" (A10/C10; experimenter seed 10 #18, yr 5.5, critic gen 0) |  |
| ALL | critic_mild | all | 54000 | 7.20 | 7.19 | 2952 (5.5%) | 2952 (5.5%) | 2836 (5.3%) | 3903 (7.2%) | 4138 (7.7%) | 14055 (26.0%) | 59% of 2700 | 0/0/4 | 7.19/8.36/9.61/10 | 10.00 "Dead Frequency" (A10/C10; experimenter seed 10 #18, yr 5.5, critic gen 0) |  |
| ALL | critic_moderate | 1-5 | 13500 | 6.21 | 6.26 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 238 (1.8%) | 100% of 2700 | 0/0/0 | 6.14/7.29/7.94/8.4 | 8.70 "Midnight Protocol" (A8.64/C8.76; balanced seed 87 #5, yr 1.5, critic gen 0) |  |
| ALL | critic_moderate | 6-20 | 40500 | 7.53 | 7.48 | 2839 (7.0%) | 2839 (7.0%) | 2733 (6.8%) | 3903 (9.6%) | 3905 (9.6%) | 13741 (33.9%) | 60% of 2700 | 0/0/3 | 7.19/8.36/9.59/10 | 10.00 "Dead Frequency" (A10/C10; experimenter seed 10 #18, yr 5.5, critic gen 0) |  |
| ALL | critic_moderate | all | 54000 | 7.20 | 7.17 | 2839 (5.3%) | 2839 (5.3%) | 2733 (5.1%) | 3903 (7.2%) | 3905 (7.2%) | 13979 (25.9%) | 60% of 2700 | 0/0/3 | 7.19/8.36/9.59/10 | 10.00 "Dead Frequency" (A10/C10; experimenter seed 10 #18, yr 5.5, critic gen 0) |  |
| ALL | critic_strong | 1-5 | 13500 | 6.21 | 6.26 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 238 (1.8%) | 100% of 2700 | 0/0/0 | 6.14/7.29/7.94/8.4 | 8.70 "Midnight Protocol" (A8.64/C8.76; balanced seed 87 #5, yr 1.5, critic gen 0) |  |
| ALL | critic_strong | 6-20 | 40500 | 7.53 | 7.40 | 2391 (5.9%) | 2391 (5.9%) | 2298 (5.7%) | 3903 (9.6%) | 3168 (7.8%) | 13382 (33.0%) | 63% of 2700 | 0/0/3 | 7.13/8.34/9.53/9.93 | 10.00 "Silver Edge" (A10/C10; selective-self-funder seed 46 #12, yr 3.7, critic gen 0) |  |
| ALL | critic_strong | all | 54000 | 7.20 | 7.11 | 2391 (4.4%) | 2391 (4.4%) | 2298 (4.3%) | 3903 (7.2%) | 3168 (5.9%) | 13620 (25.2%) | 63% of 2700 | 0/0/3 | 7.13/8.34/9.53/9.93 | 10.00 "Silver Edge" (A10/C10; selective-self-funder seed 46 #12, yr 3.7, critic gen 0) |  |
| ALL | critic_moderate_subtract | 1-5 | 13500 | 6.21 | 6.26 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 238 (1.8%) | 100% of 2700 | 0/0/0 | 6.14/7.29/7.94/8.4 | 8.70 "Midnight Protocol" (A8.64/C8.76; balanced seed 87 #5, yr 1.5, critic gen 0) |  |
| ALL | critic_moderate_subtract | 6-20 | 40500 | 7.53 | 7.47 | 2831 (7.0%) | 2831 (7.0%) | 2723 (6.7%) | 3903 (9.6%) | 3879 (9.6%) | 13723 (33.9%) | 60% of 2700 | 0/0/3 | 7.18/8.35/9.59/10 | 10.00 "Dead Frequency" (A10/C10; experimenter seed 10 #18, yr 5.5, critic gen 0) |  |
| ALL | critic_moderate_subtract | all | 54000 | 7.20 | 7.17 | 2831 (5.2%) | 2831 (5.2%) | 2723 (5.0%) | 3903 (7.2%) | 3879 (7.2%) | 13961 (25.9%) | 60% of 2700 | 0/0/3 | 7.18/8.36/9.59/10 | 10.00 "Dead Frequency" (A10/C10; experimenter seed 10 #18, yr 5.5, critic gen 0) |  |
| ALL | audience_mild | 1-5 | 13500 | 6.21 | 6.26 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 238 (1.8%) | 100% of 2700 | 0/0/0 | 6.14/7.29/7.94/8.4 | 8.70 "Midnight Protocol" (A8.64/C8.76; balanced seed 87 #5, yr 1.5, critic gen 0) |  |
| ALL | audience_mild | 6-20 | 40500 | 7.53 | 7.50 | 2952 (7.3%) | 2952 (7.3%) | 2836 (7.0%) | 3903 (9.6%) | 4138 (10.2%) | 13817 (34.1%) | 59% of 2700 | 0/0/4 | 7.19/8.36/9.61/10 | 10.00 "Dead Frequency" (A10/C10; experimenter seed 10 #18, yr 5.5, critic gen 0) |  |
| ALL | audience_mild | all | 54000 | 7.20 | 7.19 | 2952 (5.5%) | 2952 (5.5%) | 2836 (5.3%) | 3903 (7.2%) | 4138 (7.7%) | 14055 (26.0%) | 59% of 2700 | 0/0/4 | 7.19/8.36/9.61/10 | 10.00 "Dead Frequency" (A10/C10; experimenter seed 10 #18, yr 5.5, critic gen 0) |  |
| ALL | audience_moderate | 1-5 | 13500 | 6.21 | 6.26 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 238 (1.8%) | 100% of 2700 | 0/0/0 | 6.14/7.29/7.94/8.4 | 8.70 "Midnight Protocol" (A8.64/C8.76; balanced seed 87 #5, yr 1.5, critic gen 0) |  |
| ALL | audience_moderate | 6-20 | 40500 | 7.53 | 7.50 | 2952 (7.3%) | 2952 (7.3%) | 2836 (7.0%) | 3903 (9.6%) | 4138 (10.2%) | 13817 (34.1%) | 59% of 2700 | 0/0/4 | 7.19/8.36/9.61/10 | 10.00 "Dead Frequency" (A10/C10; experimenter seed 10 #18, yr 5.5, critic gen 0) |  |
| ALL | audience_moderate | all | 54000 | 7.20 | 7.19 | 2952 (5.5%) | 2952 (5.5%) | 2836 (5.3%) | 3903 (7.2%) | 4138 (7.7%) | 14055 (26.0%) | 59% of 2700 | 0/0/4 | 7.19/8.36/9.61/10 | 10.00 "Dead Frequency" (A10/C10; experimenter seed 10 #18, yr 5.5, critic gen 0) |  |
| ALL | audience_strong | 1-5 | 13500 | 6.21 | 6.26 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 238 (1.8%) | 100% of 2700 | 0/0/0 | 6.14/7.29/7.94/8.4 | 8.70 "Midnight Protocol" (A8.64/C8.76; balanced seed 87 #5, yr 1.5, critic gen 0) |  |
| ALL | audience_strong | 6-20 | 40500 | 7.53 | 7.50 | 2952 (7.3%) | 2952 (7.3%) | 2836 (7.0%) | 3903 (9.6%) | 4138 (10.2%) | 13817 (34.1%) | 59% of 2700 | 0/0/4 | 7.19/8.36/9.61/10 | 10.00 "Dead Frequency" (A10/C10; experimenter seed 10 #18, yr 5.5, critic gen 0) |  |
| ALL | audience_strong | all | 54000 | 7.20 | 7.19 | 2952 (5.5%) | 2952 (5.5%) | 2836 (5.3%) | 3903 (7.2%) | 4138 (7.7%) | 14055 (26.0%) | 59% of 2700 | 0/0/4 | 7.19/8.36/9.61/10 | 10.00 "Dead Frequency" (A10/C10; experimenter seed 10 #18, yr 5.5, critic gen 0) |  |
| ALL | combo_A | 1-5 | 13500 | 6.21 | 6.26 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 238 (1.8%) | 100% of 2700 | 0/0/0 | 6.14/7.29/7.94/8.4 | 8.70 "Midnight Protocol" (A8.64/C8.76; balanced seed 87 #5, yr 1.5, critic gen 0) |  |
| ALL | combo_A | 6-20 | 40500 | 7.53 | 7.50 | 2952 (7.3%) | 2952 (7.3%) | 2836 (7.0%) | 3903 (9.6%) | 4138 (10.2%) | 13817 (34.1%) | 59% of 2700 | 0/0/4 | 7.19/8.36/9.61/10 | 10.00 "Dead Frequency" (A10/C10; experimenter seed 10 #18, yr 5.5, critic gen 0) |  |
| ALL | combo_A | all | 54000 | 7.20 | 7.19 | 2952 (5.5%) | 2952 (5.5%) | 2836 (5.3%) | 3903 (7.2%) | 4138 (7.7%) | 14055 (26.0%) | 59% of 2700 | 0/0/4 | 7.19/8.36/9.61/10 | 10.00 "Dead Frequency" (A10/C10; experimenter seed 10 #18, yr 5.5, critic gen 0) |  |
| ALL | combo_B | 1-5 | 13500 | 6.21 | 6.26 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 238 (1.8%) | 100% of 2700 | 0/0/0 | 6.14/7.29/7.94/8.4 | 8.70 "Midnight Protocol" (A8.64/C8.76; balanced seed 87 #5, yr 1.5, critic gen 0) |  |
| ALL | combo_B | 6-20 | 40500 | 7.53 | 7.48 | 2839 (7.0%) | 2839 (7.0%) | 2733 (6.8%) | 3903 (9.6%) | 3905 (9.6%) | 13741 (33.9%) | 60% of 2700 | 0/0/3 | 7.19/8.36/9.59/10 | 10.00 "Dead Frequency" (A10/C10; experimenter seed 10 #18, yr 5.5, critic gen 0) |  |
| ALL | combo_B | all | 54000 | 7.20 | 7.17 | 2839 (5.3%) | 2839 (5.3%) | 2733 (5.1%) | 3903 (7.2%) | 3905 (7.2%) | 13979 (25.9%) | 60% of 2700 | 0/0/3 | 7.19/8.36/9.59/10 | 10.00 "Dead Frequency" (A10/C10; experimenter seed 10 #18, yr 5.5, critic gen 0) |  |
| ALL | combo_C | 1-5 | 13500 | 6.21 | 6.26 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 238 (1.8%) | 100% of 2700 | 0/0/0 | 6.14/7.29/7.94/8.4 | 8.70 "Midnight Protocol" (A8.64/C8.76; balanced seed 87 #5, yr 1.5, critic gen 0) |  |
| ALL | combo_C | 6-20 | 40500 | 7.53 | 7.40 | 2391 (5.9%) | 2391 (5.9%) | 2298 (5.7%) | 3903 (9.6%) | 3168 (7.8%) | 13382 (33.0%) | 63% of 2700 | 0/0/3 | 7.13/8.34/9.53/9.93 | 10.00 "Silver Edge" (A10/C10; selective-self-funder seed 46 #12, yr 3.7, critic gen 0) |  |
| ALL | combo_C | all | 54000 | 7.20 | 7.11 | 2391 (4.4%) | 2391 (4.4%) | 2298 (4.3%) | 3903 (7.2%) | 3168 (5.9%) | 13620 (25.2%) | 63% of 2700 | 0/0/3 | 7.13/8.34/9.53/9.93 | 10.00 "Silver Edge" (A10/C10; selective-self-funder seed 46 #12, yr 3.7, critic gen 0) |  |

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
| balanced | ref_no_era_bar | all | 6000 | 8.09 | 8.05 | 1254 (20.9%) | 1254 (20.9%) | 1235 (20.6%) | 1569 (26.1%) | 1588 (26.5%) | 3724 (62.1%) | 4% of 300 | 1/4/7.1 | 9.18/9.56/9.86/10 | 10.00 "Midnight Night 2" (A10/C10; balanced seed 10 #18, yr 5.5, critic gen 0) | 3955 |
| quality-first | ref_no_era_bar | all | 6000 | 8.06 | 7.97 | 991 (16.5%) | 991 (16.5%) | 958 (16.0%) | 1498 (25.0%) | 1394 (23.2%) | 3638 (60.6%) | 2% of 300 | 2/3/5 | 9.23/9.55/9.84/10 | 10.00 "Dead Protocol" (A10/C10; quality-first seed 18 #13, yr 4.0, critic gen 0) | 3242.5 |
| franchise-builder | ref_no_era_bar | all | 6000 | 7.33 | 7.26 | 80 (1.3%) | 80 (1.3%) | 78 (1.3%) | 165 (2.8%) | 181 (3.0%) | 1047 (17.4%) | 95% of 300 | 0/0/0 | 7.7/8.16/8.77/9.73 | 9.82 "Red Frequency 5" (A9.76/C9.89; franchise-builder seed 181 #13, yr 4.0, critic gen 0) | 2372.5 |
| repeat-farmer | ref_no_era_bar | all | 6000 | 7.15 | 7.17 | 48 (0.8%) | 48 (0.8%) | 46 (0.8%) | 65 (1.1%) | 116 (1.9%) | 806 (13.4%) | 98% of 300 | 0/0/0 | 7.7/8.1/8.67/9.5 | 9.75 "Iron Pulse" (A9.66/C9.83; repeat-farmer seed 38 #9, yr 2.8, critic gen 0) | 1847.5 |
| cheap-duds | ref_no_era_bar | all | 6000 | 6.25 | 6.39 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 27 (0.5%) | 100% of 300 | 0/0/0 | 7.16/7.54/7.98/8.25 | 8.33 "Hollow Edge" (A8.17/C8.49; cheap-duds seed 134 #18, yr 5.5, critic gen 0) | 75 |
| experimenter | ref_no_era_bar | all | 6000 | 7.90 | 7.87 | 1080 (18.0%) | 1080 (18.0%) | 1036 (17.3%) | 1118 (18.6%) | 1369 (22.8%) | 3209 (53.5%) | 2% of 300 | 1.9/4/6 | 9.21/9.52/9.82/10 | 10.00 "Wild Frequency" (A10/C10; experimenter seed 7 #16, yr 4.9, critic gen 0) | 3110 |
| self-funder | ref_no_era_bar | all | 6000 | 6.98 | 6.94 | 15 (0.3%) | 15 (0.3%) | 12 (0.2%) | 59 (1.0%) | 82 (1.4%) | 638 (10.6%) | 95% of 300 | 0/0/0 | 7.95/8.38/8.84/9.2 | 9.32 "Silver Echo" (A9.23/C9.4; self-funder seed 171 #19, yr 5.8, critic gen 0) | 850 |
| selective-self-funder | ref_no_era_bar | all | 6000 | 8.09 | 8.03 | 1183 (19.7%) | 1183 (19.7%) | 1150 (19.2%) | 1466 (24.4%) | 1516 (25.3%) | 3751 (62.5%) | 3% of 300 | 1/4/6 | 9.22/9.54/9.84/10 | 10.00 "Last Rising" (A10/C10; selective-self-funder seed 38 #17, yr 5.2, critic gen 0) | 3942.5 |
| famous-star | ref_no_era_bar | all | 6000 | 6.57 | 6.61 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 56 (0.9%) | 100% of 300 | 0/0/0 | 7.36/7.71/8.11/8.55 | 8.59 "Hollow Code" (A8.48/C8.7; famous-star seed 62 #20, yr 6.2, critic gen 0) | 150 |
| balanced | ref_era_bar_0.08 | all | 6000 | 7.80 | 7.75 | 515 (8.6%) | 515 (8.6%) | 493 (8.2%) | 761 (12.7%) | 759 (12.7%) | 2959 (49.3%) | 25% of 300 | 0/1/4 | 8.85/9.25/9.65/9.97 | 10.00 "Lost Storm" (A10/C10; balanced seed 229 #19, yr 5.8, critic gen 0) | 3055 |
| quality-first | ref_era_bar_0.08 | all | 6000 | 7.75 | 7.68 | 400 (6.7%) | 400 (6.7%) | 385 (6.4%) | 695 (11.6%) | 656 (10.9%) | 2785 (46.4%) | 23% of 300 | 0/1/3 | 8.89/9.23/9.62/10 | 10.00 "Hollow Frequency" (A10/C10; quality-first seed 21 #20, yr 6.2, critic gen 0) | 2460 |
| franchise-builder | ref_era_bar_0.08 | all | 6000 | 7.07 | 7.02 | 21 (0.3%) | 21 (0.3%) | 20 (0.3%) | 44 (0.7%) | 44 (0.7%) | 386 (6.4%) | 98% of 300 | 0/0/0 | 7.51/7.88/8.41/9.41 | 9.66 "Broken Legacy 3" (A9.57/C9.76; franchise-builder seed 174 #13, yr 4.0, critic gen 0) | 2100 |
| repeat-farmer | ref_era_bar_0.08 | all | 6000 | 6.98 | 7.00 | 17 (0.3%) | 17 (0.3%) | 16 (0.3%) | 27 (0.5%) | 45 (0.8%) | 443 (7.4%) | 99% of 300 | 0/0/0 | 7.61/7.96/8.41/9.03 | 9.46 "Iron Protocol 4" (A9.37/C9.55; repeat-farmer seed 239 #12, yr 3.7, critic gen 0) | 1600 |
| cheap-duds | ref_era_bar_0.08 | all | 6000 | 5.78 | 5.93 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 100% of 300 | 0/0/0 | 6.51/6.78/7.14/7.44 | 7.58 "Red Echo" (A7.44/C7.72; cheap-duds seed 280 #18, yr 5.5, critic gen 0) | 0 |
| experimenter | ref_era_bar_0.08 | all | 6000 | 7.45 | 7.46 | 299 (5.0%) | 299 (5.0%) | 287 (4.8%) | 446 (7.4%) | 559 (9.3%) | 2046 (34.1%) | 36% of 300 | 0/1/2 | 8.66/9.11/9.46/9.8 | 9.84 "Wild Echo" (A9.75/C9.92; experimenter seed 53 #19, yr 5.8, critic gen 0) | 1995 |
| self-funder | ref_era_bar_0.08 | all | 6000 | 6.44 | 6.45 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 28 (0.5%) | 100% of 300 | 0/0/0 | 7.14/7.53/7.97/8.28 | 8.35 "Red Echo" (A8.26/C8.44; self-funder seed 87 #18, yr 5.5, critic gen 0) | 75 |
| selective-self-funder | ref_era_bar_0.08 | all | 6000 | 7.78 | 7.72 | 474 (7.9%) | 474 (7.9%) | 454 (7.6%) | 774 (12.9%) | 763 (12.7%) | 2902 (48.4%) | 26% of 300 | 0/1/4 | 8.84/9.27/9.62/10 | 10.00 "Silver Code" (A10/C10; selective-self-funder seed 126 #20, yr 6.2, critic gen 0) | 3010 |
| famous-star | ref_era_bar_0.08 | all | 6000 | 6.09 | 6.14 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 100% of 300 | 0/0/0 | 6.69/6.95/7.27/7.59 | 7.69 "Last Code" (A7.58/C7.79; famous-star seed 126 #19, yr 5.8, critic gen 0) | 0 |
| balanced | critic_mild | all | 6000 | 7.95 | 7.88 | 803 (13.4%) | 803 (13.4%) | 779 (13.0%) | 1009 (16.8%) | 1105 (18.4%) | 3364 (56.1%) | 11% of 300 | 0/2/5 | 8.98/9.39/9.74/10 | 10.00 "Hollow Code" (A10/C10; balanced seed 58 #17, yr 5.2, critic gen 0) | 3425 |
| quality-first | critic_mild | all | 6000 | 7.90 | 7.84 | 679 (11.3%) | 679 (11.3%) | 653 (10.9%) | 893 (14.9%) | 968 (16.1%) | 3244 (54.1%) | 5% of 300 | 1/2/4 | 9.06/9.41/9.73/10 | 10.00 "Last Signal" (A10/C10; quality-first seed 53 #18, yr 5.5, critic gen 0) | 2855 |
| franchise-builder | critic_mild | all | 6000 | 7.19 | 7.14 | 40 (0.7%) | 40 (0.7%) | 40 (0.7%) | 91 (1.5%) | 119 (2.0%) | 696 (11.6%) | 97% of 300 | 0/0/0 | 7.61/8/8.57/9.56 | 9.61 "Wild Signal 6" (A9.53/C9.68; franchise-builder seed 300 #15, yr 4.6, critic gen 0) | 2225 |
| repeat-farmer | critic_mild | all | 6000 | 7.07 | 7.06 | 15 (0.3%) | 15 (0.3%) | 15 (0.3%) | 28 (0.5%) | 40 (0.7%) | 592 (9.9%) | 99% of 300 | 0/0/0 | 7.62/8.03/8.54/8.97 | 9.58 "Iron Pulse" (A9.49/C9.67; repeat-farmer seed 38 #9, yr 2.8, critic gen 0) | 1750 |
| cheap-duds | critic_mild | all | 6000 | 6.00 | 6.15 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 100% of 300 | 0/0/0 | 6.8/7.14/7.54/7.82 | 7.93 "Red Echo" (A7.77/C8.09; cheap-duds seed 280 #18, yr 5.5, critic gen 0) | 0 |
| experimenter | critic_mild | all | 6000 | 7.68 | 7.67 | 568 (9.5%) | 568 (9.5%) | 538 (9.0%) | 888 (14.8%) | 785 (13.1%) | 2640 (44.0%) | 15% of 300 | 0/2/4 | 8.95/9.34/9.68/10 | 10.00 "Dead Frequency" (A10/C10; experimenter seed 10 #18, yr 5.5, critic gen 0) | 2435 |
| self-funder | critic_mild | all | 6000 | 6.71 | 6.69 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 7 (0.1%) | 158 (2.6%) | 100% of 300 | 0/0/0 | 7.49/7.92/8.41/8.7 | 8.90 "Iron Shadow" (A8.8/C9; self-funder seed 93 #20, yr 6.2, critic gen 0) | 310 |
| selective-self-funder | critic_mild | all | 6000 | 7.94 | 7.89 | 847 (14.1%) | 847 (14.1%) | 811 (13.5%) | 994 (16.6%) | 1114 (18.6%) | 3356 (55.9%) | 8% of 300 | 1/3/5.1 | 9.03/9.41/9.75/10 | 10.00 "Last Rising" (A10/C10; selective-self-funder seed 38 #17, yr 5.2, critic gen 0) | 3462.5 |
| famous-star | critic_mild | all | 6000 | 6.32 | 6.36 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 5 (0.1%) | 100% of 300 | 0/0/0 | 7/7.3/7.64/8.04 | 8.11 "Last Code" (A8/C8.21; famous-star seed 126 #19, yr 5.8, critic gen 0) | 0 |
| balanced | critic_moderate | all | 6000 | 7.95 | 7.87 | 779 (13.0%) | 779 (13.0%) | 758 (12.6%) | 1009 (16.8%) | 1045 (17.4%) | 3347 (55.8%) | 12% of 300 | 0/2/5 | 8.97/9.37/9.73/10 | 10.00 "Hollow Code" (A10/C10; balanced seed 58 #17, yr 5.2, critic gen 0) | 3377.5 |
| quality-first | critic_moderate | all | 6000 | 7.90 | 7.82 | 656 (10.9%) | 656 (10.9%) | 633 (10.6%) | 893 (14.9%) | 895 (14.9%) | 3232 (53.9%) | 6% of 300 | 1/2/4 | 9.04/9.4/9.72/10 | 10.00 "Last Signal" (A10/C10; quality-first seed 53 #18, yr 5.5, critic gen 0) | 2827.5 |
| franchise-builder | critic_moderate | all | 6000 | 7.19 | 7.13 | 39 (0.7%) | 39 (0.7%) | 39 (0.7%) | 91 (1.5%) | 117 (1.9%) | 696 (11.6%) | 98% of 300 | 0/0/0 | 7.61/8/8.57/9.56 | 9.61 "Wild Signal 6" (A9.53/C9.68; franchise-builder seed 300 #15, yr 4.6, critic gen 0) | 2225 |
| repeat-farmer | critic_moderate | all | 6000 | 7.07 | 7.04 | 15 (0.3%) | 15 (0.3%) | 15 (0.3%) | 28 (0.5%) | 40 (0.7%) | 592 (9.9%) | 99% of 300 | 0/0/0 | 7.62/8.03/8.54/8.97 | 9.58 "Iron Pulse" (A9.49/C9.67; repeat-farmer seed 38 #9, yr 2.8, critic gen 0) | 1750 |
| cheap-duds | critic_moderate | all | 6000 | 6.00 | 6.14 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 100% of 300 | 0/0/0 | 6.8/7.13/7.49/7.76 | 7.93 "Red Echo" (A7.77/C8.09; cheap-duds seed 280 #18, yr 5.5, critic gen 0) | 0 |
| experimenter | critic_moderate | all | 6000 | 7.68 | 7.66 | 529 (8.8%) | 529 (8.8%) | 502 (8.4%) | 888 (14.8%) | 755 (12.6%) | 2626 (43.8%) | 16% of 300 | 0/2/3 | 8.92/9.3/9.65/10 | 10.00 "Dead Frequency" (A10/C10; experimenter seed 10 #18, yr 5.5, critic gen 0) | 2377.5 |
| self-funder | critic_moderate | all | 6000 | 6.71 | 6.68 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 1 (0.0%) | 149 (2.5%) | 100% of 300 | 0/0/0 | 7.48/7.91/8.38/8.68 | 8.83 "Midnight Legacy" (A8.74/C8.92; self-funder seed 74 #19, yr 5.8, critic gen 0) | 310 |
| selective-self-funder | critic_moderate | all | 6000 | 7.94 | 7.87 | 821 (13.7%) | 821 (13.7%) | 786 (13.1%) | 994 (16.6%) | 1052 (17.5%) | 3336 (55.6%) | 8% of 300 | 1/2/5 | 9.03/9.4/9.73/10 | 10.00 "Last Rising" (A10/C10; selective-self-funder seed 38 #17, yr 5.2, critic gen 0) | 3427.5 |
| famous-star | critic_moderate | all | 6000 | 6.32 | 6.35 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 1 (0.0%) | 100% of 300 | 0/0/0 | 7/7.28/7.6/7.92 | 8.11 "Last Code" (A8/C8.21; famous-star seed 126 #19, yr 5.8, critic gen 0) | 0 |
| balanced | critic_strong | all | 6000 | 7.95 | 7.80 | 661 (11.0%) | 661 (11.0%) | 636 (10.6%) | 1011 (16.9%) | 868 (14.5%) | 3251 (54.2%) | 18% of 300 | 0/2/5 | 8.92/9.29/9.68/10 | 10.00 "Iron Shadow" (A10/C10; balanced seed 115 #14, yr 4.3, critic gen 0) | 3255 |
| quality-first | critic_strong | all | 6000 | 7.90 | 7.75 | 536 (8.9%) | 536 (8.9%) | 518 (8.6%) | 893 (14.9%) | 734 (12.2%) | 3168 (52.8%) | 12% of 300 | 0/2/3 | 8.98/9.3/9.67/10 | 10.00 "Dead Pulse" (A10/C10; quality-first seed 56 #15, yr 4.6, critic gen 0) | 2715 |
| franchise-builder | critic_strong | all | 6000 | 7.20 | 7.07 | 38 (0.6%) | 38 (0.6%) | 38 (0.6%) | 92 (1.5%) | 114 (1.9%) | 680 (11.3%) | 97% of 300 | 0/0/0 | 7.61/8.02/8.58/9.56 | 9.61 "Wild Signal 6" (A9.53/C9.68; franchise-builder seed 300 #15, yr 4.6, critic gen 0) | 2225 |
| repeat-farmer | critic_strong | all | 6000 | 7.07 | 6.99 | 14 (0.2%) | 14 (0.2%) | 14 (0.2%) | 28 (0.5%) | 37 (0.6%) | 590 (9.8%) | 99% of 300 | 0/0/0 | 7.62/8.03/8.54/8.97 | 9.58 "Iron Pulse" (A9.49/C9.67; repeat-farmer seed 38 #9, yr 2.8, critic gen 0) | 1750 |
| cheap-duds | critic_strong | all | 6000 | 6.00 | 6.09 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 100% of 300 | 0/0/0 | 6.76/7.09/7.42/7.66 | 7.73 "Red Echo" (A7.77/C7.68; cheap-duds seed 280 #18, yr 5.5, critic gen 1) | 0 |
| experimenter | critic_strong | all | 6000 | 7.68 | 7.59 | 444 (7.4%) | 444 (7.4%) | 431 (7.2%) | 886 (14.8%) | 522 (8.7%) | 2566 (42.8%) | 22% of 300 | 0/1/3 | 8.82/9.22/9.59/9.96 | 9.99 "Dead Edge" (A9.97/C10; experimenter seed 52 #16, yr 4.9, critic gen 0) | 2215 |
| self-funder | critic_strong | all | 6000 | 6.71 | 6.62 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 106 (1.8%) | 100% of 300 | 0/0/0 | 7.44/7.83/8.32/8.64 | 8.68 "Lost Frequency" (A8.59/C8.77; self-funder seed 58 #16, yr 4.9, critic gen 0) | 300 |
| selective-self-funder | critic_strong | all | 6000 | 7.94 | 7.81 | 698 (11.6%) | 698 (11.6%) | 661 (11.0%) | 993 (16.6%) | 893 (14.9%) | 3259 (54.3%) | 15% of 300 | 0/2/5 | 8.97/9.32/9.71/10 | 10.00 "Silver Edge" (A10/C10; selective-self-funder seed 46 #12, yr 3.7, critic gen 0) | 3312.5 |
| famous-star | critic_strong | all | 6000 | 6.32 | 6.29 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 100% of 300 | 0/0/0 | 6.94/7.22/7.55/7.9 | 7.97 "Iron Signal" (A7.86/C8.07; famous-star seed 9 #16, yr 4.9, critic gen 0) | 0 |
| balanced | critic_moderate_subtract | all | 6000 | 7.95 | 7.86 | 776 (12.9%) | 776 (12.9%) | 755 (12.6%) | 1009 (16.8%) | 1038 (17.3%) | 3341 (55.7%) | 12% of 300 | 0/2/5 | 8.97/9.37/9.73/10 | 10.00 "Hollow Code" (A10/C10; balanced seed 58 #17, yr 5.2, critic gen 0) | 3375 |
| quality-first | critic_moderate_subtract | all | 6000 | 7.90 | 7.82 | 655 (10.9%) | 655 (10.9%) | 630 (10.5%) | 893 (14.9%) | 891 (14.8%) | 3227 (53.8%) | 6% of 300 | 1/2/4 | 9.04/9.4/9.72/10 | 10.00 "Last Signal" (A10/C10; quality-first seed 53 #18, yr 5.5, critic gen 0) | 2827.5 |
| franchise-builder | critic_moderate_subtract | all | 6000 | 7.19 | 7.12 | 39 (0.7%) | 39 (0.7%) | 39 (0.7%) | 91 (1.5%) | 116 (1.9%) | 696 (11.6%) | 98% of 300 | 0/0/0 | 7.61/8/8.57/9.56 | 9.61 "Wild Signal 6" (A9.53/C9.68; franchise-builder seed 300 #15, yr 4.6, critic gen 0) | 2225 |
| repeat-farmer | critic_moderate_subtract | all | 6000 | 7.07 | 7.04 | 15 (0.3%) | 15 (0.3%) | 15 (0.3%) | 28 (0.5%) | 40 (0.7%) | 592 (9.9%) | 99% of 300 | 0/0/0 | 7.62/8.03/8.54/8.97 | 9.58 "Iron Pulse" (A9.49/C9.67; repeat-farmer seed 38 #9, yr 2.8, critic gen 0) | 1750 |
| cheap-duds | critic_moderate_subtract | all | 6000 | 6.00 | 6.13 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 100% of 300 | 0/0/0 | 6.78/7.13/7.49/7.76 | 7.93 "Red Echo" (A7.77/C8.09; cheap-duds seed 280 #18, yr 5.5, critic gen 0) | 0 |
| experimenter | critic_moderate_subtract | all | 6000 | 7.68 | 7.65 | 527 (8.8%) | 527 (8.8%) | 501 (8.3%) | 888 (14.8%) | 743 (12.4%) | 2624 (43.7%) | 16% of 300 | 0/2/3 | 8.92/9.3/9.65/10 | 10.00 "Dead Frequency" (A10/C10; experimenter seed 10 #18, yr 5.5, critic gen 0) | 2367.5 |
| self-funder | critic_moderate_subtract | all | 6000 | 6.71 | 6.67 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 1 (0.0%) | 146 (2.4%) | 100% of 300 | 0/0/0 | 7.48/7.91/8.37/8.68 | 8.83 "Midnight Legacy" (A8.74/C8.92; self-funder seed 74 #19, yr 5.8, critic gen 0) | 310 |
| selective-self-funder | critic_moderate_subtract | all | 6000 | 7.94 | 7.87 | 819 (13.7%) | 819 (13.7%) | 783 (13.1%) | 994 (16.6%) | 1050 (17.5%) | 3334 (55.6%) | 8% of 300 | 1/2/5 | 9.03/9.4/9.73/10 | 10.00 "Last Rising" (A10/C10; selective-self-funder seed 38 #17, yr 5.2, critic gen 0) | 3427.5 |
| famous-star | critic_moderate_subtract | all | 6000 | 6.32 | 6.34 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 1 (0.0%) | 100% of 300 | 0/0/0 | 7/7.28/7.6/7.92 | 8.11 "Last Code" (A8/C8.21; famous-star seed 126 #19, yr 5.8, critic gen 0) | 0 |
| balanced | audience_mild | all | 6000 | 7.95 | 7.88 | 803 (13.4%) | 803 (13.4%) | 779 (13.0%) | 1009 (16.8%) | 1105 (18.4%) | 3364 (56.1%) | 11% of 300 | 0/2/5 | 8.98/9.39/9.74/10 | 10.00 "Hollow Code" (A10/C10; balanced seed 58 #17, yr 5.2, critic gen 0) | 3425 |
| quality-first | audience_mild | all | 6000 | 7.90 | 7.84 | 679 (11.3%) | 679 (11.3%) | 653 (10.9%) | 893 (14.9%) | 968 (16.1%) | 3244 (54.1%) | 5% of 300 | 1/2/4 | 9.06/9.41/9.73/10 | 10.00 "Last Signal" (A10/C10; quality-first seed 53 #18, yr 5.5, critic gen 0) | 2855 |
| franchise-builder | audience_mild | all | 6000 | 7.19 | 7.14 | 40 (0.7%) | 40 (0.7%) | 40 (0.7%) | 91 (1.5%) | 119 (2.0%) | 696 (11.6%) | 97% of 300 | 0/0/0 | 7.61/8/8.57/9.56 | 9.61 "Wild Signal 6" (A9.53/C9.68; franchise-builder seed 300 #15, yr 4.6, critic gen 0) | 2225 |
| repeat-farmer | audience_mild | all | 6000 | 7.07 | 7.06 | 15 (0.3%) | 15 (0.3%) | 15 (0.3%) | 28 (0.5%) | 40 (0.7%) | 592 (9.9%) | 99% of 300 | 0/0/0 | 7.62/8.03/8.54/8.97 | 9.58 "Iron Pulse" (A9.49/C9.67; repeat-farmer seed 38 #9, yr 2.8, critic gen 0) | 1750 |
| cheap-duds | audience_mild | all | 6000 | 6.00 | 6.15 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 100% of 300 | 0/0/0 | 6.8/7.14/7.54/7.82 | 7.93 "Red Echo" (A7.77/C8.09; cheap-duds seed 280 #18, yr 5.5, critic gen 0) | 0 |
| experimenter | audience_mild | all | 6000 | 7.68 | 7.67 | 568 (9.5%) | 568 (9.5%) | 538 (9.0%) | 888 (14.8%) | 785 (13.1%) | 2640 (44.0%) | 15% of 300 | 0/2/4 | 8.95/9.34/9.68/10 | 10.00 "Dead Frequency" (A10/C10; experimenter seed 10 #18, yr 5.5, critic gen 0) | 2435 |
| self-funder | audience_mild | all | 6000 | 6.71 | 6.69 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 7 (0.1%) | 158 (2.6%) | 100% of 300 | 0/0/0 | 7.49/7.92/8.41/8.7 | 8.90 "Iron Shadow" (A8.8/C9; self-funder seed 93 #20, yr 6.2, critic gen 0) | 310 |
| selective-self-funder | audience_mild | all | 6000 | 7.94 | 7.89 | 847 (14.1%) | 847 (14.1%) | 811 (13.5%) | 994 (16.6%) | 1114 (18.6%) | 3356 (55.9%) | 8% of 300 | 1/3/5.1 | 9.03/9.41/9.75/10 | 10.00 "Last Rising" (A10/C10; selective-self-funder seed 38 #17, yr 5.2, critic gen 0) | 3462.5 |
| famous-star | audience_mild | all | 6000 | 6.32 | 6.36 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 5 (0.1%) | 100% of 300 | 0/0/0 | 7/7.3/7.64/8.04 | 8.11 "Last Code" (A8/C8.21; famous-star seed 126 #19, yr 5.8, critic gen 0) | 0 |
| balanced | audience_moderate | all | 6000 | 7.95 | 7.88 | 803 (13.4%) | 803 (13.4%) | 779 (13.0%) | 1009 (16.8%) | 1105 (18.4%) | 3364 (56.1%) | 11% of 300 | 0/2/5 | 8.98/9.39/9.74/10 | 10.00 "Hollow Code" (A10/C10; balanced seed 58 #17, yr 5.2, critic gen 0) | 3425 |
| quality-first | audience_moderate | all | 6000 | 7.90 | 7.84 | 679 (11.3%) | 679 (11.3%) | 653 (10.9%) | 893 (14.9%) | 968 (16.1%) | 3244 (54.1%) | 5% of 300 | 1/2/4 | 9.06/9.41/9.73/10 | 10.00 "Last Signal" (A10/C10; quality-first seed 53 #18, yr 5.5, critic gen 0) | 2855 |
| franchise-builder | audience_moderate | all | 6000 | 7.19 | 7.14 | 40 (0.7%) | 40 (0.7%) | 40 (0.7%) | 91 (1.5%) | 119 (2.0%) | 696 (11.6%) | 97% of 300 | 0/0/0 | 7.61/8/8.57/9.56 | 9.61 "Wild Signal 6" (A9.53/C9.68; franchise-builder seed 300 #15, yr 4.6, critic gen 0) | 2225 |
| repeat-farmer | audience_moderate | all | 6000 | 7.07 | 7.06 | 15 (0.3%) | 15 (0.3%) | 15 (0.3%) | 28 (0.5%) | 40 (0.7%) | 592 (9.9%) | 99% of 300 | 0/0/0 | 7.62/8.03/8.54/8.97 | 9.58 "Iron Pulse" (A9.49/C9.67; repeat-farmer seed 38 #9, yr 2.8, critic gen 0) | 1750 |
| cheap-duds | audience_moderate | all | 6000 | 6.00 | 6.15 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 100% of 300 | 0/0/0 | 6.8/7.14/7.54/7.82 | 7.93 "Red Echo" (A7.77/C8.09; cheap-duds seed 280 #18, yr 5.5, critic gen 0) | 0 |
| experimenter | audience_moderate | all | 6000 | 7.68 | 7.67 | 568 (9.5%) | 568 (9.5%) | 538 (9.0%) | 888 (14.8%) | 785 (13.1%) | 2640 (44.0%) | 15% of 300 | 0/2/4 | 8.95/9.34/9.68/10 | 10.00 "Dead Frequency" (A10/C10; experimenter seed 10 #18, yr 5.5, critic gen 0) | 2435 |
| self-funder | audience_moderate | all | 6000 | 6.71 | 6.69 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 7 (0.1%) | 158 (2.6%) | 100% of 300 | 0/0/0 | 7.49/7.92/8.41/8.7 | 8.90 "Iron Shadow" (A8.8/C9; self-funder seed 93 #20, yr 6.2, critic gen 0) | 310 |
| selective-self-funder | audience_moderate | all | 6000 | 7.94 | 7.89 | 847 (14.1%) | 847 (14.1%) | 811 (13.5%) | 994 (16.6%) | 1114 (18.6%) | 3356 (55.9%) | 8% of 300 | 1/3/5.1 | 9.03/9.41/9.75/10 | 10.00 "Last Rising" (A10/C10; selective-self-funder seed 38 #17, yr 5.2, critic gen 0) | 3462.5 |
| famous-star | audience_moderate | all | 6000 | 6.32 | 6.36 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 5 (0.1%) | 100% of 300 | 0/0/0 | 7/7.3/7.64/8.04 | 8.11 "Last Code" (A8/C8.21; famous-star seed 126 #19, yr 5.8, critic gen 0) | 0 |
| balanced | audience_strong | all | 6000 | 7.95 | 7.88 | 803 (13.4%) | 803 (13.4%) | 779 (13.0%) | 1009 (16.8%) | 1105 (18.4%) | 3364 (56.1%) | 11% of 300 | 0/2/5 | 8.98/9.39/9.74/10 | 10.00 "Hollow Code" (A10/C10; balanced seed 58 #17, yr 5.2, critic gen 0) | 3425 |
| quality-first | audience_strong | all | 6000 | 7.90 | 7.84 | 679 (11.3%) | 679 (11.3%) | 653 (10.9%) | 893 (14.9%) | 968 (16.1%) | 3244 (54.1%) | 5% of 300 | 1/2/4 | 9.06/9.41/9.73/10 | 10.00 "Last Signal" (A10/C10; quality-first seed 53 #18, yr 5.5, critic gen 0) | 2855 |
| franchise-builder | audience_strong | all | 6000 | 7.19 | 7.14 | 40 (0.7%) | 40 (0.7%) | 40 (0.7%) | 91 (1.5%) | 119 (2.0%) | 696 (11.6%) | 97% of 300 | 0/0/0 | 7.61/8/8.57/9.56 | 9.61 "Wild Signal 6" (A9.53/C9.68; franchise-builder seed 300 #15, yr 4.6, critic gen 0) | 2225 |
| repeat-farmer | audience_strong | all | 6000 | 7.07 | 7.06 | 15 (0.3%) | 15 (0.3%) | 15 (0.3%) | 28 (0.5%) | 40 (0.7%) | 592 (9.9%) | 99% of 300 | 0/0/0 | 7.62/8.03/8.54/8.97 | 9.58 "Iron Pulse" (A9.49/C9.67; repeat-farmer seed 38 #9, yr 2.8, critic gen 0) | 1750 |
| cheap-duds | audience_strong | all | 6000 | 6.00 | 6.15 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 100% of 300 | 0/0/0 | 6.8/7.14/7.54/7.82 | 7.93 "Red Echo" (A7.77/C8.09; cheap-duds seed 280 #18, yr 5.5, critic gen 0) | 0 |
| experimenter | audience_strong | all | 6000 | 7.68 | 7.67 | 568 (9.5%) | 568 (9.5%) | 538 (9.0%) | 888 (14.8%) | 785 (13.1%) | 2640 (44.0%) | 15% of 300 | 0/2/4 | 8.95/9.34/9.68/10 | 10.00 "Dead Frequency" (A10/C10; experimenter seed 10 #18, yr 5.5, critic gen 0) | 2435 |
| self-funder | audience_strong | all | 6000 | 6.71 | 6.69 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 7 (0.1%) | 158 (2.6%) | 100% of 300 | 0/0/0 | 7.49/7.92/8.41/8.7 | 8.90 "Iron Shadow" (A8.8/C9; self-funder seed 93 #20, yr 6.2, critic gen 0) | 310 |
| selective-self-funder | audience_strong | all | 6000 | 7.94 | 7.89 | 847 (14.1%) | 847 (14.1%) | 811 (13.5%) | 994 (16.6%) | 1114 (18.6%) | 3356 (55.9%) | 8% of 300 | 1/3/5.1 | 9.03/9.41/9.75/10 | 10.00 "Last Rising" (A10/C10; selective-self-funder seed 38 #17, yr 5.2, critic gen 0) | 3462.5 |
| famous-star | audience_strong | all | 6000 | 6.32 | 6.36 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 5 (0.1%) | 100% of 300 | 0/0/0 | 7/7.3/7.64/8.04 | 8.11 "Last Code" (A8/C8.21; famous-star seed 126 #19, yr 5.8, critic gen 0) | 0 |
| balanced | combo_A | all | 6000 | 7.95 | 7.88 | 803 (13.4%) | 803 (13.4%) | 779 (13.0%) | 1009 (16.8%) | 1105 (18.4%) | 3364 (56.1%) | 11% of 300 | 0/2/5 | 8.98/9.39/9.74/10 | 10.00 "Hollow Code" (A10/C10; balanced seed 58 #17, yr 5.2, critic gen 0) | 3425 |
| quality-first | combo_A | all | 6000 | 7.90 | 7.84 | 679 (11.3%) | 679 (11.3%) | 653 (10.9%) | 893 (14.9%) | 968 (16.1%) | 3244 (54.1%) | 5% of 300 | 1/2/4 | 9.06/9.41/9.73/10 | 10.00 "Last Signal" (A10/C10; quality-first seed 53 #18, yr 5.5, critic gen 0) | 2855 |
| franchise-builder | combo_A | all | 6000 | 7.19 | 7.14 | 40 (0.7%) | 40 (0.7%) | 40 (0.7%) | 91 (1.5%) | 119 (2.0%) | 696 (11.6%) | 97% of 300 | 0/0/0 | 7.61/8/8.57/9.56 | 9.61 "Wild Signal 6" (A9.53/C9.68; franchise-builder seed 300 #15, yr 4.6, critic gen 0) | 2225 |
| repeat-farmer | combo_A | all | 6000 | 7.07 | 7.06 | 15 (0.3%) | 15 (0.3%) | 15 (0.3%) | 28 (0.5%) | 40 (0.7%) | 592 (9.9%) | 99% of 300 | 0/0/0 | 7.62/8.03/8.54/8.97 | 9.58 "Iron Pulse" (A9.49/C9.67; repeat-farmer seed 38 #9, yr 2.8, critic gen 0) | 1750 |
| cheap-duds | combo_A | all | 6000 | 6.00 | 6.15 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 100% of 300 | 0/0/0 | 6.8/7.14/7.54/7.82 | 7.93 "Red Echo" (A7.77/C8.09; cheap-duds seed 280 #18, yr 5.5, critic gen 0) | 0 |
| experimenter | combo_A | all | 6000 | 7.68 | 7.67 | 568 (9.5%) | 568 (9.5%) | 538 (9.0%) | 888 (14.8%) | 785 (13.1%) | 2640 (44.0%) | 15% of 300 | 0/2/4 | 8.95/9.34/9.68/10 | 10.00 "Dead Frequency" (A10/C10; experimenter seed 10 #18, yr 5.5, critic gen 0) | 2435 |
| self-funder | combo_A | all | 6000 | 6.71 | 6.69 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 7 (0.1%) | 158 (2.6%) | 100% of 300 | 0/0/0 | 7.49/7.92/8.41/8.7 | 8.90 "Iron Shadow" (A8.8/C9; self-funder seed 93 #20, yr 6.2, critic gen 0) | 310 |
| selective-self-funder | combo_A | all | 6000 | 7.94 | 7.89 | 847 (14.1%) | 847 (14.1%) | 811 (13.5%) | 994 (16.6%) | 1114 (18.6%) | 3356 (55.9%) | 8% of 300 | 1/3/5.1 | 9.03/9.41/9.75/10 | 10.00 "Last Rising" (A10/C10; selective-self-funder seed 38 #17, yr 5.2, critic gen 0) | 3462.5 |
| famous-star | combo_A | all | 6000 | 6.32 | 6.36 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 5 (0.1%) | 100% of 300 | 0/0/0 | 7/7.3/7.64/8.04 | 8.11 "Last Code" (A8/C8.21; famous-star seed 126 #19, yr 5.8, critic gen 0) | 0 |
| balanced | combo_B | all | 6000 | 7.95 | 7.87 | 779 (13.0%) | 779 (13.0%) | 758 (12.6%) | 1009 (16.8%) | 1045 (17.4%) | 3347 (55.8%) | 12% of 300 | 0/2/5 | 8.97/9.37/9.73/10 | 10.00 "Hollow Code" (A10/C10; balanced seed 58 #17, yr 5.2, critic gen 0) | 3377.5 |
| quality-first | combo_B | all | 6000 | 7.90 | 7.82 | 656 (10.9%) | 656 (10.9%) | 633 (10.6%) | 893 (14.9%) | 895 (14.9%) | 3232 (53.9%) | 6% of 300 | 1/2/4 | 9.04/9.4/9.72/10 | 10.00 "Last Signal" (A10/C10; quality-first seed 53 #18, yr 5.5, critic gen 0) | 2827.5 |
| franchise-builder | combo_B | all | 6000 | 7.19 | 7.13 | 39 (0.7%) | 39 (0.7%) | 39 (0.7%) | 91 (1.5%) | 117 (1.9%) | 696 (11.6%) | 98% of 300 | 0/0/0 | 7.61/8/8.57/9.56 | 9.61 "Wild Signal 6" (A9.53/C9.68; franchise-builder seed 300 #15, yr 4.6, critic gen 0) | 2225 |
| repeat-farmer | combo_B | all | 6000 | 7.07 | 7.04 | 15 (0.3%) | 15 (0.3%) | 15 (0.3%) | 28 (0.5%) | 40 (0.7%) | 592 (9.9%) | 99% of 300 | 0/0/0 | 7.62/8.03/8.54/8.97 | 9.58 "Iron Pulse" (A9.49/C9.67; repeat-farmer seed 38 #9, yr 2.8, critic gen 0) | 1750 |
| cheap-duds | combo_B | all | 6000 | 6.00 | 6.14 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 100% of 300 | 0/0/0 | 6.8/7.13/7.49/7.76 | 7.93 "Red Echo" (A7.77/C8.09; cheap-duds seed 280 #18, yr 5.5, critic gen 0) | 0 |
| experimenter | combo_B | all | 6000 | 7.68 | 7.66 | 529 (8.8%) | 529 (8.8%) | 502 (8.4%) | 888 (14.8%) | 755 (12.6%) | 2626 (43.8%) | 16% of 300 | 0/2/3 | 8.92/9.3/9.65/10 | 10.00 "Dead Frequency" (A10/C10; experimenter seed 10 #18, yr 5.5, critic gen 0) | 2377.5 |
| self-funder | combo_B | all | 6000 | 6.71 | 6.68 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 1 (0.0%) | 149 (2.5%) | 100% of 300 | 0/0/0 | 7.48/7.91/8.38/8.68 | 8.83 "Midnight Legacy" (A8.74/C8.92; self-funder seed 74 #19, yr 5.8, critic gen 0) | 310 |
| selective-self-funder | combo_B | all | 6000 | 7.94 | 7.87 | 821 (13.7%) | 821 (13.7%) | 786 (13.1%) | 994 (16.6%) | 1052 (17.5%) | 3336 (55.6%) | 8% of 300 | 1/2/5 | 9.03/9.4/9.73/10 | 10.00 "Last Rising" (A10/C10; selective-self-funder seed 38 #17, yr 5.2, critic gen 0) | 3427.5 |
| famous-star | combo_B | all | 6000 | 6.32 | 6.35 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 1 (0.0%) | 100% of 300 | 0/0/0 | 7/7.28/7.6/7.92 | 8.11 "Last Code" (A8/C8.21; famous-star seed 126 #19, yr 5.8, critic gen 0) | 0 |
| balanced | combo_C | all | 6000 | 7.95 | 7.80 | 661 (11.0%) | 661 (11.0%) | 636 (10.6%) | 1011 (16.9%) | 868 (14.5%) | 3251 (54.2%) | 18% of 300 | 0/2/5 | 8.92/9.29/9.68/10 | 10.00 "Iron Shadow" (A10/C10; balanced seed 115 #14, yr 4.3, critic gen 0) | 3255 |
| quality-first | combo_C | all | 6000 | 7.90 | 7.75 | 536 (8.9%) | 536 (8.9%) | 518 (8.6%) | 893 (14.9%) | 734 (12.2%) | 3168 (52.8%) | 12% of 300 | 0/2/3 | 8.98/9.3/9.67/10 | 10.00 "Dead Pulse" (A10/C10; quality-first seed 56 #15, yr 4.6, critic gen 0) | 2715 |
| franchise-builder | combo_C | all | 6000 | 7.20 | 7.07 | 38 (0.6%) | 38 (0.6%) | 38 (0.6%) | 92 (1.5%) | 114 (1.9%) | 680 (11.3%) | 97% of 300 | 0/0/0 | 7.61/8.02/8.58/9.56 | 9.61 "Wild Signal 6" (A9.53/C9.68; franchise-builder seed 300 #15, yr 4.6, critic gen 0) | 2225 |
| repeat-farmer | combo_C | all | 6000 | 7.07 | 6.99 | 14 (0.2%) | 14 (0.2%) | 14 (0.2%) | 28 (0.5%) | 37 (0.6%) | 590 (9.8%) | 99% of 300 | 0/0/0 | 7.62/8.03/8.54/8.97 | 9.58 "Iron Pulse" (A9.49/C9.67; repeat-farmer seed 38 #9, yr 2.8, critic gen 0) | 1750 |
| cheap-duds | combo_C | all | 6000 | 6.00 | 6.09 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 100% of 300 | 0/0/0 | 6.76/7.09/7.42/7.66 | 7.73 "Red Echo" (A7.77/C7.68; cheap-duds seed 280 #18, yr 5.5, critic gen 1) | 0 |
| experimenter | combo_C | all | 6000 | 7.68 | 7.59 | 444 (7.4%) | 444 (7.4%) | 431 (7.2%) | 886 (14.8%) | 522 (8.7%) | 2566 (42.8%) | 22% of 300 | 0/1/3 | 8.82/9.22/9.59/9.96 | 9.99 "Dead Edge" (A9.97/C10; experimenter seed 52 #16, yr 4.9, critic gen 0) | 2215 |
| self-funder | combo_C | all | 6000 | 6.71 | 6.62 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 106 (1.8%) | 100% of 300 | 0/0/0 | 7.44/7.83/8.32/8.64 | 8.68 "Lost Frequency" (A8.59/C8.77; self-funder seed 58 #16, yr 4.9, critic gen 0) | 300 |
| selective-self-funder | combo_C | all | 6000 | 7.94 | 7.81 | 698 (11.6%) | 698 (11.6%) | 661 (11.0%) | 993 (16.6%) | 893 (14.9%) | 3259 (54.3%) | 15% of 300 | 0/2/5 | 8.97/9.32/9.71/10 | 10.00 "Silver Edge" (A10/C10; selective-self-funder seed 46 #12, yr 3.7, critic gen 0) | 3312.5 |
| famous-star | combo_C | all | 6000 | 6.32 | 6.29 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 100% of 300 | 0/0/0 | 6.94/7.22/7.55/7.9 | 7.97 "Iron Signal" (A7.86/C8.07; famous-star seed 9 #16, yr 4.9, critic gen 0) | 0 |

### Greatest single films (all strategies, whole sample; reproducible from seed + config hash)

| Variant | Best combined | Best Audience | Best Critic | Year band with most HoF |
|---|---|---|---|---|
| control | 10.00 "Dead Frequency" (A10/C10; experimenter seed 10 #18, yr 5.5, critic gen 0) | 10.00 "Dead Frequency" (A10/C10; experimenter seed 10 #18, yr 5.5, critic gen 0) | 10.00 "Dead Frequency" (A10/C10; experimenter seed 10 #18, yr 5.5, critic gen 0) | y5-10: 12.8% of 10800 |
| ref_no_era_bar | 10.00 "Wild Frequency" (A10/C10; experimenter seed 7 #16, yr 4.9, critic gen 0) | 10.00 "Wild Frequency" (A10/C10; experimenter seed 7 #16, yr 4.9, critic gen 0) | 10.00 "Wild Frequency" (A10/C10; experimenter seed 7 #16, yr 4.9, critic gen 0) | y5-10: 18.5% of 10800 |
| ref_era_bar_0.08 | 10.00 "Hollow Frequency" (A10/C10; quality-first seed 21 #20, yr 6.2, critic gen 0) | 10.00 "Hollow Frequency" (A10/C10; quality-first seed 21 #20, yr 6.2, critic gen 0) | 10.00 "Hollow Frequency" (A10/C10; quality-first seed 21 #20, yr 6.2, critic gen 0) | y5-10: 8.6% of 10800 |
| critic_mild | 10.00 "Dead Frequency" (A10/C10; experimenter seed 10 #18, yr 5.5, critic gen 0) | 10.00 "Dead Frequency" (A10/C10; experimenter seed 10 #18, yr 5.5, critic gen 0) | 10.00 "Dead Frequency" (A10/C10; experimenter seed 10 #18, yr 5.5, critic gen 0) | y5-10: 12.8% of 10800 |
| critic_moderate | 10.00 "Dead Frequency" (A10/C10; experimenter seed 10 #18, yr 5.5, critic gen 0) | 10.00 "Dead Frequency" (A10/C10; experimenter seed 10 #18, yr 5.5, critic gen 0) | 10.00 "Dead Frequency" (A10/C10; experimenter seed 10 #18, yr 5.5, critic gen 0) | y5-10: 11.8% of 10800 |
| critic_strong | 10.00 "Silver Edge" (A10/C10; selective-self-funder seed 46 #12, yr 3.7, critic gen 0) | 10.00 "Silver Edge" (A10/C10; selective-self-funder seed 46 #12, yr 3.7, critic gen 0) | 10.00 "Silver Edge" (A10/C10; selective-self-funder seed 46 #12, yr 3.7, critic gen 0) | y5-10: 7.7% of 10800 |
| critic_moderate_subtract | 10.00 "Dead Frequency" (A10/C10; experimenter seed 10 #18, yr 5.5, critic gen 0) | 10.00 "Dead Frequency" (A10/C10; experimenter seed 10 #18, yr 5.5, critic gen 0) | 10.00 "Dead Frequency" (A10/C10; experimenter seed 10 #18, yr 5.5, critic gen 0) | y5-10: 11.7% of 10800 |
| audience_mild | 10.00 "Dead Frequency" (A10/C10; experimenter seed 10 #18, yr 5.5, critic gen 0) | 10.00 "Dead Frequency" (A10/C10; experimenter seed 10 #18, yr 5.5, critic gen 0) | 10.00 "Dead Frequency" (A10/C10; experimenter seed 10 #18, yr 5.5, critic gen 0) | y5-10: 12.8% of 10800 |
| audience_moderate | 10.00 "Dead Frequency" (A10/C10; experimenter seed 10 #18, yr 5.5, critic gen 0) | 10.00 "Dead Frequency" (A10/C10; experimenter seed 10 #18, yr 5.5, critic gen 0) | 10.00 "Dead Frequency" (A10/C10; experimenter seed 10 #18, yr 5.5, critic gen 0) | y5-10: 12.8% of 10800 |
| audience_strong | 10.00 "Dead Frequency" (A10/C10; experimenter seed 10 #18, yr 5.5, critic gen 0) | 10.00 "Dead Frequency" (A10/C10; experimenter seed 10 #18, yr 5.5, critic gen 0) | 10.00 "Dead Frequency" (A10/C10; experimenter seed 10 #18, yr 5.5, critic gen 0) | y5-10: 12.8% of 10800 |
| combo_A | 10.00 "Dead Frequency" (A10/C10; experimenter seed 10 #18, yr 5.5, critic gen 0) | 10.00 "Dead Frequency" (A10/C10; experimenter seed 10 #18, yr 5.5, critic gen 0) | 10.00 "Dead Frequency" (A10/C10; experimenter seed 10 #18, yr 5.5, critic gen 0) | y5-10: 12.8% of 10800 |
| combo_B | 10.00 "Dead Frequency" (A10/C10; experimenter seed 10 #18, yr 5.5, critic gen 0) | 10.00 "Dead Frequency" (A10/C10; experimenter seed 10 #18, yr 5.5, critic gen 0) | 10.00 "Dead Frequency" (A10/C10; experimenter seed 10 #18, yr 5.5, critic gen 0) | y5-10: 11.8% of 10800 |
| combo_C | 10.00 "Silver Edge" (A10/C10; selective-self-funder seed 46 #12, yr 3.7, critic gen 0) | 10.00 "Silver Edge" (A10/C10; selective-self-funder seed 46 #12, yr 3.7, critic gen 0) | 10.00 "Silver Edge" (A10/C10; selective-self-funder seed 46 #12, yr 3.7, critic gen 0) | y5-10: 7.7% of 10800 |

### Great films by in-game year (all strategies pooled)

| Strategy | Config | Window | Films (n) | Avg Aud | Avg Crit | HoF n (%) | Avg ≥9 n (%) | Avg >9 n (%) | Aud ≥9 n (%) | Crit ≥9 n (%) | 8+ n (%) | Careers with 0 HoF | HoF/career p10/p50/p90 | Best/career p10/p50/p90/p99 | Best combined movie | Prestige median |
|---|---|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---|---|---|---:|
| ALL | control | y0-5 | 43200 | 7.08 | 7.08 | 1565 (3.6%) | 1565 (3.6%) | 1509 (3.5%) | 2362 (5.5%) | 2379 (5.5%) | 9814 (22.7%) | 70% of 2700 | 0/0/2 | 7/8.3/9.43/9.84 | 10.00 "Silver Edge" (A10/C10; selective-self-funder seed 46 #12, yr 3.7, critic gen 0) |  |
| ALL | control | y5-10 | 10800 | 7.65 | 7.61 | 1387 (12.8%) | 1387 (12.8%) | 1327 (12.3%) | 1541 (14.3%) | 1759 (16.3%) | 4241 (39.3%) | 68% of 2700 | 0/0/2 | 6.74/7.92/9.49/9.96 | 10.00 "Dead Frequency" (A10/C10; experimenter seed 10 #18, yr 5.5, critic gen 0) |  |
| ALL | ref_no_era_bar | y0-5 | 43200 | 7.25 | 7.24 | 2649 (6.1%) | 2649 (6.1%) | 2550 (5.9%) | 3402 (7.9%) | 3784 (8.8%) | 11943 (27.6%) | 60% of 2700 | 0/0/3 | 7.35/8.48/9.59/10 | 10.00 "Wild Frequency" (A10/C10; experimenter seed 7 #16, yr 4.9, critic gen 0) |  |
| ALL | ref_no_era_bar | y5-10 | 10800 | 7.91 | 7.85 | 2002 (18.5%) | 2002 (18.5%) | 1965 (18.2%) | 2538 (23.5%) | 2462 (22.8%) | 4953 (45.9%) | 60% of 2700 | 0/0/2 | 6.93/8.36/9.66/10 | 10.00 "Midnight Night 2" (A10/C10; balanced seed 10 #18, yr 5.5, critic gen 0) |  |
| ALL | ref_era_bar_0.08 | y0-5 | 43200 | 6.91 | 6.92 | 799 (1.9%) | 799 (1.9%) | 769 (1.8%) | 1553 (3.6%) | 1675 (3.9%) | 7693 (17.8%) | 81% of 2700 | 0/0/1 | 6.72/8.15/9.27/9.73 | 9.98 "Last Horizon" (A9.96/C10; quality-first seed 87 #16, yr 4.9, critic gen 0) |  |
| ALL | ref_era_bar_0.08 | y5-10 | 10800 | 7.42 | 7.40 | 927 (8.6%) | 927 (8.6%) | 886 (8.2%) | 1194 (11.1%) | 1151 (10.7%) | 3856 (35.7%) | 75% of 2700 | 0/0/1 | 6.54/7.59/9.35/9.78 | 10.00 "Hollow Frequency" (A10/C10; quality-first seed 21 #20, yr 6.2, critic gen 0) |  |
| ALL | critic_mild | y0-5 | 43200 | 7.08 | 7.08 | 1565 (3.6%) | 1565 (3.6%) | 1509 (3.5%) | 2362 (5.5%) | 2379 (5.5%) | 9814 (22.7%) | 70% of 2700 | 0/0/2 | 7/8.3/9.43/9.84 | 10.00 "Silver Edge" (A10/C10; selective-self-funder seed 46 #12, yr 3.7, critic gen 0) |  |
| ALL | critic_mild | y5-10 | 10800 | 7.65 | 7.61 | 1387 (12.8%) | 1387 (12.8%) | 1327 (12.3%) | 1541 (14.3%) | 1759 (16.3%) | 4241 (39.3%) | 68% of 2700 | 0/0/2 | 6.74/7.92/9.49/9.96 | 10.00 "Dead Frequency" (A10/C10; experimenter seed 10 #18, yr 5.5, critic gen 0) |  |
| ALL | critic_moderate | y0-5 | 43200 | 7.08 | 7.08 | 1565 (3.6%) | 1565 (3.6%) | 1509 (3.5%) | 2362 (5.5%) | 2379 (5.5%) | 9814 (22.7%) | 70% of 2700 | 0/0/2 | 7/8.3/9.43/9.84 | 10.00 "Silver Edge" (A10/C10; selective-self-funder seed 46 #12, yr 3.7, critic gen 0) |  |
| ALL | critic_moderate | y5-10 | 10800 | 7.65 | 7.54 | 1274 (11.8%) | 1274 (11.8%) | 1224 (11.3%) | 1541 (14.3%) | 1526 (14.1%) | 4165 (38.6%) | 69% of 2700 | 0/0/2 | 6.72/7.89/9.46/9.95 | 10.00 "Dead Frequency" (A10/C10; experimenter seed 10 #18, yr 5.5, critic gen 0) |  |
| ALL | critic_strong | y0-5 | 43200 | 7.08 | 7.08 | 1565 (3.6%) | 1565 (3.6%) | 1509 (3.5%) | 2362 (5.5%) | 2379 (5.5%) | 9814 (22.7%) | 70% of 2700 | 0/0/2 | 7/8.3/9.43/9.84 | 10.00 "Silver Edge" (A10/C10; selective-self-funder seed 46 #12, yr 3.7, critic gen 0) |  |
| ALL | critic_strong | y5-10 | 10800 | 7.65 | 7.24 | 826 (7.7%) | 826 (7.7%) | 789 (7.3%) | 1541 (14.3%) | 789 (7.3%) | 3806 (35.2%) | 78% of 2700 | 0/0/1 | 6.57/7.73/9.29/9.75 | 9.98 "Dead Code" (A10/C9.96; selective-self-funder seed 126 #20, yr 6.2, critic gen 1) |  |
| ALL | critic_moderate_subtract | y0-5 | 43200 | 7.08 | 7.08 | 1565 (3.6%) | 1565 (3.6%) | 1509 (3.5%) | 2362 (5.5%) | 2379 (5.5%) | 9814 (22.7%) | 70% of 2700 | 0/0/2 | 7/8.3/9.43/9.84 | 10.00 "Silver Edge" (A10/C10; selective-self-funder seed 46 #12, yr 3.7, critic gen 0) |  |
| ALL | critic_moderate_subtract | y5-10 | 10800 | 7.65 | 7.51 | 1266 (11.7%) | 1266 (11.7%) | 1214 (11.2%) | 1541 (14.3%) | 1500 (13.9%) | 4147 (38.4%) | 69% of 2700 | 0/0/2 | 6.72/7.88/9.46/9.95 | 10.00 "Dead Frequency" (A10/C10; experimenter seed 10 #18, yr 5.5, critic gen 0) |  |
| ALL | audience_mild | y0-5 | 43200 | 7.08 | 7.08 | 1565 (3.6%) | 1565 (3.6%) | 1509 (3.5%) | 2362 (5.5%) | 2379 (5.5%) | 9814 (22.7%) | 70% of 2700 | 0/0/2 | 7/8.3/9.43/9.84 | 10.00 "Silver Edge" (A10/C10; selective-self-funder seed 46 #12, yr 3.7, critic gen 0) |  |
| ALL | audience_mild | y5-10 | 10800 | 7.65 | 7.61 | 1387 (12.8%) | 1387 (12.8%) | 1327 (12.3%) | 1541 (14.3%) | 1759 (16.3%) | 4241 (39.3%) | 68% of 2700 | 0/0/2 | 6.74/7.92/9.49/9.96 | 10.00 "Dead Frequency" (A10/C10; experimenter seed 10 #18, yr 5.5, critic gen 0) |  |
| ALL | audience_moderate | y0-5 | 43200 | 7.08 | 7.08 | 1565 (3.6%) | 1565 (3.6%) | 1509 (3.5%) | 2362 (5.5%) | 2379 (5.5%) | 9814 (22.7%) | 70% of 2700 | 0/0/2 | 7/8.3/9.43/9.84 | 10.00 "Silver Edge" (A10/C10; selective-self-funder seed 46 #12, yr 3.7, critic gen 0) |  |
| ALL | audience_moderate | y5-10 | 10800 | 7.65 | 7.61 | 1387 (12.8%) | 1387 (12.8%) | 1327 (12.3%) | 1541 (14.3%) | 1759 (16.3%) | 4241 (39.3%) | 68% of 2700 | 0/0/2 | 6.74/7.92/9.49/9.96 | 10.00 "Dead Frequency" (A10/C10; experimenter seed 10 #18, yr 5.5, critic gen 0) |  |
| ALL | audience_strong | y0-5 | 43200 | 7.08 | 7.08 | 1565 (3.6%) | 1565 (3.6%) | 1509 (3.5%) | 2362 (5.5%) | 2379 (5.5%) | 9814 (22.7%) | 70% of 2700 | 0/0/2 | 7/8.3/9.43/9.84 | 10.00 "Silver Edge" (A10/C10; selective-self-funder seed 46 #12, yr 3.7, critic gen 0) |  |
| ALL | audience_strong | y5-10 | 10800 | 7.65 | 7.61 | 1387 (12.8%) | 1387 (12.8%) | 1327 (12.3%) | 1541 (14.3%) | 1759 (16.3%) | 4241 (39.3%) | 68% of 2700 | 0/0/2 | 6.74/7.92/9.49/9.96 | 10.00 "Dead Frequency" (A10/C10; experimenter seed 10 #18, yr 5.5, critic gen 0) |  |
| ALL | combo_A | y0-5 | 43200 | 7.08 | 7.08 | 1565 (3.6%) | 1565 (3.6%) | 1509 (3.5%) | 2362 (5.5%) | 2379 (5.5%) | 9814 (22.7%) | 70% of 2700 | 0/0/2 | 7/8.3/9.43/9.84 | 10.00 "Silver Edge" (A10/C10; selective-self-funder seed 46 #12, yr 3.7, critic gen 0) |  |
| ALL | combo_A | y5-10 | 10800 | 7.65 | 7.61 | 1387 (12.8%) | 1387 (12.8%) | 1327 (12.3%) | 1541 (14.3%) | 1759 (16.3%) | 4241 (39.3%) | 68% of 2700 | 0/0/2 | 6.74/7.92/9.49/9.96 | 10.00 "Dead Frequency" (A10/C10; experimenter seed 10 #18, yr 5.5, critic gen 0) |  |
| ALL | combo_B | y0-5 | 43200 | 7.08 | 7.08 | 1565 (3.6%) | 1565 (3.6%) | 1509 (3.5%) | 2362 (5.5%) | 2379 (5.5%) | 9814 (22.7%) | 70% of 2700 | 0/0/2 | 7/8.3/9.43/9.84 | 10.00 "Silver Edge" (A10/C10; selective-self-funder seed 46 #12, yr 3.7, critic gen 0) |  |
| ALL | combo_B | y5-10 | 10800 | 7.65 | 7.54 | 1274 (11.8%) | 1274 (11.8%) | 1224 (11.3%) | 1541 (14.3%) | 1526 (14.1%) | 4165 (38.6%) | 69% of 2700 | 0/0/2 | 6.72/7.89/9.46/9.95 | 10.00 "Dead Frequency" (A10/C10; experimenter seed 10 #18, yr 5.5, critic gen 0) |  |
| ALL | combo_C | y0-5 | 43200 | 7.08 | 7.08 | 1565 (3.6%) | 1565 (3.6%) | 1509 (3.5%) | 2362 (5.5%) | 2379 (5.5%) | 9814 (22.7%) | 70% of 2700 | 0/0/2 | 7/8.3/9.43/9.84 | 10.00 "Silver Edge" (A10/C10; selective-self-funder seed 46 #12, yr 3.7, critic gen 0) |  |
| ALL | combo_C | y5-10 | 10800 | 7.65 | 7.24 | 826 (7.7%) | 826 (7.7%) | 789 (7.3%) | 1541 (14.3%) | 789 (7.3%) | 3806 (35.2%) | 78% of 2700 | 0/0/1 | 6.57/7.73/9.29/9.75 | 9.98 "Dead Code" (A10/C9.96; selective-self-funder seed 126 #20, yr 6.2, critic gen 1) |  |

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
| balanced | ref_no_era_bar | $3.78M | 3955 | 614.1 | 71% | 100% · #6 | 100% · #6 | 100% | 0 | 100% · #10 | 100% · #10 | 100% | 0 |
| quality-first | ref_no_era_bar | $3.85M | 3242.5 | 503.5 | 57% | 100% · #6 | 100% · #6 | 100% | 0 | 100% · #11 | 100% · #11 | 100% | 0 |
| franchise-builder | ref_no_era_bar | $3.49M | 2372.5 | 368.4 | 71% | 100% · #6 | 100% · #6 | 100% | 0 | 100% · #9 | 100% · #9 | 100% | 0 |
| repeat-farmer | ref_no_era_bar | $3.97M | 1847.5 | 286.9 | 63% | 100% · #6 | 100% · #6 | 100% | 0 | 100% · #10 | 99% · #10 | 100% | 0 |
| cheap-duds | ref_no_era_bar | $2.81M | 75 | 11.6 | 4% | 15% · #19 | 0% · #— | 100% | 0 | 0% · #— | 0% · #— | 0% | 0 |
| experimenter | ref_no_era_bar | $3.73M | 3110 | 482.9 | 56% | 100% · #7 | 100% · #7 | 100% | 0 | 100% · #12 | 100% · #12 | 100% | 0 |
| self-funder | ref_no_era_bar | $0.33M | 850 | 132.4 | 100% | 100% · #14 | 0% · #— | 64% | 0 | 30% · #20 | 0% · #— | 0% | 0 |
| selective-self-funder | ref_no_era_bar | $3.79M | 3942.5 | 612.2 | 67% | 100% · #6 | 100% · #6 | 100% | 0 | 100% · #10 | 100% · #10 | 100% | 0 |
| famous-star | ref_no_era_bar | $3.70M | 150 | 23.3 | 100% | 43% · #18 | 0% · #— | 100% | 0 | 0% · #— | 0% · #— | 0% | 0 |
| balanced | ref_era_bar_0.08 | $3.73M | 3055 | 474.4 | 71% | 100% · #7 | 100% · #7 | 100% | 0 | 100% · #11 | 100% · #12 | 100% | 0 |
| quality-first | ref_era_bar_0.08 | $3.77M | 2460 | 382 | 57% | 100% · #8 | 100% · #8 | 100% | 0 | 100% · #14 | 100% · #14 | 100% | 0 |
| franchise-builder | ref_era_bar_0.08 | $3.39M | 2100 | 326.1 | 71% | 100% · #6 | 100% · #7 | 100% | 0 | 100% · #11 | 100% · #11 | 100% | 0 |
| repeat-farmer | ref_era_bar_0.08 | $3.60M | 1600 | 248.4 | 63% | 100% · #7 | 100% · #7 | 100% | 0 | 100% · #12 | 95% · #12 | 100% | 0 |
| cheap-duds | ref_era_bar_0.08 | $2.12M | 0 | 0 | 4% | 0% · #— | 0% · #— | 100% | 0 | 0% · #— | 0% · #— | 0% | 0 |
| experimenter | ref_era_bar_0.08 | $3.60M | 1995 | 309.8 | 56% | 100% · #10 | 100% · #10 | 100% | 0 | 96% · #16 | 92% · #16 | 100% | 0 |
| self-funder | ref_era_bar_0.08 | $0.30M | 75 | 11.6 | 100% | 23% · #18 | 0% · #— | 86% | 0 | 0% · #— | 0% · #— | 0% | 0 |
| selective-self-funder | ref_era_bar_0.08 | $3.72M | 3010 | 467.4 | 67% | 100% · #7 | 100% · #7 | 100% | 0 | 100% · #11 | 100% · #12 | 100% | 0 |
| famous-star | ref_era_bar_0.08 | $3.01M | 0 | 0 | 100% | 0% · #— | 0% · #— | 100% | 0 | 0% · #— | 0% · #— | 0% | 0 |
| balanced | critic_mild | $3.74M | 3425 | 531.8 | 71% | 100% · #6 | 100% · #7 | 100% | 0 | 100% · #11 | 100% · #11 | 100% | 0 |
| quality-first | critic_mild | $3.79M | 2855 | 443.3 | 57% | 100% · #7 | 100% · #7 | 100% | 0 | 100% · #12 | 100% · #12 | 100% | 0 |
| franchise-builder | critic_mild | $3.37M | 2225 | 345.5 | 71% | 100% · #6 | 100% · #7 | 100% | 0 | 100% · #10 | 100% · #10 | 100% | 0 |
| repeat-farmer | critic_mild | $3.82M | 1750 | 271.7 | 63% | 100% · #6 | 100% · #7 | 100% | 0 | 100% · #11 | 98% · #11 | 100% | 0 |
| cheap-duds | critic_mild | $2.42M | 0 | 0 | 4% | 0% · #— | 0% · #— | 100% | 0 | 0% · #— | 0% · #— | 0% | 0 |
| experimenter | critic_mild | $3.64M | 2435 | 378.1 | 56% | 100% · #8 | 100% · #8 | 100% | 0 | 100% · #14 | 100% · #14 | 100% | 0 |
| self-funder | critic_mild | $0.32M | 310 | 48.2 | 100% | 77% · #17 | 0% · #— | 75% | 0 | 0% · #20 | 0% · #— | 0% | 0 |
| selective-self-funder | critic_mild | $3.78M | 3462.5 | 537.7 | 67% | 100% · #6.5 | 100% · #7 | 100% | 0 | 100% · #10 | 100% · #11 | 100% | 0 |
| famous-star | critic_mild | $3.36M | 0 | 0 | 100% | 2% · #18 | 0% · #— | 100% | 0 | 0% · #— | 0% · #— | 0% | 0 |
| balanced | critic_moderate | $3.74M | 3377.5 | 524.5 | 71% | 100% · #6 | 100% · #7 | 100% | 0 | 100% · #11 | 100% · #11 | 100% | 0 |
| quality-first | critic_moderate | $3.79M | 2827.5 | 439.1 | 57% | 100% · #7 | 100% · #7 | 100% | 0 | 100% · #12 | 100% · #12 | 100% | 0 |
| franchise-builder | critic_moderate | $3.37M | 2225 | 345.5 | 71% | 100% · #6 | 100% · #7 | 100% | 0 | 100% · #10 | 100% · #10 | 100% | 0 |
| repeat-farmer | critic_moderate | $3.82M | 1750 | 271.7 | 63% | 100% · #6 | 100% · #7 | 100% | 0 | 100% · #11 | 98% · #11 | 100% | 0 |
| cheap-duds | critic_moderate | $2.42M | 0 | 0 | 4% | 0% · #— | 0% · #— | 100% | 0 | 0% · #— | 0% · #— | 0% | 0 |
| experimenter | critic_moderate | $3.64M | 2377.5 | 369.2 | 56% | 100% · #8 | 100% · #8 | 100% | 0 | 100% · #14 | 100% · #14 | 100% | 0 |
| self-funder | critic_moderate | $0.32M | 310 | 48.1 | 100% | 77% · #17 | 0% · #— | 75% | 0 | 0% · #20 | 0% · #— | 0% | 0 |
| selective-self-funder | critic_moderate | $3.78M | 3427.5 | 532.2 | 67% | 100% · #6.5 | 100% · #7 | 100% | 0 | 100% · #10 | 100% · #11 | 100% | 0 |
| famous-star | critic_moderate | $3.36M | 0 | 0 | 100% | 2% · #18 | 0% · #— | 100% | 0 | 0% · #— | 0% · #— | 0% | 0 |
| balanced | critic_strong | $3.74M | 3255 | 505.4 | 71% | 100% · #6 | 100% · #7 | 100% | 0 | 100% · #11 | 100% · #11 | 100% | 0 |
| quality-first | critic_strong | $3.79M | 2715 | 421.6 | 57% | 100% · #7 | 100% · #7 | 100% | 0 | 100% · #12 | 100% · #12 | 100% | 0 |
| franchise-builder | critic_strong | $3.37M | 2225 | 345.5 | 71% | 100% · #6 | 100% · #7 | 100% | 0 | 100% · #10 | 100% · #10 | 100% | 0 |
| repeat-farmer | critic_strong | $3.80M | 1750 | 271.7 | 63% | 100% · #6 | 100% · #7 | 100% | 0 | 100% · #11 | 98% · #11 | 100% | 0 |
| cheap-duds | critic_strong | $2.40M | 0 | 0 | 4% | 0% · #— | 0% · #— | 100% | 0 | 0% · #— | 0% · #— | 0% | 0 |
| experimenter | critic_strong | $3.64M | 2215 | 343.9 | 56% | 100% · #8 | 100% · #8 | 100% | 0 | 100% · #14 | 100% · #14 | 100% | 0 |
| self-funder | critic_strong | $0.32M | 300 | 46.6 | 100% | 74% · #17 | 0% · #— | 76% | 0 | 0% · #20 | 0% · #— | 0% | 0 |
| selective-self-funder | critic_strong | $3.79M | 3312.5 | 514.4 | 67% | 100% · #6.5 | 100% · #7 | 100% | 0 | 100% · #10 | 100% · #11 | 100% | 0 |
| famous-star | critic_strong | $3.36M | 0 | 0 | 100% | 2% · #18 | 0% · #— | 100% | 0 | 0% · #— | 0% · #— | 0% | 0 |
| balanced | critic_moderate_subtract | $3.74M | 3375 | 524.1 | 71% | 100% · #6 | 100% · #7 | 100% | 0 | 100% · #11 | 100% · #11 | 100% | 0 |
| quality-first | critic_moderate_subtract | $3.79M | 2827.5 | 439.1 | 57% | 100% · #7 | 100% · #7 | 100% | 0 | 100% · #12 | 100% · #12 | 100% | 0 |
| franchise-builder | critic_moderate_subtract | $3.37M | 2225 | 345.5 | 71% | 100% · #6 | 100% · #7 | 100% | 0 | 100% · #10 | 100% · #10 | 100% | 0 |
| repeat-farmer | critic_moderate_subtract | $3.82M | 1750 | 271.7 | 63% | 100% · #6 | 100% · #7 | 100% | 0 | 100% · #11 | 98% · #11 | 100% | 0 |
| cheap-duds | critic_moderate_subtract | $2.41M | 0 | 0 | 4% | 0% · #— | 0% · #— | 100% | 0 | 0% · #— | 0% · #— | 0% | 0 |
| experimenter | critic_moderate_subtract | $3.64M | 2367.5 | 367.6 | 56% | 100% · #8 | 100% · #8 | 100% | 0 | 100% · #14 | 100% · #14 | 100% | 0 |
| self-funder | critic_moderate_subtract | $0.32M | 310 | 48.1 | 100% | 77% · #17 | 0% · #— | 75% | 0 | 0% · #20 | 0% · #— | 0% | 0 |
| selective-self-funder | critic_moderate_subtract | $3.78M | 3427.5 | 532.2 | 67% | 100% · #6.5 | 100% · #7 | 100% | 0 | 100% · #10 | 100% · #11 | 100% | 0 |
| famous-star | critic_moderate_subtract | $3.36M | 0 | 0 | 100% | 2% · #18 | 0% · #— | 100% | 0 | 0% · #— | 0% · #— | 0% | 0 |
| balanced | audience_mild | $3.74M | 3425 | 531.8 | 71% | 100% · #6 | 100% · #7 | 100% | 0 | 100% · #11 | 100% · #11 | 100% | 0 |
| quality-first | audience_mild | $3.79M | 2855 | 443.3 | 57% | 100% · #7 | 100% · #7 | 100% | 0 | 100% · #12 | 100% · #12 | 100% | 0 |
| franchise-builder | audience_mild | $3.37M | 2225 | 345.5 | 71% | 100% · #6 | 100% · #7 | 100% | 0 | 100% · #10 | 100% · #10 | 100% | 0 |
| repeat-farmer | audience_mild | $3.82M | 1750 | 271.7 | 63% | 100% · #6 | 100% · #7 | 100% | 0 | 100% · #11 | 98% · #11 | 100% | 0 |
| cheap-duds | audience_mild | $2.42M | 0 | 0 | 4% | 0% · #— | 0% · #— | 100% | 0 | 0% · #— | 0% · #— | 0% | 0 |
| experimenter | audience_mild | $3.64M | 2435 | 378.1 | 56% | 100% · #8 | 100% · #8 | 100% | 0 | 100% · #14 | 100% · #14 | 100% | 0 |
| self-funder | audience_mild | $0.32M | 310 | 48.2 | 100% | 77% · #17 | 0% · #— | 75% | 0 | 0% · #20 | 0% · #— | 0% | 0 |
| selective-self-funder | audience_mild | $3.78M | 3462.5 | 537.7 | 67% | 100% · #6.5 | 100% · #7 | 100% | 0 | 100% · #10 | 100% · #11 | 100% | 0 |
| famous-star | audience_mild | $3.36M | 0 | 0 | 100% | 2% · #18 | 0% · #— | 100% | 0 | 0% · #— | 0% · #— | 0% | 0 |
| balanced | audience_moderate | $3.74M | 3425 | 531.8 | 71% | 100% · #6 | 100% · #7 | 100% | 0 | 100% · #11 | 100% · #11 | 100% | 0 |
| quality-first | audience_moderate | $3.79M | 2855 | 443.3 | 57% | 100% · #7 | 100% · #7 | 100% | 0 | 100% · #12 | 100% · #12 | 100% | 0 |
| franchise-builder | audience_moderate | $3.37M | 2225 | 345.5 | 71% | 100% · #6 | 100% · #7 | 100% | 0 | 100% · #10 | 100% · #10 | 100% | 0 |
| repeat-farmer | audience_moderate | $3.82M | 1750 | 271.7 | 63% | 100% · #6 | 100% · #7 | 100% | 0 | 100% · #11 | 98% · #11 | 100% | 0 |
| cheap-duds | audience_moderate | $2.42M | 0 | 0 | 4% | 0% · #— | 0% · #— | 100% | 0 | 0% · #— | 0% · #— | 0% | 0 |
| experimenter | audience_moderate | $3.64M | 2435 | 378.1 | 56% | 100% · #8 | 100% · #8 | 100% | 0 | 100% · #14 | 100% · #14 | 100% | 0 |
| self-funder | audience_moderate | $0.32M | 310 | 48.2 | 100% | 77% · #17 | 0% · #— | 75% | 0 | 0% · #20 | 0% · #— | 0% | 0 |
| selective-self-funder | audience_moderate | $3.78M | 3462.5 | 537.7 | 67% | 100% · #6.5 | 100% · #7 | 100% | 0 | 100% · #10 | 100% · #11 | 100% | 0 |
| famous-star | audience_moderate | $3.36M | 0 | 0 | 100% | 2% · #18 | 0% · #— | 100% | 0 | 0% · #— | 0% · #— | 0% | 0 |
| balanced | audience_strong | $3.74M | 3425 | 531.8 | 71% | 100% · #6 | 100% · #7 | 100% | 0 | 100% · #11 | 100% · #11 | 100% | 0 |
| quality-first | audience_strong | $3.79M | 2855 | 443.3 | 57% | 100% · #7 | 100% · #7 | 100% | 0 | 100% · #12 | 100% · #12 | 100% | 0 |
| franchise-builder | audience_strong | $3.37M | 2225 | 345.5 | 71% | 100% · #6 | 100% · #7 | 100% | 0 | 100% · #10 | 100% · #10 | 100% | 0 |
| repeat-farmer | audience_strong | $3.82M | 1750 | 271.7 | 63% | 100% · #6 | 100% · #7 | 100% | 0 | 100% · #11 | 98% · #11 | 100% | 0 |
| cheap-duds | audience_strong | $2.42M | 0 | 0 | 4% | 0% · #— | 0% · #— | 100% | 0 | 0% · #— | 0% · #— | 0% | 0 |
| experimenter | audience_strong | $3.64M | 2435 | 378.1 | 56% | 100% · #8 | 100% · #8 | 100% | 0 | 100% · #14 | 100% · #14 | 100% | 0 |
| self-funder | audience_strong | $0.32M | 310 | 48.2 | 100% | 77% · #17 | 0% · #— | 75% | 0 | 0% · #20 | 0% · #— | 0% | 0 |
| selective-self-funder | audience_strong | $3.78M | 3462.5 | 537.7 | 67% | 100% · #6.5 | 100% · #7 | 100% | 0 | 100% · #10 | 100% · #11 | 100% | 0 |
| famous-star | audience_strong | $3.36M | 0 | 0 | 100% | 2% · #18 | 0% · #— | 100% | 0 | 0% · #— | 0% · #— | 0% | 0 |
| balanced | combo_A | $3.74M | 3425 | 531.8 | 71% | 100% · #6 | 100% · #7 | 100% | 0 | 100% · #11 | 100% · #11 | 100% | 0 |
| quality-first | combo_A | $3.79M | 2855 | 443.3 | 57% | 100% · #7 | 100% · #7 | 100% | 0 | 100% · #12 | 100% · #12 | 100% | 0 |
| franchise-builder | combo_A | $3.37M | 2225 | 345.5 | 71% | 100% · #6 | 100% · #7 | 100% | 0 | 100% · #10 | 100% · #10 | 100% | 0 |
| repeat-farmer | combo_A | $3.82M | 1750 | 271.7 | 63% | 100% · #6 | 100% · #7 | 100% | 0 | 100% · #11 | 98% · #11 | 100% | 0 |
| cheap-duds | combo_A | $2.42M | 0 | 0 | 4% | 0% · #— | 0% · #— | 100% | 0 | 0% · #— | 0% · #— | 0% | 0 |
| experimenter | combo_A | $3.64M | 2435 | 378.1 | 56% | 100% · #8 | 100% · #8 | 100% | 0 | 100% · #14 | 100% · #14 | 100% | 0 |
| self-funder | combo_A | $0.32M | 310 | 48.2 | 100% | 77% · #17 | 0% · #— | 75% | 0 | 0% · #20 | 0% · #— | 0% | 0 |
| selective-self-funder | combo_A | $3.78M | 3462.5 | 537.7 | 67% | 100% · #6.5 | 100% · #7 | 100% | 0 | 100% · #10 | 100% · #11 | 100% | 0 |
| famous-star | combo_A | $3.36M | 0 | 0 | 100% | 2% · #18 | 0% · #— | 100% | 0 | 0% · #— | 0% · #— | 0% | 0 |
| balanced | combo_B | $3.74M | 3377.5 | 524.5 | 71% | 100% · #6 | 100% · #7 | 100% | 0 | 100% · #11 | 100% · #11 | 100% | 0 |
| quality-first | combo_B | $3.79M | 2827.5 | 439.1 | 57% | 100% · #7 | 100% · #7 | 100% | 0 | 100% · #12 | 100% · #12 | 100% | 0 |
| franchise-builder | combo_B | $3.37M | 2225 | 345.5 | 71% | 100% · #6 | 100% · #7 | 100% | 0 | 100% · #10 | 100% · #10 | 100% | 0 |
| repeat-farmer | combo_B | $3.82M | 1750 | 271.7 | 63% | 100% · #6 | 100% · #7 | 100% | 0 | 100% · #11 | 98% · #11 | 100% | 0 |
| cheap-duds | combo_B | $2.42M | 0 | 0 | 4% | 0% · #— | 0% · #— | 100% | 0 | 0% · #— | 0% · #— | 0% | 0 |
| experimenter | combo_B | $3.64M | 2377.5 | 369.2 | 56% | 100% · #8 | 100% · #8 | 100% | 0 | 100% · #14 | 100% · #14 | 100% | 0 |
| self-funder | combo_B | $0.32M | 310 | 48.1 | 100% | 77% · #17 | 0% · #— | 75% | 0 | 0% · #20 | 0% · #— | 0% | 0 |
| selective-self-funder | combo_B | $3.78M | 3427.5 | 532.2 | 67% | 100% · #6.5 | 100% · #7 | 100% | 0 | 100% · #10 | 100% · #11 | 100% | 0 |
| famous-star | combo_B | $3.36M | 0 | 0 | 100% | 2% · #18 | 0% · #— | 100% | 0 | 0% · #— | 0% · #— | 0% | 0 |
| balanced | combo_C | $3.74M | 3255 | 505.4 | 71% | 100% · #6 | 100% · #7 | 100% | 0 | 100% · #11 | 100% · #11 | 100% | 0 |
| quality-first | combo_C | $3.79M | 2715 | 421.6 | 57% | 100% · #7 | 100% · #7 | 100% | 0 | 100% · #12 | 100% · #12 | 100% | 0 |
| franchise-builder | combo_C | $3.37M | 2225 | 345.5 | 71% | 100% · #6 | 100% · #7 | 100% | 0 | 100% · #10 | 100% · #10 | 100% | 0 |
| repeat-farmer | combo_C | $3.80M | 1750 | 271.7 | 63% | 100% · #6 | 100% · #7 | 100% | 0 | 100% · #11 | 98% · #11 | 100% | 0 |
| cheap-duds | combo_C | $2.40M | 0 | 0 | 4% | 0% · #— | 0% · #— | 100% | 0 | 0% · #— | 0% · #— | 0% | 0 |
| experimenter | combo_C | $3.64M | 2215 | 343.9 | 56% | 100% · #8 | 100% · #8 | 100% | 0 | 100% · #14 | 100% · #14 | 100% | 0 |
| self-funder | combo_C | $0.32M | 300 | 46.6 | 100% | 74% · #17 | 0% · #— | 76% | 0 | 0% · #20 | 0% · #— | 0% | 0 |
| selective-self-funder | combo_C | $3.79M | 3312.5 | 514.4 | 67% | 100% · #6.5 | 100% · #7 | 100% | 0 | 100% · #10 | 100% · #11 | 100% | 0 |
| famous-star | combo_C | $3.36M | 0 | 0 | 100% | 2% · #18 | 0% · #— | 100% | 0 | 0% · #— | 0% · #— | 0% | 0 |

### Prestige milestones awarded per career (mean)

| Strategy | Variant | audience_7_5 | critic_8_5 | first_hall_of_fame | hall_of_fame | ip_gross_1m | ip_gross_5m | ip_viewers_500k | meters_all_70 | careers > 400 Prestige/yr (OUTDATED threshold) |
|---|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|
| balanced | control | 14.2 | 6.93 | 0.89 | 2.68 | 1.82 | 0 | 1.82 | 14.6 | 95% |
| balanced | ref_no_era_bar | 14.67 | 8.34 | 0.96 | 4.18 | 1.87 | 0.01 | 1.87 | 15.3 | 99% |
| balanced | ref_era_bar_0.08 | 13.4 | 5.73 | 0.75 | 1.72 | 1.96 | 0.01 | 1.96 | 13.61 | 81% |
| balanced | critic_mild | 14.2 | 6.93 | 0.89 | 2.68 | 1.82 | 0 | 1.82 | 14.6 | 95% |
| balanced | critic_moderate | 14.2 | 6.82 | 0.88 | 2.6 | 1.82 | 0 | 1.82 | 14.6 | 94% |
| balanced | critic_strong | 14.2 | 6.29 | 0.82 | 2.2 | 1.82 | 0 | 1.82 | 14.6 | 90% |
| balanced | critic_moderate_subtract | 14.2 | 6.8 | 0.88 | 2.59 | 1.82 | 0 | 1.82 | 14.6 | 94% |
| balanced | audience_mild | 14.2 | 6.93 | 0.89 | 2.68 | 1.82 | 0 | 1.82 | 14.6 | 95% |
| balanced | audience_moderate | 14.2 | 6.93 | 0.89 | 2.68 | 1.82 | 0 | 1.82 | 14.6 | 95% |
| balanced | audience_strong | 14.2 | 6.93 | 0.89 | 2.68 | 1.82 | 0 | 1.82 | 14.6 | 95% |
| balanced | combo_A | 14.2 | 6.93 | 0.89 | 2.68 | 1.82 | 0 | 1.82 | 14.6 | 95% |
| balanced | combo_B | 14.2 | 6.82 | 0.88 | 2.6 | 1.82 | 0 | 1.82 | 14.6 | 94% |
| balanced | combo_C | 14.2 | 6.29 | 0.82 | 2.2 | 1.82 | 0 | 1.82 | 14.6 | 90% |
| quality-first | control | 13.92 | 6.55 | 0.95 | 2.26 | 0 | 0 | 0 | 14.61 | 77% |
| quality-first | ref_no_era_bar | 14.53 | 7.56 | 0.98 | 3.3 | 0 | 0 | 0 | 15.42 | 94% |
| quality-first | ref_era_bar_0.08 | 13 | 5.08 | 0.77 | 1.33 | 0 | 0 | 0 | 13.67 | 38% |
| quality-first | critic_mild | 13.92 | 6.55 | 0.95 | 2.26 | 0 | 0 | 0 | 14.61 | 77% |
| quality-first | critic_moderate | 13.92 | 6.41 | 0.94 | 2.19 | 0 | 0 | 0 | 14.61 | 75% |
| quality-first | critic_strong | 13.92 | 5.85 | 0.88 | 1.79 | 0 | 0 | 0 | 14.61 | 63% |
| quality-first | critic_moderate_subtract | 13.92 | 6.4 | 0.94 | 2.18 | 0 | 0 | 0 | 14.61 | 75% |
| quality-first | audience_mild | 13.92 | 6.55 | 0.95 | 2.26 | 0 | 0 | 0 | 14.61 | 77% |
| quality-first | audience_moderate | 13.92 | 6.55 | 0.95 | 2.26 | 0 | 0 | 0 | 14.61 | 77% |
| quality-first | audience_strong | 13.92 | 6.55 | 0.95 | 2.26 | 0 | 0 | 0 | 14.61 | 77% |
| quality-first | combo_A | 13.92 | 6.55 | 0.95 | 2.26 | 0 | 0 | 0 | 14.61 | 77% |
| quality-first | combo_B | 13.92 | 6.41 | 0.94 | 2.19 | 0 | 0 | 0 | 14.61 | 75% |
| quality-first | combo_C | 13.92 | 5.85 | 0.88 | 1.79 | 0 | 0 | 0 | 14.61 | 63% |
| franchise-builder | control | 8.02 | 1.06 | 0.03 | 0.13 | 2.01 | 1.78 | 2.01 | 14.65 | 22% |
| franchise-builder | ref_no_era_bar | 9.21 | 1.54 | 0.05 | 0.27 | 2 | 1.9 | 2 | 15.37 | 34% |
| franchise-builder | ref_era_bar_0.08 | 6.72 | 0.76 | 0.02 | 0.07 | 2.01 | 1.71 | 2.01 | 13.85 | 10% |
| franchise-builder | critic_mild | 8.02 | 1.06 | 0.03 | 0.13 | 2.01 | 1.78 | 2.01 | 14.65 | 22% |
| franchise-builder | critic_moderate | 8.02 | 1.05 | 0.02 | 0.13 | 2.01 | 1.78 | 2.01 | 14.65 | 22% |
| franchise-builder | critic_strong | 8.03 | 0.96 | 0.03 | 0.13 | 2.01 | 1.78 | 2.01 | 14.65 | 21% |
| franchise-builder | critic_moderate_subtract | 8.02 | 1.05 | 0.02 | 0.13 | 2.01 | 1.78 | 2.01 | 14.65 | 22% |
| franchise-builder | audience_mild | 8.02 | 1.06 | 0.03 | 0.13 | 2.01 | 1.78 | 2.01 | 14.65 | 22% |
| franchise-builder | audience_moderate | 8.02 | 1.06 | 0.03 | 0.13 | 2.01 | 1.78 | 2.01 | 14.65 | 22% |
| franchise-builder | audience_strong | 8.02 | 1.06 | 0.03 | 0.13 | 2.01 | 1.78 | 2.01 | 14.65 | 22% |
| franchise-builder | combo_A | 8.02 | 1.06 | 0.03 | 0.13 | 2.01 | 1.78 | 2.01 | 14.65 | 22% |
| franchise-builder | combo_B | 8.02 | 1.05 | 0.02 | 0.13 | 2.01 | 1.78 | 2.01 | 14.65 | 22% |
| franchise-builder | combo_C | 8.03 | 0.96 | 0.03 | 0.13 | 2.01 | 1.78 | 2.01 | 14.65 | 21% |
| repeat-farmer | control | 6.3 | 0.89 | 0.01 | 0.05 | 1 | 1 | 1 | 14.69 | 1% |
| repeat-farmer | ref_no_era_bar | 7.05 | 1.43 | 0.02 | 0.16 | 1 | 1 | 1 | 15.44 | 3% |
| repeat-farmer | ref_era_bar_0.08 | 5.73 | 0.74 | 0.01 | 0.06 | 1 | 0.98 | 1 | 13.82 | 1% |
| repeat-farmer | critic_mild | 6.3 | 0.89 | 0.01 | 0.05 | 1 | 1 | 1 | 14.69 | 1% |
| repeat-farmer | critic_moderate | 6.3 | 0.89 | 0.01 | 0.05 | 1 | 1 | 1 | 14.69 | 1% |
| repeat-farmer | critic_strong | 6.3 | 0.89 | 0.01 | 0.05 | 1 | 1 | 1 | 14.69 | 1% |
| repeat-farmer | critic_moderate_subtract | 6.3 | 0.89 | 0.01 | 0.05 | 1 | 1 | 1 | 14.69 | 1% |
| repeat-farmer | audience_mild | 6.3 | 0.89 | 0.01 | 0.05 | 1 | 1 | 1 | 14.69 | 1% |
| repeat-farmer | audience_moderate | 6.3 | 0.89 | 0.01 | 0.05 | 1 | 1 | 1 | 14.69 | 1% |
| repeat-farmer | audience_strong | 6.3 | 0.89 | 0.01 | 0.05 | 1 | 1 | 1 | 14.69 | 1% |
| repeat-farmer | combo_A | 6.3 | 0.89 | 0.01 | 0.05 | 1 | 1 | 1 | 14.69 | 1% |
| repeat-farmer | combo_B | 6.3 | 0.89 | 0.01 | 0.05 | 1 | 1 | 1 | 14.69 | 1% |
| repeat-farmer | combo_C | 6.3 | 0.89 | 0.01 | 0.05 | 1 | 1 | 1 | 14.69 | 1% |
| cheap-duds | control | 0.34 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0% |
| cheap-duds | ref_no_era_bar | 1.21 | 0.1 | 0 | 0 | 0 | 0 | 0 | 0 | 0% |
| cheap-duds | ref_era_bar_0.08 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0% |
| cheap-duds | critic_mild | 0.34 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0% |
| cheap-duds | critic_moderate | 0.34 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0% |
| cheap-duds | critic_strong | 0.34 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0% |
| cheap-duds | critic_moderate_subtract | 0.34 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0% |
| cheap-duds | audience_mild | 0.34 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0% |
| cheap-duds | audience_moderate | 0.34 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0% |
| cheap-duds | audience_strong | 0.34 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0% |
| cheap-duds | combo_A | 0.34 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0% |
| cheap-duds | combo_B | 0.34 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0% |
| cheap-duds | combo_C | 0.34 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0% |
| experimenter | control | 11.96 | 5.81 | 0.85 | 1.89 | 0 | 0 | 0 | 12.02 | 37% |
| experimenter | ref_no_era_bar | 13.27 | 7.45 | 0.98 | 3.6 | 0 | 0 | 0 | 13.67 | 87% |
| experimenter | ref_era_bar_0.08 | 10.54 | 4.67 | 0.64 | 1 | 0 | 0 | 0 | 10.14 | 14% |
| experimenter | critic_mild | 11.96 | 5.81 | 0.85 | 1.89 | 0 | 0 | 0 | 12.02 | 37% |
| experimenter | critic_moderate | 11.96 | 5.72 | 0.84 | 1.76 | 0 | 0 | 0 | 12.02 | 35% |
| experimenter | critic_strong | 11.96 | 4.76 | 0.78 | 1.48 | 0 | 0 | 0 | 12.02 | 27% |
| experimenter | critic_moderate_subtract | 11.96 | 5.63 | 0.84 | 1.76 | 0 | 0 | 0 | 12.02 | 34% |
| experimenter | audience_mild | 11.96 | 5.81 | 0.85 | 1.89 | 0 | 0 | 0 | 12.02 | 37% |
| experimenter | audience_moderate | 11.96 | 5.81 | 0.85 | 1.89 | 0 | 0 | 0 | 12.02 | 37% |
| experimenter | audience_strong | 11.96 | 5.81 | 0.85 | 1.89 | 0 | 0 | 0 | 12.02 | 37% |
| experimenter | combo_A | 11.96 | 5.81 | 0.85 | 1.89 | 0 | 0 | 0 | 12.02 | 37% |
| experimenter | combo_B | 11.96 | 5.72 | 0.84 | 1.76 | 0 | 0 | 0 | 12.02 | 35% |
| experimenter | combo_C | 11.96 | 4.76 | 0.78 | 1.48 | 0 | 0 | 0 | 12.02 | 27% |
| self-funder | control | 3.73 | 0.36 | 0 | 0 | 0 | 0 | 0 | 0.87 | 0% |
| self-funder | ref_no_era_bar | 6.49 | 1.05 | 0.05 | 0.05 | 0 | 0 | 0 | 5.2 | 0% |
| self-funder | ref_era_bar_0.08 | 1.4 | 0.04 | 0 | 0 | 0 | 0 | 0 | 0 | 0% |
| self-funder | critic_mild | 3.73 | 0.36 | 0 | 0 | 0 | 0 | 0 | 0.87 | 0% |
| self-funder | critic_moderate | 3.73 | 0.34 | 0 | 0 | 0 | 0 | 0 | 0.87 | 0% |
| self-funder | critic_strong | 3.74 | 0.18 | 0 | 0 | 0 | 0 | 0 | 0.87 | 0% |
| self-funder | critic_moderate_subtract | 3.73 | 0.33 | 0 | 0 | 0 | 0 | 0 | 0.87 | 0% |
| self-funder | audience_mild | 3.73 | 0.36 | 0 | 0 | 0 | 0 | 0 | 0.87 | 0% |
| self-funder | audience_moderate | 3.73 | 0.36 | 0 | 0 | 0 | 0 | 0 | 0.87 | 0% |
| self-funder | audience_strong | 3.73 | 0.36 | 0 | 0 | 0 | 0 | 0 | 0.87 | 0% |
| self-funder | combo_A | 3.73 | 0.36 | 0 | 0 | 0 | 0 | 0 | 0.87 | 0% |
| self-funder | combo_B | 3.73 | 0.34 | 0 | 0 | 0 | 0 | 0 | 0.87 | 0% |
| self-funder | combo_C | 3.74 | 0.18 | 0 | 0 | 0 | 0 | 0 | 0.87 | 0% |
| selective-self-funder | control | 14.21 | 7.12 | 0.92 | 2.82 | 1.88 | 0.02 | 1.88 | 14.56 | 95% |
| selective-self-funder | ref_no_era_bar | 14.79 | 8.08 | 0.97 | 3.94 | 1.88 | 0.01 | 1.88 | 15.3 | 99% |
| selective-self-funder | ref_era_bar_0.08 | 13.34 | 5.59 | 0.74 | 1.58 | 1.87 | 0.01 | 1.87 | 13.56 | 76% |
| selective-self-funder | critic_mild | 14.21 | 7.12 | 0.92 | 2.82 | 1.88 | 0.02 | 1.88 | 14.56 | 95% |
| selective-self-funder | critic_moderate | 14.21 | 7 | 0.92 | 2.74 | 1.88 | 0.02 | 1.88 | 14.56 | 95% |
| selective-self-funder | critic_strong | 14.21 | 6.42 | 0.85 | 2.33 | 1.87 | 0.02 | 1.87 | 14.56 | 92% |
| selective-self-funder | critic_moderate_subtract | 14.21 | 6.98 | 0.92 | 2.73 | 1.88 | 0.02 | 1.88 | 14.56 | 95% |
| selective-self-funder | audience_mild | 14.21 | 7.12 | 0.92 | 2.82 | 1.88 | 0.02 | 1.88 | 14.56 | 95% |
| selective-self-funder | audience_moderate | 14.21 | 7.12 | 0.92 | 2.82 | 1.88 | 0.02 | 1.88 | 14.56 | 95% |
| selective-self-funder | audience_strong | 14.21 | 7.12 | 0.92 | 2.82 | 1.88 | 0.02 | 1.88 | 14.56 | 95% |
| selective-self-funder | combo_A | 14.21 | 7.12 | 0.92 | 2.82 | 1.88 | 0.02 | 1.88 | 14.56 | 95% |
| selective-self-funder | combo_B | 14.21 | 7 | 0.92 | 2.74 | 1.88 | 0.02 | 1.88 | 14.56 | 95% |
| selective-self-funder | combo_C | 14.21 | 6.42 | 0.85 | 2.33 | 1.87 | 0.02 | 1.87 | 14.56 | 92% |
| famous-star | control | 0.61 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0% |
| famous-star | ref_no_era_bar | 2.13 | 0.18 | 0 | 0 | 0 | 0 | 0 | 0 | 0% |
| famous-star | ref_era_bar_0.08 | 0.06 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0% |
| famous-star | critic_mild | 0.61 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0% |
| famous-star | critic_moderate | 0.61 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0% |
| famous-star | critic_strong | 0.61 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0% |
| famous-star | critic_moderate_subtract | 0.61 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0% |
| famous-star | audience_mild | 0.61 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0% |
| famous-star | audience_moderate | 0.61 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0% |
| famous-star | audience_strong | 0.61 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0% |
| famous-star | combo_A | 0.61 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0% |
| famous-star | combo_B | 0.61 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0% |
| famous-star | combo_C | 0.61 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0% |

### Diagnostic flags fired

| Variant | Fired |
|---|---|
| control | EARLY_SOFTLOCK, PRESTIGE_TOO_FAST, QUALITY_INFLATION, DEAD_STRATEGY |
| ref_no_era_bar | EARLY_SOFTLOCK, PRESTIGE_TOO_FAST, QUALITY_INFLATION, DEAD_STRATEGY |
| ref_era_bar_0.08 | EARLY_SOFTLOCK, QUALITY_INFLATION, DEAD_STRATEGY |
| critic_mild | EARLY_SOFTLOCK, PRESTIGE_TOO_FAST, QUALITY_INFLATION, DEAD_STRATEGY |
| critic_moderate | EARLY_SOFTLOCK, PRESTIGE_TOO_FAST, QUALITY_INFLATION, DEAD_STRATEGY |
| critic_strong | EARLY_SOFTLOCK, PRESTIGE_TOO_FAST, QUALITY_INFLATION, DEAD_STRATEGY |
| critic_moderate_subtract | EARLY_SOFTLOCK, PRESTIGE_TOO_FAST, QUALITY_INFLATION, DEAD_STRATEGY |
| audience_mild | EARLY_SOFTLOCK, PRESTIGE_TOO_FAST, QUALITY_INFLATION, DEAD_STRATEGY |
| audience_moderate | EARLY_SOFTLOCK, PRESTIGE_TOO_FAST, QUALITY_INFLATION, DEAD_STRATEGY |
| audience_strong | EARLY_SOFTLOCK, PRESTIGE_TOO_FAST, QUALITY_INFLATION, DEAD_STRATEGY |
| combo_A | EARLY_SOFTLOCK, PRESTIGE_TOO_FAST, QUALITY_INFLATION, DEAD_STRATEGY |
| combo_B | EARLY_SOFTLOCK, PRESTIGE_TOO_FAST, QUALITY_INFLATION, DEAD_STRATEGY |
| combo_C | EARLY_SOFTLOCK, PRESTIGE_TOO_FAST, QUALITY_INFLATION, DEAD_STRATEGY |
