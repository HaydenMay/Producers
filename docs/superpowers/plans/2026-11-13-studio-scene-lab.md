# Studio Scene Lab Implementation Plan

> **For agentic workers:** Use superpowers:executing-plans for implementation.

**Goal:** Publish a separate adjustable studio scene at `/Producers/scene/` using the character lab assets.
**Architecture:** A new Vite entry owns a Three.js office preview and a collapsible developer panel; existing character models and office assets are reused without affecting simulation. Three visual lighting presets, independent desk/person counts, monitor scale, camera controls, and reset make comparisons possible.
**Tech Stack:** TypeScript, Three.js, Vite, GitHub Pages.
**Spec:** User-approved conversation: visual studio reference, no game UI, four desks/people initially, animated typing and walking; a collapsible scene-control panel.

## Global Constraints
- Preserve the character lab and existing studio paths and gameplay state.
- Provide day, sunset, night; 0–6 people and 1–6 desks; monitor size, camera angle/zoom; reset.
- Use original existing assets and support a phone-sized viewport.

## Tasks
- [x] Implement the scene, including reusable lab characters and animated desk/walk poses, and controls.
- [x] Add the Vite entry to Pages build and validate all routes and asset paths.
- [x] Check interactions, rendering and mobile layout; run typecheck, full tests and Pages build.
- [ ] Publish to the existing GitHub Pages workflow and verify the deployed path.
