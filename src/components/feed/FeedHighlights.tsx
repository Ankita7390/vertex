import { Flame, RadioTower, TrendingUp } from "lucide-react";

import { Card } from "@/components/ui";

const items = [
  { label: "Warm networks", value: "18.4K", icon: Flame },
  { label: "Live rooms", value: "27", icon: RadioTower },
  { label: "Creator tools", value: "+42%", icon: TrendingUp },
];

export function FeedHighlights() {
  return (
    <div className="grid gap-3 sm:grid-cols-3">
      {items.map((item) => {
        const Icon = item.icon;

        return (
          <Card className="p-4 shadow-none" key={item.label}>
            <div className="flex items-center gap-3">
              <span className="grid size-10 place-items-center rounded-2xl bg-orange-50 text-primary-700 dark:bg-orange-950/30 dark:text-primary-100">
                <Icon size={18} />
              </span>
              <div>
                <p className="text-lg font-black text-zinc-950 dark:text-white">
                  {item.value}
                </p>
                <p className="text-xs font-semibold text-zinc-500 dark:text-zinc-400">
                  {item.label}
                </p>
              </div>
            </div>
          </Card>
        );
      })}
    </div>
  );
}
