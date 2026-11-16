import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { disposeSource, makeLabCharacter } from '../character-lab/character';
import { generateTraits } from '../character-lab/traits';

export type PersonKind = 'staff' | 'star' | 'assistant' | 'critic' | 'distributor';
export const portraitTraits = (kind: PersonKind, id: string) => generateTraits(`${kind}-${id}`);
export type PortraitService = { image:(kind:PersonKind,id:string)=>string; dispose:()=>void };

/** A single shared renderer creates cached thumbnails; no WebGL context per card. */
export async function createPortraitService():Promise<PortraitService> {
  const renderer = new THREE.WebGLRenderer({ antialias:true, preserveDrawingBuffer:true, powerPreference:'low-power' });
  renderer.setPixelRatio(1); renderer.setSize(192,192,false);
  renderer.outputColorSpace=THREE.SRGBColorSpace;
  renderer.toneMapping=THREE.ACESFilmicToneMapping; renderer.toneMappingExposure=1.18;
  let source:THREE.Object3D;
  try { source=(await new GLTFLoader().loadAsync(new URL('../character-lab/assets/worker-lab.glb',import.meta.url).href)).scene; }
  catch(error){renderer.dispose();throw error}
  const scene=new THREE.Scene();scene.background=new THREE.Color('#b8c8ad');
  const camera=new THREE.OrthographicCamera(-.775,.775,.775,-.775,.1,100);
  camera.position.set(5,3.8,9);camera.lookAt(0,1.72,0);
  scene.add(new THREE.HemisphereLight(0xfff4e6,0x78818e,1.8));
  const key=new THREE.DirectionalLight(0xffe3c1,2.8);key.position.set(-2,10,5);scene.add(key);
  const fill=new THREE.DirectionalLight(0xd5e6ff,.65);fill.position.set(5,3,-4);scene.add(fill);
  const person=makeLabCharacter(source,portraitTraits('staff','initial'));scene.add(person.group);
  const cache=new Map<string,string>();
  return {
    image(kind,id){const key=`${kind}:${id}`;const cached=cache.get(key);if(cached)return cached;person.update(portraitTraits(kind,id));renderer.render(scene,camera);const image=renderer.domElement.toDataURL('image/png');cache.set(key,image);return image},
    dispose(){cache.clear();person.dispose();disposeSource(source);renderer.dispose()}
  };
}
