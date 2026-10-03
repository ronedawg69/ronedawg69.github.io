# Learning tracker

See [current lesson and publication status](APPLICATION_TRACKER.md#current-status). This file records learning outcomes, not a duplicate release status.

## Lessons 1–3 summary

Completed outcomes: the public weather request and honest failure state; the minimal synthetic schema and fixture; and the fixture-to-page flow with a readable seconds unit. Recorded answers and detailed history are preserved unchanged in [Lessons 1–3 history](history/lessons-1-3.md).

Remember these resolved misconceptions: `const name = value` declaration order; assignment to an element's `.textContent` property (not the element itself or `textContext`); seconds mean duration, not distance. WMO code 61 was immediately self-corrected to Slight rain. No unresolved misconception is recorded. The unnecessary vocabulary exercise and repeated comprehension gates were tutoring errors, not learner errors.

## Lesson 4 outcome

The lesson explains that loading means a result is pending, empty means the source returned no records, and error means retrieval or validation failed. None should show an old value as if it were current. Retry is a new attempt, not a fabricated replacement result.

Codex built the fictional ride status panel, labelled scenario selector and recovery action. A separate ride loader keeps its failures from stopping weather. Controlled checks cover the real application logic; visual browser verification was unavailable. No optional teach-back was requested and no learner answer or misconception was invented. See the [application tracker](APPLICATION_TRACKER.md#current-status) for publication and check evidence.

## Teaching correction and walkthrough: 2026-10-02

Ronan reported insufficient teaching and requested concept tests before execution. Codex explained `renderRides(records)`: empty collections, `return`, first-record access with `[0]`, validation, `throw`/catch and ready-state rendering, plus clearing stale values and ignoring older responses. Ronan reported trying the fictional scenarios; this does not establish concept mastery. The follow-up answers and assessment are recorded below. Teach first, ask a few connected questions together, wait for answers, assess and clarify before implementing. This supersedes the former optional/no-quiz rule.

## Where Lesson 6 starts

Use the application tracker for publication status. Lesson 5's [connector map](CONNECTOR_MAP.md) records browser/server/provider roles and the hosting comparison. The request/response explanation and concept check were completed on 2026-10-03. Dashboard direction is now private real data first, selected public insights later. Authentication implementation and Google Health access remain unresolved; these do not block a synthetic-only local server.

## Curriculum outcomes

The [11-lesson plan](PROJECT_BRIEF.md#remaining-course-lessons-411) defines scope; the application tracker owns the current stage.

| Lesson | Outcome / learning record |
| --- | --- |
| 1. First real London weather request | Complete; public request, response tracing and honest failure states. |
| 2. Shape a synthetic dataset | Complete; minimal schema, privacy rules and fixture. |
| 3. Render one signal | Complete; script order, fixture access, DOM assignment and units. |
| 4. Make failure states helpful | Implemented and checked; loading, empty, error and recovery outcomes recorded above. Publication is tracked separately. |
| 5. Pick the connectors and home | Complete; connector map, provider checks and boundary concepts recorded. Publication is tracked separately. |
| 6. Add a tiny server | Complete; synthetic endpoint, local preview and hosted browser journey verified. See the application tracker for publication/deployment evidence. |
| 7. Bring in rides | Planned; see the application tracker for current stage. |
| 8. Bring in sleep and activity | Planned; see the application tracker for current stage. |
| 9. Add weather context | Planned; see the application tracker for current stage. |
| 10. Make it enjoyable to explore | Planned; see the application tracker for current stage. |
| 11. Check and publish | Planned; see the application tracker for current stage. |


## Lesson 4 concept check: 2026-10-02

1. Ronan explained that no data is fundamentally different from an error calling the data, and that distinguishing them matters. Assessment: correct; empty is a valid result, whereas retrieval/validation failure means no usable result.
2. Ronan explained that the fixture should show fictional positive whole numbers and values failing those rules should not be displayed. Assessment: correct for this ride-duration field; invalid data should become an error. No misconception remains in these checked concepts.

Lesson 5 answers and assessment follow.

## Lesson 5 boundary concept check: 2026-10-02

- Browser token exposure: Ronan answered that anyone with access to the browser could access the private token. Assessment: correct; visitors can inspect delivered JavaScript and take the token.
- Endpoint access: Ronan challenged whether the second concept had been taught. Codex acknowledged the explanation was insufficient, then explicitly explained authentication (who is requesting) and authorization (whether they may access the data). This was a teaching gap, not a learner misconception.
- After the explanation, Ronan answered “Authentication and Authorization” when asked what the server should check before returning ride data to a stranger. Assessment: correct. Both checked boundary concepts are understood; no corrective check remains for them.

- Runtime role: Ronan answered “Server runtime, as the static hosting won't and we need to ensure authorisations and authenctication”. Assessment: correct; the runtime executes identity/access checks and private provider calls. Static hosting delivers files; a database persists data.
- Codex completed the [connector map](CONNECTOR_MAP.md) after assessing these answers. No corrective check remains for the tested concepts. The map keeps provider eligibility, dashboard audience and access mechanism unresolved; these answers do not approve account connection or deployment.

## Lesson 6 concept check: 2026-10-03

- Browser role: Ronan answered “The browser reads the package and displays based on the states that have already been built”. Assessment: correct; the response does not render itself.
- Failed request: Ronan answered “The dashboard should show the error state, as it was a failure on the server side, not a lack of data”. Assessment: error versus empty is correct. Clarified that the cause can be the server or the connection, so a missing reply does not prove server failure. No repeated check required.
- Taught endpoint as a data-request address and JSON as labelled text data. Implemented the synthetic Worker handler, local adapter and browser server scenario after assessment. No real accounts or login implementation is claimed.

## Hosted server and boundary clarification: 2026-10-03

- Ronan correctly explained that direct endpoint success does not prove the dashboard works: browser/site failures can stop the data reaching the display. Assessment: correct; verify the whole request/render journey.
- Ronan initially understood the server as authorizing access to GitHub. Clarified that GitHub Pages serves public files; our server checks access to data. Ronan then correctly explained that browser source checks can be bypassed and private credentials stay server-side. Refined that approved response data does reach the browser while provider credentials stay on the server. No corrective gate remains for these concepts.
- Implementation continues the synthetic hosted preview only; actual login and authorization are still not implemented.

## Lesson 6 completion: 2026-10-03

Ronan supplied a browser screenshot with the server scenario selected and **Server replied!** / **1440 seconds** displayed. Independent weather remained visible. Combined with live HTTP checks and verified PR #28 merge/Pages workflow, this closes the hosted synthetic preview. Lesson 6 is complete; no unresolved corrective concept gate remains. Lesson 7 has not started and must begin with protected Strava access planning, not immediate real-data publication.
