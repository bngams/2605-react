import type { Product } from "@/features/products/models/Products";
import ProductCard from "./ProductCard";

// compléter le type (prendre exemple sur ProductCard)
function ProductList({ products } : {products: Product[]}) {
    return (
        <div>
            {products.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    );
}
export default ProductList;