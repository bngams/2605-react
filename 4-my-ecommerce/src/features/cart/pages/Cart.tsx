import { useContext } from "react";
import ProductList from "@/features/products/components/ProductList";
import { Button } from "@/components/ui/button";
import { CartContext } from "../contexts/CartContext";

function Cart() {
    const { cart, clearCart } = useContext(CartContext);

    // Transform cart items to Product[] for ProductList component
    const products = cart.items.map(item => item.product);

    if (cart.items.length === 0) {
        return (
            <div className="flex flex-col items-center justify-center p-8">
                <h1 className="text-2xl font-bold mb-4">Your Cart is Empty</h1>
                <p className="text-gray-500">Add some products to get started!</p>
            </div>
        );
    }

    return (
        <div className="p-8">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-3xl font-bold">Shopping Cart</h1>
                <Button variant="destructive" onClick={clearCart}>
                    Clear Cart
                </Button>
            </div>

            <div className="mb-6">
                <p className="text-xl">
                    Total Items: <span className="font-bold">{cart.items.length}</span>
                </p>
                <p className="text-2xl">
                    Total Price: <span className="font-bold">{cart.totalPrice.toFixed(2)} €</span>
                </p>
            </div>

            <ProductList products={products} />
        </div>
    );
}

export default Cart;