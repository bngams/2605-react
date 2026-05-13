import type { NavItem } from "./models/NavItems";
import About from "./pages/About";
import Home from "./pages/Home";
import Products from "./features/products/pages/Products";
import Cart from "./features/cart/pages/Cart";
import Auth from "./features/auth/pages/Auth";

const navItems: NavItem[] = [
    { path: "/", label: "Home", displayMenu: true, component: Home },
    { path: "/about", label: "About", displayMenu: true, component: About },
    { path: "/products", label: "Products", displayMenu: true, component: Products },
    { path: "/cart", label: "Cart", displayMenu: false, component: Cart },
    { path: "/auth", label: "Login", displayMenu: true, component: Auth },
];
export default navItems;