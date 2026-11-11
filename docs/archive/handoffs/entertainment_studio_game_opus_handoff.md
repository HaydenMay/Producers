# Entertainment Studio Tycoon — Design Handoff for Opus

**Status:** Early concept planning; **not approved for implementation**  
**Date:** November 8, 2026  
**Purpose:** Bring another design partner (Opus) into the conversation to stress-test the concept, identify missing systems and design risks, and continue planning **without prematurely implementing or expanding scope**.

## 1. Design intent

We want an accessible, replayable management/tycoon game heavily inspired by **Kairosoft's Game Dev Story**, adapted to running an entertainment production company. The appeal is the combination of:

1. **Discovering compelling genre + theme combinations**, including logical hits and unconventional niche/cult favorites.
2. **Building and developing a small, recognizable staff** with improving skills, roles, and expertise.
3. **Starting tiny and growing into a major entertainment company**, eventually potentially operating its own streaming service.

The player starts as a **small production company**, *not* as an established streaming platform. Movies and limited series are the initial products. More complex TV formats and distribution businesses unlock as the company grows, analogous to how Game Dev Story gradually unlocks platforms, genres, and capabilities. The inspiration is the corporate evolution of companies such as Disney/Paramount, **without theme parks or sprawling unrelated businesses**.

**Design north star:** The satisfying, fast, understandable *Game Dev Story* rhythm. Add strategic depth at purposeful decision points, not micromanagement for its own sake.

## 2. Decisions made / strongest agreed direction

These items were directly chosen or clearly endorsed in the planning discussion. Treat them as current design direction, but still flag real contradictions or risks.

### Core play loop

- **One main production at a time**, at least initially. Do **not** simulate multiple simultaneous active film/TV productions from day one.
- Already-released content can continue generating **revenue, audience activity, and other results** while the player works on the next production.
- The player chooses **format, genre, and theme**; invests in a project, uses staff to build quality during a visible production period, faces a few meaningful events, releases it, then reinvests in growth.
- Keep production **mostly automatic with some meaningful management decisions** (the player chose the middle option, “B”), not a constant hands-on management sim.

### Content formats and studio evolution

- **Early game:** Movies and limited series.
- **Later unlocks:** Traditional seasonal TV series and soap operas; potentially larger productions/franchises.
- **Further company growth:** Option to launch the studio's **own streaming service**, rather than beginning as a streaming platform. The exact unlock conditions and mechanics are **not designed**.
- New series should begin with shorter **pilot/first-season orders**, likely **5 or 10 episodes** rather than immediately 15 or 20. Longer orders become available for established/renewed shows.

### Production timeline

Use a **three-phase production structure** with two milestones:

| Progress | Phase | Main activity | Milestone decision |
|---|---|---|---|
| **0–40%** | Writing and preproduction | Writers develop the script; the studio canvasses for possible lead actors | **40%:** Audition/canvassing results come back; player hires the lead |
| **40–80%** | Filming / principal production | Cast, writing work, and production resources contribute to quality | **80%:** A meaningful post-production decision (precise options TBD) |
| **80–100%** | Post-production | Editing, sound, effects/polish complete the project | Completion → release and results |

- Casting happens **during the production process**, not fully upfront. Opening prompt can communicate: *“We’ve begun production planning. Let's canvass for actors and actresses who could fit this project.”*
- Around **40%**, results return: *“The casting search results are back. Who should we hire?”*
- Treat 0–40% as planning/script/preproduction so it makes sense that the main actor is not hired until 40%.
- Preserve the satisfying **visible point accumulation and staff activity** of Game Dev Story, instead of reducing production to a waiting timer.

### Casting and actor continuity

- **Manage ONE lead actor or actress per production/season for now.** There is **no need to manage supporting casts or individual episodes' casting**.
- Supporting talent and the broader crew are abstracted into production costs/quality.
- **Auditions/canvassing** generate lead candidates, then the player chooses based on suitability and price. Exact search/audition options are TBD.
- A previously successful show's lead can appear as a **returning-cast option** for a new season.
- Returning leads may **ask for higher pay** after a hit, but offer an **audience recognition/continuity benefit**.
- Recasting should be possible and **not automatically catastrophic**. The goal is meaningful tradeoffs, not an inescapable salary trap.
- The current intent is that actors have an identity and an evolving career; their exact persistent stats, availability, contracts, and progression are unfinished.
- **Actor personality traits are explicitly deferred.** Do not commit to a complex trait or chemistry system at this stage.

### Soap operas and ongoing series

- **Soap operas are produced in batches**, not by permanently assigning writers to an infinite production.
- Supported soap **batch-size choices: 5, 10, 15, or 20 episodes**.
- A new soap should probably be restricted to **5 or 10 episodes** until it proves itself. The exact rule is still to be defined.
- Once a batch finishes, writers and production resources are **available for new productions**; the episodes continue airing over time.
- Another batch can be commissioned as a new production to keep the show going.
- If a show runs out of episodes without a replacement batch, it could go on hiatus and gradually lose audience loyalty. This is a **proposal**, not a finalized penalty.
- Longer batches cost/occupy more production time but keep programming on air longer; their economic efficiency should require balancing. **20 episodes must not always be the no-brainer choice.**

### Themes and combinations

- Themes should be **broad, immediately recognizable concepts**, not narrow premises. Strong examples: **Zombies, Superheroes, Vampires, Time Travel, Pirates, Robots, Dinosaurs, Spies, Mythology, Sports**.
- *“Haunted House”* was criticized as **too specific** for a core theme category; avoid overly granular plot premises.
- Genre + theme compatibility matters, as in Game Dev Story: **Action + Superheroes**, **Horror + Zombies**, **Comedy + Zombies**, etc.
- Support **unexpected/niche combinations** and **cult classics**, not solely obvious “A” combinations. A strange pairing can be commercially narrow but artistically successful and capable of building long-term loyalty.
- Don't make unusual pairings automatically become cult hits; production quality and audience fit should still matter.

### Writers and staff

- Distinguish **permanent writer/studio employees** from **lead actors hired or contracted per production**.
- Writing staff should have **trainable, levelable attributes**, developing like Game Dev Story employees.
- Tentative writer attributes: **Creativity, Plot Writing, Dialogue, Pacing**. These were brainstormed examples, **not selected final stats**.
- Genre expertise may improve from repeated work; exact caps, training and unlocking mechanics are TBD.
- Actor strengths might reflect performance styles or genres such as **Humor/Comedy, Seriousness/Drama, Romance, Action**, plus salary and popularity. **The final stat schema is undecided.**

## 3. Ideas discussed but NOT approved / deliberately unresolved

Do not accidentally promote these suggestions into requirements.

- **Two-dimensional combination ratings:** Separate mainstream commercial appeal from creative compatibility. This could enable profitable crowd-pleasers versus critically beloved cult classics, but the underlying math and whether this is the correct solution remain unapproved.
- **Actor arrangements:** Per-production contracts, exclusive/retainer talent, open auditions, budgets for searches, star scouting. User liked exploring open auditions plus possible retained talent, but no contract model is fixed.
- **Post-production milestone at 80%:** Could involve selecting editing, visual effects, audio, polish, marketing, or tradeoffs. No actual choice has been designed.
- **Limited-series episode counts:** 5 or 10 was suggested as a simple starting point, but not firmly decided; limited-series one-off status vs surprise renewal also needs examination.
- **Specific subscription/royalty economics:** We know early company operates as a production company, and streaming can arrive later, but how a film pays out, how a show licenses, recurring rights, revenue schedules, residuals, and subscriber acquisition have not been settled.
- **Production quality meters:** Game Dev Story has Fun, Creativity, Graphics, Sound; a studio game requires its own small set of meaningful, transparent quality dimensions. None are finalized.
- **Season and episode release cadence:** Full-drop vs weekly, how season reception accumulates, timing of renewal decisions, whether renewals can be ordered before a season ends, and the handling of gaps all remain open.
- **Genre/theme expertise and unlock trees:** General direction endorsed, precise rules not designed.
- **Production concurrency in the late game:** Beginning with one production is deliberate; whether an advanced studio can run multiple teams/projects later remains open.
- **Television network vs streaming service:** A network is possible but not committed. Streaming service is a desired long-term possibility, not a required early-game layer.
- **Recasting economics, salary inflation, audience loyalty, actor fame, and actor availability:** These could drive engaging choices or frustrating traps; need deliberate design.
- **Staff personality traits and supporting/ensemble casts:** Park for later. Current preference favors simplicity and a single lead.
- **Graphics / platform / engine / business scope:** No implementation stack or visual aesthetic has been chosen. Do not assume Unity, browser, mobile, pixel art, etc.

## 4. Game Dev Story reference loop (research summary from earlier discussion)

The purpose of this reference is to reproduce its *feel*, not replicate systems blindly.

1. Pick a **platform**, **genre**, and **type/theme**; set an approach/direction and production policy.
2. Assign staff; begin an animated development period where employees contribute visible **quality points** and sometimes produce **bugs/problems**.
3. Interrupt production at purposeful milestones to make decisions/assign specialists. *Game Dev Story* uses writing/scenario selection early, graphics and music specialists later, and development events.
4. Debug/finish and release; receive reviews, sales, fans, money and prestige.
5. Train/hire/level employees, build expertise, unlock genres/types/platforms and larger projects, repeat.

Crucial lessons:

- The genre + theme discovery is fun, but **the visible work-in-progress phase** provides much of the moment-to-moment gratification.
- A single production should progress **several systems at once**: cash, reputation, staff development, combination discovery, expertise, unlocks, catalog.
- Too much routine success late game makes the formula lose tension; guard against dominant combinations, overpowered specialists, and effortless profits.
- Don't recreate bugs, consoles, research points, etc. literally unless they have a purposeful analog in entertainment production.

**Accuracy note:** This is a high-level synthesis of the planning conversation's prior Game Dev Story research, not a rigorously sourced mechanics specification. Verify particular mechanical details independently if precision matters.

## 5. Suggested example production (illustrative only)

**Project:** *Dead Frequency*  
**Format:** TV series, first season  
**Genre + theme:** Horror + Aliens  
**Order:** 5 episodes

- **Start:** Choose the genre/theme, format, pilot-season length, budget and writing team. Begin casting canvass.
- **0–40%:** Writers generate screenplay/story quality as the candidate search proceeds. Player sees production progress.
- **40%:** Audition report provides several possible lead actors with different skills, fame and salary. Player hires one.
- **40–80%:** Filming generates further quality; lead quality/fit makes a difference.
- **80%:** Post-production choice (to be designed) and final finishing phase begins.
- **100%:** Series launches, reviews and viewership emerge, revenue/interest accrues over time.
- **After release:** Maybe it becomes a hit, niche favorite, or disappointment. Player decides whether another season is worth commissioning. A returning lead may request a raise but carry continuity.

## 6. Design risks that deserve frank pushback

These are concerns we want Opus to **challenge**, not merely agree with:

1. **Format differentiation:** If movies, limited series, TV seasons and soap batches use the exact same progress sequence, what makes them strategically different beyond length and cost?
2. **One-project bottleneck:** A hit serial requires follow-up production, but one-at-a-time production could cause repeated scheduling chores or forced hiatus. How do we maintain simplicity without undermining a growing studio?
3. **40% casting choice:** Making casting a mid-project event creates anticipation; how do we make the first phase meaningful if casting has not occurred yet? How does player choice affect outcomes rather than merely selecting the highest number?
4. **80% post-production choice:** Needs an engaging, non-obvious tradeoff and must not become the same optimal selection every time.
5. **Actor salary inflation and recurring cast:** Continuity matters, but forced salary spirals could make successful series unpleasant.
6. **Soap batches and seasons:** Avoid constant renewal alerts, gaps, and repetitive “make 20 more episodes” busywork.
7. **Revenues before/after streaming:** Early-stage licensing and future subscriptions may have very different economic models; avoid an abrupt game genre shift at the streaming milestone.
8. **Combination discovery:** How do broad recognizable themes produce enough interesting combinations without one solved spreadsheet of A-rank pairings?
9. **Staff scaling and endgame:** How do writers continue to matter after players max out their stats? When and why should the player take risky new projects?
10. **Scope creep:** Don't build a film-industry simulation with dozens of roles, complex individual cast chemistry, and three overlapping economies before the core loop is enjoyable.

## 7. What we want from Opus now

**Do not implement anything yet.** Respond as a thoughtful **co-designer and constructive critic**, not as a coding agent or a cheerleader.

Please:

1. **Summarize your understanding** of the game's central fantasy and the specific decisions we have already made. Distinguish confirmed choices from proposals.
2. **Critique the design**: identify the most consequential gaps, conflicting rules, sources of tedium, and opportunities for emergent stories (especially a tiny production company growing toward its own streaming service).
3. **Recommend a small number of alternative solutions with tradeoffs** for any major unresolved system—especially financial outcomes, production quality stats, and how TV/soap renewal works. Explain which you favor and why.
4. **Prioritize the next design decisions**, rather than attempting to invent the whole game at once. Ask the most important one or two questions to keep the planning conversation moving.
5. **Preserve the Game Dev Story-inspired simplicity**: familiar genre + theme experimentation, a watchable production cycle, staff growth, exciting milestones, and a rewarding economy.
6. Clearly mark every new mechanic as **your proposal**, not as something already agreed.

**Please do not:** write code, choose a game engine, invent final balancing numbers, treat actor personality or multiple lead roles as approved, force the user into a streaming-service-first concept, or expand into theme parks/irrelevant business lines.

## 8. Short decision ledger

| Topic | Status |
|---|---|
| Kairosoft Game Dev Story as primary mechanical inspiration | Agreed |
| Start as a small independent production company | Agreed |
| Movies and limited series first | Agreed |
| TV shows and soap operas unlocked later | Agreed |
| Own streaming service as later growth direction | Desired; implementation TBD |
| One active production at a time initially | Preferred current direction |
| Genre + broad theme combinations, niche/cult success | Agreed goal; exact scoring TBD |
| Permanent, levelable writers | Agreed direction |
| Lead actors hired from candidate pool during production | Agreed direction |
| Only one player-managed lead per project/season initially | Preferred simplification |
| 0–40 writing/preproduction, 40–80 filming, 80–100 post | Agreed phase structure |
| Casting decision at 40% | Agreed |
| Post-production milestone at 80% | Agreed timing; options TBD |
| First-season TV/soap order 5 or 10 episodes | Strong proposed constraint |
| Soap batch sizes 5/10/15/20 | Agreed |
| Soap episodes air after staff finish and become available | Agreed |
| Returning lead option, higher salary, continuity benefit | Agreed direction; tuning TBD |
| Actor personalities / complex contracts | Deferred |
| Multiple managed lead roles / supporting casts | Not for now |
| Engine, platform, art direction | Not discussed |

---

**Preferred workflow:** Explore and question first. Only after design direction is chosen should we prepare an implementation-ready spec, game prototype, balance sheet, or coding handoff.
