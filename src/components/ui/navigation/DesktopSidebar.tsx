import { motion } from "framer-motion";
import { PanelLeftClose, PanelLeftOpen } from "lucide-react";

import { Button } from "@/components/ui/buttons/Button";
import { BrandMark } from "@/components/ui/navigation/BrandMark";
import { NavLinkItem } from "@/components/ui/navigation/NavLinkItem";
import { primaryNavigation, utilityNavigation } from "@/constants/navigation";
import { useUiStore } from "@/store/uiStore";
import { cn } from "@/lib/cn";

export function DesktopSidebar() {
  const { isSidebarCollapsed, toggleSidebar } = useUiStore();

  return (
    <motion.aside
      animate={{ opacity: 1, x: 0 }}
      className={cn(
        "sticky top-20 hidden h-[calc(100vh-6rem)] shrink-0 flex-col rounded-3xl border border-zinc-200 bg-white p-3 shadow-soft transition-all dark:border-zinc-800 dark:bg-zinc-950 lg:flex",
        isSidebarCollapsed ? "w-20" : "w-64",
      )}
      initial={{ opacity: 0, x: -18 }}
      transition={{ duration: 0.36, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="mb-4 flex items-center justify-between px-1">
        {isSidebarCollapsed ? <div className="w-10" /> : <BrandMark />}
        <Button
          aria-label="Toggle sidebar"
          size="icon"
          variant="ghost"
          onClick={toggleSidebar}
        >
          {isSidebarCollapsed ? <PanelLeftOpen size={18} /> : <PanelLeftClose size={18} />}
        </Button>
      </div>
      <motion.nav
        animate="show"
        aria-label="Primary navigation"
        className="space-y-1"
        initial="hidden"
        variants={{
          hidden: {},
          show: { transition: { staggerChildren: 0.035 } },
        }}
      >
        {primaryNavigation.map((item) => (
          <motion.div
            key={item.href}
            variants={{
              hidden: { opacity: 0, x: -8 },
              show: { opacity: 1, x: 0 },
            }}
          >
            <NavLinkItem collapsed={isSidebarCollapsed} item={item} />
          </motion.div>
        ))}
      </motion.nav>
      <div className="mt-auto border-t border-zinc-200 pt-3 dark:border-zinc-800">
        {utilityNavigation.map((item) => (
          <NavLinkItem collapsed={isSidebarCollapsed} item={item} key={item.href} />
        ))}
      </div>
    </motion.aside>
  );
}
