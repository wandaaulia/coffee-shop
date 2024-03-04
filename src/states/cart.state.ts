import { create } from "zustand";
import { v4 as uuidv4 } from "uuid";

type CartState = {
  amount: Product[];
  addProduct: (product: Product) => void;
};

type Product = {
  id?: string;
  name: string;
  price: number | undefined;
};
const useShoppingCart = create<CartState>((set) => ({
  amount: [],
  addProduct: ({ name, price }: Product) =>
    set((state) => ({
      amount: [
        ...state.amount,
        {
          id: uuidv4(),
          name,
          price,
        } as Product,
      ],
    })),
}));

export default useShoppingCart;
