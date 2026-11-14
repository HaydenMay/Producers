import { describe, expect, it } from 'vitest';
import { DEFAULT_TRAITS, generateTraits, parseTraits, serializeTraits, updateTrait } from '../../src/character-lab/traits';

describe('character identities',()=>{
 it('recreates a generated identity from its seed and produces varied combinations',()=>{
  expect(generateTraits('jeremy')).toEqual(generateTraits('jeremy'));
  const generated=Array.from({length:80},(_,i)=>generateTraits(`person-${i}`));
  for(const key of ['hairStyle','hairColor','skin','facialHair','shirt','pants'] as const)
   expect(new Set(generated.map(person=>person[key])).size).toBeGreaterThan(1);
 });
 it('updates one trait without changing the others',()=>{
  const next=updateTrait(DEFAULT_TRAITS,'shirt','red');
  expect(next.shirt).toBe('red');
  expect({...next,shirt:DEFAULT_TRAITS.shirt}).toEqual(DEFAULT_TRAITS);
 });
 it('round trips selected traits and safely rejects missing or unrecognized values',()=>{
  const saved=serializeTraits(updateTrait(DEFAULT_TRAITS,'hairStyle','curls'));
  expect(parseTraits(saved)?.hairStyle).toBe('curls');
  expect(parseTraits('{bad json')).toBeNull();
  expect(parseTraits('{"hairStyle":"missing"}')).toBeNull();
  expect(parseTraits(null)).toBeNull();
 });
});
