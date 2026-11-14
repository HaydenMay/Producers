# Studio scene lab

The scene experiment is served at `/Producers/scene/`; the character lab remains at `/Producers/` and the previous gameplay prototype at `/Producers/studio/`. Locally, run `npm run dev:scene`.

The collapsible scene controls compare day, sunset, and night lighting, desk and people counts, monitor size, camera zoom and angle. Reset restores the four-desk, four-person daytime setup. At least one visible person walks when the count is nonzero; others sit at available desks, with any remaining people walking. Movements are simple preview loops, not navigation or production gameplay. The seated legs are separate bent pieces sharing each character's pants and shoe materials, matching the character lab's current desk experiment.

The room reuses the existing source-generated office, while the people use the character lab's GLB and appearance system. The scene shows the studio on its own, with no exterior neighborhood; the existing illustrated view through the office window remains. Window colors and lighting are visual presets, not a game clock. Desktop Chrome was checked at a 390 × 844 emulated phone viewport; an actual phone and mobile performance have not been measured.

Earlier V0.6 camera and exterior comparisons are retained in [the composition study](visual-reviews/v06/README.md) as historical reference; the surrounding neighborhood has since been removed.

Portrait view uses a closer framing for readability, with bounded drag-to-pan to reach the cropped edges. The camera zoom control remains relative to this view; Reset returns the framing and all scene settings to their defaults. Keyboard users can focus the scene, use the arrow keys to pan and Home to reset the view. Landscape also opens slightly closer to keep the studio prominent. [Before/after and comparison images](visual-reviews/portrait-readability/README.md).

[Studio-only portrait preview](visual-reviews/studio-scene/studio-only-phone.png), captured in a desktop browser at a phone-sized viewport.
