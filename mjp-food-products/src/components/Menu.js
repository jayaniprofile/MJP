import React, { useState } from "react";
import "../style/Menu.css";
import Header from "./Header";

const items = {
  sweets: [
    {
      name: "Chocolate Cake",
      description: "Delicious chocolate cake.",
      price: "$10.00",
      img: "/path-to-chocolate-cake.jpg",
    },
    {
      name: "Butter Cake",
      description: "Soft and rich butter cake.",
      price: "$8.00",
      img: "/path-to-butter-cake.jpg",
    },
    {
      name: "Cup Cake",
      description: "Sweet and delightful cupcakes.",
      price: "$5.00",
      img: "/path-to-cup-cake.jpg",
    },
    {
      name: "Icing Cake",
      description: "Beautifully decorated icing cake.",
      price: "$12.00",
      img: "/path-to-icing-cake.jpg",
    },
  ],
  premade: [
    {
      name: "Kottu Roti",
      description: "Sri Lankan chopped flatbread.",
      price: "$8.00",
      img: "/path-to-kottu-image.jpg",
    },
    {
      name: "Gothamba Roti",
      description: "Traditional flatbread.",
      price: "$4.00",
      img: "/path-to-roti-image.jpg",
    },
    {
      name: "Parata Roti",
      description: "Flaky and delicious parata.",
      price: "$5.00",
      img: "/path-to-parata-image.jpg",
    },
    {
      name: "Lasagna Sheets",
      description: "Perfect for homemade lasagna.",
      price: "$6.00",
      img: "/path-to-lasagna-sheets.jpg",
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
          <img src="/path-to-sweets-image.jpg" alt="Sweets" />
          <h2>Sweets</h2>
        </div>
        <div
          className="category"
          onClick={() => setSelectedCategory("premade")}
        >
          <img src="/path-to-premade-image.jpg" alt="Pre-made Foods" />
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
    </div>
  );
}

export default Menu;
