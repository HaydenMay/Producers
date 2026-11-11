import baseline from "../../config/baseline.json";
import legacyAdvance from "../../config/legacy-advance.json";
import { hashString } from "./rng";

export type Config = typeof baseline;

export function cloneConfig(c: Config): Config {
  return JSON.parse(JSON.stringify(c));
}

/** The Producers default: studio-funded production, 80% distributor bids, work-for-hire contracts (PROD-100/118). */
export function baselineConfig(): Config {
  return cloneConfig(baseline as Config);
}

/**
 * REGRESSION ONLY (PROD-115): the pre-Producers economy (advance at the pitch, lifeline, $40K start, no contracts).
 * Every earlier gate's byte-identity proof and overlay (candidate.json, gate3.json, gate4*.json) layers on this.
 */
export function legacyConfig(): Config {
  return withOverrides(baselineConfig(), legacyAdvance as Record<string, unknown>);
}

/** Deep-merge a partial override (e.g. {"audience":{"baseRetention":0.7}}) into a config copy. */
export function withOverrides(base: Config, overrides: Record<string, unknown>): Config {
  const out = cloneConfig(base) as unknown as Record<string, unknown>;
  const merge = (target: Record<string, unknown>, src: Record<string, unknown>) => {
    for (const [k, v] of Object.entries(src)) {
      if (v && typeof v === "object" && !Array.isArray(v) && target[k] && typeof target[k] === "object") {
        merge(target[k] as Record<string, unknown>, v as Record<string, unknown>);
      } else {
        target[k] = v;
      }
    }
  };
  merge(out, overrides);
  return out as unknown as Config;
}

/** Set a dotted path, e.g. setPath(cfg, "audience.baseRetention", 0.7). */
export function setPath(cfg: Config, path: string, value: unknown): Config {
  const out = cloneConfig(cfg) as unknown as Record<string, unknown>;
  const parts = path.split(".");
  let cur: Record<string, unknown> = out;
  for (let i = 0; i < parts.length - 1; i++) {
    if (!(parts[i] in cur)) throw new Error(`Unknown config path: ${path}`);
    cur = cur[parts[i]] as Record<string, unknown>;
  }
  if (!(parts[parts.length - 1] in cur)) throw new Error(`Unknown config path: ${path}`);
  cur[parts[parts.length - 1]] = value;
  return out as unknown as Config;
}

export function configHash(c: Config): string {
  return hashString(JSON.stringify(c)).toString(16).padStart(8, "0");
}
