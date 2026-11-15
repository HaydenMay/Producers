// @vitest-environment jsdom
import {expect,it,vi} from 'vitest';
import {STUDIO_WEEK_MS} from '../../src/game-preview/studio-clock';
vi.mock('../../src/scene-lab/scene',()=>({DEFAULTS:{},createSceneLab:vi.fn(async()=>({setSettings:vi.fn(),setMotionRunning:vi.fn(),dispose:vi.fn()}))}));
vi.mock('../../src/game-preview/portraits',()=>({createPortraitService:vi.fn(async()=>({image:()=>'',dispose:vi.fn()}))}));
it('guides the first movie on real screens and remembers completion for another studio',async()=>{
 vi.useFakeTimers();vi.spyOn(document,'hasFocus').mockReturnValue(true);localStorage.clear();document.body.innerHTML='<div id="app"></div>';await import('../../src/game-preview/main');await Promise.resolve();
 const el=<T extends HTMLElement>(q:string)=>document.querySelector<T>(q)!;expect(el<HTMLInputElement>('#guide-choice').checked).toBe(true);el<HTMLButtonElement>('[data-main=new]').click();
 expect(el('#sheet-title').textContent).toBe('Projects');expect(el('#sheet-body').textContent).toContain('first movie');vi.advanceTimersByTime(8000);expect(el('#date').textContent).toContain('Week 1');
 el<HTMLButtonElement>('#close').click();expect(el('#guide-hint').textContent).toContain('Projects');el<HTMLButtonElement>('#project-card').click();
 el<HTMLButtonElement>('[data-action=start]').click();expect(el<HTMLElement>('#guide-hint').hidden).toBe(false);expect(el('#guide-hint').textContent).toContain('costs');
 vi.advanceTimersByTime(STUDIO_WEEK_MS*12);expect(el('#sheet-title').textContent).toBe('Choose your star');expect(el('#sheet-body').textContent).toContain('first movie');
 el<HTMLButtonElement>('[data-person-kind=star]').click();el<HTMLButtonElement>('[data-action=cast-selected]').click();vi.advanceTimersByTime(STUDIO_WEEK_MS*12);
 expect(el('#sheet-title').textContent).toBe('Choose a distributor');expect(el('#sheet-body').textContent).toContain('first movie');el<HTMLButtonElement>('[data-decision]').click();vi.advanceTimersByTime(STUDIO_WEEK_MS*6);
 expect(el('#sheet-title').textContent).toBe('Premiere');expect(el('#sheet-body').textContent).toContain('first movie');el<HTMLButtonElement>('[data-action=dismiss]').click();expect(localStorage.getItem('producers.guide.complete.v1')).toBe('1');
 el<HTMLButtonElement>('#menu-button').click();el<HTMLButtonElement>('[data-action=main-menu]').click();expect(el('#main-menu').textContent).toContain('Welcome back, boss');expect(el<HTMLInputElement>('#guide-choice').checked).toBe(false);
 window.dispatchEvent(new PageTransitionEvent('pagehide',{persisted:false}));vi.restoreAllMocks();vi.useRealTimers();
});
