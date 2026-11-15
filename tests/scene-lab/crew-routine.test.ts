import { describe, expect, it } from 'vitest';
import { crewPose, legTransition, ROUTINE_SLOT_SECONDS, stationPosition } from '../../src/scene-lab/crew-routine';

describe('crew routines',()=>{
 it('takes a seated employee out and back to the same desk without position jumps',()=>{
  const phases=new Set<string>();let previous=crewPose(0,4,2,0);
  for(let t=.02;t<ROUTINE_SLOT_SECONDS;t+=.02){const pose=crewPose(0,4,2,t);phases.add(pose.phase);
   expect(pose.visible).toBe(true);expect(Math.hypot(pose.x-previous.x,pose.z-previous.z)).toBeLessThan(.1);
   previous=pose;
  }
  for(const phase of ['seated','standing','walking-out','turning','walking-in','sitting'])expect(phases.has(phase)).toBe(true);
  const end=crewPose(0,4,2,ROUTINE_SLOT_SECONDS-.01),seat=stationPosition(0);
  expect(end.phase).toBe('seated');expect(end.x).toBeCloseTo(seat.x);expect(end.z).toBeCloseTo(seat.z);
 });
 it('staggers seated employees and never displays an actor beyond the person count',()=>{
  for(let t=0;t<ROUTINE_SLOT_SECONDS*6;t+=.2){
   const poses=Array.from({length:6},(_,i)=>crewPose(i,4,4,t));
   expect(poses.filter(p=>['standing','walking-out','turning','walking-in','sitting'].includes(p.phase)).length).toBeLessThanOrEqual(1);
   expect(poses[4].visible).toBe(false);expect(poses[5].visible).toBe(false);
  }
 });
 it('keeps employees without desks standing rather than assigning a nonexistent seat',()=>{
  const pose=crewPose(3,2,4,5);expect(pose.visible).toBe(true);expect(pose.phase).toBe('waiting');expect(pose.posture).toBe(1);
 });
 it('straightens the bent legs continuously into the standing proportions',()=>{
  const seated=legTransition(0),half=legTransition(.5),standing=legTransition(1);
  expect(seated.thigh.z).toBeGreaterThan(standing.thigh.z);expect(half.thigh.z).toBeCloseTo((seated.thigh.z+standing.thigh.z)/2);
  expect(standing.thigh.y).toBeCloseTo(.535);expect(standing.shin.z).toBeCloseTo(0);expect(standing.shoe.z).toBeCloseTo(.07);
 });
 it('schedules seated employees without long gaps when there are extra people',()=>{
  const pose=crewPose(0,1,6,ROUTINE_SLOT_SECONDS+2);expect(pose.phase).not.toBe('seated');
 });
 it('keeps extra employees in distinct spaces',()=>{
  for(let t=0;t<18;t+=.5){const poses=Array.from({length:6},(_,i)=>crewPose(i,1,6,t));
   for(let i=1;i<6;i++)for(let j=i+1;j<6;j++)expect(Math.hypot(poses[i].x-poses[j].x,poses[i].z-poses[j].z)).toBeGreaterThan(.8);
  }
 });
 it('eases the walking stride to rest at each end of the route',()=>{
  for(const index of [0,2,4]){let previous=crewPose(index,6,6,index*ROUTINE_SLOT_SECONDS);
   for(let t=index*ROUTINE_SLOT_SECONDS+.01;t<(index+1)*ROUTINE_SLOT_SECONDS;t+=.01){
    const pose=crewPose(index,6,6,t);
    if(previous.walking&&!pose.walking)expect(previous.strideWeight).toBeLessThan(.1);
    if(!previous.walking&&pose.walking)expect(pose.strideWeight).toBeLessThan(.1);
    previous=pose;
   }
  }
 });
});
