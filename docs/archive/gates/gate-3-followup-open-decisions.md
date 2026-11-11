# Gate 3 follow-up — open decisions for the designer

> Ranked by how much they change how the game feels. Evidence: `docs/gate-3-followup-findings.md` (F1–F6) and `reports/gate3_followup/matrix-tables.md`. All options are TEST ASSUMPTIONS. Nothing was locked and the canonical handoff was not edited.

## D1. Returning-viewer fatigue: onset and strength (and where it applies)

**What we learned:** as specified (opening / returning-audience input only), even a strong version (0.56× by S11–15) changes unique viewers by ≈0% and money by about 1%. TV seasons saturate their reach cap (91–99%) through in-season word of mouth, so the opening only shifts *when* people watch. (F3)

| Option | Effect seen | Cost |
|---|---|---|
| a. Leave it off | Shows still fade through review fatigue; no extra system | — |
| b. Turn on mild (onset S4, 2%/step^1.2, cap 35%) as flavour | Visible premiere dip in the UI/trace; no balance effect | A number the player sees that doesn't matter much |
| c. **Recommended to test next:** let fatigue shrink the *reachable pool* of a returning season (lapsed viewers), still offset by quality, twists, marketing and Stars | Untested. The only place a viewer-side effect can bite, given saturation | Touches what a season can earn, so it's a sales-side effect; needs your OK because the brief excluded that |
| d. Lower in-season word of mouth so openings matter more | Untested; changes every format, movies too | Wide blast radius |

**Basis:** if it's kept, the **episode basis** is the more honest one (a 20-episode season really is more exposure; 5-episode shows barely tire). The seasons basis is simpler to explain. **Onset:** around Season 4 is when review fatigue starts to show, so the two would line up.

## D2. Review fatigue: keep, reduce, or exchange

Today it's the *only* thing that makes long shows fade, and it does so quite steeply (S1–3 8.50 → S11–15 6.30 for tv-first).

| Option | Result (25 years) |
|---|---|
| Keep (cap 35%, 1.2% × n^1.6) | Shows fade; sensible policies end them around S8–10; 0% of shows reach S20 for quality-picky studios; many HoF from new shows. Comebacks exist (73 in 1,200 careers, all via good twists). |
| Reduce (cap 20%, 0.8%) | Shows plateau around 7.4; half of tv-first shows reach S20; long-runners everywhere (150+ per 200 careers); **HoF −60 to −70%** for TV-heavy studios; Prestige −35%; cash +5–20%; **zero comebacks** (no slumps). |
| Exchange (reduce review fatigue, add a viewer-side fade that bites, per D1c) | Not testable until D1c exists. This is probably the "organic" version: shows lose *audience* before they lose *quality*, which makes renewal a money call rather than a score call. |

**Recommendation:** keep review fatigue as is for now (it produces fading, comebacks and voluntary endings). Revisit as an exchange once D1c is tested.

## D3. Breakthroughs: fun and rare enough?

**Rare enough:** yes. 6% of productions, about 2–5 per 25-year career. **Fun:** not yet. An average +0.03 to the score (max +0.36) is invisible. Even 5× bigger, it averages +0.10 (max +0.92). One meter can't move a saturated score much. (F5)

| Option | Note |
|---|---|
| a. Keep off | Good twists already produce natural comebacks. |
| b. Keep rare, make it **visible**: a headline event with its source and meter, even if the score effect stays small | Pure feel; no balance risk. |
| c. Make it multi-meter or bigger (for example +0.5 half-point on all meters) | Would start creating comebacks and some HoF; needs its own matrix run. |
| d. Tie the chance to causes (high stat in the stage's main meter, a Star with that family, genre XP) | Stays causal and rewards the team, not luck. |

**Recommendation:** b + d if you want it; otherwise a. Hold off on c until you decide whether long-show HoF is desirable.

## D4. Firing cost and timing

| Question | Current harness assumption | Evidence |
|---|---|---|
| When? | Only between productions (planning phase); never the engineer while building | Policies never needed mid-production firing |
| Minimum team | 2 (the starting size) | trace 5a cuts to 2 and recovers |
| Severance | $0 | Firing happens rarely (≈0 for most studios; 1 per career for the engineer slot; 3–6 for the 2/200 debt cases) |
| Rehire cooldown / morale | none | trace 5a rehires to 8 within 2 years of recovery; nothing to exploit was seen |

**Decide:** is $0 right? A small severance (1–4 weeks of wage) would make the engineer swap a real choice without blocking it (mixed / streaming-pivot had ≥ $800K at that moment). Nothing in the data argues for morale or cooldowns yet.

## D5. TV economics: a season can't lose money

0% of traditional TV seasons lost money in any band, in any variant. A stubborn S16+ show averaging 5.8 still nets about $17K/production week, so "financially irrational renewal" can't happen. Shows end only on the policy's own quality bar. (F2)

**Decide:** is "TV is always profitable once you have it" intended? If renewing a tired show should *become* a money question, the levers are cast/crew raises per season (a common real-world one), rising per-episode cost with age, or the viewer-side fade from D1c.

## D6. TV Prestige pace

Median Prestige over 25 years: balanced (movies only) 18,245 · mixed 11,008 · traditional-holdout 7,550 · tv-first 5,573 · renewal-franchise 3,045. Seasons of one show pay per-IP milestones only once (Gate 2.5 repeatScope), so long shows earn almost no Prestige after their first seasons. Variant C makes it worse (tv-first 3,540).

**Options:** per-season milestones for TV (for example milestones repeat per season but at a reduced rate), a "long-runner" Prestige for N seasons above a bar, or accept that TV is the money path and movies the Prestige path. No variant tested; flagged only.

## Settled topics not reopened

No fixed maximum seasons; no forced decline; no studio-wide fan counter; one production at a time with the whole team contributing; firing allowed; no independent result RNG.
