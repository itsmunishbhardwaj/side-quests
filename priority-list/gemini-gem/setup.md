# Daily 3 — Gem Setup (one-time, ~10 min)

Phone-first usage, but easier to set up on web. After setup, everything works from the Gemini mobile app.

## 1. Create the Google Drive folder

On any device, in Google Drive:

1. Create a folder named `Daily 3` (root of My Drive is fine).
2. Inside it, create three docs by uploading or pasting the templates from `drive-templates/` in this repo:
   - `bucket.md`
   - `completed-log.md`
   - `learnings.md`

Note the folder path. You'll reference it in the Gem instructions if Gemini needs help finding the files.

## 2. Connect Drive to Gemini (if not already)

- Open [gemini.google.com](https://gemini.google.com) on desktop.
- Profile → Settings → Apps / Extensions.
- Enable **Google Workspace** (gives access to Drive, Docs, Calendar, Gmail).
- Same Google account as the Drive folder above. Done.

## 3. Create the Gem

- In Gemini web: left sidebar → **Gems** → **+ New Gem**.
- **Name:** `Daily 3`
- **Description:** `Phone-first daily prioritizer. Reads bucket, returns 3 tasks with achievable sub-steps.`
- **Instructions:** paste the entire contents of `gemini-gem/system-prompt.md` from this repo.
- **Knowledge files:** upload `gemini-gem/framework.md` from this repo.
- Save.

## 4. First run (web, 5 min)

In a new chat with the Daily 3 Gem:

```
First-run setup. The Drive folder is My Drive > Daily 3, containing bucket.md, completed-log.md, learnings.md. Read all three to confirm access. Then wait for my weekly dump.
```

Confirm Gemini can read/write the three files. Fix any permission issues now, not later.

## 5. Pin to mobile

- Open the Gemini app on your phone.
- Daily 3 Gem appears in the Gem switcher at top of any chat.
- Optional: long-press the Gemini app icon → "Add widget" for one-tap access.

## 6. First weekly dump

Snap a photo of your current task list (paper, whiteboard, Apple Notes screenshot — whatever you have). Say or type:

```
Build my bucket from this.
```

Add voice clarifications as needed. Confirm the bucket looks right by asking: `Show me the bucket.`

## 7. Daily flow (from your phone, every morning)

```
Today's 3.
```

That's it. Throughout the day, voice or type ticks:

```
Done with the first Figma sub-step.
```

Evening:

```
Evening wrap.
```

Sundays:

```
Weekly review.
```

## Troubleshooting

- **"Gemini can't see my Drive files."** Re-check the Workspace extension is on, and that you're logged into the same Google account. Try sharing the `Daily 3` folder with yourself.
- **Output drifts off-template.** Paste the system prompt back in as a one-time reminder: `Reset to your operating instructions and re-issue today's 3.`
- **Prompt exceeds Gem character limit.** Move the `## Tag taxonomy` and `## File format conventions` sections from `system-prompt.md` into the `framework.md` knowledge file.
- **Gem feels generic after a few weeks.** Ask: `Show me learnings.md.` If it's empty or shallow, run `weekly review` explicitly and inspect output. The Pareto loop only works if learnings is being populated.

## When to revisit

After ~3 weeks of daily use:
- Open `learnings.md`. Does it accurately describe your patterns? If not, tighten the weekly review prompt.
- Open `bucket.md`. Is it bloated? Run a manual Buffett 25/5 demotion pass.
- If Gemini consistently picks wrong tasks for the daily 3, refine the "growth needle" section of `system-prompt.md` and re-save the Gem.
