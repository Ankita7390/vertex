import {
  ImagePlus,
  Info,
  Mic,
  Paperclip,
  Phone,
  Send,
  SmilePlus,
  Video,
} from "lucide-react";

import { Avatar, Button, Card, Input } from "@/components/ui";
import { users } from "@/data";
import { cn } from "@/lib/cn";
import type { Conversation, Message } from "@/types/social";
import { relativeTime } from "@/utils/format";

interface ChatWindowProps {
  conversation: Conversation;
  messages: Message[];
}

export function ChatWindow({ conversation, messages }: ChatWindowProps) {
  const currentUserId = "u-priya";
  const participant = users.find(
    (user) => user.id === conversation.participantIds.find((id) => id !== currentUserId),
  );
  const typingUser = users.find((user) => user.id === conversation.typingUserId);

  return (
    <Card className="flex min-h-[calc(100vh-9rem)] flex-col overflow-hidden">
      <header className="flex items-center justify-between gap-3 border-b border-zinc-100 p-4 dark:border-zinc-900">
        <div className="flex min-w-0 items-center gap-3">
          <Avatar
            alt={participant?.name ?? conversation.title ?? "Conversation"}
            src={participant?.avatarUrl}
          />
          <div className="min-w-0">
            <h2 className="truncate font-black text-zinc-950 dark:text-white">
              {conversation.title}
            </h2>
            <p className="text-xs font-semibold text-emerald-600">
              {typingUser ? `${typingUser.name} is typing` : "Active now"}
            </p>
          </div>
        </div>
        <div className="flex gap-1">
          <Button aria-label="Audio call" size="icon" variant="ghost">
            <Phone size={18} />
          </Button>
          <Button aria-label="Video call" size="icon" variant="ghost">
            <Video size={18} />
          </Button>
          <Button aria-label="Conversation details" size="icon" variant="ghost">
            <Info size={18} />
          </Button>
        </div>
      </header>

      <div className="flex-1 space-y-4 overflow-y-auto bg-gradient-to-b from-orange-50/40 to-white p-4 dark:from-orange-950/10 dark:to-zinc-950">
        {messages.map((message) => (
          <MessageBubble
            currentUserId={currentUserId}
            key={message.id}
            message={message}
          />
        ))}
        {typingUser ? <TypingIndicator avatarUrl={typingUser.avatarUrl} name={typingUser.name} /> : null}
      </div>

      <footer className="border-t border-zinc-100 p-4 dark:border-zinc-900">
        <div className="mb-3 flex gap-1">
          <Button aria-label="Attach file" size="icon" variant="ghost">
            <Paperclip size={18} />
          </Button>
          <Button aria-label="Add image" size="icon" variant="ghost">
            <ImagePlus size={18} />
          </Button>
          <Button aria-label="Record voice note" size="icon" variant="ghost">
            <Mic size={18} />
          </Button>
          <Button aria-label="Add emoji" size="icon" variant="ghost">
            <SmilePlus size={18} />
          </Button>
        </div>
        <div className="flex gap-2">
          <Input placeholder="Write a message" />
          <Button size="icon">
            <Send size={18} />
          </Button>
        </div>
      </footer>
    </Card>
  );
}

function MessageBubble({
  currentUserId,
  message,
}: {
  currentUserId: string;
  message: Message;
}) {
  const isMine = message.senderId === currentUserId;
  const sender = users.find((user) => user.id === message.senderId);

  return (
    <div className={cn("flex gap-3", isMine && "justify-end")}>
      {!isMine ? <Avatar alt={sender?.name ?? "Sender"} className="size-8" src={sender?.avatarUrl} /> : null}
      <div className={cn("max-w-[78%]", isMine && "items-end")}>
        <div
          className={cn(
            "rounded-3xl px-4 py-3 text-sm leading-6 shadow-sm",
            isMine
              ? "rounded-br-md bg-primary-600 text-white"
              : "rounded-bl-md bg-white text-zinc-800 dark:bg-zinc-900 dark:text-zinc-100",
          )}
        >
          <p>{message.body}</p>
          {message.media ? (
            <div
              className={cn(
                "mt-3 rounded-2xl border p-3 text-sm font-bold",
                isMine ? "border-white/25 bg-white/10" : "border-orange-200 bg-orange-50",
              )}
            >
              {message.media.label}
            </div>
          ) : null}
        </div>
        <p
          className={cn(
            "mt-1 text-xs text-zinc-400",
            isMine ? "text-right" : "text-left",
          )}
        >
          {relativeTime(message.createdAt)} · {message.status}
        </p>
      </div>
    </div>
  );
}

function TypingIndicator({ avatarUrl, name }: { avatarUrl: string; name: string }) {
  return (
    <div className="flex items-center gap-3">
      <Avatar alt={name} className="size-8" src={avatarUrl} />
      <div className="flex gap-1 rounded-full bg-white px-4 py-3 shadow-sm dark:bg-zinc-900">
        <span className="size-2 animate-bounce rounded-full bg-primary-600" />
        <span className="size-2 animate-bounce rounded-full bg-primary-600 [animation-delay:120ms]" />
        <span className="size-2 animate-bounce rounded-full bg-primary-600 [animation-delay:240ms]" />
      </div>
    </div>
  );
}
