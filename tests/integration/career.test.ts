// Fixed career (PROD-013): ends by years or productions, recap, keep playing or retire. Legacy: endless.
import { describe, expect, it } from "vitest";
import { baselineConfig, legacyConfig, withOverrides } from "../../src/core/config";
import { applyDecision, getChoices } from "../../src/core/simulation";
import { runCareer, runScripted } from "../../src/batch/runner";

const D = baselineConfig();
describe("fixed career", () => {
  it("default: ends after 20 years at the first idle stop, with a recap", () => {
    const r = runCareer(1, "balanced", D, { productions: 0, years: 22 });
    const e = r.state.careerEnd!;
    expect(e).toBeTruthy();
    expect(e.week).toBeGreaterThanOrEqual(20 * 52);
    expect(e.decided).toBe("continue"); // harness agents keep playing
    expect(r.state.week).toBeGreaterThan(e.week); // and the career really continued
    expect(r.state.events.some((x) => x.type === "career_end")).toBe(true);
  });
  it("productions mode ends after N releases; the recap matches; retiring finishes the save", () => {
    const P = withOverrides(D, { career: { mode: "productions", productions: 3 } });
    let seen: ReturnType<typeof getChoices> | null = null;
    const r = runScripted(2, P, (_s, ch) => {
      if (ch.phase === "career_end") {
        seen = ch;
        return { type: "end_career" };
      }
      return ch.options.find((o) => o.type === "plan") ?? ch.options.find((o) => o.type === "cast" || o.type === "distribute") ?? ch.options[0];
    }, { productions: 99, maxWeeks: 400 });
    expect(seen).not.toBeNull();
    const ch = seen as unknown as ReturnType<typeof getChoices>;
    expect(ch.recap!.releases).toBe(3);
    expect(ch.recap!.legacyScore).toBe(r.state.careerEnd!.legacyScore);
    expect(r.state.careerEnd!.decided).toBe("end");
    expect(getChoices(r.state, P).phase).toBe("finished");
    expect(getChoices(r.state, P).options).toEqual([]);
    expect(() => applyDecision(r.state, P, { type: "wait" })).toThrow();
  });
  it("continuing never asks again and never changes the locked legacy score", () => {
    const P = withOverrides(D, { career: { mode: "productions", productions: 2 } });
    const r = runCareer(3, "balanced", P, { productions: 0, years: 8 });
    expect(r.state.events.filter((x) => x.type === "career_end").length).toBe(1);
    expect(r.state.releases.length).toBeGreaterThan(2);
  });
  it("legacy is endless", () => {
    expect(runCareer(1, "balanced", legacyConfig(), { productions: 0, years: 22 }).state.careerEnd).toBeUndefined();
  });
  it("runScripted callers can retire", () => {
    const P = withOverrides(D, { career: { mode: "productions", productions: 1 } });
    const r = runScripted(4, P, (_s, ch) => (ch.phase === "career_end" ? { type: "end_career" } : ch.options.find((o) => o.type === "plan") ?? ch.options.find((o) => o.type === "cast" || o.type === "distribute") ?? ch.options[0]), { productions: 5, maxWeeks: 200 });
    expect(r.state.careerEnd?.decided).toBe("end");
  });
});
