# Claude Build Prompt — Entertainment Studio Tycoon: Gate 2.6 (Critic Eras + Great-Film Metrics)

**Purpose:** Continue the **existing** TypeScript balance harness after Gate 2.5. This is a controlled tuning-and-measurement pass, **not** a redesign of the game or a new simulator. Read this alongside the latest master design (v9.6/v9.61), the existing harness README, assumptions register, Gate 2.5 findings, and its tests.

**Authorization:** Implement the experiments, additional diagnostics, and reporting described here in the harness; execute them and present findings. **Do not silently change the official game design, lock numerical values, or begin Gate 3 until the designer has reviewed the findings.** The source-of-truth design remains as agreed.

## 1. Decisions and interpretation you must preserve

The designer and reviewer made these calls after Gate 2.5:

1. **One production at a time. Every hired staff member contributes to that production.** Keep the studio-wide total headcount ladder of **4 → 6 → 8 slots**; a new studio begins with **two hired employees**. There is no separate active-crew limit, benching requirement, or per-employee diminishing-return penalty. Upgrade costs and Prestige gates remain adjustable.
2. **The new word-of-mouth/diffusion legs are the desired direction.** Excellent releases can become sleeper hits, and bad releases collapse after a hype-driven opening. Preserve finite reach and release runs, causal feedback, and the tests that guard those rules.
3. **Hybrid Prestige is the desired direction.** Craft/review/Hall of Fame achievements are evaluated **per qualifying production**; once-only studio career achievements and cumulative commercial milestones follow their distinct scopes. Prestige comes from milestones, **never passive weekly accrual**. Exact numerical awards and unlock thresholds remain provisional.
4. **The cheap-sequel studio being richer is NOT automatically a defect.** The designer explicitly accepts a studio earning more cash from efficient sequels while a studio producing better films earns considerably more Prestige. **Do not nerf sequels, add anti-franchise penalties, force equal strategy earnings, or add a new economy to solve a cash ranking.** Preserve existing fatigue and fans behavior. The important safeguard is that **cash alone cannot bypass Prestige-gated progression**.
5. **The proposed solution for excessively high late-film scores is already in the design:** critics retire and are replaced by a tougher generation; audience expectations rise more gently across entertainment eras. Prefer verifying and tuning these existing mechanisms over nerfing staff XP, Star skills, studio genre learning, or staff capacity.
6. **Scores and commercial outcomes are causally connected**, not independently random draws. Do not alter the Audience/Critic score with Fame, marketing, sales, or distributor popularity. Opening reach/hype affects viewership; reviews affect its subsequent legs.
7. Gate 3 (limited series, TV, streaming) is still outside this task. Do not use the current **movies-only** results to declare the eventual whole-game economy balanced.

**Important:** The current harness config values are TEST ASSUMPTIONS, not approved game-balance values. Clearly distinguish existing locked rules, experimental model choices, and findings.

## 2. First audit what actually exists

Before implementing a replacement model, inspect the current critic and audience-era logic and explain in the report:

- Does the movie kernel already model critic turnover, actual named critic generations, saturation sensitivity, or only an aggregate year-based difficulty penalty?
- Does it separately model a gentler audience expectation change over eras?
- Is the current era bar tied to **in-game calendar time** rather than simply movie number, so strategies producing films at different speeds face comparable world evolution?
- How does a movie's four-meter quality + genre/theme combo produce its raw reviews, and at what point are critic and audience expectations applied?
- Are prior released scores immutable? They must be; changing critic generations never retroactively changes already published review scores.

**Do the smallest faithful implementation required for this harness experiment.** If named critics and retirement are not yet modeled, a deterministic, configurable generation/toughness schedule is acceptable as a **harness proxy**. Label it as a proxy, not the complete character system. When the game later implements named critics, its aggregate effect should match the tested curve. Saturation effects must stay distinct from baseline critic toughness; reviewers should not become arbitrarily biased against an unsaturated genre.

## 3. Implement parameterized, explainable expectation curves

Expose critic and audience expectation parameters as versioned configuration values, with explicit defaults preserving the previous baseline when turned off. Examples of knobs (choose consistent names fitting the repo):

- Critic generation turnover interval or scheduled era transitions.
- Toughness by critic generation / year, optionally approaching a ceiling.
- Audience expectations by entertainment era, increasing **more gently** than critic standards.
- Caps/floors and method for applying expectations before final 0–10 review scores.
- A trace of `raw quality contribution → combo and weakness → critic generation/era adjustment → final critic and audience scores` for a representative release.

The expectation model should be stable and interpretable. Avoid separate per-film outcome RNG. A new generation must be tougher in ways that are predictable from time and announced trends, while strong production quality can still overcome the standard. Avoid a blunt penalty so strong that late Hall of Fame becomes mathematically impossible.

**Do not tune every parameter simultaneously.** Use an unchanged baseline, then isolated critic-only, audience-only, and combined experiments. Within each, compare a small number of mild/moderate/strong settings. Keep the existing staff cap, milestone scope, and diffusion legs constant.

## 4. Add the missing top-end achievement statistics (REQUIRED)

The designer specifically wants to see **how often truly great movies happen**, not merely their mean ratings. These metrics should become permanent, reusable harness report fields.

For **each strategy × config variant × film window** (and in the career report where useful), calculate:

### A. Hall of Fame
- Total count of **individual releases** entering Hall of Fame.
- Percentage of eligible releases earning Hall of Fame, with the release-count denominator printed.
- Median Hall of Fame releases **per career**, and distribution (at least p10/p50/p90; also percent of careers with **zero** Hall of Fame releases).
- Optional but useful: number of **distinct IPs** with at least one Hall of Fame title, reported separately from release counts. A sequel or later season counts as another release if it qualifies; do not collapse a franchise's multiple successful productions into one release.
- Use the game design's actual Hall of Fame criterion (the **average of Audience and Critic scores reaches the Hall of Fame threshold**, currently 9.0/10 in the design). If code differs, **flag the discrepancy instead of silently redefining it**.

### B. Frequency of scores above 9
- Show **both** `>= 9.0` and `> 9.0` for combined average rating, so boundary behavior is unambiguous.
- Also report `Audience >= 9.0` and `Critic >= 9.0` separately, because excellent popularity and excellent critical acclaim are not identical.
- Report counts **and percentages with denominators**, not just counts. Avoid calling a 9.0 rating “above 9” without distinguishing it from strictly greater than 9.
- Include the share scoring **8.0+** for continuity with Gate 2.5, but don't use it as the only top-end metric.

### C. Highest-rated movie
- Show the **highest combined-rated individual movie** in a career and across the tested sample, including: title/IP, strategy, seed, release index, in-game year/era, Audience score, Critic score, combined average, quality meters, and critic generation.
- Also show highest **Audience** and highest **Critic** rating separately if they belong to different movies.
- A single extreme across thousands of movies is a curiosity, not proof of typical behavior: include the **distribution of each career's best movie** (p10/p50/p90 and ideally p99).
- Make the top example reproducible from its seed/config hash. Ties should use an explicit deterministic rule.

### D. When greatness occurs
Break out all of the above at least by **release windows 1–5, 6–20, 21–50, and 51–100** when run lengths permit. Also include **in-game era or years**; film #50 need not mean the same year for every strategy. Preserve the ability to run 5/20/50 tests and add 100-film analysis.

### Suggested summary table (fill from actual runs; these are columns, not expected numbers)

| Strategy | Config | Window | Films (n) | Avg Audience | Avg Critic | Hall of Fame n (%) | Average >=9 n (%) | Average >9 n (%) | Audience >=9 n (%) | Critic >=9 n (%) | Best combined movie | Best-movie median per career | Prestige median |
|---|---|---|---:|---:|---:|---:|---:|---:|---:|---:|---|---:|---:|

Do not let an enormous global table obscure the conclusions. Put a compact summary in the main findings report and provide machine-readable detail (CSV/JSON) for full inspection.

## 5. Controlled experiment plan

Use the **current Gate 2.5 candidate** as one baseline: headcount ladder 4→6→8, diffusion legs, hybrid Prestige. Do not compare against the obsolete Gate 2 rule set as the only reference. Also retain a reference run with era tuning disabled or the current era settings, so we can attribute changes.

Recommended experiment matrix (adapt for runtime, but maintain isolated comparisons):

1. **Current expectation rules** (untouched control).
2. **Critic generations only** — compare mild/moderate/strong turnover/toughness settings.
3. **Audience era expectations only** — compare mild/moderate/strong settings, always gentler in the proposed combined interpretation.
4. **Combined generations + eras** — compare at least two credible combinations, without changing staff/Stars/genre XP.

Run the **same seed bank and same strategy set** across configurations. Include balanced, quality-first, franchise-builder, repeat-farmer, cheap-duds, experimenter, and self-funding policies already in the harness; do not remove existing strategies to make results look better. Sample 50-film and 100-film careers (using enough seeds to show stable distributions), plus 5-film and 20-film sanity runs to detect unintended early-game harm. Report seeds, sample size, configs, build version, elapsed years, and config hashes.

Add **fixed-quality test cases**: replay hypothetical productions with the *same raw four meters*, genre/theme and Star family fit at multiple eras/critic generations. This isolates rising standards from staff leveling, better Stars, larger crews, fatigue, and economic strategy. Report how an identical early-career 8/10-ish production would score in later eras; this is an illustration, not a fixed target.

Do not assume that achieving a target late-game mean is enough. Inspect **Hall of Fame frequency, >=9 occurrence, best-of-career distribution, and skill/Prestige progression** together. We want outstanding movies to remain possible but not routine; the designer has **not specified an exact desired Hall of Fame percentage**, so do not invent one and call it approved.

## 6. Prestige and money: evaluate the right objective

**Do NOT flag the repeat-farmer as overpowered merely because it has the highest cash balance.** The designer considers **Prestige more important than cash for unlocking the empire**. Cash sustains operations; Prestige gates growth. Test that principle rather than forcing currency parity.

Report, for each strategy:
- Median ending **cash** and **Prestige**, plus realistic operating/cash-shortage measures.
- Share of careers reaching each existing **Prestige-gated studio upgrade** and **time/number of releases to unlock**. Do not invent TV/streaming implementation or bypasses just for a report.
- Whether a cash-rich but low-Prestige franchise strategy can buy upgrades it has not unlocked (should be **no**).
- Whether an excellent-production strategy is actually rewarded with better progress, even if it has less cash.
- How critic/era adjustments change Prestige milestone frequency. `PRESTIGE_TOO_FAST` alarms and upgrade thresholds were calibrated for old per-IP totals; label false-positive/outdated warning thresholds separately, **don't silently rework official Prestige rewards/gates**.

Do not adjust sequel fatigue, IP fan multipliers, royalty terms, advance surplus retention, or cash payouts as a hidden side effect of this gate. Self-funding and first-movie revenue remain **open balancing items**, not reasons to expand this specific task. Note money-related caveats and return to them after TV/streaming if appropriate.

## 7. Validation and invariants

Add or update automated tests for:

- Reviewer/generation turnover occurs at intended calendar thresholds and is reproducible from a seed/config.
- More demanding generations affect only **new** ratings; previous release history does not change.
- Same underlying movie quality + same era → same ratings (apart from explicitly allowed deterministic inputs); ad spend, Fame, and gross do not directly affect ratings.
- Audience expectations can evolve independently of critic toughness; critic saturation remains a separate explainable effect.
- A genuinely excellent movie can still score ≥9.0 in late eras; Hall of Fame is **possible**, not mathematically excluded.
- Hall of Fame counts agree with the existing score-based eligibility rule and count releases, not distinct IPs.
- Strict `> 9.0` and inclusive `>= 9.0` metrics differ correctly at exactly 9.0; denominators and zero-release windows are handled safely.
- Highest-movie tracking and tie-breaks are deterministic; all tracked best-movie details correspond to an actual release.
- Existing invariants remain passing: expense ledger, total staff capacity, no extra active production, no negative-cash discretionary spend, viewers within reach, finite revenue, causal word-of-mouth events, Fame absent from scoring, and Prestige only on valid milestones.
- Replaying the same seeds/config yields identical aggregate metrics and the same highest-film references.

If simulations fail a rule or become noticeably slow at 100 films, diagnose and report rather than lowering coverage without disclosure.

## 8. Deliverables

1. **Code changes inside the existing harness**, separated from presentation. Do not build a new simulator or change engines.
2. **Versioned config variants** for each expectation-curve experiment and a registry entry marking new numeric settings as *test assumptions*.
3. **Updated automated tests** and the commands/results proving they passed.
4. **Updated batch report generator** with Hall of Fame counts/rates, >=9 and >9 frequency, strongest movie examples, per-career best-film distributions, and breakout by release window/era. Make the new metrics visible in the browser dashboard if straightforward; prioritize headless results, not UI polish.
5. `docs/gate-2-6-findings.md` summarizing the controlled experiments, including separate sections for **quality inflation**, **Hall of Fame scarcity**, **Prestige progression**, **franchise cash vs growth**, and **limitations**. Each recommendation must say what was measured, on which seed bank, and whether it is a proposed balance value or existing locked rule.
6. Reproducible Markdown + CSV/JSON reports, with exact runnable commands and file paths in the README.
7. **A short designer decision table:** for each promising critic/era combination, show effect on early scores, 50/100-film averages, Hall of Fame rate, 9+ rate, best-film distribution, and milestone/unlock cadence. Recommend a candidate; **do not declare it locked**.

## 9. Stop point and next gate

After producing the evidence, **stop and report to the designer**. Do not independently rebalance cheap sequels, restrict hiring further, or start Gate 3 in the same change.

**The goal is not to make every studio equally rich. The goal is a credible entertainment career in which experienced teams improve, new generations are harder to impress, truly exceptional movies remain special, and Prestige—not excess cash—is the main gate to building a larger empire.**
