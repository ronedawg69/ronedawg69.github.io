# Application tracker

## Current status

- **Checked on:** 2026-10-02 (Europe/London).
- **Repository / default branch:** [ronedawg69/ronedawg69.github.io](https://github.com/ronedawg69/ronedawg69.github.io), `main`.
- **Verified main commit:** `6128cc478263eb5221b37f507a3eccdb6f70aac3`, from GitHub's branch-ref API. This is the baseline checked for this documentation PR; re-check after merging rather than treating it as an evergreen latest commit.
- **Lesson stage:** Lessons 1–3 complete; Lesson 4 not started. No active lesson in this documentation-only session. The next lesson entry is helpful loading, no-data and error states, with no required quiz or readiness gate.
- **Lesson 2/3 publication:** the fixture exists on main, has `ride_duration_seconds: 1440`, loads before the inline renderer in `api-experiment.html`, and supplies the paragraph's seconds text. These changes are on GitHub main, not merely local or on a separate branch.
- **Deployed version:** GitHub Pages workflow for the main commit above completed successfully. HTTP reads of [Cycle Signals](https://ronedawg69.github.io/api-experiment.html) and its [fixture](https://ronedawg69.github.io/fixtures/cycle-signals-fixture.js) confirmed the fixture include, renderer and `1440` value. The project gallery and Human Perspective return button were also published in that baseline.
- **Live-check limitation:** this session checked served source and deployment evidence, not rendered browser behavior or a fresh weather response. Prior controlled DOM/Chromium checks are historical evidence, not rerun results.
- **Checkout:** this workspace has no Git checkout; read-only Git inspection returned “not a git repository.” Local branch, HEAD, remotes, working tree and remote-tracking branches are unavailable. Source was read from GitHub at the baseline commit.
- **Open PRs at initial check:** none. This documentation cleanup is prepared on a separate branch for one reviewable PR; it does not merge itself or change deployed application code.
- **Implementation scope:** static HTML/CSS/browser JavaScript, public generic-London weather request and synthetic fixture; no backend, database, approved real-account connection or personal-data persistence. Private-provider access and dashboard visibility remain unresolved in the project brief.

This is the single current-status record. Other documents link here. Historical learning evidence is in [Lessons 1–3 history](history/lessons-1-3.md); publication terms are defined in the [codebook](CODEBOOK.md#git-and-publication-vocabulary).

## Technical evidence register

| Claim | Evidence and status | Next verification when needed |
| --- | --- | --- |
| Repository/main and open PRs | GitHub integration queried the main ref and open PRs on the checked date; exact baseline and initial PR result are above. | Re-check before relying on publication state. |
| Local checkout | Read-only `pwd`, Git repository/branch/HEAD/status/remotes/remote-branch commands; no checkout exists here. | Inspect an actual checkout if one is created or supplied. |
| Lesson 2 fixture publication | GitHub contents read at the baseline: fixture exists and contains the approved synthetic record. Earlier missing-commit claim is superseded; publication does not require the old local SHA to survive merging. | Verify file bytes on a new revision if they change. |
| Lesson 3 publication | GitHub contents read at the baseline confirms paragraph target, fixture-before-renderer order and seconds assignment. | Re-check after relevant source changes. |
| GitHub write/publication route | Supported authenticated integration created and merged prior PRs #20 and #21 in this session's visible record. Earlier fetch/push limitations do not describe this route. | Use the integration; verify each new PR and head/base. |
| Deployment | GitHub Actions workflow for the baseline completed successfully. | Check the workflow for a new merged version. |
| Live served source | HTTP reads confirmed Lesson 3 include, renderer and fixture value. No browser rendering or weather response was checked in this cleanup. | Browser/Network check when runtime behavior matters. |
| Historical Lesson 3 validation | 2026-09-23 record: unique HTML IDs, script order, syntax, controlled DOM output and Chromium screenshot. | Retain as historical; rerun only when a relevant change requires it. |
| Historical safety-rule and PR #11 claims | Earlier unverified hashes/PR assertions are not current evidence. Current AGENTS.md was read from GitHub; no historical merge/deployment claim is inferred from it. | Query an exact historical PR if its identity is needed. |
| Hosted checks / review requirements | Pages workflow was checked; broader branch-protection or required-check configuration was not inspected. | Inspect exact PR checks/requirements when merging. |

Evidence must identify the command/service/user report, checked date, repository, revision/PR/URL and limitation. A Markdown reference is not independent verification.

## Decision log

Older rows record the decision at its checkpoint, not current lesson or publication status. Superseded publication rows are retained for context; old gate details are in the learning archive; the no-quiz rule governs future lessons.

| Date (UTC) | Decision | Status |
| --- | --- | --- |
| 2026-09-07 | Preserve `api-experiment.html` during the documentation checkpoint. | Active |
| 2026-09-07 | Use synthetic fixtures before evaluating a live source. | Superseded; historical checkpoint only |
| 2026-09-07 | Treat real commute, rest, activity, location, and health-adjacent data as outside the repository privacy boundary. | Active |
| 2026-09-07 | Make no provider selection or current product/pricing claim without first-party verification. | Active |
| 2026-09-08 | Preserve the deployed request and states while translating WMO codes and seconds into readable display text. | Active |
| 2026-09-08 | Close Lesson 1 after the deployed PR #11 refinement, live request, visible states, and final teach-back were verified. | Complete |
| 2026-09-17 | Keep Phase A documentation-only until Ronan attempts the schema-purpose exercise and validates the schema and privacy choices. | Active |
| 2026-09-17 | Treat Strava, Google health data, and weather in Ronan's answer as intended signal categories, not approval to connect live providers or copy their available fields. | Active |
| 2026-09-17 | Use ride duration, prior-night sleep duration, and weather condition as candidate signals; do not infer tiredness or causation from sleep duration, and resolve weather condition versus severity before schema approval. | Active |
| 2026-09-17 | Store only an observable weather condition; exclude rider-dependent severity judgements such as “harsh.” | Superseded by the numeric WMO-code correction below |
| 2026-09-17 | Correct the weather candidate to numeric `weather_code`, matching the inspected request, validation, mapping, fallback, and rendering flow; withdraw the redundant manual-vocabulary exercise. | Active |
| 2026-09-17 | Accept Ronan's validation of all three candidate field meanings and units; keep schema approval blocked on numeric rules and privacy validation. | Superseded; historical checkpoint only |
| 2026-09-17 | Accept positive whole ride seconds, positive whole/decimal sleep hours, and recognized integer WMO codes as the normal-fixture numeric rules; preserve the existing unknown-code fallback for later controlled scenarios. | Active |
| 2026-09-17 | Accept Ronan's fictional `sample-01` values (`1440`, `7.9`, and WMO code `61`) as conforming to the approved numeric and privacy rules. | Active |
| 2026-09-17 | Accept Ronan's five-property `sample-01` JavaScript object as syntactically correct and schema-compliant. | Active |
| 2026-09-17 | Accept Ronan's one-item JavaScript array as a valid fixture collection representation. | Active |
| 2026-09-17 | Record the first named-declaration attempt; retain the valid array and semicolon, and correct the declaration order from `const = cycleSignalsFixture` to `const cycleSignalsFixture =`. | Active |
| 2026-09-17 | Accept Ronan's corrected declaration and write the formatted learner-authored array to `fixtures/cycle-signals-fixture.js` without loading it into the page. | Active |
| 2026-09-17 | Accept Ronan's record description and immediate WMO-code self-correction; close Lesson 2 with no remaining misconception. | Complete |
| 2026-09-17 | Verify through GitHub's public API that the repository is `ronedawg69/ronedawg69.github.io`, default branch `main` is at `991e47f`, commit `a271852` is absent, and no PR is open. | Superseded; historical checkpoint only |
| 2026-09-17 | Configure the verified repository as `origin` and attempt fetch/push without prompting for secrets; fetch returned HTTP 403 and push lacked credentials. Do not begin Lesson 3 until Lesson 2 is published. | Superseded; historical checkpoint only |

| 2026-09-24 (recorded here 2026-10-02) | Follow the 11-lesson plan in PROJECT_BRIEF.md; preserve Lessons 1–3 outcomes and build the remaining course through Lesson 11. | Active |
| 2026-09-24 (recorded here 2026-10-02) | Cloudflare Workers + D1 is the leading candidate, not an approved deployment or permanent free-cost guarantee; re-check account access, terms and privacy first. | Provisional |
| 2026-10-02 | Documentation cleanup only; preserve application code and archive detailed Lessons 1–3 history without changing its content. No Lesson 4 implementation. | Active for this session |
