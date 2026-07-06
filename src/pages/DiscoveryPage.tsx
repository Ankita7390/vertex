import { Bookmark, Compass, Hash, Search, Sparkles, UsersRound } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

import { Avatar, Badge, Button, Card, Input } from "@/components/ui";
import { hashtags, posts, users } from "@/data";
import { routeTo } from "@/constants/routes";
import { compactNumber } from "@/utils/format";

const pageCopy: Record<string, { title: string; description: string; icon: typeof Compass }> = {
  "/explore": {
    title: "Explore",
    description: "Trending conversations, creators, and communities with momentum.",
    icon: Compass,
  },
  "/search": {
    title: "Search",
    description: "Find people, posts, hashtags, communities, and saved ideas.",
    icon: Search,
  },
  "/trending": {
    title: "Trending",
    description: "Fast-moving signals across the Vertex network.",
    icon: Sparkles,
  },
  "/network": {
    title: "Friends",
    description: "People you know, mutual circles, and suggested connections.",
    icon: UsersRound,
  },
  "/bookmarks": {
    title: "Bookmarks",
    description: "Saved posts and collections for later reading.",
    icon: Bookmark,
  },
  "/saved": {
    title: "Saved",
    description: "Collections, articles, and media you marked as meaningful.",
    icon: Bookmark,
  },
  "/help": {
    title: "Help Center",
    description: "Guides for posting, messaging, privacy, and building healthy circles.",
    icon: Sparkles,
  },
};

export default function DiscoveryPage() {
  const { pathname } = useLocation();
  const meta = pageCopy[pathname] ?? pageCopy["/explore"];
  const Icon = meta.icon;
  const isSearch = pathname === "/search";
  const isNetwork = pathname === "/network";
  const isSaved = pathname === "/bookmarks" || pathname === "/saved";
  const showIntroCard = pathname !== "/network" && pathname !== "/explore";

  return (
    <div className="mx-auto w-full max-w-6xl space-y-5">
      {showIntroCard ? (
        <Card className="overflow-hidden p-6">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <Badge className="gap-1.5">
                <Icon size={14} /> Vertex
              </Badge>
              <h1 className="mt-4 text-3xl font-black text-zinc-950 dark:text-white">
                {meta.title}
              </h1>
              <p className="mt-2 max-w-2xl text-sm leading-6 text-zinc-500 dark:text-zinc-400">
                {meta.description}
              </p>
            </div>
            <Button variant="secondary">Customize</Button>
          </div>
          {isSearch ? (
            <div className="mt-5">
              <Input className="h-12" placeholder="Search Vertex" />
            </div>
          ) : null}
        </Card>
      ) : null}

      <div className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_19rem]">
        <div className="space-y-5">
          {isNetwork ? <PeopleGrid /> : null}
          {isSaved ? <SavedCollections /> : null}
          {!isNetwork && !isSaved ? <TrendingPosts /> : null}
        </div>
        <Card className="h-fit p-5">
          <h2 className="flex items-center gap-2 font-black text-zinc-950 dark:text-white">
            <Hash className="text-primary-700" size={18} /> Popular tags
          </h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {hashtags.map((tag) => (
              <Link
                className="rounded-full bg-orange-50 px-3 py-1.5 text-xs font-bold text-primary-700 dark:bg-orange-950/30 dark:text-primary-100"
                key={tag}
                to={`/search?q=${tag}`}
              >
                #{tag}
              </Link>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}

function TrendingPosts() {
  return (
    <div className="grid gap-4">
      {posts.slice(0, 4).map((post) => {
        const author = users.find((user) => user.id === post.authorId) ?? users[0];
        return (
          <Card className="p-5 transition hover:-translate-y-0.5 hover:shadow-soft" key={post.id}>
            <div className="flex gap-3">
              <Avatar alt={author.name} src={author.avatarUrl} />
              <div className="min-w-0 flex-1">
                <p className="font-black text-zinc-950 dark:text-white">{author.name}</p>
                <p className="mt-2 line-clamp-3 text-sm leading-6 text-zinc-600 dark:text-zinc-300">
                  {post.content}
                </p>
                <div className="mt-3 flex gap-4 text-xs font-bold text-zinc-400">
                  <span>{compactNumber(post.stats.likes)} reactions</span>
                  <span>{compactNumber(post.stats.views)} views</span>
                </div>
              </div>
            </div>
          </Card>
        );
      })}
    </div>
  );
}

function PeopleGrid() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 2xl:grid-cols-3">
      {users.map((user) => (
        <Card className="p-5" key={user.id}>
          <Avatar alt={user.name} className="size-16" src={user.avatarUrl} />
          <Link
            className="mt-4 block font-black text-zinc-950 hover:text-primary-700 dark:text-white"
            to={routeTo.profile(user.id)}
          >
            {user.name}
          </Link>
          <p className="mt-2 min-h-20 text-sm leading-6 text-zinc-500 dark:text-zinc-400">
            {user.headline}
          </p>
          <Button className="mt-4 w-full" variant={user.id === "u-priya" ? "secondary" : "primary"}>
            {user.id === "u-priya" ? "View profile" : "Connect"}
          </Button>
        </Card>
      ))}
    </div>
  );
}

function SavedCollections() {
  const collections = ["Product strategy", "Motion patterns", "Community research"];
  return (
    <div className="grid gap-4 sm:grid-cols-3">
      {collections.map((collection, index) => (
        <Card className="p-5" key={collection}>
          <span className="grid size-12 place-items-center rounded-2xl bg-orange-50 text-primary-700 dark:bg-orange-950/30">
            <Bookmark size={20} />
          </span>
          <h2 className="mt-4 font-black text-zinc-950 dark:text-white">{collection}</h2>
          <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400">
            {index + 3} saved signals
          </p>
        </Card>
      ))}
    </div>
  );
}
