import React from "react";
import { User } from "lucide-react"; // Or any other icon
import Image from "next/image";
import Link from "next/link";
export function AgentGrid({
  children,
  cols,
  className,
}: {
  cols: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`grid grid-cols-1 lg:grid-cols-${cols} gap-4 ${className}`}>
      {children}
    </div>
  );
}

export function AgentCard({
  icon: Icon = User,
  headline,
  text,
}: {
  icon?: React.ElementType;
  headline: string;
  text: string;
}) {
  return (
    <div className="flex flex-col items-center p-2 my-2 border border-card rounded-sm shadow-sm">
      <Icon className="w-12 h-12 mb-2 text-primary" />
      <h3 className="text-lg font-medium mb-1 text-center">{headline}</h3>
      <p className="text-base text-muted-foreground text-center">{text}</p>
    </div>
  );
}

export function AgentCardWithBackground({
  href,
  imageUrl,
  headline,
  text,
}: {
  href: string;
  imageUrl: string;
  headline: string;
  text: string;
}) {
  return (
    <Link href={href}>
      <div className="relative flex flex-col items-center p-4 rounded-sm shadow-md min-h-[400px] text-white overflow-hidden transition-all duration-300 hover:shadow-xl cursor-pointer group">
        <div className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110">
          <Image
            src={imageUrl}
            alt={headline}
            fill
            style={{ objectFit: "cover" }}
            quality={90}
            priority={false}
          />
          <div className="absolute inset-0 bg-black bg-opacity-20 transition-opacity duration-300 group-hover:bg-opacity-40"></div>
        </div>
        <div className="relative z-10 flex flex-col items-center text-center p-4 rounded-sm bg-primary-50 bg-opacity-80 mt-auto w-full transition-all duration-300 group-hover:bg-opacity-90">
          <h3 className="">
            {headline}
          </h3>
          <p className="text-md text-black transition-colors duration-300 group-hover:text-gray-700">
            {text}
          </p>
        </div>
      </div>
    </Link>
  );
}
