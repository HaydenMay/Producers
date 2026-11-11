# Gate 4 — studio-risk economy, late distribution, fast validation: findings

> **Experimental, under TEST ASSUMPTIONS.** Nothing is locked. The canonical design handoff wasn't edited. Branch: `gate-4-economy-experiment`. Decisions: `docs/gate-4-economy-open-decisions.md`.

## Verdict (one paragraph)

The candidate removes the advance escalator **mechanically**: no cash ever arrives before sales, the studio pays every cost, cancellation sinks it, a $0 studio always recovers through contracts (0 stuck saves), and contracts give no Prestige. It doesn't yet create **financial** risk for films, though.

- **No studio-funded movie lost money all-in in any score band** (0 of 1,545 distributed movies in COMPARE).
- **Distributors never lose either.**
- **The bad-movie factory is the richest candidate studio** ($5.23M median after 10 years, vs $4.67M for `balanced`).

The cause isn't financing; it's the **audience model**. A distributed movie reaches 99% of its reach cap (median), because in-run word of mouth counts as positive for any score ≥ 5. Distributor ads then fill that cap, so revenue ≈ reach × $2 almost regardless of quality.

The sensitivity runs show **one small lever fixes the direction**: move the word-of-mouth turning point from 5 to 6.5. A second, stronger bad-reception decay creates real but survivable flops. See "smallest next tuning change".

Standard mode stays forgiving: 0 stuck saves, median weeks in the red 0–11, every policy recovers.

## What was implemented

| Piece | Where | Default |
|---|---|---|
| `economy.mode`: `legacy_advance` (every earlier gate) or `late_distribution` (candidate) | `config/baseline.json`; candidate in `config/gate4.json` | legacy |
| Candidate planning: the studio pays the base cost at 0% from its own cash. Only affordable plans are legal; a note explains why a movie can't start. No pitch, no advance, no lifeline. | `src/core/simulation.ts` | — |
| Casting at 40%: unchanged. Affordability uses studio cash (no reserve exists); the $0 Newcomer fallback is unchanged. | — | — |
| **80% distribution meeting** replaces the studio campaign. 2–3 seeded, fixed bids, each showing distributor, **its own ad spend**, the awareness that buys, reach, share of gross and reasons. One choice or self-distribute. Nothing is booked at signing. | `src/core/latedist.ts` `generateBids`, `chooseDistribution` | — |
| What bids can see: work so far (meter quality projected to completion), Star Fame, trend, IP fans, a combo already released (public combo book), a returning show's last published score. **Never hidden combo grades or final reviews** (test mutates the hidden grades and the bids don't change). | `previewSignals` | — |
| **Reach vs ads:** reach = ceiling (reach cap); ads = awareness (1.2 × (1 − e^(−ad/$40K))) feeding the existing opening formula. Separate, no double count. Studio-wide buzz (studio ads) unchanged. | `latedist.ts`, `production.ts` | — |
| Self-distribution: reach 0.22 (the old self-fund reach), no ads, keep 100%. Always offered. | — | — |
| TV seasons and limited series: studio-funded; **a fresh meeting every season** (variant-A style). Show history and fans inform bids. Weekly episode earnings, no season cap, both fatigue experiments untouched. | — | — |
| Streaming Originals: studio-funded, **no distributor meeting**; they keep the studio-paid campaign at 80% (OPEN). Traditional releases still join the catalog after their run (tested, no double count). | — | — |
| Cancellation: always allowed; everything spent is sunk; no repayment entry. | — | — |
| Trust: the distributor's return is measured against **its own ad spend**. | `src/core/distribution.ts` | — |
| **Work-for-hire contracts:** 4 fixed visible jobs (Commercial edit 6 wks/$9K, Script polish 8/$12K, Network pilot services 12/$30K, Full production services 16/$56K) with staff/skill requirements; the starter needs nothing. **The client reimburses payroll + upkeep every contract week** (`contract_labor`) and pays the fee on delivery (`contract_fee`). Staff gain XP/stats in the job's meters. Uses the one production slot. **Zero Prestige, no IP, fans, release, Hall of Fame or catalog.** | `latedist.ts`, `economy.contracts` | off in baseline, on in gate4 |
| Per-release accounting (identical formula for both modes): studio direct, payroll during production, studio gross, **all-in net** vs old direct-only net, peak drawdown, distributor stake/income/net/ROI. | `src/batch/econ.ts` | — |
| Agents: a pass-through adapter (legacy unchanged) answers the new decisions with visible-info profiles. Most policies keep a "runway" (only start a movie they can fully fund, including payroll). The bad-movie factory and famous-star are reckless. New adversarial `contract-farmer`. | `src/agents/economy.ts` | — |
| Sensitivity knob `audience.qualityPivot` (default 5 = identical): the score where in-run word of mouth turns positive. | `src/core/audience.ts` | 5 |
| Minimal web UI: "Load Gate 4 candidate economy", contract buttons, a distribution-meeting table, contract progress, the Streaming Original checkbox. | `src/web/main.ts` | — |

## What actually ran (nothing below is claimed without running)

| Check | Result |
|---|---|
| `npm run typecheck` | clean |
| `npm test` | **118 passed** (106 earlier + 11 Gate 4 edge cases + 1 Gate 4 UI smoke) |
| **Legacy byte-identity vs the previous commit** (`git worktree` of `7a8fba4`) | Gate 3 config, 30 seeds × 8 policies × 15 yrs: `careers.csv` + `great.csv` **identical**. Movie baseline, 50 seeds × 7 policies × 20 films: **identical**. Three stored Gate 3 decision logs replay to an **identical full state** (SHA-1 over everything except the config hash, which changes because new config keys exist). |
| Invariants | 0 violations in all 656 COMPARE careers and all smoke careers |
| FAST, COMPARE, sensitivity grid, traces | Ran (times below) |
| GATE (40 seeds × 15 yrs) | **Not run** (only on request) |

### Edge cases (`tests/integration/gate4.test.ts`, all passing)

- A $0 two-staff studio can't start a movie, takes the starter contract, ends at exactly +$9,000 and 0 Prestige, and its staff gain XP.
- A studio at −$50K regains solvency with 13 repeat starter contracts, then a movie is legal again. Payroll never lowers cash during a contract.
- An 8/8 studio at −$100K dismisses one person, contracts its way back, and hires its Software Engineer. No deadlock.
- A whole contract-farming career has 0 Prestige, 0 IP and 0 releases.
- With exactly the base cost and nothing for a Star, the $0 Newcomer is offered and castable.
- Bids:
  - differ in ad spend and share;
  - are identical when the hidden combo grades are changed;
  - let you pick only one option or self-distribute;
  - book no cash and no advance at signing.
- If no distributor qualifies, only self-distribution is offered; replay is identical.
- A self-distributed flop loses all-in (accounting checked against its parts); a wide-release hit earns more than $150K more.
- Cancelling: cash unchanged, nothing refunded, no repayment.
- Formats:
  - TV S1 and S2 each get a meeting; S2's preview knew S1's published score.
  - Limited series get a meeting.
  - An Original skips the meeting and earns no box office.
  - The catalog fills with no duplicates.
- Policy careers (mixed, streaming-pivot, bad-movie factory, tv-first; 10 years) keep every invariant, including firing and the engineer, and replay exactly.

## Time spent (measured on this machine, 2 cores)

| Mode | Command | Scope | Elapsed |
|---|---|---|---|
| **FAST** | `npm run economy:smoke` | typecheck + 11 edge-case tests + 4 seeds × 3 policies × 4 yrs, legacy vs candidate | **≈ 5 s** wall (batch part 0.4 s) |
| **COMPARE** | `npm run economy:compare` | 16 paired seeds × 6 policies × 10 yrs × 7 variants (656 careers) | **14.4 s** batch, ≈ 20 s wall |
| Sensitivity grid | `npx tsx scripts/economy-sens.ts` | 8 settings × 3 policies × 16 seeds × 10 yrs | 7.9 s |
| Traces | `npx tsx scripts/economy-traces.ts` | 3 branched meetings, 2 contract stories, 2 TV shows | 0.8 s |
| Full test suite | `npm test` | 118 tests | ≈ 15 s |
| GATE | `npm run economy:gate` | 40 × 6 × 15 yrs × 2 variants | not run |

**The short loop is practical.** Every finding in this gate came from runs under 20 seconds. No profiling was needed and no engine code was changed for speed. COMPARE writes `careers.jsonl` / `releases.jsonl` line by line as it goes (`releases.jsonl` is about 7 MB, so it's git-ignored and regenerated in 20 s).

## Observations

### Who loses money (COMPARE, finished runs, 10 years; full table in `reports/gate4/compare/summary.md`)

| Format, score band | Legacy: studio loses all-in / median all-in / partner loses | Candidate: same | Candidate, pivot 6.5 + gross ×0.8 |
|---|---|---|---|
| Movie 4–6 (n ≈ 220) | 3% / +$89K / 82% | **0% / +$104K / 0%** | 4% / +$31K / 0% |
| Movie 6–8 (n ≈ 600) | 0% / +$197K / 40% | 0% / +$195K / 0% | 1% / +$72K / 0% |
| Movie 8+ (n ≈ 740) | 0% / +$311K / 0% | 0% / +$228K / 0% | 0% / +$141K / 0% |
| Limited series 6–8 | 0% / +$298K / 19% | 0% / +$239K / 0% | 0% / +$78K / 0% |
| TV season 6–8 | 0% / +$437K / 39% | **8% / +$222K / 0%** | 74% / −$27K / 40% |
| TV season 8+ | 0% / +$441K / 32% | 6% / +$226K / 0% | 33% / +$53K / 11% |
| Streaming Original | always negative (value is subscribers) | same | same |

- **No movie in any run scored below 4.0**, so there's no "<4" row. The bad-movie factory's films land between 4.5 and 6.
- **Legacy hid risk in the distributor:** partners lost on 82% of mediocre films. In the candidate the studio carries the risk, but the sales are too reliable for it to bite.
- **TV is the one format where studio-funded losses already happen** (6–8% of seasons). Big payroll × long seasons can outrun even a good show (traces).

### Careers (COMPARE, median of 16 seeds, 10 years)

| Policy | Legacy end cash | Candidate end cash | Candidate earnings/week | Candidate Prestige | Contracts (median count) |
|---|---|---|---|---|---|
| balanced (movies) | $7.13M | $4.67M | $9K | 6,475 | 3 |
| quality-first | $7.22M | $4.54M | $9K | 6,120 | 5 |
| **cheap-duds (bad-movie factory)** | $4.27M | **$5.23M** (richest) | $10K | 150 | 1 |
| tv-first | $5.40M | $1.77M | $3K | 3,065 | 3 |
| mixed (+ streaming) | $5.97M | $2.94M | $5K | 4,690 | 3 |
| contract-farmer | — | $0.89M | **$1K** | **0** | 86 |

- **Stuck saves: 0** in every variant.
- **Weeks in the red:** median 0–11 in the candidate; deepest hole −$45K.
- **TV/streaming are still reachable:** TV unlocked 100%, streaming live 100% for mixed within 10 years.
- **Every policy takes a few contracts early.** The $120K start funds one movie, and the runway rule bridges the wait for its sales.

### Distributor ads vs openings (candidate, distributed movies)

- **Ads move openings a lot:** the low-ad third (median $46K) opens to 55.8K viewers, the high-ad third ($168K) to 106.3K.
- **But they don't decide total sales, because the reach cap saturates:** median unique viewers = 99% of reach; 66% of releases hit ≥ 95%.
- **Halving ad effectiveness** only trims mediocre-film profit ($104K → $65K).
- **With the word-of-mouth pivot at 6.5,** saturation falls to 42% (median 85%), and ad spend stops guaranteeing sales after bad reception.

### Contracts

- **Contracts pay about $2K per contract week** after payroll (the client covers labor).
- **The farmer earns $1K/week** over its career vs $9–10K/week for movie studios, and **doubling every fee still only reaches $3K/week**.
- **Headcount farming is limited by the existing Prestige-gated capacity ladder:** a farmer earns 0 Prestige, so it stays at 4 staff.
- **Even a weak *distributed* film beats the best contract:** the weak-film trace nets +$82K in 16 weeks via Wolf, vs $3.5K/week from Full production services.

### Sensitivity grid (`reports/gate4/sensitivity.md`; 16 seeds, 10 years, movie policies)

| WoM pivot | Bad-reception decay | Gross × | Mediocre (4–6) movies losing | Median all-in 4–6 / 8+ | Bad-movie factory vs quality studios |
|---|---|---|---|---|---|
| 5 (current) | 0.35 | 1.0 | 0% | $111K / $228K | **richest** |
| 5 | 0.35 | 0.8 | 0% | $68K / $142K | richest |
| **6.5** | 0.35 | 1.0 | 0% | $64K / $217K | **poorest** |
| **6.5** | **1.0** | 1.0 | **6%** | $44K / $219K | **poorest** |
| 6.5 | 1.0 | 0.8 | 28% | $13K / $138K | richest (overheads dominate) |

- **Cutting gross alone shrinks every margin but keeps the factory on top.** Its 2-person payroll wins once all films earn less.
- **The pivot is what separates quality from duds.**

### Traces (`reports/gate4/traces/`, from seeds)

1. **`three-movies-branched.md`**: one production, branched at the 80% meeting into every bid and self-distribution.

   | Film (final avg) | Studio cost | Options → studio all-in net |
   |---|---|---|
   | Weak (5.34) | $101K | Starlight −$11K · Wolf +$82K · self-distribute −$57K (only $44K gross) |
   | Ordinary (5.96) | $126K | Starlight −$2K · Wolf +$96K · self −$56K |
   | Hit (9.28) | $227K | Meridian +$202K (partner +$237K) · XYZ +$192K · self −$53K (sells out a tiny cap) |

   The same reviews come out in every branch: distribution changes money, never quality.
2. **`contracts-struggling-studio.md`**: a TV studio (lever variant) repeatedly dips to about −$42K after each limited series and climbs back with contracts, reaching TV at year 3.7 with 300 Prestige earned only from its own shows. The default-candidate studio covers an early −$45K dip.
3. **`tv-season-mistake.md`**: a tv-first show earns +$227K to +$470K a season for 9 seasons; Season 10 (avg 5.76, 20 episodes, $324K payroll) **loses $104K**. A different show's Season 1 loses $92K despite an 8.0, because the payroll was high and the reach modest.

### Regressions and exploits found

- **Exploit (design-level, not a code bug): the bad-movie factory.** Cheap Star, the biggest ad bid, 2 staff, no training, still the richest. Fixed by the pivot lever, not by financing.
- **Distributors are a risk-free middleman in the candidate** (0% lose). Their ads are small next to their share of a saturating run, so trust rarely falls. See decisions.
- **Self-distribution is a trap under current numbers.** Agents never chose it in 1,545 movies; it only makes sense if reach caps stop saturating.
- **TV is much weaker under studio funding** (tv-first $1.77M vs $5.40M), because legacy TV advances were large. Not a bug; a designer call.
- **No cheap-dud loophole through contracts, no contract farming beyond about $1K/week, and starting originals is never blocked** (contracts always bridge). No code regressions: legacy is byte-identical.

## Smallest next tuning change

Change **`audience.qualityPivot` from 5 → 6.5**. One number, already wired, default unchanged.

- It makes quality the thing that sells past the opening.
- It ends the duds-are-richest result (bad-movie factory becomes the poorest).
- It cuts reach saturation from 66% to about 41%.

If real flops are wanted, add **`audience.diffusion.badInterestDecay` 0.35 → 1.0**: 6% of mediocre films then lose money, with the median still +$44K. Leave gross per viewer, ad formula and contract fees alone for now.
