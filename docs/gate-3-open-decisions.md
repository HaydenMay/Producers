# Gate 3 open decisions (ranked)

**BLOCKER** = a design call that changes rules or structure (or leaves an unbounded state); the harness can only offer evidence. **TUNING** = numeric; any value works mechanically. Evidence references point to `docs/gate-3-findings.md` (§) and `reports/gate3/`.

## Blockers (designer call needed)

| # | Decision | Tested assumption | Recommendation | Evidence |
|---|---|---|---|---|
| B1 | **TV financing**: per-season pitch (A) or continuing partner (B)? | Both implemented; A is the default | **A**: one financing rule shared with movies, a per-season market signal, the player keeps agency; IP fans already raise returning-season offers. Optionally label the incumbent's offer "your partner" for legibility | §3.5; `G3_contract`; `contract-ab-disclosure.md` (B: TV net per production week −10 to −33%, same Prestige) |
| B2 | **Can a show run forever?** Fatigue caps at 35%, so a fatigued show stays renewable (≈ 6.3 avg) indefinitely | Cap 35% | Decide among: (a) no cap (fatigue keeps growing until the show falls below 4.0), (b) keep the cap and accept endless shows, (c) the handoff's Final Season proposal. I lean (a): shows end naturally, no new system | §3.3; C2 (28 seasons); `TV_SEASON_TOO_LONG` in 213/2,400 careers |
| B3 | **How deep can cash go negative**, and can payroll ever shrink? No floor and no firing → a bleeding forever-show drove 2/200 careers to −$0.6M / −$1.2M | Unbounded; no firing | Decide a floor/recovery rule and whether firing exists (GDS allows it). Not changed here | §3.3; `MIXED_ECONOMY_SOFTLOCK` at 25 years |
| B4 | **Software Engineer and the staff cap**: the engineer takes a normal slot, and with no firing a full studio can't build streaming | Uses a slot | Either the engineer sits outside the 4/6/8 cap, or firing exists (ties to B3) | §3 interactions; agents reserve a slot to work around it |
| B5 | **Limited series vs a 5-episode TV pilot**: at current numbers a limited series earns ~1.9× a 5-episode season per production week | LS 6 eps @ $0.57 vs TV @ $0.32 per viewer-episode | Keep both identities (LS = self-contained, no renewal, no fatigue; TV = long-term fans/money). Decide whether the TV pilot should be weaker (a stepping stone) or a peer | §1, §3.8 |
| B6 | **Prestige pace of TV studios**: Prestige per release + long seasons + fatigue → TV-first ≈ 40–60% of a movie studio's Prestige | Per-release scopes (hybrid) | Accept (matches "20 episodes ≠ 4× Prestige"), or add TV-specific commercial/IP milestones. Decide alongside the TV unlock role of Prestige | §3.1, §3.2 |
| B7 | **Which Gate 2.6 critic curve** (still unapproved), now that TV is in: show fatigue and tougher critics stack | Curves off | If adopting combo_D, check TV greatness: tv-first careers with zero HoF go 23% → 62% at 15 years. combo_B is the gentler choice for a TV-heavy game | §3.6; `G3_critics` |
| B8 | Hall of Fame rounding boundary (8.995 counts) | Preserved; counted separately | Confirm or switch to the unrounded mean | §4 |
| B9 | Original TV pacing: weekly (implemented) or the binge-drop proposal | Weekly | Decide before balancing Originals' acquisition | — |
| B10 | Related work from a limited-series IP (sequel/spinoff into another format)? | Not allowed | Decide | T12 |

## Tuning (numbers only; current values in `docs/gate-3-assumptions.md`)

| # | Item | Current | Note from the data |
|---|---|---|---|
| N1 | Subscription fee / reachable market / operating cost | $0.50 per sub-week; 120K; $8K + $0.15/sub | **The fee is the dominance knob**: 1.5× makes streaming dominate (mixed 25-year cash $24M → $42M) |
| N2 | Acquisition (Original conversion), launch pulse | 35%; ≤ 15K | 1.5× saturates the market in 58% of careers by 25 years |
| N3 | Churn base, catalog retention, freshness, evergreen, quiet drift | 1.2%/wk; 0.65; 2 yrs; ×2.5; ≤ 2× | Idle 18 months ≈ −50% subscribers (C7). Retention max 0.8 → +7–10% subscribers |
| N4 | TV costs, duration, money per viewer-episode | $15K + $15K/ep; 6 + 2 wk/ep; $0.32 | Calibrated: 10 eps ≈ movie parity; 20 eps 1.3× |
| N5 | Episode viewer model (premiere 50%, returning share, word of mouth) | §T7 | Bad shows decline every episode; great under-marketed shows grow within reach |
| N6 | Episode caps 5/10/15/20 at 0/600/1,800/3,500 Prestige | — | tv-first reaches 20 episodes around years 11–12 |
| N7 | TV unlock (Prestige 300 + $150K); streaming unlock (Prestige 2,500 + $600K + 8 titles) | — | TV ≈ year 2.5; streaming live ≈ years 6.4–7.3; no `DELAYED_STUDIO_PROGRESSION` |
| N8 | Hiatus grace/penalty; announcement boost/cost/decay | 78 weeks, −35%/yr, floor 0.4; +0.35, $15K, 4%/wk | Both effects are small next to marketing and Star Fame (C4); raise them if hiatus should matter |
| N9 | Twist thresholds and effects | ±0.5 grade; fatigue −2 seasons; fans −25% | C3 shows a clear good/bad split |
| N10 | Renewal boundary inclusivity | 4.0 inclusive | Named assumption (handoff says 4.0 renewable) |
| N11 | Contract B's advance function (if B is chosen) | 0.9 base cover ± 0.3 × (ROI − 1), [0.5, 1.4] × trust | Currently less generous than the A market |
| N12 | Carried: first-film economy, self-fund reach, staff upgrade gates, `PRESTIGE_TOO_FAST` threshold | Unchanged | Open since Gate 2.5/2.6 |
