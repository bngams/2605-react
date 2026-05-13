import navItems from "../routes";
import { Link } from "react-router";

function Header() { 
    return (
        <header className="bg-gray-800 text-white p-4">
            <div className="flex items-center justify-between">
                <h1 className="text-2xl font-bold">My E-commerce</h1>
                <nav className="">
                    <ul className="flex space-x-4">
                        {navItems.map((item) => (
                            <li key={item.path}>
                                <Link to={item.path}>{item.label}</Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;