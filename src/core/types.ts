// Plain, serializable simulation types. No classes, no functions in state.
// Ruleset: Entertainment Studio Tycoon design v9.61 (movie kernel only).

export const RULESET_VERSION = "v9.61-movie-kernel-0.1";

export type Meter = "plot" | "writing" | "filming" | "editing";
export const METERS: Meter[] = ["plot", "writing", "filming", "editing"];

export type Grade = "A" | "B" | "C" | "D" | "F";
export type TrendStage = "none" | "rising" | "hot" | "saturated" | "cooled";
export type IpRelation = "new" | "sequel" | "reboot" | "spinoff";
export type Format = "movie"; // limited series / TV / streaming: NOT MODELLED yet (Gate 3)

export interface RngState {
  // one 32-bit state per named stream
  [stream: string]: number;
}

export interface Staff {
  id: string;
  name: string;
  stats: Record<Meter, number>; // 0..100, fractional
  totalXp: number;
  wage: number; // $/week
}

export interface Star {
  id: string;
  name: string;
  level: number;
  levelXp: number; // completed projects toward next level
  skills: Record<string, number>; // family -> 0..100 ; sum <= budget(level)
  fame: number; // 0..100
  relationship: number; // 0..5
  credits: string[]; // release ids
  hiddenShape: "balanced" | "twoFocus" | "specialist" | "fallback"; // internal only, never shown
  fallback: boolean;
}

export interface StarCard {
  starId: string;
  price: number;
  breakdown: { fameFee: number; prestigePremium: number; relationshipDiscount: number };
  source: "audition" | "callback";
  affordable: boolean;
  fallbackInserted?: boolean;
}

export interface Distributor {
  id: string;
  name: string;
  reach: number; // fraction of the market they can put a title in front of
  generosity: number; // advance multiplier
  royaltyBase: number; // 0..1
  favoredFamilies: string[];
  minPrestige: number;
  trust: number; // 0..5
  lifeline: boolean;
}

export interface Offer {
  distributorId: string;
  advance: number;
  royalty: number;
  reach: number;
  lifeline: boolean;
  reasons: string[];
}

export interface IpLine {
  id: string;
  name: string;
  fans: number;
  titles: string[];
  establishedStarId?: string; // lead of the most recent entry
}

export interface ComboKnowledge {
  // hidden grades live in world.comboGrades; this is what the player has seen
  [key: string]: { audience: Grade; critic: Grade };
}

export interface Project {
  id: string;
  title: string;
  format: Format;
  genre: string;
  theme: string;
  ipRelation: IpRelation;
  ipId: string;
  parentIpId?: string;
  startWeek: number;
  durationWeeks: number;
  weeksWorked: number;
  progress: number; // 0..100
  baseCost: number;
  distributorId: string | null; // null = self-funded
  advance: number;
  royalty: number;
  reach: number;
  unspentAdvance: number;
  cashOverrun: number;
  starId: string | null;
  starFee: number;
  campaign: string | null;
  campaignCost: number;
  meterPoints: Record<Meter, number>;
  starPoints: number;
  pendingDecision: "casting" | "marketing" | null;
  auditionCards: StarCard[];
  casted: boolean;
  marketed: boolean;
}

export interface Release {
  id: string;
  title: string;
  genre: string;
  theme: string;
  ipId: string;
  ipRelation: IpRelation;
  releaseWeek: number;
  distributorId: string | null;
  royalty: number;
  reachCap: number;
  starId: string | null;
  meters: Record<Meter, number>; // final 0..100 quality
  audience: number; // 0..10
  critic: number; // 0..10
  avgScore: number;
  hallOfFame: boolean;
  openingViewers: number;
  weekIndex: number; // weeks since release
  lastViewers: number;
  /** diffusion legs model: people aware of the title who haven't watched yet */
  aware?: number;
  totalViewers: number;
  grossTotal: number;
  distributorTake: number;
  studioTake: number;
  active: boolean;
  advance: number;
  surplusKept: number;
  baseCost: number;
  starFee: number;
  campaignCost: number;
  cashOverrun: number;
  weekly: { week: number; viewers: number; gross: number; studio: number; distributor: number; retention: number; driver: string }[];
  trace: Record<string, unknown>;
}

export interface LedgerEntry {
  week: number;
  kind:
    | "start_cash"
    | "payroll"
    | "upkeep"
    | "base_cost"
    | "star_fee"
    | "campaign"
    | "advance_received"
    | "advance_spent"
    | "surplus_transfer"
    | "studio_take"
    | "cancel_repay"
    | "hire"
    | "train"
    | "studio_ads"
    | "research"
    | "upgrade";
  amount: number; // + into studio cash, - out of studio cash. advance_* entries track the project reserve.
  projectId?: string;
  note?: string;
}

export interface SimEvent {
  week: number;
  type: string;
  message: string;
  data?: Record<string, unknown>;
}

export interface StudioState {
  rulesetVersion: string;
  configHash: string;
  seed: number;
  week: number;
  cash: number;
  prestige: number;
  prestigeAwards: string[]; // award ids, prevents double payment
  staff: Staff[];
  stars: Record<string, Star>;
  hiredStarIds: string[]; // callback catalog
  distributors: Distributor[];
  ips: Record<string, IpLine>;
  releases: Release[];
  project: Project | null;
  pendingOffers: Offer[] | null;
  pendingPlan: PlanDecision | null;
  unlockedGenres: string[];
  unlockedThemes: string[];
  comboBook: ComboKnowledge;
  comboHistory: Record<string, number>; // combo key -> times produced
  genreXp: Record<string, number>; // studio exact-genre experience
  trends: Record<string, { stage: TrendStage; weeksInStage: number }>;
  studioBuzz: number;
  /** EXPERIMENTAL: studio-wide employee capacity (not a per-project crew cap). */
  maxStaff: number;
  capacityLevel: number; // index into cfg.staffCapacity.ladder
  upgrades: { week: number; from: number; to: number; cost: number; prestigeAtUpgrade: number }[];
  rng: RngState;
  ledger: LedgerEntry[];
  events: SimEvent[];
  counters: { nextId: number; negativeCashWeeks: number; productionsStarted: number; productionsCompleted: number; cancellations: number };
  world: { comboGrades: Record<string, { audience: Grade; critic: Grade }> };
}

export interface PlanDecision {
  type: "plan";
  genre: string;
  theme: string;
  ipRelation: IpRelation;
  parentIpId?: string;
}

export type Decision =
  | PlanDecision
  | { type: "choose_offer"; distributorId: string | null } // null = self-fund
  | { type: "cast"; starId: string }
  | { type: "market"; campaign: string }
  | { type: "cancel" }
  | { type: "hire" }
  | { type: "train"; staffId: string }
  | { type: "studio_ads" }
  | { type: "upgrade_studio" }
  | { type: "research_theme"; theme: string }
  | { type: "wait" };

export type Phase = "planning" | "pitch" | "production" | "casting" | "marketing";

export interface Choices {
  phase: Phase;
  week: number;
  cash: number;
  spendableCash: number;
  options: Decision[];
  offers?: Offer[];
  auditionCards?: StarCard[];
  campaigns?: { id: string; cost: number; affordable: boolean }[];
  canCancel?: boolean;
}
