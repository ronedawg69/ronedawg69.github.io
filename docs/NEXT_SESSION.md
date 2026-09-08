# Next session handoff

## Stop point

Lesson 1 Phase B implementation and testing are active. On 2026-09-07, Ronan
supplied current official Open-Meteo forecast, pricing, terms, privacy, and licence
information. `api-experiment.html` now contains the first real weather card with
loading, validated success, honest failure, retry, weather-time, last-updated, and
linked attribution states. Static checks and mocked success/HTTP-failure tests pass.
Ronan confirmed that the initial live card works and displays values. On
2026-09-08, he supplied the official WMO table and correctly explained both the
seconds-to-minutes calculation and JavaScript translation. The refinement now
shows a readable condition and minutes locally. It still needs deployment, then a
Network trace and failure-state check.

## Single next action

Get the refinement commit onto `main` and verify that the live card shows a readable
condition and `15 minutes`. Then guide Ronan through tracing the raw weather code
and interval in the successful Network JSON and deliberately testing the failure
state. Do not begin Lesson 2.

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
