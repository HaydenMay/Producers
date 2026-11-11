// Gate 3 follow-up traces: render real seeded cases found by scripts/fu-matrix.ts (never scripted).
// Usage: npx tsx scripts/fu-traces.ts <variant> <strategy> <seed> <kind> [ipId] [title]
//   kind = show | firing
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { legacyConfig, withOverrides, type Config } from "../src/core/config";
import { runCareer } from "../src/batch/runner";
import { checkInvariants } from "../src/batch/diagnostics";
import { CASH_KINDS } from "../src/core/events";
import { seasonRows } from "../src/batch/seasonfeel";

const [variant, strategy, seedS, kind, ipId, title] = process.argv.slice(2);
const spec = JSON.parse(readFileSync("config/experiments/FU_matrix.json", "utf8"));
const all = [...spec.variants, ...spec.orderVariants];
const G3 = withOverrides(legacyConfig(), JSON.parse(readFileSync("config/gate3.json", "utf8")));
function cfgFor(name: string): Config {
  const v = all.find((x: { name: string }) => x.name === name);
  const base = v.base ? cfgFor(v.base) : G3;
  return withOverrides(base, { ...v.overrides, name: `fu_${name}` });
}
const cfg = cfgFor(variant);
const seed = Number(seedS);
const r = runCareer(seed, strategy, cfg, { productions: 0, years: 25 });
const s = r.state;
const $ = (x: number) => `${x < 0 ? "−" : ""}$${Math.abs(Math.round(x)).toLocaleString()}`;
const k = (x: number) => (Math.abs(x) >= 1e6 ? `${(x / 1e6).toFixed(2)}M` : `${Math.round(x / 1000)}K`);
const lines: string[] = [];
lines.push(`# ${title ?? "Trace"}`, "", `Variant **${variant}** · strategy **${strategy}** · seed **${seed}** · 25-year career · config hash-free reproduction: \`npx tsx scripts/fu-traces.ts ${process.argv.slice(2, 6).join(" ")}${ipId ? ` ${ipId}` : ""}\``, "", `Invariant violations in this career: ${checkInvariants(r, cfg).length}. Nothing below was scripted: the seed, the policy and the config produce it.`, "");

if (kind === "show") {
  const ip = s.ips[ipId];
  const rows = seasonRows(seed, strategy, s, cfg, 25 * 52).filter((x) => x.ipId === ipId);
  lines.push(`## ${ip.name} (${ip.id}), genre ${s.releases.find((x) => x.ipId === ipId)!.genre}`, "");
  lines.push("| S | Yr | Eps | Aud | Crit | Avg | Review fatigue | Viewer-fatigue mult | Premiere | Premiere w/o viewer fatigue | Unique (of reach) | Last ep / premiere | IP fans start → end | Net (season) | Net/prod wk | Notes |");
  lines.push("|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|");
  const rels = s.releases.filter((x) => x.ipId === ipId && x.format === "tv");
  rows.forEach((x, i) => {
    const rel = rels[i];
    const vf = rel.trace.viewerFatigue as { openingWithout: { pool: number } } | undefined;
    const pw = vf ? Math.round(vf.openingWithout.pool * cfg.tv.episodeModel.premiereShare) : null;
    const bt = rel.trace.breakthrough as { events: { stage: string; meter: string; points: number; draw: number }[]; avgWithout: number } | undefined;
    const notes = [x.twist ? `twist ${rel.trace.tv && (rel.trace.tv as { twistTheme?: string }).twistTheme} → ${x.twist}` : "", x.starChanged ? `new Star ${s.stars[rel.starId!]?.name}` : "", bt ? `BREAKTHROUGH ${bt.events[0].stage}/${bt.events[0].meter} +${Math.round(bt.events[0].points)} pts (draw ${bt.events[0].draw}); avg without it ${bt.avgWithout}` : "", rel.campaign && rel.campaign !== "none" ? `campaign ${rel.campaign}` : "", x.original ? "Original" : ""].filter(Boolean).join("; ");
    lines.push(`| ${x.season} | ${x.year} | ${x.episodes} | ${x.audience} | ${x.critic} | ${x.avg.toFixed(3)} | ${(x.reviewFatigue * 100).toFixed(1)}% | ${x.viewerFatigueMult.toFixed(3)} | ${k(x.premiere)} | ${pw === null ? "—" : k(pw)} | ${k(x.unique)} (${(x.closeness * 100).toFixed(0)}%) | ${x.trajectory.toFixed(2)} | ${k(x.fansStart ?? 0)} → ${k(x.fansEnd ?? 0)} | ${x.original ? "—" : $(x.net)} | ${x.original ? "—" : $(x.netPerWeek)} | ${notes} |`);
  });
  const last = rels.at(-1)!;
  const after = s.events.filter((e) => e.week > last.releaseWeek && e.type === "release").slice(0, 3);
  lines.push("", `**After the last season** (released week ${last.releaseWeek}, run ended week ${last.runEndWeek ?? "—"}): last average ${last.avgScore} → ${last.avgScore >= cfg.tv.renewalThreshold ? "still renewable" : "not renewable"}. Next releases: ${after.map((e) => e.message.split(" released")[0]).join(" · ") || "none"}.`);
  const careerEnd = s.week;
  lines.push(`Career ends week ${careerEnd}; the show ${last.avgScore >= cfg.tv.renewalThreshold ? (careerEnd - (last.runEndWeek ?? last.releaseWeek) >= 52 ? "was left renewable and not renewed for over a year (policy chose to stop)" : "was still running") : "could no longer be renewed"}.`);
}

if (kind === "firing") {
  const byWeek = new Map<number, number>();
  for (const l of s.ledger) if (CASH_KINDS.has(l.kind)) byWeek.set(l.week, (byWeek.get(l.week) ?? 0) + l.amount);
  let c = 0;
  const cashAt: number[] = [];
  for (let w = 0; w <= s.week; w++) cashAt.push((c += byWeek.get(w) ?? 0));
  const ev = s.events.filter((e) => ["fire", "hire", "upgrade", "streaming"].includes(e.type) || (e.type === "release" && false));
  lines.push("## Staffing and money timeline", "", "| Week | Yr | Cash | Staff | Event |", "|---|---|---|---|---|");
  for (const e of ev) {
    const staffN = e.type === "fire" ? String(e.message).match(/\((\d+)\/(\d+)\)/)?.[0] ?? "" : "";
    lines.push(`| ${e.week} | ${(e.week / 52).toFixed(1)} | ${$(cashAt[e.week] ?? 0)} | ${staffN} | ${e.message} |`);
  }
  lines.push("", "### Cash at each year end", "", "| Year | Cash | Payroll/wk | Releases that year |", "|---|---|---|---|");
  for (let y = 1; y <= 25; y++) {
    const w = y * 52 - 1;
    const pay = s.ledger.filter((l) => l.kind === "payroll" && l.week === w).reduce((a, l) => a - l.amount, 0);
    lines.push(`| ${y} | ${$(cashAt[Math.min(w, cashAt.length - 1)] ?? 0)} | ${$(pay)} | ${s.releases.filter((r) => Math.floor(r.releaseWeek / 52) + 1 === y).length} |`);
  }
  lines.push("", `Dismissed staff: ${(s.formerStaff ?? []).map((f) => `${f.name} (week ${f.firedWeek}, $${f.wage}/wk)`).join(", ") || "none"}.`);
}
mkdirSync("reports/gate3_followup/traces", { recursive: true });
const file = `reports/gate3_followup/traces/${kind}-${variant.replace("@", "_at_")}-${strategy}-s${seed}${ipId ? `-${ipId}` : ""}.md`;
writeFileSync(file, lines.join("\n") + "\n");
console.log(file);
