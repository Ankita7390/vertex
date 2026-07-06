import { motion } from "framer-motion";
import {
  Bookmark,
  Eye,
  Heart,
  MessageCircle,
  MoreHorizontal,
  Repeat2,
  Send,
  SmilePlus,
} from "lucide-react";
import type { ReactNode } from "react";
import { useMemo, useState } from "react";

import { ArticlePreview } from "@/components/feed/ArticlePreview";
import { CommentThread } from "@/components/feed/CommentThread";
import { PollBlock } from "@/components/feed/PollBlock";
import { PostMedia } from "@/components/feed/PostMedia";
import { Avatar, Button, Card, Input } from "@/components/ui";
import { comments, users } from "@/data";
import { cn } from "@/lib/cn";
import type { Post } from "@/types/social";
import { compactNumber, relativeTime } from "@/utils/format";

interface PostCardProps {
  post: Post;
  index: number;
}

export function PostCard({ post, index }: PostCardProps) {
  const [liked, setLiked] = useState(false);
  const [bookmarked, setBookmarked] = useState(false);
  const [showComments, setShowComments] = useState(index < 2);
  const author = users.find((user) => user.id === post.authorId) ?? users[0];
  const postComments = useMemo(
    () => comments.filter((comment) => comment.postId === post.id),
    [post.id],
  );

  return (
    <motion.article
      animate={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 18 }}
      transition={{ delay: index * 0.05, duration: 0.34, ease: [0.22, 1, 0.36, 1] }}
    >
      <Card className="overflow-hidden p-5">
        <div className="flex gap-3">
          <Avatar alt={author.name} src={author.avatarUrl} />
          <div className="min-w-0 flex-1">
            <div className="flex items-start justify-between gap-3">
              <div>
                <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                  <h2 className="font-bold text-zinc-950 dark:text-white">{author.name}</h2>
                  <span className="text-sm text-zinc-500 dark:text-zinc-400">
                    @{author.handle}
                  </span>
                </div>
                <p className="mt-0.5 text-xs font-medium text-zinc-500 dark:text-zinc-400">
                  {relativeTime(post.createdAt)} · {post.visibility}
                </p>
              </div>
              <Button aria-label="Open post menu" size="icon" variant="ghost">
                <MoreHorizontal size={19} />
              </Button>
            </div>

            <p className="mt-4 whitespace-pre-line text-[15px] leading-7 text-zinc-800 dark:text-zinc-200">
              {post.content}
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {post.hashtags.map((tag) => (
                <span
                  className="text-sm font-bold text-primary-700 dark:text-primary-100"
                  key={tag}
                >
                  #{tag}
                </span>
              ))}
              {post.mentions.map((mention) => (
                <span className="text-sm font-bold text-accent-600" key={mention}>
                  @{mention}
                </span>
              ))}
            </div>

            <PostMedia post={post} />
            {post.poll ? <PollBlock poll={post.poll} /> : null}
            {post.article ? <ArticlePreview article={post.article} /> : null}

            <div className="mt-5 flex flex-wrap items-center justify-between gap-3 border-y border-zinc-100 py-3 text-sm text-zinc-500 dark:border-zinc-900 dark:text-zinc-400">
              <div className="flex items-center gap-4">
                <span>{compactNumber(post.stats.likes + (liked ? 1 : 0))} reactions</span>
                <button
                  className="transition hover:text-primary-700"
                  onClick={() => setShowComments((value) => !value)}
                >
                  {compactNumber(post.stats.comments)} comments
                </button>
              </div>
              <span className="inline-flex items-center gap-1">
                <Eye size={15} /> {compactNumber(post.stats.views)}
              </span>
            </div>

            <div className="grid grid-cols-4 gap-1 pt-2">
              <ActionButton
                active={liked}
                icon={<Heart fill={liked ? "currentColor" : "none"} size={18} />}
                label="React"
                onClick={() => setLiked((value) => !value)}
              />
              <ActionButton
                icon={<MessageCircle size={18} />}
                label="Comment"
                onClick={() => setShowComments((value) => !value)}
              />
              <ActionButton icon={<Repeat2 size={18} />} label="Repost" />
              <ActionButton
                active={bookmarked}
                icon={<Bookmark fill={bookmarked ? "currentColor" : "none"} size={18} />}
                label="Save"
                onClick={() => setBookmarked((value) => !value)}
              />
            </div>

            {showComments ? (
              <>
                <CommentThread comments={postComments} />
                <div className="mt-4 flex items-center gap-3">
                  <Avatar alt={users[0].name} className="size-9" src={users[0].avatarUrl} />
                  <div className="relative flex-1">
                    <Input className="pr-20" placeholder="Add a thoughtful reply" />
                    <div className="absolute right-2 top-1/2 flex -translate-y-1/2 gap-1">
                      <button
                        aria-label="Add emoji"
                        className="rounded-lg p-1.5 text-zinc-400 hover:text-primary-700"
                      >
                        <SmilePlus size={17} />
                      </button>
                      <button
                        aria-label="Send comment"
                        className="rounded-lg p-1.5 text-primary-700 hover:bg-primary-50 dark:hover:bg-primary-500/10"
                      >
                        <Send size={17} />
                      </button>
                    </div>
                  </div>
                </div>
              </>
            ) : null}
          </div>
        </div>
      </Card>
    </motion.article>
  );
}

interface ActionButtonProps {
  active?: boolean;
  icon: ReactNode;
  label: string;
  onClick?: () => void;
}

function ActionButton({ active, icon, label, onClick }: ActionButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex h-10 items-center justify-center gap-2 rounded-xl text-sm font-bold transition hover:bg-orange-50 hover:text-primary-700 dark:hover:bg-orange-950/30",
        active ? "text-primary-700 dark:text-primary-100" : "text-zinc-500 dark:text-zinc-400",
      )}
      onClick={onClick}
    >
      {icon}
      <span className="hidden sm:inline">{label}</span>
    </button>
  );
}
