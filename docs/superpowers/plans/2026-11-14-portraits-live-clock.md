# Portraits and live studio clock

**Goal:** Give employees and Stars matching, inspectable portraits and advance time automatically outside popups.

**Architecture:** A preview-only clock dispatches existing wait decisions with a single timer and pauses for open sheets, required decisions and hidden browsers. A shared portrait renderer uses the existing character kit and stable identity seeds, caching thumbnails for person cards and detail sheets.

**Constraints:** Preserve the legacy studio route, deterministic core, local saves, current scene and appearance rules. No offline catch-up; no fabricated stats. Keep all popups paused and resume only after they close.

## Tasks

1. Test and implement a preview clock for idle, productions and contracts, including popup/visibility pauses, decisions, releases, reset and save callbacks. Add a date progress indicator.
2. Render stable sage-background portraits for staff and Stars with the character kit; reuse staff seeds from the studio and avoid per-card WebGL contexts.
3. Add accessible person details from People and casting, exposing actual staff stats or Star skills/history and a valid cast action.
4. Exercise phone-sized and desktop flows, save/reload, visibility and reduced motion; run repository checks and publish through the existing Pages workflow.
