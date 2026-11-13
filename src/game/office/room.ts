import * as THREE from 'three';
import type { OfficeKit } from './kit';
import type { OfficeLayout } from './layout';

/** Walls behind the camera target, Y=0 floor surface. Props face into the room (+Z). */
export function makeRoom(kit:OfficeKit, layout:OfficeLayout) {
 const root=new THREE.Group(), m=kit.mesh.bind(kit), w=layout.width,d=layout.depth;
 const dark='#342d30', wood='#8e5b3e', plaster='#acb1a6', trim='#7d5847', floor='#b9a18e';
 m(root,'round',dark,0,-.25,0,w+.22,.36,d+.22);
 m(root,'box',floor,0,-.04,0,w,.12,d);
 for(let x=-Math.floor(w/2);x<=w/2;x+=.8)m(root,'box','#a18b7f',x,.026,0,.014,.008,d-.1);
 for(let z=-Math.floor(d/2);z<=d/2;z+=.8)m(root,'box','#a18b7f',0,.027,z,w-.1,.008,.014);
 m(root,'box',plaster,0,1.5,-d/2,w,3,.16);m(root,'box','#78473d',-w/2,1.5,0,.16,3,d);
 // Recessed mortar on the dark terracotta feature wall; static parts batch by material.
 for(let row=1;row<12;row++) {
   const y=row*.25; m(root,'box','#965f50',-w/2+.087,y,0,.012,.015,d-.12);
   for(let z=-d/2+.35+(row%2)*.34;z<d/2-.1;z+=.68) m(root,'box','#965f50',-w/2+.09,y+.12,z,.013,.22,.014);
 }
 // Original studio identity sign, facing the room from the brick wall.
 const sign=new THREE.Group(); sign.position.set(-w/2+.11,2.05,0); sign.rotation.y=Math.PI/2;root.add(sign);
 m(sign,'round','#2b3035',0,0,0,3.35,1.05,.13);
 m(sign,'box','#c99d69',0,-.35,.075,2.8,.025,.02);
 // Bitmap lettering is geometry, so the sign needs no runtime font or texture.
 const letters:Record<string,string[]>={P:['11110','10001','11110','10000','10000'],R:['11110','10001','11110','10100','10010'],O:['01110','10001','10001','10001','01110'],D:['11110','10001','10001','10001','11110'],U:['10001','10001','10001','10001','01110'],C:['01111','10000','10000','10000','01111'],E:['11111','10000','11110','10000','11111'],S:['01111','10000','01110','00001','11110'],F:['11111','10000','11110','10000','10000'],I:['11111','00100','00100','00100','11111'],L:['10000','10000','10000','10000','11111'],M:['10001','11011','10101','10001','10001'],T:['11111','00100','00100','00100','00100'],' ':['00000','00000','00000','00000','00000']};
 function lettering(word:string,y:number,scale:number){const left=-(word.length*6-1)*scale/2;[...word].forEach((ch,i)=>letters[ch]?.forEach((line,row)=>[...line].forEach((on,col)=>{if(on==='1')m(sign,'box','#fff2d2',left+(i*6+col)*scale,y+(2-row)*scale,.09,scale*.85,scale*.85,.025)})))}
 lettering('PRODUCERS',.08,.038);lettering('FILM STUDIO',-.20,.018);
 // Matching framed illustrated film prints flank the sign on the brick wall.
 for(const z of [-2.45,2.45]) {
   const art=new THREE.Group();art.position.set(-w/2+.12,1.60,z);art.rotation.y=Math.PI/2;root.add(art);
   m(art,'round','#342f32',0,0,0,.86,1.20,.12);
   m(art,'box','#e4c29b',0,0,.07,.72,1.06,.03);
   m(art,'box',z<0?'#718797':'#b56557',0,.1,.09,.60,.78,.02);
   m(art,'box','#d78066',0,.11,.105,.60,.30,.02);
   m(art,'box','#e8ad77',0,-.04,.115,.60,.15,.02);
   m(art,'sphere','#f0cf91',0,.25,.12,.17,.17,.012);
   // Layered diagonal silhouettes form an original miniature landscape.
   for(const [sx,sy,angle] of [[-.15,-.13,-.65],[.15,-.15,.65]]) {const hill=m(art,'box','#484d56',sx,sy,.13,.46,.16,.02);hill.rotation.z=angle;}
   m(art,'box','#333f4a',0,-.25,.14,.60,.10,.02);
   m(art,'box','#d2aa80',0,-.43,.11,.34,.025,.02);
 }

 m(root,'box',trim,0,3.02,-d/2,w+.16,.1,.22);m(root,'box',trim,-w/2,3.02,0,.22,.1,d);
 m(root,'box','#8e6952',0,.14,-d/2+.1,w,.18,.08);m(root,'box','#8e6952',-w/2+.1,.14,0,.08,.18,d);
 // Window: wood frame, glass, sill, muntins and a softly coloured view.
 m(root,'round','#414d4b',0,1.9,-d/2+.11,3.6,1.8,.12);
 m(root,'box','#6fa9b5',0,1.9,-d/2+.19,3.12,1.46,.06);
 // Graphic, local-geometry view through the window: sky, buildings and trees.
 m(root,'box','#a7d2d4',0,2.28,-d/2+.225,3.02,.60,.014);
 m(root,'box','#e6b98f',0,1.68,-d/2+.23,3.02,.16,.015);
 for(const [x,h] of [[-1.28,.36],[-.94,.58],[-.58,.44],[-.18,.65],[.22,.40],[.62,.55],[1.04,.36],[1.34,.48]]) m(root,'box','#688d91',x,1.22+h/2,-d/2+.24,.23,h,.015);
 for(const x of [-1.20,1.18]) {
   m(root,'box','#876950',x,1.66,-d/2+.255,.045,.52,.02);
   for(let i=-2;i<=2;i++){const frond=m(root,'box','#55866e',x+i*.09,1.92-Math.abs(i)*.035,-d/2+.265,.26,.06,.02);frond.rotation.z=i*.20;}
 }
 for(const x of [-.77,0,.77])m(root,'box','#4d5a56',x,1.9,-d/2+.25,.075,1.46,.07);
 m(root,'box','#4d5a56',0,1.9,-d/2+.25,3.12,.07,.07);
 m(root,'round','#eee0c7',0,1.05,-d/2+.26,3.65,.12,.30);
 // Curated shelf, books and the small film-production board.
 const shelf=new THREE.Group();shelf.position.set(-w/2+1.05,0,-d/2+.55);root.add(shelf);
 m(shelf,'round',wood,0,.75,0,1.1,1.5,.68);m(shelf,'box','#785540',0,.77,.35,.93,1.24,.05);
 for(let i=0;i<3;i++){m(shelf,'box','#c99b6b',0,.35+i*.4,.36,.98,.06,.1);for(let j=0;j<3;j++)m(shelf,'box',['#698783','#b87861','#d4b575'][(i+j)%3],-.3+j*.3,.53+i*.4,.37,.17,.29,.08)}
 // A tiny award and film canister add film-studio identity at shelf height.
 m(shelf,'round','#4a403d',.28,1.53,0,.22,.07,.20);
 m(shelf,'cylinder','#e1b558',.28,1.64,0,.055,.20,.055);
 m(shelf,'sphere','#e5bf6d',.28,1.76,0,.10,.12,.10);
 const reel=m(shelf,'cylinder','#444e50',-.22,1.57,0,.17,.08,.17);reel.rotation.x=Math.PI/2;
 for(const dx of [-.06,.06])m(shelf,'sphere','#c0b49a',-.22+dx,1.57,.045,.022,.022,.009);
 const board=new THREE.Group();board.position.set(-2.55,1.92,-d/2+.12);root.add(board);
 m(board,'round',wood,0,0,0,1.55,1.0,.09);m(board,'box','#ccb091',0,0,.065,1.4,.85,.03);
 for(let i=0;i<3;i++){m(board,'box',['#dfbd72','#9fb5a2','#d49b89'][i],-.42+i*.42,.05+(i%2)*.12,.09,.3,.28,.02);m(board,'sphere','#c77c65',-.42+i*.42,.19+(i%2)*.12,.11,.025,.025,.01)}
 const poster=new THREE.Group();poster.position.set(2.23,1.9,-d/2+.12);root.add(poster);
 m(poster,'round',dark,0,0,0,.88,1.22,.09);m(poster,'box','#667e84',0,0,.06,.75,1.08,.03);m(poster,'sphere','#e3be80',0,.2,.09,.17,.17,.015);m(poster,'box','#eedbc0',0,-.28,.095,.42,.04,.02);
 // A simple clapperboard on the wall gives the office a production identity.
 const clap=new THREE.Group();clap.position.set(1.95,2.38,-d/2+.13);root.add(clap);
 m(clap,'round','#3e4647',0,0,0,.58,.45,.08);m(clap,'box','#ebe3cf',0,.14,.055,.51,.07,.02);
 for(const x of [-.19,0,.19]){const s=m(clap,'box','#ebe3cf',x,-.03,.055,.08,.16,.02);s.rotation.z=-.35}
 // Second modular bookcase with alternating folders on the window wall.
 // Compact editing cabinet beneath the poster, with recessed drawers.
 const cabinet=new THREE.Group();cabinet.position.set(2.35,0,-d/2+.38);root.add(cabinet);
 m(cabinet,'round','#596a6b',0,.54,0,.68,1.08,.55);
 for(let row=0;row<3;row++){m(cabinet,'round','#788785',0,.23+row*.30,.29,.57,.25,.035);m(cabinet,'round','#d1c6ac',0,.23+row*.30,.315,.17,.04,.02)}
 m(cabinet,'round','#d8c6a7',0,1.10,0,.58,.06,.42);
 const library=new THREE.Group();library.position.set(w/2-.62,0,-d/2+.47);root.add(library);
 m(library,'round',wood,0,.70,0,.98,1.4,.64);m(library,'box','#664839',0,.7,.33,.86,1.16,.035);
 for(let i=0;i<3;i++){m(library,'box','#c49668',0,.32+i*.38,.36,.88,.05,.08);for(let j=0;j<4;j++)m(library,'box',['#789187','#c37b61','#d4b16e','#5e7581'][(i+j)%4],-.3+j*.2,.48+i*.38,.37,.13,.27,.08)}
 const plant=new THREE.Group();plant.position.set(-w/2+.65,0,d/2-.68);root.add(plant);
 m(plant,'cylinder','#b8775f',0,.23,0,.25,.45,.25);m(plant,'box','#668462',0,.66,0,.10,.66,.10);
 for(let i=0;i<7;i++){const angle=i*Math.PI*2/7;const leaf=m(plant,'sphere',i%2?'#59836c':'#7a9b70',Math.sin(angle)*.23,.82+(i%2)*.14,Math.cos(angle)*.23,.16,.32,.12);leaf.rotation.z=-Math.sin(angle)*.65;leaf.rotation.x=Math.cos(angle)*.65}
 m(plant,'sphere','#91ac7d',0,1.08,0,.17,.28,.16);
 const deskPlant=new THREE.Group();deskPlant.position.set(w/2-.62,1.42,-d/2+.45);root.add(deskPlant);
 m(deskPlant,'cylinder','#e1ccae',0,.12,0,.14,.24,.14);
 m(deskPlant,'sphere','#63805d',0,.38,0,.27,.29,.23);m(deskPlant,'sphere','#80a078',-.14,.4,.04,.16,.2,.15);
 // Lounge vignette: a small sofa and low table, safely away from both desks.
 const lounge=new THREE.Group();lounge.position.set(w/2-.96,0,d/2-1.70);root.add(lounge);
 // An inset rug gives the meeting corner a visual boundary.
 m(lounge,'box','#7c9690',-.12,.04,.25,2.15,.012,2.65);
 for(const x of [-.92,.68])m(lounge,'box','#c6ceaf',x,.05,.25,.025,.008,2.45);
 m(lounge,'round','#b86e41',0,.44,0,1.75,.48,.75);m(lounge,'round','#ca804e',0,.85,-.30,1.75,.75,.20);
 for(const x of [-.79,.79])m(lounge,'round','#a65e3b',x,.66,.02,.18,.56,.82);
 for(const x of [-.38,.38])m(lounge,'round','#dc9962',x,.72,.01,.67,.16,.64);
 m(lounge,'round','#8e634c',0,.36,1.18,1.0,.12,.55);
 for(const x of [-.4,.4])for(const z of [1.0,1.36])m(lounge,'box','#5b443b',x,.18,z,.07,.36,.07);
 m(lounge,'round','#e8d9bd',0,.44,1.18,.5,.04,.28);
 // Two low-cost hanging task lamps; light is warm and casts no additional shadows.
 for(const x of [-2.6,2.6]) {
   m(root,'cylinder','#3d4141',x,3.0,-d/2+.75,.025,.65,.025);
   m(root,'cone','#3d4141',x,2.65,-d/2+.75,.31,.22,.31);
   const bulb=m(root,'sphere','#f4d083',x,2.55,-d/2+.75,.15,.08,.15);(bulb.material as THREE.MeshStandardMaterial).emissive.set('#bf7838');
 }
 return root;
}
