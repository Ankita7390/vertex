import { users } from "@/data";
import { getStoredSession } from "@/lib/auth";
import { useUserStore } from "@/store/userStore";

export function useCurrentUser() {
  const { currentUser } = useUserStore();
  const fallback = users[0];

  if (currentUser) {
    return currentUser;
  }

  const stored = getStoredSession();
  if (stored) {
    return { ...fallback, ...stored, id: "u-priya" };
  }

  return fallback;
}
