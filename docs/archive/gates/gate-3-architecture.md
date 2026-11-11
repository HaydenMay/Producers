# Gate 3 architecture: formats, TV and streaming in one rules engine

Movies, limited series, renewable TV and the studio streaming service all run through the same rules API: `createStudio` / `getChoices` / `applyDecision` / `advanceWeek` / `getSnapshot` / `replay`. There is no separate TV simulator. Every Gate 3 rule is **config-gated** (`cfg.formats.limitedSeries | tv | streaming`). With all three off, the engine is the Gate 2.6 movie kernel, byte for byte: movie-only career metrics match the stored baselines on 3,200 careers, and a pre-Gate-3 decision log replays to the same cash and week.

## Modules

| Module | Responsibility (Gate 3 additions in **bold**) |
|---|---|
| `core/types.ts` | Serializable state. **`Format = movie | limited_series | tv`** (a missing `format` field means movie, so old logs stay valid); **`ReleaseRoute = traditional | original`**; Project/Release gain `episodes`, `seasonNumber`, `twistTheme`, `route`, `uniqueViewers`, `episodesAired`, `runEndWeek`, `inCatalog`; IpLine gains `format`, `showTheme`, `fatigueSeasons`, `anticipation`, `announcedSeason`, `partner`, `lastAiredWeek`; Staff gains `role: software_engineer` and `assignment`; **`PlatformState`**; new decisions `unlock_tv`, `announce_season`, `hire_engineer`, `build_streaming`, plus `choose_offer.original`. |
| **`core/formats.ts`** | Format specs (base cost and production weeks by format and episode count), limited-series availability, TV availability, **episode caps by studio Prestige**, renewal status (4.0 inclusive), show-age fatigue, twist outcome, hiatus multiplier, contract-B partner advance. Pure functions. |
| `core/production.ts` | Same plan → pitch → 0–40 writing → 40% casting → 40–80 filming → 80% marketing → 80–100 editing → release flow for every format. **Seasons** reuse the show's IP; **twist** applies at completion (genre locked, theme changes); **show fatigue** joins combo-repetition fatigue (a show's own earlier seasons are excluded from combo repetition so they aren't counted twice); TV openings add **announcement anticipation × hiatus multiplier**; the run end records the hiatus clock, updates the contract-B partner's ROI and calls the catalog join. |
| `core/audience.ts` | One causal viewer model. Movies: unchanged (diffusion legs). **Episodic (TV, limited series)**: premiere = share of the aware pool; then each week = returning viewers (retention from Critic early / Audience later) + newly drawn-in people (critic buzz early, word of mouth later). Distinct samplers are capped by reach; a short catch-up tail follows; the run always ends. **Money per viewer by format**; Streaming Originals earn **0** traditional money. IP fans and Star exposure use **distinct people** (`uniqueViewers`), not viewer-episodes. |
| **`core/streaming.ts`** | Engineer hire, build job (engineer off productions), launch, catalog joins (once each, only after a run ends), one aggregate weekly step: acquisition (Originals' newly drawn-in viewers; one-time catalog-join pull), churn (base × (1 − catalog retention) × quiet multiplier), subscription income, operating cost. No RNG. |
| `core/staff.ts` | `staffWorkWeek` skips staff with an `assignment` (special-role rule). Hired-staff ids can no longer collide with the starting ids (the fix only applies when a collision would happen). |
| `core/stars.ts` | Recasting the established lead of a **new season** costs relationship (as for direct sequels). Casting someone else in an unrelated production never does. |
| `core/prestige.ts` | Unchanged scopes. Viewer milestones use **distinct people**, so a longer order can't multiply them. Review milestones are checked once per release, and **a TV season is one release**. |
| `core/simulation.ts` | Plan options per format, renewal options, Prestige-capped orders, twist variants; reinvest/expansion options; pitch offers (contract A vs B); weekly order (below). |
| `agents/gate3.ts` | Seven Gate 3 policies (tv-first, renewal-franchise, mixed, streaming-pivot, traditional-holdout, limited-focus, tv-duds). Pre-Gate-3 policies stay **movie-only**. |
| `batch/gate3metrics.ts` | Per-career format/TV/streaming metrics, per-strategy trade-off rows, provisional flags. |
| `batch/counterfactuals.ts` | Clone-and-branch counterfactual cases. |
| `batch/diagnostics.ts` | Gate 3 invariants (below). |

## One event clock: `advanceWeek` order (decided once, tested)

1. `week += 1`; critic/audience-era announcements (Gate 2.6 proxy, if enabled).
2. Payroll + upkeep (studio cash; never from advances).
3. **Commercial runs**, in release order. Each active movie, limited series, TV season or Original advances one week (one episode per week for episodic formats). Then: studio take to cash, run-phase (commercial) Prestige checks, and at run end: IP fans → Star career → distributor trust → TV hiatus clock / partner ROI → **catalog join** (if the platform is live).
4. **Streaming**: build progress → launch (engineer returns; finished titles join), or a live platform's single aggregate step (acquisition from this week's Original viewers and this week's catalog joins → churn → subscription income → operating cost).
5. **Active production** (all available staff). It may complete: scores → release record (first airing happens **next** week in step 3) → review Prestige → twist/fatigue bookkeeping.
6. Trends, studio buzz decay, **season-announcement anticipation decay**, trust drift, IP fan decay.
7. Negative-cash week counter.

Same-week boundaries:
- A title whose run ends in step 3 joins the catalog that week and contributes its one-time join pull in step 4 of the same week.
- A project completing in step 5 starts earning the following week.
- Renewal uses the season's score, known at release, so the next season can be ordered while the previous one is still airing.
- A season announcement can be made in any phase, including during another production. It never resets the hiatus clock, which is measured from the week the last season's run ended.

## RNG

Named streams are unchanged: world, trends, talent, work, staff, distributors, names. Gate 3 adds no stream and no streaming randomness. TV/limited-series titles use the `names` stream, only when those formats are chosen. So a movie-only career draws exactly the same numbers as before, and a mixed career's movies draw the same until the first non-movie choice.

## State transitions

- **Limited series:** plan (available after the first completed production) → normal production → weekly episodes + tail → run end → catalog. Never renewable. No continuation plans are generated for its IP (OPEN: whether a limited-series IP may spawn other related work).
- **TV:** `unlock_tv` (studio upgrade: Prestige + cash) → new show (order ≤ Prestige cap) → season released (renewable if avg ≥ 4.0) → next season plans (order sizes × optional twist themes) → … A show ends when a season scores < 4.0, or when the player simply stops ordering.
- **Contract B:** a show's season-1 distributor (not the lifeline) becomes its partner. A returning season's pitch shows that partner's one offer (+ lifeline if its advance is below the cheapest base cost) + self-fund. Self-funding a season, or taking the lifeline, ends the partnership.
- **Streaming:** `hire_engineer` (Prestige gate; uses a normal staff slot) → `build_streaming` (Prestige + cash + finished catalog + idle engineer; engineer off productions) → live after `buildWeeks` → Originals become a pitch option (self-funded only; never while cash is negative).

## Invariants added (any violation = harness bug)

- `TV_EPISODE_DUPLICATE`, `TV_EPISODE_ORDER`, `TV_EPISODE_SKIPPED_WEEK`, `TV_EPISODES_MISSING`.
- `ORIGINAL_EARNS_TRADITIONAL`, `LIMITED_SERIES_RENEWED`, `TV_GENRE_CHANGED`, `TV_PRESTIGE_PER_EPISODE` (review awards only in the season's release week).
- `MULTI_DISTRIBUTOR_STACKING`.
- `CATALOG_DOUBLE_COUNT`, `CATALOG_BEFORE_RUN_END`, `SUBSCRIPTIONS_DOUBLE_PAID`, `SUBSCRIBERS_INVALID` (NaN, negative or above market), `PASSIVE_ACQUISITION` (no acquisition without a source), `ENGINEER_STUCK`.
- `GLOBAL_FAN_STAT`, `STAFF_GENRE_XP`.
- Existing invariants are reused for TV:
  - `REACH_EXCEEDED` checks distinct viewers for episodic formats.
  - `RUN_TOO_LONG` allows episodes + tail + 1 weeks.
  - Ledger reconciliation now includes subscriptions and operating cost.

## Backward compatibility / migration

- Old configs load as-is; every Gate 3 field has a disabled default in `config/baseline.json`.
- Old decision logs replay: `PlanDecision.format` is optional.
- `RULESET_VERSION` is now `v9.61-gate3-0.1`; state carries it, and reports print it.
- The batch runner now passes the production phase to strategies. Pre-Gate-3 strategies return `wait` there, so their behavior is unchanged; Gate 3 strategies use it for background announcements and the streaming build.
