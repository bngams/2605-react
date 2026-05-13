import navItems from "../routes";
import { Link } from "react-router";
import AppTitle from "./theming/titles/AppTitle";
// import { ShoppingBag } from "lucide-react";
// import { CartContext } from "@/features/cart/contexts/CartContext";
// import { useContext } from "react";
// import Cart from "@/features/cart/pages/Cart";
import CartIconButton from "@/features/cart/components/CartIconButton";

function Header() { 
    
    // const { cart } = useContext(CartContext);

    return (
        <header className="bg-gray-800 text-white p-4">
            <div className="flex items-center justify-between">
                <AppTitle title="My E-commerce" className="text-white" />
                <nav className="">
                    <ul className="flex space-x-4">
                        {navItems.filter(item => item.displayMenu).map((item) => (
                            <li key={item.path}>
                                <Link to={item.path}>{item.label}</Link>
                            </li>
                        ))}
                        {/* SOLID programming principles => use a separate component for cart icon */}
                        {/* <li className="flex"><ShoppingBag size="24"/>{cart.items.length}</li> */}
                        <li><CartIconButton /></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;