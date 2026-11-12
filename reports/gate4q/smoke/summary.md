# Gate 4Q quality diagnostic

Seeds 1–5; rookie scenarios = first 5 releases of the starting 2-staff studio on fixed pairings; policies = 5-year careers (finished movies); veterans = a balanced studio after 8 years making one extra movie (seeds 1–5). Economy = Gate 4 candidate (studio-funded, 80% bids). **Elapsed 4.6 s** (old 0.9s, Q1_editorial 0.6s, Q2_bounded 0.6s, Q3_mild 0.5s, Q3_sev 0.5s, Q3_strong 0.5s, Q4_cult 0.6s, Q4_info_G4levers 0.5s). Invariant violations in policy careers: **0**.

| Variant | Change |
|---|---|
| old | Gate 4 candidate as delivered: two independent random grades per pair; D 0.90 / F 0.78 |
| Q1_editorial | + editorial matrix, no world variation (same multipliers) |
| Q2_bounded | + bounded variation (20% of sides move one step) |
| Q3_mild | Q2 + D 0.85 / F 0.65 |
| Q3_sev | Q2 + D 0.80 / F 0.55 |
| Q3_strong | Q2 + D 0.75 / F 0.45 |
| Q4_cult | Q3_sev + rare cult appeal (= config/gate4q.json) |
| Q4_info_G4levers | INFORMATION ONLY (not proposed here): Q4_cult + the Gate 4 audience levers (word-of-mouth pivot 6.5, bad-reception decay 1.0) to show what real duds would earn |

## 1. Rookie studio, first five releases (scripted pairings, cheapest Star)

| Variant | Pairings | N | min | p10 / p50 / p90 | mean | 0–<4 | 4–<6 | 6–<8 | 8–10 |
|---|---|---|---|---|---|---|---|---|---|
| old | natural (Horror+Zombies, Action+Superheroes, Comedy+Sports) | 25 | 4.83 | 5.16 / 5.81 / 6.08 | 5.71 | 0% | 84% | 16% | 0% |
| Q1_editorial | natural (Horror+Zombies, Action+Superheroes, Comedy+Sports) | 25 | 6.04 | 6.26 / 6.50 / 6.60 | 6.45 | 0% | 0% | 100% | 0% |
| Q2_bounded | natural (Horror+Zombies, Action+Superheroes, Comedy+Sports) | 25 | 5.80 | 5.97 / 6.38 / 6.59 | 6.33 | 0% | 12% | 88% | 0% |
| Q3_mild | natural (Horror+Zombies, Action+Superheroes, Comedy+Sports) | 25 | 5.80 | 5.97 / 6.38 / 6.59 | 6.33 | 0% | 12% | 88% | 0% |
| Q3_sev | natural (Horror+Zombies, Action+Superheroes, Comedy+Sports) | 25 | 5.80 | 5.97 / 6.38 / 6.59 | 6.33 | 0% | 12% | 88% | 0% |
| Q3_strong | natural (Horror+Zombies, Action+Superheroes, Comedy+Sports) | 25 | 5.80 | 5.97 / 6.38 / 6.59 | 6.33 | 0% | 12% | 88% | 0% |
| Q4_cult | natural (Horror+Zombies, Action+Superheroes, Comedy+Sports) | 25 | 5.80 | 5.97 / 6.38 / 6.59 | 6.33 | 0% | 12% | 88% | 0% |
| Q4_info_G4levers | natural (Horror+Zombies, Action+Superheroes, Comedy+Sports) | 25 | 5.80 | 5.97 / 6.38 / 6.60 | 6.33 | 0% | 12% | 88% | 0% |
| old | middling (Action+Sports, Comedy+Superheroes, Action+Zombies) | 25 | 4.54 | 5.01 / 5.49 / 5.87 | 5.46 | 0% | 96% | 4% | 0% |
| Q1_editorial | middling (Action+Sports, Comedy+Superheroes, Action+Zombies) | 25 | 5.30 | 5.40 / 5.96 / 6.16 | 5.82 | 0% | 56% | 44% | 0% |
| Q2_bounded | middling (Action+Sports, Comedy+Superheroes, Action+Zombies) | 25 | 5.30 | 5.40 / 5.94 / 6.16 | 5.84 | 0% | 60% | 40% | 0% |
| Q3_mild | middling (Action+Sports, Comedy+Superheroes, Action+Zombies) | 25 | 5.30 | 5.40 / 5.94 / 6.16 | 5.84 | 0% | 60% | 40% | 0% |
| Q3_sev | middling (Action+Sports, Comedy+Superheroes, Action+Zombies) | 25 | 5.30 | 5.40 / 5.94 / 6.16 | 5.84 | 0% | 60% | 40% | 0% |
| Q3_strong | middling (Action+Sports, Comedy+Superheroes, Action+Zombies) | 25 | 5.30 | 5.40 / 5.94 / 6.16 | 5.84 | 0% | 60% | 40% | 0% |
| Q4_cult | middling (Action+Sports, Comedy+Superheroes, Action+Zombies) | 25 | 5.30 | 5.40 / 5.94 / 6.16 | 5.84 | 0% | 60% | 40% | 0% |
| Q4_info_G4levers | middling (Action+Sports, Comedy+Superheroes, Action+Zombies) | 25 | 5.34 | 5.40 / 5.96 / 6.17 | 5.85 | 0% | 60% | 40% | 0% |
| old | poor (Horror+Sports, Horror+Spies, Horror+Superheroes) | 25 | 4.87 | 5.13 / 5.71 / 6.20 | 5.69 | 0% | 76% | 24% | 0% |
| Q1_editorial | poor (Horror+Sports, Horror+Spies, Horror+Superheroes) | 25 | 4.20 | 4.23 / 5.09 / 5.32 | 4.87 | 0% | 100% | 0% | 0% |
| Q2_bounded | poor (Horror+Sports, Horror+Spies, Horror+Superheroes) | 25 | 4.20 | 4.23 / 4.55 / 5.38 | 4.80 | 0% | 100% | 0% | 0% |
| Q3_mild | poor (Horror+Sports, Horror+Spies, Horror+Superheroes) | 25 | 3.50 | 3.54 / 3.80 / 5.08 | 4.29 | 56% | 44% | 0% | 0% |
| Q3_sev | poor (Horror+Sports, Horror+Spies, Horror+Superheroes) | 25 | 2.96 | 2.99 / 3.22 / 4.80 | 3.88 | 56% | 44% | 0% | 0% |
| Q3_strong | poor (Horror+Sports, Horror+Spies, Horror+Superheroes) | 25 | 2.42 | 2.45 / 2.63 / 4.50 | 3.46 | 56% | 44% | 0% | 0% |
| Q4_cult | poor (Horror+Sports, Horror+Spies, Horror+Superheroes) | 25 | 2.96 | 2.99 / 3.22 / 4.80 | 3.88 | 56% | 44% | 0% | 0% |
| Q4_info_G4levers | poor (Horror+Sports, Horror+Spies, Horror+Superheroes) | 25 | 2.96 | 3.00 / 3.24 / 4.80 | 3.87 | 56% | 44% | 0% | 0% |

## 2. Policies (all finished movies)

| Variant | Policy | N | min | p10 / p50 / p90 | mean | 0–<4 | 4–<6 | 6–<8 | 8–10 | first-5 mean | Audience mean | Critic mean | |A−C| ≥ 2 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| old | low-budget-random-combo | 71 | 4.78 | 5.26 / 6.02 / 6.65 | 6.01 | 0% | 49% | 51% | 0% | 5.69 | 5.93 | 6.08 | 3% |
| Q1_editorial | low-budget-random-combo | 71 | 4.39 | 5.13 / 6.27 / 7.02 | 6.11 | 0% | 42% | 58% | 0% | 5.86 | 6.03 | 6.18 | 0% |
| Q2_bounded | low-budget-random-combo | 71 | 4.39 | 4.99 / 6.27 / 7.02 | 6.09 | 0% | 38% | 62% | 0% | 5.86 | 6.01 | 6.17 | 0% |
| Q3_mild | low-budget-random-combo | 71 | 3.66 | 4.28 / 6.28 / 7.02 | 5.98 | 7% | 31% | 62% | 0% | 5.76 | 5.90 | 6.05 | 0% |
| Q3_sev | low-budget-random-combo | 71 | 3.10 | 3.62 / 6.27 / 7.09 | 5.84 | 11% | 28% | 61% | 0% | 5.67 | 5.77 | 5.90 | 0% |
| Q3_strong | low-budget-random-combo | 71 | 2.54 | 2.96 / 6.27 / 7.09 | 5.74 | 11% | 27% | 62% | 0% | 5.57 | 5.67 | 5.80 | 0% |
| Q4_cult | low-budget-random-combo | 71 | 3.10 | 4.31 / 6.27 / 7.09 | 5.86 | 10% | 30% | 61% | 0% | 5.67 | 5.81 | 5.90 | 1% |
| Q4_info_G4levers | low-budget-random-combo | 71 | 3.04 | 3.44 / 6.18 / 6.98 | 5.84 | 13% | 30% | 58% | 0% | 5.55 | 5.78 | 5.90 | 1% |
| old | poor-fit-chooser | 74 | 3.80 | 4.02 / 5.25 / 6.18 | 5.21 | 8% | 73% | 19% | 0% | 5.72 | 5.13 | 5.28 | 1% |
| Q1_editorial | poor-fit-chooser | 74 | 3.54 | 3.79 / 4.34 / 6.10 | 4.66 | 18% | 70% | 12% | 0% | 5.40 | 4.61 | 4.70 | 0% |
| Q2_bounded | poor-fit-chooser | 74 | 3.54 | 3.65 / 4.25 / 5.99 | 4.51 | 41% | 49% | 11% | 0% | 5.31 | 4.46 | 4.56 | 0% |
| Q3_mild | poor-fit-chooser | 74 | 2.95 | 3.04 / 3.75 / 5.99 | 4.11 | 57% | 32% | 11% | 0% | 5.02 | 4.05 | 4.15 | 0% |
| Q3_sev | poor-fit-chooser | 74 | 2.50 | 2.58 / 3.22 / 5.99 | 3.78 | 68% | 22% | 11% | 0% | 4.79 | 3.73 | 3.82 | 0% |
| Q3_strong | poor-fit-chooser | 75 | 2.05 | 2.11 / 2.59 / 5.97 | 3.43 | 72% | 17% | 11% | 0% | 4.56 | 3.38 | 3.47 | 0% |
| Q4_cult | poor-fit-chooser | 74 | 2.50 | 2.58 / 3.22 / 5.99 | 3.78 | 68% | 22% | 11% | 0% | 4.79 | 3.73 | 3.82 | 0% |
| Q4_info_G4levers | poor-fit-chooser | 62 | 2.51 | 2.61 / 3.77 / 6.10 | 3.99 | 61% | 26% | 13% | 0% | 4.80 | 3.94 | 4.03 | 0% |
| old | balanced | 69 | 5.34 | 6.70 / 8.22 / 9.00 | 7.97 | 0% | 4% | 38% | 58% | 7.05 | 7.82 | 8.11 | 17% |
| Q1_editorial | balanced | 69 | 4.51 | 7.24 / 8.34 / 9.50 | 8.28 | 0% | 4% | 26% | 70% | 7.41 | 8.30 | 8.26 | 0% |
| Q2_bounded | balanced | 70 | 4.51 | 7.18 / 8.32 / 9.65 | 8.28 | 0% | 4% | 30% | 66% | 7.32 | 8.28 | 8.27 | 0% |
| Q3_mild | balanced | 70 | 3.76 | 6.96 / 8.34 / 9.65 | 8.25 | 3% | 3% | 29% | 66% | 7.19 | 8.26 | 8.24 | 0% |
| Q3_sev | balanced | 70 | 3.18 | 6.41 / 8.38 / 9.52 | 8.12 | 4% | 3% | 23% | 70% | 6.95 | 8.12 | 8.12 | 0% |
| Q3_strong | balanced | 70 | 2.60 | 6.41 / 8.32 / 9.66 | 8.06 | 6% | 3% | 24% | 67% | 6.75 | 8.05 | 8.06 | 0% |
| Q4_cult | balanced | 70 | 3.18 | 6.41 / 8.38 / 9.52 | 8.12 | 4% | 3% | 23% | 70% | 6.95 | 8.12 | 8.12 | 0% |
| Q4_info_G4levers | balanced | 64 | 3.18 | 6.21 / 8.16 / 9.13 | 7.81 | 3% | 6% | 33% | 58% | 6.80 | 7.87 | 7.75 | 0% |
| old | quality-first | 62 | 5.76 | 6.90 / 8.04 / 8.93 | 7.99 | 0% | 2% | 45% | 53% | 7.36 | 8.04 | 7.93 | 11% |
| Q1_editorial | quality-first | 64 | 5.76 | 6.97 / 8.09 / 9.06 | 8.04 | 0% | 5% | 44% | 52% | 7.38 | 8.10 | 7.98 | 0% |
| Q2_bounded | quality-first | 64 | 5.14 | 6.87 / 8.02 / 9.06 | 8.00 | 0% | 3% | 44% | 53% | 7.51 | 8.07 | 7.94 | 0% |
| Q3_mild | quality-first | 65 | 4.28 | 7.07 / 8.05 / 9.21 | 8.05 | 0% | 5% | 38% | 57% | 7.43 | 8.12 | 7.99 | 0% |
| Q3_sev | quality-first | 65 | 3.62 | 7.05 / 8.04 / 8.97 | 7.97 | 2% | 3% | 40% | 55% | 7.38 | 8.03 | 7.92 | 0% |
| Q3_strong | quality-first | 65 | 2.97 | 7.05 / 8.03 / 8.96 | 7.93 | 3% | 2% | 42% | 54% | 7.34 | 7.99 | 7.88 | 0% |
| Q4_cult | quality-first | 65 | 3.62 | 7.05 / 8.04 / 8.97 | 8.00 | 2% | 2% | 42% | 55% | 7.38 | 8.09 | 7.92 | 2% |
| Q4_info_G4levers | quality-first | 60 | 3.62 | 6.92 / 8.30 / 9.35 | 8.03 | 2% | 3% | 38% | 57% | 7.13 | 8.09 | 7.97 | 0% |

## 3. Experienced studio: isolating crew, Star family fit, studio exact-genre XP and pairing

Mean over seeds; each cell is the SAME veteran studio state making one movie.

| Variant | Pairings | Best-fit Star | Cheapest Star | Best-fit Star, genre XP wiped | Rookie (section 1) |
|---|---|---|---|---|---|
| old | natural | 8.25 (min 6.18, n 15) | 8.23 (min 6.17, n 15) | 8.18 (min 6.12, n 15) | 5.71 (min 4.83, n 25) |
| Q1_editorial | natural | 9.11 (min 7.46, n 15) | 9.10 (min 7.44, n 15) | 9.07 (min 7.40, n 15) | 6.45 (min 6.04, n 25) |
| Q2_bounded | natural | 8.91 (min 7.46, n 15) | 8.89 (min 7.44, n 15) | 8.85 (min 7.40, n 15) | 6.33 (min 5.80, n 25) |
| Q3_mild | natural | 8.80 (min 7.46, n 15) | 8.78 (min 7.44, n 15) | 8.73 (min 7.40, n 15) | 6.33 (min 5.80, n 25) |
| Q3_sev | natural | 8.75 (min 7.37, n 15) | 8.73 (min 7.35, n 15) | 8.69 (min 7.27, n 15) | 6.33 (min 5.80, n 25) |
| Q3_strong | natural | 8.81 (min 7.46, n 15) | 8.80 (min 7.44, n 15) | 8.76 (min 7.40, n 15) | 6.33 (min 5.80, n 25) |
| Q4_cult | natural | 8.75 (min 7.37, n 15) | 8.73 (min 7.35, n 15) | 8.69 (min 7.27, n 15) | 6.33 (min 5.80, n 25) |
| Q4_info_G4levers | natural | 9.25 (min 7.69, n 15) | 9.24 (min 7.67, n 15) | 9.21 (min 7.61, n 15) | 6.33 (min 5.80, n 25) |
| old | middling | 8.54 (min 7.28, n 15) | 8.52 (min 7.26, n 15) | 8.47 (min 7.22, n 15) | 5.46 (min 4.54, n 25) |
| Q1_editorial | middling | 8.99 (min 7.27, n 15) | 8.97 (min 7.25, n 15) | 8.90 (min 7.19, n 15) | 5.82 (min 5.30, n 25) |
| Q2_bounded | middling | 8.95 (min 6.78, n 15) | 8.94 (min 6.77, n 15) | 8.87 (min 6.71, n 15) | 5.84 (min 5.30, n 25) |
| Q3_mild | middling | 9.07 (min 6.78, n 15) | 9.06 (min 6.77, n 15) | 8.99 (min 6.71, n 15) | 5.84 (min 5.30, n 25) |
| Q3_sev | middling | 8.98 (min 6.78, n 15) | 8.96 (min 6.77, n 15) | 8.89 (min 6.71, n 15) | 5.84 (min 5.30, n 25) |
| Q3_strong | middling | 8.95 (min 6.78, n 15) | 8.93 (min 6.77, n 15) | 8.86 (min 6.71, n 15) | 5.84 (min 5.30, n 25) |
| Q4_cult | middling | 8.98 (min 6.78, n 15) | 8.96 (min 6.77, n 15) | 8.89 (min 6.71, n 15) | 5.84 (min 5.30, n 25) |
| Q4_info_G4levers | middling | 8.57 (min 6.87, n 15) | 8.55 (min 6.86, n 15) | 8.48 (min 6.80, n 15) | 5.85 (min 5.34, n 25) |
| old | poor | 8.29 (min 7.25, n 15) | 8.28 (min 7.24, n 15) | 8.22 (min 7.19, n 15) | 5.69 (min 4.87, n 25) |
| Q1_editorial | poor | 7.52 (min 6.41, n 15) | 7.50 (min 6.40, n 15) | 7.46 (min 6.36, n 15) | 4.87 (min 4.20, n 25) |
| Q2_bounded | poor | 7.43 (min 6.42, n 15) | 7.42 (min 6.40, n 15) | 7.38 (min 6.36, n 15) | 4.80 (min 4.20, n 25) |
| Q3_mild | poor | 6.74 (min 5.61, n 15) | 6.72 (min 5.60, n 15) | 6.69 (min 5.57, n 15) | 4.29 (min 3.50, n 25) |
| Q3_sev | poor | 6.15 (min 4.50, n 15) | 6.13 (min 4.49, n 15) | 6.11 (min 4.47, n 15) | 3.88 (min 2.96, n 25) |
| Q3_strong | poor | 5.53 (min 3.68, n 15) | 5.52 (min 3.67, n 15) | 5.50 (min 3.66, n 15) | 3.46 (min 2.42, n 25) |
| Q4_cult | poor | 6.15 (min 4.50, n 15) | 6.13 (min 4.49, n 15) | 6.11 (min 4.47, n 15) | 3.88 (min 2.96, n 25) |
| Q4_info_G4levers | poor | 6.08 (min 4.71, n 15) | 6.06 (min 4.70, n 15) | 6.05 (min 4.69, n 15) | 3.87 (min 2.96, n 25) |

## 4. Money by ACTUAL rating bin (movies; rookies + policies; finished runs)

| Variant | Bin | N | Studio loses all-in | Median all-in | Median studio direct cost | Distributed: partner loses | Median partner ROI (share ÷ its ad spend) |
|---|---|---|---|---|---|---|---|
| old | 0–<4 | 6 *small* | 0% | $46K | $62K | 0% | 1.88 |
| old | 4–<6 | 157 | 0% | $98K | $62K | 0% | 2.58 |
| old | 6–<8 | 115 | 0% | $171K | $64K | 0% | 2.84 |
| old | 8–10 | 73 | 0% | $231K | $93K | 0% | 2.48 |
| Q1_editorial | 0–<4 | 13 | 0% | $66K | $62K | 0% | 1.93 |
| Q1_editorial | 4–<6 | 127 | 0% | $88K | $62K | 0% | 2.50 |
| Q1_editorial | 6–<8 | 132 | 0% | $168K | $63K | 0% | 2.92 |
| Q1_editorial | 8–10 | 81 | 0% | $236K | $93K | 0% | 2.45 |
| Q2_bounded | 0–<4 | 30 | 0% | $57K | $62K | 0% | 1.95 |
| Q2_bounded | 4–<6 | 111 | 0% | $90K | $62K | 0% | 2.53 |
| Q2_bounded | 6–<8 | 133 | 0% | $170K | $63K | 0% | 2.90 |
| Q2_bounded | 8–10 | 80 | 0% | $240K | $93K | 0% | 2.43 |
| Q3_mild | 0–<4 | 63 | 2% | $47K | $62K | 0% | 2.05 |
| Q3_mild | 4–<6 | 80 | 0% | $92K | $62K | 0% | 2.46 |
| Q3_mild | 6–<8 | 129 | 0% | $169K | $63K | 0% | 2.96 |
| Q3_mild | 8–10 | 83 | 0% | $241K | $93K | 0% | 2.32 |
| Q3_sev | 0–<4 | 76 | 1% | $44K | $62K | 0% | 1.87 |
| Q3_sev | 4–<6 | 69 | 0% | $87K | $62K | 0% | 2.55 |
| Q3_sev | 6–<8 | 125 | 0% | $168K | $63K | 0% | 2.98 |
| Q3_sev | 8–10 | 85 | 0% | $241K | $93K | 0% | 2.41 |
| Q3_strong | 0–<4 | 82 | 1% | $36K | $62K | 0% | 1.79 |
| Q3_strong | 4–<6 | 64 | 0% | $86K | $62K | 0% | 2.67 |
| Q3_strong | 6–<8 | 128 | 0% | $168K | $63K | 0% | 3.00 |
| Q3_strong | 8–10 | 82 | 0% | $239K | $94K | 0% | 2.41 |
| Q4_cult | 0–<4 | 75 | 1% | $43K | $62K | 0% | 1.87 |
| Q4_cult | 4–<6 | 69 | 0% | $89K | $62K | 0% | 2.55 |
| Q4_cult | 6–<8 | 126 | 0% | $168K | $63K | 0% | 2.99 |
| Q4_cult | 8–10 | 85 | 0% | $241K | $93K | 0% | 2.41 |
| Q4_info_G4levers | 0–<4 | 64 | 98% | −$19K | $62K | 5% | 1.26 |
| Q4_info_G4levers | 4–<6 | 72 | 10% | $29K | $62K | 3% | 1.68 |
| Q4_info_G4levers | 6–<8 | 125 | 0% | $94K | $63K | 0% | 2.22 |
| Q4_info_G4levers | 8–10 | 71 | 0% | $236K | $90K | 0% | 2.44 |

## 5. Cult appeal (audience-only exception)

| Variant | Eligible releases (poor audience grade, untried pairing, craft ≥ bar) | Events | lift / breakout | Mean audience change | Critic change | Events by policy |
|---|---|---|---|---|---|---|
| old | 0 | 0 | 0 / 0 | — | 0 by construction | — |
| Q1_editorial | 0 | 0 | 0 / 0 | — | 0 by construction | — |
| Q2_bounded | 0 | 0 | 0 / 0 | — | 0 by construction | — |
| Q3_mild | 0 | 0 | 0 / 0 | — | 0 by construction | — |
| Q3_sev | 0 | 0 | 0 / 0 | — | 0 by construction | — |
| Q3_strong | 0 | 0 | 0 / 0 | — | 0 by construction | — |
| Q4_cult | 33 | 2 | 2 / 0 | +3.40 | 0 by construction | low-budget-random-combo 1, quality-first 1 |
| Q4_info_G4levers | 34 | 2 | 2 / 0 | +2.48 | 0 by construction | low-budget-random-combo 1, balanced 1 |

## 6. Lowest-scoring releases (reproduce from the seed)

- **old**: Wild Edge Comedy+Zombies A 4.19/C 3.4 (policy:poor-fit-chooser, seed 4, release 15); Iron Pulse Comedy+Sports A 3.52/C 4.24 (policy:poor-fit-chooser, seed 2, release 12); Midnight Rising Comedy+Sports A 3.56/C 4.26 (policy:poor-fit-chooser, seed 2, release 11); Broken Echo Comedy+Sports A 3.56/C 4.3 (policy:poor-fit-chooser, seed 2, release 13)
- **Q1_editorial**: Red Rising Horror+Sports A 3.47/C 3.6 (policy:poor-fit-chooser, seed 1, release 9); Broken Pulse Horror+Sports A 3.52/C 3.64 (policy:poor-fit-chooser, seed 1, release 10); Lost Code Horror+Sports A 3.74/C 3.46 (policy:poor-fit-chooser, seed 1, release 15); Broken Run Horror+Sports A 3.59/C 3.71 (policy:poor-fit-chooser, seed 1, release 11)
- **Q2_bounded**: Red Rising Horror+Sports A 3.47/C 3.6 (policy:poor-fit-chooser, seed 1, release 9); Iron Pulse Horror+Spies A 3.52/C 3.61 (policy:poor-fit-chooser, seed 4, release 8); Broken Pulse Horror+Sports A 3.52/C 3.64 (policy:poor-fit-chooser, seed 1, release 10); Lost Code Horror+Sports A 3.74/C 3.46 (policy:poor-fit-chooser, seed 1, release 15)
- **Q3_mild**: Red Rising Horror+Sports A 2.9/C 3 (policy:poor-fit-chooser, seed 1, release 9); Iron Pulse Horror+Spies A 2.92/C 3.01 (policy:poor-fit-chooser, seed 4, release 8); Broken Pulse Horror+Sports A 2.94/C 3.03 (policy:poor-fit-chooser, seed 1, release 10); Silver Shadow Horror+Spies A 2.95/C 3.03 (policy:poor-fit-chooser, seed 4, release 9)
- **Q3_sev**: Red Rising Horror+Sports A 2.45/C 2.54 (policy:poor-fit-chooser, seed 1, release 9); Iron Pulse Horror+Spies A 2.47/C 2.54 (policy:poor-fit-chooser, seed 4, release 8); Broken Pulse Horror+Sports A 2.48/C 2.57 (policy:poor-fit-chooser, seed 1, release 10); Lost Code Horror+Sports A 2.64/C 2.44 (policy:poor-fit-chooser, seed 1, release 15)
- **Q3_strong**: Red Rising Horror+Sports A 2.01/C 2.08 (policy:poor-fit-chooser, seed 1, release 9); Iron Pulse Horror+Spies A 2.03/C 2.08 (policy:poor-fit-chooser, seed 4, release 8); Broken Pulse Horror+Sports A 2.03/C 2.1 (policy:poor-fit-chooser, seed 1, release 10); Silver Shadow Horror+Spies A 2.04/C 2.1 (policy:poor-fit-chooser, seed 4, release 9)
- **Q4_cult**: Red Rising Horror+Sports A 2.45/C 2.54 (policy:poor-fit-chooser, seed 1, release 9); Iron Pulse Horror+Spies A 2.47/C 2.54 (policy:poor-fit-chooser, seed 4, release 8); Broken Pulse Horror+Sports A 2.48/C 2.57 (policy:poor-fit-chooser, seed 1, release 10); Lost Code Horror+Sports A 2.64/C 2.44 (policy:poor-fit-chooser, seed 1, release 15)
- **Q4_info_G4levers**: Red Rising Horror+Sports A 2.48/C 2.55 (policy:poor-fit-chooser, seed 1, release 9); Iron Pulse Horror+Spies A 2.53/C 2.55 (policy:poor-fit-chooser, seed 4, release 8); Broken Pulse Horror+Sports A 2.52/C 2.57 (policy:poor-fit-chooser, seed 1, release 10); Lost Code Horror+Sports A 2.53/C 2.58 (policy:poor-fit-chooser, seed 5, release 10)
