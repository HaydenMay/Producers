import { describe, it, expect } from 'vitest';
import { officeLayout } from '../../src/game/office/layout';

describe('office layout', () => {
  for (const count of [2, 4, 6, 8] as const) {
    it(`provides ${count} unique, separated workstations within the room`, () => {
      const layout = officeLayout(count);
      expect(layout.seats).toHaveLength(count);
      for (let i=0; i<count; i++) {
        const a=layout.seats[i];
        expect(Math.abs(a.x)).toBeLessThan(layout.width/2 - 1.6);
        expect(Math.abs(a.z)).toBeLessThan(layout.depth/2 - 1.2);
        for (const b of layout.seats.slice(i+1)) {
          expect(Math.abs(a.x-b.x)>=3.6 || Math.abs(a.z-b.z)>=2.6).toBe(true);
        }
      }
    });
  }
});
