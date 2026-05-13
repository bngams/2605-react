import type { Product } from "@/features/products/models/Products";
import React, { useEffect, useMemo } from "react";
import type { Cart, CartItem } from "../models/Cart";
import { CartContext } from "../contexts/CartContext";

function CartProvider({children} : {children: React.ReactNode}) {
  const [items, setItems] = React.useState<CartItem[]>([]);

  // Alternative with useEffect to track items changes (not needed with useMemo)
  // const [cartWithState, setCartWithState] = React.useState<Cart>({ items: [], totalPrice: 0 });
  // useEffect(() => {
  //   const totalPrice = items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  //   setCartWithState({ items, totalPrice });
  // }, [items]);

  // Calculate total price whenever items change
  const cart: Cart = useMemo(() => {
    const totalPrice = items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
    return { items, totalPrice };
  }, [items]);

  const addToCart = (product: Product, quantity: number = 1) => {
    // previous State based update (functional update, more reliable / predictable)
    // previous state is passed as argument (not altered value)
    setItems(prevItems => {
      const existingItem = prevItems.find(item => item.product.id === product.id);

      if (existingItem) {
        return prevItems.map(item =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }

      return [...prevItems, { product, quantity }];
    });
  };

  const removeFromCart = (productId: number) => {
    setItems(prevItems => prevItems.filter(item => item.product.id !== productId));
  };

  const updateQuantity = (productId: number, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }

    setItems(prevItems =>
      prevItems.map(item =>
        item.product.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () => {
    setItems([]);
  };

  useEffect(() => {
    console.log('Init cart state from local storage...');
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      setItems(JSON.parse(storedCart));
    }
  }, []);  

  // Save cart to local storage whenever items change
  // instead of adding localStorage logic or function in addToCart, removeFromCart, updateQuantity, clearCart
  // use a global effect that tracks items changes and updates localStorage accordingly (single source of truth)
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(items));
  }, [items]);

  return(
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQuantity, clearCart }}>
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;