# Experiment: B_legs

> **Simulation assumptions, not design locks.** Paired seeds: every variant runs the same seeds and strategies; only the config overrides differ.

Gate 2.5 item B in isolation: only the weekly-legs model differs (historical staffing + perIP Prestige in both).

- Seeds 1–300 (300) · strategies: balanced, quality-first, cheap-duds, famous-star, self-funder, experimenter, franchise-builder · reference variant: **geometric**
- Ruleset v9.61-movie-kernel-0.1 · measured runtime 112792 ms for 12600 careers

| Variant | Config hash | Note |
|---|---|---|
| geometric | c99409c8 | Gate 2 model: weekly retention multiplier (strong films still always decline) `{}` |
| diffusion | 9b8e9730 | candidate: finite awareness diffusion (critic buzz early, audience word of mouth later) `{"audience":{"legsModel":"diffusion"}}` |

## 5-production careers

Invariant violations across all variants: **0**.

### Medians by strategy

| Strategy | Variant | endCash | prestige | meanAudience | share8plus | meanLegs | maxIpFans | meanTrustEnd | meanDistributorRoi | negativeCashWeeks | years |
|---|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|
| balanced | geometric | $699K | 75 | 6.44 | 0% | 3.15 | 8821.50 | 2.74 | 1.20 | 2 | 1.83 |
| balanced | diffusion | $868K | 75 | 6.46 | 0% | 3.59 | 10611 | 2.83 | 1.36 | 2 | 1.83 |
| quality-first | geometric | $588K | 125 | 6.50 | 0% | 3.18 | 8570.50 | 2.69 | 1.10 | 1 | 1.83 |
| quality-first | diffusion | $789K | 125 | 6.53 | 0% | 3.74 | 11076 | 2.80 | 1.27 | 1 | 1.83 |
| cheap-duds | geometric | $449K | 0 | 5.63 | 0% | 2.82 | 1634.50 | 2.39 | 0.63 | 0 | 1.77 |
| cheap-duds | diffusion | $511K | 0 | 5.63 | 0% | 3.08 | 1935 | 2.42 | 0.69 | 0 | 1.81 |
| famous-star | geometric | $541K | 0 | 5.78 | 0% | 2.90 | 4124 | 2.67 | 1.18 | 7 | 1.81 |
| famous-star | diffusion | $595K | 0 | 5.78 | 0% | 3.02 | 4459 | 2.69 | 1.25 | 7 | 1.83 |
| self-funder | geometric | $252K | 0 | 5.86 | 0% | 2.87 | 1933 | 2.18 | 0.24 | 13 | 1.77 |
| self-funder | diffusion | $284K | 0 | 5.86 | 0% | 3.13 | 2137.50 | 2.22 | 0.26 | 12 | 1.83 |
| experimenter | geometric | $508K | 0 | 5.90 | 0% | 2.91 | 3334.50 | 2.56 | 0.99 | 1 | 1.81 |
| experimenter | diffusion | $593K | 0 | 5.90 | 0% | 3.18 | 3744 | 2.60 | 1.07 | 1 | 1.83 |
| franchise-builder | geometric | $749K | 0 | 6.08 | 0% | 2.99 | 7680.50 | 2.64 | 1.10 | 2 | 1.83 |
| franchise-builder | diffusion | $858K | 0 | 6.08 | 0% | 3.27 | 8456.50 | 2.70 | 1.21 | 2 | 1.83 |

### Paired deltas vs **geometric** (median of per-seed differences; share of seeds where the variant is higher)

| Strategy | Variant | Δ endCash | Δ prestige | Δ share8plus | Δ meanAudience |
|---|---|---:|---:|---:|---:|
| balanced | diffusion | $167K (100%) | 0 (7%) | 0% (3%) | 0 (27%) |
| quality-first | diffusion | $189K (100%) | 0 (12%) | 0% (2%) | 0 (26%) |
| cheap-duds | diffusion | $48K (99%) | 0 (0%) | 0% (0%) | 0 (3%) |
| famous-star | diffusion | $53K (90%) | 0 (0%) | 0% (0%) | 0 (1%) |
| self-funder | diffusion | $34K (80%) | 0 (0%) | 0% (0%) | 0 (34%) |
| experimenter | diffusion | $78K (97%) | 0 (0%) | 0% (0%) | 0 (8%) |
| franchise-builder | diffusion | $109K (98%) | 0 (0%) | 0% (0%) | 0 (14%) |

### Mean review score (avg of Audience+Critic) by production index

| Strategy | Variant | #1 | #3 | #5 |
|---|---|---:|---:|---:|
| balanced | geometric | 5.62 | 6.22 | 7.39 |
| balanced | diffusion | 5.62 | 6.31 | 7.39 |
| quality-first | geometric | 5.59 | 6.37 | 7.55 |
| quality-first | diffusion | 5.59 | 6.45 | 7.57 |
| cheap-duds | geometric | 5.47 | 5.74 | 5.81 |
| cheap-duds | diffusion | 5.47 | 5.74 | 5.81 |
| famous-star | geometric | 5.57 | 5.94 | 5.98 |
| famous-star | diffusion | 5.57 | 5.93 | 5.98 |
| self-funder | geometric | 5.48 | 5.92 | 6.08 |
| self-funder | diffusion | 5.48 | 5.94 | 6.12 |
| experimenter | geometric | 5.59 | 5.93 | 6.11 |
| experimenter | diffusion | 5.59 | 5.91 | 6.13 |
| franchise-builder | geometric | 5.60 | 6.12 | 6.51 |
| franchise-builder | diffusion | 5.60 | 6.13 | 6.52 |

### Diagnostic flags fired

| Variant | Fired |
|---|---|
| geometric | EARLY_SOFTLOCK |
| diffusion | EARLY_SOFTLOCK |

## 20-production careers

Invariant violations across all variants: **0**.

### Medians by strategy

| Strategy | Variant | endCash | prestige | meanAudience | share8plus | meanLegs | maxIpFans | meanTrustEnd | meanDistributorRoi | negativeCashWeeks | years |
|---|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|
| balanced | geometric | $4738K | 1670 | 7.64 | 40% | 3.71 | 50392 | 4 | 1.89 | 2 | 6.44 |
| balanced | diffusion | $5553K | 1680 | 7.64 | 40% | 4.17 | 55652.50 | 4.03 | 2.09 | 2 | 6.44 |
| quality-first | geometric | $4303K | 2535 | 7.80 | 50% | 3.81 | 22661.50 | 3.94 | 1.78 | 1 | 6.44 |
| quality-first | diffusion | $5412K | 2555 | 7.81 | 50% | 4.51 | 23564.50 | 4.02 | 2.08 | 1 | 6.44 |
| cheap-duds | geometric | $1877K | 0 | 6.01 | 0% | 2.97 | 3380.50 | 2.46 | 0.70 | 0 | 6.40 |
| cheap-duds | diffusion | $2420K | 0 | 6.00 | 0% | 3.58 | 4849 | 2.56 | 0.79 | 0 | 6.44 |
| famous-star | geometric | $2852K | 0 | 6.32 | 0% | 3.08 | 8460.50 | 3 | 1.15 | 7 | 6.44 |
| famous-star | diffusion | $3362K | 0 | 6.32 | 0% | 3.32 | 8896.50 | 3 | 1.22 | 7 | 6.44 |
| self-funder | geometric | $246K | 150 | 6.59 | 0% | 3.16 | 3751.50 | 2.35 | 0.31 | 13 | 6.42 |
| self-funder | diffusion | $319K | 310 | 6.71 | 0% | 3.79 | 3960.50 | 2.45 | 0.30 | 12 | 6.44 |
| experimenter | geometric | $2985K | 75 | 6.41 | 0% | 3.12 | 7092 | 3.07 | 1.06 | 1 | 6.44 |
| experimenter | diffusion | $3931K | 75 | 6.42 | 0% | 3.76 | 9486 | 3.17 | 1.18 | 1 | 6.44 |
| franchise-builder | geometric | $3597K | 175 | 6.60 | 0% | 3.18 | 38402 | 3.28 | 1.21 | 2 | 6.44 |
| franchise-builder | diffusion | $4480K | 175 | 6.61 | 0% | 3.67 | 45079 | 3.28 | 1.34 | 2 | 6.44 |

### Paired deltas vs **geometric** (median of per-seed differences; share of seeds where the variant is higher)

| Strategy | Variant | Δ endCash | Δ prestige | Δ share8plus | Δ meanAudience |
|---|---|---:|---:|---:|---:|
| balanced | diffusion | $804K (100%) | 0 (21%) | 0% (17%) | 0 (25%) |
| quality-first | diffusion | $1117K (100%) | 0 (14%) | 0% (12%) | 0 (24%) |
| cheap-duds | diffusion | $530K (100%) | 0 (7%) | 0% (0%) | 0 (21%) |
| famous-star | diffusion | $510K (100%) | 0 (1%) | 0% (0%) | 0 (2%) |
| self-funder | diffusion | $73K (83%) | 150 (78%) | 0% (31%) | 0.12 (82%) |
| experimenter | diffusion | $924K (100%) | 0 (3%) | 0% (0%) | 0 (10%) |
| franchise-builder | diffusion | $882K (99%) | 0 (1%) | 0% (0%) | 0 (13%) |

### Mean review score (avg of Audience+Critic) by production index

| Strategy | Variant | #1 | #3 | #5 | #10 | #20 |
|---|---|---:|---:|---:|---:|---:|
| balanced | geometric | 5.62 | 6.22 | 7.39 | 7.98 | 8.29 |
| balanced | diffusion | 5.62 | 6.31 | 7.39 | 7.97 | 8.31 |
| quality-first | geometric | 5.59 | 6.37 | 7.55 | 8.11 | 8.48 |
| quality-first | diffusion | 5.59 | 6.45 | 7.57 | 8.11 | 8.46 |
| cheap-duds | geometric | 5.47 | 5.74 | 5.81 | 6.11 | 6.43 |
| cheap-duds | diffusion | 5.47 | 5.74 | 5.81 | 6.12 | 6.41 |
| famous-star | geometric | 5.57 | 5.94 | 5.98 | 6.38 | 6.79 |
| famous-star | diffusion | 5.57 | 5.93 | 5.98 | 6.39 | 6.79 |
| self-funder | geometric | 5.48 | 5.92 | 6.08 | 6.68 | 7.14 |
| self-funder | diffusion | 5.48 | 5.94 | 6.12 | 6.75 | 7.43 |
| experimenter | geometric | 5.59 | 5.93 | 6.11 | 6.52 | 6.94 |
| experimenter | diffusion | 5.59 | 5.91 | 6.13 | 6.51 | 6.92 |
| franchise-builder | geometric | 5.60 | 6.12 | 6.51 | 6.78 | 6.77 |
| franchise-builder | diffusion | 5.60 | 6.13 | 6.52 | 6.79 | 6.78 |

### Diagnostic flags fired

| Variant | Fired |
|---|---|
| geometric | EARLY_SOFTLOCK, DEAD_STRATEGY |
| diffusion | EARLY_SOFTLOCK, DEAD_STRATEGY |

## 50-production careers

Invariant violations across all variants: **0**.

### Medians by strategy

| Strategy | Variant | endCash | prestige | meanAudience | share8plus | meanLegs | maxIpFans | meanTrustEnd | meanDistributorRoi | negativeCashWeeks | years |
|---|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|
| balanced | geometric | $14740K | 5660 | 8.05 | 58% | 3.88 | 78508.50 | 4.28 | 1.98 | 2 | 15.67 |
| balanced | diffusion | $16241K | 5675 | 8.04 | 58% | 4.21 | 79922.50 | 4.33 | 2.12 | 2 | 15.67 |
| quality-first | geometric | $13563K | 8520 | 8.27 | 70% | 4.04 | 23437 | 4.23 | 1.85 | 1 | 15.67 |
| quality-first | diffusion | $15992K | 8522.50 | 8.27 | 70% | 4.62 | 24294 | 4.31 | 2.09 | 1 | 15.67 |
| cheap-duds | geometric | $5510K | 150 | 6.28 | 0% | 3.07 | 4712.50 | 2.76 | 0.77 | 0 | 15.63 |
| cheap-duds | diffusion | $7620K | 150 | 6.28 | 0% | 4.02 | 8150.50 | 3.09 | 0.92 | 0 | 15.67 |
| famous-star | geometric | $10256K | 380 | 6.68 | 0% | 3.23 | 12874.50 | 3.97 | 1.53 | 7 | 15.67 |
| famous-star | diffusion | $11594K | 380 | 6.68 | 0% | 3.47 | 13267 | 3.98 | 1.64 | 7 | 15.67 |
| self-funder | geometric | $260K | 2255 | 7.06 | 6% | 3.38 | 6114 | 2.57 | 0.49 | 13 | 15.65 |
| self-funder | diffusion | $306K | 3207.50 | 7.21 | 10% | 4.04 | 3823 | 2.50 | 0.30 | 12 | 15.67 |
| experimenter | geometric | $11060K | 375 | 6.77 | 0% | 3.27 | 8857.50 | 3.88 | 1.22 | 1 | 15.67 |
| experimenter | diffusion | $14318K | 375 | 6.77 | 0% | 4.08 | 11326.50 | 3.97 | 1.45 | 1 | 15.67 |
| franchise-builder | geometric | $11117K | 525 | 6.74 | 2% | 3.24 | 65281 | 4.08 | 1.52 | 2 | 15.67 |
| franchise-builder | diffusion | $13326K | 525 | 6.74 | 2% | 3.66 | 72781 | 4.10 | 1.68 | 2 | 15.67 |

### Paired deltas vs **geometric** (median of per-seed differences; share of seeds where the variant is higher)

| Strategy | Variant | Δ endCash | Δ prestige | Δ share8plus | Δ meanAudience |
|---|---|---:|---:|---:|---:|
| balanced | diffusion | $1467K (99%) | 0 (32%) | 0% (23%) | 0 (28%) |
| quality-first | diffusion | $2407K (100%) | 0 (20%) | 0% (13%) | 0 (25%) |
| cheap-duds | diffusion | $2095K (100%) | 0 (27%) | 0% (3%) | 0 (41%) |
| famous-star | diffusion | $1326K (100%) | 0 (2%) | 0% (0%) | 0 (2%) |
| self-funder | diffusion | $42K (71%) | 927.50 (97%) | 4% (82%) | 0.14 (95%) |
| experimenter | diffusion | $3247K (100%) | 0 (4%) | 0% (1%) | 0 (9%) |
| franchise-builder | diffusion | $2092K (100%) | 0 (5%) | 0% (4%) | 0 (12%) |

### Mean review score (avg of Audience+Critic) by production index

| Strategy | Variant | #1 | #3 | #5 | #10 | #20 | #30 | #50 |
|---|---|---:|---:|---:|---:|---:|---:|---:|
| balanced | geometric | 5.62 | 6.22 | 7.39 | 7.98 | 8.29 | 8.26 | 8.28 |
| balanced | diffusion | 5.62 | 6.31 | 7.39 | 7.97 | 8.31 | 8.33 | 8.26 |
| quality-first | geometric | 5.59 | 6.37 | 7.55 | 8.11 | 8.48 | 8.56 | 8.37 |
| quality-first | diffusion | 5.59 | 6.45 | 7.57 | 8.11 | 8.46 | 8.55 | 8.41 |
| cheap-duds | geometric | 5.47 | 5.74 | 5.81 | 6.11 | 6.43 | 6.61 | 6.48 |
| cheap-duds | diffusion | 5.47 | 5.74 | 5.81 | 6.12 | 6.41 | 6.57 | 6.49 |
| famous-star | geometric | 5.57 | 5.94 | 5.98 | 6.38 | 6.79 | 6.97 | 6.90 |
| famous-star | diffusion | 5.57 | 5.93 | 5.98 | 6.39 | 6.79 | 6.97 | 6.89 |
| self-funder | geometric | 5.48 | 5.92 | 6.08 | 6.68 | 7.14 | 7.37 | 7.25 |
| self-funder | diffusion | 5.48 | 5.94 | 6.12 | 6.75 | 7.43 | 7.58 | 7.26 |
| experimenter | geometric | 5.59 | 5.93 | 6.11 | 6.52 | 6.94 | 7.04 | 6.81 |
| experimenter | diffusion | 5.59 | 5.91 | 6.13 | 6.51 | 6.92 | 7.04 | 6.82 |
| franchise-builder | geometric | 5.60 | 6.12 | 6.51 | 6.78 | 6.77 | 7.06 | 6.84 |
| franchise-builder | diffusion | 5.60 | 6.13 | 6.52 | 6.79 | 6.78 | 7.06 | 6.83 |

### Diagnostic flags fired

| Variant | Fired |
|---|---|
| geometric | EARLY_SOFTLOCK, QUALITY_INFLATION, DEAD_STRATEGY |
| diffusion | EARLY_SOFTLOCK, QUALITY_INFLATION, DEAD_STRATEGY |
