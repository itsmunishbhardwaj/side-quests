"""
Weekly plan PNG renderer for the Daily 3 Gem.

Used by Gemini's code execution when Munish asks for a PNG of the weekly plan.
Style approximates the Claude design system (cream background, orange accent,
serif/sans pairing). Fonts: free fallbacks for Styrene/Tiempos (which are
commercial-licensed).

Gemini: copy this script into a code-execution cell, replace `WEEK_DATA` with
the actual week, and run. Output: `weekly-plan.png` in the working dir, which
gets surfaced in chat.

Required: matplotlib (preinstalled in Gemini code execution).
"""

import matplotlib.pyplot as plt
import matplotlib.patches as patches
from matplotlib import font_manager

# ---------------------------------------------------------------------------
# Claude-inspired palette (publicly observed; not licensed brand assets)
# ---------------------------------------------------------------------------
CREAM = "#F5F4EE"        # background
ORANGE = "#D97757"       # accent
DARK = "#1F1E1D"         # primary text
MUTED = "#8C8A85"        # secondary text
HAIRLINE = "#E5E2D9"     # subtle borders
CARD_BG = "#FBFAF5"      # day-card background, slightly lighter than CREAM

# Tag dots — muted earth tones so they read as part of the palette
TAG_COLORS = {
    "compounding": "#7B8B6F",   # sage
    "maintenance": "#5B7BA0",   # dusty blue
    "urgent":      "#B85C3C",   # rust (close to orange but darker)
    "office":      "#A8A29E",   # stone
    "cert":        ORANGE,      # Claude cert blocks use accent
    "lecture":     DARK,        # 100x lecture blocks
}

# ---------------------------------------------------------------------------
# Font selection — try Claude-adjacent free fonts, fall back gracefully
# ---------------------------------------------------------------------------
SERIF_CANDIDATES = ["EB Garamond", "Source Serif Pro", "Source Serif 4", "Georgia", "serif"]
SANS_CANDIDATES = ["Inter", "IBM Plex Sans", "Helvetica Neue", "Helvetica", "sans-serif"]


def pick_font(candidates):
    for name in candidates:
        try:
            path = font_manager.findfont(name, fallback_to_default=False)
            if path:
                return name
        except Exception:
            continue
    return candidates[-1]


SERIF = pick_font(SERIF_CANDIDATES)
SANS = pick_font(SANS_CANDIDATES)

# ---------------------------------------------------------------------------
# Input shape — Gemini replaces WEEK_DATA before running
# ---------------------------------------------------------------------------
# Each item: {
#   "day":     "Mon 22 Jun",
#   "label":   "meetings: 4h · heavy evening (US team)",   # subtitle line
#   "bullets": [("Bullet text here", "compounding"), ...]   # tag from TAG_COLORS
# }
# Use 7 entries (Mon..Sun). 0-3 bullets per day. Mark light days in label.

WEEK_DATA = [
    {"day": "Mon 22 Jun", "label": "meetings: 4h · heavy evening (US team)",
     "bullets": [("Replace this with bullet 1", "compounding")]},
    {"day": "Tue 23 Jun", "label": "meetings: 2h · free: 5h",
     "bullets": [("Bullet 1", "compounding"), ("Bullet 2", "compounding"), ("Bullet 3", "maintenance")]},
    {"day": "Wed 24 Jun", "label": "meetings: 3h · free: 4h",
     "bullets": [("Bullet 1", "compounding"), ("Bullet 2", "urgent")]},
    {"day": "Thu 25 Jun", "label": "meetings: 2h · free: 5h",
     "bullets": [("Bullet 1", "compounding"), ("Bullet 2", "compounding"), ("Bullet 3", "maintenance")]},
    {"day": "Fri 26 Jun", "label": "meetings: 3h · 100x lecture 6 PM",
     "bullets": [("Bullet 1", "compounding"), ("Bullet 2", "maintenance")]},
    {"day": "Sat 27 Jun", "label": "weekend · Claude cert 10–12 · 100x lecture 6 PM",
     "bullets": [("Claude cert: module name", "cert"), ("Bullet 2", "compounding"), ("Bullet 3", "maintenance")]},
    {"day": "Sun 28 Jun", "label": "weekend · Claude cert 10–12",
     "bullets": [("Claude cert: module name", "cert"), ("Buffer / rest", "maintenance")]},
]

WEEK_TITLE = "Week of Mon 22 Jun – Sun 28 Jun"
WEEK_SHAPE = "Shipping the Figma rebuild, holding cert pace, light Mon."

# ---------------------------------------------------------------------------
# Render
# ---------------------------------------------------------------------------
fig = plt.figure(figsize=(8.5, 12), dpi=200)
fig.patch.set_facecolor(CREAM)

# Title block
fig.text(0.5, 0.965, "daily 3", fontfamily=SANS, fontsize=10,
         color=ORANGE, ha="center", weight="bold", alpha=0.9)
fig.text(0.5, 0.94, WEEK_TITLE, fontfamily=SERIF, fontsize=20,
         color=DARK, ha="center", weight=600)

# Hairline divider under title
fig.add_artist(plt.Line2D([0.10, 0.90], [0.918, 0.918],
                          color=HAIRLINE, linewidth=1, transform=fig.transFigure))

# Day cards — layout vertically
TOP = 0.895
CARD_H = 0.107
GAP = 0.005

for i, day in enumerate(WEEK_DATA):
    y_top = TOP - i * (CARD_H + GAP)
    y_bot = y_top - CARD_H

    # Card background
    card = patches.FancyBboxPatch(
        (0.07, y_bot), 0.86, CARD_H,
        boxstyle="round,pad=0.004,rounding_size=0.012",
        linewidth=0.8, edgecolor=HAIRLINE, facecolor=CARD_BG,
        transform=fig.transFigure,
    )
    fig.patches.append(card)

    # Day name (serif, bold)
    fig.text(0.095, y_top - 0.022, day["day"],
             fontfamily=SERIF, fontsize=13, weight="bold", color=DARK)

    # Subtitle / meetings label (sans, muted)
    fig.text(0.095, y_top - 0.040, day["label"],
             fontfamily=SANS, fontsize=8.5, color=MUTED)

    # Bullets
    for j, (text, tag) in enumerate(day["bullets"]):
        by = y_top - 0.062 - j * 0.020
        color = TAG_COLORS.get(tag, DARK)
        # tag dot
        fig.text(0.30, by, "●", fontfamily=SANS, fontsize=8,
                 color=color, va="center")
        # bullet text
        fig.text(0.325, by, text, fontfamily=SANS, fontsize=9.5,
                 color=DARK, va="center")

# Footer — week shape
fig.text(0.5, 0.045, WEEK_SHAPE,
         fontfamily=SERIF, fontsize=10, color=MUTED,
         ha="center", style="italic")

# Tag legend
legend_y = 0.022
fig.text(0.5, legend_y, "● compounding   ● maintenance   ● urgent   ● Claude cert",
         fontfamily=SANS, fontsize=7.5, color=MUTED, ha="center")

plt.savefig("weekly-plan.png", facecolor=CREAM, bbox_inches="tight", dpi=200, pad_inches=0.3)
print("Saved: weekly-plan.png")
