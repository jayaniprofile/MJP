import { Link } from "react-router-dom";
import React from "react";
import NavData from "../../data/navigation.json";

export const Navigation = () => {
  const { navigation } = NavData;

  return (
    <nav>
      <ul className="nav-links">
        {navigation.map((item, index) => (
          <li key={index}>
            <Link to={item.link}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
