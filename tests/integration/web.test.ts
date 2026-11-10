// @vitest-environment jsdom
// Smoke test: the thin UI renders and can drive a full movie through the shared core.
import { describe, expect, it } from "vitest";
import { readFileSync } from "node:fs";

describe("web UI smoke test", () => {
  it("renders, plays one movie via the strategy button, and runs a small batch", async () => {
    const html = readFileSync("src/web/index.html", "utf8");
    document.body.innerHTML = html.slice(html.indexOf("<body>") + 6, html.indexOf("</body>")).replace(/<script[\s\S]*?<\/script>/, "");
    (globalThis as unknown as { alert: (m: string) => void }).alert = (m: string) => {
      throw new Error(`alert: ${m}`);
    };
    await import("../../src/web/main");
    expect(document.getElementById("tab-career")!.innerHTML).toContain("Plan the next production");
    (document.getElementById("agent20") as HTMLButtonElement).click();
    expect(document.getElementById("tab-career")!.innerHTML).toContain("Releases (newest first)");
    expect(document.querySelectorAll("#tab-career details").length).toBe(1);
    (document.getElementById("bSeeds") as HTMLInputElement).value = "3";
    (document.getElementById("bProd") as HTMLInputElement).value = "3";
    (document.getElementById("bRun") as HTMLButtonElement).click();
    expect(document.getElementById("bOut")!.innerHTML).toContain("invariant violations: 0");
  });
});
