// @vitest-environment jsdom
import {expect,it,vi} from 'vitest';
import {PrototypeGame} from '../../src/game/game';
import {encodeSave,SAVE_KEY} from '../../src/game-preview/save';
vi.mock('../../src/scene-lab/scene',()=>({DEFAULTS:{},createSceneLab:vi.fn(async()=>({setSettings:vi.fn(),dispose:vi.fn()}))}));
it('does not resume a stale saved career when another tab changes it',async()=>{
 localStorage.clear();const game=new PrototypeGame(),ui={genre:'',theme:'',approach:'balanced' as const};localStorage.setItem(SAVE_KEY,encodeSave(game.state,game.actions,ui));document.body.innerHTML='<div id="app"></div>';await import('../../src/game-preview/main');await Promise.resolve();
 game.advance();const newer=encodeSave(game.state,game.actions,ui);localStorage.setItem(SAVE_KEY,newer);
 const el=<T extends HTMLElement>(q:string)=>document.querySelector<T>(q)!;el<HTMLButtonElement>('[data-main=continue]').click();expect(el<HTMLElement>('#main-menu').hidden).toBe(false);expect(el('#main-menu').textContent).toMatch(/changed.*reload/i);
 document.dispatchEvent(new KeyboardEvent('keydown',{key:'Escape',bubbles:true}));expect(el<HTMLElement>('#main-menu').hidden).toBe(false);expect(localStorage.getItem(SAVE_KEY)).toBe(newer);
 window.dispatchEvent(new PageTransitionEvent('pagehide',{persisted:false}));
});
