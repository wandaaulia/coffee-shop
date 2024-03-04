import { create } from "zustand";

type CategoriesState = {
  nameCategories: string;
  setCategories: (name: string) => void;
};
const useCategoriesState = create<CategoriesState>((set) => ({
  nameCategories: "Coffee",
  setCategories: (name: string) => set(() => ({ nameCategories: name })),
}));

export default useCategoriesState;
