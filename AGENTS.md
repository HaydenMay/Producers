# AGENTS.md — rules for every coding agent (Claude, Codex, others)

**Project:** Producers (working game name). **This repo:** a deterministic TypeScript balance/simulation harness, **not** the game.

## Before you change anything

1. **Read [`docs/DESIGN_LEDGER.md`](docs/DESIGN_LEDGER.md) before any substantive design or code change.** It is the only canonical game design. `docs/archive/` (old handoffs, gate prompts, gate findings) and `reports/` are history and evidence, never authority.
2. Authority order:
   1. The human designer's latest explicit decision.
   2. Earlier explicit approvals that haven't been changed.
   3. Old handoffs, for topics not superseded.
   4. Gate findings and candidate code.
   5. Agent suggestions and test knobs.

   When sources disagree, **state the conflict**; don't average designs or assume the newest code is approved.

## Ledger rules

3. **Never change a `LOCKED` decision without explicit human approval.**
4. **Never silently promote** a `TESTING` value or a candidate config (`config/gate*.json`) to `LOCKED`. Numbers marked *(test)* are harness assumptions. Shipping in the `config/baseline.json` default is an **implementation state**, not designer approval: a default-on feature can still be `TESTING` (PROD-185).
5. **When code differs from the design, flag it** (implementation state `Implemented differently` / `Partial`). Don't rewrite the ledger to match the code.
6. Update the relevant ledger row(s) **in the same commit/PR** as any approved design change: status, implementation state, evidence. Never invent a human approval.
7. New decisions get a **fresh `PROD-###` id**. Ids are never recycled; superseded rows stay, pointing to their replacements.
8. Keep prompts and handoffs in `docs/archive/`, separate from the ledger. Don't write new macro-handoffs; use the ledger and git history. Run `npm run ledger:check` after editing the ledger. It also fails when `docs/assumptions-register.md` disagrees with `config/baseline.json`: after any baseline change, regenerate it with `npx tsx scripts/register.ts`.

## Working in the harness

9. **Fast first.** Run the tiny deterministic loops before anything bigger:
   - `npm run typecheck`
   - targeted `npx vitest run tests/…`
   - `npm run economy:smoke` (≈ 5 s) / `npm run quality:smoke` (≈ 8 s)
   - then `npm run economy:compare` / `quality:compare` (≈ 15–20 s)
   - `npm test` (≈ 15 s) before committing.

   **Don't run 200-seed / 25-year matrices** unless the designer asks or a specific regression needs it.
10. Keep determinism, replay and the legacy regression baselines intact. New mechanics go behind config flags with the legacy default unchanged, and must be proved byte-identical when off. Quality and revenue tuning are separate experiments. Judge films by actual scores, not strategy names.
11. **Don't claim tests passed unless you ran them. Don't claim a push/publish happened unless you verified it.** Never commit secrets, tokens, `node_modules/` or build output.

## End every handoff with

- Changed ledger ids (and why).
- Any code-vs-design mismatch found.
- Commands run and results.
- Branch + commit SHA (and remote, if pushed).
- Unresolved decisions for the designer.
