# Character Design Lab Implementation Plan

**Goal:** Give the designer a real, browser-based Three.js lab to create, randomize, and compare recognizable modular 3D employees from the approved visual direction.

**Architecture:** A separate Vite entry uses a Blender-authored standing worker GLB, with individually switchable hair and facial-hair groups and per-instance material regions. A deterministic serializable trait object drives both the selected character and a generated lineup. The existing game and simulation remain unchanged.

**Tech stack:** Blender Python, glTF, Three.js, TypeScript, Vite, Vitest.

**Approved spec:** Chat agreement: central standing character; right-hand independent controls for hair style/color, skin, facial hair, shirt, and pants; Surprise Me; a lineup; close and game-distance views; stable retained identity; future-friendly pivots but no walking/sitting/typing animation. Character quality and small-scale readability take precedence over UI decoration. The reference is inspirational, not an exact-copy requirement.

## Constraints and review focus

- Do not mutate the prior checkout, gameplay rules, design ledger or deploy a website.
- Every trait can vary without changing other traits; no shared-material recoloring between lineup members.
- Preserve reproducible named Blender source/GLB, handle loading failures and resource disposal.
- Treat invalid or unavailable saved identity safely; persist and restore valid traits.
- Lineup and preview must resize on narrow portrait screens and work without hover; check reduced motion.
- Judge screenshots from real WebGL at close and approximately the existing game-camera size; no claim about real iPhone performance.

## Tasks

1. **Identity model and tests.** Add typed option catalogs, validated persistence, independent changes and seeded variation; verify repeatability, invalid inputs, and real combinations with Vitest.
2. **Modular character asset.** Generate a Blender source and GLB for a standing base with named head/arm/leg pivots, four or more hair silhouettes, several facial-hair shapes, optional glasses, and shared skin/clothing material slots. Check real imported nodes and independent clones in tests.
3. **Lab interface and scene.** Add a dedicated route/build command; create the focused preview, accessible trait controls, Surprise Me, stable identity, lineup and close/game views. Handle async errors, resizing, teardown and separate per-person materials.
4. **Visual iteration and validation.** Run actual Chrome WebGL, inspect close, game-distance and portrait screenshots, adjust character proportions or lighting where needed; run typecheck, targeted/full tests and builds, record exact limitations and reproduction instructions.
