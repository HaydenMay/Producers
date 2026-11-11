# Entertainment Studio Tycoon — Consolidated Design Decision Audit

**Reconciled:** November 10, 2026  
**Purpose:** A single, readable inventory of decisions, directions under test, deferred features and contradictions. This is **not** an instruction to implement everything below, and it does **not** silently ratify Claude's experimental balance parameters.  
**Reviewed against:** `entertainment_studio_handoff_v9_6.md`, `reversals_summary.md`, Gate 3 reports, Gate 3 follow-up, Gate 4 economy and Gate 4Q scoring handoffs, plus the subsequent designer corrections made in conversation.

### How status works

- **[DECIDED]** Explicit player-designer choice; carry it forward unless deliberately revised.
- **[DIRECTION / TEST]** Chosen direction worth prototyping or currently implemented as an experiment; final model/numbers are not yet ratified.
- **[OPEN]** Not yet decided; do not infer an answer from code or assistant recommendations.
- **[LATER]** Deliberately deferred or shelved.
- **[SUPERSEDED]** Older rule that must **not** be copied forward as current design.

**Priority of authority:** Latest explicit designer decisions > older locked decisions in v9.6 where not contradicted > approved design-level gate decisions > Claude's *candidate* assumptions > agent recommendations and examples. The latest Gate 4Q branch is **not** automatically the canonical design just because it contains working code.

---

## 1. Game identity and progression

- **[DECIDED]** Accessible, fast-paced entertainment-studio tycoon inspired by *Game Dev Story*, not a detailed film-finance spreadsheet.
- **[DECIDED]** Start with a tiny production studio; make movies and limited series, expand into renewable television, and eventually launch your own streaming platform.
- **[DECIDED]** Core fun is discovering genre/theme combinations, developing a recognizable small staff, cultivating Stars and IP, and progressing from an unknown studio to a major company.
- **[DECIDED]** Real decisions should be meaningful but relatively infrequent; avoid micromanagement, complex contract administration and dozens of overlapping payout streams.
- **[DECIDED]** Studio progresses through **three distinct economies**: employee XP, studio Prestige, and cash. None is interchangeable with another.
- **[DECIDED]** Employee XP is earned **as employees work**. Releasing a hit does not award a second batch of XP for the review outcome.
- **[DECIDED]** Prestige represents **specific achievements/milestones**, not project completion, automatic weekly income or simply having more money. It does not decrease after flops.
- **[DECIDED]** Cash pays for projects, salaries, training, promotion, office upgrades and streaming. Success can create great revenue but must come with genuine financial risk.
- **[DECIDED]** Studio upgrades and format access require **money plus Prestige** milestones; money alone cannot purchase every expansion. TV **season episode capacity** is gated by studio Prestige, not by how successful an individual show was.
- **[DECIDED]** One main production at a time in the initial/core loop; released titles continue earning during their finite run as the next production is made.
- **[DECIDED]** Time advances in **weeks**, including the airing of **one TV episode per week**.
- **[DECIDED]** Money-making without Prestige must be possible; an unprestigious studio may be rich without unlocking the most prestigious expansions.
- **[OPEN]** Exact duration of the typical/main career, end credits or endgame arc. The harness's 15–30-year runs are **stress horizons**, not a commitment to a 30-year game.
- **[LATER]** Optional replay variants/challenges inspired by Balatro: different studio identities, tradeoffs and sometimes harder stakes or explicit objectives. Standard mode stays open-ended. If introduced, winning a challenge may lead to sandbox continuation. Do not design/build them yet.
- **[LATER]** Optional hard bankruptcy, fail states or stricter challenge modes; the ordinary/default game remains recoverable.
- **[LATER]** Late-game multiple simultaneous main productions, if the one-slot model eventually proves limiting.
- **[LATER]** No theme parks or unrelated business lines in the current scope; soap operas shelved.

## 2. Staff, office size and jobs

- **[DECIDED]** A new studio starts with **exactly two employees**; initial staffing capacity is four, with upgrades to **six and then eight** positions.
- **[DECIDED]** Staff are permanent, named, levelable workers and contribute to the same four stats and project meters: **Plot, Writing, Filming, Editing**.
- **[DECIDED]** Plot = story idea; Writing = script/dialogue/structure; Filming = shooting/performance; Editing = effects/sound/music/final cut.
- **[DECIDED]** **Every available worker contributes to all four meters**, weighted by their abilities; no per-project employee cap or arbitrary diminishing returns per additional worker.
- **[DECIDED]** Staff improve these four general stats, not personal genre/theme experience. Their XP accumulates through work; training also exists.
- **[DECIDED]** **The studio**, not individuals, gains levels in **exact genres**, with a small production-quality benefit in that particular genre. This is NOT a level for a genre family.
- **[DECIDED]** A job class affects strengths and growth emphasis rather than forbidding work in other meters. Advanced jobs combine strengths of simpler jobs.
- **[DECIDED]** A **Software Engineer** is required to construct the streaming service and ordinarily occupies a staff slot.
- **[DECIDED]** **Employees can be fired** to cut wages, replace underperformers and free a slot for the engineer.
- **[DIRECTION / TEST]** Current firing prototype allows dismissal only **between productions**, retains at least **two employees**, and charges **$0 severance**. Those precise constraints/costs have not all been approved.
- **[DECIDED]** Staff salaries and general studio upkeep are studio expenses, not automatic rewards/quality stats; include them when measuring whether a project really made money.
- **[DECIDED]** High Plot skill can generate **staff pitches** for new themes.
- **[OPEN]** Exact staff XP rates, training, job list/unlocks, wage progression and whether the staff-pitch pool leans toward studio strengths. Suggested titles such as Director, Writer, Editor, Showrunner and Auteur are not a final roster.
- **[OPEN]** Genre XP level cap/bonus amount. The Gate 4Q harness found this bonus currently much weaker than intended; **do not** silently lock a proposed score increase.

## 3. Productions and creative decisions

- **[DECIDED]** At planning, choose **format, exact genre, theme** and whether this is new IP or a **sequel/season/reboot/spinoff** of an existing one.
- **[DECIDED]** Productions have **unavoidable base costs** determined primarily by format and TV episode order. No mandatory Small/Medium/Large production-budget tiers in V1.
- **[DECIDED]** Production advances through three recognizable phases: **0–40% concept/writing**, **40–80% filming**, **80–100% editing/post-production**.
- **[DECIDED]** At **40%**, select **one lead Star**. There is no supporting-cast micromanagement; the rest is abstracted into the project cost.
- **[DECIDED]** Staff continue developing Editing automatically after 80%; the player does not select a CGI-vs-sound-vs-plot repair minigame.
- **[DECIDED]** Player choices in financing, Stars, combination and promotion affect the economics, audience or underlying craft for an understandable reason—no unexplained independent final-result dice roll.
- **[DECIDED]** Marketing and Fame affect **awareness/viewership**, not intrinsic review ratings.
- **[DECIDED]** A film's final cost is not fully known at planning: Star costs occur around 40%, and distribution/marketing decisions occur later.
- **[OPEN]** Exact durations and prices of each format, Star fees, salaried labor and the beginner studio's starting cash.

## 4. Stars and casting

- **[DECIDED]** One featured **Star** per production or TV season, with a name, portrait, career history, Fame, Level, fee and **genre-family skills**.
- **[DECIDED]** Star skill families are broad categories (e.g. **Scary, Funny, Romantic, Action, Dramatic**). An exact genre maps to one family: Horror and Thriller may both use Scary.
- **[DECIDED]** **Themes do not influence Star family skills.** Horror + Zombies and Horror + Pirates both check Scary; combo compatibility separately evaluates their themes.
- **[DECIDED]** **Star Level grants a total pool/budget of skill points across families**, not the ability to max every family. Even at the top Level a Star cannot be elite in all families.
- **[DECIDED]** Skill distribution is varied at generation (balanced/two-focus/specialist internal profiles) but player cards show only the actual scores, not archetype labels.
- **[DECIDED]** A Star grows their worked genre-family skill after doing projects in that family, within their level's available point budget. Level rises with career experience.
- **[DECIDED]** Fame attracts opening viewers, while matched acting skill improves **Filming/quality**. **Fame alone never boosts reviews**.
- **[DECIDED]** Star prices are derived from **Fame-based fee minus a studio-Prestige discount and existing-relationship discount**, with the fee breakdown shown; Level/skill do **not** directly set price.
- **[DECIDED]** An unknown highly skilled Star can be an affordable hidden gem, but such finds should be rare relative to the satisfying path of developing a Newcomer yourself.
- **[DECIDED]** Any Star may audition regardless of studio Prestige; 4–5 initial cards show a spread of Newcomer, mid-tier and big-name options, with some weighting toward genre fit. Big names do not refuse outright; price is the practical constraint.
- **[DECIDED]** Audition cards show **exact skills, Fame and fee**; no hidden/ranged skills. Their short bio text is generated afresh from their real present-day stats/history and cannot contradict them.
- **[DECIDED]** If none of the 4–5 regular candidates can be afforded, **replace one before displaying cards** with a **free $0 Level-0 Newcomer**. They are a real Star who can grow and they do not automatically make the movie awful.
- **[DECIDED]** At casting, allow a scrollable **Call back** list of every Star the studio has previously employed, at the Star's current fee.
- **[DECIDED]** Relationships rise with positive career impact and repeated collaboration; they drop if the studio harms the Star's career through a flop/Fame decline, or **recasts an established lead for a new season or direct sequel**.
- **[DECIDED]** Simply not selecting a Star from an audition slate or casting a different Star on an unrelated project **does not** hurt the relationship.
- **[OPEN]** Whether reboot recasting hurts the relationship, Star level budgets/number of families, relationship sizes, how big Star casting fit should affect final reviews, and which audition Stars appear based on script quality.
- **[LATER]** Star personality mechanics, complex long-term employment contracts and overexposure penalty; overexposure only if testing proves repeated casting needs it.

## 5. Genre/theme compatibility, scoring and surprises

- **[DECIDED — LATEST CORRECTION]** **Each exact genre + theme pairing has ONE shared compatibility grade**, not separate audience and critic grades. This **overrides v9.6 and Claude's Gate 4Q candidate**, both of which use two grades.
- **[DECIDED]** Compatibility should follow **editorial/common-sense genre logic**, not a pair of purely random hidden grades; e.g. Horror + Zombies is naturally more compatible than Horror + Sports.
- **[DECIDED]** A weak pairing should **seriously** harm the expected quality/reception, especially for a two-person novice studio, but an experienced production can sometimes overcome it.
- **[DECIDED]** **Unusual does not automatically mean poor.** A logically workable mash-up may have a strong base grade even if it sounds unconventional at first.
- **[DECIDED]** The shared combination grade is **hidden until first use**, then revealed/stored in the player's combo book. The audience and critics still produce **separate final review scores**.
- **[DECIDED]** Audience scores favor **Filming + Editing**; critic scores favor **Plot + Writing**. Both read all four meters with different weights.
- **[DECIDED]** A **weak-meter penalty** applies when one meter is dramatically below the other three. Weak Plot/Writing hurts critics most; weak Filming/Editing hurts audiences most.
- **[DECIDED]** Early gameplay must be capable of producing **real 2/10, 3/10 and 4/10 films** through ordinary choices and small crews—not forced outcome floors or a special fake dud mode.
- **[DECIDED]** Low spending **does not automatically mean** low quality; an inexpensive film can be good, and an expensive film can flop. Do not call a movie a dud based on the **strategy name** rather than its **actual score**.
- **[DECIDED]** Rare poor-combination productions may unexpectedly resonate with **audiences** (cult hit), while critics remain unimpressed. This is an explainable, title-specific audience-surprise event, not a permanent rewrite of the underlying grade.
- **[DECIDED]** Reviews at release are stored: later critic turnover or changes in world expectations **do not retroactively change old scores**.
- **[DIRECTION / TEST]** Gate 4Q tried strong poor-fit multipliers **D ×0.80 / F ×0.55** and found normal rookie 2–4/10 duds. They are promising **candidate numbers, not locked rules**.
- **[DIRECTION / TEST]** Gate 4Q's 80-pair editable matrix is a working first draft, **not** the approved final list. Its **dual audience/critic values must be replaced with one shared grade**; 13 contested pairings and further edits remain open.
- **[DIRECTION / TEST]** Optional between-world shifts of a base combo grade by one step are being tested, but the amount/probability—and whether world-specific grades should be disclosed—are **OPEN**. This needs refactoring from two grades to one.
- **[DIRECTION / TEST]** Current rare cult-appeal candidate (~0.6% of releases) is a promising pattern, but its exact rates/eligibility are **OPEN**. Starting crews currently cannot qualify; designer wants early surprises *possible*, but their exact balance is unresolved.
- **[OPEN]** Final compatibility matrix, combo multipliers, staff and Star weights, score noise/variation range, degree of Star and studio-genre impact, and how much well-crafted films can rescue an F pairing.
- **[OPEN]** Hall of Fame calculation at the 8.995→9.00 rounding edge; raw versus rounded threshold was flagged.

## 6. Viewers, trends, fans and commercial results

- **[DECIDED]** **Viewership and scores are separate.** Viewership represents how many people watched and drives cash; review scores represent how well they liked it and drive lasting legs, Prestige milestones, renewability and IP fan movement.
- **[DECIDED]** Opening awareness comes from distributor reach/promotion, Star Fame, established IP fans, market trends, title hype and temporary studio buzz; these do **not** add to reviews.
- **[DECIDED]** **Critics have more influence early** in a release; **audience word of mouth** primarily determines sustained later viewing. Strong reception can yield sleeper hits; hyped failures may open and then collapse.
- **[DECIDED]** Feedback news explains **actual** viewer trends and their causes. No independent random "sales went bad" roll that contradicts reviews and reach.
- **[DECIDED]** Good reviews are not guaranteed high sales when there is a visible limit such as poor distribution reach; bad reviews can still have a strong marketing-driven opening.
- **[DECIDED]** **Fans belong to the IP/title line**, not to the whole studio. Seasons, sequels and reboots keep the IP's fans; spinoffs inherit some; new IP starts with none.
- **[DECIDED]** One title's backlash decreases **its own** fanbase, not unrelated title fanbases or accumulated studio Prestige.
- **[DECIDED]** Broad studio advertising yields **fading hype for the next release**, not a permanent studio fanbase. Season-specific announcements build fading anticipation for that show without taking the main production slot.
- **[DECIDED]** Repetition fatigue is larger for repeating the same combo as a new project, lighter for direct sequels; Hall of Fame success can soften it. TV has additional age fatigue.
- **[DECIDED]** Trends follow **Rising → Hot → Saturated → Cooled** in semi-random waves; Hot aids awareness, Saturated makes critics more demanding.
- **[DECIDED]** The world does **not** explicitly simulate rival studios/film output; trend saturation abstracts the wider industry.
- **[DECIDED]** Feed starts as an in-game newspaper and evolves into an original in-game social feed; concise event messages and an original critic-score aggregator help players understand events.
- **[DECIDED]** If a made-up review website shows a percentage, it is **Critic score × 10**, not a third independently calculated rating.
- **[DECIDED]** Genre/theme unlocks come from staff high-Plot pitches, training/level-ups, era shifts, and research/purchases.
- **[DIRECTION / TEST]** Current Gate 4 audience model saturates distributor reach nearly regardless of mediocre reception and makes genuine 2–3/10 movies profitable. Need sensitivity tests **by actual score band**; do not lock one broad movie+TV change blindly.
- **[OPEN]** Exactly how sharply poor reception decreases box office versus TV viewership; how much reach caps, buzz, and word-of-mouth turning points affect each format.

## 7. Financial model and distributor negotiations — SIGNIFICANT POST-v9.6 REVISION

- **[DIRECTION / TEST — NEWER THAN v9.6]** The studio **pays to make its own originals** from its cash, including base cost, Star fee and wages. The player therefore risks their own money even before finding a distributor.
- **[DIRECTION / TEST]** **At around 80% completion**, take the nearly finished movie/limited series/TV season to 2–3 distributors for **fixed advertising-and-distribution bids**, instead of taking production advances before the film begins.
- **[DIRECTION / TEST]** Bids compete on **advertising spend, reachable audience and the distributor's share of traditional gross**. Choose one or self-distribute; no stacked partners, endless negotiations, auctions or loan-like mechanics.
- **[DIRECTION / TEST]** Distributor advertising budgets are **spent by the distributor on promotion** and **never deposited into studio cash**. Distributor reach is the ceiling for potential viewers; its advertising drives opening awareness. These are different levers.
- **[DIRECTION / TEST]** Distributors see the **observable near-finished project** (production progress, Star Fame, genre/trend, known combos, prior season's public track record), not hidden final scores or undiscovered combo grades. A strong bid is a market signal, not a guarantee of success.
- **[DIRECTION / TEST]** Traditional distribution earns studio cash from its share of finite commercial returns, versus the studio's own production investment. A genuine commercial flop should have a reasonable possibility of **studio net loss**.
- **[DIRECTION / TEST]** Distributors risk their **advertising money** and assess results through realized return/trust; don't assume the existing candidate's 100% profitable distributors are desirable.
- **[DIRECTION / TEST]** **Traditional TV pitches happen for each new season** in the Gate 4 candidate; this matches the preferred simple per-season choice rather than long multi-season licensing/advance contracts, but final signoff is pending.
- **[DIRECTION / TEST]** Self-distribution remains possible for full studio gross but low external reach. Its exact viability/scaling is **OPEN**.
- **[DECIDED]** The studio **owns its IP and titles** regardless of distribution path; distributors do not purchase the underlying IP.
- **[DECIDED]** Traditional commercial runs are **finite**. Movies have an opening plus a taper, limited series have finite runs, and TV earns during weekly episodes with a limited tail. No perpetually accruing title-by-title residuals.
- **[DECIDED]** Studio cash flow should include **payroll, upkeep and project costs** when assessing actual profit, not just project sales minus direct spend.
- **[DECIDED]** No Small/Medium/Large project budget tiers in the current plan; movie, limited series and TV season duration/episode count determine unavoidable costs.
- **[OPEN]** Does the traditional 80% release meeting **fully replace** the old selectable 80% title-marketing campaign? Current Gate 4 says yes; Streaming Originals still retain studio-paid marketing at 80% as a test. Clarify final UI/timing, and preserve freely optional studio-wide buzz.
- **[OPEN]** Exact distributor roster and bid formulas, commission percentages, ad budgets, fixed distribution costs, trust dynamics, TV deal details and whether any distributor might not bid.
- **[OPEN]** Whether the studio can self-promote/self-distribute with its own money and how this interacts with paid studio-wide buzz.
- **[OPEN]** How much money the studio starts with and whether the tutorial's first film is affordable before contracts.
- **[SUPERSEDED BY NEW DIRECTION, NOT CODE-DELETED]** The v9.6 rule of **upfront distributor advances, advance-funded base/Star/marketing spending and keeping unused advances as profit** is the *legacy model*, not the intended next financing direction. Old advance-repayment-on-cancel and emergency base-covering distributor bids are also tied to the legacy model.
- **[DIRECTION / TEST]** In the new candidate, cancellation loses all studio money spent so far, with no distributor advance to repay.

## 8. Commissioned client work and default-mode safety

- **[DECIDED]** The studio may accept **commissioned work for another company** as a low-risk, no-upfront-investment income path and way to recover after flops.
- **[DECIDED]** Contracts award **cash only as an enterprise reward**: **zero Studio Prestige**, no owned IP, no IP fans, no standalone release, no Hall of Fame and no commercial-run residuals. Employees can still earn their ordinary XP for doing the work.
- **[DECIDED]** Contracts use the **same staff skills** and occupy the one main production slot while in progress, so they trade precious time away from developing the studio's own hits.
- **[DECIDED]** Contracts should be financially accessible when the studio cannot afford another self-funded film. They are the safety net, **not** the best route to wealth or studio milestones.
- **[DECIDED]** In standard/default play, there is **no bankruptcy/game over/irrecoverable soft-lock**. Losses can slow progress substantially, but there must be a practical way to earn back funds.
- **[DIRECTION / TEST]** The current candidate includes Commercial edit, Script polish, Network pilot services and Full production services. The **client reimburses payroll/upkeep weekly** and pays a fixed completion fee (currently $9K/$12K/$30K/$56K), so the entry-level job costs effectively $0 even at zero cash. **Exact contracts, requirements, wages and payment timings are not locked.**
- **[DIRECTION / TEST]** Agent testing verified a studio with no money can take a starter contract, earn money and eventually restart its own production; that's a useful safety invariant to preserve.
- **[OPEN]** Contract deadlines, requirement thresholds, fee scaling, whether failure simply forfeits pay, and the negative-cash policy/floor in new financing. Avoid a grind-optimal contract farm.

## 9. TV and limited series

- **[DECIDED]** **Limited series** are self-contained, not renewable; their finite episodes, limited tail and lack of show-age fatigue should distinguish them from ordinary shows.
- **[DIRECTION / TEST]** The Gate 3 harness makes limited series **six episodes**. That's a current implementation assumption, **not necessarily the final episode length**.
- **[DECIDED]** Renewable television has separate **seasons** for one IP, and **one episode airs per week**. One season takes growing production time/cost for larger orders.
- **[DECIDED]** Season orders are **limited in episode count by studio Prestige** (roughly 5/10/15/20 at rising capability). These are per-season caps, **not** a cap on the number of seasons a show may run.
- **[DECIDED]** New shows may select whatever order size the studio has unlocked; they don't need to earn longer seasons by first succeeding at five episodes.
- **[DECIDED]** A season averaging **below 4.0** across Audience/Critic cannot renew; a season averaging **4.0 or higher** is eligible, and **9.0 or higher** qualifies for Hall of Fame.
- **[DECIDED — LATEST]** **No fixed maximum total number of seasons.** A show may continue while it is viable and the player chooses to renew; the user declined a hard 8/12/16-season cap.
- **[DECIDED]** Older shows experience **organic show-age fatigue** (and possibly diminishing audience enthusiasm), but **late-season comebacks remain possible**, including a very strong Season 7 or later.
- **[DECIDED]** A show's **genre remains the same** across seasons. A player may introduce a **theme twist** to revive a stagnating show; a good twist can reduce fatigue, while a bad twist can hurt the show's fans/reviews.
- **[DECIDED]** Normal hiatus between seasons is fine and unpenalized; unusually long hiatus only reduces **anticipation**, not historical review scores or persistent IP fans.
- **[DECIDED]** One nonspammable **season announcement** can build fading, show-specific anticipation without using the main production slot.
- **[DECIDED]** There are no automatic Prestige rewards per TV episode; a 20-episode order cannot earn four times the Prestige *solely* because it airs four times as many episodes.
- **[DIRECTION / TEST]** A gradual **viewer-side fatigue** affecting the potential reachable audience is worth testing. The first opening-only viewer-fatigue prototype had almost no effect because seasons still filled 91–99% of reach.
- **[DIRECTION / TEST]** Creative breakthrough events may occasionally raise underlying production quality and help with a comeback, but they must be cause-linked and visible, not random end-of-project reviews. The first prototype's effect was nearly invisible and is currently off by default.
- **[DIRECTION / TEST]** Keep the current review-fatigue formula while exploring the audience model; reducing it prematurely produced endless good shows and suppressed fresh Hall of Fame productions.
- **[OPEN]** Whether viewership/revenue (not just >=4 reviews) creates meaningful reasons to stop renewing; exact audience fatigue, comeback frequency and economic logic.
- **[OPEN]** TV Prestige pace relative to films: currently TV-heavy careers earn markedly less Prestige. Consider TV-specific significant achievements, but do not give Prestige merely for airing another episode.
- **[OPEN]** Limited series versus five-episode TV pilot economics (the current limited series can be much stronger early); exact episode order ladder, season announcement and hiatus effect sizes.
- **[LATER]** Voluntary Final Season announcement; TV spinoffs and reboots; genre shift within Star families; event seasons and other large shake-ups; binge-drop season releases (especially for Originals).

## 10. Prestige and critical acclaim

- **[DECIDED]** Prestige awards follow recognizable quality, reception and commercial **milestones**, not automatic movie completion, episode count, client contracts or random Fame.
- **[DIRECTION / TEST]** The successful Gate 2.5 hybrid candidate grants **repeatable per-release quality achievements** where earned, but pays **IP-wide commercial milestones once**. This avoids short-franchise Prestige starvation without treating every episode as a fresh Prestige prize. Exact amounts remain experimental.
- **[DECIDED]** Commercial sales can be strong without Prestige; niche critically acclaimed work can gain Prestige without matching box office. Fame/viewership and review scores are separate.
- **[DECIDED]** Hall of Fame is a review-based mark at average **>=9.0**; it increases future related-title visibility and provides a streaming catalog retention evergreen.
- **[DECIDED]** Critics get more demanding through the passage of eras and via **named critic replacements**. Audiences get a gentler increase in expectations.
- **[DECIDED]** The named panel has visible critic tastes and retirements; saturated trends attract harsher reviews, without vague personal vendettas.
- **[DIRECTION / TEST]** Current Gate 2.6 era/critic difficulty knobs are **off by default** and are stand-ins for the unbuilt named-critic generation system. The stronger combo_D substantially punishes long-running TV; not ratified.
- **[OPEN]** Exact Prestige milestone amounts, thresholds, caps, whether repeated per-title high-quality seasons are rewarded enough, and HoF rounding boundary.
- **[OPEN]** Number/pace of critic generations and how the overall audience difficulty increases without creating inevitable late-game collapse.

## 11. Streaming

- **[DECIDED]** Streaming unlocks from a combination of **Prestige, cash, owned catalog and a Software Engineer**; construction takes time **in the background**, while ordinary production continues without the engineer's work contribution.
- **[DECIDED]** Streaming income is calculated from **total subscribers**, not per-title streaming views, royalty streams or individual title payments.
- **[DECIDED]** **New content attracts** subscribers; catalog quality, volume, variety, freshness and Hall-of-Fame evergreens **retain** them. The passive catalog **never recruits** subscribers on its own.
- **[DECIDED]** Going quiet for too long causes gradual, visible subscriber churn; the platform also charges operating costs.
- **[DECIDED]** Every studio-owned traditional film/limited series joins the streaming catalog **automatically after its finite commercial run**; TV seasons join separately after each season's run. No window-management minigame.
- **[DECIDED]** Traditional releases remain available after streaming begins, generating normal commercial cash and later catalog value.
- **[DECIDED]** Streaming Originals are studio-funded, debut straight on the platform, **have no traditional box-office/broadcast release revenue** and instead provide a larger immediate subscriber acquisition pulse plus catalog value.
- **[DIRECTION / TEST]** Current simulation shows mixed traditional+streaming can succeed without streaming-only automatically winning. Retain that strategy choice, not an automatic upgrade where Originals always dominate.
- **[OPEN]** Subscriber fee, reachable market, acquisition/conversion, churn, retention, freshness, library effects, operating costs, Original-vs-traditional balance and streaming marketing mechanism.
- **[LATER]** Platform upgrades, binge-drop options, additional platform systems or a competing-service simulation.

## 12. Tutorial, presentation and game feel

- **[DECIDED]** Players **name their studio**, with a random-name button. The origin/backstory stays deliberately vague so they can imagine it themselves.
- **[DECIDED]** An **assistant character**, separate from the paid staff roster, offers guidance, commentary and timely event reminders throughout the career.
- **[DECIDED]** The assistant offers an **optional tutorial on a fresh save**. It happens during **only the first production** if selected, after which the player enters unrestricted free play.
- **[DECIDED]** Tutorials operate in the **actual gameplay screens with normal choices visible**; explain the reasoning, do not force a scripted result, and don't require 17 separate modal interruptions.
- **[DECIDED]** Tutorial completion status carries across saves. A returning player hears **"Welcome back, boss!"** and may jump ahead or replay the first-project tutorial.
- **[DECIDED]** If the first tutorial is skipped, later unlocks still get **brief dismissible contextual tips**, not a repeated full tutorial.
- **[DECIDED]** First tutorial production is intended to be **financially forgiving but not artificially guaranteed to be great**; it remains possible to produce mediocre/bad films through genuine play.
- **[DECIDED]** Staff, Stars, critics, distributors and the assistant should have **names and portraits**. Style and platform aren't locked.
- **[DECIDED]** The UI should explain key differences (reviews vs audience size vs money vs fans vs Prestige, combo grades vs Star genres), without flooding the player with simultaneous bars.
- **[OPEN — IMPORTANT DRIFT]** Rewrite the tutorial's **old pre-production distributor pitch and 80% marketing steps** to reflect the **new studio-funded production / 80% distributor bid** direction. Don't accidentally teach the abandoned advance model.
- **[OPEN]** Starting cash, initial unlocked genre/theme set (roughly three genres × four themes), exact first-project guidance, unlock timing for limited series, first Prestige award and assistant's final name.
- **[LATER]** Engine, platform, full art direction, final assets, production architecture. A cheap browser/simple-rectangle prototype is an implementation convenience, not a binding final engine decision.
- **[LATER]** Entertainment-era spoofing (theaters/home video/cable/streaming), final social feed brand, presentation of producers' score percentages and career Hall of Fame archive.

## 13. Simulation, workflow and acceptance standards

- **[DECIDED]** Preserve a **seeded deterministic, replayable TypeScript simulator/harness**, with clear independent test scenarios, comparisons, traceable causes and invariants. The harness does not commit us to a final game engine.
- **[DECIDED]** Prefer **tiny, fast deterministic smoke tests** while developing, then selected paired comparisons; large stress matrices only at major approval gates or when a specific risk warrants them.
- **[DECIDED]** Do not run 200 seeds × every strategy × 25–30 years for every small tweak. Gate 4's roughly 5–20-second testing loops show fast validation is practical.
- **[DECIDED]** Separate **actual outcomes** from misleading strategy labels. The old `cheap-duds` strategy averaged **6.24/10** and was correctly renamed for reports to `low-budget-random-combo`; need a separate strategy/diagnostic that actually produces sub-4 movies.
- **[DECIDED]** Quality and revenue tuning are **separate experiments**. Do not change both simultaneously and then attribute the result to one system.
- **[DECIDED]** Include wages/upkeep and direct cost in all-in profit, analyze **score bands 0–<4, 4–<6, 6–<8, 8–10** for movies and TV, and separately report actual Studio vs Distributor P&L.
- **[DECIDED]** Build normal-play cases (rookies, good/poor combinations, proficient staff, elite staff) alongside adversarial probes; don't manufacture fake low scores just to validate a model.
- **[DECIDED]** Preserve legacy regression tests and reproducibility while a new economy/quality setting is under consideration. Don't mistake a green test suite for designer approval of the candidate values.
- **[OPEN]** Criterion for final economy approval: what rate and depth of losses is interesting but fair, how weak/average/great productions scale, how to avoid rich contract grinders, TV Prestige balance and late streaming runaway.

## 14. Deliberately superseded, rejected or deferred proposals — DO NOT RESURRECT

- **[SUPERSEDED]** Individual staff genre XP → studio **exact-genre** levels, while staff keep four general skills.
- **[SUPERSEDED]** Multiple alternative meter names and early two-stat staff → exactly **Plot, Writing, Filming, Editing**, applied to both staff and production meters.
- **[SUPERSEDED]** Postproduction CGI/sound/marketing allocation minigame → automatic staff Editing and a simplified player-facing release decision.
- **[SUPERSEDED]** Upfront payment + an endless catalog royalty tail → finite traditional runs plus one aggregate streaming subscriber business.
- **[SUPERSEDED]** Budget Small/Medium/Large tiers → **shelved**, base cost per format/TV length.
- **[SUPERSEDED]** Distributor covers a percentage of a fixed budget → eventually changed to absolute upfront advance, **then** replaced in Gate 4's preferred experiment by **late advertising/distribution bidding**.
- **[SUPERSEDED]** Keeping unused distributor advances as an intentional farming path → **no production advance exists in the new candidate**; the related surplus/cancellation/lifeline rules are legacy-only.
- **[SUPERSEDED]** Genre-by-genre Star skills → **genre-family** skills. Studio XP remains per **exact genre**.
- **[SUPERSEDED]** Star Level gives independent caps to all skills → one total skill budget across families.
- **[SUPERSEDED]** Separate audience and critic **genre/theme compatibility grades** in the older handoff and Gate 4Q → **one shared compatibility grade**, with two different final review scores.
- **[SUPERSEDED]** Studio-wide permanent fans → **IP-specific fans** and separate short-lived studio buzz.
- **[SUPERSEDED]** Money or Fame adding directly to review scores → Fame and promotion affect awareness only.
- **[SUPERSEDED]** Guaranteed first-season 5/10 episodes → any season length already unlocked by **studio Prestige**, including first seasons.
- **[SUPERSEDED]** Hard cap on total number of TV seasons → **no hard cap**, economic viability and player decisions control longevity.
- **[SUPERSEDED]** Hidden Star skills or ranged audition guesses → exact displayed skills.
- **[SUPERSEDED]** Fixed Star "raise after hit" event → automatic Fame-based pricing; relationship/Prestige discounts.
- **[SUPERSEDED]** Rival-studio output simulation, per-title streaming royalties, stackable distributor partners, loans, complex split-refund pots, unrelated theme parks and soap operas for initial scope.
- **[LATER]** Advanced season finale marketing, optional harder bankruptcy challenges, TV genre shifts, full show-reboot arcs, postlaunch platform upgrades and multi-project concurrency are not silently authorized just because they appear in old notes.

---

## 15. Immediate inconsistencies to fix before a new canonical handoff

1. **CRITICAL — One combo grade vs two.** v9.6 says two and Gate 4Q implements two. Designer's latest instruction: **ONE** shared grade. Refactor the grade storage, combo book and twist/scoring usage while keeping separate Audience/Critic ratings.
2. **CRITICAL — When pitching occurs.** v9.6 and its tutorial say pitch at the start; Gate 4 candidate and recent design discussion say **studio-funded production with distributor bids at 80%**. The old handoff is outdated and must not be used unamended.
3. **CRITICAL — First-hour safety.** v9.6's no-bankruptcy lifeline was a guaranteed distributor **production advance**. That no longer exists under late distribution. **Client-funded contracts** now take over as the zero-upfront recovery route; the first film's starting cash and tutorial need revalidation.
4. **HIGH — Marketing at 80%.** The old 80% decision was a studio-paid release campaign, with a free no-campaign option. Traditional Gate 4 now uses an ad-bidding/distribution meeting at 80%; Originals retain a studio-paid campaign experimentally. Clarify the exact player experience and don't require two redundant full decisions.
5. **HIGH — Quality/family/genre impact.** Star family fit and studio genre XP are mechanically wired but hardly affect quality in Gate 4Q; their intended importance has not been quantified or validated.
6. **HIGH — Price/review economics.** New 2–3/10 films exist, but Gate 4's unchanged audience model still makes **all** sub-4 films profitable in the sample. The economy fix is **not** yet approved; movie and TV results must be tuned separately.
7. **HIGH — TV renewal viability.** No season cap is desired. The current implementation has a score gate and discretionary policy decisions, but viewer fatigue did not materially affect revenue; financially weak late seasons need to become a possible reason to stop.
8. **MEDIUM — Prestige for TV.** TV-focused careers earn significantly less Prestige than movie-focused ones because releases are slower and key IP achievements pay once. Award meaningfully exceptional seasonal accomplishments without passive episode rewards—still to test.
9. **MEDIUM — Critic eras and Hall of Fame.** Named critics are design-level intent but current era modifiers are proxies. HOF rounding boundary and combo_D era difficulty are not final.
10. **MEDIUM — Historical contract/financing details.** Contract pay scales, timing, cost coverage, cancellation, negative cash, self-distribution and per-season distributor terms are test implementations rather than ratified numbers.
11. **MEDIUM — First tutorial flow.** Update old lines about the preproduction pitch, free marketing and guaranteed first financing to the new design, while preserving a true two-worker, optional first-project introduction.
12. **MEDIUM — Flags vs approvals.** The latest Gate 4Q tests pass, but the candidate settings are **off in the baseline**, and Claude deliberately did **not** change the old official handoff. Don't mistake latest branch behavior for decisions the designer signed off on.

## Recommended source-of-truth hygiene

- Maintain **one live decision ledger** like this file, not full overlapping rewritten v10, v11, v12 design essays after every experiment.
- Give decisions short stable IDs in the next canonical revision if using version control (e.g. `FIN-01`, `COMBO-01`, `STAR-02`). Every new decision updates **one existing item or adds one new item**.
- Every experiment documents a **test assumption** separately; when accepted, promote *only that specific rule* into the ledger.
- Keep a tiny **decision changelog**: date, old rule, new rule, why, related harness flag; old versions remain archives, not competitors.
- Send Claude the ledger alongside the relevant Gate 4Q project. Ask it to identify **contradictions before coding** and never silently promote experimental values to canon.
