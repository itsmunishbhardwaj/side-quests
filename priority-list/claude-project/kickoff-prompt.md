# Kickoff prompt

Paste this **entire block** as your first message in a new chat inside the Needle Project. It verifies access end-to-end before you start using the skill for real.

---

```
First-run setup for Needle.

Run these checks in order. Report each with ✓ or ✗ and what failed.

1. Read all five files in My Drive > Needle:
   - bucket.md
   - operations.md
   - completed-log.md
   - learnings.md
   - notes.md
   Confirm you can read them via the Google Drive connector. If any are missing, list which.

2. Test write access: append a single line `- 00:00 [setup check]` to notes.md, then read it back to confirm the write landed. Then remove that line.

3. Read my Google Calendar via the Calendar connector. List my events for tomorrow with start time and title. If none, say so.

4. Find the calendar named `Needle` (separate from my primary calendar). Confirm you can see it and report its calendar ID. This is where you will write weekly-plan events.

5. Summarize the constraint set you're operating under:
   - Growth needle (in/out scope)
   - Fixed events (100x Fri/Sat 6 PM, Claude cert 4 hrs/week)
   - Listen-only default

Once all five checks pass, reply only: `Setup verified. Listening.` Then wait — do not produce a Needle or weekly plan until I explicitly ask.
```

---

## What to do after this works

- Snap a photo of your current task list (paper, whiteboard, Apple Notes screenshot, anything) and send it with: `Build my bucket from this.`
- Or just start talking. Drop a thought, a meeting outcome — Claude will route it.
- When ready for the week: `Weekly plan to calendar.`

## What to do if a check fails

| Check that failed | Fix |
|---|---|
| 1 — file read | Drive connector not authorized, wrong account, file missing → re-run setup steps 1 + 3 of `setup.md` |
| 2 — file write | Drive connector scope is read-only → in Connectors, re-authorize Drive granting write |
| 3 — calendar read | Calendar connector not authorized → enable in Connectors |
| 4 — Needle calendar missing | Create it per step 2 of `setup.md` |
| 5 — constraint summary wrong | Project instructions didn't load → confirm system-prompt.md is pasted into Project's Custom Instructions, save again |
