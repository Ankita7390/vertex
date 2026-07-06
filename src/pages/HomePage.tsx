import { FeedComposer } from "@/components/feed/FeedComposer";
import { FeedHighlights } from "@/components/feed/FeedHighlights";
import { PostCard } from "@/components/feed/PostCard";
import { posts } from "@/data";

export default function HomePage() {
  return (
    <div className="space-y-5">
      <FeedHighlights />
      <FeedComposer />

      <section aria-label="Home feed" className="space-y-5">
        {posts.map((post, index) => (
          <PostCard index={index} key={post.id} post={post} />
        ))}
      </section>
    </div>
  );
}
