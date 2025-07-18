import React from "react";
import { User } from "lucide-react"; // Or any other icon
import Image from "next/image";

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
    <div className={`grid grid-cols-2 lg:grid-cols-${cols} gap-4 ${className}`}>
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
    <div className="flex flex-col items-center p-4 border rounded-lg shadow-md">
      <Icon className="w-12 h-12 mb-2 text-blue-500" />
      <h3 className="text-lg font-semibold mb-1 text-center">{headline}</h3>
      <p className="text-sm text-gray-600 text-center">{text}</p>
    </div>
  );
}

export function AgentCardWithBackground({
  imageUrl,
  headline,
  text,
}: {
  imageUrl: string;
  headline: string;
  text: string;
}) {
  return (
    <div className="relative flex flex-col items-center p-4 rounded-lg shadow-md min-h-[400px] text-white overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src={imageUrl}
          alt={headline}
          fill
          style={{ objectFit: "cover" }}
          quality={90}
          priority={false}
        />
        <div className="absolute inset-0"></div>
      </div>
      <div className="relative z-10 flex flex-col items-center text-center p-4 rounded bg-white bg-opacity-80 mt-auto w-full">
        <h3 className="text-xl font-semibold mb-2 text-black">{headline}</h3>
        <p className="text-md text-black">{text}</p>
      </div>
    </div>
  );
}
