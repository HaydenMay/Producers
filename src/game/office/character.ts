import * as THREE from 'three';
import { appearanceFor } from '../appearance';
import type { OfficeKit } from './kit';

export interface WorkerRig { head:THREE.Group; left:THREE.Group; right:THREE.Group; offset:number }
/** Origin is floor beneath the chair. The worker faces local -Z. */
export function seatedCharacter(kit:OfficeKit, id:string) {
  const group=new THREE.Group();const p=appearanceFor(id);const dark='#403e3e';
  const mesh=kit.mesh.bind(kit);
  mesh(group,'round',p.pants,0,.67,-.04,.61,.28,.48);
  for(const dx of [-.2,.2]) {mesh(group,'round',p.pants,dx,.51,-.23,.24,.25,.55);mesh(group,'round',dark,dx,.3,-.44,.25,.16,.35)}
  mesh(group,'round',p.shirt,0,1.03,.02,.66,.65,.38);
  const head=new THREE.Group();head.position.set(0,1.53,0);group.add(head);
  mesh(head,'round',p.skin,0,0,0,.58,.62,.54);
  mesh(head,'round',p.hair,0,.22,.04,.59,.23,.55);
  if(p.hairStyle==='swept') mesh(head,'round',p.hair,-.18,.16,-.16,.18,.14,.22);
  for(const dx of [-.11,.11])mesh(head,'sphere',dark,dx,.01,-.279,.027,.033,.014);
  function arm(x:number){const pivot=new THREE.Group();pivot.position.set(x,1.18,0);group.add(pivot);mesh(pivot,'round',p.shirt,0,-.13,-.12,.17,.18,.5);mesh(pivot,'sphere',p.skin,0,-.13,-.38,.09,.07,.1);return pivot}
  let hash=0;for(const c of id) hash=(Math.imul(hash,31)+c.charCodeAt(0))>>>0;
  const rig:WorkerRig={head,left:arm(-.4),right:arm(.4),offset:(hash%37)*.31};
  return {group,rig};
}
