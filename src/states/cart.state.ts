import { create } from "zustand";
import { v4 as uuidv4 } from "uuid";

type CartStore = {
  cart: CartItem[];
  addToCart: (product: CartItem) => void;
  removeFromCart: (productId: string) => void;
  clearCart: () => void;
  removeOneCart: (productId: string) => void;
  totalPrice: () => number;
  totalCart: () => number;
  loading: boolean;
  setLoading: () => void;
};

type Product = {
  id: string;
  name: string;
  price: number;
  image: string;
};

export interface CartItem extends Product {
  quantity: number;
}
const useShoppingCart = create<CartStore>((set, get) => ({
  cart: [],
  loading: false,

  setLoading: () =>
    set((state) => {
      state.loading = !state.loading;

      return { loading: state.loading };
    }),

  addToCart: (product: CartItem) =>
    set((state) => {
      // Check if the item with the same ID already exists in the cart
      const existingItemIndex = state.cart.findIndex(
        (cartItem) => cartItem.id === product.id
      );

      // If the item already exists, update its quantity
      if (existingItemIndex !== -1) {
        const updatedCartItems = [...state.cart];
        updatedCartItems[existingItemIndex].quantity += 1; // Increment quantity or default to 1
        state.cart = updatedCartItems;

        return { cart: updatedCartItems }; // Return the updated state or a partial state update
      } else {
        const updatedCartItems = [...state.cart, product];
        return { cart: updatedCartItems }; // Return the updated state or a partial state update
      }

      // Otherwise, add the item to the cart
    }),
  removeFromCart: (productId: string | undefined) =>
    set((state) => {
      if (!productId) {
        return { cart: state.cart };
      }

      const updatedCartItems = [...state.cart];

      const existingItemIndex = updatedCartItems.findIndex(
        (cartItem) => cartItem.id === productId
      );

      if (existingItemIndex !== -1) {
        if (updatedCartItems[existingItemIndex].quantity > 1) {
          updatedCartItems[existingItemIndex].quantity -= 1;
        }
      }

      return { cart: updatedCartItems };
    }),
  removeOneCart: (productId: string) =>
    set((state) => {
      const newCart = state.cart.filter((item) => item.id !== productId);

      return { cart: newCart };
    }),
  clearCart: () => set({ cart: [] }),
  totalPrice: () =>
    get().cart.reduce((total, item) => total + item.price * item.quantity, 0),
  totalCart: () => get().cart.reduce((total, item) => total + item.quantity, 0),
}));

export default useShoppingCart;
