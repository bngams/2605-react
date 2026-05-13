import ProductList from "@/components/ProductList";
import type { Product } from "@/models/Products";
import { useEffect, useState } from "react";

function Products() {
    const [products, setProducts] = useState<Product[]>([]);
    
    useEffect(() => {
        fetch("https://dummyjson.com/products?limit=10")
            .then((response) => response.json())
            .then((data) => setProducts(data.products));
    }, []);

    // Utiliser le composant ProductList pour afficher les products
    return (
        <>
            <h1>Products</h1>
            <ProductList products={products} />
        </>
    );
}
export default Products;