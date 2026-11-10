# Gate 3 findings: limited series, renewable TV and streaming

> **Synthetic results from TEST ASSUMPTIONS.** Nothing here locks a number or changes the v9.6/v9.61 design. Both TV financing variants are implemented; neither is declared official. The Gate 2.6 critic curves stay **off** except in experiment G3_critics. Movies-only results are reported separately and stay directly comparable to Gate 2.6.

## 0. What was built, and the evidence

**Gate 3A (formats and TV): complete.**
- Limited series: a fixed 6-episode package that airs weekly, has a short tail and never renews.
- Renewable TV, one IP with separately produced seasons:
  - Prestige-capped orders (5/10/15/20), with a debut allowed at the max.
  - Renewal by season average (4.0 inclusive).
  - Show-age fatigue, theme twists, hiatus (anticipation only) and one fading announcement per season.
  - Recasting penalties.
  - Contract variants A and B.
- Seven new policies, the CLI, and minimal UI controls.

**Gate 3B (streaming): complete.**
- A Software Engineer builds the platform in the background and is off productions while building.
- One aggregate subscriber balance with acquisition only from Originals and new catalog joins, churn softened by catalog quality/freshness/diversity/Hall of Fame evergreens, a quiet-period drift, operating costs, and an automatic once-only catalog.
- Self-funded Streaming Originals (no traditional money).
- Integrated into the single weekly clock (`docs/gate-3-architecture.md`).

**Not implemented (OPEN/Later):**
- Binge drops (a proposal).
- TV spinoffs/reboots, Final Season announcements and other show shake-ups.
- Platform upgrades.
- Firing staff.
- Named critics.
- Challenge modes.
- Multi-production concurrency.

**Tests and runs (all executed here):**
- `npx vitest run`: **90 tests in 10 files, all passing**, including 26 new Gate 3 tests: 25 for handoff §F 1–15 and a jsdom UI test (§F16: Gate 3 config → TV season aired → streaming live).
- `npm run typecheck` clean; `npm run scenarios`: 7/7 regression seeds ok; `npm run build:web` ok.
- **Movie-only regression:** 3,200 careers (100 seeds × 16 strategy/config pairs × 20/50 films) are **byte-identical** to the stored Gate 2.6 baseline. A Gate 2.5 decision log replays to the same cash ($914,901) and week (95).
- Representative traces replay exactly: mixed seed 1 (15 y), tv-first seed 2 (15 y), streaming-pivot seed 1 (12 y).

| Experiment (`config/experiments/`) | Seeds | Horizons | Careers | Invariant violations |
|---|---:|---|---:|---:|
| G3_main (12 strategies) | 200 | 5 productions; 5/10/15/25 years | 12,000 | **0** |
| G3_contract (A vs B) | 200 | 10/20 years | 4,000 | **0** |
| G3_season_size (5/10/20/max) | 200 | 10/20 years | 4,800 | **0** |
| G3_streaming (5 variants) | 200 | 15/25 years | 8,000 | **0** |
| G3_critics (off / combo_B / combo_D) | 200 | 15/30 years | 6,000 | **0** |
| Total | | | **34,800** | **0** |

Config hashes are printed in each report header (gate3 main `2e86e9ec`), and the ruleset is `v9.61-gate3-0.1`. **Calendar:** in the movie kernel, 50/100 films ≈ 15.7/31.1 years. TV-heavy studios complete far fewer releases per year (tv-first ≈ 1.8/year vs 3.2/year for movie studios), so every table reports both years and releases.

## 1. Economics per format (calibrated TEST ASSUMPTIONS)

Net to the studio (studio take + kept surplus − studio cash spent on the project) per production week, from 100 careers × 15 years (`scripts/g3-econ.ts`):

| Format | Production weeks | Base cost | Net per production week | vs movie |
|---|---:|---:|---:|---:|
| Movie | 16 | $60K | $25.3K | 1.00× |
| Limited series (6 eps) | 18 | $90K | $26.5K | 1.05× |
| TV, 5 episodes | 16 | $90K | $14.0K | 0.55× |
| TV, 10 episodes | 26 | $165K | $23.6K | 0.93× |
| TV, 15 episodes | 36 | $240K | $29.0K | 1.15× |
| TV, 20 episodes | 46 | $315K | $33.2K | 1.31× |
| Any Streaming Original | — | — | −$6K to −$8K (pure cost; value comes through subscribers) | — |

**Why:** a season's cost grows linearly with episodes. A well-reviewed show keeps most of its weekly audience and recruits more through word of mouth, so longer orders of *good* shows earn more per week. Weak shows lose a share every episode, so a long order of a weak show earns little (adversarial `tv-duds`: $9.4K/week). More episodes do **not** multiply Prestige (§3).

## 2. Strategy trade-offs (G3_main, medians, 200 seeds)

**15 years** (≈ 48 movies, or 27–43 releases for TV/mixed studios):

| Strategy | (a) cash | (b) Prestige | (c) TV unlock / streaming live | (d) IPs ≥ 10K fans | Shows · seasons · longest | (e) HoF per career (rate) | Careers with 0 HoF | (f) last-12-month mix | (g) ever negative |
|---|---:|---:|---|---:|---|---|---:|---|---:|
| balanced (all movies) | $11.84M | 10,605 | — | 19 | — | 14 (28.9%) | 0% | traditional $1.36M | 70% |
| quality-first (movies) | $12.19M | 9,660 | — | 24 | — | 12 (25.7%) | 0% | $1.37M | 60% |
| repeat-farmer (cheap sequels) | $13.08M | 3,150 | — | 1 | — | 0 (0.2%) | 99% | $1.32M | 65% |
| cheap-duds | $7.25M | 150 | — | 0 | — | 0 | 100% | $0.59M | 5% |
| tv-first | $10.95M | 4,625 | yr 2.7 / — | 3 | 3 · 19 · 8 | 3 (10.1%) | 23% | $1.29M | 74% |
| renewal-franchise | $6.07M | 2,325 | yr 2.5 / — | 1 | 1 · 22 · 22 | 0 (0.8%) | 91% | $0.69M | 54% |
| limited-focus | $12.66M | 8,680 | — | 15 | — | 11 (25.7%) | 0% | $1.44M | 52% |
| traditional-holdout | $12.01M | 5,655 | yr 2.5 / — | 5 | 3 · 15 · 6 | 4 (16.2%) | 5% | $1.32M | 73% |
| mixed (+ streaming) | $11.55M | 6,848 | yr 2.7 / yr 7.3 | 8 | 2 · 9 · 6 | 7 (20.9%) | 0.5% | trad. $0.50M · subs $2.18M · ops −$1.07M | 73% |
| streaming-pivot | $4.12M | 5,640 | yr 2.5 / yr 6.4 | 4 | 2 · 9 · 6 | 6 (18.9%) | 0% | subs $2.20M · ops −$1.08M | 65% |
| tv-duds (adversarial) | $6.97M | 150 | 25% unlock TV by yr 15 | 0 | — | 0 | 100% | $0.51M | 4% |

At **25 years** (stress horizon): mixed **$23.9M** / 11,655 Prestige, traditional-holdout $23.8M / 9,093, tv-first $22.7M / 6,898, balanced $21.4M / 18,245, limited-focus $23.3M / 14,098, streaming-pivot $6.0M / 8,545, renewal-franchise $10.1M / 3,045.

"Ever negative" is mostly the known one-time dip between paying the Star and the first release. The minimum cash median is −$1K to −$4K.

## 3. The biggest findings

1. **TV earns money slowly and Prestige slowly.**
   - At 10 years, tv-first has $5.8M / 3,115 Prestige vs balanced's $7.2M / 6,528. It catches up on cash by 25 years ($22.7M vs $21.4M), never on Prestige (6,898 vs 18,245).
   - **Causes:** Prestige is earned per release, and a TV season takes 16–46 weeks; show-age fatigue lowers later seasons' scores; and a TV season reaches Hall of Fame 10–14% of the time vs 20–29% for quality movie/limited-series studios.
   - Nothing multiplies by episode count: viewer milestones, fans and Star exposure use distinct people, and the invariant `TV_PRESTIGE_PER_EPISODE` stayed at 0.
2. **Season size is a clean money-vs-Prestige choice** (G3_season_size, tv-first, 20 years):

   | Order | Cash | Prestige |
   |---|---:|---:|
   | 5 episodes | $4.6M | 10,955 |
   | 10 episodes | $13.0M | 8,040 |
   | 20 episodes | $16.7M | 5,645 |

   Short orders cycle faster (more scored seasons), and long orders of good shows earn more per week. The handoff's "a 20-episode order shouldn't earn 4× the Prestige of a 5-episode order" holds; here it earns about half.
3. **Shows can run forever, and a weak forever-show can bleed a studio.**
   - Fatigue is capped at 35%, so a show settles near a 6.0–6.3 average and stays renewable (≥ 4.0) indefinitely. renewal-franchise ran one show for 22 seasons by 15 years and 36 by 25; `TV_SEASON_TOO_LONG` fired in 213/2,400 careers.
   - With a full 8-person payroll (~$10K/week), such a show loses money every season. 2/200 renewal-franchise careers sank to −$0.6M and −$1.2M by year 25 (`MIXED_ECONOMY_SOFTLOCK`).
   - The causes: renewals keep coming, there's no firing, and there's no negative-cash floor. This is not a lock (offers and the lifeline always exist), but it's an unbounded debt state. Seed 83's season-by-season ledger is in the counterfactual report (C2).
4. **Streaming is a strong late-game business without being an automatic win.**
   - Platforms launch at 6.4–7.3 years, reach ~86K of a 120K reachable market by year 15, pay back the $600K build in 1.3–1.9 years, and provide 81% of the mixed studio's last-12-month income.
   - **mixed** ends with the same cash as traditional-holdout and more Prestige; by 25 years it's the richest Gate 3 policy.
   - **streaming-pivot**, which self-funds every Original it can afford, is cash-poor ($4.1M at 15 years, $6.0M at 25), because Originals give up box office.
   - A quiet platform drifts down slowly and visibly (C7: 60K → 30K subscribers over 18 idle months, with a "restless" warning). The catalog alone never acquires (invariant `PASSIVE_ACQUISITION` = 0).
   - **Price is the dominance knob:** a 1.5× subscription fee nearly doubles mixed's 25-year cash ($42.3M) and makes streaming dominate. 1.5× acquisition saturates the market in 58% of careers by 25 years. 1.5× churn trims streaming studios' cash by 9–33%.
5. **TV financing A vs B** (paired seeds; per-season disclosure in `reports/gate3/contract-ab-disclosure.md`):
   - Contract B's continuing-partner advance (≈ 0.9× base cost, adjusted by the last season's ROI) is smaller than A's open-market offers. A's offers already value a returning show's IP fans at ≈ 2× base.
   - TV net per production week fell 10–33% under B (median ≈ 19%). At 20 years: tv-first cash $16.7M → $12.5M, renewal-franchise $8.1M → $2.8M, with nearly identical Prestige.
   - On seed 2, B gave $5.1M of advances vs A's $8.3M over the same 15 years.
   - B is more legible ("they signed the series"), but it removes the per-season market signal and the player's freedom to switch partners.
6. **Critic curves interact strongly with TV** (G3_critics, 15 years):
   - tv-first's TV seasons reach Hall of Fame 14.1% of the time with curves off, 7.6% under combo_B and 4.8% under combo_D.
   - tv-first careers with zero Hall of Fame entries rise from 23% to 48% and 62%.
   - Movies and limited series fall less (balanced 28.9% → 18.7% → 13.6%).
   - Show fatigue and tougher critics stack, so **choose the Gate 2.6 curve with TV in view**.
7. **Hiatus barely matters at current values** (C4):
   - A 3-year pause cut the show's anticipation multiplier to 0.53, but the season still opened higher (132K vs 119K), because the previous season's fan gain had landed in the meantime.
   - The anticipation terms (fans' awareness, announcement) are small next to base awareness, marketing and Star Fame. An announcement added only ~1% to the opening.
   - Past scores were unchanged in every branch.
8. **Limited series are a very strong early format.**
   - Over the first 5 productions they net $18.8K/week vs $15.6K for movies (no TV before year ≈ 2.5).
   - At 15 years limited-focus is a top cash studio ($12.7M) with 8,680 Prestige and a 26% Hall of Fame rate.
   - A 5-episode TV season costs the same and nets about half as much. The distinct identity works (no renewal, no fatigue, a clean ending), but at these numbers the 5-episode TV pilot is strictly worse than a limited series.

**Interactions with the movie economy:**
- Movie-only studios are unaffected (byte-identical).
- The Prestige gates for staff upgrades (200/1,000) are still reached early by everyone. tv-first has 1,285 Prestige at year 5, 3,115 at 10 and 4,625 at 15, so its 10/15/20-episode caps (600/1,800/3,500 Prestige) arrive around years 3–4, 6–7 and 11–12.
- The Software Engineer takes a normal staff slot and the rules have no firing, so a studio that fills all 8 slots can't build streaming. The streaming-minded policies keep a slot free.
- Originals score higher on average (8.5–8.8) only because studios make them later, when mature. Scores never depend on route (`SCORE_NOT_CAUSAL` = 0).

## 4. Greatness across formats (seasons and productions, never episodes)

G3_main, 15 years, all strategies pooled. Denominators are releases of that format.

| Format | Releases | Avg | HoF % | Perfect 10.00s |
|---|---:|---:|---:|---:|
| Movie (incl. weak movie-only strategies) | 66,584 | 7.31 | 9.7% | 117 |
| Limited series | 13,119 | 8.17 | 20.6% | 47 |
| TV season | 13,106 | 7.52 | 10.0% | 32 |
| Movie / Original | 876 | 8.81 | 41.1% | 6 |
| Limited series / Original | 528 | 8.78 | 37.9% | 2 |
| TV season / Original | 2,156 | 8.50 | 27.9% | 18 |

- **Per strategy** (avg ≥ 9.0 / > 9.0 / Audience ≥ 9 / Critic ≥ 9):

  | Strategy | Avg ≥ 9.0 | Avg > 9.0 | Audience ≥ 9 | Critic ≥ 9 |
  |---|---:|---:|---:|---:|
  | balanced | 28.9% | 27.9% | 35.1% | 33.1% |
  | tv-first | 10.1% | 9.7% | 14.6% | 12.1% |
  | mixed | 20.9% | 20.4% | 28.6% | 24.8% |
  | limited-focus | 25.7% | 24.9% | 36.1% | 32.2% |

- **Best release in the sample:** "Iron Frequency", a limited series scoring 10.00 (limited-focus, seed 6, release #29, year 10).
- **Rounding-boundary Hall of Fame titles** (true mean < 9.0 promoted by 2-decimal rounding) are counted separately: e.g. 31 of balanced's 2,774 HoF titles at 15 years. The current rule is preserved.

The full per-window, per-year-band and per-format tables, plus career-best distributions, are in each experiment's `.md` and `.great.csv`.

## 5. Counterfactual cases (`reports/gate3/counterfactuals.md`; clone-and-branch, identical rules)

| Case | Result |
|---|---|
| C1 high-quality limited series, low reach | Same scores (8.68). Distributor reach: 304K distinct viewers, $546K studio take, +17.9K fans. Self-funded small reach: 71K (81% of its cap), $209K, +4.2K fans. |
| C2 long show with fatigue | Fatigue climbs to the 35% cap by season 10. Scores sit at ~6.3 for seasons 10–28; it stays renewable and keeps grossing ~$0.8–1.3M a season. |
| C3 twist | No twist 8.12. Bad twist (Sports) 7.54, fans −25% at release. Good twist (Zombies) 8.94, fatigue counter 3 → 1. Genre stays Horror in all three. |
| C4 hiatus | 8 weeks → ×1.0. A 3-year pause → anticipation ×0.53, yet the opening rose because fans had grown meanwhile. Past scores unchanged. |
| C5 Hall of Fame evergreens | Catalog retention 0.60 with its 3 HoF titles, 0.48 without them. |
| C6 Originals in debt | At −$15K cash, neither Originals nor self-funding are offered. The studio finishes a traditional release (avg 8.45) and is back to +$670K. |
| C7 idle platform | 2 years without releases: 60K → 52K → 41K → 30K subscribers; restless warning; still +$0.99M platform net over the 2 years. |
| C8 catalog quality | Retention after 2 quiet years: 30 poor titles 0.38 → 10.5K left; 5 great HoF titles 0.56 → 14.6K; 5 good titles 0.28 → 8.9K. |

## 6. Recommendations (pending designer review)

- **TV financing: contract A (per-season pitch).**
  - It reuses the movie loop exactly, so it's one financing rule to learn and audit.
  - Each season's offers act as a market signal on the show's health, and the player keeps agency (switch distributors, self-fund a strong season).
  - IP fans already raise returning-season offers.
  - B's legibility can be borrowed cheaply later, by labelling the incumbent distributor's returning-season offer as "your partner", without a second advance formula.
- **Limited series vs renewable TV: keep both as distinct formats.**
  - Limited series: fixed package, no renewal, no fatigue, clean ending, finite tail. A good Prestige-cadence format.
  - TV: the long game; fans compound across seasons, and long orders of good shows earn the most per week.
  - Tuning note: the 5-episode TV pilot is dominated by a limited series at current numbers.
- **Not recommended without a designer call:** capping renewals, a negative-cash floor, firing, or any change to fatigue, sequels, royalties or payouts.

## 7. Limitations

- Policies are heuristics. A human would end a bleeding show or ask to fire staff; the adversarial and franchise policies deliberately don't.
- One production at a time; no TV spinoffs/reboots; weekly pacing only (no binge drop).
- Streaming magnitudes (fee, market, churn, acquisition, operating cost) are TEST ASSUMPTIONS, and the fee is the most sensitive of them.
- Branches in counterfactuals share the seed and the state at the branch point. Later RNG paths can diverge.
- Original TV seasons air weekly; a binge drop would change the acquisition timing.
