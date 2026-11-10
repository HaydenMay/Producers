# Single career — seed 42, strategy franchise-builder

> **Simulation assumptions, not design locks.** All numbers come from provisional config values. Nothing here is official balance.

- Ruleset: `v9.61-movie-kernel-0.1` · Config: `gate25-candidate` (hash `a2e9d917`)
- Seed: 42
- Strategy: franchise-builder
- Decisions: 119
- Modelled: movies; distributor advances/royalties/trust; Stars (families, budgets, fallback, callbacks, relationships); marketing + studio buzz; scores + legs; IP fans; Prestige milestones; studio genre levels; trends; staff XP/hire/train; theme research + staff pitches
- **Not modelled:** limited series; TV series/seasons/renewals/hiatus/announcements; streaming service/subscribers; eras beyond a gentle quality bar; studio upgrades/format unlock gates; genre unlocks; late-game concurrency

## Career summary

- Weeks: 95 (1.8 years) · Releases: 5 · Cancellations: 0
- End cash: $846,934 (start $40,000) · Negative-cash weeks: 7
- Prestige: 0 (0 awards)
- Staff: Sam [P 41 W 39 F 32 E 28, XP 800]; Alex [P 31 W 34 F 39 E 37, XP 800]; Dee Fox [P 31 W 42 F 42 E 31, XP 320]; Fin Lowe [P 39 W 34 F 30 E 33, XP 320]
- Studio genre levels (exact genre): Action xp 4, Horror xp 1
- IP fans: Dead Shadow 0; Broken Shadow 1,949; Iron Edge 13,754; Midnight Pulse 8,598
- Distributor trust: wolf 3.82, starlight 2.50, xyz 2.50, orbit 2.50, meridian 2.50
- Stars hired: Jo Vale (L6, Fame 47, rel 2.00); Dee Lind (L2, Fame 15, rel 1.75); Mo Lind (L7, Fame 86, rel 1.75)

## Releases (full causal trace)

### Dead Shadow — Action + Sports (new)

Released week 16 (year 0.3) · Distributor: Wolf Pictures · Star: Jo Vale (L6, Fame 47) · IP: Dead Shadow

**Financial waterfall** [LOCKED rules; amounts provisional]

| Item | Amount |
|---|---:|
| Advance received (project reserve, not revenue) | $73,000 |
| Base cost (unavoidable) | −$60,000 |
| Star fee | −$29,239 |
| Marketing campaign | −$0 |
| Paid from studio cash (overrun) | $16,239 |
| **Unused advance kept at completion** | $0 |
| Gross from sales (11 weeks) | $170,060 |
| Distributor royalty (33% of weekly gross) | −$56,120 |
| **Studio take** | $113,940 |
| Net for this title (surplus + take − cash overrun; wages are studio-wide, excluded) | $97,701 |

**Quality trace** [scores are computed, never rolled]

Meters (0–100): Plot 56.65 · Writing 57.83 · Filming 65.12 · Editing 46.95
Inputs: staff points {"plot":55.04,"writing":57.76,"filming":51.49,"editing":35.83}, Star filming points 42.24 (Star family fit 64), studio Action level 0 (+0%), era bar x1.01
Base scores: Audience 5.64 / Critic 5.69 · no weak meter
Combo grades: Audience D (x0.9) / Critic F (x0.78) · repetition fatigue x1 · critic saturation x1
**Final: Audience 5.08 / Critic 4.44 → avg 4.76**

**Opening & viewership trace** [marketing/Fame/reach affect viewers only]

Awareness inputs: base 0.35, marketing 0, studioBuzz 0, starFame 0.22, trend 0, ipFans 0 → awareness 0.43. Reach cap 264,000 → pool 114,103 → opening 34,231.

| Wk | Viewers | Retention | Driver | Gross | Studio | Distributor |
|---:|---:|---:|---|---:|---:|---:|
| 1 | 34,231 | 1 | opening (aware people watching) | $68,462 | $45,870 | $22,592 |
| 2 | 19,583 | 0.57 | critic 4.44: no buzz | $39,166 | $26,241 | $12,925 |
| 3 | 11,664 | 0.6 | critic 4.44: no buzz | $23,328 | $15,630 | $7,698 |
| 4 | 7,623 | 0.65 | audience 5.08: +373 newly aware (word of mouth) | $15,246 | $10,215 | $5,031 |
| 5 | 4,761 | 0.62 | audience 5.08: +244 newly aware (word of mouth) | $9,522 | $6,380 | $3,142 |
| 6 | 2,974 | 0.62 | audience 5.08: +152 newly aware (word of mouth) | $5,948 | $3,985 | $1,963 |
| 7 | 1,857 | 0.62 | audience 5.08: +95 newly aware (word of mouth) | $3,714 | $2,488 | $1,226 |
| 8 | 1,160 | 0.62 | audience 5.08: +59 newly aware (word of mouth) | $2,320 | $1,554 | $766 |
| 9 | 725 | 0.63 | audience 5.08: +37 newly aware (word of mouth) | $1,450 | $972 | $479 |
| 10 | 452 | 0.62 | audience 5.08: +23 newly aware (word of mouth) | $904 | $606 | $298 |
| 11 | 0 | 0 | audience 5.08: +14 newly aware (word of mouth) | $0 | $0 | $0 |

**Progression trace**

- Prestige awards: none (no milestone reached)
- IP fans: {"before":0,"after":0,"delta":0}
- Star career: {"fameDelta":-0.43,"relDelta":-0.5,"grow":6,"level":5,"reasons":"worked together (+); project hurt their career: Fame fell (-)"}
- Distributor trust: Wolf Pictures earned back 77% of its $73,000 advance on Dead Shadow and reviews were poor (step -0.24)
- Rule labels: LOCKED = causal chain, accounting, fallback/no-campaign, thresholds 4.0/9.0, IP fan inheritance. WORKING ASSUMPTION = all formulas' shapes and numbers.

### Broken Shadow — Horror + Superheroes (new)

Released week 32 (year 0.6) · Distributor: Wolf Pictures · Star: Dee Lind (L2, Fame 15) · IP: Broken Shadow

**Financial waterfall** [LOCKED rules; amounts provisional]

| Item | Amount |
|---|---:|
| Advance received (project reserve, not revenue) | $91,000 |
| Base cost (unavoidable) | −$60,000 |
| Star fee | −$8,809 |
| Marketing campaign | −$20,000 |
| Paid from studio cash (overrun) | $0 |
| **Unused advance kept at completion** | $2,191 |
| Gross from sales (12 weeks) | $320,936 |
| Distributor royalty (31% of weekly gross) | −$99,490 |
| **Studio take** | $221,446 |
| Net for this title (surplus + take − cash overrun; wages are studio-wide, excluded) | $223,637 |

**Quality trace** [scores are computed, never rolled]

Meters (0–100): Plot 57.97 · Writing 59.53 · Filming 61.57 · Editing 48.42
Inputs: staff points {"plot":58.78,"writing":62.69,"filming":55.69,"editing":38.47}, Star filming points 25.74 (Star family fit 39), studio Horror level 0 (+0%), era bar x1.02
Base scores: Audience 5.61 / Critic 5.76 · no weak meter
Combo grades: Audience D (x0.9) / Critic A (x1.15) · repetition fatigue x1 · critic saturation x1
**Final: Audience 5.05 / Critic 6.63 → avg 5.84**

**Opening & viewership trace** [marketing/Fame/reach affect viewers only]

Awareness inputs: base 0.35, marketing 0.55, studioBuzz 0, starFame 0.08, trend 0.4, ipFans 0 → awareness 0.75. Reach cap 264,000 → pool 197,450 → opening 59,235.

| Wk | Viewers | Retention | Driver | Gross | Studio | Distributor |
|---:|---:|---:|---|---:|---:|---:|
| 1 | 59,235 | 1 | opening (aware people watching) | $118,470 | $81,744 | $36,726 |
| 2 | 40,307 | 0.68 | critic 6.63: +2,603 newly aware (buzz) | $80,614 | $55,624 | $24,990 |
| 3 | 24,984 | 0.62 | critic 6.63: +3,150 newly aware (buzz) | $49,968 | $34,478 | $15,490 |
| 4 | 13,918 | 0.56 | audience 5.05: +500 newly aware (word of mouth) | $27,836 | $19,207 | $8,629 |
| 5 | 8,648 | 0.62 | audience 5.05: +278 newly aware (word of mouth) | $17,296 | $11,934 | $5,362 |
| 6 | 5,374 | 0.62 | audience 5.05: +173 newly aware (word of mouth) | $10,748 | $7,416 | $3,332 |
| 7 | 3,339 | 0.62 | audience 5.05: +107 newly aware (word of mouth) | $6,678 | $4,608 | $2,070 |
| 8 | 2,075 | 0.62 | audience 5.05: +67 newly aware (word of mouth) | $4,150 | $2,864 | $1,287 |
| 9 | 1,289 | 0.62 | audience 5.05: +41 newly aware (word of mouth) | $2,578 | $1,779 | $799 |
| 10 | 801 | 0.62 | audience 5.05: +26 newly aware (word of mouth) | $1,602 | $1,105 | $497 |
| 11 | 498 | 0.62 | audience 5.05: +16 newly aware (word of mouth) | $996 | $687 | $309 |
| 12 | 0 | 0 | audience 5.05: +10 newly aware (word of mouth) | $0 | $0 | $0 |

**Progression trace**

- Prestige awards: none (no milestone reached)
- IP fans: {"before":0,"after":2157,"delta":2157}
- Star career: {"fameDelta":2.17,"relDelta":0.75,"grow":6,"level":2,"reasons":"worked together (+); project boosted their career (+)"}
- Distributor trust: Wolf Pictures earned 109% of its advance back on Broken Shadow (step 0.1)
- Rule labels: LOCKED = causal chain, accounting, fallback/no-campaign, thresholds 4.0/9.0, IP fan inheritance. WORKING ASSUMPTION = all formulas' shapes and numbers.

### Iron Edge — Action + Superheroes (new)

Released week 48 (year 0.9) · Distributor: Wolf Pictures · Star: Jo Vale (L6, Fame 47) · IP: Iron Edge

**Financial waterfall** [LOCKED rules; amounts provisional]

| Item | Amount |
|---|---:|
| Advance received (project reserve, not revenue) | $104,000 |
| Base cost (unavoidable) | −$60,000 |
| Star fee | −$28,778 |
| Marketing campaign | −$20,000 |
| Paid from studio cash (overrun) | $4,778 |
| **Unused advance kept at completion** | $0 |
| Gross from sales (15 weeks) | $388,810 |
| Distributor royalty (31% of weekly gross) | −$120,531 |
| **Studio take** | $268,279 |
| Net for this title (surplus + take − cash overrun; wages are studio-wide, excluded) | $263,501 |

**Quality trace** [scores are computed, never rolled]

Meters (0–100): Plot 59.92 · Writing 61.68 · Filming 67.96 · Editing 50.43
Inputs: staff points {"plot":64.49,"writing":69.42,"filming":61.49,"editing":42.19}, Star filming points 47.58 (Star family fit 70), studio Action level 1 (+3%), era bar x1.04
Base scores: Audience 5.97 / Critic 6.03 · no weak meter
Combo grades: Audience C (x1) / Critic A (x1.15) · repetition fatigue x1 · critic saturation x1
**Final: Audience 5.97 / Critic 6.94 → avg 6.46**

**Opening & viewership trace** [marketing/Fame/reach affect viewers only]

Awareness inputs: base 0.35, marketing 0.55, studioBuzz 0, starFame 0.21, trend 0.4, ipFans 0 → awareness 0.78. Reach cap 264,000 → pool 205,879 → opening 61,764.

| Wk | Viewers | Retention | Driver | Gross | Studio | Distributor |
|---:|---:|---:|---|---:|---:|---:|
| 1 | 61,764 | 1 | opening (aware people watching) | $123,528 | $85,234 | $38,294 |
| 2 | 42,627 | 0.69 | critic 6.94: +2,706 newly aware (buzz) | $85,254 | $58,825 | $26,429 |
| 3 | 26,281 | 0.62 | critic 6.94: +3,385 newly aware (buzz) | $52,562 | $36,268 | $16,294 |
| 4 | 18,038 | 0.69 | audience 5.97: +10,197 newly aware (word of mouth) | $36,076 | $24,892 | $11,184 |
| 5 | 13,082 | 0.73 | audience 5.97: +6,999 newly aware (word of mouth) | $26,164 | $18,053 | $8,111 |
| 6 | 9,487 | 0.73 | audience 5.97: +5,076 newly aware (word of mouth) | $18,974 | $13,092 | $5,882 |
| 7 | 6,881 | 0.73 | audience 5.97: +3,681 newly aware (word of mouth) | $13,762 | $9,496 | $4,266 |
| 8 | 4,990 | 0.73 | audience 5.97: +2,670 newly aware (word of mouth) | $9,980 | $6,886 | $3,094 |
| 9 | 3,619 | 0.73 | audience 5.97: +1,936 newly aware (word of mouth) | $7,238 | $4,994 | $2,244 |
| 10 | 2,625 | 0.73 | audience 5.97: +1,404 newly aware (word of mouth) | $5,250 | $3,623 | $1,628 |
| 11 | 1,903 | 0.72 | audience 5.97: +1,018 newly aware (word of mouth) | $3,806 | $2,626 | $1,180 |
| 12 | 1,381 | 0.73 | audience 5.97: +738 newly aware (word of mouth) | $2,762 | $1,906 | $856 |
| 13 | 1,001 | 0.72 | audience 5.97: +536 newly aware (word of mouth) | $2,002 | $1,381 | $621 |
| 14 | 726 | 0.73 | audience 5.97: +388 newly aware (word of mouth) | $1,452 | $1,002 | $450 |
| 15 | 0 | 0 | audience 5.97: +282 newly aware (word of mouth) | $0 | $0 | $0 |

**Progression trace**

- Prestige awards: none (no milestone reached)
- IP fans: {"before":0,"after":4541,"delta":4541}
- Star career: {"fameDelta":4.12,"relDelta":0.75,"grow":6,"level":6,"reasons":"worked together (+); project boosted their career (+)"}
- Distributor trust: Wolf Pictures earned 116% of its advance back on Iron Edge (step 0.22)
- Rule labels: LOCKED = causal chain, accounting, fallback/no-campaign, thresholds 4.0/9.0, IP fan inheritance. WORKING ASSUMPTION = all formulas' shapes and numbers.

### Midnight Pulse — Action + Superheroes (new)

Released week 64 (year 1.2) · Distributor: Wolf Pictures · Star: Mo Lind (L7, Fame 86) · IP: Midnight Pulse

**Financial waterfall** [LOCKED rules; amounts provisional]

| Item | Amount |
|---|---:|
| Advance received (project reserve, not revenue) | $113,000 |
| Base cost (unavoidable) | −$60,000 |
| Star fee | −$89,738 |
| Marketing campaign | −$20,000 |
| Paid from studio cash (overrun) | $56,738 |
| **Unused advance kept at completion** | $0 |
| Gross from sales (15 weeks) | $509,580 |
| Distributor royalty (31% of weekly gross) | −$157,970 |
| **Studio take** | $351,610 |
| Net for this title (surplus + take − cash overrun; wages are studio-wide, excluded) | $294,872 |

**Quality trace** [scores are computed, never rolled]

Meters (0–100): Plot 75.16 · Writing 77.42 · Filming 78.6 · Editing 66.08
Inputs: staff points {"plot":132.05,"writing":149.63,"filming":123.21,"editing":81.75}, Star filming points 67.98 (Star family fit 100), studio Action level 1 (+3%), era bar x1.05
Base scores: Audience 7.35 / Critic 7.51 · no weak meter
Combo grades: Audience C (x1) / Critic A (x1.15) · repetition fatigue x0.95 · critic saturation x0.9
**Final: Audience 6.98 / Critic 7.38 → avg 7.18**

**Opening & viewership trace** [marketing/Fame/reach affect viewers only]

Awareness inputs: base 0.35, marketing 0.55, studioBuzz 0, starFame 0.47, trend 0.1, ipFans 0 → awareness 0.77. Reach cap 264,000 → pool 203,542 → opening 61,063.

| Wk | Viewers | Retention | Driver | Gross | Studio | Distributor |
|---:|---:|---:|---|---:|---:|---:|
| 1 | 61,063 | 1 | opening (aware people watching) | $122,126 | $84,267 | $37,859 |
| 2 | 43,250 | 0.71 | critic 7.38: +3,453 newly aware (buzz) | $86,500 | $59,685 | $26,815 |
| 3 | 26,704 | 0.62 | critic 7.38: +4,233 newly aware (buzz) | $53,408 | $36,852 | $16,556 |
| 4 | 22,305 | 0.84 | audience 6.98: +21,150 newly aware (word of mouth) | $44,610 | $30,781 | $13,829 |
| 5 | 18,981 | 0.85 | audience 6.98: +17,666 newly aware (word of mouth) | $37,962 | $26,194 | $11,768 |
| 6 | 16,153 | 0.85 | audience 6.98: +15,033 newly aware (word of mouth) | $32,306 | $22,291 | $10,015 |
| 7 | 13,746 | 0.85 | audience 6.98: +12,793 newly aware (word of mouth) | $27,492 | $18,969 | $8,523 |
| 8 | 11,697 | 0.85 | audience 6.98: +10,887 newly aware (word of mouth) | $23,394 | $16,142 | $7,252 |
| 9 | 9,954 | 0.85 | audience 6.98: +9,264 newly aware (word of mouth) | $19,908 | $13,737 | $6,171 |
| 10 | 8,471 | 0.85 | audience 6.98: +7,884 newly aware (word of mouth) | $16,942 | $11,690 | $5,252 |
| 11 | 7,209 | 0.85 | audience 6.98: +6,709 newly aware (word of mouth) | $14,418 | $9,948 | $4,470 |
| 12 | 6,134 | 0.85 | audience 6.98: +5,710 newly aware (word of mouth) | $12,268 | $8,465 | $3,803 |
| 13 | 5,220 | 0.85 | audience 6.98: +4,858 newly aware (word of mouth) | $10,440 | $7,204 | $3,236 |
| 14 | 3,903 | 0.75 | audience 6.98: +2,499 newly aware (word of mouth) | $7,806 | $5,386 | $2,420 |
| 15 | 0 | 0 | audience 6.98: +1,274 newly aware (word of mouth) | $0 | $0 | $0 |

**Progression trace**

- Prestige awards: none (no milestone reached)
- IP fans: {"before":0,"after":8887,"delta":8887}
- Star career: {"fameDelta":6.86,"relDelta":0.75,"grow":0,"level":7,"reasons":"worked together (+); project boosted their career (+)"}
- Distributor trust: Wolf Pictures earned 140% of its advance back on Midnight Pulse with strong reviews (step 0.46)
- Rule labels: LOCKED = causal chain, accounting, fallback/no-campaign, thresholds 4.0/9.0, IP fan inheritance. WORKING ASSUMPTION = all formulas' shapes and numbers.

### Iron Edge 2 — Action + Superheroes (sequel)

Released week 80 (year 1.5) · Distributor: Wolf Pictures · Star: Jo Vale (L6, Fame 47) · IP: Iron Edge

**Financial waterfall** [LOCKED rules; amounts provisional]

| Item | Amount |
|---|---:|
| Advance received (project reserve, not revenue) | $91,000 |
| Base cost (unavoidable) | −$60,000 |
| Star fee | −$32,909 |
| Marketing campaign | −$20,000 |
| Paid from studio cash (overrun) | $21,909 |
| **Unused advance kept at completion** | $0 |
| Gross from sales (15 weeks) | $508,018 |
| Distributor royalty (31% of weekly gross) | −$157,486 |
| **Studio take** | $350,532 |
| Net for this title (surplus + take − cash overrun; wages are studio-wide, excluded) | $328,624 |

**Quality trace** [scores are computed, never rolled]

Meters (0–100): Plot 76.99 · Writing 79.19 · Filming 78.63 · Editing 68.66
Inputs: staff points {"plot":147.75,"writing":168.02,"filming":140.52,"editing":93.03}, Star filming points 53.16 (Star family fit 76), studio Action level 2 (+6%), era bar x1.06
Base scores: Audience 7.5 / Critic 7.68 · no weak meter
Combo grades: Audience C (x1) / Critic A (x1.15) · repetition fatigue x0.95 · critic saturation x0.9
**Final: Audience 7.12 / Critic 7.55 → avg 7.34**

**Opening & viewership trace** [marketing/Fame/reach affect viewers only]

Awareness inputs: base 0.35, marketing 0.55, studioBuzz 0, starFame 0.24, trend 0.1, ipFans 0.03 → awareness 0.72. Reach cap 264,000 → pool 189,532 → opening 56,860.

| Wk | Viewers | Retention | Driver | Gross | Studio | Distributor |
|---:|---:|---:|---|---:|---:|---:|
| 1 | 56,860 | 1 | opening (aware people watching) | $113,720 | $78,467 | $35,253 |
| 2 | 41,033 | 0.72 | critic 7.55: +4,557 newly aware (buzz) | $82,066 | $56,626 | $25,440 |
| 3 | 25,672 | 0.63 | critic 7.55: +5,253 newly aware (buzz) | $51,344 | $35,427 | $15,917 |
| 4 | 21,888 | 0.85 | audience 7.12: +21,770 newly aware (word of mouth) | $43,776 | $30,205 | $13,571 |
| 5 | 19,029 | 0.87 | audience 7.12: +18,561 newly aware (word of mouth) | $38,058 | $26,260 | $11,798 |
| 6 | 16,543 | 0.87 | audience 7.12: +16,137 newly aware (word of mouth) | $33,086 | $22,829 | $10,257 |
| 7 | 14,382 | 0.87 | audience 7.12: +14,028 newly aware (word of mouth) | $28,764 | $19,847 | $8,917 |
| 8 | 12,504 | 0.87 | audience 7.12: +12,196 newly aware (word of mouth) | $25,008 | $17,256 | $7,752 |
| 9 | 10,871 | 0.87 | audience 7.12: +10,603 newly aware (word of mouth) | $21,742 | $15,002 | $6,740 |
| 10 | 9,451 | 0.87 | audience 7.12: +9,219 newly aware (word of mouth) | $18,902 | $13,042 | $5,860 |
| 11 | 8,216 | 0.87 | audience 7.12: +8,014 newly aware (word of mouth) | $16,432 | $11,338 | $5,094 |
| 12 | 7,143 | 0.87 | audience 7.12: +6,967 newly aware (word of mouth) | $14,286 | $9,857 | $4,429 |
| 13 | 6,199 | 0.87 | audience 7.12: +6,023 newly aware (word of mouth) | $12,398 | $8,555 | $3,843 |
| 14 | 4,218 | 0.68 | audience 7.12: +1,726 newly aware (word of mouth) | $8,436 | $5,821 | $2,615 |
| 15 | 0 | 0 | audience 7.12: +1,498 newly aware (word of mouth) | $0 | $0 | $0 |

**Progression trace**

- Prestige awards: none (no milestone reached)
- IP fans: {"before":4271,"after":13781,"delta":9510}
- Star career: {"fameDelta":7.36,"relDelta":0.75,"grow":6,"level":6,"reasons":"worked together (+); project boosted their career (+)"}
- Distributor trust: Wolf Pictures earned 173% of its advance back on Iron Edge 2 with strong reviews (step 0.68)
- Rule labels: LOCKED = causal chain, accounting, fallback/no-campaign, thresholds 4.0/9.0, IP fan inheritance. WORKING ASSUMPTION = all formulas' shapes and numbers.

## Cash ledger (studio cash only)

| Week | Kind | Amount | Note |
|---:|---|---:|---|
| 0 | start_cash | $40,000 |  |
| 0 | advance_received | $73,000 | advance from Wolf Pictures (project reserve, not revenue) |
| 0 | advance_spent | $-60,000 | base_cost: unavoidable base cost |
| 7 | advance_spent | $-13,000 | star_fee: Jo Vale |
| 7 | star_fee | $-16,239 | Jo Vale |
| 16 | advance_received | $91,000 | advance from Wolf Pictures (project reserve, not revenue) |
| 16 | advance_spent | $-60,000 | base_cost: unavoidable base cost |
| 23 | advance_spent | $-8,809 | star_fee: Dee Lind |
| 29 | advance_spent | $-20,000 | campaign: medium |
| 32 | surplus_transfer | $2,191 | unused advance kept at completion (not sales revenue) |
| 32 | advance_received | $104,000 | advance from Wolf Pictures (project reserve, not revenue) |
| 32 | advance_spent | $-60,000 | base_cost: unavoidable base cost |
| 39 | advance_spent | $-28,778 | star_fee: Jo Vale |
| 45 | advance_spent | $-15,222 | campaign: medium |
| 45 | campaign | $-4,778 | medium |
| 48 | hire | $-20,000 | Dee Fox |
| 48 | hire | $-20,000 | Fin Lowe |
| 48 | advance_received | $113,000 | advance from Wolf Pictures (project reserve, not revenue) |
| 48 | advance_spent | $-60,000 | base_cost: unavoidable base cost |
| 55 | advance_spent | $-53,000 | star_fee: Mo Lind |
| 55 | star_fee | $-36,738 | Mo Lind |
| 61 | campaign | $-20,000 | medium |
| 64 | train | $-15,000 | Dee Fox |
| 64 | train | $-15,000 | Dee Fox |
| 64 | advance_received | $91,000 | advance from Wolf Pictures (project reserve, not revenue) |
| 64 | advance_spent | $-60,000 | base_cost: unavoidable base cost |
| 71 | advance_spent | $-31,000 | star_fee: Jo Vale |
| 71 | star_fee | $-1,909 | Jo Vale |
| 77 | campaign | $-20,000 | medium |
| all | payroll (total) | $-274,400 | aggregated |
| all | upkeep (total) | $-57,000 | aggregated |
| all | studio_take (total) | $1,305,808 | aggregated |
