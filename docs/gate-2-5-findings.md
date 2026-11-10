# Gate 2.5 findings — movie-system iteration

> **Simulation results from provisional numbers. Nothing here is a design lock.** Every recommendation below is pending designer approval. Gate 3 (TV / streaming) has not been started and the master design handoff has not been changed.

## 0. Method

- **Order:** (1) the unchanged Gate 2 baseline was run and saved before any code changed (`reports/gate2_5/00_pre_change/`, 200 seeds × 5/20/50 films, config hash `5355fe52`). (2) Each change was added behind an optional config field whose default reproduces Gate 2. (3) The post-change baseline was rerun on the same seeds: **0 metric differences** vs the pre-change run (hash is now `5acd3c45` only because the new fields exist). (4) Each item was tested on its own (A, B, C, D, E), then all together (COMBINED).
- **Paired seeds:** every variant in an experiment plays the same seed list and the same strategies; only the config override differs. Deltas in the reports are medians of per-seed differences.
- **Agents see only visible information** (offers, scores of finished films, their own cash, staff, Prestige). No agent reads hidden combo grades, future results or RNG streams. The new `selective-self-funder` estimates value from the gross per unit of reach of its own finished releases.
- **Strategies:** the 7 Gate 2 strategies plus `selective-self-funder` and `repeat-farmer` (adversarial: once any release averages ≥ 7.5 it makes the cheapest possible sequels of its best IP, trying to farm Prestige and fans).
- **Hiring policy change:** in candidate runs the agents hire up to the engine cap and buy an upgrade when they're at the cap and cash > cost + a per-strategy buffer of $100–200K (`agents.legacyHeuristicStaffCaps: false`; details in assumptions register G3). The baseline keeps the old hard-coded agent limits (balanced 4, quality-first 5), so "historical" means Gate 2 behavior exactly.

| Run | Seeds | Variants | Film counts | Careers | Invariant violations |
|---|---:|---|---|---:|---:|
| A staff capacity | 300 | historical, uncapped, fixed 4/6/8, ladder 4→6→8, ladder 4→5→6→7→8 | 5/20/50 | 44,100 | **0** |
| B legs | 300 | geometric, diffusion | 5/20/50 | 12,600 | **0** |
| C Prestige scope | 300 | per-IP, per-release, hybrid (+ repeat-farmer) | 5/20/50 | 16,200 | **0** |
| D self-funding | 200 (+100 fine scan) | branch analysis at reach 0.22/0.35/0.5/0.55/0.6/0.65/0.7 | first 10 films | 2,325 pitch branches | — |
| E first film | 300 | 6 economy scenarios × 5 strategies | film 1 | 9,000 | — |
| COMBINED | 1,000 | historical vs candidate | 5/20/50 | 54,000 | **0** |

Invariants checked every week of every career: cash/ledger reconciliation, no hire above capacity, no negative-cash spending, viewers never exceed the reach cap, runs finite, feedback text matches the actual week-over-week direction (`FEEDBACK_UNTRUE`), plus the Gate 2 set.

Config hashes: historical `60285097`, candidate `9ccc28cc` (COMBINED); per-variant hashes are in each report's header. Commands are in the README ("Gate 2.5 additions").

---

## A. Studio-wide headcount cap

**What changed:** `maxStaff` is now an engine rule. `getChoices` hides hiring at the cap, `applyDecision` and `hireStaff` throw if forced. Everyone on staff still works on the one production (no crew caps, no benching, no diminishing per-worker output). `upgrade_studio` is an explicit action with a cash cost and a Prestige requirement.

**Balanced, 300 paired seeds (medians):**

| Variant | 20 films: cash | Prestige | late 8+ share | 50 films: cash | Prestige | avg Audience |
|---|---:|---:|---:|---:|---:|---:|
| historical (agent cap 4) | $4.74M | 1,670 | 0.63 | $14.74M | 5,660 | 8.05 |
| uncapped | $0.12M | 3,410 | 1.00 | **−$5.42M** | 10,900 | 9.01 |
| fixed 4 | $4.74M | 1,670 | 0.63 | $14.74M | 5,660 | 8.05 |
| fixed 6 | $4.52M | 2,210 | 0.88 | $13.81M | 7,405 | 8.36 |
| fixed 8 | $4.10M | 2,620 | 0.88 | $12.50M | 8,340 | 8.52 |
| **ladder 4→6→8** | $3.21M | 2,160 | 0.88 | $11.56M | 7,805 | 8.41 |
| ladder 4→5→6→7→8 | $2.50M | 2,180 | 0.88 | $10.86M | 7,800 | 8.42 |

Mean review score by film number, balanced, ladder 4→6→8: #1 5.62 · #3 6.22 · #5 7.39 · #10 8.23 · #20 8.68 · #30 8.75 · #50 8.71 (historical #50: 8.28).

**Why:**
- Uncapped agents keep hiring (~35 staff). Wages eat the studio; scores hit ~9. The cap fixes runaway hiring completely.
- Hiring is still worth it: fixed 8 vs fixed 4 gives +57% Prestige at 20 films for −13% cash. That's the trade you want a player to feel.
- The cap does **not** fix late-game quality inflation. Gate 2 inflation already happened at 4–5 staff, because staff stats climb toward 100 (mean staff stat 96–100 by film 50) while the era bar only rises 4%/yr. More headcount just reaches that ceiling sooner.
- The 5-step ladder costs ~$0.7M more than 4→6→8 and gives the same Prestige. Extra steps add spending without adding a decision.
- Upgrade Prestige gates (200 / 1,000) sit inside the hybrid Prestige scale, so the first upgrade comes around week 64. Because Prestige unlocks upgrades and upgrades add wages, **more Prestige → more staff → less cash**. That's why franchise-builder ends with less cash under hybrid than under per-IP (C).

**Recommendation:** approve the **2 staff / capacity 4 → 6 → 8** ladder shape, using cash + Prestige triggers. Keep the costs ($250K / $750K) and gates (200 / 1,000 Prestige) as TEST ASSUMPTIONS until the Prestige scale is decided (C). Don't use headcount to fight inflation. The lever already in the design is the rising era bar: Gate 2 F1 showed 0.08/yr clears the flag. That's an OPEN item, not something I changed.

---

## B. Weekly legs that can grow

**What changed:** `audience.legsModel: "diffusion"` (the candidate; the baseline stays `geometric`). Each release has a finite pool of people who could watch it (the distributor's reach cap):
- **Opening:** the aware share of that pool watches.
- **Weeks 2–3:** critic buzz makes new people aware, in proportion to (critic score − 5).
- **Later weeks:** word of mouth makes new people aware, in proportion to last week's viewers × (audience score − 5).
- **Fading:** interest decays each week, and faster for bad films.
- **Limits:** cumulative viewers can never pass the reach cap, and runs still end at 14 weeks or under 400 viewers a week.
- **Feedback text:** popups now describe the actual direction ("climbing", "holding", "dropping") using actual viewers ÷ last week, and an invariant fails the run if they don't match.

**Five worked cases** (controlled inputs, both models; full week-by-week tables in `reports/gate2_5/legs-worked-cases.md`):

| Case | Model | Opening | Peak week | Grows? | Total (reach cap) | Distributor ROI |
|---|---|---:|---:|---|---:|---:|
| i. great film, no marketing, unknown Star | geometric | 21,263 | 1 | no | 94,598 (240K) | 0.76 |
| | **diffusion** | 21,263 | **8** | **yes** | 233,852 (240K) | 1.87 |
| ii. big hype, bad reviews | geometric | 89,999 | 1 | no | 195,483 (340K) | 1.56 |
| | **diffusion** | 89,999 | 1 | no — falls every week | 180,589 (340K) | 1.44 |
| iii. critics high / audience low | geometric | 47,549 | 1 | no | 147,899 | 1.18 |
| | **diffusion** | 47,549 | 1 | no | 133,873 | 1.07 |
| iv. critics low / audience high | geometric | 47,549 | 1 | no | 152,797 | 1.22 |
| | **diffusion** | 47,549 | 1 | yes, late (word of mouth) | 235,909 | 1.89 |
| v. excellent film, tiny reach | geometric | 7,925 | 1 | no | 36,568 (40K) | 0.29 |
| | **diffusion** | 7,925 | 1 | yes, then capped | 38,873 (40K) | 0.31 |

**Careers, 20 films, 300 paired seeds:** balanced cash $4.74M → $5.55M, average legs 3.71 → 4.17 weeks, distributor ROI 1.89 → 2.09; cheap-duds $1.88M → $2.42M; famous-star $2.85M → $3.36M. Scores are unchanged (legs only affect money, fans and trust).

**Why:** a sleeper hit now behaves like one (case i peaks in week 8). Hype can't rescue a dud (case ii loses viewers faster than before). Reach becomes the real ceiling (case v), which gives distributor choice a clear meaning. Everyone earns more, including cheap-duds, because even a 6.0 film has slightly positive word of mouth. That's the main side effect.

**Recommendation:** approve **diffusion legs**. Keep the six parameters as TEST ASSUMPTIONS. If cheap-duds' gain is unwanted, the honest knob is the neutral point of word of mouth (currently score 5), not a barrier.

---

## C. Prestige scope

All three variants use the ladder + diffusion. Per-IP and per-release use the Gate 2 milestone set with one global scope. "Hybrid" = per-release craft milestones (all meters ≥ 70, Audience ≥ 7.5, Critic ≥ 8.5, Hall of Fame), a career-once first Hall of Fame bonus, and per-IP commercial milestones (lifetime IP gross $1M / $5M, lifetime IP viewers 500K).

| Strategy (300 seeds) | 20 films: per-IP | per-release | **hybrid** | 50 films: per-IP | per-release | **hybrid** |
|---|---:|---:|---:|---:|---:|---:|
| balanced | 2,180 | 2,822 | 3,425 | 7,670 | 10,200 | 11,100 |
| quality-first | 2,750 | 2,750 | 2,855 | 10,070 | 10,070 | 10,100 |
| franchise-builder | **225** | 1,350 | 2,225 | **310** | 3,150 | 4,050 |
| repeat-farmer | 125 | 1,275 | 1,750 | 125 | 2,775 | 3,250 |
| cheap-duds | 0 | 0 | 0 | 150 | 150 | 150 |

**Why:**
- **Per-IP** makes a good sequel worth nothing, so franchises earn almost zero Prestige. That contradicts the locked IP-fans/franchise design.
- **Per-release** fixes franchises, but commercial milestones ($1M gross per title) then pay again on every big release.
- **Hybrid** pays craft per film (a great sequel earns its awards) and pays commerce once per IP (a franchise can't farm "$1M title" forever).
- The adversarial repeat-farmer never tops the Prestige table under any scope. Quality-first and balanced stay ahead of it because it only clears craft milestones while its sequels stay good, and they don't stay good (its average falls to ~6.6 by film 20).

**Caveat:** `PRESTIGE_TOO_FAST` (threshold 400/yr, set in Gate 2 for the per-IP scale) fires under per-release and hybrid. It's a threshold-fit problem as much as a balance one: decide the Prestige scale, then refit the flag and the upgrade gates to it.

**Recommendation:** **hybrid**, pending approval.

---

## D. Self-funding

**Method:** branch regret. For every pitch where self-funding was legal in the first 10 films of a balanced career, the exact state was cloned and each option (every offer, and self-funding) was played for that project alone until its run ended. Visible-information agents were run separately (`selective-self-funder`).

| Self-fund reach | Pitches | Self-funding was best | Median margin vs best offer |
|---:|---:|---:|---:|
| 0.22 (current) | 1,550 | **0 (0%)** | −$306,923 |
| 0.35 | 1,550 | 0 | — |
| 0.50 | 1,550 | 0 | — |
| 0.55 | 775 | 61 (7.9%) | −$59,307 |
| 0.60 | 775 | 263 (33.9%) | −$20,983 |
| 0.65 | 775 | 507 (65.4%) | — |
| 0.70 | 1,550 | 1,459 (94.1%) | — |

(0.55–0.65 came from a 100-seed fine scan; the others from the 200-seed run.)

At 0.55–0.60, self-funding wins mostly on films 3–5 (e.g. at 0.60: 50/75 pitches at film 3, 82/100 at film 4, 5/100 at film 10), when the studio has some cash but distributors don't trust it yet. Later, distributor reach grows with trust and a fixed self-fund reach falls behind.

In careers, `selective-self-funder` plays almost identically to balanced (it rarely sees a winning case at reach 0.22), and the naive always-self-fund strategy stays a `DEAD_STRATEGY`. It is also the only strategy that trips `EARLY_SOFTLOCK`, and rarely: 5–8 of its 1,000 COMBINED careers per film count (stuck ≥ 52 weeks with negative cash).

**Why:** at 0.22 the studio keeps 100% of a small audience, versus 65–70% of an audience 3–4× bigger, plus an advance. That can't be a good deal. The crossover is a knife edge, going from never to almost always between 0.5 and 0.7, because reach multiplies everything.

**Limitations:** the branch analysis only counts that one project. It ignores the trust a distributor would have gained (which raises future offers), so it **overstates** self-funding a bit.

**Recommendation (smallest change, not applied):** self-fund reach **0.22 → 0.55**. It's a situational choice (about 1 pitch in 13 for a balanced studio, mostly mid-early, when you have a strong film and cash), not a default. 0.60 is the upper bound; above it, self-funding becomes the main play. Whether self-fund reach should grow with studio fans or upgrades so it stays relevant later is a design question (OPEN). I didn't model it.

---

## E. First-production economics (candidate config, 300 seeds, career stops when film 1's run ends)

Balanced strategy, medians:

| Scenario | Start cash | Gross/viewer | Upkeep | Net first film | Cash at run end | Low point | Can self-fund film 2 | Ended negative |
|---|---:|---:|---:|---:|---:|---:|---:|---:|
| S0 current | $40K | $2.00 | $600 | **+$82.6K** | $122.6K | −$5.7K | 97% | 0% |
| S1 | $40K | $1.50 | $600 | +$43.5K | $83.5K | −$5.7K | 81% | 0% |
| S2 | $40K | $1.25 | $1,200 | +$2.5K | $42.5K | −$9.1K | 28% | 0% (1% for cheap-duds/famous-star) |
| S3 | $20K | $2.00 | $600 | +$79.0K | $99.0K | −$18.4K | 81% | 0% |
| S4 | $20K | $1.50 | $600 | +$43.1K | $63.1K | −$18.4K | 56% | 0% |
| S5 stress | $0 | $1.25 | $600 | +$27.4K | $27.4K | −$38.4K | 13% | 16% (12–20% across strategies) |

Across strategies, first films average 5.5–5.7. The first film always finishes, even in S5 (lifeline + free fallback Star + no campaign). The brief dip below zero in most scenarios happens between paying the Star and the first release week. Spending is already blocked while negative.

**Why:** with diffusion legs on, even an average first film runs ~29 weeks of payroll and still roughly triples starting cash in S0. In S1 cash doubles, and still 4 in 5 studios can self-fund film 2. S2 makes the first film barely break even, and S5 leaves 1 in 6 studios in the red. Both are too harsh for a "no bankruptcy, just slower progress" game.

**Recommendation:** **S1** ($1.50 per viewer, everything else as now). Cash then means something for the first few films, nothing soft-locks, and it offsets most of the money diffusion added. Before locking it, rerun COMBINED with S1. Gross per viewer also scales distributor ROI and therefore trust. If the target is "your first film should feel like a big win", S0 is fine as is.

---

## COMBINED: historical vs full candidate (1,000 paired seeds × 9 strategies × 5/20/50 films)

The candidate is the ladder 4→6→8, diffusion legs and hybrid Prestige (`config/candidate.json`).

| 20 films (medians) | balanced | quality-first | franchise-builder | repeat-farmer | experimenter | cheap-duds |
|---|---:|---:|---:|---:|---:|---:|
| cash, historical | $4.71M | $4.25M | $3.57M | $2.48M | $2.98M | $1.86M |
| cash, candidate | $3.73M | $3.80M | $3.45M | $3.88M | $3.65M | $2.40M |
| Prestige, historical | 1,640 | 2,520 | 175 | 135 | 75 | 0 |
| Prestige, candidate | 3,415 | 2,865 | 2,225 | 1,750 | 2,448 | 0 |
| late 8+ share, historical → candidate | 0.63 → 0.88 | 0.75 → 0.88 | 0 → 0 | 0 → 0 | 0 → 0.75 | 0 → 0 |

At 50 films, candidate: balanced $12.39M / 11,168 Prestige / Audience 8.43; franchise-builder Prestige 3,925 (historical 525); **repeat-farmer $13.57M cash** (historical $7.85M), the highest cash of any strategy, with Prestige 3,250 and 230K IP fans.

Flags (candidate): `PRESTIGE_TOO_FAST` 3,264 / 9,000 careers and `QUALITY_INFLATION` 3,813 / 9,000 (historical 2,262) at 20 films; `PRESTIGE_TOO_FAST` 4,114 / 9,000 and `QUALITY_INFLATION` 4,018 / 9,000 at 50 films; `DEAD_STRATEGY` (self-funder); `EARLY_SOFTLOCK` (self-funder only, 5 / 1,000; historical 7–8 / 1,000). Historical has the same flags except `PRESTIGE_TOO_FAST`.

**What it means:**
1. **Good:** franchise play is now viable for Prestige; experimenter goes from weak to competitive (hiring + diffusion reward its better films); nothing goes bankrupt; 0 invariant violations.
2. **Worse:** late-game inflation (#50 average 8.74 vs 8.28). The cap doesn't address it (see A).
3. **New signal: cash is a weak scoreboard under the candidate.** Quality strategies pay for upgrades and 8 salaries. Cheap sequels of a fan-heavy IP earn the most money (repeat-farmer), while Prestige still ranks quality first. Whether cheap sequels *should* out-earn quality is a design call. I didn't add sequel fatigue or any other anti-exploit rule. The existing levers are sequel repetition fatigue (2.5%/repeat) and IP fan decay.

## Preserved Gate 2 findings

- Single production, whole staff on it: unchanged.
- IP-level fans: unchanged.
- Full surplus retention: unchanged.
- Advance reserve accounting: unchanged; cash invariants still at 0 violations.
- The flop rule (flops hurt Star relationships; recasting a direct-sequel role hurts; choosing randomly-rolled audition Stars never does): unchanged.
- Distributor ROI > 1 for decent films: still true, and higher with diffusion.
- Gate 2 F1 (era bar 0.08/yr clears inflation) still applies and is the recommended next experiment.

## Limitations

- Strategies are heuristics, not optimizers. A "dead" strategy may be a weak policy rather than a weak rule.
- Upgrade costs and gates were not swept; only two ladder shapes were tested.
- Hybrid milestone amounts weren't tuned: Gate 2 values with scopes attached, plus two new milestones (first Hall of Fame +100 career-once, IP gross $5M +150).
- The self-fund branch analysis is single-project (see D).
- One production at a time; no TV/streaming (Gate 3).
- Reports generated before the final fix show a stale informational line (`UNSUPPORTED_RULE_ASSUMPTION` said "perIP … geometric legs" for every variant). The line is now built from the real config. No metric was affected.
