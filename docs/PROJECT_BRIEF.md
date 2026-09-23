# Cycle Signals project brief

**Status:** Lessons 1, 2, and 3 complete; Lesson 4 has not started
**Current gate:** Explain Lesson 4 and get Ronan's readiness confirmation before beginning a failure-state exercise or changing application code.

## Purpose

Cycle Signals is a small static website used to learn how a web application can combine weather with fictional cycling and sleep signals. The teaching goal is for Ronan to understand each layer before adding the next one.

## Current project state

- `index.html` is the main site; `projects.html` is a project gallery; `api-experiment.html` is the Cycle Signals page.
- The site uses HTML, CSS, and browser JavaScript. It has no package manifest, build step, backend, database, or automated test suite.
- The Cycle Signals page requests public weather data and loads `fixtures/cycle-signals-fixture.js` before its inline script to render the synthetic ride duration as `1440 seconds`.
- Lesson 2 documentation and fixture were merged into `main` by PR #14 on 2026-09-17. See `docs/APPLICATION_TRACKER.md` for the latest GitHub verification.
- There is no approved personal-data integration, persistence, analytics, or paid service.

## Provisional architecture

This is a direction for discussion, not an approved implementation.

1. Keep the existing static site as the presentation layer.
2. Use synthetic fixtures for deterministic, private, no-cost learning.
3. Add browser-side data handling only after the fixture model is understood.
4. If a public, credential-free source is selected, request only coarse data needed for the lesson.
5. If a future source needs credentials or receives sensitive inputs, use a minimal server-side adapter with secrets kept in environment variables.
6. Keep personal observations local by default. Any persistence or analytics needs a separate privacy review and explicit approval.

Open-Meteo is selected only for Lesson 1's generic public weather request. No provider is selected for later private-data ingestion, storage, or automation.

## How lessons should run

Each lesson should stay anchored to its outcome: explain the necessary ideas together, apply them in one practical task, and check the finished result once. Use a smaller example when it helps, but do not turn every new word or line of code into a separate exercise. Pause for more teaching when Ronan asks or when his attempt reveals a real gap.

## Curriculum and gates

| Lesson | What you will do | Done when |
| --- | --- | --- |
| 1. Data and trust boundaries | Understand how the weather request works, how to check its result, and what belongs in the browser or server. | Explain the main data and safety boundaries. |
| 2. Shape a synthetic dataset | Choose a few fictional signals, define what they mean, and create the fixture. | The fixture follows the agreed structure and uses invented data. |
| 3. Render one signal | Read one value from the fixture and show it in the page. | The value appears with a clear label and unit, and you can describe the flow. |
| 4. Handle failure | Show an honest page state when data is loading, missing, or unavailable. | The page communicates the situation without showing made-up data as real. |
| 5. Evaluate a live source | Check an outside data source and what using it would mean. | A source is chosen only after its data, terms, limits, and cost are checked and approved. |
| 6. Connect safely | Add only an approved connection, keeping secrets out of browser code. | The data flow, privacy, and cost controls are reviewed. |
| 7. Compare signals responsibly | Explore how signals vary together without claiming one caused another. | The comparison is presented accurately and without health claims. |
| 8. Harden and publish | Check accessibility, reliability, operating limits, and recovery steps before release. | The release checks and shutoff or rollback plan are understood. |
|
No lesson phase is active. Lesson 3 is complete; the next session must explain Lesson 4 and obtain readiness before beginning its exercise.

## Planning estimates

These are rough learning-effort estimates, not promises or provider prices.

- Lessons 1–4: about 4–8 focused sessions.
- Provider evaluation and safe integration: about 2–5 sessions after a source is chosen.
- Hardening and publish review: about 1–3 sessions.
- Fixture-first prototype: intended infrastructure spend of **$0**.
- Live-source spend: **unknown until verified**. Keep the project at $0 unless Ronan explicitly approves a documented cap and shutoff path.

## Risks and controls

| Risk | Control |
| --- | --- |
| A credential leaks through client code or Git history | Use no credential during fixture lessons; later keep secrets behind a server boundary. |
| Personal routines or health-adjacent data identify someone | Use synthetic/coarse data, collect the minimum, and keep personal inputs local by default. |
| Unexpected metered usage | Verify first-party terms and define caps, caching, rate limits, and a shutoff path before activation. |
| Provider claims become outdated | Date and link first-party checks in the codebook; mark unverified claims clearly. |
| Correlation is presented as health or causal advice | Use neutral educational language and distinguish correlation from causation. |
| Scope outruns learning | Work through one lesson and phase at a time. |

## Privacy boundary

Repository-safe material includes source code, synthetic fixtures, coarse fictional examples, schemas, and non-sensitive documentation. Keep credentials, precise personal locations, real routes, real ride/sleep/health records, and identifiable timestamps out of the repository. Document external data flows before enabling an integration.

## Source-verification status

First-party Open-Meteo details relevant to Lesson 1 were recorded in `docs/CODEBOOK.md` on 2026-09-07. Later providers and current hosting cost conditions have not been verified.
