import {describe,it,expect} from 'vitest';
import {splitCast} from '../../src/scene-lab/allocation';
describe('studio scene cast',()=>{it('assigns everyone and never overfills desks',()=>{for(let desks=1;desks<=6;desks++)for(let people=0;people<=6;people++){const a=splitCast(desks,people);expect(a.seated+a.walking).toBe(people);expect(a.seated).toBeLessThanOrEqual(desks);expect(a.walking).toBeGreaterThanOrEqual(people?1:0)}})});
