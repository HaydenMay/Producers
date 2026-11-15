import { describe,expect,it } from 'vitest';
import { studioRoom,studioStation,routineSlotSeconds } from '../../src/scene-lab/studio-layout';
import { crewPose } from '../../src/scene-lab/crew-routine';

describe('expanding studio',()=>{
 it('keeps four seats as the original room and grows at both capacity upgrades',()=>{
  expect(studioRoom(4)).toEqual({width:8.6,depth:6.8});
  expect(studioRoom(6).depth).toBeGreaterThan(studioRoom(4).depth);
  expect(studioRoom(8).depth).toBeGreaterThan(studioRoom(6).depth);
  expect(studioStation(0,4)).toEqual({x:-1.65,z:-2.05});
 });
 it.each([4,6,8])('fits %i distinct workstations with a return route for each employee',capacity=>{
  const room=studioRoom(capacity),seats=Array.from({length:capacity},(_,i)=>studioStation(i,capacity));
  for(let i=0;i<capacity;i++){
   expect(Math.abs(seats[i].x)+.8).toBeLessThan(room.width/2);
   expect(seats[i].z-.5).toBeGreaterThan(-room.depth/2);
   expect(seats[i].z+1.2).toBeLessThan(room.depth/2);
   for(let j=i+1;j<capacity;j++)expect(Math.hypot(seats[i].x-seats[j].x,seats[i].z-seats[j].z)).toBeGreaterThan(2);
   const slot=routineSlotSeconds(capacity),phases=new Set<string>();let last=crewPose(i,capacity,capacity,i*slot);
   for(let t=i*slot+.05;t<(i+1)*slot;t+=.05){const p=crewPose(i,capacity,capacity,t);phases.add(p.phase);expect(p.visible).toBe(true);expect(Math.abs(p.z)).toBeLessThan(room.depth/2);expect(Math.hypot(p.x-last.x,p.z-last.z)).toBeLessThan(.2);last=p}
   expect(phases.has('walking-out')).toBe(true);expect(phases.has('walking-in')).toBe(true);expect(phases.has('sitting')).toBe(true);
   expect(last.x).toBeCloseTo(seats[i].x);expect(last.z).toBeCloseTo(seats[i].z);
  }
 });
});
