import { describe, expect, it, vi } from 'vitest';
import { Group } from 'three';
import { OfficeKit } from '../../src/game/office/kit';
import { workstation } from '../../src/game/office/workstation';
import { createStudio } from '../../src/core/simulation';
import { baselineConfig } from '../../src/core/config';
import { makeRoom } from '../../src/game/office/room';
import { officeLayout } from '../../src/game/office/layout';
import { mergeStaticRoom } from '../../src/game/office/merge-static';

describe('office assets', () => {
  it('reuses geometry and materials and disposes each shared resource once', () => {
    const kit=new OfficeKit(), group=new Group();
    const a=kit.mesh(group,'round','#ffeecc',0,0,0,1,1,1);
    const b=kit.mesh(group,'round','#ffeecc',1,0,0,1,1,1);
    expect(a.geometry).toBe(b.geometry); expect(a.material).toBe(b.material);
    const geometryDisposed=vi.fn(), materialDisposed=vi.fn();
    a.geometry.addEventListener('dispose',geometryDisposed); a.material.addEventListener('dispose',materialDisposed);
    kit.dispose(); expect(geometryDisposed).toHaveBeenCalledTimes(1); expect(materialDisposed).toHaveBeenCalledTimes(1);
  });
  it('creates separate working rigs without modifying the studio', () => {
    const kit=new OfficeKit(); const state=createStudio(42,baselineConfig()); const original=JSON.stringify(state);
    const a=workstation(kit,state.staff[0]), b=workstation(kit,state.staff[1]);
    expect(a.group).not.toBe(b.group); expect(a.rig.head).not.toBe(b.rig.head);
    expect(JSON.stringify(state)).toBe(original); kit.dispose();
  });
  it('batches static room meshes by material without losing triangles', () => {
    const kit=new OfficeKit(); const room=makeRoom(kit,officeLayout(2));
    const count=(root: Group) => { let meshes=0, triangles=0; root.traverse((node) => { if ('isMesh' in node && node.isMesh) { const m=node as import('three').Mesh; meshes++; triangles+=(m.geometry.index?.count ?? m.geometry.attributes.position.count)/3; } }); return {meshes,triangles}; };
    const before=count(room), after=count(mergeStaticRoom(kit,room));
    expect(after.meshes).toBeLessThan(before.meshes); expect(after.triangles).toBe(before.triangles); kit.dispose();
  });
});
