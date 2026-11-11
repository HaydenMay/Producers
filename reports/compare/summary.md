# Before vs after: the whole default game

BEFORE = the pre-Producers default (`legacyConfig()`, byte-identical to old `main` 2fe1135). AFTER = today's Producers default (`config/baseline.json`). Seeds 1–16, 10-year careers, every strategy. Cells are **before → after**; cash/Prestige/score are medians per career, counts are totals across careers. TEST VALUES throughout.

| Strategy | End cash | Prestige | Releases / career (after: by format) | Median score | Hall of Fame | Sub-4 releases | Movies losing money | Genres open at end | Negative-cash weeks | Invariant violations |
|---|---|---|---|---|---|---|---|---|---|---|
| balanced | $8.69M → $8.30M | 3095 → 5150 | 32.0 → 15.3 (movie 14.9) | 7.99 → 8.46 | 7% → 21% | 0% → 0% | 0% → 1% | 3 → 8 | 2 → 9 | 0 → 0 |
| quality-first | $7.94M → $7.86M | 4680 → 6800 | 32.0 → 15.1 (movie 15.0) | 8.18 → 8.53 | 10% → 17% | 0% → 0% | 0% → 0% | 3 → 7 | 2 → 9 | 0 → 0 |
| famous-star | $5.40M → $5.66M | 150 → 1550 | 32.0 → 16.0 (movie 15.4) | 6.55 → 6.96 | 0% → 0% | 0% → 0% | 0% → 2% | 3 → 7 | 9 → 10 | 0 → 0 |
| franchise-builder | $6.36M → $7.12M | 350 → 700 | 32.0 → 16.0 (movie 15.6) | 6.59 → 7.07 | 0% → 0% | 0% → 0% | 0% → 0% | 3 → 7 | 2 → 9 | 0 → 0 |
| experimenter | $5.53M → $6.49M | 225 → 1750 | 32.0 → 16.0 (movie 15.4) | 6.72 → 7.05 | 0% → 0% | 0% → 0% | 0% → 1% | 3 → 8 | 2 → 1 | 0 → 0 |
| cheap-duds | $3.23M → $5.09M | 75 → 850 | 32.0 → 16.0 (movie 16.0) | 6.31 → 6.78 | 0% → 0% | 0% → 0% | 2% → 0% | 3 → 8 | 0 → 0 | 0 → 0 |
| poor-fit-chooser | $1.07M → $0.75M | 0 → 0 | 32.0 → 16.0 (movie 15.9) | 4.40 → 4.63 | 0% → 0% | 5% → 12% | 40% → 0% | 3 → 7 | 0 → 0 | 0 → 0 |
| mixed | $8.34M → $8.74M | 2290 → 3500 | 32.0 → 24.8 (movie 6.2, limited_series 10.8, tv 5.2, original 1.9) | 7.38 → 7.65 | 0% → 2% | 0% → 0% | 0% → 1% | 3 → 8 | 2 → 6 | 0 → 0 |
| tv-first | $8.49M → $7.76M | 2310 → 2100 | 32.0 → 27.1 (movie 1.0, limited_series 6.6, tv 18.9) | 7.37 → 7.39 | 0% → 1% | 0% → 0% | 0% → 13% | 3 → 7 | 2 → 9 | 0 → 0 |
| limited-focus | $7.76M → $7.02M | 2110 → 4700 | 32.0 → 37.5 (movie 1.0, limited_series 35.6) | 7.40 → 8.02 | 0% → 6% | 0% → 0% | 0% → 6% | 3 → 8 | 0 → 6 | 0 → 0 |
| renewal-franchise | $7.63M → $1.66M | 2270 → 1025 | 32.0 → 23.5 (movie 5.8, tv 17.4) | 7.40 → 6.22 | 0% → 0% | 0% → 0% | 0% → 2% | 3 → 7 | 0 → 6 | 0 → 0 |
| streaming-pivot | $8.49M → $6.12M | 2330 → 2925 | 32.0 → 16.3 (movie 13.3, original 2.4) | 7.40 → 7.49 | 0% → 1% | 0% → 0% | 0% → 0% | 3 → 7 | 0 → 7 | 0 → 0 |

## Strategy ranking by end cash

**Before:** balanced $8.69M > streaming-pivot $8.49M > tv-first $8.49M > mixed $8.34M > quality-first $7.94M > limited-focus $7.76M > renewal-franchise $7.63M > franchise-builder $6.36M > experimenter $5.53M > famous-star $5.40M > cheap-duds $3.23M > poor-fit-chooser $1.07M

**After:** mixed $8.74M > balanced $8.30M > quality-first $7.86M > tv-first $7.76M > franchise-builder $7.12M > limited-focus $7.02M > experimenter $6.49M > streaming-pivot $6.12M > famous-star $5.66M > cheap-duds $5.09M > renewal-franchise $1.66M > poor-fit-chooser $0.75M

Invariant violations: before 0, after 0. Elapsed 11.6 s.
