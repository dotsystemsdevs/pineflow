"use client";

import { useMemo, useState } from "react";
import { IndexRowLink, PageSection, SlideRowItem } from "@/components/layout/slide-ui";
import type { AwesomeCategory, AwesomeItem } from "@/lib/awesome-data";

function pricing(tags: readonly string[]): string | null {
  if (tags.includes("free") || tags.includes("open-source")) return "Free";
  if (tags.includes("free-tier")) return "Freemium";
  if (tags.includes("paid")) return "Paid";
  return null;
}

function ToolRow({ item }: { item: AwesomeItem }) {
  const price = pricing(item.tags);
  let domain = "";
  try {
    domain = new URL(item.href).hostname.replace(/^www\./, "");
  } catch {
    domain = "";
  }
  const meta = [domain, price].filter(Boolean).join(" · ");

  return (
    <SlideRowItem>
      <IndexRowLink href={item.href} label={item.name} meta={meta} external />
    </SlideRowItem>
  );
}

/* Notion-style database filter chip, mirrors the Articles page so the two
   pages read as one product. */
function CategoryChip({
  active,
  label,
  count,
  onClick,
}: {
  active: boolean;
  label: string;
  count: number;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-current={active ? "true" : undefined}
      className="filter-pill"
    >
      <span>{label}</span>
      <span className="filter-pill__count">{count}</span>
    </button>
  );
}

export function AwesomeClient({ categories }: { categories: readonly AwesomeCategory[] }) {
  const [query, setQuery] = useState("");
  const [activeTag, setActiveTag] = useState<string | null>(null);
  const q = query.toLowerCase().trim();

  const total = useMemo(
    () => categories.reduce((sum, cat) => sum + cat.items.length, 0),
    [categories]
  );

  // Filter by tag instead of cookbook phase. Count every tag and surface the
  // most common ones as chips (free, open-source, ai, paid, ...).
  const tagCounts = useMemo(() => {
    const c: Record<string, number> = {};
    for (const cat of categories)
      for (const item of cat.items)
        for (const tag of item.tags) c[tag] = (c[tag] ?? 0) + 1;
    return c;
  }, [categories]);

  const topTags = useMemo(
    () => Object.entries(tagCounts).sort((a, b) => b[1] - a[1]).slice(0, 16).map(([tag]) => tag),
    [tagCounts]
  );

  const filtered = useMemo(() => {
    const terms = q ? q.split(/\s+/) : [];
    return categories
      .map((cat) => ({
        ...cat,
        items: cat.items.filter((item) => {
          if (activeTag && !item.tags.includes(activeTag)) return false;
          if (!terms.length) return true;
          const searchable =
            `${item.name} ${item.description} ${item.tags.join(" ")} ${cat.title}`.toLowerCase();
          return terms.every((term) => searchable.includes(term));
        }),
      }))
      .filter((cat) => cat.items.length > 0);
  }, [categories, q, activeTag]);

  const visibleCount = useMemo(
    () => filtered.reduce((sum, cat) => sum + cat.items.length, 0),
    [filtered]
  );

  return (
    <div>
      <div className="page-filter-bar">
        <CategoryChip
          active={activeTag === null}
          label="All"
          count={total}
          onClick={() => setActiveTag(null)}
        />
        {topTags.map((tag) => (
          <CategoryChip
            key={tag}
            active={activeTag === tag}
            label={tag}
            count={tagCounts[tag] ?? 0}
            onClick={() => setActiveTag(tag)}
          />
        ))}
      </div>

      {/* Search, a real bordered field with a leading magnifier */}
      <div className="relative mb-6">
        <svg
          className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[color:var(--ink-faded)]"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
          aria-hidden
        >
          <circle cx="11" cy="11" r="7" />
          <line x1="21" y1="21" x2="16.5" y2="16.5" />
        </svg>
        <input
          type="text"
          placeholder={`Search ${total} tools…`}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          aria-label="Search tools and resources"
          className="vp-input vp-input-search"
        />
        {query && (
          <button
            onClick={() => setQuery("")}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-meta text-[color:var(--ink-faded)] hover:text-[color:var(--ink)]"
            aria-label="Clear search"
          >
            ✕
          </button>
        )}
      </div>

      {filtered.length === 0 ? (
        <div className="vp-empty">
          <div aria-hidden className="vp-empty-emoji">🔍</div>
          <p className="vp-empty-title">No tools match here.</p>
          <button
            onClick={() => {
              setQuery("");
              setActiveTag(null);
            }}
            className="vp-empty-body text-[color:var(--accent)] hover:underline"
          >
            Clear filters →
          </button>
        </div>
      ) : (
        <PageSection label={`${visibleCount} tools`}>
          <ul className="divide-y divide-[color:var(--ink-rule)]">
            {filtered.flatMap((cat) =>
              cat.items.map((item) => <ToolRow key={`${cat.slug}-${item.href}`} item={item} />)
            )}
          </ul>
        </PageSection>
      )}
    </div>
  );
}
