# Entertainment Studio Tycoon — Gate 2.5 Balance Harness Update

**For Claude Code / Opus — implementation request**  
**Reference:** `entertainment_studio_handoff_v9_6.md` (or matching v9.61), the existing `balance-harness/` repository, and `balance-findings.md`.  
**Purpose:** Correct the movie-only harness's first demonstrated balance problems **before** implementing Gate 3 (limited series, TV, streaming). This is work on the existing **testing harness**, **not** a change to the official game design or a request to build the finished game.

## Read this correction first: staff capacity, NOT production crew capacity

The designer clarified our intended rule:

- **Only one main production is worked on at a time in the early game.** Previously released movies may continue earning in the background; that does not mean another active production crew.
- **Every employee currently employed by the studio works on that one production**, contributing to all four meters (Plot, Writing, Filming, Editing), weighted by skill/phase. They earn XP while working.
- The desirable cap is on **total studio employees the player can hire**, **not** a cap on how many hired employees can actively work on a given production.
- **Do not implement:** active-project crew slots, worker assignments, benched staff, per-project staff caps, or diminishing contributions based on worker number. Those would change the agreed GDS-style loop.
- The game begins with **exactly two employed staff**, while the *initial maximum capacity* should follow the familiar GDS-style pattern the designer cited: **4 available employee slots**, later expanding to **6**, then **8** with studio growth. Thus the studio starts at `2 / 4` staffed, **not** at a 2-person maximum. Exact upgrade conditions, costs, and timing remain **OPEN FOR BALANCING**, not locked. Use a configurable 4→6→8 proposed progression for the main experiment; test other schedules only as clearly labelled sensitivity cases.
- A full studio may still train employees. When at capacity, the normal `hire` action must be unavailable or fail cleanly; no bypass via CLI, browser UI, batch agent, or direct API invocation. `staffWorkWeek` should still process **the complete `state.staff` array**.

**Concrete implementation direction:** put `maxStudioStaff` (and, if needed for A/B tests, a capacity schedule) in configurable *experimental* settings. Keep the default proposal simple. Use **4→6→8** as the primary proposed capacity ladder, with **2 employees hired at start**. Run controls such as fixed 4 / fixed 6 / fixed 8 and an **uncapped historical baseline** to isolate the impact; if useful, include one alternate staged ladder in secondary sensitivity tests. The 4/6/8 limits are user-preferred GDS-like framing, but exact level-up timing and unlock cost are still experimental. If implementing studio upgrades, expose an explicit legal upgrade action (or simulate clearly labelled test-only trigger rules); never silently add positions. Track slot occupancy, upgrade expenditures, and upgrade timing. Do not assume Prestige thresholds or prices are designer-approved.

### Code areas to inspect

In the existing repository, inspect (do not assume these are exhaustive):
- `src/core/staff.ts`: `staffWorkWeek`, `hireStaff`, `payroll`, and training.
- `src/core/production.ts`: `productionWeek` and phase timing; preserve one active production.
- `src/core/config.ts` + `config/baseline.json`: configurable capacity and test-only rules.
- `src/core/simulation.ts`, `src/core/types.ts`: legal actions, state, and boundary checks.
- `src/agents/strategies.ts`: agents currently have **strategy-specific hiring cutoffs** (`maxStaff` around 4–5) which are **not** a game-enforced studio capacity. Make every strategy obey the real limit; do not mistake strategy heuristics for a globally enforced rule.
- `tests/`, `src/batch/`, `src/web/`: assertions, diagnostics, reports, and a visible staff/capacity readout where appropriate.

## Gate 2.5 work items

### A. Studio-wide staff limit / headcount inflation (finding F1)

1. Add an authoritative, validated maximum **total headcount** rule, enforced by the simulation engine at the hire action itself. Don't only hide the button.
2. Keep **all** employees contributing to the **one** production. Preserve current XP, four-stat model, studio genre levels, and Star skills unless tests demonstrate a separate bug. Do not nerf growth rates preemptively.
3. Ensure strategies and manual browser play never try illegal hiring endlessly; when full, they can train/research/save or start a project.
4. Run paired-seed comparisons using **initial cap 4 with upgrades to 6 and 8** as the main proposed ladder, against uncapped and fixed-cap controls. Start with **2 / 4 employees**, not a cap of 2. Compare average scores by production index, percentage of 8+ and 9+ scores, money, Prestige, production count, staff development, and whether hiring remains valuable. Include 5/20/50-production careers; early and late results matter.
5. Clearly distinguish **cap at studio level** from former *strategy-only caps*. If the studio grows, unlocking additional positions should be observable and not an invisible production-quality multiplier.

**Acceptance tests:** starting save has **2 employees / 4 capacity**; hiring is legal up to 4 and illegal at 5 before a capacity upgrade; after a legitimate 6-slot upgrade, hiring up to 6 is legal and a 7th is blocked; after an 8-slot upgrade, the 8th is legal and the 9th blocked; **every currently employed staff member contributes** to the one active project each week; no unearned XP at release; no invented per-project crew cap; deterministic replay is preserved.

### B. Fix causally implausible, always-declining weekly viewership (newly identified issue)

The current `src/core/audience.ts` uses a weekly retention multiplier. Under the baseline config, even perfect audience/critic scores produce a multiplier below 1, so excellent movies **always** lose weekly viewers. That conflicts with the locked causal model, where critical buzz helps early weeks and exceptional audience word-of-mouth can grow later weeks, particularly after a modest opening.

1. Modify **only the provisional audience/weekly-legs formula as necessary** so strong reception can increase weekly viewers in some circumstances, while mediocre/bad movies still decline and runs remain finite.
2. Keep the agreed causal structure: opening is driven by awareness (marketing, studio hype, Star Fame, trends, IP fans) and distributor reach; critics influence early buzz; audience scores influence later word of mouth; reviews are **not** rerolled based on sales; money and fans follow actual viewership. No independent RNG for a movie's box office.
3. Respect finite **unique audience reach**; total cumulative viewers cannot exceed the accessible audience, and a release's commercial run eventually ends. The system must not generate perpetual growth, runaway revenue, double-counted reach, or an unearned blockbuster for a movie with tiny reach.
4. Provide a worked week-by-week trace for at least these cases using controlled identical inputs where sensible: (i) high critics + high audience with low initial awareness; (ii) high hype + bad reviews; (iii) critics high/audience low; (iv) critics low/audience high; (v) excellent movie with tiny distribution reach. Explain revenue, fans, and trust consequences through the same causal chain.
5. Ensure on-screen feedback statements describe **actual results** (e.g. don't say "viewers are tuning in" if weekly viewers are falling), and update the diagnostics as needed.

**Acceptance tests:** at least one legitimate high-rated scenario has later weekly viewers exceeding an earlier week; poor word-of-mouth decays; reach and finite-run invariants hold; same seed+settings produces identical results; initial Fame/marketing still do **not** directly change review scores.

### C. Retest Prestige repeat scope (finding F4)

The harness currently uses an experimental `perIP` milestone setting, which may make sequels and seasons unexpectedly unattractive. The designer's intention is that **Prestige recognizes the caliber of each production**, not just the first good project from a franchise.

1. Test at least three configurations against the same seed bank: existing **per-IP**, **per-release qualifying production achievements**, and **hybrid** (quality/review achievements per release; singular studio-career firsts once; cumulative IP-commercial milestones once when crossed).
2. Do **not** award Prestige once per week/episode merely for airing or working. A new release/season must actually qualify. Avoid awarding the same achievement multiple times within a single release.
3. Compare franchise strategy with balanced and new-IP strategies, including Prestige per production, total cash, IP fans, and attempted Prestige farming with low-cost repeats.
4. Recommend the rule that best matches the design but mark this as a proposed tuning/ledger amendment **pending designer approval**. Document exact milestone types and scopes instead of leaving vague `repeatScope` ambiguity.

**Acceptance tests:** each milestone fires at most once per applicable scope; a qualifying sequel can receive per-release achievement credit under that variant; non-qualifying repeats receive nothing; seed replay is exact.

### D. Retest weak self-funding without automatically buffing it (finding F3)

Self-funding is intentionally unattractive at the beginning because it has limited reach; good distributor relationships and distributor financing matter. Do not change that design principle because a naive self-funder agent loses.

1. Preserve the self-fund reach disadvantage. Add/compare a **selective** self-funding strategy that chooses it only when expected economics based on **player-visible** information justify it (not an always-self-fund policy); otherwise accept an offer.
2. Retest with the corrected audience model and chosen staff-cap experiments. Report whether self-funding is *ever* a rational tactical choice, not whether it beats every distributor-funded strategy for an entire career.
3. Prevent agents from reading hidden combo grades, future results, or secret RNG state.
4. If self-funding is still strictly dominated, propose a specific smallest adjustment **for approval**, not an automatic ruleset change. Distinguish an intended niche option from a genuine dead button.

### E. First-production cash windfall (finding F6)

The first production is **supposed** to be mediocre using the initial two employees, but not automatically a financial jackpot. Initial cash, gross-per-viewer, salaries, base cost, distributor offers, and payroll remain **provisional assumptions**.

1. Recalculate first-release results after A–D, without assuming $40K starting cash or the existing sales multiplier is final.
2. Compare a few clearly labeled starting-economy scenarios with paired seeds. Report starting cash, actual costs, distributor advance, surplus retained, gross, studio take, payroll, net cash at release/end of run, and whether the next project is affordable.
3. **Do not tune early profit by accidentally making the game unwinnable**. Verify the starter can finish the tutorial film, including casting the free Level-0 Star fallback if no regular audition is affordable.
4. Recommend a reasonable early economic range, with explicit uncertainty, not a silent permanent rebalance.

### F. Preserve already-working findings

Do **not** unnecessarily break these observed results:
- Deliberately pocketing advances and producing cheap duds is **allowed but inefficient** (F2). The studio keeps 100% of unused financing on completion, with trust consequences from outcomes.
- Star Fame drives **awareness/viewership**, **not ratings** (F5).
- Distributor trust and offers depend on actual delivery/outcomes, not independent random rolls (F7).
- High reviews with weak commercial reach have an explicable cause rather than disconnected RNG (F8).
- Advancement: employee XP during production; Studio Prestige from milestones; Money from commercial revenue. IP fans persist within an IP; studio-wide advertising supplies temporary hype, not studio-wide fans.
- At the 40% milestone, **validate affordability before displaying audition cards** and insert a free Level-0 Star if nobody is affordable. Include a $0 marketing option at 80%. No permanent bankruptcy/fail state.

## Required analysis and comparison method

- Use the **existing TypeScript harness**, existing seedable RNG, existing tests and CLI/web modes. No rewrite, new game engine, animation system, or unrelated feature expansion.
- Run baseline **unchanged** before experiments and record its config hash, ruleset identifier, exact commands, seed list and median/quantile metrics.
- Add parameters to `config/candidate.json` or documented experiment files; preserve `config/baseline.json` as a known comparison (unless a technically necessary new optional config field is added; document this explicitly).
- Make runs **paired** (same seeds and strategies) and report effect sizes, not only one cherry-picked career. Start with hundreds of seeds; expand to thousands after the implementation is stable.
- Compare the staff capacity alternatives **separately** from word-of-mouth and Prestige changes, then perform a combined candidate run so we know which change caused which effect.
- Test short (5), medium (20), and longer (50) movie careers. Include a few human-readable complete five-film traces.
- Run typecheck, automated tests, regression diagnostics, replay checks, and production of browser bundle. Do not claim tests passed unless actually executed.
- If the harness UI exists, give it a small readable staff occupancy indicator (`employees / max employees`) and a way to inspect the same reports. **No polishing or redesign** of the interface.

## Deliverables (required)

1. **Working updated harness** (source, configs, tests; zipped only if necessary for transfer).
2. **`docs/gate-2-5-findings.md`**: before/after table for A–E, paired-seed methodology, assumptions and limitations, causal explanations, and your recommendation for each item.
3. **`docs/gate-2-5-open-decisions.md`**: only decisions that genuinely require the designer's approval. Separate **LOCKED DESIGN**, **TEST ASSUMPTION**, **RECOMMENDATION**, and **OPEN** clearly. Do not re-open settled questions such as one production / whole staff working, IP-level fans, and complete surplus retention.
4. Updated `docs/assumptions-register.md`, README commands, tests, and generated reports. Note if any prior diagnostic thresholds no longer fit and justify changes.
5. Concise final summary: tests actually run/passed, number of career seeds, any broken invariants, most important findings, and **exactly what approval you need next**.

## Stop / approval boundary

This is a **Gate 2.5 movie-system iteration**, not authorization to begin Gate 3 or to change the master design handoff. When complete, **stop and report results**. The designer will decide whether to accept the staff-cap progression, updated audience curve, Prestige scope, and early-money values before extending the simulator to limited series, episodic TV or streaming.

**Priority if time or context is limited:** (1) enforce studio-wide headcount cap correctly, (2) fix the word-of-mouth causal contradiction, (3) retest franchise Prestige, (4) compare results and document open decisions. Partial work with verified tests and a clear report is preferred over unsupported claims of completion.
