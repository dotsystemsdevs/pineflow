# 8. Quality gate

**One last check of the whole app before anyone else sees it: ready for App Review, safe and tested.**

- Time: half a day
- You end with: A clean App Store review, a public privacy policy, tests for the main flow and crash reporting
- Before this: Analytics done

The build loop checked each task. This chapter checks the whole app once, the way Apple, an attacker and a stranger would see it.

## What is a quality gate

**A quality gate is one last check of the whole app before anyone else sees it.** Apple reviews every app before it goes live, and most rejections are things you can catch yourself. Will Apple approve it, is people's data safe, and can a stranger use it without help?

Learn more:

- Video: [Why apps get rejected from the App Store, and how to avoid it](https://www.youtube.com/watch?v=CGW3_eRM1G0), Noah Does Coding
- Docs: [Official App Store Review Guidelines](https://developer.apple.com/app-store/review/guidelines/)

## Best practices

- Secret keys live on a server. Anything inside the app can be read by anyone who downloads it.
- Logins and tokens go in [SecureStore](https://docs.expo.dev/versions/latest/sdk/securestore/), the phone's locked storage.
- A key was ever pushed to GitHub? Make a new one and delete the old. Deleting the file isn't enough.
- Using Supabase? Row Level Security on every table, and only the publishable (anon) key in the app. The service_role key skips every rule. Missing rules are the most common leak in vibe-coded apps ([Supabase docs](https://supabase.com/docs/guides/database/postgres/row-level-security)).
- Fix what the gate finds one at a time, with the build loop.
- If you charge, take payment through Apple's in-app purchases, not Stripe alone. Stripe-only apps are getting rejected ([Sub Club by RevenueCat, 10:31](https://youtu.be/HLcj8adnknM?t=631)).
- Remove the test crash button once the crash shows up in Sentry.

## Plan it

**Know what Apple asks for before you test.** Most of it you only need if it applies to your app:

- A privacy policy link, in App Store Connect and inside the app. Always ([5.1.1 i](https://developer.apple.com/app-store/review/guidelines/#data-collection-and-storage)).
- Permission texts that clearly say why, for every permission you ask for ([5.1.1 ii](https://developer.apple.com/app-store/review/guidelines/#data-collection-and-storage)).
- A way to delete the account inside the app, if people can create one ([5.1.1 v](https://developer.apple.com/app-store/review/guidelines/#data-collection-and-storage)).
- Sign in with Apple or a similar option, if you offer Google or another social login ([4.8](https://developer.apple.com/app-store/review/guidelines/#login-services)).
- A way to restore purchases, if you charge ([3.1.1](https://developer.apple.com/app-store/review/guidelines/#in-app-purchase)).
- Something your app does that its rivals don't. Apple rejects apps that look like copies of apps already in the store, and crowded categories like timers, wallpapers and trackers get the hardest look ([4.3](https://developer.apple.com/app-store/review/guidelines/#spam)).

The privacy policy is the one every app needs. Let the agent write it from what your code really collects, then publish it as a public page, for example in Notion or Google Docs:

Prompt:

```text
Write a privacy policy for this app based on what the code actually collects and which services it sends data to. Save it as docs/privacy-policy.md, then add a Privacy policy link to the app's settings or about screen.
```

- How much does your app do?
  - **a few screens:** **Tests for the main flow.** With React Native Testing Library. Enough for a first version.
  - **many screens, often updated:** **Add Maestro too.** Tests that tap through the whole app on a phone, before every release. ([maestro.dev](https://maestro.dev))

## Test it

**One prompt runs the whole gate: App Review, security, tests and crash reports.** It installs a free App Store review skill that knows Expo apps (366 stars on GitHub), and you'll need a free [Sentry](https://sentry.io) account for the crash reports.

Prompt:

```text
Run a quality gate on the whole app, one step at a time:
1. Install the App Store review skill with npx skills@latest add safaiyeh/app-store-review-skill -a claude-code -y, then list every App Store rejection risk with its file.
2. Review the app for security: secret keys in the code or git history, anything secret named EXPO_PUBLIC_, logins outside SecureStore, data sent without HTTPS. If the app uses Supabase: every table has Row Level Security with policies, and only the anon key is in the app, never service_role. Run npm audit.
3. Write tests for the main flow in docs/PRD.md with React Native Testing Library: one normal case, one edge case, one failure.
4. Add Sentry crash reporting following Expo's guide, ask me for the keys, and add a button to send one test crash.
List what you find, most serious first, and fix it with me one at a time.
```

Then hand your phone to someone who has never seen the app. Ask them to do the main thing and watch without helping. Every place they stop is a task for docs/TASKS.md.

## Our favorite tools

- [App Store review skill](https://github.com/safaiyeh/app-store-review-skill): Reads your code against Apple's rules, Expo apps included.
- [Sentry](https://sentry.io): Tells you when the app crashes on someone else's phone.
- [React Native Testing Library](https://callstack.github.io/react-native-testing-library/): Tests that use your screens the way a user does.
- [Maestro](https://maestro.dev): Tests that tap through the whole app on a phone, for later.
- [App Review Guidelines](https://developer.apple.com/app-store/review/guidelines/): Apple's own rules, when the skill flags something.
- [React Native testing skill](https://skills.sh/callstack/react-native-testing-library/react-native-testing): Callstack's skill for writing good component tests.

## Before the next chapter

- [ ] The App Store review skill finds no rejection risks.
- [ ] Your privacy policy has a public link, and the app opens it.
- [ ] Every permission the app asks for says why, in plain words.
- [ ] If people can make an account, they can delete it in the app.
- [ ] If you charge, Restore purchases works.
- [ ] If you charge, payment goes through Apple's in-app purchases, not Stripe alone.
- [ ] No secret keys in the code or the git history, and `npm audit` shows nothing critical or high.
- [ ] Logins and tokens are stored in SecureStore.
- [ ] If you use Supabase, every table has Row Level Security and the app holds only the anon key.
- [ ] You can say in one sentence what your app does that its 3 rivals don't.
- [ ] The tests for the main flow pass.
- [ ] A test crash showed up in Sentry.
- [ ] A stranger used the main feature without help.
- [ ] The app icon and splash screen are yours, not Expo's.
- [ ] Everything is committed and pushed to GitHub.
