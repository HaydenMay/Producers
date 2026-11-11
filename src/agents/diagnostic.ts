// Gate 4Q diagnostic policy. Uses ONLY visible information (the studio's own revealed combo book), never hidden grades.
import { GRADE_VALUE, comboKey } from "../core/distribution";
import type { PlanDecision } from "../core/types";
import { affordableCards, campaign, offerDecision, type Strategy } from "./strategies";

/**
 * poor-fit-chooser: makes new movies on the worst pairing it has already SEEN fail (combo book), otherwise explores
 * an untried pairing at random. Cheapest Star, no campaign, never reinvests. Tests what bad pairings do in normal play.
 */
export const POOR_FIT_CHOOSER: Strategy = {
  id: "poor-fit-chooser",
  description: "Gate 4Q DIAGNOSTIC: repeats the worst revealed pairing (combo book) or explores untried ones; cheapest Star",
  decide(state, cfg, ch, rng) {
    switch (ch.phase) {
      case "planning": {
        const plans = ch.options.filter((o): o is PlanDecision => o.type === "plan" && !o.format && o.ipRelation === "new" && !o.route);
        if (!plans.length) return { type: "wait" };
        const known = plans
          .map((p) => ({ p, g: state.comboBook[comboKey(p.genre, p.theme)] }))
          .filter((x) => x.g)
          .map((x) => ({ p: x.p, v: GRADE_VALUE[x.g!.audience] + GRADE_VALUE[x.g!.critic] }))
          .sort((a, b) => a.v - b.v || (a.p.genre + a.p.theme < b.p.genre + b.p.theme ? -1 : 1));
        if (known.length && known[0].v <= -2) return known[0].p;
        const untried = plans.filter((p) => !state.comboBook[comboKey(p.genre, p.theme)]);
        const pool = untried.length ? untried : plans;
        return pool[Math.floor(rng() * pool.length)];
      }
      case "pitch":
        return offerDecision(ch, (o) => o.advance, rng, false);
      case "casting":
        return { type: "cast", starId: [...affordableCards(ch)].sort((a, b) => a.price - b.price)[0].starId };
      case "marketing":
        return campaign(ch, ["none"]);
      default:
        return { type: "wait" };
    }
  },
};
