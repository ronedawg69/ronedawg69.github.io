# Cycle Signals codebook

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
| Provider | A third party that supplies data, infrastructure, hosting, or another service. No provider is selected. |
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
| Weather product availability | Not selected | Unverified | — | Do not make a product claim. |
| Authentication requirements | Not selected | Unverified | — | Architecture remains conditional. |
| Pricing and free allowance | Not selected | Unverified | — | Intended $0 fixture path is an internal goal, not provider pricing. |
| Quotas and rate limits | Not selected | Unverified | — | Define caps only after first-party review. |
| Privacy, retention, and terms | Not selected | Unverified | — | Document data flow before selection. |
| Static hosting behavior/cost | Not assessed | Unverified | — | Current repository context does not establish current hosting terms. |

When verification begins, record the exact first-party page, access date, relevant fact in paraphrase, and any uncertainty. Re-check before implementation because provider details can change.

## Repository-safe example policy

- Examples must be unmistakably fictional and must not encode a real route, home/work location, timestamp sequence, ride, sleep, activity, or health record.
- Use placeholders for environment-variable names, never credential-shaped sample values.
- Keep secret values out of source, Git history, browser storage, logs, screenshots, and documentation.
