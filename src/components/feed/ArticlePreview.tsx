import { ExternalLink } from "lucide-react";

import type { Post } from "@/types/social";

interface ArticlePreviewProps {
  article: NonNullable<Post["article"]>;
}

export function ArticlePreview({ article }: ArticlePreviewProps) {
  return (
    <article className="mt-4 overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-soft dark:border-zinc-800 dark:bg-zinc-950">
      <img alt="" className="aspect-[16/7] w-full object-cover" src={article.imageUrl} />
      <div className="p-4">
        <p className="text-xs font-bold uppercase tracking-wide text-primary-700 dark:text-primary-100">
          {article.source}
        </p>
        <h3 className="mt-2 text-lg font-bold text-zinc-950 dark:text-white">
          {article.title}
        </h3>
        <p className="mt-2 text-sm leading-6 text-zinc-500 dark:text-zinc-400">
          {article.excerpt}
        </p>
        <span className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-primary-700 dark:text-primary-100">
          Read field note <ExternalLink size={16} />
        </span>
      </div>
    </article>
  );
}
