import type { Choices,Meter,StudioState } from '../core/types';

export type ProjectStatus={kind:'idle'|'movie'|'contract';label:string;title:string;detail:string;progress?:number;points?:Record<Meter,number>};
/** Display-only summary. Quality meters are raw points, not score percentages. */
export function projectStatus(state:StudioState,choices:Choices):ProjectStatus{
 const p=state.project;
 if(p){
  const labels:Record<string,string>={casting:'CASTING DECISION',distribution:'DISTRIBUTION DECISION',marketing:'CAMPAIGN DECISION',pitch:'OFFER DECISION'};
  const progress=Math.max(0,Math.min(100,Math.floor(p.progress)));
  return {kind:'movie',label:labels[choices.phase]??'IN PRODUCTION',title:p.title,detail:`${progress}% complete`,progress,
   points:{plot:Math.round(p.meterPoints.plot),writing:Math.round(p.meterPoints.writing),filming:Math.round(p.meterPoints.filming),editing:Math.round(p.meterPoints.editing)}};
 }
 if(state.contract){const c=state.contract;return {kind:'contract',label:'WORK FOR HIRE',title:c.name,detail:`${c.weeksWorked} / ${c.weeks} weeks`,progress:Math.floor(100*c.weeksWorked/c.weeks)}}
 return {kind:'idle',label:'YOUR STUDIO',title:'No active project',detail:'Plan a movie'};
}
