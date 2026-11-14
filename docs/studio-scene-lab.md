# Studio scene lab

The scene experiment is served at `/Producers/scene/`; the character lab remains at `/Producers/` and the previous gameplay prototype at `/Producers/studio/`. Locally, run `npm run dev:scene`.

The collapsible scene controls compare day, sunset, and night lighting, desk and people counts, monitor size, camera zoom and angle. Reset restores the four-desk, four-person daytime setup. At least one visible person walks when the count is nonzero; others sit at available desks, with any remaining people walking. Movements are simple preview loops, not navigation or production gameplay. The seated legs are separate bent pieces sharing each character's pants and shoe materials, matching the character lab's current desk experiment.

The room reuses the existing source-generated office, while the people use the character lab's GLB and appearance system. A batched, restrained neighborhood of sidewalks, a street, rounded trees and three distinct nearby buildings grounds the studio; the neighboring windows and street lights respond to the visual time-of-day presets. Window colors and lighting are visual presets, not a game clock. Desktop Chrome was checked at a 390 × 844 emulated phone viewport; an actual phone and mobile performance have not been measured.

The V0.6 camera and exterior comparisons, final screenshots and limitations are documented in [the composition study](visual-reviews/v06/README.md).

Portrait view now uses a closer framing for readability, with bounded drag-to-pan to reach the cropped edges. The camera zoom control remains relative to this view; Reset returns the framing and all scene settings to their defaults. Keyboard users can focus the scene, use the arrow keys to pan and Home to reset the view. Landscape framing is unchanged. [Before/after and comparison images](visual-reviews/portrait-readability/README.md).
