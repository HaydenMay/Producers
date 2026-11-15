// @vitest-environment jsdom
import { expect, it, vi } from 'vitest';
import { STUDIO_WEEK_MS } from '../../src/game-preview/studio-clock';
vi.mock('../../src/scene-lab/scene',()=>({DEFAULTS:{},createSceneLab:vi.fn(async()=>({setSettings:vi.fn(),dispose:vi.fn()}))}));
vi.mock('../../src/game-preview/portraits',()=>({createPortraitService:vi.fn(async()=>({image:()=> 'data:image/png;base64,AA==',dispose:vi.fn()}))}));

it('keeps casting and distribution details available on demand', async()=>{
  vi.useFakeTimers();localStorage.clear();document.body.innerHTML='<div id="app"></div>';await import('../../src/game-preview/main');await Promise.resolve();
  const el=<T extends HTMLElement>(q:string)=>document.querySelector<T>(q)!;
  el<HTMLButtonElement>('#menu-button').click();el<HTMLButtonElement>('[data-view=projects]').click();el<HTMLButtonElement>('[data-action=start]').click();
  vi.advanceTimersByTime(STUDIO_WEEK_MS*12);expect(el('#sheet-title').textContent).toBe('Choose your star');
  expect(el('[data-person-kind=star]').textContent).toMatch(/genre fit.*fame/i);
  el<HTMLButtonElement>('[data-person-kind=star]').click();expect(el('#sheet-body').textContent).toMatch(/Relationship|Newcomer|Audition/);
  el<HTMLButtonElement>('[data-action=cast-selected]').click();vi.advanceTimersByTime(STUDIO_WEEK_MS*12);
  expect(el('#sheet-title').textContent).toBe('Choose a distributor');
  expect(el('[data-decision]').textContent).toMatch(/Studio.*Distributor/);
  expect(el('[data-detail-kind=distribution]').textContent).toMatch(/awareness/i);
  expect(el('[data-detail-kind=distribution] summary').getAttribute('aria-label')).toContain(el('[data-decision] strong').textContent);
  window.dispatchEvent(new PageTransitionEvent('pagehide',{persisted:false}));vi.useRealTimers();
});
