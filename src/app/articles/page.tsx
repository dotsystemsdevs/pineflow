import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/layout/page-header";
import { IndexRowLink, PageSection, SlideRowItem } from "@/components/layout/slide-ui";
import { getAllArticles, CATEGORIES, CATEGORY_LABEL, type Category } from "@/lib/articles";

export const metadata: Metadata = {
  title: "Articles | vibeprompt",
  description: "The latest in vibe coding: new apps, model releases, new tools, and a few deep-dive guides for building with AI.",
  alternates: { canonical: "/articles" },
  openGraph: {
    title: "Articles, vibeprompt",
    description: "The latest in vibe coding: new apps, model releases, new tools, and a few deep-dive guides for building with AI.",
    url: "https://vibeprompt.tech/articles",
    images: [{ url: "https://vibeprompt.tech/opengraph-image", width: 1200, height: 630 }],
  },
};

interface ArticlesPageProps {
  searchParams: Promise<{ cat?: string }>;
}

function parseCategory(raw: string | undefined): Category | null {
  if (raw && (CATEGORIES as readonly string[]).includes(raw)) return raw as Category;
  return null;
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
}

export default async function ArticlesPage({ searchParams }: ArticlesPageProps) {
  const { cat } = await searchParams;
  const activeCategory = parseCategory(cat);
  const allArticles = await getAllArticles();
  const articles = activeCategory ? allArticles.filter((a) => a.category === activeCategory) : allArticles;

  const counts: Record<Category, number> = Object.fromEntries(
    CATEGORIES.map((c) => [c, 0])
  ) as Record<Category, number>;
  for (const a of allArticles) counts[a.category]++;

  return (
    <div className="page-shell stack-block">
      <PageHeader
        kicker="Articles"
        title="Articles"
        lede="New apps worth copying, model drops, new tools, and deep-dive guides."
      />

      <div className="page-filter-bar">
        {CATEGORIES.filter((c) => counts[c] > 0).map((c) => (
          <CategoryChip
            key={c}
            href={activeCategory === c ? "/articles" : `/articles?cat=${c}`}
            active={activeCategory === c}
            label={CATEGORY_LABEL[c]}
            count={counts[c]}
          />
        ))}
      </div>

      {articles.length === 0 ? (
        <div className="vp-empty">
          <p className="vp-empty-title">No articles in this category yet.</p>
          {activeCategory && (
            <Link href="/articles" className="btn-ghost mt-3">
              Clear filter →
            </Link>
          )}
        </div>
      ) : (
        <PageSection label={`${articles.length} articles`}>
          <ul className="divide-y divide-[color:var(--ink-rule)]">
            {articles.map((article) => (
              <SlideRowItem key={article.slug}>
                <IndexRowLink
                  href={`/articles/${article.slug}`}
                  label={article.title}
                  meta={`${CATEGORY_LABEL[article.category]} · ${formatDate(article.date)} · ${article.readingMinutes} min`}
                />
              </SlideRowItem>
            ))}
          </ul>
        </PageSection>
      )}
    </div>
  );
}

function CategoryChip({
  href,
  active,
  label,
  count,
}: {
  href: string;
  active: boolean;
  label: string;
  count: number;
}) {
  return (
    <Link
      href={href}
      aria-current={active ? "page" : undefined}
      className="filter-pill"
    >
      <span>{label}</span>
      <span className="filter-pill__count">{count}</span>
    </Link>
  );
}

export const revalidate = 3600;
