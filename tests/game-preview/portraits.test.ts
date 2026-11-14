import { expect, it } from 'vitest';
import { generateTraits } from '../../src/character-lab/traits';
import { portraitTraits } from '../../src/game-preview/portraits';

it('uses the studio employee identity and stable separate Star identities',()=>{
 expect(portraitTraits('staff','staff1')).toEqual(generateTraits('staff-staff1'));
 expect(portraitTraits('star','star1')).toEqual(generateTraits('star-star1'));
 expect(portraitTraits('star','star1')).toEqual(portraitTraits('star','star1'));
});
