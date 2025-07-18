import type { MDXComponents } from "mdx/types";
import Image, { ImageProps } from "next/image";

// This file allows you to provide custom React components
// to be used in MDX files. You can import and use any
// React component you want, including inline styles,
// components from other libraries, and more.

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Custom wrapper that handles frontmatter
    wrapper: ({ children, ...props }) => {
      // Extract frontmatter from props if available
      const { title, author, date, tags, ...otherProps } = props as any;

      return (
        <article className="max-w-4xl mx-auto px-4 py-8">
          {/* Render metadata header if frontmatter exists */}
          {title && (
            <header className="mb-8 pb-8 border-b">
              <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
                {title}
              </h1>
              <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
                {author && <span>By {author}</span>}
                {date && (
                  <span>{new Date(date).toLocaleDateString("de-DE")}</span>
                )}
                {tags && tags.length > 0 && (
                  <div className="flex gap-2">
                    {tags.map((tag: string) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-md text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </header>
          )}

          {/* Main content */}
          <div className="prose prose-lg dark:prose-invert max-w-none">
            {children}
          </div>
        </article>
      );
    },

    // Styling for markdown elements
    h1: ({ children }) => (
      <h1 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white mt-8">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2
        id={children.toString().toLowerCase().replace(/\s+/g, "-")}
        className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100 mt-6"
      >
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3
        id={children.toString().toLowerCase().replace(/\s+/g, "-")}
        className="text-xl font-medium mb-3 text-gray-700 dark:text-gray-200 mt-4"
      >
        {children}
      </h3>
    ),
    p: ({ children }) => (
      <p className="mb-4 text-gray-600 dark:text-gray-300 leading-relaxed">
        {children}
      </p>
    ),
    ul: ({ children }) => (
      <ul className="mb-4 list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300 ml-4">
        {children}
      </ul>
    ),
    ol: ({ children }) => (
      <ol className="mb-4 list-decimal list-inside space-y-2 text-gray-600 dark:text-gray-300 ml-4">
        {children}
      </ol>
    ),
    li: ({ children }) => (
      <li className="text-gray-600 dark:text-gray-300">{children}</li>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-blue-500 pl-6 italic my-6 text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-gray-800 py-4 rounded-r-lg">
        {children}
      </blockquote>
    ),
    code: ({ children }) => (
      <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-sm font-mono text-blue-600 dark:text-blue-400">
        {children}
      </code>
    ),
    pre: ({ children }) => (
      <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg overflow-x-auto mb-4 text-sm">
        {children}
      </pre>
    ),
    img: (props) => (
      <Image
        // alt="test"
        width={1200}
        height={400}
        loading="lazy"
        className="rounded-lg my-6"
        {...(props as ImageProps)}
      />
    ),
    hr: () => <hr className="my-8 border-gray-300 dark:border-gray-700" />,
    ...components,
  };
}
