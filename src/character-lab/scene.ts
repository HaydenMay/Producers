import * as THREE from 'three';
import { RoundedBoxGeometry } from 'three/addons/geometries/RoundedBoxGeometry.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { disposeSource, makeLabCharacter } from './character';
import { watchContextRestoration } from './context';
import { generateLineup, type Traits } from './traits';
import { walkPose } from './walk';

export type DisplayMode='single'|'lineup'|'portrait'|'walk'|'desk';
export type Distance='close'|'game';
export type LabScene={setTraits:(traits:Traits)=>void;setSaved:(traits:Traits[])=>void;setMode:(mode:DisplayMode)=>void;setDistance:(distance:Distance)=>void;setWalking:(playing:boolean)=>void;rotate:(amount:number)=>void;rerollLineup:()=>void;dispose:()=>void};

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
 // Simple props for judging the seated pose; all rotate with the character.
 const workstation=new THREE.Group(),deskGeo=new THREE.BoxGeometry(1,1,1),wood=new THREE.MeshStandardMaterial({color:'#a76b42',roughness:.85}),dark=new THREE.MeshStandardMaterial({color:'#343a42',roughness:.8}),keys=new THREE.MeshStandardMaterial({color:'#d8d4c8',roughness:.85}),chairMat=new THREE.MeshStandardMaterial({color:'#56616c',roughness:.85});
 const prop=(material:THREE.Material,x:number,y:number,z:number,w:number,h:number,d:number)=>{const mesh=new THREE.Mesh(deskGeo,material);mesh.position.set(x,y,z);mesh.scale.set(w,h,d);mesh.castShadow=true;mesh.receiveShadow=true;workstation.add(mesh)};
 prop(wood,0,.71,.75,1.55,.10,.78);for(const x of [-.65,.65])for(const z of [.47,1.03])prop(wood,x,.32,z,.10,.64,.10);
 prop(keys,0,.78,.54,.92,.025,.24);prop(dark,.48,1.05,.96,.55,.40,.065);prop(dark,.48,.84,.96,.07,.20,.07);prop(dark,.48,.76,.96,.32,.025,.22);
 prop(chairMat,0,.43,-.08,.70,.12,.58);prop(chairMat,0,.77,-.34,.70,.65,.10);prop(chairMat,0,.18,-.08,.12,.38,.12);prop(chairMat,0,.04,-.08,.58,.08,.50);
 // The standing mesh has no knees, so the desk preview uses bent-leg pieces
 // sharing the character's pants and shoe materials. Standing legs stay intact.
 const seatedGeometry=new RoundedBoxGeometry(1,1,1,3,.12);
 const legPivot=people[0].group.getObjectByName('leg_l_pivot')!;
 let pantsMaterial:THREE.Material|undefined,shoeMaterial:THREE.Material|undefined;
 legPivot.traverse(obj=>{if(obj instanceof THREE.Mesh&&!Array.isArray(obj.material)){if(obj.material.name==='pants')pantsMaterial=obj.material;if(obj.material.name==='shoe')shoeMaterial=obj.material}});
 if(!pantsMaterial||!shoeMaterial)throw new Error('Character leg materials are missing');
 const seatedPart=(material:THREE.Material,x:number,y:number,z:number,w:number,h:number,d:number)=>{const mesh=new THREE.Mesh(seatedGeometry,material);mesh.position.set(x,y,z);mesh.scale.set(w,h,d);mesh.castShadow=true;mesh.receiveShadow=true;workstation.add(mesh)};
 for(const x of [-.18,.18]){seatedPart(pantsMaterial,x,.59,.20,.29,.24,.52);seatedPart(pantsMaterial,x,.29,.39,.29,.43,.27);seatedPart(shoeMaterial,x,.085,.45,.32,.17,.40)}
 workstation.visible=false;stands[0].add(workstation);
 let traits=initial,saved:Traits[]=[],mode:DisplayMode='single',distance:Distance='close',angle=0,castSeed='lineup-0',disposed=false,walking=false,animationId=0,phase=0,lastTime=0;
 const frame=()=>{
  if(disposed)return;
  const width=Math.max(container.clientWidth,1),height=Math.max(container.clientHeight,1),aspect=width/height;
  camera.position.set(5,mode==='portrait'?3.8:5.1,9);camera.lookAt(0,mode==='portrait'?1.58:1.12,0);camera.updateMatrixWorld();
  let vertical=mode==='portrait'?1.95:mode==='lineup'?Math.max(3.65,6.3/aspect):3.35;
  // Approximate the prior portrait office's 24.5-unit-tall camera at 844 CSS pixels.
  if(distance==='game' && mode!=='portrait')vertical=Math.max(vertical,24.5*height/844);
  camera.left=-vertical*aspect/2;camera.right=vertical*aspect/2;camera.top=vertical/2;camera.bottom=-vertical/2;camera.updateProjectionMatrix();
  renderer.setSize(width,height,false);renderer.render(scene,camera);
 };
 const updatePeople=()=>{
  const examples=generateLineup(traits,castSeed,saved);examples.forEach((x,i)=>people[i].update(x));
  stands.forEach((stand,i)=>{
   stand.visible=mode==='lineup'||i===0;
   stand.children[0].visible=mode!=='portrait'&&mode!=='desk';stand.children[1].visible=mode!=='portrait'&&mode!=='desk';
   const offset=mode==='lineup'?(i-1.5)*1.35:0;
   stand.position.copy(right).multiplyScalar(offset);people[i].group.rotation.y=angle;
  });for(const name of ['leg_l_pivot','leg_r_pivot'])people[0].group.getObjectByName(name)!.visible=mode!=='desk';workstation.visible=mode==='desk';workstation.rotation.y=angle;floor.visible=mode!=='portrait';floor.position.y=mode==='desk'?-.005:-.175;frame();
 };
 const resetPose=()=>{for(const name of ['leg_l_pivot','leg_r_pivot','arm_l_pivot','arm_r_pivot'])people[0].group.getObjectByName(name)!.rotation.x=0;people[0].group.position.y=0};
 const sitPose=(t:number)=>{const swing=Math.sin(t*2)*.035;for(const [name,value] of [['leg_l_pivot',-.95],['leg_r_pivot',-.95],['arm_l_pivot',-1.30+swing],['arm_r_pivot',-1.30-swing]] as const)people[0].group.getObjectByName(name)!.rotation.x=value;people[0].group.position.y=-.19};
 const animate=(time:number)=>{if(disposed||!walking||(mode!=='walk'&&mode!=='desk'))return;if(lastTime)phase+=(Math.min((time-lastTime)/1000,.05))*5;lastTime=time;if(mode==='desk'){sitPose(phase);frame();animationId=requestAnimationFrame(animate);return}const pose=walkPose(phase);for(const [name,value] of [['leg_l_pivot',pose.leftLeg],['leg_r_pivot',pose.rightLeg],['arm_l_pivot',pose.leftArm],['arm_r_pivot',pose.rightArm]] as const)people[0].group.getObjectByName(name)!.rotation.x=value;people[0].group.position.y=pose.bob;frame();animationId=requestAnimationFrame(animate)};
 const start=()=>{if(walking&&(mode==='walk'||mode==='desk')&&!animationId){lastTime=0;animationId=requestAnimationFrame(animate)}};
 const stop=()=>{cancelAnimationFrame(animationId);animationId=0;lastTime=0};
 const stopWatchingContext=watchContextRestoration(renderer.domElement,frame);
 const observer=new ResizeObserver(frame);observer.observe(container);updatePeople();
 return {
  setTraits(value){traits=value;updatePeople()},setSaved(value){saved=value;updatePeople()},setMode(value){stop();mode=value;resetPose();phase=0;if(mode==='desk')sitPose(0);updatePeople();start()},setDistance(value){distance=value;frame()},setWalking(value){walking=value;if(walking)start();else{stop();frame()}},
  rotate(amount){angle+=amount;updatePeople()},rerollLineup(){castSeed=`cast-${crypto.getRandomValues(new Uint32Array(1))[0]}`;updatePeople()},
  dispose(){if(disposed)return;disposed=true;stop();observer.disconnect();stopWatchingContext();people.forEach(p=>p.dispose());disposeSource(source);platformGeometry.dispose();rimGeometry.dispose();platformMaterial.dispose();rimMaterial.dispose();deskGeo.dispose();seatedGeometry.dispose();wood.dispose();dark.dispose();keys.dispose();chairMat.dispose();floor.geometry.dispose();(floor.material as THREE.Material).dispose();renderer.dispose();renderer.domElement.remove()}
 };
}
