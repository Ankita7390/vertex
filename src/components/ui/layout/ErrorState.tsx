import { AlertTriangle } from "lucide-react";

import { EmptyState } from "@/components/ui/layout/EmptyState";

export function ErrorState() {
  return (
    <EmptyState
      description="Something in this view could not be rendered. Try navigating back or refreshing the page."
      icon={<AlertTriangle size={28} />}
      title="We hit a snag"
    />
  );
}
