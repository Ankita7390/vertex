import { motion } from "framer-motion";
import { Bell, PenSquare, Search } from "lucide-react";
import { Link } from "react-router-dom";

import { Button } from "@/components/ui/buttons/Button";
import { Input } from "@/components/ui/inputs/Input";
import { BrandMark } from "@/components/ui/navigation/BrandMark";
import { ProfileMenu } from "@/components/ui/navigation/ProfileMenu";
import { ThemeToggle } from "@/components/ui/navigation/ThemeToggle";
import { routes } from "@/constants/routes";

export function TopNav() {
  return (
    <motion.header
      animate={{ y: 0, opacity: 1 }}
      className="sticky top-0 z-40 border-b border-orange-200/70 bg-white/82 backdrop-blur-xl dark:border-orange-950/70 dark:bg-zinc-950/82"
      initial={{ y: -16, opacity: 0 }}
      transition={{ duration: 0.34, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center gap-4 px-4 sm:px-6 lg:px-8">
        <BrandMark />
        <form className="relative hidden flex-1 md:block" role="search">
          <Search
            aria-hidden="true"
            className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400"
            size={18}
          />
          <Input
            aria-label="Search Vertex"
            className="h-10 rounded-2xl bg-zinc-100 pl-10 dark:bg-zinc-900"
            placeholder="Search people, posts, friends"
          />
        </form>
        <div className="ml-auto flex items-center gap-1 sm:gap-2">
          <Button aria-label="Search" className="md:hidden" size="icon" variant="ghost">
            <Search size={19} />
          </Button>
          <Button aria-label="Notifications" size="icon" variant="ghost">
            <Bell size={19} />
          </Button>
          <ThemeToggle />
          <Link
            className="hidden h-9 items-center justify-center gap-2 rounded-xl bg-primary-600 px-3 text-sm font-semibold text-white shadow-sm transition hover:bg-primary-700 active:scale-[0.98] sm:inline-flex"
            to={routes.createPost}
          >
            <PenSquare size={17} /> Create
          </Link>
          <ProfileMenu />
        </div>
      </div>
    </motion.header>
  );
}
