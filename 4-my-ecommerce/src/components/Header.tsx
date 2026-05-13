import navItems from "../routes";
import { Link } from "react-router";
import AppTitle from "./theming/titles/AppTitle";
import { ShoppingBag } from "lucide-react";
import { CartContext } from "@/features/cart/context/CartContext";
import { useContext } from "react";

function Header() { 
    
    const { cart } = useContext(CartContext);

    return (
        <header className="bg-gray-800 text-white p-4">
            <div className="flex items-center justify-between">
                <AppTitle title="My E-commerce" className="text-white" />
                <nav className="">
                    <ul className="flex space-x-4">
                        {navItems.map((item) => (
                            <li key={item.path}>
                                <Link to={item.path}>{item.label}</Link>
                            </li>
                        ))}
                        <li className="flex"><ShoppingBag size="24"/>{cart.items.length}</li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;