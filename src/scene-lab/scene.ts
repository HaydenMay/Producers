import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { RoundedBoxGeometry } from 'three/addons/geometries/RoundedBoxGeometry.js';
import { OfficeKit } from '../game/office/kit';
import { makeRoom } from '../game/office/room';
import { officeLayout } from '../game/office/layout';
import { makeLabCharacter,disposeSource } from '../character-lab/character';
import { DEFAULT_TRAITS,JUSTIN_TRAITS,generateTraits } from '../character-lab/traits';
import { walkPose } from '../character-lab/walk';
import { splitCast } from './allocation';

export type TimeOfDay='day'|'sunset'|'night';
export type Settings={time:TimeOfDay;desks:number;people:number;monitor:number;zoom:number;angle:number};
export const DEFAULTS:Settings={time:'day',desks:4,people:4,monitor:1,zoom:1,angle:35};
export async function createSceneLab(container:HTMLElement){
 const renderer=new THREE.WebGLRenderer({antialias:true,powerPreference:'low-power'});renderer.setPixelRatio(Math.min(devicePixelRatio,1.5));renderer.outputColorSpace=THREE.SRGBColorSpace;renderer.toneMapping=THREE.ACESFilmicToneMapping;renderer.toneMappingExposure=1.15;renderer.shadowMap.enabled=true;renderer.shadowMap.type=THREE.PCFSoftShadowMap;container.append(renderer.domElement);
 let source:THREE.Object3D;
 try{source=(await new GLTFLoader().loadAsync(new URL('../character-lab/assets/worker-lab.glb',import.meta.url).href)).scene}catch(e){renderer.dispose();renderer.domElement.remove();throw e}
 const scene=new THREE.Scene(),camera=new THREE.OrthographicCamera(-5,5,5,-5,.1,100),kit=new OfficeKit();
 const room=makeRoom(kit,officeLayout(2));scene.add(room);
 const ambient=new THREE.HemisphereLight(0xfff4e5,0x777789,1.8);scene.add(ambient);
 const sun=new THREE.DirectionalLight(0xffe0b9,2.5);sun.position.set(-4,10,7);sun.castShadow=true;sun.shadow.mapSize.set(1024,1024);sun.shadow.camera.left=-8;sun.shadow.camera.right=8;sun.shadow.camera.top=8;sun.shadow.camera.bottom=-8;sun.shadow.normalBias=.025;scene.add(sun);
 const lamp=new THREE.PointLight(0xffb65c,0,8);lamp.position.set(0,2.9,0);scene.add(lamp);
 const traits=[DEFAULT_TRAITS,JUSTIN_TRAITS,{...DEFAULT_TRAITS,skin:'brown' as const,hairStyle:'curls' as const,hairColor:'black' as const,shirt:'green' as const,glasses:'square' as const,facialHair:'goatee' as const},{...DEFAULT_TRAITS,skin:'sand' as const,hairStyle:'short' as const,hairColor:'auburn' as const,shirt:'purple' as const,facialHair:'none' as const},...Array.from({length:2},(_,i)=>generateTraits(`scene-cast-${i}`))];
 const people=traits.map(t=>makeLabCharacter(source,t));
 const geo=new THREE.BoxGeometry(1,1,1),round=new RoundedBoxGeometry(1,1,1,3,.12);
 const wood=new THREE.MeshStandardMaterial({color:'#a76b42',roughness:.85}),dark=new THREE.MeshStandardMaterial({color:'#343a42',roughness:.8}),keys=new THREE.MeshStandardMaterial({color:'#d8d4c8',roughness:.85}),chair=new THREE.MeshStandardMaterial({color:'#56616c',roughness:.85});
 const prop=(parent:THREE.Object3D,mat:THREE.Material,x:number,y:number,z:number,w:number,h:number,d:number,soft=false)=>{const o=new THREE.Mesh(soft?round:geo,mat);o.position.set(x,y,z);o.scale.set(w,h,d);o.castShadow=true;o.receiveShadow=true;parent.add(o);return o};
 const stations=people.map((person,i)=>{
  const root=new THREE.Group(),monitor=new THREE.Group();root.position.set(i%2?1.65:-1.65,0,(Math.floor(i/2)-1)*2.05);
  prop(root,wood,0,.71,.75,1.55,.10,.78);for(const x of [-.65,.65])for(const z of [.47,1.03])prop(root,wood,x,.32,z,.10,.64,.10);
  prop(root,keys,0,.78,.54,.92,.025,.24);monitor.position.set(.48,.76,.96);prop(monitor,dark,0,.29,0,.55,.40,.065);prop(monitor,dark,0,.08,0,.07,.20,.07);prop(monitor,dark,0,0,0,.32,.025,.22);root.add(monitor);
  prop(root,chair,0,.43,-.08,.70,.12,.58,true);prop(root,chair,0,.77,-.34,.70,.65,.10,true);prop(root,chair,0,.18,-.08,.12,.38,.12);prop(root,chair,0,.04,-.08,.58,.08,.50);
  const leg=person.group.getObjectByName('leg_l_pivot')!;let pants:THREE.Material|undefined,shoe:THREE.Material|undefined;leg.traverse(o=>{if(o instanceof THREE.Mesh&&!Array.isArray(o.material)){if(o.material.name==='pants')pants=o.material;if(o.material.name==='shoe')shoe=o.material}});if(!pants||!shoe)throw new Error('Leg materials missing');
  const legs=new THREE.Group();root.add(legs);
  for(const x of [-.18,.18]){prop(legs,pants,x,.59,.20,.29,.24,.52,true);prop(legs,pants,x,.29,.39,.29,.43,.27,true);prop(legs,shoe,x,.085,.45,.32,.17,.40,true)}
  for(const n of ['leg_l_pivot','leg_r_pivot'])person.group.getObjectByName(n)!.visible=false;
  person.group.position.y=-.19;root.add(person.group);scene.add(root);return {root,monitor,person,legs};
 });
 // A separate standing character makes the walk visible even when all desks are occupied.
 const walkers=traits.map(t=>makeLabCharacter(source,t));walkers.forEach(p=>scene.add(p.group));
 let settings={...DEFAULTS},disposed=false,raf=0,last=0,clock=0;
 const reduced=matchMedia('(prefers-reduced-motion: reduce)');
 const resize=()=>{const w=Math.max(1,container.clientWidth),h=Math.max(1,container.clientHeight),aspect=w/h,vertical=Math.max(9.2,12/aspect)/settings.zoom;camera.left=-vertical*aspect/2;camera.right=vertical*aspect/2;camera.top=vertical/2;camera.bottom=-vertical/2;camera.updateProjectionMatrix();renderer.setSize(w,h,false)};
 function setSettings(next:Settings){settings={...next};const palettes={day:{background:'#d9e7e5',sky:'#a7d2d4',horizon:'#e6b98f',window:'#6fa9b5',ambient:1.8,sun:2.5,lamp:0,exposure:1.15},sunset:{background:'#e7c9bf',sky:'#eaaa91',horizon:'#e4a16d',window:'#d58c87',ambient:1.4,sun:1.75,lamp:4,exposure:1.05},night:{background:'#313c56',sky:'#394b70',horizon:'#77728d',window:'#344768',ambient:.8,sun:.45,lamp:10,exposure:1.05}};const p=palettes[settings.time];scene.background=new THREE.Color(p.background);kit.material('#a7d2d4').color.set(p.sky);kit.material('#e6b98f').color.set(p.horizon);kit.material('#6fa9b5').color.set(p.window);ambient.intensity=p.ambient;sun.intensity=p.sun;lamp.intensity=p.lamp;renderer.toneMappingExposure=p.exposure;
  const rad=settings.angle*Math.PI/180;camera.position.set(Math.sin(rad)*15,15,Math.cos(rad)*15);camera.lookAt(0,.7,0);camera.updateMatrixWorld();stations.forEach((station,i)=>{station.root.visible=i<settings.desks;station.monitor.scale.setScalar(settings.monitor);station.person.group.visible=station.legs.visible=i<splitCast(settings.desks,settings.people).seated});const {seated}=splitCast(settings.desks,settings.people);walkers.forEach((person,i)=>person.group.visible=i>=seated&&i<settings.people);resize();renderer.render(scene,camera);
 }
 function render(t:number){raf=0;if(disposed||document.hidden)return;if(last)clock+=Math.min((t-last)/1000,.05);last=t;
  stations.forEach(({person},i)=>{const swing=Math.sin(clock*9+i)*.035;person.group.getObjectByName('arm_l_pivot')!.rotation.x=-1.30+swing;person.group.getObjectByName('arm_r_pivot')!.rotation.x=-1.30-swing});
  walkers.forEach((person,i)=>{const p=walkPose(clock*5+i);for(const [name,value] of [['leg_l_pivot',p.leftLeg],['leg_r_pivot',p.rightLeg],['arm_l_pivot',p.leftArm],['arm_r_pivot',p.rightArm]] as const)person.group.getObjectByName(name)!.rotation.x=value;person.group.position.set(-3.15,p.bob,Math.sin(clock*.45+i)*1.55);person.group.rotation.y=Math.cos(clock*.45+i)>=0?0:Math.PI});
  renderer.render(scene,camera);if(!reduced.matches)raf=requestAnimationFrame(render);
 }
 const restart=()=>{last=0;if(!document.hidden&&!disposed&&!raf)raf=requestAnimationFrame(render)};const observer=new ResizeObserver(()=>{resize();renderer.render(scene,camera)});observer.observe(container);document.addEventListener('visibilitychange',restart);reduced.addEventListener('change',restart);setSettings(settings);restart();
 return {setSettings,dispose(){disposed=true;cancelAnimationFrame(raf);observer.disconnect();document.removeEventListener('visibilitychange',restart);reduced.removeEventListener('change',restart);people.forEach(p=>p.dispose());walkers.forEach(p=>p.dispose());disposeSource(source);kit.dispose();geo.dispose();round.dispose();wood.dispose();dark.dispose();keys.dispose();chair.dispose();renderer.dispose();renderer.domElement.remove()}};
}
