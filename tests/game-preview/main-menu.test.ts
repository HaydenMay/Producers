// @vitest-environment jsdom
import {expect,it,vi} from 'vitest';
import {SAVE_KEY,readSave} from '../../src/game-preview/save';
vi.mock('../../src/scene-lab/scene',()=>({DEFAULTS:{},createSceneLab:vi.fn(async()=>({setSettings:vi.fn(),setMotionRunning:vi.fn(),dispose:vi.fn()}))}));
vi.mock('../../src/game-preview/portraits',()=>({createPortraitService:vi.fn(async()=>({image:()=>'',dispose:vi.fn()}))}));

it('pauses at the main menu and protects a career until a reset is confirmed',async()=>{
 vi.useFakeTimers();vi.spyOn(document,'hasFocus').mockReturnValue(true);localStorage.clear();document.body.innerHTML='<div id="app"></div>';await import('../../src/game-preview/main');await Promise.resolve();
 const el=<T extends HTMLElement>(q:string)=>document.querySelector<T>(q)!;
 expect(el<HTMLElement>('#main-menu').hidden).toBe(false);vi.advanceTimersByTime(12000);expect(el('#date').textContent).toContain('Week 1');expect(localStorage.getItem(SAVE_KEY)).toBeNull();
 expect(el<HTMLButtonElement>('[data-main=continue]').disabled).toBe(true);el<HTMLInputElement>('#guide-choice').checked=false;el<HTMLButtonElement>('[data-main=new]').click();
 expect(el<HTMLElement>('#main-menu').hidden).toBe(true);vi.advanceTimersByTime(4000);expect(el('#date').textContent).toContain('Week 2');
 el<HTMLButtonElement>('#menu-button').click();el<HTMLButtonElement>('[data-action=main-menu]').click();const before=localStorage.getItem(SAVE_KEY);
 vi.advanceTimersByTime(12000);expect(localStorage.getItem(SAVE_KEY)).toBe(before);el<HTMLButtonElement>('[data-main=new]').click();
 expect(el('#main-menu').textContent).toContain('replace');el<HTMLButtonElement>('[data-main=cancel]').click();expect(localStorage.getItem(SAVE_KEY)).toBe(before);
 el<HTMLButtonElement>('[data-main=continue]').click();expect(el('#date').textContent).toContain('Week 2');
 el<HTMLButtonElement>('#menu-button').click();el<HTMLButtonElement>('[data-action=main-menu]').click();el<HTMLButtonElement>('[data-main=new]').click();el<HTMLButtonElement>('[data-main=confirm]').click();
 expect(el('#date').textContent).toContain('Week 1');const reset=readSave(localStorage.getItem(SAVE_KEY)!);expect(reset.ok&&reset.state.week).toBe(0);
 window.dispatchEvent(new PageTransitionEvent('pagehide',{persisted:false}));vi.restoreAllMocks();vi.useRealTimers();
});
