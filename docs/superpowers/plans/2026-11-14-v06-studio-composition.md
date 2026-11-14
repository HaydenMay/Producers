# V0.6 Studio Composition Implementation Plan

> **For agentic workers:** Use superpowers:executing-plans.

**Goal:** Give the existing studio a lower, more intimate camera and quieter, cohesive exterior while keeping its management-game readability.
**Architecture:** Compare camera elevation and framing variations against an unchanged baseline at the same viewport; tune the selected scene camera. Rework the existing batched surroundings geometry with rounded trees and a small number of varied, subdued buildings. Preserve scene controls, scene animations, time-of-day lighting, and existing game systems.
**Tech Stack:** TypeScript, Three.js, Vite, Playwright, GitHub Pages.
**Spec:** User's Producers V0.6 camera, exterior, and composition brief.

## Tasks
- [x] Capture the baseline and at least four comparable camera options; document their tradeoffs and pick one.
- [x] Replace the exterior palms and repeated blocks with a restrained, varied environment; iterate visually in day and night.
- [x] Check phone and desktop layouts, scene controls and changes in time of day; verify typecheck, tests and build.
- [x] Record screenshots, candid assessment and remaining limitations.
- Publish the reviewed result through the existing Pages workflow and verify the deployed path.
