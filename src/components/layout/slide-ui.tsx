import type { ReactNode } from "react";

const FOCUS =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent-ring)] focus-visible:ring-offset-2 focus-visible:ring-offset-[color:var(--background)]";

/** Purple pixel mascot, shared across home, cookbook, and inner pages. */
export function SlideMascot({ size = 36 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" aria-hidden className="cookbook-mascot">
      <rect x="5" y="2" width="6" height="2" fill="#7C5CFC" />
      <rect x="4" y="4" width="8" height="5" fill="#7C5CFC" />
      <rect x="3" y="5" width="1" height="2" fill="#7C5CFC" />
      <rect x="12" y="5" width="1" height="2" fill="#7C5CFC" />
      <rect x="5" y="5" width="2" height="2" fill="#FFFFFF" />
      <rect x="9" y="5" width="2" height="2" fill="#FFFFFF" />
      <rect x="6" y="6" width="1" height="1" fill="#2F3138" />
      <rect x="10" y="6" width="1" height="1" fill="#2F3138" />
      <rect x="6" y="9" width="4" height="1" fill="#5B5BF5" />
      <rect x="5" y="10" width="2" height="2" fill="#7C5CFC" />
      <rect x="9" y="10" width="2" height="2" fill="#7C5CFC" />
      <rect x="4" y="12" width="2" height="2" fill="#7C5CFC" />
      <rect x="10" y="12" width="2" height="2" fill="#7C5CFC" />
    </svg>
  );
}

export function SlideHeader({
  partLabel,
  title,
  subtitle,
  lede,
  children,
}: {
  partLabel?: ReactNode;
  title: ReactNode;
  subtitle?: ReactNode;
  lede?: ReactNode;
  children?: ReactNode;
}) {
  return (
    <div className="cookbook-slide-header-block">
      <header className="cookbook-slide-header">
        <div className="cookbook-slide-header__row">
          <SlideMascot />
          <div className="min-w-0 flex-1">
            {partLabel && (
              <p className="slide-part-label font-mono text-[10.5px] font-semibold uppercase tracking-[0.14em]">
                {partLabel}
              </p>
            )}
            <h1 className="cookbook-slide-header__title">{title}</h1>
            {subtitle && <p className="cookbook-slide-header__subtitle">{subtitle}</p>}
          </div>
        </div>
        {lede && <p className="cookbook-slide-header__lede">{lede}</p>}
      </header>
      {children && <div className="mt-4">{children}</div>}
    </div>
  );
}

export function SlidePager({
  prev,
  next,
  stepFinished,
  onPrev,
  onNext,
}: {
  prev?: { title: string } | null;
  next?: { title: string } | null;
  stepFinished?: boolean;
  onPrev?: () => void;
  onNext?: () => void;
}) {
  return (
    <nav aria-label="Recipe navigation" className="slide-pager">
      {prev ? (
        <button type="button" onClick={onPrev} className={`slide-pager__btn ${FOCUS}`}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden className="shrink-0 text-[color:var(--ink-faded)]"><path d="M19 12H5" /><path d="M11 18l-6-6 6-6" /></svg>
          <span className="min-w-0">
            <span className="block font-mono text-[10px] font-semibold uppercase tracking-[0.14em] text-[color:var(--ink-faded)]">Previous</span>
            <span className="block truncate text-[13.5px] font-semibold text-[color:var(--ink)]">{prev.title}</span>
          </span>
        </button>
      ) : <span aria-hidden />}
      {next ? (
        <button
          type="button"
          onClick={onNext}
          className={`slide-pager__btn slide-pager__btn--next ${stepFinished ? "slide-pager__btn--done" : ""} ${FOCUS}`}
        >
          <span className="min-w-0">
            <span className={`block font-mono text-[10px] font-semibold uppercase tracking-[0.14em] ${stepFinished ? "text-[color:var(--accent)]" : "text-[color:var(--ink-faded)]"}`}>
              {stepFinished ? "Done, next up" : "Next"}
            </span>
            <span className="block truncate text-[13.5px] font-semibold text-[color:var(--ink)]">{next.title}</span>
          </span>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden className={`shrink-0 ${stepFinished ? "text-[color:var(--accent)]" : "text-[color:var(--ink-faded)]"}`}><path d="M5 12h14" /><path d="M13 6l6 6-6 6" /></svg>
        </button>
      ) : <span aria-hidden />}
    </nav>
  );
}

/** Content width wrapper, no card chrome. */
export function SlideCard({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto w-full ${className}`.trim()}>
      {children}
    </div>
  );
}

/** Dashed sub-nav (Learn / Task / FAQ, same pattern as phase nav). */
export function SlideSubnav<T extends string>({
  items,
  active,
  onSelect,
  ariaLabel = "Sections",
}: {
  items: readonly (readonly [T, string])[];
  active: T;
  onSelect: (key: T) => void;
  ariaLabel?: string;
}) {
  return (
    <nav aria-label={ariaLabel} className="slide-subnav">
      {items.map(([key, label], i) => (
        <span key={key} className="contents">
          {i > 0 && <span aria-hidden className="cookbook-phase-nav__sep">------</span>}
          <button
            type="button"
            onClick={() => onSelect(key)}
            aria-current={active === key ? "true" : undefined}
            className={`cookbook-phase-nav__link ${FOCUS}`}
          >
            {label}
          </button>
        </span>
      ))}
    </nav>
  );
}

/** Output / Needs / Feeds into block under recipe headers. */
export function SlideMeta({ rows }: { rows: { label: string; value: ReactNode }[] }) {
  if (rows.length === 0) return null;
  return (
    <dl className="slide-meta mb-8 space-y-2.5">
      {rows.map(({ label, value }) => (
        <div key={label} className="text-[13.5px] leading-relaxed text-[color:var(--ink-soft)]">
          <dt className="font-mono text-[10.5px] font-semibold uppercase tracking-[0.12em] text-[color:var(--ink-faded)]">{label}</dt>
          <dd className="mt-0.5">{value}</dd>
        </div>
      ))}
    </dl>
  );
}

/** Bordered row list for FAQ, explore links, and similar. */
export function SlideRowList({ children }: { children: ReactNode }) {
  return (
    <ul className="slide-row-list divide-y divide-[color:var(--ink-rule)] overflow-hidden rounded-md border border-[color:var(--ink-rule)] bg-[color:var(--paper)]">
      {children}
    </ul>
  );
}

export function SlideRowItem({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return <li className={`slide-row-item ${className}`.trim()}>{children}</li>;
}
