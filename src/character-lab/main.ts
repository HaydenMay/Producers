import './style.css';
import { createLabScene, type DisplayMode, type Distance, type LabScene } from './scene';
import { DEFAULT_TRAITS, JUSTIN_TRAITS, FACIAL_HAIR, GLASSES, HAIR_COLORS, HAIR_STYLES, PANTS_COLORS, SHIRT_COLORS, SKIN_COLORS, generateTraits, parseSavedLooks, parseTraits, saveLook, serializeTraits, updateTrait, type SavedLook, type Traits } from './traits';

const root=document.querySelector<HTMLDivElement>('#app')!;
const studioLink=location.pathname.startsWith('/Producers/')?'<a class="studio-link" href="./studio/">Studio prototype <span aria-hidden="true">↗</span></a>':'';
root.innerHTML=`<div class="lab-shell">
 <header class="topbar"><div class="brand"><span class="brand-mark" aria-hidden="true">P</span><span><strong>PRODUCERS</strong><small>CHARACTER LAB</small></span></div><div class="top-actions"><span class="top-note"><span class="live-dot"></span> EARLY VISUAL EXPERIMENT</span>${studioLink}</div></header>
 <main class="workspace">
  <section class="stage" aria-label="3D character preview">
   <div class="stage-heading"><div><p class="eyebrow">THE CASTING ROOM <span> / </span> 01</p><h1>Meet your crew.</h1><p class="subtitle">A little personality goes a long way.</p></div><div class="preview-controls"><div class="mode-tabs" role="group" aria-label="Preview mode"><button type="button" data-mode="single">Single</button><button type="button" data-mode="lineup">Lineup <span>4</span></button></div><button type="button" id="shuffle-lineup" hidden>Shuffle generated ↻</button></div></div>
   <div class="viewer" id="viewer"><div id="canvas-host" aria-label="Three-dimensional character preview"></div><div class="loading" id="loading" role="status">Preparing your character<span class="loading-dots">...</span></div><div class="viewer-note" id="viewer-note">DRAG THE CHARACTER WITH THE TURN BUTTONS <span>·</span> NO ANIMATION YET</div></div>
   <div class="stage-footer"><div class="distance-control"><span>VIEW</span><div class="toggle" role="group" aria-label="Character viewing distance"><button type="button" data-distance="close">Close up</button><button type="button" data-distance="game">Game distance</button></div></div><div class="turn-control" role="group" aria-label="Turn character"><span>TURN</span><button type="button" data-turn="-1" aria-label="Turn character left">↶</button><button type="button" data-turn="1" aria-label="Turn character right">↷</button></div></div>
  </section>
  <aside class="controls" aria-label="Character traits"><div class="controls-head"><div><p class="eyebrow">YOUR CHARACTER</p><h2>Make them yours.</h2><p>Mix a look, or let us surprise you.</p></div><span class="sparkle" aria-hidden="true">✦</span></div><div class="quick-action"><button class="surprise" id="surprise" type="button"><span aria-hidden="true">✦</span> Surprise me</button></div>
   <div class="control-scroll" id="controls-body"></div>
   <div class="control-actions"><div class="action-row"><button id="jeremy" type="button">Jeremy example</button><button id="justin" type="button">Justin example</button></div><details class="saved-looks"><summary id="saved-summary">Saved looks</summary><div class="save-row"><label class="sr-only" for="look-name">Name this look</label><input id="look-name" maxlength="30" placeholder="Name this look"><button type="button" id="save-look">Save</button></div><div class="save-row"><label class="sr-only" for="saved-select">Choose saved look</label><select id="saved-select"><option value="">Choose saved look</option></select><button type="button" id="load-look">Load</button><button type="button" id="delete-look" aria-label="Delete selected saved look">×</button></div></details><button class="copy-look" id="copy" type="button">Copy link to this look <span aria-hidden="true">↗</span></button><p class="save-note" id="save-note" role="status">Your current look is saved on this device.</p></div>
  </aside>
 </main>
 <footer class="lab-footer"><span>PRODUCERS <i>·</i> CHARACTER LAB</span><span>STYLE EXPLORATION, NOT FINAL GAME ART</span></footer>
</div>`;
const $=<T extends Element>(selector:string)=>root.querySelector<T>(selector)!;
const body=$<HTMLElement>('#controls-body'),viewer=$<HTMLElement>('#canvas-host'),loading=$<HTMLElement>('#loading');
const urlTraits=parseTraits(new URLSearchParams(location.search).get('look'));
let saved:Traits|null=null;try{saved=parseTraits(localStorage.getItem('producers.character-lab.look.v1'))}catch{/* private browsing may block storage */}
let savedLooks:SavedLook[]=[];try{savedLooks=parseSavedLooks(localStorage.getItem('producers.character-lab.saved.v1'))}catch{/* storage is optional */}
let traits:Traits=urlTraits??saved??{...DEFAULT_TRAITS};
let scene:LabScene|undefined,mode:DisplayMode='single',distance:Distance='close',closed=false;
const pretty=(s:string)=>s.replace(/(^|[-_ ])\w/g,x=>x.toUpperCase());
function segmented<K extends keyof Traits>(title:string,key:K,values:readonly Traits[K][]) {
 return `<fieldset class="trait-group"><legend>${title}</legend><div class="choice-grid">${values.map(value=>`<button type="button" class="trait-choice" data-key="${key}" data-value="${value}" aria-pressed="${traits[key]===value}">${pretty(value)}</button>`).join('')}</div></fieldset>`;
}
function swatches<K extends keyof Traits>(title:string,key:K,colors:Record<string,string>) {
 return `<fieldset class="trait-group"><legend>${title}<span>${pretty(traits[key])}</span></legend><div class="swatches">${Object.entries(colors).map(([value,color])=>`<button type="button" class="swatch" data-key="${key}" data-value="${value}" aria-label="${title}: ${pretty(value)}" title="${pretty(value)}" aria-pressed="${traits[key]===value}" style="--swatch:${color}"><span></span></button>`).join('')}</div></fieldset>`;
}
function renderControls(){
 body.innerHTML=segmented('Hair style','hairStyle',HAIR_STYLES)+swatches('Hair color','hairColor',HAIR_COLORS)+swatches('Skin tone','skin',SKIN_COLORS)+segmented('Facial hair','facialHair',FACIAL_HAIR)+segmented('Glasses','glasses',GLASSES)+swatches('Shirt color','shirt',SHIRT_COLORS)+swatches('Pants color','pants',PANTS_COLORS);
 root.querySelectorAll<HTMLButtonElement>('[data-mode]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.mode===mode)));
 root.querySelectorAll<HTMLButtonElement>('[data-distance]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.distance===distance)));
 $<HTMLButtonElement>('#shuffle-lineup').hidden=mode!=='lineup';
 const note=$<HTMLElement>('#viewer-note');
 note.innerHTML=distance==='game'?'APPROXIMATE PHONE GAME SIZE <span>·</span> COMPARE AT A GLANCE':mode==='lineup'?'FOUR UNIQUE LOOKS <span>·</span> FIRST CHARACTER IS YOURS':'USE THE TURN BUTTONS TO VIEW THE CHARACTER';
}
function save(){try{localStorage.setItem('producers.character-lab.look.v1',serializeTraits(traits));$<HTMLElement>('#save-note').textContent='Your current look is saved on this device.'}catch{$<HTMLElement>('#save-note').textContent='This browser could not save the look.'}}
function select(next:Traits){
 traits=next;scene?.setTraits(traits);save();renderControls();
 const address=new URL(location.href);if(address.searchParams.has('look')){address.searchParams.delete('look');history.replaceState(null,'',address)}
}
body.addEventListener('click',event=>{
 const button=(event.target as HTMLElement).closest<HTMLButtonElement>('button[data-key]');if(!button)return;
 const key=button.dataset.key as keyof Traits,value=button.dataset.value as Traits[keyof Traits];select(updateTrait(traits,key,value));
 body.querySelector<HTMLButtonElement>(`[data-key="${key}"][data-value="${value}"]`)?.focus();
});
root.querySelectorAll<HTMLButtonElement>('[data-mode]').forEach(button=>button.onclick=()=>{mode=button.dataset.mode as DisplayMode;scene?.setMode(mode);renderControls()});
root.querySelectorAll<HTMLButtonElement>('[data-distance]').forEach(button=>button.onclick=()=>{distance=button.dataset.distance as Distance;scene?.setDistance(distance);renderControls()});
root.querySelectorAll<HTMLButtonElement>('[data-turn]').forEach(button=>button.onclick=()=>scene?.rotate(Number(button.dataset.turn)*Math.PI/6));
$<HTMLButtonElement>('#shuffle-lineup').onclick=()=>scene?.rerollLineup();
$<HTMLButtonElement>('#surprise').onclick=()=>select(generateTraits(`surprise-${crypto.getRandomValues(new Uint32Array(1))[0]}`));
$<HTMLButtonElement>('#jeremy').onclick=()=>select({...DEFAULT_TRAITS});
$<HTMLButtonElement>('#justin').onclick=()=>select({...JUSTIN_TRAITS});
function renderSaved(){
 const menu=$<HTMLSelectElement>('#saved-select'),selected=menu.value;menu.replaceChildren(new Option('Choose saved look',''));
 for(const item of savedLooks)menu.add(new Option(item.name,item.name));
 if(savedLooks.some(item=>item.name===selected))menu.value=selected;
 $<HTMLElement>('#saved-summary').textContent=`Saved looks (${savedLooks.length})`;
 scene?.setSaved(savedLooks.map(item=>item.traits));
}
function storeSaved(){try{localStorage.setItem('producers.character-lab.saved.v1',JSON.stringify(savedLooks));return true}catch{return false}}
$<HTMLButtonElement>('#save-look').onclick=()=>{
 const input=$<HTMLInputElement>('#look-name'),name=input.value.trim();if(!name){$<HTMLElement>('#save-note').textContent='Enter a name for this look.';input.focus();return}
 savedLooks=saveLook(savedLooks,name,traits);const persisted=storeSaved();input.value='';renderSaved();
 $<HTMLElement>('#save-note').textContent=persisted?`${name.slice(0,30)} saved on this device.`:'Could not save to this browser; this look is available until the page closes.';
};
$<HTMLButtonElement>('#load-look').onclick=()=>{const item=savedLooks.find(x=>x.name===$<HTMLSelectElement>('#saved-select').value);if(item)select({...item.traits})};
$<HTMLButtonElement>('#delete-look').onclick=()=>{const name=$<HTMLSelectElement>('#saved-select').value;if(!name)return;savedLooks=savedLooks.filter(x=>x.name!==name);const persisted=storeSaved();renderSaved();$<HTMLElement>('#save-note').textContent=persisted?`${name} removed.`:'Removed for this session; the browser could not update saved looks.'};
$<HTMLButtonElement>('#copy').onclick=async()=>{
 const url=new URL(location.href);url.searchParams.set('look',serializeTraits(traits));
 try{await navigator.clipboard.writeText(url.toString());$<HTMLElement>('#save-note').textContent='Link copied. It recreates this look.'}catch{$<HTMLElement>('#save-note').textContent='Could not copy the link; your look is still saved here.'}
};
window.addEventListener('pagehide',event=>{if(!event.persisted){closed=true;scene?.dispose()}});
renderControls();renderSaved();save();
createLabScene(viewer,traits).then(result=>{if(closed){result.dispose();return}scene=result;scene.setTraits(traits);scene.setSaved(savedLooks.map(item=>item.traits));scene.setMode(mode);scene.setDistance(distance);loading.remove()}).catch(()=>{loading.textContent='Character could not load. ';const retry=document.createElement('button');retry.type='button';retry.textContent='Try again';retry.onclick=()=>location.reload();loading.append(retry)});
