# Cycle Signals project brief

**Status:** Lessons 1 and 2 complete; Lesson 3 is active  
**Current gate:** Ronan confirmed readiness to begin Lesson 3 on 2026-09-23. The opening and first exercise are underway; do not change presentation code until he attempts the exercise.

## Purpose

Cycle Signals is a small static website used to learn how a web application can combine weather with fictional cycling and sleep signals. The teaching goal is for Ronan to understand each layer before adding the next one.

## Current project state

- `index.html` is the main site; `projects.html` is a project gallery; `api-experiment.html` is the Cycle Signals page.
- The site uses HTML, CSS, and browser JavaScript. It has no package manifest, build step, backend, database, or automated test suite.
- The Cycle Signals page requests public weather data. The synthetic fixture is checked in at `fixtures/cycle-signals-fixture.js`, but the page does not load or render it yet.
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

## Curriculum and gates

| Lesson | Outcome | Gate |
| --- | --- | --- |
| 1. Data and trust boundaries | Complete: understand live-response checks, honest errors, and browser/server request boundaries. | Complete |
| 2. Shape a synthetic dataset | Complete: define, write, and explain a fictional fixture and its units. | Complete; fixture and notes are merged into `main`. |
| 3. Render one signal | Display one fixture-derived value accessibly. | Explain the lesson and get readiness confirmation before presentation work; Ronan explains the data flow and tests it locally. |
| 4. Handle failure | Add loading, empty, and error states with controlled fixture scenarios. | Ronan predicts each state. |
| 5. Evaluate a live source | Check first-party documentation, data flow, terms, limits, and cost controls. | Record an explicit provider choice and approval. |
| 6. Connect safely | Add the smallest approved integration, with a proxy if credentials or sensitive data require it. | Privacy and spend checks pass. |
| 7. Compare signals responsibly | Explore correlations without implying causation or health conclusions. | Review language and visualizations. |
| 8. Harden and publish | Add appropriate tests, accessibility checks, operational limits, and rollback/shutoff steps. | Complete a final teach-back. |

Lesson 3 is active. The fixture remains unloaded. Ronan is first identifying the HTML element that JavaScript can later fill; no application code has changed.

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
