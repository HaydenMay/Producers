// @vitest-environment jsdom
import { expect, it, vi } from 'vitest';
import { PrototypeGame } from '../../src/game/game';
import { readSave, SAVE_KEY } from '../../src/game-preview/save';
import type { Choices } from '../../src/core/types';
vi.mock('../../src/scene-lab/scene',()=>({DEFAULTS:{},createSceneLab:vi.fn(async()=>({setSettings:vi.fn(),dispose:vi.fn()}))}));

it('chooses a valid theme once if another genre no longer offers the current one',async()=>{
  const getter=Object.getOwnPropertyDescriptor(PrototypeGame.prototype,'choices')!.get!;
  const spy=vi.spyOn(PrototypeGame.prototype,'choices','get').mockImplementation(function(this:PrototypeGame){
    const choices:Choices=getter.call(this);
    return {...choices,options:choices.options.filter(d=>d.type!=='plan'||d.genre!=='Horror'||d.theme==='Zombies')};
  });
  localStorage.clear();document.body.innerHTML='<div id="app"></div>';await import('../../src/game-preview/main');
  const el=<T extends HTMLElement>(q:string)=>document.querySelector<T>(q)!;
  el<HTMLButtonElement>('#menu-button').click();el<HTMLButtonElement>('[data-view=projects]').click();
  const genre=el<HTMLSelectElement>('#genre'),theme=el<HTMLSelectElement>('#theme');
  theme.value='Spies';theme.dispatchEvent(new Event('change',{bubbles:true}));
  genre.value='Horror';genre.dispatchEvent(new Event('change',{bubbles:true}));
  expect(el('#genre')).toBe(genre);expect(el('#theme')).toBe(theme);
  expect(theme.value).toBe('Zombies');expect([...theme.options].map(o=>o.value)).toEqual(['Zombies']);
  const saved=readSave(localStorage.getItem(SAVE_KEY)!);expect(saved.ok&&saved.ui.theme).toBe('Zombies');
  el<HTMLButtonElement>('[data-action=start]').click();
  const started=readSave(localStorage.getItem(SAVE_KEY)!);expect(started.ok&&started.state.project?.genre).toBe('Horror');expect(started.ok&&started.state.project?.theme).toBe('Zombies');
  window.dispatchEvent(new PageTransitionEvent('pagehide',{persisted:false}));spy.mockRestore();
});
