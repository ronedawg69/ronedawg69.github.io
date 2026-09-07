# Next session handoff

## Stop point

Lesson 1 Phase B implementation and testing are active. On 2026-09-07, Ronan
supplied current official Open-Meteo forecast, pricing, terms, privacy, and licence
information. `api-experiment.html` now contains the first real weather card with
loading, validated success, honest failure, retry, weather-time, last-updated, and
linked attribution states. Static checks and mocked success/HTTP-failure tests pass.
The real request and rendered result are not yet verified on GitHub Pages.

## Single next action

Get this commit into a GitHub branch and provide the preview or live Pages URL.
Then guide Ronan through one browser verification: confirm the visible values and
attribution, inspect the successful Network response, and deliberately test the
failure state. Do not begin Lesson 2.

## After the updated page is available

1. Open `api-experiment.html` through the GitHub Pages URL.
2. Confirm the real values and linked attribution are visible.
3. Use browser developer tools to trace a displayed value to the successful JSON
   response.
4. Temporarily test the documented shutoff or an offline failure, then restore it.
5. Record the results, finish the Lesson 1 recap, and stop before Lesson 2.

## Guardrails for the next session

- No credentials or credential-like examples.
- No precise personal locations or real ride, rest, activity, or health records.
- No provider product, price, quota, privacy, or terms claim unless it is verified against a current first-party source and logged in the codebook.
- No spending or paid-service activation without explicit approval and documented limits.
- One lesson phase at a time.

## Current facts to preserve

- Branch: `work`.
- Architecture: static client calling Open-Meteo directly for the credential-free
  Lesson 1 request; a server-side boundary is conditional for later private data.
- Intended fixture-stage infrastructure spend: $0; future live-source cost is unknown and unverified.
- Provider selection and source verification: not started.
