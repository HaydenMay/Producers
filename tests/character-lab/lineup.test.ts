import { it,expect } from 'vitest';
import { DEFAULT_TRAITS, JUSTIN_TRAITS, generateLineup } from '../../src/character-lab/traits';
it('builds repeatable lineups with visible differences and preserves the selected person',()=>{
 for(const selected of [DEFAULT_TRAITS,JUSTIN_TRAITS])for(let seed=0;seed<8;seed++){
  const cast=generateLineup(selected,`cast-${seed}`);
  expect(cast).toHaveLength(4);expect(cast[0]).toEqual(selected);expect(cast).toEqual(generateLineup(selected,`cast-${seed}`));
  for(const key of ['hairStyle','shirt','facialHair','skin'] as const)expect(new Set(cast.map(person=>person[key])).size).toBeGreaterThanOrEqual(3);
 }
});
