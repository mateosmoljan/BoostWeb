import Link from "next/link";
import React from "react";
import { Post } from "../utils/interface";

interface Props {
  post: Post;
}

const PostComponent = ({ post }: Props) => {
  return (
    <div className={cardStyle}>
      <Link href={`/blog/${post?.slug?.current}`}>
        <h2 className="text-2xl text-left mb-5">{post?.title}</h2>
        <p className="text-gray-400 mb-5">{post?.excerpt}</p>
        <p className="text-white text-sm mb-5">
          {new Date(post?.publishedAt).toDateString()}
        </p>
      </Link>

      {/* TAGS */}

      <div className="flex gap-2 flex-wrap">
        {post?.tags?.map((tag) => (
          <span
            key={tag?._id}
            className="mr-2 p-1 rounded-sm text-sm lowercase dark:bg-gray-950 border dark:border-gray-900"
          >
            #{tag?.name}
          </span>
        ))}
      </div>
    </div>
  );
};

export default PostComponent;

const cardStyle = `
p-5
border
border-gray-900
rounded-lg
hover:bg-white_hover
hover:text-white
hover:dark:bg-gray-950
`;
