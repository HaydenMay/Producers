// @vitest-environment jsdom
// F16: the thin UI drives a TV career and a streaming launch through the SAME applyDecision rules.
import { describe, expect, it } from "vitest";
import { readFileSync } from "node:fs";

describe("web UI Gate 3 smoke test", () => {
  it("loads the Gate 3 config, unlocks TV, airs a season and launches streaming", async () => {
    const html = readFileSync("src/web/index.html", "utf8");
    document.body.innerHTML = html.slice(html.indexOf("<body>") + 6, html.indexOf("</body>")).replace(/<script[\s\S]*?<\/script>/, "");
    (globalThis as unknown as { alert: (m: string) => void }).alert = (m: string) => {
      throw new Error(`alert: ${m}`);
    };
    await import("../../src/web/main");
    (document.getElementById("g3cfg") as HTMLButtonElement).click();
    // fast thresholds through the config editor (numbers only; same rules)
    const set = (p: string, v: string) => ((document.querySelector(`[data-path="${p}"]`) as HTMLInputElement).value = v);
    set("tv.unlock.prestige", "0");
    set("tv.unlock.cost", "0");
    set("streaming.unlock.prestige", "0");
    set("streaming.unlock.minCatalog", "2");
    set("streaming.buildCost", "1000");
    set("streaming.buildWeeks", "4");
    (document.getElementById("cApply") as HTMLButtonElement).click();
    (window as unknown as { __strat?: string }).__strat = "mixed";
    const career = () => document.getElementById("tab-career")!.innerHTML;
    for (let i = 0; i < 30 && !(career().includes("Streaming: live") && career().includes("Format: **tv season")); i++) (document.getElementById("agent20") as HTMLButtonElement).click();
    const html2 = career();
    expect(html2).toContain("Format: **tv season 1**");
    expect(html2).toContain("Streaming: live");
  }, 120000);
});
