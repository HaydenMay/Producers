// @vitest-environment jsdom
import {expect,it,vi} from 'vitest';
import {STUDIO_WEEK_MS} from '../../src/game-preview/studio-clock';
import {readSave,SAVE_KEY} from '../../src/game-preview/save';
import {enterNewStudio} from './enter-studio';
vi.mock('../../src/scene-lab/scene',()=>({DEFAULTS:{},createSceneLab:vi.fn(async()=>({setSettings:vi.fn(),setMotionRunning:vi.fn(),dispose:vi.fn()}))}));
vi.mock('../../src/game-preview/portraits',()=>({createPortraitService:vi.fn(async()=>({image:()=>'',dispose:vi.fn()}))}));
it('The Daily Reel reports the premiere, marks it new once, and remembers what was read',async()=>{
 vi.useFakeTimers();vi.spyOn(document,'hasFocus').mockReturnValue(true);localStorage.clear();document.body.innerHTML='<div id="app"></div>';await import('../../src/game-preview/main');await Promise.resolve();
 const el=<T extends HTMLElement>(q:string)=>document.querySelector<T>(q)!;
 el<HTMLInputElement>('#studio-name').value='Moon Dog Films';enterNewStudio();
 el<HTMLButtonElement>('#project-card').click();el<HTMLButtonElement>('[data-action=start]').click();vi.advanceTimersByTime(STUDIO_WEEK_MS*12);
 el<HTMLButtonElement>('[data-person-kind=star]').click();el<HTMLButtonElement>('[data-action=cast-selected]').click();vi.advanceTimersByTime(STUDIO_WEEK_MS*12);
 el<HTMLButtonElement>('[data-decision]').click();vi.advanceTimersByTime(STUDIO_WEEK_MS*6);
 const title=el('.movie-title').textContent!;el<HTMLButtonElement>('[data-action=dismiss]').click();
 el<HTMLButtonElement>('#menu-button').click();expect(el('[data-view=news]').textContent).toMatch(/The Daily Reel\d+ new/);
 el<HTMLButtonElement>('[data-view=news]').click();expect(el('.masthead').textContent).toBe('The Daily Reel');
 const story=[...document.querySelectorAll('.story')].find(s=>s.textContent!.includes(`${title} premieres`))!;expect(story.classList.contains('fresh')).toBe(true);expect(story.textContent).toContain('ReelScore');
 expect(el('#sheet-body').textContent).toContain('Moon Dog Films');
 el<HTMLButtonElement>('#back').click();expect(el('[data-view=news]').textContent).toContain('Industry news');
 const saved=readSave(localStorage.getItem(SAVE_KEY)!);expect(saved.ok&&saved.ui.newsReadUpTo).toBeGreaterThan(0);
 window.dispatchEvent(new PageTransitionEvent('pagehide',{persisted:false}));vi.restoreAllMocks();vi.useRealTimers();
});
