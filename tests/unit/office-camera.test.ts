import { describe, it, expect } from 'vitest';
import { Vector3 } from 'three';
import { makeCamera, fitCamera } from '../../src/game/office/view';
import { officeLayout } from '../../src/game/office/layout';

describe('portrait office framing', () => {
  it('keeps the studio sign and both workstations inside the phone viewport', () => {
    const layout=officeLayout(2), camera=makeCamera();
    fitCamera(camera,390,844,layout);camera.updateMatrixWorld();
    const points=[[-layout.width/2+.11,2.05,-1.7],[-layout.width/2+.11,2.05,1.7],...layout.seats.map(s=>[s.x,1.6,s.z])];
    for(const [x,y,z] of points) {const p=new Vector3(x,y,z).project(camera);expect(Math.abs(p.x)).toBeLessThan(1);expect(Math.abs(p.y)).toBeLessThan(1)}
  });
});
