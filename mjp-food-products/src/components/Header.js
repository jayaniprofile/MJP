import React from "react";
import { Link } from "react-router-dom";
import "../style/Header.css"; // Import the CSS file

function Header() {
  return (
    <header className="header">
      <div className="logo">MJS Food Products</div>
      <nav>
        <ul className="nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/menu">Menu</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/order-online">Order Online</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
