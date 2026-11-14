/** A still scene must explicitly redraw when the browser restores its GPU context. */
export function watchContextRestoration(target:EventTarget,redraw:()=>void){
 target.addEventListener('webglcontextrestored',redraw);
 return ()=>target.removeEventListener('webglcontextrestored',redraw);
}
