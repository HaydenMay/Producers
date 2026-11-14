import { it,expect } from 'vitest';
import { DEFAULT_TRAITS, JUSTIN_TRAITS, parseSavedLooks, saveLook, generateLineup } from '../../src/character-lab/traits';
it('saves named looks independently and restores them for a lineup',()=>{
 const saved=saveLook([], 'Jeremy',DEFAULT_TRAITS);
 const both=saveLook(saved,'Justin',JUSTIN_TRAITS);
 expect(parseSavedLooks(JSON.stringify(both))).toEqual(both);
 expect(generateLineup(DEFAULT_TRAITS,'seed',both.map(item=>item.traits))[1]).toEqual(JUSTIN_TRAITS);
 expect(parseSavedLooks('{bad')).toEqual([]);
 expect(parseSavedLooks('[{"name":"broken","traits":{"skin":"impossible"}}]')).toEqual([]);
});
