import { describe, expect, it } from 'vitest';
import { appearanceFor } from '../../src/game/appearance';

describe('worker appearance', () => {
  it('is stable for an identifier across repeated calls', () => {
    expect(appearanceFor('staff1')).toEqual(appearanceFor('staff1'));
  });
  it('gives the two initial staff different visible clothing and hair', () => {
    const first = appearanceFor('staff1');
    const second = appearanceFor('staff2');
    expect(first.shirt).not.toBe(second.shirt);
    expect(first.hairStyle).not.toBe(second.hairStyle);
  });
});
