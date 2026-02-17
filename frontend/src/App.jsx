import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

import Home from "./pages/Home/Home";
import ProductPage from "./products/ProductPage";
import { Header } from "./components/Header";
import Footer from "./components/Footer";
import ContactPage from "./pages/Contact/Contact";
import AboutUs from "./pages/Aboutus/Aboutus";
import Loader from "./components/Loader";
import ProductDetail from "./pages/Productdetail/ProductDetail";
import Cart from "./pages/store/Cart";

function App() {
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    const timer = setTimeout(() => {
      setLoading(false);
    }, 500); // loader duration (you can adjust)

    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <>
      {/* SHOW LOADER */}
      {loading && <Loader />}

      {/* HEADER */}
      <Header />

      {/* ROUTES */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/product/:id" element={<ProductDetail/>} />
        <Route path="/cart" element={<Cart/>} />
      </Routes>

      {/* FOOTER */}
      <Footer />
    </>
  );
}

export default App;
