// @vitest-environment jsdom
import {expect,it,vi} from 'vitest';
import {STUDIO_WEEK_MS} from '../../src/game-preview/studio-clock';
import {readSave,SAVE_KEY} from '../../src/game-preview/save';
vi.mock('../../src/scene-lab/scene',()=>({DEFAULTS:{},createSceneLab:vi.fn(async()=>({setSettings:vi.fn(),setMotionRunning:vi.fn(),dispose:vi.fn()}))}));
vi.mock('../../src/game-preview/portraits',()=>({createPortraitService:vi.fn(async()=>({image:()=>'',dispose:vi.fn()}))}));
it('names the studio, shows the review site, critic panel, assistant and Star bio, and saves the name',async()=>{
 vi.useFakeTimers();vi.spyOn(document,'hasFocus').mockReturnValue(true);localStorage.clear();document.body.innerHTML='<div id="app"></div>';await import('../../src/game-preview/main');await Promise.resolve();
 const el=<T extends HTMLElement>(q:string)=>document.querySelector<T>(q)!;
 const name=el<HTMLInputElement>('#studio-name');expect(name.value.length).toBeGreaterThan(0);
 el<HTMLButtonElement>('[data-main=random-name]').click();expect(el<HTMLInputElement>('#studio-name').value).toMatch(/\S/);
 el<HTMLInputElement>('#studio-name').value='  Moon   Dog Films ';el<HTMLInputElement>('#guide-choice').checked=true;el<HTMLButtonElement>('[data-main=new]').click();
 expect(el('#studio-brand').textContent).toBe('MOON DOG FILMS');expect(el('#sheet-body').textContent).toContain('MARNIE · YOUR FIRST MOVIE');
 el<HTMLButtonElement>('[data-action=start]').click();vi.advanceTimersByTime(STUDIO_WEEK_MS*12);
 el<HTMLButtonElement>('[data-person-kind=star]').click();expect(el('.bio').textContent).toMatch(/screen credit/);el<HTMLButtonElement>('[data-action=cast-selected]').click();vi.advanceTimersByTime(STUDIO_WEEK_MS*12);
 el<HTMLButtonElement>('[data-decision]').click();vi.advanceTimersByTime(STUDIO_WEEK_MS*6);
 expect(el('#sheet-title').textContent).toBe('Premiere');
 const critic=Number(el('.score-grid div:nth-child(2) strong').textContent!.split('/')[0]);
 expect(el('.review-site').textContent).toContain(`ReelScore ${Math.round(critic*10)}%`);
 expect(el('.assistant-line').textContent).toContain('Marnie:');
 const scores=[...document.querySelectorAll('.critic-panel .money-row strong')].map(n=>Number(n.textContent));expect(scores).toHaveLength(4);
 expect(Math.abs(scores.reduce((a,b)=>a+b,0)/4-critic)).toBeLessThanOrEqual(0.051);
 el<HTMLButtonElement>('[data-action=dismiss]').click();
 const saved=readSave(localStorage.getItem(SAVE_KEY)!);expect(saved.ok&&saved.ui.studioName).toBe('Moon Dog Films');expect(saved.ok&&Array.isArray(saved.ui.tips)).toBe(true);
 el<HTMLButtonElement>('#menu-button').click();el<HTMLButtonElement>('[data-view=studio]').click();expect(el('.feature-card h2').textContent).toBe('Moon Dog Films');
 window.dispatchEvent(new PageTransitionEvent('pagehide',{persisted:false}));vi.restoreAllMocks();vi.useRealTimers();
});
