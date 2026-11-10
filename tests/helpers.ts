import type { Choices, Decision, StudioState } from "../src/core/types";

export interface ScriptPrefs {
  genre?: string;
  theme?: string;
  relation?: "new" | "sequel" | "reboot" | "spinoff";
  offer?: "maxAdvance" | "maxReach" | "minReach" | "self" | "minRoyalty";
  star?: "cheapest" | "famous" | "bestFit" | "first";
  campaign?: string;
}

export function scriptedDecide(prefs: ScriptPrefs, starFitFn?: (s: StudioState, id: string) => number) {
  return (state: StudioState, ch: Choices): Decision => {
    switch (ch.phase) {
      case "planning": {
        const plans = ch.options.filter((o) => o.type === "plan") as Extract<Decision, { type: "plan" }>[];
        const rel = prefs.relation ?? "new";
        const want = plans.find((p) => p.ipRelation === rel && (!prefs.genre || p.genre === prefs.genre) && (!prefs.theme || p.theme === prefs.theme));
        return want ?? plans.find((p) => p.ipRelation === "new")!;
      }
      case "pitch": {
        const offers = ch.offers!;
        if (prefs.offer === "self" && ch.options.some((o) => o.type === "choose_offer" && o.distributorId === null)) return { type: "choose_offer", distributorId: null };
        const sorted = [...offers].sort((a, b) => {
          if (prefs.offer === "maxReach") return b.reach - a.reach;
          if (prefs.offer === "minReach") return a.reach - b.reach;
          if (prefs.offer === "minRoyalty") return a.royalty - b.royalty;
          return b.advance - a.advance;
        });
        return { type: "choose_offer", distributorId: sorted[0].distributorId };
      }
      case "casting": {
        const cards = ch.auditionCards!.filter((c) => c.affordable);
        let c = cards[0];
        if (prefs.star === "cheapest") c = [...cards].sort((a, b) => a.price - b.price)[0];
        if (prefs.star === "famous") c = [...cards].sort((a, b) => state.stars[b.starId].fame - state.stars[a.starId].fame)[0];
        if (prefs.star === "bestFit" && starFitFn) c = [...cards].sort((a, b) => starFitFn(state, b.starId) - starFitFn(state, a.starId))[0];
        return { type: "cast", starId: c.starId };
      }
      case "marketing": {
        const want = prefs.campaign ?? "none";
        const ok = ch.campaigns!.find((c) => c.id === want && c.affordable);
        return { type: "market", campaign: ok ? want : "none" };
      }
      default:
        return { type: "wait" };
    }
  };
}
