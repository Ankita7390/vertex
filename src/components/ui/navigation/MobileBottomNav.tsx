import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

import { mobileNavigation } from "@/constants/navigation";
import { cn } from "@/lib/cn";

export function MobileBottomNav() {
  return (
    <motion.nav
      animate={{ y: 0, opacity: 1 }}
      aria-label="Mobile navigation"
      className="fixed inset-x-0 bottom-0 z-40 border-t border-zinc-200 bg-white/90 px-2 pb-[env(safe-area-inset-bottom)] pt-2 backdrop-blur-xl dark:border-zinc-800 dark:bg-zinc-950/90 lg:hidden"
      initial={{ y: 24, opacity: 0 }}
      transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="mx-auto grid max-w-md grid-cols-5 gap-1">
        {mobileNavigation.map((item) => {
          const Icon = item.icon;

          return (
            <NavLink
              className={({ isActive }) =>
                cn(
                  "flex min-h-14 flex-col items-center justify-center gap-1 rounded-2xl text-[11px] font-semibold transition",
                  isActive
                    ? "bg-primary-50 text-primary-700 dark:bg-primary-500/10 dark:text-primary-100"
                    : "text-zinc-500 dark:text-zinc-400",
                )
              }
              key={item.href}
              to={item.href}
            >
              <Icon size={20} />
              <span>{item.label}</span>
            </NavLink>
          );
        })}
      </div>
    </motion.nav>
  );
}
