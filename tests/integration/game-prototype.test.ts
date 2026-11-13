import { describe, expect, it } from "vitest";
import { PrototypeGame } from "../../src/game/game";

describe("visual prototype integration", () => {
  it("runs a deterministic movie through real mandatory choices and release", () => {
    const game = new PrototypeGame();
    expect(game.state.staff).toHaveLength(2);
    game.startMovie();
    const phases = new Set<string>();
    for (let i = 0; i < 100 && game.state.releases.length === 0; i++) {
      const choices = game.choices;
      phases.add(choices.phase);
      if (choices.phase === "production") game.advance();
      else {
        expect(["casting", "distribution", "pitch", "marketing"]).toContain(choices.phase);
        const decision = choices.options[0];
        expect(decision).toBeDefined();
        game.decide(decision);
      }
    }
    expect(phases.has("casting")).toBe(true);
    expect(phases.has("distribution")).toBe(true);
    expect(game.state.releases).toHaveLength(1);
    expect(game.state.releases[0].audience).toBeGreaterThanOrEqual(0);
    expect(game.state.releases[0].critic).toBeLessThanOrEqual(10);
    expect(game.state.counters.productionsCompleted).toBe(1);
    const again = new PrototypeGame();
    expect(again.state.staff).toEqual(new PrototypeGame().state.staff);
  });
});
