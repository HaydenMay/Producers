# Batch report — 700 careers

> **Simulation assumptions, not design locks.** All numbers come from provisional config values. Nothing here is official balance.

- Ruleset: `v9.61-movie-kernel-0.1` · Config: `baseline` (hash `5355fe52`)
- Seeds: 1–100 (100 seeds)
- Strategies: balanced, quality-first, cheap-duds, famous-star, self-funder, experimenter, franchise-builder
- Productions per career: 1
- Runtime: 372 ms (measured)
- Modelled: movies; distributor advances/royalties/trust; Stars (families, budgets, fallback, callbacks, relationships); marketing + studio buzz; scores + legs; IP fans; Prestige milestones; studio genre levels; trends; staff XP/hire/train; theme research + staff pitches
- **Not modelled:** limited series; TV series/seasons/renewals/hiatus/announcements; streaming service/subscribers; eras beyond a gentle quality bar; studio upgrades/format unlock gates; genre unlocks; late-game concurrency

## Invariant checks

All invariants held across every career (ledger audit, gross = sales only, causal scores, Star budgets, unique Prestige ids, runs terminate).

## Diagnostic flags

| Flag | Fired | Why | Seeds | Implicated |
|---|---|---|---|---|
| SURPLUS_FARMING_DOMINANT | no | cheap-duds median end cash 82772 vs best decent policy 119957 (fires at >= 0.95x) |  | distribution.roster[].generosity, production.movie.baseCost, marketing/Star value |
| EARLY_SOFTLOCK | no | 0/700 careers stuck (hit maxWeeks or >= 52 negative-cash weeks) |  | start.cash, wages, lifeline terms |
| PRESTIGE_TOO_FAST | no | 0/700 careers earn > 400 Prestige/year |  | prestige.milestones, prestige.repeatScope |
| PRESTIGE_TOO_SLOW | no | 0/0 careers with >= 10 releases have zero Prestige |  | prestige thresholds vs typical scores |
| QUALITY_INFLATION | no | 0/700 careers: late releases mostly 8+ or > 25% of releases 9+ |  | staffGrowth.statGainPerWeek, stars.growthPerProject, studioGenre.qualityBonusPerLevel, production.eraBarPerYear |
| DEAD_STRATEGY | no | no strategy collapses |  | varies by strategy |
| DOMINANT_STRATEGY | no | no policy wins cash AND Prestige in >= 80% of paired seeds |  |  |
| STAR_PRICE_NO_VALUE | no | famous-star median cash/release 56155 vs cheap-duds 42772 (Fame + marketing spend does pay back) |  | stars.feePerFame, audience.fameAwareness, marketing campaigns |
| FRANCHISE_AUTO_WIN | no | franchise-builder median cash 117858; fires if > 1.25x every other policy and Prestige >= all |  | audience.fanAwareness, repetitionFatigue.sequelPerRepeat |
| DISTRIBUTOR_TRUST_SPIRAL | no | 0/700 careers end with mean distributor trust < 0.75 |  | distribution.trust* |
| STREAMING_PASSIVE_MONEY_PRINTER | no | NOT APPLICABLE: streaming is not modelled yet (Gate 3) |  |  |
| HIGH_REVIEWS_UNEXPLAINED_LOW_SALES | no | 0 releases with avg >= 7.5 and gross in bottom 20%: 0 explained by small reach, 0 by low awareness (little marketing/Fame/fans), 0 unexplained |  | audience opening/legs model |
| UNSUPPORTED_RULE_ASSUMPTION | **YES** | INFO: results depend on WORKING ASSUMPTIONS (see docs/assumptions-register.md): prestige repeatScope=perIP, trust formula, offer/heat formula, saturating awareness + geometric legs, genre XP on completion, staff-pitch rule, all numeric values. |  |  |

## Strategy summary (median, p10–p90)

| Strategy | endCash | cashPerYear | prestige | meanAudience | meanCritic | shareLate8plus | surplusKept | surplusShareOfIncome | royaltyCosts | negativeCashWeeks | maxIpFans | meanTrustEnd | ended negative | any Prestige |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| balanced | $119,957 (p10 $76,992 · p90 $167,578) | $149,050 (p10 $66,884 · p90 $228,649) | 0 (p10 0 · p90 0) | 5.68 (p10 4.42 · p90 6.4) | 5.72 (p10 5.04 · p90 6.46) | 0 (p10 0 · p90 0) | $0 (p10 $0 · p90 $3,814) | 0 (p10 0 · p90 0.02) | $71,228 (p10 $54,638 · p90 $89,093) | 2 (p10 0 · p90 4.2) | 1309.5 (p10 0 · p90 2379.6) | 2.49 (p10 2.46 · p90 2.51) | 0 | 0 |
| quality-first | $108,929 (p10 $74,755 · p90 $146,728) | $131,231 (p10 $68,150 · p90 $191,375) | 0 (p10 0 · p90 0) | 5.57 (p10 4.42 · p90 6.16) | 5.74 (p10 4.41 · p90 6.17) | 0 (p10 0 · p90 0) | $0 (p10 $0 · p90 $11,633) | 0 (p10 0 · p90 0.08) | $65,188 (p10 $52,799 · p90 $78,547) | 1.5 (p10 0 · p90 6.1) | 897 (p10 0 · p90 2219.8) | 2.48 (p10 2.46 · p90 2.5) | 0 | 0 |
| cheap-duds | $82,772 (p10 $60,773 · p90 $110,287) | $82,374 (p10 $41,546 · p90 $134,502) | 0 (p10 0 · p90 0) | 5.5 (p10 4.42 · p90 6.19) | 5.6 (p10 4.97 · p90 6.44) | 0 (p10 0 · p90 0) | $16,000 (p10 $978 · p90 $28,542) | 0.15 (p10 0.01 · p90 0.23) | $42,832 (p10 $37,998 · p90 $51,376) | 0 (p10 0 · p90 0) | 593 (p10 0 · p90 1163.2) | 2.45 (p10 2.44 · p90 2.46) | 0 | 0 |
| famous-star | $96,155 (p10 $68,853 · p90 $120,379) | $104,275 (p10 $56,314 · p90 $144,644) | 0 (p10 0 · p90 0) | 5.54 (p10 4.73 · p90 6.07) | 5.68 (p10 4.99 · p90 6.44) | 0 (p10 0 · p90 0) | $0 (p10 $0 · p90 $4,404) | 0 (p10 0 · p90 0.03) | $63,492 (p10 $49,012 · p90 $74,854) | 6 (p10 5 · p90 9) | 1083.5 (p10 0 · p90 1762.3) | 2.48 (p10 2.46 · p90 2.5) | 0 | 0 |
| self-funder | $31,260 (p10 $18,851 · p90 $41,340) | $-17,495 (p10 $-45,133 · p90 $2,666) | 0 (p10 0 · p90 0) | 5.53 (p10 4.69 · p90 6.34) | 5.63 (p10 4.43 · p90 6.43) | 0 (p10 0 · p90 0) | $0 (p10 $0 · p90 $0) | 0 (p10 0 · p90 0) | $5,931 (p10 $5,037 · p90 $7,136) | 7.5 (p10 5 · p90 9) | 362.5 (p10 0 · p90 745.6) | 2.4 (p10 2.38 · p90 2.41) | 0 | 0 |
| experimenter | $107,795 (p10 $80,267 · p90 $144,944) | $128,106 (p10 $75,045 · p90 $193,150) | 0 (p10 0 · p90 0) | 5.67 (p10 4.84 · p90 6.22) | 5.68 (p10 4.94 · p90 6.19) | 0 (p10 0 · p90 0) | $0 (p10 $0 · p90 $14,703) | 0 (p10 0 · p90 0.09) | $65,061 (p10 $54,442 · p90 $78,966) | 1 (p10 0 · p90 7) | 1059.5 (p10 191.9 · p90 1973.8) | 2.48 (p10 2.47 · p90 2.5) | 0 | 0 |
| franchise-builder | $117,858 (p10 $75,149 · p90 $173,640) | $139,594 (p10 $67,694 · p90 $233,385) | 0 (p10 0 · p90 0) | 5.68 (p10 5.01 · p90 6.46) | 5.65 (p10 4.5 · p90 6.07) | 0 (p10 0 · p90 0) | $0 (p10 $0 · p90 $6,101) | 0 (p10 0 · p90 0.03) | $69,625 (p10 $54,815 · p90 $89,679) | 2 (p10 0 · p90 8) | 1120 (p10 171.4 · p90 2473) | 2.49 (p10 2.47 · p90 2.51) | 0 | 0 |

## Ranking by median end cash

1. **balanced** — $119,957 cash, 0 Prestige
2. **franchise-builder** — $117,858 cash, 0 Prestige
3. **quality-first** — $108,929 cash, 0 Prestige
4. **experimenter** — $107,795 cash, 0 Prestige
5. **famous-star** — $96,155 cash, 0 Prestige
6. **cheap-duds** — $82,772 cash, 0 Prestige
7. **self-funder** — $31,260 cash, 0 Prestige

## Average review score by production index (mean across seeds)

- balanced: 5.6
- quality-first: 5.5
- cheap-duds: 5.5
- famous-star: 5.5
- self-funder: 5.5
- experimenter: 5.6
- franchise-builder: 5.6
