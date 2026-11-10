# Single career — seed 1, strategy mixed

> **Simulation assumptions, not design locks.** All numbers come from provisional config values. Nothing here is official balance.

- Ruleset: `v9.61-movie-kernel-0.1` · Config: `gate3_mixed` (hash `b83a7f2c`)
- Seed: 1
- Strategy: mixed
- Decisions: 998
- Modelled: movies; limited series (config-gated); renewable TV seasons: orders, renewal, fatigue, twist, hiatus, announcements, contract variants A/B (config-gated); studio streaming service: engineer build, aggregate subscribers, catalog, Originals (config-gated); distributor advances/royalties/trust; Stars (families, budgets, fallback, callbacks, relationships); marketing + studio buzz; scores + legs; IP fans; Prestige milestones; studio genre levels; trends; staff XP/hire/train; studio staff-capacity cap + upgrade ladder (when configured); theme research + staff pitches
- **Not modelled:** soap operas (shelved); named critics (Gate 2.6 proxy only); eras beyond a gentle quality bar; studio upgrades other than staff capacity + TV unlock; genre unlocks; late-game concurrency; TV spinoffs/reboots, Final Season announcements, other show shake-ups; binge drops; platform upgrades; challenge modes

## Career summary

- Weeks: 780 (15.0 years) · Releases: 34 · Cancellations: 0
- End cash: $12,894,698 (start $40,000) · Negative-cash weeks: 0
- Prestige: 7040 (81 awards)
- Staff: Sam [P 94 W 95 F 90 E 81, XP 7800]; Alex [P 88 W 91 F 90 E 82, XP 7800]; Gus Novak [P 91 W 91 F 91 E 84, XP 7280]; Bo Diaz [P 90 W 93 F 90 E 79, XP 7280]; Liv Kerr [P 92 W 95 F 89 E 84, XP 6740]; Lee Sato [P 88 W 89 F 91 E 83, XP 6740]; Max Lind [P 94 W 91 F 92 E 80, XP 6060]; Kit Kerr [P 92 W 90 F 91 E 79, XP 4470]
- Studio genre levels (exact genre): Horror xp 10, Comedy xp 8, Action xp 16
- IP fans: Hollow Edge 260; Dead Night 715; Dead Pulse 884; Broken Legacy 1,114; Red Shadow 2,441; Hollow Code 2,818; Hollow Frequency 3,063; Iron Legacy 31,029; Last Edge 3,981; Hollow Legacy 7,498; Silver Signal 10,547; Silver Rising 4,427; Silver Protocol 11,148; Lost Pulse 8,475; Dead Echo 11,719; Broken Echo 3,899; Lost Run 4,716; Red Horizon 9,975; Broken Edge 13,267; Iron Shadow 4,886; Wild Signal 50,223; Red Horizon 6,477; Last Echo 15,137; Midnight Legacy 22,743; Dead Legacy 11,231; Dead Legacy 10,293; Broken Pulse 19,914
- Distributor trust: wolf 2.50, starlight 2.50, xyz 4.63, orbit 3.63, meridian 5.00
- Stars hired: Bo Hart (L0, Fame 9, rel 1.75); Sam Kerr (L0, Fame 6, rel 1.75); Lee Quinn (L4, Fame 36, rel 1.75); Ari Reyes (L1, Fame 11, rel 1.75); Alex Sato (L10, Fame 100, rel 5.00); Mo Diaz (L5, Fame 52, rel 2.50); Kai Grant (L8, Fame 72, rel 4.75); Ivy Fox (L4, Fame 63, rel 3.25); Lee Park (L7, Fame 79, rel 4.00); Jay Imai (L6, Fame 50, rel 2.50); Sam Okafor (L8, Fame 45, rel 3.25)
- Great films: Hall of Fame 10/34 · avg ≥9.0 10/34 · avg >9.0 10/34 · Audience ≥9 13/34 · Critic ≥9 5/34 · 8+ 19/34
- Best film: 9.66 "Dead Legacy" (limited_series/original, A9.6/C9.73; mixed seed 1 #31, yr 13.2, critic gen 0) · best Audience: 9.12 "Last Echo" (limited_series, A10/C8.23; mixed seed 1 #28, yr 11.7, critic gen 0) · best Critic: 9.66 "Dead Legacy" (limited_series/original, A9.6/C9.73; mixed seed 1 #31, yr 13.2, critic gen 0)

## Formats, TV and streaming (Gate 3)

- Releases by format: movie 7 (avg 8.213, HoF 3, net/production-week $27,341); limited_series 12 (avg 8.003, HoF 4, net/production-week $25,795); tv 7 (avg 7.903, HoF 1, net/production-week $30,718); limited_series/original 3 (avg 8.587, HoF 1, net/production-week $-7,139); movie/original 3 (avg 7.753, HoF 0, net/production-week $-6,333); tv/original 2 (avg 7.675, HoF 1, net/production-week $-8,387)
- TV: unlocked week 124 (year 2.4) · shows 2, seasons 9, longest 6 · ended by a score below 4: 0
  - Iron Legacy: seasons S1 5ep 7.89 → S2 10ep 7.67 → S3 15ep 7.64 → S4 15ep 7.08 → S5 15ep 7.09 → S6 20ep 6.32 · fans 31,029 · last season averaged 6.32 (≥ 4): renewable
  - Wild Signal: seasons S1 20ep 9.09 → S2 20ep 9.03 → S3 20ep 8.86 · fans 50,223 · last season averaged 8.86 (≥ 4): renewable
- Streaming: live; build started week 304, launched week 334; subscribers now 88,514 (peak 97,053); by year-end y1 0, y2 0, y3 0, y4 0, y5 0, y6 0, y7 19,322, y8 55,310, y9 73,417, y10 78,052, y11 71,905, y12 80,893, y13 83,987, y14 82,573, y15 88,514; subscription gross $16,275,781 − operating $8,450,734; build $600,000 paid back week 428; catalog 34 titles; Originals 8
- Last 12 months: traditional studio take $1,691,415 · subscriptions $2,190,063 · platform cost $-1,073,019 · kept surplus $385,150
- Prestige by source: audience_7_5 2025, meters_all_70 1400, critic_8_5 765, hall_of_fame 2000, first_hall_of_fame 100, ip_gross_1m 300, ip_viewers_500k 300, ip_gross_5m 150 · by format: limited_series 2355, tv 1595, movie 1445, limited_series/original 660, movie/original 375, tv/original 610

## Releases (full causal trace)

### Hollow Edge — Horror + Spies (new)

Released week 16 (year 0.3) · Distributor: Wolf Pictures · Star: Bo Hart (L0, Fame 9) · IP: Hollow Edge
Joined the streaming catalog after its run (retention value only; no new payouts).

**Financial waterfall** [LOCKED rules; amounts provisional]

| Item | Amount |
|---|---:|
| Advance received (project reserve, not revenue) | $76,000 |
| Base cost (unavoidable) | −$60,000 |
| Star fee | −$5,621 |
| Marketing campaign | −$8,000 |
| Paid from studio cash (overrun) | $0 |
| **Unused advance kept at completion** | $2,379 |
| Gross from sales (13 weeks) | $211,778 |
| Distributor royalty (32% of weekly gross) | −$67,769 |
| **Studio take** | $144,009 |
| Net for this title (surplus + take − cash overrun; wages are studio-wide, excluded) | $146,388 |

**Quality trace** [scores are computed, never rolled]

Meters (0–100): Plot 56.94 · Writing 58.13 · Filming 54.31 · Editing 46.75
Inputs: staff points {"plot":55.69,"writing":58.47,"filming":51.77,"editing":35.55}, Star filming points 7.92 (Star family fit 12), studio Horror level 0 (+0%), era bar x1.01
Base scores: Audience 5.26 / Critic 5.54 · no weak meter
Combo grades: Audience B (x1.06) / Critic D (x0.9) · repetition fatigue x1 · critic saturation x1
Before expectations (after combo, weakness, fatigue, saturation; pre-clamp): Audience 5.58 / Critic 4.99 · critic generation 0 (−0.0%, scale) · audience era 0 (−0.0%) · then clamp 0–10 (generation/era 0 = the ones active at game start)
**Final: Audience 5.58 / Critic 4.99 → avg 5.29**

**Opening & viewership trace** [marketing/Fame/reach affect viewers only]

Awareness inputs: base 0.35, marketing 0.25, studioBuzz 0, starFame 0.05, trend 0, ipFans 0 → awareness 0.48. Reach cap 264,000 → pool 125,904 → opening 37,771.

| Wk | Viewers | Retention | Driver | Gross | Studio | Distributor |
|---:|---:|---:|---|---:|---:|---:|
| 1 | 37,771 | 1 | opening (aware people watching) | $75,542 | $51,369 | $24,173 |
| 2 | 23,237 | 0.62 | critic 4.99: no buzz | $46,474 | $31,602 | $14,872 |
| 3 | 14,306 | 0.62 | critic 4.99: no buzz | $28,612 | $19,456 | $9,156 |
| 4 | 10,099 | 0.71 | audience 5.58: +3,319 newly aware (word of mouth) | $20,198 | $13,735 | $6,463 |
| 5 | 6,867 | 0.68 | audience 5.58: +2,343 newly aware (word of mouth) | $13,734 | $9,339 | $4,395 |
| 6 | 4,669 | 0.68 | audience 5.58: +1,593 newly aware (word of mouth) | $9,338 | $6,350 | $2,988 |
| 7 | 3,175 | 0.68 | audience 5.58: +1,083 newly aware (word of mouth) | $6,350 | $4,318 | $2,032 |
| 8 | 2,159 | 0.68 | audience 5.58: +737 newly aware (word of mouth) | $4,318 | $2,936 | $1,382 |
| 9 | 1,468 | 0.68 | audience 5.58: +501 newly aware (word of mouth) | $2,936 | $1,996 | $940 |
| 10 | 998 | 0.68 | audience 5.58: +341 newly aware (word of mouth) | $1,996 | $1,357 | $639 |
| 11 | 679 | 0.68 | audience 5.58: +232 newly aware (word of mouth) | $1,358 | $923 | $435 |
| 12 | 461 | 0.68 | audience 5.58: +158 newly aware (word of mouth) | $922 | $627 | $295 |
| 13 | 0 | 0 | audience 5.58: +107 newly aware (word of mouth) | $0 | $0 | $0 |

**Progression trace**

- Prestige awards: none (no milestone reached)
- IP fans: {"before":0,"after":491,"delta":491}
- Star career: {"fameDelta":0.6,"relDelta":0.75,"grow":6,"level":0,"reasons":"worked together (+); project boosted their career (+)"}
- Distributor trust: Wolf Pictures earned back 89% of its $76,000 advance on Hollow Edge (step -0.09)
- Rule labels: LOCKED = causal chain, accounting, fallback/no-campaign, thresholds 4.0/9.0, IP fan inheritance. WORKING ASSUMPTION = all formulas' shapes and numbers.

### Dead Night — Comedy + Zombies (new)

Released week 34 (year 0.7) · Distributor: Wolf Pictures · Star: Sam Kerr (L0, Fame 6) · IP: Dead Night
Format: **limited_series**, 6 episodes (one per week) · 151,760 distinct viewers, 743,263 viewer-episodes · self-contained: never renews
Joined the streaming catalog after its run (retention value only; no new payouts).

**Financial waterfall** [LOCKED rules; amounts provisional]

| Item | Amount |
|---|---:|
| Advance received (project reserve, not revenue) | $137,000 |
| Base cost (unavoidable) | −$90,000 |
| Star fee | −$3,041 |
| Marketing campaign | −$20,000 |
| Paid from studio cash (overrun) | $0 |
| **Unused advance kept at completion** | $23,959 |
| Gross from sales (10 weeks) | $423,660 |
| Distributor royalty (31% of weekly gross) | −$131,335 |
| **Studio take** | $292,325 |
| Net for this title (surplus + take − cash overrun; wages are studio-wide, excluded) | $316,285 |

**Quality trace** [scores are computed, never rolled]

Meters (0–100): Plot 58.39 · Writing 59.84 · Filming 65.15 · Editing 47.17
Inputs: staff points {"plot":67.39,"writing":71.55,"filming":63.91,"editing":41.23}, Star filming points 43.12 (Star family fit 56), studio Comedy level 0 (+0%), era bar x1.03
Base scores: Audience 5.7 / Critic 5.82 · no weak meter
Combo grades: Audience A (x1.15) / Critic C (x1) · repetition fatigue x1 · critic saturation x1
Before expectations (after combo, weakness, fatigue, saturation; pre-clamp): Audience 6.56 / Critic 5.82 · critic generation 0 (−0.0%, scale) · audience era 0 (−0.0%) · then clamp 0–10 (generation/era 0 = the ones active at game start)
**Final: Audience 6.56 / Critic 5.82 → avg 6.19**

**Opening & viewership trace** [marketing/Fame/reach affect viewers only]

Awareness inputs: base 0.35, marketing 0.55, studioBuzz 0, starFame 0.02, trend 0.4, ipFans 0 → awareness 0.73. Reach cap 240,000 → pool 175,759 → opening 52,728.

| Wk | Viewers | Retention | Driver | Gross | Studio | Distributor |
|---:|---:|---:|---|---:|---:|---:|
| 1 | 87,880 | 1 | episode 1 premiere | $50,092 | $34,563 | $15,528 |
| 2 | 101,262 | 1.15 | episode 2: 93% kept (critic 5.82), +19,604 new | $57,719 | $39,826 | $17,893 |
| 3 | 106,617 | 1.05 | episode 3: 93% kept (critic 5.82), +12,524 new | $60,772 | $41,932 | $18,839 |
| 4 | 115,094 | 1.08 | episode 4: 97% kept (audience 6.56), +11,292 new | $65,604 | $45,266 | $20,337 |
| 5 | 122,455 | 1.06 | episode 5: 97% kept (audience 6.56), +10,399 new | $69,799 | $48,162 | $21,638 |
| 6 | 129,283 | 1.06 | episode 6: 97% kept (audience 6.56), +10,061 new | $73,691 | $50,847 | $22,844 |
| 7 | 51,713 | 0.4 | catch-up viewing (tail week 1/3) | $29,476 | $20,339 | $9,138 |
| 8 | 20,685 | 0.4 | catch-up viewing (tail week 2/3) | $11,790 | $8,135 | $3,655 |
| 9 | 8,274 | 0.4 | catch-up viewing (tail week 3/3) | $4,716 | $3,254 | $1,462 |
| 10 | 0 | 0 | run ended | $0 | $0 | $0 |

**Progression trace**

- Prestige awards: none (no milestone reached)
- IP fans: {"before":0,"after":2890,"delta":2890}
- Star career: {"fameDelta":2.99,"relDelta":0.75,"grow":6,"level":0,"reasons":"worked together (+); project boosted their career (+)"}
- Distributor trust: Wolf Pictures earned back 96% of its $137,000 advance on Dead Night (step 0.07)
- Rule labels: LOCKED = causal chain, accounting, fallback/no-campaign, thresholds 4.0/9.0, IP fan inheritance. WORKING ASSUMPTION = all formulas' shapes and numbers.

### Dead Pulse — Comedy + Zombies (new)

Released week 52 (year 1.0) · Distributor: Wolf Pictures · Star: Lee Quinn (L4, Fame 36) · IP: Dead Pulse
Format: **limited_series**, 6 episodes (one per week) · 163,305 distinct viewers, 811,137 viewer-episodes · self-contained: never renews
Joined the streaming catalog after its run (retention value only; no new payouts).

**Financial waterfall** [LOCKED rules; amounts provisional]

| Item | Amount |
|---|---:|
| Advance received (project reserve, not revenue) | $132,000 |
| Base cost (unavoidable) | −$90,000 |
| Star fee | −$26,085 |
| Marketing campaign | −$20,000 |
| Paid from studio cash (overrun) | $4,085 |
| **Unused advance kept at completion** | $0 |
| Gross from sales (10 weeks) | $462,348 |
| Distributor royalty (31% of weekly gross) | −$143,328 |
| **Studio take** | $319,020 |
| Net for this title (surplus + take − cash overrun; wages are studio-wide, excluded) | $314,936 |

**Quality trace** [scores are computed, never rolled]

Meters (0–100): Plot 62.74 · Writing 64.44 · Filming 69.57 · Editing 51.74
Inputs: staff points {"plot":81.95,"writing":88.21,"filming":78.79,"editing":50.18}, Star filming points 53.9 (Star family fit 68), studio Comedy level 1 (+3%), era bar x1.04
Base scores: Audience 6.15 / Critic 6.27 · no weak meter
Combo grades: Audience A (x1.15) / Critic C (x1) · repetition fatigue x0.95 · critic saturation x1
Before expectations (after combo, weakness, fatigue, saturation; pre-clamp): Audience 6.72 / Critic 5.96 · critic generation 0 (−0.0%, scale) · audience era 0 (−0.0%) · then clamp 0–10 (generation/era 0 = the ones active at game start)
**Final: Audience 6.72 / Critic 5.96 → avg 6.34**

**Opening & viewership trace** [marketing/Fame/reach affect viewers only]

Awareness inputs: base 0.35, marketing 0.55, studioBuzz 0, starFame 0.2, trend 0.4, ipFans 0 → awareness 0.78. Reach cap 240,000 → pool 186,342 → opening 55,903.

| Wk | Viewers | Retention | Driver | Gross | Studio | Distributor |
|---:|---:|---:|---|---:|---:|---:|
| 1 | 93,171 | 1 | episode 1 premiere | $53,107 | $36,644 | $16,463 |
| 2 | 108,268 | 1.16 | episode 2: 94% kept (critic 5.96), +20,911 new | $61,713 | $42,582 | $19,131 |
| 3 | 114,832 | 1.06 | episode 3: 94% kept (critic 5.96), +13,320 new | $65,454 | $45,163 | $20,291 |
| 4 | 125,315 | 1.09 | episode 4: 98% kept (audience 6.72), +12,412 new | $71,430 | $49,286 | $22,143 |
| 5 | 134,992 | 1.08 | episode 5: 98% kept (audience 6.72), +11,782 new | $76,945 | $53,092 | $23,853 |
| 6 | 144,433 | 1.07 | episode 6: 98% kept (audience 6.72), +11,709 new | $82,327 | $56,806 | $25,521 |
| 7 | 57,773 | 0.4 | catch-up viewing (tail week 1/3) | $32,931 | $22,722 | $10,208 |
| 8 | 23,109 | 0.4 | catch-up viewing (tail week 2/3) | $13,172 | $9,089 | $4,083 |
| 9 | 9,244 | 0.4 | catch-up viewing (tail week 3/3) | $5,269 | $3,636 | $1,633 |
| 10 | 0 | 0 | run ended | $0 | $0 | $0 |

**Progression trace**

- Prestige awards: none (no milestone reached)
- IP fans: {"before":0,"after":3501,"delta":3501}
- Star career: {"fameDelta":3.49,"relDelta":0.75,"grow":6,"level":4,"reasons":"worked together (+); project boosted their career (+)"}
- Distributor trust: Wolf Pictures earned 109% of its advance back on Dead Pulse (step 0.16)
- Rule labels: LOCKED = causal chain, accounting, fallback/no-campaign, thresholds 4.0/9.0, IP fan inheritance. WORKING ASSUMPTION = all formulas' shapes and numbers.

### Broken Legacy — Comedy + Zombies (new)

Released week 70 (year 1.3) · Distributor: Wolf Pictures · Star: Ari Reyes (L1, Fame 11) · IP: Broken Legacy
Format: **limited_series**, 6 episodes (one per week) · 146,569 distinct viewers, 720,432 viewer-episodes · self-contained: never renews
Joined the streaming catalog after its run (retention value only; no new payouts).

**Financial waterfall** [LOCKED rules; amounts provisional]

| Item | Amount |
|---|---:|
| Advance received (project reserve, not revenue) | $154,000 |
| Base cost (unavoidable) | −$90,000 |
| Star fee | −$5,050 |
| Marketing campaign | −$20,000 |
| Paid from studio cash (overrun) | $0 |
| **Unused advance kept at completion** | $38,950 |
| Gross from sales (10 weeks) | $410,646 |
| Distributor royalty (31% of weekly gross) | −$127,300 |
| **Studio take** | $283,346 |
| Net for this title (surplus + take − cash overrun; wages are studio-wide, excluded) | $322,296 |

**Quality trace** [scores are computed, never rolled]

Meters (0–100): Plot 75.62 · Writing 76.41 · Filming 77.79 · Editing 65.37
Inputs: staff points {"plot":152.97,"writing":159.74,"filming":151.24,"editing":89.53}, Star filming points 54.74 (Star family fit 69), studio Comedy level 1 (+3%), era bar x1.05
Base scores: Audience 7.29 / Critic 7.47 · no weak meter
Combo grades: Audience A (x1.15) / Critic C (x1) · repetition fatigue x0.9 · critic saturation x0.9
Before expectations (after combo, weakness, fatigue, saturation; pre-clamp): Audience 7.55 / Critic 6.05 · critic generation 0 (−0.0%, scale) · audience era 0 (−0.0%) · then clamp 0–10 (generation/era 0 = the ones active at game start)
**Final: Audience 7.55 / Critic 6.05 → avg 6.8**

**Opening & viewership trace** [marketing/Fame/reach affect viewers only]

Awareness inputs: base 0.35, marketing 0.55, studioBuzz 0, starFame 0.04, trend 0.1, ipFans 0 → awareness 0.65. Reach cap 240,000 → pool 155,340 → opening 46,602.

| Wk | Viewers | Retention | Driver | Gross | Studio | Distributor |
|---:|---:|---:|---|---:|---:|---:|
| 1 | 77,670 | 1 | episode 1 premiere | $44,272 | $30,548 | $13,724 |
| 2 | 90,895 | 1.17 | episode 2: 94% kept (critic 6.05), +17,652 new | $51,810 | $35,749 | $16,061 |
| 3 | 97,086 | 1.07 | episode 3: 94% kept (critic 6.05), +11,372 new | $55,339 | $38,184 | $17,155 |
| 4 | 109,601 | 1.13 | episode 4: 100% kept (audience 7.55), +12,515 new | $62,473 | $43,106 | $19,367 |
| 5 | 122,755 | 1.12 | episode 5: 100% kept (audience 7.55), +13,154 new | $69,970 | $48,280 | $21,691 |
| 6 | 136,961 | 1.12 | episode 6: 100% kept (audience 7.55), +14,206 new | $78,068 | $53,867 | $24,201 |
| 7 | 54,784 | 0.4 | catch-up viewing (tail week 1/3) | $31,227 | $21,547 | $9,680 |
| 8 | 21,914 | 0.4 | catch-up viewing (tail week 2/3) | $12,491 | $8,619 | $3,872 |
| 9 | 8,766 | 0.4 | catch-up viewing (tail week 3/3) | $4,997 | $3,448 | $1,549 |
| 10 | 0 | 0 | run ended | $0 | $0 | $0 |

**Progression trace**

- Prestige awards: Prestige +75: audience_7_5 (Broken Legacy).
- IP fans: {"before":0,"after":4221,"delta":4221}
- Star career: {"fameDelta":4.45,"relDelta":0.75,"grow":6,"level":1,"reasons":"worked together (+); project boosted their career (+)"}
- Distributor trust: Wolf Pictures earned back 83% of its $154,000 advance on Broken Legacy (step 0.07)
- Rule labels: LOCKED = causal chain, accounting, fallback/no-campaign, thresholds 4.0/9.0, IP fan inheritance. WORKING ASSUMPTION = all formulas' shapes and numbers.

### Red Shadow — Action + Spies (new)

Released week 88 (year 1.7) · Distributor: Wolf Pictures · Star: Alex Sato (L10, Fame 100) · IP: Red Shadow
Format: **limited_series**, 6 episodes (one per week) · 187,821 distinct viewers, 958,210 viewer-episodes · self-contained: never renews
Joined the streaming catalog after its run (retention value only; no new payouts).

**Financial waterfall** [LOCKED rules; amounts provisional]

| Item | Amount |
|---|---:|
| Advance received (project reserve, not revenue) | $139,000 |
| Base cost (unavoidable) | −$90,000 |
| Star fee | −$17,993 |
| Marketing campaign | −$20,000 |
| Paid from studio cash (overrun) | $0 |
| **Unused advance kept at completion** | $11,007 |
| Gross from sales (10 weeks) | $546,180 |
| Distributor royalty (31% of weekly gross) | −$169,316 |
| **Studio take** | $376,864 |
| Net for this title (surplus + take − cash overrun; wages are studio-wide, excluded) | $387,871 |

**Quality trace** [scores are computed, never rolled]

Meters (0–100): Plot 77.08 · Writing 78.06 · Filming 80.25 · Editing 66.93
Inputs: staff points {"plot":168.09,"writing":177.74,"filming":165.04,"editing":97.25}, Star filming points 77 (Star family fit 100), studio Action level 0 (+0%), era bar x1.07
Base scores: Audience 7.48 / Critic 7.64 · no weak meter
Combo grades: Audience B (x1.06) / Critic B (x1.06) · repetition fatigue x1 · critic saturation x1
Before expectations (after combo, weakness, fatigue, saturation; pre-clamp): Audience 7.93 / Critic 8.1 · critic generation 0 (−0.0%, scale) · audience era 0 (−0.0%) · then clamp 0–10 (generation/era 0 = the ones active at game start)
**Final: Audience 7.93 / Critic 8.1 → avg 8.02**

**Opening & viewership trace** [marketing/Fame/reach affect viewers only]

Awareness inputs: base 0.35, marketing 0.55, studioBuzz 0, starFame 0.15, trend 0.15, ipFans 0 → awareness 0.7. Reach cap 264,000 → pool 184,485 → opening 55,346.

| Wk | Viewers | Retention | Driver | Gross | Studio | Distributor |
|---:|---:|---:|---|---:|---:|---:|
| 1 | 92,243 | 1 | episode 1 premiere | $52,579 | $36,279 | $16,299 |
| 2 | 115,737 | 1.25 | episode 2: 100% kept (critic 8.1), +23,494 new | $65,970 | $45,519 | $20,451 |
| 3 | 130,911 | 1.13 | episode 3: 100% kept (critic 8.1), +15,174 new | $74,619 | $51,487 | $23,132 |
| 4 | 147,713 | 1.13 | episode 4: 100% kept (audience 7.93), +16,802 new | $84,196 | $58,096 | $26,101 |
| 5 | 166,585 | 1.13 | episode 5: 100% kept (audience 7.93), +18,872 new | $94,953 | $65,518 | $29,436 |
| 6 | 187,821 | 1.13 | episode 6: 100% kept (audience 7.93), +21,236 new | $107,058 | $73,870 | $33,188 |
| 7 | 75,128 | 0.4 | catch-up viewing (tail week 1/3) | $42,823 | $29,548 | $13,275 |
| 8 | 30,051 | 0.4 | catch-up viewing (tail week 2/3) | $17,129 | $11,819 | $5,310 |
| 9 | 12,021 | 0.4 | catch-up viewing (tail week 3/3) | $6,852 | $4,728 | $2,124 |
| 10 | 0 | 0 | run ended | $0 | $0 | $0 |

**Progression trace**

- Prestige awards: Prestige +75: audience_7_5 (Red Shadow).
- IP fans: {"before":0,"after":9076,"delta":9076}
- Star career: {"fameDelta":8.4,"relDelta":0.75,"grow":0,"level":5,"reasons":"worked together (+); project boosted their career (+)"}
- Distributor trust: Wolf Pictures earned 122% of its advance back on Red Shadow with strong reviews (step 0.47)
- Rule labels: LOCKED = causal chain, accounting, fallback/no-campaign, thresholds 4.0/9.0, IP fan inheritance. WORKING ASSUMPTION = all formulas' shapes and numbers.

### Hollow Code — Action + Spies (new)

Released week 106 (year 2.0) · Distributor: Orbit Releasing · Star: Alex Sato (L10, Fame 100) · IP: Hollow Code
Format: **limited_series**, 6 episodes (one per week) · 229,511 distinct viewers, 1,187,639 viewer-episodes · self-contained: never renews
Joined the streaming catalog after its run (retention value only; no new payouts).

**Financial waterfall** [LOCKED rules; amounts provisional]

| Item | Amount |
|---|---:|
| Advance received (project reserve, not revenue) | $116,000 |
| Base cost (unavoidable) | −$90,000 |
| Star fee | −$17,718 |
| Marketing campaign | −$20,000 |
| Paid from studio cash (overrun) | $11,718 |
| **Unused advance kept at completion** | $0 |
| Gross from sales (10 weeks) | $676,954 |
| Distributor royalty (35% of weekly gross) | −$236,934 |
| **Studio take** | $440,020 |
| Net for this title (surplus + take − cash overrun; wages are studio-wide, excluded) | $428,302 |

**Quality trace** [scores are computed, never rolled]

Meters (0–100): Plot 78.72 · Writing 79.74 · Filming 81.07 · Editing 68.66
Inputs: staff points {"plot":187.24,"writing":199.16,"filming":179.1,"editing":106.61}, Star filming points 79.31 (Star family fit 100), studio Action level 1 (+3%), era bar x1.08
Base scores: Audience 7.62 / Critic 7.79 · no weak meter
Combo grades: Audience B (x1.06) / Critic B (x1.06) · repetition fatigue x0.95 · critic saturation x1
Before expectations (after combo, weakness, fatigue, saturation; pre-clamp): Audience 7.67 / Critic 7.85 · critic generation 0 (−0.0%, scale) · audience era 0 (−0.0%) · then clamp 0–10 (generation/era 0 = the ones active at game start)
**Final: Audience 7.67 / Critic 7.85 → avg 7.76**

**Opening & viewership trace** [marketing/Fame/reach affect viewers only]

Awareness inputs: base 0.35, marketing 0.55, studioBuzz 0, starFame 0.2, trend 0.4, ipFans 0 → awareness 0.78. Reach cap 300,000 → pool 233,088 → opening 69,926.

| Wk | Viewers | Retention | Driver | Gross | Studio | Distributor |
|---:|---:|---:|---|---:|---:|---:|
| 1 | 116,544 | 1 | episode 1 premiere | $66,430 | $43,180 | $23,251 |
| 2 | 145,492 | 1.25 | episode 2: 100% kept (critic 7.85), +28,948 new | $82,930 | $53,905 | $29,026 |
| 3 | 163,872 | 1.13 | episode 3: 100% kept (critic 7.85), +18,380 new | $93,407 | $60,715 | $32,692 |
| 4 | 183,624 | 1.12 | episode 4: 100% kept (audience 7.67), +19,752 new | $104,666 | $68,033 | $36,633 |
| 5 | 205,381 | 1.12 | episode 5: 100% kept (audience 7.67), +21,757 new | $117,067 | $76,094 | $40,974 |
| 6 | 229,511 | 1.12 | episode 6: 100% kept (audience 7.67), +24,130 new | $130,821 | $85,034 | $45,787 |
| 7 | 91,804 | 0.4 | catch-up viewing (tail week 1/3) | $52,328 | $34,013 | $18,315 |
| 8 | 36,722 | 0.4 | catch-up viewing (tail week 2/3) | $20,932 | $13,606 | $7,326 |
| 9 | 14,689 | 0.4 | catch-up viewing (tail week 3/3) | $8,373 | $5,442 | $2,930 |
| 10 | 0 | 0 | run ended | $0 | $0 | $0 |

**Progression trace**

- Prestige awards: Prestige +75: audience_7_5 (Hollow Code).
- IP fans: {"before":0,"after":10135,"delta":10135}
- Star career: {"fameDelta":8.35,"relDelta":0.75,"grow":0,"level":6,"reasons":"worked together (+); project boosted their career (+)"}
- Distributor trust: Orbit Releasing earned 204% of its advance back on Hollow Code with strong reviews (step 0.75)
- Rule labels: LOCKED = causal chain, accounting, fallback/no-campaign, thresholds 4.0/9.0, IP fan inheritance. WORKING ASSUMPTION = all formulas' shapes and numbers.

### Hollow Frequency — Comedy + Spies (new)

Released week 124 (year 2.4) · Distributor: XYZ Network · Star: Mo Diaz (L5, Fame 52) · IP: Hollow Frequency
Format: **limited_series**, 6 episodes (one per week) · 287,355 distinct viewers, 1,420,103 viewer-episodes · self-contained: never renews
Joined the streaming catalog after its run (retention value only; no new payouts).

**Financial waterfall** [LOCKED rules; amounts provisional]

| Item | Amount |
|---|---:|
| Advance received (project reserve, not revenue) | $154,000 |
| Base cost (unavoidable) | −$90,000 |
| Star fee | −$20,921 |
| Marketing campaign | −$20,000 |
| Paid from studio cash (overrun) | $0 |
| **Unused advance kept at completion** | $23,079 |
| Gross from sales (10 weeks) | $809,459 |
| Distributor royalty (45% of weekly gross) | −$364,256 |
| **Studio take** | $445,202 |
| Net for this title (surplus + take − cash overrun; wages are studio-wide, excluded) | $468,282 |

**Quality trace** [scores are computed, never rolled]

Meters (0–100): Plot 83.72 · Writing 84.57 · Filming 84.69 · Editing 75.82
Inputs: staff points {"plot":263.72,"writing":280.98,"filming":256.59,"editing":154.59}, Star filming points 81.62 (Star family fit 100), studio Comedy level 2 (+6%), era bar x1.1
Base scores: Audience 8.14 / Critic 8.3 · no weak meter
Combo grades: Audience C (x1) / Critic F (x0.78) · repetition fatigue x1 · critic saturation x1
Before expectations (after combo, weakness, fatigue, saturation; pre-clamp): Audience 8.14 / Critic 6.47 · critic generation 0 (−0.0%, scale) · audience era 0 (−0.0%) · then clamp 0–10 (generation/era 0 = the ones active at game start)
**Final: Audience 8.14 / Critic 6.47 → avg 7.31**

**Opening & viewership trace** [marketing/Fame/reach affect viewers only]

Awareness inputs: base 0.35, marketing 0.55, studioBuzz 0, starFame 0.17, trend 0.4, ipFans 0 → awareness 0.77. Reach cap 376,000 → pool 289,893 → opening 86,968.

| Wk | Viewers | Retention | Driver | Gross | Studio | Distributor |
|---:|---:|---:|---|---:|---:|---:|
| 1 | 144,947 | 1 | episode 1 premiere | $82,620 | $45,441 | $37,179 |
| 2 | 173,811 | 1.2 | episode 2: 97% kept (critic 6.47), +33,473 new | $99,072 | $54,490 | $44,583 |
| 3 | 189,603 | 1.09 | episode 3: 97% kept (critic 6.47), +21,319 new | $108,074 | $59,441 | $48,633 |
| 4 | 215,947 | 1.14 | episode 4: 100% kept (audience 8.14), +26,344 new | $123,090 | $67,699 | $55,390 |
| 5 | 245,591 | 1.14 | episode 5: 100% kept (audience 8.14), +29,644 new | $139,987 | $76,993 | $62,994 |
| 6 | 277,219 | 1.13 | episode 6: 100% kept (audience 8.14), +31,628 new | $158,015 | $86,908 | $71,107 |
| 7 | 110,888 | 0.4 | catch-up viewing (tail week 1/3) | $63,206 | $34,763 | $28,443 |
| 8 | 44,355 | 0.4 | catch-up viewing (tail week 2/3) | $25,282 | $13,905 | $11,377 |
| 9 | 17,742 | 0.4 | catch-up viewing (tail week 3/3) | $10,113 | $5,562 | $4,551 |
| 10 | 0 | 0 | run ended | $0 | $0 | $0 |

**Progression trace**

- Prestige awards: Prestige +50: meters_all_70 (Hollow Frequency).; Prestige +75: audience_7_5 (Hollow Frequency).
- IP fans: {"before":0,"after":10621,"delta":10621}
- Star career: {"fameDelta":7.59,"relDelta":0.75,"grow":0,"level":4,"reasons":"worked together (+); project boosted their career (+)"}
- Distributor trust: XYZ Network earned 237% of its advance back on Hollow Frequency with strong reviews (step 0.75)
- Rule labels: LOCKED = causal chain, accounting, fallback/no-campaign, thresholds 4.0/9.0, IP fan inheritance. WORKING ASSUMPTION = all formulas' shapes and numbers.

### Iron Legacy — Action + Spies (new)

Released week 140 (year 2.7) · Distributor: XYZ Network · Star: Alex Sato (L10, Fame 100) · IP: Iron Legacy
Format: **tv season 1**, 5 episodes (one per week) · 263,190 distinct viewers, 1,163,497 viewer-episodes · renewal: average 7.89 ≥ 4.0 → renewable
Joined the streaming catalog after its run (retention value only; no new payouts).

**Financial waterfall** [LOCKED rules; amounts provisional]

| Item | Amount |
|---|---:|
| Advance received (project reserve, not revenue) | $176,000 |
| Base cost (unavoidable) | −$90,000 |
| Star fee | −$29,775 |
| Marketing campaign | −$20,000 |
| Paid from studio cash (overrun) | $0 |
| **Unused advance kept at completion** | $36,225 |
| Gross from sales (8 weeks) | $372,319 |
| Distributor royalty (43% of weekly gross) | −$160,097 |
| **Studio take** | $212,222 |
| Net for this title (surplus + take − cash overrun; wages are studio-wide, excluded) | $248,446 |

**Quality trace** [scores are computed, never rolled]

Meters (0–100): Plot 84.13 · Writing 85.05 · Filming 84.54 · Editing 77.28
Inputs: staff points {"plot":244.27,"writing":262.06,"filming":232.48,"editing":150.67}, Star filming points 67.98 (Star family fit 100), studio Action level 1 (+3%), era bar x1.11
Base scores: Audience 8.2 / Critic 8.35 · no weak meter
Combo grades: Audience B (x1.06) / Critic B (x1.06) · repetition fatigue x0.9 · critic saturation x1
Before expectations (after combo, weakness, fatigue, saturation; pre-clamp): Audience 7.82 / Critic 7.96 · critic generation 0 (−0.0%, scale) · audience era 0 (−0.0%) · then clamp 0–10 (generation/era 0 = the ones active at game start)
**Final: Audience 7.82 / Critic 7.96 → avg 7.89**

**Opening & viewership trace** [marketing/Fame/reach affect viewers only]

Awareness inputs: base 0.35, marketing 0.55, studioBuzz 0, starFame 0.25, trend 0.4, ipFans 0, announcement 0 → awareness 0.79. Reach cap 376,000 → pool 296,235 → opening 88,871.

| Wk | Viewers | Retention | Driver | Gross | Studio | Distributor |
|---:|---:|---:|---|---:|---:|---:|
| 1 | 148,118 | 1 | episode 1 premiere | $47,398 | $27,017 | $20,381 |
| 2 | 185,064 | 1.25 | episode 2: 100% kept (critic 7.96), +36,946 new | $59,220 | $33,756 | $25,465 |
| 3 | 208,466 | 1.13 | episode 3: 100% kept (critic 7.96), +23,402 new | $66,709 | $38,024 | $28,685 |
| 4 | 234,301 | 1.12 | episode 4: 100% kept (audience 7.82), +25,835 new | $74,976 | $42,737 | $32,240 |
| 5 | 263,190 | 1.12 | episode 5: 100% kept (audience 7.82), +28,889 new | $84,221 | $48,006 | $36,215 |
| 6 | 92,117 | 0.35 | catch-up viewing (tail week 1/2) | $29,477 | $16,802 | $12,675 |
| 7 | 32,241 | 0.35 | catch-up viewing (tail week 2/2) | $10,317 | $5,881 | $4,436 |
| 8 | 0 | 0 | run ended | $0 | $0 | $0 |

**Progression trace**

- Prestige awards: Prestige +50: meters_all_70 (Iron Legacy).; Prestige +75: audience_7_5 (Iron Legacy).
- IP fans: {"before":0,"after":12170,"delta":12170}
- Star career: {"fameDelta":9.2,"relDelta":0.75,"grow":0,"level":6,"reasons":"worked together (+); project boosted their career (+)"}
- Distributor trust: XYZ Network earned back 91% of its $176,000 advance on Iron Legacy (step 0.26)
- Rule labels: LOCKED = causal chain, accounting, fallback/no-campaign, thresholds 4.0/9.0, IP fan inheritance. WORKING ASSUMPTION = all formulas' shapes and numbers.

### Last Edge — Action + Spies (new)

Released week 156 (year 3.0) · Distributor: XYZ Network · Star: Alex Sato (L10, Fame 100) · IP: Last Edge
Joined the streaming catalog after its run (retention value only; no new payouts).

**Financial waterfall** [LOCKED rules; amounts provisional]

| Item | Amount |
|---|---:|
| Advance received (project reserve, not revenue) | $132,000 |
| Base cost (unavoidable) | −$60,000 |
| Star fee | −$29,231 |
| Marketing campaign | −$20,000 |
| Paid from studio cash (overrun) | $0 |
| **Unused advance kept at completion** | $22,769 |
| Gross from sales (15 weeks) | $738,418 |
| Distributor royalty (42% of weekly gross) | −$310,136 |
| **Studio take** | $428,282 |
| Net for this title (surplus + take − cash overrun; wages are studio-wide, excluded) | $451,052 |

**Quality trace** [scores are computed, never rolled]

Meters (0–100): Plot 85.25 · Writing 86.17 · Filming 85.38 · Editing 78.53
Inputs: staff points {"plot":269.29,"writing":290.24,"filming":254.54,"editing":163.88}, Star filming points 69.96 (Star family fit 100), studio Action level 2 (+6%), era bar x1.12
Base scores: Audience 8.31 / Critic 8.46 · no weak meter
Combo grades: Audience B (x1.06) / Critic B (x1.06) · repetition fatigue x0.85 · critic saturation x0.9
Before expectations (after combo, weakness, fatigue, saturation; pre-clamp): Audience 7.49 / Critic 6.86 · critic generation 0 (−0.0%, scale) · audience era 0 (−0.0%) · then clamp 0–10 (generation/era 0 = the ones active at game start)
**Final: Audience 7.49 / Critic 6.86 → avg 7.18**

**Opening & viewership trace** [marketing/Fame/reach affect viewers only]

Awareness inputs: base 0.35, marketing 0.55, studioBuzz 0, starFame 0.31, trend 0.1, ipFans 0 → awareness 0.73. Reach cap 376,000 → pool 274,110 → opening 82,233.

| Wk | Viewers | Retention | Driver | Gross | Studio | Distributor |
|---:|---:|---:|---|---:|---:|---:|
| 1 | 82,233 | 1 | opening (aware people watching) | $164,466 | $95,390 | $69,076 |
| 2 | 56,858 | 0.69 | critic 6.86: +4,548 newly aware (buzz) | $113,716 | $65,955 | $47,761 |
| 3 | 35,390 | 0.62 | critic 6.86: +5,373 newly aware (buzz) | $70,780 | $41,052 | $29,728 |
| 4 | 33,426 | 0.94 | audience 7.49: +35,248 newly aware (word of mouth) | $66,852 | $38,774 | $28,078 |
| 5 | 30,723 | 0.92 | audience 7.49: +33,292 newly aware (word of mouth) | $61,446 | $35,639 | $25,807 |
| 6 | 28,238 | 0.92 | audience 7.49: +30,600 newly aware (word of mouth) | $56,476 | $32,756 | $23,720 |
| 7 | 25,955 | 0.92 | audience 7.49: +28,125 newly aware (word of mouth) | $51,910 | $30,108 | $21,802 |
| 8 | 23,856 | 0.92 | audience 7.49: +25,851 newly aware (word of mouth) | $47,712 | $27,673 | $20,039 |
| 9 | 18,115 | 0.76 | audience 7.49: +12,461 newly aware (word of mouth) | $36,230 | $21,013 | $15,217 |
| 10 | 12,460 | 0.69 | audience 7.49: +5,623 newly aware (word of mouth) | $24,920 | $14,454 | $10,466 |
| 11 | 8,707 | 0.7 | audience 7.49: +4,270 newly aware (word of mouth) | $17,414 | $10,100 | $7,314 |
| 12 | 6,068 | 0.7 | audience 7.49: +2,937 newly aware (word of mouth) | $12,136 | $7,039 | $5,097 |
| 13 | 4,231 | 0.7 | audience 7.49: +2,052 newly aware (word of mouth) | $8,462 | $4,908 | $3,554 |
| 14 | 2,949 | 0.7 | audience 7.49: +1,430 newly aware (word of mouth) | $5,898 | $3,421 | $2,477 |
| 15 | 0 | 0 | audience 7.49: +997 newly aware (word of mouth) | $0 | $0 | $0 |

**Progression trace**

- Prestige awards: Prestige +50: meters_all_70 (Last Edge).
- IP fans: {"before":0,"after":12878,"delta":12878}
- Star career: {"fameDelta":7.75,"relDelta":0.75,"grow":0,"level":7,"reasons":"worked together (+); project boosted their career (+)"}
- Distributor trust: XYZ Network earned 235% of its advance back on Last Edge with strong reviews (step 0.75)
- Rule labels: LOCKED = causal chain, accounting, fallback/no-campaign, thresholds 4.0/9.0, IP fan inheritance. WORKING ASSUMPTION = all formulas' shapes and numbers.

### Hollow Legacy — Action + Superheroes (new)

Released week 174 (year 3.3) · Distributor: Meridian Global · Star: Alex Sato (L10, Fame 100) · IP: Hollow Legacy
Format: **limited_series**, 6 episodes (one per week) · 363,282 distinct viewers, 1,873,424 viewer-episodes · self-contained: never renews
Joined the streaming catalog after its run (retention value only; no new payouts).

**Financial waterfall** [LOCKED rules; amounts provisional]

| Item | Amount |
|---|---:|
| Advance received (project reserve, not revenue) | $201,000 |
| Base cost (unavoidable) | −$90,000 |
| Star fee | −$35,930 |
| Marketing campaign | −$20,000 |
| Paid from studio cash (overrun) | $0 |
| **Unused advance kept at completion** | $55,070 |
| Gross from sales (10 weeks) | $1,067,852 |
| Distributor royalty (49% of weekly gross) | −$523,247 |
| **Studio take** | $544,604 |
| Net for this title (surplus + take − cash overrun; wages are studio-wide, excluded) | $599,675 |

**Quality trace** [scores are computed, never rolled]

Meters (0–100): Plot 86 · Writing 86.95 · Filming 86.26 · Editing 78.64
Inputs: staff points {"plot":325.95,"writing":353.45,"filming":315.69,"editing":187.84}, Star filming points 81.62 (Star family fit 100), studio Action level 2 (+6%), era bar x1.13
Base scores: Audience 8.37 / Critic 8.53 · no weak meter
Combo grades: Audience A (x1.15) / Critic C (x1) · repetition fatigue x1 · critic saturation x1
Before expectations (after combo, weakness, fatigue, saturation; pre-clamp): Audience 9.62 / Critic 8.53 · critic generation 0 (−0.0%, scale) · audience era 0 (−0.0%) · then clamp 0–10 (generation/era 0 = the ones active at game start)
**Final: Audience 9.62 / Critic 8.53 → avg 9.07 (HALL OF FAME)**

**Opening & viewership trace** [marketing/Fame/reach affect viewers only]

Awareness inputs: base 0.35, marketing 0.55, studioBuzz 0, starFame 0.35, trend 0.4, ipFans 0 → awareness 0.81. Reach cap 440,000 → pool 355,684 → opening 106,705.

| Wk | Viewers | Retention | Driver | Gross | Studio | Distributor |
|---:|---:|---:|---|---:|---:|---:|
| 1 | 177,842 | 1 | episode 1 premiere | $101,370 | $51,699 | $49,671 |
| 2 | 223,354 | 1.26 | episode 2: 100% kept (critic 8.53), +45,512 new | $127,312 | $64,929 | $62,383 |
| 3 | 251,999 | 1.13 | episode 3: 100% kept (critic 8.53), +28,645 new | $143,639 | $73,256 | $70,383 |
| 4 | 295,063 | 1.17 | episode 4: 100% kept (audience 9.62), +43,064 new | $168,186 | $85,775 | $82,411 |
| 5 | 335,196 | 1.14 | episode 5: 100% kept (audience 9.62), +40,133 new | $191,062 | $97,441 | $93,620 |
| 6 | 363,282 | 1.08 | episode 6: 100% kept (audience 9.62), +28,086 new | $207,071 | $105,606 | $101,465 |
| 7 | 145,313 | 0.4 | catch-up viewing (tail week 1/3) | $82,828 | $42,242 | $40,586 |
| 8 | 58,125 | 0.4 | catch-up viewing (tail week 2/3) | $33,131 | $16,897 | $16,234 |
| 9 | 23,250 | 0.4 | catch-up viewing (tail week 3/3) | $13,253 | $6,759 | $6,494 |
| 10 | 0 | 0 | run ended | $0 | $0 | $0 |

**Progression trace**

- Prestige awards: Prestige +50: meters_all_70 (Hollow Legacy).; Prestige +75: audience_7_5 (Hollow Legacy).; Prestige +85: critic_8_5 (Hollow Legacy).; Prestige +200: hall_of_fame (Hollow Legacy).; Prestige +100: first_hall_of_fame (Hollow Legacy).; Prestige +100: ip_gross_1m (Hollow Legacy).
- IP fans: {"before":0,"after":23657,"delta":23657}
- Star career: {"fameDelta":14.4,"relDelta":0.75,"grow":0,"level":7,"reasons":"worked together (+); project boosted their career (+)"}
- Distributor trust: Meridian Global earned 260% of its advance back on Hollow Legacy with strong reviews (step 0.75)
- Rule labels: LOCKED = causal chain, accounting, fallback/no-campaign, thresholds 4.0/9.0, IP fan inheritance. WORKING ASSUMPTION = all formulas' shapes and numbers.

### Iron Legacy: Season 2 — Action + Spies (season)

Released week 200 (year 3.8) · Distributor: XYZ Network · Star: Alex Sato (L10, Fame 100) · IP: Iron Legacy
Format: **tv season 2**, 10 episodes (one per week) · 345,519 distinct viewers, 2,752,507 viewer-episodes · renewal: average 7.67 ≥ 4.0 → renewable
TV: show-age fatigue 1.1% (base 1.2%, quality slows by 12%) · twist none · hiatus 52 weeks since the last season aired → anticipation ×1 · announcement anticipation used 0.03
Joined the streaming catalog after its run (retention value only; no new payouts).

**Financial waterfall** [LOCKED rules; amounts provisional]

| Item | Amount |
|---|---:|
| Advance received (project reserve, not revenue) | $338,000 |
| Base cost (unavoidable) | −$165,000 |
| Star fee | −$49,299 |
| Marketing campaign | −$20,000 |
| Paid from studio cash (overrun) | $0 |
| **Unused advance kept at completion** | $103,701 |
| Gross from sales (13 weeks) | $880,802 |
| Distributor royalty (41% of weekly gross) | −$361,129 |
| **Studio take** | $519,673 |
| Net for this title (surplus + take − cash overrun; wages are studio-wide, excluded) | $623,374 |

**Quality trace** [scores are computed, never rolled]

Meters (0–100): Plot 87.51 · Writing 88 · Filming 87.46 · Editing 81.44
Inputs: staff points {"plot":546.46,"writing":571.97,"filming":532.02,"editing":329.05}, Star filming points 116.6 (Star family fit 100), studio Action level 2 (+6%), era bar x1.15
Base scores: Audience 8.54 / Critic 8.68 · no weak meter
Combo grades: Audience B (x1.06) / Critic B (x1.06) · repetition fatigue x0.84 · critic saturation x1
Before expectations (after combo, weakness, fatigue, saturation; pre-clamp): Audience 7.61 / Critic 7.73 · critic generation 0 (−0.0%, scale) · audience era 0 (−0.0%) · then clamp 0–10 (generation/era 0 = the ones active at game start)
**Final: Audience 7.61 / Critic 7.73 → avg 7.67**

**Opening & viewership trace** [marketing/Fame/reach affect viewers only]

Awareness inputs: base 0.35, marketing 0.55, studioBuzz 0, starFame 0.44, trend 0, ipFans 0.07, announcement 0.03 → awareness 0.76. Reach cap 376,000 → pool 286,685 → opening 86,006.

| Wk | Viewers | Retention | Driver | Gross | Studio | Distributor |
|---:|---:|---:|---|---:|---:|---:|
| 1 | 143,343 | 1 | episode 1 premiere | $45,870 | $27,063 | $18,807 |
| 2 | 178,792 | 1.25 | episode 2: 100% kept (critic 7.73), +35,449 new | $57,213 | $33,756 | $23,458 |
| 3 | 201,367 | 1.13 | episode 3: 100% kept (critic 7.73), +22,575 new | $64,437 | $38,018 | $26,419 |
| 4 | 225,429 | 1.12 | episode 4: 100% kept (audience 7.61), +24,062 new | $72,137 | $42,561 | $29,576 |
| 5 | 251,741 | 1.12 | episode 5: 100% kept (audience 7.61), +26,312 new | $80,557 | $47,529 | $33,028 |
| 6 | 280,784 | 1.12 | episode 6: 100% kept (audience 7.61), +29,043 new | $89,851 | $53,012 | $36,839 |
| 7 | 304,569 | 1.08 | episode 7: 100% kept (audience 7.61), +23,785 new | $97,462 | $57,503 | $39,959 |
| 8 | 322,198 | 1.06 | episode 8: 100% kept (audience 7.61), +17,629 new | $103,103 | $60,831 | $42,272 |
| 9 | 335,507 | 1.04 | episode 9: 100% kept (audience 7.61), +13,309 new | $107,362 | $63,344 | $44,019 |
| 10 | 345,519 | 1.03 | episode 10: 100% kept (audience 7.61), +10,012 new | $110,566 | $65,234 | $45,332 |
| 11 | 120,932 | 0.35 | catch-up viewing (tail week 1/2) | $38,698 | $22,832 | $15,866 |
| 12 | 42,326 | 0.35 | catch-up viewing (tail week 2/2) | $13,544 | $7,991 | $5,553 |
| 13 | 0 | 0 | run ended | $0 | $0 | $0 |

**Progression trace**

- Prestige awards: Prestige +50: meters_all_70 (Iron Legacy: Season 2).; Prestige +75: audience_7_5 (Iron Legacy: Season 2).; Prestige +150: ip_viewers_500k (Iron Legacy: Season 2).; Prestige +100: ip_gross_1m (Iron Legacy: Season 2).
- IP fans: {"before":10739,"after":25500,"delta":14761}
- Star career: {"fameDelta":9.31,"relDelta":0.75,"grow":0,"level":8,"reasons":"worked together (+); project boosted their career (+)"}
- Distributor trust: XYZ Network earned 107% of its advance back on Iron Legacy: Season 2 with strong reviews (step 0.33)
- Rule labels: LOCKED = causal chain, accounting, fallback/no-campaign, thresholds 4.0/9.0, IP fan inheritance. WORKING ASSUMPTION = all formulas' shapes and numbers.

### Silver Signal — Action + Zombies (new)

Released week 216 (year 4.2) · Distributor: Meridian Global · Star: Alex Sato (L10, Fame 100) · IP: Silver Signal
Joined the streaming catalog after its run (retention value only; no new payouts).

**Financial waterfall** [LOCKED rules; amounts provisional]

| Item | Amount |
|---|---:|
| Advance received (project reserve, not revenue) | $138,000 |
| Base cost (unavoidable) | −$60,000 |
| Star fee | −$48,337 |
| Marketing campaign | −$20,000 |
| Paid from studio cash (overrun) | $0 |
| **Unused advance kept at completion** | $9,663 |
| Gross from sales (15 weeks) | $875,642 |
| Distributor royalty (47% of weekly gross) | −$411,552 |
| **Studio take** | $464,090 |
| Net for this title (surplus + take − cash overrun; wages are studio-wide, excluded) | $473,754 |

**Quality trace** [scores are computed, never rolled]

Meters (0–100): Plot 88.54 · Writing 89.04 · Filming 87.94 · Editing 82.41
Inputs: staff points {"plot":374.68,"writing":393.99,"filming":349.96,"editing":218.57}, Star filming points 71.94 (Star family fit 100), studio Action level 3 (+9%), era bar x1.17
Base scores: Audience 8.63 / Critic 8.77 · no weak meter
Combo grades: Audience A (x1.15) / Critic C (x1) · repetition fatigue x1 · critic saturation x1
Before expectations (after combo, weakness, fatigue, saturation; pre-clamp): Audience 9.92 / Critic 8.77 · critic generation 0 (−0.0%, scale) · audience era 0 (−0.0%) · then clamp 0–10 (generation/era 0 = the ones active at game start)
**Final: Audience 9.92 / Critic 8.77 → avg 9.34 (HALL OF FAME)**

**Opening & viewership trace** [marketing/Fame/reach affect viewers only]

Awareness inputs: base 0.35, marketing 0.55, studioBuzz 0, starFame 0.49, trend 0.4, ipFans 0 → awareness 0.83. Reach cap 440,000 → pool 366,864 → opening 110,059.

| Wk | Viewers | Retention | Driver | Gross | Studio | Distributor |
|---:|---:|---:|---|---:|---:|---:|
| 1 | 110,059 | 1 | opening (aware people watching) | $220,118 | $116,663 | $103,455 |
| 2 | 82,936 | 0.75 | critic 8.77: +6,617 newly aware (buzz) | $165,872 | $87,912 | $77,960 |
| 3 | 50,101 | 0.6 | critic 8.77: +8,807 newly aware (buzz) | $100,202 | $53,107 | $47,095 |
| 4 | 66,598 | 1.33 | audience 9.92: +98,599 newly aware (word of mouth) | $133,196 | $70,594 | $62,602 |
| 5 | 43,704 | 0.66 | audience 9.92: +18,740 newly aware (word of mouth) | $87,408 | $46,326 | $41,082 |
| 6 | 29,088 | 0.67 | audience 9.92: +13,388 newly aware (word of mouth) | $58,176 | $30,833 | $27,343 |
| 7 | 19,313 | 0.66 | audience 9.92: +8,786 newly aware (word of mouth) | $38,626 | $20,472 | $18,154 |
| 8 | 12,828 | 0.66 | audience 9.92: +5,847 newly aware (word of mouth) | $25,656 | $13,598 | $12,058 |
| 9 | 8,520 | 0.66 | audience 9.92: +3,882 newly aware (word of mouth) | $17,040 | $9,031 | $8,009 |
| 10 | 5,659 | 0.66 | audience 9.92: +2,579 newly aware (word of mouth) | $11,318 | $5,999 | $5,319 |
| 11 | 3,759 | 0.66 | audience 9.92: +1,713 newly aware (word of mouth) | $7,518 | $3,985 | $3,533 |
| 12 | 2,497 | 0.66 | audience 9.92: +1,138 newly aware (word of mouth) | $4,994 | $2,647 | $2,347 |
| 13 | 1,658 | 0.66 | audience 9.92: +756 newly aware (word of mouth) | $3,316 | $1,757 | $1,559 |
| 14 | 1,101 | 0.66 | audience 9.92: +502 newly aware (word of mouth) | $2,202 | $1,167 | $1,035 |
| 15 | 0 | 0 | audience 9.92: +333 newly aware (word of mouth) | $0 | $0 | $0 |

**Progression trace**

- Prestige awards: Prestige +50: meters_all_70 (Silver Signal).; Prestige +75: audience_7_5 (Silver Signal).; Prestige +85: critic_8_5 (Silver Signal).; Prestige +200: hall_of_fame (Silver Signal).
- IP fans: {"before":0,"after":30402,"delta":30402}
- Star career: {"fameDelta":16.16,"relDelta":0.75,"grow":0,"level":8,"reasons":"worked together (+); project boosted their career (+)"}
- Distributor trust: Meridian Global earned 298% of its advance back on Silver Signal with strong reviews (step 0.75)
- Rule labels: LOCKED = causal chain, accounting, fallback/no-campaign, thresholds 4.0/9.0, IP fan inheritance. WORKING ASSUMPTION = all formulas' shapes and numbers.

### Silver Rising — Action + Zombies (new)

Released week 234 (year 4.5) · Distributor: Orbit Releasing · Star: Kai Grant (L8, Fame 72) · IP: Silver Rising
Format: **limited_series**, 6 episodes (one per week) · 222,331 distinct viewers, 1,077,496 viewer-episodes · self-contained: never renews
Joined the streaming catalog after its run (retention value only; no new payouts).

**Financial waterfall** [LOCKED rules; amounts provisional]

| Item | Amount |
|---|---:|
| Advance received (project reserve, not revenue) | $132,000 |
| Base cost (unavoidable) | −$90,000 |
| Star fee | −$7,678 |
| Marketing campaign | −$20,000 |
| Paid from studio cash (overrun) | $0 |
| **Unused advance kept at completion** | $14,322 |
| Gross from sales (10 weeks) | $614,173 |
| Distributor royalty (34% of weekly gross) | −$208,819 |
| **Studio take** | $405,354 |
| Net for this title (surplus + take − cash overrun; wages are studio-wide, excluded) | $419,676 |

**Quality trace** [scores are computed, never rolled]

Meters (0–100): Plot 89.06 · Writing 89.59 · Filming 88.5 · Editing 82.29
Inputs: staff points {"plot":449.63,"writing":475.4,"filming":426.38,"editing":246.73}, Star filming points 80.57 (Star family fit 96), studio Action level 3 (+9%), era bar x1.18
Base scores: Audience 8.66 / Critic 8.81 · no weak meter
Combo grades: Audience A (x1.15) / Critic C (x1) · repetition fatigue x0.95 · critic saturation x0.9
Before expectations (after combo, weakness, fatigue, saturation; pre-clamp): Audience 9.46 / Critic 7.54 · critic generation 0 (−0.0%, scale) · audience era 0 (−0.0%) · then clamp 0–10 (generation/era 0 = the ones active at game start)
**Final: Audience 9.46 / Critic 7.54 → avg 8.5**

**Opening & viewership trace** [marketing/Fame/reach affect viewers only]

Awareness inputs: base 0.35, marketing 0.55, studioBuzz 0, starFame 0.07, trend 0.1, ipFans 0 → awareness 0.66. Reach cap 300,000 → pool 197,303 → opening 59,191.

| Wk | Viewers | Retention | Driver | Gross | Studio | Distributor |
|---:|---:|---:|---|---:|---:|---:|
| 1 | 98,652 | 1 | episode 1 premiere | $56,232 | $37,113 | $19,119 |
| 2 | 123,160 | 1.25 | episode 2: 100% kept (critic 7.54), +24,508 new | $70,201 | $46,333 | $23,868 |
| 3 | 139,104 | 1.13 | episode 3: 100% kept (critic 7.54), +15,944 new | $79,289 | $52,331 | $26,958 |
| 4 | 162,946 | 1.17 | episode 4: 100% kept (audience 9.46), +23,842 new | $92,879 | $61,300 | $31,579 |
| 5 | 192,569 | 1.18 | episode 5: 100% kept (audience 9.46), +29,623 new | $109,764 | $72,444 | $37,320 |
| 6 | 222,331 | 1.15 | episode 6: 100% kept (audience 9.46), +29,762 new | $126,729 | $83,641 | $43,088 |
| 7 | 88,932 | 0.4 | catch-up viewing (tail week 1/3) | $50,691 | $33,456 | $17,235 |
| 8 | 35,573 | 0.4 | catch-up viewing (tail week 2/3) | $20,277 | $13,383 | $6,894 |
| 9 | 14,229 | 0.4 | catch-up viewing (tail week 3/3) | $8,111 | $5,353 | $2,758 |
| 10 | 0 | 0 | run ended | $0 | $0 | $0 |

**Progression trace**

- Prestige awards: Prestige +50: meters_all_70 (Silver Rising).; Prestige +75: audience_7_5 (Silver Rising).
- IP fans: {"before":0,"after":12451,"delta":12451}
- Star career: {"fameDelta":10.45,"relDelta":0.75,"grow":4,"level":6,"reasons":"worked together (+); project boosted their career (+)"}
- Distributor trust: Orbit Releasing earned 158% of its advance back on Silver Rising with strong reviews (step 0.75)
- Rule labels: LOCKED = causal chain, accounting, fallback/no-campaign, thresholds 4.0/9.0, IP fan inheritance. WORKING ASSUMPTION = all formulas' shapes and numbers.

### Iron Legacy: Season 3 — Action + Spies (season)

Released week 270 (year 5.2) · Distributor: Meridian Global · Star: Alex Sato (L10, Fame 100) · IP: Iron Legacy
Format: **tv season 3**, 15 episodes (one per week) · 433,027 distinct viewers, 5,540,613 viewer-episodes · renewal: average 7.64 ≥ 4.0 → renewable
TV: show-age fatigue 3.3% (base 3.6%, quality slows by 9%) · twist none · hiatus 57 weeks since the last season aired → anticipation ×1 · announcement anticipation used 0.02
Joined the streaming catalog after its run (retention value only; no new payouts).

**Financial waterfall** [LOCKED rules; amounts provisional]

| Item | Amount |
|---|---:|
| Advance received (project reserve, not revenue) | $571,000 |
| Base cost (unavoidable) | −$240,000 |
| Star fee | −$68,237 |
| Marketing campaign | −$20,000 |
| Paid from studio cash (overrun) | $0 |
| **Unused advance kept at completion** | $242,763 |
| Gross from sales (18 weeks) | $1,772,996 |
| Distributor royalty (46% of weekly gross) | −$815,578 |
| **Studio take** | $957,418 |
| Net for this title (surplus + take − cash overrun; wages are studio-wide, excluded) | $1,200,180 |

**Quality trace** [scores are computed, never rolled]

Meters (0–100): Plot 88.99 · Writing 89.65 · Filming 88.88 · Editing 83.77
Inputs: staff points {"plot":913.34,"writing":979.03,"filming":909.5,"editing":560.93}, Star filming points 167.86 (Star family fit 100), studio Action level 3 (+9%), era bar x1.21
Base scores: Audience 8.72 / Critic 8.84 · no weak meter
Combo grades: Audience B (x1.06) / Critic B (x1.06) · repetition fatigue x0.82 · critic saturation x1
Before expectations (after combo, weakness, fatigue, saturation; pre-clamp): Audience 7.58 / Critic 7.69 · critic generation 0 (−0.0%, scale) · audience era 0 (−0.0%) · then clamp 0–10 (generation/era 0 = the ones active at game start)
**Final: Audience 7.58 / Critic 7.69 → avg 7.64**

**Opening & viewership trace** [marketing/Fame/reach affect viewers only]

Awareness inputs: base 0.35, marketing 0.55, studioBuzz 0, starFame 0.59, trend 0.15, ipFans 0.14, announcement 0.02 → awareness 0.84. Reach cap 440,000 → pool 367,576 → opening 110,273.

| Wk | Viewers | Retention | Driver | Gross | Studio | Distributor |
|---:|---:|---:|---|---:|---:|---:|
| 1 | 183,788 | 1 | episode 1 premiere | $58,812 | $31,759 | $27,054 |
| 2 | 228,759 | 1.24 | episode 2: 100% kept (critic 7.69), +44,971 new | $73,203 | $39,530 | $33,673 |
| 3 | 257,037 | 1.12 | episode 3: 100% kept (critic 7.69), +28,278 new | $82,252 | $44,416 | $37,836 |
| 4 | 287,275 | 1.12 | episode 4: 100% kept (audience 7.58), +30,238 new | $91,928 | $49,641 | $42,287 |
| 5 | 320,366 | 1.12 | episode 5: 100% kept (audience 7.58), +33,091 new | $102,517 | $55,359 | $47,158 |
| 6 | 350,570 | 1.09 | episode 6: 100% kept (audience 7.58), +30,204 new | $112,182 | $60,579 | $51,604 |
| 7 | 372,560 | 1.06 | episode 7: 100% kept (audience 7.58), +21,990 new | $119,219 | $64,378 | $54,841 |
| 8 | 389,227 | 1.04 | episode 8: 100% kept (audience 7.58), +16,667 new | $124,553 | $67,258 | $57,294 |
| 9 | 401,763 | 1.03 | episode 9: 100% kept (audience 7.58), +12,536 new | $128,564 | $69,425 | $59,140 |
| 10 | 411,206 | 1.02 | episode 10: 100% kept (audience 7.58), +9,443 new | $131,586 | $71,056 | $60,530 |
| 11 | 418,316 | 1.02 | episode 11: 100% kept (audience 7.58), +7,110 new | $133,861 | $72,285 | $61,576 |
| 12 | 423,671 | 1.01 | episode 12: 100% kept (audience 7.58), +5,355 new | $135,575 | $73,210 | $62,364 |
| 13 | 427,703 | 1.01 | episode 13: 100% kept (audience 7.58), +4,032 new | $136,865 | $73,907 | $62,958 |
| 14 | 430,740 | 1.01 | episode 14: 100% kept (audience 7.58), +3,037 new | $137,837 | $74,432 | $63,405 |
| 15 | 433,027 | 1.01 | episode 15: 100% kept (audience 7.58), +2,287 new | $138,569 | $74,827 | $63,742 |
| 16 | 151,559 | 0.35 | catch-up viewing (tail week 1/2) | $48,499 | $26,189 | $22,309 |
| 17 | 53,046 | 0.35 | catch-up viewing (tail week 2/2) | $16,975 | $9,166 | $7,808 |
| 18 | 0 | 0 | run ended | $0 | $0 | $0 |

**Progression trace**

- Prestige awards: Prestige +50: meters_all_70 (Iron Legacy: Season 3).; Prestige +75: audience_7_5 (Iron Legacy: Season 3).
- IP fans: {"before":22071,"after":40362,"delta":18291}
- Star career: {"fameDelta":9.8,"relDelta":0.75,"grow":0,"level":9,"reasons":"worked together (+); project boosted their career (+)"}
- Distributor trust: Meridian Global earned 143% of its advance back on Iron Legacy: Season 3 with strong reviews (step 0.54)
- Rule labels: LOCKED = causal chain, accounting, fallback/no-campaign, thresholds 4.0/9.0, IP fan inheritance. WORKING ASSUMPTION = all formulas' shapes and numbers.

### Silver Protocol — Action + Superheroes (new)

Released week 286 (year 5.5) · Distributor: Meridian Global · Star: Kai Grant (L8, Fame 72) · IP: Silver Protocol
Joined the streaming catalog after its run (retention value only; no new payouts).

**Financial waterfall** [LOCKED rules; amounts provisional]

| Item | Amount |
|---|---:|
| Advance received (project reserve, not revenue) | $147,000 |
| Base cost (unavoidable) | −$60,000 |
| Star fee | −$13,875 |
| Marketing campaign | −$20,000 |
| Paid from studio cash (overrun) | $0 |
| **Unused advance kept at completion** | $53,125 |
| Gross from sales (15 weeks) | $873,234 |
| Distributor royalty (46% of weekly gross) | −$401,688 |
| **Studio take** | $471,546 |
| Net for this title (surplus + take − cash overrun; wages are studio-wide, excluded) | $524,671 |

**Quality trace** [scores are computed, never rolled]

Meters (0–100): Plot 89.75 · Writing 90.36 · Filming 88.95 · Editing 84.14
Inputs: staff points {"plot":444.43,"writing":475.58,"filming":415.37,"editing":258.92}, Star filming points 71.94 (Star family fit 100), studio Action level 3 (+9%), era bar x1.22
Base scores: Audience 8.76 / Critic 8.9 · no weak meter
Combo grades: Audience A (x1.15) / Critic C (x1) · repetition fatigue x0.95 · critic saturation x1
Before expectations (after combo, weakness, fatigue, saturation; pre-clamp): Audience 9.57 / Critic 8.46 · critic generation 0 (−0.0%, scale) · audience era 0 (−0.0%) · then clamp 0–10 (generation/era 0 = the ones active at game start)
**Final: Audience 9.57 / Critic 8.46 → avg 9.02 (HALL OF FAME)**

**Opening & viewership trace** [marketing/Fame/reach affect viewers only]

Awareness inputs: base 0.35, marketing 0.55, studioBuzz 0, starFame 0.13, trend 0, ipFans 0 → awareness 0.64. Reach cap 440,000 → pool 283,653 → opening 85,096.

| Wk | Viewers | Retention | Driver | Gross | Studio | Distributor |
|---:|---:|---:|---|---:|---:|---:|
| 1 | 85,096 | 1 | opening (aware people watching) | $170,192 | $91,904 | $78,288 |
| 2 | 66,056 | 0.78 | critic 8.46: +12,983 newly aware (buzz) | $132,112 | $71,340 | $60,772 |
| 3 | 42,559 | 0.64 | critic 8.46: +13,884 newly aware (buzz) | $85,118 | $45,964 | $39,154 |
| 4 | 54,094 | 1.27 | audience 9.57: +77,798 newly aware (word of mouth) | $108,188 | $58,422 | $49,766 |
| 5 | 66,502 | 1.23 | audience 9.57: +98,884 newly aware (word of mouth) | $133,004 | $71,822 | $61,182 |
| 6 | 41,285 | 0.62 | audience 9.57: +11,752 newly aware (word of mouth) | $82,570 | $44,588 | $37,982 |
| 7 | 27,980 | 0.68 | audience 9.57: +13,673 newly aware (word of mouth) | $55,960 | $30,218 | $25,742 |
| 8 | 18,676 | 0.67 | audience 9.57: +8,488 newly aware (word of mouth) | $37,352 | $20,170 | $17,182 |
| 9 | 12,498 | 0.67 | audience 9.57: +5,753 newly aware (word of mouth) | $24,996 | $13,498 | $11,498 |
| 10 | 8,360 | 0.67 | audience 9.57: +3,840 newly aware (word of mouth) | $16,720 | $9,029 | $7,691 |
| 11 | 5,593 | 0.67 | audience 9.57: +2,570 newly aware (word of mouth) | $11,186 | $6,040 | $5,146 |
| 12 | 3,741 | 0.67 | audience 9.57: +1,719 newly aware (word of mouth) | $7,482 | $4,040 | $3,442 |
| 13 | 2,503 | 0.67 | audience 9.57: +1,150 newly aware (word of mouth) | $5,006 | $2,703 | $2,303 |
| 14 | 1,674 | 0.67 | audience 9.57: +769 newly aware (word of mouth) | $3,348 | $1,808 | $1,540 |
| 15 | 0 | 0 | audience 9.57: +515 newly aware (word of mouth) | $0 | $0 | $0 |

**Progression trace**

- Prestige awards: Prestige +50: meters_all_70 (Silver Protocol).; Prestige +75: audience_7_5 (Silver Protocol).; Prestige +200: hall_of_fame (Silver Protocol).
- IP fans: {"before":0,"after":28083,"delta":28083}
- Star career: {"fameDelta":14.96,"relDelta":0.75,"grow":0,"level":7,"reasons":"worked together (+); project boosted their career (+)"}
- Distributor trust: Meridian Global earned 273% of its advance back on Silver Protocol with strong reviews (step 0.75)
- Rule labels: LOCKED = causal chain, accounting, fallback/no-campaign, thresholds 4.0/9.0, IP fan inheritance. WORKING ASSUMPTION = all formulas' shapes and numbers.

### Lost Pulse — Horror + Dinosaurs (new)

Released week 304 (year 5.8) · Distributor: Meridian Global · Star: Ivy Fox (L4, Fame 63) · IP: Lost Pulse
Format: **limited_series**, 6 episodes (one per week) · 320,509 distinct viewers, 1,639,167 viewer-episodes · self-contained: never renews
Joined the streaming catalog after its run (retention value only; no new payouts).

**Financial waterfall** [LOCKED rules; amounts provisional]

| Item | Amount |
|---|---:|
| Advance received (project reserve, not revenue) | $213,000 |
| Base cost (unavoidable) | −$90,000 |
| Star fee | −$19,277 |
| Marketing campaign | −$20,000 |
| Paid from studio cash (overrun) | $0 |
| **Unused advance kept at completion** | $83,723 |
| Gross from sales (10 weeks) | $934,325 |
| Distributor royalty (46% of weekly gross) | −$429,790 |
| **Studio take** | $504,536 |
| Net for this title (surplus + take − cash overrun; wages are studio-wide, excluded) | $588,259 |

**Quality trace** [scores are computed, never rolled]

Meters (0–100): Plot 89.55 · Writing 90.2 · Filming 88.8 · Editing 83.13
Inputs: staff points {"plot":494.6,"writing":531.52,"filming":466.72,"editing":273.59}, Star filming points 79.31 (Star family fit 100), studio Horror level 1 (+3%), era bar x1.23
Base scores: Audience 8.71 / Critic 8.87 · no weak meter
Combo grades: Audience C (x1) / Critic B (x1.06) · repetition fatigue x1 · critic saturation x1
Before expectations (after combo, weakness, fatigue, saturation; pre-clamp): Audience 8.71 / Critic 9.4 · critic generation 0 (−0.0%, scale) · audience era 0 (−0.0%) · then clamp 0–10 (generation/era 0 = the ones active at game start)
**Final: Audience 8.71 / Critic 9.4 → avg 9.06 (HALL OF FAME)**

**Opening & viewership trace** [marketing/Fame/reach affect viewers only]

Awareness inputs: base 0.35, marketing 0.55, studioBuzz 0, starFame 0.17, trend 0.4, ipFans 0 → awareness 0.77. Reach cap 400,000 → pool 308,397 → opening 92,519.

| Wk | Viewers | Retention | Driver | Gross | Studio | Distributor |
|---:|---:|---:|---|---:|---:|---:|
| 1 | 154,199 | 1 | episode 1 premiere | $87,893 | $47,462 | $40,431 |
| 2 | 195,650 | 1.27 | episode 2: 100% kept (critic 9.4), +41,451 new | $111,521 | $60,221 | $51,299 |
| 3 | 221,907 | 1.13 | episode 3: 100% kept (critic 9.4), +26,257 new | $126,487 | $68,303 | $58,184 |
| 4 | 254,060 | 1.14 | episode 4: 100% kept (audience 8.71), +32,153 new | $144,814 | $78,200 | $66,615 |
| 5 | 292,844 | 1.15 | episode 5: 100% kept (audience 8.71), +38,784 new | $166,921 | $90,137 | $76,784 |
| 6 | 320,509 | 1.09 | episode 6: 100% kept (audience 8.71), +27,665 new | $182,690 | $98,653 | $84,037 |
| 7 | 128,204 | 0.4 | catch-up viewing (tail week 1/3) | $73,076 | $39,461 | $33,615 |
| 8 | 51,281 | 0.4 | catch-up viewing (tail week 2/3) | $29,230 | $15,784 | $13,446 |
| 9 | 20,513 | 0.4 | catch-up viewing (tail week 3/3) | $11,692 | $6,314 | $5,379 |
| 10 | 0 | 0 | run ended | $0 | $0 | $0 |

**Progression trace**

- Prestige awards: Prestige +50: meters_all_70 (Lost Pulse).; Prestige +75: audience_7_5 (Lost Pulse).; Prestige +85: critic_8_5 (Lost Pulse).; Prestige +200: hall_of_fame (Lost Pulse).
- IP fans: {"before":0,"after":20820,"delta":20820}
- Star career: {"fameDelta":13.83,"relDelta":0.75,"grow":0,"level":3,"reasons":"worked together (+); project boosted their career (+)"}
- Distributor trust: Meridian Global earned 202% of its advance back on Lost Pulse with strong reviews (step 0.75)
- Rule labels: LOCKED = causal chain, accounting, fallback/no-campaign, thresholds 4.0/9.0, IP fan inheritance. WORKING ASSUMPTION = all formulas' shapes and numbers.

### Iron Legacy: Season 4 — Action + Spies (season)

Released week 340 (year 6.5) · Distributor: Meridian Global · Star: Alex Sato (L10, Fame 100) · IP: Iron Legacy
Format: **tv season 4**, 15 episodes (one per week) · 432,618 distinct viewers, 5,434,281 viewer-episodes · renewal: average 7.08 ≥ 4.0 → renewable
TV: show-age fatigue 6.4% (base 7.0%, quality slows by 9%) · twist none · hiatus 52 weeks since the last season aired → anticipation ×1 · announcement anticipation used 0.02
Joined the streaming catalog after its run (retention value only; no new payouts).

**Financial waterfall** [LOCKED rules; amounts provisional]

| Item | Amount |
|---|---:|
| Advance received (project reserve, not revenue) | $718,000 |
| Base cost (unavoidable) | −$240,000 |
| Star fee | −$67,489 |
| Marketing campaign | −$20,000 |
| Paid from studio cash (overrun) | $0 |
| **Unused advance kept at completion** | $390,511 |
| Gross from sales (18 weeks) | $1,738,970 |
| Distributor royalty (43% of weekly gross) | −$747,757 |
| **Studio take** | $991,213 |
| Net for this title (surplus + take − cash overrun; wages are studio-wide, excluded) | $1,381,723 |

**Quality trace** [scores are computed, never rolled]

Meters (0–100): Plot 90.08 · Writing 90.79 · Filming 89.75 · Editing 85.72
Inputs: staff points {"plot":1072.73,"writing":1164.65,"filming":1060.7,"editing":681.37}, Star filming points 172.48 (Star family fit 100), studio Action level 4 (+12%), era bar x1.26
Base scores: Audience 8.85 / Critic 8.96 · no weak meter
Combo grades: Audience B (x1.06) / Critic B (x1.06) · repetition fatigue x0.79 · critic saturation x0.9
Before expectations (after combo, weakness, fatigue, saturation; pre-clamp): Audience 7.41 / Critic 6.75 · critic generation 0 (−0.0%, scale) · audience era 0 (−0.0%) · then clamp 0–10 (generation/era 0 = the ones active at game start)
**Final: Audience 7.41 / Critic 6.75 → avg 7.08**

**Opening & viewership trace** [marketing/Fame/reach affect viewers only]

Awareness inputs: base 0.35, marketing 0.55, studioBuzz 0, starFame 0.6, trend 0.1, ipFans 0.23, announcement 0.02 → awareness 0.84. Reach cap 440,000 → pool 370,694 → opening 111,208.

| Wk | Viewers | Retention | Driver | Gross | Studio | Distributor |
|---:|---:|---:|---|---:|---:|---:|
| 1 | 185,347 | 1 | episode 1 premiere | $59,311 | $33,807 | $25,504 |
| 2 | 225,795 | 1.22 | episode 2: 99% kept (critic 6.75), +43,228 new | $72,254 | $41,185 | $31,069 |
| 3 | 249,708 | 1.11 | episode 3: 99% kept (critic 6.75), +27,300 new | $79,907 | $45,547 | $34,360 |
| 4 | 278,918 | 1.12 | episode 4: 100% kept (audience 7.41), +29,210 new | $89,254 | $50,875 | $38,379 |
| 5 | 309,972 | 1.11 | episode 5: 100% kept (audience 7.41), +31,054 new | $99,191 | $56,539 | $42,652 |
| 6 | 341,315 | 1.1 | episode 6: 100% kept (audience 7.41), +31,343 new | $109,221 | $62,256 | $46,965 |
| 7 | 363,847 | 1.07 | episode 7: 100% kept (audience 7.41), +22,532 new | $116,431 | $66,366 | $50,065 |
| 8 | 381,019 | 1.05 | episode 8: 100% kept (audience 7.41), +17,172 new | $121,926 | $69,498 | $52,428 |
| 9 | 393,959 | 1.03 | episode 9: 100% kept (audience 7.41), +12,940 new | $126,067 | $71,858 | $54,209 |
| 10 | 403,731 | 1.02 | episode 10: 100% kept (audience 7.41), +9,772 new | $129,194 | $73,641 | $55,553 |
| 11 | 411,108 | 1.02 | episode 11: 100% kept (audience 7.41), +7,377 new | $131,555 | $74,986 | $56,568 |
| 12 | 416,677 | 1.01 | episode 12: 100% kept (audience 7.41), +5,569 new | $133,337 | $76,002 | $57,335 |
| 13 | 420,881 | 1.01 | episode 13: 100% kept (audience 7.41), +4,204 new | $134,682 | $76,769 | $57,913 |
| 14 | 424,055 | 1.01 | episode 14: 100% kept (audience 7.41), +3,174 new | $135,698 | $77,348 | $58,350 |
| 15 | 426,451 | 1.01 | episode 15: 100% kept (audience 7.41), +2,396 new | $136,464 | $77,785 | $58,680 |
| 16 | 149,258 | 0.35 | catch-up viewing (tail week 1/2) | $47,763 | $27,225 | $20,538 |
| 17 | 52,240 | 0.35 | catch-up viewing (tail week 2/2) | $16,717 | $9,529 | $7,188 |
| 18 | 0 | 0 | run ended | $0 | $0 | $0 |

**Progression trace**

- Prestige awards: Prestige +50: meters_all_70 (Iron Legacy: Season 4).
- IP fans: {"before":35275,"after":49673,"delta":14398}
- Star career: {"fameDelta":7.72,"relDelta":0.25,"grow":0,"level":9,"reasons":"worked together (+)"}
- Distributor trust: Meridian Global earned 104% of its advance back on Iron Legacy: Season 4 with strong reviews (step 0.24)
- Rule labels: LOCKED = causal chain, accounting, fallback/no-campaign, thresholds 4.0/9.0, IP fan inheritance. WORKING ASSUMPTION = all formulas' shapes and numbers.

### Dead Echo — Action + Superheroes (new)

Released week 356 (year 6.8) · Distributor: Meridian Global · Star: Kai Grant (L8, Fame 72) · IP: Dead Echo
Joined the streaming catalog after its run (retention value only; no new payouts).

**Financial waterfall** [LOCKED rules; amounts provisional]

| Item | Amount |
|---|---:|
| Advance received (project reserve, not revenue) | $166,000 |
| Base cost (unavoidable) | −$60,000 |
| Star fee | −$23,541 |
| Marketing campaign | −$20,000 |
| Paid from studio cash (overrun) | $0 |
| **Unused advance kept at completion** | $62,459 |
| Gross from sales (15 weeks) | $874,038 |
| Distributor royalty (43% of weekly gross) | −$375,836 |
| **Studio take** | $498,202 |
| Net for this title (surplus + take − cash overrun; wages are studio-wide, excluded) | $560,661 |

**Quality trace** [scores are computed, never rolled]

Meters (0–100): Plot 91.21 · Writing 91.74 · Filming 90.31 · Editing 86.12
Inputs: staff points {"plot":549.93,"writing":588.45,"filming":515.01,"editing":316.23}, Star filming points 73.92 (Star family fit 100), studio Action level 4 (+12%), era bar x1.27
Base scores: Audience 8.92 / Critic 9.05 · no weak meter
Combo grades: Audience A (x1.15) / Critic C (x1) · repetition fatigue x0.9 · critic saturation x1
Before expectations (after combo, weakness, fatigue, saturation; pre-clamp): Audience 9.23 / Critic 8.14 · critic generation 0 (−0.0%, scale) · audience era 0 (−0.0%) · then clamp 0–10 (generation/era 0 = the ones active at game start)
**Final: Audience 9.23 / Critic 8.14 → avg 8.69**

**Opening & viewership trace** [marketing/Fame/reach affect viewers only]

Awareness inputs: base 0.35, marketing 0.55, studioBuzz 0, starFame 0.22, trend 0.4, ipFans 0 → awareness 0.78. Reach cap 440,000 → pool 344,195 → opening 103,259.

| Wk | Viewers | Retention | Driver | Gross | Studio | Distributor |
|---:|---:|---:|---|---:|---:|---:|
| 1 | 103,259 | 1 | opening (aware people watching) | $206,518 | $117,715 | $88,803 |
| 2 | 76,099 | 0.74 | critic 8.14: +7,220 newly aware (buzz) | $152,198 | $86,753 | $65,445 |
| 3 | 46,797 | 0.61 | critic 8.14: +8,855 newly aware (buzz) | $93,594 | $53,349 | $40,245 |
| 4 | 56,932 | 1.22 | audience 9.23: +79,181 newly aware (word of mouth) | $113,864 | $64,902 | $48,962 |
| 5 | 52,681 | 0.93 | audience 9.23: +57,203 newly aware (word of mouth) | $105,362 | $60,056 | $45,306 |
| 6 | 33,859 | 0.64 | audience 9.23: +11,965 newly aware (word of mouth) | $67,718 | $38,599 | $29,119 |
| 7 | 22,991 | 0.68 | audience 9.23: +11,072 newly aware (word of mouth) | $45,982 | $26,210 | $19,772 |
| 8 | 15,465 | 0.67 | audience 9.23: +7,116 newly aware (word of mouth) | $30,930 | $17,630 | $13,300 |
| 9 | 10,419 | 0.67 | audience 9.23: +4,832 newly aware (word of mouth) | $20,838 | $11,878 | $8,960 |
| 10 | 7,018 | 0.67 | audience 9.23: +3,250 newly aware (word of mouth) | $14,036 | $8,001 | $6,035 |
| 11 | 4,727 | 0.67 | audience 9.23: +2,190 newly aware (word of mouth) | $9,454 | $5,389 | $4,065 |
| 12 | 3,184 | 0.67 | audience 9.23: +1,475 newly aware (word of mouth) | $6,368 | $3,630 | $2,738 |
| 13 | 2,144 | 0.67 | audience 9.23: +993 newly aware (word of mouth) | $4,288 | $2,444 | $1,844 |
| 14 | 1,444 | 0.67 | audience 9.23: +669 newly aware (word of mouth) | $2,888 | $1,646 | $1,242 |
| 15 | 0 | 0 | audience 9.23: +451 newly aware (word of mouth) | $0 | $0 | $0 |

**Progression trace**

- Prestige awards: Prestige +50: meters_all_70 (Dead Echo).; Prestige +75: audience_7_5 (Dead Echo).
- IP fans: {"before":0,"after":25802,"delta":25802}
- Star career: {"fameDelta":13.74,"relDelta":0.75,"grow":0,"level":7,"reasons":"worked together (+); project boosted their career (+)"}
- Distributor trust: Meridian Global earned 226% of its advance back on Dead Echo with strong reviews (step 0.75)
- Rule labels: LOCKED = causal chain, accounting, fallback/no-campaign, thresholds 4.0/9.0, IP fan inheritance. WORKING ASSUMPTION = all formulas' shapes and numbers.

### Broken Echo — Horror + Superheroes (new)

Released week 374 (year 7.2) · Distributor: Streaming Original (self-funded, no box office) · Star: Ivy Fox (L4, Fame 63) · IP: Broken Echo
Format: **limited_series**, 6 episodes (one per week) · 172,300 distinct viewers, 891,491 viewer-episodes · self-contained: never renews
Joined the streaming catalog after its run (retention value only; no new payouts).

**Financial waterfall** [LOCKED rules; amounts provisional]

| Item | Amount |
|---|---:|
| Advance received (project reserve, not revenue) | $0 |
| Base cost (unavoidable) | −$90,000 |
| Star fee | −$28,938 |
| Marketing campaign | −$20,000 |
| Paid from studio cash (overrun) | $138,938 |
| **Unused advance kept at completion** | $0 |
| Gross from sales (10 weeks) | $0 |
| Distributor royalty (0% of weekly gross) | −$0 |
| **Studio take** | $0 |
| Net for this title (surplus + take − cash overrun; wages are studio-wide, excluded) | $-138,938 |

**Quality trace** [scores are computed, never rolled]

Meters (0–100): Plot 90.9 · Writing 91.45 · Filming 89.96 · Editing 85.03
Inputs: staff points {"plot":601.69,"writing":644.99,"filming":564.27,"editing":329.05}, Star filming points 79.31 (Star family fit 100), studio Horror level 1 (+3%), era bar x1.29
Base scores: Audience 8.86 / Critic 9.01 · no weak meter
Combo grades: Audience D (x0.9) / Critic D (x0.9) · repetition fatigue x1 · critic saturation x1
Before expectations (after combo, weakness, fatigue, saturation; pre-clamp): Audience 7.97 / Critic 8.11 · critic generation 0 (−0.0%, scale) · audience era 0 (−0.0%) · then clamp 0–10 (generation/era 0 = the ones active at game start)
**Final: Audience 7.97 / Critic 8.11 → avg 8.04**

**Opening & viewership trace** [marketing/Fame/reach affect viewers only]

Awareness inputs: base 0.35, marketing 0.55, studioBuzz 0, starFame 0.26, trend 0.4, ipFans 0 → awareness 0.79. Reach cap 220,000 → pool 173,630 → opening 52,089.

| Wk | Viewers | Retention | Driver | Gross | Studio | Distributor |
|---:|---:|---:|---|---:|---:|---:|
| 1 | 86,815 | 1 | episode 1 premiere | $0 | $0 | $0 |
| 2 | 108,632 | 1.25 | episode 2: 100% kept (critic 8.11), +21,817 new | $0 | $0 | $0 |
| 3 | 122,441 | 1.13 | episode 3: 100% kept (critic 8.11), +13,809 new | $0 | $0 | $0 |
| 4 | 138,046 | 1.13 | episode 4: 100% kept (audience 7.97), +15,605 new | $0 | $0 | $0 |
| 5 | 155,742 | 1.13 | episode 5: 100% kept (audience 7.97), +17,696 new | $0 | $0 | $0 |
| 6 | 172,300 | 1.11 | episode 6: 100% kept (audience 7.97), +16,558 new | $0 | $0 | $0 |
| 7 | 68,920 | 0.4 | catch-up viewing (tail week 1/3) | $0 | $0 | $0 |
| 8 | 27,568 | 0.4 | catch-up viewing (tail week 2/3) | $0 | $0 | $0 |
| 9 | 11,027 | 0.4 | catch-up viewing (tail week 3/3) | $0 | $0 | $0 |
| 10 | 0 | 0 | run ended | $0 | $0 | $0 |

**Progression trace**

- Prestige awards: Prestige +50: meters_all_70 (Broken Echo).; Prestige +75: audience_7_5 (Broken Echo).
- IP fans: {"before":0,"after":8381,"delta":8381}
- Star career: {"fameDelta":8.13,"relDelta":0.75,"grow":0,"level":4,"reasons":"worked together (+); project boosted their career (+)"}
- Rule labels: LOCKED = causal chain, accounting, fallback/no-campaign, thresholds 4.0/9.0, IP fan inheritance. WORKING ASSUMPTION = all formulas' shapes and numbers.

### Iron Legacy: Season 5 — Action + Spies (season)

Released week 410 (year 7.9) · Distributor: XYZ Network · Star: Alex Sato (L10, Fame 100) · IP: Iron Legacy
Format: **tv season 5**, 15 episodes (one per week) · 369,394 distinct viewers, 4,730,660 viewer-episodes · renewal: average 7.09 ≥ 4.0 → renewable
TV: show-age fatigue 10.9% (base 11.0%, quality slows by 1%) · twist none · hiatus 52 weeks since the last season aired → anticipation ×1 · announcement anticipation used 0.02
Joined the streaming catalog after its run (retention value only; no new payouts).

**Financial waterfall** [LOCKED rules; amounts provisional]

| Item | Amount |
|---|---:|
| Advance received (project reserve, not revenue) | $516,000 |
| Base cost (unavoidable) | −$240,000 |
| Star fee | −$67,000 |
| Marketing campaign | −$20,000 |
| Paid from studio cash (overrun) | $0 |
| **Unused advance kept at completion** | $189,000 |
| Gross from sales (18 weeks) | $1,513,811 |
| Distributor royalty (41% of weekly gross) | −$620,663 |
| **Studio take** | $893,149 |
| Net for this title (surplus + take − cash overrun; wages are studio-wide, excluded) | $1,082,149 |

**Quality trace** [scores are computed, never rolled]

Meters (0–100): Plot 91.39 · Writing 92 · Filming 90.85 · Editing 86.97
Inputs: staff points {"plot":1307.43,"writing":1415.32,"filming":1284.31,"editing":790.41}, Star filming points 172.48 (Star family fit 100), studio Action level 4 (+12%), era bar x1.32
Base scores: Audience 8.97 / Critic 9.09 · no weak meter
Combo grades: Audience B (x1.06) / Critic B (x1.06) · repetition fatigue x0.74 · critic saturation x1
Before expectations (after combo, weakness, fatigue, saturation; pre-clamp): Audience 7.04 / Critic 7.13 · critic generation 0 (−0.0%, scale) · audience era 0 (−0.0%) · then clamp 0–10 (generation/era 0 = the ones active at game start)
**Final: Audience 7.04 / Critic 7.13 → avg 7.09**

**Opening & viewership trace** [marketing/Fame/reach affect viewers only]

Awareness inputs: base 0.35, marketing 0.55, studioBuzz 0, starFame 0.6, trend 0.15, ipFans 0.28, announcement 0.02 → awareness 0.86. Reach cap 376,000 → pool 322,552 → opening 96,766.

| Wk | Viewers | Retention | Driver | Gross | Studio | Distributor |
|---:|---:|---:|---|---:|---:|---:|
| 1 | 161,276 | 1 | episode 1 premiere | $51,608 | $30,449 | $21,159 |
| 2 | 199,575 | 1.24 | episode 2: 100% kept (critic 7.13), +38,299 new | $63,864 | $37,680 | $26,184 |
| 3 | 223,663 | 1.12 | episode 3: 100% kept (critic 7.13), +24,088 new | $71,572 | $42,228 | $29,345 |
| 4 | 247,213 | 1.11 | episode 4: 100% kept (audience 7.04), +23,550 new | $79,108 | $46,674 | $32,434 |
| 5 | 271,441 | 1.1 | episode 5: 100% kept (audience 7.04), +24,228 new | $86,861 | $51,248 | $35,613 |
| 6 | 297,040 | 1.09 | episode 6: 100% kept (audience 7.04), +25,599 new | $95,053 | $56,081 | $38,972 |
| 7 | 316,011 | 1.06 | episode 7: 100% kept (audience 7.04), +18,971 new | $101,124 | $59,663 | $41,461 |
| 8 | 330,476 | 1.05 | episode 8: 100% kept (audience 7.04), +14,465 new | $105,752 | $62,394 | $43,358 |
| 9 | 341,446 | 1.03 | episode 9: 100% kept (audience 7.04), +10,970 new | $109,263 | $64,465 | $44,798 |
| 10 | 349,773 | 1.02 | episode 10: 100% kept (audience 7.04), +8,327 new | $111,927 | $66,037 | $45,890 |
| 11 | 356,094 | 1.02 | episode 11: 100% kept (audience 7.04), +6,321 new | $113,950 | $67,231 | $46,720 |
| 12 | 360,891 | 1.01 | episode 12: 100% kept (audience 7.04), +4,797 new | $115,485 | $68,136 | $47,349 |
| 13 | 364,532 | 1.01 | episode 13: 100% kept (audience 7.04), +3,641 new | $116,650 | $68,824 | $47,827 |
| 14 | 367,296 | 1.01 | episode 14: 100% kept (audience 7.04), +2,764 new | $117,535 | $69,345 | $48,189 |
| 15 | 369,394 | 1.01 | episode 15: 100% kept (audience 7.04), +2,098 new | $118,206 | $69,742 | $48,464 |
| 16 | 129,288 | 0.35 | catch-up viewing (tail week 1/2) | $41,372 | $24,410 | $16,963 |
| 17 | 45,251 | 0.35 | catch-up viewing (tail week 2/2) | $14,480 | $8,543 | $5,937 |
| 18 | 0 | 0 | run ended | $0 | $0 | $0 |

**Progression trace**

- Prestige awards: Prestige +50: meters_all_70 (Iron Legacy: Season 5).; Prestige +150: ip_gross_5m (Iron Legacy: Season 5).
- IP fans: {"before":43411,"after":55764,"delta":12353}
- Star career: {"fameDelta":7.43,"relDelta":0.25,"grow":0,"level":10,"reasons":"worked together (+)"}
- Distributor trust: XYZ Network earned 120% of its advance back on Iron Legacy: Season 5 with strong reviews (step 0.33)
- Rule labels: LOCKED = causal chain, accounting, fallback/no-campaign, thresholds 4.0/9.0, IP fan inheritance. WORKING ASSUMPTION = all formulas' shapes and numbers.

### Lost Run — Action + Robots (new)

Released week 426 (year 8.2) · Distributor: Streaming Original (self-funded, no box office) · Star: Kai Grant (L8, Fame 72) · IP: Lost Run
Joined the streaming catalog after its run (retention value only; no new payouts).

**Financial waterfall** [LOCKED rules; amounts provisional]

| Item | Amount |
|---|---:|
| Advance received (project reserve, not revenue) | $0 |
| Base cost (unavoidable) | −$60,000 |
| Star fee | −$32,479 |
| Marketing campaign | −$20,000 |
| Paid from studio cash (overrun) | $112,479 |
| **Unused advance kept at completion** | $0 |
| Gross from sales (15 weeks) | $0 |
| Distributor royalty (0% of weekly gross) | −$0 |
| **Studio take** | $0 |
| Net for this title (surplus + take − cash overrun; wages are studio-wide, excluded) | $-112,479 |

**Quality trace** [scores are computed, never rolled]

Meters (0–100): Plot 91.8 · Writing 92.36 · Filming 90.75 · Editing 87.05
Inputs: staff points {"plot":618.72,"writing":667.8,"filming":571.95,"editing":356.96}, Star filming points 73.92 (Star family fit 100), studio Action level 4 (+12%), era bar x1.33
Base scores: Audience 8.99 / Critic 9.11 · no weak meter
Combo grades: Audience D (x0.9) / Critic F (x0.78) · repetition fatigue x1 · critic saturation x1
Before expectations (after combo, weakness, fatigue, saturation; pre-clamp): Audience 8.09 / Critic 7.11 · critic generation 0 (−0.0%, scale) · audience era 0 (−0.0%) · then clamp 0–10 (generation/era 0 = the ones active at game start)
**Final: Audience 8.09 / Critic 7.11 → avg 7.6**

**Opening & viewership trace** [marketing/Fame/reach affect viewers only]

Awareness inputs: base 0.35, marketing 0.55, studioBuzz 0, starFame 0.31, trend 0.4, ipFans 0 → awareness 0.8. Reach cap 220,000 → pool 175,888 → opening 52,766.

| Wk | Viewers | Retention | Driver | Gross | Studio | Distributor |
|---:|---:|---:|---|---:|---:|---:|
| 1 | 52,766 | 1 | opening (aware people watching) | $0 | $0 | $0 |
| 2 | 36,674 | 0.7 | critic 7.11: +2,234 newly aware (buzz) | $0 | $0 | $0 |
| 3 | 22,521 | 0.61 | critic 7.11: +2,869 newly aware (buzz) | $0 | $0 | $0 |
| 4 | 23,474 | 1.04 | audience 8.09: +27,836 newly aware (word of mouth) | $0 | $0 | $0 |
| 5 | 23,552 | 1 | audience 8.09: +29,014 newly aware (word of mouth) | $0 | $0 | $0 |
| 6 | 19,285 | 0.82 | audience 8.09: +16,566 newly aware (word of mouth) | $0 | $0 | $0 |
| 7 | 12,940 | 0.67 | audience 8.09: +5,334 newly aware (word of mouth) | $0 | $0 | $0 |
| 8 | 8,956 | 0.69 | audience 8.09: +4,367 newly aware (word of mouth) | $0 | $0 | $0 |
| 9 | 6,166 | 0.69 | audience 8.09: +2,930 newly aware (word of mouth) | $0 | $0 | $0 |
| 10 | 4,250 | 0.69 | audience 8.09: +2,028 newly aware (word of mouth) | $0 | $0 | $0 |
| 11 | 2,928 | 0.69 | audience 8.09: +1,397 newly aware (word of mouth) | $0 | $0 | $0 |
| 12 | 2,017 | 0.69 | audience 8.09: +962 newly aware (word of mouth) | $0 | $0 | $0 |
| 13 | 1,390 | 0.69 | audience 8.09: +663 newly aware (word of mouth) | $0 | $0 | $0 |
| 14 | 958 | 0.69 | audience 8.09: +457 newly aware (word of mouth) | $0 | $0 | $0 |
| 15 | 0 | 0 | audience 8.09: +315 newly aware (word of mouth) | $0 | $0 | $0 |

**Progression trace**

- Prestige awards: Prestige +50: meters_all_70 (Lost Run).; Prestige +75: audience_7_5 (Lost Run).
- IP fans: {"before":0,"after":9064,"delta":9064}
- Star career: {"fameDelta":7.7,"relDelta":0.75,"grow":0,"level":8,"reasons":"worked together (+); project boosted their career (+)"}
- Rule labels: LOCKED = causal chain, accounting, fallback/no-campaign, thresholds 4.0/9.0, IP fan inheritance. WORKING ASSUMPTION = all formulas' shapes and numbers.

### Red Horizon — Horror + Pirates (new)

Released week 444 (year 8.5) · Distributor: Meridian Global · Star: Ivy Fox (L4, Fame 63) · IP: Red Horizon
Format: **limited_series**, 6 episodes (one per week) · 317,900 distinct viewers, 1,576,697 viewer-episodes · self-contained: never renews
Joined the streaming catalog after its run (retention value only; no new payouts).

**Financial waterfall** [LOCKED rules; amounts provisional]

| Item | Amount |
|---|---:|
| Advance received (project reserve, not revenue) | $229,000 |
| Base cost (unavoidable) | −$90,000 |
| Star fee | −$33,917 |
| Marketing campaign | −$20,000 |
| Paid from studio cash (overrun) | $0 |
| **Unused advance kept at completion** | $85,083 |
| Gross from sales (10 weeks) | $898,717 |
| Distributor royalty (44% of weekly gross) | −$395,436 |
| **Studio take** | $503,282 |
| Net for this title (surplus + take − cash overrun; wages are studio-wide, excluded) | $588,365 |

**Quality trace** [scores are computed, never rolled]

Meters (0–100): Plot 91.47 · Writing 92.07 · Filming 90.6 · Editing 86.04
Inputs: staff points {"plot":673.64,"writing":729.2,"filming":640.1,"editing":372.12}, Star filming points 81.62 (Star family fit 100), studio Horror level 2 (+6%), era bar x1.34
Base scores: Audience 8.94 / Critic 9.07 · no weak meter
Combo grades: Audience A (x1.15) / Critic D (x0.9) · repetition fatigue x1 · critic saturation x0.9
Before expectations (after combo, weakness, fatigue, saturation; pre-clamp): Audience 10.28 / Critic 7.35 · critic generation 0 (−0.0%, scale) · audience era 0 (−0.0%) · then clamp 0–10 (generation/era 0 = the ones active at game start)
**Final: Audience 10 / Critic 7.35 → avg 8.68**

**Opening & viewership trace** [marketing/Fame/reach affect viewers only]

Awareness inputs: base 0.35, marketing 0.55, studioBuzz 0, starFame 0.31, trend 0.1, ipFans 0 → awareness 0.73. Reach cap 400,000 → pool 291,613 → opening 87,484.

| Wk | Viewers | Retention | Driver | Gross | Studio | Distributor |
|---:|---:|---:|---|---:|---:|---:|
| 1 | 145,807 | 1 | episode 1 premiere | $83,110 | $46,542 | $36,568 |
| 2 | 181,285 | 1.24 | episode 2: 100% kept (critic 7.35), +35,478 new | $103,332 | $57,866 | $45,466 |
| 3 | 204,019 | 1.13 | episode 3: 100% kept (critic 7.35), +22,734 new | $116,291 | $65,123 | $51,168 |
| 4 | 241,910 | 1.19 | episode 4: 100% kept (audience 10), +37,891 new | $137,889 | $77,218 | $60,671 |
| 5 | 287,406 | 1.19 | episode 5: 100% kept (audience 10), +45,496 new | $163,821 | $91,740 | $72,081 |
| 6 | 317,900 | 1.11 | episode 6: 100% kept (audience 10), +30,494 new | $181,203 | $101,474 | $79,729 |
| 7 | 127,160 | 0.4 | catch-up viewing (tail week 1/3) | $72,481 | $40,589 | $31,892 |
| 8 | 50,864 | 0.4 | catch-up viewing (tail week 2/3) | $28,992 | $16,236 | $12,757 |
| 9 | 20,346 | 0.4 | catch-up viewing (tail week 3/3) | $11,597 | $6,494 | $5,103 |
| 10 | 0 | 0 | run ended | $0 | $0 | $0 |

**Progression trace**

- Prestige awards: Prestige +50: meters_all_70 (Red Horizon).; Prestige +75: audience_7_5 (Red Horizon).
- IP fans: {"before":0,"after":18718,"delta":18718}
- Star career: {"fameDelta":12.5,"relDelta":0.75,"grow":0,"level":4,"reasons":"worked together (+); project boosted their career (+)"}
- Distributor trust: Meridian Global earned 173% of its advance back on Red Horizon with strong reviews (step 0.75)
- Rule labels: LOCKED = causal chain, accounting, fallback/no-campaign, thresholds 4.0/9.0, IP fan inheritance. WORKING ASSUMPTION = all formulas' shapes and numbers.

### Iron Legacy: Season 6 — Action + Spies (season)

Released week 491 (year 9.4) · Distributor: Streaming Original (self-funded, no box office) · Star: Alex Sato (L10, Fame 100) · IP: Iron Legacy
Format: **tv season 6**, 20 episodes (one per week) · 218,638 distinct viewers, 3,015,682 viewer-episodes · renewal: average 6.32 ≥ 4.0 → renewable
TV: show-age fatigue 15.6% (base 15.8%, quality slows by 1%) · twist none · hiatus 63 weeks since the last season aired → anticipation ×1 · announcement anticipation used 0.01
Joined the streaming catalog after its run (retention value only; no new payouts).

**Financial waterfall** [LOCKED rules; amounts provisional]

| Item | Amount |
|---|---:|
| Advance received (project reserve, not revenue) | $0 |
| Base cost (unavoidable) | −$315,000 |
| Star fee | −$66,401 |
| Marketing campaign | −$20,000 |
| Paid from studio cash (overrun) | $401,401 |
| **Unused advance kept at completion** | $0 |
| Gross from sales (23 weeks) | $0 |
| Distributor royalty (0% of weekly gross) | −$0 |
| **Studio take** | $0 |
| Net for this title (surplus + take − cash overrun; wages are studio-wide, excluded) | $-401,401 |

**Quality trace** [scores are computed, never rolled]

Meters (0–100): Plot 91.7 · Writing 92.37 · Filming 91.23 · Editing 88.34
Inputs: staff points {"plot":1821.61,"writing":1993.36,"filming":1821.16,"editing":1200.62}, Star filming points 221.76 (Star family fit 100), studio Action level 4 (+12%), era bar x1.38
Base scores: Audience 9.05 / Critic 9.14 · no weak meter
Combo grades: Audience B (x1.06) / Critic B (x1.06) · repetition fatigue x0.69 · critic saturation x0.9
Before expectations (after combo, weakness, fatigue, saturation; pre-clamp): Audience 6.62 / Critic 6.01 · critic generation 0 (−0.0%, scale) · audience era 0 (−0.0%) · then clamp 0–10 (generation/era 0 = the ones active at game start)
**Final: Audience 6.62 / Critic 6.01 → avg 6.32**

**Opening & viewership trace** [marketing/Fame/reach affect viewers only]

Awareness inputs: base 0.35, marketing 0.55, studioBuzz 0, starFame 0.6, trend 0.1, ipFans 0.31, announcement 0.01 → awareness 0.85. Reach cap 220,000 → pool 187,705 → opening 56,312.

| Wk | Viewers | Retention | Driver | Gross | Studio | Distributor |
|---:|---:|---:|---|---:|---:|---:|
| 1 | 93,853 | 1 | episode 1 premiere | $0 | $0 | $0 |
| 2 | 109,331 | 1.16 | episode 2: 94% kept (critic 6.01), +21,053 new | $0 | $0 | $0 |
| 3 | 116,179 | 1.06 | episode 3: 94% kept (critic 6.01), +13,342 new | $0 | $0 | $0 |
| 4 | 125,696 | 1.08 | episode 4: 98% kept (audience 6.62), +12,166 new | $0 | $0 | $0 |
| 5 | 134,228 | 1.07 | episode 5: 98% kept (audience 6.62), +11,398 new | $0 | $0 | $0 |
| 6 | 142,352 | 1.06 | episode 6: 98% kept (audience 6.62), +11,184 new | $0 | $0 | $0 |
| 7 | 150,406 | 1.06 | episode 7: 98% kept (audience 6.62), +11,300 new | $0 | $0 | $0 |
| 8 | 158,092 | 1.05 | episode 8: 98% kept (audience 6.62), +11,115 new | $0 | $0 | $0 |
| 9 | 162,619 | 1.03 | episode 9: 98% kept (audience 6.62), +8,131 new | $0 | $0 | $0 |
| 10 | 165,171 | 1.02 | episode 10: 98% kept (audience 6.62), +6,260 new | $0 | $0 | $0 |
| 11 | 166,178 | 1.01 | episode 11: 98% kept (audience 6.62), +4,773 new | $0 | $0 | $0 |
| 12 | 166,035 | 1 | episode 12: 98% kept (audience 6.62), +3,646 new | $0 | $0 | $0 |
| 13 | 165,033 | 0.99 | episode 13: 98% kept (audience 6.62), +2,784 new | $0 | $0 | $0 |
| 14 | 163,396 | 0.99 | episode 14: 98% kept (audience 6.62), +2,126 new | $0 | $0 | $0 |
| 15 | 161,295 | 0.99 | episode 15: 98% kept (audience 6.62), +1,624 new | $0 | $0 | $0 |
| 16 | 158,857 | 0.98 | episode 16: 98% kept (audience 6.62), +1,240 new | $0 | $0 | $0 |
| 17 | 156,182 | 0.98 | episode 17: 98% kept (audience 6.62), +947 new | $0 | $0 | $0 |
| 18 | 153,344 | 0.98 | episode 18: 98% kept (audience 6.62), +723 new | $0 | $0 | $0 |
| 19 | 150,400 | 0.98 | episode 19: 98% kept (audience 6.62), +552 new | $0 | $0 | $0 |
| 20 | 147,392 | 0.98 | episode 20: 98% kept (audience 6.62), +421 new | $0 | $0 | $0 |
| 21 | 51,587 | 0.35 | catch-up viewing (tail week 1/2) | $0 | $0 | $0 |
| 22 | 18,056 | 0.35 | catch-up viewing (tail week 2/2) | $0 | $0 | $0 |
| 23 | 0 | 0 | run ended | $0 | $0 | $0 |

**Progression trace**

- Prestige awards: Prestige +50: meters_all_70 (Iron Legacy: Season 6).
- IP fans: {"before":47257,"after":51875,"delta":4618}
- Star career: {"fameDelta":3.91,"relDelta":0.25,"grow":0,"level":10,"reasons":"worked together (+)"}
- Rule labels: LOCKED = causal chain, accounting, fallback/no-campaign, thresholds 4.0/9.0, IP fan inheritance. WORKING ASSUMPTION = all formulas' shapes and numbers.

### Broken Edge — Action + Pirates (new)

Released week 507 (year 9.8) · Distributor: XYZ Network · Star: Kai Grant (L8, Fame 72) · IP: Broken Edge
Joined the streaming catalog after its run (retention value only; no new payouts).

**Financial waterfall** [LOCKED rules; amounts provisional]

| Item | Amount |
|---|---:|
| Advance received (project reserve, not revenue) | $112,000 |
| Base cost (unavoidable) | −$60,000 |
| Star fee | −$36,526 |
| Marketing campaign | −$20,000 |
| Paid from studio cash (overrun) | $4,526 |
| **Unused advance kept at completion** | $0 |
| Gross from sales (15 weeks) | $746,068 |
| Distributor royalty (42% of weekly gross) | −$313,349 |
| **Studio take** | $432,719 |
| Net for this title (surplus + take − cash overrun; wages are studio-wide, excluded) | $428,194 |

**Quality trace** [scores are computed, never rolled]

Meters (0–100): Plot 92.34 · Writing 92.91 · Filming 91.34 · Editing 88.12
Inputs: staff points {"plot":697.1,"writing":758.12,"filming":651.66,"editing":412.33}, Star filming points 75.9 (Star family fit 100), studio Action level 5 (+15%), era bar x1.39
Base scores: Audience 9.06 / Critic 9.18 · no weak meter
Combo grades: Audience C (x1) / Critic D (x0.9) · repetition fatigue x1 · critic saturation x1
Before expectations (after combo, weakness, fatigue, saturation; pre-clamp): Audience 9.06 / Critic 8.26 · critic generation 0 (−0.0%, scale) · audience era 0 (−0.0%) · then clamp 0–10 (generation/era 0 = the ones active at game start)
**Final: Audience 9.06 / Critic 8.26 → avg 8.66**

**Opening & viewership trace** [marketing/Fame/reach affect viewers only]

Awareness inputs: base 0.35, marketing 0.55, studioBuzz 0, starFame 0.35, trend 0, ipFans 0 → awareness 0.71. Reach cap 376,000 → pool 268,608 → opening 80,582.

| Wk | Viewers | Retention | Driver | Gross | Studio | Distributor |
|---:|---:|---:|---|---:|---:|---:|
| 1 | 80,582 | 1 | opening (aware people watching) | $161,164 | $93,475 | $67,689 |
| 2 | 60,662 | 0.75 | critic 8.26: +8,402 newly aware (buzz) | $121,324 | $70,368 | $50,956 |
| 3 | 38,075 | 0.63 | critic 8.26: +9,510 newly aware (buzz) | $76,150 | $44,167 | $31,983 |
| 4 | 44,882 | 1.18 | audience 9.06: +61,834 newly aware (word of mouth) | $89,764 | $52,063 | $37,701 |
| 5 | 51,342 | 1.14 | audience 9.06: +72,320 newly aware (word of mouth) | $102,684 | $59,557 | $43,127 |
| 6 | 32,317 | 0.63 | audience 9.06: +9,538 newly aware (word of mouth) | $64,634 | $37,488 | $27,146 |
| 7 | 22,113 | 0.68 | audience 9.06: +10,910 newly aware (word of mouth) | $44,226 | $25,651 | $18,575 |
| 8 | 14,915 | 0.67 | audience 9.06: +6,868 newly aware (word of mouth) | $29,830 | $17,301 | $12,529 |
| 9 | 10,084 | 0.68 | audience 9.06: +4,699 newly aware (word of mouth) | $20,168 | $11,697 | $8,471 |
| 10 | 6,816 | 0.68 | audience 9.06: +3,170 newly aware (word of mouth) | $13,632 | $7,907 | $5,725 |
| 11 | 4,606 | 0.68 | audience 9.06: +2,143 newly aware (word of mouth) | $9,212 | $5,343 | $3,869 |
| 12 | 3,114 | 0.68 | audience 9.06: +1,448 newly aware (word of mouth) | $6,228 | $3,612 | $2,616 |
| 13 | 2,104 | 0.68 | audience 9.06: +979 newly aware (word of mouth) | $4,208 | $2,441 | $1,767 |
| 14 | 1,422 | 0.68 | audience 9.06: +662 newly aware (word of mouth) | $2,844 | $1,650 | $1,194 |
| 15 | 0 | 0 | audience 9.06: +447 newly aware (word of mouth) | $0 | $0 | $0 |

**Progression trace**

- Prestige awards: Prestige +50: meters_all_70 (Broken Edge).; Prestige +75: audience_7_5 (Broken Edge).
- IP fans: {"before":0,"after":21845,"delta":21845}
- Star career: {"fameDelta":13.05,"relDelta":0.75,"grow":0,"level":8,"reasons":"worked together (+); project boosted their career (+)"}
- Distributor trust: XYZ Network earned 280% of its advance back on Broken Edge with strong reviews (step 0.75)
- Rule labels: LOCKED = causal chain, accounting, fallback/no-campaign, thresholds 4.0/9.0, IP fan inheritance. WORKING ASSUMPTION = all formulas' shapes and numbers.

### Iron Shadow — Horror + Mythology (new)

Released week 525 (year 10.1) · Distributor: Streaming Original (self-funded, no box office) · Star: Lee Park (L7, Fame 79) · IP: Iron Shadow
Format: **limited_series**, 6 episodes (one per week) · 160,288 distinct viewers, 781,410 viewer-episodes · self-contained: never renews
Joined the streaming catalog after its run (retention value only; no new payouts).

**Financial waterfall** [LOCKED rules; amounts provisional]

| Item | Amount |
|---|---:|
| Advance received (project reserve, not revenue) | $0 |
| Base cost (unavoidable) | −$90,000 |
| Star fee | −$20,644 |
| Marketing campaign | −$20,000 |
| Paid from studio cash (overrun) | $130,644 |
| **Unused advance kept at completion** | $0 |
| Gross from sales (10 weeks) | $0 |
| Distributor royalty (0% of weekly gross) | −$0 |
| **Studio take** | $0 |
| Net for this title (surplus + take − cash overrun; wages are studio-wide, excluded) | $-130,644 |

**Quality trace** [scores are computed, never rolled]

Meters (0–100): Plot 91.91 · Writing 92.52 · Filming 91.01 · Editing 86.86
Inputs: staff points {"plot":746.13,"writing":812.3,"filming":711.07,"editing":417.49}, Star filming points 81.62 (Star family fit 100), studio Horror level 2 (+6%), era bar x1.4
Base scores: Audience 8.99 / Critic 9.12 · no weak meter
Combo grades: Audience C (x1) / Critic F (x0.78) · repetition fatigue x1 · critic saturation x1
Before expectations (after combo, weakness, fatigue, saturation; pre-clamp): Audience 8.99 / Critic 7.12 · critic generation 0 (−0.0%, scale) · audience era 0 (−0.0%) · then clamp 0–10 (generation/era 0 = the ones active at game start)
**Final: Audience 8.99 / Critic 7.12 → avg 8.06**

**Opening & viewership trace** [marketing/Fame/reach affect viewers only]

Awareness inputs: base 0.35, marketing 0.55, studioBuzz 0, starFame 0.19, trend 0, ipFans 0 → awareness 0.66. Reach cap 220,000 → pool 145,736 → opening 43,721.

| Wk | Viewers | Retention | Driver | Gross | Studio | Distributor |
|---:|---:|---:|---|---:|---:|---:|
| 1 | 72,868 | 1 | episode 1 premiere | $0 | $0 | $0 |
| 2 | 90,516 | 1.24 | episode 2: 100% kept (critic 7.12), +17,648 new | $0 | $0 | $0 |
| 3 | 101,955 | 1.13 | episode 3: 100% kept (critic 7.12), +11,439 new | $0 | $0 | $0 |
| 4 | 118,124 | 1.16 | episode 4: 100% kept (audience 8.99), +16,169 new | $0 | $0 | $0 |
| 5 | 137,640 | 1.17 | episode 5: 100% kept (audience 8.99), +19,516 new | $0 | $0 | $0 |
| 6 | 160,288 | 1.16 | episode 6: 100% kept (audience 8.99), +22,648 new | $0 | $0 | $0 |
| 7 | 64,115 | 0.4 | catch-up viewing (tail week 1/3) | $0 | $0 | $0 |
| 8 | 25,646 | 0.4 | catch-up viewing (tail week 2/3) | $0 | $0 | $0 |
| 9 | 10,258 | 0.4 | catch-up viewing (tail week 3/3) | $0 | $0 | $0 |
| 10 | 0 | 0 | run ended | $0 | $0 | $0 |

**Progression trace**

- Prestige awards: Prestige +50: meters_all_70 (Iron Shadow).; Prestige +75: audience_7_5 (Iron Shadow).
- IP fans: {"before":0,"after":7848,"delta":7848}
- Star career: {"fameDelta":7.9,"relDelta":0.75,"grow":0,"level":5,"reasons":"worked together (+); project boosted their career (+)"}
- Rule labels: LOCKED = causal chain, accounting, fallback/no-campaign, thresholds 4.0/9.0, IP fan inheritance. WORKING ASSUMPTION = all formulas' shapes and numbers.

### Wild Signal — Horror + Vampires (new)

Released week 572 (year 11.0) · Distributor: Orbit Releasing · Star: Lee Park (L7, Fame 79) · IP: Wild Signal
Format: **tv season 1**, 20 episodes (one per week) · 331,127 distinct viewers, 5,844,173 viewer-episodes · renewal: average 9.09 ≥ 4.0 → renewable
Joined the streaming catalog after its run (retention value only; no new payouts).

**Financial waterfall** [LOCKED rules; amounts provisional]

| Item | Amount |
|---|---:|
| Advance received (project reserve, not revenue) | $481,000 |
| Base cost (unavoidable) | −$315,000 |
| Star fee | −$25,668 |
| Marketing campaign | −$20,000 |
| Paid from studio cash (overrun) | $0 |
| **Unused advance kept at completion** | $120,332 |
| Gross from sales (23 weeks) | $1,870,135 |
| Distributor royalty (34% of weekly gross) | −$635,846 |
| **Studio take** | $1,234,289 |
| Net for this title (surplus + take − cash overrun; wages are studio-wide, excluded) | $1,354,622 |

**Quality trace** [scores are computed, never rolled]

Meters (0–100): Plot 91.59 · Writing 92.29 · Filming 91.05 · Editing 88.35
Inputs: staff points {"plot":1875.68,"writing":2061.86,"filming":1879.41,"editing":1256.05}, Star filming points 209.88 (Star family fit 100), studio Horror level 2 (+6%), era bar x1.44
Base scores: Audience 9.04 / Critic 9.13 · no weak meter
Combo grades: Audience C (x1) / Critic C (x1) · repetition fatigue x1 · critic saturation x1
Before expectations (after combo, weakness, fatigue, saturation; pre-clamp): Audience 9.04 / Critic 9.13 · critic generation 0 (−0.0%, scale) · audience era 0 (−0.0%) · then clamp 0–10 (generation/era 0 = the ones active at game start)
**Final: Audience 9.04 / Critic 9.13 → avg 9.09 (HALL OF FAME)**

**Opening & viewership trace** [marketing/Fame/reach affect viewers only]

Awareness inputs: base 0.35, marketing 0.55, studioBuzz 0, starFame 0.23, trend 0.4, ipFans 0, announcement 0 → awareness 0.78. Reach cap 332,000 → pool 260,354 → opening 78,106.

| Wk | Viewers | Retention | Driver | Gross | Studio | Distributor |
|---:|---:|---:|---|---:|---:|---:|
| 1 | 130,177 | 1 | episode 1 premiere | $41,657 | $27,493 | $14,163 |
| 2 | 164,623 | 1.26 | episode 2: 100% kept (critic 9.13), +34,446 new | $52,679 | $34,768 | $17,911 |
| 3 | 186,381 | 1.13 | episode 3: 100% kept (critic 9.13), +21,758 new | $59,642 | $39,364 | $20,278 |
| 4 | 215,087 | 1.15 | episode 4: 100% kept (audience 9.04), +28,706 new | $68,828 | $45,426 | $23,401 |
| 5 | 247,207 | 1.15 | episode 5: 100% kept (audience 9.04), +32,120 new | $79,106 | $52,210 | $26,896 |
| 6 | 269,317 | 1.09 | episode 6: 100% kept (audience 9.04), +22,110 new | $86,181 | $56,880 | $29,302 |
| 7 | 285,833 | 1.06 | episode 7: 100% kept (audience 9.04), +16,516 new | $91,467 | $60,368 | $31,099 |
| 8 | 297,973 | 1.04 | episode 8: 100% kept (audience 9.04), +12,140 new | $95,351 | $62,932 | $32,419 |
| 9 | 306,924 | 1.03 | episode 9: 100% kept (audience 9.04), +8,951 new | $98,216 | $64,822 | $33,393 |
| 10 | 313,520 | 1.02 | episode 10: 100% kept (audience 9.04), +6,596 new | $100,326 | $66,215 | $34,111 |
| 11 | 318,381 | 1.02 | episode 11: 100% kept (audience 9.04), +4,861 new | $101,882 | $67,242 | $34,640 |
| 12 | 321,963 | 1.01 | episode 12: 100% kept (audience 9.04), +3,582 new | $103,028 | $67,999 | $35,030 |
| 13 | 324,603 | 1.01 | episode 13: 100% kept (audience 9.04), +2,640 new | $103,873 | $68,556 | $35,317 |
| 14 | 326,549 | 1.01 | episode 14: 100% kept (audience 9.04), +1,946 new | $104,496 | $68,967 | $35,529 |
| 15 | 327,983 | 1 | episode 15: 100% kept (audience 9.04), +1,434 new | $104,955 | $69,270 | $35,685 |
| 16 | 329,040 | 1 | episode 16: 100% kept (audience 9.04), +1,057 new | $105,293 | $69,493 | $35,800 |
| 17 | 329,819 | 1 | episode 17: 100% kept (audience 9.04), +779 new | $105,542 | $69,658 | $35,884 |
| 18 | 330,393 | 1 | episode 18: 100% kept (audience 9.04), +574 new | $105,726 | $69,779 | $35,947 |
| 19 | 330,816 | 1 | episode 19: 100% kept (audience 9.04), +423 new | $105,861 | $69,868 | $35,993 |
| 20 | 331,127 | 1 | episode 20: 100% kept (audience 9.04), +311 new | $105,961 | $69,934 | $36,027 |
| 21 | 115,894 | 0.35 | catch-up viewing (tail week 1/2) | $37,086 | $24,477 | $12,609 |
| 22 | 40,563 | 0.35 | catch-up viewing (tail week 2/2) | $12,980 | $8,567 | $4,413 |
| 23 | 0 | 0 | run ended | $0 | $0 | $0 |

**Progression trace**

- Prestige awards: Prestige +50: meters_all_70 (Wild Signal).; Prestige +75: audience_7_5 (Wild Signal).; Prestige +85: critic_8_5 (Wild Signal).; Prestige +200: hall_of_fame (Wild Signal).; Prestige +100: ip_gross_1m (Wild Signal).
- IP fans: {"before":0,"after":21669,"delta":21669}
- Star career: {"fameDelta":14.07,"relDelta":0.75,"grow":0,"level":6,"reasons":"worked together (+); project boosted their career (+)"}
- Distributor trust: Orbit Releasing earned 132% of its advance back on Wild Signal with strong reviews (step 0.59)
- Rule labels: LOCKED = causal chain, accounting, fallback/no-campaign, thresholds 4.0/9.0, IP fan inheritance. WORKING ASSUMPTION = all formulas' shapes and numbers.

### Red Horizon — Comedy + Superheroes (new)

Released week 588 (year 11.3) · Distributor: Streaming Original (self-funded, no box office) · Star: Jay Imai (L6, Fame 50) · IP: Red Horizon
Joined the streaming catalog after its run (retention value only; no new payouts).

**Financial waterfall** [LOCKED rules; amounts provisional]

| Item | Amount |
|---|---:|
| Advance received (project reserve, not revenue) | $0 |
| Base cost (unavoidable) | −$60,000 |
| Star fee | −$18,358 |
| Marketing campaign | −$20,000 |
| Paid from studio cash (overrun) | $98,358 |
| **Unused advance kept at completion** | $0 |
| Gross from sales (15 weeks) | $0 |
| Distributor royalty (0% of weekly gross) | −$0 |
| **Studio take** | $0 |
| Net for this title (surplus + take − cash overrun; wages are studio-wide, excluded) | $-98,358 |

**Quality trace** [scores are computed, never rolled]

Meters (0–100): Plot 91.87 · Writing 92.5 · Filming 90.74 · Editing 87.58
Inputs: staff points {"plot":683.04,"writing":745.25,"filming":636.26,"editing":409.5}, Star filming points 69.96 (Star family fit 100), studio Comedy level 2 (+6%), era bar x1.45
Base scores: Audience 9.01 / Critic 9.13 · no weak meter
Combo grades: Audience D (x0.9) / Critic F (x0.78) · repetition fatigue x1 · critic saturation x1
Before expectations (after combo, weakness, fatigue, saturation; pre-clamp): Audience 8.11 / Critic 7.12 · critic generation 0 (−0.0%, scale) · audience era 0 (−0.0%) · then clamp 0–10 (generation/era 0 = the ones active at game start)
**Final: Audience 8.11 / Critic 7.12 → avg 7.62**

**Opening & viewership trace** [marketing/Fame/reach affect viewers only]

Awareness inputs: base 0.35, marketing 0.55, studioBuzz 0, starFame 0.17, trend 0.4, ipFans 0 → awareness 0.77. Reach cap 220,000 → pool 169,315 → opening 50,795.

| Wk | Viewers | Retention | Driver | Gross | Studio | Distributor |
|---:|---:|---:|---|---:|---:|---:|
| 1 | 50,795 | 1 | opening (aware people watching) | $0 | $0 | $0 |
| 2 | 35,462 | 0.7 | critic 7.12: +2,579 newly aware (buzz) | $0 | $0 | $0 |
| 3 | 21,904 | 0.62 | critic 7.12: +3,171 newly aware (buzz) | $0 | $0 | $0 |
| 4 | 22,902 | 1.05 | audience 8.11: +27,249 newly aware (word of mouth) | $0 | $0 | $0 |
| 5 | 23,044 | 1.01 | audience 8.11: +28,490 newly aware (word of mouth) | $0 | $0 | $0 |
| 6 | 21,035 | 0.91 | audience 8.11: +22,462 newly aware (word of mouth) | $0 | $0 | $0 |
| 7 | 13,901 | 0.66 | audience 8.11: +5,212 newly aware (word of mouth) | $0 | $0 | $0 |
| 8 | 9,641 | 0.69 | audience 8.11: +4,758 newly aware (word of mouth) | $0 | $0 | $0 |
| 9 | 6,633 | 0.69 | audience 8.11: +3,144 newly aware (word of mouth) | $0 | $0 | $0 |
| 10 | 4,570 | 0.69 | audience 8.11: +2,181 newly aware (word of mouth) | $0 | $0 | $0 |
| 11 | 3,147 | 0.69 | audience 8.11: +1,500 newly aware (word of mouth) | $0 | $0 | $0 |
| 12 | 2,168 | 0.69 | audience 8.11: +1,034 newly aware (word of mouth) | $0 | $0 | $0 |
| 13 | 1,493 | 0.69 | audience 8.11: +712 newly aware (word of mouth) | $0 | $0 | $0 |
| 14 | 1,029 | 0.69 | audience 8.11: +490 newly aware (word of mouth) | $0 | $0 | $0 |
| 15 | 0 | 0 | audience 8.11: +338 newly aware (word of mouth) | $0 | $0 | $0 |

**Progression trace**

- Prestige awards: Prestige +50: meters_all_70 (Red Horizon).; Prestige +75: audience_7_5 (Red Horizon).
- IP fans: {"before":0,"after":9127,"delta":9127}
- Star career: {"fameDelta":7.76,"relDelta":0.75,"grow":0,"level":5,"reasons":"worked together (+); project boosted their career (+)"}
- Rule labels: LOCKED = causal chain, accounting, fallback/no-campaign, thresholds 4.0/9.0, IP fan inheritance. WORKING ASSUMPTION = all formulas' shapes and numbers.

### Last Echo — Comedy + Mythology (new)

Released week 606 (year 11.7) · Distributor: Meridian Global · Star: Jay Imai (L6, Fame 50) · IP: Last Echo
Format: **limited_series**, 6 episodes (one per week) · 315,433 distinct viewers, 1,550,499 viewer-episodes · self-contained: never renews
Joined the streaming catalog after its run (retention value only; no new payouts).

**Financial waterfall** [LOCKED rules; amounts provisional]

| Item | Amount |
|---|---:|
| Advance received (project reserve, not revenue) | $238,000 |
| Base cost (unavoidable) | −$90,000 |
| Star fee | −$18,346 |
| Marketing campaign | −$20,000 |
| Paid from studio cash (overrun) | $0 |
| **Unused advance kept at completion** | $109,654 |
| Gross from sales (10 weeks) | $883,784 |
| Distributor royalty (44% of weekly gross) | −$388,865 |
| **Studio take** | $494,919 |
| Net for this title (surplus + take − cash overrun; wages are studio-wide, excluded) | $604,573 |

**Quality trace** [scores are computed, never rolled]

Meters (0–100): Plot 92.09 · Writing 92.71 · Filming 91.09 · Editing 87.22
Inputs: staff points {"plot":799.11,"writing":872.22,"filming":754.68,"editing":450.29}, Star filming points 81.62 (Star family fit 100), studio Comedy level 2 (+6%), era bar x1.47
Base scores: Audience 9.01 / Critic 9.14 · no weak meter
Combo grades: Audience A (x1.15) / Critic C (x1) · repetition fatigue x1 · critic saturation x0.9
Before expectations (after combo, weakness, fatigue, saturation; pre-clamp): Audience 10.36 / Critic 8.23 · critic generation 0 (−0.0%, scale) · audience era 0 (−0.0%) · then clamp 0–10 (generation/era 0 = the ones active at game start)
**Final: Audience 10 / Critic 8.23 → avg 9.12 (HALL OF FAME)**

**Opening & viewership trace** [marketing/Fame/reach affect viewers only]

Awareness inputs: base 0.35, marketing 0.55, studioBuzz 0, starFame 0.21, trend 0.1, ipFans 0 → awareness 0.7. Reach cap 400,000 → pool 281,264 → opening 84,379.

| Wk | Viewers | Retention | Driver | Gross | Studio | Distributor |
|---:|---:|---:|---|---:|---:|---:|
| 1 | 140,632 | 1 | episode 1 premiere | $80,160 | $44,890 | $35,271 |
| 2 | 176,679 | 1.26 | episode 2: 100% kept (critic 8.23), +36,047 new | $100,707 | $56,396 | $44,311 |
| 3 | 199,944 | 1.13 | episode 3: 100% kept (critic 8.23), +23,265 new | $113,968 | $63,822 | $50,146 |
| 4 | 236,915 | 1.18 | episode 4: 100% kept (audience 10), +36,971 new | $135,042 | $75,623 | $59,418 |
| 5 | 284,066 | 1.2 | episode 5: 100% kept (audience 10), +47,151 new | $161,918 | $90,674 | $71,244 |
| 6 | 315,433 | 1.11 | episode 6: 100% kept (audience 10), +31,367 new | $179,797 | $100,686 | $79,111 |
| 7 | 126,173 | 0.4 | catch-up viewing (tail week 1/3) | $71,919 | $40,274 | $31,644 |
| 8 | 50,469 | 0.4 | catch-up viewing (tail week 2/3) | $28,767 | $16,110 | $12,658 |
| 9 | 20,188 | 0.4 | catch-up viewing (tail week 3/3) | $11,507 | $6,444 | $5,063 |
| 10 | 0 | 0 | run ended | $0 | $0 | $0 |

**Progression trace**

- Prestige awards: Prestige +50: meters_all_70 (Last Echo).; Prestige +75: audience_7_5 (Last Echo).; Prestige +200: hall_of_fame (Last Echo).
- IP fans: {"before":0,"after":20793,"delta":20793}
- Star career: {"fameDelta":13.96,"relDelta":0.75,"grow":0,"level":6,"reasons":"worked together (+); project boosted their career (+)"}
- Distributor trust: Meridian Global earned 163% of its advance back on Last Echo with strong reviews (step 0.75)
- Rule labels: LOCKED = causal chain, accounting, fallback/no-campaign, thresholds 4.0/9.0, IP fan inheritance. WORKING ASSUMPTION = all formulas' shapes and numbers.

### Wild Signal: Season 2 — Horror + Vampires (season)

Released week 653 (year 12.6) · Distributor: Streaming Original (self-funded, no box office) · Star: Lee Park (L7, Fame 79) · IP: Wild Signal
Format: **tv season 2**, 20 episodes (one per week) · 219,347 distinct viewers, 3,822,165 viewer-episodes · renewal: average 9.03 ≥ 4.0 → renewable
TV: show-age fatigue 0.9% (base 1.2%, quality slows by 28%) · twist none · hiatus 58 weeks since the last season aired → anticipation ×1 · announcement anticipation used 0.01
Joined the streaming catalog after its run (retention value only; no new payouts).

**Financial waterfall** [LOCKED rules; amounts provisional]

| Item | Amount |
|---|---:|
| Advance received (project reserve, not revenue) | $0 |
| Base cost (unavoidable) | −$315,000 |
| Star fee | −$35,232 |
| Marketing campaign | −$20,000 |
| Paid from studio cash (overrun) | $370,232 |
| **Unused advance kept at completion** | $0 |
| Gross from sales (23 weeks) | $0 |
| Distributor royalty (0% of weekly gross) | −$0 |
| **Studio take** | $0 |
| Net for this title (surplus + take − cash overrun; wages are studio-wide, excluded) | $-370,232 |

**Quality trace** [scores are computed, never rolled]

Meters (0–100): Plot 91.92 · Writing 92.61 · Filming 91.35 · Editing 88.95
Inputs: staff points {"plot":2043.77,"writing":2252.61,"filming":2046.09,"editing":1390.24}, Star filming points 215.82 (Star family fit 100), studio Horror level 3 (+9%), era bar x1.5
Base scores: Audience 9.08 / Critic 9.16 · no weak meter
Combo grades: Audience C (x1) / Critic C (x1) · repetition fatigue x0.99 · critic saturation x1
Before expectations (after combo, weakness, fatigue, saturation; pre-clamp): Audience 8.99 / Critic 9.07 · critic generation 0 (−0.0%, scale) · audience era 0 (−0.0%) · then clamp 0–10 (generation/era 0 = the ones active at game start)
**Final: Audience 8.99 / Critic 9.07 → avg 9.03 (HALL OF FAME)**

**Opening & viewership trace** [marketing/Fame/reach affect viewers only]

Awareness inputs: base 0.35, marketing 0.55, studioBuzz 0, starFame 0.32, trend 0, ipFans 0.12, announcement 0.01 → awareness 0.74. Reach cap 220,000 → pool 162,907 → opening 48,872.

| Wk | Viewers | Retention | Driver | Gross | Studio | Distributor |
|---:|---:|---:|---|---:|---:|---:|
| 1 | 81,454 | 1 | episode 1 premiere | $0 | $0 | $0 |
| 2 | 103,124 | 1.27 | episode 2: 100% kept (critic 9.07), +21,670 new | $0 | $0 | $0 |
| 3 | 116,979 | 1.13 | episode 3: 100% kept (critic 9.07), +13,855 new | $0 | $0 | $0 |
| 4 | 134,983 | 1.15 | episode 4: 100% kept (audience 8.99), +18,004 new | $0 | $0 | $0 |
| 5 | 157,003 | 1.16 | episode 5: 100% kept (audience 8.99), +22,020 new | $0 | $0 | $0 |
| 6 | 173,582 | 1.11 | episode 6: 100% kept (audience 8.99), +16,579 new | $0 | $0 | $0 |
| 7 | 185,761 | 1.07 | episode 7: 100% kept (audience 8.99), +12,179 new | $0 | $0 | $0 |
| 8 | 194,749 | 1.05 | episode 8: 100% kept (audience 8.99), +8,988 new | $0 | $0 | $0 |
| 9 | 201,377 | 1.03 | episode 9: 100% kept (audience 8.99), +6,628 new | $0 | $0 | $0 |
| 10 | 206,265 | 1.02 | episode 10: 100% kept (audience 8.99), +4,888 new | $0 | $0 | $0 |
| 11 | 209,870 | 1.02 | episode 11: 100% kept (audience 8.99), +3,605 new | $0 | $0 | $0 |
| 12 | 212,529 | 1.01 | episode 12: 100% kept (audience 8.99), +2,659 new | $0 | $0 | $0 |
| 13 | 214,490 | 1.01 | episode 13: 100% kept (audience 8.99), +1,961 new | $0 | $0 | $0 |
| 14 | 215,936 | 1.01 | episode 14: 100% kept (audience 8.99), +1,446 new | $0 | $0 | $0 |
| 15 | 217,003 | 1 | episode 15: 100% kept (audience 8.99), +1,067 new | $0 | $0 | $0 |
| 16 | 217,790 | 1 | episode 16: 100% kept (audience 8.99), +787 new | $0 | $0 | $0 |
| 17 | 218,370 | 1 | episode 17: 100% kept (audience 8.99), +580 new | $0 | $0 | $0 |
| 18 | 218,798 | 1 | episode 18: 100% kept (audience 8.99), +428 new | $0 | $0 | $0 |
| 19 | 219,114 | 1 | episode 19: 100% kept (audience 8.99), +316 new | $0 | $0 | $0 |
| 20 | 219,347 | 1 | episode 20: 100% kept (audience 8.99), +233 new | $0 | $0 | $0 |
| 21 | 76,771 | 0.35 | catch-up viewing (tail week 1/2) | $0 | $0 | $0 |
| 22 | 26,870 | 0.35 | catch-up viewing (tail week 2/2) | $0 | $0 | $0 |
| 23 | 0 | 0 | run ended | $0 | $0 | $0 |

**Progression trace**

- Prestige awards: Prestige +50: meters_all_70 (Wild Signal: Season 2).; Prestige +75: audience_7_5 (Wild Signal: Season 2).; Prestige +85: critic_8_5 (Wild Signal: Season 2).; Prestige +200: hall_of_fame (Wild Signal: Season 2).; Prestige +150: ip_viewers_500k (Wild Signal: Season 2).
- IP fans: {"before":18541,"after":32684,"delta":14143}
- Star career: {"fameDelta":11.97,"relDelta":0.75,"grow":0,"level":6,"reasons":"worked together (+); project boosted their career (+)"}
- Rule labels: LOCKED = causal chain, accounting, fallback/no-campaign, thresholds 4.0/9.0, IP fan inheritance. WORKING ASSUMPTION = all formulas' shapes and numbers.

### Midnight Legacy — Comedy + Mythology (new)

Released week 669 (year 12.9) · Distributor: Meridian Global · Star: Mo Diaz (L5, Fame 52) · IP: Midnight Legacy
Joined the streaming catalog after its run (retention value only; no new payouts).

**Financial waterfall** [LOCKED rules; amounts provisional]

| Item | Amount |
|---|---:|
| Advance received (project reserve, not revenue) | $136,000 |
| Base cost (unavoidable) | −$60,000 |
| Star fee | −$23,762 |
| Marketing campaign | −$20,000 |
| Paid from studio cash (overrun) | $0 |
| **Unused advance kept at completion** | $32,238 |
| Gross from sales (15 weeks) | $795,036 |
| Distributor royalty (44% of weekly gross) | −$349,816 |
| **Studio take** | $445,220 |
| Net for this title (surplus + take − cash overrun; wages are studio-wide, excluded) | $477,458 |

**Quality trace** [scores are computed, never rolled]

Meters (0–100): Plot 92.28 · Writing 92.89 · Filming 91.19 · Editing 88.4
Inputs: staff points {"plot":752.66,"writing":823.35,"filming":705.54,"editing":461.57}, Star filming points 71.94 (Star family fit 100), studio Comedy level 3 (+9%), era bar x1.51
Base scores: Audience 9.06 / Critic 9.17 · no weak meter
Combo grades: Audience A (x1.15) / Critic C (x1) · repetition fatigue x0.95 · critic saturation x1
Before expectations (after combo, weakness, fatigue, saturation; pre-clamp): Audience 9.9 / Critic 8.72 · critic generation 0 (−0.0%, scale) · audience era 0 (−0.0%) · then clamp 0–10 (generation/era 0 = the ones active at game start)
**Final: Audience 9.9 / Critic 8.72 → avg 9.31 (HALL OF FAME)**

**Opening & viewership trace** [marketing/Fame/reach affect viewers only]

Awareness inputs: base 0.35, marketing 0.55, studioBuzz 0, starFame 0.22, trend 0.15, ipFans 0 → awareness 0.72. Reach cap 400,000 → pool 287,616 → opening 86,285.

| Wk | Viewers | Retention | Driver | Gross | Studio | Distributor |
|---:|---:|---:|---|---:|---:|---:|
| 1 | 86,285 | 1 | opening (aware people watching) | $172,570 | $96,639 | $75,931 |
| 2 | 66,608 | 0.77 | critic 8.72: +10,034 newly aware (buzz) | $133,216 | $74,601 | $58,615 |
| 3 | 41,778 | 0.63 | critic 8.72: +11,295 newly aware (buzz) | $83,556 | $46,791 | $36,765 |
| 4 | 55,446 | 1.33 | audience 9.9: +81,885 newly aware (word of mouth) | $110,892 | $62,100 | $48,792 |
| 5 | 51,813 | 0.93 | audience 9.9: +56,879 newly aware (word of mouth) | $103,626 | $58,031 | $45,595 |
| 6 | 32,734 | 0.63 | audience 9.9: +11,160 newly aware (word of mouth) | $65,468 | $36,662 | $28,806 |
| 7 | 21,942 | 0.67 | audience 9.9: +10,429 newly aware (word of mouth) | $43,884 | $24,575 | $19,309 |
| 8 | 14,558 | 0.66 | audience 9.9: +6,589 newly aware (word of mouth) | $29,116 | $16,305 | $12,811 |
| 9 | 9,676 | 0.66 | audience 9.9: +4,417 newly aware (word of mouth) | $19,352 | $10,837 | $8,515 |
| 10 | 6,429 | 0.66 | audience 9.9: +2,930 newly aware (word of mouth) | $12,858 | $7,200 | $5,658 |
| 11 | 4,272 | 0.66 | audience 9.9: +1,948 newly aware (word of mouth) | $8,544 | $4,785 | $3,759 |
| 12 | 2,838 | 0.66 | audience 9.9: +1,294 newly aware (word of mouth) | $5,676 | $3,179 | $2,497 |
| 13 | 1,886 | 0.66 | audience 9.9: +860 newly aware (word of mouth) | $3,772 | $2,112 | $1,660 |
| 14 | 1,253 | 0.66 | audience 9.9: +571 newly aware (word of mouth) | $2,506 | $1,403 | $1,103 |
| 15 | 0 | 0 | audience 9.9: +380 newly aware (word of mouth) | $0 | $0 | $0 |

**Progression trace**

- Prestige awards: Prestige +50: meters_all_70 (Midnight Legacy).; Prestige +75: audience_7_5 (Midnight Legacy).; Prestige +85: critic_8_5 (Midnight Legacy).; Prestige +200: hall_of_fame (Midnight Legacy).
- IP fans: {"before":0,"after":27413,"delta":27413}
- Star career: {"fameDelta":15.65,"relDelta":0.75,"grow":0,"level":5,"reasons":"worked together (+); project boosted their career (+)"}
- Distributor trust: Meridian Global earned 257% of its advance back on Midnight Legacy with strong reviews (step 0.75)
- Rule labels: LOCKED = causal chain, accounting, fallback/no-campaign, thresholds 4.0/9.0, IP fan inheritance. WORKING ASSUMPTION = all formulas' shapes and numbers.

### Dead Legacy — Horror + Sports (new)

Released week 687 (year 13.2) · Distributor: Streaming Original (self-funded, no box office) · Star: Sam Okafor (L8, Fame 45) · IP: Dead Legacy
Format: **limited_series**, 6 episodes (one per week) · 177,062 distinct viewers, 891,449 viewer-episodes · self-contained: never renews
Joined the streaming catalog after its run (retention value only; no new payouts).

**Financial waterfall** [LOCKED rules; amounts provisional]

| Item | Amount |
|---|---:|
| Advance received (project reserve, not revenue) | $0 |
| Base cost (unavoidable) | −$90,000 |
| Star fee | −$5,917 |
| Marketing campaign | −$20,000 |
| Paid from studio cash (overrun) | $115,917 |
| **Unused advance kept at completion** | $0 |
| Gross from sales (10 weeks) | $0 |
| Distributor royalty (0% of weekly gross) | −$0 |
| **Studio take** | $0 |
| Net for this title (surplus + take − cash overrun; wages are studio-wide, excluded) | $-115,917 |

**Quality trace** [scores are computed, never rolled]

Meters (0–100): Plot 92.35 · Writing 92.97 · Filming 91.44 · Editing 87.95
Inputs: staff points {"plot":863.53,"writing":945.27,"filming":826.75,"editing":502.17}, Star filming points 83.93 (Star family fit 100), studio Horror level 3 (+9%), era bar x1.53
Base scores: Audience 9.06 / Critic 9.18 · no weak meter
Combo grades: Audience B (x1.06) / Critic B (x1.06) · repetition fatigue x1 · critic saturation x1
Before expectations (after combo, weakness, fatigue, saturation; pre-clamp): Audience 9.6 / Critic 9.73 · critic generation 0 (−0.0%, scale) · audience era 0 (−0.0%) · then clamp 0–10 (generation/era 0 = the ones active at game start)
**Final: Audience 9.6 / Critic 9.73 → avg 9.66 (HALL OF FAME)**

**Opening & viewership trace** [marketing/Fame/reach affect viewers only]

Awareness inputs: base 0.35, marketing 0.55, studioBuzz 0, starFame 0.05, trend 0.4, ipFans 0 → awareness 0.74. Reach cap 220,000 → pool 163,195 → opening 48,959.

| Wk | Viewers | Retention | Driver | Gross | Studio | Distributor |
|---:|---:|---:|---|---:|---:|---:|
| 1 | 81,598 | 1 | episode 1 premiere | $0 | $0 | $0 |
| 2 | 104,035 | 1.27 | episode 2: 100% kept (critic 9.73), +22,437 new | $0 | $0 | $0 |
| 3 | 118,366 | 1.14 | episode 3: 100% kept (critic 9.73), +14,331 new | $0 | $0 | $0 |
| 4 | 138,457 | 1.17 | episode 4: 100% kept (audience 9.6), +20,091 new | $0 | $0 | $0 |
| 5 | 161,444 | 1.17 | episode 5: 100% kept (audience 9.6), +22,987 new | $0 | $0 | $0 |
| 6 | 177,062 | 1.1 | episode 6: 100% kept (audience 9.6), +15,618 new | $0 | $0 | $0 |
| 7 | 70,825 | 0.4 | catch-up viewing (tail week 1/3) | $0 | $0 | $0 |
| 8 | 28,330 | 0.4 | catch-up viewing (tail week 2/3) | $0 | $0 | $0 |
| 9 | 11,332 | 0.4 | catch-up viewing (tail week 3/3) | $0 | $0 | $0 |
| 10 | 0 | 0 | run ended | $0 | $0 | $0 |

**Progression trace**

- Prestige awards: Prestige +50: meters_all_70 (Dead Legacy).; Prestige +75: audience_7_5 (Dead Legacy).; Prestige +85: critic_8_5 (Dead Legacy).; Prestige +200: hall_of_fame (Dead Legacy).
- IP fans: {"before":0,"after":13202,"delta":13202}
- Star career: {"fameDelta":12.61,"relDelta":0.75,"grow":0,"level":7,"reasons":"worked together (+); project boosted their career (+)"}
- Rule labels: LOCKED = causal chain, accounting, fallback/no-campaign, thresholds 4.0/9.0, IP fan inheritance. WORKING ASSUMPTION = all formulas' shapes and numbers.

### Wild Signal: Season 3 — Horror + Vampires (season)

Released week 734 (year 14.1) · Distributor: Meridian Global · Star: Lee Park (L7, Fame 79) · IP: Wild Signal
Format: **tv season 3**, 20 episodes (one per week) · 398,847 distinct viewers, 7,006,127 viewer-episodes · renewal: average 8.86 ≥ 4.0 → renewable
TV: show-age fatigue 2.7% (base 3.6%, quality slows by 27%) · twist none · hiatus 58 weeks since the last season aired → anticipation ×1 · announcement anticipation used 0.01
Joined the streaming catalog after its run (retention value only; no new payouts).

**Financial waterfall** [LOCKED rules; amounts provisional]

| Item | Amount |
|---|---:|
| Advance received (project reserve, not revenue) | $688,000 |
| Base cost (unavoidable) | −$315,000 |
| Star fee | −$42,715 |
| Marketing campaign | −$20,000 |
| Paid from studio cash (overrun) | $0 |
| **Unused advance kept at completion** | $310,285 |
| Gross from sales (23 weeks) | $2,241,961 |
| Distributor royalty (45% of weekly gross) | −$1,008,882 |
| **Studio take** | $1,233,078 |
| Net for this title (surplus + take − cash overrun; wages are studio-wide, excluded) | $1,543,363 |

**Quality trace** [scores are computed, never rolled]

Meters (0–100): Plot 92.07 · Writing 92.75 · Filming 91.45 · Editing 89.19
Inputs: staff points {"plot":2171.31,"writing":2394.91,"filming":2171.84,"editing":1484.82}, Star filming points 215.82 (Star family fit 100), studio Horror level 3 (+9%), era bar x1.56
Base scores: Audience 9.09 / Critic 9.18 · no weak meter
Combo grades: Audience C (x1) / Critic C (x1) · repetition fatigue x0.97 · critic saturation x1
Before expectations (after combo, weakness, fatigue, saturation; pre-clamp): Audience 8.82 / Critic 8.9 · critic generation 0 (−0.0%, scale) · audience era 0 (−0.0%) · then clamp 0–10 (generation/era 0 = the ones active at game start)
**Final: Audience 8.82 / Critic 8.9 → avg 8.86**

**Opening & viewership trace** [marketing/Fame/reach affect viewers only]

Awareness inputs: base 0.35, marketing 0.55, studioBuzz 0, starFame 0.39, trend 0, ipFans 0.18, announcement 0.01 → awareness 0.77. Reach cap 400,000 → pool 309,157 → opening 92,747.

| Wk | Viewers | Retention | Driver | Gross | Studio | Distributor |
|---:|---:|---:|---|---:|---:|---:|
| 1 | 154,579 | 1 | episode 1 premiere | $49,465 | $27,206 | $22,259 |
| 2 | 195,102 | 1.26 | episode 2: 100% kept (critic 8.9), +40,523 new | $62,433 | $34,338 | $28,095 |
| 3 | 220,791 | 1.13 | episode 3: 100% kept (critic 8.9), +25,689 new | $70,653 | $38,859 | $31,794 |
| 4 | 253,631 | 1.15 | episode 4: 100% kept (audience 8.82), +32,840 new | $81,162 | $44,639 | $36,523 |
| 5 | 293,428 | 1.16 | episode 5: 100% kept (audience 8.82), +39,797 new | $93,897 | $51,643 | $42,254 |
| 6 | 320,968 | 1.09 | episode 6: 100% kept (audience 8.82), +27,540 new | $102,710 | $56,490 | $46,219 |
| 7 | 341,599 | 1.06 | episode 7: 100% kept (audience 8.82), +20,631 new | $109,312 | $60,121 | $49,190 |
| 8 | 356,815 | 1.04 | episode 8: 100% kept (audience 8.82), +15,216 new | $114,181 | $62,799 | $51,381 |
| 9 | 368,071 | 1.03 | episode 9: 100% kept (audience 8.82), +11,256 new | $117,783 | $64,781 | $53,002 |
| 10 | 376,392 | 1.02 | episode 10: 100% kept (audience 8.82), +8,321 new | $120,445 | $66,245 | $54,200 |
| 11 | 382,545 | 1.02 | episode 11: 100% kept (audience 8.82), +6,153 new | $122,414 | $67,328 | $55,086 |
| 12 | 387,094 | 1.01 | episode 12: 100% kept (audience 8.82), +4,549 new | $123,870 | $68,129 | $55,742 |
| 13 | 390,458 | 1.01 | episode 13: 100% kept (audience 8.82), +3,364 new | $124,947 | $68,721 | $56,226 |
| 14 | 392,945 | 1.01 | episode 14: 100% kept (audience 8.82), +2,487 new | $125,742 | $69,158 | $56,584 |
| 15 | 394,784 | 1 | episode 15: 100% kept (audience 8.82), +1,839 new | $126,331 | $69,482 | $56,849 |
| 16 | 396,143 | 1 | episode 16: 100% kept (audience 8.82), +1,359 new | $126,766 | $69,721 | $57,045 |
| 17 | 397,148 | 1 | episode 17: 100% kept (audience 8.82), +1,005 new | $127,087 | $69,898 | $57,189 |
| 18 | 397,891 | 1 | episode 18: 100% kept (audience 8.82), +743 new | $127,325 | $70,029 | $57,296 |
| 19 | 398,441 | 1 | episode 19: 100% kept (audience 8.82), +550 new | $127,501 | $70,126 | $57,376 |
| 20 | 398,847 | 1 | episode 20: 100% kept (audience 8.82), +406 new | $127,631 | $70,197 | $57,434 |
| 21 | 139,596 | 0.35 | catch-up viewing (tail week 1/2) | $44,671 | $24,569 | $20,102 |
| 22 | 48,859 | 0.35 | catch-up viewing (tail week 2/2) | $15,635 | $8,599 | $7,036 |
| 23 | 0 | 0 | run ended | $0 | $0 | $0 |

**Progression trace**

- Prestige awards: Prestige +50: meters_all_70 (Wild Signal: Season 3).; Prestige +75: audience_7_5 (Wild Signal: Season 3).; Prestige +85: critic_8_5 (Wild Signal: Season 3).
- IP fans: {"before":27965,"after":52598,"delta":24633}
- Star career: {"fameDelta":14.03,"relDelta":0.75,"grow":0,"level":7,"reasons":"worked together (+); project boosted their career (+)"}
- Distributor trust: Meridian Global earned 147% of its advance back on Wild Signal: Season 3 with strong reviews (step 0.68)
- Rule labels: LOCKED = causal chain, accounting, fallback/no-campaign, thresholds 4.0/9.0, IP fan inheritance. WORKING ASSUMPTION = all formulas' shapes and numbers.

### Dead Legacy — Comedy + Time Travel (new)

Released week 750 (year 14.4) · Distributor: Streaming Original (self-funded, no box office) · Star: Sam Okafor (L8, Fame 45) · IP: Dead Legacy
Joined the streaming catalog after its run (retention value only; no new payouts).

**Financial waterfall** [LOCKED rules; amounts provisional]

| Item | Amount |
|---|---:|
| Advance received (project reserve, not revenue) | $0 |
| Base cost (unavoidable) | −$60,000 |
| Star fee | −$13,137 |
| Marketing campaign | −$20,000 |
| Paid from studio cash (overrun) | $93,137 |
| **Unused advance kept at completion** | $0 |
| Gross from sales (15 weeks) | $0 |
| Distributor royalty (0% of weekly gross) | −$0 |
| **Studio take** | $0 |
| Net for this title (surplus + take − cash overrun; wages are studio-wide, excluded) | $-93,137 |

**Quality trace** [scores are computed, never rolled]

Meters (0–100): Plot 92.35 · Writing 92.96 · Filming 91.21 · Editing 88.55
Inputs: staff points {"plot":791.85,"writing":866.6,"filming":739.8,"editing":488.03}, Star filming points 71.94 (Star family fit 100), studio Comedy level 3 (+9%), era bar x1.58
Base scores: Audience 9.07 / Critic 9.18 · no weak meter
Combo grades: Audience B (x1.06) / Critic F (x0.78) · repetition fatigue x1 · critic saturation x0.9
Before expectations (after combo, weakness, fatigue, saturation; pre-clamp): Audience 9.62 / Critic 6.45 · critic generation 0 (−0.0%, scale) · audience era 0 (−0.0%) · then clamp 0–10 (generation/era 0 = the ones active at game start)
**Final: Audience 9.62 / Critic 6.45 → avg 8.04**

**Opening & viewership trace** [marketing/Fame/reach affect viewers only]

Awareness inputs: base 0.35, marketing 0.55, studioBuzz 0, starFame 0.13, trend 0.1, ipFans 0 → awareness 0.68. Reach cap 220,000 → pool 148,909 → opening 44,673.

| Wk | Viewers | Retention | Driver | Gross | Studio | Distributor |
|---:|---:|---:|---|---:|---:|---:|
| 1 | 44,673 | 1 | opening (aware people watching) | $0 | $0 | $0 |
| 2 | 30,309 | 0.68 | critic 6.45: +2,474 newly aware (buzz) | $0 | $0 | $0 |
| 3 | 18,999 | 0.63 | critic 6.45: +2,823 newly aware (buzz) | $0 | $0 | $0 |
| 4 | 25,982 | 1.37 | audience 9.62: +35,110 newly aware (word of mouth) | $0 | $0 | $0 |
| 5 | 32,152 | 1.24 | audience 9.62: +48,015 newly aware (word of mouth) | $0 | $0 | $0 |
| 6 | 22,637 | 0.7 | audience 9.62: +12,975 newly aware (word of mouth) | $0 | $0 | $0 |
| 7 | 14,997 | 0.66 | audience 9.62: +6,589 newly aware (word of mouth) | $0 | $0 | $0 |
| 8 | 10,037 | 0.67 | audience 9.62: +4,639 newly aware (word of mouth) | $0 | $0 | $0 |
| 9 | 6,705 | 0.67 | audience 9.62: +3,073 newly aware (word of mouth) | $0 | $0 | $0 |
| 10 | 4,481 | 0.67 | audience 9.62: +2,057 newly aware (word of mouth) | $0 | $0 | $0 |
| 11 | 2,995 | 0.67 | audience 9.62: +1,374 newly aware (word of mouth) | $0 | $0 | $0 |
| 12 | 2,001 | 0.67 | audience 9.62: +918 newly aware (word of mouth) | $0 | $0 | $0 |
| 13 | 1,338 | 0.67 | audience 9.62: +614 newly aware (word of mouth) | $0 | $0 | $0 |
| 14 | 894 | 0.67 | audience 9.62: +410 newly aware (word of mouth) | $0 | $0 | $0 |
| 15 | 0 | 0 | audience 9.62: +274 newly aware (word of mouth) | $0 | $0 | $0 |

**Progression trace**

- Prestige awards: Prestige +50: meters_all_70 (Dead Legacy).; Prestige +75: audience_7_5 (Dead Legacy).
- IP fans: {"before":0,"after":10613,"delta":10613}
- Star career: {"fameDelta":9.01,"relDelta":0.75,"grow":0,"level":8,"reasons":"worked together (+); project boosted their career (+)"}
- Rule labels: LOCKED = causal chain, accounting, fallback/no-campaign, thresholds 4.0/9.0, IP fan inheritance. WORKING ASSUMPTION = all formulas' shapes and numbers.

### Broken Pulse — Horror + Sports (new)

Released week 768 (year 14.8) · Distributor: Meridian Global · Star: Sam Okafor (L8, Fame 45) · IP: Broken Pulse
Format: **limited_series**, 6 episodes (one per week) · 298,766 distinct viewers, 1,462,000 viewer-episodes · self-contained: never renews
Joined the streaming catalog after its run (retention value only; no new payouts).

**Financial waterfall** [LOCKED rules; amounts provisional]

| Item | Amount |
|---|---:|
| Advance received (project reserve, not revenue) | $198,000 |
| Base cost (unavoidable) | −$90,000 |
| Star fee | −$13,135 |
| Marketing campaign | −$20,000 |
| Paid from studio cash (overrun) | $0 |
| **Unused advance kept at completion** | $74,865 |
| Gross from sales (10 weeks) | $833,340 |
| Distributor royalty (45% of weekly gross) | −$375,003 |
| **Studio take** | $458,337 |
| Net for this title (surplus + take − cash overrun; wages are studio-wide, excluded) | $533,202 |

**Quality trace** [scores are computed, never rolled]

Meters (0–100): Plot 92.41 · Writing 93.02 · Filming 91.38 · Editing 88.15
Inputs: staff points {"plot":905.96,"writing":991.56,"filming":857.24,"editing":532.6}, Star filming points 83.93 (Star family fit 100), studio Horror level 3 (+9%), era bar x1.59
Base scores: Audience 9.07 / Critic 9.18 · no weak meter
Combo grades: Audience B (x1.06) / Critic B (x1.06) · repetition fatigue x0.95 · critic saturation x1
Before expectations (after combo, weakness, fatigue, saturation; pre-clamp): Audience 9.13 / Critic 9.25 · critic generation 0 (−0.0%, scale) · audience era 0 (−0.0%) · then clamp 0–10 (generation/era 0 = the ones active at game start)
**Final: Audience 9.13 / Critic 9.25 → avg 9.19 (HALL OF FAME)**

**Opening & viewership trace** [marketing/Fame/reach affect viewers only]

Awareness inputs: base 0.35, marketing 0.55, studioBuzz 0, starFame 0.18, trend 0, ipFans 0 → awareness 0.66. Reach cap 400,000 → pool 264,666 → opening 79,400.

| Wk | Viewers | Retention | Driver | Gross | Studio | Distributor |
|---:|---:|---:|---|---:|---:|---:|
| 1 | 132,333 | 1 | episode 1 premiere | $75,430 | $41,486 | $33,943 |
| 2 | 168,522 | 1.27 | episode 2: 100% kept (critic 9.25), +36,189 new | $96,058 | $52,832 | $43,226 |
| 3 | 192,250 | 1.14 | episode 3: 100% kept (critic 9.25), +23,728 new | $109,583 | $60,270 | $49,312 |
| 4 | 223,000 | 1.16 | episode 4: 100% kept (audience 9.13), +30,750 new | $127,110 | $69,911 | $57,200 |
| 5 | 260,699 | 1.17 | episode 5: 100% kept (audience 9.13), +37,699 new | $148,598 | $81,729 | $66,869 |
| 6 | 298,766 | 1.15 | episode 6: 100% kept (audience 9.13), +38,067 new | $170,297 | $93,663 | $76,633 |
| 7 | 119,506 | 0.4 | catch-up viewing (tail week 1/3) | $68,118 | $37,465 | $30,653 |
| 8 | 47,803 | 0.4 | catch-up viewing (tail week 2/3) | $27,248 | $14,986 | $12,261 |
| 9 | 19,121 | 0.4 | catch-up viewing (tail week 3/3) | $10,899 | $5,994 | $4,905 |
| 10 | 0 | 0 | run ended | $0 | $0 | $0 |

**Progression trace**

- Prestige awards: Prestige +50: meters_all_70 (Broken Pulse).; Prestige +75: audience_7_5 (Broken Pulse).; Prestige +85: critic_8_5 (Broken Pulse).; Prestige +200: hall_of_fame (Broken Pulse).
- IP fans: {"before":0,"after":20029,"delta":20029}
- Star career: {"fameDelta":13.95,"relDelta":0.75,"grow":0,"level":8,"reasons":"worked together (+); project boosted their career (+)"}
- Distributor trust: Meridian Global earned 189% of its advance back on Broken Pulse with strong reviews (step 0.75)
- Rule labels: LOCKED = causal chain, accounting, fallback/no-campaign, thresholds 4.0/9.0, IP fan inheritance. WORKING ASSUMPTION = all formulas' shapes and numbers.

## Cash ledger (studio cash only)

| Week | Kind | Amount | Note |
|---:|---|---:|---|
| 0 | start_cash | $40,000 |  |
| 0 | advance_received | $76,000 | advance from Wolf Pictures (project reserve, not revenue) |
| 0 | advance_spent | $-60,000 | base_cost: unavoidable base cost |
| 7 | advance_spent | $-5,621 | star_fee: Bo Hart |
| 13 | advance_spent | $-8,000 | campaign: small |
| 16 | surplus_transfer | $2,379 | unused advance kept at completion (not sales revenue) |
| 16 | advance_received | $137,000 | advance from Wolf Pictures (project reserve, not revenue) |
| 16 | advance_spent | $-90,000 | base_cost: unavoidable base cost |
| 24 | advance_spent | $-3,041 | star_fee: Sam Kerr |
| 31 | advance_spent | $-20,000 | campaign: medium |
| 34 | surplus_transfer | $23,959 | unused advance kept at completion (not sales revenue) |
| 34 | train | $-15,000 | Sam |
| 34 | train | $-15,000 | Alex |
| 34 | advance_received | $132,000 | advance from Wolf Pictures (project reserve, not revenue) |
| 34 | advance_spent | $-90,000 | base_cost: unavoidable base cost |
| 42 | advance_spent | $-26,085 | star_fee: Lee Quinn |
| 49 | advance_spent | $-15,915 | campaign: medium |
| 49 | campaign | $-4,085 | medium |
| 52 | hire | $-20,000 | Gus Novak |
| 52 | hire | $-20,000 | Bo Diaz |
| 52 | advance_received | $154,000 | advance from Wolf Pictures (project reserve, not revenue) |
| 52 | advance_spent | $-90,000 | base_cost: unavoidable base cost |
| 60 | advance_spent | $-5,050 | star_fee: Ari Reyes |
| 67 | advance_spent | $-20,000 | campaign: medium |
| 70 | surplus_transfer | $38,950 | unused advance kept at completion (not sales revenue) |
| 70 | train | $-15,000 | Bo Diaz |
| 70 | train | $-15,000 | Gus Novak |
| 70 | advance_received | $139,000 | advance from Wolf Pictures (project reserve, not revenue) |
| 70 | advance_spent | $-90,000 | base_cost: unavoidable base cost |
| 78 | advance_spent | $-17,993 | star_fee: Alex Sato |
| 85 | advance_spent | $-20,000 | campaign: medium |
| 88 | surplus_transfer | $11,007 | unused advance kept at completion (not sales revenue) |
| 88 | train | $-15,000 | Bo Diaz |
| 88 | train | $-15,000 | Gus Novak |
| 88 | advance_received | $116,000 | advance from Orbit Releasing (project reserve, not revenue) |
| 88 | advance_spent | $-90,000 | base_cost: unavoidable base cost |
| 96 | advance_spent | $-17,718 | star_fee: Alex Sato |
| 103 | advance_spent | $-8,282 | campaign: medium |
| 103 | campaign | $-11,718 | medium |
| 106 | upgrade | $-250,000 | studio capacity 4 -> 6 |
| 106 | hire | $-20,000 | Liv Kerr |
| 106 | hire | $-20,000 | Lee Sato |
| 106 | advance_received | $154,000 | advance from XYZ Network (project reserve, not revenue) |
| 106 | advance_spent | $-90,000 | base_cost: unavoidable base cost |
| 114 | advance_spent | $-20,921 | star_fee: Mo Diaz |
| 121 | advance_spent | $-20,000 | campaign: medium |
| 124 | surplus_transfer | $23,079 | unused advance kept at completion (not sales revenue) |
| 124 | format_unlock | $-150,000 | TV series |
| 124 | train | $-15,000 | Liv Kerr |
| 124 | train | $-15,000 | Lee Sato |
| 124 | advance_received | $176,000 | advance from XYZ Network (project reserve, not revenue) |
| 124 | advance_spent | $-90,000 | base_cost: unavoidable base cost |
| 131 | advance_spent | $-29,775 | star_fee: Alex Sato |
| 137 | advance_spent | $-20,000 | campaign: medium |
| 140 | surplus_transfer | $36,225 | unused advance kept at completion (not sales revenue) |
| 140 | announce | $-15,000 | Iron Legacy season 2 |
| 140 | train | $-15,000 | Liv Kerr |
| 140 | train | $-15,000 | Lee Sato |
| 140 | advance_received | $132,000 | advance from XYZ Network (project reserve, not revenue) |
| 140 | advance_spent | $-60,000 | base_cost: unavoidable base cost |
| 147 | advance_spent | $-29,231 | star_fee: Alex Sato |
| 153 | advance_spent | $-20,000 | campaign: medium |
| 156 | surplus_transfer | $22,769 | unused advance kept at completion (not sales revenue) |
| 156 | train | $-15,000 | Liv Kerr |
| 156 | train | $-15,000 | Lee Sato |
| 156 | advance_received | $201,000 | advance from Meridian Global (project reserve, not revenue) |
| 156 | advance_spent | $-90,000 | base_cost: unavoidable base cost |
| 164 | advance_spent | $-35,930 | star_fee: Alex Sato |
| 171 | advance_spent | $-20,000 | campaign: medium |
| 174 | surplus_transfer | $55,070 | unused advance kept at completion (not sales revenue) |
| 174 | upgrade | $-750,000 | studio capacity 6 -> 8 |
| 174 | hire | $-20,000 | Max Lind |
| 174 | train | $-15,000 | Max Lind |
| 174 | advance_received | $338,000 | advance from XYZ Network (project reserve, not revenue) |
| 174 | advance_spent | $-165,000 | base_cost: unavoidable base cost |
| 185 | advance_spent | $-49,299 | star_fee: Alex Sato |
| 195 | advance_spent | $-20,000 | campaign: medium |
| 200 | surplus_transfer | $103,701 | unused advance kept at completion (not sales revenue) |
| 200 | announce | $-15,000 | Iron Legacy season 3 |
| 200 | train | $-15,000 | Max Lind |
| 200 | train | $-15,000 | Max Lind |
| 200 | advance_received | $138,000 | advance from Meridian Global (project reserve, not revenue) |
| 200 | advance_spent | $-60,000 | base_cost: unavoidable base cost |
| 207 | advance_spent | $-48,337 | star_fee: Alex Sato |
| 213 | advance_spent | $-20,000 | campaign: medium |
| 216 | surplus_transfer | $9,663 | unused advance kept at completion (not sales revenue) |
| 216 | train | $-15,000 | Max Lind |
| 216 | train | $-15,000 | Max Lind |
| 216 | advance_received | $132,000 | advance from Orbit Releasing (project reserve, not revenue) |
| 216 | advance_spent | $-90,000 | base_cost: unavoidable base cost |
| 224 | advance_spent | $-7,678 | star_fee: Kai Grant |
| 231 | advance_spent | $-20,000 | campaign: medium |
| 234 | surplus_transfer | $14,322 | unused advance kept at completion (not sales revenue) |
| 234 | train | $-15,000 | Liv Kerr |
| 234 | train | $-15,000 | Lee Sato |
| 234 | advance_received | $571,000 | advance from Meridian Global (project reserve, not revenue) |
| 234 | advance_spent | $-240,000 | base_cost: unavoidable base cost |
| 249 | advance_spent | $-68,237 | star_fee: Alex Sato |
| 263 | advance_spent | $-20,000 | campaign: medium |
| 270 | surplus_transfer | $242,763 | unused advance kept at completion (not sales revenue) |
| 270 | announce | $-15,000 | Iron Legacy season 4 |
| 270 | train | $-15,000 | Max Lind |
| 270 | train | $-15,000 | Liv Kerr |
| 270 | advance_received | $147,000 | advance from Meridian Global (project reserve, not revenue) |
| 270 | advance_spent | $-60,000 | base_cost: unavoidable base cost |
| 277 | advance_spent | $-13,875 | star_fee: Kai Grant |
| 283 | advance_spent | $-20,000 | campaign: medium |
| 286 | surplus_transfer | $53,125 | unused advance kept at completion (not sales revenue) |
| 286 | train | $-15,000 | Lee Sato |
| 286 | train | $-15,000 | Bo Diaz |
| 286 | advance_received | $213,000 | advance from Meridian Global (project reserve, not revenue) |
| 286 | advance_spent | $-90,000 | base_cost: unavoidable base cost |
| 294 | advance_spent | $-19,277 | star_fee: Ivy Fox |
| 301 | advance_spent | $-20,000 | campaign: medium |
| 304 | surplus_transfer | $83,723 | unused advance kept at completion (not sales revenue) |
| 304 | hire | $-25,000 | Kit Kerr (Software Engineer) |
| 304 | platform_build | $-600,000 | streaming service build |
| 304 | train | $-15,000 | Kit Kerr |
| 304 | train | $-15,000 | Kit Kerr |
| 304 | advance_received | $718,000 | advance from Meridian Global (project reserve, not revenue) |
| 304 | advance_spent | $-240,000 | base_cost: unavoidable base cost |
| 319 | advance_spent | $-67,489 | star_fee: Alex Sato |
| 333 | advance_spent | $-20,000 | campaign: medium |
| 335 | subscriptions | $7,468 | 14935 subscribers |
| 335 | platform_opex | $-10,240 | platform operating cost |
| 336 | subscriptions | $7,435 | 14870 subscribers |
| 336 | platform_opex | $-10,230 | platform operating cost |
| 337 | subscriptions | $7,403 | 14806 subscribers |
| 337 | platform_opex | $-10,221 | platform operating cost |
| 338 | subscriptions | $7,371 | 14742 subscribers |
| 338 | platform_opex | $-10,211 | platform operating cost |
| 339 | subscriptions | $7,339 | 14678 subscribers |
| 339 | platform_opex | $-10,202 | platform operating cost |
| 340 | subscriptions | $7,308 | 14615 subscribers |
| 340 | platform_opex | $-10,192 | platform operating cost |
| 340 | surplus_transfer | $390,511 | unused advance kept at completion (not sales revenue) |
| 340 | announce | $-15,000 | Iron Legacy season 5 |
| 340 | train | $-15,000 | Kit Kerr |
| 340 | train | $-15,000 | Kit Kerr |
| 340 | advance_received | $166,000 | advance from Meridian Global (project reserve, not revenue) |
| 340 | advance_spent | $-60,000 | base_cost: unavoidable base cost |
| 341 | subscriptions | $7,275 | 14550 subscribers |
| 341 | platform_opex | $-10,182 | platform operating cost |
| 342 | subscriptions | $7,243 | 14485 subscribers |
| 342 | platform_opex | $-10,173 | platform operating cost |
| 343 | subscriptions | $7,211 | 14421 subscribers |
| 343 | platform_opex | $-10,163 | platform operating cost |
| 344 | subscriptions | $7,179 | 14357 subscribers |
| 344 | platform_opex | $-10,154 | platform operating cost |
| 345 | subscriptions | $7,147 | 14293 subscribers |
| 345 | platform_opex | $-10,144 | platform operating cost |
| 346 | subscriptions | $7,115 | 14230 subscribers |
| 346 | platform_opex | $-10,134 | platform operating cost |
| 347 | subscriptions | $7,084 | 14167 subscribers |
| 347 | platform_opex | $-10,125 | platform operating cost |
| 347 | advance_spent | $-23,541 | star_fee: Kai Grant |
| 348 | subscriptions | $7,052 | 14104 subscribers |
| 348 | platform_opex | $-10,116 | platform operating cost |
| 349 | subscriptions | $7,021 | 14041 subscribers |
| 349 | platform_opex | $-10,106 | platform operating cost |
| 350 | subscriptions | $6,989 | 13977 subscribers |
| 350 | platform_opex | $-10,097 | platform operating cost |
| 351 | subscriptions | $6,957 | 13913 subscribers |
| 351 | platform_opex | $-10,087 | platform operating cost |
| 352 | subscriptions | $6,925 | 13850 subscribers |
| 352 | platform_opex | $-10,077 | platform operating cost |
| 353 | subscriptions | $6,894 | 13787 subscribers |
| 353 | platform_opex | $-10,068 | platform operating cost |
| 353 | advance_spent | $-20,000 | campaign: medium |
| 354 | subscriptions | $6,862 | 13724 subscribers |
| 354 | platform_opex | $-10,059 | platform operating cost |
| 355 | subscriptions | $6,831 | 13661 subscribers |
| 355 | platform_opex | $-10,049 | platform operating cost |
| 356 | subscriptions | $6,800 | 13599 subscribers |
| 356 | platform_opex | $-10,040 | platform operating cost |
| 356 | surplus_transfer | $62,459 | unused advance kept at completion (not sales revenue) |
| 356 | train | $-15,000 | Kit Kerr |
| 356 | train | $-15,000 | Kit Kerr |
| 356 | base_cost | $-90,000 | unavoidable base cost |
| 357 | subscriptions | $6,769 | 13537 subscribers |
| 357 | platform_opex | $-10,031 | platform operating cost |
| 358 | subscriptions | $9,931 | 19862 subscribers |
| 358 | platform_opex | $-10,979 | platform operating cost |
| 359 | subscriptions | $9,886 | 19771 subscribers |
| 359 | platform_opex | $-10,966 | platform operating cost |
| 360 | subscriptions | $9,841 | 19681 subscribers |
| 360 | platform_opex | $-10,952 | platform operating cost |
| 361 | subscriptions | $9,796 | 19591 subscribers |
| 361 | platform_opex | $-10,939 | platform operating cost |
| 362 | subscriptions | $9,751 | 19502 subscribers |
| 362 | platform_opex | $-10,925 | platform operating cost |
| 363 | subscriptions | $9,707 | 19413 subscribers |
| 363 | platform_opex | $-10,912 | platform operating cost |
| 364 | subscriptions | $9,661 | 19322 subscribers |
| 364 | platform_opex | $-10,898 | platform operating cost |
| 364 | star_fee | $-28,938 | Ivy Fox |
| 365 | subscriptions | $9,616 | 19232 subscribers |
| 365 | platform_opex | $-10,885 | platform operating cost |
| 366 | subscriptions | $9,571 | 19142 subscribers |
| 366 | platform_opex | $-10,871 | platform operating cost |
| 367 | subscriptions | $9,526 | 19052 subscribers |
| 367 | platform_opex | $-10,858 | platform operating cost |
| 368 | subscriptions | $9,482 | 18963 subscribers |
| 368 | platform_opex | $-10,844 | platform operating cost |
| 369 | subscriptions | $9,437 | 18874 subscribers |
| 369 | platform_opex | $-10,831 | platform operating cost |
| 370 | subscriptions | $9,393 | 18786 subscribers |
| 370 | platform_opex | $-10,818 | platform operating cost |
| 371 | subscriptions | $14,791 | 29582 subscribers |
| 371 | platform_opex | $-12,437 | platform operating cost |
| 371 | campaign | $-20,000 | medium |
| 372 | subscriptions | $14,724 | 29447 subscribers |
| 372 | platform_opex | $-12,417 | platform operating cost |
| 373 | subscriptions | $14,657 | 29313 subscribers |
| 373 | platform_opex | $-12,397 | platform operating cost |
| 374 | subscriptions | $14,588 | 29176 subscribers |
| 374 | platform_opex | $-12,376 | platform operating cost |
| 374 | train | $-15,000 | Kit Kerr |
| 374 | train | $-15,000 | Kit Kerr |
| 374 | advance_received | $516,000 | advance from XYZ Network (project reserve, not revenue) |
| 374 | advance_spent | $-240,000 | base_cost: unavoidable base cost |
| 375 | subscriptions | $26,019 | 52037 subscribers |
| 375 | platform_opex | $-15,806 | platform operating cost |
| 376 | subscriptions | $28,059 | 56118 subscribers |
| 376 | platform_opex | $-16,418 | platform operating cost |
| 377 | subscriptions | $29,214 | 58428 subscribers |
| 377 | platform_opex | $-16,764 | platform operating cost |
| 378 | subscriptions | $30,479 | 60957 subscribers |
| 378 | platform_opex | $-17,144 | platform operating cost |
| 379 | subscriptions | $31,860 | 63719 subscribers |
| 379 | platform_opex | $-17,558 | platform operating cost |
| 380 | subscriptions | $33,070 | 66139 subscribers |
| 380 | platform_opex | $-17,921 | platform operating cost |
| 381 | subscriptions | $32,915 | 65829 subscribers |
| 381 | platform_opex | $-17,874 | platform operating cost |
| 382 | subscriptions | $32,757 | 65513 subscribers |
| 382 | platform_opex | $-17,827 | platform operating cost |
| 383 | subscriptions | $32,600 | 65199 subscribers |
| 383 | platform_opex | $-17,780 | platform operating cost |
| 384 | subscriptions | $32,447 | 64894 subscribers |
| 384 | platform_opex | $-17,734 | platform operating cost |
| 385 | subscriptions | $32,295 | 64590 subscribers |
| 385 | platform_opex | $-17,688 | platform operating cost |
| 386 | subscriptions | $32,144 | 64288 subscribers |
| 386 | platform_opex | $-17,643 | platform operating cost |
| 387 | subscriptions | $31,994 | 63987 subscribers |
| 387 | platform_opex | $-17,598 | platform operating cost |
| 388 | subscriptions | $31,844 | 63688 subscribers |
| 388 | platform_opex | $-17,553 | platform operating cost |
| 389 | subscriptions | $31,695 | 63390 subscribers |
| 389 | platform_opex | $-17,508 | platform operating cost |
| 389 | advance_spent | $-67,000 | star_fee: Alex Sato |
| 390 | subscriptions | $31,543 | 63086 subscribers |
| 390 | platform_opex | $-17,463 | platform operating cost |
| 391 | subscriptions | $31,392 | 62783 subscribers |
| 391 | platform_opex | $-17,417 | platform operating cost |
| 392 | subscriptions | $31,241 | 62482 subscribers |
| 392 | platform_opex | $-17,372 | platform operating cost |
| 393 | subscriptions | $31,091 | 62182 subscribers |
| 393 | platform_opex | $-17,327 | platform operating cost |
| 394 | subscriptions | $30,942 | 61884 subscribers |
| 394 | platform_opex | $-17,283 | platform operating cost |
| 395 | subscriptions | $30,794 | 61587 subscribers |
| 395 | platform_opex | $-17,238 | platform operating cost |
| 396 | subscriptions | $30,646 | 61291 subscribers |
| 396 | platform_opex | $-17,194 | platform operating cost |
| 397 | subscriptions | $30,499 | 60997 subscribers |
| 397 | platform_opex | $-17,150 | platform operating cost |
| 398 | subscriptions | $30,349 | 60697 subscribers |
| 398 | platform_opex | $-17,105 | platform operating cost |
| 399 | subscriptions | $30,199 | 60398 subscribers |
| 399 | platform_opex | $-17,060 | platform operating cost |
| 400 | subscriptions | $30,051 | 60101 subscribers |
| 400 | platform_opex | $-17,015 | platform operating cost |
| 401 | subscriptions | $29,903 | 59805 subscribers |
| 401 | platform_opex | $-16,971 | platform operating cost |
| 402 | subscriptions | $29,756 | 59511 subscribers |
| 402 | platform_opex | $-16,927 | platform operating cost |
| 403 | subscriptions | $29,609 | 59218 subscribers |
| 403 | platform_opex | $-16,883 | platform operating cost |
| 403 | advance_spent | $-20,000 | campaign: medium |
| 404 | subscriptions | $29,464 | 58927 subscribers |
| 404 | platform_opex | $-16,839 | platform operating cost |
| 405 | subscriptions | $29,315 | 58630 subscribers |
| 405 | platform_opex | $-16,794 | platform operating cost |
| 406 | subscriptions | $29,168 | 58335 subscribers |
| 406 | platform_opex | $-16,750 | platform operating cost |
| 407 | subscriptions | $29,021 | 58041 subscribers |
| 407 | platform_opex | $-16,706 | platform operating cost |
| 408 | subscriptions | $28,874 | 57748 subscribers |
| 408 | platform_opex | $-16,662 | platform operating cost |
| 409 | subscriptions | $28,729 | 57457 subscribers |
| 409 | platform_opex | $-16,619 | platform operating cost |
| 410 | subscriptions | $28,584 | 57167 subscribers |
| 410 | platform_opex | $-16,575 | platform operating cost |
| 410 | surplus_transfer | $189,000 | unused advance kept at completion (not sales revenue) |
| 410 | announce | $-15,000 | Iron Legacy season 6 |
| 410 | train | $-15,000 | Kit Kerr |
| 410 | train | $-15,000 | Kit Kerr |
| 410 | base_cost | $-60,000 | unavoidable base cost |
| 411 | subscriptions | $28,437 | 56873 subscribers |
| 411 | platform_opex | $-16,531 | platform operating cost |
| 412 | subscriptions | $28,284 | 56568 subscribers |
| 412 | platform_opex | $-16,485 | platform operating cost |
| 413 | subscriptions | $28,130 | 56259 subscribers |
| 413 | platform_opex | $-16,439 | platform operating cost |
| 414 | subscriptions | $27,973 | 55946 subscribers |
| 414 | platform_opex | $-16,392 | platform operating cost |
| 415 | subscriptions | $27,815 | 55630 subscribers |
| 415 | platform_opex | $-16,344 | platform operating cost |
| 416 | subscriptions | $27,655 | 55310 subscribers |
| 416 | platform_opex | $-16,296 | platform operating cost |
| 417 | subscriptions | $27,493 | 54986 subscribers |
| 417 | platform_opex | $-16,248 | platform operating cost |
| 417 | star_fee | $-32,479 | Kai Grant |
| 418 | subscriptions | $27,330 | 54659 subscribers |
| 418 | platform_opex | $-16,199 | platform operating cost |
| 419 | subscriptions | $27,160 | 54320 subscribers |
| 419 | platform_opex | $-16,148 | platform operating cost |
| 420 | subscriptions | $26,989 | 53978 subscribers |
| 420 | platform_opex | $-16,097 | platform operating cost |
| 421 | subscriptions | $26,817 | 53633 subscribers |
| 421 | platform_opex | $-16,045 | platform operating cost |
| 422 | subscriptions | $26,642 | 53284 subscribers |
| 422 | platform_opex | $-15,993 | platform operating cost |
| 423 | subscriptions | $26,466 | 52932 subscribers |
| 423 | platform_opex | $-15,940 | platform operating cost |
| 423 | campaign | $-20,000 | medium |
| 424 | subscriptions | $26,289 | 52577 subscribers |
| 424 | platform_opex | $-15,887 | platform operating cost |
| 425 | subscriptions | $26,110 | 52219 subscribers |
| 425 | platform_opex | $-15,833 | platform operating cost |
| 426 | subscriptions | $25,925 | 51850 subscribers |
| 426 | platform_opex | $-15,777 | platform operating cost |
| 426 | train | $-15,000 | Max Lind |
| 426 | train | $-15,000 | Gus Novak |
| 426 | advance_received | $229,000 | advance from Meridian Global (project reserve, not revenue) |
| 426 | advance_spent | $-90,000 | base_cost: unavoidable base cost |
| 427 | subscriptions | $31,029 | 62058 subscribers |
| 427 | platform_opex | $-17,309 | platform operating cost |
| 428 | subscriptions | $35,455 | 70910 subscribers |
| 428 | platform_opex | $-18,636 | platform operating cost |
| 429 | subscriptions | $36,880 | 73760 subscribers |
| 429 | platform_opex | $-19,064 | platform operating cost |
| 430 | subscriptions | $38,268 | 76536 subscribers |
| 430 | platform_opex | $-19,480 | platform operating cost |
| 431 | subscriptions | $39,559 | 79118 subscribers |
| 431 | platform_opex | $-19,868 | platform operating cost |
| 432 | subscriptions | $40,500 | 81000 subscribers |
| 432 | platform_opex | $-20,150 | platform operating cost |
| 433 | subscriptions | $41,018 | 82035 subscribers |
| 433 | platform_opex | $-20,305 | platform operating cost |
| 434 | subscriptions | $41,292 | 82584 subscribers |
| 434 | platform_opex | $-20,388 | platform operating cost |
| 434 | advance_spent | $-33,917 | star_fee: Ivy Fox |
| 435 | subscriptions | $41,406 | 82811 subscribers |
| 435 | platform_opex | $-20,422 | platform operating cost |
| 436 | subscriptions | $41,413 | 82825 subscribers |
| 436 | platform_opex | $-20,424 | platform operating cost |
| 437 | subscriptions | $41,348 | 82695 subscribers |
| 437 | platform_opex | $-20,404 | platform operating cost |
| 438 | subscriptions | $41,234 | 82468 subscribers |
| 438 | platform_opex | $-20,370 | platform operating cost |
| 439 | subscriptions | $41,088 | 82175 subscribers |
| 439 | platform_opex | $-20,326 | platform operating cost |
| 440 | subscriptions | $40,914 | 81827 subscribers |
| 440 | platform_opex | $-20,274 | platform operating cost |
| 441 | subscriptions | $40,698 | 81395 subscribers |
| 441 | platform_opex | $-20,209 | platform operating cost |
| 441 | advance_spent | $-20,000 | campaign: medium |
| 442 | subscriptions | $40,483 | 80965 subscribers |
| 442 | platform_opex | $-20,145 | platform operating cost |
| 443 | subscriptions | $40,264 | 80528 subscribers |
| 443 | platform_opex | $-20,079 | platform operating cost |
| 444 | subscriptions | $40,047 | 80093 subscribers |
| 444 | platform_opex | $-20,014 | platform operating cost |
| 444 | surplus_transfer | $85,083 | unused advance kept at completion (not sales revenue) |
| 444 | train | $-15,000 | Liv Kerr |
| 444 | train | $-15,000 | Sam |
| 444 | base_cost | $-315,000 | unavoidable base cost |
| 445 | subscriptions | $39,830 | 79660 subscribers |
| 445 | platform_opex | $-19,949 | platform operating cost |
| 446 | subscriptions | $39,615 | 79230 subscribers |
| 446 | platform_opex | $-19,884 | platform operating cost |
| 447 | subscriptions | $39,401 | 78802 subscribers |
| 447 | platform_opex | $-19,820 | platform operating cost |
| 448 | subscriptions | $39,188 | 78376 subscribers |
| 448 | platform_opex | $-19,756 | platform operating cost |
| 449 | subscriptions | $38,972 | 77943 subscribers |
| 449 | platform_opex | $-19,691 | platform operating cost |
| 450 | subscriptions | $38,757 | 77513 subscribers |
| 450 | platform_opex | $-19,627 | platform operating cost |
| 451 | subscriptions | $38,543 | 77085 subscribers |
| 451 | platform_opex | $-19,563 | platform operating cost |
| 452 | subscriptions | $38,330 | 76659 subscribers |
| 452 | platform_opex | $-19,499 | platform operating cost |
| 453 | subscriptions | $38,118 | 76236 subscribers |
| 453 | platform_opex | $-19,435 | platform operating cost |
| 454 | subscriptions | $39,624 | 79247 subscribers |
| 454 | platform_opex | $-19,887 | platform operating cost |
| 455 | subscriptions | $39,415 | 78829 subscribers |
| 455 | platform_opex | $-19,824 | platform operating cost |
| 456 | subscriptions | $39,202 | 78403 subscribers |
| 456 | platform_opex | $-19,760 | platform operating cost |
| 457 | subscriptions | $38,990 | 77980 subscribers |
| 457 | platform_opex | $-19,697 | platform operating cost |
| 458 | subscriptions | $38,780 | 77559 subscribers |
| 458 | platform_opex | $-19,634 | platform operating cost |
| 459 | subscriptions | $38,570 | 77140 subscribers |
| 459 | platform_opex | $-19,571 | platform operating cost |
| 460 | subscriptions | $38,362 | 76723 subscribers |
| 460 | platform_opex | $-19,508 | platform operating cost |
| 461 | subscriptions | $38,155 | 76309 subscribers |
| 461 | platform_opex | $-19,446 | platform operating cost |
| 462 | subscriptions | $37,949 | 75897 subscribers |
| 462 | platform_opex | $-19,385 | platform operating cost |
| 463 | subscriptions | $37,739 | 75478 subscribers |
| 463 | platform_opex | $-19,322 | platform operating cost |
| 463 | star_fee | $-66,401 | Alex Sato |
| 464 | subscriptions | $37,531 | 75061 subscribers |
| 464 | platform_opex | $-19,259 | platform operating cost |
| 465 | subscriptions | $37,324 | 74647 subscribers |
| 465 | platform_opex | $-19,197 | platform operating cost |
| 466 | subscriptions | $37,118 | 74235 subscribers |
| 466 | platform_opex | $-19,135 | platform operating cost |
| 467 | subscriptions | $36,913 | 73825 subscribers |
| 467 | platform_opex | $-19,074 | platform operating cost |
| 468 | subscriptions | $36,709 | 73417 subscribers |
| 468 | platform_opex | $-19,013 | platform operating cost |
| 469 | subscriptions | $36,502 | 73003 subscribers |
| 469 | platform_opex | $-18,950 | platform operating cost |
| 470 | subscriptions | $36,296 | 72591 subscribers |
| 470 | platform_opex | $-18,889 | platform operating cost |
| 471 | subscriptions | $36,091 | 72182 subscribers |
| 471 | platform_opex | $-18,827 | platform operating cost |
| 472 | subscriptions | $35,888 | 71775 subscribers |
| 472 | platform_opex | $-18,766 | platform operating cost |
| 473 | subscriptions | $35,685 | 71370 subscribers |
| 473 | platform_opex | $-18,705 | platform operating cost |
| 474 | subscriptions | $35,484 | 70967 subscribers |
| 474 | platform_opex | $-18,645 | platform operating cost |
| 475 | subscriptions | $35,284 | 70567 subscribers |
| 475 | platform_opex | $-18,585 | platform operating cost |
| 476 | subscriptions | $35,081 | 70161 subscribers |
| 476 | platform_opex | $-18,524 | platform operating cost |
| 477 | subscriptions | $34,879 | 69757 subscribers |
| 477 | platform_opex | $-18,464 | platform operating cost |
| 478 | subscriptions | $34,678 | 69355 subscribers |
| 478 | platform_opex | $-18,403 | platform operating cost |
| 479 | subscriptions | $34,478 | 68956 subscribers |
| 479 | platform_opex | $-18,343 | platform operating cost |
| 480 | subscriptions | $34,280 | 68559 subscribers |
| 480 | platform_opex | $-18,284 | platform operating cost |
| 481 | subscriptions | $34,079 | 68157 subscribers |
| 481 | platform_opex | $-18,224 | platform operating cost |
| 481 | campaign | $-20,000 | medium |
| 482 | subscriptions | $33,871 | 67741 subscribers |
| 482 | platform_opex | $-18,161 | platform operating cost |
| 483 | subscriptions | $33,660 | 67320 subscribers |
| 483 | platform_opex | $-18,098 | platform operating cost |
| 484 | subscriptions | $33,447 | 66894 subscribers |
| 484 | platform_opex | $-18,034 | platform operating cost |
| 485 | subscriptions | $33,232 | 66463 subscribers |
| 485 | platform_opex | $-17,969 | platform operating cost |
| 486 | subscriptions | $33,014 | 66027 subscribers |
| 486 | platform_opex | $-17,904 | platform operating cost |
| 487 | subscriptions | $32,793 | 65586 subscribers |
| 487 | platform_opex | $-17,838 | platform operating cost |
| 488 | subscriptions | $32,571 | 65141 subscribers |
| 488 | platform_opex | $-17,771 | platform operating cost |
| 489 | subscriptions | $32,342 | 64683 subscribers |
| 489 | platform_opex | $-17,702 | platform operating cost |
| 490 | subscriptions | $32,110 | 64220 subscribers |
| 490 | platform_opex | $-17,633 | platform operating cost |
| 491 | subscriptions | $31,877 | 63753 subscribers |
| 491 | platform_opex | $-17,563 | platform operating cost |
| 491 | announce | $-15,000 | Iron Legacy season 7 |
| 491 | train | $-15,000 | Lee Sato |
| 491 | train | $-15,000 | Alex |
| 491 | advance_received | $112,000 | advance from XYZ Network (project reserve, not revenue) |
| 491 | advance_spent | $-60,000 | base_cost: unavoidable base cost |
| 492 | subscriptions | $39,384 | 78767 subscribers |
| 492 | platform_opex | $-19,815 | platform operating cost |
| 493 | subscriptions | $40,413 | 80826 subscribers |
| 493 | platform_opex | $-20,124 | platform operating cost |
| 494 | subscriptions | $40,933 | 81865 subscribers |
| 494 | platform_opex | $-20,280 | platform operating cost |
| 495 | subscriptions | $41,364 | 82727 subscribers |
| 495 | platform_opex | $-20,409 | platform operating cost |
| 496 | subscriptions | $41,735 | 83470 subscribers |
| 496 | platform_opex | $-20,520 | platform operating cost |
| 497 | subscriptions | $42,076 | 84151 subscribers |
| 497 | platform_opex | $-20,623 | platform operating cost |
| 498 | subscriptions | $42,409 | 84818 subscribers |
| 498 | platform_opex | $-20,723 | platform operating cost |
| 498 | advance_spent | $-36,526 | star_fee: Kai Grant |
| 499 | subscriptions | $42,720 | 85439 subscribers |
| 499 | platform_opex | $-20,816 | platform operating cost |
| 500 | subscriptions | $42,868 | 85736 subscribers |
| 500 | platform_opex | $-20,860 | platform operating cost |
| 501 | subscriptions | $42,919 | 85837 subscribers |
| 501 | platform_opex | $-20,876 | platform operating cost |
| 502 | subscriptions | $42,894 | 85787 subscribers |
| 502 | platform_opex | $-20,868 | platform operating cost |
| 503 | subscriptions | $42,813 | 85626 subscribers |
| 503 | platform_opex | $-20,844 | platform operating cost |
| 504 | subscriptions | $42,691 | 85381 subscribers |
| 504 | platform_opex | $-20,807 | platform operating cost |
| 504 | advance_spent | $-15,474 | campaign: medium |
| 504 | campaign | $-4,526 | medium |
| 505 | subscriptions | $42,537 | 85073 subscribers |
| 505 | platform_opex | $-20,761 | platform operating cost |
| 506 | subscriptions | $42,359 | 84718 subscribers |
| 506 | platform_opex | $-20,708 | platform operating cost |
| 507 | subscriptions | $42,164 | 84327 subscribers |
| 507 | platform_opex | $-20,649 | platform operating cost |
| 507 | train | $-15,000 | Bo Diaz |
| 507 | train | $-15,000 | Kit Kerr |
| 507 | base_cost | $-90,000 | unavoidable base cost |
| 508 | subscriptions | $41,950 | 83899 subscribers |
| 508 | platform_opex | $-20,585 | platform operating cost |
| 509 | subscriptions | $41,726 | 83452 subscribers |
| 509 | platform_opex | $-20,518 | platform operating cost |
| 510 | subscriptions | $41,495 | 82990 subscribers |
| 510 | platform_opex | $-20,448 | platform operating cost |
| 511 | subscriptions | $41,259 | 82518 subscribers |
| 511 | platform_opex | $-20,378 | platform operating cost |
| 512 | subscriptions | $41,002 | 82003 subscribers |
| 512 | platform_opex | $-20,300 | platform operating cost |
| 513 | subscriptions | $40,746 | 81491 subscribers |
| 513 | platform_opex | $-20,224 | platform operating cost |
| 514 | subscriptions | $40,496 | 80992 subscribers |
| 514 | platform_opex | $-20,149 | platform operating cost |
| 515 | subscriptions | $40,248 | 80496 subscribers |
| 515 | platform_opex | $-20,074 | platform operating cost |
| 515 | star_fee | $-20,644 | Lee Park |
| 516 | subscriptions | $40,002 | 80003 subscribers |
| 516 | platform_opex | $-20,000 | platform operating cost |
| 517 | subscriptions | $39,757 | 79513 subscribers |
| 517 | platform_opex | $-19,927 | platform operating cost |
| 518 | subscriptions | $39,513 | 79026 subscribers |
| 518 | platform_opex | $-19,854 | platform operating cost |
| 519 | subscriptions | $39,271 | 78542 subscribers |
| 519 | platform_opex | $-19,781 | platform operating cost |
| 520 | subscriptions | $39,026 | 78052 subscribers |
| 520 | platform_opex | $-19,708 | platform operating cost |
| 521 | subscriptions | $38,783 | 77565 subscribers |
| 521 | platform_opex | $-19,635 | platform operating cost |
| 522 | subscriptions | $40,486 | 80971 subscribers |
| 522 | platform_opex | $-20,146 | platform operating cost |
| 522 | campaign | $-20,000 | medium |
| 523 | subscriptions | $40,248 | 80495 subscribers |
| 523 | platform_opex | $-20,074 | platform operating cost |
| 524 | subscriptions | $40,011 | 80022 subscribers |
| 524 | platform_opex | $-20,003 | platform operating cost |
| 525 | subscriptions | $39,776 | 79551 subscribers |
| 525 | platform_opex | $-19,933 | platform operating cost |
| 525 | train | $-15,000 | Max Lind |
| 525 | train | $-15,000 | Gus Novak |
| 525 | advance_received | $481,000 | advance from Orbit Releasing (project reserve, not revenue) |
| 525 | advance_spent | $-315,000 | base_cost: unavoidable base cost |
| 526 | subscriptions | $43,840 | 87680 subscribers |
| 526 | platform_opex | $-21,152 | platform operating cost |
| 527 | subscriptions | $44,409 | 88818 subscribers |
| 527 | platform_opex | $-21,323 | platform operating cost |
| 528 | subscriptions | $44,663 | 89325 subscribers |
| 528 | platform_opex | $-21,399 | platform operating cost |
| 529 | subscriptions | $45,118 | 90236 subscribers |
| 529 | platform_opex | $-21,535 | platform operating cost |
| 530 | subscriptions | $45,695 | 91389 subscribers |
| 530 | platform_opex | $-21,708 | platform operating cost |
| 531 | subscriptions | $46,366 | 92731 subscribers |
| 531 | platform_opex | $-21,910 | platform operating cost |
| 532 | subscriptions | $46,088 | 92175 subscribers |
| 532 | platform_opex | $-21,826 | platform operating cost |
| 533 | subscriptions | $45,811 | 91622 subscribers |
| 533 | platform_opex | $-21,743 | platform operating cost |
| 534 | subscriptions | $45,536 | 91072 subscribers |
| 534 | platform_opex | $-21,661 | platform operating cost |
| 535 | subscriptions | $45,274 | 90547 subscribers |
| 535 | platform_opex | $-21,582 | platform operating cost |
| 536 | subscriptions | $45,013 | 90025 subscribers |
| 536 | platform_opex | $-21,504 | platform operating cost |
| 537 | subscriptions | $44,753 | 89506 subscribers |
| 537 | platform_opex | $-21,426 | platform operating cost |
| 538 | subscriptions | $44,490 | 88980 subscribers |
| 538 | platform_opex | $-21,347 | platform operating cost |
| 539 | subscriptions | $44,229 | 88457 subscribers |
| 539 | platform_opex | $-21,269 | platform operating cost |
| 540 | subscriptions | $43,969 | 87937 subscribers |
| 540 | platform_opex | $-21,191 | platform operating cost |
| 541 | subscriptions | $43,710 | 87420 subscribers |
| 541 | platform_opex | $-21,113 | platform operating cost |
| 542 | subscriptions | $43,453 | 86906 subscribers |
| 542 | platform_opex | $-21,036 | platform operating cost |
| 543 | subscriptions | $43,198 | 86395 subscribers |
| 543 | platform_opex | $-20,959 | platform operating cost |
| 544 | subscriptions | $42,944 | 85887 subscribers |
| 544 | platform_opex | $-20,883 | platform operating cost |
| 544 | advance_spent | $-25,668 | star_fee: Lee Park |
| 545 | subscriptions | $42,691 | 85382 subscribers |
| 545 | platform_opex | $-20,807 | platform operating cost |
| 546 | subscriptions | $42,440 | 84880 subscribers |
| 546 | platform_opex | $-20,732 | platform operating cost |
| 547 | subscriptions | $42,191 | 84381 subscribers |
| 547 | platform_opex | $-20,657 | platform operating cost |
| 548 | subscriptions | $41,943 | 83885 subscribers |
| 548 | platform_opex | $-20,583 | platform operating cost |
| 549 | subscriptions | $41,691 | 83382 subscribers |
| 549 | platform_opex | $-20,507 | platform operating cost |
| 550 | subscriptions | $41,441 | 82882 subscribers |
| 550 | platform_opex | $-20,432 | platform operating cost |
| 551 | subscriptions | $41,193 | 82385 subscribers |
| 551 | platform_opex | $-20,358 | platform operating cost |
| 552 | subscriptions | $40,946 | 81891 subscribers |
| 552 | platform_opex | $-20,284 | platform operating cost |
| 553 | subscriptions | $40,700 | 81400 subscribers |
| 553 | platform_opex | $-20,210 | platform operating cost |
| 554 | subscriptions | $40,456 | 80912 subscribers |
| 554 | platform_opex | $-20,137 | platform operating cost |
| 555 | subscriptions | $40,214 | 80427 subscribers |
| 555 | platform_opex | $-20,064 | platform operating cost |
| 556 | subscriptions | $39,972 | 79944 subscribers |
| 556 | platform_opex | $-19,992 | platform operating cost |
| 557 | subscriptions | $39,732 | 79464 subscribers |
| 557 | platform_opex | $-19,920 | platform operating cost |
| 558 | subscriptions | $39,494 | 78987 subscribers |
| 558 | platform_opex | $-19,848 | platform operating cost |
| 559 | subscriptions | $39,257 | 78513 subscribers |
| 559 | platform_opex | $-19,777 | platform operating cost |
| 560 | subscriptions | $39,017 | 78033 subscribers |
| 560 | platform_opex | $-19,705 | platform operating cost |
| 561 | subscriptions | $38,778 | 77555 subscribers |
| 561 | platform_opex | $-19,633 | platform operating cost |
| 562 | subscriptions | $38,536 | 77071 subscribers |
| 562 | platform_opex | $-19,561 | platform operating cost |
| 562 | advance_spent | $-20,000 | campaign: medium |
| 563 | subscriptions | $38,291 | 76581 subscribers |
| 563 | platform_opex | $-19,487 | platform operating cost |
| 564 | subscriptions | $38,043 | 76085 subscribers |
| 564 | platform_opex | $-19,413 | platform operating cost |
| 565 | subscriptions | $37,792 | 75584 subscribers |
| 565 | platform_opex | $-19,338 | platform operating cost |
| 566 | subscriptions | $37,539 | 75077 subscribers |
| 566 | platform_opex | $-19,262 | platform operating cost |
| 567 | subscriptions | $37,283 | 74565 subscribers |
| 567 | platform_opex | $-19,185 | platform operating cost |
| 568 | subscriptions | $37,024 | 74047 subscribers |
| 568 | platform_opex | $-19,107 | platform operating cost |
| 569 | subscriptions | $36,762 | 73524 subscribers |
| 569 | platform_opex | $-19,029 | platform operating cost |
| 570 | subscriptions | $36,498 | 72996 subscribers |
| 570 | platform_opex | $-18,949 | platform operating cost |
| 571 | subscriptions | $36,227 | 72453 subscribers |
| 571 | platform_opex | $-18,868 | platform operating cost |
| 572 | subscriptions | $35,953 | 71905 subscribers |
| 572 | platform_opex | $-18,786 | platform operating cost |
| 572 | surplus_transfer | $120,332 | unused advance kept at completion (not sales revenue) |
| 572 | announce | $-15,000 | Wild Signal season 2 |
| 572 | train | $-15,000 | Liv Kerr |
| 572 | train | $-15,000 | Sam |
| 572 | base_cost | $-60,000 | unavoidable base cost |
| 573 | subscriptions | $35,677 | 71353 subscribers |
| 573 | platform_opex | $-18,703 | platform operating cost |
| 574 | subscriptions | $35,398 | 70796 subscribers |
| 574 | platform_opex | $-18,619 | platform operating cost |
| 575 | subscriptions | $35,118 | 70235 subscribers |
| 575 | platform_opex | $-18,535 | platform operating cost |
| 576 | subscriptions | $34,835 | 69670 subscribers |
| 576 | platform_opex | $-18,450 | platform operating cost |
| 577 | subscriptions | $34,551 | 69101 subscribers |
| 577 | platform_opex | $-18,365 | platform operating cost |
| 578 | subscriptions | $34,265 | 68529 subscribers |
| 578 | platform_opex | $-18,279 | platform operating cost |
| 579 | subscriptions | $33,977 | 67953 subscribers |
| 579 | platform_opex | $-18,193 | platform operating cost |
| 579 | star_fee | $-18,358 | Jay Imai |
| 580 | subscriptions | $33,687 | 67374 subscribers |
| 580 | platform_opex | $-18,106 | platform operating cost |
| 581 | subscriptions | $33,396 | 66792 subscribers |
| 581 | platform_opex | $-18,019 | platform operating cost |
| 582 | subscriptions | $33,104 | 66207 subscribers |
| 582 | platform_opex | $-17,931 | platform operating cost |
| 583 | subscriptions | $32,804 | 65608 subscribers |
| 583 | platform_opex | $-17,841 | platform operating cost |
| 584 | subscriptions | $32,503 | 65006 subscribers |
| 584 | platform_opex | $-17,751 | platform operating cost |
| 585 | subscriptions | $32,201 | 64402 subscribers |
| 585 | platform_opex | $-17,660 | platform operating cost |
| 585 | campaign | $-20,000 | medium |
| 586 | subscriptions | $31,898 | 63795 subscribers |
| 586 | platform_opex | $-17,569 | platform operating cost |
| 587 | subscriptions | $31,593 | 63186 subscribers |
| 587 | platform_opex | $-17,478 | platform operating cost |
| 588 | subscriptions | $31,288 | 62575 subscribers |
| 588 | platform_opex | $-17,386 | platform operating cost |
| 588 | train | $-15,000 | Lee Sato |
| 588 | train | $-15,000 | Alex |
| 588 | advance_received | $238,000 | advance from Meridian Global (project reserve, not revenue) |
| 588 | advance_spent | $-90,000 | base_cost: unavoidable base cost |
| 589 | subscriptions | $35,343 | 70685 subscribers |
| 589 | platform_opex | $-18,603 | platform operating cost |
| 590 | subscriptions | $37,668 | 75336 subscribers |
| 590 | platform_opex | $-19,300 | platform operating cost |
| 591 | subscriptions | $38,855 | 77710 subscribers |
| 591 | platform_opex | $-19,656 | platform operating cost |
| 592 | subscriptions | $40,021 | 80041 subscribers |
| 592 | platform_opex | $-20,006 | platform operating cost |
| 593 | subscriptions | $41,109 | 82218 subscribers |
| 593 | platform_opex | $-20,333 | platform operating cost |
| 594 | subscriptions | $42,007 | 84013 subscribers |
| 594 | platform_opex | $-20,602 | platform operating cost |
| 595 | subscriptions | $44,129 | 88257 subscribers |
| 595 | platform_opex | $-21,239 | platform operating cost |
| 596 | subscriptions | $44,326 | 88652 subscribers |
| 596 | platform_opex | $-21,298 | platform operating cost |
| 596 | advance_spent | $-18,346 | star_fee: Jay Imai |
| 597 | subscriptions | $44,379 | 88758 subscribers |
| 597 | platform_opex | $-21,314 | platform operating cost |
| 598 | subscriptions | $44,337 | 88674 subscribers |
| 598 | platform_opex | $-21,301 | platform operating cost |
| 599 | subscriptions | $44,231 | 88461 subscribers |
| 599 | platform_opex | $-21,269 | platform operating cost |
| 600 | subscriptions | $44,081 | 88162 subscribers |
| 600 | platform_opex | $-21,224 | platform operating cost |
| 601 | subscriptions | $43,902 | 87803 subscribers |
| 601 | platform_opex | $-21,170 | platform operating cost |
| 602 | subscriptions | $43,702 | 87404 subscribers |
| 602 | platform_opex | $-21,111 | platform operating cost |
| 603 | subscriptions | $43,461 | 86922 subscribers |
| 603 | platform_opex | $-21,038 | platform operating cost |
| 603 | advance_spent | $-20,000 | campaign: medium |
| 604 | subscriptions | $43,221 | 86442 subscribers |
| 604 | platform_opex | $-20,966 | platform operating cost |
| 605 | subscriptions | $42,983 | 85965 subscribers |
| 605 | platform_opex | $-20,895 | platform operating cost |
| 606 | subscriptions | $42,745 | 85490 subscribers |
| 606 | platform_opex | $-20,823 | platform operating cost |
| 606 | surplus_transfer | $109,654 | unused advance kept at completion (not sales revenue) |
| 606 | train | $-15,000 | Bo Diaz |
| 606 | train | $-15,000 | Kit Kerr |
| 606 | base_cost | $-315,000 | unavoidable base cost |
| 607 | subscriptions | $42,509 | 85018 subscribers |
| 607 | platform_opex | $-20,753 | platform operating cost |
| 608 | subscriptions | $42,275 | 84549 subscribers |
| 608 | platform_opex | $-20,682 | platform operating cost |
| 609 | subscriptions | $42,041 | 84082 subscribers |
| 609 | platform_opex | $-20,612 | platform operating cost |
| 610 | subscriptions | $41,809 | 83618 subscribers |
| 610 | platform_opex | $-20,543 | platform operating cost |
| 611 | subscriptions | $41,578 | 83156 subscribers |
| 611 | platform_opex | $-20,473 | platform operating cost |
| 612 | subscriptions | $41,344 | 82687 subscribers |
| 612 | platform_opex | $-20,403 | platform operating cost |
| 613 | subscriptions | $41,111 | 82221 subscribers |
| 613 | platform_opex | $-20,333 | platform operating cost |
| 614 | subscriptions | $40,879 | 81757 subscribers |
| 614 | platform_opex | $-20,264 | platform operating cost |
| 615 | subscriptions | $40,648 | 81296 subscribers |
| 615 | platform_opex | $-20,194 | platform operating cost |
| 616 | subscriptions | $42,120 | 84240 subscribers |
| 616 | platform_opex | $-20,636 | platform operating cost |
| 617 | subscriptions | $41,908 | 83815 subscribers |
| 617 | platform_opex | $-20,572 | platform operating cost |
| 618 | subscriptions | $41,697 | 83393 subscribers |
| 618 | platform_opex | $-20,509 | platform operating cost |
| 619 | subscriptions | $41,487 | 82973 subscribers |
| 619 | platform_opex | $-20,446 | platform operating cost |
| 620 | subscriptions | $41,278 | 82555 subscribers |
| 620 | platform_opex | $-20,383 | platform operating cost |
| 621 | subscriptions | $41,070 | 82139 subscribers |
| 621 | platform_opex | $-20,321 | platform operating cost |
| 622 | subscriptions | $40,863 | 81725 subscribers |
| 622 | platform_opex | $-20,259 | platform operating cost |
| 623 | subscriptions | $40,657 | 81313 subscribers |
| 623 | platform_opex | $-20,197 | platform operating cost |
| 624 | subscriptions | $40,447 | 80893 subscribers |
| 624 | platform_opex | $-20,134 | platform operating cost |
| 625 | subscriptions | $40,238 | 80476 subscribers |
| 625 | platform_opex | $-20,071 | platform operating cost |
| 625 | star_fee | $-35,232 | Lee Park |
| 626 | subscriptions | $40,031 | 80061 subscribers |
| 626 | platform_opex | $-20,009 | platform operating cost |
| 627 | subscriptions | $39,824 | 79648 subscribers |
| 627 | platform_opex | $-19,947 | platform operating cost |
| 628 | subscriptions | $39,619 | 79237 subscribers |
| 628 | platform_opex | $-19,886 | platform operating cost |
| 629 | subscriptions | $39,414 | 78828 subscribers |
| 629 | platform_opex | $-19,824 | platform operating cost |
| 630 | subscriptions | $39,211 | 78421 subscribers |
| 630 | platform_opex | $-19,763 | platform operating cost |
| 631 | subscriptions | $39,008 | 78016 subscribers |
| 631 | platform_opex | $-19,702 | platform operating cost |
| 632 | subscriptions | $38,807 | 77613 subscribers |
| 632 | platform_opex | $-19,642 | platform operating cost |
| 633 | subscriptions | $38,607 | 77213 subscribers |
| 633 | platform_opex | $-19,582 | platform operating cost |
| 634 | subscriptions | $38,403 | 76805 subscribers |
| 634 | platform_opex | $-19,521 | platform operating cost |
| 635 | subscriptions | $38,200 | 76399 subscribers |
| 635 | platform_opex | $-19,460 | platform operating cost |
| 636 | subscriptions | $37,998 | 75996 subscribers |
| 636 | platform_opex | $-19,399 | platform operating cost |
| 637 | subscriptions | $37,798 | 75595 subscribers |
| 637 | platform_opex | $-19,339 | platform operating cost |
| 638 | subscriptions | $37,598 | 75196 subscribers |
| 638 | platform_opex | $-19,279 | platform operating cost |
| 639 | subscriptions | $37,400 | 74799 subscribers |
| 639 | platform_opex | $-19,220 | platform operating cost |
| 640 | subscriptions | $37,202 | 74404 subscribers |
| 640 | platform_opex | $-19,161 | platform operating cost |
| 641 | subscriptions | $37,006 | 74011 subscribers |
| 641 | platform_opex | $-19,102 | platform operating cost |
| 642 | subscriptions | $36,810 | 73620 subscribers |
| 642 | platform_opex | $-19,043 | platform operating cost |
| 643 | subscriptions | $36,612 | 73224 subscribers |
| 643 | platform_opex | $-18,984 | platform operating cost |
| 643 | campaign | $-20,000 | medium |
| 644 | subscriptions | $36,412 | 72823 subscribers |
| 644 | platform_opex | $-18,923 | platform operating cost |
| 645 | subscriptions | $36,204 | 72407 subscribers |
| 645 | platform_opex | $-18,861 | platform operating cost |
| 646 | subscriptions | $35,993 | 71986 subscribers |
| 646 | platform_opex | $-18,798 | platform operating cost |
| 647 | subscriptions | $35,780 | 71560 subscribers |
| 647 | platform_opex | $-18,734 | platform operating cost |
| 648 | subscriptions | $35,565 | 71129 subscribers |
| 648 | platform_opex | $-18,669 | platform operating cost |
| 649 | subscriptions | $35,347 | 70693 subscribers |
| 649 | platform_opex | $-18,604 | platform operating cost |
| 650 | subscriptions | $35,127 | 70253 subscribers |
| 650 | platform_opex | $-18,538 | platform operating cost |
| 651 | subscriptions | $34,904 | 69808 subscribers |
| 651 | platform_opex | $-18,471 | platform operating cost |
| 652 | subscriptions | $34,680 | 69359 subscribers |
| 652 | platform_opex | $-18,404 | platform operating cost |
| 653 | subscriptions | $34,453 | 68905 subscribers |
| 653 | platform_opex | $-18,336 | platform operating cost |
| 653 | announce | $-15,000 | Wild Signal season 3 |
| 653 | train | $-15,000 | Max Lind |
| 653 | train | $-15,000 | Gus Novak |
| 653 | advance_received | $136,000 | advance from Meridian Global (project reserve, not revenue) |
| 653 | advance_spent | $-60,000 | base_cost: unavoidable base cost |
| 654 | subscriptions | $40,336 | 80672 subscribers |
| 654 | platform_opex | $-20,101 | platform operating cost |
| 655 | subscriptions | $41,356 | 82712 subscribers |
| 655 | platform_opex | $-20,407 | platform operating cost |
| 656 | subscriptions | $41,881 | 83762 subscribers |
| 656 | platform_opex | $-20,564 | platform operating cost |
| 657 | subscriptions | $42,602 | 85203 subscribers |
| 657 | platform_opex | $-20,780 | platform operating cost |
| 658 | subscriptions | $43,484 | 86968 subscribers |
| 658 | platform_opex | $-21,045 | platform operating cost |
| 659 | subscriptions | $44,043 | 88085 subscribers |
| 659 | platform_opex | $-21,213 | platform operating cost |
| 660 | subscriptions | $44,366 | 88732 subscribers |
| 660 | platform_opex | $-21,310 | platform operating cost |
| 660 | advance_spent | $-23,762 | star_fee: Mo Diaz |
| 661 | subscriptions | $44,531 | 89062 subscribers |
| 661 | platform_opex | $-21,359 | platform operating cost |
| 662 | subscriptions | $44,584 | 89168 subscribers |
| 662 | platform_opex | $-21,375 | platform operating cost |
| 663 | subscriptions | $44,558 | 89115 subscribers |
| 663 | platform_opex | $-21,367 | platform operating cost |
| 664 | subscriptions | $44,474 | 88948 subscribers |
| 664 | platform_opex | $-21,342 | platform operating cost |
| 665 | subscriptions | $44,344 | 88687 subscribers |
| 665 | platform_opex | $-21,303 | platform operating cost |
| 666 | subscriptions | $44,183 | 88366 subscribers |
| 666 | platform_opex | $-21,255 | platform operating cost |
| 666 | advance_spent | $-20,000 | campaign: medium |
| 667 | subscriptions | $44,001 | 88001 subscribers |
| 667 | platform_opex | $-21,200 | platform operating cost |
| 668 | subscriptions | $43,802 | 87604 subscribers |
| 668 | platform_opex | $-21,141 | platform operating cost |
| 669 | subscriptions | $43,592 | 87184 subscribers |
| 669 | platform_opex | $-21,078 | platform operating cost |
| 669 | surplus_transfer | $32,238 | unused advance kept at completion (not sales revenue) |
| 669 | train | $-15,000 | Liv Kerr |
| 669 | train | $-15,000 | Sam |
| 669 | base_cost | $-90,000 | unavoidable base cost |
| 670 | subscriptions | $43,374 | 86748 subscribers |
| 670 | platform_opex | $-21,012 | platform operating cost |
| 671 | subscriptions | $43,150 | 86300 subscribers |
| 671 | platform_opex | $-20,945 | platform operating cost |
| 672 | subscriptions | $42,922 | 85844 subscribers |
| 672 | platform_opex | $-20,877 | platform operating cost |
| 673 | subscriptions | $42,692 | 85383 subscribers |
| 673 | platform_opex | $-20,807 | platform operating cost |
| 674 | subscriptions | $42,451 | 84901 subscribers |
| 674 | platform_opex | $-20,735 | platform operating cost |
| 675 | subscriptions | $42,206 | 84412 subscribers |
| 675 | platform_opex | $-20,662 | platform operating cost |
| 676 | subscriptions | $41,994 | 83987 subscribers |
| 676 | platform_opex | $-20,598 | platform operating cost |
| 677 | subscriptions | $41,782 | 83564 subscribers |
| 677 | platform_opex | $-20,535 | platform operating cost |
| 677 | star_fee | $-5,917 | Sam Okafor |
| 678 | subscriptions | $41,572 | 83143 subscribers |
| 678 | platform_opex | $-20,471 | platform operating cost |
| 679 | subscriptions | $41,357 | 82714 subscribers |
| 679 | platform_opex | $-20,407 | platform operating cost |
| 680 | subscriptions | $41,144 | 82287 subscribers |
| 680 | platform_opex | $-20,343 | platform operating cost |
| 681 | subscriptions | $40,931 | 81862 subscribers |
| 681 | platform_opex | $-20,279 | platform operating cost |
| 682 | subscriptions | $40,720 | 81440 subscribers |
| 682 | platform_opex | $-20,216 | platform operating cost |
| 683 | subscriptions | $40,510 | 81020 subscribers |
| 683 | platform_opex | $-20,153 | platform operating cost |
| 684 | subscriptions | $42,547 | 85093 subscribers |
| 684 | platform_opex | $-20,764 | platform operating cost |
| 684 | campaign | $-20,000 | medium |
| 685 | subscriptions | $42,348 | 84695 subscribers |
| 685 | platform_opex | $-20,704 | platform operating cost |
| 686 | subscriptions | $42,150 | 84299 subscribers |
| 686 | platform_opex | $-20,645 | platform operating cost |
| 687 | subscriptions | $41,952 | 83904 subscribers |
| 687 | platform_opex | $-20,586 | platform operating cost |
| 687 | train | $-15,000 | Alex |
| 687 | train | $-15,000 | Lee Sato |
| 687 | advance_received | $688,000 | advance from Meridian Global (project reserve, not revenue) |
| 687 | advance_spent | $-315,000 | base_cost: unavoidable base cost |
| 688 | subscriptions | $46,051 | 92102 subscribers |
| 688 | platform_opex | $-21,815 | platform operating cost |
| 689 | subscriptions | $46,749 | 93497 subscribers |
| 689 | platform_opex | $-22,025 | platform operating cost |
| 690 | subscriptions | $47,084 | 94167 subscribers |
| 690 | platform_opex | $-22,125 | platform operating cost |
| 691 | subscriptions | $47,620 | 95240 subscribers |
| 691 | platform_opex | $-22,286 | platform operating cost |
| 692 | subscriptions | $48,222 | 96443 subscribers |
| 692 | platform_opex | $-22,466 | platform operating cost |
| 693 | subscriptions | $48,527 | 97053 subscribers |
| 693 | platform_opex | $-22,558 | platform operating cost |
| 694 | subscriptions | $48,294 | 96587 subscribers |
| 694 | platform_opex | $-22,488 | platform operating cost |
| 695 | subscriptions | $48,062 | 96123 subscribers |
| 695 | platform_opex | $-22,418 | platform operating cost |
| 696 | subscriptions | $47,831 | 95662 subscribers |
| 696 | platform_opex | $-22,349 | platform operating cost |
| 697 | subscriptions | $47,625 | 95249 subscribers |
| 697 | platform_opex | $-22,287 | platform operating cost |
| 698 | subscriptions | $47,413 | 94826 subscribers |
| 698 | platform_opex | $-22,224 | platform operating cost |
| 699 | subscriptions | $47,203 | 94405 subscribers |
| 699 | platform_opex | $-22,161 | platform operating cost |
| 700 | subscriptions | $46,993 | 93986 subscribers |
| 700 | platform_opex | $-22,098 | platform operating cost |
| 701 | subscriptions | $46,785 | 93569 subscribers |
| 701 | platform_opex | $-22,035 | platform operating cost |
| 702 | subscriptions | $46,577 | 93154 subscribers |
| 702 | platform_opex | $-21,973 | platform operating cost |
| 703 | subscriptions | $46,370 | 92740 subscribers |
| 703 | platform_opex | $-21,911 | platform operating cost |
| 704 | subscriptions | $46,164 | 92328 subscribers |
| 704 | platform_opex | $-21,849 | platform operating cost |
| 705 | subscriptions | $45,959 | 91918 subscribers |
| 705 | platform_opex | $-21,788 | platform operating cost |
| 706 | subscriptions | $45,755 | 91510 subscribers |
| 706 | platform_opex | $-21,726 | platform operating cost |
| 706 | advance_spent | $-42,715 | star_fee: Lee Park |
| 707 | subscriptions | $45,552 | 91104 subscribers |
| 707 | platform_opex | $-21,666 | platform operating cost |
| 708 | subscriptions | $45,350 | 90699 subscribers |
| 708 | platform_opex | $-21,605 | platform operating cost |
| 709 | subscriptions | $45,143 | 90285 subscribers |
| 709 | platform_opex | $-21,543 | platform operating cost |
| 710 | subscriptions | $44,937 | 89873 subscribers |
| 710 | platform_opex | $-21,481 | platform operating cost |
| 711 | subscriptions | $44,732 | 89463 subscribers |
| 711 | platform_opex | $-21,419 | platform operating cost |
| 712 | subscriptions | $44,528 | 89055 subscribers |
| 712 | platform_opex | $-21,358 | platform operating cost |
| 713 | subscriptions | $44,325 | 88649 subscribers |
| 713 | platform_opex | $-21,297 | platform operating cost |
| 714 | subscriptions | $44,123 | 88245 subscribers |
| 714 | platform_opex | $-21,237 | platform operating cost |
| 715 | subscriptions | $43,922 | 87843 subscribers |
| 715 | platform_opex | $-21,176 | platform operating cost |
| 716 | subscriptions | $43,721 | 87442 subscribers |
| 716 | platform_opex | $-21,116 | platform operating cost |
| 717 | subscriptions | $43,522 | 87043 subscribers |
| 717 | platform_opex | $-21,056 | platform operating cost |
| 718 | subscriptions | $43,323 | 86646 subscribers |
| 718 | platform_opex | $-20,997 | platform operating cost |
| 719 | subscriptions | $43,126 | 86251 subscribers |
| 719 | platform_opex | $-20,938 | platform operating cost |
| 720 | subscriptions | $42,924 | 85847 subscribers |
| 720 | platform_opex | $-20,877 | platform operating cost |
| 721 | subscriptions | $42,723 | 85445 subscribers |
| 721 | platform_opex | $-20,817 | platform operating cost |
| 722 | subscriptions | $42,523 | 85045 subscribers |
| 722 | platform_opex | $-20,757 | platform operating cost |
| 723 | subscriptions | $42,324 | 84647 subscribers |
| 723 | platform_opex | $-20,697 | platform operating cost |
| 724 | subscriptions | $42,122 | 84243 subscribers |
| 724 | platform_opex | $-20,636 | platform operating cost |
| 724 | advance_spent | $-20,000 | campaign: medium |
| 725 | subscriptions | $41,917 | 83834 subscribers |
| 725 | platform_opex | $-20,575 | platform operating cost |
| 726 | subscriptions | $41,710 | 83419 subscribers |
| 726 | platform_opex | $-20,513 | platform operating cost |
| 727 | subscriptions | $41,500 | 82999 subscribers |
| 727 | platform_opex | $-20,450 | platform operating cost |
| 728 | subscriptions | $41,287 | 82573 subscribers |
| 728 | platform_opex | $-20,386 | platform operating cost |
| 729 | subscriptions | $41,071 | 82142 subscribers |
| 729 | platform_opex | $-20,321 | platform operating cost |
| 730 | subscriptions | $40,853 | 81706 subscribers |
| 730 | platform_opex | $-20,256 | platform operating cost |
| 731 | subscriptions | $40,627 | 81253 subscribers |
| 731 | platform_opex | $-20,188 | platform operating cost |
| 732 | subscriptions | $40,398 | 80795 subscribers |
| 732 | platform_opex | $-20,119 | platform operating cost |
| 733 | subscriptions | $40,167 | 80333 subscribers |
| 733 | platform_opex | $-20,050 | platform operating cost |
| 734 | subscriptions | $39,933 | 79866 subscribers |
| 734 | platform_opex | $-19,980 | platform operating cost |
| 734 | surplus_transfer | $310,285 | unused advance kept at completion (not sales revenue) |
| 734 | announce | $-15,000 | Wild Signal season 4 |
| 734 | train | $-15,000 | Bo Diaz |
| 734 | train | $-15,000 | Kit Kerr |
| 734 | base_cost | $-60,000 | unavoidable base cost |
| 735 | subscriptions | $39,697 | 79394 subscribers |
| 735 | platform_opex | $-19,909 | platform operating cost |
| 736 | subscriptions | $39,459 | 78918 subscribers |
| 736 | platform_opex | $-19,838 | platform operating cost |
| 737 | subscriptions | $39,219 | 78437 subscribers |
| 737 | platform_opex | $-19,766 | platform operating cost |
| 738 | subscriptions | $38,976 | 77952 subscribers |
| 738 | platform_opex | $-19,693 | platform operating cost |
| 739 | subscriptions | $38,732 | 77463 subscribers |
| 739 | platform_opex | $-19,619 | platform operating cost |
| 740 | subscriptions | $38,485 | 76970 subscribers |
| 740 | platform_opex | $-19,545 | platform operating cost |
| 741 | subscriptions | $38,237 | 76473 subscribers |
| 741 | platform_opex | $-19,471 | platform operating cost |
| 741 | star_fee | $-13,137 | Sam Okafor |
| 742 | subscriptions | $37,980 | 75959 subscribers |
| 742 | platform_opex | $-19,394 | platform operating cost |
| 743 | subscriptions | $37,721 | 75442 subscribers |
| 743 | platform_opex | $-19,316 | platform operating cost |
| 744 | subscriptions | $37,461 | 74921 subscribers |
| 744 | platform_opex | $-19,238 | platform operating cost |
| 745 | subscriptions | $37,198 | 74396 subscribers |
| 745 | platform_opex | $-19,159 | platform operating cost |
| 746 | subscriptions | $36,934 | 73868 subscribers |
| 746 | platform_opex | $-19,080 | platform operating cost |
| 747 | subscriptions | $36,669 | 73337 subscribers |
| 747 | platform_opex | $-19,001 | platform operating cost |
| 747 | campaign | $-20,000 | medium |
| 748 | subscriptions | $36,402 | 72803 subscribers |
| 748 | platform_opex | $-18,920 | platform operating cost |
| 749 | subscriptions | $36,133 | 72266 subscribers |
| 749 | platform_opex | $-18,840 | platform operating cost |
| 750 | subscriptions | $35,863 | 71726 subscribers |
| 750 | platform_opex | $-18,759 | platform operating cost |
| 750 | train | $-15,000 | Max Lind |
| 750 | train | $-15,000 | Gus Novak |
| 750 | advance_received | $198,000 | advance from Meridian Global (project reserve, not revenue) |
| 750 | advance_spent | $-90,000 | base_cost: unavoidable base cost |
| 751 | subscriptions | $38,832 | 77663 subscribers |
| 751 | platform_opex | $-19,649 | platform operating cost |
| 752 | subscriptions | $40,507 | 81014 subscribers |
| 752 | platform_opex | $-20,152 | platform operating cost |
| 753 | subscriptions | $41,383 | 82766 subscribers |
| 753 | platform_opex | $-20,415 | platform operating cost |
| 754 | subscriptions | $42,585 | 85170 subscribers |
| 754 | platform_opex | $-20,775 | platform operating cost |
| 755 | subscriptions | $44,004 | 88007 subscribers |
| 755 | platform_opex | $-21,201 | platform operating cost |
| 756 | subscriptions | $44,838 | 89676 subscribers |
| 756 | platform_opex | $-21,451 | platform operating cost |
| 757 | subscriptions | $46,842 | 93684 subscribers |
| 757 | platform_opex | $-22,053 | platform operating cost |
| 758 | subscriptions | $46,997 | 93993 subscribers |
| 758 | platform_opex | $-22,099 | platform operating cost |
| 758 | advance_spent | $-13,135 | star_fee: Sam Okafor |
| 759 | subscriptions | $47,020 | 94039 subscribers |
| 759 | platform_opex | $-22,106 | platform operating cost |
| 760 | subscriptions | $46,958 | 93916 subscribers |
| 760 | platform_opex | $-22,087 | platform operating cost |
| 761 | subscriptions | $46,841 | 93682 subscribers |
| 761 | platform_opex | $-22,052 | platform operating cost |
| 762 | subscriptions | $46,688 | 93375 subscribers |
| 762 | platform_opex | $-22,006 | platform operating cost |
| 763 | subscriptions | $46,510 | 93019 subscribers |
| 763 | platform_opex | $-21,953 | platform operating cost |
| 764 | subscriptions | $46,316 | 92632 subscribers |
| 764 | platform_opex | $-21,895 | platform operating cost |
| 765 | subscriptions | $46,094 | 92187 subscribers |
| 765 | platform_opex | $-21,828 | platform operating cost |
| 765 | advance_spent | $-20,000 | campaign: medium |
| 766 | subscriptions | $45,873 | 91745 subscribers |
| 766 | platform_opex | $-21,762 | platform operating cost |
| 767 | subscriptions | $45,653 | 91305 subscribers |
| 767 | platform_opex | $-21,696 | platform operating cost |
| 768 | subscriptions | $45,434 | 90867 subscribers |
| 768 | platform_opex | $-21,630 | platform operating cost |
| 768 | surplus_transfer | $74,865 | unused advance kept at completion (not sales revenue) |
| 768 | train | $-15,000 | Liv Kerr |
| 768 | train | $-15,000 | Sam |
| 768 | base_cost | $-315,000 | unavoidable base cost |
| 769 | subscriptions | $45,216 | 90431 subscribers |
| 769 | platform_opex | $-21,565 | platform operating cost |
| 770 | subscriptions | $44,999 | 89997 subscribers |
| 770 | platform_opex | $-21,500 | platform operating cost |
| 771 | subscriptions | $44,783 | 89565 subscribers |
| 771 | platform_opex | $-21,435 | platform operating cost |
| 772 | subscriptions | $44,562 | 89124 subscribers |
| 772 | platform_opex | $-21,369 | platform operating cost |
| 773 | subscriptions | $44,343 | 88686 subscribers |
| 773 | platform_opex | $-21,303 | platform operating cost |
| 774 | subscriptions | $44,125 | 88250 subscribers |
| 774 | platform_opex | $-21,237 | platform operating cost |
| 775 | subscriptions | $43,908 | 87816 subscribers |
| 775 | platform_opex | $-21,172 | platform operating cost |
| 776 | subscriptions | $43,692 | 87384 subscribers |
| 776 | platform_opex | $-21,108 | platform operating cost |
| 777 | subscriptions | $43,477 | 86954 subscribers |
| 777 | platform_opex | $-21,043 | platform operating cost |
| 778 | subscriptions | $44,663 | 89326 subscribers |
| 778 | platform_opex | $-21,399 | platform operating cost |
| 779 | subscriptions | $44,460 | 88919 subscribers |
| 779 | platform_opex | $-21,338 | platform operating cost |
| 780 | subscriptions | $44,257 | 88514 subscribers |
| 780 | platform_opex | $-21,277 | platform operating cost |
| all | payroll (total) | $-5,869,000 | aggregated |
| all | upkeep (total) | $-468,000 | aggregated |
| all | studio_take (total) | $13,992,921 | aggregated |
