"use client";

import Link from "next/link";

import { cn } from "@/components/utils";

type EarlyAccessRibbonProps = {
  href: string;
  label?: string;
  className?: string;
};

export function EarlyAccessRibbon({
  href,
  label = "Early Access",
  className,
}: EarlyAccessRibbonProps) {
  return (
    <Link
      href={href}
      className={cn(
        "group relative block w-0 overflow-visible text-center focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-green-500",
        className,
      )}
    >
      <span className="sr-only">{label}</span>
      <span
        aria-hidden="true"
        className="absolute -left-[95px] my-auto h-6 w-40 inset-0 flex -rotate-[55deg] items-center justify-center bg-green-500 text-[12px] font-light uppercase tracking-[100%] text-white shadow-md transition duration-200 ease-out group-hover:shadow-xl group-hover:font-medium group-hover:bg-green-700 group-hover:scale-[1.1] group-focus-visible:scale-[1.1]"
      >
        {label}
      </span>
    </Link>
  );
}
