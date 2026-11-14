import type { Decision, PlanDecision } from '../core/types';
import { PrototypeGame } from '../game/game';

/** Preview-only clock. The simulation still owns every weekly transition. */
export class StudioClock {
  private timer: ReturnType<typeof setTimeout> | undefined;
  private remaining: number;
  private deadline = 0;
  private enabled = false;
  private started = false;
  private popup = false;
  private visible = true;
  private disposed = false;
  constructor(readonly game: PrototypeGame, private readonly changed: (_cue?: undefined, error?: Error) => void, readonly intervalMs = 8000) {
    this.remaining = intervalMs;
  }
  get playing() { return this.timer !== undefined; }
  get progress() {
    const remaining = this.timer === undefined ? this.remaining : Math.max(0, this.deadline - performance.now());
    return Math.max(0, Math.min(1, 1 - remaining / this.intervalMs));
  }
  get waitingForDecision() { return ['pitch','casting','marketing','distribution','career_end'].includes(this.game.choices.phase); }
  private sync() {
    const canRun = this.enabled && !this.disposed && this.visible && !this.popup && this.game.choices.options.some(d => d.type === 'wait');
    if (!canRun && this.timer !== undefined) {
      clearTimeout(this.timer); this.timer = undefined;
      this.remaining = Math.max(0, this.deadline - performance.now());
    }
    if (canRun && this.timer === undefined) {
      this.deadline = performance.now() + this.remaining;
      this.timer = setTimeout(() => this.tick(), this.remaining);
    }
  }
  private fail(error: unknown) {
    this.enabled = false; this.sync();
    this.changed(undefined, error instanceof Error ? error : new Error(String(error)));
  }
  private tick() {
    this.timer = undefined; this.remaining = this.intervalMs;
    try { this.game.advance(); this.changed(); this.sync(); } catch (error) { this.fail(error); }
  }
  start() { if (!this.disposed) { this.started = true; this.enabled = true; this.sync(); } }
  setPopupOpen(open: boolean) { this.popup = open; this.sync(); }
  setVisible(visible: boolean) { this.visible = visible; this.sync(); }
  decide(decision: Decision) {
    try { this.game.decide(decision); this.changed(); this.sync(); } catch (error) { this.fail(error); }
  }
  startMovie(plan?: PlanDecision) {
    try { if (plan) this.game.decide(plan); else this.game.startMovie(); this.changed(); this.sync(); } catch (error) { this.fail(error); }
  }
  reset() { if(this.timer!==undefined){clearTimeout(this.timer);this.timer=undefined}this.game.reset();this.remaining=this.intervalMs;this.enabled=this.started;this.changed();this.sync(); }
  dispose() { this.disposed = true; this.sync(); }
}
