import { motion } from "framer-motion";
import { Outlet, useLocation } from "react-router-dom";

import { DesktopSidebar } from "@/components/ui/navigation/DesktopSidebar";
import { MobileBottomNav } from "@/components/ui/navigation/MobileBottomNav";
import { TopNav } from "@/components/ui/navigation/TopNav";
import { ProfileSummaryCard } from "@/components/ui/layout/ProfileSummaryCard";
import { RightRail } from "@/components/ui/layout/RightRail";

export function AppLayout() {
  const { pathname } = useLocation();
  const isFocusRoute =
    pathname === "/network" ||
    pathname === "/notifications" ||
    pathname === "/settings" ||
    pathname.startsWith("/settings/") ||
    pathname === "/messages" ||
    pathname.startsWith("/messages/");

  return (
    <div className="vertex-surface min-h-screen text-zinc-950 dark:text-zinc-50">
      <TopNav />
      <main className="mx-auto flex w-full max-w-[96rem] gap-6 px-4 pb-24 pt-4 sm:px-6 lg:px-8 lg:pb-8">
        <DesktopSidebar />
        <motion.section
          animate={{ opacity: 1, y: 0 }}
          className="min-w-0 flex-1"
          initial={{ opacity: 0, y: 12 }}
          transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
        >
          <div
            className={
              isFocusRoute
                ? "mx-auto w-full max-w-6xl"
                : "mx-auto grid w-full max-w-6xl gap-8 xl:grid-cols-[minmax(0,1fr)_20rem]"
            }
          >
            <div className="min-w-0">
              <Outlet />
            </div>
            {!isFocusRoute ? (
              <motion.div
                animate={{ opacity: 1, x: 0 }}
                className="sticky top-20 hidden max-h-[calc(100vh-6rem)] w-80 min-w-80 self-start overflow-y-auto overscroll-contain pb-2 [scrollbar-gutter:stable] xl:block"
                initial={{ opacity: 0, x: 16 }}
                transition={{ delay: 0.12, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="space-y-4">
                  <ProfileSummaryCard />
                  <RightRail />
                </div>
              </motion.div>
            ) : null}
          </div>
        </motion.section>
      </main>
      <MobileBottomNav />
    </div>
  );
}
