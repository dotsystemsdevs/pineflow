# 3. Tools and rules

**Write down every tech choice, then give your agent the memory it reads before every session.**

- Time: 1 h
- You end with: docs/TechDesign.md and AGENTS.md
- Before this: Idea and PRD done

## What is a stack

**Your stack is the set of tools your app is built with, one for each job.** Decide them all now, from your PRD: leave one open and the agent picks its own halfway through the build. This is ours, and the headings of your TechDesign.md:

- **App: Expo + Expo Router:** What people see and tap, its screens, one codebase for iPhone and Android.
- **Look: StyleSheet:** How it looks. Built into React Native, enough for a small MVP.
- **Data: on the phone first:** Save data on the device. Add Supabase, a database online, only if users need accounts. Then every table gets Row Level Security, the rules for who may read which rows, and only the publishable key goes in the app.
- **Payments: RevenueCat:** Subscriptions, only if the app charges.
- **Builds: EAS:** Expo's cloud service that builds the app for the stores.

Learn more:

- Video: [Demystifying the technology stack for non-technical founders](https://www.youtube.com/watch?v=SlGj5vlpurA), Imaginovation
- Docs: [Official Expo documentation](https://docs.expo.dev/)

### Step 1: Lock your stack

_Every open choice is one the agent makes for you._

1. **Let Claude Code draft docs/TechDesign.md** from your PRD:

   Prompt:

   ```text
   Read docs/PRD.md. Create docs/TechDesign.md with one heading per layer: App, Look, Data, Payments, Builds. Under each, one line: the simplest, most robust tool for this app and why. Pick popular, boring tools. No login unless the PRD truly needs one. If Data uses Supabase, add: Row Level Security on every table, only the publishable (anon) key in the app, never the service_role key.
   ```

2. **Read every line and decide.** The agent suggests, you choose. Ask why if a line is unclear, and cut anything your PRD doesn't need.

   > Example: Data: saved on the phone, a lift log doesn't need an account.

3. **Connect EAS** now, not at launch. Run this in your project folder: it installs EAS, signs you in with your Expo account from Setup and links the project to it.

   ```bash
   npm install -g eas-cli
   eas login
   eas init
   ```

4. **Mac says permission denied (EACCES)?** Run the first line again with `sudo` in front.

5. **Check it works:**

   ```bash
   eas whoami
   ```

   > Your Expo username. EAS is connected.

**Done when:** Every tool has one line with a reason, and `eas whoami` prints your username.

Stuck? [How to set up EAS for your React Native project](https://www.youtube.com/watch?v=OftUidMky2o), Coding Nerds

## Give the agent a memory

**Every new session starts blank.** AGENTS.md is one page of rules your agent reads first, so it stops guessing how your project works. Claude Code opens CLAUDE.md, so that file holds one line pointing to AGENTS.md.

Learn more:

- Video: [Claude Code memory, a tutorial](https://www.youtube.com/watch?v=TXcr0x9SIXA), Jack Roberts
- Docs: [Official Claude Code memory documentation](https://code.claude.com/docs/en/memory)

### Step 2: Write AGENTS.md

_Rules written once, followed every session._

1. **Your project already has an AGENTS.md from Expo,** with Expo's own rules, and a CLAUDE.md with the line `@AGENTS.md`. Keep both. Let Claude Code add your project's part below Expo's:

   Prompt:

   ```text
   Read docs/PRD.md, docs/TechDesign.md, package.json and AGENTS.md. Keep every line Expo wrote in AGENTS.md. Below it, add four headings, the whole file under 150 lines. Stack: one line from TechDesign.md, with the Expo SDK version. Folders: where screens and shared parts live in this project. Rules: no file over 500 lines, never overwrite without asking, 3 tests per feature. Never touch: .env and package-lock.json, and never write secrets in this file. If CLAUDE.md is missing, create it with one line: @AGENTS.md
   ```

2. **Read it and add one rule of your own**, something you never want the agent to do. Keep it short: long files get skimmed, by agents too. Never touch keeps the agent out of .env, where your secret keys live, and package-lock.json, which pins your package versions.

   > Example: ask before adding a new package.

3. **Change a rule later?** Update AGENTS.md in the same commit, so the rules always match the code.

4. **Check it:** open a new Claude Code session and ask:

   Prompt:

   ```text
   What are the rules of this project?
   ```

   > Missing a rule? Add it to AGENTS.md and ask again.

**Done when:** A new session lists your rules without you pasting them.

Stuck? [How I write my AGENTS.md files, best practices](https://www.youtube.com/watch?v=6w88NVf2_lY), NeuralNine

## Add skills

**A skill is a how-to guide your agent loads when it needs it.** Expo and Callstack, a React Native company, publish their own, so the agent follows today's best practice instead of old habits.

**The Expo plugin also connects Expo's MCP server.** It works with a free Expo account; only its docs search needs a paid EAS plan. MCP lets the agent use a service directly: it reads Expo's docs, adds packages that fit your SDK, and reads why an EAS build failed or a TestFlight build crashed, without you copying anything over.

Learn more:

- Video: [How Claude Code skills work, and how to install them](https://www.youtube.com/watch?v=mbrRvCIs57o), Tyler Germain
- Docs: [Official Claude Code skills documentation](https://code.claude.com/docs/en/skills)
- Docs: [Official Expo MCP server documentation](https://docs.expo.dev/eas/ai/mcp/)

### Step 3: Add the agent skills

_The agent gets each tool's current best practice instead of guessing._

1. **Install the Expo plugin.** Your project already turns it on in `.claude/settings.json`, so Claude Code offers to install it when you open the folder: say yes. Not asked? Type `/plugins`, search **expo** and click Install. These are Expo's own skills, and they update themselves.

2. **Add Callstack's React Native best practices** from the terminal, in your project folder:

   ```bash
   npx skills@latest add callstackincubator/agent-skills --skill react-native-best-practices -a claude-code -y
   ```

3. **Start a new Claude Code session** so it loads them.

4. **Sign in to Expo's MCP server:** type `/mcp`, pick **expo** and sign in with your Expo account in the browser.

5. **expo not in the list?** Add it from the terminal, then type `/mcp` again:

   ```bash
   claude mcp add --transport http expo https://mcp.expo.dev/mcp
   ```

6. **Check it:** ask Claude Code:

   Prompt:

   ```text
   Which skills and MCP servers do you have for Expo and React Native?
   ```

   > It names Expo skills, react-native-best-practices and the expo MCP server. Missing one? Install it again.

7. **Using RevenueCat, Supabase or PostHog later?** Each has its own plugin in the same `/plugins` list. Add it the day you add the tool.

**Done when:** A new session names the Expo and Callstack skills and the expo MCP server.

Stuck? [Add plugins in VS Code using the Claude Code extension](https://www.youtube.com/watch?v=MpO1iW1WtVY), Kashif Aziz Awan

## Add hooks

**AGENTS.md is advice, a hook is a rule.** The agent can forget a line in AGENTS.md. A hook is a small command Claude Code runs every time, whatever the agent thinks. Ours do two things: block every edit to .env, and run the type check and tests before the agent may call a task done.

Learn more:

- Video: [Claude Code hooks explained in 5 minutes](https://www.youtube.com/watch?v=6_y3AtkgjqA), shanraisshan
- Docs: [Official Claude Code hooks guide](https://code.claude.com/docs/en/hooks-guide)

### Step 4: Add hooks

_Rules the agent can't forget, however long the session._

1. **Download settings.json** below and let it replace the one in your project's `.claude` folder: `.claude/settings.json`. Ours keeps Expo's plugin line and adds the two hooks.

2. **Start a new Claude Code session** so it loads the hooks, then type `/hooks`.

   > Two hooks: PreToolUse guards .env, Stop runs the checks.

3. **Check the first one:** ask Claude Code:

   Prompt:

   ```text
   Add a line TEST=1 to .env
   ```

   > Blocked: .env holds the secret keys. The hook works.

4. **The second one wakes up in the Build loop.** When the agent finishes a change, it runs `npx tsc --noEmit` and your tests. Something fails? The agent gets the error and keeps fixing instead of saying done.

5. **Save a snapshot** of your stack, rules, skills and hooks:

   ```bash
   git add .
   git commit -m "Add stack, rules, skills and hooks"
   git push
   ```

**Done when:** The agent can't edit .env, and a failing check sends it back to fixing.

Stuck? [Claude Code hooks, explained and demoed](https://www.youtube.com/watch?v=3Y4XQ2obPIo), TechXion
