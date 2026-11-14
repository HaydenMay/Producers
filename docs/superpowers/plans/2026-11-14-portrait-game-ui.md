# Portrait game UI implementation plan

> **For agentic workers:** Use superpowers:executing-plans.

**Goal:** Add a phone-first game preview with top information and a collapsible bottom menu over the selected studio view, connected to the existing movie prototype.
**Architecture:** A separate Vite entry at `/Producers/game/` reuses the scene-lab renderer and the existing PrototypeGame/ProductionClock; it reads state and applies only offered decisions. The current character and scene labs and older studio remain available. The preview explicitly identifies that progress is not yet saved.
**Tech Stack:** Three.js, TypeScript, Vite, existing simulation, browser-based verification.
**Spec:** Conversation-approved compact information at top, pop-up menu from bottom; user-approved studio camera. Movie flow uses existing decisions, staff values are real; unsupported areas are clearly marked.

- [x] Add a separate entry and Pages build check without changing existing routes.
- [x] Implement the top status, bottom sheet, real staff/status, and available movie actions; handle casting, distribution and release through the existing clock.
- [x] Keep scene character count and stable appearance consistent with the prototype's staff; label unsaved progress.
- [x] Verify UI/scene on portrait and desktop, including menu, reset, decisions, playback and full production; run tests, typecheck and Pages build.
- Publish and verify the live preview.
