// import AddComment from "@/app/components/AddComment";
// import AllComments from "@/app/components/AllComments";
import Header from "@/app/components/Header";
import Toc from "@/app/components/Toc";
import { slugify } from "@/app/utils/helpers";
import { Post } from "@/app/utils/interface";
import { client } from "@/sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";
import { PortableText } from "@portabletext/react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

interface Params {
  params: {
    slug: string;
  };
  searchParams: {
    [key: string]: string | string[] | undefined;
  };
}

async function getPost(slug: string, commentsOrder: string = "desc") {
  const query = `
  *[_type == "post" && slug.current == "${slug}"][0] {
    title,
    slug,
    publishedAt,
    excerpt,
    _id,
    "headings": body[style in ["h2", "h3", "h4", "h5", "h6"]],
    body,
    tags[]-> {
      _id,
      slug,
      name
    },
    "comments": *[_type == "comment" && post._ref == ^._id ] | order(_createdAt ${commentsOrder}) {
      name,
      comment,
      _createdAt,
    }
  }
  `;

  const post = await client.fetch(query);
  return post;
}

export const revalidate = 60;

export async function generateMetadata({
  params,
}: Params): Promise<Metadata | undefined> {
  const post: Post = await getPost(params?.slug);
  if (!post) {
    return;
  }

  const postUrl = `https://www.boostweb.io/blog/${params.slug}`;

  return {
    title: `${post.title} | BoostWeb Blog`,
    description: post.excerpt || "Read more about this topic on BoostWeb Blog.",
    openGraph: {
      title: `${post.title} | BoostWeb Blog`,
      description:
        post.excerpt || "Read more about this topic on BoostWeb Blog.",
      type: "article",
      locale: "en_US",
      url: postUrl,
      siteName: "BoostWeb",
      images: [
        {
          url:
            post.image ||
            `https://www.boostweb.io/assets/images/Logo_White_bg_Dark.png`, // Fallback image URL
          width: 1200,
          height: 630,
          alt: `Featured image for ${post.title} - BoostWeb Blog`, // Descriptive alt text
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${post.title} | BoostWeb Blog`,
      description:
        post.excerpt || "Read more about this topic on BoostWeb Blog.",
      images: [
        post.image ||
          `https://www.boostweb.io/assets/images/Logo_White_bg_Dark.png`,
      ], // Fallback image URL
    },
    alternates: {
      canonical: postUrl, // Ensure the canonical URL is consistent
    },
    keywords: [
      `${post.title}`, // Title as a keyword
      `${post.excerpt?.slice(0, 100)}`, // First part of the excerpt for additional context
      "BoostWeb blog", // Brand and blog type
      "BoostWeb", // Brand name
      "blog post", // Generic term
      "content", // Broad term
    ],
  };
}

const page = async ({ params, searchParams }: Params) => {
  // const commentsOrder = searchParams?.comments || "desc";
  const post: Post = await getPost(params?.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="m-auto container lg:max-w-6xl flex flex-col lg:flex-row-reverse pt-32 pb-5 lg:pt-32 ">
      <div className="flex flex-col lg:border-l-2 lg:border-gray-200 lg:pl-10 lg:w-1/5 ">
        <div className="block lg:hidden pb-4">
          <Header title={post?.title} />
        </div>
        <div className="text-left">
          <span>{new Date(post?.publishedAt).toDateString()}</span>
          <div className="mt-5 flex flex-wrap gap-2">
            {post?.tags?.map((tag) => (
              <Link key={tag?._id} href={`/blog/tag/${tag.slug.current}`}>
                <span className=" p-1 rounded-sm text-sm lowercase dark:bg-gray-950 border dark:border-gray-900">
                  #{tag.name}
                </span>
              </Link>
            ))}
          </div>
        </div>
        <div className="max-h-full">
          <Toc headings={post?.headings} />
        </div>
      </div>
      <div className={richTextStyles}>
        <div className="hidden lg:block">
          <Header title={post?.title} />
        </div>
        <div className="mt-14 text-white">
          <PortableText
            value={post?.body}
            components={myPortableTextComponents}
          />
        </div>
        {/* <AddComment postId={post?._id} />
          <AllComments
            comments={post?.comments || []}
            slug={post?.slug?.current}
            commentsOrder={commentsOrder.toString()}
          /> */}
      </div>
    </div>
  );
};

export default page;

const myPortableTextComponents = {
  types: {
    image: ({ value }: any) => (
      <Image src={urlForImage(value)} alt="Post" width={700} height={700} />
    ),
  },
  block: {
    h2: ({ value }: any) => (
      <h2
        id={slugify(value.children[0].text)}
        className="text-3xl font-bold mb-3"
      >
        {value.children[0].text}
      </h2>
    ),
    h3: ({ value }: any) => (
      <h3
        id={slugify(value.children[0].text)}
        className="text-2xl font-bold mb-3"
      >
        {value.children[0].text}
      </h3>
    ),
    h4: ({ value }: any) => (
      <h4
        id={slugify(value.children[0].text)}
        className="text-2xl font-bold mb-3"
      >
        {value.children[0].text}
      </h4>
    ),
    h5: ({ value }: any) => (
      <h5
        id={slugify(value.children[0].text)}
        className="text-2xl font-bold mb-3"
      >
        {value.children[0].text}
      </h5>
    ),
    h6: ({ value }: any) => (
      <h6
        id={slugify(value.children[0].text)}
        className="text-xl font-bold mb-3"
      >
        {value.children[0].text}
      </h6>
    ),
  },
};

const richTextStyles = `
text-justify
max-w-3xl
m-auto
lg:pr-10
xl:pr-0
prose-headings:my-5
prose-heading:text-2xl
prose-p:mb-5
prose-p:leading-7
prose-li:list-disc
prose-li:leading-7
prose-li:ml-4
`;
