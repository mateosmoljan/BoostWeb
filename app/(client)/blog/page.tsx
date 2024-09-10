import Header from "@/app/components/Header";
import PostComponent from "@/app/components/PostComponent";
import { Post } from "@/app/utils/interface";
import { client } from "@/sanity/lib/client";
import { Metadata } from "next";

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

export const revalidate = 60;

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Blog | BoostWeb",
    description:
      "Read the latest posts and updates from BoostWeb. Our blog covers industry insights, tips, and news to help you stay informed and ahead in the digital space.",
    openGraph: {
      title: "Blog | BoostWeb",
      description:
        "Read the latest posts and updates from BoostWeb. Our blog covers industry insights, tips, and news to help you stay informed and ahead in the digital space.",
      type: "website",
      locale: "en_US",
      url: "https://www.boostweb.io/blog",
      siteName: "BoostWeb",
      images: [
        {
          url: "https://www.boostweb.io/assets/images/Logo_White_bg_Dark.png", // Use a relevant image for the Blog page
          width: 500,
          height: 500,
          alt: "BoostWeb Blog", // Descriptive alt text
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Blog | BoostWeb",
      description:
        "Read the latest posts and updates from BoostWeb. Our blog covers industry insights, tips, and news to help you stay informed and ahead in the digital space.",
      images: ["https://www.boostweb.io/assets/images/Logo_White_bg_Dark.png"], // Same image as Open Graph
    },
    alternates: {
      canonical: "https://www.boostweb.io/blog", // Ensure the canonical URL is correct
    },
    keywords: [
      "BoostWeb blog",
      "latest posts BoostWeb",
      "digital marketing insights",
      "BoostWeb updates",
      "industry tips",
      "BoostWeb news",
    ],
  };
}

export default async function page() {
  const posts: Post[] = await getPosts();

  return (
    <main className="container pt-32">
      <div className="text-left pb-14">
        <Header title="Blog" tags />
      </div>
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-3">
        {posts?.length > 0 &&
          posts?.map((post) => <PostComponent key={post?._id} post={post} />)}
      </section>
    </main>
  );
}
