# Entertainment Studio Tycoon — Gate 4: Studio-Risk Economy, Late Distribution, and Fast Validation

**Handoff to Claude / coding agent — 2026-11-10**  
**Working input:** `gate3-followup.zip` (`balance-harness/`, branch `gate-3-followup`) and current README.  
**Status:** Designer-authorized **experimental redesign**, not an automatic change to the canonical design handoff. Implement a reversible candidate, compare it against the current Gate 3 follow-up, and **stop for designer review**. Do not silently declare new numeric assumptions or the resulting model final.

## Read this first: the goal

The designer noticed that distributor-funded movies/TV are effectively a cash escalator: even poor projects often leave the studio richer, because the distributor fronts production costs and the studio keeps sales. Simply lowering advances can produce the same risk-free loop at a slower speed. We want **financially meaningful flops and business decisions** without arbitrary randomness or soft-locking a standard-mode save.

**Candidate direction chosen for testing:**
- The **studio finances its own movies, limited series and TV seasons**: base production costs, chosen Stars, payroll and other studio-side costs are its risk.
- **At ~80% production**, the nearly finished project is shown to 2–3 competing distributors. Their offers are for **advertising + distribution**, NOT production advances.
- The distributor's **advertising budget is spent by the distributor**, increases exposure/awareness under the existing causal audience model, and **is never added to studio cash or counted as studio profit**. Distribution reach and the distributor's revenue share are explicit.
- Commissioned **work-for-hire contracts** provide a dependable **no-upfront-cost** recovery route. **Contracts award money (and normal on-the-job staff XP) but zero Studio Prestige**. They do not create studio-owned IP, fans, Hall of Fame entries, or streaming catalog entries.
- Standard mode should be forgiving and recoverable, not guaranteed profitable. A bad studio can go backward financially; a good one can recover; playing safe with contracts should not be the most lucrative empire-building strategy.
- The studio continues to own its original IP. Streaming Originals remain studio-funded and bypass distributors, with their value arising from the existing aggregate subscriber system.

**Do NOT:** bring back Small/Medium/Large budget tiers, pre-production distributor cash advances in the *candidate* mode, mandatory debt/loans, multiple parallel productions, independent random final profit or rating rolls, forced season caps, studio-wide fan counters, or any changes to the core movie scoring/Prestige rules outside this scope. Avoid introducing new choices merely for complexity.

## 1. Preserve the existing harness before making changes

Current inspected code in the uploaded archive:
- `src/core/simulation.ts` currently handles planning → pre-production `pendingOffers` → offer choice → production, and 40% casting / 80% marketing.
- `src/core/distribution.ts` currently generates **advances** and royalty offers based on idea heat, trust, etc.; it has the lifeline advance.
- `src/core/economy.ts` implements `unspentAdvance`, surplus transfers and advance repayment on cancellation.
- `src/core/production.ts` pays base cost at start, Star at 40%, campaign at 80%, and creates releases with distributor economics.
- `src/core/audience.ts`, `src/core/formats.ts`, `src/core/streaming.ts`, `src/core/staff.ts`, agents, CLI, batch reports, and browser UI depend on that flow.
- `scripts/fu-matrix.ts` already accepts `--variants`, `--seeds`, and `--out`; it currently runs a huge 25-year scenario matrix and postprocessing. It is **not appropriate as the default inner development loop**.

Make a new branch such as `gate-4-economy-experiment`. Keep the former financing mode runnable under an explicit config mode (`legacy_advance` vs `late_distribution` or equivalent), preserve deterministic replay, and keep existing historical regression tests as controls. Do not mutate the canonical design handoff, overwrite old result files, or delete diagnostic code to chase speed. All parameters are experimental.

## 2. Candidate production loop

**Planning (0%):** Player picks original movie, limited series, or new/renewal TV season. Show the **known mandatory base cost** and current spendable studio cash. Studio directly pays base cost from its cash; do not require a distributor to begin. If the studio lacks sufficient cash, it must be able to choose accessible commissioned work instead (see §4). Clear failure messages; do not permit starting an unaffordable production using a hidden advance. Existing employee payroll runs as normal.

**Casting (~40%):** Keep existing audition/callback/fallback mechanics; studio directly pays any Star fee. Audition affordability must use studio cash, not an advance reserve. The $0 Newcomer remains important.

**Distribution meeting (~80%):** Replace the traditional studio-funded marketing purchase with **2–3 fixed bids** that each clearly show (a) distributor name, (b) funded advertising spend, (c) reach / likely access to audiences, (d) distributor percentage of earned revenue, and (e) short reasons for the offer. One chosen distributor; no negotiating, stacking, or asking three networks for money. Do not deposit funded advertising cash to the studio ledger. Show the estimated production investment at risk so far. The final Editing phase remains unfinished; the 80% offer can infer a rough preview from the *visible work so far*, Star, known show history, trends, and trust, but **must not read future finalized review scores or leak hidden combo grades to player-facing UI**. Generating different offers should be seeded and replayable.

**Reach vs advertising:** Distributors provide distribution access (ceiling/reach) and advertising (how much of that audience hears about the release). Avoid double-counting advertising and making every offer saturate its reach cap. Prove that more advertising can substantially alter openings but cannot magically guarantee strong overall sales after bad reception. Marketing affects awareness, not intrinsic quality/review score. For now, **do not also stack an independent paid studio marketing purchase at 80%** in candidate mode; that would obscure the test. Preserve unrelated *studio-wide buzz* if compatible; make the difference clear.

**Fallback:** If the player rejects all offers or none qualify, allow a low-reach **self-distribution** route without upfront promotion from a distributor; it is not a source of free money, and its exact economics must be shown. Use existing limited self-fund reach as a starting test assumption. Also allow a strong studio to prefer self-distribution where financially rational. Do **not** preserve the old advance-funded lifeline in candidate mode—contracts take over recovery.

**Release:** Score exactly through the existing causal pipeline. Studio earnings = genuine studio share of audience-driven revenue; studio net must account for studio production expenses, payroll during the production, and attributable upkeep. Distributor's advertising spend is its own cost for partner ROI and trust calculations, not a studio revenue item. When a movie flops, both parties can have a bad outcome, but their losses are **not interchangeable**.

**TV and limited series:** Apply the same late-distributor principle. For a returning season, offer a fresh distribution meeting (the earlier recommended per-season bid variant A). Current IP fans, season history and aging may inform offers. A TV broadcaster should fund promotion / distribution, not production, in this candidate. Keep weekly episode earnings, no season cap, and separate show/viewer fatigue experiments intact. If the economic handling of a series must differ, record it as an explicit OPEN designer call, not a hidden exception.

**Streaming:** Existing Originals require a live platform and are studio-funded; they should not unexpectedly receive distributor bids. Nonexclusive/traditional productions should continue entering the studio-owned catalog after the usual release run, per the existing rules. Watch for accidental double-payments during this transition.

**Cancellation:** No advance to repay in candidate mode, but money already invested is sunk. Do not refund base cost or Star fee. Avoid accidentally applying the legacy `canCancel`/`cancelRepay` assumptions.

## 3. Bids and accounting: make financial risk legible

Create deterministic bid formulas based on **plausible information available at 80%** (previewed quality indicators, audience appeal, trends, distributor genre preference/reach, trust, existing IP). Track **ad budget** separately from **reach**, and both separately from the **revenue cut**. Use explainable bidder behavior, not perfect knowledge of final sales. Trust should consider distributor return relative to **its ad/distribution spend** (the old `distributorTake / advance` ROI is no longer relevant).

Maintain auditable per-release accounting with at least:
- Studio-paid base + Star + any other direct expenses, payroll and allocated upkeep during production, studio gross share of sales, studio **all-in net**, and peak cash drawn down.
- Distributor ad spend, distributor income, distributor ROI, and trust movement.
- Total audience gross / unique viewers / sales trajectory and scores.
- Distinguish *studio cash flow* from *project gross*, and distinguish the all-in net from the old direct-only `net` metric.
- Keep distribution marketing spend out of studio cash, assets and revenue. No positive cash on a distribution contract signing.

Include a simple three-case worked trace: weak box office / average / hit with the *same* studio-funded production cost; compare two distributor offers and self-distribution. No fabricated guaranteed profit scenarios. If old revenue/reach coefficients make nearly all candidate films profitable, **say so**, then run a small sensitivity comparison rather than cosmetically forcing losses.

## 4. Commissioned work: reliable zero-upfront route, **zero Prestige**

Implement a small, usable work-for-hire loop using existing Plot / Writing / Filming / Editing skill accumulation, one project at a time, and regular staff XP. Examples: commercial edit, script polish, network pilot or a production-services gig. Choose the smallest implementation that supports these requirements:

- Accessible with zero spendable cash; no expensive Star, project base cost, or marketing. Player can pick it in planning instead of making an original.
- A fixed, **visible payment** or straightforward milestone payment for fulfilled requirements. Payment depends on doing the work, **not** random box office.
- **Absolutely 0 Studio Prestige**; no IP, no IP fans, no named entertainment release, no Hall of Fame, no distributor royalties, no streaming catalog joining. Cannot incidentally earn movie milestones or release-score rewards.
- Staff should learn while working; regular time passes; work competes with original production for capacity (one active production).
- **True zero-cash recovery matters:** pay wages while producing. At $0 (or negative cash), the studio must be able to fulfill a starter contract without payroll causing an unrecoverable spiral. Preferred minimalist option: the client directly covers agreed *contract-period labor expenses* and pays a modest completion fee, separately recorded in ledger (no upfront cash exploit). Or test another transparent no-upfront mechanism with the same recovery property. Don't quietly declare "free" if weekly payroll still bankrupts the studio.
- Offer at least one feasible starter contract for the starting two-employee studio; likewise a recoverable path for a high-headcount studio. Make it impossible to soft-lock by repeatedly rejecting/successfully completing work.
- Deadline/skill requirements can add gameplay, but keep the **first implementation lean**. Do not add a new random reward system, special contract Fame/Prestige, several mini-games, or complex client reputation unless necessary.
- The reward must not let contracts become the best long-run money strategy. Measure **cash per studio week after payroll**, including possible high-headcount farming, and compare against good originals; prevent farming by economics/opportunity cost, not ungrounded hard job limits. We explicitly accept that rich players could choose to do contract work, but earning Prestige requires owned creative projects.

Set simple provisional parameters and document them as test assumptions. Preserve firing, software-engineer, TV and streaming functionality.

## 5. Speed and scope — the user does NOT want 45-minute loops

**Priority is iteration speed.** The existing harness already has useful controls; do not start by rewriting the engine or generating thousands of full histories. Treat performance as a workflow problem first; profile only if a small run is actually slow. Preserve determinism/invariants/replay and avoid risky performance rewrites.

Implement three named development modes using existing CLI/batch facilities or a tiny wrapper:

1. **FAST (`economy:smoke`) — run after each substantial code change:** typecheck / relevant unit tests, 3–5 fixed seeds, 2–3 representative policies, roughly 3–5 game-years, and focused hand-authored edge cases. Only emit short summaries and a few seed traces. Aim for seconds, not minutes; report actual elapsed time, don't promise a fixed wall-clock runtime.
2. **COMPARE (`economy:compare`) — after candidate feature is functional:** ~10–20 paired seeds, 4–6 strategically distinct policies, 10-year horizon. Run the *same seeds* with legacy and candidate rules, plus a few sensitivity changes. Include movie-only, bad-movie factory, quality-first, TV-focused, mixed streaming, and contract-recovery/farming where possible. Output compact summary tables + outlier seeds, no giant per-career dumps unless requested.
3. **GATE (`economy:gate`) — only when specifically asked or necessary to validate a preferred candidate:** ~30–50 paired seeds and 15-year horizon; optionally a few 25-year stress traces. **DO NOT run 200–300 seeds across many variants by default.** Stop after this and ask for designer approval; a 200-seed/25-year matrix is an opt-in stress test, not a required step for every prompt.

A test that fails or reveals a real bug can justify more targeted cases; not a full matrix. Tests may be run in parallel when safe, but avoid CPU oversubscription. Allow seed count/horizon/strategies/verbosity to be overridden. Make reports incrementally writable so losing a session does not lose the findings. Record elapsed times for each mode, peak report sizes if relevant, and point to specific slow operations if observed. Simplify duplicated report generation/giant tracing **only when profiling demonstrates a bottleneck**. No wide refactor for its own sake.

**Test and report these edge cases immediately** (no massive run):
- $0 studio, negative-cash studio, and starter two-staff studio can accept and finish a contract; a financially failing studio can become solvent with repeat work; no automatic Prestige.
- A fully staffed 8/8 studio can fire staff and use its contract earnings to recover or hire an engineer; no deadlock.
- Studio has enough to start base production but cannot afford expensive auditions; $0 Newcomer fallback.
- Movie underperforms: studio all-in loss is possible and correctly tracked; high-quality wide-release movie can earn significantly more.
- At 80%, different distributors yield meaningfully different advertising/reach/royalty trade-offs, with zero advance cash; only genuine available production indicators inform offers.
- Self-distribute if no distributor appears; one distributor chosen at most; replay identical.
- Returning TV season, limited series, streaming Original, catalog transition, firing and cancellation still work.
- Legacy financing results remain **byte-identical** when explicitly selected (to avoid destroying prior research); new candidate is separately tested.

## 6. Metrics to report in plain English

Use a short designer-readable `docs/gate-4-economy-findings.md` with:
- **Time spent** on FAST and COMPARE (and GATE only if run). Commands needed to reproduce, and whether the shorter loop is now practical.
- A one-paragraph verdict: Does this model produce genuine financial risk without breaking standard mode?
- Table by format and score band (e.g. <4, 4–6, 6–8, 8+): number of releases, **fraction losing studio cash all-in**, median studio net, and distribution partner net. Small samples explicitly labelled.
- Career-level: starting/ending cash, cash p10/p50/p90, drawdowns, negative-cash weeks, actual stuck saves, fraction taking contracts, median contract net/week, earnings per week of bad and good strategies, Studio Prestige, TV/streaming unlock accessibility.
- Example traces: $100K-ish investment → ~$25K gross flop (where plausible), ordinary movie, blockbuster; struggling player taking a work-for-hire contract; TV season that is a financial mistake (if the model allows one), plus a good season.
- Whether distributor ad spends actually move opening audiences without saturating reach every time.
- New exploits or regressions, including any cheap dud loopholes, contract farming or inability to start original productions.
- Clearly separate **what was implemented**, **what tests actually ran**, **observations**, and **remaining decisions**. Do not call an unrun test "passed".

## 7. Important constraints and handoff

- Keep genre/theme discovery, cast-and-callbacks, reviews, era logic, trends, IP fans, Prestige awards, no season cap, TV fatigue, employee firing and engineer behavior intact except where the production-economy transition directly requires changes.
- Do not slip in assumptions like "contracts generate audience reputation"; **zero Prestige is a settled designer decision**.
- Don't silently fix TV Prestige pace, viewer-fatigue reach pools, Hall of Fame, severance costs or critic curves in this experiment. Log them as separate open decisions.
- Prefer reversible code, readable TypeScript, tests, and accessible CLI over elegant but large refactors.
- Keep old outputs/replays accessible. If exact old replay compatibility is impractical, explain the compatibility boundary and prove the old configuration's outcomes are untouched.
- Update README with **FAST / COMPARE / GATE** commands at the top; explain that full matrices are *optional*, not a prerequisite to developer progress.
- Make the web UI minimally usable for the candidate where feasible: planning → casting → distributor choice at 80%, and choosing a contract. Do not burn the iteration budget on UI polish.
- Deliver an updated ZIP and commits on an isolated branch, a concise findings report, decisions document, a short runtime report, and targeted seed traces. **Stop at the gate for designer review.**

### Specific questions for the designer at the end

1. Are distributor ad-budget / reach / royalty bids interesting at 80% and do they translate into meaningful income differences?
2. How often do weak/mediocre studio-funded productions lose money **after payroll**, and are the loss magnitudes engaging but survivable?
3. Can a studio at $0 genuinely recover via commissioned work without Prestige, and are contracts appropriately less lucrative than successful original productions?
4. Is the faster validation workflow reducing elapsed time without sacrificing confidence in the important invariants?
5. What is the **smallest next tuning change**, if any, rather than a new round of mechanics?
