# Gate 4 — open decisions for the designer

> Evidence: `docs/gate-4-economy-findings.md`, `reports/gate4/compare/summary.md`, `reports/gate4/sensitivity.md`, `reports/gate4/traces/`. Every number is a TEST ASSUMPTION. The candidate is reversible: `economy.mode: "legacy_advance"` restores every earlier gate byte-for-byte.

## Answers to the five questions

1. **Are the 80% bids interesting, and do they change income?**
   - **Yes, a lot.** For the *same* weak film, the choice was worth −$57K (self) / −$11K (Starlight) / +$82K (Wolf). For a hit it was −$53K / +$192K / +$202K.
   - The trade-off reads clearly at the table: ad spend vs reach vs share.
   - Two weaknesses:
     - With today's audience numbers the widest bid nearly always wins (agents never self-distributed).
     - Distributors never lose money, so the "they bet on you too" side isn't felt.
2. **How often do weak or mediocre productions lose money after payroll?**
   - Under the candidate as configured: **movies never** (0% of 4–6 films), **TV seasons 6–8%**.
   - The losses that do happen are survivable (−$45K deepest career hole; TV season −$104K inside a $1.7M studio).
   - With the pivot lever (+ stronger bad-reception decay), 6% of mediocre films lose, median still +$44K. "Engaging but survivable" seems within one or two numbers.
3. **Can a $0 studio recover without Prestige, and are contracts less lucrative?**
   - **Yes and yes.** A $0 or −$50K studio always recovers (0 stuck saves; tested).
   - Contracts net about $2K per contract week; a pure farmer earns $1K/week vs $9–10K/week for movie studios.
   - Doubling every fee still leaves farming at $3K/week, and a farmer never earns the Prestige needed to grow past 4 staff.
4. **Is the faster workflow reducing time without losing confidence?**
   - **Yes.** FAST takes about 5 s (typecheck + 11 edge-case tests + smoke), COMPARE about 20 s, and the sensitivity grid 8 s.
   - Every run checks every invariant.
   - Legacy byte-identity was proved once against the previous commit. Rerun that proof only when engine code changes.
   - No 200-seed matrix was needed.
5. **Smallest next tuning change?**
   - **`audience.qualityPivot` 5 → 6.5** (one number, already wired). This alone flips the bad-movie factory from richest to poorest.
   - Then, only if real flops are wanted, **`audience.diffusion.badInterestDecay` 0.35 → 1.0**.
   - No new mechanics.

## Decisions needed (ranked)

| # | Decision | Options | Recommendation / evidence |
|---|---|---|---|
| D1 | **Word-of-mouth turning point** (the escalator's real cause) | 5 (now) · 6.5 · 6.5 + bad-reception decay 1.0 | **6.5**, test 6.5 + 1.0 next. At 5, every film ≥ 5 sells out its reach cap (99% median), so quality barely matters to money. |
| D2 | **Start cash in candidate mode** | $120K (TEST, funds one movie + payroll) · $40K (old) + start with a contract · first production subsidised | $120K keeps the first film possible; every policy still takes 1–5 contracts early. OPEN. |
| D3 | **Distributor risk**: they never lose (ads are small next to their share) | leave · raise ad budgets / lower shares so overbidding a weak film costs them · add a fixed distribution cost per release | Matters only after D1 (with saturation gone, overbids will start to lose). Re-measure after D1. |
| D4 | **TV under studio funding** is much weaker (tv-first $1.77M vs $5.40M legacy; 6–8% of seasons lose) | accept (TV = bigger, riskier bets) · lower per-episode cost · broadcaster license fee (would be an advance in disguise; excluded by brief) | Accept for now; it finally makes renewal a money question (Gate 3 follow-up D5). OPEN. |
| D5 | **Self-distribution reach** 0.22 | keep (a trap now: never chosen) · raise · keep but let it improve with Prestige/streaming | Revisit after D1; only meaningful once reach caps stop saturating. |
| D6 | **Streaming Originals' marketing**: still a studio-paid campaign at 80% | keep · no marketing (studio buzz only) · platform-funded promotion | Kept so Originals aren't silently weakened. OPEN. |
| D7 | **Contract list and fees** (4 jobs, $9K–$56K, client covers payroll + upkeep) | keep · skill-scaled fee · deadlines | Keep lean; nothing in the data needs more. |
| D8 | **Cancellation in candidate**: always allowed, everything sunk | keep · forbid after 80% | Keep. |
| D9 | **Agent "runway" rule** (sensible policies only start a movie they can fully fund) | agent-only assumption | Tells you what a careful player does; reckless policies don't use it. |

## Logged, not touched (separate open items from earlier gates)

TV Prestige pace (Gate 3 follow-up D6); a viewer-fatigue reach pool (D1 there); Hall of Fame rate; severance (`staffing.fireCost` still $0); critic curves (Gate 2.6). None changed in this gate.
