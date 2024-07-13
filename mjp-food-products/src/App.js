import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Menu from "./components/Menu";
import About from "./components/About";
import Contact from "./components/Contact";
import OrderOnline from "./components/OrderOnline";

function App() {
  return (
    <Router>
      <div className="">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/about" component={<About />} />
          <Route path="/contact" component={<Contact />} />
          <Route path="/order-online" component={<OrderOnline />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
