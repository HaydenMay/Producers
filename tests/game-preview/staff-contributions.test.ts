import { describe, expect, it } from 'vitest';
import { baselineConfig } from '../../src/core/config';
import { advanceWeek, createStudio, getChoices, applyDecision } from '../../src/core/simulation';
import { METERS, type PlanDecision } from '../../src/core/types';
import { forecastStaffWork, pointsAt } from '../../src/game-preview/staff-contributions';

function studio() {
 const cfg=baselineConfig(), state=createStudio(42,cfg);
 const plan=getChoices(state,cfg).options.find((d):d is PlanDecision=>d.type==='plan'&&d.ipRelation==='new'&&!d.format)!;
 applyDecision(state,cfg,plan);
 return {cfg,state};
}

describe('visible staff work',()=>{
 it.each([2,4,6,8])('reveals exact weekly contributions for %i employees without changing the simulation',count=>{
  const {cfg,state}=studio();
  while(state.staff.length<count){const copy=structuredClone(state.staff[state.staff.length%2]);copy.id=`extra-${state.staff.length}`;state.staff.push(copy)}
  const original=structuredClone(state),schedule=forecastStaffWork(state,cfg)!;
  expect(state).toEqual(original);
  expect(schedule.events).toHaveLength(count);
  expect(pointsAt(schedule,0)).toEqual(original.project!.meterPoints);
  const middle=pointsAt(schedule,.5);
  expect(METERS.some(m=>middle[m]>original.project!.meterPoints[m])).toBe(true);
  const after=structuredClone(state);advanceWeek(after,cfg);
  expect(pointsAt(schedule,1)).toEqual(after.project!.meterPoints);
  expect(state).toEqual(original);
 });
 it('excludes staff on assignment and skips projects waiting for decisions',()=>{
  const {cfg,state}=studio();state.staff[0].assignment={kind:'streaming_build',sinceWeek:state.week,untilWeek:state.week+100};
  expect(forecastStaffWork(state,cfg)!.events.map(e=>e.staffId)).not.toContain(state.staff[0].id);
  state.project!.pendingDecision='casting';expect(forecastStaffWork(state,cfg)).toBeNull();
 });
 it('observing work never changes a full film or its release, including decision weeks',()=>{
  const {cfg,state}=studio(),plain=structuredClone(state),observed=structuredClone(state);
  for(let i=0;i<30;i++){
   if(plain.project?.pendingDecision){const decision=getChoices(plain,cfg).options.find(d=>['cast','distribute','market'].includes(d.type))!;applyDecision(plain,cfg,decision);applyDecision(observed,cfg,decision)}
   const seen:string[]=[];advanceWeek(plain,cfg);advanceWeek(observed,cfg,id=>seen.push(id));
   expect(observed).toEqual(plain);expect(seen).toHaveLength(state.staff.length);
  }
  expect(plain.releases).toHaveLength(1);
 });
});
