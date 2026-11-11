# Entertainment Studio Tycoon — Balance Harness Build Specification

**For:** Claude / coding agent  
**Date:** November 9, 2026  
**Status:** **Approved scope: a disposable-but-reusable simulation/balance tool only.** The full game is **not** approved for implementation.  
**Design source:** `entertainment_studio_handoff_v9_6.md` (read it in full before implementation; it overrides this document on established game rules).  
**Goal:** Build a headless, deterministic and inspectable balance harness, with a minimal interactive browser interface, to simulate many studio careers, compare strategies, find progression/economic exploits, and make evidence-based recommendations **before selecting the actual game engine**.

> **Important distinction:** v9.6 is a *design* document and says “not approved for implementation.” The current instruction explicitly authorizes implementation of **this isolated testing harness**, not production game code, art, assets, engine integration or a final balance pass. Do not change the v9.6 locked design to suit an easier implementation; adapt the harness to the design.

## 0. What success looks like

The owner can give this document and v9.6 to Claude, and Claude can:

1. Implement and run the harness on its own without needing the owner to run scripts or install anything for validation.
2. Start a fresh studio with **two workers**, simulate a production through financing → staff work → casting at 40% → marketing at 80% → release → finite weekly earnings, and move to the next production.
3. Run **one complete interactive career** and **hundreds/thousands of automated careers** using the exact same core rules.
4. Compare sensible and adversarial strategies: quality-first, cheap-dud surplus farming, famous-Star spending, self-funding, experimenting, and sequels/IP loyalty.
5. Produce readable reports that identify *what happened, why, which assumption drove it, and whether the result violates design intent*.
6. Change a config number, rerun the **same seeds**, compare before/after, and determine if a proposed balancing fix worked without changing 12 unrelated parameters.
7. Add TV, limited series, and streaming in separate steps so the whole studio progression can eventually be stress tested. The early-game movie simulator must be working first.

**Do not aim for a polished or fun UI yet.** This is a scientific instrument for a management game. Testable rules, observability and simple iteration matter more than attractive presentation.

---

## 1. Project boundaries

### Build

- A **pure TypeScript simulation core** (no DOM, React, browser APIs, clock/time dependencies, remote services, or live web requests in simulation logic).
- A **Node CLI** for single seeded careers, batch runs, parameter sweeps, invariant checks, and before/after comparisons.
- A **minimal local browser dashboard**, backed by the same simulation core. It needs a manual, step-through decision mode and a batch-results view; tables and simple plots suffice. Prefer Vite + vanilla TypeScript for low overhead (React is acceptable only if it improves maintainability or matches an existing repository).
- JSON-configured balance parameters, named strategy policies, saved seed definitions, machine-readable event logs, JSON/CSV exports, and a human-readable Markdown report.
- Automated unit, integration, property/invariant, and regression tests; a README with exact run commands.

### Do not build

- A final Entertainment Studio Tycoon game, engine project, office scene, character animations, production art, portraits, tutorial scripts, sound, saves/cloud sync, player account, multiplayer, or backend infrastructure.
- A detailed contract simulation, rival studios, loans, legal/rights windows, micro-managed supporting casts, theme parks, soap operas, individual title streaming royalties, or other deferred features.
- A new studio-wide Fans or Reputation currency. **Fans attach to an IP**, Prestige is permanent milestone history, and Hype is temporary.
- Small/Medium/Large preset **budget tiers**. They were shelved. Advances and flexible costs replaced them.
- A permanent design rule merely because Claude chose a provisional number for testing.

### Repo hygiene

- Inspect the provided repository first. If it contains an existing application, put the harness in an isolated `tools/balance-harness/` (or equivalent) without changing production assets. If it's empty, make the harness a standalone repo.
- Keep core and CLI/dashboard in distinct modules, reuse pure functions, use typed interfaces, avoid hidden globals and giant files.
- No paid APIs, runtime LLM calls, online dependencies, or art generation. No game engine selection yet.

---

## 2. Required authority labels

The whole tool should distinguish:

- **LOCKED (v9.6):** game behavior the designer decided. Must match the source.
- **WORKING ASSUMPTION:** a temporary implementation choice needed to get measurable results. Put it in `config/assumptions.json` or clearly named config; document reasoning, sensitivity, and alternatives.
- **OPEN:** design decision still awaiting the owner. Track in `docs/open-decisions.md`; do not pretend a provisional model resolves it.
- **LATER / NOT MODELLED:** parked mechanics, outside current test scope. Report their absence and do not quietly replace them with a guessed game rule.

At startup and in every report, display the **ruleset version**, **config name/hash**, **seed or seed range**, **strategy**, and **features currently modeled**. Never label a guessed value as “official balance.”

**When v9.6 has ambiguities:** choose the smallest, clearly disclosed testing assumption, keep it adjustable, and list it in the report. Ask the owner only for a contradiction that makes a meaningful simulation impossible. Avoid inventing another gameplay subsystem as a workaround.

---

## 3. Architecture and suggested file map

Use these names or a logically equivalent, clean structure:

```text
balance-harness/
  README.md
  package.json
  tsconfig.json
  config/
    baseline.json              # provisional tuning; NOT locked design
    assumptions.json           # choices made to operationalize Open rules
    scenarios.json             # fixed test scenarios
  src/
    core/
      types.ts                 # versioned entities and result types
      rng.ts                   # seeded PRNG + independent named streams
      economy.ts               # production accounting + studio cash
      staff.ts                 # XP, levels, four stats, payroll
      stars.ts                 # families, skill budgets, Fame, relationships
      distribution.ts          # bids, royalties, reach, trust
      production.ts            # phases, quality generation, event flow
      scoring.ts               # Audience/Critic, weak meter, era, combo
      audience.ts              # opening reach, buzz, weekly legs, IP fans
      prestige.ts              # event-driven achievement awards
      progression.ts           # studio genre experience and unlock gates
      tv.ts                    # seasons / episodic release (next phase)
      streaming.ts             # subscribers / churn / catalog (next phase)
      simulation.ts            # state machine and single source of truth
      events.ts                # readable causal event log
    agents/
      strategies.ts            # explicit strategies using visible knowledge
    batch/
      runner.ts                # seed batches and parallel-safe aggregation
      diagnostics.ts           # invariants, exploit/progression detectors
      metrics.ts               # distributions, cohorts, percentiles
      compare.ts               # paired-seed before/after comparisons
    cli/
      main.ts
    web/
      index.html
      main.ts                  # thin UI only, no game rules
      styles.css
  tests/
    unit/
    integration/
    regression/
  reports/                     # generated; no fake result files
  docs/
    assumptions-register.md
    open-decisions.md
    balance-findings.md
```

**API intent:** `createStudio(seed, config)`, `getChoices(state)`, `applyDecision(state, decision)`, `advanceWeek(state)`, `getSnapshot(state)`, `runCareer(seed, strategy, config, options)`, and `runBatch(seeds, strategies, config)`. Exact signatures may change, but there must be **one** rules implementation; neither the CLI nor the browser can have custom scoring or finances.

Simulation should operate on **plain serializable state**. Every state transition emits zero or more events, including relevant financial ledger entries and causal explanations. A seed and an ordered decision log must replay exactly.

**Randomness rules:** seeded PRNG only; no `Math.random()` in the core. Ideally use stable, **named random streams** (trends, talent generation, staff work variance, etc.) so changes to one policy do not completely reshuffle all unrelated exogenous events. A strategy must not gain privileged access to hidden combo grades or future RNG outcomes.

---

## 4. Model the locked mechanics, not independent dice rolls

### A. Starting studio, time and staff

- Begin with **exactly two** permanent staff; enough for a mediocre first movie at typical early assumptions, not a scripted hit.
- Each employee has **Plot, Writing, Filming, Editing** stats. All staff contribute to all four meters, with phase emphasis. **Staff earn XP as they work**, across production weeks; none awarded merely for release or good reviews.
- Staff do **not** have individual genre XP. The **studio** gains a small **per-exact-genre** level/quality bonus over time.
- Payroll and studio overhead are studio cash expenses, **never project costs covered by distributor advances**.
- One production at a time in the early game; completed titles can earn in the background while staff work on the next.
- Weekly time ticks; use in-game time, not real-world timers. Any work variance must have a seed and identifiable cause.
- Assign provisional starting cash, wages, staff stats, XP curves, cost/time units in config (v9.6 leaves these open).

### B. Planning, distributor bids, flexible funding

- Plan **format + genre + theme** and whether it's a **new IP, sequel, season, reboot, or spinoff**; relationship to an IP is an explicit player decision.
- **Two or three fixed distributor offers**: absolute **upfront advance** and **royalty percentage**. Pick **one** or self-fund; no haggling, stacking, loans or fixed budget tier.
- There is an **unavoidable base production cost**, determined by format/episode count. At 40%, Star fee; at 80%, chosen campaign fee. **Spending beyond advance comes from studio cash; no spending cap.**
- Any **unused advance is retained in full** by the studio **at successful completion**. Advances are not sales revenue and must never count toward revenue Prestige milestones.
- A distributor receives its stated royalty share of each week's **gross commercial revenue** during the finite release run. The studio owns all IP regardless of distributor.
- Self-funded traditional releases have **limited reach before the studio owns streaming**; funding with zero royalties is not automatically superior. Post-streaming self-distribution reach is not fully specified—mark any implementation as an assumption.
- **Cancellation** requires repaying the advance and is offered **only when the studio can afford to do so**. Do not call it a loan after project completion.
- Each distributor has its own **trust/relationship** with the studio. Trust reacts to backed productions' **causally explainable outcomes** and influences later offers; one flop should not erase a longstanding partnership. There is no separate global reputation resource.
- A cheap movie with a deliberately poor Star and no marketing that pockets the advance **must remain possible**. The design intent is for it to be less efficient long-term than making decent movies—not to be hard-blocked by hidden fraud prevention.
- **No bankruptcy and no hard fail state.** Studio cash may become negative from studio expenses; while negative it cannot normally hire/train/buy studio-wide ads/self-fund, but can accept offers.
- **Lifeline offer:** at least one bid always covers the **cheapest format's base cost** when needed, even with zero/negative cash, with poor terms. It need not rescue expensive formats.

**Provisional accounting implementation (OPEN, not locked):** reserve distributor funds as `unspentAdvance` on the project; pay mandatory base cost when starting; pay Star/marketing first from that reserve, then spendable studio cash; transfer remaining advance to studio cash **only on completion**. Keep a simple auditable ledger, **not** a complicated player-facing financial system. If a negative-cash edge case conflicts with paid marketing, prefer the free option and record the assumption. Cancellation checks whether remaining project funding plus available studio cash can repay the whole original advance; treat sunk costs as sunk. Explain this treatment in `assumptions-register.md`.

### C. Production phases and Star auditions

- Production: **0–40% writing**, **40–80% filming**, **80–100% editing**. The staff contribute every week; the meters are Plot / Writing / Filming / Editing. Stars contribute to **Filming quality** through fit, not to review scores by Fame.
- At **40%**, generate the normal **4–5 audition candidates**. All have exact visible genre-family skills, Fame and price; a return-cast **callback catalog** contains previously hired Stars at current prices.
- Star **skills are by genre family** (about five or six, exact list open); **themes do not grant Star skill fit**. **Star Level sets a total cross-family skill-point budget**, so even elite Stars cannot master every family; internal generated distributions can be balanced/two-focus/specialist, without public shape labels.
- Star skill growth follows the genre family they work in; Fame changes with their career. **Star price depends on Fame, minus studio Prestige and relationship discounts**, *not* on skill/level directly. A high-skill low-Fame gem may exist but should be rare.
- **Critical affordability rule:** BEFORE audition cards are displayed, compare their actual discounted fees against **unspent project advance + spendable studio cash**. If none is affordable, **replace one candidate in the displayed 4–5 with a $0 Level 0 Newcomer**. This real character can level and build a career; no emergency popup or forced terrible score. Expensive cards may still appear.
- Star relationship **increases** when working together and improving their career. It **decreases** if a project lowers that Star's Fame, or if that Star is recast out of an established role in a **new season or direct sequel of the same IP**. Casting a different Star in unrelated work or rejecting a random audition does **not** hurt them. Reboot penalties remain Open.
- At **80%**, the player chooses a **title-specific marketing campaign**, including a **$0 No campaign option**. Marketing affects opening viewership **only**, never production quality or reviews. Staff automatically continue editing; no CGI/sound-choice system.
- Studio-wide advertising (if represented) is a separate anytime, **temporary and fading** hype boost for the **next release**; never creates permanent studio fans.

### D. Scores, causal audience behavior, Prestige, and IP fans

Enforce this **causal chain**, with traceable contributions:

```text
Staff output + Star genre-family fit + studio exact-genre experience
    + genre/theme combo grades + phase quality + weak-meter penalty
    + era standards / critic saturation
             |
             v
     Audience and Critic scores (0–10, separate weights)
             |
             +----> Critic score -> early review buzz (first weeks)
             +----> Audience score -> later word of mouth / legs
             |
Marketing + studio buzz + Star Fame + distributor reach + trends
    + prior IP fans + franchise status -> opening viewership
             |
             v
  Weekly viewership -> weekly gross -> royalties -> studio Money
             |
             +----> IP fan growth/loss from reception and reach
             +----> distributor trust from actual backed outcome
             +----> qualifying achievement thresholds -> Prestige
```

- **Never** independently roll a review score, a box-office outcome, fan total and trust delta. Randomness may enter **inputs** (candidate generation, trends, modest production variation) but released outcomes are functions of the resulting state.
- **Audience scores** weight Filming/Editing more; **Critic scores** weight Plot/Writing more. Combo ratings have separate Audience/Critic multipliers, first revealed in the combo book after producing the combo. A badly lagging meter penalizes the appropriate score, not uniformly every category. Critic saturation and era expectations matter.
- Scores are **0–10**. Exactly **4.0 is renewable**, exactly **9.0 is Hall of Fame** when using the mean of Audience and Critic scores. The renewal gate applies to TV; extending it to movie sequels is *not* locked.
- **High dual scores usually mean strong legs and a healthy release.** A low-gross/high-review title must have a concrete explanation such as small distribution reach—not a random “commercial flop” roll.
- A heavily marketed low-score film can earn a strong opening but should suffer poor legs. Critic effects earlier; audience effects later. Commercial releases decline to **zero** by the end of their run.
- IP fans **belong to the IP**: seasons/sequels/reboots inherit all, spinoffs inherit a fraction, new IP starts with zero. Strong exposure/reception should grow IP fans; hyped duds may lose fans. No studio-wide fan pool.
- **Prestige** is **permanent, cumulative and milestone-driven only** (production caliber, reviews, Hall of Fame, later revenue/viewership achievements); not paid per week, per episode, or for finishing any release. Keep **all milestone thresholds, amounts, repetition scope and cross-format rules configurable**. Never double-pay a milestone on re-evaluation. Do not allow a 20-episode season to yield four times the Prestige of a 5-episode season merely because it airs four times longer.
- Distributor trust reflects a project's actual outcome. It is okay for a critically acclaimed but narrow-release film to grow Prestige/fans and to earn less than a wide-release hit **if reach explains it**. Explain any trust change with recorded factors, not a mystery roll.

**Use tunable formulas, not arbitrary independent output draws.** The first implementation may use a simple normalized additive/multiplicative model, but make each factor's contribution auditable and clamp values. Add clear notes where production point scale, revenue units, or the fame-viewership conversion are provisional.

### E. Progression, formats, TV and streaming (second implementation milestone)

Model these after movies pass the acceptance suite; do not pretend they are already present in early results.

- At opening: only movies + early limited series; **TV series** and later **streaming** unlock through studio capability / **Money + Prestige**, with provisional gates recorded in config. The precise first-hour settings are Open.
- Limited series and normal recurring TV shows must have distinct placeholder economics and be tagged as WORKING ASSUMPTION where v9.6 does not yet decide the distinction. Don't silently make an irreversible design call.
- TV: one episode airs per week; revenue happens in the background while a later production is underway. Larger orders available when **studio Prestige** rises (example **5/10/15/20 episode capacity**, illustrative—not final). Costs and production time must scale sensibly with episode count, without automatically granting Prestige for each aired episode.
- Renewability uses combined reviews; ordinary gaps between seasons cause no punishment, **very long** gaps lower anticipation (not scores or loyal fans); one season-order announcement creates temporary show-specific anticipation. Genre fixed; quality-dependent twist themes may relieve show-age fatigue at a risk.
- The unresolved TV distributor terms (e.g. whether re-pitch each season) must be an explicit config assumption and open decision, not mislabeled Locked.
- Streaming unlock: Prestige + money + catalog + Software Engineer. The engineer builds the platform **in the background** but stops contributing to regular production while doing so.
- Traditional releases finish their finite run and join the streaming catalog automatically (each finished TV season enters separately). **Subscription income = aggregate subscribers**, not residual per-title royalties or views. New releases acquire subscribers; catalog retains them; Hall of Fame improves retention; inactivity causes visible churn; service has operating costs.
- After streaming, retain both paths: a traditional release still produces ordinary revenue before joining the catalog; a self-funded **Streaming Original** skips traditional commercial royalties, boosts subscribers more directly and supports retention. Exact growth/churn is configurable.
- No passive subscriber growth from the catalog alone. No ongoing weekly individual streaming royalties.
- There is no requirement for an elaborate streaming UI in this harness; snapshots and aggregate model tests suffice.

---

## 5. Strategies and automated testing

Implement named policies that act using **information actually visible to a player at each decision**, not hidden future results:

| Policy | Behavior under test |
|---|---|
| **Balanced** | Mixes financing, sensible casting/marketing and reinvestment |
| **Quality First** | Prioritizes production quality and durable studio development |
| **Surplus Farmer / Cheap Duds** | Takes large advances, casts cheaply, avoids marketing, pockets surplus |
| **Famous-Star Blockbuster** | Spends heavily on Fame, marketing, and wide reach |
| **Self-Funder** | Avoids royalties but accepts lower reach |
| **Experimenter** | Tries new genre/theme combinations; learns revealed grades |
| **Franchise Builder** | Reuses successful IPs, returning Stars, seasons/sequels and fans |
| **Streaming Pivot** (late game) | Tests subscriber acquisition, catalog retention and operating costs |

Have a simple **manual mode**: show current choices, choose a plan, distributor, Star and campaign, advance weeks, inspect outcome. Skip tutorial/dialogue; this is not a playable game demo.

Use a reasonable number of releases per career, with `--productions` / `--years` configurable. Include **1, 5, 20 and 50-production windows**, plus time-based comparisons so lengthy TV seasons cannot be unfairly rewarded or penalized by counting just production starts.

### Batch analysis

For each strategy and seed set record, at minimum:

- **Money:** end cash, profit after production/Star/marketing/payroll/upkeep, net revenue, surplus kept, royalty costs, negative-cash weeks, cost overruns, recoveries from negative cash, stranded careers.
- **Progression:** cumulative Prestige, when key milestones/unlocks happen, staff XP/stats, studio genre levels, Star level/skills/Fame, release count and weeks elapsed.
- **Output:** Audience/Critic distributions, Hall of Fame share, combo exploration, release gross, release legs/decay, total and per-IP fans, sequel lift, individual distributor trust trajectory and offer terms.
- **Streaming/TV (when enabled):** seasons produced, total episodes, renewals, hiatus penalties, subscriber count, monthly/weekly subscription revenue and operating expenses, churn/recovery, time to unlock platform, catalog size and diversity.
- **Efficiency:** cash and Prestige per in-game year/week and per release, not just gross totals.

For batch reports: **median, mean, 10th/90th percentiles, min/max, percentages hitting major states, trends by production index and by time**, and flagged anomalous trajectories. Make sample size explicit.

### Required adversarial/regression scenarios

1. **Early tutorial-like start:** two employees → mediocre first movie on ordinary assumptions. No special scripted first-film bonus.
2. **$0 or negative cash:** lifeline offer exists for cheapest base cost; Star list validated *before rendering* includes an affordable card (free Level 0 if necessary); $0 campaign; completion possible; no bankruptcy.
3. **Surplus attempt:** accept high advance, use cheapest casting/no marketing; pocket unused funds and release a weak movie. It must be possible; test whether this strategy **loses on longer-run Money, Prestige/unlocks and IP fans** versus a decent-movie policy.
4. **Bad high-hype film:** high opening followed by poor weekly legs; fan backlash; explainable distributor reaction.
5. **Great low-marketing film:** modest opening then strong critic/word-of-mouth legs; no random score/gross conflict.
6. **Wide vs. narrow reach:** same high-quality movie and seed, different distributor reach; narrower gross is explicable in logs.
7. **Famous bad-fit vs. unknown good-fit Star:** Fame helps opening, skill fit improves Filming/reviews; no Fame-to-score leak.
8. **Star life cycle:** Level-point budgets always respected; trained newcomer can grow; Fame-based fees/relationships; no relationship penalty for audition rejection or unrelated casting; negative adjustment for flop harming Fame and for direct sequel/new-season recast.
9. **IP fan carryover:** new IP zero; sequel/reboot retains all; spinoff inherits fraction; poor sequel can lose fans.
10. **Prestige integrity:** no automatic XP at release; no passive Prestige during a weekly run; no double milestones or advance-as-revenue prestige; boundary reviews 3.99 / **4.00** and 8.99 / **9.00**.
11. **Long-run quality inflation:** test interaction of staff stat growth + Star skills + studio genre bonuses, alongside rising critic/audience expectations. Detect if nearly every release becomes 9+.
12. **TV/streaming:** small vs. long order, one episode/week, concurrent commercial earning, streaming subscriber growth only from new releases, catalog-only retention, subscriber decline during inactivity, cost versus revenue, engineer removed from regular crew during platform build.
13. **Cancellation:** cannot cancel unless advance repayment affordable; no free money/duplication by cancel/restart.
14. **Determinism:** same seed + config + decisions → identical event log; changed strategy uses same exogenous market conditions as reasonably possible.

The harness must flag unexpected behavior. **Do not automatically alter the game design, secretly rebalance, or add anti-exploit penalties** just to force the desired outcome. A failed balance check is useful evidence, not permission to falsify results.

### Sensitivity and counterfactual testing

- Support config overrides and two-config **paired-seed comparisons** (`baseline` vs `candidate`). Show deltas for overall metrics and by strategy; flag when a fix helps one policy but causes another regression.
- Start with a handful of meaningful parameter sweeps (e.g. distributor advances/royalties, word-of-mouth strength, casting cost/Fame curve, staff XP curve, studio genre bonus, trust penalty, IP fan lift, streaming churn), not an exhaustive factorial explosion.
- Keep a **regression seed bank** containing interesting failures (cash lock, surplus exploit, runaway Hall of Fame, never-ending revenue, identical careers). Re-run after changes.
- Prefer side-by-side controlled counterfactuals: **same project quality, different marketing**, **same review scores, different reach**, **same IP, sequel vs. new IP**. These should demonstrate causality clearly.

---

## 6. Observability and reports: show why, not just what

For every released production, provide a drill-down containing:

1. Project metadata: week/year, format, genre, theme, IP line, Star, staff, distributor, seed.
2. **Financial waterfall:** original advance; base cost; Star cost; marketing; studio cash overrun; surplus transferred at completion; weekly gross; distributor cut; studio take; operating costs (separate); eventual net.
3. **Quality trace:** meter contributions from staff, Star fit, studio genre experience, combo effects, weak-meter penalty, era/saturation; Audience and Critic final scores.
4. **Opening/viewership trace:** how marketing, studio buzz, Star Fame, reach, trends, inherited fans and review-driven legs changed week-by-week audience numbers.
5. **Progression trace:** XP earned during work, genre level change, Prestige achievement IDs and payouts (each once), IP fan delta, Star Fame/relationship delta, distributor trust reason and delta.
6. Notes showing which computations use LOCKED rules and which use WORKING ASSUMPTIONS.

Machine output: **CSV and JSON**, plus a brief human Markdown report with tables/plots if convenient. Include at least one detailed **failure case** and one successful case, not only aggregate averages.

**Diagnostic flags** (tunable thresholds, not hard-coded moral judgments):
- `SURPLUS_FARMING_DOMINANT`
- `EARLY_SOFTLOCK`
- `PRESTIGE_TOO_FAST` / `PRESTIGE_TOO_SLOW`
- `QUALITY_INFLATION`
- `DEAD_STRATEGY` / `DOMINANT_STRATEGY`
- `STAR_PRICE_NO_VALUE`
- `FRANCHISE_AUTO_WIN`
- `DISTRIBUTOR_TRUST_SPIRAL`
- `STREAMING_PASSIVE_MONEY_PRINTER`
- `HIGH_REVIEWS_UNEXPLAINED_LOW_SALES`
- `UNSUPPORTED_RULE_ASSUMPTION`

Always report **why** a flag fired, how often, the relevant seeds, and the rule/parameter implicated. A strategy losing is not automatically a bug; games can have risky strategies.

---

## 7. Minimal browser tool

Build the UI **after** the core/CLI and baseline invariants work. Keep it intentionally plain.

- **Single career:** New seeded studio → inspect two employees and cash → plan movie → compare 2–3 distributor bids → advance to 40% → select from affordable Star cards / callback catalog → advance to 80% → choose campaign → release and advance through earnings → inspect causal waterfall → repeat. One-click “advance to next decision” is useful.
- **Batch runner:** Choose strategy/strategies, seeds count, releases/year horizon and config; run, display summary table and a few relevant trends (cash, Prestige, scores, trust, fans, subscribers when applicable). Keep results downloadable.
- **Config viewer/editor:** Show a small, curated set of important numeric tuning values, with an unmistakable **“Simulation assumptions — not design locks”** label; allow reset to baseline.
- **Replay/debug:** Load a seed and a decision log, reproduce a problematic career, inspect each release and its events.

No complex animation, fancy navigation, save slots, character art or game-like polish. A local page and CLI are sufficient.

---

## 8. Implementation order and review gates

Work in testable increments. Do not try to write all systems at once.

### Gate 1 — Deterministic movie kernel

Implement typed state, seed, staff/week progression, production phases, money ledger, distributor offers/royalties, Stars and pre-display free fallback, marketing/no-campaign, scoring, finite releases, Prestige milestones and IP fans. Support **single and five-movie careers** headlessly. Show a fully traceable detailed production result.

**Pass when:** core invariants and at least 5 named scenario tests pass; same seed/decision log reproduces exactly. No browser dependency.

### Gate 2 — Policies, batch harness and diagnostics

Implement automated strategies, many-seed careers, summary statistics, paired-seed comparison, diagnostics, CSV/JSON/Markdown output, regression seed bank, and parameter overrides. Run at least **100 seeds across 5–20 productions** for each of several contrasting policies, then a larger feasible run. Report *actual* performance/runtime, not promises.

**Pass when:** it detects at least one intentionally injected accounting/causality regression; can compare a baseline parameter change on the exact same seed bank; produces a useful findings report without fabricated numbers.

### Gate 3 — Extend to TV and streaming

Add limited series and episodic TV first, then platform construction, subscribers, retention and Streaming Originals. Preserve single main production early and background commercial earning. Explicitly label unresolved TV financing, limited-series differentiation, episode-length balancing and stream growth rates as working assumptions.

**Pass when:** tests cover the TV/streaming scenarios above and a full multi-era career can finish without a soft-lock or uncapped perpetual per-title revenue.

### Gate 4 — Thin UI and handoff

Create the browser tool over the core, provide a one-click run and an inspectable career explorer. Run all tests and benchmark a batch. Write docs and final report.

**Pass when:** the owner can operate the browser UI locally if desired, but Claude can independently run every test and batch command and return results without user action.

**If the task becomes very large:** finish Gates 1 and 2 cleanly and report Gates 3–4 as incomplete. Never claim the full game has been modeled when the current harness only models movies. Do not skip tests to ship a decorative dashboard.

---

## 9. Acceptance tests / non-negotiable invariants

At minimum, automate checks that:

- [ ] Starting studio has **exactly two staff**; no scripted success/review/prestige bonus.
- [ ] **Staff XP** increments **during work**, not merely when a title releases. Studio **per-genre experience** increases from making that genre; its exact award timing is a documented working assumption.
- [ ] Star Fame influences reach/opening only; Star family skill influences Filming quality; Star fees are Fame-based with visible deductions.
- [ ] Total Star family skills never exceed the Level budget; growth follows worked family.
- [ ] **No unaffordable-only 40% audition screen**; free Level 0 Star inserted **before** rendering when needed; a real character continues afterward.
- [ ] **No campaign** costs $0 and remains available at 80%, even with negative cash.
- [ ] Mandatory base cost always charged; no fixed-budget ceiling; 100% unused advance transferred **once on completion**, and never misclassified as sales.
- [ ] Studio wage/upkeep charges never draw project advances.
- [ ] Overruns use studio money; cancellation cannot mint money or bypass repayment.
- [ ] Negative-cash studio has an available lifeline for cheapest format and can eventually complete a movie without a bankruptcy/fail screen.
- [ ] Self-funded traditional releases have smaller reach **before streaming**; title remains owned by studio regardless of financing.
- [ ] Reviews arise from production quality, combo fit, era/critic and weak-meter calculation; **not independently sampled**.
- [ ] Marketing, studio buzz and Fame do **not** directly increase Audience/Critic review scores.
- [ ] Early critic buzz/later audience word of mouth impact weekly viewership; traditional runs terminate.
- [ ] IP fans carry over correctly across relationships; studio-level fans never exist.
- [ ] Review renewability thresholds use exactly 4.0 / 9.0 (no boundary error).
- [ ] Prestige only issues on specified achievements; award IDs prevent repeats; no routine weekly or advance-based Prestige.
- [ ] Distributor and Star relationship deltas include understandable causal reasons.
- [ ] Unrelated casting and rejecting auditions never lower Star relationship; replacing the lead for a new season/direct sequel does.
- [ ] Long-term scenarios cover surplus strategy, quality inflation, fame/quality separation, negative cash, franchise strength and later subscriber churn.
- [ ] Same seed, config and ordered decisions yield the exact same state/event sequence.

---

## 10. Required deliverables back to the owner

1. **Working source tree**, not just pseudocode, with package scripts and no production-game artifacts.
2. **`README.md`** with prerequisites and *exact tested commands* to run single career, batch, compare and the UI. Example shapes (make real scripts match the docs):

   ```bash
   npm install
   npm test
   npm run sim -- --seed 42 --strategy balanced --productions 5
   npm run batch -- --seeds 1000 --productions 50 --strategies balanced,cheap-duds,quality-first
   npm run compare -- --baseline config/baseline.json --candidate config/candidate.json --seeds 1000
   npm run dev
   ```

3. **`config/baseline.json` + assumptions register** listing every numerical invention with units, defaults, ranges and reason; mark ALL numbers provisional. Keep economic and score formulas documented.
4. **At least one worked single-production trace** and one **five-production career** with full cash/XP/Prestige/fan/trust audit.
5. **Batch report** including strategy rankings, percentiles, key progression timings, scenario failures, seed IDs and root-cause evidence. Reports must come from executed harness, not made-up illustrative values.
6. **Before/after experiment**: vary one meaningful parameter, rerun same seed bank, show tradeoffs and any regressions.
7. **`docs/open-decisions.md`** separating uncovered ambiguities from model limitations, ranked by whether they prevent reliable balancing.
8. **`docs/balance-findings.md`** with a concise recommendations table: issue, supporting observed data, likely cause, proposed adjustment, risks, design owner decision needed (yes/no).
9. Clear **Gate 1/2/3/4 completion status**, unit/integration test results, performance measurement and known limitations.

### Final instruction to Claude

Build and **actually run** the harness. Don't stop at a plan, scaffold or dashboard mockup. Inspect the outputs, flag bad/degenerate incentives, and propose changes **without silently locking them into the source design**. Keep all new numeric tuning easily editable. **Do not modify `entertainment_studio_handoff_v9_6.md` or assert that a proposed balance fix is now the game's rule.** The owner and ChatGPT will review the results and decide what becomes locked.

**Start with the deterministic five-production movie simulation. Expand only after that can pass checks and produce an explainable report.**
