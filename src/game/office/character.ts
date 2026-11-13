import * as THREE from 'three';
import { appearanceFor } from '../appearance';
import type { OfficeKit } from './kit';

export interface WorkerRig { head:THREE.Object3D; left:THREE.Object3D; right:THREE.Object3D; offset:number }
/** Origin is floor beneath the chair. The worker faces local -Z. */
export function seatedCharacter(kit:OfficeKit, id:string) {
  const group=new THREE.Group();const p=appearanceFor(id);const dark='#403e3e';
  const mesh=kit.mesh.bind(kit);
  mesh(group,'round',p.pants,0,.67,-.04,.61,.28,.48);
  for(const dx of [-.2,.2]) {mesh(group,'round',p.pants,dx,.51,-.23,.24,.25,.55);mesh(group,'round',dark,dx,.3,-.44,.25,.16,.35)}
  mesh(group,'round',p.shirt,0,1.03,.02,.66,.65,.38);
  const head=new THREE.Group();head.position.set(0,1.57,0);head.scale.setScalar(1.12);group.add(head);
  mesh(head,'round',p.skin,0,0,0,.58,.62,.54);
  mesh(head,'round',p.hair,0,.22,.04,.59,.23,.55);
  mesh(head,'round',p.hair,0,.05,.20,.56,.43,.17);
  for(const x of [-.29,.29])mesh(head,'sphere',p.skin,x,-.025,-.015,.065,.09,.065);
  if(p.hairStyle==='swept') {
    mesh(head,'round',p.hair,-.18,.16,-.16,.24,.18,.24);
    mesh(head,'round',p.hair,-.25,-.04,.11,.14,.40,.22);
  } else {mesh(head,'round',p.hair,0,.29,.04,.42,.10,.42)}
  for(const dx of [-.11,.11]){mesh(head,'sphere',dark,dx,.01,-.279,.029,.036,.017);mesh(head,'box',p.hair,dx,.10,-.28,.10,.025,.015)}
  mesh(head,'round',p.skin,0,-.055,-.292,.09,.075,.065);
  mesh(head,'box','#754d42',0,-.17,-.275,.11,.018,.015);
  if(p.hairStyle==='swept') {
    // A simple beard band adds a readable silhouette without a facial rig.
    mesh(head,'round',p.hair,0,-.235,-.19,.43,.12,.20);
    for(const x of [-.22,.22])mesh(head,'round',p.hair,x,-.16,-.16,.10,.20,.16);
  }
  function arm(x:number){const pivot=new THREE.Group();pivot.position.set(x,1.18,0);group.add(pivot);mesh(pivot,'round',p.shirt,0,-.10,-.08,.18,.30,.22);mesh(pivot,'round',p.shirt,0,-.13,-.32,.16,.16,.50);mesh(pivot,'sphere',p.skin,0,-.13,-.57,.09,.07,.10);return pivot}
  let hash=0;for(const c of id) hash=(Math.imul(hash,31)+c.charCodeAt(0))>>>0;
  const rig:WorkerRig={head,left:arm(-.4),right:arm(.4),offset:(hash%37)*.31};
  return {group,rig};
}
