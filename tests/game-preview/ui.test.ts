// @vitest-environment jsdom
import {afterEach,describe,expect,it,vi} from 'vitest';
import {readSave,SAVE_KEY} from '../../src/game-preview/save';
import {STUDIO_WEEK_MS} from '../../src/game-preview/studio-clock';
const motion=vi.hoisted(()=>vi.fn());
vi.mock('../../src/scene-lab/scene',()=>({DEFAULTS:{},createSceneLab:vi.fn(async()=>({setSettings:vi.fn(),setMotionRunning:motion,dispose:vi.fn()}))}));
vi.mock('../../src/game-preview/portraits',()=>({createPortraitService:vi.fn(async()=>({image:()=> 'data:image/png;base64,AA==',dispose:vi.fn()}))}));
afterEach(()=>{window.dispatchEvent(new PageTransitionEvent('pagehide',{persisted:false}));vi.useRealTimers()});
describe('portrait game preview',()=>{it('pauses for sheets, resumes between decisions and runs a movie and contract',async()=>{
 vi.useFakeTimers();localStorage.clear();document.body.innerHTML='<div id="app"></div>';await import('../../src/game-preview/main');await Promise.resolve();
 const el=<T extends HTMLElement>(q:string)=>document.querySelector<T>(q)!;
 expect(document.querySelector('#project-card')).toBeTruthy();expect(document.querySelectorAll('.dock button')).toHaveLength(2);expect(el('#cash').textContent).toBe('$160,000');
 el<HTMLButtonElement>('#menu-button').click();vi.advanceTimersByTime(24000);expect(el('#date').textContent).toContain('Week 1');
 expect(el('#clock-indicator').getAttribute('aria-label')).toBe('Time paused');
 expect(motion).toHaveBeenLastCalledWith(false);
 el<HTMLButtonElement>('[data-view=people]').click();expect(el('#sheet-body').textContent).toContain('Sam');el<HTMLButtonElement>('#back').click();el<HTMLButtonElement>('[data-view=projects]').click();el<HTMLButtonElement>('[data-action=start]').click();
 expect(el<HTMLElement>('#sheet').hidden).toBe(true);expect(motion).toHaveBeenLastCalledWith(true);vi.advanceTimersByTime(STUDIO_WEEK_MS);expect(el('#date').textContent).toContain('Week 2');
 const saved=readSave(localStorage.getItem(SAVE_KEY)!);expect(saved.ok&&saved.state.week).toBe(1);
 window.dispatchEvent(new Event('blur'));vi.advanceTimersByTime(24000);expect(el('#date').textContent).toContain('Week 2');window.dispatchEvent(new Event('focus'));
 vi.advanceTimersByTime(STUDIO_WEEK_MS*11);expect(el('#sheet-title').textContent).toBe('Choose your star');const week=el('#date').textContent;
 vi.advanceTimersByTime(24000);expect(el('#date').textContent).toBe(week);
 el<HTMLButtonElement>('[data-person-kind=star]').click();el<HTMLButtonElement>('[data-action=cast-selected]').click();
 vi.advanceTimersByTime(STUDIO_WEEK_MS*12);expect(el('#sheet-title').textContent).toBe('Choose a distributor');el<HTMLButtonElement>('[data-decision]').click();
 vi.advanceTimersByTime(STUDIO_WEEK_MS*6);expect(el('#sheet-title').textContent).toBe('Premiere');expect(el('#sheet-body').textContent).toContain('AUDIENCE');
 el<HTMLButtonElement>('[data-action=dismiss]').click();el<HTMLButtonElement>('#menu-button').click();el<HTMLButtonElement>('[data-view=projects]').click();
 expect(document.querySelector('[data-action=advance]')).toBeNull();el<HTMLButtonElement>('[data-contract]').click();expect(el('#sheet-body').textContent).toContain('WORK FOR HIRE');
 el<HTMLButtonElement>('#close').click();vi.advanceTimersByTime(STUDIO_WEEK_MS*6);el<HTMLButtonElement>('#menu-button').click();el<HTMLButtonElement>('[data-view=projects]').click();expect(el('#sheet-body').textContent).not.toContain('WORK FOR HIRE');
})});
