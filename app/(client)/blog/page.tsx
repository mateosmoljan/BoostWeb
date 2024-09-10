import Header from "@/app/components/Header";
import PostComponent from "@/app/components/PostComponent";
import { Post } from "@/app/utils/interface";
import { client } from "@/sanity/lib/client";

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
