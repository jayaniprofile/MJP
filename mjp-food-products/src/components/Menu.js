import React, { useState } from "react";
import "../style/Menu.css";
import Header from "./Header/Header";
import Footer from "./Footer";
import sw1 from "../images/sw1.jpeg";
import pre1 from "../images/pre1.jpeg";
import MenuBanner from "../images/MenuBanner.png";
import { menuItems, menuCategories } from "../common/content";

function Menu() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  console.log("selectedCategory", selectedCategory);
  const CategoryCard = ({ id, image, altText, title, onclickMethod }) => {
    console.log("id", id);
    console.log("selectedCategory", selectedCategory);
    return (
      <div
        className={selectedCategory === id ? "category selected" : "category"}
        onClick={onclickMethod}
      >
        <img src={image} alt={altText} />
        <h2>{title}</h2>
      </div>
    );
  };
  return (
    <div className="menu">
      <div className="about-banner">
        <img src={MenuBanner} alt="About MJP Food Products" />
      </div>
      <h1>Our Menu</h1>
      <div className="categories">
        {menuCategories.map((category) => (
          <CategoryCard
            key={category.id}
            id={category.id}
            image={category.image}
            altText={category.altText}
            title={category.title}
            onclickMethod={() => setSelectedCategory(category.id)}
          />
        ))}
      </div>
      {selectedCategory && (
        <div className="items">
          {menuItems[selectedCategory].map((item) => (
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
