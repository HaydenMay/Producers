# Batch report — 900 careers

> **Simulation assumptions, not design locks.** All numbers come from provisional config values. Nothing here is official balance.

- Ruleset: `v9.61-movie-kernel-0.1` · Config: `gate25-candidate` (hash `a2e9d917`)
- Seeds: 1–100 (100 seeds)
- Strategies: balanced, quality-first, cheap-duds, famous-star, self-funder, selective-self-funder, experimenter, franchise-builder, repeat-farmer
- Productions per career: 20
- Runtime: 6462 ms (measured)
- Modelled: movies; distributor advances/royalties/trust; Stars (families, budgets, fallback, callbacks, relationships); marketing + studio buzz; scores + legs; IP fans; Prestige milestones; studio genre levels; trends; staff XP/hire/train; studio staff-capacity cap + upgrade ladder (when configured); theme research + staff pitches
- **Not modelled:** limited series; TV series/seasons/renewals/hiatus/announcements; streaming service/subscribers; eras beyond a gentle quality bar; studio upgrades other than staff capacity; format unlock gates; genre unlocks; late-game concurrency

## Invariant checks

All invariants held across every career (ledger audit, gross = sales only, causal scores, Star budgets, unique Prestige ids, runs terminate).

## Diagnostic flags

| Flag | Fired | Why | Seeds | Implicated |
|---|---|---|---|---|
| SURPLUS_FARMING_DOMINANT | no | cheap-duds median end cash 2421736 vs best decent policy 3902466 (fires at >= 0.95x) |  | distribution.roster[].generosity, production.movie.baseCost, marketing/Star value |
| EARLY_SOFTLOCK | **YES** | 1/900 careers stuck (hit maxWeeks or >= 52 negative-cash weeks); by strategy: self-funder 1/100 | 38 | start.cash, wages, lifeline terms |
| PRESTIGE_TOO_FAST | **YES** | 328/900 careers earn > 400 Prestige/year | 1, 1, 1, 1, 2, 2, 2, 2, 3, 3 | prestige.milestones, prestige.repeatScope |
| PRESTIGE_TOO_SLOW | no | 129/900 careers with >= 10 releases have zero Prestige |  | prestige thresholds vs typical scores |
| QUALITY_INFLATION | **YES** | 385/900 careers: late releases mostly 8+ or > 25% of releases 9+ | 1, 1, 1, 1, 2, 2, 2, 2, 3, 3 | staffGrowth.statGainPerWeek, stars.growthPerProject, studioGenre.qualityBonusPerLevel, production.eraBarPerYear |
| DEAD_STRATEGY | **YES** | self-funder: median end cash < 25% of the best (3902466) or negative |  | varies by strategy |
| DOMINANT_STRATEGY | no | no policy wins cash AND Prestige in >= 80% of paired seeds |  |  |
| STAR_PRICE_NO_VALUE | no | famous-star median cash/release 165488 vs cheap-duds 119087 (Fame + marketing spend does pay back) |  | stars.feePerFame, audience.fameAwareness, marketing campaigns |
| FRANCHISE_AUTO_WIN | no | franchise-builder median cash 3442266; fires if > 1.25x every other policy and Prestige >= all |  | audience.fanAwareness, repetitionFatigue.sequelPerRepeat |
| DISTRIBUTOR_TRUST_SPIRAL | no | 0/900 careers end with mean distributor trust < 0.75 |  | distribution.trust* |
| STREAMING_PASSIVE_MONEY_PRINTER | no | NOT APPLICABLE: streaming is not modelled yet (Gate 3) |  |  |
| HIGH_REVIEWS_UNEXPLAINED_LOW_SALES | no | 261 releases with avg >= 7.5 and gross in bottom 20%: 261 explained by small reach, 0 by low awareness (little marketing/Fame/fans), 0 unexplained |  | audience opening/legs model |
| UNSUPPORTED_RULE_ASSUMPTION | **YES** | INFO: results depend on WORKING ASSUMPTIONS (see docs/assumptions-register.md): prestige repeatScope=explicit, staff capacity ladder=[4,6,8], trust formula, offer/heat formula, saturating awareness + diffusion legs, genre XP on completion, staff-pitch rule, all numeric values. |  |  |

## Strategy summary (median, p10–p90)

| Strategy | endCash | cashPerYear | prestige | meanAudience | meanCritic | shareLate8plus | surplusKept | surplusShareOfIncome | royaltyCosts | negativeCashWeeks | maxIpFans | meanTrustEnd | ended negative | any Prestige |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| balanced | $3,826,984 (p10 $3,388,774 · p90 $4,232,808) | $587,831 (p10 $519,809 · p90 $650,824) | 3495 (p10 2782.5 · p90 4244.5) | 7.91 (p10 7.66 · p90 8.23) | 7.89 (p10 7.55 · p90 8.27) | 0.88 (p10 0.75 · p90 1) | $235,951 (p10 $126,673 · p90 $384,487) | 0.03 (p10 0.02 · p90 0.05) | $4,835,083 (p10 $4,463,891 · p90 $5,348,295) | 2 (p10 0 · p90 5.1) | 70740.5 (p10 45501.5 · p90 92579) | 4.06 (p10 3.75 · p90 4.3) | 0 | 1 |
| quality-first | $3,902,466 (p10 $3,367,388 · p90 $4,241,375) | $599,547 (p10 $516,490 · p90 $652,154) | 2867.5 (p10 2387 · p90 3382) | 7.91 (p10 7.66 · p90 8.24) | 7.85 (p10 7.6 · p90 8.1) | 0.88 (p10 0.75 · p90 1) | $367,016 (p10 $167,157 · p90 $524,976) | 0.05 (p10 0.02 · p90 0.07) | $4,712,024 (p10 $4,227,259 · p90 $5,238,840) | 2 (p10 0 · p90 6.1) | 25392.5 (p10 22455.3 · p90 28599.9) | 4.01 (p10 3.75 · p90 4.23) | 0 | 1 |
| cheap-duds | $2,421,736 (p10 $1,975,773 · p90 $2,788,885) | $369,703 (p10 $302,634 · p90 $428,319) | 0 (p10 0 · p90 75) | 6 (p10 5.74 · p90 6.29) | 6.22 (p10 5.84 · p90 6.44) | 0 (p10 0 · p90 0) | $387,030 (p10 $274,122 · p90 $483,724) | 0.12 (p10 0.1 · p90 0.14) | $1,308,019 (p10 $1,186,650 · p90 $1,435,121) | 0 (p10 0 · p90 0) | 4895 (p10 3175.7 · p90 7821.4) | 2.56 (p10 2.48 · p90 2.66) | 0 | 0.27 |
| famous-star | $3,349,756 (p10 $3,006,571 · p90 $3,783,900) | $513,753 (p10 $460,483 · p90 $581,143) | 0 (p10 0 · p90 150) | 6.34 (p10 6.16 · p90 6.55) | 6.39 (p10 6.15 · p90 6.55) | 0 (p10 0 · p90 0) | $0 (p10 $0 · p90 $4,404) | 0 (p10 0 · p90 0) | $2,622,360 (p10 $2,497,479 · p90 $3,049,557) | 8 (p10 5 · p90 10) | 9507 (p10 7479.6 · p90 11660.6) | 3 (p10 3 · p90 3.49) | 0 | 0.49 |
| self-funder | $317,712 (p10 $266,903 · p90 $389,603) | $43,189 (p10 $35,221 · p90 $54,267) | 300 (p10 75 · p90 650) | 6.71 (p10 6.44 · p90 7.02) | 6.7 (p10 6.41 · p90 6.94) | 0 (p10 0 · p90 0.25) | $0 (p10 $0 · p90 $0) | 0 (p10 0 · p90 0) | $77,135 (p10 $56,453 · p90 $123,019) | 11 (p10 6 · p90 21) | 3886.5 (p10 3338 · p90 4815.2) | 2.47 (p10 2.38 · p90 2.5) | 0 | 0.95 |
| selective-self-funder | $3,803,605 (p10 $3,456,968 · p90 $4,185,750) | $584,202 (p10 $530,395 · p90 $643,520) | 3545 (p10 3035.5 · p90 4269) | 7.95 (p10 7.64 · p90 8.24) | 7.91 (p10 7.58 · p90 8.26) | 0.88 (p10 0.75 · p90 1) | $206,080 (p10 $87,178 · p90 $357,761) | 0.03 (p10 0.01 · p90 0.05) | $4,884,660 (p10 $4,319,532 · p90 $5,286,525) | 1.5 (p10 0 · p90 7) | 64165 (p10 44632.8 · p90 87788.6) | 4.07 (p10 3.87 · p90 4.33) | 0 | 1 |
| experimenter | $3,647,945 (p10 $3,276,032 · p90 $4,071,957) | $560,039 (p10 $502,309 · p90 $625,856) | 2357.5 (p10 1729.5 · p90 3120) | 7.72 (p10 7.41 · p90 7.96) | 7.67 (p10 7.35 · p90 7.96) | 0.75 (p10 0.5 · p90 1) | $229,792 (p10 $98,818 · p90 $365,545) | 0.03 (p10 0.01 · p90 0.05) | $4,500,101 (p10 $3,921,596 · p90 $5,021,627) | 1 (p10 0 · p90 7) | 24570 (p10 21258 · p90 28063.2) | 4.04 (p10 3.73 · p90 4.25) | 0 | 1 |
| franchise-builder | $3,442,266 (p10 $2,871,617 · p90 $4,067,714) | $528,113 (p10 $439,535 · p90 $625,197) | 2180 (p10 1550 · p90 2775) | 7.29 (p10 6.53 · p90 7.88) | 7.21 (p10 6.56 · p90 7.58) | 0 (p10 0 · p90 0.26) | $82,727 (p10 $8,144 · p90 $270,833) | 0.01 (p10 0 · p90 0.03) | $4,829,165 (p10 $4,118,944 · p90 $5,320,979) | 2 (p10 0 · p90 8) | 94757.5 (p10 71568 · p90 119185.8) | 3.97 (p10 3.73 · p90 4.18) | 0 | 1 |
| repeat-farmer | $3,842,192 (p10 $2,614,878 · p90 $4,937,537) | $590,191 (p10 $399,683 · p90 $760,215) | 1750 (p10 1150 · p90 2050.5) | 7.02 (p10 6.56 · p90 7.64) | 7.07 (p10 6.63 · p90 7.58) | 0 (p10 0 · p90 0.13) | $978,142 (p10 $789,724 · p90 $1,298,767) | 0.13 (p10 0.11 · p90 0.15) | $4,176,146 (p10 $3,149,397 · p90 $5,057,659) | 2 (p10 0 · p90 8) | 135580 (p10 89570 · p90 182105.3) | 3.8 (p10 3.59 · p90 4.05) | 0 | 1 |

## Ranking by median end cash

1. **quality-first** — $3,902,466 cash, 2867.5 Prestige
2. **repeat-farmer** — $3,842,192 cash, 1750 Prestige
3. **balanced** — $3,826,984 cash, 3495 Prestige
4. **selective-self-funder** — $3,803,605 cash, 3545 Prestige
5. **experimenter** — $3,647,945 cash, 2357.5 Prestige
6. **franchise-builder** — $3,442,266 cash, 2180 Prestige
7. **famous-star** — $3,349,756 cash, 0 Prestige
8. **cheap-duds** — $2,421,736 cash, 0 Prestige
9. **self-funder** — $317,712 cash, 300 Prestige

## Average review score by production index (mean across seeds)

- balanced: 5.6 → 5.8 → 6.4 → 7.2 → 7.4 → 7.6 → 7.8 → 8.1 → 8.2 → 8.3 → 8.4 → 8.6 → 8.7 → 8.6 → 8.6 → 8.7 → 8.7 → 8.7 → 8.7 → 8.6
- quality-first: 5.5 → 5.9 → 6.5 → 7.3 → 7.4 → 7.5 → 7.8 → 8.0 → 8.1 → 8.2 → 8.3 → 8.4 → 8.5 → 8.5 → 8.5 → 8.6 → 8.6 → 8.7 → 8.6 → 8.8
- cheap-duds: 5.5 → 5.5 → 5.8 → 5.9 → 5.9 → 5.9 → 6.0 → 6.0 → 6.2 → 6.2 → 6.2 → 6.2 → 6.3 → 6.3 → 6.2 → 6.4 → 6.4 → 6.4 → 6.3 → 6.5
- famous-star: 5.5 → 5.9 → 5.9 → 6.0 → 6.0 → 6.1 → 6.0 → 6.3 → 6.3 → 6.4 → 6.5 → 6.6 → 6.6 → 6.6 → 6.7 → 6.7 → 6.7 → 6.7 → 6.7 → 6.9
- self-funder: 5.5 → 5.8 → 5.9 → 6.1 → 6.2 → 6.4 → 6.5 → 6.6 → 6.8 → 6.7 → 6.8 → 7.1 → 7.1 → 7.0 → 7.1 → 7.3 → 7.3 → 7.3 → 7.3 → 7.4
- selective-self-funder: 5.7 → 5.9 → 6.4 → 7.3 → 7.3 → 7.6 → 7.8 → 8.0 → 8.1 → 8.3 → 8.5 → 8.5 → 8.6 → 8.6 → 8.6 → 8.7 → 8.7 → 8.7 → 8.7 → 8.8
- experimenter: 5.6 → 5.8 → 5.9 → 6.9 → 7.3 → 7.2 → 7.5 → 7.6 → 7.8 → 8.1 → 8.2 → 8.2 → 8.4 → 8.4 → 8.4 → 8.4 → 8.4 → 8.6 → 8.5 → 8.4
- franchise-builder: 5.6 → 5.9 → 6.3 → 7.4 → 7.4 → 7.4 → 7.5 → 7.7 → 7.7 → 7.7 → 7.7 → 7.6 → 7.4 → 7.3 → 7.3 → 7.2 → 7.2 → 7.1 → 7.1 → 7.1
- repeat-farmer: 5.6 → 5.8 → 6.5 → 7.2 → 7.4 → 7.5 → 7.7 → 7.8 → 7.8 → 7.8 → 7.7 → 7.6 → 7.4 → 7.2 → 7.0 → 6.8 → 6.7 → 6.6 → 6.6 → 6.6
