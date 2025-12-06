import { create } from 'zustand';

// Zustand store for user state
export const useUserStore = create((set) => ({
  username: 'zustand-user',
  setUsername: (newUsername) => set({ username: newUsername }),
}));

