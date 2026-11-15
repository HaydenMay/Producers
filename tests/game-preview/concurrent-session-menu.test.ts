// @vitest-environment jsdom
import {expect,it,vi} from 'vitest';
import {SAVE_KEY} from '../../src/game-preview/save';
import {enterNewStudio} from './enter-studio';
vi.mock('../../src/scene-lab/scene',()=>({DEFAULTS:{},createSceneLab:vi.fn(async()=>({setSettings:vi.fn(),setMotionRunning:vi.fn(),dispose:vi.fn()}))}));
it('keeps an in-memory session available without overwriting a newer external save',async()=>{
 vi.useFakeTimers();vi.spyOn(document,'hasFocus').mockReturnValue(true);localStorage.clear();document.body.innerHTML='<div id="app"></div>';await import('../../src/game-preview/main');await Promise.resolve();enterNewStudio();vi.advanceTimersByTime(4000);
 const el=<T extends HTMLElement>(q:string)=>document.querySelector<T>(q)!;el<HTMLButtonElement>('#menu-button').click();el<HTMLButtonElement>('[data-action=main-menu]').click();localStorage.setItem(SAVE_KEY,'external save');el<HTMLButtonElement>('[data-main=continue]').click();
 expect(el<HTMLElement>('#main-menu').hidden).toBe(true);expect(el('#date').textContent).toContain('Week 2');expect(el('#save-status').textContent).toContain('NOT SAVED');vi.advanceTimersByTime(4000);expect(localStorage.getItem(SAVE_KEY)).toBe('external save');
 window.dispatchEvent(new PageTransitionEvent('pagehide',{persisted:false}));vi.restoreAllMocks();vi.useRealTimers();
});
