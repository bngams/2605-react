import type { NavItem } from "./models/NavItems";
import About from "./pages/About";
import Home from "./pages/Home";
import Products from "./features/products/pages/Products";

const navItems: NavItem[] = [
    { path: "/", label: "Home", component: Home },
    { path: "/about", label: "About", component: About },
    { path: "/products", label: "Products", component: Products }
];
export default navItems;