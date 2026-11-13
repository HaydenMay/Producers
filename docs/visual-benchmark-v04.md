# Producers V0.4 — Three.js office benchmark, work in progress

## Status and limits

This is an **unverified visual benchmark**, not final art or a passed quality review. The supplied V0.3 phone contact sheet shows the original office and production flow. The available browser in this environment could not create a WebGL context, so no after-image, desktop/phone visual comparison, frame rate, GPU memory, or actual iPhone Safari measurement is claimed. Review the live scene on a WebGL-capable phone and desktop; compare workers, lighting, wall dressing, desk proportions, and drawer overlap. The 4/6/8 preview layouts are mathematically spaced but **not visually checked**. This prevents a credible verdict that the requested visual quality has been reached.

## Asset strategy

The V0.3 office was a single scene with one-off materials and boxes. This iteration uses a small source-controlled Three.js-native kit: four shared geometry types including a rounded box for desk, chair and character edges, and a colour-keyed material cache. It adds framed windows and trim, a bookcase with books, a clapperboard, a board/poster, desk keys, and a planted corner. The asset source is TypeScript, with no runtime downloads, external textures, model licenses or generated images. It remains deliberately simple; whether it actually reaches the reference's visual standard is unresolved.

- `src/game/office/kit.ts`: shared geometry/material factory and explicit disposal.
- `character.ts` and `../appearance.ts`: seated rig and stable ID-based visual palette.
- `workstation.ts`: reusable desk, monitor, chair and seated worker; origin is desktop centre on the floor, face local -Z.
- `room.ts`: room shell, trim, shelf, board, poster and plant; world units are metres, Y is up, floor is Y=0.
- `layout.ts`: 2/4/6/8 seat positions and room dimensions. This is a visual preview, not studio-upgrade logic.
- `view.ts`, `animation.ts`, `merge-static.ts`, and `../scene.ts`: camera/lighting, isolated idle motion, and runtime assembly/lifecycle.

To edit a desk, change `workstation.ts`; all seats reuse it. For a new hair shape, add an appearance variant in `appearance.ts` and its geometry in `character.ts`. For a bigger studio, adjust `officeLayout`, verify object boundaries in the layout tests, and then visually check the camera and furniture in each viewport. Asset regeneration is automatic on Vite build; no separate binary export step exists. A future Blender-authored model can be added via glTF if it improves quality; this prototype has no such model yet.

## Developer preview

Append `?debug=1&seats=2`, `4`, `6`, or `8` to the root URL to preview layout counts. Extra employees are display-only and do not alter simulation state or starting staffing. The opt-in readout reports the actual Three.js renderer's draw calls, triangles and pixel ratio, but those values are only available when WebGL renders. Check desktop and 390×844 portrait for scene visibility, controls, face readability, geometry intersections, and all four staff counts. Check real iPhone Safari separately.

## Research applied

- Three.js advises explicit disposal of geometry and material resources; `OfficeKit.dispose()` releases cached resources once, and the scene disconnects observers/listeners and disposes the renderer. [Three.js cleanup](https://threejs.org/manual/pages/cleanup.html)
- The Three.js optimization guide discusses merging to reduce draw calls, but merging can prevent independent movement. This prototype shares geometry/materials, batches static room geometry by material, and keeps animation joints separate; **mesh sharing alone does not batch draw calls**. [Three.js optimization](https://threejs.org/manual/pages/optimize-lots-of-objects.html)
- Three.js recommends glTF for authored models. No authored model has yet been demonstrated, so this implementation does not claim a complete Blender-to-glTF pipeline. [Three.js model loading](https://threejs.org/manual/pages/loading-3d-models.html)
- The existing Vite `/Producers/` base is retained for GitHub Pages project sites. [Vite static deploy](https://vite.dev/guide/static-deploy)

## Measured source-side complexity

A headless scene-graph inventory, without rendering, counted the following (triangles include repeated geometry per mesh; exclude shadow passes). Preview employees used IDs `preview-0` onward. These are **not** GPU timings or actual draw-call measurements.

| Preview seats | Meshes | Triangles | Geometry objects after batching | Materials |
| --- | ---: | ---: | ---: | ---: |
| 2 | 106 | 17,268 | 33 | 47 |
| 4 | 183 | 31,320 | 33 | 55 |
| 6 | 260 | 45,348 | 33 | 55 |
| 8 | 337 | 59,376 | 33 | 55 |

The static room batching reduces scene meshes from 131 to 106 in the two-seat inventory, while preserving the triangle count. The remaining separate meshes and shadow casters could produce too many draw calls on mobile, particularly at eight seats. Measure `renderer.info` and device frame time before optimizing; selectively batch static architecture/props while retaining independent character joints if the numbers warrant it. Rounded geometry increases triangle counts. The current desktop/mobile framing and all decorative details need a visual review and potential adjustment.

## Verdict

**Viability not yet established.** Three.js can render the previous two-person prototype on the designer's iPhone, but this iteration has not been seen by the implementer, assessed on device, or shown to meet the reference's art quality. Risks include draw-call growth, shadows, portrait framing, lifecycle on mobile Safari, and the absence of an authored asset/export pipeline. The appropriate next step is visual and performance review, followed by targeted iteration; do not treat this as production-ready art or design approval.
