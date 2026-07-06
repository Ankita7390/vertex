import type { ReactNode } from "react";

import { Card } from "@/components/ui";

interface ProfileSectionProps {
  title: string;
  action?: ReactNode;
  children: ReactNode;
}

export function ProfileSection({ title, action, children }: ProfileSectionProps) {
  return (
    <Card className="p-5">
      <div className="mb-4 flex items-center justify-between gap-4">
        <h2 className="text-lg font-black text-zinc-950 dark:text-white">{title}</h2>
        {action}
      </div>
      {children}
    </Card>
  );
}
