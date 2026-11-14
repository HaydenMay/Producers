/** Keep the studio prominent, with an extra readability boost on portrait phones. */
export function sceneFraming(aspect:number){
 const transition=Math.max(0,Math.min(1,(1-aspect)/.35));
 return 1.1+transition*.58;
}
export type Pan={x:number;y:number};
/** Pan is measured in camera-plane world units and kept close to the office. */
export function movePan(pan:Pan,dx:number,dy:number):Pan{
 return {x:Math.max(-3.4,Math.min(3.4,pan.x+dx)),y:Math.max(-2.5,Math.min(2.5,pan.y+dy))};
}
