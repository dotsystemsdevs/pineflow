# 5. Paywall

**Decide where you ask for money, what the paywall says and what it costs, then wire it to RevenueCat.**

- Time: 1-2 days
- You end with: A paywall screen, RevenueCat with one entitlement and one offering, and a working test purchase and restore
- Before this: Build loop done (the app works on your phone)

The paywall is the screen that earns your money, so it gets its own chapter before onboarding. Free app? Skip to Onboarding.

## What is a paywall

**A paywall is the screen that asks people to pay**, usually to unlock a Pro version of your app. A soft paywall can be closed, a hard one can't. Where it sits, what it says and what it costs decide most of what your app earns.

Learn more:

- Video: [We've tested 100s of paywalls. Here's what actually converts](https://www.youtube.com/watch?v=vZXn_BSi5AE), App Masters
- Docs: [Official RevenueCat Expo documentation](https://www.revenuecat.com/docs/getting-started/installation/expo)

## Best practices

**What goes on it**
- A headline, three bullets and one button. It works in almost every category ([Superwall, 32:42](https://youtu.be/lkwX_kc0NS8?t=1962)).
- A picture and bullets, not a comparison table: +111% in one test ([Superwall, 25:30](https://youtu.be/lkwX_kc0NS8?t=1530)).
- Simple plans and "No commitment, cancel anytime" under the button: +10% ([Superwall, 6:09](https://youtu.be/lkwX_kc0NS8?t=369)).
- A big button, at least 56 to 65 pt ([Superwall, 27:33](https://youtu.be/lkwX_kc0NS8?t=1653)).
- Real numbers only. No "join thousands" before you have them.
- A trial timeline that says exactly when you remind and when you charge. It beat every other test ([Superwall, 44:44](https://youtu.be/s9qQPM92JNs?t=2684)).
- Plans sorted cheapest to priciest, or the other way, never mixed ([Superwall, 11:12](https://youtu.be/lkwX_kc0NS8?t=672)).

**Trial and price**
- Remind them before the trial ends: +48% revenue ([Superwall, 45:50](https://youtu.be/zFfBuyKoaDM?t=2750)).
- Make the first day count: 80 to 90% of trials start then ([Subversive, 38:44](https://youtu.be/1toNkt5bTgg?t=2324)).
- Charge from day one if you'll ever charge. Free first, paid later is a harder sell.
- Annual picked, monthly visible, priced near 2 or 3 similar apps.
- Make cancelling easy. It builds trust ([Starter Story, 7:09](https://youtu.be/mjCa8IFjM2E?t=429)).

**App Review**
- Restore purchases on the paywall ([Apple 3.1.1](https://developer.apple.com/app-store/review/guidelines/#in-app-purchase)).
- A close button that works on the first tap.
- A discount only on a later screen, never the instant they decline ([Sub Club by RevenueCat, 4:16](https://youtu.be/HLcj8adnknM?t=256)).
- No trial on/off switch, Apple has started rejecting it ([Adam Lyttle, 3:05](https://youtu.be/PEbwRYALqcA?t=185)).

## Plan it

**No users yet? Answer two questions and you have your paywall.** A soft paywall can be closed, a hard one can't. Both come after the first win.

- Does every user cost you money to run, like AI?
  - **yes:** **Hard paywall.** No free plan. Right after onboarding, with a 7-day trial. ([Starter Story, 2:03](https://youtu.be/Nnpz1wsTjBI?t=123))
  - **no:** Where will most users come from?
    - **App Store search:** **Soft paywall.** Right after the first win. They can close it. ([Superwall, 38:46](https://youtu.be/Y6RstwPUWdU?t=2326))
    - **paid ads:** **Hard paywall.** Right after onboarding, while they're warm. ([Superwall, 38:46](https://youtu.be/Y6RstwPUWdU?t=2326))
    - **not sure yet:** **Both.** Soft after the first win, hard before the Pro action. 16.5% in one app. ([Superwall, 41:46](https://youtu.be/PFfo4JySptw?t=2506))

- Does your app need a few days to prove itself?
  - **yes:** **7-day trial.** Clearly more people came into the app than with 3 days, which had more cancels in the US. ([Superwall, 52:53](https://youtu.be/PdudtXwEsOQ?t=3173))
  - **no, it's clear in a minute:** **No trial.** Show the price up front. The people who pay really want it.

**Then pick a purchase tool.** It handles buying, trials and restores for you.

- What do you want from it?
  - **the easiest start:** **RevenueCat.** What we use. Test purchases before you have an Apple account. ([react-native-purchases](https://github.com/RevenueCat/react-native-purchases))
  - **paywall tests built in:** **Adapty.** Purchases with paywalls and A/B tests in one. ([React Native SDK](https://github.com/adaptyteam/AdaptySDK-React-Native))
  - **change paywalls without an update:** **Superwall.** Remote paywalls and tests, on top of RevenueCat or alone. ([expo-superwall](https://github.com/superwall/expo-superwall))
  - **no extra service:** **expo-iap.** Talk to the stores directly. More work, nothing in between. ([expo-iap](https://github.com/hyodotdev/openiap))

## Build it

**First, swap Expo Go for a development build.** Expo Go only holds the packages Expo put in it. Purchases need RevenueCat's own phone code, so from here you run your own version of Expo Go, built once by EAS. You still start it with `npx expo start`, and code changes still show up at once. Rebuild only when you add another package with phone code.

Terminal:

```bash
npx expo install expo-dev-client
eas device:create
eas build --profile development --platform all
```

**On an iPhone this needs the Apple Developer Program ($99 a year)**, since Apple only lets signed builds onto a phone. Join it now, as the first step of Ship shows: approval takes a day or two, and you need it to launch anyway. Android works free with just your Expo account. `eas device:create` registers your iPhone once, so it may install the build. When the build is done, open its link on your phone, install it, then run `npx expo start` and scan the code as before.

**Build the paywall and its purchases in one go.** Look at real paywalls on [ScreensDesign](https://screensdesign.com/library) first. You don't need Apple yet: RevenueCat's [Test Store](https://www.revenuecat.com/docs/test-and-launch/sandbox/test-store) key gives real-looking test purchases in development. Never ship that key.

Prompt:

```text
Add RevenueCat following RevenueCat's Expo guide, with the Test Store API key from .env in development only: an entitlement called pro and one offering with an annual and a monthly package. Then build a paywall screen in our theme that reads that offering: a headline about [what the user just hit], three short bullets of what Pro gives, annual picked and monthly below it, a trial timeline if there's a trial, one big Continue button, "No commitment, cancel anytime" under it, a close button that works on the first tap, and Restore purchases at the bottom.
```

## Our favorite tools

- [RevenueCat](https://www.revenuecat.com): Purchases, trials and restores, without writing store code.
- [PaywallScreens](https://www.paywallscreens.com): Over 10,000 real paywalls to compare before you design yours.
- [ScreensDesign](https://screensdesign.com): Recordings of real paywalls in motion, step by step.
- [RevenueCat Paywalls](https://www.revenuecat.com/docs/tools/paywalls): Design the paywall in a dashboard and change it without an update.
- [Superwall](https://superwall.com): Test paywall versions against each other, once you have traffic.
- [RevenueCat plugin](https://github.com/RevenueCat/rc-claude-code-plugin): Lets Claude Code set up products and offerings for you. In `/plugins`.

## Before the next chapter

- [ ] The app runs as a development build on your phone, not in Expo Go.
- [ ] You picked your paywall with the decision tree.
- [ ] The headline names what the user just hit, with three honest bullets and no invented numbers.
- [ ] The price and any trial are clear before the button, with annual picked and monthly visible.
- [ ] Your price sits near 2 or 3 apps that charge for something similar.
- [ ] The close button closes on the first tap, and no discount pops up when they decline.
- [ ] No trial on/off toggle on the paywall.
- [ ] Restore purchases is on the paywall and works.
- [ ] RevenueCat has one entitlement and one offering, and the app checks the entitlement.
- [ ] A Test Store purchase unlocks Pro, and a restore brings it back.
- [ ] If you have a trial, a reminder goes out before it ends.
- [ ] The Test Store key is only used in development.
- [ ] A free user can still reach the first win.
- [ ] Everything is committed and pushed to GitHub.
