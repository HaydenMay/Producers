# Staff Contributions Implementation Plan

**Goal:** Show authentic, skill-based production work throughout each week without changing the balanced weekly simulation.

**Architecture:** Observe the existing weekly staff-work calculation on a cloned state, preserving all pre-production weekly effects and random streams. Schedule those exact per-person deltas across the visible clock; the ordinary authoritative weekly transition still commits the work once. Show a restrained floating contribution near the corresponding employee and update the project bar from the displayed pending points. Clear and rebuild the presentation whenever the authoritative state changes.

**Constraints:** Preserve PROD-023 (every available worker works on every meter), PROD-219 (raw points), deterministic replays, weekly final values, pauses, and all existing balance settings. Never add extra points or draw new simulation randomness. Handle assignments, no active project, milestones, save/reload, and more employees than visible characters.

1. Write failing tests for exact observed per-person deltas, including employee exclusions, and equivalence with the unchanged weekly simulation.
2. Add an optional observer to the existing work path, then derive a deterministic cloned-state weekly contribution schedule and test progressive totals, pause/rebuild behavior, and 2/4/6/8 staff parity.
3. Present scheduled contributions in the project bar and unobtrusive character-positioned labels; pause with the clock and honor reduced motion.
4. Run targeted and full tests, typecheck, quality/economy smoke checks, paired baseline comparisons, build, and visual phone-size checks. Update the ledger and documentation to state the weekly commit boundary and unchanged balancing.
