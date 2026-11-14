import assert from 'node:assert/strict';
import { existsSync, readFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';

const output='dist-pages';
for(const [relative,title] of [['index.html','Producers — Character Lab'],['studio/index.html','Producers — Visual Prototype']]){
 const path=join(output,relative);assert.ok(existsSync(path),`Missing ${path}`);
 const html=readFileSync(path,'utf8');assert.ok(html.includes(title),`${relative} has the wrong entry point`);
 const base=new URL(relative==='index.html'?'https://example.test/Producers/':'https://example.test/Producers/studio/');
 for(const match of html.matchAll(/(?:src|href)="([^"]+)"/g)){
  if(match[1].startsWith('data:'))continue;
  const url=new URL(match[1],base);assert.ok(url.pathname.startsWith('/Producers/'),`Incorrect asset base ${url}`);
  const asset=join(output,decodeURIComponent(url.pathname.slice('/Producers/'.length)));
  assert.ok(existsSync(asset),`Missing entry asset ${asset}`);
 }
}
assert.ok(readdirSync(join(output,'assets')).some(file=>/^worker-lab-.*\.glb$/.test(file)),'Missing character model');
console.log('Pages output: character lab at /Producers/, studio at /Producers/studio/, entry assets present.');
