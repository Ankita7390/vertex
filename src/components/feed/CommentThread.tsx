import { Heart, MessageCircle } from "lucide-react";

import { Avatar } from "@/components/ui";
import { users } from "@/data";
import { relativeTime } from "@/utils/format";
import type { Comment } from "@/types/social";

interface CommentThreadProps {
  comments: Comment[];
}

export function CommentThread({ comments }: CommentThreadProps) {
  if (!comments.length) {
    return null;
  }

  return (
    <div className="mt-4 space-y-4 border-t border-zinc-100 pt-4 dark:border-zinc-900">
      {comments.map((comment) => (
        <CommentItem comment={comment} key={comment.id} />
      ))}
    </div>
  );
}

function CommentItem({ comment }: { comment: Comment }) {
  const author = users.find((user) => user.id === comment.authorId) ?? users[0];

  return (
    <div className="flex gap-3">
      <Avatar alt={author.name} className="size-9" src={author.avatarUrl} />
      <div className="min-w-0 flex-1">
        <div className="rounded-2xl bg-zinc-100 px-4 py-3 dark:bg-zinc-900">
          <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
            <p className="text-sm font-bold text-zinc-950 dark:text-white">{author.name}</p>
            <p className="text-xs text-zinc-500 dark:text-zinc-400">
              @{author.handle} · {relativeTime(comment.createdAt)}
            </p>
          </div>
          <p className="mt-1 text-sm leading-6 text-zinc-700 dark:text-zinc-300">
            {comment.content}
          </p>
        </div>
        <div className="mt-2 flex gap-4 px-2 text-xs font-bold text-zinc-500 dark:text-zinc-400">
          <button className="inline-flex items-center gap-1 transition hover:text-primary-700">
            <Heart size={13} /> {comment.likes}
          </button>
          <button className="inline-flex items-center gap-1 transition hover:text-primary-700">
            <MessageCircle size={13} /> Reply
          </button>
        </div>
        {comment.replies?.length ? (
          <div className="mt-3 space-y-3 border-l-2 border-orange-200 pl-4 dark:border-orange-950">
            {comment.replies.map((reply) => (
              <CommentItem comment={reply} key={reply.id} />
            ))}
          </div>
        ) : null}
      </div>
    </div>
  );
}
