# Single career — seed 84, strategy quality-first

> **Simulation assumptions, not design locks.** All numbers come from provisional config values. Nothing here is official balance.

- Ruleset: `v9.61-movie-kernel-0.1` · Config: `baseline` (hash `5355fe52`)
- Seed: 84
- Strategy: quality-first
- Decisions: 445
- Modelled: movies; distributor advances/royalties/trust; Stars (families, budgets, fallback, callbacks, relationships); marketing + studio buzz; scores + legs; IP fans; Prestige milestones; studio genre levels; trends; staff XP/hire/train; theme research + staff pitches
- **Not modelled:** limited series; TV series/seasons/renewals/hiatus/announcements; streaming service/subscribers; eras beyond a gentle quality bar; studio upgrades/format unlock gates; genre unlocks; late-game concurrency

## Career summary

- Weeks: 329 (6.3 years) · Releases: 20 · Cancellations: 0
- End cash: $4,912,861 (start $40,000) · Negative-cash weeks: 0
- Prestige: 3350 (42 awards)
- Staff: Sam [P 75 W 74 F 68 E 60, XP 3200]; Alex [P 68 W 72 F 73 E 67, XP 3200]; Rae Vale [P 71 W 74 F 74 E 64, XP 2880]; Jo Park [P 68 W 73 F 65 E 67, XP 2880]; Rae Lind [P 65 W 71 F 74 E 66, XP 2720]
- Studio genre levels (exact genre): Horror xp 6, Action xp 8, Comedy xp 6
- IP fans: Lost Horizon 1,466; Lost Legacy 1,308; Lost Pulse 2,202; Dead Night 7,199; Hollow Signal 6,673; Hollow Rising 7,507; Iron Pulse 7,714; Silver Protocol 9,131; Wild Night 8,868; Iron Pulse 9,239; Dead Edge 11,741; Silver Shadow 11,564; Wild Horizon 19,920; Silver Pulse 19,839; Midnight Horizon 16,200; Iron Signal 9,600; Dead Legacy 29,013; Lost Signal 22,409; Wild Protocol 33,662; Silver Pulse 31,760
- Distributor trust: wolf 3.14, starlight 2.50, xyz 4.89, orbit 3.68, meridian 5.00
- Stars hired: Mo Lowe (L7, Fame 66, rel 5.00); Jo Vale (L5, Fame 82, rel 1.75); Eli Lind (L6, Fame 100, rel 5.00); Eli Lind (L4, Fame 48, rel 1.75); Kai Imai (L10, Fame 100, rel 3.25)

## Releases (full causal trace)

### Lost Horizon — Horror + Spies (new)

Released week 16 (year 0.3) · Distributor: Wolf Pictures · Star: Mo Lowe (L7, Fame 66) · IP: Lost Horizon

**Financial waterfall** [LOCKED rules; amounts provisional]

| Item | Amount |
|---|---:|
| Advance received (project reserve, not revenue) | $93,000 |
| Base cost (unavoidable) | −$60,000 |
| Star fee | −$25,065 |
| Marketing campaign | −$8,000 |
| Paid from studio cash (overrun) | $65 |
| **Unused advance kept at completion** | $0 |
| Gross from sales (14 weeks) | $262,156 |
| Distributor royalty (31% of weekly gross) | −$81,268 |
| **Studio take** | $180,888 |
| Net for this title (surplus + take − cash overrun; wages are studio-wide, excluded) | $180,823 |

**Quality trace** [scores are computed, never rolled]

Meters (0–100): Plot 56.68 · Writing 57.99 · Filming 70.26 · Editing 46.96
Inputs: staff points {"plot":55.09,"writing":58.13,"filming":52.61,"editing":35.85}, Star filming points 66 (Star family fit 100), studio Horror level 0 (+0%), era bar x1.01
Base scores: Audience 5.82 / Critic 5.77 · no weak meter
Combo grades: Audience A (x1.15) / Critic C (x1) · repetition fatigue x1 · critic saturation x1
**Final: Audience 6.7 / Critic 5.77 → avg 6.24**

**Opening & viewership trace** [marketing/Fame/reach affect viewers only]

Awareness inputs: base 0.35, marketing 0.25, studioBuzz 0, starFame 0.19, trend 0, ipFans 0 → awareness 0.55. Reach cap 264,000 → pool 144,424 → opening 43,327.

| Wk | Viewers | Retention | Driver | Gross | Studio | Distributor |
|---:|---:|---:|---|---:|---:|---:|
| 1 | 43,327 | 1 | opening | $86,654 | $59,791 | $26,863 |
| 2 | 28,064 | 0.65 | critic 5.77 (early buzz) | $56,128 | $38,728 | $17,400 |
| 3 | 18,178 | 0.65 | critic 5.77 (early buzz) | $36,356 | $25,086 | $11,270 |
| 4 | 12,754 | 0.7 | audience 6.7 (word of mouth) | $25,508 | $17,601 | $7,907 |
| 5 | 8,948 | 0.7 | audience 6.7 (word of mouth) | $17,896 | $12,348 | $5,548 |
| 6 | 6,278 | 0.7 | audience 6.7 (word of mouth) | $12,556 | $8,664 | $3,892 |
| 7 | 4,405 | 0.7 | audience 6.7 (word of mouth) | $8,810 | $6,079 | $2,731 |
| 8 | 3,091 | 0.7 | audience 6.7 (word of mouth) | $6,182 | $4,266 | $1,916 |
| 9 | 2,169 | 0.7 | audience 6.7 (word of mouth) | $4,338 | $2,993 | $1,345 |
| 10 | 1,522 | 0.7 | audience 6.7 (word of mouth) | $3,044 | $2,100 | $944 |
| 11 | 1,068 | 0.7 | audience 6.7 (word of mouth) | $2,136 | $1,474 | $662 |
| 12 | 749 | 0.7 | audience 6.7 (word of mouth) | $1,498 | $1,034 | $464 |
| 13 | 525 | 0.7 | audience 6.7 (word of mouth) | $1,050 | $725 | $326 |
| 14 | 0 | 0.7 | audience 6.7 (word of mouth) | $0 | $0 | $0 |

**Progression trace**

- Prestige awards: none (no milestone reached)
- IP fans: {"before":0,"after":2601,"delta":2601}
- Star career: {"fameDelta":2.89,"relDelta":0.75,"grow":0,"level":4,"reasons":"worked together (+); project boosted their career (+)"}
- Distributor trust: Wolf Pictures earned back 87% of its $93,000 advance on Lost Horizon (step 0.02)
- Rule labels: LOCKED = causal chain, accounting, fallback/no-campaign, thresholds 4.0/9.0, IP fan inheritance. WORKING ASSUMPTION = all formulas' shapes and numbers.

### Lost Legacy — Horror + Spies (new)

Released week 32 (year 0.6) · Distributor: Wolf Pictures · Star: Mo Lowe (L7, Fame 66) · IP: Lost Legacy

**Financial waterfall** [LOCKED rules; amounts provisional]

| Item | Amount |
|---|---:|
| Advance received (project reserve, not revenue) | $85,000 |
| Base cost (unavoidable) | −$60,000 |
| Star fee | −$25,065 |
| Marketing campaign | −$8,000 |
| Paid from studio cash (overrun) | $8,065 |
| **Unused advance kept at completion** | $0 |
| Gross from sales (14 weeks) | $260,820 |
| Distributor royalty (31% of weekly gross) | −$80,854 |
| **Studio take** | $179,966 |
| Net for this title (surplus + take − cash overrun; wages are studio-wide, excluded) | $171,901 |

**Quality trace** [scores are computed, never rolled]

Meters (0–100): Plot 58.81 · Writing 60.24 · Filming 71 · Editing 48.18
Inputs: staff points {"plot":60.86,"writing":64.58,"filming":56.45,"editing":38.1}, Star filming points 67.98 (Star family fit 100), studio Horror level 1 (+3%), era bar x1.02
Base scores: Audience 5.96 / Critic 5.95 · no weak meter
Combo grades: Audience A (x1.15) / Critic C (x1) · repetition fatigue x0.95 · critic saturation x1
**Final: Audience 6.51 / Critic 5.66 → avg 6.09**

**Opening & viewership trace** [marketing/Fame/reach affect viewers only]

Awareness inputs: base 0.35, marketing 0.25, studioBuzz 0, starFame 0.21, trend 0, ipFans 0 → awareness 0.55. Reach cap 264,000 → pool 146,480 → opening 43,944.

| Wk | Viewers | Retention | Driver | Gross | Studio | Distributor |
|---:|---:|---:|---|---:|---:|---:|
| 1 | 43,944 | 1 | opening | $87,888 | $60,643 | $27,245 |
| 2 | 28,289 | 0.64 | critic 5.66 (early buzz) | $56,578 | $39,039 | $17,539 |
| 3 | 18,211 | 0.64 | critic 5.66 (early buzz) | $36,422 | $25,131 | $11,291 |
| 4 | 12,611 | 0.69 | audience 6.51 (word of mouth) | $25,222 | $17,403 | $7,819 |
| 5 | 8,733 | 0.69 | audience 6.51 (word of mouth) | $17,466 | $12,052 | $5,414 |
| 6 | 6,047 | 0.69 | audience 6.51 (word of mouth) | $12,094 | $8,345 | $3,749 |
| 7 | 4,187 | 0.69 | audience 6.51 (word of mouth) | $8,374 | $5,778 | $2,596 |
| 8 | 2,899 | 0.69 | audience 6.51 (word of mouth) | $5,798 | $4,001 | $1,797 |
| 9 | 2,007 | 0.69 | audience 6.51 (word of mouth) | $4,014 | $2,770 | $1,244 |
| 10 | 1,390 | 0.69 | audience 6.51 (word of mouth) | $2,780 | $1,918 | $862 |
| 11 | 963 | 0.69 | audience 6.51 (word of mouth) | $1,926 | $1,329 | $597 |
| 12 | 667 | 0.69 | audience 6.51 (word of mouth) | $1,334 | $920 | $414 |
| 13 | 462 | 0.69 | audience 6.51 (word of mouth) | $924 | $638 | $286 |
| 14 | 0 | 0.69 | audience 6.51 (word of mouth) | $0 | $0 | $0 |

**Progression trace**

- Prestige awards: none (no milestone reached)
- IP fans: {"before":0,"after":2274,"delta":2274}
- Star career: {"fameDelta":2.53,"relDelta":0.75,"grow":0,"level":5,"reasons":"worked together (+); project boosted their career (+)"}
- Distributor trust: Wolf Pictures earned back 95% of its $85,000 advance on Lost Legacy (step 0.05)
- Rule labels: LOCKED = causal chain, accounting, fallback/no-campaign, thresholds 4.0/9.0, IP fan inheritance. WORKING ASSUMPTION = all formulas' shapes and numbers.

### Lost Pulse — Horror + Superheroes (new)

Released week 48 (year 0.9) · Distributor: Wolf Pictures · Star: Mo Lowe (L7, Fame 66) · IP: Lost Pulse

**Financial waterfall** [LOCKED rules; amounts provisional]

| Item | Amount |
|---|---:|
| Advance received (project reserve, not revenue) | $76,000 |
| Base cost (unavoidable) | −$60,000 |
| Star fee | −$27,012 |
| Marketing campaign | −$8,000 |
| Paid from studio cash (overrun) | $19,012 |
| **Unused advance kept at completion** | $0 |
| Gross from sales (13 weeks) | $341,542 |
| Distributor royalty (32% of weekly gross) | −$109,293 |
| **Studio take** | $232,249 |
| Net for this title (surplus + take − cash overrun; wages are studio-wide, excluded) | $213,237 |

**Quality trace** [scores are computed, never rolled]

Meters (0–100): Plot 70.51 · Writing 73.69 · Filming 76.77 · Editing 64.13
Inputs: staff points {"plot":103.12,"writing":120.82,"filming":102,"editing":74.16}, Star filming points 67.98 (Star family fit 100), studio Horror level 1 (+3%), era bar x1.04
Base scores: Audience 7.09 / Critic 7.16 · no weak meter
Combo grades: Audience F (x0.78) / Critic C (x1) · repetition fatigue x1 · critic saturation x1
**Final: Audience 5.53 / Critic 7.16 → avg 6.35**

**Opening & viewership trace** [marketing/Fame/reach affect viewers only]

Awareness inputs: base 0.35, marketing 0.25, studioBuzz 0, starFame 0.22, trend 0.4, ipFans 0 → awareness 0.71. Reach cap 264,000 → pool 186,411 → opening 55,923.

| Wk | Viewers | Retention | Driver | Gross | Studio | Distributor |
|---:|---:|---:|---|---:|---:|---:|
| 1 | 55,923 | 1 | opening | $111,846 | $76,055 | $35,791 |
| 2 | 39,021 | 0.7 | critic 7.16 (early buzz) | $78,042 | $53,069 | $24,973 |
| 3 | 27,227 | 0.7 | critic 7.16 (early buzz) | $54,454 | $37,029 | $17,425 |
| 4 | 17,573 | 0.65 | audience 5.53 (word of mouth) | $35,146 | $23,899 | $11,247 |
| 5 | 11,342 | 0.65 | audience 5.53 (word of mouth) | $22,684 | $15,425 | $7,259 |
| 6 | 7,321 | 0.65 | audience 5.53 (word of mouth) | $14,642 | $9,957 | $4,685 |
| 7 | 4,725 | 0.65 | audience 5.53 (word of mouth) | $9,450 | $6,426 | $3,024 |
| 8 | 3,050 | 0.65 | audience 5.53 (word of mouth) | $6,100 | $4,148 | $1,952 |
| 9 | 1,969 | 0.65 | audience 5.53 (word of mouth) | $3,938 | $2,678 | $1,260 |
| 10 | 1,271 | 0.65 | audience 5.53 (word of mouth) | $2,542 | $1,729 | $813 |
| 11 | 820 | 0.65 | audience 5.53 (word of mouth) | $1,640 | $1,115 | $525 |
| 12 | 529 | 0.65 | audience 5.53 (word of mouth) | $1,058 | $719 | $339 |
| 13 | 0 | 0.65 | audience 5.53 (word of mouth) | $0 | $0 | $0 |

**Progression trace**

- Prestige awards: none (no milestone reached)
- IP fans: {"before":0,"after":3689,"delta":3689}
- Star career: {"fameDelta":3.59,"relDelta":0.75,"grow":0,"level":5,"reasons":"worked together (+); project boosted their career (+)"}
- Distributor trust: Wolf Pictures earned 144% of its advance back on Lost Pulse (step 0.38)
- Rule labels: LOCKED = causal chain, accounting, fallback/no-campaign, thresholds 4.0/9.0, IP fan inheritance. WORKING ASSUMPTION = all formulas' shapes and numbers.

### Dead Night — Action + Superheroes (new)

Released week 64 (year 1.2) · Distributor: Wolf Pictures · Star: Jo Vale (L5, Fame 82) · IP: Dead Night

**Financial waterfall** [LOCKED rules; amounts provisional]

| Item | Amount |
|---|---:|
| Advance received (project reserve, not revenue) | $100,000 |
| Base cost (unavoidable) | −$60,000 |
| Star fee | −$79,586 |
| Marketing campaign | −$8,000 |
| Paid from studio cash (overrun) | $47,586 |
| **Unused advance kept at completion** | $0 |
| Gross from sales (15 weeks) | $468,818 |
| Distributor royalty (31% of weekly gross) | −$145,334 |
| **Studio take** | $323,484 |
| Net for this title (surplus + take − cash overrun; wages are studio-wide, excluded) | $275,898 |

**Quality trace** [scores are computed, never rolled]

Meters (0–100): Plot 74.55 · Writing 78.2 · Filming 78.99 · Editing 69.94
Inputs: staff points {"plot":127.87,"writing":156.54,"filming":140.19,"editing":97.67}, Star filming points 55.44 (Star family fit 84), studio Action level 0 (+0%), era bar x1.05
Base scores: Audience 7.5 / Critic 7.58 · no weak meter
Combo grades: Audience C (x1) / Critic A (x1.15) · repetition fatigue x1 · critic saturation x1
**Final: Audience 7.5 / Critic 8.72 → avg 8.11**

**Opening & viewership trace** [marketing/Fame/reach affect viewers only]

Awareness inputs: base 0.35, marketing 0.25, studioBuzz 0, starFame 0.44, trend 0.4, ipFans 0 → awareness 0.76. Reach cap 264,000 → pool 201,326 → opening 60,398.

| Wk | Viewers | Retention | Driver | Gross | Studio | Distributor |
|---:|---:|---:|---|---:|---:|---:|
| 1 | 60,398 | 1 | opening | $120,796 | $83,349 | $37,447 |
| 2 | 45,535 | 0.75 | critic 8.72 (early buzz) | $91,070 | $62,838 | $28,232 |
| 3 | 34,330 | 0.75 | critic 8.72 (early buzz) | $68,660 | $47,375 | $21,285 |
| 4 | 25,404 | 0.74 | audience 7.5 (word of mouth) | $50,808 | $35,058 | $15,750 |
| 5 | 18,799 | 0.74 | audience 7.5 (word of mouth) | $37,598 | $25,943 | $11,655 |
| 6 | 13,911 | 0.74 | audience 7.5 (word of mouth) | $27,822 | $19,197 | $8,625 |
| 7 | 10,294 | 0.74 | audience 7.5 (word of mouth) | $20,588 | $14,206 | $6,382 |
| 8 | 7,618 | 0.74 | audience 7.5 (word of mouth) | $15,236 | $10,513 | $4,723 |
| 9 | 5,637 | 0.74 | audience 7.5 (word of mouth) | $11,274 | $7,779 | $3,495 |
| 10 | 4,171 | 0.74 | audience 7.5 (word of mouth) | $8,342 | $5,756 | $2,586 |
| 11 | 3,087 | 0.74 | audience 7.5 (word of mouth) | $6,174 | $4,260 | $1,914 |
| 12 | 2,284 | 0.74 | audience 7.5 (word of mouth) | $4,568 | $3,152 | $1,416 |
| 13 | 1,690 | 0.74 | audience 7.5 (word of mouth) | $3,380 | $2,332 | $1,048 |
| 14 | 1,251 | 0.74 | audience 7.5 (word of mouth) | $2,502 | $1,726 | $776 |
| 15 | 0 | 0.74 | audience 7.5 (word of mouth) | $0 | $0 | $0 |

**Progression trace**

- Prestige awards: Prestige +75: audience_7_5 (Dead Night).; Prestige +85: critic_8_5 (Dead Night).
- IP fans: {"before":0,"after":11664,"delta":11664}
- Star career: {"fameDelta":9.48,"relDelta":0.75,"grow":6,"level":5,"reasons":"worked together (+); project boosted their career (+)"}
- Distributor trust: Wolf Pictures earned 145% of its advance back on Dead Night with strong reviews (step 0.62)
- Rule labels: LOCKED = causal chain, accounting, fallback/no-campaign, thresholds 4.0/9.0, IP fan inheritance. WORKING ASSUMPTION = all formulas' shapes and numbers.

### Hollow Signal — Action + Superheroes (new)

Released week 80 (year 1.5) · Distributor: XYZ Network · Star: Eli Lind (L6, Fame 100) · IP: Hollow Signal

**Financial waterfall** [LOCKED rules; amounts provisional]

| Item | Amount |
|---|---:|
| Advance received (project reserve, not revenue) | $114,000 |
| Base cost (unavoidable) | −$60,000 |
| Star fee | −$46,326 |
| Marketing campaign | −$8,000 |
| Paid from studio cash (overrun) | $326 |
| **Unused advance kept at completion** | $0 |
| Gross from sales (15 weeks) | $518,162 |
| Distributor royalty (43% of weekly gross) | −$222,810 |
| **Studio take** | $295,352 |
| Net for this title (surplus + take − cash overrun; wages are studio-wide, excluded) | $295,027 |

**Quality trace** [scores are computed, never rolled]

Meters (0–100): Plot 77.38 · Writing 80.54 · Filming 81.24 · Editing 72.23
Inputs: staff points {"plot":151.08,"writing":182.81,"filming":160,"editing":110.46}, Star filming points 67.98 (Star family fit 100), studio Action level 1 (+3%), era bar x1.06
Base scores: Audience 7.74 / Critic 7.83 · no weak meter
Combo grades: Audience C (x1) / Critic A (x1.15) · repetition fatigue x0.95 · critic saturation x0.9
**Final: Audience 7.35 / Critic 7.7 → avg 7.53**

**Opening & viewership trace** [marketing/Fame/reach affect viewers only]

Awareness inputs: base 0.35, marketing 0.25, studioBuzz 0, starFame 0.32, trend 0.1, ipFans 0 → awareness 0.64. Reach cap 376,000 → pool 240,145 → opening 72,044.

| Wk | Viewers | Retention | Driver | Gross | Studio | Distributor |
|---:|---:|---:|---|---:|---:|---:|
| 1 | 72,044 | 1 | opening | $144,088 | $82,130 | $61,958 |
| 2 | 51,670 | 0.72 | critic 7.7 (early buzz) | $103,340 | $58,904 | $44,436 |
| 3 | 37,058 | 0.72 | critic 7.7 (early buzz) | $74,116 | $42,246 | $31,870 |
| 4 | 27,156 | 0.73 | audience 7.35 (word of mouth) | $54,312 | $30,958 | $23,354 |
| 5 | 19,900 | 0.73 | audience 7.35 (word of mouth) | $39,800 | $22,686 | $17,114 |
| 6 | 14,583 | 0.73 | audience 7.35 (word of mouth) | $29,166 | $16,625 | $12,541 |
| 7 | 10,686 | 0.73 | audience 7.35 (word of mouth) | $21,372 | $12,182 | $9,190 |
| 8 | 7,831 | 0.73 | audience 7.35 (word of mouth) | $15,662 | $8,927 | $6,735 |
| 9 | 5,739 | 0.73 | audience 7.35 (word of mouth) | $11,478 | $6,542 | $4,936 |
| 10 | 4,206 | 0.73 | audience 7.35 (word of mouth) | $8,412 | $4,795 | $3,617 |
| 11 | 3,082 | 0.73 | audience 7.35 (word of mouth) | $6,164 | $3,513 | $2,651 |
| 12 | 2,258 | 0.73 | audience 7.35 (word of mouth) | $4,516 | $2,574 | $1,942 |
| 13 | 1,655 | 0.73 | audience 7.35 (word of mouth) | $3,310 | $1,887 | $1,423 |
| 14 | 1,213 | 0.73 | audience 7.35 (word of mouth) | $2,426 | $1,383 | $1,043 |
| 15 | 0 | 0.73 | audience 7.35 (word of mouth) | $0 | $0 | $0 |

**Progression trace**

- Prestige awards: Prestige +50: meters_all_70 (Hollow Signal).
- IP fans: {"before":0,"after":10488,"delta":10488}
- Star career: {"fameDelta":8.01,"relDelta":0.75,"grow":0,"level":3,"reasons":"worked together (+); project boosted their career (+)"}
- Distributor trust: XYZ Network earned 195% of its advance back on Hollow Signal with strong reviews (step 0.75)
- Rule labels: LOCKED = causal chain, accounting, fallback/no-campaign, thresholds 4.0/9.0, IP fan inheritance. WORKING ASSUMPTION = all formulas' shapes and numbers.

### Hollow Rising — Horror + Spies (new)

Released week 96 (year 1.8) · Distributor: Orbit Releasing · Star: Mo Lowe (L7, Fame 66) · IP: Hollow Rising

**Financial waterfall** [LOCKED rules; amounts provisional]

| Item | Amount |
|---|---:|
| Advance received (project reserve, not revenue) | $103,000 |
| Base cost (unavoidable) | −$60,000 |
| Star fee | −$28,681 |
| Marketing campaign | −$8,000 |
| Paid from studio cash (overrun) | $0 |
| **Unused advance kept at completion** | $6,319 |
| Gross from sales (15 weeks) | $531,940 |
| Distributor royalty (35% of weekly gross) | −$186,179 |
| **Studio take** | $345,761 |
| Net for this title (surplus + take − cash overrun; wages are studio-wide, excluded) | $352,080 |

**Quality trace** [scores are computed, never rolled]

Meters (0–100): Plot 79.4 · Writing 82.22 · Filming 82.34 · Editing 73.83
Inputs: staff points {"plot":172.13,"writing":206.54,"filming":178.31,"editing":121.21}, Star filming points 69.96 (Star family fit 100), studio Horror level 2 (+6%), era bar x1.07
Base scores: Audience 7.89 / Critic 8 · no weak meter
Combo grades: Audience A (x1.15) / Critic C (x1) · repetition fatigue x0.9 · critic saturation x1
**Final: Audience 8.17 / Critic 7.2 → avg 7.69**

**Opening & viewership trace** [marketing/Fame/reach affect viewers only]

Awareness inputs: base 0.35, marketing 0.25, studioBuzz 0, starFame 0.25, trend 0.4, ipFans 0 → awareness 0.71. Reach cap 332,000 → pool 236,505 → opening 70,952.

| Wk | Viewers | Retention | Driver | Gross | Studio | Distributor |
|---:|---:|---:|---|---:|---:|---:|
| 1 | 70,952 | 1 | opening | $141,904 | $92,238 | $49,666 |
| 2 | 49,610 | 0.7 | critic 7.2 (early buzz) | $99,220 | $64,493 | $34,727 |
| 3 | 34,687 | 0.7 | critic 7.2 (early buzz) | $69,374 | $45,093 | $24,281 |
| 4 | 26,784 | 0.77 | audience 8.17 (word of mouth) | $53,568 | $34,819 | $18,749 |
| 5 | 20,682 | 0.77 | audience 8.17 (word of mouth) | $41,364 | $26,887 | $14,477 |
| 6 | 15,970 | 0.77 | audience 8.17 (word of mouth) | $31,940 | $20,761 | $11,179 |
| 7 | 12,331 | 0.77 | audience 8.17 (word of mouth) | $24,662 | $16,030 | $8,632 |
| 8 | 9,522 | 0.77 | audience 8.17 (word of mouth) | $19,044 | $12,379 | $6,665 |
| 9 | 7,353 | 0.77 | audience 8.17 (word of mouth) | $14,706 | $9,559 | $5,147 |
| 10 | 5,678 | 0.77 | audience 8.17 (word of mouth) | $11,356 | $7,381 | $3,975 |
| 11 | 4,384 | 0.77 | audience 8.17 (word of mouth) | $8,768 | $5,699 | $3,069 |
| 12 | 3,385 | 0.77 | audience 8.17 (word of mouth) | $6,770 | $4,401 | $2,370 |
| 13 | 2,614 | 0.77 | audience 8.17 (word of mouth) | $5,228 | $3,398 | $1,830 |
| 14 | 2,018 | 0.77 | audience 8.17 (word of mouth) | $4,036 | $2,623 | $1,413 |
| 15 | 0 | 0.77 | audience 8.17 (word of mouth) | $0 | $0 | $0 |

**Progression trace**

- Prestige awards: Prestige +50: meters_all_70 (Hollow Rising).; Prestige +75: audience_7_5 (Hollow Rising).
- IP fans: {"before":0,"after":11447,"delta":11447}
- Star career: {"fameDelta":8.6,"relDelta":0.75,"grow":0,"level":6,"reasons":"worked together (+); project boosted their career (+)"}
- Distributor trust: Orbit Releasing earned 181% of its advance back on Hollow Rising with strong reviews (step 0.75)
- Rule labels: LOCKED = causal chain, accounting, fallback/no-campaign, thresholds 4.0/9.0, IP fan inheritance. WORKING ASSUMPTION = all formulas' shapes and numbers.

### Iron Pulse — Comedy + Sports (new)

Released week 112 (year 2.2) · Distributor: XYZ Network · Star: Eli Lind (L4, Fame 48) · IP: Iron Pulse

**Financial waterfall** [LOCKED rules; amounts provisional]

| Item | Amount |
|---|---:|
| Advance received (project reserve, not revenue) | $122,000 |
| Base cost (unavoidable) | −$60,000 |
| Star fee | −$29,723 |
| Marketing campaign | −$8,000 |
| Paid from studio cash (overrun) | $0 |
| **Unused advance kept at completion** | $24,277 |
| Gross from sales (15 weeks) | $514,354 |
| Distributor royalty (42% of weekly gross) | −$216,029 |
| **Studio take** | $298,325 |
| Net for this title (surplus + take − cash overrun; wages are studio-wide, excluded) | $322,603 |

**Quality trace** [scores are computed, never rolled]

Meters (0–100): Plot 79.9 · Writing 82.58 · Filming 81.6 · Editing 74.04
Inputs: staff points {"plot":179.6,"writing":214.14,"filming":183.55,"editing":123.9}, Star filming points 55.44 (Star family fit 84), studio Comedy level 0 (+0%), era bar x1.09
Base scores: Audience 7.88 / Critic 8.02 · no weak meter
Combo grades: Audience C (x1) / Critic B (x1.06) · repetition fatigue x1 · critic saturation x0.9
**Final: Audience 7.88 / Critic 7.65 → avg 7.77**

**Opening & viewership trace** [marketing/Fame/reach affect viewers only]

Awareness inputs: base 0.35, marketing 0.25, studioBuzz 0, starFame 0.23, trend 0.1, ipFans 0 → awareness 0.61. Reach cap 376,000 → pool 228,240 → opening 68,472.

| Wk | Viewers | Retention | Driver | Gross | Studio | Distributor |
|---:|---:|---:|---|---:|---:|---:|
| 1 | 68,472 | 1 | opening | $136,944 | $79,428 | $57,516 |
| 2 | 48,985 | 0.72 | critic 7.65 (early buzz) | $97,970 | $56,823 | $41,147 |
| 3 | 35,044 | 0.72 | critic 7.65 (early buzz) | $70,088 | $40,651 | $29,437 |
| 4 | 26,572 | 0.76 | audience 7.88 (word of mouth) | $53,144 | $30,824 | $22,320 |
| 5 | 20,148 | 0.76 | audience 7.88 (word of mouth) | $40,296 | $23,372 | $16,924 |
| 6 | 15,277 | 0.76 | audience 7.88 (word of mouth) | $30,554 | $17,721 | $12,833 |
| 7 | 11,584 | 0.76 | audience 7.88 (word of mouth) | $23,168 | $13,437 | $9,731 |
| 8 | 8,783 | 0.76 | audience 7.88 (word of mouth) | $17,566 | $10,188 | $7,378 |
| 9 | 6,660 | 0.76 | audience 7.88 (word of mouth) | $13,320 | $7,726 | $5,594 |
| 10 | 5,050 | 0.76 | audience 7.88 (word of mouth) | $10,100 | $5,858 | $4,242 |
| 11 | 3,829 | 0.76 | audience 7.88 (word of mouth) | $7,658 | $4,442 | $3,216 |
| 12 | 2,903 | 0.76 | audience 7.88 (word of mouth) | $5,806 | $3,367 | $2,439 |
| 13 | 2,201 | 0.76 | audience 7.88 (word of mouth) | $4,402 | $2,553 | $1,849 |
| 14 | 1,669 | 0.76 | audience 7.88 (word of mouth) | $3,338 | $1,936 | $1,402 |
| 15 | 0 | 0.76 | audience 7.88 (word of mouth) | $0 | $0 | $0 |

**Progression trace**

- Prestige awards: Prestige +50: meters_all_70 (Iron Pulse).; Prestige +75: audience_7_5 (Iron Pulse).
- IP fans: {"before":0,"after":11398,"delta":11398}
- Star career: {"fameDelta":8.75,"relDelta":0.75,"grow":5,"level":4,"reasons":"worked together (+); project boosted their career (+)"}
- Distributor trust: XYZ Network earned 177% of its advance back on Iron Pulse with strong reviews (step 0.75)
- Rule labels: LOCKED = causal chain, accounting, fallback/no-campaign, thresholds 4.0/9.0, IP fan inheritance. WORKING ASSUMPTION = all formulas' shapes and numbers.

### Silver Protocol — Comedy + Zombies (new)

Released week 128 (year 2.5) · Distributor: Orbit Releasing · Star: Kai Imai (L10, Fame 100) · IP: Silver Protocol

**Financial waterfall** [LOCKED rules; amounts provisional]

| Item | Amount |
|---|---:|
| Advance received (project reserve, not revenue) | $89,000 |
| Base cost (unavoidable) | −$60,000 |
| Star fee | −$83,667 |
| Marketing campaign | −$8,000 |
| Paid from studio cash (overrun) | $62,667 |
| **Unused advance kept at completion** | $0 |
| Gross from sales (15 weeks) | $527,750 |
| Distributor royalty (35% of weekly gross) | −$184,713 |
| **Studio take** | $343,038 |
| Net for this title (surplus + take − cash overrun; wages are studio-wide, excluded) | $280,371 |

**Quality trace** [scores are computed, never rolled]

Meters (0–100): Plot 81.35 · Writing 83.81 · Filming 83.24 · Editing 75.68
Inputs: staff points {"plot":199.37,"writing":236.55,"filming":202.67,"editing":136.75}, Star filming points 67.98 (Star family fit 100), studio Comedy level 1 (+3%), era bar x1.1
Base scores: Audience 8.04 / Critic 8.16 · no weak meter
Combo grades: Audience C (x1) / Critic C (x1) · repetition fatigue x1 · critic saturation x1
**Final: Audience 8.04 / Critic 8.16 → avg 8.1**

**Opening & viewership trace** [marketing/Fame/reach affect viewers only]

Awareness inputs: base 0.35, marketing 0.25, studioBuzz 0, starFame 0.52, trend 0, ipFans 0 → awareness 0.67. Reach cap 332,000 → pool 223,241 → opening 66,972.

| Wk | Viewers | Retention | Driver | Gross | Studio | Distributor |
|---:|---:|---:|---|---:|---:|---:|
| 1 | 66,972 | 1 | opening | $133,944 | $87,064 | $46,880 |
| 2 | 49,141 | 0.73 | critic 8.16 (early buzz) | $98,282 | $63,883 | $34,399 |
| 3 | 36,058 | 0.73 | critic 8.16 (early buzz) | $72,116 | $46,875 | $25,241 |
| 4 | 27,618 | 0.77 | audience 8.04 (word of mouth) | $55,236 | $35,903 | $19,333 |
| 5 | 21,153 | 0.77 | audience 8.04 (word of mouth) | $42,306 | $27,499 | $14,807 |
| 6 | 16,202 | 0.77 | audience 8.04 (word of mouth) | $32,404 | $21,063 | $11,341 |
| 7 | 12,409 | 0.77 | audience 8.04 (word of mouth) | $24,818 | $16,132 | $8,686 |
| 8 | 9,504 | 0.77 | audience 8.04 (word of mouth) | $19,008 | $12,355 | $6,653 |
| 9 | 7,279 | 0.77 | audience 8.04 (word of mouth) | $14,558 | $9,463 | $5,095 |
| 10 | 5,575 | 0.77 | audience 8.04 (word of mouth) | $11,150 | $7,248 | $3,903 |
| 11 | 4,270 | 0.77 | audience 8.04 (word of mouth) | $8,540 | $5,551 | $2,989 |
| 12 | 3,270 | 0.77 | audience 8.04 (word of mouth) | $6,540 | $4,251 | $2,289 |
| 13 | 2,505 | 0.77 | audience 8.04 (word of mouth) | $5,010 | $3,257 | $1,754 |
| 14 | 1,919 | 0.77 | audience 8.04 (word of mouth) | $3,838 | $2,495 | $1,343 |
| 15 | 0 | 0.77 | audience 8.04 (word of mouth) | $0 | $0 | $0 |

**Progression trace**

- Prestige awards: Prestige +50: meters_all_70 (Silver Protocol).; Prestige +75: audience_7_5 (Silver Protocol).
- IP fans: {"before":0,"after":13088,"delta":13088}
- Star career: {"fameDelta":9.88,"relDelta":0.75,"grow":0,"level":8,"reasons":"worked together (+); project boosted their career (+)"}
- Distributor trust: Orbit Releasing earned 208% of its advance back on Silver Protocol with strong reviews (step 0.75)
- Rule labels: LOCKED = causal chain, accounting, fallback/no-campaign, thresholds 4.0/9.0, IP fan inheritance. WORKING ASSUMPTION = all formulas' shapes and numbers.

### Wild Night — Action + Superheroes (new)

Released week 144 (year 2.8) · Distributor: XYZ Network · Star: Eli Lind (L6, Fame 100) · IP: Wild Night

**Financial waterfall** [LOCKED rules; amounts provisional]

| Item | Amount |
|---|---:|
| Advance received (project reserve, not revenue) | $133,000 |
| Base cost (unavoidable) | −$60,000 |
| Star fee | −$49,253 |
| Marketing campaign | −$8,000 |
| Paid from studio cash (overrun) | $0 |
| **Unused advance kept at completion** | $15,747 |
| Gross from sales (15 weeks) | $527,538 |
| Distributor royalty (42% of weekly gross) | −$221,566 |
| **Studio take** | $305,972 |
| Net for this title (surplus + take − cash overrun; wages are studio-wide, excluded) | $321,719 |

**Quality trace** [scores are computed, never rolled]

Meters (0–100): Plot 82.3 · Writing 84.6 · Filming 83.81 · Editing 76.75
Inputs: staff points {"plot":214.88,"writing":253.84,"filming":217.28,"editing":146.69}, Star filming points 67.98 (Star family fit 100), studio Action level 1 (+3%), era bar x1.11
Base scores: Audience 8.12 / Critic 8.25 · no weak meter
Combo grades: Audience C (x1) / Critic A (x1.15) · repetition fatigue x0.9 · critic saturation x1
**Final: Audience 7.31 / Critic 8.54 → avg 7.92**

**Opening & viewership trace** [marketing/Fame/reach affect viewers only]

Awareness inputs: base 0.35, marketing 0.25, studioBuzz 0, starFame 0.37, trend 0, ipFans 0 → awareness 0.62. Reach cap 376,000 → pool 232,902 → opening 69,871.

| Wk | Viewers | Retention | Driver | Gross | Studio | Distributor |
|---:|---:|---:|---|---:|---:|---:|
| 1 | 69,871 | 1 | opening | $139,742 | $81,050 | $58,692 |
| 2 | 52,224 | 0.75 | critic 8.54 (early buzz) | $104,448 | $60,580 | $43,868 |
| 3 | 39,034 | 0.75 | critic 8.54 (early buzz) | $78,068 | $45,279 | $32,789 |
| 4 | 28,529 | 0.73 | audience 7.31 (word of mouth) | $57,058 | $33,094 | $23,964 |
| 5 | 20,851 | 0.73 | audience 7.31 (word of mouth) | $41,702 | $24,187 | $17,515 |
| 6 | 15,240 | 0.73 | audience 7.31 (word of mouth) | $30,480 | $17,678 | $12,802 |
| 7 | 11,139 | 0.73 | audience 7.31 (word of mouth) | $22,278 | $12,921 | $9,357 |
| 8 | 8,141 | 0.73 | audience 7.31 (word of mouth) | $16,282 | $9,444 | $6,838 |
| 9 | 5,950 | 0.73 | audience 7.31 (word of mouth) | $11,900 | $6,902 | $4,998 |
| 10 | 4,349 | 0.73 | audience 7.31 (word of mouth) | $8,698 | $5,045 | $3,653 |
| 11 | 3,179 | 0.73 | audience 7.31 (word of mouth) | $6,358 | $3,688 | $2,670 |
| 12 | 2,323 | 0.73 | audience 7.31 (word of mouth) | $4,646 | $2,695 | $1,951 |
| 13 | 1,698 | 0.73 | audience 7.31 (word of mouth) | $3,396 | $1,970 | $1,426 |
| 14 | 1,241 | 0.73 | audience 7.31 (word of mouth) | $2,482 | $1,440 | $1,042 |
| 15 | 0 | 0.73 | audience 7.31 (word of mouth) | $0 | $0 | $0 |

**Progression trace**

- Prestige awards: Prestige +50: meters_all_70 (Wild Night).; Prestige +85: critic_8_5 (Wild Night).
- IP fans: {"before":0,"after":12323,"delta":12323}
- Star career: {"fameDelta":9.31,"relDelta":0.75,"grow":0,"level":4,"reasons":"worked together (+); project boosted their career (+)"}
- Distributor trust: XYZ Network earned 167% of its advance back on Wild Night with strong reviews (step 0.72)
- Rule labels: LOCKED = causal chain, accounting, fallback/no-campaign, thresholds 4.0/9.0, IP fan inheritance. WORKING ASSUMPTION = all formulas' shapes and numbers.

### Iron Pulse — Horror + Zombies (new)

Released week 160 (year 3.1) · Distributor: Meridian Global · Star: Mo Lowe (L7, Fame 66) · IP: Iron Pulse

**Financial waterfall** [LOCKED rules; amounts provisional]

| Item | Amount |
|---|---:|
| Advance received (project reserve, not revenue) | $89,000 |
| Base cost (unavoidable) | −$60,000 |
| Star fee | −$32,343 |
| Marketing campaign | −$8,000 |
| Paid from studio cash (overrun) | $11,343 |
| **Unused advance kept at completion** | $0 |
| Gross from sales (15 weeks) | $536,620 |
| Distributor royalty (50% of weekly gross) | −$268,310 |
| **Studio take** | $268,310 |
| Net for this title (surplus + take − cash overrun; wages are studio-wide, excluded) | $256,967 |

**Quality trace** [scores are computed, never rolled]

Meters (0–100): Plot 83.73 · Writing 85.81 · Filming 84.7 · Editing 78.24
Inputs: staff points {"plot":240.4,"writing":282.56,"filming":238.37,"editing":161.56}, Star filming points 69.96 (Star family fit 100), studio Horror level 2 (+6%), era bar x1.12
Base scores: Audience 8.25 / Critic 8.38 · no weak meter
Combo grades: Audience D (x0.9) / Critic C (x1) · repetition fatigue x1 · critic saturation x1
**Final: Audience 7.42 / Critic 8.38 → avg 7.9**

**Opening & viewership trace** [marketing/Fame/reach affect viewers only]

Awareness inputs: base 0.35, marketing 0.25, studioBuzz 0, starFame 0.3, trend 0, ipFans 0 → awareness 0.59. Reach cap 400,000 → pool 236,991 → opening 71,097.

| Wk | Viewers | Retention | Driver | Gross | Studio | Distributor |
|---:|---:|---:|---|---:|---:|---:|
| 1 | 71,097 | 1 | opening | $142,194 | $71,097 | $71,097 |
| 2 | 52,731 | 0.74 | critic 8.38 (early buzz) | $105,462 | $52,731 | $52,731 |
| 3 | 39,110 | 0.74 | critic 8.38 (early buzz) | $78,220 | $39,110 | $39,110 |
| 4 | 28,791 | 0.74 | audience 7.42 (word of mouth) | $57,582 | $28,791 | $28,791 |
| 5 | 21,195 | 0.74 | audience 7.42 (word of mouth) | $42,390 | $21,195 | $21,195 |
| 6 | 15,603 | 0.74 | audience 7.42 (word of mouth) | $31,206 | $15,603 | $15,603 |
| 7 | 11,486 | 0.74 | audience 7.42 (word of mouth) | $22,972 | $11,486 | $11,486 |
| 8 | 8,456 | 0.74 | audience 7.42 (word of mouth) | $16,912 | $8,456 | $8,456 |
| 9 | 6,225 | 0.74 | audience 7.42 (word of mouth) | $12,450 | $6,225 | $6,225 |
| 10 | 4,583 | 0.74 | audience 7.42 (word of mouth) | $9,166 | $4,583 | $4,583 |
| 11 | 3,374 | 0.74 | audience 7.42 (word of mouth) | $6,748 | $3,374 | $3,374 |
| 12 | 2,484 | 0.74 | audience 7.42 (word of mouth) | $4,968 | $2,484 | $2,484 |
| 13 | 1,829 | 0.74 | audience 7.42 (word of mouth) | $3,658 | $1,829 | $1,829 |
| 14 | 1,346 | 0.74 | audience 7.42 (word of mouth) | $2,692 | $1,346 | $1,346 |
| 15 | 0 | 0.74 | audience 7.42 (word of mouth) | $0 | $0 | $0 |

**Progression trace**

- Prestige awards: Prestige +50: meters_all_70 (Iron Pulse).
- IP fans: {"before":0,"after":12450,"delta":12450}
- Star career: {"fameDelta":9.3,"relDelta":0.75,"grow":0,"level":6,"reasons":"worked together (+); project boosted their career (+)"}
- Distributor trust: Meridian Global earned 301% of its advance back on Iron Pulse with strong reviews (step 0.75)
- Rule labels: LOCKED = causal chain, accounting, fallback/no-campaign, thresholds 4.0/9.0, IP fan inheritance. WORKING ASSUMPTION = all formulas' shapes and numbers.

### Dead Edge — Comedy + Sports (new)

Released week 176 (year 3.4) · Distributor: XYZ Network · Star: Kai Imai (L10, Fame 100) · IP: Dead Edge

**Financial waterfall** [LOCKED rules; amounts provisional]

| Item | Amount |
|---|---:|
| Advance received (project reserve, not revenue) | $131,000 |
| Base cost (unavoidable) | −$60,000 |
| Star fee | −$88,687 |
| Marketing campaign | −$8,000 |
| Paid from studio cash (overrun) | $25,687 |
| **Unused advance kept at completion** | $0 |
| Gross from sales (15 weeks) | $612,694 |
| Distributor royalty (41% of weekly gross) | −$251,205 |
| **Studio take** | $361,489 |
| Net for this title (surplus + take − cash overrun; wages are studio-wide, excluded) | $335,803 |

**Quality trace** [scores are computed, never rolled]

Meters (0–100): Plot 83.68 · Writing 85.74 · Filming 84.68 · Editing 78.22
Inputs: staff points {"plot":242.14,"writing":283.92,"filming":243.27,"editing":163.1}, Star filming points 67.98 (Star family fit 100), studio Comedy level 1 (+3%), era bar x1.14
Base scores: Audience 8.24 / Critic 8.37 · no weak meter
Combo grades: Audience C (x1) / Critic B (x1.06) · repetition fatigue x0.95 · critic saturation x1
**Final: Audience 7.83 / Critic 8.43 → avg 8.13**

**Opening & viewership trace** [marketing/Fame/reach affect viewers only]

Awareness inputs: base 0.35, marketing 0.25, studioBuzz 0, starFame 0.58, trend 0, ipFans 0 → awareness 0.69. Reach cap 376,000 → pool 259,917 → opening 77,975.

| Wk | Viewers | Retention | Driver | Gross | Studio | Distributor |
|---:|---:|---:|---|---:|---:|---:|
| 1 | 77,975 | 1 | opening | $155,950 | $92,011 | $63,940 |
| 2 | 57,973 | 0.74 | critic 8.43 (early buzz) | $115,946 | $68,408 | $47,538 |
| 3 | 43,102 | 0.74 | critic 8.43 (early buzz) | $86,204 | $50,860 | $35,344 |
| 4 | 32,578 | 0.76 | audience 7.83 (word of mouth) | $65,156 | $38,442 | $26,714 |
| 5 | 24,624 | 0.76 | audience 7.83 (word of mouth) | $49,248 | $29,056 | $20,192 |
| 6 | 18,612 | 0.76 | audience 7.83 (word of mouth) | $37,224 | $21,962 | $15,262 |
| 7 | 14,068 | 0.76 | audience 7.83 (word of mouth) | $28,136 | $16,600 | $11,536 |
| 8 | 10,633 | 0.76 | audience 7.83 (word of mouth) | $21,266 | $12,547 | $8,719 |
| 9 | 8,037 | 0.76 | audience 7.83 (word of mouth) | $16,074 | $9,484 | $6,590 |
| 10 | 6,075 | 0.76 | audience 7.83 (word of mouth) | $12,150 | $7,169 | $4,982 |
| 11 | 4,592 | 0.76 | audience 7.83 (word of mouth) | $9,184 | $5,419 | $3,765 |
| 12 | 3,471 | 0.76 | audience 7.83 (word of mouth) | $6,942 | $4,096 | $2,846 |
| 13 | 2,624 | 0.76 | audience 7.83 (word of mouth) | $5,248 | $3,096 | $2,152 |
| 14 | 1,983 | 0.76 | audience 7.83 (word of mouth) | $3,966 | $2,340 | $1,626 |
| 15 | 0 | 0.76 | audience 7.83 (word of mouth) | $0 | $0 | $0 |

**Progression trace**

- Prestige awards: Prestige +50: meters_all_70 (Dead Edge).; Prestige +75: audience_7_5 (Dead Edge).
- IP fans: {"before":0,"after":15342,"delta":15342}
- Star career: {"fameDelta":10.51,"relDelta":0.75,"grow":0,"level":9,"reasons":"worked together (+); project boosted their career (+)"}
- Distributor trust: XYZ Network earned 192% of its advance back on Dead Edge with strong reviews (step 0.75)
- Rule labels: LOCKED = causal chain, accounting, fallback/no-campaign, thresholds 4.0/9.0, IP fan inheritance. WORKING ASSUMPTION = all formulas' shapes and numbers.

### Silver Shadow — Action + Zombies (new)

Released week 192 (year 3.7) · Distributor: Meridian Global · Star: Eli Lind (L6, Fame 100) · IP: Silver Shadow

**Financial waterfall** [LOCKED rules; amounts provisional]

| Item | Amount |
|---|---:|
| Advance received (project reserve, not revenue) | $107,000 |
| Base cost (unavoidable) | −$60,000 |
| Star fee | −$55,042 |
| Marketing campaign | −$8,000 |
| Paid from studio cash (overrun) | $16,042 |
| **Unused advance kept at completion** | $0 |
| Gross from sales (15 weeks) | $663,604 |
| Distributor royalty (49% of weekly gross) | −$325,166 |
| **Studio take** | $338,438 |
| Net for this title (surplus + take − cash overrun; wages are studio-wide, excluded) | $322,396 |

**Quality trace** [scores are computed, never rolled]

Meters (0–100): Plot 84.99 · Writing 86.86 · Filming 85.57 · Editing 79.57
Inputs: staff points {"plot":270.38,"writing":315.61,"filming":267.52,"editing":178.77}, Star filming points 69.96 (Star family fit 100), studio Action level 2 (+6%), era bar x1.15
Base scores: Audience 8.36 / Critic 8.49 · no weak meter
Combo grades: Audience F (x0.78) / Critic B (x1.06) · repetition fatigue x1 · critic saturation x1
**Final: Audience 6.52 / Critic 9 → avg 7.76**

**Opening & viewership trace** [marketing/Fame/reach affect viewers only]

Awareness inputs: base 0.35, marketing 0.25, studioBuzz 0, starFame 0.42, trend 0.15, ipFans 0 → awareness 0.69. Reach cap 440,000 → pool 303,700 → opening 91,110.

| Wk | Viewers | Retention | Driver | Gross | Studio | Distributor |
|---:|---:|---:|---|---:|---:|---:|
| 1 | 91,110 | 1 | opening | $182,220 | $92,932 | $89,288 |
| 2 | 69,608 | 0.76 | critic 9 (early buzz) | $139,216 | $71,000 | $68,216 |
| 3 | 53,181 | 0.76 | critic 9 (early buzz) | $106,362 | $54,245 | $52,117 |
| 4 | 36,852 | 0.69 | audience 6.52 (word of mouth) | $73,704 | $37,589 | $36,115 |
| 5 | 25,537 | 0.69 | audience 6.52 (word of mouth) | $51,074 | $26,048 | $25,026 |
| 6 | 17,696 | 0.69 | audience 6.52 (word of mouth) | $35,392 | $18,050 | $17,342 |
| 7 | 12,263 | 0.69 | audience 6.52 (word of mouth) | $24,526 | $12,508 | $12,018 |
| 8 | 8,498 | 0.69 | audience 6.52 (word of mouth) | $16,996 | $8,668 | $8,328 |
| 9 | 5,889 | 0.69 | audience 6.52 (word of mouth) | $11,778 | $6,007 | $5,771 |
| 10 | 4,081 | 0.69 | audience 6.52 (word of mouth) | $8,162 | $4,163 | $3,999 |
| 11 | 2,828 | 0.69 | audience 6.52 (word of mouth) | $5,656 | $2,885 | $2,771 |
| 12 | 1,960 | 0.69 | audience 6.52 (word of mouth) | $3,920 | $1,999 | $1,921 |
| 13 | 1,358 | 0.69 | audience 6.52 (word of mouth) | $2,716 | $1,385 | $1,331 |
| 14 | 941 | 0.69 | audience 6.52 (word of mouth) | $1,882 | $960 | $922 |
| 15 | 0 | 0.69 | audience 6.52 (word of mouth) | $0 | $0 | $0 |

**Progression trace**

- Prestige awards: Prestige +50: meters_all_70 (Silver Shadow).; Prestige +85: critic_8_5 (Silver Shadow).
- IP fans: {"before":0,"after":14652,"delta":14652}
- Star career: {"fameDelta":9.5,"relDelta":0.75,"grow":0,"level":4,"reasons":"worked together (+); project boosted their career (+)"}
- Distributor trust: Meridian Global earned 304% of its advance back on Silver Shadow with strong reviews (step 0.75)
- Rule labels: LOCKED = causal chain, accounting, fallback/no-campaign, thresholds 4.0/9.0, IP fan inheritance. WORKING ASSUMPTION = all formulas' shapes and numbers.

### Wild Horizon — Comedy + Superheroes (new)

Released week 208 (year 4.0) · Distributor: XYZ Network · Star: Kai Imai (L10, Fame 100) · IP: Wild Horizon

**Financial waterfall** [LOCKED rules; amounts provisional]

| Item | Amount |
|---|---:|
| Advance received (project reserve, not revenue) | $144,000 |
| Base cost (unavoidable) | −$60,000 |
| Star fee | −$87,366 |
| Marketing campaign | −$8,000 |
| Paid from studio cash (overrun) | $11,366 |
| **Unused advance kept at completion** | $0 |
| Gross from sales (11 weeks) | $752,000 |
| Distributor royalty (39% of weekly gross) | −$293,280 |
| **Studio take** | $458,720 |
| Net for this title (surplus + take − cash overrun; wages are studio-wide, excluded) | $447,354 |

**Quality trace** [scores are computed, never rolled]

Meters (0–100): Plot 85.53 · Writing 87.29 · Filming 85.76 · Editing 79.89
Inputs: staff points {"plot":285.27,"writing":331.28,"filming":276.57,"editing":184.35}, Star filming points 69.96 (Star family fit 100), studio Comedy level 2 (+6%), era bar x1.16
Base scores: Audience 8.39 / Critic 8.53 · no weak meter
Combo grades: Audience C (x1) / Critic A (x1.15) · repetition fatigue x1 · critic saturation x1
**Final: Audience 8.39 / Critic 9.81 → avg 9.1 (HALL OF FAME)**

**Opening & viewership trace** [marketing/Fame/reach affect viewers only]

Awareness inputs: base 0.35, marketing 0.25, studioBuzz 0, starFame 0.6, trend 0.4, ipFans 0 → awareness 0.8. Reach cap 376,000 → pool 300,087 → opening 90,026.

| Wk | Viewers | Retention | Driver | Gross | Studio | Distributor |
|---:|---:|---:|---|---:|---:|---:|
| 1 | 90,026 | 1 | opening | $180,052 | $109,832 | $70,220 |
| 2 | 71,405 | 0.79 | critic 9.81 (early buzz) | $142,810 | $87,114 | $55,696 |
| 3 | 56,636 | 0.79 | critic 9.81 (early buzz) | $113,272 | $69,096 | $44,176 |
| 4 | 44,330 | 0.78 | audience 8.39 (word of mouth) | $88,660 | $54,083 | $34,577 |
| 5 | 34,698 | 0.78 | audience 8.39 (word of mouth) | $69,396 | $42,332 | $27,064 |
| 6 | 27,159 | 0.78 | audience 8.39 (word of mouth) | $54,318 | $33,134 | $21,184 |
| 7 | 21,258 | 0.78 | audience 8.39 (word of mouth) | $42,516 | $25,935 | $16,581 |
| 8 | 16,639 | 0.78 | audience 8.39 (word of mouth) | $33,278 | $20,300 | $12,978 |
| 9 | 13,024 | 0.78 | audience 8.39 (word of mouth) | $26,048 | $15,889 | $10,159 |
| 10 | 825 | 0.78 | audience 8.39 (word of mouth) | $1,650 | $1,007 | $644 |
| 11 | 0 | 0.78 | audience 8.39 (word of mouth) | $0 | $0 | $0 |

**Progression trace**

- Prestige awards: Prestige +50: meters_all_70 (Wild Horizon).; Prestige +75: audience_7_5 (Wild Horizon).; Prestige +85: critic_8_5 (Wild Horizon).; Prestige +200: hall_of_fame (Wild Horizon).
- IP fans: {"before":0,"after":24666,"delta":24666}
- Star career: {"fameDelta":14.65,"relDelta":0.25,"grow":0,"level":9,"reasons":"worked together (+)"}
- Distributor trust: XYZ Network earned 204% of its advance back on Wild Horizon with strong reviews (step 0.75)
- Rule labels: LOCKED = causal chain, accounting, fallback/no-campaign, thresholds 4.0/9.0, IP fan inheritance. WORKING ASSUMPTION = all formulas' shapes and numbers.

### Silver Pulse — Comedy + Superheroes (new)

Released week 224 (year 4.3) · Distributor: Meridian Global · Star: Kai Imai (L10, Fame 100) · IP: Silver Pulse

**Financial waterfall** [LOCKED rules; amounts provisional]

| Item | Amount |
|---|---:|
| Advance received (project reserve, not revenue) | $141,000 |
| Base cost (unavoidable) | −$60,000 |
| Star fee | −$84,334 |
| Marketing campaign | −$8,000 |
| Paid from studio cash (overrun) | $11,334 |
| **Unused advance kept at completion** | $0 |
| Gross from sales (14 weeks) | $800,000 |
| Distributor royalty (45% of weekly gross) | −$360,000 |
| **Studio take** | $440,000 |
| Net for this title (surplus + take − cash overrun; wages are studio-wide, excluded) | $428,666 |

**Quality trace** [scores are computed, never rolled]

Meters (0–100): Plot 85.87 · Writing 87.58 · Filming 86.19 · Editing 80.58
Inputs: staff points {"plot":296.32,"writing":343.84,"filming":293.08,"editing":194.6}, Star filming points 69.96 (Star family fit 100), studio Comedy level 2 (+6%), era bar x1.17
Base scores: Audience 8.44 / Critic 8.57 · no weak meter
Combo grades: Audience C (x1) / Critic A (x1.15) · repetition fatigue x0.95 · critic saturation x1
**Final: Audience 8.02 / Critic 9.37 → avg 8.7**

**Opening & viewership trace** [marketing/Fame/reach affect viewers only]

Awareness inputs: base 0.35, marketing 0.25, studioBuzz 0, starFame 0.6, trend 0.4, ipFans 0 → awareness 0.8. Reach cap 400,000 → pool 319,241 → opening 95,772.

| Wk | Viewers | Retention | Driver | Gross | Studio | Distributor |
|---:|---:|---:|---|---:|---:|---:|
| 1 | 95,772 | 1 | opening | $191,544 | $105,349 | $86,195 |
| 2 | 74,445 | 0.78 | critic 9.37 (early buzz) | $148,890 | $81,890 | $67,001 |
| 3 | 57,868 | 0.78 | critic 9.37 (early buzz) | $115,736 | $63,655 | $52,081 |
| 4 | 44,267 | 0.76 | audience 8.02 (word of mouth) | $88,534 | $48,694 | $39,840 |
| 5 | 33,862 | 0.76 | audience 8.02 (word of mouth) | $67,724 | $37,248 | $30,476 |
| 6 | 25,903 | 0.76 | audience 8.02 (word of mouth) | $51,806 | $28,493 | $23,313 |
| 7 | 19,815 | 0.76 | audience 8.02 (word of mouth) | $39,630 | $21,797 | $17,834 |
| 8 | 15,158 | 0.76 | audience 8.02 (word of mouth) | $30,316 | $16,674 | $13,642 |
| 9 | 11,595 | 0.76 | audience 8.02 (word of mouth) | $23,190 | $12,755 | $10,436 |
| 10 | 8,870 | 0.76 | audience 8.02 (word of mouth) | $17,740 | $9,757 | $7,983 |
| 11 | 6,785 | 0.76 | audience 8.02 (word of mouth) | $13,570 | $7,464 | $6,107 |
| 12 | 5,190 | 0.76 | audience 8.02 (word of mouth) | $10,380 | $5,709 | $4,671 |
| 13 | 470 | 0.76 | audience 8.02 (word of mouth) | $940 | $517 | $423 |
| 14 | 0 | 0.76 | audience 8.02 (word of mouth) | $0 | $0 | $0 |

**Progression trace**

- Prestige awards: Prestige +50: meters_all_70 (Silver Pulse).; Prestige +75: audience_7_5 (Silver Pulse).; Prestige +85: critic_8_5 (Silver Pulse).
- IP fans: {"before":0,"after":23680,"delta":23680}
- Star career: {"fameDelta":13.45,"relDelta":0.25,"grow":0,"level":10,"reasons":"worked together (+)"}
- Distributor trust: Meridian Global earned 255% of its advance back on Silver Pulse with strong reviews (step 0.75)
- Rule labels: LOCKED = causal chain, accounting, fallback/no-campaign, thresholds 4.0/9.0, IP fan inheritance. WORKING ASSUMPTION = all formulas' shapes and numbers.

### Midnight Horizon — Comedy + Superheroes (new)

Released week 240 (year 4.6) · Distributor: XYZ Network · Star: Kai Imai (L10, Fame 100) · IP: Midnight Horizon

**Financial waterfall** [LOCKED rules; amounts provisional]

| Item | Amount |
|---|---:|
| Advance received (project reserve, not revenue) | $149,000 |
| Base cost (unavoidable) | −$60,000 |
| Star fee | −$82,036 |
| Marketing campaign | −$8,000 |
| Paid from studio cash (overrun) | $1,036 |
| **Unused advance kept at completion** | $0 |
| Gross from sales (15 weeks) | $715,432 |
| Distributor royalty (39% of weekly gross) | −$279,018 |
| **Studio take** | $436,414 |
| Net for this title (surplus + take − cash overrun; wages are studio-wide, excluded) | $435,378 |

**Quality trace** [scores are computed, never rolled]

Meters (0–100): Plot 86.33 · Writing 87.97 · Filming 86.45 · Editing 81.04
Inputs: staff points {"plot":311.3,"writing":360.32,"filming":304.94,"editing":202.52}, Star filming points 69.96 (Star family fit 100), studio Comedy level 2 (+6%), era bar x1.18
Base scores: Audience 8.48 / Critic 8.61 · no weak meter
Combo grades: Audience C (x1) / Critic A (x1.15) · repetition fatigue x0.9 · critic saturation x1
**Final: Audience 7.63 / Critic 8.91 → avg 8.27**

**Opening & viewership trace** [marketing/Fame/reach affect viewers only]

Awareness inputs: base 0.35, marketing 0.25, studioBuzz 0, starFame 0.6, trend 0.4, ipFans 0 → awareness 0.8. Reach cap 376,000 → pool 300,087 → opening 90,026.

| Wk | Viewers | Retention | Driver | Gross | Studio | Distributor |
|---:|---:|---:|---|---:|---:|---:|
| 1 | 90,026 | 1 | opening | $180,052 | $109,832 | $70,220 |
| 2 | 68,488 | 0.76 | critic 8.91 (early buzz) | $136,976 | $83,555 | $53,421 |
| 3 | 52,103 | 0.76 | critic 8.91 (early buzz) | $104,206 | $63,566 | $40,640 |
| 4 | 38,881 | 0.75 | audience 7.63 (word of mouth) | $77,762 | $47,435 | $30,327 |
| 5 | 29,015 | 0.75 | audience 7.63 (word of mouth) | $58,030 | $35,398 | $22,632 |
| 6 | 21,652 | 0.75 | audience 7.63 (word of mouth) | $43,304 | $26,415 | $16,889 |
| 7 | 16,158 | 0.75 | audience 7.63 (word of mouth) | $32,316 | $19,713 | $12,603 |
| 8 | 12,058 | 0.75 | audience 7.63 (word of mouth) | $24,116 | $14,711 | $9,405 |
| 9 | 8,998 | 0.75 | audience 7.63 (word of mouth) | $17,996 | $10,978 | $7,018 |
| 10 | 6,715 | 0.75 | audience 7.63 (word of mouth) | $13,430 | $8,192 | $5,238 |
| 11 | 5,011 | 0.75 | audience 7.63 (word of mouth) | $10,022 | $6,113 | $3,909 |
| 12 | 3,739 | 0.75 | audience 7.63 (word of mouth) | $7,478 | $4,562 | $2,916 |
| 13 | 2,790 | 0.75 | audience 7.63 (word of mouth) | $5,580 | $3,404 | $2,176 |
| 14 | 2,082 | 0.75 | audience 7.63 (word of mouth) | $4,164 | $2,540 | $1,624 |
| 15 | 0 | 0.75 | audience 7.63 (word of mouth) | $0 | $0 | $0 |

**Progression trace**

- Prestige awards: Prestige +50: meters_all_70 (Midnight Horizon).; Prestige +75: audience_7_5 (Midnight Horizon).; Prestige +85: critic_8_5 (Midnight Horizon).
- IP fans: {"before":0,"after":18716,"delta":18716}
- Star career: {"fameDelta":11.52,"relDelta":0.25,"grow":0,"level":10,"reasons":"worked together (+)"}
- Distributor trust: XYZ Network earned 187% of its advance back on Midnight Horizon with strong reviews (step 0.75)
- Rule labels: LOCKED = causal chain, accounting, fallback/no-campaign, thresholds 4.0/9.0, IP fan inheritance. WORKING ASSUMPTION = all formulas' shapes and numbers.

### Iron Signal — Horror + Time Travel (new)

Released week 256 (year 4.9) · Distributor: Meridian Global · Star: Mo Lowe (L7, Fame 66) · IP: Iron Signal

**Financial waterfall** [LOCKED rules; amounts provisional]

| Item | Amount |
|---|---:|
| Advance received (project reserve, not revenue) | $109,000 |
| Base cost (unavoidable) | −$60,000 |
| Star fee | −$35,849 |
| Marketing campaign | −$8,000 |
| Paid from studio cash (overrun) | $0 |
| **Unused advance kept at completion** | $5,151 |
| Gross from sales (15 weeks) | $608,364 |
| Distributor royalty (46% of weekly gross) | −$279,847 |
| **Studio take** | $328,517 |
| Net for this title (surplus + take − cash overrun; wages are studio-wide, excluded) | $333,668 |

**Quality trace** [scores are computed, never rolled]

Meters (0–100): Plot 86.74 · Writing 88.3 · Filming 86.66 · Editing 81.51
Inputs: staff points {"plot":325.68,"writing":375.66,"filming":315.86,"editing":211.12}, Star filming points 69.96 (Star family fit 100), studio Horror level 2 (+6%), era bar x1.2
Base scores: Audience 8.51 / Critic 8.65 · no weak meter
Combo grades: Audience F (x0.78) / Critic D (x0.9) · repetition fatigue x1 · critic saturation x1
**Final: Audience 6.64 / Critic 7.78 → avg 7.21**

**Opening & viewership trace** [marketing/Fame/reach affect viewers only]

Awareness inputs: base 0.35, marketing 0.25, studioBuzz 0, starFame 0.35, trend 0.4, ipFans 0 → awareness 0.74. Reach cap 400,000 → pool 296,662 → opening 88,999.

| Wk | Viewers | Retention | Driver | Gross | Studio | Distributor |
|---:|---:|---:|---|---:|---:|---:|
| 1 | 88,999 | 1 | opening | $177,998 | $96,119 | $81,879 |
| 2 | 64,086 | 0.72 | critic 7.78 (early buzz) | $128,172 | $69,213 | $58,959 |
| 3 | 46,147 | 0.72 | critic 7.78 (early buzz) | $92,294 | $49,839 | $42,455 |
| 4 | 32,244 | 0.7 | audience 6.64 (word of mouth) | $64,488 | $34,824 | $29,664 |
| 5 | 22,530 | 0.7 | audience 6.64 (word of mouth) | $45,060 | $24,332 | $20,728 |
| 6 | 15,742 | 0.7 | audience 6.64 (word of mouth) | $31,484 | $17,001 | $14,483 |
| 7 | 10,999 | 0.7 | audience 6.64 (word of mouth) | $21,998 | $11,879 | $10,119 |
| 8 | 7,685 | 0.7 | audience 6.64 (word of mouth) | $15,370 | $8,300 | $7,070 |
| 9 | 5,370 | 0.7 | audience 6.64 (word of mouth) | $10,740 | $5,800 | $4,940 |
| 10 | 3,752 | 0.7 | audience 6.64 (word of mouth) | $7,504 | $4,052 | $3,452 |
| 11 | 2,622 | 0.7 | audience 6.64 (word of mouth) | $5,244 | $2,832 | $2,412 |
| 12 | 1,832 | 0.7 | audience 6.64 (word of mouth) | $3,664 | $1,979 | $1,685 |
| 13 | 1,280 | 0.7 | audience 6.64 (word of mouth) | $2,560 | $1,382 | $1,178 |
| 14 | 894 | 0.7 | audience 6.64 (word of mouth) | $1,788 | $966 | $822 |
| 15 | 0 | 0.7 | audience 6.64 (word of mouth) | $0 | $0 | $0 |

**Progression trace**

- Prestige awards: Prestige +50: meters_all_70 (Iron Signal).
- IP fans: {"before":0,"after":10756,"delta":10756}
- Star career: {"fameDelta":7.4,"relDelta":0.75,"grow":0,"level":7,"reasons":"worked together (+); project boosted their career (+)"}
- Distributor trust: Meridian Global earned 257% of its advance back on Iron Signal with strong reviews (step 0.75)
- Rule labels: LOCKED = causal chain, accounting, fallback/no-campaign, thresholds 4.0/9.0, IP fan inheritance. WORKING ASSUMPTION = all formulas' shapes and numbers.

### Dead Legacy — Action + Time Travel (new)

Released week 272 (year 5.2) · Distributor: Meridian Global · Star: Eli Lind (L6, Fame 100) · IP: Dead Legacy

**Financial waterfall** [LOCKED rules; amounts provisional]

| Item | Amount |
|---|---:|
| Advance received (project reserve, not revenue) | $182,000 |
| Base cost (unavoidable) | −$60,000 |
| Star fee | −$58,436 |
| Marketing campaign | −$8,000 |
| Paid from studio cash (overrun) | $0 |
| **Unused advance kept at completion** | $55,564 |
| Gross from sales (10 weeks) | $880,000 |
| Distributor royalty (43% of weekly gross) | −$378,400 |
| **Studio take** | $501,600 |
| Net for this title (surplus + take − cash overrun; wages are studio-wide, excluded) | $557,164 |

**Quality trace** [scores are computed, never rolled]

Meters (0–100): Plot 87.13 · Writing 88.61 · Filming 86.85 · Editing 81.88
Inputs: staff points {"plot":340.47,"writing":391.34,"filming":326.25,"editing":218.61}, Star filming points 69.96 (Star family fit 100), studio Action level 2 (+6%), era bar x1.21
Base scores: Audience 8.54 / Critic 8.68 · no weak meter
Combo grades: Audience B (x1.06) / Critic A (x1.15) · repetition fatigue x1 · critic saturation x1
**Final: Audience 9.05 / Critic 9.98 → avg 9.52 (HALL OF FAME)**

**Opening & viewership trace** [marketing/Fame/reach affect viewers only]

Awareness inputs: base 0.35, marketing 0.25, studioBuzz 0, starFame 0.48, trend 0.4, ipFans 0 → awareness 0.77. Reach cap 440,000 → pool 339,731 → opening 101,919.

| Wk | Viewers | Retention | Driver | Gross | Studio | Distributor |
|---:|---:|---:|---|---:|---:|---:|
| 1 | 101,919 | 1 | opening | $203,838 | $116,188 | $87,650 |
| 2 | 81,462 | 0.8 | critic 9.98 (early buzz) | $162,924 | $92,867 | $70,057 |
| 3 | 65,111 | 0.8 | critic 9.98 (early buzz) | $130,222 | $74,227 | $55,995 |
| 4 | 53,026 | 0.81 | audience 9.05 (word of mouth) | $106,052 | $60,450 | $45,602 |
| 5 | 43,184 | 0.81 | audience 9.05 (word of mouth) | $86,368 | $49,230 | $37,138 |
| 6 | 35,169 | 0.81 | audience 9.05 (word of mouth) | $70,338 | $40,093 | $30,245 |
| 7 | 28,642 | 0.81 | audience 9.05 (word of mouth) | $57,284 | $32,652 | $24,632 |
| 8 | 23,326 | 0.81 | audience 9.05 (word of mouth) | $46,652 | $26,592 | $20,060 |
| 9 | 8,161 | 0.81 | audience 9.05 (word of mouth) | $16,322 | $9,304 | $7,018 |
| 10 | 0 | 0.81 | audience 9.05 (word of mouth) | $0 | $0 | $0 |

**Progression trace**

- Prestige awards: Prestige +50: meters_all_70 (Dead Legacy).; Prestige +75: audience_7_5 (Dead Legacy).; Prestige +85: critic_8_5 (Dead Legacy).; Prestige +200: hall_of_fame (Dead Legacy).
- IP fans: {"before":0,"after":31821,"delta":31821}
- Star career: {"fameDelta":16.85,"relDelta":0.75,"grow":0,"level":5,"reasons":"worked together (+); project boosted their career (+)"}
- Distributor trust: Meridian Global earned 208% of its advance back on Dead Legacy with strong reviews (step 0.75)
- Rule labels: LOCKED = causal chain, accounting, fallback/no-campaign, thresholds 4.0/9.0, IP fan inheritance. WORKING ASSUMPTION = all formulas' shapes and numbers.

### Lost Signal — Action + Time Travel (new)

Released week 288 (year 5.5) · Distributor: Meridian Global · Star: Eli Lind (L6, Fame 100) · IP: Lost Signal

**Financial waterfall** [LOCKED rules; amounts provisional]

| Item | Amount |
|---|---:|
| Advance received (project reserve, not revenue) | $195,000 |
| Base cost (unavoidable) | −$60,000 |
| Star fee | −$57,665 |
| Marketing campaign | −$8,000 |
| Paid from studio cash (overrun) | $0 |
| **Unused advance kept at completion** | $69,335 |
| Gross from sales (15 weeks) | $819,568 |
| Distributor royalty (43% of weekly gross) | −$352,414 |
| **Studio take** | $467,154 |
| Net for this title (surplus + take − cash overrun; wages are studio-wide, excluded) | $536,488 |

**Quality trace** [scores are computed, never rolled]

Meters (0–100): Plot 87.5 · Writing 88.91 · Filming 86.96 · Editing 82.2
Inputs: staff points {"plot":355.66,"writing":407.42,"filming":333.91,"editing":225.61}, Star filming points 69.96 (Star family fit 100), studio Action level 2 (+6%), era bar x1.22
Base scores: Audience 8.57 / Critic 8.71 · no weak meter
Combo grades: Audience B (x1.06) / Critic A (x1.15) · repetition fatigue x0.95 · critic saturation x0.9
**Final: Audience 8.63 / Critic 8.57 → avg 8.6**

**Opening & viewership trace** [marketing/Fame/reach affect viewers only]

Awareness inputs: base 0.35, marketing 0.25, studioBuzz 0, starFame 0.58, trend 0.1, ipFans 0 → awareness 0.72. Reach cap 440,000 → pool 317,666 → opening 95,300.

| Wk | Viewers | Retention | Driver | Gross | Studio | Distributor |
|---:|---:|---:|---|---:|---:|---:|
| 1 | 95,300 | 1 | opening | $190,600 | $108,642 | $81,958 |
| 2 | 71,334 | 0.75 | critic 8.57 (early buzz) | $142,668 | $81,321 | $61,347 |
| 3 | 53,395 | 0.75 | critic 8.57 (early buzz) | $106,790 | $60,870 | $45,920 |
| 4 | 42,408 | 0.79 | audience 8.63 (word of mouth) | $84,816 | $48,345 | $36,471 |
| 5 | 33,682 | 0.79 | audience 8.63 (word of mouth) | $67,364 | $38,397 | $28,967 |
| 6 | 26,752 | 0.79 | audience 8.63 (word of mouth) | $53,504 | $30,497 | $23,007 |
| 7 | 21,248 | 0.79 | audience 8.63 (word of mouth) | $42,496 | $24,223 | $18,273 |
| 8 | 16,876 | 0.79 | audience 8.63 (word of mouth) | $33,752 | $19,239 | $14,513 |
| 9 | 13,404 | 0.79 | audience 8.63 (word of mouth) | $26,808 | $15,281 | $11,527 |
| 10 | 10,646 | 0.79 | audience 8.63 (word of mouth) | $21,292 | $12,136 | $9,156 |
| 11 | 8,455 | 0.79 | audience 8.63 (word of mouth) | $16,910 | $9,639 | $7,271 |
| 12 | 6,715 | 0.79 | audience 8.63 (word of mouth) | $13,430 | $7,655 | $5,775 |
| 13 | 5,333 | 0.79 | audience 8.63 (word of mouth) | $10,666 | $6,080 | $4,586 |
| 14 | 4,236 | 0.79 | audience 8.63 (word of mouth) | $8,472 | $4,829 | $3,643 |
| 15 | 0 | 0.79 | audience 8.63 (word of mouth) | $0 | $0 | $0 |

**Progression trace**

- Prestige awards: Prestige +50: meters_all_70 (Lost Signal).; Prestige +75: audience_7_5 (Lost Signal).; Prestige +85: critic_8_5 (Lost Signal).
- IP fans: {"before":0,"after":23604,"delta":23604}
- Star career: {"fameDelta":13.18,"relDelta":0.75,"grow":0,"level":5,"reasons":"worked together (+); project boosted their career (+)"}
- Distributor trust: Meridian Global earned 181% of its advance back on Lost Signal with strong reviews (step 0.75)
- Rule labels: LOCKED = causal chain, accounting, fallback/no-campaign, thresholds 4.0/9.0, IP fan inheritance. WORKING ASSUMPTION = all formulas' shapes and numbers.

### Wild Protocol — Action + Sports (new)

Released week 304 (year 5.8) · Distributor: Meridian Global · Star: Eli Lind (L6, Fame 100) · IP: Wild Protocol

**Financial waterfall** [LOCKED rules; amounts provisional]

| Item | Amount |
|---|---:|
| Advance received (project reserve, not revenue) | $195,000 |
| Base cost (unavoidable) | −$60,000 |
| Star fee | −$69,939 |
| Marketing campaign | −$8,000 |
| Paid from studio cash (overrun) | $0 |
| **Unused advance kept at completion** | $57,061 |
| Gross from sales (8 weeks) | $880,000 |
| Distributor royalty (43% of weekly gross) | −$378,400 |
| **Studio take** | $501,600 |
| Net for this title (surplus + take − cash overrun; wages are studio-wide, excluded) | $558,661 |

**Quality trace** [scores are computed, never rolled]

Meters (0–100): Plot 87.81 · Writing 89.19 · Filming 87.44 · Editing 82.78
Inputs: staff points {"plot":369.57,"writing":423.38,"filming":354.01,"editing":237.22}, Star filming points 71.94 (Star family fit 100), studio Action level 3 (+9%), era bar x1.23
Base scores: Audience 8.61 / Critic 8.75 · no weak meter
Combo grades: Audience A (x1.15) / Critic A (x1.15) · repetition fatigue x1 · critic saturation x1
**Final: Audience 9.9 / Critic 10 → avg 9.95 (HALL OF FAME)**

**Opening & viewership trace** [marketing/Fame/reach affect viewers only]

Awareness inputs: base 0.35, marketing 0.25, studioBuzz 0, starFame 0.6, trend 0.4, ipFans 0 → awareness 0.8. Reach cap 440,000 → pool 351,166 → opening 105,350.

| Wk | Viewers | Retention | Driver | Gross | Studio | Distributor |
|---:|---:|---:|---|---:|---:|---:|
| 1 | 105,350 | 1 | opening | $210,700 | $120,099 | $90,601 |
| 2 | 84,280 | 0.8 | critic 10 (early buzz) | $168,560 | $96,079 | $72,481 |
| 3 | 67,424 | 0.8 | critic 10 (early buzz) | $134,848 | $76,863 | $57,985 |
| 4 | 57,661 | 0.86 | audience 9.9 (word of mouth) | $115,322 | $65,734 | $49,588 |
| 5 | 49,312 | 0.86 | audience 9.9 (word of mouth) | $98,624 | $56,216 | $42,408 |
| 6 | 42,172 | 0.86 | audience 9.9 (word of mouth) | $84,344 | $48,076 | $36,268 |
| 7 | 33,801 | 0.86 | audience 9.9 (word of mouth) | $67,602 | $38,533 | $29,069 |
| 8 | 0 | 0.86 | audience 9.9 (word of mouth) | $0 | $0 | $0 |

**Progression trace**

- Prestige awards: Prestige +50: meters_all_70 (Wild Protocol).; Prestige +75: audience_7_5 (Wild Protocol).; Prestige +85: critic_8_5 (Wild Protocol).; Prestige +200: hall_of_fame (Wild Protocol).
- IP fans: {"before":0,"after":34848,"delta":34848}
- Star career: {"fameDelta":18.46,"relDelta":0.25,"grow":0,"level":6,"reasons":"worked together (+)"}
- Distributor trust: Meridian Global earned 194% of its advance back on Wild Protocol with strong reviews (step 0.75)
- Rule labels: LOCKED = causal chain, accounting, fallback/no-campaign, thresholds 4.0/9.0, IP fan inheritance. WORKING ASSUMPTION = all formulas' shapes and numbers.

### Silver Pulse — Action + Sports (new)

Released week 320 (year 6.2) · Distributor: Meridian Global · Star: Eli Lind (L6, Fame 100) · IP: Silver Pulse

**Financial waterfall** [LOCKED rules; amounts provisional]

| Item | Amount |
|---|---:|
| Advance received (project reserve, not revenue) | $180,000 |
| Base cost (unavoidable) | −$60,000 |
| Star fee | −$68,644 |
| Marketing campaign | −$8,000 |
| Paid from studio cash (overrun) | $0 |
| **Unused advance kept at completion** | $43,356 |
| Gross from sales (9 weeks) | $880,000 |
| Distributor royalty (42% of weekly gross) | −$369,600 |
| **Studio take** | $510,400 |
| Net for this title (surplus + take − cash overrun; wages are studio-wide, excluded) | $553,756 |

**Quality trace** [scores are computed, never rolled]

Meters (0–100): Plot 88.11 · Writing 89.44 · Filming 87.63 · Editing 83.03
Inputs: staff points {"plot":384.31,"writing":438.94,"filming":365.75,"editing":243.87}, Star filming points 71.94 (Star family fit 100), studio Action level 3 (+9%), era bar x1.25
Base scores: Audience 8.64 / Critic 8.77 · no weak meter
Combo grades: Audience A (x1.15) / Critic A (x1.15) · repetition fatigue x0.95 · critic saturation x1
**Final: Audience 9.44 / Critic 9.59 → avg 9.52 (HALL OF FAME)**

**Opening & viewership trace** [marketing/Fame/reach affect viewers only]

Awareness inputs: base 0.35, marketing 0.25, studioBuzz 0, starFame 0.6, trend 0.4, ipFans 0 → awareness 0.8. Reach cap 440,000 → pool 351,166 → opening 105,350.

| Wk | Viewers | Retention | Driver | Gross | Studio | Distributor |
|---:|---:|---:|---|---:|---:|---:|
| 1 | 105,350 | 1 | opening | $210,700 | $122,206 | $88,494 |
| 2 | 82,725 | 0.79 | critic 9.59 (early buzz) | $165,450 | $95,961 | $69,489 |
| 3 | 64,959 | 0.79 | critic 9.59 (early buzz) | $129,918 | $75,352 | $54,566 |
| 4 | 54,119 | 0.83 | audience 9.44 (word of mouth) | $108,238 | $62,778 | $45,460 |
| 5 | 45,088 | 0.83 | audience 9.44 (word of mouth) | $90,176 | $52,302 | $37,874 |
| 6 | 37,564 | 0.83 | audience 9.44 (word of mouth) | $75,128 | $43,574 | $31,554 |
| 7 | 31,295 | 0.83 | audience 9.44 (word of mouth) | $62,590 | $36,302 | $26,288 |
| 8 | 18,900 | 0.83 | audience 9.44 (word of mouth) | $37,800 | $21,924 | $15,876 |
| 9 | 0 | 0.83 | audience 9.44 (word of mouth) | $0 | $0 | $0 |

**Progression trace**

- Prestige awards: Prestige +50: meters_all_70 (Silver Pulse).; Prestige +75: audience_7_5 (Silver Pulse).; Prestige +85: critic_8_5 (Silver Pulse).; Prestige +200: hall_of_fame (Silver Pulse).
- IP fans: {"before":0,"after":31821,"delta":31821}
- Star career: {"fameDelta":16.85,"relDelta":0.25,"grow":0,"level":6,"reasons":"worked together (+)"}
- Distributor trust: Meridian Global earned 205% of its advance back on Silver Pulse with strong reviews (step 0.75)
- Rule labels: LOCKED = causal chain, accounting, fallback/no-campaign, thresholds 4.0/9.0, IP fan inheritance. WORKING ASSUMPTION = all formulas' shapes and numbers.

## Cash ledger (studio cash only)

| Week | Kind | Amount | Note |
|---:|---|---:|---|
| 0 | start_cash | $40,000 |  |
| 0 | advance_received | $93,000 | advance from Wolf Pictures (project reserve, not revenue) |
| 0 | advance_spent | $-60,000 | base_cost: unavoidable base cost |
| 7 | advance_spent | $-25,065 | star_fee: Mo Lowe |
| 13 | advance_spent | $-7,935 | campaign: small |
| 13 | campaign | $-65 | small |
| 16 | advance_received | $85,000 | advance from Wolf Pictures (project reserve, not revenue) |
| 16 | advance_spent | $-60,000 | base_cost: unavoidable base cost |
| 23 | advance_spent | $-25,000 | star_fee: Mo Lowe |
| 23 | star_fee | $-65 | Mo Lowe |
| 29 | campaign | $-8,000 | small |
| 32 | hire | $-20,000 | Rae Vale |
| 32 | hire | $-20,000 | Jo Park |
| 32 | advance_received | $76,000 | advance from Wolf Pictures (project reserve, not revenue) |
| 32 | advance_spent | $-60,000 | base_cost: unavoidable base cost |
| 39 | advance_spent | $-16,000 | star_fee: Mo Lowe |
| 39 | star_fee | $-11,012 | Mo Lowe |
| 45 | campaign | $-8,000 | small |
| 48 | hire | $-20,000 | Rae Lind |
| 48 | train | $-15,000 | Rae Vale |
| 48 | advance_received | $100,000 | advance from Wolf Pictures (project reserve, not revenue) |
| 48 | advance_spent | $-60,000 | base_cost: unavoidable base cost |
| 55 | advance_spent | $-40,000 | star_fee: Jo Vale |
| 55 | star_fee | $-39,586 | Jo Vale |
| 61 | campaign | $-8,000 | small |
| 64 | train | $-15,000 | Rae Vale |
| 64 | train | $-15,000 | Jo Park |
| 64 | advance_received | $114,000 | advance from XYZ Network (project reserve, not revenue) |
| 64 | advance_spent | $-60,000 | base_cost: unavoidable base cost |
| 71 | advance_spent | $-46,326 | star_fee: Eli Lind |
| 77 | advance_spent | $-7,674 | campaign: small |
| 77 | campaign | $-326 | small |
| 80 | train | $-15,000 | Rae Lind |
| 80 | train | $-15,000 | Rae Vale |
| 80 | advance_received | $103,000 | advance from Orbit Releasing (project reserve, not revenue) |
| 80 | advance_spent | $-60,000 | base_cost: unavoidable base cost |
| 87 | advance_spent | $-28,681 | star_fee: Mo Lowe |
| 93 | advance_spent | $-8,000 | campaign: small |
| 96 | surplus_transfer | $6,319 | unused advance kept at completion (not sales revenue) |
| 96 | train | $-15,000 | Jo Park |
| 96 | train | $-15,000 | Rae Lind |
| 96 | advance_received | $122,000 | advance from XYZ Network (project reserve, not revenue) |
| 96 | advance_spent | $-60,000 | base_cost: unavoidable base cost |
| 103 | advance_spent | $-29,723 | star_fee: Eli Lind |
| 109 | advance_spent | $-8,000 | campaign: small |
| 112 | surplus_transfer | $24,277 | unused advance kept at completion (not sales revenue) |
| 112 | train | $-15,000 | Rae Vale |
| 112 | train | $-15,000 | Jo Park |
| 112 | advance_received | $89,000 | advance from Orbit Releasing (project reserve, not revenue) |
| 112 | advance_spent | $-60,000 | base_cost: unavoidable base cost |
| 119 | advance_spent | $-29,000 | star_fee: Kai Imai |
| 119 | star_fee | $-54,667 | Kai Imai |
| 125 | campaign | $-8,000 | small |
| 128 | train | $-15,000 | Rae Lind |
| 128 | train | $-15,000 | Sam |
| 128 | advance_received | $133,000 | advance from XYZ Network (project reserve, not revenue) |
| 128 | advance_spent | $-60,000 | base_cost: unavoidable base cost |
| 135 | advance_spent | $-49,253 | star_fee: Eli Lind |
| 141 | advance_spent | $-8,000 | campaign: small |
| 144 | surplus_transfer | $15,747 | unused advance kept at completion (not sales revenue) |
| 144 | train | $-15,000 | Alex |
| 144 | train | $-15,000 | Rae Vale |
| 144 | advance_received | $89,000 | advance from Meridian Global (project reserve, not revenue) |
| 144 | advance_spent | $-60,000 | base_cost: unavoidable base cost |
| 151 | advance_spent | $-29,000 | star_fee: Mo Lowe |
| 151 | star_fee | $-3,343 | Mo Lowe |
| 157 | campaign | $-8,000 | small |
| 160 | train | $-15,000 | Jo Park |
| 160 | train | $-15,000 | Rae Lind |
| 160 | advance_received | $131,000 | advance from XYZ Network (project reserve, not revenue) |
| 160 | advance_spent | $-60,000 | base_cost: unavoidable base cost |
| 167 | advance_spent | $-71,000 | star_fee: Kai Imai |
| 167 | star_fee | $-17,687 | Kai Imai |
| 173 | campaign | $-8,000 | small |
| 176 | train | $-15,000 | Sam |
| 176 | train | $-15,000 | Alex |
| 176 | advance_received | $107,000 | advance from Meridian Global (project reserve, not revenue) |
| 176 | advance_spent | $-60,000 | base_cost: unavoidable base cost |
| 183 | advance_spent | $-47,000 | star_fee: Eli Lind |
| 183 | star_fee | $-8,042 | Eli Lind |
| 189 | campaign | $-8,000 | small |
| 192 | train | $-15,000 | Rae Vale |
| 192 | train | $-15,000 | Jo Park |
| 192 | advance_received | $144,000 | advance from XYZ Network (project reserve, not revenue) |
| 192 | advance_spent | $-60,000 | base_cost: unavoidable base cost |
| 199 | advance_spent | $-84,000 | star_fee: Kai Imai |
| 199 | star_fee | $-3,366 | Kai Imai |
| 205 | campaign | $-8,000 | small |
| 208 | train | $-15,000 | Rae Lind |
| 208 | train | $-15,000 | Sam |
| 208 | advance_received | $141,000 | advance from Meridian Global (project reserve, not revenue) |
| 208 | advance_spent | $-60,000 | base_cost: unavoidable base cost |
| 215 | advance_spent | $-81,000 | star_fee: Kai Imai |
| 215 | star_fee | $-3,334 | Kai Imai |
| 221 | campaign | $-8,000 | small |
| 224 | train | $-15,000 | Alex |
| 224 | train | $-15,000 | Rae Vale |
| 224 | advance_received | $149,000 | advance from XYZ Network (project reserve, not revenue) |
| 224 | advance_spent | $-60,000 | base_cost: unavoidable base cost |
| 231 | advance_spent | $-82,036 | star_fee: Kai Imai |
| 237 | advance_spent | $-6,964 | campaign: small |
| 237 | campaign | $-1,036 | small |
| 240 | train | $-15,000 | Jo Park |
| 240 | train | $-15,000 | Rae Lind |
| 240 | advance_received | $109,000 | advance from Meridian Global (project reserve, not revenue) |
| 240 | advance_spent | $-60,000 | base_cost: unavoidable base cost |
| 247 | advance_spent | $-35,849 | star_fee: Mo Lowe |
| 253 | advance_spent | $-8,000 | campaign: small |
| 256 | surplus_transfer | $5,151 | unused advance kept at completion (not sales revenue) |
| 256 | train | $-15,000 | Sam |
| 256 | train | $-15,000 | Alex |
| 256 | advance_received | $182,000 | advance from Meridian Global (project reserve, not revenue) |
| 256 | advance_spent | $-60,000 | base_cost: unavoidable base cost |
| 263 | advance_spent | $-58,436 | star_fee: Eli Lind |
| 269 | advance_spent | $-8,000 | campaign: small |
| 272 | surplus_transfer | $55,564 | unused advance kept at completion (not sales revenue) |
| 272 | train | $-15,000 | Rae Vale |
| 272 | train | $-15,000 | Jo Park |
| 272 | advance_received | $195,000 | advance from Meridian Global (project reserve, not revenue) |
| 272 | advance_spent | $-60,000 | base_cost: unavoidable base cost |
| 279 | advance_spent | $-57,665 | star_fee: Eli Lind |
| 285 | advance_spent | $-8,000 | campaign: small |
| 288 | surplus_transfer | $69,335 | unused advance kept at completion (not sales revenue) |
| 288 | train | $-15,000 | Rae Lind |
| 288 | train | $-15,000 | Sam |
| 288 | advance_received | $195,000 | advance from Meridian Global (project reserve, not revenue) |
| 288 | advance_spent | $-60,000 | base_cost: unavoidable base cost |
| 295 | advance_spent | $-69,939 | star_fee: Eli Lind |
| 301 | advance_spent | $-8,000 | campaign: small |
| 304 | surplus_transfer | $57,061 | unused advance kept at completion (not sales revenue) |
| 304 | train | $-15,000 | Alex |
| 304 | train | $-15,000 | Rae Vale |
| 304 | advance_received | $180,000 | advance from Meridian Global (project reserve, not revenue) |
| 304 | advance_spent | $-60,000 | base_cost: unavoidable base cost |
| 311 | advance_spent | $-68,644 | star_fee: Eli Lind |
| 317 | advance_spent | $-8,000 | campaign: small |
| 320 | surplus_transfer | $43,356 | unused advance kept at completion (not sales revenue) |
| all | payroll (total) | $-1,554,700 | aggregated |
| all | upkeep (total) | $-197,400 | aggregated |
| all | studio_take (total) | $7,117,676 | aggregated |
