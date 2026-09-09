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

## Provisional synthetic fields

These names are discussion aids only; Lesson 2 will decide the actual fixture.

| Field | Meaning | Example constraints |
| --- | --- | --- |
| `period` | A fictional, non-identifying time bucket | Date-free label such as `sample-01` |
| `weather_band` | Coarse fictional condition category | Controlled labels; no coordinates |
| `ride_effort` | Unitless synthetic exercise value | Small documented scale; no real record |
| `rest_band` | Coarse synthetic rest category | Category, not clinical or device data |
| `is_synthetic` | Explicit fixture marker | Always `true` in checked-in examples |

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
