import * as THREE from 'three';
import { appearanceFor } from '../appearance';
import type { WorkerRig } from './character';

/** Clone transforms, but share source geometry. Every worker owns its tinted materials. */
export function makeImportedStation(desk:THREE.Object3D, worker:THREE.Object3D, id:string) {
  const group=new THREE.Group();
  group.add(desk.clone(true));
  const person=worker.clone(true), appearance=appearanceFor(id);
  const named=(name:string):THREE.Object3D=>{
    const result=person.getObjectByName(name);
    if(!result) throw new Error(`Missing worker node: ${name}`);
    return result;
  };
  const head=named('head_pivot'), left=named('arm_l_pivot'), right=named('arm_r_pivot');
  const swept=person.getObjectByName('hair_swept');
  if(swept) swept.visible=appearance.hairStyle==='swept';
  const ownedMaterials=new Set<THREE.Material>();
  const variants=new Map<THREE.Material,THREE.Material>();
  person.traverse(object=>{
    if(!(object instanceof THREE.Mesh)) return;
    object.castShadow=true;object.receiveShadow=true;
    const recolor=(material:THREE.Material)=>{
      const key=material.name as 'shirt'|'pants'|'skin'|'hair';
      if(!(key in appearance) || !(material instanceof THREE.MeshStandardMaterial)) return material;
      let clone=variants.get(material);
      if(!clone){clone=material.clone();(clone as THREE.MeshStandardMaterial).color.set(appearance[key]);variants.set(material,clone);ownedMaterials.add(clone)}
      return clone;
    };
    object.material=Array.isArray(object.material)?object.material.map(recolor):recolor(object.material);
  });
  group.traverse(o=>{if(o instanceof THREE.Mesh){o.castShadow=true;o.receiveShadow=true}});
  person.position.set(0,0,1.15);group.add(person);
  let hash=0;for(const c of id)hash=(Math.imul(hash,31)+c.charCodeAt(0))>>>0;
  const rig:WorkerRig={head,left,right,offset:(hash%37)*.31};
  return {group,rig,ownedMaterials};
}

/** Dispose each shared source resource once after all scene instances have gone. */
export function disposeModels(models:THREE.Object3D[]) {
  const geometries=new Set<THREE.BufferGeometry>(), materials=new Set<THREE.Material>();
  for(const model of models) model.traverse(o=>{if(o instanceof THREE.Mesh){geometries.add(o.geometry);for(const m of Array.isArray(o.material)?o.material:[o.material]) materials.add(m)}});
  geometries.forEach(g=>g.dispose());materials.forEach(m=>m.dispose());
}
