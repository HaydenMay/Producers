// @vitest-environment jsdom
// Gate 4: the thin UI can drive the candidate economy by hand: contract → movie → casting → distribution meeting.
import { describe, expect, it } from "vitest";
import { readFileSync } from "node:fs";

describe("web UI Gate 4 smoke test", () => {
  it("takes a contract, starts a studio-funded movie, casts and chooses a distributor at 80%", async () => {
    const html = readFileSync("src/web/index.html", "utf8");
    document.body.innerHTML = html.slice(html.indexOf("<body>") + 6, html.indexOf("</body>")).replace(/<script[\s\S]*?<\/script>/, "");
    (globalThis as unknown as { alert: (m: string) => void }).alert = (m: string) => {
      throw new Error(`alert: ${m}`);
    };
    await import("../../src/web/main");
    const click = (sel: string) => (document.querySelector(sel) as HTMLButtonElement).click();
    const career = () => document.getElementById("tab-career")!.innerHTML;
    click("#g4cfg");
    expect(career()).toContain("Work-for-hire");
    click('[data-contract="commercial_edit"]');
    expect(career()).toContain("Work-for-hire: Commercial edit");
    click("#toNext");
    expect(career()).toContain("Delivered Commercial edit");
    click("#doPlan");
    expect(career()).toContain("studio funding");
    click("#toNext");
    click("[data-cast]:not([disabled])");
    click("#toNext");
    expect(career()).toContain("distribution meeting");
    expect(career()).toContain("nothing is paid to you at signing");
    click("[data-dist]");
    expect(career()).toContain("In production");
  }, 60000);
});
