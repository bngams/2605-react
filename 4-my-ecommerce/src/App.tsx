import { BrowserRouter } from "react-router"
import Header from "./components/Header"
import AppRoutes from "./AppRoutes"
import GlobalProvider from "./GlobalProvider"

function App() {

  return (
    <GlobalProvider>
        <BrowserRouter>
            <Header />
            <div className="container mx-auto py-4">
              <AppRoutes />
            </div>
        </BrowserRouter>
    </GlobalProvider>
  )
}

export default App
