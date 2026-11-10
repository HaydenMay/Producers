# Self-funding regret analysis (Gate 2.5 D)

> Branch analysis on real pitch meetings. **Simulation assumptions, not design locks.**

Config gate25-candidate (a2e9d917) · seeds 1–100 · first 10 productions · policy balanced

## Self-funding regret analysis — selfFundReach = 0.55 (balanced policy)

775 pitch meetings where self-funding was legal. At each, the exact state was cloned and every option played out for that project only (until its run ended; no other projects).

- Self-funding was the **best** option in **61 / 775** pitches (7.9%).
- Median margin (self-fund minus best offer): $-59,307; best case $36,863.

| Production # | Pitches | Self best | Median self-fund net | Median best-offer net |
|---:|---:|---:|---:|---:|
| 3 | 75 | 11 | $360,830 | $384,558 |
| 4 | 100 | 20 | $419,365 | $436,488 |
| 5 | 100 | 17 | $510,864 | $551,573 |
| 6 | 100 | 6 | $533,930 | $588,611 |
| 7 | 100 | 5 | $521,354 | $587,165 |
| 8 | 100 | 1 | $513,742 | $586,573 |
| 9 | 100 | 1 | $515,880 | $596,306 |
| 10 | 100 | 0 | $505,644 | $604,371 |

Example winning pitches (seed, production #, cash, best offer vs self):

- seed 2 #4: cash $195,192, offers wolf $75,000@32% reach 0.6, starlight $44,000@8% reach 0.35; self +$473,096 vs best offer +$436,488 (avg score 7.05)
- seed 3 #4: cash $178,591, offers wolf $101,000@30% reach 0.6, starlight $55,000@8% reach 0.35; self +$411,214 vs best offer +$410,002 (avg score 7.3)
- seed 4 #6: cash $406,889, offers orbit $58,000@37% reach 0.75, wolf $74,000@32% reach 0.66, starlight $39,000@8% reach 0.35; self +$522,269 vs best offer +$521,258 (avg score 6.84)
- seed 6 #3: cash $128,759, offers wolf $87,000@31% reach 0.6, starlight $48,000@8% reach 0.35; self +$447,355 vs best offer +$428,144 (avg score 7.59)
- seed 6 #5: cash $473,544, offers starlight $47,000@8% reach 0.35, wolf $91,000@30% reach 0.6; self +$608,449 vs best offer +$596,875 (avg score 7.88)
- seed 7 #5: cash $332,524, offers starlight $41,000@8% reach 0.35, wolf $78,000@32% reach 0.66; self +$485,315 vs best offer +$483,807 (avg score 6.61)
- seed 10 #5: cash $231,015, offers wolf $75,000@32% reach 0.6, starlight $42,000@8% reach 0.35; self +$471,343 vs best offer +$434,481 (avg score 6.98)
- seed 11 #4: cash $217,666, offers wolf $89,000@31% reach 0.6, starlight $51,000@8% reach 0.35; self +$458,982 vs best offer +$440,267 (avg score 7.77)

## Self-funding regret analysis — selfFundReach = 0.6 (balanced policy)

775 pitch meetings where self-funding was legal. At each, the exact state was cloned and every option played out for that project only (until its run ended; no other projects).

- Self-funding was the **best** option in **263 / 775** pitches (33.9%).
- Median margin (self-fund minus best offer): $-20,983; best case $76,251.

| Production # | Pitches | Self best | Median self-fund net | Median best-offer net |
|---:|---:|---:|---:|---:|
| 3 | 75 | 50 | $391,667 | $384,558 |
| 4 | 100 | 82 | $453,361 | $436,488 |
| 5 | 100 | 53 | $548,808 | $551,573 |
| 6 | 100 | 33 | $572,625 | $588,611 |
| 7 | 100 | 22 | $560,974 | $587,165 |
| 8 | 100 | 11 | $553,092 | $586,573 |
| 9 | 100 | 7 | $555,576 | $596,306 |
| 10 | 100 | 5 | $545,208 | $604,371 |

Example winning pitches (seed, production #, cash, best offer vs self):

- seed 1 #3: cash $146,448, offers wolf $85,000@31% reach 0.66, starlight $52,000@8% reach 0.35; self +$384,061 vs best offer +$374,943 (avg score 6.83)
- seed 1 #4: cash $263,973, offers starlight $58,000@8% reach 0.35, wolf $111,000@30% reach 0.6; self +$541,720 vs best offer +$510,835 (avg score 7.4)
- seed 2 #4: cash $195,192, offers wolf $75,000@32% reach 0.6, starlight $44,000@8% reach 0.35; self +$512,394 vs best offer +$436,488 (avg score 7.05)
- seed 3 #4: cash $178,591, offers wolf $101,000@30% reach 0.6, starlight $55,000@8% reach 0.35; self +$450,528 vs best offer +$410,002 (avg score 7.3)
- seed 3 #5: cash $297,367, offers wolf $86,000@31% reach 0.66, starlight $51,000@8% reach 0.35; self +$555,731 vs best offer +$527,468 (avg score 7.24)
- seed 4 #4: cash $164,934, offers starlight $56,000@8% reach 0.35, wolf $87,000@31% reach 0.6; self +$352,718 vs best offer +$339,268 (avg score 7.04)
- seed 4 #6: cash $406,889, offers orbit $58,000@37% reach 0.75, wolf $74,000@32% reach 0.66, starlight $39,000@8% reach 0.35; self +$560,343 vs best offer +$521,258 (avg score 6.84)
- seed 4 #8: cash $853,242, offers wolf $100,000@31% reach 0.66, xyz $86,000@45% reach 0.85, starlight $44,000@8% reach 0.35; self +$603,673 vs best offer +$600,308 (avg score 7.7)

## Self-funding regret analysis — selfFundReach = 0.65 (balanced policy)

775 pitch meetings where self-funding was legal. At each, the exact state was cloned and every option played out for that project only (until its run ended; no other projects).

- Self-funding was the **best** option in **507 / 775** pitches (65.4%).
- Median margin (self-fund minus best offer): $15,720; best case $115,639.

| Production # | Pitches | Self best | Median self-fund net | Median best-offer net |
|---:|---:|---:|---:|---:|
| 3 | 75 | 75 | $418,591 | $384,558 |
| 4 | 100 | 98 | $490,419 | $436,488 |
| 5 | 100 | 79 | $586,754 | $551,573 |
| 6 | 100 | 70 | $610,423 | $588,611 |
| 7 | 100 | 63 | $600,596 | $587,165 |
| 8 | 100 | 52 | $592,442 | $586,573 |
| 9 | 100 | 39 | $595,274 | $596,306 |
| 10 | 100 | 31 | $584,770 | $604,371 |

Example winning pitches (seed, production #, cash, best offer vs self):

- seed 1 #3: cash $146,448, offers wolf $85,000@31% reach 0.66, starlight $52,000@8% reach 0.35; self +$416,605 vs best offer +$374,943 (avg score 6.83)
- seed 1 #4: cash $263,973, offers starlight $58,000@8% reach 0.35, wolf $111,000@30% reach 0.6; self +$581,130 vs best offer +$510,835 (avg score 7.4)
- seed 1 #6: cash $715,214, offers starlight $42,000@8% reach 0.35, orbit $62,000@37% reach 0.83; self +$680,087 vs best offer +$642,092 (avg score 6.9)
- seed 1 #8: cash $1,015,741, offers meridian $103,000@49% reach 1, xyz $93,000@44% reach 0.85; self +$619,285 vs best offer +$611,180 (avg score 8.12)
- seed 2 #3: cash $77,091, offers starlight $61,000@8% reach 0.35, wolf $107,000@31% reach 0.66; self +$418,591 vs best offer +$404,793 (avg score 6.82)
- seed 2 #4: cash $195,192, offers wolf $75,000@32% reach 0.6, starlight $44,000@8% reach 0.35; self +$551,694 vs best offer +$436,488 (avg score 7.05)
- seed 2 #5: cash $350,004, offers starlight $60,000@8% reach 0.35, wolf $110,000@30% reach 0.66; self +$581,458 vs best offer +$542,816 (avg score 7.98)
- seed 2 #6: cash $566,542, offers starlight $59,000@8% reach 0.35, wolf $118,000@29% reach 0.66; self +$621,317 vs best offer +$597,477 (avg score 7.31)
