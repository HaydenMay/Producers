# Stars rework smoke (PROD-213…218)

Shipped default (`config/baseline.json`), seeds 1–6, 10-year careers. TEST VALUES throughout.

## 1. Pool at game creation (seed 1)

150 Stars. Tiers by Fame: newcomer 67 · mid 53 · big 30.

| Years active | Stars | Avg Fame | Avg Level |
|---|---|---|---|
| 0–2 | 67 | 8.1 | 1.5 |
| 3–6 | 19 | 33.7 | 2.9 |
| 7–10 | 40 | 49.8 | 4.1 |
| 11–15 | 8 | 75.8 | 5.6 |
| 16–20 | 16 | 86.6 | 6.6 |

Seed 1 after 10 years (balanced): 300 Stars ever, 273 still working. Tiers: newcomer 132 · mid 115 · big 26.

## 2. Careers (medians would hide little here; these are means per career)

| Policy | Films | Hired | Stars seen at 2+ auditions | Original-lead cards (cast) | Catalog unlock year | Retired (of yours) | Perfect-fit flags (cast) | Invariant violations |
|---|---|---|---|---|---|---|---|---|
| balanced | 30.8 | 13.5 | 41.2 | 9.2 (4.3) | 2.0 (6/6 careers) | 27.5 (1.3) | 42.8 (10.3) | 0 |
| quality-first | 29.8 | 11.8 | 39.5 | 0.0 (0.0) | 1.9 (6/6 careers) | 26.3 (1.5) | 43.8 (13.8) | 0 |
| franchise-builder | 31.0 | 3.7 | 36.8 | 27.3 (27.3) | 9.5 (3/6 careers) | 26.7 (0.0) | 0.5 (0.2) | 0 |
| famous-star | 29.8 | 12.5 | 36.2 | 0.0 (0.0) | 5.3 (6/6 careers) | 25.0 (4.5) | 28.8 (5.7) | 0 |
| cheap-duds | 31.2 | 26.8 | 46.2 | 0.0 (0.0) | 7.9 (4/6 careers) | 28.8 (0.0) | 8.2 (0.0) | 0 |

Catalog unlock: the default config has no staff-capacity ladder, so it opens at 200 Prestige (the gate3 ladder's first-step Prestige).

## 3. Catalog unlock with a real 4/6/8 staff ladder (`config/gate3.json` on the default)

balanced year 2.4 (6/6) · quality-first year 2.4 (6/6) · mixed year 2.2 (6/6) · tv-first year 2.3 (6/6)

## 4. Hidden growth weights (seed 3 pool): same template, different Stars

| Template | Star | Growth weights (hidden) | Skills |
|---|---|---|---|
| scary_funny | Ivy Park (L8) | Scary 47%, Funny 24%, Romantic 10%, Action 9%, Dramatic 11% | Scary 100, Funny 100, Romantic 35, Action 41, Dramatic 40 |
| scary_funny | Kai Lowe (L4) | Scary 52%, Funny 24%, Romantic 5%, Action 10%, Dramatic 9% | Scary 100, Funny 55, Romantic 11, Action 24, Dramatic 19 |
| funny_romantic | Jo Sato (L7) | Scary 10%, Funny 30%, Romantic 39%, Action 10%, Dramatic 11% | Scary 41, Funny 100, Romantic 100, Action 31, Dramatic 36 |
| funny_romantic | Max Fox (L4) | Scary 6%, Funny 50%, Romantic 28%, Action 9%, Dramatic 7% | Scary 13, Funny 87, Romantic 63, Action 16, Dramatic 16 |
| specialist | Dee Quinn (L8) | Scary 61%, Funny 9%, Romantic 12%, Action 8%, Dramatic 9% | Scary 100, Funny 52, Romantic 59, Action 49, Dramatic 45 |
| specialist | Bo Okafor (L7) | Scary 10%, Funny 11%, Romantic 13%, Action 54%, Dramatic 12% | Scary 42, Funny 51, Romantic 55, Action 100, Dramatic 51 |

## 5. Free fallback vs paid newcomers

Average paid newcomer audition card, skill in the production's family: **44.5** (n 1029). Free fallback: **45** in the family, 6 elsewhere. Fallback cards shown in these careers: 0.

## 6. Catalog snapshot: balanced seed 1 at year 10

| Star | Status | Films with you | Years active | Fame | Level | Best family |
|---|---|---|---|---|---|---|
| Noa Fox | active | 1 | 14 | 87 | 3 | Funny 72 |
| Kit Vale | retired | 1 | 18 | 58 | 4 | Funny 94 |
| Rae Kerr | active | 1 | 18 | 38 | 3 | Funny 83 |
| Lee Lowe | active | 2 | 18 | 73 | 7 | Funny 100 |
| Sam Lowe | active | 4 | 12 | 79 | 4 | Scary 100 |
| Kai Reyes | active | 2 | 17 | 86 | 6 | Action 100 |
| Max Hart | active | 1 | 16 | 47 | 6 | Funny 100 |
| Cam Lowe | retired | 1 | 19 | 77 | 8 | Romantic 100 |
| Jo Reyes | active | 1 | 16 | 60 | 4 | Funny 100 |
| Sam Kerr | active | 7 | 11 | 100 | 10 | Action 100 |
| Lee Reyes | active | 2 | 11 | 41 | 3 | Funny 100 |
| Noa Diaz | active | 2 | 15 | 48 | 6 | Scary 100 |
| Max Lind | active | 2 | 17 | 67 | 6 | Dramatic 100 |
| Fin Kerr | active | 2 | 18 | 79 | 4 | Romantic 100 |
| Cam Grant | active | 1 | 8 | 35 | 2 | Action 96 |
| Eli Lind | active | 1 | 13 | 56 | 4 | Action 100 |

Elapsed 3.5 s.
