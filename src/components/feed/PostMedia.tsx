import { Play } from "lucide-react";

import { cn } from "@/lib/cn";
import type { Post } from "@/types/social";

interface PostMediaProps {
  post: Post;
}

export function PostMedia({ post }: PostMediaProps) {
  const media = post.media ?? [];

  if (!media.length) {
    return null;
  }

  if (post.type === "video") {
    return (
      <div className="relative mt-4 overflow-hidden rounded-2xl border border-zinc-200 dark:border-zinc-800">
        <img alt="" className="aspect-video w-full object-cover" src={media[0]} />
        <div className="absolute inset-0 grid place-items-center bg-zinc-950/20">
          <button
            aria-label="Play video"
            className="grid size-16 place-items-center rounded-full bg-white/90 text-primary-700 shadow-xl backdrop-blur transition hover:scale-105"
          >
            <Play fill="currentColor" size={26} />
          </button>
        </div>
      </div>
    );
  }

  return (
    <div
      className={cn(
        "mt-4 grid gap-2 overflow-hidden rounded-2xl",
        media.length === 1 && "grid-cols-1",
        media.length === 2 && "grid-cols-2",
        media.length >= 3 && "grid-cols-2",
      )}
    >
      {media.slice(0, 4).map((src, index) => (
        <div
          className={cn(
            "relative overflow-hidden bg-zinc-100 dark:bg-zinc-900",
            media.length === 3 && index === 0 && "row-span-2",
          )}
          key={src}
        >
          <img
            alt=""
            className={cn(
              "h-full w-full object-cover transition duration-500 hover:scale-[1.03]",
              media.length === 1 ? "max-h-[34rem]" : "aspect-square",
            )}
            src={src}
          />
          {index === 3 && media.length > 4 ? (
            <div className="absolute inset-0 grid place-items-center bg-zinc-950/50 text-xl font-bold text-white">
              +{media.length - 4}
            </div>
          ) : null}
        </div>
      ))}
    </div>
  );
}
