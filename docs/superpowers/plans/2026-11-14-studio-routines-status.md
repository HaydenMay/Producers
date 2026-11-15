# Studio routines and project status

**Goal:** Use four-second weeks, let crew walk around and return to their desks, and show live project information beside Menu.

**Architecture:** Keep the existing simulation and preview-only clock. A pure, deterministic crew routine defines each character's seated, standing, walking, turning and returning states; the scene applies it to one character per employee. A small project-status presenter reads actual simulation state and updates a compact, accessible button opening Projects.

**Constraints:** Keep popups and backgrounding paused, preserve all routes and saved careers, use real project point totals, respect reduced motion, avoid actor teleportation and desk/chair clipping, and keep the 3D scene usable on phones.

## Tasks

1. Test the four-second default and keep clock pause and resume behavior unchanged.
2. Test continuous movement and staggered desk occupancy in a pure routine; integrate it with the existing scene without duplicate actors. The designer chose a walk around the room and back rather than adding a doorway.
3. Test the project bar for production, required decisions, contracts and idle; wire it to Projects and update it on real game changes.
4. Visually inspect a full walk-out/return/sit cycle and the mobile/desktop layouts, run checks, and report remaining code debt honestly.
