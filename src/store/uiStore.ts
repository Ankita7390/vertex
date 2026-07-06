import { create } from "zustand";

interface UiState {
  isCreatePostOpen: boolean;
  isSidebarCollapsed: boolean;
  openCreatePost: () => void;
  closeCreatePost: () => void;
  toggleSidebar: () => void;
}

export const useUiStore = create<UiState>((set) => ({
  isCreatePostOpen: false,
  isSidebarCollapsed: false,
  openCreatePost: () => set({ isCreatePostOpen: true }),
  closeCreatePost: () => set({ isCreatePostOpen: false }),
  toggleSidebar: () =>
    set((state) => ({ isSidebarCollapsed: !state.isSidebarCollapsed })),
}));
