# Gate 4 economy — COMPARE

Seeds 1–16 (paired across variants) · 10 in-game years · policies: balanced, cheap-duds, quality-first, tv-first, mixed, contract-farmer · 656 careers, 14304 finished releases · **elapsed 15.3 s** (legacy 1.9s, candidate 2.7s, cand_gross60 1.8s, cand_pivot65 2.1s, cand_pivot65_gross80 1.8s, cand_ads_half 2.5s, cand_contracts_rich 2.5s).

> Simulation output under TEST ASSUMPTIONS. Not a design lock.

| Variant | Meaning |
|---|---|
| legacy | Gate 3 follow-up rules (legacy_advance; start $40K; no contracts) |
| candidate | late_distribution + contracts (start $120K) |
| cand_gross60 | candidate with every gross-per-viewer coefficient x0.6 |
| cand_pivot65 | candidate where word of mouth only turns positive above 6.5 (sensitivity: mediocre films stop selling themselves) |
| cand_pivot65_gross80 | pivot 6.5 AND every gross-per-viewer x0.8 (the two smallest levers combined) |
| cand_ads_half | candidate with distributor ads half as effective |
| cand_contracts_rich | candidate with every contract fee x2 (farming check) |

**Invariant violations: 0** (checked on every career).

## Releases: who loses money (finished runs only)

All-in net = studio share of gross + kept advance − studio-paid base/Star/campaign − payroll & upkeep during production. Partner net = distributor share − its stake (legacy: the advance; candidate: its own ad spend). n < 10 marked *small*.

| Variant | Format | Score band | n | Studio loses all-in | Median studio all-in | Median direct-only net | Median partner net | Partner loses |
|---|---|---|---|---|---|---|---|---|
| legacy | movie | 4-6 | 255 | 3% | $89K | $127K | −$18K | 82% |
| legacy | movie | 6-8 | 606 | 0% | $197K | $244K | $15K | 40% |
| legacy | movie | 8+ | 729 | 0% | $311K | $449K | $172K | 0% |
| legacy | limited_series | 4-6 | 17 | 0% | $225K | $268K | $5K | 24% |
| legacy | limited_series | 6-8 | 172 | 0% | $298K | $378K | $25K | 19% |
| legacy | limited_series | 8+ | 102 | 0% | $377K | $508K | $152K | 6% |
| legacy | tv | 4-6 | 11 | 0% | $472K | $796K | −$150K | 100% |
| legacy | tv | 6-8 | 134 | 0% | $437K | $692K | $27K | 39% |
| legacy | tv | 8+ | 141 | 0% | $441K | $639K | $58K | 32% |
| legacy | original | 6-8 | 5 *small* | 100% | −$274K | −$124K | — | — |
| legacy | original | 8+ | 25 | 100% | −$305K | −$135K | — | — |
| candidate | movie | 4-6 | 217 | 0% | $104K | $143K | $60K | 0% |
| candidate | movie | 6-8 | 586 | 0% | $195K | $257K | $100K | 0% |
| candidate | movie | 8+ | 742 | 0% | $228K | $367K | $141K | 0% |
| candidate | limited_series | 6-8 | 131 | 0% | $239K | $322K | $135K | 0% |
| candidate | limited_series | 8+ | 98 | 0% | $301K | $442K | $191K | 0% |
| candidate | tv | 4-6 | 5 *small* | 40% | $71K | $395K | $258K | 0% |
| candidate | tv | 6-8 | 95 | 8% | $222K | $460K | $293K | 0% |
| candidate | tv | 8+ | 184 | 6% | $226K | $429K | $293K | 0% |
| candidate | original | 6-8 | 4 *small* | 100% | −$557K | −$266K | — | — |
| candidate | original | 8+ | 33 | 100% | −$297K | −$133K | — | — |
| cand_gross60 | movie | 4-6 | 226 | 14% | $22K | $60K | $23K | 0% |
| cand_gross60 | movie | 6-8 | 639 | 2% | $72K | $135K | $37K | 1% |
| cand_gross60 | movie | 8+ | 546 | 1% | $79K | $179K | $34K | 5% |
| cand_gross60 | limited_series | 4-6 | 27 | 4% | $30K | $76K | $37K | 0% |
| cand_gross60 | limited_series | 6-8 | 153 | 1% | $68K | $145K | $51K | 0% |
| cand_gross60 | limited_series | 8+ | 83 | 0% | $102K | $197K | $65K | 0% |
| cand_gross60 | tv | 6-8 | 82 | 82% | −$38K | $38K | −$3K | 52% |
| cand_gross60 | tv | 8+ | 131 | 82% | −$29K | $54K | $1K | 47% |
| cand_pivot65 | movie | 4-6 | 209 | 0% | $59K | $98K | $38K | 0% |
| cand_pivot65 | movie | 6-8 | 614 | 0% | $115K | $167K | $57K | 0% |
| cand_pivot65 | movie | 8+ | 696 | 0% | $218K | $356K | $133K | 0% |
| cand_pivot65 | limited_series | 4-6 | 4 *small* | 0% | $76K | $121K | $62K | 0% |
| cand_pivot65 | limited_series | 6-8 | 143 | 0% | $149K | $228K | $87K | 0% |
| cand_pivot65 | limited_series | 8+ | 85 | 0% | $270K | $390K | $174K | 0% |
| cand_pivot65 | tv | 6-8 | 55 | 53% | −$3K | $125K | $100K | 2% |
| cand_pivot65 | tv | 8+ | 213 | 5% | $192K | $382K | $249K | 0% |
| cand_pivot65 | original | 6-8 | 1 *small* | 100% | −$301K | −$132K | — | — |
| cand_pivot65 | original | 8+ | 17 | 100% | −$297K | −$140K | — | — |
| cand_pivot65_gross80 | movie | 4-6 | 217 | 4% | $31K | $70K | $26K | 0% |
| cand_pivot65_gross80 | movie | 6-8 | 605 | 1% | $72K | $124K | $37K | 0% |
| cand_pivot65_gross80 | movie | 8+ | 598 | 0% | $141K | $264K | $84K | 0% |
| cand_pivot65_gross80 | limited_series | 4-6 | 19 | 16% | $29K | $73K | $35K | 0% |
| cand_pivot65_gross80 | limited_series | 6-8 | 149 | 0% | $78K | $155K | $52K | 0% |
| cand_pivot65_gross80 | limited_series | 8+ | 89 | 0% | $174K | $288K | $115K | 0% |
| cand_pivot65_gross80 | tv | 6-8 | 80 | 74% | −$27K | $61K | $16K | 40% |
| cand_pivot65_gross80 | tv | 8+ | 143 | 33% | $53K | $215K | $133K | 11% |
| cand_ads_half | movie | 4-6 | 197 | 0% | $65K | $104K | $42K | 0% |
| cand_ads_half | movie | 6-8 | 595 | 0% | $158K | $211K | $84K | 0% |
| cand_ads_half | movie | 8+ | 754 | 0% | $230K | $366K | $140K | 0% |
| cand_ads_half | limited_series | 4-6 | 7 *small* | 0% | $106K | $149K | $79K | 0% |
| cand_ads_half | limited_series | 6-8 | 136 | 0% | $185K | $265K | $108K | 0% |
| cand_ads_half | limited_series | 8+ | 90 | 0% | $252K | $386K | $166K | 0% |
| cand_ads_half | tv | 6-8 | 71 | 28% | $110K | $290K | $188K | 4% |
| cand_ads_half | tv | 8+ | 205 | 9% | $209K | $393K | $268K | 0% |
| cand_ads_half | original | 6-8 | 2 *small* | 100% | −$549K | −$248K | — | — |
| cand_ads_half | original | 8+ | 31 | 100% | −$297K | −$133K | — | — |
| cand_contracts_rich | movie | 4-6 | 214 | 0% | $104K | $143K | $60K | 0% |
| cand_contracts_rich | movie | 6-8 | 593 | 0% | $195K | $256K | $98K | 0% |
| cand_contracts_rich | movie | 8+ | 749 | 0% | $229K | $367K | $139K | 0% |
| cand_contracts_rich | limited_series | 4-6 | 1 *small* | 0% | $101K | $184K | $79K | 0% |
| cand_contracts_rich | limited_series | 6-8 | 124 | 0% | $239K | $323K | $140K | 0% |
| cand_contracts_rich | limited_series | 8+ | 93 | 0% | $301K | $440K | $186K | 0% |
| cand_contracts_rich | tv | 4-6 | 5 *small* | 40% | $71K | $395K | $258K | 0% |
| cand_contracts_rich | tv | 6-8 | 104 | 5% | $188K | $426K | $273K | 0% |
| cand_contracts_rich | tv | 8+ | 181 | 7% | $228K | $431K | $294K | 0% |
| cand_contracts_rich | original | 6-8 | 5 *small* | 100% | −$330K | −$161K | — | — |
| cand_contracts_rich | original | 8+ | 31 | 100% | −$297K | −$135K | — | — |

## Careers

| Variant | Policy | n | End cash p10 / p50 / p90 | Median max drawdown | Median weeks in the red | Stuck saves | Took contracts (median count) | Contract fee / contract week | Earnings / week (p50) | Prestige p50 | TV unlocked | Streaming live |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| legacy | balanced | 16 | $6.74M / $7.13M / $7.74M | $815K | 2 | 0 | 0% (0) | — | $14K | 6772.5 | 0% | 0% |
| legacy | cheap-duds | 16 | $3.51M / $4.27M / $4.72M | $36K | 0 | 0 | 0% (0) | — | $8K | 75 | 0% | 0% |
| legacy | quality-first | 16 | $6.81M / $7.22M / $7.75M | $794K | 2 | 0 | 0% (0) | — | $14K | 5790 | 0% | 0% |
| legacy | tv-first | 16 | $4.65M / $5.40M / $6.91M | $826K | 2.5 | 0 | 0% (0) | — | $10K | 2567.5 | 100% | 0% |
| legacy | mixed | 16 | $5.03M / $5.97M / $6.41M | $782K | 2.5 | 0 | 0% (0) | — | $11K | 4137.5 | 100% | 100% |
| candidate | balanced | 16 | $4.36M / $4.67M / $5.21M | $880K | 4 | 0 | 100% (3) | $2K | $9K | 6475 | 0% | 0% |
| candidate | cheap-duds | 16 | $4.80M / $5.23M / $5.68M | $136K | 0 | 0 | 100% (1) | $2K | $10K | 150 | 0% | 0% |
| candidate | quality-first | 16 | $4.21M / $4.54M / $4.77M | $878K | 6.5 | 0 | 100% (5) | $2K | $9K | 6120 | 0% | 0% |
| candidate | tv-first | 16 | $1.44M / $1.77M / $2.12M | $1.09M | 10.5 | 0 | 100% (3) | $2K | $3K | 3065 | 100% | 0% |
| candidate | mixed | 16 | $2.54M / $2.94M / $3.46M | $984K | 11 | 0 | 100% (3) | $2K | $5K | 4690 | 100% | 100% |
| candidate | contract-farmer | 16 | $894K / $894K / $894K | $0K | 0 | 0 | 100% (86) | $2K | $1K | 0 | 0% | 0% |
| cand_gross60 | balanced | 16 | $290K / $402K / $967K | $832K | 8 | 0 | 100% (7) | $2K | $1K | 5260 | 0% | 0% |
| cand_gross60 | cheap-duds | 16 | $1.68M / $2.01M / $2.50M | $132K | 0 | 0 | 100% (3) | $2K | $4K | 75 | 0% | 0% |
| cand_gross60 | quality-first | 16 | $318K / $743K / $945K | $373K | 11.5 | 0 | 100% (10.5) | $2K | $1K | 4205 | 0% | 0% |
| cand_gross60 | tv-first | 16 | −$33K / $29K / $167K | $465K | 116 | 0 | 100% (20) | $2K | −$0K | 2160 | 100% | 0% |
| cand_gross60 | mixed | 16 | $164K / $314K / $532K | $483K | 54.5 | 0 | 100% (15) | $3K | $0K | 2152.5 | 100% | 0% |
| cand_gross60 | contract-farmer | 16 | $894K / $894K / $894K | $0K | 0 | 0 | 100% (86) | $2K | $1K | 0 | 0% | 0% |
| cand_pivot65 | balanced | 16 | $3.10M / $3.99M / $4.33M | $872K | 7 | 0 | 100% (5) | $2K | $7K | 6220 | 0% | 0% |
| cand_pivot65 | cheap-duds | 16 | $2.73M / $3.09M / $3.71M | $143K | 0 | 0 | 100% (1) | $2K | $6K | 75 | 0% | 0% |
| cand_pivot65 | quality-first | 16 | $3.11M / $3.63M / $4.20M | $870K | 7 | 0 | 100% (6.5) | $2K | $7K | 5655 | 0% | 0% |
| cand_pivot65 | tv-first | 16 | $563K / $1.02M / $1.30M | $1.17M | 24 | 0 | 100% (6.5) | $2K | $2K | 3312.5 | 100% | 0% |
| cand_pivot65 | mixed | 16 | $972K / $1.77M / $2.26M | $1.05M | 15 | 0 | 100% (5) | $2K | $3K | 4195 | 100% | 100% |
| cand_pivot65 | contract-farmer | 16 | $894K / $894K / $894K | $0K | 0 | 0 | 100% (86) | $2K | $1K | 0 | 0% | 0% |
| cand_pivot65_gross80 | balanced | 16 | $934K / $1.40M / $1.72M | $863K | 9.5 | 0 | 100% (8.5) | $2K | $2K | 5010 | 0% | 0% |
| cand_pivot65_gross80 | cheap-duds | 16 | $1.70M / $2.13M / $2.42M | $144K | 0 | 0 | 100% (2) | $2K | $4K | 150 | 0% | 0% |
| cand_pivot65_gross80 | quality-first | 16 | $1.05M / $1.21M / $1.72M | $874K | 15 | 0 | 100% (10) | $2K | $2K | 4632.5 | 0% | 0% |
| cand_pivot65_gross80 | tv-first | 16 | −$21K / $88K / $322K | $588K | 120.5 | 0 | 100% (17) | $3K | −$0K | 2217.5 | 100% | 0% |
| cand_pivot65_gross80 | mixed | 16 | −$5K / $371K / $642K | $959K | 50 | 0 | 100% (12) | $3K | $0K | 3190 | 100% | 19% |
| cand_pivot65_gross80 | contract-farmer | 16 | $894K / $894K / $894K | $0K | 0 | 0 | 100% (86) | $2K | $1K | 0 | 0% | 0% |
| cand_ads_half | balanced | 16 | $4.17M / $4.50M / $5.13M | $875K | 6.5 | 0 | 100% (3) | $2K | $8K | 6637.5 | 0% | 0% |
| cand_ads_half | cheap-duds | 16 | $3.26M / $3.81M / $4.64M | $128K | 0 | 0 | 100% (2) | $2K | $7K | 75 | 0% | 0% |
| cand_ads_half | quality-first | 16 | $4.03M / $4.49M / $4.84M | $873K | 6.5 | 0 | 100% (4) | $2K | $8K | 5990 | 0% | 0% |
| cand_ads_half | tv-first | 16 | $982K / $1.39M / $1.68M | $1.10M | 16.5 | 0 | 100% (5) | $2K | $2K | 3400 | 100% | 0% |
| cand_ads_half | mixed | 16 | $1.81M / $2.15M / $2.67M | $1.02M | 13.5 | 0 | 100% (4) | $2K | $4K | 4370 | 100% | 100% |
| cand_ads_half | contract-farmer | 16 | $894K / $894K / $894K | $0K | 0 | 0 | 100% (86) | $2K | $1K | 0 | 0% | 0% |
| cand_contracts_rich | balanced | 16 | $4.41M / $4.82M / $5.32M | $879K | 4 | 0 | 100% (2.5) | $3K | $9K | 6515 | 0% | 0% |
| cand_contracts_rich | cheap-duds | 16 | $4.71M / $5.23M / $5.69M | $127K | 0 | 0 | 100% (1) | $3K | $10K | 150 | 0% | 0% |
| cand_contracts_rich | quality-first | 16 | $4.19M / $4.74M / $5.08M | $897K | 4.5 | 0 | 100% (3) | $3K | $9K | 6095 | 0% | 0% |
| cand_contracts_rich | tv-first | 16 | $1.26M / $1.83M / $2.36M | $1.11M | 9.5 | 0 | 100% (3) | $3K | $3K | 3132.5 | 100% | 0% |
| cand_contracts_rich | mixed | 16 | $2.62M / $3.09M / $3.49M | $998K | 9 | 0 | 100% (3) | $3K | $6K | 4675 | 100% | 100% |
| cand_contracts_rich | contract-farmer | 16 | $1.67M / $1.67M / $1.67M | $0K | 0 | 0 | 100% (86) | $3K | $3K | 0 | 0% | 0% |

## Distributor advertising vs openings (candidate variants, distributed movies)

| Variant | Route | n | Median ad spend | Median opening | Median unique ÷ reach | Saturate reach (≥ 95%) | Median avg score |
|---|---|---|---|---|---|---|---|
| candidate | distributor | 1545 | $85K | 83,559 | 99% | 66% | 7.91 |
| candidate | low-ad third vs high-ad third | 517 / 514 | $46K / $168K | 55,818 / 106,251 | | | |
| cand_gross60 | distributor | 1411 | $76K | 80,586 | 99% | 63% | 7.59 |
| cand_gross60 | low-ad third vs high-ad third | 469 / 468 | $44K / $157K | 55,643 / 106,594 | | | |
| cand_pivot65 | distributor | 1519 | $83K | 82,172 | 85% | 42% | 7.84 |
| cand_pivot65 | low-ad third vs high-ad third | 508 / 501 | $46K / $162K | 55,739 / 106,330 | | | |
| cand_pivot65_gross80 | distributor | 1420 | $76K | 80,218 | 79% | 37% | 7.64 |
| cand_pivot65_gross80 | low-ad third vs high-ad third | 471 / 475 | $44K / $151K | 55,911 / 103,629 | | | |
| cand_ads_half | distributor | 1546 | $87K | 72,272 | 99% | 62% | 7.95 |
| cand_ads_half | low-ad third vs high-ad third | 510 / 515 | $46K / $170K | 43,735 / 96,098 | | | |
| cand_contracts_rich | distributor | 1556 | $86K | 83,568 | 99% | 66% | 7.92 |
| cand_contracts_rich | low-ad third vs high-ad third | 518 / 517 | $46K / $165K | 55,818 / 106,187 | | | |

## Outlier seeds

- **legacy** lowest end cash: cheap-duds s13 $3.35M; cheap-duds s9 $3.51M; cheap-duds s12 $3.52M · deepest hole: tv-first s14 −$22K; mixed s10 −$21K; mixed s11 −$20K
- **candidate** lowest end cash: contract-farmer s1 $894K; contract-farmer s2 $894K; contract-farmer s3 $894K · deepest hole: mixed s16 −$45K; tv-first s3 −$45K; mixed s3 −$45K
- **cand_gross60** lowest end cash: tv-first s11 −$36K; tv-first s16 −$35K; tv-first s3 −$30K · deepest hole: tv-first s4 −$206K; tv-first s14 −$170K; tv-first s9 −$168K
- **cand_pivot65** lowest end cash: tv-first s3 $504K; tv-first s9 $509K; mixed s16 $526K · deepest hole: tv-first s9 −$292K; mixed s16 −$237K; tv-first s1 −$110K
- **cand_pivot65_gross80** lowest end cash: mixed s14 −$390K; tv-first s6 −$168K; mixed s16 −$83K · deepest hole: mixed s14 −$390K; tv-first s12 −$172K; tv-first s11 −$171K
- **cand_ads_half** lowest end cash: tv-first s2 $886K; contract-farmer s1 $894K; contract-farmer s2 $894K · deepest hole: mixed s2 −$204K; tv-first s2 −$116K; tv-first s11 −$63K
- **cand_contracts_rich** lowest end cash: tv-first s13 $1.15M; tv-first s16 $1.21M; tv-first s7 $1.31M · deepest hole: tv-first s1 −$45K; tv-first s16 −$43K; tv-first s15 −$39K
