// @vitest-environment jsdom
import {expect,it,vi} from 'vitest';
import {PrototypeGame} from '../../src/game/game';
import {encodeSave,SAVE_KEY} from '../../src/game-preview/save';
vi.mock('../../src/scene-lab/scene',()=>({DEFAULTS:{},createSceneLab:vi.fn(async()=>({setSettings:vi.fn(),setMotionRunning:vi.fn(),dispose:vi.fn()}))}));
vi.mock('../../src/game-preview/portraits',()=>({createPortraitService:vi.fn(async()=>({image:()=>'',dispose:vi.fn()}))}));
it('keeps an existing legacy save paused at the main menu and restores a pending decision on continue',async()=>{
 vi.useFakeTimers();vi.spyOn(document,'hasFocus').mockReturnValue(true);localStorage.clear();const game=new PrototypeGame();game.startMovie();for(let i=0;i<12;i++)game.advance();
 const raw=encodeSave(game.state,game.actions,{genre:'Action',theme:'Spies',approach:'balanced'});localStorage.setItem(SAVE_KEY,raw);document.body.innerHTML='<div id="app"></div>';await import('../../src/game-preview/main');await Promise.resolve();
 const el=<T extends HTMLElement>(q:string)=>document.querySelector<T>(q)!;vi.advanceTimersByTime(20000);expect(localStorage.getItem(SAVE_KEY)).toBe(raw);expect(el<HTMLElement>('#main-menu').hidden).toBe(false);expect(document.activeElement).toBe(el('[data-main=continue]'));
 el<HTMLButtonElement>('[data-main=continue]').click();expect(el('#sheet-title').textContent).toBe('Choose your star');const date=el('#date').textContent;vi.advanceTimersByTime(12000);expect(el('#date').textContent).toBe(date);
 window.dispatchEvent(new PageTransitionEvent('pagehide',{persisted:false}));vi.restoreAllMocks();vi.useRealTimers();
});
