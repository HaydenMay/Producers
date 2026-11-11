# Star fit + genre XP: what they are worth today, and what each option would do

Quality candidate `config/gate4q.json`; 48 rookie movies (each studio's first 3) and 214 veteran movies (year 6+) from balanced/quality-first careers, seeds 1–8. Every number is the **median change in average score** (0–10) from a pure recompute of the score formula. Current knobs: `production.starFilmingWeight` 0.11, `studioGenre.qualityBonusPerLevel` 0.03 (levels at 1/3/6/10/15 releases of that exact genre).

## 1. Star: fit 80 vs fit 0 (same film, same crew)

| Star weight | Rookie Δavg | Veteran Δavg | Rookie Filming meter 0 → 80-fit |
|---|---|---|---|
| 0.11 (today) | +0.21 | +0.02 | 52.19 → 68.21 |
| 0.22 (×2) | +0.34 | +0.04 | 52.19 → 76.19 |
| 0.33 (×3) | +0.42 | +0.05 | 52.19 → 80.97 |
| 0.44 (×4) | +0.48 | +0.06 | 52.19 → 84.15 |

## 2. Studio genre XP: level 5 vs level 0 (same film, same crew, same Star)

| Bonus per level | Level-5 bonus | Rookie Δavg | Veteran Δavg |
|---|---|---|---|
| 0.03 (today) | +15% work points | +0.29 | +0.11 |
| 0.05 | +25% work points | +0.44 | +0.17 |
| 0.08 | +40% work points | +0.65 | +0.25 |
| 0.12 | +60% work points | +0.88 | +0.33 |

## 3. Worked examples (real releases)

### Rookie: “Hollow Edge” (Comedy + Sports), published avg 6.42, actual Star fit 20, studio Comedy level 0

| Setup | fit 0 | fit 50 | fit 80 | fit 100 |
|---|---|---|---|---|
| Star weight 0.11, level 0 | 6.28 | 6.61 | 6.74 | 6.81 |
| Star weight 0.22, level 0 | 6.28 | 6.81 | 6.97 | 7.05 |
| Star weight 0.33, level 0 | 6.28 | 6.95 | 7.1 | 7.18 |
| Star weight 0.11, level 5 @ 0.03/level | 6.67 | 6.99 | 7.12 | 7.18 |
| Star weight 0.11, level 5 @ 0.08/level | 7.21 | 7.51 | 7.63 | 7.69 |

### Veteran: “Wild Legacy” (Comedy + Superheroes), published avg 9.06, actual Star fit 100, studio Comedy level 1

| Setup | fit 0 | fit 50 | fit 80 | fit 100 |
|---|---|---|---|---|
| Star weight 0.11, level 0 | 9 | 9.02 | 9.03 | 9.04 |
| Star weight 0.22, level 0 | 9 | 9.04 | 9.05 | 9.06 |
| Star weight 0.33, level 0 | 9 | 9.05 | 9.07 | 9.08 |
| Star weight 0.11, level 5 @ 0.03/level | 9.13 | 9.15 | 9.15 | 9.16 |
| Star weight 0.11, level 5 @ 0.08/level | 9.28 | 9.3 | 9.31 | 9.31 |

