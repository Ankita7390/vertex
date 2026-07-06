import { create } from "zustand";

import type { Conversation } from "@/types/social";

interface MessageState {
  conversations: Conversation[];
  activeConversationId?: string;
  setActiveConversation: (id: string) => void;
}

export const useMessageStore = create<MessageState>((set) => ({
  conversations: [],
  activeConversationId: undefined,
  setActiveConversation: (id) => set({ activeConversationId: id }),
}));
