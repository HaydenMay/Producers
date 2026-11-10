#!/usr/bin/env python3
"""Build the Gate 2.6 designer decision table from reports/gate2_6/p*/G26_expectations.json.

Usage: python3 -I scripts/g26_decision_table.py [reports/gate2_6] [G26_expectations]  -> prints Markdown tables.
       python3 -I scripts/g26_decision_table.py reports/gate2_6/followup G26_followup
Reads only harness output; no simulation is rerun here.
"""
import json
import os
import statistics
import sys

root = sys.argv[1] if len(sys.argv) > 1 else "reports/gate2_6"
name = sys.argv[2] if len(sys.argv) > 2 else "G26_expectations"
QUALITY = ["balanced", "quality-first", "experimenter"]


def load(p):
    f = os.path.join(root, f"p{p}", f"{name}.json")
    return json.load(open(f)) if os.path.exists(f) else None


def row(run, strategy, slice_):
    for g in run["great"]:
        if g["strategy"] == strategy and g["slice"] == slice_:
            return g
    return None


def pooled(run, strategies, slice_):
    rows = [row(run, s, slice_) for s in strategies]
    rows = [r for r in rows if r and r["films"]]
    n = sum(r["films"] for r in rows)
    if not n:
        return None
    k = lambda key: sum(r[key]["n"] for r in rows)
    return {
        "films": n,
        "avg": sum((r["avgAudience"] + r["avgCritic"]) / 2 * r["films"] for r in rows) / n,
        "hof": 100 * k("hof") / n,
        "avg9": 100 * k("avg9inc") / n,
        "avg9s": 100 * k("avg9strict") / n,
        "aud9": 100 * k("aud9") / n,
        "crit9": 100 * k("crit9") / n,
        "best50": statistics.median([r["bestPerCareer"]["p50"] for r in rows if r["bestPerCareer"]]),
        "best90": statistics.median([r["bestPerCareer"]["p90"] for r in rows if r["bestPerCareer"]]),
        "hofCareer": statistics.median([r["hofPerCareer"]["p50"] for r in rows if r["hofPerCareer"]]),
        "zero": statistics.mean([r["zeroHofCareers"]["pct"] for r in rows]),
    }


def prestige(run, s):
    return run["summary"].get(s, {}).get("prestige", {}).get("median")


def progress(run, s):
    for p in run["progress"]:
        if p["strategy"] == s:
            return p
    return None


def fmt(x, d=1):
    return "—" if x is None else f"{x:.{d}f}"


data = {p: load(p) for p in (5, 20, 50, 100)}
variants = [v["name"] for v in (data[50] or data[20])["spec"]["variants"]]

print("### Quality strategies pooled (balanced + quality-first + experimenter)\n")
print("| Variant | films 1-5 avg | 6-20 avg | 50-film avg | 50-film HoF % | 50-film avg ≥9 % | 50-film Aud ≥9 % | 50-film Crit ≥9 % | 100-film avg | 100-film HoF % | films 51-100 HoF % | HoF / career (100 films) p50 | best/career p50 · p90 (100 films) | Prestige median balanced (50 / 100) |")
print("|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---|---|")
for v in variants:
    cells = []
    get = lambda P: next((r for r in data[P]["runs"] if r["variant"] == v), None) if data[P] else None
    r20, r50, r100 = get(20), get(50), get(100)
    w15 = pooled(r20, QUALITY, "1-5") if r20 else None
    w620 = pooled(r20, QUALITY, "6-20") if r20 else None
    a50 = pooled(r50, QUALITY, "all") if r50 else None
    a100 = pooled(r100, QUALITY, "all") if r100 else None
    l100 = pooled(r100, QUALITY, "51-100") if r100 else None
    print(
        f"| {v} | {fmt(w15 and w15['avg'], 2)} | {fmt(w620 and w620['avg'], 2)} | {fmt(a50 and a50['avg'], 2)} | {fmt(a50 and a50['hof'])} | {fmt(a50 and a50['avg9'])} | {fmt(a50 and a50['aud9'])} | {fmt(a50 and a50['crit9'])} | {fmt(a100 and a100['avg'], 2)} | {fmt(a100 and a100['hof'])} | {fmt(l100 and l100['hof'])} | {fmt(a100 and a100['hofCareer'], 0)} | {fmt(a100 and a100['best50'], 2)} · {fmt(a100 and a100['best90'], 2)} | {prestige(r50, 'balanced') if r50 else '—'} / {prestige(r100, 'balanced') if r100 else '—'} |"
    )

print("\n### Prestige gates (50 films): share of careers buying →6 / →8, median film # at purchase, and share ever cash-rich but Prestige-locked\n")
strats = ["balanced", "quality-first", "experimenter", "franchise-builder", "repeat-farmer", "cheap-duds"]
print("| Variant | " + " | ".join(strats) + " |")
print("|---|" + "---|" * len(strats))
for v in variants:
    r50 = next((r for r in data[50]["runs"] if r["variant"] == v), None) if data[50] else None
    if not r50:
        continue
    cells = []
    for s in strats:
        p = progress(r50, s)
        if not p:
            cells.append("—")
            continue
        st = p["steps"]
        c = p["careers"]
        cells.append(" / ".join(f"{100*x['bought']/c:.0f}% #{x['medianBuyRelease'] if x['medianBuyRelease'] is not None else '—'}" for x in st) + f" · locked {100*st[0]['cashRichLockedCareers']/c:.0f}%")
    print(f"| {v} | " + " | ".join(cells) + " |")
