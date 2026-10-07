#!/usr/bin/env python3
"""Downscale raw captures to jpgs and build contact sheets for review."""
import json, os, subprocess, glob

ROOT = os.path.dirname(os.path.abspath(__file__))
RAW = os.path.join(ROOT, "raw")
OUT = os.path.join(os.path.dirname(ROOT), "images", "examples")
SHEETS = os.path.join(ROOT, "sheets")
os.makedirs(OUT, exist_ok=True)
os.makedirs(SHEETS, exist_ok=True)

report = json.load(open(os.path.join(ROOT, "capture-report.json")))
shot = [r for r in report if r.get("shot")]
ids = sorted(r["id"] for r in shot)

# 1. downscale to 720x450 jpg
for i in ids:
    src = os.path.join(RAW, i + ".png")
    dst = os.path.join(OUT, i + ".jpg")
    subprocess.run(["ffmpeg", "-y", "-loglevel", "error", "-i", src,
                    "-vf", "scale=720:450", "-q:v", "6", dst], check=True)

total = sum(os.path.getsize(os.path.join(OUT, i + ".jpg")) for i in ids)
print(f"{len(ids)} jpgs, {total/1e6:.2f} MB total, avg {total/len(ids)/1024:.0f} KB")

# 2. contact sheets, 3x3, with a printed index
groups = [ids[n:n + 9] for n in range(0, len(ids), 9)]
for gi, g in enumerate(groups):
    args = ["ffmpeg", "-y", "-loglevel", "error"]
    for i in g:
        args += ["-i", os.path.join(RAW, i + ".png")]
    fc = ";".join(
        f"[{n}:v]scale=480:300,drawtext=text='{g[n]}':x=8:y=8:fontsize=17:fontcolor=yellow:box=1:boxcolor=black@0.65[l{n}]"
        for n in range(len(g)))
    rows = []
    for r in range(0, len(g), 3):
        chunk = list(range(r, min(r + 3, len(g))))
        if len(chunk) == 1:
            rows.append(f"[l{chunk[0]}]")
            continue
        fc += ";" + "".join(f"[l{n}]" for n in chunk) + f"hstack=inputs={len(chunk)}[r{r}]"
        rows.append(f"[r{r}]")
    if len(rows) > 1:
        fc += ";" + "".join(rows) + f"vstack=inputs={len(rows)}[out]"
        label = "[out]"
    else:
        label = rows[0]
    args += ["-filter_complex", fc, "-map", label, "-frames:v", "1", os.path.join(SHEETS, f"sheet-{gi+1}.png")]
    r = subprocess.run(args)
    print(f"sheet-{gi+1}: {g} -> {'ok' if r.returncode == 0 else 'FAILED'}")
