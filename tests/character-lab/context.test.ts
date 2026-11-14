import { it,expect,vi } from 'vitest';
import { watchContextRestoration } from '../../src/character-lab/context';
it('redraws on WebGL restoration and detaches the handler during disposal',()=>{
 const canvas=new EventTarget(),redraw=vi.fn();const dispose=watchContextRestoration(canvas,redraw);
 canvas.dispatchEvent(new Event('webglcontextrestored'));expect(redraw).toHaveBeenCalledTimes(1);
 dispose();canvas.dispatchEvent(new Event('webglcontextrestored'));expect(redraw).toHaveBeenCalledTimes(1);
});
