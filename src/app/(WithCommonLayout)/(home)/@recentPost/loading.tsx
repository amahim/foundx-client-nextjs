
import Link from "next/link";
import { Button } from "@heroui/button";
import Container from "@/src/components/UI/Container";
import { Skeleton } from "@heroui/skeleton";
// import { getRecentPosts } from "@/src/services/RecentPosts";
// import { Ipost } from "@/src/types";


export default async function recentPost() {
  // const { data: posts } = await getRecentPosts();

  return (
    <Container >
      <div className="section-title my-8">
        <h2 className="mb-2 text-center text-2xl">Recently Found Items</h2>
        <p className="text-center">
          A list of items that have been recently found and reported.
        </p>
      </div>
      <div className="my-8 grid justify-center gap-10 sm:grid-cols-1 md:grid-cols-4">
        {[...Array(9)].map(() => (
          <div>
            <Skeleton className="rounded-lg">
  <div className="h-48 rounded-lg bg-gray-800 animate-pulse" />
</Skeleton>

<div className="flex items-center justify-between p-3 bg-gray-900">
  <div className="w-3/4">
    <Skeleton className="my-2 w-2/5 rounded-lg">
      <div className="h-3 w-2/5 rounded-lg bg-gray-800 animate-pulse" />
    </Skeleton>

    <Skeleton className="w-3/5 rounded-lg">
      <div className="h-3 w-3/5 rounded-lg bg-gray-800 animate-pulse" />
    </Skeleton>
  </div>

  <div className="w-1/4">
    <Skeleton className="my-2 w-full rounded-full">
      <div className="h-8 w-full rounded-full bg-gray-800 animate-pulse" />
    </Skeleton>
  </div>
</div>
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