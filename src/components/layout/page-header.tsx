import type { ReactNode } from "react";
import { SlideHeader } from "@/components/layout/slide-ui";

/**
 * Page opener for secondary pages. Uses the same slide header + mascot as home
 * and the cookbook so every surface reads as one product.
 */
export function PageHeader({
  kicker,
  title,
  subtitle,
  lede,
  children,
}: {
  /** @deprecated emoji/icon removed, mascot is always shown */
  emoji?: string;
  icon?: string;
  accent?: string;
  kicker?: ReactNode;
  title: ReactNode;
  subtitle?: ReactNode;
  lede?: ReactNode;
  children?: ReactNode;
}) {
  return (
    <SlideHeader partLabel={kicker} title={title} subtitle={subtitle} lede={lede}>
      {children}
    </SlideHeader>
  );
}
