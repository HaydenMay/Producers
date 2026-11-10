# Single career — seed 1, strategy tv-first

> **Simulation assumptions, not design locks.** All numbers come from provisional config values. Nothing here is official balance.

- Ruleset: `v9.61-movie-kernel-0.1` · Config: `gate3_mixed` (hash `b83a7f2c`)
- Seed: 1
- Strategy: tv-first
- Decisions: 966
- Modelled: movies; limited series (config-gated); renewable TV seasons: orders, renewal, fatigue, twist, hiatus, announcements, contract variants A/B (config-gated); studio streaming service: engineer build, aggregate subscribers, catalog, Originals (config-gated); distributor advances/royalties/trust; Stars (families, budgets, fallback, callbacks, relationships); marketing + studio buzz; scores + legs; IP fans; Prestige milestones; studio genre levels; trends; staff XP/hire/train; studio staff-capacity cap + upgrade ladder (when configured); theme research + staff pitches
- **Not modelled:** soap operas (shelved); named critics (Gate 2.6 proxy only); eras beyond a gentle quality bar; studio upgrades other than staff capacity + TV unlock; genre unlocks; late-game concurrency; TV spinoffs/reboots, Final Season announcements, other show shake-ups; binge drops; platform upgrades; challenge modes

## Career summary

- Weeks: 780 (15.0 years) · Releases: 27 · Cancellations: 0
- End cash: $11,090,097 (start $40,000) · Negative-cash weeks: 0
- Prestige: 4705 (57 awards)
- Staff: Sam [P 89 W 90 F 86 E 76, XP 7800]; Alex [P 86 W 89 F 88 E 80, XP 7800]; Gus Novak [P 87 W 87 F 86 E 79, XP 7280]; Bo Diaz [P 86 W 89 F 86 E 74, XP 7280]; Liv Kerr [P 88 W 90 F 84 E 79, XP 6740]; Lee Sato [P 87 W 88 F 90 E 82, XP 6740]; Fin Novak [P 86 W 91 F 84 E 84, XP 5720]; Mo Vale [P 89 W 91 F 86 E 77, XP 5720]
- Studio genre levels (exact genre): Horror xp 11, Action xp 11, Comedy xp 5
- IP fans: Hollow Edge 260; Dead Night 946; Dead Pulse 996; Broken Legacy 2,020; Red Shadow 1,887; Hollow Code 1,962; Hollow Frequency 5,045; Iron Legacy 40,421; Last Shadow 58,646; Lost Run 86,869
- Distributor trust: wolf 2.81, starlight 2.50, xyz 4.85, orbit 3.30, meridian 5.00
- Stars hired: Bo Hart (L0, Fame 9, rel 1.75); Sam Imai (L6, Fame 54, rel 2.50); Fin Quinn (L5, Fame 49, rel 1.75); Alex Sato (L5, Fame 32, rel 1.75); Dee Grant (L4, Fame 100, rel 4.75); Mo Diaz (L8, Fame 100, rel 5.00); Kit Okafor (L7, Fame 96, rel 5.00)
- Great films: Hall of Fame 3/27 · avg ≥9.0 3/27 · avg >9.0 3/27 · Audience ≥9 4/27 · Critic ≥9 1/27 · 8+ 11/27
- Best film: 9.50 "Lost Run: Season 2" (tv, A10/C9; tv-first seed 1 #25, yr 12.7, critic gen 0) · best Audience: 9.50 "Lost Run: Season 2" (tv, A10/C9; tv-first seed 1 #25, yr 12.7, critic gen 0) · best Critic: 9.50 "Lost Run: Season 2" (tv, A10/C9; tv-first seed 1 #25, yr 12.7, critic gen 0)

## Formats, TV and streaming (Gate 3)

- Releases by format: movie 1 (avg 5.29, HoF 0, net/production-week $9,149); limited_series 6 (avg 7.177, HoF 0, net/production-week $22,384); tv 20 (avg 7.891, HoF 3, net/production-week $26,922)
- TV: unlocked week 124 (year 2.4) · shows 3, seasons 20, longest 8 · ended by a score below 4: 0
  - Iron Legacy: seasons S1 5ep 8.38 → S2 5ep 7.94 → S3 10ep 8.25 → S4 10ep 8.07 → S5 10ep 8 → S6 10ep 7.59 → S7 10ep 7.15 → S8 10ep 6.54 · fans 40,421 · last season averaged 6.54 (≥ 4): renewable
  - Last Shadow: seasons S1 10ep 7.91 → S2 15ep 8.23 → S3 15ep 8.08 → S4 15ep 7.86 → S5 15ep 7.18 → S6 15ep 7.1 → S7 15ep 6.57 → S8 15ep 6.06 · fans 58,646 · last season averaged 6.06 (≥ 4): renewable
  - Lost Run: seasons S1 15ep 9.09 → S2 15ep 9.5 → S3 20ep 9.48 → S4 20ep 8.85 · fans 86,869 · last season averaged 8.85 (≥ 4): renewable
- Streaming: not built
- Last 12 months: traditional studio take $1,415,531 · subscriptions $0 · platform cost $0 · kept surplus $453,680
- Prestige by source: audience_7_5 1500, meters_all_70 1050, critic_8_5 255, ip_viewers_500k 450, ip_gross_1m 300, ip_gross_5m 450, hall_of_fame 600, first_hall_of_fame 100 · by format: limited_series 435, tv 4270

## Releases (full causal trace)

### Hollow Edge — Horror + Spies (new)

Released week 16 (year 0.3) · Distributor: Wolf Pictures · Star: Bo Hart (L0, Fame 9) · IP: Hollow Edge

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

### Dead Night — Horror + Sports (new)

Released week 34 (year 0.7) · Distributor: Wolf Pictures · Star: Sam Imai (L6, Fame 54) · IP: Dead Night
Format: **limited_series**, 6 episodes (one per week) · 179,432 distinct viewers, 904,243 viewer-episodes · self-contained: never renews

**Financial waterfall** [LOCKED rules; amounts provisional]

| Item | Amount |
|---|---:|
| Advance received (project reserve, not revenue) | $150,000 |
| Base cost (unavoidable) | −$90,000 |
| Star fee | −$42,005 |
| Marketing campaign | −$20,000 |
| Paid from studio cash (overrun) | $2,005 |
| **Unused advance kept at completion** | $0 |
| Gross from sales (10 weeks) | $515,419 |
| Distributor royalty (31% of weekly gross) | −$159,780 |
| **Studio take** | $355,639 |
| Net for this title (surplus + take − cash overrun; wages are studio-wide, excluded) | $353,634 |

**Quality trace** [scores are computed, never rolled]

Meters (0–100): Plot 59.11 · Writing 60.55 · Filming 71.37 · Editing 47.9
Inputs: staff points {"plot":69.43,"writing":73.71,"filming":65.81,"editing":42.45}, Star filming points 76.93 (Star family fit 97), studio Horror level 1 (+3%), era bar x1.03
Base scores: Audience 5.97 / Critic 5.98 · no weak meter
Combo grades: Audience B (x1.06) / Critic B (x1.06) · repetition fatigue x1 · critic saturation x1
Before expectations (after combo, weakness, fatigue, saturation; pre-clamp): Audience 6.33 / Critic 6.34 · critic generation 0 (−0.0%, scale) · audience era 0 (−0.0%) · then clamp 0–10 (generation/era 0 = the ones active at game start)
**Final: Audience 6.33 / Critic 6.34 → avg 6.34**

**Opening & viewership trace** [marketing/Fame/reach affect viewers only]

Awareness inputs: base 0.35, marketing 0.55, studioBuzz 0, starFame 0.28, trend 0.4, ipFans 0 → awareness 0.79. Reach cap 264,000 → pool 209,731 → opening 62,919.

| Wk | Viewers | Retention | Driver | Gross | Studio | Distributor |
|---:|---:|---:|---|---:|---:|---:|
| 1 | 104,866 | 1 | episode 1 premiere | $59,774 | $41,244 | $18,530 |
| 2 | 124,723 | 1.19 | episode 2: 96% kept (critic 6.34), +24,010 new | $71,092 | $49,054 | $22,039 |
| 3 | 135,045 | 1.08 | episode 3: 96% kept (critic 6.34), +15,261 new | $76,976 | $53,113 | $23,862 |
| 4 | 142,475 | 1.06 | episode 4: 96% kept (audience 6.33), +12,859 new | $81,211 | $56,035 | $25,175 |
| 5 | 148,301 | 1.04 | episode 5: 96% kept (audience 6.33), +11,553 new | $84,532 | $58,327 | $26,205 |
| 6 | 153,222 | 1.03 | episode 6: 96% kept (audience 6.33), +10,883 new | $87,337 | $60,262 | $27,074 |
| 7 | 61,289 | 0.4 | catch-up viewing (tail week 1/3) | $34,935 | $24,105 | $10,830 |
| 8 | 24,516 | 0.4 | catch-up viewing (tail week 2/3) | $13,974 | $9,642 | $4,332 |
| 9 | 9,806 | 0.4 | catch-up viewing (tail week 3/3) | $5,589 | $3,857 | $1,733 |
| 10 | 0 | 0 | run ended | $0 | $0 | $0 |

**Progression trace**

- Prestige awards: none (no milestone reached)
- IP fans: {"before":0,"after":3847,"delta":3847}
- Star career: {"fameDelta":3.65,"relDelta":0.75,"grow":3,"level":5,"reasons":"worked together (+); project boosted their career (+)"}
- Distributor trust: Wolf Pictures earned 107% of its advance back on Dead Night (step 0.15)
- Rule labels: LOCKED = causal chain, accounting, fallback/no-campaign, thresholds 4.0/9.0, IP fan inheritance. WORKING ASSUMPTION = all formulas' shapes and numbers.

### Dead Pulse — Horror + Sports (new)

Released week 52 (year 1.0) · Distributor: Wolf Pictures · Star: Sam Imai (L6, Fame 54) · IP: Dead Pulse
Format: **limited_series**, 6 episodes (one per week) · 180,368 distinct viewers, 910,567 viewer-episodes · self-contained: never renews

**Financial waterfall** [LOCKED rules; amounts provisional]

| Item | Amount |
|---|---:|
| Advance received (project reserve, not revenue) | $145,000 |
| Base cost (unavoidable) | −$90,000 |
| Star fee | −$42,005 |
| Marketing campaign | −$20,000 |
| Paid from studio cash (overrun) | $7,005 |
| **Unused advance kept at completion** | $0 |
| Gross from sales (10 weeks) | $519,023 |
| Distributor royalty (31% of weekly gross) | −$160,897 |
| **Studio take** | $358,126 |
| Net for this title (surplus + take − cash overrun; wages are studio-wide, excluded) | $351,121 |

**Quality trace** [scores are computed, never rolled]

Meters (0–100): Plot 62.74 · Writing 64.44 · Filming 73.11 · Editing 51.74
Inputs: staff points {"plot":81.95,"writing":88.21,"filming":78.79,"editing":50.18}, Star filming points 78.97 (Star family fit 100), studio Horror level 1 (+3%), era bar x1.04
Base scores: Audience 6.28 / Critic 6.32 · no weak meter
Combo grades: Audience B (x1.06) / Critic B (x1.06) · repetition fatigue x0.95 · critic saturation x1
Before expectations (after combo, weakness, fatigue, saturation; pre-clamp): Audience 6.32 / Critic 6.37 · critic generation 0 (−0.0%, scale) · audience era 0 (−0.0%) · then clamp 0–10 (generation/era 0 = the ones active at game start)
**Final: Audience 6.32 / Critic 6.37 → avg 6.35**

**Opening & viewership trace** [marketing/Fame/reach affect viewers only]

Awareness inputs: base 0.35, marketing 0.55, studioBuzz 0, starFame 0.3, trend 0.4, ipFans 0 → awareness 0.8. Reach cap 264,000 → pool 210,907 → opening 63,272.

| Wk | Viewers | Retention | Driver | Gross | Studio | Distributor |
|---:|---:|---:|---|---:|---:|---:|
| 1 | 105,454 | 1 | episode 1 premiere | $60,109 | $41,475 | $18,634 |
| 2 | 125,645 | 1.19 | episode 2: 96% kept (critic 6.37), +24,177 new | $71,618 | $49,416 | $22,201 |
| 3 | 136,256 | 1.08 | episode 3: 96% kept (critic 6.37), +15,360 new | $77,666 | $53,589 | $24,076 |
| 4 | 143,598 | 1.05 | episode 4: 96% kept (audience 6.32), +12,901 new | $81,851 | $56,477 | $25,374 |
| 5 | 149,318 | 1.04 | episode 5: 96% kept (audience 6.32), +11,579 new | $85,111 | $58,727 | $26,384 |
| 6 | 154,123 | 1.03 | episode 6: 96% kept (audience 6.32), +10,897 new | $87,850 | $60,617 | $27,234 |
| 7 | 61,649 | 0.4 | catch-up viewing (tail week 1/3) | $35,140 | $24,247 | $10,893 |
| 8 | 24,660 | 0.4 | catch-up viewing (tail week 2/3) | $14,056 | $9,699 | $4,357 |
| 9 | 9,864 | 0.4 | catch-up viewing (tail week 3/3) | $5,622 | $3,880 | $1,743 |
| 10 | 0 | 0 | run ended | $0 | $0 | $0 |

**Progression trace**

- Prestige awards: none (no milestone reached)
- IP fans: {"before":0,"after":3896,"delta":3896}
- Star career: {"fameDelta":3.69,"relDelta":0.75,"grow":0,"level":6,"reasons":"worked together (+); project boosted their career (+)"}
- Distributor trust: Wolf Pictures earned 111% of its advance back on Dead Pulse (step 0.18)
- Rule labels: LOCKED = causal chain, accounting, fallback/no-campaign, thresholds 4.0/9.0, IP fan inheritance. WORKING ASSUMPTION = all formulas' shapes and numbers.

### Broken Legacy — Action + Superheroes (new)

Released week 70 (year 1.3) · Distributor: Wolf Pictures · Star: Fin Quinn (L5, Fame 49) · IP: Broken Legacy
Format: **limited_series**, 6 episodes (one per week) · 193,057 distinct viewers, 952,372 viewer-episodes · self-contained: never renews

**Financial waterfall** [LOCKED rules; amounts provisional]

| Item | Amount |
|---|---:|
| Advance received (project reserve, not revenue) | $172,000 |
| Base cost (unavoidable) | −$90,000 |
| Star fee | −$35,970 |
| Marketing campaign | −$20,000 |
| Paid from studio cash (overrun) | $0 |
| **Unused advance kept at completion** | $26,030 |
| Gross from sales (10 weeks) | $542,852 |
| Distributor royalty (31% of weekly gross) | −$168,284 |
| **Studio take** | $374,568 |
| Net for this title (surplus + take − cash overrun; wages are studio-wide, excluded) | $400,598 |

**Quality trace** [scores are computed, never rolled]

Meters (0–100): Plot 75.07 · Writing 75.87 · Filming 77.61 · Editing 64.71
Inputs: staff points {"plot":148.54,"writing":155.08,"filming":146.86,"editing":86.95}, Star filming points 56.98 (Star family fit 74), studio Action level 0 (+0%), era bar x1.05
Base scores: Audience 7.25 / Critic 7.42 · no weak meter
Combo grades: Audience A (x1.15) / Critic C (x1) · repetition fatigue x1 · critic saturation x0.9
Before expectations (after combo, weakness, fatigue, saturation; pre-clamp): Audience 8.33 / Critic 6.68 · critic generation 0 (−0.0%, scale) · audience era 0 (−0.0%) · then clamp 0–10 (generation/era 0 = the ones active at game start)
**Final: Audience 8.33 / Critic 6.68 → avg 7.51**

**Opening & viewership trace** [marketing/Fame/reach affect viewers only]

Awareness inputs: base 0.35, marketing 0.55, studioBuzz 0, starFame 0.25, trend 0.1, ipFans 0 → awareness 0.71. Reach cap 264,000 → pool 188,514 → opening 56,554.

| Wk | Viewers | Retention | Driver | Gross | Studio | Distributor |
|---:|---:|---:|---|---:|---:|---:|
| 1 | 94,257 | 1 | episode 1 premiere | $53,726 | $37,071 | $16,655 |
| 2 | 114,572 | 1.22 | episode 2: 98% kept (critic 6.68), +22,125 new | $65,306 | $45,061 | $20,245 |
| 3 | 126,563 | 1.1 | episode 3: 98% kept (critic 6.68), +14,191 new | $72,141 | $49,777 | $22,364 |
| 4 | 144,629 | 1.14 | episode 4: 100% kept (audience 8.33), +18,066 new | $82,439 | $56,883 | $25,556 |
| 5 | 165,338 | 1.14 | episode 5: 100% kept (audience 8.33), +20,709 new | $94,243 | $65,027 | $29,215 |
| 6 | 189,047 | 1.14 | episode 6: 100% kept (audience 8.33), +23,709 new | $107,757 | $74,352 | $33,405 |
| 7 | 75,619 | 0.4 | catch-up viewing (tail week 1/3) | $43,103 | $29,741 | $13,362 |
| 8 | 30,248 | 0.4 | catch-up viewing (tail week 2/3) | $17,241 | $11,897 | $5,345 |
| 9 | 12,099 | 0.4 | catch-up viewing (tail week 3/3) | $6,896 | $4,759 | $2,138 |
| 10 | 0 | 0 | run ended | $0 | $0 | $0 |

**Progression trace**

- Prestige awards: Prestige +75: audience_7_5 (Broken Legacy).
- IP fans: {"before":0,"after":7753,"delta":7753}
- Star career: {"fameDelta":7.06,"relDelta":0.75,"grow":6,"level":5,"reasons":"worked together (+); project boosted their career (+)"}
- Distributor trust: Wolf Pictures earned back 98% of its $172,000 advance on Broken Legacy (step 0.26)
- Rule labels: LOCKED = causal chain, accounting, fallback/no-campaign, thresholds 4.0/9.0, IP fan inheritance. WORKING ASSUMPTION = all formulas' shapes and numbers.

### Red Shadow — Action + Superheroes (new)

Released week 88 (year 1.7) · Distributor: Wolf Pictures · Star: Alex Sato (L5, Fame 32) · IP: Red Shadow
Format: **limited_series**, 6 episodes (one per week) · 182,834 distinct viewers, 900,073 viewer-episodes · self-contained: never renews

**Financial waterfall** [LOCKED rules; amounts provisional]

| Item | Amount |
|---|---:|
| Advance received (project reserve, not revenue) | $134,000 |
| Base cost (unavoidable) | −$90,000 |
| Star fee | −$17,993 |
| Marketing campaign | −$20,000 |
| Paid from studio cash (overrun) | $0 |
| **Unused advance kept at completion** | $6,007 |
| Gross from sales (10 weeks) | $513,042 |
| Distributor royalty (31% of weekly gross) | −$159,043 |
| **Studio take** | $353,999 |
| Net for this title (surplus + take − cash overrun; wages are studio-wide, excluded) | $360,005 |

**Quality trace** [scores are computed, never rolled]

Meters (0–100): Plot 77.6 · Writing 78.56 · Filming 80.71 · Editing 67.58
Inputs: staff points {"plot":173.13,"writing":183.06,"filming":169.96,"editing":100.16}, Star filming points 79.31 (Star family fit 100), studio Action level 1 (+3%), era bar x1.07
Base scores: Audience 7.53 / Critic 7.69 · no weak meter
Combo grades: Audience A (x1.15) / Critic C (x1) · repetition fatigue x0.95 · critic saturation x0.9
Before expectations (after combo, weakness, fatigue, saturation; pre-clamp): Audience 8.23 / Critic 6.57 · critic generation 0 (−0.0%, scale) · audience era 0 (−0.0%) · then clamp 0–10 (generation/era 0 = the ones active at game start)
**Final: Audience 8.23 / Critic 6.57 → avg 7.4**

**Opening & viewership trace** [marketing/Fame/reach affect viewers only]

Awareness inputs: base 0.35, marketing 0.55, studioBuzz 0, starFame 0.15, trend 0.1, ipFans 0 → awareness 0.68. Reach cap 264,000 → pool 180,408 → opening 54,122.

| Wk | Viewers | Retention | Driver | Gross | Studio | Distributor |
|---:|---:|---:|---|---:|---:|---:|
| 1 | 90,204 | 1 | episode 1 premiere | $51,416 | $35,477 | $15,939 |
| 2 | 108,975 | 1.21 | episode 2: 97% kept (critic 6.57), +21,098 new | $62,116 | $42,860 | $19,256 |
| 3 | 119,746 | 1.1 | episode 3: 97% kept (critic 6.57), +13,583 new | $68,255 | $47,096 | $21,159 |
| 4 | 136,689 | 1.14 | episode 4: 100% kept (audience 8.23), +16,943 new | $77,913 | $53,760 | $24,153 |
| 5 | 155,883 | 1.14 | episode 5: 100% kept (audience 8.23), +19,194 new | $88,853 | $61,309 | $27,545 |
| 6 | 177,695 | 1.14 | episode 6: 100% kept (audience 8.23), +21,812 new | $101,286 | $69,887 | $31,399 |
| 7 | 71,078 | 0.4 | catch-up viewing (tail week 1/3) | $40,514 | $27,955 | $12,559 |
| 8 | 28,431 | 0.4 | catch-up viewing (tail week 2/3) | $16,206 | $11,182 | $5,024 |
| 9 | 11,372 | 0.4 | catch-up viewing (tail week 3/3) | $6,482 | $4,473 | $2,009 |
| 10 | 0 | 0 | run ended | $0 | $0 | $0 |

**Progression trace**

- Prestige awards: Prestige +75: audience_7_5 (Red Shadow).
- IP fans: {"before":0,"after":7021,"delta":7021}
- Star career: {"fameDelta":6.59,"relDelta":0.75,"grow":0,"level":5,"reasons":"worked together (+); project boosted their career (+)"}
- Distributor trust: Wolf Pictures earned 119% of its advance back on Red Shadow with strong reviews (step 0.37)
- Rule labels: LOCKED = causal chain, accounting, fallback/no-campaign, thresholds 4.0/9.0, IP fan inheritance. WORKING ASSUMPTION = all formulas' shapes and numbers.

### Hollow Code — Comedy + Spies (new)

Released week 106 (year 2.0) · Distributor: Orbit Releasing · Star: Dee Grant (L4, Fame 100) · IP: Hollow Code
Format: **limited_series**, 6 episodes (one per week) · 245,428 distinct viewers, 1,206,403 viewer-episodes · self-contained: never renews

**Financial waterfall** [LOCKED rules; amounts provisional]

| Item | Amount |
|---|---:|
| Advance received (project reserve, not revenue) | $102,000 |
| Base cost (unavoidable) | −$90,000 |
| Star fee | −$33,996 |
| Marketing campaign | −$20,000 |
| Paid from studio cash (overrun) | $41,996 |
| **Unused advance kept at completion** | $0 |
| Gross from sales (10 weeks) | $687,650 |
| Distributor royalty (36% of weekly gross) | −$247,554 |
| **Studio take** | $440,096 |
| Net for this title (surplus + take − cash overrun; wages are studio-wide, excluded) | $398,100 |

**Quality trace** [scores are computed, never rolled]

Meters (0–100): Plot 78.22 · Writing 79.25 · Filming 80.22 · Editing 68.01
Inputs: staff points {"plot":181.78,"writing":193.32,"filming":173.89,"editing":103.47}, Star filming points 70.84 (Star family fit 92), studio Comedy level 0 (+0%), era bar x1.08
Base scores: Audience 7.55 / Critic 7.73 · no weak meter
Combo grades: Audience C (x1) / Critic F (x0.78) · repetition fatigue x1 · critic saturation x1
Before expectations (after combo, weakness, fatigue, saturation; pre-clamp): Audience 7.55 / Critic 6.03 · critic generation 0 (−0.0%, scale) · audience era 0 (−0.0%) · then clamp 0–10 (generation/era 0 = the ones active at game start)
**Final: Audience 7.55 / Critic 6.03 → avg 6.79**

**Opening & viewership trace** [marketing/Fame/reach affect viewers only]

Awareness inputs: base 0.35, marketing 0.55, studioBuzz 0, starFame 0.25, trend 0.4, ipFans 0 → awareness 0.79. Reach cap 332,000 → pool 261,674 → opening 78,502.

| Wk | Viewers | Retention | Driver | Gross | Studio | Distributor |
|---:|---:|---:|---|---:|---:|---:|
| 1 | 130,837 | 1 | episode 1 premiere | $74,577 | $47,729 | $26,848 |
| 2 | 152,685 | 1.17 | episode 2: 94% kept (critic 6.03), +29,463 new | $87,030 | $55,699 | $31,331 |
| 3 | 162,549 | 1.06 | episode 3: 94% kept (critic 6.03), +18,750 new | $92,653 | $59,298 | $33,355 |
| 4 | 183,325 | 1.13 | episode 4: 100% kept (audience 7.55), +20,776 new | $104,495 | $66,877 | $37,618 |
| 5 | 205,230 | 1.12 | episode 5: 100% kept (audience 7.55), +21,905 new | $116,981 | $74,868 | $42,113 |
| 6 | 228,927 | 1.12 | episode 6: 100% kept (audience 7.55), +23,697 new | $130,488 | $83,513 | $46,976 |
| 7 | 91,571 | 0.4 | catch-up viewing (tail week 1/3) | $52,195 | $33,405 | $18,790 |
| 8 | 36,628 | 0.4 | catch-up viewing (tail week 2/3) | $20,878 | $13,362 | $7,516 |
| 9 | 14,651 | 0.4 | catch-up viewing (tail week 3/3) | $8,351 | $5,345 | $3,006 |
| 10 | 0 | 0 | run ended | $0 | $0 | $0 |

**Progression trace**

- Prestige awards: Prestige +75: audience_7_5 (Hollow Code).
- IP fans: {"before":0,"after":7029,"delta":7029}
- Star career: {"fameDelta":5.55,"relDelta":0.75,"grow":6,"level":2,"reasons":"worked together (+); project boosted their career (+)"}
- Distributor trust: Orbit Releasing earned 243% of its advance back on Hollow Code (step 0.75)
- Rule labels: LOCKED = causal chain, accounting, fallback/no-campaign, thresholds 4.0/9.0, IP fan inheritance. WORKING ASSUMPTION = all formulas' shapes and numbers.

### Hollow Frequency — Action + Spies (new)

Released week 124 (year 2.4) · Distributor: XYZ Network · Star: Mo Diaz (L8, Fame 100) · IP: Hollow Frequency
Format: **limited_series**, 6 episodes (one per week) · 298,465 distinct viewers, 1,526,388 viewer-episodes · self-contained: never renews

**Financial waterfall** [LOCKED rules; amounts provisional]

| Item | Amount |
|---|---:|
| Advance received (project reserve, not revenue) | $189,000 |
| Base cost (unavoidable) | −$90,000 |
| Star fee | −$20,921 |
| Marketing campaign | −$20,000 |
| Paid from studio cash (overrun) | $0 |
| **Unused advance kept at completion** | $58,079 |
| Gross from sales (10 weeks) | $870,041 |
| Distributor royalty (43% of weekly gross) | −$374,118 |
| **Studio take** | $495,923 |
| Net for this title (surplus + take − cash overrun; wages are studio-wide, excluded) | $554,003 |

**Quality trace** [scores are computed, never rolled]

Meters (0–100): Plot 83.33 · Writing 84.19 · Filming 84.32 · Editing 75.3
Inputs: staff points {"plot":256.25,"writing":272.98,"filming":249.3,"editing":150.25}, Star filming points 79.31 (Star family fit 100), studio Action level 1 (+3%), era bar x1.1
Base scores: Audience 8.1 / Critic 8.26 · no weak meter
Combo grades: Audience B (x1.06) / Critic B (x1.06) · repetition fatigue x1 · critic saturation x1
Before expectations (after combo, weakness, fatigue, saturation; pre-clamp): Audience 8.59 / Critic 8.75 · critic generation 0 (−0.0%, scale) · audience era 0 (−0.0%) · then clamp 0–10 (generation/era 0 = the ones active at game start)
**Final: Audience 8.59 / Critic 8.75 → avg 8.67**

**Opening & viewership trace** [marketing/Fame/reach affect viewers only]

Awareness inputs: base 0.35, marketing 0.55, studioBuzz 0, starFame 0.17, trend 0.4, ipFans 0 → awareness 0.77. Reach cap 376,000 → pool 289,893 → opening 86,968.

| Wk | Viewers | Retention | Driver | Gross | Studio | Distributor |
|---:|---:|---:|---|---:|---:|---:|
| 1 | 144,947 | 1 | episode 1 premiere | $82,620 | $47,093 | $35,527 |
| 2 | 182,674 | 1.26 | episode 2: 100% kept (critic 8.75), +37,727 new | $104,124 | $59,351 | $44,773 |
| 3 | 206,610 | 1.13 | episode 3: 100% kept (critic 8.75), +23,936 new | $117,768 | $67,128 | $50,640 |
| 4 | 236,130 | 1.14 | episode 4: 100% kept (audience 8.59), +29,520 new | $134,594 | $76,719 | $57,875 |
| 5 | 271,320 | 1.15 | episode 5: 100% kept (audience 8.59), +35,190 new | $154,652 | $88,152 | $66,501 |
| 6 | 298,465 | 1.1 | episode 6: 100% kept (audience 8.59), +27,145 new | $170,125 | $96,971 | $73,154 |
| 7 | 119,386 | 0.4 | catch-up viewing (tail week 1/3) | $68,050 | $38,789 | $29,262 |
| 8 | 47,754 | 0.4 | catch-up viewing (tail week 2/3) | $27,220 | $15,515 | $11,705 |
| 9 | 19,102 | 0.4 | catch-up viewing (tail week 3/3) | $10,888 | $6,206 | $4,682 |
| 10 | 0 | 0 | run ended | $0 | $0 | $0 |

**Progression trace**

- Prestige awards: Prestige +50: meters_all_70 (Hollow Frequency).; Prestige +75: audience_7_5 (Hollow Frequency).; Prestige +85: critic_8_5 (Hollow Frequency).
- IP fans: {"before":0,"after":17526,"delta":17526}
- Star career: {"fameDelta":12.21,"relDelta":0.75,"grow":0,"level":4,"reasons":"worked together (+); project boosted their career (+)"}
- Distributor trust: XYZ Network earned 198% of its advance back on Hollow Frequency with strong reviews (step 0.75)
- Rule labels: LOCKED = causal chain, accounting, fallback/no-campaign, thresholds 4.0/9.0, IP fan inheritance. WORKING ASSUMPTION = all formulas' shapes and numbers.

### Iron Legacy — Action + Spies (new)

Released week 140 (year 2.7) · Distributor: Meridian Global · Star: Mo Diaz (L8, Fame 100) · IP: Iron Legacy
Format: **tv season 1**, 5 episodes (one per week) · 317,491 distinct viewers, 1,382,338 viewer-episodes · renewal: average 8.38 ≥ 4.0 → renewable

**Financial waterfall** [LOCKED rules; amounts provisional]

| Item | Amount |
|---|---:|
| Advance received (project reserve, not revenue) | $188,000 |
| Base cost (unavoidable) | −$90,000 |
| Star fee | −$20,393 |
| Marketing campaign | −$20,000 |
| Paid from studio cash (overrun) | $0 |
| **Unused advance kept at completion** | $57,607 |
| Gross from sales (8 weeks) | $442,348 |
| Distributor royalty (48% of weekly gross) | −$212,327 |
| **Studio take** | $230,021 |
| Net for this title (surplus + take − cash overrun; wages are studio-wide, excluded) | $287,628 |

**Quality trace** [scores are computed, never rolled]

Meters (0–100): Plot 84.51 · Writing 85.41 · Filming 84.91 · Editing 77.77
Inputs: staff points {"plot":251.44,"writing":269.72,"filming":239.25,"editing":155.04}, Star filming points 69.96 (Star family fit 100), studio Action level 2 (+6%), era bar x1.11
Base scores: Audience 8.24 / Critic 8.39 · no weak meter
Combo grades: Audience B (x1.06) / Critic B (x1.06) · repetition fatigue x0.95 · critic saturation x1
Before expectations (after combo, weakness, fatigue, saturation; pre-clamp): Audience 8.3 / Critic 8.45 · critic generation 0 (−0.0%, scale) · audience era 0 (−0.0%) · then clamp 0–10 (generation/era 0 = the ones active at game start)
**Final: Audience 8.3 / Critic 8.45 → avg 8.38**

**Opening & viewership trace** [marketing/Fame/reach affect viewers only]

Awareness inputs: base 0.35, marketing 0.55, studioBuzz 0, starFame 0.25, trend 0.4, ipFans 0, announcement 0 → awareness 0.79. Reach cap 440,000 → pool 346,355 → opening 103,907.

| Wk | Viewers | Retention | Driver | Gross | Studio | Distributor |
|---:|---:|---:|---|---:|---:|---:|
| 1 | 173,178 | 1 | episode 1 premiere | $55,417 | $28,817 | $26,600 |
| 2 | 217,463 | 1.26 | episode 2: 100% kept (critic 8.45), +44,285 new | $69,588 | $36,186 | $33,402 |
| 3 | 245,476 | 1.13 | episode 3: 100% kept (critic 8.45), +28,013 new | $78,552 | $40,847 | $37,705 |
| 4 | 278,715 | 1.14 | episode 4: 100% kept (audience 8.3), +33,239 new | $89,189 | $46,378 | $42,811 |
| 5 | 317,491 | 1.14 | episode 5: 100% kept (audience 8.3), +38,776 new | $101,597 | $52,831 | $48,767 |
| 6 | 111,122 | 0.35 | catch-up viewing (tail week 1/2) | $35,559 | $18,491 | $17,068 |
| 7 | 38,893 | 0.35 | catch-up viewing (tail week 2/2) | $12,446 | $6,472 | $5,974 |
| 8 | 0 | 0 | run ended | $0 | $0 | $0 |

**Progression trace**

- Prestige awards: Prestige +50: meters_all_70 (Iron Legacy).; Prestige +75: audience_7_5 (Iron Legacy).
- IP fans: {"before":0,"after":17170,"delta":17170}
- Star career: {"fameDelta":11.48,"relDelta":0.75,"grow":0,"level":5,"reasons":"worked together (+); project boosted their career (+)"}
- Distributor trust: Meridian Global earned 113% of its advance back on Iron Legacy with strong reviews (step 0.46)
- Rule labels: LOCKED = causal chain, accounting, fallback/no-campaign, thresholds 4.0/9.0, IP fan inheritance. WORKING ASSUMPTION = all formulas' shapes and numbers.

### Iron Legacy: Season 2 — Action + Spies (season)

Released week 156 (year 3.0) · Distributor: XYZ Network · Star: Mo Diaz (L8, Fame 100) · IP: Iron Legacy
Format: **tv season 2**, 5 episodes (one per week) · 272,510 distinct viewers, 1,188,799 viewer-episodes · renewal: average 7.94 ≥ 4.0 → renewable
TV: show-age fatigue 1.0% (base 1.2%, quality slows by 18%) · twist none · hiatus 8 weeks since the last season aired → anticipation ×1 · announcement anticipation used 0.19

**Financial waterfall** [LOCKED rules; amounts provisional]

| Item | Amount |
|---|---:|
| Advance received (project reserve, not revenue) | $203,000 |
| Base cost (unavoidable) | −$90,000 |
| Star fee | −$29,734 |
| Marketing campaign | −$20,000 |
| Paid from studio cash (overrun) | $0 |
| **Unused advance kept at completion** | $63,266 |
| Gross from sales (8 weeks) | $380,416 |
| Distributor royalty (42% of weekly gross) | −$159,775 |
| **Studio take** | $220,641 |
| Net for this title (surplus + take − cash overrun; wages are studio-wide, excluded) | $283,907 |

**Quality trace** [scores are computed, never rolled]

Meters (0–100): Plot 85.25 · Writing 86.17 · Filming 85.38 · Editing 78.53
Inputs: staff points {"plot":269.29,"writing":290.24,"filming":254.54,"editing":163.88}, Star filming points 69.96 (Star family fit 100), studio Action level 2 (+6%), era bar x1.12
Base scores: Audience 8.31 / Critic 8.46 · no weak meter
Combo grades: Audience B (x1.06) / Critic B (x1.06) · repetition fatigue x0.94 · critic saturation x0.9
Before expectations (after combo, weakness, fatigue, saturation; pre-clamp): Audience 8.28 / Critic 7.59 · critic generation 0 (−0.0%, scale) · audience era 0 (−0.0%) · then clamp 0–10 (generation/era 0 = the ones active at game start)
**Final: Audience 8.28 / Critic 7.59 → avg 7.94**

**Opening & viewership trace** [marketing/Fame/reach affect viewers only]

Awareness inputs: base 0.35, marketing 0.55, studioBuzz 0, starFame 0.32, trend 0.1, ipFans 0.11, announcement 0.19 → awareness 0.8. Reach cap 376,000 → pool 300,978 → opening 90,293.

| Wk | Viewers | Retention | Driver | Gross | Studio | Distributor |
|---:|---:|---:|---|---:|---:|---:|
| 1 | 150,489 | 1 | episode 1 premiere | $48,156 | $27,931 | $20,226 |
| 2 | 187,268 | 1.24 | episode 2: 100% kept (critic 7.59), +36,779 new | $59,926 | $34,757 | $25,169 |
| 3 | 210,538 | 1.12 | episode 3: 100% kept (critic 7.59), +23,270 new | $67,372 | $39,076 | $28,296 |
| 4 | 239,233 | 1.14 | episode 4: 100% kept (audience 8.28), +28,695 new | $76,555 | $44,402 | $32,153 |
| 5 | 272,510 | 1.14 | episode 5: 100% kept (audience 8.28), +33,277 new | $87,203 | $50,578 | $36,625 |
| 6 | 95,379 | 0.35 | catch-up viewing (tail week 1/2) | $30,521 | $17,702 | $12,819 |
| 7 | 33,382 | 0.35 | catch-up viewing (tail week 2/2) | $10,682 | $6,196 | $4,487 |
| 8 | 0 | 0 | run ended | $0 | $0 | $0 |

**Progression trace**

- Prestige awards: Prestige +50: meters_all_70 (Iron Legacy: Season 2).; Prestige +75: audience_7_5 (Iron Legacy: Season 2).; Prestige +150: ip_viewers_500k (Iron Legacy: Season 2).
- IP fans: {"before":16649,"after":29468,"delta":12819}
- Star career: {"fameDelta":9.48,"relDelta":0.75,"grow":0,"level":5,"reasons":"worked together (+); project boosted their career (+)"}
- Distributor trust: XYZ Network earned back 79% of its $203,000 advance on Iron Legacy: Season 2 (step 0.2)
- Rule labels: LOCKED = causal chain, accounting, fallback/no-campaign, thresholds 4.0/9.0, IP fan inheritance. WORKING ASSUMPTION = all formulas' shapes and numbers.

### Iron Legacy: Season 3 — Action + Spies (season)

Released week 182 (year 3.5) · Distributor: Wolf Pictures · Star: Mo Diaz (L8, Fame 100) · IP: Iron Legacy
Format: **tv season 3**, 10 episodes (one per week) · 247,073 distinct viewers, 2,014,539 viewer-episodes · renewal: average 8.25 ≥ 4.0 → renewable
TV: show-age fatigue 3.2% (base 3.6%, quality slows by 13%) · twist none · hiatus 18 weeks since the last season aired → anticipation ×1 · announcement anticipation used 0.13

**Financial waterfall** [LOCKED rules; amounts provisional]

| Item | Amount |
|---|---:|
| Advance received (project reserve, not revenue) | $254,000 |
| Base cost (unavoidable) | −$165,000 |
| Star fee | −$44,996 |
| Marketing campaign | −$20,000 |
| Paid from studio cash (overrun) | $0 |
| **Unused advance kept at completion** | $24,004 |
| Gross from sales (13 weeks) | $644,652 |
| Distributor royalty (31% of weekly gross) | −$199,842 |
| **Studio take** | $444,810 |
| Net for this title (surplus + take − cash overrun; wages are studio-wide, excluded) | $468,814 |

**Quality trace** [scores are computed, never rolled]

Meters (0–100): Plot 85.58 · Writing 86.61 · Filming 86.13 · Editing 79.95
Inputs: staff points {"plot":457.4,"writing":498.56,"filming":453.83,"editing":295.4}, Star filming points 116.6 (Star family fit 100), studio Action level 2 (+6%), era bar x1.14
Base scores: Audience 8.4 / Critic 8.52 · no weak meter
Combo grades: Audience B (x1.06) / Critic B (x1.06) · repetition fatigue x0.92 · critic saturation x1
Before expectations (after combo, weakness, fatigue, saturation; pre-clamp): Audience 8.19 / Critic 8.31 · critic generation 0 (−0.0%, scale) · audience era 0 (−0.0%) · then clamp 0–10 (generation/era 0 = the ones active at game start)
**Final: Audience 8.19 / Critic 8.31 → avg 8.25**

**Opening & viewership trace** [marketing/Fame/reach affect viewers only]

Awareness inputs: base 0.35, marketing 0.55, studioBuzz 0, starFame 0.37, trend 0, ipFans 0.18, announcement 0.13 → awareness 0.79. Reach cap 264,000 → pool 209,673 → opening 62,902.

| Wk | Viewers | Retention | Driver | Gross | Studio | Distributor |
|---:|---:|---:|---|---:|---:|---:|
| 1 | 104,837 | 1 | episode 1 premiere | $33,548 | $23,148 | $10,400 |
| 2 | 131,430 | 1.25 | episode 2: 100% kept (critic 8.31), +26,593 new | $42,058 | $29,020 | $13,038 |
| 3 | 148,234 | 1.13 | episode 3: 100% kept (critic 8.31), +16,804 new | $47,435 | $32,730 | $14,705 |
| 4 | 167,898 | 1.13 | episode 4: 100% kept (audience 8.19), +19,664 new | $53,727 | $37,072 | $16,655 |
| 5 | 190,636 | 1.14 | episode 5: 100% kept (audience 8.19), +22,738 new | $61,004 | $42,092 | $18,911 |
| 6 | 209,480 | 1.1 | episode 6: 100% kept (audience 8.19), +18,844 new | $67,034 | $46,253 | $20,780 |
| 7 | 223,277 | 1.07 | episode 7: 100% kept (audience 8.19), +13,797 new | $71,449 | $49,300 | $22,149 |
| 8 | 233,612 | 1.05 | episode 8: 100% kept (audience 8.19), +10,335 new | $74,756 | $51,582 | $23,174 |
| 9 | 241,320 | 1.03 | episode 9: 100% kept (audience 8.19), +7,708 new | $77,222 | $53,283 | $23,939 |
| 10 | 247,073 | 1.02 | episode 10: 100% kept (audience 8.19), +5,753 new | $79,063 | $54,554 | $24,510 |
| 11 | 86,476 | 0.35 | catch-up viewing (tail week 1/2) | $27,672 | $19,094 | $8,578 |
| 12 | 30,266 | 0.35 | catch-up viewing (tail week 2/2) | $9,685 | $6,683 | $3,002 |
| 13 | 0 | 0 | run ended | $0 | $0 | $0 |

**Progression trace**

- Prestige awards: Prestige +50: meters_all_70 (Iron Legacy: Season 3).; Prestige +75: audience_7_5 (Iron Legacy: Season 3).; Prestige +100: ip_gross_1m (Iron Legacy: Season 3).
- IP fans: {"before":27761,"after":40609,"delta":12848}
- Star career: {"fameDelta":10.11,"relDelta":0.75,"grow":0,"level":6,"reasons":"worked together (+); project boosted their career (+)"}
- Distributor trust: Wolf Pictures earned back 79% of its $254,000 advance on Iron Legacy: Season 3 (step 0.24)
- Rule labels: LOCKED = causal chain, accounting, fallback/no-campaign, thresholds 4.0/9.0, IP fan inheritance. WORKING ASSUMPTION = all formulas' shapes and numbers.

### Iron Legacy: Season 4 — Action + Spies (season)

Released week 208 (year 4.0) · Distributor: XYZ Network · Star: Mo Diaz (L8, Fame 100) · IP: Iron Legacy
Format: **tv season 4**, 10 episodes (one per week) · 352,654 distinct viewers, 2,904,774 viewer-episodes · renewal: average 8.07 ≥ 4.0 → renewable
TV: show-age fatigue 5.8% (base 7.0%, quality slows by 17%) · twist none · hiatus 13 weeks since the last season aired → anticipation ×1 · announcement anticipation used 0.13

**Financial waterfall** [LOCKED rules; amounts provisional]

| Item | Amount |
|---|---:|
| Advance received (project reserve, not revenue) | $311,000 |
| Base cost (unavoidable) | −$165,000 |
| Star fee | −$44,146 |
| Marketing campaign | −$20,000 |
| Paid from studio cash (overrun) | $0 |
| **Unused advance kept at completion** | $81,854 |
| Gross from sales (13 weeks) | $929,528 |
| Distributor royalty (42% of weekly gross) | −$390,402 |
| **Studio take** | $539,126 |
| Net for this title (surplus + take − cash overrun; wages are studio-wide, excluded) | $620,980 |

**Quality trace** [scores are computed, never rolled]

Meters (0–100): Plot 86.58 · Writing 87.62 · Filming 87 · Editing 81.04
Inputs: staff points {"plot":506.12,"writing":554.99,"filming":505.56,"editing":322.32}, Star filming points 119.9 (Star family fit 100), studio Action level 3 (+9%), era bar x1.16
Base scores: Audience 8.49 / Critic 8.62 · no weak meter
Combo grades: Audience B (x1.06) / Critic B (x1.06) · repetition fatigue x0.89 · critic saturation x1
Before expectations (after combo, weakness, fatigue, saturation; pre-clamp): Audience 8.01 / Critic 8.13 · critic generation 0 (−0.0%, scale) · audience era 0 (−0.0%) · then clamp 0–10 (generation/era 0 = the ones active at game start)
**Final: Audience 8.01 / Critic 8.13 → avg 8.07**

**Opening & viewership trace** [marketing/Fame/reach affect viewers only]

Awareness inputs: base 0.35, marketing 0.55, studioBuzz 0, starFame 0.43, trend 0, ipFans 0.25, announcement 0.13 → awareness 0.82. Reach cap 376,000 → pool 308,077 → opening 92,423.

| Wk | Viewers | Retention | Driver | Gross | Studio | Distributor |
|---:|---:|---:|---|---:|---:|---:|
| 1 | 154,039 | 1 | episode 1 premiere | $49,292 | $28,590 | $20,703 |
| 2 | 192,632 | 1.25 | episode 2: 100% kept (critic 8.13), +38,593 new | $61,642 | $35,753 | $25,890 |
| 3 | 216,913 | 1.13 | episode 3: 100% kept (critic 8.13), +24,281 new | $69,412 | $40,259 | $29,153 |
| 4 | 244,654 | 1.13 | episode 4: 100% kept (audience 8.01), +27,741 new | $78,289 | $45,408 | $32,882 |
| 5 | 276,278 | 1.13 | episode 5: 100% kept (audience 8.01), +31,624 new | $88,409 | $51,277 | $37,132 |
| 6 | 301,581 | 1.09 | episode 6: 100% kept (audience 8.01), +25,303 new | $96,506 | $55,973 | $40,532 |
| 7 | 320,282 | 1.06 | episode 7: 100% kept (audience 8.01), +18,701 new | $102,490 | $59,444 | $43,046 |
| 8 | 334,310 | 1.04 | episode 8: 100% kept (audience 8.01), +14,028 new | $106,979 | $62,048 | $44,931 |
| 9 | 344,802 | 1.03 | episode 9: 100% kept (audience 8.01), +10,492 new | $110,337 | $63,995 | $46,341 |
| 10 | 352,654 | 1.02 | episode 10: 100% kept (audience 8.01), +7,852 new | $112,849 | $65,453 | $47,397 |
| 11 | 123,429 | 0.35 | catch-up viewing (tail week 1/2) | $39,497 | $22,908 | $16,589 |
| 12 | 43,200 | 0.35 | catch-up viewing (tail week 2/2) | $13,824 | $8,018 | $5,806 |
| 13 | 0 | 0 | run ended | $0 | $0 | $0 |

**Progression trace**

- Prestige awards: Prestige +50: meters_all_70 (Iron Legacy: Season 4).; Prestige +75: audience_7_5 (Iron Legacy: Season 4).
- IP fans: {"before":38627,"after":55949,"delta":17322}
- Star career: {"fameDelta":10.77,"relDelta":0.75,"grow":0,"level":6,"reasons":"worked together (+); project boosted their career (+)"}
- Distributor trust: XYZ Network earned 126% of its advance back on Iron Legacy: Season 4 with strong reviews (step 0.5)
- Rule labels: LOCKED = causal chain, accounting, fallback/no-campaign, thresholds 4.0/9.0, IP fan inheritance. WORKING ASSUMPTION = all formulas' shapes and numbers.

### Iron Legacy: Season 5 — Action + Spies (season)

Released week 234 (year 4.5) · Distributor: Meridian Global · Star: Mo Diaz (L8, Fame 100) · IP: Iron Legacy
Format: **tv season 5**, 10 episodes (one per week) · 414,395 distinct viewers, 3,453,793 viewer-episodes · renewal: average 8 ≥ 4.0 → renewable
TV: show-age fatigue 9.5% (base 11.0%, quality slows by 14%) · twist none · hiatus 13 weeks since the last season aired → anticipation ×1 · announcement anticipation used 0.13

**Financial waterfall** [LOCKED rules; amounts provisional]

| Item | Amount |
|---|---:|
| Advance received (project reserve, not revenue) | $336,000 |
| Base cost (unavoidable) | −$165,000 |
| Star fee | −$50,830 |
| Marketing campaign | −$20,000 |
| Paid from studio cash (overrun) | $0 |
| **Unused advance kept at completion** | $100,170 |
| Gross from sales (13 weeks) | $1,105,214 |
| Distributor royalty (48% of weekly gross) | −$530,503 |
| **Studio take** | $574,711 |
| Net for this title (surplus + take − cash overrun; wages are studio-wide, excluded) | $674,881 |

**Quality trace** [scores are computed, never rolled]

Meters (0–100): Plot 88.78 · Writing 89.95 · Filming 88.33 · Editing 83.94
Inputs: staff points {"plot":631.09,"writing":714.01,"filming":599.65,"editing":401.01}, Star filming points 119.9 (Star family fit 100), studio Action level 3 (+9%), era bar x1.18
Base scores: Audience 8.71 / Critic 8.84 · no weak meter
Combo grades: Audience B (x1.06) / Critic B (x1.06) · repetition fatigue x0.86 · critic saturation x1
Before expectations (after combo, weakness, fatigue, saturation; pre-clamp): Audience 7.94 / Critic 8.06 · critic generation 0 (−0.0%, scale) · audience era 0 (−0.0%) · then clamp 0–10 (generation/era 0 = the ones active at game start)
**Final: Audience 7.94 / Critic 8.06 → avg 8**

**Opening & viewership trace** [marketing/Fame/reach affect viewers only]

Awareness inputs: base 0.35, marketing 0.55, studioBuzz 0, starFame 0.5, trend 0, ipFans 0.34, announcement 0.13 → awareness 0.85. Reach cap 440,000 → pool 372,141 → opening 111,642.

| Wk | Viewers | Retention | Driver | Gross | Studio | Distributor |
|---:|---:|---:|---|---:|---:|---:|
| 1 | 186,071 | 1 | episode 1 premiere | $59,543 | $30,962 | $28,581 |
| 2 | 232,379 | 1.25 | episode 2: 100% kept (critic 8.06), +46,308 new | $74,361 | $38,668 | $35,693 |
| 3 | 261,382 | 1.12 | episode 3: 100% kept (critic 8.06), +29,003 new | $83,642 | $43,494 | $40,148 |
| 4 | 294,262 | 1.13 | episode 4: 100% kept (audience 7.94), +32,880 new | $94,164 | $48,965 | $45,199 |
| 5 | 331,561 | 1.13 | episode 5: 100% kept (audience 7.94), +37,299 new | $106,100 | $55,172 | $50,928 |
| 6 | 358,665 | 1.08 | episode 6: 100% kept (audience 7.94), +27,104 new | $114,773 | $59,682 | $55,091 |
| 7 | 379,088 | 1.06 | episode 7: 100% kept (audience 7.94), +20,423 new | $121,308 | $63,080 | $58,228 |
| 8 | 394,370 | 1.04 | episode 8: 100% kept (audience 7.94), +15,282 new | $126,198 | $65,623 | $60,575 |
| 9 | 405,819 | 1.03 | episode 9: 100% kept (audience 7.94), +11,449 new | $129,862 | $67,528 | $62,334 |
| 10 | 414,395 | 1.02 | episode 10: 100% kept (audience 7.94), +8,576 new | $132,606 | $68,955 | $63,651 |
| 11 | 145,038 | 0.35 | catch-up viewing (tail week 1/2) | $46,412 | $24,134 | $22,278 |
| 12 | 50,763 | 0.35 | catch-up viewing (tail week 2/2) | $16,244 | $8,447 | $7,797 |
| 13 | 0 | 0 | run ended | $0 | $0 | $0 |

**Progression trace**

- Prestige awards: Prestige +50: meters_all_70 (Iron Legacy: Season 5).; Prestige +75: audience_7_5 (Iron Legacy: Season 5).
- IP fans: {"before":53216,"after":73107,"delta":19891}
- Star career: {"fameDelta":11.01,"relDelta":0.75,"grow":0,"level":7,"reasons":"worked together (+); project boosted their career (+)"}
- Distributor trust: Meridian Global earned 158% of its advance back on Iron Legacy: Season 5 with strong reviews (step 0.68)
- Rule labels: LOCKED = causal chain, accounting, fallback/no-campaign, thresholds 4.0/9.0, IP fan inheritance. WORKING ASSUMPTION = all formulas' shapes and numbers.

### Iron Legacy: Season 6 — Action + Spies (season)

Released week 260 (year 5.0) · Distributor: Orbit Releasing · Star: Mo Diaz (L8, Fame 100) · IP: Iron Legacy
Format: **tv season 6**, 10 episodes (one per week) · 283,135 distinct viewers, 2,395,602 viewer-episodes · renewal: average 7.59 ≥ 4.0 → renewable
TV: show-age fatigue 13.7% (base 15.8%, quality slows by 13%) · twist none · hiatus 13 weeks since the last season aired → anticipation ×1 · announcement anticipation used 0.13

**Financial waterfall** [LOCKED rules; amounts provisional]

| Item | Amount |
|---|---:|
| Advance received (project reserve, not revenue) | $226,000 |
| Base cost (unavoidable) | −$165,000 |
| Star fee | −$57,664 |
| Marketing campaign | −$20,000 |
| Paid from studio cash (overrun) | $16,664 |
| **Unused advance kept at completion** | $0 |
| Gross from sales (13 weeks) | $766,593 |
| Distributor royalty (34% of weekly gross) | −$260,641 |
| **Studio take** | $505,951 |
| Net for this title (surplus + take − cash overrun; wages are studio-wide, excluded) | $489,287 |

**Quality trace** [scores are computed, never rolled]

Meters (0–100): Plot 89.33 · Writing 90.46 · Filming 88.85 · Editing 84.62
Inputs: staff points {"plot":679.01,"writing":769.51,"filming":650.71,"editing":429.2}, Star filming points 119.9 (Star family fit 100), studio Action level 3 (+9%), era bar x1.2
Base scores: Audience 8.77 / Critic 8.89 · no weak meter
Combo grades: Audience B (x1.06) / Critic B (x1.06) · repetition fatigue x0.81 · critic saturation x1
Before expectations (after combo, weakness, fatigue, saturation; pre-clamp): Audience 7.53 / Critic 7.64 · critic generation 0 (−0.0%, scale) · audience era 0 (−0.0%) · then clamp 0–10 (generation/era 0 = the ones active at game start)
**Final: Audience 7.53 / Critic 7.64 → avg 7.59**

**Opening & viewership trace** [marketing/Fame/reach affect viewers only]

Awareness inputs: base 0.35, marketing 0.55, studioBuzz 0, starFame 0.56, trend 0.15, ipFans 0.45, announcement 0.13 → awareness 0.89. Reach cap 300,000 → pool 266,424 → opening 79,927.

| Wk | Viewers | Retention | Driver | Gross | Studio | Distributor |
|---:|---:|---:|---|---:|---:|---:|
| 1 | 133,212 | 1 | episode 1 premiere | $42,628 | $28,134 | $14,493 |
| 2 | 165,557 | 1.24 | episode 2: 100% kept (critic 7.64), +32,345 new | $52,978 | $34,966 | $18,013 |
| 3 | 185,740 | 1.12 | episode 3: 100% kept (critic 7.64), +20,183 new | $59,437 | $39,228 | $20,209 |
| 4 | 207,245 | 1.12 | episode 4: 100% kept (audience 7.53), +21,505 new | $66,318 | $43,770 | $22,548 |
| 5 | 230,713 | 1.11 | episode 5: 100% kept (audience 7.53), +23,468 new | $73,828 | $48,727 | $25,102 |
| 6 | 247,697 | 1.07 | episode 6: 100% kept (audience 7.53), +16,984 new | $79,263 | $52,314 | $26,949 |
| 7 | 260,597 | 1.05 | episode 7: 100% kept (audience 7.53), +12,900 new | $83,391 | $55,038 | $28,353 |
| 8 | 270,304 | 1.04 | episode 8: 100% kept (audience 7.53), +9,707 new | $86,497 | $57,088 | $29,409 |
| 9 | 277,621 | 1.03 | episode 9: 100% kept (audience 7.53), +7,317 new | $88,839 | $58,634 | $30,205 |
| 10 | 283,135 | 1.02 | episode 10: 100% kept (audience 7.53), +5,514 new | $90,603 | $59,798 | $30,805 |
| 11 | 99,097 | 0.35 | catch-up viewing (tail week 1/2) | $31,711 | $20,929 | $10,782 |
| 12 | 34,684 | 0.35 | catch-up viewing (tail week 2/2) | $11,099 | $7,325 | $3,774 |
| 13 | 0 | 0 | run ended | $0 | $0 | $0 |

**Progression trace**

- Prestige awards: Prestige +50: meters_all_70 (Iron Legacy: Season 6).; Prestige +75: audience_7_5 (Iron Legacy: Season 6).
- IP fans: {"before":69538,"after":81271,"delta":11733}
- Star career: {"fameDelta":8.47,"relDelta":0.75,"grow":0,"level":7,"reasons":"worked together (+); project boosted their career (+)"}
- Distributor trust: Orbit Releasing earned 115% of its advance back on Iron Legacy: Season 6 with strong reviews (step 0.37)
- Rule labels: LOCKED = causal chain, accounting, fallback/no-campaign, thresholds 4.0/9.0, IP fan inheritance. WORKING ASSUMPTION = all formulas' shapes and numbers.

### Iron Legacy: Season 7 — Action + Spies (season)

Released week 286 (year 5.5) · Distributor: Meridian Global · Star: Mo Diaz (L8, Fame 100) · IP: Iron Legacy
Format: **tv season 7**, 10 episodes (one per week) · 415,167 distinct viewers, 3,547,442 viewer-episodes · renewal: average 7.15 ≥ 4.0 → renewable
TV: show-age fatigue 19.4% (base 21.1%, quality slows by 8%) · twist none · hiatus 13 weeks since the last season aired → anticipation ×1 · announcement anticipation used 0.13

**Financial waterfall** [LOCKED rules; amounts provisional]

| Item | Amount |
|---|---:|
| Advance received (project reserve, not revenue) | $420,000 |
| Base cost (unavoidable) | −$165,000 |
| Star fee | −$66,431 |
| Marketing campaign | −$20,000 |
| Paid from studio cash (overrun) | $0 |
| **Unused advance kept at completion** | $168,569 |
| Gross from sales (13 weeks) | $1,135,181 |
| Distributor royalty (46% of weekly gross) | −$522,183 |
| **Studio take** | $612,998 |
| Net for this title (surplus + take − cash overrun; wages are studio-wide, excluded) | $781,567 |

**Quality trace** [scores are computed, never rolled]

Meters (0–100): Plot 89.72 · Writing 90.82 · Filming 89.19 · Editing 85.15
Inputs: staff points {"plot":719.84,"writing":816.32,"filming":691.13,"editing":454.74}, Star filming points 119.9 (Star family fit 100), studio Action level 3 (+9%), era bar x1.22
Base scores: Audience 8.81 / Critic 8.93 · no weak meter
Combo grades: Audience B (x1.06) / Critic B (x1.06) · repetition fatigue x0.76 · critic saturation x1
Before expectations (after combo, weakness, fatigue, saturation; pre-clamp): Audience 7.1 / Critic 7.2 · critic generation 0 (−0.0%, scale) · audience era 0 (−0.0%) · then clamp 0–10 (generation/era 0 = the ones active at game start)
**Final: Audience 7.1 / Critic 7.2 → avg 7.15**

**Opening & viewership trace** [marketing/Fame/reach affect viewers only]

Awareness inputs: base 0.35, marketing 0.55, studioBuzz 0, starFame 0.6, trend 0.4, ipFans 0.5, announcement 0.13 → awareness 0.92. Reach cap 440,000 → pool 404,788 → opening 121,436.

| Wk | Viewers | Retention | Driver | Gross | Studio | Distributor |
|---:|---:|---:|---|---:|---:|---:|
| 1 | 202,394 | 1 | episode 1 premiere | $64,766 | $34,974 | $29,792 |
| 2 | 250,392 | 1.24 | episode 2: 100% kept (critic 7.2), +47,998 new | $80,125 | $43,268 | $36,858 |
| 3 | 280,342 | 1.12 | episode 3: 100% kept (critic 7.2), +29,950 new | $89,709 | $48,443 | $41,266 |
| 4 | 310,037 | 1.11 | episode 4: 100% kept (audience 7.1), +29,695 new | $99,212 | $53,574 | $45,637 |
| 5 | 340,895 | 1.1 | episode 5: 100% kept (audience 7.1), +30,858 new | $109,086 | $58,907 | $50,180 |
| 6 | 364,923 | 1.07 | episode 6: 100% kept (audience 7.1), +24,028 new | $116,775 | $63,059 | $53,717 |
| 7 | 383,055 | 1.05 | episode 7: 100% kept (audience 7.1), +18,132 new | $122,578 | $66,192 | $56,386 |
| 8 | 396,818 | 1.04 | episode 8: 100% kept (audience 7.1), +13,763 new | $126,982 | $68,570 | $58,412 |
| 9 | 407,253 | 1.03 | episode 9: 100% kept (audience 7.1), +10,435 new | $130,321 | $70,373 | $59,948 |
| 10 | 415,167 | 1.02 | episode 10: 100% kept (audience 7.1), +7,914 new | $132,853 | $71,741 | $61,113 |
| 11 | 145,308 | 0.35 | catch-up viewing (tail week 1/2) | $46,499 | $25,109 | $21,389 |
| 12 | 50,858 | 0.35 | catch-up viewing (tail week 2/2) | $16,275 | $8,788 | $7,486 |
| 13 | 0 | 0 | run ended | $0 | $0 | $0 |

**Progression trace**

- Prestige awards: Prestige +50: meters_all_70 (Iron Legacy: Season 7).; Prestige +150: ip_gross_5m (Iron Legacy: Season 7).
- IP fans: {"before":77304,"after":91586,"delta":14282}
- Star career: {"fameDelta":7.9,"relDelta":0.25,"grow":0,"level":8,"reasons":"worked together (+)"}
- Distributor trust: Meridian Global earned 124% of its advance back on Iron Legacy: Season 7 with strong reviews (step 0.37)
- Rule labels: LOCKED = causal chain, accounting, fallback/no-campaign, thresholds 4.0/9.0, IP fan inheritance. WORKING ASSUMPTION = all formulas' shapes and numbers.

### Iron Legacy: Season 8 — Action + Spies (season)

Released week 312 (year 6.0) · Distributor: Meridian Global · Star: Mo Diaz (L8, Fame 100) · IP: Iron Legacy
Format: **tv season 8**, 10 episodes (one per week) · 410,224 distinct viewers, 3,101,318 viewer-episodes · renewal: average 6.54 ≥ 4.0 → renewable
TV: show-age fatigue 26.5% (base 27.0%, quality slows by 2%) · twist none · hiatus 13 weeks since the last season aired → anticipation ×1 · announcement anticipation used 0.13

**Financial waterfall** [LOCKED rules; amounts provisional]

| Item | Amount |
|---|---:|
| Advance received (project reserve, not revenue) | $473,000 |
| Base cost (unavoidable) | −$165,000 |
| Star fee | −$71,163 |
| Marketing campaign | −$20,000 |
| Paid from studio cash (overrun) | $0 |
| **Unused advance kept at completion** | $216,837 |
| Gross from sales (13 weeks) | $992,422 |
| Distributor royalty (45% of weekly gross) | −$446,590 |
| **Studio take** | $545,832 |
| Net for this title (surplus + take − cash overrun; wages are studio-wide, excluded) | $762,669 |

**Quality trace** [scores are computed, never rolled]

Meters (0–100): Plot 90.35 · Writing 91.39 · Filming 89.79 · Editing 85.96
Inputs: staff points {"plot":784.45,"writing":889.68,"filming":755.5,"editing":493.6}, Star filming points 123.2 (Star family fit 100), studio Action level 4 (+12%), era bar x1.24
Base scores: Audience 8.88 / Critic 9 · no weak meter
Combo grades: Audience B (x1.06) / Critic B (x1.06) · repetition fatigue x0.69 · critic saturation x1
Before expectations (after combo, weakness, fatigue, saturation; pre-clamp): Audience 6.49 / Critic 6.58 · critic generation 0 (−0.0%, scale) · audience era 0 (−0.0%) · then clamp 0–10 (generation/era 0 = the ones active at game start)
**Final: Audience 6.49 / Critic 6.58 → avg 6.54**

**Opening & viewership trace** [marketing/Fame/reach affect viewers only]

Awareness inputs: base 0.35, marketing 0.55, studioBuzz 0, starFame 0.6, trend 0.4, ipFans 0.56, announcement 0.13 → awareness 0.92. Reach cap 440,000 → pool 406,934 → opening 122,080.

| Wk | Viewers | Retention | Driver | Gross | Studio | Distributor |
|---:|---:|---:|---|---:|---:|---:|
| 1 | 203,467 | 1 | episode 1 premiere | $65,109 | $35,810 | $29,299 |
| 2 | 245,162 | 1.2 | episode 2: 97% kept (critic 6.58), +46,822 new | $78,452 | $43,149 | $35,303 |
| 3 | 268,369 | 1.09 | episode 3: 97% kept (critic 6.58), +29,385 new | $85,878 | $47,233 | $38,645 |
| 4 | 285,839 | 1.07 | episode 4: 97% kept (audience 6.49), +25,682 new | $91,468 | $50,308 | $41,161 |
| 5 | 301,066 | 1.05 | episode 5: 97% kept (audience 6.49), +23,974 new | $96,341 | $52,988 | $43,354 |
| 6 | 315,192 | 1.05 | episode 6: 97% kept (audience 6.49), +23,339 new | $100,861 | $55,474 | $45,388 |
| 7 | 326,446 | 1.04 | episode 7: 97% kept (audience 6.49), +20,899 new | $104,463 | $57,455 | $47,008 |
| 8 | 332,010 | 1.02 | episode 8: 97% kept (audience 6.49), +15,553 new | $106,243 | $58,434 | $47,809 |
| 9 | 333,811 | 1.01 | episode 9: 97% kept (audience 6.49), +11,961 new | $106,820 | $58,751 | $48,069 |
| 10 | 332,738 | 1 | episode 10: 97% kept (audience 6.49), +9,142 new | $106,476 | $58,562 | $47,914 |
| 11 | 116,458 | 0.35 | catch-up viewing (tail week 1/2) | $37,267 | $20,497 | $16,770 |
| 12 | 40,760 | 0.35 | catch-up viewing (tail week 2/2) | $13,043 | $7,174 | $5,869 |
| 13 | 0 | 0 | run ended | $0 | $0 | $0 |

**Progression trace**

- Prestige awards: Prestige +50: meters_all_70 (Iron Legacy: Season 8).
- IP fans: {"before":87117,"after":97225,"delta":10108}
- Star career: {"fameDelta":5.64,"relDelta":0.25,"grow":0,"level":8,"reasons":"worked together (+)"}
- Distributor trust: Meridian Global earned back 94% of its $473,000 advance on Iron Legacy: Season 8 (step 0.11)
- Rule labels: LOCKED = causal chain, accounting, fallback/no-campaign, thresholds 4.0/9.0, IP fan inheritance. WORKING ASSUMPTION = all formulas' shapes and numbers.

### Last Shadow — Horror + Spies (new)

Released week 338 (year 6.5) · Distributor: Meridian Global · Star: Kit Okafor (L7, Fame 96) · IP: Last Shadow
Format: **tv season 1**, 10 episodes (one per week) · 369,229 distinct viewers, 2,832,919 viewer-episodes · renewal: average 7.91 ≥ 4.0 → renewable

**Financial waterfall** [LOCKED rules; amounts provisional]

| Item | Amount |
|---|---:|
| Advance received (project reserve, not revenue) | $368,000 |
| Base cost (unavoidable) | −$165,000 |
| Star fee | −$19,453 |
| Marketing campaign | −$20,000 |
| Paid from studio cash (overrun) | $0 |
| **Unused advance kept at completion** | $163,547 |
| Gross from sales (13 weeks) | $906,534 |
| Distributor royalty (46% of weekly gross) | −$417,006 |
| **Studio take** | $489,528 |
| Net for this title (surplus + take − cash overrun; wages are studio-wide, excluded) | $653,076 |

**Quality trace** [scores are computed, never rolled]

Meters (0–100): Plot 90.19 · Writing 91.23 · Filming 89.48 · Editing 85.62
Inputs: staff points {"plot":782.82,"writing":886.31,"filming":747.62,"editing":487.52}, Star filming points 116.6 (Star family fit 100), studio Horror level 2 (+6%), era bar x1.26
Base scores: Audience 8.85 / Critic 8.98 · no weak meter
Combo grades: Audience B (x1.06) / Critic D (x0.9) · repetition fatigue x0.95 · critic saturation x0.9
Before expectations (after combo, weakness, fatigue, saturation; pre-clamp): Audience 8.91 / Critic 6.91 · critic generation 0 (−0.0%, scale) · audience era 0 (−0.0%) · then clamp 0–10 (generation/era 0 = the ones active at game start)
**Final: Audience 8.91 / Critic 6.91 → avg 7.91**

**Opening & viewership trace** [marketing/Fame/reach affect viewers only]

Awareness inputs: base 0.35, marketing 0.55, studioBuzz 0, starFame 0.17, trend 0.1, ipFans 0, announcement 0 → awareness 0.69. Reach cap 400,000 → pool 276,349 → opening 82,905.

| Wk | Viewers | Retention | Driver | Gross | Studio | Distributor |
|---:|---:|---:|---|---:|---:|---:|
| 1 | 138,175 | 1 | episode 1 premiere | $44,216 | $23,877 | $20,339 |
| 2 | 170,371 | 1.23 | episode 2: 99% kept (critic 6.91), +32,942 new | $54,519 | $29,440 | $25,079 |
| 3 | 190,672 | 1.12 | episode 3: 99% kept (critic 6.91), +21,221 new | $61,015 | $32,948 | $28,067 |
| 4 | 220,562 | 1.16 | episode 4: 100% kept (audience 8.91), +29,890 new | $70,580 | $38,113 | $32,467 |
| 5 | 256,418 | 1.16 | episode 5: 100% kept (audience 8.91), +35,856 new | $82,054 | $44,309 | $37,745 |
| 6 | 295,062 | 1.15 | episode 6: 100% kept (audience 8.91), +38,644 new | $94,420 | $50,987 | $43,433 |
| 7 | 321,863 | 1.09 | episode 7: 100% kept (audience 8.91), +26,801 new | $102,996 | $55,618 | $47,378 |
| 8 | 341,900 | 1.06 | episode 8: 100% kept (audience 8.91), +20,037 new | $109,408 | $59,080 | $50,328 |
| 9 | 356,660 | 1.04 | episode 9: 100% kept (audience 8.91), +14,760 new | $114,131 | $61,631 | $52,500 |
| 10 | 367,563 | 1.03 | episode 10: 100% kept (audience 8.91), +10,903 new | $117,620 | $63,515 | $54,105 |
| 11 | 128,647 | 0.35 | catch-up viewing (tail week 1/2) | $41,167 | $22,230 | $18,937 |
| 12 | 45,026 | 0.35 | catch-up viewing (tail week 2/2) | $14,408 | $7,780 | $6,628 |
| 13 | 0 | 0 | run ended | $0 | $0 | $0 |

**Progression trace**

- Prestige awards: Prestige +50: meters_all_70 (Last Shadow).; Prestige +75: audience_7_5 (Last Shadow).
- IP fans: {"before":0,"after":17191,"delta":17191}
- Star career: {"fameDelta":10.35,"relDelta":0.75,"grow":0,"level":3,"reasons":"worked together (+); project boosted their career (+)"}
- Distributor trust: Meridian Global earned 113% of its advance back on Last Shadow with strong reviews (step 0.4)
- Rule labels: LOCKED = causal chain, accounting, fallback/no-campaign, thresholds 4.0/9.0, IP fan inheritance. WORKING ASSUMPTION = all formulas' shapes and numbers.

### Last Shadow: Season 2 — Horror + Spies (season)

Released week 374 (year 7.2) · Distributor: Meridian Global · Star: Kit Okafor (L7, Fame 96) · IP: Last Shadow
Format: **tv season 2**, 15 episodes (one per week) · 393,963 distinct viewers, 4,898,849 viewer-episodes · renewal: average 8.23 ≥ 4.0 → renewable
TV: show-age fatigue 1.1% (base 1.2%, quality slows by 12%) · twist none · hiatus 23 weeks since the last season aired → anticipation ×1 · announcement anticipation used 0.08

**Financial waterfall** [LOCKED rules; amounts provisional]

| Item | Amount |
|---|---:|
| Advance received (project reserve, not revenue) | $420,000 |
| Base cost (unavoidable) | −$240,000 |
| Star fee | −$26,578 |
| Marketing campaign | −$20,000 |
| Paid from studio cash (overrun) | $0 |
| **Unused advance kept at completion** | $133,422 |
| Gross from sales (18 weeks) | $1,567,632 |
| Distributor royalty (48% of weekly gross) | −$752,463 |
| **Studio take** | $815,168 |
| Net for this title (surplus + take − cash overrun; wages are studio-wide, excluded) | $948,590 |

**Quality trace** [scores are computed, never rolled]

Meters (0–100): Plot 90.3 · Writing 91.36 · Filming 89.78 · Editing 86.21
Inputs: staff points {"plot":1122.56,"writing":1274.13,"filming":1099.75,"editing":724.5}, Star filming points 163.24 (Star family fit 100), studio Horror level 2 (+6%), era bar x1.29
Base scores: Audience 8.88 / Critic 9 · no weak meter
Combo grades: Audience B (x1.06) / Critic D (x0.9) · repetition fatigue x0.94 · critic saturation x1
Before expectations (after combo, weakness, fatigue, saturation; pre-clamp): Audience 8.85 / Critic 7.61 · critic generation 0 (−0.0%, scale) · audience era 0 (−0.0%) · then clamp 0–10 (generation/era 0 = the ones active at game start)
**Final: Audience 8.85 / Critic 7.61 → avg 8.23**

**Opening & viewership trace** [marketing/Fame/reach affect viewers only]

Awareness inputs: base 0.35, marketing 0.55, studioBuzz 0, starFame 0.24, trend 0, ipFans 0.1, announcement 0.08 → awareness 0.73. Reach cap 400,000 → pool 293,027 → opening 87,908.

| Wk | Viewers | Retention | Driver | Gross | Studio | Distributor |
|---:|---:|---:|---|---:|---:|---:|
| 1 | 146,514 | 1 | episode 1 premiere | $46,884 | $24,380 | $22,505 |
| 2 | 182,658 | 1.25 | episode 2: 100% kept (critic 7.61), +36,144 new | $58,451 | $30,394 | $28,056 |
| 3 | 205,809 | 1.13 | episode 3: 100% kept (critic 7.61), +23,151 new | $65,859 | $34,247 | $31,612 |
| 4 | 237,236 | 1.15 | episode 4: 100% kept (audience 8.85), +31,427 new | $75,916 | $39,476 | $36,439 |
| 5 | 275,046 | 1.16 | episode 5: 100% kept (audience 8.85), +37,810 new | $88,015 | $45,768 | $42,247 |
| 6 | 308,317 | 1.12 | episode 6: 100% kept (audience 8.85), +33,271 new | $98,661 | $51,304 | $47,357 |
| 7 | 332,147 | 1.08 | episode 7: 100% kept (audience 8.85), +23,830 new | $106,287 | $55,269 | $51,018 |
| 8 | 349,867 | 1.05 | episode 8: 100% kept (audience 8.85), +17,720 new | $111,957 | $58,218 | $53,740 |
| 9 | 362,947 | 1.04 | episode 9: 100% kept (audience 8.85), +13,080 new | $116,143 | $60,394 | $55,749 |
| 10 | 372,616 | 1.03 | episode 10: 100% kept (audience 8.85), +9,669 new | $119,237 | $62,003 | $57,234 |
| 11 | 379,762 | 1.02 | episode 11: 100% kept (audience 8.85), +7,146 new | $121,524 | $63,192 | $58,331 |
| 12 | 385,043 | 1.01 | episode 12: 100% kept (audience 8.85), +5,281 new | $123,214 | $64,071 | $59,143 |
| 13 | 388,946 | 1.01 | episode 13: 100% kept (audience 8.85), +3,903 new | $124,463 | $64,721 | $59,742 |
| 14 | 391,831 | 1.01 | episode 14: 100% kept (audience 8.85), +2,885 new | $125,386 | $65,201 | $60,185 |
| 15 | 393,963 | 1.01 | episode 15: 100% kept (audience 8.85), +2,132 new | $126,068 | $65,555 | $60,513 |
| 16 | 137,887 | 0.35 | catch-up viewing (tail week 1/2) | $44,124 | $22,944 | $21,179 |
| 17 | 48,260 | 0.35 | catch-up viewing (tail week 2/2) | $15,443 | $8,030 | $7,413 |
| 18 | 0 | 0 | run ended | $0 | $0 | $0 |

**Progression trace**

- Prestige awards: Prestige +50: meters_all_70 (Last Shadow: Season 2).; Prestige +75: audience_7_5 (Last Shadow: Season 2).; Prestige +150: ip_viewers_500k (Last Shadow: Season 2).; Prestige +100: ip_gross_1m (Last Shadow: Season 2).
- IP fans: {"before":15885,"after":36245,"delta":20360}
- Star career: {"fameDelta":11.7,"relDelta":0.75,"grow":0,"level":4,"reasons":"worked together (+); project boosted their career (+)"}
- Distributor trust: Meridian Global earned 179% of its advance back on Last Shadow: Season 2 with strong reviews (step 0.75)
- Rule labels: LOCKED = causal chain, accounting, fallback/no-campaign, thresholds 4.0/9.0, IP fan inheritance. WORKING ASSUMPTION = all formulas' shapes and numbers.

### Last Shadow: Season 3 — Horror + Spies (season)

Released week 410 (year 7.9) · Distributor: Meridian Global · Star: Kit Okafor (L7, Fame 96) · IP: Last Shadow
Format: **tv season 3**, 15 episodes (one per week) · 394,875 distinct viewers, 5,052,147 viewer-episodes · renewal: average 8.08 ≥ 4.0 → renewable
TV: show-age fatigue 3.0% (base 3.6%, quality slows by 16%) · twist none · hiatus 18 weeks since the last season aired → anticipation ×1 · announcement anticipation used 0.08

**Financial waterfall** [LOCKED rules; amounts provisional]

| Item | Amount |
|---|---:|
| Advance received (project reserve, not revenue) | $451,000 |
| Base cost (unavoidable) | −$240,000 |
| Star fee | −$26,413 |
| Marketing campaign | −$20,000 |
| Paid from studio cash (overrun) | $0 |
| **Unused advance kept at completion** | $164,587 |
| Gross from sales (18 weeks) | $1,616,687 |
| Distributor royalty (46% of weekly gross) | −$743,676 |
| **Studio take** | $873,011 |
| Net for this title (surplus + take − cash overrun; wages are studio-wide, excluded) | $1,037,598 |

**Quality trace** [scores are computed, never rolled]

Meters (0–100): Plot 90.62 · Writing 91.63 · Filming 90 · Editing 86.49
Inputs: staff points {"plot":1189.84,"writing":1348.36,"filming":1158.61,"editing":757.76}, Star filming points 163.24 (Star family fit 100), studio Horror level 2 (+6%), era bar x1.32
Base scores: Audience 8.91 / Critic 9.03 · no weak meter
Combo grades: Audience B (x1.06) / Critic D (x0.9) · repetition fatigue x0.92 · critic saturation x1
Before expectations (after combo, weakness, fatigue, saturation; pre-clamp): Audience 8.69 / Critic 7.47 · critic generation 0 (−0.0%, scale) · audience era 0 (−0.0%) · then clamp 0–10 (generation/era 0 = the ones active at game start)
**Final: Audience 8.69 / Critic 7.47 → avg 8.08**

**Opening & viewership trace** [marketing/Fame/reach affect viewers only]

Awareness inputs: base 0.35, marketing 0.55, studioBuzz 0, starFame 0.31, trend 0.15, ipFans 0.22, announcement 0.08 → awareness 0.81. Reach cap 400,000 → pool 323,572 → opening 97,072.

| Wk | Viewers | Retention | Driver | Gross | Studio | Distributor |
|---:|---:|---:|---|---:|---:|---:|
| 1 | 161,786 | 1 | episode 1 premiere | $51,772 | $27,957 | $23,815 |
| 2 | 201,048 | 1.24 | episode 2: 100% kept (critic 7.47), +39,262 new | $64,335 | $34,741 | $29,594 |
| 3 | 225,866 | 1.12 | episode 3: 100% kept (critic 7.47), +24,818 new | $72,277 | $39,030 | $33,247 |
| 4 | 259,136 | 1.15 | episode 4: 100% kept (audience 8.69), +33,270 new | $82,924 | $44,779 | $38,145 |
| 5 | 297,337 | 1.15 | episode 5: 100% kept (audience 8.69), +38,201 new | $95,148 | $51,380 | $43,768 |
| 6 | 323,705 | 1.09 | episode 6: 100% kept (audience 8.69), +26,368 new | $103,586 | $55,936 | $47,649 |
| 7 | 343,514 | 1.06 | episode 7: 100% kept (audience 8.69), +19,809 new | $109,924 | $59,359 | $50,565 |
| 8 | 358,149 | 1.04 | episode 8: 100% kept (audience 8.69), +14,635 new | $114,608 | $61,888 | $52,720 |
| 9 | 368,997 | 1.03 | episode 9: 100% kept (audience 8.69), +10,848 new | $118,079 | $63,763 | $54,316 |
| 10 | 377,032 | 1.02 | episode 10: 100% kept (audience 8.69), +8,035 new | $120,650 | $65,151 | $55,499 |
| 11 | 382,985 | 1.02 | episode 11: 100% kept (audience 8.69), +5,953 new | $122,555 | $66,180 | $56,375 |
| 12 | 387,395 | 1.01 | episode 12: 100% kept (audience 8.69), +4,410 new | $123,966 | $66,942 | $57,025 |
| 13 | 390,662 | 1.01 | episode 13: 100% kept (audience 8.69), +3,267 new | $125,012 | $67,506 | $57,505 |
| 14 | 393,082 | 1.01 | episode 14: 100% kept (audience 8.69), +2,420 new | $125,786 | $67,925 | $57,862 |
| 15 | 394,875 | 1 | episode 15: 100% kept (audience 8.69), +1,793 new | $126,360 | $68,234 | $58,126 |
| 16 | 138,206 | 0.35 | catch-up viewing (tail week 1/2) | $44,226 | $23,882 | $20,344 |
| 17 | 48,372 | 0.35 | catch-up viewing (tail week 2/2) | $15,479 | $8,359 | $7,120 |
| 18 | 0 | 0 | run ended | $0 | $0 | $0 |

**Progression trace**

- Prestige awards: Prestige +50: meters_all_70 (Last Shadow: Season 3).; Prestige +75: audience_7_5 (Last Shadow: Season 3).
- IP fans: {"before":33818,"after":53277,"delta":19459}
- Star career: {"fameDelta":11.16,"relDelta":0.75,"grow":0,"level":4,"reasons":"worked together (+); project boosted their career (+)"}
- Distributor trust: Meridian Global earned 165% of its advance back on Last Shadow: Season 3 with strong reviews (step 0.73)
- Rule labels: LOCKED = causal chain, accounting, fallback/no-campaign, thresholds 4.0/9.0, IP fan inheritance. WORKING ASSUMPTION = all formulas' shapes and numbers.

### Last Shadow: Season 4 — Horror + Spies (season)

Released week 446 (year 8.6) · Distributor: Wolf Pictures · Star: Kit Okafor (L7, Fame 96) · IP: Last Shadow
Format: **tv season 4**, 15 episodes (one per week) · 260,909 distinct viewers, 3,404,200 viewer-episodes · renewal: average 7.86 ≥ 4.0 → renewable
TV: show-age fatigue 6.0% (base 7.0%, quality slows by 14%) · twist none · hiatus 18 weeks since the last season aired → anticipation ×1 · announcement anticipation used 0.08

**Financial waterfall** [LOCKED rules; amounts provisional]

| Item | Amount |
|---|---:|
| Advance received (project reserve, not revenue) | $422,000 |
| Base cost (unavoidable) | −$240,000 |
| Star fee | −$34,497 |
| Marketing campaign | −$20,000 |
| Paid from studio cash (overrun) | $0 |
| **Unused advance kept at completion** | $127,503 |
| Gross from sales (18 weeks) | $1,089,344 |
| Distributor royalty (31% of weekly gross) | −$337,697 |
| **Studio take** | $751,647 |
| Net for this title (surplus + take − cash overrun; wages are studio-wide, excluded) | $879,151 |

**Quality trace** [scores are computed, never rolled]

Meters (0–100): Plot 90.97 · Writing 91.94 · Filming 90.42 · Editing 87.16
Inputs: staff points {"plot":1266.07,"writing":1434.95,"filming":1247.32,"editing":820.24}, Star filming points 167.86 (Star family fit 100), studio Horror level 3 (+9%), era bar x1.34
Base scores: Audience 8.96 / Critic 9.07 · no weak meter
Combo grades: Audience B (x1.06) / Critic D (x0.9) · repetition fatigue x0.89 · critic saturation x1
Before expectations (after combo, weakness, fatigue, saturation; pre-clamp): Audience 8.45 / Critic 7.26 · critic generation 0 (−0.0%, scale) · audience era 0 (−0.0%) · then clamp 0–10 (generation/era 0 = the ones active at game start)
**Final: Audience 8.45 / Critic 7.26 → avg 7.86**

**Opening & viewership trace** [marketing/Fame/reach affect viewers only]

Awareness inputs: base 0.35, marketing 0.55, studioBuzz 0, starFame 0.37, trend 0.4, ipFans 0.32, announcement 0.08 → awareness 0.87. Reach cap 264,000 → pool 230,850 → opening 69,255.

| Wk | Viewers | Retention | Driver | Gross | Studio | Distributor |
|---:|---:|---:|---|---:|---:|---:|
| 1 | 115,425 | 1 | episode 1 premiere | $36,936 | $25,486 | $11,450 |
| 2 | 142,975 | 1.24 | episode 2: 100% kept (critic 7.26), +27,550 new | $45,752 | $31,569 | $14,183 |
| 3 | 160,250 | 1.12 | episode 3: 100% kept (critic 7.26), +17,275 new | $51,280 | $35,383 | $15,897 |
| 4 | 182,759 | 1.14 | episode 4: 100% kept (audience 8.45), +22,509 new | $58,483 | $40,353 | $18,130 |
| 5 | 204,186 | 1.12 | episode 5: 100% kept (audience 8.45), +21,427 new | $65,340 | $45,084 | $20,255 |
| 6 | 219,447 | 1.07 | episode 6: 100% kept (audience 8.45), +15,261 new | $70,223 | $48,454 | $21,769 |
| 7 | 230,888 | 1.05 | episode 7: 100% kept (audience 8.45), +11,441 new | $73,884 | $50,980 | $22,904 |
| 8 | 239,381 | 1.04 | episode 8: 100% kept (audience 8.45), +8,493 new | $76,602 | $52,855 | $23,747 |
| 9 | 245,697 | 1.03 | episode 9: 100% kept (audience 8.45), +6,316 new | $78,623 | $54,250 | $24,373 |
| 10 | 250,392 | 1.02 | episode 10: 100% kept (audience 8.45), +4,695 new | $80,125 | $55,287 | $24,839 |
| 11 | 253,883 | 1.01 | episode 11: 100% kept (audience 8.45), +3,491 new | $81,243 | $56,057 | $25,185 |
| 12 | 256,478 | 1.01 | episode 12: 100% kept (audience 8.45), +2,595 new | $82,073 | $56,630 | $25,443 |
| 13 | 258,408 | 1.01 | episode 13: 100% kept (audience 8.45), +1,930 new | $82,691 | $57,056 | $25,634 |
| 14 | 259,843 | 1.01 | episode 14: 100% kept (audience 8.45), +1,435 new | $83,150 | $57,373 | $25,776 |
| 15 | 260,909 | 1 | episode 15: 100% kept (audience 8.45), +1,066 new | $83,491 | $57,609 | $25,882 |
| 16 | 91,318 | 0.35 | catch-up viewing (tail week 1/2) | $29,222 | $20,163 | $9,059 |
| 17 | 31,961 | 0.35 | catch-up viewing (tail week 2/2) | $10,228 | $7,057 | $3,171 |
| 18 | 0 | 0 | run ended | $0 | $0 | $0 |

**Progression trace**

- Prestige awards: Prestige +50: meters_all_70 (Last Shadow: Season 4).; Prestige +75: audience_7_5 (Last Shadow: Season 4).; Prestige +150: ip_gross_5m (Last Shadow: Season 4).
- IP fans: {"before":49710,"after":61649,"delta":11939}
- Star career: {"fameDelta":9.08,"relDelta":0.75,"grow":0,"level":5,"reasons":"worked together (+); project boosted their career (+)"}
- Distributor trust: Wolf Pictures earned back 80% of its $422,000 advance on Last Shadow: Season 4 (step 0.19)
- Rule labels: LOCKED = causal chain, accounting, fallback/no-campaign, thresholds 4.0/9.0, IP fan inheritance. WORKING ASSUMPTION = all formulas' shapes and numbers.

### Last Shadow: Season 5 — Horror + Spies (season)

Released week 482 (year 9.3) · Distributor: XYZ Network · Star: Kit Okafor (L7, Fame 96) · IP: Last Shadow
Format: **tv season 5**, 15 episodes (one per week) · 335,195 distinct viewers, 4,109,795 viewer-episodes · renewal: average 7.18 ≥ 4.0 → renewable
TV: show-age fatigue 9.8% (base 11.0%, quality slows by 12%) · twist none · hiatus 18 weeks since the last season aired → anticipation ×1 · announcement anticipation used 0.08

**Financial waterfall** [LOCKED rules; amounts provisional]

| Item | Amount |
|---|---:|
| Advance received (project reserve, not revenue) | $445,000 |
| Base cost (unavoidable) | −$240,000 |
| Star fee | −$41,796 |
| Marketing campaign | −$20,000 |
| Paid from studio cash (overrun) | $0 |
| **Unused advance kept at completion** | $143,204 |
| Gross from sales (18 weeks) | $1,315,134 |
| Distributor royalty (42% of weekly gross) | −$552,356 |
| **Studio take** | $762,778 |
| Net for this title (surplus + take − cash overrun; wages are studio-wide, excluded) | $905,982 |

**Quality trace** [scores are computed, never rolled]

Meters (0–100): Plot 91.24 · Writing 92.17 · Filming 90.59 · Editing 87.38
Inputs: staff points {"plot":1335.8,"writing":1511.03,"filming":1304.14,"editing":854.24}, Star filming points 167.86 (Star family fit 100), studio Horror level 3 (+9%), era bar x1.37
Base scores: Audience 8.98 / Critic 9.09 · no weak meter
Combo grades: Audience B (x1.06) / Critic D (x0.9) · repetition fatigue x0.85 · critic saturation x0.9
Before expectations (after combo, weakness, fatigue, saturation; pre-clamp): Audience 8.09 / Critic 6.26 · critic generation 0 (−0.0%, scale) · audience era 0 (−0.0%) · then clamp 0–10 (generation/era 0 = the ones active at game start)
**Final: Audience 8.09 / Critic 6.26 → avg 7.18**

**Opening & viewership trace** [marketing/Fame/reach affect viewers only]

Awareness inputs: base 0.35, marketing 0.55, studioBuzz 0, starFame 0.43, trend 0.1, ipFans 0.37, announcement 0.08 → awareness 0.85. Reach cap 340,000 → pool 288,115 → opening 86,435.

| Wk | Viewers | Retention | Driver | Gross | Studio | Distributor |
|---:|---:|---:|---|---:|---:|---:|
| 1 | 144,058 | 1 | episode 1 premiere | $46,099 | $26,737 | $19,361 |
| 2 | 170,411 | 1.18 | episode 2: 96% kept (critic 6.26), +32,749 new | $54,532 | $31,628 | $22,903 |
| 3 | 183,576 | 1.08 | episode 3: 96% kept (critic 6.26), +20,731 new | $58,744 | $34,072 | $24,673 |
| 4 | 209,089 | 1.14 | episode 4: 100% kept (audience 8.09), +25,513 new | $66,908 | $38,807 | $28,102 |
| 5 | 237,569 | 1.14 | episode 5: 100% kept (audience 8.09), +28,480 new | $76,022 | $44,093 | $31,929 |
| 6 | 260,064 | 1.09 | episode 6: 100% kept (audience 8.09), +22,495 new | $83,220 | $48,268 | $34,953 |
| 7 | 276,705 | 1.06 | episode 7: 100% kept (audience 8.09), +16,641 new | $88,546 | $51,356 | $37,189 |
| 8 | 289,168 | 1.05 | episode 8: 100% kept (audience 8.09), +12,463 new | $92,534 | $53,670 | $38,864 |
| 9 | 298,480 | 1.03 | episode 9: 100% kept (audience 8.09), +9,312 new | $95,514 | $55,398 | $40,116 |
| 10 | 305,440 | 1.02 | episode 10: 100% kept (audience 8.09), +6,960 new | $97,741 | $56,690 | $41,051 |
| 11 | 310,642 | 1.02 | episode 11: 100% kept (audience 8.09), +5,202 new | $99,405 | $57,655 | $41,750 |
| 12 | 314,531 | 1.01 | episode 12: 100% kept (audience 8.09), +3,889 new | $100,650 | $58,377 | $42,273 |
| 13 | 317,437 | 1.01 | episode 13: 100% kept (audience 8.09), +2,906 new | $101,580 | $58,916 | $42,664 |
| 14 | 319,609 | 1.01 | episode 14: 100% kept (audience 8.09), +2,172 new | $102,275 | $59,319 | $42,955 |
| 15 | 321,233 | 1.01 | episode 15: 100% kept (audience 8.09), +1,624 new | $102,795 | $59,621 | $43,174 |
| 16 | 112,432 | 0.35 | catch-up viewing (tail week 1/2) | $35,978 | $20,867 | $15,111 |
| 17 | 39,351 | 0.35 | catch-up viewing (tail week 2/2) | $12,592 | $7,304 | $5,289 |
| 18 | 0 | 0 | run ended | $0 | $0 | $0 |

**Progression trace**

- Prestige awards: Prestige +50: meters_all_70 (Last Shadow: Season 5).; Prestige +75: audience_7_5 (Last Shadow: Season 5).
- IP fans: {"before":57521,"after":69213,"delta":11692}
- Star career: {"fameDelta":7.53,"relDelta":0.75,"grow":0,"level":5,"reasons":"worked together (+); project boosted their career (+)"}
- Distributor trust: XYZ Network earned 124% of its advance back on Last Shadow: Season 5 with strong reviews (step 0.37)
- Rule labels: LOCKED = causal chain, accounting, fallback/no-campaign, thresholds 4.0/9.0, IP fan inheritance. WORKING ASSUMPTION = all formulas' shapes and numbers.

### Last Shadow: Season 6 — Horror + Spies (season)

Released week 518 (year 10.0) · Distributor: XYZ Network · Star: Kit Okafor (L7, Fame 96) · IP: Last Shadow
Format: **tv season 6**, 15 episodes (one per week) · 334,623 distinct viewers, 4,164,651 viewer-episodes · renewal: average 7.1 ≥ 4.0 → renewable
TV: show-age fatigue 15.4% (base 15.8%, quality slows by 2%) · twist none · hiatus 18 weeks since the last season aired → anticipation ×1 · announcement anticipation used 0.08

**Financial waterfall** [LOCKED rules; amounts provisional]

| Item | Amount |
|---|---:|
| Advance received (project reserve, not revenue) | $397,000 |
| Base cost (unavoidable) | −$240,000 |
| Star fee | −$47,065 |
| Marketing campaign | −$20,000 |
| Paid from studio cash (overrun) | $0 |
| **Unused advance kept at completion** | $89,935 |
| Gross from sales (18 weeks) | $1,332,688 |
| Distributor royalty (43% of weekly gross) | −$573,056 |
| **Studio take** | $759,632 |
| Net for this title (surplus + take − cash overrun; wages are studio-wide, excluded) | $849,567 |

**Quality trace** [scores are computed, never rolled]

Meters (0–100): Plot 91.4 · Writing 92.32 · Filming 90.79 · Editing 87.67
Inputs: staff points {"plot":1390.72,"writing":1572.92,"filming":1371.03,"editing":895.07}, Star filming points 167.86 (Star family fit 100), studio Horror level 3 (+9%), era bar x1.4
Base scores: Audience 9 / Critic 9.11 · no weak meter
Combo grades: Audience B (x1.06) / Critic D (x0.9) · repetition fatigue x0.8 · critic saturation x1
Before expectations (after combo, weakness, fatigue, saturation; pre-clamp): Audience 7.63 / Critic 6.56 · critic generation 0 (−0.0%, scale) · audience era 0 (−0.0%) · then clamp 0–10 (generation/era 0 = the ones active at game start)
**Final: Audience 7.63 / Critic 6.56 → avg 7.1**

**Opening & viewership trace** [marketing/Fame/reach affect viewers only]

Awareness inputs: base 0.35, marketing 0.55, studioBuzz 0, starFame 0.47, trend 0, ipFans 0.42, announcement 0.08 → awareness 0.85. Reach cap 340,000 → pool 287,638 → opening 86,291.

| Wk | Viewers | Retention | Driver | Gross | Studio | Distributor |
|---:|---:|---:|---|---:|---:|---:|
| 1 | 143,819 | 1 | episode 1 premiere | $46,022 | $26,233 | $19,789 |
| 2 | 173,232 | 1.2 | episode 2: 97% kept (critic 6.56), +33,210 new | $55,434 | $31,598 | $23,837 |
| 3 | 189,648 | 1.09 | episode 3: 97% kept (critic 6.56), +20,989 new | $60,687 | $34,592 | $26,096 |
| 4 | 213,203 | 1.12 | episode 4: 100% kept (audience 7.63), +23,555 new | $68,225 | $38,888 | $29,337 |
| 5 | 238,664 | 1.12 | episode 5: 100% kept (audience 7.63), +25,461 new | $76,372 | $43,532 | $32,840 |
| 6 | 262,223 | 1.1 | episode 6: 100% kept (audience 7.63), +23,559 new | $83,911 | $47,829 | $36,082 |
| 7 | 279,322 | 1.07 | episode 7: 100% kept (audience 7.63), +17,099 new | $89,383 | $50,948 | $38,435 |
| 8 | 292,279 | 1.05 | episode 8: 100% kept (audience 7.63), +12,957 new | $93,529 | $53,312 | $40,218 |
| 9 | 302,017 | 1.03 | episode 9: 100% kept (audience 7.63), +9,738 new | $96,645 | $55,088 | $41,558 |
| 10 | 309,346 | 1.02 | episode 10: 100% kept (audience 7.63), +7,329 new | $98,991 | $56,425 | $42,566 |
| 11 | 314,861 | 1.02 | episode 11: 100% kept (audience 7.63), +5,515 new | $100,756 | $57,431 | $43,325 |
| 12 | 319,011 | 1.01 | episode 12: 100% kept (audience 7.63), +4,150 new | $102,084 | $58,188 | $43,896 |
| 13 | 322,134 | 1.01 | episode 13: 100% kept (audience 7.63), +3,123 new | $103,083 | $58,757 | $44,326 |
| 14 | 324,484 | 1.01 | episode 14: 100% kept (audience 7.63), +2,350 new | $103,835 | $59,186 | $44,649 |
| 15 | 326,253 | 1.01 | episode 15: 100% kept (audience 7.63), +1,769 new | $104,401 | $59,509 | $44,892 |
| 16 | 114,189 | 0.35 | catch-up viewing (tail week 1/2) | $36,540 | $20,828 | $15,712 |
| 17 | 39,966 | 0.35 | catch-up viewing (tail week 2/2) | $12,789 | $7,290 | $5,499 |
| 18 | 0 | 0 | run ended | $0 | $0 | $0 |

**Progression trace**

- Prestige awards: Prestige +50: meters_all_70 (Last Shadow: Season 6).; Prestige +75: audience_7_5 (Last Shadow: Season 6).
- IP fans: {"before":64578,"after":75821,"delta":11243}
- Star career: {"fameDelta":7.25,"relDelta":0.75,"grow":0,"level":6,"reasons":"worked together (+); project boosted their career (+)"}
- Distributor trust: XYZ Network earned 144% of its advance back on Last Shadow: Season 6 with strong reviews (step 0.48)
- Rule labels: LOCKED = causal chain, accounting, fallback/no-campaign, thresholds 4.0/9.0, IP fan inheritance. WORKING ASSUMPTION = all formulas' shapes and numbers.

### Last Shadow: Season 7 — Horror + Spies (season)

Released week 554 (year 10.7) · Distributor: Meridian Global · Star: Kit Okafor (L7, Fame 96) · IP: Last Shadow
Format: **tv season 7**, 15 episodes (one per week) · 392,512 distinct viewers, 4,706,621 viewer-episodes · renewal: average 6.57 ≥ 4.0 → renewable
TV: show-age fatigue 20.8% (base 21.1%, quality slows by 1%) · twist none · hiatus 18 weeks since the last season aired → anticipation ×1 · announcement anticipation used 0.08

**Financial waterfall** [LOCKED rules; amounts provisional]

| Item | Amount |
|---|---:|
| Advance received (project reserve, not revenue) | $543,000 |
| Base cost (unavoidable) | −$240,000 |
| Star fee | −$50,603 |
| Marketing campaign | −$20,000 |
| Paid from studio cash (overrun) | $0 |
| **Unused advance kept at completion** | $232,397 |
| Gross from sales (18 weeks) | $1,506,119 |
| Distributor royalty (45% of weekly gross) | −$677,753 |
| **Studio take** | $828,365 |
| Net for this title (surplus + take − cash overrun; wages are studio-wide, excluded) | $1,060,762 |

**Quality trace** [scores are computed, never rolled]

Meters (0–100): Plot 91.53 · Writing 92.43 · Filming 90.88 · Editing 87.91
Inputs: staff points {"plot":1442.65,"writing":1629.12,"filming":1417.52,"editing":933.55}, Star filming points 167.86 (Star family fit 100), studio Horror level 3 (+9%), era bar x1.43
Base scores: Audience 9.02 / Critic 9.12 · no weak meter
Combo grades: Audience B (x1.06) / Critic D (x0.9) · repetition fatigue x0.74 · critic saturation x1
Before expectations (after combo, weakness, fatigue, saturation; pre-clamp): Audience 7.07 / Critic 6.07 · critic generation 0 (−0.0%, scale) · audience era 0 (−0.0%) · then clamp 0–10 (generation/era 0 = the ones active at game start)
**Final: Audience 7.07 / Critic 6.07 → avg 6.57**

**Opening & viewership trace** [marketing/Fame/reach affect viewers only]

Awareness inputs: base 0.35, marketing 0.55, studioBuzz 0, starFame 0.52, trend 0, ipFans 0.46, announcement 0.08 → awareness 0.86. Reach cap 400,000 → pool 343,327 → opening 102,998.

| Wk | Viewers | Retention | Driver | Gross | Studio | Distributor |
|---:|---:|---:|---|---:|---:|---:|
| 1 | 171,664 | 1 | episode 1 premiere | $54,932 | $30,213 | $24,720 |
| 2 | 200,707 | 1.17 | episode 2: 94% kept (critic 6.07), +38,622 new | $64,226 | $35,324 | $28,902 |
| 3 | 213,966 | 1.07 | episode 3: 94% kept (critic 6.07), +24,458 new | $68,469 | $37,658 | $30,811 |
| 4 | 238,560 | 1.11 | episode 4: 100% kept (audience 7.07), +24,594 new | $76,339 | $41,987 | $34,353 |
| 5 | 263,234 | 1.1 | episode 5: 100% kept (audience 7.07), +24,674 new | $84,235 | $46,329 | $37,906 |
| 6 | 288,944 | 1.1 | episode 6: 100% kept (audience 7.07), +25,710 new | $92,462 | $50,854 | $41,608 |
| 7 | 311,057 | 1.08 | episode 7: 100% kept (audience 7.07), +22,113 new | $99,538 | $54,746 | $44,792 |
| 8 | 327,460 | 1.05 | episode 8: 100% kept (audience 7.07), +16,403 new | $104,787 | $57,633 | $47,154 |
| 9 | 339,958 | 1.04 | episode 9: 100% kept (audience 7.07), +12,498 new | $108,787 | $59,833 | $48,954 |
| 10 | 349,432 | 1.03 | episode 10: 100% kept (audience 7.07), +9,474 new | $111,818 | $61,500 | $50,318 |
| 11 | 356,621 | 1.02 | episode 11: 100% kept (audience 7.07), +7,189 new | $114,119 | $62,765 | $51,353 |
| 12 | 362,075 | 1.02 | episode 12: 100% kept (audience 7.07), +5,454 new | $115,864 | $63,725 | $52,139 |
| 13 | 366,213 | 1.01 | episode 13: 100% kept (audience 7.07), +4,138 new | $117,188 | $64,453 | $52,735 |
| 14 | 369,352 | 1.01 | episode 14: 100% kept (audience 7.07), +3,139 new | $118,193 | $65,006 | $53,187 |
| 15 | 371,734 | 1.01 | episode 15: 100% kept (audience 7.07), +2,382 new | $118,955 | $65,425 | $53,530 |
| 16 | 130,107 | 0.35 | catch-up viewing (tail week 1/2) | $41,634 | $22,899 | $18,735 |
| 17 | 45,537 | 0.35 | catch-up viewing (tail week 2/2) | $14,572 | $8,015 | $6,557 |
| 18 | 0 | 0 | run ended | $0 | $0 | $0 |

**Progression trace**

- Prestige awards: Prestige +50: meters_all_70 (Last Shadow: Season 7).
- IP fans: {"before":70745,"after":80605,"delta":9860}
- Star career: {"fameDelta":5.68,"relDelta":0.75,"grow":0,"level":6,"reasons":"worked together (+); project boosted their career (+)"}
- Distributor trust: Meridian Global earned 125% of its advance back on Last Shadow: Season 7 (step 0.29)
- Rule labels: LOCKED = causal chain, accounting, fallback/no-campaign, thresholds 4.0/9.0, IP fan inheritance. WORKING ASSUMPTION = all formulas' shapes and numbers.

### Last Shadow: Season 8 — Horror + Spies (season)

Released week 590 (year 11.3) · Distributor: Meridian Global · Star: Kit Okafor (L7, Fame 96) · IP: Last Shadow
Format: **tv season 8**, 15 episodes (one per week) · 389,960 distinct viewers, 3,873,705 viewer-episodes · renewal: average 6.06 ≥ 4.0 → renewable
TV: show-age fatigue 27.0% (base 27.0%, quality slows by 0%) · twist none · hiatus 18 weeks since the last season aired → anticipation ×1 · announcement anticipation used 0.08

**Financial waterfall** [LOCKED rules; amounts provisional]

| Item | Amount |
|---|---:|
| Advance received (project reserve, not revenue) | $502,000 |
| Base cost (unavoidable) | −$240,000 |
| Star fee | −$55,577 |
| Marketing campaign | −$20,000 |
| Paid from studio cash (overrun) | $0 |
| **Unused advance kept at completion** | $186,423 |
| Gross from sales (18 weeks) | $1,239,586 |
| Distributor royalty (45% of weekly gross) | −$557,814 |
| **Studio take** | $681,772 |
| Net for this title (surplus + take − cash overrun; wages are studio-wide, excluded) | $868,195 |

**Quality trace** [scores are computed, never rolled]

Meters (0–100): Plot 91.77 · Writing 92.63 · Filming 91.1 · Editing 88.3
Inputs: staff points {"plot":1517,"writing":1710.88,"filming":1488.21,"editing":987.09}, Star filming points 172.48 (Star family fit 100), studio Horror level 4 (+12%), era bar x1.45
Base scores: Audience 9.04 / Critic 9.15 · no weak meter
Combo grades: Audience B (x1.06) / Critic D (x0.9) · repetition fatigue x0.68 · critic saturation x1
Before expectations (after combo, weakness, fatigue, saturation; pre-clamp): Audience 6.52 / Critic 5.6 · critic generation 0 (−0.0%, scale) · audience era 0 (−0.0%) · then clamp 0–10 (generation/era 0 = the ones active at game start)
**Final: Audience 6.52 / Critic 5.6 → avg 6.06**

**Opening & viewership trace** [marketing/Fame/reach affect viewers only]

Awareness inputs: base 0.35, marketing 0.55, studioBuzz 0, starFame 0.55, trend 0, ipFans 0.49, announcement 0.08 → awareness 0.87. Reach cap 400,000 → pool 346,785 → opening 104,036.

| Wk | Viewers | Retention | Driver | Gross | Studio | Distributor |
|---:|---:|---:|---|---:|---:|---:|
| 1 | 173,393 | 1 | episode 1 premiere | $55,486 | $30,517 | $24,969 |
| 2 | 196,878 | 1.14 | episode 2: 92% kept (critic 5.6), +38,050 new | $63,001 | $34,651 | $28,350 |
| 3 | 204,500 | 1.04 | episode 3: 92% kept (critic 5.6), +24,160 new | $65,440 | $35,992 | $29,448 |
| 4 | 220,392 | 1.08 | episode 4: 97% kept (audience 6.52), +21,782 new | $70,525 | $38,789 | $31,736 |
| 5 | 233,888 | 1.06 | episode 5: 97% kept (audience 6.52), +19,843 new | $74,844 | $41,164 | $33,680 |
| 6 | 246,175 | 1.05 | episode 6: 97% kept (audience 6.52), +19,023 new | $78,776 | $43,327 | $35,449 |
| 7 | 257,951 | 1.05 | episode 7: 97% kept (audience 6.52), +18,866 new | $82,544 | $45,399 | $37,145 |
| 8 | 269,627 | 1.05 | episode 8: 97% kept (audience 6.52), +19,105 new | $86,281 | $47,454 | $38,826 |
| 9 | 277,461 | 1.03 | episode 9: 97% kept (audience 6.52), +15,599 new | $88,788 | $48,833 | $39,954 |
| 10 | 281,258 | 1.01 | episode 10: 97% kept (audience 6.52), +11,788 new | $90,003 | $49,501 | $40,501 |
| 11 | 282,193 | 1 | episode 11: 97% kept (audience 6.52), +9,035 new | $90,302 | $49,666 | $40,636 |
| 12 | 280,972 | 1 | episode 12: 97% kept (audience 6.52), +6,906 new | $89,911 | $49,451 | $40,460 |
| 13 | 278,162 | 0.99 | episode 13: 97% kept (audience 6.52), +5,282 new | $89,012 | $48,957 | $40,055 |
| 14 | 274,190 | 0.99 | episode 14: 97% kept (audience 6.52), +4,039 new | $87,741 | $48,257 | $39,483 |
| 15 | 269,382 | 0.98 | episode 15: 97% kept (audience 6.52), +3,089 new | $86,202 | $47,411 | $38,791 |
| 16 | 94,284 | 0.35 | catch-up viewing (tail week 1/2) | $30,171 | $16,594 | $13,577 |
| 17 | 32,999 | 0.35 | catch-up viewing (tail week 2/2) | $10,560 | $5,808 | $4,752 |
| 18 | 0 | 0 | run ended | $0 | $0 | $0 |

**Progression trace**

- Prestige awards: Prestige +50: meters_all_70 (Last Shadow: Season 8).
- IP fans: {"before":75209,"after":81823,"delta":6614}
- Star career: {"fameDelta":3.83,"relDelta":0.75,"grow":0,"level":7,"reasons":"worked together (+); project boosted their career (+)"}
- Distributor trust: Meridian Global earned 111% of its advance back on Last Shadow: Season 8 (step 0.14)
- Rule labels: LOCKED = causal chain, accounting, fallback/no-campaign, thresholds 4.0/9.0, IP fan inheritance. WORKING ASSUMPTION = all formulas' shapes and numbers.

### Lost Run — Comedy + Mythology (new)

Released week 626 (year 12.0) · Distributor: XYZ Network · Star: Dee Grant (L4, Fame 100) · IP: Lost Run
Format: **tv season 1**, 15 episodes (one per week) · 371,691 distinct viewers, 4,666,147 viewer-episodes · renewal: average 9.09 ≥ 4.0 → renewable

**Financial waterfall** [LOCKED rules; amounts provisional]

| Item | Amount |
|---|---:|
| Advance received (project reserve, not revenue) | $588,000 |
| Base cost (unavoidable) | −$240,000 |
| Star fee | −$32,858 |
| Marketing campaign | −$20,000 |
| Paid from studio cash (overrun) | $0 |
| **Unused advance kept at completion** | $295,142 |
| Gross from sales (18 weeks) | $1,493,167 |
| Distributor royalty (40% of weekly gross) | −$597,267 |
| **Studio take** | $895,900 |
| Net for this title (surplus + take − cash overrun; wages are studio-wide, excluded) | $1,191,042 |

**Quality trace** [scores are computed, never rolled]

Meters (0–100): Plot 91.17 · Writing 92.08 · Filming 90.46 · Editing 87.52
Inputs: staff points {"plot":1431.57,"writing":1613.2,"filming":1412.22,"editing":934.81}, Star filming points 155.4 (Star family fit 98), studio Comedy level 1 (+3%), era bar x1.48
Base scores: Audience 8.98 / Critic 9.08 · no weak meter
Combo grades: Audience A (x1.15) / Critic C (x1) · repetition fatigue x1 · critic saturation x0.9
Before expectations (after combo, weakness, fatigue, saturation; pre-clamp): Audience 10.32 / Critic 8.18 · critic generation 0 (−0.0%, scale) · audience era 0 (−0.0%) · then clamp 0–10 (generation/era 0 = the ones active at game start)
**Final: Audience 10 / Critic 8.18 → avg 9.09 (HALL OF FAME)**

**Opening & viewership trace** [marketing/Fame/reach affect viewers only]

Awareness inputs: base 0.35, marketing 0.55, studioBuzz 0, starFame 0.29, trend 0.1, ipFans 0, announcement 0 → awareness 0.72. Reach cap 376,000 → pool 272,011 → opening 81,603.

| Wk | Viewers | Retention | Driver | Gross | Studio | Distributor |
|---:|---:|---:|---|---:|---:|---:|
| 1 | 136,006 | 1 | episode 1 premiere | $43,522 | $26,113 | $17,409 |
| 2 | 170,652 | 1.25 | episode 2: 100% kept (critic 8.18), +34,646 new | $54,609 | $32,765 | $21,843 |
| 3 | 192,900 | 1.13 | episode 3: 100% kept (critic 8.18), +22,248 new | $61,728 | $37,037 | $24,691 |
| 4 | 228,484 | 1.18 | episode 4: 100% kept (audience 10), +35,584 new | $73,115 | $43,869 | $29,246 |
| 5 | 270,913 | 1.19 | episode 5: 100% kept (audience 10), +42,429 new | $86,692 | $52,015 | $34,677 |
| 6 | 299,377 | 1.11 | episode 6: 100% kept (audience 10), +28,464 new | $95,801 | $57,480 | $38,320 |
| 7 | 320,386 | 1.07 | episode 7: 100% kept (audience 10), +21,009 new | $102,524 | $61,514 | $41,009 |
| 8 | 335,599 | 1.05 | episode 8: 100% kept (audience 10), +15,213 new | $107,392 | $64,435 | $42,957 |
| 9 | 346,656 | 1.03 | episode 9: 100% kept (audience 10), +11,057 new | $110,930 | $66,558 | $44,372 |
| 10 | 354,686 | 1.02 | episode 10: 100% kept (audience 10), +8,030 new | $113,500 | $68,100 | $45,400 |
| 11 | 360,519 | 1.02 | episode 11: 100% kept (audience 10), +5,833 new | $115,366 | $69,220 | $46,146 |
| 12 | 364,755 | 1.01 | episode 12: 100% kept (audience 10), +4,236 new | $116,722 | $70,033 | $46,689 |
| 13 | 367,832 | 1.01 | episode 13: 100% kept (audience 10), +3,077 new | $117,706 | $70,624 | $47,083 |
| 14 | 370,067 | 1.01 | episode 14: 100% kept (audience 10), +2,235 new | $118,421 | $71,053 | $47,369 |
| 15 | 371,691 | 1 | episode 15: 100% kept (audience 10), +1,624 new | $118,941 | $71,365 | $47,576 |
| 16 | 130,092 | 0.35 | catch-up viewing (tail week 1/2) | $41,629 | $24,978 | $16,652 |
| 17 | 45,532 | 0.35 | catch-up viewing (tail week 2/2) | $14,570 | $8,742 | $5,828 |
| 18 | 0 | 0 | run ended | $0 | $0 | $0 |

**Progression trace**

- Prestige awards: Prestige +50: meters_all_70 (Lost Run).; Prestige +75: audience_7_5 (Lost Run).; Prestige +200: hall_of_fame (Lost Run).; Prestige +100: first_hall_of_fame (Lost Run).; Prestige +100: ip_gross_1m (Lost Run).
- IP fans: {"before":0,"after":24323,"delta":24323}
- Star career: {"fameDelta":14.57,"relDelta":0.75,"grow":2,"level":3,"reasons":"worked together (+); project boosted their career (+)"}
- Distributor trust: XYZ Network earned 102% of its advance back on Lost Run with strong reviews (step 0.41)
- Rule labels: LOCKED = causal chain, accounting, fallback/no-campaign, thresholds 4.0/9.0, IP fan inheritance. WORKING ASSUMPTION = all formulas' shapes and numbers.

### Lost Run: Season 2 — Comedy + Mythology (season)

Released week 662 (year 12.7) · Distributor: XYZ Network · Star: Dee Grant (L4, Fame 100) · IP: Lost Run
Format: **tv season 2**, 15 episodes (one per week) · 372,200 distinct viewers, 4,768,513 viewer-episodes · renewal: average 9.5 ≥ 4.0 → renewable
TV: show-age fatigue 0.9% (base 1.2%, quality slows by 28%) · twist none · hiatus 18 weeks since the last season aired → anticipation ×1 · announcement anticipation used 0.08

**Financial waterfall** [LOCKED rules; amounts provisional]

| Item | Amount |
|---|---:|
| Advance received (project reserve, not revenue) | $496,000 |
| Base cost (unavoidable) | −$240,000 |
| Star fee | −$32,703 |
| Marketing campaign | −$20,000 |
| Paid from studio cash (overrun) | $0 |
| **Unused advance kept at completion** | $203,297 |
| Gross from sales (18 weeks) | $1,525,924 |
| Distributor royalty (42% of weekly gross) | −$640,888 |
| **Studio take** | $885,036 |
| Net for this title (surplus + take − cash overrun; wages are studio-wide, excluded) | $1,088,333 |

**Quality trace** [scores are computed, never rolled]

Meters (0–100): Plot 91.29 · Writing 92.18 · Filming 90.56 · Editing 87.66
Inputs: staff points {"plot":1480.55,"writing":1665.67,"filming":1457,"editing":964.58}, Star filming points 158.16 (Star family fit 100), studio Comedy level 1 (+3%), era bar x1.51
Base scores: Audience 8.99 / Critic 9.09 · no weak meter
Combo grades: Audience A (x1.15) / Critic C (x1) · repetition fatigue x0.99 · critic saturation x1
Before expectations (after combo, weakness, fatigue, saturation; pre-clamp): Audience 10.23 / Critic 9 · critic generation 0 (−0.0%, scale) · audience era 0 (−0.0%) · then clamp 0–10 (generation/era 0 = the ones active at game start)
**Final: Audience 10 / Critic 9 → avg 9.5 (HALL OF FAME)**

**Opening & viewership trace** [marketing/Fame/reach affect viewers only]

Awareness inputs: base 0.35, marketing 0.55, studioBuzz 0, starFame 0.37, trend 0, ipFans 0.15, announcement 0.08 → awareness 0.78. Reach cap 376,000 → pool 292,066 → opening 87,620.

| Wk | Viewers | Retention | Driver | Gross | Studio | Distributor |
|---:|---:|---:|---|---:|---:|---:|
| 1 | 146,033 | 1 | episode 1 premiere | $46,731 | $27,104 | $19,627 |
| 2 | 184,480 | 1.26 | episode 2: 100% kept (critic 9), +38,447 new | $59,034 | $34,239 | $24,794 |
| 3 | 208,822 | 1.13 | episode 3: 100% kept (critic 9), +24,342 new | $66,823 | $38,757 | $28,066 |
| 4 | 246,749 | 1.18 | episode 4: 100% kept (audience 10), +37,927 new | $78,960 | $45,797 | $33,163 |
| 5 | 283,229 | 1.15 | episode 5: 100% kept (audience 10), +36,480 new | $90,633 | $52,567 | $38,066 |
| 6 | 308,458 | 1.09 | episode 6: 100% kept (audience 10), +25,229 new | $98,707 | $57,250 | $41,457 |
| 7 | 326,963 | 1.06 | episode 7: 100% kept (audience 10), +18,505 new | $104,628 | $60,684 | $43,944 |
| 8 | 340,379 | 1.04 | episode 8: 100% kept (audience 10), +13,416 new | $108,921 | $63,174 | $45,747 |
| 9 | 350,127 | 1.03 | episode 9: 100% kept (audience 10), +9,748 new | $112,041 | $64,984 | $47,057 |
| 10 | 357,207 | 1.02 | episode 10: 100% kept (audience 10), +7,080 new | $114,306 | $66,298 | $48,009 |
| 11 | 362,350 | 1.01 | episode 11: 100% kept (audience 10), +5,143 new | $115,952 | $67,252 | $48,700 |
| 12 | 366,085 | 1.01 | episode 12: 100% kept (audience 10), +3,735 new | $117,147 | $67,945 | $49,202 |
| 13 | 368,798 | 1.01 | episode 13: 100% kept (audience 10), +2,713 new | $118,015 | $68,449 | $49,566 |
| 14 | 370,769 | 1.01 | episode 14: 100% kept (audience 10), +1,971 new | $118,646 | $68,815 | $49,831 |
| 15 | 372,200 | 1 | episode 15: 100% kept (audience 10), +1,431 new | $119,104 | $69,080 | $50,024 |
| 16 | 130,270 | 0.35 | catch-up viewing (tail week 1/2) | $41,686 | $24,178 | $17,508 |
| 17 | 45,594 | 0.35 | catch-up viewing (tail week 2/2) | $14,590 | $8,462 | $6,128 |
| 18 | 0 | 0 | run ended | $0 | $0 | $0 |

**Progression trace**

- Prestige awards: Prestige +50: meters_all_70 (Lost Run: Season 2).; Prestige +75: audience_7_5 (Lost Run: Season 2).; Prestige +85: critic_8_5 (Lost Run: Season 2).; Prestige +200: hall_of_fame (Lost Run: Season 2).; Prestige +150: ip_viewers_500k (Lost Run: Season 2).
- IP fans: {"before":22694,"after":49492,"delta":26798}
- Star career: {"fameDelta":16.04,"relDelta":0.75,"grow":0,"level":3,"reasons":"worked together (+); project boosted their career (+)"}
- Distributor trust: XYZ Network earned 129% of its advance back on Lost Run: Season 2 with strong reviews (step 0.58)
- Rule labels: LOCKED = causal chain, accounting, fallback/no-campaign, thresholds 4.0/9.0, IP fan inheritance. WORKING ASSUMPTION = all formulas' shapes and numbers.

### Lost Run: Season 3 — Comedy + Mythology (season)

Released week 709 (year 13.6) · Distributor: Orbit Releasing · Star: Dee Grant (L4, Fame 100) · IP: Lost Run
Format: **tv season 3**, 20 episodes (one per week) · 331,466 distinct viewers, 6,013,782 viewer-episodes · renewal: average 9.48 ≥ 4.0 → renewable
TV: show-age fatigue 2.4% (base 3.6%, quality slows by 33%) · twist none · hiatus 29 weeks since the last season aired → anticipation ×1 · announcement anticipation used 0.05

**Financial waterfall** [LOCKED rules; amounts provisional]

| Item | Amount |
|---|---:|
| Advance received (project reserve, not revenue) | $480,000 |
| Base cost (unavoidable) | −$315,000 |
| Star fee | −$54,536 |
| Marketing campaign | −$20,000 |
| Paid from studio cash (overrun) | $0 |
| **Unused advance kept at completion** | $90,464 |
| Gross from sales (23 weeks) | $1,924,410 |
| Distributor royalty (35% of weekly gross) | −$673,544 |
| **Studio take** | $1,250,867 |
| Net for this title (surplus + take − cash overrun; wages are studio-wide, excluded) | $1,341,330 |

**Quality trace** [scores are computed, never rolled]

Meters (0–100): Plot 91.56 · Writing 92.44 · Filming 90.92 · Editing 88.72
Inputs: staff points {"plot":2006.18,"writing":2259.46,"filming":1996.75,"editing":1397.52}, Star filming points 209.88 (Star family fit 100), studio Comedy level 2 (+6%), era bar x1.55
Base scores: Audience 9.05 / Critic 9.13 · no weak meter
Combo grades: Audience A (x1.15) / Critic C (x1) · repetition fatigue x0.98 · critic saturation x1
Before expectations (after combo, weakness, fatigue, saturation; pre-clamp): Audience 10.2 / Critic 8.95 · critic generation 0 (−0.0%, scale) · audience era 0 (−0.0%) · then clamp 0–10 (generation/era 0 = the ones active at game start)
**Final: Audience 10 / Critic 8.95 → avg 9.48 (HALL OF FAME)**

**Opening & viewership trace** [marketing/Fame/reach affect viewers only]

Awareness inputs: base 0.35, marketing 0.55, studioBuzz 0, starFame 0.47, trend 0.4, ipFans 0.29, announcement 0.05 → awareness 0.88. Reach cap 332,000 → pool 291,809 → opening 87,543.

| Wk | Viewers | Retention | Driver | Gross | Studio | Distributor |
|---:|---:|---:|---|---:|---:|---:|
| 1 | 145,905 | 1 | episode 1 premiere | $46,690 | $30,348 | $16,341 |
| 2 | 183,603 | 1.26 | episode 2: 100% kept (critic 8.95), +37,698 new | $58,753 | $38,189 | $20,564 |
| 3 | 206,907 | 1.13 | episode 3: 100% kept (critic 8.95), +23,304 new | $66,210 | $43,037 | $23,174 |
| 4 | 243,442 | 1.18 | episode 4: 100% kept (audience 10), +36,535 new | $77,901 | $50,636 | $27,266 |
| 5 | 267,349 | 1.1 | episode 5: 100% kept (audience 10), +23,907 new | $85,552 | $55,609 | $29,943 |
| 6 | 285,087 | 1.07 | episode 6: 100% kept (audience 10), +17,738 new | $91,228 | $59,298 | $31,930 |
| 7 | 297,918 | 1.05 | episode 7: 100% kept (audience 10), +12,831 new | $95,334 | $61,967 | $33,367 |
| 8 | 307,245 | 1.03 | episode 8: 100% kept (audience 10), +9,327 new | $98,318 | $63,907 | $34,411 |
| 9 | 314,019 | 1.02 | episode 9: 100% kept (audience 10), +6,774 new | $100,486 | $65,316 | $35,170 |
| 10 | 318,939 | 1.02 | episode 10: 100% kept (audience 10), +4,920 new | $102,060 | $66,339 | $35,721 |
| 11 | 322,513 | 1.01 | episode 11: 100% kept (audience 10), +3,574 new | $103,204 | $67,083 | $36,121 |
| 12 | 325,109 | 1.01 | episode 12: 100% kept (audience 10), +2,596 new | $104,035 | $67,623 | $36,412 |
| 13 | 326,995 | 1.01 | episode 13: 100% kept (audience 10), +1,886 new | $104,638 | $68,015 | $36,623 |
| 14 | 328,365 | 1 | episode 14: 100% kept (audience 10), +1,370 new | $105,077 | $68,300 | $36,777 |
| 15 | 329,360 | 1 | episode 15: 100% kept (audience 10), +995 new | $105,395 | $68,507 | $36,888 |
| 16 | 330,082 | 1 | episode 16: 100% kept (audience 10), +722 new | $105,626 | $68,657 | $36,969 |
| 17 | 330,607 | 1 | episode 17: 100% kept (audience 10), +525 new | $105,794 | $68,766 | $37,028 |
| 18 | 330,988 | 1 | episode 18: 100% kept (audience 10), +381 new | $105,916 | $68,846 | $37,071 |
| 19 | 331,265 | 1 | episode 19: 100% kept (audience 10), +277 new | $106,005 | $68,903 | $37,102 |
| 20 | 331,466 | 1 | episode 20: 100% kept (audience 10), +201 new | $106,069 | $68,945 | $37,124 |
| 21 | 116,013 | 0.35 | catch-up viewing (tail week 1/2) | $37,124 | $24,131 | $12,993 |
| 22 | 40,605 | 0.35 | catch-up viewing (tail week 2/2) | $12,994 | $8,446 | $4,548 |
| 23 | 0 | 0 | run ended | $0 | $0 | $0 |

**Progression trace**

- Prestige awards: Prestige +50: meters_all_70 (Lost Run: Season 3).; Prestige +75: audience_7_5 (Lost Run: Season 3).; Prestige +85: critic_8_5 (Lost Run: Season 3).; Prestige +200: hall_of_fame (Lost Run: Season 3).
- IP fans: {"before":44779,"after":68538,"delta":23759}
- Star career: {"fameDelta":15.42,"relDelta":0.75,"grow":0,"level":4,"reasons":"worked together (+); project boosted their career (+)"}
- Distributor trust: Orbit Releasing earned 140% of its advance back on Lost Run: Season 3 with strong reviews (step 0.64)
- Rule labels: LOCKED = causal chain, accounting, fallback/no-campaign, thresholds 4.0/9.0, IP fan inheritance. WORKING ASSUMPTION = all formulas' shapes and numbers.

### Lost Run: Season 4 — Comedy + Mythology (season)

Released week 756 (year 14.5) · Distributor: Meridian Global · Star: Dee Grant (L4, Fame 100) · IP: Lost Run
Format: **tv season 4**, 20 episodes (one per week) · 399,295 distinct viewers, 7,203,998 viewer-episodes · renewal: average 8.85 ≥ 4.0 → renewable
TV: show-age fatigue 4.7% (base 7.0%, quality slows by 33%) · twist none · hiatus 24 weeks since the last season aired → anticipation ×1 · announcement anticipation used 0.05

**Financial waterfall** [LOCKED rules; amounts provisional]

| Item | Amount |
|---|---:|
| Advance received (project reserve, not revenue) | $843,000 |
| Base cost (unavoidable) | −$315,000 |
| Star fee | −$54,320 |
| Marketing campaign | −$20,000 |
| Paid from studio cash (overrun) | $0 |
| **Unused advance kept at completion** | $453,680 |
| Gross from sales (23 weeks) | $2,305,279 |
| Distributor royalty (43% of weekly gross) | −$991,270 |
| **Studio take** | $1,314,009 |
| Net for this title (surplus + take − cash overrun; wages are studio-wide, excluded) | $1,767,689 |

**Quality trace** [scores are computed, never rolled]

Meters (0–100): Plot 91.52 · Writing 92.39 · Filming 90.89 · Editing 88.72
Inputs: staff points {"plot":2041.24,"writing":2296.28,"filming":2040.36,"editing":1430.02}, Star filming points 209.88 (Star family fit 100), studio Comedy level 2 (+6%), era bar x1.58
Base scores: Audience 9.05 / Critic 9.13 · no weak meter
Combo grades: Audience A (x1.15) / Critic C (x1) · repetition fatigue x0.95 · critic saturation x0.9
Before expectations (after combo, weakness, fatigue, saturation; pre-clamp): Audience 9.88 / Critic 7.81 · critic generation 0 (−0.0%, scale) · audience era 0 (−0.0%) · then clamp 0–10 (generation/era 0 = the ones active at game start)
**Final: Audience 9.88 / Critic 7.81 → avg 8.85**

**Opening & viewership trace** [marketing/Fame/reach affect viewers only]

Awareness inputs: base 0.35, marketing 0.55, studioBuzz 0, starFame 0.56, trend 0.1, ipFans 0.41, announcement 0.05 → awareness 0.87. Reach cap 400,000 → pool 346,964 → opening 104,089.

| Wk | Viewers | Retention | Driver | Gross | Studio | Distributor |
|---:|---:|---:|---|---:|---:|---:|
| 1 | 173,482 | 1 | episode 1 premiere | $55,514 | $31,643 | $23,871 |
| 2 | 216,036 | 1.25 | episode 2: 100% kept (critic 7.81), +42,554 new | $69,132 | $39,405 | $29,727 |
| 3 | 242,637 | 1.12 | episode 3: 100% kept (critic 7.81), +26,601 new | $77,644 | $44,257 | $33,387 |
| 4 | 286,045 | 1.18 | episode 4: 100% kept (audience 9.88), +43,408 new | $91,534 | $52,175 | $39,360 |
| 5 | 316,999 | 1.11 | episode 5: 100% kept (audience 9.88), +30,954 new | $101,440 | $57,821 | $43,619 |
| 6 | 339,613 | 1.07 | episode 6: 100% kept (audience 9.88), +22,614 new | $108,676 | $61,945 | $46,731 |
| 7 | 356,056 | 1.05 | episode 7: 100% kept (audience 9.88), +16,443 new | $113,938 | $64,945 | $48,993 |
| 8 | 368,023 | 1.03 | episode 8: 100% kept (audience 9.88), +11,967 new | $117,767 | $67,127 | $50,640 |
| 9 | 376,731 | 1.02 | episode 9: 100% kept (audience 9.88), +8,708 new | $120,554 | $68,716 | $51,838 |
| 10 | 383,068 | 1.02 | episode 10: 100% kept (audience 9.88), +6,337 new | $122,582 | $69,872 | $52,710 |
| 11 | 387,679 | 1.01 | episode 11: 100% kept (audience 9.88), +4,611 new | $124,057 | $70,713 | $53,345 |
| 12 | 391,034 | 1.01 | episode 12: 100% kept (audience 9.88), +3,355 new | $125,131 | $71,325 | $53,806 |
| 13 | 393,476 | 1.01 | episode 13: 100% kept (audience 9.88), +2,442 new | $125,912 | $71,770 | $54,142 |
| 14 | 395,253 | 1 | episode 14: 100% kept (audience 9.88), +1,777 new | $126,481 | $72,094 | $54,387 |
| 15 | 396,546 | 1 | episode 15: 100% kept (audience 9.88), +1,293 new | $126,895 | $72,330 | $54,565 |
| 16 | 397,487 | 1 | episode 16: 100% kept (audience 9.88), +941 new | $127,196 | $72,502 | $54,694 |
| 17 | 398,171 | 1 | episode 17: 100% kept (audience 9.88), +684 new | $127,415 | $72,626 | $54,788 |
| 18 | 398,669 | 1 | episode 18: 100% kept (audience 9.88), +498 new | $127,574 | $72,717 | $54,857 |
| 19 | 399,031 | 1 | episode 19: 100% kept (audience 9.88), +362 new | $127,690 | $72,783 | $54,907 |
| 20 | 399,295 | 1 | episode 20: 100% kept (audience 9.88), +264 new | $127,774 | $72,831 | $54,943 |
| 21 | 139,753 | 0.35 | catch-up viewing (tail week 1/2) | $44,721 | $25,491 | $19,230 |
| 22 | 48,914 | 0.35 | catch-up viewing (tail week 2/2) | $15,652 | $8,922 | $6,731 |
| 23 | 0 | 0 | run ended | $0 | $0 | $0 |

**Progression trace**

- Prestige awards: Prestige +50: meters_all_70 (Lost Run: Season 4).; Prestige +75: audience_7_5 (Lost Run: Season 4).; Prestige +150: ip_gross_5m (Lost Run: Season 4).
- IP fans: {"before":62607,"after":87204,"delta":24597}
- Star career: {"fameDelta":13.99,"relDelta":0.75,"grow":0,"level":4,"reasons":"worked together (+); project boosted their career (+)"}
- Distributor trust: Meridian Global earned 118% of its advance back on Lost Run: Season 4 with strong reviews (step 0.51)
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
| 16 | advance_received | $150,000 | advance from Wolf Pictures (project reserve, not revenue) |
| 16 | advance_spent | $-90,000 | base_cost: unavoidable base cost |
| 24 | advance_spent | $-42,005 | star_fee: Sam Imai |
| 31 | advance_spent | $-17,995 | campaign: medium |
| 31 | campaign | $-2,005 | medium |
| 34 | train | $-15,000 | Sam |
| 34 | train | $-15,000 | Alex |
| 34 | advance_received | $145,000 | advance from Wolf Pictures (project reserve, not revenue) |
| 34 | advance_spent | $-90,000 | base_cost: unavoidable base cost |
| 42 | advance_spent | $-42,005 | star_fee: Sam Imai |
| 49 | advance_spent | $-12,995 | campaign: medium |
| 49 | campaign | $-7,005 | medium |
| 52 | hire | $-20,000 | Gus Novak |
| 52 | hire | $-20,000 | Bo Diaz |
| 52 | advance_received | $172,000 | advance from Wolf Pictures (project reserve, not revenue) |
| 52 | advance_spent | $-90,000 | base_cost: unavoidable base cost |
| 60 | advance_spent | $-35,970 | star_fee: Fin Quinn |
| 67 | advance_spent | $-20,000 | campaign: medium |
| 70 | surplus_transfer | $26,030 | unused advance kept at completion (not sales revenue) |
| 70 | train | $-15,000 | Bo Diaz |
| 70 | train | $-15,000 | Gus Novak |
| 70 | advance_received | $134,000 | advance from Wolf Pictures (project reserve, not revenue) |
| 70 | advance_spent | $-90,000 | base_cost: unavoidable base cost |
| 78 | advance_spent | $-17,993 | star_fee: Alex Sato |
| 85 | advance_spent | $-20,000 | campaign: medium |
| 88 | surplus_transfer | $6,007 | unused advance kept at completion (not sales revenue) |
| 88 | train | $-15,000 | Bo Diaz |
| 88 | train | $-15,000 | Gus Novak |
| 88 | advance_received | $102,000 | advance from Orbit Releasing (project reserve, not revenue) |
| 88 | advance_spent | $-90,000 | base_cost: unavoidable base cost |
| 96 | advance_spent | $-12,000 | star_fee: Dee Grant |
| 96 | star_fee | $-21,996 | Dee Grant |
| 103 | campaign | $-20,000 | medium |
| 106 | upgrade | $-250,000 | studio capacity 4 -> 6 |
| 106 | hire | $-20,000 | Liv Kerr |
| 106 | hire | $-20,000 | Lee Sato |
| 106 | advance_received | $189,000 | advance from XYZ Network (project reserve, not revenue) |
| 106 | advance_spent | $-90,000 | base_cost: unavoidable base cost |
| 114 | advance_spent | $-20,921 | star_fee: Mo Diaz |
| 121 | advance_spent | $-20,000 | campaign: medium |
| 124 | surplus_transfer | $58,079 | unused advance kept at completion (not sales revenue) |
| 124 | format_unlock | $-150,000 | TV series |
| 124 | train | $-15,000 | Liv Kerr |
| 124 | train | $-15,000 | Lee Sato |
| 124 | advance_received | $188,000 | advance from Meridian Global (project reserve, not revenue) |
| 124 | advance_spent | $-90,000 | base_cost: unavoidable base cost |
| 131 | advance_spent | $-20,393 | star_fee: Mo Diaz |
| 137 | advance_spent | $-20,000 | campaign: medium |
| 140 | surplus_transfer | $57,607 | unused advance kept at completion (not sales revenue) |
| 140 | announce | $-15,000 | Iron Legacy season 2 |
| 140 | train | $-15,000 | Liv Kerr |
| 140 | train | $-15,000 | Lee Sato |
| 140 | advance_received | $203,000 | advance from XYZ Network (project reserve, not revenue) |
| 140 | advance_spent | $-90,000 | base_cost: unavoidable base cost |
| 147 | advance_spent | $-29,734 | star_fee: Mo Diaz |
| 153 | advance_spent | $-20,000 | campaign: medium |
| 156 | surplus_transfer | $63,266 | unused advance kept at completion (not sales revenue) |
| 156 | announce | $-15,000 | Iron Legacy season 3 |
| 156 | train | $-15,000 | Liv Kerr |
| 156 | train | $-15,000 | Lee Sato |
| 156 | advance_received | $254,000 | advance from Wolf Pictures (project reserve, not revenue) |
| 156 | advance_spent | $-165,000 | base_cost: unavoidable base cost |
| 167 | advance_spent | $-44,996 | star_fee: Mo Diaz |
| 177 | advance_spent | $-20,000 | campaign: medium |
| 182 | surplus_transfer | $24,004 | unused advance kept at completion (not sales revenue) |
| 182 | announce | $-15,000 | Iron Legacy season 4 |
| 182 | train | $-15,000 | Liv Kerr |
| 182 | train | $-15,000 | Lee Sato |
| 182 | advance_received | $311,000 | advance from XYZ Network (project reserve, not revenue) |
| 182 | advance_spent | $-165,000 | base_cost: unavoidable base cost |
| 193 | advance_spent | $-44,146 | star_fee: Mo Diaz |
| 203 | advance_spent | $-20,000 | campaign: medium |
| 208 | surplus_transfer | $81,854 | unused advance kept at completion (not sales revenue) |
| 208 | announce | $-15,000 | Iron Legacy season 5 |
| 208 | upgrade | $-750,000 | studio capacity 6 -> 8 |
| 208 | hire | $-20,000 | Fin Novak |
| 208 | hire | $-20,000 | Mo Vale |
| 208 | advance_received | $336,000 | advance from Meridian Global (project reserve, not revenue) |
| 208 | advance_spent | $-165,000 | base_cost: unavoidable base cost |
| 219 | advance_spent | $-50,830 | star_fee: Mo Diaz |
| 229 | advance_spent | $-20,000 | campaign: medium |
| 234 | surplus_transfer | $100,170 | unused advance kept at completion (not sales revenue) |
| 234 | announce | $-15,000 | Iron Legacy season 6 |
| 234 | train | $-15,000 | Fin Novak |
| 234 | train | $-15,000 | Mo Vale |
| 234 | advance_received | $226,000 | advance from Orbit Releasing (project reserve, not revenue) |
| 234 | advance_spent | $-165,000 | base_cost: unavoidable base cost |
| 245 | advance_spent | $-57,664 | star_fee: Mo Diaz |
| 255 | advance_spent | $-3,336 | campaign: medium |
| 255 | campaign | $-16,664 | medium |
| 260 | announce | $-15,000 | Iron Legacy season 7 |
| 260 | train | $-15,000 | Fin Novak |
| 260 | train | $-15,000 | Mo Vale |
| 260 | advance_received | $420,000 | advance from Meridian Global (project reserve, not revenue) |
| 260 | advance_spent | $-165,000 | base_cost: unavoidable base cost |
| 271 | advance_spent | $-66,431 | star_fee: Mo Diaz |
| 281 | advance_spent | $-20,000 | campaign: medium |
| 286 | surplus_transfer | $168,569 | unused advance kept at completion (not sales revenue) |
| 286 | announce | $-15,000 | Iron Legacy season 8 |
| 286 | train | $-15,000 | Fin Novak |
| 286 | train | $-15,000 | Mo Vale |
| 286 | advance_received | $473,000 | advance from Meridian Global (project reserve, not revenue) |
| 286 | advance_spent | $-165,000 | base_cost: unavoidable base cost |
| 297 | advance_spent | $-71,163 | star_fee: Mo Diaz |
| 307 | advance_spent | $-20,000 | campaign: medium |
| 312 | surplus_transfer | $216,837 | unused advance kept at completion (not sales revenue) |
| 312 | announce | $-15,000 | Iron Legacy season 9 |
| 312 | train | $-15,000 | Fin Novak |
| 312 | train | $-15,000 | Mo Vale |
| 312 | advance_received | $368,000 | advance from Meridian Global (project reserve, not revenue) |
| 312 | advance_spent | $-165,000 | base_cost: unavoidable base cost |
| 323 | advance_spent | $-19,453 | star_fee: Kit Okafor |
| 333 | advance_spent | $-20,000 | campaign: medium |
| 338 | surplus_transfer | $163,547 | unused advance kept at completion (not sales revenue) |
| 338 | announce | $-15,000 | Last Shadow season 2 |
| 338 | train | $-15,000 | Fin Novak |
| 338 | train | $-15,000 | Mo Vale |
| 338 | advance_received | $420,000 | advance from Meridian Global (project reserve, not revenue) |
| 338 | advance_spent | $-240,000 | base_cost: unavoidable base cost |
| 353 | advance_spent | $-26,578 | star_fee: Kit Okafor |
| 367 | advance_spent | $-20,000 | campaign: medium |
| 374 | surplus_transfer | $133,422 | unused advance kept at completion (not sales revenue) |
| 374 | announce | $-15,000 | Last Shadow season 3 |
| 374 | train | $-15,000 | Mo Vale |
| 374 | train | $-15,000 | Fin Novak |
| 374 | advance_received | $451,000 | advance from Meridian Global (project reserve, not revenue) |
| 374 | advance_spent | $-240,000 | base_cost: unavoidable base cost |
| 389 | advance_spent | $-26,413 | star_fee: Kit Okafor |
| 403 | advance_spent | $-20,000 | campaign: medium |
| 410 | surplus_transfer | $164,587 | unused advance kept at completion (not sales revenue) |
| 410 | announce | $-15,000 | Last Shadow season 4 |
| 410 | train | $-15,000 | Liv Kerr |
| 410 | train | $-15,000 | Mo Vale |
| 410 | advance_received | $422,000 | advance from Wolf Pictures (project reserve, not revenue) |
| 410 | advance_spent | $-240,000 | base_cost: unavoidable base cost |
| 425 | advance_spent | $-34,497 | star_fee: Kit Okafor |
| 439 | advance_spent | $-20,000 | campaign: medium |
| 446 | surplus_transfer | $127,503 | unused advance kept at completion (not sales revenue) |
| 446 | announce | $-15,000 | Last Shadow season 5 |
| 446 | train | $-15,000 | Fin Novak |
| 446 | train | $-15,000 | Lee Sato |
| 446 | advance_received | $445,000 | advance from XYZ Network (project reserve, not revenue) |
| 446 | advance_spent | $-240,000 | base_cost: unavoidable base cost |
| 461 | advance_spent | $-41,796 | star_fee: Kit Okafor |
| 475 | advance_spent | $-20,000 | campaign: medium |
| 482 | surplus_transfer | $143,204 | unused advance kept at completion (not sales revenue) |
| 482 | announce | $-15,000 | Last Shadow season 6 |
| 482 | train | $-15,000 | Bo Diaz |
| 482 | train | $-15,000 | Gus Novak |
| 482 | advance_received | $397,000 | advance from XYZ Network (project reserve, not revenue) |
| 482 | advance_spent | $-240,000 | base_cost: unavoidable base cost |
| 497 | advance_spent | $-47,065 | star_fee: Kit Okafor |
| 511 | advance_spent | $-20,000 | campaign: medium |
| 518 | surplus_transfer | $89,935 | unused advance kept at completion (not sales revenue) |
| 518 | announce | $-15,000 | Last Shadow season 7 |
| 518 | train | $-15,000 | Sam |
| 518 | train | $-15,000 | Liv Kerr |
| 518 | advance_received | $543,000 | advance from Meridian Global (project reserve, not revenue) |
| 518 | advance_spent | $-240,000 | base_cost: unavoidable base cost |
| 533 | advance_spent | $-50,603 | star_fee: Kit Okafor |
| 547 | advance_spent | $-20,000 | campaign: medium |
| 554 | surplus_transfer | $232,397 | unused advance kept at completion (not sales revenue) |
| 554 | announce | $-15,000 | Last Shadow season 8 |
| 554 | train | $-15,000 | Mo Vale |
| 554 | train | $-15,000 | Alex |
| 554 | advance_received | $502,000 | advance from Meridian Global (project reserve, not revenue) |
| 554 | advance_spent | $-240,000 | base_cost: unavoidable base cost |
| 569 | advance_spent | $-55,577 | star_fee: Kit Okafor |
| 583 | advance_spent | $-20,000 | campaign: medium |
| 590 | surplus_transfer | $186,423 | unused advance kept at completion (not sales revenue) |
| 590 | announce | $-15,000 | Last Shadow season 9 |
| 590 | train | $-15,000 | Fin Novak |
| 590 | train | $-15,000 | Lee Sato |
| 590 | advance_received | $588,000 | advance from XYZ Network (project reserve, not revenue) |
| 590 | advance_spent | $-240,000 | base_cost: unavoidable base cost |
| 605 | advance_spent | $-32,858 | star_fee: Dee Grant |
| 619 | advance_spent | $-20,000 | campaign: medium |
| 626 | surplus_transfer | $295,142 | unused advance kept at completion (not sales revenue) |
| 626 | announce | $-15,000 | Lost Run season 2 |
| 626 | train | $-15,000 | Bo Diaz |
| 626 | train | $-15,000 | Gus Novak |
| 626 | advance_received | $496,000 | advance from XYZ Network (project reserve, not revenue) |
| 626 | advance_spent | $-240,000 | base_cost: unavoidable base cost |
| 641 | advance_spent | $-32,703 | star_fee: Dee Grant |
| 655 | advance_spent | $-20,000 | campaign: medium |
| 662 | surplus_transfer | $203,297 | unused advance kept at completion (not sales revenue) |
| 662 | announce | $-15,000 | Lost Run season 3 |
| 662 | train | $-15,000 | Sam |
| 662 | train | $-15,000 | Liv Kerr |
| 662 | advance_received | $480,000 | advance from Orbit Releasing (project reserve, not revenue) |
| 662 | advance_spent | $-315,000 | base_cost: unavoidable base cost |
| 681 | advance_spent | $-54,536 | star_fee: Dee Grant |
| 699 | advance_spent | $-20,000 | campaign: medium |
| 709 | surplus_transfer | $90,464 | unused advance kept at completion (not sales revenue) |
| 709 | announce | $-15,000 | Lost Run season 4 |
| 709 | train | $-15,000 | Mo Vale |
| 709 | train | $-15,000 | Alex |
| 709 | advance_received | $843,000 | advance from Meridian Global (project reserve, not revenue) |
| 709 | advance_spent | $-315,000 | base_cost: unavoidable base cost |
| 728 | advance_spent | $-54,320 | star_fee: Dee Grant |
| 746 | advance_spent | $-20,000 | campaign: medium |
| 756 | surplus_transfer | $453,680 | unused advance kept at completion (not sales revenue) |
| 756 | announce | $-15,000 | Lost Run season 5 |
| 756 | train | $-15,000 | Fin Novak |
| 756 | train | $-15,000 | Lee Sato |
| 756 | advance_received | $753,000 | advance from Meridian Global (project reserve, not revenue) |
| 756 | advance_spent | $-315,000 | base_cost: unavoidable base cost |
| 775 | advance_spent | $-64,596 | star_fee: Dee Grant |
| all | payroll (total) | $-5,746,800 | aggregated |
| all | upkeep (total) | $-468,000 | aggregated |
| all | studio_take (total) | $16,504,165 | aggregated |
