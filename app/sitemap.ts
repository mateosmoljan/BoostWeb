import { client } from "@/sanity/lib/client";
import { MetadataRoute } from "next";
import { Post } from "./utils/interface";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Fetching blog posts from Sanity CMS
  async function getPosts() {
    const query = `
    *[_type == "post"] {
      title,
      slug,
      publishedAt,
      excerpt,
      tags[]-> {
        _id,
        slug,
        name
      }
    }
    `;
    const data = await client.fetch(query);
    return data;
  }

  // Get posts from CMS
  const posts: Post[] = await getPosts();

  // Generate URLs for blog posts
  const postUrls = posts.map((post) => ({
    url: `https://www.boostweb.io/blog/${post.slug.current}`,
    lastModified: new Date(post.publishedAt),
  }));

  // Manually add static pages like /services, /contact, and /references
  const staticPages = [
    {
      url: `https://www.boostweb.io/contact`,
      lastModified: new Date(),
    },
    {
      url: `https://www.boostweb.io/references`,
      lastModified: new Date(),
    },
  ];

  return [
    {
      url: `https://www.boostweb.io/`,
      lastModified: new Date(),
    },
    {
      url: "https://www.boostweb.io/tag",
      lastModified: new Date(),
    },
    ...staticPages, // Add static pages
    ...postUrls, // Add dynamically generated blog posts
  ];
}
