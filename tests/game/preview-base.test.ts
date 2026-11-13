import { expect, it } from 'vitest';
import { resolveConfig } from 'vite';
it('serves preview builds at the GitHub Pages base',async()=>{
 const config=await resolveConfig({configFile:'vite.game.config.ts'},'serve','production','production',true);
 expect(config.base).toBe('/Producers/');
});
