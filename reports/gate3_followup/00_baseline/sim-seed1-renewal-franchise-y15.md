# Single career — seed 1, strategy renewal-franchise

> **Simulation assumptions, not design locks.** All numbers come from provisional config values. Nothing here is official balance.

- Ruleset: `v9.61-movie-kernel-0.1` · Config: `gate3_mixed` (hash `b83a7f2c`)
- Seed: 1
- Strategy: renewal-franchise
- Decisions: 967
- Modelled: movies; limited series (config-gated); renewable TV seasons: orders, renewal, fatigue, twist, hiatus, announcements, contract variants A/B (config-gated); studio streaming service: engineer build, aggregate subscribers, catalog, Originals (config-gated); distributor advances/royalties/trust; Stars (families, budgets, fallback, callbacks, relationships); marketing + studio buzz; scores + legs; IP fans; Prestige milestones; studio genre levels; trends; staff XP/hire/train; studio staff-capacity cap + upgrade ladder (when configured); theme research + staff pitches
- **Not modelled:** soap operas (shelved); named critics (Gate 2.6 proxy only); eras beyond a gentle quality bar; studio upgrades other than staff capacity + TV unlock; genre unlocks; late-game concurrency; TV spinoffs/reboots, Final Season announcements, other show shake-ups; binge drops; platform upgrades; challenge modes

## Career summary

- Weeks: 780 (15.0 years) · Releases: 28 · Cancellations: 0
- End cash: $9,537,141 (start $40,000) · Negative-cash weeks: 3
- Prestige: 2580 (39 awards)
- Staff: Sam [P 89 W 90 F 86 E 77, XP 7800]; Alex [P 87 W 90 F 89 E 81, XP 7800]; Gus Novak [P 89 W 89 F 89 E 82, XP 7320]; Bo Diaz [P 87 W 90 F 88 E 76, XP 7320]; Jo Moreau [P 90 W 90 F 88 E 77, XP 6680]; Eli Quinn [P 89 W 90 F 87 E 86, XP 6680]; Mo Vale [P 87 W 90 F 83 E 81, XP 5940]; Ari Kerr [P 84 W 90 F 88 E 82, XP 5940]
- Studio genre levels (exact genre): Comedy xp 2, Horror xp 3, Action xp 23
- IP fans: Hollow Edge 0; Dead Night 423; Dead Pulse 286; Broken Legacy 2,588; Red Shadow 1,370; Hollow Code 3,158; Hollow Edge 3,086; Iron Legacy 3,965; Last Edge 103,747
- Distributor trust: wolf 2.61, starlight 2.50, xyz 2.83, orbit 2.77, meridian 3.95
- Stars hired: Bo Hart (L0, Fame 7, rel 0.50); Sam Imai (L6, Fame 50, rel 2.50); Fin Quinn (L5, Fame 50, rel 1.75); Alex Sato (L10, Fame 100, rel 5.00); Liv Reyes (L5, Fame 40, rel 1.75); Dee Sato (L2, Fame 52, rel 1.75)
- Great films: Hall of Fame 0/28 · avg ≥9.0 0/28 · avg >9.0 0/28 · Audience ≥9 0/28 · Critic ≥9 0/28 · 8+ 6/28
- Best film: 8.83 "Last Edge: Season 4" (tv, A8.77/C8.89; renewal-franchise seed 1 #12, yr 4.1, critic gen 0) · best Audience: 8.83 "Last Edge: Season 4" (tv, A8.77/C8.89; renewal-franchise seed 1 #12, yr 4.1, critic gen 0) · best Critic: 8.83 "Last Edge: Season 4" (tv, A8.77/C8.89; renewal-franchise seed 1 #12, yr 4.1, critic gen 0)

## Formats, TV and streaming (Gate 3)

- Releases by format: movie 8 (avg 6.518, HoF 0, net/production-week $17,570); tv 20 (avg 6.952, HoF 0, net/production-week $25,334)
- TV: unlocked week 128 (year 2.5) · shows 1, seasons 20, longest 20 · ended by a score below 4: 0
  - Last Edge: seasons S1 5ep 8.39 → S2 5ep 8.36 → S3 10ep 8.71 → S4 10ep 8.83 → S5 10ep 8.61 → S6 10ep 8.28 → S7 10ep 7.84 → S8 10ep 7.23 → S9 15ep 6.16 → S10 15ep 6.22 → S11 15ep 6.23 → S12 15ep 5.93 → S13 15ep 5.38 (twist Zombies) → S14 15ep 6.28 (twist Spies) → S15 15ep 6.29 → S16 15ep 6.29 → S17 15ep 6.3 → S18 15ep 5.99 → S19 15ep 5.41 (twist Zombies) → S20 15ep 6.3 (twist Spies) · fans 103,747 · last season averaged 6.3 (≥ 4): renewable
- Streaming: not built
- Last 12 months: traditional studio take $716,704 · subscriptions $0 · platform cost $0 · kept surplus $330,757
- Prestige by source: audience_7_5 825, meters_all_70 1100, ip_viewers_500k 150, critic_8_5 255, ip_gross_1m 100, ip_gross_5m 150 · by format: movie 400, tv 2180

## Releases (full causal trace)

### Hollow Edge — Comedy + Superheroes (new)

Released week 16 (year 0.3) · Distributor: Wolf Pictures · Star: Bo Hart (L0, Fame 7) · IP: Hollow Edge

**Financial waterfall** [LOCKED rules; amounts provisional]

| Item | Amount |
|---|---:|
| Advance received (project reserve, not revenue) | $57,000 |
| Base cost (unavoidable) | −$60,000 |
| Star fee | −$5,621 |
| Marketing campaign | −$0 |
| Paid from studio cash (overrun) | $8,621 |
| **Unused advance kept at completion** | $0 |
| Gross from sales (10 weeks) | $146,456 |
| Distributor royalty (33% of weekly gross) | −$48,330 |
| **Studio take** | $98,126 |
| Net for this title (surplus + take − cash overrun; wages are studio-wide, excluded) | $89,504 |

**Quality trace** [scores are computed, never rolled]

Meters (0–100): Plot 56.94 · Writing 58.13 · Filming 56.41 · Editing 46.75
Inputs: staff points {"plot":55.69,"writing":58.47,"filming":51.77,"editing":35.55}, Star filming points 13.2 (Star family fit 20), studio Comedy level 0 (+0%), era bar x1.01
Base scores: Audience 5.34 / Critic 5.57 · no weak meter
Combo grades: Audience D (x0.9) / Critic F (x0.78) · repetition fatigue x1 · critic saturation x1
Before expectations (after combo, weakness, fatigue, saturation; pre-clamp): Audience 4.8 / Critic 4.35 · critic generation 0 (−0.0%, scale) · audience era 0 (−0.0%) · then clamp 0–10 (generation/era 0 = the ones active at game start)
**Final: Audience 4.8 / Critic 4.35 → avg 4.57**

**Opening & viewership trace** [marketing/Fame/reach affect viewers only]

Awareness inputs: base 0.35, marketing 0, studioBuzz 0, starFame 0.05, trend 0.15, ipFans 0 → awareness 0.42. Reach cap 240,000 → pool 101,255 → opening 30,377.

| Wk | Viewers | Retention | Driver | Gross | Studio | Distributor |
|---:|---:|---:|---|---:|---:|---:|
| 1 | 30,377 | 1 | opening (aware people watching) | $60,754 | $40,705 | $20,049 |
| 2 | 17,168 | 0.57 | critic 4.35: no buzz | $34,336 | $23,005 | $11,331 |
| 3 | 10,168 | 0.59 | critic 4.35: no buzz | $20,336 | $13,625 | $6,711 |
| 4 | 6,395 | 0.63 | audience 4.8: no word of mouth | $12,790 | $8,569 | $4,221 |
| 5 | 3,893 | 0.61 | audience 4.8: no word of mouth | $7,786 | $5,217 | $2,569 |
| 6 | 2,370 | 0.61 | audience 4.8: no word of mouth | $4,740 | $3,176 | $1,564 |
| 7 | 1,443 | 0.61 | audience 4.8: no word of mouth | $2,886 | $1,934 | $952 |
| 8 | 879 | 0.61 | audience 4.8: no word of mouth | $1,758 | $1,178 | $580 |
| 9 | 535 | 0.61 | audience 4.8: no word of mouth | $1,070 | $717 | $353 |
| 10 | 0 | 0 | audience 4.8: no word of mouth | $0 | $0 | $0 |

**Progression trace**

- Prestige awards: none (no milestone reached)
- IP fans: {"before":0,"after":0,"delta":0}
- Star career: {"fameDelta":-0.71,"relDelta":-0.5,"grow":6,"level":0,"reasons":"worked together (+); project hurt their career: Fame fell (-)"}
- Distributor trust: Wolf Pictures earned back 85% of its $57,000 advance on Hollow Edge and reviews were poor (step -0.22)
- Rule labels: LOCKED = causal chain, accounting, fallback/no-campaign, thresholds 4.0/9.0, IP fan inheritance. WORKING ASSUMPTION = all formulas' shapes and numbers.

### Dead Night — Horror + Zombies (new)

Released week 32 (year 0.6) · Distributor: Wolf Pictures · Star: Sam Imai (L6, Fame 50) · IP: Dead Night

**Financial waterfall** [LOCKED rules; amounts provisional]

| Item | Amount |
|---|---:|
| Advance received (project reserve, not revenue) | $85,000 |
| Base cost (unavoidable) | −$60,000 |
| Star fee | −$42,005 |
| Marketing campaign | −$8,000 |
| Paid from studio cash (overrun) | $25,005 |
| **Unused advance kept at completion** | $0 |
| Gross from sales (15 weeks) | $344,126 |
| Distributor royalty (32% of weekly gross) | −$110,120 |
| **Studio take** | $234,006 |
| Net for this title (surplus + take − cash overrun; wages are studio-wide, excluded) | $209,000 |

**Quality trace** [scores are computed, never rolled]

Meters (0–100): Plot 57.84 · Writing 59.29 · Filming 70.06 · Editing 48.22
Inputs: staff points {"plot":58.48,"writing":62.09,"filming":54.89,"editing":38.17}, Star filming points 64.02 (Star family fit 97), studio Horror level 0 (+0%), era bar x1.02
Base scores: Audience 5.9 / Critic 5.87 · no weak meter
Combo grades: Audience C (x1) / Critic D (x0.9) · repetition fatigue x1 · critic saturation x1
Before expectations (after combo, weakness, fatigue, saturation; pre-clamp): Audience 5.9 / Critic 5.29 · critic generation 0 (−0.0%, scale) · audience era 0 (−0.0%) · then clamp 0–10 (generation/era 0 = the ones active at game start)
**Final: Audience 5.9 / Critic 5.29 → avg 5.6**

**Opening & viewership trace** [marketing/Fame/reach affect viewers only]

Awareness inputs: base 0.35, marketing 0.25, studioBuzz 0, starFame 0.28, trend 0.4, ipFans 0 → awareness 0.72. Reach cap 264,000 → pool 190,745 → opening 57,224.

| Wk | Viewers | Retention | Driver | Gross | Studio | Distributor |
|---:|---:|---:|---|---:|---:|---:|
| 1 | 57,224 | 1 | opening (aware people watching) | $114,448 | $77,825 | $36,623 |
| 2 | 35,916 | 0.63 | critic 5.29: +510 newly aware (buzz) | $71,832 | $48,846 | $22,986 |
| 3 | 22,175 | 0.62 | critic 5.29: +618 newly aware (buzz) | $44,350 | $30,158 | $14,192 |
| 4 | 16,485 | 0.74 | audience 5.9: +7,983 newly aware (word of mouth) | $32,970 | $22,420 | $10,550 |
| 5 | 11,820 | 0.72 | audience 5.9: +5,935 newly aware (word of mouth) | $23,640 | $16,075 | $7,565 |
| 6 | 8,474 | 0.72 | audience 5.9: +4,255 newly aware (word of mouth) | $16,948 | $11,525 | $5,423 |
| 7 | 6,076 | 0.72 | audience 5.9: +3,051 newly aware (word of mouth) | $12,152 | $8,263 | $3,889 |
| 8 | 4,356 | 0.72 | audience 5.9: +2,187 newly aware (word of mouth) | $8,712 | $5,924 | $2,788 |
| 9 | 3,124 | 0.72 | audience 5.9: +1,568 newly aware (word of mouth) | $6,248 | $4,249 | $1,999 |
| 10 | 2,239 | 0.72 | audience 5.9: +1,125 newly aware (word of mouth) | $4,478 | $3,045 | $1,433 |
| 11 | 1,606 | 0.72 | audience 5.9: +806 newly aware (word of mouth) | $3,212 | $2,184 | $1,028 |
| 12 | 1,151 | 0.72 | audience 5.9: +578 newly aware (word of mouth) | $2,302 | $1,565 | $737 |
| 13 | 825 | 0.72 | audience 5.9: +414 newly aware (word of mouth) | $1,650 | $1,122 | $528 |
| 14 | 592 | 0.72 | audience 5.9: +297 newly aware (word of mouth) | $1,184 | $805 | $379 |
| 15 | 0 | 0 | audience 5.9: +213 newly aware (word of mouth) | $0 | $0 | $0 |

**Progression trace**

- Prestige awards: none (no milestone reached)
- IP fans: {"before":0,"after":1652,"delta":1652}
- Star career: {"fameDelta":1.6,"relDelta":0.75,"grow":3,"level":5,"reasons":"worked together (+); project boosted their career (+)"}
- Distributor trust: Wolf Pictures earned 130% of its advance back on Dead Night (step 0.19)
- Rule labels: LOCKED = causal chain, accounting, fallback/no-campaign, thresholds 4.0/9.0, IP fan inheritance. WORKING ASSUMPTION = all formulas' shapes and numbers.

### Dead Pulse — Horror + Superheroes (new)

Released week 48 (year 0.9) · Distributor: Wolf Pictures · Star: Sam Imai (L6, Fame 50) · IP: Dead Pulse

**Financial waterfall** [LOCKED rules; amounts provisional]

| Item | Amount |
|---|---:|
| Advance received (project reserve, not revenue) | $77,000 |
| Base cost (unavoidable) | −$60,000 |
| Star fee | −$42,005 |
| Marketing campaign | −$8,000 |
| Paid from studio cash (overrun) | $33,005 |
| **Unused advance kept at completion** | $0 |
| Gross from sales (13 weeks) | $321,070 |
| Distributor royalty (32% of weekly gross) | −$102,742 |
| **Studio take** | $218,328 |
| Net for this title (surplus + take − cash overrun; wages are studio-wide, excluded) | $185,322 |

**Quality trace** [scores are computed, never rolled]

Meters (0–100): Plot 60.06 · Writing 61.75 · Filming 71.18 · Editing 50.21
Inputs: staff points {"plot":64.86,"writing":69.63,"filming":61.09,"editing":41.83}, Star filming points 65.94 (Star family fit 100), studio Horror level 1 (+3%), era bar x1.04
Base scores: Audience 6.08 / Critic 6.08 · no weak meter
Combo grades: Audience D (x0.9) / Critic D (x0.9) · repetition fatigue x1 · critic saturation x1
Before expectations (after combo, weakness, fatigue, saturation; pre-clamp): Audience 5.47 / Critic 5.48 · critic generation 0 (−0.0%, scale) · audience era 0 (−0.0%) · then clamp 0–10 (generation/era 0 = the ones active at game start)
**Final: Audience 5.47 / Critic 5.48 → avg 5.48**

**Opening & viewership trace** [marketing/Fame/reach affect viewers only]

Awareness inputs: base 0.35, marketing 0.25, studioBuzz 0, starFame 0.29, trend 0.4, ipFans 0 → awareness 0.73. Reach cap 264,000 → pool 191,445 → opening 57,434.

| Wk | Viewers | Retention | Driver | Gross | Studio | Distributor |
|---:|---:|---:|---|---:|---:|---:|
| 1 | 57,434 | 1 | opening (aware people watching) | $114,868 | $78,110 | $36,758 |
| 2 | 36,485 | 0.64 | critic 5.48: +836 newly aware (buzz) | $72,970 | $49,620 | $23,350 |
| 3 | 22,554 | 0.62 | critic 5.48: +1,011 newly aware (buzz) | $45,108 | $30,673 | $14,435 |
| 4 | 15,046 | 0.67 | audience 5.47: +4,240 newly aware (word of mouth) | $30,092 | $20,463 | $9,629 |
| 5 | 10,043 | 0.67 | audience 5.47: +2,829 newly aware (word of mouth) | $20,086 | $13,658 | $6,428 |
| 6 | 6,704 | 0.67 | audience 5.47: +1,888 newly aware (word of mouth) | $13,408 | $9,117 | $4,291 |
| 7 | 4,475 | 0.67 | audience 5.47: +1,260 newly aware (word of mouth) | $8,950 | $6,086 | $2,864 |
| 8 | 2,987 | 0.67 | audience 5.47: +841 newly aware (word of mouth) | $5,974 | $4,062 | $1,912 |
| 9 | 1,994 | 0.67 | audience 5.47: +562 newly aware (word of mouth) | $3,988 | $2,712 | $1,276 |
| 10 | 1,331 | 0.67 | audience 5.47: +375 newly aware (word of mouth) | $2,662 | $1,810 | $852 |
| 11 | 889 | 0.67 | audience 5.47: +250 newly aware (word of mouth) | $1,778 | $1,209 | $569 |
| 12 | 593 | 0.67 | audience 5.47: +167 newly aware (word of mouth) | $1,186 | $806 | $380 |
| 13 | 0 | 0 | audience 5.47: +111 newly aware (word of mouth) | $0 | $0 | $0 |

**Progression trace**

- Prestige awards: none (no milestone reached)
- IP fans: {"before":0,"after":1233,"delta":1233}
- Star career: {"fameDelta":1.24,"relDelta":0.75,"grow":0,"level":6,"reasons":"worked together (+); project boosted their career (+)"}
- Distributor trust: Wolf Pictures earned 133% of its advance back on Dead Pulse (step 0.2)
- Rule labels: LOCKED = causal chain, accounting, fallback/no-campaign, thresholds 4.0/9.0, IP fan inheritance. WORKING ASSUMPTION = all formulas' shapes and numbers.

### Broken Legacy — Action + Zombies (new)

Released week 64 (year 1.2) · Distributor: Wolf Pictures · Star: Fin Quinn (L5, Fame 50) · IP: Broken Legacy

**Financial waterfall** [LOCKED rules; amounts provisional]

| Item | Amount |
|---|---:|
| Advance received (project reserve, not revenue) | $114,000 |
| Base cost (unavoidable) | −$60,000 |
| Star fee | −$35,970 |
| Marketing campaign | −$8,000 |
| Paid from studio cash (overrun) | $0 |
| **Unused advance kept at completion** | $10,030 |
| Gross from sales (15 weeks) | $518,798 |
| Distributor royalty (31% of weekly gross) | −$160,827 |
| **Studio take** | $357,971 |
| Net for this title (surplus + take − cash overrun; wages are studio-wide, excluded) | $368,000 |

**Quality trace** [scores are computed, never rolled]

Meters (0–100): Plot 73.75 · Writing 74.54 · Filming 76.4 · Editing 64.58
Inputs: staff points {"plot":122.65,"writing":127.8,"filming":119.62,"editing":76.51}, Star filming points 48.84 (Star family fit 74), studio Action level 0 (+0%), era bar x1.05
Base scores: Audience 7.16 / Critic 7.3 · no weak meter
Combo grades: Audience A (x1.15) / Critic C (x1) · repetition fatigue x1 · critic saturation x0.9
Before expectations (after combo, weakness, fatigue, saturation; pre-clamp): Audience 8.23 / Critic 6.57 · critic generation 0 (−0.0%, scale) · audience era 0 (−0.0%) · then clamp 0–10 (generation/era 0 = the ones active at game start)
**Final: Audience 8.23 / Critic 6.57 → avg 7.4**

**Opening & viewership trace** [marketing/Fame/reach affect viewers only]

Awareness inputs: base 0.35, marketing 0.25, studioBuzz 0, starFame 0.25, trend 0.1, ipFans 0 → awareness 0.61. Reach cap 264,000 → pool 162,104 → opening 48,631.

| Wk | Viewers | Retention | Driver | Gross | Studio | Distributor |
|---:|---:|---:|---|---:|---:|---:|
| 1 | 48,631 | 1 | opening (aware people watching) | $97,262 | $67,111 | $30,151 |
| 2 | 33,551 | 0.69 | critic 6.57: +3,839 newly aware (buzz) | $67,102 | $46,300 | $20,802 |
| 3 | 21,333 | 0.64 | critic 6.57: +4,208 newly aware (buzz) | $42,666 | $29,440 | $13,226 |
| 4 | 23,281 | 1.09 | audience 8.23: +27,562 newly aware (word of mouth) | $46,562 | $32,128 | $14,434 |
| 5 | 23,829 | 1.02 | audience 8.23: +30,079 newly aware (word of mouth) | $47,658 | $32,884 | $14,774 |
| 6 | 24,391 | 1.02 | audience 8.23: +30,787 newly aware (word of mouth) | $48,782 | $33,660 | $15,122 |
| 7 | 24,965 | 1.02 | audience 8.23: +31,513 newly aware (word of mouth) | $49,930 | $34,452 | $15,478 |
| 8 | 20,355 | 0.82 | audience 8.23: +17,337 newly aware (word of mouth) | $40,710 | $28,090 | $12,620 |
| 9 | 13,623 | 0.67 | audience 8.23: +5,602 newly aware (word of mouth) | $27,246 | $18,800 | $8,446 |
| 10 | 9,403 | 0.69 | audience 8.23: +4,567 newly aware (word of mouth) | $18,806 | $12,976 | $5,830 |
| 11 | 6,456 | 0.69 | audience 8.23: +3,057 newly aware (word of mouth) | $12,912 | $8,909 | $4,003 |
| 12 | 4,437 | 0.69 | audience 8.23: +2,110 newly aware (word of mouth) | $8,874 | $6,123 | $2,751 |
| 13 | 3,049 | 0.69 | audience 8.23: +1,449 newly aware (word of mouth) | $6,098 | $4,208 | $1,890 |
| 14 | 2,095 | 0.69 | audience 8.23: +996 newly aware (word of mouth) | $4,190 | $2,891 | $1,299 |
| 15 | 0 | 0 | audience 8.23: +684 newly aware (word of mouth) | $0 | $0 | $0 |

**Progression trace**

- Prestige awards: Prestige +75: audience_7_5 (Broken Legacy).
- IP fans: {"before":0,"after":9961,"delta":9961}
- Star career: {"fameDelta":7.6,"relDelta":0.75,"grow":6,"level":5,"reasons":"worked together (+); project boosted their career (+)"}
- Distributor trust: Wolf Pictures earned 141% of its advance back on Broken Legacy with strong reviews (step 0.5)
- Rule labels: LOCKED = causal chain, accounting, fallback/no-campaign, thresholds 4.0/9.0, IP fan inheritance. WORKING ASSUMPTION = all formulas' shapes and numbers.

### Red Shadow — Action + Sports (new)

Released week 80 (year 1.5) · Distributor: Wolf Pictures · Star: Alex Sato (L10, Fame 100) · IP: Red Shadow

**Financial waterfall** [LOCKED rules; amounts provisional]

| Item | Amount |
|---|---:|
| Advance received (project reserve, not revenue) | $91,000 |
| Base cost (unavoidable) | −$60,000 |
| Star fee | −$17,993 |
| Marketing campaign | −$8,000 |
| Paid from studio cash (overrun) | $0 |
| **Unused advance kept at completion** | $5,007 |
| Gross from sales (15 weeks) | $360,044 |
| Distributor royalty (31% of weekly gross) | −$111,614 |
| **Studio take** | $248,430 |
| Net for this title (surplus + take − cash overrun; wages are studio-wide, excluded) | $253,437 |

**Quality trace** [scores are computed, never rolled]

Meters (0–100): Plot 76.54 · Writing 77.43 · Filming 79.65 · Editing 67.48
Inputs: staff points {"plot":144.08,"writing":151.54,"filming":138.1,"editing":88.1}, Star filming points 67.98 (Star family fit 100), studio Action level 1 (+3%), era bar x1.06
Base scores: Audience 7.46 / Critic 7.6 · no weak meter
Combo grades: Audience D (x0.9) / Critic C (x1) · repetition fatigue x1 · critic saturation x0.9
Before expectations (after combo, weakness, fatigue, saturation; pre-clamp): Audience 6.71 / Critic 6.84 · critic generation 0 (−0.0%, scale) · audience era 0 (−0.0%) · then clamp 0–10 (generation/era 0 = the ones active at game start)
**Final: Audience 6.71 / Critic 6.84 → avg 6.78**

**Opening & viewership trace** [marketing/Fame/reach affect viewers only]

Awareness inputs: base 0.35, marketing 0.25, studioBuzz 0, starFame 0.15, trend 0.1, ipFans 0 → awareness 0.57. Reach cap 264,000 → pool 151,162 → opening 45,349.

| Wk | Viewers | Retention | Driver | Gross | Studio | Distributor |
|---:|---:|---:|---|---:|---:|---:|
| 1 | 45,349 | 1 | opening (aware people watching) | $90,698 | $62,582 | $28,116 |
| 2 | 32,137 | 0.71 | critic 6.84: +4,983 newly aware (buzz) | $64,274 | $44,349 | $19,925 |
| 3 | 20,760 | 0.65 | critic 6.84: +5,324 newly aware (buzz) | $41,520 | $28,649 | $12,871 |
| 4 | 16,835 | 0.81 | audience 6.71: +14,200 newly aware (word of mouth) | $33,670 | $23,232 | $10,438 |
| 5 | 13,740 | 0.82 | audience 6.71: +11,515 newly aware (word of mouth) | $27,480 | $18,961 | $8,519 |
| 6 | 11,214 | 0.82 | audience 6.71: +9,398 newly aware (word of mouth) | $22,428 | $15,475 | $6,953 |
| 7 | 9,153 | 0.82 | audience 6.71: +7,670 newly aware (word of mouth) | $18,306 | $12,631 | $5,675 |
| 8 | 7,470 | 0.82 | audience 6.71: +6,261 newly aware (word of mouth) | $14,940 | $10,309 | $4,631 |
| 9 | 6,097 | 0.82 | audience 6.71: +5,109 newly aware (word of mouth) | $12,194 | $8,414 | $3,780 |
| 10 | 4,976 | 0.82 | audience 6.71: +4,170 newly aware (word of mouth) | $9,952 | $6,867 | $3,085 |
| 11 | 4,062 | 0.82 | audience 6.71: +3,404 newly aware (word of mouth) | $8,124 | $5,606 | $2,518 |
| 12 | 3,315 | 0.82 | audience 6.71: +2,778 newly aware (word of mouth) | $6,630 | $4,575 | $2,055 |
| 13 | 2,706 | 0.82 | audience 6.71: +2,267 newly aware (word of mouth) | $5,412 | $3,734 | $1,678 |
| 14 | 2,208 | 0.82 | audience 6.71: +1,851 newly aware (word of mouth) | $4,416 | $3,047 | $1,369 |
| 15 | 0 | 0 | audience 6.71: +1,510 newly aware (word of mouth) | $0 | $0 | $0 |

**Progression trace**

- Prestige awards: none (no milestone reached)
- IP fans: {"before":0,"after":5127,"delta":5127}
- Star career: {"fameDelta":4.85,"relDelta":0.75,"grow":0,"level":5,"reasons":"worked together (+); project boosted their career (+)"}
- Distributor trust: Wolf Pictures earned 123% of its advance back on Red Shadow (step 0.31)
- Rule labels: LOCKED = causal chain, accounting, fallback/no-campaign, thresholds 4.0/9.0, IP fan inheritance. WORKING ASSUMPTION = all formulas' shapes and numbers.

### Hollow Code — Action + Zombies (new)

Released week 96 (year 1.8) · Distributor: Orbit Releasing · Star: Alex Sato (L10, Fame 100) · IP: Hollow Code

**Financial waterfall** [LOCKED rules; amounts provisional]

| Item | Amount |
|---|---:|
| Advance received (project reserve, not revenue) | $79,000 |
| Base cost (unavoidable) | −$60,000 |
| Star fee | −$17,993 |
| Marketing campaign | −$8,000 |
| Paid from studio cash (overrun) | $6,993 |
| **Unused advance kept at completion** | $0 |
| Gross from sales (15 weeks) | $588,550 |
| Distributor royalty (36% of weekly gross) | −$211,878 |
| **Studio take** | $376,672 |
| Net for this title (surplus + take − cash overrun; wages are studio-wide, excluded) | $369,679 |

**Quality trace** [scores are computed, never rolled]

Meters (0–100): Plot 77.81 · Writing 78.81 · Filming 80.32 · Editing 68.55
Inputs: staff points {"plot":156.65,"writing":166.16,"filming":149.42,"editing":93.64}, Star filming points 67.98 (Star family fit 100), studio Action level 1 (+3%), era bar x1.07
Base scores: Audience 7.56 / Critic 7.71 · no weak meter
Combo grades: Audience A (x1.15) / Critic C (x1) · repetition fatigue x0.95 · critic saturation x0.9
Before expectations (after combo, weakness, fatigue, saturation; pre-clamp): Audience 8.26 / Critic 6.6 · critic generation 0 (−0.0%, scale) · audience era 0 (−0.0%) · then clamp 0–10 (generation/era 0 = the ones active at game start)
**Final: Audience 8.26 / Critic 6.6 → avg 7.43**

**Opening & viewership trace** [marketing/Fame/reach affect viewers only]

Awareness inputs: base 0.35, marketing 0.25, studioBuzz 0, starFame 0.18, trend 0.1, ipFans 0 → awareness 0.58. Reach cap 300,000 → pool 175,453 → opening 52,636.

| Wk | Viewers | Retention | Driver | Gross | Studio | Distributor |
|---:|---:|---:|---|---:|---:|---:|
| 1 | 52,636 | 1 | opening (aware people watching) | $105,272 | $67,374 | $37,898 |
| 2 | 36,567 | 0.69 | critic 6.6: +4,783 newly aware (buzz) | $73,134 | $46,806 | $26,328 |
| 3 | 23,427 | 0.64 | critic 6.6: +5,165 newly aware (buzz) | $46,854 | $29,987 | $16,867 |
| 4 | 25,665 | 1.1 | audience 8.26: +30,549 newly aware (word of mouth) | $51,330 | $32,851 | $18,479 |
| 5 | 26,382 | 1.03 | audience 8.26: +33,467 newly aware (word of mouth) | $52,764 | $33,769 | $18,995 |
| 6 | 27,119 | 1.03 | audience 8.26: +34,402 newly aware (word of mouth) | $54,238 | $34,712 | $19,526 |
| 7 | 27,877 | 1.03 | audience 8.26: +35,363 newly aware (word of mouth) | $55,754 | $35,683 | $20,071 |
| 8 | 25,848 | 0.93 | audience 8.26: +28,305 newly aware (word of mouth) | $51,696 | $33,085 | $18,611 |
| 9 | 16,988 | 0.66 | audience 8.26: +6,243 newly aware (word of mouth) | $33,976 | $21,745 | $12,231 |
| 10 | 11,753 | 0.69 | audience 8.26: +5,788 newly aware (word of mouth) | $23,506 | $15,044 | $8,462 |
| 11 | 8,062 | 0.69 | audience 8.26: +3,804 newly aware (word of mouth) | $16,124 | $10,319 | $5,805 |
| 12 | 5,537 | 0.69 | audience 8.26: +2,632 newly aware (word of mouth) | $11,074 | $7,087 | $3,987 |
| 13 | 3,803 | 0.69 | audience 8.26: +1,805 newly aware (word of mouth) | $7,606 | $4,868 | $2,738 |
| 14 | 2,611 | 0.69 | audience 8.26: +1,240 newly aware (word of mouth) | $5,222 | $3,342 | $1,880 |
| 15 | 0 | 0 | audience 8.26: +852 newly aware (word of mouth) | $0 | $0 | $0 |

**Progression trace**

- Prestige awards: Prestige +75: audience_7_5 (Hollow Code).
- IP fans: {"before":0,"after":11441,"delta":11441}
- Star career: {"fameDelta":8.05,"relDelta":0.75,"grow":0,"level":6,"reasons":"worked together (+); project boosted their career (+)"}
- Distributor trust: Orbit Releasing earned 268% of its advance back on Hollow Code with strong reviews (step 0.75)
- Rule labels: LOCKED = causal chain, accounting, fallback/no-campaign, thresholds 4.0/9.0, IP fan inheritance. WORKING ASSUMPTION = all formulas' shapes and numbers.

### Hollow Edge — Horror + Spies (new)

Released week 112 (year 2.2) · Distributor: Wolf Pictures · Star: Liv Reyes (L5, Fame 40) · IP: Hollow Edge

**Financial waterfall** [LOCKED rules; amounts provisional]

| Item | Amount |
|---|---:|
| Advance received (project reserve, not revenue) | $104,000 |
| Base cost (unavoidable) | −$60,000 |
| Star fee | −$23,963 |
| Marketing campaign | −$8,000 |
| Paid from studio cash (overrun) | $0 |
| **Unused advance kept at completion** | $12,037 |
| Gross from sales (15 weeks) | $521,216 |
| Distributor royalty (30% of weekly gross) | −$156,365 |
| **Studio take** | $364,851 |
| Net for this title (surplus + take − cash overrun; wages are studio-wide, excluded) | $376,888 |

**Quality trace** [scores are computed, never rolled]

Meters (0–100): Plot 78.76 · Writing 79.9 · Filming 81.17 · Editing 70.52
Inputs: staff points {"plot":167.51,"writing":179.58,"filming":164.23,"editing":103.95}, Star filming points 67.98 (Star family fit 100), studio Horror level 1 (+3%), era bar x1.09
Base scores: Audience 7.69 / Critic 7.83 · no weak meter
Combo grades: Audience B (x1.06) / Critic D (x0.9) · repetition fatigue x1 · critic saturation x1
Before expectations (after combo, weakness, fatigue, saturation; pre-clamp): Audience 8.15 / Critic 7.05 · critic generation 0 (−0.0%, scale) · audience era 0 (−0.0%) · then clamp 0–10 (generation/era 0 = the ones active at game start)
**Final: Audience 8.15 / Critic 7.05 → avg 7.6**

**Opening & viewership trace** [marketing/Fame/reach affect viewers only]

Awareness inputs: base 0.35, marketing 0.25, studioBuzz 0, starFame 0.19, trend 0.4, ipFans 0 → awareness 0.7. Reach cap 264,000 → pool 183,846 → opening 55,154.

| Wk | Viewers | Retention | Driver | Gross | Studio | Distributor |
|---:|---:|---:|---|---:|---:|---:|
| 1 | 55,154 | 1 | opening (aware people watching) | $110,308 | $77,216 | $33,092 |
| 2 | 38,761 | 0.7 | critic 7.05: +3,944 newly aware (buzz) | $77,522 | $54,265 | $23,257 |
| 3 | 24,320 | 0.63 | critic 7.05: +4,509 newly aware (buzz) | $48,640 | $34,048 | $14,592 |
| 4 | 25,678 | 1.06 | audience 8.15: +30,643 newly aware (word of mouth) | $51,356 | $35,949 | $15,407 |
| 5 | 25,985 | 1.01 | audience 8.15: +32,354 newly aware (word of mouth) | $51,970 | $36,379 | $15,591 |
| 6 | 26,296 | 1.01 | audience 8.15: +32,741 newly aware (word of mouth) | $52,592 | $36,814 | $15,778 |
| 7 | 21,486 | 0.82 | audience 8.15: +18,376 newly aware (word of mouth) | $42,972 | $30,080 | $12,892 |
| 8 | 14,402 | 0.67 | audience 8.15: +5,932 newly aware (word of mouth) | $28,804 | $20,163 | $8,641 |
| 9 | 9,955 | 0.69 | audience 8.15: +4,847 newly aware (word of mouth) | $19,910 | $13,937 | $5,973 |
| 10 | 6,847 | 0.69 | audience 8.15: +3,249 newly aware (word of mouth) | $13,694 | $9,586 | $4,108 |
| 11 | 4,713 | 0.69 | audience 8.15: +2,246 newly aware (word of mouth) | $9,426 | $6,598 | $2,828 |
| 12 | 3,243 | 0.69 | audience 8.15: +1,544 newly aware (word of mouth) | $6,486 | $4,540 | $1,946 |
| 13 | 2,232 | 0.69 | audience 8.15: +1,063 newly aware (word of mouth) | $4,464 | $3,125 | $1,339 |
| 14 | 1,536 | 0.69 | audience 8.15: +732 newly aware (word of mouth) | $3,072 | $2,150 | $922 |
| 15 | 0 | 0 | audience 8.15: +504 newly aware (word of mouth) | $0 | $0 | $0 |

**Progression trace**

- Prestige awards: Prestige +50: meters_all_70 (Hollow Edge).; Prestige +75: audience_7_5 (Hollow Edge).
- IP fans: {"before":0,"after":10841,"delta":10841}
- Star career: {"fameDelta":8.25,"relDelta":0.75,"grow":0,"level":5,"reasons":"worked together (+); project boosted their career (+)"}
- Distributor trust: Wolf Pictures earned 150% of its advance back on Hollow Edge with strong reviews (step 0.58)
- Rule labels: LOCKED = causal chain, accounting, fallback/no-campaign, thresholds 4.0/9.0, IP fan inheritance. WORKING ASSUMPTION = all formulas' shapes and numbers.

### Iron Legacy — Comedy + Spies (new)

Released week 128 (year 2.5) · Distributor: XYZ Network · Star: Dee Sato (L2, Fame 52) · IP: Iron Legacy

**Financial waterfall** [LOCKED rules; amounts provisional]

| Item | Amount |
|---|---:|
| Advance received (project reserve, not revenue) | $92,000 |
| Base cost (unavoidable) | −$60,000 |
| Star fee | −$35,076 |
| Marketing campaign | −$8,000 |
| Paid from studio cash (overrun) | $11,076 |
| **Unused advance kept at completion** | $0 |
| Gross from sales (15 weeks) | $742,284 |
| Distributor royalty (45% of weekly gross) | −$334,028 |
| **Studio take** | $408,256 |
| Net for this title (surplus + take − cash overrun; wages are studio-wide, excluded) | $397,181 |

**Quality trace** [scores are computed, never rolled]

Meters (0–100): Plot 83.71 · Writing 84.24 · Filming 82.87 · Editing 76.57
Inputs: staff points {"plot":234.83,"writing":244.3,"filming":211.95,"editing":143.61}, Star filming points 51.66 (Star family fit 76), studio Comedy level 1 (+3%), era bar x1.1
Base scores: Audience 8.1 / Critic 8.27 · no weak meter
Combo grades: Audience C (x1) / Critic F (x0.78) · repetition fatigue x1 · critic saturation x1
Before expectations (after combo, weakness, fatigue, saturation; pre-clamp): Audience 8.1 / Critic 6.45 · critic generation 0 (−0.0%, scale) · audience era 0 (−0.0%) · then clamp 0–10 (generation/era 0 = the ones active at game start)
**Final: Audience 8.1 / Critic 6.45 → avg 7.28**

**Opening & viewership trace** [marketing/Fame/reach affect viewers only]

Awareness inputs: base 0.35, marketing 0.25, studioBuzz 0, starFame 0.26, trend 0.4, ipFans 0 → awareness 0.72. Reach cap 376,000 → pool 269,772 → opening 80,932.

| Wk | Viewers | Retention | Driver | Gross | Studio | Distributor |
|---:|---:|---:|---|---:|---:|---:|
| 1 | 80,932 | 1 | opening (aware people watching) | $161,864 | $89,025 | $72,839 |
| 2 | 54,658 | 0.68 | critic 6.45: +3,697 newly aware (buzz) | $109,316 | $60,124 | $49,192 |
| 3 | 34,025 | 0.62 | critic 6.45: +4,357 newly aware (buzz) | $68,050 | $37,428 | $30,623 |
| 4 | 36,489 | 1.07 | audience 8.1: +42,191 newly aware (word of mouth) | $72,978 | $40,138 | $32,840 |
| 5 | 36,662 | 1 | audience 8.1: +45,246 newly aware (word of mouth) | $73,324 | $40,328 | $32,996 |
| 6 | 36,836 | 1 | audience 8.1: +45,461 newly aware (word of mouth) | $73,672 | $40,520 | $33,152 |
| 7 | 30,513 | 0.83 | audience 8.1: +26,926 newly aware (word of mouth) | $61,026 | $33,564 | $27,462 |
| 8 | 20,436 | 0.67 | audience 8.1: +8,337 newly aware (word of mouth) | $40,872 | $22,480 | $18,392 |
| 9 | 14,145 | 0.69 | audience 8.1: +6,906 newly aware (word of mouth) | $28,290 | $15,560 | $12,731 |
| 10 | 9,738 | 0.69 | audience 8.1: +4,625 newly aware (word of mouth) | $19,476 | $10,712 | $8,764 |
| 11 | 6,709 | 0.69 | audience 8.1: +3,201 newly aware (word of mouth) | $13,418 | $7,380 | $6,038 |
| 12 | 4,622 | 0.69 | audience 8.1: +2,204 newly aware (word of mouth) | $9,244 | $5,084 | $4,160 |
| 13 | 3,184 | 0.69 | audience 8.1: +1,518 newly aware (word of mouth) | $6,368 | $3,502 | $2,866 |
| 14 | 2,193 | 0.69 | audience 8.1: +1,046 newly aware (word of mouth) | $4,386 | $2,412 | $1,974 |
| 15 | 0 | 0 | audience 8.1: +721 newly aware (word of mouth) | $0 | $0 | $0 |

**Progression trace**

- Prestige awards: Prestige +50: meters_all_70 (Iron Legacy).; Prestige +75: audience_7_5 (Iron Legacy).
- IP fans: {"before":0,"after":13539,"delta":13539}
- Star career: {"fameDelta":8.12,"relDelta":0.75,"grow":6,"level":2,"reasons":"worked together (+); project boosted their career (+)"}
- Distributor trust: XYZ Network earned 363% of its advance back on Iron Legacy with strong reviews (step 0.75)
- Rule labels: LOCKED = causal chain, accounting, fallback/no-campaign, thresholds 4.0/9.0, IP fan inheritance. WORKING ASSUMPTION = all formulas' shapes and numbers.

### Last Edge — Action + Spies (new)

Released week 144 (year 2.8) · Distributor: XYZ Network · Star: Alex Sato (L10, Fame 100) · IP: Last Edge
Format: **tv season 1**, 5 episodes (one per week) · 216,621 distinct viewers, 925,204 viewer-episodes · renewal: average 8.39 ≥ 4.0 → renewable

**Financial waterfall** [LOCKED rules; amounts provisional]

| Item | Amount |
|---|---:|
| Advance received (project reserve, not revenue) | $182,000 |
| Base cost (unavoidable) | −$90,000 |
| Star fee | −$26,114 |
| Marketing campaign | −$8,000 |
| Paid from studio cash (overrun) | $0 |
| **Unused advance kept at completion** | $57,886 |
| Gross from sales (8 weeks) | $296,065 |
| Distributor royalty (43% of weekly gross) | −$127,308 |
| **Studio take** | $168,757 |
| Net for this title (surplus + take − cash overrun; wages are studio-wide, excluded) | $226,643 |

**Quality trace** [scores are computed, never rolled]

Meters (0–100): Plot 84.91 · Writing 85.52 · Filming 84.69 · Editing 78.11
Inputs: staff points {"plot":260.05,"writing":272.97,"filming":234.85,"editing":158.51}, Star filming points 69.96 (Star family fit 100), studio Action level 2 (+6%), era bar x1.11
Base scores: Audience 8.25 / Critic 8.41 · no weak meter
Combo grades: Audience B (x1.06) / Critic B (x1.06) · repetition fatigue x1 · critic saturation x0.9
Before expectations (after combo, weakness, fatigue, saturation; pre-clamp): Audience 8.75 / Critic 8.02 · critic generation 0 (−0.0%, scale) · audience era 0 (−0.0%) · then clamp 0–10 (generation/era 0 = the ones active at game start)
**Final: Audience 8.75 / Critic 8.02 → avg 8.39**

**Opening & viewership trace** [marketing/Fame/reach affect viewers only]

Awareness inputs: base 0.35, marketing 0.25, studioBuzz 0, starFame 0.23, trend 0.1, ipFans 0, announcement 0 → awareness 0.6. Reach cap 376,000 → pool 227,262 → opening 68,179.

| Wk | Viewers | Retention | Driver | Gross | Studio | Distributor |
|---:|---:|---:|---|---:|---:|---:|
| 1 | 113,631 | 1 | episode 1 premiere | $36,362 | $20,726 | $15,636 |
| 2 | 142,975 | 1.26 | episode 2: 100% kept (critic 8.02), +29,344 new | $45,752 | $26,079 | $19,673 |
| 3 | 162,413 | 1.14 | episode 3: 100% kept (critic 8.02), +19,438 new | $51,972 | $29,624 | $22,348 |
| 4 | 187,211 | 1.15 | episode 4: 100% kept (audience 8.75), +24,798 new | $59,908 | $34,147 | $25,760 |
| 5 | 216,621 | 1.16 | episode 5: 100% kept (audience 8.75), +29,410 new | $69,319 | $39,512 | $29,807 |
| 6 | 75,817 | 0.35 | catch-up viewing (tail week 1/2) | $24,261 | $13,829 | $10,432 |
| 7 | 26,536 | 0.35 | catch-up viewing (tail week 2/2) | $8,492 | $4,840 | $3,651 |
| 8 | 0 | 0 | run ended | $0 | $0 | $0 |

**Progression trace**

- Prestige awards: Prestige +50: meters_all_70 (Last Edge).; Prestige +75: audience_7_5 (Last Edge).
- IP fans: {"before":0,"after":11750,"delta":11750}
- Star career: {"fameDelta":10.02,"relDelta":0.75,"grow":0,"level":6,"reasons":"worked together (+); project boosted their career (+)"}
- Distributor trust: XYZ Network earned back 70% of its $182,000 advance on Last Edge (step 0.21)
- Rule labels: LOCKED = causal chain, accounting, fallback/no-campaign, thresholds 4.0/9.0, IP fan inheritance. WORKING ASSUMPTION = all formulas' shapes and numbers.

### Last Edge: Season 2 — Action + Spies (season)

Released week 160 (year 3.1) · Distributor: Meridian Global · Star: Alex Sato (L10, Fame 100) · IP: Last Edge
Format: **tv season 2**, 5 episodes (one per week) · 294,729 distinct viewers, 1,264,946 viewer-episodes · renewal: average 8.36 ≥ 4.0 → renewable
TV: show-age fatigue 1.0% (base 1.2%, quality slows by 19%) · twist none · hiatus 8 weeks since the last season aired → anticipation ×1 · announcement anticipation used 0.19

**Financial waterfall** [LOCKED rules; amounts provisional]

| Item | Amount |
|---|---:|
| Advance received (project reserve, not revenue) | $179,000 |
| Base cost (unavoidable) | −$90,000 |
| Star fee | −$25,722 |
| Marketing campaign | −$8,000 |
| Paid from studio cash (overrun) | $0 |
| **Unused advance kept at completion** | $55,278 |
| Gross from sales (8 weeks) | $404,783 |
| Distributor royalty (49% of weekly gross) | −$198,344 |
| **Studio take** | $206,439 |
| Net for this title (surplus + take − cash overrun; wages are studio-wide, excluded) | $261,717 |

**Quality trace** [scores are computed, never rolled]

Meters (0–100): Plot 85.51 · Writing 86.18 · Filming 85.19 · Editing 78.72
Inputs: staff points {"plot":275.8,"writing":291.34,"filming":250.46,"editing":166.18}, Star filming points 69.96 (Star family fit 100), studio Action level 2 (+6%), era bar x1.12
Base scores: Audience 8.31 / Critic 8.47 · no weak meter
Combo grades: Audience B (x1.06) / Critic B (x1.06) · repetition fatigue x0.99 · critic saturation x0.9
Before expectations (after combo, weakness, fatigue, saturation; pre-clamp): Audience 8.72 / Critic 8 · critic generation 0 (−0.0%, scale) · audience era 0 (−0.0%) · then clamp 0–10 (generation/era 0 = the ones active at game start)
**Final: Audience 8.72 / Critic 8 → avg 8.36**

**Opening & viewership trace** [marketing/Fame/reach affect viewers only]

Awareness inputs: base 0.35, marketing 0.25, studioBuzz 0, starFame 0.29, trend 0.1, ipFans 0.07, announcement 0.19 → awareness 0.71. Reach cap 440,000 → pool 313,918 → opening 94,175.

| Wk | Viewers | Retention | Driver | Gross | Studio | Distributor |
|---:|---:|---:|---|---:|---:|---:|
| 1 | 156,959 | 1 | episode 1 premiere | $50,227 | $25,616 | $24,611 |
| 2 | 196,621 | 1.25 | episode 2: 100% kept (critic 8), +39,662 new | $62,919 | $32,089 | $30,830 |
| 3 | 222,143 | 1.13 | episode 3: 100% kept (critic 8), +25,522 new | $71,086 | $36,254 | $34,832 |
| 4 | 255,235 | 1.15 | episode 4: 100% kept (audience 8.72), +33,092 new | $81,675 | $41,654 | $40,021 |
| 5 | 294,729 | 1.15 | episode 5: 100% kept (audience 8.72), +39,494 new | $94,313 | $48,100 | $46,214 |
| 6 | 103,155 | 0.35 | catch-up viewing (tail week 1/2) | $33,010 | $16,835 | $16,175 |
| 7 | 36,104 | 0.35 | catch-up viewing (tail week 2/2) | $11,553 | $5,892 | $5,661 |
| 8 | 0 | 0 | run ended | $0 | $0 | $0 |

**Progression trace**

- Prestige awards: Prestige +50: meters_all_70 (Last Edge: Season 2).; Prestige +75: audience_7_5 (Last Edge: Season 2).; Prestige +150: ip_viewers_500k (Last Edge: Season 2).
- IP fans: {"before":11395,"after":27240,"delta":15845}
- Star career: {"fameDelta":11.13,"relDelta":0.75,"grow":0,"level":7,"reasons":"worked together (+); project boosted their career (+)"}
- Distributor trust: Meridian Global earned 111% of its advance back on Last Edge: Season 2 with strong reviews (step 0.45)
- Rule labels: LOCKED = causal chain, accounting, fallback/no-campaign, thresholds 4.0/9.0, IP fan inheritance. WORKING ASSUMPTION = all formulas' shapes and numbers.

### Last Edge: Season 3 — Action + Spies (season)

Released week 186 (year 3.6) · Distributor: XYZ Network · Star: Alex Sato (L10, Fame 100) · IP: Last Edge
Format: **tv season 3**, 10 episodes (one per week) · 348,813 distinct viewers, 2,744,172 viewer-episodes · renewal: average 8.71 ≥ 4.0 → renewable
TV: show-age fatigue 3.0% (base 3.6%, quality slows by 18%) · twist none · hiatus 18 weeks since the last season aired → anticipation ×1 · announcement anticipation used 0.13

**Financial waterfall** [LOCKED rules; amounts provisional]

| Item | Amount |
|---|---:|
| Advance received (project reserve, not revenue) | $312,000 |
| Base cost (unavoidable) | −$165,000 |
| Star fee | −$40,266 |
| Marketing campaign | −$8,000 |
| Paid from studio cash (overrun) | $0 |
| **Unused advance kept at completion** | $98,734 |
| Gross from sales (13 weeks) | $878,135 |
| Distributor royalty (43% of weekly gross) | −$377,598 |
| **Studio take** | $500,537 |
| Net for this title (surplus + take − cash overrun; wages are studio-wide, excluded) | $599,271 |

**Quality trace** [scores are computed, never rolled]

Meters (0–100): Plot 86.05 · Writing 86.83 · Filming 85.99 · Editing 79.96
Inputs: staff points {"plot":476.48,"writing":509.35,"filming":449,"editing":296.53}, Star filming points 116.6 (Star family fit 100), studio Action level 2 (+6%), era bar x1.14
Base scores: Audience 8.4 / Critic 8.54 · no weak meter
Combo grades: Audience B (x1.06) / Critic B (x1.06) · repetition fatigue x0.97 · critic saturation x1
Before expectations (after combo, weakness, fatigue, saturation; pre-clamp): Audience 8.64 / Critic 8.78 · critic generation 0 (−0.0%, scale) · audience era 0 (−0.0%) · then clamp 0–10 (generation/era 0 = the ones active at game start)
**Final: Audience 8.64 / Critic 8.78 → avg 8.71**

**Opening & viewership trace** [marketing/Fame/reach affect viewers only]

Awareness inputs: base 0.35, marketing 0.25, studioBuzz 0, starFame 0.35, trend 0, ipFans 0.16, announcement 0.13 → awareness 0.71. Reach cap 376,000 → pool 268,140 → opening 80,442.

| Wk | Viewers | Retention | Driver | Gross | Studio | Distributor |
|---:|---:|---:|---|---:|---:|---:|
| 1 | 134,070 | 1 | episode 1 premiere | $42,902 | $24,454 | $18,448 |
| 2 | 169,399 | 1.26 | episode 2: 100% kept (critic 8.78), +35,329 new | $54,208 | $30,898 | $23,309 |
| 3 | 192,162 | 1.13 | episode 3: 100% kept (critic 8.78), +22,763 new | $61,492 | $35,050 | $26,441 |
| 4 | 220,147 | 1.15 | episode 4: 100% kept (audience 8.64), +27,985 new | $70,447 | $40,155 | $30,292 |
| 5 | 253,481 | 1.15 | episode 5: 100% kept (audience 8.64), +33,334 new | $81,114 | $46,235 | $34,879 |
| 6 | 286,163 | 1.13 | episode 6: 100% kept (audience 8.64), +32,682 new | $91,572 | $52,196 | $39,376 |
| 7 | 309,256 | 1.08 | episode 7: 100% kept (audience 8.64), +23,093 new | $98,962 | $56,408 | $42,554 |
| 8 | 326,538 | 1.06 | episode 8: 100% kept (audience 8.64), +17,282 new | $104,492 | $59,561 | $44,932 |
| 9 | 339,328 | 1.04 | episode 9: 100% kept (audience 8.64), +12,790 new | $108,585 | $61,893 | $46,692 |
| 10 | 348,813 | 1.03 | episode 10: 100% kept (audience 8.64), +9,485 new | $111,620 | $63,623 | $47,997 |
| 11 | 122,085 | 0.35 | catch-up viewing (tail week 1/2) | $39,067 | $22,268 | $16,799 |
| 12 | 42,730 | 0.35 | catch-up viewing (tail week 2/2) | $13,674 | $7,794 | $5,880 |
| 13 | 0 | 0 | run ended | $0 | $0 | $0 |

**Progression trace**

- Prestige awards: Prestige +50: meters_all_70 (Last Edge: Season 3).; Prestige +75: audience_7_5 (Last Edge: Season 3).; Prestige +85: critic_8_5 (Last Edge: Season 3).; Prestige +100: ip_gross_1m (Last Edge: Season 3).
- IP fans: {"before":25662,"after":46368,"delta":20706}
- Star career: {"fameDelta":12.97,"relDelta":0.75,"grow":0,"level":7,"reasons":"worked together (+); project boosted their career (+)"}
- Distributor trust: XYZ Network earned 121% of its advance back on Last Edge: Season 3 with strong reviews (step 0.53)
- Rule labels: LOCKED = causal chain, accounting, fallback/no-campaign, thresholds 4.0/9.0, IP fan inheritance. WORKING ASSUMPTION = all formulas' shapes and numbers.

### Last Edge: Season 4 — Action + Spies (season)

Released week 212 (year 4.1) · Distributor: Meridian Global · Star: Alex Sato (L10, Fame 100) · IP: Last Edge
Format: **tv season 4**, 10 episodes (one per week) · 413,061 distinct viewers, 3,341,215 viewer-episodes · renewal: average 8.83 ≥ 4.0 → renewable
TV: show-age fatigue 5.4% (base 7.0%, quality slows by 23%) · twist none · hiatus 13 weeks since the last season aired → anticipation ×1 · announcement anticipation used 0.13

**Financial waterfall** [LOCKED rules; amounts provisional]

| Item | Amount |
|---|---:|
| Advance received (project reserve, not revenue) | $332,000 |
| Base cost (unavoidable) | −$165,000 |
| Star fee | −$39,225 |
| Marketing campaign | −$8,000 |
| Paid from studio cash (overrun) | $0 |
| **Unused advance kept at completion** | $119,775 |
| Gross from sales (13 weeks) | $1,069,189 |
| Distributor royalty (48% of weekly gross) | −$513,211 |
| **Studio take** | $555,978 |
| Net for this title (surplus + take − cash overrun; wages are studio-wide, excluded) | $675,753 |

**Quality trace** [scores are computed, never rolled]

Meters (0–100): Plot 88.57 · Writing 89.72 · Filming 88.21 · Editing 84.13
Inputs: staff points {"plot":609.22,"writing":686.03,"filming":581.6,"editing":400.76}, Star filming points 119.9 (Star family fit 100), studio Action level 3 (+9%), era bar x1.16
Base scores: Audience 8.71 / Critic 8.83 · no weak meter
Combo grades: Audience B (x1.06) / Critic B (x1.06) · repetition fatigue x0.95 · critic saturation x1
Before expectations (after combo, weakness, fatigue, saturation; pre-clamp): Audience 8.77 / Critic 8.89 · critic generation 0 (−0.0%, scale) · audience era 0 (−0.0%) · then clamp 0–10 (generation/era 0 = the ones active at game start)
**Final: Audience 8.77 / Critic 8.89 → avg 8.83**

**Opening & viewership trace** [marketing/Fame/reach affect viewers only]

Awareness inputs: base 0.35, marketing 0.25, studioBuzz 0, starFame 0.43, trend 0, ipFans 0.28, announcement 0.13 → awareness 0.76. Reach cap 440,000 → pool 336,247 → opening 100,874.

| Wk | Viewers | Retention | Driver | Gross | Studio | Distributor |
|---:|---:|---:|---|---:|---:|---:|
| 1 | 168,124 | 1 | episode 1 premiere | $53,800 | $27,976 | $25,824 |
| 2 | 212,245 | 1.26 | episode 2: 100% kept (critic 8.89), +44,121 new | $67,918 | $35,318 | $32,601 |
| 3 | 240,279 | 1.13 | episode 3: 100% kept (critic 8.89), +28,034 new | $76,889 | $39,982 | $36,907 |
| 4 | 275,749 | 1.15 | episode 4: 100% kept (audience 8.77), +35,470 new | $88,240 | $45,885 | $42,355 |
| 5 | 318,562 | 1.16 | episode 5: 100% kept (audience 8.77), +42,813 new | $101,940 | $53,009 | $48,931 |
| 6 | 350,130 | 1.1 | episode 6: 100% kept (audience 8.77), +31,568 new | $112,042 | $58,262 | $53,780 |
| 7 | 373,504 | 1.07 | episode 7: 100% kept (audience 8.77), +23,374 new | $119,521 | $62,151 | $57,370 |
| 8 | 390,797 | 1.05 | episode 8: 100% kept (audience 8.77), +17,293 new | $125,055 | $65,029 | $60,026 |
| 9 | 403,593 | 1.03 | episode 9: 100% kept (audience 8.77), +12,796 new | $129,150 | $67,158 | $61,992 |
| 10 | 413,061 | 1.02 | episode 10: 100% kept (audience 8.77), +9,468 new | $132,180 | $68,733 | $63,446 |
| 11 | 144,571 | 0.35 | catch-up viewing (tail week 1/2) | $46,263 | $24,057 | $22,206 |
| 12 | 50,600 | 0.35 | catch-up viewing (tail week 2/2) | $16,192 | $8,420 | $7,772 |
| 13 | 0 | 0 | run ended | $0 | $0 | $0 |

**Progression trace**

- Prestige awards: Prestige +50: meters_all_70 (Last Edge: Season 4).; Prestige +75: audience_7_5 (Last Edge: Season 4).; Prestige +85: critic_8_5 (Last Edge: Season 4).
- IP fans: {"before":44106,"after":69418,"delta":25312}
- Star career: {"fameDelta":14.05,"relDelta":0.75,"grow":0,"level":8,"reasons":"worked together (+); project boosted their career (+)"}
- Distributor trust: Meridian Global earned 155% of its advance back on Last Edge: Season 4 with strong reviews (step 0.73)
- Rule labels: LOCKED = causal chain, accounting, fallback/no-campaign, thresholds 4.0/9.0, IP fan inheritance. WORKING ASSUMPTION = all formulas' shapes and numbers.

### Last Edge: Season 5 — Action + Spies (season)

Released week 238 (year 4.6) · Distributor: Orbit Releasing · Star: Alex Sato (L10, Fame 100) · IP: Last Edge
Format: **tv season 5**, 10 episodes (one per week) · 283,016 distinct viewers, 2,335,243 viewer-episodes · renewal: average 8.61 ≥ 4.0 → renewable
TV: show-age fatigue 8.3% (base 11.0%, quality slows by 24%) · twist none · hiatus 13 weeks since the last season aired → anticipation ×1 · announcement anticipation used 0.13

**Financial waterfall** [LOCKED rules; amounts provisional]

| Item | Amount |
|---|---:|
| Advance received (project reserve, not revenue) | $224,000 |
| Base cost (unavoidable) | −$165,000 |
| Star fee | −$47,672 |
| Marketing campaign | −$8,000 |
| Paid from studio cash (overrun) | $0 |
| **Unused advance kept at completion** | $3,328 |
| Gross from sales (13 weeks) | $747,278 |
| Distributor royalty (34% of weekly gross) | −$254,074 |
| **Studio take** | $493,203 |
| Net for this title (surplus + take − cash overrun; wages are studio-wide, excluded) | $496,532 |

**Quality trace** [scores are computed, never rolled]

Meters (0–100): Plot 89.1 · Writing 90.22 · Filming 88.7 · Editing 84.83
Inputs: staff points {"plot":653.72,"writing":738.11,"filming":628.71,"editing":430.16}, Star filming points 119.9 (Star family fit 100), studio Action level 3 (+9%), era bar x1.18
Base scores: Audience 8.76 / Critic 8.88 · no weak meter
Combo grades: Audience B (x1.06) / Critic B (x1.06) · repetition fatigue x0.92 · critic saturation x1
Before expectations (after combo, weakness, fatigue, saturation; pre-clamp): Audience 8.55 / Critic 8.66 · critic generation 0 (−0.0%, scale) · audience era 0 (−0.0%) · then clamp 0–10 (generation/era 0 = the ones active at game start)
**Final: Audience 8.55 / Critic 8.66 → avg 8.61**

**Opening & viewership trace** [marketing/Fame/reach affect viewers only]

Awareness inputs: base 0.35, marketing 0.25, studioBuzz 0, starFame 0.52, trend 0, ipFans 0.42, announcement 0.13 → awareness 0.81. Reach cap 300,000 → pool 243,502 → opening 73,051.

| Wk | Viewers | Retention | Driver | Gross | Studio | Distributor |
|---:|---:|---:|---|---:|---:|---:|
| 1 | 121,751 | 1 | episode 1 premiere | $38,960 | $25,714 | $13,247 |
| 2 | 153,092 | 1.26 | episode 2: 100% kept (critic 8.66), +31,341 new | $48,989 | $32,333 | $16,656 |
| 3 | 172,792 | 1.13 | episode 3: 100% kept (critic 8.66), +19,700 new | $55,293 | $36,494 | $18,800 |
| 4 | 197,170 | 1.14 | episode 4: 100% kept (audience 8.55), +24,378 new | $63,094 | $41,642 | $21,452 |
| 5 | 224,860 | 1.14 | episode 5: 100% kept (audience 8.55), +27,690 new | $71,955 | $47,490 | $24,465 |
| 6 | 244,048 | 1.09 | episode 6: 100% kept (audience 8.55), +19,188 new | $78,095 | $51,543 | $26,552 |
| 7 | 258,488 | 1.06 | episode 7: 100% kept (audience 8.55), +14,440 new | $82,716 | $54,593 | $28,123 |
| 8 | 269,180 | 1.04 | episode 8: 100% kept (audience 8.55), +10,692 new | $86,138 | $56,851 | $29,287 |
| 9 | 277,121 | 1.03 | episode 9: 100% kept (audience 8.55), +7,941 new | $88,679 | $58,528 | $30,151 |
| 10 | 283,016 | 1.02 | episode 10: 100% kept (audience 8.55), +5,895 new | $90,565 | $59,773 | $30,792 |
| 11 | 99,056 | 0.35 | catch-up viewing (tail week 1/2) | $31,698 | $20,921 | $10,777 |
| 12 | 34,669 | 0.35 | catch-up viewing (tail week 2/2) | $11,094 | $7,322 | $3,772 |
| 13 | 0 | 0 | run ended | $0 | $0 | $0 |

**Progression trace**

- Prestige awards: Prestige +50: meters_all_70 (Last Edge: Season 5).; Prestige +75: audience_7_5 (Last Edge: Season 5).; Prestige +85: critic_8_5 (Last Edge: Season 5).
- IP fans: {"before":66032,"after":82379,"delta":16347}
- Star career: {"fameDelta":11.8,"relDelta":0.75,"grow":0,"level":8,"reasons":"worked together (+); project boosted their career (+)"}
- Distributor trust: Orbit Releasing earned 113% of its advance back on Last Edge: Season 5 with strong reviews (step 0.48)
- Rule labels: LOCKED = causal chain, accounting, fallback/no-campaign, thresholds 4.0/9.0, IP fan inheritance. WORKING ASSUMPTION = all formulas' shapes and numbers.

### Last Edge: Season 6 — Action + Spies (season)

Released week 264 (year 5.1) · Distributor: Meridian Global · Star: Alex Sato (L10, Fame 100) · IP: Last Edge
Format: **tv season 6**, 10 episodes (one per week) · 416,438 distinct viewers, 3,499,416 viewer-episodes · renewal: average 8.28 ≥ 4.0 → renewable
TV: show-age fatigue 12.4% (base 15.8%, quality slows by 22%) · twist none · hiatus 13 weeks since the last season aired → anticipation ×1 · announcement anticipation used 0.13

**Financial waterfall** [LOCKED rules; amounts provisional]

| Item | Amount |
|---|---:|
| Advance received (project reserve, not revenue) | $395,000 |
| Base cost (unavoidable) | −$165,000 |
| Star fee | −$58,559 |
| Marketing campaign | −$8,000 |
| Paid from studio cash (overrun) | $0 |
| **Unused advance kept at completion** | $163,441 |
| Gross from sales (13 weeks) | $1,119,813 |
| Distributor royalty (46% of weekly gross) | −$515,114 |
| **Studio take** | $604,699 |
| Net for this title (surplus + take − cash overrun; wages are studio-wide, excluded) | $768,140 |

**Quality trace** [scores are computed, never rolled]

Meters (0–100): Plot 89.65 · Writing 90.71 · Filming 89.08 · Editing 85.34
Inputs: staff points {"plot":704.4,"writing":794.4,"filming":671.39,"editing":455.33}, Star filming points 119.9 (Star family fit 100), studio Action level 3 (+9%), era bar x1.2
Base scores: Audience 8.81 / Critic 8.93 · no weak meter
Combo grades: Audience B (x1.06) / Critic B (x1.06) · repetition fatigue x0.88 · critic saturation x1
Before expectations (after combo, weakness, fatigue, saturation; pre-clamp): Audience 8.22 / Critic 8.33 · critic generation 0 (−0.0%, scale) · audience era 0 (−0.0%) · then clamp 0–10 (generation/era 0 = the ones active at game start)
**Final: Audience 8.22 / Critic 8.33 → avg 8.28**

**Opening & viewership trace** [marketing/Fame/reach affect viewers only]

Awareness inputs: base 0.35, marketing 0.25, studioBuzz 0, starFame 0.59, trend 0.15, ipFans 0.5, announcement 0.13 → awareness 0.86. Reach cap 440,000 → pool 378,600 → opening 113,580.

| Wk | Viewers | Retention | Driver | Gross | Studio | Distributor |
|---:|---:|---:|---|---:|---:|---:|
| 1 | 189,300 | 1 | episode 1 premiere | $60,576 | $32,711 | $27,865 |
| 2 | 236,939 | 1.25 | episode 2: 100% kept (critic 8.33), +47,639 new | $75,820 | $40,943 | $34,877 |
| 3 | 266,642 | 1.13 | episode 3: 100% kept (critic 8.33), +29,703 new | $85,325 | $46,076 | $39,250 |
| 4 | 301,886 | 1.13 | episode 4: 100% kept (audience 8.22), +35,244 new | $96,604 | $52,166 | $44,438 |
| 5 | 338,221 | 1.12 | episode 5: 100% kept (audience 8.22), +36,335 new | $108,231 | $58,445 | $49,786 |
| 6 | 363,894 | 1.08 | episode 6: 100% kept (audience 8.22), +25,673 new | $116,446 | $62,881 | $53,565 |
| 7 | 383,251 | 1.05 | episode 7: 100% kept (audience 8.22), +19,357 new | $122,640 | $66,226 | $56,415 |
| 8 | 397,662 | 1.04 | episode 8: 100% kept (audience 8.22), +14,411 new | $127,252 | $68,716 | $58,536 |
| 9 | 408,416 | 1.03 | episode 9: 100% kept (audience 8.22), +10,754 new | $130,693 | $70,574 | $60,119 |
| 10 | 416,438 | 1.02 | episode 10: 100% kept (audience 8.22), +8,022 new | $133,260 | $71,960 | $61,300 |
| 11 | 145,753 | 0.35 | catch-up viewing (tail week 1/2) | $46,641 | $25,186 | $21,455 |
| 12 | 51,014 | 0.35 | catch-up viewing (tail week 2/2) | $16,324 | $8,815 | $7,509 |
| 13 | 0 | 0 | run ended | $0 | $0 | $0 |

**Progression trace**

- Prestige awards: Prestige +50: meters_all_70 (Last Edge: Season 6).; Prestige +75: audience_7_5 (Last Edge: Season 6).
- IP fans: {"before":78357,"after":100212,"delta":21855}
- Star career: {"fameDelta":12.06,"relDelta":0.75,"grow":0,"level":9,"reasons":"worked together (+); project boosted their career (+)"}
- Distributor trust: Meridian Global earned 130% of its advance back on Last Edge: Season 6 with strong reviews (step 0.55)
- Rule labels: LOCKED = causal chain, accounting, fallback/no-campaign, thresholds 4.0/9.0, IP fan inheritance. WORKING ASSUMPTION = all formulas' shapes and numbers.

### Last Edge: Season 7 — Action + Spies (season)

Released week 290 (year 5.6) · Distributor: Meridian Global · Star: Alex Sato (L10, Fame 100) · IP: Last Edge
Format: **tv season 7**, 10 episodes (one per week) · 417,214 distinct viewers, 3,558,562 viewer-episodes · renewal: average 7.84 ≥ 4.0 → renewable
TV: show-age fatigue 17.5% (base 21.1%, quality slows by 17%) · twist none · hiatus 13 weeks since the last season aired → anticipation ×1 · announcement anticipation used 0.13

**Financial waterfall** [LOCKED rules; amounts provisional]

| Item | Amount |
|---|---:|
| Advance received (project reserve, not revenue) | $454,000 |
| Base cost (unavoidable) | −$165,000 |
| Star fee | −$69,033 |
| Marketing campaign | −$8,000 |
| Paid from studio cash (overrun) | $0 |
| **Unused advance kept at completion** | $211,967 |
| Gross from sales (13 weeks) | $1,138,740 |
| Distributor royalty (46% of weekly gross) | −$523,820 |
| **Studio take** | $614,920 |
| Net for this title (surplus + take − cash overrun; wages are studio-wide, excluded) | $826,887 |

**Quality trace** [scores are computed, never rolled]

Meters (0–100): Plot 90.05 · Writing 91.08 · Filming 89.37 · Editing 85.88
Inputs: staff points {"plot":748.05,"writing":843.94,"filming":709.15,"editing":483.48}, Star filming points 119.9 (Star family fit 100), studio Action level 3 (+9%), era bar x1.22
Base scores: Audience 8.85 / Critic 8.97 · no weak meter
Combo grades: Audience B (x1.06) / Critic B (x1.06) · repetition fatigue x0.83 · critic saturation x1
Before expectations (after combo, weakness, fatigue, saturation; pre-clamp): Audience 7.79 / Critic 7.89 · critic generation 0 (−0.0%, scale) · audience era 0 (−0.0%) · then clamp 0–10 (generation/era 0 = the ones active at game start)
**Final: Audience 7.79 / Critic 7.89 → avg 7.84**

**Opening & viewership trace** [marketing/Fame/reach affect viewers only]

Awareness inputs: base 0.35, marketing 0.25, studioBuzz 0, starFame 0.6, trend 0.4, ipFans 0.61, announcement 0.13 → awareness 0.9. Reach cap 440,000 → pool 397,652 → opening 119,296.

| Wk | Viewers | Retention | Driver | Gross | Studio | Distributor |
|---:|---:|---:|---|---:|---:|---:|
| 1 | 198,826 | 1 | episode 1 premiere | $63,624 | $34,357 | $29,267 |
| 2 | 247,602 | 1.25 | episode 2: 100% kept (critic 7.89), +48,776 new | $79,233 | $42,786 | $36,447 |
| 3 | 277,900 | 1.12 | episode 3: 100% kept (critic 7.89), +30,298 new | $88,928 | $48,021 | $40,907 |
| 4 | 311,666 | 1.12 | episode 4: 100% kept (audience 7.79), +33,766 new | $99,733 | $53,856 | $45,877 |
| 5 | 344,603 | 1.11 | episode 5: 100% kept (audience 7.79), +32,937 new | $110,273 | $59,547 | $50,726 |
| 6 | 368,246 | 1.07 | episode 6: 100% kept (audience 7.79), +23,643 new | $117,839 | $63,633 | $54,206 |
| 7 | 386,151 | 1.05 | episode 7: 100% kept (audience 7.79), +17,905 new | $123,568 | $66,727 | $56,841 |
| 8 | 399,571 | 1.03 | episode 8: 100% kept (audience 7.79), +13,420 new | $127,863 | $69,046 | $58,817 |
| 9 | 409,649 | 1.03 | episode 9: 100% kept (audience 7.79), +10,078 new | $131,088 | $70,787 | $60,300 |
| 10 | 417,214 | 1.02 | episode 10: 100% kept (audience 7.79), +7,565 new | $133,508 | $72,095 | $61,414 |
| 11 | 146,025 | 0.35 | catch-up viewing (tail week 1/2) | $46,728 | $25,233 | $21,495 |
| 12 | 51,109 | 0.35 | catch-up viewing (tail week 2/2) | $16,355 | $8,832 | $7,523 |
| 13 | 0 | 0 | run ended | $0 | $0 | $0 |

**Progression trace**

- Prestige awards: Prestige +50: meters_all_70 (Last Edge: Season 7).; Prestige +75: audience_7_5 (Last Edge: Season 7).; Prestige +150: ip_gross_5m (Last Edge: Season 7).
- IP fans: {"before":95319,"after":114277,"delta":18958}
- Star career: {"fameDelta":10.44,"relDelta":0.25,"grow":0,"level":9,"reasons":"worked together (+)"}
- Distributor trust: Meridian Global earned 115% of its advance back on Last Edge: Season 7 with strong reviews (step 0.4)
- Rule labels: LOCKED = causal chain, accounting, fallback/no-campaign, thresholds 4.0/9.0, IP fan inheritance. WORKING ASSUMPTION = all formulas' shapes and numbers.

### Last Edge: Season 8 — Action + Spies (season)

Released week 316 (year 6.1) · Distributor: Meridian Global · Star: Alex Sato (L10, Fame 100) · IP: Last Edge
Format: **tv season 8**, 10 episodes (one per week) · 414,974 distinct viewers, 3,535,447 viewer-episodes · renewal: average 7.23 ≥ 4.0 → renewable
TV: show-age fatigue 24.0% (base 27.0%, quality slows by 11%) · twist none · hiatus 13 weeks since the last season aired → anticipation ×1 · announcement anticipation used 0.13

**Financial waterfall** [LOCKED rules; amounts provisional]

| Item | Amount |
|---|---:|
| Advance received (project reserve, not revenue) | $504,000 |
| Base cost (unavoidable) | −$165,000 |
| Star fee | −$69,952 |
| Marketing campaign | −$8,000 |
| Paid from studio cash (overrun) | $0 |
| **Unused advance kept at completion** | $261,048 |
| Gross from sales (13 weeks) | $1,131,343 |
| Distributor royalty (44% of weekly gross) | −$497,791 |
| **Studio take** | $633,552 |
| Net for this title (surplus + take − cash overrun; wages are studio-wide, excluded) | $894,600 |

**Quality trace** [scores are computed, never rolled]

Meters (0–100): Plot 90.62 · Writing 91.6 · Filming 89.97 · Editing 86.62
Inputs: staff points {"plot":812.05,"writing":916.64,"filming":775.27,"editing":523.11}, Star filming points 123.2 (Star family fit 100), studio Action level 4 (+12%), era bar x1.24
Base scores: Audience 8.91 / Critic 9.03 · no weak meter
Combo grades: Audience B (x1.06) / Critic B (x1.06) · repetition fatigue x0.76 · critic saturation x1
Before expectations (after combo, weakness, fatigue, saturation; pre-clamp): Audience 7.18 / Critic 7.27 · critic generation 0 (−0.0%, scale) · audience era 0 (−0.0%) · then clamp 0–10 (generation/era 0 = the ones active at game start)
**Final: Audience 7.18 / Critic 7.27 → avg 7.23**

**Opening & viewership trace** [marketing/Fame/reach affect viewers only]

Awareness inputs: base 0.35, marketing 0.25, studioBuzz 0, starFame 0.6, trend 0.4, ipFans 0.7, announcement 0.13 → awareness 0.91. Reach cap 440,000 → pool 401,131 → opening 120,339.

| Wk | Viewers | Retention | Driver | Gross | Studio | Distributor |
|---:|---:|---:|---|---:|---:|---:|
| 1 | 200,566 | 1 | episode 1 premiere | $64,181 | $35,941 | $28,240 |
| 2 | 248,318 | 1.24 | episode 2: 100% kept (critic 7.27), +47,752 new | $79,462 | $44,499 | $34,963 |
| 3 | 278,123 | 1.12 | episode 3: 100% kept (critic 7.27), +29,805 new | $88,999 | $49,840 | $39,160 |
| 4 | 308,098 | 1.11 | episode 4: 100% kept (audience 7.18), +29,975 new | $98,591 | $55,211 | $43,380 |
| 5 | 339,548 | 1.1 | episode 5: 100% kept (audience 7.18), +31,450 new | $108,655 | $60,847 | $47,808 |
| 6 | 363,989 | 1.07 | episode 6: 100% kept (audience 7.18), +24,441 new | $116,476 | $65,227 | $51,250 |
| 7 | 382,413 | 1.05 | episode 7: 100% kept (audience 7.18), +18,424 new | $122,372 | $68,528 | $53,844 |
| 8 | 396,382 | 1.04 | episode 8: 100% kept (audience 7.18), +13,969 new | $126,842 | $71,032 | $55,811 |
| 9 | 406,961 | 1.03 | episode 9: 100% kept (audience 7.18), +10,579 new | $130,228 | $72,927 | $57,300 |
| 10 | 414,974 | 1.02 | episode 10: 100% kept (audience 7.18), +8,013 new | $132,792 | $74,363 | $58,428 |
| 11 | 145,241 | 0.35 | catch-up viewing (tail week 1/2) | $46,477 | $26,027 | $20,450 |
| 12 | 50,834 | 0.35 | catch-up viewing (tail week 2/2) | $16,267 | $9,109 | $7,157 |
| 13 | 0 | 0 | run ended | $0 | $0 | $0 |

**Progression trace**

- Prestige awards: Prestige +50: meters_all_70 (Last Edge: Season 8).
- IP fans: {"before":108699,"after":123505,"delta":14806}
- Star career: {"fameDelta":8.19,"relDelta":0.25,"grow":0,"level":10,"reasons":"worked together (+)"}
- Distributor trust: Meridian Global earned back 99% of its $504,000 advance on Last Edge: Season 8 (step 0.22)
- Rule labels: LOCKED = causal chain, accounting, fallback/no-campaign, thresholds 4.0/9.0, IP fan inheritance. WORKING ASSUMPTION = all formulas' shapes and numbers.

### Last Edge: Season 9 — Action + Spies (season)

Released week 352 (year 6.8) · Distributor: Meridian Global · Star: Alex Sato (L10, Fame 100) · IP: Last Edge
Format: **tv season 9**, 15 episodes (one per week) · 429,373 distinct viewers, 4,264,559 viewer-episodes · renewal: average 6.16 ≥ 4.0 → renewable
TV: show-age fatigue 32.4% (base 33.4%, quality slows by 3%) · twist none · hiatus 23 weeks since the last season aired → anticipation ×1 · announcement anticipation used 0.08

**Financial waterfall** [LOCKED rules; amounts provisional]

| Item | Amount |
|---|---:|
| Advance received (project reserve, not revenue) | $727,000 |
| Base cost (unavoidable) | −$240,000 |
| Star fee | −$69,777 |
| Marketing campaign | −$8,000 |
| Paid from studio cash (overrun) | $0 |
| **Unused advance kept at completion** | $409,223 |
| Gross from sales (18 weeks) | $1,364,659 |
| Distributor royalty (43% of weekly gross) | −$586,803 |
| **Studio take** | $777,856 |
| Net for this title (surplus + take − cash overrun; wages are studio-wide, excluded) | $1,187,078 |

**Quality trace** [scores are computed, never rolled]

Meters (0–100): Plot 90.71 · Writing 91.7 · Filming 90.2 · Editing 86.98
Inputs: staff points {"plot":1161.04,"writing":1314.23,"filming":1133.23,"editing":764.04}, Star filming points 172.48 (Star family fit 100), studio Action level 4 (+12%), era bar x1.27
Base scores: Audience 8.94 / Critic 9.04 · no weak meter
Combo grades: Audience B (x1.06) / Critic B (x1.06) · repetition fatigue x0.68 · critic saturation x0.9
Before expectations (after combo, weakness, fatigue, saturation; pre-clamp): Audience 6.44 / Critic 5.87 · critic generation 0 (−0.0%, scale) · audience era 0 (−0.0%) · then clamp 0–10 (generation/era 0 = the ones active at game start)
**Final: Audience 6.44 / Critic 5.87 → avg 6.16**

**Opening & viewership trace** [marketing/Fame/reach affect viewers only]

Awareness inputs: base 0.35, marketing 0.25, studioBuzz 0, starFame 0.6, trend 0.1, ipFans 0.74, announcement 0.08 → awareness 0.88. Reach cap 440,000 → pool 387,105 → opening 116,132.

| Wk | Viewers | Retention | Driver | Gross | Studio | Distributor |
|---:|---:|---:|---|---:|---:|---:|
| 1 | 193,553 | 1 | episode 1 premiere | $61,937 | $35,304 | $26,633 |
| 2 | 223,493 | 1.15 | episode 2: 93% kept (critic 5.87), +43,063 new | $71,518 | $40,765 | $30,753 |
| 3 | 235,616 | 1.05 | episode 3: 93% kept (critic 5.87), +27,276 new | $75,397 | $42,976 | $32,421 |
| 4 | 251,669 | 1.07 | episode 4: 97% kept (audience 6.44), +23,970 new | $80,534 | $45,904 | $34,630 |
| 5 | 264,925 | 1.05 | episode 5: 97% kept (audience 6.44), +21,712 new | $84,776 | $48,322 | $36,454 |
| 6 | 276,690 | 1.04 | episode 6: 97% kept (audience 6.44), +20,666 new | $88,541 | $50,468 | $38,073 |
| 7 | 287,726 | 1.04 | episode 7: 97% kept (audience 6.44), +20,333 new | $92,072 | $52,481 | $39,591 |
| 8 | 298,482 | 1.04 | episode 8: 97% kept (audience 6.44), +20,424 new | $95,514 | $54,443 | $41,071 |
| 9 | 304,703 | 1.02 | episode 9: 97% kept (audience 6.44), +16,250 new | $97,505 | $55,578 | $41,927 |
| 10 | 306,819 | 1.01 | episode 10: 97% kept (audience 6.44), +12,354 new | $98,182 | $55,964 | $42,218 |
| 11 | 305,981 | 1 | episode 11: 97% kept (audience 6.44), +9,471 new | $97,914 | $55,811 | $42,103 |
| 12 | 302,949 | 0.99 | episode 12: 97% kept (audience 6.44), +7,249 new | $96,944 | $55,258 | $41,686 |
| 13 | 298,320 | 0.98 | episode 13: 97% kept (audience 6.44), +5,550 new | $95,462 | $54,414 | $41,049 |
| 14 | 292,545 | 0.98 | episode 14: 97% kept (audience 6.44), +4,249 new | $93,614 | $53,360 | $40,254 |
| 15 | 285,968 | 0.98 | episode 15: 97% kept (audience 6.44), +3,253 new | $91,510 | $52,161 | $39,349 |
| 16 | 100,089 | 0.35 | catch-up viewing (tail week 1/2) | $32,028 | $18,256 | $13,772 |
| 17 | 35,031 | 0.35 | catch-up viewing (tail week 2/2) | $11,210 | $6,390 | $4,820 |
| 18 | 0 | 0 | run ended | $0 | $0 | $0 |

**Progression trace**

- Prestige awards: Prestige +50: meters_all_70 (Last Edge: Season 9).
- IP fans: {"before":114132,"after":122101,"delta":7969}
- Star career: {"fameDelta":4.3,"relDelta":0.25,"grow":0,"level":10,"reasons":"worked together (+)"}
- Distributor trust: Meridian Global earned back 81% of its $727,000 advance on Last Edge: Season 9 (step -0.03)
- Rule labels: LOCKED = causal chain, accounting, fallback/no-campaign, thresholds 4.0/9.0, IP fan inheritance. WORKING ASSUMPTION = all formulas' shapes and numbers.

### Last Edge: Season 10 — Action + Spies (season)

Released week 388 (year 7.5) · Distributor: Meridian Global · Star: Alex Sato (L10, Fame 100) · IP: Last Edge
Format: **tv season 10**, 15 episodes (one per week) · 425,789 distinct viewers, 3,973,547 viewer-episodes · renewal: average 6.22 ≥ 4.0 → renewable
TV: show-age fatigue 35.0% (base 35.0%, quality slows by 0%) · twist none · hiatus 18 weeks since the last season aired → anticipation ×1 · announcement anticipation used 0.08

**Financial waterfall** [LOCKED rules; amounts provisional]

| Item | Amount |
|---|---:|
| Advance received (project reserve, not revenue) | $617,000 |
| Base cost (unavoidable) | −$240,000 |
| Star fee | −$69,609 |
| Marketing campaign | −$8,000 |
| Paid from studio cash (overrun) | $0 |
| **Unused advance kept at completion** | $299,391 |
| Gross from sales (18 weeks) | $1,271,535 |
| Distributor royalty (44% of weekly gross) | −$559,475 |
| **Studio take** | $712,060 |
| Net for this title (surplus + take − cash overrun; wages are studio-wide, excluded) | $1,011,451 |

**Quality trace** [scores are computed, never rolled]

Meters (0–100): Plot 91.02 · Writing 91.99 · Filming 90.54 · Editing 87.31
Inputs: staff points {"plot":1232.03,"writing":1394.88,"filming":1215.2,"editing":804.06}, Star filming points 172.48 (Star family fit 100), studio Action level 4 (+12%), era bar x1.3
Base scores: Audience 8.97 / Critic 9.07 · no weak meter
Combo grades: Audience B (x1.06) / Critic B (x1.06) · repetition fatigue x0.65 · critic saturation x1
Before expectations (after combo, weakness, fatigue, saturation; pre-clamp): Audience 6.18 / Critic 6.25 · critic generation 0 (−0.0%, scale) · audience era 0 (−0.0%) · then clamp 0–10 (generation/era 0 = the ones active at game start)
**Final: Audience 6.18 / Critic 6.25 → avg 6.22**

**Opening & viewership trace** [marketing/Fame/reach affect viewers only]

Awareness inputs: base 0.35, marketing 0.25, studioBuzz 0, starFame 0.6, trend 0, ipFans 0.74, announcement 0.08 → awareness 0.87. Reach cap 440,000 → pool 381,465 → opening 114,440.

| Wk | Viewers | Retention | Driver | Gross | Studio | Distributor |
|---:|---:|---:|---|---:|---:|---:|
| 1 | 190,733 | 1 | episode 1 premiere | $61,035 | $34,179 | $26,855 |
| 2 | 225,447 | 1.18 | episode 2: 96% kept (critic 6.25), +43,297 new | $72,143 | $40,400 | $31,743 |
| 3 | 242,672 | 1.08 | episode 3: 96% kept (critic 6.25), +27,370 new | $77,655 | $43,487 | $34,168 |
| 4 | 253,069 | 1.04 | episode 4: 95% kept (audience 6.18), +22,336 new | $80,982 | $45,350 | $35,632 |
| 5 | 260,111 | 1.03 | episode 5: 95% kept (audience 6.18), +19,493 new | $83,236 | $46,612 | $36,624 |
| 6 | 265,185 | 1.02 | episode 6: 95% kept (audience 6.18), +17,871 new | $84,859 | $47,521 | $37,338 |
| 7 | 269,106 | 1.01 | episode 7: 95% kept (audience 6.18), +16,968 new | $86,114 | $48,224 | $37,890 |
| 8 | 272,355 | 1.01 | episode 8: 95% kept (audience 6.18), +16,489 new | $87,154 | $48,806 | $38,348 |
| 9 | 275,216 | 1.01 | episode 9: 95% kept (audience 6.18), +16,261 new | $88,069 | $49,319 | $38,750 |
| 10 | 277,856 | 1.01 | episode 10: 95% kept (audience 6.18), +16,181 new | $88,914 | $49,792 | $39,122 |
| 11 | 276,432 | 0.99 | episode 11: 95% kept (audience 6.18), +12,247 new | $88,458 | $49,537 | $38,922 |
| 12 | 272,271 | 0.98 | episode 12: 95% kept (audience 6.18), +9,439 new | $87,127 | $48,791 | $38,336 |
| 13 | 266,125 | 0.98 | episode 13: 95% kept (audience 6.18), +7,250 new | $85,160 | $47,690 | $37,470 |
| 14 | 258,604 | 0.97 | episode 14: 95% kept (audience 6.18), +5,572 new | $82,753 | $46,342 | $36,411 |
| 15 | 250,163 | 0.97 | episode 15: 95% kept (audience 6.18), +4,282 new | $80,052 | $44,829 | $35,223 |
| 16 | 87,557 | 0.35 | catch-up viewing (tail week 1/2) | $28,018 | $15,690 | $12,328 |
| 17 | 30,645 | 0.35 | catch-up viewing (tail week 2/2) | $9,806 | $5,492 | $4,315 |
| 18 | 0 | 0 | run ended | $0 | $0 | $0 |

**Progression trace**

- Prestige awards: Prestige +50: meters_all_70 (Last Edge: Season 10).
- IP fans: {"before":113926,"after":122237,"delta":8311}
- Star career: {"fameDelta":4.51,"relDelta":0.25,"grow":0,"level":10,"reasons":"worked together (+)"}
- Distributor trust: Meridian Global earned back 91% of its $617,000 advance on Last Edge: Season 10 (step 0.04)
- Rule labels: LOCKED = causal chain, accounting, fallback/no-campaign, thresholds 4.0/9.0, IP fan inheritance. WORKING ASSUMPTION = all formulas' shapes and numbers.

### Last Edge: Season 11 — Action + Spies (season)

Released week 424 (year 8.2) · Distributor: Wolf Pictures · Star: Alex Sato (L10, Fame 100) · IP: Last Edge
Format: **tv season 11**, 15 episodes (one per week) · 257,644 distinct viewers, 2,465,803 viewer-episodes · renewal: average 6.23 ≥ 4.0 → renewable
TV: show-age fatigue 35.0% (base 35.0%, quality slows by 0%) · twist none · hiatus 18 weeks since the last season aired → anticipation ×1 · announcement anticipation used 0.08

**Financial waterfall** [LOCKED rules; amounts provisional]

| Item | Amount |
|---|---:|
| Advance received (project reserve, not revenue) | $506,000 |
| Base cost (unavoidable) | −$240,000 |
| Star fee | −$69,448 |
| Marketing campaign | −$8,000 |
| Paid from studio cash (overrun) | $0 |
| **Unused advance kept at completion** | $188,553 |
| Gross from sales (18 weeks) | $789,057 |
| Distributor royalty (29% of weekly gross) | −$228,827 |
| **Studio take** | $560,230 |
| Net for this title (surplus + take − cash overrun; wages are studio-wide, excluded) | $748,783 |

**Quality trace** [scores are computed, never rolled]

Meters (0–100): Plot 91.21 · Writing 92.15 · Filming 90.61 · Editing 87.5
Inputs: staff points {"plot":1288.7,"writing":1456.18,"filming":1255.17,"editing":835.72}, Star filming points 172.48 (Star family fit 100), studio Action level 4 (+12%), era bar x1.33
Base scores: Audience 8.98 / Critic 9.09 · no weak meter
Combo grades: Audience B (x1.06) / Critic B (x1.06) · repetition fatigue x0.65 · critic saturation x1
Before expectations (after combo, weakness, fatigue, saturation; pre-clamp): Audience 6.19 / Critic 6.26 · critic generation 0 (−0.0%, scale) · audience era 0 (−0.0%) · then clamp 0–10 (generation/era 0 = the ones active at game start)
**Final: Audience 6.19 / Critic 6.26 → avg 6.23**

**Opening & viewership trace** [marketing/Fame/reach affect viewers only]

Awareness inputs: base 0.35, marketing 0.25, studioBuzz 0, starFame 0.6, trend 0.4, ipFans 0.74, announcement 0.08 → awareness 0.91. Reach cap 264,000 → pool 240,477 → opening 72,143.

| Wk | Viewers | Retention | Driver | Gross | Studio | Distributor |
|---:|---:|---:|---|---:|---:|---:|
| 1 | 120,239 | 1 | episode 1 premiere | $38,476 | $27,318 | $11,158 |
| 2 | 142,155 | 1.18 | episode 2: 96% kept (critic 6.26), +27,255 new | $45,490 | $32,298 | $13,192 |
| 3 | 153,019 | 1.08 | episode 3: 96% kept (critic 6.26), +17,176 new | $48,966 | $34,766 | $14,200 |
| 4 | 159,642 | 1.04 | episode 4: 95% kept (audience 6.19), +14,060 new | $51,085 | $36,271 | $14,815 |
| 5 | 164,191 | 1.03 | episode 5: 95% kept (audience 6.19), +12,308 new | $52,541 | $37,304 | $15,237 |
| 6 | 167,525 | 1.02 | episode 6: 95% kept (audience 6.19), +11,314 new | $53,608 | $38,062 | $15,546 |
| 7 | 170,149 | 1.02 | episode 7: 95% kept (audience 6.19), +10,766 new | $54,448 | $38,658 | $15,790 |
| 8 | 172,361 | 1.01 | episode 8: 95% kept (audience 6.19), +10,481 new | $55,156 | $39,160 | $15,995 |
| 9 | 173,529 | 1.01 | episode 9: 95% kept (audience 6.19), +9,545 new | $55,529 | $39,426 | $16,103 |
| 10 | 172,215 | 0.99 | episode 10: 95% kept (audience 6.19), +7,120 new | $55,109 | $39,127 | $15,982 |
| 11 | 169,347 | 0.98 | episode 11: 95% kept (audience 6.19), +5,502 new | $54,191 | $38,476 | $15,715 |
| 12 | 165,340 | 0.98 | episode 12: 95% kept (audience 6.19), +4,223 new | $52,909 | $37,565 | $15,344 |
| 13 | 160,549 | 0.97 | episode 13: 95% kept (audience 6.19), +3,245 new | $51,376 | $36,477 | $14,899 |
| 14 | 155,240 | 0.97 | episode 14: 95% kept (audience 6.19), +2,494 new | $49,677 | $35,271 | $14,406 |
| 15 | 149,611 | 0.96 | episode 15: 95% kept (audience 6.19), +1,916 new | $47,876 | $33,992 | $13,884 |
| 16 | 52,364 | 0.35 | catch-up viewing (tail week 1/2) | $16,756 | $11,897 | $4,859 |
| 17 | 18,327 | 0.35 | catch-up viewing (tail week 2/2) | $5,865 | $4,164 | $1,701 |
| 18 | 0 | 0 | run ended | $0 | $0 | $0 |

**Progression trace**

- Prestige awards: Prestige +50: meters_all_70 (Last Edge: Season 11).
- IP fans: {"before":114053,"after":119123,"delta":5070}
- Star career: {"fameDelta":3.89,"relDelta":0.25,"grow":0,"level":10,"reasons":"worked together (+)"}
- Distributor trust: Wolf Pictures earned back 45% of its $506,000 advance on Last Edge: Season 11 (step -0.23)
- Rule labels: LOCKED = causal chain, accounting, fallback/no-campaign, thresholds 4.0/9.0, IP fan inheritance. WORKING ASSUMPTION = all formulas' shapes and numbers.

### Last Edge: Season 12 — Action + Spies (season)

Released week 460 (year 8.8) · Distributor: XYZ Network · Star: Alex Sato (L10, Fame 100) · IP: Last Edge
Format: **tv season 12**, 15 episodes (one per week) · 364,041 distinct viewers, 3,299,817 viewer-episodes · renewal: average 5.93 ≥ 4.0 → renewable
TV: show-age fatigue 35.0% (base 35.0%, quality slows by 0%) · twist none · hiatus 18 weeks since the last season aired → anticipation ×1 · announcement anticipation used 0.08

**Financial waterfall** [LOCKED rules; amounts provisional]

| Item | Amount |
|---|---:|
| Advance received (project reserve, not revenue) | $580,000 |
| Base cost (unavoidable) | −$240,000 |
| Star fee | −$69,292 |
| Marketing campaign | −$8,000 |
| Paid from studio cash (overrun) | $0 |
| **Unused advance kept at completion** | $262,708 |
| Gross from sales (18 weeks) | $1,055,941 |
| Distributor royalty (40% of weekly gross) | −$422,377 |
| **Studio take** | $633,565 |
| Net for this title (surplus + take − cash overrun; wages are studio-wide, excluded) | $896,272 |

**Quality trace** [scores are computed, never rolled]

Meters (0–100): Plot 91.43 · Writing 92.34 · Filming 90.85 · Editing 87.83
Inputs: staff points {"plot":1351.42,"writing":1527.63,"filming":1328.19,"editing":879.52}, Star filming points 172.48 (Star family fit 100), studio Action level 4 (+12%), era bar x1.35
Base scores: Audience 9.01 / Critic 9.11 · no weak meter
Combo grades: Audience B (x1.06) / Critic B (x1.06) · repetition fatigue x0.65 · critic saturation x0.9
Before expectations (after combo, weakness, fatigue, saturation; pre-clamp): Audience 6.21 / Critic 5.65 · critic generation 0 (−0.0%, scale) · audience era 0 (−0.0%) · then clamp 0–10 (generation/era 0 = the ones active at game start)
**Final: Audience 6.21 / Critic 5.65 → avg 5.93**

**Opening & viewership trace** [marketing/Fame/reach affect viewers only]

Awareness inputs: base 0.35, marketing 0.25, studioBuzz 0, starFame 0.6, trend 0.1, ipFans 0.72, announcement 0.08 → awareness 0.88. Reach cap 376,000 → pool 329,918 → opening 98,975.

| Wk | Viewers | Retention | Driver | Gross | Studio | Distributor |
|---:|---:|---:|---|---:|---:|---:|
| 1 | 164,959 | 1 | episode 1 premiere | $52,787 | $31,672 | $21,115 |
| 2 | 187,883 | 1.14 | episode 2: 92% kept (critic 5.65), +36,286 new | $60,123 | $36,074 | $24,049 |
| 3 | 195,687 | 1.04 | episode 3: 92% kept (critic 5.65), +23,023 new | $62,620 | $37,572 | $25,048 |
| 4 | 205,718 | 1.05 | episode 4: 95% kept (audience 6.21), +19,307 new | $65,830 | $39,498 | $26,332 |
| 5 | 212,646 | 1.03 | episode 5: 95% kept (audience 6.21), +16,679 new | $68,047 | $40,828 | $27,219 |
| 6 | 217,761 | 1.02 | episode 6: 95% kept (audience 6.21), +15,194 new | $69,684 | $41,810 | $27,873 |
| 7 | 221,820 | 1.02 | episode 7: 95% kept (audience 6.21), +14,381 new | $70,982 | $42,589 | $28,393 |
| 8 | 225,270 | 1.02 | episode 8: 95% kept (audience 6.21), +13,964 new | $72,086 | $43,252 | $28,835 |
| 9 | 228,373 | 1.01 | episode 9: 95% kept (audience 6.21), +13,781 new | $73,079 | $43,848 | $29,232 |
| 10 | 231,285 | 1.01 | episode 10: 95% kept (audience 6.21), +13,737 new | $74,011 | $44,407 | $29,604 |
| 11 | 230,656 | 1 | episode 11: 95% kept (audience 6.21), +10,334 new | $73,810 | $44,286 | $29,524 |
| 12 | 227,692 | 0.99 | episode 12: 95% kept (audience 6.21), +7,969 new | $72,861 | $43,717 | $29,145 |
| 13 | 223,016 | 0.98 | episode 13: 95% kept (audience 6.21), +6,117 new | $71,365 | $42,819 | $28,546 |
| 14 | 217,145 | 0.97 | episode 14: 95% kept (audience 6.21), +4,700 new | $69,486 | $41,692 | $27,795 |
| 15 | 210,462 | 0.97 | episode 15: 95% kept (audience 6.21), +3,610 new | $67,348 | $40,409 | $26,939 |
| 16 | 73,662 | 0.35 | catch-up viewing (tail week 1/2) | $23,572 | $14,143 | $9,429 |
| 17 | 25,782 | 0.35 | catch-up viewing (tail week 2/2) | $8,250 | $4,950 | $3,300 |
| 18 | 0 | 0 | run ended | $0 | $0 | $0 |

**Progression trace**

- Prestige awards: Prestige +50: meters_all_70 (Last Edge: Season 12).
- IP fans: {"before":111148,"after":116565,"delta":5417}
- Star career: {"fameDelta":3.29,"relDelta":0.25,"grow":0,"level":10,"reasons":"worked together (+)"}
- Distributor trust: XYZ Network earned back 73% of its $580,000 advance on Last Edge: Season 12 (step -0.11)
- Rule labels: LOCKED = causal chain, accounting, fallback/no-campaign, thresholds 4.0/9.0, IP fan inheritance. WORKING ASSUMPTION = all formulas' shapes and numbers.

### Last Edge: Season 13 — Action + Zombies (season)

Released week 496 (year 9.5) · Distributor: XYZ Network · Star: Alex Sato (L10, Fame 100) · IP: Last Edge
Format: **tv season 13**, 15 episodes (one per week) · 313,414 distinct viewers, 2,437,791 viewer-episodes · renewal: average 5.38 ≥ 4.0 → renewable
TV: show-age fatigue 35.0% (base 35.0%, quality slows by 0%) · twist Zombies → good · hiatus 18 weeks since the last season aired → anticipation ×1 · announcement anticipation used 0.00

**Financial waterfall** [LOCKED rules; amounts provisional]

| Item | Amount |
|---|---:|
| Advance received (project reserve, not revenue) | $544,000 |
| Base cost (unavoidable) | −$240,000 |
| Star fee | −$69,143 |
| Marketing campaign | −$8,000 |
| Paid from studio cash (overrun) | $0 |
| **Unused advance kept at completion** | $226,857 |
| Gross from sales (18 weeks) | $780,093 |
| Distributor royalty (41% of weekly gross) | −$319,838 |
| **Studio take** | $460,255 |
| Net for this title (surplus + take − cash overrun; wages are studio-wide, excluded) | $687,111 |

**Quality trace** [scores are computed, never rolled]

Meters (0–100): Plot 91.78 · Writing 92.65 · Filming 91.2 · Editing 88.32
Inputs: staff points {"plot":1443.42,"writing":1629.35,"filming":1420.11,"editing":940.26}, Star filming points 177.1 (Star family fit 100), studio Action level 5 (+15%), era bar x1.38
Base scores: Audience 9.05 / Critic 9.15 · no weak meter
Combo grades: Audience A (x1.15) / Critic C (x1) · repetition fatigue x0.55 · critic saturation x1
Before expectations (after combo, weakness, fatigue, saturation; pre-clamp): Audience 5.72 / Critic 5.03 · critic generation 0 (−0.0%, scale) · audience era 0 (−0.0%) · then clamp 0–10 (generation/era 0 = the ones active at game start)
**Final: Audience 5.72 / Critic 5.03 → avg 5.38**

**Opening & viewership trace** [marketing/Fame/reach affect viewers only]

Awareness inputs: base 0.35, marketing 0.25, studioBuzz 0, starFame 0.6, trend 0, ipFans 0.7, announcement 0 → awareness 0.85. Reach cap 376,000 → pool 319,971 → opening 95,991.

| Wk | Viewers | Retention | Driver | Gross | Studio | Distributor |
|---:|---:|---:|---|---:|---:|---:|
| 1 | 159,986 | 1 | episode 1 premiere | $51,196 | $30,205 | $20,990 |
| 2 | 175,129 | 1.09 | episode 2: 88% kept (critic 5.03), +34,053 new | $56,041 | $33,064 | $22,977 |
| 3 | 176,134 | 1.01 | episode 3: 88% kept (critic 5.03), +21,705 new | $56,363 | $33,254 | $23,109 |
| 4 | 179,213 | 1.02 | episode 4: 92% kept (audience 5.72), +16,606 new | $57,348 | $33,835 | $23,513 |
| 5 | 178,247 | 0.99 | episode 5: 92% kept (audience 5.72), +12,798 new | $57,039 | $33,653 | $23,386 |
| 6 | 174,946 | 0.98 | episode 6: 92% kept (audience 5.72), +10,388 new | $55,983 | $33,030 | $22,953 |
| 7 | 170,336 | 0.97 | episode 7: 92% kept (audience 5.72), +8,826 new | $54,508 | $32,159 | $22,348 |
| 8 | 165,037 | 0.97 | episode 8: 92% kept (audience 5.72), +7,783 new | $52,812 | $31,159 | $21,653 |
| 9 | 159,418 | 0.97 | episode 9: 92% kept (audience 5.72), +7,056 new | $51,014 | $30,098 | $20,916 |
| 10 | 153,701 | 0.96 | episode 10: 92% kept (audience 5.72), +6,526 new | $49,184 | $29,019 | $20,166 |
| 11 | 148,013 | 0.96 | episode 11: 92% kept (audience 5.72), +6,116 new | $47,364 | $27,945 | $19,419 |
| 12 | 142,431 | 0.96 | episode 12: 92% kept (audience 5.72), +5,785 new | $45,578 | $26,891 | $18,687 |
| 13 | 136,995 | 0.96 | episode 13: 92% kept (audience 5.72), +5,503 new | $43,838 | $25,865 | $17,974 |
| 14 | 131,728 | 0.96 | episode 14: 92% kept (audience 5.72), +5,254 new | $42,153 | $24,870 | $17,283 |
| 15 | 126,640 | 0.96 | episode 15: 92% kept (audience 5.72), +5,029 new | $40,525 | $23,910 | $16,615 |
| 16 | 44,324 | 0.35 | catch-up viewing (tail week 1/2) | $14,184 | $8,368 | $5,815 |
| 17 | 15,513 | 0.35 | catch-up viewing (tail week 2/2) | $4,964 | $2,929 | $2,035 |
| 18 | 0 | 0 | run ended | $0 | $0 | $0 |

**Progression trace**

- Prestige awards: Prestige +50: meters_all_70 (Last Edge: Season 13).
- IP fans: {"before":108761,"after":110667,"delta":1906}
- Star career: {"fameDelta":1.28,"relDelta":0.25,"grow":0,"level":10,"reasons":"worked together (+)"}
- Distributor trust: XYZ Network earned back 59% of its $544,000 advance on Last Edge: Season 13 (step -0.26)
- Rule labels: LOCKED = causal chain, accounting, fallback/no-campaign, thresholds 4.0/9.0, IP fan inheritance. WORKING ASSUMPTION = all formulas' shapes and numbers.

### Last Edge: Season 14 — Action + Spies (season)

Released week 532 (year 10.2) · Distributor: Meridian Global · Star: Alex Sato (L10, Fame 100) · IP: Last Edge
Format: **tv season 14**, 15 episodes (one per week) · 425,253 distinct viewers, 4,032,218 viewer-episodes · renewal: average 6.28 ≥ 4.0 → renewable
TV: show-age fatigue 35.0% (base 35.0%, quality slows by 0%) · twist Spies → good · hiatus 18 weeks since the last season aired → anticipation ×1 · announcement anticipation used 0.00

**Financial waterfall** [LOCKED rules; amounts provisional]

| Item | Amount |
|---|---:|
| Advance received (project reserve, not revenue) | $665,000 |
| Base cost (unavoidable) | −$240,000 |
| Star fee | −$69,000 |
| Marketing campaign | −$8,000 |
| Paid from studio cash (overrun) | $0 |
| **Unused advance kept at completion** | $348,000 |
| Gross from sales (18 weeks) | $1,290,310 |
| Distributor royalty (44% of weekly gross) | −$567,736 |
| **Studio take** | $722,573 |
| Net for this title (surplus + take − cash overrun; wages are studio-wide, excluded) | $1,070,573 |

**Quality trace** [scores are computed, never rolled]

Meters (0–100): Plot 91.95 · Writing 92.79 · Filming 91.32 · Editing 88.55
Inputs: staff points {"plot":1506.5,"writing":1698.22,"filming":1476.56,"editing":980.97}, Star filming points 177.1 (Star family fit 100), studio Action level 5 (+15%), era bar x1.41
Base scores: Audience 9.07 / Critic 9.16 · no weak meter
Combo grades: Audience B (x1.06) / Critic B (x1.06) · repetition fatigue x0.65 · critic saturation x1
Before expectations (after combo, weakness, fatigue, saturation; pre-clamp): Audience 6.25 / Critic 6.31 · critic generation 0 (−0.0%, scale) · audience era 0 (−0.0%) · then clamp 0–10 (generation/era 0 = the ones active at game start)
**Final: Audience 6.25 / Critic 6.31 → avg 6.28**

**Opening & viewership trace** [marketing/Fame/reach affect viewers only]

Awareness inputs: base 0.35, marketing 0.25, studioBuzz 0, starFame 0.6, trend 0, ipFans 0.67, announcement 0 → awareness 0.85. Reach cap 440,000 → pool 372,057 → opening 111,617.

| Wk | Viewers | Retention | Driver | Gross | Studio | Distributor |
|---:|---:|---:|---|---:|---:|---:|
| 1 | 186,029 | 1 | episode 1 premiere | $59,529 | $33,336 | $26,193 |
| 2 | 220,732 | 1.19 | episode 2: 96% kept (critic 6.31), +42,405 new | $70,634 | $39,555 | $31,079 |
| 3 | 238,434 | 1.08 | episode 3: 96% kept (critic 6.31), +26,840 new | $76,299 | $42,727 | $33,572 |
| 4 | 249,935 | 1.05 | episode 4: 96% kept (audience 6.25), +22,231 new | $79,979 | $44,788 | $35,191 |
| 5 | 258,374 | 1.03 | episode 5: 96% kept (audience 6.25), +19,686 new | $82,680 | $46,301 | $36,379 |
| 6 | 265,041 | 1.03 | episode 6: 96% kept (audience 6.25), +18,294 new | $84,813 | $47,495 | $37,318 |
| 7 | 270,693 | 1.02 | episode 7: 96% kept (audience 6.25), +17,579 new | $86,622 | $48,508 | $38,114 |
| 8 | 275,777 | 1.02 | episode 8: 96% kept (audience 6.25), +17,265 new | $88,249 | $49,419 | $38,829 |
| 9 | 280,554 | 1.02 | episode 9: 96% kept (audience 6.25), +17,187 new | $89,777 | $50,275 | $39,502 |
| 10 | 285,178 | 1.02 | episode 10: 96% kept (audience 6.25), +17,249 new | $91,257 | $51,104 | $40,153 |
| 11 | 285,117 | 1 | episode 11: 96% kept (audience 6.25), +12,772 new | $91,237 | $51,093 | $40,144 |
| 12 | 282,159 | 0.99 | episode 12: 96% kept (audience 6.25), +9,872 new | $90,291 | $50,563 | $39,728 |
| 13 | 277,031 | 0.98 | episode 13: 96% kept (audience 6.25), +7,569 new | $88,650 | $49,644 | $39,006 |
| 14 | 270,378 | 0.98 | episode 14: 96% kept (audience 6.25), +5,813 new | $86,521 | $48,452 | $38,069 |
| 15 | 262,673 | 0.97 | episode 15: 96% kept (audience 6.25), +4,462 new | $84,055 | $47,071 | $36,984 |
| 16 | 91,936 | 0.35 | catch-up viewing (tail week 1/2) | $29,420 | $16,475 | $12,945 |
| 17 | 32,177 | 0.35 | catch-up viewing (tail week 2/2) | $10,297 | $5,766 | $4,531 |
| 18 | 0 | 0 | run ended | $0 | $0 | $0 |

**Progression trace**

- Prestige awards: Prestige +50: meters_all_70 (Last Edge: Season 14).
- IP fans: {"before":103258,"after":111967,"delta":8709}
- Star career: {"fameDelta":4.73,"relDelta":0.25,"grow":0,"level":10,"reasons":"worked together (+)"}
- Distributor trust: Meridian Global earned back 85% of its $665,000 advance on Last Edge: Season 14 (step 0.02)
- Rule labels: LOCKED = causal chain, accounting, fallback/no-campaign, thresholds 4.0/9.0, IP fan inheritance. WORKING ASSUMPTION = all formulas' shapes and numbers.

### Last Edge: Season 15 — Action + Spies (season)

Released week 568 (year 10.9) · Distributor: Meridian Global · Star: Alex Sato (L10, Fame 100) · IP: Last Edge
Format: **tv season 15**, 15 episodes (one per week) · 426,369 distinct viewers, 4,072,862 viewer-episodes · renewal: average 6.29 ≥ 4.0 → renewable
TV: show-age fatigue 35.0% (base 35.0%, quality slows by 0%) · twist none · hiatus 18 weeks since the last season aired → anticipation ×1 · announcement anticipation used 0.08

**Financial waterfall** [LOCKED rules; amounts provisional]

| Item | Amount |
|---|---:|
| Advance received (project reserve, not revenue) | $605,000 |
| Base cost (unavoidable) | −$240,000 |
| Star fee | −$68,862 |
| Marketing campaign | −$8,000 |
| Paid from studio cash (overrun) | $0 |
| **Unused advance kept at completion** | $288,138 |
| Gross from sales (18 weeks) | $1,303,316 |
| Distributor royalty (45% of weekly gross) | −$586,492 |
| **Studio take** | $716,824 |
| Net for this title (surplus + take − cash overrun; wages are studio-wide, excluded) | $1,004,962 |

**Quality trace** [scores are computed, never rolled]

Meters (0–100): Plot 92.04 · Writing 92.87 · Filming 91.4 · Editing 88.63
Inputs: staff points {"plot":1554.57,"writing":1751.34,"filming":1527.43,"editing":1008.18}, Star filming points 177.1 (Star family fit 100), studio Action level 5 (+15%), era bar x1.44
Base scores: Audience 9.07 / Critic 9.17 · no weak meter
Combo grades: Audience B (x1.06) / Critic B (x1.06) · repetition fatigue x0.65 · critic saturation x1
Before expectations (after combo, weakness, fatigue, saturation; pre-clamp): Audience 6.25 / Critic 6.32 · critic generation 0 (−0.0%, scale) · audience era 0 (−0.0%) · then clamp 0–10 (generation/era 0 = the ones active at game start)
**Final: Audience 6.25 / Critic 6.32 → avg 6.29**

**Opening & viewership trace** [marketing/Fame/reach affect viewers only]

Awareness inputs: base 0.35, marketing 0.25, studioBuzz 0, starFame 0.6, trend 0, ipFans 0.68, announcement 0.08 → awareness 0.86. Reach cap 440,000 → pool 377,772 → opening 113,332.

| Wk | Viewers | Retention | Driver | Gross | Studio | Distributor |
|---:|---:|---:|---|---:|---:|---:|
| 1 | 188,886 | 1 | episode 1 premiere | $60,444 | $33,244 | $27,200 |
| 2 | 224,229 | 1.19 | episode 2: 96% kept (critic 6.32), +43,050 new | $71,753 | $39,464 | $32,289 |
| 3 | 242,299 | 1.08 | episode 3: 96% kept (critic 6.32), +27,219 new | $77,536 | $42,645 | $34,891 |
| 4 | 253,942 | 1.05 | episode 4: 96% kept (audience 6.25), +22,546 new | $81,261 | $44,694 | $36,568 |
| 5 | 262,491 | 1.03 | episode 5: 96% kept (audience 6.25), +19,976 new | $83,997 | $46,198 | $37,799 |
| 6 | 269,249 | 1.03 | episode 6: 96% kept (audience 6.25), +18,570 new | $86,160 | $47,388 | $38,772 |
| 7 | 274,983 | 1.02 | episode 7: 96% kept (audience 6.25), +17,850 new | $87,995 | $48,397 | $39,598 |
| 8 | 280,142 | 1.02 | episode 8: 96% kept (audience 6.25), +17,533 new | $89,645 | $49,305 | $40,340 |
| 9 | 284,992 | 1.02 | episode 9: 96% kept (audience 6.25), +17,456 new | $91,197 | $50,159 | $41,039 |
| 10 | 288,018 | 1.01 | episode 10: 96% kept (audience 6.25), +15,851 new | $92,166 | $50,691 | $41,475 |
| 11 | 286,874 | 1 | episode 11: 96% kept (audience 6.25), +11,817 new | $91,800 | $50,490 | $41,310 |
| 12 | 283,088 | 0.99 | episode 12: 96% kept (audience 6.25), +9,123 new | $90,588 | $49,823 | $40,765 |
| 13 | 277,345 | 0.98 | episode 13: 96% kept (audience 6.25), +6,996 new | $88,750 | $48,813 | $39,938 |
| 14 | 270,236 | 0.97 | episode 14: 96% kept (audience 6.25), +5,372 new | $86,476 | $47,562 | $38,914 |
| 15 | 262,199 | 0.97 | episode 15: 96% kept (audience 6.25), +4,124 new | $83,904 | $46,147 | $37,757 |
| 16 | 91,770 | 0.35 | catch-up viewing (tail week 1/2) | $29,366 | $16,152 | $13,215 |
| 17 | 32,119 | 0.35 | catch-up viewing (tail week 2/2) | $10,278 | $5,653 | $4,625 |
| 18 | 0 | 0 | run ended | $0 | $0 | $0 |

**Progression trace**

- Prestige awards: Prestige +50: meters_all_70 (Last Edge: Season 15).
- IP fans: {"before":104472,"after":113272,"delta":8800}
- Star career: {"fameDelta":4.77,"relDelta":0.25,"grow":0,"level":10,"reasons":"worked together (+)"}
- Distributor trust: Meridian Global earned back 97% of its $605,000 advance on Last Edge: Season 15 (step 0.09)
- Rule labels: LOCKED = causal chain, accounting, fallback/no-campaign, thresholds 4.0/9.0, IP fan inheritance. WORKING ASSUMPTION = all formulas' shapes and numbers.

### Last Edge: Season 16 — Action + Spies (season)

Released week 604 (year 11.6) · Distributor: XYZ Network · Star: Alex Sato (L10, Fame 100) · IP: Last Edge
Format: **tv season 16**, 15 episodes (one per week) · 364,563 distinct viewers, 3,495,686 viewer-episodes · renewal: average 6.29 ≥ 4.0 → renewable
TV: show-age fatigue 35.0% (base 35.0%, quality slows by 0%) · twist none · hiatus 18 weeks since the last season aired → anticipation ×1 · announcement anticipation used 0.08

**Financial waterfall** [LOCKED rules; amounts provisional]

| Item | Amount |
|---|---:|
| Advance received (project reserve, not revenue) | $512,000 |
| Base cost (unavoidable) | −$240,000 |
| Star fee | −$68,729 |
| Marketing campaign | −$8,000 |
| Paid from studio cash (overrun) | $0 |
| **Unused advance kept at completion** | $195,271 |
| Gross from sales (18 weeks) | $1,118,620 |
| Distributor royalty (42% of weekly gross) | −$469,820 |
| **Studio take** | $648,799 |
| Net for this title (surplus + take − cash overrun; wages are studio-wide, excluded) | $844,070 |

**Quality trace** [scores are computed, never rolled]

Meters (0–100): Plot 92.05 · Writing 92.88 · Filming 91.42 · Editing 88.8
Inputs: staff points {"plot":1588.15,"writing":1787.88,"filming":1565.51,"editing":1045.18}, Star filming points 177.1 (Star family fit 100), studio Action level 5 (+15%), era bar x1.46
Base scores: Audience 9.08 / Critic 9.18 · no weak meter
Combo grades: Audience B (x1.06) / Critic B (x1.06) · repetition fatigue x0.65 · critic saturation x1
Before expectations (after combo, weakness, fatigue, saturation; pre-clamp): Audience 6.26 / Critic 6.32 · critic generation 0 (−0.0%, scale) · audience era 0 (−0.0%) · then clamp 0–10 (generation/era 0 = the ones active at game start)
**Final: Audience 6.26 / Critic 6.32 → avg 6.29**

**Opening & viewership trace** [marketing/Fame/reach affect viewers only]

Awareness inputs: base 0.35, marketing 0.25, studioBuzz 0, starFame 0.6, trend 0, ipFans 0.68, announcement 0.08 → awareness 0.86. Reach cap 376,000 → pool 323,240 → opening 96,972.

| Wk | Viewers | Retention | Driver | Gross | Studio | Distributor |
|---:|---:|---:|---|---:|---:|---:|
| 1 | 161,620 | 1 | episode 1 premiere | $51,718 | $29,997 | $21,722 |
| 2 | 191,860 | 1.19 | episode 2: 96% kept (critic 6.32), +36,834 new | $61,395 | $35,609 | $25,786 |
| 3 | 207,318 | 1.08 | episode 3: 96% kept (critic 6.32), +23,286 new | $66,342 | $38,478 | $27,864 |
| 4 | 217,450 | 1.05 | episode 4: 96% kept (audience 6.26), +19,337 new | $69,584 | $40,359 | $29,225 |
| 5 | 224,960 | 1.03 | episode 5: 96% kept (audience 6.26), +17,165 new | $71,987 | $41,753 | $30,235 |
| 6 | 230,958 | 1.03 | episode 6: 96% kept (audience 6.26), +15,986 new | $73,907 | $42,866 | $31,041 |
| 7 | 236,094 | 1.02 | episode 7: 96% kept (audience 6.26), +15,391 new | $75,550 | $43,819 | $31,731 |
| 8 | 240,750 | 1.02 | episode 8: 96% kept (audience 6.26), +15,139 new | $77,040 | $44,683 | $32,357 |
| 9 | 245,153 | 1.02 | episode 9: 96% kept (audience 6.26), +15,092 new | $78,449 | $45,500 | $32,949 |
| 10 | 247,528 | 1.01 | episode 10: 96% kept (audience 6.26), +13,260 new | $79,209 | $45,941 | $33,268 |
| 11 | 246,476 | 1 | episode 11: 96% kept (audience 6.26), +9,938 new | $78,872 | $45,746 | $33,126 |
| 12 | 243,195 | 0.99 | episode 12: 96% kept (audience 6.26), +7,663 new | $77,822 | $45,137 | $32,685 |
| 13 | 238,274 | 0.98 | episode 13: 96% kept (audience 6.26), +5,877 new | $76,248 | $44,224 | $32,024 |
| 14 | 232,207 | 0.97 | episode 14: 96% kept (audience 6.26), +4,512 new | $74,306 | $43,098 | $31,209 |
| 15 | 225,360 | 0.97 | episode 15: 96% kept (audience 6.26), +3,463 new | $72,115 | $41,827 | $30,288 |
| 16 | 78,876 | 0.35 | catch-up viewing (tail week 1/2) | $25,240 | $14,639 | $10,601 |
| 17 | 27,607 | 0.35 | catch-up viewing (tail week 2/2) | $8,834 | $5,124 | $3,710 |
| 18 | 0 | 0 | run ended | $0 | $0 | $0 |

**Progression trace**

- Prestige awards: Prestige +50: meters_all_70 (Last Edge: Season 16).
- IP fans: {"before":105688,"after":113213,"delta":7525}
- Star career: {"fameDelta":4.57,"relDelta":0.25,"grow":0,"level":10,"reasons":"worked together (+)"}
- Distributor trust: XYZ Network earned back 92% of its $512,000 advance on Last Edge: Season 16 (step 0.06)
- Rule labels: LOCKED = causal chain, accounting, fallback/no-campaign, thresholds 4.0/9.0, IP fan inheritance. WORKING ASSUMPTION = all formulas' shapes and numbers.

### Last Edge: Season 17 — Action + Spies (season)

Released week 640 (year 12.3) · Distributor: XYZ Network · Star: Alex Sato (L10, Fame 100) · IP: Last Edge
Format: **tv season 17**, 15 episodes (one per week) · 367,335 distinct viewers, 3,604,427 viewer-episodes · renewal: average 6.3 ≥ 4.0 → renewable
TV: show-age fatigue 35.0% (base 35.0%, quality slows by 0%) · twist none · hiatus 18 weeks since the last season aired → anticipation ×1 · announcement anticipation used 0.08

**Financial waterfall** [LOCKED rules; amounts provisional]

| Item | Amount |
|---|---:|
| Advance received (project reserve, not revenue) | $517,000 |
| Base cost (unavoidable) | −$240,000 |
| Star fee | −$68,601 |
| Marketing campaign | −$8,000 |
| Paid from studio cash (overrun) | $0 |
| **Unused advance kept at completion** | $200,399 |
| Gross from sales (18 weeks) | $1,153,417 |
| Distributor royalty (42% of weekly gross) | −$484,435 |
| **Studio take** | $668,982 |
| Net for this title (surplus + take − cash overrun; wages are studio-wide, excluded) | $869,381 |

**Quality trace** [scores are computed, never rolled]

Meters (0–100): Plot 92.09 · Writing 92.91 · Filming 91.48 · Editing 88.96
Inputs: staff points {"plot":1626.59,"writing":1830.32,"filming":1610.37,"editing":1081.75}, Star filming points 177.1 (Star family fit 100), studio Action level 5 (+15%), era bar x1.49
Base scores: Audience 9.09 / Critic 9.18 · no weak meter
Combo grades: Audience B (x1.06) / Critic B (x1.06) · repetition fatigue x0.65 · critic saturation x1
Before expectations (after combo, weakness, fatigue, saturation; pre-clamp): Audience 6.26 / Critic 6.33 · critic generation 0 (−0.0%, scale) · audience era 0 (−0.0%) · then clamp 0–10 (generation/era 0 = the ones active at game start)
**Final: Audience 6.26 / Critic 6.33 → avg 6.3**

**Opening & viewership trace** [marketing/Fame/reach affect viewers only]

Awareness inputs: base 0.35, marketing 0.25, studioBuzz 0, starFame 0.6, trend 0.4, ipFans 0.68, announcement 0.08 → awareness 0.91. Reach cap 376,000 → pool 340,621 → opening 102,186.

| Wk | Viewers | Retention | Driver | Gross | Studio | Distributor |
|---:|---:|---:|---|---:|---:|---:|
| 1 | 170,311 | 1 | episode 1 premiere | $54,500 | $31,610 | $22,890 |
| 2 | 202,212 | 1.19 | episode 2: 96% kept (critic 6.33), +38,748 new | $64,708 | $37,531 | $27,177 |
| 3 | 218,494 | 1.08 | episode 3: 96% kept (critic 6.33), +24,411 new | $69,918 | $40,552 | $29,366 |
| 4 | 229,082 | 1.05 | episode 4: 96% kept (audience 6.26), +20,289 new | $73,306 | $42,518 | $30,789 |
| 5 | 236,943 | 1.03 | episode 5: 96% kept (audience 6.26), +18,032 new | $75,822 | $43,977 | $31,845 |
| 6 | 243,231 | 1.03 | episode 6: 96% kept (audience 6.26), +16,808 new | $77,834 | $45,144 | $32,690 |
| 7 | 248,623 | 1.02 | episode 7: 96% kept (audience 6.26), +16,191 new | $79,559 | $46,144 | $33,415 |
| 8 | 253,516 | 1.02 | episode 8: 96% kept (audience 6.26), +15,932 new | $81,125 | $47,053 | $34,073 |
| 9 | 255,195 | 1.01 | episode 9: 96% kept (audience 6.26), +12,935 new | $81,662 | $47,364 | $34,298 |
| 10 | 253,692 | 0.99 | episode 10: 96% kept (audience 6.26), +9,828 new | $81,181 | $47,085 | $34,096 |
| 11 | 249,986 | 0.99 | episode 11: 96% kept (audience 6.26), +7,558 new | $79,996 | $46,397 | $33,598 |
| 12 | 244,687 | 0.98 | episode 12: 96% kept (audience 6.26), +5,800 new | $78,300 | $45,414 | $32,886 |
| 13 | 238,275 | 0.97 | episode 13: 96% kept (audience 6.26), +4,452 new | $76,248 | $44,224 | $32,024 |
| 14 | 231,113 | 0.97 | episode 14: 96% kept (audience 6.26), +3,417 new | $73,956 | $42,895 | $31,062 |
| 15 | 223,475 | 0.97 | episode 15: 96% kept (audience 6.26), +2,623 new | $71,512 | $41,477 | $30,035 |
| 16 | 78,216 | 0.35 | catch-up viewing (tail week 1/2) | $25,029 | $14,517 | $10,512 |
| 17 | 27,376 | 0.35 | catch-up viewing (tail week 2/2) | $8,760 | $5,081 | $3,679 |
| 18 | 0 | 0 | run ended | $0 | $0 | $0 |

**Progression trace**

- Prestige awards: Prestige +50: meters_all_70 (Last Edge: Season 17).
- IP fans: {"before":105633,"after":113274,"delta":7641}
- Star career: {"fameDelta":4.62,"relDelta":0.25,"grow":0,"level":10,"reasons":"worked together (+)"}
- Distributor trust: XYZ Network earned back 94% of its $517,000 advance on Last Edge: Season 17 (step 0.07)
- Rule labels: LOCKED = causal chain, accounting, fallback/no-campaign, thresholds 4.0/9.0, IP fan inheritance. WORKING ASSUMPTION = all formulas' shapes and numbers.

### Last Edge: Season 18 — Action + Spies (season)

Released week 676 (year 13.0) · Distributor: Wolf Pictures · Star: Alex Sato (L10, Fame 100) · IP: Last Edge
Format: **tv season 18**, 15 episodes (one per week) · 256,004 distinct viewers, 2,369,406 viewer-episodes · renewal: average 5.99 ≥ 4.0 → renewable
TV: show-age fatigue 35.0% (base 35.0%, quality slows by 0%) · twist none · hiatus 18 weeks since the last season aired → anticipation ×1 · announcement anticipation used 0.08

**Financial waterfall** [LOCKED rules; amounts provisional]

| Item | Amount |
|---|---:|
| Advance received (project reserve, not revenue) | $517,000 |
| Base cost (unavoidable) | −$240,000 |
| Star fee | −$68,477 |
| Marketing campaign | −$8,000 |
| Paid from studio cash (overrun) | $0 |
| **Unused advance kept at completion** | $200,523 |
| Gross from sales (18 weeks) | $758,210 |
| Distributor royalty (29% of weekly gross) | −$219,881 |
| **Studio take** | $538,329 |
| Net for this title (surplus + take − cash overrun; wages are studio-wide, excluded) | $738,852 |

**Quality trace** [scores are computed, never rolled]

Meters (0–100): Plot 92.2 · Writing 93 · Filming 91.53 · Editing 89.1
Inputs: staff points {"plot":1681.31,"writing":1888.82,"filming":1657.03,"editing":1118.05}, Star filming points 177.1 (Star family fit 100), studio Action level 5 (+15%), era bar x1.52
Base scores: Audience 9.1 / Critic 9.19 · no weak meter
Combo grades: Audience B (x1.06) / Critic B (x1.06) · repetition fatigue x0.65 · critic saturation x0.9
Before expectations (after combo, weakness, fatigue, saturation; pre-clamp): Audience 6.27 / Critic 5.7 · critic generation 0 (−0.0%, scale) · audience era 0 (−0.0%) · then clamp 0–10 (generation/era 0 = the ones active at game start)
**Final: Audience 6.27 / Critic 5.7 → avg 5.99**

**Opening & viewership trace** [marketing/Fame/reach affect viewers only]

Awareness inputs: base 0.35, marketing 0.25, studioBuzz 0, starFame 0.6, trend 0.1, ipFans 0.68, announcement 0.08 → awareness 0.87. Reach cap 264,000 → pool 230,481 → opening 69,144.

| Wk | Viewers | Retention | Driver | Gross | Studio | Distributor |
|---:|---:|---:|---|---:|---:|---:|
| 1 | 115,241 | 1 | episode 1 premiere | $36,877 | $26,183 | $10,694 |
| 2 | 131,670 | 1.14 | episode 2: 92% kept (critic 5.7), +25,418 new | $42,134 | $29,915 | $12,219 |
| 3 | 137,525 | 1.04 | episode 3: 92% kept (critic 5.7), +16,125 new | $44,008 | $31,246 | $12,762 |
| 4 | 145,191 | 1.06 | episode 4: 96% kept (audience 6.27), +13,690 new | $46,461 | $32,987 | $13,474 |
| 5 | 150,807 | 1.04 | episode 5: 96% kept (audience 6.27), +11,975 new | $48,258 | $34,263 | $13,995 |
| 6 | 155,239 | 1.03 | episode 6: 96% kept (audience 6.27), +11,037 new | $49,676 | $35,270 | $14,406 |
| 7 | 158,996 | 1.02 | episode 7: 96% kept (audience 6.27), +10,556 new | $50,879 | $36,124 | $14,755 |
| 8 | 162,377 | 1.02 | episode 8: 96% kept (audience 6.27), +10,345 new | $51,961 | $36,892 | $15,069 |
| 9 | 165,559 | 1.02 | episode 9: 96% kept (audience 6.27), +10,294 new | $52,979 | $37,615 | $15,364 |
| 10 | 167,628 | 1.01 | episode 10: 96% kept (audience 6.27), +9,320 new | $53,641 | $38,085 | $15,556 |
| 11 | 167,236 | 1 | episode 11: 96% kept (audience 6.27), +6,950 new | $53,516 | $37,996 | $15,520 |
| 12 | 165,274 | 0.99 | episode 12: 96% kept (audience 6.27), +5,363 new | $52,888 | $37,550 | $15,337 |
| 13 | 162,147 | 0.98 | episode 13: 96% kept (audience 6.27), +4,112 new | $51,887 | $36,840 | $15,047 |
| 14 | 158,201 | 0.98 | episode 14: 96% kept (audience 6.27), +3,156 new | $50,624 | $35,943 | $14,681 |
| 15 | 153,694 | 0.97 | episode 15: 96% kept (audience 6.27), +2,422 new | $49,182 | $34,919 | $14,263 |
| 16 | 53,793 | 0.35 | catch-up viewing (tail week 1/2) | $17,214 | $12,222 | $4,992 |
| 17 | 18,828 | 0.35 | catch-up viewing (tail week 2/2) | $6,025 | $4,278 | $1,747 |
| 18 | 0 | 0 | run ended | $0 | $0 | $0 |

**Progression trace**

- Prestige awards: Prestige +50: meters_all_70 (Last Edge: Season 18).
- IP fans: {"before":105690,"after":109745,"delta":4055}
- Star career: {"fameDelta":3.12,"relDelta":0.25,"grow":0,"level":10,"reasons":"worked together (+)"}
- Distributor trust: Wolf Pictures earned back 43% of its $517,000 advance on Last Edge: Season 18 (step -0.28)
- Rule labels: LOCKED = causal chain, accounting, fallback/no-campaign, thresholds 4.0/9.0, IP fan inheritance. WORKING ASSUMPTION = all formulas' shapes and numbers.

### Last Edge: Season 19 — Action + Zombies (season)

Released week 712 (year 13.7) · Distributor: Meridian Global · Star: Alex Sato (L10, Fame 100) · IP: Last Edge
Format: **tv season 19**, 15 episodes (one per week) · 391,935 distinct viewers, 3,069,829 viewer-episodes · renewal: average 5.41 ≥ 4.0 → renewable
TV: show-age fatigue 35.0% (base 35.0%, quality slows by 0%) · twist Zombies → good · hiatus 18 weeks since the last season aired → anticipation ×1 · announcement anticipation used 0.00

**Financial waterfall** [LOCKED rules; amounts provisional]

| Item | Amount |
|---|---:|
| Advance received (project reserve, not revenue) | $631,000 |
| Base cost (unavoidable) | −$240,000 |
| Star fee | −$68,358 |
| Marketing campaign | −$8,000 |
| Paid from studio cash (overrun) | $0 |
| **Unused advance kept at completion** | $314,642 |
| Gross from sales (18 weeks) | $982,345 |
| Distributor royalty (45% of weekly gross) | −$442,055 |
| **Studio take** | $540,290 |
| Net for this title (surplus + take − cash overrun; wages are studio-wide, excluded) | $854,932 |

**Quality trace** [scores are computed, never rolled]

Meters (0–100): Plot 92.22 · Writing 93.01 · Filming 91.58 · Editing 89.13
Inputs: staff points {"plot":1716.84,"writing":1927.44,"filming":1700.43,"editing":1141.84}, Star filming points 177.1 (Star family fit 100), studio Action level 5 (+15%), era bar x1.55
Base scores: Audience 9.1 / Critic 9.19 · no weak meter
Combo grades: Audience A (x1.15) / Critic C (x1) · repetition fatigue x0.55 · critic saturation x1
Before expectations (after combo, weakness, fatigue, saturation; pre-clamp): Audience 5.76 / Critic 5.06 · critic generation 0 (−0.0%, scale) · audience era 0 (−0.0%) · then clamp 0–10 (generation/era 0 = the ones active at game start)
**Final: Audience 5.76 / Critic 5.06 → avg 5.41**

**Opening & viewership trace** [marketing/Fame/reach affect viewers only]

Awareness inputs: base 0.35, marketing 0.25, studioBuzz 0, starFame 0.6, trend 0.4, ipFans 0.66, announcement 0 → awareness 0.9. Reach cap 440,000 → pool 394,203 → opening 118,261.

| Wk | Viewers | Retention | Driver | Gross | Studio | Distributor |
|---:|---:|---:|---|---:|---:|---:|
| 1 | 197,102 | 1 | episode 1 premiere | $63,073 | $34,690 | $28,383 |
| 2 | 216,177 | 1.1 | episode 2: 88% kept (critic 5.06), +42,018 new | $69,177 | $38,047 | $31,129 |
| 3 | 217,787 | 1.01 | episode 3: 88% kept (critic 5.06), +26,773 new | $69,692 | $38,331 | $31,361 |
| 4 | 222,237 | 1.02 | episode 4: 93% kept (audience 5.76), +20,653 new | $71,116 | $39,114 | $32,002 |
| 5 | 221,770 | 1 | episode 5: 93% kept (audience 5.76), +16,067 new | $70,966 | $39,032 | $31,935 |
| 6 | 218,445 | 0.99 | episode 6: 93% kept (audience 5.76), +13,175 new | $69,902 | $38,446 | $31,456 |
| 7 | 213,501 | 0.98 | episode 7: 93% kept (audience 5.76), +11,308 new | $68,320 | $37,576 | $30,744 |
| 8 | 207,682 | 0.97 | episode 8: 93% kept (audience 5.76), +10,065 new | $66,458 | $36,552 | $29,906 |
| 9 | 201,432 | 0.97 | episode 9: 93% kept (audience 5.76), +9,202 new | $64,458 | $35,452 | $29,006 |
| 10 | 195,018 | 0.97 | episode 10: 93% kept (audience 5.76), +8,573 new | $62,406 | $34,323 | $28,083 |
| 11 | 188,598 | 0.97 | episode 11: 93% kept (audience 5.76), +8,089 new | $60,351 | $33,193 | $27,158 |
| 12 | 182,261 | 0.97 | episode 12: 93% kept (audience 5.76), +7,695 new | $58,324 | $32,078 | $26,246 |
| 13 | 176,060 | 0.97 | episode 13: 93% kept (audience 5.76), +7,359 new | $56,339 | $30,987 | $25,353 |
| 14 | 170,024 | 0.97 | episode 14: 93% kept (audience 5.76), +7,063 new | $54,408 | $29,924 | $24,483 |
| 15 | 164,167 | 0.97 | episode 15: 93% kept (audience 5.76), +6,793 new | $52,533 | $28,893 | $23,640 |
| 16 | 57,458 | 0.35 | catch-up viewing (tail week 1/2) | $18,387 | $10,113 | $8,274 |
| 17 | 20,110 | 0.35 | catch-up viewing (tail week 2/2) | $6,435 | $3,539 | $2,896 |
| 18 | 0 | 0 | run ended | $0 | $0 | $0 |

**Progression trace**

- Prestige awards: Prestige +50: meters_all_70 (Last Edge: Season 19).
- IP fans: {"before":102398,"after":104969,"delta":2571}
- Star career: {"fameDelta":1.48,"relDelta":0.25,"grow":0,"level":10,"reasons":"worked together (+)"}
- Distributor trust: Meridian Global earned back 70% of its $631,000 advance on Last Edge: Season 19 (step -0.19)
- Rule labels: LOCKED = causal chain, accounting, fallback/no-campaign, thresholds 4.0/9.0, IP fan inheritance. WORKING ASSUMPTION = all formulas' shapes and numbers.

### Last Edge: Season 20 — Action + Spies (season)

Released week 748 (year 14.4) · Distributor: Meridian Global · Star: Alex Sato (L10, Fame 100) · IP: Last Edge
Format: **tv season 20**, 15 episodes (one per week) · 425,174 distinct viewers, 4,052,069 viewer-episodes · renewal: average 6.3 ≥ 4.0 → renewable
TV: show-age fatigue 35.0% (base 35.0%, quality slows by 0%) · twist Spies → good · hiatus 18 weeks since the last season aired → anticipation ×1 · announcement anticipation used 0.00

**Financial waterfall** [LOCKED rules; amounts provisional]

| Item | Amount |
|---|---:|
| Advance received (project reserve, not revenue) | $647,000 |
| Base cost (unavoidable) | −$240,000 |
| Star fee | −$68,243 |
| Marketing campaign | −$8,000 |
| Paid from studio cash (overrun) | $0 |
| **Unused advance kept at completion** | $330,757 |
| Gross from sales (18 weeks) | $1,296,662 |
| Distributor royalty (45% of weekly gross) | −$583,498 |
| **Studio take** | $713,164 |
| Net for this title (surplus + take − cash overrun; wages are studio-wide, excluded) | $1,043,921 |

**Quality trace** [scores are computed, never rolled]

Meters (0–100): Plot 92.23 · Writing 93.01 · Filming 91.52 · Editing 89.11
Inputs: staff points {"plot":1749.99,"writing":1960.64,"filming":1719.84,"editing":1160.58}, Star filming points 177.1 (Star family fit 100), studio Action level 5 (+15%), era bar x1.58
Base scores: Audience 9.1 / Critic 9.19 · no weak meter
Combo grades: Audience B (x1.06) / Critic B (x1.06) · repetition fatigue x0.65 · critic saturation x1
Before expectations (after combo, weakness, fatigue, saturation; pre-clamp): Audience 6.27 / Critic 6.33 · critic generation 0 (−0.0%, scale) · audience era 0 (−0.0%) · then clamp 0–10 (generation/era 0 = the ones active at game start)
**Final: Audience 6.27 / Critic 6.33 → avg 6.3**

**Opening & viewership trace** [marketing/Fame/reach affect viewers only]

Awareness inputs: base 0.35, marketing 0.25, studioBuzz 0, starFame 0.6, trend 0, ipFans 0.63, announcement 0 → awareness 0.84. Reach cap 440,000 → pool 369,680 → opening 110,904.

| Wk | Viewers | Retention | Driver | Gross | Studio | Distributor |
|---:|---:|---:|---|---:|---:|---:|
| 1 | 184,840 | 1 | episode 1 premiere | $59,149 | $32,532 | $26,617 |
| 2 | 219,599 | 1.19 | episode 2: 96% kept (critic 6.33), +42,190 new | $70,272 | $38,649 | $31,622 |
| 3 | 237,483 | 1.08 | episode 3: 96% kept (critic 6.33), +26,712 new | $75,995 | $41,797 | $34,198 |
| 4 | 249,299 | 1.05 | episode 4: 96% kept (audience 6.27), +22,218 new | $79,776 | $43,877 | $35,899 |
| 5 | 258,137 | 1.04 | episode 5: 96% kept (audience 6.27), +19,757 new | $82,604 | $45,432 | $37,172 |
| 6 | 265,261 | 1.03 | episode 6: 96% kept (audience 6.27), +18,430 new | $84,884 | $46,686 | $38,198 |
| 7 | 271,413 | 1.02 | episode 7: 96% kept (audience 6.27), +17,770 new | $86,852 | $47,769 | $39,083 |
| 8 | 277,029 | 1.02 | episode 8: 96% kept (audience 6.27), +17,504 new | $88,649 | $48,757 | $39,892 |
| 9 | 282,365 | 1.02 | episode 9: 96% kept (audience 6.27), +17,470 new | $90,357 | $49,696 | $40,661 |
| 10 | 287,511 | 1.02 | episode 10: 96% kept (audience 6.27), +17,514 new | $92,004 | $50,602 | $41,402 |
| 11 | 287,771 | 1 | episode 11: 96% kept (audience 6.27), +12,853 new | $92,087 | $50,648 | $41,439 |
| 12 | 285,116 | 0.99 | episode 12: 96% kept (audience 6.27), +9,949 new | $91,237 | $50,180 | $41,057 |
| 13 | 280,251 | 0.98 | episode 13: 96% kept (audience 6.27), +7,623 new | $89,680 | $49,324 | $40,356 |
| 14 | 273,829 | 0.98 | episode 14: 96% kept (audience 6.27), +5,853 new | $87,625 | $48,194 | $39,431 |
| 15 | 266,326 | 0.97 | episode 15: 96% kept (audience 6.27), +4,491 new | $85,224 | $46,873 | $38,351 |
| 16 | 93,214 | 0.35 | catch-up viewing (tail week 1/2) | $29,828 | $16,406 | $13,423 |
| 17 | 32,625 | 0.35 | catch-up viewing (tail week 2/2) | $10,440 | $5,742 | $4,698 |
| 18 | 0 | 0 | run ended | $0 | $0 | $0 |

**Progression trace**

- Prestige awards: Prestige +50: meters_all_70 (Last Edge: Season 20).
- IP fans: {"before":97942,"after":106786,"delta":8844}
- Star career: {"fameDelta":4.8,"relDelta":0.25,"grow":0,"level":10,"reasons":"worked together (+)"}
- Distributor trust: Meridian Global earned back 90% of its $647,000 advance on Last Edge: Season 20 (step 0.05)
- Rule labels: LOCKED = causal chain, accounting, fallback/no-campaign, thresholds 4.0/9.0, IP fan inheritance. WORKING ASSUMPTION = all formulas' shapes and numbers.

## Cash ledger (studio cash only)

| Week | Kind | Amount | Note |
|---:|---|---:|---|
| 0 | start_cash | $40,000 |  |
| 0 | advance_received | $57,000 | advance from Wolf Pictures (project reserve, not revenue) |
| 0 | advance_spent | $-57,000 | base_cost: unavoidable base cost |
| 0 | base_cost | $-3,000 | unavoidable base cost |
| 7 | star_fee | $-5,621 | Bo Hart |
| 16 | advance_received | $85,000 | advance from Wolf Pictures (project reserve, not revenue) |
| 16 | advance_spent | $-60,000 | base_cost: unavoidable base cost |
| 23 | advance_spent | $-25,000 | star_fee: Sam Imai |
| 23 | star_fee | $-17,005 | Sam Imai |
| 29 | campaign | $-8,000 | small |
| 32 | advance_received | $77,000 | advance from Wolf Pictures (project reserve, not revenue) |
| 32 | advance_spent | $-60,000 | base_cost: unavoidable base cost |
| 39 | advance_spent | $-17,000 | star_fee: Sam Imai |
| 39 | star_fee | $-25,005 | Sam Imai |
| 45 | campaign | $-8,000 | small |
| 48 | hire | $-20,000 | Gus Novak |
| 48 | hire | $-20,000 | Bo Diaz |
| 48 | advance_received | $114,000 | advance from Wolf Pictures (project reserve, not revenue) |
| 48 | advance_spent | $-60,000 | base_cost: unavoidable base cost |
| 55 | advance_spent | $-35,970 | star_fee: Fin Quinn |
| 61 | advance_spent | $-8,000 | campaign: small |
| 64 | surplus_transfer | $10,030 | unused advance kept at completion (not sales revenue) |
| 64 | train | $-15,000 | Bo Diaz |
| 64 | train | $-15,000 | Gus Novak |
| 64 | advance_received | $91,000 | advance from Wolf Pictures (project reserve, not revenue) |
| 64 | advance_spent | $-60,000 | base_cost: unavoidable base cost |
| 71 | advance_spent | $-17,993 | star_fee: Alex Sato |
| 77 | advance_spent | $-8,000 | campaign: small |
| 80 | surplus_transfer | $5,007 | unused advance kept at completion (not sales revenue) |
| 80 | train | $-15,000 | Bo Diaz |
| 80 | train | $-15,000 | Gus Novak |
| 80 | advance_received | $79,000 | advance from Orbit Releasing (project reserve, not revenue) |
| 80 | advance_spent | $-60,000 | base_cost: unavoidable base cost |
| 87 | advance_spent | $-17,993 | star_fee: Alex Sato |
| 93 | advance_spent | $-1,007 | campaign: small |
| 93 | campaign | $-6,993 | small |
| 96 | train | $-15,000 | Sam |
| 96 | train | $-15,000 | Bo Diaz |
| 96 | advance_received | $104,000 | advance from Wolf Pictures (project reserve, not revenue) |
| 96 | advance_spent | $-60,000 | base_cost: unavoidable base cost |
| 103 | advance_spent | $-23,963 | star_fee: Liv Reyes |
| 109 | advance_spent | $-8,000 | campaign: small |
| 112 | surplus_transfer | $12,037 | unused advance kept at completion (not sales revenue) |
| 112 | upgrade | $-250,000 | studio capacity 4 -> 6 |
| 112 | hire | $-20,000 | Jo Moreau |
| 112 | hire | $-20,000 | Eli Quinn |
| 112 | advance_received | $92,000 | advance from XYZ Network (project reserve, not revenue) |
| 112 | advance_spent | $-60,000 | base_cost: unavoidable base cost |
| 119 | advance_spent | $-32,000 | star_fee: Dee Sato |
| 119 | star_fee | $-3,076 | Dee Sato |
| 125 | campaign | $-8,000 | small |
| 128 | format_unlock | $-150,000 | TV series |
| 128 | train | $-15,000 | Eli Quinn |
| 128 | train | $-15,000 | Jo Moreau |
| 128 | advance_received | $182,000 | advance from XYZ Network (project reserve, not revenue) |
| 128 | advance_spent | $-90,000 | base_cost: unavoidable base cost |
| 135 | advance_spent | $-26,114 | star_fee: Alex Sato |
| 141 | advance_spent | $-8,000 | campaign: small |
| 144 | surplus_transfer | $57,886 | unused advance kept at completion (not sales revenue) |
| 144 | announce | $-15,000 | Last Edge season 2 |
| 144 | train | $-15,000 | Eli Quinn |
| 144 | train | $-15,000 | Jo Moreau |
| 144 | advance_received | $179,000 | advance from Meridian Global (project reserve, not revenue) |
| 144 | advance_spent | $-90,000 | base_cost: unavoidable base cost |
| 151 | advance_spent | $-25,722 | star_fee: Alex Sato |
| 157 | advance_spent | $-8,000 | campaign: small |
| 160 | surplus_transfer | $55,278 | unused advance kept at completion (not sales revenue) |
| 160 | announce | $-15,000 | Last Edge season 3 |
| 160 | train | $-15,000 | Eli Quinn |
| 160 | train | $-15,000 | Jo Moreau |
| 160 | advance_received | $312,000 | advance from XYZ Network (project reserve, not revenue) |
| 160 | advance_spent | $-165,000 | base_cost: unavoidable base cost |
| 171 | advance_spent | $-40,266 | star_fee: Alex Sato |
| 181 | advance_spent | $-8,000 | campaign: small |
| 186 | surplus_transfer | $98,734 | unused advance kept at completion (not sales revenue) |
| 186 | announce | $-15,000 | Last Edge season 4 |
| 186 | upgrade | $-750,000 | studio capacity 6 -> 8 |
| 186 | hire | $-20,000 | Mo Vale |
| 186 | hire | $-20,000 | Ari Kerr |
| 186 | advance_received | $332,000 | advance from Meridian Global (project reserve, not revenue) |
| 186 | advance_spent | $-165,000 | base_cost: unavoidable base cost |
| 197 | advance_spent | $-39,225 | star_fee: Alex Sato |
| 207 | advance_spent | $-8,000 | campaign: small |
| 212 | surplus_transfer | $119,775 | unused advance kept at completion (not sales revenue) |
| 212 | announce | $-15,000 | Last Edge season 5 |
| 212 | train | $-15,000 | Ari Kerr |
| 212 | train | $-15,000 | Mo Vale |
| 212 | advance_received | $224,000 | advance from Orbit Releasing (project reserve, not revenue) |
| 212 | advance_spent | $-165,000 | base_cost: unavoidable base cost |
| 223 | advance_spent | $-47,672 | star_fee: Alex Sato |
| 233 | advance_spent | $-8,000 | campaign: small |
| 238 | surplus_transfer | $3,328 | unused advance kept at completion (not sales revenue) |
| 238 | announce | $-15,000 | Last Edge season 6 |
| 238 | train | $-15,000 | Ari Kerr |
| 238 | train | $-15,000 | Mo Vale |
| 238 | advance_received | $395,000 | advance from Meridian Global (project reserve, not revenue) |
| 238 | advance_spent | $-165,000 | base_cost: unavoidable base cost |
| 249 | advance_spent | $-58,559 | star_fee: Alex Sato |
| 259 | advance_spent | $-8,000 | campaign: small |
| 264 | surplus_transfer | $163,441 | unused advance kept at completion (not sales revenue) |
| 264 | announce | $-15,000 | Last Edge season 7 |
| 264 | train | $-15,000 | Ari Kerr |
| 264 | train | $-15,000 | Mo Vale |
| 264 | advance_received | $454,000 | advance from Meridian Global (project reserve, not revenue) |
| 264 | advance_spent | $-165,000 | base_cost: unavoidable base cost |
| 275 | advance_spent | $-69,033 | star_fee: Alex Sato |
| 285 | advance_spent | $-8,000 | campaign: small |
| 290 | surplus_transfer | $211,967 | unused advance kept at completion (not sales revenue) |
| 290 | announce | $-15,000 | Last Edge season 8 |
| 290 | train | $-15,000 | Ari Kerr |
| 290 | train | $-15,000 | Eli Quinn |
| 290 | advance_received | $504,000 | advance from Meridian Global (project reserve, not revenue) |
| 290 | advance_spent | $-165,000 | base_cost: unavoidable base cost |
| 301 | advance_spent | $-69,952 | star_fee: Alex Sato |
| 311 | advance_spent | $-8,000 | campaign: small |
| 316 | surplus_transfer | $261,048 | unused advance kept at completion (not sales revenue) |
| 316 | announce | $-15,000 | Last Edge season 9 |
| 316 | train | $-15,000 | Mo Vale |
| 316 | train | $-15,000 | Ari Kerr |
| 316 | advance_received | $727,000 | advance from Meridian Global (project reserve, not revenue) |
| 316 | advance_spent | $-240,000 | base_cost: unavoidable base cost |
| 331 | advance_spent | $-69,777 | star_fee: Alex Sato |
| 345 | advance_spent | $-8,000 | campaign: small |
| 352 | surplus_transfer | $409,223 | unused advance kept at completion (not sales revenue) |
| 352 | announce | $-15,000 | Last Edge season 10 |
| 352 | train | $-15,000 | Jo Moreau |
| 352 | train | $-15,000 | Eli Quinn |
| 352 | advance_received | $617,000 | advance from Meridian Global (project reserve, not revenue) |
| 352 | advance_spent | $-240,000 | base_cost: unavoidable base cost |
| 367 | advance_spent | $-69,609 | star_fee: Alex Sato |
| 381 | advance_spent | $-8,000 | campaign: small |
| 388 | surplus_transfer | $299,391 | unused advance kept at completion (not sales revenue) |
| 388 | announce | $-15,000 | Last Edge season 11 |
| 388 | train | $-15,000 | Mo Vale |
| 388 | train | $-15,000 | Ari Kerr |
| 388 | advance_received | $506,000 | advance from Wolf Pictures (project reserve, not revenue) |
| 388 | advance_spent | $-240,000 | base_cost: unavoidable base cost |
| 403 | advance_spent | $-69,447 | star_fee: Alex Sato |
| 417 | advance_spent | $-8,000 | campaign: small |
| 424 | surplus_transfer | $188,553 | unused advance kept at completion (not sales revenue) |
| 424 | announce | $-15,000 | Last Edge season 12 |
| 424 | train | $-15,000 | Jo Moreau |
| 424 | train | $-15,000 | Alex |
| 424 | advance_received | $580,000 | advance from XYZ Network (project reserve, not revenue) |
| 424 | advance_spent | $-240,000 | base_cost: unavoidable base cost |
| 439 | advance_spent | $-69,292 | star_fee: Alex Sato |
| 453 | advance_spent | $-8,000 | campaign: small |
| 460 | surplus_transfer | $262,708 | unused advance kept at completion (not sales revenue) |
| 460 | train | $-15,000 | Gus Novak |
| 460 | train | $-15,000 | Eli Quinn |
| 460 | advance_received | $544,000 | advance from XYZ Network (project reserve, not revenue) |
| 460 | advance_spent | $-240,000 | base_cost: unavoidable base cost |
| 475 | advance_spent | $-69,143 | star_fee: Alex Sato |
| 489 | advance_spent | $-8,000 | campaign: small |
| 496 | surplus_transfer | $226,857 | unused advance kept at completion (not sales revenue) |
| 496 | train | $-15,000 | Mo Vale |
| 496 | train | $-15,000 | Sam |
| 496 | advance_received | $665,000 | advance from Meridian Global (project reserve, not revenue) |
| 496 | advance_spent | $-240,000 | base_cost: unavoidable base cost |
| 511 | advance_spent | $-69,000 | star_fee: Alex Sato |
| 525 | advance_spent | $-8,000 | campaign: small |
| 532 | surplus_transfer | $348,000 | unused advance kept at completion (not sales revenue) |
| 532 | announce | $-15,000 | Last Edge season 15 |
| 532 | train | $-15,000 | Bo Diaz |
| 532 | train | $-15,000 | Ari Kerr |
| 532 | advance_received | $605,000 | advance from Meridian Global (project reserve, not revenue) |
| 532 | advance_spent | $-240,000 | base_cost: unavoidable base cost |
| 547 | advance_spent | $-68,862 | star_fee: Alex Sato |
| 561 | advance_spent | $-8,000 | campaign: small |
| 568 | surplus_transfer | $288,138 | unused advance kept at completion (not sales revenue) |
| 568 | announce | $-15,000 | Last Edge season 16 |
| 568 | train | $-15,000 | Jo Moreau |
| 568 | train | $-15,000 | Alex |
| 568 | advance_received | $512,000 | advance from XYZ Network (project reserve, not revenue) |
| 568 | advance_spent | $-240,000 | base_cost: unavoidable base cost |
| 583 | advance_spent | $-68,729 | star_fee: Alex Sato |
| 597 | advance_spent | $-8,000 | campaign: small |
| 604 | surplus_transfer | $195,271 | unused advance kept at completion (not sales revenue) |
| 604 | announce | $-15,000 | Last Edge season 17 |
| 604 | train | $-15,000 | Gus Novak |
| 604 | train | $-15,000 | Eli Quinn |
| 604 | advance_received | $517,000 | advance from XYZ Network (project reserve, not revenue) |
| 604 | advance_spent | $-240,000 | base_cost: unavoidable base cost |
| 619 | advance_spent | $-68,601 | star_fee: Alex Sato |
| 633 | advance_spent | $-8,000 | campaign: small |
| 640 | surplus_transfer | $200,399 | unused advance kept at completion (not sales revenue) |
| 640 | announce | $-15,000 | Last Edge season 18 |
| 640 | train | $-15,000 | Sam |
| 640 | train | $-15,000 | Mo Vale |
| 640 | advance_received | $517,000 | advance from Wolf Pictures (project reserve, not revenue) |
| 640 | advance_spent | $-240,000 | base_cost: unavoidable base cost |
| 655 | advance_spent | $-68,477 | star_fee: Alex Sato |
| 669 | advance_spent | $-8,000 | campaign: small |
| 676 | surplus_transfer | $200,523 | unused advance kept at completion (not sales revenue) |
| 676 | train | $-15,000 | Bo Diaz |
| 676 | train | $-15,000 | Ari Kerr |
| 676 | advance_received | $631,000 | advance from Meridian Global (project reserve, not revenue) |
| 676 | advance_spent | $-240,000 | base_cost: unavoidable base cost |
| 691 | advance_spent | $-68,358 | star_fee: Alex Sato |
| 705 | advance_spent | $-8,000 | campaign: small |
| 712 | surplus_transfer | $314,642 | unused advance kept at completion (not sales revenue) |
| 712 | train | $-15,000 | Jo Moreau |
| 712 | train | $-15,000 | Alex |
| 712 | advance_received | $647,000 | advance from Meridian Global (project reserve, not revenue) |
| 712 | advance_spent | $-240,000 | base_cost: unavoidable base cost |
| 727 | advance_spent | $-68,243 | star_fee: Alex Sato |
| 741 | advance_spent | $-8,000 | campaign: small |
| 748 | surplus_transfer | $330,757 | unused advance kept at completion (not sales revenue) |
| 748 | announce | $-15,000 | Last Edge season 21 |
| 748 | train | $-15,000 | Gus Novak |
| 748 | train | $-15,000 | Eli Quinn |
| 748 | advance_received | $603,000 | advance from Meridian Global (project reserve, not revenue) |
| 748 | advance_spent | $-240,000 | base_cost: unavoidable base cost |
| 763 | advance_spent | $-68,131 | star_fee: Alex Sato |
| 777 | advance_spent | $-8,000 | campaign: small |
| all | payroll (total) | $-5,790,800 | aggregated |
| all | upkeep (total) | $-468,000 | aggregated |
| all | studio_take (total) | $13,777,651 | aggregated |
