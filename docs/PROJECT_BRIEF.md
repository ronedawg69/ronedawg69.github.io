# Cycle Signals project brief

**Status:** Lessons 1, 2, and 3 complete; Lesson 4 has not started
**Next lesson:** Lesson 4 builds the page's helpful loading, no-data, and error states. Codex explains the idea briefly and implements the feature in the same session.

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

Ronan wants to understand the concepts while Codex writes the code. Keep explanations short and concrete by default; explain the few ideas needed, implement the feature, then show it working. Ronan can ask for a deeper explanation at any point. Do not make him write code, pass a quiz, or complete repeated readiness gates before progress.

Each lesson ends with a useful project change pushed to a reviewable GitHub PR, with the result and its check briefly demonstrated. Tell Ronan when the PR is ready for review and merge. A lesson may take another session only if a real technical dependency or Ronan's question requires it. Prefer playful, visible dashboard features; keep health data presentation neutral and avoid claims that one signal causes another.

## Remaining course: Lessons 4–11

The outcome is a working personal dashboard that combines ride data, sleep/activity summaries, and weather context. Codex implements the code. Ronan learns what each part does through short explanations and by seeing the finished feature. Real account connections depend on Ronan's account access and authorization; credentials stay out of GitHub and chat.

| Lesson | What we will build and learn | Tangible GitHub result |
| --- | --- | --- |
| 4. Make failure states helpful | Show what the page is doing when data are loading, absent, or temporarily unavailable. | A polished status panel with working loading, no-data, and error states, checked with controlled examples. |
| 5. Pick the connectors and home | Confirm the fields and conditions for Open-Meteo, Strava, and Fitbit; compare free server options and map the data path. | A short connector map in the repository. Cloudflare Workers + D1 is the leading no-cost candidate, subject to a final account/terms check; no billing is enabled. |
| 6. Add a tiny server | Learn that the browser asks our server for data while private tokens stay on the server. | A Worker endpoint returning a synthetic dashboard record, with a small smoke check and no live credentials. |
| 7. Bring in rides | See OAuth as a permission slip, then connect Strava for the minimum ride fields. | A working ride list with a fixture fallback. Requires Ronan's Strava app/account authorization; no secrets committed. |
| 8. Bring in sleep and activity | See how Fitbit permission scopes control data access; retrieve only agreed sleep/activity summaries. | A sleep/activity summary beside rides, with clear missing-data handling. Requires Fitbit account authorization; no sensitive records committed. |
| 9. Add weather context | Match ride days with weather using a broad location and explain how dates line up. | A joined ride/sleep/weather view with units, source labels, and honest gaps. |
| 10. Make it enjoyable to explore | Learn how a filter or chart changes the view, without suggesting cause and effect. | A finished dashboard with ride cards, simple comparisons, and a fun interaction. |
| 11. Check and publish | Learn what was checked, what remains private, and how the public page reaches the server. | A published dashboard plus a concise accessibility, privacy, and recovery checklist. Any account-only setup is handled directly by Ronan in the provider dashboard, never by sharing credentials in chat. |

Every lesson PR includes the working change, a short explanation of the key idea, and the check performed. If an account, access review, or provider decision blocks live data, the PR still delivers and tests the feature with fictional data; the blocker and the next user action are stated plainly.

## Scope and cost guardrails

- Open-Meteo is the existing public weather source. Strava and Fitbit are planned integrations to verify and authorize; they are not yet connected.
- Cloudflare Workers + D1 is the leading free server candidate from the current documentation check. The lesson verifies current terms and account requirements before deployment.
- Keep the prototype at $0. Do not activate billing or a paid tier without Ronan's explicit approval. Free quotas and plans can change.
- Use minimum necessary data, coarse weather location, no public ride routes, and no repository copies of real ride, sleep, or health records.
- Keep provider tokens server-side. Ask Ronan to enter any secrets directly into the chosen provider's secret settings, not into GitHub source or chat.

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

Open-Meteo documentation for the existing weather request was recorded in `docs/CODEBOOK.md`. First-party checks for Strava, Fitbit, Cloudflare Workers/D1, Vercel, and Supabase were recorded there on 2026-09-24. Treat service eligibility, free quotas, terms, and account access as subject to re-check before live integration.
