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
  const base = cfg.production.phaseEmphasis[phase] as Record<Meter, number>;
  // PROD-220: the production's approach shifts effort between meters (total effort unchanged)
  const am = project.approach ? ((cfg.production as { approaches?: { effort?: Record<string, Record<Meter, number>> } }).approaches?.effort?.[project.approach] ?? null) : null;
  const emph = am ? (Object.fromEntries(METERS.map((m) => [m, base[m] * am[m]])) as Record<Meter, number>) : base;
  for (const s of state.staff) {
    if (s.assignment) continue; // special-role rule: an engineer building streaming is OFF the production
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

type PayCfg = { payrollPeriodWeeks?: number; raisePerLevel?: number; maxRaise?: number; raiseEventEveryLevels?: number };
const payCfg = (cfg: Config) => cfg.staffGrowth as unknown as PayCfg;

/**
 * Raises (designer 2026-11-11): wage = base x (1 + raisePerLevel x level), capped at +maxRaise. Level comes every
 * 200 XP (~20 working weeks). Engineers keep their fixed wage. Legacy: raisePerLevel 0 → no change, no event.
 */
function applyRaises(state: StudioState, cfg: Config): void {
  const pc = payCfg(cfg);
  if (!pc.raisePerLevel) return;
  for (const s of state.staff) {
    if (s.role) continue;
    s.baseWage ??= s.wage;
    const lvl = staffLevel(s);
    const target = Math.round(s.baseWage * (1 + Math.min(pc.maxRaise ?? 1, pc.raisePerLevel * lvl)));
    if (target > s.wage) {
      s.wage = target;
      const every = pc.raiseEventEveryLevels ?? 5;
      if (lvl > 0 && lvl % every === 0) emit(state, "raise", `${s.name} reached level ${lvl} and got a raise: now $${target.toLocaleString()}/week.`, { staffId: s.id, wage: target, level: lvl });
    }
  }
}

/** Payroll + upkeep. Weekly by default (legacy); with staffGrowth.payrollPeriodWeeks = 4 it accrues weekly and is paid monthly. */
export function payroll(state: StudioState, cfg: Config): void {
  applyRaises(state, cfg);
  const wages = state.staff.reduce((a, s) => a + s.wage, 0);
  const period = payCfg(cfg).payrollPeriodWeeks ?? 1;
  if (period <= 1) {
    ledger(state, { kind: "payroll", amount: -wages, note: `${state.staff.length} staff` });
    ledger(state, { kind: "upkeep", amount: -cfg.start.upkeepPerWeek });
    return;
  }
  const due = (state.payrollDue ??= { wages: 0, upkeep: 0 });
  due.wages = Math.round((due.wages + wages) * 100) / 100;
  due.upkeep = Math.round((due.upkeep + cfg.start.upkeepPerWeek) * 100) / 100;
  if (state.week % period !== 0) return;
  ledger(state, { kind: "payroll", amount: -due.wages, note: `monthly payroll, ${state.staff.length} staff` });
  ledger(state, { kind: "upkeep", amount: -due.upkeep, note: "monthly upkeep" });
  due.wages = 0;
  due.upkeep = 0;
}

export const FIRST = ["Sam", "Alex", "Jo", "Max", "Rae", "Kit", "Lee", "Noa", "Ari", "Bo", "Cam", "Dee", "Eli", "Fin", "Gus", "Ivy", "Jay", "Kai", "Liv", "Mo"];
export const LAST = ["Reyes", "Park", "Vale", "Okafor", "Lind", "Moreau", "Hart", "Quinn", "Sato", "Novak", "Diaz", "Fox", "Grant", "Imai", "Kerr", "Lowe"];

export function randomName(state: StudioState): string {
  return `${pick(state.rng, "names", FIRST)} ${pick(state.rng, "names", LAST)}`;
}

export function canHire(state: StudioState): boolean {
  return state.staff.length < state.maxStaff;
}

export function hireStaff(state: StudioState, cfg: Config): Staff {
  if (!canHire(state)) throw new Error(`Studio is at capacity (${state.staff.length}/${state.maxStaff}); hiring is not allowed`);
  const [lo, hi] = cfg.staffGrowth.hireStatRange;
  const stats = {} as Record<Meter, number>;
  for (const m of METERS) stats[m] = int(state.rng, "staff", lo, hi);
  let id = newId(state, "staff");
  if (state.staff.some((x) => x.id === id)) id = `emp${state.counters.nextId}`; // Gate 3 fix: never collide with starting staff ids (only triggers on a collision)
  // designer 2026-11-11: a skilled hire asks for more (wage scales with average stat vs 25); legacy: flat hireWage
  const bySkill = (cfg.staffGrowth as unknown as { hireWageBySkill?: boolean }).hireWageBySkill;
  const avg = METERS.reduce((a, m) => a + stats[m], 0) / METERS.length;
  const wage = bySkill ? Math.round((cfg.staffGrowth.hireWage * avg) / 25 / 10) * 10 : cfg.staffGrowth.hireWage;
  const s: Staff = { id, name: randomName(state), stats, totalXp: 0, wage, ...(bySkill ? { baseWage: wage } : {}) };
  ledger(state, { kind: "hire", amount: -cfg.staffGrowth.hireCost, note: s.name });
  state.staff.push(s);
  emit(state, "hire", `Hired ${s.name} (${METERS.map((m) => `${m} ${stats[m]}`).join(", ")})${bySkill ? `, asking $${wage.toLocaleString()}/week` : ""}.`);
  return s;
}

/** LOCKED (Gate 3 follow-up): employees can be fired. Harness rules: between productions only, never the engineer while building, keep >= minStaff (OPEN). */
export function fireOptions(state: StudioState, cfg: Config): string[] {
  const f = cfg.staffing;
  if (!f.firingEnabled) return [];
  if (f.betweenProductionsOnly && (state.project || state.pendingOffers || state.contract)) return [];
  if (state.staff.length <= f.minStaff) return [];
  if (f.fireCost > 0 && Math.max(0, state.cash) < f.fireCost) return [];
  return state.staff.filter((s) => !s.assignment).map((s) => s.id);
}

export function fireStaff(state: StudioState, cfg: Config, staffId: string): void {
  if (!fireOptions(state, cfg).includes(staffId)) throw new Error(`Cannot dismiss ${staffId} now`);
  const s = state.staff.find((x) => x.id === staffId)!;
  state.staff = state.staff.filter((x) => x.id !== staffId);
  (state.formerStaff ??= []).push({ ...structuredClone(s), firedWeek: state.week });
  if (cfg.staffing.fireCost > 0) ledger(state, { kind: "fire", amount: -cfg.staffing.fireCost, note: s.name });
  emit(state, "fire", `Dismissed ${s.name}${s.role ? " (Software Engineer)" : ""}: payroll −$${s.wage.toLocaleString()}/week; a staff slot is free (${state.staff.length}/${state.maxStaff}).`, { staffId, wage: s.wage });
}

export function trainStaff(state: StudioState, cfg: Config, staffId: string): void {
  const s = state.staff.find((x) => x.id === staffId);
  if (!s) throw new Error(`No staff ${staffId}`);
  ledger(state, { kind: "train", amount: -cfg.staffGrowth.trainCost, note: s.name });
  for (const m of METERS) s.stats[m] = Math.min(cfg.staffGrowth.statCap, s.stats[m] + cfg.staffGrowth.trainGain);
  emit(state, "train", `Trained ${s.name}: +${cfg.staffGrowth.trainGain} to all stats.`);
}

/**
 * PROD-028 (Claude's call, designer delegated 2026-11-11): job titles EMERGE from skills (no job assignment, no
 * micromanagement). Writer / Director / Editor by top skill; Showrunner when Plot and Writing are both 60+; Auteur
 * when every skill is 75+. Junior below staff level 5, Senior from level 15. Display only: never changes the sim.
 */
export function staffTitle(s: Staff): string {
  if (s.role === "software_engineer") return "Software Engineer";
  const st = s.stats;
  const lvl = staffLevel(s);
  const rank = lvl < 5 ? "Junior " : lvl >= 15 ? "Senior " : "";
  if (METERS.every((m) => st[m] >= 75)) return `${lvl >= 15 ? "Senior " : ""}Auteur`;
  if (st.plot >= 60 && st.writing >= 60) return `${rank}Showrunner`;
  const top = [...METERS].sort((a, b) => st[b] - st[a])[0];
  return `${rank}${top === "filming" ? "Director" : top === "editing" ? "Editor" : "Writer"}`;
}
