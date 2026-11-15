import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { PrototypeGame } from '../../src/game/game';
import { StudioClock } from '../../src/game-preview/studio-clock';

describe('automatic studio clock',()=>{
 beforeEach(()=>vi.useFakeTimers());afterEach(()=>vi.useRealTimers());
 it('advances one week every four seconds by default',()=>{
  const game=new PrototypeGame(),clock=new StudioClock(game,()=>{});clock.start();
  vi.advanceTimersByTime(3999);expect(game.state.week).toBe(0);vi.advanceTimersByTime(1);expect(game.state.week).toBe(1);clock.dispose();
 });
 it.each([[2,2000],[4,1000]])('runs a full week at %i× in %i milliseconds',(speed,duration)=>{
  const game=new PrototypeGame(),clock=new StudioClock(game,()=>{});clock.setSpeed(speed);clock.start();
  vi.advanceTimersByTime(duration-1);expect(game.state.week).toBe(0);vi.advanceTimersByTime(1);expect(game.state.week).toBe(1);clock.dispose();
 });
 it('preserves partial progress when speed changes while running or paused',()=>{
  const game=new PrototypeGame(),clock=new StudioClock(game,()=>{});clock.start();vi.advanceTimersByTime(1000);expect(clock.progress).toBeCloseTo(.25);
  clock.setSpeed(2);expect(clock.progress).toBeCloseTo(.25);vi.advanceTimersByTime(500);expect(clock.progress).toBeCloseTo(.5);
  clock.setPopupOpen(true);clock.setSpeed(4);vi.advanceTimersByTime(10000);expect(clock.progress).toBeCloseTo(.5);expect(game.state.week).toBe(0);
  clock.setPopupOpen(false);vi.advanceTimersByTime(499);expect(game.state.week).toBe(0);vi.advanceTimersByTime(1);expect(game.state.week).toBe(1);clock.dispose();
 });
 it('resumes a saved partial week without catching up while closed',()=>{
  const game=new PrototypeGame(),clock=new StudioClock(game,()=>{},4000,.5);clock.start();
  vi.advanceTimersByTime(1999);expect(game.state.week).toBe(0);vi.advanceTimersByTime(1);expect(game.state.week).toBe(1);clock.dispose();
 });
 it('gives a newly started movie a full first production week after idle time',()=>{
  const game=new PrototypeGame(),clock=new StudioClock(game,()=>{},4000);clock.start();vi.advanceTimersByTime(3500);
  clock.setPopupOpen(true);clock.startMovie();expect(clock.progress).toBe(0);clock.setPopupOpen(false);
  vi.advanceTimersByTime(3999);expect(game.state.week).toBe(0);vi.advanceTimersByTime(1);expect(game.state.week).toBe(1);clock.dispose();
 });
 it('advances in the idle studio and preserves the remaining time while a popup is open',()=>{
  const game=new PrototypeGame(),clock=new StudioClock(game,()=>{},1000);clock.start();
  vi.advanceTimersByTime(600);clock.setPopupOpen(true);vi.advanceTimersByTime(9000);expect(game.state.week).toBe(0);
  clock.setPopupOpen(false);vi.advanceTimersByTime(399);expect(game.state.week).toBe(0);vi.advanceTimersByTime(1);expect(game.state.week).toBe(1);clock.dispose();
 });
 it('runs contracts and production, and waits for required decisions',()=>{
  const game=new PrototypeGame(),clock=new StudioClock(game,()=>{},1000);clock.start();clock.setPopupOpen(true);
  clock.decide(game.choices.options.find(x=>x.type==='contract')!);vi.advanceTimersByTime(5000);expect(game.state.week).toBe(0);
  clock.setPopupOpen(false);vi.advanceTimersByTime(6000);expect(game.state.contract).toBeFalsy();
  clock.setPopupOpen(true);clock.startMovie();clock.setPopupOpen(false);vi.advanceTimersByTime(30000);
  expect(game.choices.phase).toBe('casting');const week=game.state.week;vi.advanceTimersByTime(30000);expect(game.state.week).toBe(week);
  clock.setPopupOpen(true);clock.decide(game.choices.options[0]);vi.advanceTimersByTime(5000);expect(game.state.week).toBe(week);
  clock.setPopupOpen(false);vi.advanceTimersByTime(1000);expect(game.state.week).toBe(week+1);clock.dispose();
 });
 it('pauses in the background without catch-up and does not restart after disposal',()=>{
  const game=new PrototypeGame(),clock=new StudioClock(game,()=>{},1000);clock.start();vi.advanceTimersByTime(250);
  clock.setVisible(false);vi.advanceTimersByTime(10000);expect(game.state.week).toBe(0);
  clock.setVisible(true);vi.advanceTimersByTime(750);expect(game.state.week).toBe(1);
  clock.dispose();vi.advanceTimersByTime(10000);expect(game.state.week).toBe(1);
 });
 it('starts a fresh full interval when a running studio is reset',()=>{
  const game=new PrototypeGame(),clock=new StudioClock(game,()=>{},1000);clock.start();vi.advanceTimersByTime(900);clock.reset();
  vi.advanceTimersByTime(100);expect(game.state.week).toBe(0);vi.advanceTimersByTime(900);expect(game.state.week).toBe(1);clock.dispose();
 });
});
