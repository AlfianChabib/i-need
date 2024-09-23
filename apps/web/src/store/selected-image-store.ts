import { create } from "zustand";

interface SelectedImageStore {
  selectedImage: File | null;
  setSelectedImage: (image: File | null) => void;
}

export const useSelectedImageStore = create<SelectedImageStore>((set) => ({
  selectedImage: null,
  setSelectedImage: (image: File | null) => set({ selectedImage: image }),
}));
