# Gate 3 assumption register

Labels:
- **LOCKED**: behavior from the v9.6/v9.61 handoff; implemented as stated.
- **TEST ASSUMPTION**: a number or formula so the harness can run; free to change.
- **PROPOSAL**: a handoff proposal implemented in a simple form for testing; not approved.
- **OPEN**: a designer decision still needed (both the tested assumption and the question are recorded).

Config paths are in `config/baseline.json` (all Gate 3 features disabled there) and are enabled together by `config/gate3.json`. Earlier assumptions (G1–G21, movie kernel A1–A24) are in `docs/assumptions-register.md`; they still apply. "Validate by" names the test or experiment that checks the assumption.

## Formats and costs

| # | Item | Value | Label | Validate by |
|---|---|---|---|---|
| T1 | Formats unlock: movies + limited series first (limited series after the first completed production); TV via a studio upgrade (money + Prestige); streaming later | `limitedSeries.availableAfterProductions` 1; `tv.unlock` Prestige 300 + $150K | LOCKED direction; thresholds TEST ASSUMPTION | G3_main: TV unlock year by strategy |
| T2 | Movie base cost / production weeks (unchanged) | $60K / 16 | TEST ASSUMPTION (Gate 2) | Gate 2.5 E |
| T3 | Limited series: fixed package of 6 episodes, base $90K, 18 production weeks; weekly airing + 3-week tail at 40%/week; $0.57 per viewer-episode | `limitedSeries.*` | TEST ASSUMPTION (calibrated: ~1.05× a movie's net per production week) | `scripts/g3-econ.ts`; G3_main format table |
| T4 | Limited-series alternate pacing: one movie-style declining run at $2.40/viewer | `limitedSeries.pacing: "declining"` | TEST ASSUMPTION / experiment hook ("medium, declining run" wording) | Not run by default; config switch |
| T5 | TV season base cost = $15K setup + $15K × episodes; production weeks = 6 + 2 × episodes | `tv.setupCost`, `perEpisodeCost`, `durationBaseWeeks`, `weeksPerEpisode` | TEST ASSUMPTION | G3_season_size |
| T6 | TV money: $0.32 per viewer-episode | `tv.grossPerEpisodeViewer` | TEST ASSUMPTION (calibrated: 5 eps ≈ 0.55×, 10 ≈ 0.95×, 15 ≈ 1.15×, 20 ≈ 1.3× a movie's net per production week) | `scripts/g3-econ.ts`, G3_season_size |
| T7 | Episode viewer model: premiere = 50% of the aware pool; returning share = clamp(0.88 + 0.30 × q, 0.5, 1.0), q = (Critic−5)/5 in weeks 2–3, (Audience−5)/5 later; newly drawn-in people: critic buzz 6% of unaware × q early, word of mouth 0.35 × q × last week's audience later; interest decay 15% (+35% × badness); watch rate 25% × (1 + 0.25q); distinct viewers ≤ reach cap; 2-week tail at 35%/week | `tv.episodeModel`, `tailWeeks`, `tailShare` | TEST ASSUMPTION (shape LOCKED: critics early, audience later, finite) | F4/F7 tests; legs counterfactuals |
| T8 | Episodes air one per week starting the week after completion; no player action per episode | — | LOCKED | F4 |
| T9 | Viewer milestones, IP fans and Star exposure use **distinct viewers** for episodic formats (viewer-episodes only drive money) | — | TEST ASSUMPTION (prevents episode-count multiplication) | F6 test |

## Renewal, order size, fatigue, twist, hiatus, announcements

| # | Item | Value | Label | Validate by |
|---|---|---|---|---|
| T10 | Renewal by season average: < 4.0 blocked, ≥ 4.0 renewable (inclusive boundary as a named assumption), ≥ 9.0 Hall of Fame (not required) | `tv.renewalThreshold` 4.0, `renewalInclusive` true | LOCKED rule; inclusive boundary named per the prompt | F3 test |
| T11 | Season-order caps by studio Prestige (not show history; a debut can use the max; smaller orders always allowed): 5 at 0, 10 at 600, 15 at 1,800, 20 at 3,500 | `tv.episodeCaps` | LOCKED direction; thresholds TEST ASSUMPTION | F3; G3_main cap timing |
| T12 | Limited series never renews; no continuation plans for its IP | — | LOCKED (no renewal); "related work from a limited-series IP" OPEN | F3 |
| T13 | Show-age fatigue = min(35%, 1.2% × (seasons so far)^1.6) × (1 − 0.4 × max(0, (last avg − 7)/3)); joins combo-repetition fatigue (the show's own seasons don't count twice); total capped at 60% | `tv.fatigue` | LOCKED (seasons get fatigue; quality slows, never stops); curve TEST ASSUMPTION | C2; `TV_SEASON_TOO_LONG` |
| T14 | Twist: next-season option with any unlocked theme ≠ current; scored with genre + twist combo grades; A/B-level (avg grade ≥ +0.5) → fatigue counter −2 seasons; D/F-level (≤ −0.5) → fans −25% at release; theme pairing changes, genre and IP never | `tv.twist` | LOCKED (twist); grade thresholds and effect sizes TEST ASSUMPTION; scoring with twist grades = handoff PROPOSAL | F8; C3 |
| T15 | Hiatus: no penalty for gaps ≤ 78 weeks after a season's run ends; beyond that, opening anticipation (fan awareness + announcement hype) × max(0.4, 1 − 0.35/year over the grace period); never touches past scores or fans | `tv.hiatus` | LOCKED direction; numbers TEST ASSUMPTION | F9; C4 |
| T16 | Season announcement: $15K, +0.35 show-specific awareness, fades 4%/week, one per upcoming season, usable during another production, never resets the hiatus clock; separate from studio ads (next release) and the 80% campaign | `tv.announce` | LOCKED direction; numbers TEST ASSUMPTION | F9 |
| T17 | Recasting an established lead for a later season: relationship −1.5 (same as a direct sequel); unrelated casting never penalizes | `stars.relRecast` | LOCKED | F8 |

## TV financing (OPEN contract question; both variants implemented)

| # | Item | Value | Label | Validate by |
|---|---|---|---|---|
| T18 | **A, per-season pitch** (test baseline): each season is a new pitch with 2–3 fixed offers + self-fund; IP fans raise offer heat (existing heat formula) | `tv.contract.variant: "A"` | OPEN | G3_contract |
| T19 | **B, continuing partner**: season 1's distributor carries its royalty forward; each later season's advance = base cost × clamp(0.9 + 0.3 × (last finished season's ROI − 1), 0.5, 1.4) × trust factor; lifeline still guaranteed; walking away (self-fund or lifeline) ends the partnership | `tv.contract.B` | OPEN | G3_contract; F14 |

## Streaming

| # | Item | Value | Label | Validate by |
|---|---|---|---|---|
| S1 | Unlock: Prestige ≥ 2,500 + build cost $600K + ≥ 8 finished titles + an idle Software Engineer | `streaming.unlock`, `buildCost` | LOCKED direction (Prestige + cash + catalog + engineer); numbers TEST ASSUMPTION | G3_main launch year |
| S2 | Software Engineer: special job, $25K to hire, $1,500/week, stats 18–35; occupies a normal staff slot (4→6→8 cap); off productions for the 30-week build, then works normally | `streaming.engineer`, `buildWeeks` | LOCKED (background build, off productions); slot use and numbers TEST ASSUMPTION; **no firing exists**, so a full studio can't make room (OPEN) | F2; ENGINEER_STUCK |
| S3 | One aggregate subscriber balance; reachable market 120,000; fee $0.50 per subscriber-week; operating cost $8,000/week + $0.15 per subscriber | `reachableMarket`, `feePerSubWeek`, `opex` | LOCKED (aggregate, operating costs); numbers TEST ASSUMPTION | G3_streaming |
| S4 | Acquisition only from: an Original's newly drawn-in viewers × 35% × (1 − subs/market); a one-time pull when a traditional title joins the catalog (4% × distinct viewers × quality); a one-time launch pulse (1,500 per unit of catalog appeal, max 15,000) | `originalConversion`, `catalogJoinConversion`, `launch*` | LOCKED (new releases = growth; catalog can't grow subscribers on its own); launch pulse and numbers TEST ASSUMPTION | F11 (`PASSIVE_ACQUISITION` invariant); C7 |
| S5 | Churn = 1.2%/week × (1 − catalog retention) × quiet multiplier. Retention = 0.65 × (1 − e^(−value/6)) + genre diversity (2%/genre, ≤ 10%). Title value = quality × freshness (half-life 2 years); Hall of Fame = evergreen (×2.5, floor 35% freshness). Quiet: after 26 weeks without a new title, +0.5× per 26 weeks up to 2×, with a one-time "restless" warning | `streaming.churn` | LOCKED (catalog = retention, HoF evergreens, quiet = slow visible drift); numbers TEST ASSUMPTION | F12; C5, C7, C8; G3_streaming |
| S6 | Catalog: every studio-owned title joins automatically once its commercial run (or an Original's debut window) ends; at launch, all finished titles join; never twice; no payouts restart | — | LOCKED | F11 (`CATALOG_*` invariants) |
| S7 | Streaming Original: self-funded only (never while cash is negative), reach = 55% of the market, no traditional gross or royalty, same scores/Stars/fans/Prestige rules | `originalReach` | LOCKED (route); reach TEST ASSUMPTION | F5; C6 |
| S8 | Original TV season pacing: weekly episodes (the binge drop is a handoff PROPOSAL; not implemented) | `originalTvPacing: "weekly"` | PROPOSAL deferred | — |

## Agents (policies, not rules)

| # | Item | Label |
|---|---|---|
| P1 | Pre-Gate-3 strategies stay movie-only (in-config all-movie controls) | Harness |
| P2 | Gate 3 policies: tv-first, renewal-franchise, mixed, streaming-pivot, traditional-holdout, limited-focus, tv-duds (adversarial). Visible information only; twists only toward combos the studio has already seen to be good | Harness |
| P3 | `agents.tvOrderPreference` ("max" or a number): the largest allowed order up to the preference | Harness, used by G3_season_size |
| P4 | Streaming-minded policies keep one staff slot free at their top capacity for the engineer | Harness (forced by S2) |

## Carried values (unchanged; still TEST ASSUMPTIONS)

- Prestige hybrid milestones: per release: all meters ≥ 70 +50, Audience ≥ 7.5 +75, Critic ≥ 8.5 +85, HoF +200; career-once: first HoF +100; per IP: lifetime gross $1M +100 and $5M +150, lifetime distinct viewers 500K +150.
- First-film economy: $40K start, $2.00 per movie viewer, $600/week upkeep.
- Staff ladder 4→6→8 with upgrade costs $250K/$750K and Prestige gates 200/1,000.
- Diffusion legs.
- Gate 2.6 critic/audience curves stay **off** (combo_B/combo_D appear only in experiment G3_critics).

## Provisional diagnostic thresholds (`src/batch/gate3metrics.ts`)

| Flag | Fires when (PROVISIONAL) |
|---|---|
| STREAMING_INFINITE_GROWTH | any launched career reaches ≥ 90% of the reachable market (growth is capped by design; this flags saturation) |
| SUBSCRIBER_CHURN_SPIRAL | > 10% of launched careers lose > 60% of subscribers within 3 years |
| TV_SEASON_TOO_PROFITABLE | > 10% of finished traditional TV seasons net > 2× the batch's pooled movie net per production week |
| TV_SEASON_TOO_LONG | any show reaches ≥ 12 seasons |
| TV_NO_RENEWAL_PATH | > 50% of TV careers (8+ years) never make a second season |
| MIXED_ECONOMY_SOFTLOCK | any career has ≥ 3 years of negative-cash weeks |
| FORMAT_DOMINANT | one strategy leads both median cash and Prestige by > 50% |
| DELAYED_STUDIO_PROGRESSION | > 25% of TV-minded careers lack TV by year 8, or > 25% of streaming-minded careers lack a live platform by year 15 |
| TV_EPISODE_DUPLICATE, TV_PRESTIGE_PER_EPISODE, CATALOG_DOUBLE_COUNT, ORIGINAL_EARNS_TRADITIONAL, ENGINEER_STUCK | hard invariants (any occurrence = bug) |
