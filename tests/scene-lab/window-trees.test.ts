import {describe,it,expect} from 'vitest';
import * as THREE from 'three';
import {OfficeKit} from '../../src/game/office/kit';
import {officeLayout} from '../../src/game/office/layout';
import {makeRoom} from '../../src/game/office/room';

describe('window trees',()=>{it('uses rounded foliage in the scene lab without changing the older studio',()=>{
 const kit=new OfficeKit(),material=kit.material('#55866e');
 const types=(roundedWindowTrees:boolean)=>{const shapes:string[]=[];makeRoom(kit,officeLayout(2),{roundedWindowTrees}).traverse(o=>{if(o instanceof THREE.Mesh&&o.material===material)shapes.push(o.geometry.type)});return new Set(shapes)};
 expect(types(true)).toEqual(new Set(['SphereGeometry']));expect(types(false)).toEqual(new Set(['BoxGeometry']));kit.dispose();
})});
