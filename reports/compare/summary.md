# Before vs after: the whole default game

BEFORE = the pre-Producers default (`legacyConfig()`, byte-identical to old `main` 2fe1135). AFTER = today's Producers default (`config/baseline.json`). Seeds 1–16, 10-year careers, every strategy. Cells are **before → after**; cash/Prestige/score are medians per career, counts are totals across careers. TEST VALUES throughout.

| Strategy | End cash | Prestige | Releases / career (after: by format) | Median score | Hall of Fame | Sub-4 releases | Movies losing money | Genres open at end | Negative-cash weeks | Invariant violations |
|---|---|---|---|---|---|---|---|---|---|---|
| balanced | $8.69M → $8.14M | 3095 → 4990 | 32.0 → 15.8 (movie 14.9) | 7.99 → 8.44 | 7% → 21% | 0% → 0% | 0% → 1% | 3 → 7 | 2 → 0 | 0 → 0 |
| quality-first | $7.94M → $7.03M | 4680 → 6850 | 32.0 → 15.8 (movie 15.0) | 8.18 → 8.43 | 10% → 18% | 0% → 0% | 0% → 0% | 3 → 7 | 2 → 4 | 0 → 0 |
| famous-star | $5.40M → $5.98M | 150 → 1800 | 32.0 → 16.0 (movie 15.4) | 6.55 → 7.02 | 0% → 0% | 0% → 0% | 0% → 3% | 3 → 7 | 9 → 8 | 0 → 0 |
| franchise-builder | $6.36M → $6.90M | 350 → 700 | 32.0 → 16.0 (movie 15.5) | 6.59 → 7.09 | 0% → 0% | 0% → 0% | 0% → 0% | 3 → 7 | 2 → 0 | 0 → 0 |
| experimenter | $5.53M → $6.26M | 225 → 1850 | 32.0 → 16.0 (movie 15.3) | 6.72 → 7.06 | 0% → 0% | 0% → 0% | 0% → 2% | 3 → 8 | 2 → 0 | 0 → 0 |
| cheap-duds | $3.23M → $4.88M | 75 → 1000 | 32.0 → 16.0 (movie 16.0) | 6.31 → 6.83 | 0% → 0% | 0% → 0% | 2% → 0% | 3 → 8 | 0 → 0 | 0 → 0 |
| poor-fit-chooser | $1.07M → $0.47M | 0 → 0 | 32.0 → 15.6 (movie 15.5) | 4.40 → 4.72 | 0% → 0% | 5% → 6% | 40% → 37% | 3 → 7 | 0 → 0 | 0 → 0 |
| mixed | $8.34M → $9.14M | 2290 → 3865 | 32.0 → 24.7 (movie 6.2, limited_series 10.6, tv 5.3, original 1.8) | 7.38 → 7.69 | 0% → 4% | 0% → 0% | 0% → 1% | 3 → 8 | 2 → 0 | 0 → 0 |
| tv-first | $8.49M → $9.48M | 2310 → 2610 | 32.0 → 26.1 (movie 1.0, limited_series 6.3, tv 18.1) | 7.37 → 7.53 | 0% → 1% | 0% → 0% | 0% → 13% | 3 → 7 | 2 → 0 | 0 → 0 |
| limited-focus | $7.76M → $6.80M | 2110 → 4615 | 32.0 → 37.2 (movie 1.0, limited_series 35.3) | 7.40 → 8.03 | 0% → 6% | 0% → 0% | 0% → 6% | 3 → 8 | 0 → 0 | 0 → 0 |
| renewal-franchise | $7.63M → $2.78M | 2270 → 1325 | 32.0 → 22.6 (movie 5.7, tv 16.4) | 7.40 → 6.42 | 0% → 0% | 0% → 0% | 0% → 3% | 3 → 7 | 0 → 0 | 0 → 0 |
| streaming-pivot | $8.49M → $6.30M | 2330 → 3095 | 32.0 → 16.3 (movie 13.5, original 2.2) | 7.40 → 7.55 | 0% → 1% | 0% → 0% | 0% → 1% | 3 → 8 | 0 → 0 | 0 → 0 |

## Strategy ranking by end cash

**Before:** balanced $8.69M > streaming-pivot $8.49M > tv-first $8.49M > mixed $8.34M > quality-first $7.94M > limited-focus $7.76M > renewal-franchise $7.63M > franchise-builder $6.36M > experimenter $5.53M > famous-star $5.40M > cheap-duds $3.23M > poor-fit-chooser $1.07M

**After:** tv-first $9.48M > mixed $9.14M > balanced $8.14M > quality-first $7.03M > franchise-builder $6.90M > limited-focus $6.80M > streaming-pivot $6.30M > experimenter $6.26M > famous-star $5.98M > cheap-duds $4.88M > renewal-franchise $2.78M > poor-fit-chooser $0.47M

Invariant violations: before 0, after 0. Elapsed 11.0 s.
