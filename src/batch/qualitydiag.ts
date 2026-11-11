// Gate 4Q diagnostic helpers shared by scripts/quality.ts and scripts/quality-traces.ts (normal rules only).
import type { Config } from "../core/config";
import { advanceWeek, applyDecision, createStudio, getChoices } from "../core/simulation";
import { pickDistribution } from "../agents/economy";
import type { PlanDecision, StudioState } from "../core/types";

/** Rookie scenario: the starting 2-staff studio makes only the given pairings (rotating), cheapest Star, best visible bid. */
export const PAIRS: Record<string, [string, string][]> = {
  natural: [["Horror", "Zombies"], ["Action", "Superheroes"], ["Comedy", "Sports"]],
  middling: [["Action", "Sports"], ["Comedy", "Superheroes"], ["Action", "Zombies"]],
  poor: [["Horror", "Sports"], ["Horror", "Spies"], ["Horror", "Superheroes"]],
};
export function rookie(seed: number, cfg: Config, pairs: [string, string][], n: number): StudioState {
  const s = createStudio(seed, cfg);
  let made = 0;
  for (let guard = 0; guard < 20000 && s.releases.length < n; guard++) {
    const ch = getChoices(s, cfg);
    if (ch.phase === "planning") {
      if (s.project === null && made < n) {
        const [g, t] = pairs[made % pairs.length];
        const plan = ch.options.find((o): o is PlanDecision => o.type === "plan" && !o.format && o.ipRelation === "new" && o.genre === g && o.theme === t && !o.route);
        if (plan) {
          applyDecision(s, cfg, plan);
          made++;
          continue;
        }
        const c = ch.options.find((o) => o.type === "contract");
        applyDecision(s, cfg, c ?? { type: "wait" });
        continue;
      }
      advanceWeek(s, cfg);
    } else if (ch.phase === "casting") applyDecision(s, cfg, { type: "cast", starId: [...ch.auditionCards!].filter((c) => c.affordable).sort((a, b) => a.price - b.price)[0].starId });
    else if (ch.phase === "distribution") applyDecision(s, cfg, pickDistribution(s, cfg, ch, "value"));
    else if (ch.phase === "marketing") applyDecision(s, cfg, { type: "market", campaign: "none" });
    else advanceWeek(s, cfg);
  }
  while (s.releases.some((r) => r.active)) advanceWeek(s, cfg); // let the runs finish so money is final
  return s;
}

