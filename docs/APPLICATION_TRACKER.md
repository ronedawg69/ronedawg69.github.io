# Application tracker

## Current status

- **Checked on:** 2026-10-03, GitHub integration, clean cloned checkout and HTTP endpoint check.
- **Repository/default branch:** `ronedawg69/ronedawg69.github.io`, `main`; verified baseline `e11bd79239ca55dfbbef8688c0dcf04e480ecc27`.
- **Lesson stage:** Lesson 6 active. Synthetic server is hosted; dashboard connection changes are prepared on `codex/lesson-6-hosted-connection`. Lesson 7 has not started.
- **Publication:** baseline is on GitHub main. This branch adds the hosted endpoint selection, exact-origin CORS and enabled workers.dev configuration; it must be reviewed and merged before these changes are live.
- **Validation:** Lesson 4 and Lesson 6 controlled checks passed, including hosted/local endpoint selection, exact-origin CORS, server rendering, errors, empty, timeout, retry and stale replies. These checks do not establish live browser behavior.
- **Deployment evidence:** Ronan's Cloudflare screenshot shows successful build `45f8b1ad`, version `2153b53c-f2a0-4ac4-9f47-0dd51eff1060`. Ronan enabled the Production URL and reported the expected JSON. Independent HTTP GET to `https://cycle-signals-synthetic.ronan-d-keogh.workers.dev/api/dashboard` returned 200, JSON with the expected invented record and `Cache-Control: no-store`. The screenshot does not identify the full source commit.
- **Outstanding:** merge this connection change, verify both Pages and Worker deployment, then test the live dashboard selector end to end. Existing hosted Worker has no CORS permission yet; direct URL success does not prove browser fetch success.
- **Privacy:** public invented records only; no real accounts, login, private credentials or personal records. CORS is browser read permission, not authorization. Real-data access remains blocked until server-side access controls and provider connection work are implemented.
- **Workspace:** clean checkout cloned from origin at the verified baseline, then separate feature branch created; no existing user work overwritten.

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

Lesson 5 publication: [PR #25](https://github.com/ronedawg69/ronedawg69.github.io/pull/25), verified merged into `main` on 2026-10-03 (merge occurred 2026-10-02). Head `codex/lesson-5-connectors` at `08372720cc91754fe1e63b68da86c8262b65df32`, merge `fa62545f8479958670342e774dc6ded3feaf8311`. Earlier awaiting-merge status is superseded.

## Lesson 6 evidence: 2026-10-03

Local HTTP smoke check started `node server/dev.mjs`, requested the actual `/api/dashboard` endpoint, verified 200, no-store and the approved synthetic values, and fetched the dashboard HTML. It passed. An earlier attempt found no running process; starting and querying within one process resolved it. This is local HTTP evidence, not hosted or visual-browser evidence.

Publication: branch `codex/lesson-6-tiny-server`, base `main` at `f0c23c46e3ed73228da17569a33b4d0e0f9df005`. [PR #26](https://github.com/ronedawg69/ronedawg69.github.io/pull/26) verified open and mergeable, head `codex/lesson-6-tiny-server` at implementation commit `267b8b83fa1fbc6f2f94a602e19fc488929c4006`, base `main`. A subsequent documentation-only commit records this identity. Ready for review and merge; not merged or deployed.

## Project rooms update: 2026-10-03

Replace root `projects.html` with Ronan's supplied Project Rooms page. Replace preview-only opening HTML tags with `<!doctype html>` and `<html lang="en">` in projects and Human Perspective. Human Perspective content after its opening tag is preserved exactly. GitHub main already uses the exact filenames `api-experiment.html`, `human-perspective.html` and `index.html`; no rename required. All three rooms links resolve to files in the same root directory. Validation: complete documents and doctype/header checks passed; linked paths verified against GitHub's tree. No independent visual browser check or deployment evidence is claimed here. This maintenance request does not advance the lesson.
