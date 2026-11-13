import type { WorkerRig } from './character';
export function animateWorkers(workers:WorkerRig[], time:number, working:boolean) {
  for(const a of workers){const pause=working?Math.max(0,Math.sin(time*.00045+a.offset)):0;a.head.rotation.z=working?Math.sin(time*.0006+a.offset)*.04:0;a.left.rotation.x=Math.sin(time*.004+a.offset)*.065*pause;a.right.rotation.x=Math.sin(time*.0048+a.offset+1.4)*.065*pause}
}
