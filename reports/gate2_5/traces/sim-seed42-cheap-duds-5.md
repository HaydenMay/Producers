# Single career — seed 42, strategy cheap-duds

> **Simulation assumptions, not design locks.** All numbers come from provisional config values. Nothing here is official balance.

- Ruleset: `v9.61-movie-kernel-0.1` · Config: `gate25-candidate` (hash `a2e9d917`)
- Seed: 42
- Strategy: cheap-duds
- Decisions: 115
- Modelled: movies; distributor advances/royalties/trust; Stars (families, budgets, fallback, callbacks, relationships); marketing + studio buzz; scores + legs; IP fans; Prestige milestones; studio genre levels; trends; staff XP/hire/train; theme research + staff pitches
- **Not modelled:** limited series; TV series/seasons/renewals/hiatus/announcements; streaming service/subscribers; eras beyond a gentle quality bar; studio upgrades/format unlock gates; genre unlocks; late-game concurrency

## Career summary

- Weeks: 95 (1.8 years) · Releases: 5 · Cancellations: 0
- End cash: $361,449 (start $40,000) · Negative-cash weeks: 0
- Prestige: 0 (0 awards)
- Staff: Sam [P 41 W 39 F 32 E 28, XP 800]; Alex [P 31 W 34 F 39 E 37, XP 800]
- Studio genre levels (exact genre): Comedy xp 5
- IP fans: Dead Shadow 0; Broken Shadow 986; Iron Edge 774; Red Shadow 705; Hollow Run 1,187
- Distributor trust: wolf 1.90, starlight 2.50, xyz 2.50, orbit 2.50, meridian 2.50
- Stars hired: Gus Park (L3, Fame 6, rel 3.50)

## Releases (full causal trace)

### Dead Shadow — Comedy + Zombies (new)

Released week 16 (year 0.3) · Distributor: Wolf Pictures · Star: Gus Park (L3, Fame 6) · IP: Dead Shadow

**Financial waterfall** [LOCKED rules; amounts provisional]

| Item | Amount |
|---|---:|
| Advance received (project reserve, not revenue) | $71,000 |
| Base cost (unavoidable) | −$60,000 |
| Star fee | −$2,264 |
| Marketing campaign | −$0 |
| Paid from studio cash (overrun) | $0 |
| **Unused advance kept at completion** | $8,737 |
| Gross from sales (10 weeks) | $111,096 |
| Distributor royalty (33% of weekly gross) | −$36,662 |
| **Studio take** | $74,434 |
| Net for this title (surplus + take − cash overrun; wages are studio-wide, excluded) | $83,171 |

**Quality trace** [scores are computed, never rolled]

Meters (0–100): Plot 56.65 · Writing 57.83 · Filming 59.98 · Editing 46.95
Inputs: staff points {"plot":55.04,"writing":57.76,"filming":51.49,"editing":35.83}, Star filming points 23.76 (Star family fit 36), studio Comedy level 0 (+0%), era bar x1.01
Base scores: Audience 5.46 / Critic 5.61 · no weak meter
Combo grades: Audience D (x0.9) / Critic D (x0.9) · repetition fatigue x1 · critic saturation x1
**Final: Audience 4.91 / Critic 5.05 → avg 4.98**

**Opening & viewership trace** [marketing/Fame/reach affect viewers only]

Awareness inputs: base 0.35, marketing 0, studioBuzz 0, starFame 0.01, trend 0, ipFans 0 → awareness 0.3. Reach cap 240,000 → pool 71,887 → opening 21,566.

| Wk | Viewers | Retention | Driver | Gross | Studio | Distributor |
|---:|---:|---:|---|---:|---:|---:|
| 1 | 21,566 | 1 | opening (aware people watching) | $43,132 | $28,898 | $14,234 |
| 2 | 13,379 | 0.62 | critic 5.05: +202 newly aware (buzz) | $26,758 | $17,928 | $8,830 |
| 3 | 8,295 | 0.62 | critic 5.05: +209 newly aware (buzz) | $16,590 | $11,115 | $5,475 |
| 4 | 5,032 | 0.61 | audience 4.91: no word of mouth | $10,064 | $6,743 | $3,321 |
| 5 | 3,084 | 0.61 | audience 4.91: no word of mouth | $6,168 | $4,133 | $2,035 |
| 6 | 1,890 | 0.61 | audience 4.91: no word of mouth | $3,780 | $2,533 | $1,247 |
| 7 | 1,158 | 0.61 | audience 4.91: no word of mouth | $2,316 | $1,552 | $764 |
| 8 | 709 | 0.61 | audience 4.91: no word of mouth | $1,418 | $950 | $468 |
| 9 | 435 | 0.61 | audience 4.91: no word of mouth | $870 | $583 | $287 |
| 10 | 0 | 0 | audience 4.91: no word of mouth | $0 | $0 | $0 |

**Progression trace**

- Prestige awards: none (no milestone reached)
- IP fans: {"before":0,"after":0,"delta":0}
- Star career: {"fameDelta":-0.03,"relDelta":-0.5,"grow":4,"level":1,"reasons":"worked together (+); project hurt their career: Fame fell (-)"}
- Distributor trust: Wolf Pictures earned back 52% of its $71,000 advance on Dead Shadow and reviews were poor (step -0.36)
- Rule labels: LOCKED = causal chain, accounting, fallback/no-campaign, thresholds 4.0/9.0, IP fan inheritance. WORKING ASSUMPTION = all formulas' shapes and numbers.

### Broken Shadow — Comedy + Spies (new)

Released week 32 (year 0.6) · Distributor: Wolf Pictures · Star: Gus Park (L3, Fame 6) · IP: Broken Shadow

**Financial waterfall** [LOCKED rules; amounts provisional]

| Item | Amount |
|---|---:|
| Advance received (project reserve, not revenue) | $77,000 |
| Base cost (unavoidable) | −$60,000 |
| Star fee | −$2,264 |
| Marketing campaign | −$0 |
| Paid from studio cash (overrun) | $0 |
| **Unused advance kept at completion** | $14,737 |
| Gross from sales (14 weeks) | $145,926 |
| Distributor royalty (32% of weekly gross) | −$46,696 |
| **Studio take** | $99,230 |
| Net for this title (surplus + take − cash overrun; wages are studio-wide, excluded) | $113,966 |

**Quality trace** [scores are computed, never rolled]

Meters (0–100): Plot 58.68 · Writing 60.25 · Filming 62.21 · Editing 49.13
Inputs: staff points {"plot":60.54,"writing":64.6,"filming":57.37,"editing":39.59}, Star filming points 26.28 (Star family fit 40), studio Comedy level 1 (+3%), era bar x1.02
Base scores: Audience 5.68 / Critic 5.83 · no weak meter
Combo grades: Audience B (x1.06) / Critic C (x1) · repetition fatigue x1 · critic saturation x1
**Final: Audience 6.02 / Critic 5.83 → avg 5.93**

**Opening & viewership trace** [marketing/Fame/reach affect viewers only]

Awareness inputs: base 0.35, marketing 0, studioBuzz 0, starFame 0.01, trend 0, ipFans 0 → awareness 0.3. Reach cap 240,000 → pool 71,856 → opening 21,557.

| Wk | Viewers | Retention | Driver | Gross | Studio | Distributor |
|---:|---:|---:|---|---:|---:|---:|
| 1 | 21,557 | 1 | opening (aware people watching) | $43,114 | $29,318 | $13,796 |
| 2 | 14,877 | 0.69 | critic 5.83: +3,349 newly aware (buzz) | $29,754 | $20,233 | $9,521 |
| 3 | 10,064 | 0.68 | critic 5.83: +3,403 newly aware (buzz) | $20,128 | $13,687 | $6,441 |
| 4 | 7,439 | 0.74 | audience 6.02: +4,106 newly aware (word of mouth) | $14,878 | $10,117 | $4,761 |
| 5 | 5,440 | 0.73 | audience 6.02: +3,035 newly aware (word of mouth) | $10,880 | $7,398 | $3,482 |
| 6 | 3,977 | 0.73 | audience 6.02: +2,220 newly aware (word of mouth) | $7,954 | $5,409 | $2,545 |
| 7 | 2,908 | 0.73 | audience 6.02: +1,623 newly aware (word of mouth) | $5,816 | $3,955 | $1,861 |
| 8 | 2,126 | 0.73 | audience 6.02: +1,186 newly aware (word of mouth) | $4,252 | $2,891 | $1,361 |
| 9 | 1,555 | 0.73 | audience 6.02: +867 newly aware (word of mouth) | $3,110 | $2,115 | $995 |
| 10 | 1,137 | 0.73 | audience 6.02: +634 newly aware (word of mouth) | $2,274 | $1,546 | $728 |
| 11 | 831 | 0.73 | audience 6.02: +464 newly aware (word of mouth) | $1,662 | $1,130 | $532 |
| 12 | 608 | 0.73 | audience 6.02: +339 newly aware (word of mouth) | $1,216 | $827 | $389 |
| 13 | 444 | 0.73 | audience 6.02: +248 newly aware (word of mouth) | $888 | $604 | $284 |
| 14 | 0 | 0 | audience 6.02: +181 newly aware (word of mouth) | $0 | $0 | $0 |

**Progression trace**

- Prestige awards: none (no milestone reached)
- IP fans: {"before":0,"after":1086,"delta":1086}
- Star career: {"fameDelta":1.52,"relDelta":0.75,"grow":6,"level":2,"reasons":"worked together (+); project boosted their career (+)"}
- Distributor trust: Wolf Pictures earned back 61% of its $77,000 advance on Broken Shadow (step -0.18)
- Rule labels: LOCKED = causal chain, accounting, fallback/no-campaign, thresholds 4.0/9.0, IP fan inheritance. WORKING ASSUMPTION = all formulas' shapes and numbers.

### Iron Edge — Comedy + Spies (new)

Released week 48 (year 0.9) · Distributor: Wolf Pictures · Star: Gus Park (L3, Fame 6) · IP: Iron Edge

**Financial waterfall** [LOCKED rules; amounts provisional]

| Item | Amount |
|---|---:|
| Advance received (project reserve, not revenue) | $78,000 |
| Base cost (unavoidable) | −$60,000 |
| Star fee | −$2,254 |
| Marketing campaign | −$0 |
| Paid from studio cash (overrun) | $0 |
| **Unused advance kept at completion** | $15,746 |
| Gross from sales (13 weeks) | $139,818 |
| Distributor royalty (32% of weekly gross) | −$44,742 |
| **Studio take** | $95,076 |
| Net for this title (surplus + take − cash overrun; wages are studio-wide, excluded) | $110,823 |

**Quality trace** [scores are computed, never rolled]

Meters (0–100): Plot 59.92 · Writing 61.68 · Filming 63.29 · Editing 50.43
Inputs: staff points {"plot":64.49,"writing":69.42,"filming":61.49,"editing":42.19}, Star filming points 27.18 (Star family fit 46), studio Comedy level 1 (+3%), era bar x1.04
Base scores: Audience 5.8 / Critic 5.96 · no weak meter
Combo grades: Audience B (x1.06) / Critic C (x1) · repetition fatigue x0.95 · critic saturation x1
**Final: Audience 5.84 / Critic 5.66 → avg 5.75**

**Opening & viewership trace** [marketing/Fame/reach affect viewers only]

Awareness inputs: base 0.35, marketing 0, studioBuzz 0, starFame 0.01, trend 0, ipFans 0 → awareness 0.31. Reach cap 240,000 → pool 73,383 → opening 22,015.

| Wk | Viewers | Retention | Driver | Gross | Studio | Distributor |
|---:|---:|---:|---|---:|---:|---:|
| 1 | 22,015 | 1 | opening (aware people watching) | $44,030 | $29,940 | $14,090 |
| 2 | 14,827 | 0.67 | critic 5.66: +2,639 newly aware (buzz) | $29,654 | $20,165 | $9,489 |
| 3 | 9,839 | 0.66 | critic 5.66: +2,695 newly aware (buzz) | $19,678 | $13,381 | $6,297 |
| 4 | 7,061 | 0.72 | audience 5.84: +3,306 newly aware (word of mouth) | $14,122 | $9,603 | $4,519 |
| 5 | 5,013 | 0.71 | audience 5.84: +2,372 newly aware (word of mouth) | $10,026 | $6,818 | $3,208 |
| 6 | 3,559 | 0.71 | audience 5.84: +1,684 newly aware (word of mouth) | $7,118 | $4,840 | $2,278 |
| 7 | 2,526 | 0.71 | audience 5.84: +1,196 newly aware (word of mouth) | $5,052 | $3,435 | $1,617 |
| 8 | 1,794 | 0.71 | audience 5.84: +849 newly aware (word of mouth) | $3,588 | $2,440 | $1,148 |
| 9 | 1,273 | 0.71 | audience 5.84: +603 newly aware (word of mouth) | $2,546 | $1,731 | $815 |
| 10 | 904 | 0.71 | audience 5.84: +428 newly aware (word of mouth) | $1,808 | $1,229 | $579 |
| 11 | 642 | 0.71 | audience 5.84: +304 newly aware (word of mouth) | $1,284 | $873 | $411 |
| 12 | 456 | 0.71 | audience 5.84: +216 newly aware (word of mouth) | $912 | $620 | $292 |
| 13 | 0 | 0 | audience 5.84: +153 newly aware (word of mouth) | $0 | $0 | $0 |

**Progression trace**

- Prestige awards: none (no milestone reached)
- IP fans: {"before":0,"after":839,"delta":839}
- Star career: {"fameDelta":1.19,"relDelta":0.75,"grow":6,"level":2,"reasons":"worked together (+); project boosted their career (+)"}
- Distributor trust: Wolf Pictures earned back 57% of its $78,000 advance on Iron Edge (step -0.22)
- Rule labels: LOCKED = causal chain, accounting, fallback/no-campaign, thresholds 4.0/9.0, IP fan inheritance. WORKING ASSUMPTION = all formulas' shapes and numbers.

### Red Shadow — Comedy + Spies (new)

Released week 64 (year 1.2) · Distributor: Wolf Pictures · Star: Gus Park (L3, Fame 6) · IP: Red Shadow

**Financial waterfall** [LOCKED rules; amounts provisional]

| Item | Amount |
|---|---:|
| Advance received (project reserve, not revenue) | $81,000 |
| Base cost (unavoidable) | −$60,000 |
| Star fee | −$2,782 |
| Marketing campaign | −$0 |
| Paid from studio cash (overrun) | $0 |
| **Unused advance kept at completion** | $18,218 |
| Gross from sales (12 weeks) | $137,258 |
| Distributor royalty (32% of weekly gross) | −$43,923 |
| **Studio take** | $93,335 |
| Net for this title (surplus + take − cash overrun; wages are studio-wide, excluded) | $111,554 |

**Quality trace** [scores are computed, never rolled]

Meters (0–100): Plot 62.41 · Writing 64.2 · Filming 65.97 · Editing 51.58
Inputs: staff points {"plot":72.48,"writing":78.26,"filming":68.04,"editing":44.7}, Star filming points 32.86 (Star family fit 52), studio Comedy level 2 (+6%), era bar x1.05
Base scores: Audience 6.01 / Critic 6.19 · no weak meter
Combo grades: Audience B (x1.06) / Critic C (x1) · repetition fatigue x0.9 · critic saturation x1
**Final: Audience 5.74 / Critic 5.58 → avg 5.66**

**Opening & viewership trace** [marketing/Fame/reach affect viewers only]

Awareness inputs: base 0.35, marketing 0, studioBuzz 0, starFame 0.02, trend 0, ipFans 0 → awareness 0.31. Reach cap 240,000 → pool 74,568 → opening 22,370.

| Wk | Viewers | Retention | Driver | Gross | Studio | Distributor |
|---:|---:|---:|---|---:|---:|---:|
| 1 | 22,370 | 1 | opening (aware people watching) | $44,740 | $30,423 | $14,317 |
| 2 | 14,891 | 0.67 | critic 5.58: +2,303 newly aware (buzz) | $29,782 | $20,252 | $9,530 |
| 3 | 9,787 | 0.66 | critic 5.58: +2,358 newly aware (buzz) | $19,574 | $13,310 | $6,264 |
| 4 | 6,901 | 0.71 | audience 5.74: +2,897 newly aware (word of mouth) | $13,802 | $9,385 | $4,417 |
| 5 | 4,819 | 0.7 | audience 5.74: +2,043 newly aware (word of mouth) | $9,638 | $6,554 | $3,084 |
| 6 | 3,365 | 0.7 | audience 5.74: +1,426 newly aware (word of mouth) | $6,730 | $4,576 | $2,154 |
| 7 | 2,350 | 0.7 | audience 5.74: +996 newly aware (word of mouth) | $4,700 | $3,196 | $1,504 |
| 8 | 1,641 | 0.7 | audience 5.74: +696 newly aware (word of mouth) | $3,282 | $2,232 | $1,050 |
| 9 | 1,146 | 0.7 | audience 5.74: +486 newly aware (word of mouth) | $2,292 | $1,559 | $733 |
| 10 | 800 | 0.7 | audience 5.74: +339 newly aware (word of mouth) | $1,600 | $1,088 | $512 |
| 11 | 559 | 0.7 | audience 5.74: +237 newly aware (word of mouth) | $1,118 | $760 | $358 |
| 12 | 0 | 0 | audience 5.74: +165 newly aware (word of mouth) | $0 | $0 | $0 |

**Progression trace**

- Prestige awards: none (no milestone reached)
- IP fans: {"before":0,"after":725,"delta":725}
- Star career: {"fameDelta":1.04,"relDelta":0.75,"grow":6,"level":3,"reasons":"worked together (+); project boosted their career (+)"}
- Distributor trust: Wolf Pictures earned back 54% of its $81,000 advance on Red Shadow (step -0.25)
- Rule labels: LOCKED = causal chain, accounting, fallback/no-campaign, thresholds 4.0/9.0, IP fan inheritance. WORKING ASSUMPTION = all formulas' shapes and numbers.

### Hollow Run — Comedy + Superheroes (new)

Released week 80 (year 1.5) · Distributor: Wolf Pictures · Star: Gus Park (L3, Fame 6) · IP: Hollow Run

**Financial waterfall** [LOCKED rules; amounts provisional]

| Item | Amount |
|---|---:|
| Advance received (project reserve, not revenue) | $67,000 |
| Base cost (unavoidable) | −$60,000 |
| Star fee | −$3,150 |
| Marketing campaign | −$0 |
| Paid from studio cash (overrun) | $0 |
| **Unused advance kept at completion** | $3,850 |
| Gross from sales (15 weeks) | $188,188 |
| Distributor royalty (33% of weekly gross) | −$62,102 |
| **Studio take** | $126,086 |
| Net for this title (surplus + take − cash overrun; wages are studio-wide, excluded) | $129,936 |

**Quality trace** [scores are computed, never rolled]

Meters (0–100): Plot 63.2 · Writing 65.03 · Filming 67.14 · Editing 52.44
Inputs: staff points {"plot":75.84,"writing":82.11,"filming":69.83,"editing":46.82}, Star filming points 37.76 (Star family fit 58), studio Comedy level 2 (+6%), era bar x1.06
Base scores: Audience 6.11 / Critic 6.28 · no weak meter
Combo grades: Audience B (x1.06) / Critic D (x0.9) · repetition fatigue x1 · critic saturation x0.9
**Final: Audience 6.48 / Critic 5.09 → avg 5.79**

**Opening & viewership trace** [marketing/Fame/reach affect viewers only]

Awareness inputs: base 0.35, marketing 0, studioBuzz 0, starFame 0.03, trend 0.1, ipFans 0 → awareness 0.38. Reach cap 240,000 → pool 91,242 → opening 27,373.

| Wk | Viewers | Retention | Driver | Gross | Studio | Distributor |
|---:|---:|---:|---|---:|---:|---:|
| 1 | 27,373 | 1 | opening (aware people watching) | $54,746 | $36,680 | $18,066 |
| 2 | 17,034 | 0.62 | critic 5.09: +321 newly aware (buzz) | $34,068 | $22,826 | $11,242 |
| 3 | 10,574 | 0.62 | critic 5.09: +337 newly aware (buzz) | $21,148 | $14,169 | $6,979 |
| 4 | 8,968 | 0.85 | audience 6.48: +6,260 newly aware (word of mouth) | $17,936 | $12,017 | $5,919 |
| 5 | 7,060 | 0.79 | audience 6.48: +5,309 newly aware (word of mouth) | $14,120 | $9,460 | $4,660 |
| 6 | 5,557 | 0.79 | audience 6.48: +4,180 newly aware (word of mouth) | $11,114 | $7,446 | $3,668 |
| 7 | 4,375 | 0.79 | audience 6.48: +3,290 newly aware (word of mouth) | $8,750 | $5,863 | $2,888 |
| 8 | 3,444 | 0.79 | audience 6.48: +2,590 newly aware (word of mouth) | $6,888 | $4,615 | $2,273 |
| 9 | 2,711 | 0.79 | audience 6.48: +2,039 newly aware (word of mouth) | $5,422 | $3,633 | $1,789 |
| 10 | 2,134 | 0.79 | audience 6.48: +1,605 newly aware (word of mouth) | $4,268 | $2,860 | $1,408 |
| 11 | 1,680 | 0.79 | audience 6.48: +1,263 newly aware (word of mouth) | $3,360 | $2,251 | $1,109 |
| 12 | 1,323 | 0.79 | audience 6.48: +995 newly aware (word of mouth) | $2,646 | $1,773 | $873 |
| 13 | 1,041 | 0.79 | audience 6.48: +783 newly aware (word of mouth) | $2,082 | $1,395 | $687 |
| 14 | 820 | 0.79 | audience 6.48: +616 newly aware (word of mouth) | $1,640 | $1,099 | $541 |
| 15 | 0 | 0 | audience 6.48: +485 newly aware (word of mouth) | $0 | $0 | $0 |

**Progression trace**

- Prestige awards: none (no milestone reached)
- IP fans: {"before":0,"after":1189,"delta":1189}
- Star career: {"fameDelta":1.52,"relDelta":0.75,"grow":6,"level":3,"reasons":"worked together (+); project boosted their career (+)"}
- Distributor trust: Wolf Pictures earned back 93% of its $67,000 advance on Hollow Run (step -0.01)
- Rule labels: LOCKED = causal chain, accounting, fallback/no-campaign, thresholds 4.0/9.0, IP fan inheritance. WORKING ASSUMPTION = all formulas' shapes and numbers.

## Cash ledger (studio cash only)

| Week | Kind | Amount | Note |
|---:|---|---:|---|
| 0 | start_cash | $40,000 |  |
| 0 | advance_received | $71,000 | advance from Wolf Pictures (project reserve, not revenue) |
| 0 | advance_spent | $-60,000 | base_cost: unavoidable base cost |
| 7 | advance_spent | $-2,263 | star_fee: Gus Park |
| 16 | surplus_transfer | $8,737 | unused advance kept at completion (not sales revenue) |
| 16 | advance_received | $77,000 | advance from Wolf Pictures (project reserve, not revenue) |
| 16 | advance_spent | $-60,000 | base_cost: unavoidable base cost |
| 23 | advance_spent | $-2,263 | star_fee: Gus Park |
| 32 | surplus_transfer | $14,737 | unused advance kept at completion (not sales revenue) |
| 32 | advance_received | $78,000 | advance from Wolf Pictures (project reserve, not revenue) |
| 32 | advance_spent | $-60,000 | base_cost: unavoidable base cost |
| 39 | advance_spent | $-2,254 | star_fee: Gus Park |
| 48 | surplus_transfer | $15,746 | unused advance kept at completion (not sales revenue) |
| 48 | advance_received | $81,000 | advance from Wolf Pictures (project reserve, not revenue) |
| 48 | advance_spent | $-60,000 | base_cost: unavoidable base cost |
| 55 | advance_spent | $-2,782 | star_fee: Gus Park |
| 64 | surplus_transfer | $18,218 | unused advance kept at completion (not sales revenue) |
| 64 | advance_received | $67,000 | advance from Wolf Pictures (project reserve, not revenue) |
| 64 | advance_spent | $-60,000 | base_cost: unavoidable base cost |
| 71 | advance_spent | $-3,150 | star_fee: Gus Park |
| 80 | surplus_transfer | $3,850 | unused advance kept at completion (not sales revenue) |
| all | payroll (total) | $-171,000 | aggregated |
| all | upkeep (total) | $-57,000 | aggregated |
| all | studio_take (total) | $488,162 | aggregated |
