import { BrowserRouter } from "react-router"
import Header from "./components/Header"
import AppRoutes from "./AppRoutes"
import { CartProvider } from "./features/cart/providers/CartProvider"

function App() {

  return (
    <CartProvider>
        <BrowserRouter>
            <Header />
            <div className="container mx-auto py-4">
              <AppRoutes />
            </div>
        </BrowserRouter>
    </CartProvider>
  )
}

export default App
