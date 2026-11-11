# Entertainment Studio Tycoon — Distribution & Financing Proposal for Claude Review

**Date:** November 8, 2026  
**Status:** Focused design review; **not approved for implementation**  
**Context:** Read alongside `entertainment_studio_handoff_v3.md`. This note does **not** supersede v3. It examines a possible revision to v3 §7 (Formats and economy), §12 (Streaming), and related decision-ledger entries.

## Review instructions for Claude

Act as a **critical game-design reviewer**, not a feature generator.

1. Respect v3's decision labels. **Locked** means settled unless this proposal creates a concrete contradiction or a serious gameplay/economic risk. Do not silently promote proposals to requirements.
2. Critique specifically: **What's missing? What conflicts with v3? What will become tedious or exploitable? What is hard for players to understand?**
3. Focus on the **smallest coherent implementation of the proposed model** that preserves the quick, readable *Game Dev Story* rhythm. Do not add contracts, legal mechanics, negotiations, regional rights, complex royalties, extra staff systems, or new game modes just for realism.
4. Distinguish **fatal design problems** from **balance/tuning issues** and **nice-to-haves**. If a disagreement requires a creative choice, state the alternatives and tradeoffs rather than choosing on the designer's behalf.
5. **Do not implement, write an implementation plan, or redesign the whole game.** Return a concise review of the distribution model with concrete edge cases, a minimum viable ruleset if one is viable, and precise questions that must be settled.

## A. Existing decisions that remain in force

- Start as a **small entertainment production company**, initially making **movies and limited series**; larger TV formats unlock as the company grows. **Soap operas are shelved** as a potential later feature.
- *Game Dev Story* pacing: **one main production at a time early**, week-by-week time, genre + broad theme selection, permanent levelable staff, and meaningful milestone decisions. At **40%** choose the lead Star from audition results; at **80%** allocate a limited post-production/marketing budget; release when completed.
- Four quality meters: **Plot, Writing, Filming, Editing**; scores split into **Audience** and **Critic**. Genre/theme combinations, trends, saturation, reputation, and show fatigue exist as described in v3. **Do not reopen these systems unless distribution makes them contradictory.**
- **Marketing affects initial hype, reach, and expectations—not intrinsic audience review quality or critic quality.** A heavily marketed terrible release could draw more viewers and amplify negative word of mouth/reputation damage. Mere sample size by itself does not mathematically reduce a review average; poor reception plus broader exposure creates the backlash.
- **TV episodes air weekly after production** and released content can generate value while another production is underway.
- A future **owned streaming service** is an important progression unlock, not the starting business.
- Lead Stars are the only individually cast actors; supporting cast is abstracted. Actor personalities and complex talent contracts are deferred.

**Existing v3 wording now under review:** Every release has an upfront payout and catalog tail; later streaming means keeping that tail rather than selling it. That wording may need to change if the funding/distribution proposal below is adopted. Do **not** assume both models are simultaneously active.

## B. Proposal we are considering (NOT locked)

### 1. Choose distribution partners **before** production

After the player selects **format, genre, theme, and intended budget**, eligible fictional broadcasters, studios, streaming services, or distributors may make offers. Examples: **XYZ** and **Wolf**. They differ in:

- **Funding contribution** to the production budget: cash committed toward making the project.
- **Audience reach and genre fit**: how many *potential* viewers each partner brings, accounting for overlapping audiences.
- **Revenue participation**: what fraction of the revenue attributable to that partner the player's studio keeps versus the partner.
- Potential **exclusivity premium** for being the sole distributor.

The offered funding helps cover writers, Star hiring, filming, and post-production. If the production exceeds the funded budget, **the player's studio covers overruns** from its own cash and bears real financial risk.

The preference emerging from discussion is **simple, visible money flows**: show funding, likely reach, the studio's earnings share, and eventual earnings. Avoid simulating recoupment waterfalls or detailed legal contracts.

### 2. Allow **simultaneous distribution on multiple services**

The designer accepts multiple partners releasing the **same production simultaneously** and questions an arbitrary two-partner cap. A player might select many interested services, trading some profit potential for more funding and broader name recognition.

**Design intent:**
- **Exclusive**: generally smaller footprint, potentially better terms and a larger share of upside.
- **Wide release**: potentially more funding and exposure, but worse terms / costs / diminishing returns; not automatically worse for profit if the production becomes a large hit.
- A young studio may **rationally accept weak profit or even a loss** to build awareness and reputation, but doing so repeatedly must not be a dominant exploit.
- More distributors **should not automatically** mean every partner takes a percentage of *all* global revenue. Each partner's cut should apply to revenue attributable to its deal, or an equally clear aggregated model that cannot double-charge the same sale/view.
- **Audience overlap** means summed partner audience sizes are not summed unique viewers; adding more services has diminishing reach.

There is **no consensus** yet about whether funding from multiple partners (a) caps at the planned budget, (b) increases the allowable production budget, or (c) follows another simple rule. This is a key unresolved design choice—not something to decide silently.

### 3. Keep different release formats readable

- **Movies:** A bigger premiere/release spike, followed by a smaller decaying earnings tail.
- **Limited series:** Premiere and weekly episode earnings, with a finite ending.
- **Renewable TV series (later unlock):** One season produced at a time; episodes air weekly, with renewals, recurring leads, and long-term series value.

Use the **same high-level partner-choice interface** for movie and television production, with differences in *revenue timing*. Do not require players to understand real-world theater, broadcaster, and platform accounting to play.

### 4. The long-term streaming payoff

When the company eventually launches its own service, the player can **self-finance and distribute originals**, gaining subscribers and keeping more long-term value in exchange for full production risk and the cost of running a platform. The player need not abandon outside distribution.

**Rights/ownership are not yet resolved:** Do productions remain studio-owned? Do outside deals expire? When can titles enter the player's streaming catalog? Could a title be available on several outside services and the studio's own service simultaneously? We want one simple, consistent game rule, not a legal simulator.

## C. Primary issues to interrogate

1. **Funding exploit:** If many partners contribute money, can the player acquire more funding than a production needs? Would the game effectively hand out free cash? How can the money be constrained without arbitrary distributor caps?
2. **Profit-share clarity:** What does “studio keeps 70%” mean when three services air the same title? How do we prevent double-charging and avoid presenting a bewildering set of royalty calculations?
3. **Player agency vs. busywork:** Does choosing many offers for *every* production become a repetitive checklist or obvious “select all” strategy? What minimum information allows a fast, informed decision?
4. **Reach vs. earnings:** If adding services nearly always increases gross viewers, when would an exclusive deal actually win? Is the exclusivity premium enough, or is a more coherent economic mechanism needed?
5. **Risk/reputation:** If a studio willingly loses money for exposure, is that fun? Can bad productions gain fame too easily? Recall that marketing changes reach and expectations, not the underlying review score.
6. **Budget overrun:** If distributors fund an agreed plan, do all overrun decisions fall on the studio? Can the player overspend into bankruptcy? Should the game distinguish reserved funding from cash that belongs to the player?
7. **Rights and streaming:** How does later self-distribution integrate with the early distribution model without double revenue, locked-away back catalog, or permanent early-game deals that hurt the late game?
8. **Format plausibility:** Multiple simultaneous movie distributors or TV networks in the same market is not always realistic. If we simplify this, does it still *feel* believable enough, or should “partner” be defined as distribution outlets with non-exclusive reach?
9. **Preserving v3:** Identify exactly which existing **Locked** economics statements would need explicit replacement, rather than quietly rewriting unrelated locked mechanics.

## D. Illustrative scenario (NOT final economy)

A small studio plans a **$100K Horror + Robots movie**. Wolf offers **$50K** toward production and a generous studio earnings share, with genre-focused reach. XYZ offers **$40K** and a different audience. The player can choose either, both, or possibly more partners. If both contribute, the player would initially need to cover **$10K** of the planned cost. If they overspend by **$20K**, the studio needs **$30K** cash *unless the final financing rules explicitly say otherwise*.

Questions to test:
- Is selecting both almost always optimal? What would an attractive exclusive Wolf offer look like?
- How are the earnings from viewers who could watch on either outlet attributed without double counting?
- What happens if the player signs enough offers to exceed the $100K planned budget?
- How does this title later become useful when the studio launches its own streaming service?

These numbers are **illustrative only**. Do not treat them as tuned economics.

## E. Requested response format

Please return:

1. **Verdict:** Is this proposal internally coherent and compatible with the game's desired pacing? If conditional, state the conditions.
2. **Most important 3–5 risks or contradictions**, ranked, with concrete examples.
3. **Two or three minimal model variants** *only if genuinely necessary*, comparing their tradeoffs (e.g. funding cap vs. expandable production budget; per-partner sales allocation vs. a simplified blended share). Recommend the simplest viable variant and say why, without treating it as approved.
4. **Questions for the designer**: only decisions with material consequences; avoid speculative feature requests.
5. **Exact v3 sections/ledger entries needing amendment** if the designer accepts this model.

**Do not reopen:** soap operas, the four meters, the 40%/80% milestones, one Star, genre/theme grades, critic/audience score framework, or marketing's non-effect on quality.

## F. Parked concerns to return to after distribution

These concerns remain on our planning list but are **out of scope for this review**:

- **Between-season scheduling** when a show's weekly airing completes before its next season can be produced, given one active production at a time.
- **80% post-production choice**: CGI/sound should reasonably affect Editing, not somehow repair Plot or Writing; avoid repetitious “fix the weakest stat” play.
- **First-season episode limits**: preserve the earlier proposal that debut TV seasons are restricted to **5 or 10 episodes** before larger orders unlock.

Once distribution is resolved, tackle these **one at a time** before writing an implementation plan.
