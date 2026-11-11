# Gate 4Q representative release traces (candidate `config/gate4q.json`)

Reproduce: `npx tsx scripts/quality-traces.ts`. All five come from the COMPARE run (`reports/gate4q/compare`). Under these unchanged Gate 4 payout formulas a genuinely bad film is **still profitable**; see the findings.

## 1. Genuinely bad film (rookie studio, poor pairing): “Silver Rising” (Horror + Sports)

*Starting two-person studio, first release, cheapest Star, Horror + Sports; seed 12.*

- **Published:** Audience **2.88** / Critics **3.02** → **2.95**.
- **Meters (0–100):** plot 56.22 · writing 57.51 · filming 53.08 (incl. Star) · editing 47.65. Base before pairing: audience 5.23, critics 5.49.
- **Pairing:** matrix baseline F/F (no world variation for this pair); scored with F (×0.55) / F (×0.55).
- **Star:** Max Grant (level 3, Fame 0), Scary 39, Funny 11, Romantic 14, Action 70, Dramatic 13 → family fit for Horror (Scary) = **9**, +6 filming points.
- **Studio exact-genre XP:** Horror level 0 → +0% work points. Fatigue 0%.

| Counterfactual (one input removed, same formula) | Audience | Critics | Avg | Δ avg |
|---|---|---|---|---|
| As released | 2.88 | 3.02 | 2.95 | — |
| No Star filming points | 2.83 | 3 | 2.92 | -0.03 |
| No studio genre-XP bonus | 2.88 | 3.02 | 2.95 | 0.00 |
| Neutral pairing (C/C) | 5.23 | 5.49 | 5.36 | 2.41 |

**Money (finished run):** studio direct cost $63,496 (base + Star $3,496) + payroll/upkeep during production $38,400; distributed by wolf (its own ad spend $33,000, 35% share); opening 51,318, unique viewers 102,446 of a 264,000 reach cap; gross $204,892 → studio $133,180 → **all-in $31,284**; partner net $38,712.

## 2. Ordinary rookie film on a natural pairing: “Red Shadow” (Action + Superheroes)

*Same starting studio rules, release 2, Action + Superheroes; seed 7.*

- **Published:** Audience **6.22** / Critics **6.03** → **6.13**.
- **Meters (0–100):** plot 58.16 · writing 59.67 · filming 55.08 (incl. Star) · editing 48.95. Base before pairing: audience 5.41, critics 5.68.
- **Pairing:** matrix baseline A/B (no world variation for this pair); scored with A (×1.15) / B (×1.06).
- **Star:** Kai Sato (level 1, Fame 17), Scary 60, Funny 8, Romantic 8, Action 16, Dramatic 5 → family fit for Action (Action) = **10**, +7 filming points.
- **Studio exact-genre XP:** Action level 0 → +0% work points. Fatigue 0%.

| Counterfactual (one input removed, same formula) | Audience | Critics | Avg | Δ avg |
|---|---|---|---|---|
| As released | 6.22 | 6.03 | 6.13 | — |
| No Star filming points | 6.11 | 5.98 | 6.05 | -0.08 |
| No studio genre-XP bonus | 6.22 | 6.02 | 6.12 | -0.01 |
| Neutral pairing (C/C) | 5.41 | 5.68 | 5.55 | -0.58 |

**Money (finished run):** studio direct cost $66,832 (base + Star $6,832) + payroll/upkeep during production $38,400; distributed by wolf (its own ad spend $40,000, 34% share); opening 58,509, unique viewers 191,590 of a 264,000 reach cap; gross $383,180 → studio $252,899 → **all-in $147,666**; partner net $90,281.

## 3. Cheap GOOD film (low budget ≠ low quality): “Hollow Run” (Action + Superheroes)

*low-budget-random-combo studio (2 staff, cheapest Star, no training), seed 13: the same minimum budget as #1, but a natural pairing and a crew that has worked 15 productions.*

- **Published:** Audience **7.11** / Critics **7.49** → **7.3**.
- **Meters (0–100):** plot 70.07 · writing 72.27 · filming 65.99 (incl. Star) · editing 59.02. Base before pairing: audience 6.51, critics 6.86.
- **Pairing:** matrix baseline A/B, this world's variation → A/A; scored with A (×1.15) / A (×1.15).
- **Star:** Noa Kerr (level 2, Fame 15), Scary 44, Funny 11, Romantic 14, Action 19, Dramatic 48 → family fit for Action (Action) = **13**, +9 filming points.
- **Studio exact-genre XP:** Action level 2 → +6% work points. Fatigue 5%.

| Counterfactual (one input removed, same formula) | Audience | Critics | Avg | Δ avg |
|---|---|---|---|---|
| As released | 7.11 | 7.49 | 7.3 | — |
| No Star filming points | 7.04 | 7.46 | 7.25 | -0.05 |
| No studio genre-XP bonus | 6.97 | 7.36 | 7.17 | -0.13 |
| Neutral pairing (C/C) | 6.18 | 6.51 | 6.35 | -0.95 |

**Money (finished run):** studio direct cost $62,000 (base + Star $2,000) + payroll/upkeep during production $38,400; distributed by wolf (its own ad spend $55,000, 30% share); opening 57,550, unique viewers 254,552 of a 264,000 reach cap; gross $509,104 → studio $356,373 → **all-in $255,973**; partner net $97,731.

## 4. High-scoring film: “Iron Protocol” (Comedy + Vampires)

*balanced studio, seed 10, ~7 years in.*

- **Published:** Audience **9.44** / Critics **9.56** → **9.5** (Hall of Fame).
- **Meters (0–100):** plot 90.63 · writing 91.48 · filming 89.63 (incl. Star) · editing 86.71. Base before pairing: audience 8.9, critics 9.02.
- **Pairing:** matrix baseline B/B (no world variation for this pair); scored with B (×1.06) / B (×1.06).
- **Star:** Dee Reyes (level 3, Fame 77), Scary 9, Funny 89, Romantic 11, Action 12, Dramatic 9 → family fit for Comedy (Funny) = **77**, +54 filming points.
- **Studio exact-genre XP:** Comedy level 2 → +6% work points. Fatigue 0%.

| Counterfactual (one input removed, same formula) | Audience | Critics | Avg | Δ avg |
|---|---|---|---|---|
| As released | 9.44 | 9.56 | 9.5 | — |
| No Star filming points | 9.4 | 9.54 | 9.47 | -0.03 |
| No studio genre-XP bonus | 9.38 | 9.5 | 9.44 | -0.06 |
| Neutral pairing (C/C) | 8.9 | 9.02 | 8.96 | -0.54 |

**Money (finished run):** studio direct cost $88,681 (base + Star $28,681) + payroll/upkeep during production $144,000; distributed by meridian (its own ad spend $189,000, 40% share); opening 107,053, unique viewers 398,042 of a 400,000 reach cap; gross $796,084 → studio $477,650 → **all-in $244,969**; partner net $129,434.

## 5. Poor pairing with an unexpected cult audience: “Dead Horizon” (Horror + Spies)

*quality-first studio, seed 5, release 4: Horror + Spies (a D/F pairing nobody at the studio had tried) made by a crew good enough to qualify.*

- **Published:** Audience **7.91** / Critics **4.19** → **6.05**.
- **Meters (0–100):** plot 76.23 · writing 78.36 · filming 75.53 (incl. Star) · editing 71.49. Base before pairing: audience 7.46, critics 7.62.
- **Pairing:** matrix baseline D/F (no world variation for this pair); scored with B (×1.06) / F (×0.55). Cult check: chance 0.2, draw 0.198532, craft 73.51 → **UNEXPECTED CULT APPEAL (lift)**: audience grade D → B for this title only (audience 5.97 → 7.91); critics unchanged; reasons: audience-side craft 73.51 (Filming/Editing) ≥ 60; a pairing nobody at the studio had tried; Spies is hot (+0.1).
- **Star:** Noa Lind (level 5, Fame 51), Scary 48, Funny 62, Romantic 56, Action 31, Dramatic 47 → family fit for Horror (Scary) = **42**, +28 filming points.
- **Studio exact-genre XP:** Horror level 0 → +0% work points. Fatigue 0%.

| Counterfactual (one input removed, same formula) | Audience | Critics | Avg | Δ avg |
|---|---|---|---|---|
| As released | 7.91 | 4.19 | 6.05 | — |
| No Star filming points | 7.78 | 4.16 | 5.97 | -0.08 |
| No studio genre-XP bonus | 7.92 | 4.19 | 6.06 | 0.01 |
| Neutral pairing (C/C) | 7.46 | 7.62 | 7.54 | 1.49 |
| Without the cult event | 5.97 | 4.19 | 5.08 | -0.97 |

**Money (finished run):** studio direct cost $100,546 (base + Star $40,546) + payroll/upkeep during production $73,600; distributed by orbit (its own ad spend $74,000, 35% share); opening 86,675, unique viewers 328,110 of a 332,000 reach cap; gross $656,220 → studio $426,543 → **all-in $252,397**; partner net $155,677.

