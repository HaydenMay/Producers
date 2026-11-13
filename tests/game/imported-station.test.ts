import { describe, expect, it } from 'vitest';
import * as THREE from 'three';
import { makeImportedStation } from '../../src/game/office/imported-station';
function model() {
  const root = new THREE.Group();
  for (const name of ['head_pivot','arm_l_pivot','arm_r_pivot']) { const pivot = new THREE.Group(); pivot.name = name; root.add(pivot); }
  for (const name of ['shirt','pants','skin','hair']) {
    const material = new THREE.MeshStandardMaterial(); material.name = name;
    const mesh = new THREE.Mesh(new THREE.BoxGeometry(), material); mesh.name = name; root.add(mesh);
  }
  return root;
}
describe('imported workstation', () => {
  it('makes independent deterministic worker materials and preserves shared geometry and animated pivots', () => {
    const worker = model(), desk = new THREE.Group();
    const a = makeImportedStation(desk, worker, 'sam');
    const b = makeImportedStation(desk, worker, 'alex');
    const aShirt = a.group.getObjectByName('shirt') as THREE.Mesh;
    const bShirt = b.group.getObjectByName('shirt') as THREE.Mesh;
    expect(aShirt.geometry).toBe(bShirt.geometry);
    expect(aShirt.material).not.toBe(bShirt.material);
    expect((aShirt.material as THREE.MeshStandardMaterial).color.getHexString()).not.toBe((bShirt.material as THREE.MeshStandardMaterial).color.getHexString());
    expect(a.rig.head.name).toBe('head_pivot');
    expect(a.rig.left.name).toBe('arm_l_pivot');
    expect(a.rig.right.name).toBe('arm_r_pivot');
    const again = makeImportedStation(desk, worker, 'sam');
    expect(((again.group.getObjectByName('shirt') as THREE.Mesh).material as THREE.MeshStandardMaterial).color.getHexString()).toBe((aShirt.material as THREE.MeshStandardMaterial).color.getHexString());
  });
  it('rejects malformed assets instead of silently disabling animation', () => {
    expect(() => makeImportedStation(new THREE.Group(), new THREE.Group(), 'sam')).toThrow(/head_pivot/);
  });
});
