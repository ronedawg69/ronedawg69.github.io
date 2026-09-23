# Application tracker

## Current verified GitHub state

- **Checked on:** 2026-09-23
- **Repository:** [ronedawg69/ronedawg69.github.io](https://github.com/ronedawg69/ronedawg69.github.io)
- **Default branch:** `main`
- **Verified main commit:** `8b4c8efad940c8cececde598e221380216d8ec87` (GitHub public API, 2026-09-23)
- **Lesson 2 publication:** PR #14 merged; `fixtures/cycle-signals-fixture.js` is present on `main`.
- **Learning stage:** Lessons 1, 2, and 3 complete as of 2026-09-23; Lesson 4 not started.
- **Current gate:** Explain Lesson 4 and obtain readiness before a failure-state exercise or application change.
- **Application impact:** The page now loads the synthetic fixture and displays its first ride duration as `1440 seconds`. Existing weather behavior is otherwise unchanged.
- **Current test/deployment status:** Local structure, syntax, controlled DOM, and Chromium screenshot checks passed on 2026-09-23. Deployment and live-site behavior were not checked.

This section records hosted GitHub state only. It does not describe a local checkout or prove current live-site behavior.

## Historical snapshot (not a current verification)

- **Last recorded branch (not current verification):** `work`
- **Application:** Cycle Signals (`api-experiment.html`)
- **Stage:** Lesson 1 complete; Lesson 2 not started
- **Release status:** Weather card and PR #11 readability refinement deployed and working
- **Active gate:** Between lessons — explain Lesson 2 Phase A and obtain readiness before starting it

## Previously recorded component inventory

| Area | Current state | Next eligible action | Blocker |
| --- | --- | --- | --- |
| Presentation | Existing weather card plus a visible synthetic ride-duration signal; local Chromium showed `1440 seconds` | Preserve until Lesson 4 is explained and opened | Lesson 4 readiness not confirmed |
| Data model | Learner-authored synthetic fixture loaded by the page; schema, privacy, declaration, syntax, values, and units validated | Preserve the minimal fictional record | None for the implemented signal |
| Browser logic | Fixture loads before the inline script; the validated assignment displays `1440 seconds`; existing weather logic remains in place | Preserve until Lesson 4 is explained and opened | Lesson 4 readiness not confirmed |
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
| 2026-09-17 | Open Lesson 2 Phase A after explaining datasets, records, schemas, units, consistency, data minimization, and privacy; Ronan confirmed readiness. | Active |
| 2026-09-17 | Keep Phase A documentation-only until Ronan attempts the schema-purpose exercise and validates the schema and privacy choices. | Active |
| 2026-09-17 | Treat Strava, Google health data, and weather in Ronan's answer as intended signal categories, not approval to connect live providers or copy their available fields. | Active |
| 2026-09-17 | Use ride duration, prior-night sleep duration, and weather condition as candidate signals; do not infer tiredness or causation from sleep duration, and resolve weather condition versus severity before schema approval. | Active |
| 2026-09-17 | Store only an observable weather condition; exclude rider-dependent severity judgements such as “harsh.” | Superseded by the numeric WMO-code correction below |
| 2026-09-17 | Correct the weather candidate to numeric `weather_code`, matching the inspected request, validation, mapping, fallback, and rendering flow; withdraw the redundant manual-vocabulary exercise. | Active |
| 2026-09-17 | Accept Ronan's validation of all three candidate field meanings and units; keep schema approval blocked on numeric rules and privacy validation. | Active |
| 2026-09-17 | Accept positive whole ride seconds, positive whole/decimal sleep hours, and recognized integer WMO codes as the normal-fixture numeric rules; preserve the existing unknown-code fallback for later controlled scenarios. | Active |
| 2026-09-17 | Accept Ronan's approval of all five fixture privacy rules and close Lesson 2 Phase A with the minimal schema validated; start no fixture or application work before the Phase B explanation and readiness check. | Complete |
| 2026-09-17 | Open Lesson 2 Phase B after explaining its fixture-writing purpose and boundaries; Ronan confirmed readiness. | Active |
| 2026-09-17 | Accept Ronan's fictional `sample-01` values (`1440`, `7.9`, and WMO code `61`) as conforming to the approved numeric and privacy rules. | Active |
| 2026-09-17 | Accept Ronan's five-property `sample-01` JavaScript object as syntactically correct and schema-compliant. | Active |
| 2026-09-17 | Accept Ronan's one-item JavaScript array as a valid fixture collection representation. | Active |
| 2026-09-17 | Record the first named-declaration attempt; retain the valid array and semicolon, and correct the declaration order from `const = cycleSignalsFixture` to `const cycleSignalsFixture =`. | Active |
| 2026-09-17 | Accept Ronan's corrected declaration and write the formatted learner-authored array to `fixtures/cycle-signals-fixture.js` without loading it into the page. | Active |
| 2026-09-17 | Accept Ronan's record description and immediate WMO-code self-correction; close Lesson 2 with no remaining misconception. | Complete |
| 2026-09-17 | Verify through GitHub's public API that the repository is `ronedawg69/ronedawg69.github.io`, default branch `main` is at `991e47f`, commit `a271852` is absent, and no PR is open. | Verified |
| 2026-09-17 | Configure the verified repository as `origin` and attempt fetch/push without prompting for secrets; fetch returned HTTP 403 and push lacked credentials. Do not begin Lesson 3 until Lesson 2 is published. | Blocked pending a supported GitHub connection |

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
- [x] Define, validate, and check in the Lesson 2 synthetic fixture without loading it into the page.
- [x] Implement the Lesson 1 weather card.
- [x] Validate HTML structure and JavaScript syntax.
- [x] Test success and HTTP-failure states with a mocked API response.
- [x] Verify the initial real request and weather card on the live GitHub Pages URL.
- [x] Test known and unknown WMO codes and singular/plural minute conversion locally.
- [x] Verify the refined condition and interval text on the live GitHub Pages URL.
- [x] Record Ronan's final Lesson 1 teach-back and readiness to finish the lesson.

## Current technical evidence register

The historical evidence review below is dated 2026-09-09. The local checkout and
GitHub public repository were inspected on 2026-09-17. The current local snapshot
above records the exact branch, HEAD, clean starting state, verified remote,
hosted-main commit, absent Lesson 2 commit, and publication limitation. Deployment
and live behavior were not checked in this publication review.

| Claim | Evidence and status | Next verification when needed |
| --- | --- | --- |
| Current repository, branch, HEAD, working tree | Verified locally on 2026-09-17: `/workspace/ronedawg69.github.io`, branch `work`, HEAD `a2718529e212dace7a5efdf2b7409f2a0f896c54`, clean starting tree | Re-check before further repository work |
| Current remote branches / integration access | GitHub public API reported hosted `main` at `991e47f`; API read succeeded, but direct fetch returned HTTP 403, `gh` is unauthenticated, and no hosted write integration is available | Re-check after a supported GitHub connection is enabled |
| Lesson 2 commit on GitHub | Absent as of 2026-09-17; GitHub public commit query returned `No commit found` for full SHA `a2718529e212dace7a5efdf2b7409f2a0f896c54`; hosted `main` remained at `991e47f` | After GitHub write access is connected, push the separate `work` branch and verify the exact commit through the hosted API |
| Lesson 2 publication route | Correct repository and HTTPS remote verified; local `origin` configured. Write route unavailable because `gh` is unauthenticated, no hosted write integration is available, fetch returned HTTP 403, and push had no credentials | Connect the supported GitHub integration with write access; do not paste a token into chat |
| Safety-rule change committed or published | Transcript claims local commits `8b1d733`, then `8c1ebad`; neither independently verified. Uploaded AGENTS.md lacked the claimed three safety rules | Inspect the actual diff/commit and hosted state; do not pick a hash from this transcript as current HEAD |
| Hosted safety-rule PR | No confirmed PR identity in supplied evidence; transcript admits metadata was mistaken for publication | Query matching repository/head; no instruction to review a PR until a real link is confirmed |
| PR #11 merged | Historical assertion only; no hosted PR record supplied | Query the exact PR and base/merge state |
| Weather card deployed / live behavior | Earlier notes record Ronan's live check; no current deployment or tested commit supplied | Check deployment and URL if release status matters to the next task |
| Local Lesson 3 application validation | Verified on the `work` branch working tree on 2026-09-23: unique HTML IDs; fixture-before-renderer order; fixture and inline JavaScript syntax; controlled DOM output `1440 seconds`; local Chromium screenshot at `http://127.0.0.1:4173/api-experiment.html` | Re-run against the committed revision when publication or release status is assessed; local evidence is not deployment proof |
| Hosted checks / review requirements | Unknown; old brief records no CI configuration | Inspect actual PR checks and repository requirements; distinguish none from unavailable |
| Lesson progress | Lessons 1, 2, and 3 complete; Lesson 3 final teach-back accepted on 2026-09-23 | Explain Lesson 4 and obtain readiness before starting its exercise |

For future entries record: claim, result, evidence source (command/service/user report), checked-at time, repository and commit/PR/URL where relevant, and limitation. A reference in another Markdown file is not independent verification.
