import { readFileSync } from 'node:fs';
import { describe,expect,it } from 'vitest';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { Box3, Mesh, MeshStandardMaterial } from 'three';
import { makeLabCharacter,disposeSource } from '../../src/character-lab/character';
import { DEFAULT_TRAITS, JUSTIN_TRAITS } from '../../src/character-lab/traits';

describe('real modular character export',()=>{
 it('keeps separate selectable features and per-person materials',async()=>{
  const bytes=readFileSync('src/character-lab/assets/worker-lab.glb');
  const source=(await new GLTFLoader().parseAsync(bytes.buffer.slice(bytes.byteOffset,bytes.byteOffset+bytes.byteLength) as ArrayBuffer,'')).scene;
  for(const name of ['worker_root','head_pivot','arm_l_pivot','arm_r_pivot','leg_l_pivot','leg_r_pivot','hair_short','hair_swept','hair_curls','hair_long','facial_moustache','facial_goatee','facial_beard','glasses_square'])expect(source.getObjectByName(name),name).toBeDefined();
  const a=makeLabCharacter(source,DEFAULT_TRAITS),b=makeLabCharacter(source,JUSTIN_TRAITS);
  expect(new Box3().setFromObject(a.group).min.y).toBeCloseTo(0,2);
  expect(a.group.getObjectByName('hair_swept')?.visible).toBe(true);
  expect(a.group.getObjectByName('hair_short')?.visible).toBe(false);
  expect(b.group.getObjectByName('hair_short')?.visible).toBe(true);
  expect(a.group.getObjectByName('facial_beard')?.visible).toBe(true);
  expect(b.group.getObjectByName('facial_beard')?.visible).toBe(false);
  let shirtA:Mesh|undefined,shirtB:Mesh|undefined;
  a.group.traverse(o=>{if(o instanceof Mesh && !Array.isArray(o.material) && o.material.name==='shirt')shirtA=o});
  b.group.traverse(o=>{if(o instanceof Mesh && !Array.isArray(o.material) && o.material.name==='shirt')shirtB=o});
  expect(shirtA).toBeDefined();expect(shirtB).toBeDefined();expect(shirtA!.geometry).toBe(shirtB!.geometry);expect(shirtA!.material).not.toBe(shirtB!.material);
  expect((shirtA!.material as MeshStandardMaterial).color.getHex()).not.toBe((shirtB!.material as MeshStandardMaterial).color.getHex());
  const otherColor=(shirtB!.material as MeshStandardMaterial).color.getHex();
  a.update({...DEFAULT_TRAITS,hairStyle:'curls',shirt:'green'});
  expect(a.group.getObjectByName('hair_curls')?.visible).toBe(true);
  expect(a.group.getObjectByName('hair_swept')?.visible).toBe(false);
  expect((shirtB!.material as MeshStandardMaterial).color.getHex()).toBe(otherColor);
  a.dispose();b.dispose();disposeSource(source);
 });
});
