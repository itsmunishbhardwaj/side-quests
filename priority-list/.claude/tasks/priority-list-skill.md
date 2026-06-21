# Needle — Priority List Skill (Claude Project)

## Goal

A phone-first prioritizer that turns a weekly task dump (photo / screenshot / PDF / Apple Notes / SMS / voice) into 3 daily priorities biased toward Munish's growth needle. Each task is broken into 3–5 achievable sub-steps designed to produce frequent dopamine hits from completion. The skill gets smarter about Munish over time via a `learnings.md` file it updates weekly.

## Why Claude (pivot from Gemini)

Originally built as a Gemini Gem for cost reasons. Pivoted to Claude because:

- **Gemini Gems don't reliably expose tool calls** — refused even basic image generation, couldn't be coaxed into writing Calendar events.
- **Claude's first-party connectors** (Google Drive + Google Calendar) are stable, well-scoped, and work consistently from the mobile app.
- **Phone-first UX is strong**: native photo upload, voice input, iOS Share Sheet integration.
- **Artifacts are portable markdown** — if Anthropic changes their pricing, paste into any equivalent host in 30 seconds.

Trade-off: Claude Pro/Max subscription required. User has accepted this.

## Architecture

**One Claude Project** (`Needle`) + **one Google Drive folder** (`/Needle/`) + **one Google Calendar** (`Needle`).

Five Drive files Claude reads and writes via the Google Drive connector:

| File | Purpose | Writer |
|---|---|---|
| `bucket.md` | All open items (Operations + Tasks), tagged `compounding` / `maintenance` / `urgent` / `office`, kinded `op` (needs OPT) or `task` (already actionable) | Claude, every interaction |
| `operations.md` | OPT decomposition: each Operation → 2–5 Processes (state-named) → 3–7 Tasks (rolling-wave, next ~2 weeks) | Claude, on OPT trigger |
| `completed-log.md` | Timestamped completion history (task + sub-step level) | Claude, on each tick |
| `learnings.md` | Patterns Claude observes about Munish (time-of-day, tag-completion rates, avoidance, etc.) | Claude, weekly review |
| `notes.md` | Ambient context drops Munish shares without an explicit prioritization ask | Claude, listen-only mode |

**Default behavior is listen-only.** Claude only produces prioritized output (Needle, weekly plan, evening wrap, weekly review) on explicit trigger. Otherwise it routes incoming context to `bucket.md` / `learnings.md` / `notes.md` and acknowledges in one line.

## Schedule context

Munish is WFH for a US-based company — work hours are irregular, Mon evenings typically heavy with US-team meetings, small meetings scattered through the week. **Google Calendar is the source of truth** for office work, not hardcoded hours. Claude reads the calendar before any weekly plan or daily sizing.

Fixed non-office constraints (baked into weekly plan):

- Fri 6 PM – 9 PM: 100x lecture (blocked)
- Sat 6 PM – 9 PM: 100x lecture (blocked)
- Claude certification: ≥4 hrs/week in weekly chunks (default Sat & Sun 10 AM – 12 PM, adjusts to calendar)
- Mon evening typically heavy → planned as a lighter growth day

## Prioritization algorithm

Needle = **2 needle-movers + 1 urgent**.

1. **Filter office/cohort tasks out** of daily slots by default. Office work surfaces only as a heads-up line when deadline is <48 h.
2. **Tag everything** in the bucket: `compounding` / `maintenance` / `urgent` / `office`.
3. **Pick 2 compounding** by Pareto leverage. First 3 weeks (cold start, `learnings.md` empty): prefer tasks that (a) unblock other tasks, (b) ship something user-visible, (c) produce a public artifact. After 3 weeks: use observed patterns from `learnings.md` to rank.
4. **Pick 1 urgent** (or 1 office if cohort deadline <48 h).
5. **Tag one task "Deep Work"** (90–120 min, single-focus, default scheduled before 11 AM per Newport + learning patterns).

## Sub-step structure

Each of the 3 tasks gets **3–5 sub-steps**, each **15–45 min**.

- **Implementation intentions** (Gollwitzer 1999, d=0.65): "When I open Figma, I will duplicate the dashboard frame."
- **Outcome-framed completion states** (Locke & Latham): "Draft sent to X," not "write draft."
- **First sub-step = smallest sub-step of the hardest task** (Zeigarnik primer).
- **No admin/email as a sub-step.** Every sub-step ladders to a needle-mover.

## Daily flow modes

| Trigger | Mode | Action |
|---|---|---|
| Anything else (default) | **Listen** | Route to `bucket.md` / `learnings.md` / `notes.md`. One-line ack. No suggestions. |
| Photo / list dump + "build my bucket" | **Build bucket** | OCR/transcribe, tag, kind (op/task), merge into `bucket.md` (de-dupe) |
| "OPT [name]" / "OPT my bucket" | **OPT decompose** | Operation → Processes (state-named noun phrases, 100% rule) → Tasks (next-action, half-day to 2 days). Rolling-wave: next ~2 weeks only. Written to `operations.md`. Skips `task`-kinded items. |
| "Today's 3" / morning ping | **Prioritize** | Read `learnings.md`, `bucket.md`, `operations.md`. Pick 3. Sub-steps from current active Tasks if OPT'd, otherwise improvised. Small tasks (≤30 min) appear in `Quick wins` coda, not slots. |
| "Weekly plan" / "week ahead" | **Weekly plan** | Read all files + Google Calendar via connector. Output text chart, 12–18 bullets across 7 days, respect fixed events. |
| "Weekly plan to calendar" / "schedule the week" | **Weekly plan → Calendar** | Text chart + creates color-coded events on the `Needle` Google Calendar via connector. Clears prior week events on re-run. |
| "Done X" / "sub-step Y finished" | **Tick** | Update `completed-log.md`, push next sub-step |
| "Evening wrap" | **Wrap** | Summarize, move slipped tasks back to bucket, one-sentence affirmation |
| "Weekly review" (Sun default) | **Learn** | Re-read `completed-log.md` + `notes.md`, update `learnings.md`, propose silent demotions (Buffett 25/5) |

## Growth needle (Munish-specific)

**IN:** personal side-quests, shipping side-projects to paying customers, learning that compounds (AI tooling, Python, React/Next.js, agent design).

**OUT:** office work, cohort assignments. Auto-tagged `office`, invisible to daily 3 unless deadline <48 h.

This definition lives in the system prompt. It will evolve via `learnings.md` over time.

## Deliverables (in this repo)

```
priority-list/
├── CLAUDE.md
├── .claude/tasks/priority-list-skill.md    ← this spec
├── claude-project/
│   ├── system-prompt.md     ← paste into Project's custom instructions
│   ├── framework.md         ← upload as Project knowledge file
│   ├── kickoff-prompt.md    ← paste into first chat to verify setup
│   └── setup.md             ← step-by-step setup walkthrough
└── drive-templates/
    ├── bucket.md
    ├── operations.md
    ├── completed-log.md
    ├── learnings.md
    └── notes.md
```

## Research backing (one-liners)

- **3 priorities/day**: Cowan (2001) working-memory ~4; Bailey *Rule of 3*; Kahneman planning-fallacy absorption.
- **2 needle + 1 urgent**: Keller *ONE Thing* + Eisenhower; prevents "growth-only list collapses on contact with reality."
- **OPT decomposition**: WBS 100% rule + GTD next-action test + OKR state-vs-activity naming + JTBD job test + HTA stopping rule + rolling-wave planning.
- **3–5 sub-steps, 15–45 min**: GTD next-actions + Sweller cognitive load.
- **Implementation intentions**: Gollwitzer & Sheeran (2006), d=0.65 across 94 studies.
- **Zeigarnik primer**: Masicampo & Baumeister (2011) on plan-making discharging intrusive thoughts.
- **Progress principle**: Amabile & Kramer (2011).
- **Pareto + Buffett 25/5**: silent demote, never delete (psychological).
- **Variable reward cadence**: 9–15 completion events/day matches Schultz dopamine prediction-error work without habituation.

## Open / future

- After ~3 weeks, audit `learnings.md` — if patterns look weak/wrong, tighten the weekly review prompt.
- If Claude routinely picks wrong tasks, refine the "growth needle" section.
- Consider auto-blocking Deep Work slots on the primary calendar (currently only writes to `Needle` calendar).
