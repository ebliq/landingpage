import type { MetadataRoute } from "next";
//import { getAllBlogPosts } from "@/lib/blog";

const baseUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/+$/, "") || "https://ebliq.de";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPaths = [
    "",
    "/about-us",
    //"/blog", // deactivated until blog has contents
    "/early-access",
    "/features",
    //"/features/arztbrief-generator", // obsolete
    //"/features/anamnese-bot", // obsolete
    //"/features/ai-assistant", // obsolete
    "/for-you",
    "/for-you/doctors",
    "/for-you/midwifes",
    "/for-you/nurses",
    "/impressum",
    "/pricing",
    "/privacy",
  ];

  //const blogPosts = getAllBlogPosts();

  return [
    ...staticPaths.map((path) => ({
      url: `${baseUrl}${path ? `/${path.replace(/^\/+/, "")}` : ""}`,
      lastModified: new Date(),
    })),
    
    /* deactivated until blog has contents
    ...blogPosts.map((post) => ({
      url: `${baseUrl}/blog/${post.slug}`,
      lastModified: post.date ? new Date(post.date) : undefined,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
    */
  ];
}
