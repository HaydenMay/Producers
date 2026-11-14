// @vitest-environment jsdom
import { expect, it, vi } from 'vitest';
vi.mock('../../src/scene-lab/scene',()=>({DEFAULTS:{},createSceneLab:vi.fn(async()=>({setSettings:vi.fn(),dispose:vi.fn()}))}));
it('distinguishes a tight budget from a short budget and keeps the detailed estimate available',async()=>{
  localStorage.clear();document.body.innerHTML='<div id="app"></div>';await import('../../src/game-preview/main');
  const el=<T extends HTMLElement>(q:string)=>document.querySelector<T>(q)!;
  el<HTMLButtonElement>('#menu-button').click();el<HTMLButtonElement>('[data-view=projects]').click();
  expect(el('.warning summary').textContent).toContain('cheaper Star');
  for(let i=0;i<16&&el('.warning summary').textContent?.includes('cheaper Star');i++)el<HTMLButtonElement>('[data-action=advance]').click();
  expect(el('.warning summary').textContent).toContain('contract');
  expect(el('.warning').textContent).toContain('Star range');
  expect(el('[data-contract]')).toBeTruthy();
  window.dispatchEvent(new PageTransitionEvent('pagehide',{persisted:false}));
});
