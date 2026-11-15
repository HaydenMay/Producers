# People and Studio Growth Implementation Plan

**Goal:** Let players hire and train staff and purchase the existing 4→6→8 capacity upgrades, with matching employees and workstations in an expanding studio.

**Architecture:** Route all purchases through existing legal simulation decisions and prices; present disabled reasons and actual staff details without inventing a candidate system. Expand the existing Three.js studio by capacity, reposition stations and camera, and synchronize scene looks with stable employee portraits. Keep saves, clocks, and the existing harness untouched.

**Constraints:** Preserve the current default studio, all routes, mobile readability, locked staffing/upgrades rules and existing balance values. New hires cannot be chosen before they are generated. Hiring is available between productions; training is offered between productions as agreed. Upgrades require the harness's cash and prestige and communicate higher expectations. Up to eight staff are visible with one matching desk each.

1. Write UI tests for valid and unavailable hiring, training, upgrades, actual costs and save/reload; implement through `PrototypeGame` decisions and refresh views and scene.
2. Write geometry and animation tests for all eight seats, increasing room dimensions, bounded walking routes and stable portrait/scene identity; implement capacity-aware room, framing, actors and props.
3. Inspect 4/6/8-person rooms and mobile menus in a real browser; correct clipping and accessibility issues.
4. Run targeted and full tests, typecheck, ledger check, Pages build, and appropriate harness smoke tests; document tested limitations and deploy after review.
