# CLAUDE.md

Follow [`AGENTS.md`](AGENTS.md). The game design lives **only** in [`docs/DESIGN_LEDGER.md`](docs/DESIGN_LEDGER.md); read it first and don't duplicate it here.

Claude-specific reminders:
- The designer prefers the best option even when it contradicts their idea, explained plainly with examples, in a casual tone.
- The designer delegated non-huge design calls (2026-11-11): make the change you think is best, record it in the ledger as "Claude's call", and only ask about huge decisions (game identity, structure, scope).
- Stop at the review gate the task names. Don't start the next rebalance on your own.
- Run the fast loops (`npm run economy:smoke`, `npm run quality:smoke`) before the full `npm test`; never default to big stress matrices.
