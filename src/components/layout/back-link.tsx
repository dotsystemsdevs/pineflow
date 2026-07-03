import Link from "next/link";

/**
 * The one "back to the index" control, used on every detail page (/fixes/[id],
 * /articles/[slug], /weekly/[slug], /built-with/[slug]). A single pill so the
 * back affordance reads identically site-wide.
 */
export function BackLink({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      className="inline-flex w-fit shrink-0 items-center gap-1.5 whitespace-nowrap rounded-full border border-[color:var(--ink-rule)] px-3.5 py-1.5 text-[13px] font-medium text-[color:var(--ink-soft)] transition-colors hover:border-[color:var(--ink-soft)] hover:text-[color:var(--ink)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent-ring)] focus-visible:ring-offset-2 focus-visible:ring-offset-[color:var(--background)]"
    >
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <path d="M19 12H5" /><path d="M11 18l-6-6 6-6" />
      </svg>
      {label}
    </Link>
  );
}
