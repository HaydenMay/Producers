import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { RoundedBoxGeometry } from 'three/addons/geometries/RoundedBoxGeometry.js';
import { OfficeKit } from '../game/office/kit';
import { makeRoom } from '../game/office/room';
import { officeLayout } from '../game/office/layout';
import { makeLabCharacter,disposeSource } from '../character-lab/character';
import { DEFAULT_TRAITS,JUSTIN_TRAITS,generateTraits,type Traits } from '../character-lab/traits';
import { walkPose } from '../character-lab/walk';
import { crewPose,legTransition,stationPosition } from './crew-routine';
import { movePan,sceneFraming,type Pan } from './framing';

export type TimeOfDay='day'|'sunset'|'night';
export type Settings={time:TimeOfDay;desks:number;people:number;monitor:number;zoom:number;angle:number};
export const DEFAULTS:Settings={time:'day',desks:4,people:4,monitor:1.4,zoom:.8,angle:15};
export async function createSceneLab(container:HTMLElement, initialCast?:Traits[]){
 const renderer=new THREE.WebGLRenderer({antialias:true,powerPreference:'low-power'});renderer.setPixelRatio(Math.min(devicePixelRatio,1.5));renderer.outputColorSpace=THREE.SRGBColorSpace;renderer.toneMapping=THREE.ACESFilmicToneMapping;renderer.toneMappingExposure=1.15;renderer.shadowMap.enabled=true;renderer.shadowMap.type=THREE.PCFShadowMap;container.append(renderer.domElement);
 let source:THREE.Object3D;
 try{source=(await new GLTFLoader().loadAsync(new URL('../character-lab/assets/worker-lab.glb',import.meta.url).href)).scene}catch(e){renderer.dispose();renderer.domElement.remove();throw e}
 const scene=new THREE.Scene(),camera=new THREE.OrthographicCamera(-5,5,5,-5,.1,200),kit=new OfficeKit();
 const room=makeRoom(kit,officeLayout(2),{roundedWindowTrees:true});scene.add(room);
 const ambient=new THREE.HemisphereLight(0xfff4e5,0x777789,1.8);scene.add(ambient);
 const sun=new THREE.DirectionalLight(0xffe0b9,2.5);sun.position.set(-4,10,7);sun.castShadow=true;sun.shadow.mapSize.set(1024,1024);sun.shadow.camera.left=-8;sun.shadow.camera.right=8;sun.shadow.camera.top=8;sun.shadow.camera.bottom=-8;sun.shadow.normalBias=.025;scene.add(sun);
 // Place the warm light sources at the actual hanging fixtures.
 const lamps=[-2.6,2.6].map(x=>{const light=new THREE.PointLight(0xffba74,0,7,2);light.position.set(x,2.48,-2.65);scene.add(light);return light});
 const bulbs=kit.material('#f4d083');
 const traits:Traits[]=[DEFAULT_TRAITS,JUSTIN_TRAITS,{...DEFAULT_TRAITS,skin:'brown' as const,hairStyle:'curls' as const,hairColor:'black' as const,shirt:'green' as const,glasses:'square' as const,facialHair:'goatee' as const},{...DEFAULT_TRAITS,skin:'sand' as const,hairStyle:'short' as const,hairColor:'auburn' as const,shirt:'purple' as const,facialHair:'none' as const},...Array.from({length:2},(_,i)=>generateTraits(`scene-cast-${i}`))];
 if(initialCast)initialCast.slice(0,traits.length).forEach((trait,i)=>{traits[i]=trait});
 const people=traits.map(t=>makeLabCharacter(source,t));
 const geo=new THREE.BoxGeometry(1,1,1),round=new RoundedBoxGeometry(1,1,1,3,.12);
 const wood=new THREE.MeshStandardMaterial({color:'#a76b42',roughness:.85}),dark=new THREE.MeshStandardMaterial({color:'#343a42',roughness:.8}),keys=new THREE.MeshStandardMaterial({color:'#d8d4c8',roughness:.85}),chair=new THREE.MeshStandardMaterial({color:'#56616c',roughness:.85});
 const prop=(parent:THREE.Object3D,mat:THREE.Material,x:number,y:number,z:number,w:number,h:number,d:number,soft=false)=>{const o=new THREE.Mesh(soft?round:geo,mat);o.position.set(x,y,z);o.scale.set(w,h,d);o.castShadow=true;o.receiveShadow=true;parent.add(o);return o};
 const stations=people.map((person,i)=>{
  const root=new THREE.Group(),furniture=new THREE.Group(),chairGroup=new THREE.Group(),monitor=new THREE.Group(),seat=stationPosition(i);root.position.set(seat.x,0,seat.z);root.add(furniture);furniture.add(chairGroup);
  prop(furniture,wood,0,.71,.75,1.55,.10,.78);for(const x of [-.65,.65])for(const z of [.47,1.03])prop(furniture,wood,x,.32,z,.10,.64,.10);
  prop(furniture,keys,0,.78,.54,.92,.025,.24);monitor.position.set(0,.76,.96);prop(monitor,dark,0,.29,0,.55,.40,.065);prop(monitor,dark,0,.08,0,.07,.20,.07);prop(monitor,dark,0,0,0,.32,.025,.22);furniture.add(monitor);
  prop(chairGroup,chair,0,.43,-.08,.70,.12,.58,true);prop(chairGroup,chair,0,.77,-.34,.70,.65,.10,true);prop(chairGroup,chair,0,.18,-.08,.12,.38,.12);prop(chairGroup,chair,0,.04,-.08,.58,.08,.50);
  const leg=person.group.getObjectByName('leg_l_pivot')!;let pants:THREE.Material|undefined,shoe:THREE.Material|undefined;leg.traverse(o=>{if(o instanceof THREE.Mesh&&!Array.isArray(o.material)){if(o.material.name==='pants')pants=o.material;if(o.material.name==='shoe')shoe=o.material}});if(!pants||!shoe)throw new Error('Leg materials missing');
  const legs=new THREE.Group();root.add(legs);const pantsMaterial=pants,shoeMaterial=shoe;
  const legParts=[-.18,.18].map(x=>({thigh:prop(legs,pantsMaterial,x,.59,.20,.29,.24,.52,true),shin:prop(legs,pantsMaterial,x,.29,.39,.29,.43,.27,true),shoe:prop(legs,shoeMaterial,x,.085,.45,.32,.17,.40,true)}));
  const pivots={leftLeg:person.group.getObjectByName('leg_l_pivot')!,rightLeg:person.group.getObjectByName('leg_r_pivot')!,leftArm:person.group.getObjectByName('arm_l_pivot')!,rightArm:person.group.getObjectByName('arm_r_pivot')!};pivots.leftLeg.visible=pivots.rightLeg.visible=false;
  person.group.position.y=-.19;root.add(person.group);scene.add(root);return {root,furniture,chairGroup,monitor,person,legs,legParts,pivots};
 });
 let settings={...DEFAULTS},disposed=false,motionRunning=true,raf=0,last=0,clock=0;
 const reduced=matchMedia('(prefers-reduced-motion: reduce)');
 let pan:Pan={x:0,y:0};let pointer:{id:number;x:number;y:number}|undefined;
 const placeCamera=()=>{const rad=settings.angle*Math.PI/180;camera.position.set(Math.sin(rad)*30,18.3,Math.cos(rad)*30);camera.lookAt(0,.7,0);camera.translateX(pan.x);camera.translateY(pan.y);camera.updateMatrixWorld()};
 const resize=()=>{const w=Math.max(1,container.clientWidth),h=Math.max(1,container.clientHeight),aspect=w/h,vertical=Math.max(9.6,11.5/aspect)/(settings.zoom*sceneFraming(aspect));camera.left=-vertical*aspect/2;camera.right=vertical*aspect/2;camera.top=vertical/2;camera.bottom=-vertical/2;camera.updateProjectionMatrix();renderer.setSize(w,h,false)};
 function setSettings(next:Settings){settings={...next};const palettes={day:{background:'#e7ded0',sky:'#a7d2d4',horizon:'#e6b98f',window:'#6fa9b5',ambient:1.8,sun:2.5,lamp:0,glow:0,exposure:1.15},sunset:{background:'#e8cabb',sky:'#eaaa91',horizon:'#e4a16d',window:'#d58c87',ambient:1.4,sun:1.75,lamp:5,glow:.65,exposure:1.05},night:{background:'#303746',sky:'#394b70',horizon:'#77728d',window:'#344768',ambient:.8,sun:.45,lamp:16,glow:2.4,exposure:1.05}};const p=palettes[settings.time];scene.background=new THREE.Color(p.background);kit.material('#a7d2d4').color.set(p.sky);kit.material('#e6b98f').color.set(p.horizon);kit.material('#6fa9b5').color.set(p.window);ambient.intensity=p.ambient;sun.intensity=p.sun;lamps.forEach(light=>light.intensity=p.lamp);bulbs.emissiveIntensity=p.glow;renderer.toneMappingExposure=p.exposure;
  placeCamera();stations.forEach((station,i)=>{station.furniture.visible=i<settings.desks;station.monitor.scale.setScalar(settings.monitor)});applyCrewPoses(clock);resize();renderer.render(scene,camera);
 }
 function applyCrewPoses(time:number){
  stations.forEach(({root,chairGroup,person,legs,legParts,pivots},i)=>{
   const pose=crewPose(i,settings.desks,settings.people,reduced.matches?0:time),walking=pose.walking?walkPose(pose.stride):null;
   person.group.visible=pose.visible;person.group.position.set(pose.x-root.position.x,-.19*(1-pose.posture)+(walking?.bob??0)*pose.strideWeight,pose.z-root.position.z);person.group.rotation.y=pose.rotation;
   legs.visible=pose.visible&&i<settings.desks&&pose.posture<.999;legs.position.set(pose.x-root.position.x,0,pose.z-root.position.z);legs.rotation.y=pose.rotation;
   if(legs.visible){const shape=legTransition(pose.posture);for(const parts of legParts)for(const key of ['thigh','shin','shoe'] as const){const mesh=parts[key],part=shape[key];mesh.position.y=part.y;mesh.position.z=part.z;mesh.scale.y=part.height;mesh.scale.z=part.depth}}
   chairGroup.position.x=Math.sign(root.position.x)*.32*pose.posture;
   pivots.leftLeg.visible=pivots.rightLeg.visible=pose.posture>=.999;pivots.leftLeg.rotation.x=(walking?.leftLeg??0)*pose.strideWeight;pivots.rightLeg.rotation.x=(walking?.rightLeg??0)*pose.strideWeight;
   pivots.leftArm.rotation.x=walking?walking.leftArm*pose.strideWeight:-1.30*(1-pose.posture);pivots.rightArm.rotation.x=walking?walking.rightArm*pose.strideWeight:-1.30*(1-pose.posture);
   if(pose.phase==='seated'){const swing=Math.sin(time*9+i)*.035;pivots.leftArm.rotation.x=-1.30+swing;pivots.rightArm.rotation.x=-1.30-swing}
  });
 }
 function render(t:number){raf=0;if(disposed||document.hidden)return;if(last)clock+=Math.min((t-last)/1000,.05);last=t;
  applyCrewPoses(clock);
  renderer.render(scene,camera);if(motionRunning&&!reduced.matches)raf=requestAnimationFrame(render);
 }
 const pointerDown=(event:PointerEvent)=>{if(event.button!==0||pointer)return;pointer={id:event.pointerId,x:event.clientX,y:event.clientY};container.setPointerCapture(event.pointerId);container.classList.add('dragging')};
 const pointerMove=(event:PointerEvent)=>{if(!pointer||pointer.id!==event.pointerId)return;const w=Math.max(1,container.clientWidth),h=Math.max(1,container.clientHeight);pan=movePan(pan,-(event.clientX-pointer.x)*(camera.right-camera.left)/w,(event.clientY-pointer.y)*(camera.top-camera.bottom)/h);pointer.x=event.clientX;pointer.y=event.clientY;placeCamera();renderer.render(scene,camera)};
 const pointerEnd=(event:PointerEvent)=>{if(pointer?.id===event.pointerId){pointer=undefined;container.classList.remove('dragging')}};
 const keyPan=(event:KeyboardEvent)=>{const offsets:Record<string,[number,number]>={ArrowLeft:[-.4,0],ArrowRight:[.4,0],ArrowUp:[0,.4],ArrowDown:[0,-.4],Home:[0,0]};if(!(event.key in offsets))return;event.preventDefault();if(event.key==='Home')pan={x:0,y:0};else{const [x,y]=offsets[event.key];pan=movePan(pan,x,y)}placeCamera();renderer.render(scene,camera)};
 container.addEventListener('pointerdown',pointerDown);container.addEventListener('pointermove',pointerMove);container.addEventListener('pointerup',pointerEnd);container.addEventListener('pointercancel',pointerEnd);container.addEventListener('lostpointercapture',pointerEnd);container.addEventListener('keydown',keyPan);
 const restart=()=>{last=0;if(motionRunning&&!document.hidden&&!disposed&&!raf)raf=requestAnimationFrame(render)};const observer=new ResizeObserver(()=>{resize();renderer.render(scene,camera)});observer.observe(container);document.addEventListener('visibilitychange',restart);reduced.addEventListener('change',restart);setSettings(settings);restart();
 return {setSettings,staffScreenPosition(index:number){const station=stations[index];if(!station||!station.person.group.visible)return null;scene.updateMatrixWorld(true);const point=station.person.group.getObjectByName('head_pivot')!.getWorldPosition(new THREE.Vector3());point.y+=.7;point.project(camera);return {x:(point.x+1)*container.clientWidth/2,y:(1-point.y)*container.clientHeight/2}},setMotionRunning(value:boolean){if(disposed||motionRunning===value)return;motionRunning=value;last=0;if(!value){cancelAnimationFrame(raf);raf=0;renderer.render(scene,camera)}else restart()},resetView(){pan={x:0,y:0};placeCamera();renderer.render(scene,camera)},dispose(){disposed=true;cancelAnimationFrame(raf);container.removeEventListener('pointerdown',pointerDown);container.removeEventListener('pointermove',pointerMove);container.removeEventListener('pointerup',pointerEnd);container.removeEventListener('pointercancel',pointerEnd);container.removeEventListener('lostpointercapture',pointerEnd);container.removeEventListener('keydown',keyPan);observer.disconnect();document.removeEventListener('visibilitychange',restart);reduced.removeEventListener('change',restart);people.forEach(p=>p.dispose());disposeSource(source);kit.dispose();geo.dispose();round.dispose();wood.dispose();dark.dispose();keys.dispose();chair.dispose();renderer.dispose();renderer.domElement.remove()}};
}
