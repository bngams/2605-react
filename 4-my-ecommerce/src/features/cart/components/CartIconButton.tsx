import { ShoppingCart } from "lucide-react";
import { useContext } from "react";
import { useNavigate } from "react-router";
import { CartContext } from "../contexts/CartContext";

function CartIconButton() {

  const { cart } = useContext(CartContext);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/cart');
  };

  return (
    <div
      className="flex items-center space-x-2 cursor-pointer hover:opacity-80 transition-opacity"
      onClick={handleClick}
    >
      <ShoppingCart size={32} />
      <span className="text-xl font-bold">{cart.items.length}</span>
      <span className="text-xl">({cart.totalPrice.toFixed(2)})</span>
    </div>
  );

}

export default CartIconButton;