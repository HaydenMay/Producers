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

Seed 1 after 10 years (balanced): 300 Stars ever, 272 still working. Tiers: newcomer 122 · mid 130 · big 20.

## 2. Careers (medians would hide little here; these are means per career)

| Policy | Films | Hired | Stars seen at 2+ auditions | Original-lead cards (cast) | Catalog unlock year | Retired (of yours) | Perfect-fit flags (cast) | Invariant violations |
|---|---|---|---|---|---|---|---|---|
| balanced | 16.0 | 6.5 | 16.0 | 4.3 (2.7) | 2.4 (6/6 careers) | 27.0 (0.7) | 17.7 (6.3) | 0 |
| quality-first | 15.7 | 6.7 | 16.5 | 0.0 (0.0) | 2.3 (6/6 careers) | 29.3 (1.7) | 20.5 (8.5) | 0 |
| franchise-builder | 16.0 | 2.3 | 16.8 | 13.7 (13.7) | 3.5 (6/6 careers) | 29.3 (0.2) | 12.7 (0.0) | 0 |
| famous-star | 16.0 | 7.2 | 15.3 | 0.0 (0.0) | 4.9 (6/6 careers) | 28.8 (4.3) | 14.3 (3.7) | 0 |
| cheap-duds | 16.0 | 13.8 | 17.2 | 0.0 (0.0) | 5.6 (4/6 careers) | 29.0 (0.0) | 6.8 (0.2) | 0 |

Catalog unlock: the default config has no staff-capacity ladder, so it opens at 200 Prestige (the gate3 ladder's first-step Prestige).

## 3. Catalog unlock with a real 4/6/8 staff ladder (`config/gate3.json` on the default)

balanced year 2.8 (6/6) · quality-first year 2.9 (6/6) · mixed year 2.8 (6/6) · tv-first year 3.0 (6/6)

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

Average paid newcomer audition card, skill in the production's family: **48.1** (n 560). Free fallback: **45** in the family, 6 elsewhere. Fallback cards shown in these careers: 0.

## 6. Catalog snapshot: balanced seed 1 at year 10

| Star | Status | Films with you | Years active | Fame | Level | Best family |
|---|---|---|---|---|---|---|
| Noa Fox | active | 1 | 14 | 63 | 3 | Funny 71 |
| Kit Vale | active | 1 | 19 | 71 | 5 | Funny 100 |
| Kit Hart | active | 6 | 9 | 100 | 8 | Funny 100 |
| Rae Sato | active | 2 | 14 | 48 | 4 | Scary 100 |
| Lee Grant | retired | 3 | 17 | 100 | 8 | Action 100 |
| Liv Quinn | active | 1 | 9 | 42 | 4 | Romantic 100 |
| Bo Lind | active | 1 | 7 | 36 | 3 | Romantic 100 |
| Bo Imai U. | active | 1 | 3 | 9 | 1 | Action 77 |

Elapsed 2.7 s.
