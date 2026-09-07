# Cycle Signals project brief

**Status:** Discovery and teaching setup  
**Current branch:** `work`  
**Current gate:** Lesson 1, Phase A is waiting for Ronan's comprehension answers. No application code change is authorized yet.

## Purpose

Cycle Signals is currently a static concept page for learning how a small web application can combine weather and synthetic ride/rest signals. The teaching goal is more important than shipping quickly: Ronan should understand each layer before the next one is added.

## Repository assessment

- The repository is a small, dependency-free static website.
- `index.html` is the main site, `projects.html` is a project-room gallery, and `api-experiment.html` is the Cycle Signals placeholder.
- There is no package manifest, build step, automated test suite, application backend, data store, or continuous-integration configuration in the current tree.
- The current page contains presentation-only HTML and CSS. It makes no network requests and stores no data.
- The repository has no configured Git remote in the current environment.

## Provisional architecture

This is a direction for discussion, not an approved implementation.

1. Keep the existing static HTML/CSS/JavaScript site as the presentation layer.
2. Begin with checked-in synthetic fixtures so lessons are deterministic, private, and free.
3. Add a small browser-side data-normalization module only after the fixture model is understood.
4. If a public, credential-free source is later selected, fetch only coarse weather observations needed for the exercise.
5. If any selected source requires a credential or receives sensitive inputs, place the request behind a minimal server-side/serverless adapter that reads secrets from environment variables. Never expose secrets in browser code.
6. Keep personal observations local by default; do not add persistence or analytics without a separate privacy review and explicit approval.

No provider or hosting product is selected. Product availability, pricing, quotas, data handling, and terms remain unverified.

## Curriculum and gates

| Lesson | Outcome | Gate |
| --- | --- | --- |
| 1. Data and trust boundaries | Explain client/server roles, API requests, secrets, sensitive data, and why fixtures come first. | Phase A questions must be answered before any code change. |
| 2. Shape a synthetic dataset | Read and describe a minimal fictional weather/ride/rest fixture and its units. | Ronan validates the schema and privacy choices. |
| 3. Render one signal | Use accessible HTML and JavaScript to display one fixture-derived value. | Ronan explains the data flow and tests it locally. |
| 4. Handle failure | Add loading, empty, and error states using controlled fixture scenarios. | Ronan can predict each state. |
| 5. Evaluate a live source | Verify first-party documentation, data flow, terms, limits, and cost controls. | Explicit provider choice and approval are recorded. |
| 6. Connect safely | Add the smallest approved integration, with a proxy if secrets or sensitive inputs require it. | Privacy and spend checks pass. |
| 7. Compare signals responsibly | Explore correlations without implying causation or health conclusions. | Language and visualization review pass. |
| 8. Harden and publish | Add tests, accessibility checks, operational limits, and a rollback/shutoff procedure. | Ronan completes a final teach-back. |

Only one lesson is active at a time. Later lessons are a provisional roadmap, not permission to begin them.

## Planning estimates

These are rough learning-effort estimates, not promises or provider prices.

- Lessons 1–4: about 4–8 focused sessions, depending on comprehension and practice time.
- Provider evaluation and safe integration: about 2–5 sessions after a source is chosen.
- Hardening and publish review: about 1–3 sessions.
- Fixture-first prototype: intended infrastructure spend of **$0**.
- Live-source spend: **unknown until verified**; the project should remain at $0 unless Ronan explicitly approves a documented cap and shutoff path.

## Risks and controls

| Risk | Control |
| --- | --- |
| A credential leaks through client code or Git history | Use no credential during fixture lessons; later use environment variables behind a server boundary. |
| Personal routines or health-adjacent data identify someone | Use synthetic/coarse data, collect the minimum, and keep personal inputs local by default. |
| Unexpected metered usage | Verify first-party terms, set a budget/cap where supported, cache, rate-limit, and document shutoff before activation. |
| A provider claim becomes outdated | Date and link first-party verification in the codebook; label all current claims unverified until then. |
| Correlation is presented as health or causal advice | Use neutral educational language and explicitly distinguish correlation from causation. |
| Scope outruns learning | Enforce one lesson and one phase at a time. |

## Privacy boundary

Repository-safe material includes source code, synthetic fixtures, coarse fictional examples, schemas, and non-sensitive documentation. Outside the repository boundary are credentials, precise personal locations, real routes, real ride/rest/health records, and identifiable timestamps. External transmission of even synthetic data must be documented before an integration is enabled.

## Source-verification status

No provider has been selected and no provider product, price, quota, privacy, or terms claim has been verified. Current architecture and cost statements are internal planning assumptions only.
