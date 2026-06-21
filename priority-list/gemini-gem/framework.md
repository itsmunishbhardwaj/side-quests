# Daily 3 — Framework Reference

Knowledge file for the Daily 3 Gem. Cite these only when Munish asks *why* — don't pad daily output with theory.

---

## The 3-task ceiling — why exactly 3

- **Cowan (2001) working-memory cap ~4 chunks** (revised Miller's 7±2 downward). 3 sits safely below.
- **Planning fallacy** (Kahneman & Tversky 1979; Buehler et al. 1994): people underestimate task duration by 20–40%. A 3-item list absorbs overruns; a 6-item list (Ivy Lee) guarantees daily failure, which inverts the dopamine loop.
- **Rule of 3** (Chris Bailey, *The Productivity Project* 2016; J.D. Meier *Getting Results the Agile Way* 2010): pick 3 outcomes each morning, week, year.

**Ivy Lee (6) is folklore** — 1918 Charles Schwab anecdote, no controlled evidence, too many for knowledge work where tasks are larger than factory-era ones.

---

## The 2 + 1 formula — why not 3 needle-movers

A 3-needle-mover list collapses on contact with reality the first time something urgent lands. User stops trusting the system. Reserving 1 slot for urgent absorbs the inevitable fire without polluting growth slots.

- **Keller, *The ONE Thing* (2013)** — focusing question: *"What's the ONE thing I can do such that by doing it everything else will be easier or unnecessary?"*
- **Eisenhower Matrix** — Q1 (urgent + important) gets the 1 slot.
- **Newport, *Deep Work* (2016)** — at least 1 of the 3 should be a 90–120 min single-focus block.

---

## Sub-step structure — why 3–5, why 15–45 min

- **GTD next-actions** (Allen 2001): each sub-step is the next *physical, visible* action — "open Figma and duplicate the dashboard frame," not "work on dashboard."
- **Cognitive load theory** (Sweller): above 5 sub-steps, the list itself becomes load.
- **Pomodoro / Ultradian sub-block** — 15–45 min hits the sweet spot. Shorter = friction overhead exceeds value. Longer = decomposition failure.

### Implementation intentions — the single highest-leverage move

**Gollwitzer (1999) *American Psychologist*; meta-analysis Gollwitzer & Sheeran (2006), d=0.65 across 94 studies** — one of the most replicated effects in behavioral science.

Format: **"When/where I do X, I will do Y."**

Bad: "Draft email to client."
Good: "When I finish lunch and sit at my desk, I will draft the client email."

### Outcome framing

**Locke & Latham goal-setting theory (1990, 35+ years of replication)** — outcome-framed goals outperform process-framed ones.

Bad sub-step: "draft email"
Good sub-step: "Draft sent to client"

The sub-step describes the *completed state*. Crossing it off matches the brain's experience of "I made this thing real."

---

## Why the smallest sub-step of the hardest task goes first

**Zeigarnik (1927)** — open loops occupy cognitive resources. **Masicampo & Baumeister (2011) *JPSP*** — merely making a plan to finish a task discharges the intrusive-thoughts cost. So once we've planned the hard task, the cost is partially paid.

**Eat-the-frog** (Brian Tracy 2001) is folk wisdom. Forcing the user to *finish* the hardest task cold is the failure mode — willpower is finite. But *starting* the hardest task with a 15-min sub-step:
- Gets Zeigarnik working *for* the user (now the loop is open and pulling)
- Establishes a fast early win (Progress Principle)
- Avoids the cold-start problem

**Tiny Habits** (BJ Fogg 2019) — the opening sub-step should be "embarrassingly easy" to reduce activation energy.

---

## The Progress Principle — why sub-step ticks matter

**Amabile & Kramer, HBR May 2011 / *The Progress Principle* (2011)** — diary study of 238 knowledge workers, 12,000 entries. **The single strongest predictor of positive inner work life was making progress in meaningful work**, even small progress.

Design implication: every sub-step completion is a logged, timestamped, visible event. 3 tasks × 3–5 sub-steps = **9–15 completion events/day** — one every 30–45 min of working time. That cadence matches **Schultz (1997) *Science*** dopamine prediction-error work for sustained engagement without habituation.

---

## Completion-bias trap — why no admin sub-steps

**KC Diwas et al. HBS (2017)** — people preferentially complete small tasks to get the reward hit, *at the expense of larger ones*. Admin tasks are the easiest hits and the highest trap.

Counter-design: every sub-step must ladder to a needle-mover. The user still gets the dopamine; the user also gets the leverage. Email and admin go in a separate "shallow block" *outside* Daily 3.

---

## Pareto + Buffett 25/5 — why silent demotion, not deletion

**80/20 / Pareto** — of compounding tasks in the bucket, the 1–2 with highest leverage produce most of the growth.

**Buffett 25/5** (widely attributed): from the top 25 priorities, the bottom 20 are "avoid at all costs," not "do later." Operationally sound.

**Why demote, not delete:** psychological. Users resist tools that throw their lists away. Silent demotion to a `## Demoted` section in `bucket.md` lets the user feel held while the daily candidate pool stays clean.

---

## Worked example — "Today's 3" output

Bucket (excerpt):
```
- [compounding] Ship Figma dashboard rebuild to beta users
- [compounding] Write LinkedIn post on agent eval patterns
- [compounding] Refactor priority-list system prompt v2
- [maintenance] Renew car insurance
- [urgent] Reply to acquisition inquiry from R.
- [office] Cohort case study (due Wed)
```

Output:
```
🎯 Sun, 21 Jun

DEEP WORK · before 11 AM
Ship Figma dashboard rebuild to beta users · compounding
  ◯ Figma file open, dashboard frame duplicated — 15 min ← start here
  ◯ Sidebar nav swapped to v2 spec — 35 min
  ◯ 3 beta users invited via Loom walkthrough — 40 min

Write LinkedIn post on agent eval patterns · compounding
  ◯ Three-bullet outline drafted in notes app — 20 min
  ◯ First draft written (300 words) — 40 min
  ◯ Post scheduled in Buffer for Mon 8 AM — 15 min

Reply to acquisition inquiry from R. · urgent
  ◯ Inquiry re-read, three questions noted — 15 min
  ◯ Reply sent with answers + call link — 30 min

⚠️ Heads up: Cohort case study due Wed — block 1 hr Tue morning

Why these: Figma ship is the unlock for beta revenue; LinkedIn compounds reputation in the agent niche; R. reply protects optionality on a real conversation.
Start here: Figma file open, dashboard frame duplicated.
```

---

## Voice-first interaction

- **Voice input ~3x faster than typing** (Ruan et al., Stanford/Baidu 2016).
- **Cognitive friction**: typing on mobile triggers task-switching cost. Voice keeps user in *thinking* mode vs. *editing* mode.
- Outputs should read well aloud — Munish may have his phone read them while walking.

---

## What this skill is NOT

- Not a calendar. It doesn't schedule. (Future scope.)
- Not a habit tracker. Daily 3 is about high-leverage one-offs, not streaks.
- Not a journal. `completed-log.md` is data for `learnings.md`, not narrative.
- Not a Notion/Things replacement. It sits *on top of* whatever capture system you already use — even a paper notebook.
