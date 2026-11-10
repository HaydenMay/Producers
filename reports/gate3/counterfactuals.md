# Gate 3 counterfactual cases

> Simulation results from TEST ASSUMPTIONS (config gate3_mixed, b83a7f2c). Each case clones one exact state and plays branches under identical rules. Branch RNG paths may diverge after the branch point.

## C1. High-quality but low-reach limited series

limited-focus, seed 3, year 8.3: the same Comedy + Zombies limited series, distributor-backed vs self-funded (small reach).

**distributor (largest advance)**

```json
{
 "title": "Last Pulse",
 "format": "limited_series",
 "route": "traditional",
 "week": 448,
 "audience": 8.62,
 "critic": 8.74,
 "avg": 8.68,
 "hof": false,
 "reachCap": 376000,
 "opening": 150044,
 "distinct": 304347,
 "weekly": [
  150044,
  188901,
  213394,
  243926,
  279693,
  304347,
  121739,
  48696,
  19478,
  0
 ],
 "gross": 895024,
 "studioTake": 545965,
 "fans": {
  "before": 0,
  "after": 17920,
  "delta": 17920
 },
 "tv": null
}
```

**self-funded (small reach)**

```json
{
 "title": "Last Pulse",
 "format": "limited_series",
 "route": "traditional",
 "week": 448,
 "audience": 8.62,
 "critic": 8.74,
 "avg": 8.68,
 "hof": false,
 "reachCap": 88000,
 "opening": 35117,
 "distinct": 71230,
 "weekly": [
  35117,
  44211,
  49943,
  57089,
  65460,
  71230,
  28492,
  11397,
  4559,
  0
 ],
 "gross": 209474,
 "studioTake": 209474,
 "fans": {
  "before": 0,
  "after": 4194,
  "delta": 4194
 },
 "tv": null
}
```

*Reading:* Scores are identical (same production): reach changes viewers and money, never reviews. The capped run sells out 81% of its small reach: excellent content grows within reach but cannot exceed it.

## C2. Popular long-running show with fatigue

renewal-franchise, seed 1, 20 in-game years: its longest show "Last Edge" (28 seasons).

**season by season**

```json
{
 "seasons": [
  {
   "s": 1,
   "eps": 5,
   "avg": 8.39,
   "showFatigue": 0,
   "twist": null,
   "distinct": 216621,
   "gross": 296065,
   "fansAfter": 11750
  },
  {
   "s": 2,
   "eps": 5,
   "avg": 8.36,
   "showFatigue": 0.01,
   "twist": null,
   "distinct": 294729,
   "gross": 404783,
   "fansAfter": 27240
  },
  {
   "s": 3,
   "eps": 10,
   "avg": 8.71,
   "showFatigue": 0.03,
   "twist": null,
   "distinct": 348813,
   "gross": 878135,
   "fansAfter": 46368
  },
  {
   "s": 4,
   "eps": 10,
   "avg": 8.83,
   "showFatigue": 0.054,
   "twist": null,
   "distinct": 413061,
   "gross": 1069189,
   "fansAfter": 69418
  },
  {
   "s": 5,
   "eps": 10,
   "avg": 8.61,
   "showFatigue": 0.083,
   "twist": null,
   "distinct": 283016,
   "gross": 747278,
   "fansAfter": 82379
  },
  {
   "s": 6,
   "eps": 10,
   "avg": 8.28,
   "showFatigue": 0.124,
   "twist": null,
   "distinct": 416438,
   "gross": 1119813,
   "fansAfter": 100212
  },
  {
   "s": 7,
   "eps": 10,
   "avg": 7.84,
   "showFatigue": 0.175,
   "twist": null,
   "distinct": 417214,
   "gross": 1138740,
   "fansAfter": 114277
  },
  {
   "s": 8,
   "eps": 10,
   "avg": 7.23,
   "showFatigue": 0.24,
   "twist": null,
   "distinct": 414974,
   "gross": 1131343,
   "fansAfter": 123505
  },
  {
   "s": 9,
   "eps": 15,
   "avg": 6.16,
   "showFatigue": 0.324,
   "twist": null,
   "distinct": 429373,
   "gross": 1364659,
   "fansAfter": 122101
  },
  {
   "s": 10,
   "eps": 15,
   "avg": 6.22,
   "showFatigue": 0.35,
   "twist": null,
   "distinct": 425789,
   "gross": 1271535,
   "fansAfter": 122237
  },
  {
   "s": 11,
   "eps": 15,
   "avg": 6.23,
   "showFatigue": 0.35,
   "twist": null,
   "distinct": 257644,
   "gross": 789057,
   "fansAfter": 119123
  },
  {
   "s": 12,
   "eps": 15,
   "avg": 5.93,
   "showFatigue": 0.35,
   "twist": null,
   "distinct": 364041,
   "gross": 1055941,
   "fansAfter": 116565
  },
  {
   "s": 13,
   "eps": 15,
   "avg": 5.38,
   "showFatigue": 0.35,
   "twist": "Zombies",
   "distinct": 313414,
   "gross": 780093,
   "fansAfter": 110667
  },
  {
   "s": 14,
   "eps": 15,
   "avg": 6.28,
   "showFatigue": 0.35,
   "twist": "Spies",
   "distinct": 425253,
   "gross": 1290310,
   "fansAfter": 111967
  },
  {
   "s": 15,
   "eps": 15,
   "avg": 6.29,
   "showFatigue": 0.35,
   "twist": null,
   "distinct": 426369,
   "gross": 1303316,
   "fansAfter": 113272
  },
  {
   "s": 16,
   "eps": 15,
   "avg": 6.29,
   "showFatigue": 0.35,
   "twist": null,
   "distinct": 364563,
   "gross": 1118620,
   "fansAfter": 113213
  },
  {
   "s": 17,
   "eps": 15,
   "avg": 6.3,
   "showFatigue": 0.35,
   "twist": null,
   "distinct": 367335,
   "gross": 1153417,
   "fansAfter": 113274
  },
  {
   "s": 18,
   "eps": 15,
   "avg": 5.99,
   "showFatigue": 0.35,
   "twist": null,
   "distinct": 256004,
   "gross": 758210,
   "fansAfter": 109745
  },
  {
   "s": 19,
   "eps": 15,
   "avg": 5.41,
   "showFatigue": 0.35,
   "twist": "Zombies",
   "distinct": 391935,
   "gross": 982345,
   "fansAfter": 104969
  },
  {
   "s": 20,
   "eps": 15,
   "avg": 6.3,
   "showFatigue": 0.35,
   "twist": "Spies",
   "distinct": 425174,
   "gross": 1296662,
   "fansAfter": 106786
  },
  {
   "s": 21,
   "eps": 15,
   "avg": 6.31,
   "showFatigue": 0.35,
   "twist": null,
   "distinct": 426496,
   "gross": 1315285,
   "fansAfter": 108576
  },
  {
   "s": 22,
   "eps": 15,
   "avg": 6.31,
   "showFatigue": 0.35,
   "twist": null,
   "distinct": 426474,
   "gross": 1312019,
   "fansAfter": 110246
  },
  {
   "s": 23,
   "eps": 15,
   "avg": 6.3,
   "showFatigue": 0.35,
   "twist": null,
   "distinct": 364526,
   "gross": 1121462,
   "fansAfter": 110447
  },
  {
   "s": 24,
   "eps": 15,
   "avg": 6.3,
   "showFatigue": 0.35,
   "twist": null,
   "distinct": 428217,
   "gross": 1330875,
   "fansAfter": 111959
  },
  {
   "s": 25,
   "eps": 15,
   "avg": 6.3,
   "showFatigue": 0.35,
   "twist": null,
   "distinct": 429914,
   "gross": 1353768,
   "fansAfter": 113406

```

*Reading:* Fatigue grows each season (capped at 35%), so scores slide toward a floor near the renewal-safe range: with the cap, a show can stay renewable indefinitely. Whether fatigue should eventually force an ending is a designer call.

## C3. Show with a bad twist (vs no twist, vs a good twist)

tv-first, seed 4, year 3.3: same show, same order size, three branches for the next season (combo grades shown only for the test construction).

**no twist**

```json
{
 "title": "Red Pulse: Season 3",
 "format": "tv",
 "route": "traditional",
 "week": 190,
 "audience": 7.68,
 "critic": 8.55,
 "avg": 8.12,
 "hof": false,
 "reachCap": 340000,
 "opening": 114976,
 "distinct": 206909,
 "weekly": [
  114976,
  145125,
  164745,
  184840,
  206909,
  72418,
  25346,
  0
 ],
 "gross": 292595,
 "studioTake": 163853,
 "fans": {
  "before": 17636,
  "after": 27965,
  "delta": 10329
 },
 "tv": {
  "showFatigue": {
   "fatigue": 0.03,
   "base": 0.036,
   "slow": 0.169
  },
  "twist": null,
  "twistTheme": null,
  "hiatus": {
   "gapWeeks": 8,
   "mult": 1
  },
  "anticipationUsed": 0,
  "fatigueSeasons": 2
 },
 "fansNow": 27911,
 "fatigueSeasonsNow": 3,
 "showTheme": "Pirates",
 "genre": "Horror"
}
```

**bad twist (D/F combo)**

```json
{
 "title": "Red Pulse: Season 3",
 "format": "tv",
 "route": "traditional",
 "week": 190,
 "audience": 6.3,
 "critic": 8.78,
 "avg": 7.54,
 "hof": false,
 "reachCap": 340000,
 "opening": 114976,
 "distinct": 193376,
 "weekly": [
  114976,
  145510,
  165398,
  173099,
  179159,
  62706,
  21947,
  0
 ],
 "gross": 276094,
 "studioTake": 151852,
 "fans": {
  "before": 13224,
  "after": 21083,
  "delta": 7859
 },
 "tv": {
  "showFatigue": {
   "fatigue": 0.03,
   "base": 0.036,
   "slow": 0.169
  },
  "twist": "bad",
  "twistTheme": "Sports",
  "hiatus": {
   "gapWeeks": 8,
   "mult": 1
  },
  "anticipationUsed": 0,
  "fatigueSeasons": 2
 },
 "fansNow": 21042,
 "fatigueSeasonsNow": 3,
 "showTheme": "Sports",
 "genre": "Horror"
}
```

**good twist (A/B combo)**

```json
{
 "title": "Red Pulse: Season 3",
 "format": "tv",
 "route": "traditional",
 "week": 190,
 "audience": 8.82,
 "critic": 9.06,
 "avg": 8.94,
 "hof": false,
 "reachCap": 340000,
 "opening": 122640,
 "distinct": 234790,
 "weekly": [
  122640,
  155379,
  176428,
  202861,
  234790,
  82177,
  28762,
  0
 ],
 "gross": 320972,
 "studioTake": 179744,
 "fans": {
  "before": 17636,
  "after": 32437,
  "delta": 14801
 },
 "tv": {
  "showFatigue": {
   "fatigue": 0,
   "base": 0,
   "slow": 0.169
  },
  "twist": "good",
  "twistTheme": "Zombies",
  "hiatus": {
   "gapWeeks": 8,
   "mult": 1
  },
  "anticipationUsed": 0,
  "fatigueSeasons": 0
 },
 "fansNow": 32375,
 "fatigueSeasonsNow": 1,
 "showTheme": "Zombies",
 "genre": "Horror"
}
```

*Reading:* The twist season is scored with the twist combo's grades. A bad twist costs fans immediately; a good twist lowers accumulated fatigue for this and later seasons. Genre and IP never change.

## C4. Major TV hit paused for several years

tv-first, seed 2, year 3.3: a show whose last season averaged ≥ 8; next season ordered now vs after a 3-year pause (with/without an announcement).

**order now**

```json
{
 "gapWeeks": 8,
 "hiatusMult": 1,
 "fansBeforeOrdering": 10521,
 "earlierSeasonScoresUnchanged": true,
 "title": "Silver Shadow: Season 3",
 "format": "tv",
 "route": "traditional",
 "week": 190,
 "audience": 8.89,
 "critic": 8.35,
 "avg": 8.62,
 "hof": false,
 "reachCap": 340000,
 "opening": 118733,
 "distinct": 226525,
 "weekly": [
  118733,
  149393,
  169211,
  195175,
  226525,
  79284,
  27749,
  0
 ],
 "gross": 309142,
 "studioTake": 173120,
 "fans": {
  "before": 21414,
  "after": 34534,
  "delta": 13120
 },
 "tv": {
  "showFatigue": {
   "fatigue": 0.028,
   "base": 0.036,
   "slow": 0.231
  },
  "twist": null,
  "twistTheme": null,
  "hiatus": {
   "gapWeeks": 8,
   "mult": 1
  },
  "anticipationUsed": 0,
  "fatigueSeasons": 2
 }
}
```

**pause 3 years**

```json
{
 "gapWeeks": 148,
 "hiatusMult": 0.53,
 "fansBeforeOrdering": 16579,
 "earlierSeasonScoresUnchanged": true,
 "title": "Silver Shadow: Season 3",
 "format": "tv",
 "route": "traditional",
 "week": 346,
 "audience": 8.74,
 "critic": 8.23,
 "avg": 8.49,
 "hof": false,
 "reachCap": 340000,
 "opening": 132262,
 "distinct": 247806,
 "weekly": [
  132262,
  165756,
  186999,
  214621,
  247806,
  86732,
  30356,
  0
 ],
 "gross": 340650,
 "studioTake": 194171,
 "fans": {
  "before": 15859,
  "after": 29696,
  "delta": 13837
 },
 "tv": {
  "showFatigue": {
   "fatigue": 0.028,
   "base": 0.036,
   "slow": 0.231
  },
  "twist": null,
  "twistTheme": null,
  "hiatus": {
   "gapWeeks": 164,
   "mult": 0.42
  },
  "anticipationUsed": 0,
  "fatigueSeasons": 2
 }
}
```

**pause 3 years, announce 6 months before ordering**

```json
{
 "gapWeeks": 148,
 "hiatusMult": 0.53,
 "fansBeforeOrdering": 16579,
 "earlierSeasonScoresUnchanged": true,
 "title": "Silver Shadow: Season 3",
 "format": "tv",
 "route": "traditional",
 "week": 346,
 "audience": 8.74,
 "critic": 8.23,
 "avg": 8.49,
 "hof": false,
 "reachCap": 340000,
 "opening": 133377,
 "distinct": 249744,
 "weekly": [
  133377,
  167121,
  188493,
  216311,
  249744,
  87410,
  30594,
  0
 ],
 "gross": 343376,
 "studioTake": 195724,
 "fans": {
  "before": 15859,
  "after": 29805,
  "delta": 13946
 },
 "tv": {
  "showFatigue": {
   "fatigue": 0.028,
   "base": 0.036,
   "slow": 0.231
  },
  "twist": null,
  "twistTheme": null,
  "hiatus": {
   "gapWeeks": 164,
   "mult": 0.42
  },
  "anticipationUsed": 0.0657,
  "fatigueSeasons": 2
 }
}
```

*Reading:* Hiatus lowers only the opening's anticipation terms (fans' awareness and announcement hype); past scores never change. Fans still drift down through the existing yearly IP fan decay, which is not a hiatus penalty.

## C5. Rare Hall of Fame IP (evergreen catalog value)

mixed, seed 2, one year after its platform launched (21 catalog titles, 3 Hall of Fame).

**catalog as is**

```json
{
 "retention": 0.6,
 "catalogValue": 10.84,
 "hofTitles": [
  "Last Night (9.13)",
  "Iron Legacy (9.22)",
  "Red Run (9.07)"
 ],
 "bestNonHof": "Silver Shadow (8.8)"
}
```

**same catalog without its Hall of Fame titles**

```json
{
 "retention": 0.48,
 "value": 6.29,
 "genres": 3
}
```

*Reading:* Hall of Fame titles keep a retention floor as they age (evergreens), so removing them lowers retention more than their count suggests. They never add subscribers on their own.

## C6. Streaming Originals during cash trouble

streaming-pivot, seed 1, at a pitch after launch; cash forced to −$15K.

**pitch while in the red**

```json
{
 "originalOffered": false,
 "selfFundOffered": false,
 "offers": [
  "meridian $149000",
  "xyz $152000"
 ],
 "finished": {
  "title": "Broken Signal",
  "format": "movie",
  "route": "traditional",
  "week": 352,
  "audience": 8.73,
  "critic": 8.16,
  "avg": 8.45,
  "hof": false,
  "reachCap": 376000,
  "opening": 75915,
  "distinct": 372274,
  "weekly": [
   75915,
   57391,
   36513,
   40876,
   44876,
   39398,
   25798,
   17666,
   12007,
   8170,
   5559,
   3782,
   2573,
   1750,
   0
  ],
  "gross": 744548,
  "studioTake": 454174,
  "fans": {
   "before": 0,
   "after": 20550,
   "delta": 20550
  },
  "tv": null
 },
 "cashAfterRun": 670483,
 "subscribersNow": 37136
}
```

*Reading:* Originals are self-funded, so they are unavailable while cash is negative (LOCKED: no self-funding in the red). The studio finishes a traditional release on distributor money (lifeline if needed); the platform keeps running and its income pays the debt down. No hard lock, no bankruptcy.

## C7. No release for 2 years after platform launch

mixed, seed 3, half a year after launch; the studio then releases nothing for 104 weeks (titles still airing finish and join the catalog).

**idle 2 years**

```json
{
 "subscribersStart": 29505,
 "every26Weeks": [
  60114,
  51809,
  41122,
  30017
 ],
 "platformNet2Years": 986231,
 "restlessWarning": true,
 "acquisitionsAfterLastJoin": 0,
 "cashStart": 4620763,
 "cashEnd": 4629394
}
```

*Reading:* A quiet platform drifts down slowly and visibly (warning after the grace period); the catalog slows the drift but never grows subscribers. Coasting is possible for a while but shrinks the business.

## C8. Catalog of many poor titles vs a few great ones

Synthetic catalogs on the same live platform (40,000 subscribers, then two years with no releases; same genre for all titles so diversity is equal).

**30 poor titles (avg 5.8)**

```json
{
 "titles": 30,
 "avg": 5.8,
 "hof": false,
 "retentionAtStart": 0.38,
 "subscribersAfter2QuietYears": 10461
}
```

**5 great titles (avg 9.2, Hall of Fame)**

```json
{
 "titles": 5,
 "avg": 9.2,
 "hof": true,
 "retentionAtStart": 0.56,
 "subscribersAfter2QuietYears": 14632
}
```

**5 good titles (avg 8.0)**

```json
{
 "titles": 5,
 "avg": 8,
 "hof": false,
 "retentionAtStart": 0.28,
 "subscribersAfter2QuietYears": 8912
}
```

*Reading:* Retention follows catalog quality, freshness and evergreens with diminishing returns, not raw title count.
