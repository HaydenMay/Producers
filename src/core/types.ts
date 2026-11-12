// Plain, serializable simulation types. No classes, no functions in state.
// Ruleset: Entertainment Studio Tycoon design v9.61 (movie kernel only).

export const RULESET_VERSION = "v9.61-gate3-0.1"; // movie kernel unchanged; formats/streaming are config-gated

export type Meter = "plot" | "writing" | "filming" | "editing";
export const METERS: Meter[] = ["plot", "writing", "filming", "editing"];

export type Grade = "A" | "B" | "C" | "D" | "F";
export type TrendStage = "none" | "rising" | "hot" | "saturated" | "cooled";
export type IpRelation = "new" | "sequel" | "reboot" | "spinoff" | "season";
/** Gate 3: "tv" = one season of a renewable show. A missing format field means "movie" (old replays stay valid). */
export type Format = "movie" | "limited_series" | "tv";
export type ReleaseRoute = "traditional" | "original";

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
  /** wage before level raises (set when raises are on) */
  baseWage?: number;
  /** Gate 3 special job. Software Engineers build the streaming service. */
  role?: "software_engineer";
  /** while set, this employee is OFF the active production (special-role rule) */
  assignment?: { kind: "streaming_build"; sinceWeek: number; untilWeek: number } | null;
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
  // Stars rework (PROD-213…218), present only when cfg.stars.pool.enabled
  yearsActive?: number; // career length; Fame generally follows it
  age?: number;
  retired?: boolean;
  retiredWeek?: number;
  growthWeights?: Record<string, number>; // hidden per-Star level-up weights (sum 1), never shown
  growthTemplate?: string; // internal template the weights were rolled from, never shown
}

export interface StarCard {
  starId: string;
  price: number;
  breakdown: { fameFee: number; prestigePremium: number; relationshipDiscount: number };
  source: "audition" | "callback" | "original_lead"; // callback = catalog entry (PROD-216)
  affordable: boolean;
  fallbackInserted?: boolean;
  perfectFit?: boolean; // catalog flag: "perfect for this role" (PROD-216)
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
  /** Audit 2026-11-12 (audience.fanDecayExact): unrounded fan count carried between weekly decays. */
  fansExact?: number;
  titles: string[];
  establishedStarId?: string; // lead of the most recent entry
  /** Gate 3: the format this IP was created as. Missing = movie. */
  format?: Format;
  /** TV: current theme pairing (changes only through an approved theme twist; genre never changes) */
  showTheme?: string;
  /** TV: seasons counted toward show-age fatigue (a good twist lowers it) */
  fatigueSeasons?: number;
  /** TV (follow-up experiment, only when tv.viewerFatigue is enabled): good twists that reset viewer-fatigue exposure */
  viewerTwistResets?: number;
  /** TV: temporary, fading show-specific anticipation from a season announcement */
  anticipation?: number;
  /** TV: season number already announced (one announcement per upcoming season) */
  announcedSeason?: number;
  /** TV contract variant B: continuing partner for the next season */
  partner?: { distributorId: string; royalty: number; lastAdvance: number; lastRoi: number } | null;
  /** week the IP's most recent season finished airing (hiatus clock); never reset by announcements */
  lastAiredWeek?: number;
}

export interface ComboKnowledge {
  // hidden grades live in world.comboGrades; this is what the player has seen
  [key: string]: { audience: Grade; critic: Grade };
}

export interface Breakthrough {
  type: "creative_breakthrough";
  source: "staff" | "star";
  stage: string;
  week: number;
  progress: number;
  draw: number;
  meterDraw: number;
  meter: Meter;
  points: number;
}

export interface Project {
  /** PROD-220 approach; absent = balanced */
  approach?: Approach;
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
  /** Audit H2: wages + upkeep accrued each week this production was active (payroll cash may be paid monthly). */
  laborAccrued?: number;
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
  pendingDecision: "casting" | "marketing" | "distribution" | null;
  /** Gate 4 candidate: the 80% distribution meeting */
  distributionBids?: DistributionBid[];
  distribution?: { distributorId: string | null; adSpend: number; adAwareness: number; share: number; reach: number; preview: Record<string, number> };
  investedAtMeeting?: number;
  /** Gate 3 */
  episodes?: number;
  seasonNumber?: number;
  twistTheme?: string;
  route?: ReleaseRoute;
  auditionCards: StarCard[];
  casted: boolean;
  marketed: boolean;
  /** follow-up experiment (events.breakthrough): stages already checked, and breakthroughs that happened */
  breakthroughChecks?: string[];
  breakthroughs?: Breakthrough[];
}

export interface Release {
  /** PROD-220 approach the production used; absent = balanced */
  approach?: Approach;
  id: string;
  title: string;
  genre: string;
  theme: string;
  ipId: string;
  ipRelation: IpRelation;
  releaseWeek: number;
  /** Audit H2: real production start week and the wages + upkeep accrued while it was in production. */
  startWeek?: number;
  laborDuring?: number;
  distributorId: string | null;
  royalty: number;
  reachCap: number;
  starId: string | null;
  meters: Record<Meter, number>; // final 0..100 quality
  audience: number; // 0..10
  critic: number; // 0..10
  avgScore: number;
  hallOfFame: boolean;
  criticGeneration?: number; // Gate 2.6 proxy: critic generation that reviewed it (0 when disabled)
  audienceEra?: number;
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
  /** Gate 4 candidate only: "late_distribution"; the distributor's own advertising spend (never studio cash) */
  financing?: "late_distribution";
  adSpend?: number;
  weekly: { week: number; viewers: number; gross: number; studio: number; distributor: number; retention: number; driver: string; episode?: number }[];
  trace: Record<string, unknown>;
  /** Gate 3 (missing = movie / traditional) */
  format?: Format;
  route?: ReleaseRoute;
  episodes?: number;
  seasonNumber?: number;
  episodesAired?: number;
  /** distinct people who sampled the title (TV/limited weekly audiences repeat; movies: = totalViewers) */
  uniqueViewers?: number;
  /** week the commercial run (or Original debut window) ended */
  runEndWeek?: number;
  inCatalog?: boolean;
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
    | "upgrade"
    | "format_unlock"
    | "announce"
    | "platform_build"
    | "subscriptions"
    | "platform_opex"
    | "fire"
    | "contract_labor"
    | "contract_fee"
    | "overdraft_interest";
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
  catalogUnlocked?: boolean;
  /** PROD-013: set when the fixed career ends (recap shown); decided = the player's answer */
  careerEnd?: { week: number; decided: "continue" | "end" | null; legacyScore: number };
  /** monthly payroll accrual (designer 2026-11-11), present only when staffGrowth.payrollPeriodWeeks > 1 */
  payrollDue?: { wages: number; upkeep: number }; // Stars rework: catalog opens with the first studio upgrade (PROD-216)
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
  /** Gate 3 (optional so pre-Gate-3 states/replays stay valid) */
  tvUnlocked?: boolean;
  platform?: PlatformState | null;
  /** Gate 3 follow-up: dismissed employees, kept for the historical record (never revived) */
  formerStaff?: (Staff & { firedWeek: number })[];
  /** Gate 4: active work-for-hire job, and finished ones (only present when contracts are enabled) */
  contract?: ActiveContract | null;
  contractHistory?: (ActiveContract & { endWeek: number })[];
  world: { comboGrades: Record<string, { audience: Grade; critic: Grade }> };
}

export interface PlanDecision {
  type: "plan";
  genre: string;
  theme: string;
  ipRelation: IpRelation;
  parentIpId?: string;
  /** Gate 3: omitted = movie (keeps old decision logs byte-compatible) */
  format?: Format;
  episodes?: number;
  /** TV renewal only: approved theme twist (genre stays) */
  twistTheme?: string;
  /** Gate 4 candidate (late_distribution) only: start as a studio-funded Streaming Original (no distributor meeting) */
  route?: "original";
  /** PROD-220 (when production.approaches.enabled): where the crew puts its effort. Omitted = balanced. */
  approach?: Approach;
  /** PROD-229 (display only, on offered plans): opening awareness from audience curiosity about a freshly unlocked genre. */
  freshGenre?: number;
}

export type Approach = "crowd" | "balanced" | "awards";

/** Gate 4 candidate: one distributor's fixed bid at the 80% distribution meeting. NO cash to the studio. */
export interface DistributionBid {
  distributorId: string;
  name: string;
  /** advertising the DISTRIBUTOR spends (its own cost); never studio cash */
  adSpend: number;
  /** opening awareness that ad spend buys (shown so the player can compare) */
  adAwareness: number;
  reach: number;
  /** distributor's share of every gross dollar */
  share: number;
  reasons: string[];
}

/** Gate 4 candidate: a work-for-hire job offer (zero Prestige). */
export interface ContractOffer {
  id: string;
  name: string;
  weeks: number;
  meters: Meter[];
  fee: number;
  laborPerWeek: number;
  available: boolean;
  why: string;
}

export interface ActiveContract {
  id: string;
  name: string;
  meters: Meter[];
  startWeek: number;
  weeks: number;
  weeksWorked: number;
  fee: number;
  laborCovered: number;
}

/** Gate 3B: one aggregate streaming business. Never per-title payouts. */
export interface PlatformState {
  status: "building" | "live";
  buildStartWeek: number;
  launchWeek: number | null;
  engineerId: string;
  buildCost: number;
  subscribers: number;
  catalog: { releaseId: string; joinWeek: number }[]; // each release at most once
  lastFreshWeek: number; // last week a new title debuted or joined the catalog
  restlessWarned: boolean;
  totals: { gross: number; opex: number; acquired: number; churned: number };
  weekly: { week: number; subs: number; acquired: number; churned: number; gross: number; opex: number; retention: number; sources: Record<string, number> }[];
}

export type Decision =
  | PlanDecision
  | { type: "choose_offer"; distributorId: string | null; original?: boolean } // null = self-fund; original = Streaming Original (self-funded)
  | { type: "cast"; starId: string }
  | { type: "market"; campaign: string }
  | { type: "cancel" }
  | { type: "hire" }
  | { type: "train"; staffId: string }
  | { type: "studio_ads" }
  | { type: "upgrade_studio" }
  | { type: "research_theme"; theme: string }
  | { type: "unlock_tv" }
  | { type: "announce_season"; ipId: string }
  | { type: "hire_engineer" }
  | { type: "fire"; staffId: string }
  | { type: "build_streaming" }
  | { type: "distribute"; distributorId: string | null } // Gate 4 candidate: one bid or null = self-distribute
  | { type: "contract"; contractId: string } // Gate 4: work-for-hire
  | { type: "continue_career" } // PROD-013: keep playing after the recap
  | { type: "end_career" } // PROD-013: retire; the save is finished
  | { type: "wait" };

export type Phase = "planning" | "pitch" | "production" | "casting" | "marketing" | "distribution" | "contract" | "career_end" | "finished";

export interface Choices {
  phase: Phase;
  week: number;
  cash: number;
  spendableCash: number;
  options: Decision[];
  /** PROD-013: end-of-career recap (phase career_end) */
  recap?: ReturnType<typeof import("./career").careerRecap>;
  /** PROD-220: approaches a plan decision may carry (plan options themselves are listed without one) */
  approaches?: Approach[];
  offers?: Offer[];
  auditionCards?: StarCard[];
  campaigns?: { id: string; cost: number; affordable: boolean }[];
  canCancel?: boolean;
  /** 2026-11-12: money of each renewable show's latest season (renewal screen) */
  showMoney?: Record<string, import("./formats").ShowMoney>;
  /** Gate 4 candidate */
  bids?: DistributionBid[];
  selfDistribution?: { reach: number; share: number; adSpend: number };
  investedSoFar?: number;
  contracts?: ContractOffer[];
  notes?: string[];
}
