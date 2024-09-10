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
  title: "Tags",
  // title: {
  //   absolute: "TAGS",
  // },
  description: "Search for posts by tags on the blog",
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
