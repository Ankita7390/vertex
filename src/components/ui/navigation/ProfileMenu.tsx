import { ChevronDown, Settings, UserRound } from "lucide-react";
import { Link } from "react-router-dom";

import { Avatar } from "@/components/ui/avatars/Avatar";
import { routeTo, routes } from "@/constants/routes";
import { useCurrentUser } from "@/hooks/useCurrentUser";

export function ProfileMenu() {
  const user = useCurrentUser();

  return (
    <div className="group relative">
      <button
        aria-label="Open profile menu"
        className="flex h-11 items-center gap-2 rounded-2xl border border-zinc-200 bg-white py-1 pl-1 pr-3 text-sm font-semibold text-zinc-800 shadow-sm transition hover:bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-100 dark:hover:bg-zinc-900"
      >
        <Avatar alt={user.name} className="size-8" src={user.avatarUrl} />
        <span className="hidden max-w-24 truncate lg:block">{user.name}</span>
        <ChevronDown size={16} />
      </button>
      <div className="invisible absolute right-0 top-12 z-50 w-56 translate-y-1 rounded-2xl border border-zinc-200 bg-white p-2 opacity-0 shadow-xl transition group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 dark:border-zinc-800 dark:bg-zinc-950">
        <Link
          className="flex items-center gap-3 rounded-xl px-3 py-2 text-sm text-zinc-700 hover:bg-zinc-100 dark:text-zinc-200 dark:hover:bg-zinc-900"
          to={routeTo.profile(user.id)}
        >
          <UserRound size={17} /> View profile
        </Link>
        <Link
          className="flex items-center gap-3 rounded-xl px-3 py-2 text-sm text-zinc-700 hover:bg-zinc-100 dark:text-zinc-200 dark:hover:bg-zinc-900"
          to={routes.settings}
        >
          <Settings size={17} /> Settings
        </Link>
      </div>
    </div>
  );
}
