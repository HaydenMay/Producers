import * as THREE from 'three';
import type { OfficeKit } from './kit';
import type { OfficeLayout } from './layout';

/** Walls behind the camera target, Y=0 floor surface. Props face into the room (+Z). */
export function makeRoom(kit:OfficeKit, layout:OfficeLayout) {
 const root=new THREE.Group(), m=kit.mesh.bind(kit), w=layout.width,d=layout.depth;
 const dark='#50433d', wood='#a87550', plaster='#dcc3a1', trim='#b9956f', floor='#d8bd98';
 m(root,'round',dark,0,-.25,0,w+.22,.36,d+.22);
 m(root,'box',floor,0,-.04,0,w,.12,d);
 for(let x=-Math.floor(w/2);x<=w/2;x++)m(root,'box','#bd9e7b',x,.026,0,.012,.008,d-.1);
 m(root,'box',plaster,0,1.5,-d/2,w,3,.16);m(root,'box','#c5aa88',-w/2,1.5,0,.16,3,d);
 m(root,'box',trim,0,3.02,-d/2,w+.16,.1,.22);m(root,'box',trim,-w/2,3.02,0,.22,.1,d);
 m(root,'box','#8e6952',0,.14,-d/2+.1,w,.18,.08);m(root,'box','#8e6952',-w/2+.1,.14,0,.08,.18,d);
 // Window: wood frame, glass, sill, muntins and a softly coloured view.
 m(root,'round',wood,0,1.9,-d/2+.11,3.4,1.72,.12);
 m(root,'box','#a8c7be',0,1.9,-d/2+.19,3.12,1.46,.06);
 m(root,'box','#7ba19d',0,1.48,-d/2+.23,3.02,.25,.02);
 m(root,'box','#e9dac4',0,1.9,-d/2+.25,.08,1.46,.07);
 m(root,'box','#e9dac4',0,1.9,-d/2+.25,3.12,.08,.07);
 m(root,'round','#eee0c7',0,1.05,-d/2+.26,3.65,.12,.30);
 // Curated shelf, books and the small film-production board.
 const shelf=new THREE.Group();shelf.position.set(-w/2+1.05,0,-d/2+.55);root.add(shelf);
 m(shelf,'round',wood,0,.75,0,1.1,1.5,.68);m(shelf,'box','#785540',0,.77,.35,.93,1.24,.05);
 for(let i=0;i<3;i++){m(shelf,'box','#c99b6b',0,.35+i*.4,.36,.98,.06,.1);for(let j=0;j<3;j++)m(shelf,'box',['#698783','#b87861','#d4b575'][(i+j)%3],-.3+j*.3,.53+i*.4,.37,.17,.29,.08)}
 const board=new THREE.Group();board.position.set(-2.55,1.92,-d/2+.12);root.add(board);
 m(board,'round',wood,0,0,0,1.55,1.0,.09);m(board,'box','#ccb091',0,0,.065,1.4,.85,.03);
 for(let i=0;i<3;i++)m(board,'box',['#dfbd72','#9fb5a2','#d49b89'][i],-.42+i*.42,.05+(i%2)*.12,.09,.3,.28,.02);
 const poster=new THREE.Group();poster.position.set(3.1,1.9,-d/2+.12);root.add(poster);
 m(poster,'round',dark,0,0,0,.88,1.22,.09);m(poster,'box','#667e84',0,0,.06,.75,1.08,.03);m(poster,'sphere','#e3be80',0,.2,.09,.17,.17,.015);m(poster,'box','#eedbc0',0,-.28,.095,.42,.04,.02);
 // A simple clapperboard on the wall gives the office a production identity.
 const clap=new THREE.Group();clap.position.set(1.95,2.38,-d/2+.13);root.add(clap);
 m(clap,'round','#3e4647',0,0,0,.58,.45,.08);m(clap,'box','#ebe3cf',0,.14,.055,.51,.07,.02);
 for(const x of [-.19,0,.19]){const s=m(clap,'box','#ebe3cf',x,-.03,.055,.08,.16,.02);s.rotation.z=-.35}
 const plant=new THREE.Group();plant.position.set(w/2-.65,0,-d/2+.65);root.add(plant);
 m(plant,'cylinder','#b8775f',0,.23,0,.25,.45,.25);m(plant,'sphere','#748e71',0,.76,0,.45,.53,.42);m(plant,'sphere','#8ba183',-.2,.83,.08,.25,.31,.25);
 return root;
}
