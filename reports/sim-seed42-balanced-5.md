# Single career — seed 42, strategy balanced

> **Simulation assumptions, not design locks.** All numbers come from provisional config values. Nothing here is official balance.

- Ruleset: `v9.61-movie-kernel-0.1` · Config: `baseline` (hash `5355fe52`)
- Seed: 42
- Strategy: balanced
- Decisions: 121
- Modelled: movies; distributor advances/royalties/trust; Stars (families, budgets, fallback, callbacks, relationships); marketing + studio buzz; scores + legs; IP fans; Prestige milestones; studio genre levels; trends; staff XP/hire/train; theme research + staff pitches
- **Not modelled:** limited series; TV series/seasons/renewals/hiatus/announcements; streaming service/subscribers; eras beyond a gentle quality bar; studio upgrades/format unlock gates; genre unlocks; late-game concurrency

## Career summary

- Weeks: 95 (1.8 years) · Releases: 5 · Cancellations: 0
- End cash: $855,125 (start $40,000) · Negative-cash weeks: 0
- Prestige: 75 (1 awards)
- Staff: Sam [P 44 W 42 F 35 E 31, XP 800]; Alex [P 34 W 37 F 42 E 40, XP 800]; Kit Lowe [P 30 W 41 F 40 E 29, XP 480]; Fin Lowe [P 42 W 37 F 33 E 36, XP 320]
- Studio genre levels (exact genre): Horror xp 2, Action xp 3
- IP fans: Dead Shadow 2,012; Broken Shadow 2,977; Midnight Echo 5,538; Midnight Pulse 5,876; Lost Protocol 9,943
- Distributor trust: wolf 3.54, starlight 2.50, xyz 2.50, orbit 2.50, meridian 2.50
- Stars hired: Jo Vale (L6, Fame 47, rel 2.50); Dee Lind (L2, Fame 16, rel 1.75); Dee Fox (L1, Fame 11, rel 1.75); Mo Lind (L7, Fame 84, rel 1.75)

## Releases (full causal trace)

### Dead Shadow — Horror + Zombies (new)

Released week 16 (year 0.3) · Distributor: Wolf Pictures · Star: Jo Vale (L6, Fame 47) · IP: Dead Shadow

**Financial waterfall** [LOCKED rules; amounts provisional]

| Item | Amount |
|---|---:|
| Advance received (project reserve, not revenue) | $100,000 |
| Base cost (unavoidable) | −$60,000 |
| Star fee | −$29,239 |
| Marketing campaign | −$8,000 |
| Paid from studio cash (overrun) | $0 |
| **Unused advance kept at completion** | $2,761 |
| Gross from sales (13 weeks) | $261,420 |
| Distributor royalty (31% of weekly gross) | −$81,040 |
| **Studio take** | $180,380 |
| Net for this title (surplus + take − cash overrun; wages are studio-wide, excluded) | $183,141 |

**Quality trace** [scores are computed, never rolled]

Meters (0–100): Plot 56.65 · Writing 57.83 · Filming 68.18 · Editing 46.95
Inputs: staff points {"plot":55.04,"writing":57.76,"filming":51.49,"editing":35.83}, Star filming points 56.1 (Star family fit 85), studio Horror level 0 (+0%), era bar x1.01
Base scores: Audience 5.75 / Critic 5.73 · no weak meter
Combo grades: Audience B (x1.06) / Critic B (x1.06) · repetition fatigue x1 · critic saturation x1
**Final: Audience 6.09 / Critic 6.08 → avg 6.09**

**Opening & viewership trace** [marketing/Fame/reach affect viewers only]

Awareness inputs: base 0.35, marketing 0.25, studioBuzz 0, starFame 0.22, trend 0, ipFans 0 → awareness 0.56. Reach cap 264,000 → pool 147,260 → opening 44,178.

| Wk | Viewers | Retention | Driver | Gross | Studio | Distributor |
|---:|---:|---:|---|---:|---:|---:|
| 1 | 44,178 | 1 | opening | $88,356 | $60,966 | $27,390 |
| 2 | 29,108 | 0.66 | critic 6.08 (early buzz) | $58,216 | $40,169 | $18,047 |
| 3 | 19,179 | 0.66 | critic 6.08 (early buzz) | $38,358 | $26,467 | $11,891 |
| 4 | 12,894 | 0.67 | audience 6.09 (word of mouth) | $25,788 | $17,794 | $7,994 |
| 5 | 8,669 | 0.67 | audience 6.09 (word of mouth) | $17,338 | $11,963 | $5,375 |
| 6 | 5,828 | 0.67 | audience 6.09 (word of mouth) | $11,656 | $8,043 | $3,613 |
| 7 | 3,918 | 0.67 | audience 6.09 (word of mouth) | $7,836 | $5,407 | $2,429 |
| 8 | 2,634 | 0.67 | audience 6.09 (word of mouth) | $5,268 | $3,635 | $1,633 |
| 9 | 1,771 | 0.67 | audience 6.09 (word of mouth) | $3,542 | $2,444 | $1,098 |
| 10 | 1,191 | 0.67 | audience 6.09 (word of mouth) | $2,382 | $1,644 | $738 |
| 11 | 801 | 0.67 | audience 6.09 (word of mouth) | $1,602 | $1,105 | $497 |
| 12 | 539 | 0.67 | audience 6.09 (word of mouth) | $1,078 | $744 | $334 |
| 13 | 0 | 0.67 | audience 6.09 (word of mouth) | $0 | $0 | $0 |

**Progression trace**

- Prestige awards: none (no milestone reached)
- IP fans: {"before":0,"after":2280,"delta":2280}
- Star career: {"fameDelta":2.54,"relDelta":0.75,"grow":6,"level":5,"reasons":"worked together (+); project boosted their career (+)"}
- Distributor trust: Wolf Pictures earned back 81% of its $100,000 advance on Dead Shadow (step -0.04)
- Rule labels: LOCKED = causal chain, accounting, fallback/no-campaign, thresholds 4.0/9.0, IP fan inheritance. WORKING ASSUMPTION = all formulas' shapes and numbers.

### Broken Shadow — Action + Superheroes (new)

Released week 32 (year 0.6) · Distributor: Wolf Pictures · Star: Dee Lind (L2, Fame 16) · IP: Broken Shadow

**Financial waterfall** [LOCKED rules; amounts provisional]

| Item | Amount |
|---|---:|
| Advance received (project reserve, not revenue) | $96,000 |
| Base cost (unavoidable) | −$60,000 |
| Star fee | −$8,809 |
| Marketing campaign | −$20,000 |
| Paid from studio cash (overrun) | $0 |
| **Unused advance kept at completion** | $7,191 |
| Gross from sales (13 weeks) | $353,782 |
| Distributor royalty (31% of weekly gross) | −$109,672 |
| **Studio take** | $244,110 |
| Net for this title (surplus + take − cash overrun; wages are studio-wide, excluded) | $251,301 |

**Quality trace** [scores are computed, never rolled]

Meters (0–100): Plot 57.97 · Writing 59.53 · Filming 63.05 · Editing 48.42
Inputs: staff points {"plot":58.78,"writing":62.69,"filming":55.69,"editing":38.47}, Star filming points 31.02 (Star family fit 47), studio Action level 0 (+0%), era bar x1.02
Base scores: Audience 5.66 / Critic 5.78 · no weak meter
Combo grades: Audience C (x1) / Critic A (x1.15) · repetition fatigue x1 · critic saturation x1
**Final: Audience 5.66 / Critic 6.65 → avg 6.16**

**Opening & viewership trace** [marketing/Fame/reach affect viewers only]

Awareness inputs: base 0.35, marketing 0.55, studioBuzz 0, starFame 0.08, trend 0.4, ipFans 0 → awareness 0.75. Reach cap 264,000 → pool 197,450 → opening 59,235.

| Wk | Viewers | Retention | Driver | Gross | Studio | Distributor |
|---:|---:|---:|---|---:|---:|---:|
| 1 | 59,235 | 1 | opening | $118,470 | $81,744 | $36,726 |
| 2 | 40,244 | 0.68 | critic 6.65 (early buzz) | $80,488 | $55,537 | $24,951 |
| 3 | 27,342 | 0.68 | critic 6.65 (early buzz) | $54,684 | $37,732 | $16,952 |
| 4 | 17,818 | 0.65 | audience 5.66 (word of mouth) | $35,636 | $24,589 | $11,047 |
| 5 | 11,612 | 0.65 | audience 5.66 (word of mouth) | $23,224 | $16,025 | $7,199 |
| 6 | 7,567 | 0.65 | audience 5.66 (word of mouth) | $15,134 | $10,442 | $4,692 |
| 7 | 4,931 | 0.65 | audience 5.66 (word of mouth) | $9,862 | $6,805 | $3,057 |
| 8 | 3,213 | 0.65 | audience 5.66 (word of mouth) | $6,426 | $4,434 | $1,992 |
| 9 | 2,094 | 0.65 | audience 5.66 (word of mouth) | $4,188 | $2,890 | $1,298 |
| 10 | 1,365 | 0.65 | audience 5.66 (word of mouth) | $2,730 | $1,884 | $846 |
| 11 | 890 | 0.65 | audience 5.66 (word of mouth) | $1,780 | $1,228 | $552 |
| 12 | 580 | 0.65 | audience 5.66 (word of mouth) | $1,160 | $800 | $360 |
| 13 | 0 | 0.65 | audience 5.66 (word of mouth) | $0 | $0 | $0 |

**Progression trace**

- Prestige awards: none (no milestone reached)
- IP fans: {"before":0,"after":3283,"delta":3283}
- Star career: {"fameDelta":3.14,"relDelta":0.75,"grow":6,"level":2,"reasons":"worked together (+); project boosted their career (+)"}
- Distributor trust: Wolf Pictures earned 114% of its advance back on Broken Shadow (step 0.17)
- Rule labels: LOCKED = causal chain, accounting, fallback/no-campaign, thresholds 4.0/9.0, IP fan inheritance. WORKING ASSUMPTION = all formulas' shapes and numbers.

### Midnight Echo — Action + Superheroes (new)

Released week 48 (year 0.9) · Distributor: Wolf Pictures · Star: Dee Fox (L1, Fame 11) · IP: Midnight Echo

**Financial waterfall** [LOCKED rules; amounts provisional]

| Item | Amount |
|---|---:|
| Advance received (project reserve, not revenue) | $106,000 |
| Base cost (unavoidable) | −$60,000 |
| Star fee | −$4,504 |
| Marketing campaign | −$20,000 |
| Paid from studio cash (overrun) | $0 |
| **Unused advance kept at completion** | $21,496 |
| Gross from sales (15 weeks) | $384,170 |
| Distributor royalty (31% of weekly gross) | −$119,093 |
| **Studio take** | $265,077 |
| Net for this title (surplus + take − cash overrun; wages are studio-wide, excluded) | $286,573 |

**Quality trace** [scores are computed, never rolled]

Meters (0–100): Plot 67.83 · Writing 71.96 · Filming 71.6 · Editing 59.53
Inputs: staff points {"plot":90.96,"writing":110.72,"filming":97.7,"editing":61.01}, Star filming points 31.98 (Star family fit 47), studio Action level 1 (+3%), era bar x1.04
Base scores: Audience 6.69 / Critic 6.86 · no weak meter
Combo grades: Audience C (x1) / Critic A (x1.15) · repetition fatigue x0.95 · critic saturation x1
**Final: Audience 6.35 / Critic 7.49 → avg 6.92**

**Opening & viewership trace** [marketing/Fame/reach affect viewers only]

Awareness inputs: base 0.35, marketing 0.55, studioBuzz 0, starFame 0.04, trend 0.4, ipFans 0 → awareness 0.74. Reach cap 264,000 → pool 194,596 → opening 58,379.

| Wk | Viewers | Retention | Driver | Gross | Studio | Distributor |
|---:|---:|---:|---|---:|---:|---:|
| 1 | 58,379 | 1 | opening | $116,758 | $80,563 | $36,195 |
| 2 | 41,428 | 0.71 | critic 7.49 (early buzz) | $82,856 | $57,171 | $25,685 |
| 3 | 29,399 | 0.71 | critic 7.49 (early buzz) | $58,798 | $40,571 | $18,227 |
| 4 | 20,132 | 0.68 | audience 6.35 (word of mouth) | $40,264 | $27,782 | $12,482 |
| 5 | 13,786 | 0.68 | audience 6.35 (word of mouth) | $27,572 | $19,025 | $8,547 |
| 6 | 9,441 | 0.68 | audience 6.35 (word of mouth) | $18,882 | $13,029 | $5,853 |
| 7 | 6,465 | 0.68 | audience 6.35 (word of mouth) | $12,930 | $8,922 | $4,008 |
| 8 | 4,427 | 0.68 | audience 6.35 (word of mouth) | $8,854 | $6,109 | $2,745 |
| 9 | 3,032 | 0.68 | audience 6.35 (word of mouth) | $6,064 | $4,184 | $1,880 |
| 10 | 2,076 | 0.68 | audience 6.35 (word of mouth) | $4,152 | $2,865 | $1,287 |
| 11 | 1,422 | 0.68 | audience 6.35 (word of mouth) | $2,844 | $1,962 | $882 |
| 12 | 974 | 0.68 | audience 6.35 (word of mouth) | $1,948 | $1,344 | $604 |
| 13 | 667 | 0.68 | audience 6.35 (word of mouth) | $1,334 | $920 | $414 |
| 14 | 457 | 0.68 | audience 6.35 (word of mouth) | $914 | $631 | $283 |
| 15 | 0 | 0.68 | audience 6.35 (word of mouth) | $0 | $0 | $0 |

**Progression trace**

- Prestige awards: none (no milestone reached)
- IP fans: {"before":0,"after":5901,"delta":5901}
- Star career: {"fameDelta":5.39,"relDelta":0.75,"grow":4,"level":1,"reasons":"worked together (+); project boosted their career (+)"}
- Distributor trust: Wolf Pictures earned 112% of its advance back on Midnight Echo (step 0.26)
- Rule labels: LOCKED = causal chain, accounting, fallback/no-campaign, thresholds 4.0/9.0, IP fan inheritance. WORKING ASSUMPTION = all formulas' shapes and numbers.

### Midnight Pulse — Action + Superheroes (new)

Released week 64 (year 1.2) · Distributor: Wolf Pictures · Star: Mo Lind (L7, Fame 84) · IP: Midnight Pulse

**Financial waterfall** [LOCKED rules; amounts provisional]

| Item | Amount |
|---|---:|
| Advance received (project reserve, not revenue) | $115,000 |
| Base cost (unavoidable) | −$60,000 |
| Star fee | −$89,738 |
| Marketing campaign | −$20,000 |
| Paid from studio cash (overrun) | $54,738 |
| **Unused advance kept at completion** | $0 |
| Gross from sales (15 weeks) | $401,500 |
| Distributor royalty (31% of weekly gross) | −$124,465 |
| **Studio take** | $277,035 |
| Net for this title (surplus + take − cash overrun; wages are studio-wide, excluded) | $222,297 |

**Quality trace** [scores are computed, never rolled]

Meters (0–100): Plot 76.12 · Writing 78.31 · Filming 79.16 · Editing 67.15
Inputs: staff points {"plot":139.17,"writing":157.63,"filming":129.73,"editing":85.81}, Star filming points 67.98 (Star family fit 100), studio Action level 1 (+3%), era bar x1.05
Base scores: Audience 7.44 / Critic 7.6 · no weak meter
Combo grades: Audience C (x1) / Critic A (x1.15) · repetition fatigue x0.9 · critic saturation x0.9
**Final: Audience 6.69 / Critic 7.08 → avg 6.89**

**Opening & viewership trace** [marketing/Fame/reach affect viewers only]

Awareness inputs: base 0.35, marketing 0.55, studioBuzz 0, starFame 0.47, trend 0.1, ipFans 0 → awareness 0.77. Reach cap 264,000 → pool 203,542 → opening 61,063.

| Wk | Viewers | Retention | Driver | Gross | Studio | Distributor |
|---:|---:|---:|---|---:|---:|---:|
| 1 | 61,063 | 1 | opening | $122,126 | $84,267 | $37,859 |
| 2 | 42,431 | 0.69 | critic 7.08 (early buzz) | $84,862 | $58,555 | $26,307 |
| 3 | 29,484 | 0.69 | critic 7.08 (early buzz) | $58,968 | $40,688 | $18,280 |
| 4 | 20,672 | 0.7 | audience 6.69 (word of mouth) | $41,344 | $28,527 | $12,817 |
| 5 | 14,494 | 0.7 | audience 6.69 (word of mouth) | $28,988 | $20,002 | $8,986 |
| 6 | 10,162 | 0.7 | audience 6.69 (word of mouth) | $20,324 | $14,024 | $6,300 |
| 7 | 7,125 | 0.7 | audience 6.69 (word of mouth) | $14,250 | $9,833 | $4,418 |
| 8 | 4,995 | 0.7 | audience 6.69 (word of mouth) | $9,990 | $6,893 | $3,097 |
| 9 | 3,502 | 0.7 | audience 6.69 (word of mouth) | $7,004 | $4,833 | $2,171 |
| 10 | 2,455 | 0.7 | audience 6.69 (word of mouth) | $4,910 | $3,388 | $1,522 |
| 11 | 1,721 | 0.7 | audience 6.69 (word of mouth) | $3,442 | $2,375 | $1,067 |
| 12 | 1,207 | 0.7 | audience 6.69 (word of mouth) | $2,414 | $1,666 | $748 |
| 13 | 846 | 0.7 | audience 6.69 (word of mouth) | $1,692 | $1,167 | $525 |
| 14 | 593 | 0.7 | audience 6.69 (word of mouth) | $1,186 | $818 | $368 |
| 15 | 0 | 0.7 | audience 6.69 (word of mouth) | $0 | $0 | $0 |

**Progression trace**

- Prestige awards: none (no milestone reached)
- IP fans: {"before":0,"after":6071,"delta":6071}
- Star career: {"fameDelta":5.41,"relDelta":0.75,"grow":0,"level":7,"reasons":"worked together (+); project boosted their career (+)"}
- Distributor trust: Wolf Pictures earned 108% of its advance back on Midnight Pulse (step 0.23)
- Rule labels: LOCKED = causal chain, accounting, fallback/no-campaign, thresholds 4.0/9.0, IP fan inheritance. WORKING ASSUMPTION = all formulas' shapes and numbers.

### Lost Protocol — Horror + Zombies (new)

Released week 80 (year 1.5) · Distributor: Wolf Pictures · Star: Jo Vale (L6, Fame 47) · IP: Lost Protocol

**Financial waterfall** [LOCKED rules; amounts provisional]

| Item | Amount |
|---|---:|
| Advance received (project reserve, not revenue) | $110,000 |
| Base cost (unavoidable) | −$60,000 |
| Star fee | −$30,850 |
| Marketing campaign | −$20,000 |
| Paid from studio cash (overrun) | $850 |
| **Unused advance kept at completion** | $0 |
| Gross from sales (15 weeks) | $459,520 |
| Distributor royalty (30% of weekly gross) | −$137,856 |
| **Studio take** | $321,664 |
| Net for this title (surplus + take − cash overrun; wages are studio-wide, excluded) | $320,814 |

**Quality trace** [scores are computed, never rolled]

Meters (0–100): Plot 77.52 · Writing 79.67 · Filming 79.69 · Editing 69.17
Inputs: staff points {"plot":152.31,"writing":173.02,"filming":144.67,"editing":95.26}, Star filming points 61.86 (Star family fit 91), studio Horror level 1 (+3%), era bar x1.06
Base scores: Audience 7.57 / Critic 7.73 · no weak meter
Combo grades: Audience B (x1.06) / Critic B (x1.06) · repetition fatigue x0.95 · critic saturation x1
**Final: Audience 7.62 / Critic 7.79 → avg 7.71**

**Opening & viewership trace** [marketing/Fame/reach affect viewers only]

Awareness inputs: base 0.35, marketing 0.55, studioBuzz 0, starFame 0.23, trend 0.4, ipFans 0 → awareness 0.78. Reach cap 264,000 → pool 206,905 → opening 62,072.

| Wk | Viewers | Retention | Driver | Gross | Studio | Distributor |
|---:|---:|---:|---|---:|---:|---:|
| 1 | 62,072 | 1 | opening | $124,144 | $86,901 | $37,243 |
| 2 | 44,719 | 0.72 | critic 7.79 (early buzz) | $89,438 | $62,607 | $26,831 |
| 3 | 32,217 | 0.72 | critic 7.79 (early buzz) | $64,434 | $45,104 | $19,330 |
| 4 | 24,026 | 0.75 | audience 7.62 (word of mouth) | $48,052 | $33,636 | $14,416 |
| 5 | 17,918 | 0.75 | audience 7.62 (word of mouth) | $35,836 | $25,085 | $10,751 |
| 6 | 13,363 | 0.75 | audience 7.62 (word of mouth) | $26,726 | $18,708 | $8,018 |
| 7 | 9,966 | 0.75 | audience 7.62 (word of mouth) | $19,932 | $13,952 | $5,980 |
| 8 | 7,432 | 0.75 | audience 7.62 (word of mouth) | $14,864 | $10,405 | $4,459 |
| 9 | 5,542 | 0.75 | audience 7.62 (word of mouth) | $11,084 | $7,759 | $3,325 |
| 10 | 4,133 | 0.75 | audience 7.62 (word of mouth) | $8,266 | $5,786 | $2,480 |
| 11 | 3,082 | 0.75 | audience 7.62 (word of mouth) | $6,164 | $4,315 | $1,849 |
| 12 | 2,298 | 0.75 | audience 7.62 (word of mouth) | $4,596 | $3,217 | $1,379 |
| 13 | 1,714 | 0.75 | audience 7.62 (word of mouth) | $3,428 | $2,400 | $1,028 |
| 14 | 1,278 | 0.75 | audience 7.62 (word of mouth) | $2,556 | $1,789 | $767 |
| 15 | 0 | 0.75 | audience 7.62 (word of mouth) | $0 | $0 | $0 |

**Progression trace**

- Prestige awards: Prestige +75: audience_7_5 (Lost Protocol).
- IP fans: {"before":0,"after":9962,"delta":9962}
- Star career: {"fameDelta":8.2,"relDelta":0.75,"grow":6,"level":6,"reasons":"worked together (+); project boosted their career (+)"}
- Distributor trust: Wolf Pictures earned 125% of its advance back on Lost Protocol with strong reviews (step 0.45)
- Rule labels: LOCKED = causal chain, accounting, fallback/no-campaign, thresholds 4.0/9.0, IP fan inheritance. WORKING ASSUMPTION = all formulas' shapes and numbers.

## Cash ledger (studio cash only)

| Week | Kind | Amount | Note |
|---:|---|---:|---|
| 0 | start_cash | $40,000 |  |
| 0 | advance_received | $100,000 | advance from Wolf Pictures (project reserve, not revenue) |
| 0 | advance_spent | $-60,000 | base_cost: unavoidable base cost |
| 7 | advance_spent | $-29,239 | star_fee: Jo Vale |
| 13 | advance_spent | $-8,000 | campaign: small |
| 16 | surplus_transfer | $2,761 | unused advance kept at completion (not sales revenue) |
| 16 | advance_received | $96,000 | advance from Wolf Pictures (project reserve, not revenue) |
| 16 | advance_spent | $-60,000 | base_cost: unavoidable base cost |
| 23 | advance_spent | $-8,809 | star_fee: Dee Lind |
| 29 | advance_spent | $-20,000 | campaign: medium |
| 32 | surplus_transfer | $7,191 | unused advance kept at completion (not sales revenue) |
| 32 | hire | $-20,000 | Kit Lowe |
| 32 | train | $-15,000 | Kit Lowe |
| 32 | advance_received | $106,000 | advance from Wolf Pictures (project reserve, not revenue) |
| 32 | advance_spent | $-60,000 | base_cost: unavoidable base cost |
| 39 | advance_spent | $-4,504 | star_fee: Dee Fox |
| 45 | advance_spent | $-20,000 | campaign: medium |
| 48 | surplus_transfer | $21,496 | unused advance kept at completion (not sales revenue) |
| 48 | hire | $-20,000 | Fin Lowe |
| 48 | train | $-15,000 | Fin Lowe |
| 48 | advance_received | $115,000 | advance from Wolf Pictures (project reserve, not revenue) |
| 48 | advance_spent | $-60,000 | base_cost: unavoidable base cost |
| 55 | advance_spent | $-55,000 | star_fee: Mo Lind |
| 55 | star_fee | $-34,738 | Mo Lind |
| 61 | campaign | $-20,000 | medium |
| 64 | train | $-15,000 | Sam |
| 64 | train | $-15,000 | Alex |
| 64 | advance_received | $110,000 | advance from Wolf Pictures (project reserve, not revenue) |
| 64 | advance_spent | $-60,000 | base_cost: unavoidable base cost |
| 71 | advance_spent | $-30,850 | star_fee: Jo Vale |
| 77 | advance_spent | $-19,150 | campaign: medium |
| 77 | campaign | $-850 | medium |
| all | payroll (total) | $-292,000 | aggregated |
| all | upkeep (total) | $-57,000 | aggregated |
| all | studio_take (total) | $1,288,266 | aggregated |
