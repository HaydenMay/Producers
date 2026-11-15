/** Assign available desks first; extra people remain on foot. */
export function splitCast(desks:number,people:number){const seated=Math.min(Math.max(0,desks),Math.max(0,people));return {seated,walking:Math.max(0,people-seated)}}
