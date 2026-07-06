import { create } from "zustand";

import type { User } from "@/types/social";

interface UserState {
  currentUser?: User;
  setCurrentUser: (user: User) => void;
  clearCurrentUser: () => void;
}

export const useUserStore = create<UserState>((set) => ({
  currentUser: undefined,
  setCurrentUser: (user) => set({ currentUser: user }),
  clearCurrentUser: () => set({ currentUser: undefined }),
}));
