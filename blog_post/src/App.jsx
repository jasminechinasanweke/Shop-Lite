
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Shop from "./pages/Shop";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Blog from "./pages/Blog";
import Blog_post from "./pages/Blog_post";
import Contact from "./pages/Contact";
import Admin from "./pages/Admin";
import Admin_Login from "./pages/Admin_Login"
import Dashboard from "./pages/Dashboard"
import CreatCategory from "./pages/Create_category";
import Create_Product from "./pages/Create_Product";
import View_Category from "./pages/View_Category"  
import View_Product from "./pages/View_Product";
import View_Users from "./pages/View_Users";
import Register from "./pages/Register_user";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/product/:id" element={<Product />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/blog_post" element={<Blog_post />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/Admin_login" element={<Admin_Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/create_Category" element={<CreatCategory />} />
      <Route path="/create_product" element={<Create_Product />} />
       <Route path="/categorie_view" element={<View_Category />} />
      <Route path="/product_view" element={<View_Product />} />
      <Route path="/user_view" element={<View_Users />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
}

export default App;
