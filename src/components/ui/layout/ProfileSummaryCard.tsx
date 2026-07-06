import { MapPin } from "lucide-react";
import { Link } from "react-router-dom";

import { Avatar, Badge, Card } from "@/components/ui";
import { routeTo } from "@/constants/routes";
import { users } from "@/data";

export function ProfileSummaryCard() {
  const user = users[0];

  return (
    <Card className="overflow-hidden">
      <div className="h-20 bg-[linear-gradient(135deg,#431407,#ea580c_45%,#0ea5e9)]" />
      <div className="px-5 pb-5">
        <Avatar
          alt={user.name}
          className="-mt-7 size-16 ring-4 ring-white dark:ring-zinc-950"
          src={user.avatarUrl}
        />
        <Link
          className="mt-4 block text-lg font-bold text-zinc-950 hover:text-primary-700 dark:text-white dark:hover:text-primary-100"
          to={routeTo.profile(user.id)}
        >
          {user.name}
        </Link>
        <p className="mt-1 text-sm leading-5 text-zinc-500 dark:text-zinc-400">
          {user.headline}
        </p>
        {user.location ? (
          <p className="mt-3 flex items-center gap-1.5 text-xs font-medium text-zinc-500 dark:text-zinc-400">
            <MapPin size={14} /> {user.location}
          </p>
        ) : null}
        <div className="mt-5 grid grid-cols-2 gap-3">
          <div>
            <p className="text-lg font-bold text-zinc-950 dark:text-white">
              {user.followers.toLocaleString()}
            </p>
            <p className="text-xs text-zinc-500 dark:text-zinc-400">Followers</p>
          </div>
          <div>
            <p className="text-lg font-bold text-zinc-950 dark:text-white">
              {user.following.toLocaleString()}
            </p>
            <p className="text-xs text-zinc-500 dark:text-zinc-400">Following</p>
          </div>
        </div>
        <div className="mt-5 flex flex-wrap gap-2">
          <Badge>Creator</Badge>
          <Badge className="bg-accent-500/10 text-accent-600 dark:text-accent-500">
            Verified
          </Badge>
        </div>
      </div>
    </Card>
  );
}
