# Entertainment Studio Tycoon — Design Handoff v5

**Status:** Concept planning; **not approved for implementation**
**Date:** November 8, 2026
**This is the master doc.** It replaces v4 and earlier distribution/economy update documents.

**Changes since v4 (agreed planning decisions):**
- **Locked a three-part progression economy:** staff XP from work during production, studio Prestige from achievement milestones, studio Money from commercial revenue (and later subscriptions).
- **Clarified Prestige** as discrete achievements for production caliber and milestones, not passive weekly gains. Sample thresholds/amounts are *not* locked.
- **Resolved the 80% milestone direction:** the team handles post-production quality automatically; the player chooses title-specific launch marketing.
- **Resolved TV hiatuses/publicity:** ordinary gaps between seasons are fine; very long gaps erode anticipation, not past scores. Studio advertising builds long-lived fans; ordering a new season can generate a one-time announcement.
- **Chose studio Prestige as the gate for longer episode orders**, rather than restricting every debut season. Initial example progression: 5 / 10 / 15 / 20 episode caps; exact thresholds remain open.

**v4 foundations retained:** single-distributor pitch model, finite traditional release runs, subscriber-based streaming, separate viewership and scores, critic/audience "legs," genre/theme combos, one production at a time early.

**How to read this doc:**
- **Locked** = the designer chose or clearly endorsed it.
- **Proposal** = suggested in planning, not yet confirmed. Don't treat it as a requirement.
- **Open** = not decided.
- **Later** = deliberately parked.

---

## 1. Design intent

An accessible, replayable management game inspired by **Kairosoft's Game Dev Story (GDS)**, about running a TV and movie production company. You start tiny and grow into a major studio, and eventually launch your own streaming service.

The core appeal:
1. Discovering great (and weird) genre + theme combos
2. Building a small, recognizable staff that levels up
3. Growing from a tiny company into a major studio

**North star:** the fast, readable GDS rhythm. Add depth at a few meaningful decision points, never micromanagement for its own sake.

**Economy principle (Locked):** it should feel like GDS, not a film-finance spreadsheet. A few big decisions, simple earnings arriving over time, then reinvest. No loans, overlapping royalty contracts, legal detail, or hundreds of lingering per-title payments.

**No theme parks or unrelated business lines.**

---

## 2. What makes this NOT just GDS

The headline pick is still **open**, but the strongest candidates are #1 and #2.

1. **Shows keep living after release.** Episodes air week by week, get renewed, age, get reinvented, and can come back years later.
2. **Stars have careers.** Outside talent grows, gets famous, asks for raises, and returns for sequels.
3. **Critics vs. audience.** Two scores create cult classics and guilty-pleasure smash hits, and they play out over time as early buzz vs. word of mouth.
4. **Trends and fatigue,** delivered through a news feed.
5. **Your own streaming service** is a different kind of business: subscribers instead of release earnings, and your whole catalog matters again.
6. **A changing critic panel** plus a rising audience bar, so Hall of Fame stays hard late in the game. This avoids GDS's endgame, where everything becomes a 38/40+ masterpiece.

**Proposal:** spoof **eras of entertainment** (theaters → home video → cable → streaming) the way GDS spoofs console history.

**Reminder:** mechanics are fine to share with GDS, but names, art and menu layouts should be clearly original.

---

## 3. Core loop (Locked unless marked)

1. **Plan:** pick format, genre, theme and budget tier.
2. **Pitch meeting:** pick a distributor or self-fund (§7).
3. **Produce:** staff build quality during a visible production, with milestone decisions at 40% and 80%.
4. **Release:** viewers, scores, word of mouth, money.
5. **Reinvest:** train and hire staff, unlock new things, repeat.

- **One main production at a time** (Locked for early game; late-game concurrency is **Open**).
- Released content keeps earning (during its run) while you make the next project.
- Production is mostly automatic, with a few meaningful decisions.
- **Time passes week by week, like GDS.** One TV episode airs per week.

### Three progression economies (Locked)

| Resource | Earned from | What it does |
|---|---|---|
| **Staff XP** | Employees **working during production**, as work happens | Levels up the people you hired; separate genre/job growth and training remain possible |
| **Studio Prestige** | **Achievement/milestone awards** for the caliber and commercial accomplishments of released works | Cumulative proof of studio capability; unlocks bigger episode orders and other company opportunities |
| **Studio Money** | **Sales / box office / TV airing earnings** and, later, **aggregate streaming subscriptions** | Pays for production costs, salaries, training, advertising and upgrades |

**Timing rule:** Production → staff XP; qualifying achievements at release or during the commercial run → Prestige; actual commercial/subscription earnings → Money. **A release does not give employees a second XP payout just for good reviews; a passing week does not automatically give Prestige.** Distributor financing offsets a production's upfront cost rather than being a separate sales reward.

A flop can still train the team without winning Prestige. An acclaimed niche release can earn Prestige while making little Money. A widely watched but poorly reviewed release can earn Money without becoming a critical milestone. This separation is deliberate.

---

## 4. Production phases and quality (Locked)

### Stats and meters

Every staff member has the **same four stats**. Each production has **four quality meters with the same names**.

| Stat / Meter | Meaning |
|---|---|
| **Plot** | The idea: how original and gripping the story is |
| **Writing** | The execution: script, dialogue, structure |
| **Filming** | Everything shot on camera, including the Star's performance |
| **Editing** | Post-production: CGI, sound, music, the final cut |

- **All staff add points to all four meters during the whole production, weighted by their stats** (GDS-style).
- "Creativity" and other GDS-specific names are deliberately avoided.
- Plot vs. Writing = idea vs. execution. *Example:* "Brilliant premise, clunky dialogue" = Plot 9, Writing 4.

### Phase flow

| Progress | Phase | Main meters | Milestone |
|---|---|---|---|
| 0–40% | Conception & writing | Plot + Writing | **40%:** audition results come back; hire your Star (pool set by budget tier) |
| 40–80% | Filming | Filming (crew + Star) | **80%:** choose release marketing (options influenced by budget tier) |
| 80–100% | Post-production | Editing | Release |

This front-loaded first phase mirrors GDS, where the proposal mostly sets Fun and Creativity, Graphics gets its boost at 40%, and Sound at 80%.

### 80% decision (Locked direction; numbers Open)

- **Production is the team's job.** Staff continue to generate **Editing** quality naturally through the 80–100% post-production phase based on their skills. No separate CGI-vs-sound quality-choice minigame is needed.
- **Marketing is the player's job.** At 80%, choose a simple release-marketing push to affect opening awareness and **viewership**, not intrinsic quality or Audience/Critic review scores.
- **Budget tier influences which marketing options are available**, consistent with the previously locked tier-based production scope. There is no new post-production budget pot to manage.
- **Open for balancing/UI:** exact marketing tiers, cash costs if any, hype effects, and how they interact with studio-wide advertising. Don't assume illustrative campaign amounts are final.

This replaces v4's "CGI, sound or marketing" choice; it does **not** change the four meters or the staff's continuous contributions to them.

---

## 5. Staff (Locked direction, job list Open)

- Permanent, levelable employees with the four stats above, plus **genre experience** that grows with repeat work.
- **Staff XP is earned incrementally as employees work during production** (Locked), not awarded at review or release milestones. Production success does not retroactively change the work they performed. **Open:** exact XP rate, contribution-weighting and whether particular stats grow faster than others; do not silently assume identical XP or skill-specific XP.
- **Jobs work like GDS:** a job sets focus and growth, not limits. Everyone contributes to everything.
- **Promoted jobs combine basic ones**, e.g. **Director** = strong in Plot + Filming (exact list Open).
- **Software Engineer**, a special job needed to build your streaming service, like GDS's Hardware Engineer.
- Salaries and studio upkeep are **always paid from studio cash**, never from distributor funding.
- Proposal names: Writer, Editor, Showrunner, Auteur (the "does everything" top tier). Not final.

---

## 6. Stars (Locked direction, contracts Open)

- **"Stars"** is the gender-neutral term for the one lead you cast per production or season.
- No supporting cast management. Supporting talent is abstracted into the budget.
- Stars have **genre strengths** (e.g. Comedy, Drama, Romance, Action, Horror), plus **Fame** and **Salary**.
- **Fame → viewership** (draws people in). **Genre fit → quality** (the Filming meter). Fame does **not** raise scores.
  *Example:* a megastar in a rom-com outside their strengths still draws a big opening, but reviews are meh. An unknown rom-com specialist is cheap, opens small, and gets great reviews.
- The **budget tier** decides which Stars appear in auditions.
- Returning Stars can ask for raises but bring continuity; recasting is possible and not catastrophic.
- **Proposal:** script quality at 40% also affects who auditions.
- **Proposal:** Stars' genre skills grow in genres they keep doing.
- Personality traits and complex contracts: **Deferred**.

---

## 7. Economy and distribution (Locked)

### Budget tiers

- Pick **Small, Medium or Large** when planning. It's **one upfront cost**, like GDS's development cost, not a spendable account.
- The tier sets the **Star audition pool at 40%** and the **post-production options at 80%**.
- No money pots, leftovers, refunds or overruns are tracked during production.

### The pitch meeting (Shark Tank style)

- After planning, **2–3 distributors show up**, each with **one fixed offer**:
  - **Budget covered** (how much of the cost they pay)
  - **Royalty cut** (their share of the release earnings)
- **Pick exactly one, or walk away** and self-fund (pay 100%, keep 100%).
- **No multiple distributors, auctions, counter-offers, loans, refunds or overruns.**
- **Funding is not debt.** You never pay it back; the distributor earns only through its cut. If the project flops, the distributor takes the loss too.
- **Bids are a market hint:** strong bids suggest a hot idea, and weak or missing bids suggest rethinking it (or betting on yourself).

*Example (illustrative numbers): a Medium Horror + Robots movie, $100K*

| Option | Covers | Their cut | You pay | You keep |
|---|---|---|---|---|
| 🐺 Wolf (horror specialist) | $70K | 45% | $30K | 55% |
| 📺 XYZ (big general network) | $90K | 60% | $10K | 40% |
| 🎬 Starlight (small indie) | $30K | 15% | $70K | 85% |
| Walk away | $0 | 0% | $100K | 100% |

**Proposals:**
- The distributor sets the **reach**, i.e. how many people *can* watch (with genre fit). The detailed formula is not locked.
- For a TV series, the distributor signs for the **whole series**, and new seasons carry over the same terms.
- A small roster of named distributors with personalities; new ones may appear in new eras.

### Finite commercial runs (Locked)

**Every traditional release stops earning after its run**, like games leaving the market in GDS. No residuals or endless royalties. These commercial earnings are the studio's **Money** source, *not* an automatic weekly Prestige source. Prestige is given only when specific accomplishments trigger (§9).

| Format | Money shape |
|---|---|
| Movie | Big opening, declining sales, then zero |
| Limited series | Medium run, declining, then zero |
| TV series | Earns **each week an episode airs**; any short tail ends after the season |
| Soap opera | **Shelved for now** |

A finished title stays in your studio's history and catalog (for sequels, reboots and Hall of Fame), but **doesn't earn money on its own** unless you have a streaming service (§12).

---

## 8. Viewership vs. scores (Locked)

These are **two different things**, and the game treats them separately everywhere.

| | **Viewership** | **Scores** (Audience + Critic, 0–10) |
|---|---|---|
| Means | How many people watched | How much they liked it |
| Drives | **Money** | Renewals, Hall of Fame, reputation, legs |
| Raised by | Marketing, Star fame, distributor reach, hot trends | The four meters, combo grades, the weak-meter rule |

*Example:* a heavily marketed bad movie gets **huge opening viewership** and an **Audience score of 3**. It makes money on opening weekend, then word of mouth kills it.

### Legs: how scores shape viewership over time (Locked)

- **Hype sets the opening.**
- **Critics drive early buzz (roughly weeks 1–2).** Reviews come out at launch and sway people on the fence.
- **Audience drives the long legs (later weeks).** Word of mouth takes time to spread.
- High scores make viewership **hold or grow**; low scores make it **drop fast**.
- This makes critic/audience splits play out as stories: the popcorn blockbuster gets slammed early but recovers on word of mouth, while the critics' darling opens strong but fades.

### Feedback events (Locked)

Short news popups explain **why** viewership is moving, so players learn the system without a manual:
- "Critics are raving about *Dead Frequency*. Curious viewers are tuning in!"
- "Fans can't stop talking about it. Viewership is climbing!"
- "Harsh reviews are scaring off audiences."
- "Word of mouth is brutal. Viewers are dropping fast."

**Rule:** these events **reflect what's already happening**. They don't add random swings, so players can trust them as feedback.

An **original review aggregator site** (made-up name, not a Rotten Tomatoes copy) shows scores in the newspaper and social feed. *Example:* "*Dead Frequency* holds a 92% on Fresh Reel."

---

## 9. Scoring (Locked)

### How scores are made

1. **Both scores read the same four meters, with different weights.**
   - **Audience** leans on **Filming + Editing** (how it looks and feels).
   - **Critics** lean on **Plot + Writing** (the story and the script).
2. **Combo grades multiply the scores** (§10).
3. **Critic saturation mood** affects Critic scores (§11).
4. Marketing and Star fame do **not** affect scores (§8).

### Weak-meter rule

A meter is fine on its own **unless it's far worse than the others**. Then it becomes "the thing everyone remembers" and drags the score down. **The penalty follows the same weights as the scores:**

| Weak meter | Hurts most | Example |
|---|---|---|
| Filming or Editing | **Audience** | Good story, terrible CGI → "all anyone remembers is that awful CGI scene" |
| Plot or Writing | **Critics** | Gorgeous action, paper-thin story → Audience 8, Critics 4 |

Four mediocre meters = a mediocre score, not a disaster. The penalty only hits when one meter **sticks out badly**.

### Rising difficulty

- **Critics** get harsher through the critic panel (§11).
- **Audiences** get a **gentle rising bar tied to eras** (e.g. they expect better effects in later eras).

### Prestige achievements (Locked model; thresholds Open)

**Studio Prestige comes from discrete awards for the caliber of released productions or major commercial milestones.** It is **not** a routine reward per episode, per week, or simply for finishing a project.

Possible milestone *examples only* (not requirements, values or balance commitments):

| Trigger example | Illustrative Prestige payout |
|---|---:|
| All four quality meters exceed 100 in a production | +50 |
| Audience review score reaches 7.5/10 | +75 |
| Critic review score reaches 8.5/10 | +85 |
| Hall of Fame induction | +200 |
| A title reaches $10M lifetime commercial revenue | +100 |
| A title reaches 10M ticket/copy sales | +150 |

Review and quality achievements can be checked when the release is scored; sales/revenue achievements can trigger later, **once when the corresponding milestone is crossed**. An additional season may qualify on its own merits; the details of repeat awards, stacking, thresholds and cross-format normalization remain **Open**.

Prestige should represent accomplishments rather than merely elapsed time. A 20-episode order should not receive four times the Prestige of a five-episode order solely because it airs for four times as many weeks.

### Renewal and Hall of Fame

Renewal uses **the average of Audience and Critic scores**:

| Average score | Result |
|---|---|
| 0–4.0 | Can't renew |
| 4.0–9.0 | Renewable |
| 9.0–10 | **Hall of Fame** |

- Hall of Fame is **not** required for a new season.
- Hall of Fame titles give future seasons, sequels and follow-ups a popularity boost.
- Averaging lets cult hits survive. *Example:* Audience 3.5 + Critics 8.5 = 6.0, renewable.
- **Proposal:** still show both scores separately.

*Example (illustrative):* *Dead Frequency* (Horror + Aliens) finishes with Plot 70, Writing 40, Filming 60, Editing 80 → Audience 7.5, Critics 6.0 → average 6.75 → renewable. Reviews: "Creepy and slick, but the dialogue is rough."

---

## 10. Combos (Locked)

### Grades

- Every genre + theme combo has **two hidden grades: Audience and Critic**.
- Combo grades **multiply** the production's scores.
- **After you make a combo once, both grades appear in your combo book.**

*Illustrative examples, not final:*

| Combo | Audience | Critics | Type |
|---|---|---|---|
| Action + Superheroes | A | C | Crowd-pleaser |
| Horror + Robots | C | A | Cult classic potential |
| Comedy + Zombies | A | B | Solid all-rounder |
| Romance + Dinosaurs | D | D | ...probably not |

Unusual pairings aren't automatic cult hits. Themes stay **broad and recognizable** (Zombies, Superheroes, Vampires, Time Travel, Pirates, Robots, Dinosaurs, Spies, Mythology, Sports).

### Trends: the craze cycle

- Each craze runs **Rising → Hot → Saturated → Cooled**, and crazes are **semi-random**, with news warnings.
- **Hot** = a big **viewership** boost; **Saturated** = critics get harsh (§11); **Cooled** = back to normal.

### News feed

- **Early eras: a newspaper.** **Later eras: a social media feed** with an original made-up name.
- It shows trends, feedback events (§8) and review aggregator scores.
- **Proposal:** the feed also shows audience chatter about your shows.

### Repetition fatigue

| What you make | Fatigue |
|---|---|
| Same combo as a **new project** | Full fatigue |
| **Sequel** | Lighter fatigue |
| A **Hall of Fame** entry in that line | Softens fatigue |

TV seasons use their own fatigue system (§13).

### Unlocking genres and themes (all four sources)

| Source | Role |
|---|---|
| **Staff pitches** | A staffer suggests a new theme. **Proposal:** tie it to genre experience so it's less random |
| **Staff level-ups / training** | GDS-style unlocks |
| **New eras** | Big batches of new themes |
| **Research / purchase** | Buy the specific one you want |

---

## 11. Critic panel (Locked direction)

- A small panel of **named critics with visible tastes**.
- Over time, critics **retire and are replaced by harsher ones**, which keeps Hall of Fame rare.
- Critics stay **fair, not biased.** A critic is tougher on **oversaturated** genres or themes, not ones they hate. *Example:* after 40 superhero movies in five years, Vera grades them harder; if superheroes cool off, she eases up.
- Players can see the panel and get hints about each critic's taste.
- **Proposals:** swap critics slowly; tie new critic waves to new eras.

---

## 12. Your streaming service (Locked)

### Unlocking it

- Works **like a GDS console**: unlock it, then build it.
- Requires **studio Prestige + cash + a big enough catalog**, plus a **Software Engineer** who builds it over time. Exact Prestige threshold is Open.

### How it makes money

- **Income comes from total subscribers**, not per-title payments or tracked views. It's one business, not another pile of title revenue bars.
- **New releases = growth.** Big new releases bring in subscribers.
- **Catalog = retention.** Your catalog slows cancellations but **can't grow subscribers on its own**. This keeps money from piling up endlessly late in the game.
- **Hall of Fame titles are evergreens**, your strongest retention.
- **Going quiet = a slow, visible drift.** If you don't release for a while, subscribers slowly cancel, with a "subscribers getting restless" warning. A strong catalog slows the drift.
- **The platform has operating costs.** Recurring revenue isn't guaranteed profit.

### The catalog fills itself

- Every studio-owned title that has finished its commercial run **joins your service automatically**, with no manual moving or window management.
- **Each TV season joins after its own run ends**, even while later seasons are still being made or aired.
- Titles **don't restart their own payouts** when they join. Their value shows up only through subscribers.

### Two release paths after streaming launches

You can **keep using distributors** or **self-fund Streaming Originals**. Neither is forced.

| Path | Now | Later |
|---|---|---|
| **Traditional release** | Distributor may cover part of the cost; normal commercial run earnings, minus their cut | Joins your catalog after its run. It's no longer fresh by then, so it mostly helps retention |
| **Streaming Original** | You pay 100%; **no release earnings** | Debuts exclusively on your service, giving a **bigger immediate subscriber boost**, then joins the catalog |

The tradeoff is **cash now vs. subscribers now**. **Open:** how big these effects are (balancing).

**Proposals:**
- A full-season "binge drop" option for Streaming Original series.
- Platform upgrades over time (better app → more subscribers), like console generations.

---

## 13. TV shows over time

### Show-age fatigue (Locked: seasons get fatigue)

Long-running shows wear out ("a season or two too long").

**Proposal:** barely noticeable in the first few seasons, then builds faster; great quality slows it but never stops it.

### Ending a show

- **Proposal: Final Season announcement** for a hype boost and a better Hall of Fame shot.
- That creates the dilemma: **end on a high** vs. **keep milking it** (steady money, sliding scores, Star raises).

### Reinventing a show

**Locked: the theme twist.**
- **Genre is locked for the whole series.**
- When ordering a new season, you can **add a twist theme**. Its grade with the show's genre decides the outcome:
  - Good grade (Horror + Time Travel) → "The show is reborn!" Fatigue drops.
  - Bad grade (Horror + Sports) → "The show lost its way." Fans leave.

**Proposals (other shake-ups):**
- **New Star:** a fresh lead or a big-name guest for a season.
- **Big event season:** bigger budget, fewer episodes.
- **Guardrail:** shake-ups get **weaker if you keep doing them**.

**Proposals (random revivals):**
- **Viral moment:** an episode blows up on the feed, and the next season gets a hype boost.
- **Rediscovery:** an old show catches on with your subscribers and gives a retention or subscriber bump. Not title revenue (§12).
- **Reboot demand:** years later, the feed begs for a show's return. Bring back the original Star (now famous and pricey) or recast.

### Between seasons and announcements (Locked direction; thresholds Open)

- **Normal gaps between TV seasons are expected and carry no penalty.** A small studio makes one main production at a time and cannot maintain a Netflix-scale cadence.
- **Unusually long hiatuses** (roughly a year or two without a season, *illustrative only*) can gradually lower **anticipation for the next season**, not retroactively lower quality, past review scores or an established fanbase.
- When officially ordering a new season, the player may make **one announcement** that builds that show's anticipation, even while a different production is underway. Announcements cannot be spammed to reset the hiatus clock forever.
- **Studio-wide advertising** is available anytime, GDS-style, building a durable company fanbase helpful to future releases. **Title-specific marketing** remains the separate 80% production action; it affects that release's opening viewership. This does not add a full campaign-management screen for each show.
- **Open:** exact hiatus curve, one-time announcement effects/costs and how anticipation is displayed. We do not yet require a separate permanent fanbase stat for every show; keep the UI light.

### Episode-count capacity (Locked direction; thresholds Open)

**Longer TV season orders unlock with studio Prestige/capability, not with the individual show's prior-season success.** Once the studio has earned the capacity, a brand-new TV series may use the larger order too, whether distributor-backed or self-funded.

| Example studio tier | Maximum TV season order |
|---|---:|
| Unknown studio | 5 episodes |
| Rising studio | 10 episodes |
| Established studio | 15 episodes |
| Major studio | 20 episodes |

These tiers, names and thresholds are **illustrative**, not a locked progression table. Smaller orders stay available: a five-episode season may be preferable even after twenty is unlocked. **Prestige is earned from qualifying milestones (§9)**, not automatically for producing a long season.

### Later

- **Genre families** (e.g. a "Scary" family with Horror, Thriller, Suspense) for in-family genre shifts. If added: shift within a family only, with an audience hit.

---

## 14. Characters and art

- Staff, Stars, critics and distributors each get a **name and a portrait** (Locked).
- **Art style, engine and platform: decided later.** Prototype visuals = moving rectangles.

---

## 15. Next decisions, in priority order

1. **The first hour of play:** starting cash, staff, first project, first unlocks; where the first Prestige milestone lands.
2. **Prestige balancing:** milestone thresholds, awards, whether production-level bonuses repeat for every qualifying release, and once-only studio career awards (§9).
3. **Staff XP balancing:** continuous XP rate, meaningful individual contribution, job/genre growth (§5).
4. **Star contracts and raises.**
5. **Eras:** how many, what each unlocks, how the audience bar rises.
6. **Distributor roster:** how many exist, and how the 2–3 at each pitch are chosen.
7. **Budget tiers:** are three enough, or do more unlock?
8. **Final job list.**
9. **TV fine-tuning:** hiatus thresholds, announcement effects, and Prestige gates for 5/10/15/20 episode orders (§13).
10. **Which TV shake-ups and revivals to keep.**
11. **Streaming balance:** Original vs. traditional effect sizes, churn speed, operating costs.
12. **Marketing tuning:** title-specific campaign costs/boosts and studio advertising rates (§4, §13).

---

## 16. Decision ledger

| Topic | Status |
|---|---|
| GDS as main inspiration, original names and art | Locked |
| Economy feels like GDS, not a finance spreadsheet | Locked |
| Start as small production company; movies + limited series first | Locked |
| One production at a time early | Locked |
| Weekly time ticks; weekly episode airing | Locked |
| Soap operas | Shelved |
| Stats = meters: Plot / Writing / Filming / Editing | Locked |
| All staff contribute to all meters, GDS-style | Locked |
| **Staff XP is earned during active production, not as a release reward** | **Locked** |
| **Studio Prestige comes from caliber/achievement milestones, not passive weekly awards** | **Locked** |
| **Studio Money comes from release sales/airings and later aggregate subscriber revenue** | **Locked** |
| Prestige milestone thresholds, amounts, repeat awards | Open |
| Phases: writing → filming with Star → post (Editing) | Locked |
| Budget tiers (Small/Medium/Large) = one upfront cost | Locked |
| Budget tier gates the 40% Star pool and 80% marketing options | Locked direction; specifics Open |
| Pitch meeting: 2–3 fixed offers, pick one or self-fund | Locked |
| Funding is not debt; distributor earns only via its cut | Locked |
| No loans, stacking, auctions, counters, refunds, overruns | Locked |
| Bids hint at how hot your idea is | Locked |
| Salaries and upkeep always from studio cash | Locked |
| Traditional releases stop earning after their run; no residuals | Locked |
| Formats differ by money shape | Locked |
| Viewership (money) and scores (liking) are separate | Locked |
| Marketing, Star fame, reach, hot trends → viewership only | Locked |
| Legs: critics drive early buzz, audience drives word of mouth | Locked |
| Feedback events explain viewership changes; never random | Locked |
| Original review aggregator site in the news feed | Locked |
| Audience leans Filming + Editing; Critics lean Plot + Writing | Locked |
| Combo grades multiply scores | Locked |
| Weak-meter penalty, weighted the same way as scores | Locked |
| Rising bar: harsher critics + gentle audience bar by era | Locked |
| Renewal by average score: 0–4 / 4–9 / 9–10 Hall of Fame | Locked |
| Two combo grades, revealed after first use | Locked |
| Semi-random craze cycle | Locked |
| Newspaper early, original social feed later | Locked |
| Repetition fatigue: full / lighter for sequels / softened by Hall of Fame | Locked |
| Unlocks via staff pitches, level-ups/training, eras, research | Locked |
| Critic panel: visible tastes, harsher replacements, saturation not bias | Locked |
| TV seasons get show-age fatigue | Locked |
| Genre locked per series; theme twist to reinvent | Locked |
| Streaming unlock: Prestige + cash + catalog + Software Engineer | Locked direction; thresholds Open |
| Streaming income = total subscribers, not per-title | Locked |
| New releases grow subscribers; catalog retains; Hall of Fame = evergreens | Locked |
| Slow, visible subscriber drift when quiet | Locked |
| Finished titles join streaming automatically; each TV season after its run | Locked |
| Both release paths stay available after streaming launches | Locked |
| Streaming Originals: no release earnings, bigger subscriber boost | Locked direction; sizes Open |
| Names + portraits for characters; art later | Locked |
| At 80%, the team handles Editing; player chooses release marketing | Locked direction; costs/effects Open |
| Studio-wide advertising builds lasting fans; title marketing drives launch hype | Locked direction; tuning Open |
| Normal TV hiatuses unpenalized; long hiatuses erode anticipation | Locked direction; thresholds Open |
| New-season one-time announcement builds anticipation | Locked direction; effects Open |
| TV episode capacity grows with studio Prestige (illustrative caps 5/10/15/20) | Locked direction; thresholds Open |
| Distributor reach formula; TV deal covers whole series | Proposal |
| Show-age fatigue curve; Final Season | Proposal |
| Other shake-ups and random revivals | Proposal |
| Script quality affects audition pool; Stars' skills grow | Proposal |
| Binge drops for Originals; platform upgrades | Proposal |
| Eras of entertainment spoof | Proposal |
| Late-game multiple productions | Open |
| Genre families | Later |
| Actor personalities, supporting casts, complex contracts | Deferred |
| Engine, platform, art direction | Later |

**Removed from earlier versions:** "upfront payout + catalog tail," deal windows with 100% post-window earnings, multi-partner distribution, locked money pots and leftover refunds, "Star fame and marketing add to the Audience score," "80% = patch your weakest meter" (replaced with player marketing; staff Editing continues automatically), blanket first-season 5/10 restriction (replaced by studio Prestige capacity).

---

**Workflow:** Keep exploring and deciding. Only write an implementation spec, prototype or balance sheet once the next few decisions in §15 are made.
