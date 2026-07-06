import { Grid2X2, Heart, Images, MessageCircle } from "lucide-react";
import { useState } from "react";

import { PostCard } from "@/components/feed/PostCard";
import { Card } from "@/components/ui";
import { cn } from "@/lib/cn";
import type { Post, User } from "@/types/social";

const tabs = [
  { id: "posts", label: "Posts", icon: Grid2X2 },
  { id: "media", label: "Media", icon: Images },
  { id: "likes", label: "Likes", icon: Heart },
] as const;

interface ProfileActivityProps {
  user: User;
  posts: Post[];
}

export function ProfileActivity({ user, posts }: ProfileActivityProps) {
  const [activeTab, setActiveTab] = useState<(typeof tabs)[number]["id"]>("posts");
  const mediaPosts = posts.filter((post) => post.media?.length || post.article);

  return (
    <Card className="p-5">
      <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
        <div>
          <h2 className="text-lg font-black text-zinc-950 dark:text-white">Activity</h2>
          <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
            Recent posts, media, and saved signals from {user.name.split(" ")[0]}.
          </p>
        </div>
        <div className="flex rounded-2xl bg-zinc-100 p-1 dark:bg-zinc-900">
          {tabs.map((tab) => {
            const Icon = tab.icon;

            return (
              <button
                className={cn(
                  "inline-flex h-9 items-center gap-2 rounded-xl px-3 text-sm font-bold transition",
                  activeTab === tab.id
                    ? "bg-white text-primary-700 shadow-sm dark:bg-zinc-950 dark:text-primary-100"
                    : "text-zinc-500 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-white",
                )}
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
              >
                <Icon size={16} />
                <span className="hidden sm:inline">{tab.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {activeTab === "posts" ? (
        <div className="space-y-4">
          {posts.map((post, index) => (
            <PostCard index={index} key={post.id} post={post} />
          ))}
        </div>
      ) : null}

      {activeTab === "media" ? (
        <div className="grid gap-3 sm:grid-cols-2">
          {mediaPosts.map((post) => (
            <div
              className="overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900"
              key={post.id}
            >
              <img
                alt=""
                className="aspect-video w-full object-cover"
                src={post.media?.[0] ?? post.article?.imageUrl}
              />
              <p className="line-clamp-2 p-3 text-sm font-semibold text-zinc-700 dark:text-zinc-300">
                {post.content}
              </p>
            </div>
          ))}
        </div>
      ) : null}

      {activeTab === "likes" ? (
        <div className="grid place-items-center rounded-2xl border border-dashed border-orange-200 bg-orange-50/50 px-6 py-10 text-center dark:border-orange-950 dark:bg-orange-950/20">
          <Heart className="text-primary-700 dark:text-primary-100" size={28} />
          <h3 className="mt-3 font-black text-zinc-950 dark:text-white">
            Signals worth revisiting
          </h3>
          <p className="mt-2 max-w-md text-sm leading-6 text-zinc-500 dark:text-zinc-400">
            Liked posts will collect here as the static interaction model expands.
          </p>
          <button className="mt-4 inline-flex items-center gap-2 rounded-xl bg-primary-600 px-4 py-2 text-sm font-bold text-white">
            <MessageCircle size={16} /> Start a conversation
          </button>
        </div>
      ) : null}
    </Card>
  );
}
