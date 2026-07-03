# vibeprompt

Open-source vibe coding cookbook, fix library, prompt collection, and curated tool list for developers shipping with AI. Browse 56 battle-tested prompts, 50 field-tested fixes, 19 articles, and a 10-step playbook from idea to shipped product.

[![CI](https://github.com/dotsystemsdevs/vibe-prompt/actions/workflows/ci.yml/badge.svg)](https://github.com/dotsystemsdevs/vibe-prompt/actions/workflows/ci.yml)
![License](https://img.shields.io/github/license/dotsystemsdevs/vibe-prompt)
![Stars](https://img.shields.io/github/stars/dotsystemsdevs/vibe-prompt?style=flat)
![Issues](https://img.shields.io/github/issues/dotsystemsdevs/vibe-prompt?style=flat)
![PRs](https://img.shields.io/github/issues-pr/dotsystemsdevs/vibe-prompt?style=flat)

**Live**: https://vibeprompt.tech

---

## Featured on

- [awesome-vibe-coding-resources](https://github.com/acvnace/awesome-vibe-coding-resources) (Documentation for AI Coding)
- [awesome-vibe-coding](https://github.com/ai-for-developers/awesome-vibe-coding/pull/68) (Project Documentation, PR open)

---

## What This Is

vibeprompt is a free, open-source toolkit for developers shipping with AI.

- **Cookbook** , 10-step workflow from environment setup to iterate, with prompts wired into each stage
- **Fixes** , 50 searchable failure modes (security, deploy, conversion, burnout) with copy-paste recovery prompts
- **Articles** , 19 long-form posts with receipts from real shipped apps
- **Awesome** , 100 curated AI coding tools grouped by cookbook stage
- **Templates** , AGENTS.md, PRD, architecture, and memory-bank starters
- No login required. No paywall. MIT licensed.

---

## Routes

| Route | What it does |
|---|---|
| `/` | Homepage |
| `/workflow` | 10-step vibe coding cookbook with prompts per stage |
| `/fixes` | Fix library; `/fixes/[id]` for each failure mode |
| `/weekly` | Weekly Fix newsletter archive; `/weekly/[slug]` per issue |
| `/articles` | Article index; `/articles/[slug]` for each post |
| `/awesome` | Curated list of AI/vibe coding tools |
| `/templates` | Downloadable AGENTS.md, PRD, and project doc templates |
| `/built-with` | Case studies from shipped apps; `/built-with/[slug]` per app |
| `/compare` | How vibeprompt compares to other resources |
| `/submit-fix` | Submit a field-tested fix for review |
| `/about` | About the project |
| `/faq` | FAQ |
| `/contact` | Contact |
| `/privacy` | Privacy policy |
| `/cookie-policy` | Cookie policy |

---

## Project Structure

```text
vibeprompt/
├─ src/
│  ├─ app/                  # Next.js App Router pages
│  │  ├─ api/               # copy counts, fix submissions, doc generator
│  │  ├─ workflow/          # Cookbook
│  │  ├─ fixes/             # Fix library
│  │  ├─ articles/          # Long-form posts
│  │  └─ awesome/           # Curated tool list
│  ├─ components/           # UI and feature components
│  └─ lib/
│     ├─ categories.ts      # Slug to folder mappings (protected)
│     ├─ prompt-library.ts  # Loads prompts from markdown
│     ├─ workflow-steps.ts  # 10-step workflow metadata
│     ├─ list-problems.ts   # Fix library entries
│     ├─ awesome-data.ts    # Curated tool list
│     └─ types.ts           # Shared types (protected)
├─ content/articles/        # 19 markdown articles
├─ prompt-library/          # 56 public prompts (loaded at build time)
│  ├─ Agent Setup/
│  ├─ Architecture Stack/
│  ├─ Build Ship/
│  ├─ Launch Growth/
│  ├─ Ops Maintenance/
│  ├─ PRD Spec/
│  ├─ Prompting Craft/
│  ├─ Research Validate/
│  └─ Testing Quality/
├─ public/
│  ├─ templates/            # AGENTS.md, PRD, and related starters
│  ├─ llms.txt              # AI crawler context file
│  └─ robots.txt            # Explicit AI bot permissions
├─ AGENTS.md                # Contributor and agent guide
└─ CLAUDE.md                # Claude Code project instructions
```

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16 (App Router) |
| UI | React 19, Tailwind CSS v4, shadcn/ui |
| Auth | None in the product (app is public, no sign-in) |
| KV storage | Vercel KV (copy counts and related use) |
| Database | Supabase client present, optional for future features |
| Animations | GSAP |
| Analytics | Vercel Analytics |
| Language | TypeScript (strict) |

---

## Getting Started

```bash
npm install
npm run dev         # localhost:3000
npm run lint
npm run typecheck
npm run build
```

Node **20+** (see `package.json` `engines`). Run commands from the repo root.

Environment variables needed in `.env.local`:

```env
KV_REST_API_URL=
KV_REST_API_TOKEN=
# Optional:
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
```

---

## Prompt Library

56 markdown prompts in `prompt-library/`, organized by stage (folder names differ from on-site category labels, see `src/lib/categories.ts`):

| Folder | Site label | What it covers |
|---|---|---|
| `Agent Setup/` | Context | AGENTS.md, CLAUDE.md, memory banks |
| `Research Validate/` | Research | Validation, kill criteria, competitive analysis |
| `PRD Spec/` | PRD | Requirements, acceptance criteria, scope |
| `Architecture Stack/` | Stack | Stack decisions, system design |
| `Build Ship/` | Build | Feature implementation, atomic tasks |
| `Prompting Craft/` | Prompting | Prompt chains, output control |
| `Testing Quality/` | Quality | Code review, security, testing |
| `Launch Growth/` | Ship | Distribution, positioning, launch |
| `Ops Maintenance/` | Iterate | Post-launch ops and reliability |

Prompts are browsed and copied from the cookbook at `/workflow`, not as standalone pages.

**Adding a prompt**

1. Open `src/lib/categories.ts` and use the `dirName` for the right folder under `prompt-library/`
2. Add a kebab-case `.md` file that matches the format in [`CONTRIBUTING.md`](./CONTRIBUTING.md)
3. Open a PR, for example: `prompt(category): add your-prompt-name`

---

## Roadmap

**Done**

- 56 prompts, 50 fixes, 19 articles, 100 awesome tools, 10-step cookbook, templates, built-with case studies, public access with no login

**Next (see also [ROADMAP.md](./ROADMAP.md) and [Issues](https://github.com/dotsystemsdevs/vibe-prompt/issues))**

- Community prompts and content (open issues: labels `content`, `good first issue`)
- Hardening copy counts and any infra follow-ups
- Ongoing quality: search, redirects (for example `www` to apex), docs

---

## Contributing

For people: start with [`CONTRIBUTING.md`](./CONTRIBUTING.md). For agents and full stack detail: `AGENTS.md`.

- **Quick contribution**: copy fix, UI, mobile, add a prompt, add a tool, article tweak
- **Roadmap**: [`ROADMAP.md`](./ROADMAP.md)
- **Issues**: https://github.com/dotsystemsdevs/vibe-prompt/issues
- **PRs**: https://github.com/dotsystemsdevs/vibe-prompt/pulls

---

## License

MIT, see [LICENSE](./LICENSE)
