# Gate 3 follow-up — findings (staff firing and organic TV longevity)

> **Simulation output under TEST ASSUMPTIONS.** Nothing here locks a number. The canonical design handoff was not edited. Full tables: `reports/gate3_followup/matrix-tables.md`; raw summaries: `reports/gate3_followup/matrix/*.json`; traces: `reports/gate3_followup/traces/`.

## What was built

| Item | Status | Default | Where |
|---|---|---|---|
| Dismiss an employee (LOCKED) | Built, on | `staffing.firingEnabled: true` | `src/core/staff.ts` (`fireOptions`, `fireStaff`), decision `{ type: "fire", staffId }` |
| No hard season cap (LOCKED) | Confirmed: renewal only needs the last season ≥ 4.0. A test plays a show to Season 20+. | — | `tests/integration/followup.test.ts` |
| Causal outcomes (LOCKED) | Kept: no result roll. The one new random draw (breakthroughs) changes meter points, which flow through the normal score formula. | — | `src/core/production.ts` |
| Returning-viewer fatigue (EXPERIMENT) | Built | **off** (`tv.viewerFatigue.enabled: false`) | `src/core/formats.ts` `viewerFatigue`, applied in `production.ts` → `audience.ts` |
| Creative breakthroughs (EXPERIMENT) | Built | **off** (`events.breakthrough.enabled: false`) | `src/core/production.ts` `breakthroughCheck`; lazy RNG stream `events` |
| `TV_SEASON_TOO_LONG` flag | Replaced by `TV_LONG_RUNNER` (informational) and `TV_IRRATIONAL_RENEWAL` | — | `src/batch/gate3metrics.ts` |
| Season-level feel metrics | Built | — | `src/batch/seasonfeel.ts`, `scripts/fu-matrix.ts`, `scripts/fu-report.ts`, `scripts/fu-traces.ts` |
| Agent changes (agents only, not rules) | Firing heuristic, plus money-aware renewal for sensible policies (`renewal-franchise` stays stubborn) | on in `config/gate3.json`, off in baseline | `src/agents/gate3.ts` |

### Firing rules as built

| Rule | Status |
|---|---|
| Any employee can be dismissed; it frees exactly one slot; payroll, contribution and XP stop from the next week; the person is kept in `formerStaff` with `firedWeek`; past releases are untouched. | LOCKED behaviour |
| Dismissal only between productions (planning phase), never while the Software Engineer is building the platform. | **Harness UX assumption, OPEN** (`staffing.betweenProductionsOnly`) |
| Never below `staffing.minStaff` = 2 (the starting team). | **OPEN** |
| Severance `staffing.fireCost` = $0. A ledger kind `fire` exists if a cost is chosen. | **OPEN** |
| No morale, no rehire cooldown, no transfer. | Out of scope |
| The lifeline, the free Star and the $0 campaign still work after hires and dismissals. | Tested |

## Safeguards (all checked this run)

- **Movie-only results are byte-identical** to `reports/gate2_6/00_pre_change` (regression test F1, plus a 4-file `careers.csv` diff).
- **Gate 3 policies with the follow-up agent flags off reproduce `reports/gate3_followup/00_baseline` exactly** (30 seeds × 8 policies × 15 years; `careers.csv` and `great.csv` identical). So the engine changes alone move nothing.
- **Both experiments are off by default.** An enabled breakthrough with 0% chance reproduces the previous careers exactly (test).
- **Invariants:** 0 violations across seeds 1–20 of every strategy × variant in the matrix (the checker includes `SCORE_NOT_CAUSAL`, which recomputes scores from meters, so breakthrough scores provably follow the meters). The Software Engineer uses a normal slot (`STAFF_OVER_CAPACITY`).
- **Tests:** 106 passing (90 before plus 6 firing and 10 follow-up tests).

## Sample and runtime

- **Main matrix:** 9 variants × 6 strategies × 200 seeds = 10,800 careers. Order and sensitivity variants add 2,000 + 2,400 careers.
- **Horizons:** each career runs 25 in-game years once. The 10- and 15-year results are exact prefixes: agents never read the horizon, and a 10-year run equals the first 10 years of the 25-year run (checked).
- **Runtime:** about 80–90 s per 1,200-career variant on one core. The whole matrix took about 10 minutes on 2 cores.

---

## F1. Firing removes the eight-slot block; debt spirals were already rare

| 25 years, 200 seeds | Before (A0: no firing; the Gate 3 workaround kept one slot empty) | After (A: firing on) |
|---|---|---|
| mixed: Software Engineer hired / streaming live | 200 / 200, median year 7.25 | 200 / 200, median year **6.92**, with exactly **1 dismissal per career**, always the weakest non-engineer at 8/8 |
| streaming-pivot | live at median year 6.42 | **6.12** (1 dismissal per career) |
| renewal-franchise: careers ≥ 3 years in debt | 2 / 200 | 2 / 200 (seeds 54 and 83) |
| renewal-franchise: careers **ending** in debt | 2 | **0** (11 dismissals made while in debt) |
| tv-first, traditional-holdout, balanced | 0 dismissals | 0 dismissals (never in deep debt) |

- **The eight-slot block is solved in the rules,** not by the old "keep a slot free" agent hack. A full studio fires one person and then hires the engineer. Test: full capacity → fire → hire engineer → build → live.
- **Debt spirals barely exist under the Gate 3 numbers.** Only the stubborn franchise policy got into lasting debt (2/200). Firing doesn't stop the slide. It shortens recovery: in trace 5a the studio sheds staff one production at a time down to 2 and climbs back to +$600K two years later.
- **No struggling studio both fired and hired an engineer.** Every engineer-slot dismissal happened while the studio was rich: the lowest cash at that moment was $829K (mixed seed 147). The policy only targets the engineer when it can afford the build. So "trace 5" is two real traces, not one faked one (see Traces).

## F2. Long shows: legal, and they now end by choice, not by force

With money-aware renewal (A), sensible policies run shows much longer than under the old Gate 3 policy caps (A0 capped at 6–8 seasons):

| 25 years | tv-first A0 → A | traditional-holdout A0 → A | streaming-pivot A0 → A |
|---|---|---|---|
| Longest show | 8 → **35** | 6 → **22** | 6 → **21** |
| Shows reaching S10 | 0% → 44% | 0% → 11% | 0% → 54% |
| Shows reaching S20 | 0% → 5% | 0% → 0% | 0% → 5% |
| Ended shows that ended **voluntarily** | 100% | 100% | 100% |
| Median end cash | $22.70M → $20.38M | $23.78M → $23.08M | $6.03M → $4.83M |

- **Shows almost never end by score.** Only 1 show in 683 (tv-first) fell below 4.0. Every other ending was the policy choosing to stop while the show was still renewable.
- **The reason is quality, not money.** Under every variant, **0% of traditional TV seasons lost money**, in every band, including Season 16+ of a stubborn franchise averaging 5.8 (still about $17K net per production week). So the money test ($15K/week) almost never fires. Sensible policies stop because of their own quality bar (6.0–6.5).
- **`TV_IRRATIONAL_RENEWAL` never fired** (0 seasons after two losing seasons). That isn't because policies are wise: a TV season can't lose money under these numbers.
- **Running longer costs a little.** tv-first ends about 10% poorer than with the old caps (a fresh show beats a tired one), so the economics already lean gently toward ending shows.
- **Natural fading exists** through review fatigue (tv.fatigue, cap 35%). tv-first season averages run 8.50 (S1–3) → 8.07 (S4–6) → 6.67 (S7–10) → 6.30 (S11–15).

## F3. Returning-viewer fatigue barely changes anything (the headline finding)

| tv-first, 25 years | Viewer-fatigue multiplier S11–15 | Δ premiere | Δ unique viewers | Δ net/prod week | Δ show length |
|---|---|---|---|---|---|
| B mild (seasons basis) | 0.86 | −1% | −0% | −0% | none |
| B_ep mild (episode basis) | 0.72 | −3% | −0% | −1% | none |
| D strong | 0.56 | −5% | −0% | −1% | none |
| D strong, also on the premiere share | 0.56 | **−46%** | **−4%** | −7% | none |

The stubborn franchise shows the same pattern: D gives −7% premiere, −5% unique, −5% net at S16+.

**Why: the reach cap saturates.** A returning TV season reaches **91–99% of its reach cap** by the end of its run in every band (column "Unique ÷ reach"). Within-season word of mouth and critic buzz pull in fresh samplers until the cap is hit. So the opening only moves *when* viewers arrive, not *how many*. Fans and announcement anticipation are also a small slice of the opening awareness (base, marketing, Star Fame and trends carry most of it). The multiplier therefore barely dents even the premiere.

- **The seasons vs episodes basis matters only for order size.** With the episode basis, a 20-episode show tires twice as fast per season as a 10-episode one. A 5-episode show barely tires at all (S11–15 multiplier 0.98 vs 0.86 on the seasons basis). Neither basis changes money or length, because of saturation.
- **Successful vs mediocre shows:** no difference in effect. Neither class's length or money moved.
- **The stubborn policy:** same story. Viewer fatigue gives it no reason to stop.
- **It is offsettable as required.** The multiplier touches only fans + announcement (and optionally the premiere share). Marketing, Star Fame, trends and buzz are untouched (asserted in a test). A great previous season slows it (`qualitySlow`), and a good twist subtracts exposure (`goodTwistReset`). Scores, ratings and review fatigue are untouched (test: same decisions → identical Audience/Critic and identical `tv` trace).

**For the designer:** as specified ("opening / returning-audience input only, not ratings or sales"), this mechanic can't create organic endings in the current audience model. It will only bite if it reaches what actually caps a season: the reachable pool. Lapsed viewers could shrink the returning season's reach cap or aware pool, or per-episode returning retention could be lowered. **Neither was tested**, since both go beyond the brief. See open decision D1.

## F4. Review fatigue is the real longevity lever, and it trades away Hall of Fame

C keeps mild viewer fatigue and cuts review fatigue from cap 35% / 1.2% to **cap 20% / 0.8%**:

| 25 years | tv-first A → C | renewal-franchise A → C | traditional-holdout A → C |
|---|---|---|---|
| Season avg S7–10 / S11–15 / S16+ | 6.67 / 6.30 / 6.47 → **7.54 / 7.39 / 7.36** | 6.37 / 5.81 / 5.79 → **7.33 / 7.21 / 7.21** | 6.90 / 6.56 / 6.70 → **7.55 / 7.47 / 7.51** |
| Shows reaching S20 | 5% → **50%** | 100% → 100% | 0% → **55%** |
| Long-runner shows (≥ 12 seasons, last 3 avg ≥ 7) | 0 → **153** | 0 → 134 | 0 → 156 |
| Hall of Fame entries (all productions) | 589 → **200** | 44 → 69 | 1,299 → **370** |
| Median Prestige | 5,573 → 3,540 | 3,045 → 3,260 | 7,550 → 4,728 |
| Median end cash | $20.38M → $24.12M | $10.12M → $22.75M | $23.08M → $25.06M |

- **With less review fatigue, shows plateau around 7.4 instead of fading,** so sensible policies keep them. In C, tv-first makes half as many new shows (S1–3 seasons: 915 vs 1,882).
- **Hall of Fame and Prestige drop** because new shows (S1–3) are where 9.0s happen (24% HoF rate in S1–3, 0% after S10).
- **This is the trade-off to decide:** long, comfortable, profitable shows versus a churn of new shows that win more awards.
- **combo_D on top of C** (Gate 2.6 critic generations + audience eras) lowers late seasons by about 0.4–0.5 (tv-first S11–15: 7.39 → 6.94) and cuts HoF further (mixed 2,317 → 775), without changing maximum show length. Interaction only; defaults unchanged.

## F5. Breakthroughs: rare enough, too small to feel

| 25 years | A_events (bonusShare 0.6) | A_eventsBig (bonusShare 3.0) |
|---|---|---|
| Frequency | **6% of productions** (2% × 3 stage checks), 2.4–4.8 per 25-year career | same |
| Average effect on the published average | **+0.03** | +0.10 |
| Largest | +0.36 | +0.92 |
| HoF titles that exist only because of a breakthrough | 0–10 per strategy (out of 588–4,659) | 3–31 |
| Comebacks involving a breakthrough | 3 of 76 | 4 of 74 |

- **A breakthrough adds points to one meter,** and meters saturate (`pts / (pts + half)`) with one meter weighing 15–35% of a score. So even a large bonus rarely moves a score by more than a few tenths. The effect follows the meters exactly; the counterfactual "avg without it" is stored on each release.
- **As a feel moment it's currently invisible.** It needs either a bigger, multi-meter effect, or to be shown to the player as a moment (log line or headline) even when the score change is small. See D3.
- **Events never touch earlier published scores** (test), never wipe fans, and replay exactly.

## F6. Comebacks happen naturally, through good twists

- **Under the default follow-up config (A), there are 73 genuine Season 7+ comebacks across 1,200 careers** (tv-first 25, streaming-pivot 31, renewal-franchise 17), with no events at all.
- **Every one followed a good twist.** A good twist resets part of the review fatigue, and the season jumps ≥ 1.0 back to ≥ 7.0.
- **Failed attempts are common (1,482):** a twist or new Star after a slump that gained < 0.5.
- **In C (less review fatigue) there are zero comebacks,** because there are no deep slumps to come back from.
- **Comebacks keep the show's fans** (no reset) and never touch past scores.

## Traces (all found from seeds, none scripted)

| # | Case | File | What happens |
|---|---|---|---|
| 1 | Healthy series fades, voluntarily ended | `traces/show-A_control-tv-first-s2-ip171.md` | Midnight Night (Horror): S2 9.02, then review fatigue climbs 0.9% → 33%; S9 5.82; still renewable and profitable ($19.9K/week) but below tv-first's 6.0 bar, so it's left alone for the last 7 years. |
| 2a | Strong series past S15 (default) | `traces/show-A_control-streaming-pivot-s133-ip168.md` | A Streaming Original reaches S21 (only such case in A); good twists at S15, S18 and S19 pull it back each time. |
| 2b | Strong series past S30 (variant C) | `traces/show-C_events-tv-first-s3-ip61.md` | 32 seasons, last three averaging 8.02. With review fatigue capped at 20% this is common (566 cases). |
| 3 | Genuine S7+ comeback | `traces/show-A_control-tv-first-s31-ip242.md` | Last Echo (Comedy): 7.56 peak, S5–6 at 6.5/6.4, a good Zombies twist at S7 → 7.77 (review fatigue 15.8% → 11.0%), fans 53K → 71K. |
| 4 | Failed comeback attempts | `traces/show-A_control-tv-first-s2-ip84.md` | Hollow Legacy: an S8 twist half-works (+0.98); S10 dips to 6.34; the S11 Superheroes twist is graded good but the season only reaches 6.42; S12 5.83; the policy stops. |
| 5a | Struggling 8-person studio dismisses staff | `traces/firing-A_control-renewal-franchise-s83.md` | Stubborn franchise at 8/8 sinks to −$157K in year 15.8, dismisses one person per production down to 2 (bottoming at −$254K), returns to +$599K by year 21.4 and rehires. |
| 5b | Full 8/8 studio dismisses to recruit its engineer | `traces/firing-A_control-mixed-s147.md` | Week 234: dismisses the weakest employee (7/8), hires the Software Engineer, builds, launches. This was the poorest such studio in 400 careers, and still had $829K. |

A single trace of "struggling AND hires the engineer" doesn't exist in 400 mixed/streaming careers, so it isn't shown (see F1).

## Gate 2.6 variant interactions (reported, defaults unchanged)

- **combo_D on top of C:** see F4. It lowers late-season and new-show averages together, so show length doesn't change but HoF falls sharply for mixed and balanced studios (movies feel it most).
