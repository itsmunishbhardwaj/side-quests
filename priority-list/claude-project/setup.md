# Daily 3 — Claude Project Setup (one-time, ~10 min)

Phone-first usage via the Claude mobile app. Setup is easier on web; once done, everything syncs to mobile.

**Prereqs:** Claude Pro or Max (Projects + connectors are paid-tier). A Google account for Drive + Calendar.

## 1. Create the Google Drive folder

In [Google Drive](https://drive.google.com):

1. Create a folder named **`Daily 3`** in My Drive root.
2. Inside it, create five docs by uploading or pasting the templates from `drive-templates/` in this repo:
   - `bucket.md`
   - `operations.md`
   - `completed-log.md`
   - `learnings.md`
   - `notes.md`

Google Docs format is fine (Claude reads both .gdoc and .md).

## 2. Create the `Daily 3` Google Calendar

In [Google Calendar](https://calendar.google.com):

1. Left sidebar → **Other calendars** → ➕ → **Create new calendar**.
2. Name: **`Daily 3`**. Time zone: yours. Save.
3. Pick a default color you'll recognize at a glance. (Events get tag-specific colors when Claude creates them; this is just the fallback.)

This is where Claude writes weekly-plan events — separate from your work calendar so you can hide it any time.

## 3. Enable Claude connectors

In [claude.ai](https://claude.ai) on desktop:

- Profile → **Settings** → **Connectors**.
- Enable **Google Drive** — authorize with the same Google account as the Drive folder.
- Enable **Google Calendar** — authorize with the same account. Make sure your work calendar is visible in your primary Google Calendar so Claude can see your meetings.
- Connectors auto-sync to the Claude mobile app once you're logged in there.

## 4. Create the Claude Project

In [claude.ai](https://claude.ai):

1. Left sidebar → **Projects** → **+ New Project**.
2. **Name:** `Daily 3`.
3. **Description:** `Phone-first daily prioritizer. Listens by default; on explicit ask, returns 3 daily priorities or a weekly plan.`
4. **Custom instructions:** paste the entire contents of `claude-project/system-prompt.md` from this repo.
5. **Project knowledge:** upload `claude-project/framework.md` from this repo.
6. Save.

## 5. First-run chat (~3 min)

Open a new chat inside the Daily 3 Project and paste the contents of `claude-project/kickoff-prompt.md`. Claude will:

- Verify it can read all 5 Drive files
- Verify Calendar read access by listing tomorrow's events
- Verify it can find the `Daily 3` calendar for writing events
- Confirm setup and wait

Fix any permission issues now, not later.

## 6. Pin to mobile

- Open the Claude mobile app, log in with the same account.
- The Daily 3 Project appears under **Projects**. Tap to switch.
- iOS Share Sheet → Claude lets you send a photo straight into a Daily 3 chat from anywhere.

## 7. Daily / weekly flow (from your phone)

**Default — just talk to it.** Share a thought, meeting outcome, half-idea. Claude listens, routes to `bucket.md` / `learnings.md` / `notes.md`, replies in one line.

**Decompose a goal into chunks:**
```
OPT [name of bucket item].
```
or
```
OPT my bucket.
```

**Plan the week (text chart):**
```
Weekly plan.
```

**Plan the week + push to Calendar:**
```
Weekly plan to calendar.
```
Adds color-coded events to your `Daily 3` calendar. Re-running clears old events first.

**Each morning:**
```
Today's 3.
```

**Throughout the day — tick:**
```
Done with the first Figma sub-step.
```

**Evening:**
```
Evening wrap.
```

**Sundays — meta:**
```
Weekly review.
```

## Troubleshooting

- **"Claude can't see my Drive files."** Re-check the Drive connector is authorized in claude.ai → Settings → Connectors. Same Google account in Claude as for Drive.
- **"Claude can't find the Daily 3 calendar."** In Google Calendar, confirm the calendar exists and is visible in your primary calendar list. If still stuck, tell Claude its calendar ID explicitly (find it in Google Calendar Settings → calendar name → "Integrate calendar").
- **Output drifts off-template.** Start a new chat in the same Project — the system prompt re-asserts. Or paste the kickoff prompt again.
- **Context window warnings.** Start a new chat — bucket state lives in Drive, not in chat history. Each chat inherits the Project instructions automatically.

## When to revisit

After ~3 weeks of daily use:
- Open `learnings.md` in Drive. Does it describe your patterns? If not, tighten the weekly review prompt.
- Open `bucket.md`. Bloated? Run a manual Buffett 25/5 demotion pass.
- If Claude picks wrong tasks consistently, refine the "growth needle" section of `system-prompt.md` and re-save the Project instructions.
