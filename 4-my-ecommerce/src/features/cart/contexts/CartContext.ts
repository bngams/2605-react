
import { createContext } from "react";
import type { Cart } from "../models/Cart";
import type { Product } from "@/features/products/models/Products";

type CartContextType = {
  cart: Cart;
  addToCart: (product: Product, quantity?: number) => void;
  removeFromCart: (productId: number) => void;
  updateQuantity: (productId: number, quantity: number) => void;
  clearCart: () => void;
}

export const CartContext = createContext<CartContextType>({
  cart: { items: [], totalPrice: 0 },
  addToCart: () => {},
  removeFromCart: () => {},
  updateQuantity: () => {},
  clearCart: () => {}
});