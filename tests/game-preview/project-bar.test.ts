// @vitest-environment jsdom
import { expect,it,vi } from 'vitest';
vi.mock('../../src/scene-lab/scene',()=>({DEFAULTS:{},createSceneLab:vi.fn(async()=>({setSettings:vi.fn(),dispose:vi.fn()}))}));
vi.mock('../../src/game-preview/portraits',()=>({createPortraitService:vi.fn(async()=>({image:()=> 'data:image/png;base64,AA==',dispose:vi.fn()}))}));

it('opens Projects and updates the visible project points as time advances',async()=>{
 vi.useFakeTimers();localStorage.clear();document.body.innerHTML='<div id="app"></div>';await import('../../src/game-preview/main');await Promise.resolve();
 const el=<T extends HTMLElement>(q:string)=>document.querySelector<T>(q)!;
 expect(el('#project-card').textContent).toContain('No active project');el<HTMLButtonElement>('#project-card').click();
 expect(el('#sheet-title').textContent).toBe('Projects');el<HTMLButtonElement>('[data-action=start]').click();
 expect(el('#project-card').textContent).toContain('IN PRODUCTION');expect(el('#project-card').textContent).toContain('0%');
 vi.advanceTimersByTime(2200);expect(el('#project-card').textContent).toMatch(/Plot [1-9]/);expect(el('#project-card').textContent).toContain('0%');
 const pointsBeforePause=el('#project-points').textContent;el<HTMLButtonElement>('#project-card').click();
 expect(el('[data-meter="plot"]').textContent).not.toBe('0');vi.advanceTimersByTime(4500);expect(el('#project-points').textContent).toBe(pointsBeforePause);
 el<HTMLButtonElement>('#close').click();vi.advanceTimersByTime(1800);expect(el('#project-card').textContent).toContain('3%');expect(el('#project-card').textContent).toContain('Plot');
 expect(el('#project-card').getAttribute('aria-label')).toContain('Writing');expect(el('#project-card').getAttribute('aria-label')).toContain('points');
 el<HTMLButtonElement>('#project-card').click();expect(el('#sheet-title').textContent).toBe('Projects');
 el<HTMLButtonElement>('#close').click();vi.advanceTimersByTime(4000*11);expect(el('#sheet-title').textContent).toBe('Choose your star');
 el<HTMLButtonElement>('#close').click();expect(el('#project-card').textContent).toContain('CASTING DECISION');el<HTMLButtonElement>('#project-card').click();el<HTMLButtonElement>('[data-action=decision]').click();expect(el('#sheet-title').textContent).toBe('Choose your star');
 window.dispatchEvent(new PageTransitionEvent('pagehide',{persisted:false}));vi.useRealTimers();
});
