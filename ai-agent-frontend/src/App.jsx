import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import LoginPage from "./pages/LoginPage"; // Create LoginPage.jsx if not created
import SignupPage from "./pages/SignupPage";
import Navbar from "./components/Navbar";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import ServicesSlider from "./pages/ServicesSlider"; // Create SignupPage.jsx if not created
import AIInput from "./components/AIInput";

const App = () => {
  return (
    <Router>
      <Navbar />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signin" element={<SignupPage />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/services" element={<ServicesSlider />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;