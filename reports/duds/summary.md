# Dud economics: Gate 4 audience levers by score band

Seeds 1–16, 10-year careers. Each cell = **share of finished releases losing money all-in · median all-in net (n)**. All-in = studio take + surplus − overruns − payroll/upkeep during production. Quality rules are fixed per base; only revenue levers move. TEST ASSUMPTIONS.

Levers: **pivot** = word-of-mouth pivot 5 → 6.5; **decay** = bad-reception interest decay 0.35 → 1.0; **both** = the pair.

## 1. Movies

### Base: shipped default (`config/baseline.json`)

| Levers | <4 | 4-6 | 6-8 | 8+ | End cash p50: balanced / quality-first / cheap-duds / poor-fit-chooser |
|---|---|---|---|---|---|
| none | 0% · $56K (n 20) | 0% · $89K (n 613) | 0% · $174K (n 745) | 0% · $284K (n 569) | $7.31M / $6.71M / $4.46M / $2.98M |
| pivot | 0% · $56K (n 20) | 0% · $89K (n 613) | 0% · $174K (n 745) | 0% · $284K (n 569) | $7.31M / $6.71M / $4.46M / $2.98M |
| decay | 0% · $56K (n 20) | 0% · $89K (n 613) | 0% · $174K (n 745) | 0% · $284K (n 569) | $7.31M / $6.71M / $4.46M / $2.98M |
| both | 0% · $56K (n 20) | 0% · $89K (n 613) | 0% · $174K (n 745) | 0% · $284K (n 569) | $7.31M / $6.71M / $4.46M / $2.98M |

### Base: quality candidate (`config/gate4q.json`, single grade)

| Levers | <4 | 4-6 | 6-8 | 8+ | End cash p50: balanced / quality-first / cheap-duds / poor-fit-chooser |
|---|---|---|---|---|---|
| none | 0% · $58K (n 358) | 0% · $83K (n 267) | 0% · $207K (n 584) | 0% · $234K (n 733) | $4.99M / $4.56M / $5.74M / $2.40M |
| pivot | 0% · $31K (n 360) | 3% · $51K (n 266) | 0% · $121K (n 567) | 0% · $230K (n 718) | $4.30M / $3.92M / $3.73M / $1.44M |
| decay | 40% · $11K (n 356) | 1% · $65K (n 265) | 0% · $213K (n 585) | 0% · $234K (n 731) | $4.84M / $4.55M / $6.10M / $1.32M |
| both | 91% · −$14K (n 276) | 32% · $15K (n 247) | 0% · $123K (n 577) | 0% · $228K (n 691) | $4.30M / $3.83M / $3.37M / $90K |

## 2. TV (separate; quality candidate only, the shipped default has TV off)

Seasons (`tv`) and limited series (`limited_series`) are reported apart because their cost and reach differ.

### tv

| Levers | <4 | 4-6 | 6-8 | 8+ | End cash p50: tv-first / renewal-franchise / tv-duds |
|---|---|---|---|---|---|
| none | — | 82% · −$65K (n 56) | 4% · $197K (n 162) | 4% · $223K (n 194) | $1.81M / $463K / $5.75M |
| pivot | — | 96% · −$66K (n 56) | 61% · −$23K (n 118) | 3% · $220K (n 195) | $990K / $47K / $3.30M |
| decay | — | 82% · −$61K (n 51) | 5% · $203K (n 150) | 4% · $226K (n 205) | $1.85M / $562K / $5.66M |
| both | — | 100% · −$131K (n 53) | 57% · −$13K (n 110) | 7% · $220K (n 192) | $1.20M / $89K / $3.18M |

### limited_series

| Levers | <4 | 4-6 | 6-8 | 8+ | End cash p50: tv-first / renewal-franchise / tv-duds |
|---|---|---|---|---|---|
| none | 0% · $61K (n 1) | 0% · $78K (n 2) | 0% · $237K (n 45) | 0% · $299K (n 21) | $1.81M / $463K / $5.75M |
| pivot | — | 0% · $21K (n 3) | 0% · $154K (n 56) | 0% · $265K (n 18) | $990K / $47K / $3.30M |
| decay | — | 0% · $54K (n 3) | 0% · $224K (n 49) | 0% · $294K (n 21) | $1.85M / $562K / $5.66M |
| both | — | 40% · $46K (n 5) | 0% · $139K (n 61) | 0% · $283K (n 18) | $1.20M / $89K / $3.18M |

Elapsed 13.6 s.
