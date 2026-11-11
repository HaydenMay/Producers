# Entertainment Studio Tycoon — Gate 3 Follow-up: Staff Firing & Organic TV Longevity

**To:** Claude / the coding agent working in the existing `balance-harness` repository  
**Baseline:** Existing, tested Gate 3 movie + limited series + renewable TV + streaming harness; game design handoff v9.6/v9.61 and Gate 3 findings.  
**Task:** Implement and stress-test the narrow changes below. **This is a harness update, not approval to begin the finished game or select an engine.**

## 0. First, verify the workspace

Read the latest design handoff, `gate-3-findings.md`, `gate-3-open-decisions.md`, the assumptions register, and the current simulation/tests. Identify the exact code paths that implement hiring/capacity, employee payroll, streaming-engineer assignment, season renewal, show-age quality fatigue, IP fans, opening viewership, episode-by-episode word of mouth, and seeded events. Reuse them instead of creating parallel systems. Run the current tests and capture the baseline before changes.

**Status discipline:** `LOCKED` below means the designer agreed to that rule; `EXPERIMENT` means implement behind a configuration toggle and report results, not a newly ratified game mechanic; `OPEN` means do not silently decide for the game's master design.

## 1. Decisions to preserve

### LOCKED — Employees can be fired

Players may dismiss employees to free studio staff capacity. This must allow a studio with all eight slots occupied to dismiss someone and hire a Software Engineer for streaming. Keep the existing **total studio capacity progression of 4 → 6 → 8 slots, starting with two employees**. The studio runs **one main production at a time** and **all available hired production employees contribute to it**; do not invent a separate active-crew cap or diminish their contributions merely because they're staff members 5–8. The Software Engineer may be busy building streaming in the background and off normal production, as currently designed.

- Add a clear, deterministic firing action usable by both automated policies and the minimal interactive harness.
- It must free exactly one occupied slot, stop future payroll, stop production contributions and XP, and preserve the historical record of the employee rather than corrupting earlier production results.
- Firing while someone is actively on a production or building the streaming platform needs a coherent safe rule. **Provisional harness default:** only offer dismissal between productions, and prevent dismissal of the actively assigned streaming builder while the build is underway. Document this as a UX/implementation assumption, not a locked global rule.
- Do not invent severance, morale penalties, relationship damage, or employee transfer systems. If needed to protect an existing invariant, expose the smallest configurable rule and identify it as OPEN.
- The engine must still avoid soft-locking a struggling studio; firing must not bypass existing mandatory casting or marketing fallback safeguards.
- Add explicit tests for full-capacity → fire → hire engineer → build platform, payroll cutoff, capacity enforcement, inability to fire unavailable employees twice, and deterministic replays.

### LOCKED — No hard cap on TV seasons

The designer prefers **organic continuation**, NOT an arbitrary maximum of 8, 12, or 16 seasons. A strong long-running show should be able to keep going, even after Season 20, if it continues satisfying existing renewal eligibility and the studio can support it. Players may choose not to renew a show; we do not require a new Final Season feature.

- Preserve the current review-based renewal boundary (average >= 4.0 under the test assumptions) unless directly required for a documented experiment.
- Do **not** write `if seasonNumber > X, forceCancel` or equivalent.
- It is fine if weak long-running shows become commercially unattractive and most sensible automated strategies stop renewing; that should be the result of game systems and decisions, not a hidden cap.
- Replace/adjust the `TV_SEASON_TOO_LONG` diagnostic so it reports an *interesting long-running show* or a *financially irrational renewal*, not a rule violation merely for exceeding a season count.

### LOCKED — Outcomes remain causally connected

No independently rolled final Audience/Critic ratings, box office, viewer totals, fan changes, Prestige or distributor trust. Continue to trace: production meters and combo → reviews → opening reach/hype → early critical buzz/late word of mouth → weekly viewers → sales/fans/trust; award Prestige only on milestones. Any randomness must affect a **specific upstream cause**, be reproducible from a seed, and appear in the trace.

## 2. EXPERIMENT — Older TV shows gradually lose some viewer enthusiasm

The goal is for the **average long-running show's audience arc** to build, crest, and often gradually fade, while allowing exceptions. The graphic previously discussed was conceptual, not measured data. **Do not force a scripted bell curve**, a specific peak season, or guaranteed decline every season.

The existing harness already has:
- show-age **quality/review fatigue**, currently capped at a provisional 35%; 
- episode viewership response to reviews and word of mouth;
- hiatus anticipation penalties;
- persistent IP fans and season announcement hype.

It does **not yet clearly model a separate effect where viewers grow less excited about returning for another season even when reviews remain decent**. Introduce a **modest, configurable returning-viewer / season-opening interest fatigue** that can make older shows harder to market, without permanently deleting IP fans or rewriting past reviews. It should apply to the appropriate opening/returning-audience input, **not as a second arbitrary reduction to final ratings or sales**.

**Design constraints:**
- A brilliant season, strong Star, favorable trend, good theme twist, marketing and positive word of mouth must be able to offset the penalty.
- The age effect may grow with seasons or accumulated episode exposure; assess the interaction with 5/10/15/20-episode orders. If comparing models, keep the choice marked experimental. Avoid giving a 20-episode order a nonsensical hidden punishment without explaining why.
- Avoid double punishment: review fatigue already reduces scores and therefore viewers. Show the marginal impact of audience fatigue separately.
- Distinguish *IP fans* (longer-lived loyalty) from *temporary anticipation and returning-viewer enthusiasm*. Do not automatically erase an IP's fan ledger just because a show reaches Season 10.
- Keep normal hiatuses harmless and long-hiatus rules separate. Reuse the existing announcement system; don't add a complex marketing minigame.
- All adjustment coefficients, onset thresholds, and floors belong in the assumptions config, defaulting to **off** until the comparison is reviewed.

**Required same-seed experiments:**

A. Existing show-age review fatigue only (Gate 3 control).  
B. Control + **mild returning-viewer fatigue**.  
C. Mild returning-viewer fatigue + **reduced review fatigue** (to test whether swapping some of the penalty from review quality into viewer interest produces a fairer, more natural result).  
D. Optional sensitivity variant (stronger returning-viewer fatigue), only if B/C do not reveal the tradeoff.

In each variant, compare short and long season orders, successful and mediocre shows, and a deliberately stubborn renewal strategy. **Do not silently replace the current 35% cap or declare a winner.**

## 3. EXPERIMENT — Occasional explainable creative breakthroughs

The designer wants the possibility of an exceptional **Season 7 comeback** after several weaker seasons. The game should allow improvement **through player choices alone** (staff skills, casting, good theme twists and spending), with occasional exciting production events as an optional extra.

Prototype a rare, **seeded, inspectable** positive event that occurs **during production** and adds a **bounded bonus to one or more of Plot, Writing, Filming or Editing**, such as:

> **Creative Breakthrough!** The writing team finds a great direction for the new season. **+N Writing points**.

Or an equally grounded filming/acting/editing event. Such bonuses feed the **ordinary** review formula and subsequent commercial chain; never directly grant `+1.5 Audience`, `+50,000 viewers`, `+Prestige`, a guaranteed Hall of Fame, or fixed season-7 success. Events need not be unique to TV unless the existing event architecture makes TV-specific handling simpler.

**Implementation constraints:**
- Probability, eligible stage, magnitude, eligibility conditions and per-production event cap configurable. Default **off** until reviewed.
- Avoid repeated farming or stacking events into guaranteed 10/10 productions. Prefer one meaningful event at most per production in the first prototype.
- Log event type, source, week/phase, RNG seed/draw (as feasible), meter delta, and subsequent causal effects.
- Compare at least an event-off control against a rare-event variant using identical seeds.
- Add at least one **reproducible** example of a late-season turnaround. It can arise via a good theme twist + staff/Star improvement, with or without the event; **do not script the result or rig the chance**. If no natural example appears in the sample, report that instead of constructing a fake success.
- A comeback must not require losing all previously accumulated fans first, and it must not erase a previous poor season's historical scores.

## 4. Measure the *feel*, not only whether tests pass

For each scenario/variant, report by **season number** (1–3, 4–6, 7–10, 11–15, 16+) and by in-game year where useful:

- premiere viewers, total unique season viewers, weekly/episode viewership trajectory, return rate, and how close the show is to its effective reach;
- Audience and Critic scores, their unrounded average, Hall of Fame counts and rate, frequency of >=9.0, and the best/worst seasons with reproducible seeds;
- IP fans at the start and end of each season, anticipation, viewership fatigue multiplier and existing review-fatigue multiplier **shown separately**;
- earnings/net cash per production week, total season profit or loss, staff/payroll commitments, distributor trust and renewal feasibility;
- percentage of shows still viable/renewable at seasons 5/10/15/20, and how often sensible policies voluntarily stop renewing;
- number and size of breakthroughs, fraction leading to genuine significant comebacks, and whether breakthroughs make Hall of Fame awards too common;
- full-capacity / firing / Software Engineer access and possible financial recovery after dismissing staff.

Please include traces for:
1. A healthy series gradually becoming less appealing and being ended voluntarily;
2. A strong long-running series successfully continuing past Season 15 **without a hard cap**;
3. A genuine Season 7-or-later comeback with transparent causes;
4. An attempted comeback that fails despite spending or a theme twist;
5. A financially struggling eight-person studio that dismisses someone and can recruit its engineer.

These are evidence requests; don't fake a case just to fill a slot. If a requested scenario never emerges from reasonable seeds, say so and investigate why.

## 5. Tests and safeguards

- **Preserve existing movie-only outcomes exactly** when new TV features are disabled. Run stored regression seeds and before/after diffs.
- Keep Gate 2.6 critic variants (including combo_D) **unlocked and configurable**; report TV-fatigue and crit-scaling interactions, but don't change default critic settings or decide a normal career duration.
- Preserve one production at a time, staff XP during production, milestone-only Prestige, 4/6/8 studio capacity, no studio-wide fan total, no independent revenue RNG, and auto-catalog/aggregate-subscriber streaming rules.
- Streaming engineers must use normal staff slots; firing is what makes space, not a new exception to the cap.
- Test Season 20+ as legal if renewal requirements and finances allow it.
- Test that a high-quality late season can recover audience without violating reach caps, and that poor seasons can still fade naturally.
- Test firing across save/replay/seed boundaries, payroll reporting, and workers removed from production contribution and XP.
- Test that new event scores follow the real meter changes and that zero-event configuration reproduces prior traces.
- Test the existing insolvency lifeline, free Level 0 Star pre-display fallback, and $0 marketing campaign after hiring/firing changes.
- Keep challenge/replay modes, named-critic UI, binge drops, spinoffs/reboots, full game visuals, and engine selection **out of scope**.

## 6. Work order and acceptance

1. Baseline verification and small architecture notes.
2. Implement firing and test it first; report what changes about the eight-slot streaming block and payroll/debt spiral.
3. Implement TV viewership-fatigue variants behind flags; run same-seed ablations and multi-season traces.
4. Implement optional production-breakthrough events behind flags; run seeded examples and regression tests.
5. Run the combined stress matrix (e.g. 200–500 seeds per representative policy, 10/15/25-year horizons or equivalent season windows as appropriate). State sample size and runtime; don't pretend a sample is exhaustive.
6. Summarize results in plain language and write `docs/gate-3-followup-findings.md` plus a compact `docs/gate-3-followup-open-decisions.md`. Update `docs/assumptions-register.md`; **do not edit the canonical game-design handoff to mark experimental numbers as locked**.
7. Return updated source/harness (ZIP if this is how the handoff is shared), exact test commands, test counts, invariants, configuration keys, changed files, before/after comparison tables, and reproducible seed examples.

### Completion criteria

A full-capacity studio can fire an employee and hire its streaming engineer; existing movie regressions remain stable; the simulation **allows but never forces** 20+ seasons; later seasons can become less appealing on average **without eliminating extraordinary comebacks**; any breakthrough is reflected in actual quality meters and is reproducible; reports clearly distinguish quality fatigue from viewer fatigue; no undocumented permanent economy/design change is made.

## 7. Decisions to return to the designer (do not silently lock)

- At what season/exposure should returning-viewer fatigue begin, and how strong should it be?
- Should existing review fatigue be kept as-is, reduced, or partly exchanged for audience-disengagement fatigue?
- Are creative-breakthrough events fun and appropriately rare, or are existing player-driven comeback tools sufficient?
- What should employee firing cost, if anything, and exactly when should dismissal be allowed?
- Is any TV-specific Prestige adjustment warranted after we see how these changes affect renewal strategy?

**Do not re-open already settled topics:** no fixed max seasons, no forced scripted decline, no studio-wide fan counter, one production at a time, entire employed team on that production (except allocated streaming engineer), ability to fire employees, and no independent RNG for final performance categories.

**Guiding objective:** A long-running franchise should be able to have an ordinary decline, an embarrassing failure, or a remarkable creative resurgence. Those stories must emerge from the same understandable game systems rather than separate random result rolls.
