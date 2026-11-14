import * as THREE from 'three';
import { FACIAL_HAIR, HAIR_COLORS, HAIR_STYLES, PANTS_COLORS, SHIRT_COLORS, SKIN_COLORS, type Traits } from './traits';

/** Each instance owns its changing colors and transforms; the source owns geometry. */
export function makeLabCharacter(source:THREE.Object3D, initial:Traits) {
 const group=source.clone(true), changed=new Map<string,THREE.MeshStandardMaterial>(), owned=new Set<THREE.Material>();
 const required=['worker_root','head_pivot','arm_l_pivot','arm_r_pivot','leg_l_pivot','leg_r_pivot',...HAIR_STYLES.filter(x=>x!=='bald').map(x=>`hair_${x}`),...FACIAL_HAIR.filter(x=>x!=='none').map(x=>`facial_${x}`),'glasses_square'];
 for(const name of required)if(!group.getObjectByName(name))throw new Error(`Character asset is missing ${name}`);
 group.traverse(object=>{
  if(!(object instanceof THREE.Mesh))return;
  object.castShadow=true;object.receiveShadow=true;
  const clone=(material:THREE.Material)=>{
   if(!(material instanceof THREE.MeshStandardMaterial) || !['skin','shirt','pants','hair'].includes(material.name))return material;
   let copy=changed.get(material.name);if(!copy){copy=material.clone();changed.set(material.name,copy);owned.add(copy)}
   return copy;
  };
  object.material=Array.isArray(object.material)?object.material.map(clone):clone(object.material);
 });
 for(const region of ['skin','shirt','pants','hair'])if(!changed.has(region)){owned.forEach(m=>m.dispose());throw new Error(`Character asset is missing ${region} material`)}
 const update=(traits:Traits)=>{
  for(const style of HAIR_STYLES){const part=group.getObjectByName(`hair_${style}`);if(part)part.visible=style===traits.hairStyle}
  for(const style of FACIAL_HAIR){const part=group.getObjectByName(`facial_${style}`);if(part)part.visible=style===traits.facialHair}
  group.getObjectByName('glasses_square')!.visible=traits.glasses==='square';
  changed.get('hair')!.color.set(HAIR_COLORS[traits.hairColor]);changed.get('skin')!.color.set(SKIN_COLORS[traits.skin]);
  changed.get('shirt')!.color.set(SHIRT_COLORS[traits.shirt]);changed.get('pants')!.color.set(PANTS_COLORS[traits.pants]);
 };
 update(initial);
 return {group,update,dispose(){owned.forEach(m=>m.dispose());owned.clear()}};
}
export function disposeSource(source:THREE.Object3D){
 const geometries=new Set<THREE.BufferGeometry>(),materials=new Set<THREE.Material>();
 source.traverse(o=>{if(o instanceof THREE.Mesh){geometries.add(o.geometry);(Array.isArray(o.material)?o.material:[o.material]).forEach(m=>materials.add(m))}});
 geometries.forEach(g=>g.dispose());materials.forEach(m=>m.dispose());
}
