/** Capacity tiers grow the existing cutaway room without changing the starting office. */
export function studioRoom(desks:number){return {width:8.6,depth:desks>6?12:desks>4?9.8:6.8}}
export function studioStation(index:number,desks:number){
 const row=Math.floor(index/2);
 return {x:index%2?1.65:-1.65,z:desks>6?(row-1.5)*2.05:(row-1)*2.05};
}
export function routineSlotSeconds(desks:number){return desks>6?24:18}
