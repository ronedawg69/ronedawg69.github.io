# Application tracker

## Snapshot

- **Branch:** `work`
- **Application:** Cycle Signals (`api-experiment.html`)
- **Stage:** Static concept / discovery
- **Release status:** No application change in this documentation checkpoint
- **Active gate:** Lesson 1 Phase B — forecast request verified; provider usage conditions still required

## Component inventory

| Area | Current state | Next eligible action | Blocker |
| --- | --- | --- | --- |
| Presentation | Single static HTML/CSS concept page | Review semantics and identify one fixture display target | Lesson 1 Phase A answers |
| Data model | Not defined | Draft a minimal synthetic schema | Complete Lesson 1 |
| Browser logic | None | Render one synthetic signal | Complete Lesson 2 |
| External data | None | Verify Open-Meteo attribution, usage limits, cost conditions, and relevant terms, then implement the approved request | Those usage conditions have not yet been supplied; direct environment access still fails |
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
- [x] Receive and assess the three weather-request answers posed in chat.
- [x] Receive and assess the five supplementary trust-boundary answers without treating the untaught material as a learner error.
- [x] Obtain readiness confirmation for the next phase.
- [x] Attempt first-party Open-Meteo documentation and endpoint checks.
- [x] Verify current-condition basis, requested fields, default units, generated URL, and standard non-commercial API-key requirement from official documentation supplied by Ronan.
- [ ] Verify attribution, usage limits, cost conditions, and relevant terms from current official documentation.
- [ ] Define a synthetic schema.
- [ ] Change application code.
