// @vitest-environment jsdom
import { expect,it,vi } from 'vitest';
import { baselineConfig } from '../../src/core/config';
import { replay } from '../../src/core/simulation';
import { runCareer } from '../../src/batch/runner';
import { encodeSave,readSave,SAVE_KEY } from '../../src/game-preview/save';
const scene=vi.hoisted(()=>({setSettings:vi.fn(),setCast:vi.fn(),setMotionRunning:vi.fn(),dispose:vi.fn()}));
vi.mock('../../src/scene-lab/scene',()=>({DEFAULTS:{},createSceneLab:vi.fn(async()=>scene)}));
vi.mock('../../src/game-preview/portraits',()=>({createPortraitService:vi.fn(async()=>({image:()=> 'data:image/png;base64,AA==',dispose:vi.fn()}))}));

it.each([0,1])('purchases capacity upgrade %i using a real replayable career',async(which)=>{
 vi.useFakeTimers();vi.resetModules();localStorage.clear();document.body.innerHTML='<div id="app"></div>';
 const cfg=baselineConfig(),career=runCareer(42,'balanced',cfg,{productions:10}),indexes=career.decisions.flatMap((d,i)=>d.type==='upgrade_studio'?[i]:[]),actions=career.decisions.slice(0,indexes[which]),state=replay(42,cfg,actions),expected=which===0?6:8,cost=cfg.staffCapacity.upgradeCosts[which];
 localStorage.setItem(SAVE_KEY,encodeSave(state,actions,{genre:'',theme:'',approach:'balanced'}));await import('../../src/game-preview/main');await Promise.resolve();
 const el=<T extends HTMLElement>(q:string)=>document.querySelector<T>(q)!;
 el<HTMLButtonElement>('[data-main=continue]').click();
 el<HTMLButtonElement>('#menu-button').click();el<HTMLButtonElement>('[data-view=studio]').click();
 expect(el('#sheet-body').textContent).toContain(`Room for ${expected} employees`);expect(el('#sheet-body').textContent).toContain('higher expectations');
 expect(el<HTMLButtonElement>('[data-action=upgrade-studio]').disabled).toBe(false);el<HTMLButtonElement>('[data-action=upgrade-studio]').click();
 expect(scene.setSettings).toHaveBeenLastCalledWith(expect.objectContaining({desks:expected,people:state.staff.length}));
 expect(el('#sheet-body').textContent).toContain("expectations are higher");
 const saved=readSave(localStorage.getItem(SAVE_KEY)!);expect(saved.ok&&saved.state.maxStaff).toBe(expected);expect(saved.ok&&saved.state.cash).toBeCloseTo(state.cash-cost);
 if(expected===8)expect(el('#sheet-body').textContent).toContain('largest capacity');else expect(el('#sheet-body').textContent).toContain('Room for 8 employees');
 window.dispatchEvent(new PageTransitionEvent('pagehide',{persisted:false}));vi.useRealTimers();
});
