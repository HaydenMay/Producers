# Entertainment Studio Tycoon — Gate 3 Implementation Handoff

**Task:** Extend the existing, working **Entertainment Studio Tycoon balance harness** to simulate limited series, renewable TV, and studio-owned streaming. This is a **testing harness**, not the final game.

**Source-of-truth order:** (1) locked decisions in `entertainment_studio_handoff_v9_6.md` / equivalent v9.61 handoff; (2) confirmed designer clarifications in this prompt; (3) existing, validated Gate 2.5/2.6 code behavior; (4) explicitly identified **PROVISIONAL TEST ASSUMPTIONS** below. If there is a conflict, preserve the higher-ranked source and disclose it. Do not silently promote a provisional number/formula into the game design.

**Inputs you should have:** The user's latest `balance-harness(1).zip` (the Gate 2.6 version), the v9.6/v9.61 handoff, `gate-2-5-findings.md`, `gate-2-6-findings.md`, and this prompt. If the actual repository is already present, **work in the existing repository**; do not create an unrelated replacement.

**End state:** A deterministic shared rules engine that supports movies, limited series, TV seasons and streaming; interactive testing and multi-seed strategies; reproducible reports that explain where the studio's money, Prestige, staff XP, fans and subscribers come from; tests and a designer-facing findings report. **Stop after Gate 3 and present decisions needing review.** Do not modify the official game handoff to lock your balance choices.

---

## A. Nonnegotiable design boundaries

1. **One primary production at a time.** Every currently available employee contributes to that production. Do **not** add multiple simultaneous productions, individual crew assignments, per-project crew caps, or diminishing employee contributions. Studio-wide employee capacity is **4 → 6 → 8 slots**, starting with **exactly two hired staff**; upgrades have provisional cash/Prestige thresholds. A Software Engineer temporarily occupied building streaming is not available to work on the active production, by the existing special-role rule.
2. **Weekly simulation.** TV episodes broadcast one per week after a season finishes; past releases can generate earnings while the studio produces its next project. No player action required every time an episode airs.
3. **Staff XP from actual production work only.** No release/review/episode bonus XP. Studio genre familiarity increases through producing that genre; individual staff do not track genre XP.
4. **Studio Prestige from milestone achievements**, not passive weekly ticks. Separate recurring per-release/season quality milestones from once-per-IP lifetime commercial awards and any one-time career milestones. Do not accidentally multiply Prestige by episode count.
5. **Money from actual commercial earnings / aggregate platform subscribers.** Distributor advance finances project costs but is not counted as sales or subscription revenue. The studio keeps **100% unused advance** when a funded production completes; overspending uses studio cash; distributor takes its fixed royalty share of **traditional-release gross only**. No new budget tier, lending system, layered distributors, or complicated royalty windows.
6. **Causal release results:** staff/Star/genre/combo/trends/era → review scores; awareness/reach/Star Fame/marketing/IP fans → opening; critics then audience word-of-mouth → weekly viewers; viewers → revenue and IP fan changes; actual results → distributor trust. Avoid rolling unrelated rating, sales, fan and trust outcomes independently. Existing movie diffusion/legs behavior stays intact.
7. **Fans belong to an IP**, not the company. Returning seasons, sequels and reboots use established IP fans; spinoffs may inherit a portion; new unrelated IP starts at zero. Backlash hurts its own IP. No studio-wide permanent fan currency. Studio advertisements create temporary, fading **next-release** hype; title marketing at 80% is separate.
8. **Production phases remain** 0–40% concept/writing, 40% audition/one Star, 40–80% filming, 80% player marketing, 80–100% staff editing. Four meters: Plot, Writing, Filming, Editing. Budget tiers remain shelved. Preserve the 4–5-candidate **pre-display affordability validation** and free $0 Level 0 Star if no generated card is affordable; `No Campaign` at $0 always available.
9. **Base Standard Mode has no bankruptcy or hard fail state.** Negative cash allowed; lifeline distributor for cheapest format, and limited actions while in debt. Optional challenge modes with victory/loss conditions are a **Later** design pillar—**do not implement now**.
10. Stars: genre-family skills and level budgets, Fame-based fees, callbacks, and established lead-role recasting consequences persist. Casting a different Star in an unrelated production never penalizes the prior Star. Bad performance can affect Fame/relationships as already modeled.
11. Scores: Audience and Critic are distinct 0–10 outputs, with separate weights; Fame/marketing/viewers/subscriber count must not leak into review quality. Hall of Fame uses the design's average threshold; preserve the current boundary behavior until the user approves changing it, and **report rounding-boundary cases separately**.
12. **Original art, engine selection, named critic portraits, challenge mode UI, multi-production scheduling and finished-game interface are outside Gate 3.** Keep the existing browser debug UI thin.

---

## B. What already works and must not regress

The supplied harness has TypeScript modules under `src/core/`, seeded RNG, shared `createStudio` / `getChoices` / `applyDecision` / `advanceWeek` / `getSnapshot` / `replay` interfaces, a batch/experiment framework, automated strategy agents and a browser interface. Extend these; don't write a separate TV simulator with different economics.

Gate 2.5 introduced studio-wide capacity, diffusion word-of-mouth and hybrid Prestige scopes; Gate 2.6 introduced **optional** critic-generation and audience-era proxies, historical reports, Hall of Fame/9+ counts and upgrade-gate diagnostics. Keep those metrics and the baseline comparison. In Gate 2.6 the expectation features were **off by default**; `combo_B` and `combo_D` are experiments, **not designer-approved official balance**. Do not implicitly enable one as the new canonical configuration. In reports, separate the movie-only control from mixed-format runs. Record the exact config hash, ruleset version, seed bank and calendar time horizon.

The prior reviewer reported passing tests and large deterministic batches. **Rerun relevant commands in your environment**; prior reported success is not proof that your new changes pass.

---

## C. Required playable simulation systems

### C1. Limited series

Implement a distinct `limited_series` format with clear identity: a **self-contained, nonrenewable** series, not just a five-episode renewable show. It shares the four production meters, financing/casting/marketing loop, weekly calendar, IP fans, review scoring, and finite earnings. It is allowed as an early-game format consistent with the handoff's movie + limited-series start.

**PROVISIONAL TEST ASSUMPTION:** model a limited series as one compact fixed-size episode package that airs on a weekly schedule, with a limited tail, rather than as a movie-style instantaneous release. Make episode count, base cost, production duration, reach, per-episode gross and tail configurable. The handoff presently says limited series have a *medium, declining finite run*; if weekly episodes contradict your interpretation, expose alternate pacing as an experiment rather than choosing permanently. The core distinction is **no ordinary Season 2 renewal**. It can still retain an IP identity for later related work if the game design allows it.

Verify a limited series doesn't accidentally become renewable simply because it scores well, and doesn't produce endless royalties after its finite run.

### C2. Renewable television

Implement TV as **one IP with multiple separately produced seasons**. A completed season is scored and released in its own right, and every episode earns during its broadcast week (plus only a finite optional short tail). All preexisting seasons' financial runs may coexist in background with later projects; the player still has **one active production slot**.

- **Renewal:** use the season's average Audience/Critic score. A sufficiently poor season cannot renew (handoff examples: 0–4 blocked, 4–9 renewable, 9–10 Hall of Fame). Treat the exact inclusive 4.0 boundary as a named assumption until resolved. Hall of Fame is not required for renewal.
- **Season length:** selectable order, studio-Prestige-gated max capacity, with illustrative 5 / 10 / 15 / 20 episode ceilings. A major studio can order a long **debut** season; it is **not** gated on first proving the show. Smaller orders remain useful. Episode-cap Prestige thresholds are provisional/configurable; no cash-only bypass.
- **Costs/duration:** unavoidable base cost scales with format and episode count, plus Star casting and optional campaign spending; production time should react to size via a tunable relation. More episodes should create strategic cost/return/cadence differences, not a free money or Prestige multiplier.
- **IP continuity:** same IP fans carry into the next season; Star continuity matters. Recasting an established lead for a later season decreases that Star's relationship; casting someone else in an unrelated project does not.
- **Show-age fatigue:** recurring seasons face growing fatigue; an approved theme twist retains the genre and IP identity while changing the season's theme pairing. Good twist can reduce fatigue; bad twist can damage fans. Use configurable, clearly marked assumption formulas. Do **not** add unrelated show-shakeup systems or paid expansion features.
- **Hiatus:** normal gaps between seasons carry **no penalty**. Extremely long gaps can reduce temporary anticipation/opening excitement, **not** historical reviews or permanent IP fans. Timing thresholds are provisional.
- **Announcements:** ordering/announcing a season can produce one temporary, fading show-specific anticipation boost even while another production is running. Prevent spamming the same season announcement or endlessly resetting hiatus by announcement alone. Distinguish this from studio advertising and the 80% release campaign.
- **Feedback:** explain renewal eligibility, anticipation, fatigue and fan effects. Once scored, old season ratings do not change when new critics arrive.

**IMPORTANT OPEN CONTRACT QUESTION — DO NOT SILENTLY LOCK:** v9.6 *proposes* one distributor signing the whole TV series with later seasons carrying terms, but the exact financing/advance arrangement is open. Run **at least two explicit, documented contract variants** under the same seeds:

- **A / per-season pitch (test baseline):** Each newly ordered season is a new funded production with its own 2–3 offers (fixed advance + royalty) or self-funding. Prior IP fanbase influences offer inputs as a tuning assumption. This follows the fixed-offer movie loop and is easy to audit.
- **B / continuing partner (comparison):** Maintain the initial distributor/royalty relationship across eligible returning seasons; define a new per-season advance by an explicit configurable function, rather than treating the *first* advance as financing infinite future seasons. Allow self-funded comparison only where consistent with that variant; surface any conflict for designer review.

Document the pros/cons with realized economics, player agency and legibility. **Do not declare either approach the official design.** Do not introduce multi-distributor stacking, negotiations, loans or complicated contract windows to solve this.

### C3. Studio streaming service

Implement the already-designed eventual shift from per-release revenue to aggregate subscriptions:

- **Unlock and build:** require configurable **Prestige + cash + qualifying catalog** and a **Software Engineer** who works on the service **in the background**, off the regular production crew during construction. Construction costs cash and takes configurable weeks. It must **not consume the sole production slot**. Engineer becomes available to staff work afterward. Do not build real software/tech trees.
- **Platform finances:** one subscriber balance and **one aggregate weekly subscription-income calculation**, minus platform operating costs. Track gross subscriptions, churn, active subscribers, subscription revenue, operating expense and net contribution transparently. Never create individual-title streaming royalty payments or per-title persistent revenue.
- **Acquisition:** new releases (especially self-funded **Streaming Originals**) create subscriber gains. A catalog on its own does not continuously create new subscribers; no unexplained passive acquisition. Acquisition should be bounded by a configurable reachable market, and be causal to the released title's quality, awareness, platform situation and audience—not independent random success rolls.
- **Retention:** catalog breadth, freshness, quality, diversity and Hall of Fame evergreens slow cancellations. A quiet release schedule creates slow, visible churn. No perpetual, runaway growth from old catalog alone. No fanbase at the studio level.
- **Automatic catalog:** studio-owned traditional releases (movies and each completed TV season) join the platform **only once their commercial run ends**, without manual licensing or rights windows. Older content mainly improves retention; it does not generate renewed release royalties. Do not double-add a season/title or duplicate earnings.
- **Release paths after platform launch:** traditional distribution remains optional with up-front funding and finite box office/airing revenue, then catalog later. **Streaming Original** is fully self-funded, earns **no traditional-release revenue**, debuts on the platform with a larger subscriber-acquisition opportunity, and joins its catalog appropriately. Preserve existing ratings, Stars, fans and Prestige milestones for Originals; don't invent separate 'streamer review scores'.
- **Season release pacing:** for an Original TV series, the handoff's **binge drop** was only a *proposal*, not a locked feature. Keep a simple provisional release pattern that the engine can test, or compare weekly vs binge as a clearly labeled experiment if cheap; do not build a complex scheduler.
- **No automatic win:** platform launch should not make negative cash, inactivity or subscriber churn irrelevant; operating costs and finite market must matter. But Standard Mode still cannot hard-lock or bankrupt the player.

**IMPORTANT ACCOUNTING CHECK:** A traditional release can't count as both continuing traditional income and a subscriber-paying streaming title while its commercial run is still active. Its later catalog contribution is **retention**, not a new separate cash stream. An Original's audience score can affect subscribers, but there are no fabricated box-office grosses or distributor royalties for it.

---

## D. Engineering approach and boundaries

### D1. Extend the existing core, don't fork it

Inspect `src/core/types.ts`, `simulation.ts`, `production.ts`, `economy.ts`, `audience.ts`, `prestige.ts`, `events.ts`, `stars.ts`, `scoring.ts`, `progression.ts`, `src/batch/runner.ts`, strategy policies and the CLI/web clients **before editing**. The current `Format = "movie"` and some `FEATURES_NOT_MODELLED` entries must be generalized carefully. Existing public API consumers and replay format need backwards-compatibility or an explicit documented migration.

Suggested responsibility boundaries (adapt names to actual architecture):

- **`production`**: format-specific input costs, phase progress, 40% and 80% decisions, quality calculation, project completion.
- **`commercialRuns` / `audience`**: weekly TV episode release schedule and movie/series finite commercial runs; shared causal viewer model.
- **`television`**: IP/season state, renewal eligibility, season-order limits, show fatigue, hiatus, anticipation and twists.
- **`streaming`**: platform build job, subscriber acquisition/churn, catalog contribution and operating costs.
- **`economy`**: project and ongoing money ledger; royalties and subscriber money never counted twice.
- **`prestige`**: milestone scope (release/season, IP lifetime, career), identical logic across formats.
- **`batch/report`**: calendar and per-format results, invariants, strategy comparisons.

One event clock: **advanceWeek** processes employment/upkeep, active production, ongoing commercial releases, subscriber changes, build progress and milestones in a documented, deterministic order. Decide the order *once* and test it (especially same-week completion/release/catalog/renewal boundaries). Use per-domain named RNG streams so adding TV events does not silently change movie reviews for the same seed before those events occur.

### D2. Preserve deterministic testing and no secret knowledge

Policies must use information visible to a human player: revealed genre/theme combo grades, available bids, known IP ratings and fans, staff/Star traits, existing calendar, catalog and subscription metrics. No peeking at hidden combo quality or future RNG. Keep replay exact, paired-seed comparisons reliable and outputs bounded. A few transparent provisional formulas beat a complicated unexplainable model.

**New policies:** TV-first, renewal-focused/IP franchise studio, mixed movie/TV, streaming-first pivot, and traditional-distribution holdout, alongside existing balanced, quality-first, repeat-farmer, cheap-duds and self-funder. Don't make all policies mirror one optimal scripted route; preserve contrast. Avoid marking a policy failure as a rules bug without a controlled alternative.

### D3. Explicit assumption register (critical)

Add/update `docs/assumptions-register.md` and config fields for *every* unsettled numeric or contractual choice, especially:

- cost and production weeks of each format/TV episode;
- TV opening reach, per-episode viewership/gross, carry-over word of mouth and short tail;
- limited-series count/pacing;
- renewal threshold boundary;
- season length Prestige unlocks and maximums;
- first-season vs returning-series distributor advances / royalty terms;
- TV fatigue curve, twist effects, hiatus threshold, anticipation decay/announcement cost;
- streaming unlock requirements, engineer build time, subscription fee and weekly cost;
- acquisition, churn, subscription capacity and catalog retention factors;
- weekly Original release model;
- all initial values (including existing first-film economy and milestone payouts).

For each, label **LOCKED behavior**, **TEST ASSUMPTION**, **PROPOSAL**, or **OPEN designer decision**, and briefly explain what test would validate it. Default configs should be runnable without user intervention. Unknown values are *not* a reason to stop development, but they must not be presented as settled rules.

### D4. Keep scope contained

- **No real UI polish, animation, Unity/Godot, plugin services, multiplayer, personal data, monetization, challenge modes, custom difficulties, real streaming rights, investment loans, legal contracts, media generation or new game-end conditions.**
- Do not build named critic personalities now. Reuse Gate 2.6's deterministic generation/era proxies, **off unless configured**.
- No multi-project concurrency in Standard Mode, no staff bench/squad system, no permanent studio fan stat, and no genre XP attached to individual employees.
- Add only the minimum browser controls for project format, season order, series/renewal, route (traditional or Original), platform construction, season announcement and current subscribers.

---

## E. Implementation sequence and validation gates

Implement sequentially, with a runnable test suite after each step. Prefer focused modules and tests over a giant rewrite.

**Gate 3A — formats and TV foundations**

1. Audit the current movie kernel and write a short architecture/change map.
2. Generalize project/release/IP typing to support movies, limited series, TV shows and individual season instances without breaking existing movie replay and seeded metrics.
3. Implement limited series with finite run and guaranteed completion safeguards.
4. Implement TV season orders, production phases, episodes, renewal, show-age fatigue, announcements, hiatus, fan continuity and contract test variants.
5. Add AI strategies, CLI scenario runs and a minimal interface for new formats.
6. Rerun all movie-only tests and snapshots, plus new deterministic TV scenarios.

**Gate 3B — streaming and mixed economy**

7. Implement platform unlock/build job and Software Engineer exclusion/reintegration.
8. Implement subscriber-based aggregate economics, automatic catalog, Originals and churn.
9. Integrate TV + streaming + movie background runs and event ordering in `advanceWeek`.
10. Add strategies, metrics, diagnostics and thin UI/CLI for launch and mixed careers.
11. Run regression, stress, performance and paired-seed experiments; write findings and designer decisions needed.

**If a step reveals a genuinely contradictory LOCKED rule**, stop that narrow implementation area and report the conflict clearly, but keep working on independent sections. For a merely OPEN numeric/mechanical choice, use a marked test assumption and keep moving.

---

## F. Required tests and invariants

At minimum, prove the following with unit/integration and named reproducible seeds:

1. **Old movies unaffected** in a movies-only baseline with new features disabled; canonical replay remains deterministic. A previous config can still be loaded or reports an explicit migration.
2. **One primary production**; TV episode airing and Engineer platform build may continue in background. All eligible hired staff contribute to active production; studio 4 → 6 → 8 cap remains enforced.
3. **Series vs limited-series identity:** limited series cannot renew normally; TV seasons can if eligible. The TV season ordering limit is based on studio Prestige, not historical success of that IP.
4. **Weekly episode accounting:** episode broadcast once on its intended week; no skipped/double-paid weeks, no infinite tail, proper final run completion.
5. **Money ledger:** advance not sales; unused advance transfers once on project completion; royalties cut only eligible traditional gross; Star/campaign expenses charged once; streaming subscription income aggregated once per week; no phantom catalog royalties or double payouts.
6. **Prestige:** quality milestones at most once per qualifying film/season; no award merely because a TV episode aired. IP lifetime thresholds awarded only when crossed and at most once per IP. Extra episodes do not mechanically multiply awards.
7. **Star/ads/ratings causality:** Fame and campaigns influence awareness/viewers not reviews; bad reviews harm later legs; great under-marketed content can grow within reach; trends and existing fans influence openings in explainable ways.
8. **IP fans and relationships:** return seasons inherit fans, flop/backlash harms same IP, re-casting established season lead can damage relationship; casting another actor elsewhere cannot; a legitimate twist affects fatigue/fans without silently changing the original genre.
9. **Hiatus & announcement:** ordinary gaps unpenalized, long waits affect anticipation only, no retroactive ratings/fans loss from hiatus, announce once with fading effect; studio advertising still goes to next release.
10. **Critic changes:** critics of future years affect only *new* scores; old reviews remain immutable.
11. **Streaming build and catalog:** Engineer unavailable to active productions during construction but build progresses concurrently; streaming unavailable before unlock/build; traditionally released titles enter catalog only on finished run, each season only once; Originals don't earn traditional gross and are counted in the service; catalog without releases does not magically acquire new subscribers.
12. **Retention:** zero releases + weak catalog produces churn; higher-quality catalog reduces churn; no negative subscriber counts, NaN money or negative views; capped reachable audience prevents infinite growth.
13. **Financial recovery:** a cash-poor Standard studio can always eventually complete its cheapest available project with a lifeline advance, $0 fallback Star and free campaign; optional extras aren't mandatory. No silent bankruptcy state.
14. **TV financing comparison:** A and B variants remain exact-seed reproducible and disclose who pays what each season. Each route has at least one valid path under normal and debt scenarios.
15. **Negative assertions:** no global fan stat, no job-specific genre XP, no unapproved genre shifts, no unbounded residual payout, no multi-distributor stacking, no random independent box-office outcome roll.
16. **Web UI:** its controls use the exact same `applyDecision` logic and validation as CLI/batch runs; one representative TV career and streaming launch work end to end in the minimal UI.

Retain existing diagnostics and add flags for: STREAMING_INFINITE_GROWTH, SUBSCRIBER_CHURN_SPIRAL, CATALOG_DOUBLE_COUNT, TV_EPISODE_DUPLICATE, TV_PRESTIGE_PER_EPISODE, TV_SEASON_TOO_PROFITABLE, TV_SEASON_TOO_LONG, TV_NO_RENEWAL_PATH, ENGINEER_STUCK, ORIGINAL_EARNS_TRADITIONAL, MIXED_ECONOMY_SOFTLOCK, FORMAT_DOMINANT, and DELAYED_STUDIO_PROGRESSION. Set warning thresholds as **provisional**, with explanations, rather than claiming automatic balance verdicts.

---

## G. Experiment matrix — don't only test movie counts

The existing 50-/100-movie traces correspond to about **15.7 / 31.1 in-game years** in the movies-only kernel. The designer has **not approved a normal campaign length or an end date**. Do not design the whole economy around a 30-year playthrough or assume TV careers will produce at the same cadence. **Always report both in-game years and completed productions/seasons.**

Run in stages (smoke first, then meaningful seeded banks; keep batches realistic to available compute):

1. **First 1–5 productions:** movie-only control vs early limited-series mix; tutorial studio remains two employees and can finish. Track positive/negative cash, first Prestige, first upgrade availability and actual purchases.
2. **Early/mid career (5 / 10 / 15 years):** all-movies, all-TV after unlock, hybrid film/TV, limited-series focus, franchise renewal, streaming push, traditional-only, cheap sequels and budget-dud adversarial cases. Track unlock time, cash, Prestige, active staff, IP fans and quality.
3. **Longer stress horizon (20+ years):** detect runaway money/subscribers, impossible later critics or zero Hall of Fame, fatigue/unending renewals and blocked platform unlocks. Treat this primarily as a **stress test**, not a presumed normal game length.
4. **Paired-seed comparisons:** TV contract A vs B; season-size cost/production cadence choices; streaming acquisition vs churn and catalog effects; existing critic-curve control vs combo_B vs combo_D. Change one dimension at a time. For hard-to-compare branches, acknowledge that subsequent decision/RNG paths diverge while preserving identical seeds and inputs.
5. **Counterfactuals:** high-quality but low-reach limited series; popular long-running show with fatigue; show with bad twist; major TV hit paused for several years; rare Hall of Fame IP; streaming Originals during cash trouble; no release for 2 years after platform launch; catalog of many poor titles versus few great titles.

**Do not rebalance cheap sequels solely because they lead on cash.** Designer philosophy: money operates the studio, **Prestige gates major growth**. Quality studios should have meaningful Prestige/unlock advantages; less prestigious money-focused strategies can still be viable. Preserve the finding that deliberately cheap *bad* productions remain possible but are strategically inefficient. Ensure the Studio can actually use Prestige on meaningful unlocks; present new Gate 3 thresholds as proposals, not settled facts.

**Greatness metrics REQUIRED by designer, across formats:** number of Hall of Fame *productions or seasons* (numerator and denominator, **not episode count**), proportion of careers with zero HoF entries, per-format and per-year-band HoF rate, share scoring average >=9.0 and >9.0, separate Audience/Critic >=9.0, career best and global best release with seed/film/season/year, perfect 10s and high-score distribution, and Prestige source breakdown. Report career milestones in calendar-year windows and release-count windows. Make movie-only results directly comparable to Gate 2.6.

**Streaming diagnostics:** subscribers over time, subscription gross/operating cost/net per week and per year, acquisition vs churn sources, effective catalog retention, time to pay back platform investment (if any), streaming share of studio income, whether the studio can coast indefinitely without releases, and whether a small number of Originals overwhelms every traditional path.

**Design tradeoff tables:** For every major strategy, summarize (a) money, (b) Prestige, (c) time to TV/streaming unlock, (d) number and quality of successful IPs, (e) Hall of Fame rate, (f) last-12-month revenue mix, and (g) solvency / recovery. Explain any surprising result by tracing underlying events, **not just averages**.

---

## H. Outputs and acceptance criteria

Deliver an updated working harness repository / zip with:

- **Runnable headless rules**, CLI batch/compare/replay and thin browser sandbox, with movies + limited + renewable TV + streaming using one core simulation;
- **Editable config** with clear provisional parameters and explicit variants for undecided TV contract terms;
- **Automated tests and stable seed bank**, plus evidence: exact commands run, counts passed, and any failing/skipped cases;
- `docs/gate-3-architecture.md`: modules and state transitions, weekly event ordering and schema changes;
- `docs/gate-3-assumptions.md` (or an expanded central register): all test assumptions and where used;
- `docs/gate-3-findings.md`: results, representative traces, causal explanations, limitations;
- `docs/gate-3-open-decisions.md`: **brief ranked list** of designer calls, recommendations and evidence; distinguish **BLOCKER** from **TUNING**;
- `reports/gate3/` representative CSV/JSON/Markdown reports and fixed-seed replay cases; keep bulk generated data compact rather than filling the archive with giant files;
- a README update with command lines for running one mixed career, a TV-only career, a streaming launch, a 100-seed batch and a TV-financing A/B comparison.

**Explicit checkpoints:** At end of Gate 3A, report playable TV/limited simulations and passing regression tests. At end of Gate 3B, report complete streaming integration. **Do not claim Gate 3 complete if TV or streaming is missing.** Where design choices remain open, deliver both the tested assumption and the decision request. Avoid changing official `v9.6` / `v9.61` design files without the designer's approval.

**Success means:** We can run an entire mixed-format studio career and explain why each movie/season scored as it did, why viewers and subscribers rose or fell, how the studio made or lost cash, which IPs built fans, how workers progressed, and when Prestige unlocked TV and streaming. No final engine or art decisions are needed.

---

## I. Context to preserve for later, NOT implement

The designer wants a replayable experience with **alternate studio starts, modifiers, stakes, and optional explicit victory/loss conditions**. Some challenge modes may include bankruptcy, but **Standard Mode's no-bankruptcy rule is unchanged**. This is deliberately **Later**, not part of Gate 3. Keep the harness configurable so future variants can be tested, but do not build a challenge-system UI or endgame framework now.

Likewise, **final career length is undecided**. Compare results across calendar years; don't make 25–30 years the mandatory game target or tune new critics to it exclusively.

---

## J. Message to the designer when done

Please finish with a compact factual summary:

1. What was added and what remains unimplemented;
2. Actual test counts/seed runs/zero-or-nonzero invariant failures, with commands;
3. Three to six biggest findings, including any unintended interaction of TV and streaming with the movie economy;
4. **Your recommendation** on TV per-season financing A/B and limited vs renewable show distinction;
5. Which remaining decisions **require the designer** versus which are just numeric tuning;
6. Links/paths to the updated zip, findings, reports and assumption register.

**Do not auto-lock balance settings or revise the game design based only on synthetic results.** The designer and I will review the findings together before the next gate.
