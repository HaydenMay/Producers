// @vitest-environment jsdom
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

vi.mock('../../src/game/scene', () => ({ createOffice: () => ({ setWorking: () => {}, dispose: () => {} }) }));
describe('prototype playback controls', () => {
  beforeEach(() => {
    vi.useFakeTimers(); vi.resetModules();
    document.body.innerHTML = '<div id="app"></div>';
    window.matchMedia = vi.fn().mockReturnValue({ matches:false, addEventListener:vi.fn(), removeEventListener:vi.fn() });
  });
  afterEach(() => vi.useRealTimers());
  it('pauses for casting even when the decision is dismissed, resumes after selection, and stops on release', async () => {
    await import('../../src/game/main');
    const click = (selector: string) => (document.querySelector(selector) as HTMLButtonElement).click();
    const text = () => document.body.textContent ?? '';
    click('#start'); expect(text()).toContain('WEEK 0');
    vi.advanceTimersByTime(1300); expect(text()).toContain('WEEK 1');
    click('#play'); vi.advanceTimersByTime(5000); expect(text()).toContain('WEEK 1');
    const speed = document.querySelector('#speed') as HTMLSelectElement;
    speed.value='4'; speed.dispatchEvent(new Event('change')); click('#play');
    vi.advanceTimersByTime(5000); expect(text()).toContain('Choose your star'); expect(text()).toContain('WEEK 12');
    click('#later'); vi.advanceTimersByTime(10000); expect(text()).toContain('WEEK 12');
    click('#show'); click('[data-choice="0"]'); vi.advanceTimersByTime(5000); expect(text()).toContain('Choose a distributor');
    click('[data-choice="0"]'); vi.advanceTimersByTime(5000); expect(text()).toContain('FILM RELEASED'); expect(text()).toContain('WEEK 30');
    vi.advanceTimersByTime(10000); expect(text()).toContain('WEEK 30');
    click('#close-result'); expect(text()).toContain('No movie is currently available');
  });
});
