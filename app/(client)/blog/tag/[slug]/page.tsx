import Header from "@/app/components/Header";
import PostComponent from "@/app/components/PostComponent";
import { Post } from "@/app/utils/interface";
import { client } from "@/sanity/lib/client";
import React from "react";

async function getPostsByTag(tag: string) {
  const query = `
  *[_type == "post" && references(*[_type == "tag" && slug.current == "${tag}"]._id)]{
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

  const posts = await client.fetch(query);
  return posts;
}

export const revalidate = 60;

export async function generateMetadata({ params }: Params) {
  const tag = params.slug;

  return {
    title: `Posts with the tag #${tag} | BoostWeb`,
    description: `Explore blog posts tagged with #${tag} on BoostWeb. Find content related to ${tag} easily.`,
    openGraph: {
      title: `Posts with the tag #${tag} | BoostWeb`,
      description: `Explore blog posts tagged with #${tag} on BoostWeb. Find content related to ${tag} easily.`,
      type: "website",
      locale: "en_US",
      url: `https://www.boostweb.io/tag/${tag}`, // Ensure you use the full production URL
      siteName: "BoostWeb",
      images: [
        {
          url: `https://www.boostweb.io/assets/images/Logo_White_bg_Dark.png`, // Optional: dynamic image URL if applicable
          width: 500,
          height: 500,
          alt: `Tag #${tag} - BoostWeb`, // Provide descriptive alt text
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `Posts with the tag #${tag} | BoostWeb`,
      description: `Explore blog posts tagged with #${tag} on BoostWeb. Find content related to ${tag} easily.`,
      images: [`https://www.boostweb.io/assets/images/Logo_White_bg_Dark.png`], // Use a consistent image URL
    },
    alternates: {
      canonical: `https://www.boostweb.io/tag/${tag}`, // Use the production URL
    },
    keywords: [
      `${tag} tag`,
      `blog posts ${tag}`,
      `BoostWeb ${tag}`,
      `posts with ${tag}`,
    ], // Include relevant keywords
  };
}

interface Params {
  params: {
    slug: string;
  };
}

const page = async ({ params }: Params) => {
  const posts: Array<Post> = await getPostsByTag(params.slug);

  return (
    <div className="container pt-32">
      <div className="text-left pb-14">
        <Header title={`#${params?.slug}`} tags />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-3">
        {posts?.length > 0 &&
          posts?.map((post) => <PostComponent key={post?._id} post={post} />)}
      </div>
    </div>
  );
};

export default page;
