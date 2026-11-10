# Single career — seed 42, strategy balanced

> **Simulation assumptions, not design locks.** All numbers come from provisional config values. Nothing here is official balance.

- Ruleset: `v9.61-movie-kernel-0.1` · Config: `gate25-candidate` (hash `a2e9d917`)
- Seed: 42
- Strategy: balanced
- Decisions: 121
- Modelled: movies; distributor advances/royalties/trust; Stars (families, budgets, fallback, callbacks, relationships); marketing + studio buzz; scores + legs; IP fans; Prestige milestones; studio genre levels; trends; staff XP/hire/train; theme research + staff pitches
- **Not modelled:** limited series; TV series/seasons/renewals/hiatus/announcements; streaming service/subscribers; eras beyond a gentle quality bar; studio upgrades/format unlock gates; genre unlocks; late-game concurrency

## Career summary

- Weeks: 95 (1.8 years) · Releases: 5 · Cancellations: 0
- End cash: $914,901 (start $40,000) · Negative-cash weeks: 0
- Prestige: 0 (0 awards)
- Staff: Sam [P 44 W 42 F 35 E 31, XP 800]; Alex [P 34 W 37 F 42 E 40, XP 800]; Kit Lowe [P 33 W 44 F 43 E 32, XP 480]; Eli Hart [P 41 W 36 F 32 E 34, XP 480]
- Studio genre levels (exact genre): Horror xp 1, Action xp 3, Comedy xp 1
- IP fans: Dead Shadow 2,222; Broken Shadow 2,958; Dead Code 8,845; Midnight Pulse 6,889; Lost Protocol 6,546
- Distributor trust: wolf 4.01, starlight 2.50, xyz 2.50, orbit 2.50, meridian 2.50
- Stars hired: Jo Vale (L5, Fame 39, rel 1.75); Dee Lind (L2, Fame 16, rel 1.75); Fin Lowe (L1, Fame 14, rel 1.75); Mo Lind (L7, Fame 85, rel 1.75); Kai Lind (L5, Fame 46, rel 1.75)

## Releases (full causal trace)

### Dead Shadow — Horror + Zombies (new)

Released week 16 (year 0.3) · Distributor: Wolf Pictures · Star: Jo Vale (L5, Fame 39) · IP: Dead Shadow

**Financial waterfall** [LOCKED rules; amounts provisional]

| Item | Amount |
|---|---:|
| Advance received (project reserve, not revenue) | $100,000 |
| Base cost (unavoidable) | −$60,000 |
| Star fee | −$29,239 |
| Marketing campaign | −$8,000 |
| Paid from studio cash (overrun) | $0 |
| **Unused advance kept at completion** | $2,761 |
| Gross from sales (15 weeks) | $288,706 |
| Distributor royalty (31% of weekly gross) | −$89,499 |
| **Studio take** | $199,207 |
| Net for this title (surplus + take − cash overrun; wages are studio-wide, excluded) | $201,968 |

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
| 1 | 44,178 | 1 | opening (aware people watching) | $88,356 | $60,966 | $27,390 |
| 2 | 29,640 | 0.67 | critic 6.08: +3,026 newly aware (buzz) | $59,280 | $40,903 | $18,377 |
| 3 | 18,869 | 0.64 | critic 6.08: +3,268 newly aware (buzz) | $37,738 | $26,039 | $11,699 |
| 4 | 13,962 | 0.74 | audience 6.09: +8,227 newly aware (word of mouth) | $27,924 | $19,268 | $8,656 |
| 5 | 10,326 | 0.74 | audience 6.09: +6,087 newly aware (word of mouth) | $20,652 | $14,250 | $6,402 |
| 6 | 7,636 | 0.74 | audience 6.09: +4,502 newly aware (word of mouth) | $15,272 | $10,538 | $4,734 |
| 7 | 5,647 | 0.74 | audience 6.09: +3,329 newly aware (word of mouth) | $11,294 | $7,793 | $3,501 |
| 8 | 4,177 | 0.74 | audience 6.09: +2,462 newly aware (word of mouth) | $8,354 | $5,764 | $2,590 |
| 9 | 3,089 | 0.74 | audience 6.09: +1,821 newly aware (word of mouth) | $6,178 | $4,263 | $1,915 |
| 10 | 2,284 | 0.74 | audience 6.09: +1,347 newly aware (word of mouth) | $4,568 | $3,152 | $1,416 |
| 11 | 1,689 | 0.74 | audience 6.09: +996 newly aware (word of mouth) | $3,378 | $2,331 | $1,047 |
| 12 | 1,249 | 0.74 | audience 6.09: +736 newly aware (word of mouth) | $2,498 | $1,724 | $774 |
| 13 | 924 | 0.74 | audience 6.09: +545 newly aware (word of mouth) | $1,848 | $1,275 | $573 |
| 14 | 683 | 0.74 | audience 6.09: +403 newly aware (word of mouth) | $1,366 | $943 | $423 |
| 15 | 0 | 0 | audience 6.09: +298 newly aware (word of mouth) | $0 | $0 | $0 |

**Progression trace**

- Prestige awards: none (no milestone reached)
- IP fans: {"before":0,"after":2518,"delta":2518}
- Star career: {"fameDelta":2.67,"relDelta":0.75,"grow":6,"level":5,"reasons":"worked together (+); project boosted their career (+)"}
- Distributor trust: Wolf Pictures earned back 89% of its $100,000 advance on Dead Shadow (step 0.02)
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
| Gross from sales (14 weeks) | $351,104 |
| Distributor royalty (31% of weekly gross) | −$108,842 |
| **Studio take** | $242,262 |
| Net for this title (surplus + take − cash overrun; wages are studio-wide, excluded) | $249,453 |

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
| 1 | 59,235 | 1 | opening (aware people watching) | $118,470 | $81,744 | $36,726 |
| 2 | 40,355 | 0.68 | critic 6.65: +2,635 newly aware (buzz) | $80,710 | $55,690 | $25,020 |
| 3 | 25,015 | 0.62 | critic 6.65: +3,188 newly aware (buzz) | $50,030 | $34,521 | $15,509 |
| 4 | 16,231 | 0.65 | audience 5.66: +6,604 newly aware (word of mouth) | $32,462 | $22,399 | $10,063 |
| 5 | 11,185 | 0.69 | audience 5.66: +4,285 newly aware (word of mouth) | $22,370 | $15,435 | $6,935 |
| 6 | 7,708 | 0.69 | audience 5.66: +2,953 newly aware (word of mouth) | $15,416 | $10,637 | $4,779 |
| 7 | 5,311 | 0.69 | audience 5.66: +2,035 newly aware (word of mouth) | $10,622 | $7,329 | $3,293 |
| 8 | 3,660 | 0.69 | audience 5.66: +1,402 newly aware (word of mouth) | $7,320 | $5,051 | $2,269 |
| 9 | 2,522 | 0.69 | audience 5.66: +966 newly aware (word of mouth) | $5,044 | $3,480 | $1,564 |
| 10 | 1,738 | 0.69 | audience 5.66: +666 newly aware (word of mouth) | $3,476 | $2,398 | $1,078 |
| 11 | 1,198 | 0.69 | audience 5.66: +459 newly aware (word of mouth) | $2,396 | $1,653 | $743 |
| 12 | 825 | 0.69 | audience 5.66: +316 newly aware (word of mouth) | $1,650 | $1,139 | $512 |
| 13 | 569 | 0.69 | audience 5.66: +218 newly aware (word of mouth) | $1,138 | $785 | $353 |
| 14 | 0 | 0 | audience 5.66: +150 newly aware (word of mouth) | $0 | $0 | $0 |

**Progression trace**

- Prestige awards: none (no milestone reached)
- IP fans: {"before":0,"after":3258,"delta":3258}
- Star career: {"fameDelta":3.13,"relDelta":0.75,"grow":6,"level":2,"reasons":"worked together (+); project boosted their career (+)"}
- Distributor trust: Wolf Pictures earned 113% of its advance back on Broken Shadow (step 0.17)
- Rule labels: LOCKED = causal chain, accounting, fallback/no-campaign, thresholds 4.0/9.0, IP fan inheritance. WORKING ASSUMPTION = all formulas' shapes and numbers.

### Dead Code — Action + Superheroes (new)

Released week 48 (year 0.9) · Distributor: Wolf Pictures · Star: Fin Lowe (L1, Fame 14) · IP: Dead Code

**Financial waterfall** [LOCKED rules; amounts provisional]

| Item | Amount |
|---|---:|
| Advance received (project reserve, not revenue) | $107,000 |
| Base cost (unavoidable) | −$60,000 |
| Star fee | −$4,504 |
| Marketing campaign | −$20,000 |
| Paid from studio cash (overrun) | $0 |
| **Unused advance kept at completion** | $22,496 |
| Gross from sales (15 weeks) | $476,954 |
| Distributor royalty (31% of weekly gross) | −$147,856 |
| **Studio take** | $329,098 |
| Net for this title (surplus + take − cash overrun; wages are studio-wide, excluded) | $351,594 |

**Quality trace** [scores are computed, never rolled]

Meters (0–100): Plot 74.58 · Writing 76.9 · Filming 74.93 · Editing 65.95
Inputs: staff points {"plot":126.58,"writing":143.64,"filming":121.7,"editing":80.32}, Star filming points 31.98 (Star family fit 47), studio Action level 1 (+3%), era bar x1.04
Base scores: Audience 7.2 / Critic 7.42 · no weak meter
Combo grades: Audience C (x1) / Critic A (x1.15) · repetition fatigue x0.95 · critic saturation x1
**Final: Audience 6.84 / Critic 8.1 → avg 7.47**

**Opening & viewership trace** [marketing/Fame/reach affect viewers only]

Awareness inputs: base 0.35, marketing 0.55, studioBuzz 0, starFame 0.04, trend 0.4, ipFans 0 → awareness 0.74. Reach cap 264,000 → pool 194,596 → opening 58,379.

| Wk | Viewers | Retention | Driver | Gross | Studio | Distributor |
|---:|---:|---:|---|---:|---:|---:|
| 1 | 58,379 | 1 | opening (aware people watching) | $116,758 | $80,563 | $36,195 |
| 2 | 43,324 | 0.74 | critic 8.1: +5,164 newly aware (buzz) | $86,648 | $59,787 | $26,861 |
| 3 | 26,993 | 0.62 | critic 8.1: +5,996 newly aware (buzz) | $53,986 | $37,250 | $16,736 |
| 4 | 21,185 | 0.78 | audience 6.84: +19,867 newly aware (word of mouth) | $42,370 | $29,235 | $13,135 |
| 5 | 17,643 | 0.83 | audience 6.84: +15,592 newly aware (word of mouth) | $35,286 | $24,347 | $10,939 |
| 6 | 14,694 | 0.83 | audience 6.84: +12,985 newly aware (word of mouth) | $29,388 | $20,278 | $9,110 |
| 7 | 12,237 | 0.83 | audience 6.84: +10,815 newly aware (word of mouth) | $24,474 | $16,887 | $7,587 |
| 8 | 10,191 | 0.83 | audience 6.84: +9,006 newly aware (word of mouth) | $20,382 | $14,064 | $6,318 |
| 9 | 8,488 | 0.83 | audience 6.84: +7,501 newly aware (word of mouth) | $16,976 | $11,713 | $5,263 |
| 10 | 7,069 | 0.83 | audience 6.84: +6,247 newly aware (word of mouth) | $14,138 | $9,755 | $4,383 |
| 11 | 5,887 | 0.83 | audience 6.84: +5,203 newly aware (word of mouth) | $11,774 | $8,124 | $3,650 |
| 12 | 4,903 | 0.83 | audience 6.84: +4,333 newly aware (word of mouth) | $9,806 | $6,766 | $3,040 |
| 13 | 4,083 | 0.83 | audience 6.84: +3,609 newly aware (word of mouth) | $8,166 | $5,635 | $2,531 |
| 14 | 3,401 | 0.83 | audience 6.84: +3,005 newly aware (word of mouth) | $6,802 | $4,693 | $2,109 |
| 15 | 0 | 0 | audience 6.84: +2,503 newly aware (word of mouth) | $0 | $0 | $0 |

**Progression trace**

- Prestige awards: none (no milestone reached)
- IP fans: {"before":0,"after":9425,"delta":9425}
- Star career: {"fameDelta":7.58,"relDelta":0.75,"grow":4,"level":1,"reasons":"worked together (+); project boosted their career (+)"}
- Distributor trust: Wolf Pictures earned 138% of its advance back on Dead Code with strong reviews (step 0.49)
- Rule labels: LOCKED = causal chain, accounting, fallback/no-campaign, thresholds 4.0/9.0, IP fan inheritance. WORKING ASSUMPTION = all formulas' shapes and numbers.

### Midnight Pulse — Action + Superheroes (new)

Released week 64 (year 1.2) · Distributor: Wolf Pictures · Star: Mo Lind (L7, Fame 85) · IP: Midnight Pulse

**Financial waterfall** [LOCKED rules; amounts provisional]

| Item | Amount |
|---|---:|
| Advance received (project reserve, not revenue) | $115,000 |
| Base cost (unavoidable) | −$60,000 |
| Star fee | −$89,738 |
| Marketing campaign | −$20,000 |
| Paid from studio cash (overrun) | $54,738 |
| **Unused advance kept at completion** | $0 |
| Gross from sales (15 weeks) | $465,778 |
| Distributor royalty (31% of weekly gross) | −$144,391 |
| **Studio take** | $321,387 |
| Net for this title (surplus + take − cash overrun; wages are studio-wide, excluded) | $266,648 |

**Quality trace** [scores are computed, never rolled]

Meters (0–100): Plot 76.25 · Writing 78.45 · Filming 79.28 · Editing 67.77
Inputs: staff points {"plot":140.14,"writing":158.94,"filming":131.19,"editing":88.23}, Star filming points 67.98 (Star family fit 100), studio Action level 1 (+3%), era bar x1.05
Base scores: Audience 7.47 / Critic 7.62 · no weak meter
Combo grades: Audience C (x1) / Critic A (x1.15) · repetition fatigue x0.9 · critic saturation x0.9
**Final: Audience 6.72 / Critic 7.1 → avg 6.91**

**Opening & viewership trace** [marketing/Fame/reach affect viewers only]

Awareness inputs: base 0.35, marketing 0.55, studioBuzz 0, starFame 0.47, trend 0.1, ipFans 0 → awareness 0.77. Reach cap 264,000 → pool 203,542 → opening 61,063.

| Wk | Viewers | Retention | Driver | Gross | Studio | Distributor |
|---:|---:|---:|---|---:|---:|---:|
| 1 | 61,063 | 1 | opening (aware people watching) | $122,126 | $84,267 | $37,859 |
| 2 | 42,574 | 0.7 | critic 7.1: +3,047 newly aware (buzz) | $85,148 | $58,752 | $26,396 |
| 3 | 26,290 | 0.62 | critic 7.1: +3,755 newly aware (buzz) | $52,580 | $36,280 | $16,300 |
| 4 | 21,093 | 0.8 | audience 6.72: +18,088 newly aware (word of mouth) | $42,186 | $29,108 | $13,078 |
| 5 | 17,243 | 0.82 | audience 6.72: +14,512 newly aware (word of mouth) | $34,486 | $23,795 | $10,691 |
| 6 | 14,095 | 0.82 | audience 6.72: +11,863 newly aware (word of mouth) | $28,190 | $19,451 | $8,739 |
| 7 | 11,522 | 0.82 | audience 6.72: +9,697 newly aware (word of mouth) | $23,044 | $15,900 | $7,144 |
| 8 | 9,418 | 0.82 | audience 6.72: +7,927 newly aware (word of mouth) | $18,836 | $12,997 | $5,839 |
| 9 | 7,699 | 0.82 | audience 6.72: +6,480 newly aware (word of mouth) | $15,398 | $10,625 | $4,773 |
| 10 | 6,294 | 0.82 | audience 6.72: +5,297 newly aware (word of mouth) | $12,588 | $8,686 | $3,902 |
| 11 | 5,145 | 0.82 | audience 6.72: +4,330 newly aware (word of mouth) | $10,290 | $7,100 | $3,190 |
| 12 | 4,205 | 0.82 | audience 6.72: +3,540 newly aware (word of mouth) | $8,410 | $5,803 | $2,607 |
| 13 | 3,438 | 0.82 | audience 6.72: +2,893 newly aware (word of mouth) | $6,876 | $4,744 | $2,132 |
| 14 | 2,810 | 0.82 | audience 6.72: +2,365 newly aware (word of mouth) | $5,620 | $3,878 | $1,742 |
| 15 | 0 | 0 | audience 6.72: +1,933 newly aware (word of mouth) | $0 | $0 | $0 |

**Progression trace**

- Prestige awards: none (no milestone reached)
- IP fans: {"before":0,"after":7117,"delta":7117}
- Star career: {"fameDelta":5.81,"relDelta":0.75,"grow":0,"level":7,"reasons":"worked together (+); project boosted their career (+)"}
- Distributor trust: Wolf Pictures earned 126% of its advance back on Midnight Pulse (step 0.34)
- Rule labels: LOCKED = causal chain, accounting, fallback/no-campaign, thresholds 4.0/9.0, IP fan inheritance. WORKING ASSUMPTION = all formulas' shapes and numbers.

### Lost Protocol — Comedy + Zombies (new)

Released week 80 (year 1.5) · Distributor: Wolf Pictures · Star: Kai Lind (L5, Fame 46) · IP: Lost Protocol

**Financial waterfall** [LOCKED rules; amounts provisional]

| Item | Amount |
|---|---:|
| Advance received (project reserve, not revenue) | $83,000 |
| Base cost (unavoidable) | −$60,000 |
| Star fee | −$33,664 |
| Marketing campaign | −$20,000 |
| Paid from studio cash (overrun) | $30,664 |
| **Unused advance kept at completion** | $0 |
| Gross from sales (15 weeks) | $438,408 |
| Distributor royalty (31% of weekly gross) | −$135,906 |
| **Studio take** | $302,502 |
| Net for this title (surplus + take − cash overrun; wages are studio-wide, excluded) | $271,837 |

**Quality trace** [scores are computed, never rolled]

Meters (0–100): Plot 77.24 · Writing 79.39 · Filming 79.71 · Editing 68.68
Inputs: staff points {"plot":149.86,"writing":170.08,"filming":140.91,"editing":93.1}, Star filming points 66 (Star family fit 100), studio Comedy level 0 (+0%), era bar x1.06
Base scores: Audience 7.54 / Critic 7.71 · no weak meter
Combo grades: Audience D (x0.9) / Critic D (x0.9) · repetition fatigue x1 · critic saturation x1
**Final: Audience 6.79 / Critic 6.94 → avg 6.87**

**Opening & viewership trace** [marketing/Fame/reach affect viewers only]

Awareness inputs: base 0.35, marketing 0.55, studioBuzz 0, starFame 0.24, trend 0.4, ipFans 0 → awareness 0.79. Reach cap 240,000 → pool 188,549 → opening 56,565.

| Wk | Viewers | Retention | Driver | Gross | Studio | Distributor |
|---:|---:|---:|---|---:|---:|---:|
| 1 | 56,565 | 1 | opening (aware people watching) | $113,130 | $78,060 | $35,070 |
| 2 | 39,012 | 0.69 | critic 6.94: +2,396 newly aware (buzz) | $78,024 | $53,837 | $24,187 |
| 3 | 24,027 | 0.62 | critic 6.94: +3,021 newly aware (buzz) | $48,054 | $33,157 | $14,897 |
| 4 | 19,711 | 0.82 | audience 6.79: +17,203 newly aware (word of mouth) | $39,422 | $27,201 | $12,221 |
| 5 | 16,289 | 0.83 | audience 6.79: +14,113 newly aware (word of mouth) | $32,578 | $22,479 | $10,099 |
| 6 | 13,461 | 0.83 | audience 6.79: +11,663 newly aware (word of mouth) | $26,922 | $18,576 | $8,346 |
| 7 | 11,124 | 0.83 | audience 6.79: +9,638 newly aware (word of mouth) | $22,248 | $15,351 | $6,897 |
| 8 | 9,193 | 0.83 | audience 6.79: +7,965 newly aware (word of mouth) | $18,386 | $12,686 | $5,700 |
| 9 | 7,597 | 0.83 | audience 6.79: +6,582 newly aware (word of mouth) | $15,194 | $10,484 | $4,710 |
| 10 | 6,278 | 0.83 | audience 6.79: +5,439 newly aware (word of mouth) | $12,556 | $8,664 | $3,892 |
| 11 | 5,188 | 0.83 | audience 6.79: +4,495 newly aware (word of mouth) | $10,376 | $7,159 | $3,217 |
| 12 | 4,288 | 0.83 | audience 6.79: +3,715 newly aware (word of mouth) | $8,576 | $5,917 | $2,659 |
| 13 | 3,543 | 0.83 | audience 6.79: +3,070 newly aware (word of mouth) | $7,086 | $4,889 | $2,197 |
| 14 | 2,928 | 0.83 | audience 6.79: +2,537 newly aware (word of mouth) | $5,856 | $4,041 | $1,815 |
| 15 | 0 | 0 | audience 6.79: +2,096 newly aware (word of mouth) | $0 | $0 | $0 |

**Progression trace**

- Prestige awards: none (no milestone reached)
- IP fans: {"before":0,"after":6559,"delta":6559}
- Star career: {"fameDelta":5.55,"relDelta":0.75,"grow":0,"level":5,"reasons":"worked together (+); project boosted their career (+)"}
- Distributor trust: Wolf Pictures earned 164% of its advance back on Lost Protocol (step 0.57)
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
| 32 | hire | $-20,000 | Eli Hart |
| 32 | advance_received | $107,000 | advance from Wolf Pictures (project reserve, not revenue) |
| 32 | advance_spent | $-60,000 | base_cost: unavoidable base cost |
| 39 | advance_spent | $-4,504 | star_fee: Fin Lowe |
| 45 | advance_spent | $-20,000 | campaign: medium |
| 48 | surplus_transfer | $22,496 | unused advance kept at completion (not sales revenue) |
| 48 | train | $-15,000 | Kit Lowe |
| 48 | train | $-15,000 | Sam |
| 48 | advance_received | $115,000 | advance from Wolf Pictures (project reserve, not revenue) |
| 48 | advance_spent | $-60,000 | base_cost: unavoidable base cost |
| 55 | advance_spent | $-55,000 | star_fee: Mo Lind |
| 55 | star_fee | $-34,738 | Mo Lind |
| 61 | campaign | $-20,000 | medium |
| 64 | train | $-15,000 | Alex |
| 64 | train | $-15,000 | Kit Lowe |
| 64 | advance_received | $83,000 | advance from Wolf Pictures (project reserve, not revenue) |
| 64 | advance_spent | $-60,000 | base_cost: unavoidable base cost |
| 71 | advance_spent | $-23,000 | star_fee: Kai Lind |
| 71 | star_fee | $-10,664 | Kai Lind |
| 77 | campaign | $-20,000 | medium |
| all | payroll (total) | $-309,600 | aggregated |
| all | upkeep (total) | $-57,000 | aggregated |
| all | studio_take (total) | $1,394,456 | aggregated |
