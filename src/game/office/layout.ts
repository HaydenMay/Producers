export type SeatCount = 2 | 4 | 6 | 8;
export interface OfficeLayout { width: number; depth: number; seats: { x:number; z:number }[] }
/** Workstations face +X; their desktop is centered on the position, in meters. */
export function officeLayout(count: SeatCount): OfficeLayout {
  if (count === 2) return { width:9.6, depth:7.4, seats:[{x:-1.9,z:-.65},{x:1.9,z:.65}] };
  const columns = count / 2;
  const seats = Array.from({length: count}, (_, i) => ({ x: i % 2 ? 2 : -2, z: (Math.floor(i / 2) - (columns - 1) / 2) * 2.85 }));
  return { width: 10.2, depth: Math.max(8.4, (columns - 1) * 2.85 + 4.6), seats };
}
