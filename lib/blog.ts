import fs from "fs";
import path from "path";
import matter from "gray-matter";

export interface BlogPost {
  slug: string;
  title: string;
  author: string;
  date: string;
  tags: string[];
  excerpt?: string;
}

const contentDirectory = path.join(process.cwd(), "content");

export function getAllBlogPosts(): BlogPost[] {
  // Get all MDX files from the content directory
  const fileNames = fs.readdirSync(contentDirectory);
  const mdxFiles = fileNames.filter((name) => name.endsWith(".mdx"));

  const allPostsData = mdxFiles.map((fileName): BlogPost => {
    // Remove ".mdx" from file name to get slug
    const slug = fileName.replace(/\.mdx$/, "");

    // Read markdown file as string
    const fullPath = path.join(contentDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    // Extract excerpt (first paragraph of content)
    const content = matterResult.content;
    const firstParagraph = content
      .split("\n\n")
      .find((p) => p.trim() && !p.startsWith("#"));
    const excerpt = firstParagraph
      ? firstParagraph.substring(0, 150) + "..."
      : "";

    return {
      slug,
      title: matterResult.data.title || "Untitled",
      author: matterResult.data.author || "Unknown",
      date: matterResult.data.date || "",
      tags: matterResult.data.tags || [],
      excerpt,
    };
  });

  // Sort posts by date (newest first)
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

export function getBlogPost(slug: string): BlogPost | null {
  try {
    const fullPath = path.join(contentDirectory, `${slug}.mdx`);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const matterResult = matter(fileContents);

    return {
      slug,
      title: matterResult.data.title || "Untitled",
      author: matterResult.data.author || "Unknown",
      date: matterResult.data.date || "",
      tags: matterResult.data.tags || [],
    };
  } catch {
    return null;
  }
}
