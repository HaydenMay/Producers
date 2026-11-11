# Gate 4Q — open decisions for the designer

> Evidence: `docs/gate-4-quality-findings.md`, `reports/gate4q/compare/summary.md`, `reports/gate4q/traces.md`. All numbers are **PROVISIONAL TEST ASSUMPTIONS**. Nothing is locked. Legacy (`world.compatibility.mode: "random"`, D 0.90 / F 0.78, cult off) stays the default and is byte-identical.

| # | Decision | Options | Recommendation (provisional) |
|---|---|---|---|
| D1 | **The compatibility matrix** (80 pairs, audience/critic per exact genre) | a. approve as proposed · b. approve with edits to the ⚑ pairs · c. keep random grades | **b**: rule on the 13 flagged pairs (table in the findings). Everything else follows plain premise logic. |
| D2 | **Poor-fit severity** (D / F multipliers) | a. D 0.85 / F 0.65: rookie poor pairs 4.2 mean, 36% below 4 · **b. D 0.80 / F 0.55: 3.8 mean, 73% below 4; veterans 5.9** · c. D 0.75 / F 0.45: 3.3, veterans 5.3 | **b**: rookies on a bad fit make real duds; a great crew climbs to about 6 but not 8. A/B/C unchanged. |
| D3 | **Star family fit and studio exact-genre XP barely move scores** (+0.01–0.13 at any level) | a. accept: crew + pairing are the game; Stars matter for Fame/visibility · b. raise `production.starFilmingWeight` (0.11) so Star fit moves Filming meaningfully · c. raise `studioGenre.qualityBonusPerLevel` | Decide what each system *should* be worth (e.g. "a perfect-fit Star ≈ +0.5", "max genre level ≈ +0.5") and tune toward it next pass. They're separate and correct now, just faint. **Don't change both at once.** |
| D4 | **Cult appeal** | a. off · **b. on as built** (10% of eligible, +5/+10% for rising/hot themes, 1 in 4 breakouts; needs craft ≥ 60 + an untried pair) · c. let rookies qualify (craft bar about 50) | **b**: about 0.6% of movies, always explained, never repeatable on a pair, not a strategy. Rule on whether rookies should be able to stumble into one (c). |
| D5 | **World variation** | a. none (fixed matrix) · **b. bounded ±1 step on 20% of sides** · c. ±1 on 35% | **b**: keeps discovery (players can't memorise the grid) while A never becomes F. |
| D6 | **Dud economics** (not touched; a sub-4 film still nets +$50K) | a. leave for now · **b. adopt the Gate 4 levers next pass** (WoM pivot 6.5 + bad-reception decay 1.0: sub-4 films 97% lose, median −$25K; 4–6 films 24% lose; 6–8 still +$112K) · c. other | **b**, as its own small pass, now that real duds exist to test it on. |
| D7 | Report name **`low-budget-random-combo`** for `cheap-duds` | keep alias both ways | Done (exact alias); old name still works for old reports. |

## Not touched (logged)

- Payout and distribution formulas, contracts, Prestige rules, TV Prestige pace, viewer-fatigue reach pool, severance and critic curves are unchanged.
- No Star theme skill, no family skill tree, no genre unlock changes.
- **A possible future system (not built):** a "recurring synergy", where a combo that cult-hit twice could slowly earn a better permanent audience reputation. Described only, because the designer asked to keep stable knowledge and one title's reception separate.
