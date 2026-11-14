import { readFileSync } from 'node:fs';
import { describe,expect,it } from 'vitest';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { Box3,Mesh,Raycaster,Vector3 } from 'three';

describe('facial hair geometry',()=>{
 it('keeps a connected full beard with consistent depth and the same central mustache',async()=>{
  const bytes=readFileSync('src/character-lab/assets/worker-lab.glb');
  const scene=(await new GLTFLoader().parseAsync(bytes.buffer.slice(bytes.byteOffset,bytes.byteOffset+bytes.byteLength) as ArrayBuffer,'')).scene;
  scene.updateMatrixWorld(true);
  const hair=(name:string)=>{
   const parent=scene.getObjectByName(name)!;expect(parent,name).toBeDefined();
   const meshes:Mesh[]=[];parent.traverse(o=>{if(o instanceof Mesh && !Array.isArray(o.material) && o.material.name==='hair')meshes.push(o)});
   expect(meshes,`${name} should contain one hair mesh`).toHaveLength(1);return meshes[0];
  };
  const moustache=hair('facial_moustache'),goatee=hair('facial_goatee'),beard=hair('facial_beard');
  const depth=(mesh:Mesh)=>{const box=new Box3().setFromObject(mesh);return box.max.z-box.min.z};
  expect(depth(beard)).toBeCloseTo(depth(moustache),3);expect(depth(goatee)).toBeCloseTo(depth(moustache),3);
  const ray=new Raycaster();
  for(const x of [-.10,-.05,0,.05,.10]){
   ray.set(new Vector3(x,1.65,2),new Vector3(0,0,-1));
   const m=ray.intersectObject(moustache)[0],b=ray.intersectObject(beard)[0];
   expect(m,`mustache at x=${x}`).toBeDefined();expect(b,`beard mustache at x=${x}`).toBeDefined();expect(b.distance).toBeCloseTo(m.distance,3);
  }
  // glTF may split vertices for shading, so weld coincident positions before counting connected components.
  const geometry=beard.geometry,positions=geometry.getAttribute('position'),index=geometry.getIndex();
  const parent=new Map<string,string>();
  const key=(i:number)=>[positions.getX(i),positions.getY(i),positions.getZ(i)].map(n=>n.toFixed(5)).join(',');
  const find=(v:string):string=>{const p=parent.get(v);if(!p){parent.set(v,v);return v}if(p===v)return v;const root=find(p);parent.set(v,root);return root};
  const count=index?.count??positions.count;
  for(let i=0;i<count;i+=3){const tri=[0,1,2].map(j=>key(index?index.getX(i+j):i+j));const root=find(tri[0]);for(const v of tri.slice(1))parent.set(find(v),root)}
  expect(new Set([...parent.keys()].map(find)).size).toBe(1);
 });
});
