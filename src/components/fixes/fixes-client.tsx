"use client";

import Link from "next/link";
import { useEffect, useMemo, useState, type ReactNode } from "react";
import { PageSection, SlideRowItem } from "@/components/layout/slide-ui";
import {
  LIST_CATEGORIES,
  LIST_CATEGORY_LABEL,
  type ListCategory,
  type ListProblem,
} from "@/lib/list-problems";

// Recently added fixes get a NEW badge. Edit this set to curate what's flagged.
const NEW_FIXES = new Set<string>([
  "ai-code-security-holes",
  "cold-start-slow",
  "five-stars-three-reviews",
]);

const FAVS_KEY = "vibeprompt-fix-favs";

function FilterPill({
  label,
  count,
  active,
  onClick,
  icon,
}: {
  label: string;
  count: number;
  active: boolean;
  onClick: () => void;
  icon?: ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className="filter-pill"
    >
      {icon}
      <span>{label}</span>
      <span className="filter-pill__count">{count}</span>
    </button>
  );
}

export function FixesClient({ problems }: { problems: ListProblem[] }) {
  const [query, setQuery] = useState("");
  const [cat, setCat] = useState<ListCategory | "all">("all");
  const [savedOnly, setSavedOnly] = useState(false);
  const [favs, setFavs] = useState<Record<string, boolean>>({});
  const [mounted, setMounted] = useState(false);
  const q = query.toLowerCase().trim();

  useEffect(() => {
    setMounted(true);
    try {
      const raw = localStorage.getItem(FAVS_KEY);
      if (raw) setFavs(JSON.parse(raw));
    } catch {}
  }, []);

  function toggleFav(id: string) {
    setFavs((prev) => {
      const next = { ...prev, [id]: !prev[id] };
      try {
        localStorage.setItem(FAVS_KEY, JSON.stringify(next));
      } catch {}
      return next;
    });
  }

  const favCount = mounted ? Object.values(favs).filter(Boolean).length : 0;

  const counts = useMemo(() => {
    const c: Record<string, number> = { all: problems.length };
    for (const p of problems) c[p.category] = (c[p.category] ?? 0) + 1;
    return c;
  }, [problems]);

  const filtered = useMemo(() => {
    const terms = q ? q.split(/\s+/) : [];
    return problems.filter((p) => {
      if (savedOnly && !favs[p.id]) return false;
      if (cat !== "all" && p.category !== cat) return false;
      if (terms.length === 0) return true;
      const hay = `${p.title} ${p.answer} ${LIST_CATEGORY_LABEL[p.category]}`.toLowerCase();
      return terms.every((t) => hay.includes(t));
    });
  }, [problems, q, cat, savedOnly, favs]);

  return (
    <div>
      {/* Category filter, same row style as Awesome / Articles */}
      <div className="page-filter-bar">
        <FilterPill label="All" count={counts.all} active={cat === "all" && !savedOnly} onClick={() => { setCat("all"); setSavedOnly(false); }} />
        <FilterPill
          label="Saved"
          count={favCount}
          active={savedOnly}
          onClick={() => setSavedOnly((v) => !v)}
          icon={
            <svg width="12" height="12" viewBox="0 0 24 24" fill={savedOnly ? "currentColor" : "none"} stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
              <path d="M12 2l3.1 6.3 6.9 1-5 4.9 1.2 6.8L12 17.8 5.8 21l1.2-6.8-5-4.9 6.9-1z" />
            </svg>
          }
        />
        {LIST_CATEGORIES.map((c) => (
          <FilterPill
            key={c}
            label={LIST_CATEGORY_LABEL[c]}
            count={counts[c] ?? 0}
            active={cat === c && !savedOnly}
            onClick={() => { setCat(c); setSavedOnly(false); }}
          />
        ))}
      </div>

      {/* Search, same bordered field as the Awesome page */}
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
          placeholder={`Search ${problems.length} failures…`}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          aria-label="Search failures and fixes"
          className="vp-input vp-input-search"
        />
        {query && (
          <button
            type="button"
            onClick={() => setQuery("")}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-meta text-[color:var(--ink-faded)] hover:text-[color:var(--ink)]"
            aria-label="Clear search"
          >
            ✕
          </button>
        )}
      </div>

      {/* Results */}
      {filtered.length === 0 ? (
        <div className="vp-empty">
          <div aria-hidden className="vp-empty-emoji">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="mx-auto text-[color:var(--ink-faded)]">
              <circle cx="11" cy="11" r="7" />
              <line x1="21" y1="21" x2="16.5" y2="16.5" />
            </svg>
          </div>
          {savedOnly && favCount === 0 ? (
            <>
              <p className="vp-empty-title">No saved fixes yet.</p>
              <p className="vp-empty-body">Tap the star on any card to save it for later.</p>
            </>
          ) : (
            <>
              <p className="vp-empty-title">No failures match “{query}”.</p>
              <p className="vp-empty-body">
                <button
                  type="button"
                  onClick={() => {
                    setQuery("");
                    setCat("all");
                    setSavedOnly(false);
                  }}
                  className="text-[color:var(--accent)] hover:underline"
                >
                  Clear filters
                </button>{" "}
                or{" "}
                <Link href="/submit-fix" className="text-[color:var(--accent)] hover:underline">
                  submit this fix →
                </Link>
              </p>
            </>
          )}
        </div>
      ) : (
        <PageSection label={`${filtered.length} fixes`}>
          <ul className="divide-y divide-[color:var(--ink-rule)]">
            {filtered.map((p) => {
              const isFav = mounted && !!favs[p.id];
              const isNewFix = NEW_FIXES.has(p.id);
              const meta = [
                LIST_CATEGORY_LABEL[p.category],
                isNewFix ? "New" : null,
                isFav ? "Saved" : null,
              ]
                .filter(Boolean)
                .join(" · ");

              return (
                <SlideRowItem key={p.id}>
                  <div className="group flex items-center gap-2 px-4 py-3 transition-colors hover:bg-[color:var(--sidebar-hover)]">
                    <Link
                      href={`/fixes/${p.id}`}
                      className="flex min-w-0 flex-1 items-center gap-3"
                    >
                      <span className="min-w-0 flex-1 text-[14px] font-semibold leading-snug text-[color:var(--ink)] group-hover:text-[color:var(--accent)]">
                        {p.title}
                      </span>
                      <span className="hidden shrink-0 font-mono text-[11px] tabular-nums text-[color:var(--ink-faded)] sm:inline">
                        {meta}
                      </span>
                      <span aria-hidden className="shrink-0 text-[color:var(--ink-rule)] transition-transform group-hover:translate-x-0.5 group-hover:text-[color:var(--ink-faded)]">
                        →
                      </span>
                    </Link>
                    <button
                      type="button"
                      onClick={() => toggleFav(p.id)}
                      aria-label={isFav ? "Remove from saved" : "Save this fix"}
                      aria-pressed={isFav}
                      className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-[color:var(--ink-faded)] transition-colors hover:bg-[color:var(--paper-soft)] hover:text-[color:var(--ink)]"
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill={isFav ? "#E5A100" : "none"} stroke={isFav ? "#E5A100" : "currentColor"} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                        <path d="M12 2l3.1 6.3 6.9 1-5 4.9 1.2 6.8L12 17.8 5.8 21l1.2-6.8-5-4.9 6.9-1z" />
                      </svg>
                    </button>
                  </div>
                </SlideRowItem>
              );
            })}
            <SlideRowItem>
              <Link
                href="/submit-fix"
                className="group flex items-center gap-3 px-4 py-3 text-[13px] font-medium text-[color:var(--ink-faded)] transition-colors hover:bg-[color:var(--sidebar-hover)] hover:text-[color:var(--ink)]"
              >
                <span className="flex-1">Submit a fix that&apos;s missing</span>
                <span aria-hidden>→</span>
              </Link>
            </SlideRowItem>
          </ul>
        </PageSection>
      )}
    </div>
  );
}
