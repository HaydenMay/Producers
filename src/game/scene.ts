import * as THREE from 'three';
import type { Staff } from '../core/types';

// World units: a seated worker is ~1.35 high; all furniture sits on y=0.
// Desks are modular around a floor-space center; the worker's origin is the chair center.
export function createOffice(container: HTMLElement, staff: Staff[]) {
  const scene = new THREE.Scene(); scene.background = new THREE.Color('#e9dfd0');
  const camera = new THREE.OrthographicCamera(-7, 7, 5, -5, .1, 100);
  camera.position.set(11, 14, 16); camera.lookAt(0, 0, 0);
  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false, powerPreference: 'low-power' });
  renderer.setPixelRatio(Math.min(devicePixelRatio, 1.5)); renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap; renderer.outputColorSpace = THREE.SRGBColorSpace;
  container.appendChild(renderer.domElement);
  scene.add(new THREE.HemisphereLight(0xfff5e2, 0xb8a89b, 2));
  const sunlight = new THREE.DirectionalLight(0xffe1af, 2.5); sunlight.position.set(-5, 12, 7); sunlight.castShadow = true;
  sunlight.shadow.mapSize.set(1024, 1024); sunlight.shadow.camera.left = -8; sunlight.shadow.camera.right = 8; sunlight.shadow.camera.top = 8; sunlight.shadow.camera.bottom = -8;
  scene.add(sunlight);
  const mat = (color: string) => new THREE.MeshStandardMaterial({ color, roughness: .85 });
  const cream = mat('#e8d7bb'), wood = mat('#9c6f50'), dark = mat('#574b46'), floor = mat('#d7bb96'), green = mat('#778d72'), screen = mat('#768a88');
  const boxGeo = new THREE.BoxGeometry(1,1,1), sphere = new THREE.SphereGeometry(1, 12, 9), cylinder = new THREE.CylinderGeometry(1,1,1,12);
  const box = (parent: THREE.Object3D, m: THREE.Material, x:number,y:number,z:number,w:number,h:number,d:number) => { const a = new THREE.Mesh(boxGeo,m); a.position.set(x,y,z); a.scale.set(w,h,d); a.castShadow=true; a.receiveShadow=true; parent.add(a); return a; };
  const ball = (parent: THREE.Object3D, m:THREE.Material,x:number,y:number,z:number,w:number,h:number,d:number) => { const a = new THREE.Mesh(sphere,m); a.position.set(x,y,z); a.scale.set(w,h,d); a.castShadow=true; parent.add(a); return a; };
  box(scene, dark, 0,-.22,0, 9.2,.35,7.2); box(scene, floor, 0,-.03,0, 9,.12,7);
  box(scene, cream, 0,1.45,-3.45,9,2.9,.15); box(scene, cream,-4.45,1.45,0,.15,2.9,7);
  for(let i=-4;i<=4;i++) box(scene,wood,i,.045,0,.016,.01,6.9);
  // Window frame and a simple landscape, placed on the back wall.
  box(scene, wood, 0,1.85,-3.33,3.1,1.65,.1); box(scene, mat('#bdd5cc'),0,1.85,-3.25,2.86,1.42,.1);
  box(scene,cream,0,1.85,-3.17,.08,1.42,.07); box(scene,cream,0,1.85,-3.17,2.86,.08,.07);
  box(scene,wood,-3.65,.7,-2.6,1.05,1.4,.7); for(let i=0;i<3;i++) { box(scene,cream,-3.65,.3+i*.4,-2.22,.9,.32,.05); box(scene,dark,-3.65,.3+i*.4,-2.18,.2,.04,.04); }
  box(scene,wood,3.6,.6,-2.9,1.05,1.2,.7); box(scene,green,3.6,1.24,-2.9,.8,.1,.55);
  const plantPot=mat('#bb795c'); const pot=new THREE.Mesh(cylinder,plantPot); pot.position.set(3.6,1.43,-2.9);pot.scale.set(.18,.34,.18);scene.add(pot);
  ball(scene,green,3.6,1.8,-2.9,.38,.5,.35);
  const anim: Array<{ head: THREE.Group; arms: THREE.Group; offset: number }> = [];
  const shirts=['#b97765','#738ea0'], hair=['#5a4237','#493b36'], skin=['#d9a681','#bc8567'];
  staff.slice(0,2).forEach((person,i)=>{
    const x = i===0 ? -2 : 1.45; const z=.3;
    // Desk, monitor and task light.
    box(scene,wood,x,.92,z,2.25,.13,1.3);
    for(const dx of [-.95,.95]) for(const dz of [-.48,.48]) box(scene,dark,x+dx,.45,z+dz,.09,.9,.09);
    box(scene,dark,x,1.13,z-.3,.11,.35,.1); box(scene,dark,x,1.48,z-.3,1.05,.7,.11);box(scene,screen,x,1.48,z-.235,.91,.56,.025);
    box(scene,cream,x,1.01,z+.32,.8,.04,.23);
    box(scene,dark,x+.86,1.18,z-.36,.04,.45,.04); ball(scene,mat('#e8c67e'),x+.86,1.42,z-.36,.13,.09,.13);
    // Chair and seated figure face the monitor (towards negative z).
    box(scene,dark,x,.53,z+1.45,.8,.15,.75); box(scene,dark,x,.92,z+1.78,.8,.8,.14);box(scene,dark,x,.27,z+1.45,.14,.54,.14);
    const figure=new THREE.Group(); figure.position.set(x,0,z+1.35);scene.add(figure);
    const shirt=mat(shirts[i]), pants=mat(i ? '#555c62':'#5d5963'), flesh=mat(skin[i]), hairMat=mat(hair[i]);
    box(figure,pants,0,.67,-.04,.61,.28,.48); for(const dx of [-.2,.2]) {box(figure,pants,dx,.51,-.23,.24,.25,.55);box(figure,dark,dx,.3,-.44,.25,.16,.35);}
    box(figure,shirt,0,1.03,.02,.66,.65,.38);
    const head=new THREE.Group();head.position.set(0,1.53,0);figure.add(head);
    ball(head,flesh,0,0,0,.31,.34,.29); ball(head,hairMat,0,.21,.04,.32,.19,.3);
    for(const dx of [-.11,.11]) ball(head,dark,dx,.01,-.282,.025,.032,.015);
    const arms=new THREE.Group();arms.position.set(0,1.18,0);figure.add(arms);
    for(const dx of [-.4,.4]) { const arm=box(arms,shirt,dx,-.13,-.12,.17,.18,.5);arm.rotation.x=-.2;ball(arms,flesh,dx,-.13,-.38,.09,.07,.1); }
    anim.push({head,arms,offset:i*1.3 + person.id.length});
  });
  let frame=0;
  const resize=()=>{const w=container.clientWidth,h=container.clientHeight;const aspect=w/Math.max(h,1);const view=aspect<1.1?11:9.7;camera.left=-view*aspect/2;camera.right=view*aspect/2;camera.top=view/2;camera.bottom=-view/2;camera.updateProjectionMatrix();renderer.setSize(w,h,false)};
  const observer=new ResizeObserver(resize);observer.observe(container);resize();
  const tick=(t:number)=>{for(const a of anim){a.head.rotation.z=Math.sin(t*.0006+a.offset)*.04;a.arms.rotation.x=Math.sin(t*.004+a.offset)*.025}renderer.render(scene,camera);frame=requestAnimationFrame(tick)};frame=requestAnimationFrame(tick);
  return () => {cancelAnimationFrame(frame);observer.disconnect();renderer.dispose()};
}
