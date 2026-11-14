import * as THREE from 'three';
import type {OfficeKit} from '../game/office/kit';
import {mergeStaticRoom} from '../game/office/merge-static';

/** A quiet neighborhood around the cutaway, kept outside the playable room. */
export function makeSurroundings(kit:OfficeKit){
 const root=new THREE.Group(),m=kit.mesh.bind(kit);
 // The plinth sits on the ground; sidewalk and street extend past the camera.
 m(root,'box','#8faa98',0,-.52,0,70,.16,70);
 m(root,'box','#b9b4a5',0,-.42,3.95,32,.06,1.05);
 m(root,'box','#7e8d8a',0,-.45,5.7,70,.08,2.45);
 m(root,'box','#b9b4a5',0,-.42,7.35,32,.06,1.0);
 for(let x=-15;x<=15;x+=1.2)m(root,'box','#d0c8b3',x,-.38,7.35,.025,.012,.98);
 for(let x=-15;x<=15;x+=1.2)m(root,'box','#d0c8b3',x,-.38,3.95,.025,.012,1.02);
 for(let x=-14;x<=14;x+=2.5)m(root,'box','#e0d5bc',x,-.399,5.7,1.0,.012,.07);
 // Low buildings behind the studio imply a neighborhood without crowding it.
 const building=(x:number,z:number,w:number,h:number,color:string)=>{
  m(root,'round',color,x,-.40+h/2,z,w,h,1.65);
  m(root,'box','#777e76',x,-.36+h,z,w+.12,.10,1.75);
  m(root,'round','#a5a59a',x+w*.16,-.22+h,z,.55,.24,.50);
  m(root,'box','#6f827c',x-w*.25,-.28+h,z-.18,.38,.10,.34);
  const columns=Math.max(2,Math.floor(w/.8));
  for(let i=0;i<columns;i++)for(let row=0;row<2;row++){
   const wx=x+(i-(columns-1)/2)*(w-.4)/(columns-1),y=.04+row*.70;
   m(root,'box','#698c91',wx,y,z+.84,.42,.42,.035);
   m(root,'box','#dad1ba',wx,y-.23,z+.87,.49,.045,.06);
  }
 };
 building(-4.8,-5.35,2.7,2.0,'#c5ae95');building(-1.2,-5.65,3.6,2.5,'#b7b3a2');building(3.0,-5.35,3.5,1.95,'#cbb8a0');
 building(-6.6,-8.3,3.1,1.6,'#b6b3a5');building(-2.7,-8.8,3.1,1.8,'#c1bba9');building(1.3,-8.8,3.1,1.55,'#b6b3a5');building(5.2,-8.4,3.0,1.7,'#c1bba9');
 // Street trees and palms frame the office instead of covering its interior.
 const tree=(x:number,z:number,palm:boolean)=>{
  m(root,'cylinder','#846950',x,.18,z,.10,1.25,.10);
  if(palm){for(let i=0;i<6;i++){const a=i*Math.PI/3,leaf=m(root,'round',i%2?'#62896e':'#7b9b77',x+Math.sin(a)*.35,.92,z+Math.cos(a)*.35,.16,.12,.75);leaf.rotation.y=a;leaf.rotation.x=.2}}
  else{for(const [dx,dy,dz] of [[0,0,0],[-.24,-.12,.07],[.23,-.13,-.04],[0,-.16,.22]])m(root,'sphere','#789777',x+dx,1.03+dy,z+dz,.34,.32,.34)}
 };
 for(const [x,z,palm] of [[-5.15,3.65,true],[-5.15,-1.0,false],[5.35,-2.4,true],[5.35,.6,false],[5.35,3.6,true],[-4.7,8.1,false],[.3,8.3,true],[5,8.15,false],[-6.6,-5.2,false],[6.6,-5.3,true]] as const)tree(x,z,palm);
 // A compact parked car and street lamps add scale without animation or traffic.
 m(root,'round','#b67d68',-6.6,-.10,5.55,1.7,.50,.80);m(root,'round','#d7c5a9',-6.65,.22,5.55,.86,.30,.68);
 for(const x of [-7.1,-6.1])for(const z of [5.16,5.94]){const wheel=m(root,'cylinder','#4c5555',x,-.32,z,.18,.10,.18);wheel.rotation.x=Math.PI/2}
 for(const x of [-7,7]){m(root,'cylinder','#747a71',x,.60,4.35,.045,2.0,.045);m(root,'round','#747a70',x,1.6,4.35,.48,.10,.16);m(root,'sphere','#f1d3a0',x,1.50,4.35,.11,.10,.11)}
 return mergeStaticRoom(kit,root);
}
