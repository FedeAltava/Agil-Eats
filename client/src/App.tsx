import { BrowserRouter, Route } from "react-router-dom"
import { Header } from "./components/Header"


function App() {


  return (
    <BrowserRouter>
      <h1>Hello World!</h1>
      <Header />
      <Route path="/" element={<Home />}/>
      <Route path="/login" element={<Home />}/>
      <Route path="/register" element={<Home />}/>
      <Route path="/restaurant/:id" element={<Home />}/>
      <Route path="/cart" element={<Home />}/>
    </BrowserRouter>
  )
}

export default App
