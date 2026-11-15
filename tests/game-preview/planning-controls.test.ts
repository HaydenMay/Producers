// @vitest-environment jsdom
import { expect, it, vi } from 'vitest';
import { readSave, SAVE_KEY } from '../../src/game-preview/save';
vi.mock('../../src/scene-lab/scene',()=>({DEFAULTS:{},createSceneLab:vi.fn(async()=>({setSettings:vi.fn(),dispose:vi.fn()}))}));
it('chooses genres and themes on game screens, preserves choices and starts the chosen movie', async () => {
 localStorage.clear();document.body.innerHTML='<div id="app"></div>';await import('../../src/game-preview/main');await Promise.resolve();
 const el=<T extends HTMLElement>(q:string)=>document.querySelector<T>(q)!;
 el<HTMLInputElement>('#guide-choice').checked=false;el<HTMLButtonElement>('[data-main=new]').click();el<HTMLButtonElement>('#project-card').click();
 expect(document.querySelector('select')).toBeNull();el<HTMLButtonElement>('[data-view=genres]').click();expect(el('#sheet-title').textContent).toBe('Choose a genre');
 expect(document.querySelectorAll('[data-pick-genre]').length).toBeGreaterThan(1);el<HTMLButtonElement>('[data-pick-genre="Comedy"]').click();
 expect(el('[data-view=genres]').textContent).toContain('Comedy');expect(document.activeElement).toBe(el('[data-view=genres]'));
 el<HTMLButtonElement>('[data-view=themes]').click();el<HTMLButtonElement>('[data-pick-theme="Sports"]').click();
 const crowd=el<HTMLInputElement>('input[value=crowd]');crowd.checked=true;crowd.dispatchEvent(new Event('change',{bubbles:true}));
 expect(el('.concept').textContent).toContain('Comedy · Sports · Crowd-pleaser');const saved=readSave(localStorage.getItem(SAVE_KEY)!);
 expect(saved.ok&&saved.ui).toMatchObject({genre:'Comedy',theme:'Sports',approach:'crowd'});
 el<HTMLButtonElement>('#close').click();el<HTMLButtonElement>('#project-card').click();expect(el('[data-view=genres]').textContent).toContain('Comedy');expect(el('[data-view=themes]').textContent).toContain('Sports');
 el<HTMLButtonElement>('[data-action=start]').click();const started=readSave(localStorage.getItem(SAVE_KEY)!);expect(started.ok&&started.state.project).toMatchObject({genre:'Comedy',theme:'Sports',approach:'crowd'});
 window.dispatchEvent(new PageTransitionEvent('pagehide',{persisted:false}));
});
