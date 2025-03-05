import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navbar } from "./components/NavBar/Navbar.tsx";
import { Home } from "./pages/Home/Home";
import { Login } from "./pages/Login/Login";
import { Register } from "./pages/Register/Register";
import { Cart } from "./pages/Cart/Cart.tsx";
import { RestaurantDetails } from "./components/RestauranDetails/RestaurantDetails.tsx";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/restaurant/:id" element={<RestaurantDetails />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
