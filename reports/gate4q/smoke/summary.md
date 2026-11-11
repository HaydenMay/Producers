# Gate 4Q quality diagnostic

Seeds 1–5; rookie scenarios = first 5 releases of the starting 2-staff studio on fixed pairings; policies = 5-year careers (finished movies); veterans = a balanced studio after 8 years making one extra movie (seeds 1–5). Economy = Gate 4 candidate (studio-funded, 80% bids). **Elapsed 4.5 s** (old 0.8s, Q1_editorial 0.5s, Q2_bounded 0.6s, Q3_mild 0.5s, Q3_sev 0.6s, Q3_strong 0.5s, Q4_cult 0.5s, Q4_info_G4levers 0.5s). Invariant violations in policy careers: **0**.

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
| Q1_editorial | natural (Horror+Zombies, Action+Superheroes, Comedy+Sports) | 25 | 5.85 | 6.01 / 6.24 / 6.34 | 6.19 | 0% | 12% | 88% | 0% |
| Q2_bounded | natural (Horror+Zombies, Action+Superheroes, Comedy+Sports) | 25 | 5.80 | 5.93 / 6.24 / 6.37 | 6.18 | 0% | 28% | 72% | 0% |
| Q3_mild | natural (Horror+Zombies, Action+Superheroes, Comedy+Sports) | 25 | 5.80 | 5.93 / 6.24 / 6.37 | 6.18 | 0% | 28% | 72% | 0% |
| Q3_sev | natural (Horror+Zombies, Action+Superheroes, Comedy+Sports) | 25 | 5.80 | 5.93 / 6.24 / 6.37 | 6.18 | 0% | 28% | 72% | 0% |
| Q3_strong | natural (Horror+Zombies, Action+Superheroes, Comedy+Sports) | 25 | 5.80 | 5.93 / 6.24 / 6.37 | 6.18 | 0% | 28% | 72% | 0% |
| Q4_cult | natural (Horror+Zombies, Action+Superheroes, Comedy+Sports) | 25 | 5.80 | 5.93 / 6.24 / 6.37 | 6.18 | 0% | 28% | 72% | 0% |
| Q4_info_G4levers | natural (Horror+Zombies, Action+Superheroes, Comedy+Sports) | 25 | 5.80 | 5.93 / 6.22 / 6.36 | 6.18 | 0% | 28% | 72% | 0% |
| old | middling (Action+Sports, Comedy+Superheroes, Action+Zombies) | 25 | 4.54 | 5.01 / 5.49 / 5.87 | 5.46 | 0% | 96% | 4% | 0% |
| Q1_editorial | middling (Action+Sports, Comedy+Superheroes, Action+Zombies) | 25 | 5.30 | 5.40 / 5.78 / 5.99 | 5.72 | 0% | 88% | 12% | 0% |
| Q2_bounded | middling (Action+Sports, Comedy+Superheroes, Action+Zombies) | 25 | 5.05 | 5.23 / 5.78 / 6.02 | 5.70 | 0% | 80% | 20% | 0% |
| Q3_mild | middling (Action+Sports, Comedy+Superheroes, Action+Zombies) | 25 | 4.92 | 5.09 / 5.78 / 6.02 | 5.68 | 0% | 80% | 20% | 0% |
| Q3_sev | middling (Action+Sports, Comedy+Superheroes, Action+Zombies) | 25 | 4.79 | 4.95 / 5.78 / 6.02 | 5.66 | 0% | 80% | 20% | 0% |
| Q3_strong | middling (Action+Sports, Comedy+Superheroes, Action+Zombies) | 25 | 4.66 | 4.82 / 5.78 / 6.02 | 5.64 | 0% | 80% | 20% | 0% |
| Q4_cult | middling (Action+Sports, Comedy+Superheroes, Action+Zombies) | 25 | 4.79 | 4.95 / 5.78 / 6.02 | 5.66 | 0% | 80% | 20% | 0% |
| Q4_info_G4levers | middling (Action+Sports, Comedy+Superheroes, Action+Zombies) | 25 | 4.81 | 4.96 / 5.70 / 6.02 | 5.66 | 0% | 80% | 20% | 0% |
| old | poor (Horror+Sports, Horror+Spies, Horror+Superheroes) | 25 | 4.87 | 5.13 / 5.71 / 6.20 | 5.69 | 0% | 76% | 24% | 0% |
| Q1_editorial | poor (Horror+Sports, Horror+Spies, Horror+Superheroes) | 25 | 4.20 | 4.23 / 4.75 / 5.26 | 4.73 | 0% | 100% | 0% | 0% |
| Q2_bounded | poor (Horror+Sports, Horror+Spies, Horror+Superheroes) | 25 | 4.20 | 4.23 / 4.85 / 5.28 | 4.78 | 0% | 100% | 0% | 0% |
| Q3_mild | poor (Horror+Sports, Horror+Spies, Horror+Superheroes) | 25 | 3.50 | 3.54 / 4.34 / 4.99 | 4.26 | 32% | 68% | 0% | 0% |
| Q3_sev | poor (Horror+Sports, Horror+Spies, Horror+Superheroes) | 25 | 2.96 | 2.99 / 3.90 / 4.70 | 3.83 | 68% | 32% | 0% | 0% |
| Q3_strong | poor (Horror+Sports, Horror+Spies, Horror+Superheroes) | 25 | 2.42 | 2.45 / 3.47 / 4.41 | 3.39 | 72% | 28% | 0% | 0% |
| Q4_cult | poor (Horror+Sports, Horror+Spies, Horror+Superheroes) | 25 | 2.96 | 2.99 / 3.90 / 4.70 | 3.83 | 68% | 32% | 0% | 0% |
| Q4_info_G4levers | poor (Horror+Sports, Horror+Spies, Horror+Superheroes) | 25 | 2.96 | 3.00 / 3.88 / 4.73 | 3.81 | 72% | 28% | 0% | 0% |

## 2. Policies (all finished movies)

| Variant | Policy | N | min | p10 / p50 / p90 | mean | 0–<4 | 4–<6 | 6–<8 | 8–10 | first-5 mean | Audience mean | Critic mean | |A−C| ≥ 2 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| old | low-budget-random-combo | 71 | 4.78 | 5.26 / 6.02 / 6.65 | 6.01 | 0% | 49% | 51% | 0% | 5.69 | 5.93 | 6.08 | 3% |
| Q1_editorial | low-budget-random-combo | 70 | 4.39 | 4.96 / 6.07 / 6.81 | 5.96 | 0% | 41% | 59% | 0% | 5.70 | 6.03 | 5.88 | 0% |
| Q2_bounded | low-budget-random-combo | 71 | 4.39 | 5.00 / 6.06 / 6.85 | 5.95 | 0% | 45% | 55% | 0% | 5.70 | 6.00 | 5.88 | 0% |
| Q3_mild | low-budget-random-combo | 71 | 3.58 | 4.47 / 6.04 / 6.89 | 5.76 | 3% | 45% | 52% | 0% | 5.34 | 5.89 | 5.62 | 1% |
| Q3_sev | low-budget-random-combo | 71 | 3.03 | 3.88 / 6.04 / 6.85 | 5.63 | 11% | 37% | 52% | 0% | 5.18 | 5.76 | 5.49 | 3% |
| Q3_strong | low-budget-random-combo | 70 | 2.48 | 3.45 / 6.01 / 6.77 | 5.42 | 21% | 27% | 51% | 0% | 5.02 | 5.62 | 5.22 | 3% |
| Q4_cult | low-budget-random-combo | 71 | 3.03 | 4.03 / 6.04 / 6.85 | 5.65 | 10% | 38% | 52% | 0% | 5.18 | 5.80 | 5.49 | 4% |
| Q4_info_G4levers | low-budget-random-combo | 69 | 3.04 | 4.30 / 6.11 / 6.74 | 5.86 | 9% | 30% | 61% | 0% | 5.54 | 6.00 | 5.71 | 4% |
| old | poor-fit-chooser | 74 | 3.80 | 4.02 / 5.25 / 6.18 | 5.21 | 8% | 73% | 19% | 0% | 5.72 | 5.13 | 5.28 | 1% |
| Q1_editorial | poor-fit-chooser | 74 | 3.54 | 3.74 / 4.08 / 5.98 | 4.47 | 32% | 58% | 9% | 0% | 5.18 | 4.61 | 4.33 | 0% |
| Q2_bounded | poor-fit-chooser | 74 | 3.54 | 3.75 / 4.25 / 5.93 | 4.51 | 30% | 61% | 9% | 0% | 5.18 | 4.59 | 4.43 | 0% |
| Q3_mild | poor-fit-chooser | 74 | 2.95 | 3.17 / 3.89 / 5.93 | 4.16 | 53% | 38% | 9% | 0% | 4.89 | 4.32 | 4.00 | 0% |
| Q3_sev | poor-fit-chooser | 74 | 2.50 | 2.68 / 3.58 / 5.93 | 3.86 | 70% | 20% | 9% | 0% | 4.66 | 4.07 | 3.65 | 0% |
| Q3_strong | poor-fit-chooser | 74 | 2.05 | 2.20 / 3.31 / 5.93 | 3.56 | 74% | 16% | 9% | 0% | 4.42 | 3.82 | 3.30 | 0% |
| Q4_cult | poor-fit-chooser | 74 | 2.50 | 2.68 / 3.58 / 5.93 | 3.86 | 70% | 20% | 9% | 0% | 4.66 | 4.07 | 3.65 | 0% |
| Q4_info_G4levers | poor-fit-chooser | 58 | 2.42 | 2.93 / 3.77 / 6.11 | 4.10 | 62% | 26% | 12% | 0% | 4.67 | 4.28 | 3.91 | 0% |
| old | balanced | 69 | 5.34 | 6.70 / 8.22 / 9.00 | 7.97 | 0% | 4% | 38% | 58% | 7.05 | 7.82 | 8.11 | 17% |
| Q1_editorial | balanced | 69 | 4.51 | 6.95 / 8.15 / 9.16 | 8.09 | 0% | 4% | 38% | 58% | 7.24 | 8.32 | 7.86 | 0% |
| Q2_bounded | balanced | 70 | 4.51 | 6.98 / 8.29 / 9.15 | 8.10 | 0% | 4% | 36% | 60% | 7.23 | 8.31 | 7.89 | 0% |
| Q3_mild | balanced | 70 | 3.76 | 6.47 / 8.20 / 9.18 | 8.00 | 3% | 3% | 37% | 57% | 7.11 | 8.25 | 7.76 | 1% |
| Q3_sev | balanced | 69 | 3.18 | 6.21 / 8.20 / 9.14 | 7.92 | 3% | 6% | 30% | 61% | 6.92 | 8.19 | 7.66 | 6% |
| Q3_strong | balanced | 70 | 2.60 | 5.82 / 8.09 / 9.14 | 7.81 | 4% | 7% | 34% | 54% | 6.76 | 8.12 | 7.49 | 11% |
| Q4_cult | balanced | 69 | 3.18 | 6.21 / 8.20 / 9.14 | 7.92 | 3% | 6% | 30% | 61% | 6.92 | 8.19 | 7.66 | 6% |
| Q4_info_G4levers | balanced | 67 | 3.18 | 5.99 / 8.06 / 8.96 | 7.75 | 3% | 7% | 39% | 51% | 7.03 | 8.01 | 7.49 | 3% |
| old | quality-first | 62 | 5.76 | 6.90 / 8.04 / 8.93 | 7.99 | 0% | 2% | 45% | 53% | 7.36 | 8.04 | 7.93 | 11% |
| Q1_editorial | quality-first | 63 | 5.53 | 6.77 / 8.18 / 9.07 | 8.02 | 0% | 5% | 40% | 56% | 7.35 | 8.33 | 7.71 | 0% |
| Q2_bounded | quality-first | 64 | 5.37 | 6.80 / 8.04 / 9.06 | 7.98 | 0% | 3% | 45% | 52% | 7.39 | 8.25 | 7.70 | 2% |
| Q3_mild | quality-first | 64 | 4.79 | 6.85 / 8.02 / 9.06 | 7.97 | 0% | 6% | 44% | 50% | 7.26 | 8.28 | 7.67 | 2% |
| Q3_sev | quality-first | 65 | 4.31 | 6.76 / 7.96 / 9.10 | 7.91 | 0% | 6% | 46% | 48% | 7.17 | 8.26 | 7.55 | 2% |
| Q3_strong | quality-first | 64 | 3.83 | 6.71 / 7.90 / 8.97 | 7.81 | 3% | 5% | 47% | 45% | 7.07 | 8.20 | 7.42 | 9% |
| Q4_cult | quality-first | 65 | 4.31 | 6.76 / 7.97 / 9.10 | 7.93 | 0% | 5% | 46% | 49% | 7.20 | 8.29 | 7.56 | 3% |
| Q4_info_G4levers | quality-first | 57 | 4.31 | 6.72 / 7.74 / 9.02 | 7.71 | 0% | 7% | 53% | 40% | 7.11 | 7.95 | 7.47 | 0% |

## 3. Experienced studio: isolating crew, Star family fit, studio exact-genre XP and pairing

Mean over seeds; each cell is the SAME veteran studio state making one movie.

| Variant | Pairings | Best-fit Star | Cheapest Star | Best-fit Star, genre XP wiped | Rookie (section 1) |
|---|---|---|---|---|---|
| old | natural | 8.25 (min 6.18, n 15) | 8.23 (min 6.17, n 15) | 8.18 (min 6.12, n 15) | 5.71 (min 4.83, n 25) |
| Q1_editorial | natural | 8.78 (min 7.07, n 15) | 8.77 (min 7.05, n 15) | 8.72 (min 6.99, n 15) | 6.19 (min 5.85, n 25) |
| Q2_bounded | natural | 8.95 (min 7.67, n 15) | 8.94 (min 7.66, n 15) | 8.88 (min 7.61, n 15) | 6.18 (min 5.80, n 25) |
| Q3_mild | natural | 8.87 (min 7.67, n 15) | 8.85 (min 7.66, n 15) | 8.80 (min 7.61, n 15) | 6.18 (min 5.80, n 25) |
| Q3_sev | natural | 8.53 (min 6.76, n 15) | 8.52 (min 6.75, n 15) | 8.47 (min 6.71, n 15) | 6.18 (min 5.80, n 25) |
| Q3_strong | natural | 8.86 (min 7.67, n 15) | 8.84 (min 7.66, n 15) | 8.79 (min 7.61, n 15) | 6.18 (min 5.80, n 25) |
| Q4_cult | natural | 8.53 (min 6.76, n 15) | 8.52 (min 6.75, n 15) | 8.47 (min 6.71, n 15) | 6.18 (min 5.80, n 25) |
| Q4_info_G4levers | natural | 8.99 (min 7.04, n 15) | 8.98 (min 7.03, n 15) | 8.93 (min 6.95, n 15) | 6.18 (min 5.80, n 25) |
| old | middling | 8.54 (min 7.28, n 15) | 8.52 (min 7.26, n 15) | 8.47 (min 7.22, n 15) | 5.46 (min 4.54, n 25) |
| Q1_editorial | middling | 8.66 (min 7.06, n 15) | 8.64 (min 7.05, n 15) | 8.58 (min 6.99, n 15) | 5.72 (min 5.30, n 25) |
| Q2_bounded | middling | 8.74 (min 7.51, n 15) | 8.72 (min 7.50, n 15) | 8.66 (min 7.45, n 15) | 5.70 (min 5.05, n 25) |
| Q3_mild | middling | 8.86 (min 7.51, n 15) | 8.84 (min 7.50, n 15) | 8.78 (min 7.45, n 15) | 5.68 (min 4.92, n 25) |
| Q3_sev | middling | 8.74 (min 7.51, n 15) | 8.72 (min 7.50, n 15) | 8.66 (min 7.45, n 15) | 5.66 (min 4.79, n 25) |
| Q3_strong | middling | 8.68 (min 7.51, n 15) | 8.66 (min 7.50, n 15) | 8.59 (min 7.45, n 15) | 5.64 (min 4.66, n 25) |
| Q4_cult | middling | 8.74 (min 7.51, n 15) | 8.72 (min 7.50, n 15) | 8.66 (min 7.45, n 15) | 5.66 (min 4.79, n 25) |
| Q4_info_G4levers | middling | 8.73 (min 7.78, n 15) | 8.72 (min 7.76, n 15) | 8.65 (min 7.69, n 15) | 5.66 (min 4.81, n 25) |
| old | poor | 8.29 (min 7.25, n 15) | 8.28 (min 7.24, n 15) | 8.22 (min 7.19, n 15) | 5.69 (min 4.87, n 25) |
| Q1_editorial | poor | 7.26 (min 6.42, n 15) | 7.24 (min 6.40, n 15) | 7.21 (min 6.36, n 15) | 4.73 (min 4.20, n 25) |
| Q2_bounded | poor | 7.35 (min 6.42, n 15) | 7.33 (min 6.40, n 15) | 7.29 (min 6.36, n 15) | 4.78 (min 4.20, n 25) |
| Q3_mild | poor | 6.59 (min 5.61, n 15) | 6.58 (min 5.60, n 15) | 6.55 (min 5.57, n 15) | 4.26 (min 3.50, n 25) |
| Q3_sev | poor | 5.95 (min 4.50, n 15) | 5.94 (min 4.49, n 15) | 5.91 (min 4.47, n 15) | 3.83 (min 2.96, n 25) |
| Q3_strong | poor | 5.31 (min 3.68, n 15) | 5.30 (min 3.67, n 15) | 5.27 (min 3.66, n 15) | 3.39 (min 2.42, n 25) |
| Q4_cult | poor | 5.95 (min 4.50, n 15) | 5.94 (min 4.49, n 15) | 5.91 (min 4.47, n 15) | 3.83 (min 2.96, n 25) |
| Q4_info_G4levers | poor | 5.94 (min 4.49, n 15) | 5.93 (min 4.47, n 15) | 5.90 (min 4.46, n 15) | 3.81 (min 2.96, n 25) |

## 4. Money by ACTUAL rating bin (movies; rookies + policies; finished runs)

| Variant | Bin | N | Studio loses all-in | Median all-in | Median studio direct cost | Distributed: partner loses | Median partner ROI (share ÷ its ad spend) |
|---|---|---|---|---|---|---|---|
| old | 0–<4 | 6 *small* | 0% | $46K | $62K | 0% | 1.88 |
| old | 4–<6 | 157 | 0% | $98K | $62K | 0% | 2.58 |
| old | 6–<8 | 115 | 0% | $171K | $64K | 0% | 2.84 |
| old | 8–10 | 73 | 0% | $231K | $93K | 0% | 2.48 |
| Q1_editorial | 0–<4 | 24 | 0% | $58K | $62K | 0% | 1.92 |
| Q1_editorial | 4–<6 | 128 | 0% | $91K | $62K | 0% | 2.56 |
| Q1_editorial | 6–<8 | 124 | 0% | $180K | $63K | 0% | 3.00 |
| Q1_editorial | 8–10 | 75 | 0% | $234K | $94K | 0% | 2.39 |
| Q2_bounded | 0–<4 | 22 | 0% | $58K | $62K | 0% | 1.95 |
| Q2_bounded | 4–<6 | 134 | 1% | $91K | $62K | 0% | 2.57 |
| Q2_bounded | 6–<8 | 123 | 0% | $179K | $63K | 0% | 2.92 |
| Q2_bounded | 8–10 | 75 | 0% | $241K | $91K | 0% | 2.48 |
| Q3_mild | 0–<4 | 51 | 2% | $52K | $62K | 0% | 1.91 |
| Q3_mild | 4–<6 | 110 | 0% | $84K | $62K | 0% | 2.46 |
| Q3_mild | 6–<8 | 121 | 0% | $186K | $63K | 0% | 3.01 |
| Q3_mild | 8–10 | 72 | 0% | $236K | $92K | 0% | 2.46 |
| Q3_sev | 0–<4 | 79 | 1% | $49K | $62K | 0% | 1.93 |
| Q3_sev | 4–<6 | 84 | 0% | $86K | $62K | 0% | 2.50 |
| Q3_sev | 6–<8 | 118 | 0% | $182K | $63K | 0% | 2.93 |
| Q3_sev | 8–10 | 73 | 0% | $232K | $93K | 0% | 2.54 |
| Q3_strong | 0–<4 | 93 | 1% | $47K | $62K | 0% | 1.84 |
| Q3_strong | 4–<6 | 73 | 0% | $83K | $62K | 0% | 2.64 |
| Q3_strong | 6–<8 | 120 | 0% | $185K | $63K | 0% | 3.01 |
| Q3_strong | 8–10 | 67 | 0% | $236K | $93K | 0% | 2.53 |
| Q4_cult | 0–<4 | 78 | 1% | $49K | $62K | 0% | 1.94 |
| Q4_cult | 4–<6 | 84 | 0% | $86K | $62K | 0% | 2.50 |
| Q4_cult | 6–<8 | 118 | 0% | $182K | $63K | 0% | 2.93 |
| Q4_cult | 8–10 | 74 | 0% | $236K | $94K | 0% | 2.54 |
| Q4_info_G4levers | 0–<4 | 62 | 95% | −$21K | $62K | 3% | 1.28 |
| Q4_info_G4levers | 4–<6 | 79 | 18% | $17K | $62K | 3% | 1.58 |
| Q4_info_G4levers | 6–<8 | 128 | 0% | $96K | $63K | 0% | 2.24 |
| Q4_info_G4levers | 8–10 | 57 | 0% | $240K | $92K | 0% | 2.44 |

## 5. Cult appeal (audience-only exception)

| Variant | Eligible releases (poor audience grade, untried pairing, craft ≥ bar) | Events | lift / breakout | Mean audience change | Critic change | Events by policy |
|---|---|---|---|---|---|---|
| old | 0 | 0 | 0 / 0 | — | 0 by construction | — |
| Q1_editorial | 0 | 0 | 0 / 0 | — | 0 by construction | — |
| Q2_bounded | 0 | 0 | 0 / 0 | — | 0 by construction | — |
| Q3_mild | 0 | 0 | 0 / 0 | — | 0 by construction | — |
| Q3_sev | 0 | 0 | 0 / 0 | — | 0 by construction | — |
| Q3_strong | 0 | 0 | 0 / 0 | — | 0 by construction | — |
| Q4_cult | 30 | 2 | 2 / 0 | +2.42 | 0 by construction | low-budget-random-combo 1, quality-first 1 |
| Q4_info_G4levers | 30 | 2 | 2 / 0 | +2.43 | 0 by construction | low-budget-random-combo 1, balanced 1 |

## 6. Lowest-scoring releases (reproduce from the seed)

- **old**: Wild Edge Comedy+Zombies A 4.19/C 3.4 (policy:poor-fit-chooser, seed 4, release 15); Iron Pulse Comedy+Sports A 3.52/C 4.24 (policy:poor-fit-chooser, seed 2, release 12); Midnight Rising Comedy+Sports A 3.56/C 4.26 (policy:poor-fit-chooser, seed 2, release 11); Broken Echo Comedy+Sports A 3.56/C 4.3 (policy:poor-fit-chooser, seed 2, release 13)
- **Q1_editorial**: Red Rising Horror+Sports A 3.47/C 3.6 (policy:poor-fit-chooser, seed 1, release 9); Broken Pulse Horror+Sports A 3.52/C 3.64 (policy:poor-fit-chooser, seed 1, release 10); Lost Code Horror+Sports A 3.74/C 3.46 (policy:poor-fit-chooser, seed 1, release 15); Dead Legacy Horror+Spies A 4/C 3.22 (policy:poor-fit-chooser, seed 5, release 8)
- **Q2_bounded**: Red Rising Horror+Sports A 3.47/C 3.6 (policy:poor-fit-chooser, seed 1, release 9); Broken Pulse Horror+Sports A 3.52/C 3.64 (policy:poor-fit-chooser, seed 1, release 10); Lost Code Horror+Sports A 3.74/C 3.46 (policy:poor-fit-chooser, seed 1, release 15); Dead Legacy Horror+Spies A 4.02/C 3.23 (policy:poor-fit-chooser, seed 5, release 8)
- **Q3_mild**: Red Rising Horror+Sports A 2.9/C 3 (policy:poor-fit-chooser, seed 1, release 9); Broken Pulse Horror+Sports A 2.94/C 3.03 (policy:poor-fit-chooser, seed 1, release 10); Lost Code Horror+Sports A 3.11/C 2.88 (policy:poor-fit-chooser, seed 1, release 15); Broken Run Horror+Sports A 3/C 3.09 (policy:poor-fit-chooser, seed 1, release 11)
- **Q3_sev**: Red Rising Horror+Sports A 2.45/C 2.54 (policy:poor-fit-chooser, seed 1, release 9); Broken Pulse Horror+Sports A 2.48/C 2.57 (policy:poor-fit-chooser, seed 1, release 10); Lost Code Horror+Sports A 2.64/C 2.44 (policy:poor-fit-chooser, seed 1, release 15); Broken Run Horror+Sports A 2.53/C 2.62 (policy:poor-fit-chooser, seed 1, release 11)
- **Q3_strong**: Red Rising Horror+Sports A 2.01/C 2.08 (policy:poor-fit-chooser, seed 1, release 9); Broken Pulse Horror+Sports A 2.03/C 2.1 (policy:poor-fit-chooser, seed 1, release 10); Lost Code Horror+Sports A 2.16/C 2 (policy:poor-fit-chooser, seed 1, release 15); Broken Run Horror+Sports A 2.07/C 2.14 (policy:poor-fit-chooser, seed 1, release 11)
- **Q4_cult**: Red Rising Horror+Sports A 2.45/C 2.54 (policy:poor-fit-chooser, seed 1, release 9); Broken Pulse Horror+Sports A 2.48/C 2.57 (policy:poor-fit-chooser, seed 1, release 10); Lost Code Horror+Sports A 2.64/C 2.44 (policy:poor-fit-chooser, seed 1, release 15); Broken Run Horror+Sports A 2.53/C 2.62 (policy:poor-fit-chooser, seed 1, release 11)
- **Q4_info_G4levers**: Broken Pulse Horror+Sports A 2.54/C 2.31 (policy:poor-fit-chooser, seed 1, release 10); Red Rising Horror+Sports A 2.51/C 2.54 (policy:poor-fit-chooser, seed 1, release 9); Broken Pulse Horror+Sports A 2.64/C 2.69 (policy:poor-fit-chooser, seed 1, release 8); Last Frequency Horror+Sports A 2.77/C 2.83 (policy:poor-fit-chooser, seed 1, release 7)
