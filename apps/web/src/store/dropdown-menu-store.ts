import { create } from "zustand";

interface DropdownMenuState {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

export const useDropdownMenuStore = create<DropdownMenuState>((set) => ({
  isOpen: false,
  setIsOpen: (isOpen) => set({ isOpen }),
}));
