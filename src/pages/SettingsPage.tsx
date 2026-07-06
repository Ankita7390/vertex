import {
  Bell,
  Eye,
  Globe,
  Lock,
  Palette,
  ShieldCheck,
  SlidersHorizontal,
  UserRound,
} from "lucide-react";
import type { ReactNode } from "react";
import { NavLink, useLocation } from "react-router-dom";

import { Button, Card, Input } from "@/components/ui";
import { routes } from "@/constants/routes";
import { useCurrentUser } from "@/hooks/useCurrentUser";
import { cn } from "@/lib/cn";

const sections = [
  { label: "Account", href: routes.accountSettings, icon: UserRound },
  { label: "Privacy", href: routes.privacySettings, icon: Eye },
  { label: "Security", href: routes.securitySettings, icon: ShieldCheck },
  { label: "Theme", href: routes.themeSettings, icon: Palette },
  { label: "Preferences", href: routes.preferenceSettings, icon: SlidersHorizontal },
];

const copy: Record<string, { title: string; description: string }> = {
  [routes.settings]: {
    title: "Settings",
    description: "Manage your account, privacy, security, and Vertex experience.",
  },
  [routes.accountSettings]: {
    title: "Account",
    description: "Identity, email, language, and profile ownership.",
  },
  [routes.privacySettings]: {
    title: "Privacy",
    description: "Control who can see your activity and contact you.",
  },
  [routes.securitySettings]: {
    title: "Security",
    description: "Password, sessions, two-factor prompts, and safety controls.",
  },
  [routes.themeSettings]: {
    title: "Theme",
    description: "Tune appearance, density, motion, and color preferences.",
  },
  [routes.preferenceSettings]: {
    title: "Preferences",
    description: "Notifications, accessibility, language, and content defaults.",
  },
};

export default function SettingsPage() {
  const { pathname } = useLocation();
  const user = useCurrentUser();
  const meta = copy[pathname] ?? copy[routes.settings];

  return (
    <div className="grid w-full gap-5 lg:grid-cols-[17rem_minmax(0,1fr)]">
      <Card className="h-fit p-3">
        <NavLink
          className="mb-2 block rounded-2xl px-3 py-2 text-sm font-black text-zinc-950 hover:bg-orange-50 dark:text-white dark:hover:bg-orange-950/30"
          to={routes.settings}
        >
          Vertex settings
        </NavLink>
        {sections.map((section) => {
          const Icon = section.icon;
          return (
            <NavLink
              className={({ isActive }) =>
                cn(
                  "flex h-11 items-center gap-3 rounded-2xl px-3 text-sm font-bold transition",
                  isActive
                    ? "bg-orange-50 text-primary-700 dark:bg-orange-950/30 dark:text-primary-100"
                    : "text-zinc-500 hover:bg-zinc-100 dark:text-zinc-400 dark:hover:bg-zinc-900",
                )
              }
              key={section.href}
              to={section.href}
            >
              <Icon size={18} /> {section.label}
            </NavLink>
          );
        })}
      </Card>

      <div className="space-y-5">
        <Card className="p-6">
          <h1 className="text-3xl font-black text-zinc-950 dark:text-white">{meta.title}</h1>
          <p className="mt-2 text-sm leading-6 text-zinc-500 dark:text-zinc-400">
            {meta.description}
          </p>
        </Card>
        <Card className="p-6">
          <div className="grid gap-4 sm:grid-cols-2">
            <Input defaultValue={user.name} aria-label="Display name" />
            <Input defaultValue={`${user.handle}@vertex.local`} aria-label="Email" />
            <SettingToggle icon={<Bell size={18} />} label="Smart notifications" checked />
            <SettingToggle icon={<Lock size={18} />} label="Private activity by default" />
            <SettingToggle icon={<Globe size={18} />} label="Show profile to search engines" checked />
            <SettingToggle icon={<Palette size={18} />} label="Reduce motion" />
          </div>
          <div className="mt-6 flex justify-end gap-3">
            <Button variant="secondary">Reset</Button>
            <Button>Save settings</Button>
          </div>
        </Card>
      </div>
    </div>
  );
}

function SettingToggle({
  checked = false,
  icon,
  label,
}: {
  checked?: boolean;
  icon: ReactNode;
  label: string;
}) {
  return (
    <label className="flex items-center justify-between gap-4 rounded-2xl border border-zinc-200 p-4 dark:border-zinc-800">
      <span className="flex items-center gap-3 text-sm font-bold text-zinc-700 dark:text-zinc-200">
        <span className="text-primary-700 dark:text-primary-100">{icon}</span>
        {label}
      </span>
      <input className="size-5 accent-orange-600" defaultChecked={checked} type="checkbox" />
    </label>
  );
}
