import Link from "next/link";
import Image from "next/image";
import { WORKFLOW_STEPS } from "@/lib/workflow-steps";
import { getSiteStats } from "@/lib/site-stats";
import { getRepoContributors } from "@/lib/github-repo-contributors";
import { SlideCard, SlideHeader, SlideRowItem, SlideRowList } from "@/components/layout/slide-ui";
import { COOKBOOK_PHASES } from "@/components/workflow/cookbook-phases";

const GITHUB_URL = "https://github.com/dotsystemsdevs/vibe-prompt";

const EXPLORE = [
  { href: "/workflow", label: "Cookbook", desc: "Ten recipes from idea to live URL. Prompts and checklists at every step." },
  { href: "/fixes", label: "Fixes", desc: "What breaks when you vibe code fast, and how to fix it for real." },
  { href: "/articles", label: "Articles", desc: "Long reads with receipts from apps we actually shipped." },
  { href: "/awesome", label: "Awesome", desc: "Curated tools, mapped to each stage of the cookbook." },
  { href: "/built-with", label: "Built with", desc: "Case studies from teams using this workflow in production." },
  { href: "/templates", label: "Templates", desc: "AGENTS.md, PRD, architecture docs, and memory-bank starters." },
] as const;

export default async function HomePage() {
  const [stats, contributors] = await Promise.all([getSiteStats(), getRepoContributors()]);
  const recipeCount = WORKFLOW_STEPS.length;
  const shown = contributors.slice(0, 8);

  const schemaOrg = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "vibeprompt",
    description: `Open-source vibe coding cookbook: ${stats.fixes} fixes, ${recipeCount} recipes, ${stats.prompts} prompts, and ${stats.apps} shipped app case studies. Free forever.`,
    url: "https://vibeprompt.tech",
    applicationCategory: "DeveloperApplication",
    operatingSystem: "Web",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    keywords: "AI build failures, vibe coding, AI coding fixes, Claude Code, Cursor, AI workflow, open source",
    creator: { "@type": "Organization", name: "vibeprompt", url: "https://vibeprompt.tech" },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }} />

      <SlideCard className="mx-auto max-w-4xl">
        <div className="px-5 py-8 sm:px-8 sm:py-10 lg:px-10 lg:py-12">
          <SlideHeader
            partLabel="Open source · free forever"
            title="The Vibe Coding Cookbook"
            subtitle="From shower thought to shipped"
            lede="Ten recipes, idea to live URL. AI handles the boilerplate. You keep product judgment, architecture, and the ship call."
          >
            <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-3">
              <Link href="/workflow" className="btn-primary !rounded-md">
                Start the cookbook
                <span aria-hidden>→</span>
              </Link>
              <Link href="/fixes" className="btn-secondary !rounded-md">
                Browse fixes
              </Link>
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 text-[13px] text-[color:var(--ink-faded)]">
                <span><span className="font-semibold tabular-nums text-[color:var(--ink)]">{recipeCount}</span> recipes</span>
                <span aria-hidden className="h-1 w-1 rounded-full bg-[color:var(--ink-rule)]" />
                <span><span className="font-semibold tabular-nums text-[color:var(--ink)]">{stats.fixes}</span> fixes</span>
                <span aria-hidden className="h-1 w-1 rounded-full bg-[color:var(--ink-rule)]" />
                <span><span className="font-semibold tabular-nums text-[color:var(--ink)]">{stats.prompts}</span> prompts</span>
                <span aria-hidden className="h-1 w-1 rounded-full bg-[color:var(--ink-rule)]" />
                <span><span className="font-semibold tabular-nums text-[color:var(--ink)]">{stats.apps}</span> apps shipped</span>
              </div>
            </div>
          </SlideHeader>

          <div className="cookbook-slide-split">
            <div className="space-y-6">
              <section>
                <h2 className="slide-section-title">Who this is for</h2>
                <p className="mt-3 text-[15px] leading-relaxed text-[color:var(--ink-soft)]">
                  You think in systems, not syntax. You steer AI agents with clear intent, catch bad output early, and care about what actually reaches production.
                </p>
                <p className="mt-3 text-[15px] leading-relaxed text-[color:var(--ink-soft)]">
                  vibeprompt bundles the workflow, prompts, templates, and fixes from {stats.apps} shipped apps, so the last 20% takes hours, not weeks.
                </p>
              </section>

              <section>
                <h2 className="slide-section-title">Six phases, ten recipes</h2>
                <ul className="mt-3 space-y-2 text-[14.5px] leading-relaxed text-[color:var(--ink-soft)]">
                  {COOKBOOK_PHASES.map((phase) => (
                    <li key={phase.name} className="flex gap-2">
                      <span aria-hidden className="shrink-0 text-[color:var(--accent)]">•</span>
                      <span>
                        <span className="font-semibold text-[color:var(--ink)]">{phase.name}</span>
                        , {phase.steps.length} {phase.steps.length === 1 ? "recipe" : "recipes"}
                      </span>
                    </li>
                  ))}
                </ul>
              </section>
            </div>

            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
              {[
                { n: recipeCount, label: "Cookbook recipes" },
                { n: stats.fixes, label: "Documented fixes", highlight: true },
                { n: stats.prompts, label: "Ready-made prompts" },
                { n: stats.articles, label: "Deep-dive articles" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className={`rounded-md border border-[color:var(--ink-rule)] px-4 py-5 text-center ${
                    stat.highlight ? "bg-[color:var(--ink)] text-[color:var(--paper)]" : "bg-[color:var(--paper)]"
                  }`}
                >
                  <div className={`font-bold tracking-tight text-[clamp(1.5rem,2.5vw,2rem)] ${stat.highlight ? "" : "text-[color:var(--ink)]"}`}>
                    {stat.n}
                  </div>
                  <div className={`mt-1.5 text-[10px] font-semibold uppercase tracking-[0.12em] ${stat.highlight ? "text-white/60" : "text-[color:var(--ink-faded)]"}`}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <section className="mt-10">
            <h2 className="slide-section-title">Explore</h2>
            <div className="mt-4">
            <SlideRowList>
              {EXPLORE.map((item) => (
                <SlideRowItem key={item.href}>
                  <Link
                    href={item.href}
                    className="group flex items-start gap-3 px-4 py-3.5 transition-colors hover:bg-[color:var(--sidebar-hover)]"
                  >
                    <span className="min-w-0 flex-1">
                      <span className="text-[14px] font-semibold text-[color:var(--ink)] group-hover:text-[color:var(--accent)]">{item.label}</span>
                      <span className="mt-0.5 block text-[13px] leading-snug text-[color:var(--ink-soft)]">{item.desc}</span>
                    </span>
                    <span aria-hidden className="shrink-0 pt-0.5 text-[color:var(--ink-faded)] transition-transform group-hover:translate-x-0.5">→</span>
                  </Link>
                </SlideRowItem>
              ))}
            </SlideRowList>
            </div>
          </section>

          {shown.length > 0 && (
            <div className="mt-10 flex flex-col items-start gap-3 border-t border-[color:var(--ink-rule)] pt-8 sm:flex-row sm:items-center sm:justify-between">
              <span className="text-label">Built in the open</span>
              <div className="flex flex-wrap items-center gap-3">
                <div className="flex items-center -space-x-2">
                  {shown.map((c) => (
                    <a
                      key={c.login}
                      href={c.profileUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      title={c.login}
                      className="relative transition-transform duration-200 hover:z-10 hover:-translate-y-0.5"
                    >
                      <Image
                        src={c.avatarUrl}
                        alt={c.login}
                        width={32}
                        height={32}
                        className="h-8 w-8 rounded-full border-2 border-[color:var(--paper)] bg-[color:var(--paper-soft)]"
                      />
                    </a>
                  ))}
                </div>
                <a
                  href={`${GITHUB_URL}/graphs/contributors`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[13px] text-[color:var(--ink-soft)] transition-colors hover:text-[color:var(--accent)]"
                >
                  {contributors.length} {contributors.length === 1 ? "contributor" : "contributors"} on GitHub →
                </a>
              </div>
            </div>
          )}
        </div>
      </SlideCard>
    </>
  );
}

export const revalidate = 3600;
