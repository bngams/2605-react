import { BrowserRouter } from "react-router"
import Header from "./components/Header"
import AppRoutes from "./AppRoutes"

function App() {

  return (
    <BrowserRouter>
        <Header />
        <div className="container mx-auto py-4">
          <AppRoutes />
        </div>
    </BrowserRouter>
  )
}

export default App
