// @vitest-environment jsdom
import { expect, it, vi } from 'vitest';
vi.mock('../../src/scene-lab/scene',()=>({DEFAULTS:{},createSceneLab:vi.fn(async()=>({setSettings:vi.fn(),dispose:vi.fn()}))}));

it('does not overwrite an unreadable slot when a background pause occurs', async () => {
  const key='producers.game-preview.save.v1';
  localStorage.clear();document.body.innerHTML='<div id="app"></div>';
  await import('../../src/game-preview/main');
  localStorage.setItem(key,'{invalid');
  window.dispatchEvent(new Event('blur'));
  expect(localStorage.getItem(key)).toBe('{invalid');
  window.dispatchEvent(new PageTransitionEvent('pagehide',{persisted:false}));
});
