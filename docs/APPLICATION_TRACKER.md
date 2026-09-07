# Application tracker

## Snapshot

- **Branch:** `work`
- **Application:** Cycle Signals (`api-experiment.html`)
- **Stage:** First live-data card implemented
- **Release status:** Built and locally checked; not verified as deployed
- **Active gate:** Lesson 1 Phase B — live GitHub Pages request and display verification

## Component inventory

| Area | Current state | Next eligible action | Blocker |
| --- | --- | --- | --- |
| Presentation | Accessible London weather card with loading, success, failure, retry, timestamps, and attribution | Verify the visible card on GitHub Pages | Updated commit is not connected to a remote in this environment |
| Data model | Not defined | Draft a minimal synthetic schema | Complete Lesson 1 |
| Browser logic | One request on page load, response/status validation, safe text rendering, and manual retry | Inspect the live Network request and exercise failure handling | Live page not available from this checkout |
| External data | Open-Meteo forecast endpoint using generic central-London coordinates | Confirm real returned values on the live page | Runtime provider access is blocked in this environment |
| Secret boundary | Not needed for the credential-free weather request | Design a proxy only when a later selected source needs credentials or receives sensitive data | No private provider selected |
| Persistence | None | Keep local by default; reconsider only with explicit need and privacy review | No approved use case |
| Testing | HTML parsing, JavaScript syntax, and mocked success/HTTP-failure checks pass | Complete live browser checks | No browser engine or provider access in this environment |
| Deployment | Existing GitHub Pages project, but this checkout has no configured remote | Get commit onto a GitHub branch and verify Pages | Cannot push or create a linked PR from this checkout |

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
- [x] Verify attribution, usage limits, cost conditions, privacy/logging, and relevant terms from official documentation supplied by Ronan.
- [ ] Define a synthetic schema.
- [x] Implement the Lesson 1 weather card.
- [x] Validate HTML structure and JavaScript syntax.
- [x] Test success and HTTP-failure states with a mocked API response.
- [ ] Verify the real request, displayed values, attribution, and failure state on the live GitHub Pages URL.
