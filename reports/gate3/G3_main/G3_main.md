# Experiment: G3_main

> **Simulation assumptions, not design locks.** Paired seeds: every variant runs the same seeds and strategies; only the config overrides differ.

Gate 3 main matrix: config/gate3.json (Gate 2.5 candidate + limited series + TV + streaming; Gate 2.6 curves OFF). Movie-only strategies (balanced, quality-first, repeat-farmer, cheap-duds, self-funder) are the in-config all-movie controls. Horizons in in-game years; plus a 5-production early-game run.

- Seeds 1–200 (200) · strategies: balanced, quality-first, repeat-farmer, cheap-duds, self-funder, tv-first, renewal-franchise, mixed, streaming-pivot, traditional-holdout, limited-focus, tv-duds · reference variant: **gate3**
- Ruleset v9.61-gate3-0.1 · measured runtime 322448 ms for 12000 careers

| Variant | Config hash | Note |
|---|---|---|
| gate3 | 2e86e9ec |  `{}` |

## 5-production careers

Invariant violations across all variants: **0**.

### Medians by strategy

| Strategy | Variant | endCash | prestige | prestigePerRelease | meanAudience | meanCritic | share8plus | share9plus | shareLate8plus | hofShare | maxStaffEnd | staffCount | meanStaffStat | upgrades | firstUpgradeWeek | years | maxIpFans | negativeCashWeeks |
|---|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|
| balanced | gate3 | $874K | 75 | 15 | 6.45 | 6.54 | 0% | 0% | 0% | 0% | 4 | 4 | 34.30 | 0 | — | 1.83 | 10561.50 | 2 |
| quality-first | gate3 | $822K | 75 | 15 | 6.45 | 6.55 | 0% | 0% | 0% | 0% | 4 | 4 | 34.65 | 0 | 64 | 1.83 | 10180.50 | 1 |
| repeat-farmer | gate3 | $805K | 75 | 15 | 6.51 | 6.56 | 0% | 0% | 0% | 0% | 4 | 4 | 34.70 | 0 | — | 1.83 | 11020.50 | 2 |
| cheap-duds | gate3 | $512K | 0 | 0 | 5.65 | 5.79 | 0% | 0% | 0% | 0% | 4 | 2 | 35.10 | 0 | — | 1.81 | 1966.50 | 0 |
| self-funder | gate3 | $288K | 0 | 0 | 5.86 | 5.91 | 0% | 0% | 0% | 0% | 4 | 2 | 35.10 | 0 | — | 1.83 | 2171 | 12 |
| tv-first | gate3 | $1111K | 75 | 15 | 6.43 | 6.52 | 0% | 0% | 0% | 0% | 4 | 4 | 35.30 | 0 | 70 | 1.88 | 7817 | 2 |
| renewal-franchise | gate3 | $824K | 75 | 15 | 6.46 | 6.52 | 0% | 0% | 0% | 0% | 4 | 4 | 34.55 | 0 | 64 | 1.83 | 10253 | 1 |
| mixed | gate3 | $1109K | 75 | 15 | 6.45 | 6.53 | 0% | 0% | 0% | 0% | 4 | 4 | 35.10 | 0 | 70 | 1.88 | 8001.50 | 2 |
| streaming-pivot | gate3 | $879K | 75 | 15 | 6.45 | 6.54 | 0% | 0% | 0% | 0% | 4 | 4 | 34.25 | 0 | 64 | 1.83 | 10170.50 | 2 |
| traditional-holdout | gate3 | $937K | 75 | 15 | 6.41 | 6.54 | 0% | 0% | 0% | 0% | 4 | 4 | 34.50 | 0 | — | 1.83 | 10083.50 | 2 |
| limited-focus | gate3 | $992K | 75 | 15 | 6.50 | 6.54 | 0% | 0% | 0% | 0% | 4 | 4 | 35.35 | 0 | 70 | 1.88 | 6952.50 | 1 |
| tv-duds | gate3 | $511K | 0 | 0 | 5.62 | 5.81 | 0% | 0% | 0% | 0% | 4 | 2 | 35.10 | 0 | — | 1.81 | 1948.50 | 0 |

### Paired deltas vs **gate3** (median of per-seed differences; share of seeds where the variant is higher)

| Strategy | Variant | Δ endCash | Δ prestige | Δ share8plus | Δ meanAudience |
|---|---|---:|---:|---:|---:|

### Mean review score (avg of Audience+Critic) by production index

| Strategy | Variant | #1 | #5 |
|---|---|---:|---:|
| balanced | gate3 | 5.65 | 7.38 |
| quality-first | gate3 | 5.58 | 7.34 |
| repeat-farmer | gate3 | 5.64 | 7.41 |
| cheap-duds | gate3 | 5.47 | 5.84 |
| self-funder | gate3 | 5.49 | 6.13 |
| tv-first | gate3 | 5.60 | 7.44 |
| renewal-franchise | gate3 | 5.65 | 7.40 |
| mixed | gate3 | 5.62 | 7.43 |
| streaming-pivot | gate3 | 5.67 | 7.35 |
| traditional-holdout | gate3 | 5.62 | 7.39 |
| limited-focus | gate3 | 5.65 | 7.42 |
| tv-duds | gate3 | 5.47 | 5.85 |

### Great films — all strategies pooled, by release window

Denominators are films in that window. HoF = average of Audience and Critic ≥ hofThreshold (9.0). `≥9` is inclusive, `>9` strict.

| Strategy | Config | Window | Films (n) | Avg Aud | Avg Crit | HoF n (%) | Avg ≥9 n (%) | Avg >9 n (%) | Aud ≥9 n (%) | Crit ≥9 n (%) | 8+ n (%) | Careers with 0 HoF | HoF/career p10/p50/p90 | Best/career p10/p50/p90/p99 | Best combined movie | Prestige median |
|---|---|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---|---|---|---:|
| ALL | gate3 | 1-5 | 12000 | 6.28 | 6.34 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 1 (0.0%) | 304 (2.5%) | 100% of 2400 | 0/0/0 | 6.2/7.42/8.05/8.52 | 8.91 "Midnight Rising" (A8.47/C9.36; renewal-franchise seed 15 #5, yr 1.5, critic gen 0) |  |
| ALL | gate3 | all | 12000 | 6.28 | 6.34 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 1 (0.0%) | 304 (2.5%) | 100% of 2400 | 0/0/0 | 6.2/7.42/8.05/8.52 | 8.91 "Midnight Rising" (A8.47/C9.36; renewal-franchise seed 15 #5, yr 1.5, critic gen 0) |  |

### Great films by strategy (whole career)

| Strategy | Config | Window | Films (n) | Avg Aud | Avg Crit | HoF n (%) | Avg ≥9 n (%) | Avg >9 n (%) | Aud ≥9 n (%) | Crit ≥9 n (%) | 8+ n (%) | Careers with 0 HoF | HoF/career p10/p50/p90 | Best/career p10/p50/p90/p99 | Best combined movie | Prestige median |
|---|---|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---|---|---|---:|
| balanced | gate3 | all | 1000 | 6.46 | 6.52 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 29 (2.9%) | 100% of 200 | 0/0/0 | 7.1/7.61/8.07/8.41 | 8.70 "Midnight Protocol" (A8.64/C8.76; balanced seed 87 #5, yr 1.5, critic gen 0) | 75 |
| quality-first | gate3 | all | 1000 | 6.47 | 6.52 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 32 (3.2%) | 100% of 200 | 0/0/0 | 7.06/7.56/8.13/8.49 | 8.68 "Wild Protocol" (A8.64/C8.72; quality-first seed 181 #4, yr 1.2, critic gen 0) | 75 |
| repeat-farmer | gate3 | all | 1000 | 6.48 | 6.54 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 33 (3.3%) | 100% of 200 | 0/0/0 | 7.07/7.57/8.06/8.43 | 8.65 "Midnight Echo" (A8.55/C8.74; repeat-farmer seed 77 #5, yr 1.5, critic gen 0) | 75 |
| cheap-duds | gate3 | all | 1000 | 5.62 | 5.78 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 100% of 200 | 0/0/0 | 5.87/6.2/6.58/6.81 | 6.90 "Midnight Night" (A6.56/C7.25; cheap-duds seed 88 #5, yr 1.5, critic gen 0) | 0 |
| self-funder | gate3 | all | 1000 | 5.85 | 5.91 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 100% of 200 | 0/0/0 | 5.99/6.41/6.77/7.14 | 7.26 "Broken Night" (A7.22/C7.29; self-funder seed 126 #5, yr 1.5, critic gen 0) | 0 |
| tv-first | gate3 | all | 1000 | 6.48 | 6.51 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 36 (3.6%) | 100% of 200 | 0/0/0 | 7.01/7.61/8.2/8.61 | 8.70 "Midnight Protocol" (limited_series, A8.59/C8.81; tv-first seed 87 #5, yr 1.7, critic gen 0) | 75 |
| renewal-franchise | gate3 | all | 1000 | 6.45 | 6.50 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 1 (0.1%) | 32 (3.2%) | 100% of 200 | 0/0/0 | 7.08/7.59/8.13/8.73 | 8.91 "Midnight Rising" (A8.47/C9.36; renewal-franchise seed 15 #5, yr 1.5, critic gen 0) | 75 |
| mixed | gate3 | all | 1000 | 6.49 | 6.52 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 39 (3.9%) | 100% of 200 | 0/0/0 | 7.15/7.62/8.11/8.53 | 8.77 "Midnight Protocol" (limited_series, A8.71/C8.82; mixed seed 87 #5, yr 1.7, critic gen 0) | 75 |
| streaming-pivot | gate3 | all | 1000 | 6.45 | 6.52 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 30 (3.0%) | 100% of 200 | 0/0/0 | 7.04/7.54/8.06/8.37 | 8.59 "Last Rising" (A8.48/C8.69; streaming-pivot seed 166 #4, yr 1.2, critic gen 0) | 75 |
| traditional-holdout | gate3 | all | 1000 | 6.44 | 6.50 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 33 (3.3%) | 100% of 200 | 0/0/0 | 7.06/7.61/8.12/8.57 | 8.65 "Midnight Echo" (A8.55/C8.74; traditional-holdout seed 77 #5, yr 1.5, critic gen 0) | 75 |
| limited-focus | gate3 | all | 1000 | 6.50 | 6.51 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 40 (4.0%) | 100% of 200 | 0/0/0 | 7.2/7.58/8.14/8.61 | 8.73 "Midnight Protocol" (limited_series, A8.67/C8.79; limited-focus seed 87 #5, yr 1.7, critic gen 0) | 75 |
| tv-duds | gate3 | all | 1000 | 5.60 | 5.77 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 100% of 200 | 0/0/0 | 5.89/6.22/6.56/6.84 | 6.96 "Lost Pulse" (A6.82/C7.1; tv-duds seed 106 #5, yr 1.5, critic gen 0) | 0 |

### Greatest single films (all strategies, whole sample; reproducible from seed + config hash)

| Variant | Best combined | Best Audience | Best Critic | Year band with most HoF |
|---|---|---|---|---|
| gate3 | 8.91 "Midnight Rising" (A8.47/C9.36; renewal-franchise seed 15 #5, yr 1.5, critic gen 0) | 8.25 "Last Signal" (limited_series, A8.78/C7.72; mixed seed 135 #5, yr 1.7, critic gen 0) | 8.91 "Midnight Rising" (A8.47/C9.36; renewal-franchise seed 15 #5, yr 1.5, critic gen 0) | y0-5: 0.0% of 12000 |

### Great films by in-game year (all strategies pooled)

| Strategy | Config | Window | Films (n) | Avg Aud | Avg Crit | HoF n (%) | Avg ≥9 n (%) | Avg >9 n (%) | Aud ≥9 n (%) | Crit ≥9 n (%) | 8+ n (%) | Careers with 0 HoF | HoF/career p10/p50/p90 | Best/career p10/p50/p90/p99 | Best combined movie | Prestige median |
|---|---|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---|---|---|---:|
| ALL | gate3 | y0-5 | 12000 | 6.28 | 6.34 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 1 (0.0%) | 304 (2.5%) | 100% of 2400 | 0/0/0 | 6.2/7.42/8.05/8.52 | 8.91 "Midnight Rising" (A8.47/C9.36; renewal-franchise seed 15 #5, yr 1.5, critic gen 0) |  |

### Prestige progression (Prestige gates growth; cash sustains operations)

`cash-rich but Prestige-locked` = careers that at some week had the cash for the next upgrade but not the Prestige. `bought below gate` must be 0 (engine rule).

| Strategy | Config | Cash median | Prestige median | Prestige/yr | Careers with negative-cash weeks | →6 gate met (Prestige ≥ 200) · median film # | →6 bought · median film # | →6 cash-rich but Prestige-locked | →6 bought below gate | →8 gate met (Prestige ≥ 1000) · median film # | →8 bought · median film # | →8 cash-rich but Prestige-locked | →8 bought below gate |
|---|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|
| balanced | gate3 | $0.87M | 75 | 41 | 70% | 10% · #5 | 0% · #— | 100% | 0 | 0% · #— | 0% · #— | 0% | 0 |
| quality-first | gate3 | $0.82M | 75 | 41 | 60% | 13% · #5 | 2% · #4 | 100% | 0 | 0% · #— | 0% · #— | 2% | 0 |
| repeat-farmer | gate3 | $0.80M | 75 | 41 | 65% | 23% · #5 | 0% · #— | 100% | 0 | 0% · #— | 0% · #— | 0% | 0 |
| cheap-duds | gate3 | $0.51M | 0 | 0 | 5% | 0% · #— | 0% · #— | 100% | 0 | 0% · #— | 0% · #— | 0% | 0 |
| self-funder | gate3 | $0.29M | 0 | 0 | 100% | 0% · #— | 0% · #— | 80% | 0 | 0% · #— | 0% · #— | 0% | 0 |
| tv-first | gate3 | $1.11M | 75 | 39.9 | 74% | 8% · #5 | 1% · #4 | 100% | 0 | 0% · #— | 0% · #— | 1% | 0 |
| renewal-franchise | gate3 | $0.82M | 75 | 41 | 54% | 10% · #5 | 1% · #4 | 100% | 0 | 0% · #— | 0% · #— | 1% | 0 |
| mixed | gate3 | $1.11M | 75 | 39.9 | 73% | 6% · #5 | 1% · #4 | 100% | 0 | 0% · #— | 0% · #— | 1% | 0 |
| streaming-pivot | gate3 | $0.88M | 75 | 41 | 65% | 7% · #5 | 1% · #4 | 100% | 0 | 0% · #— | 0% · #— | 1% | 0 |
| traditional-holdout | gate3 | $0.94M | 75 | 40.8 | 73% | 11% · #5 | 0% · #— | 100% | 0 | 0% · #— | 0% · #— | 0% | 0 |
| limited-focus | gate3 | $0.99M | 75 | 39.9 | 52% | 10% · #5 | 1% · #4 | 100% | 0 | 0% · #— | 0% · #— | 1% | 0 |
| tv-duds | gate3 | $0.51M | 0 | 0 | 4% | 0% · #— | 0% · #— | 100% | 0 | 0% · #— | 0% · #— | 0% | 0 |

### Prestige milestones awarded per career (mean)

| Strategy | Variant | audience_7_5 | critic_8_5 | ip_gross_1m | ip_viewers_500k | meters_all_70 | careers > 400 Prestige/yr (OUTDATED threshold) |
|---|---|---:|---:|---:|---:|---:|---:|
| balanced | gate3 | 0.88 | 0.12 | 0.02 | 0.02 | 0.19 | 0% |
| quality-first | gate3 | 0.85 | 0.09 | 0 | 0 | 0.2 | 0% |
| repeat-farmer | gate3 | 0.84 | 0.12 | 0.19 | 0.19 | 0.2 | 0% |
| cheap-duds | gate3 | 0 | 0 | 0 | 0 | 0 | 0% |
| self-funder | gate3 | 0 | 0 | 0 | 0 | 0 | 0% |
| tv-first | gate3 | 0.89 | 0.15 | 0 | 0 | 0.07 | 0% |
| renewal-franchise | gate3 | 0.81 | 0.1 | 0 | 0 | 0.18 | 0% |
| mixed | gate3 | 0.91 | 0.13 | 0 | 0 | 0.04 | 0% |
| streaming-pivot | gate3 | 0.77 | 0.1 | 0 | 0 | 0.15 | 0% |
| traditional-holdout | gate3 | 0.82 | 0.14 | 0 | 0 | 0.1 | 0% |
| limited-focus | gate3 | 0.91 | 0.12 | 0 | 0 | 0.04 | 0% |
| tv-duds | gate3 | 0 | 0 | 0 | 0 | 0 | 0% |

### Gate 3 design trade-offs by strategy

(a) money · (b) Prestige · (c) time to TV / streaming · (d) successful IPs · (e) Hall of Fame · (f) last-12-month revenue mix · (g) solvency. Medians unless noted; shares are of careers.

| Strategy | Config | (a) cash median | min cash | ever negative | (b) Prestige | (c) TV unlock yr (share) | streaming live yr (share) | subs end | payback yrs (share) | (d) IPs ≥10K fans | shows · seasons · max | (e) HoF / career | (f) last-12-mo mix: traditional / subs / opex | streaming share | releases |
|---|---|---:|---:|---:|---:|---|---|---:|---|---:|---|---:|---|---:|---:|
| balanced | gate3 | $0.87M | $-4K | 70% | 75 | — (0%) | — (0%) | — | — (0%) | 1.0 | 0.0 · 0.0 · 0.0 | 0.0 | $0.94M / $0.00M / $0.00M | — | 5 |
| quality-first | gate3 | $0.82M | $-2K | 60% | 75 | — (0%) | — (0%) | — | — (0%) | 1.0 | 0.0 · 0.0 · 0.0 | 0.0 | $0.92M / $0.00M / $0.00M | — | 5 |
| repeat-farmer | gate3 | $0.80M | $-3K | 65% | 75 | — (0%) | — (0%) | — | — (0%) | 1.0 | 0.0 · 0.0 · 0.0 | 0.0 | $0.91M / $0.00M / $0.00M | — | 5 |
| cheap-duds | gate3 | $0.51M | $4K | 5% | 0 | — (0%) | — (0%) | — | — (0%) | 0.0 | 0.0 · 0.0 · 0.0 | 0.0 | $0.39M / $0.00M / $0.00M | — | 5 |
| self-funder | gate3 | $0.29M | $-29K | 100% | 0 | — (0%) | — (0%) | — | — (0%) | 0.0 | 0.0 · 0.0 · 0.0 | 0.0 | $0.52M / $0.00M / $0.00M | — | 5 |
| tv-first | gate3 | $1.11M | $-4K | 74% | 75 | — (0%) | — (0%) | — | — (0%) | 0.0 | 0.0 · 0.0 · 0.0 | 0.0 | $1.08M / $0.00M / $0.00M | — | 5 |
| renewal-franchise | gate3 | $0.82M | $-1K | 54% | 75 | — (0%) | — (0%) | — | — (0%) | 1.0 | 0.0 · 0.0 · 0.0 | 0.0 | $0.89M / $0.00M / $0.00M | — | 5 |
| mixed | gate3 | $1.11M | $-3K | 73% | 75 | — (0%) | — (0%) | — | — (0%) | 0.0 | 0.0 · 0.0 · 0.0 | 0.0 | $1.08M / $0.00M / $0.00M | — | 5 |
| streaming-pivot | gate3 | $0.88M | $-3K | 65% | 75 | — (0%) | — (0%) | — | — (0%) | 1.0 | 0.0 · 0.0 · 0.0 | 0.0 | $0.95M / $0.00M / $0.00M | — | 5 |
| traditional-holdout | gate3 | $0.94M | $-4K | 73% | 75 | — (0%) | — (0%) | — | — (0%) | 1.0 | 0.0 · 0.0 · 0.0 | 0.0 | $0.99M / $0.00M / $0.00M | — | 5 |
| limited-focus | gate3 | $0.99M | $-1K | 52% | 75 | — (0%) | — (0%) | — | — (0%) | 0.0 | 0.0 · 0.0 · 0.0 | 0.0 | $0.96M / $0.00M / $0.00M | — | 5 |
| tv-duds | gate3 | $0.51M | $4K | 4% | 0 | — (0%) | — (0%) | — | — (0%) | 0.0 | 0.0 · 0.0 · 0.0 | 0.0 | $0.39M / $0.00M / $0.00M | — | 5 |

### Formats: share of releases · mean score · HoF % · net per production week; Prestige sources

| Strategy | Config | limited_series: share · avg · HoF% · net/prod-wk | movie: share · avg · HoF% · net/prod-wk | Prestige by format | top Prestige sources |
|---|---|---|---|---|---|
| balanced | gate3 | — | 100% · 6.49 · 0% · $15.6K | movie 100% | audience_7_5 72.7%, critic_8_5 11.3%, meters_all_70 10.5%, ip_viewers_500k 3.3% |
| quality-first | gate3 | — | 100% · 6.5 · 0% · $15.0K | movie 100% | audience_7_5 78.1%, meters_all_70 12.6%, critic_8_5 9.4% |
| repeat-farmer | gate3 | — | 100% · 6.52 · 0% · $15.0K | movie 100% | audience_7_5 48.4%, ip_viewers_500k 21.8%, ip_gross_1m 14.5%, critic_8_5 7.8% |
| cheap-duds | gate3 | — | 100% · 5.7 · 0% · $8.8K |  |  |
| self-funder | gate3 | — | 100% · 5.88 · 0% · $5.9K |  |  |
| tv-first | gate3 | 80% · 6.72 · 0% · $18.8K | 20% · 5.6 · 0% · $9.9K | limited_series 100% | audience_7_5 80.3%, critic_8_5 15.4%, meters_all_70 4.2% |
| renewal-franchise | gate3 | — | 100% · 6.48 · 0% · $15.3K | movie 100% | audience_7_5 77.7%, meters_all_70 11.4%, critic_8_5 10.8% |
| mixed | gate3 | 80% · 6.73 · 0% · $18.9K | 20% · 5.62 · 0% · $9.6K | limited_series 100% | audience_7_5 84.3%, critic_8_5 13.2%, meters_all_70 2.5% |
| streaming-pivot | gate3 | — | 100% · 6.49 · 0% · $15.8K | movie 100% | audience_7_5 78.2%, critic_8_5 11.6%, meters_all_70 10.2% |
| traditional-holdout | gate3 | 19% · 6.74 · 0% · $19.1K | 81% · 6.41 · 0% · $15.3K | limited_series 25.2%, movie 74.8% | audience_7_5 78.7%, critic_8_5 14.6%, meters_all_70 6.7% |
| limited-focus | gate3 | 80% · 6.72 · 0% · $17.3K | 20% · 5.65 · 0% · $9.4K | limited_series 100% | audience_7_5 84.8%, critic_8_5 12.7%, meters_all_70 2.5% |
| tv-duds | gate3 | — | 100% · 5.69 · 0% · $8.7K |  |  |

### Gate 3 provisional flags

| Variant | Flag | Fired | Evidence |
|---|---|---|---|
| gate3 | STREAMING_INFINITE_GROWTH | no | not fired: 0/0 launched careers reached ≥90% of the reachable subscriber market (growth is capped by design; this flags saturation) [PROVISIONAL threshold] |
| gate3 | SUBSCRIBER_CHURN_SPIRAL | no | not fired: 0/0 launched careers lost >60% of subscribers within 3 years [PROVISIONAL threshold] |
| gate3 | TV_SEASON_TOO_PROFITABLE | no | not fired: 0/0 finished traditional TV seasons netted >2× the batch's pooled movie net per production week ($12,588) [PROVISIONAL threshold] |
| gate3 | TV_SEASON_TOO_LONG | no | not fired: 0 careers kept one show running ≥12 seasons (fatigue cap 0.35 may allow endless renewals) [PROVISIONAL threshold] |
| gate3 | TV_NO_RENEWAL_PATH | no | not fired: 0/0 TV careers never made a second season [PROVISIONAL threshold] |
| gate3 | MIXED_ECONOMY_SOFTLOCK | no | not fired: 0/2400 careers spent ≥3 years with negative cash [PROVISIONAL threshold] |
| gate3 | FORMAT_DOMINANT | no | not fired: best cash: tv-first; best Prestige: balanced; fires only if one strategy leads both by >50% [PROVISIONAL threshold] |
| gate3 | DELAYED_STUDIO_PROGRESSION | no | not fired: TV not unlocked by year 8: 0/0; streaming not live by year 15: 0/0 [PROVISIONAL threshold] |

### Diagnostic flags fired

| Variant | Fired |
|---|---|
| gate3 | EARLY_SOFTLOCK |

## 5-year careers (in-game calendar horizon; productions vary by strategy)

Invariant violations across all variants: **0**.

### Medians by strategy

| Strategy | Variant | endCash | prestige | prestigePerRelease | meanAudience | meanCritic | share8plus | share9plus | shareLate8plus | hofShare | maxStaffEnd | staffCount | meanStaffStat | upgrades | firstUpgradeWeek | years | maxIpFans | negativeCashWeeks |
|---|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|
| balanced | gate3 | $2576K | 2482.50 | 155.15 | 7.74 | 7.71 | 50% | 6% | 86% | 6% | 8 | 8 | 51.80 | 2 | 112 | 5 | 49240.50 | 2 |
| quality-first | gate3 | $2559K | 1937.50 | 121.10 | 7.70 | 7.65 | 44% | 6% | 86% | 6% | 8 | 8 | 51.40 | 2 | 112 | 5 | 23166.50 | 1 |
| repeat-farmer | gate3 | $2771K | 1512.50 | 94.55 | 7.16 | 7.17 | 6% | 0% | 0% | 0% | 8 | 8 | 52.40 | 2 | 112 | 5 | 114452.50 | 2 |
| cheap-duds | gate3 | $1870K | 0 | 0 | 5.95 | 6.11 | 0% | 0% | 0% | 0% | 4 | 2 | 52.40 | 0 | — | 5 | 3851.50 | 0 |
| self-funder | gate3 | $185K | 150 | 9.40 | 6.54 | 6.56 | 0% | 0% | 0% | 0% | 4 | 2 | 70.90 | 0 | — | 5 | 3586.50 | 12 |
| tv-first | gate3 | $1830K | 1285 | 99.20 | 7.45 | 7.39 | 35% | 0% | 67% | 0% | 8 | 8 | 48.60 | 2 | 124 | 5 | 59817 | 2 |
| renewal-franchise | gate3 | $1524K | 1300 | 97.50 | 7.42 | 7.30 | 26% | 0% | 50% | 0% | 8 | 8 | 49.25 | 2 | 112 | 5 | 61491.50 | 1 |
| mixed | gate3 | $2307K | 1642.50 | 117.85 | 7.57 | 7.53 | 43% | 0% | 83% | 0% | 8 | 7 | 51.60 | 2 | 124 | 5 | 27010.50 | 2 |
| streaming-pivot | gate3 | $2507K | 2005 | 125.30 | 7.68 | 7.70 | 44% | 6% | 86% | 6% | 8 | 7 | 53.90 | 2 | 112 | 5 | 23688 | 2 |
| traditional-holdout | gate3 | $1950K | 1445 | 107.60 | 7.49 | 7.47 | 38% | 0% | 67% | 0% | 8 | 8 | 49 | 2 | 114 | 5 | 50362.50 | 2 |
| limited-focus | gate3 | $2429K | 1550 | 110.70 | 7.63 | 7.57 | 43% | 0% | 83% | 0% | 8 | 8 | 49.30 | 2 | 124 | 5 | 17690 | 1 |
| tv-duds | gate3 | $1814K | 0 | 0 | 5.92 | 6.09 | 0% | 0% | 0% | 0% | 4 | 2 | 52.40 | 0 | — | 5 | 3637 | 0 |

### Paired deltas vs **gate3** (median of per-seed differences; share of seeds where the variant is higher)

| Strategy | Variant | Δ endCash | Δ prestige | Δ share8plus | Δ meanAudience |
|---|---|---:|---:|---:|---:|

### Mean review score (avg of Audience+Critic) by production index

| Strategy | Variant | #1 | #5 | #10 | #20 | #30 | #40 |
|---|---|---:|---:|---:|---:|---:|---:|
| balanced | gate3 | 5.65 | 7.38 | 8.31 | — | — | — |
| quality-first | gate3 | 5.58 | 7.34 | 8.20 | — | — | — |
| repeat-farmer | gate3 | 5.64 | 7.41 | 7.78 | — | — | — |
| cheap-duds | gate3 | 5.47 | 5.84 | 6.15 | — | — | — |
| self-funder | gate3 | 5.49 | 6.13 | 6.76 | — | — | — |
| tv-first | gate3 | 5.60 | 7.44 | 8.18 | — | — | — |
| renewal-franchise | gate3 | 5.65 | 7.40 | 8.04 | — | — | — |
| mixed | gate3 | 5.62 | 7.43 | 8.24 | — | — | — |
| streaming-pivot | gate3 | 5.67 | 7.35 | 8.29 | — | — | — |
| traditional-holdout | gate3 | 5.62 | 7.39 | 8.19 | — | — | — |
| limited-focus | gate3 | 5.65 | 7.42 | 8.30 | — | — | — |
| tv-duds | gate3 | 5.47 | 5.85 | 6.08 | — | — | — |

### Great films — all strategies pooled, by release window

Denominators are films in that window. HoF = average of Audience and Critic ≥ hofThreshold (9.0). `≥9` is inclusive, `>9` strict.

| Strategy | Config | Window | Films (n) | Avg Aud | Avg Crit | HoF n (%) | Avg ≥9 n (%) | Avg >9 n (%) | Aud ≥9 n (%) | Crit ≥9 n (%) | 8+ n (%) | Careers with 0 HoF | HoF/career p10/p50/p90 | Best/career p10/p50/p90/p99 | Best combined movie | Prestige median |
|---|---|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---|---|---|---:|
| ALL | gate3 | 1-5 | 12000 | 6.28 | 6.34 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 1 (0.0%) | 304 (2.5%) | 100% of 2400 | 0/0/0 | 6.2/7.42/8.05/8.52 | 8.91 "Midnight Rising" (A8.47/C9.36; renewal-franchise seed 15 #5, yr 1.5, critic gen 0) |  |
| ALL | gate3 | 6-20 | 23898 | 7.61 | 7.57 | 1340 (5.6%) | 1340 (5.6%) | 1286 (5.4%) | 2160 (9.0%) | 2063 (8.6%) | 9531 (39.9%) | 70% of 2400 | 0/0/2 | 7.01/8.62/9.4/9.8 | 10.00 "Dead Pulse" (A10/C10; quality-first seed 56 #15, yr 4.6, critic gen 0) |  |
| ALL | gate3 | 21-50 | 0 | NaN | NaN | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0% of 0 | — | — | — |  |
| ALL | gate3 | 51-100 | 0 | NaN | NaN | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0% of 0 | — | — | — |  |
| ALL | gate3 | all | 35898 | 7.17 | 7.16 | 1340 (3.7%) | 1340 (3.7%) | 1286 (3.6%) | 2160 (6.0%) | 2064 (5.8%) | 9835 (27.4%) | 70% of 2400 | 0/0/2 | 7.01/8.62/9.4/9.8 | 10.00 "Dead Pulse" (A10/C10; quality-first seed 56 #15, yr 4.6, critic gen 0) |  |

### Great films by strategy (whole career)

| Strategy | Config | Window | Films (n) | Avg Aud | Avg Crit | HoF n (%) | Avg ≥9 n (%) | Avg >9 n (%) | Aud ≥9 n (%) | Crit ≥9 n (%) | 8+ n (%) | Careers with 0 HoF | HoF/career p10/p50/p90 | Best/career p10/p50/p90/p99 | Best combined movie | Prestige median |
|---|---|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---|---|---|---:|
| balanced | gate3 | all | 3200 | 7.76 | 7.72 | 301 (9.4%) | 301 (9.4%) | 294 (9.2%) | 440 (13.8%) | 425 (13.3%) | 1560 (48.8%) | 31% of 200 | 0/1/3 | 8.8/9.16/9.65/9.76 | 10.00 "Iron Shadow" (A10/C10; balanced seed 115 #14, yr 4.3, critic gen 0) | 2482.5 |
| quality-first | gate3 | all | 3200 | 7.71 | 7.66 | 243 (7.6%) | 243 (7.6%) | 236 (7.4%) | 364 (11.4%) | 342 (10.7%) | 1474 (46.1%) | 29% of 200 | 0/1/3 | 8.75/9.14/9.66/10 | 10.00 "Dead Pulse" (A10/C10; quality-first seed 56 #15, yr 4.6, critic gen 0) | 1937.5 |
| repeat-farmer | gate3 | all | 3200 | 7.17 | 7.19 | 13 (0.4%) | 13 (0.4%) | 13 (0.4%) | 18 (0.6%) | 31 (1.0%) | 404 (12.6%) | 99% of 200 | 0/0/0 | 7.63/8.02/8.57/8.99 | 9.58 "Iron Pulse" (A9.49/C9.67; repeat-farmer seed 38 #9, yr 2.8, critic gen 0) | 1512.5 |
| cheap-duds | gate3 | all | 3200 | 5.94 | 6.08 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 100% of 200 | 0/0/0 | 6.61/6.95/7.34/7.65 | 7.71 "Lost Rising" (A7.53/C7.89; cheap-duds seed 58 #16, yr 4.9, critic gen 0) | 0 |
| self-funder | gate3 | all | 3200 | 6.55 | 6.54 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 44 (1.4%) | 100% of 200 | 0/0/0 | 7.24/7.62/8.16/8.64 | 8.68 "Lost Frequency" (A8.59/C8.77; self-funder seed 58 #16, yr 4.9, critic gen 0) | 150 |
| tv-first | gate3 | all | 2577 | 7.42 | 7.37 | 61 (2.4%) | 61 (2.4%) | 60 (2.3%) | 136 (5.3%) | 92 (3.6%) | 819 (31.8%) | 87% of 200 | 0/0/1.1 | 8.16/8.52/9.13/9.57 | 9.77 "Dead Legacy" (tv, A9.67/C9.87; tv-first seed 145 #11, yr 3.7, critic gen 0) | 1285 |
| renewal-franchise | gate3 | all | 2663 | 7.38 | 7.30 | 40 (1.5%) | 40 (1.5%) | 36 (1.4%) | 132 (5.0%) | 75 (2.8%) | 760 (28.5%) | 91% of 200 | 0/0/0 | 8.07/8.5/8.93/9.46 | 9.59 "Red Run: Season 4" (tv, A9.52/C9.65; renewal-franchise seed 27 #13, yr 4.8, critic gen 0) | 1300 |
| mixed | gate3 | all | 2775 | 7.58 | 7.50 | 132 (4.8%) | 132 (4.8%) | 124 (4.5%) | 259 (9.3%) | 217 (7.8%) | 1117 (40.3%) | 58% of 200 | 0/0/2 | 8.5/8.93/9.36/9.81 | 9.91 "Hollow Frequency" (A9.82/C10; mixed seed 38 #14, yr 4.8, critic gen 0) | 1642.5 |
| streaming-pivot | gate3 | all | 3200 | 7.71 | 7.68 | 285 (8.9%) | 285 (8.9%) | 271 (8.5%) | 391 (12.2%) | 409 (12.8%) | 1479 (46.2%) | 23% of 200 | 0/1/3 | 8.79/9.27/9.65/10 | 10.00 "Midnight Storm" (A10/C10; streaming-pivot seed 56 #16, yr 4.9, critic gen 0) | 2005 |
| traditional-holdout | gate3 | all | 2683 | 7.48 | 7.45 | 101 (3.8%) | 101 (3.8%) | 96 (3.6%) | 181 (6.8%) | 172 (6.4%) | 968 (36.1%) | 74% of 200 | 0/0/2 | 8.31/8.73/9.32/9.64 | 9.78 "Broken Signal" (tv, A9.72/C9.84; traditional-holdout seed 18 #12, yr 4.0, critic gen 0) | 1445 |
| limited-focus | gate3 | all | 2800 | 7.61 | 7.57 | 164 (5.9%) | 164 (5.9%) | 156 (5.6%) | 239 (8.5%) | 301 (10.8%) | 1210 (43.2%) | 52% of 200 | 0/0/2 | 8.58/8.98/9.53/9.99 | 10.00 "Dead Protocol" (limited_series, A10/C10; limited-focus seed 148 #11, yr 3.8, critic gen 0) | 1550 |
| tv-duds | gate3 | all | 3200 | 5.92 | 6.07 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 100% of 200 | 0/0/0 | 6.59/6.95/7.31/7.74 | 7.90 "Silver Storm" (A7.79/C8; tv-duds seed 7 #16, yr 4.9, critic gen 0) | 0 |

### Greatest single films (all strategies, whole sample; reproducible from seed + config hash)

| Variant | Best combined | Best Audience | Best Critic | Year band with most HoF |
|---|---|---|---|---|
| gate3 | 10.00 "Dead Pulse" (A10/C10; quality-first seed 56 #15, yr 4.6, critic gen 0) | 10.00 "Dead Pulse" (A10/C10; quality-first seed 56 #15, yr 4.6, critic gen 0) | 10.00 "Dead Pulse" (A10/C10; quality-first seed 56 #15, yr 4.6, critic gen 0) | y0-5: 3.7% of 35816 |

### Great films by in-game year (all strategies pooled)

| Strategy | Config | Window | Films (n) | Avg Aud | Avg Crit | HoF n (%) | Avg ≥9 n (%) | Avg >9 n (%) | Aud ≥9 n (%) | Crit ≥9 n (%) | 8+ n (%) | Careers with 0 HoF | HoF/career p10/p50/p90 | Best/career p10/p50/p90/p99 | Best combined movie | Prestige median |
|---|---|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---|---|---|---:|
| ALL | gate3 | y0-5 | 35816 | 7.16 | 7.16 | 1340 (3.7%) | 1340 (3.7%) | 1286 (3.6%) | 2157 (6.0%) | 2061 (5.8%) | 9793 (27.3%) | 70% of 2400 | 0/0/2 | 7.01/8.62/9.4/9.8 | 10.00 "Dead Pulse" (A10/C10; quality-first seed 56 #15, yr 4.6, critic gen 0) |  |
| ALL | gate3 | y5-10 | 82 | 7.96 | 7.89 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 3 (3.7%) | 3 (3.7%) | 42 (51.2%) | 100% of 82 | 0/0/0 | 7.11/8.02/8.57/8.85 | 8.91 "Broken Signal: Season 4" (tv, A8.86/C8.96; traditional-holdout seed 3 #14, yr 5.0, critic gen 0) |  |

### Prestige progression (Prestige gates growth; cash sustains operations)

`cash-rich but Prestige-locked` = careers that at some week had the cash for the next upgrade but not the Prestige. `bought below gate` must be 0 (engine rule).

| Strategy | Config | Cash median | Prestige median | Prestige/yr | Careers with negative-cash weeks | →6 gate met (Prestige ≥ 200) · median film # | →6 bought · median film # | →6 cash-rich but Prestige-locked | →6 bought below gate | →8 gate met (Prestige ≥ 1000) · median film # | →8 bought · median film # | →8 cash-rich but Prestige-locked | →8 bought below gate |
|---|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|
| balanced | gate3 | $2.58M | 2482.5 | 496.5 | 70% | 100% · #7 | 100% · #7 | 100% | 0 | 100% · #11 | 100% · #11 | 100% | 0 |
| quality-first | gate3 | $2.56M | 1937.5 | 387.5 | 60% | 100% · #7 | 100% · #7 | 100% | 0 | 100% · #12 | 100% · #12 | 100% | 0 |
| repeat-farmer | gate3 | $2.77M | 1512.5 | 302.5 | 65% | 100% · #6 | 100% · #7 | 100% | 0 | 84% · #11 | 83% · #11 | 100% | 0 |
| cheap-duds | gate3 | $1.87M | 0 | 0 | 5% | 0% · #— | 0% · #— | 100% | 0 | 0% · #— | 0% · #— | 0% | 0 |
| self-funder | gate3 | $0.18M | 150 | 30 | 100% | 30% · #15 | 0% · #— | 59% | 0 | 0% · #— | 0% · #— | 0% | 0 |
| tv-first | gate3 | $1.83M | 1285 | 257 | 74% | 100% · #7 | 100% · #7 | 100% | 0 | 88% · #11 | 86% · #11 | 100% | 0 |
| renewal-franchise | gate3 | $1.52M | 1300 | 260 | 54% | 100% · #7 | 100% · #7 | 100% | 0 | 91% · #11 | 90% · #12 | 100% | 0 |
| mixed | gate3 | $2.31M | 1642.5 | 328.5 | 73% | 100% · #7 | 100% · #7 | 100% | 0 | 100% · #12 | 99% · #12 | 100% | 0 |
| streaming-pivot | gate3 | $2.51M | 2005 | 401 | 65% | 100% · #7 | 100% · #7 | 100% | 0 | 100% · #12 | 100% · #12 | 100% | 0 |
| traditional-holdout | gate3 | $1.95M | 1445 | 289 | 73% | 100% · #7 | 100% · #7 | 100% | 0 | 96% · #11 | 95% · #12 | 100% | 0 |
| limited-focus | gate3 | $2.43M | 1550 | 310 | 52% | 100% · #7 | 100% · #7 | 100% | 0 | 97% · #12 | 97% · #12 | 100% | 0 |
| tv-duds | gate3 | $1.81M | 0 | 0 | 4% | 0% · #— | 0% · #— | 100% | 0 | 0% · #— | 0% · #— | 0% | 0 |

### Prestige milestones awarded per career (mean)

| Strategy | Variant | audience_7_5 | critic_8_5 | first_hall_of_fame | hall_of_fame | ip_gross_1m | ip_gross_5m | ip_viewers_500k | meters_all_70 | careers > 400 Prestige/yr (OUTDATED threshold) |
|---|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|
| balanced | gate3 | 10.45 | 4.67 | 0.69 | 1.5 | 1.5 | 0 | 1.5 | 10.61 | 77% |
| quality-first | gate3 | 10.19 | 4.13 | 0.71 | 1.22 | 0 | 0 | 0 | 10.6 | 45% |
| repeat-farmer | gate3 | 6.25 | 0.95 | 0.01 | 0.07 | 1 | 0.9 | 1 | 10.64 | 7% |
| cheap-duds | gate3 | 0.1 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0% |
| self-funder | gate3 | 1.76 | 0.14 | 0 | 0 | 0 | 0 | 0 | 0.03 | 0% |
| tv-first | gate3 | 7.01 | 1.83 | 0.13 | 0.3 | 1 | 0.01 | 1 | 7.01 | 5% |
| renewal-franchise | gate3 | 6.97 | 1.64 | 0.09 | 0.2 | 1 | 0.01 | 1 | 7.9 | 4% |
| mixed | gate3 | 8.43 | 3.05 | 0.42 | 0.66 | 0.97 | 0 | 0.86 | 7.93 | 15% |
| streaming-pivot | gate3 | 10.19 | 4.37 | 0.77 | 1.43 | 0 | 0 | 0 | 10.51 | 51% |
| traditional-holdout | gate3 | 7.5 | 2.46 | 0.27 | 0.51 | 0.93 | 0.01 | 0.91 | 7.83 | 13% |
| limited-focus | gate3 | 8.66 | 3.4 | 0.48 | 0.82 | 0.08 | 0 | 0 | 8.15 | 17% |
| tv-duds | gate3 | 0.1 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0% |

### Gate 3 design trade-offs by strategy

(a) money · (b) Prestige · (c) time to TV / streaming · (d) successful IPs · (e) Hall of Fame · (f) last-12-month revenue mix · (g) solvency. Medians unless noted; shares are of careers.

| Strategy | Config | (a) cash median | min cash | ever negative | (b) Prestige | (c) TV unlock yr (share) | streaming live yr (share) | subs end | payback yrs (share) | (d) IPs ≥10K fans | shows · seasons · max | (e) HoF / career | (f) last-12-mo mix: traditional / subs / opex | streaming share | releases |
|---|---|---:|---:|---:|---:|---|---|---:|---|---:|---|---:|---|---:|---:|
| balanced | gate3 | $2.58M | $-4K | 70% | 2,483 | — (0%) | — (0%) | — | — (0%) | 7.0 | 0.0 · 0.0 · 0.0 | 1.0 | $1.55M / $0.00M / $0.00M | — | 16 |
| quality-first | gate3 | $2.56M | $-2K | 60% | 1,938 | — (0%) | — (0%) | — | — (0%) | 8.0 | 0.0 · 0.0 · 0.0 | 1.0 | $1.52M / $0.00M / $0.00M | — | 16 |
| repeat-farmer | gate3 | $2.77M | $-3K | 65% | 1,513 | — (0%) | — (0%) | — | — (0%) | 1.0 | 0.0 · 0.0 · 0.0 | 0.0 | $1.40M / $0.00M / $0.00M | — | 16 |
| cheap-duds | gate3 | $1.87M | $4K | 5% | 0 | — (0%) | — (0%) | — | — (0%) | 0.0 | 0.0 · 0.0 · 0.0 | 0.0 | $0.55M / $0.00M / $0.00M | — | 16 |
| self-funder | gate3 | $0.18M | $-29K | 100% | 150 | — (0%) | — (0%) | — | — (0%) | 0.0 | 0.0 · 0.0 · 0.0 | 0.0 | $0.59M / $0.00M / $0.00M | — | 16 |
| tv-first | gate3 | $1.83M | $-4K | 74% | 1,285 | 2.7 (100%) | — (0%) | — | — (0%) | 2.0 | 1.0 · 5.0 · 5.0 | 0.0 | $1.03M / $0.00M / $0.00M | — | 13 |
| renewal-franchise | gate3 | $1.52M | $-1K | 54% | 1,300 | 2.5 (100%) | — (0%) | — | — (0%) | 2.0 | 1.0 · 6.0 · 6.0 | 0.0 | $0.99M / $0.00M / $0.00M | — | 13 |
| mixed | gate3 | $2.31M | $-3K | 73% | 1,643 | 2.7 (100%) | — (0%) | — | — (0%) | 4.0 | 1.0 · 2.0 · 2.0 | 0.0 | $1.33M / $0.00M / $0.00M | — | 14 |
| streaming-pivot | gate3 | $2.51M | $-3K | 65% | 2,005 | 2.5 (100%) | 4.9 (1%) | 24,214 | — (0%) | 8.0 | 0.0 · 0.0 · 0.0 | 1.0 | $1.55M / $0.00M / $0.00M | 4% | 16 |
| traditional-holdout | gate3 | $1.95M | $-4K | 73% | 1,445 | 2.5 (100%) | — (0%) | — | — (0%) | 3.0 | 1.0 · 4.0 · 4.0 | 0.0 | $1.03M / $0.00M / $0.00M | — | 13 |
| limited-focus | gate3 | $2.43M | $-1K | 52% | 1,550 | 2.7 (100%) | — (0%) | — | — (0%) | 5.0 | 0.0 · 0.0 · 0.0 | 0.0 | $1.31M / $0.00M / $0.00M | — | 14 |
| tv-duds | gate3 | $1.81M | $4K | 4% | 0 | — (0%) | — (0%) | — | — (0%) | 0.0 | 0.0 · 0.0 · 0.0 | 0.0 | $0.53M / $0.00M / $0.00M | — | 16 |

### Formats: share of releases · mean score · HoF % · net per production week; Prestige sources

| Strategy | Config | limited_series: share · avg · HoF% · net/prod-wk | movie: share · avg · HoF% · net/prod-wk | tv: share · avg · HoF% · net/prod-wk | Prestige by format | top Prestige sources |
|---|---|---|---|---|---|---|
| balanced | gate3 | — | 100% · 7.74 · 9.4% · $21.9K | — | movie 100% | audience_7_5 31.9%, meters_all_70 21.6%, critic_8_5 16.1%, hall_of_fame 12.3% |
| quality-first | gate3 | — | 100% · 7.68 · 7.6% · $21.7K | — | movie 100% | audience_7_5 39%, meters_all_70 27%, critic_8_5 17.9%, hall_of_fame 12.4% |
| repeat-farmer | gate3 | — | 100% · 7.18 · 0.4% · $22.2K | — | movie 100% | meters_all_70 36%, audience_7_5 31.7%, ip_viewers_500k 10.1%, ip_gross_5m 9.1% |
| cheap-duds | gate3 | — | 100% · 6.02 · 0% · $9.4K | — | movie 100% | audience_7_5 100% |
| self-funder | gate3 | — | 100% · 6.55 · 0% · $4.1K | — | movie 100% | audience_7_5 91%, critic_8_5 8.2%, meters_all_70 0.9% |
| tv-first | gate3 | 53% · 7.17 · 0.6% · $20.9K | 8% · 5.6 · 0% · $9.9K | 39% · 8.05 · 5.3% · $18.7K | limited_series 28.5%, tv 71.5% | audience_7_5 38.7%, meters_all_70 25.8%, critic_8_5 11.5%, ip_viewers_500k 11% |
| renewal-franchise | gate3 | — | 58% · 6.94 · 0.6% · $18.0K | 42% · 7.89 · 2.7% · $18.8K | movie 28.3%, tv 71.7% | audience_7_5 38.5%, meters_all_70 29.1%, ip_viewers_500k 11%, critic_8_5 10.3% |
| mixed | gate3 | 62% · 7.41 · 3% · $22.5K | 22% · 7.44 · 9.7% · $20.3K | 16% · 8.2 · 4.9% · $17.2K | limited_series 43.2%, tv 33.7%, movie 23.1% | audience_7_5 37.4%, meters_all_70 23.5%, critic_8_5 15.4%, hall_of_fame 7.8% |
| streaming-pivot | gate3 | — | 100% · 7.7 · 8.9% · $22.0K | — | movie 100% | audience_7_5 37.8%, meters_all_70 26%, critic_8_5 18.4%, hall_of_fame 14.1% |
| traditional-holdout | gate3 | 17% · 7.5 · 4.1% · $22.9K | 54% · 7.09 · 1.7% · $19.2K | 29% · 8.17 · 7.6% · $20.1K | limited_series 14.2%, movie 31.3%, tv 54.5% | audience_7_5 37%, meters_all_70 25.7%, critic_8_5 13.8%, ip_viewers_500k 9% |
| limited-focus | gate3 | 93% · 7.74 · 6.3% · $22.4K | 7% · 5.65 · 0% · $9.4K | — | limited_series 100% | audience_7_5 41.5%, meters_all_70 26%, critic_8_5 18.4%, hall_of_fame 10.5% |
| tv-duds | gate3 | — | 100% · 6 · 0% · $9.4K | — | movie 100% | audience_7_5 100% |

### Gate 3 provisional flags

| Variant | Flag | Fired | Evidence |
|---|---|---|---|
| gate3 | STREAMING_INFINITE_GROWTH | no | not fired: 0/1 launched careers reached ≥90% of the reachable subscriber market (growth is capped by design; this flags saturation) [PROVISIONAL threshold] |
| gate3 | SUBSCRIBER_CHURN_SPIRAL | no | not fired: 0/1 launched careers lost >60% of subscribers within 3 years [PROVISIONAL threshold] |
| gate3 | TV_SEASON_TOO_PROFITABLE | no | not fired: 4/2973 finished traditional TV seasons netted >2× the batch's pooled movie net per production week ($16,336) [PROVISIONAL threshold] |
| gate3 | TV_SEASON_TOO_LONG | no | not fired: 0 careers kept one show running ≥12 seasons (fatigue cap 0.35 may allow endless renewals) [PROVISIONAL threshold] |
| gate3 | TV_NO_RENEWAL_PATH | no | not fired: 0/792 TV careers never made a second season [PROVISIONAL threshold] |
| gate3 | MIXED_ECONOMY_SOFTLOCK | no | not fired: 0/2400 careers spent ≥3 years with negative cash [PROVISIONAL threshold] |
| gate3 | FORMAT_DOMINANT | no | not fired: best cash: repeat-farmer; best Prestige: balanced; fires only if one strategy leads both by >50% [PROVISIONAL threshold] |
| gate3 | DELAYED_STUDIO_PROGRESSION | no | not fired: TV not unlocked by year 8: 0/0; streaming not live by year 15: 0/0 [PROVISIONAL threshold] |

### Diagnostic flags fired

| Variant | Fired |
|---|---|
| gate3 | EARLY_SOFTLOCK, QUALITY_INFLATION, DEAD_STRATEGY |

## 10-year careers (in-game calendar horizon; productions vary by strategy)

Invariant violations across all variants: **0**.

### Medians by strategy

| Strategy | Variant | endCash | prestige | prestigePerRelease | meanAudience | meanCritic | share8plus | share9plus | shareLate8plus | hofShare | maxStaffEnd | staffCount | meanStaffStat | upgrades | firstUpgradeWeek | years | maxIpFans | negativeCashWeeks |
|---|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|
| balanced | gate3 | $7189K | 6527.50 | 204 | 8.27 | 8.20 | 69% | 22% | 85% | 22% | 8 | 8 | 78.70 | 2 | 112 | 10 | 86287.50 | 2 |
| quality-first | gate3 | $7327K | 5772.50 | 180.40 | 8.26 | 8.17 | 69% | 19% | 92% | 19% | 8 | 8 | 78.50 | 2 | 112 | 10 | 25865.50 | 1 |
| repeat-farmer | gate3 | $7504K | 2350 | 73.40 | 6.91 | 6.88 | 3% | 0% | 0% | 0% | 8 | 8 | 78.60 | 2 | 112 | 10 | 173168 | 2 |
| cheap-duds | gate3 | $4313K | 75 | 2.30 | 6.17 | 6.33 | 0% | 0% | 0% | 0% | 4 | 2 | 69.40 | 0 | — | 10 | 6252.50 | 0 |
| self-funder | gate3 | $211K | 1517.50 | 47.45 | 7.06 | 7.03 | 9% | 0% | 23% | 0% | 4 | 2 | 100 | 0 | — | 10 | 4190 | 12 |
| tv-first | gate3 | $5840K | 3115 | 148.10 | 7.69 | 7.63 | 42% | 0% | 56% | 0% | 8 | 8 | 71.35 | 2 | 124 | 10 | 86425.50 | 2 |
| renewal-franchise | gate3 | $3829K | 1950 | 88.60 | 6.96 | 6.81 | 17% | 0% | 0% | 0% | 8 | 8 | 72.40 | 2 | 112 | 10 | 77851.50 | 1 |
| mixed | gate3 | $5993K | 4070 | 165.60 | 8 | 7.88 | 56% | 12% | 73% | 12% | 8 | 8 | 72.10 | 2 | 124 | 10 | 61419.50 | 2 |
| streaming-pivot | gate3 | $3220K | 4232.50 | 167.60 | 8.11 | 8 | 63% | 16% | 90% | 16% | 8 | 8 | 73 | 2 | 112 | 10 | 34504 | 2 |
| traditional-holdout | gate3 | $6305K | 3705 | 166.25 | 7.89 | 7.83 | 52% | 9% | 78% | 9% | 8 | 8 | 72.20 | 2 | 114 | 10 | 78623 | 2 |
| limited-focus | gate3 | $7214K | 5185 | 178.80 | 8.23 | 8.14 | 69% | 21% | 92% | 21% | 8 | 8 | 75.80 | 2 | 124 | 10 | 19500.50 | 1 |
| tv-duds | gate3 | $4294K | 75 | 2.30 | 6.18 | 6.33 | 0% | 0% | 0% | 0% | 4 | 2 | 69.40 | 0 | — | 10 | 6614.50 | 0 |

### Paired deltas vs **gate3** (median of per-seed differences; share of seeds where the variant is higher)

| Strategy | Variant | Δ endCash | Δ prestige | Δ share8plus | Δ meanAudience |
|---|---|---:|---:|---:|---:|

### Mean review score (avg of Audience+Critic) by production index

| Strategy | Variant | #1 | #5 | #10 | #20 | #30 | #40 |
|---|---|---:|---:|---:|---:|---:|---:|
| balanced | gate3 | 5.65 | 7.38 | 8.31 | 8.68 | 8.74 | — |
| quality-first | gate3 | 5.58 | 7.34 | 8.20 | 8.70 | 8.79 | — |
| repeat-farmer | gate3 | 5.64 | 7.41 | 7.78 | 6.61 | 6.69 | — |
| cheap-duds | gate3 | 5.47 | 5.84 | 6.15 | 6.41 | 6.58 | — |
| self-funder | gate3 | 5.49 | 6.13 | 6.76 | 7.45 | 7.57 | — |
| tv-first | gate3 | 5.60 | 7.44 | 8.18 | 8.32 | — | — |
| renewal-franchise | gate3 | 5.65 | 7.40 | 8.04 | 5.84 | — | — |
| mixed | gate3 | 5.62 | 7.43 | 8.24 | 8.33 | — | — |
| streaming-pivot | gate3 | 5.67 | 7.35 | 8.29 | 8.69 | 8.57 | — |
| traditional-holdout | gate3 | 5.62 | 7.39 | 8.19 | 8.47 | — | — |
| limited-focus | gate3 | 5.65 | 7.42 | 8.30 | 8.73 | — | — |
| tv-duds | gate3 | 5.47 | 5.85 | 6.08 | 6.44 | 6.61 | — |

### Great films — all strategies pooled, by release window

Denominators are films in that window. HoF = average of Audience and Critic ≥ hofThreshold (9.0). `≥9` is inclusive, `>9` strict.

| Strategy | Config | Window | Films (n) | Avg Aud | Avg Crit | HoF n (%) | Avg ≥9 n (%) | Avg >9 n (%) | Aud ≥9 n (%) | Crit ≥9 n (%) | 8+ n (%) | Careers with 0 HoF | HoF/career p10/p50/p90 | Best/career p10/p50/p90/p99 | Best combined movie | Prestige median |
|---|---|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---|---|---|---:|
| ALL | gate3 | 1-5 | 12000 | 6.28 | 6.34 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 1 (0.0%) | 304 (2.5%) | 100% of 2400 | 0/0/0 | 6.2/7.42/8.05/8.52 | 8.91 "Midnight Rising" (A8.47/C9.36; renewal-franchise seed 15 #5, yr 1.5, critic gen 0) |  |
| ALL | gate3 | 6-20 | 35957 | 7.67 | 7.62 | 3184 (8.9%) | 3184 (8.9%) | 3064 (8.5%) | 4296 (11.9%) | 4271 (11.9%) | 15452 (43.0%) | 52% of 2400 | 0/0/4 | 7.24/8.95/9.65/10 | 10.00 "Red Run" (limited_series, A10/C10; limited-focus seed 10 #20, yr 6.9, critic gen 0) |  |
| ALL | gate3 | 21-50 | 19195 | 7.70 | 7.66 | 3091 (16.1%) | 3091 (16.1%) | 3035 (15.8%) | 4125 (21.5%) | 3715 (19.4%) | 8364 (43.6%) | 58% of 2290 | 0/0/5 | 6.6/8.61/9.71/10 | 10.00 "Iron Frequency" (limited_series, A10/C10; limited-focus seed 6 #29, yr 10.0, critic gen 0) |  |
| ALL | gate3 | 51-100 | 0 | NaN | NaN | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0% of 0 | — | — | — |  |
| ALL | gate3 | all | 67152 | 7.43 | 7.40 | 6275 (9.3%) | 6275 (9.3%) | 6099 (9.1%) | 8421 (12.5%) | 7987 (11.9%) | 24120 (35.9%) | 47% of 2400 | 0/1/7 | 7.54/9.13/9.78/10 | 10.00 "Iron Frequency" (limited_series, A10/C10; limited-focus seed 6 #29, yr 10.0, critic gen 0) |  |

### Great films by strategy (whole career)

| Strategy | Config | Window | Films (n) | Avg Aud | Avg Crit | HoF n (%) | Avg ≥9 n (%) | Avg >9 n (%) | Aud ≥9 n (%) | Crit ≥9 n (%) | 8+ n (%) | Careers with 0 HoF | HoF/career p10/p50/p90 | Best/career p10/p50/p90/p99 | Best combined movie | Prestige median |
|---|---|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---|---|---|---:|
| balanced | gate3 | all | 6400 | 8.25 | 8.19 | 1458 (22.8%) | 1458 (22.8%) | 1422 (22.2%) | 1799 (28.1%) | 1806 (28.2%) | 4310 (67.3%) | 1% of 200 | 3/7/12 | 9.41/9.66/10/10 | 10.00 "Dead Protocol" (A10/C10; balanced seed 6 #32, yr 9.8, critic gen 0) | 6527.5 |
| quality-first | gate3 | all | 6400 | 8.26 | 8.15 | 1273 (19.9%) | 1273 (19.9%) | 1255 (19.6%) | 1821 (28.4%) | 1654 (25.8%) | 4363 (68.2%) | 0% of 200 | 4/6/9 | 9.41/9.67/10/10 | 10.00 "Hollow Pulse" (A10/C10; quality-first seed 9 #22, yr 6.8, critic gen 0) | 5772.5 |
| repeat-farmer | gate3 | all | 6400 | 6.92 | 6.93 | 15 (0.2%) | 15 (0.2%) | 15 (0.2%) | 21 (0.3%) | 34 (0.5%) | 421 (6.6%) | 99% of 200 | 0/0/0 | 7.63/8.02/8.57/8.99 | 9.58 "Iron Pulse" (A9.49/C9.67; repeat-farmer seed 38 #9, yr 2.8, critic gen 0) | 2350 |
| cheap-duds | gate3 | all | 6400 | 6.17 | 6.33 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 7 (0.1%) | 100% of 200 | 0/0/0 | 7.18/7.48/7.84/8.03 | 8.18 "Iron Horizon" (A8.03/C8.33; cheap-duds seed 66 #29, yr 8.9, critic gen 0) | 75 |
| self-funder | gate3 | all | 6400 | 7.06 | 7.01 | 13 (0.2%) | 13 (0.2%) | 13 (0.2%) | 44 (0.7%) | 88 (1.4%) | 627 (9.8%) | 94% of 200 | 0/0/0 | 8.03/8.43/8.77/9.13 | 9.16 "Red Run" (A9.08/C9.23; self-funder seed 148 #26, yr 8.0, critic gen 0) | 1517.5 |
| tv-first | gate3 | all | 4177 | 7.66 | 7.57 | 311 (7.5%) | 311 (7.5%) | 294 (7.0%) | 453 (10.8%) | 369 (8.8%) | 1654 (39.6%) | 51% of 200 | 0/0/4 | 8.4/8.98/9.5/10 | 10.00 "Midnight Rising: Season 2" (tv, A10/C10; tv-first seed 21 #19, yr 7.5, critic gen 0) | 3115 |
| renewal-franchise | gate3 | all | 4411 | 6.92 | 6.82 | 44 (1.0%) | 44 (1.0%) | 39 (0.9%) | 139 (3.1%) | 82 (1.9%) | 807 (18.3%) | 91% of 200 | 0/0/0 | 8.07/8.5/8.93/9.46 | 9.59 "Red Run: Season 4" (tv, A9.52/C9.65; renewal-franchise seed 27 #13, yr 4.8, critic gen 0) | 1950 |
| mixed | gate3 | all | 4928 | 7.99 | 7.88 | 638 (12.9%) | 638 (12.9%) | 607 (12.3%) | 852 (17.3%) | 802 (16.3%) | 2741 (55.6%) | 4% of 200 | 1/3/5 | 9.13/9.46/9.75/10 | 10.00 "Wild Legacy" (limited_series, A10/C10; mixed seed 21 #17, yr 6.0, critic gen 0) | 4070 |
| streaming-pivot | gate3 | all | 5041 | 8.08 | 8.00 | 838 (16.6%) | 838 (16.6%) | 814 (16.1%) | 1049 (20.8%) | 1016 (20.1%) | 3054 (60.6%) | 1% of 200 | 2/4/7 | 9.18/9.49/9.79/10 | 10.00 "Silver Run" (A10/C10; streaming-pivot seed 10 #22, yr 6.8, critic gen 0) | 4232.5 |
| traditional-holdout | gate3 | all | 4395 | 7.87 | 7.80 | 495 (11.3%) | 495 (11.3%) | 481 (10.9%) | 699 (15.9%) | 634 (14.4%) | 2207 (50.2%) | 18% of 200 | 0/2/5.1 | 8.77/9.32/9.76/10 | 10.00 "Silver Night" (A10/C10; traditional-holdout seed 43 #26, yr 9.3, critic gen 0) | 3705 |
| limited-focus | gate3 | all | 5800 | 8.23 | 8.13 | 1190 (20.5%) | 1190 (20.5%) | 1159 (20.0%) | 1544 (26.6%) | 1502 (25.9%) | 3920 (67.6%) | 0% of 200 | 3/6/9 | 9.37/9.64/10/10 | 10.00 "Iron Frequency" (limited_series, A10/C10; limited-focus seed 6 #29, yr 10.0, critic gen 0) | 5185 |
| tv-duds | gate3 | all | 6400 | 6.16 | 6.31 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 9 (0.1%) | 100% of 200 | 0/0/0 | 7.17/7.47/7.82/8.12 | 8.21 "Silver Pulse" (A8.07/C8.34; tv-duds seed 171 #31, yr 9.5, critic gen 0) | 75 |

### Greatest single films (all strategies, whole sample; reproducible from seed + config hash)

| Variant | Best combined | Best Audience | Best Critic | Year band with most HoF |
|---|---|---|---|---|
| gate3 | 10.00 "Iron Frequency" (limited_series, A10/C10; limited-focus seed 6 #29, yr 10.0, critic gen 0) | 10.00 "Iron Frequency" (limited_series, A10/C10; limited-focus seed 6 #29, yr 10.0, critic gen 0) | 10.00 "Iron Frequency" (limited_series, A10/C10; limited-focus seed 6 #29, yr 10.0, critic gen 0) | y10-15: 35.0% of 223 |

### Great films by in-game year (all strategies pooled)

| Strategy | Config | Window | Films (n) | Avg Aud | Avg Crit | HoF n (%) | Avg ≥9 n (%) | Avg >9 n (%) | Aud ≥9 n (%) | Crit ≥9 n (%) | 8+ n (%) | Careers with 0 HoF | HoF/career p10/p50/p90 | Best/career p10/p50/p90/p99 | Best combined movie | Prestige median |
|---|---|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---|---|---|---:|
| ALL | gate3 | y0-5 | 35816 | 7.16 | 7.16 | 1340 (3.7%) | 1340 (3.7%) | 1286 (3.6%) | 2157 (6.0%) | 2061 (5.8%) | 9793 (27.3%) | 70% of 2400 | 0/0/2 | 7.01/8.62/9.4/9.8 | 10.00 "Dead Pulse" (A10/C10; quality-first seed 56 #15, yr 4.6, critic gen 0) |  |
| ALL | gate3 | y5-10 | 31113 | 7.73 | 7.67 | 4857 (15.6%) | 4857 (15.6%) | 4735 (15.2%) | 6150 (19.8%) | 5830 (18.7%) | 14135 (45.4%) | 49% of 2400 | 0/1/6 | 7.05/9.03/9.76/10 | 10.00 "Dead Protocol" (A10/C10; balanced seed 6 #32, yr 9.8, critic gen 0) |  |
| ALL | gate3 | y10-15 | 223 | 8.73 | 8.59 | 78 (35.0%) | 78 (35.0%) | 78 (35.0%) | 114 (51.1%) | 96 (43.0%) | 192 (86.1%) | 65% of 223 | 0/0/1 | 7.77/8.71/9.53/9.87 | 10.00 "Iron Frequency" (limited_series, A10/C10; limited-focus seed 6 #29, yr 10.0, critic gen 0) |  |

### Prestige progression (Prestige gates growth; cash sustains operations)

`cash-rich but Prestige-locked` = careers that at some week had the cash for the next upgrade but not the Prestige. `bought below gate` must be 0 (engine rule).

| Strategy | Config | Cash median | Prestige median | Prestige/yr | Careers with negative-cash weeks | →6 gate met (Prestige ≥ 200) · median film # | →6 bought · median film # | →6 cash-rich but Prestige-locked | →6 bought below gate | →8 gate met (Prestige ≥ 1000) · median film # | →8 bought · median film # | →8 cash-rich but Prestige-locked | →8 bought below gate |
|---|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|
| balanced | gate3 | $7.19M | 6527.5 | 652.8 | 70% | 100% · #7 | 100% · #7 | 100% | 0 | 100% · #11 | 100% · #11 | 100% | 0 |
| quality-first | gate3 | $7.33M | 5772.5 | 577.3 | 60% | 100% · #7 | 100% · #7 | 100% | 0 | 100% · #12 | 100% · #12 | 100% | 0 |
| repeat-farmer | gate3 | $7.50M | 2350 | 235 | 65% | 100% · #6 | 100% · #7 | 100% | 0 | 100% · #11 | 100% · #11 | 100% | 0 |
| cheap-duds | gate3 | $4.31M | 75 | 7.5 | 5% | 11% · #31 | 0% · #— | 100% | 0 | 0% · #— | 0% · #— | 0% | 0 |
| self-funder | gate3 | $0.21M | 1517.5 | 151.8 | 100% | 100% · #18 | 0% · #— | 65% | 0 | 89% · #27 | 0% · #— | 0% | 0 |
| tv-first | gate3 | $5.84M | 3115 | 311.5 | 74% | 100% · #7 | 100% · #7 | 100% | 0 | 100% · #11 | 100% · #12 | 100% | 0 |
| renewal-franchise | gate3 | $3.83M | 1950 | 195 | 54% | 100% · #7 | 100% · #7 | 100% | 0 | 100% · #11 | 100% · #12 | 100% | 0 |
| mixed | gate3 | $5.99M | 4070 | 407 | 73% | 100% · #7 | 100% · #7 | 100% | 0 | 100% · #12 | 100% · #12 | 100% | 0 |
| streaming-pivot | gate3 | $3.22M | 4232.5 | 423.3 | 65% | 100% · #7 | 100% · #7 | 100% | 0 | 100% · #12 | 100% · #12 | 100% | 0 |
| traditional-holdout | gate3 | $6.30M | 3705 | 370.5 | 73% | 100% · #7 | 100% · #7 | 100% | 0 | 100% · #11 | 100% · #12 | 100% | 0 |
| limited-focus | gate3 | $7.21M | 5185 | 518.5 | 52% | 100% · #7 | 100% · #7 | 100% | 0 | 100% · #12 | 100% · #12 | 100% | 0 |
| tv-duds | gate3 | $4.29M | 75 | 7.5 | 4% | 16% · #29 | 0% · #— | 100% | 0 | 0% · #— | 0% · #— | 0% | 0 |

### Prestige milestones awarded per career (mean)

| Strategy | Variant | audience_7_5 | critic_8_5 | first_hall_of_fame | hall_of_fame | ip_gross_1m | ip_gross_5m | ip_viewers_500k | meters_all_70 | careers > 400 Prestige/yr (OUTDATED threshold) |
|---|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|
| balanced | gate3 | 25.39 | 13.93 | 0.99 | 7.29 | 2.13 | 0.55 | 2.13 | 26.61 | 100% |
| quality-first | gate3 | 25.3 | 13.57 | 1 | 6.37 | 0 | 0 | 0 | 26.59 | 100% |
| repeat-farmer | gate3 | 6.42 | 0.99 | 0.01 | 0.07 | 1 | 1 | 1 | 26.64 | 1% |
| cheap-duds | gate3 | 1.08 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0% |
| self-funder | gate3 | 11.04 | 1.39 | 0.07 | 0.07 | 0 | 0 | 0 | 10.86 | 0% |
| tv-first | gate3 | 12.51 | 4.42 | 0.49 | 1.55 | 2 | 1.75 | 2 | 15.01 | 11% |
| renewal-franchise | gate3 | 7.82 | 1.72 | 0.09 | 0.22 | 1 | 1 | 1 | 16.64 | 0% |
| mixed | gate3 | 17.86 | 8.08 | 0.96 | 3.19 | 1.42 | 0.85 | 1 | 18.7 | 58% |
| streaming-pivot | gate3 | 18.82 | 9.65 | 0.99 | 4.19 | 0 | 0 | 0.86 | 19.71 | 65% |
| traditional-holdout | gate3 | 14.78 | 6.46 | 0.82 | 2.48 | 2.13 | 1.19 | 1.92 | 16.39 | 32% |
| limited-focus | gate3 | 22.83 | 12.13 | 1 | 5.95 | 0.51 | 0 | 0 | 23.15 | 96% |
| tv-duds | gate3 | 1.2 | 0 | 0 | 0 | 0 | 0 | 0.01 | 0 | 0% |

### Gate 3 design trade-offs by strategy

(a) money · (b) Prestige · (c) time to TV / streaming · (d) successful IPs · (e) Hall of Fame · (f) last-12-month revenue mix · (g) solvency. Medians unless noted; shares are of careers.

| Strategy | Config | (a) cash median | min cash | ever negative | (b) Prestige | (c) TV unlock yr (share) | streaming live yr (share) | subs end | payback yrs (share) | (d) IPs ≥10K fans | shows · seasons · max | (e) HoF / career | (f) last-12-mo mix: traditional / subs / opex | streaming share | releases |
|---|---|---:|---:|---:|---:|---|---|---:|---|---:|---|---:|---|---:|---:|
| balanced | gate3 | $7.19M | $-4K | 70% | 6,528 | — (0%) | — (0%) | — | — (0%) | 15.0 | 0.0 · 0.0 · 0.0 | 7.0 | $1.45M / $0.00M / $0.00M | — | 32 |
| quality-first | gate3 | $7.33M | $-2K | 60% | 5,773 | — (0%) | — (0%) | — | — (0%) | 19.0 | 0.0 · 0.0 · 0.0 | 6.0 | $1.47M / $0.00M / $0.00M | — | 32 |
| repeat-farmer | gate3 | $7.50M | $-3K | 65% | 2,350 | — (0%) | — (0%) | — | — (0%) | 1.0 | 0.0 · 0.0 · 0.0 | 0.0 | $1.28M / $0.00M / $0.00M | — | 32 |
| cheap-duds | gate3 | $4.31M | $4K | 5% | 75 | — (0%) | — (0%) | — | — (0%) | 0.0 | 0.0 · 0.0 · 0.0 | 0.0 | $0.57M / $0.00M / $0.00M | — | 32 |
| self-funder | gate3 | $0.21M | $-29K | 100% | 1,518 | — (0%) | — (0%) | — | — (0%) | 0.0 | 0.0 · 0.0 · 0.0 | 0.0 | $0.57M / $0.00M / $0.00M | — | 32 |
| tv-first | gate3 | $5.84M | $-4K | 74% | 3,115 | 2.7 (100%) | — (0%) | — | — (0%) | 2.0 | 2.0 · 13.0 · 8.0 | 0.0 | $1.20M / $0.00M / $0.00M | — | 21 |
| renewal-franchise | gate3 | $3.83M | $-1K | 54% | 1,950 | 2.5 (100%) | — (0%) | — | — (0%) | 1.0 | 1.0 · 14.0 · 14.0 | 0.0 | $0.71M / $0.00M / $0.00M | — | 22 |
| mixed | gate3 | $5.99M | $-3K | 73% | 4,070 | 2.7 (100%) | 7.3 (100%) | 76,574 | 1.8 (79%) | 8.0 | 1.0 · 6.0 · 6.0 | 3.0 | $0.58M / $1.80M / $-0.96M | 74% | 25 |
| streaming-pivot | gate3 | $3.22M | $-3K | 65% | 4,233 | 2.5 (100%) | 6.4 (100%) | 87,838 | 1.3 (100%) | 11.0 | 1.0 · 4.0 · 4.0 | 4.0 | $0.00M / $2.25M / $-1.09M | 100% | 25 |
| traditional-holdout | gate3 | $6.30M | $-4K | 73% | 3,705 | 2.5 (100%) | — (0%) | — | — (0%) | 4.0 | 2.0 · 10.0 · 6.0 | 2.0 | $1.30M / $0.00M / $0.00M | — | 22 |
| limited-focus | gate3 | $7.21M | $-1K | 52% | 5,185 | 2.7 (100%) | — (0%) | — | — (0%) | 12.0 | 0.0 · 0.0 · 0.0 | 6.0 | $1.33M / $0.00M / $0.00M | — | 29 |
| tv-duds | gate3 | $4.29M | $4K | 4% | 75 | 9.2 (7%) | — (0%) | — | — (0%) | 0.0 | 0.0 · 0.0 · 0.0 | 0.0 | $0.57M / $0.00M / $0.00M | — | 32 |

### Formats: share of releases · mean score · HoF % · net per production week; Prestige sources

| Strategy | Config | limited_series: share · avg · HoF% · net/prod-wk | limited_series/original: share · avg · HoF% · net/prod-wk | movie: share · avg · HoF% · net/prod-wk | movie/original: share · avg · HoF% · net/prod-wk | tv: share · avg · HoF% · net/prod-wk | tv/original: share · avg · HoF% · net/prod-wk | Prestige by format | top Prestige sources |
|---|---|---|---|---|---|---|---|---|---|
| balanced | gate3 | — | — | 100% · 8.22 · 22.8% · $25.5K | — | — | — | movie 100% | audience_7_5 28.9%, hall_of_fame 22.1%, meters_all_70 20.2%, critic_8_5 18% |
| quality-first | gate3 | — | — | 100% · 8.21 · 19.9% · $25.8K | — | — | — | movie 100% | audience_7_5 33%, meters_all_70 23.1%, hall_of_fame 22.1%, critic_8_5 20.1% |
| repeat-farmer | gate3 | — | — | 100% · 6.92 · 0.2% · $25.6K | — | — | — | movie 100% | meters_all_70 57.6%, audience_7_5 20.8%, ip_viewers_500k 6.5%, ip_gross_5m 6.5% |
| cheap-duds | gate3 | — | — | 100% · 6.25 · 0% · $10.8K | — | — | — | movie 100% | audience_7_5 100% |
| self-funder | gate3 | — | — | 100% · 7.04 · 0.2% · $4.2K | — | — | — | movie 100% | audience_7_5 54.9%, meters_all_70 36%, critic_8_5 7.8%, hall_of_fame 0.9% |
| tv-first | gate3 | 33% · 7.17 · 0.6% · $20.9K | — | 5% · 5.6 · 0% · $9.9K | — | 62% · 8 · 11.6% · $24.4K | — | limited_series 12.2%, tv 87.8% | audience_7_5 29.5%, meters_all_70 23.6%, critic_8_5 11.8%, hall_of_fame 9.8% |
| renewal-franchise | gate3 | — | — | 35% · 6.94 · 0.6% · $18.0K | — | 65% · 6.83 · 1.2% · $19.8K | — | movie 19%, tv 81% | meters_all_70 41.2%, audience_7_5 29.1%, ip_viewers_500k 7.4%, ip_gross_5m 7.4% |
| mixed | gate3 | 46% · 7.7 · 9.5% · $24.3K | 4% · 8.73 · 34.3% · $-8.2K | 23% · 8.05 · 21.8% · $24.2K | 3% · 8.81 · 43% · $-7.6K | 22% · 8.06 · 3.6% · $26.2K | 2% · 7.71 · 3.6% · $-8.7K | limited_series 33.5%, tv 28.3%, movie 26.5%, limited_series/original 5.1%, movie/original 5.3%, tv/original 1.2% | audience_7_5 32.6%, meters_all_70 22.7%, critic_8_5 16.7%, hall_of_fame 15.5% |
| streaming-pivot | gate3 | — | — | 82% · 7.91 · 13.5% · $23.9K | 4% · 8.76 · 35.1% · $-7.5K | — | 14% · 8.61 · 29.5% · $-8.3K | movie 72.7%, movie/original 5.4%, tv/original 21.9% | audience_7_5 33%, meters_all_70 23%, hall_of_fame 19.6%, critic_8_5 19.1% |
| traditional-holdout | gate3 | 15% · 7.84 · 12.8% · $24.9K | — | 39% · 7.34 · 6.7% · $20.5K | — | 46% · 8.26 · 14.6% · $26.0K | — | limited_series 12.1%, movie 21.9%, tv 66% | audience_7_5 29.7%, meters_all_70 22%, critic_8_5 14.7%, hall_of_fame 13.3% |
| limited-focus | gate3 | 97% · 8.27 · 21.3% · $25.4K | — | 3% · 5.65 · 0% · $9.4K | — | — | — | limited_series 100% | audience_7_5 32.7%, hall_of_fame 22.7%, meters_all_70 22.1%, critic_8_5 19.7% |
| tv-duds | gate3 | — | — | 100% · 6.24 · 0% · $10.8K | — | 1% · 6.34 · 0% · $9.6K | — | movie 97.9%, tv 2.1% | audience_7_5 99.2%, ip_viewers_500k 0.8% |

### Gate 3 provisional flags

| Variant | Flag | Fired | Evidence |
|---|---|---|---|
| gate3 | STREAMING_INFINITE_GROWTH | **yes** | 3/400 launched careers reached ≥90% of the reachable subscriber market (growth is capped by design; this flags saturation) [PROVISIONAL threshold] |
| gate3 | SUBSCRIBER_CHURN_SPIRAL | no | not fired: 0/400 launched careers lost >60% of subscribers within 3 years [PROVISIONAL threshold] |
| gate3 | TV_SEASON_TOO_PROFITABLE | no | not fired: 215/8340 finished traditional TV seasons netted >2× the batch's pooled movie net per production week ($17,962) [PROVISIONAL threshold] |
| gate3 | TV_SEASON_TOO_LONG | **yes** | 195 careers kept one show running ≥12 seasons (fatigue cap 0.35 may allow endless renewals) [PROVISIONAL threshold] |
| gate3 | TV_NO_RENEWAL_PATH | no | not fired: 4/811 TV careers never made a second season [PROVISIONAL threshold] |
| gate3 | MIXED_ECONOMY_SOFTLOCK | no | not fired: 0/2400 careers spent ≥3 years with negative cash [PROVISIONAL threshold] |
| gate3 | FORMAT_DOMINANT | no | not fired: best cash: repeat-farmer; best Prestige: balanced; fires only if one strategy leads both by >50% [PROVISIONAL threshold] |
| gate3 | DELAYED_STUDIO_PROGRESSION | no | not fired: TV not unlocked by year 8: 0/800; streaming not live by year 15: 0/0 [PROVISIONAL threshold] |

### Diagnostic flags fired

| Variant | Fired |
|---|---|
| gate3 | EARLY_SOFTLOCK, PRESTIGE_TOO_FAST, QUALITY_INFLATION, DEAD_STRATEGY |

## 15-year careers (in-game calendar horizon; productions vary by strategy)

Invariant violations across all variants: **0**.

### Medians by strategy

| Strategy | Variant | endCash | prestige | prestigePerRelease | meanAudience | meanCritic | share8plus | share9plus | shareLate8plus | hofShare | maxStaffEnd | staffCount | meanStaffStat | upgrades | firstUpgradeWeek | years | maxIpFans | negativeCashWeeks |
|---|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|
| balanced | gate3 | $11840K | 10605 | 220.95 | 8.41 | 8.33 | 73% | 29% | 80% | 29% | 8 | 8 | 95.80 | 2 | 112 | 15 | 94302 | 2 |
| quality-first | gate3 | $12188K | 9660 | 201.30 | 8.46 | 8.36 | 75% | 25% | 90% | 25% | 8 | 8 | 95.60 | 2 | 112 | 15 | 25243 | 1 |
| repeat-farmer | gate3 | $13081K | 3150 | 65.60 | 6.87 | 6.83 | 2% | 0% | 0% | 0% | 8 | 8 | 95.70 | 2 | 112 | 15 | 219682 | 2 |
| cheap-duds | gate3 | $7246K | 150 | 3.10 | 6.28 | 6.41 | 0% | 0% | 0% | 0% | 4 | 2 | 80.20 | 0 | — | 15 | 7751.50 | 0 |
| self-funder | gate3 | $201K | 3047.50 | 63.45 | 7.21 | 7.17 | 10% | 0% | 15% | 0% | 4 | 2 | 100 | 0 | — | 15 | 3898.50 | 12 |
| tv-first | gate3 | $10949K | 4625 | 173.75 | 7.80 | 7.70 | 44% | 11% | 67% | 11% | 8 | 8 | 85.10 | 2 | 124 | 15 | 86416 | 2 |
| renewal-franchise | gate3 | $6069K | 2325 | 79.20 | 6.68 | 6.58 | 13% | 0% | 0% | 0% | 8 | 8 | 86.50 | 2 | 112 | 15 | 73588.50 | 1 |
| mixed | gate3 | $11545K | 6847.50 | 199.65 | 8.24 | 8.11 | 67% | 21% | 86% | 21% | 8 | 8 | 87.90 | 2 | 124 | 15 | 46250 | 2 |
| streaming-pivot | gate3 | $4118K | 5640 | 178.90 | 8.20 | 8.09 | 65% | 18% | 85% | 18% | 8 | 8 | 86.20 | 2 | 112 | 15 | 43834.50 | 2 |
| traditional-holdout | gate3 | $12012K | 5655 | 195.30 | 8.08 | 7.99 | 59% | 15% | 83% | 15% | 8 | 8 | 85.90 | 2 | 114 | 15 | 79144.50 | 2 |
| limited-focus | gate3 | $12664K | 8680 | 201.90 | 8.45 | 8.32 | 77% | 26% | 94% | 26% | 8 | 8 | 93.30 | 2 | 124 | 15 | 20084 | 1 |
| tv-duds | gate3 | $6971K | 150 | 3.10 | 6.25 | 6.38 | 0% | 0% | 0% | 0% | 4 | 2 | 80.20 | 0 | — | 15 | 8176 | 0 |

### Paired deltas vs **gate3** (median of per-seed differences; share of seeds where the variant is higher)

| Strategy | Variant | Δ endCash | Δ prestige | Δ share8plus | Δ meanAudience |
|---|---|---:|---:|---:|---:|

### Mean review score (avg of Audience+Critic) by production index

| Strategy | Variant | #1 | #5 | #10 | #20 | #30 | #40 |
|---|---|---:|---:|---:|---:|---:|---:|
| balanced | gate3 | 5.65 | 7.38 | 8.31 | 8.68 | 8.74 | 8.77 |
| quality-first | gate3 | 5.58 | 7.34 | 8.20 | 8.70 | 8.79 | 8.77 |
| repeat-farmer | gate3 | 5.64 | 7.41 | 7.78 | 6.61 | 6.69 | 6.75 |
| cheap-duds | gate3 | 5.47 | 5.84 | 6.15 | 6.41 | 6.58 | 6.50 |
| self-funder | gate3 | 5.49 | 6.13 | 6.76 | 7.45 | 7.57 | 7.52 |
| tv-first | gate3 | 5.60 | 7.44 | 8.18 | 8.33 | 7.71 | — |
| renewal-franchise | gate3 | 5.65 | 7.40 | 8.04 | 5.86 | 5.62 | — |
| mixed | gate3 | 5.62 | 7.43 | 8.24 | 8.33 | 8.86 | — |
| streaming-pivot | gate3 | 5.67 | 7.35 | 8.29 | 8.69 | 8.65 | — |
| traditional-holdout | gate3 | 5.62 | 7.39 | 8.19 | 8.47 | 8.79 | — |
| limited-focus | gate3 | 5.65 | 7.42 | 8.30 | 8.73 | 8.80 | 8.80 |
| tv-duds | gate3 | 5.47 | 5.85 | 6.08 | 6.44 | 6.61 | 6.47 |

### Great films — all strategies pooled, by release window

Denominators are films in that window. HoF = average of Audience and Critic ≥ hofThreshold (9.0). `≥9` is inclusive, `>9` strict.

| Strategy | Config | Window | Films (n) | Avg Aud | Avg Crit | HoF n (%) | Avg ≥9 n (%) | Avg >9 n (%) | Aud ≥9 n (%) | Crit ≥9 n (%) | 8+ n (%) | Careers with 0 HoF | HoF/career p10/p50/p90 | Best/career p10/p50/p90/p99 | Best combined movie | Prestige median |
|---|---|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---|---|---|---:|
| ALL | gate3 | 1-5 | 12000 | 6.28 | 6.34 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 1 (0.0%) | 304 (2.5%) | 100% of 2400 | 0/0/0 | 6.2/7.42/8.05/8.52 | 8.91 "Midnight Rising" (A8.47/C9.36; renewal-franchise seed 15 #5, yr 1.5, critic gen 0) |  |
| ALL | gate3 | 6-20 | 36000 | 7.67 | 7.62 | 3192 (8.9%) | 3192 (8.9%) | 3071 (8.5%) | 4306 (12.0%) | 4280 (11.9%) | 15480 (43.0%) | 52% of 2400 | 0/0/4 | 7.24/8.95/9.65/10 | 10.00 "Red Run" (limited_series, A10/C10; limited-focus seed 10 #20, yr 6.9, critic gen 0) |  |
| ALL | gate3 | 21-50 | 48369 | 7.72 | 7.66 | 8439 (17.4%) | 8439 (17.4%) | 8185 (16.9%) | 11361 (23.5%) | 9820 (20.3%) | 21449 (44.3%) | 47% of 2400 | 0/1/11 | 6.65/9.09/9.86/10 | 10.00 "Iron Frequency" (limited_series, A10/C10; limited-focus seed 6 #29, yr 10.0, critic gen 0) |  |
| ALL | gate3 | 51-100 | 0 | NaN | NaN | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0% of 0 | — | — | — |  |
| ALL | gate3 | all | 96369 | 7.52 | 7.48 | 11631 (12.1%) | 11631 (12.1%) | 11256 (11.7%) | 15667 (16.3%) | 14101 (14.6%) | 37233 (38.6%) | 43% of 2400 | 0/3/13 | 7.7/9.34/9.88/10 | 10.00 "Iron Frequency" (limited_series, A10/C10; limited-focus seed 6 #29, yr 10.0, critic gen 0) |  |

### Great films by strategy (whole career)

| Strategy | Config | Window | Films (n) | Avg Aud | Avg Crit | HoF n (%) | Avg ≥9 n (%) | Avg >9 n (%) | Aud ≥9 n (%) | Crit ≥9 n (%) | 8+ n (%) | Careers with 0 HoF | HoF/career p10/p50/p90 | Best/career p10/p50/p90/p99 | Best combined movie | Prestige median |
|---|---|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---|---|---|---:|
| balanced | gate3 | all | 9600 | 8.42 | 8.34 | 2776 (28.9%) | 2776 (28.9%) | 2681 (27.9%) | 3374 (35.1%) | 3176 (33.1%) | 6921 (72.1%) | 0% of 200 | 8/14/20 | 9.54/9.81/10/10 | 10.00 "Dead Protocol" (A10/C10; balanced seed 6 #32, yr 9.8, critic gen 0) | 10605 |
| quality-first | gate3 | all | 9600 | 8.46 | 8.33 | 2465 (25.7%) | 2465 (25.7%) | 2372 (24.7%) | 3414 (35.6%) | 2976 (31.0%) | 7270 (75.7%) | 0% of 200 | 9/12/16 | 9.6/9.82/10/10 | 10.00 "Hollow Pulse" (A10/C10; quality-first seed 9 #22, yr 6.8, critic gen 0) | 9660 |
| repeat-farmer | gate3 | all | 9600 | 6.86 | 6.86 | 15 (0.2%) | 15 (0.2%) | 15 (0.2%) | 21 (0.2%) | 34 (0.3%) | 421 (4.4%) | 99% of 200 | 0/0/0 | 7.63/8.02/8.57/8.99 | 9.58 "Iron Pulse" (A9.49/C9.67; repeat-farmer seed 38 #9, yr 2.8, critic gen 0) | 3150 |
| cheap-duds | gate3 | all | 9600 | 6.27 | 6.41 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 22 (0.2%) | 100% of 200 | 0/0/0 | 7.43/7.65/8.01/8.22 | 8.26 "Wild Horizon" (A8.11/C8.41; cheap-duds seed 164 #37, yr 11.4, critic gen 0) | 150 |
| self-funder | gate3 | all | 9600 | 7.21 | 7.16 | 17 (0.2%) | 17 (0.2%) | 17 (0.2%) | 45 (0.5%) | 167 (1.7%) | 1104 (11.5%) | 92% of 200 | 0/0/0 | 8.29/8.54/8.97/9.13 | 9.16 "Red Run" (A9.08/C9.23; self-funder seed 148 #26, yr 8.0, critic gen 0) | 3047.5 |
| tv-first | gate3 | all | 5403 | 7.77 | 7.66 | 548 (10.1%) | 548 (10.1%) | 524 (9.7%) | 786 (14.6%) | 651 (12.1%) | 2360 (43.7%) | 23% of 200 | 0/3/6 | 8.68/9.29/9.75/10 | 10.00 "Midnight Rising: Season 2" (tv, A10/C10; tv-first seed 21 #19, yr 7.5, critic gen 0) | 4625 |
| renewal-franchise | gate3 | all | 5882 | 6.65 | 6.55 | 44 (0.8%) | 44 (0.8%) | 39 (0.7%) | 139 (2.4%) | 82 (1.4%) | 807 (13.7%) | 91% of 200 | 0/0/0 | 8.07/8.5/8.93/9.46 | 9.59 "Red Run: Season 4" (tv, A9.52/C9.65; renewal-franchise seed 27 #13, yr 4.8, critic gen 0) | 2325 |
| mixed | gate3 | all | 6865 | 8.24 | 8.12 | 1434 (20.9%) | 1434 (20.9%) | 1399 (20.4%) | 1962 (28.6%) | 1703 (24.8%) | 4512 (65.7%) | 1% of 200 | 4/7/10 | 9.4/9.65/9.88/10 | 10.00 "Last Rising" (A10/C10; mixed seed 9 #35, yr 14.7, critic gen 0) | 6847.5 |
| streaming-pivot | gate3 | all | 6288 | 8.18 | 8.08 | 1190 (18.9%) | 1190 (18.9%) | 1163 (18.5%) | 1534 (24.4%) | 1421 (22.6%) | 3988 (63.4%) | 0% of 200 | 3/6/10 | 9.34/9.59/9.97/10 | 10.00 "Silver Night" (movie/original, A10/C10; streaming-pivot seed 9 #28, yr 11.1, critic gen 0) | 5640 |
| traditional-holdout | gate3 | all | 5753 | 8.06 | 7.97 | 930 (16.2%) | 930 (16.2%) | 909 (15.8%) | 1290 (22.4%) | 1121 (19.5%) | 3297 (57.3%) | 5% of 200 | 1/4/9 | 9.06/9.53/9.82/10 | 10.00 "Silver Night" (A10/C10; traditional-holdout seed 43 #26, yr 9.3, critic gen 0) | 5655 |
| limited-focus | gate3 | all | 8600 | 8.45 | 8.32 | 2212 (25.7%) | 2212 (25.7%) | 2137 (24.9%) | 3102 (36.1%) | 2770 (32.2%) | 6512 (75.7%) | 0% of 200 | 7/11/15 | 9.55/9.8/10/10 | 10.00 "Iron Frequency" (limited_series, A10/C10; limited-focus seed 6 #29, yr 10.0, critic gen 0) | 8680 |
| tv-duds | gate3 | all | 9578 | 6.22 | 6.37 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 19 (0.2%) | 100% of 200 | 0/0/0 | 7.41/7.7/7.97/8.21 | 8.26 "Dead Frequency" (A8.06/C8.46; tv-duds seed 6 #43, yr 13.2, critic gen 0) | 150 |

### Greatest single films (all strategies, whole sample; reproducible from seed + config hash)

| Variant | Best combined | Best Audience | Best Critic | Year band with most HoF |
|---|---|---|---|---|
| gate3 | 10.00 "Iron Frequency" (limited_series, A10/C10; limited-focus seed 6 #29, yr 10.0, critic gen 0) | 10.00 "Iron Frequency" (limited_series, A10/C10; limited-focus seed 6 #29, yr 10.0, critic gen 0) | 10.00 "Iron Frequency" (limited_series, A10/C10; limited-focus seed 6 #29, yr 10.0, critic gen 0) | y15-20: 21.4% of 28 |

### Great films by in-game year (all strategies pooled)

| Strategy | Config | Window | Films (n) | Avg Aud | Avg Crit | HoF n (%) | Avg ≥9 n (%) | Avg >9 n (%) | Aud ≥9 n (%) | Crit ≥9 n (%) | 8+ n (%) | Careers with 0 HoF | HoF/career p10/p50/p90 | Best/career p10/p50/p90/p99 | Best combined movie | Prestige median |
|---|---|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---|---|---|---:|
| ALL | gate3 | y0-5 | 35816 | 7.16 | 7.16 | 1340 (3.7%) | 1340 (3.7%) | 1286 (3.6%) | 2157 (6.0%) | 2061 (5.8%) | 9793 (27.3%) | 70% of 2400 | 0/0/2 | 7.01/8.62/9.4/9.8 | 10.00 "Dead Pulse" (A10/C10; quality-first seed 56 #15, yr 4.6, critic gen 0) |  |
| ALL | gate3 | y5-10 | 31113 | 7.73 | 7.67 | 4857 (15.6%) | 4857 (15.6%) | 4735 (15.2%) | 6150 (19.8%) | 5830 (18.7%) | 14135 (45.4%) | 49% of 2400 | 0/1/6 | 7.05/9.03/9.76/10 | 10.00 "Dead Protocol" (A10/C10; balanced seed 6 #32, yr 9.8, critic gen 0) |  |
| ALL | gate3 | y10-15 | 29412 | 7.74 | 7.68 | 5428 (18.5%) | 5428 (18.5%) | 5231 (17.8%) | 7353 (25.0%) | 6206 (21.1%) | 13296 (45.2%) | 51% of 2400 | 0/0/7 | 6.65/8.97/9.83/10 | 10.00 "Iron Frequency" (limited_series, A10/C10; limited-focus seed 6 #29, yr 10.0, critic gen 0) |  |
| ALL | gate3 | y15-20 | 28 | 7.02 | 6.63 | 6 (21.4%) | 6 (21.4%) | 4 (14.3%) | 7 (25.0%) | 4 (14.3%) | 9 (32.1%) | 79% of 28 | 0/0/1 | 5.4/5.95/9.26/9.54 | 9.59 "Dead Protocol" (tv, A9.18/C10; tv-first seed 57 #25, yr 15.0, critic gen 0) |  |

### Prestige progression (Prestige gates growth; cash sustains operations)

`cash-rich but Prestige-locked` = careers that at some week had the cash for the next upgrade but not the Prestige. `bought below gate` must be 0 (engine rule).

| Strategy | Config | Cash median | Prestige median | Prestige/yr | Careers with negative-cash weeks | →6 gate met (Prestige ≥ 200) · median film # | →6 bought · median film # | →6 cash-rich but Prestige-locked | →6 bought below gate | →8 gate met (Prestige ≥ 1000) · median film # | →8 bought · median film # | →8 cash-rich but Prestige-locked | →8 bought below gate |
|---|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|
| balanced | gate3 | $11.84M | 10605 | 707 | 70% | 100% · #7 | 100% · #7 | 100% | 0 | 100% · #11 | 100% · #11 | 100% | 0 |
| quality-first | gate3 | $12.19M | 9660 | 644 | 60% | 100% · #7 | 100% · #7 | 100% | 0 | 100% · #12 | 100% · #12 | 100% | 0 |
| repeat-farmer | gate3 | $13.08M | 3150 | 210 | 65% | 100% · #6 | 100% · #7 | 100% | 0 | 100% · #11 | 100% · #11 | 100% | 0 |
| cheap-duds | gate3 | $7.25M | 150 | 10 | 5% | 42% · #39 | 0% · #— | 100% | 0 | 0% · #— | 0% · #— | 0% | 0 |
| self-funder | gate3 | $0.20M | 3047.5 | 203.2 | 100% | 100% · #18 | 0% · #— | 65% | 0 | 100% · #27 | 0% · #— | 0% | 0 |
| tv-first | gate3 | $10.95M | 4625 | 308.3 | 74% | 100% · #7 | 100% · #7 | 100% | 0 | 100% · #11 | 100% · #12 | 100% | 0 |
| renewal-franchise | gate3 | $6.07M | 2325 | 155 | 54% | 100% · #7 | 100% · #7 | 100% | 0 | 100% · #11 | 100% · #12 | 100% | 0 |
| mixed | gate3 | $11.55M | 6847.5 | 456.5 | 73% | 100% · #7 | 100% · #7 | 100% | 0 | 100% · #12 | 100% · #12 | 100% | 0 |
| streaming-pivot | gate3 | $4.12M | 5640 | 376 | 65% | 100% · #7 | 100% · #7 | 100% | 0 | 100% · #12 | 100% · #12 | 100% | 0 |
| traditional-holdout | gate3 | $12.01M | 5655 | 377 | 73% | 100% · #7 | 100% · #7 | 100% | 0 | 100% · #11 | 100% · #12 | 100% | 0 |
| limited-focus | gate3 | $12.66M | 8680 | 578.7 | 52% | 100% · #7 | 100% · #7 | 100% | 0 | 100% · #12 | 100% · #12 | 100% | 0 |
| tv-duds | gate3 | $6.97M | 150 | 10 | 4% | 45% · #37 | 0% · #— | 100% | 0 | 0% · #— | 0% · #— | 0% | 0 |

### Prestige milestones awarded per career (mean)

| Strategy | Variant | audience_7_5 | critic_8_5 | first_hall_of_fame | hall_of_fame | ip_gross_1m | ip_gross_5m | ip_viewers_500k | meters_all_70 | careers > 400 Prestige/yr (OUTDATED threshold) |
|---|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|
| balanced | gate3 | 39.35 | 22.94 | 1 | 13.88 | 2.5 | 1.01 | 2.5 | 42.61 | 100% |
| quality-first | gate3 | 40.3 | 22.57 | 1 | 12.32 | 0 | 0 | 0 | 42.59 | 100% |
| repeat-farmer | gate3 | 6.42 | 0.99 | 0.01 | 0.07 | 1 | 1 | 1 | 42.65 | 1% |
| cheap-duds | gate3 | 2.3 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0% |
| self-funder | gate3 | 19.64 | 2.47 | 0.08 | 0.09 | 0 | 0 | 0 | 26.78 | 0% |
| tv-first | gate3 | 16.84 | 6.76 | 0.77 | 2.74 | 2.94 | 2.48 | 2.88 | 21.14 | 1% |
| renewal-franchise | gate3 | 7.83 | 1.72 | 0.09 | 0.22 | 1 | 1 | 1 | 24 | 0% |
| mixed | gate3 | 26.86 | 13.97 | 0.99 | 7.17 | 2.58 | 0.9 | 2 | 28.38 | 87% |
| streaming-pivot | gate3 | 24.23 | 12.61 | 1 | 5.95 | 0 | 0 | 1.65 | 25.95 | 30% |
| traditional-holdout | gate3 | 20.75 | 10.1 | 0.95 | 4.65 | 3.13 | 2.12 | 2.78 | 23.18 | 35% |
| limited-focus | gate3 | 35.92 | 20.46 | 1 | 11.06 | 1.28 | 0 | 0 | 37.15 | 100% |
| tv-duds | gate3 | 2.38 | 0 | 0 | 0 | 0.17 | 0 | 0.23 | 0 | 0% |

### Gate 3 design trade-offs by strategy

(a) money · (b) Prestige · (c) time to TV / streaming · (d) successful IPs · (e) Hall of Fame · (f) last-12-month revenue mix · (g) solvency. Medians unless noted; shares are of careers.

| Strategy | Config | (a) cash median | min cash | ever negative | (b) Prestige | (c) TV unlock yr (share) | streaming live yr (share) | subs end | payback yrs (share) | (d) IPs ≥10K fans | shows · seasons · max | (e) HoF / career | (f) last-12-mo mix: traditional / subs / opex | streaming share | releases |
|---|---|---:|---:|---:|---:|---|---|---:|---|---:|---|---:|---|---:|---:|
| balanced | gate3 | $11.84M | $-4K | 70% | 10,605 | — (0%) | — (0%) | — | — (0%) | 19.0 | 0.0 · 0.0 · 0.0 | 14.0 | $1.36M / $0.00M / $0.00M | — | 48 |
| quality-first | gate3 | $12.19M | $-2K | 60% | 9,660 | — (0%) | — (0%) | — | — (0%) | 24.0 | 0.0 · 0.0 · 0.0 | 12.0 | $1.37M / $0.00M / $0.00M | — | 48 |
| repeat-farmer | gate3 | $13.08M | $-3K | 65% | 3,150 | — (0%) | — (0%) | — | — (0%) | 1.0 | 0.0 · 0.0 · 0.0 | 0.0 | $1.32M / $0.00M / $0.00M | — | 48 |
| cheap-duds | gate3 | $7.25M | $4K | 5% | 150 | — (0%) | — (0%) | — | — (0%) | 0.0 | 0.0 · 0.0 · 0.0 | 0.0 | $0.59M / $0.00M / $0.00M | — | 48 |
| self-funder | gate3 | $0.20M | $-29K | 100% | 3,048 | — (0%) | — (0%) | — | — (0%) | 0.0 | 0.0 · 0.0 · 0.0 | 0.0 | $0.53M / $0.00M / $0.00M | — | 48 |
| tv-first | gate3 | $10.95M | $-4K | 74% | 4,625 | 2.7 (100%) | — (0%) | — | — (0%) | 3.0 | 3.0 · 19.0 · 8.0 | 3.0 | $1.29M / $0.00M / $0.00M | — | 27 |
| renewal-franchise | gate3 | $6.07M | $-1K | 54% | 2,325 | 2.5 (100%) | — (0%) | — | — (0%) | 1.0 | 1.0 · 22.0 · 22.0 | 0.0 | $0.69M / $0.00M / $0.00M | — | 29 |
| mixed | gate3 | $11.55M | $-3K | 73% | 6,848 | 2.7 (100%) | 7.3 (100%) | 86,362 | 1.9 (100%) | 8.0 | 2.0 · 9.0 · 6.0 | 7.0 | $0.50M / $2.18M / $-1.07M | 81% | 34 |
| streaming-pivot | gate3 | $4.12M | $-3K | 65% | 5,640 | 2.5 (100%) | 6.4 (100%) | 86,226 | 1.3 (100%) | 4.0 | 2.0 · 9.0 · 6.0 | 6.0 | $0.00M / $2.20M / $-1.08M | 100% | 32 |
| traditional-holdout | gate3 | $12.01M | $-4K | 73% | 5,655 | 2.5 (100%) | — (0%) | — | — (0%) | 5.0 | 3.0 · 15.0 · 6.0 | 4.0 | $1.32M / $0.00M / $0.00M | — | 29 |
| limited-focus | gate3 | $12.66M | $-1K | 52% | 8,680 | 2.7 (100%) | — (0%) | — | — (0%) | 15.0 | 0.0 · 0.0 · 0.0 | 11.0 | $1.44M / $0.00M / $0.00M | — | 43 |
| tv-duds | gate3 | $6.97M | $4K | 4% | 150 | 12.0 (25%) | — (0%) | — | — (0%) | 0.0 | 0.0 · 0.0 · 0.0 | 0.0 | $0.51M / $0.00M / $0.00M | — | 48 |

### Formats: share of releases · mean score · HoF % · net per production week; Prestige sources

| Strategy | Config | limited_series: share · avg · HoF% · net/prod-wk | limited_series/original: share · avg · HoF% · net/prod-wk | movie: share · avg · HoF% · net/prod-wk | movie/original: share · avg · HoF% · net/prod-wk | tv: share · avg · HoF% · net/prod-wk | tv/original: share · avg · HoF% · net/prod-wk | Prestige by format | top Prestige sources |
|---|---|---|---|---|---|---|---|---|---|
| balanced | gate3 | — | — | 100% · 8.38 · 28.9% · $26.7K | — | — | — | movie 100% | audience_7_5 27.6%, hall_of_fame 26%, meters_all_70 19.9%, critic_8_5 18.2% |
| quality-first | gate3 | — | — | 100% · 8.4 · 25.7% · $27.2K | — | — | — | movie 100% | audience_7_5 31.4%, hall_of_fame 25.6%, meters_all_70 22.1%, critic_8_5 19.9% |
| repeat-farmer | gate3 | — | — | 100% · 6.86 · 0.2% · $27.7K | — | — | — | movie 100% | meters_all_70 68.5%, audience_7_5 15.5%, ip_viewers_500k 4.8%, ip_gross_5m 4.8% |
| cheap-duds | gate3 | — | — | 100% · 6.34 · 0% · $11.8K | — | — | — | movie 100% | audience_7_5 100% |
| self-funder | gate3 | — | — | 100% · 7.18 · 0.2% · $4.1K | — | — | — | movie 100% | audience_7_5 48.3%, meters_all_70 43.9%, critic_8_5 6.9%, hall_of_fame 0.6% |
| tv-first | gate3 | 25% · 7.17 · 0.6% · $20.9K | — | 4% · 5.6 · 0% · $9.9K | — | 71% · 8.02 · 14.1% · $27.1K | — | limited_series 8.4%, tv 91.6% | audience_7_5 27.3%, meters_all_70 22.9%, critic_8_5 12.4%, hall_of_fame 11.9% |
| renewal-franchise | gate3 | — | — | 26% · 6.94 · 0.6% · $18.0K | — | 74% · 6.48 · 0.8% · $19.4K | — | movie 16.1%, tv 83.9% | meters_all_70 50.3%, audience_7_5 24.6%, ip_viewers_500k 6.3%, ip_gross_5m 6.3% |
| mixed | gate3 | 38% · 7.84 · 13.2% · $25.2K | 8% · 8.79 · 37.9% · $-8.2K | 22% · 8.23 · 27.1% · $25.2K | 7% · 8.81 · 42.2% · $-7.6K | 20% · 8.22 · 11.5% · $28.4K | 6% · 8.52 · 32.1% · $-8.4K | limited_series 26.1%, tv 25.2%, movie 22.4%, limited_series/original 9.6%, movie/original 9.1%, tv/original 7.6% | audience_7_5 29.4%, hall_of_fame 20.9%, meters_all_70 20.7%, critic_8_5 17.3% |
| streaming-pivot | gate3 | — | — | 66% · 7.91 · 13.5% · $23.9K | 6% · 8.82 · 39.7% · $-7.5K | — | 28% · 8.5 · 26.9% · $-8.4K | movie 54.4%, movie/original 8.6%, tv/original 37% | audience_7_5 31.7%, meters_all_70 22.7%, hall_of_fame 20.8%, critic_8_5 18.7% |
| traditional-holdout | gate3 | 14% · 8.01 · 18.3% · $26.0K | — | 34% · 7.51 · 10.7% · $21.4K | — | 53% · 8.34 · 19.1% · $28.8K | — | limited_series 11.4%, movie 19.4%, tv 69.2% | audience_7_5 27.6%, meters_all_70 20.5%, hall_of_fame 16.5%, critic_8_5 15.2% |
| limited-focus | gate3 | 98% · 8.45 · 26.3% · $27.9K | — | 2% · 5.65 · 0% · $9.4K | — | — | — | limited_series 100% | audience_7_5 30.9%, hall_of_fame 25.3%, meters_all_70 21.3%, critic_8_5 19.9% |
| tv-duds | gate3 | — | — | 95% · 6.32 · 0% · $11.6K | — | 5% · 5.75 · 0% · $9.4K | — | movie 73.9%, tv 26.1% | audience_7_5 77.2%, ip_viewers_500k 15.3%, ip_gross_1m 7.6% |

### Gate 3 provisional flags

| Variant | Flag | Fired | Evidence |
|---|---|---|---|
| gate3 | STREAMING_INFINITE_GROWTH | **yes** | 6/400 launched careers reached ≥90% of the reachable subscriber market (growth is capped by design; this flags saturation) [PROVISIONAL threshold] |
| gate3 | SUBSCRIBER_CHURN_SPIRAL | no | not fired: 0/400 launched careers lost >60% of subscribers within 3 years [PROVISIONAL threshold] |
| gate3 | TV_SEASON_TOO_PROFITABLE | no | not fired: 469/12786 finished traditional TV seasons netted >2× the batch's pooled movie net per production week ($18,746) [PROVISIONAL threshold] |
| gate3 | TV_SEASON_TOO_LONG | **yes** | 213 careers kept one show running ≥12 seasons (fatigue cap 0.35 may allow endless renewals) [PROVISIONAL threshold] |
| gate3 | TV_NO_RENEWAL_PATH | no | not fired: 1/848 TV careers never made a second season [PROVISIONAL threshold] |
| gate3 | MIXED_ECONOMY_SOFTLOCK | no | not fired: 0/2400 careers spent ≥3 years with negative cash [PROVISIONAL threshold] |
| gate3 | FORMAT_DOMINANT | no | not fired: best cash: repeat-farmer; best Prestige: balanced; fires only if one strategy leads both by >50% [PROVISIONAL threshold] |
| gate3 | DELAYED_STUDIO_PROGRESSION | no | not fired: TV not unlocked by year 8: 0/800; streaming not live by year 15: 0/400 [PROVISIONAL threshold] |

### Diagnostic flags fired

| Variant | Fired |
|---|---|
| gate3 | EARLY_SOFTLOCK, PRESTIGE_TOO_FAST, QUALITY_INFLATION, DEAD_STRATEGY |

## 25-year careers (in-game calendar horizon; productions vary by strategy)

Invariant violations across all variants: **0**.

### Medians by strategy

| Strategy | Variant | endCash | prestige | prestigePerRelease | meanAudience | meanCritic | share8plus | share9plus | shareLate8plus | hofShare | maxStaffEnd | staffCount | meanStaffStat | upgrades | firstUpgradeWeek | years | maxIpFans | negativeCashWeeks |
|---|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|
| balanced | gate3 | $21438K | 18245 | 225.25 | 8.52 | 8.43 | 78% | 28% | 85% | 28% | 8 | 8 | 100 | 2 | 112 | 25 | 123459.50 | 2 |
| quality-first | gate3 | $22089K | 15387.50 | 189.95 | 8.45 | 8.34 | 77% | 21% | 76% | 21% | 8 | 8 | 100 | 2 | 112 | 25 | 21266.50 | 1 |
| repeat-farmer | gate3 | $25547K | 4800 | 59.30 | 6.83 | 6.79 | 1% | 0% | 0% | 0% | 8 | 8 | 100 | 2 | 112 | 25 | 281434.50 | 2 |
| cheap-duds | gate3 | $13450K | 300 | 3.70 | 6.27 | 6.39 | 0% | 0% | 0% | 0% | 4 | 2 | 91.60 | 0 | — | 25 | 7633.50 | 0 |
| self-funder | gate3 | $178K | 3972.50 | 49.05 | 7.06 | 7.02 | 7% | 0% | 0% | 0% | 4 | 2 | 100 | 0 | — | 25 | 3410 | 12 |
| tv-first | gate3 | $22695K | 6897.50 | 182.60 | 7.93 | 7.78 | 49% | 11% | 63% | 11% | 8 | 8 | 98.70 | 2 | 124 | 25 | 91589.50 | 2 |
| renewal-franchise | gate3 | $10128K | 3045 | 69.65 | 6.40 | 6.33 | 9% | 0% | 0% | 0% | 8 | 8 | 99.50 | 2 | 112 | 25 | 68322.50 | 1 |
| mixed | gate3 | $23851K | 11655 | 218.40 | 8.45 | 8.31 | 74% | 25% | 90% | 25% | 8 | 8 | 100 | 2 | 124 | 25 | 45939 | 2 |
| streaming-pivot | gate3 | $6039K | 8545 | 193.10 | 8.30 | 8.17 | 68% | 20% | 78% | 20% | 8 | 8 | 99.20 | 2 | 112 | 25 | 48326 | 2 |
| traditional-holdout | gate3 | $23826K | 9092.50 | 220.75 | 8.26 | 8.14 | 66% | 21% | 82% | 21% | 8 | 8 | 99.30 | 2 | 114 | 25 | 82756 | 2 |
| limited-focus | gate3 | $23279K | 14097.50 | 195.80 | 8.48 | 8.35 | 78% | 21% | 83% | 21% | 8 | 8 | 100 | 2 | 124 | 25 | 16298 | 1 |
| tv-duds | gate3 | $11581K | 550 | 6.80 | 6.09 | 6.21 | 0% | 0% | 0% | 0% | 4 | 2 | 91.60 | 0 | — | 25 | 7202 | 0 |

### Paired deltas vs **gate3** (median of per-seed differences; share of seeds where the variant is higher)

| Strategy | Variant | Δ endCash | Δ prestige | Δ share8plus | Δ meanAudience |
|---|---|---:|---:|---:|---:|

### Mean review score (avg of Audience+Critic) by production index

| Strategy | Variant | #1 | #5 | #10 | #20 | #30 | #40 |
|---|---|---:|---:|---:|---:|---:|---:|
| balanced | gate3 | 5.65 | 7.38 | 8.31 | 8.68 | 8.74 | 8.77 |
| quality-first | gate3 | 5.58 | 7.34 | 8.20 | 8.70 | 8.79 | 8.77 |
| repeat-farmer | gate3 | 5.64 | 7.41 | 7.78 | 6.61 | 6.69 | 6.75 |
| cheap-duds | gate3 | 5.47 | 5.84 | 6.15 | 6.41 | 6.58 | 6.50 |
| self-funder | gate3 | 5.49 | 6.13 | 6.76 | 7.45 | 7.57 | 7.52 |
| tv-first | gate3 | 5.60 | 7.44 | 8.18 | 8.33 | 7.72 | 7.17 |
| renewal-franchise | gate3 | 5.65 | 7.40 | 8.04 | 5.86 | 5.81 | 5.79 |
| mixed | gate3 | 5.62 | 7.43 | 8.24 | 8.33 | 8.86 | 8.65 |
| streaming-pivot | gate3 | 5.67 | 7.35 | 8.29 | 8.69 | 8.57 | 8.48 |
| traditional-holdout | gate3 | 5.62 | 7.39 | 8.19 | 8.47 | 8.57 | 8.67 |
| limited-focus | gate3 | 5.65 | 7.42 | 8.30 | 8.73 | 8.80 | 8.80 |
| tv-duds | gate3 | 5.47 | 5.85 | 6.08 | 6.44 | 6.61 | 6.47 |

### Great films — all strategies pooled, by release window

Denominators are films in that window. HoF = average of Audience and Critic ≥ hofThreshold (9.0). `≥9` is inclusive, `>9` strict.

| Strategy | Config | Window | Films (n) | Avg Aud | Avg Crit | HoF n (%) | Avg ≥9 n (%) | Avg >9 n (%) | Aud ≥9 n (%) | Crit ≥9 n (%) | 8+ n (%) | Careers with 0 HoF | HoF/career p10/p50/p90 | Best/career p10/p50/p90/p99 | Best combined movie | Prestige median |
|---|---|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---|---|---|---:|
| ALL | gate3 | 1-5 | 12000 | 6.28 | 6.34 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 1 (0.0%) | 304 (2.5%) | 100% of 2400 | 0/0/0 | 6.2/7.42/8.05/8.52 | 8.91 "Midnight Rising" (A8.47/C9.36; renewal-franchise seed 15 #5, yr 1.5, critic gen 0) |  |
| ALL | gate3 | 6-20 | 36000 | 7.67 | 7.62 | 3192 (8.9%) | 3192 (8.9%) | 3071 (8.5%) | 4306 (12.0%) | 4280 (11.9%) | 15480 (43.0%) | 52% of 2400 | 0/0/4 | 7.24/8.95/9.65/10 | 10.00 "Red Run" (limited_series, A10/C10; limited-focus seed 10 #20, yr 6.9, critic gen 0) |  |
| ALL | gate3 | 21-50 | 65493 | 7.78 | 7.71 | 12045 (18.4%) | 12045 (18.4%) | 11690 (17.9%) | 16628 (25.4%) | 14049 (21.4%) | 31368 (47.9%) | 43% of 2400 | 0/3/13 | 6.65/9.41/9.9/10 | 10.00 "Iron Frequency" (limited_series, A10/C10; limited-focus seed 6 #29, yr 10.0, critic gen 0) |  |
| ALL | gate3 | 51-100 | 41782 | 7.28 | 7.25 | 3167 (7.6%) | 3167 (7.6%) | 2936 (7.0%) | 4972 (11.9%) | 4645 (11.1%) | 13978 (33.5%) | 58% of 1600 | 0/0/7 | 6.85/8.5/9.82/10 | 10.00 "Wild Night" (A10/C10; balanced seed 7 #59, yr 18.1, critic gen 0) |  |
| ALL | gate3 | all | 155275 | 7.50 | 7.46 | 18404 (11.8%) | 18404 (11.8%) | 17697 (11.4%) | 25906 (16.7%) | 22975 (14.8%) | 61130 (39.4%) | 41% of 2400 | 0/5/20 | 7.76/9.49/10/10 | 10.00 "Iron Frequency" (limited_series, A10/C10; limited-focus seed 6 #29, yr 10.0, critic gen 0) |  |

### Great films by strategy (whole career)

| Strategy | Config | Window | Films (n) | Avg Aud | Avg Crit | HoF n (%) | Avg ≥9 n (%) | Avg >9 n (%) | Aud ≥9 n (%) | Crit ≥9 n (%) | 8+ n (%) | Careers with 0 HoF | HoF/career p10/p50/p90 | Best/career p10/p50/p90/p99 | Best combined movie | Prestige median |
|---|---|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---|---|---|---:|
| balanced | gate3 | all | 16200 | 8.52 | 8.42 | 4633 (28.6%) | 4633 (28.6%) | 4431 (27.4%) | 5833 (36.0%) | 5437 (33.6%) | 12461 (76.9%) | 0% of 200 | 16/23/31 | 9.68/9.87/10/10 | 10.00 "Dead Protocol" (A10/C10; balanced seed 6 #32, yr 9.8, critic gen 0) | 18245 |
| quality-first | gate3 | all | 16200 | 8.45 | 8.32 | 3486 (21.5%) | 3486 (21.5%) | 3341 (20.6%) | 5024 (31.0%) | 4473 (27.6%) | 12266 (75.7%) | 0% of 200 | 12/17/24 | 9.65/9.86/10/10 | 10.00 "Hollow Pulse" (A10/C10; quality-first seed 9 #22, yr 6.8, critic gen 0) | 15387.5 |
| repeat-farmer | gate3 | all | 16200 | 6.81 | 6.80 | 15 (0.1%) | 15 (0.1%) | 15 (0.1%) | 21 (0.1%) | 34 (0.2%) | 421 (2.6%) | 99% of 200 | 0/0/0 | 7.63/8.02/8.57/8.99 | 9.58 "Iron Pulse" (A9.49/C9.67; repeat-farmer seed 38 #9, yr 2.8, critic gen 0) | 4800 |
| cheap-duds | gate3 | all | 16200 | 6.25 | 6.38 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 34 (0.2%) | 100% of 200 | 0/0/0 | 7.56/7.83/8.11/8.27 | 8.30 "Dead Storm" (A8.13/C8.46; cheap-duds seed 42 #78, yr 24.0, critic gen 0) | 300 |
| self-funder | gate3 | all | 16200 | 7.06 | 7.01 | 17 (0.1%) | 17 (0.1%) | 17 (0.1%) | 45 (0.3%) | 167 (1.0%) | 1226 (7.6%) | 92% of 200 | 0/0/0 | 8.29/8.56/8.97/9.13 | 9.16 "Red Run" (A9.08/C9.23; self-funder seed 148 #26, yr 8.0, critic gen 0) | 3972.5 |
| tv-first | gate3 | all | 7630 | 7.87 | 7.77 | 908 (11.9%) | 908 (11.9%) | 876 (11.5%) | 1324 (17.4%) | 1096 (14.4%) | 3601 (47.2%) | 12% of 200 | 0/4/8 | 8.97/9.43/9.81/10 | 10.00 "Midnight Rising: Season 2" (tv, A10/C10; tv-first seed 21 #19, yr 7.5, critic gen 0) | 6897.5 |
| renewal-franchise | gate3 | all | 8743 | 6.39 | 6.29 | 44 (0.5%) | 44 (0.5%) | 39 (0.5%) | 139 (1.6%) | 82 (0.9%) | 807 (9.2%) | 91% of 200 | 0/0/0 | 8.07/8.5/8.93/9.46 | 9.59 "Red Run: Season 4" (tv, A9.52/C9.65; renewal-franchise seed 27 #13, yr 4.8, critic gen 0) | 3045 |
| mixed | gate3 | all | 10677 | 8.43 | 8.31 | 2683 (25.1%) | 2683 (25.1%) | 2630 (24.6%) | 3829 (35.9%) | 3243 (30.4%) | 7845 (73.5%) | 0% of 200 | 8/13/18.1 | 9.57/9.81/10/10 | 10.00 "Wild Legacy" (limited_series, A10/C10; mixed seed 6 #50, yr 22.7, critic gen 0) | 11655 |
| streaming-pivot | gate3 | all | 8758 | 8.29 | 8.17 | 1804 (20.6%) | 1804 (20.6%) | 1762 (20.1%) | 2489 (28.4%) | 2183 (24.9%) | 5838 (66.7%) | 0% of 200 | 4/9/13.1 | 9.44/9.69/10/10 | 10.00 "Silver Night" (movie/original, A10/C10; streaming-pivot seed 9 #28, yr 11.1, critic gen 0) | 8545 |
| traditional-holdout | gate3 | all | 8362 | 8.26 | 8.13 | 1721 (20.6%) | 1721 (20.6%) | 1691 (20.2%) | 2495 (29.8%) | 2009 (24.0%) | 5382 (64.4%) | 2% of 200 | 4/9/14 | 9.36/9.66/10/10 | 10.00 "Red Legacy" (A10/C10; traditional-holdout seed 6 #35, yr 21.2, critic gen 0) | 9092.5 |
| limited-focus | gate3 | all | 14400 | 8.48 | 8.35 | 3093 (21.5%) | 3093 (21.5%) | 2895 (20.1%) | 4707 (32.7%) | 4251 (29.5%) | 11220 (77.9%) | 0% of 200 | 10/15/22 | 9.63/9.84/10/10 | 10.00 "Iron Frequency" (limited_series, A10/C10; limited-focus seed 6 #29, yr 10.0, critic gen 0) | 14097.5 |
| tv-duds | gate3 | all | 15705 | 6.02 | 6.17 | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 0 (0.0%) | 29 (0.2%) | 100% of 200 | 0/0/0 | 7.51/7.75/8.11/8.26 | 8.31 "Iron Protocol" (A8.18/C8.43; tv-duds seed 56 #60, yr 18.5, critic gen 0) | 550 |

### Greatest single films (all strategies, whole sample; reproducible from seed + config hash)

| Variant | Best combined | Best Audience | Best Critic | Year band with most HoF |
|---|---|---|---|---|
| gate3 | 10.00 "Iron Frequency" (limited_series, A10/C10; limited-focus seed 6 #29, yr 10.0, critic gen 0) | 10.00 "Iron Frequency" (limited_series, A10/C10; limited-focus seed 6 #29, yr 10.0, critic gen 0) | 10.00 "Iron Frequency" (limited_series, A10/C10; limited-focus seed 6 #29, yr 10.0, critic gen 0) | y10-15: 18.5% of 29412 |

### Great films by in-game year (all strategies pooled)

| Strategy | Config | Window | Films (n) | Avg Aud | Avg Crit | HoF n (%) | Avg ≥9 n (%) | Avg >9 n (%) | Aud ≥9 n (%) | Crit ≥9 n (%) | 8+ n (%) | Careers with 0 HoF | HoF/career p10/p50/p90 | Best/career p10/p50/p90/p99 | Best combined movie | Prestige median |
|---|---|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---|---|---|---:|
| ALL | gate3 | y0-5 | 35816 | 7.16 | 7.16 | 1340 (3.7%) | 1340 (3.7%) | 1286 (3.6%) | 2157 (6.0%) | 2061 (5.8%) | 9793 (27.3%) | 70% of 2400 | 0/0/2 | 7.01/8.62/9.4/9.8 | 10.00 "Dead Pulse" (A10/C10; quality-first seed 56 #15, yr 4.6, critic gen 0) |  |
| ALL | gate3 | y5-10 | 31113 | 7.73 | 7.67 | 4857 (15.6%) | 4857 (15.6%) | 4735 (15.2%) | 6150 (19.8%) | 5830 (18.7%) | 14135 (45.4%) | 49% of 2400 | 0/1/6 | 7.05/9.03/9.76/10 | 10.00 "Dead Protocol" (A10/C10; balanced seed 6 #32, yr 9.8, critic gen 0) |  |
| ALL | gate3 | y10-15 | 29412 | 7.74 | 7.68 | 5428 (18.5%) | 5428 (18.5%) | 5231 (17.8%) | 7353 (25.0%) | 6206 (21.1%) | 13296 (45.2%) | 51% of 2400 | 0/0/7 | 6.65/8.97/9.83/10 | 10.00 "Iron Frequency" (limited_series, A10/C10; limited-focus seed 6 #29, yr 10.0, critic gen 0) |  |
| ALL | gate3 | y15-20 | 28829 | 7.57 | 7.52 | 4296 (14.9%) | 4296 (14.9%) | 4047 (14.0%) | 5794 (20.1%) | 4981 (17.3%) | 12209 (42.4%) | 52% of 2400 | 0/0/5 | 6.56/8.86/9.79/10 | 10.00 "Wild Night" (A10/C10; balanced seed 7 #59, yr 18.1, critic gen 0) |  |
| ALL | gate3 | y20-30 | 30105 | 7.39 | 7.33 | 2483 (8.3%) | 2483 (8.3%) | 2398 (8.0%) | 4452 (14.8%) | 3897 (12.9%) | 11697 (38.9%) | 64% of 2400 | 0/0/4 | 6.41/8.72/9.68/10 | 10.00 "Red Legacy" (A10/C10; traditional-holdout seed 6 #35, yr 21.2, critic gen 0) |  |

### Prestige progression (Prestige gates growth; cash sustains operations)

`cash-rich but Prestige-locked` = careers that at some week had the cash for the next upgrade but not the Prestige. `bought below gate` must be 0 (engine rule).

| Strategy | Config | Cash median | Prestige median | Prestige/yr | Careers with negative-cash weeks | →6 gate met (Prestige ≥ 200) · median film # | →6 bought · median film # | →6 cash-rich but Prestige-locked | →6 bought below gate | →8 gate met (Prestige ≥ 1000) · median film # | →8 bought · median film # | →8 cash-rich but Prestige-locked | →8 bought below gate |
|---|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|
| balanced | gate3 | $21.44M | 18245 | 729.8 | 70% | 100% · #7 | 100% · #7 | 100% | 0 | 100% · #11 | 100% · #11 | 100% | 0 |
| quality-first | gate3 | $22.09M | 15387.5 | 615.5 | 60% | 100% · #7 | 100% · #7 | 100% | 0 | 100% · #12 | 100% · #12 | 100% | 0 |
| repeat-farmer | gate3 | $25.55M | 4800 | 192 | 65% | 100% · #6 | 100% · #7 | 100% | 0 | 100% · #11 | 100% · #11 | 100% | 0 |
| cheap-duds | gate3 | $13.45M | 300 | 12 | 5% | 73% · #46 | 0% · #— | 100% | 0 | 0% · #— | 0% · #— | 0% | 0 |
| self-funder | gate3 | $0.18M | 3972.5 | 158.9 | 100% | 100% · #18 | 0% · #— | 65% | 0 | 100% · #27 | 0% · #— | 0% | 0 |
| tv-first | gate3 | $22.69M | 6897.5 | 275.9 | 74% | 100% · #7 | 100% · #7 | 100% | 0 | 100% · #11 | 100% · #12 | 100% | 0 |
| renewal-franchise | gate3 | $10.13M | 3045 | 121.8 | 54% | 100% · #7 | 100% · #7 | 100% | 0 | 100% · #11 | 100% · #12 | 100% | 0 |
| mixed | gate3 | $23.85M | 11655 | 466.2 | 73% | 100% · #7 | 100% · #7 | 100% | 0 | 100% · #12 | 100% · #12 | 100% | 0 |
| streaming-pivot | gate3 | $6.04M | 8545 | 341.8 | 65% | 100% · #7 | 100% · #7 | 100% | 0 | 100% · #12 | 100% · #12 | 100% | 0 |
| traditional-holdout | gate3 | $23.83M | 9092.5 | 363.7 | 73% | 100% · #7 | 100% · #7 | 100% | 0 | 100% · #11 | 100% · #12 | 100% | 0 |
| limited-focus | gate3 | $23.28M | 14097.5 | 563.9 | 52% | 100% · #7 | 100% · #7 | 100% | 0 | 100% · #12 | 100% · #12 | 100% | 0 |
| tv-duds | gate3 | $11.58M | 550 | 22 | 4% | 72% · #44.5 | 0% · #— | 100% | 0 | 9% · #65 | 0% · #— | 0% | 0 |

### Prestige milestones awarded per career (mean)

| Strategy | Variant | audience_7_5 | critic_8_5 | first_hall_of_fame | hall_of_fame | ip_gross_1m | ip_gross_5m | ip_viewers_500k | meters_all_70 | careers > 400 Prestige/yr (OUTDATED threshold) |
|---|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|
| balanced | gate3 | 69.11 | 40.45 | 1 | 23.16 | 3.35 | 1.77 | 3.35 | 75.61 | 100% |
| quality-first | gate3 | 68.72 | 35.41 | 1 | 17.43 | 0 | 0 | 0 | 75.59 | 100% |
| repeat-farmer | gate3 | 6.42 | 0.99 | 0.01 | 0.07 | 1 | 1 | 1 | 75.64 | 0% |
| cheap-duds | gate3 | 4.05 | 0.01 | 0 | 0 | 0 | 0 | 0 | 0 | 0% |
| self-funder | gate3 | 24.86 | 2.83 | 0.08 | 0.09 | 0 | 0 | 0 | 37.23 | 0% |
| tv-first | gate3 | 24.59 | 10.81 | 0.89 | 4.54 | 4.04 | 3.85 | 4.01 | 32.27 | 0% |
| renewal-franchise | gate3 | 7.85 | 1.72 | 0.09 | 0.22 | 1 | 1 | 1 | 38.3 | 0% |
| mixed | gate3 | 44.29 | 24.8 | 1 | 13.41 | 4.04 | 1.89 | 3 | 47.44 | 96% |
| streaming-pivot | gate3 | 34.66 | 18.45 | 1 | 9.02 | 0 | 0 | 3.1 | 38.3 | 7% |
| traditional-holdout | gate3 | 32.37 | 16.78 | 0.98 | 8.61 | 4.99 | 3.75 | 4.42 | 36.22 | 27% |
| limited-focus | gate3 | 62.07 | 32.99 | 1 | 15.46 | 2.54 | 0 | 0 | 66.15 | 100% |
| tv-duds | gate3 | 3.35 | 0.01 | 0 | 0 | 0.7 | 0.14 | 0.87 | 0 | 0% |

### Gate 3 design trade-offs by strategy

(a) money · (b) Prestige · (c) time to TV / streaming · (d) successful IPs · (e) Hall of Fame · (f) last-12-month revenue mix · (g) solvency. Medians unless noted; shares are of careers.

| Strategy | Config | (a) cash median | min cash | ever negative | (b) Prestige | (c) TV unlock yr (share) | streaming live yr (share) | subs end | payback yrs (share) | (d) IPs ≥10K fans | shows · seasons · max | (e) HoF / career | (f) last-12-mo mix: traditional / subs / opex | streaming share | releases |
|---|---|---:|---:|---:|---:|---|---|---:|---|---:|---|---:|---|---:|---:|
| balanced | gate3 | $21.44M | $-4K | 70% | 18,245 | — (0%) | — (0%) | — | — (0%) | 20.0 | 0.0 · 0.0 · 0.0 | 23.0 | $1.62M / $0.00M / $0.00M | — | 81 |
| quality-first | gate3 | $22.09M | $-2K | 60% | 15,388 | — (0%) | — (0%) | — | — (0%) | 23.0 | 0.0 · 0.0 · 0.0 | 17.0 | $1.57M / $0.00M / $0.00M | — | 81 |
| repeat-farmer | gate3 | $25.55M | $-3K | 65% | 4,800 | — (0%) | — (0%) | — | — (0%) | 1.0 | 0.0 · 0.0 · 0.0 | 0.0 | $1.59M / $0.00M / $0.00M | — | 81 |
| cheap-duds | gate3 | $13.45M | $4K | 5% | 300 | — (0%) | — (0%) | — | — (0%) | 0.0 | 0.0 · 0.0 · 0.0 | 0.0 | $0.65M / $0.00M / $0.00M | — | 81 |
| self-funder | gate3 | $0.18M | $-29K | 100% | 3,973 | — (0%) | — (0%) | — | — (0%) | 0.0 | 0.0 · 0.0 · 0.0 | 0.0 | $0.55M / $0.00M / $0.00M | — | 81 |
| tv-first | gate3 | $22.69M | $-4K | 74% | 6,898 | 2.7 (100%) | — (0%) | — | — (0%) | 4.0 | 4.0 · 30.0 · 8.0 | 4.0 | $1.33M / $0.00M / $0.00M | — | 38 |
| renewal-franchise | gate3 | $10.13M | $-1K | 54% | 3,045 | 2.5 (100%) | — (0%) | — | — (0%) | 1.0 | 1.0 · 36.0 · 36.0 | 0.0 | $0.67M / $0.00M / $0.00M | — | 44 |
| mixed | gate3 | $23.85M | $-3K | 73% | 11,655 | 2.7 (100%) | 7.3 (100%) | 87,188 | 1.9 (100%) | 9.0 | 3.0 · 15.0 · 6.0 | 13.0 | $0.53M / $2.30M / $-1.11M | 81% | 53 |
| streaming-pivot | gate3 | $6.04M | $-3K | 65% | 8,545 | 2.5 (100%) | 6.4 (100%) | 89,725 | 1.3 (100%) | 4.0 | 4.0 · 19.0 · 6.0 | 9.0 | $0.00M / $2.30M / $-1.11M | 100% | 44 |
| traditional-holdout | gate3 | $23.83M | $-4K | 73% | 9,093 | 2.5 (100%) | — (0%) | — | — (0%) | 6.0 | 5.0 · 25.0 · 6.0 | 9.0 | $1.38M / $0.00M / $0.00M | — | 41 |
| limited-focus | gate3 | $23.28M | $-1K | 52% | 14,098 | 2.7 (100%) | — (0%) | — | — (0%) | 12.0 | 0.0 · 0.0 · 0.0 | 15.0 | $1.38M / $0.00M / $0.00M | — | 72 |
| tv-duds | gate3 | $11.58M | $4K | 4% | 550 | 15.1 (57%) | — (0%) | — | — (0%) | 0.0 | 1.0 · 9.5 · 8.0 | 0.0 | $0.36M / $0.00M / $0.00M | — | 81 |

### Formats: share of releases · mean score · HoF % · net per production week; Prestige sources

| Strategy | Config | limited_series: share · avg · HoF% · net/prod-wk | limited_series/original: share · avg · HoF% · net/prod-wk | movie: share · avg · HoF% · net/prod-wk | movie/original: share · avg · HoF% · net/prod-wk | tv: share · avg · HoF% · net/prod-wk | tv/original: share · avg · HoF% · net/prod-wk | Prestige by format | top Prestige sources |
|---|---|---|---|---|---|---|---|---|---|
| balanced | gate3 | — | — | 100% · 8.47 · 28.6% · $27.6K | — | — | — | movie 100% | audience_7_5 28.4%, hall_of_fame 25.4%, meters_all_70 20.7%, critic_8_5 18.9% |
| quality-first | gate3 | — | — | 100% · 8.39 · 21.5% · $28.1K | — | — | — | movie 100% | audience_7_5 33.2%, meters_all_70 24.3%, hall_of_fame 22.4%, critic_8_5 19.4% |
| repeat-farmer | gate3 | — | — | 100% · 6.81 · 0.1% · $29.9K | — | — | — | movie 100% | meters_all_70 79.4%, audience_7_5 10.1%, ip_viewers_500k 3.1%, ip_gross_5m 3.1% |
| cheap-duds | gate3 | — | — | 100% · 6.32 · 0% · $12.7K | — | — | — | movie 100% | audience_7_5 99.9%, critic_8_5 0.1% |
| self-funder | gate3 | — | — | 100% · 7.04 · 0.1% · $3.8K | — | — | — | movie 100% | audience_7_5 46.7%, meters_all_70 46.6%, critic_8_5 6%, hall_of_fame 0.4% |
| tv-first | gate3 | 18% · 7.17 · 0.6% · $20.9K | — | 3% · 5.6 · 0% · $9.9K | — | 79% · 8.05 · 14.8% · $29.5K | — | limited_series 5.6%, tv 94.4% | audience_7_5 26.5%, meters_all_70 23.2%, critic_8_5 13.2%, hall_of_fame 13.1% |
| renewal-franchise | gate3 | — | — | 18% · 6.94 · 0.6% · $18.0K | — | 82% · 6.21 · 0.5% · $18.9K | — | movie 12.4%, tv 87.6% | meters_all_70 61.7%, audience_7_5 19%, ip_viewers_500k 4.8%, ip_gross_5m 4.8% |
| mixed | gate3 | 30% · 8.04 · 17.8% · $26.6K | 11% · 8.83 · 37.4% · $-8.3K | 20% · 8.42 · 30.4% · $26.2K | 11% · 8.85 · 41.2% · $-7.6K | 19% · 8.3 · 14.9% · $30.2K | 10% · 8.47 · 26.5% · $-8.5K | limited_series 22.3%, tv 23.1%, movie 19.7%, limited_series/original 12.1%, movie/original 12.2%, tv/original 10.6% | audience_7_5 28.3%, hall_of_fame 22.9%, meters_all_70 20.2%, critic_8_5 18% |
| streaming-pivot | gate3 | — | — | 47% · 7.91 · 13.5% · $23.9K | 9% · 8.81 · 36.8% · $-7.6K | — | 44% · 8.46 · 24.9% · $-8.4K | movie 36.8%, movie/original 11.2%, tv/original 52% | audience_7_5 30.8%, meters_all_70 22.7%, hall_of_fame 21.3%, critic_8_5 18.5% |
| traditional-holdout | gate3 | 12% · 8.23 · 25.1% · $27.6K | — | 27% · 7.72 · 16.1% · $22.4K | — | 60% · 8.4 · 21.7% · $31.0K | — | limited_series 10.8%, movie 17.1%, tv 72.1% | audience_7_5 26.4%, meters_all_70 19.7%, hall_of_fame 18.7%, critic_8_5 15.5% |
| limited-focus | gate3 | 99% · 8.46 · 21.8% · $29.1K | — | 1% · 5.65 · 0% · $9.4K | — | — | — | limited_series 100% | audience_7_5 32.7%, meters_all_70 23.3%, hall_of_fame 21.8%, critic_8_5 19.7% |
| tv-duds | gate3 | — | — | 81% · 6.31 · 0% · $12.1K | — | 19% · 5.16 · 0% · $8.4K | — | movie 49.5%, tv 50.5% | audience_7_5 53.1%, ip_viewers_500k 27.5%, ip_gross_1m 14.9%, ip_gross_5m 4.4% |

### Gate 3 provisional flags

| Variant | Flag | Fired | Evidence |
|---|---|---|---|
| gate3 | STREAMING_INFINITE_GROWTH | **yes** | 23/400 launched careers reached ≥90% of the reachable subscriber market (growth is capped by design; this flags saturation) [PROVISIONAL threshold] |
| gate3 | SUBSCRIBER_CHURN_SPIRAL | no | not fired: 0/400 launched careers lost >60% of subscribers within 3 years [PROVISIONAL threshold] |
| gate3 | TV_SEASON_TOO_PROFITABLE | no | not fired: 738/22861 finished traditional TV seasons netted >2× the batch's pooled movie net per production week ($19,675) [PROVISIONAL threshold] |
| gate3 | TV_SEASON_TOO_LONG | **yes** | 276 careers kept one show running ≥12 seasons (fatigue cap 0.35 may allow endless renewals) [PROVISIONAL threshold] |
| gate3 | TV_NO_RENEWAL_PATH | no | not fired: 2/914 TV careers never made a second season [PROVISIONAL threshold] |
| gate3 | MIXED_ECONOMY_SOFTLOCK | **yes** | 2/2400 careers spent ≥3 years with negative cash [PROVISIONAL threshold] |
| gate3 | FORMAT_DOMINANT | no | not fired: best cash: repeat-farmer; best Prestige: balanced; fires only if one strategy leads both by >50% [PROVISIONAL threshold] |
| gate3 | DELAYED_STUDIO_PROGRESSION | no | not fired: TV not unlocked by year 8: 0/800; streaming not live by year 15: 0/400 [PROVISIONAL threshold] |

### Diagnostic flags fired

| Variant | Fired |
|---|---|
| gate3 | EARLY_SOFTLOCK, PRESTIGE_TOO_FAST, QUALITY_INFLATION, DEAD_STRATEGY |
