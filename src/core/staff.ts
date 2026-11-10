// Staff: four universal stats (Plot/Writing/Filming/Editing), XP earned while working.
// LOCKED: no individual genre experience; payroll is a studio expense (never from advances).
import type { Config } from "./config";
import { ledger, emit, newId, round2 } from "./events";
import { range, int, pick } from "./rng";
import { METERS, type Meter, type Project, type Staff, type StudioState } from "./types";

export type ProdPhase = "writing" | "filming" | "editing";

export function phaseOf(progress: number): ProdPhase {
  if (progress < 40) return "writing";
  if (progress < 80) return "filming";
  return "editing";
}

/** One week of work: every staff member adds to every meter, weighted by phase emphasis. */
export function staffWorkWeek(state: StudioState, project: Project, cfg: Config, genreBonus: number): void {
  const phase = phaseOf(project.progress);
  const emph = cfg.production.phaseEmphasis[phase] as Record<Meter, number>;
  for (const s of state.staff) {
    const variance = 1 + range(state.rng, "work", -cfg.production.workVariance, cfg.production.workVariance);
    for (const m of METERS) {
      const pts = s.stats[m] * emph[m] * cfg.production.workRate * variance * (1 + genreBonus);
      project.meterPoints[m] = round2(project.meterPoints[m] + pts);
      // practice-based growth with diminishing returns (XP earned during work)
      const gain = cfg.staffGrowth.statGainPerWeek * emph[m] * (1 - s.stats[m] / cfg.staffGrowth.statCap);
      s.stats[m] = Math.min(cfg.staffGrowth.statCap, Math.round((s.stats[m] + gain) * 1000) / 1000);
    }
    s.totalXp += cfg.staffGrowth.xpPerWeek;
  }
}

export function staffLevel(s: Staff): number {
  return Math.floor(s.totalXp / 200);
}

export function payroll(state: StudioState, cfg: Config): void {
  const wages = state.staff.reduce((a, s) => a + s.wage, 0);
  ledger(state, { kind: "payroll", amount: -wages, note: `${state.staff.length} staff` });
  ledger(state, { kind: "upkeep", amount: -cfg.start.upkeepPerWeek });
}

const FIRST = ["Sam", "Alex", "Jo", "Max", "Rae", "Kit", "Lee", "Noa", "Ari", "Bo", "Cam", "Dee", "Eli", "Fin", "Gus", "Ivy", "Jay", "Kai", "Liv", "Mo"];
const LAST = ["Reyes", "Park", "Vale", "Okafor", "Lind", "Moreau", "Hart", "Quinn", "Sato", "Novak", "Diaz", "Fox", "Grant", "Imai", "Kerr", "Lowe"];

export function randomName(state: StudioState): string {
  return `${pick(state.rng, "names", FIRST)} ${pick(state.rng, "names", LAST)}`;
}

export function hireStaff(state: StudioState, cfg: Config): Staff {
  const [lo, hi] = cfg.staffGrowth.hireStatRange;
  const stats = {} as Record<Meter, number>;
  for (const m of METERS) stats[m] = int(state.rng, "staff", lo, hi);
  const s: Staff = { id: newId(state, "staff"), name: randomName(state), stats, totalXp: 0, wage: cfg.staffGrowth.hireWage };
  ledger(state, { kind: "hire", amount: -cfg.staffGrowth.hireCost, note: s.name });
  state.staff.push(s);
  emit(state, "hire", `Hired ${s.name} (${METERS.map((m) => `${m} ${stats[m]}`).join(", ")}).`);
  return s;
}

export function trainStaff(state: StudioState, cfg: Config, staffId: string): void {
  const s = state.staff.find((x) => x.id === staffId);
  if (!s) throw new Error(`No staff ${staffId}`);
  ledger(state, { kind: "train", amount: -cfg.staffGrowth.trainCost, note: s.name });
  for (const m of METERS) s.stats[m] = Math.min(cfg.staffGrowth.statCap, s.stats[m] + cfg.staffGrowth.trainGain);
  emit(state, "train", `Trained ${s.name}: +${cfg.staffGrowth.trainGain} to all stats.`);
}
