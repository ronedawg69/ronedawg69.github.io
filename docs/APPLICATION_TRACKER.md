# Application tracker

## Snapshot

- **Branch:** `work`
- **Application:** Cycle Signals (`api-experiment.html`)
- **Stage:** Lesson 1 complete; Lesson 2 not started
- **Release status:** Weather card and PR #11 readability refinement deployed and working
- **Active gate:** Between lessons — explain Lesson 2 Pha# Application tracker

> Review note (2026-09-09): This file was reviewed from an uploaded snapshot, without the live repository, GitHub state, application source, or test output. Historical implementation, PR, deployment and test claims below are retained as prior records, not independently verified current facts. Follow `AGENTS.md` before relying on them. Lesson progress is preserved; technical uncertainty does not reset completed learning.

## Historical snapshot (not a current verification)

- **Last recorded branch (not current verification):** `work`
- **Application:** Cycle Signals (`api-experiment.html`)
- **Stage:** Lesson 1 complete; Lesson 2 not started
- **Release status:** Weather card and PR #11 readability refinement deployed and working
- **Active gate:** Between lessons — explain Lesson 2 Phase A and obtain readiness before starting it

## Previously recorded component inventory

| Area | Current state | Next eligible action | Blocker |
| --- | --- | --- | --- |
| Presentation | Accessible London weather card with named WMO conditions, minute intervals, loading, success, failure, retry, timestamps, and attribution; deployed and verified | No change until Lesson 2 is opened | Lesson 2 readiness not confirmed |
| Data model | Not defined | Explain Lesson 2 Phase A and ask whether Ronan is ready | Lesson 2 has not started |
| Browser logic | One request on page load, response/status validation, safe text rendering, WMO fallback, interval conversion, and manual retry; live request and visible states verified | No change until Lesson 2 is opened | Lesson 2 readiness not confirmed |
| External data | Open-Meteo forecast endpoint using generic central-London coordinates; live response matched to the rendered condition | Preserve the Lesson 1 boundary | None for the completed lesson |
| Secret boundary | Not needed for the credential-free weather request | Design a proxy only when a later selected source needs credentials or receives sensitive data | No private provider selected |
| Persistence | None | Keep local by default; reconsider only with explicit need and privacy review | No approved use case |
| Testing | HTML parsing, JavaScript syntax, mocked known-code, unknown-code, interval, success, and HTTP-failure checks pass; live refined display is verified | Preserve the verified baseline | None for the completed lesson |
| Deployment | Weather card and PR #11 readability refinement are deployed and working on GitHub Pages | No deployment action | None |

## Decision log

| Date (UTC) | Decision | Status |
| --- | --- | --- |
| 2026-09-07 | Preserve `api-experiment.html` during the documentation checkpoint. | Active |
| 2026-09-07 | Use synthetic fixtures before evaluating a live source. | Provisional, governed by lesson gates |
| 2026-09-07 | Treat real commute, rest, activity, location, and health-adjacent data as outside the repository privacy boundary. | Active |
| 2026-09-07 | Make no provider selection or current product/pricing claim without first-party verification. | Active |
| 2026-09-08 | Preserve the deployed request and states while translating WMO codes and seconds into readable display text. | Active |
| 2026-09-08 | Close Lesson 1 after the deployed PR #11 refinement, live request, visible states, and final teach-back were verified. | Complete |
| 2026-09-08 | Keep Lesson 2 unopened until its Phase A explanation and readiness check; start no schema or application work meanwhile. | Active |

## Historical change checklist

Checked items record earlier claims of completion; they are not fresh test results. Read these alongside the evidence register below.

- [x] Record repository assessment and architecture direction.
- [x] Record privacy, cost, and verification boundaries.
- [x] Record current branch and learning gate.
- [x] Receive and assess the three weather-request answers posed in chat.
- [x] Receive and assess the five supplementary trust-boundary answers without treating the untaught material as a learner error.
- [x] Obtain readiness confirmation for the next phase.
- [x] Attempt first-party Open-Meteo documentation and endpoint checks.
- [x] Verify current-condition basis, requested fields, default units, generated URL, and standard non-commercial API-key requirement from official documentation supplied by Ronan.
- [x] Verify attribution, usage limits, cost conditions, privacy/logging, and relevant terms from official documentation supplied by Ronan.
- [ ] Define a synthetic schema (Lesson 2; not started).
- [x] Implement the Lesson 1 weather card.
- [x] Validate HTML structure and JavaScript syntax.
- [x] Test success and HTTP-failure states with a mocked API response.
- [x] Verify the initial real request and weather card on the live GitHub Pages URL.
- [x] Test known and unknown WMO codes and singular/plural minute conversion locally.
- [x] Verify the refined condition and interval text on the live GitHub Pages URL.
- [x] Record Ronan's final Lesson 1 teach-back and readiness to finish the lesson.

## Current technical evidence register

Review date: 2026-09-09. Evidence available: six project Markdown files and an incident transcript supplied as Markdown and PDF. No Git checkout or live GitHub query was supplied or performed in this review.

| Claim | Evidence and status | Next verification when needed |
| --- | --- | --- |
| Current repository, branch, HEAD, working tree | Unknown; `work` appears only in prior notes | Inspect the actual checkout |
| Current remote branches / integration access | Unknown; previous session reported no remote and blocked CLI access | Inspect current capabilities and query the relevant remote/service |
| Safety-rule change committed or published | Transcript claims local commits `8b1d733`, then `8c1ebad`; neither independently verified. Uploaded AGENTS.md lacked the claimed three safety rules | Inspect the actual diff/commit and hosted state; do not pick a hash from this transcript as current HEAD |
| Hosted safety-rule PR | No confirmed PR identity in supplied evidence; transcript admits metadata was mistaken for publication | Query matching repository/head; no instruction to review a PR until a real link is confirmed |
| PR #11 merged | Historical assertion only; no hosted PR record supplied | Query the exact PR and base/merge state |
| Weather card deployed / live behavior | Earlier notes record Ronan's live check; no current deployment or tested commit supplied | Check deployment and URL if release status matters to the next task |
| Local application validation | Historical checklist only; no source or test output supplied | Run checks relevant to actual code changes; documentation repair does not require invented application tests |
| Hosted checks / review requirements | Unknown; old brief records no CI configuration | Inspect actual PR checks and repository requirements; distinguish none from unavailable |
| Lesson progress | Supplied notes consistently record Lesson 1 complete and Lesson 2 unopened | LEARNING_TRACKER.md has now been reviewed and agrees; preserve its recorded answers and explicit exemption from another Phase A quiz |

For future entries record: claim, result, evidence source (command/service/user report), checked-at time, repository and commit/PR/URL where relevant, and limitation. A reference in another Markdown file is not independent verification.
