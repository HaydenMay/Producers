# Self-funding regret analysis (Gate 2.5 D)

> Branch analysis on real pitch meetings. **Simulation assumptions, not design locks.**

Config gate25-candidate (a2e9d917) · seeds 1–200 · first 10 productions · policy balanced

## Self-funding regret analysis — selfFundReach = 0.22 (balanced policy)

1550 pitch meetings where self-funding was legal. At each, the exact state was cloned and every option played out for that project only (until its run ended; no other projects).

- Self-funding was the **best** option in **0 / 1550** pitches (0.0%).
- Median margin (self-fund minus best offer): $-306,923; best case $-142,411.

| Production # | Pitches | Self best | Median self-fund net | Median best-offer net |
|---:|---:|---:|---:|---:|
| 3 | 150 | 0 | $170,990 | $390,949 |
| 4 | 200 | 0 | $172,367 | $436,488 |
| 5 | 200 | 0 | $246,063 | $527,050 |
| 6 | 200 | 0 | $269,848 | $574,494 |
| 7 | 200 | 0 | $260,822 | $585,109 |
| 8 | 200 | 0 | $250,539 | $586,573 |
| 9 | 200 | 0 | $252,187 | $589,939 |
| 10 | 200 | 0 | $246,008 | $597,739 |

## Self-funding regret analysis — selfFundReach = 0.35 (balanced policy)

1550 pitch meetings where self-funding was legal. At each, the exact state was cloned and every option played out for that project only (until its run ended; no other projects).

- Self-funding was the **best** option in **0 / 1550** pitches (0.0%).
- Median margin (self-fund minus best offer): $-207,242; best case $-88,203.

| Production # | Pitches | Self best | Median self-fund net | Median best-offer net |
|---:|---:|---:|---:|---:|
| 3 | 150 | 0 | $250,909 | $390,949 |
| 4 | 200 | 0 | $272,019 | $436,488 |
| 5 | 200 | 0 | $345,219 | $527,050 |
| 6 | 200 | 0 | $370,232 | $574,494 |
| 7 | 200 | 0 | $357,073 | $585,109 |
| 8 | 200 | 0 | $352,956 | $586,573 |
| 9 | 200 | 0 | $352,107 | $589,939 |
| 10 | 200 | 0 | $342,241 | $597,739 |

## Self-funding regret analysis — selfFundReach = 0.5 (balanced policy)

1550 pitch meetings where self-funding was legal. At each, the exact state was cloned and every option played out for that project only (until its run ended; no other projects).

- Self-funding was the **best** option in **0 / 1550** pitches (0.0%).
- Median margin (self-fund minus best offer): $-92,151; best case $-1,238.

| Production # | Pitches | Self best | Median self-fund net | Median best-offer net |
|---:|---:|---:|---:|---:|
| 3 | 150 | 0 | $341,334 | $390,949 |
| 4 | 200 | 0 | $385,276 | $436,488 |
| 5 | 200 | 0 | $462,862 | $527,050 |
| 6 | 200 | 0 | $483,764 | $574,494 |
| 7 | 200 | 0 | $473,631 | $585,109 |
| 8 | 200 | 0 | $468,014 | $586,573 |
| 9 | 200 | 0 | $470,765 | $589,939 |
| 10 | 200 | 0 | $460,745 | $597,739 |

## Self-funding regret analysis — selfFundReach = 0.7 (balanced policy)

1550 pitch meetings where self-funding was legal. At each, the exact state was cloned and every option played out for that project only (until its run ended; no other projects).

- Self-funding was the **best** option in **1459 / 1550** pitches (94.1%).
- Median margin (self-fund minus best offer): $54,849; best case $155,029.

| Production # | Pitches | Self best | Median self-fund net | Median best-offer net |
|---:|---:|---:|---:|---:|
| 3 | 150 | 150 | $456,023 | $390,949 |
| 4 | 200 | 200 | $535,152 | $436,488 |
| 5 | 200 | 199 | $618,149 | $527,050 |
| 6 | 200 | 198 | $640,528 | $574,494 |
| 7 | 200 | 196 | $632,049 | $585,109 |
| 8 | 200 | 193 | $625,369 | $586,573 |
| 9 | 200 | 165 | $628,975 | $589,939 |
| 10 | 200 | 158 | $618,972 | $597,739 |

Example winning pitches (seed, production #, cash, best offer vs self):

- seed 1 #3: cash $146,448, offers wolf $85,000@31% reach 0.66, starlight $52,000@8% reach 0.35; self +$449,151 vs best offer +$374,943 (avg score 6.83)
- seed 1 #4: cash $263,973, offers starlight $58,000@8% reach 0.35, wolf $111,000@30% reach 0.6; self +$620,542 vs best offer +$510,835 (avg score 7.4)
- seed 1 #5: cash $482,741, offers orbit $103,000@35% reach 0.83, wolf $113,000@30% reach 0.66, starlight $60,000@8% reach 0.35; self +$642,315 vs best offer +$618,784 (avg score 7.62)
- seed 1 #6: cash $715,214, offers starlight $42,000@8% reach 0.35, orbit $62,000@37% reach 0.83; self +$719,423 vs best offer +$642,092 (avg score 6.9)
- seed 1 #7: cash $724,929, offers xyz $119,000@44% reach 0.94, wolf $112,000@30% reach 0.66, orbit $94,000@34% reach 0.75; self +$655,424 vs best offer +$636,633 (avg score 8.7)
- seed 1 #8: cash $1,015,741, offers meridian $103,000@49% reach 1, xyz $93,000@44% reach 0.85; self +$658,963 vs best offer +$611,180 (avg score 8.12)
- seed 1 #10: cash $1,588,644, offers orbit $83,000@34% reach 0.83, starlight $46,000@8% reach 0.35, wolf $85,000@31% reach 0.66; self +$665,424 vs best offer +$627,776 (avg score 7.72)
- seed 2 #3: cash $77,091, offers starlight $61,000@8% reach 0.35, wolf $107,000@31% reach 0.66; self +$449,625 vs best offer +$404,793 (avg score 6.82)
