import React, { useState } from "react";
import "../style/Menu.css";
import Header from "./Header";
import butter from "../images/butter.jpeg";
import Footer from "./Footer";
import kottu from "../images/kottu.jpeg";
import parata from "../images/parata.jpeg";
import godamba from "../images/godamba.jpeg";
import choco from "../images/choco.jpeg";
import cup from "../images/cup.jpeg";
import icing from "../images/icing.jpeg";
import sw1 from "../images/sw1.jpeg";
import pre1 from "../images/pre1.jpeg";
import lasagna from "../images/lasagna.jpeg";

const items = {
  sweets: [
    {
      name: "Chocolate Cake",
      description: "Delicious chocolate cake.",
      price: "$10.00",
      img: choco,
    },
    {
      name: "Butter Cake",
      description: "Soft and rich butter cake.",
      price: "$8.00",
      img: butter,
    },
    {
      name: "Cup Cake",
      description: "Sweet and delightful cupcakes.",
      price: "$5.00",
      img: cup,
    },
    {
      name: "Icing Cake",
      description: "Beautifully decorated icing cake.",
      price: "$12.00",
      img: icing,
    },
  ],
  premade: [
    {
      name: "Kottu Roti",
      description: "Sri Lankan chopped flatbread.",
      price: "$8.00",
      img: kottu,
    },
    {
      name: "Godamba Roti",
      description: "Traditional flatbread.",
      price: "$4.00",
      img: godamba,
    },
    {
      name: "Parata Roti",
      description: "Flaky and delicious parata.",
      price: "$5.00",
      img: parata,
    },
    {
      name: "Lasagna Sheets",
      description: "Perfect for homemade lasagna.",
      price: "$6.00",
      img: lasagna,
    },
  ],
};

function Menu() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  return (
    <div className="menu">
      <Header />
      <h1>Our Menu</h1>
      <div className="categories">
        <div className="category" onClick={() => setSelectedCategory("sweets")}>
          <img src={sw1} alt="Sweets" />
          <h2>Sweets</h2>
        </div>
        <div
          className="category"
          onClick={() => setSelectedCategory("premade")}
        >
          <img src={pre1} alt="Pre-made Foods" />
          <h2>Pre-made Foods</h2>
        </div>
      </div>
      {selectedCategory && (
        <div className="items">
          {items[selectedCategory].map((item) => (
            <div className="item" key={item.name}>
              <img src={item.img} alt={item.name} />
              <div className="item-info">
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                <p className="price">{item.price}</p>
              </div>
            </div>
          ))}
        </div>
      )}
      <Footer />
    </div>
  );
}

export default Menu;
