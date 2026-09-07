# Collaboration rules

These rules apply to the entire repository and to future sessions.

## Teaching

- Treat Ronan as the learner and explain new concepts in plain language before using them.
- Work in small, reviewable steps. State what will change, why it matters, and how to check it.
- Ask short comprehension questions at the end of each lesson. Record the learner's answers and any misconceptions in `docs/LEARNING_TRACKER.md` before starting the next lesson.
- Do not complete an exercise on Ronan's behalf until he has attempted it, unless he explicitly asks for a worked example.

## One lesson at a time

- Keep exactly one lesson phase active. Do not begin the next phase or lesson until Ronan answers the current comprehension questions and confirms he is ready.
- Keep `docs/NEXT_SESSION.md` aligned with the single next action and `docs/LEARNING_TRACKER.md` aligned with current progress.
- Lesson 1 Phase B is active. Ronan confirmed readiness. Official Open-Meteo
  forecast and usage-condition documentation was supplied from Ronan's browser on
  2026-09-07. The first weather card is implemented and passes static and mocked
  success/failure checks. Do not mark Lesson 1 complete or begin Lesson 2 until the
  request and visible states are verified on the live GitHub Pages site.

## Privacy and data

- Never commit credentials, API keys, tokens, secrets, precise personal locations, or real ride or health records.
- Use clearly fictional, coarse, or synthetic examples and fixtures. Do not put sensitive values in client-side code, logs, screenshots, issues, documentation, or commit messages.
- Treat commute patterns, timestamps, sleep, activity, and health-adjacent observations as sensitive even when a provider does not label them that way.
- Before adding an external service, document what leaves the browser, where it goes, retention assumptions, and the minimum data required. Prefer data minimization and local processing.
- If a secret is ever needed, stop and design a server-side or serverless boundary plus an environment-variable workflow; never paste the secret into chat or repository files.

## Cost and source verification

- Default to a no-cost, fixture-first learning path. Do not activate billing, create paid infrastructure, or recommend a paid tier without Ronan's explicit approval.
- Before making claims about a provider's current product, quota, terms, privacy, or price, verify them against current first-party sources and record the source and verification date in `docs/CODEBOOK.md`.
- Label unverified assumptions and planning estimates as such. Do not present estimates as provider quotes or guaranteed costs.
- Design usage caps, caching, request limits, and a shutoff path before connecting a metered service.

## Change control

- Keep lesson work documentation-only until the active gate is cleared.
- Do not change `api-experiment.html` while Lesson 1 Phase A is waiting for answers.
- Update the project brief, application tracker, learning tracker, codebook, and next-session handoff when a decision changes their recorded state.
