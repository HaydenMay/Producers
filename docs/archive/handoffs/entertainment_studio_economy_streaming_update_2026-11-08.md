# Entertainment Studio Tycoon — Economy & Streaming Update

**Date:** November 8, 2026  
**Status:** Design decisions for incorporation into the master handoff; **not approved for implementation**  
**Read alongside:** `entertainment_studio_handoff_v3.md` and `distribution_model_update.md`  
**Purpose:** Close the distribution/copyright/catalog-revenue issue without reintroducing complicated contract accounting.

## How to read this update

- **Locked:** Agreed direction. Preserve unless a real contradiction or exploit emerges.
- **Proposal:** Plausible implementation detail, not approved.
- **Open:** Needs further discussion.
- **Later:** Intentionally deferred.

## 1. Guiding principle — Locked

The economy should feel like **Game Dev Story**, not a film-finance spreadsheet. Players make a few consequential decisions, watch simple earnings arrive over time, and invest in their studio. They should **not** manage loans, overlapping royalty contracts, legal minutiae, or hundreds of lingering title-level payment streams.

## 2. Traditional distribution — Locked (carried forward)

The simplified model in `distribution_model_update.md` **remains in force**:

1. Choose **format, genre, theme, and a Small / Medium / Large production budget tier**. The budget is one upfront cost, not a spendable account.
2. Attend **one pitch meeting** with 2–3 fixed distributor offers. Each displays how much of the cost they cover and what percentage of release earnings they take.
3. Choose **exactly one distributor** or **self-fund**: pay the entire cost and keep the traditional release earnings. No multiple-distributor stacking, auctions, counteroffers, loans, funding refunds, or budget overruns.
4. The distributor contribution is **funding, not debt**; its return is the agreed share of actual earnings.
5. The budget tier gates the Star audition pool at 40% and post-production options at 80%. Ordinary studio salaries and upkeep remain separate studio expenses.
6. Distributors and genres can influence prospective audience reach; the detailed reach formula remains a proposal, not a locked calculation.

**Important:** The above model supersedes the earlier exploration of *simultaneous multi-service distribution*. Do not reintroduce that older system as a feature.

## 3. Limited traditional earning windows — Locked (new clarification)

**Traditional releases stop earning after their commercial run**, just as games eventually leave the market in *Game Dev Story*.

- **Movies:** a strong opening/box-office period followed by declining sales, then zero ongoing title-level revenue.
- **TV series:** weekly revenue as episodes air, with any limited tail ending afterward.
- **Limited series:** limited run and declining subsequent earnings, using its distinct payout profile from v3.
- **No endless individual royalties or automatic post-contract checks.** A finished title is still part of the studio's history/catalog, but does not generate money forever on its own.

This **replaces** the earlier proposal in `distribution_model_update.md` that, after a licensing window expires, a title should simply resume earning **100% title-level revenue** for the studio. **Do not implement that residual-revenue rule.**

No manual license-renewal or expiration gameplay is required for the agreed core loop. Whatever rights timing is needed behind the scenes can simply align with the end of the traditional commercial run; legal detail is not a player-facing system.

## 4. Your streaming service — Locked (new clarification)

Streaming is an earned company expansion, retaining v3's direction: it unlocks later via progress/reputation/cash/catalog and a Software Engineer. Its **economy is fundamentally different from traditional distribution**.

- **Streaming income comes from the platform's total subscriber count, not per-title royalties or tracked views.**
- The catalog influences **subscriber acquisition and retention** through its overall size, quality, freshness, and appeal.
- Major new releases can cause subscriber growth; weak release cadence can contribute to churn.
- Streaming has operating expenses. Recurring revenue is not the same as guaranteed recurring profit.
- Previously released studio-owned titles that have finished their traditional earning run **automatically become eligible for / join the streaming catalog** when the service exists. Do not make the player manually move each title or micromanage theater-to-platform windows.
- Individual catalog titles **do not restart their own weekly payouts** when streaming launches. All their streaming value is represented through subscriber behavior.

**Streaming is a long-term aggregate business**, not another set of title-level revenue bars.

## 5. Two viable release strategies after streaming launches — Locked

Players may **continue releasing through outside distributors** *or* **self-fund direct-to-streaming originals**. Do not force every future release onto the player's platform.

| Release path | Immediate economic result | Later/platform result |
|---|---|---|
| **Traditional release** | Distributor may cover part of production cost; film/series earns its finite box-office, sales, or airing revenue, subject to its earnings share | After the commercial run, the title joins the studio's streaming catalog automatically and supports subscribers |
| **Streaming Original** | Studio funds the production itself; **no traditional box-office/airing payout for that title** | Exclusive platform debut gives a **stronger immediate subscriber-acquisition opportunity**; then the title contributes to ongoing catalog strength |

Neither route should automatically dominate. A traditional hit may provide urgently needed cash; an original may build more valuable recurring subscribers over time. **Balancing the magnitude of these effects is Open**, not predetermined by this document.

There is **no need for the player to choose or label a separate “theatrical, then streaming” transition**. The game handles that automatically.

## 6. Marketing clarification — Locked

**Marketing increases launch awareness, hype, and how many people sample a release; it does not directly raise the Audience review score or intrinsic quality.** A heavily promoted terrible film may generate a larger volume of dissatisfied viewers and stronger negative word of mouth, rather than magically earning better reviews.

Preserve v3's quality meters, audience/critic weighting, weak-meter penalties, and combo/trend mechanics. Remove or correct any v3 wording suggesting that *marketing or Star fame directly increases the Audience review score*. Star fame may help draw initial viewers; acting genre fit influences actual production quality. Exact reputation/backlash formulas remain to be balanced.

## 7. Status and priority for Claude

### Resolved here

- Upfront distributor funding remains simple: **one selected offer or self-fund**.
- Traditional release revenues **end** after a finite run.
- No individual residual earnings between the end of a traditional run and the player's streaming launch.
- Streaming revenue is **subscriber-based in aggregate**.
- Eligible historical catalog joins streaming automatically.
- After streaming unlocks, **traditional releases and streaming originals both remain choices**.
- Originals should offer **more immediate subscriber growth potential** than a title that joins streaming after a traditional release; do not set numeric values yet.
- Soap operas remain **shelved for later**, not in the current scope.

### Still Open / next conversations, in order

1. **TV seasons vs. one-production-at-a-time and weekly airing:** Are breaks between seasons ordinary/expected? If so, when, if ever, should lengthy hiatuses affect audience interest?
2. **80% post-production choice:** Keep CGI/sound/marketing decisions meaningful without pretending post-production can repair unrelated Plot/Writing flaws; options are gated by the chosen budget tier, not drawn from a separate cash pot.
3. **First-season length:** Preserve the earlier **5- or 10-episode pilot-season limitation as a proposal** to evaluate, not a new locked requirement. Determine how larger season orders unlock.
4. Then return to other previously Open decisions (Star contracts and raises, era progression, job list, etc.) as needed.

### Review request for Claude

Please integrate these decisions into the existing handoff while preserving its **Locked / Proposal / Open / Later** labels. **Do not reopen locked mechanics without identifying a genuine contradiction or serious risk.** Critique only what conflicts, what could be exploited, what may become tedious, or what vital economic rule is still missing. **Do not add speculative features or begin implementation.**

