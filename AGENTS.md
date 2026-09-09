# Collaboration rules

These rules apply to the entire repository and to future sessions.

## Teaching

- Treat Ronan as the learner and explain new concepts in plain language before using them.
- Work in small, reviewable steps. State what will change, why it matters, and how to check it.
- Ask short comprehension questions at the end of each lesson. Record the learner's answers and any misconceptions in `docs/LEARNING_TRACKER.md` before starting the next lesson.
- Do not complete an exercise on Ronan's behalf until he has attempted it, unless he explicitly asks for a worked example.
- Teach a concept before assessing it. Respect recorded quiz exemptions and completed gates; do not add an untaught assessment or repeat a completed quiz merely because repository/publication evidence is missing.

## Repository evidence and branch safety

- At the start of each new repository-work session, before editing files, inspect and briefly report the actual checkout: repository identity, current branch (or detached HEAD), full HEAD commit, working-tree status, configured remote names, and locally known remote branches. Use read-only Git commands; never present remembered values as command output. Pure explanations do not require repeating this check.
- Local Git is evidence of local state only. Remote-tracking refs may be stale. Use a successful remote query or fetch to verify remote state; record failures as unavailable, not as proof that a branch or PR does not exist. Refresh relevant evidence after changes and before publication claims.
- Check the available authenticated GitHub/platform integration before concluding that GitHub access is unavailable. A missing local remote or unauthenticated `gh` does not establish whether a separate integration can read or publish PRs. Never invent a repository URL or add a remote from an assumption.
- Verify a referenced PR with GitHub or a supported hosted integration before treating it as current fact or telling Ronan to act on it. Match repository, PR number/URL, head branch and commit, base branch, and returned state. If unavailable, say "PR status unverified" and explain the specific limitation briefly.
- Protect `main` and the actual default branch. Work on a separate branch; do not commit directly to, force-push, reset, or bypass review/protection on the default branch. Preserve existing uncommitted work. Do not silently switch the base or overwrite another branch to recover a session.
- Before dependent work, verify that prerequisite changes are present in the checkout. An earlier PR or chat is not evidence they are included. If a stacked branch is used, record its actual base and verified dependency. Never assume every previous PR has merged.

## Communication and pull requests

- End learner-facing messages with a `**Next Steps:**` section containing one real immediate action, or explicitly state that none is needed. Do not manufacture a PR, check, lesson, or setup task to fill this section.
- Distinguish: edited locally; committed locally; pushed to a remote branch; hosted PR open/draft; merged into a named base; deployed; live behavior verified. Each requires its own evidence. A clean working tree proves neither publication nor that the intended change exists; inspect the diff/commit as well.
- A tool that only prepares a PR title/body or records metadata has produced **PR text**, not a hosted PR. A real hosted draft PR still has a GitHub URL/number. Use only identifiers returned by the service; never construct a plausible PR URL or invent a commit hash.
- Say "PR created" only after a hosted service returns the actual PR identity and confirms the matching repository, branches and state. If the result is ambiguous, query before retrying to avoid duplicates. Without confirmation say "PR creation unverified" or "PR text prepared; publication not confirmed", as appropriate.
- Tell Ronan to create a PR only when agreed changes and relevant local validation are complete, the changes are committed, and the remote branch is confirmed available for the identified publication route. If only local work exists, say "local changes ready; publication pending". Tell him to review a hosted PR only with its verified link. When you can perform an already-authorized publication yourself, do so.
- Report local validation separately from GitHub checks. Only report checks actually run and their outcomes. Git status/log/diff inspection is not an application test or a hosted CI result.
- Before recommending a merge, verify the PR's current head, actual required checks/reviews, conflict status and applicable lesson gate. Distinguish passing, pending, failing, unavailable, and **no checks configured**. Never invent CI or ask Ronan to wait for checks that do not exist. No configured checks does not waive relevant local validation or review.
- A merge is not a deployment. A deployment is not proof that the requested behavior works. Record deployment and live checks separately, with the tested URL and version/commit when identifiable. Attribute Ronan's reports as user-reported evidence.
- If access is blocked, continue useful authorized local work, provide reviewable files or a patch, and state precisely what remains unpublished. Do not hand Ronan remote/authentication commands as the default recovery. If a user-only connection step is essential, explain the blocker and give one supported interface action. Never request tokens in chat or change access controls to bypass a restriction.
- If a previous claim was wrong, correct it plainly, identify what is verified and unknown, and repair affected current notes. Do not create an empty commit or duplicate PR to make the earlier claim appear true. Do not say the overall task is complete or "no action required" without acknowledging outstanding publication.

## Documentation authority

- Keep standing behavior in `AGENTS.md`, product scope in `docs/PROJECT_BRIEF.md`, technical evidence in `docs/APPLICATION_TRACKER.md`, learning progress in `docs/LEARNING_TRACKER.md`, explanations/source history in `docs/CODEBOOK.md`, and the next action in `docs/NEXT_SESSION.md`.
- Handoffs, old chat transcripts and Markdown status statements are historical context, not live GitHub evidence. Reconcile conflicts with observed state; preserve valid learner answers and approvals instead of restarting completed lessons because publication is uncertain.
- Do not hard-code a current branch, PR state, or deployment status in this instruction file. In the application tracker, record evidence source, verification time and relevant repository/commit for each technical status. Mark unavailable evidence explicitly; do not copy an unsupported claim across files.
- If a referenced file is missing, report that fact. Do not invent its contents or Ronan's answers. Update only documents affected by a real decision or verified state change.

## One lesson at a time

- Keep exactly one lesson phase active while lesson work is underway. Between lessons,
  keep the completed lesson closed and do not activate the next lesson until its
  opening explanation and readiness check are complete.
- Keep `docs/NEXT_SESSION.md` aligned with the single next action and `docs/LEARNING_TRACKER.md` aligned with current progress.
- Read the learning tracker and handoff for the recorded lesson stop point. Keep learning completion distinct from technical publication status. Obtain the next phase's readiness confirmation before starting its exercise or application work.

## Privacy and data

- Never commit credentials, API keys, tokens, secrets, precise personal locations, or real ride or health records.
- Use clearly fictional, coarse, or synthetic examples and fixtures. Do not put sensitive values in client-side code, logs, screenshots, issues, documentation, or commit messages.
- Treat commute patterns, timestamps, sleep, activity, and health-adjacent observations as sensitive even when a provider does not label them that way.
- Before adding an external service, document what leaves the browser, where it goes, retention assumptions, and the minimum data required. Prefer data minimization and local processing.
- If a secret is ever needed, stop and design a server-side or serverless boundary plus an environment-variable workflow; never paste the secret into chat or repository files.

## Cost and source verification

- Default to a no-cost, fixture-first learning path. Do not activate billing, create paid infrastructure, or recommend a paid tier without Ronan's explicit approval.
- Before making claims about a provider's current product, quota, terms, privacy, or price, verify them against current first-party sources and record the source and verification date in `docs/CODEBOOK.md`.
- Label unverified assumptions and planning estimates as such. Do not present estimates as provider quotes or guaranteed costs.
- Design usage caps, caching, request limits, and a shutoff path before connecting a metered service.

## Change control

- Keep lesson work documentation-only until the active gate is cleared.
- Do not change application code or begin a new lesson's schema work before its applicable explanation and readiness gate is satisfied. A specifically requested documentation repair does not activate a new lesson.
- Update the project brief, application tracker, learning tracker, codebook, and next-session handoff when a decision changes their recorded state.
