# Application tracker

## Snapshot

- **Branch:** `work`
- **Application:** Cycle Signals (`api-experiment.html`)
- **Stage:** Static concept / discovery
- **Release status:** No application change in this documentation checkpoint
- **Active gate:** Lesson 1 Phase A — waiting for Ronan's answers

## Component inventory

| Area | Current state | Next eligible action | Blocker |
| --- | --- | --- | --- |
| Presentation | Single static HTML/CSS concept page | Review semantics and identify one fixture display target | Lesson 1 Phase A answers |
| Data model | Not defined | Draft a minimal synthetic schema | Complete Lesson 1 |
| Browser logic | None | Render one synthetic signal | Complete Lesson 2 |
| External data | None | Evaluate candidate sources from first-party documentation | Complete fixture and failure-state lessons |
| Secret boundary | Not needed yet | Design a proxy only if the selected source needs credentials or receives sensitive data | Provider not selected or verified |
| Persistence | None | Keep local by default; reconsider only with explicit need and privacy review | No approved use case |
| Testing | No harness detected | Start with a documented manual check, then select the lightest suitable automation | No implementation yet |
| Deployment | Existing static repository context; deployment mechanism not assessed | Assess only when a change is ready | Out of current lesson scope |

## Decision log

| Date (UTC) | Decision | Status |
| --- | --- | --- |
| 2026-09-07 | Preserve `api-experiment.html` during the documentation checkpoint. | Active |
| 2026-09-07 | Use synthetic fixtures before evaluating a live source. | Provisional, governed by lesson gates |
| 2026-09-07 | Treat real commute, rest, activity, location, and health-adjacent data as outside the repository privacy boundary. | Active |
| 2026-09-07 | Make no provider selection or current product/pricing claim without first-party verification. | Active |

## Change checklist

- [x] Record repository assessment and architecture direction.
- [x] Record privacy, cost, and verification boundaries.
- [x] Record current branch and learning gate.
- [ ] Receive and assess Lesson 1 Phase A answers.
- [ ] Obtain readiness confirmation for the next phase.
- [ ] Define a synthetic schema.
- [ ] Change application code.
