import type { Product } from "@/features/products/models/Products";

export type CartItem = {
    product: Product;
    quantity: number;
};

export type Cart = {
    items: CartItem[];
    totalPrice: number;
};

export type CartItems = CartItem[];