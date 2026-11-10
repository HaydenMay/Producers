# Single career — seed 58, strategy cheap-duds

> **Simulation assumptions, not design locks.** All numbers come from provisional config values. Nothing here is official balance.

- Ruleset: `v9.61-movie-kernel-0.1` · Config: `baseline` (hash `5355fe52`)
- Seed: 58
- Strategy: cheap-duds
- Decisions: 112
- Modelled: movies; distributor advances/royalties/trust; Stars (families, budgets, fallback, callbacks, relationships); marketing + studio buzz; scores + legs; IP fans; Prestige milestones; studio genre levels; trends; staff XP/hire/train; theme research + staff pitches
- **Not modelled:** limited series; TV series/seasons/renewals/hiatus/announcements; streaming service/subscribers; eras beyond a gentle quality bar; studio upgrades/format unlock gates; genre unlocks; late-game concurrency

## Career summary

- Weeks: 92 (1.8 years) · Releases: 5 · Cancellations: 0
- End cash: $424,216 (start $40,000) · Negative-cash weeks: 0
- Prestige: 0 (0 awards)
- Staff: Sam [P 41 W 39 F 32 E 28, XP 800]; Alex [P 31 W 34 F 39 E 37, XP 800]
- Studio genre levels (exact genre): Action xp 4, Comedy xp 1
- IP fans: Broken Rising 281; Last Edge 1,483; Red Pulse 1,057; Midnight Frequency 1,102; Red Legacy 943
- Distributor trust: wolf 1.72, starlight 2.50, xyz 2.50, orbit 2.50, meridian 2.50
- Stars hired: Gus Reyes (L1, Fame 11, rel 1.75); Dee Kerr (L2, Fame 10, rel 1.75); Liv Quinn (L1, Fame 5, rel 1.75); Jo Imai (L3, Fame 4, rel 2.50)

## Releases (full causal trace)

### Broken Rising — Action + Superheroes (new)

Released week 16 (year 0.3) · Distributor: Wolf Pictures · Star: Gus Reyes (L1, Fame 11) · IP: Broken Rising

**Financial waterfall** [LOCKED rules; amounts provisional]

| Item | Amount |
|---|---:|
| Advance received (project reserve, not revenue) | $79,000 |
| Base cost (unavoidable) | −$60,000 |
| Star fee | −$7,471 |
| Marketing campaign | −$0 |
| Paid from studio cash (overrun) | $0 |
| **Unused advance kept at completion** | $11,529 |
| Gross from sales (10 weeks) | $144,896 |
| Distributor royalty (32% of weekly gross) | −$46,367 |
| **Studio take** | $98,529 |
| Net for this title (surplus + take − cash overrun; wages are studio-wide, excluded) | $110,059 |

**Quality trace** [scores are computed, never rolled]

Meters (0–100): Plot 56.36 · Writing 57.64 · Filming 61.37 · Editing 47.65
Inputs: staff points {"plot":54.39,"writing":57.31,"filming":51.4,"editing":36.85}, Star filming points 28.38 (Star family fit 43), studio Action level 0 (+0%), era bar x1.01
Base scores: Audience 5.53 / Critic 5.63 · no weak meter
Combo grades: Audience D (x0.9) / Critic C (x1) · repetition fatigue x1 · critic saturation x1
**Final: Audience 4.97 / Critic 5.63 → avg 5.3**

**Opening & viewership trace** [marketing/Fame/reach affect viewers only]

Awareness inputs: base 0.35, marketing 0, studioBuzz 0, starFame 0.07, trend 0, ipFans 0 → awareness 0.34. Reach cap 264,000 → pool 89,844 → opening 26,953.

| Wk | Viewers | Retention | Driver | Gross | Studio | Distributor |
|---:|---:|---:|---|---:|---:|---:|
| 1 | 26,953 | 1 | opening | $53,906 | $36,656 | $17,250 |
| 2 | 17,322 | 0.64 | critic 5.63 (early buzz) | $34,644 | $23,558 | $11,086 |
| 3 | 11,133 | 0.64 | critic 5.63 (early buzz) | $22,266 | $15,141 | $7,125 |
| 4 | 6,886 | 0.62 | audience 4.97 (word of mouth) | $13,772 | $9,365 | $4,407 |
| 5 | 4,259 | 0.62 | audience 4.97 (word of mouth) | $8,518 | $5,792 | $2,726 |
| 6 | 2,634 | 0.62 | audience 4.97 (word of mouth) | $5,268 | $3,582 | $1,686 |
| 7 | 1,629 | 0.62 | audience 4.97 (word of mouth) | $3,258 | $2,215 | $1,043 |
| 8 | 1,008 | 0.62 | audience 4.97 (word of mouth) | $2,016 | $1,371 | $645 |
| 9 | 624 | 0.62 | audience 4.97 (word of mouth) | $1,248 | $849 | $399 |
| 10 | 0 | 0.62 | audience 4.97 (word of mouth) | $0 | $0 | $0 |

**Progression trace**

- Prestige awards: none (no milestone reached)
- IP fans: {"before":0,"after":348,"delta":348}
- Star career: {"fameDelta":0.49,"relDelta":0.75,"grow":6,"level":1,"reasons":"worked together (+); project boosted their career (+)"}
- Distributor trust: Wolf Pictures earned back 59% of its $79,000 advance on Broken Rising (step -0.27)
- Rule labels: LOCKED = causal chain, accounting, fallback/no-campaign, thresholds 4.0/9.0, IP fan inheritance. WORKING ASSUMPTION = all formulas' shapes and numbers.

### Last Edge — Action + Spies (new)

Released week 32 (year 0.6) · Distributor: Wolf Pictures · Star: Dee Kerr (L2, Fame 10) · IP: Last Edge

**Financial waterfall** [LOCKED rules; amounts provisional]

| Item | Amount |
|---|---:|
| Advance received (project reserve, not revenue) | $98,000 |
| Base cost (unavoidable) | −$60,000 |
| Star fee | −$5,621 |
| Marketing campaign | −$0 |
| Paid from studio cash (overrun) | $0 |
| **Unused advance kept at completion** | $32,379 |
| Gross from sales (13 weeks) | $157,676 |
| Distributor royalty (31% of weekly gross) | −$48,880 |
| **Studio take** | $108,796 |
| Net for this title (surplus + take − cash overrun; wages are studio-wide, excluded) | $141,175 |

**Quality trace** [scores are computed, never rolled]

Meters (0–100): Plot 58.82 · Writing 60.28 · Filming 66.29 · Editing 48.59
Inputs: staff points {"plot":60.87,"writing":64.69,"filming":57.09,"editing":38.74}, Star filming points 42.84 (Star family fit 63), studio Action level 1 (+3%), era bar x1.02
Base scores: Audience 5.81 / Critic 5.89 · no weak meter
Combo grades: Audience A (x1.15) / Critic C (x1) · repetition fatigue x1 · critic saturation x1
**Final: Audience 6.68 / Critic 5.89 → avg 6.29**

**Opening & viewership trace** [marketing/Fame/reach affect viewers only]

Awareness inputs: base 0.35, marketing 0, studioBuzz 0, starFame 0.05, trend 0, ipFans 0 → awareness 0.33. Reach cap 264,000 → pool 86,681 → opening 26,004.

| Wk | Viewers | Retention | Driver | Gross | Studio | Distributor |
|---:|---:|---:|---|---:|---:|---:|
| 1 | 26,004 | 1 | opening | $52,008 | $35,886 | $16,122 |
| 2 | 16,956 | 0.65 | critic 5.89 (early buzz) | $33,912 | $23,399 | $10,513 |
| 3 | 11,056 | 0.65 | critic 5.89 (early buzz) | $22,112 | $15,257 | $6,855 |
| 4 | 7,746 | 0.7 | audience 6.68 (word of mouth) | $15,492 | $10,689 | $4,803 |
| 5 | 5,427 | 0.7 | audience 6.68 (word of mouth) | $10,854 | $7,489 | $3,365 |
| 6 | 3,802 | 0.7 | audience 6.68 (word of mouth) | $7,604 | $5,247 | $2,357 |
| 7 | 2,664 | 0.7 | audience 6.68 (word of mouth) | $5,328 | $3,676 | $1,652 |
| 8 | 1,867 | 0.7 | audience 6.68 (word of mouth) | $3,734 | $2,576 | $1,158 |
| 9 | 1,308 | 0.7 | audience 6.68 (word of mouth) | $2,616 | $1,805 | $811 |
| 10 | 916 | 0.7 | audience 6.68 (word of mouth) | $1,832 | $1,264 | $568 |
| 11 | 642 | 0.7 | audience 6.68 (word of mouth) | $1,284 | $886 | $398 |
| 12 | 450 | 0.7 | audience 6.68 (word of mouth) | $900 | $621 | $279 |
| 13 | 0 | 0.7 | audience 6.68 (word of mouth) | $0 | $0 | $0 |

**Progression trace**

- Prestige awards: none (no milestone reached)
- IP fans: {"before":0,"after":1627,"delta":1627}
- Star career: {"fameDelta":2.22,"relDelta":0.75,"grow":6,"level":2,"reasons":"worked together (+); project boosted their career (+)"}
- Distributor trust: Wolf Pictures earned back 50% of its $98,000 advance on Last Edge (step -0.2)
- Rule labels: LOCKED = causal chain, accounting, fallback/no-campaign, thresholds 4.0/9.0, IP fan inheritance. WORKING ASSUMPTION = all formulas' shapes and numbers.

### Red Pulse — Action + Spies (new)

Released week 48 (year 0.9) · Distributor: Wolf Pictures · Star: Liv Quinn (L1, Fame 5) · IP: Red Pulse

**Financial waterfall** [LOCKED rules; amounts provisional]

| Item | Amount |
|---|---:|
| Advance received (project reserve, not revenue) | $95,000 |
| Base cost (unavoidable) | −$60,000 |
| Star fee | −$3,041 |
| Marketing campaign | −$0 |
| Paid from studio cash (overrun) | $0 |
| **Unused advance kept at completion** | $31,959 |
| Gross from sales (12 weeks) | $141,840 |
| Distributor royalty (32% of weekly gross) | −$45,389 |
| **Studio take** | $96,451 |
| Net for this title (surplus + take − cash overrun; wages are studio-wide, excluded) | $128,410 |

**Quality trace** [scores are computed, never rolled]

Meters (0–100): Plot 60.1 · Writing 61.82 · Filming 62.42 · Editing 50.37
Inputs: staff points {"plot":64.98,"writing":69.85,"filming":61.6,"editing":42.09}, Star filming points 23.82 (Star family fit 35), studio Action level 1 (+3%), era bar x1.04
Base scores: Audience 5.78 / Critic 5.96 · no weak meter
Combo grades: Audience A (x1.15) / Critic C (x1) · repetition fatigue x0.95 · critic saturation x1
**Final: Audience 6.31 / Critic 5.66 → avg 5.99**

**Opening & viewership trace** [marketing/Fame/reach affect viewers only]

Awareness inputs: base 0.35, marketing 0, studioBuzz 0, starFame 0.02, trend 0, ipFans 0 → awareness 0.31. Reach cap 264,000 → pool 81,281 → opening 24,384.

| Wk | Viewers | Retention | Driver | Gross | Studio | Distributor |
|---:|---:|---:|---|---:|---:|---:|
| 1 | 24,384 | 1 | opening | $48,768 | $33,162 | $15,606 |
| 2 | 15,697 | 0.64 | critic 5.66 (early buzz) | $31,394 | $21,348 | $10,046 |
| 3 | 10,105 | 0.64 | critic 5.66 (early buzz) | $20,210 | $13,743 | $6,467 |
| 4 | 6,901 | 0.68 | audience 6.31 (word of mouth) | $13,802 | $9,385 | $4,417 |
| 5 | 4,713 | 0.68 | audience 6.31 (word of mouth) | $9,426 | $6,410 | $3,016 |
| 6 | 3,218 | 0.68 | audience 6.31 (word of mouth) | $6,436 | $4,376 | $2,060 |
| 7 | 2,198 | 0.68 | audience 6.31 (word of mouth) | $4,396 | $2,989 | $1,407 |
| 8 | 1,501 | 0.68 | audience 6.31 (word of mouth) | $3,002 | $2,041 | $961 |
| 9 | 1,025 | 0.68 | audience 6.31 (word of mouth) | $2,050 | $1,394 | $656 |
| 10 | 700 | 0.68 | audience 6.31 (word of mouth) | $1,400 | $952 | $448 |
| 11 | 478 | 0.68 | audience 6.31 (word of mouth) | $956 | $650 | $306 |
| 12 | 0 | 0.68 | audience 6.31 (word of mouth) | $0 | $0 | $0 |

**Progression trace**

- Prestige awards: none (no milestone reached)
- IP fans: {"before":0,"after":1123,"delta":1123}
- Star career: {"fameDelta":1.59,"relDelta":0.75,"grow":6,"level":1,"reasons":"worked together (+); project boosted their career (+)"}
- Distributor trust: Wolf Pictures earned back 48% of its $95,000 advance on Red Pulse (step -0.25)
- Rule labels: LOCKED = causal chain, accounting, fallback/no-campaign, thresholds 4.0/9.0, IP fan inheritance. WORKING ASSUMPTION = all formulas' shapes and numbers.

### Midnight Frequency — Comedy + Spies (new)

Released week 64 (year 1.2) · Distributor: Wolf Pictures · Star: Jo Imai (L3, Fame 4) · IP: Midnight Frequency

**Financial waterfall** [LOCKED rules; amounts provisional]

| Item | Amount |
|---|---:|
| Advance received (project reserve, not revenue) | $78,000 |
| Base cost (unavoidable) | −$60,000 |
| Star fee | −$2,264 |
| Marketing campaign | −$0 |
| Paid from studio cash (overrun) | $0 |
| **Unused advance kept at completion** | $15,737 |
| Gross from sales (11 weeks) | $127,058 |
| Distributor royalty (32% of weekly gross) | −$40,659 |
| **Studio take** | $86,399 |
| Net for this title (surplus + take − cash overrun; wages are studio-wide, excluded) | $102,136 |

**Quality trace** [scores are computed, never rolled]

Meters (0–100): Plot 61 · Writing 62.75 · Filming 63.76 · Editing 50.14
Inputs: staff points {"plot":68.26,"writing":73.54,"filming":62.52,"editing":42.21}, Star filming points 29.04 (Star family fit 44), studio Comedy level 0 (+0%), era bar x1.05
Base scores: Audience 5.84 / Critic 6.04 · no weak meter
Combo grades: Audience C (x1) / Critic B (x1.06) · repetition fatigue x1 · critic saturation x1
**Final: Audience 5.84 / Critic 6.4 → avg 6.12**

**Opening & viewership trace** [marketing/Fame/reach affect viewers only]

Awareness inputs: base 0.35, marketing 0, studioBuzz 0, starFame 0.01, trend 0, ipFans 0 → awareness 0.3. Reach cap 240,000 → pool 71,887 → opening 21,566.

| Wk | Viewers | Retention | Driver | Gross | Studio | Distributor |
|---:|---:|---:|---|---:|---:|---:|
| 1 | 21,566 | 1 | opening | $43,132 | $29,330 | $13,802 |
| 2 | 14,458 | 0.67 | critic 6.4 (early buzz) | $28,916 | $19,663 | $9,253 |
| 3 | 9,693 | 0.67 | critic 6.4 (early buzz) | $19,386 | $13,182 | $6,204 |
| 4 | 6,400 | 0.66 | audience 5.84 (word of mouth) | $12,800 | $8,704 | $4,096 |
| 5 | 4,226 | 0.66 | audience 5.84 (word of mouth) | $8,452 | $5,747 | $2,705 |
| 6 | 2,791 | 0.66 | audience 5.84 (word of mouth) | $5,582 | $3,796 | $1,786 |
| 7 | 1,843 | 0.66 | audience 5.84 (word of mouth) | $3,686 | $2,506 | $1,180 |
| 8 | 1,217 | 0.66 | audience 5.84 (word of mouth) | $2,434 | $1,655 | $779 |
| 9 | 804 | 0.66 | audience 5.84 (word of mouth) | $1,608 | $1,093 | $515 |
| 10 | 531 | 0.66 | audience 5.84 (word of mouth) | $1,062 | $722 | $340 |
| 11 | 0 | 0.66 | audience 5.84 (word of mouth) | $0 | $0 | $0 |

**Progression trace**

- Prestige awards: none (no milestone reached)
- IP fans: {"before":0,"after":1138,"delta":1138}
- Star career: {"fameDelta":1.67,"relDelta":0.75,"grow":6,"level":2,"reasons":"worked together (+); project boosted their career (+)"}
- Distributor trust: Wolf Pictures earned back 52% of its $78,000 advance on Midnight Frequency (step -0.2)
- Rule labels: LOCKED = causal chain, accounting, fallback/no-campaign, thresholds 4.0/9.0, IP fan inheritance. WORKING ASSUMPTION = all formulas' shapes and numbers.

### Red Legacy — Action + Spies (new)

Released week 80 (year 1.5) · Distributor: Wolf Pictures · Star: Jo Imai (L3, Fame 4) · IP: Red Legacy

**Financial waterfall** [LOCKED rules; amounts provisional]

| Item | Amount |
|---|---:|
| Advance received (project reserve, not revenue) | $91,000 |
| Base cost (unavoidable) | −$60,000 |
| Star fee | −$2,264 |
| Marketing campaign | −$0 |
| Paid from studio cash (overrun) | $0 |
| **Unused advance kept at completion** | $28,737 |
| Gross from sales (12 weeks) | $138,970 |
| Distributor royalty (32% of weekly gross) | −$44,470 |
| **Studio take** | $94,500 |
| Net for this title (surplus + take − cash overrun; wages are studio-wide, excluded) | $123,236 |

**Quality trace** [scores are computed, never rolled]

Meters (0–100): Plot 63.26 · Writing 65.11 · Filming 61.48 · Editing 52.24
Inputs: staff points {"plot":76.03,"writing":82.41,"filming":70.07,"editing":46.45}, Star filming points 13.98 (Star family fit 20), studio Action level 2 (+6%), era bar x1.06
Base scores: Audience 5.91 / Critic 6.2 · no weak meter
Combo grades: Audience A (x1.15) / Critic C (x1) · repetition fatigue x0.9 · critic saturation x1
**Final: Audience 6.11 / Critic 5.58 → avg 5.85**

**Opening & viewership trace** [marketing/Fame/reach affect viewers only]

Awareness inputs: base 0.35, marketing 0, studioBuzz 0, starFame 0.02, trend 0, ipFans 0 → awareness 0.31. Reach cap 264,000 → pool 80,919 → opening 24,276.

| Wk | Viewers | Retention | Driver | Gross | Studio | Distributor |
|---:|---:|---:|---|---:|---:|---:|
| 1 | 24,276 | 1 | opening | $48,552 | $33,015 | $15,537 |
| 2 | 15,558 | 0.64 | critic 5.58 (early buzz) | $31,116 | $21,159 | $9,957 |
| 3 | 9,971 | 0.64 | critic 5.58 (early buzz) | $19,942 | $13,561 | $6,381 |
| 4 | 6,713 | 0.67 | audience 6.11 (word of mouth) | $13,426 | $9,130 | $4,296 |
| 5 | 4,520 | 0.67 | audience 6.11 (word of mouth) | $9,040 | $6,147 | $2,893 |
| 6 | 3,043 | 0.67 | audience 6.11 (word of mouth) | $6,086 | $4,138 | $1,948 |
| 7 | 2,049 | 0.67 | audience 6.11 (word of mouth) | $4,098 | $2,787 | $1,311 |
| 8 | 1,380 | 0.67 | audience 6.11 (word of mouth) | $2,760 | $1,877 | $883 |
| 9 | 929 | 0.67 | audience 6.11 (word of mouth) | $1,858 | $1,263 | $595 |
| 10 | 625 | 0.67 | audience 6.11 (word of mouth) | $1,250 | $850 | $400 |
| 11 | 421 | 0.67 | audience 6.11 (word of mouth) | $842 | $573 | $269 |
| 12 | 0 | 0.67 | audience 6.11 (word of mouth) | $0 | $0 | $0 |

**Progression trace**

- Prestige awards: none (no milestone reached)
- IP fans: {"before":0,"after":945,"delta":945}
- Star career: {"fameDelta":1.35,"relDelta":0.75,"grow":6,"level":3,"reasons":"worked together (+); project boosted their career (+)"}
- Distributor trust: Wolf Pictures earned back 49% of its $91,000 advance on Red Legacy (step -0.26)
- Rule labels: LOCKED = causal chain, accounting, fallback/no-campaign, thresholds 4.0/9.0, IP fan inheritance. WORKING ASSUMPTION = all formulas' shapes and numbers.

## Cash ledger (studio cash only)

| Week | Kind | Amount | Note |
|---:|---|---:|---|
| 0 | start_cash | $40,000 |  |
| 0 | advance_received | $79,000 | advance from Wolf Pictures (project reserve, not revenue) |
| 0 | advance_spent | $-60,000 | base_cost: unavoidable base cost |
| 7 | advance_spent | $-7,471 | star_fee: Gus Reyes |
| 16 | surplus_transfer | $11,529 | unused advance kept at completion (not sales revenue) |
| 16 | advance_received | $98,000 | advance from Wolf Pictures (project reserve, not revenue) |
| 16 | advance_spent | $-60,000 | base_cost: unavoidable base cost |
| 23 | advance_spent | $-5,621 | star_fee: Dee Kerr |
| 32 | surplus_transfer | $32,379 | unused advance kept at completion (not sales revenue) |
| 32 | advance_received | $95,000 | advance from Wolf Pictures (project reserve, not revenue) |
| 32 | advance_spent | $-60,000 | base_cost: unavoidable base cost |
| 39 | advance_spent | $-3,041 | star_fee: Liv Quinn |
| 48 | surplus_transfer | $31,959 | unused advance kept at completion (not sales revenue) |
| 48 | advance_received | $78,000 | advance from Wolf Pictures (project reserve, not revenue) |
| 48 | advance_spent | $-60,000 | base_cost: unavoidable base cost |
| 55 | advance_spent | $-2,263 | star_fee: Jo Imai |
| 64 | surplus_transfer | $15,737 | unused advance kept at completion (not sales revenue) |
| 64 | advance_received | $91,000 | advance from Wolf Pictures (project reserve, not revenue) |
| 64 | advance_spent | $-60,000 | base_cost: unavoidable base cost |
| 71 | advance_spent | $-2,263 | star_fee: Jo Imai |
| 80 | surplus_transfer | $28,737 | unused advance kept at completion (not sales revenue) |
| all | payroll (total) | $-165,600 | aggregated |
| all | upkeep (total) | $-55,200 | aggregated |
| all | studio_take (total) | $484,676 | aggregated |
