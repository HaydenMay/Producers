# Studio scene lab

The scene experiment is served at `/Producers/scene/`; the character lab remains at `/Producers/` and the previous gameplay prototype at `/Producers/studio/`. Locally, run `npm run dev:scene`.

The collapsible scene controls compare day, sunset, and night lighting, desk and people counts, monitor size, camera zoom and angle. Reset restores the four-desk, four-person daytime setup. At least one visible person walks when the count is nonzero; others sit at available desks, with any remaining people walking. Movements are simple preview loops, not navigation or production gameplay. The seated legs are separate bent pieces sharing each character's pants and shoe materials, matching the character lab's current desk experiment.

The room reuses the existing source-generated office, while the people use the character lab's GLB and appearance system. Window colors and room lighting are visual presets, not a game clock. Desktop Chrome was checked at a 390 × 844 emulated phone viewport; an actual phone and mobile performance have not been measured.
