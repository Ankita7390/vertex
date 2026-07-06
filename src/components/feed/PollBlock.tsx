import type { Post } from "@/types/social";

interface PollBlockProps {
  poll: NonNullable<Post["poll"]>;
}

export function PollBlock({ poll }: PollBlockProps) {
  return (
    <div className="mt-4 rounded-2xl border border-orange-200 bg-orange-50/60 p-4 dark:border-orange-950 dark:bg-orange-950/20">
      <p className="text-sm font-bold text-zinc-950 dark:text-white">{poll.question}</p>
      <div className="mt-4 space-y-3">
        {poll.options.map((option) => {
          const percentage = Math.round((option.votes / poll.totalVotes) * 100);

          return (
            <button
              className="group w-full rounded-2xl border border-white/80 bg-white p-3 text-left shadow-sm transition hover:-translate-y-0.5 hover:border-primary-500 dark:border-zinc-800 dark:bg-zinc-950"
              key={option.id}
            >
              <div className="flex items-center justify-between gap-4 text-sm font-semibold">
                <span>{option.label}</span>
                <span className="text-primary-700 dark:text-primary-100">{percentage}%</span>
              </div>
              <div className="mt-2 h-2 overflow-hidden rounded-full bg-zinc-100 dark:bg-zinc-800">
                <div
                  className="h-full rounded-full bg-primary-600 transition-all duration-700"
                  style={{ width: `${percentage}%` }}
                />
              </div>
            </button>
          );
        })}
      </div>
      <p className="mt-3 text-xs font-medium text-zinc-500 dark:text-zinc-400">
        {poll.totalVotes.toLocaleString()} votes
      </p>
    </div>
  );
}
