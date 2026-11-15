import type { Config } from './config';
import { emit } from './events';
import { stableUnit } from './rng';
import { METERS, type Meter, type Staff, type StudioState } from './types';

type Rules = { enabled: boolean; xpPerLevel: number; maxLevel: number; requestMinWeeks: number; requestJitterWeeks: number };
export function progressionRules(cfg: Config): Rules | undefined {
 const rules = (cfg.staffGrowth as unknown as { progression?: Rules }).progression;
 return rules?.enabled ? rules : undefined;
}
export function initProgression(state: StudioState, person: Staff, cfg: Config): void {
 const rules=progressionRules(cfg); if (!rules || person.progression || person.role) return;
 const sorted=[...METERS].sort((a,b)=>person.stats[b]-person.stats[a]);
 const focus=sorted[0];
 const specialty=person.stats[sorted[0]]-person.stats[sorted[3]]<=4?'Producer':focus==='filming'?'Film Expert':focus==='editing'?'Editor':'Writer';
 person.progression={level:0,stage:'general',specialty,spentXp:0,workWeeksAtCap:0,request:false,requestAfterWeeks:rules.requestMinWeeks+Math.floor(stableUnit(state.seed,`request:${person.id}`)*(rules.requestJitterWeeks+1)),focus};
}
export function recordProgressWork(state: StudioState, person: Staff, cfg: Config): void {
 initProgression(state,person,cfg); person.totalXp+=cfg.staffGrowth.xpPerWeek;
 const p=person.progression, rules=progressionRules(cfg);
 if (!p || !rules || p.stage!=='general' || p.level<rules.maxLevel || p.request) return;
 p.workWeeksAtCap++;
 if(p.workWeeksAtCap>=p.requestAfterWeeks){p.request=true;emit(state,'specialty_request',`${person.name} would like to become a ${p.specialty}.`,{staffId:person.id});}
}
export function canAdvance(person: Staff,cfg: Config): boolean {
 const p=person.progression, r=progressionRules(cfg);
 return !r || (!!p && p.level<r.maxLevel && person.totalXp-p.spentXp>=r.xpPerLevel);
}
export function advanceProgression(state:StudioState,person:Staff,cfg:Config): void {
 const p=person.progression!,r=progressionRules(cfg)!;
 p.level++;p.spentXp+=r.xpPerLevel;
 for(const m of METERS){
  const focus:Meter=p.specialty==='Film Expert'?'filming':p.specialty==='Editor'?'editing':p.specialty==='Writer'?'writing':p.focus;
  const primary=p.stage==='general'?p.focus:focus;
  const base=m===primary?(p.stage==='general'?7:32):p.stage==='specialist'&&p.specialty==='Producer'?8:3;
  const extra=Math.floor(stableUnit(state.seed,`growth:${person.id}:${p.stage}:${p.level}:${m}`)*4);
  person.stats[m]=Math.min(cfg.staffGrowth.statCap,person.stats[m]+base+extra);
 }
 emit(state,'train',`${person.name} reached ${p.stage==='general'?'crew':p.specialty} level ${p.level}.`,{staffId:person.id});
}
export function respondToSpecialty(state:StudioState,staffId:string,accept:boolean):void {
 const person=state.staff.find(s=>s.id===staffId)!,p=person.progression!;
 p.request=false;p.workWeeksAtCap=0;
 if(accept){p.stage='specialist';p.level=0;p.spentXp=person.totalXp;emit(state,'specialty',`${person.name} became a ${p.specialty}.`,{staffId});}
 else emit(state,'specialty',`${person.name} will revisit their specialty later.`,{staffId});
}
