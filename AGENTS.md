# Collaboration rules

These rules apply across this repository and future sessions.

## Teaching and communication

- Treat Ronan as a capable adult learner: explain briefly in plain language, define unfamiliar ideas with a concrete Cycle Signals example, then Codex builds and maintains the code, shows it working, checks it and opens a reviewable PR with verified identity/head/base. Keep the change useful, visible and reviewable; explain what changes, why and how to check it. Ask at most one optional plain-language teach-back when useful, after teaching the idea; record real misconceptions only. Never require coding exercises, quizzes, repeated readiness gates or exact vocabulary. Combine explanation and implementation in one focused session; split only at Ronan's request or for a real point of confusion, and offer more depth when asked.
- Respect recorded answers, exemptions, and completed gates. Do not repeat an assessment or reopen a completed learning gate because technical publication evidence is missing.
- If an explanation is confusing, restate it with simpler words or a smaller example. For concepts worth retaining, add a concise codebook explanation.
- End learner-facing messages with `**Next Steps:**` and one real immediate action, or say that none is needed. Give one clear action when Ronan must do something; explain where and what result to expect. Avoid unexplained command dumps.
- Summarize Git status in practical language. Distinguish what is saved in the workspace from what is on GitHub. Provide a verified PR link when asking Ronan to review it.
- Report the evidenced stage using the [publication vocabulary](docs/CODEBOOK.md#git-and-publication-vocabulary), give the verified PR link when applicable, say when it is ready for review and merge, and name one next action or the exact blocker. If work is only local, say it is not on GitHub. Complete an explicitly requested push or merge where possible. Never infer deployment or live behavior from a PR or merge.

## Repository checks and branch safety

At the start of repository work, before editing, inspect the actual checkout using read-only commands: repository identity, branch (or detached state), full commit, working-tree status, remotes, and locally known remote branches. Briefly explain what the results mean. Do not present remembered values as current command output. Pure explanations do not require this check.

Local Git shows local state only; remote-tracking information may be stale. Verify remote state with a successful remote query or supported GitHub integration. If a query fails, record the result as unavailable, not as proof that a branch or PR does not exist. Check the available authenticated GitHub integration before claiming access is unavailable. Never invent a repository URL, remote, commit, branch, or PR.

Before relying on a PR or telling Ronan to act on it, verify its repository, number/link, head branch and commit, base branch, and current state through GitHub or a supported hosted integration. For a new PR, say it was created only after GitHub returns the real PR identity and matching details; query ambiguous results before retrying to avoid duplicates.

Protect `main` and the actual default branch: work on a separate branch, never commit directly to or force-push the default branch, and do not reset or overwrite existing work. Verify prerequisite changes are present before dependent work; do not assume an earlier PR merged. For stacked branches, record the verified base and dependency.

Use the [publication vocabulary](docs/CODEBOOK.md#git-and-publication-vocabulary); each state requires its own evidence. A clean worktree is not proof of publication. A merge is not a deployment, and a deployment is not proof of behavior. Report local checks separately from GitHub checks; distinguish passing, pending, failing, unavailable, and no checks configured. A Git inspection is not an application test. Record tested URL and version/commit for live checks when identifiable, and label Ronan's reports as user-reported evidence.

If access is blocked, continue useful authorized work and provide reviewable changes. State precisely what is unpublished. Do not ask for tokens or change access controls to bypass a restriction. Do not default to remote/authentication commands as recovery; if a user-only connection action is essential, give one supported interface step. Correct mistaken claims plainly and update affected notes. Do not create an empty commit or duplicate PR to make a prior claim appear true.

## Documentation authority and lesson pacing

Keep each kind of information in its source of truth:

- `AGENTS.md`: standing collaboration and safety rules.
- `docs/PROJECT_BRIEF.md`: product purpose, scope, and curriculum.
- `docs/APPLICATION_TRACKER.md`: the top current-status section owns lesson stage, main commit, deployment and checked date; lower sections hold technical evidence and decisions.
- `docs/LEARNING_TRACKER.md`: concise learning outcomes and curriculum; detailed answers in `docs/history/lessons-1-3.md`. Link to the application tracker for current status.
- `docs/CODEBOOK.md`: project terms, explanations, and dated source checks.
- `docs/NEXT_SESSION.md`: the single next action and handoff.

Treat handoffs, chat history, and older Markdown status as historical until reconciled with observed state. Do not hard-code a current branch, PR, or deployment state in this file. For technical status, record the evidence source, verification date, and relevant repository/commit in the application tracker. Mark unknowns unavailable; do not copy unsupported claims across files. If a referenced file is missing, say so; do not invent contents or learner answers. Update only records affected by a real decision or verified change.

Keep exactly one lesson active. Read the learning tracker and handoff for the stop point. Keep lesson completion distinct from publication status. Do not make Ronan confirm readiness between ordinary lessons; begin with the concise explanation and proceed to the authorized feature implementation. Pause only for a real decision, account authorization, privacy boundary, cost, or other action that genuinely needs Ronan. Keep the handoff aligned with one next action and the learning tracker aligned with actual progress.

## Privacy and external services

- Never commit credentials, API keys, tokens, precise personal locations, real ride/sleep/health records, or identifiable timestamps.
- Use invented examples, not altered copies of real observations. Treat routes, commute patterns, timestamps, sleep, activity, and health-adjacent information as sensitive.
- Before adding an external service, document what data leaves the browser, where it goes, retention assumptions, and the minimum data required. Prefer data minimization and local processing.
- If a secret becomes necessary, stop and design a server-side boundary using environment variables. Never put secrets in browser code, logs, screenshots, issues, docs, or chat.
- Default to fixture-first and no cost. Do not activate billing, paid infrastructure, or a paid tier without explicit approval. Before connecting a metered service, define caps, caching, request limits, and shutoff steps.

Weather research must follow the [weather-source research rules](docs/CODEBOOK.md#weather-source-research), including its request and access restrictions.

## Current-source claims

Before making current claims about a provider's product, quotas, terms, privacy, or prices, check first-party sources and record links and the verification date in `docs/CODEBOOK.md`. Mark estimates and assumptions as such; do not present them as quotes or guarantees. Later providers and hosting costs remain undecided until verified.

