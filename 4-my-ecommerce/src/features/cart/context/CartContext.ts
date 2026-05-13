import type { Product } from "@/features/products/models/Products";
import { createContext } from "react";


export type Cart = {
    items: Product[];
}

export type CartContextType = {
    cart: Cart;
    addToCart: (product: Product) => void;
}

// create context
export const CartContext = createContext<CartContextType>({
    cart: { items: [] },
    addToCart: () => {}
});