# 6. Onboarding

**Get a new user from install to the moment your app proves itself, in their first minute.**

- Time: 1-2 days
- You end with: docs/ONBOARDING.md and the onboarding in the app
- Before this: Paywall done

Read the lessons you need, then work through the checklist your own way.

## What is onboarding

**Onboarding is everything between install and the first time your app proves itself.** Most people who install an app never open it a second time, so these first screens decide who stays.

Learn more:

- Video: [Duolingo UX teardown: how does Duolingo onboard users?](https://www.youtube.com/watch?v=YlxKIi2QgtE), UserGuiding
- Docs: [Official Apple onboarding guidelines](https://developer.apple.com/design/human-interface-guidelines/onboarding)

**The first win is the first moment a new user gets what they came for.** Not a sign-up, not a tour: the real thing, small. For a lifting app that's seeing how your bench press ranks. Name yours in one sentence, and get there within a minute. 

**Tap one to watch its real onboarding**

- [Duolingo](https://screensdesign.com/showcase/duolingo-language-lessons) (your first lesson): You answer a question within a minute. It asks you to make a profile only after the first lesson.
- [Cal AI](https://screensdesign.com/showcase/cal-ai-calorie-tracker) (your daily calorie plan): A long quiz, but every answer goes into the plan it shows at the end, so the length feels like attention.
- [Calm](https://screensdesign.com/showcase/calm) (one calm breath): It opens with "Take a deep breath" before it asks you anything.
- [Hopper](https://screensdesign.com/showcase/hopper-flights-hotels-cars) (a price prediction): Before iOS asks, it explains that notifications are how it tells you when a price drops.

## Best practices

**The first session**
- The first win within a minute.
- One question per screen, taps before typing.
- Show their answers back as their plan.
- A progress bar and a way back on every screen.
- End on your paywall, right after the first win.
- A sensible answer picked already, and fewer choices per question ([Kris Greenwald, 6:08](https://youtu.be/lMOMplCvfZA?t=368)).
- About five words of text per screen, like a caption ([Superwall, 13:15](https://youtu.be/D7eaHcznLZU?t=795)).

**Asking for things**
- Login after the first win, or not at all.
- Each permission right before the feature that needs it, like notifications when they set a goal.
- Your own screen first that says why, with Not now. iOS asks only once ([Apple's guidelines](https://developer.apple.com/design/human-interface-guidelines/privacy)).

**Coming back**
- Reminders built on their own data, like "Bench day. Go for 62.5?"
- Only when they need it, and easy to turn off.

## Plan it

**Two choices shape your whole onboarding.** Answer them, then write your plan.

- Does the first win need to know something about the user?
  - **yes:** **A short quiz.** Ask only what the win needs, one question per screen, then show it back as their plan. Like Cal AI.
  - **no:** **Straight to the win.** Let them try it at once, and ask later if ever. Like Duolingo and Calm.

- Must the user's data follow them to another phone?
  - **yes:** **Login after the first win.** Offer Sign in with Apple. Google login alone isn't enough for Apple. ([Apple 4.8](https://developer.apple.com/app-store/review/guidelines/#login-services))
  - **no:** **No login.** Save on the phone. RevenueCat and analytics work without an account.

Find apps like yours on [ScreensDesign](https://screensdesign.com/library) or [Mobbin](https://mobbin.com/explore/mobile/flows/onboarding), then write your plan:

Prompt:

```text
Read docs/PRD.md. Create docs/ONBOARDING.md: the first win in one sentence, then every screen from first open to that win, one line each: what it asks or shows, and why the first win needs it. Put login and every permission after the first win unless the win needs them. End on the paywall.
```

Then cross out every screen that doesn't lead to the first win.

## Build it

**Start with `/clear`, then plan and build it in one go.** Want help with the questions and copy? The onboarding questionnaire skill in the tools below writes them like top subscription apps do.

Prompt:

```text
/plan Build the onboarding in docs/ONBOARDING.md. One question per screen, taps before typing, a progress bar and a back button. Show the user's answers back to them as their plan before the first win, then the paywall. Save that onboarding is done, so it only shows once, and add a Reset onboarding button in settings that only shows in development.
```

## Our favorite tools

- [ScreensDesign](https://screensdesign.com): Real onboarding, recorded screen by screen.
- [Page Flows](https://pageflows.com): Whole user flows from top apps, onboarding included.
- [Mobbin](https://mobbin.com/explore/mobile/flows/onboarding): Onboarding flows of shipped apps, sorted by category.
- [Onboarding questionnaire skill](https://github.com/adamlyttleapps/claude-skill-app-onboarding-questionnaire): Writes onboarding questions and copy for Claude Code.
- [Expo Notifications](https://docs.expo.dev/versions/latest/sdk/notifications/): The reminder that brings them back.
- [Apple onboarding guidelines](https://developer.apple.com/design/human-interface-guidelines/onboarding): How Apple wants a first launch to feel.

## Before the next chapter

- [ ] The first win is one sentence in docs/ONBOARDING.md, and a new user reaches it in under a minute.
- [ ] Someone who had never seen the app got there without your help.
- [ ] One question per screen, and taps before typing.
- [ ] Easy questions come before personal ones.
- [ ] The app shows the user's answers back to them before the first win.
- [ ] Every onboarding screen has a progress bar and a way back.
- [ ] No login and no system prompt before the first win.
- [ ] The onboarding ends on your paywall, right after the first win.
- [ ] Every permission has its own screen that says why, and saying no breaks nothing.
- [ ] One reminder built on the user's own data, with a setting to turn it off.
- [ ] Everything is committed and pushed to GitHub.
