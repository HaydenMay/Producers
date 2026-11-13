import { PrototypeGame } from './game';
import { createOffice } from './scene';
import type { Decision } from '../core/types';
import './style.css';

const game = new PrototypeGame();
const root = document.querySelector<HTMLDivElement>('#app')!;
root.innerHTML = `<div id="office" aria-label="The studio office"></div><header><div class="logo">P <span>PRODUCERS</span></div><div class="topline">A small studio. Big stories.</div></header><div id="notice" role="status"></div><aside id="drawer"></aside><div id="modal"></div><footer>VISUAL PROTOTYPE <span>·</span> V0.1</footer>`;
try { createOffice(document.querySelector('#office')!, game.state.staff); } catch { document.querySelector('#office')!.innerHTML = '<div class="webgl">Your browser could not start the 3D office. Please try a browser with WebGL enabled.</div>'; }
let expanded = false;
let dismissed = false;
const esc = (s:string) => s.replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]!));
const money = (n:number) => `$${Math.round(n).toLocaleString('en-US')}`;
const drawer = document.querySelector<HTMLElement>('#drawer')!;
const modal = document.querySelector<HTMLElement>('#modal')!;
function act(d: Decision) { try { game.decide(d); dismissed = false; render(); } catch(e) { alert(e instanceof Error ? e.message : String(e)); } }
function decisionLabel(d:Decision):string {
  const s=game.state, ch=game.choices;
  if(d.type==='cast'){const c=ch.auditionCards?.find(x=>x.starId===d.starId);return `${s.stars[d.starId]?.name ?? 'Star'} · ${money(c?.price ?? 0)}${c?.fallbackInserted?' · free fallback':''}`}
  if(d.type==='distribute'){if(d.distributorId===null)return 'Self-distribute · keep 100%';const b=ch.bids?.find(x=>x.distributorId===d.distributorId);return `${b?.name ?? d.distributorId} · ${Math.round((b?.share ?? 0)*100)}% distributor share · ${money(b?.adSpend ?? 0)} advertising`}
  if(d.type==='choose_offer'){const o=ch.offers?.find(x=>x.distributorId===d.distributorId);return d.distributorId===null?'Self-fund':`${d.distributorId} · ${money(o?.advance ?? 0)} advance`}
  if(d.type==='market')return `${d.campaign} · ${money(ch.campaigns?.find(x=>x.id===d.campaign)?.cost ?? 0)}`;
  return d.type;
}
function render(){
 const s=game.state, p=s.project, ch=game.choices, latest=s.releases.at(-1);
 const status=p ? `${Math.floor(p.progress)}% complete` : latest?'Released':'Ready for your first film';
 drawer.innerHTML=`<button class="drawer-toggle" aria-expanded="${expanded}" aria-label="${expanded?'Collapse':'Expand'} production details">${expanded?'→':'←'}</button><div class="eyebrow">${p?'NOW PRODUCING':latest?'LATEST RELEASE':'YOUR STUDIO'} <span>WEEK ${s.week}</span></div><h1>${esc(p?.title ?? latest?.title ?? 'A story begins')}</h1><p class="phase">${p?`${esc(ch.phase==='production'?'In production':ch.phase)} · `:''}${status}</p>${expanded?`<div class="details"><div class="divider"></div><div class="section-label">PRODUCTION POINTS</div><div class="points">${(['plot','writing','filming','editing'] as const).map(k=>`<div><small>${k}</small><strong>${p?p.meterPoints[k].toFixed(1):'—'}</strong></div>`).join('')}</div><div class="divider"></div><div class="section-label">STUDIO</div><div class="data"><span>Crew</span><b>${s.staff.length} employees</b><span>Cash</span><b>${money(s.cash)}</b>${p?`<span>Base cost</span><b>${money(p.baseCost)}</b><span>Genre</span><b>${esc(p.genre)} · ${esc(p.theme)}</b>`:''}</div></div>`:''}<div class="actions">${p&&ch.phase==='production'?'<button class="primary" id="week">Advance week</button><button class="secondary" id="next">Next decision</button>':!p&&!latest?'<button class="primary" id="start">Start a movie</button>':p?'<button class="primary" id="show">View decision</button>':'<button class="secondary" id="reset">Start over</button>'}</div>`;
 drawer.querySelector<HTMLButtonElement>('.drawer-toggle')!.onclick=()=>{expanded=!expanded;render()};
 drawer.querySelector('#start')?.addEventListener('click',()=>{try{game.startMovie();render()}catch(e){alert(String(e))}});
 drawer.querySelector('#week')?.addEventListener('click',()=>act({type:'wait'}));
 drawer.querySelector('#next')?.addEventListener('click',()=>{game.nextDecision();render()});
 drawer.querySelector('#show')?.addEventListener('click',()=>{dismissed=false;render()});
 drawer.querySelector('#reset')?.addEventListener('click',()=>{game.reset();dismissed=false;render()});
 const required=['casting','distribution','pitch','marketing'].includes(ch.phase);
 if(required&&!dismissed){const titles:Record<string,string>={casting:'Choose your star',distribution:'Choose a distributor',pitch:'Choose an offer',marketing:'Choose a campaign'};const opts=ch.options.filter(d=>['cast','distribute','choose_offer','market'].includes(d.type));modal.innerHTML=`<div class="backdrop"><section class="dialog" role="dialog" aria-modal="true" aria-labelledby="decision-title"><div class="eyebrow">PRODUCTION DECISION</div><h2 id="decision-title">${titles[ch.phase]}</h2><p>Choose from the options available to your studio.</p><div class="choice-list">${opts.map((d,i)=>`<button data-choice="${i}">${esc(decisionLabel(d))}<span>→</span></button>`).join('')}</div><button class="text-button" id="later">Close for now</button></section></div>`;modal.querySelectorAll<HTMLButtonElement>('[data-choice]').forEach(b=>b.onclick=()=>act(opts[Number(b.dataset.choice)]));modal.querySelector('#later')?.addEventListener('click',()=>{dismissed=true;render()});}
 else if(latest&&!p&&!dismissed){modal.innerHTML=`<div class="backdrop"><section class="dialog" role="dialog" aria-modal="true" aria-labelledby="decision-title"><div class="eyebrow">FILM RELEASED · WEEK ${latest.releaseWeek}</div><h2 id="decision-title">${esc(latest.title)}</h2><p>Your first production has premiered.</p><div class="results"><div><small>AUDIENCE</small><strong>${latest.audience.toFixed(1)}<em> / 10</em></strong></div><div><small>CRITICS</small><strong>${latest.critic.toFixed(1)}<em> / 10</em></strong></div></div><button class="primary" id="close-result">Back to the studio</button></section></div>`;modal.querySelector('#close-result')?.addEventListener('click',()=>{dismissed=true;render()});}
 else modal.innerHTML='';
}
render();
