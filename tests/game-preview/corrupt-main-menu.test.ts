// @vitest-environment jsdom
import {expect,it,vi} from 'vitest';
import {SAVE_KEY,readSave} from '../../src/game-preview/save';
vi.mock('../../src/scene-lab/scene',()=>({DEFAULTS:{},createSceneLab:vi.fn(async()=>({setSettings:vi.fn(),dispose:vi.fn()}))}));
it('retains an unreadable save until the player confirms replacement',async()=>{
 localStorage.clear();localStorage.setItem(SAVE_KEY,'{invalid');document.body.innerHTML='<div id="app"></div>';await import('../../src/game-preview/main');await Promise.resolve();
 const el=<T extends HTMLElement>(q:string)=>document.querySelector<T>(q)!;expect(el<HTMLButtonElement>('[data-main=continue]').disabled).toBe(true);expect(el('#main-menu').textContent).toContain('damaged');
 window.dispatchEvent(new Event('blur'));expect(localStorage.getItem(SAVE_KEY)).toBe('{invalid');el<HTMLInputElement>('#guide-choice').checked=false;el<HTMLButtonElement>('[data-main=new]').click();
 el<HTMLButtonElement>('[data-main=cancel]').click();expect(localStorage.getItem(SAVE_KEY)).toBe('{invalid');el<HTMLInputElement>('#guide-choice').checked=false;el<HTMLButtonElement>('[data-main=new]').click();el<HTMLButtonElement>('[data-main=confirm]').click();
 expect(readSave(localStorage.getItem(SAVE_KEY)!).ok).toBe(true);window.dispatchEvent(new PageTransitionEvent('pagehide',{persisted:false}));
});
