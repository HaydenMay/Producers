import { PrototypeGame } from './game';
import type { Decision, Meter, PlanDecision } from '../core/types';

export type Speed = 1 | 2 | 4;
export type PointCue = { meter: Meter; amount: number };
const meters: Meter[] = ['plot', 'writing', 'filming', 'editing'];

/** One timeout at a time; core decisions remain the sole source of progress. */
export class ProductionClock {
  playing = false;
  speed: Speed = 1;
  private timer: ReturnType<typeof setTimeout> | undefined;
  private resumeAfterChoice = false;
  private releaseCount = 0;
  private cueIndex = 0;
  constructor(readonly game: PrototypeGame, private readonly changed: (cue?: PointCue, error?: Error) => void) {}
  private clear() { if (this.timer !== undefined) clearTimeout(this.timer); this.timer = undefined; }
  private schedule() {
    this.clear();
    if (this.playing && this.game.choices.phase === 'production') {
      this.timer = setTimeout(() => { this.timer = undefined; this.tick(); }, 1300 / this.speed);
    }
  }
  private fail(error: unknown) {
    this.clear(); this.playing = false; this.resumeAfterChoice = false;
    this.changed(undefined, error instanceof Error ? error : new Error(String(error)));
  }
  private tick() {
    if (!this.playing || this.game.choices.phase !== 'production') return;
    this.advance();
  }
  private advance() {
    try {
      if (this.game.choices.phase !== 'production') return;
      const before = this.game.state.project;
      const points = before ? { ...before.meterPoints } : null;
      this.game.advance();
      const after = this.game.state.project;
      let cue: PointCue | undefined;
      if (points && after && this.game.state.week % 3 === 0) {
        const changed = meters.map(meter => ({ meter, amount: after.meterPoints[meter] - points[meter] })).filter(x => x.amount > .05);
        if (changed.length) cue = changed[this.cueIndex++ % changed.length];
      }
      if (this.game.state.releases.length > this.releaseCount) {
        this.releaseCount = this.game.state.releases.length; this.playing = false; this.resumeAfterChoice = false; this.clear();
      } else if (this.game.choices.phase !== 'production') {
        this.resumeAfterChoice = this.playing; this.playing = false; this.clear();
      }
      this.changed(cue); this.schedule();
    } catch (e) { this.fail(e); }
  }
  startMovie(plan?: PlanDecision) {
    try {
      this.clear(); this.resumeAfterChoice = false; this.releaseCount = this.game.state.releases.length;
      if (plan) this.game.decide(plan); else this.game.startMovie();
      this.playing = this.game.choices.phase === 'production';
      this.resumeAfterChoice = !this.playing && ['pitch','casting','distribution','marketing'].includes(this.game.choices.phase);
      this.changed(); this.schedule();
    } catch (e) { this.fail(e); }
  }
  play() { if (this.game.choices.phase !== 'production') return; this.playing = true; this.changed(); this.schedule(); }
  pause() { this.playing = false; this.resumeAfterChoice = false; this.clear(); this.changed(); }
  suspend() { this.pause(); }
  step() { if (!this.playing && this.game.choices.phase === 'production') this.advance(); }
  setSpeed(speed: Speed) { this.speed = speed; this.changed(); this.schedule(); }
  decide(decision: Decision) {
    try {
      const resume = this.resumeAfterChoice; this.resumeAfterChoice = false;
      this.game.decide(decision);
      this.playing = resume && this.game.choices.phase === 'production';
      if (resume && !this.playing && this.game.state.project) this.resumeAfterChoice = true;
      this.changed(); this.schedule();
    } catch (e) { this.fail(e); }
  }
  reset() { this.clear(); this.playing = false; this.resumeAfterChoice = false; this.releaseCount = 0; this.game.reset(); this.changed(); }
  dispose() { this.clear(); this.playing = false; this.resumeAfterChoice = false; }
}
