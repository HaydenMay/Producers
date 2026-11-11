# Gate 2.6 findings: critic generations, audience eras and great-film metrics

> **Simulation results from provisional numbers. Nothing here is locked.** The recommended candidate is pending designer review. The official design, the Gate 2.5 decisions (4→6→8 headcount ladder, diffusion legs, hybrid Prestige), sequel/fan/royalty/payout rules and Gate 3 are all untouched. Movies-only results say nothing about whole-game balance.

Labels: **LOCKED RULE** = existing design rule, kept. **HARNESS PROXY** = stand-in for a design system not yet built. **TEST ASSUMPTION** = number used so the test can run. **RECOMMENDATION** = what the evidence supports, pending approval. **OPEN** = the designer's call.

## 0. Method, seed bank, versions

- **Base:** `config/candidate.json` (Gate 2.5 candidate), held constant: ladder 4→6→8, diffusion legs, hybrid Prestige; staff XP, Stars, genre learning and capacity unchanged.
- **Variants:** 13 in `config/experiments/G26_expectations.json`, plus one follow-up (`combo_D`) in `config/experiments/G26_followup.json`.
  - Control (current rules).
  - Two attribution-only references for the existing era bar (off, and doubled).
  - Critic-only mild / moderate / strong, plus a moderate variant using the subtract method.
  - Audience-only mild / moderate / strong.
  - Three combined variants.
- **Seed bank:** seeds 1–300, the same for every variant. 9 strategies: balanced, quality-first, franchise-builder, repeat-farmer, cheap-duds, experimenter, self-funder, selective-self-funder, famous-star. Lengths 5 / 20 / 50 / 100 films.
- **Size:** 140,400 careers in the main matrix and 32,400 in the follow-up. **0 invariant violations** across all of them.
- **Ruleset and hashes:** ruleset `v9.61-movie-kernel-0.1`. Config hashes: control `fc3c4828`, combo_B `4148b948`; the rest are listed in each report header.
- **Elapsed time:** 50 films ≈ 15.7 in-game years; 100 films ≈ 31.1 years, the same for every strategy (see audit Q3).
- **Runtime (one core):** 41 s / 231 s / 951 s / 2,911 s for the 5 / 20 / 50 / 100-film matrices (about 83 ms per 100-film career). That's slow but workable; coverage was not reduced.
- **Unchanged-baseline check:** with the new `expectations` block disabled, Gate 2.5 career metrics are **byte-identical** (`reports/gate2_6/00_pre_change/` vs rerun; candidate and baseline at 20 and 50 films).
- **Reproducibility check:** control and combo_B were rerun in a separate process for the follow-up. Summaries, trends, great-film tables, progression and best-film references are **identical** at all four lengths.

## 1. Audit: what existed before this gate

| Question | Answer |
|---|---|
| Critic turnover, named generations, saturation sensitivity? | **No critic generations or named critics.** Only an aggregate **era bar**: meter normalization × (1 + 0.04 × year), capped at 1.8 (reached at year 20). Saturation is separate: Critic × 0.9 while the theme's trend is Saturated. |
| Separate, gentler audience curve? | **No.** The era bar is applied to the meters, so it raises the bar for Audience and Critic **equally**. |
| Calendar time or movie number? | **Calendar** (`state.week`). In movies-only, every strategy releases on the same cadence (16-week productions, one at a time), so film #50 ≈ year 15.7 for every strategy, self-funder included. The distinction will matter once TV or concurrency exists, and the proxy is calendar-based for that reason. |
| How four meters + combo become reviews, and where expectations apply | 1. Staff points + Star filming points (× studio genre bonus) → meter = 100·pts / (pts + half × duration × **era bar**). 2. Audience = weighted meters (Filming/Editing 0.35, Plot/Writing 0.15) ÷ 10; Critic mirrored. 3. Weak-meter penalty. 4. × combo grade (A 1.15 / B 1.06 / C 1.0 …) × repetition fatigue × saturation (critic only). 5. Clamp 0–10. 6. Average. The era bar acts at step 1. **The new proxy acts after step 4, before the clamp.** |
| Are published scores immutable? | **Yes.** Scores are written once when production completes. Nothing writes `audience` / `critic` / `avgScore` / `hallOfFame` afterwards. A new test also checks that a career's first 15 releases are identical whether or not it later lives through two critic turnovers. |
| Hall of Fame criterion | Code matches the design: average of Audience and Critic ≥ 9.0. **Discrepancy flagged, not changed:** the average is rounded to 2 decimals, so a true mean of 8.995 counts as 9.00. In a 6,000-film probe, 20 of 1,492 HoF titles (1.3%) got in this way (`scripts/probe-hof-boundary.ts`). |
| Structural finding | A-combo films with mature teams produce **raw scores of ~10.5–10.9**, which the clamp turns into a perfect 10.00. In control, 16% of quality-studio careers make a perfect film by film 50. A 12%-tougher critic generation still leaves such a film's Critic score at ~9.6, which is why the best-film p90 stays at 10.00 in most variants. |

## 2. What was implemented (HARNESS PROXY, off by default)

- **Critic generations:** generation g = floor(year ÷ `generationYears`); toughness = min(`maxToughness`, `toughnessPerGeneration` × g). Each turnover is announced 26 weeks ahead ("veteran critics are retiring…"), so it's predictable from time. There's no per-film randomness.
- **Audience eras:** the same shape, applied to the Audience score only, and set gentler than critics in every combined variant.
- **How it's applied:** `scale` = score × (1 − t), so it bites harder at the top in absolute points; `subtract` = score − 10t. Applied once at release and stored on the release.
- **Unchanged effects:** saturation stays its own critic-only effect. Fame, marketing, sales and gross have no path into scores, and an injected Fame leak is still caught (`SCORE_NOT_CAUSAL`) with expectations on.
- **Trace:** every release trace now prints `raw meters → combo/weakness/fatigue/saturation → critic generation g (−x%) / audience era e (−y%) → final`. Generation 0 = the critics active at game start.
- **New permanent report fields:** great-film metrics and Prestige progression, in every batch, experiment, career report and the web Batch tab.

## 3. Quality inflation

Quality studios pooled (balanced + quality-first + experimenter; 900 careers per variant). "Avg" = mean of (Audience + Critic) / 2.

| Variant | films 1–5 | 6–20 | 21–50 | 51–100 | yr 5–10 | yr 10–15 | yr 20–30 | yr 30+ |
|---|---:|---:|---:|---:|---:|---:|---:|---:|
| control | 6.42 | 8.29 | 8.73 | 8.18 | 8.71 | 8.74 | 8.08 | 7.79 |
| ref: era bar off | 6.50 | 8.49 | — | — | — | — | — | — |
| ref: era bar ×2 | 6.34 | 8.08 | 8.57 | 8.16 | 8.52 | 8.58 | 8.07 | 7.79 |
| critic_moderate | 6.42 | 8.28 | 8.51 | 7.73 | 8.58 | 8.47 | 7.61 | 7.35 |
| audience_moderate | 6.42 | 8.29 | 8.69 | 8.04 | 8.71 | 8.66 | 7.92 | 7.57 |
| combo_A (mild+mild) | 6.42 | 8.29 | 8.61 | 7.81 | 8.66 | 8.58 | 7.68 | 7.35 |
| combo_B (mod+mod) | 6.42 | 8.28 | 8.46 | 7.59 | 8.58 | 8.39 | 7.45 | 7.11 |
| combo_C (strong+mild) | 6.42 | 8.23 | 8.37 | 7.36 | 8.51 | 8.29 | 7.20 | 6.93 |
| **combo_D** (front-loaded + mod) | 6.42 | 8.26 | 8.29 | 7.57 | 8.44 | 8.23 | 7.45 | 7.12 |

**What it means:**
- **Early game is untouched in every variant.** Films 1–5 (≈ years 0–1.5) are identical, and films 6–20 move by at most 0.06. The first new generation arrives at year 5–8.
- **The inflation is mid-career, not late.** In control, Hall of Fame peaks in years 5–15 (35–36% of quality films). By years 20–30 it's already down to 5%, because the existing era bar keeps rising to its cap at year 20 and repetition fatigue builds. That's why `QUALITY_INFLATION` fires on ~1,150–1,390 of 2,700 50-film careers in every variant: the late part of a 50-film career is exactly that peak. At 100 films the flag separates the variants: 845 control, 22 combo_B, 25 combo_D, 0 critic_strong.
- **Fixed-quality cases** (`reports/gate2_6/fixed-quality-eras.md`) isolate the expectation rules. The same film that scores 8.16 at year 0 scores 6.89 at year 20+ in control (era bar alone), 6.28 under combo_B or combo_D, and 6.05 under combo_C. A masterpiece (near-max meters, A combo) stays Hall of Fame through year 36 under **every** tested variant (lowest: 9.20 under critic_strong / combo_C), so HoF is never mathematically excluded.
- **Method:** `scale` and `subtract` at the same strength are within 0.6 points of HoF % of each other. Scale is kept because it leaves weak films (which drive TV renewal ≥ 4.0 later) less damaged.

## 4. Hall of Fame scarcity

Quality studios pooled. Percentages are of films in that slice (the denominators are in the reports). Avg ≥ 9.0 equals the HoF %.

| Variant | 50 films: HoF % | Avg > 9.0 % | Audience ≥ 9 % | Critic ≥ 9 % | 100 films: HoF % | films 51–100 HoF % | yr 5–10 HoF % | yr 10–15 HoF % | HoF per 100-film career, balanced p50 / p90 | best film per 100-film career p10 / p50 / p90 |
|---|---:|---:|---:|---:|---:|---:|---:|---:|---|---|
| control | 26.3 | 25.4 | 33.2 | 31.2 | 17.7 | 9.1 | 35.1 | 36.1 | 24 / 32 | 9.43–9.70 / 9.86 / 10.00 |
| critic_moderate | 17.3 | 16.6 | 33.2 | 17.9 | 10.1 | 3.0 | 26.1 | 18.9 | 12.5 / 19 | — / 9.70 / 10.00 |
| audience_moderate | 23.7 | 23.2 | 28.1 | 31.3 | 15.3 | 6.8 | 35.1 | 28.9 | 20 / 28 | — / 9.81 / 10.00 |
| combo_A | 21.5 | 20.7 | 31.6 | 23.3 | 12.9 | 4.3 | 32.5 | 25.1 | 16 / 23 | — / 9.77 / 10.00 |
| combo_B | 15.8 | 15.2 | 28.2 | 17.9 | 8.9 | 2.1 | 26.1 | 14.4 | 11 / 17 | 9.27–9.43 / 9.67 / 10.00 |
| combo_C | 12.1 | 11.8 | 31.7 | 11.9 | 6.4 | 0.6 | 22.2 | 8.1 | 7 / 14 | 9.21–9.32 / 9.57 / 9.85 |
| **combo_D** | 11.1 | 10.5 | 28.3 | 10.6 | 6.3 | 1.5 | 19.3 | 7.2 | 8 / 13 | 9.13–9.31 / 9.52 / 9.82 |

(Strict > 9.0 is 0.3–0.9 points below ≥ 9.0 here, because exact 9.00 averages occur. Both are printed for every strategy and window in the reports.)

**What it means:**
- **Critic generations are the lever that matters.** Audience eras alone barely move HoF (−2.6 points at 50 films for moderate), because Audience is usually the higher of the two scores. That's consistent with the design ("audiences shift more gently").
- **combo_B halves late greatness** (films 51–100: 9.1% → 2.1%), but the mid-career peak stays high (26% of films in years 5–10). The first moderate generation is only 4% tougher, and it arrives right as studios mature.
- **combo_D** (same 12% ceiling, but the first new generation is +8%) is aimed at that peak: years 5–10 drop to 19%, years 10–15 to 7%. Its late game is no harsher than combo_B (identical from year 12 on). Early films are untouched.
- **Outstanding films remain possible but stop being routine.** Under combo_D, every quality career still makes at least one HoF film (0–1% of careers have none). A balanced studio gets a median of 8 HoF titles in 100 films instead of 24. Its best film is typically 9.5, not 10.0.
- **Franchise and cheap strategies:** franchise-builder has no HoF film in 63–84% of careers in every variant. Repeat-farmer and cheap-duds essentially never reach HoF. Expectations don't change this ordering.
- **Distinct IPs:** HoF IP counts are reported separately from release counts (`hofIpsPerCareer`, `hofIpsTotal`). Franchise sequels that qualify count as separate releases.

## 5. Prestige progression (Prestige gates growth; cash sustains operations)

Median at 50 films.

| Strategy | control: cash / Prestige | combo_B | combo_D | Upgrade →6 / →8 bought (film #), all variants | Cash-rich but Prestige-locked at some point |
|---|---|---|---|---|---|
| balanced | $12.40M / 11,100 | $12.37M / 9,665 | $12.40M / 8,703 | 100% (#7) / 100% (#11) | 100% |
| quality-first | $12.75M / 10,148 | $12.74M / 8,623 | $12.74M / 7,603 | 100% (#7) / 100% (#12) | 100% |
| experimenter | $13.51M / 9,733 | $13.50M / 7,998 | $13.50M / 7,130 | 100% (#8) / 100% (#14) | 100% |
| franchise-builder | $11.06M / 4,053 | $11.13M / 4,300 | $11.12M / 4,675 | 100% (#7) / 100% (#10) | 100% |
| repeat-farmer | $13.45M / 3,250 | $12.86M / 3,250 | $12.59M / 3,250 | 100% (#7) / 100% (#11) | 100% |
| cheap-duds | $7.62M / 150 | $7.15M / 150 | $6.96M / 150 | never hires, never upgrades | — |

At 100 films: balanced Prestige 21,093 (control) → 16,633 (combo_B) → 15,475 (combo_D); repeat-farmer 5,750 in all three.

**What it means:**
- **Cash can't bypass Prestige.**
  - Engine test: a $50M studio with 0 Prestige gets no upgrade choice, and a forced upgrade throws.
  - New invariant `UPGRADE_BELOW_PRESTIGE_GATE` = 0 across 172,800 careers.
  - Every hiring strategy spent time with enough cash for the next upgrade but not enough Prestige, so **Prestige was the binding gate every time.**
- **Excellence is rewarded with more progress, not more cash.** Quality studios earn 2.1–4.3× repeat-farmer's Prestige across all variants and lengths (lowest: experimenter under combo_D at 100 films), with similar or less cash.
- **But the current gates don't separate strategies.** At 200 and 1,000 Prestige, everyone who hires (including repeat-farmer and franchise-builder) buys both upgrades by film 10–14, and tougher critics don't change that timing. The gates are reached before the first critic turnover. That's a gate-value question for whatever Gate 3 unlocks (OPEN), not something to fix here.
- **Tougher critics cut quality studios' Prestige**: combo_B −13 to −18% at 50 films and −20 to −21% at 100; combo_D −22 to −27% at 50 and −26 to −27% at 100 (fewer HoF / Critic ≥ 8.5 awards). Repeat-farmer's Prestige doesn't move. Its Prestige is ~70% `meters_all_70` (+50 per release, 44.7 per 50-film career). That milestone measures team craft before reviews, so critic generations can't touch it. Whether the craft-meter milestone should rise with eras is OPEN; nothing was changed.
- **Franchise-builder gains Prestige under tougher critics** (4,053 → 4,300 under combo_B and 4,675 under combo_D at 50 films; 6,560 → 9,072 under combo_B at 100). Observed cause: its sequels review worse, so it starts new IPs more often (IPs crossing $1M: 2.5 → 4.3 per career) and collects more per-IP commercial milestones.
- **`PRESTIGE_TOO_FAST` (400/yr) is an OUTDATED threshold**, fit to Gate 2 per-IP totals. It fires on 1,028–1,260 of 2,700 careers per variant, nearly all of them balanced and quality-first careers. That's a false positive under hybrid Prestige; I didn't treat it as a verdict.
- **Cash shortage:** 56–71% of quality careers have at least one negative-cash week (the known early dip between the Star fee and the first release). No variant changes this.

## 6. Franchise cash vs growth

As accepted by the designer, the cheap-sequel studio being richer is **not** treated as a defect. Repeat-farmer ends 50 films with $12.6–13.5M (among the richest; only experimenter is consistently richer) and 3,250 Prestige, vs balanced's ~$12.4M and 8,700–11,100 Prestige. Tougher critics trim repeat-farmer's cash slightly (−$0.6M under combo_B, −$0.9M under combo_D; its sequels review worse, so word of mouth is weaker). Cheap-duds loses ~$0.5–0.7M for the same reason. Quality studios' cash is unchanged. I made no sequel, fan, royalty, surplus or payout changes.

## 7. Designer decision table (pick one; nothing is locked)

Quality studios pooled; balanced for Prestige and upgrades.

| Candidate | Effect on early scores (films 1–5 / 6–20) | 50-film avg | 100-film avg | HoF % 50 / 100 films (late 51–100) | 9+ (Critic ≥ 9) at 50 | Best film per career p50 · p90 (100) | Balanced Prestige 50 / 100 | Upgrades (film #) |
|---|---|---:|---:|---|---:|---|---|---|
| control (current) | 6.42 / 8.29 | 8.37 | 8.27 | 26.3 / 17.7 (9.1) | 31.2% | 9.86 · 10.00 | 11,100 / 21,093 | #7 / #11 |
| combo_A (critic mild + audience mild) | none / none | 8.29 | 8.05 | 21.5 / 12.9 (4.3) | 23.3% | 9.77 · 10.00 | 10,565 / 18,490 | #7 / #11 |
| combo_B (critic moderate + audience moderate) | none / −0.01 | 8.20 | 7.90 | 15.8 / 8.9 (2.1) | 17.9% | 9.67 · 10.00 | 9,665 / 16,633 | #7 / #11 |
| combo_C (critic strong + audience mild) | none / −0.06 | 8.13 | 7.75 | 12.1 / 6.4 (0.6) | 11.9% | 9.57 · 9.85 | 8,900 / 15,680 | #7 / #11 |
| **combo_D (front-loaded critic, 12% max + audience moderate)** | none / −0.03 | 8.10 | 7.83 | 11.1 / 6.3 (1.5) | 10.6% | 9.52 · 9.82 | 8,703 / 15,475 | #7 / #11 |

**RECOMMENDATION (pending approval): combo_D as the candidate curve.** Critics turn over every 6 in-game years: the first new generation is 8% tougher, the next is capped at 12%. Audiences shift every 10 years by +2%, capped at 6%. It's the only tested curve that hits the measured peak (years 5–15) while keeping:
- early films untouched;
- the same late-game ceiling as combo_B;
- a masterpiece at Hall of Fame level through year 36 (9.56);
- at least one HoF film in 99–100% of quality careers.

If you'd rather keep more late-game greatness, combo_B is the gentler alternative. I'd avoid combo_C: its late game nearly removes HoF (0.6%) without improving the mid-career peak more than combo_D does.

## 8. Still OPEN (designer)

1. **Target HoF rate.** Not specified, so none was invented. The table above shows the trade-off.
2. **Late-career decline.** In every variant, including control, the 51–100 window averages lower than 21–50 (control 8.18 vs 8.73; combo_D 7.57 vs 8.29). The existing era bar keeps rising to year 20 and repetition fatigue builds while staff plateau near 100. "Experienced teams improve" holds early and mid-career; late, the rising bar wins. Options to discuss, none tested: let the existing era bar act on the audience side only (it currently also hits critics, so critics get double-tightened), or lower its cap.
3. **Perfect 10s.** The 0–10 clamp plus the A-combo ×1.15 multiplier make perfect 10.00 films reachable in every era. Should 10.0 exist?
4. **Prestige gates (200 / 1,000)** are reached by film ~7 / ~11 by every hiring strategy. Real empire gates will likely be Gate 3 unlocks.
5. **`meters_all_70` per release** is ~70% of a cheap-sequel studio's Prestige and is unaffected by critics.
6. **Refit `PRESTIGE_TOO_FAST` and `QUALITY_INFLATION`** once the Prestige pace and HoF target are chosen. Both are labelled outdated in the reports.
7. **HoF rounding** (8.995 counts as 9.00): confirm or change the rule.
8. Self-funding and first-film revenue remain open money items from Gate 2.5. They weren't expanded here.

## 9. Limitations

- Critic generations are a deterministic **proxy**. Named critics, their tastes and retirement stories are not modelled. When they are, their aggregate effect should match the chosen curve.
- Strategies are heuristics. A different human play pattern (for example, rotating combos more) changes repetition fatigue and therefore late scores.
- Movies only, one production at a time. With TV/streaming, calendar time and film count will diverge, and Prestige sources will change.
- Only one follow-up variant (combo_D) was added after seeing the main results. It's disclosed as a follow-up and run on the same seed bank.

## Files

- `reports/gate2_6/p{5,20,50,100}/G26_expectations.{md,json,great.csv,careerbest.csv}`: the main matrix.
- `reports/gate2_6/followup/…/G26_followup.*`: combo_D, plus the control/combo_B reproducibility reruns.
- `reports/gate2_6/fixed-quality-eras.{md,json}` and `reports/gate2_6/followup/fixed-quality-eras.md`: the fixed-quality cases.
- `reports/gate2_6/00_pre_change/`: Gate 2.5 control before any code change.
- Decision tables are regenerated with `python3 -I scripts/g26_decision_table.py` (add `reports/gate2_6/followup G26_followup` for the follow-up).
