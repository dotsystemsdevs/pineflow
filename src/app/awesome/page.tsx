import { AwesomeClient } from "@/components/awesome/awesome-client";
import { PageHeader } from "@/components/layout/page-header";
import { AWESOME_CATEGORIES } from "@/lib/awesome-data";

export const metadata = {
  title: "Awesome Vibe Coding · 149 tools the cookbook actually uses | vibeprompt",
  description:
    "A list of tools, AI coding platforms, and resources for vibe coders. No bloat, no affiliates, no paid placement. Grouped by where you use them in the workflow.",
  alternates: { canonical: "/awesome" },
  openGraph: {
    title: "Awesome Vibe Coding · 149 tools the cookbook actually uses",
    description: "Tools, platforms, and resources for vibe coders. No bloat, no affiliates.",
    url: "https://vibeprompt.tech/awesome",
  },
};

export default async function AwesomePage() {
  const totalItems = AWESOME_CATEGORIES.reduce((sum, cat) => sum + cat.items.length, 0);

  return (
    <div id="top" className="page-shell stack-block">
      <PageHeader
        kicker="Curated tools"
        title="Awesome list"
        lede={
          <>
            {totalItems} tools, grouped by where you reach for them in the cookbook.
            No bloat, no affiliates.
          </>
        }
      />

      <AwesomeClient categories={AWESOME_CATEGORIES} />
    </div>
  );
}

export const revalidate = 3600;
