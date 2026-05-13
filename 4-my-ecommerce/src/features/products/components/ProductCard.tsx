import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CartContext } from "@/features/cart/contexts/CartContext";
import React, { useContext } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { Product } from "../models/Products";

//ProductCard(props: {product: Product})
function ProductCard({ product } : {product: Product, children?: React.ReactNode}) {

    const { addToCart, cart } = useContext(CartContext);

    const addProductToCart = () => {
        console.log('Adding product to cart', product);
        addToCart(product);
    }

    // Find the quantity of this product in the cart
    // TODO: optimize this by using a Map or similar structure in the CartContext for O(1) access instead of O(n) search
    // TODO: optimize this by memoizing the cart items or using a selector if we were using something like Redux
    const cartItem = cart.items.find(item => item.product.id === product.id);
    const quantityInCart = cartItem?.quantity || 0;

    return (
        <Card className="relative">
          {quantityInCart > 0 && (
            <Badge className="absolute top-2 right-2 bg-primary text-primary-foreground">
              In cart: {quantityInCart}
            </Badge>
          )}
          <CardHeader>
            <CardTitle>{product.title}</CardTitle>
            <CardDescription>{product.price} €</CardDescription>
          </CardHeader>
          <CardContent className="flex justify-center flex-col">
            <div className="flex justify-center">
              <img className="max-w-[250px] max-h-[250px]" src={product.thumbnail} alt={product.title} />
            </div>
            <Button onClick={addProductToCart}>Add to cart</Button>
          </CardContent>
        </Card>
    );
}

export default ProductCard;