import { PrototypeGame } from './game';
import { ProductionClock, type PointCue, type Speed } from './clock';
import { createOffice } from './scene';
import type { Decision, PlanDecision } from '../core/types';
import './style.css';

const game = new PrototypeGame();
const root = document.querySelector<HTMLDivElement>('#app')!;
root.innerHTML = `<div id="office" aria-label="The studio office"></div><header><div class="logo">P <span>PRODUCERS</span></div><div class="topline">A small studio. Big stories.</div></header><div id="notice" aria-live="polite"></div><aside id="drawer"></aside><div id="modal"></div><footer>GAMEPLAY PROTOTYPE <span>·</span> V0.3</footer>`;
let office: ReturnType<typeof createOffice> | undefined;
try { office = createOffice(document.querySelector('#office')!, game.state.staff); } catch { document.querySelector('#office')!.innerHTML = '<div class="webgl">Your browser could not start the 3D office. Please try a browser with WebGL enabled.</div>'; }
let expanded = false, dismissed = false, cueTimer: ReturnType<typeof setTimeout> | undefined;
const esc = (s:string) => s.replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]!));
const money = (n:number) => `$${Math.round(n).toLocaleString('en-US')}`;
const drawer = document.querySelector<HTMLElement>('#drawer')!;
const modal = document.querySelector<HTMLElement>('#modal')!;
const notice = document.querySelector<HTMLElement>('#notice')!;
const clock = new ProductionClock(game, (cue?: PointCue, error?: Error) => {
  if (error) { notice.textContent = `Playback stopped: ${error.message}`; notice.classList.add('shown'); }
  else if (cue && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    if (cueTimer) clearTimeout(cueTimer);
    notice.textContent = `${cue.meter[0].toUpperCase()+cue.meter.slice(1)} +${cue.amount.toFixed(1)}`;
    notice.classList.add('shown'); cueTimer = setTimeout(()=>notice.classList.remove('shown'), 1500);
  }
  office?.setWorking(clock.playing); render();
});
function decisionLabel(d:Decision):string {
 const s=game.state, ch=game.choices;
 if(d.type==='cast'){const c=ch.auditionCards?.find(x=>x.starId===d.starId);return `${s.stars[d.starId]?.name ?? 'Star'} · ${money(c?.price ?? 0)}${c?.fallbackInserted?' · free fallback':''}`}
 if(d.type==='distribute'){if(d.distributorId===null)return 'Self-distribute · keep 100%';const b=ch.bids?.find(x=>x.distributorId===d.distributorId);return `${b?.name ?? d.distributorId} · ${Math.round((b?.share ?? 0)*100)}% distributor share · ${money(b?.adSpend ?? 0)} advertising`}
 if(d.type==='choose_offer'){const o=ch.offers?.find(x=>x.distributorId===d.distributorId);return d.distributorId===null?'Self-fund':`${d.distributorId} · ${money(o?.advance ?? 0)} advance`}
 if(d.type==='market')return `${d.campaign} · ${money(ch.campaigns?.find(x=>x.id===d.campaign)?.cost ?? 0)}`;
 if(d.type==='continue_career')return 'Keep running the studio';
 if(d.type==='end_career')return 'Retire';
 return d.type;
}
function render(){
 const s=game.state, p=s.project, ch=game.choices, latest=s.releases.at(-1);
 const status=p ? `${Math.floor(p.progress)}% complete` : latest?'Released':'Ready for your first film';
 const plans=ch.options.filter((d):d is PlanDecision=>d.type==='plan'&&d.ipRelation==='new'&&!d.format);
 const active=p && ch.phase==='production';
 const waiting=['casting','distribution','pitch','marketing','career_end'].includes(ch.phase);
 // Keep buttons and the speed menu mounted during ticks so touch and keyboard focus survive.
 const viewKey = p && active ? `${p.id}:${expanded}:${clock.playing}:${clock.speed}` : '';
 if (p && active && drawer.dataset.viewKey===viewKey && !modal.hasChildNodes()) {
   const week = drawer.querySelector<HTMLElement>('#current-week');
   const phase = drawer.querySelector<HTMLElement>('#current-phase');
   if (week) week.textContent = `WEEK ${s.week}`;
   if (phase) phase.textContent = `In production · ${status}`;
   for (const k of ['plot','writing','filming','editing'] as const) {
     const value = drawer.querySelector<HTMLElement>(`[data-meter="${k}"]`);
     if (value) value.textContent = p.meterPoints[k].toFixed(1);
   }
   return;
 }
 drawer.dataset.viewKey=viewKey;
 drawer.innerHTML=`<button class="drawer-toggle" aria-expanded="${expanded}" aria-label="${expanded?'Collapse':'Expand'} production details">${expanded?'→':'←'}</button><div class="eyebrow">${p?'NOW PRODUCING':latest?'LATEST RELEASE':'YOUR STUDIO'} <span id="current-week">WEEK ${s.week}</span></div><h1>${esc(p?.title ?? latest?.title ?? 'A story begins')}</h1><p class="phase" id="current-phase">${p?`${esc(ch.phase==='production'?'In production':ch.phase)} · `:''}${status}</p>${expanded?`<div class="details"><div class="divider"></div><div class="section-label">PRODUCTION POINTS</div><div class="points">${(['plot','writing','filming','editing'] as const).map(k=>`<div><small>${k}</small><strong data-meter="${k}">${p?p.meterPoints[k].toFixed(1):'—'}</strong></div>`).join('')}</div><div class="divider"></div><div class="section-label">STUDIO</div><div class="data"><span>Crew</span><b>${s.staff.length} employees</b><span>Cash</span><b>${money(s.cash)}</b>${p?`<span>Base cost</span><b>${money(p.baseCost)}</b><span>Genre</span><b>${esc(p.genre)} · ${esc(p.theme)}</b>`:''}</div></div>`:''}${active?`<div class="playback"><button class="primary" id="play">${clock.playing?'Pause':'Play'}</button><label for="speed">Speed</label><select id="speed" aria-label="Playback speed"><option value="1" ${clock.speed===1?'selected':''}>1×</option><option value="2" ${clock.speed===2?'selected':''}>2×</option><option value="4" ${clock.speed===4?'selected':''}>4×</option></select>${!clock.playing?'<button class="secondary" id="step">Step week</button>':''}</div>`:waiting?'<div class="actions"><button class="primary" id="show">View decision</button></div>':!latest?'<div class="actions"><button class="primary" id="start">Start a movie</button></div>':dismissed&&plans.length?`<div class="new-project"><label for="plan">Next movie</label><select id="plan">${plans.map((x,i)=>`<option value="${i}">${esc(x.genre)} · ${esc(x.theme)}</option>`).join('')}</select><button class="primary" id="another">Start another project</button></div>`:dismissed&&latest?'<p class="phase project-unavailable">No movie is currently available with these funds. Reset to try again.</p>':''}<button class="text-button reset" id="reset">Reset studio</button>`;
 drawer.querySelector<HTMLButtonElement>('.drawer-toggle')!.onclick=()=>{expanded=!expanded;render()};
 drawer.querySelector('#start')?.addEventListener('click',()=>{dismissed=false;clock.startMovie()});
 drawer.querySelector('#another')?.addEventListener('click',()=>{const index=Number(drawer.querySelector<HTMLSelectElement>('#plan')!.value);dismissed=false;clock.startMovie(plans[index])});
 drawer.querySelector('#play')?.addEventListener('click',()=>clock.playing?clock.pause():clock.play());
 drawer.querySelector('#speed')?.addEventListener('change',e=>clock.setSpeed(Number((e.target as HTMLSelectElement).value) as Speed));
 drawer.querySelector('#step')?.addEventListener('click',()=>clock.step());
 drawer.querySelector('#show')?.addEventListener('click',()=>{dismissed=false;render()});
 drawer.querySelector('#reset')?.addEventListener('click',()=>{dismissed=false;clock.reset()});
 const required=waiting;
 if(required&&!dismissed){const titles:Record<string,string>={casting:'Choose your star',distribution:'Choose a distributor',pitch:'Choose an offer',marketing:'Choose a campaign',career_end:'Career complete'};const opts=ch.options.filter(d=>['cast','distribute','choose_offer','market','continue_career','end_career'].includes(d.type));modal.innerHTML=`<div class="backdrop"><section class="dialog" role="dialog" aria-modal="true" aria-labelledby="decision-title"><div class="eyebrow">PRODUCTION PAUSED</div><h2 id="decision-title">${titles[ch.phase]}</h2><p>Choose from the options available to your studio.</p><div class="choice-list">${opts.map((d,i)=>`<button data-choice="${i}">${esc(decisionLabel(d))}<span>→</span></button>`).join('')}</div><button class="text-button" id="later">Close for now</button><button class="text-button modal-reset" id="modal-reset">Reset studio</button></section></div>`;modal.querySelectorAll<HTMLButtonElement>('[data-choice]').forEach(b=>b.onclick=()=>{dismissed=false;clock.decide(opts[Number(b.dataset.choice)])});modal.querySelector('#later')?.addEventListener('click',()=>{dismissed=true;render()});modal.querySelector('#modal-reset')?.addEventListener('click',()=>{dismissed=false;clock.reset()});}
 else if(latest&&!p&&!dismissed){modal.innerHTML=`<div class="backdrop"><section class="dialog" role="dialog" aria-modal="true" aria-labelledby="decision-title"><div class="eyebrow">FILM RELEASED · WEEK ${latest.releaseWeek}</div><h2 id="decision-title">${esc(latest.title)}</h2><p>Your production has premiered.</p><div class="results"><div><small>AUDIENCE</small><strong>${latest.audience.toFixed(1)}<em> / 10</em></strong></div><div><small>CRITICS</small><strong>${latest.critic.toFixed(1)}<em> / 10</em></strong></div></div><button class="primary" id="close-result">Back to the studio</button></section></div>`;modal.querySelector('#close-result')?.addEventListener('click',()=>{dismissed=true;render()});}
 else modal.innerHTML='';
 drawer.inert = !!modal.querySelector('[role=dialog]');
}
document.addEventListener('visibilitychange',()=>{if(document.hidden)clock.suspend()});
window.addEventListener('blur',()=>clock.suspend());
window.addEventListener('pagehide',()=>{clock.suspend();if(cueTimer)clearTimeout(cueTimer)});
render();
