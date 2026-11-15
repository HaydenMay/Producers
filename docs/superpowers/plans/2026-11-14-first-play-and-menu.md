# First Play and Main Menu Implementation Plan

**Goal:** Provide a safe main menu and optional first-movie guidance, game-native genre/theme choice screens, and 1×/2×/4× testing speeds.

**Architecture:** The existing deterministic weekly simulation and replay save remain authoritative. A preview-only clock scales its remaining time without changing progress; the save gains backward-compatible UI preferences. A main-menu state pauses the clock and requires explicit confirmation before replacing an existing save. In-game selection screens use real unlocked plans and preserve focus, accessible controls, and the selected compatible pair. Brief optional guide copy appears on real project, casting, distribution, and results screens and completes after the first film.

**Constraints:** No simulation or balance changes; no offline catch-up. Menus, guides, background tabs and pending decisions pause time where applicable. Preserve existing saves, interrupted weeks and all game/scene/character routes. Do not overwrite a damaged save without explicit reset. The new main menu is the only reset entry. Genre and theme choices must work with mouse, touch, and keyboard independent of native select UI. Save guide completion across careers.

1. Add failing clock tests for 1×/2×/4×, midweek switching, paused switching, and save compatibility; implement rate scaling with exact progress preservation.
2. Add failing menu tests for fresh and existing saves, idle pause, continue, reset confirmation/cancel, corrupt saves and returning to menu; implement the main menu without auto-overwriting slots.
3. Replace genre/theme selects with accessible in-game choice screens; test compatible selections, persistence, focus/back navigation and ordinary production decisions.
4. Add an optional, skippable first-film guide on real screens and concise working/expense feedback; test milestones, pause behavior, completion and returner preference.
5. Run targeted and full tests, typecheck, ledger check, Pages build and phone/desktop browser checks including reload, screen layouts and accelerated play; review and deploy.
