// @vitest-environment jsdom
import { expect,it,vi } from 'vitest';
import { readSave,SAVE_KEY } from '../../src/game-preview/save';
import { generateTraits } from '../../src/character-lab/traits';
import { enterNewStudio } from './enter-studio';
const scene=vi.hoisted(()=>({setSettings:vi.fn(),setCast:vi.fn(),setMotionRunning:vi.fn(),dispose:vi.fn()}));
vi.mock('../../src/scene-lab/scene',()=>({DEFAULTS:{},createSceneLab:vi.fn(async()=>scene)}));
vi.mock('../../src/game-preview/portraits',()=>({createPortraitService:vi.fn(async()=>({image:()=> 'data:image/png;base64,AA==',dispose:vi.fn()}))}));

it('hires employees, lets training buy experience (levels also come from work), and preserves them in the save',async()=>{
 vi.useFakeTimers();localStorage.clear();document.body.innerHTML='<div id="app"></div>';await import('../../src/game-preview/main');await Promise.resolve();
 const el=<T extends HTMLElement>(q:string)=>document.querySelector<T>(q)!;
 enterNewStudio();
 el<HTMLButtonElement>('#menu-button').click();el<HTMLButtonElement>('[data-view=people]').click();
 expect(el('[data-action=hire]').textContent).toContain('$20,000');el<HTMLButtonElement>('[data-action=hire]').click();
 expect(el('#sheet-kicker').textContent).toContain('YOUR CREW');expect(el('#sheet-body').textContent).toContain('Weekly pay');
 expect(el('#cash').textContent).toBe('$140,000');const before=Number(el('[data-skill=plot]').textContent);
 expect(el('[data-action=train-selected]').textContent).toContain('$15,000');expect(el<HTMLButtonElement>('[data-action=train-selected]').disabled).toBe(false);
 expect(el('#sheet-body').textContent).toContain('work earns it too');expect(el('#cash').textContent).toBe('$140,000');
 expect(scene.setSettings).toHaveBeenLastCalledWith(expect.objectContaining({desks:4,people:3}));
 const saved=readSave(localStorage.getItem(SAVE_KEY)!);expect(saved.ok&&saved.state.staff.length).toBe(3);expect(saved.ok&&saved.state.staff[2].stats.plot).toBe(before);
 el<HTMLButtonElement>('[data-action=train-selected]').click(); // a paid speed-up: the fee goes, experience arrives, no level yet
 expect(el('#cash').textContent).toBe('$125,000');
 const trained=readSave(localStorage.getItem(SAVE_KEY)!);expect(trained.ok&&trained.state.staff[2].totalXp).toBe(100);expect(trained.ok&&trained.state.staff[2].progression?.level).toBe(0);
 if(saved.ok)expect(scene.setCast).toHaveBeenLastCalledWith(saved.state.staff.map(person=>generateTraits(`staff-${person.id}`)));
 el<HTMLButtonElement>('#back').click();el<HTMLButtonElement>('[data-action=hire]').click();el<HTMLButtonElement>('#back').click();
 expect(el<HTMLButtonElement>('[data-action=hire]').disabled).toBe(true);expect(el('#sheet-body').textContent).toContain('capacity');
 window.dispatchEvent(new PageTransitionEvent('pagehide',{persisted:false}));vi.useRealTimers();
});
