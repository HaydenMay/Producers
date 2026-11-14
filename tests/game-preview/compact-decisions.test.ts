// @vitest-environment jsdom
import { expect, it, vi } from 'vitest';
vi.mock('../../src/scene-lab/scene',()=>({DEFAULTS:{},createSceneLab:vi.fn(async()=>({setSettings:vi.fn(),dispose:vi.fn()}))}));

it('keeps casting and distribution details available on demand', async()=>{
  vi.useFakeTimers();localStorage.clear();document.body.innerHTML='<div id="app"></div>';await import('../../src/game-preview/main');
  const el=<T extends HTMLElement>(q:string)=>document.querySelector<T>(q)!;
  el<HTMLButtonElement>('#menu-button').click();el<HTMLButtonElement>('[data-view=projects]').click();el<HTMLButtonElement>('[data-action=start]').click();
  vi.advanceTimersByTime(1300*20);expect(el('#sheet-title').textContent).toBe('Choose your star');
  expect(el('[data-decision]:not(:disabled)').textContent).toMatch(/genre fit.*fame/i);
  expect(el('[data-detail-kind=star]').textContent).toMatch(/Relationship|Newcomer|Audition/);
  expect(el('[data-detail-kind=star] summary').getAttribute('aria-label')).toContain(el('[data-decision] strong').textContent);
  el<HTMLButtonElement>('[data-decision]:not(:disabled)').click();vi.advanceTimersByTime(1300*20);
  expect(el('#sheet-title').textContent).toBe('Choose a distributor');
  expect(el('[data-decision]').textContent).toMatch(/Studio.*Distributor/);
  expect(el('[data-detail-kind=distribution]').textContent).toMatch(/awareness/i);
  expect(el('[data-detail-kind=distribution] summary').getAttribute('aria-label')).toContain(el('[data-decision] strong').textContent);
  window.dispatchEvent(new PageTransitionEvent('pagehide',{persisted:false}));vi.useRealTimers();
});
