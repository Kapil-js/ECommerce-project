import "./App.css";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Components/Home";
import { Routes, Route } from "react-router-dom";
import Login from "./Components/Login/Login";
import DeatilsPage from "./Components/DeatilsPage";
import Product from "./modules/Product";
import Products from "./modules/Products";
import CategoryProduct from "./modules/CategoryProduct";
import Cart from "./modules/Cart";
import About from "./modules/About";
import Contact from "./modules/Contact";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Home" element={<DeatilsPage />} />
        <Route path="home/products/:id" element={<Product />} />
        <Route path="home/categories/:name" element={<CategoryProduct />} />
        <Route path="/products/" element={<Products />} />
        <Route path="/home/cart" element={<Cart />} />
        <Route path="/home/about" element={<About />} />
        <Route path="/home/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
