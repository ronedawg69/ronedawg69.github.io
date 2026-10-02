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

Use the application tracker for publication status. Lesson 5's [connector map](CONNECTOR_MAP.md) records browser/server/provider roles and the hosting comparison. Teach the synthetic endpoint request/response flow and check understanding before Lesson 6 implementation. Confirm the unresolved dashboard visibility, endpoint protection and Google Health access questions in the project brief; do not connect real accounts or activate billing without authorization.

## Curriculum outcomes

The [11-lesson plan](PROJECT_BRIEF.md#remaining-course-lessons-411) defines scope; the application tracker owns the current stage.

| Lesson | Outcome / learning record |
| --- | --- |
| 1. First real London weather request | Complete; public request, response tracing and honest failure states. |
| 2. Shape a synthetic dataset | Complete; minimal schema, privacy rules and fixture. |
| 3. Render one signal | Complete; script order, fixture access, DOM assignment and units. |
| 4. Make failure states helpful | Implemented and checked; loading, empty, error and recovery outcomes recorded above. Publication is tracked separately. |
| 5. Pick the connectors and home | Complete; connector map, provider checks and boundary concepts recorded. Publication is tracked separately. |
| 6. Add a tiny server | Planned; see the application tracker for current stage. |
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
