import React from "react";
import { Link } from "react-router-dom";
import "../../style/Header.css";
import Navigation from "./Navigation"; // Import the CSS file

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <Link to={"/home"}>MJS Food Products</Link>
      </div>
      <Navigation />
    </header>
  );
}

export default Header;
