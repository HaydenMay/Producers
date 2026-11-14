import {describe,it,expect} from 'vitest';
import {DEFAULT_TRAITS,generateTraits,hairColorsForSkin,updateTrait,parseTraits} from '../../src/character-lab/traits';
describe('coordinated hair and skin',()=>{it('limits options and repairs existing or generated combinations',()=>{
 for(const skin of ['tan','brown','deep'] as const){expect(hairColorsForSkin(skin)).not.toContain('blonde');expect(hairColorsForSkin(skin)).not.toContain('auburn')}
 expect(hairColorsForSkin('ivory')).not.toContain('silver');
 expect(updateTrait({...DEFAULT_TRAITS,hairColor:'blonde'},'skin','deep').hairColor).toBe('espresso');
 expect(parseTraits(JSON.stringify({...DEFAULT_TRAITS,skin:'ivory',hairColor:'silver'}))?.hairColor).toBe('espresso');
 for(let i=0;i<1000;i++){const t=generateTraits(String(i));expect(hairColorsForSkin(t.skin)).toContain(t.hairColor)}
})});
