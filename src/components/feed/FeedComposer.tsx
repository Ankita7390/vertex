import { motion } from "framer-motion";
import {
  CalendarClock,
  ImagePlus,
  MapPin,
  SmilePlus,
  Sparkles,
  UsersRound,
} from "lucide-react";

import { Avatar, Button, Card, Textarea } from "@/components/ui";
import { users } from "@/data";

const composerTools = [
  { label: "Media", icon: ImagePlus },
  { label: "Mood", icon: SmilePlus },
  { label: "Location", icon: MapPin },
  { label: "Schedule", icon: CalendarClock },
];

export function FeedComposer() {
  const user = users[0];

  return (
    <motion.div
      animate={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 14 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
    >
      <Card className="overflow-hidden p-5">
        <div className="flex items-start gap-3">
          <Avatar alt={user.name} src={user.avatarUrl} />
          <div className="min-w-0 flex-1">
            <div className="mb-3 flex flex-wrap items-center justify-between gap-3">
              <button className="inline-flex items-center gap-2 rounded-full bg-orange-50 px-3 py-1.5 text-xs font-bold text-primary-700 transition hover:bg-orange-100 dark:bg-orange-950/30 dark:text-primary-100">
                <UsersRound size={14} /> Public circle
              </button>
              <span className="text-xs font-semibold text-zinc-400">0 / 500</span>
            </div>
            <Textarea
              className="min-h-24 border-0 bg-zinc-50 px-4 py-3 text-base shadow-inner focus:ring-primary-500/10 dark:bg-zinc-900"
              placeholder="What are you noticing today?"
            />
            <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
              <div className="flex flex-wrap gap-1.5">
                {composerTools.map((tool) => {
                  const Icon = tool.icon;

                  return (
                    <button
                      className="inline-flex h-9 items-center gap-2 rounded-xl px-3 text-sm font-bold text-zinc-500 transition hover:bg-orange-50 hover:text-primary-700 dark:text-zinc-400 dark:hover:bg-orange-950/30"
                      key={tool.label}
                    >
                      <Icon size={17} />
                      <span className="hidden sm:inline">{tool.label}</span>
                    </button>
                  );
                })}
              </div>
              <Button>
                <Sparkles size={17} /> Publish
              </Button>
            </div>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}
