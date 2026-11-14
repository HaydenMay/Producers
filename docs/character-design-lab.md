# Producers character design lab

This is an isolated **visual experiment**, not a decision to use Three.js for the game and not a player-facing character editor. The goal is to let the designer judge whether a small modular 3D cast remains recognizable at the game's camera distance. The supplied character concept is an art-direction reference, not an exact model sheet.

## Try the lab

The GitHub Pages build opens the lab at `https://haydenmay.github.io/Producers/`. The earlier studio prototype remains at `https://haydenmay.github.io/Producers/studio/`. `npm run build:pages` builds and checks both entries for deployment.

From the repository root, with Node installed:

```powershell
npm ci
npm run dev:characters
```

Open the Local URL printed by Vite (usually `http://localhost:5173/`; it may choose another port). The separate game remains available through its existing `npm run dev:game` command. `npm run build:characters` and `npm run preview:characters` build and preview the lab without changing the game build.

Change any one trait on the right, or choose **Surprise me**. The example buttons recreate Jeremy (dark hair, beard, red shirt, light skin) and Justin (dark hair, no facial hair, blue shirt, tan skin). **Saved looks** lets you name and recall up to 12 looks in this browser. The latest look also restores on reload. **Copy link to this look** encodes the selected traits in a URL; a localhost link is useful on that same computer, and works on another device only if the lab is hosted at a reachable address. Browser storage may be cleared or unavailable in private browsing.

**Lineup** shows the current person first, followed by saved looks (up to three), then varied generated people to fill four places. **Shuffle generated** varies the generated people; saved people stay fixed. **Game distance** uses an approximate equivalent of the existing portrait office camera at a 390 × 844 CSS-pixel viewport, not a promise of a final game's camera or a substitute for checking an actual phone. Use the turn buttons to inspect the side of the model. All people are standing and still; walking, sitting and typing are not implemented.

## Visual review

- [Single character, desktop](visual-reviews/character-lab/final-single-desktop.png)
- [Four-person lineup, desktop](visual-reviews/character-lab/final-lineup-desktop.png)
- [Lineup at approximate game distance](visual-reviews/character-lab/final-game-desktop.png)
- [Portrait viewport](visual-reviews/character-lab/final-single-phone.png) and [portrait lineup](visual-reviews/character-lab/final-lineup-phone.png)
- [Blender preview](visual-reviews/character-lab/blender-preview.png)

These are real Chrome WebGL screenshots on a Windows desktop with an NVIDIA RTX 4060; the portrait viewport is emulated, not a real iPhone. The characters and backgrounds are rendered in Three.js. The prototype demonstrates modular assembly and recognizable differences, but whether the art is appealing enough is for the designer to judge; it does not establish a final engine choice, walking rig, or mobile performance.

## Asset structure

`assets/blender/character-lab.blend` contains the editable original standing model. `src/character-lab/assets/worker-lab.glb` is the exported runtime asset. The single source model includes `worker_root`, `head_pivot`, `arm_l_pivot`, `arm_r_pivot`, `leg_l_pivot`, and `leg_r_pivot`. It contains four alternate hair groups (`hair_short`, `hair_swept`, `hair_curls`, `hair_long`), a bald option by hiding them all, three facial-hair groups, and optional glasses. Named `skin`, `hair`, `shirt`, and `pants` materials are cloned per person; source geometry and the non-changing materials are shared. Model origin is the floor, exported glTF is right-handed Y-up, and the front faces local +Z.

The static geometry, generated assets and scripts are original to this lab; no third-party art or textures are included. The Blender source opens with one look visible for convenience; other parts remain editable and are exported too.

To re-export an **edited** source from the repository root:

```powershell
& 'C:\Program Files\Blender Foundation\Blender 5.2\blender.exe' --background assets/blender/character-lab.blend --python tools/blender/export-character-lab.py
```

Use the installed Blender path on another machine. `tools/blender/generate-character-lab.py` regenerates the model from scratch and **overwrites the source**, so do not run it over manual edits. The export script temporarily unhides all variants without saving that visibility change. Blender 5.2.0 was used here. The renderer handles model-load failures with a retry, and disposes owned per-person materials separately from shared source geometry and materials.

## Validation and current limits

The lab's identity and GLB tests cover independent edits, seeded repeatability, safe parsing of saved data, diversity in lineups, independent character colors and named pivots. Chrome was exercised through manual trait changes, named saves, reload, copy/reopen link, lineup, game-distance view, portrait reduced-motion context, and a deliberately failed model load. Production build preview loaded the GLB with HTTP 200. The Vite build reports a large JavaScript chunk (about 633 kB uncompressed); no network-size, FPS, memory, thermal or actual iPhone measurement is claimed. The next decision is the designer's visual review of the lab at close and game distance, followed by real-phone testing if the character direction is promising.

The full suite passed 231 tests and both the lab and game builds passed. On this Windows checkout, the existing Gate 2.6 CSV fixture had to be temporarily converted to LF for its byte-comparison test, then restored; no fixture or simulation changes are part of the lab. WebGL context loss/restoration was also reproduced in Chrome and the preview redrew afterward. An invalid GLB produced a retry message and released the renderer.
