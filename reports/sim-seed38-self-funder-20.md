# Single career — seed 38, strategy self-funder

> **Simulation assumptions, not design locks.** All numbers come from provisional config values. Nothing here is official balance.

- Ruleset: `v9.61-movie-kernel-0.1` · Config: `baseline` (hash `5355fe52`)
- Seed: 38
- Strategy: self-funder
- Decisions: 430
- Modelled: movies; distributor advances/royalties/trust; Stars (families, budgets, fallback, callbacks, relationships); marketing + studio buzz; scores + legs; IP fans; Prestige milestones; studio genre levels; trends; staff XP/hire/train; theme research + staff pitches
- **Not modelled:** limited series; TV series/seasons/renewals/hiatus/announcements; streaming service/subscribers; eras beyond a gentle quality bar; studio upgrades/format unlock gates; genre unlocks; late-game concurrency

## Career summary

- Weeks: 335 (6.4 years) · Releases: 20 · Cancellations: 0
- End cash: $279,815 (start $40,000) · Negative-cash weeks: 68
- Prestige: 225 (3 awards)
- Staff: Sam [P 82 W 82 F 75 E 68, XP 3200]; Alex [P 73 W 76 F 78 E 72, XP 3200]
- Studio genre levels (exact genre): Comedy xp 5, Action xp 10, Horror xp 5
- IP fans: Silver Run 0; Wild Edge 0; Silver Shadow 0; Wild Signal 191; Red Signal 365; Last Run 1,670; Hollow Echo 2,683; Last Signal 2,320; Iron Pulse 2,264; Last Signal 1,320; Broken Run 5,178; Silver Pulse 1,118; Silver Horizon 1,736; Lost Shadow 1,328; Dead Frequency 1,452; Lost Protocol 1,869; Red Frequency 3,296; Lost Run 879; Broken Protocol 3,110; Midnight Horizon 2,649
- Distributor trust: wolf 2.97, starlight 1.04, xyz 2.50, orbit 2.50, meridian 2.50
- Stars hired: Rae Lowe (L0, Fame 0, rel 1.25); Dee Kerr (L0, Fame 0, rel 1.25); Alex Quinn (L0, Fame 0, rel 1.25); Bo Reyes (L0, Fame 0, rel 1.75); Liv Lind (L2, Fame 7, rel 1.75); Cam Hart (L9, Fame 31, rel 5.00); Eli Quinn (L7, Fame 99, rel 2.50); Noa Park (L9, Fame 76, rel 3.25); Sam Park (L4, Fame 53, rel 2.50); Liv Imai (L5, Fame 49, rel 1.75)

## Releases (full causal trace)

### Silver Run — Comedy + Spies (new)

Released week 16 (year 0.3) · Distributor: Starlight Indie · Star: Rae Lowe (L0, Fame 0) · IP: Silver Run

**Financial waterfall** [LOCKED rules; amounts provisional]

| Item | Amount |
|---|---:|
| Advance received (project reserve, not revenue) | $37,000 |
| Base cost (unavoidable) | −$60,000 |
| Star fee | −$0 |
| Marketing campaign | −$0 |
| Paid from studio cash (overrun) | $23,000 |
| **Unused advance kept at completion** | $0 |
| Gross from sales (8 weeks) | $58,910 |
| Distributor royalty (8% of weekly gross) | −$4,713 |
| **Studio take** | $54,197 |
| Net for this title (surplus + take − cash overrun; wages are studio-wide, excluded) | $31,197 |

**Quality trace** [scores are computed, never rolled]

Meters (0–100): Plot 56.37 · Writing 57.65 · Filming 53.41 · Editing 47.02
Inputs: staff points {"plot":54.4,"writing":57.32,"filming":50.97,"editing":35.94}, Star filming points 6.6 (Star family fit 10), studio Comedy level 0 (+0%), era bar x1.01
Base scores: Audience 5.23 / Critic 5.5 · no weak meter
Combo grades: Audience F (x0.78) / Critic F (x0.78) · repetition fatigue x1 · critic saturation x1
**Final: Audience 4.08 / Critic 4.29 → avg 4.19**

**Opening & viewership trace** [marketing/Fame/reach affect viewers only]

Awareness inputs: base 0.35, marketing 0, studioBuzz 0, starFame 0, trend 0, ipFans 0 → awareness 0.3. Reach cap 140,000 → pool 41,344 → opening 12,403.

| Wk | Viewers | Retention | Driver | Gross | Studio | Distributor |
|---:|---:|---:|---|---:|---:|---:|
| 1 | 12,403 | 1 | opening | $24,806 | $22,822 | $1,984 |
| 2 | 7,373 | 0.59 | critic 4.29 (early buzz) | $14,746 | $13,566 | $1,180 |
| 3 | 4,383 | 0.59 | critic 4.29 (early buzz) | $8,766 | $8,065 | $701 |
| 4 | 2,524 | 0.58 | audience 4.08 (word of mouth) | $5,048 | $4,644 | $404 |
| 5 | 1,453 | 0.58 | audience 4.08 (word of mouth) | $2,906 | $2,674 | $232 |
| 6 | 837 | 0.58 | audience 4.08 (word of mouth) | $1,674 | $1,540 | $134 |
| 7 | 482 | 0.58 | audience 4.08 (word of mouth) | $964 | $887 | $77 |
| 8 | 0 | 0.58 | audience 4.08 (word of mouth) | $0 | $0 | $0 |

**Progression trace**

- Prestige awards: none (no milestone reached)
- IP fans: {"before":0,"after":0,"delta":0}
- Star career: {"fameDelta":-0.66,"relDelta":0.25,"grow":6,"level":0,"reasons":"worked together (+)"}
- Distributor trust: Starlight Indie earned back 13% of its $37,000 advance on Silver Run and reviews were poor (step -0.7)
- Rule labels: LOCKED = causal chain, accounting, fallback/no-campaign, thresholds 4.0/9.0, IP fan inheritance. WORKING ASSUMPTION = all formulas' shapes and numbers.

### Wild Edge — Action + Spies (new)

Released week 32 (year 0.6) · Distributor: Starlight Indie · Star: Dee Kerr (L0, Fame 0) · IP: Wild Edge

**Financial waterfall** [LOCKED rules; amounts provisional]

| Item | Amount |
|---|---:|
| Advance received (project reserve, not revenue) | $41,000 |
| Base cost (unavoidable) | −$60,000 |
| Star fee | −$0 |
| Marketing campaign | −$0 |
| Paid from studio cash (overrun) | $19,000 |
| **Unused advance kept at completion** | $0 |
| Gross from sales (9 weeks) | $63,954 |
| Distributor royalty (8% of weekly gross) | −$5,116 |
| **Studio take** | $58,838 |
| Net for this title (surplus + take − cash overrun; wages are studio-wide, excluded) | $39,838 |

**Quality trace** [scores are computed, never rolled]

Meters (0–100): Plot 58.55 · Writing 60.08 · Filming 54.36 · Editing 48.57
Inputs: staff points {"plot":60.22,"writing":64.16,"filming":57.22,"editing":38.7}, Star filming points 3.3 (Star family fit 5), studio Action level 0 (+0%), era bar x1.02
Base scores: Audience 5.38 / Critic 5.7 · no weak meter
Combo grades: Audience D (x0.9) / Critic D (x0.9) · repetition fatigue x1 · critic saturation x1
**Final: Audience 4.84 / Critic 5.13 → avg 4.98**

**Opening & viewership trace** [marketing/Fame/reach affect viewers only]

Awareness inputs: base 0.35, marketing 0, studioBuzz 0, starFame 0, trend 0, ipFans 0 → awareness 0.3. Reach cap 140,000 → pool 41,344 → opening 12,403.

| Wk | Viewers | Retention | Driver | Gross | Studio | Distributor |
|---:|---:|---:|---|---:|---:|---:|
| 1 | 12,403 | 1 | opening | $24,806 | $22,822 | $1,984 |
| 2 | 7,748 | 0.62 | critic 5.13 (early buzz) | $15,496 | $14,256 | $1,240 |
| 3 | 4,840 | 0.62 | critic 5.13 (early buzz) | $9,680 | $8,906 | $774 |
| 4 | 2,964 | 0.61 | audience 4.84 (word of mouth) | $5,928 | $5,454 | $474 |
| 5 | 1,815 | 0.61 | audience 4.84 (word of mouth) | $3,630 | $3,340 | $290 |
| 6 | 1,111 | 0.61 | audience 4.84 (word of mouth) | $2,222 | $2,044 | $178 |
| 7 | 680 | 0.61 | audience 4.84 (word of mouth) | $1,360 | $1,251 | $109 |
| 8 | 416 | 0.61 | audience 4.84 (word of mouth) | $832 | $765 | $67 |
| 9 | 0 | 0.61 | audience 4.84 (word of mouth) | $0 | $0 | $0 |

**Progression trace**

- Prestige awards: none (no milestone reached)
- IP fans: {"before":0,"after":0,"delta":0}
- Star career: {"fameDelta":-0.02,"relDelta":0.25,"grow":6,"level":0,"reasons":"worked together (+)"}
- Distributor trust: Starlight Indie earned back 12% of its $41,000 advance on Wild Edge and reviews were poor (step -0.59)
- Rule labels: LOCKED = causal chain, accounting, fallback/no-campaign, thresholds 4.0/9.0, IP fan inheritance. WORKING ASSUMPTION = all formulas' shapes and numbers.

### Silver Shadow — Horror + Sports (new)

Released week 48 (year 0.9) · Distributor: Starlight Indie · Star: Alex Quinn (L0, Fame 0) · IP: Silver Shadow

**Financial waterfall** [LOCKED rules; amounts provisional]

| Item | Amount |
|---|---:|
| Advance received (project reserve, not revenue) | $35,000 |
| Base cost (unavoidable) | −$60,000 |
| Star fee | −$0 |
| Marketing campaign | −$0 |
| Paid from studio cash (overrun) | $25,000 |
| **Unused advance kept at completion** | $0 |
| Gross from sales (9 weeks) | $63,104 |
| Distributor royalty (8% of weekly gross) | −$5,048 |
| **Studio take** | $58,056 |
| Net for this title (surplus + take − cash overrun; wages are studio-wide, excluded) | $33,056 |

**Quality trace** [scores are computed, never rolled]

Meters (0–100): Plot 59.46 · Writing 61.14 · Filming 55.36 · Editing 48.78
Inputs: staff points {"plot":63.27,"writing":67.86,"filming":59.83,"editing":39.5}, Star filming points 3.96 (Star family fit 6), studio Horror level 0 (+0%), era bar x1.04
Base scores: Audience 5.45 / Critic 5.78 · no weak meter
Combo grades: Audience C (x1) / Critic F (x0.78) · repetition fatigue x1 · critic saturation x1
**Final: Audience 5.45 / Critic 4.51 → avg 4.98**

**Opening & viewership trace** [marketing/Fame/reach affect viewers only]

Awareness inputs: base 0.35, marketing 0, studioBuzz 0, starFame 0, trend 0, ipFans 0 → awareness 0.3. Reach cap 140,000 → pool 41,344 → opening 12,403.

| Wk | Viewers | Retention | Driver | Gross | Studio | Distributor |
|---:|---:|---:|---|---:|---:|---:|
| 1 | 12,403 | 1 | opening | $24,806 | $22,822 | $1,984 |
| 2 | 7,471 | 0.6 | critic 4.51 (early buzz) | $14,942 | $13,747 | $1,195 |
| 3 | 4,500 | 0.6 | critic 4.51 (early buzz) | $9,000 | $8,280 | $720 |
| 4 | 2,887 | 0.64 | audience 5.45 (word of mouth) | $5,774 | $5,312 | $462 |
| 5 | 1,852 | 0.64 | audience 5.45 (word of mouth) | $3,704 | $3,408 | $296 |
| 6 | 1,188 | 0.64 | audience 5.45 (word of mouth) | $2,376 | $2,186 | $190 |
| 7 | 762 | 0.64 | audience 5.45 (word of mouth) | $1,524 | $1,402 | $122 |
| 8 | 489 | 0.64 | audience 5.45 (word of mouth) | $978 | $900 | $78 |
| 9 | 0 | 0.64 | audience 5.45 (word of mouth) | $0 | $0 | $0 |

**Progression trace**

- Prestige awards: none (no milestone reached)
- IP fans: {"before":0,"after":0,"delta":0}
- Star career: {"fameDelta":-0.02,"relDelta":0.25,"grow":6,"level":0,"reasons":"worked together (+)"}
- Distributor trust: Starlight Indie earned back 14% of its $35,000 advance on Silver Shadow and reviews were poor (step -0.58)
- Rule labels: LOCKED = causal chain, accounting, fallback/no-campaign, thresholds 4.0/9.0, IP fan inheritance. WORKING ASSUMPTION = all formulas' shapes and numbers.

### Wild Signal — Comedy + Sports (new)

Released week 64 (year 1.2) · Distributor: Starlight Indie · Star: Bo Reyes (L0, Fame 0) · IP: Wild Signal

**Financial waterfall** [LOCKED rules; amounts provisional]

| Item | Amount |
|---|---:|
| Advance received (project reserve, not revenue) | $37,000 |
| Base cost (unavoidable) | −$60,000 |
| Star fee | −$0 |
| Marketing campaign | −$0 |
| Paid from studio cash (overrun) | $23,000 |
| **Unused advance kept at completion** | $0 |
| Gross from sales (10 weeks) | $88,328 |
| Distributor royalty (9% of weekly gross) | −$7,950 |
| **Studio take** | $80,378 |
| Net for this title (surplus + take − cash overrun; wages are studio-wide, excluded) | $57,378 |

**Quality trace** [scores are computed, never rolled]

Meters (0–100): Plot 61.9 · Writing 63.65 · Filming 57.9 · Editing 50.79
Inputs: staff points {"plot":70.91,"writing":76.44,"filming":64.8,"editing":43.32}, Star filming points 6.78 (Star family fit 10), studio Comedy level 1 (+3%), era bar x1.05
Base scores: Audience 5.69 / Critic 6.02 · no weak meter
Combo grades: Audience D (x0.9) / Critic D (x0.9) · repetition fatigue x1 · critic saturation x1
**Final: Audience 5.12 / Critic 5.42 → avg 5.27**

**Opening & viewership trace** [marketing/Fame/reach affect viewers only]

Awareness inputs: base 0.35, marketing 0, studioBuzz 0, starFame 0, trend 0.15, ipFans 0 → awareness 0.39. Reach cap 140,000 → pool 55,086 → opening 16,526.

| Wk | Viewers | Retention | Driver | Gross | Studio | Distributor |
|---:|---:|---:|---|---:|---:|---:|
| 1 | 16,526 | 1 | opening | $33,052 | $30,077 | $2,975 |
| 2 | 10,496 | 0.64 | critic 5.42 (early buzz) | $20,992 | $19,103 | $1,889 |
| 3 | 6,666 | 0.64 | critic 5.42 (early buzz) | $13,332 | $12,132 | $1,200 |
| 4 | 4,171 | 0.63 | audience 5.12 (word of mouth) | $8,342 | $7,591 | $751 |
| 5 | 2,610 | 0.63 | audience 5.12 (word of mouth) | $5,220 | $4,750 | $470 |
| 6 | 1,633 | 0.63 | audience 5.12 (word of mouth) | $3,266 | $2,972 | $294 |
| 7 | 1,022 | 0.63 | audience 5.12 (word of mouth) | $2,044 | $1,860 | $184 |
| 8 | 640 | 0.63 | audience 5.12 (word of mouth) | $1,280 | $1,165 | $115 |
| 9 | 400 | 0.63 | audience 5.12 (word of mouth) | $800 | $728 | $72 |
| 10 | 0 | 0.63 | audience 5.12 (word of mouth) | $0 | $0 | $0 |

**Progression trace**

- Prestige awards: none (no milestone reached)
- IP fans: {"before":0,"after":191,"delta":191}
- Star career: {"fameDelta":0.31,"relDelta":0.75,"grow":6,"level":0,"reasons":"worked together (+); project boosted their career (+)"}
- Distributor trust: Starlight Indie earned back 21% of its $37,000 advance on Wild Signal (step -0.5)
- Rule labels: LOCKED = causal chain, accounting, fallback/no-campaign, thresholds 4.0/9.0, IP fan inheritance. WORKING ASSUMPTION = all formulas' shapes and numbers.

### Red Signal — Action + Sports (new)

Released week 80 (year 1.5) · Distributor: Starlight Indie · Star: Liv Lind (L2, Fame 7) · IP: Red Signal

**Financial waterfall** [LOCKED rules; amounts provisional]

| Item | Amount |
|---|---:|
| Advance received (project reserve, not revenue) | $38,000 |
| Base cost (unavoidable) | −$60,000 |
| Star fee | −$4,504 |
| Marketing campaign | −$0 |
| Paid from studio cash (overrun) | $26,504 |
| **Unused advance kept at completion** | $0 |
| Gross from sales (11 weeks) | $97,814 |
| Distributor royalty (8% of weekly gross) | −$7,825 |
| **Studio take** | $89,989 |
| Net for this title (surplus + take − cash overrun; wages are studio-wide, excluded) | $63,485 |

**Quality trace** [scores are computed, never rolled]

Meters (0–100): Plot 62.75 · Writing 64.58 · Filming 61.76 · Editing 51.53
Inputs: staff points {"plot":74.4,"writing":80.52,"filming":68.06,"editing":45.14}, Star filming points 16.98 (Star family fit 25), studio Action level 1 (+3%), era bar x1.06
Base scores: Audience 5.88 / Critic 6.16 · no weak meter
Combo grades: Audience A (x1.15) / Critic F (x0.78) · repetition fatigue x1 · critic saturation x1
**Final: Audience 6.76 / Critic 4.8 → avg 5.78**

**Opening & viewership trace** [marketing/Fame/reach affect viewers only]

Awareness inputs: base 0.35, marketing 0, studioBuzz 0, starFame 0.04, trend 0.15, ipFans 0 → awareness 0.41. Reach cap 140,000 → pool 58,088 → opening 17,426.

| Wk | Viewers | Retention | Driver | Gross | Studio | Distributor |
|---:|---:|---:|---|---:|---:|---:|
| 1 | 17,426 | 1 | opening | $34,852 | $32,064 | $2,788 |
| 2 | 10,679 | 0.61 | critic 4.8 (early buzz) | $21,358 | $19,649 | $1,709 |
| 3 | 6,544 | 0.61 | critic 4.8 (early buzz) | $13,088 | $12,041 | $1,047 |
| 4 | 4,610 | 0.7 | audience 6.76 (word of mouth) | $9,220 | $8,482 | $738 |
| 5 | 3,248 | 0.7 | audience 6.76 (word of mouth) | $6,496 | $5,976 | $520 |
| 6 | 2,288 | 0.7 | audience 6.76 (word of mouth) | $4,576 | $4,210 | $366 |
| 7 | 1,612 | 0.7 | audience 6.76 (word of mouth) | $3,224 | $2,966 | $258 |
| 8 | 1,136 | 0.7 | audience 6.76 (word of mouth) | $2,272 | $2,090 | $182 |
| 9 | 800 | 0.7 | audience 6.76 (word of mouth) | $1,600 | $1,472 | $128 |
| 10 | 564 | 0.7 | audience 6.76 (word of mouth) | $1,128 | $1,038 | $90 |
| 11 | 0 | 0.7 | audience 6.76 (word of mouth) | $0 | $0 | $0 |

**Progression trace**

- Prestige awards: none (no milestone reached)
- IP fans: {"before":0,"after":610,"delta":610}
- Star career: {"fameDelta":0.96,"relDelta":0.75,"grow":4,"level":2,"reasons":"worked together (+); project boosted their career (+)"}
- Distributor trust: Starlight Indie earned back 21% of its $38,000 advance on Red Signal (step -0.44)
- Rule labels: LOCKED = causal chain, accounting, fallback/no-campaign, thresholds 4.0/9.0, IP fan inheritance. WORKING ASSUMPTION = all formulas' shapes and numbers.

### Last Run — Horror + Spies (new)

Released week 96 (year 1.8) · Distributor: Wolf Pictures · Star: Cam Hart (L9, Fame 31) · IP: Last Run

**Financial waterfall** [LOCKED rules; amounts provisional]

| Item | Amount |
|---|---:|
| Advance received (project reserve, not revenue) | $79,000 |
| Base cost (unavoidable) | −$60,000 |
| Star fee | −$3,041 |
| Marketing campaign | −$20,000 |
| Paid from studio cash (overrun) | $4,041 |
| **Unused advance kept at completion** | $0 |
| Gross from sales (14 weeks) | $338,354 |
| Distributor royalty (32% of weekly gross) | −$108,273 |
| **Studio take** | $230,081 |
| Net for this title (surplus + take − cash overrun; wages are studio-wide, excluded) | $226,040 |

**Quality trace** [scores are computed, never rolled]

Meters (0–100): Plot 63.38 · Writing 65.37 · Filming 69.56 · Editing 52.13
Inputs: staff points {"plot":77.33,"writing":84.34,"filming":71.45,"editing":46.77}, Star filming points 50.28 (Star family fit 74), studio Horror level 1 (+3%), era bar x1.07
Base scores: Audience 6.19 / Critic 6.33 · no weak meter
Combo grades: Audience C (x1) / Critic D (x0.9) · repetition fatigue x1 · critic saturation x1
**Final: Audience 6.19 / Critic 5.7 → avg 5.95**

**Opening & viewership trace** [marketing/Fame/reach affect viewers only]

Awareness inputs: base 0.35, marketing 0.55, studioBuzz 0, starFame 0.02, trend 0.4, ipFans 0 → awareness 0.73. Reach cap 264,000 → pool 193,335 → opening 58,001.

| Wk | Viewers | Retention | Driver | Gross | Studio | Distributor |
|---:|---:|---:|---|---:|---:|---:|
| 1 | 58,001 | 1 | opening | $116,002 | $78,881 | $37,121 |
| 2 | 37,422 | 0.65 | critic 5.7 (early buzz) | $74,844 | $50,894 | $23,950 |
| 3 | 24,145 | 0.65 | critic 5.7 (early buzz) | $48,290 | $32,837 | $15,453 |
| 4 | 16,349 | 0.68 | audience 6.19 (word of mouth) | $32,698 | $22,235 | $10,463 |
| 5 | 11,070 | 0.68 | audience 6.19 (word of mouth) | $22,140 | $15,055 | $7,085 |
| 6 | 7,496 | 0.68 | audience 6.19 (word of mouth) | $14,992 | $10,195 | $4,797 |
| 7 | 5,076 | 0.68 | audience 6.19 (word of mouth) | $10,152 | $6,903 | $3,249 |
| 8 | 3,437 | 0.68 | audience 6.19 (word of mouth) | $6,874 | $4,674 | $2,200 |
| 9 | 2,327 | 0.68 | audience 6.19 (word of mouth) | $4,654 | $3,165 | $1,489 |
| 10 | 1,576 | 0.68 | audience 6.19 (word of mouth) | $3,152 | $2,143 | $1,009 |
| 11 | 1,067 | 0.68 | audience 6.19 (word of mouth) | $2,134 | $1,451 | $683 |
| 12 | 722 | 0.68 | audience 6.19 (word of mouth) | $1,444 | $982 | $462 |
| 13 | 489 | 0.68 | audience 6.19 (word of mouth) | $978 | $665 | $313 |
| 14 | 0 | 0.68 | audience 6.19 (word of mouth) | $0 | $0 | $0 |

**Progression trace**

- Prestige awards: none (no milestone reached)
- IP fans: {"before":0,"after":2571,"delta":2571}
- Star career: {"fameDelta":2.52,"relDelta":0.75,"grow":6,"level":6,"reasons":"worked together (+); project boosted their career (+)"}
- Distributor trust: Wolf Pictures earned 137% of its advance back on Last Run (step 0.28)
- Rule labels: LOCKED = causal chain, accounting, fallback/no-campaign, thresholds 4.0/9.0, IP fan inheritance. WORKING ASSUMPTION = all formulas' shapes and numbers.

### Hollow Echo — Horror + Zombies (new)

Released week 112 (year 2.2) · Distributor: Wolf Pictures · Star: Cam Hart (L9, Fame 31) · IP: Hollow Echo

**Financial waterfall** [LOCKED rules; amounts provisional]

| Item | Amount |
|---|---:|
| Advance received (project reserve, not revenue) | $100,000 |
| Base cost (unavoidable) | −$60,000 |
| Star fee | −$3,041 |
| Marketing campaign | −$20,000 |
| Paid from studio cash (overrun) | $0 |
| **Unused advance kept at completion** | $16,959 |
| Gross from sales (15 weeks) | $329,198 |
| Distributor royalty (31% of weekly gross) | −$102,051 |
| **Studio take** | $227,147 |
| Net for this title (surplus + take − cash overrun; wages are studio-wide, excluded) | $244,106 |

**Quality trace** [scores are computed, never rolled]

Meters (0–100): Plot 64.07 · Writing 66.17 · Filming 69.89 · Editing 53.16
Inputs: staff points {"plot":80.58,"writing":88.38,"filming":74.75,"editing":49.3}, Star filming points 50.28 (Star family fit 80), studio Horror level 1 (+3%), era bar x1.09
Base scores: Audience 6.26 / Critic 6.4 · no weak meter
Combo grades: Audience B (x1.06) / Critic C (x1) · repetition fatigue x1 · critic saturation x1
**Final: Audience 6.64 / Critic 6.4 → avg 6.52**

**Opening & viewership trace** [marketing/Fame/reach affect viewers only]

Awareness inputs: base 0.35, marketing 0.55, studioBuzz 0, starFame 0.03, trend 0.15, ipFans 0 → awareness 0.66. Reach cap 264,000 → pool 174,626 → opening 52,388.

| Wk | Viewers | Retention | Driver | Gross | Studio | Distributor |
|---:|---:|---:|---|---:|---:|---:|
| 1 | 52,388 | 1 | opening | $104,776 | $72,295 | $32,481 |
| 2 | 35,121 | 0.67 | critic 6.4 (early buzz) | $70,242 | $48,467 | $21,775 |
| 3 | 23,545 | 0.67 | critic 6.4 (early buzz) | $47,090 | $32,492 | $14,598 |
| 4 | 16,451 | 0.7 | audience 6.64 (word of mouth) | $32,902 | $22,702 | $10,200 |
| 5 | 11,495 | 0.7 | audience 6.64 (word of mouth) | $22,990 | $15,863 | $7,127 |
| 6 | 8,032 | 0.7 | audience 6.64 (word of mouth) | $16,064 | $11,084 | $4,980 |
| 7 | 5,612 | 0.7 | audience 6.64 (word of mouth) | $11,224 | $7,745 | $3,479 |
| 8 | 3,921 | 0.7 | audience 6.64 (word of mouth) | $7,842 | $5,411 | $2,431 |
| 9 | 2,740 | 0.7 | audience 6.64 (word of mouth) | $5,480 | $3,781 | $1,699 |
| 10 | 1,914 | 0.7 | audience 6.64 (word of mouth) | $3,828 | $2,641 | $1,187 |
| 11 | 1,337 | 0.7 | audience 6.64 (word of mouth) | $2,674 | $1,845 | $829 |
| 12 | 934 | 0.7 | audience 6.64 (word of mouth) | $1,868 | $1,289 | $579 |
| 13 | 653 | 0.7 | audience 6.64 (word of mouth) | $1,306 | $901 | $405 |
| 14 | 456 | 0.7 | audience 6.64 (word of mouth) | $912 | $629 | $283 |
| 15 | 0 | 0.7 | audience 6.64 (word of mouth) | $0 | $0 | $0 |

**Progression trace**

- Prestige awards: none (no milestone reached)
- IP fans: {"before":0,"after":4003,"delta":4003}
- Star career: {"fameDelta":3.98,"relDelta":0.75,"grow":6,"level":7,"reasons":"worked together (+); project boosted their career (+)"}
- Distributor trust: Wolf Pictures earned 102% of its advance back on Hollow Echo (step 0.15)
- Rule labels: LOCKED = causal chain, accounting, fallback/no-campaign, thresholds 4.0/9.0, IP fan inheritance. WORKING ASSUMPTION = all formulas' shapes and numbers.

### Last Signal — Action + Zombies (new)

Released week 128 (year 2.5) · Distributor: self-funded · Star: Eli Quinn (L7, Fame 99) · IP: Last Signal

**Financial waterfall** [LOCKED rules; amounts provisional]

| Item | Amount |
|---|---:|
| Advance received (project reserve, not revenue) | $0 |
| Base cost (unavoidable) | −$60,000 |
| Star fee | −$109,804 |
| Marketing campaign | −$20,000 |
| Paid from studio cash (overrun) | $189,804 |
| **Unused advance kept at completion** | $0 |
| Gross from sales (15 weeks) | $161,728 |
| Distributor royalty (0% of weekly gross) | −$0 |
| **Studio take** | $161,728 |
| Net for this title (surplus + take − cash overrun; wages are studio-wide, excluded) | $-28,076 |

**Quality trace** [scores are computed, never rolled]

Meters (0–100): Plot 66.58 · Writing 68.67 · Filming 72.73 · Editing 56.17
Inputs: staff points {"plot":91.04,"writing":100.14,"filming":85.48,"editing":56.31}, Star filming points 59.82 (Star family fit 88), studio Action level 1 (+3%), era bar x1.1
Base scores: Audience 6.54 / Critic 6.67 · no weak meter
Combo grades: Audience A (x1.15) / Critic A (x1.15) · repetition fatigue x1 · critic saturation x1
**Final: Audience 7.52 / Critic 7.67 → avg 7.6**

**Opening & viewership trace** [marketing/Fame/reach affect viewers only]

Awareness inputs: base 0.35, marketing 0.55, studioBuzz 0, starFame 0.54, trend 0.4, ipFans 0 → awareness 0.84. Reach cap 88,000 → pool 74,024 → opening 22,207.

| Wk | Viewers | Retention | Driver | Gross | Studio | Distributor |
|---:|---:|---:|---|---:|---:|---:|
| 1 | 22,207 | 1 | opening | $44,414 | $44,414 | $0 |
| 2 | 15,903 | 0.72 | critic 7.67 (early buzz) | $31,806 | $31,806 | $0 |
| 3 | 11,388 | 0.72 | critic 7.67 (early buzz) | $22,776 | $22,776 | $0 |
| 4 | 8,438 | 0.74 | audience 7.52 (word of mouth) | $16,876 | $16,876 | $0 |
| 5 | 6,252 | 0.74 | audience 7.52 (word of mouth) | $12,504 | $12,504 | $0 |
| 6 | 4,632 | 0.74 | audience 7.52 (word of mouth) | $9,264 | $9,264 | $0 |
| 7 | 3,432 | 0.74 | audience 7.52 (word of mouth) | $6,864 | $6,864 | $0 |
| 8 | 2,543 | 0.74 | audience 7.52 (word of mouth) | $5,086 | $5,086 | $0 |
| 9 | 1,884 | 0.74 | audience 7.52 (word of mouth) | $3,768 | $3,768 | $0 |
| 10 | 1,396 | 0.74 | audience 7.52 (word of mouth) | $2,792 | $2,792 | $0 |
| 11 | 1,034 | 0.74 | audience 7.52 (word of mouth) | $2,068 | $2,068 | $0 |
| 12 | 766 | 0.74 | audience 7.52 (word of mouth) | $1,532 | $1,532 | $0 |
| 13 | 568 | 0.74 | audience 7.52 (word of mouth) | $1,136 | $1,136 | $0 |
| 14 | 421 | 0.74 | audience 7.52 (word of mouth) | $842 | $842 | $0 |
| 15 | 0 | 0.74 | audience 7.52 (word of mouth) | $0 | $0 | $0 |

**Progression trace**

- Prestige awards: Prestige +75: audience_7_5 (Last Signal).
- IP fans: {"before":0,"after":3364,"delta":3364}
- Star career: {"fameDelta":4.55,"relDelta":0.75,"grow":6,"level":6,"reasons":"worked together (+); project boosted their career (+)"}
- Rule labels: LOCKED = causal chain, accounting, fallback/no-campaign, thresholds 4.0/9.0, IP fan inheritance. WORKING ASSUMPTION = all formulas' shapes and numbers.

### Iron Pulse — Action + Zombies (new)

Released week 144 (year 2.8) · Distributor: self-funded · Star: Eli Quinn (L7, Fame 99) · IP: Iron Pulse

**Financial waterfall** [LOCKED rules; amounts provisional]

| Item | Amount |
|---|---:|
| Advance received (project reserve, not revenue) | $0 |
| Base cost (unavoidable) | −$60,000 |
| Star fee | −$103,725 |
| Marketing campaign | −$20,000 |
| Paid from studio cash (overrun) | $183,725 |
| **Unused advance kept at completion** | $0 |
| Gross from sales (14 weeks) | $159,482 |
| Distributor royalty (0% of weekly gross) | −$0 |
| **Studio take** | $159,482 |
| Net for this title (surplus + take − cash overrun; wages are studio-wide, excluded) | $-24,243 |

**Quality trace** [scores are computed, never rolled]

Meters (0–100): Plot 69.56 · Writing 71.52 · Filming 74.16 · Editing 59.44
Inputs: staff points {"plot":105.58,"writing":116.02,"filming":96.59,"editing":65.1}, Star filming points 61.56 (Star family fit 94), studio Action level 2 (+6%), era bar x1.11
Base scores: Audience 6.79 / Critic 6.94 · no weak meter
Combo grades: Audience A (x1.15) / Critic A (x1.15) · repetition fatigue x0.95 · critic saturation x1
**Final: Audience 7.42 / Critic 7.58 → avg 7.5**

**Opening & viewership trace** [marketing/Fame/reach affect viewers only]

Awareness inputs: base 0.35, marketing 0.55, studioBuzz 0, starFame 0.57, trend 0.4, ipFans 0 → awareness 0.85. Reach cap 88,000 → pool 74,400 → opening 22,320.

| Wk | Viewers | Retention | Driver | Gross | Studio | Distributor |
|---:|---:|---:|---|---:|---:|---:|
| 1 | 22,320 | 1 | opening | $44,640 | $44,640 | $0 |
| 2 | 15,911 | 0.71 | critic 7.58 (early buzz) | $31,822 | $31,822 | $0 |
| 3 | 11,343 | 0.71 | critic 7.58 (early buzz) | $22,686 | $22,686 | $0 |
| 4 | 8,350 | 0.74 | audience 7.42 (word of mouth) | $16,700 | $16,700 | $0 |
| 5 | 6,147 | 0.74 | audience 7.42 (word of mouth) | $12,294 | $12,294 | $0 |
| 6 | 4,525 | 0.74 | audience 7.42 (word of mouth) | $9,050 | $9,050 | $0 |
| 7 | 3,331 | 0.74 | audience 7.42 (word of mouth) | $6,662 | $6,662 | $0 |
| 8 | 2,452 | 0.74 | audience 7.42 (word of mouth) | $4,904 | $4,904 | $0 |
| 9 | 1,805 | 0.74 | audience 7.42 (word of mouth) | $3,610 | $3,610 | $0 |
| 10 | 1,329 | 0.74 | audience 7.42 (word of mouth) | $2,658 | $2,658 | $0 |
| 11 | 978 | 0.74 | audience 7.42 (word of mouth) | $1,956 | $1,956 | $0 |
| 12 | 720 | 0.74 | audience 7.42 (word of mouth) | $1,440 | $1,440 | $0 |
| 13 | 530 | 0.74 | audience 7.42 (word of mouth) | $1,060 | $1,060 | $0 |
| 14 | 0 | 0.74 | audience 7.42 (word of mouth) | $0 | $0 | $0 |

**Progression trace**

- Prestige awards: none (no milestone reached)
- IP fans: {"before":0,"after":3190,"delta":3190}
- Star career: {"fameDelta":4.34,"relDelta":0.75,"grow":6,"level":7,"reasons":"worked together (+); project boosted their career (+)"}
- Rule labels: LOCKED = causal chain, accounting, fallback/no-campaign, thresholds 4.0/9.0, IP fan inheritance. WORKING ASSUMPTION = all formulas' shapes and numbers.

### Last Signal — Action + Zombies (new)

Released week 160 (year 3.1) · Distributor: self-funded · Star: Noa Park (L9, Fame 76) · IP: Last Signal

**Financial waterfall** [LOCKED rules; amounts provisional]

| Item | Amount |
|---|---:|
| Advance received (project reserve, not revenue) | $0 |
| Base cost (unavoidable) | −$60,000 |
| Star fee | −$68,277 |
| Marketing campaign | −$20,000 |
| Paid from studio cash (overrun) | $148,277 |
| **Unused advance kept at completion** | $0 |
| Gross from sales (13 weeks) | $128,502 |
| Distributor royalty (0% of weekly gross) | −$0 |
| **Studio take** | $128,502 |
| Net for this title (surplus + take − cash overrun; wages are studio-wide, excluded) | $-19,775 |

**Quality trace** [scores are computed, never rolled]

Meters (0–100): Plot 69.71 · Writing 71.74 · Filming 74.38 · Editing 59.43
Inputs: staff points {"plot":107.52,"writing":118.61,"filming":100.92,"editing":65.81}, Star filming points 60.84 (Star family fit 87), studio Action level 2 (+6%), era bar x1.12
Base scores: Audience 6.81 / Critic 6.96 · no weak meter
Combo grades: Audience A (x1.15) / Critic A (x1.15) · repetition fatigue x0.9 · critic saturation x0.9
**Final: Audience 7.04 / Critic 6.48 → avg 6.76**

**Opening & viewership trace** [marketing/Fame/reach affect viewers only]

Awareness inputs: base 0.35, marketing 0.55, studioBuzz 0, starFame 0.41, trend 0.1, ipFans 0 → awareness 0.76. Reach cap 88,000 → pool 66,472 → opening 19,942.

| Wk | Viewers | Retention | Driver | Gross | Studio | Distributor |
|---:|---:|---:|---|---:|---:|---:|
| 1 | 19,942 | 1 | opening | $39,884 | $39,884 | $0 |
| 2 | 13,427 | 0.67 | critic 6.48 (early buzz) | $26,854 | $26,854 | $0 |
| 3 | 9,040 | 0.67 | critic 6.48 (early buzz) | $18,080 | $18,080 | $0 |
| 4 | 6,490 | 0.72 | audience 7.04 (word of mouth) | $12,980 | $12,980 | $0 |
| 5 | 4,659 | 0.72 | audience 7.04 (word of mouth) | $9,318 | $9,318 | $0 |
| 6 | 3,345 | 0.72 | audience 7.04 (word of mouth) | $6,690 | $6,690 | $0 |
| 7 | 2,401 | 0.72 | audience 7.04 (word of mouth) | $4,802 | $4,802 | $0 |
| 8 | 1,724 | 0.72 | audience 7.04 (word of mouth) | $3,448 | $3,448 | $0 |
| 9 | 1,238 | 0.72 | audience 7.04 (word of mouth) | $2,476 | $2,476 | $0 |
| 10 | 889 | 0.72 | audience 7.04 (word of mouth) | $1,778 | $1,778 | $0 |
| 11 | 638 | 0.72 | audience 7.04 (word of mouth) | $1,276 | $1,276 | $0 |
| 12 | 458 | 0.72 | audience 7.04 (word of mouth) | $916 | $916 | $0 |
| 13 | 0 | 0.72 | audience 7.04 (word of mouth) | $0 | $0 | $0 |

**Progression trace**

- Prestige awards: none (no milestone reached)
- IP fans: {"before":0,"after":1809,"delta":1809}
- Star career: {"fameDelta":2.64,"relDelta":0.75,"grow":6,"level":8,"reasons":"worked together (+); project boosted their career (+)"}
- Rule labels: LOCKED = causal chain, accounting, fallback/no-campaign, thresholds 4.0/9.0, IP fan inheritance. WORKING ASSUMPTION = all formulas' shapes and numbers.

### Broken Run — Horror + Superheroes (new)

Released week 176 (year 3.4) · Distributor: Wolf Pictures · Star: Cam Hart (L9, Fame 31) · IP: Broken Run

**Financial waterfall** [LOCKED rules; amounts provisional]

| Item | Amount |
|---|---:|
| Advance received (project reserve, not revenue) | $100,000 |
| Base cost (unavoidable) | −$60,000 |
| Star fee | −$5,910 |
| Marketing campaign | −$20,000 |
| Paid from studio cash (overrun) | $0 |
| **Unused advance kept at completion** | $14,090 |
| Gross from sales (15 weeks) | $401,500 |
| Distributor royalty (31% of weekly gross) | −$124,465 |
| **Studio take** | $277,035 |
| Net for this title (surplus + take − cash overrun; wages are studio-wide, excluded) | $291,125 |

**Quality trace** [scores are computed, never rolled]

Meters (0–100): Plot 70.19 · Writing 72.21 · Filming 74.34 · Editing 60.03
Inputs: staff points {"plot":111.21,"writing":122.73,"filming":102.94,"editing":68.22}, Star filming points 60.18 (Star family fit 86), studio Horror level 2 (+6%), era bar x1.14
Base scores: Audience 6.84 / Critic 7 · no weak meter
Combo grades: Audience B (x1.06) / Critic C (x1) · repetition fatigue x1 · critic saturation x1
**Final: Audience 7.25 / Critic 7 → avg 7.13**

**Opening & viewership trace** [marketing/Fame/reach affect viewers only]

Awareness inputs: base 0.35, marketing 0.55, studioBuzz 0, starFame 0.06, trend 0.4, ipFans 0 → awareness 0.74. Reach cap 264,000 → pool 196,038 → opening 58,811.

| Wk | Viewers | Retention | Driver | Gross | Studio | Distributor |
|---:|---:|---:|---|---:|---:|---:|
| 1 | 58,811 | 1 | opening | $117,622 | $81,159 | $36,463 |
| 2 | 40,697 | 0.69 | critic 7 (early buzz) | $81,394 | $56,162 | $25,232 |
| 3 | 28,162 | 0.69 | critic 7 (early buzz) | $56,324 | $38,864 | $17,460 |
| 4 | 20,502 | 0.73 | audience 7.25 (word of mouth) | $41,004 | $28,293 | $12,711 |
| 5 | 14,925 | 0.73 | audience 7.25 (word of mouth) | $29,850 | $20,597 | $9,254 |
| 6 | 10,865 | 0.73 | audience 7.25 (word of mouth) | $21,730 | $14,994 | $6,736 |
| 7 | 7,910 | 0.73 | audience 7.25 (word of mouth) | $15,820 | $10,916 | $4,904 |
| 8 | 5,758 | 0.73 | audience 7.25 (word of mouth) | $11,516 | $7,946 | $3,570 |
| 9 | 4,192 | 0.73 | audience 7.25 (word of mouth) | $8,384 | $5,785 | $2,599 |
| 10 | 3,052 | 0.73 | audience 7.25 (word of mouth) | $6,104 | $4,212 | $1,892 |
| 11 | 2,222 | 0.73 | audience 7.25 (word of mouth) | $4,444 | $3,066 | $1,378 |
| 12 | 1,618 | 0.73 | audience 7.25 (word of mouth) | $3,236 | $2,233 | $1,003 |
| 13 | 1,178 | 0.73 | audience 7.25 (word of mouth) | $2,356 | $1,626 | $730 |
| 14 | 858 | 0.73 | audience 7.25 (word of mouth) | $1,716 | $1,184 | $532 |
| 15 | 0 | 0.73 | audience 7.25 (word of mouth) | $0 | $0 | $0 |

**Progression trace**

- Prestige awards: none (no milestone reached)
- IP fans: {"before":0,"after":6842,"delta":6842}
- Star career: {"fameDelta":6.1,"relDelta":0.75,"grow":6,"level":7,"reasons":"worked together (+); project boosted their career (+)"}
- Distributor trust: Wolf Pictures earned 124% of its advance back on Broken Run with strong reviews (step 0.36)
- Rule labels: LOCKED = causal chain, accounting, fallback/no-campaign, thresholds 4.0/9.0, IP fan inheritance. WORKING ASSUMPTION = all formulas' shapes and numbers.

### Silver Pulse — Action + Superheroes (new)

Released week 192 (year 3.7) · Distributor: self-funded · Star: Noa Park (L9, Fame 76) · IP: Silver Pulse

**Financial waterfall** [LOCKED rules; amounts provisional]

| Item | Amount |
|---|---:|
| Advance received (project reserve, not revenue) | $0 |
| Base cost (unavoidable) | −$60,000 |
| Star fee | −$69,791 |
| Marketing campaign | −$20,000 |
| Paid from studio cash (overrun) | $149,791 |
| **Unused advance kept at completion** | $0 |
| Gross from sales (11 weeks) | $122,946 |
| Distributor royalty (0% of weekly gross) | −$0 |
| **Studio take** | $122,946 |
| Net for this title (surplus + take − cash overrun; wages are studio-wide, excluded) | $-26,845 |

**Quality trace** [scores are computed, never rolled]

Meters (0–100): Plot 72.12 · Writing 74.05 · Filming 75.77 · Editing 61.83
Inputs: staff points {"plot":123.5,"writing":136.24,"filming":112.98,"editing":74.37}, Star filming points 65.04 (Star family fit 93), studio Action level 2 (+6%), era bar x1.15
Base scores: Audience 7.01 / Critic 7.18 · no weak meter
Combo grades: Audience F (x0.78) / Critic A (x1.15) · repetition fatigue x1 · critic saturation x0.9
**Final: Audience 5.47 / Critic 7.43 → avg 6.45**

**Opening & viewership trace** [marketing/Fame/reach affect viewers only]

Awareness inputs: base 0.35, marketing 0.55, studioBuzz 0, starFame 0.42, trend 0.1, ipFans 0 → awareness 0.76. Reach cap 88,000 → pool 66,811 → opening 20,043.

| Wk | Viewers | Retention | Driver | Gross | Studio | Distributor |
|---:|---:|---:|---|---:|---:|---:|
| 1 | 20,043 | 1 | opening | $40,086 | $40,086 | $0 |
| 2 | 14,180 | 0.71 | critic 7.43 (early buzz) | $28,360 | $28,360 | $0 |
| 3 | 10,032 | 0.71 | critic 7.43 (early buzz) | $20,064 | $20,064 | $0 |
| 4 | 6,446 | 0.64 | audience 5.47 (word of mouth) | $12,892 | $12,892 | $0 |
| 5 | 4,142 | 0.64 | audience 5.47 (word of mouth) | $8,284 | $8,284 | $0 |
| 6 | 2,661 | 0.64 | audience 5.47 (word of mouth) | $5,322 | $5,322 | $0 |
| 7 | 1,710 | 0.64 | audience 5.47 (word of mouth) | $3,420 | $3,420 | $0 |
| 8 | 1,099 | 0.64 | audience 5.47 (word of mouth) | $2,198 | $2,198 | $0 |
| 9 | 706 | 0.64 | audience 5.47 (word of mouth) | $1,412 | $1,412 | $0 |
| 10 | 454 | 0.64 | audience 5.47 (word of mouth) | $908 | $908 | $0 |
| 11 | 0 | 0.64 | audience 5.47 (word of mouth) | $0 | $0 | $0 |

**Progression trace**

- Prestige awards: none (no milestone reached)
- IP fans: {"before":0,"after":1426,"delta":1426}
- Star career: {"fameDelta":2.11,"relDelta":0.75,"grow":6,"level":9,"reasons":"worked together (+); project boosted their career (+)"}
- Rule labels: LOCKED = causal chain, accounting, fallback/no-campaign, thresholds 4.0/9.0, IP fan inheritance. WORKING ASSUMPTION = all formulas' shapes and numbers.

### Silver Horizon — Action + Zombies (new)

Released week 208 (year 4.0) · Distributor: self-funded · Star: Noa Park (L9, Fame 76) · IP: Silver Horizon

**Financial waterfall** [LOCKED rules; amounts provisional]

| Item | Amount |
|---|---:|
| Advance received (project reserve, not revenue) | $0 |
| Base cost (unavoidable) | −$60,000 |
| Star fee | −$69,791 |
| Marketing campaign | −$20,000 |
| Paid from studio cash (overrun) | $149,791 |
| **Unused advance kept at completion** | $0 |
| Gross from sales (13 weeks) | $130,374 |
| Distributor royalty (0% of weekly gross) | −$0 |
| **Studio take** | $130,374 |
| Net for this title (surplus + take − cash overrun; wages are studio-wide, excluded) | $-19,417 |

**Quality trace** [scores are computed, never rolled]

Meters (0–100): Plot 73.45 · Writing 75.35 · Filming 76.92 · Editing 63.82
Inputs: staff points {"plot":133.51,"writing":147.48,"filming":122.71,"editing":81.86}, Star filming points 69.06 (Star family fit 99), studio Action level 3 (+9%), era bar x1.16
Base scores: Audience 7.16 / Critic 7.32 · no weak meter
Combo grades: Audience A (x1.15) / Critic A (x1.15) · repetition fatigue x0.85 · critic saturation x1
**Final: Audience 7 / Critic 7.15 → avg 7.08**

**Opening & viewership trace** [marketing/Fame/reach affect viewers only]

Awareness inputs: base 0.35, marketing 0.55, studioBuzz 0, starFame 0.44, trend 0, ipFans 0 → awareness 0.74. Reach cap 88,000 → pool 64,877 → opening 19,463.

| Wk | Viewers | Retention | Driver | Gross | Studio | Distributor |
|---:|---:|---:|---|---:|---:|---:|
| 1 | 19,463 | 1 | opening | $38,926 | $38,926 | $0 |
| 2 | 13,573 | 0.7 | critic 7.15 (early buzz) | $27,146 | $27,146 | $0 |
| 3 | 9,466 | 0.7 | critic 7.15 (early buzz) | $18,932 | $18,932 | $0 |
| 4 | 6,778 | 0.72 | audience 7 (word of mouth) | $13,556 | $13,556 | $0 |
| 5 | 4,853 | 0.72 | audience 7 (word of mouth) | $9,706 | $9,706 | $0 |
| 6 | 3,475 | 0.72 | audience 7 (word of mouth) | $6,950 | $6,950 | $0 |
| 7 | 2,488 | 0.72 | audience 7 (word of mouth) | $4,976 | $4,976 | $0 |
| 8 | 1,781 | 0.72 | audience 7 (word of mouth) | $3,562 | $3,562 | $0 |
| 9 | 1,275 | 0.72 | audience 7 (word of mouth) | $2,550 | $2,550 | $0 |
| 10 | 913 | 0.72 | audience 7 (word of mouth) | $1,826 | $1,826 | $0 |
| 11 | 654 | 0.72 | audience 7 (word of mouth) | $1,308 | $1,308 | $0 |
| 12 | 468 | 0.72 | audience 7 (word of mouth) | $936 | $936 | $0 |
| 13 | 0 | 0.72 | audience 7 (word of mouth) | $0 | $0 | $0 |

**Progression trace**

- Prestige awards: none (no milestone reached)
- IP fans: {"before":0,"after":2169,"delta":2169}
- Star career: {"fameDelta":3.15,"relDelta":0.75,"grow":1,"level":9,"reasons":"worked together (+); project boosted their career (+)"}
- Rule labels: LOCKED = causal chain, accounting, fallback/no-campaign, thresholds 4.0/9.0, IP fan inheritance. WORKING ASSUMPTION = all formulas' shapes and numbers.

### Lost Shadow — Action + Zombies (new)

Released week 224 (year 4.3) · Distributor: self-funded · Star: Sam Park (L4, Fame 53) · IP: Lost Shadow

**Financial waterfall** [LOCKED rules; amounts provisional]

| Item | Amount |
|---|---:|
| Advance received (project reserve, not revenue) | $0 |
| Base cost (unavoidable) | −$60,000 |
| Star fee | −$41,731 |
| Marketing campaign | −$20,000 |
| Paid from studio cash (overrun) | $121,731 |
| **Unused advance kept at completion** | $0 |
| Gross from sales (12 weeks) | $116,928 |
| Distributor royalty (0% of weekly gross) | −$0 |
| **Studio take** | $116,928 |
| Net for this title (surplus + take − cash overrun; wages are studio-wide, excluded) | $-4,803 |

**Quality trace** [scores are computed, never rolled]

Meters (0–100): Plot 74.26 · Writing 76.14 · Filming 77.55 · Editing 64.91
Inputs: staff points {"plot":140.66,"writing":155.59,"filming":131.77,"editing":86.76}, Star filming points 69.06 (Star family fit 96), studio Action level 3 (+9%), era bar x1.17
Base scores: Audience 7.24 / Critic 7.4 · no weak meter
Combo grades: Audience A (x1.15) / Critic A (x1.15) · repetition fatigue x0.8 · critic saturation x1
**Final: Audience 6.66 / Critic 6.81 → avg 6.74**

**Opening & viewership trace** [marketing/Fame/reach affect viewers only]

Awareness inputs: base 0.35, marketing 0.55, studioBuzz 0, starFame 0.29, trend 0, ipFans 0 → awareness 0.7. Reach cap 88,000 → pool 61,175 → opening 18,353.

| Wk | Viewers | Retention | Driver | Gross | Studio | Distributor |
|---:|---:|---:|---|---:|---:|---:|
| 1 | 18,353 | 1 | opening | $36,706 | $36,706 | $0 |
| 2 | 12,575 | 0.69 | critic 6.81 (early buzz) | $25,150 | $25,150 | $0 |
| 3 | 8,616 | 0.69 | critic 6.81 (early buzz) | $17,232 | $17,232 | $0 |
| 4 | 6,028 | 0.7 | audience 6.66 (word of mouth) | $12,056 | $12,056 | $0 |
| 5 | 4,218 | 0.7 | audience 6.66 (word of mouth) | $8,436 | $8,436 | $0 |
| 6 | 2,951 | 0.7 | audience 6.66 (word of mouth) | $5,902 | $5,902 | $0 |
| 7 | 2,065 | 0.7 | audience 6.66 (word of mouth) | $4,130 | $4,130 | $0 |
| 8 | 1,445 | 0.7 | audience 6.66 (word of mouth) | $2,890 | $2,890 | $0 |
| 9 | 1,011 | 0.7 | audience 6.66 (word of mouth) | $2,022 | $2,022 | $0 |
| 10 | 707 | 0.7 | audience 6.66 (word of mouth) | $1,414 | $1,414 | $0 |
| 11 | 495 | 0.7 | audience 6.66 (word of mouth) | $990 | $990 | $0 |
| 12 | 0 | 0.7 | audience 6.66 (word of mouth) | $0 | $0 | $0 |

**Progression trace**

- Prestige awards: none (no milestone reached)
- IP fans: {"before":0,"after":1628,"delta":1628}
- Star career: {"fameDelta":2.44,"relDelta":0.75,"grow":4,"level":3,"reasons":"worked together (+); project boosted their career (+)"}
- Rule labels: LOCKED = causal chain, accounting, fallback/no-campaign, thresholds 4.0/9.0, IP fan inheritance. WORKING ASSUMPTION = all formulas' shapes and numbers.

### Dead Frequency — Comedy + Zombies (new)

Released week 240 (year 4.6) · Distributor: self-funded · Star: Cam Hart (L9, Fame 31) · IP: Dead Frequency

**Financial waterfall** [LOCKED rules; amounts provisional]

| Item | Amount |
|---|---:|
| Advance received (project reserve, not revenue) | $0 |
| Base cost (unavoidable) | −$60,000 |
| Star fee | −$9,203 |
| Marketing campaign | −$20,000 |
| Paid from studio cash (overrun) | $89,203 |
| **Unused advance kept at completion** | $0 |
| Gross from sales (13 weeks) | $116,832 |
| Distributor royalty (0% of weekly gross) | −$0 |
| **Studio take** | $116,832 |
| Net for this title (surplus + take − cash overrun; wages are studio-wide, excluded) | $27,629 |

**Quality trace** [scores are computed, never rolled]

Meters (0–100): Plot 72.9 · Writing 74.86 · Filming 76.53 · Editing 63.13
Inputs: staff points {"plot":132.55,"writing":146.74,"filming":123.61,"editing":81.13}, Star filming points 67.98 (Star family fit 100), studio Comedy level 1 (+3%), era bar x1.18
Base scores: Audience 7.1 / Critic 7.27 · no weak meter
Combo grades: Audience C (x1) / Critic D (x0.9) · repetition fatigue x1 · critic saturation x1
**Final: Audience 7.1 / Critic 6.54 → avg 6.82**

**Opening & viewership trace** [marketing/Fame/reach affect viewers only]

Awareness inputs: base 0.35, marketing 0.55, studioBuzz 0, starFame 0.09, trend 0.15, ipFans 0 → awareness 0.68. Reach cap 88,000 → pool 59,957 → opening 17,987.

| Wk | Viewers | Retention | Driver | Gross | Studio | Distributor |
|---:|---:|---:|---|---:|---:|---:|
| 1 | 17,987 | 1 | opening | $35,974 | $35,974 | $0 |
| 2 | 12,149 | 0.68 | critic 6.54 (early buzz) | $24,298 | $24,298 | $0 |
| 3 | 8,206 | 0.68 | critic 6.54 (early buzz) | $16,412 | $16,412 | $0 |
| 4 | 5,915 | 0.72 | audience 7.1 (word of mouth) | $11,830 | $11,830 | $0 |
| 5 | 4,264 | 0.72 | audience 7.1 (word of mouth) | $8,528 | $8,528 | $0 |
| 6 | 3,073 | 0.72 | audience 7.1 (word of mouth) | $6,146 | $6,146 | $0 |
| 7 | 2,215 | 0.72 | audience 7.1 (word of mouth) | $4,430 | $4,430 | $0 |
| 8 | 1,597 | 0.72 | audience 7.1 (word of mouth) | $3,194 | $3,194 | $0 |
| 9 | 1,151 | 0.72 | audience 7.1 (word of mouth) | $2,302 | $2,302 | $0 |
| 10 | 830 | 0.72 | audience 7.1 (word of mouth) | $1,660 | $1,660 | $0 |
| 11 | 598 | 0.72 | audience 7.1 (word of mouth) | $1,196 | $1,196 | $0 |
| 12 | 431 | 0.72 | audience 7.1 (word of mouth) | $862 | $862 | $0 |
| 13 | 0 | 0.72 | audience 7.1 (word of mouth) | $0 | $0 | $0 |

**Progression trace**

- Prestige awards: none (no milestone reached)
- IP fans: {"before":0,"after":1701,"delta":1701}
- Star career: {"fameDelta":2.55,"relDelta":0.75,"grow":0,"level":8,"reasons":"worked together (+); project boosted their career (+)"}
- Rule labels: LOCKED = causal chain, accounting, fallback/no-campaign, thresholds 4.0/9.0, IP fan inheritance. WORKING ASSUMPTION = all formulas' shapes and numbers.

### Lost Protocol — Action + Zombies (new)

Released week 256 (year 4.9) · Distributor: Starlight Indie · Star: Sam Park (L4, Fame 53) · IP: Lost Protocol

**Financial waterfall** [LOCKED rules; amounts provisional]

| Item | Amount |
|---|---:|
| Advance received (project reserve, not revenue) | $47,000 |
| Base cost (unavoidable) | −$60,000 |
| Star fee | −$43,077 |
| Marketing campaign | −$20,000 |
| Paid from studio cash (overrun) | $76,077 |
| **Unused advance kept at completion** | $0 |
| Gross from sales (13 weeks) | $203,918 |
| Distributor royalty (8% of weekly gross) | −$16,313 |
| **Studio take** | $187,605 |
| Net for this title (surplus + take − cash overrun; wages are studio-wide, excluded) | $111,527 |

**Quality trace** [scores are computed, never rolled]

Meters (0–100): Plot 74.15 · Writing 76.06 · Filming 77.55 · Editing 64.73
Inputs: staff points {"plot":142.8,"writing":158.16,"filming":133.08,"editing":87.88}, Star filming points 71.94 (Star family fit 100), studio Action level 3 (+9%), era bar x1.2
Base scores: Audience 7.23 / Critic 7.39 · no weak meter
Combo grades: Audience A (x1.15) / Critic A (x1.15) · repetition fatigue x0.75 · critic saturation x1
**Final: Audience 6.24 / Critic 6.38 → avg 6.31**

**Opening & viewership trace** [marketing/Fame/reach affect viewers only]

Awareness inputs: base 0.35, marketing 0.55, studioBuzz 0, starFame 0.3, trend 0.4, ipFans 0 → awareness 0.8. Reach cap 140,000 → pool 111,809 → opening 33,543.

| Wk | Viewers | Retention | Driver | Gross | Studio | Distributor |
|---:|---:|---:|---|---:|---:|---:|
| 1 | 33,543 | 1 | opening | $67,086 | $61,719 | $5,367 |
| 2 | 22,463 | 0.67 | critic 6.38 (early buzz) | $44,926 | $41,332 | $3,594 |
| 3 | 15,043 | 0.67 | critic 6.38 (early buzz) | $30,086 | $27,679 | $2,407 |
| 4 | 10,222 | 0.68 | audience 6.24 (word of mouth) | $20,444 | $18,808 | $1,636 |
| 5 | 6,946 | 0.68 | audience 6.24 (word of mouth) | $13,892 | $12,781 | $1,111 |
| 6 | 4,720 | 0.68 | audience 6.24 (word of mouth) | $9,440 | $8,685 | $755 |
| 7 | 3,207 | 0.68 | audience 6.24 (word of mouth) | $6,414 | $5,901 | $513 |
| 8 | 2,179 | 0.68 | audience 6.24 (word of mouth) | $4,358 | $4,009 | $349 |
| 9 | 1,481 | 0.68 | audience 6.24 (word of mouth) | $2,962 | $2,725 | $237 |
| 10 | 1,006 | 0.68 | audience 6.24 (word of mouth) | $2,012 | $1,851 | $161 |
| 11 | 684 | 0.68 | audience 6.24 (word of mouth) | $1,368 | $1,259 | $109 |
| 12 | 465 | 0.68 | audience 6.24 (word of mouth) | $930 | $856 | $74 |
| 13 | 0 | 0.68 | audience 6.24 (word of mouth) | $0 | $0 | $0 |

**Progression trace**

- Prestige awards: none (no milestone reached)
- IP fans: {"before":0,"after":2137,"delta":2137}
- Star career: {"fameDelta":2.65,"relDelta":0.75,"grow":0,"level":4,"reasons":"worked together (+); project boosted their career (+)"}
- Distributor trust: Starlight Indie earned back 35% of its $47,000 advance on Lost Protocol (step -0.28)
- Rule labels: LOCKED = causal chain, accounting, fallback/no-campaign, thresholds 4.0/9.0, IP fan inheritance. WORKING ASSUMPTION = all formulas' shapes and numbers.

### Red Frequency — Horror + Zombies (new)

Released week 272 (year 5.2) · Distributor: Starlight Indie · Star: Cam Hart (L9, Fame 31) · IP: Red Frequency

**Financial waterfall** [LOCKED rules; amounts provisional]

| Item | Amount |
|---|---:|
| Advance received (project reserve, not revenue) | $48,000 |
| Base cost (unavoidable) | −$60,000 |
| Star fee | −$10,362 |
| Marketing campaign | −$20,000 |
| Paid from studio cash (overrun) | $42,362 |
| **Unused advance kept at completion** | $0 |
| Gross from sales (15 weeks) | $215,768 |
| Distributor royalty (8% of weekly gross) | −$17,261 |
| **Studio take** | $198,507 |
| Net for this title (surplus + take − cash overrun; wages are studio-wide, excluded) | $156,144 |

**Quality trace** [scores are computed, never rolled]

Meters (0–100): Plot 73.41 · Writing 75.4 · Filming 76.52 · Editing 64.71
Inputs: staff points {"plot":138.86,"writing":154.15,"filming":131.08,"editing":88.71}, Star filming points 64.38 (Star family fit 92), studio Horror level 2 (+6%), era bar x1.21
Base scores: Audience 7.18 / Critic 7.33 · no weak meter
Combo grades: Audience B (x1.06) / Critic C (x1) · repetition fatigue x0.95 · critic saturation x1
**Final: Audience 7.23 / Critic 6.96 → avg 7.1**

**Opening & viewership trace** [marketing/Fame/reach affect viewers only]

Awareness inputs: base 0.35, marketing 0.55, studioBuzz 0, starFame 0.11, trend 0.4, ipFans 0 → awareness 0.76. Reach cap 140,000 → pool 105,782 → opening 31,735.

| Wk | Viewers | Retention | Driver | Gross | Studio | Distributor |
|---:|---:|---:|---|---:|---:|---:|
| 1 | 31,735 | 1 | opening | $63,470 | $58,392 | $5,078 |
| 2 | 21,915 | 0.69 | critic 6.96 (early buzz) | $43,830 | $40,324 | $3,506 |
| 3 | 15,134 | 0.69 | critic 6.96 (early buzz) | $30,268 | $27,847 | $2,421 |
| 4 | 11,003 | 0.73 | audience 7.23 (word of mouth) | $22,006 | $20,246 | $1,760 |
| 5 | 8,000 | 0.73 | audience 7.23 (word of mouth) | $16,000 | $14,720 | $1,280 |
| 6 | 5,816 | 0.73 | audience 7.23 (word of mouth) | $11,632 | $10,701 | $931 |
| 7 | 4,228 | 0.73 | audience 7.23 (word of mouth) | $8,456 | $7,780 | $676 |
| 8 | 3,074 | 0.73 | audience 7.23 (word of mouth) | $6,148 | $5,656 | $492 |
| 9 | 2,235 | 0.73 | audience 7.23 (word of mouth) | $4,470 | $4,112 | $358 |
| 10 | 1,625 | 0.73 | audience 7.23 (word of mouth) | $3,250 | $2,990 | $260 |
| 11 | 1,181 | 0.73 | audience 7.23 (word of mouth) | $2,362 | $2,173 | $189 |
| 12 | 859 | 0.73 | audience 7.23 (word of mouth) | $1,718 | $1,581 | $137 |
| 13 | 625 | 0.73 | audience 7.23 (word of mouth) | $1,250 | $1,150 | $100 |
| 14 | 454 | 0.73 | audience 7.23 (word of mouth) | $908 | $835 | $73 |
| 15 | 0 | 0.73 | audience 7.23 (word of mouth) | $0 | $0 | $0 |

**Progression trace**

- Prestige awards: none (no milestone reached)
- IP fans: {"before":0,"after":3625,"delta":3625}
- Star career: {"fameDelta":4.39,"relDelta":0.75,"grow":6,"level":8,"reasons":"worked together (+); project boosted their career (+)"}
- Distributor trust: Starlight Indie earned back 36% of its $48,000 advance on Red Frequency (step -0.17)
- Rule labels: LOCKED = causal chain, accounting, fallback/no-campaign, thresholds 4.0/9.0, IP fan inheritance. WORKING ASSUMPTION = all formulas' shapes and numbers.

### Lost Run — Action + Zombies (new)

Released week 288 (year 5.5) · Distributor: self-funded · Star: Liv Imai (L5, Fame 49) · IP: Lost Run

**Financial waterfall** [LOCKED rules; amounts provisional]

| Item | Amount |
|---|---:|
| Advance received (project reserve, not revenue) | $0 |
| Base cost (unavoidable) | −$60,000 |
| Star fee | −$41,731 |
| Marketing campaign | −$20,000 |
| Paid from studio cash (overrun) | $121,731 |
| **Unused advance kept at completion** | $0 |
| Gross from sales (11 weeks) | $121,590 |
| Distributor royalty (0% of weekly gross) | −$0 |
| **Studio take** | $121,590 |
| Net for this title (surplus + take − cash overrun; wages are studio-wide, excluded) | $-141 |

**Quality trace** [scores are computed, never rolled]

Meters (0–100): Plot 75.24 · Writing 77.1 · Filming 78.04 · Editing 66.49
Inputs: staff points {"plot":154.45,"writing":171.11,"filming":143.38,"editing":96.96}, Star filming points 71.94 (Star family fit 100), studio Action level 3 (+9%), era bar x1.22
Base scores: Audience 7.34 / Critic 7.5 · no weak meter
Combo grades: Audience A (x1.15) / Critic A (x1.15) · repetition fatigue x0.7 · critic saturation x1
**Final: Audience 5.91 / Critic 6.04 → avg 5.98**

**Opening & viewership trace** [marketing/Fame/reach affect viewers only]

Awareness inputs: base 0.35, marketing 0.55, studioBuzz 0, starFame 0.29, trend 0.4, ipFans 0 → awareness 0.8. Reach cap 88,000 → pool 70,019 → opening 21,006.

| Wk | Viewers | Retention | Driver | Gross | Studio | Distributor |
|---:|---:|---:|---|---:|---:|---:|
| 1 | 21,006 | 1 | opening | $42,012 | $42,012 | $0 |
| 2 | 13,810 | 0.66 | critic 6.04 (early buzz) | $27,620 | $27,620 | $0 |
| 3 | 9,079 | 0.66 | critic 6.04 (early buzz) | $18,158 | $18,158 | $0 |
| 4 | 6,026 | 0.66 | audience 5.91 (word of mouth) | $12,052 | $12,052 | $0 |
| 5 | 3,999 | 0.66 | audience 5.91 (word of mouth) | $7,998 | $7,998 | $0 |
| 6 | 2,654 | 0.66 | audience 5.91 (word of mouth) | $5,308 | $5,308 | $0 |
| 7 | 1,761 | 0.66 | audience 5.91 (word of mouth) | $3,522 | $3,522 | $0 |
| 8 | 1,169 | 0.66 | audience 5.91 (word of mouth) | $2,338 | $2,338 | $0 |
| 9 | 776 | 0.66 | audience 5.91 (word of mouth) | $1,552 | $1,552 | $0 |
| 10 | 515 | 0.66 | audience 5.91 (word of mouth) | $1,030 | $1,030 | $0 |
| 11 | 0 | 0.66 | audience 5.91 (word of mouth) | $0 | $0 | $0 |

**Progression trace**

- Prestige awards: none (no milestone reached)
- IP fans: {"before":0,"after":953,"delta":953}
- Star career: {"fameDelta":1.41,"relDelta":0.75,"grow":0,"level":5,"reasons":"worked together (+); project boosted their career (+)"}
- Rule labels: LOCKED = causal chain, accounting, fallback/no-campaign, thresholds 4.0/9.0, IP fan inheritance. WORKING ASSUMPTION = all formulas' shapes and numbers.

### Broken Protocol — Comedy + Superheroes (new)

Released week 304 (year 5.8) · Distributor: self-funded · Star: Cam Hart (L9, Fame 31) · IP: Broken Protocol

**Financial waterfall** [LOCKED rules; amounts provisional]

| Item | Amount |
|---|---:|
| Advance received (project reserve, not revenue) | $0 |
| Base cost (unavoidable) | −$60,000 |
| Star fee | −$12,692 |
| Marketing campaign | −$20,000 |
| Paid from studio cash (overrun) | $92,692 |
| **Unused advance kept at completion** | $0 |
| Gross from sales (15 weeks) | $151,512 |
| Distributor royalty (0% of weekly gross) | −$0 |
| **Studio take** | $151,512 |
| Net for this title (surplus + take − cash overrun; wages are studio-wide, excluded) | $58,820 |

**Quality trace** [scores are computed, never rolled]

Meters (0–100): Plot 75.86 · Writing 77.67 · Filming 78.28 · Editing 66.9
Inputs: staff points {"plot":161.28,"writing":178.53,"filming":150.55,"editing":99.75}, Star filming points 69.96 (Star family fit 100), studio Comedy level 2 (+6%), era bar x1.23
Base scores: Audience 7.38 / Critic 7.55 · no weak meter
Combo grades: Audience A (x1.15) / Critic D (x0.9) · repetition fatigue x1 · critic saturation x1
**Final: Audience 8.49 / Critic 6.8 → avg 7.65**

**Opening & viewership trace** [marketing/Fame/reach affect viewers only]

Awareness inputs: base 0.35, marketing 0.55, studioBuzz 0, starFame 0.14, trend 0.4, ipFans 0 → awareness 0.76. Reach cap 88,000 → pool 67,051 → opening 20,115.

| Wk | Viewers | Retention | Driver | Gross | Studio | Distributor |
|---:|---:|---:|---|---:|---:|---:|
| 1 | 20,115 | 1 | opening | $40,230 | $40,230 | $0 |
| 2 | 13,775 | 0.68 | critic 6.8 (early buzz) | $27,550 | $27,550 | $0 |
| 3 | 9,433 | 0.68 | critic 6.8 (early buzz) | $18,866 | $18,866 | $0 |
| 4 | 7,429 | 0.79 | audience 8.49 (word of mouth) | $14,858 | $14,858 | $0 |
| 5 | 5,850 | 0.79 | audience 8.49 (word of mouth) | $11,700 | $11,700 | $0 |
| 6 | 4,607 | 0.79 | audience 8.49 (word of mouth) | $9,214 | $9,214 | $0 |
| 7 | 3,628 | 0.79 | audience 8.49 (word of mouth) | $7,256 | $7,256 | $0 |
| 8 | 2,857 | 0.79 | audience 8.49 (word of mouth) | $5,714 | $5,714 | $0 |
| 9 | 2,250 | 0.79 | audience 8.49 (word of mouth) | $4,500 | $4,500 | $0 |
| 10 | 1,772 | 0.79 | audience 8.49 (word of mouth) | $3,544 | $3,544 | $0 |
| 11 | 1,395 | 0.79 | audience 8.49 (word of mouth) | $2,790 | $2,790 | $0 |
| 12 | 1,099 | 0.79 | audience 8.49 (word of mouth) | $2,198 | $2,198 | $0 |
| 13 | 865 | 0.79 | audience 8.49 (word of mouth) | $1,730 | $1,730 | $0 |
| 14 | 681 | 0.79 | audience 8.49 (word of mouth) | $1,362 | $1,362 | $0 |
| 15 | 0 | 0.79 | audience 8.49 (word of mouth) | $0 | $0 | $0 |

**Progression trace**

- Prestige awards: Prestige +75: audience_7_5 (Broken Protocol).
- IP fans: {"before":0,"after":3212,"delta":3212}
- Star career: {"fameDelta":4.45,"relDelta":0.75,"grow":0,"level":9,"reasons":"worked together (+); project boosted their career (+)"}
- Rule labels: LOCKED = causal chain, accounting, fallback/no-campaign, thresholds 4.0/9.0, IP fan inheritance. WORKING ASSUMPTION = all formulas' shapes and numbers.

### Midnight Horizon — Comedy + Superheroes (new)

Released week 320 (year 6.2) · Distributor: self-funded · Star: Cam Hart (L9, Fame 31) · IP: Midnight Horizon

**Financial waterfall** [LOCKED rules; amounts provisional]

| Item | Amount |
|---|---:|
| Advance received (project reserve, not revenue) | $0 |
| Base cost (unavoidable) | −$60,000 |
| Star fee | −$12,470 |
| Marketing campaign | −$20,000 |
| Paid from studio cash (overrun) | $92,470 |
| **Unused advance kept at completion** | $0 |
| Gross from sales (15 weeks) | $144,242 |
| Distributor royalty (0% of weekly gross) | −$0 |
| **Studio take** | $144,242 |
| Net for this title (surplus + take − cash overrun; wages are studio-wide, excluded) | $51,772 |

**Quality trace** [scores are computed, never rolled]

Meters (0–100): Plot 76.21 · Writing 78.02 · Filming 78.6 · Editing 67.51
Inputs: staff points {"plot":166.03,"writing":183.99,"filming":157.02,"editing":103.57}, Star filming points 69.96 (Star family fit 100), studio Comedy level 2 (+6%), era bar x1.25
Base scores: Audience 7.43 / Critic 7.59 · no weak meter
Combo grades: Audience A (x1.15) / Critic D (x0.9) · repetition fatigue x0.95 · critic saturation x1
**Final: Audience 8.11 / Critic 6.49 → avg 7.3**

**Opening & viewership trace** [marketing/Fame/reach affect viewers only]

Awareness inputs: base 0.35, marketing 0.55, studioBuzz 0, starFame 0.16, trend 0.4, ipFans 0 → awareness 0.77. Reach cap 88,000 → pool 67,603 → opening 20,281.

| Wk | Viewers | Retention | Driver | Gross | Studio | Distributor |
|---:|---:|---:|---|---:|---:|---:|
| 1 | 20,281 | 1 | opening | $40,562 | $40,562 | $0 |
| 2 | 13,662 | 0.67 | critic 6.49 (early buzz) | $27,324 | $27,324 | $0 |
| 3 | 9,203 | 0.67 | critic 6.49 (early buzz) | $18,406 | $18,406 | $0 |
| 4 | 7,080 | 0.77 | audience 8.11 (word of mouth) | $14,160 | $14,160 | $0 |
| 5 | 5,447 | 0.77 | audience 8.11 (word of mouth) | $10,894 | $10,894 | $0 |
| 6 | 4,190 | 0.77 | audience 8.11 (word of mouth) | $8,380 | $8,380 | $0 |
| 7 | 3,223 | 0.77 | audience 8.11 (word of mouth) | $6,446 | $6,446 | $0 |
| 8 | 2,479 | 0.77 | audience 8.11 (word of mouth) | $4,958 | $4,958 | $0 |
| 9 | 1,907 | 0.77 | audience 8.11 (word of mouth) | $3,814 | $3,814 | $0 |
| 10 | 1,467 | 0.77 | audience 8.11 (word of mouth) | $2,934 | $2,934 | $0 |
| 11 | 1,129 | 0.77 | audience 8.11 (word of mouth) | $2,258 | $2,258 | $0 |
| 12 | 869 | 0.77 | audience 8.11 (word of mouth) | $1,738 | $1,738 | $0 |
| 13 | 669 | 0.77 | audience 8.11 (word of mouth) | $1,338 | $1,338 | $0 |
| 14 | 515 | 0.77 | audience 8.11 (word of mouth) | $1,030 | $1,030 | $0 |
| 15 | 0 | 0.77 | audience 8.11 (word of mouth) | $0 | $0 | $0 |

**Progression trace**

- Prestige awards: Prestige +75: audience_7_5 (Midnight Horizon).
- IP fans: {"before":0,"after":2654,"delta":2654}
- Star career: {"fameDelta":3.73,"relDelta":0.75,"grow":0,"level":9,"reasons":"worked together (+); project boosted their career (+)"}
- Rule labels: LOCKED = causal chain, accounting, fallback/no-campaign, thresholds 4.0/9.0, IP fan inheritance. WORKING ASSUMPTION = all formulas' shapes and numbers.

## Cash ledger (studio cash only)

| Week | Kind | Amount | Note |
|---:|---|---:|---|
| 0 | start_cash | $40,000 |  |
| 0 | advance_received | $37,000 | advance from Starlight Indie (project reserve, not revenue) |
| 0 | advance_spent | $-37,000 | base_cost: unavoidable base cost |
| 0 | base_cost | $-23,000 | unavoidable base cost |
| 16 | advance_received | $41,000 | advance from Starlight Indie (project reserve, not revenue) |
| 16 | advance_spent | $-41,000 | base_cost: unavoidable base cost |
| 16 | base_cost | $-19,000 | unavoidable base cost |
| 32 | advance_received | $35,000 | advance from Starlight Indie (project reserve, not revenue) |
| 32 | advance_spent | $-35,000 | base_cost: unavoidable base cost |
| 32 | base_cost | $-25,000 | unavoidable base cost |
| 48 | advance_received | $37,000 | advance from Starlight Indie (project reserve, not revenue) |
| 48 | advance_spent | $-37,000 | base_cost: unavoidable base cost |
| 48 | base_cost | $-23,000 | unavoidable base cost |
| 64 | advance_received | $38,000 | advance from Starlight Indie (project reserve, not revenue) |
| 64 | advance_spent | $-38,000 | base_cost: unavoidable base cost |
| 64 | base_cost | $-22,000 | unavoidable base cost |
| 71 | star_fee | $-4,504 | Liv Lind |
| 80 | advance_received | $79,000 | advance from Wolf Pictures (project reserve, not revenue) |
| 80 | advance_spent | $-60,000 | base_cost: unavoidable base cost |
| 87 | advance_spent | $-3,041 | star_fee: Cam Hart |
| 93 | advance_spent | $-15,959 | campaign: medium |
| 93 | campaign | $-4,041 | medium |
| 96 | advance_received | $100,000 | advance from Wolf Pictures (project reserve, not revenue) |
| 96 | advance_spent | $-60,000 | base_cost: unavoidable base cost |
| 103 | advance_spent | $-3,041 | star_fee: Cam Hart |
| 109 | advance_spent | $-20,000 | campaign: medium |
| 112 | surplus_transfer | $16,959 | unused advance kept at completion (not sales revenue) |
| 112 | train | $-15,000 | Sam |
| 112 | train | $-15,000 | Alex |
| 112 | base_cost | $-60,000 | unavoidable base cost |
| 119 | star_fee | $-109,804 | Eli Quinn |
| 125 | campaign | $-20,000 | medium |
| 128 | train | $-15,000 | Sam |
| 128 | train | $-15,000 | Alex |
| 128 | base_cost | $-60,000 | unavoidable base cost |
| 135 | star_fee | $-103,725 | Eli Quinn |
| 141 | campaign | $-20,000 | medium |
| 144 | base_cost | $-60,000 | unavoidable base cost |
| 151 | star_fee | $-68,277 | Noa Park |
| 157 | campaign | $-20,000 | medium |
| 160 | advance_received | $100,000 | advance from Wolf Pictures (project reserve, not revenue) |
| 160 | advance_spent | $-60,000 | base_cost: unavoidable base cost |
| 167 | advance_spent | $-5,910 | star_fee: Cam Hart |
| 173 | advance_spent | $-20,000 | campaign: medium |
| 176 | surplus_transfer | $14,090 | unused advance kept at completion (not sales revenue) |
| 176 | train | $-15,000 | Sam |
| 176 | train | $-15,000 | Alex |
| 176 | base_cost | $-60,000 | unavoidable base cost |
| 183 | star_fee | $-69,791 | Noa Park |
| 189 | campaign | $-20,000 | medium |
| 192 | train | $-15,000 | Sam |
| 192 | train | $-15,000 | Alex |
| 192 | base_cost | $-60,000 | unavoidable base cost |
| 199 | star_fee | $-69,791 | Noa Park |
| 205 | campaign | $-20,000 | medium |
| 208 | train | $-15,000 | Sam |
| 208 | base_cost | $-60,000 | unavoidable base cost |
| 215 | star_fee | $-41,731 | Sam Park |
| 221 | campaign | $-20,000 | medium |
| 224 | base_cost | $-60,000 | unavoidable base cost |
| 231 | star_fee | $-9,203 | Cam Hart |
| 237 | campaign | $-20,000 | medium |
| 240 | advance_received | $47,000 | advance from Starlight Indie (project reserve, not revenue) |
| 240 | advance_spent | $-47,000 | base_cost: unavoidable base cost |
| 240 | base_cost | $-13,000 | unavoidable base cost |
| 247 | star_fee | $-43,077 | Sam Park |
| 253 | campaign | $-20,000 | medium |
| 256 | advance_received | $48,000 | advance from Starlight Indie (project reserve, not revenue) |
| 256 | advance_spent | $-48,000 | base_cost: unavoidable base cost |
| 256 | base_cost | $-12,000 | unavoidable base cost |
| 263 | star_fee | $-10,362 | Cam Hart |
| 269 | campaign | $-20,000 | medium |
| 272 | train | $-15,000 | Alex |
| 272 | train | $-15,000 | Sam |
| 272 | base_cost | $-60,000 | unavoidable base cost |
| 279 | star_fee | $-41,731 | Liv Imai |
| 285 | campaign | $-20,000 | medium |
| 288 | train | $-15,000 | Alex |
| 288 | train | $-15,000 | Sam |
| 288 | base_cost | $-60,000 | unavoidable base cost |
| 295 | star_fee | $-12,692 | Cam Hart |
| 301 | campaign | $-20,000 | medium |
| 304 | train | $-15,000 | Alex |
| 304 | train | $-15,000 | Sam |
| 304 | base_cost | $-60,000 | unavoidable base cost |
| 311 | star_fee | $-12,470 | Cam Hart |
| 317 | campaign | $-20,000 | medium |
| all | payroll (total) | $-603,000 | aggregated |
| all | upkeep (total) | $-201,000 | aggregated |
| all | studio_take (total) | $2,815,967 | aggregated |
