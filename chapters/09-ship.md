# 9. Ship

**Open the store accounts, write the store page, test with real people, then ship the real build.**

- Time: 1-2 weeks
- You end with: The app in both stores, docs/STORE.md and docs/LAUNCH.md
- Before this: Quality gate done

This is where the app leaves your own phone, in four phases: accounts, store page, testing, shipping. Apple and Google take days to approve things, so start the accounts today.

## Create accounts

**You need one account per store before anyone can install your app.** Apple costs $99 a year, Google $25 once, and both check who you are, which can take days. A new personal Google account must also run a closed test with 12 testers for 14 days before the app can go public.

Learn more:

- Docs: [Official Apple Developer Program enrollment](https://developer.apple.com/programs/enroll/)
- Docs: [Official Google Play Console sign-up](https://support.google.com/googleplay/android-developer/answer/6112435)

### Step 1: Create your accounts

_Approval takes days, so it starts before you need it._

1. **Join the** [Apple Developer Program](https://developer.apple.com/programs/enroll/)**.** $99 a year, approved in a day or two.

2. **Make a** [Google Play Console](https://play.google.com/console/about/) **account.** $25 once. Google checks your ID, which can take a few days.

3. **Fill in tax and bank details in both** now, so nothing blocks you later.

4. **Set your app ids.** Ask Claude Code:

   Prompt:

   ```text
   In app.json, set ios.bundleIdentifier and android.package to com.[myname].[myapp], and version to 1.0.0. Make sure eas.json has a production profile.
   ```

   > Example: com.lifter.app. It can never change once the app is in a store.

**Done when:** Both accounts are approved, and app.json has your real app ids.

## ASO

**ASO, App Store Optimization, is making your store page easy to find and easy to say yes to.** Most downloads come from store search, so use the words people type, not the words you'd use. Most people decide from the first three screenshots, so each one shows a real screen and what the user gets.

| Field | Limit | Searched |
| --- | --- | --- |
| App Store title | 30 | Yes |
| App Store subtitle | 30 | Yes |
| App Store keywords | 100 | Yes, hidden |
| App Store description | 4,000 | No |
| Play title | 30 | Yes |
| Play short description | 80 | Yes |
| Play full description | 4,000 | Yes |

Learn more:

- Video: [App screenshots best practices, how to build app store screenshots that convert](https://www.youtube.com/watch?v=02O8RYWNzQo), AppTweak
- Docs: [Official Apple App Store search documentation](https://developer.apple.com/app-store/search/)

### Step 2: Write your store page

_Every download passes through this page._

1. **Search like a user.** Type 5 ways someone would look for your app in the App Store and write down what autocomplete suggests. Then read your 5 closest rivals' titles.

2. **Draft the texts.** Ask Claude Code:

   Prompt:

   ```text
   Read docs/PRD.md and docs/research.md. Here are the searches and rival words I found: [paste]. Create docs/STORE.md with: 3 options for an App Store title and subtitle (30 characters each), one keyword field (100 characters, single words, commas, no spaces, nothing already in the title), a Play short description (80) and full description, and an App Store description. Count the characters.
   ```

   > Example: Lifter: Lift Tracker / Rank every lift you log.

3. **Make 5 screenshots** of the screens that lead to the first win, each in a full phone frame with a caption of 5 words or fewer about what the user gets. [Figma](https://www.figma.com) works, [AppLaunchpad](https://theapplaunchpad.com) is faster.

   > Example: "See how your lifts rank", not "Advanced lift tracking".

4. **Ask for ratings after a win**, never on first open. Ask Claude Code:

   Prompt:

   ```text
   Add expo-store-review. Ask for a rating right after [my moment], only after the user has opened the app on at least 3 different days, and at most once per version.
   ```

**Done when:** docs/STORE.md has every text within its limit, and 5 screenshots read at thumbnail size.

Stuck? [Google Play ASO 2026: new ranking rules you can't ignore](https://www.youtube.com/watch?v=yYZhkhxD2Fc), ASO PRO by ASOMobile

## Testing phase

**Before the public sees it, 5 to 10 people who have the problem use a real build.** Hand one of them the phone, say nothing, and note where they pause. Then ask what they expected to happen, never whether they like it. People are polite about apps and honest with their thumbs.

- **EAS:** Expo's cloud. `eas build` makes the app for the stores, `eas submit` sends it there.
- **TestFlight:** Apple's beta app. Testers install it, then your app through a link.
- **Play testing:** Google's version. Internal testing is instant, closed testing counts toward the 14 days.

Learn more:

- Video: [Expo EAS CLI: submit to the App Store and test with TestFlight](https://www.youtube.com/watch?v=PdwYDatvJ2I), MissCoding
- Docs: [Official TestFlight overview](https://developer.apple.com/testflight/)

### Step 3: Test with real people

_One person using it in silence shows what no survey will._

1. **Build a test version and send it to both stores:**

   ```bash
   eas build --profile production --platform all --auto-submit
   ```

   > About 30 minutes. It shows up under TestFlight in App Store Connect. Android, the first time: upload the .aab from the EAS build page under Internal testing by hand.

2. **Make the invite links:** a public TestFlight link, and an Internal testing link in Play Console. New Play account? Also start Closed testing with 12 testers, the 14 days start now.

3. **Send each tester the link yourself**, with one line on what the app does.

   > Example: "We made a small app that ranks your lifts against people your size. It's an early beta, would you try it this week?"

4. **Watch one tester** in person or on a call, then three more in PostHog Session replay. Say nothing, write down every pause and wrong tap.

5. **Sort what you saw.** Ask Claude Code:

   Prompt:

   ```text
   Here are my notes from watching testers: [paste]. Create docs/FEEDBACK.md: group them into bugs, confusing screens and wishes, count how many testers hit each, and put the one that stops people before the first win at the top.
   ```

6. **Fix it in the Build loop**, top of the list first, then send a new test build the same way.

**Done when:** 5 testers have the app, you watched one use it, and docs/FEEDBACK.md says what to fix first.

Stuck? [Setting up a closed test on Google Play Console](https://www.youtube.com/watch?v=X4atrva5nwg), TechWorld Plaza

## Shipping phase

**The real build goes to review, and you press release on a morning you pick.** Approval and launch day are two different things. Then tell the people who already care, and post in 2 or 3 places from the launch list below. Launch sites bring visits, your niche brings users.

Learn more:

- Video: [Things I always do before launching new apps (4 apps, 100% profitable)](https://www.youtube.com/watch?v=MnF-zJhyUtE), Chris Raroque
- Docs: [Official App Review Guidelines](https://developer.apple.com/app-store/review/guidelines/)

### Step 4: Ship the real build

_A launch you read tells you where to spend the next month._

1. **Fill in both stores:** the texts and screenshots from docs/STORE.md, your privacy policy link, App Privacy (Apple), Data safety (Google), category and age rating. Login in your app? Add a demo account for the reviewer.

2. **Tell the reviewer what's different.** Apple rejects apps that look like copies of apps already in the store (guideline 4.3). In App Store Connect, under App Review Information, write two lines in Notes: what your app does that its rivals don't, from What we do differently in docs/research.md.

   > Example: "Ranks each lift against lifters of the same bodyweight and age. The trackers we compared only log weights."

3. **Make the real build** once every fix has gone through the Build loop:

   ```bash
   eas build --profile production --platform all --auto-submit
   ```

4. **Submit for review, but release by hand.** App Store Connect: **Manually release this version**. Play Console: turn on **Managed publishing**, then promote the build to Production.

   > Rejected? Fix only the reason given in the Build loop, then reply in App Store Connect. Most are fixed in a day. Rejected under 4.3? Show the reviewer, with screenshots, what only your app does.

5. **Write the posts** for 2 or 3 places from the launch list below, after reading each place's rules. Ask Claude Code:

   Prompt:

   ```text
   Read docs/PRD.md and docs/STORE.md. Write one launch post for each of [places]: the problem in the user's own words, what we built in one line, one honest rough edge, one question, and the link once. Match each place's tone, no hype words. Save them in docs/LAUNCH.md.
   ```

6. **On a weekday morning, press release** in both stores. Message your testers one by one with the store link, post everywhere you planned, and answer every comment the same day.

7. **Read the first week:** downloads next to the day of each post. Write one line in docs/LAUNCH.md and push.

   > Example: "The Reddit post brought most of the first 60 downloads. Product Hunt brought builders, not lifters."

**Done when:** The app is live, every post is up, and docs/LAUNCH.md has one line on what brought the first downloads.

Stuck? [How to get your first 100 users](https://www.youtube.com/watch?v=Da7z-RcS6dM), PodiumVC

## Launch list

**Pick 2 or 3 by who your users are, not by how big the place is.**

| Place | Who you reach |
| --- | --- |
| Your niche's subreddit | People with the problem |
| TikTok | Your users, strangers included |
| Instagram | Your users |
| Facebook groups | Your users, in their own corner |
| Discord | Tight communities in your niche |
| Newsletters | Readers who trust the writer |
| Podcasts | Listeners who trust the host |
| YouTube | People searching for a fix |
| Product Hunt | Founders and early adopters |
| Hacker News (Show HN) | Developers |
| GitHub | Developers, if your app is open source |
| r/SideProject | Builders |
| r/iOSapps | iPhone app hunters |
| X | Other builders |
| Threads | Other builders |
| Indie Hackers | Founders |
| BetaList | Early adopters |
| Uneed | Makers |
| Microlaunch | Makers |
