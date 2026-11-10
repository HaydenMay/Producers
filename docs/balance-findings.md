# Balance findings (from executed runs)

> Gate 2 results. Gate 2.5 follow-ups (staff cap, legs, Prestige scope, self-funding, first-film economy) are in `docs/gate-2-5-findings.md`.

> Every number below comes from harness runs in `reports/`. All inputs are **provisional** (see `docs/assumptions-register.md`). Findings are evidence for the designer, **not** design changes. Nothing here has been applied to the game design or to `config/baseline.json`.

**Runs used:** baseline config `5355fe52`, ruleset `v9.61-movie-kernel-0.1`, movies only.
- `batch-baseline-s100-p1` — 100 seeds × 7 strategies × 1 production
- `batch-baseline-s1000-p5` — 1,000 seeds × 7 × 5
- `batch-baseline-s1000-p20` — 1,000 seeds × 7 × 20 (main run)
- `batch-baseline-s200-p50` — 200 seeds × 7 × 50
- `batch-baseline-s1000-p50` — 1,000 seeds × balanced/cheap-duds/quality-first × 50
- `batch-baseline_distribution_selfFundReach_0_35-s200-p20` — self-fund reach test
- Three paired-seed comparisons (same seeds, one parameter changed)

Invariant violations across all runs: **0** (7,000 + 7,000 + 1,400 + 700 careers).

## Recommendations table

| # | Issue | Observed data | Likely cause | Proposed adjustment (to test, not to lock) | Risks | Designer decision needed? |
|---|---|---|---|---|---|---|
| F1 | **Quality inflation is driven by team size, not stat growth** | P20: median share of late releases scoring 8+ is 0.63 (balanced) and 0.75 (quality-first); 0 for every non-hiring policy. Balanced avg score climbs 5.6 → 8.3 over 20 films, with the biggest jump at film 4 (6.2 → 7.2), when it hires. **Controlled test** (hiring disabled, 200 paired seeds, P20): late 8+ share 0.63 → 0.25 and 0.75 → 0.25; Prestige 1,670 → 760 and 2,525 → 950. Halving staff stat growth (P50) barely moved it (0.70 → 0.65, 0.85 → 0.80) but cut cheap-duds cash 27% and famous-star 25%. Doubling the era bar (P50) cleared the QUALITY_INFLATION flag (0.70 → 0.60, 0.85 → 0.75) at a broad Prestige cost (self-funder 2,255 → 530). | Every staff member adds points to every meter (GDS rule), so meter points scale ~linearly with headcount. Hiring costs $20K against ~$700K/yr income. | Test one of: diminishing returns per extra staff member on a project; a production crew cap; or base cost that grows with crew size. Then re-tune the era bar. At 50 films (1,000 seeds, 3 policies), QUALITY_INFLATION fired in 1,926/3,000 careers and PRESTIGE_TOO_FAST in 1,241/3,000 (> 400 Prestige/yr). | Any per-head cap changes the GDS "bigger team = better games" feel. | **Yes**: v9.61 says all staff contribute but doesn't say how quality scales with team size. |
| F2 | Surplus farming is possible but clearly less efficient (**working as intended**) | P20: cheap-duds median end cash $1.86M vs balanced $4.71M (39%); P50: $5.54M vs $14.76M (38%). Surplus is 13–15% of cheap-duds income vs 3% for balanced. 74% of cheap-duds careers have zero Prestige at P20. Distributor ROI 0.70 vs 1.9; trust 2.46 vs 4.0. SURPLUS_FARMING_DOMINANT never fired. **Early, it's close:** at P1, cheap-duds ends at $83K vs balanced $120K (69%). | Base cost keeps surplus modest; weak films earn less, win no Prestige or fans, and erode trust. | None. Optionally watch the first 1–3 films, where the gap is smallest. | — | No |
| F3 | **Self-funding is a dead strategy before streaming** | P20: self-funder median end cash $250K vs $4.71M for balanced; 14 negative-cash weeks median; 8/1000 careers spend 52+ weeks negative (EARLY_SOFTLOCK, all self-funder). Distributor ROI on its occasional deals is 0.32. At P1 its cash/year is negative (−$17.5K). | Self-fund reach 0.22 vs 0.30–1.00 for distributors: keeping 100% of a small gross can't cover base + Star + campaign + payroll. Policy caveat: this strategy self-funds whenever cash ≥ base + $50K. | **Tested:** `selfFundReach` 0.22 → 0.35 (200 seeds, P20) lifted self-funder cash $250K → $902K and Prestige 150 → 623, but it's still DEAD (19% of balanced). Reach alone doesn't fix it; next, test reach together with a smarter self-fund policy. | Too strong and self-funding becomes the obvious choice once rich (the risk v8 fixed). | **Yes**: how weak should self-funding be before streaming? |
| F4 | **Per-IP Prestige scope punishes franchises** | P20: franchise-builder Prestige median 175 vs balanced 1,640, although its cash is 76% of balanced and its fans are the 2nd highest (37.5K). | `repeatScope = perIP` (Open): a sequel can't re-earn a milestone its IP already won. New-IP strategies keep collecting. | Compare `perRelease` and a hybrid (career milestones once, quality milestones per release) with the same seed bank. | perRelease reopens short-project Prestige farming (v9.61 §19B). | **Yes**: the repeat rule is Open in v9.61. |
| F5 | Famous Stars pay back in money, not in Prestige (**working as intended**) | P20: famous-star cash per release $140K vs cheap-duds $91K (STAR_PRICE_NO_VALUE did not fire); its scores (A 6.32 / C 6.36) are no better, and 55% of its careers win no Prestige. | Fame → viewers only (LOCKED). This policy also never hires, which caps its quality (see F1). | None. | — | No |
| F6 | First movie is mediocre, as intended, but very profitable | P1: median avg score 5.6–5.7 across policies; nobody fails to finish; but balanced ends film 1 at $120K from a $40K start (cash/year $149K). | A friendly advance covers base cost + Star; a mediocre film still grosses ~$200K at $2/viewer. | If the first hour should feel tighter, test a lower `world.grossPerViewer` or higher payroll *together with* starting cash. | Too tight makes the tutorial film feel bad. | **Yes**: starting economy (starting cash, first-film result) is Open. |
| F7 | Distributor economics and trust behave sensibly | Decent films repay distributors (balanced ROI 1.2 at P5, 1.9 at P20); duds don't (0.6–0.7). Trust tracks it; DISTRIBUTOR_TRUST_SPIRAL fired in 0/7,000 careers. | ROI + quality trust formula (A6). | None yet; revisit when TV deals exist. | — | Formula is Open (A6), but nothing is broken. |
| F8 | High reviews with low sales are always explained | P20: 1,288 releases scored 7.5+ with bottom-20% gross. 1,286 were explained by small reach and 2 by low awareness; 0 were unexplained. | Causal chain (LOCKED) holds. | None. | — | No |
| F9 | Correctness | 0 invariant violations. The diagnostics caught both injected bugs (advance counted as revenue → `GROSS_NOT_FROM_SALES`; Fame leaking into scores → `SCORE_NOT_CAUSAL`). Replays are exact. | — | — | — | No |

## Worked cases

- **Success:** `reports/sim-seed84-quality-first-20.md`: 20 films, $4.91M, Prestige 3,350, every late film 8+ (also the inflation watch case).
- **Failure:** `reports/sim-seed38-self-funder-20.md`: 68 negative-cash weeks, $280K after 6.4 years, mostly tiny self-funded releases.
- **Five-film audit:** `reports/sim-seed42-balanced-5.md`: full waterfall, quality trace, weekly legs, XP, Prestige, fans and trust for every release (the first release is the single-production trace).
- **Surplus farmer:** `reports/sim-seed58-cheap-duds-5.md`.

## Caveats

- Strategies are simple heuristics using visible information, not optimal play. A smarter self-funder or famous-star policy could do better.
- Only movies are modelled. TV and streaming could change every money and Prestige conclusion (Gate 3 not built).
- Hiring is confounded with strategy in the main batch (only balanced and quality-first hire). The controlled hiring-off comparison is the clean evidence for F1.
