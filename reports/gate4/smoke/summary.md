# Gate 4 economy — SMOKE

Seeds 1–4 (paired across variants) · 4 in-game years · policies: balanced, cheap-duds, mixed · 24 careers, 262 finished releases · **elapsed 0.5 s** (legacy 0.3s, candidate 0.2s).

> Simulation output under TEST ASSUMPTIONS. Not a design lock.

| Variant | Meaning |
|---|---|
| legacy | Gate 3 follow-up rules (legacy_advance; start $40K; no contracts) |
| candidate | late_distribution + contracts (start $120K) |

**Invariant violations: 0** (checked on every career).

## Releases: who loses money (finished runs only)

All-in net = studio share of gross + kept advance − studio-paid base/Star/campaign − payroll & upkeep during production. Partner net = distributor share − its stake (legacy: the advance; candidate: its own ad spend). n < 10 marked *small*.

| Variant | Format | Score band | n | Studio loses all-in | Median studio all-in | Median direct-only net | Median partner net | Partner loses |
|---|---|---|---|---|---|---|---|---|
| legacy | movie | 4-6 | 41 | 7% | $86K | $125K | −$21K | 83% |
| legacy | movie | 6-8 | 43 | 0% | $212K | $275K | $20K | 40% |
| legacy | movie | 8+ | 20 | 0% | $311K | $423K | $197K | 0% |
| legacy | limited_series | 4-6 | 1 *small* | 0% | $219K | $262K | −$16K | 100% |
| legacy | limited_series | 6-8 | 19 | 0% | $276K | $339K | $11K | 32% |
| legacy | limited_series | 8+ | 9 *small* | 0% | $361K | $454K | $150K | 0% |
| legacy | tv | 6-8 | 2 *small* | 0% | $108K | $216K | −$16K | 100% |
| legacy | tv | 8+ | 3 *small* | 0% | $131K | $240K | $19K | 33% |
| candidate | movie | 4-6 | 32 | 0% | $104K | $143K | $65K | 0% |
| candidate | movie | 6-8 | 41 | 0% | $174K | $239K | $96K | 0% |
| candidate | movie | 8+ | 21 | 0% | $237K | $346K | $190K | 0% |
| candidate | limited_series | 6-8 | 17 | 0% | $241K | $324K | $156K | 0% |
| candidate | limited_series | 8+ | 7 *small* | 0% | $326K | $434K | $258K | 0% |
| candidate | tv | 6-8 | 1 *small* | 0% | $241K | $418K | $301K | 0% |
| candidate | tv | 8+ | 5 *small* | 40% | $10K | $119K | $54K | 0% |

## Careers

| Variant | Policy | n | End cash p10 / p50 / p90 | Median max drawdown | Median weeks in the red | Stuck saves | Took contracts (median count) | Contract fee / contract week | Earnings / week (p50) | Prestige p50 | TV unlocked | Streaming live |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| legacy | balanced | 4 | $1.46M / $1.67M / $1.87M | $824K | 1.5 | 0 | 0% (0) | — | $8K | 1805 | 0% | 0% |
| legacy | cheap-duds | 4 | $1.02M / $1.27M / $1.45M | $36K | 0 | 0 | 0% (0) | — | $6K | 0 | 0% | 0% |
| legacy | mixed | 4 | $1.48M / $1.74M / $2.38M | $540K | 4 | 0 | 0% (0) | — | $8K | 1200 | 100% | 0% |
| candidate | balanced | 4 | $845K / $979K / $1.05M | $884K | 8 | 0 | 100% (2.5) | $2K | $4K | 1982.5 | 0% | 0% |
| candidate | cheap-duds | 4 | $1.49M / $1.68M / $1.74M | $122K | 0 | 0 | 100% (1) | $2K | $8K | 0 | 0% | 0% |
| candidate | mixed | 4 | $475K / $555K / $1.03M | $907K | 11 | 0 | 100% (2.5) | $2K | $2K | 1195 | 100% | 0% |

## Distributor advertising vs openings (candidate variants, distributed movies)

| Variant | Route | n | Median ad spend | Median opening | Median unique ÷ reach | Saturate reach (≥ 95%) | Median avg score |
|---|---|---|---|---|---|---|---|
| candidate | distributor | 94 | $50K | 61,380 | 78% | 41% | 6.50 |
| candidate | low-ad third vs high-ad third | 34 / 32 | $37K / $99K | 53,870 / 94,045 | | | |

## Outlier seeds

- **legacy** lowest end cash: cheap-duds s2 $974K; cheap-duds s4 $1.11M; balanced s4 $1.36M · deepest hole: mixed s2 −$17K; mixed s3 −$13K; balanced s4 −$5K
- **candidate** lowest end cash: mixed s3 $472K; mixed s2 $482K; mixed s1 $628K · deepest hole: mixed s3 −$45K; balanced s2 −$21K; mixed s2 −$21K
