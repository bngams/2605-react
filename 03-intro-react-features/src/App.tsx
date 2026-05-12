import './App.css'
import Header from './components/custom-ui/Header'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'

function App() {

  const routes = [
    { path: "/", element: <Home /> },
    { path: "/about", element: <About /> },
  ]

  const router = createBrowserRouter(routes)

  // const currentPage = window.location.pathname === "/" ? <Home /> : <About />

  return (
    <>
      <Header  />
      <RouterProvider router={router} />
    </>
  )
}

export default App
