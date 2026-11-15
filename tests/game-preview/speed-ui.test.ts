// @vitest-environment jsdom
import {expect,it,vi} from 'vitest';
import {readSave,SAVE_KEY} from '../../src/game-preview/save';
vi.mock('../../src/scene-lab/scene',()=>({DEFAULTS:{},createSceneLab:vi.fn(async()=>({setSettings:vi.fn(),setMotionRunning:vi.fn(),dispose:vi.fn()}))}));
it('switches speed without bypassing paused menus and persists the preference',async()=>{
 vi.useFakeTimers();vi.spyOn(document,'hasFocus').mockReturnValue(true);localStorage.clear();document.body.innerHTML='<div id="app"></div>';await import('../../src/game-preview/main');await Promise.resolve();
 const el=<T extends HTMLElement>(q:string)=>document.querySelector<T>(q)!;
 el<HTMLInputElement>('#guide-choice').checked=false;el<HTMLButtonElement>('[data-main=new]').click();el<HTMLButtonElement>('[data-speed="4"]').click();
 expect(el('[data-speed="4"]').getAttribute('aria-pressed')).toBe('true');vi.advanceTimersByTime(1000);expect(el('#date').textContent).toContain('Week 2');
 const saved=readSave(localStorage.getItem(SAVE_KEY)!);expect(saved.ok&&saved.ui.speed).toBe(4);
 el<HTMLButtonElement>('#menu-button').click();vi.advanceTimersByTime(8000);expect(el('#date').textContent).toContain('Week 2');el<HTMLButtonElement>('#close').click();vi.advanceTimersByTime(1000);expect(el('#date').textContent).toContain('Week 3');
 window.dispatchEvent(new PageTransitionEvent('pagehide',{persisted:false}));vi.restoreAllMocks();vi.useRealTimers();
});
