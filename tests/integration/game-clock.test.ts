import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { PrototypeGame } from '../../src/game/game';
import { ProductionClock } from '../../src/game/clock';

describe('production clock', () => {
  beforeEach(() => vi.useFakeTimers());
  afterEach(() => vi.useRealTimers());
  it('advances once per interval and honors pause, speed, and reset', () => {
    const game = new PrototypeGame(); const clock = new ProductionClock(game, () => {});
    clock.startMovie(); vi.advanceTimersByTime(1300); expect(game.state.week).toBe(1);
    clock.pause(); vi.advanceTimersByTime(10000); expect(game.state.week).toBe(1);
    clock.setSpeed(4); clock.play(); vi.advanceTimersByTime(325); expect(game.state.week).toBe(2);
    clock.reset(); vi.advanceTimersByTime(10000); expect(game.state.week).toBe(0);
    clock.dispose();
  });
  it('stops at decisions, resumes only after a choice, and stops at release', () => {
    const game = new PrototypeGame(); const clock = new ProductionClock(game, () => {});
    clock.startMovie(); clock.setSpeed(4); vi.advanceTimersByTime(30000);
    expect(game.choices.phase).toBe('casting'); const castingWeek = game.state.week;
    vi.advanceTimersByTime(30000); expect(game.state.week).toBe(castingWeek);
    clock.decide(game.choices.options[0]); vi.advanceTimersByTime(30000);
    expect(game.choices.phase).toBe('distribution'); const distWeek=game.state.week;
    vi.advanceTimersByTime(30000); expect(game.state.week).toBe(distWeek);
    clock.decide(game.choices.options[0]); vi.advanceTimersByTime(30000);
    expect(game.state.releases).toHaveLength(1); const releaseWeek=game.state.week;
    vi.advanceTimersByTime(30000); expect(game.state.week).toBe(releaseWeek);
    clock.dispose();
  });
  it('honors a manual pause before a decision and suspends without catch-up', () => {
    const game = new PrototypeGame(); const clock = new ProductionClock(game, () => {});
    clock.startMovie(); clock.pause();
    while (game.choices.phase === 'production') clock.step();
    clock.decide(game.choices.options[0]); vi.advanceTimersByTime(10000);
    expect(game.state.week).toBe(12);
    clock.play(); clock.suspend(); vi.advanceTimersByTime(10000);
    expect(game.state.week).toBe(12); clock.dispose();
  });
  it('does not resume a decision after suspension and reset invalidates pending callbacks', () => {
    const game = new PrototypeGame(); const clock = new ProductionClock(game, () => {});
    clock.startMovie(); clock.setSpeed(4); vi.advanceTimersByTime(4000);
    expect(game.choices.phase).toBe('casting'); clock.suspend();
    clock.decide(game.choices.options[0]); vi.advanceTimersByTime(10000);
    expect(game.state.week).toBe(12);
    clock.play(); vi.advanceTimersByTime(100); clock.reset(); clock.startMovie();
    vi.advanceTimersByTime(324); expect(game.state.week).toBe(0);
    vi.advanceTimersByTime(1); expect(game.state.week).toBe(1); clock.dispose();
  });
  it('emits only actual meter deltas and does not use timers to advance when paused', () => {
    const game = new PrototypeGame(); const changes: number[] = [];
    const clock = new ProductionClock(game, cue => { if (cue) changes.push(cue.amount); });
    clock.startMovie(); vi.advanceTimersByTime(3900);
    expect(changes).toHaveLength(1); expect(changes[0]).toBeGreaterThan(0);
    clock.pause(); vi.advanceTimersByTime(10000); expect(game.state.week).toBe(3); clock.dispose();
  });
});
