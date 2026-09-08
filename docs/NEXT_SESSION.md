# Next session handoff

## Stop point

Lesson 1 Phase B and Lesson 1 are complete. PR #11's weather-card readability
refinement is merged, deployed, and working. Ronan verified the live request and
visible weather condition through the browser Network panel, explained the honest
error state and browser/server secret boundary, and confirmed readiness to finish
Lesson 1. Lesson 2 has not started.

## Single next action

Explain Lesson 2 Phase A in plain language, then ask Ronan whether he is ready to
begin it. Do not start a Lesson 2 schema or any application work during that
explanation and readiness check.

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

## Current facts to preserve

- Branch: `work`.
- Architecture: static client calling Open-Meteo directly for the credential-free
  Lesson 1 request; a server-side boundary is conditional for later private data.
- Intended fixture-stage infrastructure spend: $0; future live-source cost is unknown and unverified.
- Open-Meteo is selected and verified only for Lesson 1's public weather request;
  later private-data providers remain undecided.
