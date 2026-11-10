# Open decisions

Ranked by how much each one blocks reliable balancing. "Design ambiguity" = v9.61 doesn't decide it. "Model limitation" = the harness doesn't simulate it yet.

## A. Design ambiguities (need the designer)

| Rank | Decision | Blocks | Harness default (WORKING ASSUMPTION) | Evidence |
|---|---|---|---|---|
| 1 | **How quality scales with team size.** All staff add points to all meters (LOCKED), but nothing says whether a 6-person team should make films ~3× better than a 2-person team. | Quality inflation, Prestige pace, Hall of Fame rarity | Linear: every staff member adds full points | F1: hiring is the main inflation driver |
| 2 | **Prestige repeat scope** (per release / per IP / career, or a mix) | Prestige pace; franchise vs. new-IP balance | `perIP` | F4: franchise-builder Prestige 175 vs. 1,640 |
| 3 | **How weak self-funding should be before streaming** (reach size) | Whether walking away is ever right early | reach 0.22 | F3: dead strategy |
| 4 | **Starting economy:** starting cash, wages, how profitable a mediocre first film should be | First-hour feel | $40K start; first film ~3× cash | F6 |
| 5 | **Distributor trust metric** (quality, commercial return, or results vs. expectations) | How hard duds are punished | 0.6 ROI + 0.4 quality, ±0.75 cap | F7: currently healthy |
| 6 | **TV financing per season** (carry-over vs. re-pitch) and **limited series vs. a 5-episode TV season** | Gate 3 can't start without a placeholder | not modelled | — |
| 7 | **Reboot recasting:** does replacing a Star's role in a reboot hurt the relationship? | Minor | not penalized | — |
| 8 | **Lifeline terms and the negative-cash floor** | Recovery speed | 1.05× base, 55% royalty; no floor | no soft-locks at P1 |
| 9 | **Studio genre XP timing** (per production vs. per week) | Minor | on completion | — |
| 10 | **Advance display** (earmarked project balance vs. general cash) | UI only, not balance | earmarked reserve | — |

## B. Model limitations (not yet simulated; don't read results as covering these)

1. **TV series, limited series, seasons, renewals, hiatus, announcements, episode caps.** Gate 3, not built.
2. **Streaming:** platform build, subscribers, churn, Originals, operating costs. Gate 3, not built.
3. **Studio upgrades / format unlock gates** (money + Prestige milestones are Later in v9.61).
4. **Genre unlocks.** Only themes unlock; genres are fixed at the starting three.
5. **Eras.** Only a gentle quality bar; no era-based theme waves or news format.
6. **Star bio lines, portraits, names polish** (titles can repeat, e.g. two IPs named "Last Signal").
7. **Strategies are heuristics,** not optimizers. A "dead" strategy may be a weak policy, not a weak rule.
8. **Late-game concurrency** (multiple productions). Not modelled; one production at a time throughout.
