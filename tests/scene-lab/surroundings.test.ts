import {describe,it,expect} from 'vitest';
import {OfficeKit} from '../../src/game/office/kit';
import {makeSurroundings} from '../../src/scene-lab/surroundings';
describe('studio surroundings',()=>{it('builds its batched scenery with shared window material',()=>{const kit=new OfficeKit();const view=makeSurroundings(kit);expect(view.children.length).toBeGreaterThan(5);expect(view.children.length).toBeLessThan(40);expect(view.children.some(child=>'material' in child&&child.material===kit.material('#698c91'))).toBe(true);kit.dispose()})});
