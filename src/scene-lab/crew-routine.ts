import { splitCast } from './allocation';

/** One employee takes a turn at a time, leaving the centre aisle clear for the others. */
export const ROUTINE_SLOT_SECONDS=18;
const SPEED=1.3, LEAVE_SEAT=1.2, STAND_TIME=.8, TURN_TIME=1.2, SIT_TIME=.8, EDGE=2.95;
type Phase='seated'|'standing'|'walking-out'|'turning'|'walking-in'|'sitting'|'waiting'|'absent';
export type CrewPose={phase:Phase;visible:boolean;x:number;z:number;posture:number;rotation:number;walking:boolean;stride:number;strideWeight:number};
export const stationPosition=(index:number)=>({x:index%2?1.65:-1.65,z:(Math.floor(index/2)-1)*2.05});
const clamp=(n:number)=>Math.max(0,Math.min(1,n));
const mix=(a:number,b:number,u:number)=>a+(b-a)*clamp(u);
/** Match the standing character's leg proportions as the seated pose straightens. */
export function legTransition(posture:number){
 return {
  thigh:{y:mix(.59,.535,posture),z:mix(.20,0,posture),height:mix(.24,.25,posture),depth:mix(.52,.33,posture)},
  shin:{y:mix(.29,.285,posture),z:mix(.39,0,posture),height:mix(.43,.25,posture),depth:mix(.27,.33,posture)},
  shoe:{y:.085,z:mix(.45,.07,posture),height:.17,depth:mix(.40,.45,posture)}
 };
}

/** Coordinates are in room space. Posture is 0 seated and 1 standing. */
export function crewPose(index:number,desks:number,people:number,elapsed:number):CrewPose{
 const seat=stationPosition(index),time=Math.max(0,elapsed);
 const rest: CrewPose={phase:'seated',visible:true,...seat,posture:0,rotation:0,walking:false,stride:0,strideWeight:0};
 if(index>=people)return {...rest,phase:'absent',visible:false};
 const seated=splitCast(desks,people).seated;
 if(index>=seated){
  const anchors=[{x:-3.15,z:-1.5},{x:-3.15,z:0},{x:-3.15,z:1.4},{x:3.1,z:-1.4},{x:3.1,z:0},{x:1.8,z:0}];
  const anchor=anchors[(index-seated)%anchors.length];
  return {phase:'waiting',visible:true,x:anchor.x,z:anchor.z,posture:1,rotation:anchor.x<0?Math.PI/2:-Math.PI/2,walking:false,stride:0,strideWeight:0};
 }
 const active=Math.floor(time/ROUTINE_SLOT_SECONDS)%Math.max(seated,1),local=time%ROUTINE_SLOT_SECONDS;
 if(active!==index||local<LEAVE_SEAT)return rest;
 const side=-Math.sign(seat.x),startX=seat.x+side*.28,sideAngle=side*Math.PI/2;
 const standEnd=LEAVE_SEAT+STAND_TIME;
 if(local<standEnd){const u=(local-LEAVE_SEAT)/STAND_TIME;return {...rest,phase:'standing',x:mix(seat.x,startX,u),posture:clamp(u),rotation:mix(0,sideAngle,u)}}
 const first=Math.abs(startX),second=EDGE-seat.z,distance=first+second,duration=distance/SPEED;
 const outEnd=standEnd+duration,turnEnd=outEnd+TURN_TIME,inEnd=turnEnd+duration,sitEnd=inEnd+SIT_TIME;
 if(local<outEnd){
  const d=(local-standEnd)*SPEED,strideWeight=Math.min(1,d/.35,(distance-d)/.35);
  if(d<first)return {phase:'walking-out',visible:true,x:mix(startX,0,d/first),z:seat.z,posture:1,rotation:mix(sideAngle,0,(d-first+.35)/.35),walking:true,stride:d*5,strideWeight};
  return {phase:'walking-out',visible:true,x:0,z:seat.z+d-first,posture:1,rotation:0,walking:true,stride:d*5,strideWeight};
 }
 if(local<turnEnd)return {phase:'turning',visible:true,x:0,z:EDGE,posture:1,rotation:mix(0,Math.PI,(local-outEnd)/TURN_TIME),walking:false,stride:0,strideWeight:0};
 if(local<inEnd){
  const d=(local-turnEnd)*SPEED,returnAngle=seat.x>0?Math.PI/2:3*Math.PI/2,strideWeight=Math.min(1,d/.35,(distance-d)/.35);
  if(d<second)return {phase:'walking-in',visible:true,x:0,z:EDGE-d,posture:1,rotation:mix(Math.PI,returnAngle,(d-second+.35)/.35),walking:true,stride:d*5,strideWeight};
  return {phase:'walking-in',visible:true,x:mix(0,startX,(d-second)/first),z:seat.z,posture:1,rotation:returnAngle,walking:true,stride:d*5,strideWeight};
 }
 if(local<sitEnd){const u=(local-inEnd)/SIT_TIME;return {...rest,phase:'sitting',x:mix(startX,seat.x,u),posture:1-clamp(u),rotation:mix(-sideAngle,0,u)}}
 return rest;
}
