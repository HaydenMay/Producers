/** A trait record is an identity; changing catalog order never changes saved people. */
export const HAIR_STYLES=['short','swept','curls','long','bald'] as const;
export const FACIAL_HAIR=['none','moustache','goatee','beard'] as const;
export const GLASSES=['none','square'] as const;
export const HAIR_COLORS={black:'#292623',espresso:'#51382b',chestnut:'#83513a',blonde:'#d9a74a',auburn:'#a95638',silver:'#a7a5a0'} as const;
export const SKIN_COLORS={ivory:'#efd0ae',peach:'#dba77d',tan:'#bd805e',brown:'#a26a4c',deep:'#80503d'} as const;
export const SHIRT_COLORS={red:'#b94f43',blue:'#416fa4',green:'#558254',gold:'#d8a93e',purple:'#82609a',charcoal:'#454b54',cream:'#e9dbbd'} as const;
export const PANTS_COLORS={navy:'#344b67',brown:'#634737',grey:'#74767b',black:'#34383d',tan:'#ac885f'} as const;
export type Traits={hairStyle:typeof HAIR_STYLES[number];hairColor:keyof typeof HAIR_COLORS;skin:keyof typeof SKIN_COLORS;facialHair:typeof FACIAL_HAIR[number];glasses:typeof GLASSES[number];shirt:keyof typeof SHIRT_COLORS;pants:keyof typeof PANTS_COLORS};
export const DEFAULT_TRAITS:Traits={hairStyle:'swept',hairColor:'black',skin:'peach',facialHair:'beard',glasses:'none',shirt:'red',pants:'navy'};
export const JUSTIN_TRAITS:Traits={hairStyle:'short',hairColor:'black',skin:'tan',facialHair:'none',glasses:'none',shirt:'blue',pants:'grey'};
export type SavedLook={name:string;traits:Traits};
const choices={hairStyle:HAIR_STYLES,hairColor:Object.keys(HAIR_COLORS),skin:Object.keys(SKIN_COLORS),facialHair:FACIAL_HAIR,glasses:GLASSES,shirt:Object.keys(SHIRT_COLORS),pants:Object.keys(PANTS_COLORS)};
export function hairColorsForSkin(skin:Traits['skin']):Traits['hairColor'][] {
 return (Object.keys(HAIR_COLORS) as Traits['hairColor'][]).filter(color=>skin==='ivory'?color!=='silver':['tan','brown','deep'].includes(skin)?!['blonde','auburn'].includes(color):true);
}
function compatible(traits:Traits):Traits {return hairColorsForSkin(traits.skin).includes(traits.hairColor)?traits:{...traits,hairColor:'espresso'}}
export function updateTrait<K extends keyof Traits>(traits:Traits,key:K,value:Traits[K]):Traits{return compatible({...traits,[key]:value})}
export function serializeTraits(traits:Traits):string{return JSON.stringify(traits)}
export function parseTraits(raw:string|null):Traits|null{
 if(!raw)return null;
 try{const data=JSON.parse(raw) as Record<string,unknown>;
  if(!data || typeof data!=='object' || Object.entries(choices).some(([key,values])=>typeof data[key]!=='string'||!values.includes(data[key] as never)))return null;
  return compatible(Object.fromEntries(Object.keys(choices).map(key=>[key,data[key]])) as Traits);
 }catch{return null}
}
/** Seeded independently across all slots; this is appearance only, never game randomness. */
export function generateTraits(seed:string):Traits{
 let state=2166136261;for(const c of seed)state=Math.imul(state^c.charCodeAt(0),16777619)>>>0;
 const next=()=>{state=(state+0x6D2B79F5)>>>0;let v=state;v=Math.imul(v^(v>>>15),v|1);v^=v+Math.imul(v^(v>>>7),v|61);return ((v^(v>>>14))>>>0)/4294967296};
 const generated=Object.fromEntries(Object.entries(choices).map(([key,values])=>[key,values[Math.floor(next()*values.length)]])) as Traits;
 const allowed=hairColorsForSkin(generated.skin);if(!allowed.includes(generated.hairColor))generated.hairColor=allowed[Math.floor(next()*allowed.length)];return generated;
}
/** Build a reproducible cast whose prominent traits differ from one another. */
export function generateLineup(selected:Traits,seed:string,saved:Traits[]=[]):Traits[]{
 const cast=[selected];
 for(const person of saved)if(cast.length<4&&!cast.some(other=>serializeTraits(other)===serializeTraits(person)))cast.push(person);
 const pool=Array.from({length:256},(_,i)=>generateTraits(`${seed}-${i}`));
 const weights={hairStyle:5,shirt:5,facialHair:5,skin:4,hairColor:2,pants:1,glasses:1} as const;
 while(cast.length<4){
  const score=(person:Traits)=>Object.entries(weights).reduce((total,[key,weight])=>total+(cast.some(other=>other[key as keyof Traits]===person[key as keyof Traits])?0:weight),0);
  let best=0;for(let i=1;i<pool.length;i++)if(score(pool[i])>score(pool[best]))best=i;
  cast.push(pool.splice(best,1)[0]);
 }
 return cast;
}
export function saveLook(saved:SavedLook[],name:string,traits:Traits):SavedLook[]{
 const label=name.trim().slice(0,30);if(!label)return saved;
 const others=saved.filter(item=>item.name.toLocaleLowerCase()!==label.toLocaleLowerCase());
 return [...others,{name:label,traits:{...traits}}].slice(-12);
}
export function parseSavedLooks(raw:string|null):SavedLook[]{
 if(!raw)return [];
 try{const list=JSON.parse(raw);if(!Array.isArray(list))return [];
  let valid:SavedLook[]=[];for(const item of list.slice(0,50)){
   if(!item||typeof item.name!=='string'||!item.name.trim())continue;
   const traits=parseTraits(JSON.stringify(item.traits));if(traits)valid=saveLook(valid,item.name,traits);
  }return valid;
 }catch{return []}
}
