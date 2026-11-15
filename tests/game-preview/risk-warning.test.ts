// @vitest-environment jsdom
import { expect, it, vi } from 'vitest';
import { STUDIO_WEEK_MS } from '../../src/game-preview/studio-clock';
vi.mock('../../src/scene-lab/scene',()=>({DEFAULTS:{},createSceneLab:vi.fn(async()=>({setSettings:vi.fn(),dispose:vi.fn()}))}));
it('distinguishes a tight budget from a short budget and keeps the detailed estimate available',async()=>{
  vi.useFakeTimers();localStorage.clear();document.body.innerHTML='<div id="app"></div>';await import('../../src/game-preview/main');await Promise.resolve();
  const el=<T extends HTMLElement>(q:string)=>document.querySelector<T>(q)!;
  el<HTMLButtonElement>('#menu-button').click();el<HTMLButtonElement>('[data-view=projects]').click();
  expect(el('.warning summary').textContent).toContain('cheaper Star');
  el<HTMLButtonElement>('#close').click();vi.advanceTimersByTime(STUDIO_WEEK_MS*12);el<HTMLButtonElement>('#menu-button').click();el<HTMLButtonElement>('[data-view=projects]').click();
  expect(el('.warning summary').textContent).toContain('contract');
  expect(el('.warning').textContent).toContain('Star range');
  expect(el('[data-contract]')).toBeTruthy();
  window.dispatchEvent(new PageTransitionEvent('pagehide',{persisted:false}));vi.useRealTimers();
});
