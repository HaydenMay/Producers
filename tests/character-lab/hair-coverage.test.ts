import { readFileSync } from 'node:fs';
import { describe,expect,it } from 'vitest';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { Mesh,Raycaster,Vector3 } from 'three';

describe('hairstyle coverage',()=>{
 it('covers the upper sides and back of the head while leaving the ears visible',async()=>{
  const bytes=readFileSync('src/character-lab/assets/worker-lab.glb');
  const scene=(await new GLTFLoader().parseAsync(bytes.buffer.slice(bytes.byteOffset,bytes.byteOffset+bytes.byteLength) as ArrayBuffer,'')).scene;
  scene.updateMatrixWorld(true);
  const head=scene.getObjectByName('head_pivot')!;
  const skin=head.children.find(child=>child instanceof Mesh && !Array.isArray(child.material) && child.material.name==='skin')!;
  expect(skin).toBeDefined();
  const ray=new Raycaster();
  for(const style of ['short','swept','curls','long']){
   const hair=scene.getObjectByName(`hair_${style}`)!;expect(hair).toBeDefined();
   const check=(origin:Vector3,direction:Vector3,label:string,expectHairFirst:boolean)=>{
    ray.set(origin,direction);const hairHit=ray.intersectObject(hair,true)[0],skinHit=ray.intersectObject(skin,true)[0];
    expect(skinHit,`${style} ${label}: no head hit`).toBeDefined();
    if(expectHairFirst){expect(hairHit,`${style} ${label}: exposed scalp`).toBeDefined();expect(hairHit.distance,`${style} ${label}: hair buried inside head`).toBeLessThan(skinHit.distance-.002)}
    else {
     expect(hairHit,`${style} ${label}: no surrounding hair`).toBeDefined();
     expect(Math.abs(skinHit.point.x),`${style} ${label}: ear is missing`).toBeGreaterThan(.46);
     expect(skinHit.distance,`${style} ${label}: ear hidden`).toBeLessThan(hairHit.distance-.002);
    }
   };
   for(const side of [-1,1]){
    for(const z of [-.25,-.12,0,.12,.23])check(new Vector3(side*2,1.94,z),new Vector3(-side,0,0),`side ${side} z=${z}`,true);
    for(const z of [-.22,-.12,.12,.22])check(new Vector3(side*2,1.70,z),new Vector3(-side,0,0),`lower side ${side} z=${z}`,true);
    if(style==='long')for(const z of [-.25,-.12,0,.12,.23])check(new Vector3(side*2,1.50,z),new Vector3(-side,0,0),`long side ${side} z=${z}`,true);
    check(new Vector3(side*2,1.765,0),new Vector3(-side,0,0),`ear ${side}`,false);
    check(new Vector3(side*2,1.94,-2),new Vector3(-side,0,1).normalize(),`rear diagonal ${side}`,true);
   }
   for(const x of [-.28,-.14,0,.14,.28])check(new Vector3(x,1.94,-2),new Vector3(0,0,1),`back x=${x}`,true);
  }
 });
});
