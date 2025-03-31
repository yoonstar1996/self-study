import { create } from "zustand";

type User = {
  id: string;
};

type State = {
  currentUser: User | null;
  setUser: (user: User | null) => void;
};

export const useUserStore = create<State>((set) => ({
  currentUser: null,
  setUser: (user) => set({ currentUser: user }),
}));
