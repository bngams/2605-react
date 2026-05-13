import { CartProvider } from "./features/cart/providers/CartProvider";

function GlobalProvider({ children }: { children: React.ReactNode }) {
    return (
        <>
            {/* DiscountProvider */}
                <CartProvider>
                    {/* FavoritesProvider, and so on... can be added here in the future */}  
                        {children} 
                    {/* */}       
                </CartProvider>
            {/* */}
        </>
    );
}

export default GlobalProvider;