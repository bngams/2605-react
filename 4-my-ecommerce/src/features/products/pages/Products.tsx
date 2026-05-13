import ProductList from "@/features/products/components/ProductList";
import type { Product } from "@/features/products/models/Products";
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
            {/* TODO: avoid repeating the same code / classes for the title in each page => create a reusable component (ex: PageTitle) or use a common layout component for all pages */}
            <h1 className="text-3xl font-bold">Products</h1>
            <ProductList products={products} />
        </>
    );
}
export default Products;