import Header from "@/app/components/Header";
import Navbar from "@/app/components/Navbar";
import { Tag } from "@/app/utils/interface";
import { client } from "@/sanity/lib/client";
import { Metadata } from "next";
import Link from "next/link";
import React from "react";

async function getAllTags() {
  const query = `
  *[_type == "tag"] {
    name,
    slug,
    _id,
    "postCount": count(*[_type == "post" && references("tags", ^._id)])
  }
  `;
  const tags = client.fetch(query);
  return tags;
}

export const revalidate = 60;

export const metadata: Metadata = {
  title: "Tags", // Main title for the page
  description: "Search for posts by tags on the blog", // SEO description

  // Open Graph metadata for sharing on social media platforms
  openGraph: {
    title: "Tags - BoostWeb Blog", // Custom title when shared on social media
    description:
      "Explore blog posts by various tags and discover relevant content on BoostWeb.", // Description when shared
    url: "https://www.boostweb.io/tag", // URL of the tags page
    siteName: "BoostWeb", // Name of your website
    images: [
      {
        url: "https://www.boostweb.io/assets/images/Logo_White_bg_Dark.png", // URL to a featured image for social media
        width: 1200,
        height: 630,
        alt: "Tags Page - BoostWeb Blog", // Alt text for the image
      },
    ],
    type: "website", // Type of content, generally "website" for pages
  },

  // Twitter Card metadata for sharing on Twitter
  twitter: {
    card: "summary_large_image", // Type of Twitter card (summary or large image)
    title: "Tags - BoostWeb Blog", // Title for Twitter card
    description:
      "Browse posts by tags on BoostWeb Blog to find content relevant to your interests.", // Description for Twitter card
    images: ["https://www.boostweb.io/assets/images/Logo_White_bg_Dark.png"], // Image for Twitter card
  },

  // Canonical URL for the page, to avoid duplicate content issues
  alternates: {
    canonical: "https://www.boostweb.io/tag", // Ensure the canonical URL is consistent
  },

  // Keywords relevant to the tags page for SEO purposes
  keywords: [
    "blog tags", // Main keyword
    "boostweb tags", // Brand-specific keyword
    "search posts by tags", // Action-oriented keyword
    "boostweb blog", // Brand and content type
    "article tags", // Related term
    "content tags", // Synonym for article tags
    "find blog posts by tags", // Variation on the search intent
  ],

  // General settings for robots and SEO crawlers
  robots: {
    index: true, // Allows search engines to index the page
    follow: true, // Allows following of links on the page
  },
};

const page = async () => {
  const tags: Tag[] = await getAllTags();

  return (
    <div className="container pt-32">
      <div className="pb-14">
        <Header title="Tags" />
      </div>
      <div>
        {tags?.length > 0 &&
          tags?.map((tag) => (
            <Link key={tag?._id} href={`/blog/tag/${tag.slug.current}`}>
              <div className="mb-2 p-2 text-white text-sm lowercase border border-gray-900 hover:bg-white_hover">
                #{tag.name} ({tag?.postCount})
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
};

export default page;
