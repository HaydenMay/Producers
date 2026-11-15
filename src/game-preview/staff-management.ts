import { progressionRules } from '../core/staff-progression';
import type { Config } from '../core/config';
import { nextUpgrade } from '../core/simulation';
import { METERS,type Choices,type Staff,type StudioState } from '../core/types';

type Availability={enabled:boolean;reason:string};
export function hiring(state:StudioState,choices:Choices,cfg:Config):Availability{
 if(choices.phase!=='planning')return {enabled:false,reason:'Hire between productions and contracts.'};
 if(state.staff.length>=state.maxStaff)return {enabled:false,reason:'Studio capacity is full. Upgrade the studio for more seats.'};
 if(choices.spendableCash<cfg.staffGrowth.hireCost)return {enabled:false,reason:'Not enough available cash to hire.'};
 return {enabled:choices.options.some(d=>d.type==='hire'),reason:'A new employee is generated when hired; their wage depends on their skills.'};
}
export function training(person:Staff,choices:Choices,cfg:Config):Availability{
 if(choices.phase!=='planning')return {enabled:false,reason:'Train between productions and contracts.'};
 const rules=progressionRules(cfg), p=person.progression;
 if(rules && p){
  if(p.level>=rules.maxLevel)return {enabled:false,reason:p.stage==='general'?'At the crew cap. Keep working; they may ask about a specialty later.':'This employee has completed their specialty training.'};
  const needed=Math.max(0,rules.xpPerLevel-(person.totalXp-p.spentXp));
  if(needed)return {enabled:false,reason:`Earn ${needed} more work XP before the next level.`};
  if(choices.spendableCash<cfg.staffGrowth.trainCost)return {enabled:false,reason:'Not enough available cash to train.'};
  return {enabled:choices.options.some(d=>d.type==='train'&&d.staffId===person.id),reason:`Advance to level ${p.level+1}/5 with personal skill growth.`};
 }
 if(METERS.every(m=>person.stats[m]>=cfg.staffGrowth.statCap))return {enabled:false,reason:'All skills are already at their training cap.'};
 if(choices.spendableCash<cfg.staffGrowth.trainCost)return {enabled:false,reason:'Not enough available cash to train.'};
 return {enabled:choices.options.some(d=>d.type==='train'&&d.staffId===person.id),reason:`Improves all four skills by up to ${cfg.staffGrowth.trainGain} points.`};
}
export function expansion(state:StudioState,choices:Choices,cfg:Config){
 const next=nextUpgrade(state,cfg);if(!next)return null;
 const needs=[];if(choices.spendableCash<next.cost)needs.push('more available cash');if(state.prestige<next.prestige)needs.push('more prestige');
 return {...next,enabled:choices.options.some(d=>d.type==='upgrade_studio'),reason:needs.length?`Requires ${needs.join(' and ')}.`:'Available when other decisions are complete.'};
}
