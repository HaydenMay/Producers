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

Seed 1 after 10 years (balanced): 300 Stars ever, 279 still working. Tiers: newcomer 126 · mid 127 · big 26.

## 2. Careers (medians would hide little here; these are means per career)

| Policy | Films | Hired | Stars seen at 2+ auditions | Original-lead cards (cast) | Catalog unlock year | Retired (of yours) | Perfect-fit flags (cast) | Invariant violations |
|---|---|---|---|---|---|---|---|---|
| balanced | 15.2 | 6.0 | 16.0 | 3.2 (1.8) | 2.4 (6/6 careers) | 26.0 (0.7) | 18.0 (7.2) | 0 |
| quality-first | 15.0 | 5.3 | 14.0 | 0.0 (0.0) | 2.1 (6/6 careers) | 28.5 (0.7) | 20.3 (9.7) | 0 |
| franchise-builder | 16.0 | 2.2 | 16.7 | 13.8 (13.8) | 4.2 (6/6 careers) | 28.8 (0.2) | 10.2 (0.0) | 0 |
| famous-star | 16.0 | 7.8 | 15.8 | 0.0 (0.0) | 5.3 (6/6 careers) | 28.8 (4.7) | 14.2 (2.8) | 0 |
| cheap-duds | 16.0 | 14.3 | 17.5 | 0.0 (0.0) | 5.6 (4/6 careers) | 29.0 (0.0) | 6.8 (0.2) | 0 |

Catalog unlock: the default config has no staff-capacity ladder, so it opens at 200 Prestige (the gate3 ladder's first-step Prestige).

## 3. Catalog unlock with a real 4/6/8 staff ladder (`config/gate3.json` on the default)

balanced year 2.7 (6/6) · quality-first year 2.4 (6/6) · mixed year 2.7 (6/6) · tv-first year 2.7 (6/6)

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

Average paid newcomer audition card, skill in the production's family: **46.9** (n 553). Free fallback: **45** in the family, 6 elsewhere. Fallback cards shown in these careers: 0.

## 6. Catalog snapshot: balanced seed 1 at year 10

| Star | Status | Films with you | Years active | Fame | Level | Best family |
|---|---|---|---|---|---|---|
| Noa Fox | active | 1 | 14 | 78 | 3 | Funny 71 |
| Kit Hart | active | 4 | 10 | 76 | 7 | Funny 100 |
| Sam Lowe | active | 1 | 11 | 39 | 4 | Scary 100 |
| Bo Sato | active | 2 | 18 | 91 | 9 | Funny 100 |
| Kai Quinn | active | 2 | 19 | 100 | 10 | Scary 100 |
| Max Kerr | active | 1 | 10 | 32 | 5 | Scary 100 |
| Mo Park | active | 3 | 9 | 90 | 10 | Funny 100 |
| Kai Lind | active | 1 | 9 | 51 | 6 | Dramatic 100 |
| Eli Lind | active | 1 | 13 | 37 | 4 | Action 100 |

Elapsed 3.1 s.
