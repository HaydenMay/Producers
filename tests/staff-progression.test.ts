import { describe, expect, it } from 'vitest';
import { baselineConfig, progressionConfig } from '../src/core/config';
import { createStudio, getChoices, applyDecision } from '../src/core/simulation';
import { recordProgressWork } from '../src/core/staff-progression';
import { encodeSave, readSave } from '../src/game-preview/save';
import type { Decision } from '../src/core/types';

describe('employee progression', () => {
 it('preserves legacy studios and makes new starters less experienced', () => {
  const old = createStudio(42, baselineConfig()), current = createStudio(42, progressionConfig());
  expect(old.staff[0].progression).toBeUndefined();
  expect(current.staff[0].stats.plot).toBeLessThan(old.staff[0].stats.plot);
  expect(current.staff[0].progression?.level).toBe(0);
 });
 // 2026-11-15 review fix: levels are earned by working; training is a paid speed-up that buys experience
 it('earns crew levels by working, lets training speed it up, and waits after the cap before asking', () => {
  const cfg=progressionConfig(), state=createStudio(42,cfg), person=state.staff[0];
  const r=(cfg.staffGrowth as unknown as {progression:{xpPerLevel:number;trainXp:number;maxLevel:number}}).progression;
  const weeksPerLevel=r.xpPerLevel/cfg.staffGrowth.xpPerWeek;
  for(let i=0;i<weeksPerLevel-1;i++) recordProgressWork(state,person,cfg);
  expect(person.progression?.level).toBe(0);
  recordProgressWork(state,person,cfg);
  expect(person.progression?.level).toBe(1); // no fee, no training
  state.cash=1_000_000;
  expect(getChoices(state,cfg).options.some(d=>d.type==='train'&&d.staffId===person.id)).toBe(true);
  const xp=person.totalXp, cash=state.cash;
  applyDecision(state,cfg,{type:'train',staffId:person.id});
  expect(person.totalXp).toBe(xp+r.trainXp);
  expect(state.cash).toBe(cash-cfg.staffGrowth.trainCost);
  for(let i=0;i<200&&person.progression!.level<r.maxLevel;i++) recordProgressWork(state,person,cfg);
  expect(person.progression?.level).toBe(r.maxLevel);
  expect(getChoices(state,cfg).options.some(d=>d.type==='train'&&d.staffId===person.id)).toBe(false); // nothing left this stage
  expect(person.progression?.request).toBe(false);
  for(let i=0;i<19;i++) recordProgressWork(state,person,cfg);
  expect(person.progression?.request).toBe(false);
  for(let i=0;i<12;i++) recordProgressWork(state,person,cfg);
  expect(person.progression?.request).toBe(true);
  applyDecision(state,cfg,{type:'defer_specialty',staffId:person.id});
  expect(person.progression?.request).toBe(false);
  for(let i=0;i<31;i++) recordProgressWork(state,person,cfg);
  applyDecision(state,cfg,{type:'specialize',staffId:person.id});
  expect(person.progression?.stage).toBe('specialist');
  expect(person.progression?.level).toBe(0);
  expect(getChoices(state,cfg).options.some(d=>d.type==='train'&&d.staffId===person.id)).toBe(true); // specialist levels to earn
  for(let i=0;i<weeksPerLevel;i++) recordProgressWork(state,person,cfg);
  expect(person.progression?.level).toBe(1);
 });
 it('replays a real career with contracts, growth, a deferred request and specialization', () => {
  const cfg=progressionConfig(), state=createStudio(42,cfg), actions:Decision[]=[];
  const decide=(d:Decision)=>{applyDecision(state,cfg,d);actions.push(d)};
  const person=state.staff[0];let deferred=false;
  for(let i=0;i<500&&person.progression?.stage!=='specialist';i++) {
   const ch=getChoices(state,cfg);
   if(ch.phase==='contract')decide({type:'wait'});
   else if(person.progression?.request){decide({type:deferred?'specialize':'defer_specialty',staffId:person.id});deferred=true;}
   else if(ch.options.some(d=>d.type==='train'&&d.staffId===person.id))decide({type:'train',staffId:person.id});
   else decide({type:'contract',contractId:'commercial_edit'});
  }
  expect(person.progression?.stage).toBe('specialist');expect(deferred).toBe(true);
  const saved=readSave(encodeSave(state,actions,{genre:'Action',theme:'Spies',approach:'balanced'}));
  expect(saved.ok).toBe(true);if(saved.ok)expect(saved.state).toEqual(state);
 });
 it('allows exceptional specialists to reach, but never exceed, the 255 ceiling', () => {
  let reached=false;
  for(let seed=1;seed<=60;seed++){
   const cfg=progressionConfig(),state=createStudio(seed,cfg);state.cash=1000000;state.capacityLevel=2;state.maxStaff=8;
   applyDecision(state,cfg,{type:'hire'});const person=state.staff.at(-1)!;
   for(let w=0;w<400&&!person.progression?.request;w++)recordProgressWork(state,person,cfg);
   applyDecision(state,cfg,{type:'specialize',staffId:person.id});
   for(let w=0;w<200;w++)recordProgressWork(state,person,cfg);
   expect(person.progression?.level).toBe(5);
   const values=Object.values(person.stats);expect(Math.max(...values)).toBeLessThanOrEqual(255);if(values.includes(255)){reached=true;break;}
  }
  expect(reached).toBe(true);
 });
 it('reads old and new replay saves', () => {
  for(const cfg of [baselineConfig(),progressionConfig()]) {
   const state=createStudio(42,cfg), raw=encodeSave(state,[],{genre:'Action',theme:'Spies',approach:'balanced'});
   const saved=readSave(raw); expect(saved.ok).toBe(true);
   if(saved.ok)expect(saved.state).toEqual(state);
  }
 });
});
