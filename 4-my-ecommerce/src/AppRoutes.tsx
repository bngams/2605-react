import { Route, Routes } from "react-router";
import navItems from "./routes";

function AppRoutes() {
    return (
        <Routes>
            {navItems.map((item, index) => (
                <Route key={index} path={item.path} element={<item.component />} />
            ))}
        </Routes>
    );
}
export default AppRoutes;

