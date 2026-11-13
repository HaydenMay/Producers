import * as THREE from 'three';
import { RoundedBoxGeometry } from 'three/addons/geometries/RoundedBoxGeometry.js';

/** Shared source-generated assets. Dimensions and local origins use metres and Y-up. */
export class OfficeKit {
  private materials = new Map<string, THREE.MeshStandardMaterial>();
  private geometry = new Map<string, THREE.BufferGeometry>();
  private merged = new Set<THREE.BufferGeometry>();
  own(geometry: THREE.BufferGeometry) { this.merged.add(geometry); return geometry; }
  material(color: string) {
    let m = this.materials.get(color);
    if (!m) { m = new THREE.MeshStandardMaterial({color,roughness:.82}); this.materials.set(color,m); }
    return m;
  }
  private geo(kind: 'box'|'round'|'sphere'|'cylinder'|'cone') {
    let g=this.geometry.get(kind);
    if (!g) {
      g=kind==='box'?new THREE.BoxGeometry(1,1,1):kind==='round'?new RoundedBoxGeometry(1,1,1,2,.08):kind==='sphere'?new THREE.SphereGeometry(1,12,9):kind==='cylinder'?new THREE.CylinderGeometry(1,1,1,12):new THREE.ConeGeometry(1,1,12);
      this.geometry.set(kind,g);
    }
    return g;
  }
  mesh(parent:THREE.Object3D,kind:'box'|'round'|'sphere'|'cylinder'|'cone',color:string,x:number,y:number,z:number,w:number,h:number,d:number) {
    const m=new THREE.Mesh(this.geo(kind),this.material(color)); m.position.set(x,y,z);m.scale.set(w,h,d);m.castShadow=true;m.receiveShadow=true;parent.add(m);return m;
  }
  dispose(){for(const g of this.geometry.values())g.dispose();for(const g of this.merged)g.dispose();for(const m of this.materials.values())m.dispose();this.geometry.clear();this.merged.clear();this.materials.clear()}
}
