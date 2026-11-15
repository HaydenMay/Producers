import {describe,it,expect} from 'vitest';
import {splitCast} from '../../src/scene-lab/allocation';
describe('studio scene cast',()=>{it('assigns available desks and leaves only extra people without seats',()=>{for(let desks=1;desks<=6;desks++)for(let people=0;people<=6;people++){const a=splitCast(desks,people);expect(a.seated+a.walking).toBe(people);expect(a.seated).toBe(Math.min(desks,people));expect(a.walking).toBe(Math.max(0,people-desks))}})});
