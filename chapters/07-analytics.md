# 7. Analytics

**Pick an analytics tool, send a handful of events, and see where new users drop off.**

- Time: half a day
- You end with: An analytics tool in the app, a funnel and a retention chart
- Before this: Onboarding done

Pick one tool, send a few events, and read them every week. Iterate reads these numbers later.

## What is analytics

**Analytics shows what people actually do in your app:** where they start, where they stop and whether they come back. Without it you guess.

Learn more:

- Video: [Funnels in PostHog: learn how to create and analyze them](https://www.youtube.com/watch?v=p2AG284aPI8), Vision Labs
- Docs: [Official Expo analytics guide](https://docs.expo.dev/guides/using-analytics/)

**Once real people use the app, save two charts:** a funnel of the onboarding events, and retention from first_win. The biggest drop in the funnel is the screen to fix first. A weak day 1 means onboarding, a weak day 7 means no reason to come back.

**Numbers to aim for, once people use the app.** Change one big thing at a time when you're below: placement and price before copy ([Superwall, 36:46](https://youtu.be/lkwX_kc0NS8?t=2206)).

- **15%+** of people who see the paywall start a trial ([Superwall, 4:04](https://youtu.be/24QMRDXck70?t=244))
- **30%+** of trials turn into paying users ([Superwall, 4:04](https://youtu.be/24QMRDXck70?t=244))
- **10%+** of installs pay, without a trial. Under 4% is a problem ([Superwall, 4:04](https://youtu.be/24QMRDXck70?t=244))
- **10.7% vs 2.1%** of downloads pay by day 35, hard paywall vs freemium. Freemium keeps letting people in for longer, so don't read it alone ([Sub Club by RevenueCat, 38:30](https://youtu.be/UO0NQNfICwo?t=2310))

## Best practices

- A few events with exact names, not everything.
- The event names listed in AGENTS.md, so every session uses the same ones.
- Only keys that are made to be public are named `EXPO_PUBLIC_`.
- Look once a week, not every hour.
- Reaching the first win is the number that matters, not total users ([Starter Story, 6:05](https://youtu.be/OV09yPLf8BI?t=365)).
- Weak first week? Talk to a few users before you add dashboards ([Chris Raroque, 2:03](https://youtu.be/EQMPvqpRPuQ?t=123)).

## Plan it

**Any of these works with Expo.** We use PostHog in this workflow, but the events are the same in every tool.

- What matters most to you?
  - **everything in one place:** **PostHog.** Funnels, retention and session replay. Works in Expo Go. ([React Native docs](https://posthog.com/docs/libraries/react-native))
  - **privacy:** Open source too?
    - **yes:** **Aptabase.** Privacy-first and open source. Works in Expo Go. ([React Native docs](https://aptabase.com/for-react-native))
    - **no:** **TelemetryDeck.** Analytics without processing personal data. ([React Native page](https://telemetrydeck.com/platforms/react-native/))
  - **free, from Google:** **Firebase Analytics.** Needs a development build, not Expo Go. ([React Native docs](https://rnfirebase.io/analytics/usage))

Which tools work in Expo Go comes from [Expo's analytics guide](https://docs.expo.dev/guides/using-analytics/).

## Build it

**Send a few events with exact names, not everything.** These six are enough to start:

- **onboarding_started:** The first onboarding screen opens.
- **onboarding_completed:** The last onboarding screen is done.
- **first_win:** The user reaches the first win.
- **paywall_shown:** The paywall opens, with a reason: which screen sent them.
- **trial_started:** They start a trial.
- **purchase_completed:** They pay.

Prompt:

```text
Add [your tool] following its Expo or React Native guide, with the key in .env. Send onboarding_started, onboarding_completed, first_win, paywall_shown (with a reason), trial_started and purchase_completed at the moments in docs/ONBOARDING.md. List the event names in AGENTS.md.
```

## Our favorite tools

- [PostHog](https://posthog.com): What we use: funnels, retention and session replay.
- [Aptabase](https://aptabase.com): Privacy-first and open source, works in Expo Go.
- [TelemetryDeck](https://telemetrydeck.com): Privacy-focused analytics without personal data.
- [Firebase Analytics](https://rnfirebase.io/analytics/usage): Free from Google, needs a development build.
- [PostHog plugin](https://github.com/PostHog/ai-plugin): Lets Claude Code read your PostHog data. In `/plugins`.
- [Amplitude](https://amplitude.com): Detailed product analytics, needs a development build.

## Before the next chapter

- [ ] You picked one analytics tool, and it's in the app.
- [ ] The six events arrive when you go through the app yourself, and paywall_shown says which screen sent them.
- [ ] The event names are listed in AGENTS.md.
- [ ] A funnel from onboarding_started to first_win is saved.
- [ ] A retention chart from first_win is saved.
- [ ] Only keys that are made to be public are named `EXPO_PUBLIC_`.
- [ ] Everything is committed and pushed to GitHub.
