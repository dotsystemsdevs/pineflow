# 2. Idea and PRD

**Check that people really have the problem, then write one page that says what you'll build.**

- Time: 2-3 h
- You end with: docs/research.md and docs/PRD.md
- Before this: Setup done

The AI can do most of the work here, but the idea is yours. Know the people, their pain and why it matters better than anyone. That's the difference between a founder and someone just vibing. With experience you hand more to the AI, but you still decide.

## Find a real problem

**Start from a problem people already complain about**, not a clever idea. Something that bugs you every week, an app people hate, a job they still do by hand.

Learn more:

- Video: [Paul Graham on how to get startup ideas](https://www.youtube.com/watch?v=FlCWg-KkUN4), Startup Archive
- Docs: [Paul Graham: How to get startup ideas](https://paulgraham.com/startupideas.html)

### Step 1: Pick your problem

_Everything after this is built around one problem._

1. **No idea yet? Search Reddit, TikTok and the rest for wishes**, not ideas. Add a topic you know, and try "I wish there was an app", "I'd pay for" or:

   Search: `"is there an app that"`

2. **Or read the 1- and 2-star reviews** of an app you use. Note what people keep asking for.

3. **Write down three problems** you found, or that annoy you. Pick a problem you have yourself, or know well. You'll make better calls on every screen.

4. **Pick the one you understand best.** A boring problem people pay to solve beats an exciting one nobody pays for.

**Done when:** You can say your problem in one sentence. Example: lifters who train alone never know when they're ready to try a new max.

Stuck? [Find your next app idea in 10,000 bad reviews](https://www.youtube.com/watch?v=onGtPZbSSNc), Code with Beto

## Check the demand

**Look for proof that people want it:** rival apps, searches and complaints. Ten rival apps is good news, it means there's a market. A friend saying 'nice idea' is not proof.

Learn more:

- Video: [3 steps to validate your startup idea](https://www.youtube.com/watch?v=mNTsaclFl_E), Arjun Mahadevan
- Docs: [Official Google Trends help](https://support.google.com/trends/)

### Step 2: Research the demand

_Being wrong on paper is cheaper than being wrong in code._

1. **Create docs/research.md.** Ask Claude Code:

   Prompt:

   ```text
   Create docs/research.md with five headings: Kill criteria, Searches, Complaints, Competitors, What we do differently.
   ```

2. **Write your stop rule first**, before you look. For example: if I can't find 10 real complaints in 1 hour, I stop.

3. **Search the App Store and Google Play** like a user would, for example `gym log`. Write how many apps you find.

   > Dozens of apps means a real market. None at all is a red flag.

4. **Check** [Google Trends](https://trends.google.com) **over 12 months:** rising, flat or one spike?

5. **Find 3 rival apps and their weak spots.** Their complaints are your feature list. Ask AI, with web search on, and paste the answer under Competitors:

   Prompt:

   ```text
   My app idea: [one sentence]. Find the 3 closest rival apps in the App Store and Google Play. For each, give one strength, one gap, and the 3 most common complaints in its reviews, with a real quote each. Then tell me which complaint none of them has fixed.
   ```

6. **Write one sentence under What we do differently:** the thing none of the three does. Apple asks the same at App Review, since it rejects apps that look like copies.

   > Example: ranks each lift against lifters of the same bodyweight, the others only log weights.

7. **Talk to 5 people** who have the problem. Find where they hang out, Reddit, TikTok, Instagram or X, and send a message. Ask about the problem, not your app.

**Done when:** docs/research.md has real quotes, 3 rivals, what you do differently and a stop rule. The idea holds up, or you just saved months.

Stuck? [How to validate your app idea even with zero audience](https://www.youtube.com/watch?v=BSUCVVhi6Lk), paulnocode

## Write the PRD

**A PRD is one page that says what you're building:** who it's for, what it does and what it won't do. Your agent reads it every session, so every gap becomes a guess.

Learn more:

- Video: [What is an MVP? Explained with real examples](https://www.youtube.com/watch?v=MHqz8oNSraI), Eleken
- Docs: [Shape Up, the free book on scoping work](https://basecamp.com/shapeup)

### Step 3: Write your PRD

_This is the page your agent reads before it builds anything._

1. **Create docs/PRD.md.** Ask Claude Code:

   Prompt:

   ```text
   Create docs/PRD.md with these headings: User, Goal, MVP, Out of scope, Success.
   ```

2. **User:** one real person in one real situation.

   > Example: a lifter who trains alone three times a week and wants to know when to go for a new max.

3. **Goal:** what the app does, in one sentence. Can't say it in one sentence? You're not ready to build yet.

   > Example: log a lift and see when you're ready for a new max.

4. **MVP:** 5 features or fewer, each one a screen on the phone. Cut until it hurts. The first version does one thing well.

5. **Out of scope:** at least 3 things you won't build. If it isn't written down, the agent builds it anyway.

6. **Success:** one test per feature that you can check by hand.

   > Example: a new user logs a lift in under a minute, on their phone.

7. **Check it:** upload docs/PRD.md to ChatGPT, Gemini or Claude on the web, in a new chat, and ask:

   Prompt:

   ```text
   Read this PRD. In your own words, what app should I build, and for whom?
   ```

   > Wrong somewhere? Fix that part of the PRD and ask again.

8. **Save a snapshot** of your plan:

   ```bash
   git add .
   git commit -m "Add research and PRD"
   git push
   ```

**Done when:** A new chat reads your PRD and describes your app back to you, correctly.

Stuck? [How to write a great PRD, step by step](https://www.youtube.com/watch?v=jdSFQG7dyrk), ClickUp
