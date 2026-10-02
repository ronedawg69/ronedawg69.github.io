# Application tracker

## Current status

- **Checked on:** 2026-10-02 (UTC).
- **Repository/default branch:** [ronedawg69/ronedawg69.github.io](https://github.com/ronedawg69/ronedawg69.github.io), `main`.
- **Verified main:** `9eea29d8e76cf48e457badfe24c7a18c2e6010b7` (GitHub ref read before this documentation change). PR #24 teaching-rule records are merged; the separate Human Perspective update on main is preserved. Documentation cleanup [PR #22](https://github.com/ronedawg69/ronedawg69.github.io/pull/22) is merged. Lesson 3 fixture and seconds renderer are present at this baseline.
- **Lesson stage:** Lessons 1–3 outcomes preserved. Lesson 4 implementation and controlled checks complete; the brief explanation covers loading, absence, failure and recovery. A follow-up code walkthrough was delivered after Ronan reported insufficient teaching. The follow-up concept answers were assessed as correct on 2026-10-02; no corrective check is needed. No new misconception is inferred. Lesson 5 concepts were taught and answers assessed correctly; connector map and first-party checks complete on the lesson branch, awaiting PR review/merge. Lesson 6 has not started.
- **Lesson 4 publication:** [PR #23](https://github.com/ronedawg69/ronedawg69.github.io/pull/23) verified closed and merged into `main` at `126794d0e04fee482dfd08c7f2e769a1ae5ba332`. No further merge action is needed for that PR.
- **Deployed baseline:** The previously checked GitHub Pages workflow for Lesson 4 commit `126794d0e04fee482dfd08c7f2e769a1ae5ba332` completed successfully. This is the last independently checked deployment here; deployment of the newer main revision has not been checked in this lesson. Earlier HTTP verification confirmed the served scenario selector and timeout code. Ronan reported trying the scenarios; this is user-reported behavior, not an independent browser audit.
- **Local validation:** `node tests/lesson4-states.cjs` passed against the Lesson 4 application/test bytes. Tests execute the actual inline JavaScript with a controlled DOM and fictional responses; check ready/loading/empty/error, malformed or missing data, retry, stale-value clearing, delayed responses, weather independence, HTTP failure, invalid response and timeout.
- **Limitations:** Chromium is absent; its install download returned an invalid archive. No browser rendering, mobile layout or accessibility audit was completed. Semantic labels, live status regions, busy states and keyboard-native controls are implemented; independent browser layout/accessibility verification remains outstanding; Ronan's reported use is recorded separately.
- **Workspace:** no Git checkout exists here; read-only Git commands confirmed that local branch/HEAD/remotes/status are unavailable. Sources were fetched from GitHub at the verified baseline. Lesson 4 application/test changes are on main. This records update is a separate documentation PR, not automatically merged.
- **Scope:** static HTML/CSS/browser JavaScript; existing public generic-London weather request and invented fixture only. Lesson 4 adds a ride status panel, labelled fictional scenario previews, validation/retry and a weather timeout. No private account, server, storage, credential, billing or additional provider was introduced.

This is the single current-status record. Other documents link here. Learning outcomes are in [LEARNING_TRACKER.md](LEARNING_TRACKER.md); publication terms are defined in the [codebook](CODEBOOK.md#git-and-publication-vocabulary).

## Technical evidence register

| Claim | Evidence and status | Next verification when needed |
| --- | --- | --- |
| Repository/main and open PRs | GitHub integration queried the main ref and open PRs on the checked date; exact baseline and Lesson 4 PR identity are above. | Re-check before relying on publication state. |
| Local checkout | Read-only `pwd`, Git repository/branch/HEAD/status/remotes/remote-branch commands; no checkout exists here. | Inspect an actual checkout if one is created or supplied. |
| Lesson 2 fixture publication | GitHub contents read at the baseline: fixture exists and contains the approved synthetic record. Earlier missing-commit claim is superseded; publication does not require the old local SHA to survive merging. | Verify file bytes on a new revision if they change. |
| Lesson 3 publication | GitHub contents read at the baseline confirms the Lesson 3 paragraph, script order and seconds assignment. Lesson 4 changes loading to an independent script request, rendering after its load event. | Re-check after relevant source changes. |
| GitHub write/publication route | Supported authenticated integration verified merged PR #22 and created the Lesson 4 PR. Earlier fetch/push limitations do not describe this route. | Use the integration; verify each new PR and head/base. |
| Deployment | GitHub Actions workflow for the Lesson 4 revision completed successfully; newer main deployment not rechecked. | Check the workflow for a new merged version. |
| Live served source | Prior cleanup HTTP reads confirmed Lesson 3 include, renderer and fixture value. Later HTTP checks confirmed Lesson 4 served source; Ronan reported trying the scenarios on 2026-10-02. No independent browser audit. | Browser/Network check when runtime behavior matters. |
| Historical Lesson 3 validation | 2026-09-23 record: unique HTML IDs, script order, syntax, controlled DOM output and Chromium screenshot. | Retain as historical; rerun only when a relevant change requires it. |
| Historical safety-rule and PR #11 claims | Earlier unverified hashes/PR assertions are not current evidence. Current AGENTS.md was read from GitHub; no historical merge/deployment claim is inferred from it. | Query an exact historical PR if its identity is needed. |
| Hosted checks / review requirements | Pages workflow was checked; broader branch-protection or required-check configuration was not inspected. | Inspect exact PR checks/requirements when merging. |

Evidence must identify the command/service/user report, checked date, repository, revision/PR/URL and limitation. A Markdown reference is not independent verification.

## Decision log

Older rows record the decision at its checkpoint, not current lesson or publication status. Superseded publication rows are retained for context; old gate details are in the learning archive; the user-requested concept checks on 2026-10-02 supersede the optional/no-quiz rule for future lesson execution.

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
| 2026-10-02 | Documentation cleanup only; preserve application code and archive detailed Lessons 1–3 history without changing its content. No Lesson 4 implementation. | Completed historical session |
| 2026-10-02 | Lesson 4 loads fictional ride data independently of weather, rejects invalid signals, distinguishes empty from failure, clears stale values and supplies explicit recovery. Scenario previews are labelled as fictional. | Merged and deployed; see current status |
| 2026-10-02 | Teach, ask focused concept questions, wait for assessed answers, then implement; maintain records proactively after verified changes. No forced coding exercises or generic readiness prompts. | Active; supersedes optional/no-quiz rule |

## Lesson 5 evidence

GitHub integration verified main and the lesson branch on 2026-10-02. They diverged by five documentation commits and one main commit changing only `human-perspective.html`. The lesson commit uses main's tree plus lesson documentation and preserves both parents, retaining that independent application change without editing it. No open PR existed before this lesson PR was created.

[CONNECTOR_MAP.md](CONNECTOR_MAP.md) records minimum candidate fields, boundaries, hosting alternatives, unresolved retention/access choices and provider blockers. First-party checks are dated in the codebook; actual answers are in the learning tracker. Documentation consistency and the changed-file scope are checked; no application test or deployment is claimed for this docs-only lesson.

Lesson 5 publication: reviewable PR on `codex/lesson-5-connectors` targeting `main`; not merged or deployed. Exact hosted identity will be linked after creation.
