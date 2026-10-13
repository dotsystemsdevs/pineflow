# 1. Setup

**Seven short steps, from an empty computer to your first app on your phone.**

- Time: 45 min
- You end with: A working dev environment + one AI tool wired to your repo
- Before this: Nothing, we start from zero.

## VS Code

**VS Code is the app you build in:** your files, your code and a terminal in one window. Already use Cursor, Windsurf or Zed? The steps are almost the same.

Learn more:

- Video: [Learn Visual Studio Code in 15 minutes](https://www.youtube.com/watch?v=f8_uF_IDV50), Visual Studio Code
- Docs: [Official VS Code documentation](https://code.visualstudio.com/docs)

### Step 1: Install VS Code

_Everything else happens in this window._

1. **Download** [VS Code](https://code.visualstudio.com), install it and open it.

2. **Make a folder called apps** on your Desktop.

3. **Open it in VS Code:** File > Open Folder, then pick `apps`.

**Done when:** VS Code is open on your apps folder.

Stuck? [Install VS Code on Windows, macOS and Linux](https://www.youtube.com/watch?v=lA5Mlg31jVU), SkillRecall

## The terminal

**The terminal is where you type commands.** Type one, press Enter, and it answers. Mac calls it Terminal, Windows calls it PowerShell.

Four commands to find your way:

```
pwd        # where am I?
ls         # what's in this folder? (dir also works on Windows)
cd apps    # go into the folder apps
cd ..      # go back up one folder
```

Learn more:

- Video: [How to use the command line, terminal basics](https://www.youtube.com/watch?v=5XgBd6rjuDQ), Jesse Showalter
- Docs: [Official VS Code terminal docs](https://code.visualstudio.com/docs/terminal/basics)

### Step 2: Open the terminal

_Every install from here is one line you paste in here._

1. **Open it:** Terminal > New Terminal, at the bottom.

2. **Check it works:**

   ```bash
   pwd
   ```

   > It prints your apps folder. The terminal works.

**Done when:** The terminal at the bottom prints your apps folder.

Stuck? [How to open the terminal in VS Code](https://www.youtube.com/watch?v=H3I4fMrjelg), The Code City

## Git

**Git saves snapshots of your project**, like save points in a game. Each snapshot is a *commit*, and your folder with all its snapshots is a *repo*.

Learn more:

- Video: [Git explained in 100 seconds](https://www.youtube.com/watch?v=hwP7WQkmECE), Fireship
- Docs: [Official Git documentation](https://git-scm.com/doc)

### Step 3: Install Git

_Git is how you undo what the agent breaks._

1. **Install it** in the terminal:

   Mac:

   ```bash
   xcode-select --install
   ```

   Windows:

   ```powershell
   winget install --id Git.Git -e
   ```

2. **Say yes.** Mac: click Install. Windows: type Y and press Enter.

3. **Windows says winget is not recognized?** Use the [Git installer](https://git-scm.com/downloads) instead.

4. **Open a fresh terminal:** bin icon, then Terminal > New Terminal.

5. **Check it works:**

   ```bash
   git --version
   ```

   > git version 2.x. Git is installed.

**Done when:** `git --version` prints a version number.

Stuck? [How to install Git on Mac and Windows](https://www.youtube.com/watch?v=7ouVv6PFZGc), The Common Coder

## Node.js

**Node.js runs JavaScript on your computer.** You never open it, but Expo and your agent need it. It comes with *npm*, which installs packages.

Learn more:

- Video: [Node.js explained in 100 seconds](https://www.youtube.com/watch?v=yxJG-edtgPM), 100 Seconds Paper
- Docs: [Official Node.js documentation](https://nodejs.org/en/learn)

### Step 4: Install Node.js

_Expo won't start without it._

1. **Mac:** download the [LTS installer](https://nodejs.org/en/download) and run it.

2. **Windows:**

   ```bash
   winget install OpenJS.NodeJS.LTS
   ```

3. **Open a fresh terminal** so it finds Node.

4. **Check it works:**

   ```bash
   node -v
   ```

   > v20 or higher. Node is installed.

**Done when:** `node -v` prints v20 or higher.

Stuck? [How to install Node.js (2026)](https://www.youtube.com/watch?v=ddD7JkzKWus), DevWithSameer

## Claude Code

**Claude Code is your AI agent.** It works in your project: it reads files, edits code and checks the result. You decide, it types.

Learn more:

- Video: [What are AI agents?](https://www.youtube.com/watch?v=F8NKVhkZZWI), IBM Technology
- Docs: [Official Claude Code documentation](https://code.claude.com/docs/en/vs-code)

### Step 5: Install Claude Code

_From here on, the agent writes the code._

1. **Open Extensions** in VS Code: Ctrl + Shift + X (Mac: Cmd + Shift + X).

2. **Search Claude Code** and install the one by Anthropic.

3. **Open it** with the Claude icon at the top right.

4. **Log in** with your Claude account when it asks. You need a paid plan: Pro ($20 a month) is enough to start.

5. **Know your limit.** Every plan has a usage limit that resets after a few hours, and long build days on Pro often reach it. Type `/usage` to see what's left. Hitting it most days? That's when Max ($100 a month) pays off.

6. **Check it works:** ask it what's in your folder.

   > It answers in the panel. Your agent is ready.

**Done when:** Claude Code answers in its panel.

Stuck? [How to install the Claude Code extension in VS Code](https://www.youtube.com/watch?v=lZdfMyUfYKY), Jamie Nudelman

## Expo

**Expo turns your code into an iPhone and Android app.** The free Expo Go app shows it on your phone while you build.

Learn more:

- Video: [Expo in 100 seconds](https://www.youtube.com/watch?v=vFW_TxKLyrE), Fireship
- Docs: [Official Expo documentation](https://docs.expo.dev/)

### Step 6: Start your app

_Your own app on your own phone, today._

1. **Make a free Expo account** at [expo.dev](https://expo.dev/signup). You'll use it later to build your app for the stores.

2. **Get** [Expo Go](https://expo.dev/go) **on your phone**, free in both app stores, and log in with the same account.

3. **Create your app and start it.** Asked Ok to proceed? Press Enter.

   ```bash
   npx create-expo-app@latest my-app
   cd my-app
   npx expo start
   ```

4. **Scan the QR code.** iPhone: with the camera. Android: in Expo Go.

5. **Check it works:** your app opens on your phone.

6. **Look in the folder:** Expo already wrote AGENTS.md and CLAUDE.md, the files your agent reads first, and a `.claude` folder that turns on Expo's plugin for Claude Code. You'll add to them in Tools and rules.

**Done when:** Your app is open on your phone.

Stuck? [How to start your first Expo project in 2 minutes](https://www.youtube.com/watch?v=yOUAEfDuI44), Expo

## GitHub

**GitHub keeps your snapshots online.** Free, private if you want, and your work survives a broken laptop.

Learn more:

- Video: [What is GitHub?](https://www.youtube.com/watch?v=pBy1zgt0XPc), GitHub
- Docs: [Official GitHub documentation](https://docs.github.com/en/get-started)

### Step 7: Put it on GitHub

_Your backup from now on._

1. **Create a free** [GitHub account](https://github.com/signup).

2. **Make a new repository** called my-app (you can rename it later): the + at the top right. Leave every box unticked.

3. **Copy the URL** it shows.

4. **Stop the app** with Ctrl + C.

5. **Keep your secret keys off GitHub:** open `.gitignore` in VS Code and add a line at the bottom that says `.env`. Expo's own list leaves it out, and later chapters keep keys there.

6. **Tell Git who you are**, with your own name and email:

   ```bash
   git config --global user.name "Your Name"
   git config --global user.email "you@example.com"
   ```

7. **Save and upload**, with your URL on the fourth line:

   ```bash
   git init
   git add .
   git commit -m "First commit"
   git remote add origin https://github.com/you/my-app.git
   git push -u origin HEAD
   ```

8. **Sign in** when VS Code asks.

9. **Check it works:**

   ```bash
   git remote -v
   ```

   > Two lines with github.com/you/my-app. You're connected.

10. **Open my-app in VS Code:** File > Open Folder, then pick `my-app`. From here on, you and Claude Code work in this folder.

**Done when:** Your project is on GitHub.

Stuck? [Upload a project to GitHub from VS Code (2026)](https://www.youtube.com/watch?v=JB7YD7OKm5g), The Code City
