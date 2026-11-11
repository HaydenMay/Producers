# Entertainment Studio Tycoon — Consolidated Design Handoff v9.6

**Status:** Concept design and critique; **NOT approved for implementation**  
**Compiled:** November 9, 2026  
**Source of truth:** this document (v9.6) supersedes all earlier versions and update notes; nothing marked Open/Proposal becomes Locked merely because it appears here.  
**Audience:** Claude, acting as a skeptical game-design reviewer. The goal is to identify genuine holes and finish the few remaining design decisions **before** engine, platform, code, art style, and implementation planning.

## New in v9.6 (November 9, 2026)

Applies `entertainment_studio_v9_5_decision_notes_for_claude.md`. Targeted amendment only.

1. **When Star relationships drop (Locked, clarified by the designer).** A relationship drops in **two cases**: (a) a project with that Star **hurts their career** (a flop / Fame falls), and (b) the studio **replaces them in an established role** for a **new season or direct sequel** of the same IP. On the casting side, recasting is the **only** trigger: **not picking a Star who randomly appears in auditions, or using someone else in an unrelated project, never lowers the relationship.** *(Correction: the v9.5 decision notes said flops don't lower relationships. The designer clarified that "only" referred to casting choices, not flops.)* Reboots are not covered yet (§6).
2. **Review cleanup.** §19A–19B now separate resolved questions (archived) from genuinely open ones, so settled decisions aren't presented as up for debate.
3. **Balance test noted (recommendation, not a mechanic).** Test the combined quality growth from staff stats, Star skills and studio genre levels once sample production math exists. Don't nerf any of them preemptively (§19B).

## New in v9.5 (November 9, 2026)

1. **Star skills = genre families (Locked).** Stars have **one skill per genre family** (around 5–6, e.g. Scary, Funny, Romantic, Action, Dramatic). Every production genre belongs to one family; a Horror or Thriller uses the Star's **Scary** skill. **Themes never affect Star skills.** Themes drive combo grades, trends, fatigue and twists. Genre families are partly un-parked: used for Star skills now, while TV genre shifts stay Later (§6, §13).
2. **Star level = total point budget (Locked).** A Star's level sets a **total skill-point budget** spread across families, so **nobody is a master of all trades**. Growth adds points to the **family they work in**, within the budget. The **top level's budget stays below "maxed in everything."** Revises v9.4's per-skill cap wording (§6).
3. **Random point spreads; shapes internal only (Locked).** New Stars get points spread at random within their budget. The generator uses balanced / two-focus / specialist shapes **internally** to get a good mix, but **never shows a label**; the numbers speak for themselves (§6).
4. **Call-backs (Locked).** At 40%, alongside the normal audition cards, a **scrollable catalog of every Star you've worked with**, at their current price. Reuse is allowed; Fame-based pricing and level budgets do the limiting. **Overexposure** (back-to-back casting lowers hype) is a **tuning fallback only**, not a feature (§6).
5. **Staff genre experience cut; studio genre levels added (Locked).** Individual staff improve only their **four stats**. Instead, the **studio** gains a level **per genre** (not per family) as it makes that genre, GDS-style, giving a small quality bonus (§5).
6. **Staff pitches come from a high Plot stat (Locked).** They replace the old "tie pitches to genre experience" Proposal; **Proposal:** pitches lean toward the studio's strongest genres (§10).
7. **Tuning note:** keep **hidden gems** (high level, low Fame) rare, so building up your own Newcomer stays the main path (§6).

## New in v9.4 (November 9, 2026)

1. **Star levels (Locked).** Stars now have a **Level** that rises with career experience and **caps their genre skills**. Level is also the **generation guardrail**: randomly generated Stars can never have skills above their level's cap, so you'll never see a Level 2 Newcomer with 95s. Skills **grow with genre work** up to the cap. This promotes the old "Stars' skills grow" Proposal to Locked (§6).
2. **Price stays Fame-based (Locked).** Level and skill do **not** raise a Star's price, so skilled unknowns ("diamonds in the rough") stay cheap (§6).
3. **Free marketing option (Locked).** The 80% choice always includes a free **"No campaign"** option, closing the same soft-lock v9.3 closed for casting (§4, §7).
4. **Cleanup:** removed stale "Open"/"bankruptcy" wording now covered by financial safety; marked Star raises resolved; fixed leftover budget-tier wording; updated the header and §21 version.

## New in v9.3 — Pre-display Star affordability safety (Locked)

At the **40% casting milestone**, the game must **validate affordability before displaying auditions**, not after the player sees an impossible choice. Determine the unspent project advance plus any **spendable** studio cash; generate the normal 4–5 candidate cards and their actual fees; if none is affordable, **replace one candidate card with a $0, Level 0, no-name Newcomer before the audition screen opens**. The fallback is presented as an ordinary candidate on the first screen, never a last-minute rescue dialog. It is a genuine low-Fame, low-skill Star with a career that can develop naturally. Preserve the usual 4–5-card size, show exact fees and skills, and do not guarantee the finished movie will be terrible just because its Star began at Level 0. See §§6–7 and the decision ledger.

**Supersedes the vaguer v9.1 phrase “an affordable Newcomer always auditions”** with explicit timing and fallback rules; everything else remains unchanged.

## What changed since v8 (November 9, 2026)

Integrates `entertainment_studio_v8_alignment_notes_for_claude.md`. Targeted changes only; unrelated locked decisions are untouched.

1. **Financing bids (Locked).** Distributors offer an **absolute upfront advance + a royalty %** (e.g. Wolf $100K for 15%, Starlight $50K for 2%). Pick one or self-fund; still no stacking or haggling. Budget tiers stay **shelved**, and there's **no spending ceiling**.
2. **Base cost + flexible spending (Locked).** Every production has an **unavoidable base cost** (set by format, and length for TV). The **Star fee and marketing are project expenses** that can use any remaining advance; studio cash covers anything beyond that. **Supersedes v8's "Star fee and marketing always from studio cash, never covered by distributors."**
3. **Surplus kept (Locked).** On **successful completion**, the studio keeps **100% of any unused advance**. No refund, no split-savings rule.
4. **Overruns allowed (Locked).** Spending past the advance is paid from studio cash. **Supersedes v8's "no refunds or overruns."**
5. **Cancellation (Locked).** Canceling a project means **repaying the advance**. The advance is otherwise not a loan. *(Resolved in v9.1: you can only cancel if you can repay.)*
6. **Distributor trust (Locked direction).** Each distributor has a relationship/trust state that responds to the **explainable outcomes** of projects it backed. Formula is Open.
7. **Causal outcomes (Locked principle).** Scores, viewership, fans, Prestige and distributor reactions **connect causally**. They are never independent random rolls (§3).
8. **Designer intent on cheap duds (Locked).** Making a cheap dud and pocketing the surplus is **allowed but inefficient**. No anti-exploit barriers unless simulation proves they're needed.
9. **Financial safety (Locked, v9.1).** No bankruptcy and no fail states; hard times just mean slower progress. A **lifeline offer** always appears, an **affordable Newcomer** always auditions, you can **only cancel if you can repay**, and cash can **dip negative** with limits until your next earnings clear it (§7).
10. **Auditions and Star pricing (Locked, v9.2; safety clarified in v9.3).** Any Star can audition, with 4–5 shown each time. Price = Fame-based fee minus a Prestige discount and a relationship discount. Star relationships reuse the distributor indicator: they rise when you boost a Star's career and drop when a project hurts their career or when you replace them in an established role for a new season or direct sequel (v9.6; §6). Not picking a Star from auditions never counts. Before cards display, the system guarantees an affordable option, inserting a free Level 0 Newcomer if the normal lineup has none.

## What changed in v8 (kept for reference)

Decisions made after Claude's v7 review:

1. **Budget tiers are shelved (Later).** The Small/Medium/Large concept felt wonky and is parked for a future version. **Placeholder until revisited:** each production's cost is set by its format (and episode count for TV), and distributors still cover part of it in the pitch meeting.
2. *(Revised in v9: the Star fee now uses the remaining advance first, then cash.)* **The Star fee is a separate one-time charge** from studio cash when you hire the Star. This is what makes returning-Star raises matter. **Open:** what decides which Stars audition, now that budget tiers are shelved (likely studio Prestige).
3. **Reach is Locked.** Distributors bring reach. A self-funded traditional release gets **small reach until you own a streaming service**; Streaming Originals reach your subscribers.
4. **Studio upgrades unlock formats, GDS-style (Locked direction).** Hitting **money + Prestige milestones** upgrades the studio and unlocks formats like TV series. The exact link is **Later**.
5. **Fans belong to an IP (franchise) (Locked).** Seasons, sequels and reboots keep **all** the IP's fans, spinoffs keep **some**, and a new IP starts fresh. The player marks the relationship when planning ("Sequel to…").
6. **Season announcements = show-specific advertising (Locked).** They hype one show's upcoming season, don't use the production slot, and the hype **fades** over time.
7. **Streaming is built in the background (Locked).** The Software Engineer builds it while you keep producing, but is **off movies and shows until it's done**.
8. **Clarity fixes from the review:** score boundaries; the review site's % = Critic score × 10; a fuller list of viewership raisers; all titles are studio-owned; the distributor cut = % of each week's gross; industry output is abstract (no rival studio sim); the tutorial skip step branches for returning players; the tutorial project is a Movie; limited series is available right after it.
9. **Review recommendations added as Proposals only:** twist-season scoring, condition-triggered viral moments, retention-only rediscovery, turning-point-only feedback popups, distributor offer inputs, sequels always allowed.

## What changed in v7 (kept for reference)

1. **Tutorial replay behavior is locked.** New-game onboarding is optional. The first guided project occurs only during the first production of that save, then normal play begins. The game remembers a completed tutorial across saves; later new games greet the player as a returner and offer **Jump Right In** or **Replay Tutorial**. Brief, dismissible new-feature tips are separate. The player can always choose to replay when starting a new save.
2. **The starting team is exactly two employees.** They're competent enough for a **mediocre first movie**, not an artificial blockbuster. The optional tutorial ends with that first project, then the studio opens into free play. Don't reopen the number or intent of those employees.
3. **Fan scope was deliberately revised in v6.** Fans belong to a **title/franchise line**, not to the studio. Backlash hurts that line's future productions. There is NO persistent studio fan total.
4. **Studio-wide ads create temporary, fading buzz** for the next released production. The 80% choice is separate **title-specific marketing**; both may contribute to the opening. Neither changes inherent Audience/Critic review scores.
5. **Progression has three primary economies:** incremental **Staff XP during production**, milestone-based **Studio Prestige** for product caliber and achievements, and **Studio Money** from commercial earnings or subscriptions. Title fans and temporary hype are audience state, not a fourth earn/spend company currency.
6. **TV episode capacity is tied to studio Prestige**, not a blanket restriction on every debut season. Illustrative caps are 5/10/15/20 episodes; exact stages are open. Small seasons remain useful.
7. **The 80% milestone is player marketing, not a CGI/sound spending puzzle.** The team does editing/postproduction quality work automatically.
8. **Ordinary interseason breaks are normal.** Unusually long inactivity reduces next-season anticipation, not historical reviews or title fans; a single season announcement may help when an upcoming season is officially ordered. Mechanism and thresholds remain open.

### Historical design evolution, to avoid re-opening dead approaches

- We started from Game Dev Story's **genre + broad theme → production → release → reinvest** loop, then chose an entertainment studio that starts with **movies and limited series**, later learns TV, and can eventually build its own streaming service.
- Explored a movie-studio-only concept; rejected it in favor of a broader film/TV studio with recurring series and stars.
- Explored actor personalities, multiple supporting actors, and soap-opera blocks; **personalities/supporting cast are deferred and soaps shelved** (not promised for launch).
- Explored many simultaneous distributor partners, blended royalties, budget overrun accounts, negotiation, and paid distribution. **Rejected** as too complex. The locked model is a simple **one-distributor fixed-offer pitch or self-fund**. (v9: the fixed upfront cost became a **base cost + advance + kept surplus** model, §7. It's still one distributor and one advance, not a ledger.)
- Explored enduring per-title catalog royalties. **Rejected**: traditional commercial runs end; streaming earns one aggregate subscriber income stream.
- Explored marketing as quality and an 80% CGI vs. sound optimization. **Rejected**: marketing changes viewership; staff generate quality.
- Explored automatic Prestige for completing projects or airing episodes. **Rejected**: Prestige belongs to explicit caliber and achievement milestones; employee XP belongs to work itself.
- Explored long-lived studio fans. **Rejected**: each title line has fans, while general studio ads produce short-lived hype.

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

1. **Plan:** pick format, genre and theme, and mark whether it continues an existing IP (sequel, season, reboot, spinoff).
2. **Pitch meeting:** pick a distributor or self-fund (§7).
3. **Produce:** staff build quality during a visible production, with milestone decisions at 40% and 80%.
4. **Release:** viewers, scores, word of mouth, money.
5. **Reinvest:** train and hire staff, unlock new things, repeat.

- **One main production at a time** (Locked for early game; late-game concurrency is **Open**).
- Released content keeps earning (during its run) while you make the next project.
- Production is mostly automatic, with a few meaningful decisions.
- **Time passes week by week, like GDS.** One TV episode airs per week.
- **Studio upgrades (Locked direction):** like GDS's office moves, hitting **money + Prestige milestones** upgrades your studio and unlocks new formats (e.g. TV series). The exact milestones and link are **Later**.

### Three progression economies (Locked)

| Resource | Earned from | What it does |
|---|---|---|
| **Staff XP** | Employees **working during production**, as work happens | Levels up the people you hired (four stats only; job growth and training remain possible). Genre experience belongs to the studio, not individuals (§5) |
| **Studio Prestige** | **Achievement/milestone awards** for the caliber and commercial accomplishments of released works | Cumulative proof of studio capability; unlocks bigger episode orders and other company opportunities |
| **Studio Money** | **Sales / box office / TV airing earnings** and, later, **aggregate streaming subscriptions** | Pays for production costs, salaries, training, advertising and upgrades |

**Timing rule:** Production → staff XP; qualifying achievements at release or during the commercial run → Prestige; actual commercial/subscription earnings → Money. **A release does not give employees a second XP payout just for good reviews; a passing week does not automatically give Prestige.** Distributor advances finance a production; they are **not sales revenue**. Any unused advance becomes studio Money **at successful completion** (§7). There's still no XP or Prestige just for finishing.

### Causal outcomes (Locked principle)

A production's **scores, viewership, sales, IP fans, Prestige and distributor reactions connect causally.** They are **never independent random rolls.** Variation can exist, but every player-facing outcome needs a **visible cause**.

1. **Staff work + Star genre fit + combo grades + era/critic expectations + the weak-meter rule** → **Audience and Critic scores**.
2. **Marketing, studio buzz, distributor reach, Star Fame, trends and existing IP fans** → **opening viewership**. None of these improves reviews.
3. **Critic reception** → early buzz. **Audience reception** → later word of mouth and legs.
4. **Viewership over the finite run** → **sales Money**. Good reception and reach grow **IP fans**; hyped duds lose them.
5. **Qualifying milestones** → **Prestige**. Staff earn **XP during production**, not from results.
6. **Distributor trust** changes because of the backed project's **actual, explainable outcome** (§7).

*Examples:*
- An 8.7 Audience / 9.3 Critic film should normally have strong legs and good sales. Underperforming is allowed **only with a concrete cause** the player can see, like very limited reach.
- A heavily advertised 3/10 film opens big, then collapses on bad word of mouth.
- The game never randomly produces "great reviews, bad box office" with no explanation.

**Fans belong to an IP (franchise), not the studio (Locked).** "Title line" elsewhere in this doc means the same thing as IP. There is **no studio-wide fan count**, and backlash to one IP doesn't damage other productions.

| Relationship (marked by the player at planning) | Fans |
|---|---|
| New season, sequel or reboot of an IP | Keeps **all** the IP's fans |
| Spinoff of an IP | Keeps **some** of them |
| Anything else | A **new IP** that starts from zero |

*Example:* *Dead Frequency* has 1M fans. Season 2 and a *Dead Frequency* movie sequel get all of them. A spinoff about a side character gets some. A totally new alien show starts fresh. Exact effect sizes are Open.

**Temporary hype is not Fans or Prestige.** Studio advertising is an optional, anytime action that creates **fading buzz for the next release**, while the 80% campaign targets that project. General buzz and title hype may combine, subject to later balance. Neither can permanently increase the studio's fanbase (none exists) or rewrite underlying scores.

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
| 0–40% | Conception & writing | Plot + Writing | **40%:** audition results come back; hire your Star (4–5 options; any Star can audition, §6) |
| 40–80% | Filming | Filming (crew + Star) | **80%:** choose release marketing (options and costs Open) |
| 80–100% | Post-production | Editing | Release |

This front-loaded first phase mirrors GDS, where the proposal mostly sets Fun and Creativity, Graphics gets its boost at 40%, and Sound at 80%.

### 80% decision (Locked direction; numbers Open)

- **Production is the team's job.** Staff continue to generate **Editing** quality naturally through the 80–100% post-production phase based on their skills. No separate CGI-vs-sound quality-choice minigame is needed.
- **Marketing is the player's job.** At 80%, choose a simple release-marketing push to affect opening awareness and **viewership**, not intrinsic quality or Audience/Critic review scores.
- **Marketing is a project expense (Locked, v9).** Its cost can use any remaining distributor advance; studio cash covers the rest (§7). Which options exist and what they cost is **Open**. Marketing still only affects **viewership**, never scores.
- **A free "No campaign" option is always available (Locked, v9.4)**, so the 80% milestone can never soft-lock, even with no advance left and negative cash.
- **Open for balancing/UI:** exact marketing tiers, cash costs if any, hype effects, and how they interact with studio-wide advertising. Don't assume illustrative campaign amounts are final.

This replaces v4's "CGI, sound or marketing" choice; it does **not** change the four meters or the staff's continuous contributions to them.

---

## 5. Staff (Locked direction, job list Open)

- Permanent, levelable employees with the four stats above. **They improve their four stats in general** (XP, training), **not at specific genres or themes** (v9.5: individual genre experience cut).

### Studio genre levels (Locked, v9.5)

- The **studio** (not individual staff) gains a **level in each genre** as it makes that genre, GDS-style.
- **Per genre, not per family.** Making a Paranormal movie levels Paranormal only; it doesn't level Thriller or Horror.
- A higher studio genre level gives a **small quality bonus** whenever you make that genre again, shown on the planning screen (e.g. "Studio Horror Lv 3").
- *Example:* your fourth horror movie gets a small boost because the studio knows horror by now, even with a brand-new writer on the team.
- **Open:** level count, bonus size, and how it interacts with the rising era bar (balancing).
- **Staff XP is earned incrementally as employees work during production** (Locked), not awarded at review or release milestones. Production success does not retroactively change the work they performed. **Open:** exact XP rate, contribution-weighting and whether particular stats grow faster than others; do not silently assume identical XP or skill-specific XP.
- **Jobs work like GDS:** a job sets focus and growth, not limits. Everyone contributes to everything.
- **Promoted jobs combine basic ones**, e.g. **Director** = strong in Plot + Filming (exact list Open).
- **Software Engineer**, a special job needed to build your streaming service, like GDS's Hardware Engineer.
- Salaries and studio upkeep are **always paid from studio cash**, never from a distributor advance. They're studio-wide expenses, not project costs.
- Proposal names: Writer, Editor, Showrunner, Auteur (the "does everything" top tier). Not final.

---

## 6. Stars (Locked direction, contracts Open)

- **"Stars"** is the gender-neutral term for the one lead you cast per production or season.
- No supporting cast management. Supporting talent is abstracted into the production cost.
- Stars have **one skill per genre family** (v9.5), plus a **Level**, **Fame** and **Salary**.

### Star skills = genre families (Locked, v9.5)

- Around **5–6 families**, e.g. **Scary, Funny, Romantic, Action, Dramatic** (final list Open).
- **Every production genre belongs to one family.** Horror, Thriller, Slasher and Paranormal all use the Star's **Scary** skill.
- **Themes never affect Star skills.** Zombies, Robots, Pirates and so on drive combo grades, trends, fatigue and twists only, so themes can keep growing without making Star cards longer.
- *Example:* Horror + Zombies and Horror + Pirates both use Riley's Scary skill. The theme decides whether the combo works; the Star decides how well it's acted.
- **Families are a Star-only idea.** Studio genre levels (§5) track exact genres.

### Star levels (Locked, v9.4; budget rule v9.5)

- **Level = career experience.** It rises as the Star completes projects, like staff XP.
- **Level sets a total skill-point budget** spread across the families. **Nobody can be a master of all trades:** every point in Scary is a point not in Funny.
- **The top level's budget stays below "maxed in everything,"** so even a max-level Star can't be great at every family.
- **Generation guardrail:** every randomly generated Star respects their level's budget. No low-level Star with stacked stats.
- **Random spreads, internal shapes:** points are spread at random at creation. The generator uses **balanced / two-focus / specialist** shapes internally to get a good mix, but **no label is shown**; the numbers speak for themselves.

*Illustrative Level 1 budget of 100 (not balance targets):*

| Hidden shape | Example split across 4 families |
|---|---|
| Balanced | 25 / 25 / 20 / 30 |
| Two-focus | 15 / 45 / 30 / 10 |
| Specialist | 10 / 60 / 15 / 15 |

- **Skills grow in the family they work in**, within the level budget. **Your casting shapes their career:** keep putting a balanced Star in horror and they slowly become a Scary specialist. At the budget limit, they need to level up to keep improving.
- **Level is separate from Fame:**
  - **High level, low Fame** = a hidden gem: skilled, cheap, unknown.
  - **Low level, high Fame** = a celebrity who can't really act: draws a crowd, gets weak reviews.
- **Level and skill don't affect price.** Price stays Fame-based (Star pricing, below), so diamonds in the rough stay cheap.
- **Level 0** is the lowest level, used by the v9.3 free fallback Newcomer.
- **Open:** number of levels, budget per level, the top-level budget, growth rates (balancing).
- **Tuning note:** keep **hidden gems** (high level, low Fame) **rare**, so building up your own Newcomer stays the main path.

*Example:*
> **Riley Park** · Level 4 · Fame 10: Scary 62, Funny 30, Dramatic 20 · $
> Three horror movies later: Level 7 · Fame 55 · Scary 84.

**The build-someone-up story:** cast a cheap Level 1 nobody; their skills grow with each project; your hits raise their Fame and your relationship; by the time they're a megastar, the relationship discount means they still give *you* a better deal than anyone else.
- **Fame → viewership** (draws people in). **Genre fit → quality** (the Filming meter). Fame does **not** raise scores.
  *Example:* a megastar in a rom-com outside their strengths still draws a big opening, but reviews are meh. An unknown rom-com specialist is cheap, opens small, and gets great reviews.
- **Star fee (Locked, revised in v9):** the hired Star's Salary is a **one-time project expense at 40%**, shown on the card before you confirm. It's paid from any **remaining distributor advance first**, then studio cash. It's separate from the base cost, which is why returning-Star raises matter: a raise eats into your surplus or your cash. Fame and fit work exactly as before; the fee never changes scores.
### Who auditions (Locked, v9.2)

- **Any Star can audition.** There's no hard Prestige gate; price is the limit.
- **Each audition shows 4–5 Stars** with a spread of options:
  - **at least one affordable Newcomer** (the pre-display fallback guarantees this; §7 Financial safety)
  - **a mid-level Star or two**
  - **one big name**, priced for your current Prestige
  - weighted toward Stars who fit the project's genre
- **Pre-display validation (Locked, v9.3):** at 40%, **before showing audition cards**, calculate the unspent project advance plus spendable studio cash (negative cash does not count as spending power). Generate the 4–5 normal Star candidates and evaluate their actual prices, including discounts. If **none of those cards is affordable**, replace one candidate with a **$0 Level 0 Newcomer** before rendering the list. Do not present an unaffordable-only slate and then rescue the player afterward. Keep 4–5 cards; other expensive candidates may remain visible.
- **The free fallback is a real Star:** very low Fame and genre skills, exact stats shown, genuine bio/career progression possible. Their price is exactly $0 for the emergency audition; do not automatically force a bad review or a bad movie.
- **No refusals:** big Stars don't flat-out decline low-Prestige studios. The higher price does that job.
- **Proposal (unchanged):** a better script by 40% could draw a stronger lineup.

### Call-backs (Locked, v9.5)

- At 40%, alongside the normal 4–5 audition cards, a **"Call back" catalog** you can **scroll through**: every Star you've worked with, at their **current** price.
- **Reusing a favorite Star is allowed** and is what the relationship arc builds toward.
- **It doesn't break the game:** hits raise Fame and price follows Fame (the relationship discount softens it but is capped), and level budgets mean "good at everything" never happens.
  *Example:* Riley costs $10K in year 1. After five hits together they're a megastar. Other studios would pay $90K; you pay $60K.
- **Tuning fallback only:** if playtesting shows reuse is still too strong, add mild **overexposure** (back-to-back casting slightly lowers opening hype: "Riley again?"). Not a planned feature.

### Star pricing (Locked, v9.2)

**Price = Fame-based fee − Prestige discount − relationship discount.**

| Part | What drives it |
|---|---|
| **Fame-based fee** | Bigger Fame = higher fee. **Hits raise Fame**, flops can lower it. |
| **Prestige discount** | Big names charge a little-known studio more; the premium shrinks as your Prestige rises. |
| **Relationship discount** | Loyalty from your history together (below). |

- **The returning-Star raise is just Fame-based pricing:** a hit raises their Fame, so they cost more. No special-case raise rule.
- **The card always shows the price breakdown**, so players see why a price changed (causal rule, §3).
- **"Eager to redeem" pricing was considered and dropped**; it was never locked.

*Example: Jordan Vale (Action 90, Fame 85)* costs about $90K in year 1 at low Prestige, and about $45K in year 8 at high Prestige. Hiring a big name early is possible, just an expensive gamble.

### Star relationships (Locked, v9.2; drop rule revised v9.6)

- **Uses the same relationship indicator as distributors** (e.g. 1–5 stars), shown on the audition card.
- **Rises** when your project **boosts their career** (their Fame goes up), and a little with each project together.
- **Drops in two cases** (Locked, v9.6):
  1. **A project with them hurts their career** (it flops and their Fame falls).
  2. **You replace them in an established role** for a **new season or direct sequel of the same IP**.
- **On the casting side, recasting is the only trigger.** Not picking a Star who randomly appears in auditions, or casting someone else in an unrelated project, **never** lowers the relationship.
- **Higher relationship = bigger discount.** Bio lines reflect it (e.g. *"Loves working with your studio,"* *"Hasn't forgotten being replaced"*).
- **Open:** scale, step sizes, discount sizes, recovery.

| Situation | Relationship |
|---|---|
| Riley leads *Dead Frequency* S1; you cast Jordan as the lead in S2 | **Drops** |
| Riley leads the *Dead Frequency* movie; the direct sequel recasts Riley's role with Jordan | **Drops** |
| Riley starred in *Dead Frequency*; you cast Jordan in an unrelated comedy | No change |
| You don't cast Riley in your next unrelated project, or take a break from working with them | No change |
| A project with Riley flops and hurts their career (Fame falls) | **Drops** |
| Riley shows up in auditions and you pick someone else | No change |

- **Scope boundary:** the recast trigger covers **new seasons and direct sequels** only. **Reboots** are not covered yet (decide later if needed), and simply hiring a different Star for something else never counts.

*Example card after a flop:*
> **Riley Park:** $18K
> Fame 40 (↓ after *Dead Frequency 2*)
> Relationship ★★★ (↓ "Blames your studio for the flop")
> Relationship discount: –$3K · Prestige discount: –$2K

*Example card after a recast:*
> **Riley Park:** $30K
> Relationship ★★ (↓ "Hasn't forgotten being replaced in *Dead Frequency* S2")

*The upside:* make someone a star and they love you. Riley's breakout hit raises their Fame (pricier) and your relationship (bigger discount), so they're famous but still give you a better deal than anyone else.

### Audition cards (Locked)

- **Skills are always shown exactly.** Each card shows real genre skills, Fame and salary. No hidden or ranged skills.
- **"Newcomer"** is the in-game label for low-Fame Stars. It means *not famous*, not that their skills are unknown: the audition reveals their skills.
- **Bio lines:** each card has one short line of flavor text.
  - **Picked fresh every time the card is shown**, from the Star's *current* stats and history. Never written once and stored, so a line can never go out of date.
  - Built from a pool of short templates, each with a condition (e.g. "0 horror credits," "Fame over 80," "3+ horror hits"). The game shows a line whose condition is true right now.
  - **Bio lines always match the real stats.** They add personality, never misleading info.

*Example: Jordan Vale over time*
- Before any horror: *"Action legend. Has never done a horror movie."*
- After you cast them in one: *"Action legend, recently tried their hand at horror."*
- After three horror hits: *"Once an action star, now a horror favorite."*

*Example card:*
> **Riley Park** · Newcomer: Scary 85, Funny 30, Dramatic 50 · Fame 10 · $
> *"Says horror is their strong suit, but they've only ever been an extra."*

- **Later:** showing newcomers' skills as rough ranges was considered and **rejected**. Skills stay exact.
- Returning Stars can ask for raises (via Fame-based pricing, above) but bring continuity; recasting is possible and not catastrophic, though replacing them in an established role (new season or direct sequel) lowers that Star's relationship with you.
- **Proposal:** script quality at 40% also affects who auditions.
- ~~Proposal: Stars' genre skills grow in genres they keep doing~~ → **Locked in v9.4** (Star levels, above).
- Personality traits and complex contracts: **Deferred**.

---

## 7. Economy and distribution (Locked)

### Production costs (Locked, v9)

- **Budget tiers (Small/Medium/Large) stay shelved (Later).** There is **no spending ceiling**.
- **Base cost:** every production has an **unavoidable base cost**, set by format (and length for TV). You can't make a movie by spending nothing.
- **Flexible project spending:** the **Star fee (40%)** and **marketing (80%)** are real additional choices. They use any **remaining advance first**, then studio cash.
- **Overruns are allowed:** anything past the advance is paid from studio cash.
- **Surplus is kept:** on **successful completion**, the studio keeps **100%** of any unused advance. No refund, no split.
- **Not project costs:** staff salaries and studio upkeep (§5).
- **Open:** exactly when the base cost is charged, and whether the remaining advance is shown as an earmarked project balance or folded into general cash. **No separate complex ledger is approved.**

### The pitch meeting (Shark Tank style)

- After planning, **2–3 distributors show up**, each with **one fixed offer**:
  - **Upfront advance** (an absolute amount, e.g. $100K)
  - **Royalty %** (their share of each week's gross during the traditional release)
- **Pick exactly one, or walk away** and self-fund (pay every cost, keep 100% of the gross).
- **No multiple distributors, auctions, counter-offers or loans.**
- **The advance is not a loan.** You don't pay it back after completion; the distributor earns only through its royalty. If the project flops, the distributor takes the loss too.
- **Cancellation:** if you cancel a project, **you must repay the advance.** You can **only cancel if you can afford to repay**; otherwise you finish the project (see Financial safety below).
- **Bids are a market hint:** strong bids suggest a hot idea, and weak or missing bids suggest rethinking it (or betting on yourself).

*Example (illustrative numbers, not balance targets): a movie with a $60K base cost*

| Option | Advance | Royalty | After the base cost | Then: $20K on Star + marketing | You keep of the gross |
|---|---|---|---|---|---|
| 🐺 Wolf | $100K | 15% | $40K left | **$20K surplus kept** at completion | 85% |
| 🎬 Starlight | $50K | 2% | **$10K short** (from studio cash) | $20K more from studio cash | 98% |
| Walk away | $0 | 0% | $60K from studio cash | $20K more from studio cash | 100% (small reach) |

### Financial safety: never stuck, never game over (Locked, v9.1)

**No bankruptcy and no fail states.** Hard times mean **slower progress**, never a soft-lock and never a loan system.

1. **Lifeline offer:** at least one distributor **always** shows up to back your **cheapest format**, no matter how broke you are or how low your trust is. The terms are poor (a small advance, a high royalty), but **its advance always covers that project's base cost**, so you can start with $0.
2. **Affordable auditions, checked before display (Locked, v9.3):** at 40%, the game checks remaining advance + spendable studio cash against the generated 4–5 cards **before the player sees them**. If no normal card is affordable, one slot is replaced with a **free ($0), Level 0 Newcomer**. That candidate appears in the initial list like any other Star; no emergency popup or second-pass selection. This guarantees casting even when studio cash is zero or negative. (§6)
3. **You can only cancel if you can repay** the advance. Otherwise you finish the project, and finishing is always possible with the cheapest options, including the **free "No campaign" marketing option at 80% (v9.4)**.
4. **Cash can dip below $0** (from wages, say). There's no interest, no loan and no game over. While you're in the red:
   - you **can't** hire, train, advertise or self-fund;
   - you **can** take distributor offers, including the lifeline one;
   - **your next earnings pay off the negative balance first**, then you're back to normal.

*Example:* after two flops, wages put you at –$8K. Wolf and XYZ don't even show up, but "Bargain Pictures" offers $60K at 40% royalties for a small movie. You take it, cast an affordable Newcomer and finish. The first week of earnings clears the –$8K, and you're back in business, slowly.

**Open:** lifeline offer terms and how deep the negative balance can go (balancing).

### Cheap duds: allowed, but inefficient (Locked designer intent)

Making a cheap dud and pocketing the surplus is **allowed**. **No barriers are built specifically to forbid it.** It loses over time because:
1. The **unavoidable base cost** keeps typical surplus modest.
2. **Hits earn far more** through sales.
3. Bad releases rarely earn **Prestige** or **IP fans**, so no upgrades, unlocks or franchises.
4. **Disappointed distributors** offer less next time.

**Balancing rule:** a normal surplus should be **much smaller** than the revenue from a reasonably successful movie. Validate through balancing, not fraud-detection mechanics.

### Distributor trust (Locked direction; formula Open)

- Each distributor has a **relationship/trust state**.
- **A pattern of poor outcomes** reduces their future advances or offer quality; **delivering worthwhile productions** improves it. **One flop doesn't erase an established relationship.**
- Trust responds to the **backed project's realized, explainable outcome** (causal rule, §3). It's never an independent roll, and an acclaimed film isn't punished by a random bad box office.
- Feedback is plain language. *Example:* "Wolf lost money on *Dead Frequency* and wants better terms next time."
- Other distributors may consider your **recently visible performance**, but there's **no new global reputation currency**.
- **Open:** trust scale, whether it weighs quality, commercial return or results vs. expectations, recovery rate, and exact effect on bids.

### Reach (Locked)

- **Distributors bring reach**: how many people *can* watch, with genre fit. A bigger distributor means a bigger possible audience.
- **A self-funded traditional release gets small reach until you own a streaming service.** Walking away means "keep everything, but fewer people can see it." This keeps the pitch meeting meaningful even when you're rich.
- **Streaming Originals reach your subscribers** (§12).
- The detailed reach formula is **Open**.

### Ownership and cuts (Locked clarification)

- **All titles are studio-owned**, whether or not a distributor funded them. The streaming catalog rules (§12) depend on this.
- **The distributor's royalty is a fixed % of each week's gross** during the commercial run. The advance is **never counted as sales revenue** (and shouldn't count toward revenue-based Prestige milestones); any **kept surplus becomes studio Money at completion**.

**Proposals:**
- For a TV series, the distributor signs for the **whole series**, and new seasons carry over the same terms.
- A small roster of named distributors with personalities; new ones may appear in new eras.
- **Offer inputs:** studio Prestige decides **who shows up**; idea heat (combo + trend) and **that distributor's trust** decide **how generous** they are; IP fans boost offers for sequels and seasons. This is what makes "bids hint at how hot your idea is" work.
- **TV and Streaming Originals:** whether financing differs for multi-season deals (per-season advance vs. carry-over) is **Open**. Streaming Originals stay self-funded.

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
| Drives | **Money** | Renewals, Hall of Fame, Prestige milestones, title fans, legs |
| Raised by | Marketing, studio buzz, season announcements, Star fame, distributor reach, IP fans, the Hall of Fame boost, hot trends | The four meters, combo grades, the weak-meter rule |

*Example:* a heavily marketed bad movie gets **huge opening viewership** and an **Audience score of 3**. It makes money on opening weekend, then word of mouth kills it.

**Backlash lands on the title (Locked).** A hyped dud loses fans for **that title's line**, so its sequel or next season opens weaker. The studio's other titles are unaffected, and Prestige never goes down.

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

**Proposal (avoids tedium):** popups fire only at **turning points** (opening, a critic swing, the word-of-mouth turn, end of run). Everything else goes into a quiet news ticker, so 20+ titles airing doesn't mean popup spam.

An **original review aggregator site** (made-up name, not a Rotten Tomatoes copy) shows scores in the newspaper and social feed. *Example:* "*Dead Frequency* holds a 92% on Fresh Reel." **The site's % is just the Critic score × 10** (9.2 → 92%), so there's only one scale underneath (Locked clarification).

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
| Below 4.0 | Can't renew |
| 4.0 up to (not including) 9.0 | Renewable |
| 9.0 and above | **Hall of Fame** |

- Boundaries (Locked clarification): exactly 4.0 is renewable; exactly 9.0 is Hall of Fame.
- Hall of Fame is **not** required for a new season.
- The score gate applies to **TV renewals**. **Proposal:** a movie sequel is always allowed; a weak original's small IP fanbase already makes it risky.
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
| **Staff pitches** | A staffer with a **high Plot stat** suggests a new theme (Locked, v9.5). **Proposal:** pitches lean toward the studio's strongest genres |
| **Staff level-ups / training** | GDS-style unlocks |
| **New eras** | Big batches of new themes |
| **Research / purchase** | Buy the specific one you want |

---

## 11. Critic panel (Locked direction)

- A small panel of **named critics with visible tastes**.
- Over time, critics **retire and are replaced by harsher ones**, which keeps Hall of Fame rare.
- Critics stay **fair, not biased.** A critic is tougher on **oversaturated** genres or themes, not ones they hate. *Example:* superheroes have been everywhere for years, so Vera grades them harder; if superheroes cool off, she eases up.
- **Industry output is abstract (Locked clarification).** The craze cycle's Saturated stage *is* "the industry flooded the market." Critic saturation follows the craze stage plus the player's own repetition. There are **no simulated rival studios** and no counted rival films.
- Players can see the panel and get hints about each critic's taste.
- **Proposals:** swap critics slowly; tie new critic waves to new eras.

---

## 12. Your streaming service (Locked)

### Unlocking it

- Works **like a GDS console**: unlock it, then build it.
- Requires **studio Prestige + cash + a big enough catalog**, plus a **Software Engineer** who builds it over time. Exact Prestige threshold is Open.
- **Construction runs in the background (Locked).** The Software Engineer builds the platform while your normal production continues, but they're **off movies and shows until it's done**, so you lose their contributions for a while.

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
- **Proposal (scoring):** a twist season is scored with the **twist combo's grades** (genre + new theme). It reveals that combo in the combo book like any first use, and the twist theme must already be unlocked. The show keeps its original identity and IP.

**Proposals (other shake-ups):**
- **New Star:** a fresh lead or a big-name guest for a season.
- **Big event season:** bigger budget, fewer episodes.
- **Guardrail:** shake-ups get **weaker if you keep doing them**.

**Proposals (random revivals):**
- **Viral moment:** an episode blows up on the feed, and the next season gets a hype boost. **Condition-triggered, not random** (e.g. a high Audience score with low viewership becomes a "sleeper hit"), so the "feedback events are never random" rule holds.
- **Rediscovery:** an old show catches on with your subscribers. **Retention boost only**, since the catalog can't grow subscribers on its own (§12). Not title revenue.
- **Reboot demand:** years later, the feed begs for a show's return. Bring back the original Star (now famous and pricey) or recast.

### Between seasons and announcements (Locked direction; thresholds Open)

- **Normal gaps between TV seasons are expected and carry no penalty.** A small studio makes one main production at a time and cannot maintain a Netflix-scale cadence.
- **Unusually long hiatuses** (roughly a year or two without a season, *illustrative only*) can gradually lower **anticipation for the next season**, not retroactively lower quality, past review scores or an established fanbase.
- **Season announcements = show-specific advertising (Locked).** Like studio advertising, but it hypes **one show's** upcoming season. It **doesn't use the production slot**, so it works while another production is underway. Its hype **fades over time**, so announcing a season and never making it doesn't pay off, and announcements can't be spammed to reset the hiatus clock.
- **Studio advertising** (Locked) is available anytime, GDS-style, even between projects. It builds **temporary hype** that boosts the opening of **whatever you release next**, and it **fades over time**, so hype can't be stockpiled. It does **not** build a studio fanbase (fans belong to titles, §3).
- **Title-specific marketing** remains the separate 80% production action, boosting only that release's opening viewership. Neither adds a campaign-management screen.
  *Example:* you run studio ads while season 2 is in production, and your next release gets a hype bump on top of its own 80% marketing. Advertise, then release nothing for a year, and the buzz fades away.
- **Open:** exact hiatus curve, one-time announcement effects/costs and how anticipation is displayed. Each title/series line now has its own fans (§3, Locked); how fans and anticipation are **displayed** is Open. Keep the UI light.

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

- **Genre shifts for TV** using genre families (e.g. a "Scary" family with Horror, Thriller, Suspense). If added: shift within a family only, with an audience hit. *(v9.5: the families themselves now exist as Star skill categories, §6; only the TV genre-shift use stays Later.)*

---

## 14. Opening & tutorial

### Setup (Locked)

- **Name your studio**, with a **🎲 randomizer button** for the indecisive.
- **Super vague backstory.** You're the new head of a small studio. Whether you came up as a writer, got your own branch of a parent company, or left (or were let go from) somewhere else is never stated. Players imagine their own origin.
- **Your assistant** (name TBD; "Amy" is a placeholder) greets you and is the tutorial guide. The assistant is **separate from your staff**, like GDS's secretary, and stays all game as the voice for advice, event news and reminders ("Boss, *Dead Frequency* is almost out of episodes!").
- **Exactly 2 starting employees**, adequately skilled to make a **mediocre first movie**. Their precise stats, names, and wages are not yet chosen; two is not up for re-debate.
- **A few genres and themes unlocked at the start** (around 3 × 4 = 12 combos; exact list Open).

### Tutorial rules (Locked)

1. **Teach the system, don't just point at buttons.** Every tutorial step uses the **real screen with every option visible**. The assistant explains **why** something matters, then the player decides. No screens where the only thing to do is press "Next."
2. **Suggest, don't force.** If the player ignores a suggestion, the assistant reacts ("Ooh, bold choice!") instead of blocking them.
3. **The first movie is financially forgiving but not guaranteed great.** The two initial workers can make a **mediocre** tutorial film through normal play. The game shouldn't script a blockbuster or hand out automatic Prestige. The guardrail comes from existing rules, not fake results: the friendly first offer, the lifeline offer, the guaranteed affordable Star, the free marketing option and no fail states (§7). Starting cash is still Open.
4. **The first pitch meeting has real offers**, one of them clearly friendly.
5. **Opt-in, per-save, and replay-aware (Locked).**
   - **First-ever new game:** the assistant offers **Teach Me** / **I'll Figure It Out** (in-character wording is flexible).
   - **If a guided tutorial has been completed on any save:** a new game opens with a friendly **"Welcome back, boss!"** and offers **Jump Right In** / **Replay Tutorial**. The player retains the choice to replay.
   - **If chosen:** the guided tutorial runs **once, during the first project of that save**, and then hands off to full, unrestricted gameplay. It does not repeat later in that save.
   - **If skipped:** go directly to normal play. New features still receive **short, dismissible contextual tips** the first time they become relevant. These feature tips are **separate from the introductory tutorial** and are not a replay of it.
   - Completion state is remembered **across saves**; exact account/local save implementation is a later technical detail.

### Tutorial map (Proposal: step order and lines are drafts, NOT 17 mandatory pauses)

Assistant lines are placeholders to show tone and purpose, not final writing.

| # | Step | Assistant (draft) | Player does | Teaches |
|---|---|---|---|---|
| 1 | **Name the studio** | — | Types a name or hits 🎲 | Ownership from minute one |
| 2 | **Meet the assistant** | "Hi, nice to meet you! I'm Amy, your new assistant. Welcome to [Studio Name]!" | — | Who's guiding you |
| 3 | **Skip check** | First-ever game: "Is this your first time running a studio?" (Teach Me / I'll Figure It Out). Returning player: "Welcome back, boss!" (Jump Right In / Replay Tutorial) | Chooses | Tutorial or contextual tips |
| 4 | **Meet the team** | "Right now it's just these two, but they're good! Tap them to see what they're best at." | Taps each staff card | The four stats; everyone helps with everything |
| 5 | **The first idea** | "We had an idea for a **Horror + Zombies** movie and would love the go-ahead to start it as our first project!" | Opens the real planning screen; the suggested combo is highlighted, and the player picks it or something else | Genre and theme. The tutorial project is a **Movie** (Proposal); other formats are visible, marked "after this project" or "unlocks later" |
| 6 | **Pitch meeting** | "Two distributors want in! Wolf will advance us more money, but they want a bigger royalty. Starlight advances less, but we keep more of the earnings. Anything we don't spend is ours when we finish. What do you think?" | Picks one or self-funds | Advance vs. royalty; surplus; bids as a market hint |
| 7 | **0–40%: writing** | "The team's writing now. Watch the Plot and Writing meters fill up." | Watches points pop | Phases; staff XP earned while working |
| 8 | **40%: casting** | "The audition results are back! Who should we hire?" (plus a one-time note on Fame vs. genre fit) | Reads exact skills and bio lines; hires a Star | Fame → viewers, fit → quality |
| 9 | **40–80%: filming** | "Cameras rolling! Our Star helps fill the Filming meter." | Watches | The Star's contribution |
| 10 | **80%: marketing** | "Almost done! How loud should we be about it? Marketing gets more people in seats, but it won't make the movie better." | Picks a marketing option | Marketing = viewership, not scores |
| 11 | **80–100%: post** | "The team's in the editing room: effects, sound, the final cut." | Watches | The Editing meter |
| 12 | **Release: opening** | "We're out! Look at that opening weekend." | Watches viewership | Hype sets the opening |
| 13 | **Release: reviews** | Feedback events, e.g. "Critics are calling it…" then "Word of mouth is…" | Watches the legs play out | Critics = early buzz, audience = long legs; the review site |
| 14 | **Combo book** | "Now we know how Horror + Zombies goes over with audiences and critics!" | Opens the combo book | Grades revealed after first use |
| 15 | **Money comes in** | "Ticket sales will slow down over the next few weeks. That's normal." | — | Finite commercial runs |
| 16 | **Reinvest** | "We've got some money now! Want to hire someone new, or train the team?" | Hires or trains | The reinvest loop |
| 17 | **Wrap-up** | "You're a natural, boss! What should we make next?" | Starts the next project | Hands off to the full game |

**Systems introduced later through one-time tips** (not in the first tutorial): studio advertising, limited series, TV series and renewals, trends and the craze cycle, the critic panel, Prestige milestones, streaming. The assistant can remain available for advice throughout the save.

**Tutorial pacing risk (Open):** The table lists 17 teaching beats, **not** a mandate for 17 modal dialogs. Several can be contextual narration while the game continues. Evaluate early-game friction with a concrete timeline.

**Open:**
- Starting cash.
- The exact starting genres and themes.
- ~~Limited series timing~~: **Proposal (consistency fix):** limited series is available as soon as the tutorial project ends, which matches the locked "movies + limited series first." The tutorial project itself is a Movie.
- Where the first Prestige milestone lands. Note: Prestige is **not** given just for finishing a project (§9), so it can't simply be "First release!"
- The assistant's final name.

---

## 15. Characters and art

- Staff, Stars, critics, distributors and the assistant each get a **name and a portrait** (Locked).
- **Art style, engine and platform: decided later.** Prototype visuals = moving rectangles.

---

## 16. Next decisions, in priority order

1. **Finish the first hour:** starting cash, exact starting genre/theme set, first Prestige milestone, Star fee range, and realistic first-movie cash-flow/survival. **Do not re-open two starting staff, optional first-project tutorial, or automatic handoff to free play.**
2. **Prestige balancing:** milestone thresholds, awards, whether production-level bonuses repeat for every qualifying release, and once-only studio career awards (§9).
3. **Staff XP balancing:** continuous XP rate, meaningful individual contribution, job/genre growth (§5).
4. ✅ **Star raises resolved** (Fame-based pricing, §6); complex contracts stay **Deferred**. Remaining: Star level count, caps and growth rates (balancing).
5. **Eras:** how many, what each unlocks, how the audience bar rises.
6. **Distributor roster:** how many exist, and how the 2–3 at each pitch are chosen.
7. **Budget tiers:** shelved (Later). Revisit with a clearer concept once the core loop is playable.
8. **Final job list.**
9. **TV fine-tuning:** hiatus thresholds, announcement effects, and Prestige gates for 5/10/15/20 episode orders (§13).
10. **Which TV shake-ups and revivals to keep.**
11. **Streaming balance:** Original vs. traditional effect sizes, churn speed, operating costs.
12. **Marketing tuning:** title-specific campaign costs/boosts, studio advertising rates and season announcement effects (§4, §13).
13. ✅ **Audition pool resolved (v9.2):** any Star can audition; 4–5 shown with a spread; price = Fame − Prestige discount − relationship discount (§6). Remaining: fee curves and discount sizes (balancing).
14. **Limited series vs. a 5-episode TV season:** what makes them different once TV unlocks (review suggestion: limited series never renews, has no show-age fatigue, fixed short length).
15. **Prestige repeat rule:** review suggestion: each milestone pays **once per IP**, not per release, to stop short-season farming (§9).
16. **Episode-order economics:** review suggestion: production time and cost grow with episode count, so 20 episodes isn't free (§13).
17. **Studio upgrade milestones** (money + Prestige) and what each unlocks (Later).
18. ✅ **Financial safety resolved (v9.1):** lifeline offer, an always-affordable Newcomer, cancel only if you can repay, negative cash with limits, no bankruptcy (§7). Remaining: lifeline terms and the negative-balance floor (balancing).
19. **Advance display and timing (v9):** when the base cost is charged; whether the remaining advance shows as an earmarked project balance or folds into general cash (§7).
20. **Distributor trust formula (v9):** scale, what it weighs (quality, commercial return, results vs. expectations), recovery rate, effect on bids (§7).
21. **Offer and surplus balance (v9):** advance sizes, royalty ranges, revenue curves, and keeping a normal surplus much smaller than a decent movie's revenue (§7).
22. **TV and Originals financing (v9):** per-season advances vs. carry-over terms for multi-season deals (§7).
23. **Star skill balancing (v9.5):** the final family list, budget per level, top-level budget, growth rates, and keeping hidden gems rare (§6).
24. **Studio genre level balancing (v9.5):** level count, bonus size, interaction with the rising era bar (§5).

---

## 17. Decision ledger

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
| Budget tiers (Small/Medium/Large) | **Shelved (Later)**; placeholder: production cost set by format/episode count |
| Distributor offer = absolute upfront advance + royalty % of weekly gross | Locked (v9) |
| Unavoidable base cost by format/length; Star fee and marketing are flexible project expenses | Locked (v9) |
| Project expenses use remaining advance first, then studio cash; overruns allowed | Locked (v9) |
| Studio keeps 100% of unused advance on successful completion | Locked (v9) |
| Canceling a project = repay the advance; only allowed if you can repay | Locked (v9.1) |
| No bankruptcy or fail states; hard times = slower progress | Locked (v9.1) |
| Lifeline offer always appears; its advance covers the cheapest format's base cost | Locked (v9.1); terms Open |
| At least one affordable Star auditions; affordability is validated **before** the cards appear | **Locked (v9.3)**; normal 4–5 cards are checked against remaining advance + spendable cash |
| If no normal card is affordable, replace one with a **$0 Level 0 Newcomer** in the initial audition list | **Locked (v9.3)**; no delayed rescue UI; fallback is a real developable Star |
| Cash can go negative: no hiring/training/ads/self-funding until next earnings clear it; no interest | Locked (v9.1); floor Open |
| Cheap duds allowed but inefficient; no anti-exploit barriers unless proven necessary | Locked (v9 designer intent) |
| Per-distributor trust, driven by explainable outcomes of backed projects | Locked direction (v9); formula Open |
| Causal outcomes: scores, viewership, fans, Prestige, trust connect; no independent RNG rolls | **Locked principle (v9)** |
| ~~Star fee always from studio cash, never covered by distributors~~ | **Superseded (v9)** |
| Any Star can audition; 4–5 shown (Newcomer, mid-level, big name, genre-weighted); no refusals | Locked (v9.2) |
| Star price = Fame-based fee − Prestige discount − relationship discount; breakdown shown | Locked (v9.2); sizes Open |
| Star relationship: same indicator as distributors; up when you boost their career or keep working together | Locked (v9.2) |
| Star relationship drops when a project hurts their career (flop / Fame falls) **or** when replaced in an established role for a new season or direct sequel; not picking them from auditions never counts; reboots not covered yet | **Locked (v9.6)** |
| "Eager to redeem" pricing | Dropped (never locked) |
| Star levels: rise with experience, guard Star generation | **Locked (v9.4)**; counts/rates Open |
| Star level = total skill-point budget; no master of all trades; top budget below "maxed in everything" | **Locked (v9.5)**; budgets Open |
| Star skills = genre families (~5–6); every genre maps to one family; themes never affect Star skills | **Locked (v9.5)**; family list Open |
| Random point spreads; balanced/two-focus/specialist shapes internal only, never labeled | **Locked (v9.5)** |
| Skills grow in the family worked, within the level budget | **Locked (v9.5)** |
| Call-back catalog of past Stars at current price; reuse allowed | **Locked (v9.5)** |
| Overexposure for back-to-back casting | Tuning fallback only (v9.5) |
| Hidden gems (high level, low Fame) kept rare | Tuning note (v9.5) |
| Staff improve four stats only; no individual genre experience | **Locked (v9.5)** |
| Studio genre levels, per genre (not family), small quality bonus | **Locked (v9.5)**; sizes Open |
| Staff pitches come from high Plot; lean toward strongest genres | Locked (Plot source, v9.5); lean = Proposal |
| Star price is Fame-based only; level/skill don't raise price (diamonds in the rough) | **Locked (v9.4)** |
| 80% always includes a free "No campaign" option | **Locked (v9.4)** |
| 80% marketing = project expense (advance first, then cash); option list and costs | Locked (v9); options/costs Open |
| Distributors bring reach; self-funding gets small reach until streaming; Originals reach subscribers | Locked; formula Open |
| All titles studio-owned; royalty = fixed % of each week's gross; advance is never sales revenue | Locked |
| Pitch meeting: 2–3 fixed offers, pick one or self-fund | Locked |
| Advance is not a loan (repaid only on cancellation); distributor earns only via royalty | Locked (revised v9) |
| No loans, stacking, auctions, counter-offers | Locked |
| ~~No refunds or overruns~~ | **Superseded (v9):** overruns allowed from studio cash; surplus kept |
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
| Streaming built in the background; Software Engineer off productions until done | Locked |
| Studio upgrades at money + Prestige milestones unlock formats (e.g. TV) | Locked direction; link Later |
| Streaming income = total subscribers, not per-title | Locked |
| New releases grow subscribers; catalog retains; Hall of Fame = evergreens | Locked |
| Slow, visible subscriber drift when quiet | Locked |
| Finished titles join streaming automatically; each TV season after its run | Locked |
| Both release paths stay available after streaming launches | Locked |
| Streaming Originals: no release earnings, bigger subscriber boost | Locked direction; sizes Open |
| Names + portraits for characters; art later | Locked |
| At 80%, the team handles Editing; player chooses release marketing | Locked direction; costs/effects Open |
| Studio advertising = temporary, fading hype for your next release; title marketing drives that title's launch | Locked direction; tuning Open |
| Fans belong to an IP (franchise): seasons/sequels/reboots keep all, spinoffs some, new IP starts fresh | Locked |
| Audition cards show exact skills; "Newcomer" = low Fame | Locked |
| Bio lines picked fresh from current stats/history; always truthful | Locked |
| Name your studio + 🎲 randomizer; super vague backstory | Locked |
| Assistant character as guide, separate from staff, all game | Locked |
| **Exactly two** starting staff, competent for a mediocre first movie; about 3 genres × 4 themes available | Locked headcount/intent and approximate starting pool; specific stats and titles Open |
| Tutorial: real screens, explain why, player decides; suggest, don't force | Locked |
| Intro tutorial offered at new-game start; if chosen, only during first production and only once within that save | Locked |
| Tutorial completion remembered across saves; returning assistant offers Jump Right In / Replay Tutorial | Locked |
| Contextual feature tips are brief, dismissible, and separate from intro tutorial | Locked |
| Tutorial first movie financially forgiving, normally mediocre, not a guaranteed hit; first pitch has a friendly offer | Locked direction; exact safety mechanism Open |
| In-character tutorial skip; one-time tips for skippers | Locked |
| Tutorial step map and assistant lines | Proposal |
| Starting cash; first Prestige milestone | Open |
| Limited series available right after the tutorial; tutorial project is a Movie | Proposal (consistency fix) |
| Normal TV hiatuses unpenalized; long hiatuses erode anticipation | Locked direction; thresholds Open |
| Season announcements = show-specific advertising; no production slot; hype fades | Locked direction; effects Open |
| Score boundaries: below 4.0 can't renew; 4.0+ renewable; 9.0+ Hall of Fame | Locked |
| Review site % = Critic score × 10 | Locked |
| Industry output abstract; no rival studio simulation | Locked |
| TV episode capacity grows with studio Prestige (illustrative caps 5/10/15/20) | Locked direction; thresholds Open |
| TV deal covers whole series; distributor offer inputs | Proposal |
| Twist scoring; condition-triggered viral moments; retention-only rediscovery; turning-point popups; sequels always allowed | Proposal |
| Show-age fatigue curve; Final Season | Proposal |
| Other shake-ups and random revivals | Proposal |
| Script quality affects audition pool | Proposal |
| Binge drops for Originals; platform upgrades | Proposal |
| Eras of entertainment spoof | Proposal |
| Late-game multiple productions | Open |
| Genre families as Star skill categories | Locked (v9.5) |
| TV genre shifts within a family | Later |
| Actor personalities, supporting casts, complex contracts | Deferred |
| Engine, platform, art direction | Later |

**Removed from earlier versions (do not revive without a clear gameplay problem):** "upfront payout + catalog tail," deal windows with 100% post-window earnings, multi-partner distribution, locked money pots and leftover refunds, "Star fame and marketing add to the Audience score," "80% = patch your weakest meter" (replaced with player marketing; staff Editing continues automatically), blanket first-season 5/10 restriction (replaced by studio Prestige capacity), studio-wide fanbase (fans belong to titles; studio advertising is temporary hype), ranged/hidden Star skills, Star fee included in the base cost (it's a separate project expense, §6), "40 superhero movies" rival-output wording (industry output is abstract). **Budget tiers are shelved, not removed.** **v9 superseded:** "no money pots, leftovers, refunds or overruns" and "Star fee/marketing always from studio cash" (replaced by advance + base cost + kept surplus + overruns from cash). The earlier rejected *multi-partner* pots and split-refund rules stay rejected.


---

## 18. Critical design invariants — don't confuse these systems

This section is intended to make reviews faster, not to add features.

| If this event happens | What changes | What should *not* change automatically |
|---|---|---|
| Employees work during a project | Their **XP** increases; they contribute quality-meter points | No studio Prestige from simply waiting |
| A production reaches a qualifying caliber/review/achievement milestone | **Prestige** increases (discrete award) | No bonus employee XP at release |
| A movie sells tickets or a show airs | **Money** arrives during the finite commercial window | No Prestige per week just because it aired |
| Heavy marketing promotes a weak project | **Opening viewership** and possibly ensuing backlash on that title's fans | Intrinsic Audience/Critic scores are **not** increased by marketing |
| The same title earns more fans through a good season | That **title line's fans** grow and help related future productions | Other unrelated titles do not automatically inherit those fans |
| The studio purchases general advertising | **Temporary studio buzz**, affecting the next released production and fading with time | No permanent studio-wide fan score |
| A TV show rests between seasons | Nothing bad during a **normal** hiatus; anticipation may fall only after an unusually long gap | Past review scores, quality and established title fans are not erased |
| A traditional release finishes its market run | Its individual release payments **stop**; title remains in history/catalog | No infinite royalties or post-window residual stream |
| Streaming service operates | Studio receives **aggregate subscriber revenue**, minus platform operating costs | No per-title streaming payout ledger or tracked individual viewing royalties |
| Production reaches 80% | Player chooses a **marketing push** | No required CGI vs. Sound minigame; team keeps producing Editing quality |
| A production completes under its advance | Studio keeps the **unused advance** as Money | Not sales revenue; no Prestige or XP for it |
| A backed project disappoints | That distributor's **trust** drops, for a visible, explained reason | No independent random distributor mood; other systems untouched |
| Studio cash goes below $0 | Hiring, training, ads and self-funding pause; next earnings clear the balance | No bankruptcy, no game over, no interest |
| 80% marketing milestone arrives with no money | The free **"No campaign"** option is always there | No soft-lock, no forced spending |
| A Star completes a project | Their **Level** may rise; their skill in that genre's **family** grows (within the level budget) | Their **price** doesn't rise from skill or level, only from Fame |
| The studio makes a genre again | That **studio genre level** rises; a small quality bonus next time | No individual staff genre experience; no other genres level up |
| 40% casting milestone arrives with no affordable normal candidate | **Before displaying auditions**, one of the 4–5 normal cards becomes a **free Level 0 Newcomer** | No impossible audition screen, no after-the-fact emergency dialog, no guaranteed poor review |

**Accounting shorthand (v9):** For a conventional release, the distributor gives an **upfront advance**. The production pays its **unavoidable base cost**, then the **Star fee (40%)** and **marketing (80%)**, using the advance first and studio cash for anything beyond it (overruns allowed). On **successful completion**, the studio keeps any **unused advance**. During the run, the distributor takes its **royalty % of each week's gross**, and the studio keeps the rest. **Canceling** means repaying the advance. Staff wages and upkeep are separate studio expenses.

---

## 19. Open decisions and possible holes worth actively reviewing

**These are questions and risks, NOT new locked requirements.** Claude should prioritize actual contradictions and avoid answering every item with additional systems.

### 19A — Genuinely consequential ambiguities

**Still open:**

1. **What happens on renewing a TV series?** Does the existing distributor automatically carry funding terms to a new season (only a Proposal), or do players pitch each season? How do per-season advances and growing Star fees fit without a negotiations menu? (§7, §16 item 22)
2. **Limited series vs. a 5-episode TV season:** what makes them different once TV unlocks? (§16 item 14)
3. **Reboot recasting:** does recasting a Star's role in a reboot affect the relationship? Not covered by the v9.6 rule; decide only if needed (§6).

**Archived: resolved in v8–v9.6. Do not reopen** (kept for history only):

- ~~Star salary vs. fixed budget~~ → the Star fee is a project expense, paid from the remaining advance first, then cash (v9). Budget tiers are **shelved** (v8).
- ~~Self-funded reach~~ → small reach until you own streaming (v8).
- ~~Distributor cuts vs. finite runs~~ → royalty % of each week's gross; the advance isn't revenue; surplus kept at completion (v9).
- ~~Season announcements with one slot~~ → show-specific advertising; no production slot; hype fades (v8).
- ~~Score boundaries~~ → below 4.0 can't renew; 4.0+ renewable; 9.0+ Hall of Fame (v8).
- ~~Prestige gates TV format or episode caps?~~ → studio upgrades unlock formats; Prestige gates episode caps (v8).
- ~~Streaming construction with one slot~~ → background build; Software Engineer off productions (v8).
- ~~Title fans and spinoffs~~ → IP rule: seasons/sequels/reboots keep all fans, spinoffs some, new IP fresh (v8).
- ~~Catalog retention vs. rediscovery~~ → rediscovery is retention-only (Proposal, v8).

### 19B — Balance and tedium risks to stress test

- ~~Unwinnable start~~ → **resolved** by financial safety: lifeline offer, guaranteed affordable Star, free "No campaign" option, no fail states (v9.1–v9.4). Starting cash is still Open.
- **One obvious distributor:** Evaluate whether the high-funding/high-cut offer always dominates given players' cash constraints, or whether a low-cut independent offer is viable at some quality/market states.
- ~~Uninteresting self-fund~~ → **resolved**: self-funding gets small reach until you own streaming (v8).
- ~~Budget tier dominance~~ → **moot**: budget tiers are shelved (v8).
- **Compounding quality growth (recommendation, v9.6):** once sample production math exists, test the **combined** effect of (1) staff improving their four stats, (2) Stars improving family skills within their level budgets, and (3) studio genre levels. The risk is all three stacking until excellent reviews become routine. **Don't delete or nerf any of them preemptively**; test them together.
- **A small number of employees + continuous XP:** Can two starter employees actually complete a production in a satisfying time? Does a late-game superstar team cause score inflation so rapidly that quality and Hall of Fame become trivial despite harsher critics?
- **Double fatigue:** A sequel/TV season could suffer combo repetition fatigue, TV age fatigue, trend saturation and harsh-era critics simultaneously. Ensure the intended separate mechanisms don't create an opaque pile-on.
- **Prestige farming:** If every easy short season and familiar combo can re-award the same 7.5 score milestone, can players farm unlimited Prestige with minimum-cost productions? Distinguish per-release repeatability from once-per-title or career milestones during balancing.
- **Twenty-episode economics:** A larger order should not automatically provide 4× XP, 4× Prestige or unbeatable profit solely due to airing weeks. Decide relative duration, cost and audience-drop behavior.
- **Scoring legibility:** Players need to distinguish review scores, viewership, money, fans, hype, fatigue, Prestige and quality meters without seven bewildering bars on one screen. Use hierarchy, not necessarily more mechanics.
- **Critics vs. audience labels:** Critics moving first and audience word of mouth taking over later is a good story, but very small audiences shouldn't generate absurdly certain reviews or viral growth with no exposure. Guard against wild results.
- **Streaming late-game snowball:** With a big library, strong Hall of Fame retention and ongoing monthly subscribers, does the player's cash grow inexorably even with minimal new production? Churn and costs must matter but not force Netflix-like constant output.
- **Micro-management creep:** Staff naturally work, one Star is hired, one pitch chosen, one 80% marketing choice. Resist adding actor contract menus, separate episode crews, repeated publicity steps, or per-title streaming dashboards.
- **Tutorial fatigue:** Seventeen listed teaching beats should not become seventeen modal stops. Show the real UI, let them make choices, and reveal complexity naturally.
- **Sim time vs. fictional eras:** Time ticks weekly; TV episodes air weekly. Do project duration and era speed allow seasons, hiatuses, marketing fade and cultural trend cycles to make sense together?

### 19C — Scenarios for Claude to walk through **without building anything**

For each scenario, describe the likely game-state changes in order, name contradictions, and give a **minimum-change fix** if genuinely needed.

1. **First-time player:** two employees, one modest movie, normal audition, small-budget distributor or self-fund, middling reviews, staff XP gained, some Money gained or lost, only earned Prestige if specific milestone triggers, then free play.
2. **Commercial flop:** High Star Fame plus heavy studio and 80% marketing creates a big opening for a poorly made movie. Scores remain bad; bad word of mouth shrinks legs and harms **that title's** fans, not studio Prestige or another title's fans. Could cash still be positive?
3. **Cult hit:** Low-Fame actor, unusual combo with strong Critic grade and moderate/low commercial reach. Excellent Plot/Writing, less-strong opening, good reviews. Can it earn Prestige despite weak immediate Money, and plausibly become valuable for a sequel?
4. **Long-running TV series:** A five-episode debut becomes a hit. Studio makes a different movie; normal hiatus is safe. A new season can be announced without spamming; returning Star asks more; larger seasons require studio capacity not simply the show's own success; show-age fatigue and theme twist remain understandable.
5. **Streaming launch:** Old traditional titles have stopped paying. Studio meets Prestige/cash/catalog/engineer conditions, builds service, gains subscriber revenue; some new productions still have traditional earning runs, while a self-funded Streaming Original sacrifices release revenue for subscriber growth. Catalog retains without per-title accounting.
6. **Experienced replay:** Player has completed the tutorial on another save. A new save starts with "Welcome back, boss!" and can either jump straight in or replay the optional first-project guide. It doesn't re-trigger within the same save; feature tips stay brief and dismissible.

---

## 20. Remaining planning work, before engine and art discussion

**Near-term / player-facing decisions that can change the first playable design**

1. First-hour pacing and opening economy: starting cash, starter staff stats/pay (not count), first movie expected quality, introductory base costs, first distributor offers, recovery from a poor premiere, and first meaningful unlocked choice.
2. Exact starting genres/themes (~3 × 4), early format timing (movies vs. limited series), and first Prestige milestone; no generic "completed a movie" Prestige.
3. ✅ Resolved: self-funded reach is small until streaming (v8). The Star fee is a project expense using the remaining advance first, then cash (v9).
4. Basic season-renewal funding/Star continuity choice and reasonable hiatus/announcement timing, enough to make TV behave predictably.
5. Staff XP/leveling and title-quality accumulation rates; Prestige milestone repeat/stack rules; avoid dominant short-project farming.

**Can be tuned after the first play-loop is outlined, or parked intentionally**

- Exact review weights, weak-meter thresholds, combo grade multipliers, trend timings and critic turnover.
- Distributor roster identity and selection algorithms, marketing price tiers, audience reach curve.
- TV episode order gate numbers, season age fatigue curve, theme-twist effects, optional other shake-ups and revivals.
- Streaming subscriber acquisition/churn/costs, tutorial tip cadence, exact bonus values.
- Final list of jobs and unlock trees, eras pacing, possible late-game concurrency.

**Defer until design review resolves the above:** Engine choice, target platform, programming architecture, 2D visual style, art asset pipeline, implementation spec or code prototype. The first prototype can use simple rectangles and placeholder portraits as originally intended.

---

## 21. Claude review instructions — critique only

**Role:** Be a skeptical game-design reviewer, not a feature brainstormer or implementation agent. Your job is to pressure-test **Entertainment Studio Tycoon v9.6** and identify the few actual holes worth resolving before we choose an engine.

**Respect the statuses.**

- **Locked:** Treat as decided. Challenge **only** when you identify a concrete contradiction, exploit, user-hostile loop, or impossibility. Explain the failure case first. Do not reframe a preference as objectively wrong.
- **Proposal:** Don't silently promote to a requirement. Identify whether it solves a real problem or can be cut.
- **Open:** Ask the smallest number of decisions that materially affect design or early-game balance.
- **Later/Deferred/Shelved:** Do not pull back into launch scope without a compelling blocker.

**Deliver your review in this order:**

1. **Verdict (short):** Is the design coherent enough to finish the remaining planning? What is the single biggest danger?
2. **Actual contradictions and exploitable loops** (maximum ~8): For each, cite section(s), show a specific player scenario, classify severity (**Blocking / Important / Polish**), and propose the *smallest* remedy.
3. **What could become tedious after 20+ productions?** Focus on repeated dialogs, seasonal upkeep, release result screens, and advertising. Propose reductions rather than new systems.
4. **First-hour and late-game walkthrough:** Test the six scenarios in §19C as cheaply as possible. Do not assume game parameters that are marked Open; identify missing decisions instead.
5. **Final decisions before engine** (ideally 3–6, ranked): Present real tradeoffs and a recommended default, explicitly labeled as your recommendation, not the designer's decision.
6. **Things you would NOT change:** Briefly state which unusual decisions are coherent and should remain locked.

**Forbidden for this review:** generating code, scaffolding an engine project, picking an engine or art style, writing a giant feature roadmap, making up numerical balance thresholds, or silently rewriting locked systems. We will bring disagreements back to the designer and decide together.

**Key desired outcome:** A short list of grounded decisions and risks, not another layer of economy, legal contracts, tracking, or busywork. Keep the easy-to-read *Game Dev Story* cadence intact.

---

**Workflow:** Continue design critique and close the highest-value open questions collaboratively. Do not implement or choose an engine/art pipeline until the designer explicitly approves the design and planning advances to that stage.
