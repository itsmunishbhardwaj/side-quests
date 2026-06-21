# Operations (OPT decomposition)

<!-- One section per OPT'd bucket item.

  Operation = the bucket entry, verbatim + a "Done when" outcome
  Processes = 2–5 noun phrases describing a state or workstream
              (NOT verbs — "Hiring funnel built", not "Build hiring funnel")
              Together: 100% rule (fully deliver the Operation, no overlap)
              Sized: 3 days – 3 weeks each (~1 week sweet spot)
  Tasks     = 3–7 chunks per Process, half-day to 2 days each
              GTD next-action test: verb + concrete object + visible completion
              Rolling wave: only decompose for Processes in next ~2 weeks

  Example below — delete before first real use.
-->

## Ship Figma dashboard rebuild to beta users
**Tag:** compounding
**Done when:** 10 beta users have logged in to v2 and given at least one written reaction in Linear.
**JTBD:** Give power users a faster path to the data they actually look at, so they stop opening 3 tabs.

### Processes
1. **Design audit complete** · ~3 days
   - Pull last 30 days of dashboard complaints from Linear into a doc (~2 hr)
   - Screen-record current dashboard top-to-bottom with narrated friction notes (~1 hr)
   - Draft a 1-page "v2 wins, v2 risks" memo (~3 hr)

2. **Component refactor shipped to staging** · ~1 week
   - Refactor sidebar nav to v2 spec (~1 day)
   - Refactor primary chart container, swap in new layout (~1 day)
   - Hook v2 data adapter; smoke-test against staging API (~half day)
   - Internal review + fix critical issues (~half day)

3. **Beta cohort recruited** · ~2 days
   - _Not yet decomposed — rolling wave; revisit when component refactor is in review._

4. **Iteration loop closed** · ~1 week
   - _Not yet decomposed — rolling wave._
