# Lesson 6: ask the server

The browser asks `/api/dashboard`; the Worker replies with invented records; the browser validates and shows the existing ride panel. The endpoint also carries the approved fictional sleep/weather fields for future presentation. The current live weather card remains independent and is not historical ride weather.

## Try the local preview

With Node 18 or later, run `node server/dev.mjs` from the repository root. Open `http://127.0.0.1:8787/api-experiment.html` and choose **Ask the server · fictional sample**. Expect **Server replied!** and **1440 seconds**. The Network panel shows a GET to `/api/dashboard` and JSON with `source: synthetic-server`. Stop the local server and retry: expect an error with no old duration displayed.

The adapter serves only the dashboard and fixture on loopback; no credentials, installation or account is needed. Existing weather still calls Open-Meteo with generic London coordinates; no personal data is sent. Synthetic dashboard requests go only to the local process; it writes no records or request logs. Responses use `Cache-Control: no-store`.

## Checks

Run `node tests/lesson4-states.cjs` and `node tests/lesson6-server.cjs`. The latter exercises the actual Worker and browser code: JSON contract, method/path handling, server rendering, invalid/non-synthetic replies, empty/error/timeout, retry, stale responses and independent weather. Controlled DOM checks do not establish visual browser quality or hosted Worker behavior.

## Hosting and real data

`server/wrangler.jsonc` enables the sample workers.dev address and disables version preview URLs. Cloudflare Builds uses root `server`, no build command and deploy command `npx wrangler deploy`. The Worker name is `cycle-signals-synthetic`.

On `ronedawg69.github.io`, the browser requests `https://cycle-signals-synthetic.ronan-d-keogh.workers.dev/api/dashboard`; local previews continue to request `/api/dashboard`. No credentials are sent. The Worker grants browser read permission only to the exact Pages origin and uses `Vary: Origin` and `Cache-Control: no-store`. CORS does not restrict direct clients and is not authentication.

The browser sends a request to Cloudflare only when the server scenario is selected or retried (12-second timeout, no automatic polling). It sends no personal records or credentials. The response contains one invented sample. Worker application code stores no requests or records and writes no logs; provider infrastructure logging/retention is not established here, so do not assume zero retention. Keep the Free plan; no billing change is included. Shutoff: disable the Production URL and restore `workers_dev: false` before another deployment. The default local fixture remains available.

Merge triggers the connected deployment pipelines; confirm their success and the live dashboard separately. Direct endpoint HTTP success is established; hosted browser rendering remains outstanding. See the application tracker for evidence.

Before adding real records, implement login and server-side authorization, reviewed logging/retention and private response handling. Never replace these invented records with real data in source. Private dashboard first; public selected insights later.
