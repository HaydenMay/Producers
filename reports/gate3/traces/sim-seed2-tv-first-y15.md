# Single career — seed 2, strategy tv-first

> **Simulation assumptions, not design locks.** All numbers come from provisional config values. Nothing here is official balance.

- Ruleset: `v9.61-movie-kernel-0.1` · Config: `gate3_mixed` (hash `b83a7f2c`)
- Seed: 2
- Strategy: tv-first
- Decisions: 969
- Modelled: movies; limited series (config-gated); renewable TV seasons: orders, renewal, fatigue, twist, hiatus, announcements, contract variants A/B (config-gated); studio streaming service: engineer build, aggregate subscribers, catalog, Originals (config-gated); distributor advances/royalties/trust; Stars (families, budgets, fallback, callbacks, relationships); marketing + studio buzz; scores + legs; IP fans; Prestige milestones; studio genre levels; trends; staff XP/hire/train; studio staff-capacity cap + upgrade ladder (when configured); theme research + staff pitches
- **Not modelled:** soap operas (shelved); named critics (Gate 2.6 proxy only); eras beyond a gentle quality bar; studio upgrades other than staff capacity + TV unlock; genre unlocks; late-game concurrency; TV spinoffs/reboots, Final Season announcements, other show shake-ups; binge drops; platform upgrades; challenge modes

## Career summary

- Weeks: 780 (15.0 years) · Releases: 28 · Cancellations: 0
- End cash: $10,369,338 (start $40,000) · Negative-cash weeks: 0
- Prestige: 3940 (52 awards)
- Staff: Sam [P 89 W 90 F 86 E 77, XP 7800]; Alex [P 87 W 89 F 88 E 81, XP 7800]; Eli Fox [P 89 W 91 F 87 E 80, XP 7280]; Alex Reyes [P 86 W 89 F 86 E 76, XP 7280]; Sam Imai [P 87 W 89 F 85 E 82, XP 6380]; Cam Vale [P 86 W 90 F 85 E 80, XP 6380]; Dee Park [P 88 W 90 F 88 E 81, XP 5540]; Mo Novak [P 84 W 86 F 85 E 81, XP 5540]
- Studio genre levels (exact genre): Horror xp 16, Comedy xp 2, Action xp 10
- IP fans: Iron Pulse 316; Silver Horizon 0; Red Signal 767; Midnight Storm 1,457; Midnight Rising 2,338; Lost Rising 2,031; Hollow Protocol 2,094; Dead Horizon 3,592; Silver Shadow 44,114; Silver Signal 69,225; Dead Pulse 52,489
- Distributor trust: wolf 4.21, starlight 2.50, xyz 2.71, orbit 2.50, meridian 4.93
- Stars hired: Jay Vale (L10, Fame 100, rel 5.00); Eli Sato (L1, Fame 1, rel 0.50); Jo Lowe (L4, Fame 31, rel 1.75); Sam Fox (L3, Fame 55, rel 2.50); Ivy Imai (L9, Fame 100, rel 5.00)
- Great films: Hall of Fame 0/28 · avg ≥9.0 0/28 · avg >9.0 0/28 · Audience ≥9 6/28 · Critic ≥9 0/28 · 8+ 14/28
- Best film: 8.84 "Dead Pulse: Season 2" (tv, A9.51/C8.16; tv-first seed 2 #26, yr 13.1, critic gen 0) · best Audience: 8.50 "Dead Pulse" (tv, A9.6/C7.41; tv-first seed 2 #25, yr 12.4, critic gen 0) · best Critic: 8.45 "Silver Signal" (tv, A7.95/C8.95; tv-first seed 2 #17, yr 6.8, critic gen 0)

## Formats, TV and streaming (Gate 3)

- Releases by format: movie 1 (avg 5.84, HoF 0, net/production-week $8,697); limited_series 7 (avg 7.079, HoF 0, net/production-week $19,242); tv 20 (avg 8.036, HoF 0, net/production-week $26,003)
- TV: unlocked week 142 (year 2.7) · shows 3, seasons 20, longest 8 · ended by a score below 4: 0
  - Silver Shadow: seasons S1 5ep 8.72 → S2 5ep 8.73 → S3 10ep 8.65 → S4 10ep 8.53 → S5 10ep 8.35 → S6 10ep 8.02 → S7 10ep 7.58 → S8 10ep 6.92 · fans 44,114 · last season averaged 6.92 (≥ 4): renewable
  - Silver Signal: seasons S1 10ep 8.45 → S2 15ep 7.98 → S3 15ep 8.28 → S4 15ep 8.04 → S5 15ep 7.82 → S6 15ep 7.01 → S7 15ep 6.81 → S8 15ep 6.3 · fans 69,225 · last season averaged 6.3 (≥ 4): renewable
  - Dead Pulse: seasons S1 15ep 8.5 → S2 15ep 8.84 → S3 15ep 8.66 → S4 20ep 8.53 · fans 52,489 · last season averaged 8.53 (≥ 4): renewable
- Streaming: not built
- Last 12 months: traditional studio take $1,289,267 · subscriptions $0 · platform cost $0 · kept surplus $306,611
- Prestige by source: audience_7_5 1350, meters_all_70 1050, critic_8_5 340, ip_viewers_500k 450, ip_gross_1m 300, ip_gross_5m 450 · by format: limited_series 360, tv 3580

## Releases (full causal trace)

### Iron Pulse — Horror + Sports (new)

Released week 16 (year 0.3) · Distributor: Wolf Pictures · Star: Jay Vale (L10, Fame 100) · IP: Iron Pulse

**Financial waterfall** [LOCKED rules; amounts provisional]

| Item | Amount |
|---|---:|
| Advance received (project reserve, not revenue) | $86,000 |
| Base cost (unavoidable) | −$60,000 |
| Star fee | −$27,120 |
| Marketing campaign | −$0 |
| Paid from studio cash (overrun) | $1,120 |
| **Unused advance kept at completion** | $0 |
| Gross from sales (13 weeks) | $206,286 |
| Distributor royalty (32% of weekly gross) | −$66,012 |
| **Studio take** | $140,274 |
| Net for this title (surplus + take − cash overrun; wages are studio-wide, excluded) | $139,154 |

**Quality trace** [scores are computed, never rolled]

Meters (0–100): Plot 56.49 · Writing 57.8 · Filming 64.76 · Editing 47.64
Inputs: staff points {"plot":54.67,"writing":57.67,"filming":51.34,"editing":36.84}, Star filming points 40.92 (Star family fit 62), studio Horror level 0 (+0%), era bar x1.01
Base scores: Audience 5.65 / Critic 5.69 · no weak meter
Combo grades: Audience C (x1) / Critic B (x1.06) · repetition fatigue x1 · critic saturation x1
Before expectations (after combo, weakness, fatigue, saturation; pre-clamp): Audience 5.65 / Critic 6.03 · critic generation 0 (−0.0%, scale) · audience era 0 (−0.0%) · then clamp 0–10 (generation/era 0 = the ones active at game start)
**Final: Audience 5.65 / Critic 6.03 → avg 5.84**

**Opening & viewership trace** [marketing/Fame/reach affect viewers only]

Awareness inputs: base 0.35, marketing 0, studioBuzz 0, starFame 0.2, trend 0, ipFans 0 → awareness 0.43. Reach cap 264,000 → pool 112,293 → opening 33,688.

| Wk | Viewers | Retention | Driver | Gross | Studio | Distributor |
|---:|---:|---:|---|---:|---:|---:|
| 1 | 33,688 | 1 | opening (aware people watching) | $67,376 | $45,816 | $21,560 |
| 2 | 23,003 | 0.68 | critic 6.03: +3,750 newly aware (buzz) | $46,006 | $31,284 | $14,722 |
| 3 | 15,085 | 0.66 | critic 6.03: +3,891 newly aware (buzz) | $30,170 | $20,516 | $9,654 |
| 4 | 10,138 | 0.67 | audience 5.65: +3,922 newly aware (word of mouth) | $20,276 | $13,788 | $6,488 |
| 5 | 6,974 | 0.69 | audience 5.65: +2,636 newly aware (word of mouth) | $13,948 | $9,485 | $4,463 |
| 6 | 4,798 | 0.69 | audience 5.65: +1,813 newly aware (word of mouth) | $9,596 | $6,525 | $3,071 |
| 7 | 3,301 | 0.69 | audience 5.65: +1,247 newly aware (word of mouth) | $6,602 | $4,489 | $2,113 |
| 8 | 2,271 | 0.69 | audience 5.65: +858 newly aware (word of mouth) | $4,542 | $3,089 | $1,453 |
| 9 | 1,562 | 0.69 | audience 5.65: +590 newly aware (word of mouth) | $3,124 | $2,124 | $1,000 |
| 10 | 1,075 | 0.69 | audience 5.65: +406 newly aware (word of mouth) | $2,150 | $1,462 | $688 |
| 11 | 739 | 0.69 | audience 5.65: +280 newly aware (word of mouth) | $1,478 | $1,005 | $473 |
| 12 | 509 | 0.69 | audience 5.65: +192 newly aware (word of mouth) | $1,018 | $692 | $326 |
| 13 | 0 | 0 | audience 5.65: +132 newly aware (word of mouth) | $0 | $0 | $0 |

**Progression trace**

- Prestige awards: none (no milestone reached)
- IP fans: {"before":0,"after":1386,"delta":1386}
- Star career: {"fameDelta":1.71,"relDelta":0.75,"grow":6,"level":5,"reasons":"worked together (+); project boosted their career (+)"}
- Distributor trust: Wolf Pictures earned back 77% of its $86,000 advance on Iron Pulse (step -0.09)
- Rule labels: LOCKED = causal chain, accounting, fallback/no-campaign, thresholds 4.0/9.0, IP fan inheritance. WORKING ASSUMPTION = all formulas' shapes and numbers.

### Silver Horizon — Comedy + Sports (new)

Released week 34 (year 0.7) · Distributor: Wolf Pictures · Star: Eli Sato (L1, Fame 1) · IP: Silver Horizon
Format: **limited_series**, 6 episodes (one per week) · 108,563 distinct viewers, 472,173 viewer-episodes · self-contained: never renews

**Financial waterfall** [LOCKED rules; amounts provisional]

| Item | Amount |
|---|---:|
| Advance received (project reserve, not revenue) | $92,000 |
| Base cost (unavoidable) | −$90,000 |
| Star fee | −$2,264 |
| Marketing campaign | −$20,000 |
| Paid from studio cash (overrun) | $20,264 |
| **Unused advance kept at completion** | $0 |
| Gross from sales (10 weeks) | $269,139 |
| Distributor royalty (33% of weekly gross) | −$88,816 |
| **Studio take** | $180,323 |
| Net for this title (surplus + take − cash overrun; wages are studio-wide, excluded) | $160,059 |

**Quality trace** [scores are computed, never rolled]

Meters (0–100): Plot 58.31 · Writing 59.78 · Filming 68.27 · Editing 47.04
Inputs: staff points {"plot":67.17,"writing":71.38,"filming":63.14,"editing":41.01}, Star filming points 60.06 (Star family fit 78), studio Comedy level 0 (+0%), era bar x1.03
Base scores: Audience 5.81 / Critic 5.86 · no weak meter
Combo grades: Audience F (x0.78) / Critic D (x0.9) · repetition fatigue x1 · critic saturation x1
Before expectations (after combo, weakness, fatigue, saturation; pre-clamp): Audience 4.53 / Critic 5.28 · critic generation 0 (−0.0%, scale) · audience era 0 (−0.0%) · then clamp 0–10 (generation/era 0 = the ones active at game start)
**Final: Audience 4.53 / Critic 5.28 → avg 4.91**

**Opening & viewership trace** [marketing/Fame/reach affect viewers only]

Awareness inputs: base 0.35, marketing 0.55, studioBuzz 0, starFame 0.01, trend 0, ipFans 0 → awareness 0.6. Reach cap 240,000 → pool 143,007 → opening 42,902.

| Wk | Viewers | Retention | Driver | Gross | Studio | Distributor |
|---:|---:|---:|---|---:|---:|---:|
| 1 | 71,504 | 1 | episode 1 premiere | $40,757 | $27,307 | $13,450 |
| 2 | 79,615 | 1.11 | episode 2: 90% kept (critic 5.28), +15,490 new | $45,381 | $30,405 | $14,976 |
| 3 | 81,319 | 1.02 | episode 3: 90% kept (critic 5.28), +9,920 new | $46,352 | $31,056 | $15,296 |
| 4 | 75,095 | 0.92 | episode 4: 85% kept (audience 4.53), +5,827 new | $42,804 | $28,679 | $14,125 |
| 5 | 67,565 | 0.9 | episode 5: 85% kept (audience 4.53), +3,599 new | $38,512 | $25,803 | $12,709 |
| 6 | 59,775 | 0.88 | episode 6: 85% kept (audience 4.53), +2,223 new | $34,072 | $22,828 | $11,244 |
| 7 | 23,910 | 0.4 | catch-up viewing (tail week 1/3) | $13,629 | $9,131 | $4,497 |
| 8 | 9,564 | 0.4 | catch-up viewing (tail week 2/3) | $5,451 | $3,652 | $1,799 |
| 9 | 3,826 | 0.4 | catch-up viewing (tail week 3/3) | $2,181 | $1,461 | $720 |
| 10 | 0 | 0 | run ended | $0 | $0 | $0 |

**Progression trace**

- Prestige awards: none (no milestone reached)
- IP fans: {"before":0,"after":0,"delta":0}
- Star career: {"fameDelta":-0.19,"relDelta":-0.5,"grow":5,"level":1,"reasons":"worked together (+); project hurt their career: Fame fell (-)"}
- Distributor trust: Wolf Pictures earned back 97% of its $92,000 advance on Silver Horizon and reviews were poor (step -0.1)
- Rule labels: LOCKED = causal chain, accounting, fallback/no-campaign, thresholds 4.0/9.0, IP fan inheritance. WORKING ASSUMPTION = all formulas' shapes and numbers.

### Red Signal — Horror + Spies (new)

Released week 52 (year 1.0) · Distributor: Wolf Pictures · Star: Jay Vale (L10, Fame 100) · IP: Red Signal
Format: **limited_series**, 6 episodes (one per week) · 158,509 distinct viewers, 795,986 viewer-episodes · self-contained: never renews

**Financial waterfall** [LOCKED rules; amounts provisional]

| Item | Amount |
|---|---:|
| Advance received (project reserve, not revenue) | $146,000 |
| Base cost (unavoidable) | −$90,000 |
| Star fee | −$27,856 |
| Marketing campaign | −$20,000 |
| Paid from studio cash (overrun) | $0 |
| **Unused advance kept at completion** | $8,144 |
| Gross from sales (10 weeks) | $453,712 |
| Distributor royalty (31% of weekly gross) | −$140,651 |
| **Studio take** | $313,061 |
| Net for this title (surplus + take − cash overrun; wages are studio-wide, excluded) | $321,205 |

**Quality trace** [scores are computed, never rolled]

Meters (0–100): Plot 60.69 · Writing 62.41 · Filming 68.55 · Editing 49.66
Inputs: staff points {"plot":75.13,"writing":80.81,"filming":72.59,"editing":46.16}, Star filming points 53.9 (Star family fit 68), studio Horror level 1 (+3%), era bar x1.04
Base scores: Audience 5.98 / Critic 6.08 · no weak meter
Combo grades: Audience C (x1) / Critic B (x1.06) · repetition fatigue x1 · critic saturation x1
Before expectations (after combo, weakness, fatigue, saturation; pre-clamp): Audience 5.98 / Critic 6.45 · critic generation 0 (−0.0%, scale) · audience era 0 (−0.0%) · then clamp 0–10 (generation/era 0 = the ones active at game start)
**Final: Audience 5.98 / Critic 6.45 → avg 6.22**

**Opening & viewership trace** [marketing/Fame/reach affect viewers only]

Awareness inputs: base 0.35, marketing 0.55, studioBuzz 0, starFame 0.21, trend 0.15, ipFans 0 → awareness 0.72. Reach cap 264,000 → pool 189,434 → opening 56,830.

| Wk | Viewers | Retention | Driver | Gross | Studio | Distributor |
|---:|---:|---:|---|---:|---:|---:|
| 1 | 94,717 | 1 | episode 1 premiere | $53,989 | $37,252 | $16,736 |
| 2 | 113,525 | 1.2 | episode 2: 97% kept (critic 6.45), +21,934 new | $64,709 | $44,649 | $20,060 |
| 3 | 123,833 | 1.09 | episode 3: 97% kept (critic 6.45), +14,054 new | $70,585 | $48,704 | $21,881 |
| 4 | 127,033 | 1.03 | episode 4: 94% kept (audience 5.98), +10,779 new | $72,409 | $49,962 | $22,447 |
| 5 | 128,304 | 1.01 | episode 5: 94% kept (audience 5.98), +9,045 new | $73,133 | $50,462 | $22,671 |
| 6 | 128,432 | 1 | episode 6: 94% kept (audience 5.98), +7,980 new | $73,206 | $50,512 | $22,694 |
| 7 | 51,373 | 0.4 | catch-up viewing (tail week 1/3) | $29,283 | $20,205 | $9,078 |
| 8 | 20,549 | 0.4 | catch-up viewing (tail week 2/3) | $11,713 | $8,082 | $3,631 |
| 9 | 8,220 | 0.4 | catch-up viewing (tail week 3/3) | $4,685 | $3,233 | $1,452 |
| 10 | 0 | 0 | run ended | $0 | $0 | $0 |

**Progression trace**

- Prestige awards: none (no milestone reached)
- IP fans: {"before":0,"after":3094,"delta":3094}
- Star career: {"fameDelta":3.13,"relDelta":0.75,"grow":6,"level":6,"reasons":"worked together (+); project boosted their career (+)"}
- Distributor trust: Wolf Pictures earned back 96% of its $146,000 advance on Red Signal (step 0.07)
- Rule labels: LOCKED = causal chain, accounting, fallback/no-campaign, thresholds 4.0/9.0, IP fan inheritance. WORKING ASSUMPTION = all formulas' shapes and numbers.

### Midnight Storm — Comedy + Spies (new)

Released week 70 (year 1.3) · Distributor: Wolf Pictures · Star: Jo Lowe (L4, Fame 31) · IP: Midnight Storm
Format: **limited_series**, 6 episodes (one per week) · 172,635 distinct viewers, 894,683 viewer-episodes · self-contained: never renews

**Financial waterfall** [LOCKED rules; amounts provisional]

| Item | Amount |
|---|---:|
| Advance received (project reserve, not revenue) | $118,000 |
| Base cost (unavoidable) | −$90,000 |
| Star fee | −$19,279 |
| Marketing campaign | −$20,000 |
| Paid from studio cash (overrun) | $11,279 |
| **Unused advance kept at completion** | $0 |
| Gross from sales (10 weeks) | $509,969 |
| Distributor royalty (32% of weekly gross) | −$163,190 |
| **Studio take** | $346,779 |
| Net for this title (surplus + take − cash overrun; wages are studio-wide, excluded) | $335,500 |

**Quality trace** [scores are computed, never rolled]

Meters (0–100): Plot 75.19 · Writing 77.15 · Filming 78.87 · Editing 64.53
Inputs: staff points {"plot":149.49,"writing":166.55,"filming":140.21,"editing":86.27}, Star filming points 79.31 (Star family fit 100), studio Comedy level 1 (+3%), era bar x1.05
Base scores: Audience 7.3 / Critic 7.48 · no weak meter
Combo grades: Audience C (x1) / Critic D (x0.9) · repetition fatigue x1 · critic saturation x1
Before expectations (after combo, weakness, fatigue, saturation; pre-clamp): Audience 7.3 / Critic 6.73 · critic generation 0 (−0.0%, scale) · audience era 0 (−0.0%) · then clamp 0–10 (generation/era 0 = the ones active at game start)
**Final: Audience 7.3 / Critic 6.73 → avg 7.02**

**Opening & viewership trace** [marketing/Fame/reach affect viewers only]

Awareness inputs: base 0.35, marketing 0.55, studioBuzz 0, starFame 0.16, trend 0.4, ipFans 0 → awareness 0.77. Reach cap 240,000 → pool 184,040 → opening 55,212.

| Wk | Viewers | Retention | Driver | Gross | Studio | Distributor |
|---:|---:|---:|---|---:|---:|---:|
| 1 | 92,020 | 1 | episode 1 premiere | $52,451 | $35,667 | $16,784 |
| 2 | 112,090 | 1.22 | episode 2: 98% kept (critic 6.73), +21,561 new | $63,891 | $43,446 | $20,445 |
| 3 | 124,010 | 1.11 | episode 3: 98% kept (critic 6.73), +13,736 new | $70,686 | $48,066 | $22,619 |
| 4 | 138,303 | 1.12 | episode 4: 100% kept (audience 7.3), +14,293 new | $78,833 | $53,606 | $25,226 |
| 5 | 153,272 | 1.11 | episode 5: 100% kept (audience 7.3), +14,969 new | $87,365 | $59,408 | $27,957 |
| 6 | 169,328 | 1.1 | episode 6: 100% kept (audience 7.3), +16,056 new | $96,517 | $65,632 | $30,885 |
| 7 | 67,731 | 0.4 | catch-up viewing (tail week 1/3) | $38,607 | $26,253 | $12,354 |
| 8 | 27,092 | 0.4 | catch-up viewing (tail week 2/3) | $15,442 | $10,501 | $4,942 |
| 9 | 10,837 | 0.4 | catch-up viewing (tail week 3/3) | $6,177 | $4,200 | $1,977 |
| 10 | 0 | 0 | run ended | $0 | $0 | $0 |

**Progression trace**

- Prestige awards: none (no milestone reached)
- IP fans: {"before":0,"after":5580,"delta":5580}
- Star career: {"fameDelta":5.4,"relDelta":0.75,"grow":0,"level":4,"reasons":"worked together (+); project boosted their career (+)"}
- Distributor trust: Wolf Pictures earned 138% of its advance back on Midnight Storm with strong reviews (step 0.43)
- Rule labels: LOCKED = causal chain, accounting, fallback/no-campaign, thresholds 4.0/9.0, IP fan inheritance. WORKING ASSUMPTION = all formulas' shapes and numbers.

### Midnight Rising — Action + Zombies (new)

Released week 88 (year 1.7) · Distributor: Wolf Pictures · Star: Sam Fox (L3, Fame 55) · IP: Midnight Rising
Format: **limited_series**, 6 episodes (one per week) · 199,743 distinct viewers, 1,047,127 viewer-episodes · self-contained: never renews

**Financial waterfall** [LOCKED rules; amounts provisional]

| Item | Amount |
|---|---:|
| Advance received (project reserve, not revenue) | $145,000 |
| Base cost (unavoidable) | −$90,000 |
| Star fee | −$33,664 |
| Marketing campaign | −$20,000 |
| Paid from studio cash (overrun) | $0 |
| **Unused advance kept at completion** | $1,336 |
| Gross from sales (10 weeks) | $596,862 |
| Distributor royalty (31% of weekly gross) | −$185,027 |
| **Studio take** | $411,835 |
| Net for this title (surplus + take − cash overrun; wages are studio-wide, excluded) | $413,171 |

**Quality trace** [scores are computed, never rolled]

Meters (0–100): Plot 76.68 · Writing 78.57 · Filming 78.44 · Editing 66.11
Inputs: staff points {"plot":164.34,"writing":183.2,"filming":152.02,"editing":93.72}, Star filming points 64.68 (Star family fit 84), studio Action level 0 (+0%), era bar x1.07
Base scores: Audience 7.39 / Critic 7.6 · no weak meter
Combo grades: Audience C (x1) / Critic B (x1.06) · repetition fatigue x1 · critic saturation x1
Before expectations (after combo, weakness, fatigue, saturation; pre-clamp): Audience 7.39 / Critic 8.06 · critic generation 0 (−0.0%, scale) · audience era 0 (−0.0%) · then clamp 0–10 (generation/era 0 = the ones active at game start)
**Final: Audience 7.39 / Critic 8.06 → avg 7.73**

**Opening & viewership trace** [marketing/Fame/reach affect viewers only]

Awareness inputs: base 0.35, marketing 0.55, studioBuzz 0, starFame 0.24, trend 0.4, ipFans 0 → awareness 0.79. Reach cap 264,000 → pool 207,403 → opening 62,221.

| Wk | Viewers | Retention | Driver | Gross | Studio | Distributor |
|---:|---:|---:|---|---:|---:|---:|
| 1 | 103,702 | 1 | episode 1 premiere | $59,110 | $40,786 | $18,324 |
| 2 | 129,709 | 1.25 | episode 2: 100% kept (critic 8.06), +26,007 new | $73,934 | $51,015 | $22,920 |
| 3 | 146,185 | 1.13 | episode 3: 100% kept (critic 8.06), +16,476 new | $83,325 | $57,495 | $25,831 |
| 4 | 162,708 | 1.11 | episode 4: 100% kept (audience 7.39), +16,523 new | $92,744 | $63,993 | $28,751 |
| 5 | 180,440 | 1.11 | episode 5: 100% kept (audience 7.39), +17,732 new | $102,851 | $70,967 | $31,884 |
| 6 | 199,743 | 1.11 | episode 6: 100% kept (audience 7.39), +19,303 new | $113,854 | $78,559 | $35,295 |
| 7 | 79,897 | 0.4 | catch-up viewing (tail week 1/3) | $45,541 | $31,423 | $14,118 |
| 8 | 31,959 | 0.4 | catch-up viewing (tail week 2/3) | $18,217 | $12,569 | $5,647 |
| 9 | 12,784 | 0.4 | catch-up viewing (tail week 3/3) | $7,287 | $5,028 | $2,259 |
| 10 | 0 | 0 | run ended | $0 | $0 | $0 |

**Progression trace**

- Prestige awards: none (no milestone reached)
- IP fans: {"before":0,"after":8725,"delta":8725}
- Star career: {"fameDelta":7.8,"relDelta":0.75,"grow":5,"level":2,"reasons":"worked together (+); project boosted their career (+)"}
- Distributor trust: Wolf Pictures earned 128% of its advance back on Midnight Rising with strong reviews (step 0.46)
- Rule labels: LOCKED = causal chain, accounting, fallback/no-campaign, thresholds 4.0/9.0, IP fan inheritance. WORKING ASSUMPTION = all formulas' shapes and numbers.

### Lost Rising — Horror + Zombies (new)

Released week 106 (year 2.0) · Distributor: Wolf Pictures · Star: Jay Vale (L10, Fame 100) · IP: Lost Rising
Format: **limited_series**, 6 episodes (one per week) · 182,570 distinct viewers, 948,493 viewer-episodes · self-contained: never renews

**Financial waterfall** [LOCKED rules; amounts provisional]

| Item | Amount |
|---|---:|
| Advance received (project reserve, not revenue) | $155,000 |
| Base cost (unavoidable) | −$90,000 |
| Star fee | −$29,994 |
| Marketing campaign | −$20,000 |
| Paid from studio cash (overrun) | $0 |
| **Unused advance kept at completion** | $15,006 |
| Gross from sales (10 weeks) | $540,641 |
| Distributor royalty (30% of weekly gross) | −$162,192 |
| **Studio take** | $378,449 |
| Net for this title (surplus + take − cash overrun; wages are studio-wide, excluded) | $393,455 |

**Quality trace** [scores are computed, never rolled]

Meters (0–100): Plot 78.73 · Writing 80.51 · Filming 79.41 · Editing 68.31
Inputs: staff points {"plot":187.39,"writing":209.05,"filming":174.06,"editing":104.9}, Star filming points 58.66 (Star family fit 74), studio Horror level 1 (+3%), era bar x1.08
Base scores: Audience 7.56 / Critic 7.79 · no weak meter
Combo grades: Audience C (x1) / Critic B (x1.06) · repetition fatigue x1 · critic saturation x0.9
Before expectations (after combo, weakness, fatigue, saturation; pre-clamp): Audience 7.56 / Critic 7.43 · critic generation 0 (−0.0%, scale) · audience era 0 (−0.0%) · then clamp 0–10 (generation/era 0 = the ones active at game start)
**Final: Audience 7.56 / Critic 7.43 → avg 7.49**

**Opening & viewership trace** [marketing/Fame/reach affect viewers only]

Awareness inputs: base 0.35, marketing 0.55, studioBuzz 0, starFame 0.23, trend 0.1, ipFans 0 → awareness 0.71. Reach cap 264,000 → pool 187,069 → opening 56,121.

| Wk | Viewers | Retention | Driver | Gross | Studio | Distributor |
|---:|---:|---:|---|---:|---:|---:|
| 1 | 93,535 | 1 | episode 1 premiere | $53,315 | $37,320 | $15,994 |
| 2 | 116,455 | 1.25 | episode 2: 100% kept (critic 7.43), +22,920 new | $66,379 | $46,466 | $19,914 |
| 3 | 131,200 | 1.13 | episode 3: 100% kept (critic 7.43), +14,745 new | $74,784 | $52,349 | $22,435 |
| 4 | 146,902 | 1.12 | episode 4: 100% kept (audience 7.56), +15,702 new | $83,734 | $58,614 | $25,120 |
| 5 | 163,908 | 1.12 | episode 5: 100% kept (audience 7.56), +17,006 new | $93,428 | $65,399 | $28,028 |
| 6 | 182,570 | 1.11 | episode 6: 100% kept (audience 7.56), +18,662 new | $104,065 | $72,845 | $31,219 |
| 7 | 73,028 | 0.4 | catch-up viewing (tail week 1/3) | $41,626 | $29,138 | $12,488 |
| 8 | 29,211 | 0.4 | catch-up viewing (tail week 2/3) | $16,650 | $11,655 | $4,995 |
| 9 | 11,684 | 0.4 | catch-up viewing (tail week 3/3) | $6,660 | $4,662 | $1,998 |
| 10 | 0 | 0 | run ended | $0 | $0 | $0 |

**Progression trace**

- Prestige awards: Prestige +75: audience_7_5 (Lost Rising).
- IP fans: {"before":0,"after":7274,"delta":7274}
- Star career: {"fameDelta":6.83,"relDelta":0.75,"grow":6,"level":6,"reasons":"worked together (+); project boosted their career (+)"}
- Distributor trust: Wolf Pictures earned 105% of its advance back on Lost Rising with strong reviews (step 0.29)
- Rule labels: LOCKED = causal chain, accounting, fallback/no-campaign, thresholds 4.0/9.0, IP fan inheritance. WORKING ASSUMPTION = all formulas' shapes and numbers.

### Hollow Protocol — Action + Sports (new)

Released week 124 (year 2.4) · Distributor: Wolf Pictures · Star: Sam Fox (L3, Fame 55) · IP: Hollow Protocol
Format: **limited_series**, 6 episodes (one per week) · 187,693 distinct viewers, 969,521 viewer-episodes · self-contained: never renews

**Financial waterfall** [LOCKED rules; amounts provisional]

| Item | Amount |
|---|---:|
| Advance received (project reserve, not revenue) | $145,000 |
| Base cost (unavoidable) | −$90,000 |
| Star fee | −$39,989 |
| Marketing campaign | −$20,000 |
| Paid from studio cash (overrun) | $4,989 |
| **Unused advance kept at completion** | $0 |
| Gross from sales (10 weeks) | $552,627 |
| Distributor royalty (30% of weekly gross) | −$165,788 |
| **Studio take** | $386,839 |
| Net for this title (surplus + take − cash overrun; wages are studio-wide, excluded) | $381,850 |

**Quality trace** [scores are computed, never rolled]

Meters (0–100): Plot 79.87 · Writing 81.59 · Filming 80.89 · Editing 69.97
Inputs: staff points {"plot":203.34,"writing":227.14,"filming":188.18,"editing":114.84}, Star filming points 70.56 (Star family fit 89), studio Action level 1 (+3%), era bar x1.1
Base scores: Audience 7.7 / Critic 7.91 · no weak meter
Combo grades: Audience C (x1) / Critic C (x1) · repetition fatigue x1 · critic saturation x0.9
Before expectations (after combo, weakness, fatigue, saturation; pre-clamp): Audience 7.7 / Critic 7.12 · critic generation 0 (−0.0%, scale) · audience era 0 (−0.0%) · then clamp 0–10 (generation/era 0 = the ones active at game start)
**Final: Audience 7.7 / Critic 7.12 → avg 7.41**

**Opening & viewership trace** [marketing/Fame/reach affect viewers only]

Awareness inputs: base 0.35, marketing 0.55, studioBuzz 0, starFame 0.29, trend 0.1, ipFans 0 → awareness 0.72. Reach cap 264,000 → pool 191,096 → opening 57,329.

| Wk | Viewers | Retention | Driver | Gross | Studio | Distributor |
|---:|---:|---:|---|---:|---:|---:|
| 1 | 95,548 | 1 | episode 1 premiere | $54,462 | $38,124 | $16,339 |
| 2 | 118,517 | 1.24 | episode 2: 100% kept (critic 7.12), +22,969 new | $67,555 | $47,288 | $20,266 |
| 3 | 133,243 | 1.12 | episode 3: 100% kept (critic 7.12), +14,726 new | $75,949 | $53,164 | $22,785 |
| 4 | 149,682 | 1.12 | episode 4: 100% kept (audience 7.7), +16,439 new | $85,319 | $59,723 | $25,596 |
| 5 | 167,718 | 1.12 | episode 5: 100% kept (audience 7.7), +18,036 new | $95,599 | $66,919 | $28,680 |
| 6 | 187,693 | 1.12 | episode 6: 100% kept (audience 7.7), +19,975 new | $106,985 | $74,890 | $32,096 |
| 7 | 75,077 | 0.4 | catch-up viewing (tail week 1/3) | $42,794 | $29,956 | $12,838 |
| 8 | 30,031 | 0.4 | catch-up viewing (tail week 2/3) | $17,118 | $11,982 | $5,135 |
| 9 | 12,012 | 0.4 | catch-up viewing (tail week 3/3) | $6,847 | $4,793 | $2,054 |
| 10 | 0 | 0 | run ended | $0 | $0 | $0 |

**Progression trace**

- Prestige awards: Prestige +75: audience_7_5 (Hollow Protocol).
- IP fans: {"before":0,"after":7237,"delta":7237}
- Star career: {"fameDelta":6.7,"relDelta":0.75,"grow":6,"level":3,"reasons":"worked together (+); project boosted their career (+)"}
- Distributor trust: Wolf Pictures earned 114% of its advance back on Hollow Protocol with strong reviews (step 0.34)
- Rule labels: LOCKED = causal chain, accounting, fallback/no-campaign, thresholds 4.0/9.0, IP fan inheritance. WORKING ASSUMPTION = all formulas' shapes and numbers.

### Dead Horizon — Horror + Superheroes (new)

Released week 142 (year 2.7) · Distributor: Wolf Pictures · Star: Jay Vale (L10, Fame 100) · IP: Dead Horizon
Format: **limited_series**, 6 episodes (one per week) · 199,557 distinct viewers, 987,244 viewer-episodes · self-contained: never renews

**Financial waterfall** [LOCKED rules; amounts provisional]

| Item | Amount |
|---|---:|
| Advance received (project reserve, not revenue) | $169,000 |
| Base cost (unavoidable) | −$90,000 |
| Star fee | −$33,718 |
| Marketing campaign | −$20,000 |
| Paid from studio cash (overrun) | $0 |
| **Unused advance kept at completion** | $25,282 |
| Gross from sales (10 weeks) | $562,729 |
| Distributor royalty (30% of weekly gross) | −$168,819 |
| **Studio take** | $393,910 |
| Net for this title (surplus + take − cash overrun; wages are studio-wide, excluded) | $419,193 |

**Quality trace** [scores are computed, never rolled]

Meters (0–100): Plot 81.39 · Writing 83.01 · Filming 81.62 · Editing 71.48
Inputs: staff points {"plot":227.02,"writing":253.69,"filming":209.49,"editing":125.12}, Star filming points 65.31 (Star family fit 80), studio Horror level 2 (+6%), era bar x1.11
Base scores: Audience 7.82 / Critic 8.05 · no weak meter
Combo grades: Audience A (x1.15) / Critic B (x1.06) · repetition fatigue x1 · critic saturation x1
Before expectations (after combo, weakness, fatigue, saturation; pre-clamp): Audience 9 / Critic 8.53 · critic generation 0 (−0.0%, scale) · audience era 0 (−0.0%) · then clamp 0–10 (generation/era 0 = the ones active at game start)
**Final: Audience 9 / Critic 8.53 → avg 8.77**

**Opening & viewership trace** [marketing/Fame/reach affect viewers only]

Awareness inputs: base 0.35, marketing 0.55, studioBuzz 0, starFame 0.27, trend 0, ipFans 0 → awareness 0.69. Reach cap 264,000 → pool 182,392 → opening 54,718.

| Wk | Viewers | Retention | Driver | Gross | Studio | Distributor |
|---:|---:|---:|---|---:|---:|---:|
| 1 | 91,196 | 1 | episode 1 premiere | $51,982 | $36,387 | $15,595 |
| 2 | 115,012 | 1.26 | episode 2: 100% kept (critic 8.53), +23,816 new | $65,557 | $45,890 | $19,667 |
| 3 | 130,446 | 1.13 | episode 3: 100% kept (critic 8.53), +15,434 new | $74,354 | $52,048 | $22,306 |
| 4 | 150,849 | 1.16 | episode 4: 100% kept (audience 9), +20,403 new | $85,984 | $60,189 | $25,795 |
| 5 | 175,660 | 1.16 | episode 5: 100% kept (audience 9), +24,811 new | $100,126 | $70,088 | $30,038 |
| 6 | 199,557 | 1.14 | episode 6: 100% kept (audience 9), +23,897 new | $113,747 | $79,623 | $34,124 |
| 7 | 79,823 | 0.4 | catch-up viewing (tail week 1/3) | $45,499 | $31,849 | $13,650 |
| 8 | 31,929 | 0.4 | catch-up viewing (tail week 2/3) | $18,200 | $12,740 | $5,460 |
| 9 | 12,772 | 0.4 | catch-up viewing (tail week 3/3) | $7,280 | $5,096 | $2,184 |
| 10 | 0 | 0 | run ended | $0 | $0 | $0 |

**Progression trace**

- Prestige awards: Prestige +50: meters_all_70 (Dead Horizon).; Prestige +75: audience_7_5 (Dead Horizon).; Prestige +85: critic_8_5 (Dead Horizon).
- IP fans: {"before":0,"after":12037,"delta":12037}
- Star career: {"fameDelta":10.76,"relDelta":0.75,"grow":6,"level":7,"reasons":"worked together (+); project boosted their career (+)"}
- Distributor trust: Wolf Pictures earned back 100% of its $169,000 advance on Dead Horizon (step 0.4)
- Rule labels: LOCKED = causal chain, accounting, fallback/no-campaign, thresholds 4.0/9.0, IP fan inheritance. WORKING ASSUMPTION = all formulas' shapes and numbers.

### Silver Shadow — Horror + Superheroes (new)

Released week 158 (year 3.0) · Distributor: Wolf Pictures · Star: Jay Vale (L10, Fame 100) · IP: Silver Shadow
Format: **tv season 1**, 5 episodes (one per week) · 179,834 distinct viewers, 764,776 viewer-episodes · renewal: average 8.72 ≥ 4.0 → renewable

**Financial waterfall** [LOCKED rules; amounts provisional]

| Item | Amount |
|---|---:|
| Advance received (project reserve, not revenue) | $173,000 |
| Base cost (unavoidable) | −$90,000 |
| Star fee | −$31,973 |
| Marketing campaign | −$20,000 |
| Paid from studio cash (overrun) | $0 |
| **Unused advance kept at completion** | $31,027 |
| Gross from sales (8 weeks) | $244,728 |
| Distributor royalty (29% of weekly gross) | −$70,971 |
| **Studio take** | $173,757 |
| Net for this title (surplus + take − cash overrun; wages are studio-wide, excluded) | $204,784 |

**Quality trace** [scores are computed, never rolled]

Meters (0–100): Plot 84.26 · Writing 86.15 · Filming 83.89 · Editing 78.15
Inputs: staff points {"plot":249.79,"writing":290.26,"filming":230.92,"editing":160.49}, Star filming points 58.78 (Star family fit 86), studio Horror level 2 (+6%), era bar x1.12
Base scores: Audience 8.23 / Critic 8.39 · no weak meter
Combo grades: Audience A (x1.15) / Critic B (x1.06) · repetition fatigue x0.95 · critic saturation x1
Before expectations (after combo, weakness, fatigue, saturation; pre-clamp): Audience 8.99 / Critic 8.45 · critic generation 0 (−0.0%, scale) · audience era 0 (−0.0%) · then clamp 0–10 (generation/era 0 = the ones active at game start)
**Final: Audience 8.99 / Critic 8.45 → avg 8.72**

**Opening & viewership trace** [marketing/Fame/reach affect viewers only]

Awareness inputs: base 0.35, marketing 0.55, studioBuzz 0, starFame 0.34, trend 0, ipFans 0, announcement 0 → awareness 0.71. Reach cap 264,000 → pool 187,494 → opening 56,248.

| Wk | Viewers | Retention | Driver | Gross | Studio | Distributor |
|---:|---:|---:|---|---:|---:|---:|
| 1 | 93,747 | 1 | episode 1 premiere | $29,999 | $21,299 | $8,700 |
| 2 | 118,033 | 1.26 | episode 2: 100% kept (critic 8.45), +24,286 new | $37,771 | $26,817 | $10,953 |
| 3 | 133,686 | 1.13 | episode 3: 100% kept (critic 8.45), +15,653 new | $42,780 | $30,373 | $12,406 |
| 4 | 154,504 | 1.16 | episode 4: 100% kept (audience 8.99), +20,818 new | $49,441 | $35,103 | $14,338 |
| 5 | 179,834 | 1.16 | episode 5: 100% kept (audience 8.99), +25,330 new | $57,547 | $40,858 | $16,689 |
| 6 | 62,942 | 0.35 | catch-up viewing (tail week 1/2) | $20,141 | $14,300 | $5,841 |
| 7 | 22,030 | 0.35 | catch-up viewing (tail week 2/2) | $7,050 | $5,005 | $2,044 |
| 8 | 0 | 0 | run ended | $0 | $0 | $0 |

**Progression trace**

- Prestige awards: Prestige +50: meters_all_70 (Silver Shadow).; Prestige +75: audience_7_5 (Silver Shadow).
- IP fans: {"before":0,"after":10704,"delta":10704}
- Star career: {"fameDelta":10.14,"relDelta":0.75,"grow":6,"level":7,"reasons":"worked together (+); project boosted their career (+)"}
- Distributor trust: Wolf Pictures earned back 41% of its $173,000 advance on Silver Shadow (step 0.05)
- Rule labels: LOCKED = causal chain, accounting, fallback/no-campaign, thresholds 4.0/9.0, IP fan inheritance. WORKING ASSUMPTION = all formulas' shapes and numbers.

### Silver Shadow: Season 2 — Horror + Superheroes (season)

Released week 174 (year 3.3) · Distributor: Wolf Pictures · Star: Jay Vale (L10, Fame 100) · IP: Silver Shadow
Format: **tv season 2**, 5 episodes (one per week) · 196,061 distinct viewers, 841,563 viewer-episodes · renewal: average 8.73 ≥ 4.0 → renewable
TV: show-age fatigue 0.9% (base 1.2%, quality slows by 23%) · twist none · hiatus 8 weeks since the last season aired → anticipation ×1 · announcement anticipation used 0.19

**Financial waterfall** [LOCKED rules; amounts provisional]

| Item | Amount |
|---|---:|
| Advance received (project reserve, not revenue) | $181,000 |
| Base cost (unavoidable) | −$90,000 |
| Star fee | −$39,569 |
| Marketing campaign | −$20,000 |
| Paid from studio cash (overrun) | $0 |
| **Unused advance kept at completion** | $31,431 |
| Gross from sales (8 weeks) | $269,300 |
| Distributor royalty (29% of weekly gross) | −$78,097 |
| **Studio take** | $191,203 |
| Net for this title (surplus + take − cash overrun; wages are studio-wide, excluded) | $222,634 |

**Quality trace** [scores are computed, never rolled]

Meters (0–100): Plot 85.22 · Writing 86.97 · Filming 84.88 · Editing 79.32
Inputs: staff points {"plot":271.98,"writing":314.93,"filming":251.41,"editing":173.98}, Star filming points 64.38 (Star family fit 92), studio Horror level 2 (+6%), era bar x1.13
Base scores: Audience 8.33 / Critic 8.49 · no weak meter
Combo grades: Audience A (x1.15) / Critic B (x1.06) · repetition fatigue x0.94 · critic saturation x1
Before expectations (after combo, weakness, fatigue, saturation; pre-clamp): Audience 9 / Critic 8.46 · critic generation 0 (−0.0%, scale) · audience era 0 (−0.0%) · then clamp 0–10 (generation/era 0 = the ones active at game start)
**Final: Audience 9 / Critic 8.46 → avg 8.73**

**Opening & viewership trace** [marketing/Fame/reach affect viewers only]

Awareness inputs: base 0.35, marketing 0.55, studioBuzz 0, starFame 0.4, trend 0, ipFans 0.07, announcement 0.19 → awareness 0.79. Reach cap 264,000 → pool 208,263 → opening 62,479.

| Wk | Viewers | Retention | Driver | Gross | Studio | Distributor |
|---:|---:|---:|---|---:|---:|---:|
| 1 | 104,132 | 1 | episode 1 premiere | $33,322 | $23,659 | $9,663 |
| 2 | 130,767 | 1.26 | episode 2: 100% kept (critic 8.46), +26,635 new | $41,845 | $29,710 | $12,135 |
| 3 | 147,608 | 1.13 | episode 3: 100% kept (critic 8.46), +16,841 new | $47,235 | $33,537 | $13,698 |
| 4 | 170,357 | 1.15 | episode 4: 100% kept (audience 9), +22,749 new | $54,514 | $38,705 | $15,809 |
| 5 | 196,061 | 1.15 | episode 5: 100% kept (audience 9), +25,704 new | $62,740 | $44,545 | $18,194 |
| 6 | 68,621 | 0.35 | catch-up viewing (tail week 1/2) | $21,959 | $15,591 | $6,368 |
| 7 | 24,017 | 0.35 | catch-up viewing (tail week 2/2) | $7,685 | $5,457 | $2,229 |
| 8 | 0 | 0 | run ended | $0 | $0 | $0 |

**Progression trace**

- Prestige awards: Prestige +50: meters_all_70 (Silver Shadow: Season 2).; Prestige +75: audience_7_5 (Silver Shadow: Season 2).
- IP fans: {"before":10381,"after":22082,"delta":11701}
- Star career: {"fameDelta":10.57,"relDelta":0.75,"grow":6,"level":8,"reasons":"worked together (+); project boosted their career (+)"}
- Distributor trust: Wolf Pictures earned back 43% of its $181,000 advance on Silver Shadow: Season 2 (step 0.06)
- Rule labels: LOCKED = causal chain, accounting, fallback/no-campaign, thresholds 4.0/9.0, IP fan inheritance. WORKING ASSUMPTION = all formulas' shapes and numbers.

### Silver Shadow: Season 3 — Horror + Superheroes (season)

Released week 200 (year 3.8) · Distributor: Orbit Releasing · Star: Jay Vale (L10, Fame 100) · IP: Silver Shadow
Format: **tv season 3**, 10 episodes (one per week) · 313,696 distinct viewers, 2,579,418 viewer-episodes · renewal: average 8.65 ≥ 4.0 → renewable
TV: show-age fatigue 2.8% (base 3.6%, quality slows by 23%) · twist none · hiatus 18 weeks since the last season aired → anticipation ×1 · announcement anticipation used 0.13

**Financial waterfall** [LOCKED rules; amounts provisional]

| Item | Amount |
|---|---:|
| Advance received (project reserve, not revenue) | $241,000 |
| Base cost (unavoidable) | −$165,000 |
| Star fee | −$55,799 |
| Marketing campaign | −$20,000 |
| Paid from studio cash (overrun) | $0 |
| **Unused advance kept at completion** | $201 |
| Gross from sales (13 weeks) | $825,414 |
| Distributor royalty (35% of weekly gross) | −$288,895 |
| **Studio take** | $536,519 |
| Net for this title (surplus + take − cash overrun; wages are studio-wide, excluded) | $536,720 |

**Quality trace** [scores are computed, never rolled]

Meters (0–100): Plot 85.99 · Writing 87.69 · Filming 86.13 · Editing 80.86
Inputs: staff points {"plot":478.94,"writing":555.52,"filming":460.11,"editing":316.86}, Star filming points 117.5 (Star family fit 98), studio Horror level 3 (+9%), era bar x1.15
Base scores: Audience 8.45 / Critic 8.58 · no weak meter
Combo grades: Audience A (x1.15) / Critic B (x1.06) · repetition fatigue x0.92 · critic saturation x1
Before expectations (after combo, weakness, fatigue, saturation; pre-clamp): Audience 8.94 / Critic 8.37 · critic generation 0 (−0.0%, scale) · audience era 0 (−0.0%) · then clamp 0–10 (generation/era 0 = the ones active at game start)
**Final: Audience 8.94 / Critic 8.37 → avg 8.65**

**Opening & viewership trace** [marketing/Fame/reach affect viewers only]

Awareness inputs: base 0.35, marketing 0.55, studioBuzz 0, starFame 0.46, trend 0, ipFans 0.13, announcement 0.13 → awareness 0.8. Reach cap 332,000 → pool 266,701 → opening 80,010.

| Wk | Viewers | Retention | Driver | Gross | Studio | Distributor |
|---:|---:|---:|---|---:|---:|---:|
| 1 | 133,351 | 1 | episode 1 premiere | $42,672 | $27,737 | $14,935 |
| 2 | 167,234 | 1.25 | episode 2: 100% kept (critic 8.37), +33,883 new | $53,515 | $34,785 | $18,730 |
| 3 | 188,598 | 1.13 | episode 3: 100% kept (critic 8.37), +21,364 new | $60,351 | $39,228 | $21,123 |
| 4 | 217,331 | 1.15 | episode 4: 100% kept (audience 8.94), +28,733 new | $69,546 | $45,205 | $24,341 |
| 5 | 248,625 | 1.14 | episode 5: 100% kept (audience 8.94), +31,294 new | $79,560 | $51,714 | $27,846 |
| 6 | 270,286 | 1.09 | episode 6: 100% kept (audience 8.94), +21,661 new | $86,492 | $56,219 | $30,272 |
| 7 | 286,477 | 1.06 | episode 7: 100% kept (audience 8.94), +16,191 new | $91,673 | $59,587 | $32,085 |
| 8 | 298,398 | 1.04 | episode 8: 100% kept (audience 8.94), +11,921 new | $95,487 | $62,067 | $33,421 |
| 9 | 307,200 | 1.03 | episode 9: 100% kept (audience 8.94), +8,802 new | $98,304 | $63,898 | $34,406 |
| 10 | 313,696 | 1.02 | episode 10: 100% kept (audience 8.94), +6,496 new | $100,383 | $65,249 | $35,134 |
| 11 | 109,794 | 0.35 | catch-up viewing (tail week 1/2) | $35,134 | $22,837 | $12,297 |
| 12 | 38,428 | 0.35 | catch-up viewing (tail week 2/2) | $12,297 | $7,993 | $4,304 |
| 13 | 0 | 0 | run ended | $0 | $0 | $0 |

**Progression trace**

- Prestige awards: Prestige +50: meters_all_70 (Silver Shadow: Season 3).; Prestige +75: audience_7_5 (Silver Shadow: Season 3).; Prestige +150: ip_viewers_500k (Silver Shadow: Season 3).; Prestige +100: ip_gross_1m (Silver Shadow: Season 3).
- IP fans: {"before":20805,"after":39125,"delta":18320}
- Star career: {"fameDelta":12.35,"relDelta":0.75,"grow":2,"level":8,"reasons":"worked together (+); project boosted their career (+)"}
- Distributor trust: Orbit Releasing earned 120% of its advance back on Silver Shadow: Season 3 with strong reviews (step 0.52)
- Rule labels: LOCKED = causal chain, accounting, fallback/no-campaign, thresholds 4.0/9.0, IP fan inheritance. WORKING ASSUMPTION = all formulas' shapes and numbers.

### Silver Shadow: Season 4 — Horror + Superheroes (season)

Released week 226 (year 4.3) · Distributor: Wolf Pictures · Star: Jay Vale (L10, Fame 100) · IP: Silver Shadow
Format: **tv season 4**, 10 episodes (one per week) · 250,155 distinct viewers, 2,083,537 viewer-episodes · renewal: average 8.53 ≥ 4.0 → renewable
TV: show-age fatigue 5.4% (base 7.0%, quality slows by 22%) · twist none · hiatus 13 weeks since the last season aired → anticipation ×1 · announcement anticipation used 0.13

**Financial waterfall** [LOCKED rules; amounts provisional]

| Item | Amount |
|---|---:|
| Advance received (project reserve, not revenue) | $323,000 |
| Base cost (unavoidable) | −$165,000 |
| Star fee | −$52,863 |
| Marketing campaign | −$20,000 |
| Paid from studio cash (overrun) | $0 |
| **Unused advance kept at completion** | $85,137 |
| Gross from sales (13 weeks) | $666,732 |
| Distributor royalty (29% of weekly gross) | −$193,352 |
| **Studio take** | $473,380 |
| Net for this title (surplus + take − cash overrun; wages are studio-wide, excluded) | $558,516 |

**Quality trace** [scores are computed, never rolled]

Meters (0–100): Plot 86.75 · Writing 88.33 · Filming 86.69 · Editing 81.43
Inputs: staff points {"plot":519.52,"writing":600.44,"filming":496.31,"editing":334.61}, Star filming points 119.66 (Star family fit 100), studio Horror level 3 (+9%), era bar x1.17
Base scores: Audience 8.51 / Critic 8.65 · no weak meter
Combo grades: Audience A (x1.15) / Critic B (x1.06) · repetition fatigue x0.9 · critic saturation x1
Before expectations (after combo, weakness, fatigue, saturation; pre-clamp): Audience 8.81 / Critic 8.25 · critic generation 0 (−0.0%, scale) · audience era 0 (−0.0%) · then clamp 0–10 (generation/era 0 = the ones active at game start)
**Final: Audience 8.81 / Critic 8.25 → avg 8.53**

**Opening & viewership trace** [marketing/Fame/reach affect viewers only]

Awareness inputs: base 0.35, marketing 0.55, studioBuzz 0, starFame 0.54, trend 0, ipFans 0.24, announcement 0.13 → awareness 0.84. Reach cap 264,000 → pool 220,597 → opening 66,179.

| Wk | Viewers | Retention | Driver | Gross | Studio | Distributor |
|---:|---:|---:|---|---:|---:|---:|
| 1 | 110,299 | 1 | episode 1 premiere | $35,296 | $25,060 | $10,236 |
| 2 | 138,038 | 1.25 | episode 2: 100% kept (critic 8.25), +27,739 new | $44,172 | $31,362 | $12,810 |
| 3 | 155,424 | 1.13 | episode 3: 100% kept (critic 8.25), +17,386 new | $49,736 | $35,312 | $14,423 |
| 4 | 178,497 | 1.15 | episode 4: 100% kept (audience 8.81), +23,073 new | $57,119 | $40,555 | $16,565 |
| 5 | 201,514 | 1.13 | episode 5: 100% kept (audience 8.81), +23,017 new | $64,484 | $45,784 | $18,701 |
| 6 | 217,686 | 1.08 | episode 6: 100% kept (audience 8.81), +16,172 new | $69,660 | $49,458 | $20,201 |
| 7 | 229,766 | 1.06 | episode 7: 100% kept (audience 8.81), +12,080 new | $73,525 | $52,203 | $21,322 |
| 8 | 238,682 | 1.04 | episode 8: 100% kept (audience 8.81), +8,916 new | $76,378 | $54,229 | $22,150 |
| 9 | 245,278 | 1.03 | episode 9: 100% kept (audience 8.81), +6,596 new | $78,489 | $55,727 | $22,762 |
| 10 | 250,155 | 1.02 | episode 10: 100% kept (audience 8.81), +4,877 new | $80,050 | $56,835 | $23,214 |
| 11 | 87,554 | 0.35 | catch-up viewing (tail week 1/2) | $28,017 | $19,892 | $8,125 |
| 12 | 30,644 | 0.35 | catch-up viewing (tail week 2/2) | $9,806 | $6,962 | $2,844 |
| 13 | 0 | 0 | run ended | $0 | $0 | $0 |

**Progression trace**

- Prestige awards: Prestige +50: meters_all_70 (Silver Shadow: Season 4).; Prestige +75: audience_7_5 (Silver Shadow: Season 4).
- IP fans: {"before":37214,"after":51343,"delta":14129}
- Star career: {"fameDelta":11.03,"relDelta":0.75,"grow":0,"level":9,"reasons":"worked together (+); project boosted their career (+)"}
- Distributor trust: Wolf Pictures earned back 60% of its $323,000 advance on Silver Shadow: Season 4 (step 0.16)
- Rule labels: LOCKED = causal chain, accounting, fallback/no-campaign, thresholds 4.0/9.0, IP fan inheritance. WORKING ASSUMPTION = all formulas' shapes and numbers.

### Silver Shadow: Season 5 — Horror + Superheroes (season)

Released week 252 (year 4.8) · Distributor: Meridian Global · Star: Jay Vale (L10, Fame 100) · IP: Silver Shadow
Format: **tv season 5**, 10 episodes (one per week) · 379,429 distinct viewers, 3,184,409 viewer-episodes · renewal: average 8.35 ≥ 4.0 → renewable
TV: show-age fatigue 8.8% (base 11.0%, quality slows by 20%) · twist none · hiatus 13 weeks since the last season aired → anticipation ×1 · announcement anticipation used 0.13

**Financial waterfall** [LOCKED rules; amounts provisional]

| Item | Amount |
|---|---:|
| Advance received (project reserve, not revenue) | $341,000 |
| Base cost (unavoidable) | −$165,000 |
| Star fee | −$63,888 |
| Marketing campaign | −$20,000 |
| Paid from studio cash (overrun) | $0 |
| **Unused advance kept at completion** | $92,112 |
| Gross from sales (13 weeks) | $1,019,011 |
| Distributor royalty (48% of weekly gross) | −$489,125 |
| **Studio take** | $529,886 |
| Net for this title (surplus + take − cash overrun; wages are studio-wide, excluded) | $621,997 |

**Quality trace** [scores are computed, never rolled]

Meters (0–100): Plot 88.73 · Writing 90.02 · Filming 88.4 · Editing 84.44
Inputs: staff points {"plot":635.64,"writing":728.27,"filming":613.42,"editing":421.03}, Star filming points 119.9 (Star family fit 100), studio Horror level 3 (+9%), era bar x1.19
Base scores: Audience 8.73 / Critic 8.85 · no weak meter
Combo grades: Audience A (x1.15) / Critic B (x1.06) · repetition fatigue x0.86 · critic saturation x1
Before expectations (after combo, weakness, fatigue, saturation; pre-clamp): Audience 8.63 / Critic 8.07 · critic generation 0 (−0.0%, scale) · audience era 0 (−0.0%) · then clamp 0–10 (generation/era 0 = the ones active at game start)
**Final: Audience 8.63 / Critic 8.07 → avg 8.35**

**Opening & viewership trace** [marketing/Fame/reach affect viewers only]

Awareness inputs: base 0.35, marketing 0.55, studioBuzz 0, starFame 0.6, trend 0, ipFans 0.31, announcement 0.13 → awareness 0.86. Reach cap 400,000 → pool 342,688 → opening 102,806.

| Wk | Viewers | Retention | Driver | Gross | Studio | Distributor |
|---:|---:|---:|---|---:|---:|---:|
| 1 | 171,344 | 1 | episode 1 premiere | $54,830 | $28,512 | $26,318 |
| 2 | 213,952 | 1.25 | episode 2: 100% kept (critic 8.07), +42,608 new | $68,465 | $35,602 | $32,863 |
| 3 | 240,585 | 1.12 | episode 3: 100% kept (critic 8.07), +26,633 new | $76,987 | $40,033 | $36,954 |
| 4 | 275,143 | 1.14 | episode 4: 100% kept (audience 8.63), +34,558 new | $88,046 | $45,784 | $42,262 |
| 5 | 308,370 | 1.12 | episode 5: 100% kept (audience 8.63), +33,227 new | $98,678 | $51,313 | $47,366 |
| 6 | 331,923 | 1.08 | episode 6: 100% kept (audience 8.63), +23,553 new | $106,215 | $55,232 | $50,983 |
| 7 | 349,542 | 1.05 | episode 7: 100% kept (audience 8.63), +17,619 new | $111,853 | $58,164 | $53,690 |
| 8 | 362,584 | 1.04 | episode 8: 100% kept (audience 8.63), +13,042 new | $116,027 | $60,334 | $55,693 |
| 9 | 372,257 | 1.03 | episode 9: 100% kept (audience 8.63), +9,673 new | $119,122 | $61,944 | $57,179 |
| 10 | 379,429 | 1.02 | episode 10: 100% kept (audience 8.63), +7,172 new | $121,417 | $63,137 | $58,280 |
| 11 | 132,800 | 0.35 | catch-up viewing (tail week 1/2) | $42,496 | $22,098 | $20,398 |
| 12 | 46,480 | 0.35 | catch-up viewing (tail week 2/2) | $14,874 | $7,734 | $7,139 |
| 13 | 0 | 0 | run ended | $0 | $0 | $0 |

**Progression trace**

- Prestige awards: Prestige +50: meters_all_70 (Silver Shadow: Season 5).; Prestige +75: audience_7_5 (Silver Shadow: Season 5).
- IP fans: {"before":48837,"after":69174,"delta":20337}
- Star career: {"fameDelta":12,"relDelta":0.25,"grow":0,"level":9,"reasons":"worked together (+)"}
- Distributor trust: Meridian Global earned 143% of its advance back on Silver Shadow: Season 5 with strong reviews (step 0.64)
- Rule labels: LOCKED = causal chain, accounting, fallback/no-campaign, thresholds 4.0/9.0, IP fan inheritance. WORKING ASSUMPTION = all formulas' shapes and numbers.

### Silver Shadow: Season 6 — Horror + Superheroes (season)

Released week 278 (year 5.3) · Distributor: Meridian Global · Star: Jay Vale (L10, Fame 100) · IP: Silver Shadow
Format: **tv season 6**, 10 episodes (one per week) · 379,024 distinct viewers, 3,193,502 viewer-episodes · renewal: average 8.02 ≥ 4.0 → renewable
TV: show-age fatigue 12.9% (base 15.8%, quality slows by 18%) · twist none · hiatus 13 weeks since the last season aired → anticipation ×1 · announcement anticipation used 0.13

**Financial waterfall** [LOCKED rules; amounts provisional]

| Item | Amount |
|---|---:|
| Advance received (project reserve, not revenue) | $337,000 |
| Base cost (unavoidable) | −$165,000 |
| Star fee | −$73,502 |
| Marketing campaign | −$20,000 |
| Paid from studio cash (overrun) | $0 |
| **Unused advance kept at completion** | $78,498 |
| Gross from sales (13 weeks) | $1,021,921 |
| Distributor royalty (48% of weekly gross) | −$490,522 |
| **Studio take** | $531,399 |
| Net for this title (surplus + take − cash overrun; wages are studio-wide, excluded) | $609,897 |

**Quality trace** [scores are computed, never rolled]

Meters (0–100): Plot 89.35 · Writing 90.57 · Filming 88.97 · Editing 85.14
Inputs: staff points {"plot":688.36,"writing":788.4,"filming":669.51,"editing":451.93}, Star filming points 119.9 (Star family fit 100), studio Horror level 3 (+9%), era bar x1.21
Base scores: Audience 8.79 / Critic 8.91 · no weak meter
Combo grades: Audience A (x1.15) / Critic B (x1.06) · repetition fatigue x0.82 · critic saturation x1
Before expectations (after combo, weakness, fatigue, saturation; pre-clamp): Audience 8.29 / Critic 7.74 · critic generation 0 (−0.0%, scale) · audience era 0 (−0.0%) · then clamp 0–10 (generation/era 0 = the ones active at game start)
**Final: Audience 8.29 / Critic 7.74 → avg 8.02**

**Opening & viewership trace** [marketing/Fame/reach affect viewers only]

Awareness inputs: base 0.35, marketing 0.55, studioBuzz 0, starFame 0.6, trend 0, ipFans 0.42, announcement 0.13 → awareness 0.87. Reach cap 400,000 → pool 348,591 → opening 104,577.

| Wk | Viewers | Retention | Driver | Gross | Studio | Distributor |
|---:|---:|---:|---|---:|---:|---:|
| 1 | 174,296 | 1 | episode 1 premiere | $55,775 | $29,003 | $26,772 |
| 2 | 216,888 | 1.24 | episode 2: 100% kept (critic 7.74), +42,592 new | $69,404 | $36,090 | $33,314 |
| 3 | 243,510 | 1.12 | episode 3: 100% kept (critic 7.74), +26,622 new | $77,923 | $40,520 | $37,403 |
| 4 | 276,424 | 1.14 | episode 4: 100% kept (audience 8.29), +32,914 new | $88,456 | $45,997 | $42,459 |
| 5 | 308,900 | 1.12 | episode 5: 100% kept (audience 8.29), +32,476 new | $98,848 | $51,401 | $47,447 |
| 6 | 331,968 | 1.07 | episode 6: 100% kept (audience 8.29), +23,068 new | $106,230 | $55,239 | $50,990 |
| 7 | 349,321 | 1.05 | episode 7: 100% kept (audience 8.29), +17,353 new | $111,783 | $58,127 | $53,656 |
| 8 | 362,230 | 1.04 | episode 8: 100% kept (audience 8.29), +12,909 new | $115,914 | $60,275 | $55,639 |
| 9 | 371,853 | 1.03 | episode 9: 100% kept (audience 8.29), +9,623 new | $118,993 | $61,876 | $57,117 |
| 10 | 379,024 | 1.02 | episode 10: 100% kept (audience 8.29), +7,171 new | $121,288 | $63,070 | $58,218 |
| 11 | 132,658 | 0.35 | catch-up viewing (tail week 1/2) | $42,451 | $22,074 | $20,376 |
| 12 | 46,430 | 0.35 | catch-up viewing (tail week 2/2) | $14,858 | $7,726 | $7,132 |
| 13 | 0 | 0 | run ended | $0 | $0 | $0 |

**Progression trace**

- Prestige awards: Prestige +50: meters_all_70 (Silver Shadow: Season 6).; Prestige +75: audience_7_5 (Silver Shadow: Season 6).
- IP fans: {"before":65798,"after":84112,"delta":18314}
- Star career: {"fameDelta":10.82,"relDelta":0.25,"grow":0,"level":10,"reasons":"worked together (+)"}
- Distributor trust: Meridian Global earned 146% of its advance back on Silver Shadow: Season 6 with strong reviews (step 0.61)
- Rule labels: LOCKED = causal chain, accounting, fallback/no-campaign, thresholds 4.0/9.0, IP fan inheritance. WORKING ASSUMPTION = all formulas' shapes and numbers.

### Silver Shadow: Season 7 — Horror + Superheroes (season)

Released week 304 (year 5.8) · Distributor: Meridian Global · Star: Jay Vale (L10, Fame 100) · IP: Silver Shadow
Format: **tv season 7**, 10 episodes (one per week) · 378,077 distinct viewers, 3,191,488 viewer-episodes · renewal: average 7.58 ≥ 4.0 → renewable
TV: show-age fatigue 18.2% (base 21.1%, quality slows by 14%) · twist none · hiatus 13 weeks since the last season aired → anticipation ×1 · announcement anticipation used 0.13

**Financial waterfall** [LOCKED rules; amounts provisional]

| Item | Amount |
|---|---:|
| Advance received (project reserve, not revenue) | $377,000 |
| Base cost (unavoidable) | −$165,000 |
| Star fee | −$72,656 |
| Marketing campaign | −$20,000 |
| Paid from studio cash (overrun) | $0 |
| **Unused advance kept at completion** | $119,344 |
| Gross from sales (13 weeks) | $1,021,276 |
| Distributor royalty (47% of weekly gross) | −$480,000 |
| **Studio take** | $541,276 |
| Net for this title (surplus + take − cash overrun; wages are studio-wide, excluded) | $660,620 |

**Quality trace** [scores are computed, never rolled]

Meters (0–100): Plot 89.95 · Writing 91.1 · Filming 89.49 · Editing 85.98
Inputs: staff points {"plot":746.52,"writing":854.2,"filming":723.16,"editing":491.68}, Star filming points 123.2 (Star family fit 100), studio Horror level 4 (+12%), era bar x1.23
Base scores: Audience 8.86 / Critic 8.97 · no weak meter
Combo grades: Audience A (x1.15) / Critic B (x1.06) · repetition fatigue x0.77 · critic saturation x1
Before expectations (after combo, weakness, fatigue, saturation; pre-clamp): Audience 7.84 / Critic 7.32 · critic generation 0 (−0.0%, scale) · audience era 0 (−0.0%) · then clamp 0–10 (generation/era 0 = the ones active at game start)
**Final: Audience 7.84 / Critic 7.32 → avg 7.58**

**Opening & viewership trace** [marketing/Fame/reach affect viewers only]

Awareness inputs: base 0.35, marketing 0.55, studioBuzz 0, starFame 0.6, trend 0, ipFans 0.51, announcement 0.13 → awareness 0.88. Reach cap 400,000 → pool 353,065 → opening 105,920.

| Wk | Viewers | Retention | Driver | Gross | Studio | Distributor |
|---:|---:|---:|---|---:|---:|---:|
| 1 | 176,533 | 1 | episode 1 premiere | $56,491 | $29,940 | $26,551 |
| 2 | 218,762 | 1.24 | episode 2: 100% kept (critic 7.32), +42,229 new | $70,004 | $37,102 | $32,902 |
| 3 | 245,202 | 1.12 | episode 3: 100% kept (critic 7.32), +26,440 new | $78,465 | $41,586 | $36,878 |
| 4 | 275,700 | 1.12 | episode 4: 100% kept (audience 7.84), +30,498 new | $88,224 | $46,759 | $41,465 |
| 5 | 307,919 | 1.12 | episode 5: 100% kept (audience 7.84), +32,219 new | $98,534 | $52,223 | $46,311 |
| 6 | 330,755 | 1.07 | episode 6: 100% kept (audience 7.84), +22,836 new | $105,842 | $56,096 | $49,746 |
| 7 | 348,077 | 1.05 | episode 7: 100% kept (audience 7.84), +17,322 new | $111,385 | $59,034 | $52,351 |
| 8 | 361,045 | 1.04 | episode 8: 100% kept (audience 7.84), +12,968 new | $115,534 | $61,233 | $54,301 |
| 9 | 370,777 | 1.03 | episode 9: 100% kept (audience 7.84), +9,732 new | $118,649 | $62,884 | $55,765 |
| 10 | 378,077 | 1.02 | episode 10: 100% kept (audience 7.84), +7,300 new | $120,985 | $64,122 | $56,863 |
| 11 | 132,327 | 0.35 | catch-up viewing (tail week 1/2) | $42,345 | $22,443 | $19,902 |
| 12 | 46,314 | 0.35 | catch-up viewing (tail week 2/2) | $14,820 | $7,855 | $6,966 |
| 13 | 0 | 0 | run ended | $0 | $0 | $0 |

**Progression trace**

- Prestige awards: Prestige +50: meters_all_70 (Silver Shadow: Season 7).; Prestige +75: audience_7_5 (Silver Shadow: Season 7).; Prestige +150: ip_gross_5m (Silver Shadow: Season 7).
- IP fans: {"before":80006,"after":95613,"delta":15607}
- Star career: {"fameDelta":9.24,"relDelta":0.25,"grow":0,"level":10,"reasons":"worked together (+)"}
- Distributor trust: Meridian Global earned 127% of its advance back on Silver Shadow: Season 7 with strong reviews (step 0.44)
- Rule labels: LOCKED = causal chain, accounting, fallback/no-campaign, thresholds 4.0/9.0, IP fan inheritance. WORKING ASSUMPTION = all formulas' shapes and numbers.

### Silver Shadow: Season 8 — Horror + Superheroes (season)

Released week 330 (year 6.3) · Distributor: Meridian Global · Star: Jay Vale (L10, Fame 100) · IP: Silver Shadow
Format: **tv season 8**, 10 episodes (one per week) · 376,110 distinct viewers, 3,118,583 viewer-episodes · renewal: average 6.92 ≥ 4.0 → renewable
TV: show-age fatigue 24.9% (base 27.0%, quality slows by 8%) · twist none · hiatus 13 weeks since the last season aired → anticipation ×1 · announcement anticipation used 0.13

**Financial waterfall** [LOCKED rules; amounts provisional]

| Item | Amount |
|---|---:|
| Advance received (project reserve, not revenue) | $363,000 |
| Base cost (unavoidable) | −$165,000 |
| Star fee | −$71,163 |
| Marketing campaign | −$20,000 |
| Paid from studio cash (overrun) | $0 |
| **Unused advance kept at completion** | $106,837 |
| Gross from sales (13 weeks) | $997,947 |
| Distributor royalty (46% of weekly gross) | −$459,055 |
| **Studio take** | $538,891 |
| Net for this title (surplus + take − cash overrun; wages are studio-wide, excluded) | $645,728 |

**Quality trace** [scores are computed, never rolled]

Meters (0–100): Plot 90.35 · Writing 91.45 · Filming 89.84 · Editing 86.45
Inputs: staff points {"plot":793.32,"writing":906.9,"filming":769.99,"editing":520.11}, Star filming points 123.2 (Star family fit 100), studio Horror level 4 (+12%), era bar x1.25
Base scores: Audience 8.9 / Critic 9.01 · no weak meter
Combo grades: Audience A (x1.15) / Critic B (x1.06) · repetition fatigue x0.7 · critic saturation x1
Before expectations (after combo, weakness, fatigue, saturation; pre-clamp): Audience 7.16 / Critic 6.68 · critic generation 0 (−0.0%, scale) · audience era 0 (−0.0%) · then clamp 0–10 (generation/era 0 = the ones active at game start)
**Final: Audience 7.16 / Critic 6.68 → avg 6.92**

**Opening & viewership trace** [marketing/Fame/reach affect viewers only]

Awareness inputs: base 0.35, marketing 0.55, studioBuzz 0, starFame 0.6, trend 0.15, ipFans 0.58, announcement 0.13 → awareness 0.91. Reach cap 400,000 → pool 362,338 → opening 108,701.

| Wk | Viewers | Retention | Driver | Gross | Studio | Distributor |
|---:|---:|---:|---|---:|---:|---:|
| 1 | 181,169 | 1 | episode 1 premiere | $57,974 | $31,306 | $26,668 |
| 2 | 219,629 | 1.21 | episode 2: 98% kept (critic 6.68), +41,938 new | $70,281 | $37,952 | $32,329 |
| 3 | 241,749 | 1.1 | episode 3: 98% kept (critic 6.68), +26,337 new | $77,360 | $41,774 | $35,585 |
| 4 | 268,555 | 1.11 | episode 4: 100% kept (audience 7.16), +26,806 new | $85,938 | $46,406 | $39,531 |
| 5 | 296,276 | 1.1 | episode 5: 100% kept (audience 7.16), +27,721 new | $94,808 | $51,196 | $43,612 |
| 6 | 319,870 | 1.08 | episode 6: 100% kept (audience 7.16), +23,594 new | $102,358 | $55,274 | $47,085 |
| 7 | 337,376 | 1.05 | episode 7: 100% kept (audience 7.16), +17,506 new | $107,960 | $58,299 | $49,662 |
| 8 | 350,693 | 1.04 | episode 8: 100% kept (audience 7.16), +13,317 new | $112,222 | $60,600 | $51,622 |
| 9 | 360,775 | 1.03 | episode 9: 100% kept (audience 7.16), +10,082 new | $115,448 | $62,342 | $53,106 |
| 10 | 368,415 | 1.02 | episode 10: 100% kept (audience 7.16), +7,640 new | $117,893 | $63,662 | $54,231 |
| 11 | 128,945 | 0.35 | catch-up viewing (tail week 1/2) | $41,262 | $22,282 | $18,981 |
| 12 | 45,131 | 0.35 | catch-up viewing (tail week 2/2) | $14,442 | $7,799 | $6,643 |
| 13 | 0 | 0 | run ended | $0 | $0 | $0 |

**Progression trace**

- Prestige awards: Prestige +50: meters_all_70 (Silver Shadow: Season 8).
- IP fans: {"before":90945,"after":102499,"delta":11554}
- Star career: {"fameDelta":6.86,"relDelta":0.25,"grow":0,"level":10,"reasons":"worked together (+)"}
- Distributor trust: Meridian Global earned 126% of its advance back on Silver Shadow: Season 8 (step 0.35)
- Rule labels: LOCKED = causal chain, accounting, fallback/no-campaign, thresholds 4.0/9.0, IP fan inheritance. WORKING ASSUMPTION = all formulas' shapes and numbers.

### Silver Signal — Action + Time Travel (new)

Released week 356 (year 6.8) · Distributor: XYZ Network · Star: Ivy Imai (L9, Fame 100) · IP: Silver Signal
Format: **tv season 1**, 10 episodes (one per week) · 349,862 distinct viewers, 2,829,070 viewer-episodes · renewal: average 8.45 ≥ 4.0 → renewable

**Financial waterfall** [LOCKED rules; amounts provisional]

| Item | Amount |
|---|---:|
| Advance received (project reserve, not revenue) | $288,000 |
| Base cost (unavoidable) | −$165,000 |
| Star fee | −$21,802 |
| Marketing campaign | −$20,000 |
| Paid from studio cash (overrun) | $0 |
| **Unused advance kept at completion** | $81,198 |
| Gross from sales (13 weeks) | $905,302 |
| Distributor royalty (44% of weekly gross) | −$398,333 |
| **Studio take** | $506,969 |
| Net for this title (surplus + take − cash overrun; wages are studio-wide, excluded) | $588,167 |

**Quality trace** [scores are computed, never rolled]

Meters (0–100): Plot 89.86 · Writing 91.01 · Filming 89.28 · Editing 85.68
Inputs: staff points {"plot":763.32,"writing":871.48,"filming":741.94,"editing":495.27}, Star filming points 113.3 (Star family fit 100), studio Action level 1 (+3%), era bar x1.27
Base scores: Audience 8.84 / Critic 8.95 · no weak meter
Combo grades: Audience D (x0.9) / Critic C (x1) · repetition fatigue x1 · critic saturation x1
Before expectations (after combo, weakness, fatigue, saturation; pre-clamp): Audience 7.95 / Critic 8.95 · critic generation 0 (−0.0%, scale) · audience era 0 (−0.0%) · then clamp 0–10 (generation/era 0 = the ones active at game start)
**Final: Audience 7.95 / Critic 8.95 → avg 8.45**

**Opening & viewership trace** [marketing/Fame/reach affect viewers only]

Awareness inputs: base 0.35, marketing 0.55, studioBuzz 0, starFame 0.19, trend 0.4, ipFans 0, announcement 0 → awareness 0.78. Reach cap 376,000 → pool 291,429 → opening 87,429.

| Wk | Viewers | Retention | Driver | Gross | Studio | Distributor |
|---:|---:|---:|---|---:|---:|---:|
| 1 | 145,715 | 1 | episode 1 premiere | $46,629 | $26,112 | $20,517 |
| 2 | 183,995 | 1.26 | episode 2: 100% kept (critic 8.95), +38,280 new | $58,878 | $32,972 | $25,907 |
| 3 | 208,245 | 1.13 | episode 3: 100% kept (critic 8.95), +24,250 new | $66,638 | $37,318 | $29,321 |
| 4 | 234,420 | 1.13 | episode 4: 100% kept (audience 7.95), +26,175 new | $75,014 | $42,008 | $33,006 |
| 5 | 264,173 | 1.13 | episode 5: 100% kept (audience 7.95), +29,753 new | $84,535 | $47,340 | $37,196 |
| 6 | 293,071 | 1.11 | episode 6: 100% kept (audience 7.95), +28,898 new | $93,783 | $52,518 | $41,264 |
| 7 | 313,770 | 1.07 | episode 7: 100% kept (audience 7.95), +20,699 new | $100,406 | $56,228 | $44,179 |
| 8 | 329,408 | 1.05 | episode 8: 100% kept (audience 7.95), +15,638 new | $105,411 | $59,030 | $46,381 |
| 9 | 341,101 | 1.04 | episode 9: 100% kept (audience 7.95), +11,693 new | $109,152 | $61,125 | $48,027 |
| 10 | 349,862 | 1.03 | episode 10: 100% kept (audience 7.95), +8,761 new | $111,956 | $62,695 | $49,261 |
| 11 | 122,452 | 0.35 | catch-up viewing (tail week 1/2) | $39,185 | $21,943 | $17,241 |
| 12 | 42,858 | 0.35 | catch-up viewing (tail week 2/2) | $13,715 | $7,680 | $6,034 |
| 13 | 0 | 0 | run ended | $0 | $0 | $0 |

**Progression trace**

- Prestige awards: Prestige +50: meters_all_70 (Silver Signal).; Prestige +75: audience_7_5 (Silver Signal).; Prestige +85: critic_8_5 (Silver Signal).
- IP fans: {"before":0,"after":19312,"delta":19312}
- Star career: {"fameDelta":12.07,"relDelta":0.75,"grow":0,"level":5,"reasons":"worked together (+); project boosted their career (+)"}
- Distributor trust: XYZ Network earned 138% of its advance back on Silver Signal with strong reviews (step 0.62)
- Rule labels: LOCKED = causal chain, accounting, fallback/no-campaign, thresholds 4.0/9.0, IP fan inheritance. WORKING ASSUMPTION = all formulas' shapes and numbers.

### Silver Signal: Season 2 — Action + Time Travel (season)

Released week 392 (year 7.5) · Distributor: Meridian Global · Star: Ivy Imai (L9, Fame 100) · IP: Silver Signal
Format: **tv season 2**, 15 episodes (one per week) · 432,427 distinct viewers, 5,410,703 viewer-episodes · renewal: average 7.98 ≥ 4.0 → renewable
TV: show-age fatigue 1.0% (base 1.2%, quality slows by 19%) · twist none · hiatus 23 weeks since the last season aired → anticipation ×1 · announcement anticipation used 0.08

**Financial waterfall** [LOCKED rules; amounts provisional]

| Item | Amount |
|---|---:|
| Advance received (project reserve, not revenue) | $555,000 |
| Base cost (unavoidable) | −$240,000 |
| Star fee | −$30,420 |
| Marketing campaign | −$20,000 |
| Paid from studio cash (overrun) | $0 |
| **Unused advance kept at completion** | $264,580 |
| Gross from sales (18 weeks) | $1,731,425 |
| Distributor royalty (46% of weekly gross) | −$796,455 |
| **Studio take** | $934,969 |
| Net for this title (surplus + take − cash overrun; wages are studio-wide, excluded) | $1,199,550 |

**Quality trace** [scores are computed, never rolled]

Meters (0–100): Plot 90.33 · Writing 91.43 · Filming 89.86 · Editing 86.52
Inputs: staff points {"plot":1137.83,"writing":1299.81,"filming":1123.9,"editing":752.11}, Star filming points 163.24 (Star family fit 100), studio Action level 2 (+6%), era bar x1.3
Base scores: Audience 8.9 / Critic 9.01 · no weak meter
Combo grades: Audience D (x0.9) / Critic C (x1) · repetition fatigue x0.99 · critic saturation x0.9
Before expectations (after combo, weakness, fatigue, saturation; pre-clamp): Audience 7.93 / Critic 8.03 · critic generation 0 (−0.0%, scale) · audience era 0 (−0.0%) · then clamp 0–10 (generation/era 0 = the ones active at game start)
**Final: Audience 7.93 / Critic 8.03 → avg 7.98**

**Opening & viewership trace** [marketing/Fame/reach affect viewers only]

Awareness inputs: base 0.35, marketing 0.55, studioBuzz 0, starFame 0.26, trend 0.1, ipFans 0.12, announcement 0.08 → awareness 0.77. Reach cap 440,000 → pool 337,805 → opening 101,342.

| Wk | Viewers | Retention | Driver | Gross | Studio | Distributor |
|---:|---:|---:|---|---:|---:|---:|
| 1 | 168,903 | 1 | episode 1 premiere | $54,049 | $29,186 | $24,863 |
| 2 | 211,302 | 1.25 | episode 2: 100% kept (critic 8.03), +42,399 new | $67,617 | $36,513 | $31,104 |
| 3 | 238,262 | 1.13 | episode 3: 100% kept (critic 8.03), +26,960 new | $76,244 | $41,172 | $35,072 |
| 4 | 268,517 | 1.13 | episode 4: 100% kept (audience 7.93), +30,255 new | $85,925 | $46,400 | $39,526 |
| 5 | 302,648 | 1.13 | episode 5: 100% kept (audience 7.93), +34,131 new | $96,847 | $52,298 | $44,550 |
| 6 | 338,364 | 1.12 | episode 6: 100% kept (audience 7.93), +35,716 new | $108,276 | $58,469 | $49,807 |
| 7 | 363,674 | 1.07 | episode 7: 100% kept (audience 7.93), +25,310 new | $116,376 | $62,843 | $53,533 |
| 8 | 382,843 | 1.05 | episode 8: 100% kept (audience 7.93), +19,169 new | $122,510 | $66,155 | $56,354 |
| 9 | 397,174 | 1.04 | episode 9: 100% kept (audience 7.93), +14,331 new | $127,096 | $68,632 | $58,464 |
| 10 | 407,915 | 1.03 | episode 10: 100% kept (audience 7.93), +10,741 new | $130,533 | $70,488 | $60,045 |
| 11 | 415,962 | 1.02 | episode 11: 100% kept (audience 7.93), +8,047 new | $133,108 | $71,878 | $61,230 |
| 12 | 421,991 | 1.01 | episode 12: 100% kept (audience 7.93), +6,029 new | $135,037 | $72,920 | $62,117 |
| 13 | 426,508 | 1.01 | episode 13: 100% kept (audience 7.93), +4,517 new | $136,483 | $73,701 | $62,782 |
| 14 | 429,892 | 1.01 | episode 14: 100% kept (audience 7.93), +3,384 new | $137,565 | $74,285 | $63,280 |
| 15 | 432,427 | 1.01 | episode 15: 100% kept (audience 7.93), +2,535 new | $138,377 | $74,723 | $63,653 |
| 16 | 151,349 | 0.35 | catch-up viewing (tail week 1/2) | $48,432 | $26,153 | $22,279 |
| 17 | 52,972 | 0.35 | catch-up viewing (tail week 2/2) | $16,951 | $9,154 | $7,797 |
| 18 | 0 | 0 | run ended | $0 | $0 | $0 |

**Progression trace**

- Prestige awards: Prestige +50: meters_all_70 (Silver Signal: Season 2).; Prestige +75: audience_7_5 (Silver Signal: Season 2).; Prestige +150: ip_viewers_500k (Silver Signal: Season 2).; Prestige +100: ip_gross_1m (Silver Signal: Season 2).
- IP fans: {"before":17846,"after":38464,"delta":20618}
- Star career: {"fameDelta":11.06,"relDelta":0.75,"grow":0,"level":6,"reasons":"worked together (+); project boosted their career (+)"}
- Distributor trust: Meridian Global earned 144% of its advance back on Silver Signal: Season 2 with strong reviews (step 0.59)
- Rule labels: LOCKED = causal chain, accounting, fallback/no-campaign, thresholds 4.0/9.0, IP fan inheritance. WORKING ASSUMPTION = all formulas' shapes and numbers.

### Silver Signal: Season 3 — Action + Time Travel (season)

Released week 428 (year 8.2) · Distributor: Meridian Global · Star: Ivy Imai (L9, Fame 100) · IP: Silver Signal
Format: **tv season 3**, 15 episodes (one per week) · 432,665 distinct viewers, 5,461,573 viewer-episodes · renewal: average 8.28 ≥ 4.0 → renewable
TV: show-age fatigue 3.2% (base 3.6%, quality slows by 13%) · twist none · hiatus 18 weeks since the last season aired → anticipation ×1 · announcement anticipation used 0.08

**Financial waterfall** [LOCKED rules; amounts provisional]

| Item | Amount |
|---|---:|
| Advance received (project reserve, not revenue) | $448,000 |
| Base cost (unavoidable) | −$240,000 |
| Star fee | −$30,223 |
| Marketing campaign | −$20,000 |
| Paid from studio cash (overrun) | $0 |
| **Unused advance kept at completion** | $157,777 |
| Gross from sales (18 weeks) | $1,747,703 |
| Distributor royalty (47% of weekly gross) | −$821,421 |
| **Studio take** | $926,283 |
| Net for this title (surplus + take − cash overrun; wages are studio-wide, excluded) | $1,084,060 |

**Quality trace** [scores are computed, never rolled]

Meters (0–100): Plot 90.54 · Writing 91.61 · Filming 90.04 · Editing 86.8
Inputs: staff points {"plot":1190.76,"writing":1358.73,"filming":1177.24,"editing":786.37}, Star filming points 163.24 (Star family fit 100), studio Action level 2 (+6%), era bar x1.33
Base scores: Audience 8.92 / Critic 9.03 · no weak meter
Combo grades: Audience D (x0.9) / Critic C (x1) · repetition fatigue x0.97 · critic saturation x1
Before expectations (after combo, weakness, fatigue, saturation; pre-clamp): Audience 7.79 / Critic 8.76 · critic generation 0 (−0.0%, scale) · audience era 0 (−0.0%) · then clamp 0–10 (generation/era 0 = the ones active at game start)
**Final: Audience 7.79 / Critic 8.76 → avg 8.28**

**Opening & viewership trace** [marketing/Fame/reach affect viewers only]

Awareness inputs: base 0.35, marketing 0.55, studioBuzz 0, starFame 0.33, trend 0, ipFans 0.23, announcement 0.08 → awareness 0.79. Reach cap 440,000 → pool 345,954 → opening 103,786.

| Wk | Viewers | Retention | Driver | Gross | Studio | Distributor |
|---:|---:|---:|---|---:|---:|---:|
| 1 | 172,977 | 1 | episode 1 premiere | $55,353 | $29,337 | $26,016 |
| 2 | 217,905 | 1.26 | episode 2: 100% kept (critic 8.76), +44,928 new | $69,730 | $36,957 | $32,773 |
| 3 | 246,303 | 1.13 | episode 3: 100% kept (critic 8.76), +28,398 new | $78,817 | $41,773 | $37,044 |
| 4 | 276,283 | 1.12 | episode 4: 100% kept (audience 7.79), +29,980 new | $88,411 | $46,858 | $41,553 |
| 5 | 309,878 | 1.12 | episode 5: 100% kept (audience 7.79), +33,595 new | $99,161 | $52,555 | $46,606 |
| 6 | 343,343 | 1.11 | episode 6: 100% kept (audience 7.79), +33,465 new | $109,870 | $58,231 | $51,639 |
| 7 | 367,288 | 1.07 | episode 7: 100% kept (audience 7.79), +23,945 new | $117,532 | $62,292 | $55,240 |
| 8 | 385,433 | 1.05 | episode 8: 100% kept (audience 7.79), +18,145 new | $123,339 | $65,369 | $57,969 |
| 9 | 399,031 | 1.04 | episode 9: 100% kept (audience 7.79), +13,598 new | $127,690 | $67,676 | $60,014 |
| 10 | 409,243 | 1.03 | episode 10: 100% kept (audience 7.79), +10,212 new | $130,958 | $69,408 | $61,550 |
| 11 | 416,909 | 1.02 | episode 11: 100% kept (audience 7.79), +7,666 new | $133,411 | $70,708 | $62,703 |
| 12 | 422,665 | 1.01 | episode 12: 100% kept (audience 7.79), +5,756 new | $135,253 | $71,684 | $63,569 |
| 13 | 426,986 | 1.01 | episode 13: 100% kept (audience 7.79), +4,321 new | $136,636 | $72,417 | $64,219 |
| 14 | 430,230 | 1.01 | episode 14: 100% kept (audience 7.79), +3,244 new | $137,674 | $72,967 | $64,707 |
| 15 | 432,665 | 1.01 | episode 15: 100% kept (audience 7.79), +2,435 new | $138,453 | $73,380 | $65,073 |
| 16 | 151,433 | 0.35 | catch-up viewing (tail week 1/2) | $48,459 | $25,683 | $22,776 |
| 17 | 53,001 | 0.35 | catch-up viewing (tail week 2/2) | $16,960 | $8,989 | $7,971 |
| 18 | 0 | 0 | run ended | $0 | $0 | $0 |

**Progression trace**

- Prestige awards: Prestige +50: meters_all_70 (Silver Signal: Season 3).; Prestige +75: audience_7_5 (Silver Signal: Season 3).; Prestige +85: critic_8_5 (Silver Signal: Season 3).
- IP fans: {"before":35889,"after":58595,"delta":22706}
- Star career: {"fameDelta":12.18,"relDelta":0.75,"grow":0,"level":6,"reasons":"worked together (+); project boosted their career (+)"}
- Distributor trust: Meridian Global earned 183% of its advance back on Silver Signal: Season 3 with strong reviews (step 0.75)
- Rule labels: LOCKED = causal chain, accounting, fallback/no-campaign, thresholds 4.0/9.0, IP fan inheritance. WORKING ASSUMPTION = all formulas' shapes and numbers.

### Silver Signal: Season 4 — Action + Time Travel (season)

Released week 464 (year 8.9) · Distributor: Wolf Pictures · Star: Ivy Imai (L9, Fame 100) · IP: Silver Signal
Format: **tv season 4**, 15 episodes (one per week) · 259,763 distinct viewers, 3,318,031 viewer-episodes · renewal: average 8.04 ≥ 4.0 → renewable
TV: show-age fatigue 5.8% (base 7.0%, quality slows by 17%) · twist none · hiatus 18 weeks since the last season aired → anticipation ×1 · announcement anticipation used 0.08

**Financial waterfall** [LOCKED rules; amounts provisional]

| Item | Amount |
|---|---:|
| Advance received (project reserve, not revenue) | $413,000 |
| Base cost (unavoidable) | −$240,000 |
| Star fee | −$37,813 |
| Marketing campaign | −$20,000 |
| Paid from studio cash (overrun) | $0 |
| **Unused advance kept at completion** | $115,187 |
| Gross from sales (18 weeks) | $1,061,770 |
| Distributor royalty (30% of weekly gross) | −$318,531 |
| **Studio take** | $743,239 |
| Net for this title (surplus + take − cash overrun; wages are studio-wide, excluded) | $858,426 |

**Quality trace** [scores are computed, never rolled]

Meters (0–100): Plot 90.83 · Writing 91.85 · Filming 90.26 · Editing 87.06
Inputs: staff points {"plot":1257.81,"writing":1432.1,"filming":1239.76,"editing":821.87}, Star filming points 163.24 (Star family fit 100), studio Action level 2 (+6%), era bar x1.36
Base scores: Audience 8.95 / Critic 9.05 · no weak meter
Combo grades: Audience D (x0.9) / Critic C (x1) · repetition fatigue x0.94 · critic saturation x1
Before expectations (after combo, weakness, fatigue, saturation; pre-clamp): Audience 7.57 / Critic 8.51 · critic generation 0 (−0.0%, scale) · audience era 0 (−0.0%) · then clamp 0–10 (generation/era 0 = the ones active at game start)
**Final: Audience 7.57 / Critic 8.51 → avg 8.04**

**Opening & viewership trace** [marketing/Fame/reach affect viewers only]

Awareness inputs: base 0.35, marketing 0.55, studioBuzz 0, starFame 0.4, trend 0, ipFans 0.35, announcement 0.08 → awareness 0.82. Reach cap 264,000 → pool 217,552 → opening 65,266.

| Wk | Viewers | Retention | Driver | Gross | Studio | Distributor |
|---:|---:|---:|---|---:|---:|---:|
| 1 | 108,776 | 1 | episode 1 premiere | $34,808 | $24,366 | $10,443 |
| 2 | 136,522 | 1.26 | episode 2: 100% kept (critic 8.51), +27,746 new | $43,687 | $30,581 | $13,106 |
| 3 | 153,928 | 1.13 | episode 3: 100% kept (critic 8.51), +17,406 new | $49,257 | $34,480 | $14,777 |
| 4 | 171,770 | 1.12 | episode 4: 100% kept (audience 7.57), +17,842 new | $54,966 | $38,476 | $16,490 |
| 5 | 191,375 | 1.11 | episode 5: 100% kept (audience 7.57), +19,605 new | $61,240 | $42,868 | $18,372 |
| 6 | 209,753 | 1.1 | episode 6: 100% kept (audience 7.57), +18,378 new | $67,121 | $46,985 | $20,136 |
| 7 | 223,078 | 1.06 | episode 7: 100% kept (audience 7.57), +13,325 new | $71,385 | $49,969 | $21,415 |
| 8 | 233,188 | 1.05 | episode 8: 100% kept (audience 7.57), +10,110 new | $74,620 | $52,234 | $22,386 |
| 9 | 240,792 | 1.03 | episode 9: 100% kept (audience 7.57), +7,604 new | $77,053 | $53,937 | $23,116 |
| 10 | 246,521 | 1.02 | episode 10: 100% kept (audience 7.57), +5,729 new | $78,887 | $55,221 | $23,666 |
| 11 | 250,835 | 1.02 | episode 11: 100% kept (audience 7.57), +4,314 new | $80,267 | $56,187 | $24,080 |
| 12 | 254,085 | 1.01 | episode 12: 100% kept (audience 7.57), +3,250 new | $81,307 | $56,915 | $24,392 |
| 13 | 256,532 | 1.01 | episode 13: 100% kept (audience 7.57), +2,447 new | $82,090 | $57,463 | $24,627 |
| 14 | 258,375 | 1.01 | episode 14: 100% kept (audience 7.57), +1,843 new | $82,680 | $57,876 | $24,804 |
| 15 | 259,763 | 1.01 | episode 15: 100% kept (audience 7.57), +1,388 new | $83,124 | $58,187 | $24,937 |
| 16 | 90,917 | 0.35 | catch-up viewing (tail week 1/2) | $29,093 | $20,365 | $8,728 |
| 17 | 31,821 | 0.35 | catch-up viewing (tail week 2/2) | $10,183 | $7,128 | $3,055 |
| 18 | 0 | 0 | run ended | $0 | $0 | $0 |

**Progression trace**

- Prestige awards: Prestige +50: meters_all_70 (Silver Signal: Season 4).; Prestige +75: audience_7_5 (Silver Signal: Season 4).; Prestige +85: critic_8_5 (Silver Signal: Season 4).; Prestige +150: ip_gross_5m (Silver Signal: Season 4).
- IP fans: {"before":54672,"after":67307,"delta":12635}
- Star career: {"fameDelta":9.64,"relDelta":0.75,"grow":0,"level":7,"reasons":"worked together (+); project boosted their career (+)"}
- Distributor trust: Wolf Pictures earned back 77% of its $413,000 advance on Silver Signal: Season 4 (step 0.2)
- Rule labels: LOCKED = causal chain, accounting, fallback/no-campaign, thresholds 4.0/9.0, IP fan inheritance. WORKING ASSUMPTION = all formulas' shapes and numbers.

### Silver Signal: Season 5 — Action + Time Travel (season)

Released week 500 (year 9.6) · Distributor: Meridian Global · Star: Ivy Imai (L9, Fame 100) · IP: Silver Signal
Format: **tv season 5**, 15 episodes (one per week) · 433,921 distinct viewers, 5,679,345 viewer-episodes · renewal: average 7.82 ≥ 4.0 → renewable
TV: show-age fatigue 9.5% (base 11.0%, quality slows by 14%) · twist none · hiatus 18 weeks since the last season aired → anticipation ×1 · announcement anticipation used 0.08

**Financial waterfall** [LOCKED rules; amounts provisional]

| Item | Amount |
|---|---:|
| Advance received (project reserve, not revenue) | $588,000 |
| Base cost (unavoidable) | −$240,000 |
| Star fee | −$45,925 |
| Marketing campaign | −$20,000 |
| Paid from studio cash (overrun) | $0 |
| **Unused advance kept at completion** | $282,075 |
| Gross from sales (18 weeks) | $1,817,390 |
| Distributor royalty (45% of weekly gross) | −$817,826 |
| **Studio take** | $999,565 |
| Net for this title (surplus + take − cash overrun; wages are studio-wide, excluded) | $1,281,640 |

**Quality trace** [scores are computed, never rolled]

Meters (0–100): Plot 91.2 · Writing 92.17 · Filming 90.6 · Editing 87.64
Inputs: staff points {"plot":1342.85,"writing":1526.4,"filming":1320.83,"editing":883.26}, Star filming points 167.86 (Star family fit 100), studio Action level 3 (+9%), era bar x1.38
Base scores: Audience 8.99 / Critic 9.09 · no weak meter
Combo grades: Audience D (x0.9) / Critic C (x1) · repetition fatigue x0.91 · critic saturation x1
Before expectations (after combo, weakness, fatigue, saturation; pre-clamp): Audience 7.36 / Critic 8.27 · critic generation 0 (−0.0%, scale) · audience era 0 (−0.0%) · then clamp 0–10 (generation/era 0 = the ones active at game start)
**Final: Audience 7.36 / Critic 8.27 → avg 7.82**

**Opening & viewership trace** [marketing/Fame/reach affect viewers only]

Awareness inputs: base 0.35, marketing 0.55, studioBuzz 0, starFame 0.46, trend 0.4, ipFans 0.41, announcement 0.08 → awareness 0.89. Reach cap 440,000 → pool 393,534 → opening 118,060.

| Wk | Viewers | Retention | Driver | Gross | Studio | Distributor |
|---:|---:|---:|---|---:|---:|---:|
| 1 | 196,767 | 1 | episode 1 premiere | $62,965 | $34,631 | $28,334 |
| 2 | 245,947 | 1.25 | episode 2: 100% kept (critic 8.27), +49,180 new | $78,703 | $43,287 | $35,416 |
| 3 | 276,437 | 1.12 | episode 3: 100% kept (critic 8.27), +30,490 new | $88,460 | $48,653 | $39,807 |
| 4 | 306,860 | 1.11 | episode 4: 100% kept (audience 7.36), +30,423 new | $98,195 | $54,007 | $44,188 |
| 5 | 339,661 | 1.11 | episode 5: 100% kept (audience 7.36), +32,801 new | $108,692 | $59,780 | $48,911 |
| 6 | 364,161 | 1.07 | episode 6: 100% kept (audience 7.36), +24,500 new | $116,532 | $64,092 | $52,439 |
| 7 | 382,710 | 1.05 | episode 7: 100% kept (audience 7.36), +18,549 new | $122,467 | $67,357 | $55,110 |
| 8 | 396,718 | 1.04 | episode 8: 100% kept (audience 7.36), +14,008 new | $126,950 | $69,822 | $57,127 |
| 9 | 407,301 | 1.03 | episode 9: 100% kept (audience 7.36), +10,583 new | $130,336 | $71,685 | $58,651 |
| 10 | 415,297 | 1.02 | episode 10: 100% kept (audience 7.36), +7,996 new | $132,895 | $73,092 | $59,803 |
| 11 | 421,337 | 1.01 | episode 11: 100% kept (audience 7.36), +6,040 new | $134,828 | $74,155 | $60,673 |
| 12 | 425,900 | 1.01 | episode 12: 100% kept (audience 7.36), +4,563 new | $136,288 | $74,958 | $61,330 |
| 13 | 429,348 | 1.01 | episode 13: 100% kept (audience 7.36), +3,448 new | $137,391 | $75,565 | $61,826 |
| 14 | 431,953 | 1.01 | episode 14: 100% kept (audience 7.36), +2,605 new | $138,225 | $76,024 | $62,201 |
| 15 | 433,921 | 1 | episode 15: 100% kept (audience 7.36), +1,968 new | $138,855 | $76,370 | $62,485 |
| 16 | 151,872 | 0.35 | catch-up viewing (tail week 1/2) | $48,599 | $26,729 | $21,870 |
| 17 | 53,155 | 0.35 | catch-up viewing (tail week 2/2) | $17,010 | $9,355 | $7,654 |
| 18 | 0 | 0 | run ended | $0 | $0 | $0 |

**Progression trace**

- Prestige awards: Prestige +50: meters_all_70 (Silver Signal: Season 5).
- IP fans: {"before":62802,"after":82381,"delta":19579}
- Star career: {"fameDelta":10.48,"relDelta":0.75,"grow":0,"level":7,"reasons":"worked together (+); project boosted their career (+)"}
- Distributor trust: Meridian Global earned 139% of its advance back on Silver Signal: Season 5 with strong reviews (step 0.54)
- Rule labels: LOCKED = causal chain, accounting, fallback/no-campaign, thresholds 4.0/9.0, IP fan inheritance. WORKING ASSUMPTION = all formulas' shapes and numbers.

### Silver Signal: Season 6 — Action + Time Travel (season)

Released week 536 (year 10.3) · Distributor: Wolf Pictures · Star: Ivy Imai (L9, Fame 100) · IP: Silver Signal
Format: **tv season 6**, 15 episodes (one per week) · 259,551 distinct viewers, 3,316,215 viewer-episodes · renewal: average 7.01 ≥ 4.0 → renewable
TV: show-age fatigue 14.0% (base 15.8%, quality slows by 11%) · twist none · hiatus 18 weeks since the last season aired → anticipation ×1 · announcement anticipation used 0.08

**Financial waterfall** [LOCKED rules; amounts provisional]

| Item | Amount |
|---|---:|
| Advance received (project reserve, not revenue) | $481,000 |
| Base cost (unavoidable) | −$240,000 |
| Star fee | −$51,672 |
| Marketing campaign | −$20,000 |
| Paid from studio cash (overrun) | $0 |
| **Unused advance kept at completion** | $169,328 |
| Gross from sales (18 weeks) | $1,061,189 |
| Distributor royalty (29% of weekly gross) | −$307,745 |
| **Studio take** | $753,444 |
| Net for this title (surplus + take − cash overrun; wages are studio-wide, excluded) | $922,772 |

**Quality trace** [scores are computed, never rolled]

Meters (0–100): Plot 91.32 · Writing 92.27 · Filming 90.72 · Editing 87.75
Inputs: staff points {"plot":1390.83,"writing":1578.66,"filming":1372.21,"editing":910.76}, Star filming points 167.86 (Star family fit 100), studio Action level 3 (+9%), era bar x1.41
Base scores: Audience 9 / Critic 9.1 · no weak meter
Combo grades: Audience D (x0.9) / Critic C (x1) · repetition fatigue x0.86 · critic saturation x0.9
Before expectations (after combo, weakness, fatigue, saturation; pre-clamp): Audience 6.97 / Critic 7.05 · critic generation 0 (−0.0%, scale) · audience era 0 (−0.0%) · then clamp 0–10 (generation/era 0 = the ones active at game start)
**Final: Audience 6.97 / Critic 7.05 → avg 7.01**

**Opening & viewership trace** [marketing/Fame/reach affect viewers only]

Awareness inputs: base 0.35, marketing 0.55, studioBuzz 0, starFame 0.52, trend 0.1, ipFans 0.5, announcement 0.08 → awareness 0.88. Reach cap 264,000 → pool 231,734 → opening 69,520.

| Wk | Viewers | Retention | Driver | Gross | Studio | Distributor |
|---:|---:|---:|---|---:|---:|---:|
| 1 | 115,867 | 1 | episode 1 premiere | $37,077 | $26,325 | $10,752 |
| 2 | 143,231 | 1.24 | episode 2: 100% kept (critic 7.05), +27,364 new | $45,834 | $32,542 | $13,292 |
| 3 | 160,411 | 1.12 | episode 3: 100% kept (critic 7.05), +17,180 new | $51,332 | $36,445 | $14,886 |
| 4 | 176,737 | 1.1 | episode 4: 100% kept (audience 6.97), +16,615 new | $56,556 | $40,155 | $16,401 |
| 5 | 193,356 | 1.09 | episode 5: 100% kept (audience 6.97), +16,937 new | $61,874 | $43,930 | $17,943 |
| 6 | 210,399 | 1.09 | episode 6: 100% kept (audience 6.97), +17,391 new | $67,328 | $47,803 | $19,525 |
| 7 | 222,586 | 1.06 | episode 7: 100% kept (audience 6.97), +12,566 new | $71,228 | $50,572 | $20,656 |
| 8 | 231,825 | 1.04 | episode 8: 100% kept (audience 6.97), +9,640 new | $74,184 | $52,671 | $21,513 |
| 9 | 238,719 | 1.03 | episode 9: 100% kept (audience 6.97), +7,311 new | $76,390 | $54,237 | $22,153 |
| 10 | 243,845 | 1.02 | episode 10: 100% kept (audience 6.97), +5,556 new | $78,030 | $55,402 | $22,629 |
| 11 | 247,627 | 1.02 | episode 11: 100% kept (audience 6.97), +4,221 new | $79,241 | $56,261 | $22,980 |
| 12 | 250,388 | 1.01 | episode 12: 100% kept (audience 6.97), +3,207 new | $80,124 | $56,888 | $23,236 |
| 13 | 252,374 | 1.01 | episode 13: 100% kept (audience 6.97), +2,437 new | $80,760 | $57,339 | $23,420 |
| 14 | 253,772 | 1.01 | episode 14: 100% kept (audience 6.97), +1,852 new | $81,207 | $57,657 | $23,550 |
| 15 | 254,722 | 1 | episode 15: 100% kept (audience 6.97), +1,407 new | $81,511 | $57,873 | $23,638 |
| 16 | 89,153 | 0.35 | catch-up viewing (tail week 1/2) | $28,529 | $20,256 | $8,273 |
| 17 | 31,203 | 0.35 | catch-up viewing (tail week 2/2) | $9,985 | $7,089 | $2,896 |
| 18 | 0 | 0 | run ended | $0 | $0 | $0 |

**Progression trace**

- Prestige awards: Prestige +50: meters_all_70 (Silver Signal: Season 6).
- IP fans: {"before":76865,"after":85212,"delta":8347}
- Star career: {"fameDelta":6.37,"relDelta":0.75,"grow":0,"level":8,"reasons":"worked together (+); project boosted their career (+)"}
- Distributor trust: Wolf Pictures earned back 64% of its $481,000 advance on Silver Signal: Season 6 (step -0.01)
- Rule labels: LOCKED = causal chain, accounting, fallback/no-campaign, thresholds 4.0/9.0, IP fan inheritance. WORKING ASSUMPTION = all formulas' shapes and numbers.

### Silver Signal: Season 7 — Action + Time Travel (season)

Released week 572 (year 11.0) · Distributor: Meridian Global · Star: Ivy Imai (L9, Fame 100) · IP: Silver Signal
Format: **tv season 7**, 15 episodes (one per week) · 430,083 distinct viewers, 4,574,754 viewer-episodes · renewal: average 6.81 ≥ 4.0 → renewable
TV: show-age fatigue 21.1% (base 21.1%, quality slows by 0%) · twist none · hiatus 18 weeks since the last season aired → anticipation ×1 · announcement anticipation used 0.08

**Financial waterfall** [LOCKED rules; amounts provisional]

| Item | Amount |
|---|---:|
| Advance received (project reserve, not revenue) | $556,000 |
| Base cost (unavoidable) | −$240,000 |
| Star fee | −$57,673 |
| Marketing campaign | −$20,000 |
| Paid from studio cash (overrun) | $0 |
| **Unused advance kept at completion** | $238,327 |
| Gross from sales (18 weeks) | $1,463,921 |
| Distributor royalty (45% of weekly gross) | −$658,765 |
| **Studio take** | $805,157 |
| Net for this title (surplus + take − cash overrun; wages are studio-wide, excluded) | $1,043,484 |

**Quality trace** [scores are computed, never rolled]

Meters (0–100): Plot 91.47 · Writing 92.4 · Filming 90.85 · Editing 87.98
Inputs: staff points {"plot":1445.39,"writing":1638.39,"filming":1428.53,"editing":948.2}, Star filming points 167.86 (Star family fit 100), studio Action level 3 (+9%), era bar x1.44
Base scores: Audience 9.02 / Critic 9.12 · no weak meter
Combo grades: Audience D (x0.9) / Critic C (x1) · repetition fatigue x0.79 · critic saturation x1
Before expectations (after combo, weakness, fatigue, saturation; pre-clamp): Audience 6.41 / Critic 7.2 · critic generation 0 (−0.0%, scale) · audience era 0 (−0.0%) · then clamp 0–10 (generation/era 0 = the ones active at game start)
**Final: Audience 6.41 / Critic 7.2 → avg 6.81**

**Opening & viewership trace** [marketing/Fame/reach affect viewers only]

Awareness inputs: base 0.35, marketing 0.55, studioBuzz 0, starFame 0.56, trend 0, ipFans 0.51, announcement 0.08 → awareness 0.87. Reach cap 440,000 → pool 383,765 → opening 115,130.

| Wk | Viewers | Retention | Driver | Gross | Studio | Distributor |
|---:|---:|---:|---|---:|---:|---:|
| 1 | 191,883 | 1 | episode 1 premiere | $61,403 | $33,771 | $27,631 |
| 2 | 237,555 | 1.24 | episode 2: 100% kept (critic 7.2), +45,672 new | $76,018 | $41,810 | $34,208 |
| 3 | 266,215 | 1.12 | episode 3: 100% kept (critic 7.2), +28,660 new | $85,189 | $46,854 | $38,335 |
| 4 | 280,798 | 1.05 | episode 4: 96% kept (audience 6.41), +24,007 new | $89,855 | $49,420 | $40,435 |
| 5 | 293,220 | 1.04 | episode 5: 96% kept (audience 6.41), +22,362 new | $93,830 | $51,607 | $42,224 |
| 6 | 304,506 | 1.04 | episode 6: 96% kept (audience 6.41), +21,666 new | $97,442 | $53,593 | $43,849 |
| 7 | 315,257 | 1.04 | episode 7: 96% kept (audience 6.41), +21,531 new | $100,882 | $55,485 | $45,397 |
| 8 | 324,271 | 1.03 | episode 8: 96% kept (audience 6.41), +20,174 new | $103,767 | $57,072 | $46,695 |
| 9 | 327,716 | 1.01 | episode 9: 96% kept (audience 6.41), +14,924 new | $104,869 | $57,678 | $47,191 |
| 10 | 327,622 | 1 | episode 10: 96% kept (audience 6.41), +11,507 new | $104,839 | $57,661 | $47,178 |
| 11 | 324,826 | 0.99 | episode 11: 96% kept (audience 6.41), +8,802 new | $103,944 | $57,169 | $46,775 |
| 12 | 320,071 | 0.99 | episode 12: 96% kept (audience 6.41), +6,744 new | $102,423 | $56,333 | $46,090 |
| 13 | 313,905 | 0.98 | episode 13: 96% kept (audience 6.41), +5,165 new | $100,450 | $55,247 | $45,202 |
| 14 | 306,749 | 0.98 | episode 14: 96% kept (audience 6.41), +3,956 new | $98,160 | $53,988 | $44,172 |
| 15 | 298,920 | 0.97 | episode 15: 96% kept (audience 6.41), +3,030 new | $95,654 | $52,610 | $43,044 |
| 16 | 104,622 | 0.35 | catch-up viewing (tail week 1/2) | $33,479 | $18,413 | $15,066 |
| 17 | 36,618 | 0.35 | catch-up viewing (tail week 2/2) | $11,718 | $6,445 | $5,273 |
| 18 | 0 | 0 | run ended | $0 | $0 | $0 |

**Progression trace**

- Prestige awards: Prestige +50: meters_all_70 (Silver Signal: Season 7).
- IP fans: {"before":79507,"after":91962,"delta":12455}
- Star career: {"fameDelta":6.71,"relDelta":0.75,"grow":0,"level":8,"reasons":"worked together (+); project boosted their career (+)"}
- Distributor trust: Meridian Global earned 118% of its advance back on Silver Signal: Season 7 (step 0.29)
- Rule labels: LOCKED = causal chain, accounting, fallback/no-campaign, thresholds 4.0/9.0, IP fan inheritance. WORKING ASSUMPTION = all formulas' shapes and numbers.

### Silver Signal: Season 8 — Action + Time Travel (season)

Released week 608 (year 11.7) · Distributor: XYZ Network · Star: Ivy Imai (L9, Fame 100) · IP: Silver Signal
Format: **tv season 8**, 15 episodes (one per week) · 359,875 distinct viewers, 3,221,545 viewer-episodes · renewal: average 6.3 ≥ 4.0 → renewable
TV: show-age fatigue 27.0% (base 27.0%, quality slows by 0%) · twist none · hiatus 18 weeks since the last season aired → anticipation ×1 · announcement anticipation used 0.08

**Financial waterfall** [LOCKED rules; amounts provisional]

| Item | Amount |
|---|---:|
| Advance received (project reserve, not revenue) | $405,000 |
| Base cost (unavoidable) | −$240,000 |
| Star fee | −$61,963 |
| Marketing campaign | −$20,000 |
| Paid from studio cash (overrun) | $0 |
| **Unused advance kept at completion** | $83,037 |
| Gross from sales (18 weeks) | $1,030,894 |
| Distributor royalty (44% of weekly gross) | −$453,594 |
| **Studio take** | $577,301 |
| Net for this title (surplus + take − cash overrun; wages are studio-wide, excluded) | $660,338 |

**Quality trace** [scores are computed, never rolled]

Meters (0–100): Plot 91.52 · Writing 92.43 · Filming 90.88 · Editing 88.07
Inputs: staff points {"plot":1481.89,"writing":1677.07,"filming":1463.68,"editing":974.96}, Star filming points 167.86 (Star family fit 100), studio Action level 3 (+9%), era bar x1.47
Base scores: Audience 9.02 / Critic 9.12 · no weak meter
Combo grades: Audience D (x0.9) / Critic C (x1) · repetition fatigue x0.73 · critic saturation x1
Before expectations (after combo, weakness, fatigue, saturation; pre-clamp): Audience 5.93 / Critic 6.66 · critic generation 0 (−0.0%, scale) · audience era 0 (−0.0%) · then clamp 0–10 (generation/era 0 = the ones active at game start)
**Final: Audience 5.93 / Critic 6.66 → avg 6.3**

**Opening & viewership trace** [marketing/Fame/reach affect viewers only]

Awareness inputs: base 0.35, marketing 0.55, studioBuzz 0, starFame 0.6, trend 0, ipFans 0.56, announcement 0.08 → awareness 0.88. Reach cap 376,000 → pool 331,549 → opening 99,465.

| Wk | Viewers | Retention | Driver | Gross | Studio | Distributor |
|---:|---:|---:|---|---:|---:|---:|
| 1 | 165,775 | 1 | episode 1 premiere | $53,048 | $29,707 | $23,341 |
| 2 | 200,784 | 1.21 | episode 2: 98% kept (critic 6.66), +38,391 new | $64,251 | $35,980 | $28,270 |
| 3 | 220,854 | 1.1 | episode 3: 98% kept (critic 6.66), +24,166 new | $70,673 | $39,577 | $31,096 |
| 4 | 224,911 | 1.02 | episode 4: 94% kept (audience 5.93), +18,236 new | $71,972 | $40,304 | $31,667 |
| 5 | 225,748 | 1 | episode 5: 94% kept (audience 5.93), +15,276 new | $72,239 | $40,454 | $31,785 |
| 6 | 224,687 | 1 | episode 6: 94% kept (audience 5.93), +13,432 new | $71,900 | $40,264 | $31,636 |
| 7 | 222,519 | 0.99 | episode 7: 94% kept (audience 5.93), +12,257 new | $71,206 | $39,875 | $31,331 |
| 8 | 219,716 | 0.99 | episode 8: 94% kept (audience 5.93), +11,483 new | $70,309 | $39,373 | $30,936 |
| 9 | 216,559 | 0.99 | episode 9: 94% kept (audience 5.93), +10,949 new | $69,299 | $38,807 | $30,492 |
| 10 | 213,216 | 0.98 | episode 10: 94% kept (audience 5.93), +10,560 new | $68,229 | $38,208 | $30,021 |
| 11 | 209,787 | 0.98 | episode 11: 94% kept (audience 5.93), +10,259 new | $67,132 | $37,594 | $29,538 |
| 12 | 206,331 | 0.98 | episode 12: 94% kept (audience 5.93), +10,012 new | $66,026 | $36,975 | $29,051 |
| 13 | 201,186 | 0.98 | episode 13: 94% kept (audience 5.93), +8,101 new | $64,380 | $36,053 | $28,327 |
| 14 | 194,464 | 0.97 | episode 14: 94% kept (audience 5.93), +6,194 new | $62,228 | $34,848 | $27,381 |
| 15 | 186,763 | 0.96 | episode 15: 94% kept (audience 5.93), +4,784 new | $59,764 | $33,468 | $26,296 |
| 16 | 65,367 | 0.35 | catch-up viewing (tail week 1/2) | $20,917 | $11,714 | $9,204 |
| 17 | 22,878 | 0.35 | catch-up viewing (tail week 2/2) | $7,321 | $4,100 | $3,221 |
| 18 | 0 | 0 | run ended | $0 | $0 | $0 |

**Progression trace**

- Prestige awards: Prestige +50: meters_all_70 (Silver Signal: Season 8).
- IP fans: {"before":85805,"after":93290,"delta":7485}
- Star career: {"fameDelta":4.59,"relDelta":0.25,"grow":0,"level":9,"reasons":"worked together (+)"}
- Distributor trust: XYZ Network earned 112% of its advance back on Silver Signal: Season 8 (step 0.18)
- Rule labels: LOCKED = causal chain, accounting, fallback/no-campaign, thresholds 4.0/9.0, IP fan inheritance. WORKING ASSUMPTION = all formulas' shapes and numbers.

### Dead Pulse — Horror + Pirates (new)

Released week 644 (year 12.4) · Distributor: Meridian Global · Star: Jay Vale (L10, Fame 100) · IP: Dead Pulse
Format: **tv season 1**, 15 episodes (one per week) · 395,645 distinct viewers, 5,068,419 viewer-episodes · renewal: average 8.5 ≥ 4.0 → renewable

**Financial waterfall** [LOCKED rules; amounts provisional]

| Item | Amount |
|---|---:|
| Advance received (project reserve, not revenue) | $599,000 |
| Base cost (unavoidable) | −$240,000 |
| Star fee | −$67,258 |
| Marketing campaign | −$20,000 |
| Paid from studio cash (overrun) | $0 |
| **Unused advance kept at completion** | $271,742 |
| Gross from sales (18 weeks) | $1,621,894 |
| Distributor royalty (44% of weekly gross) | −$713,633 |
| **Studio take** | $908,261 |
| Net for this title (surplus + take − cash overrun; wages are studio-wide, excluded) | $1,180,002 |

**Quality trace** [scores are computed, never rolled]

Meters (0–100): Plot 91.74 · Writing 92.62 · Filming 91.17 · Editing 88.51
Inputs: staff points {"plot":1554.07,"writing":1757.73,"filming":1550.01,"editing":1036.81}, Star filming points 172.48 (Star family fit 100), studio Horror level 4 (+12%), era bar x1.5
Base scores: Audience 9.05 / Critic 9.15 · no weak meter
Combo grades: Audience B (x1.06) / Critic D (x0.9) · repetition fatigue x1 · critic saturation x0.9
Before expectations (after combo, weakness, fatigue, saturation; pre-clamp): Audience 9.6 / Critic 7.41 · critic generation 0 (−0.0%, scale) · audience era 0 (−0.0%) · then clamp 0–10 (generation/era 0 = the ones active at game start)
**Final: Audience 9.6 / Critic 7.41 → avg 8.5**

**Opening & viewership trace** [marketing/Fame/reach affect viewers only]

Awareness inputs: base 0.35, marketing 0.55, studioBuzz 0, starFame 0.6, trend 0.1, ipFans 0, announcement 0 → awareness 0.8. Reach cap 400,000 → pool 319,241 → opening 95,772.

| Wk | Viewers | Retention | Driver | Gross | Studio | Distributor |
|---:|---:|---:|---|---:|---:|---:|
| 1 | 159,621 | 1 | episode 1 premiere | $51,079 | $28,604 | $22,475 |
| 2 | 198,282 | 1.24 | episode 2: 100% kept (critic 7.41), +38,661 new | $63,450 | $35,532 | $27,918 |
| 3 | 222,768 | 1.12 | episode 3: 100% kept (critic 7.41), +24,486 new | $71,286 | $39,920 | $31,366 |
| 4 | 261,272 | 1.17 | episode 4: 100% kept (audience 9.6), +38,504 new | $83,607 | $46,820 | $36,787 |
| 5 | 299,931 | 1.15 | episode 5: 100% kept (audience 9.6), +38,659 new | $95,978 | $53,748 | $42,230 |
| 6 | 326,686 | 1.09 | episode 6: 100% kept (audience 9.6), +26,755 new | $104,540 | $58,542 | $45,997 |
| 7 | 346,451 | 1.06 | episode 7: 100% kept (audience 9.6), +19,765 new | $110,864 | $62,084 | $48,780 |
| 8 | 360,864 | 1.04 | episode 8: 100% kept (audience 9.6), +14,413 new | $115,476 | $64,667 | $50,810 |
| 9 | 371,401 | 1.03 | episode 9: 100% kept (audience 9.6), +10,537 new | $118,848 | $66,555 | $52,293 |
| 10 | 379,101 | 1.02 | episode 10: 100% kept (audience 9.6), +7,700 new | $121,312 | $67,935 | $53,377 |
| 11 | 384,728 | 1.01 | episode 11: 100% kept (audience 9.6), +5,627 new | $123,113 | $68,943 | $54,170 |
| 12 | 388,840 | 1.01 | episode 12: 100% kept (audience 9.6), +4,112 new | $124,429 | $69,680 | $54,749 |
| 13 | 391,845 | 1.01 | episode 13: 100% kept (audience 9.6), +3,005 new | $125,390 | $70,219 | $55,172 |
| 14 | 394,041 | 1.01 | episode 14: 100% kept (audience 9.6), +2,196 new | $126,093 | $70,612 | $55,481 |
| 15 | 395,645 | 1 | episode 15: 100% kept (audience 9.6), +1,604 new | $126,606 | $70,900 | $55,707 |
| 16 | 138,476 | 0.35 | catch-up viewing (tail week 1/2) | $44,312 | $24,815 | $19,497 |
| 17 | 48,467 | 0.35 | catch-up viewing (tail week 2/2) | $15,509 | $8,685 | $6,824 |
| 18 | 0 | 0 | run ended | $0 | $0 | $0 |

**Progression trace**

- Prestige awards: Prestige +50: meters_all_70 (Dead Pulse).; Prestige +75: audience_7_5 (Dead Pulse).; Prestige +100: ip_gross_1m (Dead Pulse).
- IP fans: {"before":0,"after":22156,"delta":22156}
- Star career: {"fameDelta":12.69,"relDelta":0.25,"grow":0,"level":10,"reasons":"worked together (+)"}
- Distributor trust: Meridian Global earned 119% of its advance back on Dead Pulse with strong reviews (step 0.51)
- Rule labels: LOCKED = causal chain, accounting, fallback/no-campaign, thresholds 4.0/9.0, IP fan inheritance. WORKING ASSUMPTION = all formulas' shapes and numbers.

### Dead Pulse: Season 2 — Horror + Pirates (season)

Released week 680 (year 13.1) · Distributor: Wolf Pictures · Star: Jay Vale (L10, Fame 100) · IP: Dead Pulse
Format: **tv season 2**, 15 episodes (one per week) · 261,255 distinct viewers, 3,376,715 viewer-episodes · renewal: average 8.84 ≥ 4.0 → renewable
TV: show-age fatigue 1.0% (base 1.2%, quality slows by 20%) · twist none · hiatus 18 weeks since the last season aired → anticipation ×1 · announcement anticipation used 0.08

**Financial waterfall** [LOCKED rules; amounts provisional]

| Item | Amount |
|---|---:|
| Advance received (project reserve, not revenue) | $379,000 |
| Base cost (unavoidable) | −$240,000 |
| Star fee | −$66,911 |
| Marketing campaign | −$20,000 |
| Paid from studio cash (overrun) | $0 |
| **Unused advance kept at completion** | $52,089 |
| Gross from sales (18 weeks) | $1,080,549 |
| Distributor royalty (30% of weekly gross) | −$324,165 |
| **Studio take** | $756,384 |
| Net for this title (surplus + take − cash overrun; wages are studio-wide, excluded) | $808,473 |

**Quality trace** [scores are computed, never rolled]

Meters (0–100): Plot 91.85 · Writing 92.71 · Filming 91.2 · Editing 88.6
Inputs: staff points {"plot":1605.93,"writing":1812.57,"filming":1590.05,"editing":1065.27}, Star filming points 172.48 (Star family fit 100), studio Horror level 4 (+12%), era bar x1.52
Base scores: Audience 9.06 / Critic 9.16 · no weak meter
Combo grades: Audience B (x1.06) / Critic D (x0.9) · repetition fatigue x0.99 · critic saturation x1
Before expectations (after combo, weakness, fatigue, saturation; pre-clamp): Audience 9.51 / Critic 8.16 · critic generation 0 (−0.0%, scale) · audience era 0 (−0.0%) · then clamp 0–10 (generation/era 0 = the ones active at game start)
**Final: Audience 9.51 / Critic 8.16 → avg 8.84**

**Opening & viewership trace** [marketing/Fame/reach affect viewers only]

Awareness inputs: base 0.35, marketing 0.55, studioBuzz 0, starFame 0.6, trend 0, ipFans 0.13, announcement 0.08 → awareness 0.82. Reach cap 264,000 → pool 216,431 → opening 64,929.

| Wk | Viewers | Retention | Driver | Gross | Studio | Distributor |
|---:|---:|---:|---|---:|---:|---:|
| 1 | 108,216 | 1 | episode 1 premiere | $34,629 | $24,240 | $10,389 |
| 2 | 135,367 | 1.25 | episode 2: 100% kept (critic 8.16), +27,151 new | $43,317 | $30,322 | $12,995 |
| 3 | 152,445 | 1.13 | episode 3: 100% kept (critic 8.16), +17,078 new | $48,782 | $34,148 | $14,635 |
| 4 | 178,105 | 1.17 | episode 4: 100% kept (audience 9.51), +25,660 new | $56,994 | $39,896 | $17,098 |
| 5 | 201,751 | 1.13 | episode 5: 100% kept (audience 9.51), +23,646 new | $64,560 | $45,192 | $19,368 |
| 6 | 218,362 | 1.08 | episode 6: 100% kept (audience 9.51), +16,611 new | $69,876 | $48,913 | $20,963 |
| 7 | 230,616 | 1.06 | episode 7: 100% kept (audience 9.51), +12,254 new | $73,797 | $51,658 | $22,139 |
| 8 | 239,569 | 1.04 | episode 8: 100% kept (audience 9.51), +8,953 new | $76,662 | $53,663 | $22,999 |
| 9 | 246,123 | 1.03 | episode 9: 100% kept (audience 9.51), +6,554 new | $78,759 | $55,132 | $23,628 |
| 10 | 250,918 | 1.02 | episode 10: 100% kept (audience 9.51), +4,795 new | $80,294 | $56,206 | $24,088 |
| 11 | 254,427 | 1.01 | episode 11: 100% kept (audience 9.51), +3,509 new | $81,417 | $56,992 | $24,425 |
| 12 | 256,995 | 1.01 | episode 12: 100% kept (audience 9.51), +2,568 new | $82,238 | $57,567 | $24,672 |
| 13 | 258,874 | 1.01 | episode 13: 100% kept (audience 9.51), +1,879 new | $82,840 | $57,988 | $24,852 |
| 14 | 260,249 | 1.01 | episode 14: 100% kept (audience 9.51), +1,375 new | $83,280 | $58,296 | $24,984 |
| 15 | 261,255 | 1 | episode 15: 100% kept (audience 9.51), +1,006 new | $83,602 | $58,521 | $25,080 |
| 16 | 91,439 | 0.35 | catch-up viewing (tail week 1/2) | $29,260 | $20,482 | $8,778 |
| 17 | 32,004 | 0.35 | catch-up viewing (tail week 2/2) | $10,241 | $7,169 | $3,072 |
| 18 | 0 | 0 | run ended | $0 | $0 | $0 |

**Progression trace**

- Prestige awards: Prestige +50: meters_all_70 (Dead Pulse: Season 2).; Prestige +75: audience_7_5 (Dead Pulse: Season 2).; Prestige +150: ip_viewers_500k (Dead Pulse: Season 2).
- IP fans: {"before":20673,"after":36725,"delta":16052}
- Star career: {"fameDelta":12.2,"relDelta":0.25,"grow":0,"level":10,"reasons":"worked together (+)"}
- Distributor trust: Wolf Pictures earned back 86% of its $379,000 advance on Dead Pulse: Season 2 (step 0.31)
- Rule labels: LOCKED = causal chain, accounting, fallback/no-campaign, thresholds 4.0/9.0, IP fan inheritance. WORKING ASSUMPTION = all formulas' shapes and numbers.

### Dead Pulse: Season 3 — Horror + Pirates (season)

Released week 716 (year 13.8) · Distributor: Meridian Global · Star: Jay Vale (L10, Fame 100) · IP: Dead Pulse
Format: **tv season 3**, 15 episodes (one per week) · 396,032 distinct viewers, 5,174,961 viewer-episodes · renewal: average 8.66 ≥ 4.0 → renewable
TV: show-age fatigue 2.7% (base 3.6%, quality slows by 25%) · twist none · hiatus 18 weeks since the last season aired → anticipation ×1 · announcement anticipation used 0.08

**Financial waterfall** [LOCKED rules; amounts provisional]

| Item | Amount |
|---|---:|
| Advance received (project reserve, not revenue) | $495,000 |
| Base cost (unavoidable) | −$240,000 |
| Star fee | −$66,541 |
| Marketing campaign | −$20,000 |
| Paid from studio cash (overrun) | $0 |
| **Unused advance kept at completion** | $168,459 |
| Gross from sales (18 weeks) | $1,655,988 |
| Distributor royalty (45% of weekly gross) | −$745,194 |
| **Studio take** | $910,793 |
| Net for this title (surplus + take − cash overrun; wages are studio-wide, excluded) | $1,079,252 |

**Quality trace** [scores are computed, never rolled]

Meters (0–100): Plot 91.91 · Writing 92.75 · Filming 91.27 · Editing 88.76
Inputs: staff points {"plot":1648.05,"writing":1857.87,"filming":1637.77,"editing":1101.79}, Star filming points 172.48 (Star family fit 100), studio Horror level 4 (+12%), era bar x1.55
Base scores: Audience 9.07 / Critic 9.16 · no weak meter
Combo grades: Audience B (x1.06) / Critic D (x0.9) · repetition fatigue x0.97 · critic saturation x1
Before expectations (after combo, weakness, fatigue, saturation; pre-clamp): Audience 9.33 / Critic 8 · critic generation 0 (−0.0%, scale) · audience era 0 (−0.0%) · then clamp 0–10 (generation/era 0 = the ones active at game start)
**Final: Audience 9.33 / Critic 8 → avg 8.66**

**Opening & viewership trace** [marketing/Fame/reach affect viewers only]

Awareness inputs: base 0.35, marketing 0.55, studioBuzz 0, starFame 0.6, trend 0.15, ipFans 0.22, announcement 0.08 → awareness 0.86. Reach cap 400,000 → pool 343,188 → opening 102,956.

| Wk | Viewers | Retention | Driver | Gross | Studio | Distributor |
|---:|---:|---:|---|---:|---:|---:|
| 1 | 171,594 | 1 | episode 1 premiere | $54,910 | $30,201 | $24,710 |
| 2 | 214,115 | 1.25 | episode 2: 100% kept (critic 8), +42,521 new | $68,517 | $37,684 | $30,833 |
| 3 | 240,700 | 1.12 | episode 3: 100% kept (critic 8), +26,585 new | $77,024 | $42,363 | $34,661 |
| 4 | 279,920 | 1.16 | episode 4: 100% kept (audience 9.33), +39,220 new | $89,574 | $49,266 | $40,308 |
| 5 | 312,346 | 1.12 | episode 5: 100% kept (audience 9.33), +32,426 new | $99,951 | $54,973 | $44,978 |
| 6 | 335,619 | 1.07 | episode 6: 100% kept (audience 9.33), +23,273 new | $107,398 | $59,069 | $48,329 |
| 7 | 352,770 | 1.05 | episode 7: 100% kept (audience 9.33), +17,151 new | $112,886 | $62,088 | $50,799 |
| 8 | 365,344 | 1.04 | episode 8: 100% kept (audience 9.33), +12,574 new | $116,910 | $64,301 | $52,610 |
| 9 | 374,571 | 1.03 | episode 9: 100% kept (audience 9.33), +9,227 new | $119,863 | $65,925 | $53,938 |
| 10 | 381,341 | 1.02 | episode 10: 100% kept (audience 9.33), +6,770 new | $122,029 | $67,116 | $54,913 |
| 11 | 386,309 | 1.01 | episode 11: 100% kept (audience 9.33), +4,968 new | $123,619 | $67,990 | $55,629 |
| 12 | 389,954 | 1.01 | episode 12: 100% kept (audience 9.33), +3,645 new | $124,785 | $68,632 | $56,153 |
| 13 | 392,629 | 1.01 | episode 13: 100% kept (audience 9.33), +2,675 new | $125,641 | $69,103 | $56,539 |
| 14 | 394,592 | 1 | episode 14: 100% kept (audience 9.33), +1,963 new | $126,269 | $69,448 | $56,821 |
| 15 | 396,032 | 1 | episode 15: 100% kept (audience 9.33), +1,440 new | $126,730 | $69,702 | $57,029 |
| 16 | 138,611 | 0.35 | catch-up viewing (tail week 1/2) | $44,356 | $24,396 | $19,960 |
| 17 | 48,514 | 0.35 | catch-up viewing (tail week 2/2) | $15,524 | $8,538 | $6,986 |
| 18 | 0 | 0 | run ended | $0 | $0 | $0 |

**Progression trace**

- Prestige awards: Prestige +50: meters_all_70 (Dead Pulse: Season 3).; Prestige +75: audience_7_5 (Dead Pulse: Season 3).
- IP fans: {"before":34267,"after":57459,"delta":23192}
- Star career: {"fameDelta":13.27,"relDelta":0.25,"grow":0,"level":10,"reasons":"worked together (+)"}
- Distributor trust: Meridian Global earned 151% of its advance back on Dead Pulse: Season 3 with strong reviews (step 0.7)
- Rule labels: LOCKED = causal chain, accounting, fallback/no-campaign, thresholds 4.0/9.0, IP fan inheritance. WORKING ASSUMPTION = all formulas' shapes and numbers.

### Dead Pulse: Season 4 — Horror + Pirates (season)

Released week 763 (year 14.7) · Distributor: Meridian Global · Star: Jay Vale (L10, Fame 100) · IP: Dead Pulse
Format: **tv season 4**, 20 episodes (one per week) · 397,999 distinct viewers, 5,848,662 viewer-episodes · renewal: average 8.53 ≥ 4.0 → renewable
TV: show-age fatigue 5.4% (base 7.0%, quality slows by 22%) · twist none · hiatus 29 weeks since the last season aired → anticipation ×1 · announcement anticipation used 0.05

**Financial waterfall** [LOCKED rules; amounts provisional]

| Item | Amount |
|---|---:|
| Advance received (project reserve, not revenue) | $708,000 |
| Base cost (unavoidable) | −$315,000 |
| Star fee | −$66,389 |
| Marketing campaign | −$20,000 |
| Paid from studio cash (overrun) | $0 |
| **Unused advance kept at completion** | $306,611 |
| Gross from sales (17 weeks) | $1,871,572 |
| Distributor royalty (44% of weekly gross) | −$823,492 |
| **Studio take** | $1,048,080 |
| Net for this title (surplus + take − cash overrun; wages are studio-wide, excluded) | $1,354,691 |

**Quality trace** [scores are computed, never rolled]

Meters (0–100): Plot 92.16 · Writing 92.99 · Filming 91.61 · Editing 89.67
Inputs: staff points {"plot":2231.23,"writing":2517.05,"filming":2242.88,"editing":1584.04}, Star filming points 227.7 (Star family fit 100), studio Horror level 5 (+15%), era bar x1.59
Base scores: Audience 9.12 / Critic 9.2 · no weak meter
Combo grades: Audience B (x1.06) / Critic D (x0.9) · repetition fatigue x0.95 · critic saturation x1
Before expectations (after combo, weakness, fatigue, saturation; pre-clamp): Audience 9.19 / Critic 7.87 · critic generation 0 (−0.0%, scale) · audience era 0 (−0.0%) · then clamp 0–10 (generation/era 0 = the ones active at game start)
**Final: Audience 9.19 / Critic 7.87 → avg 8.53**

**Opening & viewership trace** [marketing/Fame/reach affect viewers only]

Awareness inputs: base 0.35, marketing 0.55, studioBuzz 0, starFame 0.6, trend 0.4, ipFans 0.34, announcement 0.05 → awareness 0.9. Reach cap 400,000 → pool 359,478 → opening 107,843.

| Wk | Viewers | Retention | Driver | Gross | Studio | Distributor |
|---:|---:|---:|---|---:|---:|---:|
| 1 | 179,739 | 1 | episode 1 premiere | $57,516 | $32,209 | $25,307 |
| 2 | 223,813 | 1.25 | episode 2: 100% kept (critic 7.87), +44,074 new | $71,620 | $40,107 | $31,513 |
| 3 | 251,217 | 1.12 | episode 3: 100% kept (critic 7.87), +27,404 new | $80,389 | $45,018 | $35,371 |
| 4 | 291,091 | 1.16 | episode 4: 100% kept (audience 9.19), +39,874 new | $93,149 | $52,164 | $40,986 |
| 5 | 319,850 | 1.1 | episode 5: 100% kept (audience 9.19), +28,759 new | $102,352 | $57,317 | $45,035 |
| 6 | 341,076 | 1.07 | episode 6: 100% kept (audience 9.19), +21,226 new | $109,144 | $61,121 | $48,024 |
| 7 | 356,672 | 1.05 | episode 7: 100% kept (audience 9.19), +15,596 new | $114,135 | $63,916 | $50,219 |
| 8 | 368,141 | 1.03 | episode 8: 100% kept (audience 9.19), +11,469 new | $117,805 | $65,971 | $51,834 |
| 9 | 376,574 | 1.02 | episode 9: 100% kept (audience 9.19), +8,433 new | $120,504 | $67,482 | $53,022 |
| 10 | 382,775 | 1.02 | episode 10: 100% kept (audience 9.19), +6,201 new | $122,488 | $68,593 | $53,895 |
| 11 | 387,335 | 1.01 | episode 11: 100% kept (audience 9.19), +4,560 new | $123,947 | $69,410 | $54,537 |
| 12 | 390,687 | 1.01 | episode 12: 100% kept (audience 9.19), +3,352 new | $125,020 | $70,011 | $55,009 |
| 13 | 393,152 | 1.01 | episode 13: 100% kept (audience 9.19), +2,465 new | $125,809 | $70,453 | $55,356 |
| 14 | 394,965 | 1 | episode 14: 100% kept (audience 9.19), +1,813 new | $126,389 | $70,778 | $55,611 |
| 15 | 396,298 | 1 | episode 15: 100% kept (audience 9.19), +1,333 new | $126,815 | $71,017 | $55,799 |
| 16 | 397,278 | 1 | episode 16: 100% kept (audience 9.19), +980 new | $127,129 | $71,192 | $55,937 |
| 17 | 397,999 | 1 | episode 17: 100% kept (audience 9.19), +721 new | $127,360 | $71,321 | $56,038 |

**Progression trace**

- Prestige awards: Prestige +50: meters_all_70 (Dead Pulse: Season 4).; Prestige +75: audience_7_5 (Dead Pulse: Season 4).; Prestige +150: ip_gross_5m (Dead Pulse: Season 4).
- Rule labels: LOCKED = causal chain, accounting, fallback/no-campaign, thresholds 4.0/9.0, IP fan inheritance. WORKING ASSUMPTION = all formulas' shapes and numbers.

## Cash ledger (studio cash only)

| Week | Kind | Amount | Note |
|---:|---|---:|---|
| 0 | start_cash | $40,000 |  |
| 0 | advance_received | $86,000 | advance from Wolf Pictures (project reserve, not revenue) |
| 0 | advance_spent | $-60,000 | base_cost: unavoidable base cost |
| 7 | advance_spent | $-26,000 | star_fee: Jay Vale |
| 7 | star_fee | $-1,120 | Jay Vale |
| 16 | advance_received | $92,000 | advance from Wolf Pictures (project reserve, not revenue) |
| 16 | advance_spent | $-90,000 | base_cost: unavoidable base cost |
| 24 | advance_spent | $-2,000 | star_fee: Eli Sato |
| 24 | star_fee | $-263 | Eli Sato |
| 31 | campaign | $-20,000 | medium |
| 34 | advance_received | $146,000 | advance from Wolf Pictures (project reserve, not revenue) |
| 34 | advance_spent | $-90,000 | base_cost: unavoidable base cost |
| 42 | advance_spent | $-27,856 | star_fee: Jay Vale |
| 49 | advance_spent | $-20,000 | campaign: medium |
| 52 | surplus_transfer | $8,144 | unused advance kept at completion (not sales revenue) |
| 52 | hire | $-20,000 | Eli Fox |
| 52 | hire | $-20,000 | Alex Reyes |
| 52 | advance_received | $118,000 | advance from Wolf Pictures (project reserve, not revenue) |
| 52 | advance_spent | $-90,000 | base_cost: unavoidable base cost |
| 60 | advance_spent | $-19,279 | star_fee: Jo Lowe |
| 67 | advance_spent | $-8,721 | campaign: medium |
| 67 | campaign | $-11,279 | medium |
| 70 | train | $-15,000 | Eli Fox |
| 70 | train | $-15,000 | Eli Fox |
| 70 | advance_received | $145,000 | advance from Wolf Pictures (project reserve, not revenue) |
| 70 | advance_spent | $-90,000 | base_cost: unavoidable base cost |
| 78 | advance_spent | $-33,664 | star_fee: Sam Fox |
| 85 | advance_spent | $-20,000 | campaign: medium |
| 88 | surplus_transfer | $1,336 | unused advance kept at completion (not sales revenue) |
| 88 | train | $-15,000 | Eli Fox |
| 88 | train | $-15,000 | Alex Reyes |
| 88 | advance_received | $155,000 | advance from Wolf Pictures (project reserve, not revenue) |
| 88 | advance_spent | $-90,000 | base_cost: unavoidable base cost |
| 96 | advance_spent | $-29,994 | star_fee: Jay Vale |
| 103 | advance_spent | $-20,000 | campaign: medium |
| 106 | surplus_transfer | $15,006 | unused advance kept at completion (not sales revenue) |
| 106 | train | $-15,000 | Sam |
| 106 | train | $-15,000 | Alex |
| 106 | advance_received | $145,000 | advance from Wolf Pictures (project reserve, not revenue) |
| 106 | advance_spent | $-90,000 | base_cost: unavoidable base cost |
| 114 | advance_spent | $-39,989 | star_fee: Sam Fox |
| 121 | advance_spent | $-15,011 | campaign: medium |
| 121 | campaign | $-4,989 | medium |
| 124 | train | $-15,000 | Eli Fox |
| 124 | train | $-15,000 | Alex Reyes |
| 124 | advance_received | $169,000 | advance from Wolf Pictures (project reserve, not revenue) |
| 124 | advance_spent | $-90,000 | base_cost: unavoidable base cost |
| 132 | advance_spent | $-33,718 | star_fee: Jay Vale |
| 139 | advance_spent | $-20,000 | campaign: medium |
| 142 | surplus_transfer | $25,282 | unused advance kept at completion (not sales revenue) |
| 142 | format_unlock | $-150,000 | TV series |
| 142 | upgrade | $-250,000 | studio capacity 4 -> 6 |
| 142 | hire | $-20,000 | Sam Imai |
| 142 | hire | $-20,000 | Cam Vale |
| 142 | advance_received | $173,000 | advance from Wolf Pictures (project reserve, not revenue) |
| 142 | advance_spent | $-90,000 | base_cost: unavoidable base cost |
| 149 | advance_spent | $-31,973 | star_fee: Jay Vale |
| 155 | advance_spent | $-20,000 | campaign: medium |
| 158 | surplus_transfer | $31,027 | unused advance kept at completion (not sales revenue) |
| 158 | announce | $-15,000 | Silver Shadow season 2 |
| 158 | train | $-15,000 | Cam Vale |
| 158 | train | $-15,000 | Cam Vale |
| 158 | advance_received | $181,000 | advance from Wolf Pictures (project reserve, not revenue) |
| 158 | advance_spent | $-90,000 | base_cost: unavoidable base cost |
| 165 | advance_spent | $-39,569 | star_fee: Jay Vale |
| 171 | advance_spent | $-20,000 | campaign: medium |
| 174 | surplus_transfer | $31,431 | unused advance kept at completion (not sales revenue) |
| 174 | announce | $-15,000 | Silver Shadow season 3 |
| 174 | train | $-15,000 | Cam Vale |
| 174 | train | $-15,000 | Sam Imai |
| 174 | advance_received | $241,000 | advance from Orbit Releasing (project reserve, not revenue) |
| 174 | advance_spent | $-165,000 | base_cost: unavoidable base cost |
| 185 | advance_spent | $-55,799 | star_fee: Jay Vale |
| 195 | advance_spent | $-20,000 | campaign: medium |
| 200 | surplus_transfer | $201 | unused advance kept at completion (not sales revenue) |
| 200 | announce | $-15,000 | Silver Shadow season 4 |
| 200 | train | $-15,000 | Cam Vale |
| 200 | train | $-15,000 | Sam Imai |
| 200 | advance_received | $323,000 | advance from Wolf Pictures (project reserve, not revenue) |
| 200 | advance_spent | $-165,000 | base_cost: unavoidable base cost |
| 211 | advance_spent | $-52,863 | star_fee: Jay Vale |
| 221 | advance_spent | $-20,000 | campaign: medium |
| 226 | surplus_transfer | $85,137 | unused advance kept at completion (not sales revenue) |
| 226 | announce | $-15,000 | Silver Shadow season 5 |
| 226 | upgrade | $-750,000 | studio capacity 6 -> 8 |
| 226 | hire | $-20,000 | Dee Park |
| 226 | hire | $-20,000 | Mo Novak |
| 226 | advance_received | $341,000 | advance from Meridian Global (project reserve, not revenue) |
| 226 | advance_spent | $-165,000 | base_cost: unavoidable base cost |
| 237 | advance_spent | $-63,888 | star_fee: Jay Vale |
| 247 | advance_spent | $-20,000 | campaign: medium |
| 252 | surplus_transfer | $92,112 | unused advance kept at completion (not sales revenue) |
| 252 | announce | $-15,000 | Silver Shadow season 6 |
| 252 | train | $-15,000 | Mo Novak |
| 252 | train | $-15,000 | Mo Novak |
| 252 | advance_received | $337,000 | advance from Meridian Global (project reserve, not revenue) |
| 252 | advance_spent | $-165,000 | base_cost: unavoidable base cost |
| 263 | advance_spent | $-73,502 | star_fee: Jay Vale |
| 273 | advance_spent | $-20,000 | campaign: medium |
| 278 | surplus_transfer | $78,498 | unused advance kept at completion (not sales revenue) |
| 278 | announce | $-15,000 | Silver Shadow season 7 |
| 278 | train | $-15,000 | Mo Novak |
| 278 | train | $-15,000 | Dee Park |
| 278 | advance_received | $377,000 | advance from Meridian Global (project reserve, not revenue) |
| 278 | advance_spent | $-165,000 | base_cost: unavoidable base cost |
| 289 | advance_spent | $-72,656 | star_fee: Jay Vale |
| 299 | advance_spent | $-20,000 | campaign: medium |
| 304 | surplus_transfer | $119,344 | unused advance kept at completion (not sales revenue) |
| 304 | announce | $-15,000 | Silver Shadow season 8 |
| 304 | train | $-15,000 | Mo Novak |
| 304 | train | $-15,000 | Dee Park |
| 304 | advance_received | $363,000 | advance from Meridian Global (project reserve, not revenue) |
| 304 | advance_spent | $-165,000 | base_cost: unavoidable base cost |
| 315 | advance_spent | $-71,163 | star_fee: Jay Vale |
| 325 | advance_spent | $-20,000 | campaign: medium |
| 330 | surplus_transfer | $106,837 | unused advance kept at completion (not sales revenue) |
| 330 | announce | $-15,000 | Silver Shadow season 9 |
| 330 | train | $-15,000 | Mo Novak |
| 330 | train | $-15,000 | Dee Park |
| 330 | advance_received | $288,000 | advance from XYZ Network (project reserve, not revenue) |
| 330 | advance_spent | $-165,000 | base_cost: unavoidable base cost |
| 341 | advance_spent | $-21,802 | star_fee: Ivy Imai |
| 351 | advance_spent | $-20,000 | campaign: medium |
| 356 | surplus_transfer | $81,198 | unused advance kept at completion (not sales revenue) |
| 356 | announce | $-15,000 | Silver Signal season 2 |
| 356 | train | $-15,000 | Mo Novak |
| 356 | train | $-15,000 | Dee Park |
| 356 | advance_received | $555,000 | advance from Meridian Global (project reserve, not revenue) |
| 356 | advance_spent | $-240,000 | base_cost: unavoidable base cost |
| 371 | advance_spent | $-30,420 | star_fee: Ivy Imai |
| 385 | advance_spent | $-20,000 | campaign: medium |
| 392 | surplus_transfer | $264,580 | unused advance kept at completion (not sales revenue) |
| 392 | announce | $-15,000 | Silver Signal season 3 |
| 392 | train | $-15,000 | Cam Vale |
| 392 | train | $-15,000 | Sam Imai |
| 392 | advance_received | $448,000 | advance from Meridian Global (project reserve, not revenue) |
| 392 | advance_spent | $-240,000 | base_cost: unavoidable base cost |
| 407 | advance_spent | $-30,223 | star_fee: Ivy Imai |
| 421 | advance_spent | $-20,000 | campaign: medium |
| 428 | surplus_transfer | $157,777 | unused advance kept at completion (not sales revenue) |
| 428 | announce | $-15,000 | Silver Signal season 4 |
| 428 | train | $-15,000 | Mo Novak |
| 428 | train | $-15,000 | Dee Park |
| 428 | advance_received | $413,000 | advance from Wolf Pictures (project reserve, not revenue) |
| 428 | advance_spent | $-240,000 | base_cost: unavoidable base cost |
| 443 | advance_spent | $-37,813 | star_fee: Ivy Imai |
| 457 | advance_spent | $-20,000 | campaign: medium |
| 464 | surplus_transfer | $115,187 | unused advance kept at completion (not sales revenue) |
| 464 | announce | $-15,000 | Silver Signal season 5 |
| 464 | train | $-15,000 | Cam Vale |
| 464 | train | $-15,000 | Sam Imai |
| 464 | advance_received | $588,000 | advance from Meridian Global (project reserve, not revenue) |
| 464 | advance_spent | $-240,000 | base_cost: unavoidable base cost |
| 479 | advance_spent | $-45,925 | star_fee: Ivy Imai |
| 493 | advance_spent | $-20,000 | campaign: medium |
| 500 | surplus_transfer | $282,075 | unused advance kept at completion (not sales revenue) |
| 500 | announce | $-15,000 | Silver Signal season 6 |
| 500 | train | $-15,000 | Dee Park |
| 500 | train | $-15,000 | Mo Novak |
| 500 | advance_received | $481,000 | advance from Wolf Pictures (project reserve, not revenue) |
| 500 | advance_spent | $-240,000 | base_cost: unavoidable base cost |
| 515 | advance_spent | $-51,672 | star_fee: Ivy Imai |
| 529 | advance_spent | $-20,000 | campaign: medium |
| 536 | surplus_transfer | $169,328 | unused advance kept at completion (not sales revenue) |
| 536 | announce | $-15,000 | Silver Signal season 7 |
| 536 | train | $-15,000 | Cam Vale |
| 536 | train | $-15,000 | Sam |
| 536 | advance_received | $556,000 | advance from Meridian Global (project reserve, not revenue) |
| 536 | advance_spent | $-240,000 | base_cost: unavoidable base cost |
| 551 | advance_spent | $-57,673 | star_fee: Ivy Imai |
| 565 | advance_spent | $-20,000 | campaign: medium |
| 572 | surplus_transfer | $238,327 | unused advance kept at completion (not sales revenue) |
| 572 | announce | $-15,000 | Silver Signal season 8 |
| 572 | train | $-15,000 | Sam Imai |
| 572 | train | $-15,000 | Alex |
| 572 | advance_received | $405,000 | advance from XYZ Network (project reserve, not revenue) |
| 572 | advance_spent | $-240,000 | base_cost: unavoidable base cost |
| 587 | advance_spent | $-61,963 | star_fee: Ivy Imai |
| 601 | advance_spent | $-20,000 | campaign: medium |
| 608 | surplus_transfer | $83,037 | unused advance kept at completion (not sales revenue) |
| 608 | announce | $-15,000 | Silver Signal season 9 |
| 608 | train | $-15,000 | Eli Fox |
| 608 | train | $-15,000 | Dee Park |
| 608 | advance_received | $599,000 | advance from Meridian Global (project reserve, not revenue) |
| 608 | advance_spent | $-240,000 | base_cost: unavoidable base cost |
| 623 | advance_spent | $-67,258 | star_fee: Jay Vale |
| 637 | advance_spent | $-20,000 | campaign: medium |
| 644 | surplus_transfer | $271,742 | unused advance kept at completion (not sales revenue) |
| 644 | announce | $-15,000 | Dead Pulse season 2 |
| 644 | train | $-15,000 | Mo Novak |
| 644 | train | $-15,000 | Alex Reyes |
| 644 | advance_received | $379,000 | advance from Wolf Pictures (project reserve, not revenue) |
| 644 | advance_spent | $-240,000 | base_cost: unavoidable base cost |
| 659 | advance_spent | $-66,911 | star_fee: Jay Vale |
| 673 | advance_spent | $-20,000 | campaign: medium |
| 680 | surplus_transfer | $52,089 | unused advance kept at completion (not sales revenue) |
| 680 | announce | $-15,000 | Dead Pulse season 3 |
| 680 | train | $-15,000 | Cam Vale |
| 680 | train | $-15,000 | Sam |
| 680 | advance_received | $495,000 | advance from Meridian Global (project reserve, not revenue) |
| 680 | advance_spent | $-240,000 | base_cost: unavoidable base cost |
| 695 | advance_spent | $-66,541 | star_fee: Jay Vale |
| 709 | advance_spent | $-20,000 | campaign: medium |
| 716 | surplus_transfer | $168,459 | unused advance kept at completion (not sales revenue) |
| 716 | announce | $-15,000 | Dead Pulse season 4 |
| 716 | train | $-15,000 | Sam Imai |
| 716 | train | $-15,000 | Alex |
| 716 | advance_received | $708,000 | advance from Meridian Global (project reserve, not revenue) |
| 716 | advance_spent | $-315,000 | base_cost: unavoidable base cost |
| 735 | advance_spent | $-66,389 | star_fee: Jay Vale |
| 753 | advance_spent | $-20,000 | campaign: medium |
| 763 | surplus_transfer | $306,611 | unused advance kept at completion (not sales revenue) |
| 763 | announce | $-15,000 | Dead Pulse season 5 |
| 763 | train | $-15,000 | Eli Fox |
| 763 | train | $-15,000 | Dee Park |
| 763 | advance_received | $776,000 | advance from Meridian Global (project reserve, not revenue) |
| 763 | advance_spent | $-315,000 | base_cost: unavoidable base cost |
| all | payroll (total) | $-5,628,000 | aggregated |
| all | upkeep (total) | $-468,000 | aggregated |
| all | studio_take (total) | $15,938,227 | aggregated |
