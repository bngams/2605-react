import type { Product } from "@/features/products/models/Products";
import { useEffect, useState } from "react";
import { CartContext, type Cart } from "../context/CartContext";

// initialize the context with provider
export function CartProvider({ children } : {children: React.ReactNode}) {
    // const discount = useContext(DiscountContext); // example of using another context (DiscountContext) if needed in the future

    const [cart, setCart] = useState<Cart>({ items: [] });

    useEffect(() => {
        // Here you could load the cart from localStorage or an API when the component mounts
        const savedCart = localStorage.getItem("cart");
        if (savedCart) {
            setCart(JSON.parse(savedCart));
        }
    }, []);

    const addToCart = (product: Product) => {
        setCart((prevCart) => ({
            ...prevCart,
            items: [...prevCart.items, product],
        }));
        localStorage.setItem("cart", JSON.stringify(cart)); // Save the cart to localStorage whenever it changes
    }

    return (
        <CartContext.Provider value={{ cart, addToCart }}>
            {children}
        </CartContext.Provider>
    );
}