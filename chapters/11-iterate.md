# 11. Iterate

**Every week: read what happened, pick one change, ship it, and check if it worked.**

- Time: 1 hour a week
- You end with: docs/WEEKLY.md, with one change a week, its guess and its result
- Before this: Get users done

## What is Iterate

**People use your app now, so stop guessing and start reading.** Once a week: read the funnel, find the biggest leak, patch one thing, and read the result a week later. One change at a time, with the number you expect written down first, so you know what moved it.

**Every user falls through the same steps, and some leak out at each one.** Read it top to bottom, in the same order every week. The biggest drop is where you work this week, not the step you like working on.

**Example: 100 people who downloaded**

- Downloaded: 100 (App Store Connect, Play Console)
- Finished onboarding: 70 (PostHog, funnel from onboarding)
- Got the first win: 55 (PostHog, funnel)
- Came back day 1: 22 (PostHog retention)
- Came back day 7: 15 (PostHog retention)
- Paid: 9 (RevenueCat, trial to paid)

Here day 1 leaks most, so this week is about the first session. Crashes sit beside the funnel: a crash leaks people at every step, so fix those first.

## Find your leak

**Most apps leak in the same places.** Pick the step where your funnel drops most, open the problem that sounds like yours, and try the patch before you invent your own. Where it says "our app", the number comes from apps we run.

#### Nobody downloads

**You see:** A handful of downloads a day, and nothing you do moves it.

**Try this week:** Post every day for two weeks with the app on screen, then count next-day downloads, not views.

- Downloads come in spikes: several posts or creators on the same day move your store ranking, and ranking brings more traffic.
- Show the app in every post. Views from people without your problem bring nothing.
- Keep the routine from Get users before you touch the app. Early on, posts make people search.

- Video: [How To Reach 10,000 App Users (Beginner Marketing)](https://www.youtube.com/watch?v=e_t1gYkvZkI), YouTube
- Video: [How He Got 1,000 App Users Using No Paid Ads](https://www.youtube.com/watch?v=COxM0zKfnos), Cal AI founder

#### Views, but no downloads

**You see:** A post spreads and nobody searches. Our app: one post got 6,600 views and 2 comments.

**Try this week:** Remake the post that brought the most searches, not the one with the most views, with the app on the last slide.

- Show the app in the post and say its name, so people know what to search for.
- Measure posts by next-day store searches and downloads, not views.
- Put the app name in anything people share, so it works as a search word.

- Video: [10 Proven App Marketing Strategies to Drive Installs and Retention](https://www.youtube.com/watch?v=N7rhtHNXbr4), YouTube

#### Downloads follow your posts

**You see:** A week without good posts is a week without downloads. Our app: views fell 40%, downloads fell 47% the same week.

**Try this week:** Normal early on. Plan next week's posts before you touch the app, and keep the days you post on fixed.

- Posts make people search, so a quiet week shows up as a quiet store the day after.
- Build search as a second leg: words in your title and subtitle that people type every day.
- Count next-day searches, not views.

- Video: [Why app marketing is changing for indie developers in 2026](https://www.youtube.com/watch?v=HjnXnssrj4M), YouTube

#### You rank for nothing

**You see:** Almost no search impressions in App Store Connect, even for words that describe your app.

**Try this week:** Put the two search words with real volume in your title and subtitle. Type the first letters in the App Store search and see what it suggests.

Prompt:

```text
Read docs/aso.md and suggest a new App Store title (30 characters) and subtitle (30 characters) using the two keywords with the most volume and weakest competition. Show three options.
```

- Title and subtitle do about 80% of the ASO work.
- Go for narrow words where you can reach the top 5 fast, not the big ones.
- Weak competitors (few reviews, bad onboarding) ranking well means the word can be taken.

- Video: [The Most Important Element of ASO (Keyword Research)](https://www.youtube.com/watch?v=bV5_OwDB35o), YouTube
- Video: [App Store Optimization: The Proven ASO Framework for 2026](https://www.youtube.com/watch?v=ytAKZDh5eHU), YouTube

#### People see the page and don't install

**You see:** Product page views are fine, page to download is low.

**Try this week:** Rewrite your first three screenshots: one benefit per picture, five words or fewer, real app screens.

- Only the first three show in search. Put the clearest promise first: OLBG moved its best features there and got +61%.
- Benefit beats feature: "See where your money goes", not "Analytics dashboard".
- Apple reads screenshot text for search now, so use real search words, not "easy to use".
- The cheapest test: change the order of the screenshots you already have.

- Video: [App screenshots best practices](https://www.youtube.com/watch?v=02O8RYWNzQo&t=500), YouTube
- Video: [App Store Screenshots That Get More Downloads](https://www.youtube.com/watch?v=HxS28AOSjRg&t=426), AppScreens

#### More search impressions, same downloads

**You see:** More people see you in search, nobody new installs. Our app: new languages added impressions, not downloads.

**Try this week:** Read search to download, not impressions. Pick one new country and give it screenshots in its own language.

- A new country needs a store page in its own language, with the words people there search for, not a translation.
- Coin Splash got +101% downloads from localized screenshots and metadata alone.
- See Store listing for how to set up a language.

- Video: [ASO for Indie Developers: Boost Your App Without a Big Budget](https://www.youtube.com/watch?v=EH7nipwtxuI), YouTube

#### Onboarding loses them

**You see:** The funnel drops hardest before the first win.

**Try this week:** Find the onboarding screen with the biggest drop in PostHog and make it skippable or cut it.

Prompt:

```text
Look at the onboarding screens in the app. For the [screen name] screen, make the question skippable and move it later. Keep everything else the same.
```

- Fix the screen with the biggest drop first. It pays 2 to 3 times more than anything else ([Sizzle AI, 3:01](https://youtu.be/lXGmWdFLsuM?t=181)).
- Login after the first win, never first ([Coconote, 29:32](https://youtu.be/E_4gRy4O03w?t=1772)).
- Easy questions first, buttons instead of text fields, about five words per screen ([Copia, 13:15](https://youtu.be/D7eaHcznLZU?t=795)).

- Video: [I Studied 1,460 Onboarding Flows. Here's What I Found.](https://www.youtube.com/watch?v=Qsq-Sj_rojU), YouTube
- Video: [Onboarding Best Practices from 200+ Top Apps](https://www.youtube.com/watch?v=vAN7kmpTdy4), YouTube

#### They finish onboarding and stare at an empty screen

**You see:** Onboarding done is high, first win is low.

**Try this week:** Replace the empty home screen with one ready-made first task they can finish in under a minute.

Prompt:

```text
When a new user lands on the home screen with no data, show one example they can finish in under a minute instead of an empty state. Use their onboarding answers to fill it.
```

- Guide new users to 3 to 5 tasks that are sure to work, instead of an empty page.
- The aha moment is the feeling "this solves my problem", not finishing a tour.
- Find it in your best users: what did they do in their first session that the others didn't?

- Video: [Why most apps lose users within the first 60 seconds](https://www.youtube.com/watch?v=lAnx06Zpq2E), YouTube
- Video: [Empty States in product design: 5 practical tips](https://www.youtube.com/watch?v=KIPuLa4wqGY), YouTube

#### They delete it on day one

**You see:** Uninstalls come the same day. Our app: 16 of 28 uninstalls happened on day one.

**Try this week:** Watch five first sessions in PostHog and fix the first place people stall.

- Give the first win in the first session. 80 to 90% of trials start on day 0 ([RevenueCat, 38:44](https://youtu.be/1toNkt5bTgg?t=2324)).
- Ask for notifications after the first win, with a reason, not on the first screen.
- Recordings show why, numbers only show where. Note every pause and wrong tap.

- Video: [PostHog session recordings tutorial, setup and best practices](https://www.youtube.com/watch?v=OyD7rkxpLOw), Vision Labs
- Video: [App Onboarding Best Practices: Why Users Quit Before They Start](https://www.youtube.com/watch?v=lMOMplCvfZA), YouTube

#### Nobody allows notifications

**You see:** Under half say yes to the iOS prompt, so you can't bring anyone back.

**Try this week:** Move the notification prompt to right after the first win, behind your own screen that says what you'll send and when.

Prompt:

```text
Move the notification permission request to right after the user's first [win]. Before the system prompt, show one screen that says what we'll send and how often, with Allow and Not now.
```

- Your own screen first: a "no" there costs nothing, a "no" on the iOS prompt is forever.
- Give a concrete reason: "We'll remind you 3 days before your race", not "Stay updated".
- Some apps convert best asking on day one. Test it, don't assume.

- Video: [Push Notifications: Best Practices for User Re-Engagement](https://www.youtube.com/watch?v=jlBI7u-3rNs), YouTube

#### It crashes

**You see:** Crash reports in App Store Connect or Play Console, or a review that says "it closes".

**Try this week:** Fix crashes before anything else this week. A crash leaks people at every step of the funnel.

Prompt:

```text
Here is the crash log from App Store Connect: [paste]. Find the cause in the code, fix it, and tell me how to check it on my phone.
```

- Check crashes in App Store Connect and Android vitals every week, at the top of the loop.
- Test on the oldest phone you can find, with a slow connection.
- Answer every review that mentions a bug, and say when the fix ships.

#### They like it, but don't come back

**You see:** A good first session, a weak day 7.

**Try this week:** Send three reminders, 1 hour, 1 day and 1 week after install, each under 10 words.

- Tie the app to something they already do every day ([Copia, 17:18](https://youtu.be/D7eaHcznLZU?t=1038)).
- Three reminders instead of two gave one app 13x the conversions ([Clever push, 6:07](https://youtu.be/RRappw2WAAQ?t=367)).
- Short pushes win: 10 words or fewer got 9% taps, over 20 words 3.5% ([App Masters, 6:07](https://youtu.be/6po95EANd-0?t=367)).

- Video: [Copy These Clever Push Notifications](https://www.youtube.com/watch?v=RRappw2WAAQ&t=367), YouTube
- Video: [Push Notifications: Best Practices and Revenue Boosting Strategies](https://www.youtube.com/watch?v=6po95EANd-0&t=367), App Masters

#### Only needed now and then

**You see:** People use it before an event (a race, a trip, an exam) and forget it in between. Our app: most new users had no race yet, and few came back.

**Try this week:** Add one reason to open the app between events: a countdown, a weekly insight or a reminder tied to the date.

- Build a repeat loop between events: reminders, small insights, a countdown ([Retention 2026, 7:15](https://youtu.be/hym-7SASBR0?t=435)).
- Measure at the right time. Our packing list was used the week before a race, not on install day.
- A home screen widget is bigger and easier to see than a notification.

- Video: [Retention for Mobile Apps in 2026: How to Reduce Churn](https://www.youtube.com/watch?v=hym-7SASBR0&t=435), YouTube

#### Day 30 is close to zero

**You see:** Day 1 and day 7 look fine, then it fades a little every week.

**Try this week:** Pick the one action your best users repeat, and make it the first thing on the home screen.

- One daily core action gave an app 60% day 30. Keep the app to one flow and one main number.
- Every use should leave something behind (data, progress, a plan) that makes the next visit better.
- Retention moves slowly. One app needed eight months to reach 50%, so read it monthly.

- Video: [The Hook Model: Why Apps Keep You Addicted](https://www.youtube.com/watch?v=dll8K08gYMo), YouTube
- Video: [How to Finally Understand Your Retention Metrics](https://www.youtube.com/watch?v=tpCxXmaILWI&t=430), YouTube

#### One missed day and they quit

**You see:** Your streak works until it breaks, then people stop for good.

**Try this week:** Change the message after a break from "You lost your streak" to "Welcome back, keep going".

- Use a weekly streak or a share of days (80%, 90%) instead of all or nothing.
- Build in rest days and a way to repair a streak. Assume people will miss days.
- A dot per day (a heat map) feels kinder than a counter that resets to zero.

- Video: [You're Using Streaks Wrong, Here's What Actually Works](https://www.youtube.com/watch?v=1fNDnfJxAFE&t=553), YouTube

#### An update, and nothing changed

**You see:** Your users updated, no new ones came. Our app: a big update, 208 updates, no lift in new users.

**Try this week:** Launch the next big feature as its own small launch: a post, a store screenshot, and a note to your users.

- Features don't bring users by themselves ([Starter Story, 5:05](https://youtu.be/E_sPvPHwpuk?t=305)).
- Write the guess before you ship, so you know what worked means.
- Put the new feature in the first screenshot while it's new.

#### Few people even see the paywall

**You see:** Paywall views are a small share of downloads.

**Try this week:** Show the paywall at one more place: right after the first win, or when they hit a free limit.

- Ask "how many paywalls do you show?" when conversion is low. The basic placements are session start, after the first win and at a usage limit.
- A long onboarding with a purpose still showed the paywall to 91% of users.
- Login after the paywall, never before it.

- Video: [What Happens When You Show 2 Paywalls?](https://www.youtube.com/watch?v=hs_hZS__hvA), YouTube

#### Nobody starts a trial

**You see:** Many paywall views, few trial starts.

**Try this week:** Add a trial timeline to the paywall: today free, day 5 reminder, day 7 first charge.

Prompt:

```text
Add a trial timeline to the paywall with three steps: Today (full access), Day 5 (we remind you), Day 7 (first charge, cancel anytime before). Keep the rest of the paywall the same.
```

- Lower the risk instead of listing more features. A timeline that shows when you're reminded and charged beat everything else.
- One page with a headline, three bullets and one button works in almost every category.
- Reviews on the paywall beat a feature list on iOS.

- Video: [I Studied 100 Paywalls, Here's What I Found](https://www.youtube.com/watch?v=y0f8-CSOJ58), YouTube
- Video: [How to Improve Conversion on Trial Offers](https://www.youtube.com/watch?v=-vZvg_nl4y0), YouTube

#### Trials start, nobody pays

**You see:** Good trial starts, weak trial to paid.

**Try this week:** Send a reminder two days before the trial ends, and let them pick when.

- Remind them before the trial ends: +48% revenue ([Superwall, 45:50](https://youtu.be/zFfBuyKoaDM?t=2750)).
- Good trials and poor payment mean the product is wrong. Pause marketing and fix it ([Starter Story, 6:09](https://youtu.be/rCV-TVCnF6Q?t=369)).
- 7 day trials beat 3 days in most tests: more people get into the app before they decide.

- Video: [Increase free trial to paid conversion rate in 18 minutes](https://www.youtube.com/watch?v=UnZ2RM2k7FM), YouTube
- Video: [Optimizing Trial-to-Paid Conversions](https://www.youtube.com/watch?v=CUUPVF6LK5Q), Sub Club

#### They pay once, then cancel

**You see:** Monthly subscribers leave after the first or second month.

**Try this week:** Make the yearly plan the default on the paywall, shown as a price per week.

- Yearly as default brings the money in early and keeps people through slow months.
- Offer a longer trial or a discount in the cancel flow. It saves many.
- Only discount the yearly plan, never weekly or monthly.

- Video: [Increasing Mobile Subscription Revenue](https://www.youtube.com/watch?v=XaAp3nJipvE), Andy Carvell, Phiture

#### You ask for ratings, nobody rates

**You see:** The rating prompt shows and nothing comes. Our app: 14 prompts, 0 ratings.

**Try this week:** Move the rating prompt to right after a win, and ask your five happiest users yourself.

- Ask right after a win, never when the app opens.
- A personal ask in a DM or an email beats the pop-up.
- iOS shows the system prompt at most three times a year, so don't waste it.

- Video: [ASO for Indie Developers: Visuals, Ratings and Reviews](https://www.youtube.com/watch?v=35SKT5_uckQ), YouTube

#### Users ask for features

**You see:** Emails, reviews and DMs that say "can you add...". Every ask feels urgent.

**Try this week:** Don't build on the first ask. Log it, and when the same need shows up three times and fits your biggest leak, take it through the Build loop as this week's one change.

Prompt:

```text
Add this feature request to docs/TASKS.md under Requests: [paste what they wrote]. If the same need is already there, add one to its count instead. Then tell me which requests have been asked for three times or more.
```

- Ask what they were trying to do when they missed it. The job behind the ask is often smaller than the feature.
- Build it only if it fixes the leak you found in the funnel. A feature for a step that doesn't leak moves nothing.
- When you build it: plan, build, check, commit in the Build loop, with a guess and a read-on date first.
- Tell the people who asked when it ships. They are your first users of it, and often your next review.

- Video: [Boost Conversion and Retention with Jobs to Be Done](https://www.youtube.com/watch?v=6aRgV8ntAnc), Daphne Tideman
- Video: [The Growth Formula: Churn, Retention Wins and Smart Product Bets](https://www.youtube.com/watch?v=XfcY_SdZaH8), Dan Layfield

#### Nobody tells you anything

**You see:** No emails, no reviews, no idea why people leave.

**Try this week:** Add a Send feedback row in settings, and ask people what confused them, never what to build next.

Prompt:

```text
Add a Send feedback row in settings that opens an email to [my email] with the app version and phone model filled in.
```

- Give feedback one place to land, and answer every message the same day.
- Use their words: what people write in reviews is the copy for your store page.
- Don't build what one loud user asked for. Look for the same confusion three times.

- Video: [PostHog session recordings tutorial, setup and best practices](https://www.youtube.com/watch?v=OyD7rkxpLOw), Vision Labs
