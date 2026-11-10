# Experiment: COMBINED

> **Simulation assumptions, not design locks.** Paired seeds: every variant runs the same seeds and strategies; only the config overrides differ.

Gate 2.5 combined: historical baseline vs the full candidate (config/candidate.json contents inlined). 1,000 paired seeds.

- Seeds 1–1000 (1000) · strategies: balanced, quality-first, cheap-duds, famous-star, self-funder, selective-self-funder, experimenter, franchise-builder, repeat-farmer · reference variant: **historical**
- Ruleset v9.61-movie-kernel-0.1 · measured runtime 538452 ms for 54000 careers

| Variant | Config hash | Note |
|---|---|---|
| historical | 60285097 | Gate 2 behavior `{}` |
| candidate | 9ccc28cc | ladder 4-6-8 + diffusion legs + hybrid Prestige `{"name":"gate25-candidate","_label":"Gate 2.5 combined candidate (PENDING DESIGNER APPROVAL): studio capacity 4->6->8, diffusion legs, hybrid Prestige. Numbers are TEST ASSUMPTIONS.","agents":{"legacyHeuristicStaffCaps":false},"staffCapacity":{"ladder":[4,6,8],"upgradeCosts":[250000,750000],"upgradePrestige":[200,1000]},"audience":{"legsModel":"diffusion"},"prestige":{"repeatScope":"explicit","milestones":[{"id":"meters_all_70","kind":"allMeters","threshold":70,"amount":50,"scope":"release"},{"id":"audience_7_5","kind":"audience","threshold":7.5,"amount":75,"scope":"release"},{"id":"critic_8_5","kind":"critic","threshold":8.5,"amount":85,"scope":"release"},{"id":"hall_of_fame","kind":"hallOfFame","threshold":9,"amount":200,"scope":"release"},{"id":"first_hall_of_fame","kind":"hallOfFame","threshold":9,"amount":100,"scope":"career"},{"id":"ip_gross_1m","kind":"ipLifetimeGross","threshold":1000000,"amount":100,"scope":"ip"},{"id":"ip_gross_5m","kind":"ipLifetimeGross","threshold":5000000,"amount":150,"scope":"ip"},{"id":"ip_viewers_500k","kind":"ipLifetimeViewers","threshold":500000,"amount":150,"scope":"ip"}]}}` |

## 5-production careers

Invariant violations across all variants: **0**.

### Medians by strategy

| Strategy | Variant | endCash | prestige | prestigePerRelease | meanAudience | meanCritic | share8plus | share9plus | shareLate8plus | hofShare | maxStaffEnd | staffCount | meanStaffStat | upgrades | firstUpgradeWeek | years | maxIpFans | negativeCashWeeks |
|---|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|
| balanced | historical | $685K | 75 | 15 | 6.42 | 6.44 | 0% | 0% | 0% | 0% | 999 | 4 | 34.10 | 0 | — | 1.83 | 8697.50 | 2 |
| balanced | candidate | $851K | 75 | 15 | 6.45 | 6.47 | 0% | 0% | 0% | 0% | 4 | 4 | 34.30 | 0 | 64 | 1.83 | 10540.50 | 2 |
| quality-first | historical | $580K | 125 | 25 | 6.52 | 6.54 | 0% | 0% | 0% | 0% | 999 | 5 | 32.75 | 0 | — | 1.83 | 8695.50 | 2 |
| quality-first | candidate | $804K | 75 | 15 | 6.48 | 6.52 | 0% | 0% | 0% | 0% | 4 | 4 | 34.80 | 0 | 64 | 1.83 | 10150.50 | 2 |
| cheap-duds | historical | $453K | 0 | 0 | 5.63 | 5.79 | 0% | 0% | 0% | 0% | 999 | 2 | 35.10 | 0 | — | 1.77 | 1655 | 0 |
| cheap-duds | candidate | $512K | 0 | 0 | 5.63 | 5.79 | 0% | 0% | 0% | 0% | 4 | 2 | 35.10 | 0 | — | 1.81 | 1949 | 0 |
| famous-star | historical | $547K | 0 | 0 | 5.81 | 5.90 | 0% | 0% | 0% | 0% | 999 | 2 | 35.10 | 0 | — | 1.81 | 4127.50 | 7 |
| famous-star | candidate | $601K | 0 | 0 | 5.81 | 5.90 | 0% | 0% | 0% | 0% | 4 | 2 | 35.10 | 0 | — | 1.83 | 4503 | 7 |
| self-funder | historical | $252K | 0 | 0 | 5.86 | 5.89 | 0% | 0% | 0% | 0% | 999 | 2 | 35.10 | 0 | — | 1.77 | 1902.50 | 14 |
| self-funder | candidate | $282K | 0 | 0 | 5.87 | 5.90 | 0% | 0% | 0% | 0% | 4 | 2 | 35.10 | 0 | — | 1.83 | 2141.50 | 12 |
| selective-self-funder | historical | $687K | 75 | 15 | 6.44 | 6.43 | 0% | 0% | 0% | 0% | 999 | 4 | 34.10 | 0 | — | 1.83 | 8609.50 | 2 |
| selective-self-funder | candidate | $853K | 75 | 15 | 6.46 | 6.45 | 0% | 0% | 0% | 0% | 4 | 4 | 34.30 | 0 | 64 | 1.83 | 10513.50 | 2 |
| experimenter | historical | $505K | 0 | 0 | 5.90 | 5.95 | 0% | 0% | 0% | 0% | 999 | 2 | 35.10 | 0 | — | 1.81 | 3306 | 1 |
| experimenter | candidate | $657K | 75 | 15 | 6.30 | 6.35 | 0% | 0% | 0% | 0% | 4 | 4 | 31.90 | 0 | 64 | 1.83 | 9379 | 1 |
| franchise-builder | historical | $753K | 0 | 0 | 6.09 | 6.10 | 0% | 0% | 0% | 0% | 999 | 2 | 40.90 | 0 | — | 1.83 | 7510.50 | 2 |
| franchise-builder | candidate | $878K | 75 | 15 | 6.46 | 6.46 | 0% | 0% | 0% | 0% | 4 | 4 | 34.10 | 0 | 64 | 1.83 | 13445.50 | 2 |
| repeat-farmer | historical | $566K | 125 | 25 | 6.54 | 6.54 | 0% | 0% | 0% | 0% | 999 | 5 | 32.80 | 0 | — | 1.83 | 9830 | 2 |
| repeat-farmer | candidate | $802K | 75 | 15 | 6.51 | 6.51 | 0% | 0% | 0% | 0% | 4 | 4 | 34.80 | 0 | 64 | 1.83 | 10819 | 2 |

### Paired deltas vs **historical** (median of per-seed differences; share of seeds where the variant is higher)

| Strategy | Variant | Δ endCash | Δ prestige | Δ share8plus | Δ meanAudience |
|---|---|---:|---:|---:|---:|
| balanced | candidate | $161K (99%) | 0 (10%) | 0% (2%) | 0 (30%) |
| quality-first | candidate | $221K (100%) | -50 (3%) | 0% (0%) | -0.05 (17%) |
| cheap-duds | candidate | $50K (99%) | 0 (0%) | 0% (0%) | 0 (3%) |
| famous-star | candidate | $59K (89%) | 0 (0%) | 0% (0%) | 0 (2%) |
| self-funder | candidate | $36K (77%) | 0 (0%) | 0% (0%) | 0 (35%) |
| selective-self-funder | candidate | $158K (100%) | 0 (10%) | 0% (1%) | 0 (31%) |
| experimenter | candidate | $147K (94%) | 75 (57%) | 0% (11%) | 0.40 (94%) |
| franchise-builder | candidate | $123K (96%) | 75 (68%) | 0% (8%) | 0.36 (100%) |
| repeat-farmer | candidate | $231K (100%) | -50 (26%) | 0% (1%) | -0.05 (18%) |

### Mean review score (avg of Audience+Critic) by production index

| Strategy | Variant | #1 | #3 | #5 |
|---|---|---:|---:|---:|
| balanced | historical | 5.61 | 6.16 | 7.37 |
| balanced | candidate | 5.61 | 6.25 | 7.39 |
| quality-first | historical | 5.61 | 6.35 | 7.57 |
| quality-first | candidate | 5.61 | 6.43 | 7.34 |
| cheap-duds | historical | 5.47 | 5.71 | 5.85 |
| cheap-duds | candidate | 5.47 | 5.71 | 5.85 |
| famous-star | historical | 5.54 | 5.91 | 6.00 |
| famous-star | candidate | 5.54 | 5.91 | 6.00 |
| self-funder | historical | 5.48 | 5.94 | 6.08 |
| self-funder | candidate | 5.48 | 5.95 | 6.12 |
| selective-self-funder | historical | 5.61 | 6.16 | 7.38 |
| selective-self-funder | candidate | 5.61 | 6.24 | 7.38 |
| experimenter | historical | 5.62 | 5.96 | 6.12 |
| experimenter | candidate | 5.62 | 6.02 | 7.23 |
| franchise-builder | historical | 5.61 | 6.12 | 6.52 |
| franchise-builder | candidate | 5.61 | 6.22 | 7.39 |
| repeat-farmer | historical | 5.61 | 6.35 | 7.61 |
| repeat-farmer | candidate | 5.61 | 6.43 | 7.39 |

### Diagnostic flags fired

| Variant | Fired |
|---|---|
| historical | EARLY_SOFTLOCK |
| candidate | EARLY_SOFTLOCK |

## 20-production careers

Invariant violations across all variants: **0**.

### Medians by strategy

| Strategy | Variant | endCash | prestige | prestigePerRelease | meanAudience | meanCritic | share8plus | share9plus | shareLate8plus | hofShare | maxStaffEnd | staffCount | meanStaffStat | upgrades | firstUpgradeWeek | years | maxIpFans | negativeCashWeeks |
|---|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|
| balanced | historical | $4710K | 1640 | 82 | 7.65 | 7.59 | 40% | 0% | 63% | 0% | 999 | 4 | 74.50 | 0 | — | 6.44 | 50940.50 | 2 |
| balanced | candidate | $3729K | 3415 | 170.80 | 7.94 | 7.87 | 55% | 15% | 88% | 15% | 8 | 8 | 58.70 | 2 | 112 | 6.44 | 65216 | 2 |
| quality-first | historical | $4254K | 2520 | 126 | 7.81 | 7.73 | 50% | 5% | 75% | 5% | 999 | 5 | 69.90 | 0 | — | 6.44 | 22907 | 2 |
| quality-first | candidate | $3796K | 2865 | 143.30 | 7.91 | 7.83 | 55% | 10% | 88% | 10% | 8 | 8 | 58.30 | 2 | 112 | 6.44 | 25093 | 2 |
| cheap-duds | historical | $1856K | 0 | 0 | 6.01 | 6.16 | 0% | 0% | 0% | 0% | 999 | 2 | 57 | 0 | — | 6.40 | 3266.50 | 0 |
| cheap-duds | candidate | $2396K | 0 | 0 | 6.01 | 6.15 | 0% | 0% | 0% | 0% | 4 | 2 | 57 | 0 | — | 6.44 | 4733.50 | 0 |
| famous-star | historical | $2844K | 0 | 0 | 6.32 | 6.36 | 0% | 0% | 0% | 0% | 999 | 2 | 57 | 0 | — | 6.44 | 8557.50 | 7 |
| famous-star | candidate | $3344K | 0 | 0 | 6.32 | 6.36 | 0% | 0% | 0% | 0% | 4 | 2 | 57 | 0 | — | 6.44 | 9064 | 7 |
| self-funder | historical | $250K | 150 | 7.50 | 6.59 | 6.57 | 0% | 0% | 0% | 0% | 999 | 2 | 68.50 | 0 | — | 6.42 | 3855.50 | 14 |
| self-funder | candidate | $319K | 310 | 15.50 | 6.71 | 6.69 | 0% | 0% | 0% | 0% | 4 | 2 | 80.50 | 0 | — | 6.44 | 3976 | 12 |
| selective-self-funder | historical | $4731K | 1627.50 | 81.40 | 7.64 | 7.59 | 40% | 0% | 63% | 0% | 999 | 4 | 74.50 | 0 | — | 6.44 | 50748.50 | 2 |
| selective-self-funder | candidate | $3753K | 3440 | 172 | 7.93 | 7.87 | 55% | 15% | 88% | 15% | 8 | 8 | 58.70 | 2 | 112 | 6.44 | 63840.50 | 2 |
| experimenter | historical | $2977K | 75 | 3.80 | 6.42 | 6.44 | 0% | 0% | 0% | 0% | 999 | 2 | 57 | 0 | — | 6.44 | 7055 | 1 |
| experimenter | candidate | $3649K | 2447.50 | 122.40 | 7.69 | 7.68 | 45% | 10% | 75% | 10% | 8 | 8 | 47.90 | 2 | 128 | 6.44 | 24975 | 1 |
| franchise-builder | historical | $3570K | 175 | 8.80 | 6.60 | 6.56 | 0% | 0% | 0% | 0% | 999 | 2 | 96.80 | 0 | — | 6.44 | 37538.50 | 2 |
| franchise-builder | candidate | $3447K | 2225 | 111.30 | 7.29 | 7.19 | 5% | 0% | 0% | 0% | 8 | 8 | 58.90 | 2 | 112 | 6.44 | 94631 | 2 |
| repeat-farmer | historical | $2480K | 135 | 6.80 | 6.89 | 6.87 | 0% | 0% | 0% | 0% | 999 | 5 | 69.90 | 0 | — | 6.42 | 62898.50 | 2 |
| repeat-farmer | candidate | $3880K | 1750 | 87.50 | 7.08 | 7.02 | 5% | 0% | 0% | 0% | 8 | 8 | 58.50 | 2 | 112 | 6.44 | 134318 | 2 |

### Paired deltas vs **historical** (median of per-seed differences; share of seeds where the variant is higher)

| Strategy | Variant | Δ endCash | Δ prestige | Δ share8plus | Δ meanAudience |
|---|---|---:|---:|---:|---:|
| balanced | candidate | $-985K (0%) | 1770 (100%) | 15% (90%) | 0.30 (95%) |
| quality-first | candidate | $-461K (8%) | 355 (83%) | 5% (62%) | 0.11 (79%) |
| cheap-duds | candidate | $536K (100%) | 0 (6%) | 0% (0%) | 0 (22%) |
| famous-star | candidate | $499K (100%) | 0 (1%) | 0% (0%) | 0 (3%) |
| self-funder | candidate | $68K (81%) | 150 (73%) | 0% (34%) | 0.13 (80%) |
| selective-self-funder | candidate | $-991K (0%) | 1780 (100%) | 15% (89%) | 0.31 (94%) |
| experimenter | candidate | $657K (98%) | 2332.50 (100%) | 45% (100%) | 1.26 (100%) |
| franchise-builder | candidate | $-114K (39%) | 2000 (100%) | 0% (50%) | 0.70 (94%) |
| repeat-farmer | candidate | $1194K (93%) | 1575 (100%) | 0% (36%) | 0.12 (88%) |

### Mean review score (avg of Audience+Critic) by production index

| Strategy | Variant | #1 | #3 | #5 | #10 | #20 |
|---|---|---:|---:|---:|---:|---:|
| balanced | historical | 5.61 | 6.16 | 7.37 | 7.92 | 8.25 |
| balanced | candidate | 5.61 | 6.25 | 7.39 | 8.26 | 8.67 |
| quality-first | historical | 5.61 | 6.35 | 7.57 | 8.09 | 8.45 |
| quality-first | candidate | 5.61 | 6.43 | 7.34 | 8.21 | 8.68 |
| cheap-duds | historical | 5.47 | 5.71 | 5.85 | 6.10 | 6.44 |
| cheap-duds | candidate | 5.47 | 5.71 | 5.85 | 6.10 | 6.43 |
| famous-star | historical | 5.54 | 5.91 | 6.00 | 6.40 | 6.79 |
| famous-star | candidate | 5.54 | 5.91 | 6.00 | 6.40 | 6.79 |
| self-funder | historical | 5.48 | 5.94 | 6.08 | 6.69 | 7.17 |
| self-funder | candidate | 5.48 | 5.95 | 6.12 | 6.79 | 7.43 |
| selective-self-funder | historical | 5.61 | 6.16 | 7.38 | 7.91 | 8.25 |
| selective-self-funder | candidate | 5.61 | 6.24 | 7.38 | 8.27 | 8.70 |
| experimenter | historical | 5.62 | 5.96 | 6.12 | 6.48 | 6.90 |
| experimenter | candidate | 5.62 | 6.02 | 7.23 | 7.97 | 8.64 |
| franchise-builder | historical | 5.61 | 6.12 | 6.52 | 6.77 | 6.79 |
| franchise-builder | candidate | 5.61 | 6.22 | 7.39 | 7.72 | 7.03 |
| repeat-farmer | historical | 5.61 | 6.35 | 7.61 | 7.51 | 6.35 |
| repeat-farmer | candidate | 5.61 | 6.43 | 7.39 | 7.77 | 6.60 |

### Diagnostic flags fired

| Variant | Fired |
|---|---|
| historical | EARLY_SOFTLOCK, QUALITY_INFLATION, DEAD_STRATEGY |
| candidate | EARLY_SOFTLOCK, PRESTIGE_TOO_FAST, QUALITY_INFLATION, DEAD_STRATEGY |

## 50-production careers

Invariant violations across all variants: **0**.

### Medians by strategy

| Strategy | Variant | endCash | prestige | prestigePerRelease | meanAudience | meanCritic | share8plus | share9plus | shareLate8plus | hofShare | maxStaffEnd | staffCount | meanStaffStat | upgrades | firstUpgradeWeek | years | maxIpFans | negativeCashWeeks |
|---|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|
| balanced | historical | $14725K | 5695 | 113.90 | 8.05 | 8 | 58% | 10% | 70% | 10% | 999 | 4 | 100 | 0 | — | 15.67 | 76454 | 2 |
| balanced | candidate | $12391K | 11167.50 | 223.35 | 8.43 | 8.34 | 72% | 30% | 80% | 30% | 8 | 8 | 96.60 | 2 | 112 | 15.67 | 96429 | 2 |
| quality-first | historical | $13535K | 8600 | 172 | 8.27 | 8.17 | 70% | 14% | 85% | 14% | 999 | 5 | 100 | 0 | — | 15.67 | 23694.50 | 2 |
| quality-first | candidate | $12773K | 10145 | 202.90 | 8.47 | 8.36 | 76% | 26% | 90% | 26% | 8 | 8 | 96.40 | 2 | 112 | 15.67 | 26073 | 2 |
| cheap-duds | historical | $5437K | 150 | 3 | 6.27 | 6.42 | 0% | 0% | 0% | 0% | 999 | 2 | 80.80 | 0 | — | 15.63 | 4792 | 0 |
| cheap-duds | candidate | $7549K | 150 | 3 | 6.27 | 6.42 | 0% | 0% | 0% | 0% | 4 | 2 | 80.80 | 0 | — | 15.67 | 7903 | 0 |
| famous-star | historical | $10283K | 450 | 9 | 6.67 | 6.72 | 0% | 0% | 0% | 0% | 999 | 2 | 80.80 | 0 | — | 15.67 | 13034 | 7 |
| famous-star | candidate | $11595K | 450 | 9 | 6.67 | 6.72 | 0% | 0% | 0% | 0% | 4 | 2 | 80.80 | 0 | — | 15.67 | 13391.50 | 7 |
| self-funder | historical | $262K | 2295 | 45.90 | 7.07 | 7.04 | 6% | 0% | 10% | 0% | 999 | 2 | 100 | 0 | — | 15.65 | 6127.50 | 14 |
| self-funder | candidate | $305K | 3220 | 64.40 | 7.21 | 7.17 | 12% | 0% | 15% | 0% | 4 | 2 | 100 | 0 | — | 15.67 | 3886.50 | 12 |
| selective-self-funder | historical | $14784K | 5700 | 114 | 8.06 | 8 | 58% | 10% | 70% | 10% | 999 | 4 | 100 | 0 | — | 15.67 | 77474.50 | 2 |
| selective-self-funder | candidate | $12473K | 11210 | 224.20 | 8.43 | 8.34 | 72% | 30% | 80% | 30% | 8 | 8 | 96.60 | 2 | 112 | 15.67 | 98487.50 | 2 |
| experimenter | historical | $11081K | 375 | 7.50 | 6.77 | 6.82 | 0% | 0% | 0% | 0% | 999 | 2 | 80.80 | 0 | — | 15.67 | 8864 | 1 |
| experimenter | candidate | $13485K | 9782.50 | 195.65 | 8.33 | 8.31 | 72% | 24% | 95% | 24% | 8 | 8 | 76.90 | 2 | 128 | 15.67 | 23623 | 1 |
| franchise-builder | historical | $11097K | 525 | 10.50 | 6.74 | 6.69 | 2% | 0% | 0% | 0% | 999 | 2 | 100 | 0 | — | 15.67 | 64667.50 | 2 |
| franchise-builder | candidate | $11257K | 3925 | 78.50 | 7.02 | 6.96 | 6% | 0% | 0% | 0% | 8 | 8 | 96.70 | 2 | 112 | 15.67 | 145766.50 | 2 |
| repeat-farmer | historical | $7847K | 135 | 2.70 | 6.67 | 6.65 | 0% | 0% | 0% | 0% | 999 | 5 | 100 | 0 | — | 15.67 | 108902.50 | 2 |
| repeat-farmer | candidate | $13570K | 3250 | 65 | 6.88 | 6.83 | 2% | 0% | 0% | 0% | 8 | 8 | 96.50 | 2 | 112 | 15.67 | 230103.50 | 2 |

### Paired deltas vs **historical** (median of per-seed differences; share of seeds where the variant is higher)

| Strategy | Variant | Δ endCash | Δ prestige | Δ share8plus | Δ meanAudience |
|---|---|---:|---:|---:|---:|
| balanced | candidate | $-2348K (0%) | 5410 (100%) | 16% (94%) | 0.37 (99%) |
| quality-first | candidate | $-754K (8%) | 1532.50 (98%) | 8% (90%) | 0.20 (99%) |
| cheap-duds | candidate | $2128K (100%) | 0 (26%) | 0% (5%) | 0 (37%) |
| famous-star | candidate | $1324K (100%) | 0 (1%) | 0% (0%) | 0 (2%) |
| self-funder | candidate | $42K (70%) | 905 (94%) | 4% (81%) | 0.14 (92%) |
| selective-self-funder | candidate | $-2329K (0%) | 5477.50 (100%) | 14% (95%) | 0.37 (99%) |
| experimenter | candidate | $2408K (100%) | 9397.50 (100%) | 72% (100%) | 1.56 (100%) |
| franchise-builder | candidate | $158K (54%) | 3427.50 (100%) | 2% (55%) | 0.33 (81%) |
| repeat-farmer | candidate | $5088K (95%) | 3075 (100%) | 0% (37%) | 0.19 (91%) |

### Mean review score (avg of Audience+Critic) by production index

| Strategy | Variant | #1 | #3 | #5 | #10 | #20 | #30 | #50 |
|---|---|---:|---:|---:|---:|---:|---:|---:|
| balanced | historical | 5.61 | 6.16 | 7.37 | 7.92 | 8.25 | 8.31 | 8.28 |
| balanced | candidate | 5.61 | 6.25 | 7.39 | 8.26 | 8.67 | 8.72 | 8.74 |
| quality-first | historical | 5.61 | 6.35 | 7.57 | 8.09 | 8.45 | 8.56 | 8.41 |
| quality-first | candidate | 5.61 | 6.43 | 7.34 | 8.21 | 8.68 | 8.80 | 8.73 |
| cheap-duds | historical | 5.47 | 5.71 | 5.85 | 6.10 | 6.44 | 6.56 | 6.47 |
| cheap-duds | candidate | 5.47 | 5.71 | 5.85 | 6.10 | 6.43 | 6.56 | 6.43 |
| famous-star | historical | 5.54 | 5.91 | 6.00 | 6.40 | 6.79 | 6.94 | 6.92 |
| famous-star | candidate | 5.54 | 5.91 | 6.00 | 6.40 | 6.79 | 6.94 | 6.91 |
| self-funder | historical | 5.48 | 5.94 | 6.08 | 6.69 | 7.17 | 7.40 | 7.28 |
| self-funder | candidate | 5.48 | 5.95 | 6.12 | 6.79 | 7.43 | 7.60 | 7.28 |
| selective-self-funder | historical | 5.61 | 6.16 | 7.38 | 7.91 | 8.25 | 8.34 | 8.26 |
| selective-self-funder | candidate | 5.61 | 6.24 | 7.38 | 8.27 | 8.70 | 8.74 | 8.72 |
| experimenter | historical | 5.62 | 5.96 | 6.12 | 6.48 | 6.90 | 7.05 | 6.80 |
| experimenter | candidate | 5.62 | 6.02 | 7.23 | 7.97 | 8.64 | 8.75 | 8.46 |
| franchise-builder | historical | 5.61 | 6.12 | 6.52 | 6.77 | 6.79 | 7.01 | 6.81 |
| franchise-builder | candidate | 5.61 | 6.22 | 7.39 | 7.72 | 7.03 | 6.86 | 6.95 |
| repeat-farmer | historical | 5.61 | 6.35 | 7.61 | 7.51 | 6.35 | 6.44 | 6.43 |
| repeat-farmer | candidate | 5.61 | 6.43 | 7.39 | 7.77 | 6.60 | 6.69 | 6.74 |

### Diagnostic flags fired

| Variant | Fired |
|---|---|
| historical | EARLY_SOFTLOCK, QUALITY_INFLATION, DEAD_STRATEGY |
| candidate | EARLY_SOFTLOCK, PRESTIGE_TOO_FAST, QUALITY_INFLATION, DEAD_STRATEGY |
