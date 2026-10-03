# Lesson 6: ask the server

The browser asks `/api/dashboard`; the Worker replies with invented records; the browser validates and shows the existing ride panel. The endpoint also carries the approved fictional sleep/weather fields for future presentation. The current live weather card remains independent and is not historical ride weather.

## Try the local preview

With Node 18 or later, run `node server/dev.mjs` from the repository root. Open `http://127.0.0.1:8787/api-experiment.html` and choose **Ask the server · local preview**. Expect **Server replied!** and **1440 seconds**. The Network panel shows a GET to `/api/dashboard` and JSON with `source: synthetic-server`. Stop the local server and retry: expect an error with no old duration displayed.

The adapter serves only the dashboard and fixture on loopback; no credentials, installation or account is needed. Existing weather still calls Open-Meteo with generic London coordinates; no personal data is sent. Synthetic dashboard requests go only to the local process; it writes no records or request logs. Responses use `Cache-Control: no-store`.

## Checks

Run `node tests/lesson4-states.cjs` and `node tests/lesson6-server.cjs`. The latter exercises the actual Worker and browser code: JSON contract, method/path handling, server rendering, invalid/non-synthetic replies, empty/error/timeout, retry, stale responses and independent weather. Controlled DOM checks do not establish visual browser quality or hosted Worker behavior.

## Hosting and real data

`server/wrangler.jsonc` is a candidate Worker configuration with workers.dev disabled. It does not publish anything. GitHub Pages cannot execute this server handler; choosing the server option there produces an honest error until hosting and endpoint configuration are completed. The default fixture continues to work.

Before a hosted preview, confirm account access and current terms, choose a deployment route and test the actual runtime. Before adding real records, implement login and server-side authorization, reviewed logging/retention and private response handling. Never replace these invented records with real data in source. Private dashboard first; public selected insights later.
