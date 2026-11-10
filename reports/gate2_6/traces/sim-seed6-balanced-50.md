# Single career — seed 6, strategy balanced

> **Simulation assumptions, not design locks.** All numbers come from provisional config values. Nothing here is official balance.

- Ruleset: `v9.61-movie-kernel-0.1` · Config: `gate25-candidate+expectations={"critics":{"enabled":true,"generationYears":6,"toughnessPerGeneration":0.08,"maxToughness":0.12},"audience":{"enabled":true,"eraYears":10,"toughnessPerEra":0.02,"maxToughness":0.06}}` (hash `7a537c27`)
- Seed: 6
- Strategy: balanced
- Decisions: 1113
- Modelled: movies; distributor advances/royalties/trust; Stars (families, budgets, fallback, callbacks, relationships); marketing + studio buzz; scores + legs; IP fans; Prestige milestones; studio genre levels; trends; staff XP/hire/train; studio staff-capacity cap + upgrade ladder (when configured); theme research + staff pitches
- **Not modelled:** limited series; TV series/seasons/renewals/hiatus/announcements; streaming service/subscribers; eras beyond a gentle quality bar; studio upgrades other than staff capacity; format unlock gates; genre unlocks; late-game concurrency

## Career summary

- Weeks: 815 (15.7 years) · Releases: 50 · Cancellations: 0
- End cash: $13,249,042 (start $40,000) · Negative-cash weeks: 0
- Prestige: 9560 (120 awards)
- Staff: Sam [P 100 W 100 F 97 E 90, XP 8000]; Alex [P 99 W 100 F 100 E 94, XP 8000]; Liv Diaz [P 98 W 100 F 96 E 94, XP 7680]; Gus Okafor [P 100 W 100 F 100 E 92, XP 7680]; Max Grant [P 100 W 97 F 98 E 91, XP 7040]; Lee Lind [P 99 W 100 F 99 E 92, XP 7040]; Sam Quinn [P 99 W 100 F 96 E 93, XP 6880]; Noa Sato [P 99 W 96 F 97 E 95, XP 6880]
- Studio genre levels (exact genre): Action xp 18, Comedy xp 24, Horror xp 8
- IP fans: Lost Night 586; Broken Signal 745; Iron Run 5,002; Dead Run 66,804; Hollow Protocol 4,538; Dead Run 4,558; Hollow Night 7,810; Dead Echo 4,945; Wild Signal 6,430; Red Run 8,114; Midnight Horizon 8,847; Red Night 4,711; Hollow Shadow 8,154; Dead Storm 6,994; Silver Horizon 75,042; Dead Frequency 8,741; Wild Code 8,173; Broken Frequency 13,702; Iron Frequency 16,496; Dead Protocol 42,270; Dead Code 13,677; Broken Edge 15,036; Midnight Shadow 12,184; Broken Signal 18,958; Lost Frequency 17,359; Last Edge 20,410; Wild Edge 17,303; Hollow Legacy 14,743; Dead Code 18,904; Lost Echo 17,773; Midnight Legacy 21,017; Hollow Pulse 13,334; Midnight Edge 20,164
- Distributor trust: wolf 3.58, starlight 2.50, xyz 5.00, orbit 4.72, meridian 4.98
- Stars hired: Dee Okafor (L1, Fame 14, rel 1.75); Bo Hart (L9, Fame 100, rel 5.00); Sam Diaz (L6, Fame 100, rel 4.25); Gus Quinn (L8, Fame 100, rel 5.00); Rae Hart (L6, Fame 79, rel 0.00); Sam Lind (L7, Fame 98, rel 0.75); Kai Hart (L5, Fame 82, rel 1.00); Max Okafor (L6, Fame 85, rel 3.25); Eli Park (L3, Fame 40, rel 1.75); Gus Diaz (L4, Fame 85, rel 3.25); Dee Diaz (L4, Fame 35, rel 1.75)
- Great films: Hall of Fame 9/50 · avg ≥9.0 9/50 · avg >9.0 8/50 · Audience ≥9 15/50 · Critic ≥9 7/50 · 8+ 28/50
- Best film: 9.88 "Dead Protocol" (A10/C9.76; balanced seed 6 #32, yr 9.8, critic gen 1) · best Audience: 9.88 "Dead Protocol" (A10/C9.76; balanced seed 6 #32, yr 9.8, critic gen 1) · best Critic: 9.88 "Dead Protocol" (A10/C9.76; balanced seed 6 #32, yr 9.8, critic gen 1)

## Releases (full causal trace)

### Lost Night — Action + Spies (new)

Released week 16 (year 0.3) · Distributor: Wolf Pictures · Star: Dee Okafor (L1, Fame 14) · IP: Lost Night

**Financial waterfall** [LOCKED rules; amounts provisional]

| Item | Amount |
|---|---:|
| Advance received (project reserve, not revenue) | $89,000 |
| Base cost (unavoidable) | −$60,000 |
| Star fee | −$8,130 |
| Marketing campaign | −$20,000 |
| Paid from studio cash (overrun) | $0 |
| **Unused advance kept at completion** | $870 |
| Gross from sales (15 weeks) | $326,598 |
| Distributor royalty (31% of weekly gross) | −$101,245 |
| **Studio take** | $225,353 |
| Net for this title (surplus + take − cash overrun; wages are studio-wide, excluded) | $226,223 |

**Quality trace** [scores are computed, never rolled]

Meters (0–100): Plot 56.64 · Writing 57.92 · Filming 59.54 · Editing 47.43
Inputs: staff points {"plot":55.02,"writing":57.96,"filming":51.46,"editing":36.53}, Star filming points 22.44 (Star family fit 34), studio Action level 0 (+0%), era bar x1.01
Base scores: Audience 5.46 / Critic 5.61 · no weak meter
Combo grades: Audience A (x1.15) / Critic C (x1) · repetition fatigue x1 · critic saturation x1
Before expectations (after combo, weakness, fatigue, saturation; pre-clamp): Audience 6.28 / Critic 5.61 · critic generation 0 (−0.0%, undefined) · audience era 0 (−0.0%) · then clamp 0–10 (generation/era 0 = the ones active at game start)
**Final: Audience 6.28 / Critic 5.61 → avg 5.95**

**Opening & viewership trace** [marketing/Fame/reach affect viewers only]

Awareness inputs: base 0.35, marketing 0.55, studioBuzz 0, starFame 0.07, trend 0, ipFans 0 → awareness 0.62. Reach cap 264,000 → pool 164,122 → opening 49,237.

| Wk | Viewers | Retention | Driver | Gross | Studio | Distributor |
|---:|---:|---:|---|---:|---:|---:|
| 1 | 49,237 | 1 | opening (aware people watching) | $98,474 | $67,947 | $30,527 |
| 2 | 31,707 | 0.64 | critic 5.61: +1,462 newly aware (buzz) | $63,414 | $43,756 | $19,658 |
| 3 | 19,784 | 0.62 | critic 5.61: +1,643 newly aware (buzz) | $39,568 | $27,302 | $12,266 |
| 4 | 15,652 | 0.79 | audience 6.28: +10,129 newly aware (word of mouth) | $31,304 | $21,600 | $9,704 |
| 5 | 11,935 | 0.76 | audience 6.28: +8,014 newly aware (word of mouth) | $23,870 | $16,470 | $7,400 |
| 6 | 9,101 | 0.76 | audience 6.28: +6,111 newly aware (word of mouth) | $18,202 | $12,559 | $5,643 |
| 7 | 6,940 | 0.76 | audience 6.28: +4,660 newly aware (word of mouth) | $13,880 | $9,577 | $4,303 |
| 8 | 5,292 | 0.76 | audience 6.28: +3,553 newly aware (word of mouth) | $10,584 | $7,303 | $3,281 |
| 9 | 4,035 | 0.76 | audience 6.28: +2,710 newly aware (word of mouth) | $8,070 | $5,568 | $2,502 |
| 10 | 3,077 | 0.76 | audience 6.28: +2,066 newly aware (word of mouth) | $6,154 | $4,246 | $1,908 |
| 11 | 2,346 | 0.76 | audience 6.28: +1,575 newly aware (word of mouth) | $4,692 | $3,237 | $1,455 |
| 12 | 1,789 | 0.76 | audience 6.28: +1,201 newly aware (word of mouth) | $3,578 | $2,469 | $1,109 |
| 13 | 1,364 | 0.76 | audience 6.28: +916 newly aware (word of mouth) | $2,728 | $1,882 | $846 |
| 14 | 1,040 | 0.76 | audience 6.28: +698 newly aware (word of mouth) | $2,080 | $1,435 | $645 |
| 15 | 0 | 0 | audience 6.28: +532 newly aware (word of mouth) | $0 | $0 | $0 |

**Progression trace**

- Prestige awards: none (no milestone reached)
- IP fans: {"before":0,"after":2482,"delta":2482}
- Star career: {"fameDelta":2.48,"relDelta":0.75,"grow":6,"level":1,"reasons":"worked together (+); project boosted their career (+)"}
- Distributor trust: Wolf Pictures earned 114% of its advance back on Lost Night (step 0.14)
- Rule labels: LOCKED = causal chain, accounting, fallback/no-campaign, thresholds 4.0/9.0, IP fan inheritance. WORKING ASSUMPTION = all formulas' shapes and numbers.

### Broken Signal — Action + Spies (new)

Released week 32 (year 0.6) · Distributor: Wolf Pictures · Star: Bo Hart (L9, Fame 100) · IP: Broken Signal

**Financial waterfall** [LOCKED rules; amounts provisional]

| Item | Amount |
|---|---:|
| Advance received (project reserve, not revenue) | $93,000 |
| Base cost (unavoidable) | −$60,000 |
| Star fee | −$33,664 |
| Marketing campaign | −$20,000 |
| Paid from studio cash (overrun) | $20,664 |
| **Unused advance kept at completion** | $0 |
| Gross from sales (15 weeks) | $377,728 |
| Distributor royalty (31% of weekly gross) | −$117,096 |
| **Studio take** | $260,632 |
| Net for this title (surplus + take − cash overrun; wages are studio-wide, excluded) | $239,968 |

**Quality trace** [scores are computed, never rolled]

Meters (0–100): Plot 58.55 · Writing 60 · Filming 70.98 · Editing 48.59
Inputs: staff points {"plot":60.22,"writing":63.94,"filming":56.32,"editing":38.74}, Star filming points 67.98 (Star family fit 100), studio Action level 1 (+3%), era bar x1.02
Base scores: Audience 5.96 / Critic 5.94 · no weak meter
Combo grades: Audience A (x1.15) / Critic C (x1) · repetition fatigue x0.95 · critic saturation x1
Before expectations (after combo, weakness, fatigue, saturation; pre-clamp): Audience 6.51 / Critic 5.65 · critic generation 0 (−0.0%, undefined) · audience era 0 (−0.0%) · then clamp 0–10 (generation/era 0 = the ones active at game start)
**Final: Audience 6.51 / Critic 5.65 → avg 6.08**

**Opening & viewership trace** [marketing/Fame/reach affect viewers only]

Awareness inputs: base 0.35, marketing 0.55, studioBuzz 0, starFame 0.24, trend 0, ipFans 0 → awareness 0.68. Reach cap 264,000 → pool 179,568 → opening 53,870.

| Wk | Viewers | Retention | Driver | Gross | Studio | Distributor |
|---:|---:|---:|---|---:|---:|---:|
| 1 | 53,870 | 1 | opening (aware people watching) | $107,740 | $74,341 | $33,399 |
| 2 | 34,671 | 0.64 | critic 5.65: +1,317 newly aware (buzz) | $69,342 | $47,846 | $21,496 |
| 3 | 21,534 | 0.62 | critic 5.65: +1,532 newly aware (buzz) | $43,068 | $29,717 | $13,351 |
| 4 | 17,822 | 0.83 | audience 6.51: +13,007 newly aware (word of mouth) | $35,644 | $24,594 | $11,050 |
| 5 | 14,096 | 0.79 | audience 6.51: +10,764 newly aware (word of mouth) | $28,192 | $19,452 | $8,740 |
| 6 | 11,149 | 0.79 | audience 6.51: +8,514 newly aware (word of mouth) | $22,298 | $15,386 | $6,912 |
| 7 | 8,818 | 0.79 | audience 6.51: +6,734 newly aware (word of mouth) | $17,636 | $12,169 | $5,467 |
| 8 | 6,975 | 0.79 | audience 6.51: +5,326 newly aware (word of mouth) | $13,950 | $9,626 | $4,325 |
| 9 | 5,517 | 0.79 | audience 6.51: +4,213 newly aware (word of mouth) | $11,034 | $7,613 | $3,421 |
| 10 | 4,364 | 0.79 | audience 6.51: +3,332 newly aware (word of mouth) | $8,728 | $6,022 | $2,706 |
| 11 | 3,451 | 0.79 | audience 6.51: +2,636 newly aware (word of mouth) | $6,902 | $4,762 | $2,140 |
| 12 | 2,730 | 0.79 | audience 6.51: +2,084 newly aware (word of mouth) | $5,460 | $3,767 | $1,693 |
| 13 | 2,159 | 0.79 | audience 6.51: +1,649 newly aware (word of mouth) | $4,318 | $2,979 | $1,339 |
| 14 | 1,708 | 0.79 | audience 6.51: +1,304 newly aware (word of mouth) | $3,416 | $2,357 | $1,059 |
| 15 | 0 | 0 | audience 6.51: +1,032 newly aware (word of mouth) | $0 | $0 | $0 |

**Progression trace**

- Prestige awards: none (no milestone reached)
- IP fans: {"before":0,"after":3264,"delta":3264}
- Star career: {"fameDelta":3.01,"relDelta":0.75,"grow":0,"level":4,"reasons":"worked together (+); project boosted their career (+)"}
- Distributor trust: Wolf Pictures earned 126% of its advance back on Broken Signal (step 0.23)
- Rule labels: LOCKED = causal chain, accounting, fallback/no-campaign, thresholds 4.0/9.0, IP fan inheritance. WORKING ASSUMPTION = all formulas' shapes and numbers.

### Iron Run — Comedy + Sports (new)

Released week 48 (year 0.9) · Distributor: Wolf Pictures · Star: Sam Diaz (L6, Fame 100) · IP: Iron Run

**Financial waterfall** [LOCKED rules; amounts provisional]

| Item | Amount |
|---|---:|
| Advance received (project reserve, not revenue) | $87,000 |
| Base cost (unavoidable) | −$60,000 |
| Star fee | −$20,203 |
| Marketing campaign | −$20,000 |
| Paid from studio cash (overrun) | $13,203 |
| **Unused advance kept at completion** | $0 |
| Gross from sales (15 weeks) | $468,572 |
| Distributor royalty (31% of weekly gross) | −$145,257 |
| **Studio take** | $323,315 |
| Net for this title (surplus + take − cash overrun; wages are studio-wide, excluded) | $310,111 |

**Quality trace** [scores are computed, never rolled]

Meters (0–100): Plot 72.44 · Writing 73.61 · Filming 75.89 · Editing 64.45
Inputs: staff points {"plot":113.38,"writing":120.32,"filming":106.45,"editing":75.19}, Star filming points 55.44 (Star family fit 84), studio Comedy level 0 (+0%), era bar x1.04
Base scores: Audience 7.1 / Critic 7.22 · no weak meter
Combo grades: Audience B (x1.06) / Critic B (x1.06) · repetition fatigue x1 · critic saturation x1
Before expectations (after combo, weakness, fatigue, saturation; pre-clamp): Audience 7.53 / Critic 7.65 · critic generation 0 (−0.0%, undefined) · audience era 0 (−0.0%) · then clamp 0–10 (generation/era 0 = the ones active at game start)
**Final: Audience 7.53 / Critic 7.65 → avg 7.59**

**Opening & viewership trace** [marketing/Fame/reach affect viewers only]

Awareness inputs: base 0.35, marketing 0.55, studioBuzz 0, starFame 0.16, trend 0, ipFans 0 → awareness 0.65. Reach cap 240,000 → pool 157,017 → opening 47,105.

| Wk | Viewers | Retention | Driver | Gross | Studio | Distributor |
|---:|---:|---:|---|---:|---:|---:|
| 1 | 47,105 | 1 | opening (aware people watching) | $94,210 | $65,005 | $29,205 |
| 2 | 34,655 | 0.74 | critic 7.65: +5,278 newly aware (buzz) | $69,310 | $47,824 | $21,486 |
| 3 | 22,099 | 0.64 | critic 7.65: +5,781 newly aware (buzz) | $44,198 | $30,497 | $13,701 |
| 4 | 20,330 | 0.92 | audience 7.53: +22,364 newly aware (word of mouth) | $40,660 | $28,055 | $12,605 |
| 5 | 18,797 | 0.92 | audience 7.53: +20,574 newly aware (word of mouth) | $37,594 | $25,940 | $11,654 |
| 6 | 17,380 | 0.92 | audience 7.53: +19,023 newly aware (word of mouth) | $34,760 | $23,984 | $10,776 |
| 7 | 16,070 | 0.92 | audience 7.53: +17,589 newly aware (word of mouth) | $32,140 | $22,177 | $9,963 |
| 8 | 14,858 | 0.92 | audience 7.53: +16,263 newly aware (word of mouth) | $29,716 | $20,504 | $9,212 |
| 9 | 13,738 | 0.92 | audience 7.53: +15,036 newly aware (word of mouth) | $27,476 | $18,958 | $8,518 |
| 10 | 10,726 | 0.78 | audience 7.53: +8,055 newly aware (word of mouth) | $21,452 | $14,802 | $6,650 |
| 11 | 7,340 | 0.68 | audience 7.53: +3,230 newly aware (word of mouth) | $14,680 | $10,129 | $4,551 |
| 12 | 5,129 | 0.7 | audience 7.53: +2,521 newly aware (word of mouth) | $10,258 | $7,078 | $3,180 |
| 13 | 3,571 | 0.7 | audience 7.53: +1,726 newly aware (word of mouth) | $7,142 | $4,928 | $2,214 |
| 14 | 2,488 | 0.7 | audience 7.53: +1,206 newly aware (word of mouth) | $4,976 | $3,433 | $1,543 |
| 15 | 0 | 0 | audience 7.53: +840 newly aware (word of mouth) | $0 | $0 | $0 |

**Progression trace**

- Prestige awards: Prestige +75: audience_7_5 (Iron Run).
- IP fans: {"before":0,"after":9709,"delta":9709}
- Star career: {"fameDelta":7.9,"relDelta":0.75,"grow":6,"level":2,"reasons":"worked together (+); project boosted their career (+)"}
- Distributor trust: Wolf Pictures earned 167% of its advance back on Iron Run with strong reviews (step 0.68)
- Rule labels: LOCKED = causal chain, accounting, fallback/no-campaign, thresholds 4.0/9.0, IP fan inheritance. WORKING ASSUMPTION = all formulas' shapes and numbers.

### Dead Run — Comedy + Spies (new)

Released week 64 (year 1.2) · Distributor: Orbit Releasing · Star: Sam Diaz (L6, Fame 100) · IP: Dead Run

**Financial waterfall** [LOCKED rules; amounts provisional]

| Item | Amount |
|---|---:|
| Advance received (project reserve, not revenue) | $81,000 |
| Base cost (unavoidable) | −$60,000 |
| Star fee | −$19,759 |
| Marketing campaign | −$20,000 |
| Paid from studio cash (overrun) | $18,759 |
| **Unused advance kept at completion** | $0 |
| Gross from sales (15 weeks) | $651,288 |
| Distributor royalty (35% of weekly gross) | −$227,951 |
| **Studio take** | $423,337 |
| Net for this title (surplus + take − cash overrun; wages are studio-wide, excluded) | $404,579 |

**Quality trace** [scores are computed, never rolled]

Meters (0–100): Plot 75.43 · Writing 76.74 · Filming 78.07 · Editing 67.37
Inputs: staff points {"plot":134.02,"writing":143.97,"filming":128.16,"editing":86.67}, Star filming points 57.12 (Star family fit 90), studio Comedy level 1 (+3%), era bar x1.05
Base scores: Audience 7.37 / Critic 7.51 · no weak meter
Combo grades: Audience C (x1) / Critic B (x1.06) · repetition fatigue x1 · critic saturation x1
Before expectations (after combo, weakness, fatigue, saturation; pre-clamp): Audience 7.37 / Critic 7.96 · critic generation 0 (−0.0%, undefined) · audience era 0 (−0.0%) · then clamp 0–10 (generation/era 0 = the ones active at game start)
**Final: Audience 7.37 / Critic 7.96 → avg 7.67**

**Opening & viewership trace** [marketing/Fame/reach affect viewers only]

Awareness inputs: base 0.35, marketing 0.55, studioBuzz 0, starFame 0.21, trend 0.15, ipFans 0 → awareness 0.72. Reach cap 332,000 → pool 237,770 → opening 71,331.

| Wk | Viewers | Retention | Driver | Gross | Studio | Distributor |
|---:|---:|---:|---|---:|---:|---:|
| 1 | 71,331 | 1 | opening (aware people watching) | $142,662 | $92,730 | $49,932 |
| 2 | 52,748 | 0.74 | critic 7.96: +6,694 newly aware (buzz) | $105,496 | $68,572 | $36,924 |
| 3 | 33,063 | 0.63 | critic 7.96: +7,637 newly aware (buzz) | $66,126 | $42,982 | $23,144 |
| 4 | 29,102 | 0.88 | audience 7.37: +31,344 newly aware (word of mouth) | $58,204 | $37,833 | $20,371 |
| 5 | 26,274 | 0.9 | audience 7.37: +27,589 newly aware (word of mouth) | $52,548 | $34,156 | $18,392 |
| 6 | 23,720 | 0.9 | audience 7.37: +24,908 newly aware (word of mouth) | $47,440 | $30,836 | $16,604 |
| 7 | 21,415 | 0.9 | audience 7.37: +22,487 newly aware (word of mouth) | $42,830 | $27,840 | $14,991 |
| 8 | 19,334 | 0.9 | audience 7.37: +20,301 newly aware (word of mouth) | $38,668 | $25,134 | $13,534 |
| 9 | 16,918 | 0.88 | audience 7.37: +16,728 newly aware (word of mouth) | $33,836 | $21,993 | $11,843 |
| 10 | 11,434 | 0.68 | audience 7.37: +4,594 newly aware (word of mouth) | $22,868 | $14,864 | $8,004 |
| 11 | 8,034 | 0.7 | audience 7.37: +4,020 newly aware (word of mouth) | $16,068 | $10,444 | $5,624 |
| 12 | 5,610 | 0.7 | audience 7.37: +2,717 newly aware (word of mouth) | $11,220 | $7,293 | $3,927 |
| 13 | 3,921 | 0.7 | audience 7.37: +1,909 newly aware (word of mouth) | $7,842 | $5,097 | $2,745 |
| 14 | 2,740 | 0.7 | audience 7.37: +1,333 newly aware (word of mouth) | $5,480 | $3,562 | $1,918 |
| 15 | 0 | 0 | audience 7.37: +932 newly aware (word of mouth) | $0 | $0 | $0 |

**Progression trace**

- Prestige awards: none (no milestone reached)
- IP fans: {"before":0,"after":13912,"delta":13912}
- Star career: {"fameDelta":9.14,"relDelta":0.75,"grow":6,"level":3,"reasons":"worked together (+); project boosted their career (+)"}
- Distributor trust: Orbit Releasing earned 281% of its advance back on Dead Run with strong reviews (step 0.75)
- Rule labels: LOCKED = causal chain, accounting, fallback/no-campaign, thresholds 4.0/9.0, IP fan inheritance. WORKING ASSUMPTION = all formulas' shapes and numbers.

### Iron Run 2 — Comedy + Sports (sequel)

Released week 80 (year 1.5) · Distributor: Wolf Pictures · Star: Sam Diaz (L6, Fame 100) · IP: Iron Run

**Financial waterfall** [LOCKED rules; amounts provisional]

| Item | Amount |
|---|---:|
| Advance received (project reserve, not revenue) | $91,000 |
| Base cost (unavoidable) | −$60,000 |
| Star fee | −$26,255 |
| Marketing campaign | −$20,000 |
| Paid from studio cash (overrun) | $15,255 |
| **Unused advance kept at completion** | $0 |
| Gross from sales (15 weeks) | $473,418 |
| Distributor royalty (30% of weekly gross) | −$142,025 |
| **Studio take** | $331,393 |
| Net for this title (surplus + take − cash overrun; wages are studio-wide, excluded) | $316,138 |

**Quality trace** [scores are computed, never rolled]

Meters (0–100): Plot 76.9 · Writing 78.26 · Filming 79.22 · Editing 68.95
Inputs: staff points {"plot":147.01,"writing":158.97,"filming":139.52,"editing":94.3}, Star filming points 61.2 (Star family fit 96), studio Comedy level 1 (+3%), era bar x1.06
Base scores: Audience 7.51 / Critic 7.65 · no weak meter
Combo grades: Audience B (x1.06) / Critic B (x1.06) · repetition fatigue x0.98 · critic saturation x1
Before expectations (after combo, weakness, fatigue, saturation; pre-clamp): Audience 7.8 / Critic 7.95 · critic generation 0 (−0.0%, undefined) · audience era 0 (−0.0%) · then clamp 0–10 (generation/era 0 = the ones active at game start)
**Final: Audience 7.8 / Critic 7.95 → avg 7.88**

**Opening & viewership trace** [marketing/Fame/reach affect viewers only]

Awareness inputs: base 0.35, marketing 0.55, studioBuzz 0, starFame 0.26, trend 0, ipFans 0.06 → awareness 0.71. Reach cap 240,000 → pool 169,355 → opening 50,807.

| Wk | Viewers | Retention | Driver | Gross | Studio | Distributor |
|---:|---:|---:|---|---:|---:|---:|
| 1 | 50,807 | 1 | opening (aware people watching) | $101,614 | $71,130 | $30,484 |
| 2 | 37,635 | 0.74 | critic 7.95: +5,002 newly aware (buzz) | $75,270 | $52,689 | $22,581 |
| 3 | 23,664 | 0.63 | critic 7.95: +5,655 newly aware (buzz) | $47,328 | $33,130 | $14,198 |
| 4 | 22,631 | 0.96 | audience 7.8: +26,504 newly aware (word of mouth) | $45,262 | $31,683 | $13,579 |
| 5 | 21,773 | 0.96 | audience 7.8: +25,347 newly aware (word of mouth) | $43,546 | $30,482 | $13,064 |
| 6 | 20,947 | 0.96 | audience 7.8: +24,386 newly aware (word of mouth) | $41,894 | $29,326 | $12,568 |
| 7 | 19,736 | 0.94 | audience 7.8: +22,242 newly aware (word of mouth) | $39,472 | $27,630 | $11,842 |
| 8 | 13,082 | 0.66 | audience 7.8: +4,836 newly aware (word of mouth) | $26,164 | $18,315 | $7,849 |
| 9 | 9,133 | 0.7 | audience 7.8: +4,557 newly aware (word of mouth) | $18,266 | $12,786 | $5,480 |
| 10 | 6,321 | 0.69 | audience 7.8: +3,020 newly aware (word of mouth) | $12,642 | $8,849 | $3,793 |
| 11 | 4,382 | 0.69 | audience 7.8: +2,109 newly aware (word of mouth) | $8,764 | $6,135 | $2,629 |
| 12 | 3,036 | 0.69 | audience 7.8: +1,459 newly aware (word of mouth) | $6,072 | $4,250 | $1,822 |
| 13 | 2,104 | 0.69 | audience 7.8: +1,012 newly aware (word of mouth) | $4,208 | $2,946 | $1,262 |
| 14 | 1,458 | 0.69 | audience 7.8: +701 newly aware (word of mouth) | $2,916 | $2,041 | $875 |
| 15 | 0 | 0 | audience 7.8: +486 newly aware (word of mouth) | $0 | $0 | $0 |

**Progression trace**

- Prestige awards: Prestige +75: audience_7_5 (Iron Run 2).
- IP fans: {"before":9128,"after":20036,"delta":10908}
- Star career: {"fameDelta":8.81,"relDelta":0.75,"grow":4,"level":3,"reasons":"worked together (+); project boosted their career (+)"}
- Distributor trust: Wolf Pictures earned 156% of its advance back on Iron Run 2 with strong reviews (step 0.65)
- Rule labels: LOCKED = causal chain, accounting, fallback/no-campaign, thresholds 4.0/9.0, IP fan inheritance. WORKING ASSUMPTION = all formulas' shapes and numbers.

### Dead Run 2 — Comedy + Spies (sequel)

Released week 96 (year 1.8) · Distributor: Orbit Releasing · Star: Sam Diaz (L6, Fame 100) · IP: Dead Run

**Financial waterfall** [LOCKED rules; amounts provisional]

| Item | Amount |
|---|---:|
| Advance received (project reserve, not revenue) | $102,000 |
| Base cost (unavoidable) | −$60,000 |
| Star fee | −$33,465 |
| Marketing campaign | −$20,000 |
| Paid from studio cash (overrun) | $11,465 |
| **Unused advance kept at completion** | $0 |
| Gross from sales (15 weeks) | $656,976 |
| Distributor royalty (34% of weekly gross) | −$223,372 |
| **Studio take** | $433,604 |
| Net for this title (surplus + take − cash overrun; wages are studio-wide, excluded) | $422,139 |

**Quality trace** [scores are computed, never rolled]

Meters (0–100): Plot 78.72 · Writing 80.08 · Filming 80.59 · Editing 71.09
Inputs: staff points {"plot":165.27,"writing":179.58,"filming":153.95,"editing":105.6}, Star filming points 67.14 (Star family fit 100), studio Comedy level 2 (+6%), era bar x1.07
Base scores: Audience 7.69 / Critic 7.83 · no weak meter
Combo grades: Audience C (x1) / Critic B (x1.06) · repetition fatigue x0.98 · critic saturation x1
Before expectations (after combo, weakness, fatigue, saturation; pre-clamp): Audience 7.54 / Critic 8.14 · critic generation 0 (−0.0%, undefined) · audience era 0 (−0.0%) · then clamp 0–10 (generation/era 0 = the ones active at game start)
**Final: Audience 7.54 / Critic 8.14 → avg 7.84**

**Opening & viewership trace** [marketing/Fame/reach affect viewers only]

Awareness inputs: base 0.35, marketing 0.55, studioBuzz 0, starFame 0.32, trend 0.4, ipFans 0.08 → awareness 0.82. Reach cap 332,000 → pool 271,425 → opening 81,428.

| Wk | Viewers | Retention | Driver | Gross | Studio | Distributor |
|---:|---:|---:|---|---:|---:|---:|
| 1 | 81,428 | 1 | opening (aware people watching) | $162,856 | $107,485 | $55,371 |
| 2 | 59,619 | 0.73 | critic 8.14: +4,565 newly aware (buzz) | $119,238 | $78,697 | $40,541 |
| 3 | 36,315 | 0.61 | critic 8.14: +5,939 newly aware (buzz) | $72,630 | $47,936 | $24,694 |
| 4 | 32,799 | 0.9 | audience 7.54: +36,896 newly aware (word of mouth) | $65,598 | $43,295 | $22,303 |
| 5 | 30,371 | 0.93 | audience 7.54: +33,324 newly aware (word of mouth) | $60,742 | $40,090 | $20,652 |
| 6 | 28,123 | 0.93 | audience 7.54: +30,857 newly aware (word of mouth) | $56,246 | $37,122 | $19,124 |
| 7 | 19,183 | 0.68 | audience 7.54: +8,288 newly aware (word of mouth) | $38,366 | $25,322 | $13,044 |
| 8 | 13,407 | 0.7 | audience 7.54: +6,607 newly aware (word of mouth) | $26,814 | $17,697 | $9,117 |
| 9 | 9,333 | 0.7 | audience 7.54: +4,507 newly aware (word of mouth) | $18,666 | $12,320 | $6,346 |
| 10 | 6,501 | 0.7 | audience 7.54: +3,150 newly aware (word of mouth) | $13,002 | $8,581 | $4,421 |
| 11 | 4,528 | 0.7 | audience 7.54: +2,193 newly aware (word of mouth) | $9,056 | $5,977 | $3,079 |
| 12 | 3,154 | 0.7 | audience 7.54: +1,527 newly aware (word of mouth) | $6,308 | $4,163 | $2,145 |
| 13 | 2,197 | 0.7 | audience 7.54: +1,064 newly aware (word of mouth) | $4,394 | $2,900 | $1,494 |
| 14 | 1,530 | 0.7 | audience 7.54: +741 newly aware (word of mouth) | $3,060 | $2,020 | $1,040 |
| 15 | 0 | 0 | audience 7.54: +516 newly aware (word of mouth) | $0 | $0 | $0 |

**Progression trace**

- Prestige awards: Prestige +50: meters_all_70 (Dead Run 2).; Prestige +75: audience_7_5 (Dead Run 2).; Prestige +100: ip_gross_1m (Dead Run 2).; Prestige +150: ip_viewers_500k (Dead Run 2).
- IP fans: {"before":13082,"after":28008,"delta":14926}
- Star career: {"fameDelta":9.75,"relDelta":0.75,"grow":0,"level":4,"reasons":"worked together (+); project boosted their career (+)"}
- Distributor trust: Orbit Releasing earned 219% of its advance back on Dead Run 2 with strong reviews (step 0.75)
- Rule labels: LOCKED = causal chain, accounting, fallback/no-campaign, thresholds 4.0/9.0, IP fan inheritance. WORKING ASSUMPTION = all formulas' shapes and numbers.

### Hollow Protocol — Action + Sports (new)

Released week 112 (year 2.2) · Distributor: Wolf Pictures · Star: Bo Hart (L9, Fame 100) · IP: Hollow Protocol

**Financial waterfall** [LOCKED rules; amounts provisional]

| Item | Amount |
|---|---:|
| Advance received (project reserve, not revenue) | $128,000 |
| Base cost (unavoidable) | −$60,000 |
| Star fee | −$31,503 |
| Marketing campaign | −$20,000 |
| Paid from studio cash (overrun) | $0 |
| **Unused advance kept at completion** | $16,497 |
| Gross from sales (15 weeks) | $524,686 |
| Distributor royalty (29% of weekly gross) | −$152,159 |
| **Studio take** | $372,527 |
| Net for this title (surplus + take − cash overrun; wages are studio-wide, excluded) | $389,024 |

**Quality trace** [scores are computed, never rolled]

Meters (0–100): Plot 83.73 · Writing 84.16 · Filming 84.07 · Editing 76.53
Inputs: staff points {"plot":232.48,"writing":240.09,"filming":216.38,"editing":141.64}, Star filming points 67.98 (Star family fit 100), studio Action level 1 (+3%), era bar x1.09
Base scores: Audience 8.14 / Critic 8.29 · no weak meter
Combo grades: Audience A (x1.15) / Critic B (x1.06) · repetition fatigue x1 · critic saturation x1
Before expectations (after combo, weakness, fatigue, saturation; pre-clamp): Audience 9.36 / Critic 8.78 · critic generation 0 (−0.0%, undefined) · audience era 0 (−0.0%) · then clamp 0–10 (generation/era 0 = the ones active at game start)
**Final: Audience 9.36 / Critic 8.78 → avg 9.07 (HALL OF FAME)**

**Opening & viewership trace** [marketing/Fame/reach affect viewers only]

Awareness inputs: base 0.35, marketing 0.55, studioBuzz 0, starFame 0.26, trend 0.4, ipFans 0 → awareness 0.79. Reach cap 264,000 → pool 208,416 → opening 62,525.

| Wk | Viewers | Retention | Driver | Gross | Studio | Distributor |
|---:|---:|---:|---|---:|---:|---:|
| 1 | 62,525 | 1 | opening (aware people watching) | $125,050 | $88,786 | $36,265 |
| 2 | 47,593 | 0.76 | critic 8.78: +5,043 newly aware (buzz) | $95,186 | $67,582 | $27,604 |
| 3 | 29,145 | 0.61 | critic 8.78: +6,173 newly aware (buzz) | $58,290 | $41,386 | $16,904 |
| 4 | 35,474 | 1.22 | audience 9.36: +50,829 newly aware (word of mouth) | $70,948 | $50,373 | $20,575 |
| 5 | 29,915 | 0.84 | audience 9.36: +27,654 newly aware (word of mouth) | $59,830 | $42,479 | $17,351 |
| 6 | 19,408 | 0.65 | audience 9.36: +7,393 newly aware (word of mouth) | $38,816 | $27,559 | $11,257 |
| 7 | 13,116 | 0.68 | audience 9.36: +6,235 newly aware (word of mouth) | $26,232 | $18,625 | $7,607 |
| 8 | 8,803 | 0.67 | audience 9.36: +4,045 newly aware (word of mouth) | $17,606 | $12,500 | $5,106 |
| 9 | 5,915 | 0.67 | audience 9.36: +2,734 newly aware (word of mouth) | $11,830 | $8,399 | $3,431 |
| 10 | 3,973 | 0.67 | audience 9.36: +1,834 newly aware (word of mouth) | $7,946 | $5,642 | $2,304 |
| 11 | 2,669 | 0.67 | audience 9.36: +1,233 newly aware (word of mouth) | $5,338 | $3,790 | $1,548 |
| 12 | 1,793 | 0.67 | audience 9.36: +828 newly aware (word of mouth) | $3,586 | $2,546 | $1,040 |
| 13 | 1,205 | 0.67 | audience 9.36: +556 newly aware (word of mouth) | $2,410 | $1,711 | $699 |
| 14 | 809 | 0.67 | audience 9.36: +374 newly aware (word of mouth) | $1,618 | $1,149 | $469 |
| 15 | 0 | 0 | audience 9.36: +251 newly aware (word of mouth) | $0 | $0 | $0 |

**Progression trace**

- Prestige awards: Prestige +50: meters_all_70 (Hollow Protocol).; Prestige +75: audience_7_5 (Hollow Protocol).; Prestige +85: critic_8_5 (Hollow Protocol).; Prestige +200: hall_of_fame (Hollow Protocol).; Prestige +100: first_hall_of_fame (Hollow Protocol).
- IP fans: {"before":0,"after":17084,"delta":17084}
- Star career: {"fameDelta":12.95,"relDelta":0.75,"grow":0,"level":5,"reasons":"worked together (+); project boosted their career (+)"}
- Distributor trust: Wolf Pictures earned 119% of its advance back on Hollow Protocol with strong reviews (step 0.51)
- Rule labels: LOCKED = causal chain, accounting, fallback/no-campaign, thresholds 4.0/9.0, IP fan inheritance. WORKING ASSUMPTION = all formulas' shapes and numbers.

### Dead Run — Comedy + Sports (new)

Released week 128 (year 2.5) · Distributor: Orbit Releasing · Star: Sam Diaz (L6, Fame 100) · IP: Dead Run

**Financial waterfall** [LOCKED rules; amounts provisional]

| Item | Amount |
|---|---:|
| Advance received (project reserve, not revenue) | $108,000 |
| Base cost (unavoidable) | −$60,000 |
| Star fee | −$42,555 |
| Marketing campaign | −$20,000 |
| Paid from studio cash (overrun) | $14,555 |
| **Unused advance kept at completion** | $0 |
| Gross from sales (15 weeks) | $658,228 |
| Distributor royalty (33% of weekly gross) | −$217,215 |
| **Studio take** | $441,013 |
| Net for this title (surplus + take − cash overrun; wages are studio-wide, excluded) | $426,457 |

**Quality trace** [scores are computed, never rolled]

Meters (0–100): Plot 87 · Writing 87.27 · Filming 86.31 · Editing 81.38
Inputs: staff points {"plot":305.77,"writing":313.33,"filming":273.68,"editing":191.99}, Star filming points 69.96 (Star family fit 100), studio Comedy level 2 (+6%), era bar x1.1
Base scores: Audience 8.48 / Critic 8.61 · no weak meter
Combo grades: Audience B (x1.06) / Critic B (x1.06) · repetition fatigue x0.9 · critic saturation x1
Before expectations (after combo, weakness, fatigue, saturation; pre-clamp): Audience 8.09 / Critic 8.22 · critic generation 0 (−0.0%, undefined) · audience era 0 (−0.0%) · then clamp 0–10 (generation/era 0 = the ones active at game start)
**Final: Audience 8.09 / Critic 8.22 → avg 8.16**

**Opening & viewership trace** [marketing/Fame/reach affect viewers only]

Awareness inputs: base 0.35, marketing 0.55, studioBuzz 0, starFame 0.38, trend 0.4, ipFans 0 → awareness 0.81. Reach cap 332,000 → pool 269,851 → opening 80,955.

| Wk | Viewers | Retention | Driver | Gross | Studio | Distributor |
|---:|---:|---:|---|---:|---:|---:|
| 1 | 80,955 | 1 | opening (aware people watching) | $161,910 | $108,480 | $53,430 |
| 2 | 59,570 | 0.74 | critic 8.22: +4,803 newly aware (buzz) | $119,140 | $79,824 | $39,316 |
| 3 | 36,317 | 0.61 | critic 8.22: +6,183 newly aware (buzz) | $72,634 | $48,665 | $23,969 |
| 4 | 36,258 | 1 | audience 8.09: +44,888 newly aware (word of mouth) | $72,516 | $48,586 | $23,930 |
| 5 | 36,378 | 1 | audience 8.09: +44,815 newly aware (word of mouth) | $72,756 | $48,747 | $24,009 |
| 6 | 25,728 | 0.71 | audience 8.09: +13,869 newly aware (word of mouth) | $51,456 | $34,476 | $16,980 |
| 7 | 17,653 | 0.69 | audience 8.09: +8,238 newly aware (word of mouth) | $35,306 | $23,655 | $11,651 |
| 8 | 12,172 | 0.69 | audience 8.09: +5,827 newly aware (word of mouth) | $24,344 | $16,310 | $8,034 |
| 9 | 8,386 | 0.69 | audience 8.09: +3,998 newly aware (word of mouth) | $16,772 | $11,237 | $5,535 |
| 10 | 5,778 | 0.69 | audience 8.09: +2,757 newly aware (word of mouth) | $11,556 | $7,743 | $3,813 |
| 11 | 3,982 | 0.69 | audience 8.09: +1,899 newly aware (word of mouth) | $7,964 | $5,336 | $2,628 |
| 12 | 2,744 | 0.69 | audience 8.09: +1,309 newly aware (word of mouth) | $5,488 | $3,677 | $1,811 |
| 13 | 1,890 | 0.69 | audience 8.09: +902 newly aware (word of mouth) | $3,780 | $2,533 | $1,247 |
| 14 | 1,303 | 0.69 | audience 8.09: +621 newly aware (word of mouth) | $2,606 | $1,746 | $860 |
| 15 | 0 | 0 | audience 8.09: +428 newly aware (word of mouth) | $0 | $0 | $0 |

**Progression trace**

- Prestige awards: Prestige +50: meters_all_70 (Dead Run).; Prestige +75: audience_7_5 (Dead Run).
- IP fans: {"before":0,"after":16640,"delta":16640}
- Star career: {"fameDelta":10.85,"relDelta":0.75,"grow":0,"level":4,"reasons":"worked together (+); project boosted their career (+)"}
- Distributor trust: Orbit Releasing earned 201% of its advance back on Dead Run with strong reviews (step 0.75)
- Rule labels: LOCKED = causal chain, accounting, fallback/no-campaign, thresholds 4.0/9.0, IP fan inheritance. WORKING ASSUMPTION = all formulas' shapes and numbers.

### Dead Run 3 — Comedy + Spies (sequel)

Released week 144 (year 2.8) · Distributor: XYZ Network · Star: Sam Diaz (L6, Fame 100) · IP: Dead Run

**Financial waterfall** [LOCKED rules; amounts provisional]

| Item | Amount |
|---|---:|
| Advance received (project reserve, not revenue) | $103,000 |
| Base cost (unavoidable) | −$60,000 |
| Star fee | −$42,169 |
| Marketing campaign | −$20,000 |
| Paid from studio cash (overrun) | $19,169 |
| **Unused advance kept at completion** | $0 |
| Gross from sales (15 weeks) | $745,136 |
| Distributor royalty (45% of weekly gross) | −$335,311 |
| **Studio take** | $409,825 |
| Net for this title (surplus + take − cash overrun; wages are studio-wide, excluded) | $390,656 |

**Quality trace** [scores are computed, never rolled]

Meters (0–100): Plot 87.63 · Writing 88.03 · Filming 86.8 · Editing 81.99
Inputs: staff points {"plot":327.4,"writing":339.89,"filming":292.29,"editing":202.25}, Star filming points 69.96 (Star family fit 100), studio Comedy level 2 (+6%), era bar x1.11
Base scores: Audience 8.54 / Critic 8.68 · no weak meter
Combo grades: Audience C (x1) / Critic B (x1.06) · repetition fatigue x0.95 · critic saturation x0.9
Before expectations (after combo, weakness, fatigue, saturation; pre-clamp): Audience 8.12 / Critic 7.87 · critic generation 0 (−0.0%, undefined) · audience era 0 (−0.0%) · then clamp 0–10 (generation/era 0 = the ones active at game start)
**Final: Audience 8.12 / Critic 7.87 → avg 7.99**

**Opening & viewership trace** [marketing/Fame/reach affect viewers only]

Awareness inputs: base 0.35, marketing 0.55, studioBuzz 0, starFame 0.44, trend 0.1, ipFans 0.16 → awareness 0.8. Reach cap 376,000 → pool 300,463 → opening 90,139.

| Wk | Viewers | Retention | Driver | Gross | Studio | Distributor |
|---:|---:|---:|---|---:|---:|---:|
| 1 | 90,139 | 1 | opening (aware people watching) | $180,278 | $99,153 | $81,125 |
| 2 | 65,278 | 0.72 | critic 7.87: +5,203 newly aware (buzz) | $130,556 | $71,806 | $58,750 |
| 3 | 39,997 | 0.61 | critic 7.87: +6,583 newly aware (buzz) | $79,994 | $43,997 | $35,997 |
| 4 | 40,687 | 1.02 | audience 8.12: +49,916 newly aware (word of mouth) | $81,374 | $44,756 | $36,618 |
| 5 | 40,997 | 1.01 | audience 8.12: +50,777 newly aware (word of mouth) | $81,994 | $45,097 | $36,897 |
| 6 | 31,086 | 0.76 | audience 8.12: +21,685 newly aware (word of mouth) | $62,172 | $34,195 | $27,977 |
| 7 | 21,082 | 0.68 | audience 8.12: +9,266 newly aware (word of mouth) | $42,164 | $23,190 | $18,974 |
| 8 | 14,555 | 0.69 | audience 8.12: +7,026 newly aware (word of mouth) | $29,110 | $16,011 | $13,100 |
| 9 | 10,019 | 0.69 | audience 8.12: +4,765 newly aware (word of mouth) | $20,038 | $11,021 | $9,017 |
| 10 | 6,900 | 0.69 | audience 8.12: +3,290 newly aware (word of mouth) | $13,800 | $7,590 | $6,210 |
| 11 | 4,751 | 0.69 | audience 8.12: +2,264 newly aware (word of mouth) | $9,502 | $5,226 | $4,276 |
| 12 | 3,272 | 0.69 | audience 8.12: +1,559 newly aware (word of mouth) | $6,544 | $3,599 | $2,945 |
| 13 | 2,253 | 0.69 | audience 8.12: +1,074 newly aware (word of mouth) | $4,506 | $2,478 | $2,028 |
| 14 | 1,552 | 0.69 | audience 8.12: +740 newly aware (word of mouth) | $3,104 | $1,707 | $1,397 |
| 15 | 0 | 0 | audience 8.12: +509 newly aware (word of mouth) | $0 | $0 | $0 |

**Progression trace**

- Prestige awards: Prestige +50: meters_all_70 (Dead Run 3).; Prestige +75: audience_7_5 (Dead Run 3).
- IP fans: {"before":25536,"after":43360,"delta":17824}
- Star career: {"fameDelta":10.66,"relDelta":0.75,"grow":0,"level":5,"reasons":"worked together (+); project boosted their career (+)"}
- Distributor trust: XYZ Network earned 326% of its advance back on Dead Run 3 with strong reviews (step 0.75)
- Rule labels: LOCKED = causal chain, accounting, fallback/no-campaign, thresholds 4.0/9.0, IP fan inheritance. WORKING ASSUMPTION = all formulas' shapes and numbers.

### Hollow Night — Action + Zombies (new)

Released week 160 (year 3.1) · Distributor: Meridian Global · Star: Bo Hart (L9, Fame 100) · IP: Hollow Night

**Financial waterfall** [LOCKED rules; amounts provisional]

| Item | Amount |
|---|---:|
| Advance received (project reserve, not revenue) | $139,000 |
| Base cost (unavoidable) | −$60,000 |
| Star fee | −$39,849 |
| Marketing campaign | −$20,000 |
| Paid from studio cash (overrun) | $0 |
| **Unused advance kept at completion** | $19,151 |
| Gross from sales (15 weeks) | $872,736 |
| Distributor royalty (48% of weekly gross) | −$418,913 |
| **Studio take** | $453,823 |
| Net for this title (surplus + take − cash overrun; wages are studio-wide, excluded) | $472,973 |

**Quality trace** [scores are computed, never rolled]

Meters (0–100): Plot 88.3 · Writing 88.76 · Filming 87.42 · Editing 82.85
Inputs: staff points {"plot":352.57,"writing":368.84,"filming":317.26,"editing":217.06}, Star filming points 69.96 (Star family fit 100), studio Action level 2 (+6%), era bar x1.12
Base scores: Audience 8.62 / Critic 8.75 · no weak meter
Combo grades: Audience C (x1) / Critic A (x1.15) · repetition fatigue x1 · critic saturation x0.9
Before expectations (after combo, weakness, fatigue, saturation; pre-clamp): Audience 8.62 / Critic 9.06 · critic generation 0 (−0.0%, undefined) · audience era 0 (−0.0%) · then clamp 0–10 (generation/era 0 = the ones active at game start)
**Final: Audience 8.62 / Critic 9.06 → avg 8.84**

**Opening & viewership trace** [marketing/Fame/reach affect viewers only]

Awareness inputs: base 0.35, marketing 0.55, studioBuzz 0, starFame 0.34, trend 0.1, ipFans 0 → awareness 0.74. Reach cap 440,000 → pool 324,298 → opening 97,289.

| Wk | Viewers | Retention | Driver | Gross | Studio | Distributor |
|---:|---:|---:|---|---:|---:|---:|
| 1 | 97,289 | 1 | opening (aware people watching) | $194,578 | $101,181 | $93,397 |
| 2 | 76,165 | 0.78 | critic 9.06: +11,274 newly aware (buzz) | $152,330 | $79,212 | $73,118 |
| 3 | 47,466 | 0.62 | critic 9.06: +12,830 newly aware (buzz) | $94,932 | $49,365 | $45,567 |
| 4 | 50,558 | 1.07 | audience 8.62: +68,731 newly aware (word of mouth) | $101,116 | $52,580 | $48,536 |
| 5 | 54,666 | 1.08 | audience 8.62: +73,208 newly aware (word of mouth) | $109,332 | $56,853 | $52,479 |
| 6 | 36,103 | 0.66 | audience 8.62: +14,229 newly aware (word of mouth) | $72,206 | $37,547 | $34,659 |
| 7 | 24,750 | 0.69 | audience 8.62: +11,955 newly aware (word of mouth) | $49,500 | $25,740 | $23,760 |
| 8 | 16,861 | 0.68 | audience 8.62: +7,896 newly aware (word of mouth) | $33,722 | $17,535 | $16,187 |
| 9 | 11,499 | 0.68 | audience 8.62: +5,413 newly aware (word of mouth) | $22,998 | $11,959 | $11,039 |
| 10 | 7,840 | 0.68 | audience 8.62: +3,687 newly aware (word of mouth) | $15,680 | $8,154 | $7,526 |
| 11 | 5,346 | 0.68 | audience 8.62: +2,515 newly aware (word of mouth) | $10,692 | $5,560 | $5,132 |
| 12 | 3,645 | 0.68 | audience 8.62: +1,715 newly aware (word of mouth) | $7,290 | $3,791 | $3,499 |
| 13 | 2,485 | 0.68 | audience 8.62: +1,169 newly aware (word of mouth) | $4,970 | $2,584 | $2,386 |
| 14 | 1,695 | 0.68 | audience 8.62: +797 newly aware (word of mouth) | $3,390 | $1,763 | $1,627 |
| 15 | 0 | 0 | audience 8.62: +544 newly aware (word of mouth) | $0 | $0 | $0 |

**Progression trace**

- Prestige awards: Prestige +50: meters_all_70 (Hollow Night).; Prestige +75: audience_7_5 (Hollow Night).; Prestige +85: critic_8_5 (Hollow Night).
- IP fans: {"before":0,"after":26810,"delta":26810}
- Star career: {"fameDelta":14.29,"relDelta":0.75,"grow":0,"level":5,"reasons":"worked together (+); project boosted their career (+)"}
- Distributor trust: Meridian Global earned 301% of its advance back on Hollow Night with strong reviews (step 0.75)
- Rule labels: LOCKED = causal chain, accounting, fallback/no-campaign, thresholds 4.0/9.0, IP fan inheritance. WORKING ASSUMPTION = all formulas' shapes and numbers.

### Dead Echo — Action + Mythology (new)

Released week 176 (year 3.4) · Distributor: XYZ Network · Star: Bo Hart (L9, Fame 100) · IP: Dead Echo

**Financial waterfall** [LOCKED rules; amounts provisional]

| Item | Amount |
|---|---:|
| Advance received (project reserve, not revenue) | $107,000 |
| Base cost (unavoidable) | −$60,000 |
| Star fee | −$39,494 |
| Marketing campaign | −$20,000 |
| Paid from studio cash (overrun) | $12,494 |
| **Unused advance kept at completion** | $0 |
| Gross from sales (15 weeks) | $746,192 |
| Distributor royalty (43% of weekly gross) | −$320,863 |
| **Studio take** | $425,329 |
| Net for this title (surplus + take − cash overrun; wages are studio-wide, excluded) | $412,836 |

**Quality trace** [scores are computed, never rolled]

Meters (0–100): Plot 88.68 · Writing 89.18 · Filming 87.66 · Editing 83.27
Inputs: staff points {"plot":369.98,"writing":389.43,"filming":329.99,"editing":225.99}, Star filming points 69.96 (Star family fit 100), studio Action level 2 (+6%), era bar x1.14
Base scores: Audience 8.65 / Critic 8.79 · no weak meter
Combo grades: Audience C (x1) / Critic F (x0.78) · repetition fatigue x1 · critic saturation x1
Before expectations (after combo, weakness, fatigue, saturation; pre-clamp): Audience 8.65 / Critic 6.86 · critic generation 0 (−0.0%, undefined) · audience era 0 (−0.0%) · then clamp 0–10 (generation/era 0 = the ones active at game start)
**Final: Audience 8.65 / Critic 6.86 → avg 7.76**

**Opening & viewership trace** [marketing/Fame/reach affect viewers only]

Awareness inputs: base 0.35, marketing 0.55, studioBuzz 0, starFame 0.42, trend 0.4, ipFans 0 → awareness 0.82. Reach cap 376,000 → pool 308,772 → opening 92,632.

| Wk | Viewers | Retention | Driver | Gross | Studio | Distributor |
|---:|---:|---:|---|---:|---:|---:|
| 1 | 92,632 | 1 | opening (aware people watching) | $185,264 | $105,600 | $79,664 |
| 2 | 63,352 | 0.68 | critic 6.86: +3,001 newly aware (buzz) | $126,704 | $72,221 | $54,483 |
| 3 | 38,789 | 0.61 | critic 6.86: +4,025 newly aware (buzz) | $77,578 | $44,219 | $33,359 |
| 4 | 44,910 | 1.16 | audience 8.65: +56,632 newly aware (word of mouth) | $89,820 | $51,197 | $38,623 |
| 5 | 44,881 | 1 | audience 8.65: +54,630 newly aware (word of mouth) | $89,762 | $51,164 | $38,598 |
| 6 | 28,962 | 0.65 | audience 8.65: +9,802 newly aware (word of mouth) | $57,924 | $33,017 | $24,907 |
| 7 | 19,920 | 0.69 | audience 8.65: +9,796 newly aware (word of mouth) | $39,840 | $22,709 | $17,131 |
| 8 | 13,554 | 0.68 | audience 8.65: +6,321 newly aware (word of mouth) | $27,108 | $15,452 | $11,656 |
| 9 | 9,238 | 0.68 | audience 8.65: +4,348 newly aware (word of mouth) | $18,476 | $10,531 | $7,945 |
| 10 | 6,295 | 0.68 | audience 8.65: +2,958 newly aware (word of mouth) | $12,590 | $7,176 | $5,414 |
| 11 | 4,290 | 0.68 | audience 8.65: +2,016 newly aware (word of mouth) | $8,580 | $4,891 | $3,689 |
| 12 | 2,923 | 0.68 | audience 8.65: +1,374 newly aware (word of mouth) | $5,846 | $3,332 | $2,514 |
| 13 | 1,992 | 0.68 | audience 8.65: +936 newly aware (word of mouth) | $3,984 | $2,271 | $1,713 |
| 14 | 1,358 | 0.68 | audience 8.65: +638 newly aware (word of mouth) | $2,716 | $1,548 | $1,168 |
| 15 | 0 | 0 | audience 8.65: +435 newly aware (word of mouth) | $0 | $0 | $0 |

**Progression trace**

- Prestige awards: Prestige +50: meters_all_70 (Dead Echo).; Prestige +75: audience_7_5 (Dead Echo).
- IP fans: {"before":0,"after":16476,"delta":16476}
- Star career: {"fameDelta":9.84,"relDelta":0.75,"grow":0,"level":6,"reasons":"worked together (+); project boosted their career (+)"}
- Distributor trust: XYZ Network earned 300% of its advance back on Dead Echo with strong reviews (step 0.75)
- Rule labels: LOCKED = causal chain, accounting, fallback/no-campaign, thresholds 4.0/9.0, IP fan inheritance. WORKING ASSUMPTION = all formulas' shapes and numbers.

### Wild Signal — Horror + Mythology (new)

Released week 192 (year 3.7) · Distributor: Meridian Global · Star: Gus Quinn (L8, Fame 100) · IP: Wild Signal

**Financial waterfall** [LOCKED rules; amounts provisional]

| Item | Amount |
|---|---:|
| Advance received (project reserve, not revenue) | $117,000 |
| Base cost (unavoidable) | −$60,000 |
| Star fee | −$40,128 |
| Marketing campaign | −$20,000 |
| Paid from studio cash (overrun) | $3,128 |
| **Unused advance kept at completion** | $0 |
| Gross from sales (15 weeks) | $793,858 |
| Distributor royalty (48% of weekly gross) | −$381,052 |
| **Studio take** | $412,806 |
| Net for this title (surplus + take − cash overrun; wages are studio-wide, excluded) | $409,678 |

**Quality trace** [scores are computed, never rolled]

Meters (0–100): Plot 88.54 · Writing 89.12 · Filming 87.55 · Editing 83.2
Inputs: staff points {"plot":368.74,"writing":390.88,"filming":334.31,"editing":227.43}, Star filming points 66 (Star family fit 100), studio Horror level 0 (+0%), era bar x1.15
Base scores: Audience 8.64 / Critic 8.78 · no weak meter
Combo grades: Audience C (x1) / Critic D (x0.9) · repetition fatigue x1 · critic saturation x1
Before expectations (after combo, weakness, fatigue, saturation; pre-clamp): Audience 8.64 / Critic 7.9 · critic generation 0 (−0.0%, undefined) · audience era 0 (−0.0%) · then clamp 0–10 (generation/era 0 = the ones active at game start)
**Final: Audience 8.64 / Critic 7.9 → avg 8.27**

**Opening & viewership trace** [marketing/Fame/reach affect viewers only]

Awareness inputs: base 0.35, marketing 0.55, studioBuzz 0, starFame 0.32, trend 0.4, ipFans 0 → awareness 0.8. Reach cap 400,000 → pool 320,682 → opening 96,205.

| Wk | Viewers | Retention | Driver | Gross | Studio | Distributor |
|---:|---:|---:|---|---:|---:|---:|
| 1 | 96,205 | 1 | opening (aware people watching) | $192,410 | $100,053 | $92,357 |
| 2 | 69,751 | 0.73 | critic 7.9: +5,521 newly aware (buzz) | $139,502 | $72,541 | $66,961 |
| 3 | 42,705 | 0.61 | critic 7.9: +7,011 newly aware (buzz) | $85,410 | $44,413 | $40,997 |
| 4 | 47,517 | 1.11 | audience 8.64: +62,178 newly aware (word of mouth) | $95,034 | $49,418 | $45,616 |
| 5 | 47,319 | 1 | audience 8.64: +57,336 newly aware (word of mouth) | $94,638 | $49,212 | $45,426 |
| 6 | 30,555 | 0.65 | audience 8.64: +10,378 newly aware (word of mouth) | $61,110 | $31,777 | $29,333 |
| 7 | 21,019 | 0.69 | audience 8.64: +10,335 newly aware (word of mouth) | $42,038 | $21,860 | $20,178 |
| 8 | 14,304 | 0.68 | audience 8.64: +6,674 newly aware (word of mouth) | $28,608 | $14,876 | $13,732 |
| 9 | 9,752 | 0.68 | audience 8.64: +4,591 newly aware (word of mouth) | $19,504 | $10,142 | $9,362 |
| 10 | 6,646 | 0.68 | audience 8.64: +3,124 newly aware (word of mouth) | $13,292 | $6,912 | $6,380 |
| 11 | 4,530 | 0.68 | audience 8.64: +2,130 newly aware (word of mouth) | $9,060 | $4,711 | $4,349 |
| 12 | 3,088 | 0.68 | audience 8.64: +1,452 newly aware (word of mouth) | $6,176 | $3,212 | $2,964 |
| 13 | 2,104 | 0.68 | audience 8.64: +989 newly aware (word of mouth) | $4,208 | $2,188 | $2,020 |
| 14 | 1,434 | 0.68 | audience 8.64: +674 newly aware (word of mouth) | $2,868 | $1,491 | $1,377 |
| 15 | 0 | 0 | audience 8.64: +460 newly aware (word of mouth) | $0 | $0 | $0 |

**Progression trace**

- Prestige awards: Prestige +50: meters_all_70 (Wild Signal).; Prestige +75: audience_7_5 (Wild Signal).
- IP fans: {"before":0,"after":20767,"delta":20767}
- Star career: {"fameDelta":11.87,"relDelta":0.75,"grow":0,"level":4,"reasons":"worked together (+); project boosted their career (+)"}
- Distributor trust: Meridian Global earned 326% of its advance back on Wild Signal with strong reviews (step 0.75)
- Rule labels: LOCKED = causal chain, accounting, fallback/no-campaign, thresholds 4.0/9.0, IP fan inheritance. WORKING ASSUMPTION = all formulas' shapes and numbers.

### Red Run — Action + Sports (new)

Released week 208 (year 4.0) · Distributor: XYZ Network · Star: Bo Hart (L9, Fame 100) · IP: Red Run

**Financial waterfall** [LOCKED rules; amounts provisional]

| Item | Amount |
|---|---:|
| Advance received (project reserve, not revenue) | $142,000 |
| Base cost (unavoidable) | −$60,000 |
| Star fee | −$56,303 |
| Marketing campaign | −$20,000 |
| Paid from studio cash (overrun) | $0 |
| **Unused advance kept at completion** | $5,697 |
| Gross from sales (15 weeks) | $747,200 |
| Distributor royalty (41% of weekly gross) | −$306,352 |
| **Studio take** | $440,848 |
| Net for this title (surplus + take − cash overrun; wages are studio-wide, excluded) | $446,545 |

**Quality trace** [scores are computed, never rolled]

Meters (0–100): Plot 89.44 · Writing 90.03 · Filming 88.45 · Editing 84.36
Inputs: staff points {"plot":408.69,"writing":435.98,"filming":370.82,"editing":250.22}, Star filming points 69.96 (Star family fit 100), studio Action level 2 (+6%), era bar x1.16
Base scores: Audience 8.74 / Critic 8.87 · no weak meter
Combo grades: Audience A (x1.15) / Critic B (x1.06) · repetition fatigue x0.95 · critic saturation x1
Before expectations (after combo, weakness, fatigue, saturation; pre-clamp): Audience 9.55 / Critic 8.94 · critic generation 0 (−0.0%, undefined) · audience era 0 (−0.0%) · then clamp 0–10 (generation/era 0 = the ones active at game start)
**Final: Audience 9.55 / Critic 8.94 → avg 9.25 (HALL OF FAME)**

**Opening & viewership trace** [marketing/Fame/reach affect viewers only]

Awareness inputs: base 0.35, marketing 0.55, studioBuzz 0, starFame 0.48, trend 0, ipFans 0 → awareness 0.75. Reach cap 376,000 → pool 281,458 → opening 84,437.

| Wk | Viewers | Retention | Driver | Gross | Studio | Distributor |
|---:|---:|---:|---|---:|---:|---:|
| 1 | 84,437 | 1 | opening (aware people watching) | $168,874 | $99,636 | $69,238 |
| 2 | 65,471 | 0.78 | critic 8.94: +8,940 newly aware (buzz) | $130,942 | $77,256 | $53,686 |
| 3 | 40,634 | 0.62 | critic 8.94: +10,330 newly aware (buzz) | $81,268 | $47,948 | $33,320 |
| 4 | 50,735 | 1.25 | audience 9.55: +73,954 newly aware (word of mouth) | $101,470 | $59,867 | $41,603 |
| 5 | 45,766 | 0.9 | audience 9.55: +47,685 newly aware (word of mouth) | $91,532 | $54,004 | $37,528 |
| 6 | 29,289 | 0.64 | audience 9.55: +10,445 newly aware (word of mouth) | $58,578 | $34,561 | $24,017 |
| 7 | 19,752 | 0.67 | audience 9.55: +9,421 newly aware (word of mouth) | $39,504 | $23,307 | $16,197 |
| 8 | 13,202 | 0.67 | audience 9.55: +6,030 newly aware (word of mouth) | $26,404 | $15,578 | $10,826 |
| 9 | 8,837 | 0.67 | audience 9.55: +4,066 newly aware (word of mouth) | $17,674 | $10,428 | $7,246 |
| 10 | 5,913 | 0.67 | audience 9.55: +2,718 newly aware (word of mouth) | $11,826 | $6,977 | $4,849 |
| 11 | 3,957 | 0.67 | audience 9.55: +1,819 newly aware (word of mouth) | $7,914 | $4,669 | $3,245 |
| 12 | 2,649 | 0.67 | audience 9.55: +1,217 newly aware (word of mouth) | $5,298 | $3,126 | $2,172 |
| 13 | 1,772 | 0.67 | audience 9.55: +815 newly aware (word of mouth) | $3,544 | $2,091 | $1,453 |
| 14 | 1,186 | 0.67 | audience 9.55: +545 newly aware (word of mouth) | $2,372 | $1,399 | $973 |
| 15 | 0 | 0 | audience 9.55: +365 newly aware (word of mouth) | $0 | $0 | $0 |

**Progression trace**

- Prestige awards: Prestige +50: meters_all_70 (Red Run).; Prestige +75: audience_7_5 (Red Run).; Prestige +85: critic_8_5 (Red Run).; Prestige +200: hall_of_fame (Red Run).
- IP fans: {"before":0,"after":25405,"delta":25405}
- Star career: {"fameDelta":15.16,"relDelta":0.75,"grow":0,"level":6,"reasons":"worked together (+); project boosted their career (+)"}
- Distributor trust: XYZ Network earned 216% of its advance back on Red Run with strong reviews (step 0.75)
- Rule labels: LOCKED = causal chain, accounting, fallback/no-campaign, thresholds 4.0/9.0, IP fan inheritance. WORKING ASSUMPTION = all formulas' shapes and numbers.

### Midnight Horizon — Action + Sports (new)

Released week 224 (year 4.3) · Distributor: Meridian Global · Star: Bo Hart (L9, Fame 100) · IP: Midnight Horizon

**Financial waterfall** [LOCKED rules; amounts provisional]

| Item | Amount |
|---|---:|
| Advance received (project reserve, not revenue) | $144,000 |
| Base cost (unavoidable) | −$60,000 |
| Star fee | −$55,413 |
| Marketing campaign | −$20,000 |
| Paid from studio cash (overrun) | $0 |
| **Unused advance kept at completion** | $8,587 |
| Gross from sales (15 weeks) | $874,214 |
| Distributor royalty (46% of weekly gross) | −$402,138 |
| **Studio take** | $472,076 |
| Net for this title (surplus + take − cash overrun; wages are studio-wide, excluded) | $480,662 |

**Quality trace** [scores are computed, never rolled]

Meters (0–100): Plot 90.22 · Writing 90.81 · Filming 89.2 · Editing 85.28
Inputs: staff points {"plot":449.82,"writing":481.74,"filming":408.3,"editing":271.77}, Star filming points 71.94 (Star family fit 100), studio Action level 3 (+9%), era bar x1.17
Base scores: Audience 8.82 / Critic 8.95 · no weak meter
Combo grades: Audience A (x1.15) / Critic B (x1.06) · repetition fatigue x0.9 · critic saturation x1
Before expectations (after combo, weakness, fatigue, saturation; pre-clamp): Audience 9.13 / Critic 8.54 · critic generation 0 (−0.0%, undefined) · audience era 0 (−0.0%) · then clamp 0–10 (generation/era 0 = the ones active at game start)
**Final: Audience 9.13 / Critic 8.54 → avg 8.84**

**Opening & viewership trace** [marketing/Fame/reach affect viewers only]

Awareness inputs: base 0.35, marketing 0.55, studioBuzz 0, starFame 0.57, trend 0.15, ipFans 0 → awareness 0.8. Reach cap 440,000 → pool 353,055 → opening 105,917.

| Wk | Viewers | Retention | Driver | Gross | Studio | Distributor |
|---:|---:|---:|---|---:|---:|---:|
| 1 | 105,917 | 1 | opening (aware people watching) | $211,834 | $114,390 | $97,444 |
| 2 | 79,401 | 0.75 | critic 8.54: +7,387 newly aware (buzz) | $158,802 | $85,753 | $73,049 |
| 3 | 48,477 | 0.61 | critic 8.54: +9,279 newly aware (buzz) | $96,954 | $52,355 | $44,599 |
| 4 | 57,275 | 1.18 | audience 9.13: +80,084 newly aware (word of mouth) | $114,550 | $61,857 | $52,693 |
| 5 | 49,520 | 0.86 | audience 9.13: +47,965 newly aware (word of mouth) | $99,040 | $53,482 | $45,558 |
| 6 | 32,190 | 0.65 | audience 9.13: +12,116 newly aware (word of mouth) | $64,380 | $34,765 | $29,615 |
| 7 | 21,866 | 0.68 | audience 9.13: +10,475 newly aware (word of mouth) | $43,732 | $23,615 | $20,117 |
| 8 | 14,742 | 0.67 | audience 9.13: +6,809 newly aware (word of mouth) | $29,484 | $15,921 | $13,563 |
| 9 | 9,951 | 0.68 | audience 9.13: +4,625 newly aware (word of mouth) | $19,902 | $10,747 | $9,155 |
| 10 | 6,716 | 0.67 | audience 9.13: +3,118 newly aware (word of mouth) | $13,432 | $7,253 | $6,179 |
| 11 | 4,533 | 0.67 | audience 9.13: +2,105 newly aware (word of mouth) | $9,066 | $4,896 | $4,170 |
| 12 | 3,060 | 0.68 | audience 9.13: +1,421 newly aware (word of mouth) | $6,120 | $3,305 | $2,815 |
| 13 | 2,065 | 0.67 | audience 9.13: +959 newly aware (word of mouth) | $4,130 | $2,230 | $1,900 |
| 14 | 1,394 | 0.68 | audience 9.13: +647 newly aware (word of mouth) | $2,788 | $1,506 | $1,282 |
| 15 | 0 | 0 | audience 9.13: +437 newly aware (word of mouth) | $0 | $0 | $0 |

**Progression trace**

- Prestige awards: Prestige +50: meters_all_70 (Midnight Horizon).; Prestige +75: audience_7_5 (Midnight Horizon).; Prestige +85: critic_8_5 (Midnight Horizon).
- IP fans: {"before":0,"after":26856,"delta":26856}
- Star career: {"fameDelta":14.29,"relDelta":0.75,"grow":0,"level":7,"reasons":"worked together (+); project boosted their career (+)"}
- Distributor trust: Meridian Global earned 279% of its advance back on Midnight Horizon with strong reviews (step 0.75)
- Rule labels: LOCKED = causal chain, accounting, fallback/no-campaign, thresholds 4.0/9.0, IP fan inheritance. WORKING ASSUMPTION = all formulas' shapes and numbers.

### Dead Run 4 — Comedy + Spies (sequel)

Released week 240 (year 4.6) · Distributor: XYZ Network · Star: Sam Diaz (L6, Fame 100) · IP: Dead Run

**Financial waterfall** [LOCKED rules; amounts provisional]

| Item | Amount |
|---|---:|
| Advance received (project reserve, not revenue) | $135,000 |
| Base cost (unavoidable) | −$60,000 |
| Star fee | −$54,711 |
| Marketing campaign | −$20,000 |
| Paid from studio cash (overrun) | $0 |
| **Unused advance kept at completion** | $289 |
| Gross from sales (15 weeks) | $745,898 |
| Distributor royalty (40% of weekly gross) | −$298,359 |
| **Studio take** | $447,539 |
| Net for this title (surplus + take − cash overrun; wages are studio-wide, excluded) | $447,827 |

**Quality trace** [scores are computed, never rolled]

Meters (0–100): Plot 90.5 · Writing 91.1 · Filming 89.31 · Editing 85.69
Inputs: staff points {"plot":469.19,"writing":504.22,"filming":419.12,"editing":283.7}, Star filming points 71.94 (Star family fit 100), studio Comedy level 3 (+9%), era bar x1.18
Base scores: Audience 8.85 / Critic 8.98 · no weak meter
Combo grades: Audience C (x1) / Critic B (x1.06) · repetition fatigue x0.93 · critic saturation x1
Before expectations (after combo, weakness, fatigue, saturation; pre-clamp): Audience 8.23 / Critic 8.85 · critic generation 0 (−0.0%, undefined) · audience era 0 (−0.0%) · then clamp 0–10 (generation/era 0 = the ones active at game start)
**Final: Audience 8.23 / Critic 8.85 → avg 8.54**

**Opening & viewership trace** [marketing/Fame/reach affect viewers only]

Awareness inputs: base 0.35, marketing 0.55, studioBuzz 0, starFame 0.5, trend 0, ipFans 0.23 → awareness 0.81. Reach cap 376,000 → pool 302,811 → opening 90,843.

| Wk | Viewers | Retention | Driver | Gross | Studio | Distributor |
|---:|---:|---:|---|---:|---:|---:|
| 1 | 90,843 | 1 | opening (aware people watching) | $181,686 | $109,012 | $72,674 |
| 2 | 69,151 | 0.76 | critic 8.85: +6,763 newly aware (buzz) | $138,302 | $82,981 | $55,321 |
| 3 | 42,119 | 0.61 | critic 8.85: +8,488 newly aware (buzz) | $84,238 | $50,543 | $33,695 |
| 4 | 42,148 | 1 | audience 8.23: +54,418 newly aware (word of mouth) | $84,296 | $50,578 | $33,718 |
| 5 | 42,609 | 1.01 | audience 8.23: +52,928 newly aware (word of mouth) | $85,218 | $51,131 | $34,087 |
| 6 | 27,726 | 0.65 | audience 8.23: +9,457 newly aware (word of mouth) | $55,452 | $33,271 | $22,181 |
| 7 | 19,228 | 0.69 | audience 8.23: +9,561 newly aware (word of mouth) | $38,456 | $23,074 | $15,382 |
| 8 | 13,193 | 0.69 | audience 8.23: +6,221 newly aware (word of mouth) | $26,386 | $15,832 | $10,554 |
| 9 | 9,068 | 0.69 | audience 8.23: +4,315 newly aware (word of mouth) | $18,136 | $10,882 | $7,254 |
| 10 | 6,230 | 0.69 | audience 8.23: +2,960 newly aware (word of mouth) | $12,460 | $7,476 | $4,984 |
| 11 | 4,281 | 0.69 | audience 8.23: +2,035 newly aware (word of mouth) | $8,562 | $5,137 | $3,425 |
| 12 | 2,942 | 0.69 | audience 8.23: +1,398 newly aware (word of mouth) | $5,884 | $3,530 | $2,354 |
| 13 | 2,022 | 0.69 | audience 8.23: +961 newly aware (word of mouth) | $4,044 | $2,426 | $1,618 |
| 14 | 1,389 | 0.69 | audience 8.23: +660 newly aware (word of mouth) | $2,778 | $1,667 | $1,111 |
| 15 | 0 | 0 | audience 8.23: +454 newly aware (word of mouth) | $0 | $0 | $0 |

**Progression trace**

- Prestige awards: Prestige +50: meters_all_70 (Dead Run 4).; Prestige +75: audience_7_5 (Dead Run 4).; Prestige +85: critic_8_5 (Dead Run 4).
- IP fans: {"before":36045,"after":57169,"delta":21124}
- Star career: {"fameDelta":12.62,"relDelta":0.75,"grow":0,"level":5,"reasons":"worked together (+); project boosted their career (+)"}
- Distributor trust: XYZ Network earned 221% of its advance back on Dead Run 4 with strong reviews (step 0.75)
- Rule labels: LOCKED = causal chain, accounting, fallback/no-campaign, thresholds 4.0/9.0, IP fan inheritance. WORKING ASSUMPTION = all formulas' shapes and numbers.

### Red Night — Horror + Superheroes (new)

Released week 256 (year 4.9) · Distributor: Orbit Releasing · Star: Gus Quinn (L8, Fame 100) · IP: Red Night

**Financial waterfall** [LOCKED rules; amounts provisional]

| Item | Amount |
|---|---:|
| Advance received (project reserve, not revenue) | $99,000 |
| Base cost (unavoidable) | −$60,000 |
| Star fee | −$48,377 |
| Marketing campaign | −$20,000 |
| Paid from studio cash (overrun) | $29,377 |
| **Unused advance kept at completion** | $0 |
| Gross from sales (15 weeks) | $619,906 |
| Distributor royalty (33% of weekly gross) | −$204,569 |
| **Studio take** | $415,337 |
| Net for this title (surplus + take − cash overrun; wages are studio-wide, excluded) | $385,960 |

**Quality trace** [scores are computed, never rolled]

Meters (0–100): Plot 90.23 · Writing 90.86 · Filming 88.94 · Editing 85.12
Inputs: staff points {"plot":460.1,"writing":494.77,"filming":409.51,"editing":273.93}, Star filming points 67.98 (Star family fit 100), studio Horror level 1 (+3%), era bar x1.2
Base scores: Audience 8.81 / Critic 8.95 · no weak meter
Combo grades: Audience F (x0.78) / Critic B (x1.06) · repetition fatigue x1 · critic saturation x0.9
Before expectations (after combo, weakness, fatigue, saturation; pre-clamp): Audience 6.87 / Critic 8.54 · critic generation 0 (−0.0%, undefined) · audience era 0 (−0.0%) · then clamp 0–10 (generation/era 0 = the ones active at game start)
**Final: Audience 6.87 / Critic 8.54 → avg 7.71**

**Opening & viewership trace** [marketing/Fame/reach affect viewers only]

Awareness inputs: base 0.35, marketing 0.55, studioBuzz 0, starFame 0.39, trend 0.1, ipFans 0 → awareness 0.75. Reach cap 332,000 → pool 249,242 → opening 74,773.

| Wk | Viewers | Retention | Driver | Gross | Studio | Distributor |
|---:|---:|---:|---|---:|---:|---:|
| 1 | 74,773 | 1 | opening (aware people watching) | $149,546 | $100,196 | $49,350 |
| 2 | 56,695 | 0.76 | critic 8.54: +7,031 newly aware (buzz) | $113,390 | $75,971 | $37,419 |
| 3 | 35,175 | 0.62 | critic 8.54: +8,213 newly aware (buzz) | $70,350 | $47,135 | $23,216 |
| 4 | 27,235 | 0.77 | audience 6.87: +26,311 newly aware (word of mouth) | $54,470 | $36,495 | $17,975 |
| 5 | 22,787 | 0.84 | audience 6.87: +20,372 newly aware (word of mouth) | $45,574 | $30,535 | $15,039 |
| 6 | 19,066 | 0.84 | audience 6.87: +17,045 newly aware (word of mouth) | $38,132 | $25,548 | $12,584 |
| 7 | 15,952 | 0.84 | audience 6.87: +14,261 newly aware (word of mouth) | $31,904 | $21,376 | $10,528 |
| 8 | 13,347 | 0.84 | audience 6.87: +11,932 newly aware (word of mouth) | $26,694 | $17,885 | $8,809 |
| 9 | 11,168 | 0.84 | audience 6.87: +9,984 newly aware (word of mouth) | $22,336 | $14,965 | $7,371 |
| 10 | 9,344 | 0.84 | audience 6.87: +8,354 newly aware (word of mouth) | $18,688 | $12,521 | $6,167 |
| 11 | 7,818 | 0.84 | audience 6.87: +6,989 newly aware (word of mouth) | $15,636 | $10,476 | $5,160 |
| 12 | 6,541 | 0.84 | audience 6.87: +5,848 newly aware (word of mouth) | $13,082 | $8,765 | $4,317 |
| 13 | 5,473 | 0.84 | audience 6.87: +4,893 newly aware (word of mouth) | $10,946 | $7,334 | $3,612 |
| 14 | 4,579 | 0.84 | audience 6.87: +4,094 newly aware (word of mouth) | $9,158 | $6,136 | $3,022 |
| 15 | 0 | 0 | audience 6.87: +3,425 newly aware (word of mouth) | $0 | $0 | $0 |

**Progression trace**

- Prestige awards: Prestige +50: meters_all_70 (Red Night).; Prestige +85: critic_8_5 (Red Night).
- IP fans: {"before":0,"after":13440,"delta":13440}
- Star career: {"fameDelta":9.13,"relDelta":0.75,"grow":0,"level":5,"reasons":"worked together (+); project boosted their career (+)"}
- Distributor trust: Orbit Releasing earned 207% of its advance back on Red Night with strong reviews (step 0.75)
- Rule labels: LOCKED = causal chain, accounting, fallback/no-campaign, thresholds 4.0/9.0, IP fan inheritance. WORKING ASSUMPTION = all formulas' shapes and numbers.

### Hollow Shadow — Horror + Spies (new)

Released week 272 (year 5.2) · Distributor: XYZ Network · Star: Gus Quinn (L8, Fame 100) · IP: Hollow Shadow

**Financial waterfall** [LOCKED rules; amounts provisional]

| Item | Amount |
|---|---:|
| Advance received (project reserve, not revenue) | $120,000 |
| Base cost (unavoidable) | −$60,000 |
| Star fee | −$48,268 |
| Marketing campaign | −$20,000 |
| Paid from studio cash (overrun) | $8,268 |
| **Unused advance kept at completion** | $0 |
| Gross from sales (15 weeks) | $674,868 |
| Distributor royalty (40% of weekly gross) | −$269,947 |
| **Studio take** | $404,921 |
| Net for this title (surplus + take − cash overrun; wages are studio-wide, excluded) | $396,653 |

**Quality trace** [scores are computed, never rolled]

Meters (0–100): Plot 90.41 · Writing 91.05 · Filming 89.26 · Editing 85.7
Inputs: staff points {"plot":474.35,"writing":512.02,"filming":430.53,"editing":289.87}, Star filming points 67.98 (Star family fit 100), studio Horror level 1 (+3%), era bar x1.21
Base scores: Audience 8.85 / Critic 8.98 · no weak meter
Combo grades: Audience C (x1) / Critic B (x1.06) · repetition fatigue x1 · critic saturation x1
Before expectations (after combo, weakness, fatigue, saturation; pre-clamp): Audience 8.85 / Critic 9.51 · critic generation 0 (−0.0%, undefined) · audience era 0 (−0.0%) · then clamp 0–10 (generation/era 0 = the ones active at game start)
**Final: Audience 8.85 / Critic 9.51 → avg 9.18 (HALL OF FAME)**

**Opening & viewership trace** [marketing/Fame/reach affect viewers only]

Awareness inputs: base 0.35, marketing 0.55, studioBuzz 0, starFame 0.44, trend 0, ipFans 0 → awareness 0.74. Reach cap 340,000 → pool 251,328 → opening 75,398.

| Wk | Viewers | Retention | Driver | Gross | Studio | Distributor |
|---:|---:|---:|---|---:|---:|---:|
| 1 | 75,398 | 1 | opening (aware people watching) | $150,796 | $90,478 | $60,318 |
| 2 | 60,448 | 0.8 | critic 9.51: +9,598 newly aware (buzz) | $120,896 | $72,538 | $48,358 |
| 3 | 37,624 | 0.62 | critic 9.51: +10,844 newly aware (buzz) | $75,248 | $45,149 | $30,099 |
| 4 | 41,101 | 1.09 | audience 8.85: +57,941 newly aware (word of mouth) | $82,202 | $49,321 | $32,881 |
| 5 | 41,705 | 1.01 | audience 8.85: +51,642 newly aware (word of mouth) | $83,410 | $50,046 | $33,364 |
| 6 | 26,738 | 0.64 | audience 8.85: +8,854 newly aware (word of mouth) | $53,476 | $32,086 | $21,390 |
| 7 | 18,326 | 0.69 | audience 8.85: +8,984 newly aware (word of mouth) | $36,652 | $21,991 | $14,661 |
| 8 | 12,418 | 0.68 | audience 8.85: +5,760 newly aware (word of mouth) | $24,836 | $14,902 | $9,934 |
| 9 | 8,431 | 0.68 | audience 8.85: +3,948 newly aware (word of mouth) | $16,862 | $10,117 | $6,745 |
| 10 | 5,722 | 0.68 | audience 8.85: +2,675 newly aware (word of mouth) | $11,444 | $6,866 | $4,578 |
| 11 | 3,884 | 0.68 | audience 8.85: +1,816 newly aware (word of mouth) | $7,768 | $4,661 | $3,107 |
| 12 | 2,636 | 0.68 | audience 8.85: +1,233 newly aware (word of mouth) | $5,272 | $3,163 | $2,109 |
| 13 | 1,789 | 0.68 | audience 8.85: +837 newly aware (word of mouth) | $3,578 | $2,147 | $1,431 |
| 14 | 1,214 | 0.68 | audience 8.85: +568 newly aware (word of mouth) | $2,428 | $1,457 | $971 |
| 15 | 0 | 0 | audience 8.85: +385 newly aware (word of mouth) | $0 | $0 | $0 |

**Progression trace**

- Prestige awards: Prestige +50: meters_all_70 (Hollow Shadow).; Prestige +75: audience_7_5 (Hollow Shadow).; Prestige +85: critic_8_5 (Hollow Shadow).; Prestige +200: hall_of_fame (Hollow Shadow).
- IP fans: {"before":0,"after":22568,"delta":22568}
- Star career: {"fameDelta":14.47,"relDelta":0.75,"grow":0,"level":5,"reasons":"worked together (+); project boosted their career (+)"}
- Distributor trust: XYZ Network earned 225% of its advance back on Hollow Shadow with strong reviews (step 0.75)
- Rule labels: LOCKED = causal chain, accounting, fallback/no-campaign, thresholds 4.0/9.0, IP fan inheritance. WORKING ASSUMPTION = all formulas' shapes and numbers.

### Dead Run 5 — Comedy + Spies (sequel)

Released week 288 (year 5.5) · Distributor: Meridian Global · Star: Rae Hart (L6, Fame 79) · IP: Dead Run

**Financial waterfall** [LOCKED rules; amounts provisional]

| Item | Amount |
|---|---:|
| Advance received (project reserve, not revenue) | $137,000 |
| Base cost (unavoidable) | −$60,000 |
| Star fee | −$33,815 |
| Marketing campaign | −$20,000 |
| Paid from studio cash (overrun) | $0 |
| **Unused advance kept at completion** | $23,185 |
| Gross from sales (15 weeks) | $792,448 |
| Distributor royalty (45% of weekly gross) | −$356,602 |
| **Studio take** | $435,846 |
| Net for this title (surplus + take − cash overrun; wages are studio-wide, excluded) | $459,031 |

**Quality trace** [scores are computed, never rolled]

Meters (0–100): Plot 91.17 · Writing 91.8 · Filming 90.04 · Editing 86.62
Inputs: staff points {"plot":524.8,"writing":568.82,"filming":475.5,"editing":316.36}, Star filming points 71.94 (Star family fit 100), studio Comedy level 3 (+9%), era bar x1.22
Base scores: Audience 8.93 / Critic 9.05 · no weak meter
Combo grades: Audience C (x1) / Critic B (x1.06) · repetition fatigue x0.9 · critic saturation x1
Before expectations (after combo, weakness, fatigue, saturation; pre-clamp): Audience 8.03 / Critic 8.64 · critic generation 0 (−0.0%, undefined) · audience era 0 (−0.0%) · then clamp 0–10 (generation/era 0 = the ones active at game start)
**Final: Audience 8.03 / Critic 8.64 → avg 8.34**

**Opening & viewership trace** [marketing/Fame/reach affect viewers only]

Awareness inputs: base 0.35, marketing 0.55, studioBuzz 0, starFame 0.28, trend 0, ipFans 0.34 → awareness 0.78. Reach cap 400,000 → pool 312,280 → opening 93,684.

| Wk | Viewers | Retention | Driver | Gross | Studio | Distributor |
|---:|---:|---:|---|---:|---:|---:|
| 1 | 93,684 | 1 | opening (aware people watching) | $187,368 | $103,052 | $84,316 |
| 2 | 70,930 | 0.76 | critic 8.64: +7,663 newly aware (buzz) | $141,860 | $78,023 | $63,837 |
| 3 | 43,577 | 0.61 | critic 8.64: +9,285 newly aware (buzz) | $87,154 | $47,935 | $39,219 |
| 4 | 42,356 | 0.97 | audience 8.03: +52,815 newly aware (word of mouth) | $84,712 | $46,592 | $38,120 |
| 5 | 42,131 | 0.99 | audience 8.03: +51,335 newly aware (word of mouth) | $84,262 | $46,344 | $37,918 |
| 6 | 33,765 | 0.8 | audience 8.03: +27,492 newly aware (word of mouth) | $67,530 | $37,142 | $30,389 |
| 7 | 22,758 | 0.67 | audience 8.03: +9,580 newly aware (word of mouth) | $45,516 | $25,034 | $20,482 |
| 8 | 15,761 | 0.69 | audience 8.03: +7,677 newly aware (word of mouth) | $31,522 | $17,337 | $14,185 |
| 9 | 10,866 | 0.69 | audience 8.03: +5,175 newly aware (word of mouth) | $21,732 | $11,953 | $9,779 |
| 10 | 7,497 | 0.69 | audience 8.03: +3,584 newly aware (word of mouth) | $14,994 | $8,247 | $6,747 |
| 11 | 5,172 | 0.69 | audience 8.03: +2,471 newly aware (word of mouth) | $10,344 | $5,689 | $4,655 |
| 12 | 3,568 | 0.69 | audience 8.03: +1,705 newly aware (word of mouth) | $7,136 | $3,925 | $3,211 |
| 13 | 2,461 | 0.69 | audience 8.03: +1,176 newly aware (word of mouth) | $4,922 | $2,707 | $2,215 |
| 14 | 1,698 | 0.69 | audience 8.03: +811 newly aware (word of mouth) | $3,396 | $1,868 | $1,528 |
| 15 | 0 | 0 | audience 8.03: +560 newly aware (word of mouth) | $0 | $0 | $0 |

**Progression trace**

- Prestige awards: Prestige +50: meters_all_70 (Dead Run 5).; Prestige +75: audience_7_5 (Dead Run 5).; Prestige +85: critic_8_5 (Dead Run 5).
- IP fans: {"before":52123,"after":73297,"delta":21174}
- Star career: {"fameDelta":12.11,"relDelta":0.75,"grow":0,"level":5,"reasons":"worked together (+); project boosted their career (+)"}
- Distributor trust: Meridian Global earned 260% of its advance back on Dead Run 5 with strong reviews (step 0.75)
- Rule labels: LOCKED = causal chain, accounting, fallback/no-campaign, thresholds 4.0/9.0, IP fan inheritance. WORKING ASSUMPTION = all formulas' shapes and numbers.

### Dead Storm — Action + Sports (new)

Released week 304 (year 5.8) · Distributor: XYZ Network · Star: Bo Hart (L9, Fame 100) · IP: Dead Storm

**Financial waterfall** [LOCKED rules; amounts provisional]

| Item | Amount |
|---|---:|
| Advance received (project reserve, not revenue) | $140,000 |
| Base cost (unavoidable) | −$60,000 |
| Star fee | −$66,819 |
| Marketing campaign | −$20,000 |
| Paid from studio cash (overrun) | $6,819 |
| **Unused advance kept at completion** | $0 |
| Gross from sales (15 weeks) | $746,200 |
| Distributor royalty (40% of weekly gross) | −$298,480 |
| **Studio take** | $447,720 |
| Net for this title (surplus + take − cash overrun; wages are studio-wide, excluded) | $440,901 |

**Quality trace** [scores are computed, never rolled]

Meters (0–100): Plot 91.28 · Writing 91.91 · Filming 90.19 · Editing 86.84
Inputs: staff points {"plot":537,"writing":583.39,"filming":490.96,"editing":325.57}, Star filming points 71.94 (Star family fit 100), studio Action level 3 (+9%), era bar x1.23
Base scores: Audience 8.94 / Critic 9.07 · no weak meter
Combo grades: Audience A (x1.15) / Critic B (x1.06) · repetition fatigue x0.85 · critic saturation x0.9
Before expectations (after combo, weakness, fatigue, saturation; pre-clamp): Audience 8.74 / Critic 7.35 · critic generation 0 (−0.0%, undefined) · audience era 0 (−0.0%) · then clamp 0–10 (generation/era 0 = the ones active at game start)
**Final: Audience 8.74 / Critic 7.35 → avg 8.05**

**Opening & viewership trace** [marketing/Fame/reach affect viewers only]

Awareness inputs: base 0.35, marketing 0.55, studioBuzz 0, starFame 0.6, trend 0.1, ipFans 0 → awareness 0.8. Reach cap 376,000 → pool 300,087 → opening 90,026.

| Wk | Viewers | Retention | Driver | Gross | Studio | Distributor |
|---:|---:|---:|---|---:|---:|---:|
| 1 | 90,026 | 1 | opening (aware people watching) | $180,052 | $108,031 | $72,021 |
| 2 | 63,408 | 0.7 | critic 7.35: +4,281 newly aware (buzz) | $126,816 | $76,090 | $50,726 |
| 3 | 38,923 | 0.61 | critic 7.35: +5,462 newly aware (buzz) | $77,846 | $46,708 | $31,138 |
| 4 | 44,921 | 1.15 | audience 8.74: +58,229 newly aware (word of mouth) | $89,842 | $53,905 | $35,937 |
| 5 | 45,928 | 1.02 | audience 8.74: +57,497 newly aware (word of mouth) | $91,856 | $55,114 | $36,742 |
| 6 | 29,495 | 0.64 | audience 8.74: +9,747 newly aware (word of mouth) | $58,990 | $35,394 | $23,596 |
| 7 | 20,262 | 0.69 | audience 8.74: +9,966 newly aware (word of mouth) | $40,524 | $24,314 | $16,210 |
| 8 | 13,760 | 0.68 | audience 8.74: +6,400 newly aware (word of mouth) | $27,520 | $16,512 | $11,008 |
| 9 | 9,362 | 0.68 | audience 8.74: +4,396 newly aware (word of mouth) | $18,724 | $11,234 | $7,490 |
| 10 | 6,368 | 0.68 | audience 8.74: +2,986 newly aware (word of mouth) | $12,736 | $7,642 | $5,094 |
| 11 | 4,332 | 0.68 | audience 8.74: +2,032 newly aware (word of mouth) | $8,664 | $5,198 | $3,466 |
| 12 | 2,947 | 0.68 | audience 8.74: +1,382 newly aware (word of mouth) | $5,894 | $3,536 | $2,358 |
| 13 | 2,004 | 0.68 | audience 8.74: +940 newly aware (word of mouth) | $4,008 | $2,405 | $1,603 |
| 14 | 1,364 | 0.68 | audience 8.74: +639 newly aware (word of mouth) | $2,728 | $1,637 | $1,091 |
| 15 | 0 | 0 | audience 8.74: +435 newly aware (word of mouth) | $0 | $0 | $0 |

**Progression trace**

- Prestige awards: Prestige +50: meters_all_70 (Dead Storm).; Prestige +75: audience_7_5 (Dead Storm).
- IP fans: {"before":0,"after":18207,"delta":18207}
- Star career: {"fameDelta":10.88,"relDelta":0.25,"grow":0,"level":7,"reasons":"worked together (+)"}
- Distributor trust: XYZ Network earned 213% of its advance back on Dead Storm with strong reviews (step 0.75)
- Rule labels: LOCKED = causal chain, accounting, fallback/no-campaign, thresholds 4.0/9.0, IP fan inheritance. WORKING ASSUMPTION = all formulas' shapes and numbers.

### Dead Run 6 — Comedy + Spies (sequel)

Released week 320 (year 6.2) · Distributor: XYZ Network · Star: Sam Lind (L7, Fame 98) · IP: Dead Run

**Financial waterfall** [LOCKED rules; amounts provisional]

| Item | Amount |
|---|---:|
| Advance received (project reserve, not revenue) | $148,000 |
| Base cost (unavoidable) | −$60,000 |
| Star fee | −$33,724 |
| Marketing campaign | −$20,000 |
| Paid from studio cash (overrun) | $0 |
| **Unused advance kept at completion** | $34,276 |
| Gross from sales (15 weeks) | $744,620 |
| Distributor royalty (40% of weekly gross) | −$297,848 |
| **Studio take** | $446,772 |
| Net for this title (surplus + take − cash overrun; wages are studio-wide, excluded) | $481,048 |

**Quality trace** [scores are computed, never rolled]

Meters (0–100): Plot 91.53 · Writing 92.16 · Filming 90.38 · Editing 87.23
Inputs: staff points {"plot":560.18,"writing":609.24,"filming":508.59,"editing":340.58}, Star filming points 71.94 (Star family fit 100), studio Comedy level 3 (+9%), era bar x1.25
Base scores: Audience 8.97 / Critic 9.09 · no weak meter
Combo grades: Audience C (x1) / Critic B (x1.06) · repetition fatigue x0.88 · critic saturation x1
Before expectations (after combo, weakness, fatigue, saturation; pre-clamp): Audience 7.9 / Critic 8.48 · critic generation 1 (−8.0%, undefined) · audience era 0 (−0.0%) · then clamp 0–10 (generation/era 0 = the ones active at game start)
**Final: Audience 7.9 / Critic 7.8 → avg 7.85**

**Opening & viewership trace** [marketing/Fame/reach affect viewers only]

Awareness inputs: base 0.35, marketing 0.55, studioBuzz 0, starFame 0.28, trend 0, ipFans 0.44 → awareness 0.8. Reach cap 376,000 → pool 301,988 → opening 90,596.

| Wk | Viewers | Retention | Driver | Gross | Studio | Distributor |
|---:|---:|---:|---|---:|---:|---:|
| 1 | 90,596 | 1 | opening (aware people watching) | $181,192 | $108,715 | $72,477 |
| 2 | 65,322 | 0.72 | critic 7.8: +4,974 newly aware (buzz) | $130,644 | $78,386 | $52,258 |
| 3 | 39,993 | 0.61 | critic 7.8: +6,344 newly aware (buzz) | $79,986 | $47,992 | $31,994 |
| 4 | 39,195 | 0.98 | audience 7.9: +46,392 newly aware (word of mouth) | $78,390 | $47,034 | $31,356 |
| 5 | 38,261 | 0.98 | audience 7.9: +45,466 newly aware (word of mouth) | $76,522 | $45,913 | $30,609 |
| 6 | 32,240 | 0.84 | audience 7.9: +29,507 newly aware (word of mouth) | $64,480 | $38,688 | $25,792 |
| 7 | 21,640 | 0.67 | audience 7.9: +8,775 newly aware (word of mouth) | $43,280 | $25,968 | $17,312 |
| 8 | 15,042 | 0.7 | audience 7.9: +7,394 newly aware (word of mouth) | $30,084 | $18,050 | $12,034 |
| 9 | 10,395 | 0.69 | audience 7.9: +4,963 newly aware (word of mouth) | $20,790 | $12,474 | $8,316 |
| 10 | 7,190 | 0.69 | audience 7.9: +3,450 newly aware (word of mouth) | $14,380 | $8,628 | $5,752 |
| 11 | 4,973 | 0.69 | audience 7.9: +2,384 newly aware (word of mouth) | $9,946 | $5,968 | $3,978 |
| 12 | 3,439 | 0.69 | audience 7.9: +1,649 newly aware (word of mouth) | $6,878 | $4,127 | $2,751 |
| 13 | 2,379 | 0.69 | audience 7.9: +1,140 newly aware (word of mouth) | $4,758 | $2,855 | $1,903 |
| 14 | 1,645 | 0.69 | audience 7.9: +789 newly aware (word of mouth) | $3,290 | $1,974 | $1,316 |
| 15 | 0 | 0 | audience 7.9: +546 newly aware (word of mouth) | $0 | $0 | $0 |

**Progression trace**

- Prestige awards: Prestige +50: meters_all_70 (Dead Run 6).; Prestige +75: audience_7_5 (Dead Run 6).
- IP fans: {"before":68918,"after":85895,"delta":16977}
- Star career: {"fameDelta":10.16,"relDelta":0.75,"grow":0,"level":5,"reasons":"worked together (+); project boosted their career (+)"}
- Distributor trust: XYZ Network earned 201% of its advance back on Dead Run 6 with strong reviews (step 0.75)
- Rule labels: LOCKED = causal chain, accounting, fallback/no-campaign, thresholds 4.0/9.0, IP fan inheritance. WORKING ASSUMPTION = all formulas' shapes and numbers.

### Silver Horizon — Comedy + Dinosaurs (new)

Released week 336 (year 6.5) · Distributor: XYZ Network · Star: Kai Hart (L5, Fame 82) · IP: Silver Horizon

**Financial waterfall** [LOCKED rules; amounts provisional]

| Item | Amount |
|---|---:|
| Advance received (project reserve, not revenue) | $151,000 |
| Base cost (unavoidable) | −$60,000 |
| Star fee | −$26,173 |
| Marketing campaign | −$20,000 |
| Paid from studio cash (overrun) | $0 |
| **Unused advance kept at completion** | $44,827 |
| Gross from sales (15 weeks) | $747,318 |
| Distributor royalty (39% of weekly gross) | −$291,454 |
| **Studio take** | $455,864 |
| Net for this title (surplus + take − cash overrun; wages are studio-wide, excluded) | $500,691 |

**Quality trace** [scores are computed, never rolled]

Meters (0–100): Plot 91.53 · Writing 92.18 · Filming 90.38 · Editing 87.26
Inputs: staff points {"plot":565.61,"writing":616.72,"filming":516.22,"editing":344.64}, Star filming points 70.5 (Star family fit 98), studio Comedy level 3 (+9%), era bar x1.26
Base scores: Audience 8.97 / Critic 9.09 · no weak meter
Combo grades: Audience B (x1.06) / Critic C (x1) · repetition fatigue x1 · critic saturation x1
Before expectations (after combo, weakness, fatigue, saturation; pre-clamp): Audience 9.51 / Critic 9.09 · critic generation 1 (−8.0%, undefined) · audience era 0 (−0.0%) · then clamp 0–10 (generation/era 0 = the ones active at game start)
**Final: Audience 9.51 / Critic 8.37 → avg 8.94**

**Opening & viewership trace** [marketing/Fame/reach affect viewers only]

Awareness inputs: base 0.35, marketing 0.55, studioBuzz 0, starFame 0.23, trend 0.4, ipFans 0 → awareness 0.78. Reach cap 376,000 → pool 294,420 → opening 88,326.

| Wk | Viewers | Retention | Driver | Gross | Studio | Distributor |
|---:|---:|---:|---|---:|---:|---:|
| 1 | 88,326 | 1 | opening (aware people watching) | $176,652 | $107,758 | $68,894 |
| 2 | 65,890 | 0.75 | critic 8.37: +6,598 newly aware (buzz) | $131,780 | $80,386 | $51,394 |
| 3 | 40,484 | 0.61 | critic 8.37: +8,065 newly aware (buzz) | $80,968 | $49,390 | $31,578 |
| 4 | 51,117 | 1.26 | audience 9.51: +73,033 newly aware (word of mouth) | $102,234 | $62,363 | $39,871 |
| 5 | 43,983 | 0.86 | audience 9.51: +42,264 newly aware (word of mouth) | $87,966 | $53,659 | $34,307 |
| 6 | 28,354 | 0.64 | audience 9.51: +10,550 newly aware (word of mouth) | $56,708 | $34,592 | $22,116 |
| 7 | 19,116 | 0.67 | audience 9.51: +9,078 newly aware (word of mouth) | $38,232 | $23,322 | $14,910 |
| 8 | 12,789 | 0.67 | audience 9.51: +5,852 newly aware (word of mouth) | $25,578 | $15,603 | $9,975 |
| 9 | 8,567 | 0.67 | audience 9.51: +3,945 newly aware (word of mouth) | $17,134 | $10,452 | $6,682 |
| 10 | 5,737 | 0.67 | audience 9.51: +2,639 newly aware (word of mouth) | $11,474 | $6,999 | $4,475 |
| 11 | 3,843 | 0.67 | audience 9.51: +1,768 newly aware (word of mouth) | $7,686 | $4,688 | $2,998 |
| 12 | 2,574 | 0.67 | audience 9.51: +1,184 newly aware (word of mouth) | $5,148 | $3,140 | $2,008 |
| 13 | 1,724 | 0.67 | audience 9.51: +793 newly aware (word of mouth) | $3,448 | $2,103 | $1,345 |
| 14 | 1,155 | 0.67 | audience 9.51: +531 newly aware (word of mouth) | $2,310 | $1,409 | $901 |
| 15 | 0 | 0 | audience 9.51: +356 newly aware (word of mouth) | $0 | $0 | $0 |

**Progression trace**

- Prestige awards: Prestige +50: meters_all_70 (Silver Horizon).; Prestige +75: audience_7_5 (Silver Horizon).
- IP fans: {"before":0,"after":23555,"delta":23555}
- Star career: {"fameDelta":14.06,"relDelta":0.75,"grow":2,"level":3,"reasons":"worked together (+); project boosted their career (+)"}
- Distributor trust: XYZ Network earned 193% of its advance back on Silver Horizon with strong reviews (step 0.75)
- Rule labels: LOCKED = causal chain, accounting, fallback/no-campaign, thresholds 4.0/9.0, IP fan inheritance. WORKING ASSUMPTION = all formulas' shapes and numbers.

### Dead Run 7 — Comedy + Spies (sequel)

Released week 352 (year 6.8) · Distributor: XYZ Network · Star: Kai Hart (L5, Fame 82) · IP: Dead Run

**Financial waterfall** [LOCKED rules; amounts provisional]

| Item | Amount |
|---|---:|
| Advance received (project reserve, not revenue) | $143,000 |
| Base cost (unavoidable) | −$60,000 |
| Star fee | −$26,155 |
| Marketing campaign | −$20,000 |
| Paid from studio cash (overrun) | $0 |
| **Unused advance kept at completion** | $36,845 |
| Gross from sales (15 weeks) | $744,282 |
| Distributor royalty (39% of weekly gross) | −$290,270 |
| **Studio take** | $454,012 |
| Net for this title (surplus + take − cash overrun; wages are studio-wide, excluded) | $490,857 |

**Quality trace** [scores are computed, never rolled]

Meters (0–100): Plot 91.95 · Writing 92.56 · Filming 90.75 · Editing 87.73
Inputs: staff points {"plot":603.55,"writing":657.97,"filming":546.19,"editing":363.29}, Star filming points 72.42 (Star family fit 100), studio Comedy level 4 (+12%), era bar x1.27
Base scores: Audience 9.01 / Critic 9.14 · no weak meter
Combo grades: Audience C (x1) / Critic B (x1.06) · repetition fatigue x0.85 · critic saturation x1
Before expectations (after combo, weakness, fatigue, saturation; pre-clamp): Audience 7.66 / Critic 8.23 · critic generation 1 (−8.0%, undefined) · audience era 0 (−0.0%) · then clamp 0–10 (generation/era 0 = the ones active at game start)
**Final: Audience 7.66 / Critic 7.57 → avg 7.62**

**Opening & viewership trace** [marketing/Fame/reach affect viewers only]

Awareness inputs: base 0.35, marketing 0.55, studioBuzz 0, starFame 0.31, trend 0, ipFans 0.52 → awareness 0.82. Reach cap 376,000 → pool 309,469 → opening 92,841.

| Wk | Viewers | Retention | Driver | Gross | Studio | Distributor |
|---:|---:|---:|---|---:|---:|---:|
| 1 | 92,841 | 1 | opening (aware people watching) | $185,682 | $113,266 | $72,416 |
| 2 | 65,928 | 0.71 | critic 7.57: +4,104 newly aware (buzz) | $131,856 | $80,432 | $51,424 |
| 3 | 40,221 | 0.61 | critic 7.57: +5,454 newly aware (buzz) | $80,442 | $49,070 | $31,372 |
| 4 | 38,052 | 0.95 | audience 7.66: +42,795 newly aware (word of mouth) | $76,104 | $46,423 | $29,681 |
| 5 | 35,865 | 0.94 | audience 7.66: +40,487 newly aware (word of mouth) | $71,730 | $43,755 | $27,975 |
| 6 | 32,200 | 0.9 | audience 7.66: +33,441 newly aware (word of mouth) | $64,400 | $39,284 | $25,116 |
| 7 | 21,546 | 0.67 | audience 7.66: +8,358 newly aware (word of mouth) | $43,092 | $26,286 | $16,806 |
| 8 | 15,066 | 0.7 | audience 7.66: +7,504 newly aware (word of mouth) | $30,132 | $18,381 | $11,751 |
| 9 | 10,459 | 0.69 | audience 7.66: +5,021 newly aware (word of mouth) | $20,918 | $12,760 | $8,158 |
| 10 | 7,269 | 0.69 | audience 7.66: +3,511 newly aware (word of mouth) | $14,538 | $8,868 | $5,670 |
| 11 | 5,051 | 0.69 | audience 7.66: +2,437 newly aware (word of mouth) | $10,102 | $6,162 | $3,940 |
| 12 | 3,509 | 0.69 | audience 7.66: +1,694 newly aware (word of mouth) | $7,018 | $4,281 | $2,737 |
| 13 | 2,439 | 0.7 | audience 7.66: +1,177 newly aware (word of mouth) | $4,878 | $2,976 | $1,902 |
| 14 | 1,695 | 0.69 | audience 7.66: +818 newly aware (word of mouth) | $3,390 | $2,068 | $1,322 |
| 15 | 0 | 0 | audience 7.66: +568 newly aware (word of mouth) | $0 | $0 | $0 |

**Progression trace**

- Prestige awards: Prestige +50: meters_all_70 (Dead Run 7).; Prestige +75: audience_7_5 (Dead Run 7).; Prestige +150: ip_gross_5m (Dead Run 7).
- IP fans: {"before":80763,"after":96363,"delta":15600}
- Star career: {"fameDelta":9.34,"relDelta":0.75,"grow":0,"level":4,"reasons":"worked together (+); project boosted their career (+)"}
- Distributor trust: XYZ Network earned 203% of its advance back on Dead Run 7 with strong reviews (step 0.75)
- Rule labels: LOCKED = causal chain, accounting, fallback/no-campaign, thresholds 4.0/9.0, IP fan inheritance. WORKING ASSUMPTION = all formulas' shapes and numbers.

### Silver Horizon 2 — Comedy + Dinosaurs (sequel)

Released week 368 (year 7.1) · Distributor: XYZ Network · Star: Kai Hart (L5, Fame 82) · IP: Silver Horizon

**Financial waterfall** [LOCKED rules; amounts provisional]

| Item | Amount |
|---|---:|
| Advance received (project reserve, not revenue) | $135,000 |
| Base cost (unavoidable) | −$60,000 |
| Star fee | −$36,388 |
| Marketing campaign | −$20,000 |
| Paid from studio cash (overrun) | $0 |
| **Unused advance kept at completion** | $18,612 |
| Gross from sales (15 weeks) | $746,906 |
| Distributor royalty (40% of weekly gross) | −$298,762 |
| **Studio take** | $448,144 |
| Net for this title (surplus + take − cash overrun; wages are studio-wide, excluded) | $466,755 |

**Quality trace** [scores are computed, never rolled]

Meters (0–100): Plot 92 · Writing 92.63 · Filming 90.92 · Editing 87.89
Inputs: staff points {"plot":614.13,"writing":670.72,"filming":563.5,"editing":372.52}, Star filming points 73.92 (Star family fit 100), studio Comedy level 4 (+12%), era bar x1.28
Base scores: Audience 9.03 / Critic 9.14 · no weak meter
Combo grades: Audience B (x1.06) / Critic C (x1) · repetition fatigue x0.98 · critic saturation x0.9
Before expectations (after combo, weakness, fatigue, saturation; pre-clamp): Audience 9.38 / Critic 8.07 · critic generation 1 (−8.0%, undefined) · audience era 0 (−0.0%) · then clamp 0–10 (generation/era 0 = the ones active at game start)
**Final: Audience 9.38 / Critic 7.42 → avg 8.4**

**Opening & viewership trace** [marketing/Fame/reach affect viewers only]

Awareness inputs: base 0.35, marketing 0.55, studioBuzz 0, starFame 0.37, trend 0.1, ipFans 0.14 → awareness 0.78. Reach cap 376,000 → pool 293,011 → opening 87,903.

| Wk | Viewers | Retention | Driver | Gross | Studio | Distributor |
|---:|---:|---:|---|---:|---:|---:|
| 1 | 87,903 | 1 | opening (aware people watching) | $175,806 | $105,484 | $70,322 |
| 2 | 62,321 | 0.71 | critic 7.42: +4,820 newly aware (buzz) | $124,642 | $74,785 | $49,857 |
| 3 | 38,407 | 0.62 | critic 7.42: +5,970 newly aware (buzz) | $76,814 | $46,088 | $30,726 |
| 4 | 49,000 | 1.28 | audience 9.38: +67,289 newly aware (word of mouth) | $98,000 | $58,800 | $39,200 |
| 5 | 46,872 | 0.96 | audience 9.38: +53,378 newly aware (word of mouth) | $93,744 | $56,246 | $37,498 |
| 6 | 29,893 | 0.64 | audience 9.38: +10,199 newly aware (word of mouth) | $59,786 | $35,872 | $23,914 |
| 7 | 20,253 | 0.68 | audience 9.38: +9,756 newly aware (word of mouth) | $40,506 | $24,304 | $16,202 |
| 8 | 13,580 | 0.67 | audience 9.38: +6,222 newly aware (word of mouth) | $27,160 | $16,296 | $10,864 |
| 9 | 9,122 | 0.67 | audience 9.38: +4,216 newly aware (word of mouth) | $18,244 | $10,946 | $7,298 |
| 10 | 6,126 | 0.67 | audience 9.38: +2,827 newly aware (word of mouth) | $12,252 | $7,351 | $4,901 |
| 11 | 4,113 | 0.67 | audience 9.38: +1,899 newly aware (word of mouth) | $8,226 | $4,936 | $3,290 |
| 12 | 2,762 | 0.67 | audience 9.38: +1,275 newly aware (word of mouth) | $5,524 | $3,314 | $2,210 |
| 13 | 1,855 | 0.67 | audience 9.38: +856 newly aware (word of mouth) | $3,710 | $2,226 | $1,484 |
| 14 | 1,246 | 0.67 | audience 9.38: +575 newly aware (word of mouth) | $2,492 | $1,495 | $997 |
| 15 | 0 | 0 | audience 9.38: +386 newly aware (word of mouth) | $0 | $0 | $0 |

**Progression trace**

- Prestige awards: Prestige +50: meters_all_70 (Silver Horizon 2).; Prestige +75: audience_7_5 (Silver Horizon 2).; Prestige +100: ip_gross_1m (Silver Horizon 2).; Prestige +150: ip_viewers_500k (Silver Horizon 2).
- IP fans: {"before":22147,"after":42463,"delta":20316}
- Star career: {"fameDelta":12.13,"relDelta":0.75,"grow":0,"level":4,"reasons":"worked together (+); project boosted their career (+)"}
- Distributor trust: XYZ Network earned 221% of its advance back on Silver Horizon 2 with strong reviews (step 0.75)
- Rule labels: LOCKED = causal chain, accounting, fallback/no-campaign, thresholds 4.0/9.0, IP fan inheritance. WORKING ASSUMPTION = all formulas' shapes and numbers.

### Dead Run 8 — Comedy + Spies (sequel)

Released week 384 (year 7.4) · Distributor: XYZ Network · Star: Kai Hart (L5, Fame 82) · IP: Dead Run

**Financial waterfall** [LOCKED rules; amounts provisional]

| Item | Amount |
|---|---:|
| Advance received (project reserve, not revenue) | $145,000 |
| Base cost (unavoidable) | −$60,000 |
| Star fee | −$42,315 |
| Marketing campaign | −$20,000 |
| Paid from studio cash (overrun) | $0 |
| **Unused advance kept at completion** | $22,685 |
| Gross from sales (15 weeks) | $744,474 |
| Distributor royalty (39% of weekly gross) | −$290,345 |
| **Studio take** | $454,129 |
| Net for this title (surplus + take − cash overrun; wages are studio-wide, excluded) | $476,814 |

**Quality trace** [scores are computed, never rolled]

Meters (0–100): Plot 92.25 · Writing 92.86 · Filming 91.17 · Editing 88.39
Inputs: staff points {"plot":641.76,"writing":701.24,"filming":589.25,"editing":394.6}, Star filming points 73.92 (Star family fit 100), studio Comedy level 4 (+12%), era bar x1.3
Base scores: Audience 9.06 / Critic 9.17 · no weak meter
Combo grades: Audience C (x1) / Critic B (x1.06) · repetition fatigue x0.83 · critic saturation x1
Before expectations (after combo, weakness, fatigue, saturation; pre-clamp): Audience 7.52 / Critic 8.07 · critic generation 1 (−8.0%, undefined) · audience era 0 (−0.0%) · then clamp 0–10 (generation/era 0 = the ones active at game start)
**Final: Audience 7.52 / Critic 7.42 → avg 7.47**

**Opening & viewership trace** [marketing/Fame/reach affect viewers only]

Awareness inputs: base 0.35, marketing 0.55, studioBuzz 0, starFame 0.44, trend 0, ipFans 0.58 → awareness 0.85. Reach cap 376,000 → pool 321,099 → opening 96,330.

| Wk | Viewers | Retention | Driver | Gross | Studio | Distributor |
|---:|---:|---:|---|---:|---:|---:|
| 1 | 96,330 | 1 | opening (aware people watching) | $192,660 | $117,523 | $75,137 |
| 2 | 67,591 | 0.7 | critic 7.42: +3,189 newly aware (buzz) | $135,182 | $82,461 | $52,721 |
| 3 | 41,014 | 0.61 | critic 7.42: +4,570 newly aware (buzz) | $82,028 | $50,037 | $31,991 |
| 4 | 38,027 | 0.93 | audience 7.52: +41,342 newly aware (word of mouth) | $76,054 | $46,393 | $29,661 |
| 5 | 35,108 | 0.92 | audience 7.52: +38,331 newly aware (word of mouth) | $70,216 | $42,832 | $27,384 |
| 6 | 30,291 | 0.86 | audience 7.52: +29,107 newly aware (word of mouth) | $60,582 | $36,955 | $23,627 |
| 7 | 20,441 | 0.67 | audience 7.52: +8,259 newly aware (word of mouth) | $40,882 | $24,938 | $15,944 |
| 8 | 14,319 | 0.7 | audience 7.52: +7,126 newly aware (word of mouth) | $28,638 | $17,469 | $11,169 |
| 9 | 9,969 | 0.7 | audience 7.52: +4,809 newly aware (word of mouth) | $19,938 | $12,162 | $7,776 |
| 10 | 6,947 | 0.7 | audience 7.52: +3,368 newly aware (word of mouth) | $13,894 | $8,475 | $5,419 |
| 11 | 4,840 | 0.7 | audience 7.52: +2,345 newly aware (word of mouth) | $9,680 | $5,905 | $3,775 |
| 12 | 3,373 | 0.7 | audience 7.52: +1,634 newly aware (word of mouth) | $6,746 | $4,115 | $2,631 |
| 13 | 2,350 | 0.7 | audience 7.52: +1,139 newly aware (word of mouth) | $4,700 | $2,867 | $1,833 |
| 14 | 1,637 | 0.7 | audience 7.52: +793 newly aware (word of mouth) | $3,274 | $1,997 | $1,277 |
| 15 | 0 | 0 | audience 7.52: +553 newly aware (word of mouth) | $0 | $0 | $0 |

**Progression trace**

- Prestige awards: Prestige +50: meters_all_70 (Dead Run 8).; Prestige +75: audience_7_5 (Dead Run 8).
- IP fans: {"before":90606,"after":105317,"delta":14711}
- Star career: {"fameDelta":8.8,"relDelta":0.75,"grow":0,"level":5,"reasons":"worked together (+); project boosted their career (+)"}
- Distributor trust: XYZ Network earned 200% of its advance back on Dead Run 8 with strong reviews (step 0.75)
- Rule labels: LOCKED = causal chain, accounting, fallback/no-campaign, thresholds 4.0/9.0, IP fan inheritance. WORKING ASSUMPTION = all formulas' shapes and numbers.

### Dead Frequency — Action + Time Travel (new)

Released week 400 (year 7.7) · Distributor: Meridian Global · Star: Bo Hart (L9, Fame 100) · IP: Dead Frequency

**Financial waterfall** [LOCKED rules; amounts provisional]

| Item | Amount |
|---|---:|
| Advance received (project reserve, not revenue) | $112,000 |
| Base cost (unavoidable) | −$60,000 |
| Star fee | −$65,590 |
| Marketing campaign | −$20,000 |
| Paid from studio cash (overrun) | $33,590 |
| **Unused advance kept at completion** | $0 |
| Gross from sales (15 weeks) | $862,696 |
| Distributor royalty (46% of weekly gross) | −$396,840 |
| **Studio take** | $465,856 |
| Net for this title (surplus + take − cash overrun; wages are studio-wide, excluded) | $432,266 |

**Quality trace** [scores are computed, never rolled]

Meters (0–100): Plot 92.22 · Writing 92.83 · Filming 90.96 · Editing 87.94
Inputs: staff points {"plot":645.06,"writing":704.71,"filming":580.64,"editing":381.32}, Star filming points 71.94 (Star family fit 100), studio Action level 3 (+9%), era bar x1.31
Base scores: Audience 9.04 / Critic 9.16 · no weak meter
Combo grades: Audience F (x0.78) / Critic C (x1) · repetition fatigue x1 · critic saturation x1
Before expectations (after combo, weakness, fatigue, saturation; pre-clamp): Audience 7.05 / Critic 9.16 · critic generation 1 (−8.0%, undefined) · audience era 0 (−0.0%) · then clamp 0–10 (generation/era 0 = the ones active at game start)
**Final: Audience 7.05 / Critic 8.43 → avg 7.74**

**Opening & viewership trace** [marketing/Fame/reach affect viewers only]

Awareness inputs: base 0.35, marketing 0.55, studioBuzz 0, starFame 0.6, trend 0, ipFans 0 → awareness 0.78. Reach cap 440,000 → pool 341,823 → opening 102,547.

| Wk | Viewers | Retention | Driver | Gross | Studio | Distributor |
|---:|---:|---:|---|---:|---:|---:|
| 1 | 102,547 | 1 | opening (aware people watching) | $205,094 | $110,751 | $94,343 |
| 2 | 76,843 | 0.75 | critic 8.43: +8,082 newly aware (buzz) | $153,686 | $82,990 | $70,696 |
| 3 | 47,293 | 0.62 | critic 8.43: +9,780 newly aware (buzz) | $94,586 | $51,076 | $43,510 |
| 4 | 38,228 | 0.81 | audience 7.05: +38,780 newly aware (word of mouth) | $76,456 | $41,286 | $35,170 |
| 5 | 32,882 | 0.86 | audience 7.05: +31,347 newly aware (word of mouth) | $65,764 | $35,513 | $30,251 |
| 6 | 28,284 | 0.86 | audience 7.05: +26,963 newly aware (word of mouth) | $56,568 | $30,547 | $26,021 |
| 7 | 24,328 | 0.86 | audience 7.05: +23,193 newly aware (word of mouth) | $48,656 | $26,274 | $22,382 |
| 8 | 20,926 | 0.86 | audience 7.05: +19,949 newly aware (word of mouth) | $41,852 | $22,600 | $19,252 |
| 9 | 18,000 | 0.86 | audience 7.05: +17,159 newly aware (word of mouth) | $36,000 | $19,440 | $16,560 |
| 10 | 15,313 | 0.85 | audience 7.05: +14,248 newly aware (word of mouth) | $30,626 | $16,538 | $14,088 |
| 11 | 10,464 | 0.68 | audience 7.05: +4,371 newly aware (word of mouth) | $20,928 | $11,301 | $9,627 |
| 12 | 7,393 | 0.71 | audience 7.05: +3,718 newly aware (word of mouth) | $14,786 | $7,984 | $6,802 |
| 13 | 5,194 | 0.7 | audience 7.05: +2,541 newly aware (word of mouth) | $10,388 | $5,610 | $4,778 |
| 14 | 3,653 | 0.7 | audience 7.05: +1,795 newly aware (word of mouth) | $7,306 | $3,945 | $3,361 |
| 15 | 0 | 0 | audience 7.05: +1,261 newly aware (word of mouth) | $0 | $0 | $0 |

**Progression trace**

- Prestige awards: Prestige +50: meters_all_70 (Dead Frequency).
- IP fans: {"before":0,"after":18910,"delta":18910}
- Star career: {"fameDelta":10.17,"relDelta":0.25,"grow":0,"level":8,"reasons":"worked together (+)"}
- Distributor trust: Meridian Global earned 354% of its advance back on Dead Frequency with strong reviews (step 0.75)
- Rule labels: LOCKED = causal chain, accounting, fallback/no-campaign, thresholds 4.0/9.0, IP fan inheritance. WORKING ASSUMPTION = all formulas' shapes and numbers.

### Dead Run 9 — Comedy + Spies (sequel)

Released week 416 (year 8.0) · Distributor: XYZ Network · Star: Sam Lind (L7, Fame 98) · IP: Dead Run

**Financial waterfall** [LOCKED rules; amounts provisional]

| Item | Amount |
|---|---:|
| Advance received (project reserve, not revenue) | $136,000 |
| Base cost (unavoidable) | −$60,000 |
| Star fee | −$42,441 |
| Marketing campaign | −$20,000 |
| Paid from studio cash (overrun) | $0 |
| **Unused advance kept at completion** | $13,559 |
| Gross from sales (15 weeks) | $743,024 |
| Distributor royalty (39% of weekly gross) | −$289,779 |
| **Studio take** | $453,245 |
| Net for this title (surplus + take − cash overrun; wages are studio-wide, excluded) | $466,804 |

**Quality trace** [scores are computed, never rolled]

Meters (0–100): Plot 92.38 · Writing 92.99 · Filming 91.19 · Editing 88.38
Inputs: staff points {"plot":665.9,"writing":728.01,"filming":603.56,"editing":401.53}, Star filming points 73.92 (Star family fit 100), studio Comedy level 4 (+12%), era bar x1.32
Base scores: Audience 9.07 / Critic 9.18 · no weak meter
Combo grades: Audience C (x1) / Critic B (x1.06) · repetition fatigue x0.8 · critic saturation x1
Before expectations (after combo, weakness, fatigue, saturation; pre-clamp): Audience 7.25 / Critic 7.79 · critic generation 1 (−8.0%, undefined) · audience era 0 (−0.0%) · then clamp 0–10 (generation/era 0 = the ones active at game start)
**Final: Audience 7.25 / Critic 7.16 → avg 7.21**

**Opening & viewership trace** [marketing/Fame/reach affect viewers only]

Awareness inputs: base 0.35, marketing 0.55, studioBuzz 0, starFame 0.34, trend 0, ipFans 0.64 → awareness 0.85. Reach cap 376,000 → pool 318,626 → opening 95,588.

| Wk | Viewers | Retention | Driver | Gross | Studio | Distributor |
|---:|---:|---:|---|---:|---:|---:|
| 1 | 95,588 | 1 | opening (aware people watching) | $191,176 | $116,617 | $74,559 |
| 2 | 66,230 | 0.69 | critic 7.16: +2,974 newly aware (buzz) | $132,460 | $80,801 | $51,659 |
| 3 | 40,308 | 0.61 | critic 7.16: +4,208 newly aware (buzz) | $80,616 | $49,176 | $31,440 |
| 4 | 35,884 | 0.89 | audience 7.25: +36,277 newly aware (word of mouth) | $71,768 | $43,778 | $27,990 |
| 5 | 31,817 | 0.89 | audience 7.25: +32,296 newly aware (word of mouth) | $63,634 | $38,817 | $24,817 |
| 6 | 28,212 | 0.89 | audience 7.25: +28,635 newly aware (word of mouth) | $56,424 | $34,419 | $22,005 |
| 7 | 23,764 | 0.84 | audience 7.25: +21,643 newly aware (word of mouth) | $47,528 | $28,992 | $18,536 |
| 8 | 16,188 | 0.68 | audience 7.25: +6,758 newly aware (word of mouth) | $32,376 | $19,749 | $12,627 |
| 9 | 11,391 | 0.7 | audience 7.25: +5,693 newly aware (word of mouth) | $22,782 | $13,897 | $8,885 |
| 10 | 7,973 | 0.7 | audience 7.25: +3,878 newly aware (word of mouth) | $15,946 | $9,727 | $6,219 |
| 11 | 5,585 | 0.7 | audience 7.25: +2,729 newly aware (word of mouth) | $11,170 | $6,814 | $4,356 |
| 12 | 3,912 | 0.7 | audience 7.25: +1,910 newly aware (word of mouth) | $7,824 | $4,773 | $3,051 |
| 13 | 2,740 | 0.7 | audience 7.25: +1,338 newly aware (word of mouth) | $5,480 | $3,343 | $2,137 |
| 14 | 1,920 | 0.7 | audience 7.25: +937 newly aware (word of mouth) | $3,840 | $2,342 | $1,498 |
| 15 | 0 | 0 | audience 7.25: +656 newly aware (word of mouth) | $0 | $0 | $0 |

**Progression trace**

- Prestige awards: Prestige +50: meters_all_70 (Dead Run 9).
- IP fans: {"before":99024,"after":112161,"delta":13137}
- Star career: {"fameDelta":7.87,"relDelta":0.75,"grow":0,"level":6,"reasons":"worked together (+); project boosted their career (+)"}
- Distributor trust: XYZ Network earned 213% of its advance back on Dead Run 9 with strong reviews (step 0.75)
- Rule labels: LOCKED = causal chain, accounting, fallback/no-campaign, thresholds 4.0/9.0, IP fan inheritance. WORKING ASSUMPTION = all formulas' shapes and numbers.

### Wild Code — Action + Sports (new)

Released week 432 (year 8.3) · Distributor: Meridian Global · Star: Max Okafor (L6, Fame 85) · IP: Wild Code

**Financial waterfall** [LOCKED rules; amounts provisional]

| Item | Amount |
|---|---:|
| Advance received (project reserve, not revenue) | $191,000 |
| Base cost (unavoidable) | −$60,000 |
| Star fee | −$27,672 |
| Marketing campaign | −$20,000 |
| Paid from studio cash (overrun) | $0 |
| **Unused advance kept at completion** | $83,328 |
| Gross from sales (15 weeks) | $869,630 |
| Distributor royalty (43% of weekly gross) | −$373,941 |
| **Studio take** | $495,689 |
| Net for this title (surplus + take − cash overrun; wages are studio-wide, excluded) | $579,017 |

**Quality trace** [scores are computed, never rolled]

Meters (0–100): Plot 92.31 · Writing 92.91 · Filming 91.04 · Editing 88.27
Inputs: staff points {"plot":665.03,"writing":726.67,"filming":599.19,"editing":400.98}, Star filming points 71.94 (Star family fit 100), studio Action level 3 (+9%), era bar x1.33
Base scores: Audience 9.05 / Critic 9.17 · no weak meter
Combo grades: Audience A (x1.15) / Critic B (x1.06) · repetition fatigue x0.8 · critic saturation x0.9
Before expectations (after combo, weakness, fatigue, saturation; pre-clamp): Audience 8.33 / Critic 7 · critic generation 1 (−8.0%, undefined) · audience era 0 (−0.0%) · then clamp 0–10 (generation/era 0 = the ones active at game start)
**Final: Audience 8.33 / Critic 6.44 → avg 7.39**

**Opening & viewership trace** [marketing/Fame/reach affect viewers only]

Awareness inputs: base 0.35, marketing 0.55, studioBuzz 0, starFame 0.24, trend 0.1, ipFans 0 → awareness 0.71. Reach cap 440,000 → pool 312,671 → opening 93,801.

| Wk | Viewers | Retention | Driver | Gross | Studio | Distributor |
|---:|---:|---:|---|---:|---:|---:|
| 1 | 93,801 | 1 | opening (aware people watching) | $187,602 | $106,933 | $80,669 |
| 2 | 63,357 | 0.68 | critic 6.44: +4,400 newly aware (buzz) | $126,714 | $72,227 | $54,487 |
| 3 | 39,482 | 0.62 | critic 6.44: +5,156 newly aware (buzz) | $78,964 | $45,009 | $33,955 |
| 4 | 44,052 | 1.12 | audience 8.33: +52,590 newly aware (word of mouth) | $88,104 | $50,219 | $37,885 |
| 5 | 45,734 | 1.04 | audience 8.33: +58,677 newly aware (word of mouth) | $91,468 | $52,137 | $39,331 |
| 6 | 47,480 | 1.04 | audience 8.33: +60,918 newly aware (word of mouth) | $94,960 | $54,127 | $40,833 |
| 7 | 33,424 | 0.7 | audience 8.33: +17,898 newly aware (word of mouth) | $66,848 | $38,103 | $28,745 |
| 8 | 22,824 | 0.68 | audience 8.33: +10,584 newly aware (word of mouth) | $45,648 | $26,019 | $19,629 |
| 9 | 15,663 | 0.69 | audience 8.33: +7,450 newly aware (word of mouth) | $31,326 | $17,856 | $13,470 |
| 10 | 10,741 | 0.69 | audience 8.33: +5,087 newly aware (word of mouth) | $21,482 | $12,245 | $9,237 |
| 11 | 7,366 | 0.69 | audience 8.33: +3,491 newly aware (word of mouth) | $14,732 | $8,397 | $6,335 |
| 12 | 5,051 | 0.69 | audience 8.33: +2,394 newly aware (word of mouth) | $10,102 | $5,758 | $4,344 |
| 13 | 3,464 | 0.69 | audience 8.33: +1,642 newly aware (word of mouth) | $6,928 | $3,949 | $2,979 |
| 14 | 2,376 | 0.69 | audience 8.33: +1,126 newly aware (word of mouth) | $4,752 | $2,709 | $2,043 |
| 15 | 0 | 0 | audience 8.33: +772 newly aware (word of mouth) | $0 | $0 | $0 |

**Progression trace**

- Prestige awards: Prestige +50: meters_all_70 (Wild Code).; Prestige +75: audience_7_5 (Wild Code).
- IP fans: {"before":0,"after":16627,"delta":16627}
- Star career: {"fameDelta":8.88,"relDelta":0.75,"grow":0,"level":5,"reasons":"worked together (+); project boosted their career (+)"}
- Distributor trust: Meridian Global earned 196% of its advance back on Wild Code with strong reviews (step 0.75)
- Rule labels: LOCKED = causal chain, accounting, fallback/no-campaign, thresholds 4.0/9.0, IP fan inheritance. WORKING ASSUMPTION = all formulas' shapes and numbers.

### Broken Frequency — Horror + Pirates (new)

Released week 448 (year 8.6) · Distributor: Meridian Global · Star: Gus Quinn (L8, Fame 100) · IP: Broken Frequency

**Financial waterfall** [LOCKED rules; amounts provisional]

| Item | Amount |
|---|---:|
| Advance received (project reserve, not revenue) | $141,000 |
| Base cost (unavoidable) | −$60,000 |
| Star fee | −$63,309 |
| Marketing campaign | −$20,000 |
| Paid from studio cash (overrun) | $2,309 |
| **Unused advance kept at completion** | $0 |
| Gross from sales (15 weeks) | $795,042 |
| Distributor royalty (44% of weekly gross) | −$349,818 |
| **Studio take** | $445,224 |
| Net for this title (surplus + take − cash overrun; wages are studio-wide, excluded) | $442,914 |

**Quality trace** [scores are computed, never rolled]

Meters (0–100): Plot 92.09 · Writing 92.74 · Filming 90.93 · Editing 88.16
Inputs: staff points {"plot":651.38,"writing":714.37,"filming":598.92,"editing":400.29}, Star filming points 69.96 (Star family fit 100), studio Horror level 2 (+6%), era bar x1.34
Base scores: Audience 9.04 / Critic 9.16 · no weak meter
Combo grades: Audience B (x1.06) / Critic B (x1.06) · repetition fatigue x1 · critic saturation x1
Before expectations (after combo, weakness, fatigue, saturation; pre-clamp): Audience 9.58 / Critic 9.7 · critic generation 1 (−8.0%, undefined) · audience era 0 (−0.0%) · then clamp 0–10 (generation/era 0 = the ones active at game start)
**Final: Audience 9.58 / Critic 8.93 → avg 9.25 (HALL OF FAME)**

**Opening & viewership trace** [marketing/Fame/reach affect viewers only]

Awareness inputs: base 0.35, marketing 0.55, studioBuzz 0, starFame 0.53, trend 0, ipFans 0 → awareness 0.76. Reach cap 400,000 → pool 304,355 → opening 91,307.

| Wk | Viewers | Retention | Driver | Gross | Studio | Distributor |
|---:|---:|---:|---|---:|---:|---:|
| 1 | 91,307 | 1 | opening (aware people watching) | $182,614 | $102,264 | $80,350 |
| 2 | 70,535 | 0.77 | critic 8.93: +9,021 newly aware (buzz) | $141,070 | $78,999 | $62,071 |
| 3 | 43,589 | 0.62 | critic 8.93: +10,582 newly aware (buzz) | $87,178 | $48,820 | $38,358 |
| 4 | 54,700 | 1.25 | audience 9.58: +79,855 newly aware (word of mouth) | $109,400 | $61,264 | $48,136 |
| 5 | 47,426 | 0.87 | audience 9.58: +46,210 newly aware (word of mouth) | $94,852 | $53,117 | $41,735 |
| 6 | 30,491 | 0.64 | audience 9.58: +11,239 newly aware (word of mouth) | $60,982 | $34,150 | $26,832 |
| 7 | 20,532 | 0.67 | audience 9.58: +9,744 newly aware (word of mouth) | $41,064 | $22,996 | $18,068 |
| 8 | 13,716 | 0.67 | audience 9.58: +6,265 newly aware (word of mouth) | $27,432 | $15,362 | $12,070 |
| 9 | 9,175 | 0.67 | audience 9.58: +4,219 newly aware (word of mouth) | $18,350 | $10,276 | $8,074 |
| 10 | 6,137 | 0.67 | audience 9.58: +2,818 newly aware (word of mouth) | $12,274 | $6,873 | $5,401 |
| 11 | 4,104 | 0.67 | audience 9.58: +1,885 newly aware (word of mouth) | $8,208 | $4,596 | $3,612 |
| 12 | 2,745 | 0.67 | audience 9.58: +1,261 newly aware (word of mouth) | $5,490 | $3,074 | $2,416 |
| 13 | 1,836 | 0.67 | audience 9.58: +843 newly aware (word of mouth) | $3,672 | $2,056 | $1,616 |
| 14 | 1,228 | 0.67 | audience 9.58: +564 newly aware (word of mouth) | $2,456 | $1,375 | $1,081 |
| 15 | 0 | 0 | audience 9.58: +377 newly aware (word of mouth) | $0 | $0 | $0 |

**Progression trace**

- Prestige awards: Prestige +50: meters_all_70 (Broken Frequency).; Prestige +75: audience_7_5 (Broken Frequency).; Prestige +85: critic_8_5 (Broken Frequency).; Prestige +200: hall_of_fame (Broken Frequency).
- IP fans: {"before":0,"after":27031,"delta":27031}
- Star career: {"fameDelta":15.43,"relDelta":0.75,"grow":0,"level":6,"reasons":"worked together (+); project boosted their career (+)"}
- Distributor trust: Meridian Global earned 248% of its advance back on Broken Frequency with strong reviews (step 0.75)
- Rule labels: LOCKED = causal chain, accounting, fallback/no-campaign, thresholds 4.0/9.0, IP fan inheritance. WORKING ASSUMPTION = all formulas' shapes and numbers.

### Dead Run 10 — Comedy + Spies (sequel)

Released week 464 (year 8.9) · Distributor: Meridian Global · Star: Rae Hart (L6, Fame 79) · IP: Dead Run

**Financial waterfall** [LOCKED rules; amounts provisional]

| Item | Amount |
|---|---:|
| Advance received (project reserve, not revenue) | $159,000 |
| Base cost (unavoidable) | −$60,000 |
| Star fee | −$44,080 |
| Marketing campaign | −$20,000 |
| Paid from studio cash (overrun) | $0 |
| **Unused advance kept at completion** | $34,920 |
| Gross from sales (15 weeks) | $791,474 |
| Distributor royalty (43% of weekly gross) | −$340,334 |
| **Studio take** | $451,140 |
| Net for this title (surplus + take − cash overrun; wages are studio-wide, excluded) | $486,060 |

**Quality trace** [scores are computed, never rolled]

Meters (0–100): Plot 92.58 · Writing 93.18 · Filming 91.36 · Editing 88.61
Inputs: staff points {"plot":703.94,"writing":770.97,"filming":638.05,"editing":422.24}, Star filming points 73.92 (Star family fit 100), studio Comedy level 4 (+12%), era bar x1.36
Base scores: Audience 9.09 / Critic 9.2 · no weak meter
Combo grades: Audience C (x1) / Critic B (x1.06) · repetition fatigue x0.78 · critic saturation x1
Before expectations (after combo, weakness, fatigue, saturation; pre-clamp): Audience 7.09 / Critic 7.61 · critic generation 1 (−8.0%, undefined) · audience era 0 (−0.0%) · then clamp 0–10 (generation/era 0 = the ones active at game start)
**Final: Audience 7.09 / Critic 7 → avg 7.05**

**Opening & viewership trace** [marketing/Fame/reach affect viewers only]

Awareness inputs: base 0.35, marketing 0.55, studioBuzz 0, starFame 0.35, trend 0.4, ipFans 0.66 → awareness 0.9. Reach cap 400,000 → pool 360,395 → opening 108,119.

| Wk | Viewers | Retention | Driver | Gross | Studio | Distributor |
|---:|---:|---:|---|---:|---:|---:|
| 1 | 108,119 | 1 | opening (aware people watching) | $216,238 | $123,256 | $92,982 |
| 2 | 73,888 | 0.68 | critic 7: +1,901 newly aware (buzz) | $147,776 | $84,232 | $63,544 |
| 3 | 44,641 | 0.6 | critic 7: +3,263 newly aware (buzz) | $89,282 | $50,891 | $38,391 |
| 4 | 38,794 | 0.87 | audience 7.09: +37,320 newly aware (word of mouth) | $77,588 | $44,225 | $33,363 |
| 5 | 33,573 | 0.87 | audience 7.09: +32,432 newly aware (word of mouth) | $67,146 | $38,273 | $28,873 |
| 6 | 29,055 | 0.87 | audience 7.09: +28,067 newly aware (word of mouth) | $58,110 | $33,123 | $24,987 |
| 7 | 21,503 | 0.74 | audience 7.09: +13,298 newly aware (word of mouth) | $43,006 | $24,513 | $18,493 |
| 8 | 14,984 | 0.7 | audience 7.09: +7,036 newly aware (word of mouth) | $29,968 | $17,082 | $12,886 |
| 9 | 10,542 | 0.7 | audience 7.09: +5,207 newly aware (word of mouth) | $21,084 | $12,018 | $9,066 |
| 10 | 7,405 | 0.7 | audience 7.09: +3,628 newly aware (word of mouth) | $14,810 | $8,442 | $6,368 |
| 11 | 5,203 | 0.7 | audience 7.09: +2,553 newly aware (word of mouth) | $10,406 | $5,931 | $4,475 |
| 12 | 3,656 | 0.7 | audience 7.09: +1,793 newly aware (word of mouth) | $7,312 | $4,168 | $3,144 |
| 13 | 2,569 | 0.7 | audience 7.09: +1,260 newly aware (word of mouth) | $5,138 | $2,929 | $2,209 |
| 14 | 1,805 | 0.7 | audience 7.09: +885 newly aware (word of mouth) | $3,610 | $2,058 | $1,552 |
| 15 | 0 | 0 | audience 7.09: +622 newly aware (word of mouth) | $0 | $0 | $0 |

**Progression trace**

- Prestige awards: Prestige +50: meters_all_70 (Dead Run 10).
- IP fans: {"before":102262,"after":115242,"delta":12980}
- Star career: {"fameDelta":7.43,"relDelta":0.75,"grow":0,"level":6,"reasons":"worked together (+); project boosted their career (+)"}
- Distributor trust: Meridian Global earned 214% of its advance back on Dead Run 10 with strong reviews (step 0.75)
- Rule labels: LOCKED = causal chain, accounting, fallback/no-campaign, thresholds 4.0/9.0, IP fan inheritance. WORKING ASSUMPTION = all formulas' shapes and numbers.

### Silver Horizon 3 — Comedy + Dinosaurs (sequel)

Released week 480 (year 9.2) · Distributor: XYZ Network · Star: Rae Hart (L6, Fame 79) · IP: Silver Horizon

**Financial waterfall** [LOCKED rules; amounts provisional]

| Item | Amount |
|---|---:|
| Advance received (project reserve, not revenue) | $139,000 |
| Base cost (unavoidable) | −$60,000 |
| Star fee | −$44,070 |
| Marketing campaign | −$20,000 |
| Paid from studio cash (overrun) | $0 |
| **Unused advance kept at completion** | $14,930 |
| Gross from sales (15 weeks) | $747,110 |
| Distributor royalty (40% of weekly gross) | −$298,844 |
| **Studio take** | $448,266 |
| Net for this title (surplus + take − cash overrun; wages are studio-wide, excluded) | $463,196 |

**Quality trace** [scores are computed, never rolled]

Meters (0–100): Plot 92.83 · Writing 93.43 · Filming 91.77 · Editing 89.27
Inputs: staff points {"plot":737.77,"writing":809.58,"filming":681.01,"editing":455.48}, Star filming points 75.9 (Star family fit 100), studio Comedy level 5 (+15%), era bar x1.37
Base scores: Audience 9.13 / Critic 9.23 · no weak meter
Combo grades: Audience B (x1.06) / Critic C (x1) · repetition fatigue x0.95 · critic saturation x1
Before expectations (after combo, weakness, fatigue, saturation; pre-clamp): Audience 9.19 / Critic 8.77 · critic generation 1 (−8.0%, undefined) · audience era 0 (−0.0%) · then clamp 0–10 (generation/era 0 = the ones active at game start)
**Final: Audience 9.19 / Critic 8.07 → avg 8.63**

**Opening & viewership trace** [marketing/Fame/reach affect viewers only]

Awareness inputs: base 0.35, marketing 0.55, studioBuzz 0, starFame 0.4, trend 0.15, ipFans 0.22 → awareness 0.81. Reach cap 376,000 → pool 305,179 → opening 91,554.

| Wk | Viewers | Retention | Driver | Gross | Studio | Distributor |
|---:|---:|---:|---|---:|---:|---:|
| 1 | 91,554 | 1 | opening (aware people watching) | $183,108 | $109,865 | $73,243 |
| 2 | 66,860 | 0.73 | critic 8.07: +5,218 newly aware (buzz) | $133,720 | $80,232 | $53,488 |
| 3 | 40,802 | 0.61 | critic 8.07: +6,722 newly aware (buzz) | $81,604 | $48,962 | $32,642 |
| 4 | 49,434 | 1.21 | audience 9.19: +68,384 newly aware (word of mouth) | $98,868 | $59,321 | $39,547 |
| 5 | 42,429 | 0.86 | audience 9.19: +40,546 newly aware (word of mouth) | $84,858 | $50,915 | $33,943 |
| 6 | 27,570 | 0.65 | audience 9.19: +10,416 newly aware (word of mouth) | $55,140 | $33,084 | $22,056 |
| 7 | 18,702 | 0.68 | audience 9.19: +8,941 newly aware (word of mouth) | $37,404 | $22,442 | $14,962 |
| 8 | 12,594 | 0.67 | audience 9.19: +5,809 newly aware (word of mouth) | $25,188 | $15,113 | $10,075 |
| 9 | 8,491 | 0.67 | audience 9.19: +3,941 newly aware (word of mouth) | $16,982 | $10,189 | $6,793 |
| 10 | 5,724 | 0.67 | audience 9.19: +2,654 newly aware (word of mouth) | $11,448 | $6,869 | $4,579 |
| 11 | 3,859 | 0.67 | audience 9.19: +1,789 newly aware (word of mouth) | $7,718 | $4,631 | $3,087 |
| 12 | 2,601 | 0.67 | audience 9.19: +1,206 newly aware (word of mouth) | $5,202 | $3,121 | $2,081 |
| 13 | 1,753 | 0.67 | audience 9.19: +813 newly aware (word of mouth) | $3,506 | $2,104 | $1,402 |
| 14 | 1,182 | 0.67 | audience 9.19: +548 newly aware (word of mouth) | $2,364 | $1,418 | $946 |
| 15 | 0 | 0 | audience 9.19: +369 newly aware (word of mouth) | $0 | $0 | $0 |

**Progression trace**

- Prestige awards: Prestige +50: meters_all_70 (Silver Horizon 3).; Prestige +75: audience_7_5 (Silver Horizon 3).
- IP fans: {"before":34229,"after":55925,"delta":21696}
- Star career: {"fameDelta":12.95,"relDelta":0.75,"grow":0,"level":6,"reasons":"worked together (+); project boosted their career (+)"}
- Distributor trust: XYZ Network earned 215% of its advance back on Silver Horizon 3 with strong reviews (step 0.75)
- Rule labels: LOCKED = causal chain, accounting, fallback/no-campaign, thresholds 4.0/9.0, IP fan inheritance. WORKING ASSUMPTION = all formulas' shapes and numbers.

### Iron Frequency — Horror + Vampires (new)

Released week 496 (year 9.5) · Distributor: Meridian Global · Star: Gus Quinn (L8, Fame 100) · IP: Iron Frequency

**Financial waterfall** [LOCKED rules; amounts provisional]

| Item | Amount |
|---|---:|
| Advance received (project reserve, not revenue) | $150,000 |
| Base cost (unavoidable) | −$60,000 |
| Star fee | −$69,886 |
| Marketing campaign | −$20,000 |
| Paid from studio cash (overrun) | $0 |
| **Unused advance kept at completion** | $114 |
| Gross from sales (15 weeks) | $796,036 |
| Distributor royalty (43% of weekly gross) | −$342,295 |
| **Studio take** | $453,741 |
| Net for this title (surplus + take − cash overrun; wages are studio-wide, excluded) | $453,855 |

**Quality trace** [scores are computed, never rolled]

Meters (0–100): Plot 92.33 · Writing 92.96 · Filming 91.15 · Editing 88.54
Inputs: staff points {"plot":691.96,"writing":758.71,"filming":635.4,"editing":427.16}, Star filming points 69.96 (Star family fit 100), studio Horror level 2 (+6%), era bar x1.38
Base scores: Audience 9.07 / Critic 9.18 · no weak meter
Combo grades: Audience B (x1.06) / Critic A (x1.15) · repetition fatigue x1 · critic saturation x1
Before expectations (after combo, weakness, fatigue, saturation; pre-clamp): Audience 9.61 / Critic 10.56 · critic generation 1 (−8.0%, undefined) · audience era 0 (−0.0%) · then clamp 0–10 (generation/era 0 = the ones active at game start)
**Final: Audience 9.61 / Critic 9.71 → avg 9.66 (HALL OF FAME)**

**Opening & viewership trace** [marketing/Fame/reach affect viewers only]

Awareness inputs: base 0.35, marketing 0.55, studioBuzz 0, starFame 0.6, trend 0.4, ipFans 0 → awareness 0.85. Reach cap 400,000 → pool 340,173 → opening 102,052.

| Wk | Viewers | Retention | Driver | Gross | Studio | Distributor |
|---:|---:|---:|---|---:|---:|---:|
| 1 | 102,052 | 1 | opening (aware people watching) | $204,104 | $116,339 | $87,765 |
| 2 | 80,175 | 0.79 | critic 9.71: +6,763 newly aware (buzz) | $160,350 | $91,400 | $68,951 |
| 3 | 47,824 | 0.6 | critic 9.71: +9,228 newly aware (buzz) | $95,648 | $54,519 | $41,129 |
| 4 | 58,933 | 1.23 | audience 9.61: +88,187 newly aware (word of mouth) | $117,866 | $67,184 | $50,682 |
| 5 | 36,520 | 0.62 | audience 9.61: +10,303 newly aware (word of mouth) | $73,040 | $41,633 | $31,407 |
| 6 | 24,736 | 0.68 | audience 9.61: +12,086 newly aware (word of mouth) | $49,472 | $28,199 | $21,273 |
| 7 | 16,496 | 0.67 | audience 9.61: +7,489 newly aware (word of mouth) | $32,992 | $18,805 | $14,187 |
| 8 | 11,031 | 0.67 | audience 9.61: +5,072 newly aware (word of mouth) | $22,062 | $12,575 | $9,487 |
| 9 | 7,372 | 0.67 | audience 9.61: +3,383 newly aware (word of mouth) | $14,744 | $8,404 | $6,340 |
| 10 | 4,928 | 0.67 | audience 9.61: +2,262 newly aware (word of mouth) | $9,856 | $5,618 | $4,238 |
| 11 | 3,294 | 0.67 | audience 9.61: +1,512 newly aware (word of mouth) | $6,588 | $3,755 | $2,833 |
| 12 | 2,201 | 0.67 | audience 9.61: +1,011 newly aware (word of mouth) | $4,402 | $2,509 | $1,893 |
| 13 | 1,472 | 0.67 | audience 9.61: +675 newly aware (word of mouth) | $2,944 | $1,678 | $1,266 |
| 14 | 984 | 0.67 | audience 9.61: +452 newly aware (word of mouth) | $1,968 | $1,122 | $846 |
| 15 | 0 | 0 | audience 9.61: +302 newly aware (word of mouth) | $0 | $0 | $0 |

**Progression trace**

- Prestige awards: Prestige +50: meters_all_70 (Iron Frequency).; Prestige +75: audience_7_5 (Iron Frequency).; Prestige +85: critic_8_5 (Iron Frequency).; Prestige +200: hall_of_fame (Iron Frequency).
- IP fans: {"before":0,"after":29676,"delta":29676}
- Star career: {"fameDelta":16.92,"relDelta":0.25,"grow":0,"level":6,"reasons":"worked together (+)"}
- Distributor trust: Meridian Global earned 228% of its advance back on Iron Frequency with strong reviews (step 0.75)
- Rule labels: LOCKED = causal chain, accounting, fallback/no-campaign, thresholds 4.0/9.0, IP fan inheritance. WORKING ASSUMPTION = all formulas' shapes and numbers.

### Dead Protocol — Action + Vampires (new)

Released week 512 (year 9.8) · Distributor: Meridian Global · Star: Max Okafor (L6, Fame 85) · IP: Dead Protocol

**Financial waterfall** [LOCKED rules; amounts provisional]

| Item | Amount |
|---|---:|
| Advance received (project reserve, not revenue) | $180,000 |
| Base cost (unavoidable) | −$60,000 |
| Star fee | −$33,427 |
| Marketing campaign | −$20,000 |
| Paid from studio cash (overrun) | $0 |
| **Unused advance kept at completion** | $66,573 |
| Gross from sales (15 weeks) | $875,632 |
| Distributor royalty (42% of weekly gross) | −$367,765 |
| **Studio take** | $507,867 |
| Net for this title (surplus + take − cash overrun; wages are studio-wide, excluded) | $574,439 |

**Quality trace** [scores are computed, never rolled]

Meters (0–100): Plot 92.76 · Writing 93.36 · Filming 91.6 · Editing 89.2
Inputs: staff points {"plot":743.17,"writing":815.53,"filming":680.07,"editing":460.27}, Star filming points 73.92 (Star family fit 100), studio Action level 4 (+12%), era bar x1.39
Base scores: Audience 9.12 / Critic 9.23 · no weak meter
Combo grades: Audience A (x1.15) / Critic A (x1.15) · repetition fatigue x1 · critic saturation x1
Before expectations (after combo, weakness, fatigue, saturation; pre-clamp): Audience 10.49 / Critic 10.61 · critic generation 1 (−8.0%, undefined) · audience era 0 (−0.0%) · then clamp 0–10 (generation/era 0 = the ones active at game start)
**Final: Audience 10 / Critic 9.76 → avg 9.88 (HALL OF FAME)**

**Opening & viewership trace** [marketing/Fame/reach affect viewers only]

Awareness inputs: base 0.35, marketing 0.55, studioBuzz 0, starFame 0.29, trend 0.4, ipFans 0 → awareness 0.8. Reach cap 440,000 → pool 350,567 → opening 105,170.

| Wk | Viewers | Retention | Driver | Gross | Studio | Distributor |
|---:|---:|---:|---|---:|---:|---:|
| 1 | 105,170 | 1 | opening (aware people watching) | $210,340 | $121,997 | $88,343 |
| 2 | 83,998 | 0.8 | critic 9.76: +10,217 newly aware (buzz) | $167,996 | $97,438 | $70,558 |
| 3 | 51,076 | 0.61 | critic 9.76: +12,414 newly aware (buzz) | $102,152 | $59,248 | $42,904 |
| 4 | 66,834 | 1.31 | audience 10: +102,152 newly aware (word of mouth) | $133,668 | $77,527 | $56,141 |
| 5 | 44,833 | 0.67 | audience 10: +21,532 newly aware (word of mouth) | $89,666 | $52,006 | $37,660 |
| 6 | 29,671 | 0.66 | audience 10: +13,367 newly aware (word of mouth) | $59,342 | $34,418 | $24,924 |
| 7 | 19,681 | 0.66 | audience 10: +8,967 newly aware (word of mouth) | $39,362 | $22,830 | $16,532 |
| 8 | 13,050 | 0.66 | audience 10: +5,934 newly aware (word of mouth) | $26,100 | $15,138 | $10,962 |
| 9 | 8,654 | 0.66 | audience 10: +3,936 newly aware (word of mouth) | $17,308 | $10,039 | $7,269 |
| 10 | 5,738 | 0.66 | audience 10: +2,610 newly aware (word of mouth) | $11,476 | $6,656 | $4,820 |
| 11 | 3,805 | 0.66 | audience 10: +1,731 newly aware (word of mouth) | $7,610 | $4,414 | $3,196 |
| 12 | 2,523 | 0.66 | audience 10: +1,148 newly aware (word of mouth) | $5,046 | $2,927 | $2,119 |
| 13 | 1,673 | 0.66 | audience 10: +761 newly aware (word of mouth) | $3,346 | $1,941 | $1,405 |
| 14 | 1,110 | 0.66 | audience 10: +505 newly aware (word of mouth) | $2,220 | $1,288 | $932 |
| 15 | 0 | 0 | audience 10: +335 newly aware (word of mouth) | $0 | $0 | $0 |

**Progression trace**

- Prestige awards: Prestige +50: meters_all_70 (Dead Protocol).; Prestige +75: audience_7_5 (Dead Protocol).; Prestige +85: critic_8_5 (Dead Protocol).; Prestige +200: hall_of_fame (Dead Protocol).
- IP fans: {"before":0,"after":34185,"delta":34185}
- Star career: {"fameDelta":18.17,"relDelta":0.75,"grow":0,"level":6,"reasons":"worked together (+); project boosted their career (+)"}
- Distributor trust: Meridian Global earned 204% of its advance back on Dead Protocol with strong reviews (step 0.75)
- Rule labels: LOCKED = causal chain, accounting, fallback/no-campaign, thresholds 4.0/9.0, IP fan inheritance. WORKING ASSUMPTION = all formulas' shapes and numbers.

### Dead Code — Horror + Vampires (new)

Released week 528 (year 10.2) · Distributor: Meridian Global · Star: Gus Quinn (L8, Fame 100) · IP: Dead Code

**Financial waterfall** [LOCKED rules; amounts provisional]

| Item | Amount |
|---|---:|
| Advance received (project reserve, not revenue) | $156,000 |
| Base cost (unavoidable) | −$60,000 |
| Star fee | −$68,239 |
| Marketing campaign | −$20,000 |
| Paid from studio cash (overrun) | $0 |
| **Unused advance kept at completion** | $7,761 |
| Gross from sales (15 weeks) | $794,404 |
| Distributor royalty (43% of weekly gross) | −$341,594 |
| **Studio take** | $452,810 |
| Net for this title (surplus + take − cash overrun; wages are studio-wide, excluded) | $460,571 |

**Quality trace** [scores are computed, never rolled]

Meters (0–100): Plot 92.45 · Writing 93.07 · Filming 91.25 · Editing 88.71
Inputs: staff points {"plot":716.4,"writing":785.95,"filming":657.64,"editing":441.8}, Star filming points 69.96 (Star family fit 100), studio Horror level 2 (+6%), era bar x1.41
Base scores: Audience 9.08 / Critic 9.19 · no weak meter
Combo grades: Audience B (x1.06) / Critic A (x1.15) · repetition fatigue x0.95 · critic saturation x0.9
Before expectations (after combo, weakness, fatigue, saturation; pre-clamp): Audience 9.14 / Critic 9.04 · critic generation 1 (−8.0%, undefined) · audience era 1 (−2.0%) · then clamp 0–10 (generation/era 0 = the ones active at game start)
**Final: Audience 8.96 / Critic 8.32 → avg 8.64**

**Opening & viewership trace** [marketing/Fame/reach affect viewers only]

Awareness inputs: base 0.35, marketing 0.55, studioBuzz 0, starFame 0.6, trend 0.1, ipFans 0 → awareness 0.8. Reach cap 400,000 → pool 319,241 → opening 95,772.

| Wk | Viewers | Retention | Driver | Gross | Studio | Distributor |
|---:|---:|---:|---|---:|---:|---:|
| 1 | 95,772 | 1 | opening (aware people watching) | $191,544 | $109,180 | $82,364 |
| 2 | 71,040 | 0.74 | critic 8.32: +6,435 newly aware (buzz) | $142,080 | $80,986 | $61,094 |
| 3 | 43,466 | 0.61 | critic 8.32: +8,059 newly aware (buzz) | $86,932 | $49,551 | $37,381 |
| 4 | 50,298 | 1.16 | audience 8.96: +68,850 newly aware (word of mouth) | $100,596 | $57,340 | $43,256 |
| 5 | 46,242 | 0.92 | audience 8.96: +49,772 newly aware (word of mouth) | $92,484 | $52,716 | $39,768 |
| 6 | 29,935 | 0.65 | audience 8.96: +10,758 newly aware (word of mouth) | $59,870 | $34,126 | $25,744 |
| 7 | 20,430 | 0.68 | audience 8.96: +9,891 newly aware (word of mouth) | $40,860 | $23,290 | $17,570 |
| 8 | 13,818 | 0.68 | audience 8.96: +6,403 newly aware (word of mouth) | $27,636 | $15,753 | $11,883 |
| 9 | 9,360 | 0.68 | audience 8.96: +4,370 newly aware (word of mouth) | $18,720 | $10,670 | $8,050 |
| 10 | 6,339 | 0.68 | audience 8.96: +2,956 newly aware (word of mouth) | $12,678 | $7,226 | $5,452 |
| 11 | 4,293 | 0.68 | audience 8.96: +2,002 newly aware (word of mouth) | $8,586 | $4,894 | $3,692 |
| 12 | 2,907 | 0.68 | audience 8.96: +1,356 newly aware (word of mouth) | $5,814 | $3,314 | $2,500 |
| 13 | 1,969 | 0.68 | audience 8.96: +918 newly aware (word of mouth) | $3,938 | $2,245 | $1,693 |
| 14 | 1,333 | 0.68 | audience 8.96: +622 newly aware (word of mouth) | $2,666 | $1,520 | $1,146 |
| 15 | 0 | 0 | audience 8.96: +421 newly aware (word of mouth) | $0 | $0 | $0 |

**Progression trace**

- Prestige awards: Prestige +50: meters_all_70 (Dead Code).; Prestige +75: audience_7_5 (Dead Code).
- IP fans: {"before":0,"after":23133,"delta":23133}
- Star career: {"fameDelta":13.21,"relDelta":0.25,"grow":0,"level":7,"reasons":"worked together (+)"}
- Distributor trust: Meridian Global earned 219% of its advance back on Dead Code with strong reviews (step 0.75)
- Rule labels: LOCKED = causal chain, accounting, fallback/no-campaign, thresholds 4.0/9.0, IP fan inheritance. WORKING ASSUMPTION = all formulas' shapes and numbers.

### Dead Run 11 — Comedy + Spies (sequel)

Released week 544 (year 10.5) · Distributor: Meridian Global · Star: Sam Lind (L7, Fame 98) · IP: Dead Run

**Financial waterfall** [LOCKED rules; amounts provisional]

| Item | Amount |
|---|---:|
| Advance received (project reserve, not revenue) | $146,000 |
| Base cost (unavoidable) | −$60,000 |
| Star fee | −$49,300 |
| Marketing campaign | −$20,000 |
| Paid from studio cash (overrun) | $0 |
| **Unused advance kept at completion** | $16,700 |
| Gross from sales (15 weeks) | $768,644 |
| Distributor royalty (44% of weekly gross) | −$338,203 |
| **Studio take** | $430,441 |
| Net for this title (surplus + take − cash overrun; wages are studio-wide, excluded) | $447,141 |

**Quality trace** [scores are computed, never rolled]

Meters (0–100): Plot 93 · Writing 93.58 · Filming 91.93 · Editing 89.54
Inputs: staff points {"plot":783.53,"writing":860.76,"filming":725.3,"editing":485.44}, Star filming points 75.9 (Star family fit 100), studio Comedy level 5 (+15%), era bar x1.42
Base scores: Audience 9.15 / Critic 9.25 · no weak meter
Combo grades: Audience C (x1) / Critic B (x1.06) · repetition fatigue x0.75 · critic saturation x1
Before expectations (after combo, weakness, fatigue, saturation; pre-clamp): Audience 6.86 / Critic 7.36 · critic generation 1 (−8.0%, undefined) · audience era 1 (−2.0%) · then clamp 0–10 (generation/era 0 = the ones active at game start)
**Final: Audience 6.73 / Critic 6.77 → avg 6.75**

**Opening & viewership trace** [marketing/Fame/reach affect viewers only]

Awareness inputs: base 0.35, marketing 0.55, studioBuzz 0, starFame 0.39, trend 0, ipFans 0.64 → awareness 0.85. Reach cap 400,000 → pool 341,693 → opening 102,508.

| Wk | Viewers | Retention | Driver | Gross | Studio | Distributor |
|---:|---:|---:|---|---:|---:|---:|
| 1 | 102,508 | 1 | opening (aware people watching) | $205,016 | $114,809 | $90,207 |
| 2 | 69,542 | 0.68 | critic 6.77: +2,477 newly aware (buzz) | $139,084 | $77,887 | $61,197 |
| 3 | 42,386 | 0.61 | critic 6.77: +3,591 newly aware (buzz) | $84,772 | $47,472 | $37,300 |
| 4 | 34,634 | 0.82 | audience 6.73: +29,331 newly aware (word of mouth) | $69,268 | $38,790 | $30,478 |
| 5 | 28,355 | 0.82 | audience 6.73: +23,967 newly aware (word of mouth) | $56,710 | $31,758 | $24,952 |
| 6 | 23,215 | 0.82 | audience 6.73: +19,622 newly aware (word of mouth) | $46,430 | $26,001 | $20,429 |
| 7 | 19,007 | 0.82 | audience 6.73: +16,065 newly aware (word of mouth) | $38,014 | $21,288 | $16,726 |
| 8 | 15,561 | 0.82 | audience 6.73: +13,153 newly aware (word of mouth) | $31,122 | $17,428 | $13,694 |
| 9 | 12,740 | 0.82 | audience 6.73: +10,768 newly aware (word of mouth) | $25,480 | $14,269 | $11,211 |
| 10 | 10,431 | 0.82 | audience 6.73: +8,816 newly aware (word of mouth) | $20,862 | $11,683 | $9,179 |
| 11 | 8,540 | 0.82 | audience 6.73: +7,218 newly aware (word of mouth) | $17,080 | $9,565 | $7,515 |
| 12 | 6,992 | 0.82 | audience 6.73: +5,910 newly aware (word of mouth) | $13,984 | $7,831 | $6,153 |
| 13 | 5,724 | 0.82 | audience 6.73: +4,838 newly aware (word of mouth) | $11,448 | $6,411 | $5,037 |
| 14 | 4,687 | 0.82 | audience 6.73: +3,961 newly aware (word of mouth) | $9,374 | $5,249 | $4,125 |
| 15 | 0 | 0 | audience 6.73: +3,243 newly aware (word of mouth) | $0 | $0 | $0 |

**Progression trace**

- Prestige awards: Prestige +50: meters_all_70 (Dead Run 11).
- IP fans: {"before":98795,"after":109556,"delta":10761}
- Star career: {"fameDelta":6.29,"relDelta":0.75,"grow":0,"level":6,"reasons":"worked together (+); project boosted their career (+)"}
- Distributor trust: Meridian Global earned 232% of its advance back on Dead Run 11 (step 0.75)
- Rule labels: LOCKED = causal chain, accounting, fallback/no-campaign, thresholds 4.0/9.0, IP fan inheritance. WORKING ASSUMPTION = all formulas' shapes and numbers.

### Broken Edge — Comedy + Superheroes (new)

Released week 560 (year 10.8) · Distributor: XYZ Network · Star: Sam Lind (L7, Fame 98) · IP: Broken Edge

**Financial waterfall** [LOCKED rules; amounts provisional]

| Item | Amount |
|---|---:|
| Advance received (project reserve, not revenue) | $160,000 |
| Base cost (unavoidable) | −$60,000 |
| Star fee | −$49,292 |
| Marketing campaign | −$20,000 |
| Paid from studio cash (overrun) | $0 |
| **Unused advance kept at completion** | $30,708 |
| Gross from sales (15 weeks) | $747,160 |
| Distributor royalty (39% of weekly gross) | −$291,392 |
| **Studio take** | $455,768 |
| Net for this title (surplus + take − cash overrun; wages are studio-wide, excluded) | $486,476 |

**Quality trace** [scores are computed, never rolled]

Meters (0–100): Plot 93.08 · Writing 93.66 · Filming 91.99 · Editing 89.73
Inputs: staff points {"plot":800.2,"writing":879.1,"filming":739.5,"editing":499.77}, Star filming points 75.9 (Star family fit 100), studio Comedy level 5 (+15%), era bar x1.43
Base scores: Audience 9.16 / Critic 9.26 · no weak meter
Combo grades: Audience C (x1) / Critic B (x1.06) · repetition fatigue x1 · critic saturation x1
Before expectations (after combo, weakness, fatigue, saturation; pre-clamp): Audience 9.16 / Critic 9.82 · critic generation 1 (−8.0%, undefined) · audience era 1 (−2.0%) · then clamp 0–10 (generation/era 0 = the ones active at game start)
**Final: Audience 8.98 / Critic 9.03 → avg 9 (HALL OF FAME)**

**Opening & viewership trace** [marketing/Fame/reach affect viewers only]

Awareness inputs: base 0.35, marketing 0.55, studioBuzz 0, starFame 0.43, trend 0.4, ipFans 0 → awareness 0.82. Reach cap 376,000 → pool 309,202 → opening 92,761.

| Wk | Viewers | Retention | Driver | Gross | Studio | Distributor |
|---:|---:|---:|---|---:|---:|---:|
| 1 | 92,761 | 1 | opening (aware people watching) | $185,522 | $113,168 | $72,354 |
| 2 | 70,983 | 0.77 | critic 9.03: +6,461 newly aware (buzz) | $141,966 | $86,599 | $55,367 |
| 3 | 42,959 | 0.61 | critic 9.03: +8,348 newly aware (buzz) | $85,918 | $52,410 | $33,508 |
| 4 | 48,727 | 1.13 | audience 8.98: +68,391 newly aware (word of mouth) | $97,454 | $59,447 | $38,007 |
| 5 | 39,625 | 0.81 | audience 8.98: +33,832 newly aware (word of mouth) | $79,250 | $48,343 | $30,908 |
| 6 | 26,071 | 0.66 | audience 8.98: +10,409 newly aware (word of mouth) | $52,142 | $31,807 | $20,335 |
| 7 | 17,735 | 0.68 | audience 8.98: +8,464 newly aware (word of mouth) | $35,470 | $21,637 | $13,833 |
| 8 | 11,996 | 0.68 | audience 8.98: +5,569 newly aware (word of mouth) | $23,992 | $14,635 | $9,357 |
| 9 | 8,122 | 0.68 | audience 8.98: +3,788 newly aware (word of mouth) | $16,244 | $9,909 | $6,335 |
| 10 | 5,498 | 0.68 | audience 8.98: +2,563 newly aware (word of mouth) | $10,996 | $6,708 | $4,288 |
| 11 | 3,722 | 0.68 | audience 8.98: +1,735 newly aware (word of mouth) | $7,444 | $4,541 | $2,903 |
| 12 | 2,520 | 0.68 | audience 8.98: +1,175 newly aware (word of mouth) | $5,040 | $3,074 | $1,966 |
| 13 | 1,706 | 0.68 | audience 8.98: +795 newly aware (word of mouth) | $3,412 | $2,081 | $1,331 |
| 14 | 1,155 | 0.68 | audience 8.98: +538 newly aware (word of mouth) | $2,310 | $1,409 | $901 |
| 15 | 0 | 0 | audience 8.98: +364 newly aware (word of mouth) | $0 | $0 | $0 |

**Progression trace**

- Prestige awards: Prestige +50: meters_all_70 (Broken Edge).; Prestige +75: audience_7_5 (Broken Edge).; Prestige +85: critic_8_5 (Broken Edge).; Prestige +200: hall_of_fame (Broken Edge).
- IP fans: {"before":0,"after":23909,"delta":23909}
- Star career: {"fameDelta":14.27,"relDelta":0.75,"grow":0,"level":7,"reasons":"worked together (+); project boosted their career (+)"}
- Distributor trust: XYZ Network earned 182% of its advance back on Broken Edge with strong reviews (step 0.75)
- Rule labels: LOCKED = causal chain, accounting, fallback/no-campaign, thresholds 4.0/9.0, IP fan inheritance. WORKING ASSUMPTION = all formulas' shapes and numbers.

### Silver Horizon 4 — Comedy + Dinosaurs (sequel)

Released week 576 (year 11.1) · Distributor: XYZ Network · Star: Sam Lind (L7, Fame 98) · IP: Silver Horizon

**Financial waterfall** [LOCKED rules; amounts provisional]

| Item | Amount |
|---|---:|
| Advance received (project reserve, not revenue) | $131,000 |
| Base cost (unavoidable) | −$60,000 |
| Star fee | −$55,113 |
| Marketing campaign | −$20,000 |
| Paid from studio cash (overrun) | $4,113 |
| **Unused advance kept at completion** | $0 |
| Gross from sales (15 weeks) | $746,694 |
| Distributor royalty (40% of weekly gross) | −$298,678 |
| **Studio take** | $448,016 |
| Net for this title (surplus + take − cash overrun; wages are studio-wide, excluded) | $443,903 |

**Quality trace** [scores are computed, never rolled]

Meters (0–100): Plot 93.01 · Writing 93.59 · Filming 91.97 · Editing 89.61
Inputs: staff points {"plot":798.43,"writing":877.16,"filming":744.33,"editing":497.62}, Star filming points 75.9 (Star family fit 100), studio Comedy level 5 (+15%), era bar x1.44
Base scores: Audience 9.15 / Critic 9.25 · no weak meter
Combo grades: Audience B (x1.06) / Critic C (x1) · repetition fatigue x0.93 · critic saturation x1
Before expectations (after combo, weakness, fatigue, saturation; pre-clamp): Audience 9.02 / Critic 8.61 · critic generation 1 (−8.0%, undefined) · audience era 1 (−2.0%) · then clamp 0–10 (generation/era 0 = the ones active at game start)
**Final: Audience 8.84 / Critic 7.92 → avg 8.38**

**Opening & viewership trace** [marketing/Fame/reach affect viewers only]

Awareness inputs: base 0.35, marketing 0.55, studioBuzz 0, starFame 0.51, trend 0, ipFans 0.3 → awareness 0.82. Reach cap 376,000 → pool 308,172 → opening 92,452.

| Wk | Viewers | Retention | Driver | Gross | Studio | Distributor |
|---:|---:|---:|---|---:|---:|---:|
| 1 | 92,452 | 1 | opening (aware people watching) | $184,904 | $110,942 | $73,962 |
| 2 | 66,899 | 0.72 | critic 7.92: +4,753 newly aware (buzz) | $133,798 | $80,279 | $53,519 |
| 3 | 40,775 | 0.61 | critic 7.92: +6,234 newly aware (buzz) | $81,550 | $48,930 | $32,620 |
| 4 | 46,887 | 1.15 | audience 8.84: +62,630 newly aware (word of mouth) | $93,774 | $56,264 | $37,510 |
| 5 | 42,511 | 0.91 | audience 8.84: +44,758 newly aware (word of mouth) | $85,022 | $51,013 | $34,009 |
| 6 | 27,647 | 0.65 | audience 8.84: +10,108 newly aware (word of mouth) | $55,294 | $33,176 | $22,118 |
| 7 | 18,906 | 0.68 | audience 8.84: +9,164 newly aware (word of mouth) | $37,812 | $22,687 | $15,125 |
| 8 | 12,819 | 0.68 | audience 8.84: +5,960 newly aware (word of mouth) | $25,638 | $15,383 | $10,255 |
| 9 | 8,704 | 0.68 | audience 8.84: +4,076 newly aware (word of mouth) | $17,408 | $10,445 | $6,963 |
| 10 | 5,909 | 0.68 | audience 8.84: +2,763 newly aware (word of mouth) | $11,818 | $7,091 | $4,727 |
| 11 | 4,011 | 0.68 | audience 8.84: +1,876 newly aware (word of mouth) | $8,022 | $4,813 | $3,209 |
| 12 | 2,723 | 0.68 | audience 8.84: +1,274 newly aware (word of mouth) | $5,446 | $3,268 | $2,178 |
| 13 | 1,849 | 0.68 | audience 8.84: +865 newly aware (word of mouth) | $3,698 | $2,219 | $1,479 |
| 14 | 1,255 | 0.68 | audience 8.84: +587 newly aware (word of mouth) | $2,510 | $1,506 | $1,004 |
| 15 | 0 | 0 | audience 8.84: +399 newly aware (word of mouth) | $0 | $0 | $0 |

**Progression trace**

- Prestige awards: Prestige +50: meters_all_70 (Silver Horizon 4).; Prestige +75: audience_7_5 (Silver Horizon 4).
- IP fans: {"before":46490,"after":66681,"delta":20191}
- Star career: {"fameDelta":12.06,"relDelta":0.75,"grow":0,"level":7,"reasons":"worked together (+); project boosted their career (+)"}
- Distributor trust: XYZ Network earned 228% of its advance back on Silver Horizon 4 with strong reviews (step 0.75)
- Rule labels: LOCKED = causal chain, accounting, fallback/no-campaign, thresholds 4.0/9.0, IP fan inheritance. WORKING ASSUMPTION = all formulas' shapes and numbers.

### Dead Protocol 2 — Action + Vampires (sequel)

Released week 592 (year 11.4) · Distributor: Meridian Global · Star: Max Okafor (L6, Fame 85) · IP: Dead Protocol

**Financial waterfall** [LOCKED rules; amounts provisional]

| Item | Amount |
|---|---:|
| Advance received (project reserve, not revenue) | $179,000 |
| Base cost (unavoidable) | −$60,000 |
| Star fee | −$46,583 |
| Marketing campaign | −$20,000 |
| Paid from studio cash (overrun) | $0 |
| **Unused advance kept at completion** | $52,417 |
| Gross from sales (15 weeks) | $875,420 |
| Distributor royalty (43% of weekly gross) | −$376,431 |
| **Studio take** | $498,989 |
| Net for this title (surplus + take − cash overrun; wages are studio-wide, excluded) | $551,406 |

**Quality trace** [scores are computed, never rolled]

Meters (0–100): Plot 92.82 · Writing 93.43 · Filming 91.74 · Editing 89.49
Inputs: staff points {"plot":783.06,"writing":860.55,"filming":727.94,"editing":495.51}, Star filming points 73.92 (Star family fit 100), studio Action level 4 (+12%), era bar x1.46
Base scores: Audience 9.14 / Critic 9.24 · no weak meter
Combo grades: Audience A (x1.15) / Critic A (x1.15) · repetition fatigue x0.99 · critic saturation x1
Before expectations (after combo, weakness, fatigue, saturation; pre-clamp): Audience 10.4 / Critic 10.52 · critic generation 1 (−8.0%, undefined) · audience era 1 (−2.0%) · then clamp 0–10 (generation/era 0 = the ones active at game start)
**Final: Audience 10 / Critic 9.68 → avg 9.84 (HALL OF FAME)**

**Opening & viewership trace** [marketing/Fame/reach affect viewers only]

Awareness inputs: base 0.35, marketing 0.55, studioBuzz 0, starFame 0.4, trend 0, ipFans 0.19 → awareness 0.77. Reach cap 440,000 → pool 340,918 → opening 102,275.

| Wk | Viewers | Retention | Driver | Gross | Studio | Distributor |
|---:|---:|---:|---|---:|---:|---:|
| 1 | 102,275 | 1 | opening (aware people watching) | $204,550 | $116,594 | $87,957 |
| 2 | 81,864 | 0.8 | critic 9.68: +11,129 newly aware (buzz) | $163,728 | $93,325 | $70,403 |
| 3 | 50,219 | 0.61 | critic 9.68: +13,095 newly aware (buzz) | $100,438 | $57,250 | $43,188 |
| 4 | 65,858 | 1.31 | audience 10: +100,438 newly aware (word of mouth) | $131,716 | $75,078 | $56,638 |
| 5 | 47,480 | 0.72 | audience 10: +30,021 newly aware (word of mouth) | $94,960 | $54,127 | $40,833 |
| 6 | 31,053 | 0.65 | audience 10: +13,172 newly aware (word of mouth) | $62,106 | $35,400 | $26,706 |
| 7 | 20,640 | 0.66 | audience 10: +9,496 newly aware (word of mouth) | $41,280 | $23,530 | $17,750 |
| 8 | 13,681 | 0.66 | audience 10: +6,211 newly aware (word of mouth) | $27,362 | $15,596 | $11,766 |
| 9 | 9,073 | 0.66 | audience 10: +4,128 newly aware (word of mouth) | $18,146 | $10,343 | $7,803 |
| 10 | 6,016 | 0.66 | audience 10: +2,736 newly aware (word of mouth) | $12,032 | $6,858 | $5,174 |
| 11 | 3,989 | 0.66 | audience 10: +1,814 newly aware (word of mouth) | $7,978 | $4,547 | $3,431 |
| 12 | 2,645 | 0.66 | audience 10: +1,203 newly aware (word of mouth) | $5,290 | $3,015 | $2,275 |
| 13 | 1,754 | 0.66 | audience 10: +798 newly aware (word of mouth) | $3,508 | $2,000 | $1,508 |
| 14 | 1,163 | 0.66 | audience 10: +529 newly aware (word of mouth) | $2,326 | $1,326 | $1,000 |
| 15 | 0 | 0 | audience 10: +351 newly aware (word of mouth) | $0 | $0 | $0 |

**Progression trace**

- Prestige awards: Prestige +50: meters_all_70 (Dead Protocol 2).; Prestige +75: audience_7_5 (Dead Protocol 2).; Prestige +85: critic_8_5 (Dead Protocol 2).; Prestige +200: hall_of_fame (Dead Protocol 2).; Prestige +100: ip_gross_1m (Dead Protocol 2).; Prestige +150: ip_viewers_500k (Dead Protocol 2).
- IP fans: {"before":29306,"after":63202,"delta":33896}
- Star career: {"fameDelta":18.02,"relDelta":0.75,"grow":0,"level":6,"reasons":"worked together (+); project boosted their career (+)"}
- Distributor trust: Meridian Global earned 210% of its advance back on Dead Protocol 2 with strong reviews (step 0.75)
- Rule labels: LOCKED = causal chain, accounting, fallback/no-campaign, thresholds 4.0/9.0, IP fan inheritance. WORKING ASSUMPTION = all formulas' shapes and numbers.

### Midnight Shadow — Horror + Pirates (new)

Released week 608 (year 11.7) · Distributor: Orbit Releasing · Star: Gus Quinn (L8, Fame 100) · IP: Midnight Shadow

**Financial waterfall** [LOCKED rules; amounts provisional]

| Item | Amount |
|---|---:|
| Advance received (project reserve, not revenue) | $107,000 |
| Base cost (unavoidable) | −$60,000 |
| Star fee | −$66,504 |
| Marketing campaign | −$20,000 |
| Paid from studio cash (overrun) | $39,504 |
| **Unused advance kept at completion** | $0 |
| Gross from sales (15 weeks) | $659,272 |
| Distributor royalty (33% of weekly gross) | −$217,560 |
| **Studio take** | $441,712 |
| Net for this title (surplus + take − cash overrun; wages are studio-wide, excluded) | $402,209 |

**Quality trace** [scores are computed, never rolled]

Meters (0–100): Plot 92.79 · Writing 93.38 · Filming 91.56 · Editing 89.24
Inputs: staff points {"plot":785.86,"writing":861.9,"filming":718.29,"editing":486.76}, Star filming points 71.94 (Star family fit 100), studio Horror level 3 (+9%), era bar x1.47
Base scores: Audience 9.12 / Critic 9.23 · no weak meter
Combo grades: Audience B (x1.06) / Critic B (x1.06) · repetition fatigue x0.95 · critic saturation x0.9
Before expectations (after combo, weakness, fatigue, saturation; pre-clamp): Audience 9.18 / Critic 8.36 · critic generation 1 (−8.0%, undefined) · audience era 1 (−2.0%) · then clamp 0–10 (generation/era 0 = the ones active at game start)
**Final: Audience 9 / Critic 7.69 → avg 8.35**

**Opening & viewership trace** [marketing/Fame/reach affect viewers only]

Awareness inputs: base 0.35, marketing 0.55, studioBuzz 0, starFame 0.6, trend 0.1, ipFans 0 → awareness 0.8. Reach cap 332,000 → pool 264,970 → opening 79,491.

| Wk | Viewers | Retention | Driver | Gross | Studio | Distributor |
|---:|---:|---:|---|---:|---:|---:|
| 1 | 79,491 | 1 | opening (aware people watching) | $158,982 | $106,518 | $52,464 |
| 2 | 57,025 | 0.72 | critic 7.69: +4,327 newly aware (buzz) | $114,050 | $76,414 | $37,637 |
| 3 | 34,970 | 0.61 | critic 7.69: +5,485 newly aware (buzz) | $69,940 | $46,860 | $23,080 |
| 4 | 41,614 | 1.19 | audience 9: +55,952 newly aware (word of mouth) | $83,228 | $55,763 | $27,465 |
| 5 | 39,608 | 0.95 | audience 9: +44,919 newly aware (word of mouth) | $79,216 | $53,075 | $26,141 |
| 6 | 25,503 | 0.64 | audience 9: +8,878 newly aware (word of mouth) | $51,006 | $34,174 | $16,832 |
| 7 | 17,405 | 0.68 | audience 9: +8,450 newly aware (word of mouth) | $34,810 | $23,323 | $11,487 |
| 8 | 11,761 | 0.68 | audience 9: +5,441 newly aware (word of mouth) | $23,522 | $15,760 | $7,762 |
| 9 | 7,961 | 0.68 | audience 9: +3,713 newly aware (word of mouth) | $15,922 | $10,668 | $5,254 |
| 10 | 5,387 | 0.68 | audience 9: +2,509 newly aware (word of mouth) | $10,774 | $7,219 | $3,555 |
| 11 | 3,645 | 0.68 | audience 9: +1,698 newly aware (word of mouth) | $7,290 | $4,884 | $2,406 |
| 12 | 2,467 | 0.68 | audience 9: +1,149 newly aware (word of mouth) | $4,934 | $3,306 | $1,628 |
| 13 | 1,669 | 0.68 | audience 9: +778 newly aware (word of mouth) | $3,338 | $2,236 | $1,102 |
| 14 | 1,130 | 0.68 | audience 9: +526 newly aware (word of mouth) | $2,260 | $1,514 | $746 |
| 15 | 0 | 0 | audience 9: +356 newly aware (word of mouth) | $0 | $0 | $0 |

**Progression trace**

- Prestige awards: Prestige +50: meters_all_70 (Midnight Shadow).; Prestige +75: audience_7_5 (Midnight Shadow).
- IP fans: {"before":0,"after":17668,"delta":17668}
- Star career: {"fameDelta":11.51,"relDelta":0.25,"grow":0,"level":7,"reasons":"worked together (+)"}
- Distributor trust: Orbit Releasing earned 203% of its advance back on Midnight Shadow with strong reviews (step 0.75)
- Rule labels: LOCKED = causal chain, accounting, fallback/no-campaign, thresholds 4.0/9.0, IP fan inheritance. WORKING ASSUMPTION = all formulas' shapes and numbers.

### Broken Signal — Comedy + Mythology (new)

Released week 624 (year 12.0) · Distributor: Meridian Global · Star: Sam Diaz (L6, Fame 100) · IP: Broken Signal

**Financial waterfall** [LOCKED rules; amounts provisional]

| Item | Amount |
|---|---:|
| Advance received (project reserve, not revenue) | $139,000 |
| Base cost (unavoidable) | −$60,000 |
| Star fee | −$68,420 |
| Marketing campaign | −$20,000 |
| Paid from studio cash (overrun) | $9,420 |
| **Unused advance kept at completion** | $0 |
| Gross from sales (15 weeks) | $795,196 |
| Distributor royalty (44% of weekly gross) | −$349,886 |
| **Studio take** | $445,310 |
| Net for this title (surplus + take − cash overrun; wages are studio-wide, excluded) | $435,889 |

**Quality trace** [scores are computed, never rolled]

Meters (0–100): Plot 93.21 · Writing 93.78 · Filming 92.12 · Editing 89.85
Inputs: staff points {"plot":845.49,"writing":928.1,"filming":782.79,"editing":524.05}, Star filming points 75.9 (Star family fit 100), studio Comedy level 5 (+15%), era bar x1.48
Base scores: Audience 9.17 / Critic 9.27 · no weak meter
Combo grades: Audience C (x1) / Critic A (x1.15) · repetition fatigue x1 · critic saturation x1
Before expectations (after combo, weakness, fatigue, saturation; pre-clamp): Audience 9.17 / Critic 10.67 · critic generation 2 (−12.0%, undefined) · audience era 1 (−2.0%) · then clamp 0–10 (generation/era 0 = the ones active at game start)
**Final: Audience 8.99 / Critic 9.39 → avg 9.19 (HALL OF FAME)**

**Opening & viewership trace** [marketing/Fame/reach affect viewers only]

Awareness inputs: base 0.35, marketing 0.55, studioBuzz 0, starFame 0.58, trend 0.4, ipFans 0 → awareness 0.85. Reach cap 400,000 → pool 338,987 → opening 101,696.

| Wk | Viewers | Retention | Driver | Gross | Studio | Distributor |
|---:|---:|---:|---|---:|---:|---:|
| 1 | 101,696 | 1 | opening (aware people watching) | $203,392 | $113,900 | $89,492 |
| 2 | 78,747 | 0.77 | critic 9.39: +6,428 newly aware (buzz) | $157,494 | $88,197 | $69,297 |
| 3 | 47,147 | 0.6 | critic 9.39: +8,751 newly aware (buzz) | $94,294 | $52,805 | $41,489 |
| 4 | 52,956 | 1.12 | audience 8.99: +75,247 newly aware (word of mouth) | $105,912 | $59,311 | $46,601 |
| 5 | 38,918 | 0.73 | audience 8.99: +25,248 newly aware (word of mouth) | $77,836 | $43,588 | $34,248 |
| 6 | 25,991 | 0.67 | audience 8.99: +11,305 newly aware (word of mouth) | $51,982 | $29,110 | $22,872 |
| 7 | 17,631 | 0.68 | audience 8.99: +8,308 newly aware (word of mouth) | $35,262 | $19,747 | $15,515 |
| 8 | 11,929 | 0.68 | audience 8.99: +5,548 newly aware (word of mouth) | $23,858 | $13,360 | $10,498 |
| 9 | 8,074 | 0.68 | audience 8.99: +3,764 newly aware (word of mouth) | $16,148 | $9,043 | $7,105 |
| 10 | 5,465 | 0.68 | audience 8.99: +2,547 newly aware (word of mouth) | $10,930 | $6,121 | $4,809 |
| 11 | 3,699 | 0.68 | audience 8.99: +1,724 newly aware (word of mouth) | $7,398 | $4,143 | $3,255 |
| 12 | 2,504 | 0.68 | audience 8.99: +1,167 newly aware (word of mouth) | $5,008 | $2,804 | $2,204 |
| 13 | 1,694 | 0.68 | audience 8.99: +790 newly aware (word of mouth) | $3,388 | $1,897 | $1,491 |
| 14 | 1,147 | 0.68 | audience 8.99: +534 newly aware (word of mouth) | $2,294 | $1,285 | $1,009 |
| 15 | 0 | 0 | audience 8.99: +362 newly aware (word of mouth) | $0 | $0 | $0 |

**Progression trace**

- Prestige awards: Prestige +50: meters_all_70 (Broken Signal).; Prestige +75: audience_7_5 (Broken Signal).; Prestige +85: critic_8_5 (Broken Signal).; Prestige +200: hall_of_fame (Broken Signal).
- IP fans: {"before":0,"after":26655,"delta":26655}
- Star career: {"fameDelta":15.21,"relDelta":0.75,"grow":0,"level":6,"reasons":"worked together (+); project boosted their career (+)"}
- Distributor trust: Meridian Global earned 252% of its advance back on Broken Signal with strong reviews (step 0.75)
- Rule labels: LOCKED = causal chain, accounting, fallback/no-campaign, thresholds 4.0/9.0, IP fan inheritance. WORKING ASSUMPTION = all formulas' shapes and numbers.

### Lost Frequency — Comedy + Mythology (new)

Released week 640 (year 12.3) · Distributor: Meridian Global · Star: Eli Park (L3, Fame 40) · IP: Lost Frequency

**Financial waterfall** [LOCKED rules; amounts provisional]

| Item | Amount |
|---|---:|
| Advance received (project reserve, not revenue) | $159,000 |
| Base cost (unavoidable) | −$60,000 |
| Star fee | −$3,418 |
| Marketing campaign | −$20,000 |
| Paid from studio cash (overrun) | $0 |
| **Unused advance kept at completion** | $75,582 |
| Gross from sales (15 weeks) | $793,066 |
| Distributor royalty (43% of weekly gross) | −$341,018 |
| **Studio take** | $452,048 |
| Net for this title (surplus + take − cash overrun; wages are studio-wide, excluded) | $527,630 |

**Quality trace** [scores are computed, never rolled]

Meters (0–100): Plot 93.2 · Writing 93.77 · Filming 92.04 · Editing 89.95
Inputs: staff points {"plot":851.52,"writing":934.74,"filming":790.13,"editing":534.11}, Star filming points 65.28 (Star family fit 86), studio Comedy level 5 (+15%), era bar x1.49
Base scores: Audience 9.17 / Critic 9.27 · no weak meter
Combo grades: Audience C (x1) / Critic A (x1.15) · repetition fatigue x0.95 · critic saturation x1
Before expectations (after combo, weakness, fatigue, saturation; pre-clamp): Audience 8.72 / Critic 10.13 · critic generation 2 (−12.0%, undefined) · audience era 1 (−2.0%) · then clamp 0–10 (generation/era 0 = the ones active at game start)
**Final: Audience 8.54 / Critic 8.92 → avg 8.73**

**Opening & viewership trace** [marketing/Fame/reach affect viewers only]

Awareness inputs: base 0.35, marketing 0.55, studioBuzz 0, starFame 0.02, trend 0.4, ipFans 0 → awareness 0.73. Reach cap 400,000 → pool 293,572 → opening 88,072.

| Wk | Viewers | Retention | Driver | Gross | Studio | Distributor |
|---:|---:|---:|---|---:|---:|---:|
| 1 | 88,072 | 1 | opening (aware people watching) | $176,144 | $100,402 | $75,742 |
| 2 | 68,478 | 0.78 | critic 8.92: +10,013 newly aware (buzz) | $136,956 | $78,065 | $58,891 |
| 3 | 42,726 | 0.62 | critic 8.92: +11,391 newly aware (buzz) | $85,452 | $48,708 | $36,744 |
| 4 | 45,088 | 1.06 | audience 8.54: +60,500 newly aware (word of mouth) | $90,176 | $51,400 | $38,776 |
| 5 | 48,211 | 1.07 | audience 8.54: +63,845 newly aware (word of mouth) | $96,422 | $54,961 | $41,461 |
| 6 | 34,189 | 0.71 | audience 8.54: +19,100 newly aware (word of mouth) | $68,378 | $38,975 | $29,403 |
| 7 | 23,206 | 0.68 | audience 8.54: +10,599 newly aware (word of mouth) | $46,412 | $26,455 | $19,957 |
| 8 | 15,864 | 0.68 | audience 8.54: +7,516 newly aware (word of mouth) | $31,728 | $18,085 | $13,643 |
| 9 | 10,832 | 0.68 | audience 8.54: +5,102 newly aware (word of mouth) | $21,664 | $12,348 | $9,316 |
| 10 | 7,398 | 0.68 | audience 8.54: +3,488 newly aware (word of mouth) | $14,796 | $8,434 | $6,362 |
| 11 | 5,053 | 0.68 | audience 8.54: +2,382 newly aware (word of mouth) | $10,106 | $5,760 | $4,346 |
| 12 | 3,451 | 0.68 | audience 8.54: +1,627 newly aware (word of mouth) | $6,902 | $3,934 | $2,968 |
| 13 | 2,356 | 0.68 | audience 8.54: +1,111 newly aware (word of mouth) | $4,712 | $2,686 | $2,026 |
| 14 | 1,609 | 0.68 | audience 8.54: +759 newly aware (word of mouth) | $3,218 | $1,834 | $1,384 |
| 15 | 0 | 0 | audience 8.54: +518 newly aware (word of mouth) | $0 | $0 | $0 |

**Progression trace**

- Prestige awards: Prestige +50: meters_all_70 (Lost Frequency).; Prestige +75: audience_7_5 (Lost Frequency).; Prestige +85: critic_8_5 (Lost Frequency).
- IP fans: {"before":0,"after":23665,"delta":23665}
- Star career: {"fameDelta":13.53,"relDelta":0.75,"grow":6,"level":2,"reasons":"worked together (+); project boosted their career (+)"}
- Distributor trust: Meridian Global earned 214% of its advance back on Lost Frequency with strong reviews (step 0.75)
- Rule labels: LOCKED = causal chain, accounting, fallback/no-campaign, thresholds 4.0/9.0, IP fan inheritance. WORKING ASSUMPTION = all formulas' shapes and numbers.

### Last Edge — Action + Vampires (new)

Released week 656 (year 12.6) · Distributor: Meridian Global · Star: Gus Diaz (L4, Fame 85) · IP: Last Edge

**Financial waterfall** [LOCKED rules; amounts provisional]

| Item | Amount |
|---|---:|
| Advance received (project reserve, not revenue) | $179,000 |
| Base cost (unavoidable) | −$60,000 |
| Star fee | −$34,034 |
| Marketing campaign | −$20,000 |
| Paid from studio cash (overrun) | $0 |
| **Unused advance kept at completion** | $64,966 |
| Gross from sales (15 weeks) | $873,722 |
| Distributor royalty (43% of weekly gross) | −$375,700 |
| **Studio take** | $498,022 |
| Net for this title (surplus + take − cash overrun; wages are studio-wide, excluded) | $562,987 |

**Quality trace** [scores are computed, never rolled]

Meters (0–100): Plot 92.97 · Writing 93.56 · Filming 91.85 · Editing 89.61
Inputs: staff points {"plot":827.85,"writing":908.72,"filming":767.24,"editing":518.91}, Star filming points 73.92 (Star family fit 100), studio Action level 4 (+12%), era bar x1.5
Base scores: Audience 9.15 / Critic 9.25 · no weak meter
Combo grades: Audience A (x1.15) / Critic A (x1.15) · repetition fatigue x0.9 · critic saturation x1
Before expectations (after combo, weakness, fatigue, saturation; pre-clamp): Audience 9.47 / Critic 9.57 · critic generation 2 (−12.0%, undefined) · audience era 1 (−2.0%) · then clamp 0–10 (generation/era 0 = the ones active at game start)
**Final: Audience 9.28 / Critic 8.43 → avg 8.86**

**Opening & viewership trace** [marketing/Fame/reach affect viewers only]

Awareness inputs: base 0.35, marketing 0.55, studioBuzz 0, starFame 0.29, trend 0.15, ipFans 0 → awareness 0.74. Reach cap 440,000 → pool 324,557 → opening 97,367.

| Wk | Viewers | Retention | Driver | Gross | Studio | Distributor |
|---:|---:|---:|---|---:|---:|---:|
| 1 | 97,367 | 1 | opening (aware people watching) | $194,734 | $110,998 | $83,736 |
| 2 | 73,604 | 0.76 | critic 8.43: +9,503 newly aware (buzz) | $147,208 | $83,909 | $63,299 |
| 3 | 45,862 | 0.62 | critic 8.43: +10,965 newly aware (buzz) | $91,724 | $52,283 | $39,441 |
| 4 | 55,719 | 1.21 | audience 9.28: +78,516 newly aware (word of mouth) | $111,438 | $63,520 | $47,918 |
| 5 | 56,733 | 1.02 | audience 9.28: +70,176 newly aware (word of mouth) | $113,466 | $64,676 | $48,790 |
| 6 | 35,994 | 0.63 | audience 9.28: +11,673 newly aware (word of mouth) | $71,988 | $41,033 | $30,955 |
| 7 | 24,467 | 0.68 | audience 9.28: +11,885 newly aware (word of mouth) | $48,934 | $27,892 | $21,042 |
| 8 | 16,436 | 0.67 | audience 9.28: +7,540 newly aware (word of mouth) | $32,872 | $18,737 | $14,135 |
| 9 | 11,063 | 0.67 | audience 9.28: +5,126 newly aware (word of mouth) | $22,126 | $12,612 | $9,514 |
| 10 | 7,443 | 0.67 | audience 9.28: +3,443 newly aware (word of mouth) | $14,886 | $8,485 | $6,401 |
| 11 | 5,009 | 0.67 | audience 9.28: +2,317 newly aware (word of mouth) | $10,018 | $5,710 | $4,308 |
| 12 | 3,370 | 0.67 | audience 9.28: +1,559 newly aware (word of mouth) | $6,740 | $3,842 | $2,898 |
| 13 | 2,268 | 0.67 | audience 9.28: +1,049 newly aware (word of mouth) | $4,536 | $2,586 | $1,950 |
| 14 | 1,526 | 0.67 | audience 9.28: +706 newly aware (word of mouth) | $3,052 | $1,740 | $1,312 |
| 15 | 0 | 0 | audience 9.28: +475 newly aware (word of mouth) | $0 | $0 | $0 |

**Progression trace**

- Prestige awards: Prestige +50: meters_all_70 (Last Edge).; Prestige +75: audience_7_5 (Last Edge).
- IP fans: {"before":0,"after":26981,"delta":26981}
- Star career: {"fameDelta":14.37,"relDelta":0.75,"grow":0,"level":3,"reasons":"worked together (+); project boosted their career (+)"}
- Distributor trust: Meridian Global earned 210% of its advance back on Last Edge with strong reviews (step 0.75)
- Rule labels: LOCKED = causal chain, accounting, fallback/no-campaign, thresholds 4.0/9.0, IP fan inheritance. WORKING ASSUMPTION = all formulas' shapes and numbers.

### Wild Edge — Horror + Vampires (new)

Released week 672 (year 12.9) · Distributor: Meridian Global · Star: Gus Quinn (L8, Fame 100) · IP: Wild Edge

**Financial waterfall** [LOCKED rules; amounts provisional]

| Item | Amount |
|---|---:|
| Advance received (project reserve, not revenue) | $166,000 |
| Base cost (unavoidable) | −$60,000 |
| Star fee | −$65,042 |
| Marketing campaign | −$20,000 |
| Paid from studio cash (overrun) | $0 |
| **Unused advance kept at completion** | $20,958 |
| Gross from sales (15 weeks) | $794,392 |
| Distributor royalty (43% of weekly gross) | −$341,589 |
| **Studio take** | $452,803 |
| Net for this title (surplus + take − cash overrun; wages are studio-wide, excluded) | $473,761 |

**Quality trace** [scores are computed, never rolled]

Meters (0–100): Plot 92.89 · Writing 93.48 · Filming 91.78 · Editing 89.57
Inputs: staff points {"plot":824.6,"writing":905.33,"filming":768.27,"editing":521.29}, Star filming points 71.94 (Star family fit 100), studio Horror level 3 (+9%), era bar x1.52
Base scores: Audience 9.14 / Critic 9.24 · no weak meter
Combo grades: Audience B (x1.06) / Critic A (x1.15) · repetition fatigue x0.9 · critic saturation x1
Before expectations (after combo, weakness, fatigue, saturation; pre-clamp): Audience 8.72 / Critic 9.57 · critic generation 2 (−12.0%, undefined) · audience era 1 (−2.0%) · then clamp 0–10 (generation/era 0 = the ones active at game start)
**Final: Audience 8.55 / Critic 8.42 → avg 8.49**

**Opening & viewership trace** [marketing/Fame/reach affect viewers only]

Awareness inputs: base 0.35, marketing 0.55, studioBuzz 0, starFame 0.6, trend 0.4, ipFans 0 → awareness 0.85. Reach cap 400,000 → pool 340,173 → opening 102,052.

| Wk | Viewers | Retention | Driver | Gross | Studio | Distributor |
|---:|---:|---:|---|---:|---:|---:|
| 1 | 102,052 | 1 | opening (aware people watching) | $204,104 | $116,339 | $87,765 |
| 2 | 75,339 | 0.74 | critic 8.42: +4,911 newly aware (buzz) | $150,678 | $85,886 | $64,792 |
| 3 | 45,415 | 0.6 | critic 8.42: +6,853 newly aware (buzz) | $90,830 | $51,773 | $39,057 |
| 4 | 48,850 | 1.08 | audience 8.55: +64,489 newly aware (word of mouth) | $97,700 | $55,689 | $42,011 |
| 5 | 41,546 | 0.85 | audience 8.55: +38,906 newly aware (word of mouth) | $83,092 | $47,362 | $35,730 |
| 6 | 27,437 | 0.66 | audience 8.55: +10,733 newly aware (word of mouth) | $54,874 | $31,278 | $23,596 |
| 7 | 18,840 | 0.69 | audience 8.55: +9,128 newly aware (word of mouth) | $37,680 | $21,478 | $16,202 |
| 8 | 12,852 | 0.68 | audience 8.55: +6,028 newly aware (word of mouth) | $25,704 | $14,651 | $11,053 |
| 9 | 8,777 | 0.68 | audience 8.55: +4,139 newly aware (word of mouth) | $17,554 | $10,006 | $7,548 |
| 10 | 5,992 | 0.68 | audience 8.55: +2,824 newly aware (word of mouth) | $11,984 | $6,831 | $5,153 |
| 11 | 4,092 | 0.68 | audience 8.55: +1,928 newly aware (word of mouth) | $8,184 | $4,665 | $3,519 |
| 12 | 2,794 | 0.68 | audience 8.55: +1,317 newly aware (word of mouth) | $5,588 | $3,185 | $2,403 |
| 13 | 1,908 | 0.68 | audience 8.55: +899 newly aware (word of mouth) | $3,816 | $2,175 | $1,641 |
| 14 | 1,302 | 0.68 | audience 8.55: +614 newly aware (word of mouth) | $2,604 | $1,484 | $1,120 |
| 15 | 0 | 0 | audience 8.55: +419 newly aware (word of mouth) | $0 | $0 | $0 |

**Progression trace**

- Prestige awards: Prestige +50: meters_all_70 (Wild Edge).; Prestige +75: audience_7_5 (Wild Edge).
- IP fans: {"before":0,"after":22179,"delta":22179}
- Star career: {"fameDelta":12.67,"relDelta":0.25,"grow":0,"level":8,"reasons":"worked together (+)"}
- Distributor trust: Meridian Global earned 206% of its advance back on Wild Edge with strong reviews (step 0.75)
- Rule labels: LOCKED = causal chain, accounting, fallback/no-campaign, thresholds 4.0/9.0, IP fan inheritance. WORKING ASSUMPTION = all formulas' shapes and numbers.

### Silver Horizon 5 — Comedy + Dinosaurs (sequel)

Released week 688 (year 13.2) · Distributor: Meridian Global · Star: Eli Park (L3, Fame 40) · IP: Silver Horizon

**Financial waterfall** [LOCKED rules; amounts provisional]

| Item | Amount |
|---|---:|
| Advance received (project reserve, not revenue) | $133,000 |
| Base cost (unavoidable) | −$60,000 |
| Star fee | −$10,526 |
| Marketing campaign | −$20,000 |
| Paid from studio cash (overrun) | $0 |
| **Unused advance kept at completion** | $42,474 |
| Gross from sales (15 weeks) | $792,532 |
| Distributor royalty (44% of weekly gross) | −$348,714 |
| **Studio take** | $443,818 |
| Net for this title (surplus + take − cash overrun; wages are studio-wide, excluded) | $486,292 |

**Quality trace** [scores are computed, never rolled]

Meters (0–100): Plot 93.21 · Writing 93.78 · Filming 92.07 · Editing 90.08
Inputs: staff points {"plot":873.48,"writing":958.91,"filming":810.92,"editing":555.35}, Star filming points 69.84 (Star family fit 92), studio Comedy level 5 (+15%), era bar x1.53
Base scores: Audience 9.18 / Critic 9.28 · no weak meter
Combo grades: Audience B (x1.06) / Critic C (x1) · repetition fatigue x0.9 · critic saturation x1
Before expectations (after combo, weakness, fatigue, saturation; pre-clamp): Audience 8.76 / Critic 8.35 · critic generation 2 (−12.0%, undefined) · audience era 1 (−2.0%) · then clamp 0–10 (generation/era 0 = the ones active at game start)
**Final: Audience 8.58 / Critic 7.35 → avg 7.97**

**Opening & viewership trace** [marketing/Fame/reach affect viewers only]

Awareness inputs: base 0.35, marketing 0.55, studioBuzz 0, starFame 0.11, trend 0, ipFans 0.35 → awareness 0.74. Reach cap 400,000 → pool 296,403 → opening 88,921.

| Wk | Viewers | Retention | Driver | Gross | Studio | Distributor |
|---:|---:|---:|---|---:|---:|---:|
| 1 | 88,921 | 1 | opening (aware people watching) | $177,842 | $99,592 | $78,250 |
| 2 | 63,170 | 0.71 | critic 7.35: +5,843 newly aware (buzz) | $126,340 | $70,750 | $55,590 |
| 3 | 39,272 | 0.62 | critic 7.35: +6,918 newly aware (buzz) | $78,544 | $43,985 | $34,559 |
| 4 | 44,129 | 1.12 | audience 8.58: +56,238 newly aware (word of mouth) | $88,258 | $49,424 | $38,834 |
| 5 | 47,450 | 1.08 | audience 8.58: +63,193 newly aware (word of mouth) | $94,900 | $53,144 | $41,756 |
| 6 | 37,723 | 0.8 | audience 8.58: +30,356 newly aware (word of mouth) | $75,446 | $42,250 | $33,196 |
| 7 | 25,135 | 0.67 | audience 8.58: +10,404 newly aware (word of mouth) | $50,270 | $28,151 | $22,119 |
| 8 | 17,221 | 0.69 | audience 8.58: +8,272 newly aware (word of mouth) | $34,442 | $19,288 | $15,154 |
| 9 | 11,744 | 0.68 | audience 8.58: +5,511 newly aware (word of mouth) | $23,488 | $13,153 | $10,335 |
| 10 | 8,015 | 0.68 | audience 8.58: +3,776 newly aware (word of mouth) | $16,030 | $8,977 | $7,053 |
| 11 | 5,469 | 0.68 | audience 8.58: +2,575 newly aware (word of mouth) | $10,938 | $6,125 | $4,813 |
| 12 | 3,732 | 0.68 | audience 8.58: +1,757 newly aware (word of mouth) | $7,464 | $4,180 | $3,284 |
| 13 | 2,547 | 0.68 | audience 8.58: +1,199 newly aware (word of mouth) | $5,094 | $2,853 | $2,241 |
| 14 | 1,738 | 0.68 | audience 8.58: +818 newly aware (word of mouth) | $3,476 | $1,947 | $1,529 |
| 15 | 0 | 0 | audience 8.58: +558 newly aware (word of mouth) | $0 | $0 | $0 |

**Progression trace**

- Prestige awards: Prestige +50: meters_all_70 (Silver Horizon 5).; Prestige +75: audience_7_5 (Silver Horizon 5).
- IP fans: {"before":53749,"after":72580,"delta":18831}
- Star career: {"fameDelta":10.77,"relDelta":0.75,"grow":6,"level":3,"reasons":"worked together (+); project boosted their career (+)"}
- Distributor trust: Meridian Global earned 262% of its advance back on Silver Horizon 5 with strong reviews (step 0.75)
- Rule labels: LOCKED = causal chain, accounting, fallback/no-campaign, thresholds 4.0/9.0, IP fan inheritance. WORKING ASSUMPTION = all formulas' shapes and numbers.

### Hollow Legacy — Action + Vampires (new)

Released week 704 (year 13.5) · Distributor: XYZ Network · Star: Gus Diaz (L4, Fame 85) · IP: Hollow Legacy

**Financial waterfall** [LOCKED rules; amounts provisional]

| Item | Amount |
|---|---:|
| Advance received (project reserve, not revenue) | $158,000 |
| Base cost (unavoidable) | −$60,000 |
| Star fee | −$44,519 |
| Marketing campaign | −$20,000 |
| Paid from studio cash (overrun) | $0 |
| **Unused advance kept at completion** | $33,481 |
| Gross from sales (15 weeks) | $745,488 |
| Distributor royalty (38% of weekly gross) | −$283,285 |
| **Studio take** | $462,203 |
| Net for this title (surplus + take − cash overrun; wages are studio-wide, excluded) | $495,684 |

**Quality trace** [scores are computed, never rolled]

Meters (0–100): Plot 93.06 · Writing 93.64 · Filming 91.94 · Editing 89.83
Inputs: staff points {"plot":860.56,"writing":944.17,"filming":798.74,"editing":544.43}, Star filming points 73.92 (Star family fit 100), studio Action level 4 (+12%), era bar x1.54
Base scores: Audience 9.16 / Critic 9.26 · no weak meter
Combo grades: Audience A (x1.15) / Critic A (x1.15) · repetition fatigue x0.85 · critic saturation x0.9
Before expectations (after combo, weakness, fatigue, saturation; pre-clamp): Audience 8.96 / Critic 8.15 · critic generation 2 (−12.0%, undefined) · audience era 1 (−2.0%) · then clamp 0–10 (generation/era 0 = the ones active at game start)
**Final: Audience 8.78 / Critic 7.17 → avg 7.98**

**Opening & viewership trace** [marketing/Fame/reach affect viewers only]

Awareness inputs: base 0.35, marketing 0.55, studioBuzz 0, starFame 0.37, trend 0.1, ipFans 0 → awareness 0.75. Reach cap 376,000 → pool 280,858 → opening 84,257.

| Wk | Viewers | Retention | Driver | Gross | Studio | Distributor |
|---:|---:|---:|---|---:|---:|---:|
| 1 | 84,257 | 1 | opening (aware people watching) | $168,514 | $104,479 | $64,035 |
| 2 | 59,182 | 0.7 | critic 7.17: +4,955 newly aware (buzz) | $118,364 | $73,386 | $44,978 |
| 3 | 36,731 | 0.62 | critic 7.17: +5,926 newly aware (buzz) | $73,462 | $45,546 | $27,916 |
| 4 | 42,951 | 1.17 | audience 8.78: +55,537 newly aware (word of mouth) | $85,902 | $53,259 | $32,643 |
| 5 | 47,480 | 1.11 | audience 8.78: +64,942 newly aware (word of mouth) | $94,960 | $58,875 | $36,085 |
| 6 | 33,931 | 0.71 | audience 8.78: +19,770 newly aware (word of mouth) | $67,862 | $42,074 | $25,788 |
| 7 | 22,873 | 0.67 | audience 8.78: +10,275 newly aware (word of mouth) | $45,746 | $28,363 | $17,383 |
| 8 | 15,568 | 0.68 | audience 8.78: +7,343 newly aware (word of mouth) | $31,136 | $19,304 | $11,832 |
| 9 | 10,579 | 0.68 | audience 8.78: +4,950 newly aware (word of mouth) | $21,158 | $13,118 | $8,040 |
| 10 | 7,191 | 0.68 | audience 8.78: +3,369 newly aware (word of mouth) | $14,382 | $8,917 | $5,465 |
| 11 | 4,887 | 0.68 | audience 8.78: +2,289 newly aware (word of mouth) | $9,774 | $6,060 | $3,714 |
| 12 | 3,322 | 0.68 | audience 8.78: +1,556 newly aware (word of mouth) | $6,644 | $4,119 | $2,525 |
| 13 | 2,258 | 0.68 | audience 8.78: +1,058 newly aware (word of mouth) | $4,516 | $2,800 | $1,716 |
| 14 | 1,534 | 0.68 | audience 8.78: +719 newly aware (word of mouth) | $3,068 | $1,902 | $1,166 |
| 15 | 0 | 0 | audience 8.78: +489 newly aware (word of mouth) | $0 | $0 | $0 |

**Progression trace**

- Prestige awards: Prestige +50: meters_all_70 (Hollow Legacy).; Prestige +75: audience_7_5 (Hollow Legacy).
- IP fans: {"before":0,"after":17772,"delta":17772}
- Star career: {"fameDelta":10.62,"relDelta":0.75,"grow":0,"level":4,"reasons":"worked together (+); project boosted their career (+)"}
- Distributor trust: XYZ Network earned 179% of its advance back on Hollow Legacy with strong reviews (step 0.75)
- Rule labels: LOCKED = causal chain, accounting, fallback/no-campaign, thresholds 4.0/9.0, IP fan inheritance. WORKING ASSUMPTION = all formulas' shapes and numbers.

### Dead Code — Action + Robots (new)

Released week 720 (year 13.8) · Distributor: Meridian Global · Star: Gus Diaz (L4, Fame 85) · IP: Dead Code

**Financial waterfall** [LOCKED rules; amounts provisional]

| Item | Amount |
|---|---:|
| Advance received (project reserve, not revenue) | $142,000 |
| Base cost (unavoidable) | −$60,000 |
| Star fee | −$44,509 |
| Marketing campaign | −$20,000 |
| Paid from studio cash (overrun) | $0 |
| **Unused advance kept at completion** | $17,492 |
| Gross from sales (15 weeks) | $873,908 |
| Distributor royalty (44% of weekly gross) | −$384,520 |
| **Studio take** | $489,388 |
| Net for this title (surplus + take − cash overrun; wages are studio-wide, excluded) | $506,880 |

**Quality trace** [scores are computed, never rolled]

Meters (0–100): Plot 93.07 · Writing 93.65 · Filming 91.96 · Editing 89.93
Inputs: staff points {"plot":868.39,"writing":952.7,"filming":807.66,"editing":555.36}, Star filming points 73.92 (Star family fit 100), studio Action level 4 (+12%), era bar x1.55
Base scores: Audience 9.17 / Critic 9.26 · no weak meter
Combo grades: Audience C (x1) / Critic D (x0.9) · repetition fatigue x1 · critic saturation x1
Before expectations (after combo, weakness, fatigue, saturation; pre-clamp): Audience 9.17 / Critic 8.34 · critic generation 2 (−12.0%, undefined) · audience era 1 (−2.0%) · then clamp 0–10 (generation/era 0 = the ones active at game start)
**Final: Audience 8.98 / Critic 7.34 → avg 8.16**

**Opening & viewership trace** [marketing/Fame/reach affect viewers only]

Awareness inputs: base 0.35, marketing 0.55, studioBuzz 0, starFame 0.44, trend 0.4, ipFans 0 → awareness 0.82. Reach cap 440,000 → pool 362,612 → opening 108,784.

| Wk | Viewers | Retention | Driver | Gross | Studio | Distributor |
|---:|---:|---:|---|---:|---:|---:|
| 1 | 108,784 | 1 | opening (aware people watching) | $217,568 | $121,838 | $95,730 |
| 2 | 76,307 | 0.7 | critic 7.34: +4,346 newly aware (buzz) | $152,614 | $85,464 | $67,150 |
| 3 | 46,596 | 0.61 | critic 7.34: +5,813 newly aware (buzz) | $93,192 | $52,188 | $41,004 |
| 4 | 55,948 | 1.2 | audience 8.98: +74,181 newly aware (word of mouth) | $111,896 | $62,662 | $49,234 |
| 5 | 50,507 | 0.9 | audience 8.98: +52,771 newly aware (word of mouth) | $101,014 | $56,568 | $44,446 |
| 6 | 32,758 | 0.65 | audience 8.98: +11,951 newly aware (word of mouth) | $65,516 | $36,689 | $28,827 |
| 7 | 22,338 | 0.68 | audience 8.98: +10,789 newly aware (word of mouth) | $44,676 | $25,019 | $19,657 |
| 8 | 15,104 | 0.68 | audience 8.98: +6,997 newly aware (word of mouth) | $30,208 | $16,916 | $13,292 |
| 9 | 10,227 | 0.68 | audience 8.98: +4,772 newly aware (word of mouth) | $20,454 | $11,454 | $9,000 |
| 10 | 6,923 | 0.68 | audience 8.98: +3,226 newly aware (word of mouth) | $13,846 | $7,754 | $6,092 |
| 11 | 4,687 | 0.68 | audience 8.98: +2,185 newly aware (word of mouth) | $9,374 | $5,249 | $4,125 |
| 12 | 3,173 | 0.68 | audience 8.98: +1,479 newly aware (word of mouth) | $6,346 | $3,554 | $2,792 |
| 13 | 2,148 | 0.68 | audience 8.98: +1,001 newly aware (word of mouth) | $4,296 | $2,406 | $1,890 |
| 14 | 1,454 | 0.68 | audience 8.98: +678 newly aware (word of mouth) | $2,908 | $1,628 | $1,280 |
| 15 | 0 | 0 | audience 8.98: +459 newly aware (word of mouth) | $0 | $0 | $0 |

**Progression trace**

- Prestige awards: Prestige +50: meters_all_70 (Dead Code).; Prestige +75: audience_7_5 (Dead Code).
- IP fans: {"before":0,"after":22092,"delta":22092}
- Star career: {"fameDelta":11.76,"relDelta":0.75,"grow":0,"level":4,"reasons":"worked together (+); project boosted their career (+)"}
- Distributor trust: Meridian Global earned 271% of its advance back on Dead Code with strong reviews (step 0.75)
- Rule labels: LOCKED = causal chain, accounting, fallback/no-campaign, thresholds 4.0/9.0, IP fan inheritance. WORKING ASSUMPTION = all formulas' shapes and numbers.

### Lost Echo — Comedy + Pirates (new)

Released week 736 (year 14.2) · Distributor: XYZ Network · Star: Eli Park (L3, Fame 40) · IP: Lost Echo

**Financial waterfall** [LOCKED rules; amounts provisional]

| Item | Amount |
|---|---:|
| Advance received (project reserve, not revenue) | $151,000 |
| Base cost (unavoidable) | −$60,000 |
| Star fee | −$16,804 |
| Marketing campaign | −$20,000 |
| Paid from studio cash (overrun) | $0 |
| **Unused advance kept at completion** | $54,196 |
| Gross from sales (15 weeks) | $744,894 |
| Distributor royalty (40% of weekly gross) | −$297,958 |
| **Studio take** | $446,936 |
| Net for this title (surplus + take − cash overrun; wages are studio-wide, excluded) | $501,132 |

**Quality trace** [scores are computed, never rolled]

Meters (0–100): Plot 93.24 · Writing 93.8 · Filming 92.11 · Editing 90.11
Inputs: staff points {"plot":898.78,"writing":985.37,"filming":831.99,"editing":570.5}, Star filming points 74.4 (Star family fit 98), studio Comedy level 5 (+15%), era bar x1.57
Base scores: Audience 9.18 / Critic 9.28 · no weak meter
Combo grades: Audience D (x0.9) / Critic B (x1.06) · repetition fatigue x1 · critic saturation x1
Before expectations (after combo, weakness, fatigue, saturation; pre-clamp): Audience 8.26 / Critic 9.84 · critic generation 2 (−12.0%, undefined) · audience era 1 (−2.0%) · then clamp 0–10 (generation/era 0 = the ones active at game start)
**Final: Audience 8.1 / Critic 8.66 → avg 8.38**

**Opening & viewership trace** [marketing/Fame/reach affect viewers only]

Awareness inputs: base 0.35, marketing 0.55, studioBuzz 0, starFame 0.17, trend 0.4, ipFans 0 → awareness 0.77. Reach cap 376,000 → pool 289,531 → opening 86,859.

| Wk | Viewers | Retention | Driver | Gross | Studio | Distributor |
|---:|---:|---:|---|---:|---:|---:|
| 1 | 86,859 | 1 | opening (aware people watching) | $173,718 | $104,231 | $69,487 |
| 2 | 65,993 | 0.76 | critic 8.66: +7,595 newly aware (buzz) | $131,986 | $79,192 | $52,794 |
| 3 | 40,680 | 0.62 | critic 8.66: +9,065 newly aware (buzz) | $81,360 | $48,816 | $32,544 |
| 4 | 40,026 | 0.98 | audience 8.1: +50,443 newly aware (word of mouth) | $80,052 | $48,031 | $32,021 |
| 5 | 40,215 | 1 | audience 8.1: +49,632 newly aware (word of mouth) | $80,430 | $48,258 | $32,172 |
| 6 | 32,268 | 0.8 | audience 8.1: +26,380 newly aware (word of mouth) | $64,536 | $38,722 | $25,814 |
| 7 | 21,710 | 0.67 | audience 8.1: +9,102 newly aware (word of mouth) | $43,420 | $26,052 | $17,368 |
| 8 | 15,016 | 0.69 | audience 8.1: +7,303 newly aware (word of mouth) | $30,032 | $18,019 | $12,013 |
| 9 | 10,338 | 0.69 | audience 8.1: +4,914 newly aware (word of mouth) | $20,676 | $12,406 | $8,270 |
| 10 | 7,122 | 0.69 | audience 8.1: +3,398 newly aware (word of mouth) | $14,244 | $8,546 | $5,698 |
| 11 | 4,907 | 0.69 | audience 8.1: +2,340 newly aware (word of mouth) | $9,814 | $5,888 | $3,926 |
| 12 | 3,380 | 0.69 | audience 8.1: +1,612 newly aware (word of mouth) | $6,760 | $4,056 | $2,704 |
| 13 | 2,329 | 0.69 | audience 8.1: +1,110 newly aware (word of mouth) | $4,658 | $2,795 | $1,863 |
| 14 | 1,604 | 0.69 | audience 8.1: +765 newly aware (word of mouth) | $3,208 | $1,925 | $1,283 |
| 15 | 0 | 0 | audience 8.1: +527 newly aware (word of mouth) | $0 | $0 | $0 |

**Progression trace**

- Prestige awards: Prestige +50: meters_all_70 (Lost Echo).; Prestige +75: audience_7_5 (Lost Echo).; Prestige +85: critic_8_5 (Lost Echo).
- IP fans: {"before":0,"after":20142,"delta":20142}
- Star career: {"fameDelta":12.05,"relDelta":0.75,"grow":2,"level":3,"reasons":"worked together (+); project boosted their career (+)"}
- Distributor trust: XYZ Network earned 197% of its advance back on Lost Echo with strong reviews (step 0.75)
- Rule labels: LOCKED = causal chain, accounting, fallback/no-campaign, thresholds 4.0/9.0, IP fan inheritance. WORKING ASSUMPTION = all formulas' shapes and numbers.

### Midnight Legacy — Action + Pirates (new)

Released week 752 (year 14.5) · Distributor: XYZ Network · Star: Bo Hart (L9, Fame 100) · IP: Midnight Legacy

**Financial waterfall** [LOCKED rules; amounts provisional]

| Item | Amount |
|---|---:|
| Advance received (project reserve, not revenue) | $160,000 |
| Base cost (unavoidable) | −$60,000 |
| Star fee | −$63,660 |
| Marketing campaign | −$20,000 |
| Paid from studio cash (overrun) | $0 |
| **Unused advance kept at completion** | $16,340 |
| Gross from sales (15 weeks) | $747,894 |
| Distributor royalty (39% of weekly gross) | −$291,679 |
| **Studio take** | $456,215 |
| Net for this title (surplus + take − cash overrun; wages are studio-wide, excluded) | $472,556 |

**Quality trace** [scores are computed, never rolled]

Meters (0–100): Plot 93.27 · Writing 93.82 · Filming 92.15 · Editing 90.13
Inputs: staff points {"plot":909.41,"writing":997.41,"filming":843.69,"editing":576.66}, Star filming points 75.9 (Star family fit 100), studio Action level 5 (+15%), era bar x1.58
Base scores: Audience 9.19 / Critic 9.28 · no weak meter
Combo grades: Audience B (x1.06) / Critic C (x1) · repetition fatigue x1 · critic saturation x1
Before expectations (after combo, weakness, fatigue, saturation; pre-clamp): Audience 9.74 / Critic 9.28 · critic generation 2 (−12.0%, undefined) · audience era 1 (−2.0%) · then clamp 0–10 (generation/era 0 = the ones active at game start)
**Final: Audience 9.54 / Critic 8.17 → avg 8.86**

**Opening & viewership trace** [marketing/Fame/reach affect viewers only]

Awareness inputs: base 0.35, marketing 0.55, studioBuzz 0, starFame 0.6, trend 0.4, ipFans 0 → awareness 0.85. Reach cap 376,000 → pool 319,762 → opening 95,929.

| Wk | Viewers | Retention | Driver | Gross | Studio | Distributor |
|---:|---:|---:|---|---:|---:|---:|
| 1 | 95,929 | 1 | opening (aware people watching) | $191,858 | $117,033 | $74,825 |
| 2 | 69,945 | 0.73 | critic 8.17: +4,279 newly aware (buzz) | $139,890 | $85,333 | $54,557 |
| 3 | 42,243 | 0.6 | critic 8.17: +5,997 newly aware (buzz) | $84,486 | $51,536 | $32,950 |
| 4 | 53,927 | 1.28 | audience 9.54: +76,713 newly aware (word of mouth) | $107,854 | $65,791 | $42,063 |
| 5 | 37,858 | 0.7 | audience 9.54: +21,383 newly aware (word of mouth) | $75,716 | $46,187 | $29,529 |
| 6 | 25,141 | 0.66 | audience 9.54: +11,109 newly aware (word of mouth) | $50,282 | $30,672 | $19,610 |
| 7 | 16,851 | 0.67 | audience 9.54: +7,799 newly aware (word of mouth) | $33,702 | $20,558 | $13,144 |
| 8 | 11,277 | 0.67 | audience 9.54: +5,179 newly aware (word of mouth) | $22,554 | $13,758 | $8,796 |
| 9 | 7,548 | 0.67 | audience 9.54: +3,471 newly aware (word of mouth) | $15,096 | $9,209 | $5,887 |
| 10 | 5,053 | 0.67 | audience 9.54: +2,323 newly aware (word of mouth) | $10,106 | $6,165 | $3,941 |
| 11 | 3,382 | 0.67 | audience 9.54: +1,555 newly aware (word of mouth) | $6,764 | $4,126 | $2,638 |
| 12 | 2,264 | 0.67 | audience 9.54: +1,041 newly aware (word of mouth) | $4,528 | $2,762 | $1,766 |
| 13 | 1,515 | 0.67 | audience 9.54: +697 newly aware (word of mouth) | $3,030 | $1,848 | $1,182 |
| 14 | 1,014 | 0.67 | audience 9.54: +466 newly aware (word of mouth) | $2,028 | $1,237 | $791 |
| 15 | 0 | 0 | audience 9.54: +312 newly aware (word of mouth) | $0 | $0 | $0 |

**Progression trace**

- Prestige awards: Prestige +50: meters_all_70 (Midnight Legacy).; Prestige +75: audience_7_5 (Midnight Legacy).
- IP fans: {"before":0,"after":23095,"delta":23095}
- Star career: {"fameDelta":13.77,"relDelta":0.25,"grow":0,"level":8,"reasons":"worked together (+)"}
- Distributor trust: XYZ Network earned 182% of its advance back on Midnight Legacy with strong reviews (step 0.75)
- Rule labels: LOCKED = causal chain, accounting, fallback/no-campaign, thresholds 4.0/9.0, IP fan inheritance. WORKING ASSUMPTION = all formulas' shapes and numbers.

### Hollow Pulse — Action + Dinosaurs (new)

Released week 768 (year 14.8) · Distributor: XYZ Network · Star: Bo Hart (L9, Fame 100) · IP: Hollow Pulse

**Financial waterfall** [LOCKED rules; amounts provisional]

| Item | Amount |
|---|---:|
| Advance received (project reserve, not revenue) | $122,000 |
| Base cost (unavoidable) | −$60,000 |
| Star fee | −$63,633 |
| Marketing campaign | −$20,000 |
| Paid from studio cash (overrun) | $21,633 |
| **Unused advance kept at completion** | $0 |
| Gross from sales (15 weeks) | $746,200 |
| Distributor royalty (40% of weekly gross) | −$298,480 |
| **Studio take** | $447,720 |
| Net for this title (surplus + take − cash overrun; wages are studio-wide, excluded) | $426,087 |

**Quality trace** [scores are computed, never rolled]

Meters (0–100): Plot 93.3 · Writing 93.85 · Filming 92.23 · Editing 90.27
Inputs: staff points {"plot":921.82,"writing":1009.34,"filming":861.29,"editing":590.34}, Star filming points 75.9 (Star family fit 100), studio Action level 5 (+15%), era bar x1.59
Base scores: Audience 9.19 / Critic 9.29 · no weak meter
Combo grades: Audience C (x1) / Critic F (x0.78) · repetition fatigue x1 · critic saturation x0.9
Before expectations (after combo, weakness, fatigue, saturation; pre-clamp): Audience 9.19 / Critic 6.52 · critic generation 2 (−12.0%, undefined) · audience era 1 (−2.0%) · then clamp 0–10 (generation/era 0 = the ones active at game start)
**Final: Audience 9.01 / Critic 5.74 → avg 7.38**

**Opening & viewership trace** [marketing/Fame/reach affect viewers only]

Awareness inputs: base 0.35, marketing 0.55, studioBuzz 0, starFame 0.6, trend 0.1, ipFans 0 → awareness 0.8. Reach cap 376,000 → pool 300,087 → opening 90,026.

| Wk | Viewers | Retention | Driver | Gross | Studio | Distributor |
|---:|---:|---:|---|---:|---:|---:|
| 1 | 90,026 | 1 | opening (aware people watching) | $180,052 | $108,031 | $72,021 |
| 2 | 57,927 | 0.64 | critic 5.74: +1,348 newly aware (buzz) | $115,854 | $69,512 | $46,342 |
| 3 | 35,669 | 0.62 | critic 5.74: +1,772 newly aware (buzz) | $71,338 | $42,803 | $28,535 |
| 4 | 45,638 | 1.28 | audience 9.01: +57,213 newly aware (word of mouth) | $91,276 | $54,766 | $36,510 |
| 5 | 49,344 | 1.08 | audience 9.01: +65,658 newly aware (word of mouth) | $98,688 | $59,213 | $39,475 |
| 6 | 31,288 | 0.63 | audience 9.01: +9,730 newly aware (word of mouth) | $62,576 | $37,546 | $25,030 |
| 7 | 21,406 | 0.68 | audience 9.01: +10,520 newly aware (word of mouth) | $42,812 | $25,687 | $17,125 |
| 8 | 14,456 | 0.68 | audience 9.01: +6,671 newly aware (word of mouth) | $28,912 | $17,347 | $11,565 |
| 9 | 9,783 | 0.68 | audience 9.01: +4,564 newly aware (word of mouth) | $19,566 | $11,740 | $7,826 |
| 10 | 6,619 | 0.68 | audience 9.01: +3,082 newly aware (word of mouth) | $13,238 | $7,943 | $5,295 |
| 11 | 4,478 | 0.68 | audience 9.01: +2,086 newly aware (word of mouth) | $8,956 | $5,374 | $3,582 |
| 12 | 3,029 | 0.68 | audience 9.01: +1,411 newly aware (word of mouth) | $6,058 | $3,635 | $2,423 |
| 13 | 2,050 | 0.68 | audience 9.01: +955 newly aware (word of mouth) | $4,100 | $2,460 | $1,640 |
| 14 | 1,387 | 0.68 | audience 9.01: +646 newly aware (word of mouth) | $2,774 | $1,664 | $1,110 |
| 15 | 0 | 0 | audience 9.01: +437 newly aware (word of mouth) | $0 | $0 | $0 |

**Progression trace**

- Prestige awards: Prestige +50: meters_all_70 (Hollow Pulse).; Prestige +75: audience_7_5 (Hollow Pulse).
- IP fans: {"before":0,"after":14208,"delta":14208}
- Star career: {"fameDelta":8.49,"relDelta":0.25,"grow":0,"level":9,"reasons":"worked together (+)"}
- Distributor trust: XYZ Network earned 245% of its advance back on Hollow Pulse with strong reviews (step 0.75)
- Rule labels: LOCKED = causal chain, accounting, fallback/no-campaign, thresholds 4.0/9.0, IP fan inheritance. WORKING ASSUMPTION = all formulas' shapes and numbers.

### Midnight Edge — Action + Spies (new)

Released week 784 (year 15.1) · Distributor: Meridian Global · Star: Bo Hart (L9, Fame 100) · IP: Midnight Edge

**Financial waterfall** [LOCKED rules; amounts provisional]

| Item | Amount |
|---|---:|
| Advance received (project reserve, not revenue) | $175,000 |
| Base cost (unavoidable) | −$60,000 |
| Star fee | −$63,607 |
| Marketing campaign | −$20,000 |
| Paid from studio cash (overrun) | $0 |
| **Unused advance kept at completion** | $31,393 |
| Gross from sales (15 weeks) | $873,958 |
| Distributor royalty (43% of weekly gross) | −$375,802 |
| **Studio take** | $498,156 |
| Net for this title (surplus + take − cash overrun; wages are studio-wide, excluded) | $529,549 |

**Quality trace** [scores are computed, never rolled]

Meters (0–100): Plot 93.26 · Writing 93.78 · Filming 92.23 · Editing 90.35
Inputs: staff points {"plot":922.34,"writing":1005.2,"filming":868.45,"editing":600.43}, Star filming points 75.9 (Star family fit 100), studio Action level 5 (+15%), era bar x1.6
Base scores: Audience 9.2 / Critic 9.29 · no weak meter
Combo grades: Audience A (x1.15) / Critic C (x1) · repetition fatigue x0.9 · critic saturation x0.9
Before expectations (after combo, weakness, fatigue, saturation; pre-clamp): Audience 9.52 / Critic 7.52 · critic generation 2 (−12.0%, undefined) · audience era 1 (−2.0%) · then clamp 0–10 (generation/era 0 = the ones active at game start)
**Final: Audience 9.33 / Critic 6.62 → avg 7.98**

**Opening & viewership trace** [marketing/Fame/reach affect viewers only]

Awareness inputs: base 0.35, marketing 0.55, studioBuzz 0, starFame 0.6, trend 0.1, ipFans 0 → awareness 0.8. Reach cap 440,000 → pool 351,166 → opening 105,350.

| Wk | Viewers | Retention | Driver | Gross | Studio | Distributor |
|---:|---:|---:|---|---:|---:|---:|
| 1 | 105,350 | 1 | opening (aware people watching) | $210,700 | $120,099 | $90,601 |
| 2 | 71,272 | 0.68 | critic 6.62: +3,454 newly aware (buzz) | $142,544 | $81,250 | $61,294 |
| 3 | 43,828 | 0.61 | critic 6.62: +4,466 newly aware (buzz) | $87,656 | $49,964 | $37,692 |
| 4 | 57,031 | 1.3 | audience 9.33: +75,910 newly aware (word of mouth) | $114,062 | $65,015 | $49,047 |
| 5 | 54,965 | 0.96 | audience 9.33: +63,280 newly aware (word of mouth) | $109,930 | $62,660 | $47,270 |
| 6 | 35,063 | 0.64 | audience 9.33: +11,909 newly aware (word of mouth) | $70,126 | $39,972 | $30,154 |
| 7 | 23,784 | 0.68 | audience 9.33: +11,477 newly aware (word of mouth) | $47,568 | $27,114 | $20,454 |
| 8 | 15,963 | 0.67 | audience 9.33: +7,322 newly aware (word of mouth) | $31,926 | $18,198 | $13,728 |
| 9 | 10,733 | 0.67 | audience 9.33: +4,966 newly aware (word of mouth) | $21,466 | $12,236 | $9,230 |
| 10 | 7,215 | 0.67 | audience 9.33: +3,333 newly aware (word of mouth) | $14,430 | $8,225 | $6,205 |
| 11 | 4,850 | 0.67 | audience 9.33: +2,241 newly aware (word of mouth) | $9,700 | $5,529 | $4,171 |
| 12 | 3,260 | 0.67 | audience 9.33: +1,507 newly aware (word of mouth) | $6,520 | $3,716 | $2,804 |
| 13 | 2,192 | 0.67 | audience 9.33: +1,013 newly aware (word of mouth) | $4,384 | $2,499 | $1,885 |
| 14 | 1,473 | 0.67 | audience 9.33: +681 newly aware (word of mouth) | $2,946 | $1,679 | $1,267 |
| 15 | 0 | 0 | audience 9.33: +458 newly aware (word of mouth) | $0 | $0 | $0 |

**Progression trace**

- Prestige awards: Prestige +50: meters_all_70 (Midnight Edge).; Prestige +75: audience_7_5 (Midnight Edge).
- IP fans: {"before":0,"after":20835,"delta":20835}
- Star career: {"fameDelta":11.09,"relDelta":0.25,"grow":0,"level":9,"reasons":"worked together (+)"}
- Distributor trust: Meridian Global earned 215% of its advance back on Midnight Edge with strong reviews (step 0.75)
- Rule labels: LOCKED = causal chain, accounting, fallback/no-campaign, thresholds 4.0/9.0, IP fan inheritance. WORKING ASSUMPTION = all formulas' shapes and numbers.

### Silver Horizon 6 — Comedy + Dinosaurs (sequel)

Released week 800 (year 15.4) · Distributor: XYZ Network · Star: Dee Diaz (L4, Fame 35) · IP: Silver Horizon

**Financial waterfall** [LOCKED rules; amounts provisional]

| Item | Amount |
|---|---:|
| Advance received (project reserve, not revenue) | $132,000 |
| Base cost (unavoidable) | −$60,000 |
| Star fee | −$16,073 |
| Marketing campaign | −$20,000 |
| Paid from studio cash (overrun) | $0 |
| **Unused advance kept at completion** | $35,927 |
| Gross from sales (15 weeks) | $744,806 |
| Distributor royalty (40% of weekly gross) | −$297,922 |
| **Studio take** | $446,884 |
| Net for this title (surplus + take − cash overrun; wages are studio-wide, excluded) | $482,811 |

**Quality trace** [scores are computed, never rolled]

Meters (0–100): Plot 93.3 · Writing 93.81 · Filming 92.16 · Editing 90.2
Inputs: staff points {"plot":935.68,"writing":1017.92,"filming":866.32,"editing":594.76}, Star filming points 75.9 (Star family fit 100), studio Comedy level 5 (+15%), era bar x1.62
Base scores: Audience 9.19 / Critic 9.28 · no weak meter
Combo grades: Audience B (x1.06) / Critic C (x1) · repetition fatigue x0.88 · critic saturation x1
Before expectations (after combo, weakness, fatigue, saturation; pre-clamp): Audience 8.57 / Critic 8.17 · critic generation 2 (−12.0%, undefined) · audience era 1 (−2.0%) · then clamp 0–10 (generation/era 0 = the ones active at game start)
**Final: Audience 8.4 / Critic 7.19 → avg 7.8**

**Opening & viewership trace** [marketing/Fame/reach affect viewers only]

Awareness inputs: base 0.35, marketing 0.55, studioBuzz 0, starFame 0.15, trend 0, ipFans 0.38 → awareness 0.76. Reach cap 376,000 → pool 285,691 → opening 85,707.

| Wk | Viewers | Retention | Driver | Gross | Studio | Distributor |
|---:|---:|---:|---|---:|---:|---:|
| 1 | 85,707 | 1 | opening (aware people watching) | $171,414 | $102,848 | $68,566 |
| 2 | 60,157 | 0.7 | critic 7.19: +4,747 newly aware (buzz) | $120,314 | $72,188 | $48,126 |
| 3 | 37,234 | 0.62 | critic 7.19: +5,758 newly aware (buzz) | $74,468 | $44,681 | $29,787 |
| 4 | 40,826 | 1.1 | audience 8.4: +50,638 newly aware (word of mouth) | $81,652 | $48,991 | $32,661 |
| 5 | 42,805 | 1.05 | audience 8.4: +55,523 newly aware (word of mouth) | $85,610 | $51,366 | $34,244 |
| 6 | 35,020 | 0.82 | audience 8.4: +30,124 newly aware (word of mouth) | $70,040 | $42,024 | $28,016 |
| 7 | 23,335 | 0.67 | audience 8.4: +9,498 newly aware (word of mouth) | $46,670 | $28,002 | $18,668 |
| 8 | 16,054 | 0.69 | audience 8.4: +7,770 newly aware (word of mouth) | $32,108 | $19,265 | $12,843 |
| 9 | 10,986 | 0.68 | audience 8.4: +5,177 newly aware (word of mouth) | $21,972 | $13,183 | $8,789 |
| 10 | 7,525 | 0.68 | audience 8.4: +3,562 newly aware (word of mouth) | $15,050 | $9,030 | $6,020 |
| 11 | 5,153 | 0.68 | audience 8.4: +2,438 newly aware (word of mouth) | $10,306 | $6,184 | $4,122 |
| 12 | 3,529 | 0.68 | audience 8.4: +1,670 newly aware (word of mouth) | $7,058 | $4,235 | $2,823 |
| 13 | 2,417 | 0.68 | audience 8.4: +1,143 newly aware (word of mouth) | $4,834 | $2,900 | $1,934 |
| 14 | 1,655 | 0.68 | audience 8.4: +783 newly aware (word of mouth) | $3,310 | $1,986 | $1,324 |
| 15 | 0 | 0 | audience 8.4: +536 newly aware (word of mouth) | $0 | $0 | $0 |

**Progression trace**

- Prestige awards: Prestige +50: meters_all_70 (Silver Horizon 6).; Prestige +75: audience_7_5 (Silver Horizon 6).
- IP fans: {"before":58503,"after":75187,"delta":16684}
- Star career: {"fameDelta":9.98,"relDelta":0.75,"grow":0,"level":4,"reasons":"worked together (+); project boosted their career (+)"}
- Distributor trust: XYZ Network earned 226% of its advance back on Silver Horizon 6 with strong reviews (step 0.75)
- Rule labels: LOCKED = causal chain, accounting, fallback/no-campaign, thresholds 4.0/9.0, IP fan inheritance. WORKING ASSUMPTION = all formulas' shapes and numbers.

## Cash ledger (studio cash only)

| Week | Kind | Amount | Note |
|---:|---|---:|---|
| 0 | start_cash | $40,000 |  |
| 0 | advance_received | $89,000 | advance from Wolf Pictures (project reserve, not revenue) |
| 0 | advance_spent | $-60,000 | base_cost: unavoidable base cost |
| 7 | advance_spent | $-8,130 | star_fee: Dee Okafor |
| 13 | advance_spent | $-20,000 | campaign: medium |
| 16 | surplus_transfer | $870 | unused advance kept at completion (not sales revenue) |
| 16 | advance_received | $93,000 | advance from Wolf Pictures (project reserve, not revenue) |
| 16 | advance_spent | $-60,000 | base_cost: unavoidable base cost |
| 23 | advance_spent | $-33,000 | star_fee: Bo Hart |
| 23 | star_fee | $-664 | Bo Hart |
| 29 | campaign | $-20,000 | medium |
| 32 | hire | $-20,000 | Liv Diaz |
| 32 | hire | $-20,000 | Gus Okafor |
| 32 | advance_received | $87,000 | advance from Wolf Pictures (project reserve, not revenue) |
| 32 | advance_spent | $-60,000 | base_cost: unavoidable base cost |
| 39 | advance_spent | $-20,203 | star_fee: Sam Diaz |
| 45 | advance_spent | $-6,797 | campaign: medium |
| 45 | campaign | $-13,203 | medium |
| 48 | train | $-15,000 | Liv Diaz |
| 48 | train | $-15,000 | Gus Okafor |
| 48 | advance_received | $81,000 | advance from Orbit Releasing (project reserve, not revenue) |
| 48 | advance_spent | $-60,000 | base_cost: unavoidable base cost |
| 55 | advance_spent | $-19,759 | star_fee: Sam Diaz |
| 61 | advance_spent | $-1,241 | campaign: medium |
| 61 | campaign | $-18,759 | medium |
| 64 | train | $-15,000 | Liv Diaz |
| 64 | train | $-15,000 | Gus Okafor |
| 64 | advance_received | $91,000 | advance from Wolf Pictures (project reserve, not revenue) |
| 64 | advance_spent | $-60,000 | base_cost: unavoidable base cost |
| 71 | advance_spent | $-26,255 | star_fee: Sam Diaz |
| 77 | advance_spent | $-4,745 | campaign: medium |
| 77 | campaign | $-15,255 | medium |
| 80 | train | $-15,000 | Liv Diaz |
| 80 | train | $-15,000 | Sam |
| 80 | advance_received | $102,000 | advance from Orbit Releasing (project reserve, not revenue) |
| 80 | advance_spent | $-60,000 | base_cost: unavoidable base cost |
| 87 | advance_spent | $-33,465 | star_fee: Sam Diaz |
| 93 | advance_spent | $-8,535 | campaign: medium |
| 93 | campaign | $-11,465 | medium |
| 96 | upgrade | $-250,000 | studio capacity 4 -> 6 |
| 96 | hire | $-20,000 | Max Grant |
| 96 | hire | $-20,000 | Lee Lind |
| 96 | advance_received | $128,000 | advance from Wolf Pictures (project reserve, not revenue) |
| 96 | advance_spent | $-60,000 | base_cost: unavoidable base cost |
| 103 | advance_spent | $-31,503 | star_fee: Bo Hart |
| 109 | advance_spent | $-20,000 | campaign: medium |
| 112 | surplus_transfer | $16,497 | unused advance kept at completion (not sales revenue) |
| 112 | upgrade | $-750,000 | studio capacity 6 -> 8 |
| 112 | hire | $-20,000 | Sam Quinn |
| 112 | hire | $-20,000 | Noa Sato |
| 112 | advance_received | $108,000 | advance from Orbit Releasing (project reserve, not revenue) |
| 112 | advance_spent | $-60,000 | base_cost: unavoidable base cost |
| 119 | advance_spent | $-42,555 | star_fee: Sam Diaz |
| 125 | advance_spent | $-5,445 | campaign: medium |
| 125 | campaign | $-14,555 | medium |
| 128 | train | $-15,000 | Sam Quinn |
| 128 | train | $-15,000 | Sam Quinn |
| 128 | advance_received | $103,000 | advance from XYZ Network (project reserve, not revenue) |
| 128 | advance_spent | $-60,000 | base_cost: unavoidable base cost |
| 135 | advance_spent | $-42,169 | star_fee: Sam Diaz |
| 141 | advance_spent | $-831 | campaign: medium |
| 141 | campaign | $-19,169 | medium |
| 144 | train | $-15,000 | Noa Sato |
| 144 | train | $-15,000 | Max Grant |
| 144 | advance_received | $139,000 | advance from Meridian Global (project reserve, not revenue) |
| 144 | advance_spent | $-60,000 | base_cost: unavoidable base cost |
| 151 | advance_spent | $-39,849 | star_fee: Bo Hart |
| 157 | advance_spent | $-20,000 | campaign: medium |
| 160 | surplus_transfer | $19,151 | unused advance kept at completion (not sales revenue) |
| 160 | train | $-15,000 | Sam Quinn |
| 160 | train | $-15,000 | Lee Lind |
| 160 | advance_received | $107,000 | advance from XYZ Network (project reserve, not revenue) |
| 160 | advance_spent | $-60,000 | base_cost: unavoidable base cost |
| 167 | advance_spent | $-39,494 | star_fee: Bo Hart |
| 173 | advance_spent | $-7,506 | campaign: medium |
| 173 | campaign | $-12,494 | medium |
| 176 | train | $-15,000 | Noa Sato |
| 176 | train | $-15,000 | Max Grant |
| 176 | advance_received | $117,000 | advance from Meridian Global (project reserve, not revenue) |
| 176 | advance_spent | $-60,000 | base_cost: unavoidable base cost |
| 183 | advance_spent | $-40,128 | star_fee: Gus Quinn |
| 189 | advance_spent | $-16,872 | campaign: medium |
| 189 | campaign | $-3,128 | medium |
| 192 | train | $-15,000 | Sam Quinn |
| 192 | train | $-15,000 | Lee Lind |
| 192 | advance_received | $142,000 | advance from XYZ Network (project reserve, not revenue) |
| 192 | advance_spent | $-60,000 | base_cost: unavoidable base cost |
| 199 | advance_spent | $-56,303 | star_fee: Bo Hart |
| 205 | advance_spent | $-20,000 | campaign: medium |
| 208 | surplus_transfer | $5,697 | unused advance kept at completion (not sales revenue) |
| 208 | train | $-15,000 | Noa Sato |
| 208 | train | $-15,000 | Max Grant |
| 208 | advance_received | $144,000 | advance from Meridian Global (project reserve, not revenue) |
| 208 | advance_spent | $-60,000 | base_cost: unavoidable base cost |
| 215 | advance_spent | $-55,413 | star_fee: Bo Hart |
| 221 | advance_spent | $-20,000 | campaign: medium |
| 224 | surplus_transfer | $8,587 | unused advance kept at completion (not sales revenue) |
| 224 | train | $-15,000 | Sam Quinn |
| 224 | train | $-15,000 | Lee Lind |
| 224 | advance_received | $135,000 | advance from XYZ Network (project reserve, not revenue) |
| 224 | advance_spent | $-60,000 | base_cost: unavoidable base cost |
| 231 | advance_spent | $-54,711 | star_fee: Sam Diaz |
| 237 | advance_spent | $-20,000 | campaign: medium |
| 240 | surplus_transfer | $289 | unused advance kept at completion (not sales revenue) |
| 240 | train | $-15,000 | Noa Sato |
| 240 | train | $-15,000 | Max Grant |
| 240 | advance_received | $99,000 | advance from Orbit Releasing (project reserve, not revenue) |
| 240 | advance_spent | $-60,000 | base_cost: unavoidable base cost |
| 247 | advance_spent | $-39,000 | star_fee: Gus Quinn |
| 247 | star_fee | $-9,377 | Gus Quinn |
| 253 | campaign | $-20,000 | medium |
| 256 | train | $-15,000 | Sam Quinn |
| 256 | train | $-15,000 | Lee Lind |
| 256 | advance_received | $120,000 | advance from XYZ Network (project reserve, not revenue) |
| 256 | advance_spent | $-60,000 | base_cost: unavoidable base cost |
| 263 | advance_spent | $-48,268 | star_fee: Gus Quinn |
| 269 | advance_spent | $-11,732 | campaign: medium |
| 269 | campaign | $-8,268 | medium |
| 272 | train | $-15,000 | Alex |
| 272 | train | $-15,000 | Noa Sato |
| 272 | advance_received | $137,000 | advance from Meridian Global (project reserve, not revenue) |
| 272 | advance_spent | $-60,000 | base_cost: unavoidable base cost |
| 279 | advance_spent | $-33,815 | star_fee: Rae Hart |
| 285 | advance_spent | $-20,000 | campaign: medium |
| 288 | surplus_transfer | $23,185 | unused advance kept at completion (not sales revenue) |
| 288 | train | $-15,000 | Gus Okafor |
| 288 | train | $-15,000 | Max Grant |
| 288 | advance_received | $140,000 | advance from XYZ Network (project reserve, not revenue) |
| 288 | advance_spent | $-60,000 | base_cost: unavoidable base cost |
| 295 | advance_spent | $-66,819 | star_fee: Bo Hart |
| 301 | advance_spent | $-13,181 | campaign: medium |
| 301 | campaign | $-6,819 | medium |
| 304 | train | $-15,000 | Liv Diaz |
| 304 | train | $-15,000 | Sam |
| 304 | advance_received | $148,000 | advance from XYZ Network (project reserve, not revenue) |
| 304 | advance_spent | $-60,000 | base_cost: unavoidable base cost |
| 311 | advance_spent | $-33,724 | star_fee: Sam Lind |
| 317 | advance_spent | $-20,000 | campaign: medium |
| 320 | surplus_transfer | $34,276 | unused advance kept at completion (not sales revenue) |
| 320 | train | $-15,000 | Sam Quinn |
| 320 | train | $-15,000 | Lee Lind |
| 320 | advance_received | $151,000 | advance from XYZ Network (project reserve, not revenue) |
| 320 | advance_spent | $-60,000 | base_cost: unavoidable base cost |
| 327 | advance_spent | $-26,173 | star_fee: Kai Hart |
| 333 | advance_spent | $-20,000 | campaign: medium |
| 336 | surplus_transfer | $44,827 | unused advance kept at completion (not sales revenue) |
| 336 | train | $-15,000 | Alex |
| 336 | train | $-15,000 | Gus Okafor |
| 336 | advance_received | $143,000 | advance from XYZ Network (project reserve, not revenue) |
| 336 | advance_spent | $-60,000 | base_cost: unavoidable base cost |
| 343 | advance_spent | $-26,155 | star_fee: Kai Hart |
| 349 | advance_spent | $-20,000 | campaign: medium |
| 352 | surplus_transfer | $36,845 | unused advance kept at completion (not sales revenue) |
| 352 | train | $-15,000 | Noa Sato |
| 352 | train | $-15,000 | Max Grant |
| 352 | advance_received | $135,000 | advance from XYZ Network (project reserve, not revenue) |
| 352 | advance_spent | $-60,000 | base_cost: unavoidable base cost |
| 359 | advance_spent | $-36,388 | star_fee: Kai Hart |
| 365 | advance_spent | $-20,000 | campaign: medium |
| 368 | surplus_transfer | $18,612 | unused advance kept at completion (not sales revenue) |
| 368 | train | $-15,000 | Liv Diaz |
| 368 | train | $-15,000 | Sam |
| 368 | advance_received | $145,000 | advance from XYZ Network (project reserve, not revenue) |
| 368 | advance_spent | $-60,000 | base_cost: unavoidable base cost |
| 375 | advance_spent | $-42,315 | star_fee: Kai Hart |
| 381 | advance_spent | $-20,000 | campaign: medium |
| 384 | surplus_transfer | $22,685 | unused advance kept at completion (not sales revenue) |
| 384 | train | $-15,000 | Sam Quinn |
| 384 | train | $-15,000 | Lee Lind |
| 384 | advance_received | $112,000 | advance from Meridian Global (project reserve, not revenue) |
| 384 | advance_spent | $-60,000 | base_cost: unavoidable base cost |
| 391 | advance_spent | $-52,000 | star_fee: Bo Hart |
| 391 | star_fee | $-13,590 | Bo Hart |
| 397 | campaign | $-20,000 | medium |
| 400 | train | $-15,000 | Alex |
| 400 | train | $-15,000 | Gus Okafor |
| 400 | advance_received | $136,000 | advance from XYZ Network (project reserve, not revenue) |
| 400 | advance_spent | $-60,000 | base_cost: unavoidable base cost |
| 407 | advance_spent | $-42,441 | star_fee: Sam Lind |
| 413 | advance_spent | $-20,000 | campaign: medium |
| 416 | surplus_transfer | $13,559 | unused advance kept at completion (not sales revenue) |
| 416 | train | $-15,000 | Noa Sato |
| 416 | train | $-15,000 | Max Grant |
| 416 | advance_received | $191,000 | advance from Meridian Global (project reserve, not revenue) |
| 416 | advance_spent | $-60,000 | base_cost: unavoidable base cost |
| 423 | advance_spent | $-27,672 | star_fee: Max Okafor |
| 429 | advance_spent | $-20,000 | campaign: medium |
| 432 | surplus_transfer | $83,328 | unused advance kept at completion (not sales revenue) |
| 432 | train | $-15,000 | Liv Diaz |
| 432 | train | $-15,000 | Sam |
| 432 | advance_received | $141,000 | advance from Meridian Global (project reserve, not revenue) |
| 432 | advance_spent | $-60,000 | base_cost: unavoidable base cost |
| 439 | advance_spent | $-63,309 | star_fee: Gus Quinn |
| 445 | advance_spent | $-17,691 | campaign: medium |
| 445 | campaign | $-2,309 | medium |
| 448 | train | $-15,000 | Sam Quinn |
| 448 | train | $-15,000 | Lee Lind |
| 448 | advance_received | $159,000 | advance from Meridian Global (project reserve, not revenue) |
| 448 | advance_spent | $-60,000 | base_cost: unavoidable base cost |
| 455 | advance_spent | $-44,080 | star_fee: Rae Hart |
| 461 | advance_spent | $-20,000 | campaign: medium |
| 464 | surplus_transfer | $34,920 | unused advance kept at completion (not sales revenue) |
| 464 | train | $-15,000 | Alex |
| 464 | train | $-15,000 | Gus Okafor |
| 464 | advance_received | $139,000 | advance from XYZ Network (project reserve, not revenue) |
| 464 | advance_spent | $-60,000 | base_cost: unavoidable base cost |
| 471 | advance_spent | $-44,070 | star_fee: Rae Hart |
| 477 | advance_spent | $-20,000 | campaign: medium |
| 480 | surplus_transfer | $14,930 | unused advance kept at completion (not sales revenue) |
| 480 | train | $-15,000 | Noa Sato |
| 480 | train | $-15,000 | Max Grant |
| 480 | advance_received | $150,000 | advance from Meridian Global (project reserve, not revenue) |
| 480 | advance_spent | $-60,000 | base_cost: unavoidable base cost |
| 487 | advance_spent | $-69,886 | star_fee: Gus Quinn |
| 493 | advance_spent | $-20,000 | campaign: medium |
| 496 | surplus_transfer | $114 | unused advance kept at completion (not sales revenue) |
| 496 | train | $-15,000 | Liv Diaz |
| 496 | train | $-15,000 | Sam |
| 496 | advance_received | $180,000 | advance from Meridian Global (project reserve, not revenue) |
| 496 | advance_spent | $-60,000 | base_cost: unavoidable base cost |
| 503 | advance_spent | $-33,427 | star_fee: Max Okafor |
| 509 | advance_spent | $-20,000 | campaign: medium |
| 512 | surplus_transfer | $66,573 | unused advance kept at completion (not sales revenue) |
| 512 | train | $-15,000 | Sam Quinn |
| 512 | train | $-15,000 | Lee Lind |
| 512 | advance_received | $156,000 | advance from Meridian Global (project reserve, not revenue) |
| 512 | advance_spent | $-60,000 | base_cost: unavoidable base cost |
| 519 | advance_spent | $-68,239 | star_fee: Gus Quinn |
| 525 | advance_spent | $-20,000 | campaign: medium |
| 528 | surplus_transfer | $7,761 | unused advance kept at completion (not sales revenue) |
| 528 | train | $-15,000 | Alex |
| 528 | train | $-15,000 | Gus Okafor |
| 528 | advance_received | $146,000 | advance from Meridian Global (project reserve, not revenue) |
| 528 | advance_spent | $-60,000 | base_cost: unavoidable base cost |
| 535 | advance_spent | $-49,300 | star_fee: Sam Lind |
| 541 | advance_spent | $-20,000 | campaign: medium |
| 544 | surplus_transfer | $16,700 | unused advance kept at completion (not sales revenue) |
| 544 | train | $-15,000 | Noa Sato |
| 544 | train | $-15,000 | Max Grant |
| 544 | advance_received | $160,000 | advance from XYZ Network (project reserve, not revenue) |
| 544 | advance_spent | $-60,000 | base_cost: unavoidable base cost |
| 551 | advance_spent | $-49,292 | star_fee: Sam Lind |
| 557 | advance_spent | $-20,000 | campaign: medium |
| 560 | surplus_transfer | $30,708 | unused advance kept at completion (not sales revenue) |
| 560 | train | $-15,000 | Liv Diaz |
| 560 | train | $-15,000 | Sam |
| 560 | advance_received | $131,000 | advance from XYZ Network (project reserve, not revenue) |
| 560 | advance_spent | $-60,000 | base_cost: unavoidable base cost |
| 567 | advance_spent | $-55,113 | star_fee: Sam Lind |
| 573 | advance_spent | $-15,887 | campaign: medium |
| 573 | campaign | $-4,113 | medium |
| 576 | train | $-15,000 | Sam Quinn |
| 576 | train | $-15,000 | Lee Lind |
| 576 | advance_received | $179,000 | advance from Meridian Global (project reserve, not revenue) |
| 576 | advance_spent | $-60,000 | base_cost: unavoidable base cost |
| 583 | advance_spent | $-46,583 | star_fee: Max Okafor |
| 589 | advance_spent | $-20,000 | campaign: medium |
| 592 | surplus_transfer | $52,417 | unused advance kept at completion (not sales revenue) |
| 592 | train | $-15,000 | Alex |
| 592 | train | $-15,000 | Gus Okafor |
| 592 | advance_received | $107,000 | advance from Orbit Releasing (project reserve, not revenue) |
| 592 | advance_spent | $-60,000 | base_cost: unavoidable base cost |
| 599 | advance_spent | $-47,000 | star_fee: Gus Quinn |
| 599 | star_fee | $-19,504 | Gus Quinn |
| 605 | campaign | $-20,000 | medium |
| 608 | train | $-15,000 | Noa Sato |
| 608 | train | $-15,000 | Max Grant |
| 608 | advance_received | $139,000 | advance from Meridian Global (project reserve, not revenue) |
| 608 | advance_spent | $-60,000 | base_cost: unavoidable base cost |
| 615 | advance_spent | $-68,420 | star_fee: Sam Diaz |
| 621 | advance_spent | $-10,580 | campaign: medium |
| 621 | campaign | $-9,420 | medium |
| 624 | train | $-15,000 | Sam |
| 624 | train | $-15,000 | Liv Diaz |
| 624 | advance_received | $159,000 | advance from Meridian Global (project reserve, not revenue) |
| 624 | advance_spent | $-60,000 | base_cost: unavoidable base cost |
| 631 | advance_spent | $-3,418 | star_fee: Eli Park |
| 637 | advance_spent | $-20,000 | campaign: medium |
| 640 | surplus_transfer | $75,582 | unused advance kept at completion (not sales revenue) |
| 640 | train | $-15,000 | Sam Quinn |
| 640 | train | $-15,000 | Lee Lind |
| 640 | advance_received | $179,000 | advance from Meridian Global (project reserve, not revenue) |
| 640 | advance_spent | $-60,000 | base_cost: unavoidable base cost |
| 647 | advance_spent | $-34,034 | star_fee: Gus Diaz |
| 653 | advance_spent | $-20,000 | campaign: medium |
| 656 | surplus_transfer | $64,966 | unused advance kept at completion (not sales revenue) |
| 656 | train | $-15,000 | Alex |
| 656 | train | $-15,000 | Gus Okafor |
| 656 | advance_received | $166,000 | advance from Meridian Global (project reserve, not revenue) |
| 656 | advance_spent | $-60,000 | base_cost: unavoidable base cost |
| 663 | advance_spent | $-65,042 | star_fee: Gus Quinn |
| 669 | advance_spent | $-20,000 | campaign: medium |
| 672 | surplus_transfer | $20,958 | unused advance kept at completion (not sales revenue) |
| 672 | train | $-15,000 | Noa Sato |
| 672 | train | $-15,000 | Max Grant |
| 672 | advance_received | $133,000 | advance from Meridian Global (project reserve, not revenue) |
| 672 | advance_spent | $-60,000 | base_cost: unavoidable base cost |
| 679 | advance_spent | $-10,526 | star_fee: Eli Park |
| 685 | advance_spent | $-20,000 | campaign: medium |
| 688 | surplus_transfer | $42,474 | unused advance kept at completion (not sales revenue) |
| 688 | train | $-15,000 | Sam |
| 688 | train | $-15,000 | Liv Diaz |
| 688 | advance_received | $158,000 | advance from XYZ Network (project reserve, not revenue) |
| 688 | advance_spent | $-60,000 | base_cost: unavoidable base cost |
| 695 | advance_spent | $-44,519 | star_fee: Gus Diaz |
| 701 | advance_spent | $-20,000 | campaign: medium |
| 704 | surplus_transfer | $33,481 | unused advance kept at completion (not sales revenue) |
| 704 | train | $-15,000 | Sam Quinn |
| 704 | train | $-15,000 | Lee Lind |
| 704 | advance_received | $142,000 | advance from Meridian Global (project reserve, not revenue) |
| 704 | advance_spent | $-60,000 | base_cost: unavoidable base cost |
| 711 | advance_spent | $-44,508 | star_fee: Gus Diaz |
| 717 | advance_spent | $-20,000 | campaign: medium |
| 720 | surplus_transfer | $17,492 | unused advance kept at completion (not sales revenue) |
| 720 | train | $-15,000 | Alex |
| 720 | train | $-15,000 | Gus Okafor |
| 720 | advance_received | $151,000 | advance from XYZ Network (project reserve, not revenue) |
| 720 | advance_spent | $-60,000 | base_cost: unavoidable base cost |
| 727 | advance_spent | $-16,804 | star_fee: Eli Park |
| 733 | advance_spent | $-20,000 | campaign: medium |
| 736 | surplus_transfer | $54,196 | unused advance kept at completion (not sales revenue) |
| 736 | train | $-15,000 | Noa Sato |
| 736 | train | $-15,000 | Max Grant |
| 736 | advance_received | $160,000 | advance from XYZ Network (project reserve, not revenue) |
| 736 | advance_spent | $-60,000 | base_cost: unavoidable base cost |
| 743 | advance_spent | $-63,660 | star_fee: Bo Hart |
| 749 | advance_spent | $-20,000 | campaign: medium |
| 752 | surplus_transfer | $16,340 | unused advance kept at completion (not sales revenue) |
| 752 | train | $-15,000 | Sam |
| 752 | train | $-15,000 | Liv Diaz |
| 752 | advance_received | $122,000 | advance from XYZ Network (project reserve, not revenue) |
| 752 | advance_spent | $-60,000 | base_cost: unavoidable base cost |
| 759 | advance_spent | $-62,000 | star_fee: Bo Hart |
| 759 | star_fee | $-1,633 | Bo Hart |
| 765 | campaign | $-20,000 | medium |
| 768 | train | $-15,000 | Sam Quinn |
| 768 | train | $-15,000 | Lee Lind |
| 768 | advance_received | $175,000 | advance from Meridian Global (project reserve, not revenue) |
| 768 | advance_spent | $-60,000 | base_cost: unavoidable base cost |
| 775 | advance_spent | $-63,607 | star_fee: Bo Hart |
| 781 | advance_spent | $-20,000 | campaign: medium |
| 784 | surplus_transfer | $31,393 | unused advance kept at completion (not sales revenue) |
| 784 | train | $-15,000 | Alex |
| 784 | train | $-15,000 | Gus Okafor |
| 784 | advance_received | $132,000 | advance from XYZ Network (project reserve, not revenue) |
| 784 | advance_spent | $-60,000 | base_cost: unavoidable base cost |
| 791 | advance_spent | $-16,073 | star_fee: Dee Diaz |
| 797 | advance_spent | $-20,000 | campaign: medium |
| 800 | surplus_transfer | $35,927 | unused advance kept at completion (not sales revenue) |
| all | payroll (total) | $-6,318,000 | aggregated |
| all | upkeep (total) | $-489,000 | aggregated |
| all | studio_take (total) | $21,824,429 | aggregated |
