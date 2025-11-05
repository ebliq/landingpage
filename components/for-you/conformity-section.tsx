import { type ReactNode } from "react";

import { List, ListItem } from "@/components/typography/typography";
import { cn } from "@/lib/utils";

import { Check } from "lucide-react";

type ConformityItem = {
  title: string;
  text: string;
};

type ConformityHighlightsSectionProps = {
  title: string;
  subtitle?: string;
  items: ConformityItem[];
  footerText?: ReactNode;
  className?: string;
};

export function ConformityHighlightsSection({
  title,
  subtitle,
  items,
  footerText,
  className,
}: ConformityHighlightsSectionProps) {
  return (
    <section
      className={cn(
        "py-6 md:py-20 px-6 md:px-12 mt-0 bg-green-50 shadow-lg",
        className,
      )}
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="secondary-heading mt-0 !text-primary-900">{title}</h2>
        {subtitle ? (
          <h3 className="text-2xl md:text-4xl">{subtitle}</h3>
        ) : null}
        <div className="flex justify-between items-center gap-3">
          <div>
            <List className="my-4">
              {items.map((item) => (
                <ListItem key={item.title} className="flex items-top gap-2">
                  <Check
                    size="30"
                    strokeWidth={5}
                    className="mt-1 text-green basis-2/10 w-[50px] shrink-0"
                  />
                  <div className="basis-8/10">
                    <div className="font-bold">{item.title}</div>
                    <div className="font-light">{item.text}</div>
                  </div>
                </ListItem>
              ))}
            </List>
          </div>
        </div>
        {footerText ? (
          <div className="mt-6 text-muted text-sm">{footerText}</div>
        ) : null}
      </div>
    </section>
  );
}

export default ConformityHighlightsSection;
