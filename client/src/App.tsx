import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Header } from "./components/Header"
import { Home } from "./pages/Home/Home"
import { Login } from "./pages/Login/Login"
import { Register } from "./pages/Register/Register"
import { Cart } from "./pages/Cart/Cart.tsx"

function App() {


  return (
    <BrowserRouter>
      <Header />
      <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/login" element={<Login />}/>
      <Route path="/register" element={<Register />}/>
      <Route path="/restaurant/:id" element={<Home />}/>
      <Route path="/cart" element={<Cart />}/>
      </Routes>
    </BrowserRouter>

  )
}

export default App
