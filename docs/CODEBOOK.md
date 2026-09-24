# Cycle Signals codebook

> Review note (2026-09-09): This file was reviewed from an uploaded snapshot, without the live repository, GitHub state, application source, or test output. Historical implementation, PR, deployment and test claims below are retained as prior records, not independently verified current facts. Follow `AGENTS.md` before relying on them. Lesson progress is preserved; technical uncertainty does not reset completed learning.

This codebook defines project language and records claims that require current first-party verification.

## Terms and boundaries

| Term | Working definition |
| --- | --- |
| Client / browser | Code and data delivered to a visitor's device. Anything delivered here is inspectable and must not contain a secret. |
| Server-side boundary | A controlled runtime that can read environment variables and call an external service without delivering a credential to the browser. It is not automatically private; logging, requests, and retention still need review. |
| Fixture | A small, deterministic, explicitly synthetic dataset used for learning and testing. |
| Synthetic data | Invented values that do not reproduce a real person's trip, location, activity, rest, or health record. |
| Coarse data | Deliberately reduced precision, such as a broad area or rounded time. Coarsening lowers some risk but does not guarantee anonymity. |
| Sensitive data | Credentials and any data that can reveal or infer a person's precise location, routine, activity, rest, or health. |
| Signal | A measured or derived value shown for exploration; it is not evidence of causation or medical guidance. |
| Data minimization | Collect, transmit, retain, and display only what is necessary for the stated lesson or feature. |
| Provider | A third party that supplies data, infrastructure, hosting, or another service. Open-Meteo is selected only for Lesson 1's public weather request; later private-data providers remain undecided. |
| Planning estimate | A rough internal forecast for scope, time, or intended spend; not a provider quote, promise, or verified price. |
| Record | One item in a dataset, containing related values that describe one fictional observation. |
| Schema | The shared rules for a dataset's records: field names, meanings, accepted value types or categories, units, and which fields are required. It defines the structure before example values are written. |
| Unified record | One observation that places a deliberately selected cycling signal, health-adjacent signal, and weather signal in the same fictional period. It does not mean copying all fields from several providers. |
| Numeric validation rule | A rule defining which numbers a field accepts, such as whether values may include decimals, whether zero is meaningful, or whether a numeric code must be recognized. |
| JavaScript object | A value between `{` and `}` that groups named properties. Each property uses a name, a colon, and a value; commas separate properties. |
| JavaScript array | An ordered collection between `[` and `]`. Items are separated by commas; a fixture array can contain one or more record objects. |
| Array index | A number in square brackets that selects an array item. JavaScript starts counting array positions at zero, so `[0]` selects the first item. |
| Property access | Dot notation such as `.name` reads the named property from an object. In `snacks[0].name`, `[0]` first selects an object and `.name` then reads its `name` property. |
| Document Object Model (DOM) | The browser's JavaScript representation of the HTML page. JavaScript can select an element from this model and then read or change it. |
| `document.getElementById` | A DOM method that returns the element with the exact `id` passed as a quoted string, such as `document.getElementById("snack-name")`. The string does not include a CSS `#`. |
| `textContent` | A DOM element property containing its plain text. Assigning a value with `element.textContent = value;` replaces the element's text without treating the value as HTML markup. |
| String concatenation | Joining values into text with `+`. When one side is a string, `5 + " minutes"` produces `5 minutes`; the leading space inside the string separates the number and unit. |
| Script loading order | Ordinary browser scripts run in document order. A script that defines a name, such as the fixture's `cycleSignalsFixture`, must load before a later script tries to read that name. |
| `const` declaration | A JavaScript statement that gives a value a name using `const name = value;`. The name cannot later be assigned a different value. |

## Approved synthetic fixture schema

Ronan approved this minimal schema and its privacy rules on 2026-09-17. Lesson 2
is complete, and the learner-authored synthetic record is stored in
`fixtures/cycle-signals-fixture.js`. The schema combines ride duration,
prior-night sleep duration, and weather code as the minimum signals. The readable
weather condition is derived by the application's existing display mapping. The
schema fields below have validated meanings, units, numeric rules, and privacy
constraints.

| Field | Meaning | Example constraints |
| --- | --- | --- |
| `period` | A fictional, non-identifying time bucket | Date-free label such as `sample-01` |
| `ride_duration_seconds` | Elapsed time of a fictional ride | Positive whole number of seconds; zero and decimals are invalid |
| `sleep_duration_hours` | Fictional duration slept during the preceding night | Positive whole or decimal number of hours; zero is invalid; not proof of tiredness or causation |
| `weather_code` | Synthetic numeric WMO weather code | Integer recognized by the existing mapping in normal fixtures; unitless; readable condition is derived |
| `is_synthetic` | Explicit fixture marker | Always `true` in checked-in examples |

### Approved fixture privacy rules

- Use invented values, never altered copies of real observations.
- Set `is_synthetic` to `true` in every record.
- Use only date-free fictional `period` labels.
- Include no actual sleep history, ride duration, route, commute pattern,
  timestamp, or precise location.
- Do not pair fictional weather codes with Ronan's real activity history.

### Validated `sample-01` values

| Field | Validated fictional value |
| --- | --- |
| `period` | `sample-01` |
| `ride_duration_seconds` | `1440` |
| `sleep_duration_hours` | `7.9` |
| `weather_code` | `61` (mapped by the application to “Slight rain”) |
| `is_synthetic` | `true` |

Ronan correctly represented these values as a JavaScript object:

```js
{
  period: "sample-01",
  ride_duration_seconds: 1440,
  sleep_duration_hours: 7.9,
  weather_code: 61,
  is_synthetic: true
}
```

Ronan then correctly placed the object inside a one-item JavaScript array:

```js
[
  {
    period: "sample-01",
    ride_duration_seconds: 1440,
    sleep_duration_hours: 7.9,
    weather_code: 61,
    is_synthetic: true
  }
]
```

This was the array before Ronan named it and wrote it into the repository. The
declaration exercise and correction are recorded below; the completed fixture is
now stored in `fixtures/cycle-signals-fixture.js`.

### `const` declaration correction

The declaration order is `const`, identifier, `=`, value, then `;`. Ronan's first
attempt reversed the identifier and `=` as `const = cycleSignalsFixture`. The
correct beginning is `const cycleSignalsFixture = [`. The existing array contents
and closing `];` remained valid; the complete declaration then awaited his retry.

Ronan's corrected retry used the required declaration order. His learner-authored
array is now stored, with consistent indentation, in
`fixtures/cycle-signals-fixture.js`. It is deliberately not loaded by the page;
rendering fixture data remains Lesson 3 work.

### Lesson 2 closeout

Ronan described `sample-01` as a fictional period containing a 1440-second ride,
7.9 hours of preceding-night sleep, WMO code `61` mapped to “Slight rain,” and an
explicit `is_synthetic: true` marker showing that the data are invented. He
initially called code `61` clear conditions and immediately corrected himself; no
misconception remains. Lesson 2 is complete, and the page still does not load or
render the fixture.

### Lesson 2 weather-field correction

The application already requests, validates, maps, and renders `weather_code`.
The earlier proposal to store a manually chosen `weather_condition` label and ask
Ronan to invent a controlled vocabulary duplicated that existing data flow and
departed from the lesson plan. It has been withdrawn; no application code change
is needed for this correction.

The normal-fixture recognized-code rule does not replace the application's
unknown-code fallback. A later controlled failure scenario may use an unknown code
specifically to exercise that existing behavior.

## Source-verification register

| Topic | Provider/source | Status | Verified on | Notes |
| --- | --- | --- | --- | --- |
| Weather product availability | Open-Meteo forecast API candidate | Partially verified | 2026-09-07 | Official forecast documentation supplied from Ronan's browser describes current conditions based on 15-minute model data and permits hourly variables as current conditions. |
| Authentication requirements | Open-Meteo standard non-commercial API candidate | Verified for candidate endpoint | 2026-09-07 | Supplied official documentation says no API key is required; `apikey` is optional and is required for commercial access to reserved customer resources. |
| Pricing and free allowance | Open-Meteo Free/Open-Access | Verified for stated use | 2026-09-07 | Supplied pricing page says non-commercial use, without reserved servers or an uptime guarantee. No billing or API key is enabled. |
| Quotas and rate limits | Open-Meteo Free/Open-Access | Verified | 2026-09-07 | 600/minute, 5,000/hour, 10,000/day, and 300,000/month; large variable/date requests can count as multiple calls. |
| Privacy, retention, and terms | Open-Meteo free non-commercial API | Verified for candidate request | 2026-09-07 | Supplied terms say technical/IP information may be collected for maintenance/abuse prevention and troubleshooting logs may contain submitted coordinates for up to 90 days. |
| Static hosting behavior/cost | Not assessed | Unverified | — | Current repository context does not establish current hosting terms. |

### Verification attempt: 2026-09-07

The following first-party Open-Meteo locations were requested from the Codex
environment:

- <https://open-meteo.com/en/docs>
- <https://open-meteo.com/en/terms>
- <https://open-meteo.com/en/licence>
- `https://api.open-meteo.com/v1/forecast` with coarse central-London coordinates,
  current weather fields, `Europe/London`, and one forecast day

The documentation tool returned HTTP `401 Unauthorized`, while direct HTTPS
requests through the environment proxy returned `403 Forbidden` before reaching
the pages. These results establish an environment-access limitation only. They do
**not** verify product availability, browser access, authentication, fields,
units, attribution, limits, price, privacy, retention, or terms. No provider has
therefore been selected and no live request had been added at that checkpoint.

### Official forecast documentation supplied: 2026-09-07

Ronan accessed and transcribed the relevant portion of the current first-party
<https://open-meteo.com/en/docs> page because the Codex environment could not load
it directly. The supplied documentation supports these limited conclusions:

- Current conditions are based on 15-minute weather-model data; they are modelled
  conditions, not a street-level sensor reading.
- The proposed request uses a generic central-London point (`51.5072`, `-0.1276`),
  requests only `temperature_2m`, `apparent_temperature`, `precipitation`,
  `weather_code`, `wind_speed_10m`, and `wind_direction_10m`, and asks for
  `Europe/London` time.
- Default units are degrees Celsius for both temperatures, millimetres for the
  preceding 15-minute precipitation total, kilometres per hour for 10-metre wind
  speed, degrees for wind-from direction, and a WMO code for weather condition.
- The standard non-commercial endpoint does not require an API key. The optional
  `apikey` parameter applies to commercial access using reserved customer servers.
- The example URL is generated from selected documentation controls rather than
  being a single fixed example printed for all users.

This supplied excerpt does not establish attribution requirements, request quotas,
price conditions, retention/privacy details, or all relevant terms. Those were
verified separately below before implementation.

### Official usage conditions supplied: 2026-09-07

Ronan supplied current text from the first-party Open-Meteo
<https://open-meteo.com/en/pricing>, <https://open-meteo.com/en/terms>, and
<https://open-meteo.com/en/licence> pages. For this small, public, personal site:

- Free/Open-Access use is non-commercial and permits examples including private or
  non-profit sites without subscriptions or advertising, and educational content.
- The stated limits are 600 calls/minute, 5,000/hour, 10,000/day, and
  300,000/month. The site makes one ordinary request on page load and has no
  automatic polling; retry is a deliberate visitor action.
- The free service has no reserved server or uptime guarantee and may block misuse,
  so the interface retains an honest error state.
- Data are offered under CC BY 4.0. The card links “Weather data by
  Open-Meteo.com” beside the display and links the CC BY 4.0 licence. It does not
  imply endorsement.
- The free API may collect non-personal technical information including IP
  addresses. Troubleshooting logs may contain submitted coordinates, are not
  shared with third parties according to the supplied terms, and are deleted after
  90 days.

### Lesson 1 request boundary and controls

On each page load, the visitor's browser sends the six requested field names,
`Europe/London`, and the fixed generic central-London coordinates `51.5072,
-0.1276` to `api.open-meteo.com`. It sends no ride, route, home/work, health,
credential, or application-stored personal data. The provider nevertheless sees
ordinary request metadata such as the visitor's IP address.

There is no automatic refresh. A visitor can deliberately retry after an error.
There is no API key or billing account attached. To shut off requests, change
`WEATHER_REQUESTS_ENABLED` to `false`; the card then explains that it is temporarily
unavailable and sends no request.

### WMO weather-code display mapping

The official Open-Meteo forecast documentation supplied on 2026-09-07 includes
the following WMO interpretation codes. The weather card uses these descriptions
for readability and reports any value outside this table as
`Unknown condition (code X)` rather than guessing.

| Code | Displayed condition |
| --- | --- |
| 0 | Clear sky |
| 1 | Mainly clear |
| 2 | Partly cloudy |
| 3 | Overcast |
| 45 | Fog |
| 48 | Depositing rime fog |
| 51 | Light drizzle |
| 53 | Moderate drizzle |
| 55 | Dense drizzle |
| 56 | Light freezing drizzle |
| 57 | Dense freezing drizzle |
| 61 | Slight rain |
| 63 | Moderate rain |
| 65 | Heavy rain |
| 66 | Light freezing rain |
| 67 | Heavy freezing rain |
| 71 | Slight snowfall |
| 73 | Moderate snowfall |
| 75 | Heavy snowfall |
| 77 | Snow grains |
| 80 | Slight rain showers |
| 81 | Moderate rain showers |
| 82 | Violent rain showers |
| 85 | Slight snow showers |
| 86 | Heavy snow showers |
| 95 | Thunderstorm |
| 96 | Thunderstorm with slight hail |
| 99 | Thunderstorm with heavy hail |

When verification begins, record the exact first-party page, access date, relevant fact in paraphrase, and any uncertainty. Re-check before implementation because provider details can change.

## Repository-safe example policy

- Examples must be unmistakably fictional and must not encode a real route, home/work location, timestamp sequence, ride, sleep, activity, or health record.
- Use placeholders for environment-variable names, never credential-shaped sample values.
- Keep secret values out of source, Git history, browser storage, logs, screenshots, and documentation.

## Lesson 1 clarification: public code and secrets

- Code sent to a visitor's browser can be inspected, including JavaScript that is
  not written directly in the HTML file.
- A browser-visible API key is not secret. A private repository alone does not
  protect a key after that key is delivered as part of a public website.
- When a future provider requires a secret, a server-side component can hold the
  credential, make the provider request, and return only an approved result.
- Protecting a credential helps prevent unauthorized access and unexpected usage,
  but server-side storage must still be designed and reviewed rather than assumed
  safe automatically.
- Provider suitability includes more than feature scope: verify eligibility,
  authentication, available fields, quotas, price, privacy, retention, and terms
  against current official documentation before implementation.

## Lesson 1 closeout: 2026-09-08

- Earlier notes report PR #11's readability refinement as merged, deployed, and working; its hosted state requires verification. In the live
  browser check, the Open-Meteo JSON in the Network panel matched the rendered
  weather condition. An empty HTML element alone would show only that JavaScript
  inserts a value; it would not prove that the value came from the live response.
- The card's error state deliberately avoids presenting fabricated values as live
  data.
- The current Open-Meteo request can run in the browser because it contains no
  secret API key. A future request involving a secret or sensitive data may need a
  server-side boundary, subject to a separate design and privacy review.
- Lesson 1 is complete. Lesson 2 has not started, and no Lesson 2 schema or
  application work is authorized by this closeout.

## Git and publication vocabulary

| Term | What it establishes |
| --- | --- |
| Local edit | File bytes changed in this checkout; no commit or upload implied |
| Local commit | A snapshot exists in local Git history; no remote copy implied |
| Push confirmed | The intended commit reached a named remote branch |
| PR text prepared | A title/body exists; no hosted PR implied |
| Hosted PR, including a draft | GitHub returned an actual PR identity for a specific repository, head and base |
| Merged | Hosted evidence confirms integration into the named base; no deployment implied |
| Deployed | Deployment evidence identifies a published version; behavior still needs checking |
| Live behavior verified | A stated check was performed against the identified live URL; attribute user reports |
| Unknown / unavailable | Evidence cannot currently establish the state; does not mean absent or failed |
| No checks configured | Verified absence of configured checks; not the same as checks passing |

Incident reviewed 2026-09-09: the supplied transcript shows PR metadata being described as a created PR, followed by instructions to review inaccessible checks. Do not repeat this inference. Provider notes above remain dated historical records, not a fresh verification of provider terms in this review.


## Current integration and free-hosting check: 2026-09-24

Checked first-party documentation on 2026-09-24 to shape the remaining lesson plan. This establishes documented technical capability and published plan limits only; it does not establish Ronan's account eligibility, live authorization, or that any service has been activated.

| Source | Current official documentation check | Course implication |
| --- | --- | --- |
| Strava API | [Getting started](https://developers.strava.com/docs/getting-started/), [OAuth authentication](https://developers.strava.com/docs/authentication/), and [rate limits](https://developers.strava.com/docs/rate-limits/): API access uses OAuth; developers must register an app; new apps are single-player (own account); creating an app requires a Strava subscription. | Personal ride retrieval is technically supported, subject to app setup, subscription, scope consent, and current terms. Keep the client secret and refresh tokens on the server. |
| Fitbit Web API | [API Explorer](https://dev.fitbit.com/build/reference/web-api/explore/), [sleep endpoints](https://dev.fitbit.com/build/reference/web-api/sleep/), and [authorization guide](https://dev.fitbit.com/build/reference/web-api/developer-guide/authorization/): documents OAuth plus sleep and activity APIs, including calories. Intraday access rules differ for personal and third-party applications. | A personal sleep/activity summary is technically supported subject to app setup, account consent, scopes, and current terms. Use only the fields the dashboard needs; do not promise intraday access. |
| Cloudflare Workers + D1 | [Workers pricing](https://developers.cloudflare.com/workers/platform/pricing/), [D1 pricing](https://developers.cloudflare.com/d1/platform/pricing/), and [secrets](https://developers.cloudflare.com/workers/configuration/secrets/): Free Worker plan lists 100,000 requests/day and 10 ms CPU per invocation; D1 free quota lists 5 million rows read/day, 100,000 rows written/day, and 5 GB total storage, with a 500 MB per-database limit. Secrets can be configured outside source code. | Leading candidate for a small personal backend and token store, if current account terms and privacy fit. Quota overages are not part of a zero-cost promise; re-check limits before deployment and set a shutoff path. |
| Vercel Hobby | [Hobby plan](https://vercel.com/docs/plans/hobby) and [pricing](https://vercel.com/pricing): free plan is restricted to personal, non-commercial use and has included function quotas. | Possible for a personal function backend, but a separate persistent store is still needed for refresh tokens. |
| Supabase Free | [Plan limits](https://supabase.com/docs/guides/platform/billing-on-supabase) and [project pausing](https://supabase.com/docs/guides/platform/free-project-pausing): Free lists 500 MB database, 500,000 Edge Function invocations, and projects may pause after about seven days of low activity. | Possible integrated database/function alternative, with inactivity-pausing trade-off. |

### Limits of this check

- These pages do not prove that a specific account can register or authorize the app; that is checked in the provider dashboard when the integration lesson is reached.
- Plan limits, eligibility, terms, and product interfaces can change. Re-check official pages immediately before deployment.
- No credentials were entered, no account was connected, no paid service was enabled, and no personal data was transmitted during this documentation research.
- Free means within the provider's current published free quota, not a permanent guarantee. The project stays at $0 unless Ronan explicitly approves a cost.
