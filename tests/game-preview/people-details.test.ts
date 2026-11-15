// @vitest-environment jsdom
import { expect, it, vi } from 'vitest';
import { STUDIO_WEEK_MS } from '../../src/game-preview/studio-clock';
vi.mock('../../src/scene-lab/scene',()=>({DEFAULTS:{},createSceneLab:vi.fn(async()=>({setSettings:vi.fn(),dispose:vi.fn()}))}));
vi.mock('../../src/game-preview/portraits',()=>({createPortraitService:vi.fn(async()=>({image:()=> 'data:image/png;base64,AA==',dispose:vi.fn()}))}));

it('opens employee and Star details and casts the selected offered Star',async()=>{
 vi.useFakeTimers();localStorage.clear();document.body.innerHTML='<div id="app"></div>';await import('../../src/game-preview/main');await Promise.resolve();
 const el=<T extends HTMLElement>(q:string)=>document.querySelector<T>(q)!;
 el<HTMLButtonElement>('#menu-button').click();el<HTMLButtonElement>('[data-view=people]').click();el<HTMLButtonElement>('[data-person-kind=staff]').click();
 expect(el('#sheet-title').textContent).toBe('Sam');expect(el('#sheet-body').textContent).toContain('Plot');expect(el('#sheet-body').textContent).toContain('Editing');
 el<HTMLButtonElement>('#back').click();expect(el('#sheet-title').textContent).toBe('People');el<HTMLButtonElement>('#back').click();el<HTMLButtonElement>('[data-view=projects]').click();el<HTMLButtonElement>('[data-action=start]').click();
 vi.advanceTimersByTime(STUDIO_WEEK_MS*13);expect(el('#sheet-title').textContent).toBe('Choose your star');
 const costly=[...document.querySelectorAll<HTMLButtonElement>('[data-person-kind=star]')].find(x=>x.textContent?.includes('Not affordable'));expect(costly).toBeTruthy();costly!.click();expect(el<HTMLButtonElement>('[data-action=cast-selected]').disabled).toBe(true);el<HTMLButtonElement>('#back').click();
 const card=el<HTMLButtonElement>('[data-person-kind=star]'),name=card.querySelector('strong')!.textContent;card.click();
 expect(el('#sheet-title').textContent).toBe(name);expect(el('#sheet-body').textContent).toContain('Fame');expect(el('#sheet-body').textContent).toContain('Skills');
 el<HTMLButtonElement>('[data-action=cast-selected]').click();expect(el<HTMLElement>('#sheet').hidden).toBe(true);
 window.dispatchEvent(new PageTransitionEvent('pagehide',{persisted:false}));vi.useRealTimers();
});
