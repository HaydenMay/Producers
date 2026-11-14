import { describe, expect, it } from 'vitest';
import { baselineConfig } from '../../src/core/config';
import { applyDecision, createStudio, getChoices } from '../../src/core/simulation';
import type { Decision } from '../../src/core/types';
import { encodeSave, makeSave, readSave } from '../../src/game-preview/save';

describe('preview saves', () => {
  it('replays decisions including a pending casting choice with exactly the same state and RNG', () => {
    const cfg = baselineConfig(), state = createStudio(42, cfg);
    const plan = getChoices(state, cfg).options.find(d => d.type === 'plan')!;
    const actions: Decision[] = [{ ...plan, approach: 'crowd' } as Decision];
    applyDecision(state, cfg, actions[0]);
    while (getChoices(state, cfg).phase === 'production') {
      const action: Decision = { type: 'wait' };
      actions.push(action); applyDecision(state, cfg, action);
    }
    const saved = makeSave(state, actions, { genre: 'Action', theme: 'Spies', approach: 'crowd' });
    const loaded = readSave(JSON.stringify(saved));
    expect(loaded.ok).toBe(true);
    if (loaded.ok) {
      expect(loaded.state).toEqual(state);
      expect(loaded.ui.approach).toBe('crowd');
      expect(getChoices(loaded.state, cfg).phase).toBe('casting');
    }
  });
  it('rejects corrupt, incompatible and altered saves without attempting to use them', () => {
    const state = createStudio(42, baselineConfig());
    const save = makeSave(state, [], { genre: '', theme: '', approach: 'balanced' });
    expect(readSave('{').ok).toBe(false);
    expect(readSave(JSON.stringify({ ...save, version: 999 })).ok).toBe(false);
    expect(readSave(JSON.stringify({ ...save, configHash: 'changed' })).ok).toBe(false);
    expect(readSave(JSON.stringify({ ...save, actions: [{ type: 'cast', starId: 'fake' }] })).ok).toBe(false);
    expect(readSave(JSON.stringify({ ...save, stateHash: 'changed' })).ok).toBe(false);
    expect(() => encodeSave(state, Array.from({length:5001}, () => ({type:'wait'})), {genre:'',theme:'',approach:'balanced'})).toThrow('Save size limit');
  });
  it('restores a three-film career and a contract at every meaningful checkpoint', () => {
    const cfg = baselineConfig(); let state = createStudio(42, cfg);
    const actions: Decision[] = [];
    const act = (d: Decision) => { applyDecision(state, cfg, d); actions.push(d); };
    const checkpoint = () => {
      const loaded = readSave(JSON.stringify(makeSave(state, actions, { genre: 'Action', theme: 'Spies', approach: 'awards' })));
      expect(loaded.ok).toBe(true);
      if (!loaded.ok) throw new Error('Save could not be restored');
      expect(loaded.state).toEqual(state);
      state = loaded.state;
    };
    for (let film = 0; film < 3; film++) {
      for (let n=0; n<100 && !getChoices(state,cfg).options.some(d=>d.type==='plan'); n++) act({type:'wait'});
      const choices = getChoices(state,cfg);
      const plan = choices.options.find(d=>d.type==='plan' && d.ipRelation==='new' && !d.format && !d.route);
      expect(plan).toBeDefined();
      act({...plan!, approach: film===0?'crowd':film===1?'awards':'balanced'} as Decision);
      checkpoint();
      while (state.project) {
        const phase = getChoices(state,cfg);
        if (phase.phase==='casting' || phase.phase==='distribution') checkpoint();
        act(phase.phase==='production'?{type:'wait'}:phase.options[0]);
      }
      checkpoint();
      if (film===0) {
        const contract=getChoices(state,cfg).options.find(d=>d.type==='contract');
        expect(contract).toBeDefined(); act(contract!); act({type:'wait'}); checkpoint();
        while(state.contract) act({type:'wait'});
        expect(state.ledger.some(e=>e.kind==='contract_fee')).toBe(true);
      }
    }
    expect(state.releases).toHaveLength(3);
    expect(state.releases.some(r=>r.studioTake>0)).toBe(true);
    expect(state.contractHistory).toHaveLength(1);
    checkpoint();
  });
});
