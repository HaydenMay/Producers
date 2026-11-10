# Single career — seed 1, strategy streaming-pivot

> **Simulation assumptions, not design locks.** All numbers come from provisional config values. Nothing here is official balance.

- Ruleset: `v9.61-movie-kernel-0.1` · Config: `gate3_mixed` (hash `b83a7f2c`)
- Seed: 1
- Strategy: streaming-pivot
- Decisions: 984
- Modelled: movies; limited series (config-gated); renewable TV seasons: orders, renewal, fatigue, twist, hiatus, announcements, contract variants A/B (config-gated); studio streaming service: engineer build, aggregate subscribers, catalog, Originals (config-gated); distributor advances/royalties/trust; Stars (families, budgets, fallback, callbacks, relationships); marketing + studio buzz; scores + legs; IP fans; Prestige milestones; studio genre levels; trends; staff XP/hire/train; studio staff-capacity cap + upgrade ladder (when configured); theme research + staff pitches
- **Not modelled:** soap operas (shelved); named critics (Gate 2.6 proxy only); eras beyond a gentle quality bar; studio upgrades other than staff capacity + TV unlock; genre unlocks; late-game concurrency; TV spinoffs/reboots, Final Season announcements, other show shake-ups; binge drops; platform upgrades; challenge modes

## Career summary

- Weeks: 780 (15.0 years) · Releases: 32 · Cancellations: 0
- End cash: $4,906,379 (start $40,000) · Negative-cash weeks: 3
- Prestige: 4535 (62 awards)
- Staff: Sam [P 90 W 91 F 87 E 79, XP 7800]; Alex [P 86 W 88 F 88 E 81, XP 7800]; Gus Novak [P 88 W 88 F 88 E 82, XP 7320]; Bo Diaz [P 89 W 91 F 90 E 78, XP 7320]; Jo Moreau [P 91 W 91 F 89 E 79, XP 6680]; Eli Quinn [P 87 W 88 F 84 E 84, XP 6680]; Lee Okafor [P 88 W 90 F 84 E 82, XP 6040]; Max Grant [P 90 W 84 F 89 E 81, XP 4470]
- Studio genre levels (exact genre): Comedy xp 9, Horror xp 7, Action xp 16
- IP fans: Hollow Edge 0; Dead Night 1,020; Dead Pulse 928; Broken Legacy 2,411; Red Shadow 1,528; Hollow Code 3,501; Hollow Edge 2,888; Iron Legacy 6,466; Last Edge 5,270; Hollow Legacy 4,961; Last Protocol 7,879; Silver Code 8,833; Wild Horizon 4,869; Red Night 7,218; Last Shadow 6,733; Lost Shadow 10,078; Iron Run 5,581; Broken Storm 8,044; Silver Frequency 6,802; Wild Legacy 8,421; Last Pulse 10,122; Broken Signal 5,440; Broken Code 5,265; Lost Legacy 26,729; Last Frequency 10,311; Midnight Echo 23,860
- Distributor trust: wolf 3.37, starlight 2.50, xyz 4.38, orbit 3.79, meridian 4.31
- Stars hired: Bo Hart (L0, Fame 7, rel 0.50); Sam Imai (L7, Fame 86, rel 4.75); Ari Reyes (L1, Fame 15, rel 1.75); Alex Sato (L8, Fame 94, rel 5.00); Dee Grant (L2, Fame 50, rel 1.75); Kai Moreau (L6, Fame 73, rel 4.00); Fin Fox (L10, Fame 100, rel 5.00); Dee Reyes (L8, Fame 31, rel 2.50)
- Great films: Hall of Fame 3/32 · avg ≥9.0 3/32 · avg >9.0 3/32 · Audience ≥9 7/32 · Critic ≥9 1/32 · 8+ 14/32
- Best film: 9.34 "Silver Frequency" (A9.64/C9.03; streaming-pivot seed 1 #19, yr 5.8, critic gen 0) · best Audience: 9.23 "Lost Shadow" (A10/C8.46; streaming-pivot seed 1 #16, yr 4.9, critic gen 0) · best Critic: 9.34 "Silver Frequency" (A9.64/C9.03; streaming-pivot seed 1 #19, yr 5.8, critic gen 0)

## Formats, TV and streaming (Gate 3)

- Releases by format: movie 21 (avg 7.762, HoF 3, net/production-week $24,668); movie/original 3 (avg 8.477, HoF 0, net/production-week $-7,639); tv/original 8 (avg 7.504, HoF 0, net/production-week $-8,307)
- TV: unlocked week 128 (year 2.5) · shows 2, seasons 8, longest 6 · ended by a score below 4: 0
  - Lost Legacy: seasons S1 15ep 7.4 → S2 15ep 7.7 → S3 20ep 7.54 → S4 20ep 7.26 → S5 20ep 6.77 → S6 20ep 5.99 · fans 26,729 · last season averaged 5.99 (≥ 4): renewable
  - Midnight Echo: seasons S1 20ep 8.51 → S2 20ep 8.86 · fans 23,860 · last season averaged 8.86 (≥ 4): renewable
- Streaming: live; build started week 304, launched week 334; subscribers now 71,994 (peak 98,030); by year-end y1 0, y2 0, y3 0, y4 0, y5 0, y6 0, y7 71,268, y8 95,122, y9 88,606, y10 82,558, y11 77,628, y12 73,219, y13 83,669, y14 76,244, y15 71,994; subscription gross $18,407,950 − operating $9,090,385; build $600,000 paid back week 384; catalog 32 titles; Originals 11
- Last 12 months: traditional studio take $0 · subscriptions $2,083,390 · platform cost $-1,041,017 · kept surplus $0
- Prestige by source: audience_7_5 1875, meters_all_70 1300, critic_8_5 510, hall_of_fame 600, first_hall_of_fame 100, ip_viewers_500k 150 · by format: movie 3075, movie/original 460, tv/original 1000

## Releases (full causal trace)

### Hollow Edge — Comedy + Superheroes (new)

Released week 16 (year 0.3) · Distributor: Wolf Pictures · Star: Bo Hart (L0, Fame 7) · IP: Hollow Edge
Joined the streaming catalog after its run (retention value only; no new payouts).

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

### Dead Night — Horror + Sports (new)

Released week 32 (year 0.6) · Distributor: Wolf Pictures · Star: Sam Imai (L7, Fame 86) · IP: Dead Night
Joined the streaming catalog after its run (retention value only; no new payouts).

**Financial waterfall** [LOCKED rules; amounts provisional]

| Item | Amount |
|---|---:|
| Advance received (project reserve, not revenue) | $100,000 |
| Base cost (unavoidable) | −$60,000 |
| Star fee | −$42,005 |
| Marketing campaign | −$20,000 |
| Paid from studio cash (overrun) | $22,005 |
| **Unused advance kept at completion** | $0 |
| Gross from sales (15 weeks) | $414,242 |
| Distributor royalty (31% of weekly gross) | −$128,415 |
| **Studio take** | $285,827 |
| Net for this title (surplus + take − cash overrun; wages are studio-wide, excluded) | $263,822 |

**Quality trace** [scores are computed, never rolled]

Meters (0–100): Plot 57.84 · Writing 59.29 · Filming 70.06 · Editing 48.22
Inputs: staff points {"plot":58.48,"writing":62.09,"filming":54.89,"editing":38.17}, Star filming points 64.02 (Star family fit 97), studio Horror level 0 (+0%), era bar x1.02
Base scores: Audience 5.9 / Critic 5.87 · no weak meter
Combo grades: Audience B (x1.06) / Critic B (x1.06) · repetition fatigue x1 · critic saturation x1
Before expectations (after combo, weakness, fatigue, saturation; pre-clamp): Audience 6.25 / Critic 6.23 · critic generation 0 (−0.0%, scale) · audience era 0 (−0.0%) · then clamp 0–10 (generation/era 0 = the ones active at game start)
**Final: Audience 6.25 / Critic 6.23 → avg 6.24**

**Opening & viewership trace** [marketing/Fame/reach affect viewers only]

Awareness inputs: base 0.35, marketing 0.55, studioBuzz 0, starFame 0.28, trend 0.4, ipFans 0 → awareness 0.79. Reach cap 264,000 → pool 209,731 → opening 62,919.

| Wk | Viewers | Retention | Driver | Gross | Studio | Distributor |
|---:|---:|---:|---|---:|---:|---:|
| 1 | 62,919 | 1 | opening (aware people watching) | $125,838 | $86,828 | $39,010 |
| 2 | 41,652 | 0.66 | critic 6.23: +1,602 newly aware (buzz) | $83,304 | $57,480 | $25,824 |
| 3 | 25,642 | 0.62 | critic 6.23: +2,075 newly aware (buzz) | $51,284 | $35,386 | $15,898 |
| 4 | 19,481 | 0.76 | audience 6.25: +12,821 newly aware (word of mouth) | $38,962 | $26,884 | $12,078 |
| 5 | 14,783 | 0.76 | audience 6.25: +9,741 newly aware (word of mouth) | $29,566 | $20,401 | $9,165 |
| 6 | 11,219 | 0.76 | audience 6.25: +7,392 newly aware (word of mouth) | $22,438 | $15,482 | $6,956 |
| 7 | 8,514 | 0.76 | audience 6.25: +5,610 newly aware (word of mouth) | $17,028 | $11,749 | $5,279 |
| 8 | 6,461 | 0.76 | audience 6.25: +4,257 newly aware (word of mouth) | $12,922 | $8,916 | $4,006 |
| 9 | 4,903 | 0.76 | audience 6.25: +3,231 newly aware (word of mouth) | $9,806 | $6,766 | $3,040 |
| 10 | 3,721 | 0.76 | audience 6.25: +2,452 newly aware (word of mouth) | $7,442 | $5,135 | $2,307 |
| 11 | 2,823 | 0.76 | audience 6.25: +1,861 newly aware (word of mouth) | $5,646 | $3,896 | $1,750 |
| 12 | 2,143 | 0.76 | audience 6.25: +1,412 newly aware (word of mouth) | $4,286 | $2,957 | $1,329 |
| 13 | 1,626 | 0.76 | audience 6.25: +1,072 newly aware (word of mouth) | $3,252 | $2,244 | $1,008 |
| 14 | 1,234 | 0.76 | audience 6.25: +813 newly aware (word of mouth) | $2,468 | $1,703 | $765 |
| 15 | 0 | 0 | audience 6.25: +617 newly aware (word of mouth) | $0 | $0 | $0 |

**Progression trace**

- Prestige awards: none (no milestone reached)
- IP fans: {"before":0,"after":4109,"delta":4109}
- Star career: {"fameDelta":3.6,"relDelta":0.75,"grow":3,"level":5,"reasons":"worked together (+); project boosted their career (+)"}
- Distributor trust: Wolf Pictures earned 128% of its advance back on Dead Night (step 0.27)
- Rule labels: LOCKED = causal chain, accounting, fallback/no-campaign, thresholds 4.0/9.0, IP fan inheritance. WORKING ASSUMPTION = all formulas' shapes and numbers.

### Dead Pulse — Horror + Sports (new)

Released week 48 (year 0.9) · Distributor: Wolf Pictures · Star: Sam Imai (L7, Fame 86) · IP: Dead Pulse
Joined the streaming catalog after its run (retention value only; no new payouts).

**Financial waterfall** [LOCKED rules; amounts provisional]

| Item | Amount |
|---|---:|
| Advance received (project reserve, not revenue) | $95,000 |
| Base cost (unavoidable) | −$60,000 |
| Star fee | −$42,005 |
| Marketing campaign | −$20,000 |
| Paid from studio cash (overrun) | $27,005 |
| **Unused advance kept at completion** | $0 |
| Gross from sales (15 weeks) | $403,548 |
| Distributor royalty (31% of weekly gross) | −$125,100 |
| **Studio take** | $278,448 |
| Net for this title (surplus + take − cash overrun; wages are studio-wide, excluded) | $251,443 |

**Quality trace** [scores are computed, never rolled]

Meters (0–100): Plot 60.06 · Writing 61.75 · Filming 71.18 · Editing 50.21
Inputs: staff points {"plot":64.86,"writing":69.63,"filming":61.09,"editing":41.83}, Star filming points 65.94 (Star family fit 100), studio Horror level 1 (+3%), era bar x1.04
Base scores: Audience 6.08 / Critic 6.08 · no weak meter
Combo grades: Audience B (x1.06) / Critic B (x1.06) · repetition fatigue x0.95 · critic saturation x1
Before expectations (after combo, weakness, fatigue, saturation; pre-clamp): Audience 6.12 / Critic 6.13 · critic generation 0 (−0.0%, scale) · audience era 0 (−0.0%) · then clamp 0–10 (generation/era 0 = the ones active at game start)
**Final: Audience 6.12 / Critic 6.13 → avg 6.13**

**Opening & viewership trace** [marketing/Fame/reach affect viewers only]

Awareness inputs: base 0.35, marketing 0.55, studioBuzz 0, starFame 0.3, trend 0.4, ipFans 0 → awareness 0.8. Reach cap 264,000 → pool 210,891 → opening 63,267.

| Wk | Viewers | Retention | Driver | Gross | Studio | Distributor |
|---:|---:|---:|---|---:|---:|---:|
| 1 | 63,267 | 1 | opening (aware people watching) | $126,534 | $87,308 | $39,226 |
| 2 | 41,631 | 0.66 | critic 6.13: +1,440 newly aware (buzz) | $83,262 | $57,451 | $25,811 |
| 3 | 25,620 | 0.62 | critic 6.13: +1,882 newly aware (buzz) | $51,240 | $35,356 | $15,884 |
| 4 | 19,029 | 0.74 | audience 6.12: +11,478 newly aware (word of mouth) | $38,058 | $26,260 | $11,798 |
| 5 | 14,141 | 0.74 | audience 6.12: +8,525 newly aware (word of mouth) | $28,282 | $19,515 | $8,767 |
| 6 | 10,509 | 0.74 | audience 6.12: +6,335 newly aware (word of mouth) | $21,018 | $14,502 | $6,516 |
| 7 | 7,810 | 0.74 | audience 6.12: +4,708 newly aware (word of mouth) | $15,620 | $10,778 | $4,842 |
| 8 | 5,804 | 0.74 | audience 6.12: +3,499 newly aware (word of mouth) | $11,608 | $8,010 | $3,598 |
| 9 | 4,313 | 0.74 | audience 6.12: +2,600 newly aware (word of mouth) | $8,626 | $5,952 | $2,674 |
| 10 | 3,205 | 0.74 | audience 6.12: +1,932 newly aware (word of mouth) | $6,410 | $4,423 | $1,987 |
| 11 | 2,382 | 0.74 | audience 6.12: +1,436 newly aware (word of mouth) | $4,764 | $3,287 | $1,477 |
| 12 | 1,770 | 0.74 | audience 6.12: +1,067 newly aware (word of mouth) | $3,540 | $2,443 | $1,097 |
| 13 | 1,315 | 0.74 | audience 6.12: +793 newly aware (word of mouth) | $2,630 | $1,815 | $815 |
| 14 | 978 | 0.74 | audience 6.12: +589 newly aware (word of mouth) | $1,956 | $1,350 | $606 |
| 15 | 0 | 0 | audience 6.12: +438 newly aware (word of mouth) | $0 | $0 | $0 |

**Progression trace**

- Prestige awards: none (no milestone reached)
- IP fans: {"before":0,"after":3648,"delta":3648}
- Star career: {"fameDelta":3.24,"relDelta":0.75,"grow":0,"level":6,"reasons":"worked together (+); project boosted their career (+)"}
- Distributor trust: Wolf Pictures earned 132% of its advance back on Dead Pulse (step 0.27)
- Rule labels: LOCKED = causal chain, accounting, fallback/no-campaign, thresholds 4.0/9.0, IP fan inheritance. WORKING ASSUMPTION = all formulas' shapes and numbers.

### Broken Legacy — Comedy + Zombies (new)

Released week 64 (year 1.2) · Distributor: Wolf Pictures · Star: Ari Reyes (L1, Fame 15) · IP: Broken Legacy
Joined the streaming catalog after its run (retention value only; no new payouts).

**Financial waterfall** [LOCKED rules; amounts provisional]

| Item | Amount |
|---|---:|
| Advance received (project reserve, not revenue) | $104,000 |
| Base cost (unavoidable) | −$60,000 |
| Star fee | −$5,050 |
| Marketing campaign | −$20,000 |
| Paid from studio cash (overrun) | $0 |
| **Unused advance kept at completion** | $18,950 |
| Gross from sales (15 weeks) | $473,006 |
| Distributor royalty (30% of weekly gross) | −$141,902 |
| **Studio take** | $331,104 |
| Net for this title (surplus + take − cash overrun; wages are studio-wide, excluded) | $350,054 |

**Quality trace** [scores are computed, never rolled]

Meters (0–100): Plot 74.32 · Writing 75.1 · Filming 76.57 · Editing 65.24
Inputs: staff points {"plot":126.29,"writing":131.68,"filming":123.19,"editing":78.76}, Star filming points 46.92 (Star family fit 69), studio Comedy level 1 (+3%), era bar x1.05
Base scores: Audience 7.2 / Critic 7.36 · no weak meter
Combo grades: Audience A (x1.15) / Critic C (x1) · repetition fatigue x1 · critic saturation x0.9
Before expectations (after combo, weakness, fatigue, saturation; pre-clamp): Audience 8.29 / Critic 6.62 · critic generation 0 (−0.0%, scale) · audience era 0 (−0.0%) · then clamp 0–10 (generation/era 0 = the ones active at game start)
**Final: Audience 8.29 / Critic 6.62 → avg 7.46**

**Opening & viewership trace** [marketing/Fame/reach affect viewers only]

Awareness inputs: base 0.35, marketing 0.55, studioBuzz 0, starFame 0.04, trend 0.1, ipFans 0 → awareness 0.65. Reach cap 240,000 → pool 155,340 → opening 46,602.

| Wk | Viewers | Retention | Driver | Gross | Studio | Distributor |
|---:|---:|---:|---|---:|---:|---:|
| 1 | 46,602 | 1 | opening (aware people watching) | $93,204 | $65,243 | $27,961 |
| 2 | 32,100 | 0.69 | critic 6.62: +3,292 newly aware (buzz) | $64,200 | $44,940 | $19,260 |
| 3 | 20,277 | 0.63 | critic 6.62: +3,671 newly aware (buzz) | $40,554 | $28,388 | $12,166 |
| 4 | 22,311 | 1.1 | audience 8.29: +26,685 newly aware (word of mouth) | $44,622 | $31,235 | $13,387 |
| 5 | 23,032 | 1.03 | audience 8.29: +29,361 newly aware (word of mouth) | $46,064 | $32,245 | $13,819 |
| 6 | 23,776 | 1.03 | audience 8.29: +30,310 newly aware (word of mouth) | $47,552 | $33,286 | $14,266 |
| 7 | 23,263 | 0.98 | audience 8.29: +27,620 newly aware (word of mouth) | $46,526 | $32,568 | $13,958 |
| 8 | 15,176 | 0.65 | audience 8.29: +5,314 newly aware (word of mouth) | $30,352 | $21,246 | $9,106 |
| 9 | 10,505 | 0.69 | audience 8.29: +5,199 newly aware (word of mouth) | $21,010 | $14,707 | $6,303 |
| 10 | 7,200 | 0.69 | audience 8.29: +3,392 newly aware (word of mouth) | $14,400 | $10,080 | $4,320 |
| 11 | 4,943 | 0.69 | audience 8.29: +2,348 newly aware (word of mouth) | $9,886 | $6,920 | $2,966 |
| 12 | 3,392 | 0.69 | audience 8.29: +1,609 newly aware (word of mouth) | $6,784 | $4,749 | $2,035 |
| 13 | 2,328 | 0.69 | audience 8.29: +1,105 newly aware (word of mouth) | $4,656 | $3,259 | $1,397 |
| 14 | 1,598 | 0.69 | audience 8.29: +758 newly aware (word of mouth) | $3,196 | $2,237 | $959 |
| 15 | 0 | 0 | audience 8.29: +520 newly aware (word of mouth) | $0 | $0 | $0 |

**Progression trace**

- Prestige awards: Prestige +75: audience_7_5 (Broken Legacy).
- IP fans: {"before":0,"after":9309,"delta":9309}
- Star career: {"fameDelta":7.53,"relDelta":0.75,"grow":6,"level":1,"reasons":"worked together (+); project boosted their career (+)"}
- Distributor trust: Wolf Pictures earned 136% of its advance back on Broken Legacy with strong reviews (step 0.48)
- Rule labels: LOCKED = causal chain, accounting, fallback/no-campaign, thresholds 4.0/9.0, IP fan inheritance. WORKING ASSUMPTION = all formulas' shapes and numbers.

### Red Shadow — Action + Sports (new)

Released week 80 (year 1.5) · Distributor: Wolf Pictures · Star: Alex Sato (L8, Fame 94) · IP: Red Shadow
Joined the streaming catalog after its run (retention value only; no new payouts).

**Financial waterfall** [LOCKED rules; amounts provisional]

| Item | Amount |
|---|---:|
| Advance received (project reserve, not revenue) | $93,000 |
| Base cost (unavoidable) | −$60,000 |
| Star fee | −$17,993 |
| Marketing campaign | −$20,000 |
| Paid from studio cash (overrun) | $4,993 |
| **Unused advance kept at completion** | $0 |
| Gross from sales (15 weeks) | $410,008 |
| Distributor royalty (31% of weekly gross) | −$127,102 |
| **Studio take** | $282,906 |
| Net for this title (surplus + take − cash overrun; wages are studio-wide, excluded) | $277,912 |

**Quality trace** [scores are computed, never rolled]

Meters (0–100): Plot 76.01 · Writing 76.91 · Filming 79.17 · Editing 66.83
Inputs: staff points {"plot":139.93,"writing":147.09,"filming":134.1,"editing":85.56}, Star filming points 66 (Star family fit 100), studio Action level 0 (+0%), era bar x1.06
Base scores: Audience 7.4 / Critic 7.54 · no weak meter
Combo grades: Audience D (x0.9) / Critic C (x1) · repetition fatigue x1 · critic saturation x0.9
Before expectations (after combo, weakness, fatigue, saturation; pre-clamp): Audience 6.66 / Critic 6.79 · critic generation 0 (−0.0%, scale) · audience era 0 (−0.0%) · then clamp 0–10 (generation/era 0 = the ones active at game start)
**Final: Audience 6.66 / Critic 6.79 → avg 6.73**

**Opening & viewership trace** [marketing/Fame/reach affect viewers only]

Awareness inputs: base 0.35, marketing 0.55, studioBuzz 0, starFame 0.15, trend 0.1, ipFans 0 → awareness 0.68. Reach cap 264,000 → pool 180,408 → opening 54,122.

| Wk | Viewers | Retention | Driver | Gross | Studio | Distributor |
|---:|---:|---:|---|---:|---:|---:|
| 1 | 54,122 | 1 | opening (aware people watching) | $108,244 | $74,688 | $33,556 |
| 2 | 37,497 | 0.69 | critic 6.79: +3,591 newly aware (buzz) | $74,994 | $51,746 | $23,248 |
| 3 | 23,548 | 0.63 | critic 6.79: +4,088 newly aware (buzz) | $47,096 | $32,496 | $14,600 |
| 4 | 18,946 | 0.8 | audience 6.66: +15,636 newly aware (word of mouth) | $37,892 | $26,145 | $11,747 |
| 5 | 15,343 | 0.81 | audience 6.66: +12,580 newly aware (word of mouth) | $30,686 | $21,173 | $9,513 |
| 6 | 12,425 | 0.81 | audience 6.66: +10,188 newly aware (word of mouth) | $24,850 | $17,147 | $7,704 |
| 7 | 10,062 | 0.81 | audience 6.66: +8,250 newly aware (word of mouth) | $20,124 | $13,886 | $6,238 |
| 8 | 8,149 | 0.81 | audience 6.66: +6,681 newly aware (word of mouth) | $16,298 | $11,246 | $5,052 |
| 9 | 6,599 | 0.81 | audience 6.66: +5,411 newly aware (word of mouth) | $13,198 | $9,107 | $4,091 |
| 10 | 5,344 | 0.81 | audience 6.66: +4,382 newly aware (word of mouth) | $10,688 | $7,375 | $3,313 |
| 11 | 4,328 | 0.81 | audience 6.66: +3,548 newly aware (word of mouth) | $8,656 | $5,973 | $2,683 |
| 12 | 3,505 | 0.81 | audience 6.66: +2,874 newly aware (word of mouth) | $7,010 | $4,837 | $2,173 |
| 13 | 2,838 | 0.81 | audience 6.66: +2,327 newly aware (word of mouth) | $5,676 | $3,916 | $1,760 |
| 14 | 2,298 | 0.81 | audience 6.66: +1,884 newly aware (word of mouth) | $4,596 | $3,171 | $1,425 |
| 15 | 0 | 0 | audience 6.66: +1,526 newly aware (word of mouth) | $0 | $0 | $0 |

**Progression trace**

- Prestige awards: none (no milestone reached)
- IP fans: {"before":0,"after":5675,"delta":5675}
- Star career: {"fameDelta":5,"relDelta":0.75,"grow":0,"level":5,"reasons":"worked together (+); project boosted their career (+)"}
- Distributor trust: Wolf Pictures earned 137% of its advance back on Red Shadow (step 0.38)
- Rule labels: LOCKED = causal chain, accounting, fallback/no-campaign, thresholds 4.0/9.0, IP fan inheritance. WORKING ASSUMPTION = all formulas' shapes and numbers.

### Hollow Code — Comedy + Zombies (new)

Released week 96 (year 1.8) · Distributor: Orbit Releasing · Star: Dee Grant (L2, Fame 50) · IP: Hollow Code
Joined the streaming catalog after its run (retention value only; no new payouts).

**Financial waterfall** [LOCKED rules; amounts provisional]

| Item | Amount |
|---|---:|
| Advance received (project reserve, not revenue) | $87,000 |
| Base cost (unavoidable) | −$60,000 |
| Star fee | −$34,827 |
| Marketing campaign | −$20,000 |
| Paid from studio cash (overrun) | $27,827 |
| **Unused advance kept at completion** | $0 |
| Gross from sales (15 weeks) | $656,010 |
| Distributor royalty (36% of weekly gross) | −$236,164 |
| **Studio take** | $419,846 |
| Net for this title (surplus + take − cash overrun; wages are studio-wide, excluded) | $392,019 |

**Quality trace** [scores are computed, never rolled]

Meters (0–100): Plot 77.81 · Writing 78.81 · Filming 79.92 · Editing 68.55
Inputs: staff points {"plot":156.65,"writing":166.16,"filming":149.42,"editing":93.64}, Star filming points 62.52 (Star family fit 92), studio Comedy level 1 (+3%), era bar x1.07
Base scores: Audience 7.55 / Critic 7.71 · no weak meter
Combo grades: Audience A (x1.15) / Critic C (x1) · repetition fatigue x0.95 · critic saturation x0.9
Before expectations (after combo, weakness, fatigue, saturation; pre-clamp): Audience 8.24 / Critic 6.59 · critic generation 0 (−0.0%, scale) · audience era 0 (−0.0%) · then clamp 0–10 (generation/era 0 = the ones active at game start)
**Final: Audience 8.24 / Critic 6.59 → avg 7.42**

**Opening & viewership trace** [marketing/Fame/reach affect viewers only]

Awareness inputs: base 0.35, marketing 0.55, studioBuzz 0, starFame 0.25, trend 0.1, ipFans 0 → awareness 0.71. Reach cap 332,000 → pool 237,070 → opening 71,121.

| Wk | Viewers | Retention | Driver | Gross | Studio | Distributor |
|---:|---:|---:|---|---:|---:|---:|
| 1 | 71,121 | 1 | opening (aware people watching) | $142,242 | $91,035 | $51,207 |
| 2 | 48,467 | 0.68 | critic 6.59: +3,623 newly aware (buzz) | $96,934 | $62,038 | $34,896 |
| 3 | 30,213 | 0.62 | critic 6.59: +4,244 newly aware (buzz) | $60,426 | $38,673 | $21,753 |
| 4 | 33,000 | 1.09 | audience 8.24: +39,156 newly aware (word of mouth) | $66,000 | $42,240 | $23,760 |
| 5 | 33,826 | 1.03 | audience 8.24: +42,768 newly aware (word of mouth) | $67,652 | $43,297 | $24,355 |
| 6 | 34,672 | 1.03 | audience 8.24: +43,838 newly aware (word of mouth) | $69,344 | $44,380 | $24,964 |
| 7 | 25,422 | 0.73 | audience 8.24: +15,912 newly aware (word of mouth) | $50,844 | $32,540 | $18,304 |
| 8 | 17,283 | 0.68 | audience 8.24: +7,775 newly aware (word of mouth) | $34,566 | $22,122 | $12,444 |
| 9 | 11,894 | 0.69 | audience 8.24: +5,701 newly aware (word of mouth) | $23,788 | $15,224 | $8,564 |
| 10 | 8,169 | 0.69 | audience 8.24: +3,875 newly aware (word of mouth) | $16,338 | $10,456 | $5,882 |
| 11 | 5,613 | 0.69 | audience 8.24: +2,667 newly aware (word of mouth) | $11,226 | $7,185 | $4,041 |
| 12 | 3,856 | 0.69 | audience 8.24: +1,832 newly aware (word of mouth) | $7,712 | $4,936 | $2,776 |
| 13 | 2,649 | 0.69 | audience 8.24: +1,259 newly aware (word of mouth) | $5,298 | $3,391 | $1,907 |
| 14 | 1,820 | 0.69 | audience 8.24: +865 newly aware (word of mouth) | $3,640 | $2,330 | $1,310 |
| 15 | 0 | 0 | audience 8.24: +594 newly aware (word of mouth) | $0 | $0 | $0 |

**Progression trace**

- Prestige awards: Prestige +75: audience_7_5 (Hollow Code).
- IP fans: {"before":0,"after":12700,"delta":12700}
- Star career: {"fameDelta":8.3,"relDelta":0.75,"grow":6,"level":2,"reasons":"worked together (+); project boosted their career (+)"}
- Distributor trust: Orbit Releasing earned 271% of its advance back on Hollow Code with strong reviews (step 0.75)
- Rule labels: LOCKED = causal chain, accounting, fallback/no-campaign, thresholds 4.0/9.0, IP fan inheritance. WORKING ASSUMPTION = all formulas' shapes and numbers.

### Hollow Edge — Comedy + Spies (new)

Released week 112 (year 2.2) · Distributor: Orbit Releasing · Star: Kai Moreau (L6, Fame 73) · IP: Hollow Edge
Joined the streaming catalog after its run (retention value only; no new payouts).

**Financial waterfall** [LOCKED rules; amounts provisional]

| Item | Amount |
|---|---:|
| Advance received (project reserve, not revenue) | $73,000 |
| Base cost (unavoidable) | −$60,000 |
| Star fee | −$21,206 |
| Marketing campaign | −$20,000 |
| Paid from studio cash (overrun) | $28,206 |
| **Unused advance kept at completion** | $0 |
| Gross from sales (15 weeks) | $655,278 |
| Distributor royalty (36% of weekly gross) | −$235,900 |
| **Studio take** | $419,378 |
| Net for this title (surplus + take − cash overrun; wages are studio-wide, excluded) | $391,171 |

**Quality trace** [scores are computed, never rolled]

Meters (0–100): Plot 79.24 · Writing 80.35 · Filming 81.6 · Editing 71.11
Inputs: staff points {"plot":172.42,"writing":184.81,"filming":168.99,"editing":106.94}, Star filming points 69.96 (Star family fit 100), studio Comedy level 2 (+6%), era bar x1.09
Base scores: Audience 7.74 / Critic 7.88 · no weak meter
Combo grades: Audience C (x1) / Critic F (x0.78) · repetition fatigue x1 · critic saturation x1
Before expectations (after combo, weakness, fatigue, saturation; pre-clamp): Audience 7.74 / Critic 6.14 · critic generation 0 (−0.0%, scale) · audience era 0 (−0.0%) · then clamp 0–10 (generation/era 0 = the ones active at game start)
**Final: Audience 7.74 / Critic 6.14 → avg 6.94**

**Opening & viewership trace** [marketing/Fame/reach affect viewers only]

Awareness inputs: base 0.35, marketing 0.55, studioBuzz 0, starFame 0.17, trend 0.4, ipFans 0 → awareness 0.77. Reach cap 332,000 → pool 255,969 → opening 76,791.

| Wk | Viewers | Retention | Driver | Gross | Studio | Distributor |
|---:|---:|---:|---|---:|---:|---:|
| 1 | 76,791 | 1 | opening (aware people watching) | $153,582 | $98,292 | $55,290 |
| 2 | 50,659 | 0.66 | critic 6.14: +2,080 newly aware (buzz) | $101,318 | $64,844 | $36,474 |
| 3 | 31,272 | 0.62 | critic 6.14: +2,612 newly aware (buzz) | $62,544 | $40,028 | $22,516 |
| 4 | 31,906 | 1.02 | audience 7.74: +34,274 newly aware (word of mouth) | $63,812 | $40,840 | $22,972 |
| 5 | 30,428 | 0.95 | audience 7.74: +34,969 newly aware (word of mouth) | $60,856 | $38,948 | $21,908 |
| 6 | 29,018 | 0.95 | audience 7.74: +33,349 newly aware (word of mouth) | $58,036 | $37,143 | $20,893 |
| 7 | 25,651 | 0.88 | audience 7.74: +25,871 newly aware (word of mouth) | $51,302 | $32,833 | $18,469 |
| 8 | 17,167 | 0.67 | audience 7.74: +6,727 newly aware (word of mouth) | $34,334 | $21,974 | $12,360 |
| 9 | 11,982 | 0.7 | audience 7.74: +5,946 newly aware (word of mouth) | $23,964 | $15,337 | $8,627 |
| 10 | 8,305 | 0.69 | audience 7.74: +3,979 newly aware (word of mouth) | $16,610 | $10,630 | $5,980 |
| 11 | 5,763 | 0.69 | audience 7.74: +2,778 newly aware (word of mouth) | $11,526 | $7,377 | $4,149 |
| 12 | 3,998 | 0.69 | audience 7.74: +1,925 newly aware (word of mouth) | $7,996 | $5,117 | $2,879 |
| 13 | 2,774 | 0.69 | audience 7.74: +1,336 newly aware (word of mouth) | $5,548 | $3,551 | $1,997 |
| 14 | 1,925 | 0.69 | audience 7.74: +927 newly aware (word of mouth) | $3,850 | $2,464 | $1,386 |
| 15 | 0 | 0 | audience 7.74: +643 newly aware (word of mouth) | $0 | $0 | $0 |

**Progression trace**

- Prestige awards: Prestige +50: meters_all_70 (Hollow Edge).; Prestige +75: audience_7_5 (Hollow Edge).
- IP fans: {"before":0,"after":10170,"delta":10170}
- Star career: {"fameDelta":6.65,"relDelta":0.75,"grow":0,"level":4,"reasons":"worked together (+); project boosted their career (+)"}
- Distributor trust: Orbit Releasing earned 323% of its advance back on Hollow Edge (step 0.75)
- Rule labels: LOCKED = causal chain, accounting, fallback/no-campaign, thresholds 4.0/9.0, IP fan inheritance. WORKING ASSUMPTION = all formulas' shapes and numbers.

### Iron Legacy — Action + Spies (new)

Released week 128 (year 2.5) · Distributor: XYZ Network · Star: Alex Sato (L8, Fame 94) · IP: Iron Legacy
Joined the streaming catalog after its run (retention value only; no new payouts).

**Financial waterfall** [LOCKED rules; amounts provisional]

| Item | Amount |
|---|---:|
| Advance received (project reserve, not revenue) | $113,000 |
| Base cost (unavoidable) | −$60,000 |
| Star fee | −$20,758 |
| Marketing campaign | −$20,000 |
| Paid from studio cash (overrun) | $0 |
| **Unused advance kept at completion** | $12,242 |
| Gross from sales (15 weeks) | $746,124 |
| Distributor royalty (43% of weekly gross) | −$320,833 |
| **Studio take** | $425,291 |
| Net for this title (surplus + take − cash overrun; wages are studio-wide, excluded) | $437,532 |

**Quality trace** [scores are computed, never rolled]

Meters (0–100): Plot 83.71 · Writing 84.24 · Filming 83.71 · Editing 76.57
Inputs: staff points {"plot":234.83,"writing":244.3,"filming":211.95,"editing":143.61}, Star filming points 67.98 (Star family fit 100), studio Action level 1 (+3%), era bar x1.1
Base scores: Audience 8.13 / Critic 8.28 · no weak meter
Combo grades: Audience B (x1.06) / Critic B (x1.06) · repetition fatigue x1 · critic saturation x1
Before expectations (after combo, weakness, fatigue, saturation; pre-clamp): Audience 8.62 / Critic 8.78 · critic generation 0 (−0.0%, scale) · audience era 0 (−0.0%) · then clamp 0–10 (generation/era 0 = the ones active at game start)
**Final: Audience 8.62 / Critic 8.78 → avg 8.7**

**Opening & viewership trace** [marketing/Fame/reach affect viewers only]

Awareness inputs: base 0.35, marketing 0.55, studioBuzz 0, starFame 0.18, trend 0.4, ipFans 0 → awareness 0.77. Reach cap 376,000 → pool 290,408 → opening 87,122.

| Wk | Viewers | Retention | Driver | Gross | Studio | Distributor |
|---:|---:|---:|---|---:|---:|---:|
| 1 | 87,122 | 1 | opening (aware people watching) | $174,244 | $99,319 | $74,925 |
| 2 | 66,580 | 0.76 | critic 8.78: +7,765 newly aware (buzz) | $133,160 | $75,901 | $57,259 |
| 3 | 40,999 | 0.62 | critic 8.78: +9,274 newly aware (buzz) | $81,998 | $46,739 | $35,259 |
| 4 | 44,087 | 1.08 | audience 8.62: +59,367 newly aware (word of mouth) | $88,174 | $50,259 | $37,915 |
| 5 | 45,198 | 1.03 | audience 8.62: +56,864 newly aware (word of mouth) | $90,396 | $51,526 | $38,870 |
| 6 | 29,098 | 0.64 | audience 8.62: +9,642 newly aware (word of mouth) | $58,196 | $33,172 | $25,024 |
| 7 | 20,036 | 0.69 | audience 8.62: +9,885 newly aware (word of mouth) | $40,072 | $22,841 | $17,231 |
| 8 | 13,640 | 0.68 | audience 8.62: +6,364 newly aware (word of mouth) | $27,280 | $15,550 | $11,730 |
| 9 | 9,303 | 0.68 | audience 8.62: +4,382 newly aware (word of mouth) | $18,606 | $10,605 | $8,001 |
| 10 | 6,343 | 0.68 | audience 8.62: +2,983 newly aware (word of mouth) | $12,686 | $7,231 | $5,455 |
| 11 | 4,325 | 0.68 | audience 8.62: +2,034 newly aware (word of mouth) | $8,650 | $4,931 | $3,720 |
| 12 | 2,949 | 0.68 | audience 8.62: +1,387 newly aware (word of mouth) | $5,898 | $3,362 | $2,536 |
| 13 | 2,011 | 0.68 | audience 8.62: +946 newly aware (word of mouth) | $4,022 | $2,293 | $1,729 |
| 14 | 1,371 | 0.68 | audience 8.62: +645 newly aware (word of mouth) | $2,742 | $1,563 | $1,179 |
| 15 | 0 | 0 | audience 8.62: +440 newly aware (word of mouth) | $0 | $0 | $0 |

**Progression trace**

- Prestige awards: Prestige +50: meters_all_70 (Iron Legacy).; Prestige +75: audience_7_5 (Iron Legacy).; Prestige +85: critic_8_5 (Iron Legacy).
- IP fans: {"before":0,"after":22085,"delta":22085}
- Star career: {"fameDelta":13.19,"relDelta":0.75,"grow":0,"level":6,"reasons":"worked together (+); project boosted their career (+)"}
- Distributor trust: XYZ Network earned 284% of its advance back on Iron Legacy with strong reviews (step 0.75)
- Rule labels: LOCKED = causal chain, accounting, fallback/no-campaign, thresholds 4.0/9.0, IP fan inheritance. WORKING ASSUMPTION = all formulas' shapes and numbers.

### Last Edge — Action + Spies (new)

Released week 144 (year 2.8) · Distributor: XYZ Network · Star: Alex Sato (L8, Fame 94) · IP: Last Edge
Joined the streaming catalog after its run (retention value only; no new payouts).

**Financial waterfall** [LOCKED rules; amounts provisional]

| Item | Amount |
|---|---:|
| Advance received (project reserve, not revenue) | $121,000 |
| Base cost (unavoidable) | −$60,000 |
| Star fee | −$20,263 |
| Marketing campaign | −$20,000 |
| Paid from studio cash (overrun) | $0 |
| **Unused advance kept at completion** | $20,737 |
| Gross from sales (15 weeks) | $743,840 |
| Distributor royalty (43% of weekly gross) | −$319,851 |
| **Studio take** | $423,989 |
| Net for this title (surplus + take − cash overrun; wages are studio-wide, excluded) | $444,725 |

**Quality trace** [scores are computed, never rolled]

Meters (0–100): Plot 84.54 · Writing 85.16 · Filming 84.31 · Editing 77.62
Inputs: staff points {"plot":252.74,"writing":265.24,"filming":228.13,"editing":154.08}, Star filming points 67.98 (Star family fit 100), studio Action level 1 (+3%), era bar x1.11
Base scores: Audience 8.21 / Critic 8.37 · no weak meter
Combo grades: Audience B (x1.06) / Critic B (x1.06) · repetition fatigue x0.95 · critic saturation x0.9
Before expectations (after combo, weakness, fatigue, saturation; pre-clamp): Audience 8.27 / Critic 7.58 · critic generation 0 (−0.0%, scale) · audience era 0 (−0.0%) · then clamp 0–10 (generation/era 0 = the ones active at game start)
**Final: Audience 8.27 / Critic 7.58 → avg 7.93**

**Opening & viewership trace** [marketing/Fame/reach affect viewers only]

Awareness inputs: base 0.35, marketing 0.55, studioBuzz 0, starFame 0.26, trend 0.1, ipFans 0 → awareness 0.72. Reach cap 376,000 → pool 269,254 → opening 80,776.

| Wk | Viewers | Retention | Driver | Gross | Studio | Distributor |
|---:|---:|---:|---|---:|---:|---:|
| 1 | 80,776 | 1 | opening (aware people watching) | $161,552 | $92,085 | $69,467 |
| 2 | 58,416 | 0.72 | critic 7.58: +6,610 newly aware (buzz) | $116,832 | $66,594 | $50,238 |
| 3 | 36,569 | 0.63 | critic 7.58: +7,601 newly aware (buzz) | $73,138 | $41,689 | $31,449 |
| 4 | 38,627 | 1.06 | audience 8.27: +47,832 newly aware (word of mouth) | $77,254 | $44,035 | $33,219 |
| 5 | 39,763 | 1.03 | audience 8.27: +50,524 newly aware (word of mouth) | $79,526 | $45,330 | $34,196 |
| 6 | 39,425 | 0.99 | audience 8.27: +47,695 newly aware (word of mouth) | $78,850 | $44,945 | $33,906 |
| 7 | 25,690 | 0.65 | audience 8.27: +8,898 newly aware (word of mouth) | $51,380 | $29,287 | $22,093 |
| 8 | 17,796 | 0.69 | audience 8.27: +8,823 newly aware (word of mouth) | $35,592 | $20,287 | $15,305 |
| 9 | 12,201 | 0.69 | audience 8.27: +5,749 newly aware (word of mouth) | $24,402 | $13,909 | $10,493 |
| 10 | 8,379 | 0.69 | audience 8.27: +3,983 newly aware (word of mouth) | $16,758 | $9,552 | $7,206 |
| 11 | 5,753 | 0.69 | audience 8.27: +2,731 newly aware (word of mouth) | $11,506 | $6,558 | $4,948 |
| 12 | 3,950 | 0.69 | audience 8.27: +1,875 newly aware (word of mouth) | $7,900 | $4,503 | $3,397 |
| 13 | 2,712 | 0.69 | audience 8.27: +1,288 newly aware (word of mouth) | $5,424 | $3,092 | $2,332 |
| 14 | 1,863 | 0.69 | audience 8.27: +884 newly aware (word of mouth) | $3,726 | $2,124 | $1,602 |
| 15 | 0 | 0 | audience 8.27: +607 newly aware (word of mouth) | $0 | $0 | $0 |

**Progression trace**

- Prestige awards: Prestige +50: meters_all_70 (Last Edge).; Prestige +75: audience_7_5 (Last Edge).
- IP fans: {"before":0,"after":17436,"delta":17436}
- Star career: {"fameDelta":10.44,"relDelta":0.75,"grow":0,"level":6,"reasons":"worked together (+); project boosted their career (+)"}
- Distributor trust: XYZ Network earned 264% of its advance back on Last Edge with strong reviews (step 0.75)
- Rule labels: LOCKED = causal chain, accounting, fallback/no-campaign, thresholds 4.0/9.0, IP fan inheritance. WORKING ASSUMPTION = all formulas' shapes and numbers.

### Hollow Legacy — Horror + Superheroes (new)

Released week 160 (year 3.1) · Distributor: Meridian Global · Star: Sam Imai (L7, Fame 86) · IP: Hollow Legacy
Joined the streaming catalog after its run (retention value only; no new payouts).

**Financial waterfall** [LOCKED rules; amounts provisional]

| Item | Amount |
|---|---:|
| Advance received (project reserve, not revenue) | $97,000 |
| Base cost (unavoidable) | −$60,000 |
| Star fee | −$39,919 |
| Marketing campaign | −$20,000 |
| Paid from studio cash (overrun) | $22,919 |
| **Unused advance kept at completion** | $0 |
| Gross from sales (15 weeks) | $790,146 |
| Distributor royalty (50% of weekly gross) | −$395,073 |
| **Studio take** | $395,073 |
| Net for this title (surplus + take − cash overrun; wages are studio-wide, excluded) | $372,154 |

**Quality trace** [scores are computed, never rolled]

Meters (0–100): Plot 85.16 · Writing 85.84 · Filming 84.82 · Editing 78.24
Inputs: staff points {"plot":268,"writing":283.12,"filming":243.38,"editing":161.48}, Star filming points 67.98 (Star family fit 100), studio Horror level 1 (+3%), era bar x1.12
Base scores: Audience 8.27 / Critic 8.43 · no weak meter
Combo grades: Audience D (x0.9) / Critic D (x0.9) · repetition fatigue x1 · critic saturation x1
Before expectations (after combo, weakness, fatigue, saturation; pre-clamp): Audience 7.44 / Critic 7.59 · critic generation 0 (−0.0%, scale) · audience era 0 (−0.0%) · then clamp 0–10 (generation/era 0 = the ones active at game start)
**Final: Audience 7.44 / Critic 7.59 → avg 7.52**

**Opening & viewership trace** [marketing/Fame/reach affect viewers only]

Awareness inputs: base 0.35, marketing 0.55, studioBuzz 0, starFame 0.32, trend 0.4, ipFans 0 → awareness 0.8. Reach cap 400,000 → pool 321,081 → opening 96,324.

| Wk | Viewers | Retention | Driver | Gross | Studio | Distributor |
|---:|---:|---:|---|---:|---:|---:|
| 1 | 96,324 | 1 | opening (aware people watching) | $192,648 | $96,324 | $96,324 |
| 2 | 68,682 | 0.71 | critic 7.59: +4,906 newly aware (buzz) | $137,364 | $68,682 | $68,682 |
| 3 | 42,087 | 0.61 | critic 7.59: +6,277 newly aware (buzz) | $84,174 | $42,087 | $42,087 |
| 4 | 38,151 | 0.91 | audience 7.44: +41,077 newly aware (word of mouth) | $76,302 | $38,151 | $38,151 |
| 5 | 34,805 | 0.91 | audience 7.44: +37,235 newly aware (word of mouth) | $69,610 | $34,805 | $34,805 |
| 6 | 31,753 | 0.91 | audience 7.44: +33,970 newly aware (word of mouth) | $63,506 | $31,753 | $31,753 |
| 7 | 27,160 | 0.86 | audience 7.44: +25,615 newly aware (word of mouth) | $54,320 | $27,160 | $27,160 |
| 8 | 18,383 | 0.68 | audience 7.44: +7,510 newly aware (word of mouth) | $36,766 | $18,383 | $18,383 |
| 9 | 12,894 | 0.7 | audience 7.44: +6,423 newly aware (word of mouth) | $25,788 | $12,894 | $12,894 |
| 10 | 8,991 | 0.7 | audience 7.44: +4,348 newly aware (word of mouth) | $17,982 | $8,991 | $8,991 |
| 11 | 6,275 | 0.7 | audience 7.44: +3,050 newly aware (word of mouth) | $12,550 | $6,275 | $6,275 |
| 12 | 4,379 | 0.7 | audience 7.44: +2,126 newly aware (word of mouth) | $8,758 | $4,379 | $4,379 |
| 13 | 3,056 | 0.7 | audience 7.44: +1,484 newly aware (word of mouth) | $6,112 | $3,056 | $3,056 |
| 14 | 2,133 | 0.7 | audience 7.44: +1,036 newly aware (word of mouth) | $4,266 | $2,133 | $2,133 |
| 15 | 0 | 0 | audience 7.44: +723 newly aware (word of mouth) | $0 | $0 | $0 |

**Progression trace**

- Prestige awards: Prestige +50: meters_all_70 (Hollow Legacy).
- IP fans: {"before":0,"after":15929,"delta":15929}
- Star career: {"fameDelta":9.13,"relDelta":0.75,"grow":0,"level":6,"reasons":"worked together (+); project boosted their career (+)"}
- Distributor trust: Meridian Global earned 407% of its advance back on Hollow Legacy with strong reviews (step 0.75)
- Rule labels: LOCKED = causal chain, accounting, fallback/no-campaign, thresholds 4.0/9.0, IP fan inheritance. WORKING ASSUMPTION = all formulas' shapes and numbers.

### Last Protocol — Action + Superheroes (new)

Released week 176 (year 3.4) · Distributor: XYZ Network · Star: Alex Sato (L8, Fame 94) · IP: Last Protocol
Joined the streaming catalog after its run (retention value only; no new payouts).

**Financial waterfall** [LOCKED rules; amounts provisional]

| Item | Amount |
|---|---:|
| Advance received (project reserve, not revenue) | $141,000 |
| Base cost (unavoidable) | −$60,000 |
| Star fee | −$37,763 |
| Marketing campaign | −$20,000 |
| Paid from studio cash (overrun) | $0 |
| **Unused advance kept at completion** | $23,237 |
| Gross from sales (15 weeks) | $747,686 |
| Distributor royalty (41% of weekly gross) | −$306,551 |
| **Studio take** | $441,135 |
| Net for this title (surplus + take − cash overrun; wages are studio-wide, excluded) | $464,372 |

**Quality trace** [scores are computed, never rolled]

Meters (0–100): Plot 86.26 · Writing 86.97 · Filming 85.78 · Editing 79.71
Inputs: staff points {"plot":296.43,"writing":315.23,"filming":269.75,"editing":178.42}, Star filming points 69.96 (Star family fit 100), studio Action level 2 (+6%), era bar x1.14
Base scores: Audience 8.39 / Critic 8.55 · no weak meter
Combo grades: Audience A (x1.15) / Critic C (x1) · repetition fatigue x1 · critic saturation x1
Before expectations (after combo, weakness, fatigue, saturation; pre-clamp): Audience 9.65 / Critic 8.55 · critic generation 0 (−0.0%, scale) · audience era 0 (−0.0%) · then clamp 0–10 (generation/era 0 = the ones active at game start)
**Final: Audience 9.65 / Critic 8.55 → avg 9.1 (HALL OF FAME)**

**Opening & viewership trace** [marketing/Fame/reach affect viewers only]

Awareness inputs: base 0.35, marketing 0.55, studioBuzz 0, starFame 0.32, trend 0.4, ipFans 0 → awareness 0.8. Reach cap 376,000 → pool 301,722 → opening 90,517.

| Wk | Viewers | Retention | Driver | Gross | Studio | Distributor |
|---:|---:|---:|---|---:|---:|---:|
| 1 | 90,517 | 1 | opening (aware people watching) | $181,034 | $106,810 | $74,224 |
| 2 | 67,891 | 0.75 | critic 8.55: +6,328 newly aware (buzz) | $135,782 | $80,111 | $55,671 |
| 3 | 41,447 | 0.61 | critic 8.55: +7,949 newly aware (buzz) | $82,894 | $48,907 | $33,987 |
| 4 | 53,196 | 1.28 | audience 9.65: +77,091 newly aware (word of mouth) | $106,392 | $62,771 | $43,621 |
| 5 | 41,437 | 0.78 | audience 9.65: +32,276 newly aware (word of mouth) | $82,874 | $48,896 | $33,978 |
| 6 | 27,005 | 0.65 | audience 9.65: +10,881 newly aware (word of mouth) | $54,010 | $31,866 | $22,144 |
| 7 | 18,112 | 0.67 | audience 9.65: +8,476 newly aware (word of mouth) | $36,224 | $21,372 | $14,852 |
| 8 | 12,087 | 0.67 | audience 9.65: +5,524 newly aware (word of mouth) | $24,174 | $14,263 | $9,911 |
| 9 | 8,074 | 0.67 | audience 9.65: +3,705 newly aware (word of mouth) | $16,148 | $9,527 | $6,621 |
| 10 | 5,392 | 0.67 | audience 9.65: +2,472 newly aware (word of mouth) | $10,784 | $6,363 | $4,421 |
| 11 | 3,601 | 0.67 | audience 9.65: +1,651 newly aware (word of mouth) | $7,202 | $4,249 | $2,953 |
| 12 | 2,405 | 0.67 | audience 9.65: +1,103 newly aware (word of mouth) | $4,810 | $2,838 | $1,972 |
| 13 | 1,606 | 0.67 | audience 9.65: +737 newly aware (word of mouth) | $3,212 | $1,895 | $1,317 |
| 14 | 1,073 | 0.67 | audience 9.65: +492 newly aware (word of mouth) | $2,146 | $1,266 | $880 |
| 15 | 0 | 0 | audience 9.65: +329 newly aware (word of mouth) | $0 | $0 | $0 |

**Progression trace**

- Prestige awards: Prestige +50: meters_all_70 (Last Protocol).; Prestige +75: audience_7_5 (Last Protocol).; Prestige +85: critic_8_5 (Last Protocol).; Prestige +200: hall_of_fame (Last Protocol).; Prestige +100: first_hall_of_fame (Last Protocol).
- IP fans: {"before":0,"after":24524,"delta":24524}
- Star career: {"fameDelta":14.63,"relDelta":0.75,"grow":0,"level":7,"reasons":"worked together (+); project boosted their career (+)"}
- Distributor trust: XYZ Network earned 217% of its advance back on Last Protocol with strong reviews (step 0.75)
- Rule labels: LOCKED = causal chain, accounting, fallback/no-campaign, thresholds 4.0/9.0, IP fan inheritance. WORKING ASSUMPTION = all formulas' shapes and numbers.

### Silver Code — Action + Superheroes (new)

Released week 192 (year 3.7) · Distributor: Meridian Global · Star: Alex Sato (L8, Fame 94) · IP: Silver Code
Joined the streaming catalog after its run (retention value only; no new payouts).

**Financial waterfall** [LOCKED rules; amounts provisional]

| Item | Amount |
|---|---:|
| Advance received (project reserve, not revenue) | $138,000 |
| Base cost (unavoidable) | −$60,000 |
| Star fee | −$36,253 |
| Marketing campaign | −$20,000 |
| Paid from studio cash (overrun) | $0 |
| **Unused advance kept at completion** | $21,747 |
| Gross from sales (15 weeks) | $874,640 |
| Distributor royalty (47% of weekly gross) | −$411,081 |
| **Studio take** | $463,559 |
| Net for this title (surplus + take − cash overrun; wages are studio-wide, excluded) | $485,306 |

**Quality trace** [scores are computed, never rolled]

Meters (0–100): Plot 87.84 · Writing 88.61 · Filming 86.73 · Editing 82.1
Inputs: staff points {"plot":344.95,"writing":371.53,"filming":301.94,"editing":210.61}, Star filming points 69.96 (Star family fit 100), studio Action level 2 (+6%), era bar x1.15
Base scores: Audience 8.56 / Critic 8.71 · no weak meter
Combo grades: Audience A (x1.15) / Critic C (x1) · repetition fatigue x0.95 · critic saturation x1
Before expectations (after combo, weakness, fatigue, saturation; pre-clamp): Audience 9.35 / Critic 8.27 · critic generation 0 (−0.0%, scale) · audience era 0 (−0.0%) · then clamp 0–10 (generation/era 0 = the ones active at game start)
**Final: Audience 9.35 / Critic 8.27 → avg 8.81**

**Opening & viewership trace** [marketing/Fame/reach affect viewers only]

Awareness inputs: base 0.35, marketing 0.55, studioBuzz 0, starFame 0.41, trend 0.4, ipFans 0 → awareness 0.82. Reach cap 440,000 → pool 360,384 → opening 108,115.

| Wk | Viewers | Retention | Driver | Gross | Studio | Distributor |
|---:|---:|---:|---|---:|---:|---:|
| 1 | 108,115 | 1 | opening (aware people watching) | $216,230 | $114,602 | $101,628 |
| 2 | 79,669 | 0.74 | critic 8.27: +6,248 newly aware (buzz) | $159,338 | $84,449 | $74,889 |
| 3 | 48,476 | 0.61 | critic 8.27: +8,134 newly aware (buzz) | $96,952 | $51,385 | $45,567 |
| 4 | 59,866 | 1.23 | audience 9.35: +84,348 newly aware (word of mouth) | $119,732 | $63,458 | $56,274 |
| 5 | 47,990 | 0.8 | audience 9.35: +39,836 newly aware (word of mouth) | $95,980 | $50,869 | $45,111 |
| 6 | 31,366 | 0.65 | audience 9.35: +12,485 newly aware (word of mouth) | $62,732 | $33,248 | $29,484 |
| 7 | 21,176 | 0.68 | audience 9.35: +10,008 newly aware (word of mouth) | $42,352 | $22,447 | $19,905 |
| 8 | 14,218 | 0.67 | audience 9.35: +6,541 newly aware (word of mouth) | $28,436 | $15,071 | $13,365 |
| 9 | 9,555 | 0.67 | audience 9.35: +4,416 newly aware (word of mouth) | $19,110 | $10,128 | $8,982 |
| 10 | 6,420 | 0.67 | audience 9.35: +2,965 newly aware (word of mouth) | $12,840 | $6,805 | $6,035 |
| 11 | 4,314 | 0.67 | audience 9.35: +1,992 newly aware (word of mouth) | $8,628 | $4,573 | $4,055 |
| 12 | 2,898 | 0.67 | audience 9.35: +1,339 newly aware (word of mouth) | $5,796 | $3,072 | $2,724 |
| 13 | 1,948 | 0.67 | audience 9.35: +900 newly aware (word of mouth) | $3,896 | $2,065 | $1,831 |
| 14 | 1,309 | 0.67 | audience 9.35: +604 newly aware (word of mouth) | $2,618 | $1,388 | $1,230 |
| 15 | 0 | 0 | audience 9.35: +406 newly aware (word of mouth) | $0 | $0 | $0 |

**Progression trace**

- Prestige awards: Prestige +50: meters_all_70 (Silver Code).; Prestige +75: audience_7_5 (Silver Code).
- IP fans: {"before":0,"after":26659,"delta":26659}
- Star career: {"fameDelta":14.18,"relDelta":0.75,"grow":0,"level":7,"reasons":"worked together (+); project boosted their career (+)"}
- Distributor trust: Meridian Global earned 298% of its advance back on Silver Code with strong reviews (step 0.75)
- Rule labels: LOCKED = causal chain, accounting, fallback/no-campaign, thresholds 4.0/9.0, IP fan inheritance. WORKING ASSUMPTION = all formulas' shapes and numbers.

### Wild Horizon — Action + Superheroes (new)

Released week 208 (year 4.0) · Distributor: Orbit Releasing · Star: Fin Fox (L10, Fame 100) · IP: Wild Horizon
Joined the streaming catalog after its run (retention value only; no new payouts).

**Financial waterfall** [LOCKED rules; amounts provisional]

| Item | Amount |
|---|---:|
| Advance received (project reserve, not revenue) | $95,000 |
| Base cost (unavoidable) | −$60,000 |
| Star fee | −$7,712 |
| Marketing campaign | −$20,000 |
| Paid from studio cash (overrun) | $0 |
| **Unused advance kept at completion** | $7,288 |
| Gross from sales (15 weeks) | $593,740 |
| Distributor royalty (33% of weekly gross) | −$195,934 |
| **Studio take** | $397,806 |
| Net for this title (surplus + take − cash overrun; wages are studio-wide, excluded) | $405,093 |

**Quality trace** [scores are computed, never rolled]

Meters (0–100): Plot 88.35 · Writing 89.13 · Filming 87.11 · Editing 82.64
Inputs: staff points {"plot":365.94,"writing":395.48,"filming":321.68,"editing":220.84}, Star filming points 67.14 (Star family fit 96), studio Action level 2 (+6%), era bar x1.16
Base scores: Audience 8.6 / Critic 8.76 · no weak meter
Combo grades: Audience A (x1.15) / Critic C (x1) · repetition fatigue x0.9 · critic saturation x0.9
Before expectations (after combo, weakness, fatigue, saturation; pre-clamp): Audience 8.9 / Critic 7.09 · critic generation 0 (−0.0%, scale) · audience era 0 (−0.0%) · then clamp 0–10 (generation/era 0 = the ones active at game start)
**Final: Audience 8.9 / Critic 7.09 → avg 8**

**Opening & viewership trace** [marketing/Fame/reach affect viewers only]

Awareness inputs: base 0.35, marketing 0.55, studioBuzz 0, starFame 0.07, trend 0.1, ipFans 0 → awareness 0.66. Reach cap 300,000 → pool 197,303 → opening 59,191.

| Wk | Viewers | Retention | Driver | Gross | Studio | Distributor |
|---:|---:|---:|---|---:|---:|---:|
| 1 | 59,191 | 1 | opening (aware people watching) | $118,382 | $79,316 | $39,066 |
| 2 | 41,979 | 0.71 | critic 7.09: +5,151 newly aware (buzz) | $83,958 | $56,252 | $27,706 |
| 3 | 26,597 | 0.63 | critic 7.09: +5,724 newly aware (buzz) | $53,194 | $35,640 | $17,554 |
| 4 | 31,807 | 1.2 | audience 8.9: +41,491 newly aware (word of mouth) | $63,614 | $42,621 | $20,993 |
| 5 | 35,744 | 1.12 | audience 8.9: +49,619 newly aware (word of mouth) | $71,488 | $47,897 | $23,591 |
| 6 | 34,777 | 0.97 | audience 8.9: +40,721 newly aware (word of mouth) | $69,554 | $46,601 | $22,953 |
| 7 | 22,384 | 0.64 | audience 8.9: +7,675 newly aware (word of mouth) | $44,768 | $29,995 | $14,773 |
| 8 | 15,313 | 0.68 | audience 8.9: +7,468 newly aware (word of mouth) | $30,626 | $20,519 | $10,107 |
| 9 | 10,368 | 0.68 | audience 8.9: +4,806 newly aware (word of mouth) | $20,736 | $13,893 | $6,843 |
| 10 | 7,032 | 0.68 | audience 8.9: +3,288 newly aware (word of mouth) | $14,064 | $9,423 | $4,641 |
| 11 | 4,767 | 0.68 | audience 8.9: +2,226 newly aware (word of mouth) | $9,534 | $6,388 | $3,146 |
| 12 | 3,233 | 0.68 | audience 8.9: +1,510 newly aware (word of mouth) | $6,466 | $4,332 | $2,134 |
| 13 | 2,192 | 0.68 | audience 8.9: +1,024 newly aware (word of mouth) | $4,384 | $2,937 | $1,447 |
| 14 | 1,486 | 0.68 | audience 8.9: +694 newly aware (word of mouth) | $2,972 | $1,991 | $981 |
| 15 | 0 | 0 | audience 8.9: +471 newly aware (word of mouth) | $0 | $0 | $0 |

**Progression trace**

- Prestige awards: Prestige +50: meters_all_70 (Wild Horizon).; Prestige +75: audience_7_5 (Wild Horizon).
- IP fans: {"before":0,"after":14250,"delta":14250}
- Star career: {"fameDelta":9.96,"relDelta":0.75,"grow":4,"level":6,"reasons":"worked together (+); project boosted their career (+)"}
- Distributor trust: Orbit Releasing earned 206% of its advance back on Wild Horizon with strong reviews (step 0.75)
- Rule labels: LOCKED = causal chain, accounting, fallback/no-campaign, thresholds 4.0/9.0, IP fan inheritance. WORKING ASSUMPTION = all formulas' shapes and numbers.

### Red Night — Comedy + Zombies (new)

Released week 224 (year 4.3) · Distributor: XYZ Network · Star: Fin Fox (L10, Fame 100) · IP: Red Night
Joined the streaming catalog after its run (retention value only; no new payouts).

**Financial waterfall** [LOCKED rules; amounts provisional]

| Item | Amount |
|---|---:|
| Advance received (project reserve, not revenue) | $151,000 |
| Base cost (unavoidable) | −$60,000 |
| Star fee | −$7,704 |
| Marketing campaign | −$20,000 |
| Paid from studio cash (overrun) | $0 |
| **Unused advance kept at completion** | $63,296 |
| Gross from sales (15 weeks) | $746,254 |
| Distributor royalty (39% of weekly gross) | −$291,039 |
| **Studio take** | $455,215 |
| Net for this title (surplus + take − cash overrun; wages are studio-wide, excluded) | $518,511 |

**Quality trace** [scores are computed, never rolled]

Meters (0–100): Plot 88.62 · Writing 89.43 · Filming 87.56 · Editing 83.06
Inputs: staff points {"plot":379.92,"writing":412.43,"filming":339.32,"editing":229.99}, Star filming points 69.96 (Star family fit 100), studio Comedy level 2 (+6%), era bar x1.17
Base scores: Audience 8.64 / Critic 8.79 · no weak meter
Combo grades: Audience A (x1.15) / Critic C (x1) · repetition fatigue x0.9 · critic saturation x1
Before expectations (after combo, weakness, fatigue, saturation; pre-clamp): Audience 8.94 / Critic 7.91 · critic generation 0 (−0.0%, scale) · audience era 0 (−0.0%) · then clamp 0–10 (generation/era 0 = the ones active at game start)
**Final: Audience 8.94 / Critic 7.91 → avg 8.43**

**Opening & viewership trace** [marketing/Fame/reach affect viewers only]

Awareness inputs: base 0.35, marketing 0.55, studioBuzz 0, starFame 0.13, trend 0.4, ipFans 0 → awareness 0.76. Reach cap 376,000 → pool 286,178 → opening 85,853.

| Wk | Viewers | Retention | Driver | Gross | Studio | Distributor |
|---:|---:|---:|---|---:|---:|---:|
| 1 | 85,853 | 1 | opening (aware people watching) | $171,706 | $104,741 | $66,965 |
| 2 | 62,736 | 0.73 | critic 7.91: +6,273 newly aware (buzz) | $125,472 | $76,538 | $48,934 |
| 3 | 38,818 | 0.62 | critic 7.91: +7,514 newly aware (buzz) | $77,636 | $47,358 | $30,278 |
| 4 | 45,398 | 1.17 | audience 8.94: +61,177 newly aware (word of mouth) | $90,796 | $55,386 | $35,410 |
| 5 | 47,930 | 1.06 | audience 8.94: +62,172 newly aware (word of mouth) | $95,860 | $58,475 | $37,385 |
| 6 | 30,523 | 0.64 | audience 8.94: +9,723 newly aware (word of mouth) | $61,046 | $37,238 | $23,808 |
| 7 | 20,901 | 0.68 | audience 8.94: +10,265 newly aware (word of mouth) | $41,802 | $25,499 | $16,303 |
| 8 | 14,136 | 0.68 | audience 8.94: +6,537 newly aware (word of mouth) | $28,272 | $17,246 | $11,026 |
| 9 | 9,580 | 0.68 | audience 8.94: +4,476 newly aware (word of mouth) | $19,160 | $11,688 | $7,472 |
| 10 | 6,490 | 0.68 | audience 8.94: +3,027 newly aware (word of mouth) | $12,980 | $7,918 | $5,062 |
| 11 | 4,397 | 0.68 | audience 8.94: +2,052 newly aware (word of mouth) | $8,794 | $5,364 | $3,430 |
| 12 | 2,979 | 0.68 | audience 8.94: +1,390 newly aware (word of mouth) | $5,958 | $3,634 | $2,324 |
| 13 | 2,018 | 0.68 | audience 8.94: +942 newly aware (word of mouth) | $4,036 | $2,462 | $1,574 |
| 14 | 1,368 | 0.68 | audience 8.94: +638 newly aware (word of mouth) | $2,736 | $1,669 | $1,067 |
| 15 | 0 | 0 | audience 8.94: +432 newly aware (word of mouth) | $0 | $0 | $0 |

**Progression trace**

- Prestige awards: Prestige +50: meters_all_70 (Red Night).; Prestige +75: audience_7_5 (Red Night).
- IP fans: {"before":0,"after":20477,"delta":20477}
- Star career: {"fameDelta":12.23,"relDelta":0.75,"grow":0,"level":7,"reasons":"worked together (+); project boosted their career (+)"}
- Distributor trust: XYZ Network earned 193% of its advance back on Red Night with strong reviews (step 0.75)
- Rule labels: LOCKED = causal chain, accounting, fallback/no-campaign, thresholds 4.0/9.0, IP fan inheritance. WORKING ASSUMPTION = all formulas' shapes and numbers.

### Last Shadow — Horror + Zombies (new)

Released week 240 (year 4.6) · Distributor: Meridian Global · Star: Sam Imai (L7, Fame 86) · IP: Last Shadow
Joined the streaming catalog after its run (retention value only; no new payouts).

**Financial waterfall** [LOCKED rules; amounts provisional]

| Item | Amount |
|---|---:|
| Advance received (project reserve, not revenue) | $131,000 |
| Base cost (unavoidable) | −$60,000 |
| Star fee | −$43,691 |
| Marketing campaign | −$20,000 |
| Paid from studio cash (overrun) | $0 |
| **Unused advance kept at completion** | $7,309 |
| Gross from sales (15 weeks) | $792,826 |
| Distributor royalty (47% of weekly gross) | −$372,628 |
| **Studio take** | $420,198 |
| Net for this title (surplus + take − cash overrun; wages are studio-wide, excluded) | $427,507 |

**Quality trace** [scores are computed, never rolled]

Meters (0–100): Plot 89.02 · Writing 89.81 · Filming 87.81 · Editing 83.48
Inputs: staff points {"plot":399.43,"writing":434.18,"filming":353.37,"editing":239.44}, Star filming points 69.96 (Star family fit 100), studio Horror level 2 (+6%), era bar x1.18
Base scores: Audience 8.68 / Critic 8.83 · no weak meter
Combo grades: Audience C (x1) / Critic D (x0.9) · repetition fatigue x1 · critic saturation x0.9
Before expectations (after combo, weakness, fatigue, saturation; pre-clamp): Audience 8.68 / Critic 7.15 · critic generation 0 (−0.0%, scale) · audience era 0 (−0.0%) · then clamp 0–10 (generation/era 0 = the ones active at game start)
**Final: Audience 8.68 / Critic 7.15 → avg 7.92**

**Opening & viewership trace** [marketing/Fame/reach affect viewers only]

Awareness inputs: base 0.35, marketing 0.55, studioBuzz 0, starFame 0.38, trend 0.1, ipFans 0 → awareness 0.75. Reach cap 400,000 → pool 299,149 → opening 89,745.

| Wk | Viewers | Retention | Driver | Gross | Studio | Distributor |
|---:|---:|---:|---|---:|---:|---:|
| 1 | 89,745 | 1 | opening (aware people watching) | $179,490 | $95,130 | $84,360 |
| 2 | 62,955 | 0.7 | critic 7.15: +5,204 newly aware (buzz) | $125,910 | $66,732 | $59,178 |
| 3 | 39,064 | 0.62 | critic 7.15: +6,232 newly aware (buzz) | $78,128 | $41,408 | $36,720 |
| 4 | 44,965 | 1.15 | audience 8.68: +57,502 newly aware (word of mouth) | $89,930 | $47,663 | $42,267 |
| 5 | 49,024 | 1.09 | audience 8.68: +66,188 newly aware (word of mouth) | $98,048 | $51,965 | $46,083 |
| 6 | 36,787 | 0.75 | audience 8.68: +25,252 newly aware (word of mouth) | $73,574 | $38,994 | $34,580 |
| 7 | 24,667 | 0.67 | audience 8.68: +10,679 newly aware (word of mouth) | $49,334 | $26,147 | $23,187 |
| 8 | 16,843 | 0.68 | audience 8.68: +8,014 newly aware (word of mouth) | $33,686 | $17,854 | $15,832 |
| 9 | 11,466 | 0.68 | audience 8.68: +5,374 newly aware (word of mouth) | $22,932 | $12,154 | $10,778 |
| 10 | 7,810 | 0.68 | audience 8.68: +3,669 newly aware (word of mouth) | $15,620 | $8,279 | $7,341 |
| 11 | 5,318 | 0.68 | audience 8.68: +2,498 newly aware (word of mouth) | $10,636 | $5,637 | $4,999 |
| 12 | 3,622 | 0.68 | audience 8.68: +1,701 newly aware (word of mouth) | $7,244 | $3,839 | $3,405 |
| 13 | 2,467 | 0.68 | audience 8.68: +1,159 newly aware (word of mouth) | $4,934 | $2,615 | $2,319 |
| 14 | 1,680 | 0.68 | audience 8.68: +789 newly aware (word of mouth) | $3,360 | $1,781 | $1,579 |
| 15 | 0 | 0 | audience 8.68: +537 newly aware (word of mouth) | $0 | $0 | $0 |

**Progression trace**

- Prestige awards: Prestige +50: meters_all_70 (Last Shadow).; Prestige +75: audience_7_5 (Last Shadow).
- IP fans: {"before":0,"after":18520,"delta":18520}
- Star career: {"fameDelta":10.59,"relDelta":0.75,"grow":0,"level":7,"reasons":"worked together (+); project boosted their career (+)"}
- Distributor trust: Meridian Global earned 284% of its advance back on Last Shadow with strong reviews (step 0.75)
- Rule labels: LOCKED = causal chain, accounting, fallback/no-campaign, thresholds 4.0/9.0, IP fan inheritance. WORKING ASSUMPTION = all formulas' shapes and numbers.

### Lost Shadow — Comedy + Sports (new)

Released week 256 (year 4.9) · Distributor: Meridian Global · Star: Fin Fox (L10, Fame 100) · IP: Lost Shadow
Joined the streaming catalog after its run (retention value only; no new payouts).

**Financial waterfall** [LOCKED rules; amounts provisional]

| Item | Amount |
|---|---:|
| Advance received (project reserve, not revenue) | $157,000 |
| Base cost (unavoidable) | −$60,000 |
| Star fee | −$21,527 |
| Marketing campaign | −$20,000 |
| Paid from studio cash (overrun) | $0 |
| **Unused advance kept at completion** | $55,473 |
| Gross from sales (15 weeks) | $794,944 |
| Distributor royalty (45% of weekly gross) | −$357,725 |
| **Studio take** | $437,219 |
| Net for this title (surplus + take − cash overrun; wages are studio-wide, excluded) | $492,692 |

**Quality trace** [scores are computed, never rolled]

Meters (0–100): Plot 89.41 · Writing 90.2 · Filming 88.14 · Editing 84.09
Inputs: staff points {"plot":420.48,"writing":458.08,"filming":371.39,"editing":253.08}, Star filming points 69.96 (Star family fit 100), studio Comedy level 2 (+6%), era bar x1.2
Base scores: Audience 8.72 / Critic 8.87 · no weak meter
Combo grades: Audience A (x1.15) / Critic B (x1.06) · repetition fatigue x1 · critic saturation x0.9
Before expectations (after combo, weakness, fatigue, saturation; pre-clamp): Audience 10.03 / Critic 8.46 · critic generation 0 (−0.0%, scale) · audience era 0 (−0.0%) · then clamp 0–10 (generation/era 0 = the ones active at game start)
**Final: Audience 10 / Critic 8.46 → avg 9.23 (HALL OF FAME)**

**Opening & viewership trace** [marketing/Fame/reach affect viewers only]

Awareness inputs: base 0.35, marketing 0.55, studioBuzz 0, starFame 0.21, trend 0.1, ipFans 0 → awareness 0.7. Reach cap 400,000 → pool 280,140 → opening 84,042.

| Wk | Viewers | Retention | Driver | Gross | Studio | Distributor |
|---:|---:|---:|---|---:|---:|---:|
| 1 | 84,042 | 1 | opening (aware people watching) | $168,084 | $92,446 | $75,638 |
| 2 | 64,229 | 0.76 | critic 8.46: +9,953 newly aware (buzz) | $128,458 | $70,652 | $57,806 |
| 3 | 40,531 | 0.63 | critic 8.46: +11,081 newly aware (buzz) | $81,062 | $44,584 | $36,478 |
| 4 | 55,031 | 1.36 | audience 10: +81,062 newly aware (word of mouth) | $110,062 | $60,534 | $49,528 |
| 5 | 54,435 | 0.99 | audience 10: +64,448 newly aware (word of mouth) | $108,870 | $59,879 | $48,992 |
| 6 | 34,067 | 0.63 | audience 10: +11,006 newly aware (word of mouth) | $68,134 | $37,474 | $30,660 |
| 7 | 22,819 | 0.67 | audience 10: +10,887 newly aware (word of mouth) | $45,638 | $25,101 | $20,537 |
| 8 | 15,106 | 0.66 | audience 10: +6,813 newly aware (word of mouth) | $30,212 | $16,617 | $13,595 |
| 9 | 10,020 | 0.66 | audience 10: +4,564 newly aware (word of mouth) | $20,040 | $11,022 | $9,018 |
| 10 | 6,644 | 0.66 | audience 10: +3,021 newly aware (word of mouth) | $13,288 | $7,308 | $5,980 |
| 11 | 4,405 | 0.66 | audience 10: +2,004 newly aware (word of mouth) | $8,810 | $4,846 | $3,965 |
| 12 | 2,921 | 0.66 | audience 10: +1,329 newly aware (word of mouth) | $5,842 | $3,213 | $2,629 |
| 13 | 1,937 | 0.66 | audience 10: +881 newly aware (word of mouth) | $3,874 | $2,131 | $1,743 |
| 14 | 1,285 | 0.66 | audience 10: +584 newly aware (word of mouth) | $2,570 | $1,414 | $1,157 |
| 15 | 0 | 0 | audience 10: +387 newly aware (word of mouth) | $0 | $0 | $0 |

**Progression trace**

- Prestige awards: Prestige +50: meters_all_70 (Lost Shadow).; Prestige +75: audience_7_5 (Lost Shadow).; Prestige +200: hall_of_fame (Lost Shadow).
- IP fans: {"before":0,"after":26901,"delta":26901}
- Star career: {"fameDelta":15.36,"relDelta":0.75,"grow":0,"level":7,"reasons":"worked together (+); project boosted their career (+)"}
- Distributor trust: Meridian Global earned 228% of its advance back on Lost Shadow with strong reviews (step 0.75)
- Rule labels: LOCKED = causal chain, accounting, fallback/no-campaign, thresholds 4.0/9.0, IP fan inheritance. WORKING ASSUMPTION = all formulas' shapes and numbers.

### Iron Run — Action + Robots (new)

Released week 272 (year 5.2) · Distributor: Meridian Global · Star: Fin Fox (L10, Fame 100) · IP: Iron Run
Joined the streaming catalog after its run (retention value only; no new payouts).

**Financial waterfall** [LOCKED rules; amounts provisional]

| Item | Amount |
|---|---:|
| Advance received (project reserve, not revenue) | $128,000 |
| Base cost (unavoidable) | −$60,000 |
| Star fee | −$21,405 |
| Marketing campaign | −$20,000 |
| Paid from studio cash (overrun) | $0 |
| **Unused advance kept at completion** | $26,595 |
| Gross from sales (15 weeks) | $867,690 |
| Distributor royalty (46% of weekly gross) | −$399,137 |
| **Studio take** | $468,553 |
| Net for this title (surplus + take − cash overrun; wages are studio-wide, excluded) | $495,147 |

**Quality trace** [scores are computed, never rolled]

Meters (0–100): Plot 89.88 · Writing 90.64 · Filming 88.62 · Editing 84.7
Inputs: staff points {"plot":446.55,"writing":487.39,"filming":394.93,"editing":267.84}, Star filming points 71.94 (Star family fit 100), studio Action level 3 (+9%), era bar x1.21
Base scores: Audience 8.77 / Critic 8.92 · no weak meter
Combo grades: Audience D (x0.9) / Critic F (x0.78) · repetition fatigue x1 · critic saturation x0.9
Before expectations (after combo, weakness, fatigue, saturation; pre-clamp): Audience 7.9 / Critic 6.26 · critic generation 0 (−0.0%, scale) · audience era 0 (−0.0%) · then clamp 0–10 (generation/era 0 = the ones active at game start)
**Final: Audience 7.9 / Critic 6.26 → avg 7.08**

**Opening & viewership trace** [marketing/Fame/reach affect viewers only]

Awareness inputs: base 0.35, marketing 0.55, studioBuzz 0, starFame 0.3, trend 0.1, ipFans 0 → awareness 0.73. Reach cap 440,000 → pool 319,762 → opening 95,929.

| Wk | Viewers | Retention | Driver | Gross | Studio | Distributor |
|---:|---:|---:|---|---:|---:|---:|
| 1 | 95,929 | 1 | opening (aware people watching) | $191,858 | $103,603 | $88,255 |
| 2 | 63,974 | 0.67 | critic 6.26: +3,636 newly aware (buzz) | $127,948 | $69,092 | $58,856 |
| 3 | 39,728 | 0.62 | critic 6.26: +4,338 newly aware (buzz) | $79,456 | $42,906 | $36,550 |
| 4 | 41,478 | 1.04 | audience 7.9: +46,084 newly aware (word of mouth) | $82,956 | $44,796 | $38,160 |
| 5 | 40,490 | 0.98 | audience 7.9: +48,114 newly aware (word of mouth) | $80,980 | $43,729 | $37,251 |
| 6 | 39,526 | 0.98 | audience 7.9: +46,968 newly aware (word of mouth) | $79,052 | $42,688 | $36,364 |
| 7 | 37,720 | 0.95 | audience 7.9: +43,333 newly aware (word of mouth) | $75,440 | $40,738 | $34,702 |
| 8 | 24,905 | 0.66 | audience 7.9: +9,065 newly aware (word of mouth) | $49,810 | $26,897 | $22,913 |
| 9 | 17,360 | 0.7 | audience 7.9: +8,651 newly aware (word of mouth) | $34,720 | $18,749 | $15,971 |
| 10 | 11,991 | 0.69 | audience 7.9: +5,712 newly aware (word of mouth) | $23,982 | $12,950 | $11,032 |
| 11 | 8,295 | 0.69 | audience 7.9: +3,981 newly aware (word of mouth) | $16,590 | $8,959 | $7,631 |
| 12 | 5,737 | 0.69 | audience 7.9: +2,750 newly aware (word of mouth) | $11,474 | $6,196 | $5,278 |
| 13 | 3,968 | 0.69 | audience 7.9: +1,902 newly aware (word of mouth) | $7,936 | $4,285 | $3,651 |
| 14 | 2,744 | 0.69 | audience 7.9: +1,316 newly aware (word of mouth) | $5,488 | $2,964 | $2,524 |
| 15 | 0 | 0 | audience 7.9: +910 newly aware (word of mouth) | $0 | $0 | $0 |

**Progression trace**

- Prestige awards: Prestige +50: meters_all_70 (Iron Run).; Prestige +75: audience_7_5 (Iron Run).
- IP fans: {"before":0,"after":14438,"delta":14438}
- Star career: {"fameDelta":7.73,"relDelta":0.75,"grow":0,"level":8,"reasons":"worked together (+); project boosted their career (+)"}
- Distributor trust: Meridian Global earned 312% of its advance back on Iron Run with strong reviews (step 0.75)
- Rule labels: LOCKED = causal chain, accounting, fallback/no-campaign, thresholds 4.0/9.0, IP fan inheritance. WORKING ASSUMPTION = all formulas' shapes and numbers.

### Broken Storm — Action + Dinosaurs (new)

Released week 288 (year 5.5) · Distributor: Meridian Global · Star: Fin Fox (L10, Fame 100) · IP: Broken Storm
Joined the streaming catalog after its run (retention value only; no new payouts).

**Financial waterfall** [LOCKED rules; amounts provisional]

| Item | Amount |
|---|---:|
| Advance received (project reserve, not revenue) | $135,000 |
| Base cost (unavoidable) | −$60,000 |
| Star fee | −$31,804 |
| Marketing campaign | −$20,000 |
| Paid from studio cash (overrun) | $0 |
| **Unused advance kept at completion** | $23,196 |
| Gross from sales (15 weeks) | $873,312 |
| Distributor royalty (45% of weekly gross) | −$392,990 |
| **Studio take** | $480,322 |
| Net for this title (surplus + take − cash overrun; wages are studio-wide, excluded) | $503,517 |

**Quality trace** [scores are computed, never rolled]

Meters (0–100): Plot 90.12 · Writing 90.89 · Filming 88.88 · Editing 85.07
Inputs: staff points {"plot":463.46,"writing":506.71,"filming":412.56,"editing":278.37}, Star filming points 71.94 (Star family fit 100), studio Action level 3 (+9%), era bar x1.22
Base scores: Audience 8.8 / Critic 8.94 · no weak meter
Combo grades: Audience C (x1) / Critic F (x0.78) · repetition fatigue x1 · critic saturation x1
Before expectations (after combo, weakness, fatigue, saturation; pre-clamp): Audience 8.8 / Critic 6.98 · critic generation 0 (−0.0%, scale) · audience era 0 (−0.0%) · then clamp 0–10 (generation/era 0 = the ones active at game start)
**Final: Audience 8.8 / Critic 6.98 → avg 7.89**

**Opening & viewership trace** [marketing/Fame/reach affect viewers only]

Awareness inputs: base 0.35, marketing 0.55, studioBuzz 0, starFame 0.34, trend 0.4, ipFans 0 → awareness 0.81. Reach cap 440,000 → pool 354,962 → opening 106,489.

| Wk | Viewers | Retention | Driver | Gross | Studio | Distributor |
|---:|---:|---:|---|---:|---:|---:|
| 1 | 106,489 | 1 | opening (aware people watching) | $212,978 | $117,138 | $95,840 |
| 2 | 73,423 | 0.69 | critic 6.98: +4,041 newly aware (buzz) | $146,846 | $80,765 | $66,081 |
| 3 | 45,046 | 0.61 | critic 6.98: +5,266 newly aware (buzz) | $90,092 | $49,551 | $40,541 |
| 4 | 53,215 | 1.18 | audience 8.8: +68,470 newly aware (word of mouth) | $106,430 | $58,537 | $47,894 |
| 5 | 53,666 | 1.01 | audience 8.8: +65,981 newly aware (word of mouth) | $107,332 | $59,033 | $48,299 |
| 6 | 34,473 | 0.64 | audience 8.8: +11,502 newly aware (word of mouth) | $68,946 | $37,920 | $31,026 |
| 7 | 23,647 | 0.69 | audience 8.8: +11,599 newly aware (word of mouth) | $47,294 | $26,012 | $21,282 |
| 8 | 16,040 | 0.68 | audience 8.8: +7,451 newly aware (word of mouth) | $32,080 | $17,644 | $14,436 |
| 9 | 10,901 | 0.68 | audience 8.8: +5,111 newly aware (word of mouth) | $21,802 | $11,991 | $9,811 |
| 10 | 7,406 | 0.68 | audience 8.8: +3,467 newly aware (word of mouth) | $14,812 | $8,147 | $6,665 |
| 11 | 5,031 | 0.68 | audience 8.8: +2,356 newly aware (word of mouth) | $10,062 | $5,534 | $4,528 |
| 12 | 3,418 | 0.68 | audience 8.8: +1,601 newly aware (word of mouth) | $6,836 | $3,760 | $3,076 |
| 13 | 2,323 | 0.68 | audience 8.8: +1,087 newly aware (word of mouth) | $4,646 | $2,555 | $2,091 |
| 14 | 1,578 | 0.68 | audience 8.8: +739 newly aware (word of mouth) | $3,156 | $1,736 | $1,420 |
| 15 | 0 | 0 | audience 8.8: +502 newly aware (word of mouth) | $0 | $0 | $0 |

**Progression trace**

- Prestige awards: Prestige +50: meters_all_70 (Broken Storm).; Prestige +75: audience_7_5 (Broken Storm).
- IP fans: {"before":0,"after":20191,"delta":20191}
- Star career: {"fameDelta":10.76,"relDelta":0.75,"grow":0,"level":8,"reasons":"worked together (+); project boosted their career (+)"}
- Distributor trust: Meridian Global earned 291% of its advance back on Broken Storm with strong reviews (step 0.75)
- Rule labels: LOCKED = causal chain, accounting, fallback/no-campaign, thresholds 4.0/9.0, IP fan inheritance. WORKING ASSUMPTION = all formulas' shapes and numbers.

### Silver Frequency — Comedy + Sports (new)

Released week 304 (year 5.8) · Distributor: Wolf Pictures · Star: Kai Moreau (L6, Fame 73) · IP: Silver Frequency
Joined the streaming catalog after its run (retention value only; no new payouts).

**Financial waterfall** [LOCKED rules; amounts provisional]

| Item | Amount |
|---|---:|
| Advance received (project reserve, not revenue) | $104,000 |
| Base cost (unavoidable) | −$60,000 |
| Star fee | −$23,477 |
| Marketing campaign | −$20,000 |
| Paid from studio cash (overrun) | $0 |
| **Unused advance kept at completion** | $523 |
| Gross from sales (15 weeks) | $476,616 |
| Distributor royalty (30% of weekly gross) | −$142,985 |
| **Studio take** | $333,631 |
| Net for this title (surplus + take − cash overrun; wages are studio-wide, excluded) | $334,154 |

**Quality trace** [scores are computed, never rolled]

Meters (0–100): Plot 90.28 · Writing 91.05 · Filming 89.07 · Editing 85.41
Inputs: staff points {"plot":476.74,"writing":522.17,"filming":426.63,"editing":289.03}, Star filming points 71.94 (Star family fit 100), studio Comedy level 3 (+9%), era bar x1.23
Base scores: Audience 8.83 / Critic 8.96 · no weak meter
Combo grades: Audience A (x1.15) / Critic B (x1.06) · repetition fatigue x0.95 · critic saturation x1
Before expectations (after combo, weakness, fatigue, saturation; pre-clamp): Audience 9.64 / Critic 9.03 · critic generation 0 (−0.0%, scale) · audience era 0 (−0.0%) · then clamp 0–10 (generation/era 0 = the ones active at game start)
**Final: Audience 9.64 / Critic 9.03 → avg 9.34 (HALL OF FAME)**

**Opening & viewership trace** [marketing/Fame/reach affect viewers only]

Awareness inputs: base 0.35, marketing 0.55, studioBuzz 0, starFame 0.21, trend 0, ipFans 0 → awareness 0.67. Reach cap 240,000 → pool 161,214 → opening 48,364.

| Wk | Viewers | Retention | Driver | Gross | Studio | Distributor |
|---:|---:|---:|---|---:|---:|---:|
| 1 | 48,364 | 1 | opening (aware people watching) | $96,728 | $67,710 | $29,018 |
| 2 | 38,542 | 0.8 | critic 9.03: +7,620 newly aware (buzz) | $77,084 | $53,959 | $23,125 |
| 3 | 24,645 | 0.64 | critic 9.03: +8,193 newly aware (buzz) | $49,290 | $34,503 | $14,787 |
| 4 | 31,128 | 1.26 | audience 9.64: +45,741 newly aware (word of mouth) | $62,256 | $43,579 | $18,677 |
| 5 | 33,615 | 1.08 | audience 9.64: +44,227 newly aware (word of mouth) | $67,230 | $47,061 | $20,169 |
| 6 | 21,003 | 0.62 | audience 9.64: +6,371 newly aware (word of mouth) | $42,006 | $29,404 | $12,602 |
| 7 | 14,194 | 0.68 | audience 9.64: +6,880 newly aware (word of mouth) | $28,388 | $19,872 | $8,516 |
| 8 | 9,463 | 0.67 | audience 9.64: +4,299 newly aware (word of mouth) | $18,926 | $13,248 | $5,678 |
| 9 | 6,324 | 0.67 | audience 9.64: +2,905 newly aware (word of mouth) | $12,648 | $8,854 | $3,794 |
| 10 | 4,224 | 0.67 | audience 9.64: +1,937 newly aware (word of mouth) | $8,448 | $5,914 | $2,534 |
| 11 | 2,821 | 0.67 | audience 9.64: +1,294 newly aware (word of mouth) | $5,642 | $3,949 | $1,693 |
| 12 | 1,885 | 0.67 | audience 9.64: +864 newly aware (word of mouth) | $3,770 | $2,639 | $1,131 |
| 13 | 1,259 | 0.67 | audience 9.64: +578 newly aware (word of mouth) | $2,518 | $1,763 | $755 |
| 14 | 841 | 0.67 | audience 9.64: +386 newly aware (word of mouth) | $1,682 | $1,177 | $505 |
| 15 | 0 | 0 | audience 9.64: +258 newly aware (word of mouth) | $0 | $0 | $0 |

**Progression trace**

- Prestige awards: Prestige +50: meters_all_70 (Silver Frequency).; Prestige +75: audience_7_5 (Silver Frequency).; Prestige +85: critic_8_5 (Silver Frequency).; Prestige +200: hall_of_fame (Silver Frequency).
- IP fans: {"before":0,"after":16548,"delta":16548}
- Star career: {"fameDelta":13.32,"relDelta":0.75,"grow":0,"level":5,"reasons":"worked together (+); project boosted their career (+)"}
- Distributor trust: Wolf Pictures earned 137% of its advance back on Silver Frequency with strong reviews (step 0.62)
- Rule labels: LOCKED = causal chain, accounting, fallback/no-campaign, thresholds 4.0/9.0, IP fan inheritance. WORKING ASSUMPTION = all formulas' shapes and numbers.

### Wild Legacy — Horror + Dinosaurs (new)

Released week 320 (year 6.2) · Distributor: XYZ Network · Star: Sam Imai (L7, Fame 86) · IP: Wild Legacy
Joined the streaming catalog after its run (retention value only; no new payouts).

**Financial waterfall** [LOCKED rules; amounts provisional]

| Item | Amount |
|---|---:|
| Advance received (project reserve, not revenue) | $128,000 |
| Base cost (unavoidable) | −$60,000 |
| Star fee | −$49,031 |
| Marketing campaign | −$20,000 |
| Paid from studio cash (overrun) | $1,031 |
| **Unused advance kept at completion** | $0 |
| Gross from sales (15 weeks) | $674,800 |
| Distributor royalty (39% of weekly gross) | −$263,172 |
| **Studio take** | $411,628 |
| Net for this title (surplus + take − cash overrun; wages are studio-wide, excluded) | $410,597 |

**Quality trace** [scores are computed, never rolled]

Meters (0–100): Plot 90.18 · Writing 90.96 · Filming 88.92 · Editing 85.17
Inputs: staff points {"plot":476.01,"writing":521.9,"filming":426.03,"editing":286.18}, Star filming points 69.96 (Star family fit 100), studio Horror level 2 (+6%), era bar x1.25
Base scores: Audience 8.81 / Critic 8.95 · no weak meter
Combo grades: Audience C (x1) / Critic B (x1.06) · repetition fatigue x1 · critic saturation x0.9
Before expectations (after combo, weakness, fatigue, saturation; pre-clamp): Audience 8.81 / Critic 8.54 · critic generation 0 (−0.0%, scale) · audience era 0 (−0.0%) · then clamp 0–10 (generation/era 0 = the ones active at game start)
**Final: Audience 8.81 / Critic 8.54 → avg 8.68**

**Opening & viewership trace** [marketing/Fame/reach affect viewers only]

Awareness inputs: base 0.35, marketing 0.55, studioBuzz 0, starFame 0.44, trend 0.1, ipFans 0 → awareness 0.76. Reach cap 340,000 → pool 259,554 → opening 77,866.

| Wk | Viewers | Retention | Driver | Gross | Studio | Distributor |
|---:|---:|---:|---|---:|---:|---:|
| 1 | 77,866 | 1 | opening (aware people watching) | $155,732 | $94,997 | $60,735 |
| 2 | 58,869 | 0.76 | critic 8.54: +6,835 newly aware (buzz) | $117,738 | $71,820 | $45,918 |
| 3 | 36,375 | 0.62 | critic 8.54: +8,106 newly aware (buzz) | $72,750 | $44,378 | $28,373 |
| 4 | 40,743 | 1.12 | audience 8.81: +55,436 newly aware (word of mouth) | $81,486 | $49,706 | $31,780 |
| 5 | 41,910 | 1.03 | audience 8.81: +52,811 newly aware (word of mouth) | $83,820 | $51,130 | $32,690 |
| 6 | 26,852 | 0.64 | audience 8.81: +8,800 newly aware (word of mouth) | $53,704 | $32,759 | $20,945 |
| 7 | 18,424 | 0.69 | audience 8.81: +9,052 newly aware (word of mouth) | $36,848 | $22,477 | $14,371 |
| 8 | 12,494 | 0.68 | audience 8.81: +5,800 newly aware (word of mouth) | $24,988 | $15,243 | $9,745 |
| 9 | 8,489 | 0.68 | audience 8.81: +3,979 newly aware (word of mouth) | $16,978 | $10,357 | $6,621 |
| 10 | 5,766 | 0.68 | audience 8.81: +2,699 newly aware (word of mouth) | $11,532 | $7,035 | $4,497 |
| 11 | 3,917 | 0.68 | audience 8.81: +1,834 newly aware (word of mouth) | $7,834 | $4,779 | $3,055 |
| 12 | 2,660 | 0.68 | audience 8.81: +1,245 newly aware (word of mouth) | $5,320 | $3,245 | $2,075 |
| 13 | 1,807 | 0.68 | audience 8.81: +846 newly aware (word of mouth) | $3,614 | $2,205 | $1,409 |
| 14 | 1,228 | 0.68 | audience 8.81: +575 newly aware (word of mouth) | $2,456 | $1,498 | $958 |
| 15 | 0 | 0 | audience 8.81: +390 newly aware (word of mouth) | $0 | $0 | $0 |

**Progression trace**

- Prestige awards: Prestige +50: meters_all_70 (Wild Legacy).; Prestige +75: audience_7_5 (Wild Legacy).; Prestige +85: critic_8_5 (Wild Legacy).
- IP fans: {"before":0,"after":19866,"delta":19866}
- Star career: {"fameDelta":12.74,"relDelta":0.75,"grow":0,"level":7,"reasons":"worked together (+); project boosted their career (+)"}
- Distributor trust: XYZ Network earned 206% of its advance back on Wild Legacy with strong reviews (step 0.75)
- Rule labels: LOCKED = causal chain, accounting, fallback/no-campaign, thresholds 4.0/9.0, IP fan inheritance. WORKING ASSUMPTION = all formulas' shapes and numbers.

### Last Pulse — Comedy + Sports (new)

Released week 336 (year 6.5) · Distributor: XYZ Network · Star: Kai Moreau (L6, Fame 73) · IP: Last Pulse
Joined the streaming catalog after its run (retention value only; no new payouts).

**Financial waterfall** [LOCKED rules; amounts provisional]

| Item | Amount |
|---|---:|
| Advance received (project reserve, not revenue) | $146,000 |
| Base cost (unavoidable) | −$60,000 |
| Star fee | −$32,529 |
| Marketing campaign | −$20,000 |
| Paid from studio cash (overrun) | $0 |
| **Unused advance kept at completion** | $33,471 |
| Gross from sales (15 weeks) | $746,166 |
| Distributor royalty (40% of weekly gross) | −$298,466 |
| **Studio take** | $447,700 |
| Net for this title (surplus + take − cash overrun; wages are studio-wide, excluded) | $481,171 |

**Quality trace** [scores are computed, never rolled]

Meters (0–100): Plot 90.45 · Writing 91.23 · Filming 89.3 · Editing 86.15
Inputs: staff points {"plot":496.02,"writing":544.63,"filming":448.86,"editing":313.15}, Star filming points 71.94 (Star family fit 100), studio Comedy level 3 (+9%), era bar x1.26
Base scores: Audience 8.87 / Critic 8.99 · no weak meter
Combo grades: Audience A (x1.15) / Critic B (x1.06) · repetition fatigue x0.9 · critic saturation x1
Before expectations (after combo, weakness, fatigue, saturation; pre-clamp): Audience 9.18 / Critic 8.58 · critic generation 0 (−0.0%, scale) · audience era 0 (−0.0%) · then clamp 0–10 (generation/era 0 = the ones active at game start)
**Final: Audience 9.18 / Critic 8.58 → avg 8.88**

**Opening & viewership trace** [marketing/Fame/reach affect viewers only]

Awareness inputs: base 0.35, marketing 0.55, studioBuzz 0, starFame 0.29, trend 0, ipFans 0 → awareness 0.7. Reach cap 376,000 → pool 262,049 → opening 78,615.

| Wk | Viewers | Retention | Driver | Gross | Studio | Distributor |
|---:|---:|---:|---|---:|---:|---:|
| 1 | 78,615 | 1 | opening (aware people watching) | $157,230 | $94,338 | $62,892 |
| 2 | 60,558 | 0.77 | critic 8.58: +9,791 newly aware (buzz) | $121,116 | $72,670 | $48,446 |
| 3 | 38,276 | 0.63 | critic 8.58: +10,841 newly aware (buzz) | $76,552 | $45,931 | $30,621 |
| 4 | 45,535 | 1.19 | audience 9.18: +63,997 newly aware (word of mouth) | $91,070 | $54,642 | $36,428 |
| 5 | 52,017 | 1.14 | audience 9.18: +73,006 newly aware (word of mouth) | $104,034 | $62,420 | $41,614 |
| 6 | 32,654 | 0.63 | audience 9.18: +9,601 newly aware (word of mouth) | $65,308 | $39,185 | $26,123 |
| 7 | 22,291 | 0.68 | audience 9.18: +10,968 newly aware (word of mouth) | $44,582 | $26,749 | $17,833 |
| 8 | 14,999 | 0.67 | audience 9.18: +6,885 newly aware (word of mouth) | $29,998 | $17,999 | $11,999 |
| 9 | 10,117 | 0.67 | audience 9.18: +4,700 newly aware (word of mouth) | $20,234 | $12,140 | $8,094 |
| 10 | 6,821 | 0.67 | audience 9.18: +3,163 newly aware (word of mouth) | $13,642 | $8,185 | $5,457 |
| 11 | 4,599 | 0.67 | audience 9.18: +2,133 newly aware (word of mouth) | $9,198 | $5,519 | $3,679 |
| 12 | 3,101 | 0.67 | audience 9.18: +1,438 newly aware (word of mouth) | $6,202 | $3,721 | $2,481 |
| 13 | 2,090 | 0.67 | audience 9.18: +970 newly aware (word of mouth) | $4,180 | $2,508 | $1,672 |
| 14 | 1,410 | 0.67 | audience 9.18: +654 newly aware (word of mouth) | $2,820 | $1,692 | $1,128 |
| 15 | 0 | 0 | audience 9.18: +441 newly aware (word of mouth) | $0 | $0 | $0 |

**Progression trace**

- Prestige awards: Prestige +50: meters_all_70 (Last Pulse).; Prestige +75: audience_7_5 (Last Pulse).; Prestige +85: critic_8_5 (Last Pulse).
- IP fans: {"before":0,"after":23161,"delta":23161}
- Star career: {"fameDelta":13.84,"relDelta":0.75,"grow":0,"level":5,"reasons":"worked together (+); project boosted their career (+)"}
- Distributor trust: XYZ Network earned 204% of its advance back on Last Pulse with strong reviews (step 0.75)
- Rule labels: LOCKED = causal chain, accounting, fallback/no-campaign, thresholds 4.0/9.0, IP fan inheritance. WORKING ASSUMPTION = all formulas' shapes and numbers.

### Broken Signal — Comedy + Sports (new)

Released week 352 (year 6.8) · Distributor: Streaming Original (self-funded, no box office) · Star: Kai Moreau (L6, Fame 73) · IP: Broken Signal
Joined the streaming catalog after its run (retention value only; no new payouts).

**Financial waterfall** [LOCKED rules; amounts provisional]

| Item | Amount |
|---|---:|
| Advance received (project reserve, not revenue) | $0 |
| Base cost (unavoidable) | −$60,000 |
| Star fee | −$32,454 |
| Marketing campaign | −$20,000 |
| Paid from studio cash (overrun) | $112,454 |
| **Unused advance kept at completion** | $0 |
| Gross from sales (15 weeks) | $0 |
| Distributor royalty (0% of weekly gross) | −$0 |
| **Studio take** | $0 |
| Net for this title (surplus + take − cash overrun; wages are studio-wide, excluded) | $-112,454 |

**Quality trace** [scores are computed, never rolled]

Meters (0–100): Plot 91.38 · Writing 91.85 · Filming 90.05 · Editing 86.82
Inputs: staff points {"plot":560.73,"writing":596.07,"filming":498.75,"editing":334.77}, Star filming points 71.94 (Star family fit 100), studio Comedy level 3 (+9%), era bar x1.27
Base scores: Audience 8.94 / Critic 9.07 · no weak meter
Combo grades: Audience A (x1.15) / Critic B (x1.06) · repetition fatigue x0.85 · critic saturation x1
Before expectations (after combo, weakness, fatigue, saturation; pre-clamp): Audience 8.74 / Critic 8.17 · critic generation 0 (−0.0%, scale) · audience era 0 (−0.0%) · then clamp 0–10 (generation/era 0 = the ones active at game start)
**Final: Audience 8.74 / Critic 8.17 → avg 8.46**

**Opening & viewership trace** [marketing/Fame/reach affect viewers only]

Awareness inputs: base 0.35, marketing 0.55, studioBuzz 0, starFame 0.38, trend 0, ipFans 0 → awareness 0.72. Reach cap 220,000 → pool 158,639 → opening 47,592.

| Wk | Viewers | Retention | Driver | Gross | Studio | Distributor |
|---:|---:|---:|---|---:|---:|---:|
| 1 | 47,592 | 1 | opening (aware people watching) | $0 | $0 | $0 |
| 2 | 35,586 | 0.75 | critic 8.17: +4,668 newly aware (buzz) | $0 | $0 | $0 |
| 3 | 22,283 | 0.63 | critic 8.17: +5,327 newly aware (buzz) | $0 | $0 | $0 |
| 4 | 24,979 | 1.12 | audience 8.74: +33,335 newly aware (word of mouth) | $0 | $0 | $0 |
| 5 | 27,461 | 1.1 | audience 8.74: +37,369 newly aware (word of mouth) | $0 | $0 | $0 |
| 6 | 19,992 | 0.73 | audience 8.74: +12,444 newly aware (word of mouth) | $0 | $0 | $0 |
| 7 | 13,450 | 0.67 | audience 8.74: +5,959 newly aware (word of mouth) | $0 | $0 | $0 |
| 8 | 9,166 | 0.68 | audience 8.74: +4,338 newly aware (word of mouth) | $0 | $0 | $0 |
| 9 | 6,233 | 0.68 | audience 8.74: +2,918 newly aware (word of mouth) | $0 | $0 | $0 |
| 10 | 4,240 | 0.68 | audience 8.74: +1,989 newly aware (word of mouth) | $0 | $0 | $0 |
| 11 | 2,884 | 0.68 | audience 8.74: +1,352 newly aware (word of mouth) | $0 | $0 | $0 |
| 12 | 1,962 | 0.68 | audience 8.74: +920 newly aware (word of mouth) | $0 | $0 | $0 |
| 13 | 1,334 | 0.68 | audience 8.74: +626 newly aware (word of mouth) | $0 | $0 | $0 |
| 14 | 908 | 0.68 | audience 8.74: +426 newly aware (word of mouth) | $0 | $0 | $0 |
| 15 | 0 | 0 | audience 8.74: +289 newly aware (word of mouth) | $0 | $0 | $0 |

**Progression trace**

- Prestige awards: Prestige +50: meters_all_70 (Broken Signal).; Prestige +75: audience_7_5 (Broken Signal).
- IP fans: {"before":0,"after":12072,"delta":12072}
- Star career: {"fameDelta":10.25,"relDelta":0.75,"grow":0,"level":6,"reasons":"worked together (+); project boosted their career (+)"}
- Rule labels: LOCKED = causal chain, accounting, fallback/no-campaign, thresholds 4.0/9.0, IP fan inheritance. WORKING ASSUMPTION = all formulas' shapes and numbers.

### Broken Code — Action + Superheroes (new)

Released week 368 (year 7.1) · Distributor: Streaming Original (self-funded, no box office) · Star: Fin Fox (L10, Fame 100) · IP: Broken Code
Joined the streaming catalog after its run (retention value only; no new payouts).

**Financial waterfall** [LOCKED rules; amounts provisional]

| Item | Amount |
|---|---:|
| Advance received (project reserve, not revenue) | $0 |
| Base cost (unavoidable) | −$60,000 |
| Star fee | −$41,718 |
| Marketing campaign | −$20,000 |
| Paid from studio cash (overrun) | $121,718 |
| **Unused advance kept at completion** | $0 |
| Gross from sales (15 weeks) | $0 |
| Distributor royalty (0% of weekly gross) | −$0 |
| **Studio take** | $0 |
| Net for this title (surplus + take − cash overrun; wages are studio-wide, excluded) | $-121,718 |

**Quality trace** [scores are computed, never rolled]

Meters (0–100): Plot 91.43 · Writing 91.94 · Filming 90.31 · Editing 87.12
Inputs: staff points {"plot":569.63,"writing":608.64,"filming":520.85,"editing":347.23}, Star filming points 71.94 (Star family fit 100), studio Action level 3 (+9%), era bar x1.28
Base scores: Audience 8.96 / Critic 9.08 · no weak meter
Combo grades: Audience A (x1.15) / Critic C (x1) · repetition fatigue x0.85 · critic saturation x1
Before expectations (after combo, weakness, fatigue, saturation; pre-clamp): Audience 8.76 / Critic 7.72 · critic generation 0 (−0.0%, scale) · audience era 0 (−0.0%) · then clamp 0–10 (generation/era 0 = the ones active at game start)
**Final: Audience 8.76 / Critic 7.72 → avg 8.24**

**Opening & viewership trace** [marketing/Fame/reach affect viewers only]

Awareness inputs: base 0.35, marketing 0.55, studioBuzz 0, starFame 0.41, trend 0.4, ipFans 0 → awareness 0.82. Reach cap 220,000 → pool 180,139 → opening 54,042.

| Wk | Viewers | Retention | Driver | Gross | Studio | Distributor |
|---:|---:|---:|---|---:|---:|---:|
| 1 | 54,042 | 1 | opening (aware people watching) | $0 | $0 | $0 |
| 2 | 38,704 | 0.72 | critic 7.72: +2,602 newly aware (buzz) | $0 | $0 | $0 |
| 3 | 23,617 | 0.61 | critic 7.72: +3,420 newly aware (buzz) | $0 | $0 | $0 |
| 4 | 26,987 | 1.14 | audience 8.76: +35,520 newly aware (word of mouth) | $0 | $0 | $0 |
| 5 | 25,234 | 0.94 | audience 8.76: +27,916 newly aware (word of mouth) | $0 | $0 | $0 |
| 6 | 16,376 | 0.65 | audience 8.76: +5,848 newly aware (word of mouth) | $0 | $0 | $0 |
| 7 | 11,224 | 0.69 | audience 8.76: +5,468 newly aware (word of mouth) | $0 | $0 | $0 |
| 8 | 7,621 | 0.68 | audience 8.76: +3,549 newly aware (word of mouth) | $0 | $0 | $0 |
| 9 | 5,183 | 0.68 | audience 8.76: +2,432 newly aware (word of mouth) | $0 | $0 | $0 |
| 10 | 3,524 | 0.68 | audience 8.76: +1,652 newly aware (word of mouth) | $0 | $0 | $0 |
| 11 | 2,397 | 0.68 | audience 8.76: +1,123 newly aware (word of mouth) | $0 | $0 | $0 |
| 12 | 1,629 | 0.68 | audience 8.76: +764 newly aware (word of mouth) | $0 | $0 | $0 |
| 13 | 1,108 | 0.68 | audience 8.76: +519 newly aware (word of mouth) | $0 | $0 | $0 |
| 14 | 753 | 0.68 | audience 8.76: +353 newly aware (word of mouth) | $0 | $0 | $0 |
| 15 | 0 | 0 | audience 8.76: +240 newly aware (word of mouth) | $0 | $0 | $0 |

**Progression trace**

- Prestige awards: Prestige +50: meters_all_70 (Broken Code).; Prestige +75: audience_7_5 (Broken Code).
- IP fans: {"before":0,"after":11322,"delta":11322}
- Star career: {"fameDelta":9.6,"relDelta":0.75,"grow":0,"level":9,"reasons":"worked together (+); project boosted their career (+)"}
- Rule labels: LOCKED = causal chain, accounting, fallback/no-campaign, thresholds 4.0/9.0, IP fan inheritance. WORKING ASSUMPTION = all formulas' shapes and numbers.

### Lost Legacy — Action + Superheroes (new)

Released week 404 (year 7.8) · Distributor: Streaming Original (self-funded, no box office) · Star: Fin Fox (L10, Fame 100) · IP: Lost Legacy
Format: **tv season 1**, 15 episodes (one per week) · 216,356 distinct viewers, 2,628,493 viewer-episodes · renewal: average 7.4 ≥ 4.0 → renewable
Joined the streaming catalog after its run (retention value only; no new payouts).

**Financial waterfall** [LOCKED rules; amounts provisional]

| Item | Amount |
|---|---:|
| Advance received (project reserve, not revenue) | $0 |
| Base cost (unavoidable) | −$240,000 |
| Star fee | −$48,291 |
| Marketing campaign | −$20,000 |
| Paid from studio cash (overrun) | $308,291 |
| **Unused advance kept at completion** | $0 |
| Gross from sales (18 weeks) | $0 |
| Distributor royalty (0% of weekly gross) | −$0 |
| **Studio take** | $0 |
| Net for this title (surplus + take − cash overrun; wages are studio-wide, excluded) | $-308,291 |

**Quality trace** [scores are computed, never rolled]

Meters (0–100): Plot 91.37 · Writing 91.95 · Filming 90.66 · Editing 87.48
Inputs: staff points {"plot":1299.75,"writing":1400.81,"filming":1252.7,"editing":824.63}, Star filming points 167.86 (Star family fit 100), studio Action level 3 (+9%), era bar x1.31
Base scores: Audience 8.98 / Critic 9.09 · no weak meter
Combo grades: Audience A (x1.15) / Critic C (x1) · repetition fatigue x0.8 · critic saturation x0.9
Before expectations (after combo, weakness, fatigue, saturation; pre-clamp): Audience 8.27 / Critic 6.54 · critic generation 0 (−0.0%, scale) · audience era 0 (−0.0%) · then clamp 0–10 (generation/era 0 = the ones active at game start)
**Final: Audience 8.27 / Critic 6.54 → avg 7.4**

**Opening & viewership trace** [marketing/Fame/reach affect viewers only]

Awareness inputs: base 0.35, marketing 0.55, studioBuzz 0, starFame 0.47, trend 0.1, ipFans 0, announcement 0 → awareness 0.77. Reach cap 220,000 → pool 169,206 → opening 50,762.

| Wk | Viewers | Retention | Driver | Gross | Studio | Distributor |
|---:|---:|---:|---|---:|---:|---:|
| 1 | 84,603 | 1 | episode 1 premiere | $0 | $0 | $0 |
| 2 | 101,883 | 1.2 | episode 2: 97% kept (critic 6.54), +19,615 new | $0 | $0 | $0 |
| 3 | 111,566 | 1.1 | episode 3: 97% kept (critic 6.54), +12,495 new | $0 | $0 | $0 |
| 4 | 127,379 | 1.14 | episode 4: 100% kept (audience 8.27), +15,813 new | $0 | $0 | $0 |
| 5 | 145,391 | 1.14 | episode 5: 100% kept (audience 8.27), +18,012 new | $0 | $0 | $0 |
| 6 | 163,680 | 1.13 | episode 6: 100% kept (audience 8.27), +18,289 new | $0 | $0 | $0 |
| 7 | 176,620 | 1.08 | episode 7: 100% kept (audience 8.27), +12,940 new | $0 | $0 | $0 |
| 8 | 186,365 | 1.06 | episode 8: 100% kept (audience 8.27), +9,745 new | $0 | $0 | $0 |
| 9 | 193,615 | 1.04 | episode 9: 100% kept (audience 8.27), +7,250 new | $0 | $0 | $0 |
| 10 | 199,021 | 1.03 | episode 10: 100% kept (audience 8.27), +5,406 new | $0 | $0 | $0 |
| 11 | 203,051 | 1.02 | episode 11: 100% kept (audience 8.27), +4,030 new | $0 | $0 | $0 |
| 12 | 206,055 | 1.01 | episode 12: 100% kept (audience 8.27), +3,004 new | $0 | $0 | $0 |
| 13 | 208,295 | 1.01 | episode 13: 100% kept (audience 8.27), +2,240 new | $0 | $0 | $0 |
| 14 | 209,964 | 1.01 | episode 14: 100% kept (audience 8.27), +1,669 new | $0 | $0 | $0 |
| 15 | 211,209 | 1.01 | episode 15: 100% kept (audience 8.27), +1,245 new | $0 | $0 | $0 |
| 16 | 73,923 | 0.35 | catch-up viewing (tail week 1/2) | $0 | $0 | $0 |
| 17 | 25,873 | 0.35 | catch-up viewing (tail week 2/2) | $0 | $0 | $0 |
| 18 | 0 | 0 | run ended | $0 | $0 | $0 |

**Progression trace**

- Prestige awards: Prestige +50: meters_all_70 (Lost Legacy).; Prestige +75: audience_7_5 (Lost Legacy).
- IP fans: {"before":0,"after":8308,"delta":8308}
- Star career: {"fameDelta":7.09,"relDelta":0.75,"grow":0,"level":9,"reasons":"worked together (+); project boosted their career (+)"}
- Rule labels: LOCKED = causal chain, accounting, fallback/no-campaign, thresholds 4.0/9.0, IP fan inheritance. WORKING ASSUMPTION = all formulas' shapes and numbers.

### Lost Legacy: Season 2 — Action + Superheroes (season)

Released week 440 (year 8.5) · Distributor: Streaming Original (self-funded, no box office) · Star: Fin Fox (L10, Fame 100) · IP: Lost Legacy
Format: **tv season 2**, 15 episodes (one per week) · 216,544 distinct viewers, 2,728,319 viewer-episodes · renewal: average 7.7 ≥ 4.0 → renewable
TV: show-age fatigue 1.1% (base 1.2%, quality slows by 5%) · twist none · hiatus 18 weeks since the last season aired → anticipation ×1 · announcement anticipation used 0.08
Joined the streaming catalog after its run (retention value only; no new payouts).

**Financial waterfall** [LOCKED rules; amounts provisional]

| Item | Amount |
|---|---:|
| Advance received (project reserve, not revenue) | $0 |
| Base cost (unavoidable) | −$240,000 |
| Star fee | −$48,194 |
| Marketing campaign | −$20,000 |
| Paid from studio cash (overrun) | $308,194 |
| **Unused advance kept at completion** | $0 |
| Gross from sales (18 weeks) | $0 |
| Distributor royalty (0% of weekly gross) | −$0 |
| **Studio take** | $0 |
| Net for this title (surplus + take − cash overrun; wages are studio-wide, excluded) | $-308,194 |

**Quality trace** [scores are computed, never rolled]

Meters (0–100): Plot 91.71 · Writing 92.28 · Filming 90.91 · Editing 87.91
Inputs: staff points {"plot":1385.08,"writing":1497.36,"filming":1320.59,"editing":875.88}, Star filming points 172.48 (Star family fit 100), studio Action level 4 (+12%), era bar x1.34
Base scores: Audience 9.02 / Critic 9.12 · no weak meter
Combo grades: Audience A (x1.15) / Critic C (x1) · repetition fatigue x0.79 · critic saturation x1
Before expectations (after combo, weakness, fatigue, saturation; pre-clamp): Audience 8.19 / Critic 7.21 · critic generation 0 (−0.0%, scale) · audience era 0 (−0.0%) · then clamp 0–10 (generation/era 0 = the ones active at game start)
**Final: Audience 8.19 / Critic 7.21 → avg 7.7**

**Opening & viewership trace** [marketing/Fame/reach affect viewers only]

Awareness inputs: base 0.35, marketing 0.55, studioBuzz 0, starFame 0.51, trend 0, ipFans 0.05, announcement 0.08 → awareness 0.79. Reach cap 220,000 → pool 172,766 → opening 51,830.

| Wk | Viewers | Retention | Driver | Gross | Studio | Distributor |
|---:|---:|---:|---|---:|---:|---:|
| 1 | 86,383 | 1 | episode 1 premiere | $0 | $0 | $0 |
| 2 | 107,116 | 1.24 | episode 2: 100% kept (critic 7.21), +20,733 new | $0 | $0 | $0 |
| 3 | 120,280 | 1.12 | episode 3: 100% kept (critic 7.21), +13,164 new | $0 | $0 | $0 |
| 4 | 136,505 | 1.13 | episode 4: 100% kept (audience 8.19), +16,225 new | $0 | $0 | $0 |
| 5 | 155,135 | 1.14 | episode 5: 100% kept (audience 8.19), +18,630 new | $0 | $0 | $0 |
| 6 | 171,953 | 1.11 | episode 6: 100% kept (audience 8.19), +16,818 new | $0 | $0 | $0 |
| 7 | 184,089 | 1.07 | episode 7: 100% kept (audience 8.19), +12,136 new | $0 | $0 | $0 |
| 8 | 193,206 | 1.05 | episode 8: 100% kept (audience 8.19), +9,117 new | $0 | $0 | $0 |
| 9 | 200,002 | 1.04 | episode 9: 100% kept (audience 8.19), +6,796 new | $0 | $0 | $0 |
| 10 | 205,075 | 1.03 | episode 10: 100% kept (audience 8.19), +5,073 new | $0 | $0 | $0 |
| 11 | 208,861 | 1.02 | episode 11: 100% kept (audience 8.19), +3,786 new | $0 | $0 | $0 |
| 12 | 211,687 | 1.01 | episode 12: 100% kept (audience 8.19), +2,826 new | $0 | $0 | $0 |
| 13 | 213,796 | 1.01 | episode 13: 100% kept (audience 8.19), +2,109 new | $0 | $0 | $0 |
| 14 | 215,370 | 1.01 | episode 14: 100% kept (audience 8.19), +1,574 new | $0 | $0 | $0 |
| 15 | 216,544 | 1.01 | episode 15: 100% kept (audience 8.19), +1,174 new | $0 | $0 | $0 |
| 16 | 75,790 | 0.35 | catch-up viewing (tail week 1/2) | $0 | $0 | $0 |
| 17 | 26,527 | 0.35 | catch-up viewing (tail week 2/2) | $0 | $0 | $0 |
| 18 | 0 | 0 | run ended | $0 | $0 | $0 |

**Progression trace**

- Prestige awards: Prestige +50: meters_all_70 (Lost Legacy: Season 2).; Prestige +75: audience_7_5 (Lost Legacy: Season 2).
- IP fans: {"before":7752,"after":17107,"delta":9355}
- Star career: {"fameDelta":7.98,"relDelta":0.75,"grow":0,"level":10,"reasons":"worked together (+); project boosted their career (+)"}
- Rule labels: LOCKED = causal chain, accounting, fallback/no-campaign, thresholds 4.0/9.0, IP fan inheritance. WORKING ASSUMPTION = all formulas' shapes and numbers.

### Lost Legacy: Season 3 — Action + Superheroes (season)

Released week 487 (year 9.4) · Distributor: Streaming Original (self-funded, no box office) · Star: Fin Fox (L10, Fame 100) · IP: Lost Legacy
Format: **tv season 3**, 20 episodes (one per week) · 219,185 distinct viewers, 3,830,864 viewer-episodes · renewal: average 7.54 ≥ 4.0 → renewable
TV: show-age fatigue 3.3% (base 3.6%, quality slows by 9%) · twist none · hiatus 29 weeks since the last season aired → anticipation ×1 · announcement anticipation used 0.05
Joined the streaming catalog after its run (retention value only; no new payouts).

**Financial waterfall** [LOCKED rules; amounts provisional]

| Item | Amount |
|---|---:|
| Advance received (project reserve, not revenue) | $0 |
| Base cost (unavoidable) | −$315,000 |
| Star fee | −$60,317 |
| Marketing campaign | −$20,000 |
| Paid from studio cash (overrun) | $395,317 |
| **Unused advance kept at completion** | $0 |
| Gross from sales (23 weeks) | $0 |
| Distributor royalty (0% of weekly gross) | −$0 |
| **Studio take** | $0 |
| Net for this title (surplus + take − cash overrun; wages are studio-wide, excluded) | $-395,317 |

**Quality trace** [scores are computed, never rolled]

Meters (0–100): Plot 91.81 · Writing 92.43 · Filming 91.17 · Editing 88.83
Inputs: staff points {"plot":1843.18,"writing":2008.22,"filming":1801.08,"editing":1256.73}, Star filming points 221.76 (Star family fit 100), studio Action level 4 (+12%), era bar x1.37
Base scores: Audience 9.06 / Critic 9.15 · no weak meter
Combo grades: Audience A (x1.15) / Critic C (x1) · repetition fatigue x0.77 · critic saturation x1
Before expectations (after combo, weakness, fatigue, saturation; pre-clamp): Audience 8.03 / Critic 7.04 · critic generation 0 (−0.0%, scale) · audience era 0 (−0.0%) · then clamp 0–10 (generation/era 0 = the ones active at game start)
**Final: Audience 8.03 / Critic 7.04 → avg 7.54**

**Opening & viewership trace** [marketing/Fame/reach affect viewers only]

Awareness inputs: base 0.35, marketing 0.55, studioBuzz 0, starFame 0.56, trend 0, ipFans 0.1, announcement 0.05 → awareness 0.8. Reach cap 220,000 → pool 175,909 → opening 52,773.

| Wk | Viewers | Retention | Driver | Gross | Studio | Distributor |
|---:|---:|---:|---|---:|---:|---:|
| 1 | 87,955 | 1 | episode 1 premiere | $0 | $0 | $0 |
| 2 | 108,849 | 1.24 | episode 2: 100% kept (critic 7.04), +20,894 new | $0 | $0 | $0 |
| 3 | 122,095 | 1.12 | episode 3: 100% kept (critic 7.04), +13,246 new | $0 | $0 | $0 |
| 4 | 138,074 | 1.13 | episode 4: 100% kept (audience 8.03), +15,979 new | $0 | $0 | $0 |
| 5 | 156,176 | 1.13 | episode 5: 100% kept (audience 8.03), +18,102 new | $0 | $0 | $0 |
| 6 | 172,616 | 1.11 | episode 6: 100% kept (audience 8.03), +16,440 new | $0 | $0 | $0 |
| 7 | 184,501 | 1.07 | episode 7: 100% kept (audience 8.03), +11,885 new | $0 | $0 | $0 |
| 8 | 193,451 | 1.05 | episode 8: 100% kept (audience 8.03), +8,950 new | $0 | $0 | $0 |
| 9 | 200,138 | 1.03 | episode 9: 100% kept (audience 8.03), +6,687 new | $0 | $0 | $0 |
| 10 | 205,142 | 1.03 | episode 10: 100% kept (audience 8.03), +5,004 new | $0 | $0 | $0 |
| 11 | 208,885 | 1.02 | episode 11: 100% kept (audience 8.03), +3,743 new | $0 | $0 | $0 |
| 12 | 211,685 | 1.01 | episode 12: 100% kept (audience 8.03), +2,800 new | $0 | $0 | $0 |
| 13 | 213,780 | 1.01 | episode 13: 100% kept (audience 8.03), +2,095 new | $0 | $0 | $0 |
| 14 | 215,347 | 1.01 | episode 14: 100% kept (audience 8.03), +1,567 new | $0 | $0 | $0 |
| 15 | 216,519 | 1.01 | episode 15: 100% kept (audience 8.03), +1,172 new | $0 | $0 | $0 |
| 16 | 217,396 | 1 | episode 16: 100% kept (audience 8.03), +877 new | $0 | $0 | $0 |
| 17 | 218,052 | 1 | episode 17: 100% kept (audience 8.03), +656 new | $0 | $0 | $0 |
| 18 | 218,543 | 1 | episode 18: 100% kept (audience 8.03), +491 new | $0 | $0 | $0 |
| 19 | 218,910 | 1 | episode 19: 100% kept (audience 8.03), +367 new | $0 | $0 | $0 |
| 20 | 219,185 | 1 | episode 20: 100% kept (audience 8.03), +275 new | $0 | $0 | $0 |
| 21 | 76,715 | 0.35 | catch-up viewing (tail week 1/2) | $0 | $0 | $0 |
| 22 | 26,850 | 0.35 | catch-up viewing (tail week 2/2) | $0 | $0 | $0 |
| 23 | 0 | 0 | run ended | $0 | $0 | $0 |

**Progression trace**

- Prestige awards: Prestige +50: meters_all_70 (Lost Legacy: Season 3).; Prestige +75: audience_7_5 (Lost Legacy: Season 3).; Prestige +150: ip_viewers_500k (Lost Legacy: Season 3).
- IP fans: {"before":15477,"after":24385,"delta":8908}
- Star career: {"fameDelta":7.54,"relDelta":0.75,"grow":0,"level":10,"reasons":"worked together (+); project boosted their career (+)"}
- Rule labels: LOCKED = causal chain, accounting, fallback/no-campaign, thresholds 4.0/9.0, IP fan inheritance. WORKING ASSUMPTION = all formulas' shapes and numbers.

### Lost Legacy: Season 4 — Action + Superheroes (season)

Released week 534 (year 10.3) · Distributor: Streaming Original (self-funded, no box office) · Star: Fin Fox (L10, Fame 100) · IP: Lost Legacy
Format: **tv season 4**, 20 episodes (one per week) · 219,188 distinct viewers, 3,815,378 viewer-episodes · renewal: average 7.26 ≥ 4.0 → renewable
TV: show-age fatigue 6.5% (base 7.0%, quality slows by 7%) · twist none · hiatus 24 weeks since the last season aired → anticipation ×1 · announcement anticipation used 0.05
Joined the streaming catalog after its run (retention value only; no new payouts).

**Financial waterfall** [LOCKED rules; amounts provisional]

| Item | Amount |
|---|---:|
| Advance received (project reserve, not revenue) | $0 |
| Base cost (unavoidable) | −$315,000 |
| Star fee | −$60,049 |
| Marketing campaign | −$20,000 |
| Paid from studio cash (overrun) | $395,049 |
| **Unused advance kept at completion** | $0 |
| Gross from sales (23 weeks) | $0 |
| Distributor royalty (0% of weekly gross) | −$0 |
| **Studio take** | $0 |
| Net for this title (surplus + take − cash overrun; wages are studio-wide, excluded) | $-395,049 |

**Quality trace** [scores are computed, never rolled]

Meters (0–100): Plot 91.93 · Writing 92.57 · Filming 91.3 · Editing 89.04
Inputs: staff points {"plot":1922.85,"writing":2101.92,"filming":1888.27,"editing":1318.21}, Star filming points 221.76 (Star family fit 100), studio Action level 4 (+12%), era bar x1.41
Base scores: Audience 9.08 / Critic 9.16 · no weak meter
Combo grades: Audience A (x1.15) / Critic C (x1) · repetition fatigue x0.74 · critic saturation x1
Before expectations (after combo, weakness, fatigue, saturation; pre-clamp): Audience 7.73 / Critic 6.78 · critic generation 0 (−0.0%, scale) · audience era 0 (−0.0%) · then clamp 0–10 (generation/era 0 = the ones active at game start)
**Final: Audience 7.73 / Critic 6.78 → avg 7.26**

**Opening & viewership trace** [marketing/Fame/reach affect viewers only]

Awareness inputs: base 0.35, marketing 0.55, studioBuzz 0, starFame 0.6, trend 0.15, ipFans 0.15, announcement 0.05 → awareness 0.84. Reach cap 220,000 → pool 185,253 → opening 55,576.

| Wk | Viewers | Retention | Driver | Gross | Studio | Distributor |
|---:|---:|---:|---|---:|---:|---:|
| 1 | 92,627 | 1 | episode 1 premiere | $0 | $0 | $0 |
| 2 | 113,041 | 1.22 | episode 2: 99% kept (critic 6.78), +21,637 new | $0 | $0 | $0 |
| 3 | 125,212 | 1.11 | episode 3: 99% kept (critic 6.78), +13,663 new | $0 | $0 | $0 |
| 4 | 140,831 | 1.12 | episode 4: 100% kept (audience 7.73), +15,619 new | $0 | $0 | $0 |
| 5 | 157,981 | 1.12 | episode 5: 100% kept (audience 7.73), +17,150 new | $0 | $0 | $0 |
| 6 | 172,989 | 1.09 | episode 6: 100% kept (audience 7.73), +15,008 new | $0 | $0 | $0 |
| 7 | 183,963 | 1.06 | episode 7: 100% kept (audience 7.73), +10,974 new | $0 | $0 | $0 |
| 8 | 192,252 | 1.05 | episode 8: 100% kept (audience 7.73), +8,289 new | $0 | $0 | $0 |
| 9 | 198,474 | 1.03 | episode 9: 100% kept (audience 7.73), +6,222 new | $0 | $0 | $0 |
| 10 | 203,150 | 1.02 | episode 10: 100% kept (audience 7.73), +4,676 new | $0 | $0 | $0 |
| 11 | 206,664 | 1.02 | episode 11: 100% kept (audience 7.73), +3,514 new | $0 | $0 | $0 |
| 12 | 209,304 | 1.01 | episode 12: 100% kept (audience 7.73), +2,640 new | $0 | $0 | $0 |
| 13 | 211,288 | 1.01 | episode 13: 100% kept (audience 7.73), +1,984 new | $0 | $0 | $0 |
| 14 | 212,779 | 1.01 | episode 14: 100% kept (audience 7.73), +1,491 new | $0 | $0 | $0 |
| 15 | 213,899 | 1.01 | episode 15: 100% kept (audience 7.73), +1,120 new | $0 | $0 | $0 |
| 16 | 214,741 | 1 | episode 16: 100% kept (audience 7.73), +842 new | $0 | $0 | $0 |
| 17 | 215,373 | 1 | episode 17: 100% kept (audience 7.73), +632 new | $0 | $0 | $0 |
| 18 | 215,848 | 1 | episode 18: 100% kept (audience 7.73), +475 new | $0 | $0 | $0 |
| 19 | 216,205 | 1 | episode 19: 100% kept (audience 7.73), +357 new | $0 | $0 | $0 |
| 20 | 216,473 | 1 | episode 20: 100% kept (audience 7.73), +268 new | $0 | $0 | $0 |
| 21 | 75,766 | 0.35 | catch-up viewing (tail week 1/2) | $0 | $0 | $0 |
| 22 | 26,518 | 0.35 | catch-up viewing (tail week 2/2) | $0 | $0 | $0 |
| 23 | 0 | 0 | run ended | $0 | $0 | $0 |

**Progression trace**

- Prestige awards: Prestige +50: meters_all_70 (Lost Legacy: Season 4).; Prestige +75: audience_7_5 (Lost Legacy: Season 4).
- IP fans: {"before":22276,"after":30202,"delta":7926}
- Star career: {"fameDelta":6.71,"relDelta":0.25,"grow":0,"level":10,"reasons":"worked together (+)"}
- Rule labels: LOCKED = causal chain, accounting, fallback/no-campaign, thresholds 4.0/9.0, IP fan inheritance. WORKING ASSUMPTION = all formulas' shapes and numbers.

### Lost Legacy: Season 5 — Action + Superheroes (season)

Released week 581 (year 11.2) · Distributor: Streaming Original (self-funded, no box office) · Star: Fin Fox (L10, Fame 100) · IP: Lost Legacy
Format: **tv season 5**, 20 episodes (one per week) · 219,116 distinct viewers, 3,724,327 viewer-episodes · renewal: average 6.77 ≥ 4.0 → renewable
TV: show-age fatigue 10.6% (base 11.0%, quality slows by 4%) · twist none · hiatus 24 weeks since the last season aired → anticipation ×1 · announcement anticipation used 0.05
Joined the streaming catalog after its run (retention value only; no new payouts).

**Financial waterfall** [LOCKED rules; amounts provisional]

| Item | Amount |
|---|---:|
| Advance received (project reserve, not revenue) | $0 |
| Base cost (unavoidable) | −$315,000 |
| Star fee | −$66,050 |
| Marketing campaign | −$20,000 |
| Paid from studio cash (overrun) | $401,050 |
| **Unused advance kept at completion** | $0 |
| Gross from sales (23 weeks) | $0 |
| Distributor royalty (0% of weekly gross) | −$0 |
| **Studio take** | $0 |
| Net for this title (surplus + take − cash overrun; wages are studio-wide, excluded) | $-401,050 |

**Quality trace** [scores are computed, never rolled]

Meters (0–100): Plot 92.01 · Writing 92.66 · Filming 91.38 · Editing 89.16
Inputs: staff points {"plot":1993.27,"writing":2185.34,"filming":1966.58,"editing":1368.49}, Star filming points 221.76 (Star family fit 100), studio Action level 4 (+12%), era bar x1.45
Base scores: Audience 9.09 / Critic 9.17 · no weak meter
Combo grades: Audience A (x1.15) / Critic C (x1) · repetition fatigue x0.69 · critic saturation x1
Before expectations (after combo, weakness, fatigue, saturation; pre-clamp): Audience 7.21 / Critic 6.33 · critic generation 0 (−0.0%, scale) · audience era 0 (−0.0%) · then clamp 0–10 (generation/era 0 = the ones active at game start)
**Final: Audience 7.21 / Critic 6.33 → avg 6.77**

**Opening & viewership trace** [marketing/Fame/reach affect viewers only]

Awareness inputs: base 0.35, marketing 0.55, studioBuzz 0, starFame 0.6, trend 0.4, ipFans 0.18, announcement 0.05 → awareness 0.88. Reach cap 220,000 → pool 193,862 → opening 58,159.

| Wk | Viewers | Retention | Driver | Gross | Studio | Distributor |
|---:|---:|---:|---|---:|---:|---:|
| 1 | 96,931 | 1 | episode 1 premiere | $0 | $0 | $0 |
| 2 | 115,113 | 1.19 | episode 2: 96% kept (critic 6.33), +22,079 new | $0 | $0 | $0 |
| 3 | 124,420 | 1.08 | episode 3: 96% kept (critic 6.33), +13,935 new | $0 | $0 | $0 |
| 4 | 138,808 | 1.12 | episode 4: 100% kept (audience 7.21), +14,388 new | $0 | $0 | $0 |
| 5 | 153,604 | 1.11 | episode 5: 100% kept (audience 7.21), +14,796 new | $0 | $0 | $0 |
| 6 | 168,067 | 1.09 | episode 6: 100% kept (audience 7.21), +14,463 new | $0 | $0 | $0 |
| 7 | 178,551 | 1.06 | episode 7: 100% kept (audience 7.21), +10,484 new | $0 | $0 | $0 |
| 8 | 186,556 | 1.04 | episode 8: 100% kept (audience 7.21), +8,005 new | $0 | $0 | $0 |
| 9 | 192,607 | 1.03 | episode 9: 100% kept (audience 7.21), +6,051 new | $0 | $0 | $0 |
| 10 | 197,190 | 1.02 | episode 10: 100% kept (audience 7.21), +4,583 new | $0 | $0 | $0 |
| 11 | 200,659 | 1.02 | episode 11: 100% kept (audience 7.21), +3,469 new | $0 | $0 | $0 |
| 12 | 203,286 | 1.01 | episode 12: 100% kept (audience 7.21), +2,627 new | $0 | $0 | $0 |
| 13 | 205,275 | 1.01 | episode 13: 100% kept (audience 7.21), +1,989 new | $0 | $0 | $0 |
| 14 | 206,781 | 1.01 | episode 14: 100% kept (audience 7.21), +1,506 new | $0 | $0 | $0 |
| 15 | 207,921 | 1.01 | episode 15: 100% kept (audience 7.21), +1,140 new | $0 | $0 | $0 |
| 16 | 208,784 | 1 | episode 16: 100% kept (audience 7.21), +863 new | $0 | $0 | $0 |
| 17 | 209,438 | 1 | episode 17: 100% kept (audience 7.21), +654 new | $0 | $0 | $0 |
| 18 | 209,933 | 1 | episode 18: 100% kept (audience 7.21), +495 new | $0 | $0 | $0 |
| 19 | 210,308 | 1 | episode 19: 100% kept (audience 7.21), +375 new | $0 | $0 | $0 |
| 20 | 210,591 | 1 | episode 20: 100% kept (audience 7.21), +283 new | $0 | $0 | $0 |
| 21 | 73,707 | 0.35 | catch-up viewing (tail week 1/2) | $0 | $0 | $0 |
| 22 | 25,797 | 0.35 | catch-up viewing (tail week 2/2) | $0 | $0 | $0 |
| 23 | 0 | 0 | run ended | $0 | $0 | $0 |

**Progression trace**

- Prestige awards: Prestige +50: meters_all_70 (Lost Legacy: Season 5).
- IP fans: {"before":27589,"after":33794,"delta":6205}
- Star career: {"fameDelta":5.25,"relDelta":0.25,"grow":0,"level":10,"reasons":"worked together (+)"}
- Rule labels: LOCKED = causal chain, accounting, fallback/no-campaign, thresholds 4.0/9.0, IP fan inheritance. WORKING ASSUMPTION = all formulas' shapes and numbers.

### Lost Legacy: Season 6 — Action + Superheroes (season)

Released week 628 (year 12.1) · Distributor: Streaming Original (self-funded, no box office) · Star: Fin Fox (L10, Fame 100) · IP: Lost Legacy
Format: **tv season 6**, 20 episodes (one per week) · 218,523 distinct viewers, 2,947,561 viewer-episodes · renewal: average 5.99 ≥ 4.0 → renewable
TV: show-age fatigue 15.8% (base 15.8%, quality slows by 0%) · twist none · hiatus 24 weeks since the last season aired → anticipation ×1 · announcement anticipation used 0.05
Joined the streaming catalog after its run (retention value only; no new payouts).

**Financial waterfall** [LOCKED rules; amounts provisional]

| Item | Amount |
|---|---:|
| Advance received (project reserve, not revenue) | $0 |
| Base cost (unavoidable) | −$315,000 |
| Star fee | −$66,000 |
| Marketing campaign | −$20,000 |
| Paid from studio cash (overrun) | $401,000 |
| **Unused advance kept at completion** | $0 |
| Gross from sales (23 weeks) | $0 |
| Distributor royalty (0% of weekly gross) | −$0 |
| **Studio take** | $0 |
| Net for this title (surplus + take − cash overrun; wages are studio-wide, excluded) | $-401,000 |

**Quality trace** [scores are computed, never rolled]

Meters (0–100): Plot 91.99 · Writing 92.66 · Filming 91.36 · Editing 89.23
Inputs: staff points {"plot":2037.66,"writing":2237.84,"filming":2014.97,"editing":1412.76}, Star filming points 221.76 (Star family fit 100), studio Action level 4 (+12%), era bar x1.48
Base scores: Audience 9.09 / Critic 9.17 · no weak meter
Combo grades: Audience A (x1.15) / Critic C (x1) · repetition fatigue x0.64 · critic saturation x0.9
Before expectations (after combo, weakness, fatigue, saturation; pre-clamp): Audience 6.69 / Critic 5.28 · critic generation 0 (−0.0%, scale) · audience era 0 (−0.0%) · then clamp 0–10 (generation/era 0 = the ones active at game start)
**Final: Audience 6.69 / Critic 5.28 → avg 5.99**

**Opening & viewership trace** [marketing/Fame/reach affect viewers only]

Awareness inputs: base 0.35, marketing 0.55, studioBuzz 0, starFame 0.6, trend 0.1, ipFans 0.2, announcement 0.05 → awareness 0.84. Reach cap 220,000 → pool 185,466 → opening 55,640.

| Wk | Viewers | Retention | Driver | Gross | Studio | Distributor |
|---:|---:|---:|---|---:|---:|---:|
| 1 | 92,733 | 1 | episode 1 premiere | $0 | $0 | $0 |
| 2 | 103,174 | 1.11 | episode 2: 90% kept (critic 5.28), +20,011 new | $0 | $0 | $0 |
| 3 | 105,265 | 1.02 | episode 3: 90% kept (critic 5.28), +12,739 new | $0 | $0 | $0 |
| 4 | 115,328 | 1.1 | episode 4: 98% kept (audience 6.69), +12,021 new | $0 | $0 | $0 |
| 5 | 124,330 | 1.08 | episode 5: 98% kept (audience 6.69), +11,147 new | $0 | $0 | $0 |
| 6 | 132,911 | 1.07 | episode 6: 98% kept (audience 6.69), +10,894 new | $0 | $0 | $0 |
| 7 | 141,451 | 1.06 | episode 7: 98% kept (audience 6.69), +11,012 new | $0 | $0 | $0 |
| 8 | 150,179 | 1.06 | episode 8: 98% kept (audience 6.69), +11,359 new | $0 | $0 | $0 |
| 9 | 156,470 | 1.04 | episode 9: 98% kept (audience 6.69), +9,084 new | $0 | $0 | $0 |
| 10 | 160,430 | 1.03 | episode 10: 98% kept (audience 6.69), +6,870 new | $0 | $0 | $0 |
| 11 | 162,695 | 1.01 | episode 11: 98% kept (audience 6.69), +5,249 new | $0 | $0 | $0 |
| 12 | 163,672 | 1.01 | episode 12: 98% kept (audience 6.69), +4,003 new | $0 | $0 | $0 |
| 13 | 163,682 | 1 | episode 13: 98% kept (audience 6.69), +3,054 new | $0 | $0 | $0 |
| 14 | 162,968 | 1 | episode 14: 98% kept (audience 6.69), +2,330 new | $0 | $0 | $0 |
| 15 | 161,714 | 0.99 | episode 15: 98% kept (audience 6.69), +1,777 new | $0 | $0 | $0 |
| 16 | 160,062 | 0.99 | episode 16: 98% kept (audience 6.69), +1,356 new | $0 | $0 | $0 |
| 17 | 158,119 | 0.99 | episode 17: 98% kept (audience 6.69), +1,034 new | $0 | $0 | $0 |
| 18 | 155,967 | 0.99 | episode 18: 98% kept (audience 6.69), +789 new | $0 | $0 | $0 |
| 19 | 153,668 | 0.99 | episode 19: 98% kept (audience 6.69), +602 new | $0 | $0 | $0 |
| 20 | 151,269 | 0.98 | episode 20: 98% kept (audience 6.69), +459 new | $0 | $0 | $0 |
| 21 | 52,944 | 0.35 | catch-up viewing (tail week 1/2) | $0 | $0 | $0 |
| 22 | 18,530 | 0.35 | catch-up viewing (tail week 2/2) | $0 | $0 | $0 |
| 23 | 0 | 0 | run ended | $0 | $0 | $0 |

**Progression trace**

- Prestige awards: Prestige +50: meters_all_70 (Lost Legacy: Season 6).
- IP fans: {"before":30870,"after":34331,"delta":3461}
- Star career: {"fameDelta":2.94,"relDelta":0.25,"grow":0,"level":10,"reasons":"worked together (+)"}
- Rule labels: LOCKED = causal chain, accounting, fallback/no-campaign, thresholds 4.0/9.0, IP fan inheritance. WORKING ASSUMPTION = all formulas' shapes and numbers.

### Last Frequency — Action + Spies (new)

Released week 644 (year 12.4) · Distributor: Streaming Original (self-funded, no box office) · Star: Alex Sato (L8, Fame 94) · IP: Last Frequency
Joined the streaming catalog after its run (retention value only; no new payouts).

**Financial waterfall** [LOCKED rules; amounts provisional]

| Item | Amount |
|---|---:|
| Advance received (project reserve, not revenue) | $0 |
| Base cost (unavoidable) | −$60,000 |
| Star fee | −$52,514 |
| Marketing campaign | −$20,000 |
| Paid from studio cash (overrun) | $132,514 |
| **Unused advance kept at completion** | $0 |
| Gross from sales (15 weeks) | $0 |
| Distributor royalty (0% of weekly gross) | −$0 |
| **Studio take** | $0 |
| Net for this title (surplus + take − cash overrun; wages are studio-wide, excluded) | $-132,514 |

**Quality trace** [scores are computed, never rolled]

Meters (0–100): Plot 92.54 · Writing 93.12 · Filming 91.42 · Editing 88.91
Inputs: staff points {"plot":771.78,"writing":842.08,"filming":714.6,"editing":479.72}, Star filming points 75.9 (Star family fit 100), studio Action level 5 (+15%), era bar x1.5
Base scores: Audience 9.1 / Critic 9.2 · no weak meter
Combo grades: Audience B (x1.06) / Critic B (x1.06) · repetition fatigue x0.9 · critic saturation x1
Before expectations (after combo, weakness, fatigue, saturation; pre-clamp): Audience 8.68 / Critic 8.78 · critic generation 0 (−0.0%, scale) · audience era 0 (−0.0%) · then clamp 0–10 (generation/era 0 = the ones active at game start)
**Final: Audience 8.68 / Critic 8.78 → avg 8.73**

**Opening & viewership trace** [marketing/Fame/reach affect viewers only]

Awareness inputs: base 0.35, marketing 0.55, studioBuzz 0, starFame 0.49, trend 0.4, ipFans 0 → awareness 0.83. Reach cap 220,000 → pool 183,439 → opening 55,032.

| Wk | Viewers | Retention | Driver | Gross | Studio | Distributor |
|---:|---:|---:|---|---:|---:|---:|
| 1 | 55,032 | 1 | opening (aware people watching) | $0 | $0 | $0 |
| 2 | 41,490 | 0.75 | critic 8.78: +3,317 newly aware (buzz) | $0 | $0 | $0 |
| 3 | 25,062 | 0.6 | critic 8.78: +4,414 newly aware (buzz) | $0 | $0 | $0 |
| 4 | 27,232 | 1.09 | audience 8.68: +36,891 newly aware (word of mouth) | $0 | $0 | $0 |
| 5 | 23,178 | 0.85 | audience 8.68: +21,751 newly aware (word of mouth) | $0 | $0 | $0 |
| 6 | 15,258 | 0.66 | audience 8.68: +5,932 newly aware (word of mouth) | $0 | $0 | $0 |
| 7 | 10,451 | 0.68 | audience 8.68: +5,049 newly aware (word of mouth) | $0 | $0 | $0 |
| 8 | 7,111 | 0.68 | audience 8.68: +3,324 newly aware (word of mouth) | $0 | $0 | $0 |
| 9 | 4,844 | 0.68 | audience 8.68: +2,277 newly aware (word of mouth) | $0 | $0 | $0 |
| 10 | 3,299 | 0.68 | audience 8.68: +1,549 newly aware (word of mouth) | $0 | $0 | $0 |
| 11 | 2,246 | 0.68 | audience 8.68: +1,055 newly aware (word of mouth) | $0 | $0 | $0 |
| 12 | 1,530 | 0.68 | audience 8.68: +719 newly aware (word of mouth) | $0 | $0 | $0 |
| 13 | 1,042 | 0.68 | audience 8.68: +489 newly aware (word of mouth) | $0 | $0 | $0 |
| 14 | 710 | 0.68 | audience 8.68: +333 newly aware (word of mouth) | $0 | $0 | $0 |
| 15 | 0 | 0 | audience 8.68: +227 newly aware (word of mouth) | $0 | $0 | $0 |

**Progression trace**

- Prestige awards: Prestige +50: meters_all_70 (Last Frequency).; Prestige +75: audience_7_5 (Last Frequency).; Prestige +85: critic_8_5 (Last Frequency).
- IP fans: {"before":0,"after":13039,"delta":13039}
- Star career: {"fameDelta":11.06,"relDelta":0.75,"grow":0,"level":8,"reasons":"worked together (+); project boosted their career (+)"}
- Rule labels: LOCKED = causal chain, accounting, fallback/no-campaign, thresholds 4.0/9.0, IP fan inheritance. WORKING ASSUMPTION = all formulas' shapes and numbers.

### Midnight Echo — Horror + Spies (new)

Released week 691 (year 13.3) · Distributor: Streaming Original (self-funded, no box office) · Star: Dee Reyes (L8, Fame 31) · IP: Midnight Echo
Format: **tv season 1**, 20 episodes (one per week) · 219,293 distinct viewers, 3,714,381 viewer-episodes · renewal: average 8.51 ≥ 4.0 → renewable
Joined the streaming catalog after its run (retention value only; no new payouts).

**Financial waterfall** [LOCKED rules; amounts provisional]

| Item | Amount |
|---|---:|
| Advance received (project reserve, not revenue) | $0 |
| Base cost (unavoidable) | −$315,000 |
| Star fee | −$5,924 |
| Marketing campaign | −$20,000 |
| Paid from studio cash (overrun) | $340,924 |
| **Unused advance kept at completion** | $0 |
| Gross from sales (23 weeks) | $0 |
| Distributor royalty (0% of weekly gross) | −$0 |
| **Studio take** | $0 |
| Net for this title (surplus + take − cash overrun; wages are studio-wide, excluded) | $-340,924 |

**Quality trace** [scores are computed, never rolled]

Meters (0–100): Plot 91.73 · Writing 92.42 · Filming 91.03 · Editing 88.98
Inputs: staff points {"plot":2030.48,"writing":2234.47,"filming":2007.04,"editing":1421.53}, Star filming points 209.88 (Star family fit 100), studio Horror level 2 (+6%), era bar x1.53
Base scores: Audience 9.06 / Critic 9.15 · no weak meter
Combo grades: Audience B (x1.06) / Critic D (x0.9) · repetition fatigue x1 · critic saturation x0.9
Before expectations (after combo, weakness, fatigue, saturation; pre-clamp): Audience 9.61 / Critic 7.41 · critic generation 0 (−0.0%, scale) · audience era 0 (−0.0%) · then clamp 0–10 (generation/era 0 = the ones active at game start)
**Final: Audience 9.61 / Critic 7.41 → avg 8.51**

**Opening & viewership trace** [marketing/Fame/reach affect viewers only]

Awareness inputs: base 0.35, marketing 0.55, studioBuzz 0, starFame 0.05, trend 0.1, ipFans 0, announcement 0 → awareness 0.65. Reach cap 220,000 → pool 143,321 → opening 42,996.

| Wk | Viewers | Retention | Driver | Gross | Studio | Distributor |
|---:|---:|---:|---|---:|---:|---:|
| 1 | 71,661 | 1 | episode 1 premiere | $0 | $0 | $0 |
| 2 | 89,345 | 1.25 | episode 2: 100% kept (critic 7.41), +17,684 new | $0 | $0 | $0 |
| 3 | 100,856 | 1.13 | episode 3: 100% kept (critic 7.41), +11,511 new | $0 | $0 | $0 |
| 4 | 118,603 | 1.18 | episode 4: 100% kept (audience 9.61), +17,747 new | $0 | $0 | $0 |
| 5 | 140,821 | 1.19 | episode 5: 100% kept (audience 9.61), +22,218 new | $0 | $0 | $0 |
| 6 | 162,871 | 1.16 | episode 6: 100% kept (audience 9.61), +22,050 new | $0 | $0 | $0 |
| 7 | 178,155 | 1.09 | episode 7: 100% kept (audience 9.61), +15,284 new | $0 | $0 | $0 |
| 8 | 189,440 | 1.06 | episode 8: 100% kept (audience 9.61), +11,285 new | $0 | $0 | $0 |
| 9 | 197,669 | 1.04 | episode 9: 100% kept (audience 9.61), +8,229 new | $0 | $0 | $0 |
| 10 | 203,684 | 1.03 | episode 10: 100% kept (audience 9.61), +6,015 new | $0 | $0 | $0 |
| 11 | 208,079 | 1.02 | episode 11: 100% kept (audience 9.61), +4,395 new | $0 | $0 | $0 |
| 12 | 211,290 | 1.02 | episode 12: 100% kept (audience 9.61), +3,211 new | $0 | $0 | $0 |
| 13 | 213,636 | 1.01 | episode 13: 100% kept (audience 9.61), +2,346 new | $0 | $0 | $0 |
| 14 | 215,350 | 1.01 | episode 14: 100% kept (audience 9.61), +1,714 new | $0 | $0 | $0 |
| 15 | 216,602 | 1.01 | episode 15: 100% kept (audience 9.61), +1,252 new | $0 | $0 | $0 |
| 16 | 217,517 | 1 | episode 16: 100% kept (audience 9.61), +915 new | $0 | $0 | $0 |
| 17 | 218,186 | 1 | episode 17: 100% kept (audience 9.61), +669 new | $0 | $0 | $0 |
| 18 | 218,675 | 1 | episode 18: 100% kept (audience 9.61), +489 new | $0 | $0 | $0 |
| 19 | 219,032 | 1 | episode 19: 100% kept (audience 9.61), +357 new | $0 | $0 | $0 |
| 20 | 219,293 | 1 | episode 20: 100% kept (audience 9.61), +261 new | $0 | $0 | $0 |
| 21 | 76,753 | 0.35 | catch-up viewing (tail week 1/2) | $0 | $0 | $0 |
| 22 | 26,863 | 0.35 | catch-up viewing (tail week 2/2) | $0 | $0 | $0 |
| 23 | 0 | 0 | run ended | $0 | $0 | $0 |

**Progression trace**

- Prestige awards: Prestige +50: meters_all_70 (Midnight Echo).; Prestige +75: audience_7_5 (Midnight Echo).
- IP fans: {"before":0,"after":12315,"delta":12315}
- Star career: {"fameDelta":10.42,"relDelta":0.75,"grow":0,"level":7,"reasons":"worked together (+); project boosted their career (+)"}
- Rule labels: LOCKED = causal chain, accounting, fallback/no-campaign, thresholds 4.0/9.0, IP fan inheritance. WORKING ASSUMPTION = all formulas' shapes and numbers.

### Midnight Echo: Season 2 — Horror + Spies (season)

Released week 738 (year 14.2) · Distributor: Streaming Original (self-funded, no box office) · Star: Dee Reyes (L8, Fame 31) · IP: Midnight Echo
Format: **tv season 2**, 20 episodes (one per week) · 219,342 distinct viewers, 3,757,937 viewer-episodes · renewal: average 8.86 ≥ 4.0 → renewable
TV: show-age fatigue 1.0% (base 1.2%, quality slows by 20%) · twist none · hiatus 24 weeks since the last season aired → anticipation ×1 · announcement anticipation used 0.05
Joined the streaming catalog after its run (retention value only; no new payouts).

**Financial waterfall** [LOCKED rules; amounts provisional]

| Item | Amount |
|---|---:|
| Advance received (project reserve, not revenue) | $0 |
| Base cost (unavoidable) | −$315,000 |
| Star fee | −$5,924 |
| Marketing campaign | −$20,000 |
| Paid from studio cash (overrun) | $340,924 |
| **Unused advance kept at completion** | $0 |
| Gross from sales (23 weeks) | $0 |
| Distributor royalty (0% of weekly gross) | −$0 |
| **Studio take** | $0 |
| Net for this title (surplus + take − cash overrun; wages are studio-wide, excluded) | $-340,924 |

**Quality trace** [scores are computed, never rolled]

Meters (0–100): Plot 91.93 · Writing 92.62 · Filming 91.28 · Editing 89.24
Inputs: staff points {"plot":2135.57,"writing":2353.38,"filming":2125.07,"editing":1495.43}, Star filming points 215.82 (Star family fit 100), studio Horror level 3 (+9%), era bar x1.57
Base scores: Audience 9.09 / Critic 9.17 · no weak meter
Combo grades: Audience B (x1.06) / Critic D (x0.9) · repetition fatigue x0.99 · critic saturation x1
Before expectations (after combo, weakness, fatigue, saturation; pre-clamp): Audience 9.54 / Critic 8.17 · critic generation 0 (−0.0%, scale) · audience era 0 (−0.0%) · then clamp 0–10 (generation/era 0 = the ones active at game start)
**Final: Audience 9.54 / Critic 8.17 → avg 8.86**

**Opening & viewership trace** [marketing/Fame/reach affect viewers only]

Awareness inputs: base 0.35, marketing 0.55, studioBuzz 0, starFame 0.12, trend 0, ipFans 0.07, announcement 0.05 → awareness 0.68. Reach cap 220,000 → pool 149,641 → opening 44,892.

| Wk | Viewers | Retention | Driver | Gross | Studio | Distributor |
|---:|---:|---:|---|---:|---:|---:|
| 1 | 74,821 | 1 | episode 1 premiere | $0 | $0 | $0 |
| 2 | 94,015 | 1.26 | episode 2: 100% kept (critic 8.17), +19,194 new | $0 | $0 | $0 |
| 3 | 106,474 | 1.13 | episode 3: 100% kept (critic 8.17), +12,459 new | $0 | $0 | $0 |
| 4 | 124,822 | 1.17 | episode 4: 100% kept (audience 9.54), +18,348 new | $0 | $0 | $0 |
| 5 | 147,802 | 1.18 | episode 5: 100% kept (audience 9.54), +22,980 new | $0 | $0 | $0 |
| 6 | 167,559 | 1.13 | episode 6: 100% kept (audience 9.54), +19,757 new | $0 | $0 | $0 |
| 7 | 181,591 | 1.08 | episode 7: 100% kept (audience 9.54), +14,032 new | $0 | $0 | $0 |
| 8 | 191,914 | 1.06 | episode 8: 100% kept (audience 9.54), +10,323 new | $0 | $0 | $0 |
| 9 | 199,456 | 1.04 | episode 9: 100% kept (audience 9.54), +7,542 new | $0 | $0 | $0 |
| 10 | 204,974 | 1.03 | episode 10: 100% kept (audience 9.54), +5,518 new | $0 | $0 | $0 |
| 11 | 209,009 | 1.02 | episode 11: 100% kept (audience 9.54), +4,035 new | $0 | $0 | $0 |
| 12 | 211,961 | 1.01 | episode 12: 100% kept (audience 9.54), +2,952 new | $0 | $0 | $0 |
| 13 | 214,120 | 1.01 | episode 13: 100% kept (audience 9.54), +2,159 new | $0 | $0 | $0 |
| 14 | 215,699 | 1.01 | episode 14: 100% kept (audience 9.54), +1,579 new | $0 | $0 | $0 |
| 15 | 216,854 | 1.01 | episode 15: 100% kept (audience 9.54), +1,155 new | $0 | $0 | $0 |
| 16 | 217,699 | 1 | episode 16: 100% kept (audience 9.54), +845 new | $0 | $0 | $0 |
| 17 | 218,317 | 1 | episode 17: 100% kept (audience 9.54), +618 new | $0 | $0 | $0 |
| 18 | 218,769 | 1 | episode 18: 100% kept (audience 9.54), +452 new | $0 | $0 | $0 |
| 19 | 219,100 | 1 | episode 19: 100% kept (audience 9.54), +331 new | $0 | $0 | $0 |
| 20 | 219,342 | 1 | episode 20: 100% kept (audience 9.54), +242 new | $0 | $0 | $0 |
| 21 | 76,770 | 0.35 | catch-up viewing (tail week 1/2) | $0 | $0 | $0 |
| 22 | 26,869 | 0.35 | catch-up viewing (tail week 2/2) | $0 | $0 | $0 |
| 23 | 0 | 0 | run ended | $0 | $0 | $0 |

**Progression trace**

- Prestige awards: Prestige +50: meters_all_70 (Midnight Echo: Season 2).; Prestige +75: audience_7_5 (Midnight Echo: Season 2).
- IP fans: {"before":11250,"after":24797,"delta":13547}
- Star career: {"fameDelta":11.46,"relDelta":0.75,"grow":0,"level":8,"reasons":"worked together (+); project boosted their career (+)"}
- Rule labels: LOCKED = causal chain, accounting, fallback/no-campaign, thresholds 4.0/9.0, IP fan inheritance. WORKING ASSUMPTION = all formulas' shapes and numbers.

## Cash ledger (studio cash only)

| Week | Kind | Amount | Note |
|---:|---|---:|---|
| 0 | start_cash | $40,000 |  |
| 0 | advance_received | $57,000 | advance from Wolf Pictures (project reserve, not revenue) |
| 0 | advance_spent | $-57,000 | base_cost: unavoidable base cost |
| 0 | base_cost | $-3,000 | unavoidable base cost |
| 7 | star_fee | $-5,621 | Bo Hart |
| 16 | advance_received | $100,000 | advance from Wolf Pictures (project reserve, not revenue) |
| 16 | advance_spent | $-60,000 | base_cost: unavoidable base cost |
| 23 | advance_spent | $-40,000 | star_fee: Sam Imai |
| 23 | star_fee | $-2,005 | Sam Imai |
| 29 | campaign | $-20,000 | medium |
| 32 | advance_received | $95,000 | advance from Wolf Pictures (project reserve, not revenue) |
| 32 | advance_spent | $-60,000 | base_cost: unavoidable base cost |
| 39 | advance_spent | $-35,000 | star_fee: Sam Imai |
| 39 | star_fee | $-7,005 | Sam Imai |
| 45 | campaign | $-20,000 | medium |
| 48 | hire | $-20,000 | Gus Novak |
| 48 | hire | $-20,000 | Bo Diaz |
| 48 | advance_received | $104,000 | advance from Wolf Pictures (project reserve, not revenue) |
| 48 | advance_spent | $-60,000 | base_cost: unavoidable base cost |
| 55 | advance_spent | $-5,050 | star_fee: Ari Reyes |
| 61 | advance_spent | $-20,000 | campaign: medium |
| 64 | surplus_transfer | $18,950 | unused advance kept at completion (not sales revenue) |
| 64 | train | $-15,000 | Bo Diaz |
| 64 | train | $-15,000 | Gus Novak |
| 64 | advance_received | $93,000 | advance from Wolf Pictures (project reserve, not revenue) |
| 64 | advance_spent | $-60,000 | base_cost: unavoidable base cost |
| 71 | advance_spent | $-17,993 | star_fee: Alex Sato |
| 77 | advance_spent | $-15,007 | campaign: medium |
| 77 | campaign | $-4,993 | medium |
| 80 | train | $-15,000 | Bo Diaz |
| 80 | train | $-15,000 | Gus Novak |
| 80 | advance_received | $87,000 | advance from Orbit Releasing (project reserve, not revenue) |
| 80 | advance_spent | $-60,000 | base_cost: unavoidable base cost |
| 87 | advance_spent | $-27,000 | star_fee: Dee Grant |
| 87 | star_fee | $-7,827 | Dee Grant |
| 93 | campaign | $-20,000 | medium |
| 96 | train | $-15,000 | Sam |
| 96 | train | $-15,000 | Bo Diaz |
| 96 | advance_received | $73,000 | advance from Orbit Releasing (project reserve, not revenue) |
| 96 | advance_spent | $-60,000 | base_cost: unavoidable base cost |
| 103 | advance_spent | $-13,000 | star_fee: Kai Moreau |
| 103 | star_fee | $-8,206 | Kai Moreau |
| 109 | campaign | $-20,000 | medium |
| 112 | upgrade | $-250,000 | studio capacity 4 -> 6 |
| 112 | hire | $-20,000 | Jo Moreau |
| 112 | hire | $-20,000 | Eli Quinn |
| 112 | advance_received | $113,000 | advance from XYZ Network (project reserve, not revenue) |
| 112 | advance_spent | $-60,000 | base_cost: unavoidable base cost |
| 119 | advance_spent | $-20,758 | star_fee: Alex Sato |
| 125 | advance_spent | $-20,000 | campaign: medium |
| 128 | surplus_transfer | $12,242 | unused advance kept at completion (not sales revenue) |
| 128 | format_unlock | $-150,000 | TV series |
| 128 | train | $-15,000 | Eli Quinn |
| 128 | train | $-15,000 | Jo Moreau |
| 128 | advance_received | $121,000 | advance from XYZ Network (project reserve, not revenue) |
| 128 | advance_spent | $-60,000 | base_cost: unavoidable base cost |
| 135 | advance_spent | $-20,263 | star_fee: Alex Sato |
| 141 | advance_spent | $-20,000 | campaign: medium |
| 144 | surplus_transfer | $20,737 | unused advance kept at completion (not sales revenue) |
| 144 | train | $-15,000 | Eli Quinn |
| 144 | train | $-15,000 | Jo Moreau |
| 144 | advance_received | $97,000 | advance from Meridian Global (project reserve, not revenue) |
| 144 | advance_spent | $-60,000 | base_cost: unavoidable base cost |
| 151 | advance_spent | $-37,000 | star_fee: Sam Imai |
| 151 | star_fee | $-2,919 | Sam Imai |
| 157 | campaign | $-20,000 | medium |
| 160 | train | $-15,000 | Eli Quinn |
| 160 | train | $-15,000 | Jo Moreau |
| 160 | advance_received | $141,000 | advance from XYZ Network (project reserve, not revenue) |
| 160 | advance_spent | $-60,000 | base_cost: unavoidable base cost |
| 167 | advance_spent | $-37,763 | star_fee: Alex Sato |
| 173 | advance_spent | $-20,000 | campaign: medium |
| 176 | surplus_transfer | $23,237 | unused advance kept at completion (not sales revenue) |
| 176 | upgrade | $-750,000 | studio capacity 6 -> 8 |
| 176 | hire | $-20,000 | Lee Okafor |
| 176 | train | $-15,000 | Lee Okafor |
| 176 | advance_received | $138,000 | advance from Meridian Global (project reserve, not revenue) |
| 176 | advance_spent | $-60,000 | base_cost: unavoidable base cost |
| 183 | advance_spent | $-36,253 | star_fee: Alex Sato |
| 189 | advance_spent | $-20,000 | campaign: medium |
| 192 | surplus_transfer | $21,747 | unused advance kept at completion (not sales revenue) |
| 192 | train | $-15,000 | Lee Okafor |
| 192 | train | $-15,000 | Lee Okafor |
| 192 | advance_received | $95,000 | advance from Orbit Releasing (project reserve, not revenue) |
| 192 | advance_spent | $-60,000 | base_cost: unavoidable base cost |
| 199 | advance_spent | $-7,712 | star_fee: Fin Fox |
| 205 | advance_spent | $-20,000 | campaign: medium |
| 208 | surplus_transfer | $7,288 | unused advance kept at completion (not sales revenue) |
| 208 | train | $-15,000 | Eli Quinn |
| 208 | train | $-15,000 | Lee Okafor |
| 208 | advance_received | $151,000 | advance from XYZ Network (project reserve, not revenue) |
| 208 | advance_spent | $-60,000 | base_cost: unavoidable base cost |
| 215 | advance_spent | $-7,704 | star_fee: Fin Fox |
| 221 | advance_spent | $-20,000 | campaign: medium |
| 224 | surplus_transfer | $63,296 | unused advance kept at completion (not sales revenue) |
| 224 | train | $-15,000 | Jo Moreau |
| 224 | train | $-15,000 | Eli Quinn |
| 224 | advance_received | $131,000 | advance from Meridian Global (project reserve, not revenue) |
| 224 | advance_spent | $-60,000 | base_cost: unavoidable base cost |
| 231 | advance_spent | $-43,691 | star_fee: Sam Imai |
| 237 | advance_spent | $-20,000 | campaign: medium |
| 240 | surplus_transfer | $7,309 | unused advance kept at completion (not sales revenue) |
| 240 | train | $-15,000 | Lee Okafor |
| 240 | train | $-15,000 | Jo Moreau |
| 240 | advance_received | $157,000 | advance from Meridian Global (project reserve, not revenue) |
| 240 | advance_spent | $-60,000 | base_cost: unavoidable base cost |
| 247 | advance_spent | $-21,527 | star_fee: Fin Fox |
| 253 | advance_spent | $-20,000 | campaign: medium |
| 256 | surplus_transfer | $55,473 | unused advance kept at completion (not sales revenue) |
| 256 | train | $-15,000 | Eli Quinn |
| 256 | train | $-15,000 | Alex |
| 256 | advance_received | $128,000 | advance from Meridian Global (project reserve, not revenue) |
| 256 | advance_spent | $-60,000 | base_cost: unavoidable base cost |
| 263 | advance_spent | $-21,405 | star_fee: Fin Fox |
| 269 | advance_spent | $-20,000 | campaign: medium |
| 272 | surplus_transfer | $26,595 | unused advance kept at completion (not sales revenue) |
| 272 | train | $-15,000 | Lee Okafor |
| 272 | train | $-15,000 | Gus Novak |
| 272 | advance_received | $135,000 | advance from Meridian Global (project reserve, not revenue) |
| 272 | advance_spent | $-60,000 | base_cost: unavoidable base cost |
| 279 | advance_spent | $-31,804 | star_fee: Fin Fox |
| 285 | advance_spent | $-20,000 | campaign: medium |
| 288 | surplus_transfer | $23,196 | unused advance kept at completion (not sales revenue) |
| 288 | train | $-15,000 | Sam |
| 288 | train | $-15,000 | Bo Diaz |
| 288 | advance_received | $104,000 | advance from Wolf Pictures (project reserve, not revenue) |
| 288 | advance_spent | $-60,000 | base_cost: unavoidable base cost |
| 295 | advance_spent | $-23,477 | star_fee: Kai Moreau |
| 301 | advance_spent | $-20,000 | campaign: medium |
| 304 | surplus_transfer | $523 | unused advance kept at completion (not sales revenue) |
| 304 | hire | $-25,000 | Max Grant (Software Engineer) |
| 304 | platform_build | $-600,000 | streaming service build |
| 304 | train | $-15,000 | Max Grant |
| 304 | train | $-15,000 | Max Grant |
| 304 | advance_received | $128,000 | advance from XYZ Network (project reserve, not revenue) |
| 304 | advance_spent | $-60,000 | base_cost: unavoidable base cost |
| 311 | advance_spent | $-49,031 | star_fee: Sam Imai |
| 317 | advance_spent | $-18,969 | campaign: medium |
| 317 | campaign | $-1,031 | medium |
| 320 | train | $-15,000 | Max Grant |
| 320 | train | $-15,000 | Max Grant |
| 320 | advance_received | $146,000 | advance from XYZ Network (project reserve, not revenue) |
| 320 | advance_spent | $-60,000 | base_cost: unavoidable base cost |
| 327 | advance_spent | $-32,529 | star_fee: Kai Moreau |
| 333 | advance_spent | $-20,000 | campaign: medium |
| 335 | subscriptions | $11,814 | 23628 subscribers |
| 335 | platform_opex | $-11,544 | platform operating cost |
| 336 | subscriptions | $11,765 | 23529 subscribers |
| 336 | platform_opex | $-11,529 | platform operating cost |
| 336 | surplus_transfer | $33,471 | unused advance kept at completion (not sales revenue) |
| 336 | train | $-15,000 | Max Grant |
| 336 | train | $-15,000 | Max Grant |
| 336 | base_cost | $-60,000 | unavoidable base cost |
| 337 | subscriptions | $11,715 | 23430 subscribers |
| 337 | platform_opex | $-11,514 | platform operating cost |
| 338 | subscriptions | $11,666 | 23332 subscribers |
| 338 | platform_opex | $-11,500 | platform operating cost |
| 339 | subscriptions | $11,617 | 23234 subscribers |
| 339 | platform_opex | $-11,485 | platform operating cost |
| 340 | subscriptions | $11,568 | 23136 subscribers |
| 340 | platform_opex | $-11,470 | platform operating cost |
| 341 | subscriptions | $11,520 | 23039 subscribers |
| 341 | platform_opex | $-11,456 | platform operating cost |
| 342 | subscriptions | $11,471 | 22942 subscribers |
| 342 | platform_opex | $-11,441 | platform operating cost |
| 343 | subscriptions | $11,423 | 22846 subscribers |
| 343 | platform_opex | $-11,427 | platform operating cost |
| 343 | star_fee | $-32,454 | Kai Moreau |
| 344 | subscriptions | $11,374 | 22747 subscribers |
| 344 | platform_opex | $-11,412 | platform operating cost |
| 345 | subscriptions | $11,325 | 22649 subscribers |
| 345 | platform_opex | $-11,397 | platform operating cost |
| 346 | subscriptions | $11,276 | 22551 subscribers |
| 346 | platform_opex | $-11,383 | platform operating cost |
| 347 | subscriptions | $11,227 | 22454 subscribers |
| 347 | platform_opex | $-11,368 | platform operating cost |
| 348 | subscriptions | $11,179 | 22357 subscribers |
| 348 | platform_opex | $-11,354 | platform operating cost |
| 349 | subscriptions | $11,130 | 22260 subscribers |
| 349 | platform_opex | $-11,339 | platform operating cost |
| 349 | campaign | $-20,000 | medium |
| 350 | subscriptions | $11,082 | 22164 subscribers |
| 350 | platform_opex | $-11,325 | platform operating cost |
| 351 | subscriptions | $15,756 | 31512 subscribers |
| 351 | platform_opex | $-12,727 | platform operating cost |
| 352 | subscriptions | $15,690 | 31380 subscribers |
| 352 | platform_opex | $-12,707 | platform operating cost |
| 352 | train | $-15,000 | Max Grant |
| 352 | train | $-15,000 | Max Grant |
| 352 | base_cost | $-60,000 | unavoidable base cost |
| 353 | subscriptions | $21,773 | 43546 subscribers |
| 353 | platform_opex | $-14,532 | platform operating cost |
| 354 | subscriptions | $25,647 | 51293 subscribers |
| 354 | platform_opex | $-15,694 | platform operating cost |
| 355 | subscriptions | $27,769 | 55537 subscribers |
| 355 | platform_opex | $-16,331 | platform operating cost |
| 356 | subscriptions | $29,997 | 59994 subscribers |
| 356 | platform_opex | $-16,999 | platform operating cost |
| 357 | subscriptions | $32,271 | 64541 subscribers |
| 357 | platform_opex | $-17,681 | platform operating cost |
| 358 | subscriptions | $33,748 | 67496 subscribers |
| 358 | platform_opex | $-18,124 | platform operating cost |
| 359 | subscriptions | $34,632 | 69264 subscribers |
| 359 | platform_opex | $-18,390 | platform operating cost |
| 359 | star_fee | $-41,718 | Fin Fox |
| 360 | subscriptions | $35,161 | 70321 subscribers |
| 360 | platform_opex | $-18,548 | platform operating cost |
| 361 | subscriptions | $35,460 | 70920 subscribers |
| 361 | platform_opex | $-18,638 | platform operating cost |
| 362 | subscriptions | $35,606 | 71212 subscribers |
| 362 | platform_opex | $-18,682 | platform operating cost |
| 363 | subscriptions | $35,653 | 71306 subscribers |
| 363 | platform_opex | $-18,696 | platform operating cost |
| 364 | subscriptions | $35,634 | 71268 subscribers |
| 364 | platform_opex | $-18,690 | platform operating cost |
| 365 | subscriptions | $35,571 | 71141 subscribers |
| 365 | platform_opex | $-18,671 | platform operating cost |
| 365 | campaign | $-20,000 | medium |
| 366 | subscriptions | $35,478 | 70955 subscribers |
| 366 | platform_opex | $-18,643 | platform operating cost |
| 367 | subscriptions | $35,324 | 70648 subscribers |
| 367 | platform_opex | $-18,597 | platform operating cost |
| 368 | subscriptions | $35,172 | 70343 subscribers |
| 368 | platform_opex | $-18,551 | platform operating cost |
| 368 | train | $-15,000 | Max Grant |
| 368 | train | $-15,000 | Max Grant |
| 368 | base_cost | $-240,000 | unavoidable base cost |
| 369 | subscriptions | $38,933 | 77866 subscribers |
| 369 | platform_opex | $-19,680 | platform operating cost |
| 370 | subscriptions | $41,139 | 82277 subscribers |
| 370 | platform_opex | $-20,342 | platform operating cost |
| 371 | subscriptions | $42,255 | 84510 subscribers |
| 371 | platform_opex | $-20,676 | platform operating cost |
| 372 | subscriptions | $43,464 | 86928 subscribers |
| 372 | platform_opex | $-21,039 | platform operating cost |
| 373 | subscriptions | $44,488 | 88976 subscribers |
| 373 | platform_opex | $-21,346 | platform operating cost |
| 374 | subscriptions | $45,032 | 90063 subscribers |
| 374 | platform_opex | $-21,509 | platform operating cost |
| 375 | subscriptions | $45,322 | 90643 subscribers |
| 375 | platform_opex | $-21,596 | platform operating cost |
| 376 | subscriptions | $45,447 | 90893 subscribers |
| 376 | platform_opex | $-21,634 | platform operating cost |
| 377 | subscriptions | $45,465 | 90929 subscribers |
| 377 | platform_opex | $-21,639 | platform operating cost |
| 378 | subscriptions | $45,412 | 90824 subscribers |
| 378 | platform_opex | $-21,624 | platform operating cost |
| 379 | subscriptions | $45,307 | 90614 subscribers |
| 379 | platform_opex | $-21,592 | platform operating cost |
| 380 | subscriptions | $45,170 | 90340 subscribers |
| 380 | platform_opex | $-21,551 | platform operating cost |
| 381 | subscriptions | $45,012 | 90024 subscribers |
| 381 | platform_opex | $-21,504 | platform operating cost |
| 382 | subscriptions | $44,840 | 89679 subscribers |
| 382 | platform_opex | $-21,452 | platform operating cost |
| 383 | subscriptions | $44,641 | 89281 subscribers |
| 383 | platform_opex | $-21,392 | platform operating cost |
| 383 | star_fee | $-48,291 | Fin Fox |
| 384 | subscriptions | $44,443 | 88885 subscribers |
| 384 | platform_opex | $-21,333 | platform operating cost |
| 385 | subscriptions | $44,245 | 88490 subscribers |
| 385 | platform_opex | $-21,273 | platform operating cost |
| 386 | subscriptions | $44,049 | 88097 subscribers |
| 386 | platform_opex | $-21,215 | platform operating cost |
| 387 | subscriptions | $43,848 | 87695 subscribers |
| 387 | platform_opex | $-21,154 | platform operating cost |
| 388 | subscriptions | $43,648 | 87295 subscribers |
| 388 | platform_opex | $-21,094 | platform operating cost |
| 389 | subscriptions | $43,449 | 86897 subscribers |
| 389 | platform_opex | $-21,035 | platform operating cost |
| 390 | subscriptions | $43,251 | 86501 subscribers |
| 390 | platform_opex | $-20,975 | platform operating cost |
| 391 | subscriptions | $43,054 | 86107 subscribers |
| 391 | platform_opex | $-20,916 | platform operating cost |
| 392 | subscriptions | $42,857 | 85714 subscribers |
| 392 | platform_opex | $-20,857 | platform operating cost |
| 393 | subscriptions | $42,662 | 85323 subscribers |
| 393 | platform_opex | $-20,798 | platform operating cost |
| 394 | subscriptions | $42,467 | 84934 subscribers |
| 394 | platform_opex | $-20,740 | platform operating cost |
| 395 | subscriptions | $42,274 | 84547 subscribers |
| 395 | platform_opex | $-20,682 | platform operating cost |
| 396 | subscriptions | $42,076 | 84151 subscribers |
| 396 | platform_opex | $-20,623 | platform operating cost |
| 397 | subscriptions | $41,879 | 83757 subscribers |
| 397 | platform_opex | $-20,564 | platform operating cost |
| 397 | campaign | $-20,000 | medium |
| 398 | subscriptions | $41,683 | 83365 subscribers |
| 398 | platform_opex | $-20,505 | platform operating cost |
| 399 | subscriptions | $41,488 | 82975 subscribers |
| 399 | platform_opex | $-20,446 | platform operating cost |
| 400 | subscriptions | $41,294 | 82587 subscribers |
| 400 | platform_opex | $-20,388 | platform operating cost |
| 401 | subscriptions | $41,100 | 82200 subscribers |
| 401 | platform_opex | $-20,330 | platform operating cost |
| 402 | subscriptions | $40,908 | 81815 subscribers |
| 402 | platform_opex | $-20,272 | platform operating cost |
| 403 | subscriptions | $40,716 | 81432 subscribers |
| 403 | platform_opex | $-20,215 | platform operating cost |
| 404 | subscriptions | $40,521 | 81041 subscribers |
| 404 | platform_opex | $-20,156 | platform operating cost |
| 404 | announce | $-15,000 | Lost Legacy season 2 |
| 404 | train | $-15,000 | Max Grant |
| 404 | train | $-15,000 | Jo Moreau |
| 404 | base_cost | $-240,000 | unavoidable base cost |
| 405 | subscriptions | $45,133 | 90265 subscribers |
| 405 | platform_opex | $-21,540 | platform operating cost |
| 406 | subscriptions | $45,767 | 91533 subscribers |
| 406 | platform_opex | $-21,730 | platform operating cost |
| 407 | subscriptions | $46,066 | 92131 subscribers |
| 407 | platform_opex | $-21,820 | platform operating cost |
| 408 | subscriptions | $46,487 | 92974 subscribers |
| 408 | platform_opex | $-21,946 | platform operating cost |
| 409 | subscriptions | $46,974 | 93948 subscribers |
| 409 | platform_opex | $-22,092 | platform operating cost |
| 410 | subscriptions | $47,444 | 94887 subscribers |
| 410 | platform_opex | $-22,233 | platform operating cost |
| 411 | subscriptions | $47,684 | 95368 subscribers |
| 411 | platform_opex | $-22,305 | platform operating cost |
| 412 | subscriptions | $47,800 | 95599 subscribers |
| 412 | platform_opex | $-22,340 | platform operating cost |
| 413 | subscriptions | $47,823 | 95645 subscribers |
| 413 | platform_opex | $-22,347 | platform operating cost |
| 414 | subscriptions | $47,779 | 95558 subscribers |
| 414 | platform_opex | $-22,334 | platform operating cost |
| 415 | subscriptions | $47,688 | 95375 subscribers |
| 415 | platform_opex | $-22,306 | platform operating cost |
| 416 | subscriptions | $47,561 | 95122 subscribers |
| 416 | platform_opex | $-22,268 | platform operating cost |
| 417 | subscriptions | $47,409 | 94817 subscribers |
| 417 | platform_opex | $-22,223 | platform operating cost |
| 418 | subscriptions | $47,237 | 94473 subscribers |
| 418 | platform_opex | $-22,171 | platform operating cost |
| 419 | subscriptions | $47,045 | 94090 subscribers |
| 419 | platform_opex | $-22,113 | platform operating cost |
| 419 | star_fee | $-48,194 | Fin Fox |
| 420 | subscriptions | $46,808 | 93616 subscribers |
| 420 | platform_opex | $-22,042 | platform operating cost |
| 421 | subscriptions | $46,572 | 93144 subscribers |
| 421 | platform_opex | $-21,972 | platform operating cost |
| 422 | subscriptions | $46,343 | 92686 subscribers |
| 422 | platform_opex | $-21,903 | platform operating cost |
| 423 | subscriptions | $46,115 | 92230 subscribers |
| 423 | platform_opex | $-21,834 | platform operating cost |
| 424 | subscriptions | $45,888 | 91776 subscribers |
| 424 | platform_opex | $-21,766 | platform operating cost |
| 425 | subscriptions | $45,662 | 91324 subscribers |
| 425 | platform_opex | $-21,699 | platform operating cost |
| 426 | subscriptions | $45,432 | 90864 subscribers |
| 426 | platform_opex | $-21,630 | platform operating cost |
| 427 | subscriptions | $45,203 | 90406 subscribers |
| 427 | platform_opex | $-21,561 | platform operating cost |
| 428 | subscriptions | $44,975 | 89950 subscribers |
| 428 | platform_opex | $-21,492 | platform operating cost |
| 429 | subscriptions | $44,749 | 89497 subscribers |
| 429 | platform_opex | $-21,425 | platform operating cost |
| 430 | subscriptions | $44,523 | 89046 subscribers |
| 430 | platform_opex | $-21,357 | platform operating cost |
| 431 | subscriptions | $44,299 | 88597 subscribers |
| 431 | platform_opex | $-21,290 | platform operating cost |
| 432 | subscriptions | $44,075 | 88150 subscribers |
| 432 | platform_opex | $-21,222 | platform operating cost |
| 433 | subscriptions | $43,848 | 87695 subscribers |
| 433 | platform_opex | $-21,154 | platform operating cost |
| 433 | campaign | $-20,000 | medium |
| 434 | subscriptions | $43,621 | 87242 subscribers |
| 434 | platform_opex | $-21,086 | platform operating cost |
| 435 | subscriptions | $43,396 | 86792 subscribers |
| 435 | platform_opex | $-21,019 | platform operating cost |
| 436 | subscriptions | $43,172 | 86344 subscribers |
| 436 | platform_opex | $-20,952 | platform operating cost |
| 437 | subscriptions | $42,949 | 85898 subscribers |
| 437 | platform_opex | $-20,885 | platform operating cost |
| 438 | subscriptions | $42,728 | 85455 subscribers |
| 438 | platform_opex | $-20,818 | platform operating cost |
| 439 | subscriptions | $42,507 | 85014 subscribers |
| 439 | platform_opex | $-20,752 | platform operating cost |
| 440 | subscriptions | $42,283 | 84565 subscribers |
| 440 | platform_opex | $-20,685 | platform operating cost |
| 440 | announce | $-15,000 | Lost Legacy season 3 |
| 440 | train | $-15,000 | Alex |
| 440 | train | $-15,000 | Eli Quinn |
| 440 | base_cost | $-315,000 | unavoidable base cost |
| 441 | subscriptions | $46,523 | 93046 subscribers |
| 441 | platform_opex | $-21,957 | platform operating cost |
| 442 | subscriptions | $47,093 | 94185 subscribers |
| 442 | platform_opex | $-22,128 | platform operating cost |
| 443 | subscriptions | $47,340 | 94679 subscribers |
| 443 | platform_opex | $-22,202 | platform operating cost |
| 444 | subscriptions | $47,689 | 95377 subscribers |
| 444 | platform_opex | $-22,307 | platform operating cost |
| 445 | subscriptions | $48,106 | 96211 subscribers |
| 445 | platform_opex | $-22,432 | platform operating cost |
| 446 | subscriptions | $48,435 | 96870 subscribers |
| 446 | platform_opex | $-22,530 | platform operating cost |
| 447 | subscriptions | $48,583 | 97166 subscribers |
| 447 | platform_opex | $-22,575 | platform operating cost |
| 448 | subscriptions | $48,624 | 97248 subscribers |
| 448 | platform_opex | $-22,587 | platform operating cost |
| 449 | subscriptions | $48,587 | 97174 subscribers |
| 449 | platform_opex | $-22,576 | platform operating cost |
| 450 | subscriptions | $48,494 | 96987 subscribers |
| 450 | platform_opex | $-22,548 | platform operating cost |
| 451 | subscriptions | $48,359 | 96717 subscribers |
| 451 | platform_opex | $-22,508 | platform operating cost |
| 452 | subscriptions | $48,194 | 96387 subscribers |
| 452 | platform_opex | $-22,458 | platform operating cost |
| 453 | subscriptions | $48,006 | 96012 subscribers |
| 453 | platform_opex | $-22,402 | platform operating cost |
| 454 | subscriptions | $47,796 | 95592 subscribers |
| 454 | platform_opex | $-22,339 | platform operating cost |
| 455 | subscriptions | $47,574 | 95148 subscribers |
| 455 | platform_opex | $-22,272 | platform operating cost |
| 456 | subscriptions | $47,312 | 94623 subscribers |
| 456 | platform_opex | $-22,193 | platform operating cost |
| 457 | subscriptions | $47,051 | 94101 subscribers |
| 457 | platform_opex | $-22,115 | platform operating cost |
| 458 | subscriptions | $46,797 | 93593 subscribers |
| 458 | platform_opex | $-22,039 | platform operating cost |
| 459 | subscriptions | $46,544 | 93088 subscribers |
| 459 | platform_opex | $-21,963 | platform operating cost |
| 459 | star_fee | $-60,317 | Fin Fox |
| 460 | subscriptions | $46,293 | 92585 subscribers |
| 460 | platform_opex | $-21,888 | platform operating cost |
| 461 | subscriptions | $46,043 | 92085 subscribers |
| 461 | platform_opex | $-21,813 | platform operating cost |
| 462 | subscriptions | $45,794 | 91588 subscribers |
| 462 | platform_opex | $-21,738 | platform operating cost |
| 463 | subscriptions | $45,547 | 91093 subscribers |
| 463 | platform_opex | $-21,664 | platform operating cost |
| 464 | subscriptions | $45,295 | 90590 subscribers |
| 464 | platform_opex | $-21,588 | platform operating cost |
| 465 | subscriptions | $45,045 | 90090 subscribers |
| 465 | platform_opex | $-21,513 | platform operating cost |
| 466 | subscriptions | $44,797 | 89593 subscribers |
| 466 | platform_opex | $-21,439 | platform operating cost |
| 467 | subscriptions | $44,549 | 89098 subscribers |
| 467 | platform_opex | $-21,365 | platform operating cost |
| 468 | subscriptions | $44,303 | 88606 subscribers |
| 468 | platform_opex | $-21,291 | platform operating cost |
| 469 | subscriptions | $44,059 | 88117 subscribers |
| 469 | platform_opex | $-21,218 | platform operating cost |
| 470 | subscriptions | $43,810 | 87620 subscribers |
| 470 | platform_opex | $-21,143 | platform operating cost |
| 471 | subscriptions | $43,563 | 87126 subscribers |
| 471 | platform_opex | $-21,069 | platform operating cost |
| 472 | subscriptions | $43,318 | 86635 subscribers |
| 472 | platform_opex | $-20,995 | platform operating cost |
| 473 | subscriptions | $43,073 | 86146 subscribers |
| 473 | platform_opex | $-20,922 | platform operating cost |
| 474 | subscriptions | $42,830 | 85660 subscribers |
| 474 | platform_opex | $-20,849 | platform operating cost |
| 475 | subscriptions | $42,589 | 85177 subscribers |
| 475 | platform_opex | $-20,777 | platform operating cost |
| 476 | subscriptions | $42,349 | 84697 subscribers |
| 476 | platform_opex | $-20,705 | platform operating cost |
| 477 | subscriptions | $42,105 | 84209 subscribers |
| 477 | platform_opex | $-20,631 | platform operating cost |
| 477 | campaign | $-20,000 | medium |
| 478 | subscriptions | $41,862 | 83724 subscribers |
| 478 | platform_opex | $-20,559 | platform operating cost |
| 479 | subscriptions | $41,621 | 83242 subscribers |
| 479 | platform_opex | $-20,486 | platform operating cost |
| 480 | subscriptions | $41,382 | 82763 subscribers |
| 480 | platform_opex | $-20,414 | platform operating cost |
| 481 | subscriptions | $41,143 | 82286 subscribers |
| 481 | platform_opex | $-20,343 | platform operating cost |
| 482 | subscriptions | $40,906 | 81812 subscribers |
| 482 | platform_opex | $-20,272 | platform operating cost |
| 483 | subscriptions | $40,666 | 81331 subscribers |
| 483 | platform_opex | $-20,200 | platform operating cost |
| 484 | subscriptions | $40,427 | 80853 subscribers |
| 484 | platform_opex | $-20,128 | platform operating cost |
| 485 | subscriptions | $40,184 | 80368 subscribers |
| 485 | platform_opex | $-20,055 | platform operating cost |
| 486 | subscriptions | $39,939 | 79877 subscribers |
| 486 | platform_opex | $-19,982 | platform operating cost |
| 487 | subscriptions | $39,690 | 79380 subscribers |
| 487 | platform_opex | $-19,907 | platform operating cost |
| 487 | announce | $-15,000 | Lost Legacy season 4 |
| 487 | train | $-15,000 | Lee Okafor |
| 487 | train | $-15,000 | Max Grant |
| 487 | base_cost | $-315,000 | unavoidable base cost |
| 488 | subscriptions | $44,667 | 89334 subscribers |
| 488 | platform_opex | $-21,400 | platform operating cost |
| 489 | subscriptions | $45,334 | 90667 subscribers |
| 489 | platform_opex | $-21,600 | platform operating cost |
| 490 | subscriptions | $45,628 | 91256 subscribers |
| 490 | platform_opex | $-21,688 | platform operating cost |
| 491 | subscriptions | $46,024 | 92048 subscribers |
| 491 | platform_opex | $-21,807 | platform operating cost |
| 492 | subscriptions | $46,486 | 92972 subscribers |
| 492 | platform_opex | $-21,946 | platform operating cost |
| 493 | subscriptions | $46,855 | 93710 subscribers |
| 493 | platform_opex | $-22,056 | platform operating cost |
| 494 | subscriptions | $47,030 | 94059 subscribers |
| 494 | platform_opex | $-22,109 | platform operating cost |
| 495 | subscriptions | $47,086 | 94172 subscribers |
| 495 | platform_opex | $-22,126 | platform operating cost |
| 496 | subscriptions | $47,056 | 94111 subscribers |
| 496 | platform_opex | $-22,117 | platform operating cost |
| 497 | subscriptions | $46,962 | 93924 subscribers |
| 497 | platform_opex | $-22,089 | platform operating cost |
| 498 | subscriptions | $46,817 | 93634 subscribers |
| 498 | platform_opex | $-22,045 | platform operating cost |
| 499 | subscriptions | $46,638 | 93276 subscribers |
| 499 | platform_opex | $-21,991 | platform operating cost |
| 500 | subscriptions | $46,434 | 92868 subscribers |
| 500 | platform_opex | $-21,930 | platform operating cost |
| 501 | subscriptions | $46,212 | 92424 subscribers |
| 501 | platform_opex | $-21,864 | platform operating cost |
| 502 | subscriptions | $45,977 | 91953 subscribers |
| 502 | platform_opex | $-21,793 | platform operating cost |
| 503 | subscriptions | $45,731 | 91462 subscribers |
| 503 | platform_opex | $-21,719 | platform operating cost |
| 504 | subscriptions | $45,479 | 90957 subscribers |
| 504 | platform_opex | $-21,644 | platform operating cost |
| 505 | subscriptions | $45,221 | 90442 subscribers |
| 505 | platform_opex | $-21,566 | platform operating cost |
| 506 | subscriptions | $44,960 | 89920 subscribers |
| 506 | platform_opex | $-21,488 | platform operating cost |
| 506 | star_fee | $-60,049 | Fin Fox |
| 507 | subscriptions | $44,692 | 89383 subscribers |
| 507 | platform_opex | $-21,407 | platform operating cost |
| 508 | subscriptions | $44,413 | 88825 subscribers |
| 508 | platform_opex | $-21,324 | platform operating cost |
| 509 | subscriptions | $44,136 | 88271 subscribers |
| 509 | platform_opex | $-21,241 | platform operating cost |
| 510 | subscriptions | $43,871 | 87741 subscribers |
| 510 | platform_opex | $-21,161 | platform operating cost |
| 511 | subscriptions | $43,608 | 87215 subscribers |
| 511 | platform_opex | $-21,082 | platform operating cost |
| 512 | subscriptions | $43,346 | 86692 subscribers |
| 512 | platform_opex | $-21,004 | platform operating cost |
| 513 | subscriptions | $43,086 | 86172 subscribers |
| 513 | platform_opex | $-20,926 | platform operating cost |
| 514 | subscriptions | $42,828 | 85655 subscribers |
| 514 | platform_opex | $-20,848 | platform operating cost |
| 515 | subscriptions | $42,566 | 85131 subscribers |
| 515 | platform_opex | $-20,770 | platform operating cost |
| 516 | subscriptions | $42,305 | 84610 subscribers |
| 516 | platform_opex | $-20,691 | platform operating cost |
| 517 | subscriptions | $42,046 | 84092 subscribers |
| 517 | platform_opex | $-20,614 | platform operating cost |
| 518 | subscriptions | $41,789 | 83577 subscribers |
| 518 | platform_opex | $-20,537 | platform operating cost |
| 519 | subscriptions | $41,533 | 83066 subscribers |
| 519 | platform_opex | $-20,460 | platform operating cost |
| 520 | subscriptions | $41,279 | 82558 subscribers |
| 520 | platform_opex | $-20,384 | platform operating cost |
| 521 | subscriptions | $41,027 | 82053 subscribers |
| 521 | platform_opex | $-20,308 | platform operating cost |
| 522 | subscriptions | $40,776 | 81551 subscribers |
| 522 | platform_opex | $-20,233 | platform operating cost |
| 523 | subscriptions | $40,526 | 81052 subscribers |
| 523 | platform_opex | $-20,158 | platform operating cost |
| 524 | subscriptions | $40,278 | 80556 subscribers |
| 524 | platform_opex | $-20,083 | platform operating cost |
| 524 | campaign | $-20,000 | medium |
| 525 | subscriptions | $40,027 | 80053 subscribers |
| 525 | platform_opex | $-20,008 | platform operating cost |
| 526 | subscriptions | $39,777 | 79553 subscribers |
| 526 | platform_opex | $-19,933 | platform operating cost |
| 527 | subscriptions | $39,529 | 79057 subscribers |
| 527 | platform_opex | $-19,859 | platform operating cost |
| 528 | subscriptions | $39,282 | 78564 subscribers |
| 528 | platform_opex | $-19,785 | platform operating cost |
| 529 | subscriptions | $39,037 | 78074 subscribers |
| 529 | platform_opex | $-19,711 | platform operating cost |
| 530 | subscriptions | $38,794 | 77587 subscribers |
| 530 | platform_opex | $-19,638 | platform operating cost |
| 531 | subscriptions | $38,552 | 77103 subscribers |
| 531 | platform_opex | $-19,565 | platform operating cost |
| 532 | subscriptions | $38,311 | 76622 subscribers |
| 532 | platform_opex | $-19,493 | platform operating cost |
| 533 | subscriptions | $38,072 | 76144 subscribers |
| 533 | platform_opex | $-19,422 | platform operating cost |
| 534 | subscriptions | $37,835 | 75669 subscribers |
| 534 | platform_opex | $-19,350 | platform operating cost |
| 534 | announce | $-15,000 | Lost Legacy season 5 |
| 534 | train | $-15,000 | Gus Novak |
| 534 | train | $-15,000 | Sam |
| 534 | base_cost | $-315,000 | unavoidable base cost |
| 535 | subscriptions | $43,582 | 87164 subscribers |
| 535 | platform_opex | $-21,075 | platform operating cost |
| 536 | subscriptions | $44,341 | 88682 subscribers |
| 536 | platform_opex | $-21,302 | platform operating cost |
| 537 | subscriptions | $44,683 | 89366 subscribers |
| 537 | platform_opex | $-21,405 | platform operating cost |
| 538 | subscriptions | $45,097 | 90193 subscribers |
| 538 | platform_opex | $-21,529 | platform operating cost |
| 539 | subscriptions | $45,555 | 91110 subscribers |
| 539 | platform_opex | $-21,666 | platform operating cost |
| 540 | subscriptions | $45,898 | 91795 subscribers |
| 540 | platform_opex | $-21,769 | platform operating cost |
| 541 | subscriptions | $46,057 | 92114 subscribers |
| 541 | platform_opex | $-21,817 | platform operating cost |
| 542 | subscriptions | $46,101 | 92202 subscribers |
| 542 | platform_opex | $-21,830 | platform operating cost |
| 543 | subscriptions | $46,060 | 92120 subscribers |
| 543 | platform_opex | $-21,818 | platform operating cost |
| 544 | subscriptions | $45,957 | 91914 subscribers |
| 544 | platform_opex | $-21,787 | platform operating cost |
| 545 | subscriptions | $45,803 | 91606 subscribers |
| 545 | platform_opex | $-21,741 | platform operating cost |
| 546 | subscriptions | $45,616 | 91231 subscribers |
| 546 | platform_opex | $-21,685 | platform operating cost |
| 547 | subscriptions | $45,403 | 90806 subscribers |
| 547 | platform_opex | $-21,621 | platform operating cost |
| 548 | subscriptions | $45,173 | 90345 subscribers |
| 548 | platform_opex | $-21,552 | platform operating cost |
| 549 | subscriptions | $44,928 | 89856 subscribers |
| 549 | platform_opex | $-21,478 | platform operating cost |
| 550 | subscriptions | $44,674 | 89348 subscribers |
| 550 | platform_opex | $-21,402 | platform operating cost |
| 551 | subscriptions | $44,413 | 88826 subscribers |
| 551 | platform_opex | $-21,324 | platform operating cost |
| 552 | subscriptions | $44,147 | 88294 subscribers |
| 552 | platform_opex | $-21,244 | platform operating cost |
| 553 | subscriptions | $43,878 | 87755 subscribers |
| 553 | platform_opex | $-21,163 | platform operating cost |
| 553 | star_fee | $-66,050 | Fin Fox |
| 554 | subscriptions | $43,606 | 87212 subscribers |
| 554 | platform_opex | $-21,082 | platform operating cost |
| 555 | subscriptions | $43,318 | 86636 subscribers |
| 555 | platform_opex | $-20,995 | platform operating cost |
| 556 | subscriptions | $43,032 | 86064 subscribers |
| 556 | platform_opex | $-20,910 | platform operating cost |
| 557 | subscriptions | $42,759 | 85517 subscribers |
| 557 | platform_opex | $-20,828 | platform operating cost |
| 558 | subscriptions | $42,487 | 84973 subscribers |
| 558 | platform_opex | $-20,746 | platform operating cost |
| 559 | subscriptions | $42,217 | 84433 subscribers |
| 559 | platform_opex | $-20,665 | platform operating cost |
| 560 | subscriptions | $41,948 | 83896 subscribers |
| 560 | platform_opex | $-20,584 | platform operating cost |
| 561 | subscriptions | $41,681 | 83362 subscribers |
| 561 | platform_opex | $-20,504 | platform operating cost |
| 562 | subscriptions | $41,416 | 82832 subscribers |
| 562 | platform_opex | $-20,425 | platform operating cost |
| 563 | subscriptions | $41,153 | 82305 subscribers |
| 563 | platform_opex | $-20,346 | platform operating cost |
| 564 | subscriptions | $40,886 | 81772 subscribers |
| 564 | platform_opex | $-20,266 | platform operating cost |
| 565 | subscriptions | $40,621 | 81242 subscribers |
| 565 | platform_opex | $-20,186 | platform operating cost |
| 566 | subscriptions | $40,358 | 80716 subscribers |
| 566 | platform_opex | $-20,107 | platform operating cost |
| 567 | subscriptions | $40,097 | 80193 subscribers |
| 567 | platform_opex | $-20,029 | platform operating cost |
| 568 | subscriptions | $39,837 | 79673 subscribers |
| 568 | platform_opex | $-19,951 | platform operating cost |
| 569 | subscriptions | $39,579 | 79157 subscribers |
| 569 | platform_opex | $-19,874 | platform operating cost |
| 570 | subscriptions | $39,322 | 78644 subscribers |
| 570 | platform_opex | $-19,797 | platform operating cost |
| 571 | subscriptions | $39,067 | 78134 subscribers |
| 571 | platform_opex | $-19,720 | platform operating cost |
| 571 | campaign | $-20,000 | medium |
| 572 | subscriptions | $38,814 | 77628 subscribers |
| 572 | platform_opex | $-19,644 | platform operating cost |
| 573 | subscriptions | $38,563 | 77125 subscribers |
| 573 | platform_opex | $-19,569 | platform operating cost |
| 574 | subscriptions | $38,308 | 76616 subscribers |
| 574 | platform_opex | $-19,492 | platform operating cost |
| 575 | subscriptions | $38,055 | 76110 subscribers |
| 575 | platform_opex | $-19,416 | platform operating cost |
| 576 | subscriptions | $37,804 | 75608 subscribers |
| 576 | platform_opex | $-19,341 | platform operating cost |
| 577 | subscriptions | $37,555 | 75109 subscribers |
| 577 | platform_opex | $-19,266 | platform operating cost |
| 578 | subscriptions | $37,307 | 74613 subscribers |
| 578 | platform_opex | $-19,192 | platform operating cost |
| 579 | subscriptions | $37,061 | 74121 subscribers |
| 579 | platform_opex | $-19,118 | platform operating cost |
| 580 | subscriptions | $36,816 | 73632 subscribers |
| 580 | platform_opex | $-19,045 | platform operating cost |
| 581 | subscriptions | $36,573 | 73146 subscribers |
| 581 | platform_opex | $-18,972 | platform operating cost |
| 581 | announce | $-15,000 | Lost Legacy season 6 |
| 581 | train | $-15,000 | Bo Diaz |
| 581 | train | $-15,000 | Jo Moreau |
| 581 | base_cost | $-315,000 | unavoidable base cost |
| 582 | subscriptions | $42,955 | 85910 subscribers |
| 582 | platform_opex | $-20,886 | platform operating cost |
| 583 | subscriptions | $43,769 | 87538 subscribers |
| 583 | platform_opex | $-21,131 | platform operating cost |
| 584 | subscriptions | $44,135 | 88269 subscribers |
| 584 | platform_opex | $-21,240 | platform operating cost |
| 585 | subscriptions | $44,504 | 89007 subscribers |
| 585 | platform_opex | $-21,351 | platform operating cost |
| 586 | subscriptions | $44,873 | 89746 subscribers |
| 586 | platform_opex | $-21,462 | platform operating cost |
| 587 | subscriptions | $45,210 | 90419 subscribers |
| 587 | platform_opex | $-21,563 | platform operating cost |
| 588 | subscriptions | $45,358 | 90716 subscribers |
| 588 | platform_opex | $-21,607 | platform operating cost |
| 589 | subscriptions | $45,395 | 90790 subscribers |
| 589 | platform_opex | $-21,618 | platform operating cost |
| 590 | subscriptions | $45,348 | 90695 subscribers |
| 590 | platform_opex | $-21,604 | platform operating cost |
| 591 | subscriptions | $45,239 | 90477 subscribers |
| 591 | platform_opex | $-21,572 | platform operating cost |
| 592 | subscriptions | $45,084 | 90168 subscribers |
| 592 | platform_opex | $-21,525 | platform operating cost |
| 593 | subscriptions | $44,896 | 89791 subscribers |
| 593 | platform_opex | $-21,469 | platform operating cost |
| 594 | subscriptions | $44,682 | 89363 subscribers |
| 594 | platform_opex | $-21,404 | platform operating cost |
| 595 | subscriptions | $44,443 | 88886 subscribers |
| 595 | platform_opex | $-21,333 | platform operating cost |
| 596 | subscriptions | $44,191 | 88381 subscribers |
| 596 | platform_opex | $-21,257 | platform operating cost |
| 597 | subscriptions | $43,928 | 87856 subscribers |
| 597 | platform_opex | $-21,178 | platform operating cost |
| 598 | subscriptions | $43,658 | 87316 subscribers |
| 598 | platform_opex | $-21,097 | platform operating cost |
| 599 | subscriptions | $43,383 | 86766 subscribers |
| 599 | platform_opex | $-21,015 | platform operating cost |
| 600 | subscriptions | $43,105 | 86209 subscribers |
| 600 | platform_opex | $-20,931 | platform operating cost |
| 600 | star_fee | $-66,000 | Fin Fox |
| 601 | subscriptions | $42,824 | 85647 subscribers |
| 601 | platform_opex | $-20,847 | platform operating cost |
| 602 | subscriptions | $42,531 | 85061 subscribers |
| 602 | platform_opex | $-20,759 | platform operating cost |
| 603 | subscriptions | $42,240 | 84479 subscribers |
| 603 | platform_opex | $-20,672 | platform operating cost |
| 604 | subscriptions | $41,956 | 83911 subscribers |
| 604 | platform_opex | $-20,587 | platform operating cost |
| 605 | subscriptions | $41,674 | 83347 subscribers |
| 605 | platform_opex | $-20,502 | platform operating cost |
| 606 | subscriptions | $41,394 | 82787 subscribers |
| 606 | platform_opex | $-20,418 | platform operating cost |
| 607 | subscriptions | $41,116 | 82231 subscribers |
| 607 | platform_opex | $-20,335 | platform operating cost |
| 608 | subscriptions | $40,839 | 81678 subscribers |
| 608 | platform_opex | $-20,252 | platform operating cost |
| 609 | subscriptions | $40,565 | 81129 subscribers |
| 609 | platform_opex | $-20,169 | platform operating cost |
| 610 | subscriptions | $40,292 | 80584 subscribers |
| 610 | platform_opex | $-20,088 | platform operating cost |
| 611 | subscriptions | $40,021 | 80042 subscribers |
| 611 | platform_opex | $-20,006 | platform operating cost |
| 612 | subscriptions | $39,752 | 79504 subscribers |
| 612 | platform_opex | $-19,926 | platform operating cost |
| 613 | subscriptions | $39,480 | 78960 subscribers |
| 613 | platform_opex | $-19,844 | platform operating cost |
| 614 | subscriptions | $39,210 | 78420 subscribers |
| 614 | platform_opex | $-19,763 | platform operating cost |
| 615 | subscriptions | $38,942 | 77884 subscribers |
| 615 | platform_opex | $-19,683 | platform operating cost |
| 616 | subscriptions | $38,676 | 77351 subscribers |
| 616 | platform_opex | $-19,603 | platform operating cost |
| 617 | subscriptions | $38,411 | 76822 subscribers |
| 617 | platform_opex | $-19,523 | platform operating cost |
| 618 | subscriptions | $38,149 | 76297 subscribers |
| 618 | platform_opex | $-19,445 | platform operating cost |
| 618 | campaign | $-20,000 | medium |
| 619 | subscriptions | $37,888 | 75775 subscribers |
| 619 | platform_opex | $-19,366 | platform operating cost |
| 620 | subscriptions | $37,629 | 75257 subscribers |
| 620 | platform_opex | $-19,289 | platform operating cost |
| 621 | subscriptions | $37,371 | 74742 subscribers |
| 621 | platform_opex | $-19,211 | platform operating cost |
| 622 | subscriptions | $37,116 | 74231 subscribers |
| 622 | platform_opex | $-19,135 | platform operating cost |
| 623 | subscriptions | $36,862 | 73723 subscribers |
| 623 | platform_opex | $-19,058 | platform operating cost |
| 624 | subscriptions | $36,610 | 73219 subscribers |
| 624 | platform_opex | $-18,983 | platform operating cost |
| 625 | subscriptions | $36,355 | 72709 subscribers |
| 625 | platform_opex | $-18,906 | platform operating cost |
| 626 | subscriptions | $36,102 | 72203 subscribers |
| 626 | platform_opex | $-18,830 | platform operating cost |
| 627 | subscriptions | $35,850 | 71700 subscribers |
| 627 | platform_opex | $-18,755 | platform operating cost |
| 628 | subscriptions | $35,601 | 71201 subscribers |
| 628 | platform_opex | $-18,680 | platform operating cost |
| 628 | train | $-15,000 | Alex |
| 628 | train | $-15,000 | Eli Quinn |
| 628 | base_cost | $-60,000 | unavoidable base cost |
| 629 | subscriptions | $41,952 | 83904 subscribers |
| 629 | platform_opex | $-20,586 | platform operating cost |
| 630 | subscriptions | $42,714 | 85427 subscribers |
| 630 | platform_opex | $-20,814 | platform operating cost |
| 631 | subscriptions | $43,059 | 86117 subscribers |
| 631 | platform_opex | $-20,918 | platform operating cost |
| 632 | subscriptions | $43,353 | 86706 subscribers |
| 632 | platform_opex | $-21,006 | platform operating cost |
| 633 | subscriptions | $43,593 | 87185 subscribers |
| 633 | platform_opex | $-21,078 | platform operating cost |
| 634 | subscriptions | $43,811 | 87621 subscribers |
| 634 | platform_opex | $-21,143 | platform operating cost |
| 635 | subscriptions | $44,026 | 88051 subscribers |
| 635 | platform_opex | $-21,208 | platform operating cost |
| 635 | star_fee | $-52,514 | Alex Sato |
| 636 | subscriptions | $44,249 | 88497 subscribers |
| 636 | platform_opex | $-21,275 | platform operating cost |
| 637 | subscriptions | $44,353 | 88705 subscribers |
| 637 | platform_opex | $-21,306 | platform operating cost |
| 638 | subscriptions | $44,352 | 88704 subscribers |
| 638 | platform_opex | $-21,306 | platform operating cost |
| 639 | subscriptions | $44,278 | 88555 subscribers |
| 639 | platform_opex | $-21,283 | platform operating cost |
| 640 | subscriptions | $44,148 | 88295 subscribers |
| 640 | platform_opex | $-21,244 | platform operating cost |
| 641 | subscriptions | $43,976 | 87952 subscribers |
| 641 | platform_opex | $-21,193 | platform operating cost |
| 641 | campaign | $-20,000 | medium |
| 642 | subscriptions | $43,774 | 87547 subscribers |
| 642 | platform_opex | $-21,132 | platform operating cost |
| 643 | subscriptions | $43,548 | 87095 subscribers |
| 643 | platform_opex | $-21,064 | platform operating cost |
| 644 | subscriptions | $43,305 | 86609 subscribers |
| 644 | platform_opex | $-20,991 | platform operating cost |
| 644 | train | $-15,000 | Lee Okafor |
| 644 | train | $-15,000 | Max Grant |
| 644 | base_cost | $-315,000 | unavoidable base cost |
| 645 | subscriptions | $45,728 | 91456 subscribers |
| 645 | platform_opex | $-21,718 | platform operating cost |
| 646 | subscriptions | $47,164 | 94328 subscribers |
| 646 | platform_opex | $-22,149 | platform operating cost |
| 647 | subscriptions | $47,791 | 95582 subscribers |
| 647 | platform_opex | $-22,337 | platform operating cost |
| 648 | subscriptions | $48,439 | 96877 subscribers |
| 648 | platform_opex | $-22,532 | platform operating cost |
| 649 | subscriptions | $48,872 | 97743 subscribers |
| 649 | platform_opex | $-22,661 | platform operating cost |
| 650 | subscriptions | $49,015 | 98030 subscribers |
| 650 | platform_opex | $-22,704 | platform operating cost |
| 651 | subscriptions | $49,003 | 98006 subscribers |
| 651 | platform_opex | $-22,701 | platform operating cost |
| 652 | subscriptions | $48,884 | 97768 subscribers |
| 652 | platform_opex | $-22,665 | platform operating cost |
| 653 | subscriptions | $48,695 | 97390 subscribers |
| 653 | platform_opex | $-22,608 | platform operating cost |
| 654 | subscriptions | $48,459 | 96918 subscribers |
| 654 | platform_opex | $-22,538 | platform operating cost |
| 655 | subscriptions | $48,192 | 96383 subscribers |
| 655 | platform_opex | $-22,457 | platform operating cost |
| 656 | subscriptions | $47,903 | 95806 subscribers |
| 656 | platform_opex | $-22,371 | platform operating cost |
| 657 | subscriptions | $47,601 | 95201 subscribers |
| 657 | platform_opex | $-22,280 | platform operating cost |
| 658 | subscriptions | $47,289 | 94578 subscribers |
| 658 | platform_opex | $-22,187 | platform operating cost |
| 659 | subscriptions | $46,971 | 93942 subscribers |
| 659 | platform_opex | $-22,091 | platform operating cost |
| 660 | subscriptions | $46,656 | 93311 subscribers |
| 660 | platform_opex | $-21,997 | platform operating cost |
| 661 | subscriptions | $46,342 | 92684 subscribers |
| 661 | platform_opex | $-21,903 | platform operating cost |
| 662 | subscriptions | $46,031 | 92061 subscribers |
| 662 | platform_opex | $-21,809 | platform operating cost |
| 663 | subscriptions | $45,721 | 91442 subscribers |
| 663 | platform_opex | $-21,716 | platform operating cost |
| 663 | star_fee | $-5,924 | Dee Reyes |
| 664 | subscriptions | $45,414 | 90828 subscribers |
| 664 | platform_opex | $-21,624 | platform operating cost |
| 665 | subscriptions | $45,109 | 90218 subscribers |
| 665 | platform_opex | $-21,533 | platform operating cost |
| 666 | subscriptions | $44,806 | 89612 subscribers |
| 666 | platform_opex | $-21,442 | platform operating cost |
| 667 | subscriptions | $44,500 | 88999 subscribers |
| 667 | platform_opex | $-21,350 | platform operating cost |
| 668 | subscriptions | $44,195 | 88390 subscribers |
| 668 | platform_opex | $-21,258 | platform operating cost |
| 669 | subscriptions | $43,893 | 87785 subscribers |
| 669 | platform_opex | $-21,168 | platform operating cost |
| 670 | subscriptions | $43,593 | 87185 subscribers |
| 670 | platform_opex | $-21,078 | platform operating cost |
| 671 | subscriptions | $43,295 | 86589 subscribers |
| 671 | platform_opex | $-20,988 | platform operating cost |
| 672 | subscriptions | $42,999 | 85997 subscribers |
| 672 | platform_opex | $-20,900 | platform operating cost |
| 673 | subscriptions | $42,705 | 85409 subscribers |
| 673 | platform_opex | $-20,811 | platform operating cost |
| 674 | subscriptions | $42,413 | 84825 subscribers |
| 674 | platform_opex | $-20,724 | platform operating cost |
| 675 | subscriptions | $42,123 | 84245 subscribers |
| 675 | platform_opex | $-20,637 | platform operating cost |
| 676 | subscriptions | $41,835 | 83669 subscribers |
| 676 | platform_opex | $-20,550 | platform operating cost |
| 677 | subscriptions | $41,549 | 83097 subscribers |
| 677 | platform_opex | $-20,465 | platform operating cost |
| 678 | subscriptions | $41,265 | 82529 subscribers |
| 678 | platform_opex | $-20,379 | platform operating cost |
| 679 | subscriptions | $40,978 | 81955 subscribers |
| 679 | platform_opex | $-20,293 | platform operating cost |
| 680 | subscriptions | $40,693 | 81385 subscribers |
| 680 | platform_opex | $-20,208 | platform operating cost |
| 681 | subscriptions | $40,410 | 80819 subscribers |
| 681 | platform_opex | $-20,123 | platform operating cost |
| 681 | campaign | $-20,000 | medium |
| 682 | subscriptions | $40,128 | 80256 subscribers |
| 682 | platform_opex | $-20,038 | platform operating cost |
| 683 | subscriptions | $39,849 | 79697 subscribers |
| 683 | platform_opex | $-19,955 | platform operating cost |
| 684 | subscriptions | $39,571 | 79142 subscribers |
| 684 | platform_opex | $-19,871 | platform operating cost |
| 685 | subscriptions | $39,296 | 78591 subscribers |
| 685 | platform_opex | $-19,789 | platform operating cost |
| 686 | subscriptions | $39,017 | 78033 subscribers |
| 686 | platform_opex | $-19,705 | platform operating cost |
| 687 | subscriptions | $38,735 | 77469 subscribers |
| 687 | platform_opex | $-19,620 | platform operating cost |
| 688 | subscriptions | $38,450 | 76899 subscribers |
| 688 | platform_opex | $-19,535 | platform operating cost |
| 689 | subscriptions | $38,162 | 76323 subscribers |
| 689 | platform_opex | $-19,448 | platform operating cost |
| 690 | subscriptions | $37,866 | 75731 subscribers |
| 690 | platform_opex | $-19,360 | platform operating cost |
| 691 | subscriptions | $37,567 | 75133 subscribers |
| 691 | platform_opex | $-19,270 | platform operating cost |
| 691 | announce | $-15,000 | Midnight Echo season 2 |
| 691 | train | $-15,000 | Gus Novak |
| 691 | train | $-15,000 | Sam |
| 691 | base_cost | $-315,000 | unavoidable base cost |
| 692 | subscriptions | $41,990 | 83979 subscribers |
| 692 | platform_opex | $-20,597 | platform operating cost |
| 693 | subscriptions | $42,621 | 85242 subscribers |
| 693 | platform_opex | $-20,786 | platform operating cost |
| 694 | subscriptions | $42,903 | 85805 subscribers |
| 694 | platform_opex | $-20,871 | platform operating cost |
| 695 | subscriptions | $43,484 | 86968 subscribers |
| 695 | platform_opex | $-21,045 | platform operating cost |
| 696 | subscriptions | $44,247 | 88493 subscribers |
| 696 | platform_opex | $-21,274 | platform operating cost |
| 697 | subscriptions | $44,947 | 89893 subscribers |
| 697 | platform_opex | $-21,484 | platform operating cost |
| 698 | subscriptions | $45,300 | 90599 subscribers |
| 698 | platform_opex | $-21,590 | platform operating cost |
| 699 | subscriptions | $45,463 | 90925 subscribers |
| 699 | platform_opex | $-21,639 | platform operating cost |
| 700 | subscriptions | $45,490 | 90979 subscribers |
| 700 | platform_opex | $-21,647 | platform operating cost |
| 701 | subscriptions | $45,422 | 90844 subscribers |
| 701 | platform_opex | $-21,627 | platform operating cost |
| 702 | subscriptions | $45,288 | 90575 subscribers |
| 702 | platform_opex | $-21,586 | platform operating cost |
| 703 | subscriptions | $45,099 | 90198 subscribers |
| 703 | platform_opex | $-21,530 | platform operating cost |
| 704 | subscriptions | $44,876 | 89752 subscribers |
| 704 | platform_opex | $-21,463 | platform operating cost |
| 705 | subscriptions | $44,629 | 89257 subscribers |
| 705 | platform_opex | $-21,389 | platform operating cost |
| 706 | subscriptions | $44,364 | 88727 subscribers |
| 706 | platform_opex | $-21,309 | platform operating cost |
| 707 | subscriptions | $44,086 | 88172 subscribers |
| 707 | platform_opex | $-21,226 | platform operating cost |
| 708 | subscriptions | $43,800 | 87599 subscribers |
| 708 | platform_opex | $-21,140 | platform operating cost |
| 709 | subscriptions | $43,507 | 87014 subscribers |
| 709 | platform_opex | $-21,052 | platform operating cost |
| 710 | subscriptions | $43,211 | 86422 subscribers |
| 710 | platform_opex | $-20,963 | platform operating cost |
| 710 | star_fee | $-5,924 | Dee Reyes |
| 711 | subscriptions | $42,913 | 85825 subscribers |
| 711 | platform_opex | $-20,874 | platform operating cost |
| 712 | subscriptions | $42,604 | 85207 subscribers |
| 712 | platform_opex | $-20,781 | platform operating cost |
| 713 | subscriptions | $42,297 | 84594 subscribers |
| 713 | platform_opex | $-20,689 | platform operating cost |
| 714 | subscriptions | $42,008 | 84015 subscribers |
| 714 | platform_opex | $-20,602 | platform operating cost |
| 715 | subscriptions | $41,720 | 83440 subscribers |
| 715 | platform_opex | $-20,516 | platform operating cost |
| 716 | subscriptions | $41,435 | 82869 subscribers |
| 716 | platform_opex | $-20,430 | platform operating cost |
| 717 | subscriptions | $41,151 | 82302 subscribers |
| 717 | platform_opex | $-20,345 | platform operating cost |
| 718 | subscriptions | $40,870 | 81739 subscribers |
| 718 | platform_opex | $-20,261 | platform operating cost |
| 719 | subscriptions | $40,590 | 81180 subscribers |
| 719 | platform_opex | $-20,177 | platform operating cost |
| 720 | subscriptions | $40,313 | 80625 subscribers |
| 720 | platform_opex | $-20,094 | platform operating cost |
| 721 | subscriptions | $40,032 | 80064 subscribers |
| 721 | platform_opex | $-20,010 | platform operating cost |
| 722 | subscriptions | $39,754 | 79507 subscribers |
| 722 | platform_opex | $-19,926 | platform operating cost |
| 723 | subscriptions | $39,477 | 78954 subscribers |
| 723 | platform_opex | $-19,843 | platform operating cost |
| 724 | subscriptions | $39,202 | 78404 subscribers |
| 724 | platform_opex | $-19,761 | platform operating cost |
| 725 | subscriptions | $38,929 | 77858 subscribers |
| 725 | platform_opex | $-19,679 | platform operating cost |
| 726 | subscriptions | $38,658 | 77316 subscribers |
| 726 | platform_opex | $-19,597 | platform operating cost |
| 727 | subscriptions | $38,389 | 76778 subscribers |
| 727 | platform_opex | $-19,517 | platform operating cost |
| 728 | subscriptions | $38,122 | 76244 subscribers |
| 728 | platform_opex | $-19,437 | platform operating cost |
| 728 | campaign | $-20,000 | medium |
| 729 | subscriptions | $37,857 | 75713 subscribers |
| 729 | platform_opex | $-19,357 | platform operating cost |
| 730 | subscriptions | $37,593 | 75186 subscribers |
| 730 | platform_opex | $-19,278 | platform operating cost |
| 731 | subscriptions | $37,332 | 74663 subscribers |
| 731 | platform_opex | $-19,199 | platform operating cost |
| 732 | subscriptions | $37,072 | 74143 subscribers |
| 732 | platform_opex | $-19,121 | platform operating cost |
| 733 | subscriptions | $36,809 | 73618 subscribers |
| 733 | platform_opex | $-19,043 | platform operating cost |
| 734 | subscriptions | $36,549 | 73097 subscribers |
| 734 | platform_opex | $-18,965 | platform operating cost |
| 735 | subscriptions | $36,290 | 72579 subscribers |
| 735 | platform_opex | $-18,887 | platform operating cost |
| 736 | subscriptions | $36,033 | 72065 subscribers |
| 736 | platform_opex | $-18,810 | platform operating cost |
| 737 | subscriptions | $35,778 | 71555 subscribers |
| 737 | platform_opex | $-18,733 | platform operating cost |
| 738 | subscriptions | $35,524 | 71048 subscribers |
| 738 | platform_opex | $-18,657 | platform operating cost |
| 738 | announce | $-15,000 | Midnight Echo season 3 |
| 738 | train | $-15,000 | Bo Diaz |
| 738 | train | $-15,000 | Jo Moreau |
| 738 | base_cost | $-315,000 | unavoidable base cost |
| 739 | subscriptions | $40,614 | 81228 subscribers |
| 739 | platform_opex | $-20,184 | platform operating cost |
| 740 | subscriptions | $41,412 | 82823 subscribers |
| 740 | platform_opex | $-20,423 | platform operating cost |
| 741 | subscriptions | $41,794 | 83588 subscribers |
| 741 | platform_opex | $-20,538 | platform operating cost |
| 742 | subscriptions | $42,473 | 84945 subscribers |
| 742 | platform_opex | $-20,742 | platform operating cost |
| 743 | subscriptions | $43,347 | 86693 subscribers |
| 743 | platform_opex | $-21,004 | platform operating cost |
| 744 | subscriptions | $44,000 | 87999 subscribers |
| 744 | platform_opex | $-21,200 | platform operating cost |
| 745 | subscriptions | $44,338 | 88675 subscribers |
| 745 | platform_opex | $-21,301 | platform operating cost |
| 746 | subscriptions | $44,490 | 88980 subscribers |
| 746 | platform_opex | $-21,347 | platform operating cost |
| 747 | subscriptions | $44,511 | 89022 subscribers |
| 747 | platform_opex | $-21,353 | platform operating cost |
| 748 | subscriptions | $44,440 | 88880 subscribers |
| 748 | platform_opex | $-21,332 | platform operating cost |
| 749 | subscriptions | $44,303 | 88606 subscribers |
| 749 | platform_opex | $-21,291 | platform operating cost |
| 750 | subscriptions | $44,119 | 88238 subscribers |
| 750 | platform_opex | $-21,236 | platform operating cost |
| 751 | subscriptions | $43,902 | 87803 subscribers |
| 751 | platform_opex | $-21,170 | platform operating cost |
| 752 | subscriptions | $43,660 | 87319 subscribers |
| 752 | platform_opex | $-21,098 | platform operating cost |
| 753 | subscriptions | $43,400 | 86800 subscribers |
| 753 | platform_opex | $-21,020 | platform operating cost |
| 754 | subscriptions | $43,129 | 86257 subscribers |
| 754 | platform_opex | $-20,939 | platform operating cost |
| 755 | subscriptions | $42,849 | 85697 subscribers |
| 755 | platform_opex | $-20,855 | platform operating cost |
| 756 | subscriptions | $42,563 | 85125 subscribers |
| 756 | platform_opex | $-20,769 | platform operating cost |
| 757 | subscriptions | $42,273 | 84546 subscribers |
| 757 | platform_opex | $-20,682 | platform operating cost |
| 757 | star_fee | $-11,758 | Dee Reyes |
| 758 | subscriptions | $41,976 | 83952 subscribers |
| 758 | platform_opex | $-20,593 | platform operating cost |
| 759 | subscriptions | $41,669 | 83337 subscribers |
| 759 | platform_opex | $-20,501 | platform operating cost |
| 760 | subscriptions | $41,364 | 82727 subscribers |
| 760 | platform_opex | $-20,409 | platform operating cost |
| 761 | subscriptions | $41,081 | 82161 subscribers |
| 761 | platform_opex | $-20,324 | platform operating cost |
| 762 | subscriptions | $40,800 | 81599 subscribers |
| 762 | platform_opex | $-20,240 | platform operating cost |
| 763 | subscriptions | $40,521 | 81041 subscribers |
| 763 | platform_opex | $-20,156 | platform operating cost |
| 764 | subscriptions | $40,244 | 80487 subscribers |
| 764 | platform_opex | $-20,073 | platform operating cost |
| 765 | subscriptions | $39,968 | 79936 subscribers |
| 765 | platform_opex | $-19,990 | platform operating cost |
| 766 | subscriptions | $39,695 | 79389 subscribers |
| 766 | platform_opex | $-19,908 | platform operating cost |
| 767 | subscriptions | $39,423 | 78846 subscribers |
| 767 | platform_opex | $-19,827 | platform operating cost |
| 768 | subscriptions | $39,149 | 78297 subscribers |
| 768 | platform_opex | $-19,745 | platform operating cost |
| 769 | subscriptions | $38,876 | 77752 subscribers |
| 769 | platform_opex | $-19,663 | platform operating cost |
| 770 | subscriptions | $38,606 | 77211 subscribers |
| 770 | platform_opex | $-19,582 | platform operating cost |
| 771 | subscriptions | $38,337 | 76674 subscribers |
| 771 | platform_opex | $-19,501 | platform operating cost |
| 772 | subscriptions | $38,070 | 76140 subscribers |
| 772 | platform_opex | $-19,421 | platform operating cost |
| 773 | subscriptions | $37,805 | 75610 subscribers |
| 773 | platform_opex | $-19,341 | platform operating cost |
| 774 | subscriptions | $37,542 | 75084 subscribers |
| 774 | platform_opex | $-19,263 | platform operating cost |
| 775 | subscriptions | $37,281 | 74561 subscribers |
| 775 | platform_opex | $-19,184 | platform operating cost |
| 775 | campaign | $-20,000 | medium |
| 776 | subscriptions | $37,021 | 74042 subscribers |
| 776 | platform_opex | $-19,106 | platform operating cost |
| 777 | subscriptions | $36,764 | 73527 subscribers |
| 777 | platform_opex | $-19,029 | platform operating cost |
| 778 | subscriptions | $36,508 | 73015 subscribers |
| 778 | platform_opex | $-18,952 | platform operating cost |
| 779 | subscriptions | $36,254 | 72507 subscribers |
| 779 | platform_opex | $-18,876 | platform operating cost |
| 780 | subscriptions | $35,997 | 71994 subscribers |
| 780 | platform_opex | $-18,799 | platform operating cost |
| all | payroll (total) | $-5,862,400 | aggregated |
| all | upkeep (total) | $-468,000 | aggregated |
| all | studio_take (total) | $8,116,952 | aggregated |
