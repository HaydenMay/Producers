import {describe,it,expect} from 'vitest';
import {movePan,sceneFraming} from '../../src/scene-lab/framing';
describe('portrait framing',()=>{it('prioritizes phone readability while keeping the studio prominent in landscape',()=>{expect(sceneFraming(390/844)).toBeCloseTo(1.68);expect(sceneFraming(16/9)).toBeCloseTo(1.1);expect(sceneFraming(.8)).toBeGreaterThan(1)});it('bounds both axes when dragging the scene',()=>{expect(movePan({x:0,y:0},99,-99)).toEqual({x:3.4,y:-2.5});expect(movePan({x:1,y:-1},-.5,.5)).toEqual({x:.5,y:-.5})})});
