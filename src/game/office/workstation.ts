import * as THREE from 'three';
import type { Staff } from '../../core/types';
import { seatedCharacter } from './character';
import type { OfficeKit } from './kit';

/** The whole workstation has floor origin at desktop center, facing local -Z. */
export function workstation(kit:OfficeKit, person:Staff) {
  const group=new THREE.Group(), mesh=kit.mesh.bind(kit);
  const wood='#a76f4d', edge='#80553f', iron='#494b4d', cream='#eee2c8', screen='#617d80';
  mesh(group,'round',wood,0,.92,0,2.25,.16,1.3);
  mesh(group,'round',edge,0,.82,0,2.12,.08,1.22);
  // Solid pedestal legs and a modesty panel give the desk a designed silhouette.
  for(const x of [-.91,.91]) {mesh(group,'round',edge,x,.43,-.04,.24,.82,1.12);mesh(group,'box','#b47b56',x,.45,.535,.22,.55,.025)}
  mesh(group,'box',wood,0,.55,-.47,1.7,.52,.08);
  mesh(group,'round',iron,-.18,1.13,-.30,.11,.35,.10);
  mesh(group,'round',iron,-.18,1.43,-.30,.95,.60,.11);
  mesh(group,'round',screen,-.18,1.43,-.235,.82,.48,.025);
  mesh(group,'round',cream,0,1.02,.32,.8,.04,.23);
  for(let i=-3;i<=3;i++) mesh(group,'box','#cfc4ae',i*.09,1.045,.30,.055,.008,.12);
  mesh(group,'cylinder',iron,.86,1.05,-.36,.14,.05,.14);
  mesh(group,'box',iron,.86,1.24,-.36,.035,.38,.035);
  mesh(group,'cylinder',iron,.86,1.44,-.36,.17,.1,.17);
  mesh(group,'sphere','#e7be74',.86,1.38,-.36,.10,.05,.10);
  mesh(group,'cylinder','#c77f6b',-.84,1.09,.29,.09,.14,.09);
  mesh(group,'round',cream,.64,1.02,.3,.26,.035,.2);
  mesh(group,'round','#728e8b',.64,1.045,.3,.20,.01,.14);
  mesh(group,'round','#e9dac4',.64,1.06,.30,.16,.01,.10);
  mesh(group,'round','#6d8586',0,.53,1.25,.8,.15,.75);
  mesh(group,'round','#6d8586',0,.92,1.58,.8,.8,.14);
  mesh(group,'box',iron,0,.27,1.25,.14,.54,.14);
  const worker=seatedCharacter(kit,person.id); worker.group.position.set(0,0,1.15);group.add(worker.group);
  return {group,rig:worker.rig};
}
