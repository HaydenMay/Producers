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

Seed 1 after 10 years (balanced): 300 Stars ever, 269 still working. Tiers: newcomer 128 · mid 120 · big 21.

## 2. Careers (medians would hide little here; these are means per career)

| Policy | Films | Hired | Stars seen at 2+ auditions | Original-lead cards (cast) | Catalog unlock year | Retired (of yours) | Perfect-fit flags (cast) | Invariant violations |
|---|---|---|---|---|---|---|---|---|
| balanced | 30.8 | 11.8 | 41.3 | 7.7 (3.7) | 2.0 (6/6 careers) | 27.7 (1.0) | 43.7 (12.7) | 0 |
| quality-first | 29.8 | 10.8 | 39.7 | 0.0 (0.0) | 1.9 (6/6 careers) | 26.8 (1.3) | 46.2 (14.5) | 0 |
| franchise-builder | 31.0 | 3.5 | 36.7 | 27.3 (27.3) | 9.5 (3/6 careers) | 26.7 (0.0) | 1.0 (0.3) | 0 |
| famous-star | 29.8 | 12.8 | 40.7 | 0.0 (0.0) | 5.4 (6/6 careers) | 25.0 (5.2) | 29.2 (5.3) | 0 |
| cheap-duds | 31.2 | 26.8 | 46.3 | 0.0 (0.0) | 7.5 (4/6 careers) | 28.8 (0.0) | 9.3 (0.0) | 0 |

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

Average paid newcomer audition card, skill in the production's family: **45.9** (n 1041). Free fallback: **45** in the family, 6 elsewhere. Fallback cards shown in these careers: 0.

## 6. Catalog snapshot: balanced seed 1 at year 10

| Star | Status | Films with you | Years active | Fame | Level | Best family |
|---|---|---|---|---|---|---|
| Noa Fox | active | 1 | 14 | 83 | 3 | Funny 72 |
| Kit Vale | retired | 1 | 18 | 48 | 3 | Funny 82 |
| Rae Kerr | active | 1 | 18 | 32 | 3 | Funny 83 |
| Lee Lowe | active | 3 | 18 | 85 | 7 | Funny 100 |
| Sam Lowe | active | 5 | 11 | 95 | 4 | Scary 100 |
| Kai Reyes | active | 7 | 15 | 93 | 8 | Action 100 |
| Jo Reyes | active | 2 | 17 | 69 | 5 | Funny 100 |
| Jay Imai | active | 8 | 4 | 100 | 6 | Action 100 |
| Lee Reyes | active | 1 | 11 | 22 | 2 | Funny 100 |
| Sam Kerr | active | 1 | 11 | 59 | 10 | Action 100 |
| Kit Park | active | 1 | 2 | 14 | 7 | Scary 100 |

Elapsed 3.4 s.
