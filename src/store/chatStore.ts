import { create } from "zustand";
import type { Message } from "../types/chat";

interface ChatStore {
  isOpen: boolean;

  messages: Message[];

  openChat: () => void;
  closeChat: () => void;

  addMessage: (
    message: Message
  ) => void;
}

export const useChatStore = create<ChatStore>(
  (set) => ({
    isOpen: false,

    messages: [],

    openChat: () =>
      set({
        isOpen: true,
      }),

    closeChat: () =>
      set({
        isOpen: false,
      }),

    addMessage: (
      message
    ) =>
      set((state) => ({
        messages: [
          ...state.messages,
          message,
        ],
      })),
  })
);