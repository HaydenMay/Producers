# Gate 3 follow-up — stress matrix tables

> Simulation output under TEST ASSUMPTIONS. Seeds 1–200 per strategy per variant; each career runs 25 in-game years once; the 10- and 15-year columns are exact prefixes of the same runs. Not design locks.

## Sample sizes and runtime

| Variant | Strategies | Careers | Runtime (s) | Invariant violations (seeds 1–20 per strategy) | Note |
|---|---|---|---|---|---|
| A0_noFiring | 6 | 1200 | 88 | 0 | Gate 3 policies before the follow-up: no firing, renewal by score only (reference for firing before/after) |
| A_control | 6 | 1200 | 84 | 0 | follow-up control: firing + money-aware renewal; both fatigue experiments off; 35% review-fatigue cap unchanged |
| B_mildViewer | 6 | 1200 | 83 | 0 | + mild returning-viewer fatigue (seasons basis) |
| B_ep_mildViewer | 6 | 1200 | 85 | 0 | same strength on an EPISODE-exposure basis (10 episodes = 1 step) |
| C_mildViewer_lessReview | 6 | 1200 | 80 | 0 | mild viewer fatigue + reduced review fatigue (cap 35% -> 20%, rate 1.2% -> 0.8%) |
| D_strongViewer | 6 | 1200 | 86 | 0 | stronger viewer fatigue (optional variant) |
| A_events | 6 | 1200 | 85 | 0 | control + rare creative breakthroughs (2% per stage check, max 1 per production) |
| C_events | 6 | 1200 | 79 | 0 | C + rare creative breakthroughs |
| C_comboD | 6 | 1200 | 82 | 0 | C + the Gate 2.6 combo_D critic/audience curve (interaction check only; defaults unchanged) |
| A_eventsBig | 6 | 1200 | 78 | 0 | sensitivity: breakthroughs 5x bigger (bonusShare 0.6 -> 3.0), same 2% chance |
| D_strongViewer_premiere | 6 | 1200 | 82 | 0 | sensitivity: strong viewer fatigue ALSO scales the episode-1 premiere share (appliesTo returningAndPremiere) |
| A_control@5ep | 2 | 400 | 45 | 0 |  |
| A_control@10ep | 2 | 400 | 25 | 0 |  |
| B_mildViewer@5ep | 2 | 400 | 45 | 0 |  |
| B_ep_mildViewer@5ep | 2 | 400 | 45 | 0 |  |
| B_ep_mildViewer@10ep | 2 | 400 | 26 | 0 |  |
| C_mildViewer_lessReview@5ep | 2 | 400 | 43 | 0 |  |

## 1. Firing before/after (A0 = Gate 3 policies, no firing, score-only renewal; A = firing + money-aware renewal)

### 10 years

| Strategy | Variant | Fires/career | Careers with a dismissal | Dismissals while in debt | ≥3 yrs in debt | Ever negative | Negative at end | p10 lowest cash | Median end cash | Engineer hired | Streaming live (median yr) | Longest show | Voluntary share of ended shows |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| tv-first | A0_noFiring | 0.00 | 0 | 0 | 0 | 147 | 0 | −$16K | $5.82M | 0 | 0 (—) | 8 | 100% |
| tv-first | A_control | 0.00 | 0 | 0 | 0 | 147 | 0 | −$16K | $5.61M | 0 | 0 (—) | 14 | 100% |
| renewal-franchise | A0_noFiring | 0.00 | 0 | 0 | 0 | 108 | 0 | −$16K | $3.84M | 0 | 0 (—) | 18 | — |
| renewal-franchise | A_control | 0.00 | 0 | 0 | 0 | 108 | 0 | −$16K | $3.84M | 0 | 0 (—) | 18 | — |
| traditional-holdout | A0_noFiring | 0.00 | 0 | 0 | 0 | 146 | 0 | −$15K | $6.31M | 0 | 0 (—) | 6 | 100% |
| traditional-holdout | A_control | 0.00 | 0 | 0 | 0 | 146 | 0 | −$15K | $6.28M | 0 | 0 (—) | 11 | 100% |
| mixed | A0_noFiring | 0.00 | 0 | 0 | 0 | 145 | 0 | −$16K | $5.93M | 200 | 200 (7.25) | 6 | 100% |
| mixed | A_control | 1.00 | 200 | 0 | 0 | 145 | 0 | −$16K | $5.83M | 200 | 200 (6.92) | 6 | 100% |
| streaming-pivot | A0_noFiring | 0.00 | 0 | 0 | 0 | 130 | 0 | −$16K | $3.21M | 200 | 200 (6.42) | 6 | — |
| streaming-pivot | A_control | 1.00 | 200 | 0 | 0 | 130 | 0 | −$16K | $3.06M | 200 | 200 (6.12) | 6 | — |
| balanced | A0_noFiring | 0.00 | 0 | 0 | 0 | 139 | 0 | −$13K | $7.19M | 0 | 0 (—) | 0 | — |
| balanced | A_control | 0.00 | 0 | 0 | 0 | 139 | 0 | −$13K | $7.19M | 0 | 0 (—) | 0 | — |

### 25 years

| Strategy | Variant | Fires/career | Careers with a dismissal | Dismissals while in debt | ≥3 yrs in debt | Ever negative | Negative at end | p10 lowest cash | Median end cash | Engineer hired | Streaming live (median yr) | Longest show | Voluntary share of ended shows |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| tv-first | A0_noFiring | 0.00 | 0 | 0 | 0 | 147 | 0 | −$16K | $22.70M | 0 | 0 (—) | 8 | 100% |
| tv-first | A_control | 0.00 | 0 | 0 | 0 | 147 | 0 | −$16K | $20.38M | 0 | 0 (—) | 35 | 100% |
| renewal-franchise | A0_noFiring | 0.00 | 0 | 0 | 2 | 108 | 2 | −$16K | $10.12M | 0 | 0 (—) | 40 | — |
| renewal-franchise | A_control | 0.06 | 2 | 11 | 2 | 108 | 0 | −$16K | $10.12M | 0 | 0 (—) | 40 | 0% |
| traditional-holdout | A0_noFiring | 0.00 | 0 | 0 | 0 | 146 | 0 | −$15K | $23.78M | 0 | 0 (—) | 6 | 100% |
| traditional-holdout | A_control | 0.00 | 0 | 0 | 0 | 146 | 0 | −$15K | $23.08M | 0 | 0 (—) | 22 | 100% |
| mixed | A0_noFiring | 0.00 | 0 | 0 | 0 | 145 | 0 | −$16K | $23.82M | 200 | 200 (7.25) | 6 | 100% |
| mixed | A_control | 1.00 | 200 | 0 | 0 | 145 | 0 | −$16K | $23.13M | 200 | 200 (6.92) | 14 | 100% |
| streaming-pivot | A0_noFiring | 0.00 | 0 | 0 | 0 | 130 | 0 | −$16K | $6.03M | 200 | 200 (6.42) | 6 | 100% |
| streaming-pivot | A_control | 1.00 | 200 | 0 | 0 | 130 | 0 | −$16K | $4.83M | 200 | 200 (6.12) | 21 | 100% |
| balanced | A0_noFiring | 0.00 | 0 | 0 | 0 | 139 | 0 | −$13K | $21.40M | 0 | 0 (—) | 0 | — |
| balanced | A_control | 0.00 | 0 | 0 | 0 | 139 | 0 | −$13K | $21.40M | 0 | 0 (—) | 0 | — |

## 2. Season bands (25 years): returning viewers vs review fatigue

### tv-first

| Variant | Band | Seasons | Premiere (median) | Return rate | Last ep ÷ premiere | Unique ÷ reach | Avg (mean) | HoF % | Viewer-fatigue mult | Review fatigue | IP fans at start | Net/prod wk (median) | Losing seasons | Renewable |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| A_control | 1-3 | 1882 | 147,619 | 0.44 | 2.39 | 91% | 8.495 | 24% | 1.000 | 1% | 13,040 | $25K | 0% | 100% |
| A_control | 4-6 | 1540 | 164,514 | 0.45 | 2.24 | 97% | 8.066 | 8% | 1.000 | 9% | 63,199 | $29K | 0% | 100% |
| A_control | 7-10 | 1653 | 171,403 | 0.51 | 1.67 | 96% | 6.673 | 0% | 1.000 | 25% | 93,127 | $27K | 0% | 100% |
| A_control | 11-15 | 620 | 175,854 | 0.74 | 1.28 | 96% | 6.299 | 0% | 1.000 | 31% | 102,835 | $26K | 0% | 100% |
| A_control | 16+ | 477 | 174,786 | 0.65 | 1.69 | 98% | 6.468 | 0% | 1.000 | 31% | 111,415 | $28K | 0% | 100% |
| B_mildViewer | 1-3 | 1880 | 147,619 | 0.44 | 2.39 | 91% | 8.494 | 24% | 1.000 | 1% | 13,021 | $25K | 0% | 100% |
| B_mildViewer | 4-6 | 1540 | 164,414 | 0.45 | 2.24 | 97% | 8.066 | 8% | 0.995 | 9% | 63,199 | $29K | 0% | 100% |
| B_mildViewer | 7-10 | 1653 | 170,518 | 0.51 | 1.68 | 96% | 6.673 | 0% | 0.932 | 25% | 93,109 | $27K | 0% | 100% |
| B_mildViewer | 11-15 | 620 | 173,304 | 0.73 | 1.30 | 96% | 6.299 | 0% | 0.863 | 31% | 102,826 | $26K | 0% | 100% |
| B_mildViewer | 16+ | 479 | 171,452 | 0.63 | 1.73 | 98% | 6.466 | 0% | 0.793 | 31% | 111,310 | $28K | 0% | 100% |
| B_ep_mildViewer | 1-3 | 1880 | 147,509 | 0.43 | 2.39 | 91% | 8.494 | 24% | 1.000 | 1% | 13,021 | $25K | 0% | 100% |
| B_ep_mildViewer | 4-6 | 1541 | 164,002 | 0.45 | 2.25 | 97% | 8.065 | 8% | 0.968 | 9% | 63,186 | $29K | 0% | 100% |
| B_ep_mildViewer | 7-10 | 1653 | 168,952 | 0.51 | 1.69 | 95% | 6.673 | 0% | 0.837 | 25% | 93,098 | $27K | 0% | 100% |
| B_ep_mildViewer | 11-15 | 619 | 171,280 | 0.72 | 1.32 | 96% | 6.299 | 0% | 0.724 | 31% | 102,817 | $26K | 0% | 100% |
| B_ep_mildViewer | 16+ | 479 | 170,363 | 0.62 | 1.74 | 97% | 6.466 | 0% | 0.668 | 31% | 111,238 | $28K | 0% | 100% |
| C_mildViewer_lessReview | 1-3 | 915 | 143,771 | 0.53 | 2.23 | 82% | 8.286 | 11% | 1.000 | 1% | 9,706 | $19K | 0% | 100% |
| C_mildViewer_lessReview | 4-6 | 621 | 163,417 | 0.45 | 2.22 | 96% | 8.355 | 14% | 0.995 | 6% | 60,882 | $26K | 0% | 100% |
| C_mildViewer_lessReview | 7-10 | 809 | 169,934 | 0.47 | 2.16 | 98% | 7.536 | 1% | 0.921 | 16% | 99,550 | $30K | 0% | 100% |
| C_mildViewer_lessReview | 11-15 | 1001 | 171,395 | 0.47 | 2.16 | 99% | 7.394 | 0% | 0.780 | 19% | 123,989 | $32K | 0% | 100% |
| C_mildViewer_lessReview | 16+ | 3164 | 173,321 | 0.47 | 2.15 | 99% | 7.362 | 0% | 0.676 | 19% | 153,584 | $33K | 0% | 100% |
| D_strongViewer | 1-3 | 1877 | 147,454 | 0.44 | 2.39 | 91% | 8.493 | 24% | 1.000 | 1% | 12,998 | $25K | 0% | 100% |
| D_strongViewer | 4-6 | 1539 | 163,554 | 0.44 | 2.25 | 97% | 8.064 | 8% | 0.921 | 9% | 63,197 | $29K | 0% | 100% |
| D_strongViewer | 7-10 | 1653 | 166,790 | 0.50 | 1.72 | 95% | 6.673 | 0% | 0.702 | 25% | 93,039 | $26K | 0% | 100% |
| D_strongViewer | 11-15 | 619 | 167,407 | 0.70 | 1.35 | 95% | 6.299 | 0% | 0.560 | 31% | 102,626 | $26K | 0% | 100% |
| D_strongViewer | 16+ | 483 | 167,422 | 0.61 | 1.77 | 97% | 6.467 | 0% | 0.542 | 31% | 110,738 | $28K | 0% | 100% |
| D_strongViewer_premiere | 1-3 | 1890 | 147,484 | 0.43 | 2.39 | 91% | 8.498 | 24% | 1.000 | 1% | 13,099 | $25K | 0% | 100% |
| D_strongViewer_premiere | 4-6 | 1551 | 150,748 | 0.41 | 2.42 | 97% | 8.070 | 9% | 0.921 | 9% | 63,157 | $29K | 0% | 100% |
| D_strongViewer_premiere | 7-10 | 1647 | 116,403 | 0.36 | 2.51 | 93% | 6.675 | 0% | 0.702 | 25% | 92,746 | $25K | 0% | 100% |
| D_strongViewer_premiere | 11-15 | 606 | 95,080 | 0.37 | 2.43 | 92% | 6.304 | 0% | 0.563 | 31% | 102,075 | $24K | 0% | 100% |
| D_strongViewer_premiere | 16+ | 470 | 78,532 | 0.31 | 3.11 | 95% | 6.478 | 0% | 0.547 | 31% | 109,864 | $26K | 0% | 100% |

### renewal-franchise

| Variant | Band | Seasons | Premiere (median) | Return rate | Last ep ÷ premiere | Unique ÷ reach | Avg (mean) | HoF % | Viewer-fatigue mult | Review fatigue | IP fans at start | Net/prod wk (median) | Losing seasons | Renewable |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| A_control | 1-3 | 603 | 128,355 | 0.60 | 1.86 | 71% | 8.058 | 4% | 1.000 | 1% | 9,758 | $14K | 0% | 100% |
| A_control | 4-6 | 603 | 146,542 | 0.44 | 2.32 | 91% | 7.768 | 2% | 1.000 | 10% | 45,443 | $23K | 0% | 100% |
| A_control | 7-10 | 801 | 160,401 | 0.55 | 1.58 | 87% | 6.368 | 0% | 1.000 | 27% | 76,385 | $21K | 0% | 100% |
| A_control | 11-15 | 1000 | 158,837 | 0.92 | 1.03 | 83% | 5.808 | 0% | 1.000 | 34% | 77,143 | $19K | 0% | 100% |
| A_control | 16+ | 4175 | 158,276 | 1.04 | 0.96 | 84% | 5.792 | 0% | 1.000 | 34% | 68,171 | $17K | 0% | 100% |
| B_mildViewer | 1-3 | 603 | 128,406 | 0.60 | 1.86 | 71% | 8.059 | 4% | 1.000 | 1% | 9,810 | $14K | 0% | 100% |
| B_mildViewer | 4-6 | 603 | 146,632 | 0.44 | 2.32 | 91% | 7.770 | 2% | 0.994 | 10% | 45,624 | $23K | 0% | 100% |
| B_mildViewer | 7-10 | 802 | 158,728 | 0.55 | 1.59 | 86% | 6.368 | 0% | 0.920 | 27% | 76,361 | $21K | 0% | 100% |
| B_mildViewer | 11-15 | 1000 | 155,321 | 0.91 | 1.03 | 81% | 5.808 | 0% | 0.812 | 34% | 76,970 | $18K | 0% | 100% |
| B_mildViewer | 16+ | 4174 | 153,394 | 1.03 | 0.96 | 82% | 5.792 | 0% | 0.713 | 34% | 67,495 | $17K | 0% | 100% |
| B_ep_mildViewer | 1-3 | 603 | 128,406 | 0.60 | 1.86 | 71% | 8.059 | 4% | 1.000 | 1% | 9,810 | $14K | 0% | 100% |
| B_ep_mildViewer | 4-6 | 603 | 146,652 | 0.44 | 2.32 | 91% | 7.770 | 2% | 0.999 | 10% | 45,624 | $23K | 0% | 100% |
| B_ep_mildViewer | 7-10 | 802 | 158,941 | 0.55 | 1.58 | 86% | 6.368 | 0% | 0.946 | 27% | 76,364 | $21K | 0% | 100% |
| B_ep_mildViewer | 11-15 | 1000 | 155,516 | 0.91 | 1.03 | 82% | 5.808 | 0% | 0.821 | 34% | 77,041 | $18K | 0% | 100% |
| B_ep_mildViewer | 16+ | 4174 | 152,735 | 1.03 | 0.96 | 82% | 5.792 | 0% | 0.676 | 34% | 67,428 | $17K | 0% | 100% |
| C_mildViewer_lessReview | 1-3 | 600 | 128,381 | 0.60 | 1.86 | 71% | 8.094 | 4% | 1.000 | 1% | 9,784 | $14K | 0% | 100% |
| C_mildViewer_lessReview | 4-6 | 600 | 147,022 | 0.44 | 2.34 | 92% | 8.078 | 6% | 0.995 | 6% | 47,494 | $23K | 0% | 100% |
| C_mildViewer_lessReview | 7-10 | 800 | 161,173 | 0.47 | 2.18 | 94% | 7.326 | 0% | 0.917 | 17% | 87,386 | $25K | 0% | 100% |
| C_mildViewer_lessReview | 11-15 | 1000 | 161,459 | 0.46 | 2.22 | 96% | 7.209 | 0% | 0.771 | 19% | 112,001 | $29K | 0% | 100% |
| C_mildViewer_lessReview | 16+ | 3869 | 164,957 | 0.46 | 2.20 | 97% | 7.212 | 0% | 0.669 | 19% | 144,121 | $31K | 0% | 100% |
| D_strongViewer | 1-3 | 603 | 128,406 | 0.60 | 1.86 | 71% | 8.059 | 4% | 1.000 | 1% | 9,810 | $14K | 0% | 100% |
| D_strongViewer | 4-6 | 603 | 145,205 | 0.44 | 2.34 | 91% | 7.769 | 2% | 0.915 | 10% | 45,609 | $22K | 0% | 100% |
| D_strongViewer | 7-10 | 802 | 153,477 | 0.54 | 1.60 | 84% | 6.368 | 0% | 0.665 | 27% | 76,219 | $20K | 0% | 100% |
| D_strongViewer | 11-15 | 1000 | 148,209 | 0.91 | 1.04 | 79% | 5.808 | 0% | 0.471 | 34% | 76,230 | $18K | 0% | 100% |
| D_strongViewer | 16+ | 4174 | 147,894 | 1.02 | 0.96 | 80% | 5.792 | 0% | 0.446 | 34% | 66,204 | $17K | 0% | 100% |
| D_strongViewer_premiere | 1-3 | 603 | 128,355 | 0.60 | 1.86 | 71% | 8.051 | 4% | 1.000 | 1% | 9,741 | $14K | 0% | 100% |
| D_strongViewer_premiere | 4-6 | 603 | 132,661 | 0.40 | 2.54 | 90% | 7.765 | 2% | 0.915 | 10% | 45,331 | $22K | 0% | 100% |
| D_strongViewer_premiere | 7-10 | 804 | 99,363 | 0.37 | 2.33 | 79% | 6.366 | 0% | 0.666 | 27% | 75,549 | $18K | 0% | 100% |
| D_strongViewer_premiere | 11-15 | 1001 | 62,333 | 0.44 | 2.12 | 70% | 5.808 | 0% | 0.471 | 34% | 74,025 | $15K | 0% | 100% |
| D_strongViewer_premiere | 16+ | 4177 | 60,853 | 0.48 | 2.05 | 71% | 5.788 | 0% | 0.446 | 34% | 61,236 | $14K | 0% | 100% |

### traditional-holdout

| Variant | Band | Seasons | Premiere (median) | Return rate | Last ep ÷ premiere | Unique ÷ reach | Avg (mean) | HoF % | Viewer-fatigue mult | Review fatigue | IP fans at start | Net/prod wk (median) | Losing seasons | Renewable |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| A_control | 1-3 | 2006 | 148,901 | 0.42 | 2.44 | 95% | 8.622 | 31% | 1.000 | 1% | 17,561 | $29K | 0% | 100% |
| A_control | 4-6 | 1761 | 165,762 | 0.45 | 2.25 | 98% | 8.133 | 12% | 1.000 | 9% | 65,634 | $31K | 0% | 100% |
| A_control | 7-10 | 1318 | 173,414 | 0.47 | 1.93 | 98% | 6.903 | 0% | 1.000 | 25% | 98,680 | $29K | 0% | 100% |
| A_control | 11-15 | 87 | 171,461 | 0.58 | 1.72 | 99% | 6.561 | 0% | 1.000 | 35% | 127,511 | $32K | 0% | 100% |
| A_control | 16+ | 13 | 168,947 | 0.55 | 1.79 | 99% | 6.700 | 0% | 1.000 | 35% | 117,764 | $32K | 0% | 100% |
| B_mildViewer | 1-3 | 2006 | 148,901 | 0.42 | 2.44 | 95% | 8.622 | 31% | 1.000 | 1% | 17,561 | $29K | 0% | 100% |
| B_mildViewer | 4-6 | 1761 | 165,658 | 0.45 | 2.25 | 98% | 8.133 | 12% | 0.995 | 9% | 65,634 | $31K | 0% | 100% |
| B_mildViewer | 7-10 | 1318 | 172,621 | 0.47 | 1.95 | 98% | 6.903 | 0% | 0.932 | 25% | 98,680 | $29K | 0% | 100% |
| B_mildViewer | 11-15 | 87 | 168,118 | 0.57 | 1.75 | 99% | 6.561 | 0% | 0.785 | 35% | 127,507 | $32K | 0% | 100% |
| B_mildViewer | 16+ | 13 | 162,883 | 0.54 | 1.85 | 99% | 6.700 | 0% | 0.650 | 35% | 117,733 | $32K | 0% | 100% |
| B_ep_mildViewer | 1-3 | 2006 | 148,954 | 0.42 | 2.44 | 95% | 8.622 | 31% | 1.000 | 1% | 17,561 | $29K | 0% | 100% |
| B_ep_mildViewer | 4-6 | 1761 | 164,985 | 0.44 | 2.26 | 98% | 8.133 | 12% | 0.953 | 9% | 65,634 | $31K | 0% | 100% |
| B_ep_mildViewer | 7-10 | 1318 | 171,056 | 0.47 | 1.96 | 98% | 6.903 | 0% | 0.811 | 25% | 98,679 | $29K | 0% | 100% |
| B_ep_mildViewer | 11-15 | 87 | 165,091 | 0.56 | 1.78 | 99% | 6.561 | 0% | 0.654 | 35% | 127,495 | $32K | 0% | 100% |
| B_ep_mildViewer | 16+ | 13 | 162,882 | 0.54 | 1.85 | 99% | 6.700 | 0% | 0.650 | 35% | 117,719 | $32K | 0% | 100% |
| C_mildViewer_lessReview | 1-3 | 834 | 146,770 | 0.45 | 2.34 | 89% | 8.432 | 16% | 1.000 | 1% | 14,013 | $23K | 0% | 100% |
| C_mildViewer_lessReview | 4-6 | 740 | 163,970 | 0.45 | 2.23 | 97% | 8.359 | 15% | 0.995 | 6% | 63,469 | $27K | 0% | 100% |
| C_mildViewer_lessReview | 7-10 | 928 | 172,939 | 0.46 | 2.16 | 98% | 7.548 | 2% | 0.921 | 16% | 101,917 | $31K | 0% | 100% |
| C_mildViewer_lessReview | 11-15 | 984 | 172,156 | 0.47 | 2.16 | 99% | 7.474 | 0% | 0.779 | 19% | 128,732 | $33K | 0% | 100% |
| C_mildViewer_lessReview | 16+ | 2380 | 175,033 | 0.47 | 2.16 | 99% | 7.508 | 0% | 0.681 | 19% | 156,911 | $34K | 0% | 100% |
| D_strongViewer | 1-3 | 2006 | 148,954 | 0.42 | 2.44 | 95% | 8.622 | 31% | 1.000 | 1% | 17,561 | $29K | 0% | 100% |
| D_strongViewer | 4-6 | 1761 | 164,578 | 0.44 | 2.26 | 98% | 8.133 | 12% | 0.922 | 9% | 65,634 | $31K | 0% | 100% |
| D_strongViewer | 7-10 | 1318 | 169,619 | 0.46 | 1.98 | 97% | 6.903 | 0% | 0.705 | 25% | 98,679 | $29K | 0% | 100% |
| D_strongViewer | 11-15 | 87 | 159,170 | 0.54 | 1.83 | 99% | 6.561 | 0% | 0.402 | 35% | 127,488 | $32K | 0% | 100% |
| D_strongViewer | 16+ | 13 | 157,403 | 0.52 | 1.91 | 99% | 6.700 | 0% | 0.400 | 35% | 117,675 | $31K | 0% | 100% |
| D_strongViewer_premiere | 1-3 | 2009 | 148,914 | 0.42 | 2.44 | 95% | 8.621 | 31% | 1.000 | 1% | 17,542 | $29K | 0% | 100% |
| D_strongViewer_premiere | 4-6 | 1762 | 151,122 | 0.41 | 2.43 | 98% | 8.131 | 11% | 0.922 | 9% | 65,675 | $31K | 0% | 100% |
| D_strongViewer_premiere | 7-10 | 1319 | 116,554 | 0.34 | 2.68 | 96% | 6.900 | 0% | 0.705 | 25% | 98,441 | $28K | 0% | 100% |
| D_strongViewer_premiere | 11-15 | 87 | 64,124 | 0.21 | 4.71 | 98% | 6.561 | 0% | 0.402 | 35% | 127,302 | $29K | 0% | 100% |
| D_strongViewer_premiere | 16+ | 13 | 62,954 | 0.20 | 4.90 | 98% | 6.700 | 0% | 0.400 | 35% | 117,232 | $29K | 0% | 100% |

## 3. Marginal impact vs control, by band (25 years, same seeds)

Premiere and net are medians; the change is (variant − control) ÷ control. Avg is a difference in points. Viewer fatigue never changes a score directly: any avg change comes from different decisions downstream (which show gets renewed, Star prices, money).

### tv-first

| Variant | Band | Δ premiere | Δ unique | Δ net/prod wk | Δ avg | Seasons (variant vs control) |
|---|---|---|---|---|---|---|
| B_mildViewer | 1-3 | 0% | 0% | 0% | -0.001 | 1880 vs 1882 |
| B_mildViewer | 4-6 | -0% | -0% | -0% | 0.000 | 1540 vs 1540 |
| B_mildViewer | 7-10 | -1% | -0% | -0% | 0.000 | 1653 vs 1653 |
| B_mildViewer | 11-15 | -1% | -0% | -0% | 0.000 | 620 vs 620 |
| B_mildViewer | 16+ | -2% | -0% | -1% | -0.002 | 479 vs 477 |
| B_ep_mildViewer | 1-3 | -0% | -0% | 0% | -0.001 | 1880 vs 1882 |
| B_ep_mildViewer | 4-6 | -0% | -0% | -0% | -0.001 | 1541 vs 1540 |
| B_ep_mildViewer | 7-10 | -1% | -0% | -0% | 0.000 | 1653 vs 1653 |
| B_ep_mildViewer | 11-15 | -3% | -0% | -1% | 0.000 | 619 vs 620 |
| B_ep_mildViewer | 16+ | -3% | -0% | -1% | -0.002 | 479 vs 477 |
| C_mildViewer_lessReview | 1-3 | -3% | -13% | -24% | -0.209 | 915 vs 1882 |
| C_mildViewer_lessReview | 4-6 | -1% | -4% | -12% | 0.289 | 621 vs 1540 |
| C_mildViewer_lessReview | 7-10 | -1% | 0% | 12% | 0.863 | 809 vs 1653 |
| C_mildViewer_lessReview | 11-15 | -3% | -1% | 21% | 1.095 | 1001 vs 620 |
| C_mildViewer_lessReview | 16+ | -1% | 0% | 17% | 0.894 | 3164 vs 477 |
| D_strongViewer | 1-3 | -0% | -0% | -0% | -0.002 | 1877 vs 1882 |
| D_strongViewer | 4-6 | -1% | -0% | -0% | -0.002 | 1539 vs 1540 |
| D_strongViewer | 7-10 | -3% | -0% | -1% | 0.000 | 1653 vs 1653 |
| D_strongViewer | 11-15 | -5% | -0% | -1% | 0.000 | 619 vs 620 |
| D_strongViewer | 16+ | -4% | -0% | -2% | -0.001 | 483 vs 477 |
| D_strongViewer_premiere | 1-3 | -0% | -0% | -0% | 0.003 | 1890 vs 1882 |
| D_strongViewer_premiere | 4-6 | -8% | -0% | -1% | 0.004 | 1551 vs 1540 |
| D_strongViewer_premiere | 7-10 | -32% | -2% | -6% | 0.002 | 1647 vs 1653 |
| D_strongViewer_premiere | 11-15 | -46% | -4% | -7% | 0.005 | 606 vs 620 |
| D_strongViewer_premiere | 16+ | -55% | -1% | -9% | 0.010 | 470 vs 477 |

### renewal-franchise

| Variant | Band | Δ premiere | Δ unique | Δ net/prod wk | Δ avg | Seasons (variant vs control) |
|---|---|---|---|---|---|---|
| B_mildViewer | 1-3 | 0% | 0% | 0% | 0.001 | 603 vs 603 |
| B_mildViewer | 4-6 | 0% | 0% | 0% | 0.002 | 603 vs 603 |
| B_mildViewer | 7-10 | -1% | -0% | -1% | 0.000 | 802 vs 801 |
| B_mildViewer | 11-15 | -2% | -2% | -2% | 0.000 | 1000 vs 1000 |
| B_mildViewer | 16+ | -3% | -2% | -2% | 0.000 | 4174 vs 4175 |
| B_ep_mildViewer | 1-3 | 0% | 0% | 0% | 0.001 | 603 vs 603 |
| B_ep_mildViewer | 4-6 | 0% | 0% | 0% | 0.002 | 603 vs 603 |
| B_ep_mildViewer | 7-10 | -1% | -0% | -0% | 0.000 | 802 vs 801 |
| B_ep_mildViewer | 11-15 | -2% | -2% | -2% | 0.000 | 1000 vs 1000 |
| B_ep_mildViewer | 16+ | -4% | -2% | -2% | 0.000 | 4174 vs 4175 |
| C_mildViewer_lessReview | 1-3 | 0% | 0% | -0% | 0.036 | 600 vs 603 |
| C_mildViewer_lessReview | 4-6 | 0% | 1% | 1% | 0.310 | 600 vs 603 |
| C_mildViewer_lessReview | 7-10 | 0% | 9% | 22% | 0.958 | 800 vs 801 |
| C_mildViewer_lessReview | 11-15 | 2% | 21% | 56% | 1.401 | 1000 vs 1000 |
| C_mildViewer_lessReview | 16+ | 4% | 17% | 80% | 1.420 | 3869 vs 4175 |
| D_strongViewer | 1-3 | 0% | 0% | 0% | 0.001 | 603 vs 603 |
| D_strongViewer | 4-6 | -1% | -0% | -1% | 0.001 | 603 vs 603 |
| D_strongViewer | 7-10 | -4% | -3% | -3% | 0.000 | 802 vs 801 |
| D_strongViewer | 11-15 | -7% | -6% | -5% | 0.000 | 1000 vs 1000 |
| D_strongViewer | 16+ | -7% | -5% | -5% | 0.000 | 4174 vs 4175 |
| D_strongViewer_premiere | 1-3 | 0% | -0% | -0% | -0.007 | 603 vs 603 |
| D_strongViewer_premiere | 4-6 | -9% | -1% | -2% | -0.003 | 603 vs 603 |
| D_strongViewer_premiere | 7-10 | -38% | -11% | -11% | -0.002 | 804 vs 801 |
| D_strongViewer_premiere | 11-15 | -61% | -18% | -18% | 0.000 | 1001 vs 1000 |
| D_strongViewer_premiere | 16+ | -62% | -18% | -18% | -0.004 | 4177 vs 4175 |

## 4. How long shows last (25 years)

Reached Sk = share of shows that reached season k; viable = that season was renewable (≥ 4.0) and, if traditional, did not lose money. Voluntary = still renewable but the policy did not renew it for at least a year (its own quality bar or the money test).

| Strategy | Variant | Shows | S5 reached/viable | S10 | S15 | S20 | Ended: score / voluntary / still running | Median seasons | Max seasons | Long-runner shows (≥12 seasons, last 3 avg ≥ 7) | Irrational renewals (after 2 losing seasons) |
|---|---|---|---|---|---|---|---|---|---|---|---|
| tv-first | A0_noFiring | 810 | 96%/96% | 0%/0% | 0%/0% | 0%/0% | 0 / 607 / 203 | 8 | 8 | 0 | 0 (0 careers) |
| tv-first | A_control | 683 | 75%/75% | 44%/44% | 11%/11% | 5%/5% | 1 / 471 / 211 | 9 | 35 | 0 | 0 (0 careers) |
| tv-first | B_mildViewer | 683 | 75%/75% | 44%/44% | 11%/11% | 5%/5% | 1 / 471 / 211 | 9 | 35 | 0 | 0 (0 careers) |
| tv-first | B_ep_mildViewer | 683 | 75%/75% | 44%/44% | 11%/11% | 5%/5% | 1 / 471 / 211 | 9 | 35 | 0 | 0 (0 careers) |
| tv-first | C_mildViewer_lessReview | 396 | 52%/52% | 51%/51% | 51%/51% | 50%/50% | 0 / 196 / 200 | 20 | 37 | 153 | 0 (0 careers) |
| tv-first | D_strongViewer | 682 | 75%/75% | 44%/44% | 11%/11% | 5%/5% | 1 / 470 / 211 | 9 | 35 | 0 | 0 (0 careers) |
| renewal-franchise | A0_noFiring | 200 | 100%/100% | 100%/100% | 100%/100% | 100%/100% | 0 / 0 / 200 | 36 | 40 | 0 | 0 (0 careers) |
| renewal-franchise | A_control | 201 | 100%/100% | 100%/100% | 100%/100% | 100%/100% | 1 / 0 / 200 | 36 | 40 | 0 | 0 (0 careers) |
| renewal-franchise | B_mildViewer | 201 | 100%/100% | 100%/100% | 100%/100% | 100%/100% | 1 / 0 / 200 | 36 | 40 | 0 | 0 (0 careers) |
| renewal-franchise | B_ep_mildViewer | 201 | 100%/100% | 100%/100% | 100%/100% | 100%/100% | 1 / 0 / 200 | 36 | 40 | 0 | 0 (0 careers) |
| renewal-franchise | C_mildViewer_lessReview | 200 | 100%/100% | 100%/100% | 100%/100% | 100%/100% | 0 / 0 / 200 | 35 | 40 | 134 | 0 (0 careers) |
| renewal-franchise | D_strongViewer | 201 | 100%/100% | 100%/100% | 100%/100% | 100%/100% | 1 / 0 / 200 | 36 | 40 | 0 | 0 (0 careers) |
| traditional-holdout | A0_noFiring | 921 | 86%/86% | 0%/0% | 0%/0% | 0%/0% | 0 / 724 / 197 | 6 | 6 | 0 | 0 (0 careers) |
| traditional-holdout | A_control | 699 | 85%/85% | 11%/11% | 1%/1% | 0%/0% | 0 / 503 / 196 | 8 | 22 | 0 | 0 (0 careers) |
| traditional-holdout | B_mildViewer | 699 | 85%/85% | 11%/11% | 1%/1% | 0%/0% | 0 / 503 / 196 | 8 | 22 | 0 | 0 (0 careers) |
| traditional-holdout | B_ep_mildViewer | 699 | 85%/85% | 11%/11% | 1%/1% | 0%/0% | 0 / 503 / 196 | 8 | 22 | 0 | 0 (0 careers) |
| traditional-holdout | C_mildViewer_lessReview | 299 | 83%/83% | 73%/73% | 63%/63% | 55%/55% | 0 / 99 / 200 | 24 | 36 | 156 | 0 (0 careers) |
| traditional-holdout | D_strongViewer | 699 | 85%/85% | 11%/11% | 1%/1% | 0%/0% | 0 / 503 / 196 | 8 | 22 | 0 | 0 (0 careers) |
| mixed | A0_noFiring | 600 | 67%/67% | 0%/0% | 0%/0% | 0%/0% | 0 / 410 / 190 | 6 | 6 | 0 | 0 (0 careers) |
| mixed | A_control | 562 | 69%/69% | 3%/3% | 0%/0% | 0%/0% | 0 / 373 / 189 | 6 | 14 | 0 | 0 (0 careers) |
| mixed | B_mildViewer | 562 | 69%/69% | 3%/3% | 0%/0% | 0%/0% | 0 / 373 / 189 | 6 | 14 | 0 | 0 (0 careers) |
| mixed | B_ep_mildViewer | 562 | 69%/69% | 3%/3% | 0%/0% | 0%/0% | 0 / 373 / 189 | 6 | 14 | 0 | 0 (0 careers) |
| mixed | C_mildViewer_lessReview | 388 | 56%/56% | 47%/47% | 19%/19% | 0%/0% | 0 / 199 / 189 | 9 | 16 | 131 | 0 (0 careers) |
| mixed | D_strongViewer | 562 | 69%/69% | 3%/3% | 0%/0% | 0%/0% | 0 / 373 / 189 | 6 | 14 | 0 | 0 (0 careers) |
| streaming-pivot | A0_noFiring | 749 | 80%/80% | 0%/0% | 0%/0% | 0%/0% | 0 / 538 / 211 | 6 | 6 | 0 | 0 (0 careers) |
| streaming-pivot | A_control | 409 | 89%/89% | 54%/54% | 12%/12% | 5%/5% | 0 / 205 / 204 | 10 | 21 | 1 | 0 (0 careers) |
| streaming-pivot | B_mildViewer | 409 | 89%/89% | 54%/54% | 12%/12% | 5%/5% | 0 / 205 / 204 | 10 | 21 | 1 | 0 (0 careers) |
| streaming-pivot | B_ep_mildViewer | 409 | 89%/89% | 54%/54% | 12%/12% | 5%/5% | 0 / 205 / 204 | 10 | 21 | 1 | 0 (0 careers) |
| streaming-pivot | C_mildViewer_lessReview | 211 | 100%/100% | 96%/96% | 90%/90% | 71%/71% | 0 / 11 / 200 | 20 | 23 | 122 | 0 (0 careers) |
| streaming-pivot | D_strongViewer | 409 | 89%/89% | 54%/54% | 12%/12% | 5%/5% | 0 / 205 / 204 | 10 | 21 | 1 | 0 (0 careers) |

## 5. Short vs long orders (25 years)

Default policies order the biggest season allowed (5 → 10 → 15 → 20 episodes as Prestige grows). @5ep / @10ep cap the policy's order.

| Strategy | Variant | Band 7-10 premiere | Band 7-10 viewer mult | Band 11-15 viewer mult | Band 7-10 net/wk | Max seasons | S10 reached | Median end cash | HoF (all productions) |
|---|---|---|---|---|---|---|---|---|---|
| tv-first | A_control | 171,403 | 1.000 | 1.000 | $27K | 35 | 44% | $20.38M | 589 |
| tv-first | A_control@10ep | 173,955 | 1.000 | 1.000 | $24K | 45 | 47% | $15.99M | 836 |
| tv-first | A_control@5ep | 174,867 | 1.000 | 1.000 | $18K | 66 | 23% | $6.50M | 2488 |
| tv-first | B_mildViewer | 170,518 | 0.932 | 0.863 | $27K | 35 | 44% | $20.33M | 587 |
| tv-first | B_mildViewer@5ep | 174,005 | 0.930 | 0.848 | $17K | 63 | 23% | $6.44M | 2581 |
| tv-first | B_ep_mildViewer | 168,952 | 0.837 | 0.724 | $27K | 35 | 44% | $20.27M | 585 |
| tv-first | B_ep_mildViewer@10ep | 173,096 | 0.936 | 0.858 | $24K | 45 | 47% | $15.89M | 833 |
| tv-first | B_ep_mildViewer@5ep | 174,861 | 0.999 | 0.982 | $18K | 66 | 23% | $6.47M | 2495 |
| tv-first | C_mildViewer_lessReview | 169,934 | 0.921 | 0.780 | $30K | 37 | 51% | $24.12M | 200 |
| tv-first | C_mildViewer_lessReview@5ep | 173,544 | 0.925 | 0.787 | $18K | 73 | 24% | $9.05M | 1516 |
| renewal-franchise | A_control | 160,401 | 1.000 | 1.000 | $21K | 40 | 100% | $10.12M | 44 |
| renewal-franchise | A_control@10ep | 160,901 | 1.000 | 1.000 | $20K | 48 | 100% | $8.93M | 45 |
| renewal-franchise | A_control@5ep | 158,742 | 1.000 | 1.000 | $14K | 76 | 100% | $2.07M | 31 |
| renewal-franchise | B_mildViewer | 158,728 | 0.920 | 0.812 | $21K | 40 | 100% | $9.77M | 44 |
| renewal-franchise | B_mildViewer@5ep | 157,229 | 0.920 | 0.811 | $14K | 76 | 100% | $1.60M | 31 |
| renewal-franchise | B_ep_mildViewer | 158,941 | 0.946 | 0.821 | $21K | 40 | 100% | $9.66M | 44 |
| renewal-franchise | B_ep_mildViewer@10ep | 159,989 | 0.950 | 0.850 | $20K | 48 | 100% | $8.69M | 45 |
| renewal-franchise | B_ep_mildViewer@5ep | 158,742 | 0.999 | 0.974 | $14K | 76 | 100% | $1.78M | 31 |
| renewal-franchise | C_mildViewer_lessReview | 161,173 | 0.917 | 0.771 | $25K | 40 | 100% | $22.75M | 69 |
| renewal-franchise | C_mildViewer_lessReview@5ep | 160,161 | 0.917 | 0.769 | $15K | 76 | 100% | $8.24M | 66 |

## 6. Successful vs mediocre shows (25 years, tv-first + renewal-franchise)

Class by the show's own seasons 1–3 average: successful ≥ 7.5, mediocre < 6.5.

| Strategy | Class | Variant | 1-3 avg | 4-6 avg | 7-10 avg | 11-15 avg | 16+ avg | 7-10 premiere | 7-10 net/wk | Seasons 7+ |
|---|---|---|---|---|---|---|---|---|---|---|
| tv-first | successful | A_control | 8.58 | 8.13 | 6.67 | 6.30 | 6.47 | 171,687 | $27K | 2669 |
| tv-first | successful | B_mildViewer | 8.58 | 8.13 | 6.67 | 6.30 | 6.47 | 170,769 | $27K | 2671 |
| tv-first | successful | C_mildViewer_lessReview | 8.38 | 8.40 | 7.56 | 7.41 | 7.38 | 169,936 | $30K | 4806 |
| tv-first | successful | D_strongViewer | 8.58 | 8.13 | 6.67 | 6.30 | 6.47 | 167,361 | $27K | 2674 |
| tv-first | mediocre | A_control | — | — | — | — | — | — | — | 0 |
| tv-first | mediocre | B_mildViewer | — | — | — | — | — | — | — | 0 |
| tv-first | mediocre | C_mildViewer_lessReview | — | — | — | — | — | — | — | 0 |
| tv-first | mediocre | D_strongViewer | — | — | — | — | — | — | — | 0 |
| renewal-franchise | successful | A_control | 8.19 | 7.91 | 6.42 | 5.87 | 5.85 | 161,824 | $21K | 5180 |
| renewal-franchise | successful | B_mildViewer | 8.19 | 7.91 | 6.42 | 5.87 | 5.85 | 160,443 | $21K | 5180 |
| renewal-franchise | successful | C_mildViewer_lessReview | 8.22 | 8.22 | 7.44 | 7.31 | 7.32 | 162,388 | $26K | 4908 |
| renewal-franchise | successful | D_strongViewer | 8.19 | 7.91 | 6.42 | 5.87 | 5.85 | 154,606 | $21K | 5180 |
| renewal-franchise | mediocre | A_control | 6.35 | 7.30 | 6.84 | 5.51 | 5.53 | 153,491 | $21K | 32 |
| renewal-franchise | mediocre | B_mildViewer | 6.35 | 7.30 | 6.84 | 5.51 | 5.53 | 152,596 | $21K | 32 |
| renewal-franchise | mediocre | C_mildViewer_lessReview | 6.39 | 6.12 | 6.91 | 6.84 | 6.97 | 137,362 | $19K | 33 |
| renewal-franchise | mediocre | D_strongViewer | 6.35 | 7.30 | 6.84 | 5.51 | 5.53 | 148,666 | $21K | 32 |

## 7. Creative breakthroughs and comebacks (25 years)

Comeback = season ≥ 7 after two seasons ≥ 1.0 below the show's earlier peak, gaining ≥ 1.0 and reaching ≥ 7.0. Failed attempt = same slump, the studio changed something (twist / new Star / a breakthrough happened) and gained < 0.5.

| Strategy | Variant | Breakthroughs | Per production | Per career | Avg size (score pts) | Max size | HoF only because of one | HoF total | Slumps | Comebacks (with breakthrough) | Failed attempts |
|---|---|---|---|---|---|---|---|---|---|---|---|
| tv-first | A_control | 0 | 0% | 0.00 | — | 0.000 | 0 | 589 | 2008 | 25 (0) | 436 |
| tv-first | A_events | 469 | 6% | 2.35 | 0.030 | 0.330 | 0 | 588 | 2025 | 24 (0) | 491 |
| tv-first | A_eventsBig | 469 | 6% | 2.35 | 0.102 | 0.850 | 4 | 566 | 2013 | 25 (0) | 521 |
| tv-first | C_mildViewer_lessReview | 0 | 0% | 0.00 | — | 0.000 | 0 | 200 | 3457 | 0 (0) | 12 |
| tv-first | C_events | 484 | 6% | 2.42 | 0.029 | 0.330 | 0 | 197 | 3480 | 0 (0) | 168 |
| renewal-franchise | A_control | 0 | 0% | 0.00 | — | 0.000 | 0 | 44 | 5450 | 17 (0) | 667 |
| renewal-franchise | A_events | 523 | 6% | 2.62 | 0.027 | 0.360 | 0 | 42 | 5457 | 17 (1) | 829 |
| renewal-franchise | A_eventsBig | 523 | 6% | 2.62 | 0.091 | 0.920 | 3 | 45 | 5455 | 18 (2) | 905 |
| renewal-franchise | C_mildViewer_lessReview | 0 | 0% | 0.00 | — | 0.000 | 0 | 69 | 2199 | 0 (0) | 0 |
| renewal-franchise | C_events | 510 | 6% | 2.55 | 0.029 | 0.360 | 0 | 64 | 2290 | 0 (0) | 113 |
| traditional-holdout | A_control | 0 | 0% | 0.00 | — | 0.000 | 0 | 1299 | 735 | 0 (0) | 0 |
| traditional-holdout | A_events | 489 | 6% | 2.44 | 0.031 | 0.340 | 3 | 1310 | 731 | 0 (0) | 39 |
| traditional-holdout | A_eventsBig | 487 | 6% | 2.44 | 0.106 | 0.870 | 7 | 1322 | 737 | 0 (0) | 49 |
| traditional-holdout | C_mildViewer_lessReview | 0 | 0% | 0.00 | — | 0.000 | 0 | 370 | 3047 | 0 (0) | 0 |
| traditional-holdout | C_events | 481 | 6% | 2.40 | 0.031 | 0.340 | 0 | 362 | 3056 | 0 (0) | 149 |
| mixed | A_control | 0 | 0% | 0.00 | — | 0.000 | 0 | 2463 | 243 | 0 (0) | 0 |
| mixed | A_events | 643 | 6% | 3.21 | 0.027 | 0.340 | 4 | 2435 | 242 | 0 (0) | 11 |
| mixed | A_eventsBig | 641 | 6% | 3.21 | 0.093 | 0.860 | 28 | 2471 | 240 | 0 (0) | 13 |
| mixed | C_mildViewer_lessReview | 0 | 0% | 0.00 | — | 0.000 | 0 | 2317 | 992 | 0 (0) | 0 |
| mixed | C_events | 643 | 6% | 3.21 | 0.027 | 0.340 | 5 | 2315 | 997 | 0 (0) | 45 |
| streaming-pivot | A_control | 0 | 0% | 0.00 | — | 0.000 | 0 | 1247 | 1293 | 31 (0) | 379 |
| streaming-pivot | A_events | 506 | 6% | 2.53 | 0.031 | 0.340 | 1 | 1230 | 1304 | 35 (2) | 412 |
| streaming-pivot | A_eventsBig | 502 | 6% | 2.51 | 0.106 | 0.870 | 15 | 1251 | 1265 | 31 (2) | 409 |
| streaming-pivot | C_mildViewer_lessReview | 0 | 0% | 0.00 | — | 0.000 | 0 | 997 | 2172 | 0 (0) | 61 |
| streaming-pivot | C_events | 502 | 6% | 2.51 | 0.031 | 0.340 | 1 | 976 | 2157 | 0 (0) | 147 |
| balanced | A_control | 0 | 0% | 0.00 | — | 0.000 | 0 | 4633 | 0 | 0 (0) | 0 |
| balanced | A_events | 959 | 6% | 4.79 | 0.020 | 0.330 | 10 | 4659 | 0 | 0 (0) | 0 |
| balanced | A_eventsBig | 959 | 6% | 4.79 | 0.073 | 0.850 | 31 | 4689 | 0 | 0 (0) | 0 |
| balanced | C_mildViewer_lessReview | 0 | 0% | 0.00 | — | 0.000 | 0 | 4633 | 0 | 0 (0) | 0 |
| balanced | C_events | 959 | 6% | 4.79 | 0.020 | 0.330 | 10 | 4659 | 0 | 0 (0) | 0 |

## 8. Horizons (A_control vs C)

| Strategy | Variant | Years | Median end cash | ≥3 yrs debt | Prestige (median) | Seasons in band 7-10 | Band 7-10 avg | HoF (all) | Max seasons | Voluntary share |
|---|---|---|---|---|---|---|---|---|---|---|
| tv-first | A_control | 10 | $5.61M | 0 | 2,648 | 675 | 6.656 | 227 | 14 | 100% |
| tv-first | A_control | 15 | $10.27M | 0 | 3,703 | 1042 | 6.696 | 348 | 21 | 100% |
| tv-first | A_control | 25 | $20.38M | 0 | 5,573 | 1653 | 6.673 | 589 | 35 | 100% |
| tv-first | C_mildViewer_lessReview | 10 | $6.30M | 0 | 2,443 | 761 | 7.501 | 189 | 15 | 100% |
| tv-first | C_mildViewer_lessReview | 15 | $11.87M | 0 | 2,840 | 803 | 7.531 | 199 | 22 | 100% |
| tv-first | C_mildViewer_lessReview | 25 | $24.12M | 0 | 3,540 | 809 | 7.536 | 200 | 37 | 100% |
| renewal-franchise | A_control | 10 | $3.84M | 0 | 1,950 | 800 | 6.368 | 44 | 18 | — |
| renewal-franchise | A_control | 15 | $6.06M | 0 | 2,310 | 800 | 6.368 | 44 | 26 | — |
| renewal-franchise | A_control | 25 | $10.12M | 2 | 3,045 | 801 | 6.368 | 44 | 40 | 0% |
| renewal-franchise | C_mildViewer_lessReview | 10 | $5.66M | 0 | 2,133 | 800 | 7.326 | 69 | 17 | — |
| renewal-franchise | C_mildViewer_lessReview | 15 | $11.02M | 0 | 2,540 | 800 | 7.326 | 69 | 26 | — |
| renewal-franchise | C_mildViewer_lessReview | 25 | $22.75M | 0 | 3,260 | 800 | 7.326 | 69 | 40 | — |
| traditional-holdout | A_control | 10 | $6.28M | 0 | 3,338 | 459 | 6.815 | 428 | 11 | 100% |
| traditional-holdout | A_control | 15 | $11.83M | 0 | 4,753 | 732 | 6.910 | 711 | 15 | 100% |
| traditional-holdout | A_control | 25 | $23.08M | 0 | 7,550 | 1318 | 6.903 | 1299 | 22 | 100% |
| traditional-holdout | C_mildViewer_lessReview | 10 | $6.71M | 0 | 2,693 | 648 | 7.539 | 265 | 15 | 100% |
| traditional-holdout | C_mildViewer_lessReview | 15 | $12.45M | 0 | 3,525 | 803 | 7.553 | 342 | 21 | 100% |
| traditional-holdout | C_mildViewer_lessReview | 25 | $25.06M | 0 | 4,728 | 928 | 7.548 | 370 | 36 | 100% |
| mixed | A_control | 10 | $5.83M | 0 | 4,225 | 0 | — | 742 | 6 | 100% |
| mixed | A_control | 15 | $11.39M | 0 | 6,325 | 374 | 6.960 | 1284 | 9 | 100% |
| mixed | A_control | 25 | $23.13M | 0 | 11,008 | 586 | 6.852 | 2463 | 14 | 100% |
| mixed | C_mildViewer_lessReview | 10 | $5.84M | 0 | 4,345 | 0 | — | 787 | 6 | 100% |
| mixed | C_mildViewer_lessReview | 15 | $11.63M | 0 | 6,460 | 426 | 7.670 | 1340 | 10 | 100% |
| mixed | C_mildViewer_lessReview | 25 | $23.41M | 0 | 10,263 | 783 | 7.533 | 2317 | 16 | 100% |
| streaming-pivot | A_control | 10 | $3.06M | 0 | 4,170 | 0 | — | 846 | 6 | — |
| streaming-pivot | A_control | 15 | $3.72M | 0 | 4,788 | 603 | 6.798 | 907 | 12 | 100% |
| streaming-pivot | A_control | 25 | $4.83M | 0 | 6,515 | 1186 | 6.728 | 1247 | 21 | 100% |
| streaming-pivot | C_mildViewer_lessReview | 10 | $3.06M | 0 | 4,185 | 0 | — | 862 | 6 | — |
| streaming-pivot | C_mildViewer_lessReview | 15 | $3.72M | 0 | 4,875 | 628 | 7.549 | 971 | 12 | — |
| streaming-pivot | C_mildViewer_lessReview | 25 | $4.48M | 0 | 5,873 | 818 | 7.511 | 997 | 23 | 100% |
| balanced | A_control | 10 | $7.19M | 0 | 6,528 | 0 | — | 1458 | 0 | — |
| balanced | A_control | 15 | $11.85M | 0 | 10,605 | 0 | — | 2776 | 0 | — |
| balanced | A_control | 25 | $21.40M | 0 | 18,245 | 0 | — | 4633 | 0 | — |
| balanced | C_mildViewer_lessReview | 10 | $7.19M | 0 | 6,528 | 0 | — | 1458 | 0 | — |
| balanced | C_mildViewer_lessReview | 15 | $11.85M | 0 | 10,605 | 0 | — | 2776 | 0 | — |
| balanced | C_mildViewer_lessReview | 25 | $21.40M | 0 | 18,245 | 0 | — | 4633 | 0 | — |

## 9. Interaction with the Gate 2.6 combo_D curve (25 years)

| Strategy | Variant | Avg (all productions) | HoF (all) | TV band 1-3 avg | TV band 7-10 avg | TV band 11-15 avg | Max seasons | Median end cash |
|---|---|---|---|---|---|---|---|---|
| tv-first | C_mildViewer_lessReview | 7.489 | 200 | 8.286 | 7.536 | 7.394 | 37 | $24.12M |
| tv-first | C_comboD | 7.191 | 176 | 8.256 | 7.164 | 6.937 | 37 | $22.21M |
| renewal-franchise | C_mildViewer_lessReview | 7.299 | 69 | 8.094 | 7.326 | 7.209 | 40 | $22.75M |
| renewal-franchise | C_comboD | 6.994 | 66 | 8.094 | 7.130 | 6.872 | 40 | $20.93M |
| traditional-holdout | C_mildViewer_lessReview | 7.640 | 370 | 8.432 | 7.548 | 7.474 | 36 | $25.06M |
| traditional-holdout | C_comboD | 7.493 | 285 | 8.280 | 7.158 | 7.094 | 35 | $23.61M |
| mixed | C_mildViewer_lessReview | 8.251 | 2317 | 8.490 | 7.533 | 7.373 | 16 | $23.41M |
| mixed | C_comboD | 7.923 | 775 | 8.305 | 7.019 | 6.907 | 16 | $21.39M |
| streaming-pivot | C_mildViewer_lessReview | 7.853 | 997 | 8.714 | 7.511 | 7.299 | 23 | $4.48M |
| streaming-pivot | C_comboD | 7.624 | 658 | 8.279 | 6.910 | 6.747 | 23 | $3.97M |
| balanced | C_mildViewer_lessReview | 8.473 | 4633 | — | — | — | 0 | $21.40M |
| balanced | C_comboD | 8.084 | 1593 | — | — | — | 0 | $21.30M |

## 10. Best and worst seasons (25 years, seeds for reproduction)

- **A_control / tv-first** best: seed 43 Silver Code S2 (10); seed 43 Silver Code S3 (10); seed 56 Lost Frequency S2 (10) · worst: seed 94 Red Rising S11 (4.04); seed 75 Red Frequency S10 (4.035); seed 26 Dead Signal S11 (3.935)
- **A_control / renewal-franchise** best: seed 27 Red Run S4 (9.585); seed 27 Red Run S1 (9.57); seed 199 Midnight Signal S3 (9.485) · worst: seed 158 Silver Echo S16 (4.205); seed 158 Silver Echo S31 (4.005); seed 83 Last Signal S31 (3.975)
- **C_mildViewer_lessReview / tv-first** best: seed 131 Red Echo S3 (10); seed 131 Red Echo S4 (9.98); seed 42 Last Horizon S2 (9.97) · worst: seed 190 Lost Legacy S27 (6.065); seed 198 Dead Horizon S10 (5.97); seed 174 Lost Edge S11 (5.95)
- **C_mildViewer_lessReview / renewal-franchise** best: seed 27 Red Run S4 (9.785); seed 27 Red Run S5 (9.65); seed 199 Midnight Signal S3 (9.59) · worst: seed 84 Midnight Edge S12 (5.775); seed 102 Lost Pulse S13 (5.755); seed 83 Last Signal S12 (5.745)
- **C_events / tv-first** best: seed 42 Last Horizon S2 (10); seed 131 Red Echo S3 (10); seed 131 Red Echo S4 (9.98) · worst: seed 198 Dead Horizon S10 (5.97); seed 174 Lost Edge S11 (5.95); seed 45 Red Code S11 (5.745)
- **C_events / renewal-franchise** best: seed 27 Red Run S4 (9.785); seed 27 Red Run S5 (9.67); seed 199 Midnight Signal S3 (9.59) · worst: seed 102 Lost Pulse S13 (5.755); seed 83 Last Signal S12 (5.75); seed 142 Lost Storm S8 (5.75)

## 11. Year-by-year TV seasons (25 years, tv-first)

| Year | A seasons | A avg | A net/wk | C avg | C viewer mult | D avg | D viewer mult |
|---|---|---|---|---|---|---|---|
| 1 | 0 | — | — | — | — | — | — |
| 2 | 0 | — | — | — | — | — | — |
| 3 | 94 | 8.22 | $14K | 8.22 | 1.000 | 8.22 | 1.000 |
| 4 | 471 | 8.22 | $15K | 8.23 | 1.000 | 8.22 | 1.000 |
| 5 | 401 | 8.29 | $23K | 8.38 | 1.000 | 8.29 | 0.987 |
| 6 | 369 | 8.03 | $24K | 8.31 | 0.994 | 8.02 | 0.925 |
| 7 | 348 | 7.35 | $25K | 7.92 | 0.970 | 7.36 | 0.817 |
| 8 | 320 | 7.05 | $25K | 7.56 | 0.930 | 7.04 | 0.758 |
| 9 | 285 | 7.25 | $27K | 7.40 | 0.888 | 7.26 | 0.778 |
| 10 | 303 | 7.43 | $28K | 7.39 | 0.846 | 7.43 | 0.793 |
| 11 | 252 | 7.69 | $29K | 7.37 | 0.799 | 7.69 | 0.831 |
| 12 | 281 | 7.57 | $29K | 7.39 | 0.758 | 7.57 | 0.816 |
| 13 | 265 | 7.39 | $29K | 7.40 | 0.715 | 7.40 | 0.790 |
| 14 | 264 | 7.21 | $29K | 7.38 | 0.694 | 7.21 | 0.770 |
| 15 | 245 | 7.17 | $30K | 7.41 | 0.687 | 7.17 | 0.748 |
| 16 | 237 | 7.20 | $29K | 7.42 | 0.684 | 7.20 | 0.748 |
| 17 | 243 | 7.26 | $29K | 7.38 | 0.681 | 7.26 | 0.760 |
| 18 | 224 | 7.49 | $31K | 7.38 | 0.679 | 7.49 | 0.785 |
| 19 | 226 | 7.46 | $30K | 7.39 | 0.680 | 7.47 | 0.787 |
| 20 | 225 | 7.50 | $31K | 7.37 | 0.678 | 7.50 | 0.785 |
| 21 | 234 | 7.32 | $30K | 7.39 | 0.678 | 7.32 | 0.766 |
| 22 | 220 | 7.28 | $31K | 7.40 | 0.677 | 7.26 | 0.758 |
| 23 | 226 | 7.30 | $32K | 7.39 | 0.678 | 7.29 | 0.759 |
| 24 | 222 | 7.24 | $31K | 7.41 | 0.679 | 7.22 | 0.748 |
| 25 | 217 | 7.32 | $29K | 7.42 | 0.679 | 7.27 | 0.752 |
