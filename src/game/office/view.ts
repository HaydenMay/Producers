import * as THREE from 'three';
import type { OfficeLayout } from './layout';
export function makeCamera() {const camera=new THREE.OrthographicCamera(-7,7,5,-5,.1,100);camera.position.set(11,14,16);camera.lookAt(0,0,0);return camera}
export function fitCamera(camera:THREE.OrthographicCamera, width:number, height:number, layout:OfficeLayout) {
 const aspect=width/Math.max(height,1);
 // Preserve V0.3 phone framing for the two-worker game; larger debug rooms scale with depth.
 const scale=Math.max(1,layout.depth/7.4);
 const h=(aspect<1.1?11:9.7)*scale;
 camera.left=-h*aspect/2;camera.right=h*aspect/2;camera.top=h/2;camera.bottom=-h/2;camera.updateProjectionMatrix();
}
export function addLighting(scene:THREE.Scene, layout:OfficeLayout) {
 scene.add(new THREE.HemisphereLight(0xfff3dc,0x9f988e,2));
 const light=new THREE.DirectionalLight(0xffdfaf,2.2);light.position.set(-5,12,7);light.castShadow=true;
 light.shadow.mapSize.set(1024,1024);const extent=Math.max(layout.width,layout.depth)*.85;
 light.shadow.camera.left=-extent;light.shadow.camera.right=extent;light.shadow.camera.top=extent;light.shadow.camera.bottom=-extent;
 light.shadow.normalBias=.025;scene.add(light);
}
