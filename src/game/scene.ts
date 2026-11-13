import * as THREE from 'three';
import type { Staff } from '../core/types';
import { OfficeKit } from './office/kit';
import { officeLayout, type SeatCount } from './office/layout';
import { makeRoom } from './office/room';
import { mergeStaticRoom } from './office/merge-static';
import { workstation } from './office/workstation';
import { animateWorkers } from './office/animation';
import { makeCamera, fitCamera, addLighting } from './office/view';

/** Scene is a view only. `?debug=1&seats=4|6|8` adds preview-only workers. */
export function createOffice(container:HTMLElement, staff:Staff[]) {
 const params=new URLSearchParams(window.location.search);
 const requested=Number(params.get('seats'));
 const count:SeatCount=params.get('debug')==='1' && [2,4,6,8].includes(requested) ? requested as SeatCount : 2;
 const layout=officeLayout(count), kit=new OfficeKit();
 const scene=new THREE.Scene();scene.background=new THREE.Color('#e9dfd0');
 const camera=makeCamera();
 const renderer=new THREE.WebGLRenderer({antialias:true,alpha:false,powerPreference:'low-power'});
 renderer.setPixelRatio(Math.min(devicePixelRatio,1.5));renderer.shadowMap.enabled=true;
 renderer.shadowMap.type=THREE.PCFSoftShadowMap;renderer.outputColorSpace=THREE.SRGBColorSpace;
 container.appendChild(renderer.domElement);addLighting(scene,layout);scene.add(mergeStaticRoom(kit,makeRoom(kit,layout)));
 const workers = layout.seats.map((seat,i)=>{
   const person=staff[i] ?? {...staff[i%staff.length],id:`preview-staff-${i}`};
   const station=workstation(kit,person);station.group.position.set(seat.x,0,seat.z);station.group.rotation.y=-Math.PI/2;scene.add(station.group);return station.rig;
 });
 let frame=0,working=false,disposed=false;
 const reduced=window.matchMedia('(prefers-reduced-motion: reduce)');
 let debug:HTMLElement|undefined;
 if(params.get('debug')==='1'){debug=document.createElement('output');debug.className='office-debug';container.appendChild(debug)}
 const render=(t:number)=>{
   frame=0;if(document.hidden||disposed)return;
   animateWorkers(workers,t,working&&!reduced.matches);renderer.render(scene,camera);
   if(debug){const info=renderer.info;debug.textContent=`Preview seats ${count} · draw calls ${info.render.calls} · triangles ${info.render.triangles} · pixel ratio ${renderer.getPixelRatio()}`}
   if(!reduced.matches)frame=requestAnimationFrame(render);
 };
 const refresh=()=>{if(!document.hidden&&!disposed&&!frame)frame=requestAnimationFrame(render)};
 const resize=()=>{const w=container.clientWidth,h=container.clientHeight;fitCamera(camera,w,h,layout);renderer.setSize(w,h,false);refresh()};
 const observer=new ResizeObserver(resize);observer.observe(container);resize();
 document.addEventListener('visibilitychange',refresh);reduced.addEventListener('change',refresh);
 return {
   setWorking(value:boolean){working=value;refresh()},
   dispose(){if(disposed)return;disposed=true;cancelAnimationFrame(frame);observer.disconnect();document.removeEventListener('visibilitychange',refresh);reduced.removeEventListener('change',refresh);kit.dispose();renderer.dispose();renderer.domElement.remove();debug?.remove()}
 };
}
