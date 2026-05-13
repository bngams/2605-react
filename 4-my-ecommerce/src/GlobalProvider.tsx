import { AuthProvider } from "./features/auth/providers/AuthProvider";
import CartProvider from "./features/cart/providers/CartProvider";

function GlobalProvider({ children }: { children: React.ReactNode }) {
    return (
        <>
            <AuthProvider>
                {/* DiscountProvider */}
                    <CartProvider>
                        {/* FavoritesProvider, and so on... can be added here in the future */}  
                            {children} 
                        {/* */}       
                    </CartProvider>
                {/* */}
            </AuthProvider>
        </>
    );
}

export default GlobalProvider;