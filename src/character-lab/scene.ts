import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { disposeSource, makeLabCharacter } from './character';
import { watchContextRestoration } from './context';
import { generateLineup, type Traits } from './traits';

export type DisplayMode='single'|'lineup';
export type Distance='close'|'game';
export type LabScene={setTraits:(traits:Traits)=>void;setSaved:(traits:Traits[])=>void;setMode:(mode:DisplayMode)=>void;setDistance:(distance:Distance)=>void;rotate:(amount:number)=>void;rerollLineup:()=>void;dispose:()=>void};

/** One renderer, shared geometry, and independently owned character colors. */
export async function createLabScene(container:HTMLElement, initial:Traits):Promise<LabScene>{
 const renderer=new THREE.WebGLRenderer({alpha:true,antialias:true,powerPreference:'low-power'});
 renderer.setPixelRatio(Math.min(window.devicePixelRatio,1.5));renderer.outputColorSpace=THREE.SRGBColorSpace;
 renderer.toneMapping=THREE.ACESFilmicToneMapping;renderer.toneMappingExposure=1.18;
 renderer.shadowMap.enabled=true;renderer.shadowMap.type=THREE.PCFShadowMap;container.appendChild(renderer.domElement);
 let source:THREE.Object3D;
 try{source=(await new GLTFLoader().loadAsync(new URL('./assets/worker-lab.glb',import.meta.url).href)).scene}
 catch(error){renderer.dispose();renderer.domElement.remove();throw error}
 const scene=new THREE.Scene(),camera=new THREE.OrthographicCamera(-2,2,2,-2,.1,100);
 camera.position.set(5,5.1,9);camera.lookAt(0,1.12,0);camera.updateMatrixWorld();
 scene.add(new THREE.HemisphereLight(0xfff4e6,0x78818e,1.8));
 const key=new THREE.DirectionalLight(0xffe3c1,2.8);key.position.set(-2,10,5);key.castShadow=true;key.shadow.mapSize.set(1024,1024);key.shadow.camera.left=-7;key.shadow.camera.right=7;key.shadow.camera.top=7;key.shadow.camera.bottom=-7;key.shadow.normalBias=.025;key.shadow.radius=5;scene.add(key);
 const fill=new THREE.DirectionalLight(0xd5e6ff,.65);fill.position.set(5,3,-4);scene.add(fill);
 const platformGeometry=new THREE.CylinderGeometry(.74,.78,.16,48),rimGeometry=new THREE.CylinderGeometry(.78,.78,.045,48);
 const platformMaterial=new THREE.MeshStandardMaterial({color:'#f3e4c9',roughness:.9}),rimMaterial=new THREE.MeshStandardMaterial({color:'#c99b5e',roughness:.7,metalness:.18});
 const floor=new THREE.Mesh(new THREE.PlaneGeometry(200,200),new THREE.ShadowMaterial({opacity:.10}));floor.rotation.x=-Math.PI/2;floor.position.y=-.175;floor.receiveShadow=true;scene.add(floor);
 const right=new THREE.Vector3(1,0,0).applyQuaternion(camera.quaternion).setY(0).normalize();
 const people:ReturnType<typeof makeLabCharacter>[]=[];
 try{for(let i=0;i<4;i++)people.push(makeLabCharacter(source,initial))}
 catch(error){
  people.forEach(person=>person.dispose());disposeSource(source);
  platformGeometry.dispose();rimGeometry.dispose();platformMaterial.dispose();rimMaterial.dispose();
  floor.geometry.dispose();(floor.material as THREE.Material).dispose();renderer.dispose();renderer.domElement.remove();throw error;
 }
 const stands=people.map(person=>{const g=new THREE.Group(),top=new THREE.Mesh(platformGeometry,platformMaterial),rim=new THREE.Mesh(rimGeometry,rimMaterial);top.position.y=-.08;rim.position.y=-.17;top.receiveShadow=true;g.add(top,rim,person.group);scene.add(g);return g});
 let traits=initial,saved:Traits[]=[],mode:DisplayMode='single',distance:Distance='close',angle=0,castSeed='lineup-0',disposed=false;
 const frame=()=>{
  if(disposed)return;
  const width=Math.max(container.clientWidth,1),height=Math.max(container.clientHeight,1),aspect=width/height;
  let vertical=mode==='single'?3.35:Math.max(3.65,6.3/aspect);
  // Approximate the prior portrait office's 24.5-unit-tall camera at 844 CSS pixels.
  if(distance==='game')vertical=Math.max(vertical,24.5*height/844);
  camera.left=-vertical*aspect/2;camera.right=vertical*aspect/2;camera.top=vertical/2;camera.bottom=-vertical/2;camera.updateProjectionMatrix();
  renderer.setSize(width,height,false);renderer.render(scene,camera);
 };
 const updatePeople=()=>{
  const examples=generateLineup(traits,castSeed,saved);examples.forEach((x,i)=>people[i].update(x));
  stands.forEach((stand,i)=>{
   stand.visible=mode==='lineup'||i===0;
   const offset=mode==='lineup'?(i-1.5)*1.35:0;
   stand.position.copy(right).multiplyScalar(offset);people[i].group.rotation.y=angle;
  });frame();
 };
 const stopWatchingContext=watchContextRestoration(renderer.domElement,frame);
 const observer=new ResizeObserver(frame);observer.observe(container);updatePeople();
 return {
  setTraits(value){traits=value;updatePeople()},setSaved(value){saved=value;updatePeople()},setMode(value){mode=value;updatePeople()},setDistance(value){distance=value;frame()},
  rotate(amount){angle+=amount;updatePeople()},rerollLineup(){castSeed=`cast-${crypto.getRandomValues(new Uint32Array(1))[0]}`;updatePeople()},
  dispose(){if(disposed)return;disposed=true;observer.disconnect();stopWatchingContext();people.forEach(p=>p.dispose());disposeSource(source);platformGeometry.dispose();rimGeometry.dispose();platformMaterial.dispose();rimMaterial.dispose();floor.geometry.dispose();(floor.material as THREE.Material).dispose();renderer.dispose();renderer.domElement.remove()}
 };
}
