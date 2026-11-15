// @vitest-environment jsdom
import { expect, it, vi } from 'vitest';
import { STUDIO_WEEK_MS } from '../../src/game-preview/studio-clock';
const scene=vi.hoisted(()=>({resolve:null as null|((x:{setSettings:()=>void;dispose:()=>void})=>void)}));
vi.mock('../../src/scene-lab/scene',()=>({DEFAULTS:{},createSceneLab:()=>new Promise(resolve=>{scene.resolve=resolve})}));
it('does not resume a backgrounded studio when the scene finishes loading',async()=>{
 vi.useFakeTimers();vi.spyOn(document,'hasFocus').mockReturnValue(true);localStorage.clear();document.body.innerHTML='<div id="app"></div>';await import('../../src/game-preview/main');
 window.dispatchEvent(new Event('blur'));scene.resolve!({setSettings:()=>{},dispose:()=>{}});await Promise.resolve();await Promise.resolve();
 vi.advanceTimersByTime(16000);expect(document.querySelector('#date')!.textContent).toContain('Week 1');
 window.dispatchEvent(new Event('focus'));vi.advanceTimersByTime(STUDIO_WEEK_MS);expect(document.querySelector('#date')!.textContent).toContain('Week 2');
 window.dispatchEvent(new PageTransitionEvent('pagehide',{persisted:false}));vi.restoreAllMocks();vi.useRealTimers();
});
