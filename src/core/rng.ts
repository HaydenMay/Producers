// Seeded PRNG with independent named streams. No Math.random() anywhere in core.
import type { RngState } from "./types";

export const STREAMS = ["world", "trends", "talent", "work", "staff", "distributors", "names"] as const;
export type StreamName = (typeof STREAMS)[number];

function hashString(s: string): number {
  // FNV-1a 32-bit
  let h = 0x811c9dc5;
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i);
    h = Math.imul(h, 0x01000193) >>> 0;
  }
  return h >>> 0;
}

export function initRng(seed: number): RngState {
  const st: RngState = {};
  for (const name of STREAMS) st[name] = hashString(`${seed}:${name}`) || 1;
  return st;
}

/** mulberry32 step on a stored stream state. Mutates rng[stream]. Returns [0,1). */
export function next(rng: RngState, stream: StreamName): number {
  let t = (rng[stream] = (rng[stream] + 0x6d2b79f5) >>> 0);
  t = Math.imul(t ^ (t >>> 15), t | 1);
  t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
  return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
}

export function range(rng: RngState, stream: StreamName, lo: number, hi: number): number {
  return lo + (hi - lo) * next(rng, stream);
}

export function int(rng: RngState, stream: StreamName, lo: number, hiInclusive: number): number {
  return Math.floor(range(rng, stream, lo, hiInclusive + 1));
}

export function pick<T>(rng: RngState, stream: StreamName, arr: readonly T[]): T {
  return arr[Math.floor(next(rng, stream) * arr.length)];
}

export function weighted<T extends string>(rng: RngState, stream: StreamName, weights: Record<T, number>): T {
  const entries = Object.entries(weights) as [T, number][];
  const total = entries.reduce((a, [, w]) => a + w, 0);
  let r = next(rng, stream) * total;
  for (const [k, w] of entries) {
    r -= w;
    if (r <= 0) return k;
  }
  return entries[entries.length - 1][0];
}

/** Independent deterministic generator for agents (not stored in sim state). */
export function makeAgentRng(seed: number, label: string): () => number {
  let s = hashString(`${seed}:agent:${label}`) || 1;
  return () => {
    let t = (s = (s + 0x6d2b79f5) >>> 0);
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export { hashString };
