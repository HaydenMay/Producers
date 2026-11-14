# Portrait studio readability plan

> **For agentic workers:** Use superpowers:executing-plans.

**Goal:** Make the office and its people more legible on a portrait phone, using the supplied Game Dev Story references as composition guidance.
**Architecture:** Compare portrait camera scales at four and six people; apply the strongest responsive framing while preserving the existing scene, monitor scale, lighting and desktop composition. Give touch and mouse users bounded drag-to-pan so a closer portrait view can reveal cropped room edges. Preserve camera zoom/angle controls and reset behavior.
**Tech Stack:** TypeScript, Three.js, Vite, browser-based visual validation.
**Spec:** User-approved direction in conversation: office fills more of the usable portrait screen, retain readability of several people, let exterior support rather than dominate, and keep enough camera height to distinguish desks.

- [x] Compare baseline and multiple closer portrait framings with both four- and six-person crews.
- [x] Implement responsive framing and bounded, accessible drag navigation; preserve scene controls and reset.
- [x] Verify phone and desktop viewports, scene and navigation interactions, controls, full tests and Pages build.
- [x] Capture before/after and crowded-office screenshots and review.
- Publish to the existing scene URL and verify the deployed path.
