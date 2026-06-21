# Needle

An AI agent that plans, prioritises, and updates your calendar — so you always know exactly what to do today to move the needle.

Lives inside a Claude Project on your phone. Listens by default. Acts on demand.

## What it does

- Reads your task dump (photo, voice, screenshot, PDF, Apple Notes, text)
- Tags and stores everything in a Google Drive bucket
- Breaks goals into sized chunks via OPT decomposition (Operation → Process → Task)
- Surfaces your **Daily 3**: 2 needle-movers + 1 urgent
- Each task gets 3–5 sub-steps (15–45 min each) designed for momentum
- Builds a weekly plan and pushes color-coded events to Google Calendar
- Learns your patterns over time via `learnings.md`

## Why Claude

Started as a Gemini Gem. Pivoted because Gemini Gems don't reliably expose tool calls — Calendar writes failed, image generation refused. Claude's first-party Google Drive + Calendar connectors work consistently from the mobile app.

## Stack

- **Claude Project** (`Needle`) — custom instructions + knowledge file
- **Google Drive** (`/Daily 3/`) — 5 files Claude reads and writes
- **Google Calendar** (`Daily 3`) — where weekly plan events land

## Setup

Follow `claude-project/setup.md`. Takes ~10 minutes on web; everything syncs to mobile after.

## Daily commands

```
Today's 3              → get your daily priorities
OPT [goal name]        → decompose a goal into tasks
Weekly plan            → text chart across 7 days
Weekly plan to calendar → push events to Google Calendar
Done [task/sub-step]   → tick progress
Evening wrap           → summarise the day
Weekly review          → update learnings, demote dead weight
```

Default: just talk. Claude listens, routes to bucket/notes, replies in one line.

## File layout

```
priority-list/
├── claude-project/
│   ├── system-prompt.md     ← paste into Project's Custom Instructions
│   ├── framework.md         ← upload as Project knowledge file
│   ├── kickoff-prompt.md    ← paste into first chat to verify setup
│   └── setup.md             ← step-by-step setup walkthrough
└── drive-templates/
    ├── bucket.md            ← all open items, tagged + kinded
    ├── operations.md        ← OPT decomposition output
    ├── completed-log.md     ← timestamped completion history
    ├── learnings.md         ← patterns Claude observes over time
    └── notes.md             ← ambient context, listen-only
```
