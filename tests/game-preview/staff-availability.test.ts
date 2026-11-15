import { describe,expect,it } from 'vitest';
import { baselineConfig } from '../../src/core/config';
import { createStudio,getChoices,applyDecision } from '../../src/core/simulation';
import { hiring,training,expansion } from '../../src/game-preview/staff-management';

describe('staff and studio purchase availability',()=>{
 it('explains cash, capacity, prestige and production restrictions using real choices',()=>{
  const cfg=baselineConfig(),state=createStudio(42,cfg);expect(hiring(state,getChoices(state,cfg),cfg).enabled).toBe(true);
  expect(expansion(state,getChoices(state,cfg),cfg)).toMatchObject({to:6,enabled:false});
  expect(expansion(state,getChoices(state,cfg),cfg)!.reason).toContain('cash');expect(expansion(state,getChoices(state,cfg),cfg)!.reason).toContain('prestige');
  const plan=getChoices(state,cfg).options.find(d=>d.type==='plan')!;applyDecision(state,cfg,plan);
  expect(hiring(state,getChoices(state,cfg),cfg)).toMatchObject({enabled:false});expect(training(state.staff[0],getChoices(state,cfg),cfg)).toMatchObject({enabled:false});
 });
 it('keeps training from wasting money when every skill is already capped',()=>{
  const cfg=baselineConfig(),state=createStudio(42,cfg);for(const key of Object.keys(state.staff[0].stats) as (keyof typeof state.staff[0]['stats'])[])state.staff[0].stats[key]=cfg.staffGrowth.statCap;
  expect(training(state.staff[0],getChoices(state,cfg),cfg)).toMatchObject({enabled:false});
 });
});
