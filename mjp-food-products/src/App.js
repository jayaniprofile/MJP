import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer";
import Home from "./components/Home/Home";
import Menu from "./components/Menu/Menu";
import About from "./components/About/About";
import Contact from "./components/Contacts/Contact";
import OrderOnline from "./components/OrderOnline";

function App() {
  return (
    <Router>
      <div className="main">
        <Header />
        <Routes>
          <Route exact path="/home" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/order-online" element={<OrderOnline />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
