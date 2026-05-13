import { CartContext } from "@/features/cart/context/CartContext";
import type { Product } from "@/features/products/models/Products";
import { useContext } from "react";

function ProductCard({ product } : {product: Product}) {

    const { addToCart } = useContext(CartContext);

    function handleAddToCart() {
        addToCart(product);    
    }

    return (
        <div>
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.price} €</p>
            <button>More..</button>
            <button onClick={handleAddToCart}>Add to Cart</button>
        </div>
    );
}
export default ProductCard;