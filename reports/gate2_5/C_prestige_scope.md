# Experiment: C_prestige_scope

> **Simulation assumptions, not design locks.** Paired seeds: every variant runs the same seeds and strategies; only the config overrides differ.

Gate 2.5 item C: Prestige repeat scope. Staff cap ladder 4-6-8 and diffusion legs ON in every variant (so only the Prestige rule differs). Includes the repeat-farmer adversarial policy.

- Seeds 1–300 (300) · strategies: balanced, quality-first, franchise-builder, experimenter, cheap-duds, repeat-farmer · reference variant: **perIP**
- Ruleset v9.61-movie-kernel-0.1 · measured runtime 163325 ms for 16200 careers

| Variant | Config hash | Note |
|---|---|---|
| perIP | ea9f1a27 | Gate 2 default: every milestone once per IP `{"agents":{"legacyHeuristicStaffCaps":false},"staffCapacity":{"ladder":[4,6,8],"upgradeCosts":[250000,750000],"upgradePrestige":[200,1000]},"audience":{"legsModel":"diffusion"},"prestige":{"repeatScope":"perIP"}}` |
| perRelease | d8f18697 | every milestone once per qualifying release (commercial milestones per title) `{"agents":{"legacyHeuristicStaffCaps":false},"staffCapacity":{"ladder":[4,6,8],"upgradeCosts":[250000,750000],"upgradePrestige":[200,1000]},"audience":{"legsModel":"diffusion"},"prestige":{"repeatScope":"perRelease"}}` |
| hybrid | 2aa9e1ab | quality/review per release; career firsts once; IP-cumulative commercial once when crossed `{"agents":{"legacyHeuristicStaffCaps":false},"staffCapacity":{"ladder":[4,6,8],"upgradeCosts":[250000,750000],"upgradePrestige":[200,1000]},"audience":{"legsModel":"diffusion"},"prestige":{"repeatScope":"explicit","milestones":[{"id":"meters_all_70","kind":"allMeters","threshold":70,"amount":50,"scope":"release"},{"id":"audience_7_5","kind":"audience","threshold":7.5,"amount":75,"scope":"release"},{"id":"critic_8_5","kind":"critic","threshold":8.5,"amount":85,"scope":"release"},{"id":"hall_of_fame","kind":"hallOfFame","threshold":9,"amount":200,"scope":"release"},{"id":"first_hall_of_fame","kind":"hallOfFame","threshold":9,"amount":100,"scope":"career"},{"id":"ip_gross_1m","kind":"ipLifetimeGross","threshold":1000000,"amount":100,"scope":"ip"},{"id":"ip_gross_5m","kind":"ipLifetimeGross","threshold":5000000,"amount":150,"scope":"ip"},{"id":"ip_viewers_500k","kind":"ipLifetimeViewers","threshold":500000,"amount":150,"scope":"ip"}]}}` |

## 5-production careers

Invariant violations across all variants: **0**.

### Medians by strategy

| Strategy | Variant | endCash | prestige | prestigePerRelease | share8plus | hofShare | maxIpFans | meanAudience | years |
|---|---|---:|---:|---:|---:|---:|---:|---:|---:|
| balanced | perIP | $868K | 75 | 15 | 0% | 0% | 10611 | 6.46 | 1.83 |
| balanced | perRelease | $868K | 75 | 15 | 0% | 0% | 10611 | 6.46 | 1.83 |
| balanced | hybrid | $868K | 75 | 15 | 0% | 0% | 10611 | 6.46 | 1.83 |
| quality-first | perIP | $805K | 75 | 15 | 0% | 0% | 10127.50 | 6.46 | 1.83 |
| quality-first | perRelease | $805K | 75 | 15 | 0% | 0% | 10127.50 | 6.46 | 1.83 |
| quality-first | hybrid | $805K | 75 | 15 | 0% | 0% | 10127.50 | 6.46 | 1.83 |
| franchise-builder | perIP | $876K | 75 | 15 | 0% | 0% | 13361 | 6.45 | 1.83 |
| franchise-builder | perRelease | $876K | 75 | 15 | 0% | 0% | 13361 | 6.45 | 1.83 |
| franchise-builder | hybrid | $876K | 75 | 15 | 0% | 0% | 13361 | 6.45 | 1.83 |
| experimenter | perIP | $656K | 75 | 15 | 0% | 0% | 9366 | 6.30 | 1.83 |
| experimenter | perRelease | $656K | 75 | 15 | 0% | 0% | 9366 | 6.30 | 1.83 |
| experimenter | hybrid | $656K | 75 | 15 | 0% | 0% | 9366 | 6.30 | 1.83 |
| cheap-duds | perIP | $511K | 0 | 0 | 0% | 0% | 1935 | 5.63 | 1.81 |
| cheap-duds | perRelease | $511K | 0 | 0 | 0% | 0% | 1935 | 5.63 | 1.81 |
| cheap-duds | hybrid | $511K | 0 | 0 | 0% | 0% | 1935 | 5.63 | 1.81 |
| repeat-farmer | perIP | $788K | 75 | 15 | 0% | 0% | 11020.50 | 6.50 | 1.83 |
| repeat-farmer | perRelease | $788K | 75 | 15 | 0% | 0% | 11020.50 | 6.50 | 1.83 |
| repeat-farmer | hybrid | $788K | 75 | 15 | 0% | 0% | 11020.50 | 6.50 | 1.83 |

### Paired deltas vs **perIP** (median of per-seed differences; share of seeds where the variant is higher)

| Strategy | Variant | Δ endCash | Δ prestige | Δ share8plus | Δ meanAudience |
|---|---|---:|---:|---:|---:|
| balanced | perRelease | $0K (0%) | 0 (2%) | 0% (0%) | 0 (0%) |
| balanced | hybrid | $0K (0%) | 0 (4%) | 0% (0%) | 0 (0%) |
| quality-first | perRelease | $0K (0%) | 0 (0%) | 0% (0%) | 0 (0%) |
| quality-first | hybrid | $0K (0%) | 0 (0%) | 0% (0%) | 0 (0%) |
| franchise-builder | perRelease | $0K (0%) | 0 (6%) | 0% (0%) | 0 (0%) |
| franchise-builder | hybrid | $0K (0%) | 0 (29%) | 0% (0%) | 0 (0%) |
| experimenter | perRelease | $0K (0%) | 0 (0%) | 0% (0%) | 0 (0%) |
| experimenter | hybrid | $0K (0%) | 0 (0%) | 0% (0%) | 0 (0%) |
| cheap-duds | perRelease | $0K (0%) | 0 (0%) | 0% (0%) | 0 (0%) |
| cheap-duds | hybrid | $0K (0%) | 0 (0%) | 0% (0%) | 0 (0%) |
| repeat-farmer | perRelease | $0K (3%) | 0 (19%) | 0% (0%) | 0 (0%) |
| repeat-farmer | hybrid | $0K (3%) | 0 (21%) | 0% (0%) | 0 (0%) |

### Mean review score (avg of Audience+Critic) by production index

| Strategy | Variant | #1 | #3 | #5 |
|---|---|---:|---:|---:|
| balanced | perIP | 5.62 | 6.31 | 7.39 |
| balanced | perRelease | 5.62 | 6.31 | 7.39 |
| balanced | hybrid | 5.62 | 6.31 | 7.39 |
| quality-first | perIP | 5.59 | 6.45 | 7.34 |
| quality-first | perRelease | 5.59 | 6.45 | 7.34 |
| quality-first | hybrid | 5.59 | 6.45 | 7.34 |
| franchise-builder | perIP | 5.60 | 6.24 | 7.37 |
| franchise-builder | perRelease | 5.60 | 6.24 | 7.37 |
| franchise-builder | hybrid | 5.60 | 6.24 | 7.37 |
| experimenter | perIP | 5.59 | 5.97 | 7.23 |
| experimenter | perRelease | 5.59 | 5.97 | 7.23 |
| experimenter | hybrid | 5.59 | 5.97 | 7.23 |
| cheap-duds | perIP | 5.47 | 5.74 | 5.81 |
| cheap-duds | perRelease | 5.47 | 5.74 | 5.81 |
| cheap-duds | hybrid | 5.47 | 5.74 | 5.81 |
| repeat-farmer | perIP | 5.61 | 6.44 | 7.39 |
| repeat-farmer | perRelease | 5.61 | 6.44 | 7.39 |
| repeat-farmer | hybrid | 5.61 | 6.44 | 7.39 |

### Diagnostic flags fired

| Variant | Fired |
|---|---|
| perIP | none |
| perRelease | none |
| hybrid | none |

## 20-production careers

Invariant violations across all variants: **0**.

### Medians by strategy

| Strategy | Variant | endCash | prestige | prestigePerRelease | share8plus | hofShare | maxIpFans | meanAudience | years |
|---|---|---:|---:|---:|---:|---:|---:|---:|---:|
| balanced | perIP | $3845K | 2180 | 109 | 55% | 10% | 62162 | 7.90 | 6.44 |
| balanced | perRelease | $3771K | 2822.50 | 141.15 | 55% | 10% | 65581.50 | 7.92 | 6.44 |
| balanced | hybrid | $3743K | 3425 | 171.25 | 55% | 10% | 65882 | 7.95 | 6.44 |
| quality-first | perIP | $3784K | 2750 | 137.50 | 55% | 10% | 25275 | 7.91 | 6.44 |
| quality-first | perRelease | $3784K | 2750 | 137.50 | 55% | 10% | 25275 | 7.91 | 6.44 |
| quality-first | hybrid | $3789K | 2855 | 142.80 | 55% | 10% | 25275 | 7.91 | 6.44 |
| franchise-builder | perIP | $4436K | 225 | 11.30 | 0% | 0% | 77578 | 7.07 | 6.44 |
| franchise-builder | perRelease | $3678K | 1350 | 67.50 | 0% | 0% | 90060.50 | 7.25 | 6.44 |
| franchise-builder | hybrid | $3375K | 2225 | 111.30 | 5% | 0% | 94631 | 7.31 | 6.44 |
| experimenter | perIP | $3641K | 2312.50 | 115.65 | 45% | 10% | 24931 | 7.66 | 6.44 |
| experimenter | perRelease | $3641K | 2312.50 | 115.65 | 45% | 10% | 24931 | 7.66 | 6.44 |
| experimenter | hybrid | $3640K | 2435 | 121.80 | 45% | 10% | 24911 | 7.67 | 6.44 |
| cheap-duds | perIP | $2420K | 0 | 0 | 0% | 0% | 4849 | 6.00 | 6.44 |
| cheap-duds | perRelease | $2420K | 0 | 0 | 0% | 0% | 4849 | 6.00 | 6.44 |
| cheap-duds | hybrid | $2420K | 0 | 0 | 0% | 0% | 4849 | 6.00 | 6.44 |
| repeat-farmer | perIP | $4367K | 125 | 6.30 | 0% | 0% | 87744.50 | 6.87 | 6.44 |
| repeat-farmer | perRelease | $3943K | 1275 | 63.80 | 5% | 0% | 126952.50 | 7.01 | 6.44 |
| repeat-farmer | hybrid | $3819K | 1750 | 87.50 | 5% | 0% | 133885 | 7.04 | 6.44 |

### Paired deltas vs **perIP** (median of per-seed differences; share of seeds where the variant is higher)

| Strategy | Variant | Δ endCash | Δ prestige | Δ share8plus | Δ meanAudience |
|---|---|---:|---:|---:|---:|
| balanced | perRelease | $-30K (44%) | 650 (93%) | 0% (21%) | 0.00 (50%) |
| balanced | hybrid | $-59K (37%) | 1237.50 (99%) | 0% (30%) | 0.02 (56%) |
| quality-first | perRelease | $0K (0%) | 0 (0%) | 0% (0%) | 0 (0%) |
| quality-first | hybrid | $0K (80%) | 100 (95%) | 0% (2%) | 0 (9%) |
| franchise-builder | perRelease | $-744K (8%) | 1125 (100%) | 0% (30%) | 0.10 (96%) |
| franchise-builder | hybrid | $-949K (1%) | 1987.50 (100%) | 0% (47%) | 0.16 (96%) |
| experimenter | perRelease | $0K (0%) | 0 (0%) | 0% (0%) | 0 (0%) |
| experimenter | hybrid | $0K (66%) | 100 (85%) | 0% (3%) | 0 (11%) |
| cheap-duds | perRelease | $0K (0%) | 0 (0%) | 0% (0%) | 0 (0%) |
| cheap-duds | hybrid | $0K (0%) | 0 (0%) | 0% (0%) | 0 (0%) |
| repeat-farmer | perRelease | $-376K (23%) | 1100 (100%) | 0% (28%) | 0.13 (98%) |
| repeat-farmer | hybrid | $-677K (12%) | 1575 (100%) | 0% (34%) | 0.17 (100%) |

### Mean review score (avg of Audience+Critic) by production index

| Strategy | Variant | #1 | #3 | #5 | #10 | #20 |
|---|---|---:|---:|---:|---:|---:|
| balanced | perIP | 5.62 | 6.31 | 7.39 | 8.25 | 8.68 |
| balanced | perRelease | 5.62 | 6.31 | 7.39 | 8.27 | 8.68 |
| balanced | hybrid | 5.62 | 6.31 | 7.39 | 8.27 | 8.67 |
| quality-first | perIP | 5.59 | 6.45 | 7.34 | 8.19 | 8.70 |
| quality-first | perRelease | 5.59 | 6.45 | 7.34 | 8.19 | 8.70 |
| quality-first | hybrid | 5.59 | 6.45 | 7.34 | 8.20 | 8.69 |
| franchise-builder | perIP | 5.60 | 6.24 | 7.37 | 7.47 | 6.84 |
| franchise-builder | perRelease | 5.60 | 6.24 | 7.37 | 7.60 | 7.00 |
| franchise-builder | hybrid | 5.60 | 6.24 | 7.37 | 7.72 | 7.04 |
| experimenter | perIP | 5.59 | 5.97 | 7.23 | 8.02 | 8.61 |
| experimenter | perRelease | 5.59 | 5.97 | 7.23 | 8.02 | 8.61 |
| experimenter | hybrid | 5.59 | 5.97 | 7.23 | 8.02 | 8.61 |
| cheap-duds | perIP | 5.47 | 5.74 | 5.81 | 6.12 | 6.41 |
| cheap-duds | perRelease | 5.47 | 5.74 | 5.81 | 6.12 | 6.41 |
| cheap-duds | hybrid | 5.47 | 5.74 | 5.81 | 6.12 | 6.41 |
| repeat-farmer | perIP | 5.61 | 6.44 | 7.39 | 7.56 | 6.35 |
| repeat-farmer | perRelease | 5.61 | 6.44 | 7.39 | 7.73 | 6.56 |
| repeat-farmer | hybrid | 5.61 | 6.44 | 7.39 | 7.77 | 6.60 |

### Diagnostic flags fired

| Variant | Fired |
|---|---|
| perIP | QUALITY_INFLATION |
| perRelease | PRESTIGE_TOO_FAST, QUALITY_INFLATION |
| hybrid | PRESTIGE_TOO_FAST, QUALITY_INFLATION |

## 50-production careers

Invariant violations across all variants: **0**.

### Medians by strategy

| Strategy | Variant | endCash | prestige | prestigePerRelease | share8plus | hofShare | maxIpFans | meanAudience | years |
|---|---|---:|---:|---:|---:|---:|---:|---:|---:|
| balanced | perIP | $12479K | 7672.50 | 153.45 | 72% | 27% | 97672 | 8.41 | 15.67 |
| balanced | perRelease | $12422K | 10172.50 | 203.45 | 72% | 28% | 98331 | 8.43 | 15.67 |
| balanced | hybrid | $12396K | 11100 | 222 | 72% | 30% | 96370 | 8.43 | 15.67 |
| quality-first | perIP | $12752K | 10070 | 201.40 | 76% | 26% | 26324 | 8.46 | 15.67 |
| quality-first | perRelease | $12752K | 10070 | 201.40 | 76% | 26% | 26324 | 8.46 | 15.67 |
| quality-first | hybrid | $12750K | 10147.50 | 202.95 | 76% | 26% | 26420 | 8.46 | 15.67 |
| franchise-builder | perIP | $11675K | 310 | 6.20 | 6% | 0% | 123366 | 7.04 | 15.67 |
| franchise-builder | perRelease | $11016K | 3150 | 63 | 4% | 0% | 144271 | 7.04 | 15.67 |
| franchise-builder | hybrid | $11062K | 4052.50 | 81.05 | 6% | 0% | 147978 | 7.08 | 15.67 |
| experimenter | perIP | $13516K | 9607.50 | 192.15 | 72% | 22% | 23705.50 | 8.33 | 15.67 |
| experimenter | perRelease | $13516K | 9607.50 | 192.15 | 72% | 22% | 23705.50 | 8.33 | 15.67 |
| experimenter | hybrid | $13512K | 9732.50 | 194.65 | 72% | 22% | 23714 | 8.34 | 15.67 |
| cheap-duds | perIP | $7620K | 150 | 3 | 0% | 0% | 8150.50 | 6.28 | 15.67 |
| cheap-duds | perRelease | $7620K | 150 | 3 | 0% | 0% | 8150.50 | 6.28 | 15.67 |
| cheap-duds | hybrid | $7620K | 150 | 3 | 0% | 0% | 8150.50 | 6.28 | 15.67 |
| repeat-farmer | perIP | $11762K | 125 | 2.50 | 0% | 0% | 130723.50 | 6.55 | 15.67 |
| repeat-farmer | perRelease | $13211K | 2775 | 55.50 | 2% | 0% | 226010.50 | 6.84 | 15.67 |
| repeat-farmer | hybrid | $13453K | 3250 | 65 | 2% | 0% | 231674 | 6.86 | 15.67 |

### Paired deltas vs **perIP** (median of per-seed differences; share of seeds where the variant is higher)

| Strategy | Variant | Δ endCash | Δ prestige | Δ share8plus | Δ meanAudience |
|---|---|---:|---:|---:|---:|
| balanced | perRelease | $-20K (46%) | 2485 (99%) | 0% (31%) | 0 (42%) |
| balanced | hybrid | $-31K (45%) | 3315 (100%) | 0% (38%) | 0.00 (50%) |
| quality-first | perRelease | $0K (0%) | 0 (0%) | 0% (0%) | 0 (0%) |
| quality-first | hybrid | $1K (91%) | 100 (97%) | 0% (3%) | 0 (8%) |
| franchise-builder | perRelease | $-570K (30%) | 2750 (100%) | 0% (30%) | 0.10 (73%) |
| franchise-builder | hybrid | $-522K (30%) | 3610 (100%) | 0% (41%) | 0.12 (76%) |
| experimenter | perRelease | $0K (0%) | 0 (0%) | 0% (0%) | 0 (0%) |
| experimenter | hybrid | $1K (86%) | 100 (100%) | 0% (4%) | 0 (11%) |
| cheap-duds | perRelease | $0K (0%) | 0 (0%) | 0% (0%) | 0 (0%) |
| cheap-duds | hybrid | $0K (0%) | 0 (0%) | 0% (0%) | 0 (0%) |
| repeat-farmer | perRelease | $570K (67%) | 2600 (100%) | 0% (28%) | 0.23 (100%) |
| repeat-farmer | hybrid | $842K (69%) | 3075 (100%) | 0% (34%) | 0.27 (100%) |

### Mean review score (avg of Audience+Critic) by production index

| Strategy | Variant | #1 | #3 | #5 | #10 | #20 | #30 | #50 |
|---|---|---:|---:|---:|---:|---:|---:|---:|
| balanced | perIP | 5.62 | 6.31 | 7.39 | 8.25 | 8.68 | 8.72 | 8.75 |
| balanced | perRelease | 5.62 | 6.31 | 7.39 | 8.27 | 8.68 | 8.72 | 8.79 |
| balanced | hybrid | 5.62 | 6.31 | 7.39 | 8.27 | 8.67 | 8.73 | 8.75 |
| quality-first | perIP | 5.59 | 6.45 | 7.34 | 8.19 | 8.70 | 8.78 | 8.71 |
| quality-first | perRelease | 5.59 | 6.45 | 7.34 | 8.19 | 8.70 | 8.78 | 8.71 |
| quality-first | hybrid | 5.59 | 6.45 | 7.34 | 8.20 | 8.69 | 8.78 | 8.72 |
| franchise-builder | perIP | 5.60 | 6.24 | 7.37 | 7.47 | 6.84 | 6.97 | 6.89 |
| franchise-builder | perRelease | 5.60 | 6.24 | 7.37 | 7.60 | 7.00 | 6.82 | 6.95 |
| franchise-builder | hybrid | 5.60 | 6.24 | 7.37 | 7.72 | 7.04 | 6.85 | 6.94 |
| experimenter | perIP | 5.59 | 5.97 | 7.23 | 8.02 | 8.61 | 8.76 | 8.47 |
| experimenter | perRelease | 5.59 | 5.97 | 7.23 | 8.02 | 8.61 | 8.76 | 8.47 |
| experimenter | hybrid | 5.59 | 5.97 | 7.23 | 8.02 | 8.61 | 8.76 | 8.47 |
| cheap-duds | perIP | 5.47 | 5.74 | 5.81 | 6.12 | 6.41 | 6.57 | 6.49 |
| cheap-duds | perRelease | 5.47 | 5.74 | 5.81 | 6.12 | 6.41 | 6.57 | 6.49 |
| cheap-duds | hybrid | 5.47 | 5.74 | 5.81 | 6.12 | 6.41 | 6.57 | 6.49 |
| repeat-farmer | perIP | 5.61 | 6.44 | 7.39 | 7.56 | 6.35 | 6.44 | 6.41 |
| repeat-farmer | perRelease | 5.61 | 6.44 | 7.39 | 7.73 | 6.56 | 6.66 | 6.74 |
| repeat-farmer | hybrid | 5.61 | 6.44 | 7.39 | 7.77 | 6.60 | 6.68 | 6.74 |

### Diagnostic flags fired

| Variant | Fired |
|---|---|
| perIP | PRESTIGE_TOO_FAST, QUALITY_INFLATION |
| perRelease | PRESTIGE_TOO_FAST, QUALITY_INFLATION |
| hybrid | PRESTIGE_TOO_FAST, QUALITY_INFLATION |
