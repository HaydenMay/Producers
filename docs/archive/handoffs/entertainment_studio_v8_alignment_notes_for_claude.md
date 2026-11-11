# Entertainment Studio Tycoon — v8 Alignment Notes for Claude

**Date:** November 9, 2026  
**Purpose:** Integrate the designer's latest finance/distributor decisions and causal-simulation principle into the **existing v8 master handoff**. This is a targeted change request, **not a new design from scratch**. Preserve unrelated locked decisions. Once reconciled, prepare v9 or a clear diff for review. Do not start implementation or engine selection yet.

## 1. Direction decided: financing bids replace rigid budget tiers

**Agreed direction**

- Small / Medium / Large preselected production-budget tiers remain **shelved**. The user does **not** want an arbitrary spending ceiling.
- The pitch meeting still presents **2–3 distributors**, each making **one fixed offer**, plus self-funding. Each offer now shows an **absolute upfront financing advance** and a **royalty percentage of the traditional release's gross**, e.g. **Wolf $100K for 15%** versus **Starlight $50K for 2%**. Pick one or self-fund; no stacking or haggling.
- Production has an **unavoidable base cost**, determined by format and, for television, length. You cannot avoid making the actual movie/show by spending nothing.
- The advance helps finance the production. **Star casting and marketing are real additional choices**, potentially covered by remaining advance; the studio can top up from its own money when expenses exceed the advance. **Do not impose a hard cap** at the distributor's offer amount.
- At **successful production completion**, the studio **keeps 100% of any unused advance**. This rewards efficient production; do not automatically refund the surplus or replace it with a split-savings rule.
- If the player **cancels**, the advance must be repaid. The handling of insufficient cash on cancellation is still **Open**; avoid a soft lock or an undeclared loan system.
- Distributor earnings continue to be their contracted percentage of each week's **gross commercial revenue** during a finite traditional release. Distributor financing is not ordinary sales revenue; any retained surplus becomes studio money on completion.
- **Studio salaries and ordinary upkeep remain studio-wide cash expenses**, not direct project costs, unless explicitly redesigned later.
- All IP remains owned by the studio; preserve existing reach, IP-fan, release-window, and streaming rules.

**Illustrative only**: A movie requires $60K in base production expense. Wolf advances $100K for 15% royalties. Casting and marketing cost $20K. The studio retains $20K surplus at completion; Wolf gets 15% of the eventual release gross. Starlight's $50K at 2% would require at least $10K of studio cash for the base cost but preserves 98% of release gross. These amounts are **not balance targets**.

**Designer intent:** It's acceptable to produce a cheap dud and pocket an advance; **do not build barriers specifically forbidding that strategy**. It should be less efficient over time than creating good work because (1) the unavoidable base cost keeps typical surplus modest, (2) hits earn more through sales, (3) bad releases usually don't earn significant Prestige or IP fans, and (4) disappointing partners reduce future financing. A normal surplus should be much smaller than revenue from a reasonably successful movie. Validate this through balancing later, rather than adding elaborate fraud-detection mechanics.

## 2. Distributor trust: relationship consequences, not a new unrelated RNG result

**Agreed direction:** Individual distributors have a **relationship/trust** state. A pattern of poor outcomes reduces future advances or offer quality; a history of delivering worthwhile productions improves confidence. One flop shouldn't erase an established relationship. Other firms may consider recent publicly visible studio performance, but avoid creating another opaque global reputation currency.

**Important nuance — not yet a final formula:** Do **not** independently roll a distributor's happiness, or automatically penalize a successful, acclaimed film because of an independently randomized poor box-office outcome. Distributor confidence should respond to explainable production and commercial outcomes. Whether the final metric emphasizes quality, commercial return, or an expectation-adjusted combination is **Open for tuning**. Keep feedback plain-language and understandable (e.g. what disappointed the distributor and why).

## 3. Foundational simulation rule: interconnected, causally coherent outcomes

**LOCK THIS PRINCIPLE:** The movie/show's quality scores, commercial performance, fan changes, Prestige awards, and partner responses must **connect causally**. They must **not** be five independent RNG rolls. Variation may exist, but player-facing outcomes must have visible causes.

Causal chain, preserving v8 foundations:

1. **Staff work + Star genre fit + genre/theme combo + era/critic expectations + weak-meter rule** lead to **Audience and Critic scores** (distinct, using four quality meters).
2. **Marketing, temporary studio buzz, distributor reach, Star Fame, trends and preexisting IP fans** influence **opening viewership**. None directly grants better reviews.
3. **Critic reception** drives **early buzz**; **Audience reception** shapes **later word of mouth and sales legs**. Opening attention is not the total run.
4. **Viewership across the release's finite run** produces **sales money**; positive reception and reach can grow **IP fans**, while hyped duds can lose them.
5. **Qualifying caliber/review/sales milestones** grant **Prestige**. Staff earn **XP during production**, not from release outcomes.
6. **Distributor relationships** change as a consequence of the backed project's realized, explainable outcome—not an unrelated draw.

A film with **8.7 Audience / 9.3 Critics** should ordinarily have strong legs and favorable commercial results. A constrained-release underperformer is possible **only if a concrete factor such as very limited reach explains it**. A heavily advertised 3/10 film may open big then collapse from bad word of mouth. Avoid arbitrarily generating 'great reviews + bad box office' as contradictory independent outcomes.

## 4. Specific v8 wording to reconcile (do not leave contradictions)

- **§7 Production cost:** Replace 'one upfront fixed cost, no spendable pot, no leftovers or overruns' with mandatory base cost + flexible additional project spending + possible surplus/overrun.
- **§7 Pitch meeting:** Replace 'percentage of budget covered' with 'absolute upfront advance + royalty percentage'; replace the old illustrative pitch table.
- **§7 `No ... refunds or overruns` and `funding is not debt; never repay`:** The advance is **not a normal loan**, but **must be returned if the project is canceled**. Overspending is permitted and paid from studio cash.
- **§6 Stars and §4 Marketing:** v8 currently says the one-time Star fee and marketing are always paid separately from studio cash, and not covered by distributors. Replace this accounting rule: these are project expenses that **may use unspent distributor financing**, with any excess covered by studio cash. The Star is still chosen at 40%, marketing at 80%, and neither choice changes intrinsic review scores through Fame or advertising alone.
- **§3 economy table / timing / §19 accounting shorthand:** Keep the three progression systems and update financing accounting to reflect project surplus paid at completion; no XP or Prestige just for finishing.
- **§14 tutorial pitch explanation:** Update the assistant's explanation from 'covers more' to 'advances more money', paired with royalty cost. Preserve exactly **two starting staff**, a normally mediocre first movie, opt-in one-time tutorial and quick handoff to sandbox.
- **Decision ledger / change log / obsolete lines:** Mark old no-surplus/no-overrun design as deliberately superseded. Keep budget tiers shelved; don't accidentally call them locked or revived.

## 5. Leave these narrowly scoped details OPEN for later balancing

1. Exactly **when** mandatory base costs are charged and how to display/use the remaining distributor financing (earmark vs general wallet)—**do not assume** a separate complex ledger has been approved.
2. Financial safety rules when a project cannot afford its required Star or when cancellation repayment exceeds studio cash.
3. Distributor trust scale, update logic, expected-performance comparison, rate of recovery, and exact effect on future bids.
4. How audition availability is determined without budget tiers (affordability can matter, but whether all Stars appear or there is a Prestige gate remains undecided).
5. Distributor offer-size and royalty-generation balance; revenue curves and maximum reasonable surpluses.
6. Whether financing rules differ for multi-season TV deals and streaming originals, beyond already locked stream/traditional distinctions.

**Review instruction to Claude:** First check for contradictions across v8, flag at most the few truly blocking unanswered questions, and propose a clean reconciliation. **Do not reopen IP fans, the three-economy split, two starting employees, tutorial behavior, or per-project release flow.** Don't add anti-exploit restrictions unless simulation demonstrates they are necessary. We are preparing for the final design-hole pass **before** choosing an engine or implementation plan.
