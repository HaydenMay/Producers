# Gate 4Q — logical combinations, quality range and genuine dud tests: findings

> **Experimental scoring pass, TEST ASSUMPTIONS.** Branch `gate-4q-quality-combos`. Candidate: `config/gate4q.json` (= the Gate 4 late-distribution + contracts candidate + the scoring changes below). The canonical handoff wasn't edited, and no payout, Prestige or economy formula was changed. Decisions: `docs/gate-4-quality-open-decisions.md`.

## Plain-English verdict

**What caused the high floor?** Two things together, confirmed in code and data.

- **The meter curve gives a rookie crew a decent baseline.** Meter quality = points ÷ (points + half-point). The starting two-person studio's meters land at **48–62 / 100**, which is a pre-pairing score of about 5.2–5.7.
- **The pairing penalty was mild.** F only multiplied the score by 0.78 (D 0.90), and grades were two independent random letters per pair. So the worst a rookie could do was about 5.5 × 0.78 ≈ 4.3, and in practice 4.55 was the floor (we reproduce the designer's exact numbers: 496 films, mean 6.24, min 4.55).

**Can early play now produce 2/10, 3/10 and 4/10 releases?** Yes, from normal choices, with nothing forced.

| Who | Result |
|---|---|
| Starting two-person studio on a poor pairing | **73% of its first five films score below 4** (min 2.95, median 3.85) |
| Same studio on a natural pairing | 6.0–6.4 |
| A low-budget/random-combo studio | 8% below 4 |
| A poor-fit chooser | 82% below 4; true 2.x films when it keeps repeating Horror + Sports (fatigue stacks on F/F) |
| Balanced / quality-first studios | 1% / 0% below 4 |

**Are scores still explained by decisions and crew?** Yes.

- Every score is the same formula over traced meters, pairing grades, fatigue and eras.
- The one new random draw (cult appeal) only changes which **audience grade** enters that formula, for one title, and is logged with its chance and draw.
- 0 invariant violations, including the check that rebuilds every score from its trace.

**The one uncomfortable finding:** with the Gate 4 payout formulas unchanged, a genuinely bad film is still profitable. Sub-4 films earn a median **+$50K all-in; 0% lose money**. The earlier Gate 4 claim ("bad movies are always profitable") was based on films that scored around 6; it now holds for real 2–3/10 films too. The cause is the audience model, not the films.

Turning on the two Gate 4 audience levers (word-of-mouth pivot 6.5, bad-reception decay 1.0), shown here as information only, flips sub-4 films to **97% losing, median −$25K**. Good films (6–8) stay profitable (+$112K) and great ones (8+) are unchanged (+$233K).

## What was implemented

| Piece | Where | Default |
|---|---|---|
| `world.compatibility.mode`: `random` (every earlier gate) or `editorial` (designer matrix per **exact** genre × theme, separate audience / critic) | `config/baseline.json`, `src/core/progression.ts` `editorialGrades` | `random` |
| Bounded world variation: each side of each pair moves **one** grade step with 20% chance, from a stable hash of (seed, pair) instead of a shared random stream. A natural A can become B, never F. In editorial mode the old random draws are still consumed, so stars, talent and every other draw are identical to random mode (clean paired comparisons). | `src/core/rng.ts` `stableUnit` | on in editorial |
| Steeper D/F multipliers (candidate only; one change): D 0.90 → **0.80**, F 0.78 → **0.55**; A/B/C unchanged | `config/gate4q.json` | baseline unchanged |
| **Cult appeal** (candidate only, default off). At release, if the pair's audience grade is D/F, the studio has never released this exact pair, and audience-side craft (Filming + Editing) ≥ 60: chance 10% (+5% rising / +10% hot theme) from a lazy `reception` stream. Success = "lift" (audience grade +2 steps) or 1 in 4 "breakout" (audience grade A) for **that title only**. Critics, meters, Star, money and the combo book are untouched; money and fans follow the normal audience model. | `src/core/production.ts` `cultCheck`, `world.cult` | off |
| `cheap-duds` shown as **`low-budget-random-combo`**: an exact alias, same policy, same agent RNG | `src/agents/strategies.ts` | — |
| `poor-fit-chooser` diagnostic policy: repeats the worst pairing in its **own revealed combo book**, otherwise tries untried pairs. Never reads hidden grades. | `src/agents/diagnostic.ts` | — |
| One focused diagnostic (`scripts/quality.ts`) + seeded attribution traces (`scripts/quality-traces.ts`) | — | — |

## What actually ran

| Check | Result |
|---|---|
| `npm run typecheck` | clean |
| `npm test` | **131 passed** (118 earlier + 13 Gate 4Q) |
| Legacy byte-identity vs the Gate 4 commit (`git worktree f16bcb4`) | Gate 3 config (30 seeds × 8 policies × 15 yrs), movie baseline (50 × 7 × 20 films) and the whole **Gate 4 economy COMPARE** (`careers.jsonl` + `releases.jsonl`, 656 careers): **identical**. Two stored Gate 3 decision logs replay to an identical full state. |
| Gate 4Q tests | Family vs exact genre (Scary Star helps Horror and Thriller, not Comedy; a spooky theme gives no Scary boost; Horror XP ≠ Thriller XP; Horror + Zombies ≠ Thriller + Zombies); a great crew mitigates F without erasing it, while a rookie crew on A/A stays below 7; deterministic and bounded variation over 200 seeds; editorial mode leaves every other draw unchanged; cult rules (audience-only, combo book keeps the baseline, never on a repeated pair, exact no-cult twin); 80% bids blind to hidden grades; critic eras still applied; careers keep invariants and replay (low-budget, poor-fit, tv-first, mixed); the alias is identical |
| `npm run scenarios`, `npm run build:web`, `npm run economy:smoke` | pass |
| Larger runs | **none**; nothing needed one |

## Runtimes (measured, 2 cores)

| Loop | Command | Scope | Elapsed |
|---|---|---|---|
| Inner | `npm run quality:smoke` | typecheck + 13 Gate 4Q tests + 5 seeds (rookie scenarios, 4 policies × 5 yrs, veterans) × 8 variants | ≈ 8 s (diagnostic 4.5 s) |
| Comparison | `npm run quality:compare` | 16 paired seeds; policies × 10 yrs; 8 variants; 18,958 releases | **13.3 s** |
| Traces | `npx tsx scripts/quality-traces.ts` | 5 releases | < 1 s |
| Economy smoke (still green) | `npm run economy:smoke` | — | ≈ 4 s |

## Proposed compatibility matrix (audience / critic; ⚑ = contestable, please rule)

Grades are **editorial proposals**, per exact genre. The family in brackets is only for Star skill. The overall mix is close to the old random weights (A 11%, B 25%, C 37%, D 21%, F 7%, vs 12/25/33/20/10).

| Genre (Star family) | Zombies | Superheroes | Spies | Sports | Vampires | Time Travel | Pirates | Robots | Dinosaurs | Mythology |
|---|---|---|---|---|---|---|---|---|---|---|
| **Action** (Action) | B/C | A/B | A/B | C/C | B/C | B/B | A/B | B/C | A/C ⚑ | B/B |
| **Comedy** (Funny) | B/B ⚑ | B/C | B/C | A/B ⚑ | B/B | B/B | C/D | C/C | C/D | C/D |
| **Horror** (Scary) | A/B | D/D | D/F ⚑ | F/F | A/B | C/C | C/D ⚑ | C/C | B/C | B/B |
| **Thriller** (Scary) | B/C | C/C | A/A | D/D | C/C | B/A ⚑ | C/C | B/B | C/D | C/C |
| **Romance** (Romantic) | D/F ⚑ | C/D | C/C | C/C | B/D ⚑ | B/B | C/C | D/C ⚑ | F/F | C/C |
| **Drama** (Dramatic) | D/C ⚑ | D/C | B/A | A/A | D/D | C/B | C/C | C/B | F/F | C/B |
| **SciFi** (Action) | C/C | B/C | C/C | D/D | D/D | A/A | C/D | A/A | B/C ⚑ | C/C |
| **RomCom** (Funny) | D/F ⚑ | C/D | B/D ⚑ | B/C | C/D | B/C | D/D | D/D | F/F | D/D |

Notes on the flagged choices:
- **Zombie comedy is B/B** (it's a real subgenre).
- **Romance/RomCom + Zombies is D/F:** rare and creative, and the most likely cult candidates.
- **Romance + Vampires is B/D:** audiences love it, critics don't.
- **Horror + Spies is D/F.**
- **Action + Dinosaurs is A/C:** crowd-pleaser, critics lukewarm.
- **Thriller + Time Travel is B/A:** time-loop thrillers.
- **Romance + Robots is D/C.**
- **Drama + Zombies is D/C:** prestige zombie drama.
- **SciFi + Dinosaurs is B/C.**
- **Horror + Pirates is C/D:** ghost ships.
- **RomCom + Spies is B/D.**
- **Comedy + Sports is A/B.**

## Measured rating distributions (16 paired seeds; full tables in `reports/gate4q/compare/summary.md`)

Steps are cumulative, **one change at a time**. Columns: N · min · p10 / p50 / p90 · mean · % in 0–<4 / 4–<6 / 6–<8 / 8–10.

| Group | Old (random grades, D .90 / F .78) | + editorial matrix | + bounded variation | + D .80 / F .55 (**candidate**, = + cult) |
|---|---|---|---|---|
| Rookie first five, natural pairs | 80 · 4.57 · 5.01/5.76/6.11 · 5.65 · 0/75/25/0 | 6.21 mean · 0/13/88/0 | 6.21 · 0/21/79/0 | 80 · 5.74 · 5.93/6.24/6.45 · 6.21 · 0/21/79/0 |
| Rookie first five, poor pairs | 80 · 4.81 · 5.09/5.62/6.25 · 5.64 · **0**/79/21/0 | 4.72 · **0**/100/0/0 | 4.75 · **0**/100/0/0 | 80 · **2.95** · 2.98/3.85/4.70 · 3.78 · **73**/28/0/0 |
| low-budget-random-combo (all) | 496 · 4.55 · 5.40/6.26/7.07 · 6.24 · 0/36/64/0 | 6.37 · 0/24/76/0 | 6.34 · 0/28/72/0 | 496 · 3.03 · 4.38/6.40/7.31 · 6.14 · **8**/25/67/0 |
| poor-fit-chooser | 496 · 3.77 · 4.08/4.47/6.03 · 4.77 · 4/85/11/0 | 4.28 · 36/59/5/0 | 4.32 · 31/65/4/0 | 496 · **2.39** · 2.75/3.38/4.42 · 3.56 · **82**/14/4/0 |
| balanced | 478 · 5.02 · 7.33/8.41/9.37 · 8.34 · 0/2/29/69 | 8.53 · 0/2/22/76 | 8.57 · 0/2/21/77 | 479 · 3.08 · 7.23/8.71/9.60 · 8.48 · 1/3/20/76 |
| quality-first | 466 · 5.70 · 7.34/8.50/9.29 · 8.40 · 0/1/25/75 | — | — | 470 · 3.49 · 7.22/8.57/9.49 · 8.40 · 0/4/20/76 |

- **The matrix alone doesn't create duds.** Poor rookie pairs fall to about 4.7 but never below 4. The steeper D/F is what crosses the line.
- **Severity sensitivity, rookie poor pairs:** D .85 / F .65 gives mean 4.22 (36% below 4); D .80 / F .55 gives 3.78 (73%); D .75 / F .45 gives 3.34 (75%, min 2.41).
- **Good studios score slightly higher on the matrix** (balanced 8.34 → 8.48). Natural fits are now reliably natural, and visible-info agents learn them from their combo book. That's not a nerf, and nothing was tuned for it.
- **Audience vs critics:**
  - Random grades gave many big splits (balanced: |A − C| ≥ 2 on 12% of films). The editorial matrix gives few (≈ 1%), because most proposed pairs have neighbouring grades.
  - Large splits now come mainly from cult events (critics stay low) and the B/D pairs.

## The three systems, isolated (veteran studio after 8 years makes one extra movie; same state per row)

| Candidate, mean avg (n 24) | Best-fit Star | Cheapest Star | Best-fit, studio genre XP wiped | Rookie studio (n 80) |
|---|---|---|---|---|
| Natural pairs | 8.58 | 8.57 | 8.52 | 6.21 |
| Middling pairs | 8.66 | 8.65 | 8.58 | 5.66 |
| Poor pairs | **5.94** (min 4.50) | 5.93 | 5.90 | **3.78** (min 2.95) |

- **Crew experience is the biggest lever:** +2.2 to +3.0 points vs the rookie studio.
- **The pairing is second:** about −2.7 points poor vs natural at veteran level, −2.4 at rookie level. A great crew **mitigates but doesn't erase** a poor fit (5.9, not 8.6).
- **Star family fit and studio exact-genre XP barely register:**
  - **Star family fit: about +0.01–0.08.** Star points add to a Filming meter that's already saturating; even a fit-77 Star adds only +0.03 at 89/100 filming (trace 4).
  - **Studio exact-genre XP: +0.03–0.13.**
  - Both are wired correctly (tests prove family vs exact genre). They just weigh very little. That's the main design question this pass surfaces (decision D3); nothing was changed.

## Money by ACTUAL rating bin (movies, finished runs; payouts unchanged)

| Candidate bin | N | Studio loses all-in | Median all-in | Median studio direct cost | Partner loses | Partner ROI (share ÷ own ad spend) |
|---|---|---|---|---|---|---|
| 0–<4 | 511 | **0%** | **+$50K** | $62K | 0% | 1.70 |
| 4–<6 | 330 | 0% | +$95K | $63K | 0% | 2.46 |
| 6–<8 | 619 | 0% | +$207K | $63K | 0% | 2.92 |
| 8–10 | 721 | 0% | +$232K | $98K | 0% | 2.00 |
| *Info only: + Gate 4 audience levers*, 0–<4 | 348 | **97%** | **−$25K** | $62K | 4% | 1.22 |
| *Info only*, 4–<6 | 325 | 24% | +$21K | $63K | 6% | 1.48 |
| *Info only*, 6–<8 | 644 | 0% | +$112K | $63K | 0% | 2.11 |

**Low budget ≠ low quality.** The same minimum budget (~$62K direct) produces both a 2.95 dud (trace 1) and a 7.30 hit (trace 3). The difference is the pairing and crew experience, not money.

## Cult appeal (candidate)

- **Frequency:** 115 eligible releases → **13 events** (11% of eligible, about 0.6% of policy movies): 11 lifts, 2 breakouts. Mean audience **+2.40**; critics 0 by construction.
- **Who got them:** quality-first 6, low-budget 4, balanced 3, poor-fit-chooser **0** (its crews rarely reach craft 60, and novelty is used up after one try), rookie scenarios **0**.
- **Not a strategy.** Deliberately picking F pairs averages 3.56. A cult event needs a capable crew and a pairing nobody has tried, and it never repeats on the same pair.
- **Rookies can't trigger it** (their craft is about 50). See decision D4.

## Representative traces (`reports/gate4q/traces.md`; all reproduced from seeds)

1. **Genuine dud:** rookie Horror + Sports, seed 12, release 1, A 2.88 / C 3.02 = **2.95**. Pairing F/F (×0.55); a C/C pairing would have scored 5.36 (−2.41). The Star (fit 9) adds +0.03. Still **+$31K all-in**: Wolf's $33K of ads pulled 102K viewers.
2. **Ordinary rookie film:** Action + Superheroes A/B, **6.13**, +$148K.
3. **Cheap good film:** low-budget studio, natural pairing (A/B shifted to A/A by world variation), **7.30**, $62K direct, **+$256K**.
4. **High-scoring film:** Comedy + Vampires B/B, meters about 90, Funny-77 Star, **9.50** Hall of Fame, +$245K. The Star adds only +0.03; the pairing adds +0.54.
5. **Cult appeal:** quality-first Horror + Spies D/F. Hot Spies trend, chance 0.20, draw 0.199, craft 73.5. Audience 5.97 → **7.91**, critics stay at 4.19; the combo book still says D/F. +$252K.

## Confirmations

- **80% distributor bids** still read only visible information (combo book, preview of the work so far). A test mutates the hidden grades and the bids stay identical. Cult happens at release, after bids.
- **Contracts, TV seasons, Originals, firing and the engineer** run unchanged under the candidate. Tests show tv-first / mixed careers keep invariants and replay.
- **Trends, repetition fatigue, critic eras and TV twists** feed the same pipeline (twists still read `comboGrades`, now editorial).
- **Old outputs are untouched:** the legacy and Gate 4 economy results are byte-identical.

## Optional next gate (not run)

- **Fixing dud economics:** COMPARE with the candidate + the two Gate 4 audience levers as one proposal (about 15 s).
- **If D3 changes Star or XP weight:** a short re-measure of section 3.
- **No 200-seed or 25-year runs are needed.**
