# Before vs after: the whole default game

BEFORE = the pre-Producers default (`legacyConfig()`, byte-identical to old `main` 2fe1135). AFTER = today's Producers default (`config/baseline.json`). Seeds 1–16, 10-year careers, every strategy. Cells are **before → after**; cash/Prestige/score are medians per career, counts are totals across careers. TEST VALUES throughout.

| Strategy | End cash | Prestige | Releases / career (after: by format) | Median score | Hall of Fame | Sub-4 releases | Movies losing money | Genres open at end | Negative-cash weeks | Invariant violations |
|---|---|---|---|---|---|---|---|---|---|---|
| balanced | $8.69M → $8.13M | 3095 → 4810 | 32.0 → 15.8 (movie 14.9) | 7.99 → 8.39 | 7% → 19% | 0% → 0% | 0% → 1% | 3 → 7 | 2 → 0 | 0 → 0 |
| quality-first | $7.94M → $6.98M | 4680 → 6850 | 32.0 → 15.8 (movie 15.0) | 8.18 → 8.41 | 10% → 18% | 0% → 0% | 0% → 0% | 3 → 7 | 2 → 4 | 0 → 0 |
| famous-star | $5.40M → $5.31M | 150 → 1550 | 32.0 → 16.0 (movie 15.4) | 6.55 → 6.96 | 0% → 0% | 0% → 0% | 0% → 3% | 3 → 7 | 9 → 8 | 0 → 0 |
| franchise-builder | $6.36M → $6.56M | 350 → 700 | 32.0 → 16.0 (movie 15.5) | 6.59 → 7.00 | 0% → 0% | 0% → 0% | 0% → 0% | 3 → 7 | 2 → 0 | 0 → 0 |
| experimenter | $5.53M → $6.07M | 225 → 1750 | 32.0 → 16.0 (movie 15.3) | 6.72 → 7.05 | 0% → 0% | 0% → 0% | 0% → 2% | 3 → 8 | 2 → 0 | 0 → 0 |
| cheap-duds | $3.23M → $4.74M | 75 → 850 | 32.0 → 16.0 (movie 16.0) | 6.31 → 6.78 | 0% → 0% | 0% → 0% | 2% → 0% | 3 → 8 | 0 → 0 | 0 → 0 |
| poor-fit-chooser | $1.07M → $0.44M | 0 → 0 | 32.0 → 15.5 (movie 15.5) | 4.40 → 4.62 | 0% → 0% | 5% → 10% | 40% → 39% | 3 → 7 | 0 → 0 | 0 → 0 |
| mixed | $8.34M → $8.90M | 2290 → 3605 | 32.0 → 24.9 (movie 6.1, limited_series 11.0, tv 5.4, original 1.6) | 7.38 → 7.64 | 0% → 3% | 0% → 0% | 0% → 1% | 3 → 8 | 2 → 0 | 0 → 0 |
| tv-first | $8.49M → $7.46M | 2310 → 2475 | 32.0 → 27.1 (movie 1.0, limited_series 6.7, tv 18.6) | 7.37 → 7.36 | 0% → 1% | 0% → 0% | 0% → 13% | 3 → 7 | 2 → 0 | 0 → 0 |
| limited-focus | $7.76M → $6.80M | 2110 → 4650 | 32.0 → 37.2 (movie 1.0, limited_series 35.3) | 7.40 → 8.00 | 0% → 6% | 0% → 0% | 0% → 6% | 3 → 8 | 0 → 0 | 0 → 0 |
| renewal-franchise | $7.63M → $2.83M | 2270 → 1325 | 32.0 → 22.4 (movie 5.9, tv 16.0) | 7.40 → 6.49 | 0% → 0% | 0% → 0% | 0% → 3% | 3 → 7 | 0 → 0 | 0 → 0 |
| streaming-pivot | $8.49M → $6.05M | 2330 → 2925 | 32.0 → 16.1 (movie 13.9, original 1.6) | 7.40 → 7.43 | 0% → 0% | 0% → 0% | 0% → 1% | 3 → 7 | 0 → 0 | 0 → 0 |

## Strategy ranking by end cash

**Before:** balanced $8.69M > streaming-pivot $8.49M > tv-first $8.49M > mixed $8.34M > quality-first $7.94M > limited-focus $7.76M > renewal-franchise $7.63M > franchise-builder $6.36M > experimenter $5.53M > famous-star $5.40M > cheap-duds $3.23M > poor-fit-chooser $1.07M

**After:** mixed $8.90M > balanced $8.13M > tv-first $7.46M > quality-first $6.98M > limited-focus $6.80M > franchise-builder $6.56M > experimenter $6.07M > streaming-pivot $6.05M > famous-star $5.31M > cheap-duds $4.74M > renewal-franchise $2.83M > poor-fit-chooser $0.44M

Invariant violations: before 0, after 0. Elapsed 11.5 s.
