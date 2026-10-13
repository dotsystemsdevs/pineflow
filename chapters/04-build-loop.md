# 4. Build loop

**Build your app one small task at a time: plan it, build it, check it, commit it.**

- Time: 30-90 min per task
- You end with: docs/TASKS.md, all ticked, and the app working on your phone
- Before this: Tools and rules done

From here you work more on your own. Until now every step was the same for everyone, but every app is built differently, so you get short lessons and a checklist and choose your own order. Onboarding and the paywall have their own chapters next, so leave them out for now.

## What is the build loop

`One task -> Plan -> Build it -> Try it -> Read the change -> Commit -> Tick it off`

**The build loop is how your whole app gets built: one small task at a time, round the same loop.** Small tasks give small changes you can read, test and undo.

Learn more:

- Video: [The explore, plan, code, commit workflow in Claude Code](https://www.youtube.com/watch?v=xJQuF02NAK8), Claude
- Docs: [Official Claude Code best practices](https://code.claude.com/docs/en/best-practices)

### UI and UX

**UI is how your app looks, UX is how it feels to use.** Good apps borrow before they build: save 3 to 5 screens you love from the tools below and let the agent turn them into one theme every screen shares.

**Apple Design Awards 2026: apps picked for how they look and feel**

- [Tide Guide](https://apps.apple.com/us/app/tide-guide-charts-tables/id1406371071) (winner, Visuals and Graphics): Full-screen charts that stay easy to read, in colors that follow the sky through the day.
- [(Not Boring) Camera](https://apps.apple.com/us/app/not-boring-camera/id6737783441) (finalist, Visuals and Graphics): Giant buttons and haptic scroll wheels, like a camera from the '70s.
- [Structured](https://apps.apple.com/us/app/structured-daily-planner-todo/id1499198946) (finalist, Inclusivity): A daily planner Apple calls visually sharp and easy to scan.
- [grug](https://apps.apple.com/us/app/grug/id6751649802) (winner, Delight and Fun): A scribbled, hand-drawn look, with no login and nothing extra.

### Prompting

**The clearer you ask, the less you fix.** Say what you want, where it goes and how you'll check it. Easiest of all: talk. Type `/voice` once, then hold Space and say it like you'd explain it to a friend.

### Bug fixing

- **An error:** Paste the error, the file and the steps. Ask for the cause first.
- **It changed too much:** `/rewind` puts the code back, then plan again.
- **It goes in circles:** `/clear` and ask again with what you learned.
- **It looks wrong:** Paste a screenshot and say how it should look.

## Best practices

**Scope**
- Decide the smallest version of each task before you build it ([Starter Story, 8:08](https://youtu.be/xWnqY2Mav4s?t=488)).
- No password reset or settings screen in a first version ([Starter Story, 12:10](https://youtu.be/8BtHk-oNlN0?t=730)).
- No login or backend until the app truly needs one ([Starter Story, 5:04](https://youtu.be/yBjcmMhXSDk?t=304)).

**UI and UX**
- Mostly white, gray or black, with one accent color.
- In dark mode, cards get lighter as they rise.
- The same theme on every screen: colors, fonts, spacing.
- Small press effects and smooth transitions.
- Empty screens say what to do next, never blank.

**Prompting**
- Say what, where and how you'll check it: "Add today's lifts under the save button, newest first."
- Talk it with `/voice`, you say more than you type.
- Paste a screenshot of the bug or the screen you want.
- Type `@` and the file name, so it works in the right place.

**Bugs**
- Try every screen with 0 items, 1,000 items and no internet before you call it done.
- Corrected the agent twice? Start a clean chat with `/clear`.

## Plan it

**Turn your PRD into a task list once.** Small tasks in order, without onboarding or the paywall.

Prompt:

```text
Read docs/PRD.md and AGENTS.md. Create docs/TASKS.md: a numbered checklist of small tasks that build the MVP in order. Each task is one screen or one action, touches 3 files or fewer, and ends with how I check it on my phone. Leave out onboarding, the paywall and analytics: later chapters add them. Also set up Jest with jest-expo, so you can prove each task works: add @types/jest too, and "jest" to types in tsconfig.json, so the tests pass the type check.
```

## Build it

**Take one task at a time round the loop.** Start each task with `/clear`, plan it with `/plan`, try it on your phone with `npx expo start`, read what changed with `/diff`, then commit and tick it off in docs/TASKS.md.

**Start your channel this week, too.** Open Get users, pick the one channel where your people are and post while you build. A new account takes weeks to reach anyone, so the launch needs an audience waiting.

**A package won't run in Expo Go?** Some need their own phone code. Make a development build then, the way the Paywall chapter shows, and keep building in it.

**Make your first task the look.** Paste the screens you saved and ask:

Prompt:

```text
These are screens I like. Use the Expo design system skill to create one theme for my app: colors, fonts, spacing and corner radius, with a light and a dark mode. Mostly neutral colors with one accent color. Then restyle the home screen with it.
```

## Our favorite tools

- [Mobbin](https://mobbin.com): Real screens from top apps. The first place to look for UI ideas.
- [Dribbble](https://dribbble.com/search/mobile-app): Designers' ideas and small animations to borrow from.
- [Pinterest](https://www.pinterest.com/search/pins/?q=mobile%20app%20ui): Save a board of the look you want, then show it to the agent.
- [Expo skills](https://docs.expo.dev/skills/): Expo's own skills for Claude Code, from router to design system.
- [Callstack agent skills](https://github.com/callstackincubator/agent-skills): React Native best practices your agent follows.
- [React Native Directory](https://reactnative.directory): Check a library works with Expo before the agent adds it.

## Before the next chapter

- [ ] docs/TASKS.md lists every MVP feature as small tasks, without onboarding or the paywall.
- [ ] `npm test` runs, and the agent writes tests with each task.
- [ ] Every MVP feature in docs/PRD.md works on your phone.
- [ ] You can show the main feature to someone in 60 seconds.
- [ ] Your channel from Get users has had posts every week while you built.
- [ ] Every task in docs/TASKS.md is ticked and pushed to GitHub.
- [ ] `npx tsc --noEmit` shows no errors and `npm test` passes.
- [ ] Every screen uses your theme: the same colors, fonts and spacing.
- [ ] It works in dark mode, on a small screen and with the largest text size.
- [ ] Every screen handles empty, loading and error. No blank screens.
- [ ] Lists that can grow use `FlatList`, and images load with `expo-image`.
- [ ] Buttons that are only an icon have an `accessibilityLabel` for screen readers.
- [ ] It says something clear when there is no internet.
- [ ] No secret keys in the code, and nothing secret is named `EXPO_PUBLIC_`.
- [ ] No file is over 500 lines.
