import {
  Bell,
  Compass,
  Home,
  LogOut,
  MessageCircle,
  Settings,
  UserRound,
  UsersRound,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

import { routes, routeTo } from "@/constants/routes";

export interface NavigationItem {
  label: string;
  href: string;
  icon: LucideIcon;
  badge?: number;
}

export const primaryNavigation: NavigationItem[] = [
  { label: "Home", href: routes.home, icon: Home },
  { label: "Explore", href: routes.explore, icon: Compass },
  { label: "Friends", href: routes.network, icon: UsersRound, badge: 12 },
  { label: "Messages", href: routes.messages, icon: MessageCircle, badge: 4 },
  { label: "Notifications", href: routes.notifications, icon: Bell, badge: 7 },
  { label: "Profile", href: routeTo.profile("u-priya"), icon: UserRound },
  { label: "Settings", href: routes.settings, icon: Settings },
];

export const utilityNavigation: NavigationItem[] = [
  { label: "Logout", href: routes.login, icon: LogOut },
];

export const mobileNavigation = primaryNavigation.slice(0, 5);
