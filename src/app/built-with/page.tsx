import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/page-header";
import { IndexRowLink, PageSection, SlideRowItem } from "@/components/layout/slide-ui";
import { BUILT_WITH_PROJECTS, SURFACE_LABEL, builtWithSlug } from "@/lib/built-with-data";

export const metadata: Metadata = {
  title: "Built with vibeprompt: apps shipped using the 10-step workflow",
  description:
    "Five indie apps shipped using vibeprompt's workflow + prompts. iOS, Android, and web. Live URLs, what stack, what we learned, what broke. Not aspirational, actually shipped.",
  alternates: { canonical: "/built-with" },
  keywords: "built with vibeprompt, vibe coding case study, indie app showcase, ai coded app examples, claude code shipped apps",
  openGraph: {
    title: "Built with vibeprompt: the apps, the URLs, what broke",
    description: "Five indie apps shipped end-to-end using vibeprompt's 10-step workflow.",
    url: "https://vibeprompt.tech/built-with",
    images: [{ url: "https://vibeprompt.tech/opengraph-image", width: 1200, height: 630 }],
  },
};

export default function BuiltWithPage() {
  return (
    <div className="page-shell stack-block">
      <PageHeader
        kicker="Case studies"
        title="Built with vibeprompt"
        lede="Apps shipped end-to-end with the cookbook. Live URLs, stacks, and what broke on each."
      />

      <PageSection label={`${BUILT_WITH_PROJECTS.length} apps`}>
        <ul className="divide-y divide-[color:var(--ink-rule)]">
          {BUILT_WITH_PROJECTS.map((p) => {
            const slug = builtWithSlug(p.name);
            const surfaces = p.surfaces.map((s) => SURFACE_LABEL[s]).join(" · ");
            return (
              <SlideRowItem key={p.name}>
                <IndexRowLink
                  href={`/built-with/${slug}`}
                  label={p.name}
                  meta={`${surfaces} · ${p.oneLine}`}
                />
              </SlideRowItem>
            );
          })}
        </ul>
      </PageSection>

      <p className="text-meta">
        Shipped something with vibeprompt?{" "}
        <a
          href="https://github.com/dotsystemsdevs/vibe-prompt/issues/new?title=%5BBuilt-with%5D+My+project&body=%2A%2AProject+name%3A%2A%2A%0A%2A%2AURL%3A%2A%2A%0A%2A%2AOne-liner%3A%2A%2A%0A%2A%2AStack%3A%2A%2A%0A%2A%2AStatus%3A%2A%2A%0A%2A%2AWhat+worked%3A%2A%2A%0A%2A%2AWhat+broke%3A%2A%2A%0A%2A%2AWhich+steps+you+used%3A%2A%2A"
          target="_blank"
          rel="noopener noreferrer"
          className="vp-link"
        >
          Add it to the list →
        </a>
      </p>
    </div>
  );
}

export const revalidate = 3600;
