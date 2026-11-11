# Entertainment Studio Tycoon — Gate 4Q: Logical Combinations, Quality Range & Genuine Dud Tests

**Claude / Codex implementation-and-research handoff — November 10, 2026**  
**Input:** `gate4-economy.zip` (`balance-harness/`) plus its Gate 4 README, findings, and open-decision notes.  
**Status:** **Focused experimental scoring pass**, not a permanent balance lock. Create a new branch/config candidate; preserve the existing model as a regression control. **Stop at a designer review gate.**

## The design problem, in plain language

Our supposed `cheap-duds` policy produced **496 movies averaging 6.24/10** in the previous inspection, and its worst was **4.55/10**. That's *not* evidence that bad movies are too profitable; it's evidence that **we've barely tested bad movies**. We also discovered that `generateWorld()` currently gives each genre/theme combination two independently random letter grades, with no logical relationship between the premise and its compatibility. The designer wants sensible pairing logic *and* the possibility of surprising audience reactions.

**Goals:**
1. In realistic early play with two inexperienced employees, **2/10, 3/10, and 4/10 releases must be achievable**; not guaranteed percentages or scripted disasters. Strong crews can still make great movies, and modest crews can occasionally surprise us.
2. **Genre + theme compatibility should make intuitive sense.** Horror + Zombies and Sci-Fi + Robots should generally start as natural fits; a strange pairing should generally face a meaningful challenge. **Don't assume every unusual premise is bad**, or rewrite every world seed to yield identical outcomes.
3. A genuinely poor pairing can **occasionally become a surprise audience favorite**, possibly with critics remaining negative. This must be *rare, visible, seeded, and explainable*, not arbitrary cash or independent random review outcomes.
4. Preserve the **three distinct systems** the designer already chose: **Star skill by broad genre family**, **studio experience by exact genre**, and **genre + theme compatibility** (separate critic and audience evaluations). Test how they interact; do **not** collapse them.
5. Reclassify and measure **actual rating outcomes** before diagnosing profitability. Do not nerf a cheap studio just because the *strategy name* says “dud.”
6. **Keep testing fast.** Default to focused unit/scenario tests and small paired comparisons, not 200-seed/25-year matrices.

## What exists in Gate 4 (verify against supplied code before editing)

- `src/core/progression.ts::generateWorld`: currently draws an independent `audience` and `critic` grade for **every** exact genre/theme pair using `cfg.world.gradeWeights`, from the `world` RNG stream.
- `src/core/scoring.ts::computeScores`: derives scores from Plot/Writing/Filming/Editing meters; applies weak-meter penalties, **grade multipliers**, fatigue, trends/era expectations, then clamps 0–10. Current baseline `world.gradeMultiplier` is A **1.15**, B **1.06**, C **1.0**, D **0.90**, F **0.78**. These are experimental numbers, not confirmed designer targets.
- `src/core/stars.ts::starFit`: Star contributions use `cfg.world.genres[genre]` to select a **family skill**; **theme never directly changes Star skill**. Fame affects visibility, not scores.
- `src/core/progression.ts::{genreLevel,genreBonus,awardGenreXp}`: studio skill applies to the **exact genre**, not its family.
- Current config genre-to-family mapping (do **not** silently change): Action→Action, Comedy→Funny, Horror→Scary, Thriller→Scary, Romance→Romantic, Drama→Dramatic, SciFi→Action, RomCom→Funny. Current themes: Zombies, Superheroes, Spies, Sports, Vampires, Time Travel, Pirates, Robots, Dinosaurs, Mythology.
- `src/core/production.ts::completeProject` computes scores at release and reveals combo grades in `state.comboBook`. TV seasons, theme twists, repeat fatigue, Hall of Fame, and distributor previews use related information.
- Gate 4 candidate: the studio self-funds projects and takes a **distributor advertising/distribution bid at ~80%**; commissioned work is a **zero-Prestige, cash-only** safety net. **Do not redesign this economy in this pass.**

Before changing anything, inspect the actual configs and tests and confirm where starter staff stats, genre bonuses, preview grades, and score traces are calculated. State any discrepancies rather than treating this document as more authoritative than the archive.

## A. Logical compatibility without sacrificing discovery

Implement an **explicit, editable compatibility baseline** for every current exact genre/theme pair, with separate default audience and critic grades (or equivalent bounded scores), based on **thoughtful editorial mapping**. Use the *exact genre*, not just its family, for combination compatibility. The family labels are for the Star system, not a shortcut that forces Horror and Thriller to have identical theme pairings.

- Show the proposed combination matrix in a compact Markdown table and flag **contestable pairings** for designer review; do not present editorial judgments as objective truth. Use examples such as Horror + Zombies (natural), SciFi + Robots (natural), Romance + Zombies (challenging but potentially creative), Sports + Pirates (usually challenging).
- Make pair quality **strong enough to materially affect scores**. Explore D/F severity and possible non-linear penalties to early weak production, but **do not lock exact grade multipliers** without comparing realistic score distributions. Avoid turning one poor concept into an unavoidable 0/10 for an otherwise excellent crew.
- Keep **hidden discovery**: the player does not see exact audience/critic grades until using the pairing (unless already revealed by prior studio work); preserve `comboBook` and any existing public-preview restrictions.
- Seeded world-to-world variation may shift a small number of borderline pairs within sensible bounds. It should **not** randomly flip obvious A-level natural fits to F-level disasters or make every odd pairing A. Decide/document an explicit bounded variation method, or start with fixed baselines and reserve world variation for a second candidate.
- Preserve seeded deterministic generation, replay and save compatibility in the experimental mode. **Do not couple new random draws to the existing RNG streams in a way that silently destroys the legacy baseline.** Prefer a gated new stream or stable per-key seeded draws; test identical seed/config => identical grades and outcomes. Legacy config off must reproduce old results.

## B. Rare audience breakout from a poor fit

A director might produce a bizarre Romance + Zombies concept that critics dislike but audiences find delightful. Implement a **candidate** rare audience-response exception *at release*, separate from the persistent hidden baseline combo grade. Requirements:

- Rare, bounded, deterministic given seed and production state; clearly disclosed in a release trace/event such as **“Unexpected cult appeal”**. State whether it is a small lift or a true breakthrough, and test frequency and magnitude rather than assuming values.
- The event should influence **audience reception**, not automatically boost critics, quality meters, Star skill, or money. Revenue/fans then follow the **existing** audience word-of-mouth model.
- A poor combination may still be creatively executed badly. Do not make a massive positive audience outcome too easy or make it the optimal strategy to deliberately select F pairings. Consider production competence, relevant creative strengths, theme trends, and novelty as plausible conditions. A strong event must have an attributable reason in the report.
- Distinguish **stable combo knowledge** from **one title's surprising reception**: a cult hit must not secretly convert that combination's permanent critic grade to A. If a positive recurring synergy is desired, describe it separately as an optional future system.
- Respect the earlier causal design rule: **no independent final rating roll** that ignores the work, compatibility and review formula. If random variation exists, make its intermediate cause and score contribution transparent and replayable.
- If this concept requires too much new complexity to validate responsibly, implement a **small gated prototype** and report its limits, rather than inventing a large event system.

## C. Genre families and studio expertise — preserve and test them

Write explicit unit tests and paired scenarios that prove:

1. A Star specialized in **Scary** helps both Horror and Thriller, per the **existing** family mapping.
2. The same Star does **not** get the Scary skill boost merely because a non-Scary production uses a spooky theme.
3. Studio **Horror XP** does not silently become **Thriller XP**; studio genre progression stays exact-genre.
4. Horror + Zombies and Thriller + Zombies may have **different** baseline compatibility even though both use the Scary family.
5. A great Star/staff may mitigate a poor pairing, not erase the pairing's meaningful disadvantage; a weak staff with a good pairing can still produce mediocre or bad results.
6. Trend, fatigue, critic-era expectations, TV twists, and streaming routes still feed into the same score pipeline correctly.

Do **not** invent a new genre-family skill tree, a second Star skill per theme, a genre-level reward overhaul, or blanket genre unlock changes.

## D. Test the real score distribution — redefine “dud” correctly

**Rename the existing `cheap-duds` strategy in the report to `low-budget/random-combo` (preserve CLI aliases as needed)**. It is a cost-minimizing studio, *not* a measured bad-movie factory; its 6.24 average is not an F grade. Do not deliberately force its score down to meet its old name.

Create a **score-quality diagnostic** (quick script or reused batch framework) for actual movies, plus separate limited-series / TV checks when relevant:

- Starting **two-staff studio**, first **1–5 releases**: representative genre/theme combinations (logical good/middling/poor), free/cheap Star, available staffing choices. Use normal gameplay rules and reasonable choices—not direct rating injection or impossibly weakened staff.
- Same representative pairings with experienced employees and a strong matching Star; isolate the effect of **staff, studio exact-genre XP, Star family fit, and combo grade** through paired runs / traces.
- Low-budget/random-combo policy, a purposeful **poor-fit-chooser**, an ordinary balanced player, and a quality-first studio. Poor-fit-chooser may use known revealed pairings or deliberately select specified pairings in diagnostic scenarios; **ordinary agent policies must not peek at hidden grades**.
- **Actual final rating bins**: `0–<4` poor, `4–<6` mediocre, `6–<8` good, `8–10` excellent. Report individual **audience and critic** scores and the mean, including cases with large positive/negative gaps. Report **N**, minimum, p10/p50/p90, mean, percentages in each bin, and first-five-release results.
- State honestly whether **2.x / 3.x / 4.x** outcomes occur in legitimate early play, why they do or don't, and whether they are common enough to feel plausible. Do **not** force exact target percentages or rename a 6/10 movie “bad.”
- Compare old vs candidate on identical seed sets/configs. Include a **small illustrative sample of low-, average- and high-scoring movie release traces**, showing meters, combo baseline, Star family fit, genre XP bonus, audience/critic differences, any cult event, and resulting revenue/actual all-in studio net. **Do not change payout formulas in this pass**: first expose what the revised quality distribution implies economically.
- If no sub-4 scores exist even under plausible early-game poor pairings, identify whether the main issue is starter stats, meter saturation, combo strength, or another offsetting bonus; make **one limited candidate adjustment at a time**, not multiple untraceable changes.

**Separately assess movie economics AFTER identifying real duds.** We should not say “bad movies are always profitable” based only on movies that actually score around 6. A cheap 6/10 film may reasonably be a business success. For each real rating bin, calculate all-in studio losses/profits and distribution ROI separately. Don't confuse low-budget with low-quality.

## E. Fast validation only (respect designer's time)

Do **not** begin with a giant stress matrix. Reuse existing `npm test`, `npm run typecheck`, `npm run scenarios`, `npm run build:web`, `npm run economy:smoke`, and `npm run economy:compare` where relevant. Add **one focused quality diagnostic**, not a second giant harness.

1. **Inner loop:** targeted scoring/world/Star tests + **3–5 fixed seeds** and short first-5-production traces.
2. **Comparison when working:** **10–20 paired seeds** across a few policies with short/medium careers; report elapsed time and actual sample size.
3. **Larger validation only on a real regression or after the designer requests it.** **Do not run 200 seeds × 25 years by default.**
4. Preserve legacy score generation under an explicit config flag and prove old baseline still replays exactly with the new behavior off; preserve the full Gate 4 late-distribution/contract candidate when the new scoring candidate is on. Maintain determinism, bounded scores, no hidden-knowledge agent cheating, and all existing invariants.
5. The user wants useful progress quickly. If a slower test would be valuable, list it as an optional next gate rather than running it without need.

## F. Handoff files and decision gate

At completion, deliver a compact `docs/gate-4-quality-findings.md` and `docs/gate-4-quality-open-decisions.md` (or equivalent) containing:

- **Plain-English verdict:** What caused the too-high score floor? Can early gameplay naturally produce 2/10, 3/10, 4/10 releases? How often? Are scores still primarily explainable by decisions and crew?
- **Proposed human-readable exact genre/theme compatibility matrix** with separate audience and critic baselines, and all questionable editorial choices marked for approval.
- **Old vs candidate actual rating distributions**, including rookie first-five movies, low-budget/random-combo, poor-fit diagnostic, experienced studios, separate critics/audience, and audience surprise frequency.
- **Full scoring attribution for 3–5 representative releases** and their financial results. Explicitly distinguish a cheap good film from a genuinely bad film.
- Any **genre-family vs exact-genre regression tests**; confirmation that late distributor bids, contracts and TV remain intact and that no post-release data leaks into 80% bids.
- **Commands and real runtimes** for smoke and comparison; list tests passed and regressions rather than masking failures.
- Remaining decisions with 2–3 defensible options, recommendations, and **provisional** numeric suggestions clearly marked.

**Stop at the review gate.** Do not automatically merge the candidate into the canonical handoff, rebalance every economic payout, change Prestige rules, or embark on a huge stress run. The designer will choose how strong combination penalties and cult-surprise effects should be after seeing measured outcomes.

### Definition of done

We can see **genuinely poor movies in normal early play**, compatibility has a **sensible premise-driven baseline**, rare poor-fit audience hits are possible but explainable, Star genre **families** and studio **exact-genre** XP remain distinct, the old model remains reproducible, and Claude's report distinguishes **movie quality from movie cost**. All this should be achieved with small, fast, reproducible tests.
