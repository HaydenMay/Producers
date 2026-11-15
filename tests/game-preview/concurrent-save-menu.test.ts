// @vitest-environment jsdom
import {expect,it,vi} from 'vitest';
import {PrototypeGame} from '../../src/game/game';
import {encodeSave,SAVE_KEY} from '../../src/game-preview/save';
vi.mock('../../src/scene-lab/scene',()=>({DEFAULTS:{},createSceneLab:vi.fn(async()=>({setSettings:vi.fn(),setMotionRunning:vi.fn(),dispose:vi.fn()}))}));
it('requires confirmation for a save created or changed by another tab',async()=>{
 localStorage.clear();document.body.innerHTML='<div id="app"></div>';await import('../../src/game-preview/main');await Promise.resolve();
 const game=new PrototypeGame(),ui={genre:'',theme:'',approach:'balanced' as const},first=encodeSave(game.state,game.actions,ui);localStorage.setItem(SAVE_KEY,first);
 const el=<T extends HTMLElement>(q:string)=>document.querySelector<T>(q)!;el<HTMLInputElement>('#guide-choice').checked=false;el<HTMLButtonElement>('[data-main=new]').click();
 expect(el<HTMLElement>('#main-menu').hidden).toBe(false);expect(localStorage.getItem(SAVE_KEY)).toBe(first);
 el<HTMLButtonElement>('[data-main=cancel]').click();expect(el('#main-menu').textContent).toMatch(/changed.*reload/i);expect(localStorage.getItem(SAVE_KEY)).toBe(first);el<HTMLInputElement>('#guide-choice').checked=false;el<HTMLButtonElement>('[data-main=new]').click();
 game.advance();const second=encodeSave(game.state,game.actions,ui);localStorage.setItem(SAVE_KEY,second);el<HTMLButtonElement>('[data-main=confirm]').click();
 expect(el<HTMLElement>('#main-menu').hidden).toBe(false);expect(el('#main-menu').textContent).toContain('changed');expect(localStorage.getItem(SAVE_KEY)).toBe(second);
 el<HTMLButtonElement>('[data-main=confirm]').click();expect(el<HTMLElement>('#main-menu').hidden).toBe(true);expect(localStorage.getItem(SAVE_KEY)).not.toBe(second);
 window.dispatchEvent(new PageTransitionEvent('pagehide',{persisted:false}));
});
