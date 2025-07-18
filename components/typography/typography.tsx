import React from "react";

interface HeadingProps {
  children: React.ReactNode;
  level: 1 | 2 | 3 | 4 | 5 | 6;
  className?: string;
}

const headingStyles = {
  1: "text-4xl font-bold tracking-tight mb-4 mt-8",
  2: "text-3xl font-semibold tracking-tight mb-3 mt-6",
  3: "text-2xl font-semibold tracking-tight mb-2 mt-4",
  4: "text-xl font-semibold tracking-tight mb-2 mt-4",
  5: "text-lg font-semibold tracking-tight mb-2 mt-4",
  6: "text-base font-semibold tracking-tight mb-2 mt-4",
};

export const Heading: React.FC<HeadingProps> = ({
  children,
  level,
  className,
}) => {
  const Tag = `h${level}` as keyof React.JSX.IntrinsicElements;
  const defaultStyle = headingStyles[level] || "";
  return <Tag className={`${defaultStyle} ${className}`}>{children}</Tag>;
};

interface ParagraphProps {
  children: React.ReactNode;
  className?: string;
}

export const Paragraph: React.FC<ParagraphProps> = ({
  children,
  className,
}) => {
  return <p className={`mb-4 leading-relaxed ${className}`}>{children}</p>;
};

interface ListProps {
  children: React.ReactNode;
  className?: string;
  ordered?: boolean;
}

export const List: React.FC<ListProps> = ({
  children,
  className,
  ordered = false,
}) => {
  const Tag = ordered ? "ol" : "ul";
  return <Tag className={`mb-4 ${className}`}>{children}</Tag>;
};

interface ListItemProps {
  children: React.ReactNode;
  className?: string;
}

export const ListItem: React.FC<ListItemProps> = ({ children, className }) => {
  return <li className={`mb-2 ${className}`}>{children}</li>;
};
