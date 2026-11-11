# Gate 4Q quality diagnostic

Seeds 1–16; rookie scenarios = first 5 releases of the starting 2-staff studio on fixed pairings; policies = 10-year careers (finished movies); veterans = a balanced studio after 8 years making one extra movie (seeds 1–8). Economy = Gate 4 candidate (studio-funded, 80% bids). **Elapsed 13.3 s** (old 2.0s, Q1_editorial 1.6s, Q2_bounded 1.6s, Q3_mild 1.7s, Q3_sev 1.7s, Q3_strong 1.6s, Q4_cult 1.6s, Q4_info_G4levers 1.5s). Invariant violations in policy careers: **0**.

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
| old | natural (Horror+Zombies, Action+Superheroes, Comedy+Sports) | 80 | 4.57 | 5.01 / 5.76 / 6.11 | 5.65 | 0% | 75% | 25% | 0% |
| Q1_editorial | natural (Horror+Zombies, Action+Superheroes, Comedy+Sports) | 80 | 5.82 | 5.98 / 6.22 / 6.37 | 6.21 | 0% | 13% | 88% | 0% |
| Q2_bounded | natural (Horror+Zombies, Action+Superheroes, Comedy+Sports) | 80 | 5.74 | 5.93 / 6.24 / 6.45 | 6.21 | 0% | 21% | 79% | 0% |
| Q3_mild | natural (Horror+Zombies, Action+Superheroes, Comedy+Sports) | 80 | 5.74 | 5.93 / 6.24 / 6.45 | 6.21 | 0% | 21% | 79% | 0% |
| Q3_sev | natural (Horror+Zombies, Action+Superheroes, Comedy+Sports) | 80 | 5.74 | 5.93 / 6.24 / 6.45 | 6.21 | 0% | 21% | 79% | 0% |
| Q3_strong | natural (Horror+Zombies, Action+Superheroes, Comedy+Sports) | 80 | 5.74 | 5.93 / 6.24 / 6.45 | 6.21 | 0% | 21% | 79% | 0% |
| Q4_cult | natural (Horror+Zombies, Action+Superheroes, Comedy+Sports) | 80 | 5.74 | 5.93 / 6.24 / 6.45 | 6.21 | 0% | 21% | 79% | 0% |
| Q4_info_G4levers | natural (Horror+Zombies, Action+Superheroes, Comedy+Sports) | 80 | 5.74 | 5.93 / 6.24 / 6.45 | 6.21 | 0% | 20% | 80% | 0% |
| old | middling (Action+Sports, Comedy+Superheroes, Action+Zombies) | 80 | 4.34 | 4.98 / 5.62 / 6.03 | 5.57 | 0% | 88% | 13% | 0% |
| Q1_editorial | middling (Action+Sports, Comedy+Superheroes, Action+Zombies) | 80 | 5.30 | 5.43 / 5.77 / 6.02 | 5.75 | 0% | 88% | 13% | 0% |
| Q2_bounded | middling (Action+Sports, Comedy+Superheroes, Action+Zombies) | 80 | 5.05 | 5.35 / 5.72 / 6.06 | 5.72 | 0% | 80% | 20% | 0% |
| Q3_mild | middling (Action+Sports, Comedy+Superheroes, Action+Zombies) | 80 | 4.92 | 5.21 / 5.71 / 6.06 | 5.69 | 0% | 81% | 19% | 0% |
| Q3_sev | middling (Action+Sports, Comedy+Superheroes, Action+Zombies) | 80 | 4.79 | 5.06 / 5.71 / 6.06 | 5.66 | 0% | 81% | 19% | 0% |
| Q3_strong | middling (Action+Sports, Comedy+Superheroes, Action+Zombies) | 80 | 4.66 | 4.93 / 5.70 / 6.06 | 5.64 | 0% | 81% | 19% | 0% |
| Q4_cult | middling (Action+Sports, Comedy+Superheroes, Action+Zombies) | 80 | 4.79 | 5.06 / 5.71 / 6.06 | 5.66 | 0% | 81% | 19% | 0% |
| Q4_info_G4levers | middling (Action+Sports, Comedy+Superheroes, Action+Zombies) | 80 | 4.81 | 5.10 / 5.70 / 6.06 | 5.67 | 0% | 80% | 20% | 0% |
| old | poor (Horror+Sports, Horror+Spies, Horror+Superheroes) | 80 | 4.81 | 5.09 / 5.62 / 6.25 | 5.64 | 0% | 79% | 21% | 0% |
| Q1_editorial | poor (Horror+Sports, Horror+Spies, Horror+Superheroes) | 80 | 4.18 | 4.23 / 4.75 / 5.26 | 4.72 | 0% | 100% | 0% | 0% |
| Q2_bounded | poor (Horror+Sports, Horror+Spies, Horror+Superheroes) | 80 | 4.18 | 4.23 / 4.78 / 5.29 | 4.75 | 0% | 100% | 0% | 0% |
| Q3_mild | poor (Horror+Sports, Horror+Spies, Horror+Superheroes) | 80 | 3.49 | 3.53 / 4.29 / 4.97 | 4.22 | 36% | 64% | 0% | 0% |
| Q3_sev | poor (Horror+Sports, Horror+Spies, Horror+Superheroes) | 80 | 2.95 | 2.98 / 3.85 / 4.70 | 3.78 | 73% | 28% | 0% | 0% |
| Q3_strong | poor (Horror+Sports, Horror+Spies, Horror+Superheroes) | 80 | 2.41 | 2.44 / 3.42 / 4.41 | 3.34 | 75% | 25% | 0% | 0% |
| Q4_cult | poor (Horror+Sports, Horror+Spies, Horror+Superheroes) | 80 | 2.95 | 2.98 / 3.85 / 4.70 | 3.78 | 73% | 28% | 0% | 0% |
| Q4_info_G4levers | poor (Horror+Sports, Horror+Spies, Horror+Superheroes) | 80 | 2.93 | 2.99 / 3.81 / 4.71 | 3.78 | 73% | 28% | 0% | 0% |

## 2. Policies (all finished movies)

| Variant | Policy | N | min | p10 / p50 / p90 | mean | 0–<4 | 4–<6 | 6–<8 | 8–10 | first-5 mean | Audience mean | Critic mean | |A−C| ≥ 2 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| old | low-budget-random-combo | 496 | 4.55 | 5.40 / 6.26 / 7.07 | 6.24 | 0% | 36% | 64% | 0% | 5.62 | 6.18 | 6.29 | 4% |
| Q1_editorial | low-budget-random-combo | 496 | 4.17 | 5.25 / 6.48 / 7.26 | 6.37 | 0% | 24% | 76% | 0% | 5.80 | 6.46 | 6.28 | 0% |
| Q2_bounded | low-budget-random-combo | 496 | 4.17 | 5.14 / 6.40 / 7.24 | 6.34 | 0% | 28% | 72% | 0% | 5.76 | 6.42 | 6.26 | 0% |
| Q3_mild | low-budget-random-combo | 496 | 3.58 | 4.51 / 6.40 / 7.24 | 6.19 | 3% | 28% | 68% | 0% | 5.57 | 6.31 | 6.06 | 1% |
| Q3_sev | low-budget-random-combo | 496 | 3.03 | 4.20 / 6.42 / 7.30 | 6.14 | 8% | 24% | 68% | 0% | 5.47 | 6.28 | 6.00 | 1% |
| Q3_strong | low-budget-random-combo | 496 | 2.48 | 3.81 / 6.41 / 7.27 | 6.05 | 11% | 21% | 67% | 0% | 5.39 | 6.21 | 5.88 | 3% |
| Q4_cult | low-budget-random-combo | 496 | 3.03 | 4.38 / 6.40 / 7.31 | 6.14 | 8% | 25% | 67% | 0% | 5.47 | 6.28 | 5.99 | 2% |
| Q4_info_G4levers | low-budget-random-combo | 486 | 2.74 | 4.61 / 6.38 / 7.32 | 6.20 | 7% | 24% | 69% | 0% | 5.55 | 6.33 | 6.06 | 3% |
| old | poor-fit-chooser | 496 | 3.77 | 4.08 / 4.47 / 6.03 | 4.77 | 4% | 85% | 11% | 0% | 5.61 | 4.77 | 4.77 | 1% |
| Q1_editorial | poor-fit-chooser | 496 | 3.39 | 3.76 / 4.14 / 4.96 | 4.28 | 36% | 59% | 5% | 0% | 5.25 | 4.42 | 4.14 | 0% |
| Q2_bounded | poor-fit-chooser | 496 | 3.39 | 3.80 / 4.22 / 5.05 | 4.32 | 31% | 65% | 4% | 0% | 5.27 | 4.48 | 4.17 | 0% |
| Q3_mild | poor-fit-chooser | 496 | 2.83 | 3.24 / 3.76 / 4.73 | 3.91 | 69% | 27% | 4% | 0% | 4.99 | 4.18 | 3.64 | 0% |
| Q3_sev | poor-fit-chooser | 496 | 2.39 | 2.75 / 3.38 / 4.42 | 3.56 | 82% | 14% | 4% | 0% | 4.77 | 3.91 | 3.21 | 5% |
| Q3_strong | poor-fit-chooser | 495 | 1.95 | 2.25 / 3.01 / 4.14 | 3.22 | 89% | 7% | 4% | 0% | 4.54 | 3.64 | 2.79 | 6% |
| Q4_cult | poor-fit-chooser | 496 | 2.39 | 2.75 / 3.38 / 4.42 | 3.56 | 82% | 14% | 4% | 0% | 4.77 | 3.91 | 3.21 | 5% |
| Q4_info_G4levers | poor-fit-chooser | 336 | 2.42 | 2.70 / 3.41 / 5.59 | 3.73 | 75% | 20% | 6% | 0% | 4.78 | 4.04 | 3.42 | 5% |
| old | balanced | 478 | 5.02 | 7.33 / 8.41 / 9.37 | 8.34 | 0% | 2% | 29% | 69% | 7.11 | 8.30 | 8.37 | 12% |
| Q1_editorial | balanced | 479 | 4.37 | 7.43 / 8.66 / 9.56 | 8.53 | 0% | 2% | 22% | 76% | 7.25 | 8.80 | 8.26 | 0% |
| Q2_bounded | balanced | 480 | 4.37 | 7.48 / 8.71 / 9.62 | 8.57 | 0% | 2% | 21% | 77% | 7.23 | 8.82 | 8.32 | 1% |
| Q3_mild | balanced | 477 | 3.64 | 7.28 / 8.66 / 9.61 | 8.51 | 1% | 2% | 21% | 75% | 7.12 | 8.79 | 8.22 | 2% |
| Q3_sev | balanced | 479 | 3.08 | 7.21 / 8.73 / 9.61 | 8.49 | 1% | 3% | 19% | 77% | 7.05 | 8.77 | 8.20 | 5% |
| Q3_strong | balanced | 481 | 2.52 | 6.78 / 8.71 / 9.66 | 8.41 | 2% | 4% | 23% | 72% | 6.85 | 8.71 | 8.10 | 8% |
| Q4_cult | balanced | 479 | 3.08 | 7.23 / 8.71 / 9.60 | 8.48 | 1% | 3% | 20% | 76% | 7.06 | 8.78 | 8.19 | 5% |
| Q4_info_G4levers | balanced | 467 | 3.08 | 6.79 / 8.61 / 9.54 | 8.36 | 1% | 4% | 24% | 71% | 6.82 | 8.63 | 8.09 | 4% |
| old | quality-first | 466 | 5.70 | 7.34 / 8.50 / 9.29 | 8.40 | 0% | 1% | 25% | 75% | 7.29 | 8.45 | 8.35 | 9% |
| Q1_editorial | quality-first | 469 | 4.95 | 7.36 / 8.64 / 9.40 | 8.48 | 0% | 1% | 24% | 75% | 7.37 | 8.82 | 8.13 | 0% |
| Q2_bounded | quality-first | 468 | 4.95 | 7.31 / 8.62 / 9.48 | 8.48 | 0% | 1% | 22% | 77% | 7.35 | 8.78 | 8.18 | 1% |
| Q3_mild | quality-first | 470 | 4.12 | 7.33 / 8.61 / 9.46 | 8.45 | 0% | 4% | 20% | 76% | 7.24 | 8.76 | 8.14 | 2% |
| Q3_sev | quality-first | 471 | 3.49 | 7.21 / 8.59 / 9.46 | 8.38 | 0% | 5% | 20% | 75% | 7.16 | 8.70 | 8.06 | 4% |
| Q3_strong | quality-first | 468 | 2.86 | 7.12 / 8.59 / 9.48 | 8.33 | 2% | 3% | 21% | 74% | 7.09 | 8.67 | 7.99 | 7% |
| Q4_cult | quality-first | 470 | 3.49 | 7.22 / 8.57 / 9.49 | 8.40 | 0% | 4% | 20% | 76% | 7.19 | 8.73 | 8.06 | 4% |
| Q4_info_G4levers | quality-first | 443 | 3.49 | 7.06 / 8.50 / 9.48 | 8.32 | 0% | 4% | 23% | 73% | 7.13 | 8.62 | 8.02 | 4% |

## 3. Experienced studio: isolating crew, Star family fit, studio exact-genre XP and pairing

Mean over seeds; each cell is the SAME veteran studio state making one movie.

| Variant | Pairings | Best-fit Star | Cheapest Star | Best-fit Star, genre XP wiped | Rookie (section 1) |
|---|---|---|---|---|---|
| old | natural | 8.30 (min 6.18, n 24) | 8.29 (min 6.17, n 24) | 8.24 (min 6.12, n 24) | 5.65 (min 4.57, n 80) |
| Q1_editorial | natural | 8.70 (min 7.07, n 24) | 8.69 (min 7.05, n 24) | 8.63 (min 6.99, n 24) | 6.21 (min 5.82, n 80) |
| Q2_bounded | natural | 8.77 (min 7.04, n 24) | 8.76 (min 7.02, n 24) | 8.71 (min 6.95, n 24) | 6.21 (min 5.74, n 80) |
| Q3_mild | natural | 8.68 (min 6.87, n 24) | 8.67 (min 6.87, n 24) | 8.62 (min 6.80, n 24) | 6.21 (min 5.74, n 80) |
| Q3_sev | natural | 8.58 (min 6.76, n 24) | 8.57 (min 6.75, n 24) | 8.52 (min 6.71, n 24) | 6.21 (min 5.74, n 80) |
| Q3_strong | natural | 8.73 (min 7.07, n 24) | 8.72 (min 7.06, n 24) | 8.67 (min 6.98, n 24) | 6.21 (min 5.74, n 80) |
| Q4_cult | natural | 8.58 (min 6.76, n 24) | 8.57 (min 6.75, n 24) | 8.52 (min 6.71, n 24) | 6.21 (min 5.74, n 80) |
| Q4_info_G4levers | natural | 8.86 (min 7.04, n 24) | 8.85 (min 7.02, n 24) | 8.80 (min 6.95, n 24) | 6.21 (min 5.74, n 80) |
| old | middling | 8.37 (min 6.89, n 24) | 8.35 (min 6.87, n 24) | 8.30 (min 6.80, n 24) | 5.57 (min 4.34, n 80) |
| Q1_editorial | middling | 8.48 (min 6.60, n 24) | 8.46 (min 6.60, n 24) | 8.40 (min 6.52, n 24) | 5.75 (min 5.30, n 80) |
| Q2_bounded | middling | 8.68 (min 7.18, n 24) | 8.67 (min 7.16, n 24) | 8.60 (min 7.09, n 24) | 5.72 (min 5.05, n 80) |
| Q3_mild | middling | 8.70 (min 7.31, n 24) | 8.69 (min 7.30, n 24) | 8.62 (min 7.23, n 24) | 5.69 (min 4.92, n 80) |
| Q3_sev | middling | 8.66 (min 7.51, n 24) | 8.65 (min 7.50, n 24) | 8.58 (min 7.45, n 24) | 5.66 (min 4.79, n 80) |
| Q3_strong | middling | 8.61 (min 7.51, n 24) | 8.60 (min 7.50, n 24) | 8.53 (min 7.45, n 24) | 5.64 (min 4.66, n 80) |
| Q4_cult | middling | 8.66 (min 7.51, n 24) | 8.65 (min 7.50, n 24) | 8.58 (min 7.45, n 24) | 5.66 (min 4.79, n 80) |
| Q4_info_G4levers | middling | 8.63 (min 6.82, n 24) | 8.62 (min 6.81, n 24) | 8.55 (min 6.75, n 24) | 5.67 (min 4.81, n 80) |
| old | poor | 8.29 (min 7.25, n 24) | 8.27 (min 7.24, n 24) | 8.22 (min 7.19, n 24) | 5.64 (min 4.81, n 80) |
| Q1_editorial | poor | 7.34 (min 6.42, n 24) | 7.33 (min 6.40, n 24) | 7.29 (min 6.36, n 24) | 4.72 (min 4.18, n 80) |
| Q2_bounded | poor | 7.32 (min 6.39, n 24) | 7.30 (min 6.38, n 24) | 7.26 (min 6.36, n 24) | 4.75 (min 4.18, n 80) |
| Q3_mild | poor | 6.59 (min 5.33, n 24) | 6.58 (min 5.32, n 24) | 6.54 (min 5.30, n 24) | 4.22 (min 3.49, n 80) |
| Q3_sev | poor | 5.94 (min 4.50, n 24) | 5.93 (min 4.49, n 24) | 5.90 (min 4.47, n 24) | 3.78 (min 2.95, n 80) |
| Q3_strong | poor | 5.28 (min 3.68, n 24) | 5.27 (min 3.67, n 24) | 5.24 (min 3.66, n 24) | 3.34 (min 2.41, n 80) |
| Q4_cult | poor | 5.94 (min 4.50, n 24) | 5.93 (min 4.49, n 24) | 5.90 (min 4.47, n 24) | 3.78 (min 2.95, n 80) |
| Q4_info_G4levers | poor | 5.97 (min 4.49, n 24) | 5.96 (min 4.47, n 24) | 5.93 (min 4.46, n 24) | 3.78 (min 2.93, n 80) |

## 4. Money by ACTUAL rating bin (movies; rookies + policies; finished runs)

| Variant | Bin | N | Studio loses all-in | Median all-in | Median studio direct cost | Distributed: partner loses | Median partner ROI (share ÷ its ad spend) |
|---|---|---|---|---|---|---|---|
| old | 0–<4 | 19 | 0% | $47K | $62K | 0% | 1.97 |
| old | 4–<6 | 806 | 0% | $88K | $62K | 0% | 2.26 |
| old | 6–<8 | 670 | 0% | $186K | $63K | 0% | 2.66 |
| old | 8–10 | 681 | 0% | $228K | $97K | 0% | 2.02 |
| Q1_editorial | 0–<4 | 181 | 0% | $63K | $62K | 0% | 1.91 |
| Q1_editorial | 4–<6 | 587 | 0% | $84K | $62K | 0% | 2.30 |
| Q1_editorial | 6–<8 | 696 | 0% | $203K | $63K | 0% | 2.90 |
| Q1_editorial | 8–10 | 716 | 0% | $229K | $98K | 0% | 2.00 |
| Q2_bounded | 0–<4 | 154 | 0% | $63K | $62K | 0% | 1.91 |
| Q2_bounded | 4–<6 | 635 | 0% | $85K | $62K | 0% | 2.28 |
| Q2_bounded | 6–<8 | 660 | 0% | $198K | $63K | 0% | 2.89 |
| Q2_bounded | 8–10 | 731 | 0% | $232K | $97K | 0% | 2.01 |
| Q3_mild | 0–<4 | 390 | 0% | $57K | $62K | 0% | 1.76 |
| Q3_mild | 4–<6 | 438 | 0% | $90K | $62K | 0% | 2.38 |
| Q3_mild | 6–<8 | 631 | 0% | $206K | $63K | 0% | 2.91 |
| Q3_mild | 8–10 | 720 | 0% | $233K | $96K | 0% | 2.01 |
| Q3_sev | 0–<4 | 515 | 0% | $50K | $62K | 0% | 1.71 |
| Q3_sev | 4–<6 | 328 | 0% | $95K | $63K | 0% | 2.46 |
| Q3_sev | 6–<8 | 618 | 0% | $209K | $63K | 0% | 2.95 |
| Q3_sev | 8–10 | 721 | 0% | $232K | $97K | 0% | 2.00 |
| Q3_strong | 0–<4 | 578 | 1% | $43K | $62K | 0% | 1.68 |
| Q3_strong | 4–<6 | 274 | 0% | $96K | $63K | 0% | 2.57 |
| Q3_strong | 6–<8 | 639 | 0% | $207K | $63K | 0% | 2.91 |
| Q3_strong | 8–10 | 689 | 0% | $233K | $98K | 0% | 1.99 |
| Q4_cult | 0–<4 | 511 | 0% | $50K | $62K | 0% | 1.70 |
| Q4_cult | 4–<6 | 330 | 0% | $95K | $63K | 0% | 2.46 |
| Q4_cult | 6–<8 | 619 | 0% | $207K | $63K | 0% | 2.92 |
| Q4_cult | 8–10 | 721 | 0% | $232K | $98K | 0% | 2.00 |
| Q4_info_G4levers | 0–<4 | 348 | 97% | −$25K | $62K | 4% | 1.22 |
| Q4_info_G4levers | 4–<6 | 325 | 24% | $21K | $63K | 6% | 1.48 |
| Q4_info_G4levers | 6–<8 | 644 | 0% | $112K | $63K | 0% | 2.11 |
| Q4_info_G4levers | 8–10 | 655 | 0% | $233K | $95K | 0% | 1.99 |

## 5. Cult appeal (audience-only exception)

| Variant | Eligible releases (poor audience grade, untried pairing, craft ≥ bar) | Events | lift / breakout | Mean audience change | Critic change | Events by policy |
|---|---|---|---|---|---|---|
| old | 0 | 0 | 0 / 0 | — | 0 by construction | — |
| Q1_editorial | 0 | 0 | 0 / 0 | — | 0 by construction | — |
| Q2_bounded | 0 | 0 | 0 / 0 | — | 0 by construction | — |
| Q3_mild | 0 | 0 | 0 / 0 | — | 0 by construction | — |
| Q3_sev | 0 | 0 | 0 / 0 | — | 0 by construction | — |
| Q3_strong | 0 | 0 | 0 / 0 | — | 0 by construction | — |
| Q4_cult | 115 | 13 | 11 / 2 | +2.40 | 0 by construction | low-budget-random-combo 4, balanced 3, quality-first 6 |
| Q4_info_G4levers | 119 | 16 | 16 / 0 | +2.19 | 0 by construction | low-budget-random-combo 4, balanced 4, quality-first 5, veteran:poor:bestFit 1, veteran:poor:cheapest 1, veteran:poor:bestFit:noXP 1 |

## 6. Lowest-scoring releases (reproduce from the seed)

- **old**: Broken Pulse Action+Spies A 3.45/C 4.09 (policy:poor-fit-chooser, seed 13, release 7); Wild Edge Comedy+Zombies A 4.19/C 3.4 (policy:poor-fit-chooser, seed 4, release 15); Wild Shadow Comedy+Zombies A 4.22/C 3.42 (policy:poor-fit-chooser, seed 4, release 16); Dead Signal Comedy+Zombies A 4.27/C 3.46 (policy:poor-fit-chooser, seed 4, release 17)
- **Q1_editorial**: Last Storm Horror+Sports A 3.52/C 3.26 (policy:poor-fit-chooser, seed 8, release 9); Last Rising Horror+Sports A 3.5/C 3.27 (policy:poor-fit-chooser, seed 14, release 9); Red Echo Horror+Sports A 3.54/C 3.3 (policy:poor-fit-chooser, seed 8, release 10); Red Storm Horror+Sports A 3.56/C 3.31 (policy:poor-fit-chooser, seed 14, release 10)
- **Q2_bounded**: Last Storm Horror+Sports A 3.52/C 3.26 (policy:poor-fit-chooser, seed 8, release 9); Red Echo Horror+Sports A 3.54/C 3.3 (policy:poor-fit-chooser, seed 8, release 10); Lost Horizon Horror+Sports A 3.56/C 3.34 (policy:poor-fit-chooser, seed 13, release 12); Hollow Horizon Horror+Sports A 3.61/C 3.36 (policy:poor-fit-chooser, seed 13, release 13)
- **Q3_mild**: Last Storm Horror+Sports A 2.93/C 2.72 (policy:poor-fit-chooser, seed 8, release 9); Red Echo Horror+Sports A 2.98/C 2.76 (policy:poor-fit-chooser, seed 8, release 10); Lost Horizon Horror+Sports A 2.97/C 2.78 (policy:poor-fit-chooser, seed 13, release 12); Hollow Horizon Horror+Sports A 3.01/C 2.8 (policy:poor-fit-chooser, seed 13, release 13)
- **Q3_sev**: Last Storm Horror+Sports A 2.48/C 2.3 (policy:poor-fit-chooser, seed 8, release 9); Red Echo Horror+Sports A 2.52/C 2.34 (policy:poor-fit-chooser, seed 8, release 10); Lost Horizon Horror+Sports A 2.51/C 2.35 (policy:poor-fit-chooser, seed 13, release 12); Hollow Horizon Horror+Sports A 2.54/C 2.37 (policy:poor-fit-chooser, seed 13, release 13)
- **Q3_strong**: Last Storm Horror+Sports A 2.03/C 1.88 (policy:poor-fit-chooser, seed 8, release 9); Red Echo Horror+Sports A 2.06/C 1.91 (policy:poor-fit-chooser, seed 8, release 10); Lost Horizon Horror+Sports A 2.06/C 1.93 (policy:poor-fit-chooser, seed 13, release 12); Hollow Horizon Horror+Sports A 2.08/C 1.94 (policy:poor-fit-chooser, seed 13, release 13)
- **Q4_cult**: Last Storm Horror+Sports A 2.48/C 2.3 (policy:poor-fit-chooser, seed 8, release 9); Red Echo Horror+Sports A 2.52/C 2.34 (policy:poor-fit-chooser, seed 8, release 10); Lost Horizon Horror+Sports A 2.51/C 2.35 (policy:poor-fit-chooser, seed 13, release 12); Hollow Horizon Horror+Sports A 2.54/C 2.37 (policy:poor-fit-chooser, seed 13, release 13)
- **Q4_info_G4levers**: Broken Pulse Horror+Sports A 2.54/C 2.31 (policy:poor-fit-chooser, seed 1, release 10); Lost Horizon Horror+Sports A 2.53/C 2.36 (policy:poor-fit-chooser, seed 13, release 12); Hollow Horizon Horror+Sports A 2.57/C 2.38 (policy:poor-fit-chooser, seed 13, release 13); Last Edge Horror+Sports A 2.47/C 2.56 (policy:poor-fit-chooser, seed 13, release 10)
