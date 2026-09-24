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

Keep explanations concise by default. Teach the ideas needed for the task together, then use them in one practical exercise. Ronan can ask for more detail whenever he wants it.

Every lesson session must leave a tangible result he can see, use, or review: a working feature, a tested change, or a concise decision/design artifact if coding is blocked or not yet appropriate. Do not end with explanation or a quiz alone. Say what the result is and how it was checked.

## Course plan

Lessons 1–3 are complete. The remaining plan aims to deliver the personal cycling dashboard described by this project, while treating Strava and Fitbit as candidates to verify rather than approved connections. Keep secrets server-side; do not add paid services without an explicit cost decision.

| Lesson | Practical goal | Tangible result |
| --- | --- | --- |
| 1. Data and trust boundaries | Understand the weather request and what belongs in the browser. | Working weather card and a check of the returned value. |
| 2. Shape a synthetic dataset | Define the fictional ride, sleep, and weather signals. | Agreed data shape and fixture file. |
| 3. Render one signal | Show a fixture value in the page. | Page displays fictional ride duration as `1440 seconds`. |
| 4. Handle failure | Explain loading, missing, or unavailable data clearly. | Tested page states for loading, no data, and an unavailable source. |
| 5. Choose data sources | Check which source can provide each field and its access, privacy, and cost. | Short source-and-fields decision record, with unknowns marked. |
| 6. Build a safe connection layer | Keep secrets out of browser code and test with sample data. | Working local endpoint returning a synthetic dashboard record, plus a secret/cost plan. |
| 7. Connect ride data | Verify and connect the chosen ride source. | A real ride shown in the page, with credentials kept server-side. |
| 8. Connect sleep data | Verify and connect the chosen sleep source. | A selected sleep/calorie summary shown beside a ride, with credentials kept server-side. |
| 9. Match signals | Align rides with sleep and historical weather while handling gaps honestly. | Joined ride-and-context table using a broad location. |
| 10. Build the dashboard | Make rides and comparisons easy to explore without implying cause. | Usable dashboard view with ride list and comparison chart(s). |
| 11. Verify and publish | Check privacy, accessibility, reliability, and recovery. | Published site and a short checklist of what was tested. |

No lesson phase is active. Lesson 3 is complete; the next session is Lesson 4.

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
