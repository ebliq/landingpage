import { getAllBlogPosts } from "@/lib/blog";
import { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const fs = await import("fs");
  const path = await import("path");
  const matter = await import("gray-matter");

  try {
    const filePath = path.join(process.cwd(), "content", `${slug}.mdx`);
    const fileContent = fs.readFileSync(filePath, "utf8");
    const { data: metadata } = matter.default(fileContent);

    return {
      title: metadata?.title || "Blog Post",
      description: metadata?.description || "Blog post description",
      openGraph: {
        title: metadata?.title || "Blog Post",
        description: metadata?.description || "Blog post description",
        images: [{ url: `/${slug}.png` }],
        type: "article",
      },
      twitter: {
        card: "summary_large_image",
        title: metadata?.title || "Blog Post",
        description: metadata?.description || "Blog post description",
        images: metadata?.image ? [metadata.image] : [],
      },
      ...metadata,
    };
  } catch {
    throw new Error("Blog post not found");
  }
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const { default: Post } = await import(`@/content/${slug}.mdx`);

  return (
    <>
      <Post />;
    </>
  );
}

export function generateStaticParams() {
  return getAllBlogPosts().map((post) => ({
    slug: post.slug,
  }));
}

export const dynamicParams = false;
