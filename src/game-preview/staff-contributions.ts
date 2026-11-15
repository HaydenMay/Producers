import type { Config } from '../core/config';
import { stableUnit } from '../core/rng';
import { advanceWeek } from '../core/simulation';
import { METERS, type Meter, type StudioState } from '../core/types';

export type WorkEvent={staffId:string;points:Record<Meter,number>;at:number};
export type WorkSchedule={projectId:string;week:number;base:Record<Meter,number>;events:WorkEvent[]};

/** Simulate on a copy: these are the exact contributions the next weekly tick will commit. */
export function forecastStaffWork(state:StudioState,cfg:Config):WorkSchedule|null{
 const p=state.project;
 if(!p||p.pendingDecision||state.pendingOffers)return null;
 const copy=structuredClone(state), work:{staffId:string;points:Record<Meter,number>}[]=[];
 advanceWeek(copy,cfg,(staffId,points)=>work.push({staffId,points}));
 work.sort((a,b)=>stableUnit(state.seed,`${state.week}:${a.staffId}`)-stableUnit(state.seed,`${state.week}:${b.staffId}`));
 return {projectId:p.id,week:state.week,base:{...p.meterPoints},events:work.map((event,i)=>({...event,at:.15+.7*(i+.5)/work.length}))};
}

/** Sum in cents so a different reveal order does not change the week's rounded total. */
export function pointsAt(schedule:WorkSchedule,progress:number):Record<Meter,number>{
 return Object.fromEntries(METERS.map(m=>[m,(Math.round(schedule.base[m]*100)+schedule.events.filter(e=>e.at<=progress).reduce((n,e)=>n+Math.round(e.points[m]*100),0))/100])) as Record<Meter,number>;
}
