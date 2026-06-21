# Daily 3 — Priority List Skill (Gemini Gem)

## Goal

A phone-first prioritizer that turns a weekly task dump (photo / screenshot / PDF / Apple Notes / SMS / voice) into 3 daily priorities biased toward Munish's growth needle. Each task is broken into 3–5 achievable sub-steps designed to produce frequent dopamine hits from completion. The skill gets smarter about Munish over time via a `learnings.md` file it updates weekly.

## Why Gemini, not Claude

- Free for Munish for the next 2 years (vs. $20–200/mo for Claude).
- Daily-prioritizer judgment is well within Gemini 2.5 Pro's capability ceiling.
- Native Google Drive integration is tighter than Claude's connector flow — the bucket file lives one tap away.
- Gemini's "Gem" = Claude's "Project": custom system prompt + knowledge files. Mobile app supports them.
- Artifacts are portable markdown — zero lock-in. If Gemini falls short, paste into a Claude Project in 30 sec.

## Architecture

**One Gem** (`Daily 3`) + **one Google Drive folder** (`/Daily 3/`) containing three files Gemini reads and writes:

| File | Purpose | Writer |
|---|---|---|
| `bucket.md` | All open tasks, tagged `compounding` / `maintenance` / `urgent` / `office` | Gemini, every interaction |
| `completed-log.md` | Timestamped completion history (task + sub-step level) | Gemini, on each tick |
| `learnings.md` | Patterns Gemini observes about Munish (time-of-day, tag-completion rates, avoidance, etc.) | Gemini, weekly review |

## Prioritization algorithm

Daily 3 = **2 needle-movers + 1 urgent**.

1. **Filter office/cohort tasks out** of daily slots by default. Office work surfaces only as a heads-up line when deadline is <48 h.
2. **Tag everything** in the bucket: `compounding` / `maintenance` / `urgent` / `office`.
3. **Pick 2 compounding** by Pareto leverage. First 3 weeks (cold start, `learnings.md` empty): prefer tasks that (a) unblock other tasks, (b) ship something user-visible, (c) produce a public artifact. After 3 weeks: use observed patterns from `learnings.md` to rank.
4. **Pick 1 urgent** (or 1 office if cohort deadline <48 h).
5. **Tag one task "Deep Work"** (90–120 min, single-focus, default scheduled before 11 AM per Newport + learning patterns).

## Sub-step structure

Each of the 3 tasks gets **3–5 sub-steps**, each **15–45 min**.

- **Implementation intentions** (Gollwitzer 1999, d=0.65): "When I open Figma, I will duplicate the dashboard frame."
- **Outcome-framed completion states** (Locke & Latham): "Draft sent to X," not "write draft."
- **First sub-step = smallest sub-step of the hardest task** (Zeigarnik primer — gets the frog *started*, not finished cold).
- **No admin/email as a sub-step.** Every sub-step ladders to a needle-mover.

## Daily flow modes

Gemini detects which mode from what Munish says:

| Trigger | Mode | Action |
|---|---|---|
| Photo dump + "build my bucket" | **Build bucket** | OCR/transcribe, tag, merge into `bucket.md` (de-dupe) |
| "Today's 3" / morning ping | **Prioritize** | Read `learnings.md`, then `bucket.md`. Pick 3. Output in template format. |
| "Done X" / "sub-step Y finished" | **Tick** | Update `completed-log.md`, push next sub-step |
| "Evening wrap" | **Wrap** | Summarize, move slipped tasks back to bucket, one-sentence affirmation |
| "Weekly review" (Sun default) | **Learn** | Re-read `completed-log.md`, update `learnings.md`, propose silent demotions (Buffett 25/5) |

## Growth needle (Munish-specific)

**IN:** personal side-quests, shipping side-projects to paying customers, learning that compounds (AI tooling, Python, React/Next.js, agent design).

**OUT:** office work, cohort assignments. Auto-tagged `office`, invisible to daily 3 unless deadline <48 h.

This definition lives in the system prompt. It will evolve via `learnings.md` over time.

## Deliverables (in this repo)

```
priority-list/
├── CLAUDE.md
├── .claude/tasks/priority-list-skill.md   ← this spec
├── gemini-gem/
│   ├── system-prompt.md   ← paste into Gem custom instructions
│   ├── framework.md       ← upload as Gem knowledge file
│   └── setup.md           ← step-by-step Gem creation
└── drive-templates/
    ├── bucket.md
    ├── completed-log.md
    └── learnings.md
```

## Research backing (one-liners)

- **3 priorities/day**: Cowan (2001) working-memory ~4; Bailey *Rule of 3*; Kahneman planning-fallacy absorption.
- **2 needle + 1 urgent**: Keller *ONE Thing* + Eisenhower; prevents "growth-only list collapses on contact with reality."
- **3–5 sub-steps, 15–45 min**: GTD next-actions + Sweller cognitive load.
- **Implementation intentions**: Gollwitzer & Sheeran (2006), d=0.65 across 94 studies.
- **Zeigarnik primer**: opening with smallest sub-step of hardest task — Masicampo & Baumeister (2011) on plan-making discharging intrusive thoughts.
- **Progress principle**: Amabile & Kramer (2011) — visible sub-step completions are the single strongest predictor of positive inner work life.
- **Pareto + Buffett 25/5**: silent demote, never delete (psychological).
- **Outcome framing**: Locke & Latham 35-year goal-setting body.
- **Variable reward cadence**: 9–15 completion events/day (~one every 30–45 min) matches Schultz dopamine prediction-error work without habituation.

## Open / future

- After ~3 weeks, audit `learnings.md` — if patterns look weak/wrong, tighten the weekly review prompt.
- If Gem prompt limit is too tight for the system prompt, move tag taxonomy + worked examples into `framework.md` (already split).
- Consider adding a calendar integration later (block deep-work slot automatically) — out of scope for v1.
