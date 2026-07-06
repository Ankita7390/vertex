import { useParams } from "react-router-dom";

import { PostCard } from "@/components/feed/PostCard";
import { EmptyState } from "@/components/ui";
import { posts } from "@/data";

export default function PostPage() {
  const { id } = useParams();
  const post = posts.find((item) => item.id === id);

  if (!post) {
    return (
      <EmptyState
        description="This post does not exist in the local mock data."
        title="Post not found"
      />
    );
  }

  return (
    <div className="mx-auto w-full max-w-3xl space-y-5">
      <div>
        <h1 className="text-3xl font-black text-zinc-950 dark:text-white">Post detail</h1>
        <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400">
          A focused conversation view with reactions, comments, and media.
        </p>
      </div>
      <PostCard index={0} post={post} />
    </div>
  );
}
