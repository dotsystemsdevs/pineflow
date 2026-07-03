import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/page-header";
import { IndexRowLink, PageSection, SlideRowItem } from "@/components/layout/slide-ui";
import { NewsletterCta } from "@/components/fixes/newsletter-cta";
import { getWeeklyFixesSorted } from "@/lib/weekly-fixes";

export const metadata: Metadata = {
  title: "The Weekly Fix, archive | vibeprompt",
  description:
    "Every issue of The Weekly Fix: one AI build failure, the fix, and the prompt that solves it. Read past issues or subscribe.",
  alternates: { canonical: "/weekly" },
  openGraph: {
    title: "The Weekly Fix, archive",
    description: "One AI build failure, the fix, and the prompt that solves it. Sent weekly.",
    url: "https://vibeprompt.tech/weekly",
    type: "website",
  },
};

function formatDate(iso: string) {
  return new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
    timeZone: "UTC",
  });
}

export default function WeeklyPage() {
  const issues = getWeeklyFixesSorted();

  const schemaOrg = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "The Weekly Fix",
    description: "One AI build failure, the fix, and the prompt that solves it. Sent weekly.",
    url: "https://vibeprompt.tech/weekly",
    isPartOf: { "@type": "WebSite", name: "vibeprompt", url: "https://vibeprompt.tech" },
  };

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }} />

      <div className="page-shell stack-block">
        <PageHeader
          kicker="The Weekly Fix"
          title="The Weekly Fix"
          lede="One AI build failure, the fix, and the prompt that solves it."
        />

        <NewsletterCta />

        <PageSection label={`${issues.length} past issues`}>
          <ul className="divide-y divide-[color:var(--ink-rule)]">
            {issues.map((issue) => (
              <SlideRowItem key={issue.slug}>
                <IndexRowLink
                  href={`/weekly/${issue.slug}`}
                  label={issue.title}
                  meta={`${formatDate(issue.date)} · ${issue.readingTime}`}
                />
              </SlideRowItem>
            ))}
          </ul>
        </PageSection>
      </div>
    </main>
  );
}

export const revalidate = 3600;
