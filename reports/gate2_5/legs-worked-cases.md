# Weekly legs: worked cases (Gate 2.5 B)

> Controlled inputs: each case fixes the scores, reach and awareness inputs, then runs the real release pipeline (opening → weekly viewers → gross → royalty → IP fans → distributor trust). **Simulation assumptions, not design locks.**

## Summary

| Case | Model | Opening | Peak week | Grows after opening? | Weeks | Total viewers (reach cap) | Gross | Studio take | Distributor ROI | Fans Δ | Trust step |
|---|---|---:|---:|---|---:|---:|---:|---:|---:|---:|---:|
| i | geometric (Gate 2) | 21,263 | 1 | no | 15 | 94,598 (240,000) | $189,196 | $132,437 | 0.76 | 5,752 | 0.25 |
| i | diffusion (candidate) | 21,263 | 8 | **yes** | 15 | 233,852 (240,000) | $467,704 | $327,393 | 1.87 | 14,218 | 0.75 |
| ii | geometric (Gate 2) | 89,999 | 1 | no | 10 | 195,483 (340,000) | $390,966 | $273,676 | 1.56 | 0 | 0 |
| ii | diffusion (candidate) | 89,999 | 1 | no | 10 | 180,589 (340,000) | $361,178 | $252,825 | 1.44 | 0 | -0.07 |
| iii | geometric (Gate 2) | 47,549 | 1 | no | 12 | 147,899 (240,000) | $295,798 | $207,059 | 1.18 | 3,550 | 0.24 |
| iii | diffusion (candidate) | 47,549 | 1 | no | 11 | 133,873 (240,000) | $267,746 | $187,422 | 1.07 | 3,213 | 0.18 |
| iv | geometric (Gate 2) | 47,549 | 1 | no | 15 | 152,797 (240,000) | $305,594 | $213,916 | 1.22 | 3,667 | 0.27 |
| iv | diffusion (candidate) | 47,549 | 1 | **yes** | 15 | 235,909 (240,000) | $471,818 | $330,273 | 1.89 | 5,662 | 0.67 |
| v | geometric (Gate 2) | 7,925 | 1 | no | 15 | 36,568 (40,000) | $73,136 | $51,195 | 0.29 | 2,340 | -0.02 |
| v | diffusion (candidate) | 7,925 | 1 | **yes** | 12 | 38,873 (40,000) | $77,746 | $54,422 | 0.31 | 2,488 | -0.01 |

### Case i — High critics + high audience, low initial awareness (no marketing, unknown Star) — model: geometric (Gate 2)

Inputs: Audience 8.8 / Critic 8.8, reach 0.6, campaign none, Star Fame 0, studio buzz 0. Awareness 0.3 (base 0.35, marketing 0, studioBuzz 0, starFame 0, trend 0, ipFans 0) · reach cap 240,000 · initially aware 70,875.

| Wk | Viewers | vs prev | Driver | Gross | Studio | Distributor |
|---:|---:|---:|---|---:|---:|---:|
| 1 | 21,263 | — | opening | $42,526 | $29,768 | $12,758 |
| 2 | 16,092 | 0.76x | critic 8.8 (early buzz) | $32,184 | $22,529 | $9,655 |
| 3 | 12,178 | 0.76x | critic 8.8 (early buzz) | $24,356 | $17,049 | $7,307 |
| 4 | 9,772 | 0.8x | audience 8.8 (word of mouth) | $19,544 | $13,681 | $5,863 |
| 5 | 7,841 | 0.8x | audience 8.8 (word of mouth) | $15,682 | $10,977 | $4,705 |
| 6 | 6,292 | 0.8x | audience 8.8 (word of mouth) | $12,584 | $8,809 | $3,775 |
| 7 | 5,049 | 0.8x | audience 8.8 (word of mouth) | $10,098 | $7,069 | $3,029 |
| 8 | 4,051 | 0.8x | audience 8.8 (word of mouth) | $8,102 | $5,671 | $2,431 |
| 9 | 3,251 | 0.8x | audience 8.8 (word of mouth) | $6,502 | $4,551 | $1,951 |
| 10 | 2,609 | 0.8x | audience 8.8 (word of mouth) | $5,218 | $3,653 | $1,565 |
| 11 | 2,093 | 0.8x | audience 8.8 (word of mouth) | $4,186 | $2,930 | $1,256 |
| 12 | 1,679 | 0.8x | audience 8.8 (word of mouth) | $3,358 | $2,351 | $1,007 |
| 13 | 1,347 | 0.8x | audience 8.8 (word of mouth) | $2,694 | $1,886 | $808 |
| 14 | 1,081 | 0.8x | audience 8.8 (word of mouth) | $2,162 | $1,513 | $649 |
| 15 | 0 | 0x | audience 8.8 (word of mouth) | $0 | $0 | $0 |

Feedback shown: "Case i opens to 21,263 viewers." · "Critics love Case i, but turnout is easing off after the opening." · "Word of mouth on Case i is good, but its audience is winding down."
Consequences: IP fans {"before":0,"after":5752,"delta":5752}; trust: Wolf Pictures earned back 76% of its $75,000 advance on Case i.

### Case i — High critics + high audience, low initial awareness (no marketing, unknown Star) — model: diffusion (candidate)

Inputs: Audience 8.8 / Critic 8.8, reach 0.6, campaign none, Star Fame 0, studio buzz 0. Awareness 0.3 (base 0.35, marketing 0, studioBuzz 0, starFame 0, trend 0, ipFans 0) · reach cap 240,000 · initially aware 70,875.

| Wk | Viewers | vs prev | Driver | Gross | Studio | Distributor |
|---:|---:|---:|---|---:|---:|---:|
| 1 | 21,263 | — | opening (aware people watching) | $42,526 | $29,768 | $12,758 |
| 2 | 21,093 | 0.99x | critic 8.8: +15,424 newly aware (buzz) | $42,186 | $29,530 | $12,656 |
| 3 | 17,133 | 0.81x | critic 8.8: +14,560 newly aware (buzz) | $34,266 | $23,986 | $10,280 |
| 4 | 18,992 | 1.11x | audience 8.8: +26,042 newly aware (word of mouth) | $37,984 | $26,589 | $11,395 |
| 5 | 21,052 | 1.11x | audience 8.8: +28,868 newly aware (word of mouth) | $42,104 | $29,473 | $12,631 |
| 6 | 23,336 | 1.11x | audience 8.8: +31,999 newly aware (word of mouth) | $46,672 | $32,670 | $14,002 |
| 7 | 25,867 | 1.11x | audience 8.8: +35,471 newly aware (word of mouth) | $51,734 | $36,214 | $15,520 |
| 8 | 28,673 | 1.11x | audience 8.8: +39,318 newly aware (word of mouth) | $57,346 | $40,142 | $17,204 |
| 9 | 20,133 | 0.7x | audience 8.8: +10,947 newly aware (word of mouth) | $40,266 | $28,186 | $12,080 |
| 10 | 13,604 | 0.68x | audience 8.8: +6,197 newly aware (word of mouth) | $27,208 | $19,046 | $8,162 |
| 11 | 9,251 | 0.68x | audience 8.8: +4,351 newly aware (word of mouth) | $18,502 | $12,951 | $5,551 |
| 12 | 6,284 | 0.68x | audience 8.8: +2,940 newly aware (word of mouth) | $12,568 | $8,798 | $3,770 |
| 13 | 4,270 | 0.68x | audience 8.8: +2,000 newly aware (word of mouth) | $8,540 | $5,978 | $2,562 |
| 14 | 2,901 | 0.68x | audience 8.8: +1,358 newly aware (word of mouth) | $5,802 | $4,061 | $1,741 |
| 15 | 0 | 0x | audience 8.8: +923 newly aware (word of mouth) | $0 | $0 | $0 |

Feedback shown: "Case i opens to 21,263 viewers." · "Critics love Case i, but turnout is easing off after the opening." · "Fans can't stop talking about Case i. Viewership is climbing!" · "Word of mouth keeps spreading: Case i is still climbing (18,992 → 21,052)."
Consequences: IP fans {"before":0,"after":14218,"delta":14218}; trust: Wolf Pictures earned 187% of its advance back on Case i with strong reviews.

### Case ii — High hype + bad reviews (large campaign, famous Star, studio buzz) — model: geometric (Gate 2)

Inputs: Audience 3 / Critic 3, reach 0.85, campaign large, Star Fame 90, studio buzz 0.3. Awareness 0.88 (base 0.35, marketing 0.95, studioBuzz 0.3, starFame 0.54, trend 0, ipFans 0) · reach cap 340,000 · initially aware 299,997.

| Wk | Viewers | vs prev | Driver | Gross | Studio | Distributor |
|---:|---:|---:|---|---:|---:|---:|
| 1 | 89,999 | — | opening | $179,998 | $125,999 | $53,999 |
| 2 | 49,319 | 0.55x | critic 3 (early buzz) | $98,638 | $69,047 | $29,591 |
| 3 | 27,027 | 0.55x | critic 3 (early buzz) | $54,054 | $37,838 | $16,216 |
| 4 | 14,162 | 0.52x | audience 3 (word of mouth) | $28,324 | $19,827 | $8,497 |
| 5 | 7,421 | 0.52x | audience 3 (word of mouth) | $14,842 | $10,389 | $4,453 |
| 6 | 3,889 | 0.52x | audience 3 (word of mouth) | $7,778 | $5,445 | $2,333 |
| 7 | 2,038 | 0.52x | audience 3 (word of mouth) | $4,076 | $2,853 | $1,223 |
| 8 | 1,068 | 0.52x | audience 3 (word of mouth) | $2,136 | $1,495 | $641 |
| 9 | 560 | 0.52x | audience 3 (word of mouth) | $1,120 | $784 | $336 |
| 10 | 0 | 0x | audience 3 (word of mouth) | $0 | $0 | $0 |

Feedback shown: "Case ii opens to 89,999 viewers." · "Harsh reviews are scaring off audiences for Case ii." · "Word of mouth on Case ii is brutal. Viewers are dropping fast."
Consequences: IP fans {"before":0,"after":0,"delta":0}; trust: Wolf Pictures earned 156% of its advance back on Case ii.

### Case ii — High hype + bad reviews (large campaign, famous Star, studio buzz) — model: diffusion (candidate)

Inputs: Audience 3 / Critic 3, reach 0.85, campaign large, Star Fame 90, studio buzz 0.3. Awareness 0.88 (base 0.35, marketing 0.95, studioBuzz 0.3, starFame 0.54, trend 0, ipFans 0) · reach cap 340,000 · initially aware 299,997.

| Wk | Viewers | vs prev | Driver | Gross | Studio | Distributor |
|---:|---:|---:|---|---:|---:|---:|
| 1 | 89,999 | — | opening (aware people watching) | $179,998 | $125,999 | $53,999 |
| 2 | 41,958 | 0.47x | critic 3: no buzz | $83,916 | $58,741 | $25,175 |
| 3 | 22,665 | 0.54x | critic 3: no buzz | $45,330 | $31,731 | $13,599 |
| 4 | 12,244 | 0.54x | audience 3: no word of mouth | $24,488 | $17,142 | $7,346 |
| 5 | 6,614 | 0.54x | audience 3: no word of mouth | $13,228 | $9,260 | $3,968 |
| 6 | 3,573 | 0.54x | audience 3: no word of mouth | $7,146 | $5,002 | $2,144 |
| 7 | 1,930 | 0.54x | audience 3: no word of mouth | $3,860 | $2,702 | $1,158 |
| 8 | 1,043 | 0.54x | audience 3: no word of mouth | $2,086 | $1,460 | $626 |
| 9 | 563 | 0.54x | audience 3: no word of mouth | $1,126 | $788 | $338 |
| 10 | 0 | 0x | audience 3: no word of mouth | $0 | $0 | $0 |

Feedback shown: "Case ii opens to 89,999 viewers." · "Harsh reviews are scaring off audiences for Case ii." · "Word of mouth on Case ii is brutal. Viewers are dropping fast."
Consequences: IP fans {"before":0,"after":0,"delta":0}; trust: Wolf Pictures earned 144% of its advance back on Case ii.

### Case iii — Critics high / audience low — model: geometric (Gate 2)

Inputs: Audience 4.5 / Critic 8.5, reach 0.6, campaign medium, Star Fame 30, studio buzz 0. Awareness 0.66 (base 0.35, marketing 0.55, studioBuzz 0, starFame 0.18, trend 0, ipFans 0) · reach cap 240,000 · initially aware 158,497.

| Wk | Viewers | vs prev | Driver | Gross | Studio | Distributor |
|---:|---:|---:|---|---:|---:|---:|
| 1 | 47,549 | — | opening | $95,098 | $66,569 | $28,529 |
| 2 | 35,472 | 0.75x | critic 8.5 (early buzz) | $70,944 | $49,661 | $21,283 |
| 3 | 26,462 | 0.75x | critic 8.5 (early buzz) | $52,924 | $37,047 | $15,877 |
| 4 | 15,771 | 0.6x | audience 4.5 (word of mouth) | $31,542 | $22,079 | $9,463 |
| 5 | 9,400 | 0.6x | audience 4.5 (word of mouth) | $18,800 | $13,160 | $5,640 |
| 6 | 5,602 | 0.6x | audience 4.5 (word of mouth) | $11,204 | $7,843 | $3,361 |
| 7 | 3,339 | 0.6x | audience 4.5 (word of mouth) | $6,678 | $4,675 | $2,003 |
| 8 | 1,990 | 0.6x | audience 4.5 (word of mouth) | $3,980 | $2,786 | $1,194 |
| 9 | 1,186 | 0.6x | audience 4.5 (word of mouth) | $2,372 | $1,660 | $712 |
| 10 | 707 | 0.6x | audience 4.5 (word of mouth) | $1,414 | $990 | $424 |
| 11 | 421 | 0.6x | audience 4.5 (word of mouth) | $842 | $589 | $253 |
| 12 | 0 | 0x | audience 4.5 (word of mouth) | $0 | $0 | $0 |

Feedback shown: "Case iii opens to 47,549 viewers." · "Critics love Case iii, but turnout is easing off after the opening."
Consequences: IP fans {"before":0,"after":3550,"delta":3550}; trust: Wolf Pictures earned 118% of its advance back on Case iii.

### Case iii — Critics high / audience low — model: diffusion (candidate)

Inputs: Audience 4.5 / Critic 8.5, reach 0.6, campaign medium, Star Fame 30, studio buzz 0. Awareness 0.66 (base 0.35, marketing 0.55, studioBuzz 0, starFame 0.18, trend 0, ipFans 0) · reach cap 240,000 · initially aware 158,497.

| Wk | Viewers | vs prev | Driver | Gross | Studio | Distributor |
|---:|---:|---:|---|---:|---:|---:|
| 1 | 47,549 | — | opening (aware people watching) | $95,098 | $66,569 | $28,529 |
| 2 | 36,829 | 0.77x | critic 8.5: +6,846 newly aware (buzz) | $73,658 | $51,561 | $22,097 |
| 3 | 23,590 | 0.64x | critic 8.5: +7,390 newly aware (buzz) | $47,180 | $33,026 | $14,154 |
| 4 | 10,710 | 0.45x | audience 4.5: no word of mouth | $21,420 | $14,994 | $6,426 |
| 5 | 6,403 | 0.6x | audience 4.5: no word of mouth | $12,806 | $8,964 | $3,842 |
| 6 | 3,828 | 0.6x | audience 4.5: no word of mouth | $7,656 | $5,359 | $2,297 |
| 7 | 2,289 | 0.6x | audience 4.5: no word of mouth | $4,578 | $3,205 | $1,373 |
| 8 | 1,368 | 0.6x | audience 4.5: no word of mouth | $2,736 | $1,915 | $821 |
| 9 | 818 | 0.6x | audience 4.5: no word of mouth | $1,636 | $1,145 | $491 |
| 10 | 489 | 0.6x | audience 4.5: no word of mouth | $978 | $685 | $293 |
| 11 | 0 | 0x | audience 4.5: no word of mouth | $0 | $0 | $0 |

Feedback shown: "Case iii opens to 47,549 viewers." · "Critics love Case iii, but turnout is easing off after the opening."
Consequences: IP fans {"before":0,"after":3213,"delta":3213}; trust: Wolf Pictures earned 107% of its advance back on Case iii.

### Case iv — Critics low / audience high — model: geometric (Gate 2)

Inputs: Audience 8.5 / Critic 4.5, reach 0.6, campaign medium, Star Fame 30, studio buzz 0. Awareness 0.66 (base 0.35, marketing 0.55, studioBuzz 0, starFame 0.18, trend 0, ipFans 0) · reach cap 240,000 · initially aware 158,497.

| Wk | Viewers | vs prev | Driver | Gross | Studio | Distributor |
|---:|---:|---:|---|---:|---:|---:|
| 1 | 47,549 | — | opening | $95,098 | $66,569 | $28,529 |
| 2 | 28,624 | 0.6x | critic 4.5 (early buzz) | $57,248 | $40,074 | $17,174 |
| 3 | 17,232 | 0.6x | critic 4.5 (early buzz) | $34,464 | $24,125 | $10,339 |
| 4 | 13,579 | 0.79x | audience 8.5 (word of mouth) | $27,158 | $19,011 | $8,147 |
| 5 | 10,700 | 0.79x | audience 8.5 (word of mouth) | $21,400 | $14,980 | $6,420 |
| 6 | 8,432 | 0.79x | audience 8.5 (word of mouth) | $16,864 | $11,805 | $5,059 |
| 7 | 6,644 | 0.79x | audience 8.5 (word of mouth) | $13,288 | $9,302 | $3,986 |
| 8 | 5,235 | 0.79x | audience 8.5 (word of mouth) | $10,470 | $7,329 | $3,141 |
| 9 | 4,125 | 0.79x | audience 8.5 (word of mouth) | $8,250 | $5,775 | $2,475 |
| 10 | 3,251 | 0.79x | audience 8.5 (word of mouth) | $6,502 | $4,551 | $1,951 |
| 11 | 2,562 | 0.79x | audience 8.5 (word of mouth) | $5,124 | $3,587 | $1,537 |
| 12 | 2,019 | 0.79x | audience 8.5 (word of mouth) | $4,038 | $2,827 | $1,211 |
| 13 | 1,591 | 0.79x | audience 8.5 (word of mouth) | $3,182 | $2,227 | $955 |
| 14 | 1,254 | 0.79x | audience 8.5 (word of mouth) | $2,508 | $1,756 | $752 |
| 15 | 0 | 0x | audience 8.5 (word of mouth) | $0 | $0 | $0 |

Feedback shown: "Case iv opens to 47,549 viewers." · "Word of mouth on Case iv is good, but its audience is winding down."
Consequences: IP fans {"before":0,"after":3667,"delta":3667}; trust: Wolf Pictures earned 122% of its advance back on Case iv.

### Case iv — Critics low / audience high — model: diffusion (candidate)

Inputs: Audience 8.5 / Critic 4.5, reach 0.6, campaign medium, Star Fame 30, studio buzz 0. Awareness 0.66 (base 0.35, marketing 0.55, studioBuzz 0, starFame 0.18, trend 0, ipFans 0) · reach cap 240,000 · initially aware 158,497.

| Wk | Viewers | vs prev | Driver | Gross | Studio | Distributor |
|---:|---:|---:|---|---:|---:|---:|
| 1 | 47,549 | — | opening (aware people watching) | $95,098 | $66,569 | $28,529 |
| 2 | 27,422 | 0.58x | critic 4.5: no buzz | $54,844 | $38,391 | $16,453 |
| 3 | 16,394 | 0.6x | critic 4.5: no buzz | $32,788 | $22,952 | $9,836 |
| 4 | 20,391 | 1.24x | audience 8.5: +22,952 newly aware (word of mouth) | $40,782 | $28,547 | $12,235 |
| 5 | 21,682 | 1.06x | audience 8.5: +28,547 newly aware (word of mouth) | $43,364 | $30,355 | $13,009 |
| 6 | 23,054 | 1.06x | audience 8.5: +30,355 newly aware (word of mouth) | $46,108 | $32,276 | $13,832 |
| 7 | 24,514 | 1.06x | audience 8.5: +32,276 newly aware (word of mouth) | $49,028 | $34,320 | $14,708 |
| 8 | 18,891 | 0.77x | audience 8.5: +13,966 newly aware (word of mouth) | $37,782 | $26,447 | $11,335 |
| 9 | 12,669 | 0.67x | audience 8.5: +5,403 newly aware (word of mouth) | $25,338 | $17,737 | $7,601 |
| 10 | 8,686 | 0.69x | audience 8.5: +4,164 newly aware (word of mouth) | $17,372 | $12,160 | $5,212 |
| 11 | 5,934 | 0.68x | audience 8.5: +2,792 newly aware (word of mouth) | $11,868 | $8,308 | $3,560 |
| 12 | 4,056 | 0.68x | audience 8.5: +1,915 newly aware (word of mouth) | $8,112 | $5,678 | $2,434 |
| 13 | 2,772 | 0.68x | audience 8.5: +1,308 newly aware (word of mouth) | $5,544 | $3,881 | $1,663 |
| 14 | 1,895 | 0.68x | audience 8.5: +894 newly aware (word of mouth) | $3,790 | $2,653 | $1,137 |
| 15 | 0 | 0x | audience 8.5: +611 newly aware (word of mouth) | $0 | $0 | $0 |

Feedback shown: "Case iv opens to 47,549 viewers." · "Fans can't stop talking about Case iv. Viewership is climbing!" · "Word of mouth keeps spreading: Case iv is still climbing (20,391 → 21,682)."
Consequences: IP fans {"before":0,"after":5662,"delta":5662}; trust: Wolf Pictures earned 189% of its advance back on Case iv.

### Case v — Excellent movie, tiny distribution reach — model: geometric (Gate 2)

Inputs: Audience 9 / Critic 9, reach 0.1, campaign medium, Star Fame 30, studio buzz 0. Awareness 0.66 (base 0.35, marketing 0.55, studioBuzz 0, starFame 0.18, trend 0, ipFans 0) · reach cap 40,000 · initially aware 26,416.

| Wk | Viewers | vs prev | Driver | Gross | Studio | Distributor |
|---:|---:|---:|---|---:|---:|---:|
| 1 | 7,925 | — | opening | $15,850 | $11,095 | $4,755 |
| 2 | 6,055 | 0.76x | critic 9 (early buzz) | $12,110 | $8,477 | $3,633 |
| 3 | 4,626 | 0.76x | critic 9 (early buzz) | $9,252 | $6,476 | $2,776 |
| 4 | 3,756 | 0.81x | audience 9 (word of mouth) | $7,512 | $5,258 | $2,254 |
| 5 | 3,050 | 0.81x | audience 9 (word of mouth) | $6,100 | $4,270 | $1,830 |
| 6 | 2,477 | 0.81x | audience 9 (word of mouth) | $4,954 | $3,468 | $1,486 |
| 7 | 2,011 | 0.81x | audience 9 (word of mouth) | $4,022 | $2,815 | $1,207 |
| 8 | 1,633 | 0.81x | audience 9 (word of mouth) | $3,266 | $2,286 | $980 |
| 9 | 1,326 | 0.81x | audience 9 (word of mouth) | $2,652 | $1,856 | $796 |
| 10 | 1,077 | 0.81x | audience 9 (word of mouth) | $2,154 | $1,508 | $646 |
| 11 | 875 | 0.81x | audience 9 (word of mouth) | $1,750 | $1,225 | $525 |
| 12 | 711 | 0.81x | audience 9 (word of mouth) | $1,422 | $995 | $427 |
| 13 | 577 | 0.81x | audience 9 (word of mouth) | $1,154 | $808 | $346 |
| 14 | 469 | 0.81x | audience 9 (word of mouth) | $938 | $657 | $281 |
| 15 | 0 | 0x | audience 9 (word of mouth) | $0 | $0 | $0 |

Feedback shown: "Case v opens to 7,925 viewers." · "Critics love Case v, but turnout is easing off after the opening." · "Word of mouth on Case v is good, but its audience is winding down."
Consequences: IP fans {"before":0,"after":2340,"delta":2340}; trust: Wolf Pictures earned back 29% of its $75,000 advance on Case v.

### Case v — Excellent movie, tiny distribution reach — model: diffusion (candidate)

Inputs: Audience 9 / Critic 9, reach 0.1, campaign medium, Star Fame 30, studio buzz 0. Awareness 0.66 (base 0.35, marketing 0.55, studioBuzz 0, starFame 0.18, trend 0, ipFans 0) · reach cap 40,000 · initially aware 26,416.

| Wk | Viewers | vs prev | Driver | Gross | Studio | Distributor |
|---:|---:|---:|---|---:|---:|---:|
| 1 | 7,925 | — | opening (aware people watching) | $15,850 | $11,095 | $4,755 |
| 2 | 6,327 | 0.8x | critic 9: +1,304 newly aware (buzz) | $12,654 | $8,858 | $3,796 |
| 3 | 4,065 | 0.64x | critic 9: +1,392 newly aware (buzz) | $8,130 | $5,691 | $2,439 |
| 4 | 4,631 | 1.14x | audience 9: +6,504 newly aware (word of mouth) | $9,262 | $6,483 | $2,779 |
| 5 | 5,275 | 1.14x | audience 9: +7,410 newly aware (word of mouth) | $10,550 | $7,385 | $3,165 |
| 6 | 3,835 | 0.73x | audience 9: +2,398 newly aware (word of mouth) | $7,670 | $5,369 | $2,301 |
| 7 | 2,565 | 0.67x | audience 9: +1,125 newly aware (word of mouth) | $5,130 | $3,591 | $1,539 |
| 8 | 1,739 | 0.68x | audience 9: +818 newly aware (word of mouth) | $3,478 | $2,435 | $1,043 |
| 9 | 1,176 | 0.68x | audience 9: +547 newly aware (word of mouth) | $2,352 | $1,646 | $706 |
| 10 | 796 | 0.68x | audience 9: +371 newly aware (word of mouth) | $1,592 | $1,114 | $478 |
| 11 | 539 | 0.68x | audience 9: +251 newly aware (word of mouth) | $1,078 | $755 | $323 |
| 12 | 0 | 0x | audience 9: +170 newly aware (word of mouth) | $0 | $0 | $0 |

Feedback shown: "Case v opens to 7,925 viewers." · "Critics love Case v, but turnout is easing off after the opening." · "Fans can't stop talking about Case v. Viewership is climbing!" · "Word of mouth keeps spreading: Case v is still climbing (4,631 → 5,275)."
Consequences: IP fans {"before":0,"after":2488,"delta":2488}; trust: Wolf Pictures earned back 31% of its $75,000 advance on Case v.
