# Next session handoff

## Stop point

Lesson 1 Phase B implementation and testing are active. The initial Open-Meteo
weather card is deployed and working. The small readability refinement now names
known WMO conditions, reports unknown codes honestly, and displays the API interval
in minutes. The existing request, states, timestamps, attribution, privacy boundary,
and shutoff remain intact. Local static and mocked-state checks pass; the refinement
is not yet verified on GitHub Pages.

## Single next action

Merge and deploy the refinement, then guide Ronan through one browser verification
of the readable weather condition and minute interval while confirming the preserved
states and attribution. Do not begin Lesson 2.

## After the updated page is available

1. Open `api-experiment.html` through the GitHub Pages URL after deployment.
2. Confirm the named condition, minute interval, timestamps, and linked attribution.
3. Use browser developer tools to trace the displayed condition and interval to the
   successful JSON response.
4. Reconfirm the retry/failure state without changing the permanent shutoff setting.
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
- Open-Meteo is selected and verified only for Lesson 1's public weather request;
  later private-data providers remain undecided.
