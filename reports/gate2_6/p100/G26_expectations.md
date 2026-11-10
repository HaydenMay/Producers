# Experiment: G26_expectations

> **Simulation assumptions, not design locks.** Paired seeds: every variant runs the same seeds and strategies; only the config overrides differ.

Gate 2.6 critic generations + audience eras. Base = config/candidate.json (ladder 4-6-8, diffusion legs, hybrid Prestige) held constant. All expectation numbers are TEST ASSUMPTIONS.

- Seeds 1–300 (300) · strategies: balanced, quality-first, franchise-builder, repeat-farmer, cheap-duds, experimenter, self-funder, selective-self-funder, famous-star · reference variant: **control**
- Ruleset v9.61-movie-kernel-0.1 · measured runtime 2911114 ms for 35100 careers

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

## 100-production careers

Invariant violations across all variants: **0**.

### Medians by strategy

| Strategy | Variant | endCash | prestige | prestigePerRelease | meanAudience | meanCritic | share8plus | share9plus | shareLate8plus | hofShare | maxStaffEnd | staffCount | meanStaffStat | upgrades | firstUpgradeWeek | years | maxIpFans | negativeCashWeeks |
|---|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|
| balanced | control | $27089K | 21092.50 | 210.90 | 8.48 | 8.35 | 75% | 24% | 75% | 24% | 8 | 8 | 100 | 2 | 112 | 31.06 | 127429.50 | 2 |
| balanced | ref_no_era_bar | $27210K | 25300 | 253 | 8.71 | 8.57 | 81% | 38% | 83% | 38% | 8 | 8 | 100 | 2 | 96 | 31.06 | 132482.50 | 2 |
| balanced | ref_era_bar_0.08 | $27067K | 19692.50 | 196.90 | 8.37 | 8.27 | 72% | 18% | 75% | 18% | 8 | 8 | 100 | 2 | 112 | 31.06 | 123673 | 2 |
| balanced | critic_mild | $27117K | 18697.50 | 186.95 | 8.49 | 8.02 | 66% | 17% | 55% | 17% | 8 | 8 | 100 | 2 | 112 | 31.06 | 111281 | 2 |
| balanced | critic_moderate | $27097K | 17172.50 | 171.75 | 8.48 | 7.78 | 59% | 13% | 45% | 13% | 8 | 8 | 100 | 2 | 112 | 31.06 | 104034.50 | 2 |
| balanced | critic_strong | $27039K | 15780 | 157.80 | 8.51 | 7.39 | 47% | 8% | 20% | 8% | 8 | 8 | 100 | 2 | 112 | 31.06 | 83022.50 | 2 |
| balanced | critic_moderate_subtract | $27119K | 17022.50 | 170.25 | 8.50 | 7.69 | 55% | 12% | 35% | 12% | 8 | 8 | 100 | 2 | 112 | 31.06 | 100756.50 | 2 |
| balanced | audience_mild | $27045K | 20375 | 203.75 | 8.37 | 8.36 | 71% | 21% | 68% | 21% | 8 | 8 | 100 | 2 | 112 | 31.06 | 119367 | 2 |
| balanced | audience_moderate | $26987K | 20040 | 200.35 | 8.31 | 8.38 | 70% | 20% | 65% | 20% | 8 | 8 | 100 | 2 | 112 | 31.06 | 119569 | 2 |
| balanced | audience_strong | $26825K | 18940 | 189.35 | 8.12 | 8.38 | 66% | 17% | 55% | 17% | 8 | 8 | 100 | 2 | 112 | 31.06 | 110680 | 2 |
| balanced | combo_A | $27064K | 18490 | 184.85 | 8.38 | 8.02 | 63% | 16% | 50% | 16% | 8 | 8 | 100 | 2 | 112 | 31.06 | 106584 | 2 |
| balanced | combo_B | $27010K | 16632.50 | 166.30 | 8.32 | 7.78 | 54% | 11% | 33% | 11% | 8 | 8 | 100 | 2 | 112 | 31.06 | 94909 | 2 |
| balanced | combo_C | $26963K | 15680 | 156.80 | 8.41 | 7.40 | 45% | 7% | 18% | 7% | 8 | 8 | 100 | 2 | 112 | 31.06 | 77723 | 2 |
| quality-first | control | $27734K | 17552.50 | 175.55 | 8.34 | 8.21 | 70% | 17% | 57% | 17% | 8 | 8 | 100 | 2 | 112 | 31.06 | 19011 | 1 |
| quality-first | ref_no_era_bar | $27951K | 21297.50 | 212.95 | 8.58 | 8.43 | 78% | 27% | 73% | 27% | 8 | 8 | 100 | 2 | 96 | 31.06 | 20837.50 | 1 |
| quality-first | ref_era_bar_0.08 | $27738K | 16152.50 | 161.55 | 8.25 | 8.13 | 67% | 12% | 57% | 12% | 8 | 8 | 100 | 2 | 128 | 31.06 | 18962.50 | 1 |
| quality-first | critic_mild | $27731K | 15970 | 159.70 | 8.34 | 7.86 | 56% | 13% | 28% | 13% | 8 | 8 | 100 | 2 | 112 | 31.06 | 16912.50 | 1 |
| quality-first | critic_moderate | $27763K | 14742.50 | 147.45 | 8.34 | 7.61 | 49% | 10% | 18% | 10% | 8 | 8 | 100 | 2 | 112 | 31.06 | 16218.50 | 1 |
| quality-first | critic_strong | $27759K | 13565 | 135.65 | 8.34 | 7.24 | 41% | 7% | 5% | 7% | 8 | 8 | 100 | 2 | 112 | 31.06 | 14247 | 1 |
| quality-first | critic_moderate_subtract | $27756K | 14537.50 | 145.35 | 8.34 | 7.48 | 45% | 10% | 10% | 10% | 8 | 8 | 100 | 2 | 112 | 31.06 | 15438.50 | 1 |
| quality-first | audience_mild | $27596K | 17040 | 170.40 | 8.23 | 8.21 | 63% | 15% | 43% | 15% | 8 | 8 | 100 | 2 | 112 | 31.06 | 18204.50 | 1 |
| quality-first | audience_moderate | $27476K | 16592.50 | 165.90 | 8.16 | 8.21 | 61% | 15% | 38% | 15% | 8 | 8 | 100 | 2 | 112 | 31.06 | 17588.50 | 1 |
| quality-first | audience_strong | $27034K | 15627.50 | 156.30 | 7.98 | 8.21 | 56% | 13% | 28% | 13% | 8 | 8 | 100 | 2 | 112 | 31.06 | 16588.50 | 1 |
| quality-first | combo_A | $27559K | 15830 | 158.30 | 8.23 | 7.86 | 54% | 12% | 25% | 12% | 8 | 8 | 100 | 2 | 112 | 31.06 | 16126 | 1 |
| quality-first | combo_B | $27433K | 14075 | 140.75 | 8.16 | 7.61 | 45% | 9% | 10% | 9% | 8 | 8 | 100 | 2 | 112 | 31.06 | 14814 | 1 |
| quality-first | combo_C | $27541K | 13450 | 134.50 | 8.23 | 7.24 | 40% | 6% | 5% | 6% | 8 | 8 | 100 | 2 | 112 | 31.06 | 13509 | 1 |
| franchise-builder | control | $24913K | 6560 | 65.60 | 6.95 | 6.91 | 4% | 0% | 0% | 0% | 8 | 8 | 100 | 2 | 112 | 31.06 | 175419 | 2 |
| franchise-builder | ref_no_era_bar | $25813K | 7297.50 | 72.95 | 7.03 | 6.96 | 5% | 0% | 0% | 0% | 8 | 8 | 100 | 2 | 96 | 31.06 | 194546.50 | 2 |
| franchise-builder | ref_era_bar_0.08 | $24744K | 6495 | 64.90 | 6.95 | 6.88 | 3% | 0% | 0% | 0% | 8 | 8 | 100 | 2 | 112 | 31.06 | 174982.50 | 2 |
| franchise-builder | critic_mild | $24913K | 6965 | 69.65 | 7.07 | 6.71 | 6% | 0% | 0% | 0% | 8 | 8 | 100 | 2 | 112 | 31.06 | 153671.50 | 2 |
| franchise-builder | critic_moderate | $24866K | 8750 | 87.50 | 7.30 | 6.64 | 10% | 0% | 3% | 0% | 8 | 8 | 100 | 2 | 112 | 31.06 | 147139 | 2 |
| franchise-builder | critic_strong | $24749K | 9680 | 96.80 | 7.38 | 6.43 | 10% | 0% | 8% | 0% | 8 | 8 | 100 | 2 | 112 | 31.06 | 124248 | 2 |
| franchise-builder | critic_moderate_subtract | $24898K | 10895 | 108.95 | 7.43 | 6.63 | 16% | 1% | 20% | 1% | 8 | 8 | 100 | 2 | 112 | 31.06 | 142332.50 | 2 |
| franchise-builder | audience_mild | $24525K | 6572.50 | 65.75 | 6.87 | 6.93 | 4% | 0% | 0% | 0% | 8 | 8 | 100 | 2 | 112 | 31.06 | 166803.50 | 2 |
| franchise-builder | audience_moderate | $24367K | 6750 | 67.50 | 6.84 | 6.99 | 5% | 0% | 0% | 0% | 8 | 8 | 100 | 2 | 112 | 31.06 | 163103.50 | 2 |
| franchise-builder | audience_strong | $23462K | 7742.50 | 77.40 | 6.83 | 7.11 | 8% | 0% | 3% | 0% | 8 | 8 | 100 | 2 | 112 | 31.06 | 149278.50 | 2 |
| franchise-builder | combo_A | $24543K | 7847.50 | 78.50 | 7.09 | 6.83 | 8% | 0% | 3% | 0% | 8 | 8 | 100 | 2 | 112 | 31.06 | 146478 | 2 |
| franchise-builder | combo_B | $24415K | 9072.50 | 90.70 | 7.20 | 6.72 | 10% | 0% | 8% | 0% | 8 | 8 | 100 | 2 | 112 | 31.06 | 133582 | 2 |
| franchise-builder | combo_C | $24536K | 10490 | 104.90 | 7.38 | 6.50 | 11% | 0% | 8% | 0% | 8 | 8 | 100 | 2 | 112 | 31.06 | 106544 | 2 |
| repeat-farmer | control | $32093K | 5750 | 57.50 | 6.82 | 6.77 | 1% | 0% | 0% | 0% | 8 | 8 | 100 | 2 | 112 | 31.06 | 296034.50 | 2 |
| repeat-farmer | ref_no_era_bar | $33929K | 5850 | 58.50 | 7.02 | 6.97 | 1% | 0% | 0% | 0% | 8 | 8 | 100 | 2 | 96 | 31.06 | 346210 | 2 |
| repeat-farmer | ref_era_bar_0.08 | $30759K | 5600 | 56 | 6.76 | 6.72 | 0% | 0% | 0% | 0% | 8 | 8 | 100 | 2 | 112 | 31.06 | 290524.50 | 2 |
| repeat-farmer | critic_mild | $31459K | 5750 | 57.50 | 6.82 | 6.48 | 1% | 0% | 0% | 0% | 8 | 8 | 100 | 2 | 112 | 31.06 | 251436 | 2 |
| repeat-farmer | critic_moderate | $30713K | 5750 | 57.50 | 6.82 | 6.27 | 1% | 0% | 0% | 0% | 8 | 8 | 100 | 2 | 112 | 31.06 | 226435 | 2 |
| repeat-farmer | critic_strong | $29363K | 5750 | 57.50 | 6.82 | 5.97 | 1% | 0% | 0% | 0% | 8 | 8 | 100 | 2 | 112 | 31.06 | 180994.50 | 2 |
| repeat-farmer | critic_moderate_subtract | $29565K | 5750 | 57.50 | 6.82 | 6.03 | 1% | 0% | 0% | 0% | 8 | 8 | 100 | 2 | 112 | 31.06 | 195233 | 2 |
| repeat-farmer | audience_mild | $31361K | 5750 | 57.50 | 6.73 | 6.77 | 1% | 0% | 0% | 0% | 8 | 8 | 100 | 2 | 112 | 31.06 | 274439.50 | 2 |
| repeat-farmer | audience_moderate | $30546K | 5750 | 57.50 | 6.67 | 6.77 | 1% | 0% | 0% | 0% | 8 | 8 | 100 | 2 | 112 | 31.06 | 261781.50 | 2 |
| repeat-farmer | audience_strong | $28249K | 5750 | 57.50 | 6.52 | 6.77 | 1% | 0% | 0% | 0% | 8 | 8 | 100 | 2 | 112 | 31.06 | 228006.50 | 2 |
| repeat-farmer | combo_A | $30415K | 5750 | 57.50 | 6.73 | 6.48 | 1% | 0% | 0% | 0% | 8 | 8 | 100 | 2 | 112 | 31.06 | 229183 | 2 |
| repeat-farmer | combo_B | $28472K | 5750 | 57.50 | 6.67 | 6.27 | 1% | 0% | 0% | 0% | 8 | 8 | 100 | 2 | 112 | 31.06 | 193629 | 2 |
| repeat-farmer | combo_C | $27819K | 5750 | 57.50 | 6.73 | 5.97 | 1% | 0% | 0% | 0% | 8 | 8 | 100 | 2 | 112 | 31.06 | 163577.50 | 2 |
| cheap-duds | control | $16960K | 300 | 3 | 6.21 | 6.34 | 0% | 0% | 0% | 0% | 4 | 2 | 94.80 | 0 | — | 31.06 | 6943.50 | 0 |
| cheap-duds | ref_no_era_bar | $25504K | 6202.50 | 62 | 6.90 | 6.97 | 10% | 0% | 13% | 0% | 4 | 2 | 94.80 | 0 | — | 31.06 | 15875 | 0 |
| cheap-duds | ref_era_bar_0.08 | $13417K | 150 | 1.50 | 6.03 | 6.16 | 0% | 0% | 0% | 0% | 4 | 2 | 94.80 | 0 | — | 31.06 | 6333.50 | 0 |
| cheap-duds | critic_mild | $16375K | 300 | 3 | 6.21 | 6.07 | 0% | 0% | 0% | 0% | 4 | 2 | 94.80 | 0 | — | 31.06 | 5754 | 0 |
| cheap-duds | critic_moderate | $15926K | 375 | 3.80 | 6.21 | 5.86 | 0% | 0% | 0% | 0% | 4 | 2 | 94.80 | 0 | — | 31.06 | 5345 | 0 |
| cheap-duds | critic_strong | $15196K | 375 | 3.80 | 6.21 | 5.58 | 0% | 0% | 0% | 0% | 4 | 2 | 94.80 | 0 | — | 31.04 | 4346.50 | 0 |
| cheap-duds | critic_moderate_subtract | $15212K | 300 | 3 | 6.22 | 5.59 | 0% | 0% | 0% | 0% | 4 | 2 | 94.80 | 0 | — | 31.04 | 4716 | 0 |
| cheap-duds | audience_mild | $16377K | 300 | 3 | 6.13 | 6.34 | 0% | 0% | 0% | 0% | 4 | 2 | 94.80 | 0 | — | 31.04 | 5936 | 0 |
| cheap-duds | audience_moderate | $15938K | 225 | 2.30 | 6.09 | 6.34 | 0% | 0% | 0% | 0% | 4 | 2 | 94.80 | 0 | — | 31.02 | 5529 | 0 |
| cheap-duds | audience_strong | $14864K | 150 | 1.50 | 5.95 | 6.33 | 0% | 0% | 0% | 0% | 4 | 2 | 94.80 | 0 | — | 31 | 4353 | 0 |
| cheap-duds | combo_A | $15724K | 225 | 2.30 | 6.12 | 6.06 | 0% | 0% | 0% | 0% | 4 | 2 | 94.80 | 0 | — | 31.04 | 4883.50 | 0 |
| cheap-duds | combo_B | $14876K | 225 | 2.30 | 6.08 | 5.86 | 0% | 0% | 0% | 0% | 4 | 2 | 94.80 | 0 | — | 31.02 | 4308 | 0 |
| cheap-duds | combo_C | $14451K | 300 | 3 | 6.13 | 5.57 | 0% | 0% | 0% | 0% | 4 | 2 | 94.80 | 0 | — | 31.02 | 3662.50 | 0 |
| experimenter | control | $30032K | 16167.50 | 161.70 | 8.17 | 8.12 | 60% | 12% | 40% | 12% | 8 | 8 | 93.80 | 2 | 128 | 31.06 | 18597 | 1 |
| experimenter | ref_no_era_bar | $30303K | 20570 | 205.75 | 8.49 | 8.38 | 77% | 25% | 70% | 25% | 8 | 8 | 93.90 | 2 | 112 | 31.06 | 20650 | 1 |
| experimenter | ref_era_bar_0.08 | $29812K | 14535 | 145.35 | 8.05 | 8.01 | 56% | 6% | 40% | 6% | 8 | 8 | 93.60 | 2 | 160 | 31.06 | 18639.50 | 1 |
| experimenter | critic_mild | $30016K | 14627.50 | 146.30 | 8.18 | 7.77 | 51% | 9% | 23% | 9% | 8 | 8 | 93.80 | 2 | 128 | 31.06 | 16342.50 | 1 |
| experimenter | critic_moderate | $29995K | 13537.50 | 135.35 | 8.18 | 7.53 | 41% | 7% | 8% | 7% | 8 | 8 | 93.80 | 2 | 128 | 31.06 | 15630 | 1 |
| experimenter | critic_strong | $29959K | 12630 | 126.30 | 8.18 | 7.16 | 35% | 5% | 0% | 5% | 8 | 8 | 93.80 | 2 | 128 | 31.06 | 13694 | 1 |
| experimenter | critic_moderate_subtract | $29982K | 13435 | 134.30 | 8.18 | 7.38 | 39% | 6% | 5% | 6% | 8 | 8 | 93.80 | 2 | 128 | 31.06 | 15027 | 1 |
| experimenter | audience_mild | $29848K | 15842.50 | 158.40 | 8.07 | 8.12 | 57% | 11% | 35% | 11% | 8 | 8 | 93.80 | 2 | 128 | 31.06 | 17808.50 | 1 |
| experimenter | audience_moderate | $29699K | 15175 | 151.75 | 8 | 8.12 | 56% | 10% | 33% | 10% | 8 | 8 | 93.80 | 2 | 128 | 31.06 | 17185 | 1 |
| experimenter | audience_strong | $29146K | 14500 | 145 | 7.82 | 8.12 | 51% | 9% | 23% | 9% | 8 | 8 | 93.80 | 2 | 128 | 31.06 | 16010 | 1 |
| experimenter | combo_A | $29793K | 14315 | 143.15 | 8.07 | 7.77 | 48% | 9% | 18% | 9% | 8 | 8 | 93.80 | 2 | 128 | 31.06 | 15602.50 | 1 |
| experimenter | combo_B | $29594K | 12820 | 128.20 | 8.01 | 7.53 | 37% | 6% | 0% | 6% | 8 | 8 | 93.80 | 2 | 128 | 31.06 | 14315 | 1 |
| experimenter | combo_C | $29683K | 12335 | 123.35 | 8.08 | 7.15 | 34% | 5% | 0% | 5% | 8 | 8 | 93.80 | 2 | 128 | 31.06 | 12902.50 | 1 |
| self-funder | control | $264K | 3980 | 39.80 | 6.94 | 6.89 | 6% | 0% | 0% | 0% | 4 | 2 | 100 | 0 | — | 31.06 | 3815.50 | 12 |
| self-funder | ref_no_era_bar | $290K | 10167.50 | 101.70 | 7.57 | 7.49 | 25% | 2% | 5% | 2% | 4 | 2 | 100 | 0 | — | 31.06 | 3385.50 | 12 |
| self-funder | ref_era_bar_0.08 | $275K | 1050 | 10.50 | 6.75 | 6.71 | 1% | 0% | 0% | 0% | 4 | 2 | 100 | 0 | — | 31.06 | 3575.50 | 12 |
| self-funder | critic_mild | $261K | 3910 | 39.10 | 6.94 | 6.59 | 4% | 0% | 0% | 0% | 4 | 2 | 100 | 0 | — | 31.06 | 3158 | 12 |
| self-funder | critic_moderate | $259K | 3860 | 38.60 | 6.93 | 6.38 | 3% | 0% | 0% | 0% | 4 | 2 | 100 | 0 | — | 31.06 | 2791 | 12 |
| self-funder | critic_strong | $260K | 3830 | 38.35 | 6.93 | 6.07 | 2% | 0% | 0% | 0% | 4 | 2 | 100 | 0 | — | 31.06 | 2249.50 | 12 |
| self-funder | critic_moderate_subtract | $261K | 3860 | 38.60 | 6.93 | 6.15 | 3% | 0% | 0% | 0% | 4 | 2 | 100 | 0 | — | 31.06 | 2495 | 12 |
| self-funder | audience_mild | $258K | 3825 | 38.30 | 6.85 | 6.89 | 6% | 0% | 0% | 0% | 4 | 2 | 100 | 0 | — | 31.04 | 3658.50 | 12 |
| self-funder | audience_moderate | $254K | 3735 | 37.35 | 6.79 | 6.88 | 5% | 0% | 0% | 0% | 4 | 2 | 100 | 0 | — | 31.02 | 3687.50 | 12 |
| self-funder | audience_strong | $251K | 3495 | 35 | 6.64 | 6.88 | 4% | 0% | 0% | 0% | 4 | 2 | 100 | 0 | — | 31 | 3386.50 | 12 |
| self-funder | combo_A | $267K | 3760 | 37.60 | 6.85 | 6.59 | 4% | 0% | 0% | 0% | 4 | 2 | 100 | 0 | — | 31.04 | 3144 | 12 |
| self-funder | combo_B | $248K | 3622.50 | 36.25 | 6.79 | 6.38 | 3% | 0% | 0% | 0% | 4 | 2 | 100 | 0 | — | 31.02 | 2768.50 | 12 |
| self-funder | combo_C | $255K | 3660 | 36.60 | 6.85 | 6.07 | 2% | 0% | 0% | 0% | 4 | 2 | 100 | 0 | — | 31.04 | 2191.50 | 12 |
| selective-self-funder | control | $27324K | 21107.50 | 211.10 | 8.45 | 8.37 | 75% | 24% | 73% | 24% | 8 | 8 | 100 | 2 | 112 | 31.06 | 125947.50 | 2 |
| selective-self-funder | ref_no_era_bar | $27252K | 25137.50 | 251.40 | 8.69 | 8.58 | 81% | 38% | 84% | 38% | 8 | 8 | 100 | 2 | 96 | 31.06 | 135155.50 | 2 |
| selective-self-funder | ref_era_bar_0.08 | $27122K | 19685 | 196.80 | 8.37 | 8.28 | 72% | 18% | 75% | 18% | 8 | 8 | 100 | 2 | 112 | 31.06 | 124489.50 | 2 |
| selective-self-funder | critic_mild | $27345K | 18957.50 | 189.60 | 8.47 | 8.02 | 66% | 18% | 55% | 18% | 8 | 8 | 100 | 2 | 112 | 31.06 | 112609 | 2 |
| selective-self-funder | critic_moderate | $27336K | 17337.50 | 173.35 | 8.48 | 7.78 | 60% | 13% | 43% | 13% | 8 | 8 | 100 | 2 | 112 | 31.06 | 103402 | 2 |
| selective-self-funder | critic_strong | $27316K | 15972.50 | 159.75 | 8.49 | 7.39 | 48% | 8% | 20% | 8% | 8 | 8 | 100 | 2 | 112 | 31.06 | 85220 | 2 |
| selective-self-funder | critic_moderate_subtract | $27337K | 17190 | 171.85 | 8.49 | 7.67 | 55% | 13% | 33% | 13% | 8 | 8 | 100 | 2 | 112 | 31.06 | 98268 | 2 |
| selective-self-funder | audience_mild | $27240K | 20527.50 | 205.30 | 8.35 | 8.37 | 72% | 21% | 65% | 21% | 8 | 8 | 100 | 2 | 112 | 31.06 | 120029 | 2 |
| selective-self-funder | audience_moderate | $27215K | 20190 | 201.85 | 8.29 | 8.37 | 70% | 20% | 63% | 20% | 8 | 8 | 100 | 2 | 112 | 31.06 | 118098 | 2 |
| selective-self-funder | audience_strong | $27046K | 19087.50 | 190.85 | 8.11 | 8.38 | 66% | 18% | 55% | 18% | 8 | 8 | 100 | 2 | 112 | 31.06 | 111300.50 | 2 |
| selective-self-funder | combo_A | $27332K | 18695 | 186.90 | 8.38 | 8.03 | 64% | 16% | 48% | 16% | 8 | 8 | 100 | 2 | 112 | 31.06 | 107240 | 2 |
| selective-self-funder | combo_B | $27214K | 16687.50 | 166.85 | 8.31 | 7.78 | 54% | 11% | 30% | 11% | 8 | 8 | 100 | 2 | 112 | 31.06 | 93589.50 | 2 |
| selective-self-funder | combo_C | $27242K | 15777.50 | 157.75 | 8.39 | 7.40 | 45% | 8% | 15% | 8% | 8 | 8 | 100 | 2 | 112 | 31.06 | 78674 | 2 |
| famous-star | control | $26584K | 525 | 5.30 | 6.55 | 6.58 | 0% | 0% | 0% | 0% | 4 | 2 | 94.80 | 0 | — | 31.06 | 8707 | 7 |
| famous-star | ref_no_era_bar | $31668K | 6807.50 | 68.05 | 7.24 | 7.22 | 9% | 0% | 3% | 0% | 4 | 2 | 94.80 | 0 | — | 31.06 | 14475 | 7 |
| famous-star | ref_era_bar_0.08 | $22828K | 225 | 2.30 | 6.37 | 6.41 | 0% | 0% | 0% | 0% | 4 | 2 | 94.80 | 0 | — | 31.06 | 7817.50 | 7 |
| famous-star | critic_mild | $26479K | 525 | 5.30 | 6.55 | 6.29 | 0% | 0% | 0% | 0% | 4 | 2 | 94.80 | 0 | — | 31.06 | 7169 | 7 |
| famous-star | critic_moderate | $26420K | 525 | 5.30 | 6.55 | 6.09 | 0% | 0% | 0% | 0% | 4 | 2 | 94.80 | 0 | — | 31.06 | 6678.50 | 7 |
| famous-star | critic_strong | $26213K | 525 | 5.30 | 6.55 | 5.79 | 0% | 0% | 0% | 0% | 4 | 2 | 94.80 | 0 | — | 31.06 | 5275.50 | 7 |
| famous-star | critic_moderate_subtract | $26189K | 525 | 5.30 | 6.55 | 5.84 | 0% | 0% | 0% | 0% | 4 | 2 | 94.80 | 0 | — | 31.06 | 5567.50 | 7 |
| famous-star | audience_mild | $25806K | 450 | 4.50 | 6.47 | 6.58 | 0% | 0% | 0% | 0% | 4 | 2 | 94.80 | 0 | — | 31.06 | 7855 | 7 |
| famous-star | audience_moderate | $24910K | 375 | 3.80 | 6.42 | 6.58 | 0% | 0% | 0% | 0% | 4 | 2 | 94.80 | 0 | — | 31.06 | 7139 | 7 |
| famous-star | audience_strong | $23715K | 300 | 3 | 6.26 | 6.58 | 0% | 0% | 0% | 0% | 4 | 2 | 94.80 | 0 | — | 31.06 | 5987 | 7 |
| famous-star | combo_A | $25676K | 450 | 4.50 | 6.47 | 6.30 | 0% | 0% | 0% | 0% | 4 | 2 | 94.80 | 0 | — | 31.06 | 6356.50 | 7 |
| famous-star | combo_B | $24697K | 375 | 3.80 | 6.41 | 6.10 | 0% | 0% | 0% | 0% | 4 | 2 | 94.80 | 0 | — | 31.06 | 5231 | 7 |
| famous-star | combo_C | $25328K | 450 | 4.50 | 6.47 | 5.80 | 0% | 0% | 0% | 0% | 4 | 2 | 94.80 | 0 | — | 31.06 | 4519.50 | 7 |

### Paired deltas vs **control** (median of per-seed differences; share of seeds where the variant is higher)

| Strategy | Variant | Δ endCash | Δ prestige | Δ share8plus | Δ meanAudience |
|---|---|---:|---:|---:|---:|
| balanced | ref_no_era_bar | $19K (52%) | 4105 (99%) | 7% (88%) | 0.24 (98%) |
| balanced | ref_era_bar_0.08 | $-34K (43%) | -1280 (15%) | -3% (23%) | -0.08 (16%) |
| balanced | critic_mild | $22K (60%) | -2260 (2%) | -9% (2%) | 0 (45%) |
| balanced | critic_moderate | $16K (53%) | -3882.50 (0%) | -16% (1%) | 0.01 (56%) |
| balanced | critic_strong | $-14K (49%) | -5265 (0%) | -27% (0%) | 0.03 (66%) |
| balanced | critic_moderate_subtract | $-3K (48%) | -4017.50 (0%) | -20% (0%) | 0.02 (64%) |
| balanced | audience_mild | $-41K (13%) | -600 (7%) | -3% (5%) | -0.10 (2%) |
| balanced | audience_moderate | $-77K (15%) | -1025 (9%) | -5% (6%) | -0.18 (1%) |
| balanced | audience_strong | $-252K (10%) | -2100 (2%) | -9% (2%) | -0.36 (0%) |
| balanced | combo_A | $-39K (40%) | -2485 (1%) | -12% (1%) | -0.10 (7%) |
| balanced | combo_B | $-125K (34%) | -4465 (0%) | -21% (0%) | -0.16 (2%) |
| balanced | combo_C | $-82K (39%) | -5322.50 (0%) | -29% (0%) | -0.07 (14%) |
| quality-first | ref_no_era_bar | $191K (78%) | 3765 (100%) | 9% (100%) | 0.25 (100%) |
| quality-first | ref_era_bar_0.08 | $-44K (43%) | -1342.50 (1%) | -3% (7%) | -0.09 (0%) |
| quality-first | critic_mild | $-7K (44%) | -1535 (0%) | -12% (0%) | 0 (8%) |
| quality-first | critic_moderate | $2K (51%) | -2705 (0%) | -20% (0%) | 0 (14%) |
| quality-first | critic_strong | $-20K (42%) | -3942.50 (0%) | -29% (0%) | 0 (15%) |
| quality-first | critic_moderate_subtract | $-14K (45%) | -2930 (0%) | -23% (0%) | 0 (15%) |
| quality-first | audience_mild | $-168K (1%) | -400 (0%) | -6% (0%) | -0.10 (0%) |
| quality-first | audience_moderate | $-297K (0%) | -900 (0%) | -8% (0%) | -0.17 (0%) |
| quality-first | audience_strong | $-788K (0%) | -1805 (0%) | -13% (0%) | -0.36 (0%) |
| quality-first | combo_A | $-205K (3%) | -1650 (0%) | -15% (0%) | -0.10 (0%) |
| quality-first | combo_B | $-367K (2%) | -3395 (0%) | -24% (0%) | -0.17 (0%) |
| quality-first | combo_C | $-249K (8%) | -4112.50 (0%) | -30% (0%) | -0.10 (0%) |
| franchise-builder | ref_no_era_bar | $581K (84%) | 382.50 (80%) | 1% (55%) | 0.21 (84%) |
| franchise-builder | ref_era_bar_0.08 | $-301K (24%) | -125 (23%) | 0% (22%) | -0.07 (22%) |
| franchise-builder | critic_mild | $-171K (23%) | 0 (30%) | 0% (25%) | 0 (33%) |
| franchise-builder | critic_moderate | $-310K (31%) | 0 (47%) | 0% (43%) | 0.04 (51%) |
| franchise-builder | critic_strong | $-449K (33%) | 1850 (66%) | 2% (56%) | 0.33 (72%) |
| franchise-builder | critic_moderate_subtract | $-421K (39%) | 3047.50 (77%) | 8% (72%) | 0.44 (80%) |
| franchise-builder | audience_mild | $-270K (2%) | 0 (4%) | 0% (4%) | -0.09 (3%) |
| franchise-builder | audience_moderate | $-509K (7%) | 0 (19%) | 0% (18%) | -0.15 (13%) |
| franchise-builder | audience_strong | $-1460K (9%) | 0 (46%) | 0% (38%) | -0.28 (18%) |
| franchise-builder | combo_A | $-379K (19%) | 0 (45%) | 0% (39%) | -0.08 (42%) |
| franchise-builder | combo_B | $-521K (25%) | 885 (56%) | 0% (49%) | 0.04 (54%) |
| franchise-builder | combo_C | $-600K (28%) | 2422.50 (84%) | 3% (65%) | 0.35 (86%) |
| repeat-farmer | ref_no_era_bar | $1885K (91%) | 210 (86%) | 1% (52%) | 0.21 (92%) |
| repeat-farmer | ref_era_bar_0.08 | $-1392K (12%) | -125 (14%) | 0% (11%) | -0.07 (9%) |
| repeat-farmer | critic_mild | $-858K (0%) | 0 (0%) | 0% (0%) | 0 (1%) |
| repeat-farmer | critic_moderate | $-1774K (0%) | 0 (0%) | 0% (0%) | 0 (1%) |
| repeat-farmer | critic_strong | $-3254K (0%) | 0 (0%) | 0% (0%) | 0 (1%) |
| repeat-farmer | critic_moderate_subtract | $-2786K (0%) | 0 (0%) | 0% (0%) | 0 (1%) |
| repeat-farmer | audience_mild | $-865K (1%) | 0 (0%) | 0% (0%) | -0.09 (0%) |
| repeat-farmer | audience_moderate | $-1712K (0%) | 0 (0%) | 0% (0%) | -0.14 (0%) |
| repeat-farmer | audience_strong | $-3499K (0%) | 0 (0%) | 0% (0%) | -0.30 (0%) |
| repeat-farmer | combo_A | $-1912K (0%) | 0 (0%) | 0% (0%) | -0.09 (0%) |
| repeat-farmer | combo_B | $-3665K (0%) | 0 (0%) | 0% (0%) | -0.14 (0%) |
| repeat-farmer | combo_C | $-4343K (0%) | 0 (0%) | 0% (0%) | -0.09 (0%) |
| cheap-duds | ref_no_era_bar | $8903K (100%) | 5835 (100%) | 10% (100%) | 0.69 (100%) |
| cheap-duds | ref_era_bar_0.08 | $-3201K (2%) | -150 (9%) | 0% (4%) | -0.18 (2%) |
| cheap-duds | critic_mild | $-616K (14%) | 0 (23%) | 0% (0%) | 0 (37%) |
| cheap-duds | critic_moderate | $-1085K (9%) | 0 (33%) | 0% (0%) | 0 (45%) |
| cheap-duds | critic_strong | $-1881K (5%) | 0 (34%) | 0% (0%) | 0 (48%) |
| cheap-duds | critic_moderate_subtract | $-1786K (3%) | 0 (35%) | 0% (0%) | 0 (47%) |
| cheap-duds | audience_mild | $-508K (7%) | -75 (4%) | 0% (1%) | -0.08 (3%) |
| cheap-duds | audience_moderate | $-937K (4%) | -150 (2%) | 0% (1%) | -0.13 (2%) |
| cheap-duds | audience_strong | $-1905K (1%) | -150 (1%) | 0% (1%) | -0.27 (0%) |
| cheap-duds | combo_A | $-1185K (4%) | -75 (10%) | 0% (0%) | -0.08 (9%) |
| cheap-duds | combo_B | $-2109K (1%) | -150 (3%) | 0% (0%) | -0.13 (4%) |
| cheap-duds | combo_C | $-2479K (2%) | -75 (13%) | 0% (0%) | -0.08 (13%) |
| experimenter | ref_no_era_bar | $266K (76%) | 4237.50 (100%) | 17% (100%) | 0.31 (100%) |
| experimenter | ref_era_bar_0.08 | $-115K (23%) | -1620 (0%) | -4% (1%) | -0.12 (0%) |
| experimenter | critic_mild | $-10K (41%) | -1565 (0%) | -9% (0%) | 0 (8%) |
| experimenter | critic_moderate | $-6K (46%) | -2620 (0%) | -18% (0%) | 0 (16%) |
| experimenter | critic_strong | $-43K (40%) | -3610 (0%) | -25% (0%) | 0 (20%) |
| experimenter | critic_moderate_subtract | $-27K (41%) | -2812.50 (0%) | -21% (0%) | 0 (18%) |
| experimenter | audience_mild | $-196K (1%) | -345 (1%) | -3% (0%) | -0.10 (0%) |
| experimenter | audience_moderate | $-339K (0%) | -1000 (0%) | -4% (0%) | -0.17 (0%) |
| experimenter | audience_strong | $-907K (0%) | -1625 (0%) | -9% (0%) | -0.36 (0%) |
| experimenter | combo_A | $-232K (2%) | -1952.50 (0%) | -12% (0%) | -0.10 (0%) |
| experimenter | combo_B | $-416K (0%) | -3542.50 (0%) | -23% (0%) | -0.17 (0%) |
| experimenter | combo_C | $-302K (6%) | -3960 (0%) | -27% (0%) | -0.10 (0%) |
| self-funder | ref_no_era_bar | $30K (62%) | 6155 (100%) | 19% (100%) | 0.64 (100%) |
| self-funder | ref_era_bar_0.08 | $-3K (48%) | -2907.50 (0%) | -4% (0%) | -0.18 (0%) |
| self-funder | critic_mild | $-5K (39%) | -85 (1%) | -2% (0%) | 0 (17%) |
| self-funder | critic_moderate | $-6K (42%) | -85 (2%) | -3% (0%) | 0 (18%) |
| self-funder | critic_strong | $-11K (37%) | -170 (3%) | -4% (0%) | 0 (26%) |
| self-funder | critic_moderate_subtract | $-11K (41%) | -90 (3%) | -3% (0%) | 0 (22%) |
| self-funder | audience_mild | $-13K (40%) | -150 (1%) | 0% (0%) | -0.09 (0%) |
| self-funder | audience_moderate | $-30K (35%) | -225 (0%) | -1% (0%) | -0.14 (0%) |
| self-funder | audience_strong | $-18K (41%) | -525 (0%) | -2% (1%) | -0.30 (0%) |
| self-funder | combo_A | $-18K (41%) | -235 (0%) | -2% (0%) | -0.09 (0%) |
| self-funder | combo_B | $-32K (34%) | -385 (0%) | -3% (0%) | -0.14 (0%) |
| self-funder | combo_C | $-22K (40%) | -320 (0%) | -4% (0%) | -0.09 (0%) |
| selective-self-funder | ref_no_era_bar | $49K (56%) | 4037.50 (99%) | 6% (89%) | 0.24 (98%) |
| selective-self-funder | ref_era_bar_0.08 | $-89K (38%) | -1335 (11%) | -3% (22%) | -0.08 (18%) |
| selective-self-funder | critic_mild | $23K (61%) | -2145 (1%) | -9% (1%) | 0.01 (52%) |
| selective-self-funder | critic_moderate | $24K (56%) | -3705 (0%) | -15% (0%) | 0.02 (59%) |
| selective-self-funder | critic_strong | $-5K (48%) | -5100 (0%) | -27% (0%) | 0.03 (67%) |
| selective-self-funder | critic_moderate_subtract | $-2K (49%) | -3857.50 (0%) | -19% (0%) | 0.03 (66%) |
| selective-self-funder | audience_mild | $-48K (9%) | -600 (9%) | -3% (4%) | -0.10 (0%) |
| selective-self-funder | audience_moderate | $-83K (13%) | -1025 (6%) | -5% (6%) | -0.18 (0%) |
| selective-self-funder | audience_strong | $-263K (9%) | -2062.50 (2%) | -9% (2%) | -0.36 (0%) |
| selective-self-funder | combo_A | $-32K (41%) | -2392.50 (0%) | -12% (0%) | -0.09 (7%) |
| selective-self-funder | combo_B | $-109K (31%) | -4287.50 (0%) | -21% (0%) | -0.15 (1%) |
| selective-self-funder | combo_C | $-83K (41%) | -5302.50 (0%) | -29% (0%) | -0.06 (17%) |
| famous-star | ref_no_era_bar | $4952K (100%) | 6245 (100%) | 8% (100%) | 0.69 (100%) |
| famous-star | ref_era_bar_0.08 | $-3723K (0%) | -300 (0%) | 0% (1%) | -0.18 (0%) |
| famous-star | critic_mild | $-101K (0%) | 0 (0%) | 0% (0%) | 0 (1%) |
| famous-star | critic_moderate | $-178K (0%) | 0 (0%) | 0% (0%) | 0 (1%) |
| famous-star | critic_strong | $-390K (0%) | 0 (0%) | 0% (0%) | 0 (1%) |
| famous-star | critic_moderate_subtract | $-409K (0%) | 0 (0%) | 0% (0%) | 0 (1%) |
| famous-star | audience_mild | $-565K (0%) | -75 (0%) | 0% (0%) | -0.08 (0%) |
| famous-star | audience_moderate | $-1192K (0%) | -150 (0%) | 0% (0%) | -0.14 (0%) |
| famous-star | audience_strong | $-2816K (0%) | -300 (0%) | 0% (1%) | -0.29 (0%) |
| famous-star | combo_A | $-706K (0%) | -75 (0%) | 0% (0%) | -0.08 (0%) |
| famous-star | combo_B | $-1415K (0%) | -150 (0%) | 0% (0%) | -0.14 (0%) |
| famous-star | combo_C | $-1025K (0%) | -75 (0%) | 0% (0%) | -0.08 (0%) |

### Mean review score (avg of Audience+Critic) by production index

| Strategy | Variant | #1 | #5 | #10 | #20 | #30 | #50 | #75 | #100 |
|---|---|---:|---:|---:|---:|---:|---:|---:|---:|
| balanced | control | 5.62 | 7.39 | 8.27 | 8.67 | 8.73 | 8.75 | 8.51 | 8.06 |
| balanced | ref_no_era_bar | 5.65 | 7.51 | 8.47 | 8.89 | 8.88 | 8.96 | 8.70 | 8.29 |
| balanced | ref_era_bar_0.08 | 5.59 | 7.29 | 8.10 | 8.53 | 8.54 | 8.67 | 8.47 | 8.00 |
| balanced | critic_mild | 5.62 | 7.39 | 8.27 | 8.67 | 8.63 | 8.64 | 8.27 | 7.75 |
| balanced | critic_moderate | 5.62 | 7.39 | 8.27 | 8.50 | 8.58 | 8.46 | 8.01 | 7.62 |
| balanced | critic_strong | 5.62 | 7.39 | 8.27 | 8.46 | 8.54 | 8.15 | 7.69 | 7.27 |
| balanced | critic_moderate_subtract | 5.62 | 7.39 | 8.27 | 8.48 | 8.56 | 8.43 | 7.92 | 7.54 |
| balanced | audience_mild | 5.62 | 7.39 | 8.27 | 8.67 | 8.73 | 8.70 | 8.44 | 7.98 |
| balanced | audience_moderate | 5.62 | 7.39 | 8.27 | 8.67 | 8.73 | 8.69 | 8.40 | 7.86 |
| balanced | audience_strong | 5.62 | 7.39 | 8.27 | 8.67 | 8.62 | 8.65 | 8.25 | 7.75 |
| balanced | combo_A | 5.62 | 7.39 | 8.27 | 8.67 | 8.63 | 8.62 | 8.21 | 7.65 |
| balanced | combo_B | 5.62 | 7.39 | 8.27 | 8.50 | 8.58 | 8.41 | 7.84 | 7.40 |
| balanced | combo_C | 5.62 | 7.39 | 8.27 | 8.46 | 8.54 | 8.11 | 7.59 | 7.18 |
| quality-first | control | 5.59 | 7.34 | 8.20 | 8.69 | 8.78 | 8.72 | 8.16 | 7.68 |
| quality-first | ref_no_era_bar | 5.62 | 7.45 | 8.38 | 8.90 | 8.97 | 8.96 | 8.42 | 7.96 |
| quality-first | ref_era_bar_0.08 | 5.56 | 7.23 | 8.04 | 8.51 | 8.60 | 8.71 | 8.14 | 7.68 |
| quality-first | critic_mild | 5.59 | 7.34 | 8.20 | 8.69 | 8.65 | 8.60 | 7.92 | 7.34 |
| quality-first | critic_moderate | 5.59 | 7.34 | 8.20 | 8.53 | 8.62 | 8.38 | 7.67 | 7.22 |
| quality-first | critic_strong | 5.59 | 7.34 | 8.20 | 8.48 | 8.56 | 8.08 | 7.34 | 6.92 |
| quality-first | critic_moderate_subtract | 5.59 | 7.34 | 8.20 | 8.50 | 8.59 | 8.33 | 7.55 | 7.08 |
| quality-first | audience_mild | 5.59 | 7.34 | 8.20 | 8.69 | 8.78 | 8.66 | 8.10 | 7.56 |
| quality-first | audience_moderate | 5.59 | 7.34 | 8.20 | 8.69 | 8.78 | 8.64 | 8.00 | 7.45 |
| quality-first | audience_strong | 5.59 | 7.34 | 8.20 | 8.69 | 8.65 | 8.60 | 7.91 | 7.33 |
| quality-first | combo_A | 5.59 | 7.34 | 8.20 | 8.69 | 8.65 | 8.54 | 7.85 | 7.23 |
| quality-first | combo_B | 5.59 | 7.34 | 8.20 | 8.53 | 8.62 | 8.30 | 7.50 | 6.99 |
| quality-first | combo_C | 5.59 | 7.34 | 8.20 | 8.48 | 8.56 | 8.01 | 7.28 | 6.81 |
| franchise-builder | control | 5.60 | 7.37 | 7.72 | 7.04 | 6.85 | 6.94 | 6.84 | 6.77 |
| franchise-builder | ref_no_era_bar | 5.63 | 7.47 | 7.87 | 7.18 | 6.97 | 7.06 | 6.99 | 6.98 |
| franchise-builder | ref_era_bar_0.08 | 5.57 | 7.27 | 7.58 | 6.92 | 6.90 | 6.96 | 6.89 | 6.84 |
| franchise-builder | critic_mild | 5.60 | 7.37 | 7.72 | 7.04 | 6.89 | 6.86 | 6.73 | 6.70 |
| franchise-builder | critic_moderate | 5.60 | 7.37 | 7.72 | 6.90 | 6.88 | 6.83 | 6.82 | 6.81 |
| franchise-builder | critic_strong | 5.60 | 7.37 | 7.72 | 6.88 | 6.84 | 6.58 | 6.77 | 6.78 |
| franchise-builder | critic_moderate_subtract | 5.60 | 7.37 | 7.72 | 6.84 | 6.89 | 7.04 | 7.20 | 7.15 |
| franchise-builder | audience_mild | 5.60 | 7.37 | 7.72 | 7.04 | 6.85 | 6.91 | 6.80 | 6.70 |
| franchise-builder | audience_moderate | 5.60 | 7.37 | 7.72 | 7.04 | 6.85 | 6.90 | 6.83 | 6.70 |
| franchise-builder | audience_strong | 5.60 | 7.37 | 7.72 | 7.04 | 6.88 | 6.87 | 6.71 | 6.98 |
| franchise-builder | combo_A | 5.60 | 7.37 | 7.72 | 7.04 | 6.89 | 6.85 | 6.75 | 6.82 |
| franchise-builder | combo_B | 5.60 | 7.37 | 7.72 | 6.90 | 6.88 | 6.80 | 6.84 | 6.80 |
| franchise-builder | combo_C | 5.60 | 7.37 | 7.72 | 6.88 | 6.84 | 6.77 | 6.90 | 6.87 |
| repeat-farmer | control | 5.61 | 7.39 | 7.77 | 6.60 | 6.68 | 6.74 | 6.70 | 6.71 |
| repeat-farmer | ref_no_era_bar | 5.64 | 7.51 | 7.86 | 6.75 | 6.83 | 6.94 | 6.94 | 6.95 |
| repeat-farmer | ref_era_bar_0.08 | 5.58 | 7.27 | 7.71 | 6.50 | 6.53 | 6.70 | 6.71 | 6.73 |
| repeat-farmer | critic_mild | 5.61 | 7.39 | 7.77 | 6.60 | 6.58 | 6.64 | 6.50 | 6.41 |
| repeat-farmer | critic_moderate | 5.61 | 7.39 | 7.77 | 6.47 | 6.54 | 6.47 | 6.30 | 6.31 |
| repeat-farmer | critic_strong | 5.61 | 7.39 | 7.77 | 6.44 | 6.51 | 6.24 | 6.03 | 6.04 |
| repeat-farmer | critic_moderate_subtract | 5.61 | 7.39 | 7.77 | 6.40 | 6.48 | 6.34 | 6.10 | 6.11 |
| repeat-farmer | audience_mild | 5.61 | 7.39 | 7.77 | 6.60 | 6.68 | 6.69 | 6.65 | 6.61 |
| repeat-farmer | audience_moderate | 5.61 | 7.39 | 7.77 | 6.60 | 6.68 | 6.67 | 6.56 | 6.51 |
| repeat-farmer | audience_strong | 5.61 | 7.39 | 7.77 | 6.60 | 6.58 | 6.64 | 6.50 | 6.41 |
| repeat-farmer | combo_A | 5.61 | 7.39 | 7.77 | 6.60 | 6.58 | 6.59 | 6.45 | 6.31 |
| repeat-farmer | combo_B | 5.61 | 7.39 | 7.77 | 6.47 | 6.54 | 6.40 | 6.16 | 6.11 |
| repeat-farmer | combo_C | 5.61 | 7.39 | 7.77 | 6.44 | 6.51 | 6.19 | 5.98 | 5.94 |
| cheap-duds | control | 5.47 | 5.81 | 6.12 | 6.41 | 6.57 | 6.49 | 6.21 | 6.04 |
| cheap-duds | ref_no_era_bar | 5.50 | 5.95 | 6.38 | 6.79 | 7.05 | 7.20 | 7.07 | 6.75 |
| cheap-duds | ref_era_bar_0.08 | 5.44 | 5.69 | 5.89 | 6.05 | 6.09 | 6.29 | 6.19 | 5.98 |
| cheap-duds | critic_mild | 5.47 | 5.81 | 6.12 | 6.41 | 6.47 | 6.38 | 5.98 | 5.76 |
| cheap-duds | critic_moderate | 5.47 | 5.81 | 6.12 | 6.28 | 6.45 | 6.21 | 5.83 | 5.61 |
| cheap-duds | critic_strong | 5.47 | 5.81 | 6.12 | 6.25 | 6.42 | 5.99 | 5.65 | 5.38 |
| cheap-duds | critic_moderate_subtract | 5.47 | 5.81 | 6.12 | 6.21 | 6.38 | 6.05 | 5.68 | 5.41 |
| cheap-duds | audience_mild | 5.47 | 5.81 | 6.12 | 6.41 | 6.57 | 6.44 | 6.16 | 5.85 |
| cheap-duds | audience_moderate | 5.47 | 5.81 | 6.12 | 6.41 | 6.57 | 6.43 | 6.11 | 5.76 |
| cheap-duds | audience_strong | 5.47 | 5.81 | 6.12 | 6.41 | 6.47 | 6.40 | 6.02 | 5.67 |
| cheap-duds | combo_A | 5.47 | 5.81 | 6.12 | 6.41 | 6.47 | 6.33 | 5.95 | 5.73 |
| cheap-duds | combo_B | 5.47 | 5.81 | 6.12 | 6.28 | 6.45 | 6.17 | 5.65 | 5.51 |
| cheap-duds | combo_C | 5.47 | 5.81 | 6.12 | 6.25 | 6.42 | 5.90 | 5.54 | 5.32 |
| experimenter | control | 5.59 | 7.23 | 8.02 | 8.61 | 8.76 | 8.47 | 7.99 | 7.62 |
| experimenter | ref_no_era_bar | 5.62 | 7.37 | 8.28 | 8.76 | 8.96 | 8.75 | 8.30 | 7.89 |
| experimenter | ref_era_bar_0.08 | 5.57 | 7.11 | 7.67 | 8.41 | 8.50 | 8.36 | 7.97 | 7.61 |
| experimenter | critic_mild | 5.59 | 7.23 | 8.02 | 8.61 | 8.64 | 8.34 | 7.75 | 7.30 |
| experimenter | critic_moderate | 5.59 | 7.23 | 8.02 | 8.45 | 8.61 | 8.13 | 7.51 | 7.18 |
| experimenter | critic_strong | 5.59 | 7.23 | 8.02 | 8.40 | 8.57 | 7.83 | 7.19 | 6.87 |
| experimenter | critic_moderate_subtract | 5.59 | 7.23 | 8.02 | 8.42 | 8.58 | 8.07 | 7.39 | 7.04 |
| experimenter | audience_mild | 5.59 | 7.23 | 8.02 | 8.61 | 8.76 | 8.41 | 7.93 | 7.51 |
| experimenter | audience_moderate | 5.59 | 7.23 | 8.02 | 8.61 | 8.76 | 8.39 | 7.83 | 7.41 |
| experimenter | audience_strong | 5.59 | 7.23 | 8.02 | 8.61 | 8.64 | 8.34 | 7.75 | 7.28 |
| experimenter | combo_A | 5.59 | 7.23 | 8.02 | 8.61 | 8.64 | 8.28 | 7.69 | 7.17 |
| experimenter | combo_B | 5.59 | 7.23 | 8.02 | 8.45 | 8.61 | 8.05 | 7.35 | 6.96 |
| experimenter | combo_C | 5.59 | 7.23 | 8.02 | 8.40 | 8.57 | 7.77 | 7.13 | 6.75 |
| self-funder | control | 5.48 | 6.12 | 6.75 | 7.43 | 7.58 | 7.26 | 6.61 | 6.24 |
| self-funder | ref_no_era_bar | 5.51 | 6.25 | 7.06 | 7.87 | 8.08 | 7.97 | 7.43 | 7.01 |
| self-funder | ref_era_bar_0.08 | 5.45 | 5.99 | 6.49 | 7.03 | 7.11 | 7.03 | 6.57 | 6.23 |
| self-funder | critic_mild | 5.48 | 6.12 | 6.75 | 7.43 | 7.46 | 7.15 | 6.41 | 5.96 |
| self-funder | critic_moderate | 5.48 | 6.12 | 6.75 | 7.28 | 7.43 | 6.96 | 6.19 | 5.86 |
| self-funder | critic_strong | 5.48 | 6.12 | 6.75 | 7.24 | 7.40 | 6.71 | 5.93 | 5.62 |
| self-funder | critic_moderate_subtract | 5.48 | 6.12 | 6.75 | 7.23 | 7.37 | 6.85 | 5.99 | 5.63 |
| self-funder | audience_mild | 5.48 | 6.12 | 6.75 | 7.43 | 7.58 | 7.20 | 6.55 | 6.15 |
| self-funder | audience_moderate | 5.48 | 6.12 | 6.75 | 7.43 | 7.58 | 7.18 | 6.46 | 6.05 |
| self-funder | audience_strong | 5.48 | 6.12 | 6.75 | 7.43 | 7.45 | 7.15 | 6.39 | 5.93 |
| self-funder | combo_A | 5.48 | 6.12 | 6.75 | 7.43 | 7.46 | 7.10 | 6.36 | 5.86 |
| self-funder | combo_B | 5.48 | 6.12 | 6.75 | 7.28 | 7.43 | 6.90 | 6.07 | 5.67 |
| self-funder | combo_C | 5.48 | 6.12 | 6.75 | 7.24 | 7.40 | 6.66 | 5.88 | 5.51 |
| selective-self-funder | control | 5.63 | 7.35 | 8.30 | 8.74 | 8.74 | 8.68 | 8.47 | 8.05 |
| selective-self-funder | ref_no_era_bar | 5.66 | 7.46 | 8.49 | 8.87 | 8.93 | 8.94 | 8.73 | 8.34 |
| selective-self-funder | ref_era_bar_0.08 | 5.60 | 7.24 | 8.12 | 8.50 | 8.54 | 8.59 | 8.44 | 8.06 |
| selective-self-funder | critic_mild | 5.63 | 7.35 | 8.30 | 8.74 | 8.62 | 8.57 | 8.24 | 7.74 |
| selective-self-funder | critic_moderate | 5.63 | 7.35 | 8.30 | 8.58 | 8.57 | 8.46 | 7.99 | 7.63 |
| selective-self-funder | critic_strong | 5.63 | 7.35 | 8.30 | 8.54 | 8.53 | 8.15 | 7.66 | 7.31 |
| selective-self-funder | critic_moderate_subtract | 5.63 | 7.35 | 8.30 | 8.55 | 8.56 | 8.44 | 7.91 | 7.57 |
| selective-self-funder | audience_mild | 5.63 | 7.35 | 8.30 | 8.74 | 8.74 | 8.62 | 8.40 | 7.95 |
| selective-self-funder | audience_moderate | 5.63 | 7.35 | 8.30 | 8.74 | 8.74 | 8.59 | 8.30 | 7.82 |
| selective-self-funder | audience_strong | 5.63 | 7.35 | 8.30 | 8.74 | 8.61 | 8.58 | 8.24 | 7.74 |
| selective-self-funder | combo_A | 5.63 | 7.35 | 8.30 | 8.74 | 8.62 | 8.58 | 8.16 | 7.64 |
| selective-self-funder | combo_B | 5.63 | 7.35 | 8.30 | 8.58 | 8.57 | 8.40 | 7.82 | 7.43 |
| selective-self-funder | combo_C | 5.63 | 7.35 | 8.30 | 8.54 | 8.53 | 8.09 | 7.61 | 7.19 |
| famous-star | control | 5.57 | 5.98 | 6.39 | 6.79 | 6.97 | 6.89 | 6.40 | 6.15 |
| famous-star | ref_no_era_bar | 5.60 | 6.11 | 6.64 | 7.25 | 7.51 | 7.66 | 7.29 | 6.97 |
| famous-star | ref_era_bar_0.08 | 5.54 | 5.85 | 6.16 | 6.43 | 6.46 | 6.64 | 6.42 | 6.15 |
| famous-star | critic_mild | 5.57 | 5.98 | 6.39 | 6.79 | 6.87 | 6.79 | 6.20 | 5.88 |
| famous-star | critic_moderate | 5.57 | 5.98 | 6.39 | 6.66 | 6.83 | 6.61 | 6.01 | 5.78 |
| famous-star | critic_strong | 5.57 | 5.98 | 6.39 | 6.62 | 6.80 | 6.37 | 5.76 | 5.54 |
| famous-star | critic_moderate_subtract | 5.57 | 5.98 | 6.39 | 6.59 | 6.77 | 6.49 | 5.80 | 5.55 |
| famous-star | audience_mild | 5.57 | 5.98 | 6.39 | 6.79 | 6.97 | 6.84 | 6.35 | 6.06 |
| famous-star | audience_moderate | 5.57 | 5.98 | 6.39 | 6.79 | 6.97 | 6.81 | 6.27 | 5.96 |
| famous-star | audience_strong | 5.57 | 5.98 | 6.39 | 6.79 | 6.86 | 6.78 | 6.20 | 5.87 |
| famous-star | combo_A | 5.57 | 5.98 | 6.39 | 6.79 | 6.87 | 6.73 | 6.16 | 5.78 |
| famous-star | combo_B | 5.57 | 5.98 | 6.39 | 6.66 | 6.83 | 6.53 | 5.88 | 5.59 |
| famous-star | combo_C | 5.57 | 5.98 | 6.39 | 6.62 | 6.80 | 6.31 | 5.71 | 5.45 |

### Great films — all strategies pooled, by release window

Denominators are films in that window. HoF = average of Audience and Critic ≥ hofThreshold (9.0). `≥9` is inclusive, `>9` strict.

| Strategy | Config | Window | Films (n) | Avg Aud | Avg Crit | HoF n (%) | Avg ≥9 n (%) | Avg >9 n (%) | Aud ≥9 n (%) | Crit ≥9 n (%) | 8+ n (%) | Careers with 0 HoF | HoF/career p10/p50/p90 | Best/career p10/p50/p90/p99 | Best combined movie | Prestige median |
|---|---|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---|---|---|---:|
| ALL | control | 1-5 | 13500 | 6.21 | 6.26 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 238 (1.8%) | 100% of 2700 | 0/0/0 | 6.14/7.29/7.94/8.4 | 8.70 "Midnight Protocol" (A8.64/C8.76; balanced seed 87 #5, yr 1.5, critic gen 0) |  |
| ALL | control | 6-20 | 40500 | 7.53 | 7.50 | 2952 (7.3%) | 2952 (7.3%) | 2836 (7.0%) | 3903 (9.6%) | 4138 (10.2%) | 13817 (34.1%) | 59% of 2700 | 0/0/4 | 7.19/8.36/9.61/10 | 10.00 "Dead Frequency" (A10/C10; experimenter seed 10 #18, yr 5.5, critic gen 0) |  |
| ALL | control | 21-50 | 81000 | 7.75 | 7.71 | 13789 (17.0%) | 13789 (17.0%) | 13330 (16.5%) | 16913 (20.9%) | 15777 (19.5%) | 33802 (41.7%) | 53% of 2700 | 0/0/14 | 6.95/8.68/9.9/10 | 10.00 "Dead Protocol" (A10/C10; balanced seed 6 #32, yr 9.8, critic gen 0) |  |
| ALL | control | 51-100 | 135000 | 7.34 | 7.29 | 6894 (5.1%) | 6894 (5.1%) | 6485 (4.8%) | 12396 (9.2%) | 11653 (8.6%) | 40250 (29.8%) | 65% of 2700 | 0/0/9 | 6.9/8.17/9.84/10 | 10.00 "Wild Night" (A10/C10; balanced seed 7 #59, yr 18.1, critic gen 0) |  |
| ALL | control | all | 270000 | 7.43 | 7.39 | 23635 (8.8%) | 23635 (8.8%) | 22651 (8.4%) | 33212 (12.3%) | 31568 (11.7%) | 88107 (32.6%) | 52% of 2700 | 0/0/25 | 7.75/8.81/9.97/10 | 10.00 "Dead Protocol" (A10/C10; balanced seed 6 #32, yr 9.8, critic gen 0) |  |
| ALL | ref_no_era_bar | 1-5 | 13500 | 6.29 | 6.34 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 7 (0.1%) | 399 (3.0%) | 100% of 2700 | 0/0/0 | 6.24/7.4/8.06/8.52 | 8.82 "Midnight Protocol" (A8.76/C8.88; balanced seed 87 #5, yr 1.5, critic gen 0) |  |
| ALL | ref_no_era_bar | 6-20 | 40500 | 7.75 | 7.71 | 4651 (11.5%) | 4651 (11.5%) | 4515 (11.2%) | 5940 (14.7%) | 6239 (15.4%) | 16497 (40.7%) | 55% of 2700 | 0/0/5 | 7.56/8.61/9.74/10 | 10.00 "Wild Frequency" (A10/C10; experimenter seed 7 #16, yr 4.9, critic gen 0) |  |
| ALL | ref_no_era_bar | 21-50 | 81000 | 8.09 | 8.02 | 20119 (24.8%) | 20119 (24.8%) | 19656 (24.3%) | 22024 (27.2%) | 19708 (24.3%) | 41257 (50.9%) | 44% of 2700 | 0/2/19 | 7.15/9.25/10/10 | 10.00 "Broken Code" (A10/C10; quality-first seed 2 #39, yr 12.0, critic gen 0) |  |
| ALL | ref_no_era_bar | 51-100 | 135000 | 7.81 | 7.71 | 14680 (10.9%) | 14680 (10.9%) | 14347 (10.6%) | 23031 (17.1%) | 20597 (15.3%) | 52877 (39.2%) | 50% of 2700 | 0/1/18 | 7.07/9/10/10 | 10.00 "Broken Protocol" (A10/C10; balanced seed 1 #57, yr 17.5, critic gen 0) |  |
| ALL | ref_no_era_bar | all | 270000 | 7.81 | 7.73 | 39450 (14.6%) | 39450 (14.6%) | 38518 (14.3%) | 50995 (18.9%) | 46551 (17.2%) | 111030 (41.1%) | 40% of 2700 | 0/2/39 | 8.13/9.3/10/10 | 10.00 "Broken Protocol" (A10/C10; balanced seed 1 #57, yr 17.5, critic gen 0) |  |
| ALL | ref_era_bar_0.08 | 1-5 | 13500 | 6.13 | 6.18 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 161 (1.2%) | 100% of 2700 | 0/0/0 | 6.05/7.19/7.84/8.29 | 8.58 "Midnight Protocol" (A8.52/C8.64; balanced seed 87 #5, yr 1.5, critic gen 0) |  |
| ALL | ref_era_bar_0.08 | 6-20 | 40500 | 7.31 | 7.30 | 1726 (4.3%) | 1726 (4.3%) | 1655 (4.1%) | 2747 (6.8%) | 2826 (7.0%) | 11388 (28.1%) | 67% of 2700 | 0/0/2 | 6.85/8.19/9.44/9.95 | 10.00 "Hollow Frequency" (A10/C10; quality-first seed 21 #20, yr 6.2, critic gen 0) |  |
| ALL | ref_era_bar_0.08 | 21-50 | 81000 | 7.52 | 7.50 | 9368 (11.6%) | 9368 (11.6%) | 9146 (11.3%) | 12132 (15.0%) | 12091 (14.9%) | 30774 (38.0%) | 54% of 2700 | 0/0/10 | 6.88/8.32/9.81/10 | 10.00 "Midnight Code" (A10/C10; selective-self-funder seed 7 #42, yr 12.9, critic gen 0) |  |
| ALL | ref_era_bar_0.08 | 51-100 | 135000 | 7.32 | 7.28 | 6152 (4.6%) | 6152 (4.6%) | 5934 (4.4%) | 12112 (9.0%) | 11688 (8.7%) | 40034 (29.6%) | 66% of 2700 | 0/0/9 | 6.9/8.09/9.82/10 | 10.00 "Lost Edge" (A10/C10; balanced seed 6 #88, yr 27.1, critic gen 0) |  |
| ALL | ref_era_bar_0.08 | all | 270000 | 7.32 | 7.29 | 17246 (6.4%) | 17246 (6.4%) | 16735 (6.2%) | 26991 (10.0%) | 26605 (9.8%) | 82357 (30.5%) | 53% of 2700 | 0/0/20 | 7.54/8.57/9.89/10 | 10.00 "Lost Edge" (A10/C10; balanced seed 6 #88, yr 27.1, critic gen 0) |  |
| ALL | critic_mild | 1-5 | 13500 | 6.21 | 6.26 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 238 (1.8%) | 100% of 2700 | 0/0/0 | 6.14/7.29/7.94/8.4 | 8.70 "Midnight Protocol" (A8.64/C8.76; balanced seed 87 #5, yr 1.5, critic gen 0) |  |
| ALL | critic_mild | 6-20 | 40500 | 7.53 | 7.50 | 2952 (7.3%) | 2952 (7.3%) | 2836 (7.0%) | 3903 (9.6%) | 4138 (10.2%) | 13817 (34.1%) | 59% of 2700 | 0/0/4 | 7.19/8.36/9.61/10 | 10.00 "Dead Frequency" (A10/C10; experimenter seed 10 #18, yr 5.5, critic gen 0) |  |
| ALL | critic_mild | 21-50 | 81000 | 7.75 | 7.52 | 11295 (13.9%) | 11295 (13.9%) | 11039 (13.6%) | 16973 (20.9%) | 10732 (13.3%) | 32454 (40.1%) | 53% of 2700 | 0/0/12 | 6.86/8.59/9.84/10 | 10.00 "Dead Protocol" (A10/C10; balanced seed 6 #32, yr 9.8, critic gen 1) |  |
| ALL | critic_mild | 51-100 | 135000 | 7.36 | 6.78 | 3735 (2.8%) | 3735 (2.8%) | 3604 (2.7%) | 12898 (9.6%) | 3488 (2.6%) | 29573 (21.9%) | 67% of 2700 | 0/0/5 | 6.82/8.11/9.59/9.99 | 10.00 "Hollow Protocol" (A10/C10; selective-self-funder seed 30 #55, yr 16.9, critic gen 2) |  |
| ALL | critic_mild | all | 270000 | 7.44 | 7.08 | 17982 (6.7%) | 17982 (6.7%) | 17479 (6.5%) | 33774 (12.5%) | 18358 (6.8%) | 76082 (28.2%) | 52% of 2700 | 0/0/19 | 7.65/8.82/9.87/10 | 10.00 "Dead Protocol" (A10/C10; balanced seed 6 #32, yr 9.8, critic gen 1) |  |
| ALL | critic_moderate | 1-5 | 13500 | 6.21 | 6.26 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 238 (1.8%) | 100% of 2700 | 0/0/0 | 6.14/7.29/7.94/8.4 | 8.70 "Midnight Protocol" (A8.64/C8.76; balanced seed 87 #5, yr 1.5, critic gen 0) |  |
| ALL | critic_moderate | 6-20 | 40500 | 7.53 | 7.48 | 2839 (7.0%) | 2839 (7.0%) | 2733 (6.8%) | 3903 (9.6%) | 3905 (9.6%) | 13741 (33.9%) | 60% of 2700 | 0/0/3 | 7.19/8.36/9.59/10 | 10.00 "Dead Frequency" (A10/C10; experimenter seed 10 #18, yr 5.5, critic gen 0) |  |
| ALL | critic_moderate | 21-50 | 81000 | 7.76 | 7.30 | 8384 (10.3%) | 8384 (10.3%) | 8071 (10.0%) | 17113 (21.1%) | 7432 (9.2%) | 30421 (37.6%) | 53% of 2700 | 0/0/9 | 6.79/8.55/9.79/10 | 10.00 "Dead Protocol" (A10/C10; balanced seed 6 #32, yr 9.8, critic gen 1) |  |
| ALL | critic_moderate | 51-100 | 135000 | 7.38 | 6.50 | 2306 (1.7%) | 2306 (1.7%) | 2271 (1.7%) | 13326 (9.9%) | 1432 (1.1%) | 23068 (17.1%) | 69% of 2700 | 0/0/3 | 6.65/8.15/9.49/9.78 | 9.91 "Red Run" (A10/C9.82; selective-self-funder seed 74 #51, yr 15.7, critic gen 2) |  |
| ALL | critic_moderate | all | 270000 | 7.46 | 6.87 | 13529 (5.0%) | 13529 (5.0%) | 13075 (4.8%) | 34342 (12.7%) | 12769 (4.7%) | 67468 (25.0%) | 51% of 2700 | 0/0/14 | 7.57/8.87/9.82/10 | 10.00 "Dead Protocol" (A10/C10; balanced seed 6 #32, yr 9.8, critic gen 1) |  |
| ALL | critic_strong | 1-5 | 13500 | 6.21 | 6.26 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 238 (1.8%) | 100% of 2700 | 0/0/0 | 6.14/7.29/7.94/8.4 | 8.70 "Midnight Protocol" (A8.64/C8.76; balanced seed 87 #5, yr 1.5, critic gen 0) |  |
| ALL | critic_strong | 6-20 | 40500 | 7.53 | 7.40 | 2391 (5.9%) | 2391 (5.9%) | 2298 (5.7%) | 3903 (9.6%) | 3168 (7.8%) | 13382 (33.0%) | 63% of 2700 | 0/0/3 | 7.13/8.34/9.53/9.93 | 10.00 "Silver Edge" (A10/C10; selective-self-funder seed 46 #12, yr 3.7, critic gen 0) |  |
| ALL | critic_strong | 21-50 | 81000 | 7.77 | 7.09 | 5996 (7.4%) | 5996 (7.4%) | 5711 (7.0%) | 17200 (21.2%) | 4555 (5.6%) | 28425 (35.1%) | 54% of 2700 | 0/0/7 | 6.73/8.5/9.68/10 | 10.00 "Dead Protocol" (A10/C10; balanced seed 6 #32, yr 9.8, critic gen 1) |  |
| ALL | critic_strong | 51-100 | 135000 | 7.42 | 5.99 | 714 (0.5%) | 714 (0.5%) | 680 (0.5%) | 13885 (10.3%) | 324 (0.2%) | 13434 (9.9%) | 83% of 2700 | 0/0/1 | 6.46/8.1/9.11/9.52 | 9.54 "Dead Night" (A10/C9.08; balanced seed 221 #51, yr 15.7, critic gen 3) |  |
| ALL | critic_strong | all | 270000 | 7.48 | 6.55 | 9101 (3.4%) | 9101 (3.4%) | 8689 (3.2%) | 34988 (13.0%) | 8047 (3.0%) | 55479 (20.6%) | 53% of 2700 | 0/0/10 | 7.49/8.82/9.75/10 | 10.00 "Dead Protocol" (A10/C10; balanced seed 6 #32, yr 9.8, critic gen 1) |  |
| ALL | critic_moderate_subtract | 1-5 | 13500 | 6.21 | 6.26 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 238 (1.8%) | 100% of 2700 | 0/0/0 | 6.14/7.29/7.94/8.4 | 8.70 "Midnight Protocol" (A8.64/C8.76; balanced seed 87 #5, yr 1.5, critic gen 0) |  |
| ALL | critic_moderate_subtract | 6-20 | 40500 | 7.53 | 7.47 | 2831 (7.0%) | 2831 (7.0%) | 2723 (6.7%) | 3903 (9.6%) | 3879 (9.6%) | 13723 (33.9%) | 60% of 2700 | 0/0/3 | 7.18/8.35/9.59/10 | 10.00 "Dead Frequency" (A10/C10; experimenter seed 10 #18, yr 5.5, critic gen 0) |  |
| ALL | critic_moderate_subtract | 21-50 | 81000 | 7.77 | 7.18 | 8118 (10.0%) | 8118 (10.0%) | 7793 (9.6%) | 17345 (21.4%) | 7157 (8.8%) | 29803 (36.8%) | 53% of 2700 | 0/0/9 | 6.73/8.66/9.8/10 | 10.00 "Dead Protocol" (A10/C10; balanced seed 6 #32, yr 9.8, critic gen 1) |  |
| ALL | critic_moderate_subtract | 51-100 | 135000 | 7.43 | 6.25 | 2504 (1.9%) | 2504 (1.9%) | 2376 (1.8%) | 14434 (10.7%) | 1533 (1.1%) | 20558 (15.2%) | 67% of 2700 | 0/0/3 | 6.64/8.4/9.51/9.81 | 9.94 "Dead Night" (A10/C9.88; balanced seed 221 #51, yr 15.7, critic gen 2) |  |
| ALL | critic_moderate_subtract | all | 270000 | 7.49 | 6.71 | 13453 (5.0%) | 13453 (5.0%) | 12892 (4.8%) | 35682 (13.2%) | 12569 (4.7%) | 64322 (23.8%) | 49% of 2700 | 0/1/14 | 7.55/9.11/9.82/10 | 10.00 "Dead Protocol" (A10/C10; balanced seed 6 #32, yr 9.8, critic gen 1) |  |
| ALL | audience_mild | 1-5 | 13500 | 6.21 | 6.26 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 238 (1.8%) | 100% of 2700 | 0/0/0 | 6.14/7.29/7.94/8.4 | 8.70 "Midnight Protocol" (A8.64/C8.76; balanced seed 87 #5, yr 1.5, critic gen 0) |  |
| ALL | audience_mild | 6-20 | 40500 | 7.53 | 7.50 | 2952 (7.3%) | 2952 (7.3%) | 2836 (7.0%) | 3903 (9.6%) | 4138 (10.2%) | 13817 (34.1%) | 59% of 2700 | 0/0/4 | 7.19/8.36/9.61/10 | 10.00 "Dead Frequency" (A10/C10; experimenter seed 10 #18, yr 5.5, critic gen 0) |  |
| ALL | audience_mild | 21-50 | 81000 | 7.70 | 7.71 | 12717 (15.7%) | 12717 (15.7%) | 12414 (15.3%) | 16021 (19.8%) | 15785 (19.5%) | 33555 (41.4%) | 53% of 2700 | 0/0/13 | 6.93/8.69/9.9/10 | 10.00 "Dead Protocol" (A10/C10; balanced seed 6 #32, yr 9.8, critic gen 0) |  |
| ALL | audience_mild | 51-100 | 135000 | 7.18 | 7.29 | 5548 (4.1%) | 5548 (4.1%) | 5494 (4.1%) | 9570 (7.1%) | 11655 (8.6%) | 35749 (26.5%) | 66% of 2700 | 0/0/8 | 6.88/8.12/9.77/10 | 10.00 "Wild Night" (A10/C10; balanced seed 7 #59, yr 18.1, critic gen 0) |  |
| ALL | audience_mild | all | 270000 | 7.34 | 7.39 | 21217 (7.9%) | 21217 (7.9%) | 20744 (7.7%) | 29494 (10.9%) | 31578 (11.7%) | 83359 (30.9%) | 52% of 2700 | 0/0/22 | 7.72/8.81/9.94/10 | 10.00 "Dead Protocol" (A10/C10; balanced seed 6 #32, yr 9.8, critic gen 0) |  |
| ALL | audience_moderate | 1-5 | 13500 | 6.21 | 6.26 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 238 (1.8%) | 100% of 2700 | 0/0/0 | 6.14/7.29/7.94/8.4 | 8.70 "Midnight Protocol" (A8.64/C8.76; balanced seed 87 #5, yr 1.5, critic gen 0) |  |
| ALL | audience_moderate | 6-20 | 40500 | 7.53 | 7.50 | 2952 (7.3%) | 2952 (7.3%) | 2836 (7.0%) | 3903 (9.6%) | 4138 (10.2%) | 13817 (34.1%) | 59% of 2700 | 0/0/4 | 7.19/8.36/9.61/10 | 10.00 "Dead Frequency" (A10/C10; experimenter seed 10 #18, yr 5.5, critic gen 0) |  |
| ALL | audience_moderate | 21-50 | 81000 | 7.66 | 7.71 | 12177 (15.0%) | 12177 (15.0%) | 11973 (14.8%) | 13830 (17.1%) | 15809 (19.5%) | 33256 (41.1%) | 53% of 2700 | 0/0/12 | 6.9/8.68/9.9/10 | 10.00 "Dead Protocol" (A10/C10; balanced seed 6 #32, yr 9.8, critic gen 0) |  |
| ALL | audience_moderate | 51-100 | 135000 | 7.09 | 7.30 | 5246 (3.9%) | 5246 (3.9%) | 5079 (3.8%) | 7278 (5.4%) | 11817 (8.8%) | 34585 (25.6%) | 65% of 2700 | 0/0/7 | 6.87/8.19/9.74/10 | 10.00 "Wild Night" (A10/C10; balanced seed 7 #59, yr 18.1, critic gen 0) |  |
| ALL | audience_moderate | all | 270000 | 7.28 | 7.40 | 20375 (7.5%) | 20375 (7.5%) | 19888 (7.4%) | 25011 (9.3%) | 31764 (11.8%) | 81896 (30.3%) | 51% of 2700 | 0/0/21 | 7.7/8.84/9.93/10 | 10.00 "Dead Protocol" (A10/C10; balanced seed 6 #32, yr 9.8, critic gen 0) |  |
| ALL | audience_strong | 1-5 | 13500 | 6.21 | 6.26 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 238 (1.8%) | 100% of 2700 | 0/0/0 | 6.14/7.29/7.94/8.4 | 8.70 "Midnight Protocol" (A8.64/C8.76; balanced seed 87 #5, yr 1.5, critic gen 0) |  |
| ALL | audience_strong | 6-20 | 40500 | 7.53 | 7.50 | 2952 (7.3%) | 2952 (7.3%) | 2836 (7.0%) | 3903 (9.6%) | 4138 (10.2%) | 13817 (34.1%) | 59% of 2700 | 0/0/4 | 7.19/8.36/9.61/10 | 10.00 "Dead Frequency" (A10/C10; experimenter seed 10 #18, yr 5.5, critic gen 0) |  |
| ALL | audience_strong | 21-50 | 81000 | 7.56 | 7.71 | 11237 (13.9%) | 11237 (13.9%) | 10936 (13.5%) | 10541 (13.0%) | 15736 (19.4%) | 32410 (40.0%) | 53% of 2700 | 0/0/12 | 6.86/8.61/9.9/10 | 10.00 "Dead Protocol" (A10/C10; balanced seed 6 #32, yr 9.8, critic gen 0) |  |
| ALL | audience_strong | 51-100 | 135000 | 6.83 | 7.32 | 3840 (2.8%) | 3840 (2.8%) | 3714 (2.8%) | 3850 (2.9%) | 12127 (9.0%) | 29911 (22.2%) | 66% of 2700 | 0/0/5 | 6.83/8.34/9.57/9.94 | 10.00 "Red Run" (A10/C10; selective-self-funder seed 74 #51, yr 15.7, critic gen 0) |  |
| ALL | audience_strong | all | 270000 | 7.13 | 7.41 | 18029 (6.7%) | 18029 (6.7%) | 17486 (6.5%) | 18294 (6.8%) | 32001 (11.8%) | 76376 (28.3%) | 51% of 2700 | 0/0/19 | 7.65/8.89/9.91/10 | 10.00 "Dead Protocol" (A10/C10; balanced seed 6 #32, yr 9.8, critic gen 0) |  |
| ALL | combo_A | 1-5 | 13500 | 6.21 | 6.26 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 238 (1.8%) | 100% of 2700 | 0/0/0 | 6.14/7.29/7.94/8.4 | 8.70 "Midnight Protocol" (A8.64/C8.76; balanced seed 87 #5, yr 1.5, critic gen 0) |  |
| ALL | combo_A | 6-20 | 40500 | 7.53 | 7.50 | 2952 (7.3%) | 2952 (7.3%) | 2836 (7.0%) | 3903 (9.6%) | 4138 (10.2%) | 13817 (34.1%) | 59% of 2700 | 0/0/4 | 7.19/8.36/9.61/10 | 10.00 "Dead Frequency" (A10/C10; experimenter seed 10 #18, yr 5.5, critic gen 0) |  |
| ALL | combo_A | 21-50 | 81000 | 7.71 | 7.53 | 10814 (13.3%) | 10814 (13.3%) | 10431 (12.9%) | 16125 (19.9%) | 10782 (13.3%) | 32106 (39.6%) | 53% of 2700 | 0/0/11 | 6.86/8.61/9.82/10 | 10.00 "Dead Protocol" (A10/C10; balanced seed 6 #32, yr 9.8, critic gen 1) |  |
| ALL | combo_A | 51-100 | 135000 | 7.22 | 6.79 | 3335 (2.5%) | 3335 (2.5%) | 3296 (2.4%) | 10135 (7.5%) | 3575 (2.6%) | 26766 (19.8%) | 67% of 2700 | 0/0/5 | 6.78/8.25/9.58/9.99 | 10.00 "Iron Echo" (A10/C10; balanced seed 27 #54, yr 16.6, critic gen 2) |  |
| ALL | combo_A | all | 270000 | 7.36 | 7.09 | 17101 (6.3%) | 17101 (6.3%) | 16563 (6.1%) | 30163 (11.2%) | 18495 (6.8%) | 72927 (27.0%) | 51% of 2700 | 0/0/18 | 7.63/8.89/9.84/10 | 10.00 "Dead Protocol" (A10/C10; balanced seed 6 #32, yr 9.8, critic gen 1) |  |
| ALL | combo_B | 1-5 | 13500 | 6.21 | 6.26 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 238 (1.8%) | 100% of 2700 | 0/0/0 | 6.14/7.29/7.94/8.4 | 8.70 "Midnight Protocol" (A8.64/C8.76; balanced seed 87 #5, yr 1.5, critic gen 0) |  |
| ALL | combo_B | 6-20 | 40500 | 7.53 | 7.48 | 2839 (7.0%) | 2839 (7.0%) | 2733 (6.8%) | 3903 (9.6%) | 3905 (9.6%) | 13741 (33.9%) | 60% of 2700 | 0/0/3 | 7.19/8.36/9.59/10 | 10.00 "Dead Frequency" (A10/C10; experimenter seed 10 #18, yr 5.5, critic gen 0) |  |
| ALL | combo_B | 21-50 | 81000 | 7.67 | 7.30 | 7411 (9.2%) | 7411 (9.2%) | 7118 (8.8%) | 14064 (17.4%) | 7445 (9.2%) | 29642 (36.6%) | 53% of 2700 | 0/0/8 | 6.77/8.54/9.75/10 | 10.00 "Dead Protocol" (A10/C10; balanced seed 6 #32, yr 9.8, critic gen 1) |  |
| ALL | combo_B | 51-100 | 135000 | 7.14 | 6.51 | 1635 (1.2%) | 1635 (1.2%) | 1559 (1.1%) | 7775 (5.8%) | 1432 (1.1%) | 17975 (13.3%) | 72% of 2700 | 0/0/2 | 6.61/8.17/9.38/9.68 | 9.91 "Red Run" (A10/C9.82; selective-self-funder seed 74 #51, yr 15.7, critic gen 2) |  |
| ALL | combo_B | all | 270000 | 7.31 | 6.88 | 11885 (4.4%) | 11885 (4.4%) | 11410 (4.2%) | 25742 (9.5%) | 12782 (4.7%) | 61596 (22.8%) | 51% of 2700 | 0/0/13 | 7.55/8.89/9.8/10 | 10.00 "Dead Protocol" (A10/C10; balanced seed 6 #32, yr 9.8, critic gen 1) |  |
| ALL | combo_C | 1-5 | 13500 | 6.21 | 6.26 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 238 (1.8%) | 100% of 2700 | 0/0/0 | 6.14/7.29/7.94/8.4 | 8.70 "Midnight Protocol" (A8.64/C8.76; balanced seed 87 #5, yr 1.5, critic gen 0) |  |
| ALL | combo_C | 6-20 | 40500 | 7.53 | 7.40 | 2391 (5.9%) | 2391 (5.9%) | 2298 (5.7%) | 3903 (9.6%) | 3168 (7.8%) | 13382 (33.0%) | 63% of 2700 | 0/0/3 | 7.13/8.34/9.53/9.93 | 10.00 "Silver Edge" (A10/C10; selective-self-funder seed 46 #12, yr 3.7, critic gen 0) |  |
| ALL | combo_C | 21-50 | 81000 | 7.73 | 7.10 | 5593 (6.9%) | 5593 (6.9%) | 5414 (6.7%) | 16394 (20.2%) | 4581 (5.7%) | 28082 (34.7%) | 54% of 2700 | 0/0/6 | 6.74/8.54/9.67/10 | 10.00 "Dead Protocol" (A10/C10; balanced seed 6 #32, yr 9.8, critic gen 1) |  |
| ALL | combo_C | 51-100 | 135000 | 7.28 | 6.01 | 517 (0.4%) | 517 (0.4%) | 505 (0.4%) | 10893 (8.1%) | 326 (0.2%) | 11747 (8.7%) | 87% of 2700 | 0/0/1 | 6.47/8.1/9.05/9.52 | 9.54 "Dead Night" (A10/C9.08; balanced seed 221 #51, yr 15.7, critic gen 3) |  |
| ALL | combo_C | all | 270000 | 7.40 | 6.56 | 8501 (3.1%) | 8501 (3.1%) | 8217 (3.0%) | 31190 (11.6%) | 8075 (3.0%) | 53449 (19.8%) | 52% of 2700 | 0/0/9 | 7.47/8.84/9.75/10 | 10.00 "Dead Protocol" (A10/C10; balanced seed 6 #32, yr 9.8, critic gen 1) |  |

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
| balanced | ref_no_era_bar | all | 30000 | 8.70 | 8.57 | 11377 (37.9%) | 11377 (37.9%) | 11242 (37.5%) | 13912 (46.4%) | 12191 (40.6%) | 24312 (81.0%) | 0% of 300 | 28/38/48 | 9.86/10/10/10 | 10.00 "Broken Protocol" (A10/C10; balanced seed 1 #57, yr 17.5, critic gen 0) | 25300 |
| quality-first | ref_no_era_bar | all | 30000 | 8.58 | 8.43 | 8174 (27.3%) | 8174 (27.3%) | 8021 (26.7%) | 11963 (39.9%) | 9983 (33.3%) | 23390 (78.0%) | 0% of 300 | 20/27/35 | 9.78/10/10/10 | 10.00 "Broken Code" (A10/C10; quality-first seed 2 #39, yr 12.0, critic gen 0) | 21297.5 |
| franchise-builder | ref_no_era_bar | all | 30000 | 7.13 | 7.04 | 440 (1.5%) | 440 (1.5%) | 436 (1.4%) | 612 (2.0%) | 577 (1.9%) | 2011 (6.7%) | 81% of 300 | 0/0/7.1 | 7.75/8.38/9.64/10 | 10.00 "Wild Run" (A10/C10; franchise-builder seed 10 #30, yr 9.2, critic gen 0) | 7297.5 |
| repeat-farmer | ref_no_era_bar | all | 30000 | 6.97 | 6.96 | 49 (0.2%) | 49 (0.2%) | 47 (0.2%) | 65 (0.2%) | 118 (0.4%) | 846 (2.8%) | 98% of 300 | 0/0/0 | 7.7/8.1/8.67/9.5 | 9.75 "Iron Pulse" (A9.66/C9.83; repeat-farmer seed 38 #9, yr 2.8, critic gen 0) | 5850 |
| cheap-duds | ref_no_era_bar | all | 30000 | 6.89 | 6.96 | 91 (0.3%) | 91 (0.3%) | 83 (0.3%) | 298 (1.0%) | 563 (1.9%) | 3134 (10.4%) | 75% of 300 | 0/0/1 | 8.49/8.79/9.15/9.48 | 9.52 "Dead Pulse" (A9.44/C9.61; cheap-duds seed 21 #75, yr 23.1, critic gen 0) | 6202.5 |
| experimenter | ref_no_era_bar | all | 30000 | 8.48 | 8.38 | 7495 (25.0%) | 7495 (25.0%) | 7091 (23.6%) | 8845 (29.5%) | 9508 (31.7%) | 22899 (76.3%) | 0% of 300 | 16/24.5/35 | 9.63/9.84/10/10 | 10.00 "Last Shadow" (A10/C10; experimenter seed 6 #23, yr 7.1, critic gen 0) | 20570 |
| self-funder | ref_no_era_bar | all | 30000 | 7.57 | 7.48 | 510 (1.7%) | 510 (1.7%) | 472 (1.6%) | 1307 (4.4%) | 1081 (3.6%) | 7460 (24.9%) | 19% of 300 | 0/2/3 | 8.91/9.24/9.61/9.68 | 9.70 "Red Pulse" (A9.63/C9.76; self-funder seed 126 #66, yr 20.3, critic gen 0) | 10167.5 |
| selective-self-funder | ref_no_era_bar | all | 30000 | 8.69 | 8.57 | 11257 (37.5%) | 11257 (37.5%) | 11071 (36.9%) | 13711 (45.7%) | 12029 (40.1%) | 24188 (80.6%) | 0% of 300 | 29/38/46 | 9.89/10/10/10 | 10.00 "Lost Night" (A10/C10; selective-self-funder seed 2 #52, yr 16.0, critic gen 0) | 25137.5 |
| famous-star | ref_no_era_bar | all | 30000 | 7.24 | 7.21 | 57 (0.2%) | 57 (0.2%) | 55 (0.2%) | 282 (0.9%) | 501 (1.7%) | 2790 (9.3%) | 83% of 300 | 0/0/1 | 8.34/8.7/9.06/9.41 | 9.52 "Dead Horizon" (A9.44/C9.59; famous-star seed 286 #82, yr 25.2, critic gen 0) | 6807.5 |
| balanced | ref_era_bar_0.08 | all | 30000 | 8.37 | 8.29 | 5592 (18.6%) | 5592 (18.6%) | 5422 (18.1%) | 8002 (26.7%) | 7859 (26.2%) | 21495 (71.7%) | 0% of 300 | 10/18/27 | 9.57/9.82/10/10 | 10.00 "Lost Edge" (A10/C10; balanced seed 6 #88, yr 27.1, critic gen 0) | 19692.5 |
| quality-first | ref_era_bar_0.08 | all | 30000 | 8.25 | 8.13 | 3752 (12.5%) | 3752 (12.5%) | 3629 (12.1%) | 6287 (21.0%) | 5908 (19.7%) | 19784 (66.0%) | 0% of 300 | 7/12/19 | 9.53/9.79/10/10 | 10.00 "Last Horizon" (A10/C10; quality-first seed 10 #23, yr 7.1, critic gen 0) | 16152.5 |
| franchise-builder | ref_era_bar_0.08 | all | 30000 | 6.96 | 6.90 | 397 (1.3%) | 397 (1.3%) | 389 (1.3%) | 557 (1.9%) | 572 (1.9%) | 1958 (6.5%) | 72% of 300 | 0/0/6 | 7.55/8.24/9.45/9.84 | 10.00 "Iron Storm" (A10/C10; franchise-builder seed 131 #30, yr 9.2, critic gen 0) | 6495 |
| repeat-farmer | ref_era_bar_0.08 | all | 30000 | 6.73 | 6.73 | 17 (0.1%) | 17 (0.1%) | 16 (0.1%) | 27 (0.1%) | 45 (0.1%) | 458 (1.5%) | 99% of 300 | 0/0/0 | 7.61/7.96/8.41/9.03 | 9.46 "Iron Protocol 4" (A9.37/C9.55; repeat-farmer seed 239 #12, yr 3.7, critic gen 0) | 5600 |
| cheap-duds | ref_era_bar_0.08 | all | 30000 | 6.02 | 6.16 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 29 (0.1%) | 100% of 300 | 0/0/0 | 7.4/7.64/7.99/8.29 | 8.34 "Red Rising" (A8.19/C8.49; cheap-duds seed 77 #98, yr 30.1, critic gen 0) | 150 |
| experimenter | ref_era_bar_0.08 | all | 30000 | 8.05 | 8.01 | 1909 (6.4%) | 1909 (6.4%) | 1858 (6.2%) | 3977 (13.3%) | 4377 (14.6%) | 16712 (55.7%) | 2% of 300 | 2/6/12 | 9.15/9.48/9.78/9.95 | 9.96 "Silver Frequency" (A9.91/C10; experimenter seed 48 #30, yr 9.2, critic gen 0) | 14535 |
| self-funder | ref_era_bar_0.08 | all | 30000 | 6.75 | 6.71 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 500 (1.7%) | 100% of 300 | 0/0/0 | 7.9/8.2/8.53/8.64 | 8.77 "Wild Frequency" (A8.68/C8.85; self-funder seed 54 #24, yr 7.4, critic gen 0) | 1050 |
| selective-self-funder | ref_era_bar_0.08 | all | 30000 | 8.37 | 8.28 | 5579 (18.6%) | 5579 (18.6%) | 5421 (18.1%) | 8141 (27.1%) | 7844 (26.1%) | 21407 (71.4%) | 0% of 300 | 11/18/27 | 9.57/9.81/10/10 | 10.00 "Midnight Code" (A10/C10; selective-self-funder seed 7 #42, yr 12.9, critic gen 0) | 19685 |
| famous-star | ref_era_bar_0.08 | all | 30000 | 6.37 | 6.40 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 14 (0.1%) | 100% of 300 | 0/0/0 | 7.23/7.58/7.88/8.24 | 8.29 "Last Protocol" (A8.17/C8.41; famous-star seed 113 #63, yr 19.4, critic gen 0) | 225 |
| balanced | critic_mild | all | 30000 | 8.47 | 8.01 | 5240 (17.5%) | 5240 (17.5%) | 5098 (17.0%) | 9624 (32.1%) | 5132 (17.1%) | 19736 (65.8%) | 0% of 300 | 11/17/25 | 9.57/9.82/10/10 | 10.00 "Dead Protocol" (A10/C10; balanced seed 6 #32, yr 9.8, critic gen 1) | 18697.5 |
| quality-first | critic_mild | all | 30000 | 8.34 | 7.86 | 4049 (13.5%) | 4049 (13.5%) | 3946 (13.2%) | 7715 (25.7%) | 4208 (14.0%) | 17022 (56.7%) | 0% of 300 | 9/13/19 | 9.55/9.77/10/10 | 10.00 "Hollow Pulse" (A10/C10; quality-first seed 9 #22, yr 6.8, critic gen 0) | 15970 |
| franchise-builder | critic_mild | all | 30000 | 7.08 | 6.68 | 413 (1.4%) | 413 (1.4%) | 400 (1.3%) | 984 (3.3%) | 421 (1.4%) | 2378 (7.9%) | 70% of 300 | 0/0/6 | 7.66/8.39/9.5/9.83 | 10.00 "Silver Rising" (A10/C10; franchise-builder seed 227 #31, yr 9.5, critic gen 1) | 6965 |
| repeat-farmer | critic_mild | all | 30000 | 6.79 | 6.47 | 15 (0.1%) | 15 (0.1%) | 15 (0.1%) | 28 (0.1%) | 40 (0.1%) | 602 (2.0%) | 99% of 300 | 0/0/0 | 7.62/8.03/8.54/8.97 | 9.58 "Iron Pulse" (A9.49/C9.67; repeat-farmer seed 38 #9, yr 2.8, critic gen 0) | 5750 |
| cheap-duds | critic_mild | all | 30000 | 6.20 | 6.06 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 22 (0.1%) | 100% of 300 | 0/0/0 | 7.42/7.67/7.98/8.1 | 8.14 "Wild Horizon" (A8.11/C8.16; cheap-duds seed 164 #37, yr 11.4, critic gen 1) | 300 |
| experimenter | critic_mild | all | 30000 | 8.17 | 7.76 | 2934 (9.8%) | 2934 (9.8%) | 2847 (9.5%) | 5774 (19.3%) | 3280 (10.9%) | 15238 (50.8%) | 0% of 300 | 5/9/15 | 9.35/9.65/10/10 | 10.00 "Dead Frequency" (A10/C10; experimenter seed 10 #18, yr 5.5, critic gen 0) | 14627.5 |
| self-funder | critic_mild | all | 30000 | 6.93 | 6.59 | 7 (0.0%) | 7 (0.0%) | 6 (0.0%) | 70 (0.2%) | 48 (0.2%) | 1298 (4.3%) | 98% of 300 | 0/0/0 | 8.18/8.46/8.83/9.06 | 9.14 "Last Code" (A9.05/C9.23; self-funder seed 89 #24, yr 7.4, critic gen 0) | 3910 |
| selective-self-funder | critic_mild | all | 30000 | 8.47 | 8.02 | 5324 (17.8%) | 5324 (17.8%) | 5167 (17.2%) | 9579 (31.9%) | 5229 (17.4%) | 19725 (65.8%) | 0% of 300 | 11/18/24.1 | 9.57/9.82/10/10 | 10.00 "Dead Legacy" (A10/C10; selective-self-funder seed 9 #23, yr 7.1, critic gen 0) | 18957.5 |
| famous-star | critic_mild | all | 30000 | 6.55 | 6.29 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 61 (0.2%) | 100% of 300 | 0/0/0 | 7.56/7.81/8.11/8.25 | 8.29 "Midnight Legacy" (A8.29/C8.28; famous-star seed 186 #41, yr 12.6, critic gen 1) | 525 |
| balanced | critic_moderate | all | 30000 | 8.48 | 7.77 | 3904 (13.0%) | 3904 (13.0%) | 3811 (12.7%) | 9631 (32.1%) | 3394 (11.3%) | 17731 (59.1%) | 0% of 300 | 7/12.5/19 | 9.47/9.73/10/10 | 10.00 "Dead Protocol" (A10/C10; balanced seed 6 #32, yr 9.8, critic gen 1) | 17172.5 |
| quality-first | critic_moderate | all | 30000 | 8.34 | 7.61 | 3094 (10.3%) | 3094 (10.3%) | 2999 (10.0%) | 7716 (25.7%) | 2891 (9.6%) | 14919 (49.7%) | 0% of 300 | 6/10/15 | 9.46/9.7/10/10 | 10.00 "Hollow Pulse" (A10/C10; quality-first seed 9 #22, yr 6.8, critic gen 1) | 14742.5 |
| franchise-builder | critic_moderate | all | 30000 | 7.20 | 6.58 | 416 (1.4%) | 416 (1.4%) | 409 (1.4%) | 1508 (5.0%) | 342 (1.1%) | 3000 (10.0%) | 63% of 300 | 0/0/5 | 7.68/8.71/9.5/9.81 | 10.00 "Broken Legacy" (A10/C10; franchise-builder seed 184 #38, yr 11.7, critic gen 1) | 8750 |
| repeat-farmer | critic_moderate | all | 30000 | 6.79 | 6.27 | 15 (0.1%) | 15 (0.1%) | 15 (0.1%) | 28 (0.1%) | 40 (0.1%) | 600 (2.0%) | 99% of 300 | 0/0/0 | 7.62/8.03/8.54/8.97 | 9.58 "Iron Pulse" (A9.49/C9.67; repeat-farmer seed 38 #9, yr 2.8, critic gen 0) | 5750 |
| cheap-duds | critic_moderate | all | 30000 | 6.21 | 5.87 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 4 (0.0%) | 100% of 300 | 0/0/0 | 7.32/7.56/7.87/8.01 | 8.02 "Silver Legacy" (A8.01/C8.03; cheap-duds seed 43 #38, yr 11.7, critic gen 1) | 375 |
| experimenter | critic_moderate | all | 30000 | 8.17 | 7.52 | 2119 (7.1%) | 2119 (7.1%) | 1962 (6.5%) | 5771 (19.2%) | 2674 (8.9%) | 12555 (41.9%) | 0% of 300 | 3/7/11 | 9.27/9.58/9.94/10 | 10.00 "Dead Frequency" (A10/C10; experimenter seed 10 #18, yr 5.5, critic gen 0) | 13537.5 |
| self-funder | critic_moderate | all | 30000 | 6.93 | 6.38 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 69 (0.2%) | 1 (0.0%) | 944 (3.1%) | 100% of 300 | 0/0/0 | 8.09/8.36/8.76/8.95 | 8.97 "Red Run" (A9.08/C8.86; self-funder seed 148 #26, yr 8.0, critic gen 1) | 3860 |
| selective-self-funder | critic_moderate | all | 30000 | 8.47 | 7.78 | 3981 (13.3%) | 3981 (13.3%) | 3879 (12.9%) | 9619 (32.1%) | 3427 (11.4%) | 17677 (58.9%) | 0% of 300 | 7/13/19 | 9.48/9.73/10/10 | 10.00 "Dead Legacy" (A10/C10; selective-self-funder seed 9 #23, yr 7.1, critic gen 1) | 17337.5 |
| famous-star | critic_moderate | all | 30000 | 6.55 | 6.09 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 38 (0.1%) | 100% of 300 | 0/0/0 | 7.47/7.69/8.01/8.16 | 8.20 "Broken Pulse" (A8.25/C8.14; famous-star seed 227 #31, yr 9.5, critic gen 1) | 525 |
| balanced | critic_strong | all | 30000 | 8.49 | 7.39 | 2593 (8.6%) | 2593 (8.6%) | 2477 (8.3%) | 9710 (32.4%) | 2181 (7.3%) | 14322 (47.7%) | 0% of 300 | 4/8/14 | 9.34/9.6/9.82/10 | 10.00 "Dead Protocol" (A10/C10; balanced seed 6 #32, yr 9.8, critic gen 1) | 15780 |
| quality-first | critic_strong | all | 30000 | 8.33 | 7.24 | 2122 (7.1%) | 2122 (7.1%) | 2027 (6.8%) | 7716 (25.7%) | 1899 (6.3%) | 12198 (40.7%) | 0% of 300 | 4/7/10 | 9.34/9.59/9.93/10 | 10.00 "Lost Legacy" (A10/C10; quality-first seed 21 #31, yr 9.5, critic gen 1) | 13565 |
| franchise-builder | critic_strong | all | 30000 | 7.35 | 6.36 | 249 (0.8%) | 249 (0.8%) | 236 (0.8%) | 2069 (6.9%) | 207 (0.7%) | 2952 (9.8%) | 73% of 300 | 0/0/3 | 7.83/8.73/9.29/9.71 | 10.00 "Silver Rising" (A10/C10; franchise-builder seed 227 #31, yr 9.5, critic gen 1) | 9680 |
| repeat-farmer | critic_strong | all | 30000 | 6.79 | 5.96 | 14 (0.1%) | 14 (0.1%) | 14 (0.1%) | 28 (0.1%) | 37 (0.1%) | 597 (2.0%) | 99% of 300 | 0/0/0 | 7.62/8.03/8.54/8.97 | 9.58 "Iron Pulse" (A9.49/C9.67; repeat-farmer seed 38 #9, yr 2.8, critic gen 0) | 5750 |
| cheap-duds | critic_strong | all | 30000 | 6.21 | 5.57 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 100% of 300 | 0/0/0 | 7.21/7.44/7.74/7.92 | 7.97 "Iron Horizon" (A8.03/C7.91; cheap-duds seed 66 #29, yr 8.9, critic gen 1) | 375 |
| experimenter | critic_strong | all | 30000 | 8.17 | 7.15 | 1444 (4.8%) | 1444 (4.8%) | 1394 (4.7%) | 5768 (19.2%) | 1463 (4.9%) | 10395 (34.6%) | 1% of 300 | 2/5/8 | 9.21/9.53/9.85/9.96 | 9.99 "Dead Edge" (A9.97/C10; experimenter seed 52 #16, yr 4.9, critic gen 0) | 12630 |
| self-funder | critic_strong | all | 30000 | 6.93 | 6.07 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 69 (0.2%) | 0 (0.0%) | 665 (2.2%) | 100% of 300 | 0/0/0 | 7.96/8.25/8.58/8.9 | 8.93 "Red Run" (A9.08/C8.77; self-funder seed 148 #26, yr 8.0, critic gen 1) | 3830 |
| selective-self-funder | critic_strong | all | 30000 | 8.49 | 7.40 | 2679 (8.9%) | 2679 (8.9%) | 2541 (8.5%) | 9628 (32.1%) | 2260 (7.5%) | 14340 (47.8%) | 0% of 300 | 5/8/14 | 9.37/9.62/9.97/10 | 10.00 "Last Frequency" (A10/C10; selective-self-funder seed 21 #29, yr 8.9, critic gen 1) | 15972.5 |
| famous-star | critic_strong | all | 30000 | 6.55 | 5.79 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 10 (0.0%) | 100% of 300 | 0/0/0 | 7.36/7.6/7.91/8.08 | 8.15 "Broken Pulse" (A8.25/C8.05; famous-star seed 227 #31, yr 9.5, critic gen 1) | 525 |
| balanced | critic_moderate_subtract | all | 30000 | 8.49 | 7.67 | 3861 (12.9%) | 3861 (12.9%) | 3707 (12.4%) | 9704 (32.4%) | 3328 (11.1%) | 16472 (54.9%) | 0% of 300 | 7/12/20 | 9.47/9.73/10/10 | 10.00 "Dead Protocol" (A10/C10; balanced seed 6 #32, yr 9.8, critic gen 1) | 17022.5 |
| quality-first | critic_moderate_subtract | all | 30000 | 8.34 | 7.48 | 3015 (10.1%) | 3015 (10.1%) | 2905 (9.7%) | 7713 (25.7%) | 2835 (9.4%) | 13741 (45.8%) | 0% of 300 | 6/10/14 | 9.47/9.71/10/10 | 10.00 "Hollow Pulse" (A10/C10; quality-first seed 9 #22, yr 6.8, critic gen 1) | 14537.5 |
| franchise-builder | critic_moderate_subtract | all | 30000 | 7.43 | 6.61 | 672 (2.2%) | 672 (2.2%) | 652 (2.2%) | 2724 (9.1%) | 477 (1.6%) | 4442 (14.8%) | 42% of 300 | 0/1/7 | 7.98/9.11/9.56/9.88 | 10.00 "Broken Legacy" (A10/C10; franchise-builder seed 184 #38, yr 11.7, critic gen 1) | 10895 |
| repeat-farmer | critic_moderate_subtract | all | 30000 | 6.79 | 6.02 | 15 (0.1%) | 15 (0.1%) | 15 (0.1%) | 28 (0.1%) | 40 (0.1%) | 599 (2.0%) | 99% of 300 | 0/0/0 | 7.62/8.03/8.54/8.97 | 9.58 "Iron Pulse" (A9.49/C9.67; repeat-farmer seed 38 #9, yr 2.8, critic gen 0) | 5750 |
| cheap-duds | critic_moderate_subtract | all | 30000 | 6.20 | 5.59 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 1 (0.0%) | 100% of 300 | 0/0/0 | 7.24/7.5/7.82/7.98 | 8.00 "Wild Horizon" (A8.03/C7.97; cheap-duds seed 145 #36, yr 11.1, critic gen 1) | 300 |
| experimenter | critic_moderate_subtract | all | 30000 | 8.17 | 7.38 | 1979 (6.6%) | 1979 (6.6%) | 1866 (6.2%) | 5773 (19.2%) | 2512 (8.4%) | 11730 (39.1%) | 0% of 300 | 3/6/11 | 9.26/9.58/9.95/10 | 10.00 "Dead Frequency" (A10/C10; experimenter seed 10 #18, yr 5.5, critic gen 0) | 13435 |
| self-funder | critic_moderate_subtract | all | 30000 | 6.93 | 6.14 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 68 (0.2%) | 1 (0.0%) | 838 (2.8%) | 100% of 300 | 0/0/0 | 8.05/8.34/8.74/8.93 | 8.96 "Red Run" (A9.08/C8.83; self-funder seed 148 #26, yr 8.0, critic gen 1) | 3860 |
| selective-self-funder | critic_moderate_subtract | all | 30000 | 8.48 | 7.68 | 3911 (13.0%) | 3911 (13.0%) | 3747 (12.5%) | 9672 (32.2%) | 3376 (11.3%) | 16475 (54.9%) | 0% of 300 | 7/13/19 | 9.49/9.75/10/10 | 10.00 "Dead Legacy" (A10/C10; selective-self-funder seed 9 #23, yr 7.1, critic gen 1) | 17190 |
| famous-star | critic_moderate_subtract | all | 30000 | 6.55 | 5.83 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 24 (0.1%) | 100% of 300 | 0/0/0 | 7.41/7.64/7.97/8.14 | 8.16 "Broken Pulse" (A8.25/C8.08; famous-star seed 227 #31, yr 9.5, critic gen 1) | 525 |
| balanced | audience_mild | all | 30000 | 8.36 | 8.36 | 6309 (21.0%) | 6309 (21.0%) | 6175 (20.6%) | 8561 (28.5%) | 8974 (29.9%) | 21377 (71.3%) | 0% of 300 | 14/21/29 | 9.66/9.84/10/10 | 10.00 "Dead Protocol" (A10/C10; balanced seed 6 #32, yr 9.8, critic gen 0) | 20375 |
| quality-first | audience_mild | all | 30000 | 8.23 | 8.21 | 4567 (15.2%) | 4567 (15.2%) | 4483 (14.9%) | 7399 (24.7%) | 7053 (23.5%) | 18983 (63.3%) | 0% of 300 | 10/15/21.1 | 9.64/9.83/10/10 | 10.00 "Hollow Pulse" (A10/C10; quality-first seed 9 #22, yr 6.8, critic gen 0) | 17040 |
| franchise-builder | audience_mild | all | 30000 | 6.91 | 6.94 | 472 (1.6%) | 472 (1.6%) | 458 (1.5%) | 579 (1.9%) | 723 (2.4%) | 2116 (7.0%) | 73% of 300 | 0/0/7 | 7.66/8.27/9.59/10 | 10.00 "Last Rising" (A10/C10; franchise-builder seed 38 #85, yr 26.1, critic gen 0) | 6572.5 |
| repeat-farmer | audience_mild | all | 30000 | 6.70 | 6.76 | 15 (0.1%) | 15 (0.1%) | 15 (0.1%) | 28 (0.1%) | 40 (0.1%) | 602 (2.0%) | 99% of 300 | 0/0/0 | 7.62/8.03/8.54/8.97 | 9.58 "Iron Pulse" (A9.49/C9.67; repeat-farmer seed 38 #9, yr 2.8, critic gen 0) | 5750 |
| cheap-duds | audience_mild | all | 30000 | 6.12 | 6.34 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 51 (0.2%) | 100% of 300 | 0/0/0 | 7.56/7.81/8.13/8.23 | 8.27 "Midnight Legacy" (A8.02/C8.52; cheap-duds seed 172 #89, yr 27.4, critic gen 0) | 300 |
| experimenter | audience_mild | all | 30000 | 8.07 | 8.11 | 3515 (11.7%) | 3515 (11.7%) | 3407 (11.4%) | 4315 (14.4%) | 5518 (18.4%) | 17035 (56.8%) | 0% of 300 | 7/11/17 | 9.43/9.7/10/10 | 10.00 "Dead Frequency" (A10/C10; experimenter seed 10 #18, yr 5.5, critic gen 0) | 15842.5 |
| self-funder | audience_mild | all | 30000 | 6.84 | 6.88 | 25 (0.1%) | 25 (0.1%) | 24 (0.1%) | 70 (0.2%) | 254 (0.8%) | 1735 (5.8%) | 92% of 300 | 0/0/0 | 8.25/8.55/8.9/9.13 | 9.16 "Red Run" (A9.08/C9.23; self-funder seed 148 #26, yr 8.0, critic gen 0) | 3825 |
| selective-self-funder | audience_mild | all | 30000 | 8.35 | 8.37 | 6314 (21.1%) | 6314 (21.1%) | 6182 (20.6%) | 8542 (28.5%) | 9016 (30.1%) | 21364 (71.2%) | 0% of 300 | 13/21/29 | 9.65/9.86/10/10 | 10.00 "Midnight Signal" (A10/C10; selective-self-funder seed 7 #88, yr 27.1, critic gen 0) | 20527.5 |
| famous-star | audience_mild | all | 30000 | 6.47 | 6.58 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 96 (0.3%) | 100% of 300 | 0/0/0 | 7.62/7.91/8.25/8.34 | 8.37 "Broken Pulse" (A8.25/C8.48; famous-star seed 227 #31, yr 9.5, critic gen 0) | 450 |
| balanced | audience_moderate | all | 30000 | 8.29 | 8.37 | 6056 (20.2%) | 6056 (20.2%) | 5917 (19.7%) | 7072 (23.6%) | 9018 (30.1%) | 20991 (70.0%) | 0% of 300 | 13/20/28 | 9.64/9.84/10/10 | 10.00 "Dead Protocol" (A10/C10; balanced seed 6 #32, yr 9.8, critic gen 0) | 20040 |
| quality-first | audience_moderate | all | 30000 | 8.16 | 8.21 | 4457 (14.9%) | 4457 (14.9%) | 4398 (14.7%) | 6113 (20.4%) | 7054 (23.5%) | 18495 (61.6%) | 0% of 300 | 10/15/21 | 9.63/9.81/10/10 | 10.00 "Hollow Pulse" (A10/C10; quality-first seed 9 #22, yr 6.8, critic gen 0) | 16592.5 |
| franchise-builder | audience_moderate | all | 30000 | 6.88 | 6.98 | 542 (1.8%) | 542 (1.8%) | 527 (1.8%) | 618 (2.1%) | 843 (2.8%) | 2376 (7.9%) | 68% of 300 | 0/0/7 | 7.66/8.36/9.59/10 | 10.00 "Last Rising" (A10/C10; franchise-builder seed 38 #85, yr 26.1, critic gen 0) | 6750 |
| repeat-farmer | audience_moderate | all | 30000 | 6.65 | 6.76 | 15 (0.1%) | 15 (0.1%) | 15 (0.1%) | 28 (0.1%) | 40 (0.1%) | 602 (2.0%) | 99% of 300 | 0/0/0 | 7.62/8.03/8.54/8.97 | 9.58 "Iron Pulse" (A9.49/C9.67; repeat-farmer seed 38 #9, yr 2.8, critic gen 0) | 5750 |
| cheap-duds | audience_moderate | all | 30000 | 6.07 | 6.33 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 48 (0.2%) | 100% of 300 | 0/0/0 | 7.53/7.76/8.09/8.18 | 8.23 "Midnight Legacy" (A7.94/C8.52; cheap-duds seed 172 #89, yr 27.4, critic gen 0) | 225 |
| experimenter | audience_moderate | all | 30000 | 8.00 | 8.11 | 3231 (10.8%) | 3231 (10.8%) | 3094 (10.3%) | 4004 (13.3%) | 5518 (18.4%) | 16762 (55.9%) | 0% of 300 | 6/10/16 | 9.42/9.7/10/10 | 10.00 "Dead Frequency" (A10/C10; experimenter seed 10 #18, yr 5.5, critic gen 0) | 15175 |
| self-funder | audience_moderate | all | 30000 | 6.78 | 6.88 | 19 (0.1%) | 19 (0.1%) | 19 (0.1%) | 67 (0.2%) | 253 (0.8%) | 1590 (5.3%) | 94% of 300 | 0/0/0 | 8.25/8.52/8.86/9.13 | 9.16 "Red Run" (A9.08/C9.23; self-funder seed 148 #26, yr 8.0, critic gen 0) | 3735 |
| selective-self-funder | audience_moderate | all | 30000 | 8.28 | 8.38 | 6055 (20.2%) | 6055 (20.2%) | 5918 (19.7%) | 7109 (23.7%) | 9038 (30.1%) | 20961 (69.9%) | 0% of 300 | 12/20/28 | 9.62/9.86/10/10 | 10.00 "Midnight Signal" (A10/C10; selective-self-funder seed 7 #88, yr 27.1, critic gen 0) | 20190 |
| famous-star | audience_moderate | all | 30000 | 6.41 | 6.58 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 71 (0.2%) | 100% of 300 | 0/0/0 | 7.62/7.89/8.23/8.32 | 8.37 "Broken Pulse" (A8.25/C8.48; famous-star seed 227 #31, yr 9.5, critic gen 0) | 375 |
| balanced | audience_strong | all | 30000 | 8.11 | 8.37 | 5236 (17.4%) | 5236 (17.4%) | 5070 (16.9%) | 5024 (16.8%) | 9009 (30.0%) | 19695 (65.7%) | 0% of 300 | 11/17/25 | 9.57/9.82/10/10 | 10.00 "Dead Protocol" (A10/C10; balanced seed 6 #32, yr 9.8, critic gen 0) | 18940 |
| quality-first | audience_strong | all | 30000 | 7.98 | 8.21 | 4021 (13.4%) | 4021 (13.4%) | 3909 (13.0%) | 4330 (14.4%) | 7047 (23.5%) | 16993 (56.6%) | 0% of 300 | 9/13/19 | 9.58/9.8/10/10 | 10.00 "Hollow Pulse" (A10/C10; quality-first seed 9 #22, yr 6.8, critic gen 0) | 15627.5 |
| franchise-builder | audience_strong | all | 30000 | 6.80 | 7.05 | 509 (1.7%) | 509 (1.7%) | 491 (1.6%) | 547 (1.8%) | 1092 (3.6%) | 2790 (9.3%) | 63% of 300 | 0/0/6 | 7.68/8.61/9.52/9.8 | 10.00 "Silver Rising" (A10/C10; franchise-builder seed 227 #31, yr 9.5, critic gen 0) | 7742.5 |
| repeat-farmer | audience_strong | all | 30000 | 6.49 | 6.76 | 15 (0.1%) | 15 (0.1%) | 15 (0.1%) | 28 (0.1%) | 40 (0.1%) | 602 (2.0%) | 99% of 300 | 0/0/0 | 7.62/8.03/8.54/8.97 | 9.58 "Iron Pulse" (A9.49/C9.67; repeat-farmer seed 38 #9, yr 2.8, critic gen 0) | 5750 |
| cheap-duds | audience_strong | all | 30000 | 5.93 | 6.33 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 25 (0.1%) | 100% of 300 | 0/0/0 | 7.42/7.67/7.98/8.1 | 8.14 "Wild Horizon" (A7.87/C8.41; cheap-duds seed 164 #37, yr 11.4, critic gen 0) | 150 |
| experimenter | audience_strong | all | 30000 | 7.82 | 8.11 | 2943 (9.8%) | 2943 (9.8%) | 2851 (9.5%) | 3274 (10.9%) | 5512 (18.4%) | 15198 (50.7%) | 0% of 300 | 5/9/15 | 9.35/9.65/9.96/10 | 10.00 "Dead Frequency" (A10/C10; experimenter seed 10 #18, yr 5.5, critic gen 0) | 14500 |
| self-funder | audience_strong | all | 30000 | 6.63 | 6.88 | 7 (0.0%) | 7 (0.0%) | 6 (0.0%) | 19 (0.1%) | 245 (0.8%) | 1305 (4.3%) | 98% of 300 | 0/0/0 | 8.17/8.47/8.83/9.06 | 9.14 "Last Code" (A9.05/C9.23; self-funder seed 89 #24, yr 7.4, critic gen 0) | 3495 |
| selective-self-funder | audience_strong | all | 30000 | 8.10 | 8.38 | 5298 (17.7%) | 5298 (17.7%) | 5144 (17.1%) | 5072 (16.9%) | 9056 (30.2%) | 19706 (65.7%) | 0% of 300 | 11/18/24.1 | 9.57/9.82/10/10 | 10.00 "Dead Legacy" (A10/C10; selective-self-funder seed 9 #23, yr 7.1, critic gen 0) | 19087.5 |
| famous-star | audience_strong | all | 30000 | 6.27 | 6.58 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 62 (0.2%) | 100% of 300 | 0/0/0 | 7.56/7.81/8.13/8.24 | 8.29 "Midnight Legacy" (A8.04/C8.54; famous-star seed 186 #41, yr 12.6, critic gen 0) | 300 |
| balanced | combo_A | all | 30000 | 8.38 | 8.02 | 4935 (16.4%) | 4935 (16.4%) | 4805 (16.0%) | 8660 (28.9%) | 5174 (17.3%) | 18919 (63.1%) | 0% of 300 | 11/16/23 | 9.53/9.79/10/10 | 10.00 "Dead Protocol" (A10/C10; balanced seed 6 #32, yr 9.8, critic gen 1) | 18490 |
| quality-first | combo_A | all | 30000 | 8.23 | 7.86 | 3854 (12.8%) | 3854 (12.8%) | 3732 (12.4%) | 7402 (24.7%) | 4208 (14.0%) | 16229 (54.1%) | 0% of 300 | 8.9/12/18 | 9.52/9.77/10/10 | 10.00 "Hollow Pulse" (A10/C10; quality-first seed 9 #22, yr 6.8, critic gen 0) | 15830 |
| franchise-builder | combo_A | all | 30000 | 7.05 | 6.74 | 440 (1.5%) | 440 (1.5%) | 426 (1.4%) | 1005 (3.4%) | 506 (1.7%) | 2739 (9.1%) | 65% of 300 | 0/0/6 | 7.68/8.62/9.5/9.77 | 10.00 "Silver Rising" (A10/C10; franchise-builder seed 227 #31, yr 9.5, critic gen 1) | 7847.5 |
| repeat-farmer | combo_A | all | 30000 | 6.70 | 6.47 | 15 (0.1%) | 15 (0.1%) | 15 (0.1%) | 28 (0.1%) | 40 (0.1%) | 602 (2.0%) | 99% of 300 | 0/0/0 | 7.62/8.03/8.54/8.97 | 9.58 "Iron Pulse" (A9.49/C9.67; repeat-farmer seed 38 #9, yr 2.8, critic gen 0) | 5750 |
| cheap-duds | combo_A | all | 30000 | 6.12 | 6.06 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 18 (0.1%) | 100% of 300 | 0/0/0 | 7.39/7.64/7.92/8.06 | 8.14 "Wild Horizon" (A8.11/C8.16; cheap-duds seed 164 #37, yr 11.4, critic gen 1) | 225 |
| experimenter | combo_A | all | 30000 | 8.07 | 7.76 | 2844 (9.5%) | 2844 (9.5%) | 2721 (9.1%) | 4315 (14.4%) | 3279 (10.9%) | 14246 (47.5%) | 0% of 300 | 5/9/14 | 9.35/9.65/10/10 | 10.00 "Dead Frequency" (A10/C10; experimenter seed 10 #18, yr 5.5, critic gen 0) | 14315 |
| self-funder | combo_A | all | 30000 | 6.84 | 6.58 | 7 (0.0%) | 7 (0.0%) | 6 (0.0%) | 70 (0.2%) | 48 (0.2%) | 1250 (4.2%) | 98% of 300 | 0/0/0 | 8.17/8.45/8.83/9.06 | 9.14 "Last Code" (A9.05/C9.23; self-funder seed 89 #24, yr 7.4, critic gen 0) | 3760 |
| selective-self-funder | combo_A | all | 30000 | 8.37 | 8.03 | 5006 (16.7%) | 5006 (16.7%) | 4858 (16.2%) | 8683 (28.9%) | 5240 (17.5%) | 18867 (62.9%) | 0% of 300 | 10/16/23 | 9.54/9.77/10/10 | 10.00 "Dead Legacy" (A10/C10; selective-self-funder seed 9 #23, yr 7.1, critic gen 0) | 18695 |
| famous-star | combo_A | all | 30000 | 6.47 | 6.29 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 57 (0.2%) | 100% of 300 | 0/0/0 | 7.55/7.79/8.1/8.21 | 8.24 "Broken Pulse" (A8.25/C8.22; famous-star seed 227 #31, yr 9.5, critic gen 1) | 450 |
| balanced | combo_B | all | 30000 | 8.31 | 7.78 | 3368 (11.2%) | 3368 (11.2%) | 3238 (10.8%) | 7129 (23.8%) | 3397 (11.3%) | 16126 (53.8%) | 0% of 300 | 6/11/17 | 9.43/9.68/10/10 | 10.00 "Dead Protocol" (A10/C10; balanced seed 6 #32, yr 9.8, critic gen 1) | 16632.5 |
| quality-first | combo_B | all | 30000 | 8.16 | 7.61 | 2732 (9.1%) | 2732 (9.1%) | 2625 (8.8%) | 6109 (20.4%) | 2892 (9.6%) | 13644 (45.5%) | 0% of 300 | 6/9/13 | 9.43/9.67/10/10 | 10.00 "Hollow Pulse" (A10/C10; quality-first seed 9 #22, yr 6.8, critic gen 1) | 14075 |
| franchise-builder | combo_B | all | 30000 | 7.11 | 6.63 | 376 (1.3%) | 376 (1.3%) | 367 (1.2%) | 1204 (4.0%) | 355 (1.2%) | 3038 (10.1%) | 63% of 300 | 0/0/5 | 7.78/8.77/9.5/9.81 | 10.00 "Broken Legacy" (A10/C10; franchise-builder seed 184 #38, yr 11.7, critic gen 1) | 9072.5 |
| repeat-farmer | combo_B | all | 30000 | 6.65 | 6.27 | 15 (0.1%) | 15 (0.1%) | 15 (0.1%) | 28 (0.1%) | 40 (0.1%) | 600 (2.0%) | 99% of 300 | 0/0/0 | 7.62/8.03/8.54/8.97 | 9.58 "Iron Pulse" (A9.49/C9.67; repeat-farmer seed 38 #9, yr 2.8, critic gen 0) | 5750 |
| cheap-duds | combo_B | all | 30000 | 6.07 | 5.87 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 1 (0.0%) | 100% of 300 | 0/0/0 | 7.27/7.52/7.81/7.93 | 8.02 "Iron Horizon" (A8.03/C8; cheap-duds seed 66 #29, yr 8.9, critic gen 1) | 225 |
| experimenter | combo_B | all | 30000 | 8.00 | 7.52 | 1934 (6.5%) | 1934 (6.5%) | 1851 (6.2%) | 4008 (13.4%) | 2674 (8.9%) | 11191 (37.3%) | 0% of 300 | 3/6/11 | 9.27/9.58/9.94/10 | 10.00 "Dead Frequency" (A10/C10; experimenter seed 10 #18, yr 5.5, critic gen 0) | 12820 |
| self-funder | combo_B | all | 30000 | 6.78 | 6.38 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 66 (0.2%) | 1 (0.0%) | 862 (2.9%) | 100% of 300 | 0/0/0 | 8.05/8.34/8.7/8.95 | 8.97 "Red Run" (A9.08/C8.86; self-funder seed 148 #26, yr 8.0, critic gen 1) | 3622.5 |
| selective-self-funder | combo_B | all | 30000 | 8.31 | 7.78 | 3460 (11.5%) | 3460 (11.5%) | 3314 (11.1%) | 7198 (24.0%) | 3423 (11.4%) | 16109 (53.7%) | 0% of 300 | 6.9/11/17 | 9.44/9.7/10/10 | 10.00 "Dead Legacy" (A10/C10; selective-self-funder seed 9 #23, yr 7.1, critic gen 1) | 16687.5 |
| famous-star | combo_B | all | 30000 | 6.41 | 6.09 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 25 (0.1%) | 100% of 300 | 0/0/0 | 7.43/7.65/7.97/8.12 | 8.20 "Broken Pulse" (A8.25/C8.14; famous-star seed 227 #31, yr 9.5, critic gen 1) | 375 |
| balanced | combo_C | all | 30000 | 8.40 | 7.40 | 2385 (8.0%) | 2385 (8.0%) | 2303 (7.7%) | 8716 (29.1%) | 2184 (7.3%) | 13564 (45.2%) | 0% of 300 | 4/7/14 | 9.31/9.59/9.82/10 | 10.00 "Dead Protocol" (A10/C10; balanced seed 6 #32, yr 9.8, critic gen 1) | 15680 |
| quality-first | combo_C | all | 30000 | 8.23 | 7.24 | 1942 (6.5%) | 1942 (6.5%) | 1886 (6.3%) | 7407 (24.7%) | 1900 (6.3%) | 11924 (39.8%) | 0% of 300 | 4/6/10 | 9.32/9.57/9.93/10 | 10.00 "Lost Legacy" (A10/C10; quality-first seed 21 #31, yr 9.5, critic gen 1) | 13450 |
| franchise-builder | combo_C | all | 30000 | 7.36 | 6.45 | 256 (0.8%) | 256 (0.8%) | 249 (0.8%) | 1984 (6.6%) | 228 (0.8%) | 3127 (10.4%) | 71% of 300 | 0/0/3 | 8.07/8.75/9.3/9.72 | 10.00 "Silver Rising" (A10/C10; franchise-builder seed 227 #31, yr 9.5, critic gen 1) | 10490 |
| repeat-farmer | combo_C | all | 30000 | 6.70 | 5.96 | 14 (0.1%) | 14 (0.1%) | 14 (0.1%) | 28 (0.1%) | 37 (0.1%) | 597 (2.0%) | 99% of 300 | 0/0/0 | 7.62/8.03/8.54/8.97 | 9.58 "Iron Pulse" (A9.49/C9.67; repeat-farmer seed 38 #9, yr 2.8, critic gen 0) | 5750 |
| cheap-duds | combo_C | all | 30000 | 6.12 | 5.57 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 100% of 300 | 0/0/0 | 7.2/7.42/7.72/7.89 | 7.97 "Iron Horizon" (A8.03/C7.91; cheap-duds seed 66 #29, yr 8.9, critic gen 1) | 300 |
| experimenter | combo_C | all | 30000 | 8.07 | 7.15 | 1428 (4.8%) | 1428 (4.8%) | 1385 (4.6%) | 4312 (14.4%) | 1463 (4.9%) | 10015 (33.4%) | 1% of 300 | 2/4.5/8 | 9.21/9.53/9.85/9.96 | 9.99 "Dead Edge" (A9.97/C10; experimenter seed 52 #16, yr 4.9, critic gen 0) | 12335 |
| self-funder | combo_C | all | 30000 | 6.84 | 6.07 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 69 (0.2%) | 0 (0.0%) | 648 (2.2%) | 100% of 300 | 0/0/0 | 7.96/8.25/8.58/8.9 | 8.93 "Red Run" (A9.08/C8.77; self-funder seed 148 #26, yr 8.0, critic gen 1) | 3660 |
| selective-self-funder | combo_C | all | 30000 | 8.39 | 7.40 | 2476 (8.3%) | 2476 (8.3%) | 2380 (7.9%) | 8674 (28.9%) | 2263 (7.5%) | 13564 (45.2%) | 0% of 300 | 4/8/13 | 9.34/9.59/9.97/10 | 10.00 "Last Frequency" (A10/C10; selective-self-funder seed 21 #29, yr 8.9, critic gen 1) | 15777.5 |
| famous-star | combo_C | all | 30000 | 6.47 | 5.79 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 10 (0.0%) | 100% of 300 | 0/0/0 | 7.35/7.58/7.88/8.08 | 8.15 "Broken Pulse" (A8.25/C8.05; famous-star seed 227 #31, yr 9.5, critic gen 1) | 450 |

### Greatest single films (all strategies, whole sample; reproducible from seed + config hash)

| Variant | Best combined | Best Audience | Best Critic | Year band with most HoF |
|---|---|---|---|---|
| control | 10.00 "Dead Protocol" (A10/C10; balanced seed 6 #32, yr 9.8, critic gen 0) | 10.00 "Dead Protocol" (A10/C10; balanced seed 6 #32, yr 9.8, critic gen 0) | 10.00 "Dead Protocol" (A10/C10; balanced seed 6 #32, yr 9.8, critic gen 0) | y10-15: 17.3% of 43200 |
| ref_no_era_bar | 10.00 "Broken Protocol" (A10/C10; balanced seed 1 #57, yr 17.5, critic gen 0) | 10.00 "Broken Protocol" (A10/C10; balanced seed 1 #57, yr 17.5, critic gen 0) | 10.00 "Broken Protocol" (A10/C10; balanced seed 1 #57, yr 17.5, critic gen 0) | y10-15: 25.9% of 43200 |
| ref_era_bar_0.08 | 10.00 "Lost Edge" (A10/C10; balanced seed 6 #88, yr 27.1, critic gen 0) | 10.00 "Lost Edge" (A10/C10; balanced seed 6 #88, yr 27.1, critic gen 0) | 10.00 "Lost Edge" (A10/C10; balanced seed 6 #88, yr 27.1, critic gen 0) | y10-15: 11.8% of 43200 |
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
| ALL | control | y15-20 | 43200 | 7.59 | 7.54 | 5058 (11.7%) | 5058 (11.7%) | 4756 (11.0%) | 6913 (16.0%) | 6199 (14.3%) | 16549 (38.3%) | 64% of 2700 | 0/0/7 | 6.94/8.18/9.78/10 | 10.00 "Wild Night" (A10/C10; balanced seed 7 #59, yr 18.1, critic gen 0) |  |
| ALL | control | y20-30 | 89100 | 7.26 | 7.21 | 2547 (2.9%) | 2547 (2.9%) | 2418 (2.7%) | 6239 (7.0%) | 6077 (6.8%) | 24346 (27.3%) | 75% of 2700 | 0/0/4 | 6.82/7.74/9.61/10 | 10.00 "Midnight Signal" (A10/C10; selective-self-funder seed 7 #88, yr 27.1, critic gen 0) |  |
| ALL | control | y30+ | 8100 | 7.06 | 7.02 | 75 (0.9%) | 75 (0.9%) | 75 (0.9%) | 281 (3.5%) | 278 (3.4%) | 1531 (18.9%) | 97% of 2700 | 0/0/0 | 6.36/7.11/8.54/9.37 | 9.89 "Lost Signal" (A10/C9.78; selective-self-funder seed 59 #98, yr 30.1, critic gen 0) |  |
| ALL | ref_no_era_bar | y0-5 | 43200 | 7.25 | 7.24 | 2649 (6.1%) | 2649 (6.1%) | 2550 (5.9%) | 3402 (7.9%) | 3784 (8.8%) | 11943 (27.6%) | 60% of 2700 | 0/0/3 | 7.35/8.48/9.59/10 | 10.00 "Wild Frequency" (A10/C10; experimenter seed 7 #16, yr 4.9, critic gen 0) |  |
| ALL | ref_no_era_bar | y5-10 | 43200 | 8.00 | 7.94 | 9711 (22.5%) | 9711 (22.5%) | 9538 (22.1%) | 11697 (27.1%) | 10240 (23.7%) | 20967 (48.5%) | 50% of 2700 | 0/1/10 | 7.07/9/9.94/10 | 10.00 "Last Shadow" (A10/C10; experimenter seed 6 #23, yr 7.1, critic gen 0) |  |
| ALL | ref_no_era_bar | y10-15 | 43200 | 8.13 | 8.05 | 11177 (25.9%) | 11177 (25.9%) | 10874 (25.2%) | 11461 (26.5%) | 10699 (24.8%) | 22486 (52.0%) | 47% of 2700 | 0/1/11 | 7.05/9.16/10/10 | 10.00 "Broken Code" (A10/C10; quality-first seed 2 #39, yr 12.0, critic gen 0) |  |
| ALL | ref_no_era_bar | y15-20 | 43200 | 8.03 | 7.94 | 8335 (19.3%) | 8335 (19.3%) | 8199 (19.0%) | 10347 (23.9%) | 9218 (21.3%) | 20866 (48.3%) | 51% of 2700 | 0/0/9 | 7.07/8.96/10/10 | 10.00 "Broken Protocol" (A10/C10; balanced seed 1 #57, yr 17.5, critic gen 0) |  |
| ALL | ref_no_era_bar | y20-30 | 89100 | 7.74 | 7.64 | 7324 (8.2%) | 7324 (8.2%) | 7107 (8.0%) | 13361 (15.0%) | 11950 (13.4%) | 32570 (36.5%) | 59% of 2700 | 0/0/10 | 7.07/8.7/9.78/10 | 10.00 "Broken Run" (A10/C10; balanced seed 3 #66, yr 20.3, critic gen 0) |  |
| ALL | ref_no_era_bar | y30+ | 8100 | 7.52 | 7.43 | 254 (3.1%) | 254 (3.1%) | 250 (3.1%) | 727 (9.0%) | 660 (8.2%) | 2198 (27.1%) | 92% of 2700 | 0/0/0 | 6.87/7.67/8.87/9.48 | 9.97 "Lost Legacy 4" (A9.94/C10; balanced seed 30 #98, yr 30.1, critic gen 0) |  |
| ALL | ref_era_bar_0.08 | y0-5 | 43200 | 6.91 | 6.92 | 799 (1.9%) | 799 (1.9%) | 769 (1.8%) | 1553 (3.6%) | 1675 (3.9%) | 7693 (17.8%) | 81% of 2700 | 0/0/1 | 6.72/8.15/9.27/9.73 | 9.98 "Last Horizon" (A9.96/C10; quality-first seed 87 #16, yr 4.9, critic gen 0) |  |
| ALL | ref_era_bar_0.08 | y5-10 | 43200 | 7.45 | 7.44 | 4601 (10.7%) | 4601 (10.7%) | 4476 (10.4%) | 5628 (13.0%) | 5537 (12.8%) | 15746 (36.5%) | 55% of 2700 | 0/0/5 | 6.76/8.18/9.69/10 | 10.00 "Silver Run" (A10/C10; balanced seed 10 #23, yr 7.1, critic gen 0) |  |
| ALL | ref_era_bar_0.08 | y10-15 | 43200 | 7.55 | 7.52 | 5110 (11.8%) | 5110 (11.8%) | 4976 (11.5%) | 6799 (15.7%) | 6867 (15.9%) | 16800 (38.9%) | 57% of 2700 | 0/0/6 | 6.86/8.21/9.74/10 | 10.00 "Midnight Code" (A10/C10; selective-self-funder seed 7 #42, yr 12.9, critic gen 0) |  |
| ALL | ref_era_bar_0.08 | y15-20 | 43200 | 7.52 | 7.49 | 3933 (9.1%) | 3933 (9.1%) | 3851 (8.9%) | 6303 (14.6%) | 6041 (14.0%) | 15983 (37.0%) | 65% of 2700 | 0/0/5 | 6.87/8.05/9.73/10 | 10.00 "Wild Night" (A10/C10; balanced seed 7 #59, yr 18.1, critic gen 0) |  |
| ALL | ref_era_bar_0.08 | y20-30 | 89100 | 7.26 | 7.21 | 2750 (3.1%) | 2750 (3.1%) | 2612 (2.9%) | 6453 (7.2%) | 6224 (7.0%) | 24583 (27.6%) | 75% of 2700 | 0/0/4 | 6.82/7.78/9.6/9.99 | 10.00 "Lost Edge" (A10/C10; balanced seed 6 #88, yr 27.1, critic gen 0) |  |
| ALL | ref_era_bar_0.08 | y30+ | 8100 | 7.06 | 7.02 | 53 (0.7%) | 53 (0.7%) | 51 (0.6%) | 255 (3.1%) | 261 (3.2%) | 1552 (19.2%) | 98% of 2700 | 0/0/0 | 6.35/7.11/8.52/9.24 | 9.84 "Midnight Night" (A9.68/C10; balanced seed 162 #100, yr 30.8, critic gen 0) |  |
| ALL | critic_mild | y0-5 | 43200 | 7.08 | 7.08 | 1565 (3.6%) | 1565 (3.6%) | 1509 (3.5%) | 2362 (5.5%) | 2379 (5.5%) | 9814 (22.7%) | 70% of 2700 | 0/0/2 | 7/8.3/9.43/9.84 | 10.00 "Silver Edge" (A10/C10; selective-self-funder seed 46 #12, yr 3.7, critic gen 0) |  |
| ALL | critic_mild | y5-10 | 43200 | 7.72 | 7.58 | 6403 (14.8%) | 6403 (14.8%) | 6178 (14.3%) | 8386 (19.4%) | 6626 (15.3%) | 17241 (39.9%) | 54% of 2700 | 0/0/7 | 6.88/8.51/9.78/10 | 10.00 "Dead Protocol" (A10/C10; balanced seed 6 #32, yr 9.8, critic gen 1) |  |
| ALL | critic_mild | y10-15 | 43200 | 7.76 | 7.50 | 5722 (13.3%) | 5722 (13.3%) | 5637 (13.1%) | 9080 (21.0%) | 5264 (12.2%) | 17359 (40.2%) | 55% of 2700 | 0/0/6 | 6.83/8.41/9.75/10 | 10.00 "Iron Rising" (A10/C10; selective-self-funder seed 10 #39, yr 12.0, critic gen 1) |  |
| ALL | critic_mild | y15-20 | 43200 | 7.61 | 7.15 | 2893 (6.7%) | 2893 (6.7%) | 2790 (6.5%) | 7018 (16.3%) | 2846 (6.6%) | 14795 (34.3%) | 68% of 2700 | 0/0/4 | 6.83/8.07/9.6/10 | 10.00 "Broken Night" (A10/C10; balanced seed 23 #50, yr 15.4, critic gen 1) |  |
| ALL | critic_mild | y20-30 | 89100 | 7.29 | 6.67 | 1371 (1.5%) | 1371 (1.5%) | 1338 (1.5%) | 6610 (7.4%) | 1222 (1.4%) | 16230 (18.2%) | 80% of 2700 | 0/0/2 | 6.62/7.64/9.34/9.83 | 9.99 "Lost Code" (A10/C9.98; balanced seed 42 #71, yr 21.9, critic gen 2) |  |
| ALL | critic_mild | y30+ | 8100 | 7.10 | 6.41 | 28 (0.3%) | 28 (0.3%) | 27 (0.3%) | 318 (3.9%) | 21 (0.3%) | 643 (7.9%) | 99% of 2700 | 0/0/0 | 6.07/6.9/8.18/8.97 | 9.73 "Wild Run 3" (A10/C9.46; franchise-builder seed 38 #98, yr 30.1, critic gen 3) |  |
| ALL | critic_moderate | y0-5 | 43200 | 7.08 | 7.08 | 1565 (3.6%) | 1565 (3.6%) | 1509 (3.5%) | 2362 (5.5%) | 2379 (5.5%) | 9814 (22.7%) | 70% of 2700 | 0/0/2 | 7/8.3/9.43/9.84 | 10.00 "Silver Edge" (A10/C10; selective-self-funder seed 46 #12, yr 3.7, critic gen 0) |  |
| ALL | critic_moderate | y5-10 | 43200 | 7.72 | 7.44 | 5227 (12.1%) | 5227 (12.1%) | 5087 (11.8%) | 8395 (19.4%) | 5207 (12.1%) | 16501 (38.2%) | 55% of 2700 | 0/0/6 | 6.85/8.43/9.73/10 | 10.00 "Dead Protocol" (A10/C10; balanced seed 6 #32, yr 9.8, critic gen 1) |  |
| ALL | critic_moderate | y10-15 | 43200 | 7.78 | 7.24 | 4046 (9.4%) | 4046 (9.4%) | 3830 (8.9%) | 9182 (21.3%) | 3454 (8.0%) | 16207 (37.5%) | 57% of 2700 | 0/0/5 | 6.78/8.34/9.66/9.99 | 10.00 "Dead Protocol 2" (A10/C10; balanced seed 6 #37, yr 11.4, critic gen 1) |  |
| ALL | critic_moderate | y15-20 | 43200 | 7.62 | 6.86 | 1982 (4.6%) | 1982 (4.6%) | 1943 (4.5%) | 7111 (16.5%) | 1464 (3.4%) | 12751 (29.5%) | 71% of 2700 | 0/0/3 | 6.65/8.04/9.47/9.81 | 9.91 "Red Run" (A10/C9.82; selective-self-funder seed 74 #51, yr 15.7, critic gen 2) |  |
| ALL | critic_moderate | y20-30 | 89100 | 7.31 | 6.39 | 690 (0.8%) | 690 (0.8%) | 687 (0.8%) | 6963 (7.8%) | 255 (0.3%) | 11685 (13.1%) | 87% of 2700 | 0/0/1 | 6.46/7.82/9.13/9.62 | 9.67 "Midnight Signal" (A10/C9.34; selective-self-funder seed 7 #88, yr 27.1, critic gen 4) |  |
| ALL | critic_moderate | y30+ | 8100 | 7.12 | 6.23 | 19 (0.2%) | 19 (0.2%) | 19 (0.2%) | 329 (4.1%) | 10 (0.1%) | 510 (6.3%) | 99% of 2700 | 0/0/0 | 5.99/6.95/8.07/8.9 | 9.66 "Iron Horizon" (A10/C9.33; franchise-builder seed 213 #100, yr 30.8, critic gen 5) |  |
| ALL | critic_strong | y0-5 | 43200 | 7.08 | 7.08 | 1565 (3.6%) | 1565 (3.6%) | 1509 (3.5%) | 2362 (5.5%) | 2379 (5.5%) | 9814 (22.7%) | 70% of 2700 | 0/0/2 | 7/8.3/9.43/9.84 | 10.00 "Silver Edge" (A10/C10; selective-self-funder seed 46 #12, yr 3.7, critic gen 0) |  |
| ALL | critic_strong | y5-10 | 43200 | 7.72 | 7.31 | 4448 (10.3%) | 4448 (10.3%) | 4356 (10.1%) | 8402 (19.4%) | 4088 (9.5%) | 15889 (36.8%) | 55% of 2700 | 0/0/5 | 6.75/8.38/9.63/10 | 10.00 "Dead Protocol" (A10/C10; balanced seed 6 #32, yr 9.8, critic gen 1) |  |
| ALL | critic_strong | y10-15 | 43200 | 7.79 | 6.98 | 2269 (5.3%) | 2269 (5.3%) | 2043 (4.7%) | 9279 (21.5%) | 1212 (2.8%) | 14973 (34.7%) | 68% of 2700 | 0/0/3 | 6.57/8.19/9.41/9.79 | 9.81 "Lost Edge" (A10/C9.61; quality-first seed 73 #48, yr 14.8, critic gen 2) |  |
| ALL | critic_strong | y15-20 | 43200 | 7.64 | 6.46 | 682 (1.6%) | 682 (1.6%) | 649 (1.5%) | 7228 (16.7%) | 368 (0.8%) | 9463 (21.9%) | 83% of 2700 | 0/0/1 | 6.41/7.84/9.12/9.52 | 9.54 "Dead Night" (A10/C9.08; balanced seed 221 #51, yr 15.7, critic gen 3) |  |
| ALL | critic_strong | y20-30 | 89100 | 7.35 | 5.83 | 134 (0.1%) | 134 (0.1%) | 130 (0.1%) | 7360 (8.3%) | 0 (0.0%) | 5161 (5.8%) | 96% of 2700 | 0/0/0 | 6.17/7.72/8.75/9.19 | 9.25 "Midnight Signal" (A10/C8.49; selective-self-funder seed 7 #88, yr 27.1, critic gen 5) |  |
| ALL | critic_strong | y30+ | 8100 | 7.16 | 5.68 | 3 (0.0%) | 3 (0.0%) | 2 (0.0%) | 357 (4.4%) | 0 (0.0%) | 179 (2.2%) | 100% of 2700 | 0/0/0 | 5.73/6.75/7.85/8.52 | 9.24 "Silver Run" (A10/C8.47; franchise-builder seed 48 #100, yr 30.8, critic gen 6) |  |
| ALL | critic_moderate_subtract | y0-5 | 43200 | 7.08 | 7.08 | 1565 (3.6%) | 1565 (3.6%) | 1509 (3.5%) | 2362 (5.5%) | 2379 (5.5%) | 9814 (22.7%) | 70% of 2700 | 0/0/2 | 7/8.3/9.43/9.84 | 10.00 "Silver Edge" (A10/C10; selective-self-funder seed 46 #12, yr 3.7, critic gen 0) |  |
| ALL | critic_moderate_subtract | y5-10 | 43200 | 7.72 | 7.37 | 5112 (11.8%) | 5112 (11.8%) | 4958 (11.5%) | 8412 (19.5%) | 5127 (11.9%) | 16260 (37.6%) | 55% of 2700 | 0/0/6 | 6.82/8.44/9.74/10 | 10.00 "Dead Protocol" (A10/C10; balanced seed 6 #32, yr 9.8, critic gen 1) |  |
| ALL | critic_moderate_subtract | y10-15 | 43200 | 7.79 | 7.11 | 3871 (9.0%) | 3871 (9.0%) | 3674 (8.5%) | 9358 (21.7%) | 3225 (7.5%) | 15836 (36.7%) | 57% of 2700 | 0/0/5 | 6.72/8.44/9.67/9.94 | 10.00 "Dead Protocol 2" (A10/C10; balanced seed 6 #37, yr 11.4, critic gen 1) |  |
| ALL | critic_moderate_subtract | y15-20 | 43200 | 7.66 | 6.67 | 2043 (4.7%) | 2043 (4.7%) | 1920 (4.4%) | 7392 (17.1%) | 1509 (3.5%) | 11914 (27.6%) | 70% of 2700 | 0/0/3 | 6.55/8.18/9.5/9.91 | 9.94 "Dead Night" (A10/C9.88; balanced seed 221 #51, yr 15.7, critic gen 2) |  |
| ALL | critic_moderate_subtract | y20-30 | 89100 | 7.37 | 6.11 | 832 (0.9%) | 832 (0.9%) | 802 (0.9%) | 7741 (8.7%) | 320 (0.4%) | 10030 (11.3%) | 85% of 2700 | 0/0/1 | 6.3/7.99/9.13/9.7 | 9.71 "Midnight Signal" (A10/C9.41; selective-self-funder seed 7 #88, yr 27.1, critic gen 4) |  |
| ALL | critic_moderate_subtract | y30+ | 8100 | 7.19 | 5.94 | 30 (0.4%) | 30 (0.4%) | 29 (0.4%) | 417 (5.2%) | 9 (0.1%) | 468 (5.8%) | 99% of 2700 | 0/0/0 | 5.77/6.97/8.13/8.98 | 9.55 "Iron Storm" (A9.69/C9.4; selective-self-funder seed 65 #99, yr 30.5, critic gen 5) |  |
| ALL | audience_mild | y0-5 | 43200 | 7.08 | 7.08 | 1565 (3.6%) | 1565 (3.6%) | 1509 (3.5%) | 2362 (5.5%) | 2379 (5.5%) | 9814 (22.7%) | 70% of 2700 | 0/0/2 | 7/8.3/9.43/9.84 | 10.00 "Silver Edge" (A10/C10; selective-self-funder seed 46 #12, yr 3.7, critic gen 0) |  |
| ALL | audience_mild | y5-10 | 43200 | 7.72 | 7.68 | 6939 (16.1%) | 6939 (16.1%) | 6791 (15.7%) | 8359 (19.4%) | 8236 (19.1%) | 17745 (41.1%) | 53% of 2700 | 0/0/7 | 6.92/8.54/9.81/10 | 10.00 "Dead Protocol" (A10/C10; balanced seed 6 #32, yr 9.8, critic gen 0) |  |
| ALL | audience_mild | y10-15 | 43200 | 7.69 | 7.72 | 6564 (15.2%) | 6564 (15.2%) | 6358 (14.7%) | 8306 (19.2%) | 8405 (19.5%) | 17923 (41.5%) | 54% of 2700 | 0/0/7 | 6.91/8.5/9.81/10 | 10.00 "Iron Rising" (A10/C10; selective-self-funder seed 10 #39, yr 12.0, critic gen 0) |  |
| ALL | audience_mild | y15-20 | 43200 | 7.48 | 7.54 | 3848 (8.9%) | 3848 (8.9%) | 3818 (8.8%) | 6106 (14.1%) | 6201 (14.3%) | 16087 (37.2%) | 65% of 2700 | 0/0/5 | 6.88/8.12/9.71/10 | 10.00 "Wild Night" (A10/C10; balanced seed 7 #59, yr 18.1, critic gen 0) |  |
| ALL | audience_mild | y20-30 | 89100 | 7.09 | 7.21 | 2239 (2.5%) | 2239 (2.5%) | 2209 (2.5%) | 4250 (4.8%) | 6074 (6.8%) | 20702 (23.2%) | 77% of 2700 | 0/0/3 | 6.77/7.67/9.53/9.92 | 10.00 "Midnight Signal" (A10/C10; selective-self-funder seed 7 #88, yr 27.1, critic gen 0) |  |
| ALL | audience_mild | y30+ | 8100 | 6.85 | 7.02 | 62 (0.8%) | 62 (0.8%) | 59 (0.7%) | 111 (1.4%) | 283 (3.5%) | 1088 (13.4%) | 98% of 2700 | 0/0/0 | 6.26/7/8.4/9.22 | 9.89 "Lost Signal" (A10/C9.78; selective-self-funder seed 59 #98, yr 30.1, critic gen 0) |  |
| ALL | audience_moderate | y0-5 | 43200 | 7.08 | 7.08 | 1565 (3.6%) | 1565 (3.6%) | 1509 (3.5%) | 2362 (5.5%) | 2379 (5.5%) | 9814 (22.7%) | 70% of 2700 | 0/0/2 | 7/8.3/9.43/9.84 | 10.00 "Silver Edge" (A10/C10; selective-self-funder seed 46 #12, yr 3.7, critic gen 0) |  |
| ALL | audience_moderate | y5-10 | 43200 | 7.72 | 7.68 | 6939 (16.1%) | 6939 (16.1%) | 6791 (15.7%) | 8359 (19.4%) | 8236 (19.1%) | 17745 (41.1%) | 53% of 2700 | 0/0/7 | 6.92/8.54/9.81/10 | 10.00 "Dead Protocol" (A10/C10; balanced seed 6 #32, yr 9.8, critic gen 0) |  |
| ALL | audience_moderate | y10-15 | 43200 | 7.61 | 7.72 | 6036 (14.0%) | 6036 (14.0%) | 5932 (13.7%) | 6238 (14.4%) | 8428 (19.5%) | 17638 (40.8%) | 55% of 2700 | 0/0/7 | 6.86/8.47/9.75/10 | 10.00 "Iron Rising" (A10/C10; selective-self-funder seed 10 #39, yr 12.0, critic gen 0) |  |
| ALL | audience_moderate | y15-20 | 43200 | 7.45 | 7.54 | 3822 (8.8%) | 3822 (8.8%) | 3779 (8.8%) | 5226 (12.1%) | 6209 (14.4%) | 16020 (37.1%) | 65% of 2700 | 0/0/5 | 6.87/8.12/9.68/10 | 10.00 "Wild Night" (A10/C10; balanced seed 7 #59, yr 18.1, critic gen 0) |  |
| ALL | audience_moderate | y20-30 | 89100 | 6.99 | 7.22 | 1968 (2.2%) | 1968 (2.2%) | 1832 (2.1%) | 2774 (3.1%) | 6221 (7.0%) | 19688 (22.1%) | 77% of 2700 | 0/0/3 | 6.68/7.69/9.45/9.89 | 10.00 "Midnight Signal" (A10/C10; selective-self-funder seed 7 #88, yr 27.1, critic gen 0) |  |
| ALL | audience_moderate | y30+ | 8100 | 6.65 | 7.04 | 45 (0.6%) | 45 (0.6%) | 45 (0.6%) | 52 (0.6%) | 291 (3.6%) | 991 (12.2%) | 99% of 2700 | 0/0/0 | 6.17/6.9/8.31/9.16 | 9.83 "Lost Signal" (A9.88/C9.78; selective-self-funder seed 59 #98, yr 30.1, critic gen 0) |  |
| ALL | audience_strong | y0-5 | 43200 | 7.08 | 7.08 | 1565 (3.6%) | 1565 (3.6%) | 1509 (3.5%) | 2362 (5.5%) | 2379 (5.5%) | 9814 (22.7%) | 70% of 2700 | 0/0/2 | 7/8.3/9.43/9.84 | 10.00 "Silver Edge" (A10/C10; selective-self-funder seed 46 #12, yr 3.7, critic gen 0) |  |
| ALL | audience_strong | y5-10 | 43200 | 7.62 | 7.68 | 6375 (14.8%) | 6375 (14.8%) | 6175 (14.3%) | 6747 (15.6%) | 8238 (19.1%) | 17227 (39.9%) | 54% of 2700 | 0/0/7 | 6.88/8.51/9.77/10 | 10.00 "Dead Protocol" (A10/C10; balanced seed 6 #32, yr 9.8, critic gen 0) |  |
| ALL | audience_strong | y10-15 | 43200 | 7.54 | 7.72 | 5695 (13.2%) | 5695 (13.2%) | 5544 (12.8%) | 4772 (11.1%) | 8365 (19.4%) | 17337 (40.1%) | 55% of 2700 | 0/0/6 | 6.83/8.43/9.71/10 | 10.00 "Iron Rising" (A10/C10; selective-self-funder seed 10 #39, yr 12.0, critic gen 0) |  |
| ALL | audience_strong | y15-20 | 43200 | 7.20 | 7.55 | 2902 (6.7%) | 2902 (6.7%) | 2794 (6.5%) | 2847 (6.6%) | 6259 (14.5%) | 14754 (34.1%) | 68% of 2700 | 0/0/4 | 6.82/8.07/9.59/9.95 | 10.00 "Broken Night" (A10/C10; balanced seed 23 #50, yr 15.4, critic gen 0) |  |
| ALL | audience_strong | y20-30 | 89100 | 6.73 | 7.24 | 1456 (1.6%) | 1456 (1.6%) | 1429 (1.6%) | 1529 (1.7%) | 6424 (7.2%) | 16537 (18.6%) | 79% of 2700 | 0/0/2 | 6.65/7.97/9.34/9.83 | 9.94 "Dead Pulse" (A9.88/C10; balanced seed 27 #72, yr 22.1, critic gen 0) |  |
| ALL | audience_strong | y30+ | 8100 | 6.48 | 7.07 | 36 (0.4%) | 36 (0.4%) | 35 (0.4%) | 37 (0.5%) | 336 (4.2%) | 707 (8.7%) | 99% of 2700 | 0/0/0 | 6.08/7.06/8.22/9.02 | 9.68 "Dead Pulse 3" (A9.37/C10; franchise-builder seed 126 #98, yr 30.1, critic gen 0) |  |
| ALL | combo_A | y0-5 | 43200 | 7.08 | 7.08 | 1565 (3.6%) | 1565 (3.6%) | 1509 (3.5%) | 2362 (5.5%) | 2379 (5.5%) | 9814 (22.7%) | 70% of 2700 | 0/0/2 | 7/8.3/9.43/9.84 | 10.00 "Silver Edge" (A10/C10; selective-self-funder seed 46 #12, yr 3.7, critic gen 0) |  |
| ALL | combo_A | y5-10 | 43200 | 7.72 | 7.58 | 6403 (14.8%) | 6403 (14.8%) | 6178 (14.3%) | 8386 (19.4%) | 6626 (15.3%) | 17241 (39.9%) | 54% of 2700 | 0/0/7 | 6.88/8.51/9.78/10 | 10.00 "Dead Protocol" (A10/C10; balanced seed 6 #32, yr 9.8, critic gen 1) |  |
| ALL | combo_A | y10-15 | 43200 | 7.70 | 7.50 | 5282 (12.2%) | 5282 (12.2%) | 5089 (11.8%) | 8363 (19.4%) | 5304 (12.3%) | 17078 (39.5%) | 55% of 2700 | 0/0/6 | 6.81/8.39/9.75/10 | 10.00 "Iron Rising" (A10/C10; selective-self-funder seed 10 #39, yr 12.0, critic gen 1) |  |
| ALL | combo_A | y15-20 | 43200 | 7.50 | 7.16 | 2633 (6.1%) | 2633 (6.1%) | 2587 (6.0%) | 6244 (14.4%) | 2866 (6.6%) | 14096 (32.6%) | 68% of 2700 | 0/0/4 | 6.78/8.03/9.55/10 | 10.00 "Broken Night" (A10/C10; balanced seed 23 #50, yr 15.4, critic gen 1) |  |
| ALL | combo_A | y20-30 | 89100 | 7.13 | 6.68 | 1197 (1.3%) | 1197 (1.3%) | 1181 (1.3%) | 4663 (5.2%) | 1292 (1.4%) | 14154 (15.9%) | 80% of 2700 | 0/0/2 | 6.59/7.88/9.32/9.77 | 9.99 "Lost Code" (A10/C9.98; balanced seed 42 #71, yr 21.9, critic gen 2) |  |
| ALL | combo_A | y30+ | 8100 | 6.92 | 6.45 | 21 (0.3%) | 21 (0.3%) | 19 (0.2%) | 145 (1.8%) | 28 (0.3%) | 544 (6.7%) | 99% of 2700 | 0/0/0 | 6/6.95/8.06/8.89 | 9.54 "Iron Night 4" (A9.8/C9.27; franchise-builder seed 73 #98, yr 30.1, critic gen 3) |  |
| ALL | combo_B | y0-5 | 43200 | 7.08 | 7.08 | 1565 (3.6%) | 1565 (3.6%) | 1509 (3.5%) | 2362 (5.5%) | 2379 (5.5%) | 9814 (22.7%) | 70% of 2700 | 0/0/2 | 7/8.3/9.43/9.84 | 10.00 "Silver Edge" (A10/C10; selective-self-funder seed 46 #12, yr 3.7, critic gen 0) |  |
| ALL | combo_B | y5-10 | 43200 | 7.72 | 7.44 | 5227 (12.1%) | 5227 (12.1%) | 5087 (11.8%) | 8395 (19.4%) | 5207 (12.1%) | 16501 (38.2%) | 55% of 2700 | 0/0/6 | 6.85/8.43/9.73/10 | 10.00 "Dead Protocol" (A10/C10; balanced seed 6 #32, yr 9.8, critic gen 1) |  |
| ALL | combo_B | y10-15 | 43200 | 7.63 | 7.25 | 3149 (7.3%) | 3149 (7.3%) | 2961 (6.8%) | 6395 (14.8%) | 3464 (8.0%) | 15528 (35.9%) | 60% of 2700 | 0/0/4 | 6.71/8.32/9.61/9.99 | 10.00 "Dead Protocol 2" (A10/C10; balanced seed 6 #37, yr 11.4, critic gen 1) |  |
| ALL | combo_B | y15-20 | 43200 | 7.48 | 6.86 | 1546 (3.6%) | 1546 (3.6%) | 1457 (3.4%) | 5390 (12.5%) | 1469 (3.4%) | 11364 (26.3%) | 72% of 2700 | 0/0/2 | 6.59/7.99/9.4/9.89 | 9.91 "Red Run" (A10/C9.82; selective-self-funder seed 74 #51, yr 15.7, critic gen 2) |  |
| ALL | combo_B | y20-30 | 89100 | 7.04 | 6.40 | 388 (0.4%) | 388 (0.4%) | 387 (0.4%) | 3128 (3.5%) | 257 (0.3%) | 8164 (9.2%) | 90% of 2700 | 0/0/0 | 6.34/7.79/8.96/9.66 | 9.67 "Dead Edge" (A10/C9.34; selective-self-funder seed 6 #88, yr 27.1, critic gen 4) |  |
| ALL | combo_B | y30+ | 8100 | 6.72 | 6.25 | 10 (0.1%) | 10 (0.1%) | 9 (0.1%) | 72 (0.9%) | 6 (0.1%) | 225 (2.8%) | 100% of 2700 | 0/0/0 | 5.8/6.83/7.94/8.64 | 9.60 "Iron Horizon" (A9.87/C9.33; franchise-builder seed 213 #100, yr 30.8, critic gen 5) |  |
| ALL | combo_C | y0-5 | 43200 | 7.08 | 7.08 | 1565 (3.6%) | 1565 (3.6%) | 1509 (3.5%) | 2362 (5.5%) | 2379 (5.5%) | 9814 (22.7%) | 70% of 2700 | 0/0/2 | 7/8.3/9.43/9.84 | 10.00 "Silver Edge" (A10/C10; selective-self-funder seed 46 #12, yr 3.7, critic gen 0) |  |
| ALL | combo_C | y5-10 | 43200 | 7.72 | 7.31 | 4448 (10.3%) | 4448 (10.3%) | 4356 (10.1%) | 8402 (19.4%) | 4088 (9.5%) | 15889 (36.8%) | 55% of 2700 | 0/0/5 | 6.75/8.38/9.63/10 | 10.00 "Dead Protocol" (A10/C10; balanced seed 6 #32, yr 9.8, critic gen 1) |  |
| ALL | combo_C | y10-15 | 43200 | 7.73 | 6.99 | 1904 (4.4%) | 1904 (4.4%) | 1782 (4.1%) | 8589 (19.9%) | 1237 (2.9%) | 14683 (34.0%) | 69% of 2700 | 0/0/3 | 6.59/8.22/9.41/9.79 | 9.81 "Lost Edge" (A10/C9.61; quality-first seed 73 #48, yr 14.8, critic gen 2) |  |
| ALL | combo_C | y15-20 | 43200 | 7.55 | 6.47 | 492 (1.1%) | 492 (1.1%) | 484 (1.1%) | 6508 (15.1%) | 371 (0.9%) | 8993 (20.8%) | 87% of 2700 | 0/0/1 | 6.4/7.89/9.06/9.52 | 9.54 "Dead Night" (A10/C9.08; balanced seed 221 #51, yr 15.7, critic gen 3) |  |
| ALL | combo_C | y20-30 | 89100 | 7.20 | 5.85 | 87 (0.1%) | 87 (0.1%) | 81 (0.1%) | 5168 (5.8%) | 0 (0.0%) | 3948 (4.4%) | 97% of 2700 | 0/0/0 | 6.12/7.67/8.68/9.2 | 9.25 "Midnight Signal" (A10/C8.49; selective-self-funder seed 7 #88, yr 27.1, critic gen 5) |  |
| ALL | combo_C | y30+ | 8100 | 6.98 | 5.71 | 5 (0.1%) | 5 (0.1%) | 5 (0.1%) | 161 (2.0%) | 0 (0.0%) | 122 (1.5%) | 100% of 2700 | 0/0/0 | 5.64/6.73/7.72/8.41 | 9.24 "Red Pulse" (A10/C8.48; franchise-builder seed 259 #98, yr 30.1, critic gen 6) |  |

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
| balanced | ref_no_era_bar | $27.21M | 25300 | 814.6 | 71% | 100% · #6 | 100% · #6 | 100% | 0 | 100% · #10 | 100% · #10 | 100% | 0 |
| quality-first | ref_no_era_bar | $27.95M | 21297.5 | 685.7 | 57% | 100% · #6 | 100% · #6 | 100% | 0 | 100% · #11 | 100% · #11 | 100% | 0 |
| franchise-builder | ref_no_era_bar | $25.81M | 7297.5 | 234.9 | 71% | 100% · #6 | 100% · #6 | 100% | 0 | 100% · #9 | 100% · #9 | 100% | 0 |
| repeat-farmer | ref_no_era_bar | $33.93M | 5850 | 188.3 | 63% | 100% · #6 | 100% · #6 | 100% | 0 | 100% · #10 | 100% · #10 | 100% | 0 |
| cheap-duds | ref_no_era_bar | $25.50M | 6202.5 | 199.7 | 4% | 100% · #25 | 0% · #— | 100% | 0 | 100% · #39 | 0% · #— | 0% | 0 |
| experimenter | ref_no_era_bar | $30.30M | 20570 | 662.3 | 56% | 100% · #7 | 100% · #7 | 100% | 0 | 100% · #12 | 100% · #12 | 100% | 0 |
| self-funder | ref_no_era_bar | $0.29M | 10167.5 | 327.6 | 100% | 100% · #14 | 0% · #— | 64% | 0 | 100% · #22 | 0% · #— | 0% | 0 |
| selective-self-funder | ref_no_era_bar | $27.25M | 25137.5 | 809.3 | 67% | 100% · #6 | 100% · #6 | 100% | 0 | 100% · #10 | 100% · #10 | 100% | 0 |
| famous-star | ref_no_era_bar | $31.67M | 6807.5 | 219.2 | 100% | 100% · #21 | 0% · #— | 100% | 0 | 100% · #35 | 0% · #— | 0% | 0 |
| balanced | ref_era_bar_0.08 | $27.07M | 19692.5 | 634 | 71% | 100% · #7 | 100% · #7 | 100% | 0 | 100% · #11 | 100% · #12 | 100% | 0 |
| quality-first | ref_era_bar_0.08 | $27.74M | 16152.5 | 520 | 57% | 100% · #8 | 100% · #8 | 100% | 0 | 100% · #14 | 100% · #14 | 100% | 0 |
| franchise-builder | ref_era_bar_0.08 | $24.74M | 6495 | 209.1 | 71% | 100% · #6 | 100% · #7 | 100% | 0 | 100% · #11 | 100% · #11 | 100% | 0 |
| repeat-farmer | ref_era_bar_0.08 | $30.76M | 5600 | 180.3 | 63% | 100% · #7 | 100% · #7 | 100% | 0 | 100% · #12.5 | 100% · #13 | 100% | 0 |
| cheap-duds | ref_era_bar_0.08 | $13.42M | 150 | 4.8 | 4% | 44% · #76 | 0% · #— | 100% | 0 | 0% · #100 | 0% · #— | 0% | 0 |
| experimenter | ref_era_bar_0.08 | $29.81M | 14535 | 468 | 56% | 100% · #10 | 100% · #10 | 100% | 0 | 100% · #16 | 100% · #16 | 100% | 0 |
| self-funder | ref_era_bar_0.08 | $0.28M | 1050 | 33.8 | 100% | 99% · #25 | 0% · #— | 77% | 0 | 53% · #50 | 0% · #— | 0% | 0 |
| selective-self-funder | ref_era_bar_0.08 | $27.12M | 19685 | 633.8 | 67% | 100% · #7 | 100% · #7 | 100% | 0 | 100% · #11 | 100% · #12 | 100% | 0 |
| famous-star | ref_era_bar_0.08 | $22.83M | 225 | 7.2 | 100% | 52% · #51 | 0% · #— | 100% | 0 | 0% · #80 | 0% · #— | 0% | 0 |
| balanced | critic_mild | $27.12M | 18697.5 | 602 | 71% | 100% · #6 | 100% · #7 | 100% | 0 | 100% · #11 | 100% · #11 | 100% | 0 |
| quality-first | critic_mild | $27.73M | 15970 | 514.2 | 57% | 100% · #7 | 100% · #7 | 100% | 0 | 100% · #12 | 100% · #12 | 100% | 0 |
| franchise-builder | critic_mild | $24.91M | 6965 | 224.2 | 71% | 100% · #6 | 100% · #7 | 100% | 0 | 100% · #10 | 100% · #10 | 100% | 0 |
| repeat-farmer | critic_mild | $31.46M | 5750 | 185.1 | 63% | 100% · #6 | 100% · #7 | 100% | 0 | 100% · #11 | 100% · #11 | 100% | 0 |
| cheap-duds | critic_mild | $16.37M | 300 | 9.7 | 4% | 83% · #48 | 0% · #— | 100% | 0 | 1% · #86 | 0% · #— | 0% | 0 |
| experimenter | critic_mild | $30.02M | 14627.5 | 470.9 | 56% | 100% · #8 | 100% · #8 | 100% | 0 | 100% · #14 | 100% · #14 | 100% | 0 |
| self-funder | critic_mild | $0.26M | 3910 | 126.1 | 100% | 100% · #18 | 0% · #— | 68% | 0 | 100% · #27.5 | 0% · #— | 0% | 0 |
| selective-self-funder | critic_mild | $27.34M | 18957.5 | 610.4 | 67% | 100% · #6.5 | 100% · #7 | 100% | 0 | 100% · #10 | 100% · #11 | 100% | 0 |
| famous-star | critic_mild | $26.48M | 525 | 16.9 | 100% | 95% · #33 | 0% · #— | 100% | 0 | 5% · #63.5 | 0% · #— | 0% | 0 |
| balanced | critic_moderate | $27.10M | 17172.5 | 552.9 | 71% | 100% · #6 | 100% · #7 | 100% | 0 | 100% · #11 | 100% · #11 | 100% | 0 |
| quality-first | critic_moderate | $27.76M | 14742.5 | 474.6 | 57% | 100% · #7 | 100% · #7 | 100% | 0 | 100% · #12 | 100% · #12 | 100% | 0 |
| franchise-builder | critic_moderate | $24.87M | 8750 | 281.7 | 71% | 100% · #6 | 100% · #7 | 100% | 0 | 100% · #10 | 100% · #10 | 100% | 0 |
| repeat-farmer | critic_moderate | $30.71M | 5750 | 185.1 | 63% | 100% · #6 | 100% · #7 | 100% | 0 | 100% · #11 | 100% · #11 | 100% | 0 |
| cheap-duds | critic_moderate | $15.93M | 375 | 12.1 | 4% | 83% · #49 | 0% · #— | 100% | 0 | 1% · #88.5 | 0% · #— | 0% | 0 |
| experimenter | critic_moderate | $29.99M | 13537.5 | 435.8 | 56% | 100% · #8 | 100% · #8 | 100% | 0 | 100% · #14 | 100% · #14 | 100% | 0 |
| self-funder | critic_moderate | $0.26M | 3860 | 124.6 | 100% | 100% · #18 | 0% · #— | 68% | 0 | 100% · #28 | 0% · #— | 0% | 0 |
| selective-self-funder | critic_moderate | $27.34M | 17337.5 | 558.2 | 67% | 100% · #6.5 | 100% · #7 | 100% | 0 | 100% · #10 | 100% · #11 | 100% | 0 |
| famous-star | critic_moderate | $26.42M | 525 | 16.9 | 100% | 95% · #33 | 0% · #— | 100% | 0 | 5% · #63.5 | 0% · #— | 0% | 0 |
| balanced | critic_strong | $27.04M | 15780 | 508 | 71% | 100% · #6 | 100% · #7 | 100% | 0 | 100% · #11 | 100% · #11 | 100% | 0 |
| quality-first | critic_strong | $27.76M | 13565 | 436.7 | 57% | 100% · #7 | 100% · #7 | 100% | 0 | 100% · #12 | 100% · #12 | 100% | 0 |
| franchise-builder | critic_strong | $24.75M | 9680 | 311.7 | 71% | 100% · #6 | 100% · #7 | 100% | 0 | 100% · #10 | 100% · #10 | 100% | 0 |
| repeat-farmer | critic_strong | $29.36M | 5750 | 185.1 | 63% | 100% · #6 | 100% · #7 | 100% | 0 | 100% · #11 | 100% · #11 | 100% | 0 |
| cheap-duds | critic_strong | $15.20M | 375 | 12.1 | 4% | 81% · #48 | 0% · #— | 100% | 0 | 1% · #84.5 | 0% · #— | 0% | 0 |
| experimenter | critic_strong | $29.96M | 12630 | 406.6 | 56% | 100% · #8 | 100% · #8 | 100% | 0 | 100% · #14 | 100% · #14 | 100% | 0 |
| self-funder | critic_strong | $0.26M | 3830 | 123.4 | 100% | 100% · #18 | 0% · #— | 69% | 0 | 100% · #28 | 0% · #— | 0% | 0 |
| selective-self-funder | critic_strong | $27.32M | 15972.5 | 514.2 | 67% | 100% · #6.5 | 100% · #7 | 100% | 0 | 100% · #10 | 100% · #11 | 100% | 0 |
| famous-star | critic_strong | $26.21M | 525 | 16.9 | 100% | 95% · #33 | 0% · #— | 100% | 0 | 5% · #63.5 | 0% · #— | 0% | 0 |
| balanced | critic_moderate_subtract | $27.12M | 17022.5 | 548.1 | 71% | 100% · #6 | 100% · #7 | 100% | 0 | 100% · #11 | 100% · #11 | 100% | 0 |
| quality-first | critic_moderate_subtract | $27.76M | 14537.5 | 468 | 57% | 100% · #7 | 100% · #7 | 100% | 0 | 100% · #12 | 100% · #12 | 100% | 0 |
| franchise-builder | critic_moderate_subtract | $24.90M | 10895 | 350.8 | 71% | 100% · #6 | 100% · #7 | 100% | 0 | 100% · #10 | 100% · #10 | 100% | 0 |
| repeat-farmer | critic_moderate_subtract | $29.56M | 5750 | 185.1 | 63% | 100% · #6 | 100% · #7 | 100% | 0 | 100% · #11 | 100% · #11 | 100% | 0 |
| cheap-duds | critic_moderate_subtract | $15.21M | 300 | 9.7 | 4% | 81% · #50 | 0% · #— | 100% | 0 | 1% · #88 | 0% · #— | 0% | 0 |
| experimenter | critic_moderate_subtract | $29.98M | 13435 | 432.5 | 56% | 100% · #8 | 100% · #8 | 100% | 0 | 100% · #14 | 100% · #14 | 100% | 0 |
| self-funder | critic_moderate_subtract | $0.26M | 3860 | 124.3 | 100% | 100% · #18 | 0% · #— | 68% | 0 | 100% · #28 | 0% · #— | 0% | 0 |
| selective-self-funder | critic_moderate_subtract | $27.34M | 17190 | 553.4 | 67% | 100% · #6.5 | 100% · #7 | 100% | 0 | 100% · #10 | 100% · #11 | 100% | 0 |
| famous-star | critic_moderate_subtract | $26.19M | 525 | 16.9 | 100% | 95% · #33 | 0% · #— | 100% | 0 | 5% · #63.5 | 0% · #— | 0% | 0 |
| balanced | audience_mild | $27.04M | 20375 | 656 | 71% | 100% · #6 | 100% · #7 | 100% | 0 | 100% · #11 | 100% · #11 | 100% | 0 |
| quality-first | audience_mild | $27.60M | 17040 | 548.6 | 57% | 100% · #7 | 100% · #7 | 100% | 0 | 100% · #12 | 100% · #12 | 100% | 0 |
| franchise-builder | audience_mild | $24.52M | 6572.5 | 211.6 | 71% | 100% · #6 | 100% · #7 | 100% | 0 | 100% · #10 | 100% · #10 | 100% | 0 |
| repeat-farmer | audience_mild | $31.36M | 5750 | 185.1 | 63% | 100% · #6 | 100% · #7 | 100% | 0 | 100% · #11 | 100% · #11 | 100% | 0 |
| cheap-duds | audience_mild | $16.38M | 300 | 9.7 | 4% | 70% · #47 | 0% · #— | 100% | 0 | 0% · #— | 0% · #— | 0% | 0 |
| experimenter | audience_mild | $29.85M | 15842.5 | 510.1 | 56% | 100% · #8 | 100% · #8 | 100% | 0 | 100% · #14 | 100% · #14 | 100% | 0 |
| self-funder | audience_mild | $0.26M | 3825 | 123.3 | 100% | 100% · #18 | 0% · #— | 68% | 0 | 100% · #27 | 0% · #— | 0% | 0 |
| selective-self-funder | audience_mild | $27.24M | 20527.5 | 660.9 | 67% | 100% · #6.5 | 100% · #7 | 100% | 0 | 100% · #10 | 100% · #11 | 100% | 0 |
| famous-star | audience_mild | $25.81M | 450 | 14.5 | 100% | 91% · #33 | 0% · #— | 100% | 0 | 2% · #64 | 0% · #— | 0% | 0 |
| balanced | audience_moderate | $26.99M | 20040 | 645.2 | 71% | 100% · #6 | 100% · #7 | 100% | 0 | 100% · #11 | 100% · #11 | 100% | 0 |
| quality-first | audience_moderate | $27.48M | 16592.5 | 534.2 | 57% | 100% · #7 | 100% · #7 | 100% | 0 | 100% · #12 | 100% · #12 | 100% | 0 |
| franchise-builder | audience_moderate | $24.37M | 6750 | 217.3 | 71% | 100% · #6 | 100% · #7 | 100% | 0 | 100% · #10 | 100% · #10 | 100% | 0 |
| repeat-farmer | audience_moderate | $30.55M | 5750 | 185.1 | 63% | 100% · #6 | 100% · #7 | 100% | 0 | 100% · #11 | 100% · #11 | 100% | 0 |
| cheap-duds | audience_moderate | $15.94M | 225 | 7.2 | 4% | 55% · #47 | 0% · #— | 100% | 0 | 0% · #— | 0% · #— | 0% | 0 |
| experimenter | audience_moderate | $29.70M | 15175 | 488.6 | 56% | 100% · #8 | 100% · #8 | 100% | 0 | 100% · #14 | 100% · #14 | 100% | 0 |
| self-funder | audience_moderate | $0.25M | 3735 | 120.4 | 100% | 100% · #18 | 0% · #— | 68% | 0 | 100% · #27 | 0% · #— | 0% | 0 |
| selective-self-funder | audience_moderate | $27.21M | 20190 | 650 | 67% | 100% · #6.5 | 100% · #7 | 100% | 0 | 100% · #10 | 100% · #11 | 100% | 0 |
| famous-star | audience_moderate | $24.91M | 375 | 12.1 | 100% | 83% · #32 | 0% · #— | 100% | 0 | 1% · #82 | 0% · #— | 0% | 0 |
| balanced | audience_strong | $26.82M | 18940 | 609.8 | 71% | 100% · #6 | 100% · #7 | 100% | 0 | 100% · #11 | 100% · #11 | 100% | 0 |
| quality-first | audience_strong | $27.03M | 15627.5 | 503.1 | 57% | 100% · #7 | 100% · #7 | 100% | 0 | 100% · #12 | 100% · #12 | 100% | 0 |
| franchise-builder | audience_strong | $23.46M | 7742.5 | 249.3 | 71% | 100% · #6 | 100% · #7 | 100% | 0 | 100% · #10 | 100% · #10 | 100% | 0 |
| repeat-farmer | audience_strong | $28.25M | 5750 | 185.1 | 63% | 100% · #6 | 100% · #7 | 100% | 0 | 100% · #11 | 100% · #11 | 100% | 0 |
| cheap-duds | audience_strong | $14.86M | 150 | 4.8 | 4% | 40% · #46 | 0% · #— | 100% | 0 | 0% · #— | 0% · #— | 0% | 0 |
| experimenter | audience_strong | $29.15M | 14500 | 466.8 | 56% | 100% · #8 | 100% · #8 | 100% | 0 | 100% · #14 | 100% · #14 | 100% | 0 |
| self-funder | audience_strong | $0.25M | 3495 | 112.8 | 100% | 100% · #18 | 0% · #— | 68% | 0 | 100% · #27.5 | 0% · #— | 0% | 0 |
| selective-self-funder | audience_strong | $27.05M | 19087.5 | 614.5 | 67% | 100% · #6.5 | 100% · #7 | 100% | 0 | 100% · #10 | 100% · #11 | 100% | 0 |
| famous-star | audience_strong | $23.72M | 300 | 9.7 | 100% | 70% · #35 | 0% · #— | 100% | 0 | 0% · #— | 0% · #— | 0% | 0 |
| balanced | combo_A | $27.06M | 18490 | 595.3 | 71% | 100% · #6 | 100% · #7 | 100% | 0 | 100% · #11 | 100% · #11 | 100% | 0 |
| quality-first | combo_A | $27.56M | 15830 | 509.7 | 57% | 100% · #7 | 100% · #7 | 100% | 0 | 100% · #12 | 100% · #12 | 100% | 0 |
| franchise-builder | combo_A | $24.54M | 7847.5 | 252.7 | 71% | 100% · #6 | 100% · #7 | 100% | 0 | 100% · #10 | 100% · #10 | 100% | 0 |
| repeat-farmer | combo_A | $30.42M | 5750 | 185.1 | 63% | 100% · #6 | 100% · #7 | 100% | 0 | 100% · #11 | 100% · #11 | 100% | 0 |
| cheap-duds | combo_A | $15.72M | 225 | 7.3 | 4% | 71% · #47.5 | 0% · #— | 100% | 0 | 0% · #— | 0% · #— | 0% | 0 |
| experimenter | combo_A | $29.79M | 14315 | 460.9 | 56% | 100% · #8 | 100% · #8 | 100% | 0 | 100% · #14 | 100% · #14 | 100% | 0 |
| self-funder | combo_A | $0.27M | 3760 | 121.1 | 100% | 100% · #18 | 0% · #— | 68% | 0 | 100% · #27.5 | 0% · #— | 0% | 0 |
| selective-self-funder | combo_A | $27.33M | 18695 | 601.9 | 67% | 100% · #6.5 | 100% · #7 | 100% | 0 | 100% · #10 | 100% · #11 | 100% | 0 |
| famous-star | combo_A | $25.68M | 450 | 14.5 | 100% | 91% · #33 | 0% · #— | 100% | 0 | 2% · #64 | 0% · #— | 0% | 0 |
| balanced | combo_B | $27.01M | 16632.5 | 535.5 | 71% | 100% · #6 | 100% · #7 | 100% | 0 | 100% · #11 | 100% · #11 | 100% | 0 |
| quality-first | combo_B | $27.43M | 14075 | 453.2 | 57% | 100% · #7 | 100% · #7 | 100% | 0 | 100% · #12 | 100% · #12 | 100% | 0 |
| franchise-builder | combo_B | $24.42M | 9072.5 | 292.1 | 71% | 100% · #6 | 100% · #7 | 100% | 0 | 100% · #10 | 100% · #10 | 100% | 0 |
| repeat-farmer | combo_B | $28.47M | 5750 | 185.1 | 63% | 100% · #6 | 100% · #7 | 100% | 0 | 100% · #11 | 100% · #11 | 100% | 0 |
| cheap-duds | combo_B | $14.88M | 225 | 7.2 | 4% | 56% · #49 | 0% · #— | 100% | 0 | 0% · #— | 0% · #— | 0% | 0 |
| experimenter | combo_B | $29.59M | 12820 | 412.7 | 56% | 100% · #8 | 100% · #8 | 100% | 0 | 100% · #14 | 100% · #14 | 100% | 0 |
| self-funder | combo_B | $0.25M | 3622.5 | 116.9 | 100% | 100% · #18 | 0% · #— | 68% | 0 | 100% · #28 | 0% · #— | 0% | 0 |
| selective-self-funder | combo_B | $27.21M | 16687.5 | 537.3 | 67% | 100% · #6.5 | 100% · #7 | 100% | 0 | 100% · #10 | 100% · #11 | 100% | 0 |
| famous-star | combo_B | $24.70M | 375 | 12.1 | 100% | 82% · #32 | 0% · #— | 100% | 0 | 1% · #82 | 0% · #— | 0% | 0 |
| balanced | combo_C | $26.96M | 15680 | 504.8 | 71% | 100% · #6 | 100% · #7 | 100% | 0 | 100% · #11 | 100% · #11 | 100% | 0 |
| quality-first | combo_C | $27.54M | 13450 | 433 | 57% | 100% · #7 | 100% · #7 | 100% | 0 | 100% · #12 | 100% · #12 | 100% | 0 |
| franchise-builder | combo_C | $24.54M | 10490 | 337.7 | 71% | 100% · #6 | 100% · #7 | 100% | 0 | 100% · #10 | 100% · #10 | 100% | 0 |
| repeat-farmer | combo_C | $27.82M | 5750 | 185.1 | 63% | 100% · #6 | 100% · #7 | 100% | 0 | 100% · #11 | 100% · #11 | 100% | 0 |
| cheap-duds | combo_C | $14.45M | 300 | 9.7 | 4% | 69% · #48 | 0% · #— | 100% | 0 | 0% · #99 | 0% · #— | 0% | 0 |
| experimenter | combo_C | $29.68M | 12335 | 397.1 | 56% | 100% · #8 | 100% · #8 | 100% | 0 | 100% · #14 | 100% · #14 | 100% | 0 |
| self-funder | combo_C | $0.25M | 3660 | 117.8 | 100% | 100% · #18 | 0% · #— | 69% | 0 | 100% · #28 | 0% · #— | 0% | 0 |
| selective-self-funder | combo_C | $27.24M | 15777.5 | 508 | 67% | 100% · #6.5 | 100% · #7 | 100% | 0 | 100% · #10 | 100% · #11 | 100% | 0 |
| famous-star | combo_C | $25.33M | 450 | 14.5 | 100% | 91% · #33 | 0% · #— | 100% | 0 | 2% · #64 | 0% · #— | 0% | 0 |

### Prestige milestones awarded per career (mean)

| Strategy | Variant | audience_7_5 | critic_8_5 | first_hall_of_fame | hall_of_fame | ip_gross_1m | ip_gross_5m | ip_viewers_500k | meters_all_70 | careers > 400 Prestige/yr (OUTDATED threshold) |
|---|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|
| balanced | control | 84.44 | 46.2 | 1 | 23.89 | 3.63 | 2.04 | 3.63 | 94.6 | 100% |
| balanced | ref_no_era_bar | 88.74 | 58.86 | 1 | 37.92 | 3.36 | 1.89 | 3.36 | 95.3 | 100% |
| balanced | ref_era_bar_0.08 | 82.86 | 43.88 | 1 | 18.64 | 3.82 | 2.16 | 3.82 | 93.61 | 100% |
| balanced | critic_mild | 85.46 | 33.44 | 1 | 17.47 | 3.82 | 2.15 | 3.82 | 94.6 | 100% |
| balanced | critic_moderate | 85.86 | 25.06 | 1 | 13.01 | 3.95 | 2.25 | 3.95 | 94.6 | 100% |
| balanced | critic_strong | 86.68 | 16.5 | 1 | 8.64 | 4.29 | 2.41 | 4.29 | 94.6 | 100% |
| balanced | critic_moderate_subtract | 86.38 | 23.25 | 1 | 12.87 | 4.03 | 2.31 | 4.03 | 94.6 | 100% |
| balanced | audience_mild | 83.85 | 46.32 | 1 | 21.03 | 3.7 | 2.08 | 3.7 | 94.6 | 100% |
| balanced | audience_moderate | 80.57 | 46.47 | 1 | 20.19 | 3.74 | 2.12 | 3.74 | 94.6 | 100% |
| balanced | audience_strong | 73.18 | 46.49 | 1 | 17.45 | 3.82 | 2.15 | 3.82 | 94.6 | 100% |
| balanced | combo_A | 84.94 | 33.63 | 1 | 16.45 | 3.86 | 2.19 | 3.86 | 94.6 | 100% |
| balanced | combo_B | 81.82 | 25.01 | 1 | 11.23 | 4.04 | 2.31 | 4.04 | 94.6 | 100% |
| balanced | combo_C | 86.37 | 16.54 | 1 | 7.95 | 4.49 | 2.42 | 4.49 | 94.6 | 100% |
| quality-first | control | 80.93 | 38.38 | 1 | 17.36 | 0 | 0 | 0 | 94.61 | 100% |
| quality-first | ref_no_era_bar | 88.73 | 52.16 | 1 | 27.25 | 0 | 0 | 0 | 95.42 | 100% |
| quality-first | ref_era_bar_0.08 | 79.73 | 35.48 | 1 | 12.51 | 0 | 0 | 0 | 93.67 | 100% |
| quality-first | critic_mild | 80.94 | 28.65 | 1 | 13.5 | 0 | 0 | 0 | 94.61 | 100% |
| quality-first | critic_moderate | 80.93 | 21.89 | 1 | 10.31 | 0 | 0 | 0 | 94.61 | 99% |
| quality-first | critic_strong | 80.86 | 15.11 | 1 | 7.07 | 0 | 0 | 0 | 94.61 | 92% |
| quality-first | critic_moderate_subtract | 80.92 | 20.14 | 1 | 10.05 | 0 | 0 | 0 | 94.61 | 98% |
| quality-first | audience_mild | 80.95 | 38.39 | 1 | 15.22 | 0 | 0 | 0 | 94.61 | 100% |
| quality-first | audience_moderate | 75.33 | 38.4 | 1 | 14.86 | 0 | 0 | 0 | 94.61 | 100% |
| quality-first | audience_strong | 66.93 | 38.36 | 1 | 13.4 | 0 | 0 | 0 | 94.61 | 99% |
| quality-first | combo_A | 80.94 | 28.64 | 1 | 12.85 | 0 | 0 | 0 | 94.61 | 100% |
| quality-first | combo_B | 75.32 | 21.88 | 1 | 9.11 | 0 | 0 | 0 | 94.61 | 96% |
| quality-first | combo_C | 80.88 | 15.11 | 1 | 6.47 | 0 | 0 | 0 | 94.61 | 90% |
| franchise-builder | control | 14.57 | 4.23 | 0.27 | 1.61 | 2.5 | 2.45 | 2.5 | 94.65 | 4% |
| franchise-builder | ref_no_era_bar | 32.75 | 3.71 | 0.19 | 1.47 | 2.28 | 2.27 | 2.28 | 95.37 | 8% |
| franchise-builder | ref_era_bar_0.08 | 14.48 | 4.13 | 0.28 | 1.32 | 2.75 | 2.68 | 2.75 | 93.85 | 2% |
| franchise-builder | critic_mild | 18.15 | 3.43 | 0.3 | 1.38 | 3.05 | 2.87 | 3.05 | 94.65 | 5% |
| franchise-builder | critic_moderate | 23.68 | 3.16 | 0.37 | 1.39 | 3.78 | 3.44 | 3.78 | 94.65 | 6% |
| franchise-builder | critic_strong | 30.74 | 1.96 | 0.27 | 0.83 | 4.98 | 4.38 | 4.98 | 94.65 | 7% |
| franchise-builder | critic_moderate_subtract | 35.6 | 4.42 | 0.58 | 2.24 | 5.38 | 4.66 | 5.38 | 94.65 | 19% |
| franchise-builder | audience_mild | 14.68 | 4.47 | 0.27 | 1.57 | 2.56 | 2.51 | 2.56 | 94.65 | 4% |
| franchise-builder | audience_moderate | 15.65 | 5.19 | 0.32 | 1.81 | 2.75 | 2.64 | 2.75 | 94.65 | 7% |
| franchise-builder | audience_strong | 17.2 | 6.72 | 0.37 | 1.7 | 3.43 | 3.1 | 3.43 | 94.65 | 7% |
| franchise-builder | combo_A | 20.1 | 4.09 | 0.35 | 1.47 | 3.44 | 3.15 | 3.44 | 94.65 | 5% |
| franchise-builder | combo_B | 24.15 | 3.45 | 0.37 | 1.25 | 4.28 | 3.82 | 4.28 | 94.65 | 4% |
| franchise-builder | combo_C | 34.64 | 2.12 | 0.29 | 0.85 | 5.94 | 4.96 | 5.94 | 94.65 | 7% |
| repeat-farmer | control | 6.35 | 0.91 | 0.01 | 0.05 | 1 | 1 | 1 | 94.69 | 0% |
| repeat-farmer | ref_no_era_bar | 24.85 | 1.51 | 0.02 | 0.16 | 1 | 1 | 1 | 95.44 | 1% |
| repeat-farmer | ref_era_bar_0.08 | 5.84 | 0.76 | 0.01 | 0.06 | 1 | 1 | 1 | 93.82 | 0% |
| repeat-farmer | critic_mild | 6.35 | 0.91 | 0.01 | 0.05 | 1 | 1 | 1 | 94.69 | 0% |
| repeat-farmer | critic_moderate | 6.35 | 0.9 | 0.01 | 0.05 | 1 | 1 | 1 | 94.69 | 0% |
| repeat-farmer | critic_strong | 6.35 | 0.89 | 0.01 | 0.05 | 1 | 1 | 1 | 94.69 | 0% |
| repeat-farmer | critic_moderate_subtract | 6.35 | 0.9 | 0.01 | 0.05 | 1 | 1 | 1 | 94.69 | 0% |
| repeat-farmer | audience_mild | 6.35 | 0.91 | 0.01 | 0.05 | 1 | 1 | 1 | 94.69 | 0% |
| repeat-farmer | audience_moderate | 6.35 | 0.91 | 0.01 | 0.05 | 1 | 1 | 1 | 94.69 | 0% |
| repeat-farmer | audience_strong | 6.35 | 0.91 | 0.01 | 0.05 | 1 | 1 | 1 | 94.69 | 0% |
| repeat-farmer | combo_A | 6.35 | 0.91 | 0.01 | 0.05 | 1 | 1 | 1 | 94.69 | 0% |
| repeat-farmer | combo_B | 6.35 | 0.9 | 0.01 | 0.05 | 1 | 1 | 1 | 94.69 | 0% |
| repeat-farmer | combo_C | 6.35 | 0.89 | 0.01 | 0.05 | 1 | 1 | 1 | 94.69 | 0% |
| cheap-duds | control | 4.76 | 0.06 | 0 | 0 | 0 | 0 | 0 | 0 | 0% |
| cheap-duds | ref_no_era_bar | 28.9 | 5.81 | 0.25 | 0.3 | 0 | 0 | 0 | 69.31 | 0% |
| cheap-duds | ref_era_bar_0.08 | 2.44 | 0.05 | 0 | 0 | 0 | 0 | 0 | 0 | 0% |
| cheap-duds | critic_mild | 4.83 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0% |
| cheap-duds | critic_moderate | 4.85 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0% |
| cheap-duds | critic_strong | 4.93 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0% |
| cheap-duds | critic_moderate_subtract | 4.85 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0% |
| cheap-duds | audience_mild | 3.76 | 0.04 | 0 | 0 | 0 | 0 | 0 | 0 | 0% |
| cheap-duds | audience_moderate | 2.88 | 0.04 | 0 | 0 | 0 | 0 | 0 | 0 | 0% |
| cheap-duds | audience_strong | 2.19 | 0.03 | 0 | 0 | 0 | 0 | 0 | 0 | 0% |
| cheap-duds | combo_A | 3.8 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0% |
| cheap-duds | combo_B | 2.9 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0% |
| cheap-duds | combo_C | 3.87 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0% |
| experimenter | control | 79.65 | 38.62 | 1 | 11.92 | 0 | 0 | 0 | 92.02 | 100% |
| experimenter | ref_no_era_bar | 87.87 | 50.67 | 1 | 24.98 | 0 | 0 | 0 | 93.67 | 100% |
| experimenter | ref_era_bar_0.08 | 77.85 | 34.87 | 0.98 | 6.36 | 0 | 0 | 0 | 90.14 | 95% |
| experimenter | critic_mild | 79.64 | 24.84 | 1 | 9.78 | 0 | 0 | 0 | 92.02 | 97% |
| experimenter | critic_moderate | 79.67 | 19.13 | 1 | 7.06 | 0 | 0 | 0 | 92.02 | 88% |
| experimenter | critic_strong | 79.7 | 12.71 | 0.99 | 4.81 | 0 | 0 | 0 | 92.02 | 60% |
| experimenter | critic_moderate_subtract | 79.7 | 18.41 | 1 | 6.6 | 0 | 0 | 0 | 92.02 | 84% |
| experimenter | audience_mild | 75.44 | 38.62 | 1 | 11.72 | 0 | 0 | 0 | 92.02 | 100% |
| experimenter | audience_moderate | 69.35 | 38.64 | 1 | 10.77 | 0 | 0 | 0 | 92.02 | 99% |
| experimenter | audience_strong | 63.36 | 38.62 | 1 | 9.81 | 0 | 0 | 0 | 92.02 | 96% |
| experimenter | combo_A | 75.44 | 24.83 | 1 | 9.48 | 0 | 0 | 0 | 92.02 | 95% |
| experimenter | combo_B | 69.37 | 19.14 | 1 | 6.45 | 0 | 0 | 0 | 92.02 | 61% |
| experimenter | combo_C | 75.42 | 12.71 | 0.99 | 4.76 | 0 | 0 | 0 | 92.02 | 46% |
| self-funder | control | 25.03 | 2.77 | 0.08 | 0.08 | 0 | 0 | 0 | 37.4 | 0% |
| self-funder | ref_no_era_bar | 58.63 | 13.02 | 0.81 | 1.7 | 0 | 0 | 0 | 85.2 | 0% |
| self-funder | ref_era_bar_0.08 | 12.6 | 1.38 | 0 | 0 | 0 | 0 | 0 | 0.32 | 0% |
| self-funder | critic_mild | 25.05 | 1.83 | 0.02 | 0.02 | 0 | 0 | 0 | 37.41 | 0% |
| self-funder | critic_moderate | 25.07 | 1.15 | 0 | 0 | 0 | 0 | 0 | 37.39 | 0% |
| self-funder | critic_strong | 25.07 | 0.68 | 0 | 0 | 0 | 0 | 0 | 37.35 | 0% |
| self-funder | critic_moderate_subtract | 25.06 | 1.13 | 0 | 0 | 0 | 0 | 0 | 37.39 | 0% |
| self-funder | audience_mild | 22.92 | 2.76 | 0.08 | 0.08 | 0 | 0 | 0 | 37.4 | 0% |
| self-funder | audience_moderate | 21.63 | 2.77 | 0.06 | 0.06 | 0 | 0 | 0 | 37.41 | 0% |
| self-funder | audience_strong | 18.43 | 2.76 | 0.02 | 0.02 | 0 | 0 | 0 | 37.36 | 0% |
| self-funder | combo_A | 22.9 | 1.83 | 0.02 | 0.02 | 0 | 0 | 0 | 37.41 | 0% |
| self-funder | combo_B | 21.67 | 1.15 | 0 | 0 | 0 | 0 | 0 | 37.39 | 0% |
| self-funder | combo_C | 22.95 | 0.68 | 0 | 0 | 0 | 0 | 0 | 37.36 | 0% |
| selective-self-funder | control | 84.26 | 46.47 | 1 | 23.88 | 3.63 | 2.04 | 3.63 | 94.56 | 100% |
| selective-self-funder | ref_no_era_bar | 88.52 | 57.93 | 1 | 37.52 | 3.39 | 1.89 | 3.39 | 95.3 | 100% |
| selective-self-funder | ref_era_bar_0.08 | 82.79 | 43.6 | 1 | 18.6 | 3.83 | 2.18 | 3.83 | 93.56 | 100% |
| selective-self-funder | critic_mild | 85.36 | 33.99 | 1 | 17.75 | 3.81 | 2.14 | 3.81 | 94.56 | 100% |
| selective-self-funder | critic_moderate | 85.81 | 25.51 | 1 | 13.27 | 3.88 | 2.23 | 3.88 | 94.56 | 100% |
| selective-self-funder | critic_strong | 86.49 | 16.94 | 1 | 8.93 | 4.25 | 2.35 | 4.25 | 94.56 | 100% |
| selective-self-funder | critic_moderate_subtract | 86.24 | 23.67 | 1 | 13.04 | 4.05 | 2.29 | 4.05 | 94.56 | 100% |
| selective-self-funder | audience_mild | 83.58 | 46.54 | 1 | 21.05 | 3.76 | 2.06 | 3.76 | 94.56 | 100% |
| selective-self-funder | audience_moderate | 80.19 | 46.66 | 1 | 20.18 | 3.81 | 2.09 | 3.81 | 94.56 | 100% |
| selective-self-funder | audience_strong | 72.78 | 46.9 | 1 | 17.66 | 3.85 | 2.15 | 3.85 | 94.56 | 100% |
| selective-self-funder | combo_A | 84.91 | 34.09 | 1 | 16.69 | 3.86 | 2.15 | 3.86 | 94.56 | 100% |
| selective-self-funder | combo_B | 81.51 | 25.4 | 1 | 11.53 | 4.04 | 2.29 | 4.04 | 94.56 | 100% |
| selective-self-funder | combo_C | 86.09 | 16.98 | 1 | 8.25 | 4.51 | 2.3 | 4.51 | 94.56 | 100% |
| famous-star | control | 7.59 | 0.1 | 0 | 0 | 0 | 0 | 0 | 0 | 0% |
| famous-star | ref_no_era_bar | 37.94 | 5.61 | 0.17 | 0.19 | 0 | 0 | 0 | 69.23 | 0% |
| famous-star | ref_era_bar_0.08 | 3.09 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0% |
| famous-star | critic_mild | 7.59 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0% |
| famous-star | critic_moderate | 7.59 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0% |
| famous-star | critic_strong | 7.59 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0% |
| famous-star | critic_moderate_subtract | 7.58 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0% |
| famous-star | audience_mild | 6.22 | 0.1 | 0 | 0 | 0 | 0 | 0 | 0 | 0% |
| famous-star | audience_moderate | 5.17 | 0.1 | 0 | 0 | 0 | 0 | 0 | 0 | 0% |
| famous-star | audience_strong | 3.81 | 0.09 | 0 | 0 | 0 | 0 | 0 | 0 | 0% |
| famous-star | combo_A | 6.22 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0% |
| famous-star | combo_B | 5.17 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0% |
| famous-star | combo_C | 6.22 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0% |

### Diagnostic flags fired

| Variant | Fired |
|---|---|
| control | EARLY_SOFTLOCK, PRESTIGE_TOO_FAST, QUALITY_INFLATION, DEAD_STRATEGY |
| ref_no_era_bar | EARLY_SOFTLOCK, PRESTIGE_TOO_FAST, QUALITY_INFLATION, DEAD_STRATEGY |
| ref_era_bar_0.08 | EARLY_SOFTLOCK, PRESTIGE_TOO_FAST, QUALITY_INFLATION, DEAD_STRATEGY |
| critic_mild | EARLY_SOFTLOCK, PRESTIGE_TOO_FAST, DEAD_STRATEGY |
| critic_moderate | EARLY_SOFTLOCK, PRESTIGE_TOO_FAST, DEAD_STRATEGY |
| critic_strong | EARLY_SOFTLOCK, PRESTIGE_TOO_FAST, DEAD_STRATEGY |
| critic_moderate_subtract | EARLY_SOFTLOCK, PRESTIGE_TOO_FAST, DEAD_STRATEGY |
| audience_mild | EARLY_SOFTLOCK, PRESTIGE_TOO_FAST, DEAD_STRATEGY |
| audience_moderate | EARLY_SOFTLOCK, PRESTIGE_TOO_FAST, DEAD_STRATEGY |
| audience_strong | EARLY_SOFTLOCK, PRESTIGE_TOO_FAST, DEAD_STRATEGY |
| combo_A | EARLY_SOFTLOCK, PRESTIGE_TOO_FAST, DEAD_STRATEGY |
| combo_B | EARLY_SOFTLOCK, PRESTIGE_TOO_FAST, DEAD_STRATEGY |
| combo_C | EARLY_SOFTLOCK, PRESTIGE_TOO_FAST, DEAD_STRATEGY |
