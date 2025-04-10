import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import HomePage from "./landingpage/home/HomePage";
import Signup from "./landingpage/signup/Singup";
import AboutPage from "./landingpage/about/AboutPage";
import ProductPage from "./landingpage/products/ProductPage";
import PricingPage from "./landingpage/pricing/PricingPage";
import SupportPage from "./landingpage/support/SupportPage";
import Notfound from "./landingpage/Notfound";
import Footer from "./landingpage/Footer";
import Navbar from "./landingpage/Navbar";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/products" element={<ProductPage />} />
      <Route path="/pricing" element={<PricingPage />} />
      <Route path="/support" element={<SupportPage />} />
      <Route path="*" element={<Notfound />} />
    </Routes>
    <Footer />
  </BrowserRouter>
);
