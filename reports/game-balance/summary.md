# Game balance (the game preview's config)

`progressionConfig()`; seeds 1–16, 20-year careers; agents accept specialties and train with a cash cushion. Goals: first films usually below 6; nobody stuck early; first Hall of Fame ~year 4–6; a mix of formats is a strong route. TEST VALUES.

| Strategy | First film (median) | Mean score, years 0–1 → 2–4 → 5–9 → 10–19 | Hall of Fame share | First Hall of Fame (median year, careers) |
|---|---|---|---|---|
| balanced | 4.3 (100% below 6) | 4.9 → 7.2 → 8.6 → 8.6 | 24.8% | yr 6.7 (16/16) |
| quality-first | 4.1 (100% below 6) | 4.9 → 7.2 → 8.4 → 8.2 | 9.6% | yr 8.1 (15/16) |
| mixed | 4.5 (100% below 6) | 5.7 → 7.9 → 8.4 → 8.1 | 10.4% | yr 5.1 (16/16) |
| tv-first | 4.3 (100% below 6) | 5.4 → 7.8 → 7.5 → 7.6 | 7.3% | yr 8.7 (14/16) |
| limited-focus | 4.5 (100% below 6) | 5.5 → 8.1 → 8.6 → 8.5 | 18.8% | yr 4.5 (16/16) |
| cheap-duds | 4.1 (100% below 6) | 5.0 → 5.4 → 5.2 → 4.8 | 0.0% | never (0/16) |

| Strategy | 20-yr cash (p25–p75) | 20-yr legacy (p25–p75) | Red weeks, first 2 yrs | Specialists | Top skill |
|---|---|---|---|---|---|
| balanced | $19.9M ($18.9M–$20.2M) | 23.1K (20.2–26.1K) | 1 | 8.0 | 251 |
| quality-first | $19.1M ($18.3M–$20.1M) | 22.2K (21.5–23.6K) | 5 | 8.0 | 253 |
| mixed | $30.8M ($29.3M–$31.9M) | 24.3K (22.4–27.0K) | 0 | 7.0 | 252 |
| tv-first | $20.9M ($20.3M–$21.7M) | 17.2K (15.5–19.3K) | 0 | 8.0 | 253 |
| limited-focus | $19.5M ($19.3M–$20.0M) | 24.5K (22.6–25.3K) | 0 | 8.0 | 254 |
| cheap-duds | $0.7M ($0.6M–$0.8M) | 0.3K (0.2–0.3K) | 26 | 0.0 | 61 |

Invariant violations: 0. Elapsed 10.0 s.
