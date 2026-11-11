# Dud economics: Gate 4 audience levers by score band

Seeds 1–16, 10-year careers. Each cell = **share of finished releases losing money all-in · median all-in net (n)**. All-in = studio take + surplus − overruns − payroll/upkeep during production. Quality rules are fixed per base; only revenue levers move. TEST ASSUMPTIONS.

Levers: **pivot** = word-of-mouth pivot 5 → 6.5; **decay** = bad-reception interest decay 0.35 → 1.0; **both** = the pair, all formats; **movie-only both** = the pair for movies only (`audience.movieQualityPivot`, `audience.diffusion.movieBadInterestDecay`), TV keeps the global knobs.

## 1. Movies

### Shipped default (`config/baseline.json`): the three steps

| Setup | <4 | 4-6 | 6-8 | 8+ | End cash p50: balanced / quality-first / cheap-duds / poor-fit-chooser |
|---|---|---|---|---|---|
| old default: geometric legs, no levers | 0% · $188K (n 32) | 0% · $236K (n 215) | 0% · $396K (n 388) | 0% · $600K (n 383) | $8.77M / $8.03M / $6.82M / $3.91M |
| diffusion legs, no levers | 0% · $172K (n 32) | 0% · $239K (n 215) | 0% · $511K (n 375) | 0% · $606K (n 382) | $8.96M / $8.19M / $8.21M / $3.96M |
| **NEW DEFAULT**: diffusion + movie-only levers | 73% · −$8K (n 26) | 39% · $6K (n 209) | 0% · $308K (n 399) | 0% · $590K (n 349) | $8.18M / $7.14M / $4.75M / $455K |

### Base: quality candidate (`config/gate4q.json`, single grade)

| Levers | <4 | 4-6 | 6-8 | 8+ | End cash p50: balanced / quality-first / cheap-duds / poor-fit-chooser |
|---|---|---|---|---|---|
| none | 0% · $58K (n 358) | 0% · $84K (n 266) | 0% · $209K (n 580) | 0% · $234K (n 738) | $4.98M / $4.55M / $5.77M / $2.40M |
| movie-only both | 91% · −$14K (n 276) | 32% · $15K (n 247) | 0% · $124K (n 574) | 0% · $229K (n 694) | $4.30M / $3.83M / $3.37M / $90K |
| pivot | 0% · $31K (n 360) | 3% · $50K (n 267) | 0% · $121K (n 565) | 0% · $230K (n 719) | $4.21M / $3.92M / $3.73M / $1.44M |
| decay | 40% · $11K (n 356) | 1% · $66K (n 264) | 0% · $216K (n 581) | 0% · $234K (n 736) | $4.90M / $4.53M / $6.10M / $1.32M |
| both | 91% · −$14K (n 276) | 32% · $15K (n 247) | 0% · $124K (n 574) | 0% · $229K (n 694) | $4.30M / $3.83M / $3.37M / $90K |

## 2. TV (separate; quality candidate only, the shipped default has TV off). The movie-only knobs never touch a TV/limited release (unit test in `tests/integration/defaults.test.ts`); `movie-only both` still differs from `none` because these policies also make movies (before TV unlocks, or when no show is renewable), and those movies now earn less, which changes cash and later choices.

Seasons (`tv`) and limited series (`limited_series`) are reported apart because their cost and reach differ.

### tv

| Levers | <4 | 4-6 | 6-8 | 8+ | End cash p50: tv-first / renewal-franchise / tv-duds |
|---|---|---|---|---|---|
| none | — | 82% · −$65K (n 56) | 4% · $197K (n 160) | 4% · $223K (n 195) | $1.81M / $463K / $5.80M |
| movie-only both | — | 58% · −$13K (n 62) | 5% · $193K (n 160) | 2% · $238K (n 171) | $1.92M / $606K / $3.24M |
| pivot | — | 96% · −$66K (n 56) | 61% · −$23K (n 118) | 3% · $220K (n 195) | $990K / $47K / $3.32M |
| decay | 100% · −$37K (n 1) | 82% · −$61K (n 51) | 5% · $203K (n 149) | 4% · $226K (n 206) | $1.85M / $562K / $5.66M |
| both | — | 100% · −$131K (n 53) | 56% · −$11K (n 111) | 7% · $222K (n 193) | $1.20M / $89K / $3.24M |

### limited_series

| Levers | <4 | 4-6 | 6-8 | 8+ | End cash p50: tv-first / renewal-franchise / tv-duds |
|---|---|---|---|---|---|
| none | 0% · $61K (n 1) | 0% · $78K (n 2) | 0% · $237K (n 45) | 0% · $299K (n 21) | $1.81M / $463K / $5.80M |
| movie-only both | — | 0% · $174K (n 2) | 0% · $218K (n 50) | 0% · $309K (n 24) | $1.92M / $606K / $3.24M |
| pivot | — | 0% · $21K (n 3) | 0% · $154K (n 56) | 0% · $265K (n 18) | $990K / $47K / $3.32M |
| decay | — | 0% · $54K (n 3) | 0% · $224K (n 49) | 0% · $294K (n 21) | $1.85M / $562K / $5.66M |
| both | — | 40% · $46K (n 5) | 0% · $139K (n 61) | 0% · $283K (n 18) | $1.20M / $89K / $3.24M |

Elapsed 20.5 s.
