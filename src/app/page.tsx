import Link from "next/link";
import Image from "next/image";
import { WORKFLOW_STEPS } from "@/lib/workflow-steps";
import { getSiteStats } from "@/lib/site-stats";
import { getRepoContributors } from "@/lib/github-repo-contributors";
import { SlideCard, SlideHeader, SlideRowItem } from "@/components/layout/slide-ui";

const GITHUB_URL = "https://github.com/dotsystemsdevs/vibe-prompt";

export default async function HomePage() {
  const [stats, contributors] = await Promise.all([getSiteStats(), getRepoContributors()]);
  const recipeCount = WORKFLOW_STEPS.length;
  const shown = contributors.slice(0, 6);

  const sections = [
    { href: "/workflow", label: "Cookbook", meta: `${recipeCount} recipes` },
    { href: "/fixes", label: "Fixes", meta: `${stats.fixes} fixes` },
    { href: "/articles", label: "Articles", meta: `${stats.articles} articles` },
    { href: "/awesome", label: "Awesome", meta: `${stats.tools} tools` },
    { href: "/built-with", label: "Built with", meta: `${stats.apps} apps` },
    { href: "/templates", label: "Templates", meta: `${stats.prompts} prompts` },
  ] as const;

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

      <SlideCard className="mx-auto max-w-3xl">
        <div className="px-5 py-8 sm:px-8 sm:py-10">
          <SlideHeader
            partLabel="Open source"
            title="The Vibe Coding Cookbook"
            subtitle="From shower thought to shipped"
            lede="Workflow, prompts, fixes, and case studies from apps we actually shipped."
          >
            <div className="mt-5 flex flex-wrap items-center gap-3">
              <Link href="/workflow" className="btn-primary !rounded-md">
                Start the cookbook
                <span aria-hidden>→</span>
              </Link>
              <Link href="/fixes" className="btn-secondary !rounded-md">
                Browse fixes
              </Link>
            </div>
          </SlideHeader>

          <div className="overflow-hidden rounded-md border border-[color:var(--ink-rule)] bg-[color:var(--paper)]">
            <div className="border-b border-[color:var(--ink-rule)] bg-[color:var(--paper-soft)] px-4 py-2">
              <span className="text-label">On the site</span>
            </div>
            <ul className="divide-y divide-[color:var(--ink-rule)]">
              {sections.map((item) => (
                <SlideRowItem key={item.href}>
                  <Link
                    href={item.href}
                    className="group flex items-center gap-3 px-4 py-3 transition-colors hover:bg-[color:var(--sidebar-hover)]"
                  >
                    <span className="text-[14px] font-semibold text-[color:var(--ink)] group-hover:text-[color:var(--accent)]">
                      {item.label}
                    </span>
                    <span className="ml-auto font-mono text-[11px] tabular-nums text-[color:var(--ink-faded)]">
                      {item.meta}
                    </span>
                    <span
                      aria-hidden
                      className="shrink-0 text-[color:var(--ink-rule)] transition-transform group-hover:translate-x-0.5 group-hover:text-[color:var(--ink-faded)]"
                    >
                      →
                    </span>
                  </Link>
                </SlideRowItem>
              ))}
            </ul>
          </div>

          {shown.length > 0 && (
            <div className="mt-8 flex flex-col gap-3 border-t border-[color:var(--ink-rule)] pt-6 sm:flex-row sm:items-center sm:justify-between">
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
                        width={28}
                        height={28}
                        className="h-7 w-7 rounded-full border-2 border-[color:var(--paper)] bg-[color:var(--paper-soft)]"
                      />
                    </a>
                  ))}
                </div>
                <a
                  href={`${GITHUB_URL}/graphs/contributors`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[12.5px] text-[color:var(--ink-soft)] transition-colors hover:text-[color:var(--accent)]"
                >
                  GitHub →
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
