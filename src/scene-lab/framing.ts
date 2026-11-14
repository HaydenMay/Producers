/** Portrait scenes favor legible people; landscape keeps the existing framing. */
export function portraitFraming(aspect:number){
 const transition=Math.max(0,Math.min(1,(1-aspect)/.35));
 return 1+transition*.4;
}
export type Pan={x:number;y:number};
/** Pan is measured in camera-plane world units and kept close to the office. */
export function movePan(pan:Pan,dx:number,dy:number):Pan{
 return {x:Math.max(-3.4,Math.min(3.4,pan.x+dx)),y:Math.max(-2.5,Math.min(2.5,pan.y+dy))};
}
