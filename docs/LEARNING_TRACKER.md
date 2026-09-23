# Learning tracker

> Review note (2026-09-09): The recorded answers, assessments, quiz exemption and Lesson 1 completion below are preserved from the supplied tracker. They establish the recorded learning stop point, not current GitHub or deployment state. Follow `AGENTS.md` for technical verification and `docs/APPLICATION_TRACKER.md` for technical evidence. Do not reopen completed learning gates because publication is unverified.

## Current position

- **Learner:** Ronan
- **Lesson:** Lesson 3 — Render one signal
- **Phase:** Opening and first exercise; no application code changed
- **Status:** Lessons 1 and 2 complete. Ronan asked to start Lesson 3 on 2026-09-23, confirming readiness. The first HTML-target exercise is awaiting his attempt.
- **Rule:** Explain the data-to-page flow, then let Ronan attempt the first exercise before changing application code.

## Lesson 2 opening record

On 2026-09-17, Ronan received the Phase A explanation: a dataset is a collection
of records, while a schema defines the shared fields, meanings, value rules, and
units for those records. The explanation covered why consistent meaning matters
and established the synthetic-data, data-minimization, privacy, credential, and
no-cost boundaries. Ronan replied “Lets go,” confirming readiness to begin.

### Record-purpose exercise

On 2026-09-17, Ronan said one record should communicate “a combination of the
Strava data, google health data and weather data unified.” This establishes the
intended purpose: bring fictional cycling, health-adjacent, and weather signals
into one comparable observation.

The answer identifies the three intended signal categories. The refinement is
that “unified” does not mean copying every field offered by those named services.
For this fixture lesson it means choosing the minimum invented values that refer
to the same fictional period and can be compared safely. No live provider is
being connected or selected by this answer.

### Minimum-signal exercise

On 2026-09-17, Ronan selected:

1. ride length in seconds, to see how long a ride took;
2. hours slept the night before, to consider whether tiredness may be relevant;
3. weather condition, to consider whether conditions were harsh.

All three categories are represented and each signal has a purpose. “Ride length”
is refined to **ride duration** because seconds measure elapsed time rather than
distance. Sleep duration may be compared with other signals, but it cannot by
itself establish that sleep caused tiredness or a ride outcome. “Weather
condition” remains ambiguous: an observed condition and an interpreted severity
such as “harsh” are different meanings.

Candidate field names were initially recorded as `ride_duration_seconds`,
`sleep_duration_hours`, and `weather_condition`. The weather field was later
corrected to match the existing numeric WMO-code flow described below.

### Weather-meaning decision

On 2026-09-17, Ronan clarified that he does not intend to categorize weather
manually. Open-Meteo returns a numeric WMO weather code, and Cycle Signals already
maps that code to its human-readable condition. Inspection of
`api-experiment.html` confirmed that the request includes `weather_code`, numeric
validation includes that field, `describeWeatherCode` performs the existing
mapping with an unknown-code fallback, and rendering uses the mapped description.

The candidate fixture field is therefore `weather_code`, containing a synthetic
numeric WMO code. The readable condition remains derived display text rather than
duplicated fixture data. Asking Ronan to invent a separate controlled vocabulary
was a tutoring error that departed from Lesson 2's minimal-fixture plan; it was not
a learner misconception. The invented-vocabulary exercise is withdrawn.

No schema or application change is approved yet. Ronan next needs to validate the
three corrected candidate field definitions and units, followed by their numeric
rules and privacy choices.

### Field-and-unit validation

On 2026-09-17, Ronan confirmed all three candidate definitions and units:

- `ride_duration_seconds` is elapsed fictional ride duration in seconds;
- `sleep_duration_hours` is fictional preceding-night sleep duration in hours;
- `weather_code` is a unitless numeric WMO code interpreted by the existing
  display mapping.

No misconception was recorded. This validates meaning and units, but it does not
yet approve the schema. Ronan must next decide the numeric rules: whether duration
values accept whole numbers or decimals, whether zero is meaningful, and whether
normal fixture records accept only WMO codes recognized by the existing mapping.
Privacy validation follows those decisions.

### Numeric-rule validation

On 2026-09-17, Ronan defined these rules:

- `ride_duration_seconds` accepts whole seconds only and must be greater than
  zero;
- `sleep_duration_hours` accepts whole or decimal hours and must be greater than
  zero;
- a normal fixture's `weather_code` must be an integer code recognized by the
  existing WMO mapping.

These rules are consistent with the validated meanings and units. The recognized
code rule applies to ordinary fixture records; it does not remove the
application's existing unknown-code fallback or prevent a later failure-handling
lesson from exercising that fallback deliberately. No misconception was
recorded.

The remaining Phase A checkpoint is privacy validation. Before schema approval,
Ronan must confirm that checked-in records are explicitly synthetic, use a
date-free fictional period, and contain no actual sleep, ride, timestamp, route,
or precise-location data.

### Privacy validation and Phase A closeout

On 2026-09-17, Ronan approved all five fixture privacy rules:

1. values are invented rather than altered copies of real observations;
2. `is_synthetic` is always `true`;
3. `period` uses a date-free fictional label such as `sample-01`;
4. records contain no actual sleep history, ride duration, route, commute
   pattern, timestamp, or precise location;
5. fictional weather codes are not paired with Ronan's real activity history.

This approval completes the Lesson 2 Phase A gate. The schema's purpose, fields,
meanings, units, numeric rules, WMO-code boundary, and privacy choices are now
validated. No fixture has been written and no application code has changed.
Phase B must be explained and Ronan must confirm readiness before fixture work
starts.

### Phase B opening

On 2026-09-17, Ronan received the Phase B explanation: turn the approved schema
into a small, fixed set of checked-in synthetic records; validate every record;
and read and describe the values and units. Phase B excludes real personal data,
live provider connections, duplicated WMO descriptions, and presentation changes.
Ronan replied “Okay lets go,” confirming readiness.

Phase B is now active. Before any fixture is written, Ronan's first exercise is to
choose fictional `ride_duration_seconds`, `sleep_duration_hours`, and a recognized
`weather_code` for `sample-01`. The fixed privacy fields are `period: sample-01`
and `is_synthetic: true`. Code syntax will be introduced only after the values
pass the approved schema rules.

### First-record value validation

On 2026-09-17, Ronan chose these fictional values for `sample-01`:

- `ride_duration_seconds: 1440`;
- `sleep_duration_hours: 7.9`;
- `weather_code: 61`.

All values pass the approved rules: `1440` is a positive whole number, `7.9` is a
positive decimal, and WMO code `61` is recognized by the existing application
mapping as “Slight rain.” Together with the fixed `period: sample-01` and
`is_synthetic: true` fields, the values comply with the approved privacy boundary.
No misconception was recorded.

The record has not been written into a fixture. Ronan must next learn JavaScript
object syntax and attempt to represent the validated record himself.

### First-record object validation

On 2026-09-17, Ronan represented `sample-01` as a JavaScript object with all five
required properties. The text value was quoted, the numeric and Boolean values
were unquoted, and the braces, colons, and commas were valid. A space after the
`weather_code` comma has no effect on JavaScript. No misconception was recorded.

The object is valid but has not been written into the application. Because a
fixture is a collection of records, Ronan must next learn JavaScript array syntax
and attempt to place this object inside an array.

### First fixture-array validation

On 2026-09-17, Ronan placed the validated `sample-01` object inside square
brackets. The result is a valid one-item JavaScript array: the brackets enclose
the collection and no item-separating comma is required. The indentation is
readable enough for assessment and has no effect on program behavior. No
misconception was recorded.

The validated array is not yet named or written into the repository as fixture
data. Ronan must next learn a `const` declaration and attempt to bind the array to
the suggested descriptive name `cycleSignalsFixture`.

### First named-declaration attempt

On 2026-09-17, Ronan retained the correct array and terminating semicolon but
started the declaration with `const = cycleSignalsFixture`. The identifier and
assignment operator were reversed. In a JavaScript declaration, the required
order is `const`, identifier, `=`, then the value; the corrected beginning is
`const cycleSignalsFixture = [`.

This is a syntax misconception, not a schema or privacy error. Ronan must retry
the complete declaration before any fixture is written into the repository.

### Corrected declaration and fixture

On 2026-09-17, Ronan retried with `const cycleSignalsFixture =` followed by the
validated array and terminating semicolon. The identifier now precedes `=`, so the
declaration is valid and the earlier syntax misconception is resolved. A line
break after `=` is permitted whitespace and does not change the statement.

After Ronan completed the exercise, his declaration was formatted consistently
and written to `fixtures/cycle-signals-fixture.js`. The fixture is not loaded by
the page and makes no presentation change. Ronan must next read and describe the
record's values, units, synthetic marker, and derived weather meaning.

### Record description and Lesson 2 closeout

On 2026-09-17, Ronan described the checked-in record as follows:

1. `sample-01` represents the period;
2. `1440` is the ride duration in seconds;
3. `7.9` is the hours slept the night before;
4. `61` is the WMO weather code and maps to “Slight rain”;
5. `is_synthetic: true` shows that the record is not real data.

For precision, `sample-01` is a fictional period identifier rather than a real
time or date. Ronan initially called code `61` clear conditions, then immediately
self-corrected it to “Slight rain.” No weather-code misconception remains.

Ronan can read the fixture, identify each value and unit, distinguish the stored
WMO code from its derived description, and explain the synthetic-data marker.
This satisfies the Lesson 2 outcome. Lesson 2 is complete; Lesson 3 must be
explained and its readiness gate completed before presentation work begins.

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

## Final Lesson 1 teach-back

The supplied record dated 2026-09-08 says Ronan completed the final teach-back
and confirmed that he was ready to finish Lesson 1. It also attributes the release
to PR #11 and reports it merged, deployed, and working; those technical claims
have not been independently verified in this review. The learning closeout
remains recorded as complete.

| Topic | Ronan's understanding | Assessment / misconception | Follow-up |
| --- | --- | --- | --- |
| Proving a displayed value is live | An empty HTML element shows only that JavaScript inserts the value. Proof requires matching the API JSON in the browser Network panel to the rendered weather condition. | Correct; no misconception recorded. | Reinforce when tracing later data flows. |
| Honest error state | The error state avoids presenting fabricated data as live. | Correct; no misconception recorded. | Preserve this rule in later interfaces. |
| Browser and server boundary | The current Open-Meteo request can run in the browser because it has no secret API key. A future secret-bearing or sensitive request may require a server-side boundary. | Correct; no misconception recorded. | Revisit before any credentialed or sensitive integration. |
| Readiness | Ronan confirmed that he is ready to finish Lesson 1. | Lesson 1 closeout gate satisfied. | Explain Lesson 2 Phase A, then ask whether he is ready to begin it. |

## Lesson 3 opening

On 2026-09-23, Ronan asked to start Lesson 3, confirming readiness to begin. The lesson goal is to display one value from the synthetic fixture on the page. The current page has HTML elements that JavaScript can target by `id`; the fixture is a separate JavaScript file and is not loaded by the page. No application code has changed. The opening explanation and first exercise are underway. Do not implement the exercise before Ronan attempts it.

The first exercise is to propose one HTML element with a unique `id` that could hold the ride duration. No value is to be rendered yet; first identify the page location JavaScript will later fill.

## Provisional curriculum progress

| Lesson | Status |
| --- | --- |
| 1. First real London weather request | Complete in the learning record — Phase B and final teach-back complete; earlier live verification recorded, current release state tracked separately |
| 2. Shape a synthetic dataset | Complete — learner-authored fixture written; schema, privacy, syntax, values, units, and final description validated |
| 3. Render one signal | Active — opening and first HTML-target exercise; no application code changed |
| 4. Handle failure | Not started |
| 5. Evaluate a live source | Not started |
| 6. Connect safely | Not started |
| 7. Compare signals responsibly | Not started |
| 8. Harden and publish | Not started |
