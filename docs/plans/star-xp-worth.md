# Plan: what should a well-fit Star and a studio genre level be worth?

> **Status: decision aid, not a decision.** Ledger rows PROD-026 (genre XP) and PROD-051 (Star fit) stay OPEN. Nothing here changes a default. Numbers come from `npx tsx scripts/star-xp-plan.ts` → `reports/star-xp/plan-data.md` (quality candidate `config/gate4q.json`, 48 rookie movies and 214 veteran movies from balanced/quality-first careers, seeds 1–8). Every figure is a **median change in the 0–10 average score**, worked out by recomputing the real score formula on real releases.

## 1. What happens today, in plain terms

Both effects add **work points** to the meters. A Star adds Filming points every filming week (`production.starFilmingWeight` 0.11 × fit × weeks). A studio genre level multiplies all four crews' points (+3% per level, levels at 1/3/6/10/15 releases of that exact genre).

Meters saturate: quality = points ÷ (points + half-point). The first points count a lot and later ones barely count. So:

- **Rookie studio** (Filming meter ~52): a fit-80 Star pushes Filming to ~68, worth **+0.21 avg**.
- **Veteran studio** (Filming already ~95): the same Star moves it to ~96, worth **+0.02 avg**.
- **Genre level 5 vs 0:** **+0.29** (rookie) / **+0.11** (veteran).

That's why both feel like they do nothing. They're wired right; the curve swallows them, especially late in a career, which is exactly when you can afford good Stars.

## 2. Worked example: rookie film

“Hollow Edge” (Comedy + Sports, first studio film, real release avg 6.42):

| Setup | fit 0 | fit 50 | fit 80 | fit 100 |
|---|---|---|---|---|
| Today (weight 0.11), genre level 0 | 6.28 | 6.61 | 6.74 | 6.81 |
| Star weight ×2 (0.22) | 6.28 | 6.81 | 6.97 | 7.05 |
| Star weight ×3 (0.33) | 6.28 | 6.95 | 7.10 | 7.18 |
| Today's Star, genre level 5 @ 3%/level | 6.67 | 6.99 | 7.12 | 7.18 |
| Today's Star, genre level 5 @ 8%/level | 7.21 | 7.51 | 7.63 | 7.69 |

## 3. Worked example: veteran film

“Wild Legacy” (Comedy + Superheroes, ~year 7, real release avg 9.06):

| Setup | fit 0 | fit 50 | fit 80 | fit 100 |
|---|---|---|---|---|
| Today (weight 0.11), genre level 0 | 9.00 | 9.02 | 9.03 | 9.04 |
| Star weight ×3 (0.33) | 9.00 | 9.05 | 9.07 | 9.08 |
| Today's Star, genre level 5 @ 8%/level | 9.28 | 9.30 | 9.31 | 9.31 |

Even tripling the Star weight changes a veteran film by **0.08**. Multipliers alone can't make Stars matter late.

## 4. The options

### Option A: just turn the knobs up (simplest)

| Knob | Today | A-mild | A-strong |
|---|---|---|---|
| `starFilmingWeight` | 0.11 | 0.22 | 0.33 |
| `qualityBonusPerLevel` | 0.03 | 0.05 | 0.08 |
| Star fit 80 vs 0, rookie / veteran | +0.21 / +0.02 | +0.34 / +0.04 | +0.42 / +0.05 |
| Genre level 5 vs 0, rookie / veteran | +0.29 / +0.11 | +0.44 / +0.17 | +0.65 / +0.25 |

- **Good:** two numbers to change, no new rules, fully explainable.
- **Bad:** it's almost all a rookie effect. Stars still don't matter for veterans, and early games get easier (rookie Comedy + Sports goes 6.3 → 7.1 with a cheap-ish fit-80 Star).

### Option B: Star as a post-saturation score term (my recommendation for Stars)

Keep the Star's Filming points small, and add a separate score bonus **after** the meter curve, so it's the same size at every career stage:

`Audience += 0.5 × fit/100`, `Critic += 0.2 × fit/100` (example sizes; Audience leans on the face on the poster).

| Film | fit 0 | fit 80 | fit 100 |
|---|---|---|---|
| Rookie “Hollow Edge” | 6.28 | ≈ 6.56 (+0.28) | ≈ 6.63 (+0.35) |
| Veteran “Wild Legacy” | 9.00 | ≈ 9.28 (+0.28) | ≈ 9.35 (+0.35) |

- **Good:** a great Star is worth roughly a quarter to a third of a point *every* time, so the 40% casting choice stays a real decision all career. It's still causal (skill fit, never Fame), so it doesn't break PROD-040 / PROD-198.
- **Watch:** pushes veteran films over the 9.0 Hall of Fame line more often. HoF rate needs a re-check, and maybe the bonus should fade near 10.

### Option C: genre XP as "practice" (my recommendation for genre levels)

Leave XP as a work-point multiplier, but at **5%/level** (A-mild). That's +0.44 rookie / +0.17 veteran at level 5, and it shows up as "we've gotten good at Horror." It shouldn't be a post-saturation term: specialising is meant to help you climb the curve faster, and the cap stays craft-driven.

- One real blocker: careers in the harness only ever see Action/Comedy/Horror (genres never unlock, PROD-091), so "level 5 in a new genre" barely happens yet. Fix that before judging XP's worth in play.

## 5. What I'd pick (not locked)

1. **Stars → Option B** at about +0.3 avg for a fit-80 Star, plus a HoF-rate check.
2. **Genre XP → Option C** (5%/level), revisited once genres unlock.
3. Price check after either: a fit-80 Star's fee should buy roughly +0.3, so a cheap fit-20 Newcomer stays the frugal choice, not the obvious one.

## 6. What you need to decide

- Target size: how much should a great Star be worth (e.g. +0.1 / **+0.3** / +0.5 avg)? And should that hold for veterans too, or is "Stars matter most early" fine?
- Should Star value lean Audience (as in B) or be even across both scores?
- Genre XP target at level 5: about +0.15 / **+0.45** / +0.65 for a rookie-level crew?
