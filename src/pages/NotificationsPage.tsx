import { Bell, Heart, MessageCircle, UserPlus, AtSign } from "lucide-react";

import { Avatar, Card } from "@/components/ui";
import { notifications, users } from "@/data";
import type { NotificationItem } from "@/types/social";
import { relativeTime } from "@/utils/format";

const icons = {
  reaction: Heart,
  comment: MessageCircle,
  follow: UserPlus,
  mention: AtSign,
  job: Bell,
  event: Bell,
};

function groupLabel(item: NotificationItem) {
  const days = Math.abs(Date.now() - new Date(item.createdAt).getTime()) / 86400000;
  if (days < 1) return "Today";
  if (days < 2) return "Yesterday";
  return "This Week";
}

export default function NotificationsPage() {
  const groups = ["Today", "Yesterday", "This Week"];

  return (
    <div className="mx-auto w-full max-w-5xl space-y-5">
      <div>
        <h1 className="text-3xl font-black text-zinc-950 dark:text-white">Notifications</h1>
        <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400">
          Reactions, mentions, follows, and conversation signals.
        </p>
      </div>
      {groups.map((group) => {
        const items = notifications.filter((item) => groupLabel(item) === group);
        if (!items.length) return null;

        return (
          <Card className="overflow-hidden" key={group}>
            <div className="border-b border-zinc-100 px-5 py-4 dark:border-zinc-900">
              <h2 className="font-black text-zinc-950 dark:text-white">{group}</h2>
            </div>
            <div className="divide-y divide-zinc-100 dark:divide-zinc-900">
              {items.map((item) => {
                const actor = users.find((user) => user.id === item.actorId) ?? users[0];
                const Icon = icons[item.type];

                return (
                  <div className="flex items-center gap-4 p-5" key={item.id}>
                    <div className="relative">
                      <Avatar alt={actor.name} src={actor.avatarUrl} />
                      <span className="absolute -bottom-1 -right-1 grid size-6 place-items-center rounded-full bg-primary-600 text-white ring-2 ring-white dark:ring-zinc-950">
                        <Icon size={13} />
                      </span>
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-sm leading-6 text-zinc-700 dark:text-zinc-300">
                        <strong className="text-zinc-950 dark:text-white">{actor.name}</strong>{" "}
                        {item.message}
                      </p>
                      <p className="mt-1 text-xs font-semibold text-zinc-400">
                        {relativeTime(item.createdAt)}
                      </p>
                    </div>
                    {!item.read ? <span className="mt-2 size-2 rounded-full bg-primary-600" /> : null}
                  </div>
                );
              })}
            </div>
          </Card>
        );
      })}
    </div>
  );
}
