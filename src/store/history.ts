import { create } from "zustand";

type State = {
  names: string[];
};

type Action = {
  addNames: (item: State["names"]) => void;
};

export const useHistoryStore = create<State & Action>((set) => ({
  names: [],
  addNames: (item) =>
    set((state) => ({
      names: [...item, ...state.names],
    })),
}));
