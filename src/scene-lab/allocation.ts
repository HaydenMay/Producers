/** Keep one visible person walking when the office is populated. */
export function splitCast(desks:number,people:number){const seated=Math.min(desks,Math.max(0,people-1));return {seated,walking:people-seated}}
