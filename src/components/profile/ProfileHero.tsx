import { motion } from "framer-motion";
import { MapPin, MessageCircle, MoreHorizontal, Pencil, UserPlus } from "lucide-react";
import { Link } from "react-router-dom";

import { Avatar, Button, Card } from "@/components/ui";
import { routes } from "@/constants/routes";
import type { User } from "@/types/social";
import { compactNumber } from "@/utils/format";

interface ProfileHeroProps {
  user: User;
  isCurrentUser: boolean;
}

export function ProfileHero({ user, isCurrentUser }: ProfileHeroProps) {
  return (
    <motion.div
      animate={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 14 }}
      transition={{ duration: 0.36, ease: [0.22, 1, 0.36, 1] }}
    >
      <Card className="overflow-hidden">
        <div className="relative z-0 h-40 bg-zinc-200 sm:h-52 dark:bg-zinc-900">
          <img
            alt=""
            className="relative z-0 size-full object-cover object-[center_42%]"
            src={user.coverUrl ?? "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1600&h=520&fit=crop"}
          />
          <div className="absolute inset-0 z-10 bg-gradient-to-t from-zinc-950/35 via-transparent to-white/5 dark:to-zinc-950/10" />
        </div>
        <div className="relative z-20 px-5 pb-6 sm:px-6">
          <div className="-mt-10 flex flex-wrap items-end justify-between gap-4 sm:-mt-12">
            <div className="relative z-30">
              <Avatar
                alt={user.name}
                className="size-24 ring-4 ring-white sm:size-28 dark:ring-zinc-950"
                src={user.avatarUrl}
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {isCurrentUser ? (
                <Link
                  className="inline-flex h-10 items-center justify-center gap-2 rounded-xl border border-zinc-200 bg-white px-4 text-sm font-bold text-zinc-900 shadow-sm transition hover:bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-50"
                  to={routes.profileEdit}
                >
                  <Pencil size={17} /> Edit profile
                </Link>
              ) : (
                <Button>
                  <UserPlus size={17} /> Connect
                </Button>
              )}
              <Button variant="secondary">
                <MessageCircle size={17} /> Message
              </Button>
              <Button aria-label="More profile actions" size="icon" variant="ghost">
                <MoreHorizontal size={18} />
              </Button>
            </div>
          </div>
          <div className="mt-5">
            <h1 className="text-3xl font-black tracking-tight text-zinc-950 dark:text-white">
              {user.name}
            </h1>
            <p className="mt-1 text-sm font-semibold text-primary-700 dark:text-primary-100">
              @{user.handle}
            </p>
            <p className="mt-3 max-w-2xl text-base leading-7 text-zinc-700 dark:text-zinc-300">
              {user.headline}
            </p>
            {user.location ? (
              <p className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-zinc-500 dark:text-zinc-400">
                <MapPin size={16} /> {user.location}
              </p>
            ) : null}
            <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2 text-sm text-zinc-500 dark:text-zinc-400">
              <strong className="text-zinc-950 dark:text-white">
                {compactNumber(user.followers)}
              </strong>{" "}
              followers
              <strong className="text-zinc-950 dark:text-white">
                {compactNumber(user.following)}
              </strong>{" "}
              following
              <strong className="text-zinc-950 dark:text-white">
                {compactNumber(user.connections ?? 0)}
              </strong>{" "}
              connections
            </div>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}
