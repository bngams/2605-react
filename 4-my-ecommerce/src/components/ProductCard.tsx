import type { Product } from "@/models/Products";

function ProductCard({ product } : {product: Product}) {
    return (
        <div>
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.price} €</p>
            <button>More..</button>
            <button>Add to Cart</button>
        </div>
    );
}
export default ProductCard;