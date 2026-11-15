import type { ProjectStatus } from './project-status';

/** Bind once so the studio clock only updates text, not the button or its focus. */
export function createProjectCardRenderer(card:HTMLButtonElement){
 const get=(selector:string)=>card.querySelector<HTMLElement>(selector)!;
 const label=get('#project-label'),title=get('#project-title'),detail=get('#project-detail');
 const timeline=get('#project-timeline'),fill=get('#project-timeline-fill'),points=get('#project-points');
 return (status:ProjectStatus)=>{
  label.textContent=status.label;title.textContent=status.title;detail.textContent=status.detail;
  timeline.hidden=status.progress===undefined;if(status.progress!==undefined)fill.style.width=`${status.progress}%`;
  points.hidden=!status.points;
  points.textContent=status.points?`Plot ${status.points.plot}  ·  Write ${status.points.writing}  ·  Film ${status.points.filming}  ·  Edit ${status.points.editing}`:'';
  const spoken=status.points?` Plot ${status.points.plot}, Writing ${status.points.writing}, Filming ${status.points.filming}, Editing ${status.points.editing} points.`:'';
  card.setAttribute('aria-label',`Open Projects. ${status.label}. ${status.title}. ${status.detail}.${spoken}`);
 };
}
