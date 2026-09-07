# Learning tracker

## Current position

- **Learner:** Ronan
- **Lesson:** 1 — First real London weather request
- **Phase:** B — implementation and testing
- **Status:** Weather card implemented and locally checked; live verification pending
- **Rule:** Do not mark Lesson 1 complete or begin Lesson 2 until Ronan verifies the live request and visible states.

## Lesson 1 objective

Ronan should be able to explain:

1. what the browser can safely contain;
2. why a browser-delivered credential is not secret;
3. why synthetic fixtures are the safest first data source;
4. when a server-side boundary is required; and
5. why ride, location, rest, and health-adjacent observations deserve data minimization.

## Supplementary trust-boundary questions

1. If JavaScript in a web page contains an API key, who can inspect it, and is it still a secret?
2. Why should Cycle Signals begin with synthetic fixtures instead of real ride, location, rest, or health-adjacent records?
3. In your own words, what job would a server-side proxy perform if a future API requires a credential?
4. What must we verify before relying on a provider's product, quota, privacy terms, or pricing?
5. What is the one action we must **not** take before this phase is complete?

## Answer record

On 2026-09-07, Ronan answered the three weather-request questions that were
actually taught. A later response also attempted five supplementary trust-boundary
questions even though those concepts had not first been taught in the lesson. The
extra gate was a tutoring error, not a learner error, and no further Phase A quiz
is required.

### Weather-request answers received

| Question | Ronan's answer | Assessment / misconception | Follow-up |
| --- | --- | --- | --- |
| How can we tell whether `temperature = 15` is live data? | Inspect the HTML to see whether it is hard-coded or fetched by JavaScript. | Good starting method. Also verify the browser's Network response and trace the displayed value to that response; JavaScript can contain hard-coded values too. | Demonstrate during the weather implementation lesson. |
| Why check whether a request succeeded? | A response may be incomplete or incorrect and must be validated. | Correct. Also distinguish an HTTP error status from valid JSON with missing or invalid fields. | Demonstrate `response.ok` and field validation later. |
| What should visitors see on failure? | An error message; no dummy data. | Correct. A failure state must not masquerade as live data. | Preserve as a success criterion. |

### Supplementary answers received

| Question | Ronan's answer | Assessment / misconception | Follow-up |
| --- | --- | --- | --- |
| 1 | Anyone who can see the HTML source can inspect the key, so it is not secret. | Correct. Browser JavaScript and its network requests are inspectable by visitors. | Reinforce when credentials become relevant. |
| 2 | Anybody can access a public repository. | Correct. Also, a deployed public page sends its client-side files to every visitor, even if the repository itself were private. | Reinforce at the private-backend boundary. |
| 3 | A server protects an API key that may incur usage fees if stolen. | Substantially correct. The server also makes the provider request and returns only the safe result the browser needs. | Teach fully before the first credentialed integration. |
| 4 | Verify that provider details fall within the required scope. | Good principle. Specifically verify current eligibility, fields, authentication, quotas, price, privacy, retention, and terms using official sources. | Apply during provider evaluation. |
| 5 | Review security rules when gathering information from external sources. | Sensible security practice. The intended answer was “do not change the application before the Phase A gate is cleared,” but that procedural answer was not taught and should not count as a misconception. | No corrective exercise required. |

## Provisional curriculum progress

| Lesson | Status |
| --- | --- |
| 1. First real London weather request | In progress — Phase B implementation complete; live verification pending |
| 2. Shape a synthetic dataset | Not started |
| 3. Render one signal | Not started |
| 4. Handle failure | Not started |
| 5. Evaluate a live source | Not started |
| 6. Connect safely | Not started |
| 7. Compare signals responsibly | Not started |
| 8. Harden and publish | Not started |
