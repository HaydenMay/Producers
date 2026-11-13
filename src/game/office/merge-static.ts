import * as THREE from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';
import type { OfficeKit } from './kit';

/** Batch static room meshes by material; animated workstations stay independent. */
export function mergeStaticRoom(kit:OfficeKit, room:THREE.Group) {
  room.updateMatrixWorld(true);
  const grouped=new Map<THREE.Material, THREE.BufferGeometry[]>();
  room.traverse(node=>{
    if (!(node instanceof THREE.Mesh) || Array.isArray(node.material)) return;
    const geometry=node.geometry.clone();geometry.applyMatrix4(node.matrixWorld);
    const list=grouped.get(node.material) ?? [];list.push(geometry);grouped.set(node.material,list);
  });
  const result=new THREE.Group();
  for (const [material,parts] of grouped) {
    const merged=mergeGeometries(parts);for(const g of parts)g.dispose();
    if(!merged) throw new Error('Static room meshes could not be merged');
    const mesh=new THREE.Mesh(kit.own(merged),material);mesh.castShadow=true;mesh.receiveShadow=true;result.add(mesh);
  }
  return result;
}
