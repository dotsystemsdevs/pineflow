# Pineflow

**The exact path from an idea to a mobile app in the App Store, with Claude Code doing most of the typing.**

A free, open source workflow in 11 chapters plus a start page. Every step says what to do, gives you the command or the prompt to paste, and tells you how to check it worked.

**Read it with progress tracking:** [stackpine.app/pineflow](https://stackpine.app/pineflow)

## Quick start

1. Open [Start here](chapters/00-start-here.md) and go chapter by chapter. Every step ends with what you see when it worked.
2. Grab the templates when a step asks for them, or all at once:

   ```bash
   npx degit dotsystemsdevs/pineflow/templates pineflow-templates
   ```

3. Already have an Expo app? Start at [Tools and rules](chapters/03-tools-and-rules.md).

![License](https://img.shields.io/github/license/dotsystemsdevs/pineflow)
![Stars](https://img.shields.io/github/stars/dotsystemsdevs/pineflow?style=flat)

## The stack

One tool per job, so every step can be exact.

| Job | Tool |
| --- | --- |
| Where you work | VS Code |
| The AI agent | Claude Code |
| The app, iPhone and Android | Expo + React Native |
| Save points | Git and GitHub |
| Builds and store uploads | EAS |
| Subscriptions | RevenueCat |
| Analytics | PostHog |

## The chapters

| | Chapter | What you do |
| --- | --- | --- |
| Start | [Start here](chapters/00-start-here.md) | What this workflow is, and how each chapter works. |
| Set up | [Setup](chapters/01-setup.md) | Seven short steps, from an empty computer to your first app on your phone. |
| Plan | [Idea and PRD](chapters/02-idea-and-prd.md) | Check that people really have the problem, then write one page that says what you'll build. |
| Plan | [Tools and rules](chapters/03-tools-and-rules.md) | Write down every tech choice, then give your agent the memory it reads before every session. |
| Build | [Build loop](chapters/04-build-loop.md) | Build your app one small task at a time: plan it, build it, check it, commit it. |
| Build | [Paywall](chapters/05-paywall.md) | Decide where you ask for money, what the paywall says and what it costs, then wire it to RevenueCat. |
| Build | [Onboarding](chapters/06-onboarding.md) | Get a new user from install to the moment your app proves itself, in their first minute. |
| Build | [Analytics](chapters/07-analytics.md) | Pick an analytics tool, send a handful of events, and see where new users drop off. |
| Build | [Quality gate](chapters/08-quality-gate.md) | One last check of the whole app before anyone else sees it: ready for App Review, safe and tested. |
| Ship | [Ship](chapters/09-ship.md) | Open the store accounts, write the store page, test with real people, then ship the real build. |
| Grow | [Get users](chapters/10-get-users.md) | Bring new users every week from the one place they already hang out. |
| Grow | [Iterate](chapters/11-iterate.md) | Every week: read what happened, pick one change, ship it, and check if it worked. |

## Templates

Drop-in files for your repo, each used by a step in the chapters.

| File | What it is |
| --- | --- |
| [`AGENTS.md`](templates/AGENTS.md) | Your part under Expo's own AGENTS.md: stack, folders, rules, never touch |
| [`CLAUDE.md`](templates/CLAUDE.md) | One line, `@AGENTS.md` |
| [`.claude/settings.json`](templates/.claude/settings.json) | Two hooks: blocks edits to `.env`, runs `tsc` and your tests before the agent may call a task done |
| [`docs/research.md`](templates/docs/research.md) | Kill criteria, searches, complaints, 3 rivals, what you do differently |
| [`docs/PRD.md`](templates/docs/PRD.md) | User, goal, MVP, out of scope, success |
| [`docs/TechDesign.md`](templates/docs/TechDesign.md) | One tool per layer: App, Look, Data, Payments, Builds |
| [`docs/TASKS.md`](templates/docs/TASKS.md) | Small tasks in build order, each with how you check it |
| [`.gitignore`](templates/.gitignore) | Expo ignores, with `.env` and signing files |
| [`.env.example`](templates/.env.example) | Which keys go in the app, and why nothing secret is named `EXPO_PUBLIC_` |
| [`README.md`](templates/README.md), [`CHANGELOG.md`](templates/CHANGELOG.md), [`LICENSE`](templates/LICENSE) | Repo housekeeping |

## What makes it different

- **Plan before code.** A checked idea, a one-page PRD and a locked stack before the agent writes a line.
- **Rules the agent can't skip.** AGENTS.md for advice, Claude Code hooks for what must hold every time.
- **One task at a time.** Plan, build, try it on your phone, read the change, commit.
- **Built for App Review.** Privacy, permissions, Sign in with Apple, restore purchases and guideline 4.3 checked before you submit.
- **Growth is part of the build.** Your channel starts during the Build loop, not after launch.

Written from shipping our own apps under [Stackpine](https://stackpine.app): Taperly, Slothy, Crest and Excuse Caddie.

## History

Pineflow started as **vibeprompt**, a prompt library and a 10-step workflow for vibe coders. That site, its 56 prompts, the fix library and the CLI live on in the [`vibeprompt-site`](https://github.com/dotsystemsdevs/pineflow/tree/vibeprompt-site) branch. Thanks to everyone who contributed there: [@sjusjdkzhsiqjqbz-rgb](https://github.com/sjusjdkzhsiqjqbz-rgb), [@Renaud972](https://github.com/Renaud972) and [@LyraCS](https://github.com/LyraCS).

## Contributing

Something failed, a link died or a tool changed? See [CONTRIBUTING.md](CONTRIBUTING.md).

If Pineflow helped you ship, a star helps the next person find it.

## License

MIT
