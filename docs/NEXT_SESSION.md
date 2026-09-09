# Next session handoff

> Review note (2026-09-09): This file was reviewed from an uploaded snapshot, without the live repository, GitHub state, application source, or test output. Historical implementation, PR, deployment and test claims below are retained as prior records, not independently verified current facts. Follow `AGENTS.md` before relying on them. Lesson progress is preserved; technical uncertainty does not reset completed learning.

## Stop point

The prior learning record marks Lesson 1 Phase B and Lesson 1 complete. Earlier notes attribute the weather-card readability refinement to PR #11 and report it merged and deployed; the PR identity and release state have not been verified in this review. Ronan verified the live request and
visible weather condition through the browser Network panel, explained the honest
error state and browser/server secret boundary, and confirmed readiness to finish
Lesson 1. Lesson 2 has not started.

## Single next action

Codex should first run the repository evidence check in `AGENTS.md` and briefly report local state separately from hosted state. Check whether these revised instructions are present in the actual checkout; do not assume this file review published them. Reconcile relevant technical facts in `docs/APPLICATION_TRACKER.md`. No user setup action is required merely to perform available read-only checks.

Then resume the preserved learning stop point: explain Lesson 2 Phase A in plain language and ask Ronan whether he is ready. Do not draft a schema or start application work during that explanation. An unavailable PR query does not block the explanation; pause only work that actually depends on unverified repository changes.

## Opening Lesson 2

1. Explain the purpose and boundaries of Lesson 2 Phase A without drafting a schema.
2. Ask Ronan whether he is ready to begin Phase A.
3. Record his answer before activating the phase or doing any exercise or
   application work.

## Guardrails for the next session

- No credentials or credential-like examples.
- No precise personal locations or real ride, rest, activity, or health records.
- No provider product, price, quota, privacy, or terms claim unless it is verified against a current first-party source and logged in the codebook.
- No spending or paid-service activation without explicit approval and documented limits.
- One lesson phase at a time; no Lesson 2 phase is active yet.

## Recorded context to preserve (verify technical state when needed)

- Last recorded branch: `work`; verify the actual checkout before repository work.
- Architecture: static client calling Open-Meteo directly for the credential-free
  Lesson 1 request; a server-side boundary is conditional for later private data.
- Intended fixture-stage infrastructure spend: $0; future live-source cost is unknown and unverified.
- Open-Meteo is selected and verified only for Lesson 1's public weather request;
  later private-data providers remain undecided.
