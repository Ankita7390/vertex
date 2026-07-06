import { UserRound } from "lucide-react";

import { cn } from "@/lib/cn";

interface AvatarProps {
  src?: string;
  alt: string;
  className?: string;
}

export function Avatar({ src, alt, className }: AvatarProps) {
  return (
    <div
      className={cn(
        "grid size-11 shrink-0 place-items-center overflow-hidden rounded-full bg-zinc-100 text-zinc-500 ring-2 ring-white dark:bg-zinc-900 dark:text-zinc-400 dark:ring-zinc-950",
        className,
      )}
    >
      {src ? (
        <img alt={alt} className="size-full object-cover" src={src} />
      ) : (
        <UserRound aria-hidden="true" size={20} />
      )}
    </div>
  );
}
