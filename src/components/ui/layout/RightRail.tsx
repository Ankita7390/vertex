import { Hash, RadioTower, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

import { Card } from "@/components/ui/cards/Card";
import { hashtags } from "@/data";

const suggestions = ["Maya Chen", "Jordan Ellis", "Noah Shah"];

export function RightRail() {
  return (
    <aside className="space-y-4">
      <Card className="p-5">
        <div className="flex items-center gap-2">
          <Sparkles className="text-primary-600" size={18} />
          <h2 className="text-sm font-bold text-zinc-950 dark:text-white">
            Suggested creators
          </h2>
        </div>
        <div className="mt-4 space-y-3">
          {suggestions.map((name) => (
            <div className="flex items-center justify-between gap-3" key={name}>
              <div>
                <p className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                  {name}
                </p>
                <p className="text-xs text-zinc-500 dark:text-zinc-400">
                  Followed by people in your network
                </p>
              </div>
              <button className="rounded-full border border-zinc-200 px-3 py-1 text-xs font-bold text-primary-700 transition hover:bg-primary-50 dark:border-zinc-800 dark:text-primary-100 dark:hover:bg-primary-500/10">
                Follow
              </button>
            </div>
          ))}
        </div>
      </Card>
      <Card className="p-5">
        <div className="flex items-center gap-2">
          <Hash className="text-accent-500" size={18} />
          <h2 className="text-sm font-bold text-zinc-950 dark:text-white">
            Popular hashtags
          </h2>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {hashtags.map((tag) => (
            <Link
              className="rounded-full bg-zinc-100 px-3 py-1.5 text-xs font-semibold text-zinc-700 transition hover:bg-primary-50 hover:text-primary-700 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:bg-primary-500/10 dark:hover:text-primary-100"
              key={tag}
              to={`/search?q=${tag}`}
            >
              #{tag}
            </Link>
          ))}
        </div>
      </Card>
      <Card className="p-5">
        <div className="flex items-center gap-2">
          <RadioTower className="text-primary-600" size={18} />
          <h2 className="text-sm font-bold text-zinc-950 dark:text-white">
            Live signal
          </h2>
        </div>
        <p className="mt-3 text-sm leading-6 text-zinc-500 dark:text-zinc-400">
          218 people are discussing creator tools, design critique, and calm
          communities right now.
        </p>
      </Card>
    </aside>
  );
}
