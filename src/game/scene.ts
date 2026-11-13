import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import type { Staff } from '../core/types';
import { OfficeKit } from './office/kit';
import { officeLayout, type SeatCount } from './office/layout';
import { makeRoom } from './office/room';
import { mergeStaticRoom } from './office/merge-static';
import { workstation } from './office/workstation';
import { animateWorkers } from './office/animation';
import { makeCamera, fitCamera, addLighting } from './office/view';
import { disposeModels, makeImportedStation } from './office/imported-station';

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
 renderer.shadowMap.type=THREE.PCFShadowMap;renderer.outputColorSpace=THREE.SRGBColorSpace;
 container.appendChild(renderer.domElement);addLighting(scene,layout);scene.add(mergeStaticRoom(kit,makeRoom(kit,layout)));
 const stations = layout.seats.map((seat,i)=>{
   const person=staff[i] ?? {...staff[i%staff.length],id:`preview-staff-${i}`};
   const station=workstation(kit,person);station.group.position.set(seat.x,0,seat.z);station.group.rotation.y=-Math.PI/2;scene.add(station.group);return { ...station, person };
 });
 const workers=stations.map(s=>s.rig);
 let frame=0,working=false,disposed=false;
 let sources:THREE.Object3D[]=[];
 const variantMaterials=new Set<THREE.Material>();
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
 // The procedural scene remains visible while both assets load, or if either fails.
 const loader=new GLTFLoader();
 Promise.allSettled([
   loader.loadAsync(new URL('./assets/workstation.glb',import.meta.url).href),
   loader.loadAsync(new URL('./assets/worker.glb',import.meta.url).href)
 ]).then(results=>{
   const loaded=results.flatMap(r=>r.status==='fulfilled'?[r.value.scene]:[]);
   if(disposed || results.some(r=>r.status==='rejected')){
     disposeModels(loaded);
     if(!disposed)console.warn('Authored office assets unavailable; using procedural fallback.',results);
     return;
   }
   sources=loaded;
   const replacements:ReturnType<typeof makeImportedStation>[]=[];
   try {
     for(const station of stations) replacements.push(makeImportedStation(loaded[0],loaded[1],station.person.id));
     replacements.forEach((replacement,i)=>{
       replacement.group.position.copy(stations[i].group.position);replacement.group.rotation.copy(stations[i].group.rotation);
       scene.remove(stations[i].group);scene.add(replacement.group);workers[i]=replacement.rig;
       replacement.ownedMaterials.forEach(m=>variantMaterials.add(m));
     });
     refresh();
   } catch(error) {
     replacements.forEach(r=>r.ownedMaterials.forEach(m=>m.dispose()));
     disposeModels(sources);sources=[];
     console.warn('Invalid authored office assets; using procedural fallback.',error);
   }
 });
 const resize=()=>{const w=container.clientWidth,h=container.clientHeight;fitCamera(camera,w,h,layout);renderer.setSize(w,h,false);refresh()};
 const observer=new ResizeObserver(resize);observer.observe(container);resize();
 document.addEventListener('visibilitychange',refresh);reduced.addEventListener('change',refresh);
 return {
   setWorking(value:boolean){working=value;refresh()},
   dispose(){if(disposed)return;disposed=true;cancelAnimationFrame(frame);observer.disconnect();document.removeEventListener('visibilitychange',refresh);reduced.removeEventListener('change',refresh);variantMaterials.forEach(m=>m.dispose());disposeModels(sources);kit.dispose();renderer.dispose();renderer.domElement.remove();debug?.remove()}
 };
}
