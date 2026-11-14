import * as THREE from 'three';
import type {OfficeKit} from '../game/office/kit';
import {mergeStaticRoom} from '../game/office/merge-static';

/** Quiet, original scenery frames the office without competing with it. */
export function makeSurroundings(kit:OfficeKit){
 const root=new THREE.Group(),m=kit.mesh.bind(kit);
 m(root,'box','#8eaf9d',0,-.52,0,180,.16,180);
 // A restrained sidewalk and street provide context at the front of the cutaway.
 m(root,'box','#c1b9a9',0,-.42,3.94,32,.06,1.0);
 m(root,'box','#899390',0,-.45,5.12,100,.08,1.45);
 m(root,'box','#c1b9a9',0,-.42,6.24,32,.06,.8);
 for(let x=-15;x<=15;x+=1.8){m(root,'box','#cbc4b6',x,-.38,3.94,.02,.01,.98);m(root,'box','#cbc4b6',x,-.38,6.24,.02,.01,.78)}
 for(let x=-14;x<=14;x+=3.4)m(root,'box','#ccc8b6',x,-.399,5.12,.8,.01,.045);
 // Three different, low-contrast silhouettes, pushed behind the studio wall.
 // Small single-story workshop with a broad canopy.
 m(root,'round','#bab6a8',-5.35,.20,-7.35,2.55,1.20,1.8);
 m(root,'box','#92998e',-5.35,.85,-7.35,2.68,.11,1.95);
 m(root,'box','#a7aa9b',-5.35,.48,-6.39,2.22,.09,.28);
 m(root,'box','#698c91',-5.75,.23,-6.42,.50,.42,.03);
 m(root,'box','#698c91',-4.95,.23,-6.42,.50,.42,.03);
 // Taller stepped roofline, with a few broad windows rather than a grid.
 m(root,'round','#b6b9ab',-1.75,.48,-7.75,3.1,1.76,1.65);
 m(root,'box','#92998e',-1.75,1.40,-7.75,3.20,.10,1.75);
 m(root,'box','#a2a99c',-2.45,1.60,-7.88,1.30,.35,1.15);
 m(root,'box','#698c91',-2.45,.46,-6.91,.70,.47,.03);
 m(root,'box','#698c91',-1.10,.46,-6.91,.70,.47,.03);
 // Low building with a recessed entrance and a gently pitched roof.
 m(root,'round','#bfb9a9',2.15,.12,-7.48,2.8,1.05,1.65);
 m(root,'box','#969c91',2.15,.68,-7.48,2.92,.10,1.76);
 const roofLeft=m(root,'box','#969c91',1.43,.87,-7.48,1.57,.09,1.82);roofLeft.rotation.z=.22;
 const roofRight=m(root,'box','#969c91',2.87,.87,-7.48,1.57,.09,1.82);roofRight.rotation.z=-.22;
 m(root,'box','#698c91',1.64,.19,-6.63,.62,.38,.03);
 m(root,'box','#92998e',2.70,.02,-6.62,.38,.75,.03);
 // One cohesive family of soft, rounded trees with subtle size/color variation.
 const tree=(x:number,z:number,scale:number,color:string)=>{
  m(root,'cylinder','#84715b',x,.12*scale-.12,z,.095*scale,1.04*scale,.095*scale);
  for(const [dx,dy,dz,r] of [[0,.86,0,.37],[-.24,.73,.03,.28],[.23,.74,-.05,.30],[.04,.70,.20,.27]])
   m(root,'sphere',color,x+dx*scale,-.38+dy*scale,z+dz*scale,r*scale,r*.88*scale,r*scale);
 };
 tree(-5.2,2.6,1.05,'#78977c');tree(5.25,2.7,1.12,'#829d80');tree(5.5,-1.85,.78,'#78977c');tree(-5.5,-3.75,.72,'#90a58b');tree(-4.9,7.0,.70,'#829d80');tree(5.4,7.0,.68,'#90a58b');
 // A single understated street lamp helps establish scale.
 m(root,'cylinder','#858b7f',6.5,.52,3.85,.04,1.85,.04);
 m(root,'round','#858b80',6.5,1.46,3.85,.42,.09,.15);
 m(root,'sphere','#f1d3a0',6.5,1.38,3.85,.09,.08,.09);
 return mergeStaticRoom(kit,root);
}
