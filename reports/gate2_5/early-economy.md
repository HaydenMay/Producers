# First-production economics (Gate 2.5 E)

> Provisional values. Each scenario runs the same seeds; a career stops after the first film's run ends. **Simulation assumptions, not design locks.**

## S0 current numbers

start $40K, $2.00 gross/viewer, wages $900/wk x2 + $600 upkeep

Overrides: `{}` · start cash $40,000 · base cost $60,000 · gross/viewer $2

| Strategy | advance | starFee | campaign | surplus | gross | studioTake | distributorTake | payrollToRunEnd | cashAtRelease | cashAtRunEnd | minCash | netFirstFilm | avgScore | weeksToRunEnd | fallback Star used | can self-fund next | ended negative |
|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|
| balanced | $81,000 | $10,224 | $8,000 | $0 | $232,727 | $158,094 | $74,669 | $69,600 | $-3,304 | $122,569 | $-5,704 | $82,569 | 5.69 | 29 | 0% | 97% | 0% |
| quality-first | $82,000 | $18,372 | $8,000 | $0 | $216,450 | $147,186 | $69,218 | $69,600 | $-1,115 | $117,456 | $-3,515 | $77,456 | 5.63 | 29 | 0% | 98% | 0% |
| cheap-duds | $80,000 | $3,985 | $0 | $16,195 | $145,596 | $99,603 | $46,416 | $67,200 | $17,795 | $89,572 | $1,600 | $49,572 | 5.51 | 28 | 0% | 94% | 0% |
| famous-star | $81,000 | $23,072 | $0 | $0 | $210,329 | $143,726 | $66,981 | $69,600 | $-12,536 | $99,862 | $-14,936 | $59,862 | 5.62 | 29 | 0% | 95% | 0% |
| selective-self-funder | $81,000 | $18,372 | $8,000 | $0 | $233,718 | $158,306 | $74,660 | $72,000 | $-2,904 | $122,547 | $-5,304 | $82,547 | 5.66 | 30 | 0% | 98% | 0% |

## S1 lower gross ($1.50/viewer)



Overrides: `{"world":{"grossPerViewer":1.5}}` · start cash $40,000 · base cost $60,000 · gross/viewer $1.5

| Strategy | advance | starFee | campaign | surplus | gross | studioTake | distributorTake | payrollToRunEnd | cashAtRelease | cashAtRunEnd | minCash | netFirstFilm | avgScore | weeksToRunEnd | fallback Star used | can self-fund next | ended negative |
|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|
| balanced | $81,000 | $10,224 | $8,000 | $0 | $174,546 | $118,571 | $56,002 | $69,600 | $-3,304 | $83,512 | $-5,704 | $43,512 | 5.69 | 29 | 0% | 81% | 0% |
| quality-first | $82,000 | $18,372 | $8,000 | $0 | $162,338 | $110,390 | $51,914 | $69,600 | $-1,115 | $79,715 | $-3,515 | $39,715 | 5.63 | 29 | 0% | 79% | 0% |
| cheap-duds | $80,000 | $3,985 | $0 | $16,195 | $109,197 | $74,702 | $34,812 | $67,200 | $17,795 | $64,163 | $1,600 | $24,163 | 5.51 | 28 | 0% | 62% | 0% |
| famous-star | $81,000 | $23,072 | $0 | $0 | $157,747 | $107,794 | $50,236 | $69,600 | $-12,536 | $63,594 | $-14,936 | $23,594 | 5.62 | 29 | 0% | 59% | 0% |
| selective-self-funder | $81,000 | $18,372 | $8,000 | $0 | $175,289 | $118,730 | $55,995 | $72,000 | $-2,904 | $82,791 | $-5,304 | $42,791 | 5.66 | 30 | 0% | 82% | 0% |

## S2 lower gross ($1.25) + higher upkeep ($1,200/wk)



Overrides: `{"world":{"grossPerViewer":1.25},"start":{"upkeepPerWeek":1200}}` · start cash $40,000 · base cost $60,000 · gross/viewer $1.25

| Strategy | advance | starFee | campaign | surplus | gross | studioTake | distributorTake | payrollToRunEnd | cashAtRelease | cashAtRunEnd | minCash | netFirstFilm | avgScore | weeksToRunEnd | fallback Star used | can self-fund next | ended negative |
|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|
| balanced | $81,000 | $9,507 | $0 | $1,870 | $130,432 | $88,694 | $41,623 | $87,000 | $-6,130 | $42,502 | $-9,130 | $2,502 | 5.68 | 29 | 0% | 28% | 0% |
| quality-first | $82,000 | $10,224 | $0 | $1,511 | $132,937 | $90,484 | $42,242 | $87,000 | $-6,489 | $43,553 | $-9,489 | $3,553 | 5.62 | 29 | 0% | 22% | 0% |
| cheap-duds | $80,000 | $3,985 | $0 | $16,195 | $90,998 | $62,252 | $29,010 | $84,000 | $8,195 | $35,354 | $-8,000 | $-4,646 | 5.51 | 28 | 0% | 7% | 1% |
| famous-star | $81,000 | $10,224 | $0 | $1,870 | $131,456 | $89,703 | $41,746 | $87,000 | $-18,130 | $32,085 | $-21,130 | $-7,915 | 5.60 | 29 | 0% | 7% | 1% |
| selective-self-funder | $81,000 | $9,866 | $0 | $1,180 | $136,782 | $93,101 | $43,476 | $90,000 | $-6,820 | $42,822 | $-9,820 | $2,822 | 5.65 | 30 | 0% | 29% | 0% |

## S3 lean start ($20K cash)



Overrides: `{"start":{"cash":20000}}` · start cash $20,000 · base cost $60,000 · gross/viewer $2

| Strategy | advance | starFee | campaign | surplus | gross | studioTake | distributorTake | payrollToRunEnd | cashAtRelease | cashAtRunEnd | minCash | netFirstFilm | avgScore | weeksToRunEnd | fallback Star used | can self-fund next | ended negative |
|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|
| balanced | $81,000 | $6,216 | $8,000 | $4,498 | $210,234 | $143,119 | $67,056 | $69,600 | $-13,901 | $99,006 | $-18,400 | $79,006 | 5.61 | 29 | 2% | 81% | 0% |
| quality-first | $82,000 | $6,216 | $8,000 | $5,517 | $212,524 | $144,670 | $67,468 | $69,600 | $-12,883 | $100,730 | $-18,400 | $80,730 | 5.60 | 29 | 3% | 83% | 0% |
| cheap-duds | $80,000 | $3,985 | $0 | $16,195 | $145,596 | $99,603 | $46,416 | $67,200 | $-2,205 | $69,572 | $-18,400 | $49,572 | 5.51 | 28 | 1% | 70% | 1% |
| famous-star | $81,000 | $9,507 | $0 | $3,420 | $200,987 | $136,858 | $64,160 | $69,600 | $-14,980 | $92,015 | $-18,400 | $72,015 | 5.58 | 29 | 2% | 85% | 0% |
| selective-self-funder | $81,000 | $6,832 | $8,000 | $4,494 | $219,359 | $149,216 | $69,844 | $69,600 | $-13,905 | $102,888 | $-18,400 | $82,888 | 5.61 | 29 | 1% | 83% | 0% |

## S4 lean start + lower gross ($20K, $1.50)



Overrides: `{"start":{"cash":20000},"world":{"grossPerViewer":1.5}}` · start cash $20,000 · base cost $60,000 · gross/viewer $1.5

| Strategy | advance | starFee | campaign | surplus | gross | studioTake | distributorTake | payrollToRunEnd | cashAtRelease | cashAtRunEnd | minCash | netFirstFilm | avgScore | weeksToRunEnd | fallback Star used | can self-fund next | ended negative |
|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|
| balanced | $81,000 | $6,216 | $8,000 | $4,498 | $157,676 | $107,339 | $50,292 | $69,600 | $-13,901 | $63,096 | $-18,400 | $43,096 | 5.61 | 29 | 2% | 56% | 0% |
| quality-first | $82,000 | $6,216 | $8,000 | $5,517 | $159,393 | $108,503 | $50,601 | $69,600 | $-12,883 | $64,520 | $-18,400 | $44,520 | 5.60 | 29 | 3% | 59% | 0% |
| cheap-duds | $80,000 | $3,985 | $0 | $16,195 | $109,197 | $74,702 | $34,812 | $67,200 | $-2,205 | $44,221 | $-18,400 | $24,221 | 5.51 | 28 | 1% | 19% | 1% |
| famous-star | $81,000 | $9,507 | $0 | $3,420 | $150,741 | $102,644 | $48,120 | $69,600 | $-14,980 | $57,335 | $-18,400 | $37,335 | 5.58 | 29 | 2% | 45% | 0% |
| selective-self-funder | $81,000 | $6,832 | $8,000 | $4,494 | $164,520 | $111,912 | $52,383 | $69,600 | $-13,905 | $66,894 | $-18,400 | $46,894 | 5.61 | 29 | 1% | 59% | 0% |

## S5 broke start ($0 cash, $1.25 gross)

stress test: must still finish the first film (lifeline + free fallback Star + no-campaign)

Overrides: `{"start":{"cash":0},"world":{"grossPerViewer":1.25}}` · start cash $0 · base cost $60,000 · gross/viewer $1.25

| Strategy | advance | starFee | campaign | surplus | gross | studioTake | distributorTake | payrollToRunEnd | cashAtRelease | cashAtRunEnd | minCash | netFirstFilm | avgScore | weeksToRunEnd | fallback Star used | can self-fund next | ended negative |
|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|
| balanced | $81,000 | $5,621 | $8,000 | $4,870 | $132,772 | $90,421 | $42,130 | $69,600 | $-33,530 | $27,374 | $-38,400 | $27,374 | 5.60 | 29 | 5% | 13% | 16% |
| quality-first | $82,000 | $5,621 | $8,000 | $6,015 | $133,861 | $91,026 | $42,550 | $69,600 | $-32,385 | $28,283 | $-38,400 | $28,283 | 5.58 | 29 | 4% | 4% | 13% |
| cheap-duds | $80,000 | $3,496 | $0 | $16,195 | $90,929 | $62,110 | $28,956 | $67,200 | $-22,205 | $11,883 | $-38,400 | $11,883 | 5.51 | 28 | 6% | 0% | 20% |
| famous-star | $81,000 | $8,130 | $8,000 | $3,955 | $127,728 | $87,276 | $40,737 | $69,600 | $-34,445 | $23,032 | $-38,400 | $23,032 | 5.56 | 29 | 4% | 4% | 12% |
| selective-self-funder | $81,000 | $6,216 | $8,000 | $4,870 | $138,025 | $94,224 | $44,168 | $69,600 | $-33,530 | $30,745 | $-38,400 | $30,745 | 5.58 | 29 | 2% | 10% | 14% |
