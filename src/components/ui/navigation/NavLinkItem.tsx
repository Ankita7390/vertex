import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

import type { NavigationItem } from "@/constants/navigation";
import { cn } from "@/lib/cn";

interface NavLinkItemProps {
  item: NavigationItem;
  collapsed?: boolean;
}

export function NavLinkItem({ item, collapsed = false }: NavLinkItemProps) {
  const Icon = item.icon;

  return (
    <NavLink
      className={({ isActive }) =>
        cn(
          "group relative flex h-11 items-center gap-3 rounded-2xl px-3 text-sm font-semibold transition",
          isActive
            ? "bg-primary-50 text-primary-700 dark:bg-primary-500/10 dark:text-primary-100"
            : "text-zinc-600 hover:bg-zinc-100 hover:text-zinc-950 dark:text-zinc-400 dark:hover:bg-zinc-900 dark:hover:text-zinc-50",
          collapsed && "justify-center px-0",
        )
      }
      title={collapsed ? item.label : undefined}
      to={item.href}
    >
      {({ isActive }) => (
        <>
          {isActive ? (
            <motion.span
              className="absolute inset-0 rounded-2xl bg-primary-50 dark:bg-primary-500/10"
              layoutId="sidebar-active"
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            />
          ) : null}
          <span className="relative z-10 flex items-center gap-3">
            <Icon size={20} />
            {collapsed ? null : <span className="truncate">{item.label}</span>}
          </span>
          {!collapsed && item.badge ? (
            <span className="relative z-10 ml-auto rounded-full bg-accent-500 px-2 py-0.5 text-xs font-bold text-white">
              {item.badge}
            </span>
          ) : null}
        </>
      )}
    </NavLink>
  );
}
