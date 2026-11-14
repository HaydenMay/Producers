// @vitest-environment jsdom
import { expect, it, vi } from 'vitest';
import { readSave, SAVE_KEY } from '../../src/game-preview/save';
vi.mock('../../src/scene-lab/scene',()=>({DEFAULTS:{},createSceneLab:vi.fn(async()=>({setSettings:vi.fn(),dispose:vi.fn()}))}));

it('keeps planning controls mounted while selections change, persist and start a valid movie', async () => {
  localStorage.clear();document.body.innerHTML='<div id="app"></div>';
  await import('../../src/game-preview/main');
  const el=<T extends HTMLElement>(q:string)=>document.querySelector<T>(q)!;
  el<HTMLButtonElement>('#menu-button').click();el<HTMLButtonElement>('[data-view=projects]').click();
  const genre=el<HTMLSelectElement>('#genre'),theme=el<HTMLSelectElement>('#theme'),crowd=el<HTMLInputElement>('input[value=crowd]'),body=el<HTMLElement>('#sheet-body');
  const change=(node:HTMLSelectElement|HTMLInputElement,value:string)=>{node.focus();if(node instanceof HTMLSelectElement)node.value=value;else node.checked=true;node.dispatchEvent(new Event('change',{bubbles:true}));expect(document.activeElement).toBe(node);};
  body.scrollTop=40;
  change(genre,'Comedy');expect(el('#genre')).toBe(genre);expect(el('#theme')).toBe(theme);expect(body.scrollTop).toBe(40);
  change(theme,'Spies');expect(el('#theme')).toBe(theme);
  change(genre,'Horror');expect(theme.value).toBe('Spies');
  change(theme,'Sports');change(genre,'Comedy');change(crowd,'crowd');expect(el('input[value=crowd]')).toBe(crowd);
  expect(el('.concept').textContent).toContain('Comedy · Sports · Crowd-pleaser');
  const saved=readSave(localStorage.getItem(SAVE_KEY)!);expect(saved.ok).toBe(true);
  if(saved.ok)expect(saved.ui).toEqual({genre:'Comedy',theme:'Sports',approach:'crowd'});
  el<HTMLButtonElement>('#close').click();el<HTMLButtonElement>('#menu-button').click();el<HTMLButtonElement>('[data-view=projects]').click();
  expect(el<HTMLSelectElement>('#genre').value).toBe('Comedy');expect(el<HTMLSelectElement>('#theme').value).toBe('Sports');
  expect(el<HTMLInputElement>('input[value=crowd]').checked).toBe(true);
  el<HTMLButtonElement>('[data-action=start]').click();
  const started=readSave(localStorage.getItem(SAVE_KEY)!);expect(started.ok).toBe(true);
  if(started.ok){expect(started.state.project?.genre).toBe('Comedy');expect(started.state.project?.theme).toBe('Sports');expect(started.state.project?.approach).toBe('crowd');}
  window.dispatchEvent(new PageTransitionEvent('pagehide',{persisted:false}));
});
