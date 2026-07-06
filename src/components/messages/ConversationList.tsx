import { Archive, Pin, Search } from "lucide-react";
import { NavLink } from "react-router-dom";

import { Avatar, Card, Input } from "@/components/ui";
import { users } from "@/data";
import { cn } from "@/lib/cn";
import type { Conversation } from "@/types/social";
import { relativeTime } from "@/utils/format";

interface ConversationListProps {
  conversations: Conversation[];
  activeId: string;
}

export function ConversationList({ conversations, activeId }: ConversationListProps) {
  const pinned = conversations.filter((conversation) => conversation.pinned);
  const active = conversations.filter((conversation) => !conversation.archived);
  const archived = conversations.filter((conversation) => conversation.archived);

  return (
    <Card className="h-full overflow-hidden">
      <div className="border-b border-zinc-100 p-4 dark:border-zinc-900">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-black text-zinc-950 dark:text-white">Messages</h1>
            <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
              Conversations that keep momentum.
            </p>
          </div>
          <span className="rounded-full bg-orange-50 px-3 py-1 text-xs font-black text-primary-700 dark:bg-orange-950/30 dark:text-primary-100">
            {conversations.reduce((sum, item) => sum + item.unreadCount, 0)} new
          </span>
        </div>
        <div className="relative mt-4">
          <Search
            className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400"
            size={17}
          />
          <Input className="h-10 bg-zinc-50 pl-10 dark:bg-zinc-900" placeholder="Search messages" />
        </div>
      </div>
      <div className="max-h-[calc(100vh-15rem)] overflow-y-auto p-2">
        <ConversationGroup conversations={pinned} icon={<Pin size={14} />} title="Pinned" activeId={activeId} />
        <ConversationGroup conversations={active} title="Recent" activeId={activeId} />
        <ConversationGroup
          conversations={archived}
          icon={<Archive size={14} />}
          title="Archived"
          activeId={activeId}
        />
      </div>
    </Card>
  );
}

interface ConversationGroupProps {
  conversations: Conversation[];
  title: string;
  activeId: string;
  icon?: React.ReactNode;
}

function ConversationGroup({ activeId, conversations, icon, title }: ConversationGroupProps) {
  if (!conversations.length) {
    return null;
  }

  return (
    <div className="mb-3">
      <p className="mb-1 flex items-center gap-1 px-3 text-xs font-black uppercase text-zinc-400">
        {icon} {title}
      </p>
      <div className="space-y-1">
        {conversations.map((conversation) => (
          <ConversationRow
            active={conversation.id === activeId}
            conversation={conversation}
            key={conversation.id}
          />
        ))}
      </div>
    </div>
  );
}

function ConversationRow({
  active,
  conversation,
}: {
  active: boolean;
  conversation: Conversation;
}) {
  const participant = users.find(
    (user) => user.id === conversation.participantIds.find((id) => id !== "u-priya"),
  );

  return (
    <NavLink
      className={cn(
        "flex gap-3 rounded-2xl p-3 transition hover:bg-orange-50 dark:hover:bg-orange-950/20",
        active && "bg-orange-50 dark:bg-orange-950/30",
      )}
      to={`/messages/${conversation.id}`}
    >
      <div className="relative">
        <Avatar
          alt={participant?.name ?? conversation.title ?? "Conversation"}
          className="size-11"
          src={participant?.avatarUrl}
        />
        {conversation.typingUserId ? (
          <span className="absolute -bottom-0.5 -right-0.5 size-3 rounded-full border-2 border-white bg-emerald-500 dark:border-zinc-950" />
        ) : null}
      </div>
      <div className="min-w-0 flex-1">
        <div className="flex items-center justify-between gap-3">
          <p className="truncate text-sm font-black text-zinc-950 dark:text-white">
            {conversation.title}
          </p>
          <span className="shrink-0 text-xs text-zinc-400">
            {relativeTime(conversation.lastMessageAt)}
          </span>
        </div>
        <p className="mt-1 truncate text-sm text-zinc-500 dark:text-zinc-400">
          {conversation.summary}
        </p>
      </div>
      {conversation.unreadCount ? (
        <span className="grid size-6 place-items-center rounded-full bg-primary-600 text-xs font-black text-white">
          {conversation.unreadCount}
        </span>
      ) : null}
    </NavLink>
  );
}
