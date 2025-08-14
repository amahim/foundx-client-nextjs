
import Link from "next/link";
import { Button } from "@heroui/button";
import { getRecentPosts } from "@/src/services/RecentPosts";
import { Ipost } from "@/src/types";
import Container from "@/src/components/UI/Container";


export default async function recentPost() {
  const { data: posts } = await getRecentPosts();

  return (
    <Container >
      <div className="section-title my-8">
        <h2 className="mb-2 text-center text-2xl">Recently Found Items</h2>
        <p className="text-center">
          A list of items that have been recently found and reported.
        </p>
      </div>
      <div className="my-8 grid justify-center gap-10 sm:grid-cols-1 md:grid-cols-4">
        {posts.map((post: Ipost) => (
  <div key={post._id} className="card border-2 rounded-xl p-4 bg-slate-500">
    <img src={post.images[0]} alt={post.title} className="rounded-xl w-full h-48" />
    <h3 className="text-lg text-black mt-2">{post.title}</h3>
    <p className="text-sm text-gray-700">{post.dateFound}</p>
    {/* <p className="text-sm text-white bg-blue-700">{post.category?.name}</p> */}
  </div>
))}

      </div>
      <div className="flex justify-center">
        <Button className="rounded-md bg-default-900 text-default" size="md">
          <Link href="/found-items">See All</Link>
        </Button>
      </div>
    </Container>
  );
}