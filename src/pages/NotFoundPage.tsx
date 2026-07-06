import { Link } from "react-router-dom";

import { EmptyState } from "@/components/ui";

export default function NotFoundPage() {
  return (
    <div className="grid w-full place-items-center">
      <EmptyState
        action={
          <Link
            className="inline-flex h-10 items-center justify-center rounded-xl bg-primary-600 px-4 text-sm font-semibold text-white shadow-sm transition hover:bg-primary-700"
            to="/"
          >
            Return home
          </Link>
        }
        description="The page you are looking for does not exist or has moved."
        title="Page not found"
      />
    </div>
  );
}
