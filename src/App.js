import Footer from "./components/Footer";
import Header from "./components/Header";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Contact from "./pages/Contact";
import Profile from "./pages/Profile";
import "./pages/App.css";
import ProductDetails from "./components/ProductDetails";
import AddProducts from "./admin/pages/AddProducts";
import SignUp from "./components/SignUp";



function App() {
  return (
    <Router basename="/ecommerce">
      <Header />
      <Routes>
        <Route path="/" element ={<Home/>} />
        <Route path="/about" element ={<About/>} />
        <Route path="/products" element ={<Products/>} />
        <Route path="/contact" element ={<Contact/>} />
        <Route path="/profile" element ={<Profile/>} />
        <Route path="/product/:id" element ={<ProductDetails/>} />
        <Route path="/signup" element ={<SignUp/>} />

        <Route path="/admin/product/add" element ={<AddProducts/>} />
      </Routes>
      <Footer />
    </Router>

  );
}

export default App;
