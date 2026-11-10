# Experiment: G26_expectations

> **Simulation assumptions, not design locks.** Paired seeds: every variant runs the same seeds and strategies; only the config overrides differ.

Gate 2.6 critic generations + audience eras. Base = config/candidate.json (ladder 4-6-8, diffusion legs, hybrid Prestige) held constant. All expectation numbers are TEST ASSUMPTIONS.

- Seeds 1–300 (300) · strategies: balanced, quality-first, franchise-builder, repeat-farmer, cheap-duds, experimenter, self-funder, selective-self-funder, famous-star · reference variant: **control**
- Ruleset v9.61-movie-kernel-0.1 · measured runtime 950750 ms for 35100 careers

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

## 50-production careers

Invariant violations across all variants: **0**.

### Medians by strategy

| Strategy | Variant | endCash | prestige | prestigePerRelease | meanAudience | meanCritic | share8plus | share9plus | shareLate8plus | hofShare | maxStaffEnd | staffCount | meanStaffStat | upgrades | firstUpgradeWeek | years | maxIpFans | negativeCashWeeks |
|---|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|
| balanced | control | $12396K | 11100 | 222 | 8.43 | 8.34 | 72% | 30% | 80% | 30% | 8 | 8 | 96.60 | 2 | 112 | 15.67 | 96370 | 2 |
| balanced | ref_no_era_bar | $12435K | 12655 | 253.10 | 8.64 | 8.54 | 78% | 40% | 90% | 40% | 8 | 8 | 96.80 | 2 | 96 | 15.67 | 108094 | 2 |
| balanced | ref_era_bar_0.08 | $12396K | 9937.50 | 198.75 | 8.28 | 8.21 | 66% | 20% | 80% | 20% | 8 | 8 | 96.40 | 2 | 112 | 15.67 | 93155.50 | 2 |
| balanced | critic_mild | $12393K | 10565 | 211.30 | 8.43 | 8.22 | 70% | 24% | 80% | 24% | 8 | 8 | 96.60 | 2 | 112 | 15.67 | 92253.50 | 2 |
| balanced | critic_moderate | $12391K | 9850 | 197 | 8.44 | 8.07 | 68% | 20% | 75% | 20% | 8 | 8 | 96.60 | 2 | 112 | 15.67 | 87955.50 | 2 |
| balanced | critic_strong | $12383K | 8987.50 | 179.75 | 8.46 | 7.90 | 64% | 14% | 70% | 14% | 8 | 8 | 96.60 | 2 | 112 | 15.67 | 84977 | 2 |
| balanced | critic_moderate_subtract | $12389K | 9732.50 | 194.65 | 8.46 | 8.03 | 66% | 20% | 75% | 20% | 8 | 8 | 96.60 | 2 | 112 | 15.67 | 86878.50 | 2 |
| balanced | audience_mild | $12393K | 10820 | 216.40 | 8.40 | 8.34 | 72% | 26% | 80% | 26% | 8 | 8 | 96.60 | 2 | 112 | 15.67 | 94316 | 2 |
| balanced | audience_moderate | $12389K | 10735 | 214.70 | 8.37 | 8.34 | 72% | 26% | 80% | 26% | 8 | 8 | 96.60 | 2 | 112 | 15.67 | 93427.50 | 2 |
| balanced | audience_strong | $12384K | 10565 | 211.30 | 8.31 | 8.34 | 70% | 24% | 80% | 24% | 8 | 8 | 96.60 | 2 | 112 | 15.67 | 91723.50 | 2 |
| balanced | combo_A | $12389K | 10565 | 211.30 | 8.40 | 8.23 | 70% | 24% | 80% | 24% | 8 | 8 | 96.60 | 2 | 112 | 15.67 | 90883.50 | 2 |
| balanced | combo_B | $12374K | 9665 | 193.30 | 8.39 | 8.07 | 68% | 18% | 75% | 18% | 8 | 8 | 96.60 | 2 | 112 | 15.67 | 86458.50 | 2 |
| balanced | combo_C | $12386K | 8900 | 178 | 8.43 | 7.90 | 64% | 14% | 70% | 14% | 8 | 8 | 96.60 | 2 | 112 | 15.67 | 84080.50 | 2 |
| quality-first | control | $12750K | 10147.50 | 202.95 | 8.46 | 8.35 | 76% | 26% | 90% | 26% | 8 | 8 | 96.40 | 2 | 112 | 15.67 | 26420 | 1 |
| quality-first | ref_no_era_bar | $12860K | 11720 | 234.40 | 8.66 | 8.52 | 82% | 38% | 95% | 38% | 8 | 8 | 96.60 | 2 | 96 | 15.67 | 27292 | 1 |
| quality-first | ref_era_bar_0.08 | $12741K | 8945 | 178.90 | 8.31 | 8.20 | 70% | 18% | 90% | 18% | 8 | 8 | 96.10 | 2 | 128 | 15.67 | 25774.50 | 1 |
| quality-first | critic_mild | $12748K | 9565 | 191.30 | 8.47 | 8.22 | 75% | 22% | 90% | 22% | 8 | 8 | 96.40 | 2 | 112 | 15.67 | 25534 | 1 |
| quality-first | critic_moderate | $12763K | 8760 | 175.20 | 8.47 | 8.06 | 71% | 18% | 80% | 18% | 8 | 8 | 96.40 | 2 | 112 | 15.67 | 24277 | 1 |
| quality-first | critic_strong | $12762K | 8007.50 | 160.15 | 8.47 | 7.89 | 68% | 12% | 75% | 12% | 8 | 8 | 96.40 | 2 | 112 | 15.67 | 23244 | 1 |
| quality-first | critic_moderate_subtract | $12763K | 8627.50 | 172.55 | 8.47 | 8.02 | 70% | 16% | 80% | 16% | 8 | 8 | 96.40 | 2 | 112 | 15.67 | 24148.50 | 1 |
| quality-first | audience_mild | $12739K | 9905 | 198.10 | 8.43 | 8.35 | 76% | 24% | 90% | 24% | 8 | 8 | 96.40 | 2 | 112 | 15.67 | 26041 | 1 |
| quality-first | audience_moderate | $12731K | 9882.50 | 197.65 | 8.40 | 8.35 | 76% | 24% | 90% | 24% | 8 | 8 | 96.40 | 2 | 112 | 15.67 | 25961.50 | 1 |
| quality-first | audience_strong | $12719K | 9647.50 | 192.95 | 8.34 | 8.35 | 74% | 22% | 90% | 22% | 8 | 8 | 96.40 | 2 | 112 | 15.67 | 25665.50 | 1 |
| quality-first | combo_A | $12741K | 9470 | 189.40 | 8.44 | 8.22 | 74% | 22% | 85% | 22% | 8 | 8 | 96.40 | 2 | 112 | 15.67 | 25159.50 | 1 |
| quality-first | combo_B | $12743K | 8622.50 | 172.45 | 8.41 | 8.06 | 70% | 16% | 80% | 16% | 8 | 8 | 96.40 | 2 | 112 | 15.67 | 23826.50 | 1 |
| quality-first | combo_C | $12758K | 7907.50 | 158.15 | 8.43 | 7.89 | 66% | 12% | 75% | 12% | 8 | 8 | 96.40 | 2 | 112 | 15.67 | 22806 | 1 |
| franchise-builder | control | $11062K | 4052.50 | 81.05 | 7.08 | 7.00 | 6% | 0% | 0% | 0% | 8 | 8 | 96.70 | 2 | 112 | 15.67 | 147978 | 2 |
| franchise-builder | ref_no_era_bar | $11525K | 4635 | 92.70 | 7.13 | 7.08 | 8% | 0% | 0% | 0% | 8 | 8 | 96.80 | 2 | 96 | 15.67 | 159154.50 | 2 |
| franchise-builder | ref_era_bar_0.08 | $10951K | 3955 | 79.10 | 7.03 | 6.97 | 4% | 0% | 0% | 0% | 8 | 8 | 96.50 | 2 | 112 | 15.67 | 139430 | 2 |
| franchise-builder | critic_mild | $11081K | 4075 | 81.50 | 7.10 | 6.92 | 7% | 0% | 0% | 0% | 8 | 8 | 96.70 | 2 | 112 | 15.67 | 142559.50 | 2 |
| franchise-builder | critic_moderate | $11168K | 4185 | 83.70 | 7.18 | 6.86 | 8% | 0% | 0% | 0% | 8 | 8 | 96.70 | 2 | 112 | 15.67 | 136649.50 | 2 |
| franchise-builder | critic_strong | $11200K | 4330 | 86.60 | 7.21 | 6.78 | 8% | 0% | 0% | 0% | 8 | 8 | 96.70 | 2 | 112 | 15.67 | 129057.50 | 2 |
| franchise-builder | critic_moderate_subtract | $11221K | 4650 | 93 | 7.28 | 6.84 | 10% | 0% | 5% | 0% | 8 | 8 | 96.70 | 2 | 112 | 15.67 | 129770.50 | 2 |
| franchise-builder | audience_mild | $10999K | 4055 | 81.10 | 7.05 | 7 | 6% | 0% | 0% | 0% | 8 | 8 | 96.70 | 2 | 112 | 15.67 | 146334.50 | 2 |
| franchise-builder | audience_moderate | $10971K | 4055 | 81.10 | 7.04 | 7.02 | 6% | 0% | 0% | 0% | 8 | 8 | 96.70 | 2 | 112 | 15.67 | 145419 | 2 |
| franchise-builder | audience_strong | $10852K | 4092.50 | 81.85 | 7 | 7.04 | 8% | 0% | 0% | 0% | 8 | 8 | 96.70 | 2 | 112 | 15.67 | 141586.50 | 2 |
| franchise-builder | combo_A | $11051K | 4125 | 82.50 | 7.09 | 6.95 | 8% | 0% | 0% | 0% | 8 | 8 | 96.70 | 2 | 112 | 15.67 | 140982.50 | 2 |
| franchise-builder | combo_B | $11128K | 4300 | 86 | 7.16 | 6.88 | 8% | 0% | 0% | 0% | 8 | 8 | 96.70 | 2 | 112 | 15.67 | 133679.50 | 2 |
| franchise-builder | combo_C | $11188K | 4605 | 92.10 | 7.25 | 6.80 | 10% | 0% | 0% | 0% | 8 | 8 | 96.70 | 2 | 112 | 15.67 | 127310.50 | 2 |
| repeat-farmer | control | $13453K | 3250 | 65 | 6.86 | 6.83 | 2% | 0% | 0% | 0% | 8 | 8 | 96.40 | 2 | 112 | 15.67 | 231674 | 2 |
| repeat-farmer | ref_no_era_bar | $14420K | 3350 | 67 | 7.00 | 6.98 | 2% | 0% | 0% | 0% | 8 | 8 | 96.70 | 2 | 96 | 15.67 | 261992 | 2 |
| repeat-farmer | ref_era_bar_0.08 | $12338K | 3100 | 62 | 6.75 | 6.74 | 0% | 0% | 0% | 0% | 8 | 8 | 96.20 | 2 | 112 | 15.67 | 205533 | 2 |
| repeat-farmer | critic_mild | $13331K | 3250 | 65 | 6.86 | 6.73 | 2% | 0% | 0% | 0% | 8 | 8 | 96.40 | 2 | 112 | 15.67 | 220552.50 | 2 |
| repeat-farmer | critic_moderate | $13193K | 3250 | 65 | 6.86 | 6.60 | 2% | 0% | 0% | 0% | 8 | 8 | 96.40 | 2 | 112 | 15.67 | 206381 | 2 |
| repeat-farmer | critic_strong | $12979K | 3250 | 65 | 6.86 | 6.47 | 2% | 0% | 0% | 0% | 8 | 8 | 96.40 | 2 | 112 | 15.67 | 192455 | 2 |
| repeat-farmer | critic_moderate_subtract | $13038K | 3250 | 65 | 6.86 | 6.48 | 2% | 0% | 0% | 0% | 8 | 8 | 96.40 | 2 | 112 | 15.67 | 193488.50 | 2 |
| repeat-farmer | audience_mild | $13329K | 3250 | 65 | 6.84 | 6.83 | 2% | 0% | 0% | 0% | 8 | 8 | 96.40 | 2 | 112 | 15.67 | 226092 | 2 |
| repeat-farmer | audience_moderate | $13165K | 3250 | 65 | 6.81 | 6.83 | 2% | 0% | 0% | 0% | 8 | 8 | 96.40 | 2 | 112 | 15.67 | 221031.50 | 2 |
| repeat-farmer | audience_strong | $12769K | 3250 | 65 | 6.76 | 6.83 | 2% | 0% | 0% | 0% | 8 | 8 | 96.40 | 2 | 112 | 15.67 | 211691 | 2 |
| repeat-farmer | combo_A | $13220K | 3250 | 65 | 6.84 | 6.73 | 2% | 0% | 0% | 0% | 8 | 8 | 96.40 | 2 | 112 | 15.67 | 215156.50 | 2 |
| repeat-farmer | combo_B | $12856K | 3250 | 65 | 6.81 | 6.60 | 2% | 0% | 0% | 0% | 8 | 8 | 96.40 | 2 | 112 | 15.67 | 196336 | 2 |
| repeat-farmer | combo_C | $12825K | 3250 | 65 | 6.84 | 6.47 | 2% | 0% | 0% | 0% | 8 | 8 | 96.40 | 2 | 112 | 15.67 | 187408 | 2 |
| cheap-duds | control | $7620K | 150 | 3 | 6.28 | 6.43 | 0% | 0% | 0% | 0% | 4 | 2 | 80.80 | 0 | — | 15.67 | 8150.50 | 0 |
| cheap-duds | ref_no_era_bar | $10896K | 2012.50 | 40.25 | 6.74 | 6.87 | 6% | 0% | 15% | 0% | 4 | 2 | 80.80 | 0 | — | 15.67 | 17219 | 0 |
| cheap-duds | ref_era_bar_0.08 | $5856K | 0 | 0 | 5.94 | 6.11 | 0% | 0% | 0% | 0% | 4 | 2 | 80.80 | 0 | — | 15.67 | 4934 | 0 |
| cheap-duds | critic_mild | $7557K | 150 | 3 | 6.29 | 6.32 | 0% | 0% | 0% | 0% | 4 | 2 | 80.80 | 0 | — | 15.67 | 7862 | 0 |
| cheap-duds | critic_moderate | $7449K | 150 | 3 | 6.29 | 6.19 | 0% | 0% | 0% | 0% | 4 | 2 | 80.80 | 0 | — | 15.67 | 7016.50 | 0 |
| cheap-duds | critic_strong | $7307K | 150 | 3 | 6.28 | 6.05 | 0% | 0% | 0% | 0% | 4 | 2 | 80.80 | 0 | — | 15.67 | 6435.50 | 0 |
| cheap-duds | critic_moderate_subtract | $7209K | 150 | 3 | 6.27 | 6.07 | 0% | 0% | 0% | 0% | 4 | 2 | 80.80 | 0 | — | 15.67 | 6413.50 | 0 |
| cheap-duds | audience_mild | $7527K | 150 | 3 | 6.26 | 6.43 | 0% | 0% | 0% | 0% | 4 | 2 | 80.80 | 0 | — | 15.67 | 7672.50 | 0 |
| cheap-duds | audience_moderate | $7428K | 150 | 3 | 6.24 | 6.42 | 0% | 0% | 0% | 0% | 4 | 2 | 80.80 | 0 | — | 15.67 | 7418.50 | 0 |
| cheap-duds | audience_strong | $7237K | 150 | 3 | 6.19 | 6.41 | 0% | 0% | 0% | 0% | 4 | 2 | 80.80 | 0 | — | 15.67 | 7044.50 | 0 |
| cheap-duds | combo_A | $7466K | 150 | 3 | 6.27 | 6.32 | 0% | 0% | 0% | 0% | 4 | 2 | 80.80 | 0 | — | 15.67 | 7269 | 0 |
| cheap-duds | combo_B | $7150K | 150 | 3 | 6.25 | 6.19 | 0% | 0% | 0% | 0% | 4 | 2 | 80.80 | 0 | — | 15.67 | 6221 | 0 |
| cheap-duds | combo_C | $7199K | 150 | 3 | 6.26 | 6.05 | 0% | 0% | 0% | 0% | 4 | 2 | 80.80 | 0 | — | 15.67 | 5975.50 | 0 |
| experimenter | control | $13512K | 9732.50 | 194.65 | 8.34 | 8.31 | 72% | 22% | 95% | 22% | 8 | 8 | 76.85 | 2 | 128 | 15.67 | 23714 | 1 |
| experimenter | ref_no_era_bar | $13638K | 11935 | 238.70 | 8.59 | 8.53 | 80% | 40% | 100% | 40% | 8 | 8 | 77.40 | 2 | 112 | 15.67 | 25595 | 1 |
| experimenter | ref_era_bar_0.08 | $13363K | 8082.50 | 161.65 | 8.11 | 8.11 | 66% | 12% | 90% | 12% | 8 | 8 | 76.30 | 2 | 160 | 15.67 | 22888 | 1 |
| experimenter | critic_mild | $13511K | 8940 | 178.80 | 8.34 | 8.18 | 70% | 18% | 90% | 18% | 8 | 8 | 76.85 | 2 | 128 | 15.67 | 22894.50 | 1 |
| experimenter | critic_moderate | $13510K | 8165 | 163.30 | 8.34 | 8.02 | 68% | 14% | 85% | 14% | 8 | 8 | 76.85 | 2 | 128 | 15.67 | 21495 | 1 |
| experimenter | critic_strong | $13517K | 7257.50 | 145.15 | 8.34 | 7.85 | 64% | 10% | 80% | 10% | 8 | 8 | 76.85 | 2 | 128 | 15.67 | 20223 | 1 |
| experimenter | critic_moderate_subtract | $13510K | 7990 | 159.80 | 8.34 | 7.97 | 66% | 12% | 80% | 12% | 8 | 8 | 76.85 | 2 | 128 | 15.67 | 21218 | 1 |
| experimenter | audience_mild | $13508K | 9690 | 193.80 | 8.30 | 8.31 | 72% | 22% | 95% | 22% | 8 | 8 | 76.85 | 2 | 128 | 15.67 | 23289 | 1 |
| experimenter | audience_moderate | $13506K | 9392.50 | 187.85 | 8.27 | 8.31 | 72% | 20% | 90% | 20% | 8 | 8 | 76.85 | 2 | 128 | 15.67 | 23142 | 1 |
| experimenter | audience_strong | $13493K | 9210 | 184.20 | 8.20 | 8.31 | 70% | 18% | 90% | 18% | 8 | 8 | 76.85 | 2 | 128 | 15.67 | 22854 | 1 |
| experimenter | combo_A | $13508K | 8872.50 | 177.45 | 8.30 | 8.18 | 70% | 18% | 90% | 18% | 8 | 8 | 76.85 | 2 | 128 | 15.67 | 22477 | 1 |
| experimenter | combo_B | $13504K | 7997.50 | 159.95 | 8.27 | 8.02 | 66% | 12% | 80% | 12% | 8 | 8 | 76.85 | 2 | 128 | 15.67 | 20936 | 1 |
| experimenter | combo_C | $13513K | 7245 | 144.90 | 8.30 | 7.85 | 62% | 9% | 75% | 9% | 8 | 8 | 76.85 | 2 | 128 | 15.67 | 19801 | 1 |
| self-funder | control | $305K | 3212.50 | 64.25 | 7.21 | 7.16 | 10% | 0% | 15% | 0% | 4 | 2 | 100 | 0 | — | 15.67 | 3823 | 12 |
| self-funder | ref_no_era_bar | $316K | 5090 | 101.80 | 7.66 | 7.57 | 38% | 2% | 55% | 2% | 4 | 2 | 100 | 0 | — | 15.67 | 4736.50 | 12 |
| self-funder | ref_era_bar_0.08 | $300K | 785 | 15.70 | 6.87 | 6.85 | 2% | 0% | 5% | 0% | 4 | 2 | 100 | 0 | — | 15.67 | 3639.50 | 12 |
| self-funder | critic_mild | $307K | 3157.50 | 63.15 | 7.21 | 7.04 | 8% | 0% | 10% | 0% | 4 | 2 | 100 | 0 | — | 15.67 | 3691.50 | 12 |
| self-funder | critic_moderate | $306K | 3110 | 62.20 | 7.22 | 6.90 | 6% | 0% | 5% | 0% | 4 | 2 | 100 | 0 | — | 15.67 | 3475 | 12 |
| self-funder | critic_strong | $307K | 3075 | 61.50 | 7.21 | 6.76 | 4% | 0% | 5% | 0% | 4 | 2 | 100 | 0 | — | 15.67 | 3321 | 12 |
| self-funder | critic_moderate_subtract | $306K | 3100 | 62 | 7.21 | 6.81 | 6% | 0% | 5% | 0% | 4 | 2 | 100 | 0 | — | 15.67 | 3374 | 12 |
| self-funder | audience_mild | $302K | 3157.50 | 63.15 | 7.18 | 7.16 | 10% | 0% | 15% | 0% | 4 | 2 | 100 | 0 | — | 15.67 | 3801 | 12 |
| self-funder | audience_moderate | $301K | 3120 | 62.40 | 7.16 | 7.16 | 10% | 0% | 10% | 0% | 4 | 2 | 100 | 0 | — | 15.67 | 3800 | 12 |
| self-funder | audience_strong | $299K | 2945 | 58.90 | 7.09 | 7.16 | 8% | 0% | 10% | 0% | 4 | 2 | 100 | 0 | — | 15.67 | 3775.50 | 12 |
| self-funder | combo_A | $305K | 3115 | 62.30 | 7.19 | 7.04 | 8% | 0% | 10% | 0% | 4 | 2 | 100 | 0 | — | 15.67 | 3658 | 12 |
| self-funder | combo_B | $302K | 3005 | 60.10 | 7.16 | 6.90 | 6% | 0% | 5% | 0% | 4 | 2 | 100 | 0 | — | 15.67 | 3408.50 | 12 |
| self-funder | combo_C | $303K | 3025 | 60.50 | 7.18 | 6.75 | 4% | 0% | 5% | 0% | 4 | 2 | 100 | 0 | — | 15.67 | 3274 | 12 |
| selective-self-funder | control | $12528K | 11265 | 225.30 | 8.43 | 8.37 | 72% | 30% | 85% | 30% | 8 | 8 | 96.60 | 2 | 112 | 15.67 | 98273.50 | 2 |
| selective-self-funder | ref_no_era_bar | $12500K | 12702.50 | 254.05 | 8.63 | 8.52 | 78% | 40% | 85% | 40% | 8 | 8 | 96.80 | 2 | 96 | 15.67 | 105090 | 2 |
| selective-self-funder | ref_era_bar_0.08 | $12464K | 9972.50 | 199.45 | 8.26 | 8.18 | 66% | 20% | 80% | 20% | 8 | 8 | 96.30 | 2 | 112 | 15.67 | 93452.50 | 2 |
| selective-self-funder | critic_mild | $12547K | 10767.50 | 215.35 | 8.45 | 8.25 | 72% | 26% | 80% | 26% | 8 | 8 | 96.60 | 2 | 112 | 15.67 | 95905.50 | 2 |
| selective-self-funder | critic_moderate | $12554K | 10057.50 | 201.15 | 8.45 | 8.10 | 68% | 20% | 80% | 20% | 8 | 8 | 96.60 | 2 | 112 | 15.67 | 89574.50 | 2 |
| selective-self-funder | critic_strong | $12549K | 9192.50 | 183.85 | 8.46 | 7.93 | 66% | 16% | 75% | 16% | 8 | 8 | 96.60 | 2 | 112 | 15.67 | 86844.50 | 2 |
| selective-self-funder | critic_moderate_subtract | $12551K | 9960 | 199.20 | 8.46 | 8.06 | 68% | 20% | 75% | 20% | 8 | 8 | 96.60 | 2 | 112 | 15.67 | 88151 | 2 |
| selective-self-funder | audience_mild | $12522K | 11035 | 220.70 | 8.41 | 8.37 | 72% | 28% | 85% | 28% | 8 | 8 | 96.60 | 2 | 112 | 15.67 | 97216 | 2 |
| selective-self-funder | audience_moderate | $12522K | 10985 | 219.70 | 8.38 | 8.37 | 72% | 28% | 85% | 28% | 8 | 8 | 96.60 | 2 | 112 | 15.67 | 97060.50 | 2 |
| selective-self-funder | audience_strong | $12519K | 10830 | 216.60 | 8.32 | 8.37 | 72% | 26% | 80% | 26% | 8 | 8 | 96.60 | 2 | 112 | 15.67 | 95237.50 | 2 |
| selective-self-funder | combo_A | $12546K | 10700 | 214 | 8.42 | 8.25 | 72% | 26% | 80% | 26% | 8 | 8 | 96.60 | 2 | 112 | 15.67 | 93780 | 2 |
| selective-self-funder | combo_B | $12548K | 9912.50 | 198.25 | 8.40 | 8.10 | 68% | 18% | 75% | 18% | 8 | 8 | 96.60 | 2 | 112 | 15.67 | 88264 | 2 |
| selective-self-funder | combo_C | $12551K | 9122.50 | 182.45 | 8.43 | 7.93 | 66% | 14% | 70% | 14% | 8 | 8 | 96.60 | 2 | 112 | 15.67 | 85038.50 | 2 |
| famous-star | control | $11594K | 380 | 7.60 | 6.68 | 6.72 | 0% | 0% | 0% | 0% | 4 | 2 | 80.80 | 0 | — | 15.67 | 13267 | 7 |
| famous-star | ref_no_era_bar | $13660K | 2732.50 | 54.65 | 7.18 | 7.17 | 12% | 0% | 25% | 0% | 4 | 2 | 80.80 | 0 | — | 15.67 | 19343 | 7 |
| famous-star | ref_era_bar_0.08 | $9425K | 150 | 3 | 6.35 | 6.39 | 0% | 0% | 0% | 0% | 4 | 2 | 80.80 | 0 | — | 15.67 | 10075.50 | 7 |
| famous-star | critic_mild | $11585K | 375 | 7.50 | 6.68 | 6.61 | 0% | 0% | 0% | 0% | 4 | 2 | 80.80 | 0 | — | 15.67 | 12658 | 7 |
| famous-star | critic_moderate | $11573K | 375 | 7.50 | 6.68 | 6.48 | 0% | 0% | 0% | 0% | 4 | 2 | 80.80 | 0 | — | 15.67 | 11675.50 | 7 |
| famous-star | critic_strong | $11561K | 375 | 7.50 | 6.68 | 6.34 | 0% | 0% | 0% | 0% | 4 | 2 | 80.80 | 0 | — | 15.67 | 11037 | 7 |
| famous-star | critic_moderate_subtract | $11565K | 375 | 7.50 | 6.68 | 6.37 | 0% | 0% | 0% | 0% | 4 | 2 | 80.80 | 0 | — | 15.67 | 11203.50 | 7 |
| famous-star | audience_mild | $11556K | 375 | 7.50 | 6.65 | 6.72 | 0% | 0% | 0% | 0% | 4 | 2 | 80.80 | 0 | — | 15.67 | 12745.50 | 7 |
| famous-star | audience_moderate | $11446K | 300 | 6 | 6.63 | 6.71 | 0% | 0% | 0% | 0% | 4 | 2 | 80.80 | 0 | — | 15.67 | 12373 | 7 |
| famous-star | audience_strong | $11186K | 235 | 4.70 | 6.57 | 6.72 | 0% | 0% | 0% | 0% | 4 | 2 | 80.80 | 0 | — | 15.67 | 11960 | 7 |
| famous-star | combo_A | $11549K | 375 | 7.50 | 6.65 | 6.61 | 0% | 0% | 0% | 0% | 4 | 2 | 80.80 | 0 | — | 15.67 | 12127.50 | 7 |
| famous-star | combo_B | $11424K | 300 | 6 | 6.63 | 6.47 | 0% | 0% | 0% | 0% | 4 | 2 | 80.80 | 0 | — | 15.67 | 10836.50 | 7 |
| famous-star | combo_C | $11521K | 375 | 7.50 | 6.65 | 6.34 | 0% | 0% | 0% | 0% | 4 | 2 | 80.80 | 0 | — | 15.67 | 10534.50 | 7 |

### Paired deltas vs **control** (median of per-seed differences; share of seeds where the variant is higher)

| Strategy | Variant | Δ endCash | Δ prestige | Δ share8plus | Δ meanAudience |
|---|---|---:|---:|---:|---:|
| balanced | ref_no_era_bar | $34K (59%) | 1582.50 (90%) | 4% (75%) | 0.20 (92%) |
| balanced | ref_era_bar_0.08 | $-26K (41%) | -1025 (17%) | -6% (16%) | -0.14 (13%) |
| balanced | critic_mild | $3K (71%) | -485 (5%) | 0% (6%) | 0 (12%) |
| balanced | critic_moderate | $5K (62%) | -1225 (2%) | -4% (4%) | 0 (32%) |
| balanced | critic_strong | $5K (57%) | -2045 (1%) | -6% (3%) | 0 (44%) |
| balanced | critic_moderate_subtract | $5K (58%) | -1395 (3%) | -4% (4%) | 0 (39%) |
| balanced | audience_mild | $-2K (9%) | -200 (2%) | 0% (1%) | -0.03 (1%) |
| balanced | audience_moderate | $-6K (14%) | -275 (5%) | 0% (5%) | -0.06 (2%) |
| balanced | audience_strong | $-22K (13%) | -475 (5%) | -2% (6%) | -0.12 (1%) |
| balanced | combo_A | $-0K (50%) | -570 (10%) | -2% (9%) | -0.03 (13%) |
| balanced | combo_B | $-4K (44%) | -1425 (2%) | -4% (3%) | -0.06 (12%) |
| balanced | combo_C | $2K (52%) | -2170 (1%) | -8% (3%) | -0.02 (35%) |
| quality-first | ref_no_era_bar | $46K (64%) | 1640 (99%) | 4% (84%) | 0.19 (100%) |
| quality-first | ref_era_bar_0.08 | $-48K (40%) | -1115 (3%) | -6% (3%) | -0.15 (0%) |
| quality-first | critic_mild | $2K (74%) | -485 (0%) | -2% (0%) | 0 (2%) |
| quality-first | critic_moderate | $3K (67%) | -1310 (0%) | -5% (0%) | 0 (5%) |
| quality-first | critic_strong | $5K (68%) | -2080 (0%) | -8% (0%) | 0 (7%) |
| quality-first | critic_moderate_subtract | $4K (67%) | -1425 (0%) | -6% (0%) | 0 (5%) |
| quality-first | audience_mild | $-3K (0%) | -200 (0%) | 0% (0%) | -0.03 (0%) |
| quality-first | audience_moderate | $-9K (1%) | -200 (0%) | 0% (0%) | -0.06 (0%) |
| quality-first | audience_strong | $-30K (3%) | -400 (1%) | -2% (0%) | -0.12 (0%) |
| quality-first | combo_A | $-2K (34%) | -600 (0%) | -2% (0%) | -0.03 (1%) |
| quality-first | combo_B | $-7K (31%) | -1495 (0%) | -6% (0%) | -0.06 (0%) |
| quality-first | combo_C | $0K (50%) | -2195 (0%) | -10% (0%) | -0.03 (2%) |
| franchise-builder | ref_no_era_bar | $283K (87%) | 372.50 (80%) | 2% (56%) | 0.16 (85%) |
| franchise-builder | ref_era_bar_0.08 | $-235K (21%) | -125 (23%) | 0% (21%) | -0.13 (21%) |
| franchise-builder | critic_mild | $-26K (8%) | 0 (7%) | 0% (7%) | 0 (8%) |
| franchise-builder | critic_moderate | $-47K (20%) | 0 (20%) | 0% (20%) | 0 (24%) |
| franchise-builder | critic_strong | $-73K (26%) | 0 (27%) | 0% (23%) | 0 (33%) |
| franchise-builder | critic_moderate_subtract | $-59K (30%) | 0 (37%) | 0% (35%) | 0 (43%) |
| franchise-builder | audience_mild | $-22K (0%) | 0 (2%) | 0% (2%) | -0.03 (1%) |
| franchise-builder | audience_moderate | $-64K (1%) | 0 (2%) | 0% (2%) | -0.05 (2%) |
| franchise-builder | audience_strong | $-257K (6%) | 0 (8%) | 0% (9%) | -0.10 (8%) |
| franchise-builder | combo_A | $-42K (10%) | 0 (11%) | 0% (11%) | -0.02 (12%) |
| franchise-builder | combo_B | $-94K (20%) | 0 (23%) | 0% (22%) | -0.05 (27%) |
| franchise-builder | combo_C | $-73K (28%) | 0 (38%) | 0% (32%) | -0.02 (42%) |
| repeat-farmer | ref_no_era_bar | $1074K (90%) | 210 (86%) | 2% (52%) | 0.17 (92%) |
| repeat-farmer | ref_era_bar_0.08 | $-991K (11%) | -125 (14%) | 0% (11%) | -0.13 (10%) |
| repeat-farmer | critic_mild | $-123K (0%) | 0 (0%) | 0% (0%) | 0 (0%) |
| repeat-farmer | critic_moderate | $-296K (0%) | 0 (0%) | 0% (0%) | 0 (0%) |
| repeat-farmer | critic_strong | $-500K (0%) | 0 (0%) | 0% (0%) | 0 (1%) |
| repeat-farmer | critic_moderate_subtract | $-441K (0%) | 0 (0%) | 0% (0%) | 0 (1%) |
| repeat-farmer | audience_mild | $-116K (0%) | 0 (0%) | 0% (0%) | -0.02 (0%) |
| repeat-farmer | audience_moderate | $-246K (0%) | 0 (0%) | 0% (0%) | -0.05 (0%) |
| repeat-farmer | audience_strong | $-536K (0%) | 0 (0%) | 0% (0%) | -0.10 (0%) |
| repeat-farmer | combo_A | $-249K (0%) | 0 (0%) | 0% (0%) | -0.02 (0%) |
| repeat-farmer | combo_B | $-560K (0%) | 0 (0%) | 0% (0%) | -0.05 (0%) |
| repeat-farmer | combo_C | $-636K (0%) | 0 (0%) | 0% (0%) | -0.02 (0%) |
| cheap-duds | ref_no_era_bar | $3323K (100%) | 1852.50 (100%) | 6% (95%) | 0.48 (100%) |
| cheap-duds | ref_era_bar_0.08 | $-1662K (0%) | -150 (3%) | 0% (0%) | -0.32 (0%) |
| cheap-duds | critic_mild | $-111K (10%) | 0 (7%) | 0% (0%) | 0 (12%) |
| cheap-duds | critic_moderate | $-245K (13%) | 0 (12%) | 0% (0%) | 0 (21%) |
| cheap-duds | critic_strong | $-388K (11%) | 0 (19%) | 0% (0%) | 0 (27%) |
| cheap-duds | critic_moderate_subtract | $-376K (9%) | 0 (18%) | 0% (0%) | 0 (26%) |
| cheap-duds | audience_mild | $-82K (3%) | 0 (0%) | 0% (0%) | -0.02 (3%) |
| cheap-duds | audience_moderate | $-166K (6%) | 0 (3%) | 0% (0%) | -0.05 (6%) |
| cheap-duds | audience_strong | $-360K (8%) | -75 (4%) | 0% (1%) | -0.10 (6%) |
| cheap-duds | combo_A | $-195K (10%) | 0 (5%) | 0% (0%) | -0.02 (11%) |
| cheap-duds | combo_B | $-412K (7%) | 0 (8%) | 0% (0%) | -0.05 (12%) |
| cheap-duds | combo_C | $-472K (8%) | 0 (12%) | 0% (0%) | -0.02 (19%) |
| experimenter | ref_no_era_bar | $59K (68%) | 2140 (100%) | 6% (95%) | 0.25 (100%) |
| experimenter | ref_era_bar_0.08 | $-140K (22%) | -1577.50 (0%) | -6% (0%) | -0.22 (0%) |
| experimenter | critic_mild | $2K (72%) | -740 (0%) | -2% (0%) | 0 (0%) |
| experimenter | critic_moderate | $4K (63%) | -1565 (0%) | -4% (0%) | 0 (1%) |
| experimenter | critic_strong | $6K (60%) | -2500 (0%) | -8% (0%) | 0 (3%) |
| experimenter | critic_moderate_subtract | $4K (63%) | -1707.50 (0%) | -6% (0%) | 0 (1%) |
| experimenter | audience_mild | $-2K (4%) | 0 (0%) | 0% (0%) | -0.03 (0%) |
| experimenter | audience_moderate | $-3K (9%) | -200 (0%) | 0% (0%) | -0.06 (0%) |
| experimenter | audience_strong | $-16K (7%) | -412.50 (0%) | -2% (0%) | -0.13 (0%) |
| experimenter | combo_A | $-0K (46%) | -825 (0%) | -2% (0%) | -0.03 (0%) |
| experimenter | combo_B | $-1K (46%) | -1720 (0%) | -6% (0%) | -0.06 (0%) |
| experimenter | combo_C | $2K (53%) | -2525 (0%) | -10% (0%) | -0.03 (0%) |
| self-funder | ref_no_era_bar | $17K (68%) | 1875 (100%) | 26% (100%) | 0.45 (100%) |
| self-funder | ref_era_bar_0.08 | $-8K (41%) | -2390 (0%) | -8% (0%) | -0.34 (0%) |
| self-funder | critic_mild | $1K (59%) | -85 (0%) | -2% (1%) | 0 (1%) |
| self-funder | critic_moderate | $0K (51%) | -85 (1%) | -4% (0%) | 0 (5%) |
| self-funder | critic_strong | $0K (53%) | -170 (2%) | -6% (0%) | 0 (8%) |
| self-funder | critic_moderate_subtract | $-0K (49%) | -85 (2%) | -6% (0%) | 0 (6%) |
| self-funder | audience_mild | $-7K (22%) | 0 (0%) | 0% (0%) | -0.03 (0%) |
| self-funder | audience_moderate | $-8K (24%) | -75 (0%) | -1% (0%) | -0.05 (0%) |
| self-funder | audience_strong | $-12K (24%) | -225 (1%) | -2% (1%) | -0.11 (0%) |
| self-funder | combo_A | $-6K (26%) | -85 (0%) | -4% (0%) | -0.03 (1%) |
| self-funder | combo_B | $-9K (26%) | -170 (0%) | -6% (0%) | -0.05 (0%) |
| self-funder | combo_C | $-8K (28%) | -170 (1%) | -6% (0%) | -0.03 (3%) |
| selective-self-funder | ref_no_era_bar | $19K (55%) | 1417.50 (89%) | 4% (71%) | 0.18 (89%) |
| selective-self-funder | ref_era_bar_0.08 | $-35K (42%) | -1187.50 (9%) | -6% (12%) | -0.16 (12%) |
| selective-self-funder | critic_mild | $3K (75%) | -485 (5%) | -2% (5%) | 0 (12%) |
| selective-self-funder | critic_moderate | $8K (70%) | -1255 (2%) | -4% (4%) | 0 (31%) |
| selective-self-funder | critic_strong | $10K (65%) | -2050 (0%) | -6% (2%) | 0 (38%) |
| selective-self-funder | critic_moderate_subtract | $10K (68%) | -1340 (1%) | -4% (6%) | 0 (38%) |
| selective-self-funder | audience_mild | $-2K (12%) | -200 (1%) | 0% (1%) | -0.03 (1%) |
| selective-self-funder | audience_moderate | $-4K (16%) | -200 (5%) | 0% (4%) | -0.06 (3%) |
| selective-self-funder | audience_strong | $-13K (17%) | -400 (5%) | -2% (5%) | -0.12 (1%) |
| selective-self-funder | combo_A | $1K (54%) | -570 (10%) | -2% (7%) | -0.03 (16%) |
| selective-self-funder | combo_B | $-1K (49%) | -1420 (1%) | -4% (4%) | -0.06 (13%) |
| selective-self-funder | combo_C | $4K (56%) | -2142.50 (0%) | -7% (1%) | -0.03 (31%) |
| famous-star | ref_no_era_bar | $2037K (100%) | 2260 (100%) | 12% (100%) | 0.50 (100%) |
| famous-star | ref_era_bar_0.08 | $-1845K (0%) | -300 (0%) | 0% (0%) | -0.33 (0%) |
| famous-star | critic_mild | $-9K (0%) | 0 (0%) | 0% (0%) | 0 (0%) |
| famous-star | critic_moderate | $-21K (0%) | 0 (0%) | 0% (0%) | 0 (0%) |
| famous-star | critic_strong | $-35K (0%) | 0 (0%) | 0% (0%) | 0 (0%) |
| famous-star | critic_moderate_subtract | $-34K (0%) | 0 (0%) | 0% (0%) | 0 (0%) |
| famous-star | audience_mild | $-48K (6%) | -75 (0%) | 0% (0%) | -0.03 (0%) |
| famous-star | audience_moderate | $-118K (3%) | -75 (1%) | 0% (0%) | -0.05 (0%) |
| famous-star | audience_strong | $-303K (1%) | -150 (0%) | 0% (1%) | -0.10 (0%) |
| famous-star | combo_A | $-59K (5%) | -75 (0%) | 0% (0%) | -0.03 (0%) |
| famous-star | combo_B | $-145K (3%) | -117.50 (1%) | 0% (0%) | -0.05 (0%) |
| famous-star | combo_C | $-88K (3%) | -75 (0%) | 0% (0%) | -0.03 (0%) |

### Mean review score (avg of Audience+Critic) by production index

| Strategy | Variant | #1 | #5 | #10 | #20 | #30 | #50 |
|---|---|---:|---:|---:|---:|---:|---:|
| balanced | control | 5.62 | 7.39 | 8.27 | 8.67 | 8.73 | 8.75 |
| balanced | ref_no_era_bar | 5.65 | 7.51 | 8.47 | 8.89 | 8.88 | 8.96 |
| balanced | ref_era_bar_0.08 | 5.59 | 7.29 | 8.10 | 8.53 | 8.54 | 8.67 |
| balanced | critic_mild | 5.62 | 7.39 | 8.27 | 8.67 | 8.63 | 8.64 |
| balanced | critic_moderate | 5.62 | 7.39 | 8.27 | 8.50 | 8.58 | 8.46 |
| balanced | critic_strong | 5.62 | 7.39 | 8.27 | 8.46 | 8.54 | 8.15 |
| balanced | critic_moderate_subtract | 5.62 | 7.39 | 8.27 | 8.48 | 8.56 | 8.43 |
| balanced | audience_mild | 5.62 | 7.39 | 8.27 | 8.67 | 8.73 | 8.70 |
| balanced | audience_moderate | 5.62 | 7.39 | 8.27 | 8.67 | 8.73 | 8.69 |
| balanced | audience_strong | 5.62 | 7.39 | 8.27 | 8.67 | 8.62 | 8.65 |
| balanced | combo_A | 5.62 | 7.39 | 8.27 | 8.67 | 8.63 | 8.62 |
| balanced | combo_B | 5.62 | 7.39 | 8.27 | 8.50 | 8.58 | 8.41 |
| balanced | combo_C | 5.62 | 7.39 | 8.27 | 8.46 | 8.54 | 8.11 |
| quality-first | control | 5.59 | 7.34 | 8.20 | 8.69 | 8.78 | 8.72 |
| quality-first | ref_no_era_bar | 5.62 | 7.45 | 8.38 | 8.90 | 8.97 | 8.96 |
| quality-first | ref_era_bar_0.08 | 5.56 | 7.23 | 8.04 | 8.51 | 8.60 | 8.71 |
| quality-first | critic_mild | 5.59 | 7.34 | 8.20 | 8.69 | 8.65 | 8.60 |
| quality-first | critic_moderate | 5.59 | 7.34 | 8.20 | 8.53 | 8.62 | 8.38 |
| quality-first | critic_strong | 5.59 | 7.34 | 8.20 | 8.48 | 8.56 | 8.08 |
| quality-first | critic_moderate_subtract | 5.59 | 7.34 | 8.20 | 8.50 | 8.59 | 8.33 |
| quality-first | audience_mild | 5.59 | 7.34 | 8.20 | 8.69 | 8.78 | 8.66 |
| quality-first | audience_moderate | 5.59 | 7.34 | 8.20 | 8.69 | 8.78 | 8.64 |
| quality-first | audience_strong | 5.59 | 7.34 | 8.20 | 8.69 | 8.65 | 8.60 |
| quality-first | combo_A | 5.59 | 7.34 | 8.20 | 8.69 | 8.65 | 8.54 |
| quality-first | combo_B | 5.59 | 7.34 | 8.20 | 8.53 | 8.62 | 8.30 |
| quality-first | combo_C | 5.59 | 7.34 | 8.20 | 8.48 | 8.56 | 8.01 |
| franchise-builder | control | 5.60 | 7.37 | 7.72 | 7.04 | 6.85 | 6.94 |
| franchise-builder | ref_no_era_bar | 5.63 | 7.47 | 7.87 | 7.18 | 6.97 | 7.06 |
| franchise-builder | ref_era_bar_0.08 | 5.57 | 7.27 | 7.58 | 6.92 | 6.90 | 6.96 |
| franchise-builder | critic_mild | 5.60 | 7.37 | 7.72 | 7.04 | 6.89 | 6.86 |
| franchise-builder | critic_moderate | 5.60 | 7.37 | 7.72 | 6.90 | 6.88 | 6.83 |
| franchise-builder | critic_strong | 5.60 | 7.37 | 7.72 | 6.88 | 6.84 | 6.58 |
| franchise-builder | critic_moderate_subtract | 5.60 | 7.37 | 7.72 | 6.84 | 6.89 | 7.04 |
| franchise-builder | audience_mild | 5.60 | 7.37 | 7.72 | 7.04 | 6.85 | 6.91 |
| franchise-builder | audience_moderate | 5.60 | 7.37 | 7.72 | 7.04 | 6.85 | 6.90 |
| franchise-builder | audience_strong | 5.60 | 7.37 | 7.72 | 7.04 | 6.88 | 6.87 |
| franchise-builder | combo_A | 5.60 | 7.37 | 7.72 | 7.04 | 6.89 | 6.85 |
| franchise-builder | combo_B | 5.60 | 7.37 | 7.72 | 6.90 | 6.88 | 6.80 |
| franchise-builder | combo_C | 5.60 | 7.37 | 7.72 | 6.88 | 6.84 | 6.77 |
| repeat-farmer | control | 5.61 | 7.39 | 7.77 | 6.60 | 6.68 | 6.74 |
| repeat-farmer | ref_no_era_bar | 5.64 | 7.51 | 7.86 | 6.75 | 6.83 | 6.94 |
| repeat-farmer | ref_era_bar_0.08 | 5.58 | 7.27 | 7.71 | 6.50 | 6.53 | 6.70 |
| repeat-farmer | critic_mild | 5.61 | 7.39 | 7.77 | 6.60 | 6.58 | 6.64 |
| repeat-farmer | critic_moderate | 5.61 | 7.39 | 7.77 | 6.47 | 6.54 | 6.47 |
| repeat-farmer | critic_strong | 5.61 | 7.39 | 7.77 | 6.44 | 6.51 | 6.24 |
| repeat-farmer | critic_moderate_subtract | 5.61 | 7.39 | 7.77 | 6.40 | 6.48 | 6.34 |
| repeat-farmer | audience_mild | 5.61 | 7.39 | 7.77 | 6.60 | 6.68 | 6.69 |
| repeat-farmer | audience_moderate | 5.61 | 7.39 | 7.77 | 6.60 | 6.68 | 6.67 |
| repeat-farmer | audience_strong | 5.61 | 7.39 | 7.77 | 6.60 | 6.58 | 6.64 |
| repeat-farmer | combo_A | 5.61 | 7.39 | 7.77 | 6.60 | 6.58 | 6.59 |
| repeat-farmer | combo_B | 5.61 | 7.39 | 7.77 | 6.47 | 6.54 | 6.40 |
| repeat-farmer | combo_C | 5.61 | 7.39 | 7.77 | 6.44 | 6.51 | 6.19 |
| cheap-duds | control | 5.47 | 5.81 | 6.12 | 6.41 | 6.57 | 6.49 |
| cheap-duds | ref_no_era_bar | 5.50 | 5.95 | 6.38 | 6.79 | 7.05 | 7.20 |
| cheap-duds | ref_era_bar_0.08 | 5.44 | 5.69 | 5.89 | 6.05 | 6.09 | 6.29 |
| cheap-duds | critic_mild | 5.47 | 5.81 | 6.12 | 6.41 | 6.47 | 6.38 |
| cheap-duds | critic_moderate | 5.47 | 5.81 | 6.12 | 6.28 | 6.45 | 6.21 |
| cheap-duds | critic_strong | 5.47 | 5.81 | 6.12 | 6.25 | 6.42 | 5.99 |
| cheap-duds | critic_moderate_subtract | 5.47 | 5.81 | 6.12 | 6.21 | 6.38 | 6.05 |
| cheap-duds | audience_mild | 5.47 | 5.81 | 6.12 | 6.41 | 6.57 | 6.44 |
| cheap-duds | audience_moderate | 5.47 | 5.81 | 6.12 | 6.41 | 6.57 | 6.43 |
| cheap-duds | audience_strong | 5.47 | 5.81 | 6.12 | 6.41 | 6.47 | 6.40 |
| cheap-duds | combo_A | 5.47 | 5.81 | 6.12 | 6.41 | 6.47 | 6.33 |
| cheap-duds | combo_B | 5.47 | 5.81 | 6.12 | 6.28 | 6.45 | 6.17 |
| cheap-duds | combo_C | 5.47 | 5.81 | 6.12 | 6.25 | 6.42 | 5.90 |
| experimenter | control | 5.59 | 7.23 | 8.02 | 8.61 | 8.76 | 8.47 |
| experimenter | ref_no_era_bar | 5.62 | 7.37 | 8.28 | 8.76 | 8.96 | 8.75 |
| experimenter | ref_era_bar_0.08 | 5.57 | 7.11 | 7.67 | 8.41 | 8.50 | 8.36 |
| experimenter | critic_mild | 5.59 | 7.23 | 8.02 | 8.61 | 8.64 | 8.34 |
| experimenter | critic_moderate | 5.59 | 7.23 | 8.02 | 8.45 | 8.61 | 8.13 |
| experimenter | critic_strong | 5.59 | 7.23 | 8.02 | 8.40 | 8.57 | 7.83 |
| experimenter | critic_moderate_subtract | 5.59 | 7.23 | 8.02 | 8.42 | 8.58 | 8.07 |
| experimenter | audience_mild | 5.59 | 7.23 | 8.02 | 8.61 | 8.76 | 8.41 |
| experimenter | audience_moderate | 5.59 | 7.23 | 8.02 | 8.61 | 8.76 | 8.39 |
| experimenter | audience_strong | 5.59 | 7.23 | 8.02 | 8.61 | 8.64 | 8.34 |
| experimenter | combo_A | 5.59 | 7.23 | 8.02 | 8.61 | 8.64 | 8.28 |
| experimenter | combo_B | 5.59 | 7.23 | 8.02 | 8.45 | 8.61 | 8.05 |
| experimenter | combo_C | 5.59 | 7.23 | 8.02 | 8.40 | 8.57 | 7.77 |
| self-funder | control | 5.48 | 6.12 | 6.75 | 7.43 | 7.58 | 7.26 |
| self-funder | ref_no_era_bar | 5.51 | 6.25 | 7.06 | 7.87 | 8.08 | 7.97 |
| self-funder | ref_era_bar_0.08 | 5.45 | 5.99 | 6.49 | 7.03 | 7.11 | 7.03 |
| self-funder | critic_mild | 5.48 | 6.12 | 6.75 | 7.43 | 7.46 | 7.15 |
| self-funder | critic_moderate | 5.48 | 6.12 | 6.75 | 7.28 | 7.43 | 6.96 |
| self-funder | critic_strong | 5.48 | 6.12 | 6.75 | 7.24 | 7.40 | 6.71 |
| self-funder | critic_moderate_subtract | 5.48 | 6.12 | 6.75 | 7.23 | 7.37 | 6.85 |
| self-funder | audience_mild | 5.48 | 6.12 | 6.75 | 7.43 | 7.58 | 7.20 |
| self-funder | audience_moderate | 5.48 | 6.12 | 6.75 | 7.43 | 7.58 | 7.18 |
| self-funder | audience_strong | 5.48 | 6.12 | 6.75 | 7.43 | 7.45 | 7.15 |
| self-funder | combo_A | 5.48 | 6.12 | 6.75 | 7.43 | 7.46 | 7.10 |
| self-funder | combo_B | 5.48 | 6.12 | 6.75 | 7.28 | 7.43 | 6.90 |
| self-funder | combo_C | 5.48 | 6.12 | 6.75 | 7.24 | 7.40 | 6.66 |
| selective-self-funder | control | 5.63 | 7.35 | 8.30 | 8.74 | 8.74 | 8.68 |
| selective-self-funder | ref_no_era_bar | 5.66 | 7.46 | 8.49 | 8.87 | 8.93 | 8.94 |
| selective-self-funder | ref_era_bar_0.08 | 5.60 | 7.24 | 8.12 | 8.50 | 8.54 | 8.59 |
| selective-self-funder | critic_mild | 5.63 | 7.35 | 8.30 | 8.74 | 8.62 | 8.57 |
| selective-self-funder | critic_moderate | 5.63 | 7.35 | 8.30 | 8.58 | 8.57 | 8.46 |
| selective-self-funder | critic_strong | 5.63 | 7.35 | 8.30 | 8.54 | 8.53 | 8.15 |
| selective-self-funder | critic_moderate_subtract | 5.63 | 7.35 | 8.30 | 8.55 | 8.56 | 8.44 |
| selective-self-funder | audience_mild | 5.63 | 7.35 | 8.30 | 8.74 | 8.74 | 8.62 |
| selective-self-funder | audience_moderate | 5.63 | 7.35 | 8.30 | 8.74 | 8.74 | 8.59 |
| selective-self-funder | audience_strong | 5.63 | 7.35 | 8.30 | 8.74 | 8.61 | 8.58 |
| selective-self-funder | combo_A | 5.63 | 7.35 | 8.30 | 8.74 | 8.62 | 8.58 |
| selective-self-funder | combo_B | 5.63 | 7.35 | 8.30 | 8.58 | 8.57 | 8.40 |
| selective-self-funder | combo_C | 5.63 | 7.35 | 8.30 | 8.54 | 8.53 | 8.09 |
| famous-star | control | 5.57 | 5.98 | 6.39 | 6.79 | 6.97 | 6.89 |
| famous-star | ref_no_era_bar | 5.60 | 6.11 | 6.64 | 7.25 | 7.51 | 7.66 |
| famous-star | ref_era_bar_0.08 | 5.54 | 5.85 | 6.16 | 6.43 | 6.46 | 6.64 |
| famous-star | critic_mild | 5.57 | 5.98 | 6.39 | 6.79 | 6.87 | 6.79 |
| famous-star | critic_moderate | 5.57 | 5.98 | 6.39 | 6.66 | 6.83 | 6.61 |
| famous-star | critic_strong | 5.57 | 5.98 | 6.39 | 6.62 | 6.80 | 6.37 |
| famous-star | critic_moderate_subtract | 5.57 | 5.98 | 6.39 | 6.59 | 6.77 | 6.49 |
| famous-star | audience_mild | 5.57 | 5.98 | 6.39 | 6.79 | 6.97 | 6.84 |
| famous-star | audience_moderate | 5.57 | 5.98 | 6.39 | 6.79 | 6.97 | 6.81 |
| famous-star | audience_strong | 5.57 | 5.98 | 6.39 | 6.79 | 6.86 | 6.78 |
| famous-star | combo_A | 5.57 | 5.98 | 6.39 | 6.79 | 6.87 | 6.73 |
| famous-star | combo_B | 5.57 | 5.98 | 6.39 | 6.66 | 6.83 | 6.53 |
| famous-star | combo_C | 5.57 | 5.98 | 6.39 | 6.62 | 6.80 | 6.31 |

### Great films — all strategies pooled, by release window

Denominators are films in that window. HoF = average of Audience and Critic ≥ hofThreshold (9.0). `≥9` is inclusive, `>9` strict.

| Strategy | Config | Window | Films (n) | Avg Aud | Avg Crit | HoF n (%) | Avg ≥9 n (%) | Avg >9 n (%) | Aud ≥9 n (%) | Crit ≥9 n (%) | 8+ n (%) | Careers with 0 HoF | HoF/career p10/p50/p90 | Best/career p10/p50/p90/p99 | Best combined movie | Prestige median |
|---|---|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---|---|---|---:|
| ALL | control | 1-5 | 13500 | 6.21 | 6.26 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 238 (1.8%) | 100% of 2700 | 0/0/0 | 6.14/7.29/7.94/8.4 | 8.70 "Midnight Protocol" (A8.64/C8.76; balanced seed 87 #5, yr 1.5, critic gen 0) |  |
| ALL | control | 6-20 | 40500 | 7.53 | 7.50 | 2952 (7.3%) | 2952 (7.3%) | 2836 (7.0%) | 3903 (9.6%) | 4138 (10.2%) | 13817 (34.1%) | 59% of 2700 | 0/0/4 | 7.19/8.36/9.61/10 | 10.00 "Dead Frequency" (A10/C10; experimenter seed 10 #18, yr 5.5, critic gen 0) |  |
| ALL | control | 21-50 | 81000 | 7.75 | 7.71 | 13789 (17.0%) | 13789 (17.0%) | 13330 (16.5%) | 16913 (20.9%) | 15777 (19.5%) | 33802 (41.7%) | 53% of 2700 | 0/0/14 | 6.95/8.68/9.9/10 | 10.00 "Dead Protocol" (A10/C10; balanced seed 6 #32, yr 9.8, critic gen 0) |  |
| ALL | control | all | 135000 | 7.53 | 7.50 | 16741 (12.4%) | 16741 (12.4%) | 16166 (12.0%) | 20816 (15.4%) | 19915 (14.8%) | 47857 (35.5%) | 52% of 2700 | 0/0/17 | 7.68/8.74/9.91/10 | 10.00 "Dead Protocol" (A10/C10; balanced seed 6 #32, yr 9.8, critic gen 0) |  |
| ALL | ref_no_era_bar | 1-5 | 13500 | 6.29 | 6.34 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 7 (0.1%) | 399 (3.0%) | 100% of 2700 | 0/0/0 | 6.24/7.4/8.06/8.52 | 8.82 "Midnight Protocol" (A8.76/C8.88; balanced seed 87 #5, yr 1.5, critic gen 0) |  |
| ALL | ref_no_era_bar | 6-20 | 40500 | 7.75 | 7.71 | 4651 (11.5%) | 4651 (11.5%) | 4515 (11.2%) | 5940 (14.7%) | 6239 (15.4%) | 16497 (40.7%) | 55% of 2700 | 0/0/5 | 7.56/8.61/9.74/10 | 10.00 "Wild Frequency" (A10/C10; experimenter seed 7 #16, yr 4.9, critic gen 0) |  |
| ALL | ref_no_era_bar | 21-50 | 81000 | 8.09 | 8.02 | 20119 (24.8%) | 20119 (24.8%) | 19656 (24.3%) | 22024 (27.2%) | 19708 (24.3%) | 41257 (50.9%) | 44% of 2700 | 0/2/19 | 7.15/9.25/10/10 | 10.00 "Broken Code" (A10/C10; quality-first seed 2 #39, yr 12.0, critic gen 0) |  |
| ALL | ref_no_era_bar | all | 135000 | 7.80 | 7.76 | 24770 (18.4%) | 24770 (18.4%) | 24171 (17.9%) | 27964 (20.7%) | 25954 (19.2%) | 58153 (43.1%) | 44% of 2700 | 0/2/23 | 8.08/9.26/10/10 | 10.00 "Broken Code" (A10/C10; quality-first seed 2 #39, yr 12.0, critic gen 0) |  |
| ALL | ref_era_bar_0.08 | 1-5 | 13500 | 6.13 | 6.18 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 161 (1.2%) | 100% of 2700 | 0/0/0 | 6.05/7.19/7.84/8.29 | 8.58 "Midnight Protocol" (A8.52/C8.64; balanced seed 87 #5, yr 1.5, critic gen 0) |  |
| ALL | ref_era_bar_0.08 | 6-20 | 40500 | 7.31 | 7.30 | 1726 (4.3%) | 1726 (4.3%) | 1655 (4.1%) | 2747 (6.8%) | 2826 (7.0%) | 11388 (28.1%) | 67% of 2700 | 0/0/2 | 6.85/8.19/9.44/9.95 | 10.00 "Hollow Frequency" (A10/C10; quality-first seed 21 #20, yr 6.2, critic gen 0) |  |
| ALL | ref_era_bar_0.08 | 21-50 | 81000 | 7.52 | 7.50 | 9368 (11.6%) | 9368 (11.6%) | 9146 (11.3%) | 12132 (15.0%) | 12091 (14.9%) | 30774 (38.0%) | 54% of 2700 | 0/0/10 | 6.88/8.32/9.81/10 | 10.00 "Midnight Code" (A10/C10; selective-self-funder seed 7 #42, yr 12.9, critic gen 0) |  |
| ALL | ref_era_bar_0.08 | all | 135000 | 7.32 | 7.30 | 11094 (8.2%) | 11094 (8.2%) | 10801 (8.0%) | 14879 (11.0%) | 14917 (11.1%) | 42323 (31.4%) | 54% of 2700 | 0/0/12 | 7.36/8.5/9.82/10 | 10.00 "Midnight Code" (A10/C10; selective-self-funder seed 7 #42, yr 12.9, critic gen 0) |  |
| ALL | critic_mild | 1-5 | 13500 | 6.21 | 6.26 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 238 (1.8%) | 100% of 2700 | 0/0/0 | 6.14/7.29/7.94/8.4 | 8.70 "Midnight Protocol" (A8.64/C8.76; balanced seed 87 #5, yr 1.5, critic gen 0) |  |
| ALL | critic_mild | 6-20 | 40500 | 7.53 | 7.50 | 2952 (7.3%) | 2952 (7.3%) | 2836 (7.0%) | 3903 (9.6%) | 4138 (10.2%) | 13817 (34.1%) | 59% of 2700 | 0/0/4 | 7.19/8.36/9.61/10 | 10.00 "Dead Frequency" (A10/C10; experimenter seed 10 #18, yr 5.5, critic gen 0) |  |
| ALL | critic_mild | 21-50 | 81000 | 7.75 | 7.52 | 11295 (13.9%) | 11295 (13.9%) | 11039 (13.6%) | 16973 (20.9%) | 10732 (13.3%) | 32454 (40.1%) | 53% of 2700 | 0/0/12 | 6.86/8.59/9.84/10 | 10.00 "Dead Protocol" (A10/C10; balanced seed 6 #32, yr 9.8, critic gen 1) |  |
| ALL | critic_mild | all | 135000 | 7.53 | 7.39 | 14247 (10.6%) | 14247 (10.6%) | 13875 (10.3%) | 20876 (15.5%) | 14870 (11.0%) | 46509 (34.5%) | 53% of 2700 | 0/0/15 | 7.62/8.7/9.85/10 | 10.00 "Dead Protocol" (A10/C10; balanced seed 6 #32, yr 9.8, critic gen 1) |  |
| ALL | critic_moderate | 1-5 | 13500 | 6.21 | 6.26 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 238 (1.8%) | 100% of 2700 | 0/0/0 | 6.14/7.29/7.94/8.4 | 8.70 "Midnight Protocol" (A8.64/C8.76; balanced seed 87 #5, yr 1.5, critic gen 0) |  |
| ALL | critic_moderate | 6-20 | 40500 | 7.53 | 7.48 | 2839 (7.0%) | 2839 (7.0%) | 2733 (6.8%) | 3903 (9.6%) | 3905 (9.6%) | 13741 (33.9%) | 60% of 2700 | 0/0/3 | 7.19/8.36/9.59/10 | 10.00 "Dead Frequency" (A10/C10; experimenter seed 10 #18, yr 5.5, critic gen 0) |  |
| ALL | critic_moderate | 21-50 | 81000 | 7.76 | 7.30 | 8384 (10.3%) | 8384 (10.3%) | 8071 (10.0%) | 17113 (21.1%) | 7432 (9.2%) | 30421 (37.6%) | 53% of 2700 | 0/0/9 | 6.79/8.55/9.79/10 | 10.00 "Dead Protocol" (A10/C10; balanced seed 6 #32, yr 9.8, critic gen 1) |  |
| ALL | critic_moderate | all | 135000 | 7.54 | 7.25 | 11223 (8.3%) | 11223 (8.3%) | 10804 (8.0%) | 21016 (15.6%) | 11337 (8.4%) | 44400 (32.9%) | 53% of 2700 | 0/0/12 | 7.56/8.67/9.82/10 | 10.00 "Dead Protocol" (A10/C10; balanced seed 6 #32, yr 9.8, critic gen 1) |  |
| ALL | critic_strong | 1-5 | 13500 | 6.21 | 6.26 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 238 (1.8%) | 100% of 2700 | 0/0/0 | 6.14/7.29/7.94/8.4 | 8.70 "Midnight Protocol" (A8.64/C8.76; balanced seed 87 #5, yr 1.5, critic gen 0) |  |
| ALL | critic_strong | 6-20 | 40500 | 7.53 | 7.40 | 2391 (5.9%) | 2391 (5.9%) | 2298 (5.7%) | 3903 (9.6%) | 3168 (7.8%) | 13382 (33.0%) | 63% of 2700 | 0/0/3 | 7.13/8.34/9.53/9.93 | 10.00 "Silver Edge" (A10/C10; selective-self-funder seed 46 #12, yr 3.7, critic gen 0) |  |
| ALL | critic_strong | 21-50 | 81000 | 7.77 | 7.09 | 5996 (7.4%) | 5996 (7.4%) | 5711 (7.0%) | 17200 (21.2%) | 4555 (5.6%) | 28425 (35.1%) | 54% of 2700 | 0/0/7 | 6.73/8.5/9.68/10 | 10.00 "Dead Protocol" (A10/C10; balanced seed 6 #32, yr 9.8, critic gen 1) |  |
| ALL | critic_strong | all | 135000 | 7.54 | 7.10 | 8387 (6.2%) | 8387 (6.2%) | 8009 (5.9%) | 21103 (15.6%) | 7723 (5.7%) | 42045 (31.1%) | 54% of 2700 | 0/0/9 | 7.48/8.61/9.75/10 | 10.00 "Dead Protocol" (A10/C10; balanced seed 6 #32, yr 9.8, critic gen 1) |  |
| ALL | critic_moderate_subtract | 1-5 | 13500 | 6.21 | 6.26 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 238 (1.8%) | 100% of 2700 | 0/0/0 | 6.14/7.29/7.94/8.4 | 8.70 "Midnight Protocol" (A8.64/C8.76; balanced seed 87 #5, yr 1.5, critic gen 0) |  |
| ALL | critic_moderate_subtract | 6-20 | 40500 | 7.53 | 7.47 | 2831 (7.0%) | 2831 (7.0%) | 2723 (6.7%) | 3903 (9.6%) | 3879 (9.6%) | 13723 (33.9%) | 60% of 2700 | 0/0/3 | 7.18/8.35/9.59/10 | 10.00 "Dead Frequency" (A10/C10; experimenter seed 10 #18, yr 5.5, critic gen 0) |  |
| ALL | critic_moderate_subtract | 21-50 | 81000 | 7.77 | 7.18 | 8118 (10.0%) | 8118 (10.0%) | 7793 (9.6%) | 17345 (21.4%) | 7157 (8.8%) | 29803 (36.8%) | 53% of 2700 | 0/0/9 | 6.73/8.66/9.8/10 | 10.00 "Dead Protocol" (A10/C10; balanced seed 6 #32, yr 9.8, critic gen 1) |  |
| ALL | critic_moderate_subtract | all | 135000 | 7.54 | 7.17 | 10949 (8.1%) | 10949 (8.1%) | 10516 (7.8%) | 21248 (15.7%) | 11036 (8.2%) | 43764 (32.4%) | 52% of 2700 | 0/0/11.1 | 7.52/8.81/9.82/10 | 10.00 "Dead Protocol" (A10/C10; balanced seed 6 #32, yr 9.8, critic gen 1) |  |
| ALL | audience_mild | 1-5 | 13500 | 6.21 | 6.26 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 238 (1.8%) | 100% of 2700 | 0/0/0 | 6.14/7.29/7.94/8.4 | 8.70 "Midnight Protocol" (A8.64/C8.76; balanced seed 87 #5, yr 1.5, critic gen 0) |  |
| ALL | audience_mild | 6-20 | 40500 | 7.53 | 7.50 | 2952 (7.3%) | 2952 (7.3%) | 2836 (7.0%) | 3903 (9.6%) | 4138 (10.2%) | 13817 (34.1%) | 59% of 2700 | 0/0/4 | 7.19/8.36/9.61/10 | 10.00 "Dead Frequency" (A10/C10; experimenter seed 10 #18, yr 5.5, critic gen 0) |  |
| ALL | audience_mild | 21-50 | 81000 | 7.70 | 7.71 | 12717 (15.7%) | 12717 (15.7%) | 12414 (15.3%) | 16021 (19.8%) | 15785 (19.5%) | 33555 (41.4%) | 53% of 2700 | 0/0/13 | 6.93/8.69/9.9/10 | 10.00 "Dead Protocol" (A10/C10; balanced seed 6 #32, yr 9.8, critic gen 0) |  |
| ALL | audience_mild | all | 135000 | 7.50 | 7.50 | 15669 (11.6%) | 15669 (11.6%) | 15250 (11.3%) | 19924 (14.8%) | 19923 (14.8%) | 47610 (35.3%) | 53% of 2700 | 0/0/16 | 7.66/8.74/9.91/10 | 10.00 "Dead Protocol" (A10/C10; balanced seed 6 #32, yr 9.8, critic gen 0) |  |
| ALL | audience_moderate | 1-5 | 13500 | 6.21 | 6.26 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 238 (1.8%) | 100% of 2700 | 0/0/0 | 6.14/7.29/7.94/8.4 | 8.70 "Midnight Protocol" (A8.64/C8.76; balanced seed 87 #5, yr 1.5, critic gen 0) |  |
| ALL | audience_moderate | 6-20 | 40500 | 7.53 | 7.50 | 2952 (7.3%) | 2952 (7.3%) | 2836 (7.0%) | 3903 (9.6%) | 4138 (10.2%) | 13817 (34.1%) | 59% of 2700 | 0/0/4 | 7.19/8.36/9.61/10 | 10.00 "Dead Frequency" (A10/C10; experimenter seed 10 #18, yr 5.5, critic gen 0) |  |
| ALL | audience_moderate | 21-50 | 81000 | 7.66 | 7.71 | 12177 (15.0%) | 12177 (15.0%) | 11973 (14.8%) | 13830 (17.1%) | 15809 (19.5%) | 33256 (41.1%) | 53% of 2700 | 0/0/12 | 6.9/8.68/9.9/10 | 10.00 "Dead Protocol" (A10/C10; balanced seed 6 #32, yr 9.8, critic gen 0) |  |
| ALL | audience_moderate | all | 135000 | 7.47 | 7.50 | 15129 (11.2%) | 15129 (11.2%) | 14809 (11.0%) | 17733 (13.1%) | 19947 (14.8%) | 47311 (35.0%) | 53% of 2700 | 0/0/15 | 7.65/8.74/9.91/10 | 10.00 "Dead Protocol" (A10/C10; balanced seed 6 #32, yr 9.8, critic gen 0) |  |
| ALL | audience_strong | 1-5 | 13500 | 6.21 | 6.26 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 238 (1.8%) | 100% of 2700 | 0/0/0 | 6.14/7.29/7.94/8.4 | 8.70 "Midnight Protocol" (A8.64/C8.76; balanced seed 87 #5, yr 1.5, critic gen 0) |  |
| ALL | audience_strong | 6-20 | 40500 | 7.53 | 7.50 | 2952 (7.3%) | 2952 (7.3%) | 2836 (7.0%) | 3903 (9.6%) | 4138 (10.2%) | 13817 (34.1%) | 59% of 2700 | 0/0/4 | 7.19/8.36/9.61/10 | 10.00 "Dead Frequency" (A10/C10; experimenter seed 10 #18, yr 5.5, critic gen 0) |  |
| ALL | audience_strong | 21-50 | 81000 | 7.56 | 7.71 | 11237 (13.9%) | 11237 (13.9%) | 10936 (13.5%) | 10541 (13.0%) | 15736 (19.4%) | 32410 (40.0%) | 53% of 2700 | 0/0/12 | 6.86/8.61/9.9/10 | 10.00 "Dead Protocol" (A10/C10; balanced seed 6 #32, yr 9.8, critic gen 0) |  |
| ALL | audience_strong | all | 135000 | 7.42 | 7.50 | 14189 (10.5%) | 14189 (10.5%) | 13772 (10.2%) | 14444 (10.7%) | 19874 (14.7%) | 46465 (34.4%) | 53% of 2700 | 0/0/15 | 7.62/8.71/9.91/10 | 10.00 "Dead Protocol" (A10/C10; balanced seed 6 #32, yr 9.8, critic gen 0) |  |
| ALL | combo_A | 1-5 | 13500 | 6.21 | 6.26 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 238 (1.8%) | 100% of 2700 | 0/0/0 | 6.14/7.29/7.94/8.4 | 8.70 "Midnight Protocol" (A8.64/C8.76; balanced seed 87 #5, yr 1.5, critic gen 0) |  |
| ALL | combo_A | 6-20 | 40500 | 7.53 | 7.50 | 2952 (7.3%) | 2952 (7.3%) | 2836 (7.0%) | 3903 (9.6%) | 4138 (10.2%) | 13817 (34.1%) | 59% of 2700 | 0/0/4 | 7.19/8.36/9.61/10 | 10.00 "Dead Frequency" (A10/C10; experimenter seed 10 #18, yr 5.5, critic gen 0) |  |
| ALL | combo_A | 21-50 | 81000 | 7.71 | 7.53 | 10814 (13.3%) | 10814 (13.3%) | 10431 (12.9%) | 16125 (19.9%) | 10782 (13.3%) | 32106 (39.6%) | 53% of 2700 | 0/0/11 | 6.86/8.61/9.82/10 | 10.00 "Dead Protocol" (A10/C10; balanced seed 6 #32, yr 9.8, critic gen 1) |  |
| ALL | combo_A | all | 135000 | 7.50 | 7.39 | 13766 (10.2%) | 13766 (10.2%) | 13267 (9.8%) | 20028 (14.8%) | 14920 (11.1%) | 46161 (34.2%) | 53% of 2700 | 0/0/14 | 7.62/8.71/9.83/10 | 10.00 "Dead Protocol" (A10/C10; balanced seed 6 #32, yr 9.8, critic gen 1) |  |
| ALL | combo_B | 1-5 | 13500 | 6.21 | 6.26 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 238 (1.8%) | 100% of 2700 | 0/0/0 | 6.14/7.29/7.94/8.4 | 8.70 "Midnight Protocol" (A8.64/C8.76; balanced seed 87 #5, yr 1.5, critic gen 0) |  |
| ALL | combo_B | 6-20 | 40500 | 7.53 | 7.48 | 2839 (7.0%) | 2839 (7.0%) | 2733 (6.8%) | 3903 (9.6%) | 3905 (9.6%) | 13741 (33.9%) | 60% of 2700 | 0/0/3 | 7.19/8.36/9.59/10 | 10.00 "Dead Frequency" (A10/C10; experimenter seed 10 #18, yr 5.5, critic gen 0) |  |
| ALL | combo_B | 21-50 | 81000 | 7.67 | 7.30 | 7411 (9.2%) | 7411 (9.2%) | 7118 (8.8%) | 14064 (17.4%) | 7445 (9.2%) | 29642 (36.6%) | 53% of 2700 | 0/0/8 | 6.77/8.54/9.75/10 | 10.00 "Dead Protocol" (A10/C10; balanced seed 6 #32, yr 9.8, critic gen 1) |  |
| ALL | combo_B | all | 135000 | 7.48 | 7.25 | 10250 (7.6%) | 10250 (7.6%) | 9851 (7.3%) | 17967 (13.3%) | 11350 (8.4%) | 43621 (32.3%) | 53% of 2700 | 0/0/11 | 7.53/8.68/9.79/10 | 10.00 "Dead Protocol" (A10/C10; balanced seed 6 #32, yr 9.8, critic gen 1) |  |
| ALL | combo_C | 1-5 | 13500 | 6.21 | 6.26 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 238 (1.8%) | 100% of 2700 | 0/0/0 | 6.14/7.29/7.94/8.4 | 8.70 "Midnight Protocol" (A8.64/C8.76; balanced seed 87 #5, yr 1.5, critic gen 0) |  |
| ALL | combo_C | 6-20 | 40500 | 7.53 | 7.40 | 2391 (5.9%) | 2391 (5.9%) | 2298 (5.7%) | 3903 (9.6%) | 3168 (7.8%) | 13382 (33.0%) | 63% of 2700 | 0/0/3 | 7.13/8.34/9.53/9.93 | 10.00 "Silver Edge" (A10/C10; selective-self-funder seed 46 #12, yr 3.7, critic gen 0) |  |
| ALL | combo_C | 21-50 | 81000 | 7.73 | 7.10 | 5593 (6.9%) | 5593 (6.9%) | 5414 (6.7%) | 16394 (20.2%) | 4581 (5.7%) | 28082 (34.7%) | 54% of 2700 | 0/0/6 | 6.74/8.54/9.67/10 | 10.00 "Dead Protocol" (A10/C10; balanced seed 6 #32, yr 9.8, critic gen 1) |  |
| ALL | combo_C | all | 135000 | 7.52 | 7.10 | 7984 (5.9%) | 7984 (5.9%) | 7712 (5.7%) | 20297 (15.0%) | 7749 (5.7%) | 41702 (30.9%) | 53% of 2700 | 0/0/8.1 | 7.46/8.68/9.75/10 | 10.00 "Dead Protocol" (A10/C10; balanced seed 6 #32, yr 9.8, critic gen 1) |  |

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
| balanced | ref_no_era_bar | all | 15000 | 8.63 | 8.54 | 6076 (40.5%) | 6076 (40.5%) | 5967 (39.8%) | 6707 (44.7%) | 6195 (41.3%) | 11677 (77.8%) | 0% of 300 | 14/20/27 | 9.74/9.99/10/10 | 10.00 "Lost Code" (A10/C10; balanced seed 6 #41, yr 12.6, critic gen 0) | 12655 |
| quality-first | ref_no_era_bar | all | 15000 | 8.66 | 8.52 | 5628 (37.5%) | 5628 (37.5%) | 5480 (36.5%) | 6653 (44.4%) | 5826 (38.8%) | 12102 (80.7%) | 0% of 300 | 15/19/23 | 9.75/9.99/10/10 | 10.00 "Broken Code" (A10/C10; quality-first seed 2 #39, yr 12.0, critic gen 0) | 11720 |
| franchise-builder | ref_no_era_bar | all | 15000 | 7.20 | 7.11 | 342 (2.3%) | 342 (2.3%) | 339 (2.3%) | 490 (3.3%) | 453 (3.0%) | 1670 (11.1%) | 84% of 300 | 0/0/6 | 7.75/8.34/9.49/10 | 10.00 "Wild Run" (A10/C10; franchise-builder seed 10 #30, yr 9.2, critic gen 0) | 4635 |
| repeat-farmer | ref_no_era_bar | all | 15000 | 6.98 | 6.99 | 49 (0.3%) | 49 (0.3%) | 47 (0.3%) | 65 (0.4%) | 118 (0.8%) | 846 (5.6%) | 98% of 300 | 0/0/0 | 7.7/8.1/8.67/9.5 | 9.75 "Iron Pulse" (A9.66/C9.83; repeat-farmer seed 38 #9, yr 2.8, critic gen 0) | 3350 |
| cheap-duds | ref_no_era_bar | all | 15000 | 6.74 | 6.85 | 13 (0.1%) | 13 (0.1%) | 11 (0.1%) | 60 (0.4%) | 163 (1.1%) | 1026 (6.8%) | 96% of 300 | 0/0/0 | 8.13/8.44/8.81/9.16 | 9.24 "Broken Edge" (A9.1/C9.37; cheap-duds seed 171 #50, yr 15.4, critic gen 0) | 2012.5 |
| experimenter | ref_no_era_bar | all | 15000 | 8.58 | 8.52 | 6120 (40.8%) | 6120 (40.8%) | 5975 (39.8%) | 6327 (42.2%) | 5995 (40.0%) | 11886 (79.2%) | 0% of 300 | 15/20/26 | 9.63/9.84/10/10 | 10.00 "Last Shadow" (A10/C10; experimenter seed 6 #23, yr 7.1, critic gen 0) | 11935 |
| self-funder | ref_no_era_bar | all | 15000 | 7.66 | 7.58 | 419 (2.8%) | 419 (2.8%) | 384 (2.6%) | 955 (6.4%) | 793 (5.3%) | 5542 (37.0%) | 23% of 300 | 0/1/3 | 8.86/9.21/9.6/9.68 | 9.68 "Broken Protocol" (A9.62/C9.75; self-funder seed 160 #47, yr 14.5, critic gen 0) | 5090 |
| selective-self-funder | ref_no_era_bar | all | 15000 | 8.62 | 8.53 | 6097 (40.6%) | 6097 (40.6%) | 5943 (39.6%) | 6514 (43.4%) | 6154 (41.0%) | 11596 (77.3%) | 0% of 300 | 14/20/27 | 9.74/10/10/10 | 10.00 "Dead Signal" (A10/C10; selective-self-funder seed 6 #31, yr 9.5, critic gen 0) | 12702.5 |
| famous-star | ref_no_era_bar | all | 15000 | 7.17 | 7.17 | 26 (0.2%) | 26 (0.2%) | 25 (0.2%) | 193 (1.3%) | 257 (1.7%) | 1808 (12.1%) | 92% of 300 | 0/0/0 | 8.29/8.64/8.97/9.24 | 9.31 "Dead Rising" (A9.21/C9.4; famous-star seed 148 #47, yr 14.5, critic gen 0) | 2732.5 |
| balanced | ref_era_bar_0.08 | all | 15000 | 8.28 | 8.21 | 3193 (21.3%) | 3193 (21.3%) | 3107 (20.7%) | 3883 (25.9%) | 3951 (26.3%) | 10072 (67.2%) | 0% of 300 | 6/10/16 | 9.47/9.73/10/10 | 10.00 "Silver Run" (A10/C10; balanced seed 10 #23, yr 7.1, critic gen 0) | 9937.5 |
| quality-first | ref_era_bar_0.08 | all | 15000 | 8.31 | 8.20 | 2690 (17.9%) | 2690 (17.9%) | 2617 (17.4%) | 3978 (26.5%) | 3590 (23.9%) | 10527 (70.2%) | 0% of 300 | 5/9/12 | 9.48/9.71/10/10 | 10.00 "Last Horizon" (A10/C10; quality-first seed 10 #23, yr 7.1, critic gen 0) | 8945 |
| franchise-builder | ref_era_bar_0.08 | all | 15000 | 6.99 | 6.94 | 219 (1.5%) | 219 (1.5%) | 216 (1.4%) | 330 (2.2%) | 295 (2.0%) | 1165 (7.8%) | 83% of 300 | 0/0/2.1 | 7.55/8.15/9.24/9.69 | 10.00 "Iron Storm" (A10/C10; franchise-builder seed 131 #30, yr 9.2, critic gen 0) | 3955 |
| repeat-farmer | ref_era_bar_0.08 | all | 15000 | 6.74 | 6.76 | 17 (0.1%) | 17 (0.1%) | 16 (0.1%) | 27 (0.2%) | 45 (0.3%) | 458 (3.0%) | 99% of 300 | 0/0/0 | 7.61/7.96/8.41/9.03 | 9.46 "Iron Protocol 4" (A9.37/C9.55; repeat-farmer seed 239 #12, yr 3.7, critic gen 0) | 3100 |
| cheap-duds | ref_era_bar_0.08 | all | 15000 | 5.94 | 6.11 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 100% of 300 | 0/0/0 | 7.02/7.29/7.63/7.83 | 7.95 "Midnight Horizon" (A7.8/C8.09; cheap-duds seed 237 #45, yr 13.8, critic gen 0) | 0 |
| experimenter | ref_era_bar_0.08 | all | 15000 | 8.10 | 8.10 | 1863 (12.4%) | 1863 (12.4%) | 1812 (12.1%) | 2725 (18.2%) | 3156 (21.0%) | 9768 (65.1%) | 2% of 300 | 2/6/12 | 9.15/9.48/9.78/9.95 | 9.96 "Silver Frequency" (A9.91/C10; experimenter seed 48 #30, yr 9.2, critic gen 0) | 8082.5 |
| self-funder | ref_era_bar_0.08 | all | 15000 | 6.87 | 6.84 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 406 (2.7%) | 100% of 300 | 0/0/0 | 7.85/8.15/8.5/8.64 | 8.77 "Wild Frequency" (A8.68/C8.85; self-funder seed 54 #24, yr 7.4, critic gen 0) | 785 |
| selective-self-funder | ref_era_bar_0.08 | all | 15000 | 8.27 | 8.19 | 3112 (20.8%) | 3112 (20.8%) | 3033 (20.2%) | 3936 (26.2%) | 3880 (25.9%) | 9921 (66.1%) | 0% of 300 | 6/10/15 | 9.48/9.73/10/10 | 10.00 "Midnight Code" (A10/C10; selective-self-funder seed 7 #42, yr 12.9, critic gen 0) | 9972.5 |
| famous-star | ref_era_bar_0.08 | all | 15000 | 6.34 | 6.40 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 6 (0.0%) | 100% of 300 | 0/0/0 | 7.18/7.46/7.73/8.03 | 8.14 "Silver Pulse" (A8.01/C8.26; famous-star seed 213 #50, yr 15.4, critic gen 0) | 150 |
| balanced | critic_mild | all | 15000 | 8.43 | 8.23 | 3807 (25.4%) | 3807 (25.4%) | 3717 (24.8%) | 5333 (35.5%) | 3907 (26.1%) | 10695 (71.3%) | 0% of 300 | 7/12/18 | 9.54/9.76/10/10 | 10.00 "Dead Protocol" (A10/C10; balanced seed 6 #32, yr 9.8, critic gen 1) | 10565 |
| quality-first | critic_mild | all | 15000 | 8.46 | 8.22 | 3303 (22.0%) | 3303 (22.0%) | 3222 (21.5%) | 5339 (35.6%) | 3480 (23.2%) | 11183 (74.5%) | 0% of 300 | 7/11/15 | 9.52/9.75/10/10 | 10.00 "Hollow Pulse" (A10/C10; quality-first seed 9 #22, yr 6.8, critic gen 0) | 9565 |
| franchise-builder | critic_mild | all | 15000 | 7.08 | 6.92 | 238 (1.6%) | 238 (1.6%) | 231 (1.5%) | 410 (2.7%) | 318 (2.1%) | 1411 (9.4%) | 81% of 300 | 0/0/3 | 7.66/8.25/9.31/9.66 | 10.00 "Silver Rising" (A10/C10; franchise-builder seed 227 #31, yr 9.5, critic gen 1) | 4075 |
| repeat-farmer | critic_mild | all | 15000 | 6.85 | 6.74 | 15 (0.1%) | 15 (0.1%) | 15 (0.1%) | 28 (0.2%) | 40 (0.3%) | 602 (4.0%) | 99% of 300 | 0/0/0 | 7.62/8.03/8.54/8.97 | 9.58 "Iron Pulse" (A9.49/C9.67; repeat-farmer seed 38 #9, yr 2.8, critic gen 0) | 3250 |
| cheap-duds | critic_mild | all | 15000 | 6.27 | 6.31 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 21 (0.1%) | 100% of 300 | 0/0/0 | 7.35/7.62/7.93/8.1 | 8.14 "Wild Horizon" (A8.11/C8.16; cheap-duds seed 164 #37, yr 11.4, critic gen 1) | 150 |
| experimenter | critic_mild | all | 15000 | 8.33 | 8.17 | 2927 (19.5%) | 2927 (19.5%) | 2840 (18.9%) | 4270 (28.5%) | 3083 (20.6%) | 10563 (70.4%) | 0% of 300 | 5/9/15 | 9.35/9.65/10/10 | 10.00 "Dead Frequency" (A10/C10; experimenter seed 10 #18, yr 5.5, critic gen 0) | 8940 |
| self-funder | critic_mild | all | 15000 | 7.21 | 7.05 | 7 (0.1%) | 7 (0.1%) | 6 (0.0%) | 70 (0.5%) | 48 (0.3%) | 1245 (8.3%) | 98% of 300 | 0/0/0 | 8.18/8.46/8.83/9.06 | 9.14 "Last Code" (A9.05/C9.23; self-funder seed 89 #24, yr 7.4, critic gen 0) | 3157.5 |
| selective-self-funder | critic_mild | all | 15000 | 8.44 | 8.25 | 3950 (26.3%) | 3950 (26.3%) | 3844 (25.6%) | 5426 (36.2%) | 3994 (26.6%) | 10738 (71.6%) | 0% of 300 | 8/13/18 | 9.53/9.77/10/10 | 10.00 "Dead Legacy" (A10/C10; selective-self-funder seed 9 #23, yr 7.1, critic gen 0) | 10767.5 |
| famous-star | critic_mild | all | 15000 | 6.67 | 6.61 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 51 (0.3%) | 100% of 300 | 0/0/0 | 7.55/7.8/8.11/8.24 | 8.29 "Midnight Legacy" (A8.29/C8.28; famous-star seed 186 #41, yr 12.6, critic gen 1) | 375 |
| balanced | critic_moderate | all | 15000 | 8.44 | 8.08 | 3061 (20.4%) | 3061 (20.4%) | 2983 (19.9%) | 5350 (35.7%) | 2916 (19.4%) | 10296 (68.6%) | 0% of 300 | 5/10/15 | 9.43/9.7/10/10 | 10.00 "Dead Protocol" (A10/C10; balanced seed 6 #32, yr 9.8, critic gen 1) | 9850 |
| quality-first | critic_moderate | all | 15000 | 8.46 | 8.06 | 2597 (17.3%) | 2597 (17.3%) | 2511 (16.7%) | 5345 (35.6%) | 2559 (17.1%) | 10617 (70.8%) | 0% of 300 | 5/9/12 | 9.43/9.68/10/10 | 10.00 "Hollow Pulse" (A10/C10; quality-first seed 9 #22, yr 6.8, critic gen 1) | 8760 |
| franchise-builder | critic_moderate | all | 15000 | 7.13 | 6.82 | 248 (1.6%) | 248 (1.6%) | 242 (1.6%) | 528 (3.5%) | 264 (1.8%) | 1527 (10.2%) | 79% of 300 | 0/0/4 | 7.66/8.31/9.34/9.81 | 10.00 "Broken Legacy" (A10/C10; franchise-builder seed 184 #38, yr 11.7, critic gen 1) | 4185 |
| repeat-farmer | critic_moderate | all | 15000 | 6.85 | 6.61 | 15 (0.1%) | 15 (0.1%) | 15 (0.1%) | 28 (0.2%) | 40 (0.3%) | 600 (4.0%) | 99% of 300 | 0/0/0 | 7.62/8.03/8.54/8.97 | 9.58 "Iron Pulse" (A9.49/C9.67; repeat-farmer seed 38 #9, yr 2.8, critic gen 0) | 3250 |
| cheap-duds | critic_moderate | all | 15000 | 6.27 | 6.19 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 4 (0.0%) | 100% of 300 | 0/0/0 | 7.27/7.53/7.85/8.01 | 8.02 "Silver Legacy" (A8.01/C8.03; cheap-duds seed 43 #38, yr 11.7, critic gen 1) | 150 |
| experimenter | critic_moderate | all | 15000 | 8.33 | 8.01 | 2119 (14.1%) | 2119 (14.1%) | 1962 (13.1%) | 4262 (28.4%) | 2595 (17.3%) | 10095 (67.3%) | 0% of 300 | 3/7/11 | 9.27/9.58/9.94/10 | 10.00 "Dead Frequency" (A10/C10; experimenter seed 10 #18, yr 5.5, critic gen 0) | 8165 |
| self-funder | critic_moderate | all | 15000 | 7.21 | 6.90 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 69 (0.5%) | 1 (0.0%) | 910 (6.1%) | 100% of 300 | 0/0/0 | 8.07/8.36/8.76/8.95 | 8.97 "Red Run" (A9.08/C8.86; self-funder seed 148 #26, yr 8.0, critic gen 1) | 3110 |
| selective-self-funder | critic_moderate | all | 15000 | 8.45 | 8.09 | 3183 (21.2%) | 3183 (21.2%) | 3091 (20.6%) | 5434 (36.2%) | 2962 (19.8%) | 10316 (68.8%) | 0% of 300 | 6/10/16 | 9.45/9.71/10/10 | 10.00 "Dead Legacy" (A10/C10; selective-self-funder seed 9 #23, yr 7.1, critic gen 1) | 10057.5 |
| famous-star | critic_moderate | all | 15000 | 6.67 | 6.47 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 35 (0.2%) | 100% of 300 | 0/0/0 | 7.46/7.67/8.01/8.16 | 8.20 "Broken Pulse" (A8.25/C8.14; famous-star seed 227 #31, yr 9.5, critic gen 1) | 375 |
| balanced | critic_strong | all | 15000 | 8.45 | 7.91 | 2356 (15.7%) | 2356 (15.7%) | 2250 (15.0%) | 5395 (36.0%) | 2074 (13.8%) | 9825 (65.5%) | 0% of 300 | 3/7/13 | 9.3/9.6/9.82/10 | 10.00 "Dead Protocol" (A10/C10; balanced seed 6 #32, yr 9.8, critic gen 1) | 8987.5 |
| quality-first | critic_strong | all | 15000 | 8.46 | 7.89 | 1948 (13.0%) | 1948 (13.0%) | 1861 (12.4%) | 5344 (35.6%) | 1800 (12.0%) | 10095 (67.3%) | 0% of 300 | 4/6/9 | 9.32/9.59/9.93/10 | 10.00 "Lost Legacy" (A10/C10; quality-first seed 21 #31, yr 9.5, critic gen 1) | 8007.5 |
| franchise-builder | critic_strong | all | 15000 | 7.16 | 6.70 | 181 (1.2%) | 181 (1.2%) | 174 (1.2%) | 565 (3.8%) | 195 (1.3%) | 1463 (9.8%) | 84% of 300 | 0/0/2 | 7.66/8.32/9.21/9.71 | 10.00 "Silver Rising" (A10/C10; franchise-builder seed 227 #31, yr 9.5, critic gen 1) | 4330 |
| repeat-farmer | critic_strong | all | 15000 | 6.85 | 6.47 | 14 (0.1%) | 14 (0.1%) | 14 (0.1%) | 28 (0.2%) | 37 (0.3%) | 597 (4.0%) | 99% of 300 | 0/0/0 | 7.62/8.03/8.54/8.97 | 9.58 "Iron Pulse" (A9.49/C9.67; repeat-farmer seed 38 #9, yr 2.8, critic gen 0) | 3250 |
| cheap-duds | critic_strong | all | 15000 | 6.27 | 6.06 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 100% of 300 | 0/0/0 | 7.19/7.43/7.74/7.92 | 7.97 "Iron Horizon" (A8.03/C7.91; cheap-duds seed 66 #29, yr 8.9, critic gen 1) | 150 |
| experimenter | critic_strong | all | 15000 | 8.33 | 7.84 | 1444 (9.6%) | 1444 (9.6%) | 1394 (9.3%) | 4261 (28.4%) | 1463 (9.8%) | 9474 (63.2%) | 1% of 300 | 2/5/8 | 9.21/9.53/9.85/9.96 | 9.99 "Dead Edge" (A9.97/C10; experimenter seed 52 #16, yr 4.9, critic gen 0) | 7257.5 |
| self-funder | critic_strong | all | 15000 | 7.21 | 6.76 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 69 (0.5%) | 0 (0.0%) | 658 (4.4%) | 100% of 300 | 0/0/0 | 7.96/8.25/8.58/8.9 | 8.93 "Red Run" (A9.08/C8.77; self-funder seed 148 #26, yr 8.0, critic gen 1) | 3075 |
| selective-self-funder | critic_strong | all | 15000 | 8.45 | 7.93 | 2444 (16.3%) | 2444 (16.3%) | 2316 (15.4%) | 5441 (36.3%) | 2154 (14.4%) | 9923 (66.2%) | 0% of 300 | 4/8/13 | 9.34/9.62/9.97/10 | 10.00 "Last Frequency" (A10/C10; selective-self-funder seed 21 #29, yr 8.9, critic gen 1) | 9192.5 |
| famous-star | critic_strong | all | 15000 | 6.67 | 6.34 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 10 (0.1%) | 100% of 300 | 0/0/0 | 7.35/7.6/7.91/8.08 | 8.15 "Broken Pulse" (A8.25/C8.05; famous-star seed 227 #31, yr 9.5, critic gen 1) | 375 |
| balanced | critic_moderate_subtract | all | 15000 | 8.45 | 8.04 | 3014 (20.1%) | 3014 (20.1%) | 2910 (19.4%) | 5378 (35.9%) | 2854 (19.0%) | 10159 (67.7%) | 0% of 300 | 5/10/16 | 9.43/9.68/10/10 | 10.00 "Dead Protocol" (A10/C10; balanced seed 6 #32, yr 9.8, critic gen 1) | 9732.5 |
| quality-first | critic_moderate_subtract | all | 15000 | 8.46 | 8.02 | 2528 (16.9%) | 2528 (16.9%) | 2442 (16.3%) | 5346 (35.6%) | 2508 (16.7%) | 10484 (69.9%) | 0% of 300 | 5/8/12 | 9.43/9.67/10/10 | 10.00 "Hollow Pulse" (A10/C10; quality-first seed 9 #22, yr 6.8, critic gen 1) | 8627.5 |
| franchise-builder | critic_moderate_subtract | all | 15000 | 7.18 | 6.76 | 290 (1.9%) | 290 (1.9%) | 283 (1.9%) | 707 (4.7%) | 281 (1.9%) | 1698 (11.3%) | 71% of 300 | 0/0/4 | 7.68/8.48/9.43/9.88 | 10.00 "Broken Legacy" (A10/C10; franchise-builder seed 184 #38, yr 11.7, critic gen 1) | 4650 |
| repeat-farmer | critic_moderate_subtract | all | 15000 | 6.85 | 6.49 | 15 (0.1%) | 15 (0.1%) | 15 (0.1%) | 28 (0.2%) | 40 (0.3%) | 599 (4.0%) | 99% of 300 | 0/0/0 | 7.62/8.03/8.54/8.97 | 9.58 "Iron Pulse" (A9.49/C9.67; repeat-farmer seed 38 #9, yr 2.8, critic gen 0) | 3250 |
| cheap-duds | critic_moderate_subtract | all | 15000 | 6.26 | 6.07 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 1 (0.0%) | 100% of 300 | 0/0/0 | 7.2/7.46/7.81/7.98 | 8.00 "Wild Horizon" (A8.03/C7.97; cheap-duds seed 145 #36, yr 11.1, critic gen 1) | 150 |
| experimenter | critic_moderate_subtract | all | 15000 | 8.33 | 7.96 | 1979 (13.2%) | 1979 (13.2%) | 1866 (12.4%) | 4263 (28.4%) | 2433 (16.2%) | 9752 (65.0%) | 0% of 300 | 3/6/11 | 9.26/9.58/9.95/10 | 10.00 "Dead Frequency" (A10/C10; experimenter seed 10 #18, yr 5.5, critic gen 0) | 7990 |
| self-funder | critic_moderate_subtract | all | 15000 | 7.21 | 6.82 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 68 (0.5%) | 1 (0.0%) | 816 (5.4%) | 100% of 300 | 0/0/0 | 8.05/8.34/8.74/8.93 | 8.96 "Red Run" (A9.08/C8.83; self-funder seed 148 #26, yr 8.0, critic gen 1) | 3100 |
| selective-self-funder | critic_moderate_subtract | all | 15000 | 8.45 | 8.05 | 3123 (20.8%) | 3123 (20.8%) | 3000 (20.0%) | 5458 (36.4%) | 2919 (19.5%) | 10231 (68.2%) | 0% of 300 | 6/10/15.1 | 9.46/9.73/10/10 | 10.00 "Dead Legacy" (A10/C10; selective-self-funder seed 9 #23, yr 7.1, critic gen 1) | 9960 |
| famous-star | critic_moderate_subtract | all | 15000 | 6.67 | 6.37 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 24 (0.2%) | 100% of 300 | 0/0/0 | 7.4/7.63/7.97/8.14 | 8.16 "Broken Pulse" (A8.25/C8.08; famous-star seed 227 #31, yr 9.5, critic gen 1) | 375 |
| balanced | audience_mild | all | 15000 | 8.40 | 8.35 | 4094 (27.3%) | 4094 (27.3%) | 3984 (26.6%) | 5193 (34.6%) | 5065 (33.8%) | 10849 (72.3%) | 0% of 300 | 8/13/20 | 9.55/9.8/10/10 | 10.00 "Dead Protocol" (A10/C10; balanced seed 6 #32, yr 9.8, critic gen 0) | 10820 |
| quality-first | audience_mild | all | 15000 | 8.43 | 8.35 | 3560 (23.7%) | 3560 (23.7%) | 3478 (23.2%) | 5278 (35.2%) | 4728 (31.5%) | 11396 (76.0%) | 0% of 300 | 8/12/16 | 9.61/9.8/10/10 | 10.00 "Hollow Pulse" (A10/C10; quality-first seed 9 #22, yr 6.8, critic gen 0) | 9905 |
| franchise-builder | audience_mild | all | 15000 | 7.04 | 7.02 | 283 (1.9%) | 283 (1.9%) | 272 (1.8%) | 371 (2.5%) | 435 (2.9%) | 1421 (9.5%) | 81% of 300 | 0/0/4 | 7.66/8.25/9.41/9.88 | 10.00 "Silver Pulse 3" (A10/C10; franchise-builder seed 119 #37, yr 11.4, critic gen 0) | 4055 |
| repeat-farmer | audience_mild | all | 15000 | 6.83 | 6.83 | 15 (0.1%) | 15 (0.1%) | 15 (0.1%) | 28 (0.2%) | 40 (0.3%) | 602 (4.0%) | 99% of 300 | 0/0/0 | 7.62/8.03/8.54/8.97 | 9.58 "Iron Pulse" (A9.49/C9.67; repeat-farmer seed 38 #9, yr 2.8, critic gen 0) | 3250 |
| cheap-duds | audience_mild | all | 15000 | 6.25 | 6.41 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 33 (0.2%) | 100% of 300 | 0/0/0 | 7.4/7.67/8.01/8.18 | 8.26 "Wild Horizon" (A8.11/C8.41; cheap-duds seed 164 #37, yr 11.4, critic gen 0) | 150 |
| experimenter | audience_mild | all | 15000 | 8.30 | 8.30 | 3465 (23.1%) | 3465 (23.1%) | 3357 (22.4%) | 3710 (24.7%) | 4270 (28.5%) | 10701 (71.3%) | 0% of 300 | 7/11/17 | 9.43/9.7/10/10 | 10.00 "Dead Frequency" (A10/C10; experimenter seed 10 #18, yr 5.5, critic gen 0) | 9690 |
| self-funder | audience_mild | all | 15000 | 7.18 | 7.16 | 25 (0.2%) | 25 (0.2%) | 24 (0.2%) | 70 (0.5%) | 254 (1.7%) | 1624 (10.8%) | 92% of 300 | 0/0/0 | 8.25/8.54/8.9/9.13 | 9.16 "Red Run" (A9.08/C9.23; self-funder seed 148 #26, yr 8.0, critic gen 0) | 3157.5 |
| selective-self-funder | audience_mild | all | 15000 | 8.41 | 8.37 | 4227 (28.2%) | 4227 (28.2%) | 4120 (27.5%) | 5274 (35.2%) | 5131 (34.2%) | 10901 (72.7%) | 0% of 300 | 9/14/20 | 9.59/9.8/10/10 | 10.00 "Dead Legacy" (A10/C10; selective-self-funder seed 9 #23, yr 7.1, critic gen 0) | 11035 |
| famous-star | audience_mild | all | 15000 | 6.65 | 6.71 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 83 (0.6%) | 100% of 300 | 0/0/0 | 7.61/7.88/8.21/8.34 | 8.37 "Broken Pulse" (A8.25/C8.48; famous-star seed 227 #31, yr 9.5, critic gen 0) | 375 |
| balanced | audience_moderate | all | 15000 | 8.37 | 8.35 | 4000 (26.7%) | 4000 (26.7%) | 3936 (26.2%) | 4545 (30.3%) | 5071 (33.8%) | 10831 (72.2%) | 0% of 300 | 8/13/19 | 9.55/9.77/10/10 | 10.00 "Dead Protocol" (A10/C10; balanced seed 6 #32, yr 9.8, critic gen 0) | 10735 |
| quality-first | audience_moderate | all | 15000 | 8.40 | 8.35 | 3486 (23.2%) | 3486 (23.2%) | 3446 (23.0%) | 4546 (30.3%) | 4728 (31.5%) | 11340 (75.6%) | 0% of 300 | 8/12/15 | 9.59/9.78/10/10 | 10.00 "Hollow Pulse" (A10/C10; quality-first seed 9 #22, yr 6.8, critic gen 0) | 9882.5 |
| franchise-builder | audience_moderate | all | 15000 | 7.02 | 7.02 | 284 (1.9%) | 284 (1.9%) | 276 (1.8%) | 346 (2.3%) | 446 (3.0%) | 1427 (9.5%) | 80% of 300 | 0/0/4 | 7.66/8.25/9.41/9.88 | 10.00 "Silver Pulse 3" (A10/C10; franchise-builder seed 119 #37, yr 11.4, critic gen 0) | 4055 |
| repeat-farmer | audience_moderate | all | 15000 | 6.80 | 6.83 | 15 (0.1%) | 15 (0.1%) | 15 (0.1%) | 28 (0.2%) | 40 (0.3%) | 602 (4.0%) | 99% of 300 | 0/0/0 | 7.62/8.03/8.54/8.97 | 9.58 "Iron Pulse" (A9.49/C9.67; repeat-farmer seed 38 #9, yr 2.8, critic gen 0) | 3250 |
| cheap-duds | audience_moderate | all | 15000 | 6.23 | 6.41 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 32 (0.2%) | 100% of 300 | 0/0/0 | 7.4/7.65/8.01/8.15 | 8.18 "Wild Horizon" (A7.95/C8.41; cheap-duds seed 164 #37, yr 11.4, critic gen 0) | 150 |
| experimenter | audience_moderate | all | 15000 | 8.27 | 8.30 | 3183 (21.2%) | 3183 (21.2%) | 3051 (20.3%) | 3566 (23.8%) | 4270 (28.5%) | 10653 (71.0%) | 0% of 300 | 6/10/16 | 9.42/9.7/10/10 | 10.00 "Dead Frequency" (A10/C10; experimenter seed 10 #18, yr 5.5, critic gen 0) | 9392.5 |
| self-funder | audience_moderate | all | 15000 | 7.15 | 7.16 | 19 (0.1%) | 19 (0.1%) | 19 (0.1%) | 67 (0.5%) | 253 (1.7%) | 1491 (9.9%) | 94% of 300 | 0/0/0 | 8.23/8.51/8.86/9.13 | 9.16 "Red Run" (A9.08/C9.23; self-funder seed 148 #26, yr 8.0, critic gen 0) | 3120 |
| selective-self-funder | audience_moderate | all | 15000 | 8.38 | 8.37 | 4142 (27.6%) | 4142 (27.6%) | 4066 (27.1%) | 4635 (30.9%) | 5139 (34.3%) | 10876 (72.5%) | 0% of 300 | 9/14/20 | 9.57/9.78/10/10 | 10.00 "Dead Legacy" (A10/C10; selective-self-funder seed 9 #23, yr 7.1, critic gen 0) | 10985 |
| famous-star | audience_moderate | all | 15000 | 6.63 | 6.71 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 59 (0.4%) | 100% of 300 | 0/0/0 | 7.58/7.86/8.17/8.32 | 8.37 "Broken Pulse" (A8.25/C8.48; famous-star seed 227 #31, yr 9.5, critic gen 0) | 300 |
| balanced | audience_strong | all | 15000 | 8.31 | 8.35 | 3795 (25.3%) | 3795 (25.3%) | 3684 (24.6%) | 3690 (24.6%) | 5057 (33.7%) | 10676 (71.2%) | 0% of 300 | 7/12/18 | 9.53/9.73/10/10 | 10.00 "Dead Protocol" (A10/C10; balanced seed 6 #32, yr 9.8, critic gen 0) | 10565 |
| quality-first | audience_strong | all | 15000 | 8.34 | 8.35 | 3278 (21.9%) | 3278 (21.9%) | 3184 (21.2%) | 3550 (23.7%) | 4723 (31.5%) | 11152 (74.3%) | 0% of 300 | 7/11/15 | 9.57/9.75/10/10 | 10.00 "Hollow Pulse" (A10/C10; quality-first seed 9 #22, yr 6.8, critic gen 0) | 9647.5 |
| franchise-builder | audience_strong | all | 15000 | 6.98 | 7.03 | 244 (1.6%) | 244 (1.6%) | 239 (1.6%) | 341 (2.3%) | 399 (2.7%) | 1437 (9.6%) | 82% of 300 | 0/0/3.1 | 7.66/8.25/9.34/9.8 | 10.00 "Silver Rising" (A10/C10; franchise-builder seed 227 #31, yr 9.5, critic gen 0) | 4092.5 |
| repeat-farmer | audience_strong | all | 15000 | 6.75 | 6.83 | 15 (0.1%) | 15 (0.1%) | 15 (0.1%) | 28 (0.2%) | 40 (0.3%) | 602 (4.0%) | 99% of 300 | 0/0/0 | 7.62/8.03/8.54/8.97 | 9.58 "Iron Pulse" (A9.49/C9.67; repeat-farmer seed 38 #9, yr 2.8, critic gen 0) | 3250 |
| cheap-duds | audience_strong | all | 15000 | 6.18 | 6.41 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 23 (0.1%) | 100% of 300 | 0/0/0 | 7.35/7.61/7.95/8.1 | 8.14 "Wild Horizon" (A7.87/C8.41; cheap-duds seed 164 #37, yr 11.4, critic gen 0) | 150 |
| experimenter | audience_strong | all | 15000 | 8.20 | 8.30 | 2932 (19.6%) | 2932 (19.6%) | 2844 (19.0%) | 3067 (20.4%) | 4270 (28.5%) | 10559 (70.4%) | 0% of 300 | 5/9/15 | 9.35/9.65/9.96/10 | 10.00 "Dead Frequency" (A10/C10; experimenter seed 10 #18, yr 5.5, critic gen 0) | 9210 |
| self-funder | audience_strong | all | 15000 | 7.09 | 7.16 | 7 (0.1%) | 7 (0.1%) | 6 (0.0%) | 19 (0.1%) | 245 (1.6%) | 1244 (8.3%) | 98% of 300 | 0/0/0 | 8.16/8.46/8.83/9.06 | 9.14 "Last Code" (A9.05/C9.23; self-funder seed 89 #24, yr 7.4, critic gen 0) | 2945 |
| selective-self-funder | audience_strong | all | 15000 | 8.32 | 8.37 | 3918 (26.1%) | 3918 (26.1%) | 3800 (25.3%) | 3749 (25.0%) | 5140 (34.3%) | 10721 (71.5%) | 0% of 300 | 8/13/18 | 9.54/9.76/10/10 | 10.00 "Dead Legacy" (A10/C10; selective-self-funder seed 9 #23, yr 7.1, critic gen 0) | 10830 |
| famous-star | audience_strong | all | 15000 | 6.57 | 6.71 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 51 (0.3%) | 100% of 300 | 0/0/0 | 7.55/7.8/8.13/8.24 | 8.29 "Midnight Legacy" (A8.04/C8.54; famous-star seed 186 #41, yr 12.6, critic gen 0) | 235 |
| balanced | combo_A | all | 15000 | 8.41 | 8.23 | 3690 (24.6%) | 3690 (24.6%) | 3574 (23.8%) | 5224 (34.8%) | 3929 (26.2%) | 10655 (71.0%) | 0% of 300 | 7/12/18 | 9.51/9.76/10/10 | 10.00 "Dead Protocol" (A10/C10; balanced seed 6 #32, yr 9.8, critic gen 1) | 10565 |
| quality-first | combo_A | all | 15000 | 8.43 | 8.22 | 3161 (21.1%) | 3161 (21.1%) | 3044 (20.3%) | 5276 (35.2%) | 3480 (23.2%) | 11043 (73.6%) | 0% of 300 | 7/11/14 | 9.5/9.75/10/10 | 10.00 "Hollow Pulse" (A10/C10; quality-first seed 9 #22, yr 6.8, critic gen 0) | 9470 |
| franchise-builder | combo_A | all | 15000 | 7.06 | 6.93 | 228 (1.5%) | 228 (1.5%) | 222 (1.5%) | 405 (2.7%) | 327 (2.2%) | 1425 (9.5%) | 80% of 300 | 0/0/3 | 7.66/8.26/9.29/9.66 | 10.00 "Silver Rising" (A10/C10; franchise-builder seed 227 #31, yr 9.5, critic gen 1) | 4125 |
| repeat-farmer | combo_A | all | 15000 | 6.83 | 6.74 | 15 (0.1%) | 15 (0.1%) | 15 (0.1%) | 28 (0.2%) | 40 (0.3%) | 602 (4.0%) | 99% of 300 | 0/0/0 | 7.62/8.03/8.54/8.97 | 9.58 "Iron Pulse" (A9.49/C9.67; repeat-farmer seed 38 #9, yr 2.8, critic gen 0) | 3250 |
| cheap-duds | combo_A | all | 15000 | 6.25 | 6.31 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 18 (0.1%) | 100% of 300 | 0/0/0 | 7.34/7.59/7.91/8.06 | 8.14 "Wild Horizon" (A8.11/C8.16; cheap-duds seed 164 #37, yr 11.4, critic gen 1) | 150 |
| experimenter | combo_A | all | 15000 | 8.30 | 8.17 | 2837 (18.9%) | 2837 (18.9%) | 2714 (18.1%) | 3710 (24.7%) | 3083 (20.6%) | 10469 (69.8%) | 0% of 300 | 5/9/14 | 9.35/9.65/10/10 | 10.00 "Dead Frequency" (A10/C10; experimenter seed 10 #18, yr 5.5, critic gen 0) | 8872.5 |
| self-funder | combo_A | all | 15000 | 7.18 | 7.05 | 7 (0.1%) | 7 (0.1%) | 6 (0.0%) | 70 (0.5%) | 48 (0.3%) | 1204 (8.0%) | 98% of 300 | 0/0/0 | 8.16/8.45/8.83/9.06 | 9.14 "Last Code" (A9.05/C9.23; self-funder seed 89 #24, yr 7.4, critic gen 0) | 3115 |
| selective-self-funder | combo_A | all | 15000 | 8.42 | 8.25 | 3828 (25.5%) | 3828 (25.5%) | 3692 (24.6%) | 5315 (35.4%) | 4013 (26.8%) | 10694 (71.3%) | 0% of 300 | 8/13/18 | 9.52/9.76/10/10 | 10.00 "Dead Legacy" (A10/C10; selective-self-funder seed 9 #23, yr 7.1, critic gen 0) | 10700 |
| famous-star | combo_A | all | 15000 | 6.65 | 6.61 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 51 (0.3%) | 100% of 300 | 0/0/0 | 7.55/7.79/8.1/8.21 | 8.24 "Broken Pulse" (A8.25/C8.22; famous-star seed 227 #31, yr 9.5, critic gen 1) | 375 |
| balanced | combo_B | all | 15000 | 8.39 | 8.08 | 2804 (18.7%) | 2804 (18.7%) | 2702 (18.0%) | 4584 (30.6%) | 2923 (19.5%) | 10178 (67.8%) | 0% of 300 | 5/9/15 | 9.41/9.67/10/10 | 10.00 "Dead Protocol" (A10/C10; balanced seed 6 #32, yr 9.8, critic gen 1) | 9665 |
| quality-first | combo_B | all | 15000 | 8.40 | 8.06 | 2352 (15.7%) | 2352 (15.7%) | 2267 (15.1%) | 4547 (30.3%) | 2559 (17.1%) | 10452 (69.7%) | 0% of 300 | 5/8/11 | 9.42/9.66/10/10 | 10.00 "Hollow Pulse" (A10/C10; quality-first seed 9 #22, yr 6.8, critic gen 1) | 8622.5 |
| franchise-builder | combo_B | all | 15000 | 7.09 | 6.83 | 234 (1.6%) | 234 (1.6%) | 227 (1.5%) | 503 (3.4%) | 264 (1.8%) | 1531 (10.2%) | 79% of 300 | 0/0/3 | 7.66/8.32/9.34/9.81 | 10.00 "Broken Legacy" (A10/C10; franchise-builder seed 184 #38, yr 11.7, critic gen 1) | 4300 |
| repeat-farmer | combo_B | all | 15000 | 6.80 | 6.61 | 15 (0.1%) | 15 (0.1%) | 15 (0.1%) | 28 (0.2%) | 40 (0.3%) | 600 (4.0%) | 99% of 300 | 0/0/0 | 7.62/8.03/8.54/8.97 | 9.58 "Iron Pulse" (A9.49/C9.67; repeat-farmer seed 38 #9, yr 2.8, critic gen 0) | 3250 |
| cheap-duds | combo_B | all | 15000 | 6.22 | 6.19 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 1 (0.0%) | 100% of 300 | 0/0/0 | 7.24/7.49/7.8/7.93 | 8.02 "Iron Horizon" (A8.03/C8; cheap-duds seed 66 #29, yr 8.9, critic gen 1) | 150 |
| experimenter | combo_B | all | 15000 | 8.27 | 8.01 | 1934 (12.9%) | 1934 (12.9%) | 1851 (12.3%) | 3563 (23.8%) | 2595 (17.3%) | 9769 (65.1%) | 0% of 300 | 3/6/11 | 9.27/9.58/9.94/10 | 10.00 "Dead Frequency" (A10/C10; experimenter seed 10 #18, yr 5.5, critic gen 0) | 7997.5 |
| self-funder | combo_B | all | 15000 | 7.15 | 6.90 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 66 (0.4%) | 1 (0.0%) | 845 (5.6%) | 100% of 300 | 0/0/0 | 8.05/8.34/8.7/8.95 | 8.97 "Red Run" (A9.08/C8.86; self-funder seed 148 #26, yr 8.0, critic gen 1) | 3005 |
| selective-self-funder | combo_B | all | 15000 | 8.39 | 8.10 | 2911 (19.4%) | 2911 (19.4%) | 2789 (18.6%) | 4676 (31.2%) | 2968 (19.8%) | 10220 (68.1%) | 0% of 300 | 5/9/14 | 9.41/9.68/10/10 | 10.00 "Dead Legacy" (A10/C10; selective-self-funder seed 9 #23, yr 7.1, critic gen 1) | 9912.5 |
| famous-star | combo_B | all | 15000 | 6.63 | 6.47 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 25 (0.2%) | 100% of 300 | 0/0/0 | 7.4/7.64/7.97/8.12 | 8.20 "Broken Pulse" (A8.25/C8.14; famous-star seed 227 #31, yr 9.5, critic gen 1) | 300 |
| balanced | combo_C | all | 15000 | 8.43 | 7.92 | 2213 (14.8%) | 2213 (14.8%) | 2138 (14.3%) | 5276 (35.2%) | 2077 (13.8%) | 9796 (65.3%) | 0% of 300 | 3/7/12 | 9.28/9.59/9.82/10 | 10.00 "Dead Protocol" (A10/C10; balanced seed 6 #32, yr 9.8, critic gen 1) | 8900 |
| quality-first | combo_C | all | 15000 | 8.43 | 7.89 | 1826 (12.2%) | 1826 (12.2%) | 1770 (11.8%) | 5286 (35.2%) | 1800 (12.0%) | 9985 (66.6%) | 0% of 300 | 3/6/9 | 9.31/9.57/9.93/10 | 10.00 "Lost Legacy" (A10/C10; quality-first seed 21 #31, yr 9.5, critic gen 1) | 7907.5 |
| franchise-builder | combo_C | all | 15000 | 7.16 | 6.73 | 194 (1.3%) | 194 (1.3%) | 187 (1.3%) | 604 (4.0%) | 212 (1.4%) | 1576 (10.5%) | 79% of 300 | 0/0/2 | 7.68/8.42/9.23/9.72 | 10.00 "Silver Rising" (A10/C10; franchise-builder seed 227 #31, yr 9.5, critic gen 1) | 4605 |
| repeat-farmer | combo_C | all | 15000 | 6.83 | 6.47 | 14 (0.1%) | 14 (0.1%) | 14 (0.1%) | 28 (0.2%) | 37 (0.3%) | 597 (4.0%) | 99% of 300 | 0/0/0 | 7.62/8.03/8.54/8.97 | 9.58 "Iron Pulse" (A9.49/C9.67; repeat-farmer seed 38 #9, yr 2.8, critic gen 0) | 3250 |
| cheap-duds | combo_C | all | 15000 | 6.24 | 6.05 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 100% of 300 | 0/0/0 | 7.15/7.42/7.72/7.89 | 7.97 "Iron Horizon" (A8.03/C7.91; cheap-duds seed 66 #29, yr 8.9, critic gen 1) | 150 |
| experimenter | combo_C | all | 15000 | 8.30 | 7.84 | 1428 (9.5%) | 1428 (9.5%) | 1385 (9.2%) | 3706 (24.7%) | 1463 (9.8%) | 9235 (61.6%) | 1% of 300 | 2/4.5/8 | 9.21/9.53/9.85/9.96 | 9.99 "Dead Edge" (A9.97/C10; experimenter seed 52 #16, yr 4.9, critic gen 0) | 7245 |
| self-funder | combo_C | all | 15000 | 7.18 | 6.76 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 69 (0.5%) | 0 (0.0%) | 643 (4.3%) | 100% of 300 | 0/0/0 | 7.96/8.25/8.58/8.9 | 8.93 "Red Run" (A9.08/C8.77; self-funder seed 148 #26, yr 8.0, critic gen 1) | 3025 |
| selective-self-funder | combo_C | all | 15000 | 8.43 | 7.93 | 2309 (15.4%) | 2309 (15.4%) | 2218 (14.8%) | 5328 (35.5%) | 2160 (14.4%) | 9860 (65.7%) | 0% of 300 | 3.9/7/12.1 | 9.34/9.59/9.97/10 | 10.00 "Last Frequency" (A10/C10; selective-self-funder seed 21 #29, yr 8.9, critic gen 1) | 9122.5 |
| famous-star | combo_C | all | 15000 | 6.65 | 6.34 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 10 (0.1%) | 100% of 300 | 0/0/0 | 7.34/7.58/7.88/8.08 | 8.15 "Broken Pulse" (A8.25/C8.05; famous-star seed 227 #31, yr 9.5, critic gen 1) | 375 |

### Greatest single films (all strategies, whole sample; reproducible from seed + config hash)

| Variant | Best combined | Best Audience | Best Critic | Year band with most HoF |
|---|---|---|---|---|
| control | 10.00 "Dead Protocol" (A10/C10; balanced seed 6 #32, yr 9.8, critic gen 0) | 10.00 "Dead Protocol" (A10/C10; balanced seed 6 #32, yr 9.8, critic gen 0) | 10.00 "Dead Protocol" (A10/C10; balanced seed 6 #32, yr 9.8, critic gen 0) | y10-15: 17.3% of 43200 |
| ref_no_era_bar | 10.00 "Broken Code" (A10/C10; quality-first seed 2 #39, yr 12.0, critic gen 0) | 10.00 "Broken Code" (A10/C10; quality-first seed 2 #39, yr 12.0, critic gen 0) | 10.00 "Broken Code" (A10/C10; quality-first seed 2 #39, yr 12.0, critic gen 0) | y10-15: 25.9% of 43200 |
| ref_era_bar_0.08 | 10.00 "Midnight Code" (A10/C10; selective-self-funder seed 7 #42, yr 12.9, critic gen 0) | 10.00 "Midnight Code" (A10/C10; selective-self-funder seed 7 #42, yr 12.9, critic gen 0) | 10.00 "Midnight Code" (A10/C10; selective-self-funder seed 7 #42, yr 12.9, critic gen 0) | y10-15: 11.8% of 43200 |
| critic_mild | 10.00 "Dead Protocol" (A10/C10; balanced seed 6 #32, yr 9.8, critic gen 1) | 10.00 "Dead Protocol" (A10/C10; balanced seed 6 #32, yr 9.8, critic gen 1) | 10.00 "Dead Protocol" (A10/C10; balanced seed 6 #32, yr 9.8, critic gen 1) | y5-10: 14.8% of 43200 |
| critic_moderate | 10.00 "Dead Protocol" (A10/C10; balanced seed 6 #32, yr 9.8, critic gen 1) | 10.00 "Dead Protocol" (A10/C10; balanced seed 6 #32, yr 9.8, critic gen 1) | 10.00 "Dead Protocol" (A10/C10; balanced seed 6 #32, yr 9.8, critic gen 1) | y5-10: 12.1% of 43200 |
| critic_strong | 10.00 "Dead Protocol" (A10/C10; balanced seed 6 #32, yr 9.8, critic gen 1) | 10.00 "Dead Protocol" (A10/C10; balanced seed 6 #32, yr 9.8, critic gen 1) | 10.00 "Dead Protocol" (A10/C10; balanced seed 6 #32, yr 9.8, critic gen 1) | y5-10: 10.3% of 43200 |
| critic_moderate_subtract | 10.00 "Dead Protocol" (A10/C10; balanced seed 6 #32, yr 9.8, critic gen 1) | 10.00 "Dead Protocol" (A10/C10; balanced seed 6 #32, yr 9.8, critic gen 1) | 10.00 "Dead Protocol" (A10/C10; balanced seed 6 #32, yr 9.8, critic gen 1) | y5-10: 11.8% of 43200 |
| audience_mild | 10.00 "Dead Protocol" (A10/C10; balanced seed 6 #32, yr 9.8, critic gen 0) | 10.00 "Dead Protocol" (A10/C10; balanced seed 6 #32, yr 9.8, critic gen 0) | 10.00 "Dead Protocol" (A10/C10; balanced seed 6 #32, yr 9.8, critic gen 0) | y5-10: 16.1% of 43200 |
| audience_moderate | 10.00 "Dead Protocol" (A10/C10; balanced seed 6 #32, yr 9.8, critic gen 0) | 10.00 "Dead Protocol" (A10/C10; balanced seed 6 #32, yr 9.8, critic gen 0) | 10.00 "Dead Protocol" (A10/C10; balanced seed 6 #32, yr 9.8, critic gen 0) | y5-10: 16.1% of 43200 |
| audience_strong | 10.00 "Dead Protocol" (A10/C10; balanced seed 6 #32, yr 9.8, critic gen 0) | 10.00 "Dead Protocol" (A10/C10; balanced seed 6 #32, yr 9.8, critic gen 0) | 10.00 "Dead Protocol" (A10/C10; balanced seed 6 #32, yr 9.8, critic gen 0) | y5-10: 14.8% of 43200 |
| combo_A | 10.00 "Dead Protocol" (A10/C10; balanced seed 6 #32, yr 9.8, critic gen 1) | 10.00 "Dead Protocol" (A10/C10; balanced seed 6 #32, yr 9.8, critic gen 1) | 10.00 "Dead Protocol" (A10/C10; balanced seed 6 #32, yr 9.8, critic gen 1) | y5-10: 14.8% of 43200 |
| combo_B | 10.00 "Dead Protocol" (A10/C10; balanced seed 6 #32, yr 9.8, critic gen 1) | 10.00 "Dead Protocol" (A10/C10; balanced seed 6 #32, yr 9.8, critic gen 1) | 10.00 "Dead Protocol" (A10/C10; balanced seed 6 #32, yr 9.8, critic gen 1) | y5-10: 12.1% of 43200 |
| combo_C | 10.00 "Dead Protocol" (A10/C10; balanced seed 6 #32, yr 9.8, critic gen 1) | 10.00 "Dead Protocol" (A10/C10; balanced seed 6 #32, yr 9.8, critic gen 1) | 10.00 "Dead Protocol" (A10/C10; balanced seed 6 #32, yr 9.8, critic gen 1) | y5-10: 10.3% of 43200 |

### Great films by in-game year (all strategies pooled)

| Strategy | Config | Window | Films (n) | Avg Aud | Avg Crit | HoF n (%) | Avg ≥9 n (%) | Avg >9 n (%) | Aud ≥9 n (%) | Crit ≥9 n (%) | 8+ n (%) | Careers with 0 HoF | HoF/career p10/p50/p90 | Best/career p10/p50/p90/p99 | Best combined movie | Prestige median |
|---|---|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---|---|---|---:|
| ALL | control | y0-5 | 43200 | 7.08 | 7.08 | 1565 (3.6%) | 1565 (3.6%) | 1509 (3.5%) | 2362 (5.5%) | 2379 (5.5%) | 9814 (22.7%) | 70% of 2700 | 0/0/2 | 7/8.3/9.43/9.84 | 10.00 "Silver Edge" (A10/C10; selective-self-funder seed 46 #12, yr 3.7, critic gen 0) |  |
| ALL | control | y5-10 | 43200 | 7.72 | 7.68 | 6939 (16.1%) | 6939 (16.1%) | 6791 (15.7%) | 8359 (19.4%) | 8236 (19.1%) | 17745 (41.1%) | 53% of 2700 | 0/0/7 | 6.92/8.54/9.81/10 | 10.00 "Dead Protocol" (A10/C10; balanced seed 6 #32, yr 9.8, critic gen 0) |  |
| ALL | control | y10-15 | 43200 | 7.76 | 7.72 | 7451 (17.3%) | 7451 (17.3%) | 7102 (16.4%) | 9058 (21.0%) | 8399 (19.4%) | 18122 (42.0%) | 54% of 2700 | 0/0/8 | 6.94/8.54/9.84/10 | 10.00 "Iron Rising" (A10/C10; selective-self-funder seed 10 #39, yr 12.0, critic gen 0) |  |
| ALL | control | y15-20 | 5400 | 7.69 | 7.64 | 786 (14.6%) | 786 (14.6%) | 764 (14.2%) | 1037 (19.2%) | 901 (16.7%) | 2176 (40.3%) | 78% of 2700 | 0/0/1 | 6.65/7.74/9.41/9.91 | 10.00 "Broken Night" (A10/C10; balanced seed 23 #50, yr 15.4, critic gen 0) |  |
| ALL | ref_no_era_bar | y0-5 | 43200 | 7.25 | 7.24 | 2649 (6.1%) | 2649 (6.1%) | 2550 (5.9%) | 3402 (7.9%) | 3784 (8.8%) | 11943 (27.6%) | 60% of 2700 | 0/0/3 | 7.35/8.48/9.59/10 | 10.00 "Wild Frequency" (A10/C10; experimenter seed 7 #16, yr 4.9, critic gen 0) |  |
| ALL | ref_no_era_bar | y5-10 | 43200 | 8.00 | 7.94 | 9711 (22.5%) | 9711 (22.5%) | 9538 (22.1%) | 11697 (27.1%) | 10240 (23.7%) | 20967 (48.5%) | 50% of 2700 | 0/1/10 | 7.07/9/9.94/10 | 10.00 "Last Shadow" (A10/C10; experimenter seed 6 #23, yr 7.1, critic gen 0) |  |
| ALL | ref_no_era_bar | y10-15 | 43200 | 8.13 | 8.05 | 11177 (25.9%) | 11177 (25.9%) | 10874 (25.2%) | 11461 (26.5%) | 10699 (24.8%) | 22486 (52.0%) | 47% of 2700 | 0/1/11 | 7.05/9.16/10/10 | 10.00 "Broken Code" (A10/C10; quality-first seed 2 #39, yr 12.0, critic gen 0) |  |
| ALL | ref_no_era_bar | y15-20 | 5400 | 8.10 | 8.01 | 1233 (22.8%) | 1233 (22.8%) | 1209 (22.4%) | 1404 (26.0%) | 1231 (22.8%) | 2757 (51.1%) | 66% of 2700 | 0/0/2 | 6.86/8.39/9.59/10 | 10.00 "Wild Run" (A10/C10; selective-self-funder seed 14 #49, yr 15.1, critic gen 0) |  |
| ALL | ref_era_bar_0.08 | y0-5 | 43200 | 6.91 | 6.92 | 799 (1.9%) | 799 (1.9%) | 769 (1.8%) | 1553 (3.6%) | 1675 (3.9%) | 7693 (17.8%) | 81% of 2700 | 0/0/1 | 6.72/8.15/9.27/9.73 | 9.98 "Last Horizon" (A9.96/C10; quality-first seed 87 #16, yr 4.9, critic gen 0) |  |
| ALL | ref_era_bar_0.08 | y5-10 | 43200 | 7.45 | 7.44 | 4601 (10.7%) | 4601 (10.7%) | 4476 (10.4%) | 5628 (13.0%) | 5537 (12.8%) | 15746 (36.5%) | 55% of 2700 | 0/0/5 | 6.76/8.18/9.69/10 | 10.00 "Silver Run" (A10/C10; balanced seed 10 #23, yr 7.1, critic gen 0) |  |
| ALL | ref_era_bar_0.08 | y10-15 | 43200 | 7.55 | 7.52 | 5110 (11.8%) | 5110 (11.8%) | 4976 (11.5%) | 6799 (15.7%) | 6867 (15.9%) | 16800 (38.9%) | 57% of 2700 | 0/0/6 | 6.86/8.21/9.74/10 | 10.00 "Midnight Code" (A10/C10; selective-self-funder seed 7 #42, yr 12.9, critic gen 0) |  |
| ALL | ref_era_bar_0.08 | y15-20 | 5400 | 7.57 | 7.53 | 584 (10.8%) | 584 (10.8%) | 580 (10.7%) | 899 (16.6%) | 838 (15.5%) | 2084 (38.6%) | 82% of 2700 | 0/0/1 | 6.57/7.53/9.32/9.82 | 10.00 "Broken Night" (A10/C10; balanced seed 23 #50, yr 15.4, critic gen 0) |  |
| ALL | critic_mild | y0-5 | 43200 | 7.08 | 7.08 | 1565 (3.6%) | 1565 (3.6%) | 1509 (3.5%) | 2362 (5.5%) | 2379 (5.5%) | 9814 (22.7%) | 70% of 2700 | 0/0/2 | 7/8.3/9.43/9.84 | 10.00 "Silver Edge" (A10/C10; selective-self-funder seed 46 #12, yr 3.7, critic gen 0) |  |
| ALL | critic_mild | y5-10 | 43200 | 7.72 | 7.58 | 6403 (14.8%) | 6403 (14.8%) | 6178 (14.3%) | 8386 (19.4%) | 6626 (15.3%) | 17241 (39.9%) | 54% of 2700 | 0/0/7 | 6.88/8.51/9.78/10 | 10.00 "Dead Protocol" (A10/C10; balanced seed 6 #32, yr 9.8, critic gen 1) |  |
| ALL | critic_mild | y10-15 | 43200 | 7.76 | 7.50 | 5722 (13.3%) | 5722 (13.3%) | 5637 (13.1%) | 9080 (21.0%) | 5264 (12.2%) | 17359 (40.2%) | 55% of 2700 | 0/0/6 | 6.83/8.41/9.75/10 | 10.00 "Iron Rising" (A10/C10; selective-self-funder seed 10 #39, yr 12.0, critic gen 1) |  |
| ALL | critic_mild | y15-20 | 5400 | 7.69 | 7.42 | 557 (10.3%) | 557 (10.3%) | 551 (10.2%) | 1048 (19.4%) | 601 (11.1%) | 2095 (38.8%) | 83% of 2700 | 0/0/1 | 6.55/7.63/9.28/9.78 | 10.00 "Broken Night" (A10/C10; balanced seed 23 #50, yr 15.4, critic gen 1) |  |
| ALL | critic_moderate | y0-5 | 43200 | 7.08 | 7.08 | 1565 (3.6%) | 1565 (3.6%) | 1509 (3.5%) | 2362 (5.5%) | 2379 (5.5%) | 9814 (22.7%) | 70% of 2700 | 0/0/2 | 7/8.3/9.43/9.84 | 10.00 "Silver Edge" (A10/C10; selective-self-funder seed 46 #12, yr 3.7, critic gen 0) |  |
| ALL | critic_moderate | y5-10 | 43200 | 7.72 | 7.44 | 5227 (12.1%) | 5227 (12.1%) | 5087 (11.8%) | 8395 (19.4%) | 5207 (12.1%) | 16501 (38.2%) | 55% of 2700 | 0/0/6 | 6.85/8.43/9.73/10 | 10.00 "Dead Protocol" (A10/C10; balanced seed 6 #32, yr 9.8, critic gen 1) |  |
| ALL | critic_moderate | y10-15 | 43200 | 7.78 | 7.24 | 4046 (9.4%) | 4046 (9.4%) | 3830 (8.9%) | 9182 (21.3%) | 3454 (8.0%) | 16207 (37.5%) | 57% of 2700 | 0/0/5 | 6.78/8.34/9.66/9.99 | 10.00 "Dead Protocol 2" (A10/C10; balanced seed 6 #37, yr 11.4, critic gen 1) |  |
| ALL | critic_moderate | y15-20 | 5400 | 7.72 | 7.06 | 385 (7.1%) | 385 (7.1%) | 378 (7.0%) | 1077 (19.9%) | 297 (5.5%) | 1878 (34.8%) | 88% of 2700 | 0/0/1 | 6.39/7.52/9.09/9.66 | 9.90 "Red Night" (A10/C9.8; balanced seed 87 #49, yr 15.1, critic gen 2) |  |
| ALL | critic_strong | y0-5 | 43200 | 7.08 | 7.08 | 1565 (3.6%) | 1565 (3.6%) | 1509 (3.5%) | 2362 (5.5%) | 2379 (5.5%) | 9814 (22.7%) | 70% of 2700 | 0/0/2 | 7/8.3/9.43/9.84 | 10.00 "Silver Edge" (A10/C10; selective-self-funder seed 46 #12, yr 3.7, critic gen 0) |  |
| ALL | critic_strong | y5-10 | 43200 | 7.72 | 7.31 | 4448 (10.3%) | 4448 (10.3%) | 4356 (10.1%) | 8402 (19.4%) | 4088 (9.5%) | 15889 (36.8%) | 55% of 2700 | 0/0/5 | 6.75/8.38/9.63/10 | 10.00 "Dead Protocol" (A10/C10; balanced seed 6 #32, yr 9.8, critic gen 1) |  |
| ALL | critic_strong | y10-15 | 43200 | 7.79 | 6.98 | 2269 (5.3%) | 2269 (5.3%) | 2043 (4.7%) | 9279 (21.5%) | 1212 (2.8%) | 14973 (34.7%) | 68% of 2700 | 0/0/3 | 6.57/8.19/9.41/9.79 | 9.81 "Lost Edge" (A10/C9.61; quality-first seed 73 #48, yr 14.8, critic gen 2) |  |
| ALL | critic_strong | y15-20 | 5400 | 7.72 | 6.52 | 105 (1.9%) | 105 (1.9%) | 101 (1.9%) | 1060 (19.6%) | 44 (0.8%) | 1369 (25.4%) | 96% of 2700 | 0/0/0 | 6.16/7.22/8.75/9.18 | 9.53 "Red Night" (A10/C9.05; balanced seed 87 #49, yr 15.1, critic gen 3) |  |
| ALL | critic_moderate_subtract | y0-5 | 43200 | 7.08 | 7.08 | 1565 (3.6%) | 1565 (3.6%) | 1509 (3.5%) | 2362 (5.5%) | 2379 (5.5%) | 9814 (22.7%) | 70% of 2700 | 0/0/2 | 7/8.3/9.43/9.84 | 10.00 "Silver Edge" (A10/C10; selective-self-funder seed 46 #12, yr 3.7, critic gen 0) |  |
| ALL | critic_moderate_subtract | y5-10 | 43200 | 7.72 | 7.37 | 5112 (11.8%) | 5112 (11.8%) | 4958 (11.5%) | 8412 (19.5%) | 5127 (11.9%) | 16260 (37.6%) | 55% of 2700 | 0/0/6 | 6.82/8.44/9.74/10 | 10.00 "Dead Protocol" (A10/C10; balanced seed 6 #32, yr 9.8, critic gen 1) |  |
| ALL | critic_moderate_subtract | y10-15 | 43200 | 7.79 | 7.11 | 3871 (9.0%) | 3871 (9.0%) | 3674 (8.5%) | 9358 (21.7%) | 3225 (7.5%) | 15836 (36.7%) | 57% of 2700 | 0/0/5 | 6.72/8.44/9.67/9.94 | 10.00 "Dead Protocol 2" (A10/C10; balanced seed 6 #37, yr 11.4, critic gen 1) |  |
| ALL | critic_moderate_subtract | y15-20 | 5400 | 7.76 | 6.92 | 401 (7.4%) | 401 (7.4%) | 375 (6.9%) | 1116 (20.7%) | 305 (5.7%) | 1854 (34.3%) | 87% of 2700 | 0/0/1 | 6.25/7.57/9.09/9.67 | 9.93 "Red Shadow" (A10/C9.86; quality-first seed 238 #49, yr 15.1, critic gen 2) |  |
| ALL | audience_mild | y0-5 | 43200 | 7.08 | 7.08 | 1565 (3.6%) | 1565 (3.6%) | 1509 (3.5%) | 2362 (5.5%) | 2379 (5.5%) | 9814 (22.7%) | 70% of 2700 | 0/0/2 | 7/8.3/9.43/9.84 | 10.00 "Silver Edge" (A10/C10; selective-self-funder seed 46 #12, yr 3.7, critic gen 0) |  |
| ALL | audience_mild | y5-10 | 43200 | 7.72 | 7.68 | 6939 (16.1%) | 6939 (16.1%) | 6791 (15.7%) | 8359 (19.4%) | 8236 (19.1%) | 17745 (41.1%) | 53% of 2700 | 0/0/7 | 6.92/8.54/9.81/10 | 10.00 "Dead Protocol" (A10/C10; balanced seed 6 #32, yr 9.8, critic gen 0) |  |
| ALL | audience_mild | y10-15 | 43200 | 7.69 | 7.72 | 6564 (15.2%) | 6564 (15.2%) | 6358 (14.7%) | 8306 (19.2%) | 8405 (19.5%) | 17923 (41.5%) | 54% of 2700 | 0/0/7 | 6.91/8.5/9.81/10 | 10.00 "Iron Rising" (A10/C10; selective-self-funder seed 10 #39, yr 12.0, critic gen 0) |  |
| ALL | audience_mild | y15-20 | 5400 | 7.58 | 7.64 | 601 (11.1%) | 601 (11.1%) | 592 (11.0%) | 897 (16.6%) | 903 (16.7%) | 2128 (39.4%) | 82% of 2700 | 0/0/1 | 6.6/7.67/9.35/9.91 | 10.00 "Broken Night" (A10/C10; balanced seed 23 #50, yr 15.4, critic gen 0) |  |
| ALL | audience_moderate | y0-5 | 43200 | 7.08 | 7.08 | 1565 (3.6%) | 1565 (3.6%) | 1509 (3.5%) | 2362 (5.5%) | 2379 (5.5%) | 9814 (22.7%) | 70% of 2700 | 0/0/2 | 7/8.3/9.43/9.84 | 10.00 "Silver Edge" (A10/C10; selective-self-funder seed 46 #12, yr 3.7, critic gen 0) |  |
| ALL | audience_moderate | y5-10 | 43200 | 7.72 | 7.68 | 6939 (16.1%) | 6939 (16.1%) | 6791 (15.7%) | 8359 (19.4%) | 8236 (19.1%) | 17745 (41.1%) | 53% of 2700 | 0/0/7 | 6.92/8.54/9.81/10 | 10.00 "Dead Protocol" (A10/C10; balanced seed 6 #32, yr 9.8, critic gen 0) |  |
| ALL | audience_moderate | y10-15 | 43200 | 7.61 | 7.72 | 6036 (14.0%) | 6036 (14.0%) | 5932 (13.7%) | 6238 (14.4%) | 8428 (19.5%) | 17638 (40.8%) | 55% of 2700 | 0/0/7 | 6.86/8.47/9.75/10 | 10.00 "Iron Rising" (A10/C10; selective-self-funder seed 10 #39, yr 12.0, critic gen 0) |  |
| ALL | audience_moderate | y15-20 | 5400 | 7.55 | 7.64 | 589 (10.9%) | 589 (10.9%) | 577 (10.7%) | 774 (14.3%) | 904 (16.7%) | 2114 (39.1%) | 82% of 2700 | 0/0/1 | 6.59/7.67/9.33/9.9 | 10.00 "Broken Night" (A10/C10; balanced seed 23 #50, yr 15.4, critic gen 0) |  |
| ALL | audience_strong | y0-5 | 43200 | 7.08 | 7.08 | 1565 (3.6%) | 1565 (3.6%) | 1509 (3.5%) | 2362 (5.5%) | 2379 (5.5%) | 9814 (22.7%) | 70% of 2700 | 0/0/2 | 7/8.3/9.43/9.84 | 10.00 "Silver Edge" (A10/C10; selective-self-funder seed 46 #12, yr 3.7, critic gen 0) |  |
| ALL | audience_strong | y5-10 | 43200 | 7.62 | 7.68 | 6375 (14.8%) | 6375 (14.8%) | 6175 (14.3%) | 6747 (15.6%) | 8238 (19.1%) | 17227 (39.9%) | 54% of 2700 | 0/0/7 | 6.88/8.51/9.77/10 | 10.00 "Dead Protocol" (A10/C10; balanced seed 6 #32, yr 9.8, critic gen 0) |  |
| ALL | audience_strong | y10-15 | 43200 | 7.54 | 7.72 | 5695 (13.2%) | 5695 (13.2%) | 5544 (12.8%) | 4772 (11.1%) | 8365 (19.4%) | 17337 (40.1%) | 55% of 2700 | 0/0/6 | 6.83/8.43/9.71/10 | 10.00 "Iron Rising" (A10/C10; selective-self-funder seed 10 #39, yr 12.0, critic gen 0) |  |
| ALL | audience_strong | y15-20 | 5400 | 7.47 | 7.64 | 554 (10.3%) | 554 (10.3%) | 544 (10.1%) | 563 (10.4%) | 892 (16.5%) | 2087 (38.6%) | 83% of 2700 | 0/0/1 | 6.55/7.63/9.28/9.86 | 10.00 "Broken Night" (A10/C10; balanced seed 23 #50, yr 15.4, critic gen 0) |  |
| ALL | combo_A | y0-5 | 43200 | 7.08 | 7.08 | 1565 (3.6%) | 1565 (3.6%) | 1509 (3.5%) | 2362 (5.5%) | 2379 (5.5%) | 9814 (22.7%) | 70% of 2700 | 0/0/2 | 7/8.3/9.43/9.84 | 10.00 "Silver Edge" (A10/C10; selective-self-funder seed 46 #12, yr 3.7, critic gen 0) |  |
| ALL | combo_A | y5-10 | 43200 | 7.72 | 7.58 | 6403 (14.8%) | 6403 (14.8%) | 6178 (14.3%) | 8386 (19.4%) | 6626 (15.3%) | 17241 (39.9%) | 54% of 2700 | 0/0/7 | 6.88/8.51/9.78/10 | 10.00 "Dead Protocol" (A10/C10; balanced seed 6 #32, yr 9.8, critic gen 1) |  |
| ALL | combo_A | y10-15 | 43200 | 7.70 | 7.50 | 5282 (12.2%) | 5282 (12.2%) | 5089 (11.8%) | 8363 (19.4%) | 5304 (12.3%) | 17078 (39.5%) | 55% of 2700 | 0/0/6 | 6.81/8.39/9.75/10 | 10.00 "Iron Rising" (A10/C10; selective-self-funder seed 10 #39, yr 12.0, critic gen 1) |  |
| ALL | combo_A | y15-20 | 5400 | 7.59 | 7.43 | 516 (9.6%) | 516 (9.6%) | 491 (9.1%) | 917 (17.0%) | 611 (11.3%) | 2028 (37.6%) | 84% of 2700 | 0/0/1 | 6.5/7.58/9.25/9.78 | 10.00 "Broken Night" (A10/C10; balanced seed 23 #50, yr 15.4, critic gen 1) |  |
| ALL | combo_B | y0-5 | 43200 | 7.08 | 7.08 | 1565 (3.6%) | 1565 (3.6%) | 1509 (3.5%) | 2362 (5.5%) | 2379 (5.5%) | 9814 (22.7%) | 70% of 2700 | 0/0/2 | 7/8.3/9.43/9.84 | 10.00 "Silver Edge" (A10/C10; selective-self-funder seed 46 #12, yr 3.7, critic gen 0) |  |
| ALL | combo_B | y5-10 | 43200 | 7.72 | 7.44 | 5227 (12.1%) | 5227 (12.1%) | 5087 (11.8%) | 8395 (19.4%) | 5207 (12.1%) | 16501 (38.2%) | 55% of 2700 | 0/0/6 | 6.85/8.43/9.73/10 | 10.00 "Dead Protocol" (A10/C10; balanced seed 6 #32, yr 9.8, critic gen 1) |  |
| ALL | combo_B | y10-15 | 43200 | 7.63 | 7.25 | 3149 (7.3%) | 3149 (7.3%) | 2961 (6.8%) | 6395 (14.8%) | 3464 (8.0%) | 15528 (35.9%) | 60% of 2700 | 0/0/4 | 6.71/8.32/9.61/9.99 | 10.00 "Dead Protocol 2" (A10/C10; balanced seed 6 #37, yr 11.4, critic gen 1) |  |
| ALL | combo_B | y15-20 | 5400 | 7.59 | 7.07 | 309 (5.7%) | 309 (5.7%) | 294 (5.4%) | 815 (15.1%) | 300 (5.6%) | 1778 (32.9%) | 90% of 2700 | 0/0/1 | 6.32/7.47/9/9.53 | 9.90 "Red Night" (A10/C9.8; balanced seed 87 #49, yr 15.1, critic gen 2) |  |
| ALL | combo_C | y0-5 | 43200 | 7.08 | 7.08 | 1565 (3.6%) | 1565 (3.6%) | 1509 (3.5%) | 2362 (5.5%) | 2379 (5.5%) | 9814 (22.7%) | 70% of 2700 | 0/0/2 | 7/8.3/9.43/9.84 | 10.00 "Silver Edge" (A10/C10; selective-self-funder seed 46 #12, yr 3.7, critic gen 0) |  |
| ALL | combo_C | y5-10 | 43200 | 7.72 | 7.31 | 4448 (10.3%) | 4448 (10.3%) | 4356 (10.1%) | 8402 (19.4%) | 4088 (9.5%) | 15889 (36.8%) | 55% of 2700 | 0/0/5 | 6.75/8.38/9.63/10 | 10.00 "Dead Protocol" (A10/C10; balanced seed 6 #32, yr 9.8, critic gen 1) |  |
| ALL | combo_C | y10-15 | 43200 | 7.73 | 6.99 | 1904 (4.4%) | 1904 (4.4%) | 1782 (4.1%) | 8589 (19.9%) | 1237 (2.9%) | 14683 (34.0%) | 69% of 2700 | 0/0/3 | 6.59/8.22/9.41/9.79 | 9.81 "Lost Edge" (A10/C9.61; quality-first seed 73 #48, yr 14.8, critic gen 2) |  |
| ALL | combo_C | y15-20 | 5400 | 7.63 | 6.54 | 67 (1.2%) | 67 (1.2%) | 65 (1.2%) | 944 (17.5%) | 45 (0.8%) | 1316 (24.4%) | 98% of 2700 | 0/0/0 | 6.11/7.26/8.69/9.18 | 9.53 "Lost Echo" (A10/C9.06; selective-self-funder seed 203 #49, yr 15.1, critic gen 3) |  |

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
| balanced | ref_no_era_bar | $12.44M | 12655 | 807.6 | 71% | 100% · #6 | 100% · #6 | 100% | 0 | 100% · #10 | 100% · #10 | 100% | 0 |
| quality-first | ref_no_era_bar | $12.86M | 11720 | 747.9 | 57% | 100% · #6 | 100% · #6 | 100% | 0 | 100% · #11 | 100% · #11 | 100% | 0 |
| franchise-builder | ref_no_era_bar | $11.53M | 4635 | 295.8 | 71% | 100% · #6 | 100% · #6 | 100% | 0 | 100% · #9 | 100% · #9 | 100% | 0 |
| repeat-farmer | ref_no_era_bar | $14.42M | 3350 | 213.8 | 63% | 100% · #6 | 100% · #6 | 100% | 0 | 100% · #10 | 100% · #10 | 100% | 0 |
| cheap-duds | ref_no_era_bar | $10.90M | 2012.5 | 128.4 | 4% | 100% · #25 | 0% · #— | 100% | 0 | 100% · #39 | 0% · #— | 0% | 0 |
| experimenter | ref_no_era_bar | $13.64M | 11935 | 761.6 | 56% | 100% · #7 | 100% · #7 | 100% | 0 | 100% · #12 | 100% · #12 | 100% | 0 |
| self-funder | ref_no_era_bar | $0.32M | 5090 | 325.2 | 100% | 100% · #14 | 0% · #— | 64% | 0 | 100% · #22 | 0% · #— | 0% | 0 |
| selective-self-funder | ref_no_era_bar | $12.50M | 12702.5 | 810.6 | 67% | 100% · #6 | 100% · #6 | 100% | 0 | 100% · #10 | 100% · #10 | 100% | 0 |
| famous-star | ref_no_era_bar | $13.66M | 2732.5 | 174.4 | 100% | 100% · #21 | 0% · #— | 100% | 0 | 100% · #35 | 0% · #— | 0% | 0 |
| balanced | ref_era_bar_0.08 | $12.40M | 9937.5 | 634.2 | 71% | 100% · #7 | 100% · #7 | 100% | 0 | 100% · #11 | 100% · #12 | 100% | 0 |
| quality-first | ref_era_bar_0.08 | $12.74M | 8945 | 570.8 | 57% | 100% · #8 | 100% · #8 | 100% | 0 | 100% · #14 | 100% · #14 | 100% | 0 |
| franchise-builder | ref_era_bar_0.08 | $10.95M | 3955 | 252.4 | 71% | 100% · #6 | 100% · #7 | 100% | 0 | 100% · #11 | 100% · #11 | 100% | 0 |
| repeat-farmer | ref_era_bar_0.08 | $12.34M | 3100 | 197.8 | 63% | 100% · #7 | 100% · #7 | 100% | 0 | 100% · #12.5 | 100% · #13 | 100% | 0 |
| cheap-duds | ref_era_bar_0.08 | $5.86M | 0 | 0 | 4% | 2% · #47 | 0% · #— | 100% | 0 | 0% · #— | 0% · #— | 0% | 0 |
| experimenter | ref_era_bar_0.08 | $13.36M | 8082.5 | 515.8 | 56% | 100% · #10 | 100% · #10 | 100% | 0 | 100% · #16 | 100% · #16 | 100% | 0 |
| self-funder | ref_era_bar_0.08 | $0.30M | 785 | 50.1 | 100% | 99% · #25 | 0% · #— | 77% | 0 | 27% · #42 | 0% · #— | 0% | 0 |
| selective-self-funder | ref_era_bar_0.08 | $12.46M | 9972.5 | 636.4 | 67% | 100% · #7 | 100% · #7 | 100% | 0 | 100% · #11 | 100% · #12 | 100% | 0 |
| famous-star | ref_era_bar_0.08 | $9.42M | 150 | 9.6 | 100% | 24% · #46 | 0% · #— | 100% | 0 | 0% · #— | 0% · #— | 0% | 0 |
| balanced | critic_mild | $12.39M | 10565 | 674.2 | 71% | 100% · #6 | 100% · #7 | 100% | 0 | 100% · #11 | 100% · #11 | 100% | 0 |
| quality-first | critic_mild | $12.75M | 9565 | 610.4 | 57% | 100% · #7 | 100% · #7 | 100% | 0 | 100% · #12 | 100% · #12 | 100% | 0 |
| franchise-builder | critic_mild | $11.08M | 4075 | 260.1 | 71% | 100% · #6 | 100% · #7 | 100% | 0 | 100% · #10 | 100% · #10 | 100% | 0 |
| repeat-farmer | critic_mild | $13.33M | 3250 | 207.4 | 63% | 100% · #6 | 100% · #7 | 100% | 0 | 100% · #11 | 100% · #11 | 100% | 0 |
| cheap-duds | critic_mild | $7.56M | 150 | 9.6 | 4% | 45% · #40 | 0% · #— | 100% | 0 | 0% · #— | 0% · #— | 0% | 0 |
| experimenter | critic_mild | $13.51M | 8940 | 570.5 | 56% | 100% · #8 | 100% · #8 | 100% | 0 | 100% · #14 | 100% · #14 | 100% | 0 |
| self-funder | critic_mild | $0.31M | 3157.5 | 201.5 | 100% | 100% · #18 | 0% · #— | 68% | 0 | 100% · #27.5 | 0% · #— | 0% | 0 |
| selective-self-funder | critic_mild | $12.55M | 10767.5 | 687.1 | 67% | 100% · #6.5 | 100% · #7 | 100% | 0 | 100% · #10 | 100% · #11 | 100% | 0 |
| famous-star | critic_mild | $11.58M | 375 | 23.9 | 100% | 92% · #33 | 0% · #— | 100% | 0 | 1% · #47.5 | 0% · #— | 0% | 0 |
| balanced | critic_moderate | $12.39M | 9850 | 628.6 | 71% | 100% · #6 | 100% · #7 | 100% | 0 | 100% · #11 | 100% · #11 | 100% | 0 |
| quality-first | critic_moderate | $12.76M | 8760 | 559 | 57% | 100% · #7 | 100% · #7 | 100% | 0 | 100% · #12 | 100% · #12 | 100% | 0 |
| franchise-builder | critic_moderate | $11.17M | 4185 | 267.2 | 71% | 100% · #6 | 100% · #7 | 100% | 0 | 100% · #10 | 100% · #10 | 100% | 0 |
| repeat-farmer | critic_moderate | $13.19M | 3250 | 207.4 | 63% | 100% · #6 | 100% · #7 | 100% | 0 | 100% · #11 | 100% · #11 | 100% | 0 |
| cheap-duds | critic_moderate | $7.45M | 150 | 9.6 | 4% | 44% · #39.5 | 0% · #— | 100% | 0 | 0% · #— | 0% · #— | 0% | 0 |
| experimenter | critic_moderate | $13.51M | 8165 | 521.1 | 56% | 100% · #8 | 100% · #8 | 100% | 0 | 100% · #14 | 100% · #14 | 100% | 0 |
| self-funder | critic_moderate | $0.31M | 3110 | 198.5 | 100% | 100% · #18 | 0% · #— | 68% | 0 | 100% · #28 | 0% · #— | 0% | 0 |
| selective-self-funder | critic_moderate | $12.55M | 10057.5 | 641.8 | 67% | 100% · #6.5 | 100% · #7 | 100% | 0 | 100% · #10 | 100% · #11 | 100% | 0 |
| famous-star | critic_moderate | $11.57M | 375 | 23.9 | 100% | 92% · #33 | 0% · #— | 100% | 0 | 1% · #47.5 | 0% · #— | 0% | 0 |
| balanced | critic_strong | $12.38M | 8987.5 | 573.5 | 71% | 100% · #6 | 100% · #7 | 100% | 0 | 100% · #11 | 100% · #11 | 100% | 0 |
| quality-first | critic_strong | $12.76M | 8007.5 | 511 | 57% | 100% · #7 | 100% · #7 | 100% | 0 | 100% · #12 | 100% · #12 | 100% | 0 |
| franchise-builder | critic_strong | $11.20M | 4330 | 276.3 | 71% | 100% · #6 | 100% · #7 | 100% | 0 | 100% · #10 | 100% · #10 | 100% | 0 |
| repeat-farmer | critic_strong | $12.98M | 3250 | 207.4 | 63% | 100% · #6 | 100% · #7 | 100% | 0 | 100% · #11 | 100% · #11 | 100% | 0 |
| cheap-duds | critic_strong | $7.31M | 150 | 9.6 | 4% | 44% · #39 | 0% · #— | 100% | 0 | 0% · #— | 0% · #— | 0% | 0 |
| experimenter | critic_strong | $13.52M | 7257.5 | 463.1 | 56% | 100% · #8 | 100% · #8 | 100% | 0 | 100% · #14 | 100% · #14 | 100% | 0 |
| self-funder | critic_strong | $0.31M | 3075 | 196.2 | 100% | 100% · #18 | 0% · #— | 69% | 0 | 100% · #28 | 0% · #— | 0% | 0 |
| selective-self-funder | critic_strong | $12.55M | 9192.5 | 586.6 | 67% | 100% · #6.5 | 100% · #7 | 100% | 0 | 100% · #10 | 100% · #11 | 100% | 0 |
| famous-star | critic_strong | $11.56M | 375 | 23.9 | 100% | 92% · #33 | 0% · #— | 100% | 0 | 1% · #47.5 | 0% · #— | 0% | 0 |
| balanced | critic_moderate_subtract | $12.39M | 9732.5 | 621.1 | 71% | 100% · #6 | 100% · #7 | 100% | 0 | 100% · #11 | 100% · #11 | 100% | 0 |
| quality-first | critic_moderate_subtract | $12.76M | 8627.5 | 550.6 | 57% | 100% · #7 | 100% · #7 | 100% | 0 | 100% · #12 | 100% · #12 | 100% | 0 |
| franchise-builder | critic_moderate_subtract | $11.22M | 4650 | 296.7 | 71% | 100% · #6 | 100% · #7 | 100% | 0 | 100% · #10 | 100% · #10 | 100% | 0 |
| repeat-farmer | critic_moderate_subtract | $13.04M | 3250 | 207.4 | 63% | 100% · #6 | 100% · #7 | 100% | 0 | 100% · #11 | 100% · #11 | 100% | 0 |
| cheap-duds | critic_moderate_subtract | $7.21M | 150 | 9.6 | 4% | 42% · #39 | 0% · #— | 100% | 0 | 0% · #— | 0% · #— | 0% | 0 |
| experimenter | critic_moderate_subtract | $13.51M | 7990 | 509.9 | 56% | 100% · #8 | 100% · #8 | 100% | 0 | 100% · #14 | 100% · #14 | 100% | 0 |
| self-funder | critic_moderate_subtract | $0.31M | 3100 | 197.8 | 100% | 100% · #18 | 0% · #— | 68% | 0 | 100% · #28 | 0% · #— | 0% | 0 |
| selective-self-funder | critic_moderate_subtract | $12.55M | 9960 | 635.6 | 67% | 100% · #6.5 | 100% · #7 | 100% | 0 | 100% · #10 | 100% · #11 | 100% | 0 |
| famous-star | critic_moderate_subtract | $11.56M | 375 | 23.9 | 100% | 92% · #33 | 0% · #— | 100% | 0 | 1% · #47.5 | 0% · #— | 0% | 0 |
| balanced | audience_mild | $12.39M | 10820 | 690.5 | 71% | 100% · #6 | 100% · #7 | 100% | 0 | 100% · #11 | 100% · #11 | 100% | 0 |
| quality-first | audience_mild | $12.74M | 9905 | 632.1 | 57% | 100% · #7 | 100% · #7 | 100% | 0 | 100% · #12 | 100% · #12 | 100% | 0 |
| franchise-builder | audience_mild | $11.00M | 4055 | 258.8 | 71% | 100% · #6 | 100% · #7 | 100% | 0 | 100% · #10 | 100% · #10 | 100% | 0 |
| repeat-farmer | audience_mild | $13.33M | 3250 | 207.4 | 63% | 100% · #6 | 100% · #7 | 100% | 0 | 100% · #11 | 100% · #11 | 100% | 0 |
| cheap-duds | audience_mild | $7.53M | 150 | 9.6 | 4% | 40% · #38 | 0% · #— | 100% | 0 | 0% · #— | 0% · #— | 0% | 0 |
| experimenter | audience_mild | $13.51M | 9690 | 618.4 | 56% | 100% · #8 | 100% · #8 | 100% | 0 | 100% · #14 | 100% · #14 | 100% | 0 |
| self-funder | audience_mild | $0.30M | 3157.5 | 201.5 | 100% | 100% · #18 | 0% · #— | 68% | 0 | 100% · #27 | 0% · #— | 0% | 0 |
| selective-self-funder | audience_mild | $12.52M | 11035 | 704.2 | 67% | 100% · #6.5 | 100% · #7 | 100% | 0 | 100% · #10 | 100% · #11 | 100% | 0 |
| famous-star | audience_mild | $11.56M | 375 | 23.9 | 100% | 85% · #32 | 0% · #— | 100% | 0 | 0% · #49 | 0% · #— | 0% | 0 |
| balanced | audience_moderate | $12.39M | 10735 | 685.1 | 71% | 100% · #6 | 100% · #7 | 100% | 0 | 100% · #11 | 100% · #11 | 100% | 0 |
| quality-first | audience_moderate | $12.73M | 9882.5 | 630.7 | 57% | 100% · #7 | 100% · #7 | 100% | 0 | 100% · #12 | 100% · #12 | 100% | 0 |
| franchise-builder | audience_moderate | $10.97M | 4055 | 258.8 | 71% | 100% · #6 | 100% · #7 | 100% | 0 | 100% · #10 | 100% · #10 | 100% | 0 |
| repeat-farmer | audience_moderate | $13.16M | 3250 | 207.4 | 63% | 100% · #6 | 100% · #7 | 100% | 0 | 100% · #11 | 100% · #11 | 100% | 0 |
| cheap-duds | audience_moderate | $7.43M | 150 | 9.6 | 4% | 31% · #38 | 0% · #— | 100% | 0 | 0% · #— | 0% · #— | 0% | 0 |
| experimenter | audience_moderate | $13.51M | 9392.5 | 599.4 | 56% | 100% · #8 | 100% · #8 | 100% | 0 | 100% · #14 | 100% · #14 | 100% | 0 |
| self-funder | audience_moderate | $0.30M | 3120 | 199.1 | 100% | 100% · #18 | 0% · #— | 68% | 0 | 100% · #27 | 0% · #— | 0% | 0 |
| selective-self-funder | audience_moderate | $12.52M | 10985 | 701 | 67% | 100% · #6.5 | 100% · #7 | 100% | 0 | 100% · #10 | 100% · #11 | 100% | 0 |
| famous-star | audience_moderate | $11.45M | 300 | 19.1 | 100% | 77% · #31 | 0% · #— | 100% | 0 | 0% · #— | 0% · #— | 0% | 0 |
| balanced | audience_strong | $12.38M | 10565 | 674.2 | 71% | 100% · #6 | 100% · #7 | 100% | 0 | 100% · #11 | 100% · #11 | 100% | 0 |
| quality-first | audience_strong | $12.72M | 9647.5 | 615.7 | 57% | 100% · #7 | 100% · #7 | 100% | 0 | 100% · #12 | 100% · #12 | 100% | 0 |
| franchise-builder | audience_strong | $10.85M | 4092.5 | 261.2 | 71% | 100% · #6 | 100% · #7 | 100% | 0 | 100% · #10 | 100% · #10 | 100% | 0 |
| repeat-farmer | audience_strong | $12.77M | 3250 | 207.4 | 63% | 100% · #6 | 100% · #7 | 100% | 0 | 100% · #11 | 100% · #11 | 100% | 0 |
| cheap-duds | audience_strong | $7.24M | 150 | 9.6 | 4% | 25% · #39.5 | 0% · #— | 100% | 0 | 0% · #— | 0% · #— | 0% | 0 |
| experimenter | audience_strong | $13.49M | 9210 | 587.7 | 56% | 100% · #8 | 100% · #8 | 100% | 0 | 100% · #14 | 100% · #14 | 100% | 0 |
| self-funder | audience_strong | $0.30M | 2945 | 187.9 | 100% | 100% · #18 | 0% · #— | 68% | 0 | 100% · #27.5 | 0% · #— | 0% | 0 |
| selective-self-funder | audience_strong | $12.52M | 10830 | 691.1 | 67% | 100% · #6.5 | 100% · #7 | 100% | 0 | 100% · #10 | 100% · #11 | 100% | 0 |
| famous-star | audience_strong | $11.19M | 235 | 15 | 100% | 65% · #34 | 0% · #— | 100% | 0 | 0% · #— | 0% · #— | 0% | 0 |
| balanced | combo_A | $12.39M | 10565 | 674.2 | 71% | 100% · #6 | 100% · #7 | 100% | 0 | 100% · #11 | 100% · #11 | 100% | 0 |
| quality-first | combo_A | $12.74M | 9470 | 604.3 | 57% | 100% · #7 | 100% · #7 | 100% | 0 | 100% · #12 | 100% · #12 | 100% | 0 |
| franchise-builder | combo_A | $11.05M | 4125 | 263.2 | 71% | 100% · #6 | 100% · #7 | 100% | 0 | 100% · #10 | 100% · #10 | 100% | 0 |
| repeat-farmer | combo_A | $13.22M | 3250 | 207.4 | 63% | 100% · #6 | 100% · #7 | 100% | 0 | 100% · #11 | 100% · #11 | 100% | 0 |
| cheap-duds | combo_A | $7.47M | 150 | 9.6 | 4% | 40% · #38 | 0% · #— | 100% | 0 | 0% · #— | 0% · #— | 0% | 0 |
| experimenter | combo_A | $13.51M | 8872.5 | 566.2 | 56% | 100% · #8 | 100% · #8 | 100% | 0 | 100% · #14 | 100% · #14 | 100% | 0 |
| self-funder | combo_A | $0.30M | 3115 | 198.8 | 100% | 100% · #18 | 0% · #— | 68% | 0 | 100% · #27.5 | 0% · #— | 0% | 0 |
| selective-self-funder | combo_A | $12.55M | 10700 | 682.8 | 67% | 100% · #6.5 | 100% · #7 | 100% | 0 | 100% · #10 | 100% · #11 | 100% | 0 |
| famous-star | combo_A | $11.55M | 375 | 23.9 | 100% | 85% · #32 | 0% · #— | 100% | 0 | 0% · #49 | 0% · #— | 0% | 0 |
| balanced | combo_B | $12.37M | 9665 | 616.8 | 71% | 100% · #6 | 100% · #7 | 100% | 0 | 100% · #11 | 100% · #11 | 100% | 0 |
| quality-first | combo_B | $12.74M | 8622.5 | 550.3 | 57% | 100% · #7 | 100% · #7 | 100% | 0 | 100% · #12 | 100% · #12 | 100% | 0 |
| franchise-builder | combo_B | $11.13M | 4300 | 274.4 | 71% | 100% · #6 | 100% · #7 | 100% | 0 | 100% · #10 | 100% · #10 | 100% | 0 |
| repeat-farmer | combo_B | $12.86M | 3250 | 207.4 | 63% | 100% · #6 | 100% · #7 | 100% | 0 | 100% · #11 | 100% · #11 | 100% | 0 |
| cheap-duds | combo_B | $7.15M | 150 | 9.6 | 4% | 30% · #38 | 0% · #— | 100% | 0 | 0% · #— | 0% · #— | 0% | 0 |
| experimenter | combo_B | $13.50M | 7997.5 | 510.4 | 56% | 100% · #8 | 100% · #8 | 100% | 0 | 100% · #14 | 100% · #14 | 100% | 0 |
| self-funder | combo_B | $0.30M | 3005 | 191.9 | 100% | 100% · #18 | 0% · #— | 68% | 0 | 100% · #28 | 0% · #— | 0% | 0 |
| selective-self-funder | combo_B | $12.55M | 9912.5 | 632.6 | 67% | 100% · #6.5 | 100% · #7 | 100% | 0 | 100% · #10 | 100% · #11 | 100% | 0 |
| famous-star | combo_B | $11.42M | 300 | 19.1 | 100% | 76% · #31 | 0% · #— | 100% | 0 | 0% · #— | 0% · #— | 0% | 0 |
| balanced | combo_C | $12.39M | 8900 | 568 | 71% | 100% · #6 | 100% · #7 | 100% | 0 | 100% · #11 | 100% · #11 | 100% | 0 |
| quality-first | combo_C | $12.76M | 7907.5 | 504.6 | 57% | 100% · #7 | 100% · #7 | 100% | 0 | 100% · #12 | 100% · #12 | 100% | 0 |
| franchise-builder | combo_C | $11.19M | 4605 | 293.9 | 71% | 100% · #6 | 100% · #7 | 100% | 0 | 100% · #10 | 100% · #10 | 100% | 0 |
| repeat-farmer | combo_C | $12.82M | 3250 | 207.4 | 63% | 100% · #6 | 100% · #7 | 100% | 0 | 100% · #11 | 100% · #11 | 100% | 0 |
| cheap-duds | combo_C | $7.20M | 150 | 9.6 | 4% | 37% · #36 | 0% · #— | 100% | 0 | 0% · #— | 0% · #— | 0% | 0 |
| experimenter | combo_C | $13.51M | 7245 | 462.3 | 56% | 100% · #8 | 100% · #8 | 100% | 0 | 100% · #14 | 100% · #14 | 100% | 0 |
| self-funder | combo_C | $0.30M | 3025 | 193 | 100% | 100% · #18 | 0% · #— | 69% | 0 | 100% · #28 | 0% · #— | 0% | 0 |
| selective-self-funder | combo_C | $12.55M | 9122.5 | 582.2 | 67% | 100% · #6.5 | 100% · #7 | 100% | 0 | 100% · #10 | 100% · #11 | 100% | 0 |
| famous-star | combo_C | $11.52M | 375 | 23.9 | 100% | 85% · #32 | 0% · #— | 100% | 0 | 0% · #49 | 0% · #— | 0% | 0 |

### Prestige milestones awarded per career (mean)

| Strategy | Variant | audience_7_5 | critic_8_5 | first_hall_of_fame | hall_of_fame | ip_gross_1m | ip_gross_5m | ip_viewers_500k | meters_all_70 | careers > 400 Prestige/yr (OUTDATED threshold) |
|---|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|
| balanced | control | 40.95 | 24.16 | 1 | 14.7 | 2.63 | 1.06 | 2.63 | 44.6 | 100% |
| balanced | ref_no_era_bar | 41.99 | 28.79 | 1 | 20.25 | 2.52 | 1.07 | 2.52 | 45.3 | 100% |
| balanced | ref_era_bar_0.08 | 39.8 | 22.11 | 1 | 10.64 | 2.73 | 1.13 | 2.73 | 43.61 | 100% |
| balanced | critic_mild | 41.06 | 22.94 | 1 | 12.69 | 2.65 | 1.07 | 2.65 | 44.6 | 100% |
| balanced | critic_moderate | 41.29 | 19.59 | 1 | 10.2 | 2.72 | 1.08 | 2.72 | 44.6 | 100% |
| balanced | critic_strong | 41.51 | 15.5 | 1 | 7.85 | 2.76 | 1.11 | 2.76 | 44.6 | 100% |
| balanced | critic_moderate_subtract | 41.42 | 18.43 | 1 | 10.05 | 2.77 | 1.09 | 2.77 | 44.6 | 100% |
| balanced | audience_mild | 40.84 | 24.18 | 1 | 13.65 | 2.64 | 1.06 | 2.64 | 44.6 | 100% |
| balanced | audience_moderate | 40.72 | 24.22 | 1 | 13.33 | 2.65 | 1.07 | 2.65 | 44.6 | 100% |
| balanced | audience_strong | 40.24 | 24.22 | 1 | 12.65 | 2.64 | 1.07 | 2.64 | 44.6 | 100% |
| balanced | combo_A | 41.07 | 23.03 | 1 | 12.3 | 2.69 | 1.09 | 2.69 | 44.6 | 100% |
| balanced | combo_B | 41.05 | 19.61 | 1 | 9.35 | 2.75 | 1.08 | 2.75 | 44.6 | 100% |
| balanced | combo_C | 41.48 | 15.54 | 1 | 7.38 | 2.78 | 1.11 | 2.78 | 44.6 | 100% |
| quality-first | control | 41.96 | 23.81 | 1 | 13.07 | 0 | 0 | 0 | 44.61 | 100% |
| quality-first | ref_no_era_bar | 42.94 | 28.45 | 1 | 18.76 | 0 | 0 | 0 | 45.42 | 100% |
| quality-first | ref_era_bar_0.08 | 40.91 | 21.23 | 1 | 8.97 | 0 | 0 | 0 | 43.67 | 100% |
| quality-first | critic_mild | 41.97 | 22.43 | 1 | 11.01 | 0 | 0 | 0 | 44.61 | 100% |
| quality-first | critic_moderate | 41.98 | 18.56 | 1 | 8.66 | 0 | 0 | 0 | 44.61 | 100% |
| quality-first | critic_strong | 41.98 | 14.46 | 1 | 6.49 | 0 | 0 | 0 | 44.61 | 100% |
| quality-first | critic_moderate_subtract | 41.98 | 17.38 | 1 | 8.43 | 0 | 0 | 0 | 44.61 | 100% |
| quality-first | audience_mild | 41.96 | 23.81 | 1 | 11.87 | 0 | 0 | 0 | 44.61 | 100% |
| quality-first | audience_moderate | 41.96 | 23.81 | 1 | 11.62 | 0 | 0 | 0 | 44.61 | 100% |
| quality-first | audience_strong | 41.78 | 23.79 | 1 | 10.93 | 0 | 0 | 0 | 44.61 | 100% |
| quality-first | combo_A | 41.97 | 22.42 | 1 | 10.54 | 0 | 0 | 0 | 44.61 | 100% |
| quality-first | combo_B | 41.98 | 18.56 | 1 | 7.84 | 0 | 0 | 0 | 44.61 | 100% |
| quality-first | combo_C | 41.98 | 14.46 | 1 | 6.09 | 0 | 0 | 0 | 44.61 | 99% |
| franchise-builder | control | 11.35 | 2.8 | 0.19 | 1.01 | 2.33 | 2.26 | 2.33 | 44.65 | 14% |
| franchise-builder | ref_no_era_bar | 17.69 | 3.02 | 0.16 | 1.14 | 2.22 | 2.19 | 2.22 | 45.37 | 14% |
| franchise-builder | ref_era_bar_0.08 | 10.42 | 2.47 | 0.17 | 0.73 | 2.5 | 2.39 | 2.5 | 43.85 | 10% |
| franchise-builder | critic_mild | 11.61 | 2.39 | 0.19 | 0.79 | 2.38 | 2.31 | 2.38 | 44.65 | 11% |
| franchise-builder | critic_moderate | 12.43 | 2.21 | 0.21 | 0.83 | 2.53 | 2.36 | 2.53 | 44.65 | 13% |
| franchise-builder | critic_strong | 13.08 | 1.76 | 0.16 | 0.6 | 2.64 | 2.44 | 2.64 | 44.65 | 8% |
| franchise-builder | critic_moderate_subtract | 13.6 | 2.38 | 0.29 | 0.97 | 2.81 | 2.4 | 2.81 | 44.65 | 14% |
| franchise-builder | audience_mild | 11.3 | 2.81 | 0.19 | 0.94 | 2.35 | 2.26 | 2.35 | 44.65 | 14% |
| franchise-builder | audience_moderate | 11.32 | 2.85 | 0.2 | 0.95 | 2.35 | 2.26 | 2.35 | 44.65 | 13% |
| franchise-builder | audience_strong | 11.4 | 2.78 | 0.18 | 0.81 | 2.4 | 2.31 | 2.4 | 44.65 | 12% |
| franchise-builder | combo_A | 11.65 | 2.45 | 0.2 | 0.76 | 2.43 | 2.3 | 2.43 | 44.65 | 12% |
| franchise-builder | combo_B | 12.59 | 2.27 | 0.21 | 0.78 | 2.6 | 2.37 | 2.6 | 44.65 | 12% |
| franchise-builder | combo_C | 13.59 | 1.89 | 0.21 | 0.65 | 2.83 | 2.44 | 2.83 | 44.65 | 9% |
| repeat-farmer | control | 6.35 | 0.91 | 0.01 | 0.05 | 1 | 1 | 1 | 44.69 | 1% |
| repeat-farmer | ref_no_era_bar | 12.52 | 1.51 | 0.02 | 0.16 | 1 | 1 | 1 | 45.44 | 2% |
| repeat-farmer | ref_era_bar_0.08 | 5.84 | 0.76 | 0.01 | 0.06 | 1 | 1 | 1 | 43.82 | 1% |
| repeat-farmer | critic_mild | 6.35 | 0.91 | 0.01 | 0.05 | 1 | 1 | 1 | 44.69 | 1% |
| repeat-farmer | critic_moderate | 6.35 | 0.9 | 0.01 | 0.05 | 1 | 1 | 1 | 44.69 | 0% |
| repeat-farmer | critic_strong | 6.35 | 0.89 | 0.01 | 0.05 | 1 | 1 | 1 | 44.69 | 0% |
| repeat-farmer | critic_moderate_subtract | 6.35 | 0.9 | 0.01 | 0.05 | 1 | 1 | 1 | 44.69 | 0% |
| repeat-farmer | audience_mild | 6.35 | 0.91 | 0.01 | 0.05 | 1 | 1 | 1 | 44.69 | 1% |
| repeat-farmer | audience_moderate | 6.35 | 0.91 | 0.01 | 0.05 | 1 | 1 | 1 | 44.69 | 1% |
| repeat-farmer | audience_strong | 6.35 | 0.91 | 0.01 | 0.05 | 1 | 1 | 1 | 44.69 | 1% |
| repeat-farmer | combo_A | 6.35 | 0.91 | 0.01 | 0.05 | 1 | 1 | 1 | 44.69 | 1% |
| repeat-farmer | combo_B | 6.35 | 0.9 | 0.01 | 0.05 | 1 | 1 | 1 | 44.69 | 0% |
| repeat-farmer | combo_C | 6.35 | 0.89 | 0.01 | 0.05 | 1 | 1 | 1 | 44.69 | 0% |
| cheap-duds | control | 2.47 | 0.01 | 0 | 0 | 0 | 0 | 0 | 0 | 0% |
| cheap-duds | ref_no_era_bar | 11.55 | 2.14 | 0.04 | 0.04 | 0 | 0 | 0 | 19.31 | 0% |
| cheap-duds | ref_era_bar_0.08 | 0.5 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0% |
| cheap-duds | critic_mild | 2.48 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0% |
| cheap-duds | critic_moderate | 2.47 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0% |
| cheap-duds | critic_strong | 2.49 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0% |
| cheap-duds | critic_moderate_subtract | 2.45 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0% |
| cheap-duds | audience_mild | 2.27 | 0.01 | 0 | 0 | 0 | 0 | 0 | 0 | 0% |
| cheap-duds | audience_moderate | 1.99 | 0.01 | 0 | 0 | 0 | 0 | 0 | 0 | 0% |
| cheap-duds | audience_strong | 1.73 | 0.01 | 0 | 0 | 0 | 0 | 0 | 0 | 0% |
| cheap-duds | combo_A | 2.27 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0% |
| cheap-duds | combo_B | 1.96 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0% |
| cheap-duds | combo_C | 2.23 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0% |
| experimenter | control | 40.77 | 25.66 | 1 | 11.74 | 0 | 0 | 0 | 42.02 | 100% |
| experimenter | ref_no_era_bar | 42.23 | 28.46 | 1 | 20.4 | 0 | 0 | 0 | 43.67 | 100% |
| experimenter | ref_era_bar_0.08 | 38.94 | 21.99 | 0.98 | 6.21 | 0 | 0 | 0 | 40.14 | 96% |
| experimenter | critic_mild | 40.77 | 21.2 | 1 | 9.76 | 0 | 0 | 0 | 42.02 | 99% |
| experimenter | critic_moderate | 40.76 | 18.2 | 1 | 7.06 | 0 | 0 | 0 | 42.02 | 98% |
| experimenter | critic_strong | 40.76 | 12.71 | 0.99 | 4.81 | 0 | 0 | 0 | 42.02 | 93% |
| experimenter | critic_moderate_subtract | 40.76 | 17.47 | 1 | 6.6 | 0 | 0 | 0 | 42.02 | 98% |
| experimenter | audience_mild | 40.64 | 25.66 | 1 | 11.55 | 0 | 0 | 0 | 42.02 | 100% |
| experimenter | audience_moderate | 40.24 | 25.67 | 1 | 10.61 | 0 | 0 | 0 | 42.02 | 100% |
| experimenter | audience_strong | 39.81 | 25.67 | 1 | 9.77 | 0 | 0 | 0 | 42.02 | 99% |
| experimenter | combo_A | 40.64 | 21.2 | 1 | 9.46 | 0 | 0 | 0 | 42.02 | 99% |
| experimenter | combo_B | 40.23 | 18.2 | 1 | 6.45 | 0 | 0 | 0 | 42.02 | 97% |
| experimenter | combo_C | 40.63 | 12.71 | 0.99 | 4.76 | 0 | 0 | 0 | 42.02 | 93% |
| self-funder | control | 20.4 | 2.5 | 0.08 | 0.08 | 0 | 0 | 0 | 28.88 | 0% |
| self-funder | ref_no_era_bar | 30.66 | 8.44 | 0.77 | 1.4 | 0 | 0 | 0 | 35.2 | 4% |
| self-funder | ref_era_bar_0.08 | 9.5 | 1.1 | 0 | 0 | 0 | 0 | 0 | 0.28 | 0% |
| self-funder | critic_mild | 20.41 | 1.81 | 0.02 | 0.02 | 0 | 0 | 0 | 28.88 | 0% |
| self-funder | critic_moderate | 20.42 | 1.15 | 0 | 0 | 0 | 0 | 0 | 28.86 | 0% |
| self-funder | critic_strong | 20.41 | 0.68 | 0 | 0 | 0 | 0 | 0 | 28.84 | 0% |
| self-funder | critic_moderate_subtract | 20.42 | 1.13 | 0 | 0 | 0 | 0 | 0 | 28.86 | 0% |
| self-funder | audience_mild | 19.9 | 2.5 | 0.08 | 0.08 | 0 | 0 | 0 | 28.88 | 0% |
| self-funder | audience_moderate | 19.23 | 2.51 | 0.06 | 0.06 | 0 | 0 | 0 | 28.88 | 0% |
| self-funder | audience_strong | 17.02 | 2.49 | 0.02 | 0.02 | 0 | 0 | 0 | 28.83 | 0% |
| self-funder | combo_A | 19.91 | 1.81 | 0.02 | 0.02 | 0 | 0 | 0 | 28.88 | 0% |
| self-funder | combo_B | 19.25 | 1.15 | 0 | 0 | 0 | 0 | 0 | 28.86 | 0% |
| self-funder | combo_C | 19.89 | 0.68 | 0 | 0 | 0 | 0 | 0 | 28.84 | 0% |
| selective-self-funder | control | 41.11 | 24.69 | 1 | 15.15 | 2.65 | 1.11 | 2.65 | 44.56 | 100% |
| selective-self-funder | ref_no_era_bar | 42.08 | 28.38 | 1 | 20.32 | 2.5 | 1.07 | 2.5 | 45.3 | 100% |
| selective-self-funder | ref_era_bar_0.08 | 39.6 | 21.68 | 1 | 10.37 | 2.72 | 1.16 | 2.72 | 43.56 | 100% |
| selective-self-funder | critic_mild | 41.22 | 23.41 | 1 | 13.17 | 2.66 | 1.1 | 2.66 | 44.56 | 100% |
| selective-self-funder | critic_moderate | 41.38 | 20.08 | 1 | 10.61 | 2.71 | 1.12 | 2.71 | 44.56 | 100% |
| selective-self-funder | critic_strong | 41.56 | 15.89 | 1 | 8.15 | 2.73 | 1.12 | 2.73 | 44.56 | 100% |
| selective-self-funder | critic_moderate_subtract | 41.5 | 18.95 | 1 | 10.41 | 2.76 | 1.12 | 2.76 | 44.56 | 100% |
| selective-self-funder | audience_mild | 41.01 | 24.7 | 1 | 14.09 | 2.65 | 1.11 | 2.65 | 44.56 | 100% |
| selective-self-funder | audience_moderate | 40.89 | 24.72 | 1 | 13.81 | 2.67 | 1.11 | 2.67 | 44.56 | 100% |
| selective-self-funder | audience_strong | 40.46 | 24.71 | 1 | 13.06 | 2.66 | 1.1 | 2.66 | 44.56 | 100% |
| selective-self-funder | combo_A | 41.22 | 23.47 | 1 | 12.76 | 2.69 | 1.11 | 2.69 | 44.56 | 100% |
| selective-self-funder | combo_B | 41.19 | 20.1 | 1 | 9.7 | 2.73 | 1.12 | 2.73 | 44.56 | 100% |
| selective-self-funder | combo_C | 41.51 | 15.92 | 1 | 7.7 | 2.78 | 1.11 | 2.78 | 44.56 | 100% |
| famous-star | control | 5.67 | 0.08 | 0 | 0 | 0 | 0 | 0 | 0 | 0% |
| famous-star | ref_no_era_bar | 19.59 | 3.2 | 0.08 | 0.09 | 0 | 0 | 0 | 19.23 | 0% |
| famous-star | ref_era_bar_0.08 | 1.65 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0% |
| famous-star | critic_mild | 5.67 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0% |
| famous-star | critic_moderate | 5.67 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0% |
| famous-star | critic_strong | 5.67 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0% |
| famous-star | critic_moderate_subtract | 5.67 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0% |
| famous-star | audience_mild | 4.92 | 0.08 | 0 | 0 | 0 | 0 | 0 | 0 | 0% |
| famous-star | audience_moderate | 4.12 | 0.08 | 0 | 0 | 0 | 0 | 0 | 0 | 0% |
| famous-star | audience_strong | 3.46 | 0.08 | 0 | 0 | 0 | 0 | 0 | 0 | 0% |
| famous-star | combo_A | 4.92 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0% |
| famous-star | combo_B | 4.12 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0% |
| famous-star | combo_C | 4.92 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0% |

### Diagnostic flags fired

| Variant | Fired |
|---|---|
| control | EARLY_SOFTLOCK, PRESTIGE_TOO_FAST, QUALITY_INFLATION, DEAD_STRATEGY |
| ref_no_era_bar | EARLY_SOFTLOCK, PRESTIGE_TOO_FAST, QUALITY_INFLATION, DEAD_STRATEGY |
| ref_era_bar_0.08 | EARLY_SOFTLOCK, PRESTIGE_TOO_FAST, QUALITY_INFLATION, DEAD_STRATEGY |
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
