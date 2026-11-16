// @vitest-environment jsdom
import {expect,it,vi} from 'vitest';
import {STUDIO_WEEK_MS} from '../../src/game-preview/studio-clock';
import {readSave,SAVE_KEY} from '../../src/game-preview/save';
import {enterNewStudio} from './enter-studio';
vi.mock('../../src/scene-lab/scene',()=>({DEFAULTS:{},createSceneLab:vi.fn(async()=>({setSettings:vi.fn(),setMotionRunning:vi.fn(),dispose:vi.fn()}))}));
vi.mock('../../src/game-preview/portraits',()=>({createPortraitService:vi.fn(async()=>({image:()=>'',dispose:vi.fn()}))}));
it('after the first movie the planner offers its sequel, reboot or spinoff, and starts a sequel',async()=>{
 vi.useFakeTimers();vi.spyOn(document,'hasFocus').mockReturnValue(true);localStorage.clear();document.body.innerHTML='<div id="app"></div>';await import('../../src/game-preview/main');await Promise.resolve();
 const el=<T extends HTMLElement>(q:string)=>document.querySelector<T>(q)!;
 enterNewStudio();
 el<HTMLButtonElement>('#project-card').click();expect(document.querySelector('.story-selector')).toBeNull(); // nothing to continue yet
 el<HTMLButtonElement>('[data-action=start]').click();vi.advanceTimersByTime(STUDIO_WEEK_MS*12);
 el<HTMLButtonElement>('[data-person-kind=star]').click();el<HTMLButtonElement>('[data-action=cast-selected]').click();vi.advanceTimersByTime(STUDIO_WEEK_MS*12);
 el<HTMLButtonElement>('[data-decision]').click();vi.advanceTimersByTime(STUDIO_WEEK_MS*6);
 const first=el('.movie-title').textContent!;el<HTMLButtonElement>('[data-action=dismiss]').click();
 vi.advanceTimersByTime(STUDIO_WEEK_MS*14); // let the theatrical run pay before planning the next one
 // a first dud can leave too little for a second movie: take work-for-hire jobs until one is affordable (the designed recovery)
 for(let i=0;i<8;i++){el<HTMLButtonElement>('#project-card').click();if(document.querySelector('.story-selector'))break;document.querySelector<HTMLButtonElement>('[data-contract="0"]')?.click();document.querySelector<HTMLButtonElement>('#close')?.click();vi.advanceTimersByTime(STUDIO_WEEK_MS*12)}
 expect(el('.story-selector').textContent).toContain('New story');
 el<HTMLButtonElement>('.story-selector').click();const pick=[...document.querySelectorAll<HTMLButtonElement>('[data-pick-story]')].find(b=>b.dataset.pickStory);expect(pick!.textContent).toMatch(/1 film/);pick!.click();
 const radios=[...document.querySelectorAll<HTMLInputElement>('input[name=relation]')].map(r=>r.value);expect(radios).toEqual(['sequel','reboot','spinoff']);
 expect(el<HTMLButtonElement>('[data-view=genres]').disabled).toBe(true);expect(el<HTMLButtonElement>('[data-view=themes]').disabled).toBe(true);
 const spin=el<HTMLInputElement>('input[value=spinoff]');spin.checked=true;spin.dispatchEvent(new Event('change',{bubbles:true}));expect(el<HTMLButtonElement>('[data-view=themes]').disabled).toBe(false);expect(el('[data-action=start]').textContent).toBe('Start spinoff');
 const seq=el<HTMLInputElement>('input[value=sequel]');seq.checked=true;seq.dispatchEvent(new Event('change',{bubbles:true}));
 expect(el('.concept').textContent).toMatch(/^Sequel to /);expect(el('[data-action=start]').textContent).toBe('Start sequel');
 const saved=readSave(localStorage.getItem(SAVE_KEY)!);expect(saved.ok&&saved.ui.relation).toBe('sequel');expect(saved.ok&&typeof saved.ui.ip).toBe('string');
 el<HTMLButtonElement>('[data-action=start]').click();el<HTMLButtonElement>('#project-card').click();
 expect(el('.movie-title').textContent).toMatch(/ 2$/);expect(first.length).toBeGreaterThan(0);
 window.dispatchEvent(new PageTransitionEvent('pagehide',{persisted:false}));vi.restoreAllMocks();vi.useRealTimers();
});
