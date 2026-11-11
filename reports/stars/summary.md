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

Seed 1 after 10 years (balanced): 300 Stars ever, 277 still working. Tiers: newcomer 124 · mid 128 · big 25.

## 2. Careers (medians would hide little here; these are means per career)

| Policy | Films | Hired | Stars seen at 2+ auditions | Original-lead cards (cast) | Catalog unlock year | Retired (of yours) | Perfect-fit flags (cast) | Invariant violations |
|---|---|---|---|---|---|---|---|---|
| balanced | 15.3 | 6.5 | 16.7 | 5.0 (4.0) | 2.2 (6/6 careers) | 27.3 (1.0) | 18.2 (4.8) | 0 |
| quality-first | 14.8 | 6.8 | 14.5 | 0.0 (0.0) | 2.5 (6/6 careers) | 27.2 (0.5) | 19.2 (8.2) | 0 |
| franchise-builder | 16.0 | 2.3 | 16.7 | 13.5 (13.5) | 5.9 (6/6 careers) | 28.5 (0.0) | 5.3 (0.0) | 0 |
| famous-star | 16.0 | 9.2 | 14.8 | 0.0 (0.0) | 5.6 (5/6 careers) | 27.3 (4.3) | 9.0 (2.3) | 0 |
| cheap-duds | 16.0 | 14.0 | 18.5 | 0.0 (0.0) | 7.2 (5/6 careers) | 28.2 (0.0) | 6.3 (0.2) | 0 |

Catalog unlock: the default config has no staff-capacity ladder, so it opens at 200 Prestige (the gate3 ladder's first-step Prestige).

## 3. Catalog unlock with a real 4/6/8 staff ladder (`config/gate3.json` on the default)

balanced year 2.6 (6/6) · quality-first year 3.0 (6/6) · mixed year 2.8 (6/6) · tv-first year 2.9 (6/6)

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

Average paid newcomer audition card, skill in the production's family: **45.7** (n 552). Free fallback: **45** in the family, 6 elsewhere. Fallback cards shown in these careers: 0.

## 6. Catalog snapshot: balanced seed 1 at year 10

| Star | Status | Films with you | Years active | Fame | Level | Best family |
|---|---|---|---|---|---|---|
| Noa Fox | active | 1 | 14 | 60 | 3 | Funny 71 |
| Kit Hart | active | 5 | 9 | 93 | 8 | Funny 100 |
| Sam Lowe | active | 1 | 11 | 44 | 3 | Scary 100 |
| Jo Fox | active | 3 | 17 | 98 | 8 | Scary 100 |
| Liv Moreau | active | 3 | 3 | 45 | 10 | Scary 100 |
| Noa Park | active | 2 | 6 | 71 | 10 | Action 100 |
| Alex Novak | active | 1 | 17 | 70 | 6 | Romantic 100 |

Elapsed 2.6 s.
