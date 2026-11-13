import { readFileSync } from 'node:fs';
import { describe, expect, it } from 'vitest';
import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { makeImportedStation, disposeModels } from '../../src/game/office/imported-station';

async function load(path:string) {
 const bytes=readFileSync(path);
 return (await new GLTFLoader().parseAsync(bytes.buffer.slice(bytes.byteOffset,bytes.byteOffset+bytes.byteLength) as ArrayBuffer,'')).scene;
}
describe('exported Blender models',()=>{
 it('keeps the runtime pivots and independently tinted regions in the actual GLBs',async()=>{
  const desk=await load('src/game/assets/workstation.glb'),worker=await load('src/game/assets/worker.glb');
  expect(desk.getObjectByName('desk_root')).toBeDefined();
  expect(desk.getObjectByName('chair_root')).toBeDefined();
  expect(worker.getObjectByName('worker_root')).toBeDefined();
  const a=makeImportedStation(desk,worker,'sam'),b=makeImportedStation(desk,worker,'alex');
  expect(a.rig.head.name).toBe('head_pivot');
  expect(a.rig.left.name).toBe('arm_l_pivot');
  expect(a.rig.right.name).toBe('arm_r_pivot');
  expect(a.group.getObjectByName('hair_swept')?.visible).not.toBe(b.group.getObjectByName('hair_swept')?.visible);
  const shirt=(group:THREE.Object3D)=>{let found:THREE.MeshStandardMaterial|undefined;group.traverse(o=>{if(o instanceof THREE.Mesh && !Array.isArray(o.material) && o.material.name==='shirt')found=o.material});return found};
  expect(shirt(a.group)).toBeDefined();expect(shirt(a.group)).not.toBe(shirt(b.group));
  expect(shirt(a.group)!.color.getHexString()).not.toBe(shirt(b.group)!.color.getHexString());
  a.ownedMaterials.forEach(m=>m.dispose());b.ownedMaterials.forEach(m=>m.dispose());disposeModels([desk,worker]);
 });
});
