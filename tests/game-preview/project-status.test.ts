import { describe,expect,it } from 'vitest';
import { baselineConfig } from '../../src/core/config';
import { applyDecision,createStudio,getChoices } from '../../src/core/simulation';
import { projectStatus } from '../../src/game-preview/project-status';

describe('project status',()=>{
 it('shows the current movie timeline and raw crew points, including a pending decision',()=>{
  const cfg=baselineConfig(),s=createStudio(42,cfg);
  expect(projectStatus(s,getChoices(s,cfg)).kind).toBe('idle');
  applyDecision(s,cfg,getChoices(s,cfg).options.find(d=>d.type==='plan')!);
  applyDecision(s,cfg,{type:'wait'});
  let status=projectStatus(s,getChoices(s,cfg));expect(status.kind).toBe('movie');expect(status.title).toBe(s.project!.title);
  expect(status.progress).toBe(Math.floor(s.project!.progress));expect(status.points?.plot).toBe(Math.round(s.project!.meterPoints.plot));
  while(getChoices(s,cfg).phase==='production')applyDecision(s,cfg,{type:'wait'});
  status=projectStatus(s,getChoices(s,cfg));expect(status.label).toBe('CASTING DECISION');
 });
 it('identifies contract progress instead of displaying movie stats',()=>{
  const cfg=baselineConfig(),s=createStudio(42,cfg);applyDecision(s,cfg,getChoices(s,cfg).options.find(d=>d.type==='contract')!);
  applyDecision(s,cfg,{type:'wait'});const status=projectStatus(s,getChoices(s,cfg));
  expect(status.kind).toBe('contract');expect(status.title).toBe(s.contract!.name);expect(status.detail).toBe(`1 / ${s.contract!.weeks} weeks`);expect(status.points).toBeUndefined();
 });
});
