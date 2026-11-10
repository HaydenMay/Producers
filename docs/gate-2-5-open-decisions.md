# Gate 2.5 open decisions

Labels:
- **LOCKED DESIGN**: already decided in the design handoff; not reopened here.
- **TEST ASSUMPTION**: a number or shape the harness uses so tests can run; free to change.
- **RECOMMENDATION**: what Gate 2.5 evidence supports. It needs designer approval and has **not** been written into the design handoff.
- **OPEN**: undecided; no recommendation yet, or it needs a design call the data can't make.

Evidence references point to `docs/gate-2-5-findings.md`.

## Not reopened (LOCKED DESIGN)

| Item | Status |
|---|---|
| One production at a time; the whole studio staff works on it (no per-project crew caps, benching or diminishing per-worker output) | LOCKED DESIGN |
| IP-level fans (fans belong to the IP; spinoffs inherit part) | LOCKED DESIGN |
| Full surplus retention (unspent advance becomes studio cash at completion) | LOCKED DESIGN |
| No bankruptcy / fail state; bad play means slower progress | LOCKED DESIGN |
| Flop rule: flops hurt Star relationships; replacing a Star in an established direct-sequel role hurts; picking randomly rolled audition Stars never hurts | LOCKED DESIGN |
| Star price is Fame-based (level/skill never raise it) | LOCKED DESIGN |
| Runs are finite and bounded by reach | LOCKED DESIGN |
| Critics drive early weeks, audience drives later weeks | LOCKED DESIGN |

## Approvals needed now

| # | Decision | Label | Proposal | Evidence |
|---|---|---|---|---|
| 1 | Studio-wide headcount cap, engine-enforced | **RECOMMENDATION** | Start with 2 staff, capacity 4; upgrades to 6, then 8; explicit upgrade action with cash + Prestige triggers | A: stops runaway hiring (uncapped balanced ends −$5.4M at 50 films); hiring stays valuable (fixed 8 vs 4: +57% Prestige at 20 films) |
| 1a | Ladder shape 4→6→8 rather than 4→5→6→7→8 | **RECOMMENDATION** | 3 steps | A: the 5-step ladder costs ~$0.7M more for the same Prestige |
| 1b | Upgrade costs $250K / $750K; Prestige gates 200 / 1,000 | TEST ASSUMPTION | Keep for now; refit after #3 | Gates interact with the Prestige scale (C) |
| 2 | Weekly legs: diffusion model (strong reception can grow weekly viewers, capped by reach) | **RECOMMENDATION** | Adopt `diffusion` | B: worked case i peaks in week 8; hype + bad reviews (ii) declines every week; tiny reach caps an excellent film (v) |
| 2a | Diffusion parameters (open 0.30, watch rate 0.30, quality weight 0.25, critic buzz 0.12, word of mouth 2.0, decay 0.12 / bad decay 0.35) | TEST ASSUMPTION | Keep | B |
| 2b | Feedback text must state the true week-over-week direction | **RECOMMENDATION** (already implemented and invariant-checked) | Keep | `FEEDBACK_UNTRUE` = 0 across 127K careers |
| 3 | Prestige repeat scope | **RECOMMENDATION** | **Hybrid**: craft milestones per release; first Hall of Fame once per career; commercial milestones (IP lifetime gross / viewers) once per IP | C: per-IP gives franchise-builder 225 Prestige at 20 films; hybrid 2,225; repeat-farmer never leads |
| 3a | Hybrid milestone amounts, including new IP gross $5M (+150) and first Hall of Fame (+100) | TEST ASSUMPTION | Keep | C |
| 4 | Self-funding reach before streaming | **RECOMMENDATION** (not applied) | 0.22 → **0.55** (upper bound 0.60) | D: best in 0% of pitches at ≤ 0.50, 7.9% at 0.55, 33.9% at 0.60, 94% at 0.70 |
| 5 | First-film economy | **RECOMMENDATION** (not applied) | **S1**: gross $1.50/viewer, start cash $40K, upkeep $600 → first film nets ~+$43K; 81% can self-fund film 2; nobody ends negative | E. Rerun COMBINED before locking. S0 (current) is acceptable if the first film should feel like a big win |

## Still OPEN (design calls the data can't make)

| # | Question | Why it matters | Data so far |
|---|---|---|---|
| O1 | **Late-game quality inflation.** How fast should the era bar rise? | Candidate film-50 average 8.74 (historical 8.28); `QUALITY_INFLATION` in ~42% of 20-film careers. Headcount isn't the cause. | Gate 2 F1: era bar 0.08/yr clears the flag. Not changed here (no preemptive growth nerfs). Recommended next experiment. |
| O2 | **Should cheap sequels of a big IP out-earn quality films?** | repeat-farmer has the highest 50-film cash ($13.57M) under the candidate, though not the highest Prestige | No anti-exploit rule added. Existing levers: sequel repetition fatigue, IP fan decay. |
| O3 | **Prestige pace target**, and the `PRESTIGE_TOO_FAST` threshold (400/yr, fit to per-IP) | Fires in 3,264 / 9,000 candidate careers at 20 films; also sets where upgrade gates belong | Decide the scale first, then refit the flag and #1b |
| O4 | Should self-fund reach grow later (with fans, Prestige or upgrades)? | A fixed reach is outgrown by distributor trust; self-funding wins mostly on films 3–5 | D: at 0.60, 82/100 wins at film 4 vs 5/100 at film 10 |
| O5 | Is cheap-duds' cash gain from diffusion acceptable? | Even a ~6.0 film has slightly positive word of mouth | B: cheap-duds +$0.54M at 20 films. Knob: word-of-mouth neutral point (score 5) |
| O6 | Staff training/growth curve vs headcount | Staff stats reach 96–100 by film 50 under every cap | Not changed (constraint: no preemptive nerfs) |

## Carried from Gate 2 (unchanged; see `docs/open-decisions.md`)

Distributor trust metric, lifeline terms and negative-cash floor, reboot recasting, studio genre XP timing, advance display: still OPEN with the Gate 2 harness defaults as TEST ASSUMPTIONS. TV financing and limited series are still Gate 3 (not started).
