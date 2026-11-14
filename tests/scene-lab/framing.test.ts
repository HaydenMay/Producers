import {describe,it,expect} from 'vitest';
import {movePan,portraitFraming} from '../../src/scene-lab/framing';
describe('portrait framing',()=>{it('prioritizes phone readability while preserving landscape framing',()=>{expect(portraitFraming(390/844)).toBeCloseTo(1.4);expect(portraitFraming(16/9)).toBe(1);expect(portraitFraming(.8)).toBeGreaterThan(1)});it('bounds both axes when dragging the scene',()=>{expect(movePan({x:0,y:0},99,-99)).toEqual({x:3.4,y:-2.5});expect(movePan({x:1,y:-1},-.5,.5)).toEqual({x:.5,y:-.5})})});
