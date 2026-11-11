# Producers — GitHub Repository + Living Design Ledger

> **For Claude (or another coding agent).** This is a **repository-and-documentation milestone**, not permission to implement an entirely new game or rebalance Gate 4Q. Complete the work in this run, push it to GitHub if authorized access is available, and stop for designer review.

## Mission

Set up the existing **Entertainment Studio Tycoon** project under its new name, **Producers**, in a GitHub repository named exactly **`Producers`**. Bring the **current working TypeScript balance harness** into that repository, create **one authoritative living design ledger** covering all design decisions to date, and make the repo the durable home of the project going forward.

**Primary outcome:** The designer and future Claude/Codex agents can reliably distinguish (a) what was explicitly decided, (b) what is only an experiment, (c) what the code currently does, and (d) what remains open—without multiple overlapping handoffs accidentally becoming competing sources of truth.

**Inputs to use** (supplied alongside this prompt or present in the current project):

1. **Existing local Git workspace** for the balance harness, if available. **Prefer it.** It may contain meaningful branches/commits that a ZIP does not preserve.
2. `gate4q-quality.zip` — most recent working harness source snapshot if the local workspace is unavailable. It unpacks under `balance-harness/`, with `src/`, `config/`, `scripts/`, `tests/`, `docs/`, `reports/`, `package.json`, etc. The ZIP **does not contain `.git` history**; do not claim to have imported prior branches from the ZIP.
3. `Entertainment_Studio_Tycoon_Decision_Audit_2026-11-10.md` — the detailed, ~200-entry design audit. Treat it as the **starting inventory to reconcile**, **not** as blindly approved code or a second canonical spec.
4. `entertainment_studio_handoff_v9_6.md` — last large historic game-design handoff; source of older decisions where not superseded.
5. Gate 3, Gate 3 follow-up, Gate 4 and Gate 4Q reports/decision files and existing `reversals_summary.md`, when available.
6. The explicit **latest designer corrections** under “Must reconcile” below. They override older handoffs and experimental assumptions.

If any source is missing, continue with what is present; identify the missing evidence and leave any affected decisions marked `OPEN`/`NEEDS_VERIFICATION`. **Do not invent historic approvals.**

## Scope and hard boundaries

**Do:** organize and publish the working project; preserve functional source/config/tests; create authoritative documentation; point agents to it; run minimal verification; commit and push safely.

**Do not:** implement currently unapproved gameplay changes, rewrite scoring/economy, change production financing formulas, run a huge simulation matrix, reorganize the TypeScript architecture for style alone, or silently rewrite prior histories. This milestone is organizational. Future design implementation will be a separate task, decided from the ledger.

The game/project name going forward is **Producers**. GitHub repo slug must be **`Producers`**. Update visible top-level project identity in the README, and package/display metadata **only when safe**; don't mass-rename internal modules, file paths, historical report references, or type names just to match the name.

## Before changing anything: inspect and protect the repository

1. Inspect the current workspace and available ZIPs/reports. Identify the newest working project state and its test commands.
2. `git status`, `git log --oneline -n 10`, `git branch -a`, `git remote -v`, and `gh auth status` (or available GitHub auth method).
3. **Preserve the local Git history, tags, and relevant working branches when available.** Do not initialize a new repo on top of an existing Git repo or replace it with the ZIP without reason. Never force-push or erase unrelated work.
4. If using the ZIP alone, clearly say historical commits are unavailable in this snapshot; initialize Git honestly with a snapshot/bootstrap commit. Don't fabricate prior git history.
5. Check `.gitignore`, ignored outputs, secrets/configuration, and large generated report datasets. Track hand-authored source, configurations, tests, reproducibility fixtures/baselines, essential docs, and small representative findings. Avoid committing `node_modules`, build outputs, credentials, local environment files, or unnecessary massive regenerable outputs. **Do not delete the originals just to reduce GitHub size.** Keep any baseline fixtures required for byte-identical regression testing.
6. Do not perform an expensive full suite before the documents are written. A quick baseline check and full unit/typecheck at the end are sufficient unless failures demand investigation.

## GitHub publication

- Check whether the authenticated owner's GitHub account already has a repository called `Producers`. If it exists, **inspect it first**; do not overwrite, rename, reinitialize, or force push over unrelated content. If it is this same project, connect and update safely. If it is unrelated or there is an ambiguous/conflicting remote, stop publication and report the blocker—leave the local work intact.
- Otherwise create a new **private** GitHub repository named **`Producers`**, using the authenticated account, and push the existing project's history/default branch where possible.
- The default branch should be `main` if appropriate for a new repository. For an existing repo, preserve its current mainline and use a clean feature branch/PR if merging the Gate 4Q state is risky. Never destroy branches or use forced history rewrites.
- Do **not** upload the ZIP file as the repository contents; import the **extracted, usable project** instead.
- Do **not** request, print, or save a GitHub personal access token in chat or repository files. Use authenticated `gh`/Git credentials. If authentication or the creation permission is unavailable, finish the local deliverables and ask the designer for the single required account/permission action. Don't claim GitHub was updated if it wasn't.
- Return the **actual verified GitHub URL**, current branch, and commit SHA once pushed. If push fails, say so and provide the exact non-secret blocker.

## Design documentation structure (keep it simple)

Required:

```text
Producers/
├── README.md                         # Short identity, setup, commands, navigation
├── AGENTS.md                         # Brief instructions for ALL coding agents
├── CLAUDE.md                         # Brief Claude-specific pointer, no duplicate spec
├── docs/
│   ├── DESIGN_LEDGER.md              # THE ONE authoritative living design document
│   └── archive/                      # Old handoffs/reports: context only, not authority
├── src/                               # Existing harness source, retained
├── config/                            # Existing configs, experiments retained
├── scripts/                           # Existing harness scripts, retained
├── tests/                             # Existing tests, retained
└── ...                                # Existing necessary project content
```

The layout can adapt to the actual project, but **only one document may be the canonical game design**: `docs/DESIGN_LEDGER.md`. Historical handoffs belong in `docs/archive/` or are linked clearly as historical artifacts. Preserve their contents; do not continually regenerate new macro-handoffs.

In README, distinguish **“Producers (working game name)”** from the fact that the current codebase is a **balance/simulation harness**, not a completed playable tycoon game. Don't claim a complete game has shipped.

### `docs/DESIGN_LEDGER.md` is the central deliverable

Reconcile the supplied decision audit into a genuinely usable ledger. Preserve *every substantive topic* from the audit (aim for complete coverage of its ~200 entries), but organize logically and de-duplicate repeated statements. Preserve the specific thresholds/constraints that are already approved; do not flatten nuanced decisions into generic summaries.

For **each individual decision/requirement** record, provide:

- Stable ID, e.g. `PROD-001`, `PROD-002` (never recycle IDs after future removals).
- Short title and exact current rule or question.
- **Design status**: `LOCKED`, `TESTING`, `OPEN`, `LATER`, `SUPERSEDED`.
- **Implementation state**: `Implemented`, `Implemented differently`, `Partial`, `Not implemented`, `Unknown` (verified against current source when feasible).
- Evidence/provenance: e.g. designer correction 2026-11-10, v9.6, Gate 3 finding, Gate 4Q prototype; cite concrete docs/paths when available. Never present a proposed number as a designer decision.
- Optional notes or linked predecessor/successor ID for superseded rules.

A compact Markdown table or bullets are fine as long as the ledger remains readable. Group by systems: identity/progression; staffing/jobs; production flow; Stars/families; genre/theme compatibility and scores; trends/critics/audience; finances/distributors; commissioned contracts; IP/fans; TV; limited series; streaming; Prestige; tutorial/UI; future/challenges; engineering/testing.

At the top, include a short **“Current decisions versus implementation” dashboard** that explicitly calls out important mismatches. At the bottom, include **“Next decisions to review”** ranked by impact. Use Git history for the change log rather than creating more overlapping master documents.

### Authority rule

Use this precedence in order:

1. Latest explicit decision by the human designer (including the latest conversation corrections supplied with this prompt).
2. Previously explicitly approved decisions that have not been changed.
3. Prior canonical handoffs for topics not superseded.
4. Later gate *findings* as evidence and later gate *candidate code* as implementation state.
5. Agent suggestions, illustrative values, and test-only knobs as **nonbinding**.

When sources disagree, **state the conflict** and record the higher-authority decision. Don't average two incompatible designs or assume the newest code is approved.

## Must reconcile: known design drift

Treat these as validation cases for the ledger; check that each is represented correctly.

1. **ONE combination grade:** An exact genre + theme pair gets **one shared, logically sensible, hidden compatibility grade**. Audience and critics produce **two final review scores** with different craft/expectation weights. **Gate 4Q currently implemented two separate compatibility grades: mark as `Implemented differently`, pending correction.** Do not perform that code correction in this organizational task.
2. **Logical combinations plus rare surprise:** Horror + Zombies is naturally strong; implausible pairings may be poor, but unconventional does not automatically mean bad. Poor fits should be meaningfully risky for rookies; 2/10–4/10 movies must be possible in normal early play. Rare audience cult appeal can rescue an odd release without rewriting the underlying shared grade.
3. **Stars vs studio genre experience:** Stars use broad **genre families** (Scary, Funny, etc.), while studio genre experience is for **exact genres**. Genre themes do not determine Star family skills. Gate 4Q reports the current quality influence of both is weak: treat boosting their effect as `TESTING/OPEN`, not an approved numeric bonus.
4. **Studio-funded originals / 80% distribution:** The newer **direction under test** is that the studio funds its own movie/limited series/TV season and at ~80% completion receives distributor bids for **distribution reach, advertising paid by the distributor, and revenue split**. Advertising funds do **not** become studio cash. The older upfront distributor advance model is **`SUPERSEDED` as the currently preferred direction**, but the *new model's exact terms and final balance are not yet locked*. Preserve experimental branches/configs and label honestly.
5. **Commissioned work:** Contracts are zero-upfront, low-risk cash recovery. They yield **money only**: **zero Studio Prestige, no studio-owned IP/fans, no Hall of Fame**. They occupy production time and can progress staff. Exact amounts, reimbursement, deadlines remain experimental. Contracts are the intended standard-mode recovery path under the new economy.
6. **No hard season limit:** TV can renew for as many seasons as it remains viable. There is a **different** separate Prestige-gated **episodes-per-season** capacity (5/10/15/20 in current test model). Series age/viewership fatigue and comeback/twist mechanics are desired; precise multipliers are experimental. A breakthrough should arise from understandable production causes, not an unexplained independent final review roll.
7. **Staff:** Exactly two starting employees; studio capacity four, later six/eight; every available worker contributes to all four quality meters; XP earned while working; staff **can be fired**, freeing a slot for the Software Engineer. Exact firing timing/severance remain experimental.
8. **Auditions:** At 40%, 4–5 Star candidates with exact visible stats/fees; if none affordable, a free Level-0 Newcomer **replaces one audition before cards are displayed**; previous Stars can be called back. Avoid reverting to an unapproved menu model.
9. **Quality and finances are different:** A low-budget movie is not automatically poor; a strategy named “cheap duds” must not be treated as genuinely low-quality without measured ratings. Assess finances for actual score bins (<4, 4–6, 6–8, 8+), with full net including allocated payroll/upkeep. Never alter scores to hit a prescribed loss percentage.
10. **Prestige:** Earned from achievements and meaningful milestones, not simply production completion; **never for commissioned contracts** and **never automatically per TV episode**. TV Prestige path and exact milestone amounts are still under review. No global studio fan counter—fans attach to IPs.
11. **Streaming:** Built by Software Engineer; cumulative catalog, subscriber economy, quiet-period churn, Hall-of-Fame evergreen retention, catalog joins after traditional run. Streaming Originals forgo traditional box office. Avoid inventing title-by-title subscription payouts.
12. **Game scope:** One active main production; weekly clock; normal mode forgiving and open-ended; challenge variants/hard bankruptcy/multiple concurrent productions postponed. Harness's 25–30 year horizons are stress tests, not designed game duration.
13. **Test workflow:** Default to tiny deterministic cases and targeted comparisons; use full long-seed stress matrices only at major sign-off gates or when explicitly justified. The fastest existing Gate 4Q scripts are `npm run quality:smoke` and `npm run quality:compare` if present. Keep tests/replay guarantees.
14. **Tutorial:** Optional first production walkthrough, free to skip/replay, not a scripted guaranteed hit, and returning players can bypass after first completed tutorial. Account for moving distributor pitch from beginning to ~80% when a future implementation pass updates the tutorial.

The supplied audit contains additional details beyond this list. This list is a **consistency checklist, not permission to omit the rest of the audit**.

## Agent workflow guardrails

Write a short root `AGENTS.md` and `CLAUDE.md` that instruct Claude, Codex, and future agents:

1. Read `docs/DESIGN_LEDGER.md` **before any substantive design/code change**.
2. Never change a `LOCKED` decision without explicit human approval.
3. Never silently turn a `TESTING` value or a candidate config into a `LOCKED` rule.
4. When code differs from a locked design, flag it—don't silently rewrite the ledger to match code.
5. Update the relevant ledger item(s) **in the same commit/PR as any approved design change**, including implementation status and evidence. Don't invent human approval.
6. New design decisions must use a fresh stable ID. Superseded entries stay searchable with links to replacements.
7. Keep prompt/handoff docs and archived reports separate from the canonical ledger.
8. For minor changes, run tiny deterministic tests first; keep reproducibility and full suite gates, but don't spend 45 minutes on routine verification.
9. Don't claim tests passed unless executed; don't claim GitHub published unless push is confirmed.
10. At the end of every handoff, summarize: changed design IDs; any code-vs-design mismatch; commands/results; GitHub branch/commit; unresolved decisions.

`CLAUDE.md` must be **short** and point to `AGENTS.md` + `docs/DESIGN_LEDGER.md` rather than repeating all game rules.

## Verification (fast and proportional)

- Confirm tracked source/config/tests/docs build a usable TypeScript project, and `npm ci` succeeds (when lockfile/dependencies are available).
- Run `npm run typecheck` and `npm test` / the package's actual equivalent. Run a fast smoke scenario if available. Avoid 200-seed matrices or multi-decade simulated runs for this documentation milestone.
- Confirm the old project behavior wasn't modified by reorganizing/renaming (source should remain effectively unchanged).
- Verify ledger completeness with an explicit crosswalk against the original audit: make sure there is **no missing substantive decision**. State the count of audit entries inventoried, mapped to ledger items, and any omitted duplicates with justification.
- Check that GitHub contains: README; canonical ledger; agent instructions; usable code, tests and configs; and clear archive/non-authority labels.
- Review `git diff --stat`, `git status`, and test output. Commit with an informative message, then push and verify remote branch/commit.

## Final response to the designer (keep it short, plain English)

1. **Repository:** verified GitHub URL, visibility, default branch, latest commit SHA; or exact blocker if unpublished.
2. **What was preserved:** source/harness, tests, configs, and real Git history (or caveat if ZIP-only).
3. **Documentation:** link to `docs/DESIGN_LEDGER.md`; number of substantive decisions migrated; key discrepancies clearly flagged (especially dual-vs-single combo grade and distributor model).
4. **Validation:** which fast commands passed; don't bury the designer in logs.
5. **Next design decision:** top 2–4 OPEN/TESTING items, not implementation of all of them.
6. **Stop here for approval** before doing any scoring or financing rebalance.

### Definition of done

The designer can open **Producers** on GitHub, find **one authoritative living list of agreed and pending design decisions**, see what current code does differently, and hand this repo to Claude or Codex without reconstructing the entire design history from chat or scattered ZIPs. No unnecessary stress testing; no accidental game-balance changes.
