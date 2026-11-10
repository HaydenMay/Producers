# Trace 5a — a struggling 8-person studio cuts staff and recovers

Variant **A_control** · strategy **renewal-franchise** · seed **83** · 25-year career · config hash-free reproduction: `npx tsx scripts/fu-traces.ts A_control renewal-franchise 83 firing`

Invariant violations in this career: 0. Nothing below was scripted: the seed, the policy and the config produce it.

## Staffing and money timeline

| Week | Yr | Cash | Staff | Event |
|---|---|---|---|---|
| 48 | 0.9 | $214,557 |  | Hired Lee Quinn (plot 34, writing 16, filming 18, editing 27). |
| 48 | 0.9 | $214,557 |  | Hired Sam Novak (plot 16, writing 24, filming 23, editing 18). |
| 128 | 2.5 | $957,006 |  | Studio upgraded: employee capacity 4 → 6 (cost $250,000). |
| 128 | 2.5 | $957,006 |  | Hired Sam Moreau (plot 28, writing 33, filming 31, editing 25). |
| 128 | 2.5 | $957,006 |  | Hired Noa Lowe (plot 29, writing 19, filming 26, editing 29). |
| 270 | 5.2 | $686,110 |  | Studio upgraded: employee capacity 6 → 8 (cost $750,000). |
| 270 | 5.2 | $686,110 |  | Hired Max Imai (plot 17, writing 23, filming 20, editing 22). |
| 270 | 5.2 | $686,110 |  | Hired Sam Lowe (plot 34, writing 19, filming 23, editing 17). |
| 824 | 15.8 | −$156,635 | (7/8) | Dismissed Sam Moreau: payroll −$1,100/week; a staff slot is free (7/8). |
| 860 | 16.5 | −$215,999 | (6/8) | Dismissed Lee Quinn: payroll −$1,100/week; a staff slot is free (6/8). |
| 896 | 17.2 | −$240,678 | (5/8) | Dismissed Sam: payroll −$900/week; a staff slot is free (5/8). |
| 932 | 17.9 | −$253,530 | (4/8) | Dismissed Max Imai: payroll −$1,100/week; a staff slot is free (4/8). |
| 968 | 18.6 | −$213,336 | (3/8) | Dismissed Alex: payroll −$900/week; a staff slot is free (3/8). |
| 1004 | 19.3 | −$166,127 | (2/8) | Dismissed Sam Novak: payroll −$1,100/week; a staff slot is free (2/8). |
| 1112 | 21.4 | $598,763 |  | Hired Ari Fox (plot 16, writing 22, filming 19, editing 24). |
| 1112 | 21.4 | $598,763 |  | Hired Max Novak (plot 26, writing 18, filming 16, editing 34). |
| 1148 | 22.1 | $865,784 |  | Hired Kit Diaz (plot 15, writing 19, filming 31, editing 16). |
| 1148 | 22.1 | $865,784 |  | Hired Jay Imai (plot 25, writing 23, filming 27, editing 16). |
| 1184 | 22.8 | $1,203,812 |  | Hired Rae Imai (plot 22, writing 27, filming 26, editing 34). |
| 1184 | 22.8 | $1,203,812 |  | Hired Ivy Novak (plot 22, writing 17, filming 33, editing 35). |

### Cash at each year end

| Year | Cash | Payroll/wk | Releases that year |
|---|---|---|---|
| 1 | $378,914 | $4,000 | 3 |
| 2 | $970,683 | $4,000 | 3 |
| 3 | $1,336,487 | $6,200 | 3 |
| 4 | $1,314,228 | $6,200 | 3 |
| 5 | $1,532,707 | $6,200 | 2 |
| 6 | $836,424 | $8,400 | 2 |
| 7 | $802,663 | $8,400 | 2 |
| 8 | $878,575 | $8,400 | 2 |
| 9 | $763,174 | $8,400 | 2 |
| 10 | $643,439 | $8,400 | 2 |
| 11 | $570,783 | $8,400 | 2 |
| 12 | $401,969 | $8,400 | 2 |
| 13 | $170,024 | $8,400 | 1 |
| 14 | $213,304 | $8,400 | 2 |
| 15 | −$22,851 | $8,400 | 1 |
| 16 | −$65,430 | $7,300 | 2 |
| 17 | −$157,833 | $6,200 | 1 |
| 18 | −$208,863 | $4,200 | 2 |
| 19 | −$119,216 | $3,300 | 1 |
| 20 | −$100,602 | $2,200 | 1 |
| 21 | $650,663 | $2,200 | 2 |
| 22 | $945,784 | $4,400 | 1 |
| 23 | $1,558,339 | $8,800 | 2 |
| 24 | $2,047,337 | $8,800 | 1 |
| 25 | $2,626,536 | $8,800 | 2 |

Dismissed staff: Sam Moreau (week 824, $1100/wk), Lee Quinn (week 860, $1100/wk), Sam (week 896, $900/wk), Max Imai (week 932, $1100/wk), Alex (week 968, $900/wk), Sam Novak (week 1004, $1100/wk).
